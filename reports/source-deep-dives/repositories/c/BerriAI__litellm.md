# BerriAI/litellm Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 6958 files, 1693 directories.

## 요약

- 조사 단위: `sources/BerriAI__litellm` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 6,958 files, 1,693 directories, depth score 138, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp_servers.json, ui/litellm-dashboard/src/components/mcp_hub_table_columns.tsx, ui/litellm-dashboard/src/components/mcp_tools/ByokCredentialModal.tsx이고, 의존성 단서는 openai, anthropic, claude, mcp, langchain, langgraph, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | BerriAI/litellm |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/BerriAI__litellm](../../../../sources/BerriAI__litellm) |
| Existing report | [reports/clone-structures/BerriAI__litellm.md](../../../clone-structures/BerriAI__litellm.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 6958 / 1693 |
| Max observed depth | 10 |
| Top directories | .circleci, .devcontainer, .githooks, .github, .semgrep, backend, ci_cd, cookbook, db_scripts, deploy, docker, docs, enterprise, gateway, helm, litellm, litellm-proxy-extras, migrations, packaging, scripts |
| Top extensions | .py: 4346, .tsx: 876, .ts: 303, .yaml: 186, .svg: 156, .sql: 130, .json: 128, .txt: 126, .md: 119, .js: 113, .png: 101, .yml: 53 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 17 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| ci_cd | ci surface | 1 |
| cookbook | top-level component | 1 |
| db_scripts | top-level component | 1 |
| deploy | deployment surface | 1 |
| docker | documentation surface | 1 |
| docs | documentation surface | 1 |
| enterprise | top-level component | 1 |
| gateway | top-level component | 1 |
| helm | deployment surface | 1 |
| litellm | top-level component | 1 |
| litellm-proxy-extras | top-level component | 1 |
| migrations | top-level component | 1 |
| packaging | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | info | make info |
| serve-dev | Makefile | install-dev | make install-dev |
| serve-dev | Makefile | install-proxy-dev | make install-proxy-dev |
| serve-dev | Makefile | install-dev-ci | make install-dev-ci |
| serve-dev | Makefile | install-proxy-dev-ci | make install-proxy-dev-ci |
| test | Makefile | install-test-deps | make install-test-deps |
| test | Makefile | install-helm-unittest | make install-helm-unittest |
| utility | Makefile | install-hooks | make install-hooks |
| quality | Makefile | format | make format |
| quality | Makefile | format-check | make format-check |
| quality | Makefile | lint-ruff | make lint-ruff |
| quality | Makefile | lint-format-changed | make lint-format-changed |
| serve-dev | Makefile | lint-ruff-dev | make lint-ruff-dev |
| serve-dev | Makefile | lint-ruff-FULL-dev | make lint-ruff-FULL-dev |
| quality | Makefile | lint-mypy | make lint-mypy |
| quality | Makefile | lint-black | make lint-black |
| quality | Makefile | check-circular-imports | make check-circular-imports |
| quality | Makefile | check-import-safety | make check-import-safety |
| utility | pyproject.toml | litellm | litellm |
| utility | pyproject.toml | lite | lite |
| utility | pyproject.toml | litellm-proxy | litellm-proxy |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic, claude |
| agentProtocols | mcp |
| agentFrameworks | langchain, langgraph |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | fastapi, react |
| developerSurface | click |
| observability | opentelemetry, prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [mcp_servers.json](../../../../sources/BerriAI__litellm/mcp_servers.json) | mcp signal |
| mcp | [ui/litellm-dashboard/src/components/mcp_hub_table_columns.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/mcp_hub_table_columns.tsx) | mcp signal |
| mcp | [ui/litellm-dashboard/src/components/mcp_tools/ByokCredentialModal.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/mcp_tools/ByokCredentialModal.tsx) | mcp signal |
| mcp | [ui/litellm-dashboard/src/components/mcp_tools/create_mcp_server.test.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/mcp_tools/create_mcp_server.test.tsx) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/BerriAI__litellm/AGENTS.md) | agentRuntime signal |
| agentRuntime | [ui/litellm-dashboard/src/hooks/mcpOAuthUtils.ts](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/hooks/mcpOAuthUtils.ts) | agentRuntime signal |
| agentRuntime | [ui/litellm-dashboard/src/hooks/use-safe-layout-effect.ts](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/hooks/use-safe-layout-effect.ts) | agentRuntime signal |
| agentRuntime | [ui/litellm-dashboard/src/hooks/useMcpOAuthFlow.test.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/hooks/useMcpOAuthFlow.test.tsx) | agentRuntime signal |
| entrypoints | [ui/litellm-dashboard/e2e_tests/fixtures/mock_llm_server/server.py](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/e2e_tests/fixtures/mock_llm_server/server.py) | entrypoints signal |
| entrypoints | [tests/proxy_unit_tests/test_model_response_typing/server.py](../../../../sources/BerriAI__litellm/tests/proxy_unit_tests/test_model_response_typing/server.py) | entrypoints signal |
| entrypoints | [tests/local_testing/test_model_response_typing/server.py](../../../../sources/BerriAI__litellm/tests/local_testing/test_model_response_typing/server.py) | entrypoints signal |
| entrypoints | [litellm/main.py](../../../../sources/BerriAI__litellm/litellm/main.py) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 48 | [ui/litellm-dashboard/e2e_tests/fixtures/mock_llm_server/server.py](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/e2e_tests/fixtures/mock_llm_server/server.py)<br>[tests/proxy_unit_tests/test_model_response_typing/server.py](../../../../sources/BerriAI__litellm/tests/proxy_unit_tests/test_model_response_typing/server.py)<br>[tests/local_testing/test_model_response_typing/server.py](../../../../sources/BerriAI__litellm/tests/local_testing/test_model_response_typing/server.py)<br>[litellm/main.py](../../../../sources/BerriAI__litellm/litellm/main.py)<br>[litellm/videos/main.py](../../../../sources/BerriAI__litellm/litellm/videos/main.py)<br>[litellm/vector_stores/main.py](../../../../sources/BerriAI__litellm/litellm/vector_stores/main.py)<br>[litellm/vector_store_files/main.py](../../../../sources/BerriAI__litellm/litellm/vector_store_files/main.py)<br>[litellm/types/videos/main.py](../../../../sources/BerriAI__litellm/litellm/types/videos/main.py) |
| agentRuntime | 321 | [AGENTS.md](../../../../sources/BerriAI__litellm/AGENTS.md)<br>[ui/litellm-dashboard/src/hooks/mcpOAuthUtils.ts](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/hooks/mcpOAuthUtils.ts)<br>[ui/litellm-dashboard/src/hooks/use-safe-layout-effect.ts](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/hooks/use-safe-layout-effect.ts)<br>[ui/litellm-dashboard/src/hooks/useMcpOAuthFlow.test.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/hooks/useMcpOAuthFlow.test.tsx)<br>[ui/litellm-dashboard/src/hooks/useMcpOAuthFlow.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/hooks/useMcpOAuthFlow.tsx)<br>[ui/litellm-dashboard/src/hooks/useTestMCPConnection.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/hooks/useTestMCPConnection.tsx)<br>[ui/litellm-dashboard/src/hooks/useToolsOAuthFlow.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/hooks/useToolsOAuthFlow.tsx)<br>[ui/litellm-dashboard/src/hooks/useUserMcpOAuthFlow.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/hooks/useUserMcpOAuthFlow.tsx) |
| mcp | 228 | [mcp_servers.json](../../../../sources/BerriAI__litellm/mcp_servers.json)<br>[ui/litellm-dashboard/src/components/mcp_hub_table_columns.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/mcp_hub_table_columns.tsx)<br>[ui/litellm-dashboard/src/components/mcp_tools/ByokCredentialModal.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/mcp_tools/ByokCredentialModal.tsx)<br>[ui/litellm-dashboard/src/components/mcp_tools/create_mcp_server.test.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/mcp_tools/create_mcp_server.test.tsx)<br>[ui/litellm-dashboard/src/components/mcp_tools/create_mcp_server.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/mcp_tools/create_mcp_server.tsx)<br>[ui/litellm-dashboard/src/components/mcp_tools/EnvVarsSection.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/mcp_tools/EnvVarsSection.tsx)<br>[ui/litellm-dashboard/src/components/mcp_tools/index.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/mcp_tools/index.tsx)<br>[ui/litellm-dashboard/src/components/mcp_tools/mcp_connect.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/mcp_tools/mcp_connect.tsx) |
| retrieval | 345 | [ui/litellm-dashboard/src/components/vector_store_providers.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/vector_store_providers.tsx)<br>[ui/litellm-dashboard/src/components/view_logs/index.test.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/view_logs/index.test.tsx)<br>[ui/litellm-dashboard/src/components/view_logs/index.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/view_logs/index.tsx)<br>[ui/litellm-dashboard/src/components/view_logs/ToolsSection/index.ts](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/view_logs/ToolsSection/index.ts)<br>[ui/litellm-dashboard/src/components/view_logs/LogDetailsDrawer/index.ts](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/view_logs/LogDetailsDrawer/index.ts)<br>[ui/litellm-dashboard/src/components/vector_store_management/CreateVectorStore.test.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/vector_store_management/CreateVectorStore.test.tsx)<br>[ui/litellm-dashboard/src/components/vector_store_management/CreateVectorStore.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/vector_store_management/CreateVectorStore.tsx)<br>[ui/litellm-dashboard/src/components/vector_store_management/DocumentsTable.test.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/vector_store_management/DocumentsTable.test.tsx) |
| spec | 43 | [ARCHITECTURE.md](../../../../sources/BerriAI__litellm/ARCHITECTURE.md)<br>[ui/litellm-dashboard/e2e_tests/tests/users/searchUsers.spec.ts](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/e2e_tests/tests/users/searchUsers.spec.ts)<br>[ui/litellm-dashboard/e2e_tests/tests/users/viewInternalUsers.spec.ts](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/e2e_tests/tests/users/viewInternalUsers.spec.ts)<br>[ui/litellm-dashboard/e2e_tests/tests/team-admin/teamAdmin.spec.ts](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/e2e_tests/tests/team-admin/teamAdmin.spec.ts)<br>[ui/litellm-dashboard/e2e_tests/tests/settings/adminSettings.spec.ts](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/e2e_tests/tests/settings/adminSettings.spec.ts)<br>[ui/litellm-dashboard/e2e_tests/tests/settings/routerSettings.spec.ts](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/e2e_tests/tests/settings/routerSettings.spec.ts)<br>[ui/litellm-dashboard/e2e_tests/tests/proxy-admin/keys.spec.ts](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/e2e_tests/tests/proxy-admin/keys.spec.ts)<br>[ui/litellm-dashboard/e2e_tests/tests/proxy-admin/license.spec.ts](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/e2e_tests/tests/proxy-admin/license.spec.ts) |
| eval | 2894 | [ui/litellm-dashboard/tests/CreateKeyPage.expiredToken.test.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/tests/CreateKeyPage.expiredToken.test.tsx)<br>[ui/litellm-dashboard/tests/fetch-location-rule.test.ts](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/tests/fetch-location-rule.test.ts)<br>[ui/litellm-dashboard/tests/setupTests.ts](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/tests/setupTests.ts)<br>[ui/litellm-dashboard/tests/test-utils.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/tests/test-utils.tsx)<br>[ui/litellm-dashboard/tests/top_key_view.test.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/tests/top_key_view.test.tsx)<br>[ui/litellm-dashboard/src/utils/cookieUtils.test.ts](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/utils/cookieUtils.test.ts)<br>[ui/litellm-dashboard/src/utils/dataUtils.test.ts](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/utils/dataUtils.test.ts)<br>[ui/litellm-dashboard/src/utils/errorUtils.test.ts](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/utils/errorUtils.test.ts) |
| security | 665 | [policy_templates.json](../../../../sources/BerriAI__litellm/policy_templates.json)<br>[security.md](../../../../sources/BerriAI__litellm/security.md)<br>[ui/litellm-dashboard/src/components/view_logs/audit_logs.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/view_logs/audit_logs.tsx)<br>[ui/litellm-dashboard/src/components/team/permission_definitions.test.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/team/permission_definitions.test.tsx)<br>[ui/litellm-dashboard/src/components/team/permission_definitions.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/team/permission_definitions.tsx)<br>[ui/litellm-dashboard/src/components/policies/add_policy_form.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/policies/add_policy_form.tsx)<br>[ui/litellm-dashboard/src/components/policies/guardrail_selection_modal.test.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/policies/guardrail_selection_modal.test.tsx)<br>[ui/litellm-dashboard/src/components/policies/guardrail_selection_modal.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/policies/guardrail_selection_modal.tsx) |
| ci | 44 | [deploy/charts/litellm-helm/ci/test-values.yaml](../../../../sources/BerriAI__litellm/deploy/charts/litellm-helm/ci/test-values.yaml)<br>[.github/workflows/_test-unit-base.yml](../../../../sources/BerriAI__litellm/.github/workflows/_test-unit-base.yml)<br>[.github/workflows/auto_update_price_and_context_window_file.py](../../../../sources/BerriAI__litellm/.github/workflows/auto_update_price_and_context_window_file.py)<br>[.github/workflows/auto_update_price_and_context_window.yml](../../../../sources/BerriAI__litellm/.github/workflows/auto_update_price_and_context_window.yml)<br>[.github/workflows/check_duplicate_issues.yml](../../../../sources/BerriAI__litellm/.github/workflows/check_duplicate_issues.yml)<br>[.github/workflows/check-schema-sync.yml](../../../../sources/BerriAI__litellm/.github/workflows/check-schema-sync.yml)<br>[.github/workflows/check-ui-api-types.yml](../../../../sources/BerriAI__litellm/.github/workflows/check-ui-api-types.yml)<br>[.github/workflows/codeql.yml](../../../../sources/BerriAI__litellm/.github/workflows/codeql.yml) |
| container | 66 | [docker-compose.hardened.yml](../../../../sources/BerriAI__litellm/docker-compose.hardened.yml)<br>[docker-compose.yml](../../../../sources/BerriAI__litellm/docker-compose.yml)<br>[Dockerfile](../../../../sources/BerriAI__litellm/Dockerfile)<br>[ui/Dockerfile](../../../../sources/BerriAI__litellm/ui/Dockerfile)<br>[migrations/Dockerfile](../../../../sources/BerriAI__litellm/migrations/Dockerfile)<br>[helm/litellm/Chart.yaml](../../../../sources/BerriAI__litellm/helm/litellm/Chart.yaml)<br>[helm/litellm/values.yaml](../../../../sources/BerriAI__litellm/helm/litellm/values.yaml)<br>[helm/litellm/templates/_helpers.tpl](../../../../sources/BerriAI__litellm/helm/litellm/templates/_helpers.tpl) |
| instruction | 5 | [AGENTS.md](../../../../sources/BerriAI__litellm/AGENTS.md)<br>[CLAUDE.md](../../../../sources/BerriAI__litellm/CLAUDE.md)<br>[GEMINI.md](../../../../sources/BerriAI__litellm/GEMINI.md)<br>[ui/litellm-dashboard/CLAUDE.md](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/CLAUDE.md)<br>[litellm/proxy/_experimental/mcp_server/CLAUDE.md](../../../../sources/BerriAI__litellm/litellm/proxy/_experimental/mcp_server/CLAUDE.md) |
| docs | 91 | [README.md](../../../../sources/BerriAI__litellm/README.md)<br>[ui/litellm-dashboard/README.md](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/README.md)<br>[ui/litellm-dashboard/src/components/prompts/README.md](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/prompts/README.md)<br>[ui/litellm-dashboard/src/components/guardrails/README.md](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/guardrails/README.md)<br>`ui/litellm-dashboard/src/app/(dashboard)/README.md`<br>[ui/litellm-dashboard/e2e_tests/tests/migration/README.md](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/e2e_tests/tests/migration/README.md)<br>[tests/README.MD](../../../../sources/BerriAI__litellm/tests/README.MD)<br>[tests/test_litellm/readme.md](../../../../sources/BerriAI__litellm/tests/test_litellm/readme.md) |
| config | 16 | [Makefile](../../../../sources/BerriAI__litellm/Makefile)<br>[package.json](../../../../sources/BerriAI__litellm/package.json)<br>[pyproject.toml](../../../../sources/BerriAI__litellm/pyproject.toml)<br>[uv.lock](../../../../sources/BerriAI__litellm/uv.lock)<br>[ui/litellm-dashboard/package.json](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/package.json)<br>[ui/litellm-dashboard/tsconfig.json](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/tsconfig.json)<br>[tests/proxy_admin_ui_tests/ui_unit_tests/package.json](../../../../sources/BerriAI__litellm/tests/proxy_admin_ui_tests/ui_unit_tests/package.json)<br>[tests/proxy_admin_ui_tests/ui_unit_tests/tsconfig.json](../../../../sources/BerriAI__litellm/tests/proxy_admin_ui_tests/ui_unit_tests/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2894 | [ui/litellm-dashboard/tests/CreateKeyPage.expiredToken.test.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/tests/CreateKeyPage.expiredToken.test.tsx)<br>[ui/litellm-dashboard/tests/fetch-location-rule.test.ts](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/tests/fetch-location-rule.test.ts)<br>[ui/litellm-dashboard/tests/setupTests.ts](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/tests/setupTests.ts)<br>[ui/litellm-dashboard/tests/test-utils.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/tests/test-utils.tsx)<br>[ui/litellm-dashboard/tests/top_key_view.test.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/tests/top_key_view.test.tsx)<br>[ui/litellm-dashboard/src/utils/cookieUtils.test.ts](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/utils/cookieUtils.test.ts) |
| CI workflows | 44 | [deploy/charts/litellm-helm/ci/test-values.yaml](../../../../sources/BerriAI__litellm/deploy/charts/litellm-helm/ci/test-values.yaml)<br>[.github/workflows/_test-unit-base.yml](../../../../sources/BerriAI__litellm/.github/workflows/_test-unit-base.yml)<br>[.github/workflows/auto_update_price_and_context_window_file.py](../../../../sources/BerriAI__litellm/.github/workflows/auto_update_price_and_context_window_file.py)<br>[.github/workflows/auto_update_price_and_context_window.yml](../../../../sources/BerriAI__litellm/.github/workflows/auto_update_price_and_context_window.yml)<br>[.github/workflows/check_duplicate_issues.yml](../../../../sources/BerriAI__litellm/.github/workflows/check_duplicate_issues.yml)<br>[.github/workflows/check-schema-sync.yml](../../../../sources/BerriAI__litellm/.github/workflows/check-schema-sync.yml) |
| Containers / deploy | 66 | [docker-compose.hardened.yml](../../../../sources/BerriAI__litellm/docker-compose.hardened.yml)<br>[docker-compose.yml](../../../../sources/BerriAI__litellm/docker-compose.yml)<br>[Dockerfile](../../../../sources/BerriAI__litellm/Dockerfile)<br>[ui/Dockerfile](../../../../sources/BerriAI__litellm/ui/Dockerfile)<br>[migrations/Dockerfile](../../../../sources/BerriAI__litellm/migrations/Dockerfile)<br>[helm/litellm/Chart.yaml](../../../../sources/BerriAI__litellm/helm/litellm/Chart.yaml) |
| Security / policy | 665 | [policy_templates.json](../../../../sources/BerriAI__litellm/policy_templates.json)<br>[security.md](../../../../sources/BerriAI__litellm/security.md)<br>[ui/litellm-dashboard/src/components/view_logs/audit_logs.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/view_logs/audit_logs.tsx)<br>[ui/litellm-dashboard/src/components/team/permission_definitions.test.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/team/permission_definitions.test.tsx)<br>[ui/litellm-dashboard/src/components/team/permission_definitions.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/team/permission_definitions.tsx)<br>[ui/litellm-dashboard/src/components/policies/add_policy_form.tsx](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/src/components/policies/add_policy_form.tsx) |
| Agent instructions | 5 | [AGENTS.md](../../../../sources/BerriAI__litellm/AGENTS.md)<br>[CLAUDE.md](../../../../sources/BerriAI__litellm/CLAUDE.md)<br>[GEMINI.md](../../../../sources/BerriAI__litellm/GEMINI.md)<br>[ui/litellm-dashboard/CLAUDE.md](../../../../sources/BerriAI__litellm/ui/litellm-dashboard/CLAUDE.md)<br>[litellm/proxy/_experimental/mcp_server/CLAUDE.md](../../../../sources/BerriAI__litellm/litellm/proxy/_experimental/mcp_server/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `mcp_servers.json`, `ui/litellm-dashboard/src/components/mcp_hub_table_columns.tsx`, `ui/litellm-dashboard/src/components/mcp_tools/ByokCredentialModal.tsx`.
2. Trace execution through entrypoints: `ui/litellm-dashboard/e2e_tests/fixtures/mock_llm_server/server.py`, `tests/proxy_unit_tests/test_model_response_typing/server.py`, `tests/local_testing/test_model_response_typing/server.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `ui/litellm-dashboard/src/hooks/mcpOAuthUtils.ts`, `ui/litellm-dashboard/src/hooks/use-safe-layout-effect.ts`.
4. Inspect retrieval/memory/indexing through: `ui/litellm-dashboard/src/components/vector_store_providers.tsx`, `ui/litellm-dashboard/src/components/view_logs/index.test.tsx`, `ui/litellm-dashboard/src/components/view_logs/index.tsx`.
5. Verify behavior through test/eval files: `ui/litellm-dashboard/tests/CreateKeyPage.expiredToken.test.tsx`, `ui/litellm-dashboard/tests/fetch-location-rule.test.ts`, `ui/litellm-dashboard/tests/setupTests.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 6958 files, 1693 directories.. 핵심 구조 신호는 package.json, pyproject.toml, Dockerfile, docker-compose.yml, Makefile, openai이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
