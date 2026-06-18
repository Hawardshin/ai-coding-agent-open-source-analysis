# Samsung/ONE Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

On-device Neural Engine

## 요약

- 조사 단위: `sources/Samsung__ONE` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 15,000 files, 3,543 directories, depth score 113, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=tools/tflitefile_tool/tests/main.py, tools/onnx_subgraph/src/main.cpp, tools/model_explorer_circle/src/model_explorer_circle/main.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/ONE |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | korea |
| Language | C++ |
| Stars | 571 |
| Forks | 183 |
| License | NOASSERTION |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Samsung__ONE](../../../../sources/Samsung__ONE) |
| Existing report | [reports/korea-trending/repositories/Samsung__ONE.md](../../../korea-trending/repositories/Samsung__ONE.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 15000 / 3543 |
| Max observed depth | 11 |
| Top directories | .ahub, .github, circle-mlir, compiler, docs, infra, logo, nnpackage, onert-micro, packaging, res, runtime, tools |
| Top extensions | .h: 4021, .cpp: 3802, .py: 1545, .cc: 753, .txt: 731, .recipe: 599, .cmake: 403, .json: 399, .md: 342, .reverse: 326, .test: 259, (none): 257 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 16 | [tools/tflitefile_tool/tests/main.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/main.py)<br>[tools/onnx_subgraph/src/main.cpp](../../../../sources/Samsung__ONE/tools/onnx_subgraph/src/main.cpp)<br>[tools/model_explorer_circle/src/model_explorer_circle/main.py](../../../../sources/Samsung__ONE/tools/model_explorer_circle/src/model_explorer_circle/main.py)<br>[tools/generate_datafile/tf_dataset_converter/main.py](../../../../sources/Samsung__ONE/tools/generate_datafile/tf_dataset_converter/main.py)<br>[tools/circle_plus_gen/main.py](../../../../sources/Samsung__ONE/tools/circle_plus_gen/main.py)<br>[runtime/contrib/npud/tests/core/Server.test.cc](../../../../sources/Samsung__ONE/runtime/contrib/npud/tests/core/Server.test.cc)<br>[runtime/contrib/npud/core/Server.cc](../../../../sources/Samsung__ONE/runtime/contrib/npud/core/Server.cc)<br>[runtime/contrib/npud/core/Server.h](../../../../sources/Samsung__ONE/runtime/contrib/npud/core/Server.h) |
| agentRuntime | 426 | [tools/tflkit/.gitignore](../../../../sources/Samsung__ONE/tools/tflkit/.gitignore)<br>[tools/tflkit/convert.template](../../../../sources/Samsung__ONE/tools/tflkit/convert.template)<br>[tools/tflkit/freeze_graph.sh](../../../../sources/Samsung__ONE/tools/tflkit/freeze_graph.sh)<br>[tools/tflkit/freeze.template](../../../../sources/Samsung__ONE/tools/tflkit/freeze.template)<br>[tools/tflkit/optimize_for_inference.sh](../../../../sources/Samsung__ONE/tools/tflkit/optimize_for_inference.sh)<br>[tools/tflkit/optimize.template](../../../../sources/Samsung__ONE/tools/tflkit/optimize.template)<br>[tools/tflkit/README.md](../../../../sources/Samsung__ONE/tools/tflkit/README.md)<br>[tools/tflkit/summarize_pb.py](../../../../sources/Samsung__ONE/tools/tflkit/summarize_pb.py) |
| mcp | 0 | not obvious |
| retrieval | 99 | [tools/tflkit/freeze_graph.sh](../../../../sources/Samsung__ONE/tools/tflkit/freeze_graph.sh)<br>[tools/tflkit/transform_graph.sh](../../../../sources/Samsung__ONE/tools/tflkit/transform_graph.sh)<br>[tools/tflitefile_tool/src/ir/graph_stats.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/src/ir/graph_stats.py)<br>[tools/onnx_subgraph/src/lib/graph.cpp](../../../../sources/Samsung__ONE/tools/onnx_subgraph/src/lib/graph.cpp)<br>[tools/onnx_subgraph/include/graph.h](../../../../sources/Samsung__ONE/tools/onnx_subgraph/include/graph.h)<br>[tools/nnpackage_tool/sth2nnpkgtc/pb_select_graph.py](../../../../sources/Samsung__ONE/tools/nnpackage_tool/sth2nnpkgtc/pb_select_graph.py)<br>[tools/model_partition_tool/graph_analysis.py](../../../../sources/Samsung__ONE/tools/model_partition_tool/graph_analysis.py)<br>[tools/model_partition_tool/Graph.py](../../../../sources/Samsung__ONE/tools/model_partition_tool/Graph.py) |
| spec | 19 | [tools/tflitefile_tool/requirements.txt](../../../../sources/Samsung__ONE/tools/tflitefile_tool/requirements.txt)<br>[tools/nnpackage_tool/qnf/requirements.txt](../../../../sources/Samsung__ONE/tools/nnpackage_tool/qnf/requirements.txt)<br>[tools/generate_datafile/tf_dataset_converter/requirements.txt](../../../../sources/Samsung__ONE/tools/generate_datafile/tf_dataset_converter/requirements.txt)<br>[tools/circle_plus_gen/requirements.txt](../../../../sources/Samsung__ONE/tools/circle_plus_gen/requirements.txt)<br>[runtime/tests/nnapi/nnapi_test_generator/android-10/spec_visualizer.py](../../../../sources/Samsung__ONE/runtime/tests/nnapi/nnapi_test_generator/android-10/spec_visualizer.py)<br>[res/TensorFlowTests/NET_0030/circle_1.0_rel_requirement.rule](../../../../sources/Samsung__ONE/res/TensorFlowTests/NET_0030/circle_1.0_rel_requirement.rule)<br>[res/TensorFlowTests/NET_0028/circle_1.0_rel_requirement.rule](../../../../sources/Samsung__ONE/res/TensorFlowTests/NET_0028/circle_1.0_rel_requirement.rule)<br>[res/TensorFlowTests/NET_0025/circle_1.0_rel_requirement.rule](../../../../sources/Samsung__ONE/res/TensorFlowTests/NET_0025/circle_1.0_rel_requirement.rule) |
| eval | 6197 | [tools/tflitefile_tool/tests/__init__.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/__init__.py)<br>[tools/tflitefile_tool/tests/main.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/main.py)<br>[tools/tflitefile_tool/tests/README.md](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/README.md)<br>[tools/tflitefile_tool/tests/test_operator.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/test_operator.py)<br>[tools/tflitefile_tool/tests/test_setup.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/test_setup.py)<br>[tools/tflitefile_tool/tests/test_string_builder.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/test_string_builder.py)<br>[tools/tflitefile_tool/tests/test_subgraph.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/test_subgraph.py)<br>[tools/tflitefile_tool/tests/test_tensor.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/test_tensor.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 9 | [tools/onnx_subgraph/docker/Dockerfile.u2204](../../../../sources/Samsung__ONE/tools/onnx_subgraph/docker/Dockerfile.u2204)<br>[infra/docker/noble/Dockerfile](../../../../sources/Samsung__ONE/infra/docker/noble/Dockerfile)<br>[infra/docker/jammy/Dockerfile](../../../../sources/Samsung__ONE/infra/docker/jammy/Dockerfile)<br>[infra/docker/focal/Dockerfile](../../../../sources/Samsung__ONE/infra/docker/focal/Dockerfile)<br>[infra/docker/android-sdk/Dockerfile](../../../../sources/Samsung__ONE/infra/docker/android-sdk/Dockerfile)<br>[compiler/onecc-docker/docker/Dockerfile](../../../../sources/Samsung__ONE/compiler/onecc-docker/docker/Dockerfile)<br>[circle-mlir/infra/docker/noble/Dockerfile](../../../../sources/Samsung__ONE/circle-mlir/infra/docker/noble/Dockerfile)<br>[circle-mlir/infra/docker/jammy/Dockerfile](../../../../sources/Samsung__ONE/circle-mlir/infra/docker/jammy/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 406 | [README.md](../../../../sources/Samsung__ONE/README.md)<br>[tools/tflkit/README.md](../../../../sources/Samsung__ONE/tools/tflkit/README.md)<br>[tools/tflitefile_tool/README.md](../../../../sources/Samsung__ONE/tools/tflitefile_tool/README.md)<br>[tools/tflitefile_tool/tests/README.md](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/README.md)<br>[tools/tflitefile_tool/src/ir/README.md](../../../../sources/Samsung__ONE/tools/tflitefile_tool/src/ir/README.md)<br>[tools/tensorflow_model_freezer/readme.md](../../../../sources/Samsung__ONE/tools/tensorflow_model_freezer/readme.md)<br>[tools/stab/README.md](../../../../sources/Samsung__ONE/tools/stab/README.md)<br>[tools/release_tool/README.md](../../../../sources/Samsung__ONE/tools/release_tool/README.md) |
| config | 14 | [pyproject.toml](../../../../sources/Samsung__ONE/pyproject.toml)<br>[tools/tflitefile_tool/pyproject.toml](../../../../sources/Samsung__ONE/tools/tflitefile_tool/pyproject.toml)<br>[tools/tflitefile_tool/requirements.txt](../../../../sources/Samsung__ONE/tools/tflitefile_tool/requirements.txt)<br>[tools/tflitefile_tool/uv.lock](../../../../sources/Samsung__ONE/tools/tflitefile_tool/uv.lock)<br>[tools/nnpackage_tool/qnf/requirements.txt](../../../../sources/Samsung__ONE/tools/nnpackage_tool/qnf/requirements.txt)<br>[tools/model_explorer_circle/pyproject.toml](../../../../sources/Samsung__ONE/tools/model_explorer_circle/pyproject.toml)<br>[tools/generate_datafile/tf_dataset_converter/requirements.txt](../../../../sources/Samsung__ONE/tools/generate_datafile/tf_dataset_converter/requirements.txt)<br>[tools/circle_plus_gen/requirements.txt](../../../../sources/Samsung__ONE/tools/circle_plus_gen/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 6197 | [tools/tflitefile_tool/tests/__init__.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/__init__.py)<br>[tools/tflitefile_tool/tests/main.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/main.py)<br>[tools/tflitefile_tool/tests/README.md](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/README.md)<br>[tools/tflitefile_tool/tests/test_operator.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/test_operator.py)<br>[tools/tflitefile_tool/tests/test_setup.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/test_setup.py)<br>[tools/tflitefile_tool/tests/test_string_builder.py](../../../../sources/Samsung__ONE/tools/tflitefile_tool/tests/test_string_builder.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 9 | [tools/onnx_subgraph/docker/Dockerfile.u2204](../../../../sources/Samsung__ONE/tools/onnx_subgraph/docker/Dockerfile.u2204)<br>[infra/docker/noble/Dockerfile](../../../../sources/Samsung__ONE/infra/docker/noble/Dockerfile)<br>[infra/docker/jammy/Dockerfile](../../../../sources/Samsung__ONE/infra/docker/jammy/Dockerfile)<br>[infra/docker/focal/Dockerfile](../../../../sources/Samsung__ONE/infra/docker/focal/Dockerfile)<br>[infra/docker/android-sdk/Dockerfile](../../../../sources/Samsung__ONE/infra/docker/android-sdk/Dockerfile)<br>[compiler/onecc-docker/docker/Dockerfile](../../../../sources/Samsung__ONE/compiler/onecc-docker/docker/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | large repository scan truncated at 15000 files |
| operation | CI workflow path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `tools/tflitefile_tool/tests/main.py`, `tools/onnx_subgraph/src/main.cpp`, `tools/model_explorer_circle/src/model_explorer_circle/main.py`.
2. Trace execution through entrypoints: `tools/tflitefile_tool/tests/main.py`, `tools/onnx_subgraph/src/main.cpp`, `tools/model_explorer_circle/src/model_explorer_circle/main.py`.
3. Map agent/tool runtime through: `tools/tflkit/.gitignore`, `tools/tflkit/convert.template`, `tools/tflkit/freeze_graph.sh`.
4. Inspect retrieval/memory/indexing through: `tools/tflkit/freeze_graph.sh`, `tools/tflkit/transform_graph.sh`, `tools/tflitefile_tool/src/ir/graph_stats.py`.
5. Verify behavior through test/eval files: `tools/tflitefile_tool/tests/__init__.py`, `tools/tflitefile_tool/tests/main.py`, `tools/tflitefile_tool/tests/README.md`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 On device Neural Engine. 핵심 구조 신호는 C++, pyproject.toml, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
