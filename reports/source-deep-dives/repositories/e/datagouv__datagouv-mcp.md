# datagouv/datagouv-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Official data.gouv.fr Model Context Protocol (MCP) server that allows AI chatbots to search, explore, and analyze datasets from the French national Open Data platform, directly through conversation.

## 요약

- 조사 단위: `sources/datagouv__datagouv-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 53 files, 8 directories, depth score 90, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.py이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | datagouv/datagouv-mcp |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 1538 |
| Forks | 125 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/datagouv__datagouv-mcp](../../../../sources/datagouv__datagouv-mcp) |
| 기존 보고서 | [reports/global-trending/repositories/datagouv__datagouv-mcp.md](../../../global-trending/repositories/datagouv__datagouv-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 53 / 8 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .circleci, .github, helpers, scripts, tests, tools |
| 상위 확장자 | .py: 37, .yml: 5, .md: 3, (none): 3, .example: 1, .lock: 1, .sh: 1, .toml: 1, .yaml: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 13 |
| .github | ci surface | 1 |
| helpers | top-level component | 1 |
| scripts | top-level component | 1 |
| tools | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


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
| entrypoints | [main.py](../../../../sources/datagouv__datagouv-mcp/main.py) | entrypoints signal |
| docs | [README.md](../../../../sources/datagouv__datagouv-mcp/README.md) | docs signal |
| eval | [tools/get_dataservice_openapi_spec.py](../../../../sources/datagouv__datagouv-mcp/tools/get_dataservice_openapi_spec.py) | eval signal |
| eval | [tests/__init__.py](../../../../sources/datagouv__datagouv-mcp/tests/__init__.py) | eval signal |
| eval | [tests/test_crawler_api.py](../../../../sources/datagouv__datagouv-mcp/tests/test_crawler_api.py) | eval signal |
| eval | [tests/test_datagouv_api.py](../../../../sources/datagouv__datagouv-mcp/tests/test_datagouv_api.py) | eval signal |
| config | [pyproject.toml](../../../../sources/datagouv__datagouv-mcp/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/datagouv__datagouv-mcp/uv.lock) | config signal |
| ci | [.github/workflows/contribution-reminder.yml](../../../../sources/datagouv__datagouv-mcp/.github/workflows/contribution-reminder.yml) | ci support |
| container | [docker-compose.yml](../../../../sources/datagouv__datagouv-mcp/docker-compose.yml) | container support |
| container | [Dockerfile](../../../../sources/datagouv__datagouv-mcp/Dockerfile) | container support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [main.py](../../../../sources/datagouv__datagouv-mcp/main.py) |
| agentRuntime | 11 | [tools/__init__.py](../../../../sources/datagouv__datagouv-mcp/tools/__init__.py)<br>[tools/get_dataservice_info.py](../../../../sources/datagouv__datagouv-mcp/tools/get_dataservice_info.py)<br>[tools/get_dataservice_openapi_spec.py](../../../../sources/datagouv__datagouv-mcp/tools/get_dataservice_openapi_spec.py)<br>[tools/get_dataset_info.py](../../../../sources/datagouv__datagouv-mcp/tools/get_dataset_info.py)<br>[tools/get_metrics.py](../../../../sources/datagouv__datagouv-mcp/tools/get_metrics.py)<br>[tools/get_resource_info.py](../../../../sources/datagouv__datagouv-mcp/tools/get_resource_info.py)<br>[tools/list_dataset_resources.py](../../../../sources/datagouv__datagouv-mcp/tools/list_dataset_resources.py)<br>[tools/query_resource_data.py](../../../../sources/datagouv__datagouv-mcp/tools/query_resource_data.py) |
| mcp | 2 | [helpers/mcp_client.py](../../../../sources/datagouv__datagouv-mcp/helpers/mcp_client.py)<br>[helpers/mcp_tool_defaults.py](../../../../sources/datagouv__datagouv-mcp/helpers/mcp_tool_defaults.py) |
| retrieval | 0 | 명확하지 않음 |
| spec | 1 | [tools/get_dataservice_openapi_spec.py](../../../../sources/datagouv__datagouv-mcp/tools/get_dataservice_openapi_spec.py) |
| eval | 13 | [tools/get_dataservice_openapi_spec.py](../../../../sources/datagouv__datagouv-mcp/tools/get_dataservice_openapi_spec.py)<br>[tests/__init__.py](../../../../sources/datagouv__datagouv-mcp/tests/__init__.py)<br>[tests/test_crawler_api.py](../../../../sources/datagouv__datagouv-mcp/tests/test_crawler_api.py)<br>[tests/test_datagouv_api.py](../../../../sources/datagouv__datagouv-mcp/tests/test_datagouv_api.py)<br>[tests/test_env_config.py](../../../../sources/datagouv__datagouv-mcp/tests/test_env_config.py)<br>[tests/test_health_check.py](../../../../sources/datagouv__datagouv-mcp/tests/test_health_check.py)<br>[tests/test_health_endpoint.py](../../../../sources/datagouv__datagouv-mcp/tests/test_health_endpoint.py)<br>[tests/test_matomo.py](../../../../sources/datagouv__datagouv-mcp/tests/test_matomo.py) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/contribution-reminder.yml](../../../../sources/datagouv__datagouv-mcp/.github/workflows/contribution-reminder.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/datagouv__datagouv-mcp/docker-compose.yml)<br>[Dockerfile](../../../../sources/datagouv__datagouv-mcp/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/datagouv__datagouv-mcp/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/datagouv__datagouv-mcp/pyproject.toml)<br>[uv.lock](../../../../sources/datagouv__datagouv-mcp/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 13 | [tools/get_dataservice_openapi_spec.py](../../../../sources/datagouv__datagouv-mcp/tools/get_dataservice_openapi_spec.py)<br>[tests/__init__.py](../../../../sources/datagouv__datagouv-mcp/tests/__init__.py)<br>[tests/test_crawler_api.py](../../../../sources/datagouv__datagouv-mcp/tests/test_crawler_api.py)<br>[tests/test_datagouv_api.py](../../../../sources/datagouv__datagouv-mcp/tests/test_datagouv_api.py)<br>[tests/test_env_config.py](../../../../sources/datagouv__datagouv-mcp/tests/test_env_config.py)<br>[tests/test_health_check.py](../../../../sources/datagouv__datagouv-mcp/tests/test_health_check.py) |
| CI workflow | 1 | [.github/workflows/contribution-reminder.yml](../../../../sources/datagouv__datagouv-mcp/.github/workflows/contribution-reminder.yml) |
| 컨테이너/배포 | 2 | [docker-compose.yml](../../../../sources/datagouv__datagouv-mcp/docker-compose.yml)<br>[Dockerfile](../../../../sources/datagouv__datagouv-mcp/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `main.py`, `README.md`, `tools/get_dataservice_openapi_spec.py`.
2. entrypoint를 따라 실행 흐름 확인: `main.py`.
3. agent/tool runtime 매핑: `tools/__init__.py`, `tools/get_dataservice_info.py`, `tools/get_dataservice_openapi_spec.py`.
4. test/eval 파일로 동작 검증: `tools/get_dataservice_openapi_spec.py`, `tests/__init__.py`, `tests/test_crawler_api.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Official data.gouv.fr Model Context Protocol MCP server that allows AI chatbots to search, explore, and analyze datasets. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
