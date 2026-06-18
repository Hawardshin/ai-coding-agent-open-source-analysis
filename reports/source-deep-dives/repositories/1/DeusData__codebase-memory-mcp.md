# DeusData/codebase-memory-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

High-performance code intelligence MCP server. Indexes codebases into a persistent knowledge graph — average repo in milliseconds. 158 languages, sub-ms queries, 99% fewer tokens. Single static binary, zero dependencies.

## 요약

- 조사 단위: `sources/DeusData__codebase-memory-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,673 files, 417 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_mcp.c, src/mcp/mcp.c, src/mcp/mcp.h이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | DeusData/codebase-memory-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | C |
| Stars | 5246 |
| Forks | 484 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/DeusData__codebase-memory-mcp](../../../../sources/DeusData__codebase-memory-mcp) |
| 기존 보고서 | [reports/global-trending/repositories/DeusData__codebase-memory-mcp.md](../../../global-trending/repositories/DeusData__codebase-memory-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1673 / 417 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, docs, graph-ui, internal, pkg, scripts, src, test-infrastructure, tests, tools, vendored |
| 상위 확장자 | .c: 683, .h: 619, (none): 185, .sh: 38, .tsx: 31, .yml: 19, .json: 18, .md: 14, .py: 11, .txt: 10, .ts: 8, .js: 4 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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
| instruction | 0 | 명확하지 않음 |
| docs | 13 | [README.md](../../../../sources/DeusData__codebase-memory-mcp/README.md)<br>[vendored/mimalloc/src/prim/readme.md](../../../../sources/DeusData__codebase-memory-mcp/vendored/mimalloc/src/prim/readme.md)<br>[vendored/mimalloc/src/prim/windows/readme.md](../../../../sources/DeusData__codebase-memory-mcp/vendored/mimalloc/src/prim/windows/readme.md)<br>[pkg/pypi/README.md](../../../../sources/DeusData__codebase-memory-mcp/pkg/pypi/README.md)<br>[pkg/npm/README.md](../../../../sources/DeusData__codebase-memory-mcp/pkg/npm/README.md)<br>[docs/.nojekyll](../../../../sources/DeusData__codebase-memory-mcp/docs/.nojekyll)<br>[docs/BENCHMARK.md](../../../../sources/DeusData__codebase-memory-mcp/docs/BENCHMARK.md)<br>[docs/EVALUATION_PLAN.md](../../../../sources/DeusData__codebase-memory-mcp/docs/EVALUATION_PLAN.md) |
| config | 7 | [tools/tree-sitter-magma/package.json](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-magma/package.json)<br>[tools/tree-sitter-form/package.json](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-form/package.json)<br>[pkg/pypi/pyproject.toml](../../../../sources/DeusData__codebase-memory-mcp/pkg/pypi/pyproject.toml)<br>[pkg/npm/package.json](../../../../sources/DeusData__codebase-memory-mcp/pkg/npm/package.json)<br>[pkg/go/go.mod](../../../../sources/DeusData__codebase-memory-mcp/pkg/go/go.mod)<br>[graph-ui/package.json](../../../../sources/DeusData__codebase-memory-mcp/graph-ui/package.json)<br>[graph-ui/tsconfig.json](../../../../sources/DeusData__codebase-memory-mcp/graph-ui/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 116 | [tools/tree-sitter-magma/test/corpus/control_flow.txt](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-magma/test/corpus/control_flow.txt)<br>[tools/tree-sitter-magma/test/corpus/functions.txt](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-magma/test/corpus/functions.txt)<br>[tools/tree-sitter-form/test/corpus/control_flow.txt](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-form/test/corpus/control_flow.txt)<br>[tools/tree-sitter-form/test/corpus/declarations.txt](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-form/test/corpus/declarations.txt)<br>[tools/tree-sitter-form/test/corpus/procedures.txt](../../../../sources/DeusData__codebase-memory-mcp/tools/tree-sitter-form/test/corpus/procedures.txt)<br>[tests/grammar_cases.h](../../../../sources/DeusData__codebase-memory-mcp/tests/grammar_cases.h) |
| CI workflow | 16 | [scripts/ci/check-glibc-compat.sh](../../../../sources/DeusData__codebase-memory-mcp/scripts/ci/check-glibc-compat.sh)<br>[scripts/ci/check-virustotal.sh](../../../../sources/DeusData__codebase-memory-mcp/scripts/ci/check-virustotal.sh)<br>[.github/workflows/_build.yml](../../../../sources/DeusData__codebase-memory-mcp/.github/workflows/_build.yml)<br>[.github/workflows/_lint.yml](../../../../sources/DeusData__codebase-memory-mcp/.github/workflows/_lint.yml)<br>[.github/workflows/_security.yml](../../../../sources/DeusData__codebase-memory-mcp/.github/workflows/_security.yml)<br>[.github/workflows/_smoke.yml](../../../../sources/DeusData__codebase-memory-mcp/.github/workflows/_smoke.yml) |
| 컨테이너/배포 | 12 | [test-infrastructure/docker-compose.yml](../../../../sources/DeusData__codebase-memory-mcp/test-infrastructure/docker-compose.yml)<br>[test-infrastructure/Dockerfile](../../../../sources/DeusData__codebase-memory-mcp/test-infrastructure/Dockerfile)<br>[test-infrastructure/Dockerfile.alpine](../../../../sources/DeusData__codebase-memory-mcp/test-infrastructure/Dockerfile.alpine)<br>[test-infrastructure/Dockerfile.lint](../../../../sources/DeusData__codebase-memory-mcp/test-infrastructure/Dockerfile.lint)<br>[test-infrastructure/Dockerfile.mingw](../../../../sources/DeusData__codebase-memory-mcp/test-infrastructure/Dockerfile.mingw)<br>[pkg/glama/Dockerfile](../../../../sources/DeusData__codebase-memory-mcp/pkg/glama/Dockerfile) |
| 보안/정책 | 16 | [SECURITY.md](../../../../sources/DeusData__codebase-memory-mcp/SECURITY.md)<br>[tests/smoke_guard.sh](../../../../sources/DeusData__codebase-memory-mcp/tests/smoke_guard.sh)<br>[tests/test_security.c](../../../../sources/DeusData__codebase-memory-mcp/tests/test_security.c)<br>[scripts/audit-grammar-security.sh](../../../../sources/DeusData__codebase-memory-mcp/scripts/audit-grammar-security.sh)<br>[scripts/audit-license-provenance.py](../../../../sources/DeusData__codebase-memory-mcp/scripts/audit-license-provenance.py)<br>[scripts/license-policy.json](../../../../sources/DeusData__codebase-memory-mcp/scripts/license-policy.json) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_mcp.c`, `src/mcp/mcp.c`, `src/mcp/mcp.h`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `src/main.c`, `pkg/pypi/src/codebase_memory_mcp/__main__.py`.
3. agent/tool runtime 매핑: `tools/tree-sitter-magma/grammar.js`, `tools/tree-sitter-magma/package.json`, `tools/tree-sitter-magma/tree-sitter.json`.
4. retrieval/memory/indexing 확인: `tests/test_cpp_index_hang.sh`, `tests/test_graph_buffer.c`, `src/graph_buffer/graph_buffer.c`.
5. test/eval 파일로 동작 검증: `tools/tree-sitter-magma/test/corpus/control_flow.txt`, `tools/tree-sitter-magma/test/corpus/functions.txt`, `tools/tree-sitter-form/test/corpus/control_flow.txt`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 High performance code intelligence MCP server. Indexes codebases into a persistent knowledge graph — average repo in mil. 핵심 구조 신호는 C, README.md, LICENSE, tests, ci, docs이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
