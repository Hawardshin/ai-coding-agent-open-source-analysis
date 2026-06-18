# daangn/greenhouse-js Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

JavaScript toolkit for Greenhouse API

## 요약

- 조사 단위: `sources/daangn__greenhouse-js` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 34 files, 13 directories, depth score 63, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/greenhouse-jobboard-js/src/index.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | daangn/greenhouse-js |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 9 |
| Forks | 1 |
| License | MIT |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/daangn__greenhouse-js](../../../../sources/daangn__greenhouse-js) |
| Existing report | [reports/korea-trending/repositories/daangn__greenhouse-js.md](../../../korea-trending/repositories/daangn__greenhouse-js.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 34 / 13 |
| Max observed depth | 5 |
| Top directories | .changeset, .github, .yarn, packages |
| Top extensions | .json: 11, (none): 9, .ts: 5, .md: 4, .yml: 2, .cjs: 1, .js: 1, .lock: 1 |
| Source patterns | monorepo/workspace, retrieval/vector path |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/greenhouse-jobboard-js | packages workspace | 4 |
| packages/@karrotmarket | packages workspace | 3 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |
| packages/greenhouse-harvest-js | packages workspace | 1 |
| packages/react-greenhouse-form | packages workspace | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | changeset | changeset |


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
| entrypoints | [packages/greenhouse-jobboard-js/src/index.ts](../../../../sources/daangn__greenhouse-js/packages/greenhouse-jobboard-js/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/daangn__greenhouse-js/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/daangn__greenhouse-js/tsconfig.json) | config signal |
| config | [packages/react-greenhouse-form/package.json](../../../../sources/daangn__greenhouse-js/packages/react-greenhouse-form/package.json) | config signal |
| config | [packages/greenhouse-jobboard-js/package.json](../../../../sources/daangn__greenhouse-js/packages/greenhouse-jobboard-js/package.json) | config signal |
| docs | [README.md](../../../../sources/daangn__greenhouse-js/README.md) | docs signal |
| docs | [.changeset/README.md](../../../../sources/daangn__greenhouse-js/.changeset/README.md) | docs signal |
| ci | [.github/workflows/release.yml](../../../../sources/daangn__greenhouse-js/.github/workflows/release.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [packages/greenhouse-jobboard-js/src/index.ts](../../../../sources/daangn__greenhouse-js/packages/greenhouse-jobboard-js/src/index.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 2 | [packages/greenhouse-jobboard-js/src/index.ts](../../../../sources/daangn__greenhouse-js/packages/greenhouse-jobboard-js/src/index.ts)<br>[packages/@karrotmarket/gatsby-source-greenhouse-jobboard/index.js](../../../../sources/daangn__greenhouse-js/packages/@karrotmarket/gatsby-source-greenhouse-jobboard/index.js) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/release.yml](../../../../sources/daangn__greenhouse-js/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/daangn__greenhouse-js/README.md)<br>[.changeset/README.md](../../../../sources/daangn__greenhouse-js/.changeset/README.md) |
| config | 8 | [package.json](../../../../sources/daangn__greenhouse-js/package.json)<br>[tsconfig.json](../../../../sources/daangn__greenhouse-js/tsconfig.json)<br>[packages/react-greenhouse-form/package.json](../../../../sources/daangn__greenhouse-js/packages/react-greenhouse-form/package.json)<br>[packages/greenhouse-jobboard-js/package.json](../../../../sources/daangn__greenhouse-js/packages/greenhouse-jobboard-js/package.json)<br>[packages/greenhouse-jobboard-js/tsconfig.json](../../../../sources/daangn__greenhouse-js/packages/greenhouse-jobboard-js/tsconfig.json)<br>[packages/greenhouse-harvest-js/package.json](../../../../sources/daangn__greenhouse-js/packages/greenhouse-harvest-js/package.json)<br>[packages/@karrotmarket/gatsby-source-greenhouse-jobboard/package.json](../../../../sources/daangn__greenhouse-js/packages/@karrotmarket/gatsby-source-greenhouse-jobboard/package.json)<br>[packages/@karrotmarket/gatsby-source-greenhouse-jobboard/tsconfig.json](../../../../sources/daangn__greenhouse-js/packages/@karrotmarket/gatsby-source-greenhouse-jobboard/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 1 | [.github/workflows/release.yml](../../../../sources/daangn__greenhouse-js/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/greenhouse-jobboard-js/src/index.ts`, `package.json`, `tsconfig.json`.
2. Trace execution through entrypoints: `packages/greenhouse-jobboard-js/src/index.ts`.
3. Inspect retrieval/memory/indexing through: `packages/greenhouse-jobboard-js/src/index.ts`, `packages/@karrotmarket/gatsby-source-greenhouse-jobboard/index.js`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 JavaScript toolkit for Greenhouse API. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
