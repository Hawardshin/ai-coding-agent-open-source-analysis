const state = {
  docs: [],
  filtered: [],
  query: "",
  type: "all",
  category: "all",
  sort: "relevance",
  selectedId: null
};

const els = {
  search: document.querySelector("#searchInput"),
  typeFilters: document.querySelector("#typeFilters"),
  category: document.querySelector("#categorySelect"),
  sort: document.querySelector("#sortSelect"),
  stats: document.querySelector("#stats"),
  trends: document.querySelector("#trends"),
  results: document.querySelector("#results"),
  resultTitle: document.querySelector("#resultTitle"),
  reader: document.querySelector("#reader"),
  clear: document.querySelector("#clearButton")
};

const typeLabels = {
  all: "전체",
  report: "보고서",
  paper: "논문",
  repository: "오픈소스",
  data: "데이터"
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function inlineMarkdown(value) {
  let html = escapeHtml(value);
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
  return html;
}

function renderMarkdown(markdown) {
  const lines = String(markdown || "").split("\n");
  const out = [];
  let inCode = false;
  let code = [];
  let listType = null;

  function closeList() {
    if (listType) {
      out.push(`</${listType}>`);
      listType = null;
    }
  }

  function flushCode() {
    out.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
    code = [];
  }

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (line.trim().startsWith("```")) {
      if (inCode) {
        flushCode();
        inCode = false;
      } else {
        closeList();
        inCode = true;
      }
      continue;
    }
    if (inCode) {
      code.push(line);
      continue;
    }

    if (!line.trim()) {
      closeList();
      continue;
    }

    const next = lines[i + 1] || "";
    if (line.includes("|") && /^\s*\|?[\s:-]+\|[\s|:-]+\s*$/.test(next)) {
      closeList();
      const tableRows = [];
      tableRows.push(line);
      i += 1;
      while (lines[i + 1]?.includes("|")) {
        i += 1;
        tableRows.push(lines[i]);
      }
      const [head, ...body] = tableRows.map((row) => row.split("|").map((cell) => cell.trim()).filter(Boolean));
      out.push("<table><thead><tr>");
      for (const cell of head) out.push(`<th>${inlineMarkdown(cell)}</th>`);
      out.push("</tr></thead><tbody>");
      for (const row of body) {
        out.push("<tr>");
        for (const cell of row) out.push(`<td>${inlineMarkdown(cell)}</td>`);
        out.push("</tr>");
      }
      out.push("</tbody></table>");
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      closeList();
      const level = Math.min(heading[1].length, 3);
      out.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }

    const bullet = line.match(/^\s*[-*]\s+(.+)$/);
    if (bullet) {
      if (listType !== "ul") {
        closeList();
        listType = "ul";
        out.push("<ul>");
      }
      out.push(`<li>${inlineMarkdown(bullet[1])}</li>`);
      continue;
    }

    const ordered = line.match(/^\s*\d+\.\s+(.+)$/);
    if (ordered) {
      if (listType !== "ol") {
        closeList();
        listType = "ol";
        out.push("<ol>");
      }
      out.push(`<li>${inlineMarkdown(ordered[1])}</li>`);
      continue;
    }

    closeList();
    if (line.startsWith(">")) {
      out.push(`<blockquote>${inlineMarkdown(line.replace(/^>\s?/, ""))}</blockquote>`);
    } else {
      out.push(`<p>${inlineMarkdown(line)}</p>`);
    }
  }

  closeList();
  if (inCode) flushCode();
  return out.join("\n");
}

function tokenize(query) {
  return query.toLowerCase().split(/\s+/).map((token) => token.trim()).filter(Boolean);
}

function scoreDoc(doc, tokens) {
  if (tokens.length === 0) return 1;
  const title = String(doc.title || "").toLowerCase();
  const path = String(doc.path || "").toLowerCase();
  const content = String(doc.content || "").toLowerCase();
  let score = 0;
  for (const token of tokens) {
    if (title.includes(token)) score += 12;
    if (path.includes(token)) score += 5;
    if (content.includes(token)) score += 2;
  }
  return score;
}

function resultMeta(doc) {
  const parts = [typeLabels[doc.type] || doc.type, doc.category];
  if (doc.year) parts.push(String(doc.year));
  if (doc.citedByCount) parts.push(`인용 ${doc.citedByCount}`);
  if (doc.stars) parts.push(`stars ${doc.stars.toLocaleString()}`);
  return parts;
}

function highlight(text, tokens) {
  let html = escapeHtml(text);
  for (const token of tokens.filter((value) => value.length > 1)) {
    const pattern = new RegExp(`(${token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "ig");
    html = html.replace(pattern, "<mark>$1</mark>");
  }
  return html;
}

function applyFilters() {
  const tokens = tokenize(state.query);
  let docs = state.docs.map((doc) => ({ ...doc, score: scoreDoc(doc, tokens) }));
  docs = docs.filter((doc) => doc.score > 0);
  if (state.type !== "all") docs = docs.filter((doc) => doc.type === state.type);
  if (state.category !== "all") docs = docs.filter((doc) => doc.category === state.category || doc.categories?.includes(state.category));

  docs.sort((a, b) => {
    if (state.sort === "title") return a.title.localeCompare(b.title);
    if (state.sort === "year") return (b.year || 0) - (a.year || 0) || a.title.localeCompare(b.title);
    if (state.sort === "citations") return (b.citedByCount || 0) - (a.citedByCount || 0) || a.title.localeCompare(b.title);
    if (state.sort === "stars") return (b.stars || 0) - (a.stars || 0) || a.title.localeCompare(b.title);
    return b.score - a.score || (b.citedByCount || b.stars || 0) - (a.citedByCount || a.stars || 0);
  });

  state.filtered = docs;
  renderResults();
}

function renderResults() {
  const tokens = tokenize(state.query);
  els.resultTitle.textContent = `${state.filtered.length.toLocaleString()}개 항목`;
  els.results.innerHTML = "";

  for (const doc of state.filtered.slice(0, 250)) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `result-item ${doc.id === state.selectedId ? "active" : ""}`;
    const meta = resultMeta(doc).map((part, index) => `<span class="pill ${index === 0 ? doc.type : ""}">${escapeHtml(part)}</span>`).join("");
    button.innerHTML = `
      <div class="result-meta">${meta}</div>
      <h3>${highlight(doc.title, tokens)}</h3>
      <p>${highlight(doc.summary || doc.path || "", tokens)}</p>
    `;
    button.addEventListener("click", () => selectDoc(doc.id, true));
    els.results.appendChild(button);
  }

  if (state.filtered.length > 250) {
    const note = document.createElement("div");
    note.className = "result-item";
    note.innerHTML = `<p>상위 250개만 표시 중입니다. 검색어를 더 구체적으로 입력하세요.</p>`;
    els.results.appendChild(note);
  }
}

function renderReader(doc) {
  if (!doc) {
    els.reader.innerHTML = `
      <div class="empty-state">
        <h2>문서를 찾을 수 없습니다</h2>
        <p>검색 조건을 초기화하거나 다른 항목을 선택하세요.</p>
      </div>
    `;
    return;
  }

  const meta = resultMeta(doc).map((part) => `<span class="pill ${doc.type}">${escapeHtml(part)}</span>`).join("");
  const externalLink = doc.url ? `<a href="${escapeHtml(doc.url)}" target="_blank" rel="noreferrer">${escapeHtml(doc.url)}</a>` : "";
  let content = "";

  if (doc.type === "report") {
    content = renderMarkdown(doc.content);
  } else if (doc.type === "paper") {
    content = `
      <p><strong>저자:</strong> ${escapeHtml((doc.authors || []).join(", ") || "N/A")}</p>
      <p><strong>출처:</strong> ${escapeHtml(doc.sourceName || "N/A")}</p>
      <p><strong>연도:</strong> ${escapeHtml(doc.year || "N/A")} · <strong>인용:</strong> ${escapeHtml(doc.citedByCount || 0)}</p>
      <h2>초록/요약 샘플</h2>
      <p>${escapeHtml(doc.summary || doc.content || "")}</p>
      <h2>개념 태그</h2>
      <p>${escapeHtml((doc.concepts || []).join(", ") || "N/A")}</p>
    `;
  } else if (doc.type === "repository") {
    content = `
      <p>${escapeHtml(doc.summary || "")}</p>
      <p><strong>언어:</strong> ${escapeHtml(doc.language || "N/A")} · <strong>라이선스:</strong> ${escapeHtml(doc.license || "N/A")}</p>
      <p><strong>Stars:</strong> ${escapeHtml(doc.stars || 0)} · <strong>Forks:</strong> ${escapeHtml(doc.forks || 0)}</p>
      <p><strong>로컬 경로:</strong> <code>${escapeHtml(doc.path || "")}</code></p>
    `;
  } else {
    content = `
      <p>${escapeHtml(doc.summary || "")}</p>
      <p><strong>파일:</strong> <code>${escapeHtml(doc.path || "")}</code></p>
    `;
  }

  els.reader.innerHTML = `
    <header class="reader-header">
      <div class="result-meta">${meta}</div>
      <h2>${escapeHtml(doc.title)}</h2>
      <div>${externalLink}</div>
      <div><code>${escapeHtml(doc.path || "")}</code></div>
    </header>
    <div class="reader-content">${content}</div>
  `;
}

function selectDoc(id, updateHash = false) {
  state.selectedId = id;
  const doc = state.docs.find((item) => item.id === id);
  renderResults();
  renderReader(doc);
  if (updateHash) {
    const params = new URLSearchParams();
    params.set("doc", id);
    if (state.query) params.set("q", state.query);
    history.replaceState(null, "", `#${params.toString()}`);
  }
}

function renderFilters() {
  const types = ["all", "report", "paper", "repository", "data"];
  els.typeFilters.innerHTML = "";
  for (const type of types) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `segment-button ${state.type === type ? "active" : ""}`;
    button.textContent = typeLabels[type] || type;
    button.addEventListener("click", () => {
      state.type = type;
      renderFilters();
      applyFilters();
    });
    els.typeFilters.appendChild(button);
  }

  const categories = Array.from(new Set(state.docs.flatMap((doc) => [doc.category, ...(doc.categories || [])]).filter(Boolean))).sort();
  els.category.innerHTML = `<option value="all">전체 카테고리</option>${categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("")}`;
  els.category.value = state.category;
}

function renderStats(stats) {
  const typeRows = Object.entries(stats.byType || {}).map(([key, value]) => `<div class="stat-row"><span>${escapeHtml(typeLabels[key] || key)}</span><strong>${Number(value).toLocaleString()}</strong></div>`).join("");
  els.stats.innerHTML = `
    <div class="stat-row"><span>전체 인덱스</span><strong>${Number(stats.totalDocuments || 0).toLocaleString()}</strong></div>
    ${typeRows}
    <div class="stat-row"><span>생성 시각</span><strong>${escapeHtml(new Date(stats.generatedAt).toLocaleString("ko-KR"))}</strong></div>
  `;
}

function renderTrends(trends) {
  if (!els.trends) return;
  els.trends.innerHTML = "";
  for (const trend of trends.slice(0, 8)) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "trend-button";
    button.innerHTML = `
      <strong>${escapeHtml(trend.title)}</strong>
      <span>${escapeHtml(trend.summary)}</span>
      <em>${escapeHtml((trend.repos || []).slice(0, 3).join(" · "))}</em>
    `;
    button.addEventListener("click", () => {
      state.query = trend.query || trend.title;
      state.type = trend.type || "all";
      state.category = trend.category || "all";
      els.search.value = state.query;
      renderFilters();
      applyFilters();
      if (state.filtered[0]) selectDoc(state.filtered[0].id, true);
    });
    els.trends.appendChild(button);
  }
}

function readHash() {
  const params = new URLSearchParams(location.hash.replace(/^#/, ""));
  state.query = params.get("q") || "";
  state.selectedId = params.get("doc");
  els.search.value = state.query;
}

async function boot() {
  const res = await fetch("assets/search-index.json");
  const payload = await res.json();
  const trendsRes = await fetch("assets/trends.json").catch(() => null);
  const trends = trendsRes?.ok ? await trendsRes.json() : [];
  state.docs = payload.docs || [];
  readHash();
  renderFilters();
  renderStats(payload.stats || {});
  renderTrends(trends);
  applyFilters();

  if (state.selectedId) {
    selectDoc(state.selectedId, false);
  } else if (state.filtered[0]) {
    selectDoc(state.filtered[0].id, true);
  }
}

els.search.addEventListener("input", () => {
  state.query = els.search.value;
  applyFilters();
});

els.category.addEventListener("change", () => {
  state.category = els.category.value;
  applyFilters();
});

els.sort.addEventListener("change", () => {
  state.sort = els.sort.value;
  applyFilters();
});

els.clear.addEventListener("click", () => {
  state.query = "";
  state.type = "all";
  state.category = "all";
  state.sort = "relevance";
  els.search.value = "";
  els.sort.value = "relevance";
  renderFilters();
  applyFilters();
  if (state.filtered[0]) selectDoc(state.filtered[0].id, true);
});

boot().catch((error) => {
  els.reader.innerHTML = `<div class="empty-state"><h2>인덱스를 불러오지 못했습니다</h2><p>${escapeHtml(error.message)}</p></div>`;
});
