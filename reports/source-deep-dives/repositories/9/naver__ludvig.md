# naver/ludvig 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

naver/ludvig

## 요약

- 조사 단위: `sources/naver__ludvig` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,572 files, 133 directories, depth score 71, key references 8개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, gaussiansplatting/README.md, gaussiansplatting/submodules/origin-diff-gaussian-rasterization/README.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/ludvig |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | C++ |
| Stars | 78 |
| Forks | 4 |
| License | NOASSERTION |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__ludvig](../../../../sources/naver__ludvig) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__ludvig.md](../../../korea-trending/repositories/naver__ludvig.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3572 / 133 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | clip_utils, configs, diffusion, dinov2, evaluation, gaussiansplatting, predictors, script, utils |
| 상위 확장자 | .html: 1392, .hpp: 664, .cpp: 526, .inl: 279, .js: 192, .py: 116, .txt: 62, .h: 48, .cmake: 30, .frag: 29, .dox: 26, .jpg: 26 |
| 소스 패턴 | retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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
| docs | [README.md](../../../../sources/naver__ludvig/README.md) | docs signal |
| docs | [gaussiansplatting/README.md](../../../../sources/naver__ludvig/gaussiansplatting/README.md) | docs signal |
| docs | [gaussiansplatting/submodules/origin-diff-gaussian-rasterization/README.md](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/README.md) | docs signal |
| docs | [gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/readme.md](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/readme.md) | docs signal |
| eval | [utils/evaluation.py](../../../../sources/naver__ludvig/utils/evaluation.py) | eval signal |
| eval | [script/eval_scannet.py](../../../../sources/naver__ludvig/script/eval_scannet.py) | eval signal |
| eval | [script/lerf_eval.sh](../../../../sources/naver__ludvig/script/lerf_eval.sh) | eval signal |
| eval | [gaussiansplatting/full_eval.py](../../../../sources/naver__ludvig/gaussiansplatting/full_eval.py) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 178 | [utils/graph.py](../../../../sources/naver__ludvig/utils/graph.py)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/perf/perf_matrix_mul_vector.cpp](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/perf/perf_matrix_mul_vector.cpp)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/perf/perf_vector_mul_matrix.cpp](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/perf/perf_vector_mul_matrix.cpp)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/gtx/gtx_rotate_vector.cpp](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/gtx/gtx_rotate_vector.cpp)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/gtx/gtx_vector_angle.cpp](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/gtx/gtx_vector_angle.cpp)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/gtx/gtx_vector_query.cpp](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/gtx/gtx_vector_query.cpp)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/ext/ext_vector_bool1.cpp](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/ext/ext_vector_bool1.cpp)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/ext/ext_vector_common.cpp](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/ext/ext_vector_common.cpp) |
| spec | 1 | [gaussiansplatting/SIBR_viewers/docs/pages/4_Architecture.dox](../../../../sources/naver__ludvig/gaussiansplatting/SIBR_viewers/docs/pages/4_Architecture.dox) |
| eval | 449 | [utils/evaluation.py](../../../../sources/naver__ludvig/utils/evaluation.py)<br>[script/eval_scannet.py](../../../../sources/naver__ludvig/script/eval_scannet.py)<br>[script/lerf_eval.sh](../../../../sources/naver__ludvig/script/lerf_eval.sh)<br>[gaussiansplatting/full_eval.py](../../../../sources/naver__ludvig/gaussiansplatting/full_eval.py)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/CMakeLists.txt](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/CMakeLists.txt)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/glm.cppcheck](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/glm.cppcheck)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/perf/CMakeLists.txt](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/perf/CMakeLists.txt)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/perf/perf_matrix_div.cpp](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/perf/perf_matrix_div.cpp) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1648 | [README.md](../../../../sources/naver__ludvig/README.md)<br>[gaussiansplatting/README.md](../../../../sources/naver__ludvig/gaussiansplatting/README.md)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/README.md](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/README.md)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/readme.md](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/readme.md)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/doc/man.doxy](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/doc/man.doxy)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/doc/theme/doxygen.css](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/doc/theme/doxygen.css)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/doc/manual/noise-perlin1.jpg](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/doc/manual/noise-perlin1.jpg)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/doc/manual/noise-perlin2.jpg](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/doc/manual/noise-perlin2.jpg) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 449 | [utils/evaluation.py](../../../../sources/naver__ludvig/utils/evaluation.py)<br>[script/eval_scannet.py](../../../../sources/naver__ludvig/script/eval_scannet.py)<br>[script/lerf_eval.sh](../../../../sources/naver__ludvig/script/lerf_eval.sh)<br>[gaussiansplatting/full_eval.py](../../../../sources/naver__ludvig/gaussiansplatting/full_eval.py)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/CMakeLists.txt](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/CMakeLists.txt)<br>[gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/glm.cppcheck](../../../../sources/naver__ludvig/gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/glm.cppcheck) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `README.md`, `gaussiansplatting/README.md`, `gaussiansplatting/submodules/origin-diff-gaussian-rasterization/README.md`.
2. retrieval/memory/indexing 확인: `utils/graph.py`, `gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/perf/perf_matrix_mul_vector.cpp`, `gaussiansplatting/submodules/origin-diff-gaussian-rasterization/third_party/glm/test/perf/perf_vector_mul_matrix.cpp`.
3. test/eval 파일로 동작 검증: `utils/evaluation.py`, `script/eval_scannet.py`, `script/lerf_eval.sh`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 C++, README.md, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
