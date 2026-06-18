# nhn/tui.editor 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

🍞📝 Markdown WYSIWYG Editor. GFM Standard + Chart & UML Extensible.

## 요약

- 조사 단위: `sources/nhn__tui.editor` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 501 files, 148 directories, depth score 97, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, api/server, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=plugins/uml/src/index.ts, plugins/table-merged-cell/src/index.ts, plugins/color-syntax/src/index.ts이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | nhn/tui.editor |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 17983 |
| Forks | 1848 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/nhn__tui.editor](../../../../sources/nhn__tui.editor) |
| 기존 보고서 | [reports/korea-trending/repositories/nhn__tui.editor.md](../../../korea-trending/repositories/nhn__tui.editor.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 501 / 148 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | __mocks__, .github, apps, docs, libs, plugins, scripts, types |
| 상위 확장자 | .ts: 315, .js: 52, .md: 40, .html: 36, .json: 23, .yml: 11, .css: 10, (none): 4, .snap: 3, .png: 2, .tsx: 2, .vue: 2 |
| 소스 패턴 | monorepo/workspace, api/server, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| apps/editor | apps workspace | 48 |
| libs/toastmark | libs workspace | 40 |
| docs | documentation surface | 26 |
| apps/react-editor | apps workspace | 10 |
| apps/vue-editor | apps workspace | 10 |
| __mocks__ | top-level component | 1 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| libs | source boundary | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |
| types | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| quality | package.json | lint:all | lerna run --stream lint |
| test | package.json | test:all | jest |
| test | package.json | test:types:all | lerna run --stream test:types |
| build | package.json | build:all | lerna run --stream build |
| quality | package.json | lint | node ./scripts/pkg-script.js --script lint --type $type |
| test | package.json | test | node ./scripts/pkg-script.js --script test --type $type |
| test | package.json | test:ci | node ./scripts/pkg-script.js --script test:ci --type $type |
| test | package.json | test:types | node ./scripts/pkg-script.js --script test:types --type $type |
| serve-dev | package.json | serve | node ./scripts/pkg-script.js --script serve --type $type |
| serve-dev | package.json | serve:ie | node ./scripts/pkg-script.js --script serve:ie --type $type |
| build | package.json | build | node ./scripts/pkg-script.js --script build --type $type |
| serve-dev | package.json | doc:dev | node ./scripts/pkg-script.js --script doc:dev --type editor |
| quality | package.json | doc | node ./scripts/pkg-script.js --script doc --type editor |
| utility | package.json | publish:cdn | node ./scripts/publish-cdn.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [plugins/uml/src/index.ts](../../../../sources/nhn__tui.editor/plugins/uml/src/index.ts) | entrypoints signal |
| entrypoints | [plugins/table-merged-cell/src/index.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/index.ts) | entrypoints signal |
| entrypoints | [plugins/color-syntax/src/index.ts](../../../../sources/nhn__tui.editor/plugins/color-syntax/src/index.ts) | entrypoints signal |
| entrypoints | [plugins/code-syntax-highlight/src/index.ts](../../../../sources/nhn__tui.editor/plugins/code-syntax-highlight/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/nhn__tui.editor/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/nhn__tui.editor/tsconfig.json) | config signal |
| config | [plugins/uml/package.json](../../../../sources/nhn__tui.editor/plugins/uml/package.json) | config signal |
| config | [plugins/uml/tsconfig.json](../../../../sources/nhn__tui.editor/plugins/uml/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/nhn__tui.editor/README.md) | docs signal |
| docs | [plugins/uml/README.md](../../../../sources/nhn__tui.editor/plugins/uml/README.md) | docs signal |
| docs | [plugins/table-merged-cell/README.md](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/README.md) | docs signal |
| docs | [plugins/color-syntax/README.md](../../../../sources/nhn__tui.editor/plugins/color-syntax/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 213 | [plugins/uml/src/index.ts](../../../../sources/nhn__tui.editor/plugins/uml/src/index.ts)<br>[plugins/table-merged-cell/src/index.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/index.ts)<br>[plugins/color-syntax/src/index.ts](../../../../sources/nhn__tui.editor/plugins/color-syntax/src/index.ts)<br>[plugins/code-syntax-highlight/src/index.ts](../../../../sources/nhn__tui.editor/plugins/code-syntax-highlight/src/index.ts)<br>[plugins/chart/src/index.ts](../../../../sources/nhn__tui.editor/plugins/chart/src/index.ts)<br>[libs/toastmark/src/index.ts](../../../../sources/nhn__tui.editor/libs/toastmark/src/index.ts)<br>[apps/vue-editor/src/Editor.vue](../../../../sources/nhn__tui.editor/apps/vue-editor/src/Editor.vue)<br>[apps/vue-editor/src/index.js](../../../../sources/nhn__tui.editor/apps/vue-editor/src/index.js) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 32 | [plugins/uml/index.d.ts](../../../../sources/nhn__tui.editor/plugins/uml/index.d.ts)<br>[plugins/uml/src/index.ts](../../../../sources/nhn__tui.editor/plugins/uml/src/index.ts)<br>[plugins/uml/demo/esm/index.html](../../../../sources/nhn__tui.editor/plugins/uml/demo/esm/index.html)<br>[plugins/table-merged-cell/types/index.d.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/types/index.d.ts)<br>[plugins/table-merged-cell/src/index.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/index.ts)<br>[plugins/table-merged-cell/demo/esm/index.html](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/demo/esm/index.html)<br>[plugins/color-syntax/types/index.d.ts](../../../../sources/nhn__tui.editor/plugins/color-syntax/types/index.d.ts)<br>[plugins/color-syntax/src/index.ts](../../../../sources/nhn__tui.editor/plugins/color-syntax/src/index.ts) |
| spec | 62 | [plugins/uml/src/__test__/integration/umlPlugin.spec.ts](../../../../sources/nhn__tui.editor/plugins/uml/src/__test__/integration/umlPlugin.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/convertor.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/convertor.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/addColumn.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/addColumn.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/addRow.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/addRow.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/mergeCells.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/mergeCells.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/removeColumn.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/removeColumn.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/removeRow.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/removeRow.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/splitCells.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/splitCells.spec.ts) |
| eval | 69 | [plugins/uml/src/__test__/integration/umlPlugin.spec.ts](../../../../sources/nhn__tui.editor/plugins/uml/src/__test__/integration/umlPlugin.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/convertor.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/convertor.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/addColumn.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/addColumn.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/addRow.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/addRow.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/mergeCells.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/mergeCells.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/removeColumn.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/removeColumn.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/removeRow.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/removeRow.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/splitCells.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/splitCells.spec.ts) |
| security | 0 | 명확하지 않음 |
| ci | 9 | [.github/workflows/check-types.yml](../../../../sources/nhn__tui.editor/.github/workflows/check-types.yml)<br>[.github/workflows/examplePageTest.yml](../../../../sources/nhn__tui.editor/.github/workflows/examplePageTest.yml)<br>[.github/workflows/linter.yml](../../../../sources/nhn__tui.editor/.github/workflows/linter.yml)<br>[.github/workflows/plugin-test.yml](../../../../sources/nhn__tui.editor/.github/workflows/plugin-test.yml)<br>[.github/workflows/publish-cdn.yml](../../../../sources/nhn__tui.editor/.github/workflows/publish-cdn.yml)<br>[.github/workflows/publish-doc.yml](../../../../sources/nhn__tui.editor/.github/workflows/publish-doc.yml)<br>[.github/workflows/publish-npm-wrapper.yml](../../../../sources/nhn__tui.editor/.github/workflows/publish-npm-wrapper.yml)<br>[.github/workflows/publish-npm.yml](../../../../sources/nhn__tui.editor/.github/workflows/publish-npm.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 35 | [README.md](../../../../sources/nhn__tui.editor/README.md)<br>[plugins/uml/README.md](../../../../sources/nhn__tui.editor/plugins/uml/README.md)<br>[plugins/table-merged-cell/README.md](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/README.md)<br>[plugins/color-syntax/README.md](../../../../sources/nhn__tui.editor/plugins/color-syntax/README.md)<br>[plugins/code-syntax-highlight/README.md](../../../../sources/nhn__tui.editor/plugins/code-syntax-highlight/README.md)<br>[plugins/chart/README.md](../../../../sources/nhn__tui.editor/plugins/chart/README.md)<br>[libs/toastmark/README.md](../../../../sources/nhn__tui.editor/libs/toastmark/README.md)<br>[docs/COMMIT_MESSAGE_CONVENTION.md](../../../../sources/nhn__tui.editor/docs/COMMIT_MESSAGE_CONVENTION.md) |
| config | 19 | [package.json](../../../../sources/nhn__tui.editor/package.json)<br>[tsconfig.json](../../../../sources/nhn__tui.editor/tsconfig.json)<br>[plugins/uml/package.json](../../../../sources/nhn__tui.editor/plugins/uml/package.json)<br>[plugins/uml/tsconfig.json](../../../../sources/nhn__tui.editor/plugins/uml/tsconfig.json)<br>[plugins/table-merged-cell/package.json](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/package.json)<br>[plugins/table-merged-cell/tsconfig.json](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/tsconfig.json)<br>[plugins/color-syntax/package.json](../../../../sources/nhn__tui.editor/plugins/color-syntax/package.json)<br>[plugins/color-syntax/tsconfig.json](../../../../sources/nhn__tui.editor/plugins/color-syntax/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 69 | [plugins/uml/src/__test__/integration/umlPlugin.spec.ts](../../../../sources/nhn__tui.editor/plugins/uml/src/__test__/integration/umlPlugin.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/convertor.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/convertor.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/addColumn.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/addColumn.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/addRow.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/addRow.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/mergeCells.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/mergeCells.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/removeColumn.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/removeColumn.spec.ts) |
| CI workflow | 9 | [.github/workflows/check-types.yml](../../../../sources/nhn__tui.editor/.github/workflows/check-types.yml)<br>[.github/workflows/examplePageTest.yml](../../../../sources/nhn__tui.editor/.github/workflows/examplePageTest.yml)<br>[.github/workflows/linter.yml](../../../../sources/nhn__tui.editor/.github/workflows/linter.yml)<br>[.github/workflows/plugin-test.yml](../../../../sources/nhn__tui.editor/.github/workflows/plugin-test.yml)<br>[.github/workflows/publish-cdn.yml](../../../../sources/nhn__tui.editor/.github/workflows/publish-cdn.yml)<br>[.github/workflows/publish-doc.yml](../../../../sources/nhn__tui.editor/.github/workflows/publish-doc.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `plugins/uml/src/index.ts`, `plugins/table-merged-cell/src/index.ts`, `plugins/color-syntax/src/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `plugins/uml/src/index.ts`, `plugins/table-merged-cell/src/index.ts`, `plugins/color-syntax/src/index.ts`.
3. retrieval/memory/indexing 확인: `plugins/uml/index.d.ts`, `plugins/uml/src/index.ts`, `plugins/uml/demo/esm/index.html`.
4. test/eval 파일로 동작 검증: `plugins/uml/src/__test__/integration/umlPlugin.spec.ts`, `plugins/table-merged-cell/src/__test__/integration/convertor.spec.ts`, `plugins/table-merged-cell/src/__test__/integration/wysiwyg/addColumn.spec.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 🍞📝 Markdown WYSIWYG Editor. GFM Standard + Chart & UML Extensible.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, vue이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
