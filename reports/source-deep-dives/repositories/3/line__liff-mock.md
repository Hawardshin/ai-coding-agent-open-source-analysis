# line/liff-mock Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

LIFF Mock is a LIFF Plugin that make testing your LIFF app easy.

## 요약

- 조사 단위: `sources/line__liff-mock` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 123 files, 10 directories, depth score 86, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 retrieval/vector path, eval/test harness, security/policy surface 구조로 읽힌다. 핵심 소스 근거는 eval=src/plugin.test.ts, src/shared.test.ts, src/store/GlobalStore.test.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 quality and evaluation comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/liff-mock |
| Topic | Evals, Observability, and Quality / 평가/관측/품질 |
| Region | korea |
| Language | TypeScript |
| Stars | 45 |
| Forks | 6 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/line__liff-mock](../../../../sources/line__liff-mock) |
| Existing report | [reports/korea-trending/repositories/line__liff-mock.md](../../../korea-trending/repositories/line__liff-mock.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 123 / 10 |
| Max observed depth | 4 |
| Top directories | .github, examples, src |
| Top extensions | .ts: 102, .json: 8, .js: 4, (none): 4, .html: 2, .md: 2, .yml: 1 |
| Source patterns | retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 45 |
| examples/npm-typescript-example | examples workspace | 5 |
| examples/cdn-example | examples workspace | 2 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | clean | rm -rf dist |
| quality | package.json | lint | eslint src |
| quality | package.json | format | prettier --check src |
| quality | package.json | type-check | tsc --noEmit |
| test | package.json | code-check | npm run lint && npm run format && npm run type-check && npm run test |
| build | package.json | build:cdn | webpack |
| build | package.json | build:npm | tsc |
| build | package.json | build:cdn:prod | NODE_ENV=production npm run build:cdn |
| build | package.json | build:npm:prod | NODE_ENV=production npm run build:npm |
| build | package.json | build | npm run clean && npm run build:npm && npm run build:cdn |
| build | package.json | build:prod | npm run clean && npm run build:npm:prod && npm run build:cdn:prod |
| serve-dev | package.json | serve | webpack serve |
| test | package.json | test | jest |
| test | package.json | test:watch | npm run test -- --watch |
| build | package.json | prepublishOnly | npm run code-check && npm run build:prod |


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
| eval | [src/plugin.test.ts](../../../../sources/line__liff-mock/src/plugin.test.ts) | eval signal |
| eval | [src/shared.test.ts](../../../../sources/line__liff-mock/src/shared.test.ts) | eval signal |
| eval | [src/store/GlobalStore.test.ts](../../../../sources/line__liff-mock/src/store/GlobalStore.test.ts) | eval signal |
| eval | [src/store/MockDataStore.test.ts](../../../../sources/line__liff-mock/src/store/MockDataStore.test.ts) | eval signal |
| entrypoints | [src/index.ts](../../../../sources/line__liff-mock/src/index.ts) | entrypoints signal |
| entrypoints | [examples/npm-typescript-example/src/index.ts](../../../../sources/line__liff-mock/examples/npm-typescript-example/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/line__liff-mock/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/line__liff-mock/tsconfig.json) | config signal |
| config | [examples/npm-typescript-example/package.json](../../../../sources/line__liff-mock/examples/npm-typescript-example/package.json) | config signal |
| config | [examples/npm-typescript-example/tsconfig.json](../../../../sources/line__liff-mock/examples/npm-typescript-example/tsconfig.json) | config signal |
| ci | [.github/workflows/code-check.yml](../../../../sources/line__liff-mock/.github/workflows/code-check.yml) | ci signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/index.ts](../../../../sources/line__liff-mock/src/index.ts)<br>[examples/npm-typescript-example/src/index.ts](../../../../sources/line__liff-mock/examples/npm-typescript-example/src/index.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 5 | [src/index.ts](../../../../sources/line__liff-mock/src/index.ts)<br>[examples/npm-typescript-example/src/index.ts](../../../../sources/line__liff-mock/examples/npm-typescript-example/src/index.ts)<br>[examples/npm-typescript-example/public/index.html](../../../../sources/line__liff-mock/examples/npm-typescript-example/public/index.html)<br>[examples/cdn-example/index.html](../../../../sources/line__liff-mock/examples/cdn-example/index.html)<br>[examples/cdn-example/index.js](../../../../sources/line__liff-mock/examples/cdn-example/index.js) |
| spec | 0 | not obvious |
| eval | 48 | [src/plugin.test.ts](../../../../sources/line__liff-mock/src/plugin.test.ts)<br>[src/shared.test.ts](../../../../sources/line__liff-mock/src/shared.test.ts)<br>[src/store/GlobalStore.test.ts](../../../../sources/line__liff-mock/src/store/GlobalStore.test.ts)<br>[src/store/MockDataStore.test.ts](../../../../sources/line__liff-mock/src/store/MockDataStore.test.ts)<br>[src/api/_addListener.test.ts](../../../../sources/line__liff-mock/src/api/_addListener.test.ts)<br>[src/api/_call.test.ts](../../../../sources/line__liff-mock/src/api/_call.test.ts)<br>[src/api/_dispatchEvent.test.ts](../../../../sources/line__liff-mock/src/api/_dispatchEvent.test.ts)<br>[src/api/_postMessage.test.ts](../../../../sources/line__liff-mock/src/api/_postMessage.test.ts) |
| security | 2 | [src/api/permission.test.ts](../../../../sources/line__liff-mock/src/api/permission.test.ts)<br>[src/api/permission.ts](../../../../sources/line__liff-mock/src/api/permission.ts) |
| ci | 1 | [.github/workflows/code-check.yml](../../../../sources/line__liff-mock/.github/workflows/code-check.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/line__liff-mock/README.md) |
| config | 4 | [package.json](../../../../sources/line__liff-mock/package.json)<br>[tsconfig.json](../../../../sources/line__liff-mock/tsconfig.json)<br>[examples/npm-typescript-example/package.json](../../../../sources/line__liff-mock/examples/npm-typescript-example/package.json)<br>[examples/npm-typescript-example/tsconfig.json](../../../../sources/line__liff-mock/examples/npm-typescript-example/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 48 | [src/plugin.test.ts](../../../../sources/line__liff-mock/src/plugin.test.ts)<br>[src/shared.test.ts](../../../../sources/line__liff-mock/src/shared.test.ts)<br>[src/store/GlobalStore.test.ts](../../../../sources/line__liff-mock/src/store/GlobalStore.test.ts)<br>[src/store/MockDataStore.test.ts](../../../../sources/line__liff-mock/src/store/MockDataStore.test.ts)<br>[src/api/_addListener.test.ts](../../../../sources/line__liff-mock/src/api/_addListener.test.ts)<br>[src/api/_call.test.ts](../../../../sources/line__liff-mock/src/api/_call.test.ts) |
| CI workflows | 1 | [.github/workflows/code-check.yml](../../../../sources/line__liff-mock/.github/workflows/code-check.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [src/api/permission.test.ts](../../../../sources/line__liff-mock/src/api/permission.test.ts)<br>[src/api/permission.ts](../../../../sources/line__liff-mock/src/api/permission.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `src/plugin.test.ts`, `src/shared.test.ts`, `src/store/GlobalStore.test.ts`.
2. Trace execution through entrypoints: `src/index.ts`, `examples/npm-typescript-example/src/index.ts`.
3. Inspect retrieval/memory/indexing through: `src/index.ts`, `examples/npm-typescript-example/src/index.ts`, `examples/npm-typescript-example/public/index.html`.
4. Verify behavior through test/eval files: `src/plugin.test.ts`, `src/shared.test.ts`, `src/store/GlobalStore.test.ts`.

## Existing Repository Insight

평가/관측/품질 관점에서 LIFF Mock is a LIFF Plugin that make testing your LIFF app easy.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 평가/관측/품질 레포입니다. 활용 관점은 quality and evaluation comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
