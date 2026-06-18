# UrRafiFirdaus/ComfyUI_FL-HeartMuLa Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

🎶 Generate multilingual AI music with lyrics in English, Chinese, Japanese, Korean, and Spanish using ComfyUI's HeartMuLa model.

## 요약

- 조사 단위: `sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 6,838 files, 683 directories, depth score 120, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=resources/views/supplier/index.blade.php, resources/views/produk/index.blade.php, resources/views/penjualan_detail/index.blade.php이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | UrRafiFirdaus/ComfyUI_FL-HeartMuLa |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | HTML |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa) |
| Existing report | [reports/korea-trending/repositories/UrRafiFirdaus__ComfyUI_FL-HeartMuLa.md](../../../korea-trending/repositories/UrRafiFirdaus__ComfyUI_FL-HeartMuLa.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 6838 / 683 |
| Max observed depth | 11 |
| Top directories | app, bootstrap, config, database, public, resources, routes, storage, tests |
| Top extensions | .js: 3477, .png: 1210, .svg: 743, .css: 424, .html: 201, .php: 176, .less: 119, .json: 111, .md: 76, (none): 76, .scss: 50, .gif: 39 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 18 |
| app | top-level component | 1 |
| bootstrap | top-level component | 1 |
| config | top-level component | 1 |
| database | top-level component | 1 |
| public | top-level component | 1 |
| resources | top-level component | 1 |
| routes | top-level component | 1 |
| storage | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | npm run development |
| serve-dev | package.json | development | mix |
| serve-dev | package.json | watch | mix watch |
| serve-dev | package.json | watch-poll | mix watch -- --watch-options-poll=1000 |
| serve-dev | package.json | hot | mix watch --hot |
| utility | package.json | prod | npm run production |
| utility | package.json | production | mix --production |


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
| retrieval | [resources/views/supplier/index.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/supplier/index.blade.php) | retrieval signal |
| retrieval | [resources/views/produk/index.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/produk/index.blade.php) | retrieval signal |
| retrieval | [resources/views/penjualan_detail/index.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/penjualan_detail/index.blade.php) | retrieval signal |
| retrieval | [resources/views/penjualan/index.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/penjualan/index.blade.php) | retrieval signal |
| entrypoints | [server.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/server.php) | entrypoints signal |
| entrypoints | [public/AdminLTE-2/bower_components/bootstrap-daterangepicker/example/browserify/main.js](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/bootstrap-daterangepicker/example/browserify/main.js) | entrypoints signal |
| entrypoints | [public/AdminLTE-2/bower_components/bootstrap-daterangepicker/example/amd/main.js](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/bootstrap-daterangepicker/example/amd/main.js) | entrypoints signal |
| docs | [README.md](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/README.md) | docs signal |
| docs | [public/AdminLTE-2/README.md](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/README.md) | docs signal |
| docs | [public/AdminLTE-2/plugins/input-mask/phone-codes/readme.txt](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/plugins/input-mask/phone-codes/readme.txt) | docs signal |
| docs | [public/AdminLTE-2/bower_components/select2/README.md](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/select2/README.md) | docs signal |
| eval | [tests/CreatesApplication.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/CreatesApplication.php) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [server.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/server.php)<br>[public/AdminLTE-2/bower_components/bootstrap-daterangepicker/example/browserify/main.js](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/bootstrap-daterangepicker/example/browserify/main.js)<br>[public/AdminLTE-2/bower_components/bootstrap-daterangepicker/example/amd/main.js](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/bootstrap-daterangepicker/example/amd/main.js) |
| agentRuntime | 1 | [public/AdminLTE-2/bower_components/moment/src/lib/utils/hooks.js](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/moment/src/lib/utils/hooks.js) |
| mcp | 0 | not obvious |
| retrieval | 73 | [resources/views/supplier/index.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/supplier/index.blade.php)<br>[resources/views/produk/index.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/produk/index.blade.php)<br>[resources/views/penjualan_detail/index.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/penjualan_detail/index.blade.php)<br>[resources/views/penjualan/index.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/penjualan/index.blade.php)<br>[resources/views/pengeluaran/index.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/pengeluaran/index.blade.php)<br>[resources/views/pembelian_detail/index.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/pembelian_detail/index.blade.php)<br>[resources/views/pembelian/index.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/pembelian/index.blade.php)<br>[resources/views/member/index.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/member/index.blade.php) |
| spec | 25 | [public/AdminLTE-2/bower_components/morris.js/spec/specs.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/morris.js/spec/specs.html)<br>[public/AdminLTE-2/bower_components/morris.js/spec/viz/examples.js](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/morris.js/spec/viz/examples.js)<br>[public/AdminLTE-2/bower_components/morris.js/spec/viz/run.sh](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/morris.js/spec/viz/run.sh)<br>[public/AdminLTE-2/bower_components/morris.js/spec/viz/visual_specs.js](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/morris.js/spec/viz/visual_specs.js)<br>[public/AdminLTE-2/bower_components/morris.js/spec/viz/exemplary/area0.png](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/morris.js/spec/viz/exemplary/area0.png)<br>[public/AdminLTE-2/bower_components/morris.js/spec/viz/exemplary/bar0.png](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/morris.js/spec/viz/exemplary/bar0.png)<br>[public/AdminLTE-2/bower_components/morris.js/spec/viz/exemplary/line0.png](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/morris.js/spec/viz/exemplary/line0.png)<br>[public/AdminLTE-2/bower_components/morris.js/spec/viz/exemplary/stacked_bar0.png](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/morris.js/spec/viz/exemplary/stacked_bar0.png) |
| eval | 166 | [tests/CreatesApplication.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/CreatesApplication.php)<br>[tests/TestCase.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/TestCase.php)<br>[tests/Unit/ExampleTest.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/Unit/ExampleTest.php)<br>[tests/Feature/ApiTokenPermissionsTest.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/Feature/ApiTokenPermissionsTest.php)<br>[tests/Feature/AuthenticationTest.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/Feature/AuthenticationTest.php)<br>[tests/Feature/BrowserSessionsTest.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/Feature/BrowserSessionsTest.php)<br>[tests/Feature/CreateApiTokenTest.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/Feature/CreateApiTokenTest.php)<br>[tests/Feature/DeleteAccountTest.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/Feature/DeleteAccountTest.php) |
| security | 13 | [resources/views/policy.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/policy.blade.php)<br>[resources/views/layouts/auth.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/layouts/auth.blade.php)<br>[resources/views/auth/confirm-password.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/auth/confirm-password.blade.php)<br>[resources/views/auth/forgot-password.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/auth/forgot-password.blade.php)<br>[resources/views/auth/login.blade copy.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/auth/login.blade copy.php)<br>[resources/views/auth/login.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/auth/login.blade.php)<br>[resources/views/auth/register.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/auth/register.blade.php)<br>[resources/views/auth/reset-password.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/auth/reset-password.blade.php) |
| ci | 0 | not obvious |
| container | 4 | [public/AdminLTE-2/pages/charts/chartjs.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/pages/charts/chartjs.html)<br>[public/AdminLTE-2/pages/charts/flot.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/pages/charts/flot.html)<br>[public/AdminLTE-2/pages/charts/inline.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/pages/charts/inline.html)<br>[public/AdminLTE-2/pages/charts/morris.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/pages/charts/morris.html) |
| instruction | 0 | not obvious |
| docs | 113 | [README.md](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/README.md)<br>[public/AdminLTE-2/README.md](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/README.md)<br>[public/AdminLTE-2/plugins/input-mask/phone-codes/readme.txt](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/plugins/input-mask/phone-codes/readme.txt)<br>[public/AdminLTE-2/bower_components/select2/README.md](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/select2/README.md)<br>[public/AdminLTE-2/bower_components/select2/docs/announcements-4.0.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/select2/docs/announcements-4.0.html)<br>[public/AdminLTE-2/bower_components/select2/docs/community.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/select2/docs/community.html)<br>[public/AdminLTE-2/bower_components/select2/docs/examples.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/select2/docs/examples.html)<br>[public/AdminLTE-2/bower_components/select2/docs/index.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/select2/docs/index.html) |
| config | 20 | [package.json](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/package.json)<br>[public/AdminLTE-2/package.json](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/package.json)<br>[public/AdminLTE-2/bower_components/select2/package.json](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/select2/package.json)<br>[public/AdminLTE-2/bower_components/seiyria-bootstrap-slider/package.json](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/seiyria-bootstrap-slider/package.json)<br>[public/AdminLTE-2/bower_components/morris.js/package.json](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/morris.js/package.json)<br>[public/AdminLTE-2/bower_components/jquery-ui/package.json](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/jquery-ui/package.json)<br>[public/AdminLTE-2/bower_components/jquery-sparkline/Makefile](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/jquery-sparkline/Makefile)<br>[public/AdminLTE-2/bower_components/jquery-slimscroll/package.json](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/jquery-slimscroll/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 166 | [tests/CreatesApplication.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/CreatesApplication.php)<br>[tests/TestCase.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/TestCase.php)<br>[tests/Unit/ExampleTest.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/Unit/ExampleTest.php)<br>[tests/Feature/ApiTokenPermissionsTest.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/Feature/ApiTokenPermissionsTest.php)<br>[tests/Feature/AuthenticationTest.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/Feature/AuthenticationTest.php)<br>[tests/Feature/BrowserSessionsTest.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/Feature/BrowserSessionsTest.php) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 4 | [public/AdminLTE-2/pages/charts/chartjs.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/pages/charts/chartjs.html)<br>[public/AdminLTE-2/pages/charts/flot.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/pages/charts/flot.html)<br>[public/AdminLTE-2/pages/charts/inline.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/pages/charts/inline.html)<br>[public/AdminLTE-2/pages/charts/morris.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/pages/charts/morris.html) |
| Security / policy | 13 | [resources/views/policy.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/policy.blade.php)<br>[resources/views/layouts/auth.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/layouts/auth.blade.php)<br>[resources/views/auth/confirm-password.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/auth/confirm-password.blade.php)<br>[resources/views/auth/forgot-password.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/auth/forgot-password.blade.php)<br>[resources/views/auth/login.blade copy.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/auth/login.blade copy.php)<br>[resources/views/auth/login.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/auth/login.blade.php) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `resources/views/supplier/index.blade.php`, `resources/views/produk/index.blade.php`, `resources/views/penjualan_detail/index.blade.php`.
2. Trace execution through entrypoints: `server.php`, `public/AdminLTE-2/bower_components/bootstrap-daterangepicker/example/browserify/main.js`, `public/AdminLTE-2/bower_components/bootstrap-daterangepicker/example/amd/main.js`.
3. Map agent/tool runtime through: `public/AdminLTE-2/bower_components/moment/src/lib/utils/hooks.js`.
4. Inspect retrieval/memory/indexing through: `resources/views/supplier/index.blade.php`, `resources/views/produk/index.blade.php`, `resources/views/penjualan_detail/index.blade.php`.
5. Verify behavior through test/eval files: `tests/CreatesApplication.php`, `tests/TestCase.php`, `tests/Unit/ExampleTest.php`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 🎶 Generate multilingual AI music with lyrics in English, Chinese, Japanese, Korean, and Spanish using ComfyUI's HeartMu. 핵심 구조 신호는 HTML, package.json, README.md, tests, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
