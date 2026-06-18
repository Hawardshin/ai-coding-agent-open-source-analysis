# Samsung/ONE-vscode Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Visual Studio Code Extension of ONE compiler toolchain

## 요약

- 조사 단위: `sources/Samsung__ONE-vscode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 317 files, 78 directories, depth score 96, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=package.json, tsconfig.json이고, 의존성 단서는 vscode, electron, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/ONE-vscode |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 48 |
| Forks | 51 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/Samsung__ONE-vscode](../../../../sources/Samsung__ONE-vscode) |
| Existing report | [reports/korea-trending/repositories/Samsung__ONE-vscode.md](../../../korea-trending/repositories/Samsung__ONE-vscode.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 317 / 78 |
| Max observed depth | 5 |
| Top directories | .ahub, .github, docs, infra, logo, media, res, script, src |
| Top extensions | .ts: 133, .js: 70, .json: 18, .md: 17, (none): 17, .css: 13, .jpg: 11, .yml: 11, .html: 9, .cfg: 4, .circle: 3, .sh: 3 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 51 |
| docs | documentation surface | 20 |
| .github | ci surface | 1 |
| infra | top-level component | 1 |
| logo | top-level component | 1 |
| media | top-level component | 1 |
| res | top-level component | 1 |
| script | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
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


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | vscode, electron |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 4 | [src/Tests/Job/Workflow.test.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/Job/Workflow.test.ts)<br>[src/Tests/Backend/Executor.test.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/Backend/Executor.test.ts)<br>[src/Job/WorkFlow.ts](../../../../sources/Samsung__ONE-vscode/src/Job/WorkFlow.ts)<br>[src/Backend/Executor.ts](../../../../sources/Samsung__ONE-vscode/src/Backend/Executor.ts) |
| mcp | 0 | not obvious |
| retrieval | 18 | [src/Tests/index.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/index.ts)<br>[media/PartEditor/index.css](../../../../sources/Samsung__ONE-vscode/media/PartEditor/index.css)<br>[media/PartEditor/index.html](../../../../sources/Samsung__ONE-vscode/media/PartEditor/index.html)<br>[media/PartEditor/index.js](../../../../sources/Samsung__ONE-vscode/media/PartEditor/index.js)<br>[media/MPQEditor/index.html](../../../../sources/Samsung__ONE-vscode/media/MPQEditor/index.html)<br>[media/MPQEditor/index.js](../../../../sources/Samsung__ONE-vscode/media/MPQEditor/index.js)<br>[media/MetadataViewer/index.html](../../../../sources/Samsung__ONE-vscode/media/MetadataViewer/index.html)<br>[media/MetadataViewer/index.js](../../../../sources/Samsung__ONE-vscode/media/MetadataViewer/index.js) |
| spec | 2 | [src/Tests/Backend/Spec.test.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/Backend/Spec.test.ts)<br>[src/Backend/Spec.ts](../../../../sources/Samsung__ONE-vscode/src/Backend/Spec.ts) |
| eval | 53 | [src/Tests/index.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/index.ts)<br>[src/Tests/MockCompiler.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/MockCompiler.ts)<br>[src/Tests/MockJob.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/MockJob.ts)<br>[src/Tests/README.md](../../../../sources/Samsung__ONE-vscode/src/Tests/README.md)<br>[src/Tests/runTest.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/runTest.ts)<br>[src/Tests/TestBuilder.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/TestBuilder.ts)<br>[src/Tests/View/InstallQuickInput.test.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/View/InstallQuickInput.test.ts)<br>[src/Tests/View/PasswordQuickInput.test.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/View/PasswordQuickInput.test.ts) |
| security | 0 | not obvious |
| ci | 10 | [.github/workflows/check-commit.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-commit.yml)<br>[.github/workflows/check-copyright.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-copyright.yml)<br>[.github/workflows/check-daily-license.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-daily-license.yml)<br>[.github/workflows/check-license.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-license.yml)<br>[.github/workflows/check-pr-format.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-pr-format.yml)<br>[.github/workflows/check-pr-test.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-pr-test.yml)<br>[.github/workflows/check-pr-tsc.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-pr-tsc.yml)<br>[.github/workflows/nightly-release.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/nightly-release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 28 | [README.md](../../../../sources/Samsung__ONE-vscode/README.md)<br>[src/Tests/README.md](../../../../sources/Samsung__ONE-vscode/src/Tests/README.md)<br>[src/Mondrian/README.md](../../../../sources/Samsung__ONE-vscode/src/Mondrian/README.md)<br>[src/MetadataManager/README.md](../../../../sources/Samsung__ONE-vscode/src/MetadataManager/README.md)<br>[res/samples/cfg/readme.md](../../../../sources/Samsung__ONE-vscode/res/samples/cfg/readme.md)<br>[res/modelDir/truediv/README.md](../../../../sources/Samsung__ONE-vscode/res/modelDir/truediv/README.md)<br>[res/modelDir/output/README.md](../../../../sources/Samsung__ONE-vscode/res/modelDir/output/README.md)<br>[media/CircleEditor/README.md](../../../../sources/Samsung__ONE-vscode/media/CircleEditor/README.md) |
| config | 2 | [package.json](../../../../sources/Samsung__ONE-vscode/package.json)<br>[tsconfig.json](../../../../sources/Samsung__ONE-vscode/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 53 | [src/Tests/index.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/index.ts)<br>[src/Tests/MockCompiler.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/MockCompiler.ts)<br>[src/Tests/MockJob.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/MockJob.ts)<br>[src/Tests/README.md](../../../../sources/Samsung__ONE-vscode/src/Tests/README.md)<br>[src/Tests/runTest.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/runTest.ts)<br>[src/Tests/TestBuilder.ts](../../../../sources/Samsung__ONE-vscode/src/Tests/TestBuilder.ts) |
| CI workflows | 10 | [.github/workflows/check-commit.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-commit.yml)<br>[.github/workflows/check-copyright.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-copyright.yml)<br>[.github/workflows/check-daily-license.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-daily-license.yml)<br>[.github/workflows/check-license.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-license.yml)<br>[.github/workflows/check-pr-format.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-pr-format.yml)<br>[.github/workflows/check-pr-test.yml](../../../../sources/Samsung__ONE-vscode/.github/workflows/check-pr-test.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `package.json`, `tsconfig.json`, `README.md`.
2. Map agent/tool runtime through: `src/Tests/Job/Workflow.test.ts`, `src/Tests/Backend/Executor.test.ts`, `src/Job/WorkFlow.ts`.
3. Inspect retrieval/memory/indexing through: `src/Tests/index.ts`, `media/PartEditor/index.css`, `media/PartEditor/index.html`.
4. Verify behavior through test/eval files: `src/Tests/index.ts`, `src/Tests/MockCompiler.ts`, `src/Tests/MockJob.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Visual Studio Code Extension of ONE compiler toolchain. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, vscode, electron이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
