# Samsung/TAU-Design-Editor Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

TAU Design Editor can create web application by drag&drop the TAU based widget

## 요약

- 조사 단위: `sources/Samsung__TAU-Design-Editor` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,267 files, 542 directories, depth score 106, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tau-component-packages/libs/tau/wearable/theme/default/images/Indicator/b_index_scroll_bg.png, tau-component-packages/libs/tau/wearable/theme/changeable/images/Indicator/b_index_scroll_bg.png, tau-component-packages/libs/tau/wearable/theme/brown/images/Indicator/b_index_scroll_bg.png이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/TAU-Design-Editor |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | JavaScript |
| Stars | 28 |
| Forks | 18 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Samsung__TAU-Design-Editor](../../../../sources/Samsung__TAU-Design-Editor) |
| Existing report | [reports/korea-trending/repositories/Samsung__TAU-Design-Editor.md](../../../korea-trending/repositories/Samsung__TAU-Design-Editor.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2267 / 542 |
| Max observed depth | 10 |
| Top directories | .github, brackets-extension, closet-component-packages, closet-default-component-packages, content-manager, contents, design-editor, docs, hooks, tau-component-packages, tau-html-parser, test, tizen-package-builder, tools, vsc, vsc-extension |
| Top extensions | .png: 1285, .js: 318, .json: 145, .html: 96, .less: 94, .css: 75, .svg: 56, .jpg: 52, .ts: 45, .template: 26, (none): 23, .scss: 13 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 19 | [tizen-package-builder/src/main.js](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/src/main.js)<br>[tizen-package-builder/src/main.spec.js](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/src/main.spec.js)<br>[tau-html-parser/src/server.js](../../../../sources/Samsung__TAU-Design-Editor/tau-html-parser/src/server.js)<br>[tau-component-packages/main.js](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/main.js)<br>[tau-component-packages/app-templates/wearable/voice-recorder-w/js/main.js](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/app-templates/wearable/voice-recorder-w/js/main.js)<br>[tau-component-packages/app-templates/wearable/sports-action-w/js/main.js](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/app-templates/wearable/sports-action-w/js/main.js)<br>[tau-component-packages/app-templates/wearable/rich-notification-w/js/main.js](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/app-templates/wearable/rich-notification-w/js/main.js)<br>[tau-component-packages/app-templates/wearable/music-player-w/js/main.js](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/app-templates/wearable/music-player-w/js/main.js) |
| agentRuntime | 4 | [tools/build.vsc.config.js](../../../../sources/Samsung__TAU-Design-Editor/tools/build.vsc.config.js)<br>[tools/build.watt.config.js](../../../../sources/Samsung__TAU-Design-Editor/tools/build.watt.config.js)<br>[tools/webpack-utils.js](../../../../sources/Samsung__TAU-Design-Editor/tools/webpack-utils.js)<br>[hooks/commit-msg](../../../../sources/Samsung__TAU-Design-Editor/hooks/commit-msg) |
| mcp | 0 | not obvious |
| retrieval | 54 | [tau-component-packages/libs/tau/wearable/theme/default/images/Indicator/b_index_scroll_bg.png](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/libs/tau/wearable/theme/default/images/Indicator/b_index_scroll_bg.png)<br>[tau-component-packages/libs/tau/wearable/theme/changeable/images/Indicator/b_index_scroll_bg.png](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/libs/tau/wearable/theme/changeable/images/Indicator/b_index_scroll_bg.png)<br>[tau-component-packages/libs/tau/wearable/theme/brown/images/Indicator/b_index_scroll_bg.png](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/libs/tau/wearable/theme/brown/images/Indicator/b_index_scroll_bg.png)<br>[tau-component-packages/libs/tau/wearable/theme/blue/images/Indicator/b_index_scroll_bg.png](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/libs/tau/wearable/theme/blue/images/Indicator/b_index_scroll_bg.png)<br>[tau-component-packages/libs/tau/mobile/theme/default/images/core_index_scroll_handler_h_01.png](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/libs/tau/mobile/theme/default/images/core_index_scroll_handler_h_01.png)<br>[tau-component-packages/libs/tau/mobile/theme/default/images/core_index_scroll_handler_h_02.png](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/libs/tau/mobile/theme/default/images/core_index_scroll_handler_h_02.png)<br>[tau-component-packages/libs/tau/mobile/theme/default/images/core_index_scroll_handler_v_01.png](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/libs/tau/mobile/theme/default/images/core_index_scroll_handler_v_01.png)<br>[tau-component-packages/libs/tau/mobile/theme/default/images/core_index_scroll_handler_v_02.png](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/libs/tau/mobile/theme/default/images/core_index_scroll_handler_v_02.png) |
| spec | 296 | [vsc-extension/design-editor/labels.js](../../../../sources/Samsung__TAU-Design-Editor/vsc-extension/design-editor/labels.js)<br>[vsc-extension/design-editor/less.js](../../../../sources/Samsung__TAU-Design-Editor/vsc-extension/design-editor/less.js)<br>[vsc-extension/design-editor/package.json](../../../../sources/Samsung__TAU-Design-Editor/vsc-extension/design-editor/package.json)<br>[vsc-extension/design-editor/preview.html](../../../../sources/Samsung__TAU-Design-Editor/vsc-extension/design-editor/preview.html)<br>[vsc-extension/design-editor/preview.js](../../../../sources/Samsung__TAU-Design-Editor/vsc-extension/design-editor/preview.js)<br>[vsc-extension/design-editor/require.js](../../../../sources/Samsung__TAU-Design-Editor/vsc-extension/design-editor/require.js)<br>[vsc-extension/design-editor/styles-brackets/buttons.less](../../../../sources/Samsung__TAU-Design-Editor/vsc-extension/design-editor/styles-brackets/buttons.less)<br>[vsc-extension/design-editor/styles-brackets/codemirror.less](../../../../sources/Samsung__TAU-Design-Editor/vsc-extension/design-editor/styles-brackets/codemirror.less) |
| eval | 39 | [tizen-package-builder/test/usage.js](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/test/usage.js)<br>[tizen-package-builder/src/main.spec.js](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/src/main.spec.js)<br>[tizen-package-builder/src/signature.spec.js](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/src/signature.spec.js)<br>[tizen-package-builder/src/spec/support/jasmine.json](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/src/spec/support/jasmine.json)<br>[test/utils/iframe.test.js](../../../../sources/Samsung__TAU-Design-Editor/test/utils/iframe.test.js)<br>[test/utils/path-utils.test.js](../../../../sources/Samsung__TAU-Design-Editor/test/utils/path-utils.test.js)<br>[test/utils/utils.test.js](../../../../sources/Samsung__TAU-Design-Editor/test/utils/utils.test.js)<br>[test/system/libraries/js-library.test.js](../../../../sources/Samsung__TAU-Design-Editor/test/system/libraries/js-library.test.js) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 13 | [README.md](../../../../sources/Samsung__TAU-Design-Editor/README.md)<br>[docs/CONTRIBUTING.md](../../../../sources/Samsung__TAU-Design-Editor/docs/CONTRIBUTING.md)<br>[docs/Dragwidget.gif](../../../../sources/Samsung__TAU-Design-Editor/docs/Dragwidget.gif)<br>[docs/Dropdown.gif](../../../../sources/Samsung__TAU-Design-Editor/docs/Dropdown.gif)<br>[docs/Image.gif](../../../../sources/Samsung__TAU-Design-Editor/docs/Image.gif)<br>[docs/IoTApp.gif](../../../../sources/Samsung__TAU-Design-Editor/docs/IoTApp.gif)<br>[docs/JavascriptAssistant.gif](../../../../sources/Samsung__TAU-Design-Editor/docs/JavascriptAssistant.gif)<br>[docs/Newpage.gif](../../../../sources/Samsung__TAU-Design-Editor/docs/Newpage.gif) |
| config | 131 | [package.json](../../../../sources/Samsung__TAU-Design-Editor/package.json)<br>[vsc-extension/design-editor/package.json](../../../../sources/Samsung__TAU-Design-Editor/vsc-extension/design-editor/package.json)<br>[tizen-package-builder/package.json](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/package.json)<br>[tau-html-parser/package.json](../../../../sources/Samsung__TAU-Design-Editor/tau-html-parser/package.json)<br>[tau-component-packages/package.json](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/package.json)<br>[tau-component-packages/tau/package.json](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/tau/package.json)<br>[tau-component-packages/page-templates/wearable/page-header-list/package.json](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/page-templates/wearable/page-header-list/package.json)<br>[tau-component-packages/page-templates/wearable/page-header-footer-list/package.json](../../../../sources/Samsung__TAU-Design-Editor/tau-component-packages/page-templates/wearable/page-header-footer-list/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 39 | [tizen-package-builder/test/usage.js](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/test/usage.js)<br>[tizen-package-builder/src/main.spec.js](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/src/main.spec.js)<br>[tizen-package-builder/src/signature.spec.js](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/src/signature.spec.js)<br>[tizen-package-builder/src/spec/support/jasmine.json](../../../../sources/Samsung__TAU-Design-Editor/tizen-package-builder/src/spec/support/jasmine.json)<br>[test/utils/iframe.test.js](../../../../sources/Samsung__TAU-Design-Editor/test/utils/iframe.test.js)<br>[test/utils/path-utils.test.js](../../../../sources/Samsung__TAU-Design-Editor/test/utils/path-utils.test.js) |
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

1. Start from key references: `tau-component-packages/libs/tau/wearable/theme/default/images/Indicator/b_index_scroll_bg.png`, `tau-component-packages/libs/tau/wearable/theme/changeable/images/Indicator/b_index_scroll_bg.png`, `tau-component-packages/libs/tau/wearable/theme/brown/images/Indicator/b_index_scroll_bg.png`.
2. Trace execution through entrypoints: `tizen-package-builder/src/main.js`, `tizen-package-builder/src/main.spec.js`, `tau-html-parser/src/server.js`.
3. Map agent/tool runtime through: `tools/build.vsc.config.js`, `tools/build.watt.config.js`, `tools/webpack-utils.js`.
4. Inspect retrieval/memory/indexing through: `tau-component-packages/libs/tau/wearable/theme/default/images/Indicator/b_index_scroll_bg.png`, `tau-component-packages/libs/tau/wearable/theme/changeable/images/Indicator/b_index_scroll_bg.png`, `tau-component-packages/libs/tau/wearable/theme/brown/images/Indicator/b_index_scroll_bg.png`.
5. Verify behavior through test/eval files: `tizen-package-builder/test/usage.js`, `tizen-package-builder/src/main.spec.js`, `tizen-package-builder/src/signature.spec.js`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 TAU Design Editor can create web application by drag&drop the TAU based widget. 핵심 구조 신호는 JavaScript, package.json, README.md, tests, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
