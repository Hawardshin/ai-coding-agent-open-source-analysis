import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const repoData = JSON.parse(readFileSync("data/llm-wiki-repositories.json", "utf8"));
const analysisData = JSON.parse(readFileSync("data/llm-wiki-structure-analysis-100.json", "utf8"));
const repos = repoData.repositories || [];
const analyses = analysisData.analyses || [];
const byName = new Map(analyses.map((analysis) => [analysis.name.toLowerCase(), analysis]));

function safe(value) {
  return String(value ?? "").replaceAll("|", "\\|").replace(/\n/g, " ");
}

function table(rows, headers) {
  if (!rows.length) return "_없음_\n";
  const lines = [];
  lines.push(`| ${headers.join(" | ")} |`);
  lines.push(`| ${headers.map(() => "---").join(" | ")} |`);
  for (const row of rows) {
    lines.push(`| ${headers.map((header) => safe(row[header])).join(" | ")} |`);
  }
  return `${lines.join("\n")}\n`;
}

function list(items, limit = 20) {
  if (!items.length) return "_없음_\n";
  return `${items.slice(0, limit).map((item) => `- ${item}`).join("\n")}${items.length > limit ? `\n- ... ${items.length - limit} more` : ""}\n`;
}

function tags(repo) {
  return repo.tags || [];
}

function tagCount(tag) {
  return repos.filter((repo) => tags(repo).includes(tag)).length;
}

function analysisFor(repo) {
  return byName.get(repo.name.toLowerCase());
}

function reportPath(repo) {
  const analysis = analysisFor(repo);
  return analysis ? `reports/llm-wiki/repositories/${analysis.safeName}.md` : repo.localPath;
}

function topByStars(limit = 20) {
  return [...repos].sort((a, b) => (b.stars || 0) - (a.stars || 0)).slice(0, limit);
}

function topByScore(limit = 20) {
  return [...repos].sort((a, b) => (b.score || 0) - (a.score || 0)).slice(0, limit);
}

function recentlyPushed(limit = 20) {
  return [...repos].sort((a, b) => String(b.pushedAt || "").localeCompare(String(a.pushedAt || ""))).slice(0, limit);
}

function directWiki() {
  return repos.filter((repo) => tags(repo).includes("direct-llm-wiki"));
}

function koreaSignal() {
  return repos.filter((repo) => tags(repo).includes("korea-signal"));
}

function stackCounts() {
  const counts = new Map();
  for (const analysis of analyses) {
    for (const stack of analysis.architecture?.stack || ["unknown/mixed"]) {
      counts.set(stack, (counts.get(stack) || 0) + 1);
    }
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([stack, count]) => ({ stack, count }));
}

function patternRows() {
  const patterns = [
    {
      pattern: "Persistent LLM wiki",
      signal: "LLM이 문서에서 엔티티/개념 페이지를 만들고 유지하는 self-maintaining wiki",
      repos: repos.filter((repo) => tags(repo).includes("direct-llm-wiki")).slice(0, 10)
    },
    {
      pattern: "RAG knowledge base app",
      signal: "문서 수집, 청킹, 인덱싱, 검색, QA/챗 UI를 포함한 지식베이스 제품",
      repos: repos.filter((repo) => tags(repo).includes("rag") && tags(repo).includes("knowledge-base")).slice(0, 10)
    },
    {
      pattern: "GraphRAG / KG",
      signal: "지식 그래프, 엔티티-관계 추출, 그래프 검색, logical form/graph reasoning",
      repos: repos.filter((repo) => /graph|kg|kag|lightrag|hipporag|falkor/i.test(`${repo.name} ${repo.description}`)).slice(0, 10)
    },
    {
      pattern: "Document intelligence",
      signal: "PDF/Office/웹 문서 파싱, OCR, 문서 인덱스, NotebookLM-like reading",
      repos: repos.filter((repo) => tags(repo).includes("document-chat")).slice(0, 10)
    },
    {
      pattern: "Agent memory / MCP",
      signal: "에이전트 장기기억, MCP 도구, second brain, persistent context",
      repos: repos.filter((repo) => tags(repo).includes("agent-knowledge")).slice(0, 10)
    },
    {
      pattern: "Korea/Korean signal",
      signal: "한국/한국어/RAG 관련 검색 축에서 잡힌 저장소",
      repos: koreaSignal().slice(0, 10)
    }
  ];

  return patterns.map((item) => ({
    pattern: item.pattern,
    signal: item.signal,
    examples: item.repos.map((repo) => repo.name).join(", ")
  }));
}

const lines = [];
lines.push("# LLM 위키 / AI 지식베이스 오픈소스 100개 비교 요약");
lines.push("");
lines.push(`생성일: ${new Date().toISOString()}`);
lines.push("");
lines.push("## 산출물");
lines.push("");
lines.push("- 후보 수집 데이터: `data/llm-wiki-repositories.json`");
lines.push("- 구조 분석 데이터: `data/llm-wiki-structure-analysis-100.json`");
lines.push("- 총괄 구조 분석: `reports/llm-wiki/00-llm-wiki-100-summary.md`");
lines.push("- 레포별 구조 분석: `reports/llm-wiki/repositories/*.md`");
lines.push("");
lines.push("## 수집/선정 기준");
lines.push("");
lines.push("GitHub Search API로 LLM wiki, AI wiki, RAG knowledge base, document chat, NotebookLM-like, GraphRAG, MCP knowledge, Korean/Korea RAG 축을 검색했다. 점수는 직접 LLM-wiki 관련성, knowledge-base/RAG/document-chat 용어, stars/forks, 최근 push, 여러 쿼리 중복, 한국/한국어 신호를 합산했다.");
lines.push("");
lines.push(table([
  { metric: "검색 후보", value: repoData.candidateCount },
  { metric: "선정 레포", value: repos.length },
  { metric: "로컬 클론 검증", value: `${analysisData.sourceCloneCount}개 / 누락 ${analysisData.missingTargetCount}개` },
  { metric: "direct LLM-wiki", value: tagCount("direct-llm-wiki") },
  { metric: "RAG", value: tagCount("rag") },
  { metric: "knowledge-base", value: tagCount("knowledge-base") },
  { metric: "document-chat", value: tagCount("document-chat") },
  { metric: "agent-knowledge", value: tagCount("agent-knowledge") },
  { metric: "Korea/Korean signal", value: tagCount("korea-signal") }
], ["metric", "value"]));
lines.push("## 큰 패턴 비교");
lines.push("");
lines.push(table(patternRows(), ["pattern", "signal", "examples"]));
lines.push("## 구현 스택 분포");
lines.push("");
lines.push(table(stackCounts(), ["stack", "count"]));
lines.push("## 스타 기준 상위");
lines.push("");
lines.push(table(topByStars(20).map((repo) => ({
  repo: repo.name,
  stars: repo.stars,
  tags: tags(repo).join(", "),
  pushed: repo.pushedAt,
  report: reportPath(repo)
})), ["repo", "stars", "tags", "pushed", "report"]));
lines.push("## 관련성 점수 상위");
lines.push("");
lines.push(table(topByScore(20).map((repo) => ({
  repo: repo.name,
  score: repo.score,
  stars: repo.stars,
  tags: tags(repo).join(", "),
  report: reportPath(repo)
})), ["repo", "score", "stars", "tags", "report"]));
lines.push("## 최근 push 상위");
lines.push("");
lines.push(table(recentlyPushed(20).map((repo) => ({
  repo: repo.name,
  pushed: repo.pushedAt,
  stars: repo.stars,
  tags: tags(repo).join(", "),
  report: reportPath(repo)
})), ["repo", "pushed", "stars", "tags", "report"]));
lines.push("## 직접 LLM 위키 구현");
lines.push("");
lines.push(table(directWiki().map((repo) => ({
  repo: repo.name,
  stars: repo.stars,
  description: repo.description,
  report: reportPath(repo)
})), ["repo", "stars", "description", "report"]));
lines.push("## 한국/한국어 신호 레포");
lines.push("");
lines.push(table(koreaSignal().slice(0, 40).map((repo) => ({
  repo: repo.name,
  stars: repo.stars,
  tags: tags(repo).join(", "),
  description: repo.description,
  report: reportPath(repo)
})), ["repo", "stars", "tags", "description", "report"]));
lines.push("## 전체 100개 인덱스");
lines.push("");
lines.push(table(repos.map((repo, index) => {
  const analysis = analysisFor(repo);
  return {
    no: index + 1,
    repo: repo.name,
    stars: repo.stars,
    language: repo.language || "",
    files: analysis?.fileCount ?? "",
    stack: analysis?.architecture?.stack?.join(", ") || "",
    tags: tags(repo).join(", "),
    report: reportPath(repo)
  };
}), ["no", "repo", "stars", "language", "files", "stack", "tags", "report"]));
lines.push("## 해석 메모");
lines.push("");
lines.push(list([
  "LLM 위키라는 좁은 이름을 직접 쓰는 구현은 아직 소수이며, 실제 생태계는 RAG knowledge base, GraphRAG, document intelligence, agent memory로 퍼져 있다.",
  "지속적으로 기억되는 wiki를 만들려면 단순 벡터 검색보다 엔티티/개념 페이지, provenance, 증분 업데이트, 충돌 해결, 사람이 읽을 수 있는 Markdown/Obsidian 호환 저장 형식이 중요하다.",
  "대규모 제품형 레포는 데이터 커넥터, 권한, 배포, 평가/관측 가능성까지 포함하고, 작은 direct-LLM-wiki 구현은 페이지 생성 알고리즘과 지식 구조화 로직을 읽기 좋다.",
  "한국/한국어 신호는 AutoRAG처럼 명시적으로 한국 조직/프로젝트인 경우와, 검색 쿼리상 한국어/다국어 지원 README에 걸린 경우가 섞여 있으므로 후속 수동 검증이 필요하다.",
  "각 레포별 상세 구조 분석은 README, manifest, 핵심 디렉터리, 테스트/CI, 에이전트/MCP/스펙 파일 후보를 기준으로 자동 추출한 1차 코드 분석이다."
]));
lines.push("## 참고 출발점");
lines.push("");
lines.push("- Andrej Karpathy LLM Wiki gist: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f");
lines.push("- GitHub topic knowledge-base: https://github.com/topics/knowledge-base");
lines.push("- GitHub search queries and selected repositories: `data/llm-wiki-repositories.json`");

mkdirSync(path.dirname("reports/llm-wiki/01-llm-wiki-100-selection-and-patterns.md"), { recursive: true });
writeFileSync("reports/llm-wiki/01-llm-wiki-100-selection-and-patterns.md", `${lines.join("\n")}\n`);

console.error(`wrote reports/llm-wiki/01-llm-wiki-100-selection-and-patterns.md for ${repos.length} repositories`);
