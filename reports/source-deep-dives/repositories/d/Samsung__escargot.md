# Samsung/escargot 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Escargot is a lightweight JavaScript engine designed specifically for resource-constrained environments.

## 요약

- 조사 단위: `sources/Samsung__escargot` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 857 files, 71 directories, depth score 101, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=test/bin/memps이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Samsung/escargot |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | C++ |
| Stars | 357 |
| Forks | 58 |
| License | LGPL-2.1 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__escargot](../../../../sources/Samsung__escargot) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__escargot.md](../../../korea-trending/repositories/Samsung__escargot.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 857 / 71 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .ahub, .github, docs, packaging, src, test, third_party, tools |
| 상위 확장자 | .h: 380, .cpp: 187, .js: 53, .xml: 41, .cmd: 39, .expected: 39, .txt: 25, .py: 23, (none): 19, .md: 12, .cc: 8, .yml: 6 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 5 |
| src | source boundary | 4 |
| .github | ci surface | 1 |
| packaging | top-level component | 1 |
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
| entrypoints | [test/bin/memps](../../../../sources/Samsung__escargot/test/bin/memps) | entrypoints signal |
| docs | [README.md](../../../../sources/Samsung__escargot/README.md) | docs signal |
| docs | [tools/code_generators/README](../../../../sources/Samsung__escargot/tools/code_generators/README) | docs signal |
| docs | [third_party/xsum/README.md](../../../../sources/Samsung__escargot/third_party/xsum/README.md) | docs signal |
| docs | [third_party/simdutf/README.md](../../../../sources/Samsung__escargot/third_party/simdutf/README.md) | docs signal |
| eval | [tools/run-tests.py](../../../../sources/Samsung__escargot/tools/run-tests.py) | eval signal |
| eval | [tools/test/wasm-js/exclude_list.txt](../../../../sources/Samsung__escargot/tools/test/wasm-js/exclude_list.txt) | eval signal |
| eval | [tools/test/v8/v8.execution.py](../../../../sources/Samsung__escargot/tools/test/v8/v8.execution.py) | eval signal |
| eval | [tools/test/v8/v8.mjsunit.js](../../../../sources/Samsung__escargot/tools/test/v8/v8.mjsunit.js) | eval signal |
| ci | [.github/workflows/analysis-actions.yml](../../../../sources/Samsung__escargot/.github/workflows/analysis-actions.yml) | ci support |
| ci | [.github/workflows/android-release.yml](../../../../sources/Samsung__escargot/.github/workflows/android-release.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [test/bin/memps](../../../../sources/Samsung__escargot/test/bin/memps) |
| agentRuntime | 229 | [tools/check_tidy.py](../../../../sources/Samsung__escargot/tools/check_tidy.py)<br>[tools/run-tests.py](../../../../sources/Samsung__escargot/tools/run-tests.py)<br>[tools/visualize_heap_usage.py](../../../../sources/Samsung__escargot/tools/visualize_heap_usage.py)<br>[tools/unicode_data/CaseFolding.txt](../../../../sources/Samsung__escargot/tools/unicode_data/CaseFolding.txt)<br>[tools/unicode_data/DerivedBinaryProperties.txt](../../../../sources/Samsung__escargot/tools/unicode_data/DerivedBinaryProperties.txt)<br>[tools/unicode_data/DerivedCoreProperties.txt](../../../../sources/Samsung__escargot/tools/unicode_data/DerivedCoreProperties.txt)<br>[tools/unicode_data/DerivedNormalizationProps.txt](../../../../sources/Samsung__escargot/tools/unicode_data/DerivedNormalizationProps.txt)<br>[tools/unicode_data/emoji-data.txt](../../../../sources/Samsung__escargot/tools/unicode_data/emoji-data.txt) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 3 | [third_party/yarr/Vector.h](../../../../sources/Samsung__escargot/third_party/yarr/Vector.h)<br>[third_party/robin_map/include/tsl/robin_vector.h](../../../../sources/Samsung__escargot/third_party/robin_map/include/tsl/robin_vector.h)<br>[src/util/Vector.h](../../../../sources/Samsung__escargot/src/util/Vector.h) |
| spec | 1 | [docs/Spec.md](../../../../sources/Samsung__escargot/docs/Spec.md) |
| eval | 199 | [tools/run-tests.py](../../../../sources/Samsung__escargot/tools/run-tests.py)<br>[tools/test/wasm-js/exclude_list.txt](../../../../sources/Samsung__escargot/tools/test/wasm-js/exclude_list.txt)<br>[tools/test/v8/v8.execution.py](../../../../sources/Samsung__escargot/tools/test/v8/v8.execution.py)<br>[tools/test/v8/v8.mjsunit.js](../../../../sources/Samsung__escargot/tools/test/v8/v8.mjsunit.js)<br>[tools/test/v8/v8.mjsunit.status](../../../../sources/Samsung__escargot/tools/test/v8/v8.mjsunit.status)<br>[tools/test/v8/v8.progress.py](../../../../sources/Samsung__escargot/tools/test/v8/v8.progress.py)<br>[tools/test/v8/v8.run-tests.py](../../../../sources/Samsung__escargot/tools/test/v8/v8.run-tests.py)<br>[tools/test/v8/v8.testsuite.py](../../../../sources/Samsung__escargot/tools/test/v8/v8.testsuite.py) |
| security | 3 | [third_party/robin_map/include/tsl/robin_growth_policy.h](../../../../sources/Samsung__escargot/third_party/robin_map/include/tsl/robin_growth_policy.h)<br>[src/runtime/SandBox.cpp](../../../../sources/Samsung__escargot/src/runtime/SandBox.cpp)<br>[src/runtime/SandBox.h](../../../../sources/Samsung__escargot/src/runtime/SandBox.h) |
| ci | 6 | [.github/workflows/analysis-actions.yml](../../../../sources/Samsung__escargot/.github/workflows/analysis-actions.yml)<br>[.github/workflows/android-release.yml](../../../../sources/Samsung__escargot/.github/workflows/android-release.yml)<br>[.github/workflows/code-review.yml](../../../../sources/Samsung__escargot/.github/workflows/code-review.yml)<br>[.github/workflows/es-actions.yml](../../../../sources/Samsung__escargot/.github/workflows/es-actions.yml)<br>[.github/workflows/gbs.conf](../../../../sources/Samsung__escargot/.github/workflows/gbs.conf)<br>[.github/workflows/release.yml](../../../../sources/Samsung__escargot/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 13 | [README.md](../../../../sources/Samsung__escargot/README.md)<br>[tools/code_generators/README](../../../../sources/Samsung__escargot/tools/code_generators/README)<br>[third_party/xsum/README.md](../../../../sources/Samsung__escargot/third_party/xsum/README.md)<br>[third_party/simdutf/README.md](../../../../sources/Samsung__escargot/third_party/simdutf/README.md)<br>[third_party/robin_map/README.md](../../../../sources/Samsung__escargot/third_party/robin_map/README.md)<br>[third_party/rapidjson/readme.md](../../../../sources/Samsung__escargot/third_party/rapidjson/readme.md)<br>[third_party/lz4/README.md](../../../../sources/Samsung__escargot/third_party/lz4/README.md)<br>[third_party/libbf/readme.txt](../../../../sources/Samsung__escargot/third_party/libbf/readme.txt) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 199 | [tools/run-tests.py](../../../../sources/Samsung__escargot/tools/run-tests.py)<br>[tools/test/wasm-js/exclude_list.txt](../../../../sources/Samsung__escargot/tools/test/wasm-js/exclude_list.txt)<br>[tools/test/v8/v8.execution.py](../../../../sources/Samsung__escargot/tools/test/v8/v8.execution.py)<br>[tools/test/v8/v8.mjsunit.js](../../../../sources/Samsung__escargot/tools/test/v8/v8.mjsunit.js)<br>[tools/test/v8/v8.mjsunit.status](../../../../sources/Samsung__escargot/tools/test/v8/v8.mjsunit.status)<br>[tools/test/v8/v8.progress.py](../../../../sources/Samsung__escargot/tools/test/v8/v8.progress.py) |
| CI workflow | 6 | [.github/workflows/analysis-actions.yml](../../../../sources/Samsung__escargot/.github/workflows/analysis-actions.yml)<br>[.github/workflows/android-release.yml](../../../../sources/Samsung__escargot/.github/workflows/android-release.yml)<br>[.github/workflows/code-review.yml](../../../../sources/Samsung__escargot/.github/workflows/code-review.yml)<br>[.github/workflows/es-actions.yml](../../../../sources/Samsung__escargot/.github/workflows/es-actions.yml)<br>[.github/workflows/gbs.conf](../../../../sources/Samsung__escargot/.github/workflows/gbs.conf)<br>[.github/workflows/release.yml](../../../../sources/Samsung__escargot/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 3 | [third_party/robin_map/include/tsl/robin_growth_policy.h](../../../../sources/Samsung__escargot/third_party/robin_map/include/tsl/robin_growth_policy.h)<br>[src/runtime/SandBox.cpp](../../../../sources/Samsung__escargot/src/runtime/SandBox.cpp)<br>[src/runtime/SandBox.h](../../../../sources/Samsung__escargot/src/runtime/SandBox.h) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `test/bin/memps`, `README.md`, `tools/code_generators/README`.
2. entrypoint를 따라 실행 흐름 확인: `test/bin/memps`.
3. agent/tool runtime 매핑: `tools/check_tidy.py`, `tools/run-tests.py`, `tools/visualize_heap_usage.py`.
4. retrieval/memory/indexing 확인: `third_party/yarr/Vector.h`, `third_party/robin_map/include/tsl/robin_vector.h`, `src/util/Vector.h`.
5. test/eval 파일로 동작 검증: `tools/run-tests.py`, `tools/test/wasm-js/exclude_list.txt`, `tools/test/v8/v8.execution.py`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Escargot is a lightweight JavaScript engine designed specifically for resource constrained environments.. 핵심 구조 신호는 C++, README.md, LICENSE, tests, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
