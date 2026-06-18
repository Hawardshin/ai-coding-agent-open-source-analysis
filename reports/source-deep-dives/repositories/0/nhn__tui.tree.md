# nhn/tui.tree Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Component that displays data hierarchically.

## 요약

- 조사 단위: `sources/nhn__tui.tree` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 70 files, 16 directories, depth score 77, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=package.json이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | nhn/tui.tree |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | JavaScript |
| Stars | 101 |
| Forks | 16 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/nhn__tui.tree](../../../../sources/nhn__tui.tree) |
| Existing report | [reports/korea-trending/repositories/nhn__tui.tree.md](../../../korea-trending/repositories/nhn__tui.tree.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 70 / 16 |
| Max observed depth | 4 |
| Top directories | .github, docs, examples, src, test |
| Top extensions | .js: 32, .md: 12, .html: 10, .json: 5, .css: 4, (none): 3, .yml: 2, .gif: 1, .png: 1 |
| Source patterns | retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 7 |
| src | source boundary | 2 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | test | jest |
| build | package.json | bundle | webpack --mode=production & webpack --mode=production --minify |
| serve-dev | package.json | serve | webpack-dev-server --inline --hot -d |
| serve-dev | package.json | serve:ie8 | webpack-dev-server -d |
| serve-dev | package.json | doc:serve | tuidoc --serv |
| utility | package.json | doc | tuidoc |
| utility | package.json | note | tui-note |


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
| config | [package.json](../../../../sources/nhn__tui.tree/package.json) | config signal |
| docs | [README.md](../../../../sources/nhn__tui.tree/README.md) | docs signal |
| docs | [docs/ajax-feature.md](../../../../sources/nhn__tui.tree/docs/ajax-feature.md) | docs signal |
| docs | [docs/COMMIT_MESSAGE_CONVENTION.md](../../../../sources/nhn__tui.tree/docs/COMMIT_MESSAGE_CONVENTION.md) | docs signal |
| docs | [docs/getting-started.md](../../../../sources/nhn__tui.tree/docs/getting-started.md) | docs signal |
| eval | [test/.eslintrc.js](../../../../sources/nhn__tui.tree/test/.eslintrc.js) | eval signal |
| eval | [test/setup-globals.js](../../../../sources/nhn__tui.tree/test/setup-globals.js) | eval signal |
| eval | [test/tree.spec.js](../../../../sources/nhn__tui.tree/test/tree.spec.js) | eval signal |
| eval | [test/treeModel.spec.js](../../../../sources/nhn__tui.tree/test/treeModel.spec.js) | eval signal |
| ci | [.github/workflows/test_on_pull_request.yml](../../../../sources/nhn__tui.tree/.github/workflows/test_on_pull_request.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 1 | [src/js/index.js](../../../../sources/nhn__tui.tree/src/js/index.js) |
| spec | 10 | [test/tree.spec.js](../../../../sources/nhn__tui.tree/test/tree.spec.js)<br>[test/treeModel.spec.js](../../../../sources/nhn__tui.tree/test/treeModel.spec.js)<br>[test/treeNode.spec.js](../../../../sources/nhn__tui.tree/test/treeNode.spec.js)<br>[test/util.spec.js](../../../../sources/nhn__tui.tree/test/util.spec.js)<br>[test/features/ajax.spec.js](../../../../sources/nhn__tui.tree/test/features/ajax.spec.js)<br>[test/features/checkbox.spec.js](../../../../sources/nhn__tui.tree/test/features/checkbox.spec.js)<br>[test/features/contextMenu.spec.js](../../../../sources/nhn__tui.tree/test/features/contextMenu.spec.js)<br>[test/features/draggable.spec.js](../../../../sources/nhn__tui.tree/test/features/draggable.spec.js) |
| eval | 14 | [test/.eslintrc.js](../../../../sources/nhn__tui.tree/test/.eslintrc.js)<br>[test/setup-globals.js](../../../../sources/nhn__tui.tree/test/setup-globals.js)<br>[test/tree.spec.js](../../../../sources/nhn__tui.tree/test/tree.spec.js)<br>[test/treeModel.spec.js](../../../../sources/nhn__tui.tree/test/treeModel.spec.js)<br>[test/treeNode.spec.js](../../../../sources/nhn__tui.tree/test/treeNode.spec.js)<br>[test/util.spec.js](../../../../sources/nhn__tui.tree/test/util.spec.js)<br>[test/fixtures/basicFixture.html](../../../../sources/nhn__tui.tree/test/fixtures/basicFixture.html)<br>[test/features/ajax.spec.js](../../../../sources/nhn__tui.tree/test/features/ajax.spec.js) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/test_on_pull_request.yml](../../../../sources/nhn__tui.tree/.github/workflows/test_on_pull_request.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 7 | [README.md](../../../../sources/nhn__tui.tree/README.md)<br>[docs/ajax-feature.md](../../../../sources/nhn__tui.tree/docs/ajax-feature.md)<br>[docs/COMMIT_MESSAGE_CONVENTION.md](../../../../sources/nhn__tui.tree/docs/COMMIT_MESSAGE_CONVENTION.md)<br>[docs/getting-started.md](../../../../sources/nhn__tui.tree/docs/getting-started.md)<br>[docs/PULL_REQUEST_TEMPLATE.md](../../../../sources/nhn__tui.tree/docs/PULL_REQUEST_TEMPLATE.md)<br>[docs/README.md](../../../../sources/nhn__tui.tree/docs/README.md)<br>[docs/v4.0.0-migration-guide.md](../../../../sources/nhn__tui.tree/docs/v4.0.0-migration-guide.md) |
| config | 1 | [package.json](../../../../sources/nhn__tui.tree/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 14 | [test/.eslintrc.js](../../../../sources/nhn__tui.tree/test/.eslintrc.js)<br>[test/setup-globals.js](../../../../sources/nhn__tui.tree/test/setup-globals.js)<br>[test/tree.spec.js](../../../../sources/nhn__tui.tree/test/tree.spec.js)<br>[test/treeModel.spec.js](../../../../sources/nhn__tui.tree/test/treeModel.spec.js)<br>[test/treeNode.spec.js](../../../../sources/nhn__tui.tree/test/treeNode.spec.js)<br>[test/util.spec.js](../../../../sources/nhn__tui.tree/test/util.spec.js) |
| CI workflows | 1 | [.github/workflows/test_on_pull_request.yml](../../../../sources/nhn__tui.tree/.github/workflows/test_on_pull_request.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `package.json`, `README.md`, `docs/ajax-feature.md`.
2. Inspect retrieval/memory/indexing through: `src/js/index.js`.
3. Verify behavior through test/eval files: `test/.eslintrc.js`, `test/setup-globals.js`, `test/tree.spec.js`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Component that displays data hierarchically.. 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, tests, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
