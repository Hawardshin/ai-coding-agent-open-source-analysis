# nhn/tui.image-editor 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

🍞🎨 Full-featured photo image editor using canvas. It is really easy, and it comes with great filters.

## 요약

- 조사 단위: `sources/nhn__tui.image-editor` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 498 files, 54 directories, depth score 107, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=apps/vue-image-editor/src/ImageEditor.vue, apps/vue-image-editor/src/index.js, apps/vue-image-editor/.storybook/main.js이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | nhn/tui.image-editor |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | JavaScript |
| Stars | 7651 |
| Forks | 1377 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/nhn__tui.image-editor](../../../../sources/nhn__tui.image-editor) |
| 기존 보고서 | [reports/korea-trending/repositories/nhn__tui.image-editor.md](../../../korea-trending/repositories/nhn__tui.image-editor.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 498 / 54 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, apps, docs |
| 상위 확장자 | .svg: 258, .js: 155, .md: 19, .png: 13, .json: 12, .yml: 11, .styl: 10, .snap: 4, (none): 4, .css: 3, .html: 3, .jpg: 3 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| apps/image-editor | apps workspace | 110 |
| docs | documentation surface | 10 |
| apps/vue-image-editor | apps workspace | 7 |
| apps/react-image-editor | apps workspace | 6 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | lerna run build |
| build | package.json | build:image-editor | lerna run --scope tui-image-editor build |
| build | package.json | build:react | lerna run --scope @toast-ui/react-image-editor build |
| build | package.json | build:vue | lerna run --scope @toast-ui/vue-image-editor build |


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
| entrypoints | [apps/vue-image-editor/src/ImageEditor.vue](../../../../sources/nhn__tui.image-editor/apps/vue-image-editor/src/ImageEditor.vue) | entrypoints signal |
| entrypoints | [apps/vue-image-editor/src/index.js](../../../../sources/nhn__tui.image-editor/apps/vue-image-editor/src/index.js) | entrypoints signal |
| entrypoints | [apps/vue-image-editor/.storybook/main.js](../../../../sources/nhn__tui.image-editor/apps/vue-image-editor/.storybook/main.js) | entrypoints signal |
| entrypoints | [apps/react-image-editor/src/index.js](../../../../sources/nhn__tui.image-editor/apps/react-image-editor/src/index.js) | entrypoints signal |
| config | [package.json](../../../../sources/nhn__tui.image-editor/package.json) | config signal |
| config | [apps/vue-image-editor/package.json](../../../../sources/nhn__tui.image-editor/apps/vue-image-editor/package.json) | config signal |
| config | [apps/react-image-editor/package.json](../../../../sources/nhn__tui.image-editor/apps/react-image-editor/package.json) | config signal |
| config | [apps/image-editor/package.json](../../../../sources/nhn__tui.image-editor/apps/image-editor/package.json) | config signal |
| docs | [README.md](../../../../sources/nhn__tui.image-editor/README.md) | docs signal |
| docs | [docs/Apply-Mobile-Version-Image.md](../../../../sources/nhn__tui.image-editor/docs/Apply-Mobile-Version-Image.md) | docs signal |
| docs | [docs/Apply-Mobile-Version.md](../../../../sources/nhn__tui.image-editor/docs/Apply-Mobile-Version.md) | docs signal |
| docs | [docs/Basic-Tutorial.md](../../../../sources/nhn__tui.image-editor/docs/Basic-Tutorial.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 368 | [apps/vue-image-editor/src/ImageEditor.vue](../../../../sources/nhn__tui.image-editor/apps/vue-image-editor/src/ImageEditor.vue)<br>[apps/vue-image-editor/src/index.js](../../../../sources/nhn__tui.image-editor/apps/vue-image-editor/src/index.js)<br>[apps/vue-image-editor/.storybook/main.js](../../../../sources/nhn__tui.image-editor/apps/vue-image-editor/.storybook/main.js)<br>[apps/react-image-editor/src/index.js](../../../../sources/nhn__tui.image-editor/apps/react-image-editor/src/index.js)<br>[apps/react-image-editor/.storybook/main.js](../../../../sources/nhn__tui.image-editor/apps/react-image-editor/.storybook/main.js)<br>[apps/image-editor/src/index.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/src/index.js)<br>[apps/image-editor/src/svg/default.svg](../../../../sources/nhn__tui.image-editor/apps/image-editor/src/svg/default.svg)<br>[apps/image-editor/src/svg/icon-d/ic-apply.svg](../../../../sources/nhn__tui.image-editor/apps/image-editor/src/svg/icon-d/ic-apply.svg) |
| agentRuntime | 2 | [apps/image-editor/src/js/ui/tools/colorpicker.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/src/js/ui/tools/colorpicker.js)<br>[apps/image-editor/src/js/ui/tools/range.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/src/js/ui/tools/range.js) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 8 | [apps/vue-image-editor/stories/index.stories.js](../../../../sources/nhn__tui.image-editor/apps/vue-image-editor/stories/index.stories.js)<br>[apps/vue-image-editor/src/index.js](../../../../sources/nhn__tui.image-editor/apps/vue-image-editor/src/index.js)<br>[apps/react-image-editor/stories/index.stories.js](../../../../sources/nhn__tui.image-editor/apps/react-image-editor/stories/index.stories.js)<br>[apps/react-image-editor/src/index.js](../../../../sources/nhn__tui.image-editor/apps/react-image-editor/src/index.js)<br>[apps/image-editor/index.d.ts](../../../../sources/nhn__tui.image-editor/apps/image-editor/index.d.ts)<br>[apps/image-editor/tests/index.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/index.js)<br>[apps/image-editor/src/index.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/src/index.js)<br>[apps/image-editor/src/css/index.styl](../../../../sources/nhn__tui.image-editor/apps/image-editor/src/css/index.styl) |
| spec | 28 | [apps/image-editor/tests/action.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/action.spec.js)<br>[apps/image-editor/tests/arrowLine.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/arrowLine.spec.js)<br>[apps/image-editor/tests/command.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/command.spec.js)<br>[apps/image-editor/tests/cropper.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/cropper.spec.js)<br>[apps/image-editor/tests/cropzone.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/cropzone.spec.js)<br>[apps/image-editor/tests/drawingMode.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/drawingMode.spec.js)<br>[apps/image-editor/tests/filter.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/filter.spec.js)<br>[apps/image-editor/tests/flip.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/flip.spec.js) |
| eval | 38 | [apps/image-editor/tests/action.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/action.spec.js)<br>[apps/image-editor/tests/arrowLine.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/arrowLine.spec.js)<br>[apps/image-editor/tests/command.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/command.spec.js)<br>[apps/image-editor/tests/cropper.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/cropper.spec.js)<br>[apps/image-editor/tests/cropzone.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/cropzone.spec.js)<br>[apps/image-editor/tests/drawingMode.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/drawingMode.spec.js)<br>[apps/image-editor/tests/filter.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/filter.spec.js)<br>[apps/image-editor/tests/flip.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/flip.spec.js) |
| security | 0 | 명확하지 않음 |
| ci | 4 | [.github/workflows/detectRuntimeError.yml](../../../../sources/nhn__tui.image-editor/.github/workflows/detectRuntimeError.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/nhn__tui.image-editor/.github/workflows/publish-docs.yml)<br>[.github/workflows/publish-npm.yml](../../../../sources/nhn__tui.image-editor/.github/workflows/publish-npm.yml)<br>[.github/workflows/publish-wrapper.yml](../../../../sources/nhn__tui.image-editor/.github/workflows/publish-wrapper.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 13 | [README.md](../../../../sources/nhn__tui.image-editor/README.md)<br>[docs/Apply-Mobile-Version-Image.md](../../../../sources/nhn__tui.image-editor/docs/Apply-Mobile-Version-Image.md)<br>[docs/Apply-Mobile-Version.md](../../../../sources/nhn__tui.image-editor/docs/Apply-Mobile-Version.md)<br>[docs/Basic-Tutorial.md](../../../../sources/nhn__tui.image-editor/docs/Basic-Tutorial.md)<br>[docs/COMMIT_MESSAGE_CONVENTION.md](../../../../sources/nhn__tui.image-editor/docs/COMMIT_MESSAGE_CONVENTION.md)<br>[docs/ImageEditor-2.0.0-Migration-guide.md](../../../../sources/nhn__tui.image-editor/docs/ImageEditor-2.0.0-Migration-guide.md)<br>[docs/ISSUE_TEMPLATE.md](../../../../sources/nhn__tui.image-editor/docs/ISSUE_TEMPLATE.md)<br>[docs/PULL_REQUEST_TEMPLATE.md](../../../../sources/nhn__tui.image-editor/docs/PULL_REQUEST_TEMPLATE.md) |
| config | 5 | [package.json](../../../../sources/nhn__tui.image-editor/package.json)<br>[apps/vue-image-editor/package.json](../../../../sources/nhn__tui.image-editor/apps/vue-image-editor/package.json)<br>[apps/react-image-editor/package.json](../../../../sources/nhn__tui.image-editor/apps/react-image-editor/package.json)<br>[apps/image-editor/package.json](../../../../sources/nhn__tui.image-editor/apps/image-editor/package.json)<br>[apps/image-editor/tests/types/tsconfig.json](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/types/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 38 | [apps/image-editor/tests/action.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/action.spec.js)<br>[apps/image-editor/tests/arrowLine.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/arrowLine.spec.js)<br>[apps/image-editor/tests/command.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/command.spec.js)<br>[apps/image-editor/tests/cropper.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/cropper.spec.js)<br>[apps/image-editor/tests/cropzone.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/cropzone.spec.js)<br>[apps/image-editor/tests/drawingMode.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/drawingMode.spec.js) |
| CI workflow | 4 | [.github/workflows/detectRuntimeError.yml](../../../../sources/nhn__tui.image-editor/.github/workflows/detectRuntimeError.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/nhn__tui.image-editor/.github/workflows/publish-docs.yml)<br>[.github/workflows/publish-npm.yml](../../../../sources/nhn__tui.image-editor/.github/workflows/publish-npm.yml)<br>[.github/workflows/publish-wrapper.yml](../../../../sources/nhn__tui.image-editor/.github/workflows/publish-wrapper.yml) |
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

1. 핵심 참조에서 시작: `apps/vue-image-editor/src/ImageEditor.vue`, `apps/vue-image-editor/src/index.js`, `apps/vue-image-editor/.storybook/main.js`.
2. entrypoint를 따라 실행 흐름 확인: `apps/vue-image-editor/src/ImageEditor.vue`, `apps/vue-image-editor/src/index.js`, `apps/vue-image-editor/.storybook/main.js`.
3. agent/tool runtime 매핑: `apps/image-editor/src/js/ui/tools/colorpicker.js`, `apps/image-editor/src/js/ui/tools/range.js`.
4. retrieval/memory/indexing 확인: `apps/vue-image-editor/stories/index.stories.js`, `apps/vue-image-editor/src/index.js`, `apps/react-image-editor/stories/index.stories.js`.
5. test/eval 파일로 동작 검증: `apps/image-editor/tests/action.spec.js`, `apps/image-editor/tests/arrowLine.spec.js`, `apps/image-editor/tests/command.spec.js`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 🍞🎨 Full featured photo image editor using canvas. It is really easy, and it comes with great filters.. 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, react, vue이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
