# SamurAIGPT/llm-wiki-agent 코드 레벨 분석

생성일: 2026-06-17T23:31:13.270Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | persistent-llm-wiki |
| maturity | B production-leaning (72) |
| stars | 2959 |
| language | Python |
| tags | direct-llm-wiki, rag, knowledge-base, agent-knowledge |
| files/code/source | 28/9/9 |
| tests/ci | 0/0 |
| local path | sources/SamurAIGPT__llm-wiki-agent |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 17 | 7 | tools/build_graph.py:1210 print("Wiki is empty. Ingest some sources first.") |
| Parsing/OCR/document extraction | code | 8 | 3 | tools/file_to_md.py:4 from markitdown import MarkItDown |
| Chunking/splitting | absent | 0 | 0 |  |
| Embedding/vector index | absent | 0 | 0 |  |
| Retrieval/search/rerank | code | 8 | 5 | tools/build_graph.py:107 match = re.search(r'^type:\s*(\S+)', content, re.MULTILINE) |
| Wiki/graph/entity model | code | 17 | 7 | tools/build_graph.py:17 EXTRACTED — explicit [[wikilink]] in a page |
| Memory/update lifecycle | code | 11 | 5 | tools/build_graph.py:46 CACHE_FILE = GRAPH_DIR / ".cache.json" |
| Provenance/citation/evidence | code | 7 | 2 | tools/ingest.py:234 def ingest(source_path: str, auto_convert: bool = True): |
| Evaluation/observability | code | 1 | 1 | tools/build_graph.py:466 # --- Metrics --- |
| Agent/MCP/tool surface | code | 17 | 7 | tools/build_graph.py:18 INFERRED — Claude-detected implicit relationship |

## 의존성 신호

- LLM/app framework: litellm
- Graph/KG store: networkx
- Document parsing/OCR: markitdown

## 주요 파일 후보

### Ingestion/source intake

- `tools/build_graph.py`
- `tools/health.py`
- `tools/ingest.py`
- `tools/lint.py`
- `tools/pdf2md.py`
- `tools/query.py`
- `tools/refresh.py`
- `AGENTS.md`
- `CLAUDE.md`
- `GEMINI.md`
- `README.md`
- `docs/automated-sync.md`
- ... 5 more

### Parsing/OCR/document extraction

- `tools/file_to_md.py`
- `tools/ingest.py`
- `tools/pdf2md.py`
- `pyproject.toml`
- `AGENTS.md`
- `CLAUDE.md`
- `GEMINI.md`
- `README.md`

### Retrieval/search/rerank

- `tools/build_graph.py`
- `tools/health.py`
- `tools/ingest.py`
- `tools/pdf2md.py`
- `tools/refresh.py`
- `AGENTS.md`
- `README.md`
- `examples/cjk-showcase/README.md`

### Wiki/graph/entity model

- `tools/build_graph.py`
- `tools/heal.py`
- `tools/health.py`
- `tools/ingest.py`
- `tools/lint.py`
- `tools/query.py`
- `tools/refresh.py`
- `AGENTS.md`
- `CLAUDE.md`
- `GEMINI.md`
- `README.md`
- `wiki/index.md`
- ... 5 more

### Memory/update lifecycle

- `tools/build_graph.py`
- `tools/file_to_md.py`
- `tools/health.py`
- `tools/lint.py`
- `tools/refresh.py`
- `AGENTS.md`
- `CLAUDE.md`
- `GEMINI.md`
- `README.md`
- `docs/automated-sync.md`
- `.claude/commands/wiki-lint.md`

### Provenance/citation/evidence

- `tools/ingest.py`
- `tools/query.py`
- `AGENTS.md`
- `CLAUDE.md`
- `GEMINI.md`
- `README.md`
- `.claude/commands/wiki-query.md`

### Evaluation/observability

- `tools/build_graph.py`

### Agent/MCP/tool surface

- `tools/build_graph.py`
- `tools/heal.py`
- `tools/health.py`
- `tools/ingest.py`
- `tools/lint.py`
- `tools/pdf2md.py`
- `tools/query.py`
- `AGENTS.md`
- `CLAUDE.md`
- `GEMINI.md`
- `README.md`
- `requirements.txt`
- ... 5 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| tools/build_graph.py | 1210 | print("Wiki is empty. Ingest some sources first.") |
| tools/health.py | 138 | Log format: ## [YYYY-MM-DD] ingest \| Title Here |
| tools/health.py | 143 | for m in re.finditer(r'^## \[\d{4}-\d{2}-\d{2}\] ingest \\| (.+)$', log_content, re.MULTILINE) |
| tools/health.py | 167 | """Find source pages that have no corresponding ingest entry in log.md. |
| tools/health.py | 170 | side-effects of ingest and don't need their own log entry. |
| tools/health.py | 265 | lines.append("These source pages have no corresponding `ingest` entry in log.md:") |
| tools/ingest.py | 3 | Ingest a source document into the LLM Wiki. |
| tools/ingest.py | 6 | python tools/ingest.py <path-to-source> |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| tools/file_to_md.py | 4 | from markitdown import MarkItDown |
| tools/file_to_md.py | 16 | md = MarkItDown(enable_plugins=False) |
| tools/ingest.py | 8 | python tools/ingest.py report.pdf # auto-converts to .md |
| tools/ingest.py | 9 | python tools/ingest.py slides.pptx notes.docx # batch, mixed formats |
| tools/ingest.py | 13 | Supported formats (auto-converted via markitdown): |
| tools/ingest.py | 14 | .pdf .docx .pptx .xlsx .html .htm .txt .csv .json .xml |
| tools/ingest.py | 44 | # File extensions that can be auto-converted to markdown via markitdown. |
| tools/ingest.py | 47 | ".pdf", ".docx", ".pptx", ".xlsx", ".xls", |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| tools/build_graph.py | 107 | match = re.search(r'^type:\s*(\S+)', content, re.MULTILINE) |
| tools/build_graph.py | 138 | title_match = re.search(r'^title:\s*"?([^"\n]+)"?', content, re.MULTILINE) |
| tools/build_graph.py | 314 | match = re.search(r"(\{[\s\S]*\}\|\[[\s\S]*\])", raw) |
| tools/build_graph.py | 654 | #search {{ width: 100%; padding: 6px 8px; margin-bottom: 10px; background: #222; color: #eee; border: 1px solid #444; border-radius: 6px; font-size: 13px; }} |
| tools/build_graph.py | 743 | <input id="search" type="text" placeholder="Search nodes..." oninput="searchNodes(this.value)"> |
| tools/build_graph.py | 789 | const searchInput = document.getElementById("search"); |
| tools/health.py | 153 | match = re.search(r'^title:\s*(.+?)\s*$', content, re.MULTILINE) |
| tools/ingest.py | 120 | match = re.search(r"\{[\s\S]*\}", text) |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| tools/build_graph.py | 17 | EXTRACTED — explicit [[wikilink]] in a page |
| tools/build_graph.py | 35 | from networkx.algorithms import community as nx_community |
| tools/build_graph.py | 39 | print("Warning: networkx not installed. Community detection disabled. Run: pip install networkx") |
| tools/build_graph.py | 54 | "entity": "#2196F3", |
| tools/build_graph.py | 156 | """Pass 1: deterministic wikilink edges.""" |
| tools/build_graph.py | 389 | """Assign community IDs to nodes using Louvain algorithm.""" |
| tools/build_graph.py | 449 | fragile inter-community bridges, phantom hubs (referenced but |
| tools/build_graph.py | 495 | # Community stats |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| tools/build_graph.py | 46 | CACHE_FILE = GRAPH_DIR / ".cache.json" |
| tools/build_graph.py | 128 | def save_cache(cache: dict): |
| tools/build_graph.py | 130 | CACHE_FILE.write_text(json.dumps(cache, indent=2)) |
| tools/build_graph.py | 219 | def build_inferred_edges(pages: list[Path], existing_edges: list[dict], cache: dict, resume: bool = True) -> list[dict]: |
| tools/build_graph.py | 234 | entry = cache.get(str(p)) |
| tools/build_graph.py | 352 | cache[str(p)] = { |
| tools/build_graph.py | 368 | """Merge duplicate and bidirectional edges, keeping highest confidence.""" |
| tools/build_graph.py | 1221 | cache = load_cache() |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| tools/ingest.py | 234 | def ingest(source_path: str, auto_convert: bool = True): |
| tools/ingest.py | 235 | source = Path(source_path) |
| tools/ingest.py | 237 | print(f"Error: file not found: {source_path}") |
| tools/query.py | 165 | Write a well-structured markdown answer with headers, bullets, and [[wikilink]] citations. At the end, add a ## Sources section listing the pages you drew from. |
| AGENTS.md | 159 | 3. Synthesize an answer with inline citations as `[[PageName]]` wikilinks |
| CLAUDE.md | 162 | 3. Synthesize an answer with inline citations as `[[PageName]]` wikilinks |
| GEMINI.md | 154 | 3. Synthesize answer with `[[PageName]]` citations |
| README.md | 149 | The wiki builds a structured picture over time. Concepts like "Sleep", "Exercise", "Deep Work" accumulate evidence from every source filed. |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| tools/build_graph.py | 466 | # --- Metrics --- |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| tools/build_graph.py | 18 | INFERRED — Claude-detected implicit relationship |
| tools/build_graph.py | 49 | SCHEMA_FILE = REPO_ROOT / "CLAUDE.md" |
| tools/build_graph.py | 311 | raw = call_llm(prompt, "LLM_MODEL_FAST", "claude-3-5-haiku-latest", max_tokens=1024) |
| tools/build_graph.py | 1189 | "> Records important additions, revisions, and clarifications in the project knowledge layer. Maintained in append-only mode for agent and human traceability.\n\n" |
| tools/build_graph.py | 1199 | "> Records important additions, revisions, and clarifications in the project knowledge layer. Maintained in append-only mode for agent and human traceability." |
| tools/heal.py | 51 | model = os.getenv("LLM_MODEL", "claude-3-5-haiku-latest") # default to fast model |
| tools/health.py | 21 | Design boundary (see AGENTS.md): |
| tools/ingest.py | 54 | SCHEMA_FILE = REPO_ROOT / "CLAUDE.md" |

## Gap

- tests
- ci
