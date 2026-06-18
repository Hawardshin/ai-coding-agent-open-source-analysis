# Kiln-AI/Kiln Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Build, Evaluate, and Optimize AI Systems. Includes evals, RAG, agents, fine-tuning, synthetic data generation, dataset management, MCP, and more.

## 요약

- 조사 단위: `sources/Kiln-AI__Kiln` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,715 files, 288 directories, depth score 125, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=specs/projects/mcp_sessions/01_codebase_findings.md, specs/projects/mcp_sessions/02_design_report.md, specs/projects/mcp_sessions/03_refinement_general_session_id.md이고, 의존성 단서는 fastapi, pydantic, ollama, llama, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Kiln-AI/Kiln |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 4916 |
| Forks | 370 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/Kiln-AI__Kiln](../../../../sources/Kiln-AI__Kiln) |
| Existing report | [reports/global-trending/repositories/Kiln-AI__Kiln.md](../../../global-trending/repositories/Kiln-AI__Kiln.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1715 / 288 |
| Max observed depth | 12 |
| Top directories | .agents, .config, .github, app, libs, specs |
| Top extensions | .py: 603, .svelte: 319, .ts: 249, .json: 214, .md: 178, .svg: 40, .png: 23, (none): 20, .yml: 13, .sh: 12, .toml: 6, .txt: 5 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| libs/server | libs workspace | 72 |
| libs/core | libs workspace | 38 |
| .github | ci surface | 1 |
| app | top-level component | 1 |
| libs | source boundary | 1 |
| specs | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| serve-dev | Makefile | dev | make dev |
| utility | Makefile | ui | make ui |
| utility | Makefile | schema | make schema |
| utility | Makefile | annotations | make annotations |
| quality | Makefile | check | make check |
| utility | Makefile | package | make package |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | ollama, llama |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 8 | [libs/server/kiln_server/server.py](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/server.py)<br>[app/web_ui/tests/e2e/mock_provider/server.ts](../../../../sources/Kiln-AI__Kiln/app/web_ui/tests/e2e/mock_provider/server.ts)<br>[app/web_ui/tests/e2e/mock_kiln_server/server.ts](../../../../sources/Kiln-AI__Kiln/app/web_ui/tests/e2e/mock_kiln_server/server.ts)<br>[app/web_ui/src/app.css](../../../../sources/Kiln-AI__Kiln/app/web_ui/src/app.css)<br>[app/web_ui/src/app.d.ts](../../../../sources/Kiln-AI__Kiln/app/web_ui/src/app.d.ts)<br>[app/web_ui/src/app.html](../../../../sources/Kiln-AI__Kiln/app/web_ui/src/app.html)<br>[app/web_ui/src/index.test.ts](../../../../sources/Kiln-AI__Kiln/app/web_ui/src/index.test.ts)<br>[.config/wt/bin/web](../../../../sources/Kiln-AI__Kiln/.config/wt/bin/web) |
| agentRuntime | 337 | [AGENTS.md](../../../../sources/Kiln-AI__Kiln/AGENTS.md)<br>[specs/projects/agent_info_trim/architecture.md](../../../../sources/Kiln-AI__Kiln/specs/projects/agent_info_trim/architecture.md)<br>[specs/projects/agent_info_trim/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/agent_info_trim/functional_spec.md)<br>[specs/projects/agent_info_trim/implementation_plan.md](../../../../sources/Kiln-AI__Kiln/specs/projects/agent_info_trim/implementation_plan.md)<br>[specs/projects/agent_info_trim/project_overview.md](../../../../sources/Kiln-AI__Kiln/specs/projects/agent_info_trim/project_overview.md)<br>[specs/projects/agent_info_trim/phase_plans/phase_1.md](../../../../sources/Kiln-AI__Kiln/specs/projects/agent_info_trim/phase_plans/phase_1.md)<br>[specs/projects/agent_info_trim/phase_plans/phase_2.md](../../../../sources/Kiln-AI__Kiln/specs/projects/agent_info_trim/phase_plans/phase_2.md)<br>[specs/projects/agent_approvals/architecture.md](../../../../sources/Kiln-AI__Kiln/specs/projects/agent_approvals/architecture.md) |
| mcp | 38 | [specs/projects/mcp_sessions/01_codebase_findings.md](../../../../sources/Kiln-AI__Kiln/specs/projects/mcp_sessions/01_codebase_findings.md)<br>[specs/projects/mcp_sessions/02_design_report.md](../../../../sources/Kiln-AI__Kiln/specs/projects/mcp_sessions/02_design_report.md)<br>[specs/projects/mcp_sessions/03_refinement_general_session_id.md](../../../../sources/Kiln-AI__Kiln/specs/projects/mcp_sessions/03_refinement_general_session_id.md)<br>[specs/projects/mcp_sessions/04_refinement_no_ephemeral_fallback.md](../../../../sources/Kiln-AI__Kiln/specs/projects/mcp_sessions/04_refinement_no_ephemeral_fallback.md)<br>[specs/projects/mcp_sessions/implementation_plan.md](../../../../sources/Kiln-AI__Kiln/specs/projects/mcp_sessions/implementation_plan.md)<br>[libs/server/kiln_server/utils/agent_checks/annotations/patch_api_projects_project_id_edit_local_mcp_tool_server_id.json](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/annotations/patch_api_projects_project_id_edit_local_mcp_tool_server_id.json)<br>[libs/server/kiln_server/utils/agent_checks/annotations/patch_api_projects_project_id_edit_remote_mcp_tool_server_id.json](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/annotations/patch_api_projects_project_id_edit_remote_mcp_tool_server_id.json)<br>[libs/server/kiln_server/utils/agent_checks/annotations/post_api_projects_project_id_connect_local_mcp.json](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/annotations/post_api_projects_project_id_connect_local_mcp.json) |
| retrieval | 92 | [libs/server/kiln_server/utils/agent_checks/annotations/get_api_available_embedding_models.json](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/annotations/get_api_available_embedding_models.json)<br>[libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_embedding_configs_embedding_config_id.json](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_embedding_configs_embedding_config_id.json)<br>[libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_embedding_configs.json](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_embedding_configs.json)<br>[libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_rag_configs_rag_config_id_run.json](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_rag_configs_rag_config_id_run.json)<br>[libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_rag_configs_rag_config_id.json](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_rag_configs_rag_config_id.json)<br>[libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_rag_configs.json](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_rag_configs.json)<br>[libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_vector_store_configs.json](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_vector_store_configs.json)<br>[libs/server/kiln_server/utils/agent_checks/annotations/get_api_providers_embedding_models.json](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/annotations/get_api_providers_embedding_models.json) |
| spec | 113 | [specs/projects/timezone_aware_datetimes/architecture.md](../../../../sources/Kiln-AI__Kiln/specs/projects/timezone_aware_datetimes/architecture.md)<br>[specs/projects/timezone_aware_datetimes/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/timezone_aware_datetimes/functional_spec.md)<br>[specs/projects/templates/architecture.md](../../../../sources/Kiln-AI__Kiln/specs/projects/templates/architecture.md)<br>[specs/projects/templates/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/templates/functional_spec.md)<br>[specs/projects/task-selector-redesign/architecture.md](../../../../sources/Kiln-AI__Kiln/specs/projects/task-selector-redesign/architecture.md)<br>[specs/projects/task-selector-redesign/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/task-selector-redesign/functional_spec.md)<br>[specs/projects/task-selector-redesign/ui_design.md](../../../../sources/Kiln-AI__Kiln/specs/projects/task-selector-redesign/ui_design.md)<br>[specs/projects/sse_cancellable_response/architecture.md](../../../../sources/Kiln-AI__Kiln/specs/projects/sse_cancellable_response/architecture.md) |
| eval | 420 | [specs/projects/timezone_aware_datetimes/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/timezone_aware_datetimes/functional_spec.md)<br>[specs/projects/templates/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/templates/functional_spec.md)<br>[specs/projects/task-selector-redesign/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/task-selector-redesign/functional_spec.md)<br>[specs/projects/sse_cancellable_response/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/sse_cancellable_response/functional_spec.md)<br>[specs/projects/root_cleanup/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/root_cleanup/functional_spec.md)<br>[specs/projects/github-oauth/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/functional_spec.md)<br>[specs/projects/git_sync_write_locks/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/git_sync_write_locks/functional_spec.md)<br>[specs/projects/git_integration_test_suite/architecture.md](../../../../sources/Kiln-AI__Kiln/specs/projects/git_integration_test_suite/architecture.md) |
| security | 36 | [specs/projects/timezone_aware_datetimes/audit.md](../../../../sources/Kiln-AI__Kiln/specs/projects/timezone_aware_datetimes/audit.md)<br>[specs/projects/github-oauth/architecture.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/architecture.md)<br>[specs/projects/github-oauth/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/functional_spec.md)<br>[specs/projects/github-oauth/implementation_plan.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/implementation_plan.md)<br>[specs/projects/github-oauth/project_overview.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/project_overview.md)<br>[specs/projects/github-oauth/phase_plans/phase_1.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/phase_plans/phase_1.md)<br>[specs/projects/github-oauth/phase_plans/phase_2.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/phase_plans/phase_2.md)<br>[specs/projects/github-oauth/phase_plans/phase_3.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/phase_plans/phase_3.md) |
| ci | 12 | [.github/workflows/build_and_test.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/build_and_test.yml)<br>[.github/workflows/build_desktop.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/build_desktop.yml)<br>[.github/workflows/build_docs.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/build_docs.yml)<br>[.github/workflows/check_api_bindings.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/check_api_bindings.yml)<br>[.github/workflows/coverage.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/coverage.yml)<br>[.github/workflows/debug_detector.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/debug_detector.yml)<br>[.github/workflows/format_and_lint.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/format_and_lint.yml)<br>[.github/workflows/playwright.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/playwright.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/Kiln-AI__Kiln/AGENTS.md) |
| docs | 62 | [README.md](../../../../sources/Kiln-AI__Kiln/README.md)<br>[libs/server/README.md](../../../../sources/Kiln-AI__Kiln/libs/server/README.md)<br>[libs/server/kiln_server/utils/agent_checks/README.md](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/utils/agent_checks/README.md)<br>[libs/server/kiln_server/mcp/README.md](../../../../sources/Kiln-AI__Kiln/libs/server/kiln_server/mcp/README.md)<br>[libs/core/README.md](../../../../sources/Kiln-AI__Kiln/libs/core/README.md)<br>[libs/core/tests/assets/README.md](../../../../sources/Kiln-AI__Kiln/libs/core/tests/assets/README.md)<br>`app/web_ui/src/routes/(app)/docs/rag_configs/[project_id]/+page.svelte`<br>`app/web_ui/src/routes/(app)/docs/rag_configs/[project_id]/+page.ts` |
| config | 10 | [Makefile](../../../../sources/Kiln-AI__Kiln/Makefile)<br>[pyproject.toml](../../../../sources/Kiln-AI__Kiln/pyproject.toml)<br>[uv.lock](../../../../sources/Kiln-AI__Kiln/uv.lock)<br>[libs/server/pyproject.toml](../../../../sources/Kiln-AI__Kiln/libs/server/pyproject.toml)<br>[libs/server/uv.lock](../../../../sources/Kiln-AI__Kiln/libs/server/uv.lock)<br>[libs/core/pyproject.toml](../../../../sources/Kiln-AI__Kiln/libs/core/pyproject.toml)<br>[libs/core/uv.lock](../../../../sources/Kiln-AI__Kiln/libs/core/uv.lock)<br>[app/web_ui/package.json](../../../../sources/Kiln-AI__Kiln/app/web_ui/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 420 | [specs/projects/timezone_aware_datetimes/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/timezone_aware_datetimes/functional_spec.md)<br>[specs/projects/templates/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/templates/functional_spec.md)<br>[specs/projects/task-selector-redesign/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/task-selector-redesign/functional_spec.md)<br>[specs/projects/sse_cancellable_response/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/sse_cancellable_response/functional_spec.md)<br>[specs/projects/root_cleanup/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/root_cleanup/functional_spec.md)<br>[specs/projects/github-oauth/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/functional_spec.md) |
| CI workflows | 12 | [.github/workflows/build_and_test.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/build_and_test.yml)<br>[.github/workflows/build_desktop.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/build_desktop.yml)<br>[.github/workflows/build_docs.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/build_docs.yml)<br>[.github/workflows/check_api_bindings.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/check_api_bindings.yml)<br>[.github/workflows/coverage.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/coverage.yml)<br>[.github/workflows/debug_detector.yml](../../../../sources/Kiln-AI__Kiln/.github/workflows/debug_detector.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 36 | [specs/projects/timezone_aware_datetimes/audit.md](../../../../sources/Kiln-AI__Kiln/specs/projects/timezone_aware_datetimes/audit.md)<br>[specs/projects/github-oauth/architecture.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/architecture.md)<br>[specs/projects/github-oauth/functional_spec.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/functional_spec.md)<br>[specs/projects/github-oauth/implementation_plan.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/implementation_plan.md)<br>[specs/projects/github-oauth/project_overview.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/project_overview.md)<br>[specs/projects/github-oauth/phase_plans/phase_1.md](../../../../sources/Kiln-AI__Kiln/specs/projects/github-oauth/phase_plans/phase_1.md) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/Kiln-AI__Kiln/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `specs/projects/mcp_sessions/01_codebase_findings.md`, `specs/projects/mcp_sessions/02_design_report.md`, `specs/projects/mcp_sessions/03_refinement_general_session_id.md`.
2. Trace execution through entrypoints: `libs/server/kiln_server/server.py`, `app/web_ui/tests/e2e/mock_provider/server.ts`, `app/web_ui/tests/e2e/mock_kiln_server/server.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `specs/projects/agent_info_trim/architecture.md`, `specs/projects/agent_info_trim/functional_spec.md`.
4. Inspect retrieval/memory/indexing through: `libs/server/kiln_server/utils/agent_checks/annotations/get_api_available_embedding_models.json`, `libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_embedding_configs_embedding_config_id.json`, `libs/server/kiln_server/utils/agent_checks/annotations/get_api_projects_project_id_embedding_configs.json`.
5. Verify behavior through test/eval files: `specs/projects/timezone_aware_datetimes/functional_spec.md`, `specs/projects/templates/functional_spec.md`, `specs/projects/task-selector-redesign/functional_spec.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Build, Evaluate, and Optimize AI Systems. Includes evals, RAG, agents, fine tuning, synthetic data generation, dataset m. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, AGENTS.md, fastapi이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
