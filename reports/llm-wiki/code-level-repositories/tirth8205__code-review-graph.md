# tirth8205/code-review-graph 코드 레벨 분석

생성일: 2026-06-17T23:31:14.582Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (103) |
| stars | 18632 |
| language | Python |
| tags | rag, knowledge-base, agent-knowledge, korea-signal |
| files/code/source | 274/151/83 |
| tests/ci | 92/4 |
| local path | sources/tirth8205__code-review-graph |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 7 | 3 | code_review_graph/analysis.py:337 f"'{b['name']}' is a critical connector " |
| Parsing/OCR/document extraction | code | 3 | 1 | code_review_graph/tools/query.py:559 # Make file_path relative for readability |
| Chunking/splitting | code | 10 | 4 | code_review_graph/changes.py:178 """Find graph nodes whose line ranges overlap the changed lines. |
| Embedding/vector index | code | 40 | 11 | code_review_graph/embeddings.py:1 """Vector embedding support for semantic code search. |
| Retrieval/search/rerank | code | 75 | 38 | code_review_graph/eval/benchmarks/multi_hop_retrieval.py:1 """Multi-hop retrieval benchmark. |
| Wiki/graph/entity model | code | 53 | 24 | code_review_graph/analysis.py:122 - single_file_communities: entire community in one file |
| Memory/update lifecycle | code | 112 | 42 | code_review_graph/__init__.py:1 """Code Review Graph - MCP server for persistent incremental code knowledge graphs.""" |
| Provenance/citation/evidence | code | 5 | 3 | code_review_graph/parser.py:1700 # end offsets for call attribution. |
| Evaluation/observability | code | 63 | 29 | code_review_graph/changes.py:378 # list keeps every entry (a downstream consumer needs precision via |
| Agent/MCP/tool surface | code | 73 | 26 | code_review_graph/__init__.py:1 """Code Review Graph - MCP server for persistent incremental code knowledge graphs.""" |

## 의존성 신호

- LLM/app framework: sentence-transformers, ollama
- Graph/KG store: networkx, igraph
- Persistence/database: better-sqlite3, @types/better-sqlite3

## 주요 파일 후보

### Ingestion/source intake

- `code_review_graph/analysis.py`
- `code_review_graph/memory.py`
- `code-review-graph-vscode/src/webview/graph.ts`
- `.github/workflows/eval.yml`
- `.github/workflows/publish.yml`
- `CHANGELOG.md`
- `README.md`

### Parsing/OCR/document extraction

- `code_review_graph/tools/query.py`
- `code-review-graph-vscode/package-lock.json`
- `code_review_graph/eval/configs/gin.yaml`

### Chunking/splitting

- `code_review_graph/changes.py`
- `code_review_graph/incremental.py`
- `code_review_graph/parser.py`
- `code_review_graph/refactor.py`
- `action.yml`
- `tests/test_changes.py`
- `CHANGELOG.md`
- `docs/FAQ.md`
- `docs/GITHUB_ACTION.md`
- `docs/REPRODUCING.md`

### Embedding/vector index

- `code_review_graph/embeddings.py`
- `code_review_graph/cli.py`
- `code_review_graph/main.py`
- `code_review_graph/search.py`
- `code_review_graph/token_benchmark.py`
- `code_review_graph/tools/__init__.py`
- `code_review_graph/tools/query.py`
- `code-review-graph-vscode/src/extension.ts`
- `code-review-graph-vscode/src/backend/cli.ts`
- `code-review-graph-vscode/src/backend/sqlite.ts`
- `code-review-graph-vscode/src/views/treeView.ts`
- `pyproject.toml`
- ... 6 more

### Retrieval/search/rerank

- `code_review_graph/eval/benchmarks/multi_hop_retrieval.py`
- `code_review_graph/cli.py`
- `code_review_graph/communities.py`
- `code_review_graph/embeddings.py`
- `code_review_graph/enrich.py`
- `code_review_graph/flows.py`
- `code_review_graph/graph.py`
- `code_review_graph/hints.py`
- `code_review_graph/main.py`
- `code_review_graph/parser.py`
- `code_review_graph/postprocessing.py`
- `code_review_graph/prompts.py`
- ... 6 more

### Wiki/graph/entity model

- `code_review_graph/analysis.py`
- `code_review_graph/changes.py`
- `code_review_graph/cli.py`
- `code_review_graph/communities.py`
- `code_review_graph/enrich.py`
- `code_review_graph/exports.py`
- `code_review_graph/graph_diff.py`
- `code_review_graph/graph.py`
- `code_review_graph/hints.py`
- `code_review_graph/main.py`
- `code_review_graph/parser.py`
- `code_review_graph/postprocessing.py`
- ... 6 more

### Memory/update lifecycle

- `code_review_graph/__init__.py`
- `code_review_graph/changes.py`
- `code_review_graph/cli.py`
- `code_review_graph/communities.py`
- `code_review_graph/custom_languages.py`
- `code_review_graph/daemon_cli.py`
- `code_review_graph/daemon.py`
- `code_review_graph/embeddings.py`
- `code_review_graph/enrich.py`
- `code_review_graph/flows.py`
- `code_review_graph/graph_diff.py`
- `code_review_graph/graph.py`
- ... 6 more

### Provenance/citation/evidence

- `code_review_graph/parser.py`
- `diagrams/generate_diagrams.py`
- `code_review_graph/eval/benchmarks/impact_accuracy.py`
- `README.md`
- `docs/REPRODUCING.md`

### Evaluation/observability

- `code_review_graph/changes.py`
- `code_review_graph/cli.py`
- `code_review_graph/communities.py`
- `code_review_graph/embeddings.py`
- `code_review_graph/flows.py`
- `code_review_graph/graph.py`
- `code_review_graph/jedi_resolver.py`
- `code_review_graph/main.py`
- `code_review_graph/prompts.py`
- `code_review_graph/rescript_resolver.py`
- `code_review_graph/skills.py`
- `code_review_graph/spring_resolver.py`
- ... 6 more

### Agent/MCP/tool surface

- `code_review_graph/__init__.py`
- `code_review_graph/changes.py`
- `code_review_graph/cli.py`
- `code_review_graph/context_savings.py`
- `code_review_graph/embeddings.py`
- `code_review_graph/enrich.py`
- `code_review_graph/flows.py`
- `code_review_graph/graph.py`
- `code_review_graph/hints.py`
- `code_review_graph/incremental.py`
- `code_review_graph/main.py`
- `code_review_graph/parser.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| code_review_graph/analysis.py | 337 | f"'{b['name']}' is a critical connector " |
| code_review_graph/memory.py | 22 | """Save a Q&A result as markdown for re-ingestion. |
| code-review-graph-vscode/src/webview/graph.ts | 227 | // Data ingestion |
| .github/workflows/eval.yml | 41 | - name: Upload result CSVs |
| .github/workflows/eval.yml | 43 | uses: actions/upload-artifact@v4 |
| .github/workflows/publish.yml | 32 | run: twine upload dist/* |
| CHANGELOG.md | 410 | - **Memory/feedback loop**: persist Q&A results as markdown for re-ingestion via `save_result` / `list_memories` / `clear_memories`. |
| README.md | 270 | \| **Memory loop** \| Persist Q&A results as markdown for re-ingestion, so the graph grows from queries \| |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| code_review_graph/tools/query.py | 559 | # Make file_path relative for readability |
| code-review-graph-vscode/package-lock.json | 950 | "cheerio": "^1.0.0-rc.9", |
| code-review-graph-vscode/package-lock.json | 1383 | "node_modules/cheerio": { |
| code-review-graph-vscode/package-lock.json | 1385 | "resolved": "https://registry.npmjs.org/cheerio/-/cheerio-1.2.0.tgz", |
| code-review-graph-vscode/package-lock.json | 1390 | "cheerio-select": "^2.1.0", |
| code-review-graph-vscode/package-lock.json | 1406 | "url": "https://github.com/cheeriojs/cheerio?sponsor=1" |
| code-review-graph-vscode/package-lock.json | 1409 | "node_modules/cheerio-select": { |
| code-review-graph-vscode/package-lock.json | 1411 | "resolved": "https://registry.npmjs.org/cheerio-select/-/cheerio-select-2.1.0.tgz", |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| code_review_graph/changes.py | 178 | """Find graph nodes whose line ranges overlap the changed lines. |
| code_review_graph/changes.py | 204 | # Check overlap with any changed range. |
| code_review_graph/incremental.py | 372 | and only matches the prefix, so we additionally test each path segment |
| code_review_graph/incremental.py | 378 | # Then: treat simple single-segment "dir/**" patterns as |
| code_review_graph/incremental.py | 385 | # Only single-segment dir patterns (no "/" inside the prefix) |
| code_review_graph/incremental.py | 397 | chunk = path.read_bytes()[:8192] |
| code_review_graph/incremental.py | 398 | return b"\x00" in chunk |
| code_review_graph/incremental.py | 457 | # Extract trunk/branches/tags segment from SVN URL |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| code_review_graph/embeddings.py | 1 | """Vector embedding support for semantic code search. |
| code_review_graph/embeddings.py | 6 | 3. MiniMax (embo-01) - High-quality 1536-dim cloud embeddings. Requires MINIMAX_API_KEY. |
| code_review_graph/embeddings.py | 7 | 4. OpenAI-compatible - Any endpoint speaking OpenAI /v1/embeddings (real OpenAI, |
| code_review_graph/embeddings.py | 142 | "Run: pip install code-review-graph[embeddings]" |
| code_review_graph/embeddings.py | 165 | def __init__(self, api_key: str, model: str = "gemini-embedding-001") -> None: |
| code_review_graph/embeddings.py | 174 | "Run: pip install code-review-graph[google-embeddings]" |
| code_review_graph/embeddings.py | 189 | results.extend([e.values for e in response.embeddings]) |
| code_review_graph/embeddings.py | 219 | vec = response.embeddings[0].values |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| code_review_graph/eval/benchmarks/multi_hop_retrieval.py | 1 | """Multi-hop retrieval benchmark. |
| code_review_graph/eval/benchmarks/multi_hop_retrieval.py | 6 | 1. ``hybrid_search(nl_query)`` to find a starting anchor from a natural- |
| code_review_graph/eval/benchmarks/multi_hop_retrieval.py | 13 | - ``anchor_found`` — did semantic search return a node whose qualified_name |
| code_review_graph/eval/benchmarks/multi_hop_retrieval.py | 15 | - ``anchor_rank`` — index in the search result list (lower is better). |
| code_review_graph/eval/benchmarks/multi_hop_retrieval.py | 45 | """Run the multi-hop retrieval benchmark for one repo.""" |
| code_review_graph/eval/benchmarks/multi_hop_retrieval.py | 48 | from code_review_graph.search import hybrid_search |
| code_review_graph/eval/benchmarks/multi_hop_retrieval.py | 62 | # Step 1 — semantic search |
| code_review_graph/eval/benchmarks/multi_hop_retrieval.py | 64 | hits = hybrid_search(store, nl_query, limit=k) |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| code_review_graph/analysis.py | 122 | - single_file_communities: entire community in one file |
| code_review_graph/analysis.py | 150 | # 2. Build community sizes and file maps from node data |
| code_review_graph/analysis.py | 219 | - Cross-community: source and target in different communities |
| code_review_graph/analysis.py | 256 | # Cross-community (+0.3) |
| code_review_graph/analysis.py | 263 | reasons.append("cross-community") |
| code_review_graph/analysis.py | 325 | - low_cohesion: Should community X be split? |
| code_review_graph/analysis.py | 327 | - surprising: Why does A call B across community boundary? |
| code_review_graph/analysis.py | 369 | if "cross-community" in s["reasons"]: |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| code_review_graph/__init__.py | 1 | """Code Review Graph - MCP server for persistent incremental code knowledge graphs.""" |
| code_review_graph/changes.py | 377 | # Dedup by bare name in the human summary. The underlying test_gaps |
| code_review_graph/cli.py | 8 | code-review-graph watch |
| code_review_graph/cli.py | 10 | code-review-graph serve [--auto-watch] [--http] [--host ADDR] [--port PORT] |
| code_review_graph/cli.py | 11 | code-review-graph mcp [--auto-watch] |
| code_review_graph/cli.py | 115 | {g}update{r} Incremental update {d}(changed files only){r} |
| code_review_graph/cli.py | 116 | {g}watch{r} Auto-update on file changes |
| code_review_graph/cli.py | 125 | {g}daemon{r} Multi-repo watch daemon management |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| code_review_graph/parser.py | 1700 | # end offsets for call attribution. |
| diagrams/generate_diagrams.py | 440 | # Footnote — styled as a subtle callout |
| code_review_graph/eval/benchmarks/impact_accuracy.py | 8 | this mode is an upper bound by construction, not independent evidence. |
| README.md | 222 | The benchmark also runs an honest **co-change mode**: the predictor is seeded with a single changed file and graded against the *other* files the author actually touched in the same commit — independent-ish evidence from |
| docs/REPRODUCING.md | 226 | \| `graph-derived (circular — upper bound)` \| changed files + files with CALLS/IMPORTS_FROM edges into them — **derived from the same graph the predictor traverses** \| An upper bound. Recall 1.0 here is partly true by con |
| docs/REPRODUCING.md | 227 | \| `co-change (same commit, seed excluded)` \| the *other* files the author actually touched in the same commit, given a single seed file \| Independent-ish evidence from git history. Expect substantially lower recall. \| |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| code_review_graph/changes.py | 378 | # list keeps every entry (a downstream consumer needs precision via |
| code_review_graph/cli.py | 126 | {g}eval{r} Run evaluation benchmarks |
| code_review_graph/cli.py | 610 | # eval |
| code_review_graph/cli.py | 611 | eval_cmd = sub.add_parser("eval", help="Run evaluation benchmarks") |
| code_review_graph/cli.py | 613 | "--benchmark", |
| code_review_graph/cli.py | 833 | if args.command == "eval": |
| code_review_graph/cli.py | 834 | from .eval.reporter import generate_full_report, generate_readme_tables |
| code_review_graph/cli.py | 835 | from .eval.runner import run_eval |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| code_review_graph/__init__.py | 1 | """Code Review Graph - MCP server for persistent incremental code knowledge graphs.""" |
| code_review_graph/changes.py | 306 | # explicit changed_ranges path (MCP) is untouched — tools/review.py |
| code_review_graph/cli.py | 11 | code-review-graph mcp [--auto-watch] |
| code_review_graph/cli.py | 51 | "codex", "claude", "claude-code", "cursor", "windsurf", "zed", |
| code_review_graph/cli.py | 52 | "continue", "opencode", "antigravity", "gemini-cli", "qwen", "kiro", "qoder", |
| code_review_graph/cli.py | 112 | {g}install{r} Set up MCP server for AI coding platforms |
| code_review_graph/cli.py | 127 | {g}serve{r} Start MCP server {d}(stdio, or {g}--http{r} on localhost:5555){r} |
| code_review_graph/cli.py | 145 | if target in ("claude", "all"): |

## Gap

_없음_
