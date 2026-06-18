# modelcontextprotocol/typescript-sdk Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

The official TypeScript SDK for Model Context Protocol servers and clients

## 요약

- 조사 단위: `sources/modelcontextprotocol__typescript-sdk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 564 files, 116 directories, depth score 126, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=test/integration/test/server.test.ts, test/helpers/src/index.ts, packages/server-legacy/src/index.ts이고, 의존성 단서는 modelcontextprotocol, express, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | modelcontextprotocol/typescript-sdk |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | TypeScript |
| Stars | 12685 |
| Forks | 1931 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/modelcontextprotocol__typescript-sdk](../../../../sources/modelcontextprotocol__typescript-sdk) |
| Existing report | [reports/global-trending/repositories/modelcontextprotocol__typescript-sdk.md](../../../global-trending/repositories/modelcontextprotocol__typescript-sdk.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 564 / 116 |
| Max observed depth | 7 |
| Top directories | .changeset, .github, common, docs, examples, packages, scripts, test |
| Top extensions | .ts: 337, .md: 111, .json: 54, .js: 20, .mjs: 18, .yml: 10, (none): 9, .yaml: 3, .sh: 2 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/server-legacy | packages workspace | 32 |
| packages/middleware | packages workspace | 25 |
| packages/core | packages workspace | 14 |
| docs | documentation surface | 11 |
| packages/codemod | packages workspace | 11 |
| packages/server | packages workspace | 10 |
| packages/client | packages workspace | 8 |
| examples/shared | examples workspace | 5 |
| examples/client-quickstart | examples workspace | 4 |
| examples/server-quickstart | examples workspace | 4 |
| examples/client | examples workspace | 3 |
| examples/server | examples workspace | 3 |
| .github | ci surface | 1 |
| common | top-level component | 1 |
| examples | top-level component | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | fetch:spec-types | tsx scripts/fetch-spec-types.ts |
| utility | package.json | sync:snippets | tsx scripts/sync-snippets.ts |
| serve-dev | package.json | examples:simple-server:w | pnpm --filter @modelcontextprotocol/examples-server exec tsx --watch src/simpleStreamableHttp.ts --oauth |
| quality | package.json | docs | typedoc |
| utility | package.json | docs:multi | bash scripts/generate-multidoc.sh |
| quality | package.json | docs:check | typedoc |
| quality | package.json | typecheck:all | pnpm -r typecheck |
| build | package.json | build:all | pnpm -r build |
| build | package.json | ci:publish | pnpm run build:all && pnpm changeset publish |
| utility | package.json | prepack:all | pnpm -r prepack |
| quality | package.json | lint:all | pnpm sync:snippets --check && pnpm -r lint |
| quality | package.json | lint:fix:all | pnpm sync:snippets && pnpm -r lint:fix |
| quality | package.json | check:all | pnpm -r typecheck && pnpm -r lint && pnpm run docs:check |
| test | package.json | test:all | pnpm -r test |
| utility | package.json | prepare | npx --no-install lefthook install |
| test | package.json | test:conformance:client | pnpm --filter @modelcontextprotocol/test-conformance run test:conformance:client |
| test | package.json | test:conformance:client:all | pnpm --filter @modelcontextprotocol/test-conformance run test:conformance:client:all |
| test | package.json | test:conformance:client:run | pnpm --filter @modelcontextprotocol/test-conformance run test:conformance:client:run |
| test | package.json | test:conformance:server | pnpm --filter @modelcontextprotocol/test-conformance run test:conformance:server |
| test | package.json | test:conformance:server:draft | pnpm --filter @modelcontextprotocol/test-conformance run test:conformance:server:draft |
| test | package.json | test:conformance:server:all | pnpm --filter @modelcontextprotocol/test-conformance run test:conformance:server:all |
| test | package.json | test:conformance:server:run | pnpm --filter @modelcontextprotocol/test-conformance run test:conformance:server:run |
| test | package.json | test:conformance:all | pnpm run test:conformance:client:all && pnpm run test:conformance:server:all |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | express |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [test/integration/test/server.test.ts](../../../../sources/modelcontextprotocol__typescript-sdk/test/integration/test/server.test.ts) | entrypoints signal |
| entrypoints | [test/helpers/src/index.ts](../../../../sources/modelcontextprotocol__typescript-sdk/test/helpers/src/index.ts) | entrypoints signal |
| entrypoints | [packages/server-legacy/src/index.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/server-legacy/src/index.ts) | entrypoints signal |
| entrypoints | [packages/server/test/server/server.test.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/server/test/server/server.test.ts) | entrypoints signal |
| config | [package.json](../../../../sources/modelcontextprotocol__typescript-sdk/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/modelcontextprotocol__typescript-sdk/pnpm-workspace.yaml) | config signal |
| config | [test/integration/package.json](../../../../sources/modelcontextprotocol__typescript-sdk/test/integration/package.json) | config signal |
| config | [test/integration/tsconfig.json](../../../../sources/modelcontextprotocol__typescript-sdk/test/integration/tsconfig.json) | config signal |
| ci | [.github/workflows/claude.yml](../../../../sources/modelcontextprotocol__typescript-sdk/.github/workflows/claude.yml) | ci signal |
| ci | [.github/workflows/conformance.yml](../../../../sources/modelcontextprotocol__typescript-sdk/.github/workflows/conformance.yml) | ci signal |
| ci | [.github/workflows/deploy-docs.yml](../../../../sources/modelcontextprotocol__typescript-sdk/.github/workflows/deploy-docs.yml) | ci signal |
| ci | [.github/workflows/main.yml](../../../../sources/modelcontextprotocol__typescript-sdk/.github/workflows/main.yml) | ci signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 19 | [test/integration/test/server.test.ts](../../../../sources/modelcontextprotocol__typescript-sdk/test/integration/test/server.test.ts)<br>[test/helpers/src/index.ts](../../../../sources/modelcontextprotocol__typescript-sdk/test/helpers/src/index.ts)<br>[packages/server-legacy/src/index.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/server-legacy/src/index.ts)<br>[packages/server/test/server/server.test.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/server/test/server/server.test.ts)<br>[packages/server/src/index.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/server/src/index.ts)<br>[packages/server/src/server/server.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/server/src/server/server.ts)<br>[packages/middleware/node/src/index.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/middleware/node/src/index.ts)<br>[packages/middleware/hono/src/index.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/middleware/hono/src/index.ts) |
| agentRuntime | 2 | [test/e2e/scenarios/tools.test.ts](../../../../sources/modelcontextprotocol__typescript-sdk/test/e2e/scenarios/tools.test.ts)<br>[packages/codemod/src/runner.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/codemod/src/runner.ts) |
| mcp | 4 | [test/integration/test/server/mcp.test.ts](../../../../sources/modelcontextprotocol__typescript-sdk/test/integration/test/server/mcp.test.ts)<br>[packages/server/test/server/mcp.compat.test.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/server/test/server/mcp.compat.test.ts)<br>[packages/server/src/server/mcp.examples.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/server/src/server/mcp.examples.ts)<br>[packages/server/src/server/mcp.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/server/src/server/mcp.ts) |
| retrieval | 22 | [test/helpers/src/index.ts](../../../../sources/modelcontextprotocol__typescript-sdk/test/helpers/src/index.ts)<br>[test/e2e/helpers/index.ts](../../../../sources/modelcontextprotocol__typescript-sdk/test/e2e/helpers/index.ts)<br>[packages/server-legacy/src/index.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/server-legacy/src/index.ts)<br>[packages/server-legacy/src/sse/index.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/server-legacy/src/sse/index.ts)<br>[packages/server-legacy/src/auth/index.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/server-legacy/src/auth/index.ts)<br>[packages/server/src/index.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/server/src/index.ts)<br>[packages/middleware/node/src/index.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/middleware/node/src/index.ts)<br>[packages/middleware/hono/src/index.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/middleware/hono/src/index.ts) |
| spec | 10 | [test/e2e/requirements.ts](../../../../sources/modelcontextprotocol__typescript-sdk/test/e2e/requirements.ts)<br>[scripts/fetch-spec-types.ts](../../../../sources/modelcontextprotocol__typescript-sdk/scripts/fetch-spec-types.ts)<br>[packages/core/test/spec.types.2025-11-25.test.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/core/test/spec.types.2025-11-25.test.ts)<br>[packages/core/test/spec.types.2026-07-28.test.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/core/test/spec.types.2026-07-28.test.ts)<br>[packages/core/src/types/spec.types.2025-11-25.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/core/src/types/spec.types.2025-11-25.ts)<br>[packages/core/src/types/spec.types.2026-07-28.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/core/src/types/spec.types.2026-07-28.ts)<br>[.github/workflows/update-spec-types.yml](../../../../sources/modelcontextprotocol__typescript-sdk/.github/workflows/update-spec-types.yml)<br>[.changeset/draft-spec-non-sep-conformance.md](../../../../sources/modelcontextprotocol__typescript-sdk/.changeset/draft-spec-non-sep-conformance.md) |
| eval | 178 | [test/integration/CHANGELOG.md](../../../../sources/modelcontextprotocol__typescript-sdk/test/integration/CHANGELOG.md)<br>[test/integration/eslint.config.mjs](../../../../sources/modelcontextprotocol__typescript-sdk/test/integration/eslint.config.mjs)<br>[test/integration/package.json](../../../../sources/modelcontextprotocol__typescript-sdk/test/integration/package.json)<br>[test/integration/tsconfig.json](../../../../sources/modelcontextprotocol__typescript-sdk/test/integration/tsconfig.json)<br>[test/integration/vitest.config.js](../../../../sources/modelcontextprotocol__typescript-sdk/test/integration/vitest.config.js)<br>[test/integration/test/processCleanup.test.ts](../../../../sources/modelcontextprotocol__typescript-sdk/test/integration/test/processCleanup.test.ts)<br>[test/integration/test/server.test.ts](../../../../sources/modelcontextprotocol__typescript-sdk/test/integration/test/server.test.ts)<br>[test/integration/test/standardSchema.test.ts](../../../../sources/modelcontextprotocol__typescript-sdk/test/integration/test/standardSchema.test.ts) |
| security | 45 | [SECURITY.md](../../../../sources/modelcontextprotocol__typescript-sdk/SECURITY.md)<br>[test/helpers/src/helpers/oauth.ts](../../../../sources/modelcontextprotocol__typescript-sdk/test/helpers/src/helpers/oauth.ts)<br>[test/e2e/scenarios/client-auth.test.ts](../../../../sources/modelcontextprotocol__typescript-sdk/test/e2e/scenarios/client-auth.test.ts)<br>[test/e2e/scenarios/hosting-auth.test.ts](../../../../sources/modelcontextprotocol__typescript-sdk/test/e2e/scenarios/hosting-auth.test.ts)<br>[packages/server-legacy/test/auth/router.test.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/server-legacy/test/auth/router.test.ts)<br>[packages/server-legacy/test/auth/providers/proxyProvider.test.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/server-legacy/test/auth/providers/proxyProvider.test.ts)<br>[packages/server-legacy/test/auth/middleware/allowedMethods.test.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/server-legacy/test/auth/middleware/allowedMethods.test.ts)<br>[packages/server-legacy/test/auth/middleware/bearerAuth.test.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/server-legacy/test/auth/middleware/bearerAuth.test.ts) |
| ci | 7 | [.github/workflows/claude.yml](../../../../sources/modelcontextprotocol__typescript-sdk/.github/workflows/claude.yml)<br>[.github/workflows/conformance.yml](../../../../sources/modelcontextprotocol__typescript-sdk/.github/workflows/conformance.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/modelcontextprotocol__typescript-sdk/.github/workflows/deploy-docs.yml)<br>[.github/workflows/main.yml](../../../../sources/modelcontextprotocol__typescript-sdk/.github/workflows/main.yml)<br>[.github/workflows/publish.yml](../../../../sources/modelcontextprotocol__typescript-sdk/.github/workflows/publish.yml)<br>[.github/workflows/release.yml](../../../../sources/modelcontextprotocol__typescript-sdk/.github/workflows/release.yml)<br>[.github/workflows/update-spec-types.yml](../../../../sources/modelcontextprotocol__typescript-sdk/.github/workflows/update-spec-types.yml) |
| container | 0 | not obvious |
| instruction | 2 | [CLAUDE.md](../../../../sources/modelcontextprotocol__typescript-sdk/CLAUDE.md)<br>[test/e2e/CLAUDE.md](../../../../sources/modelcontextprotocol__typescript-sdk/test/e2e/CLAUDE.md) |
| docs | 23 | [README.md](../../../../sources/modelcontextprotocol__typescript-sdk/README.md)<br>[test/conformance/README.md](../../../../sources/modelcontextprotocol__typescript-sdk/test/conformance/README.md)<br>[packages/server-legacy/README.md](../../../../sources/modelcontextprotocol__typescript-sdk/packages/server-legacy/README.md)<br>[packages/server/README.md](../../../../sources/modelcontextprotocol__typescript-sdk/packages/server/README.md)<br>[packages/middleware/README.md](../../../../sources/modelcontextprotocol__typescript-sdk/packages/middleware/README.md)<br>[packages/middleware/node/README.md](../../../../sources/modelcontextprotocol__typescript-sdk/packages/middleware/node/README.md)<br>[packages/middleware/hono/README.md](../../../../sources/modelcontextprotocol__typescript-sdk/packages/middleware/hono/README.md)<br>[packages/middleware/fastify/README.md](../../../../sources/modelcontextprotocol__typescript-sdk/packages/middleware/fastify/README.md) |
| config | 43 | [package.json](../../../../sources/modelcontextprotocol__typescript-sdk/package.json)<br>[pnpm-workspace.yaml](../../../../sources/modelcontextprotocol__typescript-sdk/pnpm-workspace.yaml)<br>[test/integration/package.json](../../../../sources/modelcontextprotocol__typescript-sdk/test/integration/package.json)<br>[test/integration/tsconfig.json](../../../../sources/modelcontextprotocol__typescript-sdk/test/integration/tsconfig.json)<br>[test/helpers/package.json](../../../../sources/modelcontextprotocol__typescript-sdk/test/helpers/package.json)<br>[test/helpers/tsconfig.json](../../../../sources/modelcontextprotocol__typescript-sdk/test/helpers/tsconfig.json)<br>[test/e2e/package.json](../../../../sources/modelcontextprotocol__typescript-sdk/test/e2e/package.json)<br>[test/e2e/tsconfig.json](../../../../sources/modelcontextprotocol__typescript-sdk/test/e2e/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 178 | [test/integration/CHANGELOG.md](../../../../sources/modelcontextprotocol__typescript-sdk/test/integration/CHANGELOG.md)<br>[test/integration/eslint.config.mjs](../../../../sources/modelcontextprotocol__typescript-sdk/test/integration/eslint.config.mjs)<br>[test/integration/package.json](../../../../sources/modelcontextprotocol__typescript-sdk/test/integration/package.json)<br>[test/integration/tsconfig.json](../../../../sources/modelcontextprotocol__typescript-sdk/test/integration/tsconfig.json)<br>[test/integration/vitest.config.js](../../../../sources/modelcontextprotocol__typescript-sdk/test/integration/vitest.config.js)<br>[test/integration/test/processCleanup.test.ts](../../../../sources/modelcontextprotocol__typescript-sdk/test/integration/test/processCleanup.test.ts) |
| CI workflows | 7 | [.github/workflows/claude.yml](../../../../sources/modelcontextprotocol__typescript-sdk/.github/workflows/claude.yml)<br>[.github/workflows/conformance.yml](../../../../sources/modelcontextprotocol__typescript-sdk/.github/workflows/conformance.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/modelcontextprotocol__typescript-sdk/.github/workflows/deploy-docs.yml)<br>[.github/workflows/main.yml](../../../../sources/modelcontextprotocol__typescript-sdk/.github/workflows/main.yml)<br>[.github/workflows/publish.yml](../../../../sources/modelcontextprotocol__typescript-sdk/.github/workflows/publish.yml)<br>[.github/workflows/release.yml](../../../../sources/modelcontextprotocol__typescript-sdk/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 45 | [SECURITY.md](../../../../sources/modelcontextprotocol__typescript-sdk/SECURITY.md)<br>[test/helpers/src/helpers/oauth.ts](../../../../sources/modelcontextprotocol__typescript-sdk/test/helpers/src/helpers/oauth.ts)<br>[test/e2e/scenarios/client-auth.test.ts](../../../../sources/modelcontextprotocol__typescript-sdk/test/e2e/scenarios/client-auth.test.ts)<br>[test/e2e/scenarios/hosting-auth.test.ts](../../../../sources/modelcontextprotocol__typescript-sdk/test/e2e/scenarios/hosting-auth.test.ts)<br>[packages/server-legacy/test/auth/router.test.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/server-legacy/test/auth/router.test.ts)<br>[packages/server-legacy/test/auth/providers/proxyProvider.test.ts](../../../../sources/modelcontextprotocol__typescript-sdk/packages/server-legacy/test/auth/providers/proxyProvider.test.ts) |
| Agent instructions | 2 | [CLAUDE.md](../../../../sources/modelcontextprotocol__typescript-sdk/CLAUDE.md)<br>[test/e2e/CLAUDE.md](../../../../sources/modelcontextprotocol__typescript-sdk/test/e2e/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `test/integration/test/server.test.ts`, `test/helpers/src/index.ts`, `packages/server-legacy/src/index.ts`.
2. Trace execution through entrypoints: `test/integration/test/server.test.ts`, `test/helpers/src/index.ts`, `packages/server-legacy/src/index.ts`.
3. Map agent/tool runtime through: `test/e2e/scenarios/tools.test.ts`, `packages/codemod/src/runner.ts`.
4. Inspect retrieval/memory/indexing through: `test/helpers/src/index.ts`, `test/e2e/helpers/index.ts`, `packages/server-legacy/src/index.ts`.
5. Verify behavior through test/eval files: `test/integration/CHANGELOG.md`, `test/integration/eslint.config.mjs`, `test/integration/package.json`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 The official TypeScript SDK for Model Context Protocol servers and clients. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, modelcontextprotocol이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
