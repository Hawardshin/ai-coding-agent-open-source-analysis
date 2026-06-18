# Samsung/ONE 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

On-device Neural Engine

## 요약

- 조사 단위: `sources/Samsung__ONE` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 15,000 files, 3,543 directories, depth score 107, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=tools/tflitefile_tool/tests/main.py, tools/onnx_subgraph/src/main.cpp, tools/model_explorer_circle/src/model_explorer_circle/main.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Samsung/ONE |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | korea |
| Language | C++ |
| Stars | 571 |
| Forks | 183 |
| License | NOASSERTION |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__ONE](../../../../sources/Samsung__ONE) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__ONE.md](../../../korea-trending/repositories/Samsung__ONE.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 15000 / 3543 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .ahub, .github, circle-mlir, compiler, docs, infra, logo, nnpackage, onert-micro, packaging, res, runtime, tools |
| 상위 확장자 | .h: 4021, .cpp: 3802, .py: 1545, .cc: 753, .txt: 731, .recipe: 599, .cmake: 403, .json: 399, .md: 342, .reverse: 326, .test: 259, (none): 257 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 7 |
| .github | ci surface | 1 |
| circle-mlir | ci surface | 1 |
| compiler | top-level component | 1 |
| infra | top-level component | 1 |
| logo | top-level component | 1 |
| nnpackage | top-level component | 1 |
| onert-micro | top-level component | 1 |
| packaging | top-level component | 1 |
| res | top-level component | 1 |
| runtime | top-level component | 1 |
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
| entrypoints | [tools/tflitefile_tool/tests/main.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/main.py) | entrypoints signal |
| entrypoints | [tools/onnx_subgraph/src/main.cpp](../../../../sources/Samsung__ONE/tools/onnx_subgraph/src/main.cpp) | entrypoints signal |
| entrypoints | [tools/model_explorer_circle/src/model_explorer_circle/main.py](../../../../sources/Samsung__ONE/tools/model_explorer_circle/src/model_explorer_circle/main.py) | entrypoints signal |
| entrypoints | [tools/generate_datafile/tf_dataset_converter/main.py](../../../../sources/Samsung__ONE/tools/generate_datafile/tf_dataset_converter/main.py) | entrypoints signal |
| container | [tools/onnx_subgraph/docker/Dockerfile.u2204](../../../../sources/Samsung__ONE/tools/onnx_subgraph/docker/Dockerfile.u2204) | container signal |
| container | [infra/docker/noble/Dockerfile](../../../../sources/Samsung__ONE/infra/docker/noble/Dockerfile) | container signal |
| container | [infra/docker/jammy/Dockerfile](../../../../sources/Samsung__ONE/infra/docker/jammy/Dockerfile) | container signal |
| container | [infra/docker/focal/Dockerfile](../../../../sources/Samsung__ONE/infra/docker/focal/Dockerfile) | container signal |
| config | [pyproject.toml](../../../../sources/Samsung__ONE/pyproject.toml) | config signal |
| config | [tools/tflitefile_tool/pyproject.toml](../../../../sources/Samsung__ONE/tools/tflitefile_tool/pyproject.toml) | config signal |
| config | [tools/tflitefile_tool/requirements.txt](../../../../sources/Samsung__ONE/tools/tflitefile_tool/requirements.txt) | config signal |
| config | [tools/tflitefile_tool/uv.lock](../../../../sources/Samsung__ONE/tools/tflitefile_tool/uv.lock) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 16 | [tools/tflitefile_tool/tests/main.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/main.py)<br>[tools/onnx_subgraph/src/main.cpp](../../../../sources/Samsung__ONE/tools/onnx_subgraph/src/main.cpp)<br>[tools/model_explorer_circle/src/model_explorer_circle/main.py](../../../../sources/Samsung__ONE/tools/model_explorer_circle/src/model_explorer_circle/main.py)<br>[tools/generate_datafile/tf_dataset_converter/main.py](../../../../sources/Samsung__ONE/tools/generate_datafile/tf_dataset_converter/main.py)<br>[tools/circle_plus_gen/main.py](../../../../sources/Samsung__ONE/tools/circle_plus_gen/main.py)<br>[runtime/contrib/npud/tests/core/Server.test.cc](../../../../sources/Samsung__ONE/runtime/contrib/npud/tests/core/Server.test.cc)<br>[runtime/contrib/npud/core/Server.cc](../../../../sources/Samsung__ONE/runtime/contrib/npud/core/Server.cc)<br>[runtime/contrib/npud/core/Server.h](../../../../sources/Samsung__ONE/runtime/contrib/npud/core/Server.h) |
| agentRuntime | 426 | [tools/tflkit/.gitignore](../../../../sources/Samsung__ONE/tools/tflkit/.gitignore)<br>[tools/tflkit/convert.template](../../../../sources/Samsung__ONE/tools/tflkit/convert.template)<br>[tools/tflkit/freeze_graph.sh](../../../../sources/Samsung__ONE/tools/tflkit/freeze_graph.sh)<br>[tools/tflkit/freeze.template](../../../../sources/Samsung__ONE/tools/tflkit/freeze.template)<br>[tools/tflkit/optimize_for_inference.sh](../../../../sources/Samsung__ONE/tools/tflkit/optimize_for_inference.sh)<br>[tools/tflkit/optimize.template](../../../../sources/Samsung__ONE/tools/tflkit/optimize.template)<br>[tools/tflkit/README.md](../../../../sources/Samsung__ONE/tools/tflkit/README.md)<br>[tools/tflkit/summarize_pb.py](../../../../sources/Samsung__ONE/tools/tflkit/summarize_pb.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 99 | [tools/tflkit/freeze_graph.sh](../../../../sources/Samsung__ONE/tools/tflkit/freeze_graph.sh)<br>[tools/tflkit/transform_graph.sh](../../../../sources/Samsung__ONE/tools/tflkit/transform_graph.sh)<br>[tools/tflitefile_tool/src/ir/graph_stats.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/src/ir/graph_stats.py)<br>[tools/onnx_subgraph/src/lib/graph.cpp](../../../../sources/Samsung__ONE/tools/onnx_subgraph/src/lib/graph.cpp)<br>[tools/onnx_subgraph/include/graph.h](../../../../sources/Samsung__ONE/tools/onnx_subgraph/include/graph.h)<br>[tools/nnpackage_tool/sth2nnpkgtc/pb_select_graph.py](../../../../sources/Samsung__ONE/tools/nnpackage_tool/sth2nnpkgtc/pb_select_graph.py)<br>[tools/model_partition_tool/graph_analysis.py](../../../../sources/Samsung__ONE/tools/model_partition_tool/graph_analysis.py)<br>[tools/model_partition_tool/Graph.py](../../../../sources/Samsung__ONE/tools/model_partition_tool/Graph.py) |
| spec | 19 | [tools/tflitefile_tool/requirements.txt](../../../../sources/Samsung__ONE/tools/tflitefile_tool/requirements.txt)<br>[tools/nnpackage_tool/qnf/requirements.txt](../../../../sources/Samsung__ONE/tools/nnpackage_tool/qnf/requirements.txt)<br>[tools/generate_datafile/tf_dataset_converter/requirements.txt](../../../../sources/Samsung__ONE/tools/generate_datafile/tf_dataset_converter/requirements.txt)<br>[tools/circle_plus_gen/requirements.txt](../../../../sources/Samsung__ONE/tools/circle_plus_gen/requirements.txt)<br>[runtime/tests/nnapi/nnapi_test_generator/android-10/spec_visualizer.py](../../../../sources/Samsung__ONE/runtime/tests/nnapi/nnapi_test_generator/android-10/spec_visualizer.py)<br>[res/TensorFlowTests/NET_0030/circle_1.0_rel_requirement.rule](../../../../sources/Samsung__ONE/res/TensorFlowTests/NET_0030/circle_1.0_rel_requirement.rule)<br>[res/TensorFlowTests/NET_0028/circle_1.0_rel_requirement.rule](../../../../sources/Samsung__ONE/res/TensorFlowTests/NET_0028/circle_1.0_rel_requirement.rule)<br>[res/TensorFlowTests/NET_0025/circle_1.0_rel_requirement.rule](../../../../sources/Samsung__ONE/res/TensorFlowTests/NET_0025/circle_1.0_rel_requirement.rule) |
| eval | 6197 | [tools/tflitefile_tool/tests/__init__.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/__init__.py)<br>[tools/tflitefile_tool/tests/main.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/main.py)<br>[tools/tflitefile_tool/tests/README.md](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/README.md)<br>[tools/tflitefile_tool/tests/test_operator.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/test_operator.py)<br>[tools/tflitefile_tool/tests/test_setup.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/test_setup.py)<br>[tools/tflitefile_tool/tests/test_string_builder.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/test_string_builder.py)<br>[tools/tflitefile_tool/tests/test_subgraph.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/test_subgraph.py)<br>[tools/tflitefile_tool/tests/test_tensor.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/test_tensor.py) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 9 | [tools/onnx_subgraph/docker/Dockerfile.u2204](../../../../sources/Samsung__ONE/tools/onnx_subgraph/docker/Dockerfile.u2204)<br>[infra/docker/noble/Dockerfile](../../../../sources/Samsung__ONE/infra/docker/noble/Dockerfile)<br>[infra/docker/jammy/Dockerfile](../../../../sources/Samsung__ONE/infra/docker/jammy/Dockerfile)<br>[infra/docker/focal/Dockerfile](../../../../sources/Samsung__ONE/infra/docker/focal/Dockerfile)<br>[infra/docker/android-sdk/Dockerfile](../../../../sources/Samsung__ONE/infra/docker/android-sdk/Dockerfile)<br>[compiler/onecc-docker/docker/Dockerfile](../../../../sources/Samsung__ONE/compiler/onecc-docker/docker/Dockerfile)<br>[circle-mlir/infra/docker/noble/Dockerfile](../../../../sources/Samsung__ONE/circle-mlir/infra/docker/noble/Dockerfile)<br>[circle-mlir/infra/docker/jammy/Dockerfile](../../../../sources/Samsung__ONE/circle-mlir/infra/docker/jammy/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 406 | [README.md](../../../../sources/Samsung__ONE/README.md)<br>[tools/tflkit/README.md](../../../../sources/Samsung__ONE/tools/tflkit/README.md)<br>[tools/tflitefile_tool/README.md](../../../../sources/Samsung__ONE/tools/tflitefile_tool/README.md)<br>[tools/tflitefile_tool/tests/README.md](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/README.md)<br>[tools/tflitefile_tool/src/ir/README.md](../../../../sources/Samsung__ONE/tools/tflitefile_tool/src/ir/README.md)<br>[tools/tensorflow_model_freezer/readme.md](../../../../sources/Samsung__ONE/tools/tensorflow_model_freezer/readme.md)<br>[tools/stab/README.md](../../../../sources/Samsung__ONE/tools/stab/README.md)<br>[tools/release_tool/README.md](../../../../sources/Samsung__ONE/tools/release_tool/README.md) |
| config | 14 | [pyproject.toml](../../../../sources/Samsung__ONE/pyproject.toml)<br>[tools/tflitefile_tool/pyproject.toml](../../../../sources/Samsung__ONE/tools/tflitefile_tool/pyproject.toml)<br>[tools/tflitefile_tool/requirements.txt](../../../../sources/Samsung__ONE/tools/tflitefile_tool/requirements.txt)<br>[tools/tflitefile_tool/uv.lock](../../../../sources/Samsung__ONE/tools/tflitefile_tool/uv.lock)<br>[tools/nnpackage_tool/qnf/requirements.txt](../../../../sources/Samsung__ONE/tools/nnpackage_tool/qnf/requirements.txt)<br>[tools/model_explorer_circle/pyproject.toml](../../../../sources/Samsung__ONE/tools/model_explorer_circle/pyproject.toml)<br>[tools/generate_datafile/tf_dataset_converter/requirements.txt](../../../../sources/Samsung__ONE/tools/generate_datafile/tf_dataset_converter/requirements.txt)<br>[tools/circle_plus_gen/requirements.txt](../../../../sources/Samsung__ONE/tools/circle_plus_gen/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 6197 | [tools/tflitefile_tool/tests/__init__.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/__init__.py)<br>[tools/tflitefile_tool/tests/main.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/main.py)<br>[tools/tflitefile_tool/tests/README.md](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/README.md)<br>[tools/tflitefile_tool/tests/test_operator.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/test_operator.py)<br>[tools/tflitefile_tool/tests/test_setup.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/test_setup.py)<br>[tools/tflitefile_tool/tests/test_string_builder.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/test_string_builder.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 9 | [tools/onnx_subgraph/docker/Dockerfile.u2204](../../../../sources/Samsung__ONE/tools/onnx_subgraph/docker/Dockerfile.u2204)<br>[infra/docker/noble/Dockerfile](../../../../sources/Samsung__ONE/infra/docker/noble/Dockerfile)<br>[infra/docker/jammy/Dockerfile](../../../../sources/Samsung__ONE/infra/docker/jammy/Dockerfile)<br>[infra/docker/focal/Dockerfile](../../../../sources/Samsung__ONE/infra/docker/focal/Dockerfile)<br>[infra/docker/android-sdk/Dockerfile](../../../../sources/Samsung__ONE/infra/docker/android-sdk/Dockerfile)<br>[compiler/onecc-docker/docker/Dockerfile](../../../../sources/Samsung__ONE/compiler/onecc-docker/docker/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 큰 레포라 15000개 파일에서 스캔이 잘림 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `tools/tflitefile_tool/tests/main.py`, `tools/onnx_subgraph/src/main.cpp`, `tools/model_explorer_circle/src/model_explorer_circle/main.py`.
2. entrypoint를 따라 실행 흐름 확인: `tools/tflitefile_tool/tests/main.py`, `tools/onnx_subgraph/src/main.cpp`, `tools/model_explorer_circle/src/model_explorer_circle/main.py`.
3. agent/tool runtime 매핑: `tools/tflkit/.gitignore`, `tools/tflkit/convert.template`, `tools/tflkit/freeze_graph.sh`.
4. retrieval/memory/indexing 확인: `tools/tflkit/freeze_graph.sh`, `tools/tflkit/transform_graph.sh`, `tools/tflitefile_tool/src/ir/graph_stats.py`.
5. test/eval 파일로 동작 검증: `tools/tflitefile_tool/tests/__init__.py`, `tools/tflitefile_tool/tests/main.py`, `tools/tflitefile_tool/tests/README.md`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 On device Neural Engine. 핵심 구조 신호는 C++, pyproject.toml, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
