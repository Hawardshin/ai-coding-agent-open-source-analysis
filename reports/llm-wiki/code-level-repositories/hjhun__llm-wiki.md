# hjhun/llm-wiki 코드 레벨 분석

생성일: 2026-06-17T23:31:38.281Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | persistent-llm-wiki |
| maturity | A integrated platform (100) |
| stars | 0 |
| language | TypeScript |
| tags | direct-llm-wiki, korea-signal |
| files/code/source | 344/277/230 |
| tests/ci | 44/3 |
| local path | sources/hjhun__llm-wiki |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 114 | 65 | setup.sh:1059 "${PROGRESS_DIR}/ingest/leaves" \ |
| Parsing/OCR/document extraction | code | 18 | 7 | cli-rs/src/paths.rs:108 assert_eq!(raw_destination(Path::new("baz.pdf")), "baz.pdf"); |
| Chunking/splitting | code | 61 | 36 | scripts/clio-automation-cron.sh:163 # Serialize concurrent runs: a per-minute cron can otherwise overlap with a |
| Embedding/vector index | code | 5 | 1 | webapp/lib/multi-agent.ts:819 // workers' delta prompt). Embedding them in the shared continuation |
| Retrieval/search/rerank | code | 38 | 19 | setup.sh:906 warn "qmd was not found; wiki-search-qmd will stay inactive until qmd is installed" |
| Wiki/graph/entity model | code | 46 | 20 | setup.sh:1151 ## Entities |
| Memory/update lifecycle | code | 143 | 87 | setup.sh:374 ".cache/codex", |
| Provenance/citation/evidence | code | 50 | 14 | scripts/install.sh:304 local source_path="${source_root}/${rel_path}" |
| Evaluation/observability | code | 9 | 5 | scripts/build-sources-index.mjs:271 // ISO date in UTC, day precision — keeps the file stable across re-runs on |
| Agent/MCP/tool surface | code | 123 | 76 | setup.sh:72 --with-agent-browser Best-effort optional agent-browser install |

## 의존성 신호

_없음_

## 주요 파일 후보

### Ingestion/source intake

- `setup.sh`
- `scripts/mini-lint.mjs`
- `webapp/instrumentation-node.ts`
- `webapp/instrumentation.ts`
- `cli-rs/src/client.rs`
- `cli-rs/src/main.rs`
- `cli-rs/src/stream.rs`
- `webapp/components/i18n.tsx`
- `webapp/components/OnboardingTour.tsx`
- `webapp/lib/agent-roles.ts`
- `webapp/lib/chat-events.ts`
- `webapp/lib/cli-cline-task.ts`
- ... 6 more

### Parsing/OCR/document extraction

- `cli-rs/src/paths.rs`
- `webapp/components/i18n.tsx`
- `webapp/lib/dashboard.ts`
- `webapp/components/chat/MarkdownContent.tsx`
- `webapp/components/explorer/Editor.tsx`
- `webapp/app/api/files/blob/route.ts`
- `webapp/app/api/files/preview/route.ts`
- `webapp/lib/dashboard.test.ts`
- `webapp/lib/files.test.ts`
- `AGENTS.md`
- `CLAUDE.md`
- `README.md`
- ... 6 more

### Chunking/splitting

- `scripts/clio-automation-cron.sh`
- `cli-rs/src/client.rs`
- `cli-rs/src/stream.rs`
- `webapp/components/i18n.tsx`
- `webapp/lib/chat-events.ts`
- `webapp/lib/cli-cline-task.ts`
- `webapp/lib/cli-codex-json.ts`
- `webapp/lib/cli-output.ts`
- `webapp/lib/cli-stream-json.ts`
- `webapp/lib/cli.ts`
- `webapp/lib/config.ts`
- `webapp/lib/graph.ts`
- ... 6 more

### Embedding/vector index

- `webapp/lib/multi-agent.ts`
- `llm-wiki.md`
- `README.md`
- `.agents/skills/wiki-query/SKILL.md`
- `.agents/skills/wiki-search-qmd/SKILL.md`

### Retrieval/search/rerank

- `setup.sh`
- `cli-rs/src/main.rs`
- `webapp/components/CommandPalette.tsx`
- `webapp/components/i18n.tsx`
- `webapp/lib/config.ts`
- `webapp/lib/multi-agent.ts`
- `webapp/lib/public-query.ts`
- `webapp/lib/qmd.ts`
- `webapp/lib/search.ts`
- `webapp/lib/settings.ts`
- `clio-skill/clio/scripts/search-wiki.sh`
- `webapp/components/explorer/DirectoryView.tsx`
- ... 6 more

### Wiki/graph/entity model

- `setup.sh`
- `scripts/build-sources-index.mjs`
- `scripts/code-facts.mjs`
- `scripts/merge-graph-parts.mjs`
- `scripts/mini-lint.mjs`
- `webapp/components/i18n.tsx`
- `webapp/lib/config.ts`
- `webapp/lib/graph-view.ts`
- `webapp/lib/graph.ts`
- `webapp/lib/multi-agent.ts`
- `webapp/lib/post-merge-lint.ts`
- `webapp/lib/wikilink.ts`
- ... 6 more

### Memory/update lifecycle

- `setup.sh`
- `scripts/build-sources-index.mjs`
- `scripts/clio-automation-cron.sh`
- `scripts/code-facts.mjs`
- `scripts/code-index.mjs`
- `scripts/install.sh`
- `scripts/merge-graph-parts.mjs`
- `scripts/mini-lint.mjs`
- `scripts/organize-sources.mjs`
- `cli-rs/src/client.rs`
- `webapp/components/AuthCard.tsx`
- `webapp/components/AutoLintBadge.tsx`
- ... 6 more

### Provenance/citation/evidence

- `scripts/install.sh`
- `scripts/mini-lint.mjs`
- `scripts/organize-sources.mjs`
- `webapp/components/i18n.tsx`
- `webapp/lib/config.ts`
- `webapp/lib/graph-view.ts`
- `webapp/lib/graph.ts`
- `webapp/lib/public-query.ts`
- `webapp/lib/auto-ingest/manager.ts`
- `webapp/lib/chat/send-helpers.ts`
- `webapp/lib/ingest/leaf-classify.ts`
- `webapp/lib/multi-agent/util.ts`
- ... 6 more

### Evaluation/observability

- `scripts/build-sources-index.mjs`
- `webapp/instrumentation.ts`
- `webapp/lib/graph-view.ts`
- `webapp/components/dashboard/Dashboard.tsx`
- `webapp/components/graph/Graph.tsx`
- `webapp/package-lock.json`
- `webapp/lib/chat/send-helpers.test.ts`
- `.agents/skills/skill-maintenance/SKILL.md`
- `examples/mini-wiki/README.md`

### Agent/MCP/tool surface

- `setup.sh`
- `clio-skill/skills.sh`
- `scripts/build-sources-index.mjs`
- `scripts/install.sh`
- `cli-rs/src/client.rs`
- `cli-rs/src/config.rs`
- `cli-rs/src/main.rs`
- `cli-rs/src/stream.rs`
- `webapp/components/i18n.tsx`
- `webapp/lib/agent-roles.ts`
- `webapp/lib/answer-secret-sweep.ts`
- `webapp/lib/chat-events.ts`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| setup.sh | 1059 | "${PROGRESS_DIR}/ingest/leaves" \ |
| setup.sh | 1103 | "ingest": null, |
| setup.sh | 1148 | 이 파일은 위키의 **목차**다. 각 운영(ingest/query/lint)의 머지 패스 마지막 단계에서 일괄 갱신된다. |
| setup.sh | 1195 | ## [YYYY-MM-DD HH:MM] ingest \| query \| lint \| graph \| <제목> |
| scripts/mini-lint.mjs | 5 | // repeat on every ingest cycle: |
| webapp/instrumentation-node.ts | 2 | * Node-only boot logic for the auto-ingest and auto-lint managers. Lives in a |
| webapp/instrumentation-node.ts | 6 | import { getAutoIngestManager } from "./lib/auto-ingest/manager"; |
| webapp/instrumentation-node.ts | 16 | "[auto-ingest] boot failed:", |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| cli-rs/src/paths.rs | 108 | assert_eq!(raw_destination(Path::new("baz.pdf")), "baz.pdf"); |
| webapp/components/i18n.tsx | 135 | body: "Explorer에서 업로드하거나, 채팅 영역에 파일을 드래그앤드롭하면 raw/에 저장됩니다. 글·PDF·코드·로그 모두 가능합니다.", |
| webapp/lib/dashboard.ts | 126 | * 예: `articles/foo.pdf` -> `articles/foo.md`. |
| webapp/components/chat/MarkdownContent.tsx | 99 | return <h1 id={slugify(extractText(children))} className="scroll-mt-4">{children}</h1>; |
| webapp/components/chat/MarkdownContent.tsx | 102 | return <h2 id={slugify(extractText(children))} className="scroll-mt-4">{children}</h2>; |
| webapp/components/chat/MarkdownContent.tsx | 105 | return <h3 id={slugify(extractText(children))} className="scroll-mt-4">{children}</h3>; |
| webapp/components/chat/MarkdownContent.tsx | 108 | return <h4 id={slugify(extractText(children))} className="scroll-mt-4">{children}</h4>; |
| webapp/components/chat/MarkdownContent.tsx | 119 | const firstLine = extractText(children).trim().split("\n")[0] ?? ""; |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| scripts/clio-automation-cron.sh | 163 | # Serialize concurrent runs: a per-minute cron can otherwise overlap with a |
| cli-rs/src/client.rs | 37 | // for tens of minutes per sub-chunk. The webapp enforces its own |
| cli-rs/src/stream.rs | 6 | //! * `chunk` — child stdout/stderr from the host coding-agent CLI; flushed |
| cli-rs/src/stream.rs | 8 | //! * `progress` — sub-chunk / log heading; pretty-printed to stderr so it |
| cli-rs/src/stream.rs | 40 | #[serde(rename = "chunk")] |
| cli-rs/src/stream.rs | 41 | Chunk { stream: String, text: String }, |
| cli-rs/src/stream.rs | 87 | let chunk = item.map_err(\|err\| anyhow!("network error: {err}"))?; |
| cli-rs/src/stream.rs | 88 | buf.extend_from_slice(&chunk); |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| webapp/lib/multi-agent.ts | 819 | // workers' delta prompt). Embedding them in the shared continuation |
| llm-wiki.md | 47 | **index.md** is content-oriented. It's a catalog of everything in the wiki — each page listed with a link, a one-line summary, and optionally metadata like date or source count. Organized by category (entities, concepts, |
| llm-wiki.md | 53 | At some point you may want to build small tools that help the LLM operate on the wiki more efficiently. A search engine over the wiki pages is the most obvious one — at small scale the index file is enough, but as the wi |
| README.md | 36 | The result is not a transcript and not an opaque vector store. It is a folder of |
| .agents/skills/wiki-query/SKILL.md | 70 | 5. If `wiki-search-qmd` is active, delegate the same question and receive additional candidates via BM25 + vector + reranking. |
| .agents/skills/wiki-search-qmd/SKILL.md | 3 | description: If qmd is installed, assist wiki-query candidate search with BM25/vector/reranking. Prefer tools/qmd and fall back to qmd from PATH. |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| setup.sh | 906 | warn "qmd was not found; wiki-search-qmd will stay inactive until qmd is installed" |
| setup.sh | 918 | warn "qmd collection add wiki failed; run it manually if wiki-search-qmd needs indexing" |
| setup.sh | 1638 | log "skipping qmd install; wiki-search-qmd will use project-local or PATH qmd if available" |
| cli-rs/src/main.rs | 29 | /// walk-up search from the current directory, or ~/.clio. |
| webapp/components/CommandPalette.tsx | 14 | Search, |
| webapp/components/CommandPalette.tsx | 40 | * search wiki pages. Mounted once in the protected layout. |
| webapp/components/CommandPalette.tsx | 74 | // Debounced wiki search. |
| webapp/components/CommandPalette.tsx | 85 | const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`, { |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| setup.sh | 1151 | ## Entities |
| scripts/build-sources-index.mjs | 5 | // faceted catalog (recently updated, by topic, entity, source_kind, status, |
| scripts/build-sources-index.mjs | 107 | entities: parseList(fm, "entities"), |
| scripts/build-sources-index.mjs | 118 | // Strip the .md extension so the wikilink matches CLAUDE.md conventions. |
| scripts/build-sources-index.mjs | 241 | renderFacet("By Entity", records, "entities"), |
| scripts/code-facts.mjs | 152 | function entity(id, type, name, project, rawPath, contentHash, extra = {}) { |
| scripts/code-facts.mjs | 168 | function relation(id, type, src, dst, rawPath, extra = {}) { |
| scripts/code-facts.mjs | 242 | nodes: facts.entities.map(graphNodeFromEntity), |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| setup.sh | 374 | ".cache/codex", |
| setup.sh | 386 | ".cache/claude", |
| setup.sh | 387 | ".cache/anthropic", |
| setup.sh | 401 | ".cache/agy", |
| setup.sh | 402 | ".cache/antigravity", |
| setup.sh | 411 | ".cache/cline", |
| scripts/build-sources-index.mjs | 8 | // LLM merge passes may append supplemental prose after the |
| scripts/clio-automation-cron.sh | 6 | # CLIO's automation scheduler is an in-memory setTimeout living inside the |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| scripts/install.sh | 304 | local source_path="${source_root}/${rel_path}" |
| scripts/install.sh | 308 | if [[ ! -e "${source_path}" && ! -L "${source_path}" ]]; then |
| scripts/install.sh | 317 | sync_path_without_rsync "${source_path}" "${target_path}" "${rel_path}" |
| scripts/install.sh | 321 | if [[ -d "${source_path}" && ! -L "${source_path}" ]]; then |
| scripts/install.sh | 327 | "${source_path}/" "${target_path}/" |
| scripts/install.sh | 331 | rsync -a --checksum "${source_path}" "${target_path}" |
| scripts/install.sh | 335 | local source_path="$1" |
| scripts/install.sh | 339 | if [[ -d "${source_path}" && ! -L "${source_path}" ]]; then |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| scripts/build-sources-index.mjs | 271 | // ISO date in UTC, day precision — keeps the file stable across re-runs on |
| webapp/instrumentation.ts | 8 | * `globalThis.__autoIngestManager`, so HMR-driven re-evaluation in dev |
| webapp/lib/graph-view.ts | 48 | * inspector's metrics reflect the active tab rather than the whole graph. |
| webapp/components/dashboard/Dashboard.tsx | 213 | <Metric label={td.graphNodes} value={data.graph.nodes} /> |
| webapp/components/dashboard/Dashboard.tsx | 214 | <Metric label={td.graphEdges} value={data.graph.edges} /> |
| webapp/components/dashboard/Dashboard.tsx | 215 | <Metric |
| webapp/components/dashboard/Dashboard.tsx | 484 | function Metric({ label, value }: { label: string; value: number }) { |
| webapp/components/graph/Graph.tsx | 448 | <Metric label={t.graph.nodes} value={graph?.nodes.length ?? 0} /> |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| setup.sh | 72 | --with-agent-browser Best-effort optional agent-browser install |
| setup.sh | 78 | (agent-browser + gh + yt-dlp) |
| setup.sh | 79 | --install-cli=<names> Best-effort install for codex,claude,agy,cline |
| setup.sh | 91 | ./setup.sh --install-cli=claude,agy --with-marp |
| setup.sh | 157 | --with-agent-browser) |
| setup.sh | 266 | const names = ["codex", "claude", "agy", "cline"]; |
| setup.sh | 356 | const names = ["codex", "claude", "agy", "cline"]; |
| setup.sh | 368 | codex: [ |

## Gap

_없음_
