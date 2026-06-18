# jonigl/ollama-mcp-bridge 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Extend the Ollama API with dynamic AI tool integration from multiple MCP (Model Context Protocol) servers. Fully compatible, transparent, and developer-friendly, ideal for building powerful local LLM applications, AI agents, and custom chatbots

## 요약

- 조사 단위: `sources/jonigl__ollama-mcp-bridge` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 38 files, 7 directories, depth score 86, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp-config.json, src/ollama_mcp_bridge/__init__.py, src/ollama_mcp_bridge/api.py이고, 의존성 단서는 mcp, fastapi, vscode, typer, ollama, llama, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | jonigl/ollama-mcp-bridge |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 93 |
| Forks | 32 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/jonigl__ollama-mcp-bridge](../../../../sources/jonigl__ollama-mcp-bridge) |
| 기존 보고서 | [reports/global-trending/repositories/jonigl__ollama-mcp-bridge.md](../../../global-trending/repositories/jonigl__ollama-mcp-bridge.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 38 / 7 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, misc, mock-weather-mcp-server, src, tests |
| 상위 확장자 | .py: 16, .yml: 7, .md: 4, (none): 4, .lock: 2, .png: 2, .toml: 2, .json: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, eval/test harness, containerized deploy, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 10 |
| tests | validation surface | 8 |
| .github | ci surface | 1 |
| misc | top-level component | 1 |
| mock-weather-mcp-server | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | ollama-mcp-bridge | ollama-mcp-bridge |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | ollama, llama |
| webRuntime | fastapi |
| developerSurface | vscode, typer |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [mcp-config.json](../../../../sources/jonigl__ollama-mcp-bridge/mcp-config.json) | mcp signal |
| mcp | [src/ollama_mcp_bridge/__init__.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/__init__.py) | mcp signal |
| mcp | [src/ollama_mcp_bridge/api.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/api.py) | mcp signal |
| mcp | [src/ollama_mcp_bridge/lifecycle.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/lifecycle.py) | mcp signal |
| entrypoints | [src/ollama_mcp_bridge/main.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/main.py) | entrypoints signal |
| entrypoints | [mock-weather-mcp-server/main.py](../../../../sources/jonigl__ollama-mcp-bridge/mock-weather-mcp-server/main.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/jonigl__ollama-mcp-bridge/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/jonigl__ollama-mcp-bridge/uv.lock) | config signal |
| config | [mock-weather-mcp-server/pyproject.toml](../../../../sources/jonigl__ollama-mcp-bridge/mock-weather-mcp-server/pyproject.toml) | config signal |
| config | [mock-weather-mcp-server/uv.lock](../../../../sources/jonigl__ollama-mcp-bridge/mock-weather-mcp-server/uv.lock) | config signal |
| ci | [.github/workflows/build_and_push_docker_image.yml](../../../../sources/jonigl__ollama-mcp-bridge/.github/workflows/build_and_push_docker_image.yml) | ci support |
| ci | [.github/workflows/ci.yml](../../../../sources/jonigl__ollama-mcp-bridge/.github/workflows/ci.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [src/ollama_mcp_bridge/main.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/main.py)<br>[mock-weather-mcp-server/main.py](../../../../sources/jonigl__ollama-mcp-bridge/mock-weather-mcp-server/main.py) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 15 | [mcp-config.json](../../../../sources/jonigl__ollama-mcp-bridge/mcp-config.json)<br>[src/ollama_mcp_bridge/__init__.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/__init__.py)<br>[src/ollama_mcp_bridge/api.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/api.py)<br>[src/ollama_mcp_bridge/lifecycle.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/lifecycle.py)<br>[src/ollama_mcp_bridge/main.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/main.py)<br>[src/ollama_mcp_bridge/mcp_manager.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/mcp_manager.py)<br>[src/ollama_mcp_bridge/proxy_service.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/proxy_service.py)<br>[src/ollama_mcp_bridge/schemas.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/schemas.py) |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 8 | [tests/conftest.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/conftest.py)<br>[tests/test_api.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/test_api.py)<br>[tests/test_env_expansion.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/test_env_expansion.py)<br>[tests/test_error_handling.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/test_error_handling.py)<br>[tests/test_ollama_proxy_timeout_env.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/test_ollama_proxy_timeout_env.py)<br>[tests/test_tool_filtering.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/test_tool_filtering.py)<br>[tests/test_unit.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/test_unit.py)<br>[.github/workflows/test-publish.yml](../../../../sources/jonigl__ollama-mcp-bridge/.github/workflows/test-publish.yml) |
| security | 0 | 명확하지 않음 |
| ci | 4 | [.github/workflows/build_and_push_docker_image.yml](../../../../sources/jonigl__ollama-mcp-bridge/.github/workflows/build_and_push_docker_image.yml)<br>[.github/workflows/ci.yml](../../../../sources/jonigl__ollama-mcp-bridge/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/jonigl__ollama-mcp-bridge/.github/workflows/publish.yml)<br>[.github/workflows/test-publish.yml](../../../../sources/jonigl__ollama-mcp-bridge/.github/workflows/test-publish.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/jonigl__ollama-mcp-bridge/docker-compose.yml)<br>[Dockerfile](../../../../sources/jonigl__ollama-mcp-bridge/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 2 | [README.md](../../../../sources/jonigl__ollama-mcp-bridge/README.md)<br>[mock-weather-mcp-server/README.md](../../../../sources/jonigl__ollama-mcp-bridge/mock-weather-mcp-server/README.md) |
| config | 4 | [pyproject.toml](../../../../sources/jonigl__ollama-mcp-bridge/pyproject.toml)<br>[uv.lock](../../../../sources/jonigl__ollama-mcp-bridge/uv.lock)<br>[mock-weather-mcp-server/pyproject.toml](../../../../sources/jonigl__ollama-mcp-bridge/mock-weather-mcp-server/pyproject.toml)<br>[mock-weather-mcp-server/uv.lock](../../../../sources/jonigl__ollama-mcp-bridge/mock-weather-mcp-server/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 8 | [tests/conftest.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/conftest.py)<br>[tests/test_api.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/test_api.py)<br>[tests/test_env_expansion.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/test_env_expansion.py)<br>[tests/test_error_handling.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/test_error_handling.py)<br>[tests/test_ollama_proxy_timeout_env.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/test_ollama_proxy_timeout_env.py)<br>[tests/test_tool_filtering.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/test_tool_filtering.py) |
| CI workflow | 4 | [.github/workflows/build_and_push_docker_image.yml](../../../../sources/jonigl__ollama-mcp-bridge/.github/workflows/build_and_push_docker_image.yml)<br>[.github/workflows/ci.yml](../../../../sources/jonigl__ollama-mcp-bridge/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/jonigl__ollama-mcp-bridge/.github/workflows/publish.yml)<br>[.github/workflows/test-publish.yml](../../../../sources/jonigl__ollama-mcp-bridge/.github/workflows/test-publish.yml) |
| 컨테이너/배포 | 2 | [docker-compose.yml](../../../../sources/jonigl__ollama-mcp-bridge/docker-compose.yml)<br>[Dockerfile](../../../../sources/jonigl__ollama-mcp-bridge/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp-config.json`, `src/ollama_mcp_bridge/__init__.py`, `src/ollama_mcp_bridge/api.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/ollama_mcp_bridge/main.py`, `mock-weather-mcp-server/main.py`.
3. test/eval 파일로 동작 검증: `tests/conftest.py`, `tests/test_api.py`, `tests/test_env_expansion.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Extend the Ollama API with dynamic AI tool integration from multiple MCP Model Context Protocol servers. Fully compatibl. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
