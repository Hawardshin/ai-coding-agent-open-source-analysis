# safishamsi/graphify 코드 레벨 분석

생성일: 2026-06-17T23:31:14.319Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (103) |
| stars | 68688 |
| language | Python |
| tags | rag, knowledge-base, document-chat, agent-knowledge |
| files/code/source | 572/182/56 |
| tests/ci | 120/3 |
| local path | sources/safishamsi__graphify |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 47 | 6 | graphify/__main__.py:2829 from graphify.ingest import save_query_result as _sqr |
| Parsing/OCR/document extraction | code | 132 | 5 | graphify/callflow_html.py:1163 lines.append(f" %% Omitted for readability: {omitted_nodes} nodes, {omitted_edges} edges") |
| Chunking/splitting | code | 130 | 16 | graphify/__main__.py:2193 print(" --token-budget N per-chunk token cap for semantic extraction (default: 60000)") |
| Embedding/vector index | code | 23 | 6 | graphify/detect.py:395 # PDFs inside Xcode asset catalogs are vector icons, not papers |
| Retrieval/search/rerank | code | 61 | 20 | graphify/__main__.py:1588 not search. Clean it up on install so a stale, never-loaded copy does not |
| Wiki/graph/entity model | code | 217 | 28 | graphify/__main__.py:2152 print(" --no-label keep 'Community N' placeholders (skip LLM community naming)") |
| Memory/update lifecycle | code | 304 | 33 | graphify/__main__.py:83 ``global_graph``, ``watch``, ``export``) call the security helper directly |
| Provenance/citation/evidence | code | 79 | 12 | graphify/callflow_html.py:208 confidence = first_present(edge, "confidence", "evidence", "provenance", default="EXTRACTED") |
| Evaluation/observability | code | 155 | 7 | graphify/__main__.py:82 ``build``, ``benchmark``, ``tree_html``, ``callflow_html``, ``prs``, |
| Agent/MCP/tool surface | code | 248 | 18 | graphify/__main__.py:1 """graphify CLI - `graphify install` sets up the Claude Code skill.""" |

## 의존성 신호

- LLM/app framework: openai, anthropic
- Graph/KG store: graphrag, networkx, neo4j, falkordb
- Document parsing/OCR: pypdf, python-docx
- Persistence/database: psycopg

## 주요 파일 후보

### Ingestion/source intake

- `graphify/__main__.py`
- `graphify/callflow_html.py`
- `graphify/export.py`
- `graphify/ingest.py`
- `graphify/llm.py`
- `graphify/scip_ingest.py`
- `.github/workflows/release-graph.yml`
- `tests/test_ingest.py`
- `tests/test_scip_ingest.py`
- `tests/test_skillgen.py`
- `ARCHITECTURE.md`
- `CHANGELOG.md`
- ... 6 more

### Parsing/OCR/document extraction

- `graphify/callflow_html.py`
- `graphify/detect.py`
- `graphify/ingest.py`
- `graphify/llm.py`
- `worked/mixed-corpus/raw/analyze.py`
- `pyproject.toml`
- `tests/test_analyze.py`
- `tests/test_cli_export.py`
- `tests/test_detect.py`
- `tests/test_image_vision.py`
- `tests/test_office_limits.py`
- `tests/test_watch.py`
- ... 6 more

### Chunking/splitting

- `graphify/__main__.py`
- `graphify/build.py`
- `graphify/cluster.py`
- `graphify/dedup.py`
- `graphify/detect.py`
- `graphify/export.py`
- `graphify/extract.py`
- `graphify/llm.py`
- `graphify/prs.py`
- `graphify/security.py`
- `graphify/semantic_cleanup.py`
- `graphify/serve.py`
- ... 6 more

### Embedding/vector index

- `graphify/detect.py`
- `graphify/export.py`
- `graphify/extract.py`
- `graphify/ingest.py`
- `graphify/llm.py`
- `graphify/security.py`
- `tests/test_detect.py`
- `tests/test_languages.py`
- `tests/test_provider_registry.py`
- `CHANGELOG.md`
- `SECURITY.md`
- `docs/how-it-works.md`
- ... 6 more

### Retrieval/search/rerank

- `graphify/__main__.py`
- `graphify/_minhash.py`
- `graphify/build.py`
- `graphify/cache.py`
- `graphify/callflow_html.py`
- `graphify/dedup.py`
- `graphify/detect.py`
- `graphify/diagnostics.py`
- `graphify/export.py`
- `graphify/extract.py`
- `graphify/google_workspace.py`
- `graphify/hooks.py`
- ... 6 more

### Wiki/graph/entity model

- `graphify/__main__.py`
- `graphify/affected.py`
- `graphify/analyze.py`
- `graphify/benchmark.py`
- `graphify/build.py`
- `graphify/callflow_html.py`
- `graphify/cargo_introspect.py`
- `graphify/cluster.py`
- `graphify/dedup.py`
- `graphify/detect.py`
- `graphify/diagnostics.py`
- `graphify/export.py`
- ... 6 more

### Memory/update lifecycle

- `graphify/__main__.py`
- `graphify/_minhash.py`
- `graphify/build.py`
- `graphify/cache.py`
- `graphify/callflow_html.py`
- `graphify/dedup.py`
- `graphify/detect.py`
- `graphify/diagnostics.py`
- `graphify/export.py`
- `graphify/extract.py`
- `graphify/global_graph.py`
- `graphify/google_workspace.py`
- ... 6 more

### Provenance/citation/evidence

- `graphify/callflow_html.py`
- `graphify/cargo_introspect.py`
- `graphify/detect.py`
- `graphify/diagnostics.py`
- `graphify/export.py`
- `graphify/extract.py`
- `graphify/global_graph.py`
- `graphify/google_workspace.py`
- `graphify/ingest.py`
- `graphify/llm.py`
- `graphify/symbol_resolution.py`
- `graphify/watch.py`
- ... 6 more

### Evaluation/observability

- `graphify/__main__.py`
- `graphify/benchmark.py`
- `graphify/build.py`
- `graphify/callflow_html.py`
- `graphify/detect.py`
- `graphify/extract.py`
- `graphify/llm.py`
- `pyproject.toml`
- `worked/karpathy-repos/graph.json`
- `worked/rsl-siege-manager/manifest.json`
- `tests/bench_extract.py`
- `tests/test_analyze.py`
- ... 6 more

### Agent/MCP/tool surface

- `graphify/__main__.py`
- `graphify/build.py`
- `graphify/cache.py`
- `graphify/callflow_html.py`
- `graphify/cluster.py`
- `graphify/detect.py`
- `graphify/export.py`
- `graphify/extract.py`
- `graphify/llm.py`
- `graphify/mcp_ingest.py`
- `graphify/prs.py`
- `graphify/security.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| graphify/__main__.py | 2829 | from graphify.ingest import save_query_result as _sqr |
| graphify/__main__.py | 3100 | from graphify.ingest import ingest as _ingest |
| graphify/callflow_html.py | 758 | "ingest-cache-update", |
| graphify/callflow_html.py | 760 | "Ingestion & Updates", |
| graphify/callflow_html.py | 762 | "ingest", "fetch", "download", "url", "html", "markdown", |
| graphify/callflow_html.py | 773 | "handle", "upload", "search", "delete", "enrich", |
| graphify/callflow_html.py | 1307 | if "ingest" in lower or "clone" in lower or "git" in lower: |
| graphify/export.py | 116 | See `graphify.ingest._yaml_str` for the full rationale; duplicated here to |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| graphify/callflow_html.py | 1163 | lines.append(f" %% Omitted for readability: {omitted_nodes} nodes, {omitted_edges} edges") |
| graphify/detect.py | 31 | PAPER_EXTENSIONS = {'.pdf'} |
| graphify/detect.py | 33 | OFFICE_EXTENSIONS = {'.docx', '.xlsx'} |
| graphify/detect.py | 40 | # Resource caps for parsing untrusted office/PDF files (F2). A corpus is |
| graphify/detect.py | 41 | # attacker-controllable (graphify runs on cloned/shared folders), and .docx/.xlsx |
| graphify/detect.py | 416 | """Extract plain text from a PDF file using pypdf.""" |
| graphify/detect.py | 424 | text = page.extract_text() |
| graphify/detect.py | 433 | """Convert a .docx file to markdown text using python-docx.""" |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| graphify/__main__.py | 2193 | print(" --token-budget N per-chunk token cap for semantic extraction (default: 60000)") |
| graphify/__main__.py | 3236 | # node-overlap so the existing .graphify_labels.json keeps attaching |
| graphify/__main__.py | 4316 | # Also track per-chunk success so we can fail loudly when |
| graphify/__main__.py | 4317 | # every chunk errors (e.g. missing backend SDK package). |
| graphify/__main__.py | 4323 | f"[graphify extract] chunk {idx + 1}/{total} done", |
| graphify/__main__.py | 4343 | # on_chunk_done only fires after a chunk succeeds. If fresh |
| graphify/__main__.py | 4350 | f"see per-chunk errors above. If you see 'requires the X package', " |
| graphify/__main__.py | 4411 | # whose chunk failed have no source_file entry in sem_result — leaving |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| graphify/detect.py | 395 | # PDFs inside Xcode asset catalogs are vector icons, not papers |
| graphify/export.py | 114 | """Escape a value for safe embedding in a YAML double-quoted scalar (F-009). |
| graphify/export.py | 560 | """Escape a string for safe embedding in a Cypher single-quoted literal. |
| graphify/ingest.py | 14 | """Escape a string for embedding in a YAML double-quoted scalar. |
| graphify/llm.py | 208 | # silently is a corpus/key exfiltration vector. Require an explicit opt-in; |
| graphify/security.py | 394 | Safe for embedding in JSON data (inside <script> tags) and plain text. |
| tests/test_detect.py | 29 | # PDFs inside Xcode asset catalogs are vector icons, not papers |
| tests/test_languages.py | 202 | assert ("HttpClient", "vector") in _edge_labels(r, "references", "field") |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| graphify/__main__.py | 1588 | not search. Clean it up on install so a stale, never-loaded copy does not |
| graphify/__main__.py | 1832 | print(f" .claude/settings.json -> PreToolUse hooks registered (Bash search + Read/Glob)") |
| graphify/__main__.py | 2051 | m = _re.search(r"github\.com[:/]([^/]+)/([^/]+?)(?:\.git)?$", url) |
| graphify/_minhash.py | 53 | """Numerical integration — replaces scipy.integrate.quad for LSH param search.""" |
| graphify/build.py | 415 | has_suffix = bool(_CHUNK_SUFFIX.search(node["id"])) |
| graphify/build.py | 416 | existing_has_suffix = bool(_CHUNK_SUFFIX.search(existing["id"])) |
| graphify/cache.py | 76 | closer = _FRONTMATTER_DELIM.search(text, opener.end()) |
| graphify/callflow_html.py | 458 | return "zh-CN" if re.search(r"[\u4e00-\u9fff]", sample) else "en" |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| graphify/__main__.py | 2152 | print(" --no-label keep 'Community N' placeholders (skip LLM community naming)") |
| graphify/__main__.py | 2153 | print(" --backend=<name> backend to use for community naming (default: auto-detect)") |
| graphify/__main__.py | 2154 | print(" --model=<name> model to use for community naming") |
| graphify/__main__.py | 2157 | print(" --model=<name> model to use for community naming") |
| graphify/__main__.py | 2164 | print(" --relation R edge relation to traverse in reverse (repeatable)") |
| graphify/__main__.py | 2760 | print("Usage: graphify affected \"<node-or-label>\" [--relation R] [--depth N] [--graph path]", file=sys.stderr) |
| graphify/__main__.py | 2766 | relations: list[str] = [] |
| graphify/__main__.py | 2790 | elif args[i] == "--relation" and i + 1 < len(args): |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| graphify/__main__.py | 83 | ``global_graph``, ``watch``, ``export``) call the security helper directly |
| graphify/__main__.py | 110 | # at references/ but the dir is gone (manual delete, partial upgrade), the |
| graphify/__main__.py | 129 | Prevents stale-version warnings from platforms that were installed previously |
| graphify/__main__.py | 215 | Stages the packaged dir into ``references.tmp`` (copytree), drops any stale |
| graphify/__main__.py | 699 | # Refresh version stamps in all other previously-installed skill dirs so |
| graphify/__main__.py | 700 | # stale-version warnings don't fire for platforms not explicitly re-installed. |
| graphify/__main__.py | 1588 | not search. Clean it up on install so a stale, never-loaded copy does not |
| graphify/__main__.py | 2034 | """Clone a GitHub repo to a local cache dir and return the path. |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| graphify/callflow_html.py | 208 | confidence = first_present(edge, "confidence", "evidence", "provenance", default="EXTRACTED") |
| graphify/cargo_introspect.py | 76 | for source_name, (source_id, manifest, data) in sorted(crates.items()): |
| graphify/cargo_introspect.py | 87 | "source": source_id, |
| graphify/detect.py | 164 | re.compile(r'\\cite\{'), # LaTeX citation |
| graphify/detect.py | 165 | re.compile(r'\[\d+\]'), # Numbered citation [1], [23] (inline) |
| graphify/detect.py | 166 | re.compile(r'\[\n\d+\n\]'), # Numbered citation spread across lines (markdown conversion) |
| graphify/diagnostics.py | 124 | source_path = Path(path) |
| graphify/diagnostics.py | 125 | if not source_path.exists(): |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| graphify/__main__.py | 82 | ``build``, ``benchmark``, ``tree_html``, ``callflow_html``, ``prs``, |
| graphify/__main__.py | 2210 | print(" benchmark [graph.json] measure token reduction vs naive full-corpus approach") |
| graphify/__main__.py | 3872 | elif cmd == "benchmark": |
| graphify/__main__.py | 3873 | from graphify.benchmark import run_benchmark, print_benchmark |
| graphify/benchmark.py | 1 | """Token-reduction benchmark - measures how much context graphify saves vs naive full-corpus approach.""" |
| graphify/benchmark.py | 97 | questions: list of questions to benchmark; defaults to _SAMPLE_QUESTIONS |
| graphify/benchmark.py | 140 | """Print a human-readable benchmark report.""" |
| graphify/benchmark.py | 142 | print(f"Benchmark error: {result['error']}") |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| graphify/__main__.py | 1 | """graphify CLI - `graphify install` sets up the Claude Code skill.""" |
| graphify/__main__.py | 29 | The six always-on blocks (CLAUDE.md / AGENTS.md / GEMINI.md / VS Code |
| graphify/__main__.py | 51 | "_CLAUDE_MD_SECTION": "claude-md", |
| graphify/__main__.py | 52 | "_AGENTS_MD_SECTION": "agents-md", |
| graphify/__main__.py | 53 | "_GEMINI_MD_SECTION": "gemini-md", |
| graphify/__main__.py | 81 | sys.exit(1)`` idiom. Library/MCP/loader callers (``serve._load_graph``, |
| graphify/__main__.py | 141 | if platform_name == "gemini": |
| graphify/__main__.py | 143 | return (project_dir or Path(".")) / ".gemini" / "skills" / "graphify" / "SKILL.md" |

## Gap

_없음_
