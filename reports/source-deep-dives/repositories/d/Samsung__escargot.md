# Samsung/escargot Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Escargot is a lightweight JavaScript engine designed specifically for resource-constrained environments.

## 요약

- 조사 단위: `sources/Samsung__escargot` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 857 files, 71 directories, depth score 107, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=test/bin/memps이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/escargot |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | C++ |
| Stars | 357 |
| Forks | 58 |
| License | LGPL-2.1 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Samsung__escargot](../../../../sources/Samsung__escargot) |
| Existing report | [reports/korea-trending/repositories/Samsung__escargot.md](../../../korea-trending/repositories/Samsung__escargot.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 857 / 71 |
| Max observed depth | 6 |
| Top directories | .ahub, .github, docs, packaging, src, test, third_party, tools |
| Top extensions | .h: 380, .cpp: 187, .js: 53, .xml: 41, .cmd: 39, .expected: 39, .txt: 25, .py: 23, (none): 19, .md: 12, .cc: 8, .yml: 6 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 5 |
| src | source boundary | 4 |
| .github | ci surface | 1 |
| packaging | top-level component | 1 |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [test/bin/memps](../../../../sources/Samsung__escargot/test/bin/memps) |
| agentRuntime | 229 | [tools/check_tidy.py](../../../../sources/Samsung__escargot/tools/check_tidy.py)<br>[tools/run-tests.py](../../../../sources/Samsung__escargot/tools/run-tests.py)<br>[tools/visualize_heap_usage.py](../../../../sources/Samsung__escargot/tools/visualize_heap_usage.py)<br>[tools/unicode_data/CaseFolding.txt](../../../../sources/Samsung__escargot/tools/unicode_data/CaseFolding.txt)<br>[tools/unicode_data/DerivedBinaryProperties.txt](../../../../sources/Samsung__escargot/tools/unicode_data/DerivedBinaryProperties.txt)<br>[tools/unicode_data/DerivedCoreProperties.txt](../../../../sources/Samsung__escargot/tools/unicode_data/DerivedCoreProperties.txt)<br>[tools/unicode_data/DerivedNormalizationProps.txt](../../../../sources/Samsung__escargot/tools/unicode_data/DerivedNormalizationProps.txt)<br>[tools/unicode_data/emoji-data.txt](../../../../sources/Samsung__escargot/tools/unicode_data/emoji-data.txt) |
| mcp | 0 | not obvious |
| retrieval | 3 | [third_party/yarr/Vector.h](../../../../sources/Samsung__escargot/third_party/yarr/Vector.h)<br>[third_party/robin_map/include/tsl/robin_vector.h](../../../../sources/Samsung__escargot/third_party/robin_map/include/tsl/robin_vector.h)<br>[src/util/Vector.h](../../../../sources/Samsung__escargot/src/util/Vector.h) |
| spec | 1 | [docs/Spec.md](../../../../sources/Samsung__escargot/docs/Spec.md) |
| eval | 199 | [tools/run-tests.py](../../../../sources/Samsung__escargot/tools/run-tests.py)<br>[tools/test/wasm-js/exclude_list.txt](../../../../sources/Samsung__escargot/tools/test/wasm-js/exclude_list.txt)<br>[tools/test/v8/v8.execution.py](../../../../sources/Samsung__escargot/tools/test/v8/v8.execution.py)<br>[tools/test/v8/v8.mjsunit.js](../../../../sources/Samsung__escargot/tools/test/v8/v8.mjsunit.js)<br>[tools/test/v8/v8.mjsunit.status](../../../../sources/Samsung__escargot/tools/test/v8/v8.mjsunit.status)<br>[tools/test/v8/v8.progress.py](../../../../sources/Samsung__escargot/tools/test/v8/v8.progress.py)<br>[tools/test/v8/v8.run-tests.py](../../../../sources/Samsung__escargot/tools/test/v8/v8.run-tests.py)<br>[tools/test/v8/v8.testsuite.py](../../../../sources/Samsung__escargot/tools/test/v8/v8.testsuite.py) |
| security | 3 | [third_party/robin_map/include/tsl/robin_growth_policy.h](../../../../sources/Samsung__escargot/third_party/robin_map/include/tsl/robin_growth_policy.h)<br>[src/runtime/SandBox.cpp](../../../../sources/Samsung__escargot/src/runtime/SandBox.cpp)<br>[src/runtime/SandBox.h](../../../../sources/Samsung__escargot/src/runtime/SandBox.h) |
| ci | 6 | [.github/workflows/analysis-actions.yml](../../../../sources/Samsung__escargot/.github/workflows/analysis-actions.yml)<br>[.github/workflows/android-release.yml](../../../../sources/Samsung__escargot/.github/workflows/android-release.yml)<br>[.github/workflows/code-review.yml](../../../../sources/Samsung__escargot/.github/workflows/code-review.yml)<br>[.github/workflows/es-actions.yml](../../../../sources/Samsung__escargot/.github/workflows/es-actions.yml)<br>[.github/workflows/gbs.conf](../../../../sources/Samsung__escargot/.github/workflows/gbs.conf)<br>[.github/workflows/release.yml](../../../../sources/Samsung__escargot/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 13 | [README.md](../../../../sources/Samsung__escargot/README.md)<br>[tools/code_generators/README](../../../../sources/Samsung__escargot/tools/code_generators/README)<br>[third_party/xsum/README.md](../../../../sources/Samsung__escargot/third_party/xsum/README.md)<br>[third_party/simdutf/README.md](../../../../sources/Samsung__escargot/third_party/simdutf/README.md)<br>[third_party/robin_map/README.md](../../../../sources/Samsung__escargot/third_party/robin_map/README.md)<br>[third_party/rapidjson/readme.md](../../../../sources/Samsung__escargot/third_party/rapidjson/readme.md)<br>[third_party/lz4/README.md](../../../../sources/Samsung__escargot/third_party/lz4/README.md)<br>[third_party/libbf/readme.txt](../../../../sources/Samsung__escargot/third_party/libbf/readme.txt) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 199 | [tools/run-tests.py](../../../../sources/Samsung__escargot/tools/run-tests.py)<br>[tools/test/wasm-js/exclude_list.txt](../../../../sources/Samsung__escargot/tools/test/wasm-js/exclude_list.txt)<br>[tools/test/v8/v8.execution.py](../../../../sources/Samsung__escargot/tools/test/v8/v8.execution.py)<br>[tools/test/v8/v8.mjsunit.js](../../../../sources/Samsung__escargot/tools/test/v8/v8.mjsunit.js)<br>[tools/test/v8/v8.mjsunit.status](../../../../sources/Samsung__escargot/tools/test/v8/v8.mjsunit.status)<br>[tools/test/v8/v8.progress.py](../../../../sources/Samsung__escargot/tools/test/v8/v8.progress.py) |
| CI workflows | 6 | [.github/workflows/analysis-actions.yml](../../../../sources/Samsung__escargot/.github/workflows/analysis-actions.yml)<br>[.github/workflows/android-release.yml](../../../../sources/Samsung__escargot/.github/workflows/android-release.yml)<br>[.github/workflows/code-review.yml](../../../../sources/Samsung__escargot/.github/workflows/code-review.yml)<br>[.github/workflows/es-actions.yml](../../../../sources/Samsung__escargot/.github/workflows/es-actions.yml)<br>[.github/workflows/gbs.conf](../../../../sources/Samsung__escargot/.github/workflows/gbs.conf)<br>[.github/workflows/release.yml](../../../../sources/Samsung__escargot/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 3 | [third_party/robin_map/include/tsl/robin_growth_policy.h](../../../../sources/Samsung__escargot/third_party/robin_map/include/tsl/robin_growth_policy.h)<br>[src/runtime/SandBox.cpp](../../../../sources/Samsung__escargot/src/runtime/SandBox.cpp)<br>[src/runtime/SandBox.h](../../../../sources/Samsung__escargot/src/runtime/SandBox.h) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `test/bin/memps`, `README.md`, `tools/code_generators/README`.
2. Trace execution through entrypoints: `test/bin/memps`.
3. Map agent/tool runtime through: `tools/check_tidy.py`, `tools/run-tests.py`, `tools/visualize_heap_usage.py`.
4. Inspect retrieval/memory/indexing through: `third_party/yarr/Vector.h`, `third_party/robin_map/include/tsl/robin_vector.h`, `src/util/Vector.h`.
5. Verify behavior through test/eval files: `tools/run-tests.py`, `tools/test/wasm-js/exclude_list.txt`, `tools/test/v8/v8.execution.py`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Escargot is a lightweight JavaScript engine designed specifically for resource constrained environments.. 핵심 구조 신호는 C++, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
