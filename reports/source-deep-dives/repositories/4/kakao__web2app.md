# kakao/web2app Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

tiny javascript library to launch a mobile app. from a webpage

## 요약

- 조사 단위: `sources/kakao__web2app` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 17 files, 3 directories, depth score 61, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 api/server, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=server.js이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kakao/web2app |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | JavaScript |
| Stars | 160 |
| Forks | 42 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/kakao__web2app](../../../../sources/kakao__web2app) |
| Existing report | [reports/korea-trending/repositories/kakao__web2app.md](../../../korea-trending/repositories/kakao__web2app.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 17 / 3 |
| Max observed depth | 2 |
| Top directories | lib, samples, test |
| Top extensions | .js: 6, .html: 3, (none): 3, .json: 2, .md: 2, .yml: 1 |
| Source patterns | api/server, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| lib | source boundary | 1 |
| samples | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | test | node build.js |
| build | package.json | build | node build.js |
| serve-dev | package.json | start | node server.js |


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
| entrypoints | [server.js](../../../../sources/kakao__web2app/server.js) | entrypoints signal |
| config | [package.json](../../../../sources/kakao__web2app/package.json) | config signal |
| docs | [README.md](../../../../sources/kakao__web2app/README.md) | docs signal |
| eval | [test/web2app_spec.js](../../../../sources/kakao__web2app/test/web2app_spec.js) | eval signal |
| eval | [samples/test_dist.html](../../../../sources/kakao__web2app/samples/test_dist.html) | eval signal |
| eval | [samples/test.html](../../../../sources/kakao__web2app/samples/test.html) | eval signal |
| manifest-entrypoint | [lib/web2app.js](../../../../sources/kakao__web2app/lib/web2app.js) | package manifest entrypoint |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [server.js](../../../../sources/kakao__web2app/server.js) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 1 | [test/web2app_spec.js](../../../../sources/kakao__web2app/test/web2app_spec.js) |
| eval | 3 | [test/web2app_spec.js](../../../../sources/kakao__web2app/test/web2app_spec.js)<br>[samples/test_dist.html](../../../../sources/kakao__web2app/samples/test_dist.html)<br>[samples/test.html](../../../../sources/kakao__web2app/samples/test.html) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/kakao__web2app/README.md) |
| config | 1 | [package.json](../../../../sources/kakao__web2app/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3 | [test/web2app_spec.js](../../../../sources/kakao__web2app/test/web2app_spec.js)<br>[samples/test_dist.html](../../../../sources/kakao__web2app/samples/test_dist.html)<br>[samples/test.html](../../../../sources/kakao__web2app/samples/test.html) |
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

1. Start from key references: `server.js`, `package.json`, `README.md`.
2. Trace execution through entrypoints: `server.js`.
3. Verify behavior through test/eval files: `test/web2app_spec.js`, `samples/test_dist.html`, `samples/test.html`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 tiny javascript library to launch a mobile app. from a webpage. 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, tests, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 ci signal not obvious, needs deeper structural scan입니다.
