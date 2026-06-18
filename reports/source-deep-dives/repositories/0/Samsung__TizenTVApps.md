# Samsung/TizenTVApps 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Tutorial and Sample apps for the Tizen TV web platform

## 요약

- 조사 단위: `sources/Samsung__TizenTVApps` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 518 files, 126 directories, depth score 74, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=TVDemoVideoPlayer/js/main.js, TVDemoTenframe/js/main.js, TVDemoTenframe/.package/compressed-js/js/main.js이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | Samsung/TizenTVApps |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | JavaScript |
| Stars | 292 |
| Forks | 84 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__TizenTVApps](../../../../sources/Samsung__TizenTVApps) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__TizenTVApps.md](../../../korea-trending/repositories/Samsung__TizenTVApps.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 518 / 126 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | screenshots, SDC2016, TVDemoAvPlayer, TVDemoGrandmasBakery, TVDemoPlatformerMelonJS, TVDemoSimonSaysDemo, TVDemoSlideShow, TVDemoTenframe, TVDemoVideoPlayer, TVWebApps |
| 상위 확장자 | .png: 198, .js: 94, .css: 32, (none): 27, .html: 25, .ogg: 20, .ttf: 16, .jpg: 15, .xml: 15, .md: 10, .txt: 10, .container: 7 |
| 소스 패턴 | cli-first, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [TVDemoVideoPlayer/js/main.js](../../../../sources/Samsung__TizenTVApps/TVDemoVideoPlayer/js/main.js)<br>[TVDemoTenframe/js/main.js](../../../../sources/Samsung__TizenTVApps/TVDemoTenframe/js/main.js)<br>[TVDemoTenframe/.package/compressed-js/js/main.js](../../../../sources/Samsung__TizenTVApps/TVDemoTenframe/.package/compressed-js/js/main.js)<br>[TVDemoAvPlayer/js/main.js](../../../../sources/Samsung__TizenTVApps/TVDemoAvPlayer/js/main.js)<br>[SDC2016/VideoAVPlayer/js/main.js](../../../../sources/Samsung__TizenTVApps/SDC2016/VideoAVPlayer/js/main.js)<br>[SDC2016/ImageViewer/js/main.js](../../../../sources/Samsung__TizenTVApps/SDC2016/ImageViewer/js/main.js) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 13 | [TVDemoVideoPlayer/index.html](../../../../sources/Samsung__TizenTVApps/TVDemoVideoPlayer/index.html)<br>[TVDemoTenframe/index.html](../../../../sources/Samsung__TizenTVApps/TVDemoTenframe/index.html)<br>[TVDemoTenframe/.package/compressed-html/index.html](../../../../sources/Samsung__TizenTVApps/TVDemoTenframe/.package/compressed-html/index.html)<br>[TVDemoSlideShow/index.html](../../../../sources/Samsung__TizenTVApps/TVDemoSlideShow/index.html)<br>[TVDemoSimonSaysDemo/index.html](../../../../sources/Samsung__TizenTVApps/TVDemoSimonSaysDemo/index.html)<br>[TVDemoPlatformerMelonJS/index.css](../../../../sources/Samsung__TizenTVApps/TVDemoPlatformerMelonJS/index.css)<br>[TVDemoPlatformerMelonJS/index.html](../../../../sources/Samsung__TizenTVApps/TVDemoPlatformerMelonJS/index.html)<br>[TVDemoGrandmasBakery/index.html](../../../../sources/Samsung__TizenTVApps/TVDemoGrandmasBakery/index.html) |
| spec | 0 | 명확하지 않음 |
| eval | 3 | [SDC2016/ImageViewer/test/detail.js](../../../../sources/Samsung__TizenTVApps/SDC2016/ImageViewer/test/detail.js)<br>[SDC2016/ImageViewer/test/imageviewer.html](../../../../sources/Samsung__TizenTVApps/SDC2016/ImageViewer/test/imageviewer.html)<br>[SDC2016/ImageViewer/test/index.html](../../../../sources/Samsung__TizenTVApps/SDC2016/ImageViewer/test/index.html) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 14 | [README.md](../../../../sources/Samsung__TizenTVApps/README.md)<br>[TVWebApps/README.md](../../../../sources/Samsung__TizenTVApps/TVWebApps/README.md)<br>[TVWebApps/UI/README.md](../../../../sources/Samsung__TizenTVApps/TVWebApps/UI/README.md)<br>[TVWebApps/UI/tizenvisibilitychange/README.MD](../../../../sources/Samsung__TizenTVApps/TVWebApps/UI/tizenvisibilitychange/README.MD)<br>[TVWebApps/Service/README.md](../../../../sources/Samsung__TizenTVApps/TVWebApps/Service/README.md)<br>[TVWebApps/Service/SimpleService/README.md](../../../../sources/Samsung__TizenTVApps/TVWebApps/Service/SimpleService/README.md)<br>[TVWebApps/Service/FileShare/README.md](../../../../sources/Samsung__TizenTVApps/TVWebApps/Service/FileShare/README.md)<br>[TVWebApps/Service/Debugging/README.md](../../../../sources/Samsung__TizenTVApps/TVWebApps/Service/Debugging/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 3 | [SDC2016/ImageViewer/test/detail.js](../../../../sources/Samsung__TizenTVApps/SDC2016/ImageViewer/test/detail.js)<br>[SDC2016/ImageViewer/test/imageviewer.html](../../../../sources/Samsung__TizenTVApps/SDC2016/ImageViewer/test/imageviewer.html)<br>[SDC2016/ImageViewer/test/index.html](../../../../sources/Samsung__TizenTVApps/SDC2016/ImageViewer/test/index.html) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `TVDemoVideoPlayer/js/main.js`, `TVDemoTenframe/js/main.js`, `TVDemoTenframe/.package/compressed-js/js/main.js`.
2. entrypoint를 따라 실행 흐름 확인: `TVDemoVideoPlayer/js/main.js`, `TVDemoTenframe/js/main.js`, `TVDemoTenframe/.package/compressed-js/js/main.js`.
3. retrieval/memory/indexing 확인: `TVDemoVideoPlayer/index.html`, `TVDemoTenframe/index.html`, `TVDemoTenframe/.package/compressed-html/index.html`.
4. test/eval 파일로 동작 검증: `SDC2016/ImageViewer/test/detail.js`, `SDC2016/ImageViewer/test/imageviewer.html`, `SDC2016/ImageViewer/test/index.html`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Tutorial and Sample apps for the Tizen TV web platform. 핵심 구조 신호는 JavaScript, README.md, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
