# naver/egjs-persist Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Provide cache interface to handle persisted data among history navigation.

## 요약

- 조사 단위: `sources/naver__egjs-persist` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 91 files, 24 directories, depth score 82, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 api/server, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=index.d.ts, src/index.js, src/index.umd.js이고, 의존성 단서는 express, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/egjs-persist |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | JavaScript |
| Stars | 44 |
| Forks | 8 |
| License | MIT |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__egjs-persist](../../../../sources/naver__egjs-persist) |
| Existing report | [reports/korea-trending/repositories/naver__egjs-persist.md](../../../korea-trending/repositories/naver__egjs-persist.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 91 / 24 |
| Max observed depth | 4 |
| Top directories | config, demo, rollup, src, test |
| Top extensions | .js: 32, .html: 17, .css: 8, (none): 7, .md: 6, .png: 6, .svg: 6, .json: 3, .yml: 3, .opts: 1, .template: 1, .ts: 1 |
| Source patterns | api/server, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 5 |
| config | top-level component | 1 |
| demo | top-level component | 1 |
| rollup | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | start | webpack-dev-server --open |
| build | package.json | build | rollup -c |
| build | package.json | build:webpack | webpack --env production |
| test | package.json | test | karma start |
| test | package.json | test:chrome | karma start --chrome |
| quality | package.json | lint | eslint src |
| utility | package.json | jsdoc | rm -rf ./doc && jsdoc -c jsdoc.json |
| test | package.json | coverage | npm run simulate:node && karma start --coverage |
| build | package.json | simulate:node | npm run build && node ./dist/persist.js |
| build | package.json | release | node config/release.js |
| test | package.json | demo:start | npm run demo:prebuild-latest && npm run demo:updateVersion && jekyll serve --host=0.0.0.0 -s demo |
| build | package.json | demo:build | npm run demo:updateVersion && jekyll build -s demo |
| build | package.json | demo:prebuild-version | cpx 'dist/**/*' demo/release/$npm_package_version/dist --clean && cpx 'doc/**/*' demo/release/$npm_package_version/doc --clean |
| test | package.json | demo:prebuild-latest | cpx 'dist/**/*' demo/release/latest/dist --clean && cpx 'doc/**/*' demo/release/latest/doc --clean |
| test | package.json | demo:deploy | npm run build && npm run jsdoc && npm run demo:prebuild-version && npm run demo:prebuild-latest && npm run demo:build && gh-pages -d demo/_site --add --remote upstream |
| utility | package.json | demo:updateVersion | echo $npm_package_version > demo/_data/version.yml |
| utility | package.json | demo:setup | cpx 'node_modules/@egjs/common-demo/**/*' 'demo/' && rm demo/package.json |
| test | package.json | coveralls | cat ./coverage/lcov.info \| ./node_modules/coveralls/bin/coveralls.js |
| quality | package.json | prepush | npm run lint |
| utility | package.json | commitmsg | node config/validate-commit-msg.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | express |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [index.d.ts](../../../../sources/naver__egjs-persist/index.d.ts) | retrieval signal |
| retrieval | [src/index.js](../../../../sources/naver__egjs-persist/src/index.js) | retrieval signal |
| retrieval | [src/index.umd.js](../../../../sources/naver__egjs-persist/src/index.umd.js) | retrieval signal |
| retrieval | [demo/index.md](../../../../sources/naver__egjs-persist/demo/index.md) | retrieval signal |
| docs | [README.md](../../../../sources/naver__egjs-persist/README.md) | docs signal |
| eval | [test/unit/persist-migrate.spec.js](../../../../sources/naver__egjs-persist/test/unit/persist-migrate.spec.js) | eval signal |
| eval | [test/unit/persist.spec.js](../../../../sources/naver__egjs-persist/test/unit/persist.spec.js) | eval signal |
| eval | [test/unit/storageManager.spec.js](../../../../sources/naver__egjs-persist/test/unit/storageManager.spec.js) | eval signal |
| eval | [test/unit/TestHelper.js](../../../../sources/naver__egjs-persist/test/unit/TestHelper.js) | eval signal |
| config | [package.json](../../../../sources/naver__egjs-persist/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/index.js](../../../../sources/naver__egjs-persist/src/index.js)<br>[src/index.umd.js](../../../../sources/naver__egjs-persist/src/index.umd.js) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 4 | [index.d.ts](../../../../sources/naver__egjs-persist/index.d.ts)<br>[src/index.js](../../../../sources/naver__egjs-persist/src/index.js)<br>[src/index.umd.js](../../../../sources/naver__egjs-persist/src/index.umd.js)<br>[demo/index.md](../../../../sources/naver__egjs-persist/demo/index.md) |
| spec | 4 | [test/unit/persist-migrate.spec.js](../../../../sources/naver__egjs-persist/test/unit/persist-migrate.spec.js)<br>[test/unit/persist.spec.js](../../../../sources/naver__egjs-persist/test/unit/persist.spec.js)<br>[test/unit/storageManager.spec.js](../../../../sources/naver__egjs-persist/test/unit/storageManager.spec.js)<br>[test/unit/utils.spec.js](../../../../sources/naver__egjs-persist/test/unit/utils.spec.js) |
| eval | 16 | [test/unit/persist-migrate.spec.js](../../../../sources/naver__egjs-persist/test/unit/persist-migrate.spec.js)<br>[test/unit/persist.spec.js](../../../../sources/naver__egjs-persist/test/unit/persist.spec.js)<br>[test/unit/storageManager.spec.js](../../../../sources/naver__egjs-persist/test/unit/storageManager.spec.js)<br>[test/unit/TestHelper.js](../../../../sources/naver__egjs-persist/test/unit/TestHelper.js)<br>[test/unit/utils.spec.js](../../../../sources/naver__egjs-persist/test/unit/utils.spec.js)<br>[test/manual/exceeded.html](../../../../sources/naver__egjs-persist/test/manual/exceeded.html)<br>[test/manual/persist.html](../../../../sources/naver__egjs-persist/test/manual/persist.html)<br>[test/manual/js/demo.js](../../../../sources/naver__egjs-persist/test/manual/js/demo.js) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/naver__egjs-persist/README.md) |
| config | 1 | [package.json](../../../../sources/naver__egjs-persist/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 16 | [test/unit/persist-migrate.spec.js](../../../../sources/naver__egjs-persist/test/unit/persist-migrate.spec.js)<br>[test/unit/persist.spec.js](../../../../sources/naver__egjs-persist/test/unit/persist.spec.js)<br>[test/unit/storageManager.spec.js](../../../../sources/naver__egjs-persist/test/unit/storageManager.spec.js)<br>[test/unit/TestHelper.js](../../../../sources/naver__egjs-persist/test/unit/TestHelper.js)<br>[test/unit/utils.spec.js](../../../../sources/naver__egjs-persist/test/unit/utils.spec.js)<br>[test/manual/exceeded.html](../../../../sources/naver__egjs-persist/test/manual/exceeded.html) |
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

1. Start from key references: `index.d.ts`, `src/index.js`, `src/index.umd.js`.
2. Trace execution through entrypoints: `src/index.js`, `src/index.umd.js`.
3. Inspect retrieval/memory/indexing through: `index.d.ts`, `src/index.js`, `src/index.umd.js`.
4. Verify behavior through test/eval files: `test/unit/persist-migrate.spec.js`, `test/unit/persist.spec.js`, `test/unit/storageManager.spec.js`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Provide cache interface to handle persisted data among history navigation.. 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, tests, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 ci signal not obvious, needs deeper structural scan입니다.
