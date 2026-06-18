# onyx-dot-app/onyx Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Open Source AI Platform - AI Chat with advanced features that works with every LLM

## 요약

- 조사 단위: `sources/onyx-dot-app__onyx` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 5,447 files, 1,237 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=widget/src/index.ts, web/lib/shared/src/index.ts, web/lib/opal/src/icons/server.tsx이고, 의존성 단서는 openai, mcp, langchain, fastapi, pydantic, torch, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | onyx-dot-app/onyx |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 30391 |
| Forks | 4157 |
| License | NOASSERTION |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/onyx-dot-app__onyx](../../../../sources/onyx-dot-app__onyx) |
| Existing report | [reports/llm-wiki/repositories/onyx-dot-app__onyx.md](../../../llm-wiki/repositories/onyx-dot-app__onyx.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 5447 / 1237 |
| Max observed depth | 11 |
| Top directories | .claude, .cursor, .devcontainer, .github, .greptile, backend, cli, contributor_ip_assignment, deployment, desktop, docs, examples, extensions, loadtest, mobile, profiling, tools, web, widget |
| Top extensions | .py: 2562, .tsx: 1282, .ts: 560, .md: 188, .go: 112, .yaml: 107, .png: 81, .yml: 67, .json: 64, .css: 63, .svg: 44, (none): 44 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| web | source boundary | 256 |
| docs | documentation surface | 3 |
| examples/widget | examples workspace | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| cli | top-level component | 1 |
| contributor_ip_assignment | top-level component | 1 |
| deployment | deployment surface | 1 |
| desktop | top-level component | 1 |
| examples | top-level component | 1 |
| extensions | top-level component | 1 |
| loadtest | validation surface | 1 |
| mobile | top-level component | 1 |
| profiling | top-level component | 1 |
| tools | top-level component | 1 |
| widget | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | craft-up | make craft-up |
| utility | Makefile | craft-down | make craft-down |
| container | Makefile | craft-sandbox-image | make craft-sandbox-image |
| container | Makefile | craft-backend-image | make craft-backend-image |
| container | Makefile | craft-refresh-images | make craft-refresh-images |
| quality | Makefile | craft-check-images | make craft-check-images |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | none |
| modelRuntime | torch, transformers |
| webRuntime | fastapi |
| developerSurface | none |
| observability | opentelemetry, prometheus |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [widget/src/index.ts](../../../../sources/onyx-dot-app__onyx/widget/src/index.ts) | entrypoints signal |
| entrypoints | [web/lib/shared/src/index.ts](../../../../sources/onyx-dot-app__onyx/web/lib/shared/src/index.ts) | entrypoints signal |
| entrypoints | [web/lib/opal/src/icons/server.tsx](../../../../sources/onyx-dot-app__onyx/web/lib/opal/src/icons/server.tsx) | entrypoints signal |
| entrypoints | [web/.storybook/main.ts](../../../../sources/onyx-dot-app__onyx/web/.storybook/main.ts) | entrypoints signal |
| config | [Makefile](../../../../sources/onyx-dot-app__onyx/Makefile) | config signal |
| config | [package.json](../../../../sources/onyx-dot-app__onyx/package.json) | config signal |
| config | [pyproject.toml](../../../../sources/onyx-dot-app__onyx/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/onyx-dot-app__onyx/uv.lock) | config signal |
| docs | [README.md](../../../../sources/onyx-dot-app__onyx/README.md) | docs signal |
| docs | [README.zh-CN.md](../../../../sources/onyx-dot-app__onyx/README.zh-CN.md) | docs signal |
| docs | [widget/README.md](../../../../sources/onyx-dot-app__onyx/widget/README.md) | docs signal |
| docs | [web/README.md](../../../../sources/onyx-dot-app__onyx/web/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 13 | [widget/src/index.ts](../../../../sources/onyx-dot-app__onyx/widget/src/index.ts)<br>[web/lib/shared/src/index.ts](../../../../sources/onyx-dot-app__onyx/web/lib/shared/src/index.ts)<br>[web/lib/opal/src/icons/server.tsx](../../../../sources/onyx-dot-app__onyx/web/lib/opal/src/icons/server.tsx)<br>[web/.storybook/main.ts](../../../../sources/onyx-dot-app__onyx/web/.storybook/main.ts)<br>[tools/ods/main.go](../../../../sources/onyx-dot-app__onyx/tools/ods/main.go)<br>[desktop/src-tauri/src/main.rs](../../../../sources/onyx-dot-app__onyx/desktop/src-tauri/src/main.rs)<br>[desktop/src/index.html](../../../../sources/onyx-dot-app__onyx/desktop/src/index.html)<br>[cli/main.go](../../../../sources/onyx-dot-app__onyx/cli/main.go) |
| agentRuntime | 593 | [AGENTS.md](../../../../sources/onyx-dot-app__onyx/AGENTS.md)<br>[web/AGENTS.md](../../../../sources/onyx-dot-app__onyx/web/AGENTS.md)<br>[web/tests/e2e/utils/tools.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/utils/tools.ts)<br>[web/tests/e2e/agents/create_and_edit_agent.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/agents/create_and_edit_agent.spec.ts)<br>[web/tests/e2e/agents/llm_provider_rbac.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/agents/llm_provider_rbac.spec.ts)<br>[web/tests/e2e/agents/persona_avatar.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/agents/persona_avatar.spec.ts)<br>[web/tests/e2e/agents/persona_chat.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/agents/persona_chat.spec.ts)<br>[web/tests/e2e/agents/user_file_attachment.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/agents/user_file_attachment.spec.ts) |
| mcp | 63 | [.mcp.json](../../../../sources/onyx-dot-app__onyx/.mcp.json)<br>[web/tests/e2e/mcp/default-agent-mcp.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/mcp/default-agent-mcp.spec.ts)<br>[web/tests/e2e/mcp/mcp_oauth_flow.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/mcp/mcp_oauth_flow.spec.ts)<br>[web/tests/e2e/mcp/mcp_per_user_key.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/mcp/mcp_per_user_key.spec.ts)<br>[web/tests/e2e/mcp/McpOAuthFlow.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/mcp/McpOAuthFlow.ts)<br>[web/tests/e2e/mcp/mcpToolInvocation.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/mcp/mcpToolInvocation.ts)<br>[web/src/app/mcp/oauth/callback/page.tsx](../../../../sources/onyx-dot-app__onyx/web/src/app/mcp/oauth/callback/page.tsx)<br>`web/src/app/mcp/[[...path]]/route.ts` |
| retrieval | 192 | [widget/index.html](../../../../sources/onyx-dot-app__onyx/widget/index.html)<br>[widget/src/index.ts](../../../../sources/onyx-dot-app__onyx/widget/src/index.ts)<br>[web/tests/e2e/admin/index-settings/index_settings.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/admin/index-settings/index_settings.spec.ts)<br>[web/tests/e2e/admin/index-settings/IndexSettingsPage.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/admin/index-settings/IndexSettingsPage.ts)<br>[web/src/sections/modals/PreviewModal/index.ts](../../../../sources/onyx-dot-app__onyx/web/src/sections/modals/PreviewModal/index.ts)<br>[web/src/sections/modals/PreviewModal/variants/index.ts](../../../../sources/onyx-dot-app__onyx/web/src/sections/modals/PreviewModal/variants/index.ts)<br>[web/src/sections/knowledge/AgentKnowledgePane.tsx](../../../../sources/onyx-dot-app__onyx/web/src/sections/knowledge/AgentKnowledgePane.tsx)<br>[web/src/sections/knowledge/SourceHierarchyBrowser.tsx](../../../../sources/onyx-dot-app__onyx/web/src/sections/knowledge/SourceHierarchyBrowser.tsx) |
| spec | 83 | [web/tests/e2e/settings/settings_pages.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/settings/settings_pages.spec.ts)<br>[web/tests/e2e/scheduled-tasks/scheduled-tasks.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/scheduled-tasks/scheduled-tasks.spec.ts)<br>[web/tests/e2e/onboarding/onboarding_flow.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/onboarding/onboarding_flow.spec.ts)<br>[web/tests/e2e/mcp/default-agent-mcp.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/mcp/default-agent-mcp.spec.ts)<br>[web/tests/e2e/mcp/mcp_oauth_flow.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/mcp/mcp_oauth_flow.spec.ts)<br>[web/tests/e2e/mcp/mcp_per_user_key.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/mcp/mcp_per_user_key.spec.ts)<br>[web/tests/e2e/connectors/federated_slack.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/connectors/federated_slack.spec.ts)<br>[web/tests/e2e/connectors/inlineFileManagement.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/connectors/inlineFileManagement.spec.ts) |
| eval | 1229 | [web/tests/README.md](../../../../sources/onyx-dot-app__onyx/web/tests/README.md)<br>[web/tests/setup/fileMock.js](../../../../sources/onyx-dot-app__onyx/web/tests/setup/fileMock.js)<br>[web/tests/setup/jest.setup.ts](../../../../sources/onyx-dot-app__onyx/web/tests/setup/jest.setup.ts)<br>[web/tests/setup/llmProviderTestUtils.ts](../../../../sources/onyx-dot-app__onyx/web/tests/setup/llmProviderTestUtils.ts)<br>[web/tests/setup/test-utils.tsx](../../../../sources/onyx-dot-app__onyx/web/tests/setup/test-utils.tsx)<br>[web/tests/setup/mocks/cssMock.js](../../../../sources/onyx-dot-app__onyx/web/tests/setup/mocks/cssMock.js)<br>[web/tests/setup/mocks/README.md](../../../../sources/onyx-dot-app__onyx/web/tests/setup/mocks/README.md)<br>[web/tests/setup/mocks/components/UserProvider.tsx](../../../../sources/onyx-dot-app__onyx/web/tests/setup/mocks/components/UserProvider.tsx) |
| security | 284 | [SECURITY.md](../../../../sources/onyx-dot-app__onyx/SECURITY.md)<br>[web/tests/e2e/utils/auth.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/utils/auth.ts)<br>[web/tests/e2e/mcp/mcp_oauth_flow.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/mcp/mcp_oauth_flow.spec.ts)<br>[web/tests/e2e/auth/email_verification.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/auth/email_verification.spec.ts)<br>[web/tests/e2e/auth/login.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/auth/login.spec.ts)<br>[web/tests/e2e/auth/password_managements.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/auth/password_managements.spec.ts)<br>[web/tests/e2e/auth/pat_management.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/auth/pat_management.spec.ts)<br>[web/tests/e2e/auth/signup.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/auth/signup.spec.ts) |
| ci | 38 | [deployment/helm/charts/onyx/ci/ct-values.yaml](../../../../sources/onyx-dot-app__onyx/deployment/helm/charts/onyx/ci/ct-values.yaml)<br>[.github/workflows/deployment.yml](../../../../sources/onyx-dot-app__onyx/.github/workflows/deployment.yml)<br>[.github/workflows/docker-tag-beta.yml](../../../../sources/onyx-dot-app__onyx/.github/workflows/docker-tag-beta.yml)<br>[.github/workflows/docker-tag-latest.yml](../../../../sources/onyx-dot-app__onyx/.github/workflows/docker-tag-latest.yml)<br>[.github/workflows/helm-chart-releases.yml](../../../../sources/onyx-dot-app__onyx/.github/workflows/helm-chart-releases.yml)<br>[.github/workflows/merge-group.yml](../../../../sources/onyx-dot-app__onyx/.github/workflows/merge-group.yml)<br>[.github/workflows/nightly-close-stale-issues.yml](../../../../sources/onyx-dot-app__onyx/.github/workflows/nightly-close-stale-issues.yml)<br>[.github/workflows/nightly-external-dependency-unit-tests.yml](../../../../sources/onyx-dot-app__onyx/.github/workflows/nightly-external-dependency-unit-tests.yml) |
| container | 187 | [web/Dockerfile](../../../../sources/onyx-dot-app__onyx/web/Dockerfile)<br>[profiling/docker-compose.yml](../../../../sources/onyx-dot-app__onyx/profiling/docker-compose.yml)<br>[loadtest/Dockerfile](../../../../sources/onyx-dot-app__onyx/loadtest/Dockerfile)<br>[loadtest/mock_llm/Dockerfile](../../../../sources/onyx-dot-app__onyx/loadtest/mock_llm/Dockerfile)<br>[loadtest/k8s/locust.yaml](../../../../sources/onyx-dot-app__onyx/loadtest/k8s/locust.yaml)<br>[loadtest/k8s/mock-llm.yaml](../../../../sources/onyx-dot-app__onyx/loadtest/k8s/mock-llm.yaml)<br>[docs/craft/kubernetes/craft-eks-runbook.md](../../../../sources/onyx-dot-app__onyx/docs/craft/kubernetes/craft-eks-runbook.md)<br>[docs/craft/docker/docker-compose-overview.md](../../../../sources/onyx-dot-app__onyx/docs/craft/docker/docker-compose-overview.md) |
| instruction | 3 | [AGENTS.md](../../../../sources/onyx-dot-app__onyx/AGENTS.md)<br>[web/AGENTS.md](../../../../sources/onyx-dot-app__onyx/web/AGENTS.md)<br>[.devcontainer/claude-code/CLAUDE.md](../../../../sources/onyx-dot-app__onyx/.devcontainer/claude-code/CLAUDE.md) |
| docs | 236 | [README.md](../../../../sources/onyx-dot-app__onyx/README.md)<br>[README.zh-CN.md](../../../../sources/onyx-dot-app__onyx/README.zh-CN.md)<br>[widget/README.md](../../../../sources/onyx-dot-app__onyx/widget/README.md)<br>[web/README.md](../../../../sources/onyx-dot-app__onyx/web/README.md)<br>[web/tests/README.md](../../../../sources/onyx-dot-app__onyx/web/tests/README.md)<br>[web/tests/setup/mocks/README.md](../../../../sources/onyx-dot-app__onyx/web/tests/setup/mocks/README.md)<br>[web/tests/e2e/README.md](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/README.md)<br>[web/src/sections/cards/README.md](../../../../sources/onyx-dot-app__onyx/web/src/sections/cards/README.md) |
| config | 31 | [Makefile](../../../../sources/onyx-dot-app__onyx/Makefile)<br>[package.json](../../../../sources/onyx-dot-app__onyx/package.json)<br>[pyproject.toml](../../../../sources/onyx-dot-app__onyx/pyproject.toml)<br>[uv.lock](../../../../sources/onyx-dot-app__onyx/uv.lock)<br>[widget/package.json](../../../../sources/onyx-dot-app__onyx/widget/package.json)<br>[widget/tsconfig.json](../../../../sources/onyx-dot-app__onyx/widget/tsconfig.json)<br>[web/package.json](../../../../sources/onyx-dot-app__onyx/web/package.json)<br>[web/tsconfig.json](../../../../sources/onyx-dot-app__onyx/web/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1229 | [web/tests/README.md](../../../../sources/onyx-dot-app__onyx/web/tests/README.md)<br>[web/tests/setup/fileMock.js](../../../../sources/onyx-dot-app__onyx/web/tests/setup/fileMock.js)<br>[web/tests/setup/jest.setup.ts](../../../../sources/onyx-dot-app__onyx/web/tests/setup/jest.setup.ts)<br>[web/tests/setup/llmProviderTestUtils.ts](../../../../sources/onyx-dot-app__onyx/web/tests/setup/llmProviderTestUtils.ts)<br>[web/tests/setup/test-utils.tsx](../../../../sources/onyx-dot-app__onyx/web/tests/setup/test-utils.tsx)<br>[web/tests/setup/mocks/cssMock.js](../../../../sources/onyx-dot-app__onyx/web/tests/setup/mocks/cssMock.js) |
| CI workflows | 38 | [deployment/helm/charts/onyx/ci/ct-values.yaml](../../../../sources/onyx-dot-app__onyx/deployment/helm/charts/onyx/ci/ct-values.yaml)<br>[.github/workflows/deployment.yml](../../../../sources/onyx-dot-app__onyx/.github/workflows/deployment.yml)<br>[.github/workflows/docker-tag-beta.yml](../../../../sources/onyx-dot-app__onyx/.github/workflows/docker-tag-beta.yml)<br>[.github/workflows/docker-tag-latest.yml](../../../../sources/onyx-dot-app__onyx/.github/workflows/docker-tag-latest.yml)<br>[.github/workflows/helm-chart-releases.yml](../../../../sources/onyx-dot-app__onyx/.github/workflows/helm-chart-releases.yml)<br>[.github/workflows/merge-group.yml](../../../../sources/onyx-dot-app__onyx/.github/workflows/merge-group.yml) |
| Containers / deploy | 187 | [web/Dockerfile](../../../../sources/onyx-dot-app__onyx/web/Dockerfile)<br>[profiling/docker-compose.yml](../../../../sources/onyx-dot-app__onyx/profiling/docker-compose.yml)<br>[loadtest/Dockerfile](../../../../sources/onyx-dot-app__onyx/loadtest/Dockerfile)<br>[loadtest/mock_llm/Dockerfile](../../../../sources/onyx-dot-app__onyx/loadtest/mock_llm/Dockerfile)<br>[loadtest/k8s/locust.yaml](../../../../sources/onyx-dot-app__onyx/loadtest/k8s/locust.yaml)<br>[loadtest/k8s/mock-llm.yaml](../../../../sources/onyx-dot-app__onyx/loadtest/k8s/mock-llm.yaml) |
| Security / policy | 284 | [SECURITY.md](../../../../sources/onyx-dot-app__onyx/SECURITY.md)<br>[web/tests/e2e/utils/auth.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/utils/auth.ts)<br>[web/tests/e2e/mcp/mcp_oauth_flow.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/mcp/mcp_oauth_flow.spec.ts)<br>[web/tests/e2e/auth/email_verification.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/auth/email_verification.spec.ts)<br>[web/tests/e2e/auth/login.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/auth/login.spec.ts)<br>[web/tests/e2e/auth/password_managements.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/auth/password_managements.spec.ts) |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/onyx-dot-app__onyx/AGENTS.md)<br>[web/AGENTS.md](../../../../sources/onyx-dot-app__onyx/web/AGENTS.md)<br>[.devcontainer/claude-code/CLAUDE.md](../../../../sources/onyx-dot-app__onyx/.devcontainer/claude-code/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `widget/src/index.ts`, `web/lib/shared/src/index.ts`, `web/lib/opal/src/icons/server.tsx`.
2. Trace execution through entrypoints: `widget/src/index.ts`, `web/lib/shared/src/index.ts`, `web/lib/opal/src/icons/server.tsx`.
3. Map agent/tool runtime through: `AGENTS.md`, `web/AGENTS.md`, `web/tests/e2e/utils/tools.ts`.
4. Inspect retrieval/memory/indexing through: `widget/index.html`, `widget/src/index.ts`, `web/tests/e2e/admin/index-settings/index_settings.spec.ts`.
5. Verify behavior through test/eval files: `web/tests/README.md`, `web/tests/setup/fileMock.js`, `web/tests/setup/jest.setup.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Open Source AI Platform AI Chat with advanced features that works with every LLM. 핵심 구조 신호는 Python, package.json, pyproject.toml, Makefile, README.md, AGENTS.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
