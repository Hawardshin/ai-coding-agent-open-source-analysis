# Agent-Hellboy/mcp-server-fuzzer 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

A generic mcp server fuzzer

## 요약

- 조사 단위: `sources/Agent-Hellboy__mcp-server-fuzzer` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 473 files, 74 directories, depth score 123, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=MCP_SECURITY_AUDIT_ROADMAP.md, mcp_fuzzer/__init__.py, mcp_fuzzer/__main__.py이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Agent-Hellboy/mcp-server-fuzzer |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 35 |
| Forks | 6 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Agent-Hellboy__mcp-server-fuzzer](../../../../sources/Agent-Hellboy__mcp-server-fuzzer) |
| 기존 보고서 | [reports/global-trending/repositories/Agent-Hellboy__mcp-server-fuzzer.md](../../../global-trending/repositories/Agent-Hellboy__mcp-server-fuzzer.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 473 / 74 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, docker, docs, examples, images, mcp_fuzzer, schemas, tests |
| 상위 확장자 | .py: 391, .md: 37, .yml: 12, .sh: 6, (none): 6, .json: 5, .png: 3, .yaml: 3, .txt: 2, .go: 1, .ini: 1, .js: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 96 |
| docs | documentation surface | 37 |
| examples/typescript-stdio-server | examples workspace | 3 |
| examples/go_stdio_server | examples workspace | 2 |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| images | top-level component | 1 |
| mcp_fuzzer | top-level component | 1 |
| schemas | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | mcp-fuzzer | mcp-fuzzer |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
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
| mcp | [MCP_SECURITY_AUDIT_ROADMAP.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/MCP_SECURITY_AUDIT_ROADMAP.md) | mcp signal |
| mcp | [mcp_fuzzer/__init__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/__init__.py) | mcp signal |
| mcp | [mcp_fuzzer/__main__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/__main__.py) | mcp signal |
| mcp | [mcp_fuzzer/events.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/events.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/unit/fuzz_engine/executor/__init__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/fuzz_engine/executor/__init__.py) | agentRuntime signal |
| agentRuntime | [tests/unit/fuzz_engine/executor/test_async_executor.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/fuzz_engine/executor/test_async_executor.py) | agentRuntime signal |
| agentRuntime | [tests/unit/fuzz_engine/executor/test_batch_executor.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/fuzz_engine/executor/test_batch_executor.py) | agentRuntime signal |
| entrypoints | [mcp_fuzzer/diagnostics/server.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/diagnostics/server.py) | entrypoints signal |
| entrypoints | [examples/typescript-stdio-server/src/server.ts](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/examples/typescript-stdio-server/src/server.ts) | entrypoints signal |
| entrypoints | [examples/go_stdio_server/main.go](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/examples/go_stdio_server/main.go) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/pyproject.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [mcp_fuzzer/__main__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/__main__.py)<br>[mcp_fuzzer/diagnostics/server.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/diagnostics/server.py)<br>[examples/typescript-stdio-server/src/server.ts](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/examples/typescript-stdio-server/src/server.ts)<br>[examples/go_stdio_server/main.go](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/examples/go_stdio_server/main.go) |
| agentRuntime | 27 | [AGENTS.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/AGENTS.md)<br>[tests/unit/fuzz_engine/executor/__init__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/fuzz_engine/executor/__init__.py)<br>[tests/unit/fuzz_engine/executor/test_async_executor.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/fuzz_engine/executor/test_async_executor.py)<br>[tests/unit/fuzz_engine/executor/test_batch_executor.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/fuzz_engine/executor/test_batch_executor.py)<br>[tests/unit/fuzz_engine/executor/test_collector.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/fuzz_engine/executor/test_collector.py)<br>[tests/unit/fuzz_engine/executor/test_invariants.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/fuzz_engine/executor/test_invariants.py)<br>[tests/unit/fuzz_engine/executor/test_metrics.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/fuzz_engine/executor/test_metrics.py)<br>[tests/unit/fuzz_engine/executor/test_protocol_executor.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/fuzz_engine/executor/test_protocol_executor.py) |
| mcp | 212 | [MCP_SECURITY_AUDIT_ROADMAP.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/MCP_SECURITY_AUDIT_ROADMAP.md)<br>[mcp_fuzzer/__init__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/__init__.py)<br>[mcp_fuzzer/__main__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/__main__.py)<br>[mcp_fuzzer/events.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/events.py)<br>[mcp_fuzzer/exceptions.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/exceptions.py)<br>[mcp_fuzzer/icons.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/icons.py)<br>[mcp_fuzzer/protocol_registry.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/protocol_registry.py)<br>[mcp_fuzzer/types.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/types.py) |
| retrieval | 2 | [docs/index.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docs/index.md)<br>[docs/getting-started/index.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docs/getting-started/index.md) |
| spec | 41 | [ARCHITECTURE.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/ARCHITECTURE.md)<br>[MCP_SECURITY_AUDIT_ROADMAP.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/MCP_SECURITY_AUDIT_ROADMAP.md)<br>[requirements.txt](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/requirements.txt)<br>[tests/unit/test_spec_version.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/test_spec_version.py)<br>[tests/unit/test_spec_versions.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/test_spec_versions.py)<br>[tests/unit/spec_guard/__init__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/spec_guard/__init__.py)<br>[tests/unit/spec_guard/test_helpers.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/spec_guard/test_helpers.py)<br>[tests/unit/spec_guard/test_mappings_coverage.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/spec_guard/test_mappings_coverage.py) |
| eval | 208 | [tests/__init__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/__init__.py)<br>[tests/add_markers.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/add_markers.py)<br>[tests/conftest.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/conftest.py)<br>[tests/README.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/README.md)<br>[tests/unit/__init__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/__init__.py)<br>[tests/unit/test_audit_fix_coverage.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/test_audit_fix_coverage.py)<br>[tests/unit/test_audit_fixes.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/test_audit_fixes.py)<br>[tests/unit/test_corpus.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/test_corpus.py) |
| security | 73 | [MCP_SECURITY_AUDIT_ROADMAP.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/MCP_SECURITY_AUDIT_ROADMAP.md)<br>[tests/unit/test_audit_fix_coverage.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/test_audit_fix_coverage.py)<br>[tests/unit/test_audit_fixes.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/test_audit_fixes.py)<br>[tests/unit/spec_guard/__init__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/spec_guard/__init__.py)<br>[tests/unit/spec_guard/test_helpers.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/spec_guard/test_helpers.py)<br>[tests/unit/spec_guard/test_mappings_coverage.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/spec_guard/test_mappings_coverage.py)<br>[tests/unit/spec_guard/test_runner_more.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/spec_guard/test_runner_more.py)<br>[tests/unit/spec_guard/test_runner_tasks.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/spec_guard/test_runner_tasks.py) |
| ci | 6 | [.github/workflows/docker-release.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/docker-release.yml)<br>[.github/workflows/docs.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/docs.yml)<br>[.github/workflows/e2e-test.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/e2e-test.yml)<br>[.github/workflows/lint.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/lint.yml)<br>[.github/workflows/publish.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/publish.yml)<br>[.github/workflows/tests.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/tests.yml) |
| container | 5 | [docker-compose.host-network.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docker-compose.host-network.yml)<br>[docker-compose.prod.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docker-compose.prod.yml)<br>[docker-compose.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docker-compose.yml)<br>[Dockerfile](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/Dockerfile)<br>[tests/e2e/Dockerfile](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/e2e/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/AGENTS.md) |
| docs | 34 | [mkdocs.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mkdocs.yml)<br>[README.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/README.md)<br>[tests/README.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/README.md)<br>[tests/e2e/README.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/e2e/README.md)<br>[examples/README.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/examples/README.md)<br>[docs/design-pattern-review.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docs/design-pattern-review.md)<br>[docs/error-codes.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docs/error-codes.md)<br>[docs/index.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docs/index.md) |
| config | 7 | [pyproject.toml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/pyproject.toml)<br>[requirements.txt](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/requirements.txt)<br>[uv.lock](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/uv.lock)<br>[examples/typescript-stdio-server/package.json](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/examples/typescript-stdio-server/package.json)<br>[examples/typescript-stdio-server/tsconfig.json](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/examples/typescript-stdio-server/tsconfig.json)<br>[examples/go_stdio_server/go.mod](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/examples/go_stdio_server/go.mod)<br>[docker/requirements.runtime.txt](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docker/requirements.runtime.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 208 | [tests/__init__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/__init__.py)<br>[tests/add_markers.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/add_markers.py)<br>[tests/conftest.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/conftest.py)<br>[tests/README.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/README.md)<br>[tests/unit/__init__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/__init__.py)<br>[tests/unit/test_audit_fix_coverage.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/test_audit_fix_coverage.py) |
| CI workflow | 6 | [.github/workflows/docker-release.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/docker-release.yml)<br>[.github/workflows/docs.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/docs.yml)<br>[.github/workflows/e2e-test.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/e2e-test.yml)<br>[.github/workflows/lint.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/lint.yml)<br>[.github/workflows/publish.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/publish.yml)<br>[.github/workflows/tests.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/tests.yml) |
| 컨테이너/배포 | 5 | [docker-compose.host-network.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docker-compose.host-network.yml)<br>[docker-compose.prod.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docker-compose.prod.yml)<br>[docker-compose.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docker-compose.yml)<br>[Dockerfile](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/Dockerfile)<br>[tests/e2e/Dockerfile](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/e2e/Dockerfile) |
| 보안/정책 | 73 | [MCP_SECURITY_AUDIT_ROADMAP.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/MCP_SECURITY_AUDIT_ROADMAP.md)<br>[tests/unit/test_audit_fix_coverage.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/test_audit_fix_coverage.py)<br>[tests/unit/test_audit_fixes.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/test_audit_fixes.py)<br>[tests/unit/spec_guard/__init__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/spec_guard/__init__.py)<br>[tests/unit/spec_guard/test_helpers.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/spec_guard/test_helpers.py)<br>[tests/unit/spec_guard/test_mappings_coverage.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/spec_guard/test_mappings_coverage.py) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `MCP_SECURITY_AUDIT_ROADMAP.md`, `mcp_fuzzer/__init__.py`, `mcp_fuzzer/__main__.py`.
2. entrypoint를 따라 실행 흐름 확인: `mcp_fuzzer/__main__.py`, `mcp_fuzzer/diagnostics/server.py`, `examples/typescript-stdio-server/src/server.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/unit/fuzz_engine/executor/__init__.py`, `tests/unit/fuzz_engine/executor/test_async_executor.py`.
4. retrieval/memory/indexing 확인: `docs/index.md`, `docs/getting-started/index.md`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/add_markers.py`, `tests/conftest.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A generic mcp server fuzzer. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, docker-compose.yml, README.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
