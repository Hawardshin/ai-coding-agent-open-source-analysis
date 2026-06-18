# Kiln-AI/Kiln 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Build, Evaluate, and Optimize AI Systems. Includes evals, RAG, agents, fine-tuning, synthetic data generation, dataset management, MCP, and more.

## 요약

- 조사 단위: `sources/Kiln-AI__Kiln` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,715 files, 288 directories, depth score 119, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=specs/projects/mcp_sessions/01_codebase_findings.md, specs/projects/mcp_sessions/02_design_report.md, specs/projects/mcp_sessions/03_refinement_general_session_id.md이고, 의존성 단서는 fastapi, pydantic, ollama, llama, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Kiln-AI/Kiln |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 4916 |
| Forks | 370 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Kiln-AI__Kiln](../../../../sources/Kiln-AI__Kiln) |
| 기존 보고서 | [reports/global-trending/repositories/Kiln-AI__Kiln.md](../../../global-trending/repositories/Kiln-AI__Kiln.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1715 / 288 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .agents, .config, .github, app, libs, specs |
| 상위 확장자 | .py: 603, .svelte: 319, .ts: 249, .json: 214, .md: 178, .svg: 40, .png: 23, (none): 20, .yml: 13, .sh: 12, .toml: 6, .txt: 5 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| libs/server | libs workspace | 72 |
| libs/core | libs workspace | 38 |
| .github | ci surface | 1 |
| app | top-level component | 1 |
| libs | source boundary | 1 |
| specs | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| serve-dev | Makefile | dev | make dev |
| utility | Makefile | ui | make ui |
| utility | Makefile | schema | make schema |
| utility | Makefile | annotations | make annotations |
| quality | Makefile | check | make check |
| utility | Makefile | package | make package |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | ollama, llama |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [specs/projects/mcp_sessions/01_codebase_findings.md](../../../../sources/Kiln-AI__Kiln/specs/projects/mcp_sessions/01_codebase_findings.md) | mcp signal |
| mcp | [specs/projects/mcp_sessions/02_design_report.md](../../../../sources/Kiln-AI__Kiln/specs/projects/mcp_sessions/02_design_report.md) | mcp signal |
| mcp | [specs/projects/mcp_sessions/03_refinement_general_session_id.md](../../../../sources/Kiln-AI__Kiln/specs/projects/mcp_sessions/03_refinement_general_session_id.md) | mcp signal |
| mcp | [specs/projects/mcp_sessions/04_refinement_no_ephemeral_fallback.md](../../../../sources/Kiln-AI__Kiln/specs/projects/mcp_sessions/04_refinement_no_ephemeral_fallback.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/Kiln-AI__Kiln/AGENTS.md) | agentRuntime signal |
| agentRuntime | [specs/projects/agent_info_trim/architecture.md](../../../../sources/Kiln-AI__Kiln/specs/projects/agent_info_trim/architecture.md) | agentRuntime signal |
| agentRuntime | [specs/projects/agent_info_trim/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/agent_info_trim/functional_spec.md) | agentRuntime signal |
| agentRuntime | [specs/projects/agent_info_trim/implementation_plan.md](../../../../sources/Kiln-AI__Kiln/specs/projects/agent_info_trim/implementation_plan.md) | agentRuntime signal |
| entrypoints | [libs/server/kiln_server/server.py](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/server.py) | entrypoints signal |
| entrypoints | [app/web_ui/tests/e2e/mock_provider/server.ts](../../../../sources/Kiln-AI__Kiln/app/web_ui/tests/e2e/mock_provider/server.ts) | entrypoints signal |
| entrypoints | [app/web_ui/tests/e2e/mock_kiln_server/server.ts](../../../../sources/Kiln-AI__Kiln/app/web_ui/tests/e2e/mock_kiln_server/server.ts) | entrypoints signal |
| entrypoints | [app/web_ui/src/app.css](../../../../sources/Kiln-AI__Kiln/app/web_ui/src/app.css) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 8 | [libs/server/kiln_server/server.py](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/server.py)<br>[app/web_ui/tests/e2e/mock_provider/server.ts](../../../../sources/Kiln-AI__Kiln/app/web_ui/tests/e2e/mock_provider/server.ts)<br>[app/web_ui/tests/e2e/mock_kiln_server/server.ts](../../../../sources/Kiln-AI__Kiln/app/web_ui/tests/e2e/mock_kiln_server/server.ts)<br>[app/web_ui/src/app.css](../../../../sources/Kiln-AI__Kiln/app/web_ui/src/app.css)<br>[app/web_ui/src/app.d.ts](../../../../sources/Kiln-AI__Kiln/app/web_ui/src/app.d.ts)<br>[app/web_ui/src/app.html](../../../../sources/Kiln-AI__Kiln/app/web_ui/src/app.html)<br>[app/web_ui/src/index.test.ts](../../../../sources/Kiln-AI__Kiln/app/web_ui/src/index.test.ts)<br>[.config/wt/bin/web](../../../../sources/Kiln-AI__Kiln/.config/wt/bin/web) |
| agentRuntime | 337 | [AGENTS.md](../../../../sources/Kiln-AI__Kiln/AGENTS.md)<br>[specs/projects/agent_info_trim/architecture.md](../../../../sources/Kiln-AI__Kiln/specs/projects/agent_info_trim/architecture.md)<br>[specs/projects/agent_info_trim/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/agent_info_trim/functional_spec.md)<br>[specs/projects/agent_info_trim/implementation_plan.md](../../../../sources/Kiln-AI__Kiln/specs/projects/agent_info_trim/implementation_plan.md)<br>[specs/projects/agent_info_trim/project_overview.md](../../../../sources/Kiln-AI__Kiln/specs/projects/agent_info_trim/project_overview.md)<br>[specs/projects/agent_info_trim/phase_plans/phase_1.md](../../../../sources/Kiln-AI__Kiln/specs/projects/agent_info_trim/phase_plans/phase_1.md)<br>[specs/projects/agent_info_trim/phase_plans/phase_2.md](../../../../sources/Kiln-AI__Kiln/specs/projects/agent_info_trim/phase_plans/phase_2.md)<br>[specs/projects/agent_approvals/architecture.md](../../../../sources/Kiln-AI__Kiln/specs/projects/agent_approvals/architecture.md) |
| mcp | 38 | [specs/projects/mcp_sessions/01_codebase_findings.md](../../../../sources/Kiln-AI__Kiln/specs/projects/mcp_sessions/01_codebase_findings.md)<br>[specs/projects/mcp_sessions/02_design_report.md](../../../../sources/Kiln-AI__Kiln/specs/projects/mcp_sessions/02_design_report.md)<br>[specs/projects/mcp_sessions/03_refinement_general_session_id.md](../../../../sources/Kiln-AI__Kiln/specs/projects/mcp_sessions/03_refinement_general_session_id.md)<br>[specs/projects/mcp_sessions/04_refinement_no_ephemeral_fallback.md](../../../../sources/Kiln-AI__Kiln/specs/projects/mcp_sessions/04_refinement_no_ephemeral_fallback.md)<br>[specs/projects/mcp_sessions/implementation_plan.md](../../../../sources/Kiln-AI__Kiln/specs/projects/mcp_sessions/implementation_plan.md)<br>[libs/server/kiln_server/utils/agent_checks/annotations/patch_api_projects_project_id_edit_local_mcp_tool_server_id.json](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/annotations/patch_api_projects_project_id_edit_local_mcp_tool_server_id.json)<br>[libs/server/kiln_server/utils/agent_checks/annotations/patch_api_projects_project_id_edit_remote_mcp_tool_server_id.json](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/annotations/patch_api_projects_project_id_edit_remote_mcp_tool_server_id.json)<br>[libs/server/kiln_server/utils/agent_checks/annotations/post_api_projects_project_id_connect_local_mcp.json](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/annotations/post_api_projects_project_id_connect_local_mcp.json) |
| retrieval | 92 | [libs/server/kiln_server/utils/agent_checks/annotations/get_api_available_embedding_models.json](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/annotations/get_api_available_embedding_models.json)<br>[libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_embedding_configs_embedding_config_id.json](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_embedding_configs_embedding_config_id.json)<br>[libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_embedding_configs.json](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_embedding_configs.json)<br>[libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_rag_configs_rag_config_id_run.json](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_rag_configs_rag_config_id_run.json)<br>[libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_rag_configs_rag_config_id.json](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_rag_configs_rag_config_id.json)<br>[libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_rag_configs.json](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_rag_configs.json)<br>[libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_vector_store_configs.json](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_vector_store_configs.json)<br>[libs/server/kiln_server/utils/agent_checks/annotations/get_api_providers_embedding_models.json](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/annotations/get_api_providers_embedding_models.json) |
| spec | 113 | [specs/projects/timezone_aware_datetimes/architecture.md](../../../../sources/Kiln-AI__Kiln/specs/projects/timezone_aware_datetimes/architecture.md)<br>[specs/projects/timezone_aware_datetimes/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/timezone_aware_datetimes/functional_spec.md)<br>[specs/projects/templates/architecture.md](../../../../sources/Kiln-AI__Kiln/specs/projects/templates/architecture.md)<br>[specs/projects/templates/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/templates/functional_spec.md)<br>[specs/projects/task-selector-redesign/architecture.md](../../../../sources/Kiln-AI__Kiln/specs/projects/task-selector-redesign/architecture.md)<br>[specs/projects/task-selector-redesign/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/task-selector-redesign/functional_spec.md)<br>[specs/projects/task-selector-redesign/ui_design.md](../../../../sources/Kiln-AI__Kiln/specs/projects/task-selector-redesign/ui_design.md)<br>[specs/projects/sse_cancellable_response/architecture.md](../../../../sources/Kiln-AI__Kiln/specs/projects/sse_cancellable_response/architecture.md) |
| eval | 420 | [specs/projects/timezone_aware_datetimes/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/timezone_aware_datetimes/functional_spec.md)<br>[specs/projects/templates/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/templates/functional_spec.md)<br>[specs/projects/task-selector-redesign/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/task-selector-redesign/functional_spec.md)<br>[specs/projects/sse_cancellable_response/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/sse_cancellable_response/functional_spec.md)<br>[specs/projects/root_cleanup/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/root_cleanup/functional_spec.md)<br>[specs/projects/github-oauth/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/functional_spec.md)<br>[specs/projects/git_sync_write_locks/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/git_sync_write_locks/functional_spec.md)<br>[specs/projects/git_integration_test_suite/architecture.md](../../../../sources/Kiln-AI__Kiln/specs/projects/git_integration_test_suite/architecture.md) |
| security | 36 | [specs/projects/timezone_aware_datetimes/audit.md](../../../../sources/Kiln-AI__Kiln/specs/projects/timezone_aware_datetimes/audit.md)<br>[specs/projects/github-oauth/architecture.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/architecture.md)<br>[specs/projects/github-oauth/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/functional_spec.md)<br>[specs/projects/github-oauth/implementation_plan.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/implementation_plan.md)<br>[specs/projects/github-oauth/project_overview.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/project_overview.md)<br>[specs/projects/github-oauth/phase_plans/phase_1.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/phase_plans/phase_1.md)<br>[specs/projects/github-oauth/phase_plans/phase_2.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/phase_plans/phase_2.md)<br>[specs/projects/github-oauth/phase_plans/phase_3.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/phase_plans/phase_3.md) |
| ci | 12 | [.github/workflows/build_and_test.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/build_and_test.yml)<br>[.github/workflows/build_desktop.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/build_desktop.yml)<br>[.github/workflows/build_docs.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/build_docs.yml)<br>[.github/workflows/check_api_bindings.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/check_api_bindings.yml)<br>[.github/workflows/coverage.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/coverage.yml)<br>[.github/workflows/debug_detector.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/debug_detector.yml)<br>[.github/workflows/format_and_lint.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/format_and_lint.yml)<br>[.github/workflows/playwright.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/playwright.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/Kiln-AI__Kiln/AGENTS.md) |
| docs | 62 | [README.md](../../../../sources/Kiln-AI__Kiln/README.md)<br>[libs/server/README.md](../../../../sources/Kiln-AI__Kiln/libs/server/README.md)<br>[libs/server/kiln_server/utils/agent_checks/README.md](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/README.md)<br>[libs/server/kiln_server/mcp/README.md](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/mcp/README.md)<br>[libs/core/README.md](../../../../sources/Kiln-AI__Kiln/libs/core/README.md)<br>[libs/core/tests/assets/README.md](../../../../sources/Kiln-AI__Kiln/libs/core/tests/assets/README.md)<br>`app/web_ui/src/routes/(app)/docs/rag_configs/[project_id]/+page.svelte`<br>`app/web_ui/src/routes/(app)/docs/rag_configs/[project_id]/+page.ts` |
| config | 10 | [Makefile](../../../../sources/Kiln-AI__Kiln/Makefile)<br>[pyproject.toml](../../../../sources/Kiln-AI__Kiln/pyproject.toml)<br>[uv.lock](../../../../sources/Kiln-AI__Kiln/uv.lock)<br>[libs/server/pyproject.toml](../../../../sources/Kiln-AI__Kiln/libs/server/pyproject.toml)<br>[libs/server/uv.lock](../../../../sources/Kiln-AI__Kiln/libs/server/uv.lock)<br>[libs/core/pyproject.toml](../../../../sources/Kiln-AI__Kiln/libs/core/pyproject.toml)<br>[libs/core/uv.lock](../../../../sources/Kiln-AI__Kiln/libs/core/uv.lock)<br>[app/web_ui/package.json](../../../../sources/Kiln-AI__Kiln/app/web_ui/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 420 | [specs/projects/timezone_aware_datetimes/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/timezone_aware_datetimes/functional_spec.md)<br>[specs/projects/templates/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/templates/functional_spec.md)<br>[specs/projects/task-selector-redesign/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/task-selector-redesign/functional_spec.md)<br>[specs/projects/sse_cancellable_response/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/sse_cancellable_response/functional_spec.md)<br>[specs/projects/root_cleanup/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/root_cleanup/functional_spec.md)<br>[specs/projects/github-oauth/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/functional_spec.md) |
| CI workflow | 12 | [.github/workflows/build_and_test.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/build_and_test.yml)<br>[.github/workflows/build_desktop.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/build_desktop.yml)<br>[.github/workflows/build_docs.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/build_docs.yml)<br>[.github/workflows/check_api_bindings.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/check_api_bindings.yml)<br>[.github/workflows/coverage.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/coverage.yml)<br>[.github/workflows/debug_detector.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/debug_detector.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 36 | [specs/projects/timezone_aware_datetimes/audit.md](../../../../sources/Kiln-AI__Kiln/specs/projects/timezone_aware_datetimes/audit.md)<br>[specs/projects/github-oauth/architecture.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/architecture.md)<br>[specs/projects/github-oauth/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/functional_spec.md)<br>[specs/projects/github-oauth/implementation_plan.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/implementation_plan.md)<br>[specs/projects/github-oauth/project_overview.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/project_overview.md)<br>[specs/projects/github-oauth/phase_plans/phase_1.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/phase_plans/phase_1.md) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/Kiln-AI__Kiln/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `specs/projects/mcp_sessions/01_codebase_findings.md`, `specs/projects/mcp_sessions/02_design_report.md`, `specs/projects/mcp_sessions/03_refinement_general_session_id.md`.
2. entrypoint를 따라 실행 흐름 확인: `libs/server/kiln_server/server.py`, `app/web_ui/tests/e2e/mock_provider/server.ts`, `app/web_ui/tests/e2e/mock_kiln_server/server.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `specs/projects/agent_info_trim/architecture.md`, `specs/projects/agent_info_trim/functional_spec.md`.
4. retrieval/memory/indexing 확인: `libs/server/kiln_server/utils/agent_checks/annotations/get_api_available_embedding_models.json`, `libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_embedding_configs_embedding_config_id.json`, `libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_embedding_configs.json`.
5. test/eval 파일로 동작 검증: `specs/projects/timezone_aware_datetimes/functional_spec.md`, `specs/projects/templates/functional_spec.md`, `specs/projects/task-selector-redesign/functional_spec.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Build, Evaluate, and Optimize AI Systems. Includes evals, RAG, agents, fine tuning, synthetic data generation, dataset m. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, AGENTS.md, fastapi이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
