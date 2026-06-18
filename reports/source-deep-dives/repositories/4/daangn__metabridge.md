# daangn/metabridge Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

🔗 Defines the communication layer between mobile native(iOS/Android) and webview using JSON Schema and automatically generates SDK code. (TypeScript, Swift, Kotlin)

## 요약

- 조사 단위: `sources/daangn__metabridge` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,130 files, 36 directories, depth score 106, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=schema/src/index.ts, plugins/typescript-docs/template/src/App.tsx, plugins/typescript-docs/template/src/main.css이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | daangn/metabridge |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | TypeScript |
| Stars | 65 |
| Forks | 1 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/daangn__metabridge](../../../../sources/daangn__metabridge) |
| Existing report | [reports/korea-trending/repositories/daangn__metabridge.md](../../../korea-trending/repositories/daangn__metabridge.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1130 / 36 |
| Max observed depth | 7 |
| Top directories | .yarn, cli, plugins, schema |
| Top extensions | .zip: 1047, .json: 28, .ts: 20, (none): 12, .tsx: 7, .js: 6, .cjs: 2, .md: 2, .yml: 2, .css: 1, .html: 1, .lock: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| cli | top-level component | 1 |
| plugins | top-level component | 1 |
| schema | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | yarn workspaces foreach -t --all run build |
| build | package.json | lerna:publish | yarn build && lerna publish |
| test | package.json | test | yarn workspaces foreach -t run test |
| utility | package.json | version | yarn install && git stage yarn.lock |


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
| entrypoints | [schema/src/index.ts](../../../../sources/daangn__metabridge/schema/src/index.ts) | entrypoints signal |
| entrypoints | [plugins/typescript-docs/template/src/App.tsx](../../../../sources/daangn__metabridge/plugins/typescript-docs/template/src/App.tsx) | entrypoints signal |
| entrypoints | [plugins/typescript-docs/template/src/main.css](../../../../sources/daangn__metabridge/plugins/typescript-docs/template/src/main.css) | entrypoints signal |
| entrypoints | [plugins/typescript-docs/template/src/main.tsx](../../../../sources/daangn__metabridge/plugins/typescript-docs/template/src/main.tsx) | entrypoints signal |
| config | [package.json](../../../../sources/daangn__metabridge/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/daangn__metabridge/tsconfig.json) | config signal |
| config | [schema/package.json](../../../../sources/daangn__metabridge/schema/package.json) | config signal |
| config | [schema/tsconfig.json](../../../../sources/daangn__metabridge/schema/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/daangn__metabridge/README.md) | docs signal |
| docs | [schema/README.md](../../../../sources/daangn__metabridge/schema/README.md) | docs signal |
| eval | [plugins/typescript-docs/test/index.test.ts](../../../../sources/daangn__metabridge/plugins/typescript-docs/test/index.test.ts) | eval support |
| eval | [plugins/typescript-docs/test/injectDriver.js](../../../../sources/daangn__metabridge/plugins/typescript-docs/test/injectDriver.js) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 13 | [schema/src/index.ts](../../../../sources/daangn__metabridge/schema/src/index.ts)<br>[plugins/typescript-docs/template/src/App.tsx](../../../../sources/daangn__metabridge/plugins/typescript-docs/template/src/App.tsx)<br>[plugins/typescript-docs/template/src/main.css](../../../../sources/daangn__metabridge/plugins/typescript-docs/template/src/main.css)<br>[plugins/typescript-docs/template/src/main.tsx](../../../../sources/daangn__metabridge/plugins/typescript-docs/template/src/main.tsx)<br>[plugins/typescript-docs/src/index.ts](../../../../sources/daangn__metabridge/plugins/typescript-docs/src/index.ts)<br>[plugins/typescript/src/index.ts](../../../../sources/daangn__metabridge/plugins/typescript/src/index.ts)<br>[plugins/swift/src/index.ts](../../../../sources/daangn__metabridge/plugins/swift/src/index.ts)<br>[plugins/kotlin/src/index.ts](../../../../sources/daangn__metabridge/plugins/kotlin/src/index.ts) |
| agentRuntime | 2 | [.yarn/cache/agent-base-npm-6.0.2-428f325a93-21fb903e09.zip](../../../../sources/daangn__metabridge/.yarn/cache/agent-base-npm-6.0.2-428f325a93-21fb903e09.zip)<br>[.yarn/cache/agent-base-npm-7.1.3-b2c16e72fb-3db6d8d465.zip](../../../../sources/daangn__metabridge/.yarn/cache/agent-base-npm-7.1.3-b2c16e72fb-3db6d8d465.zip) |
| mcp | 0 | not obvious |
| retrieval | 15 | [schema/src/index.ts](../../../../sources/daangn__metabridge/schema/src/index.ts)<br>[plugins/typescript-docs/test/index.test.ts](../../../../sources/daangn__metabridge/plugins/typescript-docs/test/index.test.ts)<br>[plugins/typescript-docs/template/index.html](../../../../sources/daangn__metabridge/plugins/typescript-docs/template/index.html)<br>[plugins/typescript-docs/src/index.ts](../../../../sources/daangn__metabridge/plugins/typescript-docs/src/index.ts)<br>[plugins/typescript/test/index.test.ts](../../../../sources/daangn__metabridge/plugins/typescript/test/index.test.ts)<br>[plugins/typescript/src/index.ts](../../../../sources/daangn__metabridge/plugins/typescript/src/index.ts)<br>[plugins/swift/test/index.test.ts](../../../../sources/daangn__metabridge/plugins/swift/test/index.test.ts)<br>[plugins/swift/src/index.ts](../../../../sources/daangn__metabridge/plugins/swift/src/index.ts) |
| spec | 0 | not obvious |
| eval | 12 | [plugins/typescript-docs/test/index.test.ts](../../../../sources/daangn__metabridge/plugins/typescript-docs/test/index.test.ts)<br>[plugins/typescript-docs/test/injectDriver.js](../../../../sources/daangn__metabridge/plugins/typescript-docs/test/injectDriver.js)<br>[plugins/typescript-docs/test/schema.json](../../../../sources/daangn__metabridge/plugins/typescript-docs/test/schema.json)<br>[plugins/typescript/test/index.test.ts](../../../../sources/daangn__metabridge/plugins/typescript/test/index.test.ts)<br>[plugins/typescript/test/schema.json](../../../../sources/daangn__metabridge/plugins/typescript/test/schema.json)<br>[plugins/swift/test/index.test.ts](../../../../sources/daangn__metabridge/plugins/swift/test/index.test.ts)<br>[plugins/swift/test/schema.json](../../../../sources/daangn__metabridge/plugins/swift/test/schema.json)<br>[plugins/kotlin/test/index.test.ts](../../../../sources/daangn__metabridge/plugins/kotlin/test/index.test.ts) |
| security | 2 | [.yarn/cache/@octokit-auth-token-npm-2.5.0-a1c6ffb640-95d7928b6f.zip](../../../../sources/daangn__metabridge/.yarn/cache/@octokit-auth-token-npm-2.5.0-a1c6ffb640-95d7928b6f.zip)<br>[.yarn/cache/oauth-sign-npm-0.9.0-7aa9422221-1809a366d2.zip](../../../../sources/daangn__metabridge/.yarn/cache/oauth-sign-npm-0.9.0-7aa9422221-1809a366d2.zip) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/daangn__metabridge/README.md)<br>[schema/README.md](../../../../sources/daangn__metabridge/schema/README.md) |
| config | 18 | [package.json](../../../../sources/daangn__metabridge/package.json)<br>[tsconfig.json](../../../../sources/daangn__metabridge/tsconfig.json)<br>[schema/package.json](../../../../sources/daangn__metabridge/schema/package.json)<br>[schema/tsconfig.json](../../../../sources/daangn__metabridge/schema/tsconfig.json)<br>[plugins/typescript-docs/package.json](../../../../sources/daangn__metabridge/plugins/typescript-docs/package.json)<br>[plugins/typescript-docs/tsconfig.json](../../../../sources/daangn__metabridge/plugins/typescript-docs/tsconfig.json)<br>[plugins/typescript/package.json](../../../../sources/daangn__metabridge/plugins/typescript/package.json)<br>[plugins/typescript/tsconfig.json](../../../../sources/daangn__metabridge/plugins/typescript/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 12 | [plugins/typescript-docs/test/index.test.ts](../../../../sources/daangn__metabridge/plugins/typescript-docs/test/index.test.ts)<br>[plugins/typescript-docs/test/injectDriver.js](../../../../sources/daangn__metabridge/plugins/typescript-docs/test/injectDriver.js)<br>[plugins/typescript-docs/test/schema.json](../../../../sources/daangn__metabridge/plugins/typescript-docs/test/schema.json)<br>[plugins/typescript/test/index.test.ts](../../../../sources/daangn__metabridge/plugins/typescript/test/index.test.ts)<br>[plugins/typescript/test/schema.json](../../../../sources/daangn__metabridge/plugins/typescript/test/schema.json)<br>[plugins/swift/test/index.test.ts](../../../../sources/daangn__metabridge/plugins/swift/test/index.test.ts) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [.yarn/cache/@octokit-auth-token-npm-2.5.0-a1c6ffb640-95d7928b6f.zip](../../../../sources/daangn__metabridge/.yarn/cache/@octokit-auth-token-npm-2.5.0-a1c6ffb640-95d7928b6f.zip)<br>[.yarn/cache/oauth-sign-npm-0.9.0-7aa9422221-1809a366d2.zip](../../../../sources/daangn__metabridge/.yarn/cache/oauth-sign-npm-0.9.0-7aa9422221-1809a366d2.zip) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `schema/src/index.ts`, `plugins/typescript-docs/template/src/App.tsx`, `plugins/typescript-docs/template/src/main.css`.
2. Trace execution through entrypoints: `schema/src/index.ts`, `plugins/typescript-docs/template/src/App.tsx`, `plugins/typescript-docs/template/src/main.css`.
3. Map agent/tool runtime through: `.yarn/cache/agent-base-npm-6.0.2-428f325a93-21fb903e09.zip`, `.yarn/cache/agent-base-npm-7.1.3-b2c16e72fb-3db6d8d465.zip`.
4. Inspect retrieval/memory/indexing through: `schema/src/index.ts`, `plugins/typescript-docs/test/index.test.ts`, `plugins/typescript-docs/template/index.html`.
5. Verify behavior through test/eval files: `plugins/typescript-docs/test/index.test.ts`, `plugins/typescript-docs/test/injectDriver.js`, `plugins/typescript-docs/test/schema.json`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 🔗 Defines the communication layer between mobile native iOS/Android and webview using JSON Schema and automatically gen. 핵심 구조 신호는 TypeScript, package.json, README.md, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
