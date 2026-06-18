# dynamiq-ai/dynamiq 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Dynamiq is an orchestration framework for agentic AI and LLM applications

## 요약

- 조사 단위: `sources/dynamiq-ai__dynamiq` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,083 files, 236 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/integration/nodes/tools/test_mcp_tool.py, examples/components/tools/mcp_server_as_tool/use_mcp_adapter_tool.py, examples/components/tools/mcp_server_as_tool/mcp_servers/math_server.py이고, 의존성 단서는 openai, mcp, fastapi, pydantic, typer, chroma, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | dynamiq-ai/dynamiq |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1054 |
| Forks | 128 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/dynamiq-ai__dynamiq](../../../../sources/dynamiq-ai__dynamiq) |
| 기존 보고서 | [reports/global-trending/repositories/dynamiq-ai__dynamiq.md](../../../global-trending/repositories/dynamiq-ai__dynamiq.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1083 / 236 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .cursor, .github, docs, dynamiq, examples, scripts, tests |
| 상위 확장자 | .py: 961, .yaml: 50, .md: 29, .sh: 9, (none): 7, .csv: 4, .html: 3, .txt: 3, .docx: 2, .pdf: 2, .png: 2, .pptx: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 113 |
| examples/components | examples workspace | 35 |
| examples/use_cases | examples workspace | 20 |
| docs | documentation surface | 6 |
| examples/cli | examples workspace | 5 |
| .github | ci surface | 1 |
| dynamiq | top-level component | 1 |
| examples | top-level component | 1 |
| examples/Makefile | examples workspace | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | Makefile | install-dependencies-dev | make install-dependencies-dev |
| utility | Makefile | install-dependencies-examples | make install-dependencies-examples |
| utility | Makefile | install-dependencies-main | make install-dependencies-main |
| utility | Makefile | install-dependencies-all | make install-dependencies-all |
| utility | Makefile | install-pre-commit | make install-pre-commit |
| utility | Makefile | install | make install |
| utility | Makefile | prepare | make prepare |
| quality | Makefile | lint | make lint |
| utility | Makefile | lock | make lock |
| test | Makefile | test-integration | make test-integration |
| test | Makefile | test-integration-with-creds | make test-integration-with-creds |
| test | Makefile | test-smoke | make test-smoke |
| test | Makefile | test-exclude-integration-with-creds | make test-exclude-integration-with-creds |
| test | Makefile | test-unit | make test-unit |
| test | Makefile | test | make test |
| test | Makefile | test-cov | make test-cov |
| test | Makefile | test-cov-exclude-integration-with-creds | make test-cov-exclude-integration-with-creds |
| build | Makefile | build-mkdocs | make build-mkdocs |
| utility | Makefile | publish-mkdocs | make publish-mkdocs |
| utility | Makefile | run-mkdocs-locally | make run-mkdocs-locally |
| utility | pyproject.toml | dynamiq | dynamiq |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | chroma, qdrant, milvus, weaviate, pgvector |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | typer |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/integration/nodes/tools/test_mcp_tool.py](../../../../sources/dynamiq-ai__dynamiq/tests/integration/nodes/tools/test_mcp_tool.py) | mcp signal |
| mcp | [examples/components/tools/mcp_server_as_tool/use_mcp_adapter_tool.py](../../../../sources/dynamiq-ai__dynamiq/examples/components/tools/mcp_server_as_tool/use_mcp_adapter_tool.py) | mcp signal |
| mcp | [examples/components/tools/mcp_server_as_tool/mcp_servers/math_server.py](../../../../sources/dynamiq-ai__dynamiq/examples/components/tools/mcp_server_as_tool/mcp_servers/math_server.py) | mcp signal |
| mcp | [examples/components/tools/mcp_server_as_tool/mcp_servers/weather_server.py](../../../../sources/dynamiq-ai__dynamiq/examples/components/tools/mcp_server_as_tool/mcp_servers/weather_server.py) | mcp signal |
| agentRuntime | [tests/unit/skills/__init__.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/skills/__init__.py) | agentRuntime signal |
| agentRuntime | [tests/unit/skills/test_ingestion.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/skills/test_ingestion.py) | agentRuntime signal |
| agentRuntime | [tests/unit/skills/test_registries.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/skills/test_registries.py) | agentRuntime signal |
| agentRuntime | [tests/unit/skills/test_skills_config.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/skills/test_skills_config.py) | agentRuntime signal |
| entrypoints | [examples/use_cases/smm_manager/main.py](../../../../sources/dynamiq-ai__dynamiq/examples/use_cases/smm_manager/main.py) | entrypoints signal |
| entrypoints | [examples/use_cases/search/server.py](../../../../sources/dynamiq-ai__dynamiq/examples/use_cases/search/server.py) | entrypoints signal |
| entrypoints | [examples/use_cases/financial_assistant/main.py](../../../../sources/dynamiq-ai__dynamiq/examples/use_cases/financial_assistant/main.py) | entrypoints signal |
| entrypoints | [examples/use_cases/customer_support/main.py](../../../../sources/dynamiq-ai__dynamiq/examples/use_cases/customer_support/main.py) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 11 | [examples/use_cases/smm_manager/main.py](../../../../sources/dynamiq-ai__dynamiq/examples/use_cases/smm_manager/main.py)<br>[examples/use_cases/search/server.py](../../../../sources/dynamiq-ai__dynamiq/examples/use_cases/search/server.py)<br>[examples/use_cases/financial_assistant/main.py](../../../../sources/dynamiq-ai__dynamiq/examples/use_cases/financial_assistant/main.py)<br>[examples/use_cases/customer_support/main.py](../../../../sources/dynamiq-ai__dynamiq/examples/use_cases/customer_support/main.py)<br>[examples/components/tools/stagehand_tool/main.py](../../../../sources/dynamiq-ai__dynamiq/examples/components/tools/stagehand_tool/main.py)<br>[examples/components/tools/multi_file_type_converter/main.py](../../../../sources/dynamiq-ai__dynamiq/examples/components/tools/multi_file_type_converter/main.py)<br>[examples/components/tools/cua_desktop/main.py](../../../../sources/dynamiq-ai__dynamiq/examples/components/tools/cua_desktop/main.py)<br>[examples/components/core/websocket/ws_streamlit/example_llm/server.py](../../../../sources/dynamiq-ai__dynamiq/examples/components/core/websocket/ws_streamlit/example_llm/server.py) |
| agentRuntime | 348 | [tests/unit/skills/__init__.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/skills/__init__.py)<br>[tests/unit/skills/test_ingestion.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/skills/test_ingestion.py)<br>[tests/unit/skills/test_registries.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/skills/test_registries.py)<br>[tests/unit/skills/test_skills_config.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/skills/test_skills_config.py)<br>[tests/unit/nodes/tools/test_daytona_sandbox.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/nodes/tools/test_daytona_sandbox.py)<br>[tests/unit/nodes/tools/test_file_tools.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/nodes/tools/test_file_tools.py)<br>[tests/unit/nodes/tools/test_firecrawl_async.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/nodes/tools/test_firecrawl_async.py)<br>[tests/unit/nodes/tools/test_http_api_call_async.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/nodes/tools/test_http_api_call_async.py) |
| mcp | 8 | [tests/integration/nodes/tools/test_mcp_tool.py](../../../../sources/dynamiq-ai__dynamiq/tests/integration/nodes/tools/test_mcp_tool.py)<br>[examples/components/tools/mcp_server_as_tool/use_mcp_adapter_tool.py](../../../../sources/dynamiq-ai__dynamiq/examples/components/tools/mcp_server_as_tool/use_mcp_adapter_tool.py)<br>[examples/components/tools/mcp_server_as_tool/mcp_servers/math_server.py](../../../../sources/dynamiq-ai__dynamiq/examples/components/tools/mcp_server_as_tool/mcp_servers/math_server.py)<br>[examples/components/tools/mcp_server_as_tool/mcp_servers/weather_server.py](../../../../sources/dynamiq-ai__dynamiq/examples/components/tools/mcp_server_as_tool/mcp_servers/weather_server.py)<br>[examples/components/core/dag/dag_mcp_server.yaml](../../../../sources/dynamiq-ai__dynamiq/examples/components/core/dag/dag_mcp_server.yaml)<br>[examples/components/core/dag/dag_mcp_tool.yaml](../../../../sources/dynamiq-ai__dynamiq/examples/components/core/dag/dag_mcp_tool.yaml)<br>[examples/components/core/dag/dag_yaml_mcp.py](../../../../sources/dynamiq-ai__dynamiq/examples/components/core/dag/dag_yaml_mcp.py)<br>[dynamiq/nodes/tools/mcp.py](../../../../sources/dynamiq-ai__dynamiq/dynamiq/nodes/tools/mcp.py) |
| retrieval | 146 | [tests/unit/storages/test_in_memory_file_storage.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/storages/test_in_memory_file_storage.py)<br>[tests/unit/storages/vector/test_base.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/storages/vector/test_base.py)<br>[tests/unit/storages/vector/test_utils.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/storages/vector/test_utils.py)<br>[tests/unit/storages/vector/weaviate/test_weaviate_tenant.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/storages/vector/weaviate/test_weaviate_tenant.py)<br>[tests/unit/storages/vector/weaviate/test_weaviate.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/storages/vector/weaviate/test_weaviate.py)<br>[tests/unit/storages/vector/qdrant/test_converters.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/storages/vector/qdrant/test_converters.py)<br>[tests/unit/storages/vector/qdrant/test_filters.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/storages/vector/qdrant/test_filters.py)<br>[tests/unit/storages/vector/qdrant/test_qdrant_storage.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/storages/vector/qdrant/test_qdrant_storage.py) |
| spec | 1 | [examples/cli/agent_service/requirements.txt](../../../../sources/dynamiq-ai__dynamiq/examples/cli/agent_service/requirements.txt) |
| eval | 292 | [tests/__init__.py](../../../../sources/dynamiq-ai__dynamiq/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/dynamiq-ai__dynamiq/tests/conftest.py)<br>[tests/unit/__init__.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/__init__.py)<br>[tests/unit/test_cancellation.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/test_cancellation.py)<br>[tests/unit/utils/test_file_serialization.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/utils/test_file_serialization.py)<br>[tests/unit/utils/test_json_parser.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/utils/test_json_parser.py)<br>[tests/unit/utils/test_text_truncation.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/utils/test_text_truncation.py)<br>[tests/unit/storages/test_in_memory_file_storage.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/storages/test_in_memory_file_storage.py) |
| security | 19 | [SECURITY.md](../../../../sources/dynamiq-ai__dynamiq/SECURITY.md)<br>[tests/unit/sandboxes/test_daytona_sandbox_provider.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/sandboxes/test_daytona_sandbox_provider.py)<br>[tests/unit/nodes/tools/test_daytona_sandbox.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/nodes/tools/test_daytona_sandbox.py)<br>[tests/integration_with_creds/agents/test_agent_sandbox_files.py](../../../../sources/dynamiq-ai__dynamiq/tests/integration_with_creds/agents/test_agent_sandbox_files.py)<br>[tests/integration_with_creds/agents/test_agent_sandbox.py](../../../../sources/dynamiq-ai__dynamiq/tests/integration_with_creds/agents/test_agent_sandbox.py)<br>[tests/integration/nodes/tools/test_e2b_sandbox.py](../../../../sources/dynamiq-ai__dynamiq/tests/integration/nodes/tools/test_e2b_sandbox.py)<br>[tests/integration/nodes/agents/test_agent_sandbox.py](../../../../sources/dynamiq-ai__dynamiq/tests/integration/nodes/agents/test_agent_sandbox.py)<br>[examples/components/tools/e2b_desktop_sandbox/use_e2b_desktop.py](../../../../sources/dynamiq-ai__dynamiq/examples/components/tools/e2b_desktop_sandbox/use_e2b_desktop.py) |
| ci | 5 | [.github/workflows/ci.yaml](../../../../sources/dynamiq-ai__dynamiq/.github/workflows/ci.yaml)<br>[.github/workflows/integration-tests-with-creds.yaml](../../../../sources/dynamiq-ai__dynamiq/.github/workflows/integration-tests-with-creds.yaml)<br>[.github/workflows/pr.yaml](../../../../sources/dynamiq-ai__dynamiq/.github/workflows/pr.yaml)<br>[.github/workflows/publish.yml](../../../../sources/dynamiq-ai__dynamiq/.github/workflows/publish.yml)<br>[.github/workflows/smoke-tests.yaml](../../../../sources/dynamiq-ai__dynamiq/.github/workflows/smoke-tests.yaml) |
| container | 3 | [docker-compose.yaml](../../../../sources/dynamiq-ai__dynamiq/docker-compose.yaml)<br>[Dockerfile](../../../../sources/dynamiq-ai__dynamiq/Dockerfile)<br>[examples/cli/agent_service/Dockerfile](../../../../sources/dynamiq-ai__dynamiq/examples/cli/agent_service/Dockerfile) |
| instruction | 1 | [docs/tutorials/agents.md](../../../../sources/dynamiq-ai__dynamiq/docs/tutorials/agents.md) |
| docs | 23 | [mkdocs.yml](../../../../sources/dynamiq-ai__dynamiq/mkdocs.yml)<br>[README.md](../../../../sources/dynamiq-ai__dynamiq/README.md)<br>[examples/use_cases/trip_planner/README.md](../../../../sources/dynamiq-ai__dynamiq/examples/use_cases/trip_planner/README.md)<br>[examples/use_cases/smm_manager/README.md](../../../../sources/dynamiq-ai__dynamiq/examples/use_cases/smm_manager/README.md)<br>[examples/use_cases/search/README.md](../../../../sources/dynamiq-ai__dynamiq/examples/use_cases/search/README.md)<br>[examples/use_cases/researcher/README.md](../../../../sources/dynamiq-ai__dynamiq/examples/use_cases/researcher/README.md)<br>[examples/use_cases/project_manager/README.md](../../../../sources/dynamiq-ai__dynamiq/examples/use_cases/project_manager/README.md)<br>[examples/use_cases/literature_overview/README.md](../../../../sources/dynamiq-ai__dynamiq/examples/use_cases/literature_overview/README.md) |
| config | 5 | [Makefile](../../../../sources/dynamiq-ai__dynamiq/Makefile)<br>[poetry.lock](../../../../sources/dynamiq-ai__dynamiq/poetry.lock)<br>[pyproject.toml](../../../../sources/dynamiq-ai__dynamiq/pyproject.toml)<br>[examples/Makefile](../../../../sources/dynamiq-ai__dynamiq/examples/Makefile)<br>[examples/cli/agent_service/requirements.txt](../../../../sources/dynamiq-ai__dynamiq/examples/cli/agent_service/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 292 | [tests/__init__.py](../../../../sources/dynamiq-ai__dynamiq/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/dynamiq-ai__dynamiq/tests/conftest.py)<br>[tests/unit/__init__.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/__init__.py)<br>[tests/unit/test_cancellation.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/test_cancellation.py)<br>[tests/unit/utils/test_file_serialization.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/utils/test_file_serialization.py)<br>[tests/unit/utils/test_json_parser.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/utils/test_json_parser.py) |
| CI workflow | 5 | [.github/workflows/ci.yaml](../../../../sources/dynamiq-ai__dynamiq/.github/workflows/ci.yaml)<br>[.github/workflows/integration-tests-with-creds.yaml](../../../../sources/dynamiq-ai__dynamiq/.github/workflows/integration-tests-with-creds.yaml)<br>[.github/workflows/pr.yaml](../../../../sources/dynamiq-ai__dynamiq/.github/workflows/pr.yaml)<br>[.github/workflows/publish.yml](../../../../sources/dynamiq-ai__dynamiq/.github/workflows/publish.yml)<br>[.github/workflows/smoke-tests.yaml](../../../../sources/dynamiq-ai__dynamiq/.github/workflows/smoke-tests.yaml) |
| 컨테이너/배포 | 3 | [docker-compose.yaml](../../../../sources/dynamiq-ai__dynamiq/docker-compose.yaml)<br>[Dockerfile](../../../../sources/dynamiq-ai__dynamiq/Dockerfile)<br>[examples/cli/agent_service/Dockerfile](../../../../sources/dynamiq-ai__dynamiq/examples/cli/agent_service/Dockerfile) |
| 보안/정책 | 19 | [SECURITY.md](../../../../sources/dynamiq-ai__dynamiq/SECURITY.md)<br>[tests/unit/sandboxes/test_daytona_sandbox_provider.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/sandboxes/test_daytona_sandbox_provider.py)<br>[tests/unit/nodes/tools/test_daytona_sandbox.py](../../../../sources/dynamiq-ai__dynamiq/tests/unit/nodes/tools/test_daytona_sandbox.py)<br>[tests/integration_with_creds/agents/test_agent_sandbox_files.py](../../../../sources/dynamiq-ai__dynamiq/tests/integration_with_creds/agents/test_agent_sandbox_files.py)<br>[tests/integration_with_creds/agents/test_agent_sandbox.py](../../../../sources/dynamiq-ai__dynamiq/tests/integration_with_creds/agents/test_agent_sandbox.py)<br>[tests/integration/nodes/tools/test_e2b_sandbox.py](../../../../sources/dynamiq-ai__dynamiq/tests/integration/nodes/tools/test_e2b_sandbox.py) |
| 에이전트 지시문 | 1 | [docs/tutorials/agents.md](../../../../sources/dynamiq-ai__dynamiq/docs/tutorials/agents.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/integration/nodes/tools/test_mcp_tool.py`, `examples/components/tools/mcp_server_as_tool/use_mcp_adapter_tool.py`, `examples/components/tools/mcp_server_as_tool/mcp_servers/math_server.py`.
2. entrypoint를 따라 실행 흐름 확인: `examples/use_cases/smm_manager/main.py`, `examples/use_cases/search/server.py`, `examples/use_cases/financial_assistant/main.py`.
3. agent/tool runtime 매핑: `tests/unit/skills/__init__.py`, `tests/unit/skills/test_ingestion.py`, `tests/unit/skills/test_registries.py`.
4. retrieval/memory/indexing 확인: `tests/unit/storages/test_in_memory_file_storage.py`, `tests/unit/storages/vector/test_base.py`, `tests/unit/storages/vector/test_utils.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/unit/__init__.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Dynamiq is an orchestration framework for agentic AI and LLM applications. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, Makefile, README.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
