# axoviq-ai/synthadoc 코드 레벨 분석

생성일: 2026-06-17T23:31:13.609Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (104) |
| stars | 464 |
| language | Python |
| tags | rag, knowledge-base, document-chat, agent-knowledge, korea-signal |
| files/code/source | 331/221/121 |
| tests/ci | 100/1 |
| local path | sources/axoviq-ai__synthadoc |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 95 | 33 | hooks/git-auto-commit.py:5 Description: Commits wiki changes to a local git repo after every successful ingest. |
| Parsing/OCR/document extraction | code | 50 | 12 | hooks/git-auto-commit.py:26 wiki: ingest report.pdf → created alan-turing, updated computing-history |
| Chunking/splitting | code | 10 | 5 | synthadoc/agents/query_agent.py:82 # Stopwords excluded when extracting key terms for the content-overlap gap check. |
| Embedding/vector index | code | 29 | 9 | synthadoc/config.py:147 vector: bool = False |
| Retrieval/search/rerank | code | 65 | 28 | synthadoc/config.py:92 gap_score_threshold: float = 2.0 # BM25 score below which gap is detected |
| Wiki/graph/entity model | code | 75 | 25 | obsidian-plugin/esbuild.config.mjs:9 external: ["obsidian", "electron", ...builtins], |
| Memory/update lifecycle | code | 130 | 54 | hooks/git-auto-commit.py:16 git commit -m "init: initial wiki snapshot" |
| Provenance/citation/evidence | code | 77 | 32 | obsidian-plugin/src/main.ts:105 id: "view-page-provenance", |
| Evaluation/observability | code | 31 | 6 | synthadoc/core/orchestrator.py:17 from synthadoc.observability.telemetry import get_tracer, setup_telemetry |
| Agent/MCP/tool surface | code | 112 | 35 | synthadoc/config.py:20 KNOWN_PROVIDERS = {"anthropic", "openai", "ollama", "gemini", "groq", "minimax", "deepseek", |

## 의존성 신호

- LLM/app framework: anthropic, openai
- Document parsing/OCR: beautifulsoup4, pypdf, pdfminer.six, python-docx
- Eval/observability: opentelemetry-sdk
- Persistence/database: aiosqlite

## 주요 파일 후보

### Ingestion/source intake

- `hooks/git-auto-commit.py`
- `obsidian-plugin/main.js`
- `synthadoc/config.py`
- `synthadoc/errors.py`
- `obsidian-plugin/src/api.ts`
- `obsidian-plugin/src/main.ts`
- `synthadoc/agents/_routing.py`
- `synthadoc/agents/action_agent.py`
- `synthadoc/agents/ingest_agent.py`
- `synthadoc/agents/lint_agent.py`
- `synthadoc/agents/query_agent.py`
- `synthadoc/agents/scaffold_agent.py`
- ... 6 more

### Parsing/OCR/document extraction

- `hooks/git-auto-commit.py`
- `obsidian-plugin/main.js`
- `obsidian-plugin/src/main.ts`
- `synthadoc/agents/ingest_agent.py`
- `synthadoc/cli/_http.py`
- `synthadoc/cli/ingest.py`
- `synthadoc/integration/http_server.py`
- `synthadoc/skills/docx/scripts/main.py`
- `synthadoc/skills/pdf/scripts/main.py`
- `synthadoc/skills/pptx/scripts/main.py`
- `synthadoc/skills/url/scripts/main.py`
- `synthadoc/demos/ai-research/_generate_raw_sources.py`
- ... 6 more

### Chunking/splitting

- `obsidian-plugin/main.js`
- `synthadoc/agents/query_agent.py`
- `synthadoc/providers/coding_tool.py`
- `synthadoc/providers/openai.py`
- `synthadoc/skills/youtube/scripts/main.py`
- `tests/agents/test_query_stream.py`
- `tests/skills/test_youtube_skill.py`
- `README.md`
- `docs/design.md`
- `docs/user-quick-start-guide.md`

### Embedding/vector index

- `obsidian-plugin/main.js`
- `synthadoc/config.py`
- `synthadoc/cli/_init.py`
- `synthadoc/core/orchestrator.py`
- `synthadoc/providers/base.py`
- `synthadoc/storage/search.py`
- `web-ui/dist/assets/index-Nu922yyh.js`
- `synthadoc/skills/youtube/scripts/main.py`
- `synthadoc/demos/ai-research/_generate_raw_sources.py`
- `tests/test_config.py`
- `tests/test_coverage_boost.py`
- `tests/agents/test_ingest_agent.py`
- ... 6 more

### Retrieval/search/rerank

- `obsidian-plugin/main.js`
- `synthadoc/config.py`
- `synthadoc/errors.py`
- `obsidian-plugin/src/main.ts`
- `synthadoc/agents/_routing.py`
- `synthadoc/agents/action_agent.py`
- `synthadoc/agents/context_agent.py`
- `synthadoc/agents/export_agent.py`
- `synthadoc/agents/ingest_agent.py`
- `synthadoc/agents/lint_agent.py`
- `synthadoc/agents/query_agent.py`
- `synthadoc/agents/rewrite_agent.py`
- ... 6 more

### Wiki/graph/entity model

- `obsidian-plugin/esbuild.config.mjs`
- `obsidian-plugin/main.js`
- `obsidian-plugin/vitest.config.ts`
- `scripts/bump_version.py`
- `scripts/update_badges.py`
- `obsidian-plugin/src/api.ts`
- `obsidian-plugin/src/main.ts`
- `obsidian-plugin/src/sse.ts`
- `synthadoc/agents/export_agent.py`
- `synthadoc/agents/ingest_agent.py`
- `synthadoc/agents/lint_agent.py`
- `synthadoc/agents/query_agent.py`
- ... 6 more

### Memory/update lifecycle

- `hooks/git-auto-commit.py`
- `obsidian-plugin/main.js`
- `scripts/bump_version.py`
- `scripts/update_badges.py`
- `synthadoc/config.py`
- `synthadoc/errors.py`
- `web-ui/eslint.config.js`
- `obsidian-plugin/src/api.ts`
- `obsidian-plugin/src/main.ts`
- `synthadoc/agents/action_agent.py`
- `synthadoc/agents/context_agent.py`
- `synthadoc/agents/export_agent.py`
- ... 6 more

### Provenance/citation/evidence

- `obsidian-plugin/main.js`
- `obsidian-plugin/src/main.ts`
- `obsidian-plugin/src/sse.ts`
- `synthadoc/agents/action_agent.py`
- `synthadoc/agents/export_agent.py`
- `synthadoc/agents/hint_engine.py`
- `synthadoc/agents/ingest_agent.py`
- `synthadoc/agents/lint_agent.py`
- `synthadoc/agents/query_agent.py`
- `synthadoc/cli/audit.py`
- `synthadoc/cli/context.py`
- `synthadoc/cli/lint.py`
- ... 6 more

### Evaluation/observability

- `obsidian-plugin/main.js`
- `synthadoc/core/orchestrator.py`
- `synthadoc/core/scheduler.py`
- `synthadoc/observability/telemetry.py`
- `web-ui/dist/assets/index-Nu922yyh.js`
- `synthadoc/demos/ai-research/_generate_raw_sources.py`
- `pyproject.toml`
- `obsidian-plugin/package-lock.json`
- `tests/test_coverage_boost.py`
- `tests/test_telemetry.py`
- `tests/agents/test_query_agent.py`
- `tests/agents/test_scaffold_agent.py`
- ... 6 more

### Agent/MCP/tool surface

- `obsidian-plugin/main.js`
- `synthadoc/config.py`
- `synthadoc/errors.py`
- `obsidian-plugin/src/main.ts`
- `synthadoc/agents/action_agent.py`
- `synthadoc/agents/context_agent.py`
- `synthadoc/agents/export_agent.py`
- `synthadoc/agents/hint_engine.py`
- `synthadoc/agents/ingest_agent.py`
- `synthadoc/agents/query_agent.py`
- `synthadoc/agents/scaffold_agent.py`
- `synthadoc/agents/search_decompose_agent.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| hooks/git-auto-commit.py | 5 | Description: Commits wiki changes to a local git repo after every successful ingest. |
| hooks/git-auto-commit.py | 25 | After each ingest you will find a new commit in `git log` with a message like: |
| hooks/git-auto-commit.py | 26 | wiki: ingest report.pdf → created alan-turing, updated computing-history |
| hooks/git-auto-commit.py | 42 | # Build a meaningful commit message from the ingest result |
| hooks/git-auto-commit.py | 51 | msg = f"wiki: ingest {source_name} → {summary}" |
| synthadoc/config.py | 40 | ingest: Optional[AgentConfig] = None |
| synthadoc/config.py | 154 | url_staleness_days: int = 0 # 0 = never; mark URL-sourced pages stale after N days since last ingest |
| synthadoc/config.py | 174 | ingest: IngestConfig = field(default_factory=IngestConfig) |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| hooks/git-auto-commit.py | 26 | wiki: ingest report.pdf → created alan-turing, updated computing-history |
| obsidian-plugin/src/main.ts | 7 | "md", "txt", "pdf", "docx", "xlsx", "csv", |
| obsidian-plugin/src/main.ts | 3116 | const pagemapPath = `${this.wikiRoot}/.synthadoc/extracted/${stem}.pdf.pagemap`; |
| obsidian-plugin/src/main.ts | 3119 | // Binary types (xlsx, docx, png, …) cannot — they need a sidecar that the |
| obsidian-plugin/src/main.ts | 3149 | // PDF jump button — only shown when content is past page 1 (page 1 is the default). |
| obsidian-plugin/src/main.ts | 3155 | ? this.filename.replace(/\.txt$/, ".pdf") |
| obsidian-plugin/src/main.ts | 3157 | const btn = contentEl.createEl("button", { text: `Open PDF at page ${pdfPage} →` }); |
| obsidian-plugin/src/main.ts | 3164 | text: "Line numbers refer to extracted text. The PDF page shown is the closest match.", |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| synthadoc/agents/query_agent.py | 82 | # Stopwords excluded when extracting key terms for the content-overlap gap check. |
| synthadoc/providers/coding_tool.py | 282 | chunk = ( |
| synthadoc/providers/coding_tool.py | 288 | if chunk: |
| synthadoc/providers/coding_tool.py | 289 | text_parts.append(chunk) |
| synthadoc/providers/coding_tool.py | 294 | chunk = part.get("text") or part.get("data") or "" |
| synthadoc/providers/coding_tool.py | 295 | if chunk: |
| synthadoc/providers/coding_tool.py | 296 | text_parts.append(chunk) |
| synthadoc/providers/coding_tool.py | 303 | chunk = block.get("text") or block.get("data") or "" |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| synthadoc/config.py | 147 | vector: bool = False |
| synthadoc/config.py | 373 | vector=bool(sr.get("vector", False)), |
| synthadoc/cli/_init.py | 78 | vector = false # set to true to enable semantic re-ranking (downloads ~130 MB model once) |
| synthadoc/core/orchestrator.py | 100 | self._store, sd / "embeddings.db", |
| synthadoc/core/orchestrator.py | 117 | if self._cfg.search.vector: |
| synthadoc/core/orchestrator.py | 118 | logger.info("Vector search: enabled (model: BAAI/bge-small-en-v1.5) — initialising…") |
| synthadoc/core/orchestrator.py | 124 | "Vector search requires 'fastembed' which is not installed. " |
| synthadoc/core/orchestrator.py | 133 | """Embed all existing wiki pages not yet in embeddings.db (background task).""" |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| synthadoc/config.py | 92 | gap_score_threshold: float = 2.0 # BM25 score below which gap is detected |
| synthadoc/config.py | 182 | search: SearchConfig = field(default_factory=SearchConfig) |
| synthadoc/config.py | 370 | # --- search --- |
| synthadoc/config.py | 371 | sr = raw.get("search", {}) |
| synthadoc/config.py | 372 | search = SearchConfig( |
| synthadoc/config.py | 411 | search=search, |
| synthadoc/config.py | 484 | search=SearchConfig(), |
| synthadoc/errors.py | 45 | SKILL_WEB_NO_KEY = "ERR-SKILL-004" # TAVILY_API_KEY not set for web search |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| obsidian-plugin/esbuild.config.mjs | 9 | external: ["obsidian", "electron", ...builtins], |
| obsidian-plugin/vitest.config.ts | 10 | obsidian: path.resolve(__dirname, "__mocks__/obsidian.ts"), |
| scripts/bump_version.py | 10 | obsidian-plugin/manifest.json |
| scripts/bump_version.py | 11 | obsidian-plugin/package.json |
| scripts/bump_version.py | 46 | f"Community Edition v{old_version}", |
| scripts/bump_version.py | 47 | f"Community Edition v{new_version}", |
| scripts/bump_version.py | 49 | f"Community%20Edition-v{old_version}-brightgreen", |
| scripts/bump_version.py | 50 | f"Community%20Edition-v{new_version}-brightgreen", |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| hooks/git-auto-commit.py | 16 | git commit -m "init: initial wiki snapshot" |
| scripts/bump_version.py | 104 | print("Done. Remember to:") |
| scripts/update_badges.py | 112 | stale = {k: v for k, v in static.items() if current.get(k) != v} |
| scripts/update_badges.py | 113 | if stale: |
| scripts/update_badges.py | 115 | print(f" Stale fields: {stale}") |
| synthadoc/config.py | 59 | # override was parsed with defaults filled in, so re-merge explicitly |
| synthadoc/config.py | 77 | version: str = "4" # bump to invalidate all cached LLM responses |
| synthadoc/config.py | 154 | url_staleness_days: int = 0 # 0 = never; mark URL-sourced pages stale after N days since last ingest |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| obsidian-plugin/src/main.ts | 105 | id: "view-page-provenance", |
| obsidian-plugin/src/main.ts | 106 | name: "View Page Provenance", |
| obsidian-plugin/src/main.ts | 145 | // Citation chip renderer: ^[file.txt:12-24] → clickable chip. |
| obsidian-plugin/src/main.ts | 153 | // <sup> or text node instead of converting it to a footnote. |
| obsidian-plugin/src/main.ts | 221 | chip.className = "synthadoc-citation-chip"; |
| obsidian-plugin/src/main.ts | 244 | // Derives body reference IDs from footnote li ids (fn-N → fnref-N) rather than |
| obsidian-plugin/src/main.ts | 1984 | const _parts = rec.source_path.split(/[\\/]/); |
| obsidian-plugin/src/main.ts | 1985 | const src = _parts.filter(Boolean).pop() ?? rec.source_path; |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| synthadoc/core/orchestrator.py | 17 | from synthadoc.observability.telemetry import get_tracer, setup_telemetry |
| synthadoc/core/scheduler.py | 208 | """Return True if dt (at minute precision) matches the cron expression.""" |
| synthadoc/observability/telemetry.py | 9 | from opentelemetry import trace |
| synthadoc/observability/telemetry.py | 10 | from opentelemetry.sdk.trace import TracerProvider |
| synthadoc/observability/telemetry.py | 11 | from opentelemetry.sdk.trace.export import SimpleSpanProcessor, SpanExporter, SpanExportResult |
| web-ui/dist/assets/index-Nu922yyh.js | 16 | `});let l={type:`element`,tagName:`li`,properties:a,children:o};return e.patch(t,l),e.applyData(t,l)}function Gi(e){let t=!1;if(e.type===`list`){t=e.spread\|\|!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=Ki(n[r])}retu |
| synthadoc/demos/ai-research/_generate_raw_sources.py | 66 | ws2["A1"] = "Benchmark Notes" |
| synthadoc/demos/ai-research/_generate_raw_sources.py | 171 | line(y, "AI Benchmark Watch — Q1 2026", size=10); y -= 40 |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| synthadoc/config.py | 20 | KNOWN_PROVIDERS = {"anthropic", "openai", "ollama", "gemini", "groq", "minimax", "deepseek", |
| synthadoc/config.py | 21 | "qwen", "claude-code", "opencode"} |
| synthadoc/config.py | 52 | If the agent has an override, it is already merged with the default's |
| synthadoc/config.py | 171 | agents: AgentsConfig |
| synthadoc/config.py | 213 | def _validate_provider(agent: AgentConfig) -> None: |
| synthadoc/config.py | 214 | if agent.provider not in KNOWN_PROVIDERS: |
| synthadoc/config.py | 216 | f"Unknown provider '{agent.provider}'. " |
| synthadoc/config.py | 224 | # supplies [agents] sections. We cannot construct AgentsConfig without a |

## Gap

_없음_
