import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const generatedAt = new Date().toISOString();
const targetCount = Number(process.env.AGENT_HARNESS_TARGET_COUNT || 1200);
const outputDataFile = "data/claude-codex-harness-materials-1000.json";
const outputReportFile = "reports/agent-harness/00-claude-code-codex-harness-materials-1000.md";
const outputSetupGuideFile = "reports/agent-harness/codex-harness-setup-guide.md";

const sourceBriefs = [
  {
    title: "Claude Code Docs llms.txt",
    url: "https://code.claude.com/docs/llms.txt",
    source: "Anthropic",
    materialType: "official-doc-index",
    categories: ["claude-code-use-case", "tool-setting", "harness"]
  },
  {
    title: "How Anthropic teams use Claude Code",
    url: "https://www-cdn.anthropic.com/58284b19e702b49db9302d5b6f135ad8871e7658.pdf",
    source: "Anthropic",
    materialType: "official-use-case-report",
    categories: ["claude-code-use-case", "workflow", "enterprise-adoption"]
  },
  {
    title: "Claude Code power user tips",
    url: "https://support.claude.com/en/articles/14554000-claude-code-power-user-tips",
    source: "Anthropic Support",
    materialType: "official-practice-guide",
    categories: ["claude-code-use-case", "workflow", "parallel-work"]
  },
  {
    title: "How we contain Claude across products",
    url: "https://www.anthropic.com/engineering/how-we-contain-claude",
    source: "Anthropic Engineering",
    materialType: "engineering-blog",
    categories: ["security", "sandbox", "human-in-the-loop"]
  },
  {
    title: "Claude Code GitHub Actions",
    url: "https://code.claude.com/docs/en/github-actions.md",
    source: "Anthropic",
    materialType: "official-ci-doc",
    categories: ["ci-automation", "claude-code-use-case", "tool-setting"]
  },
  {
    title: "OpenAI Codex Manual",
    url: "https://developers.openai.com/codex/codex-manual.md",
    source: "OpenAI",
    materialType: "official-manual",
    categories: ["codex-harness", "tool-setting", "configuration"]
  },
  {
    title: "Codex Configuration Reference",
    url: "https://developers.openai.com/codex/config-reference",
    source: "OpenAI",
    materialType: "official-reference",
    categories: ["codex-harness", "configuration", "tool-setting"]
  },
  {
    title: "Codex custom instructions with AGENTS.md",
    url: "https://developers.openai.com/codex/guides/agents-md",
    source: "OpenAI",
    materialType: "official-guide",
    categories: ["codex-harness", "agent-instruction"]
  },
  {
    title: "Codex GitHub Action",
    url: "https://developers.openai.com/codex/github-action",
    source: "OpenAI",
    materialType: "official-ci-doc",
    categories: ["codex-harness", "ci-automation", "security"]
  },
  {
    title: "Microsoft Security: Claude Code GitHub Action case",
    url: "https://www.microsoft.com/en-us/security/blog/2026/06/05/securing-ci-cd-in-agentic-world-claude-code-github-action-case/",
    source: "Microsoft Security",
    materialType: "security-case-study",
    categories: ["security", "ci-automation", "prompt-injection"]
  },
  {
    title: "anthropics/claude-code-action",
    url: "https://github.com/anthropics/claude-code-action",
    source: "GitHub",
    materialType: "open-source-repository",
    categories: ["claude-code-use-case", "ci-automation"]
  },
  {
    title: "openai/codex",
    url: "https://github.com/openai/codex",
    source: "GitHub",
    materialType: "open-source-repository",
    categories: ["codex-harness", "coding-agent"]
  },
  {
    title: "openai/codex-action",
    url: "https://github.com/openai/codex-action",
    source: "GitHub",
    materialType: "open-source-repository",
    categories: ["codex-harness", "ci-automation"]
  },
  {
    title: "RoggeOhta/awesome-codex-cli",
    url: "https://github.com/RoggeOhta/awesome-codex-cli",
    source: "GitHub",
    materialType: "curated-list",
    categories: ["codex-harness", "ecosystem"]
  },
  {
    title: "HKUDS/OpenHarness",
    url: "https://github.com/HKUDS/OpenHarness",
    source: "GitHub",
    materialType: "open-source-repository",
    categories: ["evaluation-harness", "agent-harness"]
  },
  {
    title: "prempti Codex hook interceptor",
    url: "https://github.com/falcosecurity/prempti/blob/main/hooks/codex/README.md",
    source: "GitHub",
    materialType: "open-source-hook-example",
    categories: ["codex-harness", "hooks-permissions-sandbox", "security"]
  },
  {
    title: "Shipyard Codex CLI cheatsheet",
    url: "https://shipyard.build/blog/codex-cli-cheat-sheet/",
    source: "Shipyard",
    materialType: "technical-blog",
    categories: ["codex-harness", "tool-setting"]
  },
  {
    title: "Claude Code features and settings reference 2026",
    url: "https://hidekazu-konishi.com/entry/claude_code_features_settings_reference_2026.html",
    source: "Technical blog",
    materialType: "technical-blog",
    categories: ["claude-code-use-case", "tool-setting"]
  },
  {
    title: "Agentic AI Foundation / MCP open governance coverage",
    url: "https://www.itpro.com/software/open-source/anthropic-says-mcp-will-stay-open-neutral-and-community-driven-after-donating-project-to-linux-foundation",
    source: "ITPro",
    materialType: "industry-report",
    categories: ["mcp-tooling", "open-standards"]
  }
];

const repoSearchQueries = [
  { label: "claude-code", q: "claude code stars:>5", sort: "stars", weight: 90 },
  { label: "claude-code-mcp", q: "claude code mcp stars:>1", sort: "updated", weight: 92 },
  { label: "claude-code-action", q: "claude code action stars:>1", sort: "updated", weight: 94 },
  { label: "claude-code-hooks", q: "claude code hooks stars:>1", sort: "updated", weight: 92 },
  { label: "claude-code-settings", q: "claude code settings stars:>1", sort: "updated", weight: 90 },
  { label: "claude-code-skills", q: "claude code skills stars:>1", sort: "updated", weight: 88 },
  { label: "claude-code-agents", q: "claude code agents stars:>1", sort: "updated", weight: 88 },
  { label: "codex-cli", q: "codex cli stars:>1", sort: "updated", weight: 90 },
  { label: "openai-codex", q: "openai codex stars:>1", sort: "updated", weight: 90 },
  { label: "codex-action", q: "codex action stars:>1", sort: "updated", weight: 92 },
  { label: "codex-mcp", q: "codex mcp stars:>1", sort: "updated", weight: 90 },
  { label: "codex-hooks", q: "codex hooks stars:>1", sort: "updated", weight: 90 },
  { label: "agents-md", q: "AGENTS.md stars:>1", sort: "updated", weight: 86 },
  { label: "claude-md", q: "CLAUDE.md stars:>1", sort: "updated", weight: 86 },
  { label: "agent-harness", q: "agent harness stars:>1", sort: "updated", weight: 84 },
  { label: "coding-agent-harness", q: "coding agent harness stars:>1", sort: "updated", weight: 86 },
  { label: "swe-bench-harness", q: "swe-bench harness stars:>1", sort: "updated", weight: 84 },
  { label: "openhands-harness", q: "openhands harness stars:>1", sort: "updated", weight: 82 },
  { label: "mcp-coding-agent", q: "mcp coding agent stars:>1", sort: "updated", weight: 88 },
  { label: "agent-tools-config", q: "agent tools config stars:>1", sort: "updated", weight: 82 }
];

const codeSearchQueries = [
  { label: "claude-md-file", q: "filename:CLAUDE.md", weight: 115 },
  { label: "agents-md-file", q: "filename:AGENTS.md", weight: 115 },
  { label: "claude-settings-json", q: "filename:settings.json path:.claude", weight: 112 },
  { label: "claude-mcp-json", q: "filename:mcp.json", weight: 108 },
  { label: "codex-config-toml", q: "filename:config.toml path:.codex", weight: 112 },
  { label: "claude-code-action-workflow", q: "claude-code-action path:.github/workflows", weight: 118 },
  { label: "codex-action-workflow", q: "codex-action path:.github/workflows", weight: 118 },
  { label: "codex-exec-workflow", q: "\"codex exec\" path:.github/workflows", weight: 116 }
];

const relevantManualHeadings = /AGENTS|config|MCP|hook|approval|sandbox|permission|exec|GitHub Action|SDK|non-interactive|skills|plugins|subagents|automation|worktree|review|rules|requirements|security/i;

function ghApi(endpoint) {
  try {
    return JSON.parse(execFileSync("gh", ["api", endpoint], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
      maxBuffer: 80 * 1024 * 1024
    }));
  } catch (error) {
    return { error: String(error?.stderr || error?.message || error).slice(0, 1000) };
  }
}

async function fetchText(url) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "ai-coding-research-browser" } });
    if (!res.ok) return "";
    return await res.text();
  } catch {
    return "";
  }
}

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

function slug(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

function excerpt(text, max = 520) {
  return String(text || "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`[\]()|:-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function classify(text, url = "", label = "") {
  const hay = `${text}\n${url}\n${label}`.toLowerCase();
  const categories = [];
  const add = (category, re) => {
    if (re.test(hay)) categories.push(category);
  };
  add("claude-code-use-case", /claude[ -]?code|claude\.md|\.claude/);
  add("codex-harness", /codex|agents\.md|\.codex|openai\/codex/);
  add("agent-instruction", /agents\.md|claude\.md|memory|instructions?|rules?|project guidance/);
  add("mcp-tooling", /mcp|model context protocol|tool server|tool-search/);
  add("hooks-permissions-sandbox", /hook|permission|approval|sandbox|safety|secret|policy/);
  add("ci-automation", /github action|workflow|ci\/cd|ci-|automation|codex exec|headless|non-interactive/);
  add("sdk-programmatic", /sdk|api|programmatic|agent loop|streaming|structured output/);
  add("skills-subagents", /skill|subagent|plugin|marketplace|agent team|agent view/);
  add("evaluation-harness", /harness|benchmark|swe-bench|eval|evaluation|test gate|quality gate/);
  add("workflow-use-case", /workflow|use case|debug|refactor|review|migration|onboarding|triage/);
  if (!categories.length) categories.push("agent-harness");
  return [...new Set(categories)];
}

function materialBase({ id, title, url, source, materialType, categories, summary, score = 0, extra = {} }) {
  return {
    id,
    title: String(title || "Untitled").trim(),
    url,
    source,
    materialType,
    categories: [...new Set(categories || classify(`${title}\n${summary}`, url))],
    summary: excerpt(summary || title),
    score,
    ...extra
  };
}

async function collectClaudeDocs() {
  const text = await fetchText("https://code.claude.com/docs/llms.txt");
  const materials = [];
  const linkRe = /^- \[([^\]]+)\]\(([^)]+)\):\s*(.+)$/gm;
  let match;
  while ((match = linkRe.exec(text))) {
    const [, title, url, description] = match;
    materials.push(materialBase({
      id: `official:claude:${slug(url)}`,
      title,
      url,
      source: "Anthropic Claude Code Docs",
      materialType: "official-doc",
      categories: classify(`${title}\n${description}`, url),
      summary: description,
      score: 950,
      extra: { provider: "anthropic" }
    }));
  }
  return { text, materials };
}

async function collectCodexManual() {
  const text = await fetchText("https://developers.openai.com/codex/codex-manual.md");
  const materials = [];
  const headingRe = /^(#{2,4})\s+(.+)$/gm;
  const headings = [];
  let match;
  while ((match = headingRe.exec(text))) {
    headings.push({ depth: match[1].length, title: match[2].trim(), index: match.index });
  }
  for (let i = 0; i < headings.length; i += 1) {
    const current = headings[i];
    if (!relevantManualHeadings.test(current.title)) continue;
    const next = headings.slice(i + 1).find((item) => item.depth <= current.depth)?.index || text.length;
    const section = text.slice(current.index, next);
    const sourcePath = section.match(/^Source:\s+\[.+?\]\(([^)]+)\)$/m)?.[1] || "/codex/codex-manual.md";
    const sourceUrl = sourcePath.startsWith("http")
      ? sourcePath
      : `https://developers.openai.com${sourcePath.replace(/\.md$/, "")}`;
    materials.push(materialBase({
      id: `official:codex:${slug(current.title)}:${i}`,
      title: `Codex: ${current.title}`,
      url: sourceUrl,
      source: "OpenAI Codex Manual",
      materialType: "official-manual-section",
      categories: classify(`${current.title}\n${section}`, sourceUrl),
      summary: section,
      score: 940,
      extra: { provider: "openai", headingDepth: current.depth }
    }));
  }
  return { text, materials };
}

function collectStaticBriefs() {
  return sourceBriefs.map((item, index) => materialBase({
    id: `brief:${slug(item.title)}:${index}`,
    title: item.title,
    url: item.url,
    source: item.source,
    materialType: item.materialType,
    categories: item.categories,
    summary: `${item.source} source for ${item.title}`,
    score: 980,
    extra: { curated: true }
  }));
}

function normalizeRepo(item, query) {
  const text = `${item.full_name}\n${item.description || ""}\n${safeArray(item.topics).join(" ")}`;
  return materialBase({
    id: `github-repo:${item.full_name}`,
    title: item.full_name,
    url: item.html_url,
    source: "GitHub repository search",
    materialType: "open-source-repository",
    categories: classify(text, item.html_url, query.label),
    summary: item.description || `${query.label} repository`,
    score: query.weight + Math.log10((item.stargazers_count || 0) + 1) * 12 + (item.fork ? -15 : 0),
    extra: {
      queryLabel: query.label,
      repository: item.full_name,
      stars: item.stargazers_count || 0,
      forks: item.forks_count || 0,
      language: item.language || null,
      pushedAt: item.pushed_at || null,
      updatedAt: item.updated_at || null,
      license: item.license?.spdx_id || item.license?.name || null,
      topics: safeArray(item.topics)
    }
  });
}

function normalizeCode(item, query) {
  const repo = item.repository?.full_name || item.repository?.name || "unknown/repo";
  const text = `${repo}\n${item.path}\n${item.name}\n${query.label}`;
  return materialBase({
    id: `github-code:${repo}:${item.path}:${item.sha || ""}`,
    title: `${repo}/${item.path}`,
    url: item.html_url,
    source: "GitHub code search",
    materialType: "configuration-or-workflow-file",
    categories: classify(text, item.html_url, query.label),
    summary: `${query.label} matched ${item.path}`,
    score: query.weight,
    extra: {
      queryLabel: query.label,
      repository: repo,
      path: item.path,
      sha: item.sha || null
    }
  });
}

function rateLimit() {
  const data = ghApi("/rate_limit");
  return {
    search: data.resources?.search || null,
    codeSearch: data.resources?.code_search || null
  };
}

function searchRepositories() {
  const materials = [];
  const errors = [];
  for (const query of repoSearchQueries) {
    const endpoint = `/search/repositories?q=${encodeURIComponent(query.q)}&sort=${encodeURIComponent(query.sort)}&order=desc&per_page=100&page=1`;
    const data = ghApi(endpoint);
    if (data.error) {
      errors.push({ query: query.label, error: data.error });
      continue;
    }
    for (const item of safeArray(data.items)) materials.push(normalizeRepo(item, query));
    console.error(`[repo-search] ${query.label}: ${safeArray(data.items).length}/${data.total_count ?? "?"}`);
  }
  return { materials, errors };
}

function searchCode(initialRate) {
  const materials = [];
  const errors = [];
  const remaining = initialRate?.codeSearch?.remaining ?? codeSearchQueries.length;
  const allowedQueries = codeSearchQueries.slice(0, Math.max(0, Math.min(remaining, codeSearchQueries.length)));
  for (const query of allowedQueries) {
    const endpoint = `/search/code?q=${encodeURIComponent(query.q)}&per_page=100&page=1`;
    const data = ghApi(endpoint);
    if (data.error) {
      errors.push({ query: query.label, error: data.error });
      continue;
    }
    for (const item of safeArray(data.items)) materials.push(normalizeCode(item, query));
    console.error(`[code-search] ${query.label}: ${safeArray(data.items).length}/${data.total_count ?? "?"}`);
  }
  if (allowedQueries.length < codeSearchQueries.length) {
    errors.push({
      query: "code-search-rate-limit",
      error: `Skipped ${codeSearchQueries.length - allowedQueries.length} code queries because GitHub code_search remaining was ${remaining}.`
    });
  }
  return { materials, errors, attemptedQueries: allowedQueries.length };
}

function addExistingCorpusFallback(materials) {
  const files = [
    "data/global-trending-repositories-500.json",
    "data/korea-trending-repositories-500.json",
    "data/llm-wiki-repositories.json"
  ];
  for (const file of files) {
    if (!existsSync(file)) continue;
    const data = JSON.parse(readFileSync(file, "utf8"));
    for (const repo of safeArray(data.repositories)) {
      const text = `${repo.name}\n${repo.description || ""}\n${safeArray(repo.tags).join(" ")}\n${safeArray(repo.matchedLabels).join(" ")}`;
      if (!/(claude|codex|agent|mcp|harness|openhands|cline|goose|aider|opencode)/i.test(text)) continue;
      materials.push(materialBase({
        id: `existing-corpus:${file}:${repo.name}`,
        title: repo.name,
        url: repo.url || `https://github.com/${repo.name}`,
        source: `Existing corpus: ${file}`,
        materialType: "existing-corpus-cross-reference",
        categories: classify(text, repo.url || "", "existing-corpus"),
        summary: repo.description || "Existing corpus cross-reference",
        score: 60 + (repo.score || 0) / 10 + Math.log10((repo.stars || 0) + 1),
        extra: {
          repository: repo.name,
          stars: repo.stars || 0,
          language: repo.language || null,
          corpusFile: file
        }
      }));
    }
  }
}

function dedupeAndRank(materials) {
  const byKey = new Map();
  for (const item of materials) {
    const key = item.url || item.id;
    const previous = byKey.get(key);
    if (!previous || item.score > previous.score) {
      byKey.set(key, item);
    } else if (previous) {
      previous.categories = [...new Set([...previous.categories, ...item.categories])];
      previous.queryLabel = previous.queryLabel || item.queryLabel;
    }
  }
  return [...byKey.values()].sort((a, b) => (b.score || 0) - (a.score || 0) || a.title.localeCompare(b.title));
}

function countBy(items, keyFn) {
  const counts = new Map();
  for (const item of items) {
    const keys = keyFn(item);
    for (const key of Array.isArray(keys) ? keys : [keys]) {
      if (!key) continue;
      counts.set(key, (counts.get(key) || 0) + 1);
    }
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([key, count]) => ({ key, count }));
}

function table(rows, headers) {
  if (!rows.length) return "_none_\n";
  const safe = (value) => String(value ?? "").replaceAll("|", "\\|").replace(/\n/g, " ");
  const lines = [`| ${headers.join(" | ")} |`, `| ${headers.map(() => "---").join(" | ")} |`];
  for (const row of rows) lines.push(`| ${headers.map((header) => safe(row[header])).join(" | ")} |`);
  return `${lines.join("\n")}\n`;
}

function renderMainReport(payload) {
  const materials = payload.materials;
  const categoryRows = payload.categoryCounts.slice(0, 20).map(({ key, count }) => ({ category: key, count }));
  const typeRows = payload.typeCounts.map(({ key, count }) => ({ type: key, count }));
  const topOfficial = materials.filter((item) => /official|curated|security-case-study|technical-blog/.test(item.materialType)).slice(0, 30);
  const topCode = materials.filter((item) => item.materialType === "configuration-or-workflow-file").slice(0, 40);
  const topRepos = materials.filter((item) => item.materialType === "open-source-repository").slice(0, 60);
  const sourceRows = sourceBriefs.map((item) => ({
    source: item.source,
    title: item.title,
    categories: item.categories.join(", "),
    url: item.url
  }));

  return `# Claude Code / Codex Harness Materials 1000+ Corpus

Generated: ${payload.generatedAt}

## Scope

- Selected materials: ${payload.selectedCount}
- Raw candidates before dedupe: ${payload.rawCandidateCount}
- GitHub repository search queries: ${repoSearchQueries.length}
- GitHub code search queries attempted: ${payload.github.codeSearchAttemptedQueries}
- Official Claude docs parsed: ${payload.officialCounts.claudeDocs}
- Official Codex manual sections parsed: ${payload.officialCounts.codexManualSections}
- Data file: \`${outputDataFile}\`
- Codex setup guide: \`${outputSetupGuideFile}\`

This corpus is a practical research index for Claude Code use cases and Codex-applicable harness/tool setup. It combines official documentation, security case studies, curated ecosystem sources, GitHub repository search, GitHub code search for real instruction/config files, and cross-references from the existing local OSS corpora.

## Collection Caveats

- GitHub code search is rate-limited separately from repository search, so this run used the currently available code-search quota and then filled the rest with repository/source metadata.
- Repository search results are evidence of discoverable public material, not endorsement or quality certification.
- The setup recommendations below prefer official Codex and Claude documentation when they conflict with blogs or examples.

## Category Distribution

${table(categoryRows, ["category", "count"])}

## Material Type Distribution

${table(typeRows, ["type", "count"])}

## Source Seeds

${table(sourceRows, ["source", "title", "categories", "url"])}

## What Claude Code Use Cases Show

- Claude Code is used as an interactive coding agent for codebase exploration, bug fixing, refactoring, testing, code review, CI follow-up, and onboarding workflows.
- The strongest recurring practice is durable project context: \`CLAUDE.md\`, settings, hooks, skills, subagents, and MCP servers encode the workflow outside the prompt.
- Advanced use cases move from a single terminal session to parallel sessions, worktrees, GitHub Actions, Agent SDK programs, and secure sandboxes.
- Security material repeatedly warns that CI agents must not receive untrusted PR text and long-lived secrets in the same process/job boundary.

## Codex Harness Mapping

| Claude Code surface | Codex surface | Practical Codex harness use |
| --- | --- | --- |
| \`CLAUDE.md\` memory/project instructions | \`AGENTS.md\` | Keep repo conventions, test commands, review criteria, and source routing close to the code. |
| \`.claude/settings.json\` | \`.codex/config.toml\` or \`~/.codex/config.toml\` | Set model defaults, sandbox/approval profile, MCP servers, hooks, project doc limits, and feature flags. |
| Claude hooks | Codex hooks | Intercept Bash/tool calls, permission requests, stop events, and post-tool outputs for policy checks and telemetry. |
| Claude MCP | Codex MCP | Attach docs, GitHub, browser, Figma, Sentry, internal runbooks, and search tools with per-tool approval. |
| Claude Code GitHub Action | Codex GitHub Action / \`codex exec\` | Run review, CI failure triage, release notes, migration planning, and patch generation in controlled CI. |
| Claude Agent SDK | Codex SDK / non-interactive mode | Programmatically start threads, choose sandbox, capture structured output, and resume automation runs. |
| Skills/subagents/plugins | Skills/subagents/plugins | Package repeatable workflows and specialized roles without bloating every prompt. |

## Recommended Codex Harness Baseline

1. Put stable repo behavior in \`AGENTS.md\`: build/test commands, review rules, architecture map, source scan routes, and “what not to touch.”
2. Put execution policy in \`.codex/config.toml\`: default \`workspace-write\` sandbox, \`on-request\` approvals, project doc limits, and only required MCP servers.
3. Add one PreToolUse hook for shell guardrails and one PostToolUse hook for validation summaries. Keep hooks small and auditable.
4. For CI, use \`openai/codex-action@v1\` or \`codex exec\` with API credentials scoped to the single Codex step, not job-level environment variables.
5. For eval harnesses, use \`codex exec --json\` plus an output schema so downstream scripts can score whether the agent found files, ran tests, produced a patch, or stopped safely.
6. Treat MCP tools as capability boundaries. Enable only the tools needed for the task and set prompt/approval mode for powerful write tools.

## Top Official / Curated Materials

${table(topOfficial.map((item) => ({
    title: item.title,
    type: item.materialType,
    categories: item.categories.slice(0, 4).join(", "),
    url: item.url
  })), ["title", "type", "categories", "url"])}

## Top Configuration / Workflow File Evidence

${table(topCode.map((item) => ({
    title: item.title,
    query: item.queryLabel,
    categories: item.categories.slice(0, 4).join(", "),
    url: item.url
  })), ["title", "query", "categories", "url"])}

## Top Open Source Repositories

${table(topRepos.map((item) => ({
    repo: item.repository || item.title,
    stars: item.stars || 0,
    query: item.queryLabel || "",
    categories: item.categories.slice(0, 4).join(", "),
    url: item.url
  })), ["repo", "stars", "query", "categories", "url"])}

## Search Queries

${table(repoSearchQueries.map((query) => ({ type: "repo", label: query.label, q: query.q })), ["type", "label", "q"])}

${table(codeSearchQueries.map((query) => ({ type: "code", label: query.label, q: query.q })), ["type", "label", "q"])}

## Next Use

Use the JSON corpus as the browsing/search source, and use \`${outputSetupGuideFile}\` as the operational checklist for bringing the same practices into a Codex project.
`;
}

function renderSetupGuide(payload) {
  const topMcp = payload.materials.filter((item) => item.categories.includes("mcp-tooling")).slice(0, 12);
  const topSecurity = payload.materials.filter((item) => item.categories.includes("security") || item.categories.includes("hooks-permissions-sandbox")).slice(0, 12);
  return `# Codex Harness Setup Guide from Claude Code Patterns

Generated: ${payload.generatedAt}

This guide translates the Claude Code patterns in the 1000+ material corpus into Codex settings you can use as a repeatable harness.

## 1. Repository Instructions

Create \`AGENTS.md\` at the repo root. Keep it short and operational.

\`\`\`md
# AGENTS.md

## Source routing
- Read README, package manifests, and architecture docs before editing.
- Use rg for source search.
- Prefer existing local helper APIs and tests.

## Verification
- For JavaScript/TypeScript changes, run npm test or the nearest package test command.
- For docs/data category changes, run npm run build:categories.
- Do not mark work complete until generated category files and report counts match the requested scope.

## Safety
- Do not commit secrets, credentials, auth tokens, or local Codex state.
- Do not run destructive git commands unless explicitly requested.
\`\`\`

## 2. Project Codex Config

Use a project-scoped config only after the repo is trusted. Keep provider/auth settings in user-level config.

\`\`\`toml
# .codex/config.toml
approval_policy = "on-request"
sandbox_mode = "workspace-write"
project_doc_max_bytes = 65536
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]

[sandbox_workspace_write]
network_access = false

[features]
hooks = true

[mcp_servers.context7]
command = "npx"
args = ["-y", "@upstash/context7-mcp"]
enabled = true
required = false
default_tools_approval_mode = "prompt"
\`\`\`

## 3. Hook Guardrails

Use hooks for small checks: dangerous shell commands, accidental secret prompts, validation reminders, and audit logging.

\`\`\`toml
[[hooks.PreToolUse]]
matcher = "^Bash$"

[[hooks.PreToolUse.hooks]]
type = "command"
command = '/usr/bin/python3 "$(git rev-parse --show-toplevel)/.codex/hooks/pre_tool_use_policy.py"'
timeout = 30
statusMessage = "Checking Bash command"
\`\`\`

Minimal policy hook:

\`\`\`python
#!/usr/bin/env python3
import json
import re
import sys

event = json.load(sys.stdin)
command = json.dumps(event)
blocked = [
    r"git\\s+reset\\s+--hard",
    r"rm\\s+-rf\\s+/",
    r"OPENAI_API_KEY=",
    r"CODEX_API_KEY=",
]

if any(re.search(pattern, command, re.I) for pattern in blocked):
    print(json.dumps({"decision": "block", "reason": "Blocked by local Codex harness policy."}))
else:
    print(json.dumps({"decision": "allow"}))
\`\`\`

## 4. Non-Interactive Harness

Use \`codex exec\` when the job needs stable logs, JSONL events, and machine-readable output.

\`\`\`bash
codex exec --json \\
  --sandbox workspace-write \\
  --output-schema .github/codex/schemas/review-result.schema.json \\
  -o .codex-runs/review-result.json \\
  "Review the current diff. Run the documented tests. Return risks, files inspected, commands run, and pass/fail."
\`\`\`

## 5. GitHub Action Split

Use one job to let Codex generate a patch artifact with read-only repository credentials and another job to open the PR. Keep OpenAI credentials scoped to the Codex step only.

\`\`\`yaml
name: Codex review
on:
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  codex_review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
    steps:
      - uses: actions/checkout@v5
        with:
          persist-credentials: false
      - uses: openai/codex-action@v1
        with:
          openai-api-key: \${{ secrets.OPENAI_API_KEY }}
          prompt-file: .github/codex/prompts/review.md
          sandbox: read-only
          output-file: codex-review.md
\`\`\`

## 6. Evaluation Harness Shape

Store a small benchmark set in \`.github/codex/tasks/*.md\`:

- source-scan task: must identify entry points, config, tests, and risky files.
- bugfix task: must reproduce failure, patch minimal files, rerun test.
- review task: must produce findings with file references and severity.
- migration task: must produce plan, diff summary, and rollback note.

Score each run on:

- Did it load \`AGENTS.md\` and relevant docs?
- Did it use MCP only when the task needed external state?
- Did hooks block dangerous commands?
- Did it run the required tests?
- Did the final JSON match schema?
- Did the patch avoid unrelated changes?

## Source Patterns Behind This Guide

${table(topMcp.map((item) => ({ title: item.title, type: item.materialType, url: item.url })), ["title", "type", "url"])}

${table(topSecurity.map((item) => ({ title: item.title, type: item.materialType, url: item.url })), ["title", "type", "url"])}
`;
}

function writeExamples() {
  const files = [
    {
      file: "examples/codex-harness/project/AGENTS.md",
      content: `# AGENTS.md

## Working Agreement

- Read this file before editing.
- Use existing project commands and local conventions.
- Run the smallest relevant verification command before finishing.
- Keep generated artifacts out of commits unless the task explicitly asks for them.

## Source Scan Route

- Start with README and package manifests.
- Use rg for symbol and text search.
- Check docs, tests, workflows, and config before modifying shared code.
`
    },
    {
      file: "examples/codex-harness/project/.codex/config.toml",
      content: `approval_policy = "on-request"
sandbox_mode = "workspace-write"
project_doc_max_bytes = 65536
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]

[sandbox_workspace_write]
network_access = false

[features]
hooks = true

[mcp_servers.context7]
command = "npx"
args = ["-y", "@upstash/context7-mcp"]
enabled = true
required = false
default_tools_approval_mode = "prompt"

[[hooks.PreToolUse]]
matcher = "^Bash$"

[[hooks.PreToolUse.hooks]]
type = "command"
command = '/usr/bin/python3 "$(git rev-parse --show-toplevel)/.codex/hooks/pre_tool_use_policy.py"'
timeout = 30
statusMessage = "Checking Bash command"
`
    },
    {
      file: "examples/codex-harness/project/.codex/hooks/pre_tool_use_policy.py",
      content: `#!/usr/bin/env python3
import json
import re
import sys

event = json.load(sys.stdin)
payload = json.dumps(event)
blocked = [
    r"git\\s+reset\\s+--hard",
    r"rm\\s+-rf\\s+/",
    r"OPENAI_API_KEY=",
    r"CODEX_API_KEY=",
]

if any(re.search(pattern, payload, re.I) for pattern in blocked):
    print(json.dumps({"decision": "block", "reason": "Blocked by local Codex harness policy."}))
else:
    print(json.dumps({"decision": "allow"}))
`
    },
    {
      file: "examples/codex-harness/project/.github/codex/prompts/review.md",
      content: `Review the current pull request.

Return:

- prioritized findings with file references
- tests or checks inspected
- missing verification
- whether any issue should block merge

Do not modify files.
`
    },
    {
      file: "examples/codex-harness/project/.github/workflows/codex-review.yml",
      content: `name: Codex review

on:
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  codex_review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
    steps:
      - uses: actions/checkout@v5
        with:
          persist-credentials: false
      - uses: openai/codex-action@v1
        with:
          openai-api-key: \${{ secrets.OPENAI_API_KEY }}
          prompt-file: .github/codex/prompts/review.md
          sandbox: read-only
          output-file: codex-review.md
`
    }
  ];

  for (const item of files) {
    mkdirSync(path.dirname(item.file), { recursive: true });
    writeFileSync(item.file, item.content);
  }
}

const initialRate = rateLimit();
const staticMaterials = collectStaticBriefs();
const [claudeDocs, codexManual] = await Promise.all([collectClaudeDocs(), collectCodexManual()]);
const repoResults = searchRepositories();
const codeResults = searchCode(initialRate);

const rawMaterials = [
  ...staticMaterials,
  ...claudeDocs.materials,
  ...codexManual.materials,
  ...repoResults.materials,
  ...codeResults.materials
];
addExistingCorpusFallback(rawMaterials);

const ranked = dedupeAndRank(rawMaterials);
const selected = ranked.slice(0, Math.max(targetCount, 1000));
const finalRate = rateLimit();

const payload = {
  generatedAt,
  targetCount,
  selectedCount: selected.length,
  rawCandidateCount: rawMaterials.length,
  uniqueCandidateCount: ranked.length,
  outputDataFile,
  outputReportFile,
  outputSetupGuideFile,
  officialCounts: {
    staticBriefs: staticMaterials.length,
    claudeDocs: claudeDocs.materials.length,
    codexManualSections: codexManual.materials.length
  },
  github: {
    repoSearchQueries,
    codeSearchQueries,
    codeSearchAttemptedQueries: codeResults.attemptedQueries,
    errors: [...repoResults.errors, ...codeResults.errors],
    initialRate,
    finalRate
  },
  categoryCounts: countBy(selected, (item) => item.categories),
  typeCounts: countBy(selected, (item) => item.materialType),
  sourceCounts: countBy(selected, (item) => item.source),
  materials: selected
};

if (payload.selectedCount < 1000) {
  throw new Error(`Only collected ${payload.selectedCount} unique materials; expected at least 1000.`);
}

mkdirSync(path.dirname(outputDataFile), { recursive: true });
mkdirSync(path.dirname(outputReportFile), { recursive: true });
writeFileSync(outputDataFile, `${JSON.stringify(payload, null, 2)}\n`);
writeFileSync(outputReportFile, `${renderMainReport(payload).trimEnd()}\n`);
writeFileSync(outputSetupGuideFile, `${renderSetupGuide(payload).trimEnd()}\n`);
writeExamples();

console.error(`agent harness materials: selected=${payload.selectedCount} raw=${payload.rawCandidateCount} unique=${payload.uniqueCandidateCount}`);
console.error(`reports: ${outputReportFile}, ${outputSetupGuideFile}`);
