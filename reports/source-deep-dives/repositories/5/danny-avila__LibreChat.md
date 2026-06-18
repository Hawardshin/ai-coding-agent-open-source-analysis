# danny-avila/LibreChat Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Enhanced ChatGPT Clone: Features Agents, MCP, Skills, DeepSeek, Anthropic, AWS, OpenAI, Responses API, Azure, Groq, o1, GPT-5, Mistral, OpenRouter, Vertex AI, Gemini, Artifacts, AI model switching, message search, Code Interpreter, langchain, DALL-E-3, OpenAPI Actions, Functions, Secure Multi-User Auth, Presets, open-source for self-hosting. Active

## 요약

- 조사 단위: `sources/danny-avila__LibreChat` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,351 files, 529 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/data-schemas/src/types/mcp.ts, packages/data-provider/src/mcp.ts, packages/data-provider/specs/mcp.spec.ts이고, 의존성 단서는 next, react, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | danny-avila/LibreChat |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 39364 |
| Forks | 8077 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/danny-avila__LibreChat](../../../../sources/danny-avila__LibreChat) |
| Existing report | [reports/global-trending/repositories/danny-avila__LibreChat.md](../../../global-trending/repositories/danny-avila__LibreChat.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3351 / 529 |
| Max observed depth | 9 |
| Top directories | .devcontainer, .do, .github, .husky, api, client, config, e2e, helm, packages, redis-config, scripts, skill, src, utils |
| Top extensions | .ts: 1503, .tsx: 959, .js: 543, .json: 109, .yml: 42, .svg: 25, .yaml: 25, .png: 21, .md: 20, (none): 17, .sh: 12, .cjs: 9 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/data-schemas | packages workspace | 117 |
| packages/api | packages workspace | 98 |
| packages/client | packages workspace | 25 |
| packages/data-provider | packages workspace | 12 |
| client | source boundary | 6 |
| api | source boundary | 2 |
| src | source boundary | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| e2e | validation surface | 1 |
| helm | deployment surface | 1 |
| packages | source boundary | 1 |
| redis-config | top-level component | 1 |
| scripts | top-level component | 1 |
| skill | top-level component | 1 |
| utils | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | update | node config/update.js |
| utility | package.json | add-balance | node config/add-balance.js |
| utility | package.json | set-balance | node config/set-balance.js |
| utility | package.json | list-balances | node config/list-balances.js |
| utility | package.json | user-stats | node config/user-stats.js |
| build | package.json | rebuild:package-lock | node config/packages |
| utility | package.json | reinstall | node config/update.js -l -g |
| utility | package.json | smart-reinstall | node config/smart-reinstall.js |
| utility | package.json | b:reinstall | bun config/update.js -b -l -g |
| container | package.json | reinstall:docker | node config/update.js -d -g |
| utility | package.json | update:local | node config/update.js -l |
| container | package.json | update:docker | node config/update.js -d |
| utility | package.json | update:single | node config/update.js -s |
| utility | package.json | update:sudo | node config/update.js --sudo |
| utility | package.json | update:deployed | node config/deployed-update.js |
| utility | package.json | rebase:deployed | node config/deployed-update.js --rebase |
| serve-dev | package.json | start:deployed | docker compose -f ./deploy-compose.yml up -d \|\| docker-compose -f ./deploy-compose.yml up -d |
| container | package.json | stop:deployed | docker compose -f ./deploy-compose.yml down \|\| docker-compose -f ./deploy-compose.yml down |
| utility | package.json | upgrade | node config/upgrade.js |
| utility | package.json | create-user | node config/create-user.js |
| serve-dev | package.json | invite-user | node config/invite-user.js |
| utility | package.json | list-users | node config/list-users.js |
| utility | package.json | reset-password | node config/reset-password.js |
| utility | package.json | ban-user | node config/ban-user.js |
| utility | package.json | delete-user | node config/delete-user.js |
| utility | package.json | reset-meili-sync | node config/reset-meili-sync.js |
| utility | package.json | update-banner | node config/update-banner.js |
| utility | package.json | delete-banner | node config/delete-banner.js |
| serve-dev | package.json | backend | cross-env NODE_ENV=production node api/server/index.js |
| test | package.json | backend:inspect | cross-env NODE_ENV=production node --inspect --expose-gc api/server/index.js |
| serve-dev | package.json | backend:dev | cross-env NODE_ENV=development npx nodemon api/server/index.js |
| serve-dev | package.json | backend:experimental | cross-env NODE_ENV=production node api/server/experimental.js |
| utility | package.json | backend:stop | node config/stop-backend.js |
| build | package.json | build:data-provider | cd packages/data-provider && npm run build |
| build | package.json | build:api | cd packages/api && npm run build |
| build | package.json | build:data-schemas | cd packages/data-schemas && npm run build |
| build | package.json | build:client | cd client && npm run build |
| build | package.json | build:client-package | cd packages/client && npm run build |
| build | package.json | build:packages | npm run build:data-provider && npm run build:data-schemas && npm run build:api && npm run build:client-package |
| build | package.json | build | npx turbo run build |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | next, react |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [packages/data-schemas/src/types/mcp.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/types/mcp.ts) | mcp signal |
| mcp | [packages/data-provider/src/mcp.ts](../../../../sources/danny-avila__LibreChat/packages/data-provider/src/mcp.ts) | mcp signal |
| mcp | [packages/data-provider/specs/mcp.spec.ts](../../../../sources/danny-avila__LibreChat/packages/data-provider/specs/mcp.spec.ts) | mcp signal |
| mcp | [packages/api/src/mcp/auth.ts](../../../../sources/danny-avila__LibreChat/packages/api/src/mcp/auth.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/danny-avila__LibreChat/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skill/README.md](../../../../sources/danny-avila__LibreChat/skill/README.md) | agentRuntime signal |
| agentRuntime | [packages/data-schemas/src/types/agent.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/types/agent.ts) | agentRuntime signal |
| agentRuntime | [packages/data-schemas/src/types/memory.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/types/memory.ts) | agentRuntime signal |
| entrypoints | [redis-config/certs/server.conf](../../../../sources/danny-avila__LibreChat/redis-config/certs/server.conf) | entrypoints signal |
| entrypoints | [packages/data-schemas/src/index.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/index.ts) | entrypoints signal |
| entrypoints | [packages/data-provider/src/index.ts](../../../../sources/danny-avila__LibreChat/packages/data-provider/src/index.ts) | entrypoints signal |
| entrypoints | [packages/client/src/index.ts](../../../../sources/danny-avila__LibreChat/packages/client/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 8 | [redis-config/certs/server.conf](../../../../sources/danny-avila__LibreChat/redis-config/certs/server.conf)<br>[packages/data-schemas/src/index.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/index.ts)<br>[packages/data-provider/src/index.ts](../../../../sources/danny-avila__LibreChat/packages/data-provider/src/index.ts)<br>[packages/client/src/index.ts](../../../../sources/danny-avila__LibreChat/packages/client/src/index.ts)<br>[packages/api/src/index.ts](../../../../sources/danny-avila__LibreChat/packages/api/src/index.ts)<br>[config/translations/main.ts](../../../../sources/danny-avila__LibreChat/config/translations/main.ts)<br>[client/src/App.jsx](../../../../sources/danny-avila__LibreChat/client/src/App.jsx)<br>[client/src/main.jsx](../../../../sources/danny-avila__LibreChat/client/src/main.jsx) |
| agentRuntime | 632 | [AGENTS.md](../../../../sources/danny-avila__LibreChat/AGENTS.md)<br>[skill/README.md](../../../../sources/danny-avila__LibreChat/skill/README.md)<br>[packages/data-schemas/src/types/agent.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/types/agent.ts)<br>[packages/data-schemas/src/types/memory.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/types/memory.ts)<br>[packages/data-schemas/src/types/skill.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/types/skill.ts)<br>[packages/data-schemas/src/schema/agent.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/schema/agent.ts)<br>[packages/data-schemas/src/schema/memory.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/schema/memory.ts)<br>[packages/data-schemas/src/schema/skill.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/schema/skill.ts) |
| mcp | 133 | [packages/data-schemas/src/types/mcp.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/types/mcp.ts)<br>[packages/data-provider/src/mcp.ts](../../../../sources/danny-avila__LibreChat/packages/data-provider/src/mcp.ts)<br>[packages/data-provider/specs/mcp.spec.ts](../../../../sources/danny-avila__LibreChat/packages/data-provider/specs/mcp.spec.ts)<br>[packages/api/src/mcp/auth.ts](../../../../sources/danny-avila__LibreChat/packages/api/src/mcp/auth.ts)<br>[packages/api/src/mcp/cache.ts](../../../../sources/danny-avila__LibreChat/packages/api/src/mcp/cache.ts)<br>[packages/api/src/mcp/connection.ts](../../../../sources/danny-avila__LibreChat/packages/api/src/mcp/connection.ts)<br>[packages/api/src/mcp/ConnectionsRepository.ts](../../../../sources/danny-avila__LibreChat/packages/api/src/mcp/ConnectionsRepository.ts)<br>[packages/api/src/mcp/enum.ts](../../../../sources/danny-avila__LibreChat/packages/api/src/mcp/enum.ts) |
| retrieval | 264 | [rag.yml](../../../../sources/danny-avila__LibreChat/rag.yml)<br>[packages/data-schemas/src/index.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/index.ts)<br>[packages/data-schemas/src/utils/index.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/utils/index.ts)<br>[packages/data-schemas/src/types/index.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/types/index.ts)<br>[packages/data-schemas/src/types/memory.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/types/memory.ts)<br>[packages/data-schemas/src/schema/index.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/schema/index.ts)<br>[packages/data-schemas/src/schema/memory.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/schema/memory.ts)<br>[packages/data-schemas/src/models/index.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/models/index.ts) |
| spec | 547 | [packages/data-schemas/tsconfig.spec.json](../../../../sources/danny-avila__LibreChat/packages/data-schemas/tsconfig.spec.json)<br>[packages/data-schemas/src/utils/tempChatRetention.spec.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/utils/tempChatRetention.spec.ts)<br>[packages/data-schemas/src/utils/tenantBulkWrite.spec.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/utils/tenantBulkWrite.spec.ts)<br>[packages/data-schemas/src/models/plugins/mongoMeili.spec.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/models/plugins/mongoMeili.spec.ts)<br>[packages/data-schemas/src/models/plugins/tenantIsolation.coverage.spec.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/models/plugins/tenantIsolation.coverage.spec.ts)<br>[packages/data-schemas/src/models/plugins/tenantIsolation.spec.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/models/plugins/tenantIsolation.spec.ts)<br>[packages/data-schemas/src/migrations/tenantIndexes.spec.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/migrations/tenantIndexes.spec.ts)<br>[packages/data-schemas/src/methods/accessRole.spec.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/methods/accessRole.spec.ts) |
| eval | 779 | [utils/docker/test-compose.yml](../../../../sources/danny-avila__LibreChat/utils/docker/test-compose.yml)<br>[src/tests/oidc-integration.test.ts](../../../../sources/danny-avila__LibreChat/src/tests/oidc-integration.test.ts)<br>[packages/data-schemas/tsconfig.spec.json](../../../../sources/danny-avila__LibreChat/packages/data-schemas/tsconfig.spec.json)<br>[packages/data-schemas/src/utils/tempChatRetention.spec.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/utils/tempChatRetention.spec.ts)<br>[packages/data-schemas/src/utils/tenantBulkWrite.spec.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/utils/tenantBulkWrite.spec.ts)<br>[packages/data-schemas/src/models/plugins/mongoMeili.spec.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/models/plugins/mongoMeili.spec.ts)<br>[packages/data-schemas/src/models/plugins/tenantIsolation.coverage.spec.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/models/plugins/tenantIsolation.coverage.spec.ts)<br>[packages/data-schemas/src/models/plugins/tenantIsolation.spec.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/models/plugins/tenantIsolation.spec.ts) |
| security | 103 | [packages/api/src/oauth/callback.spec.ts](../../../../sources/danny-avila__LibreChat/packages/api/src/oauth/callback.spec.ts)<br>[packages/api/src/oauth/callback.ts](../../../../sources/danny-avila__LibreChat/packages/api/src/oauth/callback.ts)<br>[packages/api/src/oauth/csrf.spec.ts](../../../../sources/danny-avila__LibreChat/packages/api/src/oauth/csrf.spec.ts)<br>[packages/api/src/oauth/csrf.ts](../../../../sources/danny-avila__LibreChat/packages/api/src/oauth/csrf.ts)<br>[packages/api/src/oauth/failure.spec.ts](../../../../sources/danny-avila__LibreChat/packages/api/src/oauth/failure.spec.ts)<br>[packages/api/src/oauth/failure.ts](../../../../sources/danny-avila__LibreChat/packages/api/src/oauth/failure.ts)<br>[packages/api/src/oauth/index.ts](../../../../sources/danny-avila__LibreChat/packages/api/src/oauth/index.ts)<br>[packages/api/src/oauth/tokens.spec.ts](../../../../sources/danny-avila__LibreChat/packages/api/src/oauth/tokens.spec.ts) |
| ci | 29 | [.github/workflows/a11y.yml](../../../../sources/danny-avila__LibreChat/.github/workflows/a11y.yml)<br>[.github/workflows/backend-review.yml](../../../../sources/danny-avila__LibreChat/.github/workflows/backend-review.yml)<br>[.github/workflows/build.yml](../../../../sources/danny-avila__LibreChat/.github/workflows/build.yml)<br>[.github/workflows/cache-integration-tests.yml](../../../../sources/danny-avila__LibreChat/.github/workflows/cache-integration-tests.yml)<br>[.github/workflows/client.yml](../../../../sources/danny-avila__LibreChat/.github/workflows/client.yml)<br>[.github/workflows/config-review.yml](../../../../sources/danny-avila__LibreChat/.github/workflows/config-review.yml)<br>[.github/workflows/data-provider.yml](../../../../sources/danny-avila__LibreChat/.github/workflows/data-provider.yml)<br>[.github/workflows/data-schemas.yml](../../../../sources/danny-avila__LibreChat/.github/workflows/data-schemas.yml) |
| container | 39 | [docker-compose.override.yml.example](../../../../sources/danny-avila__LibreChat/docker-compose.override.yml.example)<br>[docker-compose.yml](../../../../sources/danny-avila__LibreChat/docker-compose.yml)<br>[Dockerfile](../../../../sources/danny-avila__LibreChat/Dockerfile)<br>[Dockerfile.multi](../../../../sources/danny-avila__LibreChat/Dockerfile.multi)<br>[packages/data-schemas/misc/ferretdb/docker-compose.ferretdb.yml](../../../../sources/danny-avila__LibreChat/packages/data-schemas/misc/ferretdb/docker-compose.ferretdb.yml)<br>[helm/librechat-rag-api/Chart.yaml](../../../../sources/danny-avila__LibreChat/helm/librechat-rag-api/Chart.yaml)<br>[helm/librechat-rag-api/readme.md](../../../../sources/danny-avila__LibreChat/helm/librechat-rag-api/readme.md)<br>[helm/librechat-rag-api/values.yaml](../../../../sources/danny-avila__LibreChat/helm/librechat-rag-api/values.yaml) |
| instruction | 2 | [AGENTS.md](../../../../sources/danny-avila__LibreChat/AGENTS.md)<br>[CLAUDE.md](../../../../sources/danny-avila__LibreChat/CLAUDE.md) |
| docs | 11 | [README.md](../../../../sources/danny-avila__LibreChat/README.md)<br>[README.zh.md](../../../../sources/danny-avila__LibreChat/README.zh.md)<br>[skill/README.md](../../../../sources/danny-avila__LibreChat/skill/README.md)<br>[redis-config/README.md](../../../../sources/danny-avila__LibreChat/redis-config/README.md)<br>[packages/data-schemas/README.md](../../../../sources/danny-avila__LibreChat/packages/data-schemas/README.md)<br>[packages/client/src/theme/README.md](../../../../sources/danny-avila__LibreChat/packages/client/src/theme/README.md)<br>[helm/librechat-rag-api/readme.md](../../../../sources/danny-avila__LibreChat/helm/librechat-rag-api/readme.md)<br>[helm/librechat/readme.md](../../../../sources/danny-avila__LibreChat/helm/librechat/readme.md) |
| config | 16 | [package.json](../../../../sources/danny-avila__LibreChat/package.json)<br>[turbo.json](../../../../sources/danny-avila__LibreChat/turbo.json)<br>[packages/data-schemas/package.json](../../../../sources/danny-avila__LibreChat/packages/data-schemas/package.json)<br>[packages/data-schemas/tsconfig.json](../../../../sources/danny-avila__LibreChat/packages/data-schemas/tsconfig.json)<br>[packages/data-schemas/misc/ferretdb/tsconfig.json](../../../../sources/danny-avila__LibreChat/packages/data-schemas/misc/ferretdb/tsconfig.json)<br>[packages/data-provider/package.json](../../../../sources/danny-avila__LibreChat/packages/data-provider/package.json)<br>[packages/data-provider/tsconfig.json](../../../../sources/danny-avila__LibreChat/packages/data-provider/tsconfig.json)<br>[packages/data-provider/react-query/package.json](../../../../sources/danny-avila__LibreChat/packages/data-provider/react-query/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 779 | [utils/docker/test-compose.yml](../../../../sources/danny-avila__LibreChat/utils/docker/test-compose.yml)<br>[src/tests/oidc-integration.test.ts](../../../../sources/danny-avila__LibreChat/src/tests/oidc-integration.test.ts)<br>[packages/data-schemas/tsconfig.spec.json](../../../../sources/danny-avila__LibreChat/packages/data-schemas/tsconfig.spec.json)<br>[packages/data-schemas/src/utils/tempChatRetention.spec.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/utils/tempChatRetention.spec.ts)<br>[packages/data-schemas/src/utils/tenantBulkWrite.spec.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/utils/tenantBulkWrite.spec.ts)<br>[packages/data-schemas/src/models/plugins/mongoMeili.spec.ts](../../../../sources/danny-avila__LibreChat/packages/data-schemas/src/models/plugins/mongoMeili.spec.ts) |
| CI workflows | 29 | [.github/workflows/a11y.yml](../../../../sources/danny-avila__LibreChat/.github/workflows/a11y.yml)<br>[.github/workflows/backend-review.yml](../../../../sources/danny-avila__LibreChat/.github/workflows/backend-review.yml)<br>[.github/workflows/build.yml](../../../../sources/danny-avila__LibreChat/.github/workflows/build.yml)<br>[.github/workflows/cache-integration-tests.yml](../../../../sources/danny-avila__LibreChat/.github/workflows/cache-integration-tests.yml)<br>[.github/workflows/client.yml](../../../../sources/danny-avila__LibreChat/.github/workflows/client.yml)<br>[.github/workflows/config-review.yml](../../../../sources/danny-avila__LibreChat/.github/workflows/config-review.yml) |
| Containers / deploy | 39 | [docker-compose.override.yml.example](../../../../sources/danny-avila__LibreChat/docker-compose.override.yml.example)<br>[docker-compose.yml](../../../../sources/danny-avila__LibreChat/docker-compose.yml)<br>[Dockerfile](../../../../sources/danny-avila__LibreChat/Dockerfile)<br>[Dockerfile.multi](../../../../sources/danny-avila__LibreChat/Dockerfile.multi)<br>[packages/data-schemas/misc/ferretdb/docker-compose.ferretdb.yml](../../../../sources/danny-avila__LibreChat/packages/data-schemas/misc/ferretdb/docker-compose.ferretdb.yml)<br>[helm/librechat-rag-api/Chart.yaml](../../../../sources/danny-avila__LibreChat/helm/librechat-rag-api/Chart.yaml) |
| Security / policy | 103 | [packages/api/src/oauth/callback.spec.ts](../../../../sources/danny-avila__LibreChat/packages/api/src/oauth/callback.spec.ts)<br>[packages/api/src/oauth/callback.ts](../../../../sources/danny-avila__LibreChat/packages/api/src/oauth/callback.ts)<br>[packages/api/src/oauth/csrf.spec.ts](../../../../sources/danny-avila__LibreChat/packages/api/src/oauth/csrf.spec.ts)<br>[packages/api/src/oauth/csrf.ts](../../../../sources/danny-avila__LibreChat/packages/api/src/oauth/csrf.ts)<br>[packages/api/src/oauth/failure.spec.ts](../../../../sources/danny-avila__LibreChat/packages/api/src/oauth/failure.spec.ts)<br>[packages/api/src/oauth/failure.ts](../../../../sources/danny-avila__LibreChat/packages/api/src/oauth/failure.ts) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/danny-avila__LibreChat/AGENTS.md)<br>[CLAUDE.md](../../../../sources/danny-avila__LibreChat/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `packages/data-schemas/src/types/mcp.ts`, `packages/data-provider/src/mcp.ts`, `packages/data-provider/specs/mcp.spec.ts`.
2. Trace execution through entrypoints: `redis-config/certs/server.conf`, `packages/data-schemas/src/index.ts`, `packages/data-provider/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `skill/README.md`, `packages/data-schemas/src/types/agent.ts`.
4. Inspect retrieval/memory/indexing through: `rag.yml`, `packages/data-schemas/src/index.ts`, `packages/data-schemas/src/utils/index.ts`.
5. Verify behavior through test/eval files: `utils/docker/test-compose.yml`, `src/tests/oidc-integration.test.ts`, `packages/data-schemas/tsconfig.spec.json`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Enhanced ChatGPT Clone Features Agents, MCP, Skills, DeepSeek, Anthropic, AWS, OpenAI, Responses API, Azure, Groq, o1, G. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, docker-compose.yml, README.md, AGENTS.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
