# inkeep/agents Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Create AI Agents in a No-Code Visual Builder or TypeScript SDK with full 2-way sync. For shipping AI assistants and multi-agent AI workflows.

## 요약

- 조사 단위: `sources/inkeep__agents` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 5,083 files, 748 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=test-agents/tools/invalid-mcp-tool.ts, test-agents/agents/invalid-mcp.ts, packages/agents-work-apps/src/slack/mcp/auth.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | inkeep/agents |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 1205 |
| Forks | 144 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/inkeep__agents](../../../../sources/inkeep__agents) |
| Existing report | [reports/global-trending/repositories/inkeep__agents.md](../../../global-trending/repositories/inkeep__agents.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 5083 / 748 |
| Max observed depth | 12 |
| Top directories | .ai-dev, .changeset, .cursor, .github, .husky, .opencode, agents-api, agents-cli, agents-cookbook, agents-docs, agents-manage-ui, agents-ui-demo, create-agents-template, packages, patches, scripts, test-agents |
| Top extensions | .ts: 3092, .tsx: 635, .svg: 452, .mdx: 236, .json: 175, .txt: 129, .png: 67, .sql: 67, .md: 54, .sh: 27, .yml: 23, (none): 18 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/agents-work-apps | packages workspace | 70 |
| packages/agents-core | packages workspace | 58 |
| packages/agents-mcp | packages workspace | 35 |
| packages/create-agents | packages workspace | 10 |
| packages/ai-sdk-provider | packages workspace | 9 |
| packages/agents-sdk | packages workspace | 6 |
| packages/agents-email | packages workspace | 4 |
| .github | ci surface | 1 |
| agents-api | source boundary | 1 |
| agents-cli | top-level component | 1 |
| agents-cookbook | top-level component | 1 |
| agents-docs | documentation surface | 1 |
| agents-manage-ui | top-level component | 1 |
| agents-ui-demo | top-level component | 1 |
| create-agents-template | top-level component | 1 |
| packages | source boundary | 1 |
| patches | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | sync:licenses | node scripts/sync-licenses.mjs |
| build | package.json | prebuild | pnpm install --frozen-lockfile && pnpm sync:licenses |
| build | package.json | build | turbo build --filter='!agents-cookbook-templates' |
| utility | package.json | knip | turbo knip |
| serve-dev | package.json | dev | turbo dev --filter=@inkeep/agents-api --filter=@inkeep/agents-manage-ui --filter=@inkeep/agents-docs --filter=@inkeep/agents-core --filter=@inkeep/agents-sdk |
| utility | package.json | prepack | pnpm sync:licenses && turbo prepack |
| serve-dev | package.json | dev:apis | turbo dev:apis |
| test | package.json | test | turbo test --filter='!agents-cookbook-templates' |
| test | package.json | test:e2e | turbo test:e2e |
| test | package.json | test:watch | turbo test:watch |
| test | package.json | test:coverage | turbo test:coverage --filter='!agents-cookbook-templates' |
| test | package.json | coverage | pnpm test:coverage && node scripts/merge-coverage.mjs && node scripts/generate-badges.mjs |
| test | package.json | coverage:report | node scripts/merge-coverage.mjs |
| test | package.json | coverage:badges | node scripts/generate-badges.mjs |
| test | package.json | coverage:diff | node scripts/coverage-diff.mjs |
| test | package.json | coverage:enforce | node scripts/enforce-coverage-change.mjs |
| test | package.json | coverage:check | pnpm coverage:diff && pnpm coverage:enforce |
| quality | package.json | lint | turbo lint |
| quality | package.json | lint:fix | turbo lint:fix |
| quality | package.json | format | pnpm format:check --write |
| quality | package.json | format:check | biome check --linter-enabled=false |
| quality | package.json | typecheck | turbo typecheck --filter='!agents-cookbook-templates' |
| serve-dev | package.json | typecheck:watch | turbo typecheck:watch |
| quality | package.json | check:fast | pnpm typecheck |
| quality | package.json | precheck | pnpm install --frozen-lockfile |
| quality | package.json | check | turbo check --filter='!agents-cookbook-templates' && pnpm format:check && pnpm check:env-descriptions && pnpm check:route-handler-patterns && pnpm check:dal-boundary && pnpm check:changeset-packages && pnpm check:package |
| quality | package.json | check:husky | turbo check:husky --filter='!agents-cookbook-templates' --filter='!@inkeep/agents-docs' |
| quality | package.json | check:prepush | turbo check:prepush --filter='!agents-cookbook-templates' --filter='!@inkeep/agents-docs' |
| quality | package.json | check:fix | biome check --write |
| utility | package.json | validate:ai-artifacts | pnpx tsx scripts/validate-ai-artifacts.ts |
| build | package.json | clean | pnpm -r --parallel exec rm -rf node_modules/ dist/ build/ .next/ .turbo/ |
| utility | package.json | clean:turbo | rm -rf .turbo/ |
| utility | package.json | turbo:login | turbo login && turbo link |
| utility | package.json | turbo:setup-cache | sh scripts/setup-turbo-cache.sh |
| utility | package.json | prepare | husky |
| utility | package.json | bump | node scripts/quick-changeset.mjs |
| utility | package.json | version | changeset version |
| build | package.json | release | changeset publish |
| serve-dev | package.json | release-dev | changeset version --snapshot dev && changeset publish --tag dev |
| utility | package.json | generate:keys | bash scripts/generate-jwt-keys.sh |


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
| mcp | [test-agents/tools/invalid-mcp-tool.ts](../../../../sources/inkeep__agents/test-agents/tools/invalid-mcp-tool.ts) | mcp signal |
| mcp | [test-agents/agents/invalid-mcp.ts](../../../../sources/inkeep__agents/test-agents/agents/invalid-mcp.ts) | mcp signal |
| mcp | [packages/agents-work-apps/src/slack/mcp/auth.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/mcp/auth.ts) | mcp signal |
| mcp | [packages/agents-work-apps/src/slack/mcp/index.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/mcp/index.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/inkeep__agents/AGENTS.md) | agentRuntime signal |
| agentRuntime | [test-agents/tools/bad-credential-403-tool.ts](../../../../sources/inkeep__agents/test-agents/tools/bad-credential-403-tool.ts) | agentRuntime signal |
| agentRuntime | [test-agents/tools/faulty-api-tool.ts](../../../../sources/inkeep__agents/test-agents/tools/faulty-api-tool.ts) | agentRuntime signal |
| entrypoints | [packages/create-agents/src/index.ts](../../../../sources/inkeep__agents/packages/create-agents/src/index.ts) | entrypoints signal |
| entrypoints | [packages/ai-sdk-provider/src/index.ts](../../../../sources/inkeep__agents/packages/ai-sdk-provider/src/index.ts) | entrypoints signal |
| entrypoints | [packages/agents-sdk/src/index.ts](../../../../sources/inkeep__agents/packages/agents-sdk/src/index.ts) | entrypoints signal |
| entrypoints | [packages/agents-mcp/src/index.ts](../../../../sources/inkeep__agents/packages/agents-mcp/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/inkeep__agents/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 18 | [packages/create-agents/src/index.ts](../../../../sources/inkeep__agents/packages/create-agents/src/index.ts)<br>[packages/ai-sdk-provider/src/index.ts](../../../../sources/inkeep__agents/packages/ai-sdk-provider/src/index.ts)<br>[packages/agents-sdk/src/index.ts](../../../../sources/inkeep__agents/packages/agents-sdk/src/index.ts)<br>[packages/agents-mcp/src/index.ts](../../../../sources/inkeep__agents/packages/agents-mcp/src/index.ts)<br>[packages/agents-mcp/src/mcp-server/server.ts](../../../../sources/inkeep__agents/packages/agents-mcp/src/mcp-server/server.ts)<br>[packages/agents-email/src/index.ts](../../../../sources/inkeep__agents/packages/agents-email/src/index.ts)<br>[packages/agents-core/src/index.ts](../../../../sources/inkeep__agents/packages/agents-core/src/index.ts)<br>[packages/agents-core/src/types/server.ts](../../../../sources/inkeep__agents/packages/agents-core/src/types/server.ts) |
| agentRuntime | 4900 | [AGENTS.md](../../../../sources/inkeep__agents/AGENTS.md)<br>[test-agents/tools/bad-credential-403-tool.ts](../../../../sources/inkeep__agents/test-agents/tools/bad-credential-403-tool.ts)<br>[test-agents/tools/faulty-api-tool.ts](../../../../sources/inkeep__agents/test-agents/tools/faulty-api-tool.ts)<br>[test-agents/tools/invalid-mcp-tool.ts](../../../../sources/inkeep__agents/test-agents/tools/invalid-mcp-tool.ts)<br>[test-agents/tools/parallel-tools.ts](../../../../sources/inkeep__agents/test-agents/tools/parallel-tools.ts)<br>[test-agents/tools/slow-tool.ts](../../../../sources/inkeep__agents/test-agents/tools/slow-tool.ts)<br>[test-agents/agents/bad-credential-403-agent.ts](../../../../sources/inkeep__agents/test-agents/agents/bad-credential-403-agent.ts)<br>[test-agents/agents/faulty-api-tool-agent.ts](../../../../sources/inkeep__agents/test-agents/agents/faulty-api-tool-agent.ts) |
| mcp | 1449 | [test-agents/tools/invalid-mcp-tool.ts](../../../../sources/inkeep__agents/test-agents/tools/invalid-mcp-tool.ts)<br>[test-agents/agents/invalid-mcp.ts](../../../../sources/inkeep__agents/test-agents/agents/invalid-mcp.ts)<br>[packages/agents-work-apps/src/slack/mcp/auth.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/mcp/auth.ts)<br>[packages/agents-work-apps/src/slack/mcp/index.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/mcp/index.ts)<br>[packages/agents-work-apps/src/slack/mcp/utils.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/mcp/utils.ts)<br>[packages/agents-work-apps/src/github/mcp/auth.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/github/mcp/auth.ts)<br>[packages/agents-work-apps/src/github/mcp/index.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/github/mcp/index.ts)<br>[packages/agents-work-apps/src/github/mcp/schemas.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/github/mcp/schemas.ts) |
| retrieval | 109 | [test-agents/index.ts](../../../../sources/inkeep__agents/test-agents/index.ts)<br>[scripts/cache-debug/index.ts](../../../../sources/inkeep__agents/scripts/cache-debug/index.ts)<br>[packages/create-agents/src/index.ts](../../../../sources/inkeep__agents/packages/create-agents/src/index.ts)<br>[packages/ai-sdk-provider/src/index.ts](../../../../sources/inkeep__agents/packages/ai-sdk-provider/src/index.ts)<br>[packages/agents-work-apps/src/slack/index.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/index.ts)<br>[packages/agents-work-apps/src/slack/services/index.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/services/index.ts)<br>[packages/agents-work-apps/src/slack/services/events/index.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/services/events/index.ts)<br>[packages/agents-work-apps/src/slack/services/commands/index.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/services/commands/index.ts) |
| spec | 1 | [agents-manage-ui/src/components/ui/password-requirements.tsx](../../../../sources/inkeep__agents/agents-manage-ui/src/components/ui/password-requirements.tsx) |
| eval | 861 | [test-agents/.gitignore](../../../../sources/inkeep__agents/test-agents/.gitignore)<br>[test-agents/CHANGELOG.md](../../../../sources/inkeep__agents/test-agents/CHANGELOG.md)<br>[test-agents/index.ts](../../../../sources/inkeep__agents/test-agents/index.ts)<br>[test-agents/inkeep.config.ts](../../../../sources/inkeep__agents/test-agents/inkeep.config.ts)<br>[test-agents/knip.config.ts](../../../../sources/inkeep__agents/test-agents/knip.config.ts)<br>[test-agents/package.json](../../../../sources/inkeep__agents/test-agents/package.json)<br>[test-agents/tools/bad-credential-403-tool.ts](../../../../sources/inkeep__agents/test-agents/tools/bad-credential-403-tool.ts)<br>[test-agents/tools/faulty-api-tool.ts](../../../../sources/inkeep__agents/test-agents/tools/faulty-api-tool.ts) |
| security | 123 | [scripts/setup-oauth-client.ts](../../../../sources/inkeep__agents/scripts/setup-oauth-client.ts)<br>[packages/agents-work-apps/src/slack/services/security.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/services/security.ts)<br>[packages/agents-work-apps/src/slack/routes/oauth.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/routes/oauth.ts)<br>[packages/agents-work-apps/src/slack/mcp/auth.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/mcp/auth.ts)<br>[packages/agents-work-apps/src/github/mcp/auth.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/github/mcp/auth.ts)<br>[packages/agents-work-apps/src/__tests__/slack/oauth.test.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/__tests__/slack/oauth.test.ts)<br>[packages/agents-work-apps/src/__tests__/slack/security.test.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/__tests__/slack/security.test.ts)<br>[packages/agents-work-apps/src/__tests__/slack/mcp/auth.test.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/__tests__/slack/mcp/auth.test.ts) |
| ci | 13 | [.github/workflows/auto-format.yml](../../../../sources/inkeep__agents/.github/workflows/auto-format.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/inkeep__agents/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/inkeep__agents/.github/workflows/claude.yml)<br>[.github/workflows/inkeep-content-writer.yml](../../../../sources/inkeep__agents/.github/workflows/inkeep-content-writer.yml)<br>[.github/workflows/inkeep-sync.yml](../../../../sources/inkeep__agents/.github/workflows/inkeep-sync.yml)<br>[.github/workflows/model-sync.yml](../../../../sources/inkeep__agents/.github/workflows/model-sync.yml)<br>[.github/workflows/monorepo-pr-bridge.yml](../../../../sources/inkeep__agents/.github/workflows/monorepo-pr-bridge.yml)<br>[.github/workflows/publish-skills.yml](../../../../sources/inkeep__agents/.github/workflows/publish-skills.yml) |
| container | 38 | [docker-compose.dbs.yml](../../../../sources/inkeep__agents/docker-compose.dbs.yml)<br>[docker-compose.isolated.yml](../../../../sources/inkeep__agents/docker-compose.isolated.yml)<br>[docker-compose.visual.yml](../../../../sources/inkeep__agents/docker-compose.visual.yml)<br>[docker-compose.yml](../../../../sources/inkeep__agents/docker-compose.yml)<br>[Dockerfile.manage-ui-test](../../../../sources/inkeep__agents/Dockerfile.manage-ui-test)<br>[create-agents-template/docker-compose.db.yml](../../../../sources/inkeep__agents/create-agents-template/docker-compose.db.yml)<br>[create-agents-template/docker-compose.yml](../../../../sources/inkeep__agents/create-agents-template/docker-compose.yml)<br>[create-agents-template/Dockerfile.agents-api](../../../../sources/inkeep__agents/create-agents-template/Dockerfile.agents-api) |
| instruction | 2 | [AGENTS.md](../../../../sources/inkeep__agents/AGENTS.md)<br>`agents-docs/content/api-reference/(openapi)/agents.mdx` |
| docs | 21 | [README.md](../../../../sources/inkeep__agents/README.md)<br>[scripts/workflows/README.md](../../../../sources/inkeep__agents/scripts/workflows/README.md)<br>[packages/create-agents/README.md](../../../../sources/inkeep__agents/packages/create-agents/README.md)<br>[packages/ai-sdk-provider/README.md](../../../../sources/inkeep__agents/packages/ai-sdk-provider/README.md)<br>[packages/agents-work-apps/src/slack/README.md](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/README.md)<br>[packages/agents-sdk/README.md](../../../../sources/inkeep__agents/packages/agents-sdk/README.md)<br>[packages/agents-mcp/README.md](../../../../sources/inkeep__agents/packages/agents-mcp/README.md)<br>[packages/agents-core/README.md](../../../../sources/inkeep__agents/packages/agents-core/README.md) |
| config | 49 | [package.json](../../../../sources/inkeep__agents/package.json)<br>[pnpm-workspace.yaml](../../../../sources/inkeep__agents/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/inkeep__agents/turbo.json)<br>[test-agents/package.json](../../../../sources/inkeep__agents/test-agents/package.json)<br>[packages/create-agents/package.json](../../../../sources/inkeep__agents/packages/create-agents/package.json)<br>[packages/create-agents/tsconfig.json](../../../../sources/inkeep__agents/packages/create-agents/tsconfig.json)<br>[packages/create-agents/turbo.json](../../../../sources/inkeep__agents/packages/create-agents/turbo.json)<br>[packages/ai-sdk-provider/package.json](../../../../sources/inkeep__agents/packages/ai-sdk-provider/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 861 | [test-agents/.gitignore](../../../../sources/inkeep__agents/test-agents/.gitignore)<br>[test-agents/CHANGELOG.md](../../../../sources/inkeep__agents/test-agents/CHANGELOG.md)<br>[test-agents/index.ts](../../../../sources/inkeep__agents/test-agents/index.ts)<br>[test-agents/inkeep.config.ts](../../../../sources/inkeep__agents/test-agents/inkeep.config.ts)<br>[test-agents/knip.config.ts](../../../../sources/inkeep__agents/test-agents/knip.config.ts)<br>[test-agents/package.json](../../../../sources/inkeep__agents/test-agents/package.json) |
| CI workflows | 13 | [.github/workflows/auto-format.yml](../../../../sources/inkeep__agents/.github/workflows/auto-format.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/inkeep__agents/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/inkeep__agents/.github/workflows/claude.yml)<br>[.github/workflows/inkeep-content-writer.yml](../../../../sources/inkeep__agents/.github/workflows/inkeep-content-writer.yml)<br>[.github/workflows/inkeep-sync.yml](../../../../sources/inkeep__agents/.github/workflows/inkeep-sync.yml)<br>[.github/workflows/model-sync.yml](../../../../sources/inkeep__agents/.github/workflows/model-sync.yml) |
| Containers / deploy | 38 | [docker-compose.dbs.yml](../../../../sources/inkeep__agents/docker-compose.dbs.yml)<br>[docker-compose.isolated.yml](../../../../sources/inkeep__agents/docker-compose.isolated.yml)<br>[docker-compose.visual.yml](../../../../sources/inkeep__agents/docker-compose.visual.yml)<br>[docker-compose.yml](../../../../sources/inkeep__agents/docker-compose.yml)<br>[Dockerfile.manage-ui-test](../../../../sources/inkeep__agents/Dockerfile.manage-ui-test)<br>[create-agents-template/docker-compose.db.yml](../../../../sources/inkeep__agents/create-agents-template/docker-compose.db.yml) |
| Security / policy | 123 | [scripts/setup-oauth-client.ts](../../../../sources/inkeep__agents/scripts/setup-oauth-client.ts)<br>[packages/agents-work-apps/src/slack/services/security.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/services/security.ts)<br>[packages/agents-work-apps/src/slack/routes/oauth.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/routes/oauth.ts)<br>[packages/agents-work-apps/src/slack/mcp/auth.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/mcp/auth.ts)<br>[packages/agents-work-apps/src/github/mcp/auth.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/github/mcp/auth.ts)<br>[packages/agents-work-apps/src/__tests__/slack/oauth.test.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/__tests__/slack/oauth.test.ts) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/inkeep__agents/AGENTS.md)<br>`agents-docs/content/api-reference/(openapi)/agents.mdx` |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `test-agents/tools/invalid-mcp-tool.ts`, `test-agents/agents/invalid-mcp.ts`, `packages/agents-work-apps/src/slack/mcp/auth.ts`.
2. Trace execution through entrypoints: `packages/create-agents/src/index.ts`, `packages/ai-sdk-provider/src/index.ts`, `packages/agents-sdk/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `test-agents/tools/bad-credential-403-tool.ts`, `test-agents/tools/faulty-api-tool.ts`.
4. Inspect retrieval/memory/indexing through: `test-agents/index.ts`, `scripts/cache-debug/index.ts`, `packages/create-agents/src/index.ts`.
5. Verify behavior through test/eval files: `test-agents/.gitignore`, `test-agents/CHANGELOG.md`, `test-agents/index.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Create AI Agents in a No Code Visual Builder or TypeScript SDK with full 2 way sync. For shipping AI assistants and mult. 핵심 구조 신호는 TypeScript, package.json, docker-compose.yml, README.md, AGENTS.md, tests이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
