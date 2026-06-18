# Samsung/cordova-plugin-toast 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Cordova plugin that provides TV Specific functionalities.

## 요약

- 조사 단위: `sources/Samsung__cordova-plugin-toast` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 633 files, 123 directories, depth score 88, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 entrypoints=sample/TVChannel/tvchannel-src/www/js/main.js, sample/Preview/preview-src/www/js/main.js, sample/Caller/caller-src/www/js/main.js이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Samsung/cordova-plugin-toast |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | JavaScript |
| Stars | 122 |
| Forks | 61 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__cordova-plugin-toast](../../../../sources/Samsung__cordova-plugin-toast) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__cordova-plugin-toast.md](../../../korea-trending/repositories/Samsung__cordova-plugin-toast.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 633 / 123 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | cordova-test-runner, docs, sample, script, src, tasks, www |
| 상위 확장자 | .png: 280, .js: 162, .css: 35, .html: 24, .mp3: 20, .ogg: 19, (none): 18, .json: 14, .md: 12, .mp4: 8, .ttf: 8, .txt: 5 |
| 소스 패턴 | cli-first, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 13 |
| cordova-test-runner | validation surface | 1 |
| sample | top-level component | 1 |
| script | top-level component | 1 |
| src | source boundary | 1 |
| tasks | top-level component | 1 |
| www | top-level component | 1 |


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
| entrypoints | [sample/TVChannel/tvchannel-src/www/js/main.js](../../../../sources/Samsung__cordova-plugin-toast/sample/TVChannel/tvchannel-src/www/js/main.js) | entrypoints signal |
| entrypoints | [sample/Preview/preview-src/www/js/main.js](../../../../sources/Samsung__cordova-plugin-toast/sample/Preview/preview-src/www/js/main.js) | entrypoints signal |
| entrypoints | [sample/Caller/caller-src/www/js/main.js](../../../../sources/Samsung__cordova-plugin-toast/sample/Caller/caller-src/www/js/main.js) | entrypoints signal |
| entrypoints | [sample/Callee/callee-src/www/js/main.js](../../../../sources/Samsung__cordova-plugin-toast/sample/Callee/callee-src/www/js/main.js) | entrypoints signal |
| config | [package.json](../../../../sources/Samsung__cordova-plugin-toast/package.json) | config signal |
| config | [sample/tvwindow/package.json](../../../../sources/Samsung__cordova-plugin-toast/sample/tvwindow/package.json) | config signal |
| config | [sample/TVChannel/package.json](../../../../sources/Samsung__cordova-plugin-toast/sample/TVChannel/package.json) | config signal |
| config | [sample/ScaryBox/package.json](../../../../sources/Samsung__cordova-plugin-toast/sample/ScaryBox/package.json) | config signal |
| docs | [README.md](../../../../sources/Samsung__cordova-plugin-toast/README.md) | docs signal |
| docs | [docs/API.md.tmpl](../../../../sources/Samsung__cordova-plugin-toast/docs/API.md.tmpl) | docs signal |
| docs | [docs/IME.md](../../../../sources/Samsung__cordova-plugin-toast/docs/IME.md) | docs signal |
| docs | [docs/toast.application.md](../../../../sources/Samsung__cordova-plugin-toast/docs/toast.application.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [sample/TVChannel/tvchannel-src/www/js/main.js](../../../../sources/Samsung__cordova-plugin-toast/sample/TVChannel/tvchannel-src/www/js/main.js)<br>[sample/Preview/preview-src/www/js/main.js](../../../../sources/Samsung__cordova-plugin-toast/sample/Preview/preview-src/www/js/main.js)<br>[sample/Caller/caller-src/www/js/main.js](../../../../sources/Samsung__cordova-plugin-toast/sample/Caller/caller-src/www/js/main.js)<br>[sample/Callee/callee-src/www/js/main.js](../../../../sources/Samsung__cordova-plugin-toast/sample/Callee/callee-src/www/js/main.js) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 39 | [sample/tvwindow/index.js](../../../../sources/Samsung__cordova-plugin-toast/sample/tvwindow/index.js)<br>[sample/tvwindow/tvwindow-src/www/index.html](../../../../sources/Samsung__cordova-plugin-toast/sample/tvwindow/tvwindow-src/www/index.html)<br>[sample/tvwindow/tvwindow-src/www/js/index.js](../../../../sources/Samsung__cordova-plugin-toast/sample/tvwindow/tvwindow-src/www/js/index.js)<br>[sample/tvwindow/tvwindow-src/www/css/index.css](../../../../sources/Samsung__cordova-plugin-toast/sample/tvwindow/tvwindow-src/www/css/index.css)<br>[sample/TVChannel/index.js](../../../../sources/Samsung__cordova-plugin-toast/sample/TVChannel/index.js)<br>[sample/TVChannel/tvchannel-src/www/index.html](../../../../sources/Samsung__cordova-plugin-toast/sample/TVChannel/tvchannel-src/www/index.html)<br>[sample/ScaryBox/index.js](../../../../sources/Samsung__cordova-plugin-toast/sample/ScaryBox/index.js)<br>[sample/ScaryBox/ScaryBox-src/www/index.html](../../../../sources/Samsung__cordova-plugin-toast/sample/ScaryBox/ScaryBox-src/www/index.html) |
| spec | 10 | [cordova-test-runner/cordova-test-runner-src/www/spec/_specHelper.js](../../../../sources/Samsung__cordova-plugin-toast/cordova-test-runner/cordova-test-runner-src/www/spec/_specHelper.js)<br>[cordova-test-runner/cordova-test-runner-src/www/spec/toast.application.js](../../../../sources/Samsung__cordova-plugin-toast/cordova-test-runner/cordova-test-runner-src/www/spec/toast.application.js)<br>[cordova-test-runner/cordova-test-runner-src/www/spec/toast.billing.js](../../../../sources/Samsung__cordova-plugin-toast/cordova-test-runner/cordova-test-runner-src/www/spec/toast.billing.js)<br>[cordova-test-runner/cordova-test-runner-src/www/spec/toast.drminfo.js](../../../../sources/Samsung__cordova-plugin-toast/cordova-test-runner/cordova-test-runner-src/www/spec/toast.drminfo.js)<br>[cordova-test-runner/cordova-test-runner-src/www/spec/toast.inputdevice.js](../../../../sources/Samsung__cordova-plugin-toast/cordova-test-runner/cordova-test-runner-src/www/spec/toast.inputdevice.js)<br>[cordova-test-runner/cordova-test-runner-src/www/spec/toast.js](../../../../sources/Samsung__cordova-plugin-toast/cordova-test-runner/cordova-test-runner-src/www/spec/toast.js)<br>[cordova-test-runner/cordova-test-runner-src/www/spec/toast.media.js](../../../../sources/Samsung__cordova-plugin-toast/cordova-test-runner/cordova-test-runner-src/www/spec/toast.media.js)<br>[cordova-test-runner/cordova-test-runner-src/www/spec/toast.tvaudiocontrol.js](../../../../sources/Samsung__cordova-plugin-toast/cordova-test-runner/cordova-test-runner-src/www/spec/toast.tvaudiocontrol.js) |
| eval | 33 | [cordova-test-runner/index.js](../../../../sources/Samsung__cordova-plugin-toast/cordova-test-runner/index.js)<br>[cordova-test-runner/LICENSE](../../../../sources/Samsung__cordova-plugin-toast/cordova-test-runner/LICENSE)<br>[cordova-test-runner/package.json](../../../../sources/Samsung__cordova-plugin-toast/cordova-test-runner/package.json)<br>[cordova-test-runner/cordova-test-runner-src/config.xml](../../../../sources/Samsung__cordova-plugin-toast/cordova-test-runner/cordova-test-runner-src/config.xml)<br>[cordova-test-runner/cordova-test-runner-src/www/index.html](../../../../sources/Samsung__cordova-plugin-toast/cordova-test-runner/cordova-test-runner-src/www/index.html)<br>[cordova-test-runner/cordova-test-runner-src/www/jasmine_boot.js](../../../../sources/Samsung__cordova-plugin-toast/cordova-test-runner/cordova-test-runner-src/www/jasmine_boot.js)<br>[cordova-test-runner/cordova-test-runner-src/www/modeselector.js](../../../../sources/Samsung__cordova-plugin-toast/cordova-test-runner/cordova-test-runner-src/www/modeselector.js)<br>[cordova-test-runner/cordova-test-runner-src/www/script_loader.js](../../../../sources/Samsung__cordova-plugin-toast/cordova-test-runner/cordova-test-runner-src/www/script_loader.js) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 13 | [README.md](../../../../sources/Samsung__cordova-plugin-toast/README.md)<br>[docs/API.md.tmpl](../../../../sources/Samsung__cordova-plugin-toast/docs/API.md.tmpl)<br>[docs/IME.md](../../../../sources/Samsung__cordova-plugin-toast/docs/IME.md)<br>[docs/toast.application.md](../../../../sources/Samsung__cordova-plugin-toast/docs/toast.application.md)<br>[docs/toast.billing.md](../../../../sources/Samsung__cordova-plugin-toast/docs/toast.billing.md)<br>[docs/toast.drminfo.md](../../../../sources/Samsung__cordova-plugin-toast/docs/toast.drminfo.md)<br>[docs/toast.inputdevice.md](../../../../sources/Samsung__cordova-plugin-toast/docs/toast.inputdevice.md)<br>[docs/toast.md](../../../../sources/Samsung__cordova-plugin-toast/docs/toast.md) |
| config | 14 | [package.json](../../../../sources/Samsung__cordova-plugin-toast/package.json)<br>[sample/tvwindow/package.json](../../../../sources/Samsung__cordova-plugin-toast/sample/tvwindow/package.json)<br>[sample/TVChannel/package.json](../../../../sources/Samsung__cordova-plugin-toast/sample/TVChannel/package.json)<br>[sample/ScaryBox/package.json](../../../../sources/Samsung__cordova-plugin-toast/sample/ScaryBox/package.json)<br>[sample/Preview/package.json](../../../../sources/Samsung__cordova-plugin-toast/sample/Preview/package.json)<br>[sample/PresentationSample/package.json](../../../../sources/Samsung__cordova-plugin-toast/sample/PresentationSample/package.json)<br>[sample/MonkeyMadness/package.json](../../../../sources/Samsung__cordova-plugin-toast/sample/MonkeyMadness/package.json)<br>[sample/media/package.json](../../../../sources/Samsung__cordova-plugin-toast/sample/media/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 33 | [cordova-test-runner/index.js](../../../../sources/Samsung__cordova-plugin-toast/cordova-test-runner/index.js)<br>[cordova-test-runner/LICENSE](../../../../sources/Samsung__cordova-plugin-toast/cordova-test-runner/LICENSE)<br>[cordova-test-runner/package.json](../../../../sources/Samsung__cordova-plugin-toast/cordova-test-runner/package.json)<br>[cordova-test-runner/cordova-test-runner-src/config.xml](../../../../sources/Samsung__cordova-plugin-toast/cordova-test-runner/cordova-test-runner-src/config.xml)<br>[cordova-test-runner/cordova-test-runner-src/www/index.html](../../../../sources/Samsung__cordova-plugin-toast/cordova-test-runner/cordova-test-runner-src/www/index.html)<br>[cordova-test-runner/cordova-test-runner-src/www/jasmine_boot.js](../../../../sources/Samsung__cordova-plugin-toast/cordova-test-runner/cordova-test-runner-src/www/jasmine_boot.js) |
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

1. 핵심 참조에서 시작: `sample/TVChannel/tvchannel-src/www/js/main.js`, `sample/Preview/preview-src/www/js/main.js`, `sample/Caller/caller-src/www/js/main.js`.
2. entrypoint를 따라 실행 흐름 확인: `sample/TVChannel/tvchannel-src/www/js/main.js`, `sample/Preview/preview-src/www/js/main.js`, `sample/Caller/caller-src/www/js/main.js`.
3. retrieval/memory/indexing 확인: `sample/tvwindow/index.js`, `sample/tvwindow/tvwindow-src/www/index.html`, `sample/tvwindow/tvwindow-src/www/js/index.js`.
4. test/eval 파일로 동작 검증: `cordova-test-runner/index.js`, `cordova-test-runner/LICENSE`, `cordova-test-runner/package.json`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Cordova plugin that provides TV Specific functionalities.. 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, tests, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
