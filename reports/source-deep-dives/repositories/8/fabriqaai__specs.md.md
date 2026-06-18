# fabriqaai/specs.md Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 849 files, 283 directories.

## 요약

- 조사 단위: `sources/fabriqaai__specs.md` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 847 files, 282 directories, depth score 119, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=src/flows/simple/context-config.yaml, src/flows/simple/memory-bank.yaml, src/flows/simple/skills/design.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | fabriqaai/specs.md |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | TypeScript |
| Stars | 175 |
| Forks | 19 |
| License | MIT License |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/fabriqaai__specs.md](../../../../sources/fabriqaai__specs.md) |
| Existing report | [reports/clone-structures/fabriqaai__specs.md.md](../../../clone-structures/fabriqaai__specs.md.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 847 / 282 |
| Max observed depth | 10 |
| Top directories | .claude, .github, .specsmd, docs.specs.md, images, memory-bank, resources, scripts, src, vs-code-extension |
| Top extensions | .md: 439, .ts: 167, .js: 53, .mdx: 50, .png: 33, .html: 18, .yaml: 17, .hbs: 15, .json: 11, .cjs: 9, .svg: 7, .pdf: 6 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 91 |
| .github | ci surface | 1 |
| docs.specs.md | documentation surface | 1 |
| images | top-level component | 1 |
| memory-bank | top-level component | 1 |
| resources | top-level component | 1 |
| scripts | top-level component | 1 |
| vs-code-extension | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | validate:all | cd src && npm run validate:all |
| quality | package.json | lint:md:fix | cd src && npm run lint:md:fix |
| quality | package.json | deps:check | echo '\n=== NPM Package (src/) ===' && npx npm-check-updates --cwd src && echo '\n=== VS Code Extension ===' && npx npm-check-updates --cwd vs-code-extension |
| quality | package.json | deps:check:minor | echo '\n=== NPM Package (src/) ===' && npx npm-check-updates --cwd src --target minor && echo '\n=== VS Code Extension ===' && npx npm-check-updates --cwd vs-code-extension --target minor |


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
| agentRuntime | [src/flows/simple/context-config.yaml](../../../../sources/fabriqaai__specs.md/src/flows/simple/context-config.yaml) | agentRuntime signal |
| agentRuntime | [src/flows/simple/memory-bank.yaml](../../../../sources/fabriqaai__specs.md/src/flows/simple/memory-bank.yaml) | agentRuntime signal |
| agentRuntime | [src/flows/simple/skills/design.md](../../../../sources/fabriqaai__specs.md/src/flows/simple/skills/design.md) | agentRuntime signal |
| agentRuntime | [src/flows/simple/skills/execute.md](../../../../sources/fabriqaai__specs.md/src/flows/simple/skills/execute.md) | agentRuntime signal |
| entrypoints | [src/lib/dashboard/web/server.js](../../../../sources/fabriqaai__specs.md/src/lib/dashboard/web/server.js) | entrypoints signal |
| entrypoints | [src/bin/cli.js](../../../../sources/fabriqaai__specs.md/src/bin/cli.js) | entrypoints signal |
| instruction | [docs.specs.md/CLAUDE.md](../../../../sources/fabriqaai__specs.md/docs.specs.md/CLAUDE.md) | instruction signal |
| instruction | [docs.specs.md/fire-flow/agents.mdx](../../../../sources/fabriqaai__specs.md/docs.specs.md/fire-flow/agents.mdx) | instruction signal |
| instruction | [.claude/claude.md](../../../../sources/fabriqaai__specs.md/.claude/claude.md) | instruction signal |
| config | [package.json](../../../../sources/fabriqaai__specs.md/package.json) | config signal |
| config | [vs-code-extension/package.json](../../../../sources/fabriqaai__specs.md/vs-code-extension/package.json) | config signal |
| config | [vs-code-extension/tsconfig.json](../../../../sources/fabriqaai__specs.md/vs-code-extension/tsconfig.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/lib/dashboard/web/server.js](../../../../sources/fabriqaai__specs.md/src/lib/dashboard/web/server.js)<br>[src/bin/cli.js](../../../../sources/fabriqaai__specs.md/src/bin/cli.js) |
| agentRuntime | 408 | [src/flows/simple/context-config.yaml](../../../../sources/fabriqaai__specs.md/src/flows/simple/context-config.yaml)<br>[src/flows/simple/memory-bank.yaml](../../../../sources/fabriqaai__specs.md/src/flows/simple/memory-bank.yaml)<br>[src/flows/simple/skills/design.md](../../../../sources/fabriqaai__specs.md/src/flows/simple/skills/design.md)<br>[src/flows/simple/skills/execute.md](../../../../sources/fabriqaai__specs.md/src/flows/simple/skills/execute.md)<br>[src/flows/simple/skills/requirements.md](../../../../sources/fabriqaai__specs.md/src/flows/simple/skills/requirements.md)<br>[src/flows/simple/skills/tasks.md](../../../../sources/fabriqaai__specs.md/src/flows/simple/skills/tasks.md)<br>[src/flows/simple/commands/agent.md](../../../../sources/fabriqaai__specs.md/src/flows/simple/commands/agent.md)<br>[src/flows/simple/agents/agent.md](../../../../sources/fabriqaai__specs.md/src/flows/simple/agents/agent.md) |
| mcp | 0 | not obvious |
| retrieval | 338 | [vs-code-extension/src/welcome/index.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/welcome/index.ts)<br>[vs-code-extension/src/webview/index.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/webview/index.ts)<br>[vs-code-extension/src/webview/lit/index.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/webview/lit/index.ts)<br>[vs-code-extension/src/webview/components/fire/index.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/webview/components/fire/index.ts)<br>[vs-code-extension/src/webview/components/fire/shared/index.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/webview/components/fire/shared/index.ts)<br>[vs-code-extension/src/webview/components/fire/runs/index.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/webview/components/fire/runs/index.ts)<br>[vs-code-extension/src/webview/components/fire/overview/index.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/webview/components/fire/overview/index.ts)<br>[vs-code-extension/src/webview/components/fire/intents/index.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/webview/components/fire/intents/index.ts) |
| spec | 56 | [vs-code-extension/MULTI_FLOW_ARCHITECTURE.md](../../../../sources/fabriqaai__specs.md/vs-code-extension/MULTI_FLOW_ARCHITECTURE.md)<br>[vs-code-extension/design-mockups/index.html](../../../../sources/fabriqaai__specs.md/vs-code-extension/design-mockups/index.html)<br>[vs-code-extension/design-mockups/variation-1-metrics-dashboard.html](../../../../sources/fabriqaai__specs.md/vs-code-extension/design-mockups/variation-1-metrics-dashboard.html)<br>[vs-code-extension/design-mockups/variation-10-dual-view-focus.html](../../../../sources/fabriqaai__specs.md/vs-code-extension/design-mockups/variation-10-dual-view-focus.html)<br>[vs-code-extension/design-mockups/variation-11-dual-view-grouped.html](../../../../sources/fabriqaai__specs.md/vs-code-extension/design-mockups/variation-11-dual-view-grouped.html)<br>[vs-code-extension/design-mockups/variation-12-dependency-graph.html](../../../../sources/fabriqaai__specs.md/vs-code-extension/design-mockups/variation-12-dependency-graph.html)<br>[vs-code-extension/design-mockups/variation-13-hierarchy-explorer.html](../../../../sources/fabriqaai__specs.md/vs-code-extension/design-mockups/variation-13-hierarchy-explorer.html)<br>[vs-code-extension/design-mockups/variation-14-swimlane-deps.html](../../../../sources/fabriqaai__specs.md/vs-code-extension/design-mockups/variation-14-swimlane-deps.html) |
| eval | 96 | [vs-code-extension/tsconfig.test.json](../../../../sources/fabriqaai__specs.md/vs-code-extension/tsconfig.test.json)<br>[vs-code-extension/src/test/runTest.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/runTest.ts)<br>[vs-code-extension/src/test/watcher/debounce.test.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/watcher/debounce.test.ts)<br>[vs-code-extension/src/test/watcher/fileWatcher.test.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/watcher/fileWatcher.test.ts)<br>[vs-code-extension/src/test/state/selectors.test.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/state/selectors.test.ts)<br>[vs-code-extension/src/test/state/stateStore.test.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/state/stateStore.test.ts)<br>[vs-code-extension/src/test/sidebar/treeBuilder.test.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/sidebar/treeBuilder.test.ts)<br>[vs-code-extension/src/test/sidebar/types.test.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/sidebar/types.test.ts) |
| security | 0 | not obvious |
| ci | 6 | [.github/workflows/claude.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/claude.yml)<br>[.github/workflows/npm-package-ci.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/npm-package-ci.yml)<br>[.github/workflows/npm-package-dev.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/npm-package-dev.yml)<br>[.github/workflows/npm-package-release.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/npm-package-release.yml)<br>[.github/workflows/tweet-changelog.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/tweet-changelog.yml)<br>[.github/workflows/vscode-publish.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/vscode-publish.yml) |
| container | 0 | not obvious |
| instruction | 3 | [docs.specs.md/CLAUDE.md](../../../../sources/fabriqaai__specs.md/docs.specs.md/CLAUDE.md)<br>[docs.specs.md/fire-flow/agents.mdx](../../../../sources/fabriqaai__specs.md/docs.specs.md/fire-flow/agents.mdx)<br>[.claude/claude.md](../../../../sources/fabriqaai__specs.md/.claude/claude.md) |
| docs | 10 | [README.md](../../../../sources/fabriqaai__specs.md/README.md)<br>[vs-code-extension/README.md](../../../../sources/fabriqaai__specs.md/vs-code-extension/README.md)<br>[src/README.md](../../../../sources/fabriqaai__specs.md/src/README.md)<br>[src/flows/simple/README.md](../../../../sources/fabriqaai__specs.md/src/flows/simple/README.md)<br>[src/flows/ideation/README.md](../../../../sources/fabriqaai__specs.md/src/flows/ideation/README.md)<br>[src/flows/fire/README.md](../../../../sources/fabriqaai__specs.md/src/flows/fire/README.md)<br>[src/flows/aidlc/README.md](../../../../sources/fabriqaai__specs.md/src/flows/aidlc/README.md)<br>[src/flows/aidlc/templates/inception/project/README.md](../../../../sources/fabriqaai__specs.md/src/flows/aidlc/templates/inception/project/README.md) |
| config | 5 | [package.json](../../../../sources/fabriqaai__specs.md/package.json)<br>[vs-code-extension/package.json](../../../../sources/fabriqaai__specs.md/vs-code-extension/package.json)<br>[vs-code-extension/tsconfig.json](../../../../sources/fabriqaai__specs.md/vs-code-extension/tsconfig.json)<br>[src/package.json](../../../../sources/fabriqaai__specs.md/src/package.json)<br>[src/tsconfig.json](../../../../sources/fabriqaai__specs.md/src/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 96 | [vs-code-extension/tsconfig.test.json](../../../../sources/fabriqaai__specs.md/vs-code-extension/tsconfig.test.json)<br>[vs-code-extension/src/test/runTest.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/runTest.ts)<br>[vs-code-extension/src/test/watcher/debounce.test.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/watcher/debounce.test.ts)<br>[vs-code-extension/src/test/watcher/fileWatcher.test.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/watcher/fileWatcher.test.ts)<br>[vs-code-extension/src/test/state/selectors.test.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/state/selectors.test.ts)<br>[vs-code-extension/src/test/state/stateStore.test.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/state/stateStore.test.ts) |
| CI workflows | 6 | [.github/workflows/claude.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/claude.yml)<br>[.github/workflows/npm-package-ci.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/npm-package-ci.yml)<br>[.github/workflows/npm-package-dev.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/npm-package-dev.yml)<br>[.github/workflows/npm-package-release.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/npm-package-release.yml)<br>[.github/workflows/tweet-changelog.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/tweet-changelog.yml)<br>[.github/workflows/vscode-publish.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/vscode-publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 3 | [docs.specs.md/CLAUDE.md](../../../../sources/fabriqaai__specs.md/docs.specs.md/CLAUDE.md)<br>[docs.specs.md/fire-flow/agents.mdx](../../../../sources/fabriqaai__specs.md/docs.specs.md/fire-flow/agents.mdx)<br>[.claude/claude.md](../../../../sources/fabriqaai__specs.md/.claude/claude.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `src/flows/simple/context-config.yaml`, `src/flows/simple/memory-bank.yaml`, `src/flows/simple/skills/design.md`.
2. Trace execution through entrypoints: `src/lib/dashboard/web/server.js`, `src/bin/cli.js`.
3. Map agent/tool runtime through: `src/flows/simple/context-config.yaml`, `src/flows/simple/memory-bank.yaml`, `src/flows/simple/skills/design.md`.
4. Inspect retrieval/memory/indexing through: `vs-code-extension/src/welcome/index.ts`, `vs-code-extension/src/webview/index.ts`, `vs-code-extension/src/webview/lit/index.ts`.
5. Verify behavior through test/eval files: `vs-code-extension/tsconfig.test.json`, `vs-code-extension/src/test/runTest.ts`, `vs-code-extension/src/test/watcher/debounce.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 849 files, 283 directories.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, tests, ci이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 major metadata risk not obvious입니다.
