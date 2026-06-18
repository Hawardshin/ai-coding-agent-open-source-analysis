# onyx-dot-app/onyx 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Open Source AI Platform - AI Chat with advanced features that works with every LLM

## 요약

- 조사 단위: `sources/onyx-dot-app__onyx` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 5,447 files, 1,237 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=widget/src/index.ts, web/lib/shared/src/index.ts, web/lib/opal/src/icons/server.tsx이고, 의존성 단서는 openai, mcp, langchain, fastapi, pydantic, torch, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | onyx-dot-app/onyx |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 30391 |
| Forks | 4157 |
| License | NOASSERTION |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/onyx-dot-app__onyx](../../../../sources/onyx-dot-app__onyx) |
| 기존 보고서 | [reports/llm-wiki/repositories/onyx-dot-app__onyx.md](../../../llm-wiki/repositories/onyx-dot-app__onyx.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 5447 / 1237 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .claude, .cursor, .devcontainer, .github, .greptile, backend, cli, contributor_ip_assignment, deployment, desktop, docs, examples, extensions, loadtest, mobile, profiling, tools, web, widget |
| 상위 확장자 | .py: 2562, .tsx: 1282, .ts: 560, .md: 188, .go: 112, .yaml: 107, .png: 81, .yml: 67, .json: 64, .css: 63, .svg: 44, (none): 44 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | craft-up | make craft-up |
| utility | Makefile | craft-down | make craft-down |
| container | Makefile | craft-sandbox-image | make craft-sandbox-image |
| container | Makefile | craft-backend-image | make craft-backend-image |
| container | Makefile | craft-refresh-images | make craft-refresh-images |
| quality | Makefile | craft-check-images | make craft-check-images |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | 없음 |
| modelRuntime | torch, transformers |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | opentelemetry, prometheus |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1229 | [web/tests/README.md](../../../../sources/onyx-dot-app__onyx/web/tests/README.md)<br>[web/tests/setup/fileMock.js](../../../../sources/onyx-dot-app__onyx/web/tests/setup/fileMock.js)<br>[web/tests/setup/jest.setup.ts](../../../../sources/onyx-dot-app__onyx/web/tests/setup/jest.setup.ts)<br>[web/tests/setup/llmProviderTestUtils.ts](../../../../sources/onyx-dot-app__onyx/web/tests/setup/llmProviderTestUtils.ts)<br>[web/tests/setup/test-utils.tsx](../../../../sources/onyx-dot-app__onyx/web/tests/setup/test-utils.tsx)<br>[web/tests/setup/mocks/cssMock.js](../../../../sources/onyx-dot-app__onyx/web/tests/setup/mocks/cssMock.js) |
| CI workflow | 38 | [deployment/helm/charts/onyx/ci/ct-values.yaml](../../../../sources/onyx-dot-app__onyx/deployment/helm/charts/onyx/ci/ct-values.yaml)<br>[.github/workflows/deployment.yml](../../../../sources/onyx-dot-app__onyx/.github/workflows/deployment.yml)<br>[.github/workflows/docker-tag-beta.yml](../../../../sources/onyx-dot-app__onyx/.github/workflows/docker-tag-beta.yml)<br>[.github/workflows/docker-tag-latest.yml](../../../../sources/onyx-dot-app__onyx/.github/workflows/docker-tag-latest.yml)<br>[.github/workflows/helm-chart-releases.yml](../../../../sources/onyx-dot-app__onyx/.github/workflows/helm-chart-releases.yml)<br>[.github/workflows/merge-group.yml](../../../../sources/onyx-dot-app__onyx/.github/workflows/merge-group.yml) |
| 컨테이너/배포 | 187 | [web/Dockerfile](../../../../sources/onyx-dot-app__onyx/web/Dockerfile)<br>[profiling/docker-compose.yml](../../../../sources/onyx-dot-app__onyx/profiling/docker-compose.yml)<br>[loadtest/Dockerfile](../../../../sources/onyx-dot-app__onyx/loadtest/Dockerfile)<br>[loadtest/mock_llm/Dockerfile](../../../../sources/onyx-dot-app__onyx/loadtest/mock_llm/Dockerfile)<br>[loadtest/k8s/locust.yaml](../../../../sources/onyx-dot-app__onyx/loadtest/k8s/locust.yaml)<br>[loadtest/k8s/mock-llm.yaml](../../../../sources/onyx-dot-app__onyx/loadtest/k8s/mock-llm.yaml) |
| 보안/정책 | 284 | [SECURITY.md](../../../../sources/onyx-dot-app__onyx/SECURITY.md)<br>[web/tests/e2e/utils/auth.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/utils/auth.ts)<br>[web/tests/e2e/mcp/mcp_oauth_flow.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/mcp/mcp_oauth_flow.spec.ts)<br>[web/tests/e2e/auth/email_verification.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/auth/email_verification.spec.ts)<br>[web/tests/e2e/auth/login.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/auth/login.spec.ts)<br>[web/tests/e2e/auth/password_managements.spec.ts](../../../../sources/onyx-dot-app__onyx/web/tests/e2e/auth/password_managements.spec.ts) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/onyx-dot-app__onyx/AGENTS.md)<br>[web/AGENTS.md](../../../../sources/onyx-dot-app__onyx/web/AGENTS.md)<br>[.devcontainer/claude-code/CLAUDE.md](../../../../sources/onyx-dot-app__onyx/.devcontainer/claude-code/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `widget/src/index.ts`, `web/lib/shared/src/index.ts`, `web/lib/opal/src/icons/server.tsx`.
2. entrypoint를 따라 실행 흐름 확인: `widget/src/index.ts`, `web/lib/shared/src/index.ts`, `web/lib/opal/src/icons/server.tsx`.
3. agent/tool runtime 매핑: `AGENTS.md`, `web/AGENTS.md`, `web/tests/e2e/utils/tools.ts`.
4. retrieval/memory/indexing 확인: `widget/index.html`, `widget/src/index.ts`, `web/tests/e2e/admin/index-settings/index_settings.spec.ts`.
5. test/eval 파일로 동작 검증: `web/tests/README.md`, `web/tests/setup/fileMock.js`, `web/tests/setup/jest.setup.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Open Source AI Platform AI Chat with advanced features that works with every LLM. 핵심 구조 신호는 Python, package.json, pyproject.toml, Makefile, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
