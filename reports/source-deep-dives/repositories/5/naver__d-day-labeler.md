# naver/d-day-labeler Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

D-n 규칙에 따라 자동으로 Label 을 업데이트하는 Github Actions

## 요약

- 조사 단위: `sources/naver__d-day-labeler` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 18 files, 2 directories, depth score 48, key references 5개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/d-day-labeler |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | TypeScript |
| Stars | 48 |
| Forks | 5 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__d-day-labeler](../../../../sources/naver__d-day-labeler) |
| Existing report | [reports/korea-trending/repositories/naver__d-day-labeler.md](../../../korea-trending/repositories/naver__d-day-labeler.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 18 / 2 |
| Max observed depth | 3 |
| Top directories | src |
| Top extensions | .ts: 6, (none): 6, .json: 3, .md: 2, .yml: 1 |
| Source patterns | retrieval/vector path |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 4 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | ncc build src/index.ts -o dist |
| quality | package.json | lint:fix | eslint --fix --ext .js,.ts . |
| quality | package.json | prettier | npx prettier --write **/*.{js,ts} |


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
| entrypoints | [src/index.ts](../../../../sources/naver__d-day-labeler/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/naver__d-day-labeler/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/naver__d-day-labeler/tsconfig.json) | config signal |
| docs | [README.en.md](../../../../sources/naver__d-day-labeler/README.en.md) | docs signal |
| docs | [README.md](../../../../sources/naver__d-day-labeler/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/naver__d-day-labeler/src/index.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 2 | [src/index.ts](../../../../sources/naver__d-day-labeler/src/index.ts)<br>[src/types/index.ts](../../../../sources/naver__d-day-labeler/src/types/index.ts) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README.en.md](../../../../sources/naver__d-day-labeler/README.en.md)<br>[README.md](../../../../sources/naver__d-day-labeler/README.md) |
| config | 2 | [package.json](../../../../sources/naver__d-day-labeler/package.json)<br>[tsconfig.json](../../../../sources/naver__d-day-labeler/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `src/index.ts`, `package.json`, `tsconfig.json`.
2. Trace execution through entrypoints: `src/index.ts`.
3. Inspect retrieval/memory/indexing through: `src/index.ts`, `src/types/index.ts`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 D n 규칙에 따라 자동으로 Label 을 업데이트하는 Github Actions. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
