# Samsung/TizenTVApps Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Tutorial and Sample apps for the Tizen TV web platform

## 요약

- 조사 단위: `sources/Samsung__TizenTVApps` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 518 files, 126 directories, depth score 80, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=TVDemoVideoPlayer/js/main.js, TVDemoTenframe/js/main.js, TVDemoTenframe/.package/compressed-js/js/main.js이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/TizenTVApps |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | JavaScript |
| Stars | 292 |
| Forks | 84 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/Samsung__TizenTVApps](../../../../sources/Samsung__TizenTVApps) |
| Existing report | [reports/korea-trending/repositories/Samsung__TizenTVApps.md](../../../korea-trending/repositories/Samsung__TizenTVApps.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 518 / 126 |
| Max observed depth | 7 |
| Top directories | screenshots, SDC2016, TVDemoAvPlayer, TVDemoGrandmasBakery, TVDemoPlatformerMelonJS, TVDemoSimonSaysDemo, TVDemoSlideShow, TVDemoTenframe, TVDemoVideoPlayer, TVWebApps |
| Top extensions | .png: 198, .js: 94, .css: 32, (none): 27, .html: 25, .ogg: 20, .ttf: 16, .jpg: 15, .xml: 15, .md: 10, .txt: 10, .container: 7 |
| Source patterns | cli-first, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| screenshots | top-level component | 1 |
| SDC2016 | top-level component | 1 |
| TVDemoAvPlayer | top-level component | 1 |
| TVDemoGrandmasBakery | top-level component | 1 |
| TVDemoPlatformerMelonJS | top-level component | 1 |
| TVDemoSimonSaysDemo | top-level component | 1 |
| TVDemoSlideShow | top-level component | 1 |
| TVDemoTenframe | top-level component | 1 |
| TVDemoVideoPlayer | top-level component | 1 |
| TVWebApps | source boundary | 1 |


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
| entrypoints | [TVDemoVideoPlayer/js/main.js](../../../../sources/Samsung__TizenTVApps/TVDemoVideoPlayer/js/main.js) | entrypoints signal |
| entrypoints | [TVDemoTenframe/js/main.js](../../../../sources/Samsung__TizenTVApps/TVDemoTenframe/js/main.js) | entrypoints signal |
| entrypoints | [TVDemoTenframe/.package/compressed-js/js/main.js](../../../../sources/Samsung__TizenTVApps/TVDemoTenframe/.package/compressed-js/js/main.js) | entrypoints signal |
| entrypoints | [TVDemoAvPlayer/js/main.js](../../../../sources/Samsung__TizenTVApps/TVDemoAvPlayer/js/main.js) | entrypoints signal |
| docs | [README.md](../../../../sources/Samsung__TizenTVApps/README.md) | docs signal |
| docs | [TVWebApps/README.md](../../../../sources/Samsung__TizenTVApps/TVWebApps/README.md) | docs signal |
| docs | [TVWebApps/UI/README.md](../../../../sources/Samsung__TizenTVApps/TVWebApps/UI/README.md) | docs signal |
| docs | [TVWebApps/UI/tizenvisibilitychange/README.MD](../../../../sources/Samsung__TizenTVApps/TVWebApps/UI/tizenvisibilitychange/README.MD) | docs signal |
| eval | [SDC2016/ImageViewer/test/detail.js](../../../../sources/Samsung__TizenTVApps/SDC2016/ImageViewer/test/detail.js) | eval signal |
| eval | [SDC2016/ImageViewer/test/imageviewer.html](../../../../sources/Samsung__TizenTVApps/SDC2016/ImageViewer/test/imageviewer.html) | eval signal |
| eval | [SDC2016/ImageViewer/test/index.html](../../../../sources/Samsung__TizenTVApps/SDC2016/ImageViewer/test/index.html) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [TVDemoVideoPlayer/js/main.js](../../../../sources/Samsung__TizenTVApps/TVDemoVideoPlayer/js/main.js)<br>[TVDemoTenframe/js/main.js](../../../../sources/Samsung__TizenTVApps/TVDemoTenframe/js/main.js)<br>[TVDemoTenframe/.package/compressed-js/js/main.js](../../../../sources/Samsung__TizenTVApps/TVDemoTenframe/.package/compressed-js/js/main.js)<br>[TVDemoAvPlayer/js/main.js](../../../../sources/Samsung__TizenTVApps/TVDemoAvPlayer/js/main.js)<br>[SDC2016/VideoAVPlayer/js/main.js](../../../../sources/Samsung__TizenTVApps/SDC2016/VideoAVPlayer/js/main.js)<br>[SDC2016/ImageViewer/js/main.js](../../../../sources/Samsung__TizenTVApps/SDC2016/ImageViewer/js/main.js) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 13 | [TVDemoVideoPlayer/index.html](../../../../sources/Samsung__TizenTVApps/TVDemoVideoPlayer/index.html)<br>[TVDemoTenframe/index.html](../../../../sources/Samsung__TizenTVApps/TVDemoTenframe/index.html)<br>[TVDemoTenframe/.package/compressed-html/index.html](../../../../sources/Samsung__TizenTVApps/TVDemoTenframe/.package/compressed-html/index.html)<br>[TVDemoSlideShow/index.html](../../../../sources/Samsung__TizenTVApps/TVDemoSlideShow/index.html)<br>[TVDemoSimonSaysDemo/index.html](../../../../sources/Samsung__TizenTVApps/TVDemoSimonSaysDemo/index.html)<br>[TVDemoPlatformerMelonJS/index.css](../../../../sources/Samsung__TizenTVApps/TVDemoPlatformerMelonJS/index.css)<br>[TVDemoPlatformerMelonJS/index.html](../../../../sources/Samsung__TizenTVApps/TVDemoPlatformerMelonJS/index.html)<br>[TVDemoGrandmasBakery/index.html](../../../../sources/Samsung__TizenTVApps/TVDemoGrandmasBakery/index.html) |
| spec | 0 | not obvious |
| eval | 3 | [SDC2016/ImageViewer/test/detail.js](../../../../sources/Samsung__TizenTVApps/SDC2016/ImageViewer/test/detail.js)<br>[SDC2016/ImageViewer/test/imageviewer.html](../../../../sources/Samsung__TizenTVApps/SDC2016/ImageViewer/test/imageviewer.html)<br>[SDC2016/ImageViewer/test/index.html](../../../../sources/Samsung__TizenTVApps/SDC2016/ImageViewer/test/index.html) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 14 | [README.md](../../../../sources/Samsung__TizenTVApps/README.md)<br>[TVWebApps/README.md](../../../../sources/Samsung__TizenTVApps/TVWebApps/README.md)<br>[TVWebApps/UI/README.md](../../../../sources/Samsung__TizenTVApps/TVWebApps/UI/README.md)<br>[TVWebApps/UI/tizenvisibilitychange/README.MD](../../../../sources/Samsung__TizenTVApps/TVWebApps/UI/tizenvisibilitychange/README.MD)<br>[TVWebApps/Service/README.md](../../../../sources/Samsung__TizenTVApps/TVWebApps/Service/README.md)<br>[TVWebApps/Service/SimpleService/README.md](../../../../sources/Samsung__TizenTVApps/TVWebApps/Service/SimpleService/README.md)<br>[TVWebApps/Service/FileShare/README.md](../../../../sources/Samsung__TizenTVApps/TVWebApps/Service/FileShare/README.md)<br>[TVWebApps/Service/Debugging/README.md](../../../../sources/Samsung__TizenTVApps/TVWebApps/Service/Debugging/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3 | [SDC2016/ImageViewer/test/detail.js](../../../../sources/Samsung__TizenTVApps/SDC2016/ImageViewer/test/detail.js)<br>[SDC2016/ImageViewer/test/imageviewer.html](../../../../sources/Samsung__TizenTVApps/SDC2016/ImageViewer/test/imageviewer.html)<br>[SDC2016/ImageViewer/test/index.html](../../../../sources/Samsung__TizenTVApps/SDC2016/ImageViewer/test/index.html) |
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

1. Start from key references: `TVDemoVideoPlayer/js/main.js`, `TVDemoTenframe/js/main.js`, `TVDemoTenframe/.package/compressed-js/js/main.js`.
2. Trace execution through entrypoints: `TVDemoVideoPlayer/js/main.js`, `TVDemoTenframe/js/main.js`, `TVDemoTenframe/.package/compressed-js/js/main.js`.
3. Inspect retrieval/memory/indexing through: `TVDemoVideoPlayer/index.html`, `TVDemoTenframe/index.html`, `TVDemoTenframe/.package/compressed-html/index.html`.
4. Verify behavior through test/eval files: `SDC2016/ImageViewer/test/detail.js`, `SDC2016/ImageViewer/test/imageviewer.html`, `SDC2016/ImageViewer/test/index.html`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Tutorial and Sample apps for the Tizen TV web platform. 핵심 구조 신호는 JavaScript, README.md, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
