# naver/ludvig Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

naver/ludvig

## 요약

- 조사 단위: `sources/naver__ludvig` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,572 files, 133 directories, depth score 77, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, gaussiansplatting/README.md, gaussiansplatting/submodules/origin-diff-gaussian-rasterization/README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/ludvig |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | C++ |
| Stars | 78 |
| Forks | 4 |
| License | NOASSERTION |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__ludvig](../../../../sources/naver__ludvig) |
| Existing report | [reports/korea-trending/repositories/naver__ludvig.md](../../../korea-trending/repositories/naver__ludvig.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3572 / 133 |
| Max observed depth | 9 |
| Top directories | clip_utils, configs, diffusion, dinov2, evaluation, gaussiansplatting, predictors, script, utils |
| Top extensions | .html: 1392, .hpp: 664, .cpp: 526, .inl: 279, .js: 192, .py: 116, .txt: 62, .h: 48, .cmake: 30, .frag: 29, .dox: 26, .jpg: 26 |
| Source patterns | retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| clip_utils | top-level component | 1 |
| configs | top-level component | 1 |
| diffusion | top-level component | 1 |
| dinov2 | top-level component | 1 |
| evaluation | top-level component | 1 |
| gaussiansplatting | top-level component | 1 |
| predictors | top-level component | 1 |
| script | top-level component | 1 |
| utils | top-level component | 1 |


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
| docs | [README.md](../../../../sources/naver__ludvig/README.md) | docs signal |
| docs | [gaussiansplatting/README.md](../../../../sources/naver__ludvig/gaussiansplatting/README.md) | docs signal |
| docs | [gaussiansplatting/submodules/origin-diff-gaussian-rasterization/README.md](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/README.md) | docs signal |
| docs | [gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/readme.md](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/readme.md) | docs signal |
| eval | [utils/evaluation.py](../../../../sources/naver__ludvig/utils/evaluation.py) | eval signal |
| eval | [script/eval_scannet.py](../../../../sources/naver__ludvig/script/eval_scannet.py) | eval signal |
| eval | [script/lerf_eval.sh](../../../../sources/naver__ludvig/script/lerf_eval.sh) | eval signal |
| eval | [gaussiansplatting/full_eval.py](../../../../sources/naver__ludvig/gaussiansplatting/full_eval.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 178 | [utils/graph.py](../../../../sources/naver__ludvig/utils/graph.py)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/perf/perf_matrix_mul_vector.cpp](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/perf/perf_matrix_mul_vector.cpp)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/perf/perf_vector_mul_matrix.cpp](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/perf/perf_vector_mul_matrix.cpp)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/gtx/gtx_rotate_vector.cpp](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/gtx/gtx_rotate_vector.cpp)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/gtx/gtx_vector_angle.cpp](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/gtx/gtx_vector_angle.cpp)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/gtx/gtx_vector_query.cpp](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/gtx/gtx_vector_query.cpp)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/ext/ext_vector_bool1.cpp](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/ext/ext_vector_bool1.cpp)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/ext/ext_vector_common.cpp](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/ext/ext_vector_common.cpp) |
| spec | 1 | [gaussiansplatting/SIBR_viewers/docs/pages/4_Architecture.dox](../../../../sources/naver__ludvig/gaussiansplatting/SIBR_viewers/docs/pages/4_Architecture.dox) |
| eval | 449 | [utils/evaluation.py](../../../../sources/naver__ludvig/utils/evaluation.py)<br>[script/eval_scannet.py](../../../../sources/naver__ludvig/script/eval_scannet.py)<br>[script/lerf_eval.sh](../../../../sources/naver__ludvig/script/lerf_eval.sh)<br>[gaussiansplatting/full_eval.py](../../../../sources/naver__ludvig/gaussiansplatting/full_eval.py)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/CMakeLists.txt](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/CMakeLists.txt)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/glm.cppcheck](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/glm.cppcheck)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/perf/CMakeLists.txt](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/perf/CMakeLists.txt)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/perf/perf_matrix_div.cpp](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/perf/perf_matrix_div.cpp) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1648 | [README.md](../../../../sources/naver__ludvig/README.md)<br>[gaussiansplatting/README.md](../../../../sources/naver__ludvig/gaussiansplatting/README.md)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/README.md](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/README.md)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/readme.md](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/readme.md)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/doc/man.doxy](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/doc/man.doxy)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/doc/theme/doxygen.css](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/doc/theme/doxygen.css)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/doc/manual/noise-perlin1.jpg](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/doc/manual/noise-perlin1.jpg)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/doc/manual/noise-perlin2.jpg](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/doc/manual/noise-perlin2.jpg) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 449 | [utils/evaluation.py](../../../../sources/naver__ludvig/utils/evaluation.py)<br>[script/eval_scannet.py](../../../../sources/naver__ludvig/script/eval_scannet.py)<br>[script/lerf_eval.sh](../../../../sources/naver__ludvig/script/lerf_eval.sh)<br>[gaussiansplatting/full_eval.py](../../../../sources/naver__ludvig/gaussiansplatting/full_eval.py)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/CMakeLists.txt](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/CMakeLists.txt)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/glm.cppcheck](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/glm.cppcheck) |
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
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.md`, `gaussiansplatting/README.md`, `gaussiansplatting/submodules/origin-diff-gaussian-rasterization/README.md`.
2. Inspect retrieval/memory/indexing through: `utils/graph.py`, `gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/perf/perf_matrix_mul_vector.cpp`, `gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/perf/perf_vector_mul_matrix.cpp`.
3. Verify behavior through test/eval files: `utils/evaluation.py`, `script/eval_scannet.py`, `script/lerf_eval.sh`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 C++, README.md, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
