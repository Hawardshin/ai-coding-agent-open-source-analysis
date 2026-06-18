# ZHangZHengEric/Sage 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Multi-Agent System Framework For Complex Tasks

## 요약

- 조사 단위: `sources/ZHangZHengEric__Sage` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,049 files, 396 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/sagents/tool/test_mcp_connection_pool.py, tests/sagents/tool/test_mcp_tool_schema_display.py, tests/common/services/test_mcp_service_registration.py이고, 의존성 단서는 openai, mcp, fastapi, pydantic, chroma, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | ZHangZHengEric/Sage |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1206 |
| Forks | 100 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/ZHangZHengEric__Sage](../../../../sources/ZHangZHengEric__Sage) |
| 기존 보고서 | [reports/global-trending/repositories/ZHangZHengEric__Sage.md](../../../global-trending/repositories/ZHangZHengEric__Sage.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2049 / 396 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .githooks, .github, app, assets, common, deploy, docs, examples, mcp_servers, outputs, release_notes, sagents, scripts, tests |
| 상위 확장자 | .py: 629, .vue: 359, .md: 256, .js: 189, .rs: 121, .xsd: 117, .png: 77, .ttf: 54, .txt: 51, .yaml: 28, .json: 26, .sh: 19 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 96 |
| docs | documentation surface | 65 |
| .github | ci surface | 1 |
| app | top-level component | 1 |
| assets | top-level component | 1 |
| common | top-level component | 1 |
| deploy | deployment surface | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| mcp_servers | source boundary | 1 |
| outputs | top-level component | 1 |
| release_notes | top-level component | 1 |
| sagents | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | sage | sage |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | chroma |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | opentelemetry |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/sagents/tool/test_mcp_connection_pool.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/tool/test_mcp_connection_pool.py) | mcp signal |
| mcp | [tests/sagents/tool/test_mcp_tool_schema_display.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/tool/test_mcp_tool_schema_display.py) | mcp signal |
| mcp | [tests/common/services/test_mcp_service_registration.py](../../../../sources/ZHangZHengEric__Sage/tests/common/services/test_mcp_service_registration.py) | mcp signal |
| mcp | [sagents/tool/mcp_connection_pool.py](../../../../sources/ZHangZHengEric__Sage/sagents/tool/mcp_connection_pool.py) | mcp signal |
| agentRuntime | [tests/sagents/utils/sandbox/test_bg_runner.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/utils/sandbox/test_bg_runner.py) | agentRuntime signal |
| agentRuntime | [tests/sagents/utils/sandbox/test_local_provider_path_permissions.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/utils/sandbox/test_local_provider_path_permissions.py) | agentRuntime signal |
| agentRuntime | [tests/sagents/utils/sandbox/test_passthrough_provider_path_permissions.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/utils/sandbox/test_passthrough_provider_path_permissions.py) | agentRuntime signal |
| entrypoints | [app/terminal/src/main.rs](../../../../sources/ZHangZHengEric__Sage/app/terminal/src/main.rs) | entrypoints signal |
| entrypoints | [app/server/main.py](../../../../sources/ZHangZHengEric__Sage/app/server/main.py) | entrypoints signal |
| entrypoints | [app/server/web/src/App.vue](../../../../sources/ZHangZHengEric__Sage/app/server/web/src/App.vue) | entrypoints signal |
| entrypoints | [app/server/web/src/main.js](../../../../sources/ZHangZHengEric__Sage/app/server/web/src/main.js) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/ZHangZHengEric__Sage/pyproject.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 9 | [app/terminal/src/main.rs](../../../../sources/ZHangZHengEric__Sage/app/terminal/src/main.rs)<br>[app/server/main.py](../../../../sources/ZHangZHengEric__Sage/app/server/main.py)<br>[app/server/web/src/App.vue](../../../../sources/ZHangZHengEric__Sage/app/server/web/src/App.vue)<br>[app/server/web/src/main.js](../../../../sources/ZHangZHengEric__Sage/app/server/web/src/main.js)<br>[app/desktop/ui/src/App.vue](../../../../sources/ZHangZHengEric__Sage/app/desktop/ui/src/App.vue)<br>[app/desktop/ui/src/main.js](../../../../sources/ZHangZHengEric__Sage/app/desktop/ui/src/main.js)<br>[app/desktop/tauri/src/main.rs](../../../../sources/ZHangZHengEric__Sage/app/desktop/tauri/src/main.rs)<br>[app/desktop/core/main.py](../../../../sources/ZHangZHengEric__Sage/app/desktop/core/main.py) |
| agentRuntime | 711 | [tests/sagents/utils/sandbox/test_bg_runner.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/utils/sandbox/test_bg_runner.py)<br>[tests/sagents/utils/sandbox/test_local_provider_path_permissions.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/utils/sandbox/test_local_provider_path_permissions.py)<br>[tests/sagents/utils/sandbox/test_passthrough_provider_path_permissions.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/utils/sandbox/test_passthrough_provider_path_permissions.py)<br>[tests/sagents/tool/test_mcp_connection_pool.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/tool/test_mcp_connection_pool.py)<br>[tests/sagents/tool/test_mcp_tool_schema_display.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/tool/test_mcp_tool_schema_display.py)<br>[tests/sagents/tool/test_tool_context_injection.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/tool/test_tool_context_injection.py)<br>[tests/sagents/tool/test_tool_error_format.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/tool/test_tool_error_format.py)<br>[tests/sagents/tool/test_tool_isolation.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/tool/test_tool_isolation.py) |
| mcp | 81 | [tests/sagents/tool/test_mcp_connection_pool.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/tool/test_mcp_connection_pool.py)<br>[tests/sagents/tool/test_mcp_tool_schema_display.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/tool/test_mcp_tool_schema_display.py)<br>[tests/common/services/test_mcp_service_registration.py](../../../../sources/ZHangZHengEric__Sage/tests/common/services/test_mcp_service_registration.py)<br>[sagents/tool/mcp_connection_pool.py](../../../../sources/ZHangZHengEric__Sage/sagents/tool/mcp_connection_pool.py)<br>[sagents/tool/mcp_proxy.py](../../../../sources/ZHangZHengEric__Sage/sagents/tool/mcp_proxy.py)<br>[sagents/tool/mcp_tool_base.py](../../../../sources/ZHangZHengEric__Sage/sagents/tool/mcp_tool_base.py)<br>[mcp_servers/run_all_mcp_server.sh](../../../../sources/ZHangZHengEric__Sage/mcp_servers/run_all_mcp_server.sh)<br>[mcp_servers/task_scheduler/__init__.py](../../../../sources/ZHangZHengEric__Sage/mcp_servers/task_scheduler/__init__.py) |
| retrieval | 208 | [tests/sagents/tool/impl/test_file_memory_backend.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/tool/impl/test_file_memory_backend.py)<br>[tests/sagents/tool/impl/test_memory_index_fts.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/tool/impl/test_memory_index_fts.py)<br>[tests/sagents/tool/impl/test_memory_tool.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/tool/impl/test_memory_tool.py)<br>[tests/sagents/context/test_session_memory_manager.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/context/test_session_memory_manager.py)<br>[tests/app/cli/test_doctor_memory_backends.py](../../../../sources/ZHangZHengEric__Sage/tests/app/cli/test_doctor_memory_backends.py)<br>[scripts/memory_search_benchmark.py](../../../../sources/ZHangZHengEric__Sage/scripts/memory_search_benchmark.py)<br>[scripts/memory_search_validate.py](../../../../sources/ZHangZHengEric__Sage/scripts/memory_search_validate.py)<br>[sagents/tool/impl/memory_index.py](../../../../sources/ZHangZHengEric__Sage/sagents/tool/impl/memory_index.py) |
| spec | 133 | [requirements.txt](../../../../sources/ZHangZHengEric__Sage/requirements.txt)<br>[tests/app/desktop/test_pyinstaller_spec.py](../../../../sources/ZHangZHengEric__Sage/tests/app/desktop/test_pyinstaller_spec.py)<br>[docs/zh/architecture/ARCHITECTURE_APP_DESKTOP.md](../../../../sources/ZHangZHengEric__Sage/docs/zh/architecture/ARCHITECTURE_APP_DESKTOP.md)<br>[docs/zh/architecture/ARCHITECTURE_APP_OTHERS.md](../../../../sources/ZHangZHengEric__Sage/docs/zh/architecture/ARCHITECTURE_APP_OTHERS.md)<br>[docs/zh/architecture/ARCHITECTURE_APP_SERVER.md](../../../../sources/ZHangZHengEric__Sage/docs/zh/architecture/ARCHITECTURE_APP_SERVER.md)<br>[docs/zh/architecture/ARCHITECTURE_SAGENTS_AGENT_FLOW.md](../../../../sources/ZHangZHengEric__Sage/docs/zh/architecture/ARCHITECTURE_SAGENTS_AGENT_FLOW.md)<br>[docs/zh/architecture/ARCHITECTURE_SAGENTS_OVERVIEW.md](../../../../sources/ZHangZHengEric__Sage/docs/zh/architecture/ARCHITECTURE_SAGENTS_OVERVIEW.md)<br>[docs/zh/architecture/ARCHITECTURE_SAGENTS_SANDBOX_OBS.md](../../../../sources/ZHangZHengEric__Sage/docs/zh/architecture/ARCHITECTURE_SAGENTS_SANDBOX_OBS.md) |
| eval | 180 | [tests/README.txt](../../../../sources/ZHangZHengEric__Sage/tests/README.txt)<br>[tests/sagents/test_agent_base_shell_reminder_tool_choice.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/test_agent_base_shell_reminder_tool_choice.py)<br>[tests/sagents/test_llm_stream_retry.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/test_llm_stream_retry.py)<br>[tests/sagents/test_sagents_run_stream_redact.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/test_sagents_run_stream_redact.py)<br>[tests/sagents/test_self_check_agent_paths.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/test_self_check_agent_paths.py)<br>[tests/sagents/utils/test_file_content_validator.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/utils/test_file_content_validator.py)<br>[tests/sagents/utils/test_llm_request_utils.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/utils/test_llm_request_utils.py)<br>[tests/sagents/utils/test_logger_file_logging.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/utils/test_logger_file_logging.py) |
| security | 52 | [tests/sagents/utils/sandbox/test_bg_runner.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/utils/sandbox/test_bg_runner.py)<br>[tests/sagents/utils/sandbox/test_local_provider_path_permissions.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/utils/sandbox/test_local_provider_path_permissions.py)<br>[tests/sagents/utils/sandbox/test_passthrough_provider_path_permissions.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/utils/sandbox/test_passthrough_provider_path_permissions.py)<br>[tests/app/server/core/test_config_security.py](../../../../sources/ZHangZHengEric__Sage/tests/app/server/core/test_config_security.py)<br>[tests/app/server/core/test_middleware_auth.py](../../../../sources/ZHangZHengEric__Sage/tests/app/server/core/test_middleware_auth.py)<br>[sagents/utils/sandbox/__init__.py](../../../../sources/ZHangZHengEric__Sage/sagents/utils/sandbox/__init__.py)<br>[sagents/utils/sandbox/_bg_runner.py](../../../../sources/ZHangZHengEric__Sage/sagents/utils/sandbox/_bg_runner.py)<br>[sagents/utils/sandbox/_stdout_echo.py](../../../../sources/ZHangZHengEric__Sage/sagents/utils/sandbox/_stdout_echo.py) |
| ci | 5 | [app/desktop/.gitlab-ci.yml](../../../../sources/ZHangZHengEric__Sage/app/desktop/.gitlab-ci.yml)<br>[.github/workflows/ci-tests.yml](../../../../sources/ZHangZHengEric__Sage/.github/workflows/ci-tests.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/ZHangZHengEric__Sage/.github/workflows/deploy-docs.yml)<br>[.github/workflows/docs.yml](../../../../sources/ZHangZHengEric__Sage/.github/workflows/docs.yml)<br>[.github/workflows/release-desktop.yml](../../../../sources/ZHangZHengEric__Sage/.github/workflows/release-desktop.yml) |
| container | 59 | [deploy/compose.sh](../../../../sources/ZHangZHengEric__Sage/deploy/compose.sh)<br>[deploy/docker-compose.observability.yml](../../../../sources/ZHangZHengEric__Sage/deploy/docker-compose.observability.yml)<br>[deploy/docker-compose.shared.yml](../../../../sources/ZHangZHengEric__Sage/deploy/docker-compose.shared.yml)<br>[deploy/README.md](../../../../sources/ZHangZHengEric__Sage/deploy/README.md)<br>[deploy/test/.env.example](../../../../sources/ZHangZHengEric__Sage/deploy/test/.env.example)<br>[deploy/test/docker-compose.yml](../../../../sources/ZHangZHengEric__Sage/deploy/test/docker-compose.yml)<br>[deploy/test/nginx/nginx.conf](../../../../sources/ZHangZHengEric__Sage/deploy/test/nginx/nginx.conf)<br>[deploy/prod/.env.example](../../../../sources/ZHangZHengEric__Sage/deploy/prod/.env.example) |
| instruction | 0 | 명확하지 않음 |
| docs | 132 | [README_CN.md](../../../../sources/ZHangZHengEric__Sage/README_CN.md)<br>[README.md](../../../../sources/ZHangZHengEric__Sage/README.md)<br>[tests/README.txt](../../../../sources/ZHangZHengEric__Sage/tests/README.txt)<br>[sagents/README.md](../../../../sources/ZHangZHengEric__Sage/sagents/README.md)<br>[sagents/retrieve_engine/README.md](../../../../sources/ZHangZHengEric__Sage/sagents/retrieve_engine/README.md)<br>[sagents/context/user_memory/README.md](../../../../sources/ZHangZHengEric__Sage/sagents/context/user_memory/README.md)<br>[examples/README.md](../../../../sources/ZHangZHengEric__Sage/examples/README.md)<br>[docs/_config.yml](../../../../sources/ZHangZHengEric__Sage/docs/_config.yml) |
| config | 15 | [pyproject.toml](../../../../sources/ZHangZHengEric__Sage/pyproject.toml)<br>[requirements.txt](../../../../sources/ZHangZHengEric__Sage/requirements.txt)<br>[app/wiki/package.json](../../../../sources/ZHangZHengEric__Sage/app/wiki/package.json)<br>[app/terminal/Cargo.lock](../../../../sources/ZHangZHengEric__Sage/app/terminal/Cargo.lock)<br>[app/terminal/Cargo.toml](../../../../sources/ZHangZHengEric__Sage/app/terminal/Cargo.toml)<br>[app/skills/social-push/package.json](../../../../sources/ZHangZHengEric__Sage/app/skills/social-push/package.json)<br>[app/skills/social-push/requirements.txt](../../../../sources/ZHangZHengEric__Sage/app/skills/social-push/requirements.txt)<br>[app/skills/slack-gif-creator/requirements.txt](../../../../sources/ZHangZHengEric__Sage/app/skills/slack-gif-creator/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 180 | [tests/README.txt](../../../../sources/ZHangZHengEric__Sage/tests/README.txt)<br>[tests/sagents/test_agent_base_shell_reminder_tool_choice.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/test_agent_base_shell_reminder_tool_choice.py)<br>[tests/sagents/test_llm_stream_retry.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/test_llm_stream_retry.py)<br>[tests/sagents/test_sagents_run_stream_redact.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/test_sagents_run_stream_redact.py)<br>[tests/sagents/test_self_check_agent_paths.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/test_self_check_agent_paths.py)<br>[tests/sagents/utils/test_file_content_validator.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/utils/test_file_content_validator.py) |
| CI workflow | 5 | [app/desktop/.gitlab-ci.yml](../../../../sources/ZHangZHengEric__Sage/app/desktop/.gitlab-ci.yml)<br>[.github/workflows/ci-tests.yml](../../../../sources/ZHangZHengEric__Sage/.github/workflows/ci-tests.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/ZHangZHengEric__Sage/.github/workflows/deploy-docs.yml)<br>[.github/workflows/docs.yml](../../../../sources/ZHangZHengEric__Sage/.github/workflows/docs.yml)<br>[.github/workflows/release-desktop.yml](../../../../sources/ZHangZHengEric__Sage/.github/workflows/release-desktop.yml) |
| 컨테이너/배포 | 59 | [deploy/compose.sh](../../../../sources/ZHangZHengEric__Sage/deploy/compose.sh)<br>[deploy/docker-compose.observability.yml](../../../../sources/ZHangZHengEric__Sage/deploy/docker-compose.observability.yml)<br>[deploy/docker-compose.shared.yml](../../../../sources/ZHangZHengEric__Sage/deploy/docker-compose.shared.yml)<br>[deploy/README.md](../../../../sources/ZHangZHengEric__Sage/deploy/README.md)<br>[deploy/test/.env.example](../../../../sources/ZHangZHengEric__Sage/deploy/test/.env.example)<br>[deploy/test/docker-compose.yml](../../../../sources/ZHangZHengEric__Sage/deploy/test/docker-compose.yml) |
| 보안/정책 | 52 | [tests/sagents/utils/sandbox/test_bg_runner.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/utils/sandbox/test_bg_runner.py)<br>[tests/sagents/utils/sandbox/test_local_provider_path_permissions.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/utils/sandbox/test_local_provider_path_permissions.py)<br>[tests/sagents/utils/sandbox/test_passthrough_provider_path_permissions.py](../../../../sources/ZHangZHengEric__Sage/tests/sagents/utils/sandbox/test_passthrough_provider_path_permissions.py)<br>[tests/app/server/core/test_config_security.py](../../../../sources/ZHangZHengEric__Sage/tests/app/server/core/test_config_security.py)<br>[tests/app/server/core/test_middleware_auth.py](../../../../sources/ZHangZHengEric__Sage/tests/app/server/core/test_middleware_auth.py)<br>[sagents/utils/sandbox/__init__.py](../../../../sources/ZHangZHengEric__Sage/sagents/utils/sandbox/__init__.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/sagents/tool/test_mcp_connection_pool.py`, `tests/sagents/tool/test_mcp_tool_schema_display.py`, `tests/common/services/test_mcp_service_registration.py`.
2. entrypoint를 따라 실행 흐름 확인: `app/terminal/src/main.rs`, `app/server/main.py`, `app/server/web/src/App.vue`.
3. agent/tool runtime 매핑: `tests/sagents/utils/sandbox/test_bg_runner.py`, `tests/sagents/utils/sandbox/test_local_provider_path_permissions.py`, `tests/sagents/utils/sandbox/test_passthrough_provider_path_permissions.py`.
4. retrieval/memory/indexing 확인: `tests/sagents/tool/impl/test_file_memory_backend.py`, `tests/sagents/tool/impl/test_memory_index_fts.py`, `tests/sagents/tool/impl/test_memory_tool.py`.
5. test/eval 파일로 동작 검증: `tests/README.txt`, `tests/sagents/test_agent_base_shell_reminder_tool_choice.py`, `tests/sagents/test_llm_stream_retry.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Multi Agent System Framework For Complex Tasks. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
