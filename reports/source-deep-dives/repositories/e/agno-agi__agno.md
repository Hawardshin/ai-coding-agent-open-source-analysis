# agno-agi/agno 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 4746 files, 716 directories.

## 요약

- 조사 단위: `sources/agno-agi__agno` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 4,746 files, 716 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=libs/agno/tests/unit/tools/test_mcp.py, libs/agno/tests/system/tests/test_mcp_routes.py, libs/agno/tests/integration/os/test_register_mcp_tools.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | agno-agi/agno |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 40751 |
| Forks | 5533 |
| License | Apache-2.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/agno-agi__agno](../../../../sources/agno-agi__agno) |
| 기존 보고서 | [reports/global-trending/repositories/agno-agi__agno.md](../../../global-trending/repositories/agno-agi__agno.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 4746 / 716 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, cookbook, libs, scripts |
| 상위 확장자 | .py: 3938, .md: 612, .sh: 43, .bat: 25, .txt: 20, (none): 20, .png: 11, .yml: 11, .pdf: 9, .json: 8, .docx: 7, .yaml: 7 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| libs/agno | libs workspace | 153 |
| libs/agno_infra | libs workspace | 15 |
| .github | ci surface | 1 |
| cookbook | top-level component | 1 |
| libs | source boundary | 1 |
| scripts | top-level component | 1 |


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
| mcp | [libs/agno/tests/unit/tools/test_mcp.py](../../../../sources/agno-agi__agno/libs/agno/tests/unit/tools/test_mcp.py) | mcp signal |
| mcp | [libs/agno/tests/system/tests/test_mcp_routes.py](../../../../sources/agno-agi__agno/libs/agno/tests/system/tests/test_mcp_routes.py) | mcp signal |
| mcp | [libs/agno/tests/integration/os/test_register_mcp_tools.py](../../../../sources/agno-agi__agno/libs/agno/tests/integration/os/test_register_mcp_tools.py) | mcp signal |
| mcp | [libs/agno/agno/utils/mcp.py](../../../../sources/agno-agi__agno/libs/agno/agno/utils/mcp.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/agno-agi__agno/AGENTS.md) | agentRuntime signal |
| agentRuntime | [libs/agno_infra/agno/docker/context.py](../../../../sources/agno-agi__agno/libs/agno_infra/agno/docker/context.py) | agentRuntime signal |
| agentRuntime | [libs/agno_infra/agno/base/context.py](../../../../sources/agno-agi__agno/libs/agno_infra/agno/base/context.py) | agentRuntime signal |
| agentRuntime | [libs/agno_infra/agno/aws/context.py](../../../../sources/agno-agi__agno/libs/agno_infra/agno/aws/context.py) | agentRuntime signal |
| entrypoints | [cookbook/91_tools/mcp/streamable_http_transport/server.py](../../../../sources/agno-agi__agno/cookbook/91_tools/mcp/streamable_http_transport/server.py) | entrypoints signal |
| entrypoints | [cookbook/91_tools/mcp/sse_transport/server.py](../../../../sources/agno-agi__agno/cookbook/91_tools/mcp/sse_transport/server.py) | entrypoints signal |
| entrypoints | [cookbook/91_tools/mcp/local_server/server.py](../../../../sources/agno-agi__agno/cookbook/91_tools/mcp/local_server/server.py) | entrypoints signal |
| entrypoints | [cookbook/91_tools/mcp/dynamic_headers/server.py](../../../../sources/agno-agi__agno/cookbook/91_tools/mcp/dynamic_headers/server.py) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 10 | [cookbook/91_tools/mcp/streamable_http_transport/server.py](../../../../sources/agno-agi__agno/cookbook/91_tools/mcp/streamable_http_transport/server.py)<br>[cookbook/91_tools/mcp/sse_transport/server.py](../../../../sources/agno-agi__agno/cookbook/91_tools/mcp/sse_transport/server.py)<br>[cookbook/91_tools/mcp/local_server/server.py](../../../../sources/agno-agi__agno/cookbook/91_tools/mcp/local_server/server.py)<br>[cookbook/91_tools/mcp/dynamic_headers/server.py](../../../../sources/agno-agi__agno/cookbook/91_tools/mcp/dynamic_headers/server.py)<br>[cookbook/05_agent_os/remote/server.py](../../../../sources/agno-agi__agno/cookbook/05_agent_os/remote/server.py)<br>[cookbook/05_agent_os/mcp_demo/dynamic_headers/server.py](../../../../sources/agno-agi__agno/cookbook/05_agent_os/mcp_demo/dynamic_headers/server.py)<br>[cookbook/05_agent_os/interfaces/a2a/basic_agent/__main__.py](../../../../sources/agno-agi__agno/cookbook/05_agent_os/interfaces/a2a/basic_agent/__main__.py)<br>[cookbook/05_agent_os/human_in_the_loop/workflow/main.py](../../../../sources/agno-agi__agno/cookbook/05_agent_os/human_in_the_loop/workflow/main.py) |
| agentRuntime | 771 | [AGENTS.md](../../../../sources/agno-agi__agno/AGENTS.md)<br>[libs/agno_infra/agno/docker/context.py](../../../../sources/agno-agi__agno/libs/agno_infra/agno/docker/context.py)<br>[libs/agno_infra/agno/base/context.py](../../../../sources/agno-agi__agno/libs/agno_infra/agno/base/context.py)<br>[libs/agno_infra/agno/aws/context.py](../../../../sources/agno-agi__agno/libs/agno_infra/agno/aws/context.py)<br>[libs/agno/tests/unit/workflow/__init__.py](../../../../sources/agno-agi__agno/libs/agno/tests/unit/workflow/__init__.py)<br>[libs/agno/tests/unit/workflow/test_cel.py](../../../../sources/agno-agi__agno/libs/agno/tests/unit/workflow/test_cel.py)<br>[libs/agno/tests/unit/workflow/test_condition_serialization.py](../../../../sources/agno-agi__agno/libs/agno/tests/unit/workflow/test_condition_serialization.py)<br>[libs/agno/tests/unit/workflow/test_executor_hitl.py](../../../../sources/agno-agi__agno/libs/agno/tests/unit/workflow/test_executor_hitl.py) |
| mcp | 94 | [libs/agno/tests/unit/tools/test_mcp.py](../../../../sources/agno-agi__agno/libs/agno/tests/unit/tools/test_mcp.py)<br>[libs/agno/tests/system/tests/test_mcp_routes.py](../../../../sources/agno-agi__agno/libs/agno/tests/system/tests/test_mcp_routes.py)<br>[libs/agno/tests/integration/os/test_register_mcp_tools.py](../../../../sources/agno-agi__agno/libs/agno/tests/integration/os/test_register_mcp_tools.py)<br>[libs/agno/agno/utils/mcp.py](../../../../sources/agno-agi__agno/libs/agno/agno/utils/mcp.py)<br>[libs/agno/agno/tools/mcp_toolbox.py](../../../../sources/agno-agi__agno/libs/agno/agno/tools/mcp_toolbox.py)<br>[libs/agno/agno/tools/tool_registry.py](../../../../sources/agno-agi__agno/libs/agno/agno/tools/tool_registry.py)<br>[libs/agno/agno/tools/mcp/__init__.py](../../../../sources/agno-agi__agno/libs/agno/agno/tools/mcp/__init__.py)<br>[libs/agno/agno/tools/mcp/mcp.py](../../../../sources/agno-agi__agno/libs/agno/agno/tools/mcp/mcp.py) |
| retrieval | 626 | [libs/agno/tests/unit/team/test_knowledge_retriever_tool_priority.py](../../../../sources/agno-agi__agno/libs/agno/tests/unit/team/test_knowledge_retriever_tool_priority.py)<br>[libs/agno/tests/unit/os/test_knowledge_filters_serialization.py](../../../../sources/agno-agi__agno/libs/agno/tests/unit/os/test_knowledge_filters_serialization.py)<br>[libs/agno/tests/unit/os/test_validate_knowledge_names.py](../../../../sources/agno-agi__agno/libs/agno/tests/unit/os/test_validate_knowledge_names.py)<br>[libs/agno/tests/unit/memory/test_manager_identity.py](../../../../sources/agno-agi__agno/libs/agno/tests/unit/memory/test_manager_identity.py)<br>[libs/agno/tests/unit/memory/test_memory_manager_async.py](../../../../sources/agno-agi__agno/libs/agno/tests/unit/memory/test_memory_manager_async.py)<br>[libs/agno/tests/unit/memory/test_memory_manager_crud.py](../../../../sources/agno-agi__agno/libs/agno/tests/unit/memory/test_memory_manager_crud.py)<br>[libs/agno/tests/unit/memory/test_memory_optimization.py](../../../../sources/agno-agi__agno/libs/agno/tests/unit/memory/test_memory_optimization.py)<br>[libs/agno/tests/unit/memory/test_update_memory_fields.py](../../../../sources/agno-agi__agno/libs/agno/tests/unit/memory/test_update_memory_fields.py) |
| spec | 27 | [libs/agno_infra/requirements.txt](../../../../sources/agno-agi__agno/libs/agno_infra/requirements.txt)<br>[libs/agno_infra/scripts/generate_requirements.sh](../../../../sources/agno-agi__agno/libs/agno_infra/scripts/generate_requirements.sh)<br>[libs/agno/requirements.txt](../../../../sources/agno-agi__agno/libs/agno/requirements.txt)<br>[libs/agno/tests/unit/team/test_continue_run_requirements.py](../../../../sources/agno-agi__agno/libs/agno/tests/unit/team/test_continue_run_requirements.py)<br>[libs/agno/tests/unit/team/test_run_requirement_fixes.py](../../../../sources/agno-agi__agno/libs/agno/tests/unit/team/test_run_requirement_fixes.py)<br>[libs/agno/tests/system/requirements.txt](../../../../sources/agno-agi__agno/libs/agno/tests/system/requirements.txt)<br>[libs/agno/tests/integration/workflows/test_hitl_requirements_persistence.py](../../../../sources/agno-agi__agno/libs/agno/tests/integration/workflows/test_hitl_requirements_persistence.py)<br>[libs/agno/tests/integration/agent/human_in_the_loop/test_run_requirement.py](../../../../sources/agno-agi__agno/libs/agno/tests/integration/agent/human_in_the_loop/test_run_requirement.py) |
| eval | 1301 | [scripts/run_model_tests.sh](../../../../sources/agno-agi__agno/scripts/run_model_tests.sh)<br>[scripts/test_setup.bat](../../../../sources/agno-agi__agno/scripts/test_setup.bat)<br>[scripts/test_setup.sh](../../../../sources/agno-agi__agno/scripts/test_setup.sh)<br>[scripts/test.bat](../../../../sources/agno-agi__agno/scripts/test.bat)<br>[scripts/test.sh](../../../../sources/agno-agi__agno/scripts/test.sh)<br>[libs/agno_infra/tests/__init__.py](../../../../sources/agno-agi__agno/libs/agno_infra/tests/__init__.py)<br>[libs/agno_infra/scripts/test.sh](../../../../sources/agno-agi__agno/libs/agno_infra/scripts/test.sh)<br>[libs/agno/tests/__init__.py](../../../../sources/agno-agi__agno/libs/agno/tests/__init__.py) |
| security | 39 | [libs/agno_infra/agno/aws/resource/secret/__init__.py](../../../../sources/agno-agi__agno/libs/agno_infra/agno/aws/resource/secret/__init__.py)<br>[libs/agno_infra/agno/aws/resource/secret/manager.py](../../../../sources/agno-agi__agno/libs/agno_infra/agno/aws/resource/secret/manager.py)<br>[libs/agno_infra/agno/aws/resource/secret/reader.py](../../../../sources/agno-agi__agno/libs/agno_infra/agno/aws/resource/secret/reader.py)<br>[libs/agno_infra/agno/aws/resource/iam/policy.py](../../../../sources/agno-agi__agno/libs/agno_infra/agno/aws/resource/iam/policy.py)<br>[libs/agno_infra/agno/aws/resource/ec2/security_group.py](../../../../sources/agno-agi__agno/libs/agno_infra/agno/aws/resource/ec2/security_group.py)<br>[libs/agno/tests/unit/tools/test_google_auth.py](../../../../sources/agno-agi__agno/libs/agno/tests/unit/tools/test_google_auth.py)<br>[libs/agno/tests/unit/os/test_os_security_key_webhooks.py](../../../../sources/agno-agi__agno/libs/agno/tests/unit/os/test_os_security_key_webhooks.py)<br>[libs/agno/tests/unit/os/routers/test_slack_security.py](../../../../sources/agno-agi__agno/libs/agno/tests/unit/os/routers/test_slack_security.py) |
| ci | 7 | [.github/workflows/claude.yml](../../../../sources/agno-agi__agno/.github/workflows/claude.yml)<br>[.github/workflows/performance.yml](../../../../sources/agno-agi__agno/.github/workflows/performance.yml)<br>[.github/workflows/pr-lint.yml](../../../../sources/agno-agi__agno/.github/workflows/pr-lint.yml)<br>[.github/workflows/pr-triage.yml](../../../../sources/agno-agi__agno/.github/workflows/pr-triage.yml)<br>[.github/workflows/release.yml](../../../../sources/agno-agi__agno/.github/workflows/release.yml)<br>[.github/workflows/test_on_release.yml](../../../../sources/agno-agi__agno/.github/workflows/test_on_release.yml)<br>[.github/workflows/test.yml](../../../../sources/agno-agi__agno/.github/workflows/test.yml) |
| container | 6 | [libs/agno/tests/system/docker-compose.yaml](../../../../sources/agno-agi__agno/libs/agno/tests/system/docker-compose.yaml)<br>[libs/agno/tests/system/Dockerfile.adk](../../../../sources/agno-agi__agno/libs/agno/tests/system/Dockerfile.adk)<br>[libs/agno/tests/system/Dockerfile.agno_a2a](../../../../sources/agno-agi__agno/libs/agno/tests/system/Dockerfile.agno_a2a)<br>[libs/agno/tests/system/Dockerfile.gateway](../../../../sources/agno-agi__agno/libs/agno/tests/system/Dockerfile.gateway)<br>[libs/agno/tests/system/Dockerfile.remote](../../../../sources/agno-agi__agno/libs/agno/tests/system/Dockerfile.remote)<br>[cookbook/91_tools/mcp/mcp_toolbox_demo/docker-compose.yml](../../../../sources/agno-agi__agno/cookbook/91_tools/mcp/mcp_toolbox_demo/docker-compose.yml) |
| instruction | 5 | [AGENTS.md](../../../../sources/agno-agi__agno/AGENTS.md)<br>[CLAUDE.md](../../../../sources/agno-agi__agno/CLAUDE.md)<br>[cookbook/frameworks/antigravity/example_agent/AGENTS.md](../../../../sources/agno-agi__agno/cookbook/frameworks/antigravity/example_agent/AGENTS.md)<br>[cookbook/05_agent_os/scheduler/CLAUDE.md](../../../../sources/agno-agi__agno/cookbook/05_agent_os/scheduler/CLAUDE.md)<br>[cookbook/03_teams/20_human_in_the_loop/CLAUDE.md](../../../../sources/agno-agi__agno/cookbook/03_teams/20_human_in_the_loop/CLAUDE.md) |
| docs | 302 | [README.md](../../../../sources/agno-agi__agno/README.md)<br>[libs/agno_infra/README.md](../../../../sources/agno-agi__agno/libs/agno_infra/README.md)<br>[libs/agno/tests/system/README.md](../../../../sources/agno-agi__agno/libs/agno/tests/system/README.md)<br>[libs/agno/tests/integration/models/litellm_openai/README.md](../../../../sources/agno-agi__agno/libs/agno/tests/integration/models/litellm_openai/README.md)<br>[libs/agno/migrations/README.md](../../../../sources/agno-agi__agno/libs/agno/migrations/README.md)<br>[cookbook/README.md](../../../../sources/agno-agi__agno/cookbook/README.md)<br>[cookbook/observability/README.md](../../../../sources/agno-agi__agno/cookbook/observability/README.md)<br>[cookbook/observability/workflows/README.md](../../../../sources/agno-agi__agno/cookbook/observability/workflows/README.md) |
| config | 14 | [libs/agno_infra/pyproject.toml](../../../../sources/agno-agi__agno/libs/agno_infra/pyproject.toml)<br>[libs/agno_infra/requirements.txt](../../../../sources/agno-agi__agno/libs/agno_infra/requirements.txt)<br>[libs/agno/pyproject.toml](../../../../sources/agno-agi__agno/libs/agno/pyproject.toml)<br>[libs/agno/requirements.txt](../../../../sources/agno-agi__agno/libs/agno/requirements.txt)<br>[libs/agno/tests/system/requirements.txt](../../../../sources/agno-agi__agno/libs/agno/tests/system/requirements.txt)<br>[cookbook/levels_of_agentic_software/requirements.txt](../../../../sources/agno-agi__agno/cookbook/levels_of_agentic_software/requirements.txt)<br>[cookbook/gemini_3/requirements.txt](../../../../sources/agno-agi__agno/cookbook/gemini_3/requirements.txt)<br>[cookbook/data_labeling/image_search/requirements.txt](../../../../sources/agno-agi__agno/cookbook/data_labeling/image_search/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1301 | [scripts/run_model_tests.sh](../../../../sources/agno-agi__agno/scripts/run_model_tests.sh)<br>[scripts/test_setup.bat](../../../../sources/agno-agi__agno/scripts/test_setup.bat)<br>[scripts/test_setup.sh](../../../../sources/agno-agi__agno/scripts/test_setup.sh)<br>[scripts/test.bat](../../../../sources/agno-agi__agno/scripts/test.bat)<br>[scripts/test.sh](../../../../sources/agno-agi__agno/scripts/test.sh)<br>[libs/agno_infra/tests/__init__.py](../../../../sources/agno-agi__agno/libs/agno_infra/tests/__init__.py) |
| CI workflow | 7 | [.github/workflows/claude.yml](../../../../sources/agno-agi__agno/.github/workflows/claude.yml)<br>[.github/workflows/performance.yml](../../../../sources/agno-agi__agno/.github/workflows/performance.yml)<br>[.github/workflows/pr-lint.yml](../../../../sources/agno-agi__agno/.github/workflows/pr-lint.yml)<br>[.github/workflows/pr-triage.yml](../../../../sources/agno-agi__agno/.github/workflows/pr-triage.yml)<br>[.github/workflows/release.yml](../../../../sources/agno-agi__agno/.github/workflows/release.yml)<br>[.github/workflows/test_on_release.yml](../../../../sources/agno-agi__agno/.github/workflows/test_on_release.yml) |
| 컨테이너/배포 | 6 | [libs/agno/tests/system/docker-compose.yaml](../../../../sources/agno-agi__agno/libs/agno/tests/system/docker-compose.yaml)<br>[libs/agno/tests/system/Dockerfile.adk](../../../../sources/agno-agi__agno/libs/agno/tests/system/Dockerfile.adk)<br>[libs/agno/tests/system/Dockerfile.agno_a2a](../../../../sources/agno-agi__agno/libs/agno/tests/system/Dockerfile.agno_a2a)<br>[libs/agno/tests/system/Dockerfile.gateway](../../../../sources/agno-agi__agno/libs/agno/tests/system/Dockerfile.gateway)<br>[libs/agno/tests/system/Dockerfile.remote](../../../../sources/agno-agi__agno/libs/agno/tests/system/Dockerfile.remote)<br>[cookbook/91_tools/mcp/mcp_toolbox_demo/docker-compose.yml](../../../../sources/agno-agi__agno/cookbook/91_tools/mcp/mcp_toolbox_demo/docker-compose.yml) |
| 보안/정책 | 39 | [libs/agno_infra/agno/aws/resource/secret/__init__.py](../../../../sources/agno-agi__agno/libs/agno_infra/agno/aws/resource/secret/__init__.py)<br>[libs/agno_infra/agno/aws/resource/secret/manager.py](../../../../sources/agno-agi__agno/libs/agno_infra/agno/aws/resource/secret/manager.py)<br>[libs/agno_infra/agno/aws/resource/secret/reader.py](../../../../sources/agno-agi__agno/libs/agno_infra/agno/aws/resource/secret/reader.py)<br>[libs/agno_infra/agno/aws/resource/iam/policy.py](../../../../sources/agno-agi__agno/libs/agno_infra/agno/aws/resource/iam/policy.py)<br>[libs/agno_infra/agno/aws/resource/ec2/security_group.py](../../../../sources/agno-agi__agno/libs/agno_infra/agno/aws/resource/ec2/security_group.py)<br>[libs/agno/tests/unit/tools/test_google_auth.py](../../../../sources/agno-agi__agno/libs/agno/tests/unit/tools/test_google_auth.py) |
| 에이전트 지시문 | 5 | [AGENTS.md](../../../../sources/agno-agi__agno/AGENTS.md)<br>[CLAUDE.md](../../../../sources/agno-agi__agno/CLAUDE.md)<br>[cookbook/frameworks/antigravity/example_agent/AGENTS.md](../../../../sources/agno-agi__agno/cookbook/frameworks/antigravity/example_agent/AGENTS.md)<br>[cookbook/05_agent_os/scheduler/CLAUDE.md](../../../../sources/agno-agi__agno/cookbook/05_agent_os/scheduler/CLAUDE.md)<br>[cookbook/03_teams/20_human_in_the_loop/CLAUDE.md](../../../../sources/agno-agi__agno/cookbook/03_teams/20_human_in_the_loop/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `libs/agno/tests/unit/tools/test_mcp.py`, `libs/agno/tests/system/tests/test_mcp_routes.py`, `libs/agno/tests/integration/os/test_register_mcp_tools.py`.
2. entrypoint를 따라 실행 흐름 확인: `cookbook/91_tools/mcp/streamable_http_transport/server.py`, `cookbook/91_tools/mcp/sse_transport/server.py`, `cookbook/91_tools/mcp/local_server/server.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `libs/agno_infra/agno/docker/context.py`, `libs/agno_infra/agno/base/context.py`.
4. retrieval/memory/indexing 확인: `libs/agno/tests/unit/team/test_knowledge_retriever_tool_priority.py`, `libs/agno/tests/unit/os/test_knowledge_filters_serialization.py`, `libs/agno/tests/unit/os/test_validate_knowledge_names.py`.
5. test/eval 파일로 동작 검증: `scripts/run_model_tests.sh`, `scripts/test_setup.bat`, `scripts/test_setup.sh`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 4746 files, 716 directories.. 핵심 구조 신호는 Python, README.md, AGENTS.md, CLAUDE.md, LICENSE, tests이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 큰 메타데이터 위험이 명확하지 않음입니다.
