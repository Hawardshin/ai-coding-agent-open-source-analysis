# getsentry/XcodeBuildMCP Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A Model Context Protocol (MCP) server and CLI that provides tools for agent use when working on iOS and macOS projects.

## 요약

- 조사 단위: `sources/getsentry__XcodeBuildMCP` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,555 files, 291 directories, depth score 118, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, src/utils/tool-registry.ts, src/utils/__tests__/tool-registry.test.ts이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | getsentry/XcodeBuildMCP |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 5921 |
| Forks | 294 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/getsentry__XcodeBuildMCP](../../../../sources/getsentry__XcodeBuildMCP) |
| Existing report | [reports/global-trending/repositories/getsentry__XcodeBuildMCP.md](../../../global-trending/repositories/getsentry__XcodeBuildMCP.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1555 / 291 |
| Max observed depth | 7 |
| Top directories | .agents, .cursor, .githooks, .github, assets, benchmarks, example_projects, manifests, schemas, scripts, skills, src |
| Top extensions | .ts: 587, .json: 399, .txt: 301, .yaml: 109, .swift: 54, .md: 35, .yml: 14, (none): 10, .py: 9, .mjs: 6, .sh: 5, .js: 4 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 138 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmarks | validation surface | 1 |
| example_projects | top-level component | 1 |
| manifests | top-level component | 1 |
| schemas | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | wireit |
| serve-dev | package.json | dev | npm run build:tsup && node build/cli.js mcp |
| build | package.json | build:tsup | npm run generate:version && tsup |
| serve-dev | package.json | dev:tsup | npm run build:tsup && tsup --watch |
| serve-dev | package.json | run | npm run build -s >/dev/null 2>&1 && node build/cli.js |
| utility | package.json | prepare | node scripts/install-git-hooks.js |
| utility | package.json | hooks:install | node scripts/install-git-hooks.js |
| utility | package.json | generate:version | npx tsx scripts/generate-version.ts |
| build | package.json | repro:mcp-lifecycle-leak | npm run build && npx tsx scripts/repro-mcp-lifecycle-leak.ts |
| utility | package.json | repro:sentry-mcp-teardown | cd repros/sentry-mcp-teardown && npm run harness |
| build | package.json | bundle:axe | scripts/bundle-axe.sh |
| build | package.json | build:website-manifest | node scripts/build-website-manifest.mjs |
| utility | package.json | package:macos | scripts/package-macos-portable.sh |
| utility | package.json | package:macos:universal | scripts/package-macos-portable.sh --universal |
| utility | package.json | verify:portable | scripts/verify-portable-install.sh |
| utility | package.json | homebrew:formula | scripts/create-homebrew-formula.sh |
| quality | package.json | lint | eslint 'src/**/*.{js,ts}' 'benchmarks/claude-ui/**/*.ts' |
| quality | package.json | lint:fix | eslint 'src/**/*.{js,ts}' 'benchmarks/claude-ui/**/*.ts' --fix |
| quality | package.json | format | prettier --write 'src/**/*.{js,ts}' 'benchmarks/claude-ui/**/*.{ts,md,yml}' |
| quality | package.json | format:check | prettier --check 'src/**/*.{js,ts}' 'benchmarks/claude-ui/**/*.{ts,md,yml}' |
| test | package.json | typecheck | npx tsc --noEmit && npx tsc -p tsconfig.test.json && npx tsc -p tsconfig.benchmarks.json |
| test | package.json | typecheck:tests | npx tsc -p tsconfig.test.json |
| test | package.json | inspect | npx @modelcontextprotocol/inspector@latest node build/cli.js mcp |
| build | package.json | doctor | node build/doctor-cli.js |
| build | package.json | bench:claude-ui | npm run build && npx tsx benchmarks/claude-ui/run.ts |
| build | package.json | bench:claude-ui:xcodebuildmcp | npm run build && npx tsx benchmarks/claude-ui/run-directory.ts benchmarks/claude-ui/suites XcodeBuildMCP |
| build | package.json | bench:claude-ui:private | npm run build && npx tsx benchmarks/claude-ui/run-directory.ts benchmarks/claude-ui/local/suites private |
| test | package.json | bench:test-sim | npx tsx scripts/benchmark-simulator-test.ts |
| build | package.json | capture:xcodebuild | npx tsx scripts/capture-xcodebuild-wrapper.ts |
| utility | package.json | license:report | node scripts/generate-third-party-package-licenses.mjs |
| quality | package.json | license:check | npx -y license-checker --production --onlyAllow 'MIT;ISC;BSD-2-Clause;BSD-3-Clause;Apache-2.0;Unlicense;FSL-1.1-MIT;BlueOak-1.0.0' |
| utility | package.json | knip | knip |
| test | package.json | test | vitest run |
| test | package.json | test:schema-fixtures | vitest run src/snapshot-tests/__tests__/json-fixture-schema.test.ts |
| test | package.json | test:snapshot | npm run build && node build/cli.js daemon stop 2>/dev/null; vitest run --config vitest.snapshot.config.ts |
| test | package.json | test:snapshots | npm run test:snapshot |
| test | package.json | test:snapshot:device | npm run build && node build/cli.js daemon stop 2>/dev/null; vitest run --config vitest.snapshot.config.ts src/snapshot-tests/__tests__/device.snapshot.test.ts && vitest run --config vitest.snapshot.config.ts src/snapshot |
| test | package.json | test:snapshot:update | npm run build && node build/cli.js daemon stop 2>/dev/null; UPDATE_SNAPSHOTS=1 vitest run --config vitest.snapshot.config.ts |
| test | package.json | test:snapshots:update | npm run test:snapshot:update |
| test | package.json | test:smoke | npm run build && vitest run --config vitest.smoke.config.ts |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
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
| mcp | [.mcp.json](../../../../sources/getsentry__XcodeBuildMCP/.mcp.json) | mcp signal |
| mcp | [src/utils/tool-registry.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/tool-registry.ts) | mcp signal |
| mcp | [src/utils/__tests__/tool-registry.test.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/__tests__/tool-registry.test.ts) | mcp signal |
| mcp | [src/snapshot-tests/mcp-harness.ts](../../../../sources/getsentry__XcodeBuildMCP/src/snapshot-tests/mcp-harness.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/getsentry__XcodeBuildMCP/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/utils/tool-execution-compat.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/tool-execution-compat.ts) | agentRuntime signal |
| agentRuntime | [src/utils/execution/tool-execution-context.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/execution/tool-execution-context.ts) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/getsentry__XcodeBuildMCP/server.json) | entrypoints signal |
| entrypoints | [src/cli.ts](../../../../sources/getsentry__XcodeBuildMCP/src/cli.ts) | entrypoints signal |
| entrypoints | [src/server/server.ts](../../../../sources/getsentry__XcodeBuildMCP/src/server/server.ts) | entrypoints signal |
| entrypoints | [src/server/__tests__/server.test.ts](../../../../sources/getsentry__XcodeBuildMCP/src/server/__tests__/server.test.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/getsentry__XcodeBuildMCP/CLAUDE.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [server.json](../../../../sources/getsentry__XcodeBuildMCP/server.json)<br>[src/cli.ts](../../../../sources/getsentry__XcodeBuildMCP/src/cli.ts)<br>[src/server/server.ts](../../../../sources/getsentry__XcodeBuildMCP/src/server/server.ts)<br>[src/server/__tests__/server.test.ts](../../../../sources/getsentry__XcodeBuildMCP/src/server/__tests__/server.test.ts) |
| agentRuntime | 307 | [AGENTS.md](../../../../sources/getsentry__XcodeBuildMCP/AGENTS.md)<br>[src/utils/tool-execution-compat.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/tool-execution-compat.ts)<br>[src/utils/tool-registry.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/tool-registry.ts)<br>[src/utils/execution/tool-execution-context.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/execution/tool-execution-context.ts)<br>[src/utils/execution/__tests__/tool-execution-context.test.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/execution/__tests__/tool-execution-context.test.ts)<br>[src/utils/debugger/tool-context.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/debugger/tool-context.ts)<br>[src/utils/__tests__/tool-registry.test.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/__tests__/tool-registry.test.ts)<br>[src/types/tool-execution.ts](../../../../sources/getsentry__XcodeBuildMCP/src/types/tool-execution.ts) |
| mcp | 527 | [.mcp.json](../../../../sources/getsentry__XcodeBuildMCP/.mcp.json)<br>[src/utils/tool-registry.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/tool-registry.ts)<br>[src/utils/__tests__/tool-registry.test.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/__tests__/tool-registry.test.ts)<br>[src/snapshot-tests/mcp-harness.ts](../../../../sources/getsentry__XcodeBuildMCP/src/snapshot-tests/mcp-harness.ts)<br>[src/snapshot-tests/__tests__/mcp-json.snapshot.test.ts](../../../../sources/getsentry__XcodeBuildMCP/src/snapshot-tests/__tests__/mcp-json.snapshot.test.ts)<br>[src/snapshot-tests/__fixtures__/mcp/text/xcode-ide/documentation-search--success.txt](../../../../sources/getsentry__XcodeBuildMCP/src/snapshot-tests/__fixtures__/mcp/text/xcode-ide/documentation-search--success.txt)<br>[src/snapshot-tests/__fixtures__/mcp/text/xcode-ide/list-tools--success.txt](../../../../sources/getsentry__XcodeBuildMCP/src/snapshot-tests/__fixtures__/mcp/text/xcode-ide/list-tools--success.txt)<br>[src/snapshot-tests/__fixtures__/mcp/text/utilities/clean--error-wrong-scheme.txt](../../../../sources/getsentry__XcodeBuildMCP/src/snapshot-tests/__fixtures__/mcp/text/utilities/clean--error-wrong-scheme.txt) |
| retrieval | 16 | [src/visibility/index.ts](../../../../sources/getsentry__XcodeBuildMCP/src/visibility/index.ts)<br>[src/utils/xcodemake/index.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/xcodemake/index.ts)<br>[src/utils/video-capture/index.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/video-capture/index.ts)<br>[src/utils/version/index.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/version/index.ts)<br>[src/utils/test/index.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/test/index.ts)<br>[src/utils/template/index.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/template/index.ts)<br>[src/utils/renderers/index.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/renderers/index.ts)<br>[src/utils/logging/index.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/logging/index.ts) |
| spec | 0 | not obvious |
| eval | 894 | [tsconfig.test.json](../../../../sources/getsentry__XcodeBuildMCP/tsconfig.test.json)<br>[tsconfig.tests.json](../../../../sources/getsentry__XcodeBuildMCP/tsconfig.tests.json)<br>[src/visibility/__tests__/exposure.test.ts](../../../../sources/getsentry__XcodeBuildMCP/src/visibility/__tests__/exposure.test.ts)<br>[src/visibility/__tests__/predicate-registry.test.ts](../../../../sources/getsentry__XcodeBuildMCP/src/visibility/__tests__/predicate-registry.test.ts)<br>[src/utils/simulator-test-execution.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/simulator-test-execution.ts)<br>[src/utils/swift-test-discovery.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/swift-test-discovery.ts)<br>[src/utils/test-common.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/test-common.ts)<br>[src/utils/test-preflight.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/test-preflight.ts) |
| security | 4 | [SECURITY.md](../../../../sources/getsentry__XcodeBuildMCP/SECURITY.md)<br>[src/utils/focus-policy.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/focus-policy.ts)<br>[src/utils/debugger/ui-automation-guard.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/debugger/ui-automation-guard.ts)<br>[src/utils/__tests__/focus-policy.test.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/__tests__/focus-policy.test.ts) |
| ci | 9 | [.github/workflows/ci.yml](../../../../sources/getsentry__XcodeBuildMCP/.github/workflows/ci.yml)<br>[.github/workflows/publish-manifests.yml](../../../../sources/getsentry__XcodeBuildMCP/.github/workflows/publish-manifests.yml)<br>[.github/workflows/publish-schemas.yml](../../../../sources/getsentry__XcodeBuildMCP/.github/workflows/publish-schemas.yml)<br>[.github/workflows/README.md](../../../../sources/getsentry__XcodeBuildMCP/.github/workflows/README.md)<br>[.github/workflows/release.yml](../../../../sources/getsentry__XcodeBuildMCP/.github/workflows/release.yml)<br>[.github/workflows/sentry.yml](../../../../sources/getsentry__XcodeBuildMCP/.github/workflows/sentry.yml)<br>[.github/workflows/stale.yml](../../../../sources/getsentry__XcodeBuildMCP/.github/workflows/stale.yml)<br>[.github/workflows/warden-sweep.yml](../../../../sources/getsentry__XcodeBuildMCP/.github/workflows/warden-sweep.yml) |
| container | 0 | not obvious |
| instruction | 5 | [AGENTS.md](../../../../sources/getsentry__XcodeBuildMCP/AGENTS.md)<br>[CLAUDE.md](../../../../sources/getsentry__XcodeBuildMCP/CLAUDE.md)<br>[example_projects/Weather/AGENTS.md](../../../../sources/getsentry__XcodeBuildMCP/example_projects/Weather/AGENTS.md)<br>[example_projects/iOS_Calculator/AGENTS.md](../../../../sources/getsentry__XcodeBuildMCP/example_projects/iOS_Calculator/AGENTS.md)<br>[example_projects/iOS/.cursor/rules/errors.mdc](../../../../sources/getsentry__XcodeBuildMCP/example_projects/iOS/.cursor/rules/errors.mdc) |
| docs | 4 | [README.md](../../../../sources/getsentry__XcodeBuildMCP/README.md)<br>[example_projects/Weather/README.md](../../../../sources/getsentry__XcodeBuildMCP/example_projects/Weather/README.md)<br>[benchmarks/claude-ui/README.md](../../../../sources/getsentry__XcodeBuildMCP/benchmarks/claude-ui/README.md)<br>[.github/workflows/README.md](../../../../sources/getsentry__XcodeBuildMCP/.github/workflows/README.md) |
| config | 3 | [package.json](../../../../sources/getsentry__XcodeBuildMCP/package.json)<br>[tsconfig.json](../../../../sources/getsentry__XcodeBuildMCP/tsconfig.json)<br>[example_projects/iOS/Makefile](../../../../sources/getsentry__XcodeBuildMCP/example_projects/iOS/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 894 | [tsconfig.test.json](../../../../sources/getsentry__XcodeBuildMCP/tsconfig.test.json)<br>[tsconfig.tests.json](../../../../sources/getsentry__XcodeBuildMCP/tsconfig.tests.json)<br>[src/visibility/__tests__/exposure.test.ts](../../../../sources/getsentry__XcodeBuildMCP/src/visibility/__tests__/exposure.test.ts)<br>[src/visibility/__tests__/predicate-registry.test.ts](../../../../sources/getsentry__XcodeBuildMCP/src/visibility/__tests__/predicate-registry.test.ts)<br>[src/utils/simulator-test-execution.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/simulator-test-execution.ts)<br>[src/utils/swift-test-discovery.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/swift-test-discovery.ts) |
| CI workflows | 9 | [.github/workflows/ci.yml](../../../../sources/getsentry__XcodeBuildMCP/.github/workflows/ci.yml)<br>[.github/workflows/publish-manifests.yml](../../../../sources/getsentry__XcodeBuildMCP/.github/workflows/publish-manifests.yml)<br>[.github/workflows/publish-schemas.yml](../../../../sources/getsentry__XcodeBuildMCP/.github/workflows/publish-schemas.yml)<br>[.github/workflows/README.md](../../../../sources/getsentry__XcodeBuildMCP/.github/workflows/README.md)<br>[.github/workflows/release.yml](../../../../sources/getsentry__XcodeBuildMCP/.github/workflows/release.yml)<br>[.github/workflows/sentry.yml](../../../../sources/getsentry__XcodeBuildMCP/.github/workflows/sentry.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 4 | [SECURITY.md](../../../../sources/getsentry__XcodeBuildMCP/SECURITY.md)<br>[src/utils/focus-policy.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/focus-policy.ts)<br>[src/utils/debugger/ui-automation-guard.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/debugger/ui-automation-guard.ts)<br>[src/utils/__tests__/focus-policy.test.ts](../../../../sources/getsentry__XcodeBuildMCP/src/utils/__tests__/focus-policy.test.ts) |
| Agent instructions | 5 | [AGENTS.md](../../../../sources/getsentry__XcodeBuildMCP/AGENTS.md)<br>[CLAUDE.md](../../../../sources/getsentry__XcodeBuildMCP/CLAUDE.md)<br>[example_projects/Weather/AGENTS.md](../../../../sources/getsentry__XcodeBuildMCP/example_projects/Weather/AGENTS.md)<br>[example_projects/iOS_Calculator/AGENTS.md](../../../../sources/getsentry__XcodeBuildMCP/example_projects/iOS_Calculator/AGENTS.md)<br>[example_projects/iOS/.cursor/rules/errors.mdc](../../../../sources/getsentry__XcodeBuildMCP/example_projects/iOS/.cursor/rules/errors.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `.mcp.json`, `src/utils/tool-registry.ts`, `src/utils/__tests__/tool-registry.test.ts`.
2. Trace execution through entrypoints: `server.json`, `src/cli.ts`, `src/server/server.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `src/utils/tool-execution-compat.ts`, `src/utils/tool-registry.ts`.
4. Inspect retrieval/memory/indexing through: `src/visibility/index.ts`, `src/utils/xcodemake/index.ts`, `src/utils/video-capture/index.ts`.
5. Verify behavior through test/eval files: `tsconfig.test.json`, `tsconfig.tests.json`, `src/visibility/__tests__/exposure.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A Model Context Protocol MCP server and CLI that provides tools for agent use when working on iOS and macOS projects.. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
