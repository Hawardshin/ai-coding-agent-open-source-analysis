# Samsung/walrus 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

WebAssembly Lightweight RUntime

## 요약

- 조사 단위: `sources/Samsung__walrus` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 548 files, 49 directories, depth score 84, key references 5개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=third_party/wabt/Makefile, test/wasmBenchmarker/requirements.txt이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Samsung/walrus |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | korea |
| Language | WebAssembly |
| Stars | 74 |
| Forks | 18 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__walrus](../../../../sources/Samsung__walrus) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__walrus.md](../../../korea-trending/repositories/Samsung__walrus.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 548 / 49 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .ahub, .github, src, test, third_party, tools |
| 상위 확장자 | .wast: 322, .h: 100, .cpp: 35, .c: 28, .cc: 27, (none): 11, .txt: 10, .py: 4, .def: 3, .md: 3, .blacklist: 1, .in: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 3 |
| .github | ci surface | 1 |
| test | validation surface | 1 |
| third_party | top-level component | 1 |
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
| config | [third_party/wabt/Makefile](../../../../sources/Samsung__walrus/third_party/wabt/Makefile) | config signal |
| config | [test/wasmBenchmarker/requirements.txt](../../../../sources/Samsung__walrus/test/wasmBenchmarker/requirements.txt) | config signal |
| ci | [.github/workflows/actions.yml](../../../../sources/Samsung__walrus/.github/workflows/actions.yml) | ci signal |
| eval | [tools/run-tests.py](../../../../sources/Samsung__walrus/tools/run-tests.py) | eval support |
| eval | [third_party/wabt/include/wabt/tracing.h](../../../../sources/Samsung__walrus/third_party/wabt/include/wabt/tracing.h) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 28 | [tools/check_tidy.py](../../../../sources/Samsung__walrus/tools/check_tidy.py)<br>[tools/jit_exclude_list.txt](../../../../sources/Samsung__walrus/tools/jit_exclude_list.txt)<br>[tools/run-tests.py](../../../../sources/Samsung__walrus/tools/run-tests.py)<br>[test/web-assembly3/multi-memory/memory_copy0.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/memory_copy0.wast)<br>[test/web-assembly3/multi-memory/memory_copy1.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/memory_copy1.wast)<br>[test/web-assembly3/multi-memory/memory_fill0.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/memory_fill0.wast)<br>[test/web-assembly3/multi-memory/memory_init0.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/memory_init0.wast)<br>[test/web-assembly3/multi-memory/memory_size0.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/memory_size0.wast) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 55 | [test/web-assembly3/multi-memory/address0.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/address0.wast)<br>[test/web-assembly3/multi-memory/address1.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/address1.wast)<br>[test/web-assembly3/multi-memory/align0.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/align0.wast)<br>[test/web-assembly3/multi-memory/binary0.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/binary0.wast)<br>[test/web-assembly3/multi-memory/data_drop0.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/data_drop0.wast)<br>[test/web-assembly3/multi-memory/data0.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/data0.wast)<br>[test/web-assembly3/multi-memory/data1.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/data1.wast)<br>[test/web-assembly3/multi-memory/exports0.wast](../../../../sources/Samsung__walrus/test/web-assembly3/multi-memory/exports0.wast) |
| spec | 151 | [test/wasmBenchmarker/requirements.txt](../../../../sources/Samsung__walrus/test/wasmBenchmarker/requirements.txt)<br>[test/wasm-spec/LICENSE](../../../../sources/Samsung__walrus/test/wasm-spec/LICENSE)<br>[test/wasm-spec/README.md](../../../../sources/Samsung__walrus/test/wasm-spec/README.md)<br>[test/wasm-spec/core/address.wast](../../../../sources/Samsung__walrus/test/wasm-spec/core/address.wast)<br>[test/wasm-spec/core/align.wast](../../../../sources/Samsung__walrus/test/wasm-spec/core/align.wast)<br>[test/wasm-spec/core/binary-leb128.wast](../../../../sources/Samsung__walrus/test/wasm-spec/core/binary-leb128.wast)<br>[test/wasm-spec/core/binary.wast](../../../../sources/Samsung__walrus/test/wasm-spec/core/binary.wast)<br>[test/wasm-spec/core/block.wast](../../../../sources/Samsung__walrus/test/wasm-spec/core/block.wast) |
| eval | 365 | [tools/run-tests.py](../../../../sources/Samsung__walrus/tools/run-tests.py)<br>[third_party/wabt/include/wabt/tracing.h](../../../../sources/Samsung__walrus/third_party/wabt/include/wabt/tracing.h)<br>[test/web-assembly3/relaxed-simd/i16x8_relaxed_q15mulr_s.wast](../../../../sources/Samsung__walrus/test/web-assembly3/relaxed-simd/i16x8_relaxed_q15mulr_s.wast)<br>[test/web-assembly3/relaxed-simd/i32x4_relaxed_trunc.wast](../../../../sources/Samsung__walrus/test/web-assembly3/relaxed-simd/i32x4_relaxed_trunc.wast)<br>[test/web-assembly3/relaxed-simd/i8x16_relaxed_swizzle.wast](../../../../sources/Samsung__walrus/test/web-assembly3/relaxed-simd/i8x16_relaxed_swizzle.wast)<br>[test/web-assembly3/relaxed-simd/relaxed_dot_product.wast](../../../../sources/Samsung__walrus/test/web-assembly3/relaxed-simd/relaxed_dot_product.wast)<br>[test/web-assembly3/relaxed-simd/relaxed_laneselect.wast](../../../../sources/Samsung__walrus/test/web-assembly3/relaxed-simd/relaxed_laneselect.wast)<br>[test/web-assembly3/relaxed-simd/relaxed_madd_nmadd.wast](../../../../sources/Samsung__walrus/test/web-assembly3/relaxed-simd/relaxed_madd_nmadd.wast) |
| security | 1 | [test/wasm-spec/core/skip-stack-guard-page.wast](../../../../sources/Samsung__walrus/test/wasm-spec/core/skip-stack-guard-page.wast) |
| ci | 1 | [.github/workflows/actions.yml](../../../../sources/Samsung__walrus/.github/workflows/actions.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 2 | [README.md](../../../../sources/Samsung__walrus/README.md)<br>[test/wasm-spec/README.md](../../../../sources/Samsung__walrus/test/wasm-spec/README.md) |
| config | 2 | [third_party/wabt/Makefile](../../../../sources/Samsung__walrus/third_party/wabt/Makefile)<br>[test/wasmBenchmarker/requirements.txt](../../../../sources/Samsung__walrus/test/wasmBenchmarker/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 365 | [tools/run-tests.py](../../../../sources/Samsung__walrus/tools/run-tests.py)<br>[third_party/wabt/include/wabt/tracing.h](../../../../sources/Samsung__walrus/third_party/wabt/include/wabt/tracing.h)<br>[test/web-assembly3/relaxed-simd/i16x8_relaxed_q15mulr_s.wast](../../../../sources/Samsung__walrus/test/web-assembly3/relaxed-simd/i16x8_relaxed_q15mulr_s.wast)<br>[test/web-assembly3/relaxed-simd/i32x4_relaxed_trunc.wast](../../../../sources/Samsung__walrus/test/web-assembly3/relaxed-simd/i32x4_relaxed_trunc.wast)<br>[test/web-assembly3/relaxed-simd/i8x16_relaxed_swizzle.wast](../../../../sources/Samsung__walrus/test/web-assembly3/relaxed-simd/i8x16_relaxed_swizzle.wast)<br>[test/web-assembly3/relaxed-simd/relaxed_dot_product.wast](../../../../sources/Samsung__walrus/test/web-assembly3/relaxed-simd/relaxed_dot_product.wast) |
| CI workflow | 1 | [.github/workflows/actions.yml](../../../../sources/Samsung__walrus/.github/workflows/actions.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [test/wasm-spec/core/skip-stack-guard-page.wast](../../../../sources/Samsung__walrus/test/wasm-spec/core/skip-stack-guard-page.wast) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `third_party/wabt/Makefile`, `test/wasmBenchmarker/requirements.txt`, `.github/workflows/actions.yml`.
2. agent/tool runtime 매핑: `tools/check_tidy.py`, `tools/jit_exclude_list.txt`, `tools/run-tests.py`.
3. retrieval/memory/indexing 확인: `test/web-assembly3/multi-memory/address0.wast`, `test/web-assembly3/multi-memory/address1.wast`, `test/web-assembly3/multi-memory/align0.wast`.
4. test/eval 파일로 동작 검증: `tools/run-tests.py`, `third_party/wabt/include/wabt/tracing.h`, `test/web-assembly3/relaxed-simd/i16x8_relaxed_q15mulr_s.wast`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 WebAssembly Lightweight RUntime. 핵심 구조 신호는 WebAssembly, README.md, LICENSE, tests, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
