# naver/pr-stats Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

PR에 대한 유용한 통계를 산출하는 GitHub Actions

## 요약

- 조사 단위: `sources/naver__pr-stats` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 128 files, 17 directories, depth score 74, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/pr-stats |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | TypeScript |
| Stars | 204 |
| Forks | 14 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__pr-stats](../../../../sources/naver__pr-stats) |
| Existing report | [reports/korea-trending/repositories/naver__pr-stats.md](../../../korea-trending/repositories/naver__pr-stats.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 128 / 17 |
| Max observed depth | 5 |
| Top directories | src |
| Top extensions | .ts: 116, (none): 6, .json: 3, .md: 2, .yml: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 55 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | ncc build src/index.ts -o dist |
| test | package.json | test | mocha -r ts-node/register -r tsconfig-paths/register 'src/**/*.test.ts' |
| quality | package.json | lint:fix | eslint --fix --ext .js,.ts . |
| quality | package.json | prettier | npx prettier --write **/*.{js,ts} |
| quality | package.json | types | tsc |


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
| entrypoints | [src/index.ts](../../../../sources/naver__pr-stats/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/naver__pr-stats/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/naver__pr-stats/tsconfig.json) | config signal |
| docs | [README.en.md](../../../../sources/naver__pr-stats/README.en.md) | docs signal |
| docs | [README.md](../../../../sources/naver__pr-stats/README.md) | docs signal |
| eval | [src/test-helper/index.ts](../../../../sources/naver__pr-stats/src/test-helper/index.ts) | eval support |
| eval | [src/stats/user/__test__/average-comment-count.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/average-comment-count.test.ts) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/naver__pr-stats/src/index.ts) |
| agentRuntime | 1 | [src/context.ts](../../../../sources/naver__pr-stats/src/context.ts) |
| mcp | 0 | not obvious |
| retrieval | 12 | [src/index.ts](../../../../sources/naver__pr-stats/src/index.ts)<br>[src/util/index.ts](../../../../sources/naver__pr-stats/src/util/index.ts)<br>[src/types/index.ts](../../../../sources/naver__pr-stats/src/types/index.ts)<br>[src/test-helper/index.ts](../../../../sources/naver__pr-stats/src/test-helper/index.ts)<br>[src/stats/index.ts](../../../../sources/naver__pr-stats/src/stats/index.ts)<br>[src/stats/user/index.ts](../../../../sources/naver__pr-stats/src/stats/user/index.ts)<br>[src/stats/pr-list/index.ts](../../../../sources/naver__pr-stats/src/stats/pr-list/index.ts)<br>[src/stats/pr/index.ts](../../../../sources/naver__pr-stats/src/stats/pr/index.ts) |
| spec | 0 | not obvious |
| eval | 41 | [src/test-helper/index.ts](../../../../sources/naver__pr-stats/src/test-helper/index.ts)<br>[src/stats/user/__test__/average-comment-count.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/average-comment-count.test.ts)<br>[src/stats/user/__test__/average-lines-changed-per-commit.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/average-lines-changed-per-commit.test.ts)<br>[src/stats/user/__test__/average-response-time.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/average-response-time.test.ts)<br>[src/stats/user/__test__/average-time-to-approval.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/average-time-to-approval.test.ts)<br>[src/stats/user/__test__/participation-count.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/participation-count.test.ts)<br>[src/stats/user/__test__/participation-rate.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/participation-rate.test.ts)<br>[src/stats/user/__test__/requested-count.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/requested-count.test.ts) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README.en.md](../../../../sources/naver__pr-stats/README.en.md)<br>[README.md](../../../../sources/naver__pr-stats/README.md) |
| config | 2 | [package.json](../../../../sources/naver__pr-stats/package.json)<br>[tsconfig.json](../../../../sources/naver__pr-stats/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 41 | [src/test-helper/index.ts](../../../../sources/naver__pr-stats/src/test-helper/index.ts)<br>[src/stats/user/__test__/average-comment-count.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/average-comment-count.test.ts)<br>[src/stats/user/__test__/average-lines-changed-per-commit.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/average-lines-changed-per-commit.test.ts)<br>[src/stats/user/__test__/average-response-time.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/average-response-time.test.ts)<br>[src/stats/user/__test__/average-time-to-approval.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/average-time-to-approval.test.ts)<br>[src/stats/user/__test__/participation-count.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/participation-count.test.ts) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `src/index.ts`, `package.json`, `tsconfig.json`.
2. Trace execution through entrypoints: `src/index.ts`.
3. Map agent/tool runtime through: `src/context.ts`.
4. Inspect retrieval/memory/indexing through: `src/index.ts`, `src/util/index.ts`, `src/types/index.ts`.
5. Verify behavior through test/eval files: `src/test-helper/index.ts`, `src/stats/user/__test__/average-comment-count.test.ts`, `src/stats/user/__test__/average-lines-changed-per-commit.test.ts`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 PR에 대한 유용한 통계를 산출하는 GitHub Actions. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
