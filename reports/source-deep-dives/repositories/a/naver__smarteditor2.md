# naver/smarteditor2 Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Javascript WYSIWYG HTML editor

## 요약

- 조사 단위: `sources/naver__smarteditor2` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 257 files, 50 directories, depth score 80, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 config=package.json이고, 의존성 단서는 express, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/smarteditor2 |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | JavaScript |
| Stars | 294 |
| Forks | 161 |
| License | NOASSERTION |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__smarteditor2](../../../../sources/naver__smarteditor2) |
| Existing report | [reports/korea-trending/repositories/naver__smarteditor2.md](../../../korea-trending/repositories/naver__smarteditor2.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 257 / 50 |
| Max observed depth | 6 |
| Top directories | workspace |
| Top extensions | .js: 91, .md: 58, .png: 55, .css: 20, .gif: 12, .html: 10, .jpg: 6, (none): 3, .json: 1, .yml: 1 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| workspace | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | test | jest |
| test | package.json | coverage | jest --coverage |
| test | package.json | codecov | jest --coverage && codecov |
| quality | package.json | lint | eslint -f table ./workspace |
| build | package.json | docs:clean | rm -rf build/docs |
| serve-dev | package.json | docs:serve | gitbook --port 3000 serve ./workspace/docs/user_guide ./build/docs/user_guide |
| build | package.json | docs:build | gitbook build ./workspace/docs/user_guide ./build/docs/user_guide |
| build | package.json | docs:publish | gh-pages -d ./build/docs/user_guide -e ./user_guide -m 'update user_guide' |
| build | package.json | docs:deploy | npm run docs:build && npm run docs:publish |
| serve-dev | package.json | start | webpack-dev-server --open --hot |
| build | package.json | build | webpack --env.production |
| test | package.json | preversion | npm test |
| utility | package.json | postversion | git push --follow-tags && npm publish |
| build | package.json | prepublishOnly | npm run build |
| utility | package.json | postpublish | npm pack |
| utility | package.json | deploy | npm version patch |
| build | package.json | postdeploy | gh-pages -d ./dist -e ./demo -m 'update demo' |
| serve-dev | package.json | deploy:dev | npm publish --tag dev |


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
| config | [package.json](../../../../sources/naver__smarteditor2/package.json) | config signal |
| docs | [README.md](../../../../sources/naver__smarteditor2/README.md) | docs signal |
| docs | [workspace/docs/user_guide/README.md](../../../../sources/naver__smarteditor2/workspace/docs/user_guide/README.md) | docs signal |
| docs | [workspace/docs/user_guide/SUMMARY.md](../../../../sources/naver__smarteditor2/workspace/docs/user_guide/SUMMARY.md) | docs signal |
| docs | [workspace/docs/user_guide/assets/backgroundcolor_palette.png](../../../../sources/naver__smarteditor2/workspace/docs/user_guide/assets/backgroundcolor_palette.png) | docs signal |
| eval | [workspace/test/util/hp_SE2M_Utils.test.js](../../../../sources/naver__smarteditor2/workspace/test/util/hp_SE2M_Utils.test.js) | eval signal |
| eval | [workspace/test/husky_framework/hp_CorePlugin.test.js](../../../../sources/naver__smarteditor2/workspace/test/husky_framework/hp_CorePlugin.test.js) | eval signal |
| eval | [workspace/test/husky_framework/hp_HuskyRangeManager.test.js](../../../../sources/naver__smarteditor2/workspace/test/husky_framework/hp_HuskyRangeManager.test.js) | eval signal |
| eval | [workspace/test/husky_framework/HuskyCore.test.js](../../../../sources/naver__smarteditor2/workspace/test/husky_framework/HuskyCore.test.js) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [workspace/docs/user_guide/5_fileuploader/workflow.md](../../../../sources/naver__smarteditor2/workspace/docs/user_guide/5_fileuploader/workflow.md) |
| mcp | 0 | not obvious |
| retrieval | 2 | [workspace/static/index.html](../../../../sources/naver__smarteditor2/workspace/static/index.html)<br>[workspace/src/bundle/index.js](../../../../sources/naver__smarteditor2/workspace/src/bundle/index.js) |
| spec | 0 | not obvious |
| eval | 11 | [workspace/test/util/hp_SE2M_Utils.test.js](../../../../sources/naver__smarteditor2/workspace/test/util/hp_SE2M_Utils.test.js)<br>[workspace/test/husky_framework/hp_CorePlugin.test.js](../../../../sources/naver__smarteditor2/workspace/test/husky_framework/hp_CorePlugin.test.js)<br>[workspace/test/husky_framework/hp_HuskyRangeManager.test.js](../../../../sources/naver__smarteditor2/workspace/test/husky_framework/hp_HuskyRangeManager.test.js)<br>[workspace/test/husky_framework/HuskyCore.test.js](../../../../sources/naver__smarteditor2/workspace/test/husky_framework/HuskyCore.test.js)<br>[workspace/test/common/base/hp_SE2M_Toolbar.test.js](../../../../sources/naver__smarteditor2/workspace/test/common/base/hp_SE2M_Toolbar.test.js)<br>[workspace/test/bundle/base.test.js](../../../../sources/naver__smarteditor2/workspace/test/bundle/base.test.js)<br>[workspace/test/bundle/extra.test.js](../../../../sources/naver__smarteditor2/workspace/test/bundle/extra.test.js)<br>[workspace/test/bundle/husky-range.test.js](../../../../sources/naver__smarteditor2/workspace/test/bundle/husky-range.test.js) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 103 | [README.md](../../../../sources/naver__smarteditor2/README.md)<br>[workspace/docs/user_guide/README.md](../../../../sources/naver__smarteditor2/workspace/docs/user_guide/README.md)<br>[workspace/docs/user_guide/SUMMARY.md](../../../../sources/naver__smarteditor2/workspace/docs/user_guide/SUMMARY.md)<br>[workspace/docs/user_guide/assets/backgroundcolor_palette.png](../../../../sources/naver__smarteditor2/workspace/docs/user_guide/assets/backgroundcolor_palette.png)<br>[workspace/docs/user_guide/assets/backgroundcolor.png](../../../../sources/naver__smarteditor2/workspace/docs/user_guide/assets/backgroundcolor.png)<br>[workspace/docs/user_guide/assets/basicstyle.png](../../../../sources/naver__smarteditor2/workspace/docs/user_guide/assets/basicstyle.png)<br>[workspace/docs/user_guide/assets/colorexample.png](../../../../sources/naver__smarteditor2/workspace/docs/user_guide/assets/colorexample.png)<br>[workspace/docs/user_guide/assets/colorpalette.png](../../../../sources/naver__smarteditor2/workspace/docs/user_guide/assets/colorpalette.png) |
| config | 1 | [package.json](../../../../sources/naver__smarteditor2/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 11 | [workspace/test/util/hp_SE2M_Utils.test.js](../../../../sources/naver__smarteditor2/workspace/test/util/hp_SE2M_Utils.test.js)<br>[workspace/test/husky_framework/hp_CorePlugin.test.js](../../../../sources/naver__smarteditor2/workspace/test/husky_framework/hp_CorePlugin.test.js)<br>[workspace/test/husky_framework/hp_HuskyRangeManager.test.js](../../../../sources/naver__smarteditor2/workspace/test/husky_framework/hp_HuskyRangeManager.test.js)<br>[workspace/test/husky_framework/HuskyCore.test.js](../../../../sources/naver__smarteditor2/workspace/test/husky_framework/HuskyCore.test.js)<br>[workspace/test/common/base/hp_SE2M_Toolbar.test.js](../../../../sources/naver__smarteditor2/workspace/test/common/base/hp_SE2M_Toolbar.test.js)<br>[workspace/test/bundle/base.test.js](../../../../sources/naver__smarteditor2/workspace/test/bundle/base.test.js) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `package.json`, `README.md`, `workspace/docs/user_guide/README.md`.
2. Map agent/tool runtime through: `workspace/docs/user_guide/5_fileuploader/workflow.md`.
3. Inspect retrieval/memory/indexing through: `workspace/static/index.html`, `workspace/src/bundle/index.js`.
4. Verify behavior through test/eval files: `workspace/test/util/hp_SE2M_Utils.test.js`, `workspace/test/husky_framework/hp_CorePlugin.test.js`, `workspace/test/husky_framework/hp_HuskyRangeManager.test.js`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Javascript WYSIWYG HTML editor. 핵심 구조 신호는 JavaScript, package.json, README.md, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
