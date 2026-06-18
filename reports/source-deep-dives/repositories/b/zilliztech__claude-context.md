# zilliztech/claude-context Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Code search MCP for Claude Code. Make entire codebase the context for any coding agent.

## 요약

- 조사 단위: `sources/zilliztech__claude-context` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 172 files, 49 directories, depth score 103, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/mcp/CONTRIBUTING.md, packages/mcp/package.json, packages/mcp/README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | zilliztech/claude-context |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 11880 |
| Forks | 877 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/zilliztech__claude-context](../../../../sources/zilliztech__claude-context) |
| Existing report | [reports/global-trending/repositories/zilliztech__claude-context.md](../../../global-trending/repositories/zilliztech__claude-context.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 172 / 49 |
| Max observed depth | 6 |
| Top directories | .github, assets, docs, evaluation, examples, packages, python, scripts |
| Top extensions | .ts: 53, .md: 26, .py: 18, .json: 17, .png: 14, .js: 9, .wasm: 9, (none): 5, .log: 4, .css: 2, .html: 2, .jpeg: 2 |
| Source patterns | monorepo/workspace, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/core | packages workspace | 28 |
| packages/mcp | packages workspace | 24 |
| docs | documentation surface | 9 |
| examples/basic-usage | examples workspace | 3 |
| packages/chrome-extension | packages workspace | 3 |
| packages/vscode-extension | packages workspace | 3 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| evaluation | top-level component | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| packages | source boundary | 1 |
| python | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | pnpm -r --filter='!./examples/*' build && pnpm -r --filter='./examples/*' build |
| build | package.json | build:core | pnpm --filter @zilliz/claude-context-core build |
| build | package.json | build:vscode | pnpm --filter semanticcodesearch compile |
| build | package.json | build:mcp | pnpm --filter @zilliz/claude-context-mcp build |
| serve-dev | package.json | dev | pnpm -r dev |
| serve-dev | package.json | dev:core | pnpm --filter @zilliz/claude-context-core dev |
| serve-dev | package.json | dev:vscode | pnpm --filter semanticcodesearch watch |
| serve-dev | package.json | dev:mcp | pnpm --filter @zilliz/claude-context-mcp dev |
| utility | package.json | clean | pnpm -r clean |
| quality | package.json | lint | pnpm -r lint |
| quality | package.json | lint:fix | pnpm -r run lint:fix |
| quality | package.json | typecheck | pnpm -r run typecheck |
| build | package.json | release:core | pnpm --filter @zilliz/claude-context-core... run build && pnpm --filter @zilliz/claude-context-core publish --access public --no-git-checks |
| build | package.json | release:mcp | pnpm --filter @zilliz/claude-context-mcp... run build && pnpm --filter @zilliz/claude-context-mcp publish --access public --no-git-checks |
| build | package.json | release:vscode | pnpm --filter @zilliz/claude-context-core build && pnpm --filter semanticcodesearch run webpack && pnpm --filter semanticcodesearch release |
| serve-dev | package.json | example:basic | pnpm --filter claude-context-basic-example start |
| build | package.json | benchmark | node scripts/build-benchmark.js |


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
| mcp | [packages/mcp/CONTRIBUTING.md](../../../../sources/zilliztech__claude-context/packages/mcp/CONTRIBUTING.md) | mcp signal |
| mcp | [packages/mcp/package.json](../../../../sources/zilliztech__claude-context/packages/mcp/package.json) | mcp signal |
| mcp | [packages/mcp/README.md](../../../../sources/zilliztech__claude-context/packages/mcp/README.md) | mcp signal |
| mcp | [packages/mcp/tsconfig.json](../../../../sources/zilliztech__claude-context/packages/mcp/tsconfig.json) | mcp signal |
| agentRuntime | [packages/core/src/context.abort.test.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.abort.test.ts) | agentRuntime signal |
| agentRuntime | [packages/core/src/context.embedding-error.test.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.embedding-error.test.ts) | agentRuntime signal |
| agentRuntime | [packages/core/src/context.ignore-patterns.test.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.ignore-patterns.test.ts) | agentRuntime signal |
| agentRuntime | [packages/core/src/context.splitter.test.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.splitter.test.ts) | agentRuntime signal |
| entrypoints | [packages/mcp/src/index.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/index.ts) | entrypoints signal |
| entrypoints | [packages/core/src/index.ts](../../../../sources/zilliztech__claude-context/packages/core/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/zilliztech__claude-context/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/zilliztech__claude-context/pnpm-workspace.yaml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [packages/mcp/src/index.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/index.ts)<br>[packages/core/src/index.ts](../../../../sources/zilliztech__claude-context/packages/core/src/index.ts) |
| agentRuntime | 5 | [packages/core/src/context.abort.test.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.abort.test.ts)<br>[packages/core/src/context.embedding-error.test.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.embedding-error.test.ts)<br>[packages/core/src/context.ignore-patterns.test.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.ignore-patterns.test.ts)<br>[packages/core/src/context.splitter.test.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.splitter.test.ts)<br>[packages/core/src/context.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.ts) |
| mcp | 18 | [packages/mcp/CONTRIBUTING.md](../../../../sources/zilliztech__claude-context/packages/mcp/CONTRIBUTING.md)<br>[packages/mcp/package.json](../../../../sources/zilliztech__claude-context/packages/mcp/package.json)<br>[packages/mcp/README.md](../../../../sources/zilliztech__claude-context/packages/mcp/README.md)<br>[packages/mcp/tsconfig.json](../../../../sources/zilliztech__claude-context/packages/mcp/tsconfig.json)<br>[packages/mcp/src/config.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/config.ts)<br>[packages/mcp/src/embedding.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/embedding.ts)<br>[packages/mcp/src/handlers.get-indexing-status.test.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/handlers.get-indexing-status.test.ts)<br>[packages/mcp/src/handlers.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/handlers.ts) |
| retrieval | 19 | [packages/mcp/src/embedding.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/embedding.ts)<br>[packages/mcp/src/index.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/index.ts)<br>[packages/core/src/context.embedding-error.test.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.embedding-error.test.ts)<br>[packages/core/src/index.ts](../../../../sources/zilliztech__claude-context/packages/core/src/index.ts)<br>[packages/core/src/vectordb/index.ts](../../../../sources/zilliztech__claude-context/packages/core/src/vectordb/index.ts)<br>[packages/core/src/utils/index.ts](../../../../sources/zilliztech__claude-context/packages/core/src/utils/index.ts)<br>[packages/core/src/splitter/index.ts](../../../../sources/zilliztech__claude-context/packages/core/src/splitter/index.ts)<br>[packages/core/src/embedding/base-embedding.ts](../../../../sources/zilliztech__claude-context/packages/core/src/embedding/base-embedding.ts) |
| spec | 1 | [assets/Architecture.png](../../../../sources/zilliztech__claude-context/assets/Architecture.png) |
| eval | 43 | [build-benchmark.json](../../../../sources/zilliztech__claude-context/build-benchmark.json)<br>[scripts/build-benchmark.js](../../../../sources/zilliztech__claude-context/scripts/build-benchmark.js)<br>[python/test_context.ts](../../../../sources/zilliztech__claude-context/python/test_context.ts)<br>[python/test_endtoend.py](../../../../sources/zilliztech__claude-context/python/test_endtoend.py)<br>[packages/mcp/src/handlers.get-indexing-status.test.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/handlers.get-indexing-status.test.ts)<br>[packages/mcp/src/snapshot.request-options.test.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/snapshot.request-options.test.ts)<br>[packages/core/src/context.abort.test.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.abort.test.ts)<br>[packages/core/src/context.embedding-error.test.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.embedding-error.test.ts) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/zilliztech__claude-context/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/zilliztech__claude-context/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 23 | [README.md](../../../../sources/zilliztech__claude-context/README.md)<br>[python/README.md](../../../../sources/zilliztech__claude-context/python/README.md)<br>[packages/vscode-extension/README.md](../../../../sources/zilliztech__claude-context/packages/vscode-extension/README.md)<br>[packages/mcp/README.md](../../../../sources/zilliztech__claude-context/packages/mcp/README.md)<br>[packages/core/README.md](../../../../sources/zilliztech__claude-context/packages/core/README.md)<br>[packages/chrome-extension/README.md](../../../../sources/zilliztech__claude-context/packages/chrome-extension/README.md)<br>[examples/README.md](../../../../sources/zilliztech__claude-context/examples/README.md)<br>[examples/basic-usage/README.md](../../../../sources/zilliztech__claude-context/examples/basic-usage/README.md) |
| config | 14 | [package.json](../../../../sources/zilliztech__claude-context/package.json)<br>[pnpm-workspace.yaml](../../../../sources/zilliztech__claude-context/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/zilliztech__claude-context/tsconfig.json)<br>[packages/vscode-extension/package.json](../../../../sources/zilliztech__claude-context/packages/vscode-extension/package.json)<br>[packages/vscode-extension/tsconfig.json](../../../../sources/zilliztech__claude-context/packages/vscode-extension/tsconfig.json)<br>[packages/mcp/package.json](../../../../sources/zilliztech__claude-context/packages/mcp/package.json)<br>[packages/mcp/tsconfig.json](../../../../sources/zilliztech__claude-context/packages/mcp/tsconfig.json)<br>[packages/core/package.json](../../../../sources/zilliztech__claude-context/packages/core/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 43 | [build-benchmark.json](../../../../sources/zilliztech__claude-context/build-benchmark.json)<br>[scripts/build-benchmark.js](../../../../sources/zilliztech__claude-context/scripts/build-benchmark.js)<br>[python/test_context.ts](../../../../sources/zilliztech__claude-context/python/test_context.ts)<br>[python/test_endtoend.py](../../../../sources/zilliztech__claude-context/python/test_endtoend.py)<br>[packages/mcp/src/handlers.get-indexing-status.test.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/handlers.get-indexing-status.test.ts)<br>[packages/mcp/src/snapshot.request-options.test.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/snapshot.request-options.test.ts) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/zilliztech__claude-context/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/zilliztech__claude-context/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/mcp/CONTRIBUTING.md`, `packages/mcp/package.json`, `packages/mcp/README.md`.
2. Trace execution through entrypoints: `packages/mcp/src/index.ts`, `packages/core/src/index.ts`.
3. Map agent/tool runtime through: `packages/core/src/context.abort.test.ts`, `packages/core/src/context.embedding-error.test.ts`, `packages/core/src/context.ignore-patterns.test.ts`.
4. Inspect retrieval/memory/indexing through: `packages/mcp/src/embedding.ts`, `packages/mcp/src/index.ts`, `packages/core/src/context.embedding-error.test.ts`.
5. Verify behavior through test/eval files: `build-benchmark.json`, `scripts/build-benchmark.js`, `python/test_context.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Code search MCP for Claude Code. Make entire codebase the context for any coding agent.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
