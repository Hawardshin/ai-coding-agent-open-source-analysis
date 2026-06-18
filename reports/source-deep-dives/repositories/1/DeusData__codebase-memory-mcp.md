# DeusData/codebase-memory-mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

High-performance code intelligence MCP server. Indexes codebases into a persistent knowledge graph — average repo in milliseconds. 158 languages, sub-ms queries, 99% fewer tokens. Single static binary, zero dependencies.

## 요약

- 조사 단위: `sources/DeusData__codebase-memory-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,673 files, 417 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_mcp.c, src/mcp/mcp.c, src/mcp/mcp.h이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | DeusData/codebase-memory-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | C |
| Stars | 5246 |
| Forks | 484 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/DeusData__codebase-memory-mcp](../../../../sources/DeusData__codebase-memory-mcp) |
| Existing report | [reports/global-trending/repositories/DeusData__codebase-memory-mcp.md](../../../global-trending/repositories/DeusData__codebase-memory-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1673 / 417 |
| Max observed depth | 8 |
| Top directories | .github, docs, graph-ui, internal, pkg, scripts, src, test-infrastructure, tests, tools, vendored |
| Top extensions | .c: 683, .h: 619, (none): 185, .sh: 38, .tsx: 31, .yml: 19, .json: 18, .md: 14, .py: 11, .txt: 10, .ts: 8, .js: 4 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 41 |
| docs | documentation surface | 9 |
| src | source boundary | 7 |
| .github | ci surface | 1 |
| graph-ui | top-level component | 1 |
| internal | top-level component | 1 |
| pkg | top-level component | 1 |
| scripts | top-level component | 1 |
| test-infrastructure | validation surface | 1 |
| tools | top-level component | 1 |
| vendored | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/test_mcp.c](../../../../sources/DeusData__codebase-memory-mcp/tests/test_mcp.c) | mcp signal |
| mcp | [src/mcp/mcp.c](../../../../sources/DeusData__codebase-memory-mcp/src/mcp/mcp.c) | mcp signal |
| mcp | [src/mcp/mcp.h](../../../../sources/DeusData__codebase-memory-mcp/src/mcp/mcp.h) | mcp signal |
| mcp | [scripts/test_mcp_rapid_init.py](../../../../sources/DeusData__codebase-memory-mcp/scripts/test_mcp_rapid_init.py) | mcp signal |
| agentRuntime | [tools/tree-sitter-magma/grammar.js](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-magma/grammar.js) | agentRuntime signal |
| agentRuntime | [tools/tree-sitter-magma/package.json](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-magma/package.json) | agentRuntime signal |
| agentRuntime | [tools/tree-sitter-magma/tree-sitter.json](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-magma/tree-sitter.json) | agentRuntime signal |
| agentRuntime | [tools/tree-sitter-magma/test/corpus/control_flow.txt](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-magma/test/corpus/control_flow.txt) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/DeusData__codebase-memory-mcp/server.json) | entrypoints signal |
| entrypoints | [src/main.c](../../../../sources/DeusData__codebase-memory-mcp/src/main.c) | entrypoints signal |
| entrypoints | [pkg/pypi/src/codebase_memory_mcp/__main__.py](../../../../sources/DeusData__codebase-memory-mcp/pkg/pypi/src/codebase_memory_mcp/__main__.py) | entrypoints signal |
| entrypoints | [pkg/go/cmd/codebase-memory-mcp/main.go](../../../../sources/DeusData__codebase-memory-mcp/pkg/go/cmd/codebase-memory-mcp/main.go) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [server.json](../../../../sources/DeusData__codebase-memory-mcp/server.json)<br>[src/main.c](../../../../sources/DeusData__codebase-memory-mcp/src/main.c)<br>[pkg/pypi/src/codebase_memory_mcp/__main__.py](../../../../sources/DeusData__codebase-memory-mcp/pkg/pypi/src/codebase_memory_mcp/__main__.py)<br>[pkg/go/cmd/codebase-memory-mcp/main.go](../../../../sources/DeusData__codebase-memory-mcp/pkg/go/cmd/codebase-memory-mcp/main.go)<br>[graph-ui/src/App.tsx](../../../../sources/DeusData__codebase-memory-mcp/graph-ui/src/App.tsx)<br>[graph-ui/src/main.tsx](../../../../sources/DeusData__codebase-memory-mcp/graph-ui/src/main.tsx) |
| agentRuntime | 29 | [tools/tree-sitter-magma/grammar.js](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-magma/grammar.js)<br>[tools/tree-sitter-magma/package.json](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-magma/package.json)<br>[tools/tree-sitter-magma/tree-sitter.json](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-magma/tree-sitter.json)<br>[tools/tree-sitter-magma/test/corpus/control_flow.txt](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-magma/test/corpus/control_flow.txt)<br>[tools/tree-sitter-magma/test/corpus/functions.txt](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-magma/test/corpus/functions.txt)<br>[tools/tree-sitter-magma/src/grammar.json](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-magma/src/grammar.json)<br>[tools/tree-sitter-magma/src/node-types.json](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-magma/src/node-types.json)<br>[tools/tree-sitter-magma/src/parser.c](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-magma/src/parser.c) |
| mcp | 11 | [tests/test_mcp.c](../../../../sources/DeusData__codebase-memory-mcp/tests/test_mcp.c)<br>[src/mcp/mcp.c](../../../../sources/DeusData__codebase-memory-mcp/src/mcp/mcp.c)<br>[src/mcp/mcp.h](../../../../sources/DeusData__codebase-memory-mcp/src/mcp/mcp.h)<br>[scripts/test_mcp_rapid_init.py](../../../../sources/DeusData__codebase-memory-mcp/scripts/test_mcp_rapid_init.py)<br>[pkg/scoop/codebase-memory-mcp.json](../../../../sources/DeusData__codebase-memory-mcp/pkg/scoop/codebase-memory-mcp.json)<br>[pkg/pypi/src/codebase_memory_mcp/__init__.py](../../../../sources/DeusData__codebase-memory-mcp/pkg/pypi/src/codebase_memory_mcp/__init__.py)<br>[pkg/pypi/src/codebase_memory_mcp/__main__.py](../../../../sources/DeusData__codebase-memory-mcp/pkg/pypi/src/codebase_memory_mcp/__main__.py)<br>[pkg/pypi/src/codebase_memory_mcp/_cli.py](../../../../sources/DeusData__codebase-memory-mcp/pkg/pypi/src/codebase_memory_mcp/_cli.py) |
| retrieval | 62 | [tests/test_cpp_index_hang.sh](../../../../sources/DeusData__codebase-memory-mcp/tests/test_cpp_index_hang.sh)<br>[tests/test_graph_buffer.c](../../../../sources/DeusData__codebase-memory-mcp/tests/test_graph_buffer.c)<br>[src/graph_buffer/graph_buffer.c](../../../../sources/DeusData__codebase-memory-mcp/src/graph_buffer/graph_buffer.c)<br>[src/graph_buffer/graph_buffer.h](../../../../sources/DeusData__codebase-memory-mcp/src/graph_buffer/graph_buffer.h)<br>[scripts/benchmark-index.sh](../../../../sources/DeusData__codebase-memory-mcp/scripts/benchmark-index.sh)<br>[scripts/benchmark-search-graph.sh](../../../../sources/DeusData__codebase-memory-mcp/scripts/benchmark-search-graph.sh)<br>[scripts/embed-frontend.sh](../../../../sources/DeusData__codebase-memory-mcp/scripts/embed-frontend.sh)<br>[pkg/scoop/codebase-memory-mcp.json](../../../../sources/DeusData__codebase-memory-mcp/pkg/scoop/codebase-memory-mcp.json) |
| spec | 6 | [internal/cbm/grammar_requirements.c](../../../../sources/DeusData__codebase-memory-mcp/internal/cbm/grammar_requirements.c)<br>[internal/cbm/vendored/grammars/requirements/LICENSE](../../../../sources/DeusData__codebase-memory-mcp/internal/cbm/vendored/grammars/requirements/LICENSE)<br>[internal/cbm/vendored/grammars/requirements/parser.c](../../../../sources/DeusData__codebase-memory-mcp/internal/cbm/vendored/grammars/requirements/parser.c)<br>[internal/cbm/vendored/grammars/requirements/tree_sitter/alloc.h](../../../../sources/DeusData__codebase-memory-mcp/internal/cbm/vendored/grammars/requirements/tree_sitter/alloc.h)<br>[internal/cbm/vendored/grammars/requirements/tree_sitter/array.h](../../../../sources/DeusData__codebase-memory-mcp/internal/cbm/vendored/grammars/requirements/tree_sitter/array.h)<br>[internal/cbm/vendored/grammars/requirements/tree_sitter/parser.h](../../../../sources/DeusData__codebase-memory-mcp/internal/cbm/vendored/grammars/requirements/tree_sitter/parser.h) |
| eval | 116 | [tools/tree-sitter-magma/test/corpus/control_flow.txt](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-magma/test/corpus/control_flow.txt)<br>[tools/tree-sitter-magma/test/corpus/functions.txt](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-magma/test/corpus/functions.txt)<br>[tools/tree-sitter-form/test/corpus/control_flow.txt](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-form/test/corpus/control_flow.txt)<br>[tools/tree-sitter-form/test/corpus/declarations.txt](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-form/test/corpus/declarations.txt)<br>[tools/tree-sitter-form/test/corpus/procedures.txt](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-form/test/corpus/procedures.txt)<br>[tests/grammar_cases.h](../../../../sources/DeusData__codebase-memory-mcp/tests/grammar_cases.h)<br>[tests/scale_contract.sh](../../../../sources/DeusData__codebase-memory-mcp/tests/scale_contract.sh)<br>[tests/smoke_guard.sh](../../../../sources/DeusData__codebase-memory-mcp/tests/smoke_guard.sh) |
| security | 16 | [SECURITY.md](../../../../sources/DeusData__codebase-memory-mcp/SECURITY.md)<br>[tests/smoke_guard.sh](../../../../sources/DeusData__codebase-memory-mcp/tests/smoke_guard.sh)<br>[tests/test_security.c](../../../../sources/DeusData__codebase-memory-mcp/tests/test_security.c)<br>[scripts/audit-grammar-security.sh](../../../../sources/DeusData__codebase-memory-mcp/scripts/audit-grammar-security.sh)<br>[scripts/audit-license-provenance.py](../../../../sources/DeusData__codebase-memory-mcp/scripts/audit-license-provenance.py)<br>[scripts/license-policy.json](../../../../sources/DeusData__codebase-memory-mcp/scripts/license-policy.json)<br>[scripts/security-allowlist.txt](../../../../sources/DeusData__codebase-memory-mcp/scripts/security-allowlist.txt)<br>[scripts/security-audit.sh](../../../../sources/DeusData__codebase-memory-mcp/scripts/security-audit.sh) |
| ci | 16 | [scripts/ci/check-glibc-compat.sh](../../../../sources/DeusData__codebase-memory-mcp/scripts/ci/check-glibc-compat.sh)<br>[scripts/ci/check-virustotal.sh](../../../../sources/DeusData__codebase-memory-mcp/scripts/ci/check-virustotal.sh)<br>[.github/workflows/_build.yml](../../../../sources/DeusData__codebase-memory-mcp/.github/workflows/_build.yml)<br>[.github/workflows/_lint.yml](../../../../sources/DeusData__codebase-memory-mcp/.github/workflows/_lint.yml)<br>[.github/workflows/_security.yml](../../../../sources/DeusData__codebase-memory-mcp/.github/workflows/_security.yml)<br>[.github/workflows/_smoke.yml](../../../../sources/DeusData__codebase-memory-mcp/.github/workflows/_smoke.yml)<br>[.github/workflows/_soak.yml](../../../../sources/DeusData__codebase-memory-mcp/.github/workflows/_soak.yml)<br>[.github/workflows/_test.yml](../../../../sources/DeusData__codebase-memory-mcp/.github/workflows/_test.yml) |
| container | 12 | [test-infrastructure/docker-compose.yml](../../../../sources/DeusData__codebase-memory-mcp/test-infrastructure/docker-compose.yml)<br>[test-infrastructure/Dockerfile](../../../../sources/DeusData__codebase-memory-mcp/test-infrastructure/Dockerfile)<br>[test-infrastructure/Dockerfile.alpine](../../../../sources/DeusData__codebase-memory-mcp/test-infrastructure/Dockerfile.alpine)<br>[test-infrastructure/Dockerfile.lint](../../../../sources/DeusData__codebase-memory-mcp/test-infrastructure/Dockerfile.lint)<br>[test-infrastructure/Dockerfile.mingw](../../../../sources/DeusData__codebase-memory-mcp/test-infrastructure/Dockerfile.mingw)<br>[pkg/glama/Dockerfile](../../../../sources/DeusData__codebase-memory-mcp/pkg/glama/Dockerfile)<br>[internal/cbm/vendored/grammars/dockerfile/LICENSE](../../../../sources/DeusData__codebase-memory-mcp/internal/cbm/vendored/grammars/dockerfile/LICENSE)<br>[internal/cbm/vendored/grammars/dockerfile/parser.c](../../../../sources/DeusData__codebase-memory-mcp/internal/cbm/vendored/grammars/dockerfile/parser.c) |
| instruction | 0 | not obvious |
| docs | 13 | [README.md](../../../../sources/DeusData__codebase-memory-mcp/README.md)<br>[vendored/mimalloc/src/prim/readme.md](../../../../sources/DeusData__codebase-memory-mcp/vendored/mimalloc/src/prim/readme.md)<br>[vendored/mimalloc/src/prim/windows/readme.md](../../../../sources/DeusData__codebase-memory-mcp/vendored/mimalloc/src/prim/windows/readme.md)<br>[pkg/pypi/README.md](../../../../sources/DeusData__codebase-memory-mcp/pkg/pypi/README.md)<br>[pkg/npm/README.md](../../../../sources/DeusData__codebase-memory-mcp/pkg/npm/README.md)<br>[docs/.nojekyll](../../../../sources/DeusData__codebase-memory-mcp/docs/.nojekyll)<br>[docs/BENCHMARK.md](../../../../sources/DeusData__codebase-memory-mcp/docs/BENCHMARK.md)<br>[docs/EVALUATION_PLAN.md](../../../../sources/DeusData__codebase-memory-mcp/docs/EVALUATION_PLAN.md) |
| config | 7 | [tools/tree-sitter-magma/package.json](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-magma/package.json)<br>[tools/tree-sitter-form/package.json](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-form/package.json)<br>[pkg/pypi/pyproject.toml](../../../../sources/DeusData__codebase-memory-mcp/pkg/pypi/pyproject.toml)<br>[pkg/npm/package.json](../../../../sources/DeusData__codebase-memory-mcp/pkg/npm/package.json)<br>[pkg/go/go.mod](../../../../sources/DeusData__codebase-memory-mcp/pkg/go/go.mod)<br>[graph-ui/package.json](../../../../sources/DeusData__codebase-memory-mcp/graph-ui/package.json)<br>[graph-ui/tsconfig.json](../../../../sources/DeusData__codebase-memory-mcp/graph-ui/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 116 | [tools/tree-sitter-magma/test/corpus/control_flow.txt](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-magma/test/corpus/control_flow.txt)<br>[tools/tree-sitter-magma/test/corpus/functions.txt](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-magma/test/corpus/functions.txt)<br>[tools/tree-sitter-form/test/corpus/control_flow.txt](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-form/test/corpus/control_flow.txt)<br>[tools/tree-sitter-form/test/corpus/declarations.txt](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-form/test/corpus/declarations.txt)<br>[tools/tree-sitter-form/test/corpus/procedures.txt](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-form/test/corpus/procedures.txt)<br>[tests/grammar_cases.h](../../../../sources/DeusData__codebase-memory-mcp/tests/grammar_cases.h) |
| CI workflows | 16 | [scripts/ci/check-glibc-compat.sh](../../../../sources/DeusData__codebase-memory-mcp/scripts/ci/check-glibc-compat.sh)<br>[scripts/ci/check-virustotal.sh](../../../../sources/DeusData__codebase-memory-mcp/scripts/ci/check-virustotal.sh)<br>[.github/workflows/_build.yml](../../../../sources/DeusData__codebase-memory-mcp/.github/workflows/_build.yml)<br>[.github/workflows/_lint.yml](../../../../sources/DeusData__codebase-memory-mcp/.github/workflows/_lint.yml)<br>[.github/workflows/_security.yml](../../../../sources/DeusData__codebase-memory-mcp/.github/workflows/_security.yml)<br>[.github/workflows/_smoke.yml](../../../../sources/DeusData__codebase-memory-mcp/.github/workflows/_smoke.yml) |
| Containers / deploy | 12 | [test-infrastructure/docker-compose.yml](../../../../sources/DeusData__codebase-memory-mcp/test-infrastructure/docker-compose.yml)<br>[test-infrastructure/Dockerfile](../../../../sources/DeusData__codebase-memory-mcp/test-infrastructure/Dockerfile)<br>[test-infrastructure/Dockerfile.alpine](../../../../sources/DeusData__codebase-memory-mcp/test-infrastructure/Dockerfile.alpine)<br>[test-infrastructure/Dockerfile.lint](../../../../sources/DeusData__codebase-memory-mcp/test-infrastructure/Dockerfile.lint)<br>[test-infrastructure/Dockerfile.mingw](../../../../sources/DeusData__codebase-memory-mcp/test-infrastructure/Dockerfile.mingw)<br>[pkg/glama/Dockerfile](../../../../sources/DeusData__codebase-memory-mcp/pkg/glama/Dockerfile) |
| Security / policy | 16 | [SECURITY.md](../../../../sources/DeusData__codebase-memory-mcp/SECURITY.md)<br>[tests/smoke_guard.sh](../../../../sources/DeusData__codebase-memory-mcp/tests/smoke_guard.sh)<br>[tests/test_security.c](../../../../sources/DeusData__codebase-memory-mcp/tests/test_security.c)<br>[scripts/audit-grammar-security.sh](../../../../sources/DeusData__codebase-memory-mcp/scripts/audit-grammar-security.sh)<br>[scripts/audit-license-provenance.py](../../../../sources/DeusData__codebase-memory-mcp/scripts/audit-license-provenance.py)<br>[scripts/license-policy.json](../../../../sources/DeusData__codebase-memory-mcp/scripts/license-policy.json) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `tests/test_mcp.c`, `src/mcp/mcp.c`, `src/mcp/mcp.h`.
2. Trace execution through entrypoints: `server.json`, `src/main.c`, `pkg/pypi/src/codebase_memory_mcp/__main__.py`.
3. Map agent/tool runtime through: `tools/tree-sitter-magma/grammar.js`, `tools/tree-sitter-magma/package.json`, `tools/tree-sitter-magma/tree-sitter.json`.
4. Inspect retrieval/memory/indexing through: `tests/test_cpp_index_hang.sh`, `tests/test_graph_buffer.c`, `src/graph_buffer/graph_buffer.c`.
5. Verify behavior through test/eval files: `tools/tree-sitter-magma/test/corpus/control_flow.txt`, `tools/tree-sitter-magma/test/corpus/functions.txt`, `tools/tree-sitter-form/test/corpus/control_flow.txt`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 High performance code intelligence MCP server. Indexes codebases into a persistent knowledge graph — average repo in mil. 핵심 구조 신호는 C, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
