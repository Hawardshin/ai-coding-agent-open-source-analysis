# Samsung/lwnode Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Lightweight Node.js is a memory efficient Node.js implementation for consumer products such as mobile, smart watch, and TV

## 요약

- 조사 단위: `sources/Samsung__lwnode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 15,000 files, 781 directories, depth score 117, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=src/api/utils/sf-vector.h, modules/packages/gmain-loop/index.js, modules/packages/device-api/index.js이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/lwnode |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | C++ |
| Stars | 33 |
| Forks | 11 |
| License | NOASSERTION |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Samsung__lwnode](../../../../sources/Samsung__lwnode) |
| Existing report | [reports/korea-trending/repositories/Samsung__lwnode.md](../../../korea-trending/repositories/Samsung__lwnode.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 15000 / 781 |
| Max observed depth | 12 |
| Top directories | .github, deps, docs, include, modules, packaging, sample, src, test, tools |
| Top extensions | .js: 10367, .txt: 862, .cc: 585, .h: 404, .out: 403, .py: 378, .mjs: 351, (none): 240, .html: 202, .c: 152, .json: 106, .headers: 105 |
| Source patterns | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
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


## How It Runs

_No command surface extracted from root manifests._


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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [deps/node/test/fixtures/require-bin/bin/req.js](../../../../sources/Samsung__lwnode/deps/node/test/fixtures/require-bin/bin/req.js) |
| agentRuntime | 833 | [tools/build-modules.sh](../../../../sources/Samsung__lwnode/tools/build-modules.sh)<br>[tools/check_tidy.py](../../../../sources/Samsung__lwnode/tools/check_tidy.py)<br>[tools/lint-filters.txt](../../../../sources/Samsung__lwnode/tools/lint-filters.txt)<br>[tools/release_filter.txt](../../../../sources/Samsung__lwnode/tools/release_filter.txt)<br>[tools/release.sh](../../../../sources/Samsung__lwnode/tools/release.sh)<br>[tools/test.sh](../../../../sources/Samsung__lwnode/tools/test.sh)<br>[tools/patch/01-escargot-gcc13-build-error.patch](../../../../sources/Samsung__lwnode/tools/patch/01-escargot-gcc13-build-error.patch)<br>[test/jstester/api/runner.py](../../../../sources/Samsung__lwnode/test/jstester/api/runner.py) |
| mcp | 0 | not obvious |
| retrieval | 207 | [src/api/utils/sf-vector.h](../../../../sources/Samsung__lwnode/src/api/utils/sf-vector.h)<br>[modules/packages/gmain-loop/index.js](../../../../sources/Samsung__lwnode/modules/packages/gmain-loop/index.js)<br>[modules/packages/device-api/index.js](../../../../sources/Samsung__lwnode/modules/packages/device-api/index.js)<br>[modules/apps/template/lib/index.js](../../../../sources/Samsung__lwnode/modules/apps/template/lib/index.js)<br>[deps/node/test/sequential/test-http2-max-session-memory.js](../../../../sources/Samsung__lwnode/deps/node/test/sequential/test-http2-max-session-memory.js)<br>[deps/node/test/sequential/test-net-bytes-per-incoming-chunk-overhead.js](../../../../sources/Samsung__lwnode/deps/node/test/sequential/test-net-bytes-per-incoming-chunk-overhead.js)<br>[deps/node/test/parallel/test-dns-memory-error.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-dns-memory-error.js)<br>[deps/node/test/parallel/test-gc-tls-external-memory.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-gc-tls-external-memory.js) |
| spec | 12 | [docs/Spec.md](../../../../sources/Samsung__lwnode/docs/Spec.md)<br>[deps/node/tools/gyp/requirements_dev.txt](../../../../sources/Samsung__lwnode/deps/node/tools/gyp/requirements_dev.txt)<br>[deps/node/test/fixtures/wpt/html/webappapis/timers/evil-spec-example.html](../../../../sources/Samsung__lwnode/deps/node/test/fixtures/wpt/html/webappapis/timers/evil-spec-example.html)<br>[deps/node/deps/v8/tools/wasm/update-wasm-spec-tests.sh](../../../../sources/Samsung__lwnode/deps/node/deps/v8/tools/wasm/update-wasm-spec-tests.sh)<br>[deps/node/deps/v8/tools/mb/docs/design_spec.md](../../../../sources/Samsung__lwnode/deps/node/deps/v8/tools/mb/docs/design_spec.md)<br>[deps/node/deps/v8/test/wasm-spec-tests/BUILD.gn](../../../../sources/Samsung__lwnode/deps/node/deps/v8/test/wasm-spec-tests/BUILD.gn)<br>[deps/node/deps/v8/test/wasm-spec-tests/OWNERS](../../../../sources/Samsung__lwnode/deps/node/deps/v8/test/wasm-spec-tests/OWNERS)<br>[deps/node/deps/v8/test/wasm-spec-tests/testcfg.py](../../../../sources/Samsung__lwnode/deps/node/deps/v8/test/wasm-spec-tests/testcfg.py) |
| eval | 13216 | [tools/test.sh](../../../../sources/Samsung__lwnode/tools/test.sh)<br>[test/cctest_v8.gyp](../../../../sources/Samsung__lwnode/test/cctest_v8.gyp)<br>[test/cctest.gyp](../../../../sources/Samsung__lwnode/test/cctest.gyp)<br>[test/jstester/jstester.py](../../../../sources/Samsung__lwnode/test/jstester/jstester.py)<br>[test/jstester/sequential_list.txt](../../../../sources/Samsung__lwnode/test/jstester/sequential_list.txt)<br>[test/jstester/api/__init__.py](../../../../sources/Samsung__lwnode/test/jstester/api/__init__.py)<br>[test/jstester/api/runner.py](../../../../sources/Samsung__lwnode/test/jstester/api/runner.py)<br>[test/cctest/cctest.cc](../../../../sources/Samsung__lwnode/test/cctest/cctest.cc) |
| security | 38 | [deps/node/tools/inspector_protocol/jinja2/sandbox.py](../../../../sources/Samsung__lwnode/deps/node/tools/inspector_protocol/jinja2/sandbox.py)<br>[deps/node/test/pummel/test-policy-integrity.js](../../../../sources/Samsung__lwnode/deps/node/test/pummel/test-policy-integrity.js)<br>[deps/node/test/parallel/test-http-url.parse-auth-with-header-in-request.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-http-url.parse-auth-with-header-in-request.js)<br>[deps/node/test/parallel/test-http-url.parse-auth.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-http-url.parse-auth.js)<br>[deps/node/test/parallel/test-macos-app-sandbox.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-macos-app-sandbox.js)<br>[deps/node/test/parallel/test-policy-dependencies.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-policy-dependencies.js)<br>[deps/node/test/parallel/test-policy-dependency-conditions.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-policy-dependency-conditions.js)<br>[deps/node/test/parallel/test-policy-integrity-flag.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-policy-integrity-flag.js) |
| ci | 2 | [deps/node/tools/gyp/.github/workflows/nodejs-windows.yml](../../../../sources/Samsung__lwnode/deps/node/tools/gyp/.github/workflows/nodejs-windows.yml)<br>[deps/node/tools/gyp/.github/workflows/Python_tests.yml](../../../../sources/Samsung__lwnode/deps/node/tools/gyp/.github/workflows/Python_tests.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 94 | [README.md](../../../../sources/Samsung__lwnode/README.md)<br>[modules/packages/gmain-loop/README.md](../../../../sources/Samsung__lwnode/modules/packages/gmain-loop/README.md)<br>[modules/packages/device-api/README.md](../../../../sources/Samsung__lwnode/modules/packages/device-api/README.md)<br>[modules/apps/template/README.md](../../../../sources/Samsung__lwnode/modules/apps/template/README.md)<br>[include/cppgc/README.md](../../../../sources/Samsung__lwnode/include/cppgc/README.md)<br>[docs/App-db-service.md](../../../../sources/Samsung__lwnode/docs/App-db-service.md)<br>[docs/App-service.md](../../../../sources/Samsung__lwnode/docs/App-service.md)<br>[docs/app-sqlite3.md](../../../../sources/Samsung__lwnode/docs/app-sqlite3.md) |
| config | 40 | [modules/apps/template/package.json](../../../../sources/Samsung__lwnode/modules/apps/template/package.json)<br>[deps/node/Makefile](../../../../sources/Samsung__lwnode/deps/node/Makefile)<br>[deps/node/tools/gyp/requirements_dev.txt](../../../../sources/Samsung__lwnode/deps/node/tools/gyp/requirements_dev.txt)<br>[deps/node/tools/doc/package.json](../../../../sources/Samsung__lwnode/deps/node/tools/doc/package.json)<br>[deps/node/tools/clang-format/package.json](../../../../sources/Samsung__lwnode/deps/node/tools/clang-format/package.json)<br>[deps/node/test/wasi/Makefile](../../../../sources/Samsung__lwnode/deps/node/test/wasi/Makefile)<br>[deps/node/test/fixtures/wpt/resources/webidl2/package.json](../../../../sources/Samsung__lwnode/deps/node/test/fixtures/wpt/resources/webidl2/package.json)<br>[deps/node/test/fixtures/self_ref_module/package.json](../../../../sources/Samsung__lwnode/deps/node/test/fixtures/self_ref_module/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 13216 | [tools/test.sh](../../../../sources/Samsung__lwnode/tools/test.sh)<br>[test/cctest_v8.gyp](../../../../sources/Samsung__lwnode/test/cctest_v8.gyp)<br>[test/cctest.gyp](../../../../sources/Samsung__lwnode/test/cctest.gyp)<br>[test/jstester/jstester.py](../../../../sources/Samsung__lwnode/test/jstester/jstester.py)<br>[test/jstester/sequential_list.txt](../../../../sources/Samsung__lwnode/test/jstester/sequential_list.txt)<br>[test/jstester/api/__init__.py](../../../../sources/Samsung__lwnode/test/jstester/api/__init__.py) |
| CI workflows | 2 | [deps/node/tools/gyp/.github/workflows/nodejs-windows.yml](../../../../sources/Samsung__lwnode/deps/node/tools/gyp/.github/workflows/nodejs-windows.yml)<br>[deps/node/tools/gyp/.github/workflows/Python_tests.yml](../../../../sources/Samsung__lwnode/deps/node/tools/gyp/.github/workflows/Python_tests.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 38 | [deps/node/tools/inspector_protocol/jinja2/sandbox.py](../../../../sources/Samsung__lwnode/deps/node/tools/inspector_protocol/jinja2/sandbox.py)<br>[deps/node/test/pummel/test-policy-integrity.js](../../../../sources/Samsung__lwnode/deps/node/test/pummel/test-policy-integrity.js)<br>[deps/node/test/parallel/test-http-url.parse-auth-with-header-in-request.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-http-url.parse-auth-with-header-in-request.js)<br>[deps/node/test/parallel/test-http-url.parse-auth.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-http-url.parse-auth.js)<br>[deps/node/test/parallel/test-macos-app-sandbox.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-macos-app-sandbox.js)<br>[deps/node/test/parallel/test-policy-dependencies.js](../../../../sources/Samsung__lwnode/deps/node/test/parallel/test-policy-dependencies.js) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | large repository scan truncated at 15000 files |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `src/api/utils/sf-vector.h`, `modules/packages/gmain-loop/index.js`, `modules/packages/device-api/index.js`.
2. Trace execution through entrypoints: `deps/node/test/fixtures/require-bin/bin/req.js`.
3. Map agent/tool runtime through: `tools/build-modules.sh`, `tools/check_tidy.py`, `tools/lint-filters.txt`.
4. Inspect retrieval/memory/indexing through: `src/api/utils/sf-vector.h`, `modules/packages/gmain-loop/index.js`, `modules/packages/device-api/index.js`.
5. Verify behavior through test/eval files: `tools/test.sh`, `test/cctest_v8.gyp`, `test/cctest.gyp`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Lightweight Node.js is a memory efficient Node.js implementation for consumer products such as mobile, smart watch, and . 핵심 구조 신호는 C++, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
