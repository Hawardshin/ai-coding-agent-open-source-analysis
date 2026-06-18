# langgenius/dify Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Production-ready platform for agentic workflow development.

## 요약

- 조사 단위: `sources/langgenius__dify` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 12,989 files, 3,264 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=web/utils/mcp.spec.ts, web/utils/mcp.ts, web/app/components/workflow/nodes/_base/components/mcp-tool-availability.tsx이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | langgenius/dify |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 145630 |
| Forks | 22906 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/langgenius__dify](../../../../sources/langgenius__dify) |
| Existing report | [reports/global-trending/repositories/langgenius__dify.md](../../../global-trending/repositories/langgenius__dify.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 12989 / 3264 |
| Max observed depth | 13 |
| Top directories | .agents, .claude, .devcontainer, .gemini, .github, .vite-hooks, api, cli, dev, dify-agent, docker, docs, e2e, images, packages, scripts, sdks, web |
| Top extensions | .tsx: 4729, .py: 3422, .ts: 2185, .json: 1227, .svg: 604, .js: 126, .md: 124, .yml: 88, .css: 77, .png: 71, .html: 61, (none): 50 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| web | source boundary | 295 |
| api | source boundary | 21 |
| packages/dev-proxy | packages workspace | 8 |
| packages/dify-ui | packages workspace | 4 |
| packages/migrate-no-unchecked-indexed-access | packages workspace | 4 |
| packages/contracts | packages workspace | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| cli | top-level component | 1 |
| dev | top-level component | 1 |
| dify-agent | top-level component | 1 |
| docker | documentation surface | 1 |
| docs | documentation surface | 1 |
| e2e | validation surface | 1 |
| images | top-level component | 1 |
| packages | source boundary | 1 |
| packages/iconify-collections | packages workspace | 1 |
| packages/tsconfig | packages workspace | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | concurrently -k -n vinext,proxy "vp run dify-web#dev:vinext" "vp run dify-web#dev:proxy" |
| utility | package.json | prepare | vp config |
| quality | package.json | type-check | vp run -r type-check |
| quality | package.json | lint | eslint --cache --concurrency=auto |
| quality | package.json | lint:ci | eslint --cache --cache-strategy content --concurrency 2 |
| quality | package.json | lint:fix | vp run lint --fix |
| quality | package.json | lint:quiet | vp run lint --quiet |
| utility | Makefile | .PHONY | make .PHONY |
| serve-dev | Makefile | dev-setup | make dev-setup |
| container | Makefile | prepare-docker | make prepare-docker |
| utility | Makefile | prepare-web | make prepare-web |
| utility | Makefile | prepare-api | make prepare-api |
| serve-dev | Makefile | dev-clean | make dev-clean |
| quality | Makefile | format | make format |
| quality | Makefile | check | make check |
| quality | Makefile | lint | make lint |
| quality | Makefile | api-contract-lint | make api-contract-lint |
| quality | Makefile | type-check | make type-check |
| quality | Makefile | type-check-core | make type-check-core |
| test | Makefile | test | make test |
| test | Makefile | test-all | make test-all |
| build | Makefile | build-web | make build-web |
| build | Makefile | build-api | make build-api |
| utility | Makefile | push-web | make push-web |
| utility | Makefile | push-api | make push-api |
| build | Makefile | build-all | make build-all |
| utility | Makefile | push-all | make push-all |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [web/utils/mcp.spec.ts](../../../../sources/langgenius__dify/web/utils/mcp.spec.ts) | mcp signal |
| mcp | [web/utils/mcp.ts](../../../../sources/langgenius__dify/web/utils/mcp.ts) | mcp signal |
| mcp | [web/app/components/workflow/nodes/_base/components/mcp-tool-availability.tsx](../../../../sources/langgenius__dify/web/app/components/workflow/nodes/_base/components/mcp-tool-availability.tsx) | mcp signal |
| mcp | [web/app/components/workflow/nodes/_base/components/mcp-tool-not-support-tooltip.tsx](../../../../sources/langgenius__dify/web/app/components/workflow/nodes/_base/components/mcp-tool-not-support-tooltip.tsx) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/langgenius__dify/AGENTS.md) | agentRuntime signal |
| agentRuntime | [web/AGENTS.md](../../../../sources/langgenius__dify/web/AGENTS.md) | agentRuntime signal |
| agentRuntime | [web/utils/context.spec.ts](../../../../sources/langgenius__dify/web/utils/context.spec.ts) | agentRuntime signal |
| agentRuntime | [web/utils/context.ts](../../../../sources/langgenius__dify/web/utils/context.ts) | agentRuntime signal |
| entrypoints | [web/service/server.ts](../../../../sources/langgenius__dify/web/service/server.ts) | entrypoints signal |
| entrypoints | [web/service/__tests__/server.spec.ts](../../../../sources/langgenius__dify/web/service/__tests__/server.spec.ts) | entrypoints signal |
| entrypoints | [web/i18n-config/server.ts](../../../../sources/langgenius__dify/web/i18n-config/server.ts) | entrypoints signal |
| entrypoints | [web/features/system-features/server.ts](../../../../sources/langgenius__dify/web/features/system-features/server.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 31 | [web/service/server.ts](../../../../sources/langgenius__dify/web/service/server.ts)<br>[web/service/__tests__/server.spec.ts](../../../../sources/langgenius__dify/web/service/__tests__/server.spec.ts)<br>[web/i18n-config/server.ts](../../../../sources/langgenius__dify/web/i18n-config/server.ts)<br>[web/features/system-features/server.ts](../../../../sources/langgenius__dify/web/features/system-features/server.ts)<br>[web/features/account-profile/server.ts](../../../../sources/langgenius__dify/web/features/account-profile/server.ts)<br>[web/features/account-profile/__tests__/server.spec.ts](../../../../sources/langgenius__dify/web/features/account-profile/__tests__/server.spec.ts)<br>[web/config/server.ts](../../../../sources/langgenius__dify/web/config/server.ts)<br>[web/config/__tests__/server.spec.ts](../../../../sources/langgenius__dify/web/config/__tests__/server.spec.ts) |
| agentRuntime | 3110 | [AGENTS.md](../../../../sources/langgenius__dify/AGENTS.md)<br>[web/AGENTS.md](../../../../sources/langgenius__dify/web/AGENTS.md)<br>[web/utils/context.spec.ts](../../../../sources/langgenius__dify/web/utils/context.spec.ts)<br>[web/utils/context.ts](../../../../sources/langgenius__dify/web/utils/context.ts)<br>[web/utils/tool-call.spec.ts](../../../../sources/langgenius__dify/web/utils/tool-call.spec.ts)<br>[web/utils/tool-call.ts](../../../../sources/langgenius__dify/web/utils/tool-call.ts)<br>[web/types/workflow.ts](../../../../sources/langgenius__dify/web/types/workflow.ts)<br>[web/service/tools.ts](../../../../sources/langgenius__dify/web/service/tools.ts) |
| mcp | 93 | [web/utils/mcp.spec.ts](../../../../sources/langgenius__dify/web/utils/mcp.spec.ts)<br>[web/utils/mcp.ts](../../../../sources/langgenius__dify/web/utils/mcp.ts)<br>[web/app/components/workflow/nodes/_base/components/mcp-tool-availability.tsx](../../../../sources/langgenius__dify/web/app/components/workflow/nodes/_base/components/mcp-tool-availability.tsx)<br>[web/app/components/workflow/nodes/_base/components/mcp-tool-not-support-tooltip.tsx](../../../../sources/langgenius__dify/web/app/components/workflow/nodes/_base/components/mcp-tool-not-support-tooltip.tsx)<br>[web/app/components/tools/mcp/create-card.tsx](../../../../sources/langgenius__dify/web/app/components/tools/mcp/create-card.tsx)<br>[web/app/components/tools/mcp/headers-input.tsx](../../../../sources/langgenius__dify/web/app/components/tools/mcp/headers-input.tsx)<br>[web/app/components/tools/mcp/index.tsx](../../../../sources/langgenius__dify/web/app/components/tools/mcp/index.tsx)<br>[web/app/components/tools/mcp/mcp-server-modal.tsx](../../../../sources/langgenius__dify/web/app/components/tools/mcp/mcp-server-modal.tsx) |
| retrieval | 2253 | [web/utils/index.spec.ts](../../../../sources/langgenius__dify/web/utils/index.spec.ts)<br>[web/utils/index.ts](../../../../sources/langgenius__dify/web/utils/index.ts)<br>[web/service/knowledge/use-create-dataset.ts](../../../../sources/langgenius__dify/web/service/knowledge/use-create-dataset.ts)<br>[web/service/knowledge/use-dataset.spec.ts](../../../../sources/langgenius__dify/web/service/knowledge/use-dataset.spec.ts)<br>[web/service/knowledge/use-dataset.ts](../../../../sources/langgenius__dify/web/service/knowledge/use-dataset.ts)<br>[web/service/knowledge/use-document.ts](../../../../sources/langgenius__dify/web/service/knowledge/use-document.ts)<br>[web/service/knowledge/use-hit-testing.ts](../../../../sources/langgenius__dify/web/service/knowledge/use-hit-testing.ts)<br>[web/service/knowledge/use-import.ts](../../../../sources/langgenius__dify/web/service/knowledge/use-import.ts) |
| spec | 2399 | [web/utils/app-redirection.spec.ts](../../../../sources/langgenius__dify/web/utils/app-redirection.spec.ts)<br>[web/utils/clipboard.spec.ts](../../../../sources/langgenius__dify/web/utils/clipboard.spec.ts)<br>[web/utils/completion-params.spec.ts](../../../../sources/langgenius__dify/web/utils/completion-params.spec.ts)<br>[web/utils/context.spec.ts](../../../../sources/langgenius__dify/web/utils/context.spec.ts)<br>[web/utils/download.spec.ts](../../../../sources/langgenius__dify/web/utils/download.spec.ts)<br>[web/utils/emoji.spec.ts](../../../../sources/langgenius__dify/web/utils/emoji.spec.ts)<br>[web/utils/format.spec.ts](../../../../sources/langgenius__dify/web/utils/format.spec.ts)<br>[web/utils/get-icon.spec.ts](../../../../sources/langgenius__dify/web/utils/get-icon.spec.ts) |
| eval | 4441 | [web/utils/app-redirection.spec.ts](../../../../sources/langgenius__dify/web/utils/app-redirection.spec.ts)<br>[web/utils/clipboard.spec.ts](../../../../sources/langgenius__dify/web/utils/clipboard.spec.ts)<br>[web/utils/completion-params.spec.ts](../../../../sources/langgenius__dify/web/utils/completion-params.spec.ts)<br>[web/utils/context.spec.ts](../../../../sources/langgenius__dify/web/utils/context.spec.ts)<br>[web/utils/download.spec.ts](../../../../sources/langgenius__dify/web/utils/download.spec.ts)<br>[web/utils/emoji.spec.ts](../../../../sources/langgenius__dify/web/utils/emoji.spec.ts)<br>[web/utils/format.spec.ts](../../../../sources/langgenius__dify/web/utils/format.spec.ts)<br>[web/utils/get-icon.spec.ts](../../../../sources/langgenius__dify/web/utils/get-icon.spec.ts) |
| security | 397 | [SECURITY.md](../../../../sources/langgenius__dify/SECURITY.md)<br>[web/utils/permission.spec.ts](../../../../sources/langgenius__dify/web/utils/permission.spec.ts)<br>[web/utils/permission.ts](../../../../sources/langgenius__dify/web/utils/permission.ts)<br>[web/service/use-oauth.ts](../../../../sources/langgenius__dify/web/service/use-oauth.ts)<br>[web/service/use-plugins-auth.ts](../../../../sources/langgenius__dify/web/service/use-plugins-auth.ts)<br>[web/service/webapp-auth.ts](../../../../sources/langgenius__dify/web/service/webapp-auth.ts)<br>[web/models/permission.ts](../../../../sources/langgenius__dify/web/models/permission.ts)<br>[web/i18n/zh-Hant/oauth.json](../../../../sources/langgenius__dify/web/i18n/zh-Hant/oauth.json) |
| ci | 32 | [.github/workflows/api-tests.yml](../../../../sources/langgenius__dify/.github/workflows/api-tests.yml)<br>[.github/workflows/autofix.yml](../../../../sources/langgenius__dify/.github/workflows/autofix.yml)<br>[.github/workflows/build-push.yml](../../../../sources/langgenius__dify/.github/workflows/build-push.yml)<br>[.github/workflows/cli-e2e.yml](../../../../sources/langgenius__dify/.github/workflows/cli-e2e.yml)<br>[.github/workflows/cli-edge.yml](../../../../sources/langgenius__dify/.github/workflows/cli-edge.yml)<br>[.github/workflows/cli-release.yml](../../../../sources/langgenius__dify/.github/workflows/cli-release.yml)<br>[.github/workflows/cli-smoke.yml](../../../../sources/langgenius__dify/.github/workflows/cli-smoke.yml)<br>[.github/workflows/cli-tests.yml](../../../../sources/langgenius__dify/.github/workflows/cli-tests.yml) |
| container | 15 | [web/Dockerfile](../../../../sources/langgenius__dify/web/Dockerfile)<br>[web/Dockerfile.dockerignore](../../../../sources/langgenius__dify/web/Dockerfile.dockerignore)<br>[web/public/vs/basic-languages/dockerfile/dockerfile.js](../../../../sources/langgenius__dify/web/public/vs/basic-languages/dockerfile/dockerfile.js)<br>[docker/docker-compose-template.yaml](../../../../sources/langgenius__dify/docker/docker-compose-template.yaml)<br>[docker/docker-compose.middleware.yaml](../../../../sources/langgenius__dify/docker/docker-compose.middleware.yaml)<br>[docker/docker-compose.png](../../../../sources/langgenius__dify/docker/docker-compose.png)<br>[docker/docker-compose.pytest.ports.yaml](../../../../sources/langgenius__dify/docker/docker-compose.pytest.ports.yaml)<br>[docker/docker-compose.yaml](../../../../sources/langgenius__dify/docker/docker-compose.yaml) |
| instruction | 8 | [AGENTS.md](../../../../sources/langgenius__dify/AGENTS.md)<br>[web/AGENTS.md](../../../../sources/langgenius__dify/web/AGENTS.md)<br>[packages/dify-ui/AGENTS.md](../../../../sources/langgenius__dify/packages/dify-ui/AGENTS.md)<br>[e2e/AGENTS.md](../../../../sources/langgenius__dify/e2e/AGENTS.md)<br>[dify-agent/AGENTS.md](../../../../sources/langgenius__dify/dify-agent/AGENTS.md)<br>[cli/AGENTS.md](../../../../sources/langgenius__dify/cli/AGENTS.md)<br>[cli/src/commands/AGENTS.md](../../../../sources/langgenius__dify/cli/src/commands/AGENTS.md)<br>[api/AGENTS.md](../../../../sources/langgenius__dify/api/AGENTS.md) |
| docs | 139 | [README.md](../../../../sources/langgenius__dify/README.md)<br>[web/README.md](../../../../sources/langgenius__dify/web/README.md)<br>[web/i18n-config/README.md](../../../../sources/langgenius__dify/web/i18n-config/README.md)<br>[web/docs/lint.md](../../../../sources/langgenius__dify/web/docs/lint.md)<br>[web/docs/overlay.md](../../../../sources/langgenius__dify/web/docs/overlay.md)<br>[web/docs/test.md](../../../../sources/langgenius__dify/web/docs/test.md)<br>[web/app/components/plugins/readme-panel/constants.ts](../../../../sources/langgenius__dify/web/app/components/plugins/readme-panel/constants.ts)<br>[web/app/components/plugins/readme-panel/content.tsx](../../../../sources/langgenius__dify/web/app/components/plugins/readme-panel/content.tsx) |
| config | 64 | [Makefile](../../../../sources/langgenius__dify/Makefile)<br>[package.json](../../../../sources/langgenius__dify/package.json)<br>[pnpm-workspace.yaml](../../../../sources/langgenius__dify/pnpm-workspace.yaml)<br>[web/package.json](../../../../sources/langgenius__dify/web/package.json)<br>[web/tsconfig.json](../../../../sources/langgenius__dify/web/tsconfig.json)<br>[sdks/nodejs-client/package.json](../../../../sources/langgenius__dify/sdks/nodejs-client/package.json)<br>[sdks/nodejs-client/tsconfig.json](../../../../sources/langgenius__dify/sdks/nodejs-client/tsconfig.json)<br>[packages/tsconfig/package.json](../../../../sources/langgenius__dify/packages/tsconfig/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 4441 | [web/utils/app-redirection.spec.ts](../../../../sources/langgenius__dify/web/utils/app-redirection.spec.ts)<br>[web/utils/clipboard.spec.ts](../../../../sources/langgenius__dify/web/utils/clipboard.spec.ts)<br>[web/utils/completion-params.spec.ts](../../../../sources/langgenius__dify/web/utils/completion-params.spec.ts)<br>[web/utils/context.spec.ts](../../../../sources/langgenius__dify/web/utils/context.spec.ts)<br>[web/utils/download.spec.ts](../../../../sources/langgenius__dify/web/utils/download.spec.ts)<br>[web/utils/emoji.spec.ts](../../../../sources/langgenius__dify/web/utils/emoji.spec.ts) |
| CI workflows | 32 | [.github/workflows/api-tests.yml](../../../../sources/langgenius__dify/.github/workflows/api-tests.yml)<br>[.github/workflows/autofix.yml](../../../../sources/langgenius__dify/.github/workflows/autofix.yml)<br>[.github/workflows/build-push.yml](../../../../sources/langgenius__dify/.github/workflows/build-push.yml)<br>[.github/workflows/cli-e2e.yml](../../../../sources/langgenius__dify/.github/workflows/cli-e2e.yml)<br>[.github/workflows/cli-edge.yml](../../../../sources/langgenius__dify/.github/workflows/cli-edge.yml)<br>[.github/workflows/cli-release.yml](../../../../sources/langgenius__dify/.github/workflows/cli-release.yml) |
| Containers / deploy | 15 | [web/Dockerfile](../../../../sources/langgenius__dify/web/Dockerfile)<br>[web/Dockerfile.dockerignore](../../../../sources/langgenius__dify/web/Dockerfile.dockerignore)<br>[web/public/vs/basic-languages/dockerfile/dockerfile.js](../../../../sources/langgenius__dify/web/public/vs/basic-languages/dockerfile/dockerfile.js)<br>[docker/docker-compose-template.yaml](../../../../sources/langgenius__dify/docker/docker-compose-template.yaml)<br>[docker/docker-compose.middleware.yaml](../../../../sources/langgenius__dify/docker/docker-compose.middleware.yaml)<br>[docker/docker-compose.png](../../../../sources/langgenius__dify/docker/docker-compose.png) |
| Security / policy | 397 | [SECURITY.md](../../../../sources/langgenius__dify/SECURITY.md)<br>[web/utils/permission.spec.ts](../../../../sources/langgenius__dify/web/utils/permission.spec.ts)<br>[web/utils/permission.ts](../../../../sources/langgenius__dify/web/utils/permission.ts)<br>[web/service/use-oauth.ts](../../../../sources/langgenius__dify/web/service/use-oauth.ts)<br>[web/service/use-plugins-auth.ts](../../../../sources/langgenius__dify/web/service/use-plugins-auth.ts)<br>[web/service/webapp-auth.ts](../../../../sources/langgenius__dify/web/service/webapp-auth.ts) |
| Agent instructions | 8 | [AGENTS.md](../../../../sources/langgenius__dify/AGENTS.md)<br>[web/AGENTS.md](../../../../sources/langgenius__dify/web/AGENTS.md)<br>[packages/dify-ui/AGENTS.md](../../../../sources/langgenius__dify/packages/dify-ui/AGENTS.md)<br>[e2e/AGENTS.md](../../../../sources/langgenius__dify/e2e/AGENTS.md)<br>[dify-agent/AGENTS.md](../../../../sources/langgenius__dify/dify-agent/AGENTS.md)<br>[cli/AGENTS.md](../../../../sources/langgenius__dify/cli/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `web/utils/mcp.spec.ts`, `web/utils/mcp.ts`, `web/app/components/workflow/nodes/_base/components/mcp-tool-availability.tsx`.
2. Trace execution through entrypoints: `web/service/server.ts`, `web/service/__tests__/server.spec.ts`, `web/i18n-config/server.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `web/AGENTS.md`, `web/utils/context.spec.ts`.
4. Inspect retrieval/memory/indexing through: `web/utils/index.spec.ts`, `web/utils/index.ts`, `web/service/knowledge/use-create-dataset.ts`.
5. Verify behavior through test/eval files: `web/utils/app-redirection.spec.ts`, `web/utils/clipboard.spec.ts`, `web/utils/completion-params.spec.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Production ready platform for agentic workflow development.. 핵심 구조 신호는 TypeScript, package.json, Makefile, README.md, AGENTS.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
