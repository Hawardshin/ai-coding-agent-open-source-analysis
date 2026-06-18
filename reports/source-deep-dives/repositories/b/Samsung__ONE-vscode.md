# Samsung/ONE-vscode 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Visual Studio Code Extension of ONE compiler toolchain

## 요약

- 조사 단위: `sources/Samsung__ONE-vscode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 317 files, 78 directories, depth score 90, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=package.json, tsconfig.json이고, 의존성 단서는 vscode, electron, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Samsung/ONE-vscode |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 48 |
| Forks | 51 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__ONE-vscode](../../../../sources/Samsung__ONE-vscode) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__ONE-vscode.md](../../../korea-trending/repositories/Samsung__ONE-vscode.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 317 / 78 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .ahub, .github, docs, infra, logo, media, res, script, src |
| 상위 확장자 | .ts: 133, .js: 70, .json: 18, .md: 17, (none): 17, .css: 13, .jpg: 11, .yml: 11, .html: 9, .cfg: 4, .circle: 3, .sh: 3 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 51 |
| docs | documentation surface | 20 |
| .github | ci surface | 1 |
| infra | top-level component | 1 |
| logo | top-level component | 1 |
| media | top-level component | 1 |
| res | top-level component | 1 |
| script | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | vscode:prepublish | npm run compile |
| build | package.json | compile | tsc -p ./ |
| serve-dev | package.json | watch | tsc -watch -p ./ |
| test | package.json | pretest | npm run compile && npm run lint && npm run lintjs && npm run lintcss && npm run linthtml |
| quality | package.json | lint | eslint src --ext ts --max-warnings 0 |
| quality | package.json | lintjs | eslint media --ext js --max-warnings 0 |
| quality | package.json | lintcss | stylelint media/**/*.css src/**/*.css -i media/CircleGraph/external/**/*.css |
| quality | package.json | linthtml | htmlhint media src |
| test | package.json | unittest | node ./out/Tests/runTest.js |
| test | package.json | test | npm run unittest |
| test | package.json | test-no-screen | DISPLAY=:44 xvfb-run -a --server-num 44 npm run test |
| test | package.json | coverage | npm run test coverage |
| utility | package.json | clean | rm -rf out |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | vscode, electron |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| config | [package.json](../../../../sources/Samsung__ONE-vscode/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/Samsung__ONE-vscode/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/Samsung__ONE-vscode/README.md) | docs signal |
| docs | [src/Tests/README.md](../../../../sources/Samsung__ONE-vscode/src/Tests/README.md) | docs signal |
| docs | [src/Mondrian/README.md](../../../../sources/Samsung__ONE-vscode/src/Mondrian/README.md) | docs signal |
| docs | [src/MetadataManager/README.md](../../../../sources/Samsung__ONE-vscode/src/MetadataManager/README.md) | docs signal |
| eval | [src/Tests/index.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/index.ts) | eval signal |
| eval | [src/Tests/MockCompiler.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/MockCompiler.ts) | eval signal |
| eval | [src/Tests/MockJob.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/MockJob.ts) | eval signal |
| ci | [.github/workflows/check-commit.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-commit.yml) | ci support |
| ci | [.github/workflows/check-copyright.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-copyright.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 4 | [src/Tests/Job/Workflow.test.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/Job/Workflow.test.ts)<br>[src/Tests/Backend/Executor.test.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/Backend/Executor.test.ts)<br>[src/Job/WorkFlow.ts](../../../../sources/Samsung__ONE-vscode/src/Job/WorkFlow.ts)<br>[src/Backend/Executor.ts](../../../../sources/Samsung__ONE-vscode/src/Backend/Executor.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 18 | [src/Tests/index.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/index.ts)<br>[media/PartEditor/index.css](../../../../sources/Samsung__ONE-vscode/media/PartEditor/index.css)<br>[media/PartEditor/index.html](../../../../sources/Samsung__ONE-vscode/media/PartEditor/index.html)<br>[media/PartEditor/index.js](../../../../sources/Samsung__ONE-vscode/media/PartEditor/index.js)<br>[media/MPQEditor/index.html](../../../../sources/Samsung__ONE-vscode/media/MPQEditor/index.html)<br>[media/MPQEditor/index.js](../../../../sources/Samsung__ONE-vscode/media/MPQEditor/index.js)<br>[media/MetadataViewer/index.html](../../../../sources/Samsung__ONE-vscode/media/MetadataViewer/index.html)<br>[media/MetadataViewer/index.js](../../../../sources/Samsung__ONE-vscode/media/MetadataViewer/index.js) |
| spec | 2 | [src/Tests/Backend/Spec.test.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/Backend/Spec.test.ts)<br>[src/Backend/Spec.ts](../../../../sources/Samsung__ONE-vscode/src/Backend/Spec.ts) |
| eval | 53 | [src/Tests/index.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/index.ts)<br>[src/Tests/MockCompiler.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/MockCompiler.ts)<br>[src/Tests/MockJob.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/MockJob.ts)<br>[src/Tests/README.md](../../../../sources/Samsung__ONE-vscode/src/Tests/README.md)<br>[src/Tests/runTest.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/runTest.ts)<br>[src/Tests/TestBuilder.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/TestBuilder.ts)<br>[src/Tests/View/InstallQuickInput.test.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/View/InstallQuickInput.test.ts)<br>[src/Tests/View/PasswordQuickInput.test.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/View/PasswordQuickInput.test.ts) |
| security | 0 | 명확하지 않음 |
| ci | 10 | [.github/workflows/check-commit.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-commit.yml)<br>[.github/workflows/check-copyright.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-copyright.yml)<br>[.github/workflows/check-daily-license.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-daily-license.yml)<br>[.github/workflows/check-license.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-license.yml)<br>[.github/workflows/check-pr-format.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-pr-format.yml)<br>[.github/workflows/check-pr-test.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-pr-test.yml)<br>[.github/workflows/check-pr-tsc.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-pr-tsc.yml)<br>[.github/workflows/nightly-release.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/nightly-release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 28 | [README.md](../../../../sources/Samsung__ONE-vscode/README.md)<br>[src/Tests/README.md](../../../../sources/Samsung__ONE-vscode/src/Tests/README.md)<br>[src/Mondrian/README.md](../../../../sources/Samsung__ONE-vscode/src/Mondrian/README.md)<br>[src/MetadataManager/README.md](../../../../sources/Samsung__ONE-vscode/src/MetadataManager/README.md)<br>[res/samples/cfg/readme.md](../../../../sources/Samsung__ONE-vscode/res/samples/cfg/readme.md)<br>[res/modelDir/truediv/README.md](../../../../sources/Samsung__ONE-vscode/res/modelDir/truediv/README.md)<br>[res/modelDir/output/README.md](../../../../sources/Samsung__ONE-vscode/res/modelDir/output/README.md)<br>[media/CircleEditor/README.md](../../../../sources/Samsung__ONE-vscode/media/CircleEditor/README.md) |
| config | 2 | [package.json](../../../../sources/Samsung__ONE-vscode/package.json)<br>[tsconfig.json](../../../../sources/Samsung__ONE-vscode/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 53 | [src/Tests/index.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/index.ts)<br>[src/Tests/MockCompiler.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/MockCompiler.ts)<br>[src/Tests/MockJob.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/MockJob.ts)<br>[src/Tests/README.md](../../../../sources/Samsung__ONE-vscode/src/Tests/README.md)<br>[src/Tests/runTest.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/runTest.ts)<br>[src/Tests/TestBuilder.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/TestBuilder.ts) |
| CI workflow | 10 | [.github/workflows/check-commit.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-commit.yml)<br>[.github/workflows/check-copyright.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-copyright.yml)<br>[.github/workflows/check-daily-license.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-daily-license.yml)<br>[.github/workflows/check-license.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-license.yml)<br>[.github/workflows/check-pr-format.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-pr-format.yml)<br>[.github/workflows/check-pr-test.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-pr-test.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `package.json`, `tsconfig.json`, `README.md`.
2. agent/tool runtime 매핑: `src/Tests/Job/Workflow.test.ts`, `src/Tests/Backend/Executor.test.ts`, `src/Job/WorkFlow.ts`.
3. retrieval/memory/indexing 확인: `src/Tests/index.ts`, `media/PartEditor/index.css`, `media/PartEditor/index.html`.
4. test/eval 파일로 동작 검증: `src/Tests/index.ts`, `src/Tests/MockCompiler.ts`, `src/Tests/MockJob.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Visual Studio Code Extension of ONE compiler toolchain. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, vscode, electron이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
