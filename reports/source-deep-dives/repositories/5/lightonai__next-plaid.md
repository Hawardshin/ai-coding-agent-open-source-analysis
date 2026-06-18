# lightonai/next-plaid 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

NextPlaid, ColGREP: Multi-vector search, from database to coding agents.

## 요약

- 조사 단위: `sources/lightonai__next-plaid` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 204 files, 37 directories, depth score 107, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=skills/colgrep/SKILL.md, hooks/hook.json, colgrep/src/install/hook.json이고, 의존성 단서는 next, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | lightonai/next-plaid |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 495 |
| Forks | 57 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/lightonai__next-plaid](../../../../sources/lightonai__next-plaid) |
| 기존 보고서 | [reports/global-trending/repositories/lightonai__next-plaid.md](../../../global-trending/repositories/lightonai__next-plaid.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 204 / 37 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .claude-plugin, .github, colgrep, docs, hooks, next-plaid, next-plaid-api, next-plaid-onnx, scripts, skills |
| 상위 확장자 | .rs: 113, .py: 26, .md: 11, .toml: 11, .yml: 10, .json: 9, .lock: 8, (none): 7, .sh: 3, .svg: 2, .gif: 1, .nix: 1 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 26 |
| .github | ci surface | 1 |
| colgrep | top-level component | 1 |
| hooks | top-level component | 1 |
| next-plaid | top-level component | 1 |
| next-plaid-api | source boundary | 1 |
| next-plaid-onnx | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| build | Makefile | build | make build |
| build | Makefile | release | make release |
| test | Makefile | test | make test |
| test | Makefile | test-release | make test-release |
| quality | Makefile | lint | make lint |
| quality | Makefile | clippy | make clippy |
| quality | Makefile | fmt-check | make fmt-check |
| quality | Makefile | fmt | make fmt |
| quality | Makefile | check | make check |
| utility | Makefile | clean | make clean |
| utility | Makefile | example | make example |
| utility | Makefile | ci | make ci |
| utility | Makefile | ci-quick | make ci-quick |
| utility | Makefile | kill-api | make kill-api |
| utility | Makefile | ci-index | make ci-index |
| utility | Makefile | ci-api | make ci-api |
| utility | Makefile | ci-onnx | make ci-onnx |
| utility | Makefile | ci-cli | make ci-cli |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | next |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [skills/colgrep/SKILL.md](../../../../sources/lightonai__next-plaid/skills/colgrep/SKILL.md) | agentRuntime signal |
| agentRuntime | [hooks/hook.json](../../../../sources/lightonai__next-plaid/hooks/hook.json) | agentRuntime signal |
| agentRuntime | [colgrep/src/install/hook.json](../../../../sources/lightonai__next-plaid/colgrep/src/install/hook.json) | agentRuntime signal |
| agentRuntime | [colgrep/src/install/SKILL.md](../../../../sources/lightonai__next-plaid/colgrep/src/install/SKILL.md) | agentRuntime signal |
| entrypoints | [next-plaid-api/src/main.rs](../../../../sources/lightonai__next-plaid/next-plaid-api/src/main.rs) | entrypoints signal |
| entrypoints | [next-plaid/src/index.rs](../../../../sources/lightonai__next-plaid/next-plaid/src/index.rs) | entrypoints signal |
| entrypoints | [colgrep/src/cli.rs](../../../../sources/lightonai__next-plaid/colgrep/src/cli.rs) | entrypoints signal |
| entrypoints | [colgrep/src/main.rs](../../../../sources/lightonai__next-plaid/colgrep/src/main.rs) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/lightonai__next-plaid/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/lightonai__next-plaid/Cargo.toml) | config signal |
| config | [Makefile](../../../../sources/lightonai__next-plaid/Makefile) | config signal |
| config | [next-plaid-onnx/Cargo.toml](../../../../sources/lightonai__next-plaid/next-plaid-onnx/Cargo.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [next-plaid-api/src/main.rs](../../../../sources/lightonai__next-plaid/next-plaid-api/src/main.rs)<br>[next-plaid/src/index.rs](../../../../sources/lightonai__next-plaid/next-plaid/src/index.rs)<br>[colgrep/src/cli.rs](../../../../sources/lightonai__next-plaid/colgrep/src/cli.rs)<br>[colgrep/src/main.rs](../../../../sources/lightonai__next-plaid/colgrep/src/main.rs) |
| agentRuntime | 5 | [skills/colgrep/SKILL.md](../../../../sources/lightonai__next-plaid/skills/colgrep/SKILL.md)<br>[hooks/hook.json](../../../../sources/lightonai__next-plaid/hooks/hook.json)<br>[colgrep/src/install/hook.json](../../../../sources/lightonai__next-plaid/colgrep/src/install/hook.json)<br>[colgrep/src/install/SKILL.md](../../../../sources/lightonai__next-plaid/colgrep/src/install/SKILL.md)<br>[colgrep/src/commands/hooks.rs](../../../../sources/lightonai__next-plaid/colgrep/src/commands/hooks.rs) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 7 | [next-plaid/src/index.rs](../../../../sources/lightonai__next-plaid/next-plaid/src/index.rs)<br>[colgrep/src/embed.rs](../../../../sources/lightonai__next-plaid/colgrep/src/embed.rs)<br>[colgrep/src/parser/call_graph.rs](../../../../sources/lightonai__next-plaid/colgrep/src/parser/call_graph.rs)<br>[colgrep/src/index/mod.rs](../../../../sources/lightonai__next-plaid/colgrep/src/index/mod.rs)<br>[colgrep/src/index/paths.rs](../../../../sources/lightonai__next-plaid/colgrep/src/index/paths.rs)<br>[colgrep/src/index/state.rs](../../../../sources/lightonai__next-plaid/colgrep/src/index/state.rs)<br>[colgrep/src/index/worktree.rs](../../../../sources/lightonai__next-plaid/colgrep/src/index/worktree.rs) |
| spec | 0 | 명확하지 않음 |
| eval | 55 | [scripts/run-api-tests.sh](../../../../sources/lightonai__next-plaid/scripts/run-api-tests.sh)<br>[next-plaid-onnx/python/tests/__init__.py](../../../../sources/lightonai__next-plaid/next-plaid-onnx/python/tests/__init__.py)<br>[next-plaid-onnx/python/tests/test_cli.py](../../../../sources/lightonai__next-plaid/next-plaid-onnx/python/tests/test_cli.py)<br>[next-plaid-api/tests/integration_tests.rs](../../../../sources/lightonai__next-plaid/next-plaid-api/tests/integration_tests.rs)<br>[next-plaid-api/tests/pyproject.toml](../../../../sources/lightonai__next-plaid/next-plaid-api/tests/pyproject.toml)<br>[next-plaid-api/tests/start_from_scratch_env_test.rs](../../../../sources/lightonai__next-plaid/next-plaid-api/tests/start_from_scratch_env_test.rs)<br>[next-plaid-api/tests/test_api.py](../../../../sources/lightonai__next-plaid/next-plaid-api/tests/test_api.py)<br>[next-plaid-api/tests/uv.lock](../../../../sources/lightonai__next-plaid/next-plaid-api/tests/uv.lock) |
| security | 1 | [colgrep/src/parser/tests/test_recursion_guard.rs](../../../../sources/lightonai__next-plaid/colgrep/src/parser/tests/test_recursion_guard.rs) |
| ci | 7 | [.github/workflows/ci.yml](../../../../sources/lightonai__next-plaid/.github/workflows/ci.yml)<br>[.github/workflows/cli-e2e.yml](../../../../sources/lightonai__next-plaid/.github/workflows/cli-e2e.yml)<br>[.github/workflows/docker-release.yml](../../../../sources/lightonai__next-plaid/.github/workflows/docker-release.yml)<br>[.github/workflows/docs.yml](../../../../sources/lightonai__next-plaid/.github/workflows/docs.yml)<br>[.github/workflows/python-sdk-release.yml](../../../../sources/lightonai__next-plaid/.github/workflows/python-sdk-release.yml)<br>[.github/workflows/release.yml](../../../../sources/lightonai__next-plaid/.github/workflows/release.yml)<br>[.github/workflows/update-homebrew-tap.yml](../../../../sources/lightonai__next-plaid/.github/workflows/update-homebrew-tap.yml) |
| container | 4 | [docker-compose.cuda.local.yml](../../../../sources/lightonai__next-plaid/docker-compose.cuda.local.yml)<br>[docker-compose.cuda.yml](../../../../sources/lightonai__next-plaid/docker-compose.cuda.yml)<br>[docker-compose.yml](../../../../sources/lightonai__next-plaid/docker-compose.yml)<br>[next-plaid-api/Dockerfile](../../../../sources/lightonai__next-plaid/next-plaid-api/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 22 | [README.md](../../../../sources/lightonai__next-plaid/README.md)<br>[next-plaid-onnx/README.md](../../../../sources/lightonai__next-plaid/next-plaid-onnx/README.md)<br>[next-plaid-onnx/python/README.md](../../../../sources/lightonai__next-plaid/next-plaid-onnx/python/README.md)<br>[next-plaid-api/README.md](../../../../sources/lightonai__next-plaid/next-plaid-api/README.md)<br>[next-plaid-api/python-sdk/README.md](../../../../sources/lightonai__next-plaid/next-plaid-api/python-sdk/README.md)<br>[next-plaid/README.md](../../../../sources/lightonai__next-plaid/next-plaid/README.md)<br>[docs/build_docs.py](../../../../sources/lightonai__next-plaid/docs/build_docs.py)<br>[docs/colgrep-bench-dark.svg](../../../../sources/lightonai__next-plaid/docs/colgrep-bench-dark.svg) |
| config | 19 | [Cargo.lock](../../../../sources/lightonai__next-plaid/Cargo.lock)<br>[Cargo.toml](../../../../sources/lightonai__next-plaid/Cargo.toml)<br>[Makefile](../../../../sources/lightonai__next-plaid/Makefile)<br>[next-plaid-onnx/Cargo.toml](../../../../sources/lightonai__next-plaid/next-plaid-onnx/Cargo.toml)<br>[next-plaid-onnx/python/pyproject.toml](../../../../sources/lightonai__next-plaid/next-plaid-onnx/python/pyproject.toml)<br>[next-plaid-onnx/python/uv.lock](../../../../sources/lightonai__next-plaid/next-plaid-onnx/python/uv.lock)<br>[next-plaid-api/Cargo.toml](../../../../sources/lightonai__next-plaid/next-plaid-api/Cargo.toml)<br>[next-plaid-api/tests/pyproject.toml](../../../../sources/lightonai__next-plaid/next-plaid-api/tests/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 55 | [scripts/run-api-tests.sh](../../../../sources/lightonai__next-plaid/scripts/run-api-tests.sh)<br>[next-plaid-onnx/python/tests/__init__.py](../../../../sources/lightonai__next-plaid/next-plaid-onnx/python/tests/__init__.py)<br>[next-plaid-onnx/python/tests/test_cli.py](../../../../sources/lightonai__next-plaid/next-plaid-onnx/python/tests/test_cli.py)<br>[next-plaid-api/tests/integration_tests.rs](../../../../sources/lightonai__next-plaid/next-plaid-api/tests/integration_tests.rs)<br>[next-plaid-api/tests/pyproject.toml](../../../../sources/lightonai__next-plaid/next-plaid-api/tests/pyproject.toml)<br>[next-plaid-api/tests/start_from_scratch_env_test.rs](../../../../sources/lightonai__next-plaid/next-plaid-api/tests/start_from_scratch_env_test.rs) |
| CI workflow | 7 | [.github/workflows/ci.yml](../../../../sources/lightonai__next-plaid/.github/workflows/ci.yml)<br>[.github/workflows/cli-e2e.yml](../../../../sources/lightonai__next-plaid/.github/workflows/cli-e2e.yml)<br>[.github/workflows/docker-release.yml](../../../../sources/lightonai__next-plaid/.github/workflows/docker-release.yml)<br>[.github/workflows/docs.yml](../../../../sources/lightonai__next-plaid/.github/workflows/docs.yml)<br>[.github/workflows/python-sdk-release.yml](../../../../sources/lightonai__next-plaid/.github/workflows/python-sdk-release.yml)<br>[.github/workflows/release.yml](../../../../sources/lightonai__next-plaid/.github/workflows/release.yml) |
| 컨테이너/배포 | 4 | [docker-compose.cuda.local.yml](../../../../sources/lightonai__next-plaid/docker-compose.cuda.local.yml)<br>[docker-compose.cuda.yml](../../../../sources/lightonai__next-plaid/docker-compose.cuda.yml)<br>[docker-compose.yml](../../../../sources/lightonai__next-plaid/docker-compose.yml)<br>[next-plaid-api/Dockerfile](../../../../sources/lightonai__next-plaid/next-plaid-api/Dockerfile) |
| 보안/정책 | 1 | [colgrep/src/parser/tests/test_recursion_guard.rs](../../../../sources/lightonai__next-plaid/colgrep/src/parser/tests/test_recursion_guard.rs) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `skills/colgrep/SKILL.md`, `hooks/hook.json`, `colgrep/src/install/hook.json`.
2. entrypoint를 따라 실행 흐름 확인: `next-plaid-api/src/main.rs`, `next-plaid/src/index.rs`, `colgrep/src/cli.rs`.
3. agent/tool runtime 매핑: `skills/colgrep/SKILL.md`, `hooks/hook.json`, `colgrep/src/install/hook.json`.
4. retrieval/memory/indexing 확인: `next-plaid/src/index.rs`, `colgrep/src/embed.rs`, `colgrep/src/parser/call_graph.rs`.
5. test/eval 파일로 동작 검증: `scripts/run-api-tests.sh`, `next-plaid-onnx/python/tests/__init__.py`, `next-plaid-onnx/python/tests/test_cli.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 NextPlaid, ColGREP Multi vector search, from database to coding agents.. 핵심 구조 신호는 Rust, Cargo.toml, docker-compose.yml, Makefile, README.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
