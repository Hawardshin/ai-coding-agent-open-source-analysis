# Samsung/TAU-Design-Editor 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

TAU Design Editor can create web application by drag&drop the TAU based widget

## 요약

- 조사 단위: `sources/Samsung__TAU-Design-Editor` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,267 files, 542 directories, depth score 100, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tau-component-packages/libs/tau/wearable/theme/default/images/Indicator/b_index_scroll_bg.png, tau-component-packages/libs/tau/wearable/theme/changeable/images/Indicator/b_index_scroll_bg.png, tau-component-packages/libs/tau/wearable/theme/brown/images/Indicator/b_index_scroll_bg.png이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Samsung/TAU-Design-Editor |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | JavaScript |
| Stars | 28 |
| Forks | 18 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__TAU-Design-Editor](../../../../sources/Samsung__TAU-Design-Editor) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__TAU-Design-Editor.md](../../../korea-trending/repositories/Samsung__TAU-Design-Editor.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2267 / 542 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .github, brackets-extension, closet-component-packages, closet-default-component-packages, content-manager, contents, design-editor, docs, hooks, tau-component-packages, tau-html-parser, test, tizen-package-builder, tools, vsc, vsc-extension |
| 상위 확장자 | .png: 1285, .js: 318, .json: 145, .html: 96, .less: 94, .css: 75, .svg: 56, .jpg: 52, .ts: 45, .template: 26, (none): 23, .scss: 13 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 11 |
| .github | ci surface | 1 |
| brackets-extension | top-level component | 1 |
| closet-component-packages | source boundary | 1 |
| closet-default-component-packages | source boundary | 1 |
| content-manager | top-level component | 1 |
| contents | top-level component | 1 |
| design-editor | top-level component | 1 |
| hooks | top-level component | 1 |
| tau-component-packages | source boundary | 1 |
| tau-html-parser | top-level component | 1 |
| test | validation surface | 1 |
| tizen-package-builder | top-level component | 1 |
| tools | top-level component | 1 |
| vsc | top-level component | 1 |
| vsc-extension | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| quality | package.json | eslint | eslint design-editor/ |
| quality | package.json | lint | lint-diff $TRAVIS_COMMIT_RANGE |
| test | package.json | test:watt | echo "Testing WATT..." && cross-env EDITOR=WATT mocha --reporter progress --require babel-polyfill --require @babel/register --require jsdom-global/register --recursive |
| test | package.json | test:vsc | echo "Testing VSC..." && cross-env EDITOR=VSC mocha --reporter progress --require babel-polyfill --require @babel/register --require jsdom-global/register --recursive |
| test | package.json | test | npm run test:watt && npm run test:vsc |
| test | package.json | coverage | exit 0 |
| build | package.json | build-watt | cross-env EDITOR=WATT webpack --config tools/build.watt.config.js --config-name production |
| serve-dev | package.json | build-watt-dev | cross-env EDITOR=WATT webpack --config tools/build.watt.config.js --config-name development |
| build | package.json | build-vsc | cross-env EDITOR=VSC webpack --config tools/build.vsc.config.js --config-name production |
| serve-dev | package.json | build-vsc-dev | cross-env EDITOR=VSC webpack --config tools/build.vsc.config.js --config-name development |
| utility | package.json | postinstall | subpkg install |
| utility | package.json | postupdate | subpkg install |


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
| retrieval | [tau-component-packages/libs/tau/wearable/theme/default/images/Indicator/b_index_scroll_bg.png](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/libs/tau/wearable/theme/default/images/Indicator/b_index_scroll_bg.png) | retrieval signal |
| retrieval | [tau-component-packages/libs/tau/wearable/theme/changeable/images/Indicator/b_index_scroll_bg.png](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/libs/tau/wearable/theme/changeable/images/Indicator/b_index_scroll_bg.png) | retrieval signal |
| retrieval | [tau-component-packages/libs/tau/wearable/theme/brown/images/Indicator/b_index_scroll_bg.png](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/libs/tau/wearable/theme/brown/images/Indicator/b_index_scroll_bg.png) | retrieval signal |
| retrieval | [tau-component-packages/libs/tau/wearable/theme/blue/images/Indicator/b_index_scroll_bg.png](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/libs/tau/wearable/theme/blue/images/Indicator/b_index_scroll_bg.png) | retrieval signal |
| entrypoints | [tizen-package-builder/src/main.js](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/src/main.js) | entrypoints signal |
| entrypoints | [tizen-package-builder/src/main.spec.js](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/src/main.spec.js) | entrypoints signal |
| entrypoints | [tau-html-parser/src/server.js](../../../../sources/Samsung__TAU-Design-Editor/tau-html-parser/src/server.js) | entrypoints signal |
| entrypoints | [tau-component-packages/main.js](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/main.js) | entrypoints signal |
| docs | [README.md](../../../../sources/Samsung__TAU-Design-Editor/README.md) | docs signal |
| docs | [docs/CONTRIBUTING.md](../../../../sources/Samsung__TAU-Design-Editor/docs/CONTRIBUTING.md) | docs signal |
| docs | [docs/Dragwidget.gif](../../../../sources/Samsung__TAU-Design-Editor/docs/Dragwidget.gif) | docs signal |
| docs | [docs/Dropdown.gif](../../../../sources/Samsung__TAU-Design-Editor/docs/Dropdown.gif) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 19 | [tizen-package-builder/src/main.js](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/src/main.js)<br>[tizen-package-builder/src/main.spec.js](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/src/main.spec.js)<br>[tau-html-parser/src/server.js](../../../../sources/Samsung__TAU-Design-Editor/tau-html-parser/src/server.js)<br>[tau-component-packages/main.js](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/main.js)<br>[tau-component-packages/app-templates/wearable/voice-recorder-w/js/main.js](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/app-templates/wearable/voice-recorder-w/js/main.js)<br>[tau-component-packages/app-templates/wearable/sports-action-w/js/main.js](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/app-templates/wearable/sports-action-w/js/main.js)<br>[tau-component-packages/app-templates/wearable/rich-notification-w/js/main.js](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/app-templates/wearable/rich-notification-w/js/main.js)<br>[tau-component-packages/app-templates/wearable/music-player-w/js/main.js](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/app-templates/wearable/music-player-w/js/main.js) |
| agentRuntime | 4 | [tools/build.vsc.config.js](../../../../sources/Samsung__TAU-Design-Editor/tools/build.vsc.config.js)<br>[tools/build.watt.config.js](../../../../sources/Samsung__TAU-Design-Editor/tools/build.watt.config.js)<br>[tools/webpack-utils.js](../../../../sources/Samsung__TAU-Design-Editor/tools/webpack-utils.js)<br>[hooks/commit-msg](../../../../sources/Samsung__TAU-Design-Editor/hooks/commit-msg) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 54 | [tau-component-packages/libs/tau/wearable/theme/default/images/Indicator/b_index_scroll_bg.png](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/libs/tau/wearable/theme/default/images/Indicator/b_index_scroll_bg.png)<br>[tau-component-packages/libs/tau/wearable/theme/changeable/images/Indicator/b_index_scroll_bg.png](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/libs/tau/wearable/theme/changeable/images/Indicator/b_index_scroll_bg.png)<br>[tau-component-packages/libs/tau/wearable/theme/brown/images/Indicator/b_index_scroll_bg.png](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/libs/tau/wearable/theme/brown/images/Indicator/b_index_scroll_bg.png)<br>[tau-component-packages/libs/tau/wearable/theme/blue/images/Indicator/b_index_scroll_bg.png](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/libs/tau/wearable/theme/blue/images/Indicator/b_index_scroll_bg.png)<br>[tau-component-packages/libs/tau/mobile/theme/default/images/core_index_scroll_handler_h_01.png](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/libs/tau/mobile/theme/default/images/core_index_scroll_handler_h_01.png)<br>[tau-component-packages/libs/tau/mobile/theme/default/images/core_index_scroll_handler_h_02.png](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/libs/tau/mobile/theme/default/images/core_index_scroll_handler_h_02.png)<br>[tau-component-packages/libs/tau/mobile/theme/default/images/core_index_scroll_handler_v_01.png](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/libs/tau/mobile/theme/default/images/core_index_scroll_handler_v_01.png)<br>[tau-component-packages/libs/tau/mobile/theme/default/images/core_index_scroll_handler_v_02.png](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/libs/tau/mobile/theme/default/images/core_index_scroll_handler_v_02.png) |
| spec | 296 | [vsc-extension/design-editor/labels.js](../../../../sources/Samsung__TAU-Design-Editor/vsc-extension/design-editor/labels.js)<br>[vsc-extension/design-editor/less.js](../../../../sources/Samsung__TAU-Design-Editor/vsc-extension/design-editor/less.js)<br>[vsc-extension/design-editor/package.json](../../../../sources/Samsung__TAU-Design-Editor/vsc-extension/design-editor/package.json)<br>[vsc-extension/design-editor/preview.html](../../../../sources/Samsung__TAU-Design-Editor/vsc-extension/design-editor/preview.html)<br>[vsc-extension/design-editor/preview.js](../../../../sources/Samsung__TAU-Design-Editor/vsc-extension/design-editor/preview.js)<br>[vsc-extension/design-editor/require.js](../../../../sources/Samsung__TAU-Design-Editor/vsc-extension/design-editor/require.js)<br>[vsc-extension/design-editor/styles-brackets/buttons.less](../../../../sources/Samsung__TAU-Design-Editor/vsc-extension/design-editor/styles-brackets/buttons.less)<br>[vsc-extension/design-editor/styles-brackets/codemirror.less](../../../../sources/Samsung__TAU-Design-Editor/vsc-extension/design-editor/styles-brackets/codemirror.less) |
| eval | 39 | [tizen-package-builder/test/usage.js](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/test/usage.js)<br>[tizen-package-builder/src/main.spec.js](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/src/main.spec.js)<br>[tizen-package-builder/src/signature.spec.js](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/src/signature.spec.js)<br>[tizen-package-builder/src/spec/support/jasmine.json](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/src/spec/support/jasmine.json)<br>[test/utils/iframe.test.js](../../../../sources/Samsung__TAU-Design-Editor/test/utils/iframe.test.js)<br>[test/utils/path-utils.test.js](../../../../sources/Samsung__TAU-Design-Editor/test/utils/path-utils.test.js)<br>[test/utils/utils.test.js](../../../../sources/Samsung__TAU-Design-Editor/test/utils/utils.test.js)<br>[test/system/libraries/js-library.test.js](../../../../sources/Samsung__TAU-Design-Editor/test/system/libraries/js-library.test.js) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 13 | [README.md](../../../../sources/Samsung__TAU-Design-Editor/README.md)<br>[docs/CONTRIBUTING.md](../../../../sources/Samsung__TAU-Design-Editor/docs/CONTRIBUTING.md)<br>[docs/Dragwidget.gif](../../../../sources/Samsung__TAU-Design-Editor/docs/Dragwidget.gif)<br>[docs/Dropdown.gif](../../../../sources/Samsung__TAU-Design-Editor/docs/Dropdown.gif)<br>[docs/Image.gif](../../../../sources/Samsung__TAU-Design-Editor/docs/Image.gif)<br>[docs/IoTApp.gif](../../../../sources/Samsung__TAU-Design-Editor/docs/IoTApp.gif)<br>[docs/JavascriptAssistant.gif](../../../../sources/Samsung__TAU-Design-Editor/docs/JavascriptAssistant.gif)<br>[docs/Newpage.gif](../../../../sources/Samsung__TAU-Design-Editor/docs/Newpage.gif) |
| config | 131 | [package.json](../../../../sources/Samsung__TAU-Design-Editor/package.json)<br>[vsc-extension/design-editor/package.json](../../../../sources/Samsung__TAU-Design-Editor/vsc-extension/design-editor/package.json)<br>[tizen-package-builder/package.json](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/package.json)<br>[tau-html-parser/package.json](../../../../sources/Samsung__TAU-Design-Editor/tau-html-parser/package.json)<br>[tau-component-packages/package.json](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/package.json)<br>[tau-component-packages/tau/package.json](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/tau/package.json)<br>[tau-component-packages/page-templates/wearable/page-header-list/package.json](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/page-templates/wearable/page-header-list/package.json)<br>[tau-component-packages/page-templates/wearable/page-header-footer-list/package.json](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/page-templates/wearable/page-header-footer-list/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 39 | [tizen-package-builder/test/usage.js](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/test/usage.js)<br>[tizen-package-builder/src/main.spec.js](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/src/main.spec.js)<br>[tizen-package-builder/src/signature.spec.js](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/src/signature.spec.js)<br>[tizen-package-builder/src/spec/support/jasmine.json](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/src/spec/support/jasmine.json)<br>[test/utils/iframe.test.js](../../../../sources/Samsung__TAU-Design-Editor/test/utils/iframe.test.js)<br>[test/utils/path-utils.test.js](../../../../sources/Samsung__TAU-Design-Editor/test/utils/path-utils.test.js) |
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

1. 핵심 참조에서 시작: `tau-component-packages/libs/tau/wearable/theme/default/images/Indicator/b_index_scroll_bg.png`, `tau-component-packages/libs/tau/wearable/theme/changeable/images/Indicator/b_index_scroll_bg.png`, `tau-component-packages/libs/tau/wearable/theme/brown/images/Indicator/b_index_scroll_bg.png`.
2. entrypoint를 따라 실행 흐름 확인: `tizen-package-builder/src/main.js`, `tizen-package-builder/src/main.spec.js`, `tau-html-parser/src/server.js`.
3. agent/tool runtime 매핑: `tools/build.vsc.config.js`, `tools/build.watt.config.js`, `tools/webpack-utils.js`.
4. retrieval/memory/indexing 확인: `tau-component-packages/libs/tau/wearable/theme/default/images/Indicator/b_index_scroll_bg.png`, `tau-component-packages/libs/tau/wearable/theme/changeable/images/Indicator/b_index_scroll_bg.png`, `tau-component-packages/libs/tau/wearable/theme/brown/images/Indicator/b_index_scroll_bg.png`.
5. test/eval 파일로 동작 검증: `tizen-package-builder/test/usage.js`, `tizen-package-builder/src/main.spec.js`, `tizen-package-builder/src/signature.spec.js`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 TAU Design Editor can create web application by drag&drop the TAU based widget. 핵심 구조 신호는 JavaScript, package.json, README.md, tests, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
