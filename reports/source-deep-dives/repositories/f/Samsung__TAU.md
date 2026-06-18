# Samsung/TAU Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

TAU (Tizen Advanced UI) project for supporting web app development based on web-based ui widget components library

## 요약

- 조사 단위: `sources/Samsung__TAU` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 6,826 files, 1,061 directories, depth score 103, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=tools/tizen-sdk/bin/common.sh, tools/tizen-sdk/bin/tizen, tools/tizen-sdk/bin/web-build이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/TAU |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | JavaScript |
| Stars | 50 |
| Forks | 40 |
| License | NOASSERTION |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Samsung__TAU](../../../../sources/Samsung__TAU) |
| Existing report | [reports/korea-trending/repositories/Samsung__TAU.md](../../../korea-trending/repositories/Samsung__TAU.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 6826 / 1061 |
| Max observed depth | 11 |
| Top directories | .github, .hooks, config, examples, libs, license, src, tests, tools |
| Top extensions | .js: 1764, .html: 1735, .png: 1564, .json: 527, .svg: 328, .jpg: 271, .less: 195, .jar: 103, .css: 79, (none): 70, .xml: 65, .ttf: 17 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 72 |
| examples/mobile | examples workspace | 6 |
| src | source boundary | 6 |
| libs/globalize | libs workspace | 2 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| examples | top-level component | 1 |
| examples/wearable | examples workspace | 1 |
| libs | source boundary | 1 |
| license | top-level component | 1 |
| tools | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | npx grunt build |
| build | package.json | postinstall | npm run build |
| utility | package.json | grunt | grunt |
| serve-dev | package.json | http-server | http-server -p 8888 -a localhost |
| quality | package.json | preinstall | ./check-node.py && ./install-hooks |
| test | package.json | test | npx grunt test |
| test | package.json | test:karma | karma start tests/karma/all.conf.js |
| test | package.json | test:karma-single-test | karma start tests/karma/single.conf.js |
| quality | package.json | lint-check | lint-diff $TRAVIS_COMMIT_RANGE |
| quality | package.json | spellcheck | cspell 'src/**/*.js' 'src/**/*.html' 'examples/mobile/UIComponents/**/*.js' 'examples/wearable/UIComponents/**/*.js' 'examples/mobile/UIComponents/**/*.html' 'examples/wearable/UIComponents/**/*.html' |


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
| entrypoints | [tools/tizen-sdk/bin/common.sh](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/common.sh) | entrypoints signal |
| entrypoints | [tools/tizen-sdk/bin/tizen](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/tizen) | entrypoints signal |
| entrypoints | [tools/tizen-sdk/bin/web-build](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/web-build) | entrypoints signal |
| entrypoints | [tools/tizen-sdk/bin/web-gen](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/web-gen) | entrypoints signal |
| config | [package.json](../../../../sources/Samsung__TAU/package.json) | config signal |
| config | [tools/ninepatch/package.json](../../../../sources/Samsung__TAU/tools/ninepatch/package.json) | config signal |
| config | [tools/karma-plugins/console-reporter/package.json](../../../../sources/Samsung__TAU/tools/karma-plugins/console-reporter/package.json) | config signal |
| config | [tools/converter/package.json](../../../../sources/Samsung__TAU/tools/converter/package.json) | config signal |
| docs | [README.md](../../../../sources/Samsung__TAU/README.md) | docs signal |
| docs | [tools/tizen-sdk/README_HYBRIDAPP.txt](../../../../sources/Samsung__TAU/tools/tizen-sdk/README_HYBRIDAPP.txt) | docs signal |
| docs | [tools/tizen-sdk/lib-cli/README](../../../../sources/Samsung__TAU/tools/tizen-sdk/lib-cli/README) | docs signal |
| docs | [tools/tizen-sdk/lib/README](../../../../sources/Samsung__TAU/tools/tizen-sdk/lib/README) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 18 | [tools/tizen-sdk/bin/common.sh](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/common.sh)<br>[tools/tizen-sdk/bin/tizen](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/tizen)<br>[tools/tizen-sdk/bin/web-build](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/web-build)<br>[tools/tizen-sdk/bin/web-gen](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/web-gen)<br>[tools/tizen-sdk/bin/web-hybridapp](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/web-hybridapp)<br>[tools/tizen-sdk/bin/web-list](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/web-list)<br>[tools/tizen-sdk/bin/web-packaging](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/web-packaging)<br>[tools/tizen-sdk/bin/web-signing](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/web-signing) |
| agentRuntime | 284 | [tools/59cc85fc.diff](../../../../sources/Samsung__TAU/tools/59cc85fc.diff)<br>[tools/author.p12](../../../../sources/Samsung__TAU/tools/author.p12)<br>[tools/distributor.p12](../../../../sources/Samsung__TAU/tools/distributor.p12)<br>[tools/profiles.xml](../../../../sources/Samsung__TAU/tools/profiles.xml)<br>[tools/sync-wearable-sdk-git.py](../../../../sources/Samsung__TAU/tools/sync-wearable-sdk-git.py)<br>[tools/tizen-developer-ca.cer](../../../../sources/Samsung__TAU/tools/tizen-developer-ca.cer)<br>[tools/tizen-distributor-ca.cer](../../../../sources/Samsung__TAU/tools/tizen-distributor-ca.cer)<br>[tools/tizen-distributor-signer.p12](../../../../sources/Samsung__TAU/tools/tizen-distributor-signer.p12) |
| mcp | 0 | not obvious |
| retrieval | 249 | [index.md](../../../../sources/Samsung__TAU/index.md)<br>[tools/karma-plugins/console-reporter/index.js](../../../../sources/Samsung__TAU/tools/karma-plugins/console-reporter/index.js)<br>[tools/grunt/tasks/templates/sdk/index.mustache](../../../../sources/Samsung__TAU/tools/grunt/tasks/templates/sdk/index.mustache)<br>[tools/grunt/tasks/templates/dld/index.mustache](../../../../sources/Samsung__TAU/tools/grunt/tasks/templates/dld/index.mustache)<br>[tools/grunt/tasks/templates/components/index.mustache](../../../../sources/Samsung__TAU/tools/grunt/tasks/templates/components/index.mustache)<br>[tools/grunt/tasks/generate-api-coverage-info/index.js](../../../../sources/Samsung__TAU/tools/grunt/tasks/generate-api-coverage-info/index.js)<br>[tools/converter/index.js](../../../../sources/Samsung__TAU/tools/converter/index.js)<br>[tests/unitTest/index.html](../../../../sources/Samsung__TAU/tests/unitTest/index.html) |
| spec | 0 | not obvious |
| eval | 3558 | [tools/tizen-sdk/conf/log4j-trace.xml](../../../../sources/Samsung__TAU/tools/tizen-sdk/conf/log4j-trace.xml)<br>[tools/grunt/tasks/ce-converter-test.js](../../../../sources/Samsung__TAU/tools/grunt/tasks/ce-converter-test.js)<br>[tools/grunt/tasks/tests.js](../../../../sources/Samsung__TAU/tools/grunt/tasks/tests.js)<br>[tools/grunt/tasks/ui-tests.js](../../../../sources/Samsung__TAU/tools/grunt/tasks/ui-tests.js)<br>[tools/grunt/tasks/ce-converter-test/mobile/base.html](../../../../sources/Samsung__TAU/tools/grunt/tasks/ce-converter-test/mobile/base.html)<br>[tools/grunt/tasks/ce-converter-test/mobile/target.html](../../../../sources/Samsung__TAU/tools/grunt/tasks/ce-converter-test/mobile/target.html)<br>[tools/cmd/ui-tests-cmd.js](../../../../sources/Samsung__TAU/tools/cmd/ui-tests-cmd.js)<br>[tools/cmd/lib/ui-tests.js](../../../../sources/Samsung__TAU/tools/cmd/lib/ui-tests.js) |
| security | 0 | not obvious |
| ci | 2 | [tools/cmd/jenkins-update.js](../../../../sources/Samsung__TAU/tools/cmd/jenkins-update.js)<br>[.github/workflows/actions.yml](../../../../sources/Samsung__TAU/.github/workflows/actions.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 18 | [README.md](../../../../sources/Samsung__TAU/README.md)<br>[tools/tizen-sdk/README_HYBRIDAPP.txt](../../../../sources/Samsung__TAU/tools/tizen-sdk/README_HYBRIDAPP.txt)<br>[tools/tizen-sdk/lib-cli/README](../../../../sources/Samsung__TAU/tools/tizen-sdk/lib-cli/README)<br>[tools/tizen-sdk/lib/README](../../../../sources/Samsung__TAU/tools/tizen-sdk/lib/README)<br>[tools/ninepatch/README.txt](../../../../sources/Samsung__TAU/tools/ninepatch/README.txt)<br>[tools/git/README](../../../../sources/Samsung__TAU/tools/git/README)<br>[tests/docs/wearable/all.html](../../../../sources/Samsung__TAU/tests/docs/wearable/all.html)<br>[tests/docs/wearable/docs.js](../../../../sources/Samsung__TAU/tests/docs/wearable/docs.js) |
| config | 6 | [package.json](../../../../sources/Samsung__TAU/package.json)<br>[tools/ninepatch/package.json](../../../../sources/Samsung__TAU/tools/ninepatch/package.json)<br>[tools/karma-plugins/console-reporter/package.json](../../../../sources/Samsung__TAU/tools/karma-plugins/console-reporter/package.json)<br>[tools/converter/package.json](../../../../sources/Samsung__TAU/tools/converter/package.json)<br>[libs/globalize/package.json](../../../../sources/Samsung__TAU/libs/globalize/package.json)<br>[examples/mobile/HomeAppServer/package.json](../../../../sources/Samsung__TAU/examples/mobile/HomeAppServer/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3558 | [tools/tizen-sdk/conf/log4j-trace.xml](../../../../sources/Samsung__TAU/tools/tizen-sdk/conf/log4j-trace.xml)<br>[tools/grunt/tasks/ce-converter-test.js](../../../../sources/Samsung__TAU/tools/grunt/tasks/ce-converter-test.js)<br>[tools/grunt/tasks/tests.js](../../../../sources/Samsung__TAU/tools/grunt/tasks/tests.js)<br>[tools/grunt/tasks/ui-tests.js](../../../../sources/Samsung__TAU/tools/grunt/tasks/ui-tests.js)<br>[tools/grunt/tasks/ce-converter-test/mobile/base.html](../../../../sources/Samsung__TAU/tools/grunt/tasks/ce-converter-test/mobile/base.html)<br>[tools/grunt/tasks/ce-converter-test/mobile/target.html](../../../../sources/Samsung__TAU/tools/grunt/tasks/ce-converter-test/mobile/target.html) |
| CI workflows | 2 | [tools/cmd/jenkins-update.js](../../../../sources/Samsung__TAU/tools/cmd/jenkins-update.js)<br>[.github/workflows/actions.yml](../../../../sources/Samsung__TAU/.github/workflows/actions.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `tools/tizen-sdk/bin/common.sh`, `tools/tizen-sdk/bin/tizen`, `tools/tizen-sdk/bin/web-build`.
2. Trace execution through entrypoints: `tools/tizen-sdk/bin/common.sh`, `tools/tizen-sdk/bin/tizen`, `tools/tizen-sdk/bin/web-build`.
3. Map agent/tool runtime through: `tools/59cc85fc.diff`, `tools/author.p12`, `tools/distributor.p12`.
4. Inspect retrieval/memory/indexing through: `index.md`, `tools/karma-plugins/console-reporter/index.js`, `tools/grunt/tasks/templates/sdk/index.mustache`.
5. Verify behavior through test/eval files: `tools/tizen-sdk/conf/log4j-trace.xml`, `tools/grunt/tasks/ce-converter-test.js`, `tools/grunt/tasks/tests.js`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 TAU Tizen Advanced UI project for supporting web app development based on web based ui widget components library. 핵심 구조 신호는 JavaScript, package.json, README.md, tests, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
