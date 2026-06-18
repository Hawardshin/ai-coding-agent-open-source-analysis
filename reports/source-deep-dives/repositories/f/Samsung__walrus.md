# Samsung/walrus Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

WebAssembly Lightweight RUntime

## 요약

- 조사 단위: `sources/Samsung__walrus` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 548 files, 49 directories, depth score 90, key references 5개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=third_party/wabt/Makefile, test/wasmBenchmarker/requirements.txt이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/walrus |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | korea |
| Language | WebAssembly |
| Stars | 74 |
| Forks | 18 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Samsung__walrus](../../../../sources/Samsung__walrus) |
| Existing report | [reports/korea-trending/repositories/Samsung__walrus.md](../../../korea-trending/repositories/Samsung__walrus.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 548 / 49 |
| Max observed depth | 6 |
| Top directories | .ahub, .github, src, test, third_party, tools |
| Top extensions | .wast: 322, .h: 100, .cpp: 35, .c: 28, .cc: 27, (none): 11, .txt: 10, .py: 4, .def: 3, .md: 3, .blacklist: 1, .in: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 3 |
| .github | ci surface | 1 |
| test | validation surface | 1 |
| third_party | top-level component | 1 |
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
| config | [third_party/wabt/Makefile](../../../../sources/Samsung__walrus/third_party/wabt/Makefile) | config signal |
| config | [test/wasmBenchmarker/requirements.txt](../../../../sources/Samsung__walrus/test/wasmBenchmarker/requirements.txt) | config signal |
| ci | [.github/workflows/actions.yml](../../../../sources/Samsung__walrus/.github/workflows/actions.yml) | ci signal |
| eval | [tools/run-tests.py](../../../../sources/Samsung__walrus/tools/run-tests.py) | eval support |
| eval | [third_party/wabt/include/wabt/tracing.h](../../../../sources/Samsung__walrus/third_party/wabt/include/wabt/tracing.h) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 28 | [tools/check_tidy.py](../../../../sources/Samsung__walrus/tools/check_tidy.py)<br>[tools/jit_exclude_list.txt](../../../../sources/Samsung__walrus/tools/jit_exclude_list.txt)<br>[tools/run-tests.py](../../../../sources/Samsung__walrus/tools/run-tests.py)<br>[test/web-assembly3/multi-memory/memory_copy0.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/memory_copy0.wast)<br>[test/web-assembly3/multi-memory/memory_copy1.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/memory_copy1.wast)<br>[test/web-assembly3/multi-memory/memory_fill0.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/memory_fill0.wast)<br>[test/web-assembly3/multi-memory/memory_init0.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/memory_init0.wast)<br>[test/web-assembly3/multi-memory/memory_size0.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/memory_size0.wast) |
| mcp | 0 | not obvious |
| retrieval | 55 | [test/web-assembly3/multi-memory/address0.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/address0.wast)<br>[test/web-assembly3/multi-memory/address1.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/address1.wast)<br>[test/web-assembly3/multi-memory/align0.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/align0.wast)<br>[test/web-assembly3/multi-memory/binary0.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/binary0.wast)<br>[test/web-assembly3/multi-memory/data_drop0.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/data_drop0.wast)<br>[test/web-assembly3/multi-memory/data0.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/data0.wast)<br>[test/web-assembly3/multi-memory/data1.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/data1.wast)<br>[test/web-assembly3/multi-memory/exports0.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/exports0.wast) |
| spec | 151 | [test/wasmBenchmarker/requirements.txt](../../../../sources/Samsung__walrus/test/wasmBenchmarker/requirements.txt)<br>[test/wasm-spec/LICENSE](../../../../sources/Samsung__walrus/test/wasm-spec/LICENSE)<br>[test/wasm-spec/README.md](../../../../sources/Samsung__walrus/test/wasm-spec/README.md)<br>[test/wasm-spec/core/address.wast](../../../../sources/Samsung__walrus/test/wasm-spec/core/address.wast)<br>[test/wasm-spec/core/align.wast](../../../../sources/Samsung__walrus/test/wasm-spec/core/align.wast)<br>[test/wasm-spec/core/binary-leb128.wast](../../../../sources/Samsung__walrus/test/wasm-spec/core/binary-leb128.wast)<br>[test/wasm-spec/core/binary.wast](../../../../sources/Samsung__walrus/test/wasm-spec/core/binary.wast)<br>[test/wasm-spec/core/block.wast](../../../../sources/Samsung__walrus/test/wasm-spec/core/block.wast) |
| eval | 365 | [tools/run-tests.py](../../../../sources/Samsung__walrus/tools/run-tests.py)<br>[third_party/wabt/include/wabt/tracing.h](../../../../sources/Samsung__walrus/third_party/wabt/include/wabt/tracing.h)<br>[test/web-assembly3/relaxed-simd/i16x8_relaxed_q15mulr_s.wast](../../../../sources/Samsung__walrus/test/web-assembly3/relaxed-simd/i16x8_relaxed_q15mulr_s.wast)<br>[test/web-assembly3/relaxed-simd/i32x4_relaxed_trunc.wast](../../../../sources/Samsung__walrus/test/web-assembly3/relaxed-simd/i32x4_relaxed_trunc.wast)<br>[test/web-assembly3/relaxed-simd/i8x16_relaxed_swizzle.wast](../../../../sources/Samsung__walrus/test/web-assembly3/relaxed-simd/i8x16_relaxed_swizzle.wast)<br>[test/web-assembly3/relaxed-simd/relaxed_dot_product.wast](../../../../sources/Samsung__walrus/test/web-assembly3/relaxed-simd/relaxed_dot_product.wast)<br>[test/web-assembly3/relaxed-simd/relaxed_laneselect.wast](../../../../sources/Samsung__walrus/test/web-assembly3/relaxed-simd/relaxed_laneselect.wast)<br>[test/web-assembly3/relaxed-simd/relaxed_madd_nmadd.wast](../../../../sources/Samsung__walrus/test/web-assembly3/relaxed-simd/relaxed_madd_nmadd.wast) |
| security | 1 | [test/wasm-spec/core/skip-stack-guard-page.wast](../../../../sources/Samsung__walrus/test/wasm-spec/core/skip-stack-guard-page.wast) |
| ci | 1 | [.github/workflows/actions.yml](../../../../sources/Samsung__walrus/.github/workflows/actions.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/Samsung__walrus/README.md)<br>[test/wasm-spec/README.md](../../../../sources/Samsung__walrus/test/wasm-spec/README.md) |
| config | 2 | [third_party/wabt/Makefile](../../../../sources/Samsung__walrus/third_party/wabt/Makefile)<br>[test/wasmBenchmarker/requirements.txt](../../../../sources/Samsung__walrus/test/wasmBenchmarker/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 365 | [tools/run-tests.py](../../../../sources/Samsung__walrus/tools/run-tests.py)<br>[third_party/wabt/include/wabt/tracing.h](../../../../sources/Samsung__walrus/third_party/wabt/include/wabt/tracing.h)<br>[test/web-assembly3/relaxed-simd/i16x8_relaxed_q15mulr_s.wast](../../../../sources/Samsung__walrus/test/web-assembly3/relaxed-simd/i16x8_relaxed_q15mulr_s.wast)<br>[test/web-assembly3/relaxed-simd/i32x4_relaxed_trunc.wast](../../../../sources/Samsung__walrus/test/web-assembly3/relaxed-simd/i32x4_relaxed_trunc.wast)<br>[test/web-assembly3/relaxed-simd/i8x16_relaxed_swizzle.wast](../../../../sources/Samsung__walrus/test/web-assembly3/relaxed-simd/i8x16_relaxed_swizzle.wast)<br>[test/web-assembly3/relaxed-simd/relaxed_dot_product.wast](../../../../sources/Samsung__walrus/test/web-assembly3/relaxed-simd/relaxed_dot_product.wast) |
| CI workflows | 1 | [.github/workflows/actions.yml](../../../../sources/Samsung__walrus/.github/workflows/actions.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [test/wasm-spec/core/skip-stack-guard-page.wast](../../../../sources/Samsung__walrus/test/wasm-spec/core/skip-stack-guard-page.wast) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `third_party/wabt/Makefile`, `test/wasmBenchmarker/requirements.txt`, `.github/workflows/actions.yml`.
2. Map agent/tool runtime through: `tools/check_tidy.py`, `tools/jit_exclude_list.txt`, `tools/run-tests.py`.
3. Inspect retrieval/memory/indexing through: `test/web-assembly3/multi-memory/address0.wast`, `test/web-assembly3/multi-memory/address1.wast`, `test/web-assembly3/multi-memory/align0.wast`.
4. Verify behavior through test/eval files: `tools/run-tests.py`, `third_party/wabt/include/wabt/tracing.h`, `test/web-assembly3/relaxed-simd/i16x8_relaxed_q15mulr_s.wast`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 WebAssembly Lightweight RUntime. 핵심 구조 신호는 WebAssembly, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
