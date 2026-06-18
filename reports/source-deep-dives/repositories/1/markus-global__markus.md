# markus-global/markus Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Not another agent framework — an operating system for AI workforces. Autonomous agents coordinate, remember across sessions, review each other's work, and deliver while you sleep. One command. Zero dependencies. Manage your AI company from your phone.

## 요약

- 조사 단위: `sources/markus-global__markus` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 731 files, 123 directories, depth score 131, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/core/test/mcp-client.test.ts, packages/core/src/tools/markus-browser-mcp.ts, packages/core/src/tools/mcp-client.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | markus-global/markus |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 161 |
| Forks | 4 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/markus-global__markus](../../../../sources/markus-global__markus) |
| Existing report | [reports/global-trending/repositories/markus-global__markus.md](../../../global-trending/repositories/markus-global__markus.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 731 / 123 |
| Max observed depth | 6 |
| Top directories | .github, deploy, docs, examples, packages, scripts, templates |
| Top extensions | .ts: 452, .md: 96, .json: 85, .tsx: 54, .yaml: 7, .png: 6, .sh: 6, .mjs: 4, .yml: 4, (none): 4, .js: 3, .example: 2 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/org-manager | packages workspace | 32 |
| packages/core | packages workspace | 29 |
| packages/web-ui | packages workspace | 19 |
| packages/shared | packages workspace | 18 |
| docs | documentation surface | 17 |
| packages/storage | packages workspace | 9 |
| packages/cli | packages workspace | 8 |
| packages/gui | packages workspace | 7 |
| packages/a2a | packages workspace | 6 |
| packages/comms | packages workspace | 6 |
| packages/remote | packages workspace | 4 |
| packages/chrome-extension | packages workspace | 2 |
| .github | ci surface | 1 |
| deploy | deployment surface | 1 |
| examples | top-level component | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |
| templates | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | pnpm -r build |
| serve-dev | package.json | dev | pnpm build && concurrently -n api,ui -c blue,green "node packages/cli/dist/index.js start" "node scripts/wait-for-api.mjs && pnpm --filter @markus/web-ui dev" |
| serve-dev | package.json | dev:api | node packages/cli/dist/index.js start |
| serve-dev | package.json | dev:ui | pnpm --filter @markus/web-ui dev |
| serve-dev | package.json | dev:watch | pnpm build && concurrently -n tsc,api,ui -c gray,blue,green "pnpm -r --parallel --filter=!@markus/web-ui dev" "node packages/cli/dist/index.js start" "node scripts/wait-for-api.mjs && pnpm --filter @markus/web-ui dev" |
| quality | package.json | lint | eslint packages/*/src/ |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | test:coverage | vitest run --coverage |
| quality | package.json | typecheck | tsc -b && tsc --noEmit -p packages/web-ui |
| test | package.json | quality | npm run typecheck && npm run test |
| utility | package.json | clean | pnpm -r clean |
| test | package.json | test:gui | tsx test-gui-integration.ts |
| utility | package.json | example:gui | tsx examples/gui-automation-workflow.ts |
| build | package.json | markus | node packages/cli/dist/index.js |
| build | package.json | build:publish | pnpm build && pnpm --filter @markus/web-ui build && pnpm --filter @markus-global/cli build:bundle |


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
| mcp | [packages/core/test/mcp-client.test.ts](../../../../sources/markus-global__markus/packages/core/test/mcp-client.test.ts) | mcp signal |
| mcp | [packages/core/src/tools/markus-browser-mcp.ts](../../../../sources/markus-global__markus/packages/core/src/tools/markus-browser-mcp.ts) | mcp signal |
| mcp | [packages/core/src/tools/mcp-client.ts](../../../../sources/markus-global__markus/packages/core/src/tools/mcp-client.ts) | mcp signal |
| agentRuntime | [templates/skills/workflow-building/skill.json](../../../../sources/markus-global__markus/templates/skills/workflow-building/skill.json) | agentRuntime signal |
| agentRuntime | [templates/skills/workflow-building/SKILL.md](../../../../sources/markus-global__markus/templates/skills/workflow-building/SKILL.md) | agentRuntime signal |
| agentRuntime | [templates/skills/team-building/skill.json](../../../../sources/markus-global__markus/templates/skills/team-building/skill.json) | agentRuntime signal |
| agentRuntime | [templates/skills/team-building/SKILL.md](../../../../sources/markus-global__markus/templates/skills/team-building/SKILL.md) | agentRuntime signal |
| entrypoints | [templates/skills/markus-hub-connector/server.mjs](../../../../sources/markus-global__markus/templates/skills/markus-hub-connector/server.mjs) | entrypoints signal |
| entrypoints | [packages/web-ui/src/App.tsx](../../../../sources/markus-global__markus/packages/web-ui/src/App.tsx) | entrypoints signal |
| entrypoints | [packages/web-ui/src/index.css](../../../../sources/markus-global__markus/packages/web-ui/src/index.css) | entrypoints signal |
| entrypoints | [packages/web-ui/src/main.tsx](../../../../sources/markus-global__markus/packages/web-ui/src/main.tsx) | entrypoints signal |
| instruction | [templates/openclaw-markus-skill/AGENTS.md](../../../../sources/markus-global__markus/templates/openclaw-markus-skill/AGENTS.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 13 | [templates/skills/markus-hub-connector/server.mjs](../../../../sources/markus-global__markus/templates/skills/markus-hub-connector/server.mjs)<br>[packages/web-ui/src/App.tsx](../../../../sources/markus-global__markus/packages/web-ui/src/App.tsx)<br>[packages/web-ui/src/index.css](../../../../sources/markus-global__markus/packages/web-ui/src/index.css)<br>[packages/web-ui/src/main.tsx](../../../../sources/markus-global__markus/packages/web-ui/src/main.tsx)<br>[packages/storage/src/index.ts](../../../../sources/markus-global__markus/packages/storage/src/index.ts)<br>[packages/shared/src/index.ts](../../../../sources/markus-global__markus/packages/shared/src/index.ts)<br>[packages/remote/src/index.ts](../../../../sources/markus-global__markus/packages/remote/src/index.ts)<br>[packages/org-manager/src/index.ts](../../../../sources/markus-global__markus/packages/org-manager/src/index.ts) |
| agentRuntime | 138 | [templates/skills/workflow-building/skill.json](../../../../sources/markus-global__markus/templates/skills/workflow-building/skill.json)<br>[templates/skills/workflow-building/SKILL.md](../../../../sources/markus-global__markus/templates/skills/workflow-building/SKILL.md)<br>[templates/skills/team-building/skill.json](../../../../sources/markus-global__markus/templates/skills/team-building/skill.json)<br>[templates/skills/team-building/SKILL.md](../../../../sources/markus-global__markus/templates/skills/team-building/SKILL.md)<br>[templates/skills/skill-building/skill.json](../../../../sources/markus-global__markus/templates/skills/skill-building/skill.json)<br>[templates/skills/skill-building/SKILL.md](../../../../sources/markus-global__markus/templates/skills/skill-building/SKILL.md)<br>[templates/skills/self-evolution/skill.json](../../../../sources/markus-global__markus/templates/skills/self-evolution/skill.json)<br>[templates/skills/self-evolution/SKILL.md](../../../../sources/markus-global__markus/templates/skills/self-evolution/SKILL.md) |
| mcp | 3 | [packages/core/test/mcp-client.test.ts](../../../../sources/markus-global__markus/packages/core/test/mcp-client.test.ts)<br>[packages/core/src/tools/markus-browser-mcp.ts](../../../../sources/markus-global__markus/packages/core/src/tools/markus-browser-mcp.ts)<br>[packages/core/src/tools/mcp-client.ts](../../../../sources/markus-global__markus/packages/core/src/tools/mcp-client.ts) |
| retrieval | 37 | [packages/web-ui/index.html](../../../../sources/markus-global__markus/packages/web-ui/index.html)<br>[packages/web-ui/src/index.css](../../../../sources/markus-global__markus/packages/web-ui/src/index.css)<br>[packages/web-ui/src/transport/index.ts](../../../../sources/markus-global__markus/packages/web-ui/src/transport/index.ts)<br>[packages/web-ui/src/showcase/index.ts](../../../../sources/markus-global__markus/packages/web-ui/src/showcase/index.ts)<br>[packages/web-ui/src/i18n/index.ts](../../../../sources/markus-global__markus/packages/web-ui/src/i18n/index.ts)<br>[packages/storage/src/index.ts](../../../../sources/markus-global__markus/packages/storage/src/index.ts)<br>[packages/shared/src/index.ts](../../../../sources/markus-global__markus/packages/shared/src/index.ts)<br>[packages/remote/src/index.ts](../../../../sources/markus-global__markus/packages/remote/src/index.ts) |
| spec | 8 | [packages/shared/src/types/requirement.ts](../../../../sources/markus-global__markus/packages/shared/src/types/requirement.ts)<br>[packages/org-manager/test/requirement-service.test.ts](../../../../sources/markus-global__markus/packages/org-manager/test/requirement-service.test.ts)<br>[packages/org-manager/src/requirement-service.ts](../../../../sources/markus-global__markus/packages/org-manager/src/requirement-service.ts)<br>[packages/gui/ARCHITECTURE.md](../../../../sources/markus-global__markus/packages/gui/ARCHITECTURE.md)<br>[packages/a2a/docs/structured-message-design.md](../../../../sources/markus-global__markus/packages/a2a/docs/structured-message-design.md)<br>[docs/ARCHITECTURE.md](../../../../sources/markus-global__markus/docs/ARCHITECTURE.md)<br>[docs/COGNITIVE-ARCHITECTURE.md](../../../../sources/markus-global__markus/docs/COGNITIVE-ARCHITECTURE.md)<br>[docs/model-routing-architecture.md](../../../../sources/markus-global__markus/docs/model-routing-architecture.md) |
| eval | 209 | [run-parser-tests.ts](../../../../sources/markus-global__markus/run-parser-tests.ts)<br>[TEST-ISSUES.md](../../../../sources/markus-global__markus/TEST-ISSUES.md)<br>[packages/storage/test/edge-cases.test.ts](../../../../sources/markus-global__markus/packages/storage/test/edge-cases.test.ts)<br>[packages/storage/test/sqlite-comprehensive.test.ts](../../../../sources/markus-global__markus/packages/storage/test/sqlite-comprehensive.test.ts)<br>[packages/storage/test/sqlite-repos.test.ts](../../../../sources/markus-global__markus/packages/storage/test/sqlite-repos.test.ts)<br>[packages/storage/test/sqlite-storage.test.ts](../../../../sources/markus-global__markus/packages/storage/test/sqlite-storage.test.ts)<br>[packages/storage/test/status-transitions.test.ts](../../../../sources/markus-global__markus/packages/storage/test/status-transitions.test.ts)<br>[packages/shared/test/config.test.ts](../../../../sources/markus-global__markus/packages/shared/test/config.test.ts) |
| security | 13 | [packages/web-ui/src/locales/zh-CN/auth.json](../../../../sources/markus-global__markus/packages/web-ui/src/locales/zh-CN/auth.json)<br>[packages/web-ui/src/locales/en/auth.json](../../../../sources/markus-global__markus/packages/web-ui/src/locales/en/auth.json)<br>[packages/org-manager/test/api-keys-auth.test.ts](../../../../sources/markus-global__markus/packages/org-manager/test/api-keys-auth.test.ts)<br>[packages/org-manager/test/audit-service.test.ts](../../../../sources/markus-global__markus/packages/org-manager/test/audit-service.test.ts)<br>[packages/org-manager/src/audit-service.ts](../../../../sources/markus-global__markus/packages/org-manager/src/audit-service.ts)<br>[packages/core/test/llm-auth-profiles.test.ts](../../../../sources/markus-global__markus/packages/core/test/llm-auth-profiles.test.ts)<br>[packages/core/test/llm-oauth-manager.test.ts](../../../../sources/markus-global__markus/packages/core/test/llm-oauth-manager.test.ts)<br>[packages/core/test/security.test.ts](../../../../sources/markus-global__markus/packages/core/test/security.test.ts) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/markus-global__markus/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/markus-global__markus/.github/workflows/publish.yml) |
| container | 8 | [Dockerfile](../../../../sources/markus-global__markus/Dockerfile)<br>[packages/gui/docker-compose.yml](../../../../sources/markus-global__markus/packages/gui/docker-compose.yml)<br>[deploy/.env.example](../../../../sources/markus-global__markus/deploy/.env.example)<br>[deploy/docker-compose.yml](../../../../sources/markus-global__markus/deploy/docker-compose.yml)<br>[deploy/k8s/deployment.yaml](../../../../sources/markus-global__markus/deploy/k8s/deployment.yaml)<br>[deploy/k8s/namespace.yaml](../../../../sources/markus-global__markus/deploy/k8s/namespace.yaml)<br>[deploy/k8s/secrets.yaml](../../../../sources/markus-global__markus/deploy/k8s/secrets.yaml)<br>[deploy/k8s/service.yaml](../../../../sources/markus-global__markus/deploy/k8s/service.yaml) |
| instruction | 1 | [templates/openclaw-markus-skill/AGENTS.md](../../../../sources/markus-global__markus/templates/openclaw-markus-skill/AGENTS.md) |
| docs | 17 | [README.md](../../../../sources/markus-global__markus/README.md)<br>[README.zh-CN.md](../../../../sources/markus-global__markus/README.zh-CN.md)<br>[packages/gui/README.md](../../../../sources/markus-global__markus/packages/gui/README.md)<br>[packages/cli/README.md](../../../../sources/markus-global__markus/packages/cli/README.md)<br>[packages/a2a/docs/structured-message-design.md](../../../../sources/markus-global__markus/packages/a2a/docs/structured-message-design.md)<br>[docs/API.md](../../../../sources/markus-global__markus/docs/API.md)<br>[docs/ARCHITECTURE.md](../../../../sources/markus-global__markus/docs/ARCHITECTURE.md)<br>[docs/COGNITIVE-ARCHITECTURE.md](../../../../sources/markus-global__markus/docs/COGNITIVE-ARCHITECTURE.md) |
| config | 25 | [package.json](../../../../sources/markus-global__markus/package.json)<br>[pnpm-workspace.yaml](../../../../sources/markus-global__markus/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/markus-global__markus/tsconfig.json)<br>[packages/web-ui/package.json](../../../../sources/markus-global__markus/packages/web-ui/package.json)<br>[packages/web-ui/tsconfig.json](../../../../sources/markus-global__markus/packages/web-ui/tsconfig.json)<br>[packages/storage/package.json](../../../../sources/markus-global__markus/packages/storage/package.json)<br>[packages/storage/tsconfig.json](../../../../sources/markus-global__markus/packages/storage/tsconfig.json)<br>[packages/shared/package.json](../../../../sources/markus-global__markus/packages/shared/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 209 | [run-parser-tests.ts](../../../../sources/markus-global__markus/run-parser-tests.ts)<br>[TEST-ISSUES.md](../../../../sources/markus-global__markus/TEST-ISSUES.md)<br>[packages/storage/test/edge-cases.test.ts](../../../../sources/markus-global__markus/packages/storage/test/edge-cases.test.ts)<br>[packages/storage/test/sqlite-comprehensive.test.ts](../../../../sources/markus-global__markus/packages/storage/test/sqlite-comprehensive.test.ts)<br>[packages/storage/test/sqlite-repos.test.ts](../../../../sources/markus-global__markus/packages/storage/test/sqlite-repos.test.ts)<br>[packages/storage/test/sqlite-storage.test.ts](../../../../sources/markus-global__markus/packages/storage/test/sqlite-storage.test.ts) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/markus-global__markus/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/markus-global__markus/.github/workflows/publish.yml) |
| Containers / deploy | 8 | [Dockerfile](../../../../sources/markus-global__markus/Dockerfile)<br>[packages/gui/docker-compose.yml](../../../../sources/markus-global__markus/packages/gui/docker-compose.yml)<br>[deploy/.env.example](../../../../sources/markus-global__markus/deploy/.env.example)<br>[deploy/docker-compose.yml](../../../../sources/markus-global__markus/deploy/docker-compose.yml)<br>[deploy/k8s/deployment.yaml](../../../../sources/markus-global__markus/deploy/k8s/deployment.yaml)<br>[deploy/k8s/namespace.yaml](../../../../sources/markus-global__markus/deploy/k8s/namespace.yaml) |
| Security / policy | 13 | [packages/web-ui/src/locales/zh-CN/auth.json](../../../../sources/markus-global__markus/packages/web-ui/src/locales/zh-CN/auth.json)<br>[packages/web-ui/src/locales/en/auth.json](../../../../sources/markus-global__markus/packages/web-ui/src/locales/en/auth.json)<br>[packages/org-manager/test/api-keys-auth.test.ts](../../../../sources/markus-global__markus/packages/org-manager/test/api-keys-auth.test.ts)<br>[packages/org-manager/test/audit-service.test.ts](../../../../sources/markus-global__markus/packages/org-manager/test/audit-service.test.ts)<br>[packages/org-manager/src/audit-service.ts](../../../../sources/markus-global__markus/packages/org-manager/src/audit-service.ts)<br>[packages/core/test/llm-auth-profiles.test.ts](../../../../sources/markus-global__markus/packages/core/test/llm-auth-profiles.test.ts) |
| Agent instructions | 1 | [templates/openclaw-markus-skill/AGENTS.md](../../../../sources/markus-global__markus/templates/openclaw-markus-skill/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/core/test/mcp-client.test.ts`, `packages/core/src/tools/markus-browser-mcp.ts`, `packages/core/src/tools/mcp-client.ts`.
2. Trace execution through entrypoints: `templates/skills/markus-hub-connector/server.mjs`, `packages/web-ui/src/App.tsx`, `packages/web-ui/src/index.css`.
3. Map agent/tool runtime through: `templates/skills/workflow-building/skill.json`, `templates/skills/workflow-building/SKILL.md`, `templates/skills/team-building/skill.json`.
4. Inspect retrieval/memory/indexing through: `packages/web-ui/index.html`, `packages/web-ui/src/index.css`, `packages/web-ui/src/transport/index.ts`.
5. Verify behavior through test/eval files: `run-parser-tests.ts`, `TEST-ISSUES.md`, `packages/storage/test/edge-cases.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Not another agent framework — an operating system for AI workforces. Autonomous agents coordinate, remember across sessi. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, LICENSE, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
