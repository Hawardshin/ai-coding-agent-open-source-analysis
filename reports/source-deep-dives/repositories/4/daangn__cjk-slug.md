# daangn/cjk-slug Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

URL-friendly string converter that supports CJK characters

## 요약

- 조사 단위: `sources/daangn__cjk-slug` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 14 files, 7 directories, depth score 61, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | daangn/cjk-slug |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 58 |
| Forks | 4 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/daangn__cjk-slug](../../../../sources/daangn__cjk-slug) |
| Existing report | [reports/korea-trending/repositories/daangn__cjk-slug.md](../../../korea-trending/repositories/daangn__cjk-slug.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 14 / 7 |
| Max observed depth | 3 |
| Top directories | .changeset, .github, .yarn, src, test |
| Top extensions | .json: 3, (none): 3, .md: 2, .ts: 2, .yml: 2, .cjs: 1, .lock: 1 |
| Source patterns | retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 3 |
| .github | ci surface | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | prepack | yarn build --clean |
| test | package.json | test | node --test |
| build | package.json | build | nanobundle build |


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
| entrypoints | [src/index.ts](../../../../sources/daangn__cjk-slug/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/daangn__cjk-slug/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/daangn__cjk-slug/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/daangn__cjk-slug/README.md) | docs signal |
| docs | [.changeset/README.md](../../../../sources/daangn__cjk-slug/.changeset/README.md) | docs signal |
| eval | [test/cjkSlug.test.ts](../../../../sources/daangn__cjk-slug/test/cjkSlug.test.ts) | eval signal |
| ci | [.github/workflows/release.yml](../../../../sources/daangn__cjk-slug/.github/workflows/release.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/daangn__cjk-slug/src/index.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 1 | [src/index.ts](../../../../sources/daangn__cjk-slug/src/index.ts) |
| spec | 0 | not obvious |
| eval | 1 | [test/cjkSlug.test.ts](../../../../sources/daangn__cjk-slug/test/cjkSlug.test.ts) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/release.yml](../../../../sources/daangn__cjk-slug/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/daangn__cjk-slug/README.md)<br>[.changeset/README.md](../../../../sources/daangn__cjk-slug/.changeset/README.md) |
| config | 2 | [package.json](../../../../sources/daangn__cjk-slug/package.json)<br>[tsconfig.json](../../../../sources/daangn__cjk-slug/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [test/cjkSlug.test.ts](../../../../sources/daangn__cjk-slug/test/cjkSlug.test.ts) |
| CI workflows | 1 | [.github/workflows/release.yml](../../../../sources/daangn__cjk-slug/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `src/index.ts`, `package.json`, `tsconfig.json`.
2. Trace execution through entrypoints: `src/index.ts`.
3. Inspect retrieval/memory/indexing through: `src/index.ts`.
4. Verify behavior through test/eval files: `test/cjkSlug.test.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 URL friendly string converter that supports CJK characters. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, tests, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
