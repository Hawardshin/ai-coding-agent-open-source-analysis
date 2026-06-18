# naver/naver-openapi-guide Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

naver/naver-openapi-guide

## 요약

- 조사 단위: `sources/naver__naver-openapi-guide` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 455 files, 123 directories, depth score 54, key references 5개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=ko/README.md, ko/service-apis/README.md, ko/service-apis/search/doc/doc.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/naver-openapi-guide |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | CSS |
| Stars | 152 |
| Forks | 90 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__naver-openapi-guide](../../../../sources/naver__naver-openapi-guide) |
| Existing report | [reports/korea-trending/repositories/naver__naver-openapi-guide.md](../../../korea-trending/repositories/naver__naver-openapi-guide.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 455 / 123 |
| Max observed depth | 7 |
| Top directories | ko, sample |
| Top extensions | .png: 167, .md: 115, .php: 26, .js: 25, .java: 24, .cs: 23, .py: 23, .gif: 16, .css: 11, .json: 8, .svg: 8, .aspx: 2 |
| Source patterns | eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| ko | top-level component | 1 |
| sample | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


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
| docs | [ko/README.md](../../../../sources/naver__naver-openapi-guide/ko/README.md) | docs signal |
| docs | [ko/service-apis/README.md](../../../../sources/naver__naver-openapi-guide/ko/service-apis/README.md) | docs signal |
| docs | [ko/service-apis/search/doc/doc.md](../../../../sources/naver__naver-openapi-guide/ko/service-apis/search/doc/doc.md) | docs signal |
| docs | [ko/service-apis/search/book/book.md](../../../../sources/naver__naver-openapi-guide/ko/service-apis/search/book/book.md) | docs signal |
| eval | [ko/sdk-tool/tests.md](../../../../sources/naver__naver-openapi-guide/ko/sdk-tool/tests.md) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 1 | [ko/sdk-tool/tests.md](../../../../sources/naver__naver-openapi-guide/ko/sdk-tool/tests.md) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 6 | [ko/README.md](../../../../sources/naver__naver-openapi-guide/ko/README.md)<br>[ko/service-apis/README.md](../../../../sources/naver__naver-openapi-guide/ko/service-apis/README.md)<br>[ko/service-apis/search/doc/doc.md](../../../../sources/naver__naver-openapi-guide/ko/service-apis/search/doc/doc.md)<br>[ko/service-apis/search/book/book.md](../../../../sources/naver__naver-openapi-guide/ko/service-apis/search/book/book.md)<br>[ko/service-apis/search/book/downloads/categoryList.txt](../../../../sources/naver__naver-openapi-guide/ko/service-apis/search/book/downloads/categoryList.txt)<br>[ko/papago-apis/README.md](../../../../sources/naver__naver-openapi-guide/ko/papago-apis/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [ko/sdk-tool/tests.md](../../../../sources/naver__naver-openapi-guide/ko/sdk-tool/tests.md) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `ko/README.md`, `ko/service-apis/README.md`, `ko/service-apis/search/doc/doc.md`.
2. Verify behavior through test/eval files: `ko/sdk-tool/tests.md`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 CSS이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
