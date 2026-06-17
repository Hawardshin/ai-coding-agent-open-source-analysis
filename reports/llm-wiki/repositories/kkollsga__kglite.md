# kkollsga/kglite 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/kkollsga__kglite |
| remote | https://github.com/kkollsga/kglite |
| HEAD | 2adf3ab (2026-06-18) release(0.11.1): HNSW in Cypher, ~5-6× faster index build, embedding-provenance papercuts |
| branch | main |
| groups | llm-wiki-100 |
| files | 896 |
| dirs | 131 |
| stack | Python, Rust |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `KGLite — Knowledge graph for Python, built for LLM agents`, `Use cases`, `Why Cypher?`, `How it compares`, `Quick Start`, `Python (the headline distribution path)`, `Optional extras`, `Three storage modes — pick by graph size:`, `default (in-memory)   — small/medium graphs, fastest queries`, `storage="mapped"      — mmap columns, RAM-friendly as you grow`, `storage="disk", path=…  — 100M+ nodes, Wikidata-scale, loaded lazily`, `Bulk-load nodes from a DataFrame.`, `Bulk-load relationships the same way.`, `Query — returns a ResultView (lazy; data stays in Rust until accessed).`, `Or get a pandas DataFrame directly.`, `Persist to disk and reload. save() is atomic + fsync by default (crash-safe —`, `no torn file); load() raises a typed kglite.FileFormatError on a corrupt file.`, `Or serialize to/from bytes (no filesystem path):`

> KGLite — Knowledge graph for Python, built for LLM agents KGLite is an embedded, Cypher queryable knowledge graph for Python, built so you can hand it to an LLM agent. pip install kglite and point kglite.code tree.build(".") at any source directory — your first queryable graph in seconds. It ships with a bundled MCP server, a describe() method that emits a system prompt shaped schema, and structural validators that compose with Cypher. kglite is a pure Rust knowledge graph engine ( crates/kglite ) packaged for Python via pip install kglite . The Bolt server and MCP server binaries are sibling Rust crates wrapping the same engine. If you want kglite as a Rust library — without the Python wheel in your build — see Use from Rust below. Codebase → Claude examples/codebase to claude mcp.ipynb clones a GitHub repo, parses it into a code knowledge graph, and registers a workspace MCP server in 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .cargo | dir |
| .codecov.yml | file |
| .editorconfig | file |
| .github | dir |
| .gitignore | file |
| .readthedocs.yaml | file |
| benchmarks | dir |
| bolt_implementation.md | file |
| Cargo.lock | file |
| Cargo.toml | file |
| CHANGELOG.md | file |
| CLAUDE.md | file |
| CONTRIBUTING.md | file |
| crates | dir |
| CYPHER.md | file |
| docs | dir |
| examples | dir |
| FLUENT.md | file |
| kglite | dir |
| LICENSE | file |
| Makefile | file |
| mypy_stubtest.ini | file |
| pyproject.toml | file |
| README.md | file |
| scripts | dir |
| stubtest_allowlist.txt | file |
| tests | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| crates/ | 373 |
| tests/ | 370 |
| docs/ | 59 |
| kglite/ | 27 |
| benchmarks/ | 19 |
| (root) | 18 |
| examples/ | 12 |
| .github/ | 10 |
| scripts/ | 7 |
| .cargo/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| crates/ | 373 | preferred |
| docs/ | 59 | preferred |
| examples/ | 12 | preferred |
| tests/ | 370 | preferred |
| scripts/ | 7 | preferred |
| crates/kglite/ | 293 | large |
| crates/kglite/src/ | 284 | large |
| tests/fixtures/ | 106 | large |
| tests/fixtures/okf/ | 93 | large |
| tests/benchmarks/ | 50 | large |
| crates/kglite-py/ | 38 | large |
| crates/kglite-py/src/ | 37 | large |
| tests/benchmarks/baselines/ | 36 | large |
| docs/python/ | 33 | large |
| kglite/ | 27 | large |
| tests/golden/ | 22 | large |
| docs/python/guides/ | 20 | large |
| benchmarks/ | 19 | large |
| crates/kglite-c/ | 18 | large |
| tests/golden/snapshots/ | 18 | large |
| crates/kglite-mcp-server/ | 17 | large |
| kglite/datasets/ | 14 | large |
| crates/kglite-c/src/ | 12 | large |
| .github/ | 10 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Cargo.toml`
- `benchmarks/graphgen/Cargo.toml`
- `crates/kglite-bolt-server/Cargo.toml`
- `crates/kglite-c/Cargo.toml`
- `crates/kglite-mcp-server/Cargo.toml`
- `crates/kglite-py/Cargo.toml`
- `crates/kglite/Cargo.toml`
- `docs/requirements.txt`
- `pyproject.toml`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | kglite | false | false | true | true |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| Cargo.toml |  | true |      "crates/kglite",     "crates/kglite-py",     "crates/kglite-mcp-server",     "crates/kglite-bolt-server",     "crates/kglite-c",  |
| benchmarks/graphgen/Cargo.toml | graphgen | true |  |
| crates/kglite-bolt-server/Cargo.toml | kglite-bolt-server | false |  |
| crates/kglite-c/Cargo.toml | kglite-c | false |  |
| crates/kglite-mcp-server/Cargo.toml | kglite-mcp-server | false |  |
| crates/kglite-py/Cargo.toml | kglite-py | false |  |
| crates/kglite/Cargo.toml | kglite | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `benchmarks/graphgen/README.md`
- `crates/kglite-bolt-server/README.md`
- `crates/kglite-c/README.md`
- `crates/kglite-mcp-server/README.md`
- `crates/kglite/README.md`
- `crates/kglite/src/code_tree/docs/mod.rs`
- `crates/kglite/src/code_tree/docs/rst.rs`
- `docs/changelog.md`
- `docs/concepts/adding-a-query-language.md`
- `docs/concepts/adding-a-storage-backend.md`
- `docs/concepts/architecture.md`
- `docs/concepts/concurrency.md`
- `docs/concepts/cypher-conformance.md`
- `docs/concepts/design-decisions.md`
- `docs/concepts/index.md`
- `docs/concepts/multi-label-rationale.md`
- `docs/conf.py`
- `docs/contributing.md`
- `docs/index.md`
- `docs/operators/bolt-server.md`
- `docs/operators/index.md`
- `docs/python/core-concepts.md`
- `docs/python/error-handling.md`
- `docs/python/examples/manifest_cypher_tool.md`
- `docs/python/examples/manifest_value_codecs.md`
- `docs/python/examples/manifest_with_embedder.md`
- `docs/python/examples/manifest_workspace.md`
- `docs/python/getting-started.md`
- `docs/python/guides/ai-agents.md`
- `docs/python/guides/blueprints.md`
- `docs/python/guides/code-tree.md`
- `docs/python/guides/cypher.md`
- `docs/python/guides/data-loading.md`
- `docs/python/guides/datasets.md`
- `docs/python/guides/durable-apps.md`
- `docs/python/guides/graph-algorithms.md`
- `docs/python/guides/import-export.md`
- `docs/python/guides/index.md`
- `docs/python/guides/mcp-servers.md`
- `docs/python/guides/mcp-skills.md`
- `docs/python/guides/okf.md`
- `docs/python/guides/querying.md`
- `docs/python/guides/recipes.md`
- `docs/python/guides/sec.md`
- `docs/python/guides/semantic-search.md`
- `docs/python/guides/spatial.md`
- `docs/python/guides/timeseries.md`
- `docs/python/guides/traversal-hierarchy.md`
- ... 19 more

### 에이전트 지침 후보

- `CLAUDE.md`
- `crates/kglite-mcp-server/Cargo.toml`
- `crates/kglite-mcp-server/README.md`
- `crates/kglite-mcp-server/skills/code_graph_analysis.md`
- `crates/kglite-mcp-server/skills/code_graph_views.md`
- `crates/kglite-mcp-server/skills/cypher_query.md`
- `crates/kglite-mcp-server/skills/explore.md`
- `crates/kglite-mcp-server/skills/graph_overview.md`
- `crates/kglite-mcp-server/skills/read_code_source.md`
- `crates/kglite-mcp-server/skills/save_graph.md`
- `crates/kglite-mcp-server/src/code_source.rs`
- `crates/kglite-mcp-server/src/csv_http.rs`
- `crates/kglite-mcp-server/src/cypher_tools.rs`
- `crates/kglite-mcp-server/src/explore.rs`
- `crates/kglite-mcp-server/src/lib.rs`
- `crates/kglite-mcp-server/src/main.rs`
- `crates/kglite-mcp-server/src/tools.rs`
- `crates/kglite-mcp-server/src/value_codecs.rs`
- `docs/python/guides/mcp-servers.md`
- `docs/python/guides/mcp-skills.md`
- `docs/python/migrations/mcp-0.6-to-0.9.md`
- `docs/python/migrations/mcp-pre-0.9.20.md`
- `examples/codebase_to_claude_mcp.ipynb`
- `examples/open_source_workspace_mcp.yaml`
- `examples/sec_to_claude_mcp.ipynb`
- `kglite/_mcp_embed.py`
- `kglite/mcp_server.py`
- `tests/fixtures/graph_with_duplicates_mcp.yaml`
- `tests/fixtures/graph_with_orphans_mcp.yaml`
- `tests/fixtures/spatial_graph_mcp.yaml`
- `tests/fixtures/timeseries_graph_mcp.yaml`
- `tests/test_mcp_embed.py`
- `tests/test_mcp_server_bundled_wheel.py`
- `tests/test_mcp_server_smoke.py`
- `tests/test_single_mcp_server.py`

### 스펙/템플릿/명령/스킬 후보

- `crates/kglite-mcp-server/skills/code_graph_analysis.md`
- `crates/kglite-mcp-server/skills/code_graph_views.md`
- `crates/kglite-mcp-server/skills/cypher_query.md`
- `crates/kglite-mcp-server/skills/explore.md`
- `crates/kglite-mcp-server/skills/graph_overview.md`
- `crates/kglite-mcp-server/skills/read_code_source.md`
- `crates/kglite-mcp-server/skills/save_graph.md`
- `tests/fixtures/okf/google/stackoverflow/references/review_tasks.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `crates/kglite-c/tests/integration.rs`
- `crates/kglite/tests/datasets_sec_fetch_live.rs`
- `crates/kglite/tests/datasets_sec_idx_parser.rs`
- `crates/kglite/tests/datasets_sodir_fetch_live.rs`
- `crates/kglite/tests/fixtures/master.idx.sample`
- `kglite/datasets/sec/tests/__init__.py`
- `kglite/datasets/sec/tests/test_integration_live.py`
- `kglite/datasets/sec/tests/test_smoke.py`
- `kglite/datasets/sec/tests/test_usecases.py`
- `kglite/datasets/sec/tests/test_usecases_v2.py`
- `tests/__init__.py`
- `tests/bench_spatial.py`
- `tests/benchmark_storage_modes.py`
- `tests/benchmark_wikidata_disk.py`
- `tests/benchmarks/baselines/0_10_0.json`
- `tests/benchmarks/baselines/0_10_1.json`
- `tests/benchmarks/baselines/0_10_10.json`
- `tests/benchmarks/baselines/0_10_11.json`
- `tests/benchmarks/baselines/0_10_12.json`
- `tests/benchmarks/baselines/0_10_13.json`
- `tests/benchmarks/baselines/0_10_14.json`
- `tests/benchmarks/baselines/0_10_15.json`
- `tests/benchmarks/baselines/0_10_16.json`
- `tests/benchmarks/baselines/0_10_17.json`
- `tests/benchmarks/baselines/0_10_18.json`
- `tests/benchmarks/baselines/0_10_19.json`
- `tests/benchmarks/baselines/0_10_2.json`
- `tests/benchmarks/baselines/0_10_20.json`
- `tests/benchmarks/baselines/0_10_21.json`
- `tests/benchmarks/baselines/0_10_22.json`
- `tests/benchmarks/baselines/0_10_23.json`
- `tests/benchmarks/baselines/0_10_24.json`
- `tests/benchmarks/baselines/0_10_25.json`
- `tests/benchmarks/baselines/0_10_26.json`
- `tests/benchmarks/baselines/0_10_27.json`
- `tests/benchmarks/baselines/0_10_28.json`
- `tests/benchmarks/baselines/0_10_3.json`
- `tests/benchmarks/baselines/0_10_4.json`
- `tests/benchmarks/baselines/0_10_5.json`
- `tests/benchmarks/baselines/0_10_5.linux.json`
- `tests/benchmarks/baselines/0_10_6.json`
- `tests/benchmarks/baselines/0_10_7.json`
- `tests/benchmarks/baselines/0_10_8.json`
- `tests/benchmarks/baselines/0_10_9.json`
- `tests/benchmarks/baselines/0_11_0.json`
- `tests/benchmarks/baselines/0_11_1.json`
- `tests/benchmarks/baselines/0_9_52.json`
- `tests/benchmarks/baselines/0_9_52.linux.json`
- `tests/benchmarks/baselines/current.json`
- `tests/benchmarks/baselines/current.linux.json`
- `tests/benchmarks/bench_tier_b.py`
- `tests/benchmarks/bench_vector_index.py`
- `tests/benchmarks/conftest.py`
- `tests/benchmarks/phase11_compare.py`
- `tests/benchmarks/phase11_harness.py`
- `tests/benchmarks/test_bench_bolt.py`
- `tests/benchmarks/test_bench_code_tree_new.py`
- `tests/benchmarks/test_bench_core.py`
- `tests/benchmarks/test_bench_hotpaths.py`
- `tests/benchmarks/test_bench_memory.py`
- `tests/benchmarks/test_bench_planner.py`
- `tests/benchmarks/test_large_mmap.py`
- `tests/benchmarks/test_mapped_scale.py`
- `tests/benchmarks/test_multihop.py`
- `tests/conftest.py`
- `tests/data/sample_wikidata.nt`
- `tests/fixtures/CAT_G_N_FIXTURES.md`
- `tests/fixtures/__init__.py`
- `tests/fixtures/build_fixtures.py`
- `tests/fixtures/build_tiny_graph.py`
- `tests/fixtures/graph_with_duplicates.kgl`
- `tests/fixtures/graph_with_duplicates_mcp.yaml`
- `tests/fixtures/graph_with_orphans.kgl`
- `tests/fixtures/graph_with_orphans_mcp.yaml`
- `tests/fixtures/okf/golden/obsidian/MEMORY.md`
- `tests/fixtures/okf/golden/obsidian/alice.md`
- `tests/fixtures/okf/golden/obsidian/bob.md`
- `tests/fixtures/okf/golden/okf/datasets/sales.md`
- `tests/fixtures/okf/golden/okf/guide.md`
- `tests/fixtures/okf/golden/okf/guide/intro.md`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/benchmarks.yml`
- `.github/workflows/build_wheels.yml`
- `.github/workflows/ci.yml`
- `.github/workflows/publish_crates.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .rs | 355 |
| .py | 259 |
| .md | 171 |
| .json | 61 |
| .toml | 10 |
| .yml | 9 |
| .yaml | 6 |
| .kgl | 4 |
| .csv | 2 |
| .gitignore | 2 |
| .ipynb | 2 |
| .lock | 2 |
| .pyi | 2 |
| .txt | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `crates/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `crates/kglite-mcp-server/skills/code_graph_analysis.md 스펙/명령 의미`
- `crates/kglite-mcp-server/skills/code_graph_views.md 스펙/명령 의미`
- `crates/kglite-mcp-server/skills/cypher_query.md 스펙/명령 의미`
- `crates/kglite-mcp-server/skills/explore.md 스펙/명령 의미`
- `crates/kglite-mcp-server/skills/graph_overview.md 스펙/명령 의미`
- `Cargo.toml 실행 스크립트와 패키지 경계`
- `benchmarks/graphgen/Cargo.toml 실행 스크립트와 패키지 경계`
- `crates/kglite-bolt-server/Cargo.toml 실행 스크립트와 패키지 경계`
- `crates/kglite-c/Cargo.toml 실행 스크립트와 패키지 경계`
- `crates/kglite-mcp-server/Cargo.toml 실행 스크립트와 패키지 경계`

