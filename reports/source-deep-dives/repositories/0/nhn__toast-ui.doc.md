# nhn/toast-ui.doc Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

nhn/toast-ui.doc

## 요약

- 조사 단위: `sources/nhn__toast-ui.doc` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 99 files, 20 directories, depth score 92, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=bin/apiContentDataFactory.js, bin/apiDataFactory.js, bin/apiDataFactoryHelper.js이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | nhn/toast-ui.doc |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | JavaScript |
| Stars | 133 |
| Forks | 19 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/nhn__toast-ui.doc](../../../../sources/nhn__toast-ui.doc) |
| Existing report | [reports/korea-trending/repositories/nhn__toast-ui.doc.md](../../../korea-trending/repositories/nhn__toast-ui.doc.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 99 / 20 |
| Max observed depth | 4 |
| Top directories | __mocks__, __tests__, .github, bin, demo, docs, src |
| Top extensions | .js: 64, .scss: 17, .md: 10, .json: 3, (none): 3, .css: 1, .html: 1 |
| Source patterns | cli-first, api/server, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 4 |
| src | source boundary | 2 |
| __mocks__ | top-level component | 1 |
| __tests__ | validation surface | 1 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| demo | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | test | jest |
| utility | package.json | clean | gatsby clean |
| serve-dev | package.json | develop | gatsby develop |
| build | package.json | build | gatsby build |
| test | package.json | build:latest | GATSBY_ACTIVE_ENV=latest gatsby build --prefix-paths |
| build | package.json | build:semver | GATSBY_ACTIVE_ENV=semver gatsby build --prefix-paths |
| serve-dev | package.json | serve | gatsby serve |
| serve-dev | package.json | tuidoc:dev | node ./bin/build --dev |
| build | package.json | tuidoc | node ./bin/build |
| serve-dev | package.json | tuidoc:serve | node ./bin/build --serv |
| utility | package.json | note | tui-note --tag=$(git describe --tags) |
| entrypoint | package.json bin | build.js | ./bin/build.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | react |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [bin/apiContentDataFactory.js](../../../../sources/nhn__toast-ui.doc/bin/apiContentDataFactory.js) | entrypoints signal |
| entrypoints | [bin/apiDataFactory.js](../../../../sources/nhn__toast-ui.doc/bin/apiDataFactory.js) | entrypoints signal |
| entrypoints | [bin/apiDataFactoryHelper.js](../../../../sources/nhn__toast-ui.doc/bin/apiDataFactoryHelper.js) | entrypoints signal |
| entrypoints | [bin/apiNavigationDataFactory.js](../../../../sources/nhn__toast-ui.doc/bin/apiNavigationDataFactory.js) | entrypoints signal |
| config | [package.json](../../../../sources/nhn__toast-ui.doc/package.json) | config signal |
| docs | [README.md](../../../../sources/nhn__toast-ui.doc/README.md) | docs signal |
| docs | [docs/COMMIT_MESSAGE_CONVENTION.md](../../../../sources/nhn__toast-ui.doc/docs/COMMIT_MESSAGE_CONVENTION.md) | docs signal |
| docs | [docs/PULL_REQUEST_TEMPLATE.md](../../../../sources/nhn__toast-ui.doc/docs/PULL_REQUEST_TEMPLATE.md) | docs signal |
| docs | [docs/README.md](../../../../sources/nhn__toast-ui.doc/docs/README.md) | docs signal |
| eval | [__tests__/jest-preprocess.js](../../../../sources/nhn__toast-ui.doc/__tests__/jest-preprocess.js) | eval signal |
| eval | [__tests__/jest-setup.js](../../../../sources/nhn__toast-ui.doc/__tests__/jest-setup.js) | eval signal |
| eval | [__tests__/components/layout.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/layout.spec.js) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [bin/apiContentDataFactory.js](../../../../sources/nhn__toast-ui.doc/bin/apiContentDataFactory.js)<br>[bin/apiDataFactory.js](../../../../sources/nhn__toast-ui.doc/bin/apiDataFactory.js)<br>[bin/apiDataFactoryHelper.js](../../../../sources/nhn__toast-ui.doc/bin/apiDataFactoryHelper.js)<br>[bin/apiNavigationDataFactory.js](../../../../sources/nhn__toast-ui.doc/bin/apiNavigationDataFactory.js)<br>[bin/build.js](../../../../sources/nhn__toast-ui.doc/bin/build.js)<br>[bin/exampleDataFactory.js](../../../../sources/nhn__toast-ui.doc/bin/exampleDataFactory.js) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 1 | [src/pages/index.js](../../../../sources/nhn__toast-ui.doc/src/pages/index.js) |
| spec | 6 | [__tests__/components/layout.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/layout.spec.js)<br>[__tests__/components/ListGroup.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/ListGroup.spec.js)<br>[__tests__/components/ListItem.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/ListItem.spec.js)<br>[__tests__/components/SubListGroups.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/SubListGroups.spec.js)<br>[__tests__/components/tabs.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/tabs.spec.js)<br>[__tests__/components/ToggleButton.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/ToggleButton.spec.js) |
| eval | 8 | [__tests__/jest-preprocess.js](../../../../sources/nhn__toast-ui.doc/__tests__/jest-preprocess.js)<br>[__tests__/jest-setup.js](../../../../sources/nhn__toast-ui.doc/__tests__/jest-setup.js)<br>[__tests__/components/layout.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/layout.spec.js)<br>[__tests__/components/ListGroup.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/ListGroup.spec.js)<br>[__tests__/components/ListItem.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/ListItem.spec.js)<br>[__tests__/components/SubListGroups.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/SubListGroups.spec.js)<br>[__tests__/components/tabs.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/tabs.spec.js)<br>[__tests__/components/ToggleButton.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/ToggleButton.spec.js) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 5 | [README.md](../../../../sources/nhn__toast-ui.doc/README.md)<br>[docs/COMMIT_MESSAGE_CONVENTION.md](../../../../sources/nhn__toast-ui.doc/docs/COMMIT_MESSAGE_CONVENTION.md)<br>[docs/PULL_REQUEST_TEMPLATE.md](../../../../sources/nhn__toast-ui.doc/docs/PULL_REQUEST_TEMPLATE.md)<br>[docs/README.md](../../../../sources/nhn__toast-ui.doc/docs/README.md)<br>[demo/README.md](../../../../sources/nhn__toast-ui.doc/demo/README.md) |
| config | 1 | [package.json](../../../../sources/nhn__toast-ui.doc/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 8 | [__tests__/jest-preprocess.js](../../../../sources/nhn__toast-ui.doc/__tests__/jest-preprocess.js)<br>[__tests__/jest-setup.js](../../../../sources/nhn__toast-ui.doc/__tests__/jest-setup.js)<br>[__tests__/components/layout.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/layout.spec.js)<br>[__tests__/components/ListGroup.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/ListGroup.spec.js)<br>[__tests__/components/ListItem.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/ListItem.spec.js)<br>[__tests__/components/SubListGroups.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/SubListGroups.spec.js) |
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
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `bin/apiContentDataFactory.js`, `bin/apiDataFactory.js`, `bin/apiDataFactoryHelper.js`.
2. Trace execution through entrypoints: `bin/apiContentDataFactory.js`, `bin/apiDataFactory.js`, `bin/apiDataFactoryHelper.js`.
3. Inspect retrieval/memory/indexing through: `src/pages/index.js`.
4. Verify behavior through test/eval files: `__tests__/jest-preprocess.js`, `__tests__/jest-setup.js`, `__tests__/components/layout.spec.js`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, react, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
