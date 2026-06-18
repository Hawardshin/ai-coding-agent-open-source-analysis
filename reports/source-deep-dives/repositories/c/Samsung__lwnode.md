# Samsung/lwnode 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Lightweight Node.js is a memory efficient Node.js implementation for consumer products such as mobile, smart watch, and TV

## 요약

- 조사 단위: `sources/Samsung__lwnode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 15,000 files, 781 directories, depth score 111, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=src/api/utils/sf-vector.h, modules/packages/gmain-loop/index.js, modules/packages/device-api/index.js이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Samsung/lwnode |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | C++ |
| Stars | 33 |
| Forks | 11 |
| License | NOASSERTION |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__lwnode](../../../../sources/Samsung__lwnode) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__lwnode.md](../../../korea-trending/repositories/Samsung__lwnode.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 15000 / 781 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .github, deps, docs, include, modules, packaging, sample, src, test, tools |
| 상위 확장자 | .js: 10367, .txt: 862, .cc: 585, .h: 404, .out: 403, .py: 378, .mjs: 351, (none): 240, .html: 202, .c: 152, .json: 106, .headers: 105 |
| 소스 패턴 | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 16 |
| src | source boundary | 4 |
| .github | ci surface | 1 |
| deps | top-level component | 1 |
| include | top-level component | 1 |
| modules | top-level component | 1 |
| packaging | top-level component | 1 |
| sample | top-level component | 1 |
| test | validation surface | 1 |
| tools | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


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
| retrieval | [src/api/utils/sf-vector.h](../../../../sources/Samsung__lwnode/src/api/utils/sf-vector.h) | retrieval signal |
| retrieval | [modules/packages/gmain-loop/index.js](../../../../sources/Samsung__lwnode/modules/packages/gmain-loop/index.js) | retrieval signal |
| retrieval | [modules/packages/device-api/index.js](../../../../sources/Samsung__lwnode/modules/packages/device-api/index.js) | retrieval signal |
| retrieval | [modules/apps/template/lib/index.js](../../../../sources/Samsung__lwnode/modules/apps/template/lib/index.js) | retrieval signal |
| entrypoints | [deps/node/test/fixtures/require-bin/bin/req.js](../../../../sources/Samsung__lwnode/deps/node/test/fixtures/require-bin/bin/req.js) | entrypoints signal |
| docs | [README.md](../../../../sources/Samsung__lwnode/README.md) | docs signal |
| docs | [modules/packages/gmain-loop/README.md](../../../../sources/Samsung__lwnode/modules/packages/gmain-loop/README.md) | docs signal |
| docs | [modules/packages/device-api/README.md](../../../../sources/Samsung__lwnode/modules/packages/device-api/README.md) | docs signal |
| docs | [modules/apps/template/README.md](../../../../sources/Samsung__lwnode/modules/apps/template/README.md) | docs signal |
| eval | [tools/test.sh](../../../../sources/Samsung__lwnode/tools/test.sh) | eval signal |
| eval | [test/cctest_v8.gyp](../../../../sources/Samsung__lwnode/test/cctest_v8.gyp) | eval signal |
| eval | [test/cctest.gyp](../../../../sources/Samsung__lwnode/test/cctest.gyp) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [deps/node/test/fixtures/require-bin/bin/req.js](../../../../sources/Samsung__lwnode/deps/node/test/fixtures/require-bin/bin/req.js) |
| agentRuntime | 833 | [tools/build-modules.sh](../../../../sources/Samsung__lwnode/tools/build-modules.sh)<br>[tools/check_tidy.py](../../../../sources/Samsung__lwnode/tools/check_tidy.py)<br>[tools/lint-filters.txt](../../../../sources/Samsung__lwnode/tools/lint-filters.txt)<br>[tools/release_filter.txt](../../../../sources/Samsung__lwnode/tools/release_filter.txt)<br>[tools/release.sh](../../../../sources/Samsung__lwnode/tools/release.sh)<br>[tools/test.sh](../../../../sources/Samsung__lwnode/tools/test.sh)<br>[tools/patch/01-escargot-gcc13-build-error.patch](../../../../sources/Samsung__lwnode/tools/patch/01-escargot-gcc13-build-error.patch)<br>[test/jstester/api/runner.py](../../../../sources/Samsung__lwnode/test/jstester/api/runner.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 207 | [src/api/utils/sf-vector.h](../../../../sources/Samsung__lwnode/src/api/utils/sf-vector.h)<br>[modules/packages/gmain-loop/index.js](../../../../sources/Samsung__lwnode/modules/packages/gmain-loop/index.js)<br>[modules/packages/device-api/index.js](../../../../sources/Samsung__lwnode/modules/packages/device-api/index.js)<br>[modules/apps/template/lib/index.js](../../../../sources/Samsung__lwnode/modules/apps/template/lib/index.js)<br>[deps/node/test/sequential/test-http2-max-session-memory.js](../../../../sources/Samsung__lwnode/deps/node/test/sequential/test-http2-max-session-memory.js)<br>[deps/node/test/sequential/test-net-bytes-per-incoming-chunk-overhead.js](../../../../sources/Samsung__lwnode/deps/node/test/sequential/test-net-bytes-per-incoming-chunk-overhead.js)<br>[deps/node/test/parallel/test-dns-memory-error.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-dns-memory-error.js)<br>[deps/node/test/parallel/test-gc-tls-external-memory.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-gc-tls-external-memory.js) |
| spec | 12 | [docs/Spec.md](../../../../sources/Samsung__lwnode/docs/Spec.md)<br>[deps/node/tools/gyp/requirements_dev.txt](../../../../sources/Samsung__lwnode/deps/node/tools/gyp/requirements_dev.txt)<br>[deps/node/test/fixtures/wpt/html/webappapis/timers/evil-spec-example.html](../../../../sources/Samsung__lwnode/deps/node/test/fixtures/wpt/html/webappapis/timers/evil-spec-example.html)<br>[deps/node/deps/v8/tools/wasm/update-wasm-spec-tests.sh](../../../../sources/Samsung__lwnode/deps/node/deps/v8/tools/wasm/update-wasm-spec-tests.sh)<br>[deps/node/deps/v8/tools/mb/docs/design_spec.md](../../../../sources/Samsung__lwnode/deps/node/deps/v8/tools/mb/docs/design_spec.md)<br>[deps/node/deps/v8/test/wasm-spec-tests/BUILD.gn](../../../../sources/Samsung__lwnode/deps/node/deps/v8/test/wasm-spec-tests/BUILD.gn)<br>[deps/node/deps/v8/test/wasm-spec-tests/OWNERS](../../../../sources/Samsung__lwnode/deps/node/deps/v8/test/wasm-spec-tests/OWNERS)<br>[deps/node/deps/v8/test/wasm-spec-tests/testcfg.py](../../../../sources/Samsung__lwnode/deps/node/deps/v8/test/wasm-spec-tests/testcfg.py) |
| eval | 13216 | [tools/test.sh](../../../../sources/Samsung__lwnode/tools/test.sh)<br>[test/cctest_v8.gyp](../../../../sources/Samsung__lwnode/test/cctest_v8.gyp)<br>[test/cctest.gyp](../../../../sources/Samsung__lwnode/test/cctest.gyp)<br>[test/jstester/jstester.py](../../../../sources/Samsung__lwnode/test/jstester/jstester.py)<br>[test/jstester/sequential_list.txt](../../../../sources/Samsung__lwnode/test/jstester/sequential_list.txt)<br>[test/jstester/api/__init__.py](../../../../sources/Samsung__lwnode/test/jstester/api/__init__.py)<br>[test/jstester/api/runner.py](../../../../sources/Samsung__lwnode/test/jstester/api/runner.py)<br>[test/cctest/cctest.cc](../../../../sources/Samsung__lwnode/test/cctest/cctest.cc) |
| security | 38 | [deps/node/tools/inspector_protocol/jinja2/sandbox.py](../../../../sources/Samsung__lwnode/deps/node/tools/inspector_protocol/jinja2/sandbox.py)<br>[deps/node/test/pummel/test-policy-integrity.js](../../../../sources/Samsung__lwnode/deps/node/test/pummel/test-policy-integrity.js)<br>[deps/node/test/parallel/test-http-url.parse-auth-with-header-in-request.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-http-url.parse-auth-with-header-in-request.js)<br>[deps/node/test/parallel/test-http-url.parse-auth.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-http-url.parse-auth.js)<br>[deps/node/test/parallel/test-macos-app-sandbox.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-macos-app-sandbox.js)<br>[deps/node/test/parallel/test-policy-dependencies.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-policy-dependencies.js)<br>[deps/node/test/parallel/test-policy-dependency-conditions.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-policy-dependency-conditions.js)<br>[deps/node/test/parallel/test-policy-integrity-flag.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-policy-integrity-flag.js) |
| ci | 2 | [deps/node/tools/gyp/.github/workflows/nodejs-windows.yml](../../../../sources/Samsung__lwnode/deps/node/tools/gyp/.github/workflows/nodejs-windows.yml)<br>[deps/node/tools/gyp/.github/workflows/Python_tests.yml](../../../../sources/Samsung__lwnode/deps/node/tools/gyp/.github/workflows/Python_tests.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 94 | [README.md](../../../../sources/Samsung__lwnode/README.md)<br>[modules/packages/gmain-loop/README.md](../../../../sources/Samsung__lwnode/modules/packages/gmain-loop/README.md)<br>[modules/packages/device-api/README.md](../../../../sources/Samsung__lwnode/modules/packages/device-api/README.md)<br>[modules/apps/template/README.md](../../../../sources/Samsung__lwnode/modules/apps/template/README.md)<br>[include/cppgc/README.md](../../../../sources/Samsung__lwnode/include/cppgc/README.md)<br>[docs/App-db-service.md](../../../../sources/Samsung__lwnode/docs/App-db-service.md)<br>[docs/App-service.md](../../../../sources/Samsung__lwnode/docs/App-service.md)<br>[docs/app-sqlite3.md](../../../../sources/Samsung__lwnode/docs/app-sqlite3.md) |
| config | 40 | [modules/apps/template/package.json](../../../../sources/Samsung__lwnode/modules/apps/template/package.json)<br>[deps/node/Makefile](../../../../sources/Samsung__lwnode/deps/node/Makefile)<br>[deps/node/tools/gyp/requirements_dev.txt](../../../../sources/Samsung__lwnode/deps/node/tools/gyp/requirements_dev.txt)<br>[deps/node/tools/doc/package.json](../../../../sources/Samsung__lwnode/deps/node/tools/doc/package.json)<br>[deps/node/tools/clang-format/package.json](../../../../sources/Samsung__lwnode/deps/node/tools/clang-format/package.json)<br>[deps/node/test/wasi/Makefile](../../../../sources/Samsung__lwnode/deps/node/test/wasi/Makefile)<br>[deps/node/test/fixtures/wpt/resources/webidl2/package.json](../../../../sources/Samsung__lwnode/deps/node/test/fixtures/wpt/resources/webidl2/package.json)<br>[deps/node/test/fixtures/self_ref_module/package.json](../../../../sources/Samsung__lwnode/deps/node/test/fixtures/self_ref_module/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 13216 | [tools/test.sh](../../../../sources/Samsung__lwnode/tools/test.sh)<br>[test/cctest_v8.gyp](../../../../sources/Samsung__lwnode/test/cctest_v8.gyp)<br>[test/cctest.gyp](../../../../sources/Samsung__lwnode/test/cctest.gyp)<br>[test/jstester/jstester.py](../../../../sources/Samsung__lwnode/test/jstester/jstester.py)<br>[test/jstester/sequential_list.txt](../../../../sources/Samsung__lwnode/test/jstester/sequential_list.txt)<br>[test/jstester/api/__init__.py](../../../../sources/Samsung__lwnode/test/jstester/api/__init__.py) |
| CI workflow | 2 | [deps/node/tools/gyp/.github/workflows/nodejs-windows.yml](../../../../sources/Samsung__lwnode/deps/node/tools/gyp/.github/workflows/nodejs-windows.yml)<br>[deps/node/tools/gyp/.github/workflows/Python_tests.yml](../../../../sources/Samsung__lwnode/deps/node/tools/gyp/.github/workflows/Python_tests.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 38 | [deps/node/tools/inspector_protocol/jinja2/sandbox.py](../../../../sources/Samsung__lwnode/deps/node/tools/inspector_protocol/jinja2/sandbox.py)<br>[deps/node/test/pummel/test-policy-integrity.js](../../../../sources/Samsung__lwnode/deps/node/test/pummel/test-policy-integrity.js)<br>[deps/node/test/parallel/test-http-url.parse-auth-with-header-in-request.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-http-url.parse-auth-with-header-in-request.js)<br>[deps/node/test/parallel/test-http-url.parse-auth.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-http-url.parse-auth.js)<br>[deps/node/test/parallel/test-macos-app-sandbox.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-macos-app-sandbox.js)<br>[deps/node/test/parallel/test-policy-dependencies.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-policy-dependencies.js) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 큰 레포라 15000개 파일에서 스캔이 잘림 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `src/api/utils/sf-vector.h`, `modules/packages/gmain-loop/index.js`, `modules/packages/device-api/index.js`.
2. entrypoint를 따라 실행 흐름 확인: `deps/node/test/fixtures/require-bin/bin/req.js`.
3. agent/tool runtime 매핑: `tools/build-modules.sh`, `tools/check_tidy.py`, `tools/lint-filters.txt`.
4. retrieval/memory/indexing 확인: `src/api/utils/sf-vector.h`, `modules/packages/gmain-loop/index.js`, `modules/packages/device-api/index.js`.
5. test/eval 파일로 동작 검증: `tools/test.sh`, `test/cctest_v8.gyp`, `test/cctest.gyp`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Lightweight Node.js is a memory efficient Node.js implementation for consumer products such as mobile, smart watch, and . 핵심 구조 신호는 C++, README.md, LICENSE, tests, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
