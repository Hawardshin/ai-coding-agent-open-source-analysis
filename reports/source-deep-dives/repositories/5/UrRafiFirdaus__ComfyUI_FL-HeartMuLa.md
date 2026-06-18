# UrRafiFirdaus/ComfyUI_FL-HeartMuLa 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

🎶 Generate multilingual AI music with lyrics in English, Chinese, Japanese, Korean, and Spanish using ComfyUI's HeartMuLa model.

## 요약

- 조사 단위: `sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 6,838 files, 683 directories, depth score 114, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=resources/views/supplier/index.blade.php, resources/views/produk/index.blade.php, resources/views/penjualan_detail/index.blade.php이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | UrRafiFirdaus/ComfyUI_FL-HeartMuLa |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | HTML |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa) |
| 기존 보고서 | [reports/korea-trending/repositories/UrRafiFirdaus__ComfyUI_FL-HeartMuLa.md](../../../korea-trending/repositories/UrRafiFirdaus__ComfyUI_FL-HeartMuLa.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 6838 / 683 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | app, bootstrap, config, database, public, resources, routes, storage, tests |
| 상위 확장자 | .js: 3477, .png: 1210, .svg: 743, .css: 424, .html: 201, .php: 176, .less: 119, .json: 111, .md: 76, (none): 76, .scss: 50, .gif: 39 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | npm run development |
| serve-dev | package.json | development | mix |
| serve-dev | package.json | watch | mix watch |
| serve-dev | package.json | watch-poll | mix watch -- --watch-options-poll=1000 |
| serve-dev | package.json | hot | mix watch --hot |
| utility | package.json | prod | npm run production |
| utility | package.json | production | mix --production |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [server.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/server.php)<br>[public/AdminLTE-2/bower_components/bootstrap-daterangepicker/example/browserify/main.js](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/bootstrap-daterangepicker/example/browserify/main.js)<br>[public/AdminLTE-2/bower_components/bootstrap-daterangepicker/example/amd/main.js](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/bootstrap-daterangepicker/example/amd/main.js) |
| agentRuntime | 1 | [public/AdminLTE-2/bower_components/moment/src/lib/utils/hooks.js](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/moment/src/lib/utils/hooks.js) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 73 | [resources/views/supplier/index.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/supplier/index.blade.php)<br>[resources/views/produk/index.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/produk/index.blade.php)<br>[resources/views/penjualan_detail/index.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/penjualan_detail/index.blade.php)<br>[resources/views/penjualan/index.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/penjualan/index.blade.php)<br>[resources/views/pengeluaran/index.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/pengeluaran/index.blade.php)<br>[resources/views/pembelian_detail/index.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/pembelian_detail/index.blade.php)<br>[resources/views/pembelian/index.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/pembelian/index.blade.php)<br>[resources/views/member/index.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/member/index.blade.php) |
| spec | 25 | [public/AdminLTE-2/bower_components/morris.js/spec/specs.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/morris.js/spec/specs.html)<br>[public/AdminLTE-2/bower_components/morris.js/spec/viz/examples.js](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/morris.js/spec/viz/examples.js)<br>[public/AdminLTE-2/bower_components/morris.js/spec/viz/run.sh](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/morris.js/spec/viz/run.sh)<br>[public/AdminLTE-2/bower_components/morris.js/spec/viz/visual_specs.js](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/morris.js/spec/viz/visual_specs.js)<br>[public/AdminLTE-2/bower_components/morris.js/spec/viz/exemplary/area0.png](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/morris.js/spec/viz/exemplary/area0.png)<br>[public/AdminLTE-2/bower_components/morris.js/spec/viz/exemplary/bar0.png](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/morris.js/spec/viz/exemplary/bar0.png)<br>[public/AdminLTE-2/bower_components/morris.js/spec/viz/exemplary/line0.png](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/morris.js/spec/viz/exemplary/line0.png)<br>[public/AdminLTE-2/bower_components/morris.js/spec/viz/exemplary/stacked_bar0.png](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/morris.js/spec/viz/exemplary/stacked_bar0.png) |
| eval | 166 | [tests/CreatesApplication.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/CreatesApplication.php)<br>[tests/TestCase.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/TestCase.php)<br>[tests/Unit/ExampleTest.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/Unit/ExampleTest.php)<br>[tests/Feature/ApiTokenPermissionsTest.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/Feature/ApiTokenPermissionsTest.php)<br>[tests/Feature/AuthenticationTest.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/Feature/AuthenticationTest.php)<br>[tests/Feature/BrowserSessionsTest.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/Feature/BrowserSessionsTest.php)<br>[tests/Feature/CreateApiTokenTest.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/Feature/CreateApiTokenTest.php)<br>[tests/Feature/DeleteAccountTest.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/Feature/DeleteAccountTest.php) |
| security | 13 | [resources/views/policy.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/policy.blade.php)<br>[resources/views/layouts/auth.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/layouts/auth.blade.php)<br>[resources/views/auth/confirm-password.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/auth/confirm-password.blade.php)<br>[resources/views/auth/forgot-password.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/auth/forgot-password.blade.php)<br>[resources/views/auth/login.blade copy.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/auth/login.blade copy.php)<br>[resources/views/auth/login.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/auth/login.blade.php)<br>[resources/views/auth/register.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/auth/register.blade.php)<br>[resources/views/auth/reset-password.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/auth/reset-password.blade.php) |
| ci | 0 | 명확하지 않음 |
| container | 4 | [public/AdminLTE-2/pages/charts/chartjs.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/pages/charts/chartjs.html)<br>[public/AdminLTE-2/pages/charts/flot.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/pages/charts/flot.html)<br>[public/AdminLTE-2/pages/charts/inline.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/pages/charts/inline.html)<br>[public/AdminLTE-2/pages/charts/morris.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/pages/charts/morris.html) |
| instruction | 0 | 명확하지 않음 |
| docs | 113 | [README.md](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/README.md)<br>[public/AdminLTE-2/README.md](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/README.md)<br>[public/AdminLTE-2/plugins/input-mask/phone-codes/readme.txt](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/plugins/input-mask/phone-codes/readme.txt)<br>[public/AdminLTE-2/bower_components/select2/README.md](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/select2/README.md)<br>[public/AdminLTE-2/bower_components/select2/docs/announcements-4.0.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/select2/docs/announcements-4.0.html)<br>[public/AdminLTE-2/bower_components/select2/docs/community.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/select2/docs/community.html)<br>[public/AdminLTE-2/bower_components/select2/docs/examples.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/select2/docs/examples.html)<br>[public/AdminLTE-2/bower_components/select2/docs/index.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/select2/docs/index.html) |
| config | 20 | [package.json](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/package.json)<br>[public/AdminLTE-2/package.json](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/package.json)<br>[public/AdminLTE-2/bower_components/select2/package.json](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/select2/package.json)<br>[public/AdminLTE-2/bower_components/seiyria-bootstrap-slider/package.json](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/seiyria-bootstrap-slider/package.json)<br>[public/AdminLTE-2/bower_components/morris.js/package.json](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/morris.js/package.json)<br>[public/AdminLTE-2/bower_components/jquery-ui/package.json](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/jquery-ui/package.json)<br>[public/AdminLTE-2/bower_components/jquery-sparkline/Makefile](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/jquery-sparkline/Makefile)<br>[public/AdminLTE-2/bower_components/jquery-slimscroll/package.json](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/bower_components/jquery-slimscroll/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 166 | [tests/CreatesApplication.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/CreatesApplication.php)<br>[tests/TestCase.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/TestCase.php)<br>[tests/Unit/ExampleTest.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/Unit/ExampleTest.php)<br>[tests/Feature/ApiTokenPermissionsTest.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/Feature/ApiTokenPermissionsTest.php)<br>[tests/Feature/AuthenticationTest.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/Feature/AuthenticationTest.php)<br>[tests/Feature/BrowserSessionsTest.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/tests/Feature/BrowserSessionsTest.php) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 4 | [public/AdminLTE-2/pages/charts/chartjs.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/pages/charts/chartjs.html)<br>[public/AdminLTE-2/pages/charts/flot.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/pages/charts/flot.html)<br>[public/AdminLTE-2/pages/charts/inline.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/pages/charts/inline.html)<br>[public/AdminLTE-2/pages/charts/morris.html](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/public/AdminLTE-2/pages/charts/morris.html) |
| 보안/정책 | 13 | [resources/views/policy.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/policy.blade.php)<br>[resources/views/layouts/auth.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/layouts/auth.blade.php)<br>[resources/views/auth/confirm-password.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/auth/confirm-password.blade.php)<br>[resources/views/auth/forgot-password.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/auth/forgot-password.blade.php)<br>[resources/views/auth/login.blade copy.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/auth/login.blade copy.php)<br>[resources/views/auth/login.blade.php](../../../../sources/UrRafiFirdaus__ComfyUI_FL-HeartMuLa/resources/views/auth/login.blade.php) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `resources/views/supplier/index.blade.php`, `resources/views/produk/index.blade.php`, `resources/views/penjualan_detail/index.blade.php`.
2. entrypoint를 따라 실행 흐름 확인: `server.php`, `public/AdminLTE-2/bower_components/bootstrap-daterangepicker/example/browserify/main.js`, `public/AdminLTE-2/bower_components/bootstrap-daterangepicker/example/amd/main.js`.
3. agent/tool runtime 매핑: `public/AdminLTE-2/bower_components/moment/src/lib/utils/hooks.js`.
4. retrieval/memory/indexing 확인: `resources/views/supplier/index.blade.php`, `resources/views/produk/index.blade.php`, `resources/views/penjualan_detail/index.blade.php`.
5. test/eval 파일로 동작 검증: `tests/CreatesApplication.php`, `tests/TestCase.php`, `tests/Unit/ExampleTest.php`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 🎶 Generate multilingual AI music with lyrics in English, Chinese, Japanese, Korean, and Spanish using ComfyUI's HeartMu. 핵심 구조 신호는 HTML, package.json, README.md, tests, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
