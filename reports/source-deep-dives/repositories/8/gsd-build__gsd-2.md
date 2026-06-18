# gsd-build/gsd-2 Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 3607 files, 350 directories.

## 요약

- 조사 단위: `sources/gsd-build__gsd-2` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,605 files, 349 directories, depth score 134, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, web/lib/mcp-management-types.ts, web/app/api/mcp-connections/route.ts이고, 의존성 단서는 openai, anthropic, modelcontextprotocol, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | gsd-build/gsd-2 |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | TypeScript |
| Stars | 7739 |
| Forks | 776 |
| License | MIT License |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/gsd-build__gsd-2](../../../../sources/gsd-build__gsd-2) |
| Existing report | [reports/clone-structures/gsd-build__gsd-2.md](../../../clone-structures/gsd-build__gsd-2.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3605 / 349 |
| Max observed depth | 8 |
| Top directories | .github, .plans, docker, docs, extensions, gitbook, gsd-orchestrator, mintlify-docs, native, packages, pkg, scripts, src, studio, tests, vscode-extension, web |
| Top extensions | .ts: 2432, .md: 736, .tsx: 102, .json: 73, .mjs: 67, .rs: 29, .yml: 23, .mdx: 21, (none): 20, .cjs: 18, .sh: 17, .js: 12 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 168 |
| docs | documentation surface | 37 |
| tests | validation surface | 31 |
| web | source boundary | 26 |
| packages/mcp-server | packages workspace | 14 |
| packages/pi-coding-agent | packages workspace | 8 |
| packages/daemon | packages workspace | 4 |
| packages/pi-ai | packages workspace | 4 |
| packages/rpc-client | packages workspace | 4 |
| packages/contracts | packages workspace | 3 |
| packages/native | packages workspace | 3 |
| packages/pi-agent-core | packages workspace | 3 |
| packages/pi-tui | packages workspace | 3 |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |
| extensions | top-level component | 1 |
| gitbook | top-level component | 1 |
| gsd-orchestrator | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build:pi-tui | npm run build -w @gsd/pi-tui |
| build | package.json | build:pi-ai | npm run build -w @gsd/pi-ai |
| build | package.json | build:pi-agent-core | npm run build -w @gsd/pi-agent-core |
| build | package.json | build:pi-coding-agent | npm run build:contracts && npm run build -w @gsd/pi-coding-agent |
| build | package.json | build:native-pkg | npm run build -w @gsd/native |
| build | package.json | build:contracts | npm run build -w @gsd-build/contracts |
| build | package.json | build:rpc-client | npm run build -w @gsd-build/rpc-client |
| build | package.json | build:pi | npm run build:contracts && npm run build:native-pkg && npm run build:pi-tui && npm run build:pi-ai && npm run build:pi-agent-core && npm run build:pi-coding-agent |
| serve-dev | package.json | build:mcp-server | npm run build -w @gsd-build/mcp-server |
| serve-dev | package.json | build:core | npm run build:contracts && npm run build:pi && npm run build:rpc-client && npm run build:mcp-server && tsc && npm run copy-resources && npm run copy-themes && npm run copy-export-html |
| build | package.json | build | npm run build:core && node scripts/build-web-if-stale.cjs |
| utility | package.json | stage:web-host | node scripts/stage-web-standalone.cjs |
| build | package.json | build:web-host | cross-env NODE_ENV=production npm --prefix web run build && npm run stage:web-host |
| utility | package.json | copy-resources | node scripts/copy-resources.cjs |
| utility | package.json | copy-themes | node scripts/copy-themes.cjs |
| utility | package.json | copy-export-html | node scripts/copy-export-html.cjs |
| test | package.json | test:compile | node scripts/compile-tests.mjs |
| utility | package.json | baseline:refactor | node scripts/refactor-baseline.mjs |
| test | package.json | baseline:refactor:gate | node --import ./src/resources/extensions/gsd/tests/resolve-ts.mjs --experimental-strip-types --test src/tests/refactor-baseline.test.ts src/tests/rpc-golden-fixtures.test.ts src/tests/prompt-golden-fixtures.test.ts src/t |
| test | package.json | baseline:refactor:phase0 | npm run baseline:refactor:gate && node --import ./src/resources/extensions/gsd/tests/resolve-ts.mjs --experimental-strip-types --test src/resources/extensions/gsd/tests/derive-state-db.test.ts src/resources/extensions/gs |
| utility | package.json | legacy:cleanup:gate | node scripts/legacy-cleanup-gate.mjs |
| utility | package.json | legacy:cleanup:evidence | node scripts/legacy-cleanup-evidence.mjs |
| test | package.json | test:unit:compiled | node --import ./scripts/dist-test-resolve.mjs --experimental-test-isolation=process --test-reporter=./scripts/test-reporter-compact.mjs --test "dist-test/src/tests/*.test.js" "dist-test/src/resources/extensions/gsd/tests |
| test | package.json | test:unit | npm run test:compile && npm run test:unit:compiled |
| test | package.json | test:changed:src | node scripts/verify-changed-src-tests.mjs |
| test | package.json | test:packages | npm run test:compile && npm run test:packages:compiled |
| test | package.json | test:packages:compiled | node scripts/run-package-tests.cjs |
| test | package.json | verify:workspace-coverage | node scripts/verify-workspace-coverage.cjs |
| test | package.json | test:marketplace | node scripts/with-env.mjs GSD_TEST_CLONE_MARKETPLACES=1 -- node --import ./src/resources/extensions/gsd/tests/resolve-ts.mjs --experimental-strip-types --test src/resources/extensions/gsd/tests/claude-import-tui.test.ts |
| test | package.json | test:coverage | cross-env NODE_OPTIONS=--max-old-space-size=8192 c8 --reporter=text --reporter=lcov --exclude="src/resources/extensions/gsd/tests/**" --exclude="src/tests/**" --exclude="scripts/**" --exclude="native/**" --exclude="node_ |
| test | package.json | test:integration | node --import ./src/resources/extensions/gsd/tests/resolve-ts.mjs --experimental-strip-types --test "src/tests/integration/*.test.ts" "src/resources/extensions/gsd/tests/integration/*.test.ts" "src/resources/extensions/a |
| test | package.json | pretest | npm run typecheck:extensions |
| test | package.json | test | npm run test:unit && npm run test:integration && npm run test:packages |
| test | package.json | test:smoke | node --experimental-strip-types tests/smoke/run.ts |
| test | package.json | test:live | node scripts/with-env.mjs GSD_LIVE_TESTS=1 -- node --experimental-strip-types tests/live/run.ts |
| test | package.json | test:browser-tools | node --test src/resources/extensions/browser-tools/tests/browser-tools-unit.test.cjs src/resources/extensions/browser-tools/tests/browser-tools-integration.test.mjs |
| test | package.json | test:native | npm run test -w @gsd/native |
| test | package.json | test:secret-scan | node --import ./src/resources/extensions/gsd/tests/resolve-ts.mjs --experimental-strip-types --test src/tests/secret-scan.test.ts |
| utility | package.json | secret-scan | node scripts/secret-scan.mjs |
| utility | package.json | secret-scan:install-hook | node scripts/install-hooks.mjs |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/gsd-build__gsd-2/.mcp.json) | mcp signal |
| mcp | [web/lib/mcp-management-types.ts](../../../../sources/gsd-build__gsd-2/web/lib/mcp-management-types.ts) | mcp signal |
| mcp | [web/app/api/mcp-connections/route.ts](../../../../sources/gsd-build__gsd-2/web/app/api/mcp-connections/route.ts) | mcp signal |
| mcp | [tests/e2e/mcp-server.e2e.test.ts](../../../../sources/gsd-build__gsd-2/tests/e2e/mcp-server.e2e.test.ts) | mcp signal |
| agentRuntime | [CONTEXT.md](../../../../sources/gsd-build__gsd-2/CONTEXT.md) | agentRuntime signal |
| agentRuntime | [web/lib/workflow-action-execution.ts](../../../../sources/gsd-build__gsd-2/web/lib/workflow-action-execution.ts) | agentRuntime signal |
| agentRuntime | [web/lib/workflow-actions.ts](../../../../sources/gsd-build__gsd-2/web/lib/workflow-actions.ts) | agentRuntime signal |
| agentRuntime | [web/hooks/use-mobile.ts](../../../../sources/gsd-build__gsd-2/web/hooks/use-mobile.ts) | agentRuntime signal |
| entrypoints | [studio/src/renderer/src/App.tsx](../../../../sources/gsd-build__gsd-2/studio/src/renderer/src/App.tsx) | entrypoints signal |
| entrypoints | [studio/src/renderer/src/main.tsx](../../../../sources/gsd-build__gsd-2/studio/src/renderer/src/main.tsx) | entrypoints signal |
| entrypoints | [src/cli.ts](../../../../sources/gsd-build__gsd-2/src/cli.ts) | entrypoints signal |
| entrypoints | [packages/rpc-client/src/index.ts](../../../../sources/gsd-build__gsd-2/packages/rpc-client/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 21 | [studio/src/renderer/src/App.tsx](../../../../sources/gsd-build__gsd-2/studio/src/renderer/src/App.tsx)<br>[studio/src/renderer/src/main.tsx](../../../../sources/gsd-build__gsd-2/studio/src/renderer/src/main.tsx)<br>[src/cli.ts](../../../../sources/gsd-build__gsd-2/src/cli.ts)<br>[packages/rpc-client/src/index.ts](../../../../sources/gsd-build__gsd-2/packages/rpc-client/src/index.ts)<br>[packages/pi-tui/src/index.ts](../../../../sources/gsd-build__gsd-2/packages/pi-tui/src/index.ts)<br>[packages/pi-coding-agent/src/cli.ts](../../../../sources/gsd-build__gsd-2/packages/pi-coding-agent/src/cli.ts)<br>[packages/pi-coding-agent/src/index.ts](../../../../sources/gsd-build__gsd-2/packages/pi-coding-agent/src/index.ts)<br>[packages/pi-coding-agent/src/main.ts](../../../../sources/gsd-build__gsd-2/packages/pi-coding-agent/src/main.ts) |
| agentRuntime | 658 | [CONTEXT.md](../../../../sources/gsd-build__gsd-2/CONTEXT.md)<br>[web/lib/workflow-action-execution.ts](../../../../sources/gsd-build__gsd-2/web/lib/workflow-action-execution.ts)<br>[web/lib/workflow-actions.ts](../../../../sources/gsd-build__gsd-2/web/lib/workflow-actions.ts)<br>[web/hooks/use-mobile.ts](../../../../sources/gsd-build__gsd-2/web/hooks/use-mobile.ts)<br>[web/hooks/use-toast.ts](../../../../sources/gsd-build__gsd-2/web/hooks/use-toast.ts)<br>[web/components/ui/context-menu.tsx](../../../../sources/gsd-build__gsd-2/web/components/ui/context-menu.tsx)<br>[web/app/api/skill-health/route.ts](../../../../sources/gsd-build__gsd-2/web/app/api/skill-health/route.ts)<br>[web/app/api/hooks/route.ts](../../../../sources/gsd-build__gsd-2/web/app/api/hooks/route.ts) |
| mcp | 72 | [.mcp.json](../../../../sources/gsd-build__gsd-2/.mcp.json)<br>[web/lib/mcp-management-types.ts](../../../../sources/gsd-build__gsd-2/web/lib/mcp-management-types.ts)<br>[web/app/api/mcp-connections/route.ts](../../../../sources/gsd-build__gsd-2/web/app/api/mcp-connections/route.ts)<br>[tests/e2e/mcp-server.e2e.test.ts](../../../../sources/gsd-build__gsd-2/tests/e2e/mcp-server.e2e.test.ts)<br>[src/mcp-server.ts](../../../../sources/gsd-build__gsd-2/src/mcp-server.ts)<br>[src/web/mcp-management-service.ts](../../../../sources/gsd-build__gsd-2/src/web/mcp-management-service.ts)<br>[src/tests/mcp-client-oauth.test.ts](../../../../sources/gsd-build__gsd-2/src/tests/mcp-client-oauth.test.ts)<br>[src/tests/mcp-client-schema.test.ts](../../../../sources/gsd-build__gsd-2/src/tests/mcp-client-schema.test.ts) |
| retrieval | 290 | [web/lib/knowledge-captures-types.ts](../../../../sources/gsd-build__gsd-2/web/lib/knowledge-captures-types.ts)<br>[web/components/gsd/knowledge-captures-panel.tsx](../../../../sources/gsd-build__gsd-2/web/components/gsd/knowledge-captures-panel.tsx)<br>[web/app/api/knowledge/route.ts](../../../../sources/gsd-build__gsd-2/web/app/api/knowledge/route.ts)<br>[tests/e2e/_shared/index.ts](../../../../sources/gsd-build__gsd-2/tests/e2e/_shared/index.ts)<br>[studio/src/renderer/index.html](../../../../sources/gsd-build__gsd-2/studio/src/renderer/index.html)<br>[studio/src/renderer/src/styles/index.css](../../../../sources/gsd-build__gsd-2/studio/src/renderer/src/styles/index.css)<br>[studio/src/preload/index.d.ts](../../../../sources/gsd-build__gsd-2/studio/src/preload/index.d.ts)<br>[studio/src/preload/index.ts](../../../../sources/gsd-build__gsd-2/studio/src/preload/index.ts) |
| spec | 68 | [web/components/gsd/roadmap.tsx](../../../../sources/gsd-build__gsd-2/web/components/gsd/roadmap.tsx)<br>[src/resources/skills/web-design-guidelines/SKILL.md](../../../../sources/gsd-build__gsd-2/src/resources/skills/web-design-guidelines/SKILL.md)<br>[src/resources/skills/userinterface-wiki/rules/design-filter-for-character.md](../../../../sources/gsd-build__gsd-2/src/resources/skills/userinterface-wiki/rules/design-filter-for-character.md)<br>[src/resources/skills/userinterface-wiki/rules/design-noise-for-percussion.md](../../../../sources/gsd-build__gsd-2/src/resources/skills/userinterface-wiki/rules/design-noise-for-percussion.md)<br>[src/resources/skills/userinterface-wiki/rules/design-oscillator-for-tonal.md](../../../../sources/gsd-build__gsd-2/src/resources/skills/userinterface-wiki/rules/design-oscillator-for-tonal.md)<br>[src/resources/skills/frontend-design/SKILL.md](../../../../sources/gsd-build__gsd-2/src/resources/skills/frontend-design/SKILL.md)<br>[src/resources/skills/design-an-interface/SKILL.md](../../../../sources/gsd-build__gsd-2/src/resources/skills/design-an-interface/SKILL.md)<br>[src/resources/skills/api-design/SKILL.md](../../../../sources/gsd-build__gsd-2/src/resources/skills/api-design/SKILL.md) |
| eval | 1328 | [tsconfig.test.json](../../../../sources/gsd-build__gsd-2/tsconfig.test.json)<br>[web/lib/__tests__/browse-directories-symlink.test.ts](../../../../sources/gsd-build__gsd-2/web/lib/__tests__/browse-directories-symlink.test.ts)<br>[web/lib/__tests__/browse-scope.test.ts](../../../../sources/gsd-build__gsd-2/web/lib/__tests__/browse-scope.test.ts)<br>[web/lib/__tests__/dashboard-metrics-fallback.test.ts](../../../../sources/gsd-build__gsd-2/web/lib/__tests__/dashboard-metrics-fallback.test.ts)<br>[web/lib/__tests__/extension-ui-contract.test.ts](../../../../sources/gsd-build__gsd-2/web/lib/__tests__/extension-ui-contract.test.ts)<br>[web/lib/__tests__/preferences-route.test.ts](../../../../sources/gsd-build__gsd-2/web/lib/__tests__/preferences-route.test.ts)<br>[web/lib/__tests__/shutdown-gate.test.ts](../../../../sources/gsd-build__gsd-2/web/lib/__tests__/shutdown-gate.test.ts)<br>[web/lib/__tests__/visualizer-types-contract.test.ts](../../../../sources/gsd-build__gsd-2/web/lib/__tests__/visualizer-types-contract.test.ts) |
| security | 129 | [web/lib/auth-guard.ts](../../../../sources/gsd-build__gsd-2/web/lib/auth-guard.ts)<br>[web/lib/auth.ts](../../../../sources/gsd-build__gsd-2/web/lib/auth.ts)<br>[web/lib/proxy-auth.ts](../../../../sources/gsd-build__gsd-2/web/lib/proxy-auth.ts)<br>[src/cli-policy.ts](../../../../sources/gsd-build__gsd-2/src/cli-policy.ts)<br>[src/security-overrides.ts](../../../../sources/gsd-build__gsd-2/src/security-overrides.ts)<br>[src/web/web-auth-storage.ts](../../../../sources/gsd-build__gsd-2/src/web/web-auth-storage.ts)<br>[src/tests/google-search-auth.repro.test.ts](../../../../sources/gsd-build__gsd-2/src/tests/google-search-auth.repro.test.ts)<br>[src/tests/google-search-oauth-shape.test.ts](../../../../sources/gsd-build__gsd-2/src/tests/google-search-oauth-shape.test.ts) |
| ci | 15 | [.github/workflows/agent-workflow-guard.yml](../../../../sources/gsd-build__gsd-2/.github/workflows/agent-workflow-guard.yml)<br>[.github/workflows/ai-triage.yml](../../../../sources/gsd-build__gsd-2/.github/workflows/ai-triage.yml)<br>[.github/workflows/build-native.yml](../../../../sources/gsd-build__gsd-2/.github/workflows/build-native.yml)<br>[.github/workflows/ci.yml](../../../../sources/gsd-build__gsd-2/.github/workflows/ci.yml)<br>[.github/workflows/cleanup-dev-versions.yml](../../../../sources/gsd-build__gsd-2/.github/workflows/cleanup-dev-versions.yml)<br>[.github/workflows/dev-publish.yml](../../../../sources/gsd-build__gsd-2/.github/workflows/dev-publish.yml)<br>[.github/workflows/forensics-check.yml](../../../../sources/gsd-build__gsd-2/.github/workflows/forensics-check.yml)<br>[.github/workflows/issue-dedupe.yml](../../../../sources/gsd-build__gsd-2/.github/workflows/issue-dedupe.yml) |
| container | 5 | [Dockerfile](../../../../sources/gsd-build__gsd-2/Dockerfile)<br>[docker/docker-compose.full.yaml](../../../../sources/gsd-build__gsd-2/docker/docker-compose.full.yaml)<br>[docker/docker-compose.yaml](../../../../sources/gsd-build__gsd-2/docker/docker-compose.yaml)<br>[docker/Dockerfile.ci-builder](../../../../sources/gsd-build__gsd-2/docker/Dockerfile.ci-builder)<br>[docker/Dockerfile.sandbox](../../../../sources/gsd-build__gsd-2/docker/Dockerfile.sandbox) |
| instruction | 0 | not obvious |
| docs | 229 | [README.md](../../../../sources/gsd-build__gsd-2/README.md)<br>[vscode-extension/README.md](../../../../sources/gsd-build__gsd-2/vscode-extension/README.md)<br>[vscode-extension/docs/images/overview.png](../../../../sources/gsd-build__gsd-2/vscode-extension/docs/images/overview.png)<br>[tests/e2e/README.md](../../../../sources/gsd-build__gsd-2/tests/e2e/README.md)<br>[src/resources/skills/react-best-practices/README.md](../../../../sources/gsd-build__gsd-2/src/resources/skills/react-best-practices/README.md)<br>[src/resources/extensions/gsd/docs/claude-marketplace-import.md](../../../../sources/gsd-build__gsd-2/src/resources/extensions/gsd/docs/claude-marketplace-import.md)<br>[src/resources/extensions/gsd/docs/COORDINATION.md](../../../../sources/gsd-build__gsd-2/src/resources/extensions/gsd/docs/COORDINATION.md)<br>[src/resources/extensions/gsd/docs/preferences-reference.md](../../../../sources/gsd-build__gsd-2/src/resources/extensions/gsd/docs/preferences-reference.md) |
| config | 46 | [package.json](../../../../sources/gsd-build__gsd-2/package.json)<br>[tsconfig.json](../../../../sources/gsd-build__gsd-2/tsconfig.json)<br>[web/package.json](../../../../sources/gsd-build__gsd-2/web/package.json)<br>[web/tsconfig.json](../../../../sources/gsd-build__gsd-2/web/tsconfig.json)<br>[vscode-extension/package.json](../../../../sources/gsd-build__gsd-2/vscode-extension/package.json)<br>[vscode-extension/tsconfig.json](../../../../sources/gsd-build__gsd-2/vscode-extension/tsconfig.json)<br>[studio/package.json](../../../../sources/gsd-build__gsd-2/studio/package.json)<br>[studio/tsconfig.json](../../../../sources/gsd-build__gsd-2/studio/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1328 | [tsconfig.test.json](../../../../sources/gsd-build__gsd-2/tsconfig.test.json)<br>[web/lib/__tests__/browse-directories-symlink.test.ts](../../../../sources/gsd-build__gsd-2/web/lib/__tests__/browse-directories-symlink.test.ts)<br>[web/lib/__tests__/browse-scope.test.ts](../../../../sources/gsd-build__gsd-2/web/lib/__tests__/browse-scope.test.ts)<br>[web/lib/__tests__/dashboard-metrics-fallback.test.ts](../../../../sources/gsd-build__gsd-2/web/lib/__tests__/dashboard-metrics-fallback.test.ts)<br>[web/lib/__tests__/extension-ui-contract.test.ts](../../../../sources/gsd-build__gsd-2/web/lib/__tests__/extension-ui-contract.test.ts)<br>[web/lib/__tests__/preferences-route.test.ts](../../../../sources/gsd-build__gsd-2/web/lib/__tests__/preferences-route.test.ts) |
| CI workflows | 15 | [.github/workflows/agent-workflow-guard.yml](../../../../sources/gsd-build__gsd-2/.github/workflows/agent-workflow-guard.yml)<br>[.github/workflows/ai-triage.yml](../../../../sources/gsd-build__gsd-2/.github/workflows/ai-triage.yml)<br>[.github/workflows/build-native.yml](../../../../sources/gsd-build__gsd-2/.github/workflows/build-native.yml)<br>[.github/workflows/ci.yml](../../../../sources/gsd-build__gsd-2/.github/workflows/ci.yml)<br>[.github/workflows/cleanup-dev-versions.yml](../../../../sources/gsd-build__gsd-2/.github/workflows/cleanup-dev-versions.yml)<br>[.github/workflows/dev-publish.yml](../../../../sources/gsd-build__gsd-2/.github/workflows/dev-publish.yml) |
| Containers / deploy | 5 | [Dockerfile](../../../../sources/gsd-build__gsd-2/Dockerfile)<br>[docker/docker-compose.full.yaml](../../../../sources/gsd-build__gsd-2/docker/docker-compose.full.yaml)<br>[docker/docker-compose.yaml](../../../../sources/gsd-build__gsd-2/docker/docker-compose.yaml)<br>[docker/Dockerfile.ci-builder](../../../../sources/gsd-build__gsd-2/docker/Dockerfile.ci-builder)<br>[docker/Dockerfile.sandbox](../../../../sources/gsd-build__gsd-2/docker/Dockerfile.sandbox) |
| Security / policy | 129 | [web/lib/auth-guard.ts](../../../../sources/gsd-build__gsd-2/web/lib/auth-guard.ts)<br>[web/lib/auth.ts](../../../../sources/gsd-build__gsd-2/web/lib/auth.ts)<br>[web/lib/proxy-auth.ts](../../../../sources/gsd-build__gsd-2/web/lib/proxy-auth.ts)<br>[src/cli-policy.ts](../../../../sources/gsd-build__gsd-2/src/cli-policy.ts)<br>[src/security-overrides.ts](../../../../sources/gsd-build__gsd-2/src/security-overrides.ts)<br>[src/web/web-auth-storage.ts](../../../../sources/gsd-build__gsd-2/src/web/web-auth-storage.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `.mcp.json`, `web/lib/mcp-management-types.ts`, `web/app/api/mcp-connections/route.ts`.
2. Trace execution through entrypoints: `studio/src/renderer/src/App.tsx`, `studio/src/renderer/src/main.tsx`, `src/cli.ts`.
3. Map agent/tool runtime through: `CONTEXT.md`, `web/lib/workflow-action-execution.ts`, `web/lib/workflow-actions.ts`.
4. Inspect retrieval/memory/indexing through: `web/lib/knowledge-captures-types.ts`, `web/components/gsd/knowledge-captures-panel.tsx`, `web/app/api/knowledge/route.ts`.
5. Verify behavior through test/eval files: `tsconfig.test.json`, `web/lib/__tests__/browse-directories-symlink.test.ts`, `web/lib/__tests__/browse-scope.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 3607 files, 350 directories.. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, LICENSE, openai이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 major metadata risk not obvious입니다.
