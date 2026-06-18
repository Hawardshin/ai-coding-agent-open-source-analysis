# nanbingxyz/5ire Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

5ire is a cross-platform desktop AI assistant, MCP client. It compatible with major service providers, supports local knowledge base and tools via model context protocol servers .

## 요약

- 조사 단위: `sources/nanbingxyz__5ire` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 478 files, 85 directories, depth score 118, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=test/utils/mcp.test.ts, src/mcp.config.ts, src/utils/mcp.ts이고, 의존성 단서는 modelcontextprotocol, next, react, electron, transformers, llama, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | nanbingxyz/5ire |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 5247 |
| Forks | 407 |
| License | NOASSERTION |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/nanbingxyz__5ire](../../../../sources/nanbingxyz__5ire) |
| Existing report | [reports/global-trending/repositories/nanbingxyz__5ire.md](../../../global-trending/repositories/nanbingxyz__5ire.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 478 / 85 |
| Max observed depth | 7 |
| Top directories | .erb, .github, .husky, docs, drizzle, patches, public, scripts, src, test |
| Top extensions | .ts: 203, .tsx: 107, .json: 26, .woff2: 22, .ttf: 20, .woff: 20, .png: 19, .sql: 12, .scss: 11, .md: 9, .js: 5, (none): 5 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 90 |
| docs | documentation surface | 3 |
| .github | ci surface | 1 |
| drizzle | top-level component | 1 |
| patches | top-level component | 1 |
| public | top-level component | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | postinstall | patch-package && node ./node_modules/electron/install.js && npm run install:deps |
| build | package.json | install:deps | electron-builder install-app-deps |
| quality | package.json | lint | biome check --write . |
| test | package.json | test | jest |
| utility | package.json | prepare | husky |
| quality | package.json | format | biome format --write . |
| quality | package.json | check | tsc --noEmit |
| build | package.json | build | npm run install:deps && rsbuild build |
| serve-dev | package.json | build:watch | npm run install:deps && rsbuild dev |
| serve-dev | package.json | dev:build | rsbuild dev |
| serve-dev | package.json | dev:start | npx wait-on http-get://127.0.0.1:33077 file:./output/nodemon.json && cd ./output && npx nodemon |
| serve-dev | package.json | dev | rimraf ./output/ && concurrently -n R,E -c cyan,magenta "npm run dev:build" "npm run dev:start" |
| build | package.json | package | rimraf ./release && tsx ./scripts/package/index.ts |
| build | package.json | package:publish | rimraf ./release && tsx ./scripts/package/index.ts --publish |
| utility | package.json | generate:drizzle | drizzle-kit generate |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | transformers, llama |
| webRuntime | next, react |
| developerSurface | electron |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [test/utils/mcp.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/mcp.test.ts) | mcp signal |
| mcp | [src/mcp.config.ts](../../../../sources/nanbingxyz__5ire/src/mcp.config.ts) | mcp signal |
| mcp | [src/utils/mcp.ts](../../../../sources/nanbingxyz__5ire/src/utils/mcp.ts) | mcp signal |
| mcp | [src/types/mcp.d.ts](../../../../sources/nanbingxyz__5ire/src/types/mcp.d.ts) | mcp signal |
| agentRuntime | [src/renderer/pages/tool/index.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/index.tsx) | agentRuntime signal |
| agentRuntime | [src/renderer/pages/tool/InstallDialog.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/InstallDialog.tsx) | agentRuntime signal |
| agentRuntime | [src/renderer/pages/tool/MarketDrawer.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/MarketDrawer.tsx) | agentRuntime signal |
| agentRuntime | [src/renderer/pages/tool/NewButton.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/NewButton.tsx) | agentRuntime signal |
| entrypoints | [src/main/main.ts](../../../../sources/nanbingxyz__5ire/src/main/main.ts) | entrypoints signal |
| config | [package.json](../../../../sources/nanbingxyz__5ire/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/nanbingxyz__5ire/tsconfig.json) | config signal |
| ci | [.github/workflows/auto-release.yml](../../../../sources/nanbingxyz__5ire/.github/workflows/auto-release.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/main/main.ts](../../../../sources/nanbingxyz__5ire/src/main/main.ts) |
| agentRuntime | 40 | [src/renderer/pages/tool/index.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/index.tsx)<br>[src/renderer/pages/tool/InstallDialog.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/InstallDialog.tsx)<br>[src/renderer/pages/tool/MarketDrawer.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/MarketDrawer.tsx)<br>[src/renderer/pages/tool/NewButton.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/NewButton.tsx)<br>[src/renderer/pages/tool/ServerBrowser.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/ServerBrowser.tsx)<br>[src/renderer/pages/tool/ServerDeleteConfirm.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/ServerDeleteConfirm.tsx)<br>[src/renderer/pages/tool/ServerEditDialog.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/ServerEditDialog.tsx)<br>[src/renderer/pages/tool/ServerGrid.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/ServerGrid.tsx) |
| mcp | 17 | [test/utils/mcp.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/mcp.test.ts)<br>[src/mcp.config.ts](../../../../sources/nanbingxyz__5ire/src/mcp.config.ts)<br>[src/utils/mcp.ts](../../../../sources/nanbingxyz__5ire/src/utils/mcp.ts)<br>[src/types/mcp.d.ts](../../../../sources/nanbingxyz__5ire/src/types/mcp.d.ts)<br>[src/main/mcp.ts](../../../../sources/nanbingxyz__5ire/src/main/mcp.ts)<br>[src/main/services/mcp-completion-handler.ts](../../../../sources/nanbingxyz__5ire/src/main/services/mcp-completion-handler.ts)<br>[src/main/services/mcp-connections-manager.ts](../../../../sources/nanbingxyz__5ire/src/main/services/mcp-connections-manager.ts)<br>[src/main/services/mcp-content-converter.ts](../../../../sources/nanbingxyz__5ire/src/main/services/mcp-content-converter.ts) |
| retrieval | 31 | [test/main/knowledge.spec.ts](../../../../sources/nanbingxyz__5ire/test/main/knowledge.spec.ts)<br>[src/types/knowledge.d.ts](../../../../sources/nanbingxyz__5ire/src/types/knowledge.d.ts)<br>[src/renderer/index.ejs](../../../../sources/nanbingxyz__5ire/src/renderer/index.ejs)<br>[src/renderer/index.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/index.tsx)<br>[src/renderer/pages/usage/index.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/usage/index.tsx)<br>[src/renderer/pages/tool/index.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/index.tsx)<br>[src/renderer/pages/settings/index.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/settings/index.tsx)<br>[src/renderer/pages/providers/index.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/providers/index.tsx) |
| spec | 10 | [test/main/docloader.spec.ts](../../../../sources/nanbingxyz__5ire/test/main/docloader.spec.ts)<br>[test/main/embedder.spec.ts](../../../../sources/nanbingxyz__5ire/test/main/embedder.spec.ts)<br>[test/main/knowledge.spec.ts](../../../../sources/nanbingxyz__5ire/test/main/knowledge.spec.ts)<br>[test/main/util.spec.ts](../../../../sources/nanbingxyz__5ire/test/main/util.spec.ts)<br>[test/intellichat/anthropic-chat-service.spec.ts](../../../../sources/nanbingxyz__5ire/test/intellichat/anthropic-chat-service.spec.ts)<br>[test/intellichat/reader.spec.ts](../../../../sources/nanbingxyz__5ire/test/intellichat/reader.spec.ts)<br>[test/intellichat/validators.spec.ts](../../../../sources/nanbingxyz__5ire/test/intellichat/validators.spec.ts)<br>[src/assets/images/design.dark.png](../../../../sources/nanbingxyz__5ire/src/assets/images/design.dark.png) |
| eval | 30 | [test/utils/command-line.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/command-line.test.ts)<br>[test/utils/mcp.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/mcp.test.ts)<br>[test/utils/token.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/token.test.ts)<br>[test/utils/util.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/util.test.ts)<br>[test/utils/validators.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/validators.test.ts)<br>[test/resource/test.csv](../../../../sources/nanbingxyz__5ire/test/resource/test.csv)<br>[test/resource/test.htm](../../../../sources/nanbingxyz__5ire/test/resource/test.htm)<br>[test/resource/test.html](../../../../sources/nanbingxyz__5ire/test/resource/test.html) |
| security | 1 | [src/types/auth.d.ts](../../../../sources/nanbingxyz__5ire/src/types/auth.d.ts) |
| ci | 2 | [.github/workflows/auto-release.yml](../../../../sources/nanbingxyz__5ire/.github/workflows/auto-release.yml)<br>[.github/workflows/daily-summary.yml](../../../../sources/nanbingxyz__5ire/.github/workflows/daily-summary.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/nanbingxyz__5ire/README.md)<br>[docs/ARCHITECTURE.md](../../../../sources/nanbingxyz__5ire/docs/ARCHITECTURE.md) |
| config | 2 | [package.json](../../../../sources/nanbingxyz__5ire/package.json)<br>[tsconfig.json](../../../../sources/nanbingxyz__5ire/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 30 | [test/utils/command-line.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/command-line.test.ts)<br>[test/utils/mcp.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/mcp.test.ts)<br>[test/utils/token.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/token.test.ts)<br>[test/utils/util.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/util.test.ts)<br>[test/utils/validators.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/validators.test.ts)<br>[test/resource/test.csv](../../../../sources/nanbingxyz__5ire/test/resource/test.csv) |
| CI workflows | 2 | [.github/workflows/auto-release.yml](../../../../sources/nanbingxyz__5ire/.github/workflows/auto-release.yml)<br>[.github/workflows/daily-summary.yml](../../../../sources/nanbingxyz__5ire/.github/workflows/daily-summary.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [src/types/auth.d.ts](../../../../sources/nanbingxyz__5ire/src/types/auth.d.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `test/utils/mcp.test.ts`, `src/mcp.config.ts`, `src/utils/mcp.ts`.
2. Trace execution through entrypoints: `src/main/main.ts`.
3. Map agent/tool runtime through: `src/renderer/pages/tool/index.tsx`, `src/renderer/pages/tool/InstallDialog.tsx`, `src/renderer/pages/tool/MarketDrawer.tsx`.
4. Inspect retrieval/memory/indexing through: `test/main/knowledge.spec.ts`, `src/types/knowledge.d.ts`, `src/renderer/index.ejs`.
5. Verify behavior through test/eval files: `test/utils/command-line.test.ts`, `test/utils/mcp.test.ts`, `test/utils/token.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 5ire is a cross platform desktop AI assistant, MCP client. It compatible with major service providers, supports local kn. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, modelcontextprotocol, next이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
