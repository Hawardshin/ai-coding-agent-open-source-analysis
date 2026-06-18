# Samsung/TICO Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A python library for converting Pytorch modules into a circle model that is a lightweight and efficient representation in ONE designed for optimized on-device neural network inference.

## 요약

- 조사 단위: `sources/Samsung__TICO` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 889 files, 121 directories, depth score 101, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 config=pyproject.toml, requirements-lintrunner.txt, test/requirements_pre.txt이고, 의존성 단서는 next, torch, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/TICO |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | korea |
| Language | Python |
| Stars | 15 |
| Forks | 29 |
| License | NOASSERTION |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Samsung__TICO](../../../../sources/Samsung__TICO) |
| Existing report | [reports/korea-trending/repositories/Samsung__TICO.md](../../../korea-trending/repositories/Samsung__TICO.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 889 / 121 |
| Max observed depth | 7 |
| Top directories | .ahub, .github, docs, infra, test, tico |
| Top extensions | .py: 785, .txt: 35, .md: 28, .yaml: 19, (none): 11, .sh: 7, .toml: 2, .ini: 1, .yml: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 6 |
| .github | ci surface | 1 |
| infra | top-level component | 1 |
| test | validation surface | 1 |
| tico | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | pt2-to-circle | pt2-to-circle |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch |
| webRuntime | next |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| config | [pyproject.toml](../../../../sources/Samsung__TICO/pyproject.toml) | config signal |
| config | [requirements-lintrunner.txt](../../../../sources/Samsung__TICO/requirements-lintrunner.txt) | config signal |
| config | [test/requirements_pre.txt](../../../../sources/Samsung__TICO/test/requirements_pre.txt) | config signal |
| config | [test/requirements.txt](../../../../sources/Samsung__TICO/test/requirements.txt) | config signal |
| ci | [.github/workflows/check-pr.yaml](../../../../sources/Samsung__TICO/.github/workflows/check-pr.yaml) | ci signal |
| ci | [.github/workflows/check-workflows.yaml](../../../../sources/Samsung__TICO/.github/workflows/check-workflows.yaml) | ci signal |
| ci | [.github/workflows/publish-nightly-package.yaml](../../../../sources/Samsung__TICO/.github/workflows/publish-nightly-package.yaml) | ci signal |
| ci | [.github/workflows/publish-official-package.yaml](../../../../sources/Samsung__TICO/.github/workflows/publish-official-package.yaml) | ci signal |
| eval | [tico/utils/trace_decorators.py](../../../../sources/Samsung__TICO/tico/utils/trace_decorators.py) | eval support |
| eval | [tico/quantization/wrapq/examples/qwen/trace_qwen.py](../../../../sources/Samsung__TICO/tico/quantization/wrapq/examples/qwen/trace_qwen.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 7 | [tico/quantization/recipes/context.py](../../../../sources/Samsung__TICO/tico/quantization/recipes/context.py)<br>[tico/quantization/recipes/runner.py](../../../../sources/Samsung__TICO/tico/quantization/recipes/runner.py)<br>[tico/quantization/recipes/debug/wrapper_smoke/runner.py](../../../../sources/Samsung__TICO/tico/quantization/recipes/debug/wrapper_smoke/runner.py)<br>[tico/quantization/evaluation/executor/__init__.py](../../../../sources/Samsung__TICO/tico/quantization/evaluation/executor/__init__.py)<br>[tico/quantization/evaluation/executor/backend_executor.py](../../../../sources/Samsung__TICO/tico/quantization/evaluation/executor/backend_executor.py)<br>[tico/quantization/evaluation/executor/circle_executor.py](../../../../sources/Samsung__TICO/tico/quantization/evaluation/executor/circle_executor.py)<br>[tico/quantization/evaluation/executor/triv24_executor.py](../../../../sources/Samsung__TICO/tico/quantization/evaluation/executor/triv24_executor.py) |
| mcp | 0 | not obvious |
| retrieval | 25 | [tico/utils/diff_graph.py](../../../../sources/Samsung__TICO/tico/utils/diff_graph.py)<br>[tico/utils/graph.py](../../../../sources/Samsung__TICO/tico/utils/graph.py)<br>[tico/serialize/circle_graph.py](../../../../sources/Samsung__TICO/tico/serialize/circle_graph.py)<br>[tico/serialize/operators/op_embedding.py](../../../../sources/Samsung__TICO/tico/serialize/operators/op_embedding.py)<br>[tico/serialize/operators/op_index_select.py](../../../../sources/Samsung__TICO/tico/serialize/operators/op_index_select.py)<br>[tico/serialize/operators/op_index.py](../../../../sources/Samsung__TICO/tico/serialize/operators/op_index.py)<br>[tico/quantization/wrapq/wrappers/qwen_vl/quant_vision_patch_embed.py](../../../../sources/Samsung__TICO/tico/quantization/wrapq/wrappers/qwen_vl/quant_vision_patch_embed.py)<br>[tico/quantization/wrapq/wrappers/nn/quant_embedding.py](../../../../sources/Samsung__TICO/tico/quantization/wrapq/wrappers/nn/quant_embedding.py) |
| spec | 35 | [requirements-lintrunner.txt](../../../../sources/Samsung__TICO/requirements-lintrunner.txt)<br>[test/requirements_pre.txt](../../../../sources/Samsung__TICO/test/requirements_pre.txt)<br>[test/requirements.txt](../../../../sources/Samsung__TICO/test/requirements.txt)<br>[test/quantization/quant_spec_helpers.py](../../../../sources/Samsung__TICO/test/quantization/quant_spec_helpers.py)<br>[test/performance/requirements.txt](../../../../sources/Samsung__TICO/test/performance/requirements.txt)<br>[test/modules/model/TinyLlamaWithFusedRMSNorm/requirements.txt](../../../../sources/Samsung__TICO/test/modules/model/TinyLlamaWithFusedRMSNorm/requirements.txt)<br>[test/modules/model/TinyLlamaWithDynamicCache/requirements.txt](../../../../sources/Samsung__TICO/test/modules/model/TinyLlamaWithDynamicCache/requirements.txt)<br>[test/modules/model/TinyLlama/requirements.txt](../../../../sources/Samsung__TICO/test/modules/model/TinyLlama/requirements.txt) |
| eval | 433 | [tico/utils/trace_decorators.py](../../../../sources/Samsung__TICO/tico/utils/trace_decorators.py)<br>[tico/quantization/wrapq/examples/qwen/trace_qwen.py](../../../../sources/Samsung__TICO/tico/quantization/wrapq/examples/qwen/trace_qwen.py)<br>[tico/quantization/recipes/evaluation/__init__.py](../../../../sources/Samsung__TICO/tico/quantization/recipes/evaluation/__init__.py)<br>[tico/quantization/recipes/evaluation/hellaswag.py](../../../../sources/Samsung__TICO/tico/quantization/recipes/evaluation/hellaswag.py)<br>[tico/quantization/recipes/evaluation/llava_bench_judge.py](../../../../sources/Samsung__TICO/tico/quantization/recipes/evaluation/llava_bench_judge.py)<br>[tico/quantization/recipes/evaluation/llm.py](../../../../sources/Samsung__TICO/tico/quantization/recipes/evaluation/llm.py)<br>[tico/quantization/recipes/evaluation/mmlu.py](../../../../sources/Samsung__TICO/tico/quantization/recipes/evaluation/mmlu.py)<br>[tico/quantization/recipes/evaluation/mmmu.py](../../../../sources/Samsung__TICO/tico/quantization/recipes/evaluation/mmmu.py) |
| security | 0 | not obvious |
| ci | 4 | [.github/workflows/check-pr.yaml](../../../../sources/Samsung__TICO/.github/workflows/check-pr.yaml)<br>[.github/workflows/check-workflows.yaml](../../../../sources/Samsung__TICO/.github/workflows/check-workflows.yaml)<br>[.github/workflows/publish-nightly-package.yaml](../../../../sources/Samsung__TICO/.github/workflows/publish-nightly-package.yaml)<br>[.github/workflows/publish-official-package.yaml](../../../../sources/Samsung__TICO/.github/workflows/publish-official-package.yaml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 28 | [README.md](../../../../sources/Samsung__TICO/README.md)<br>[tico/quantization/README.md](../../../../sources/Samsung__TICO/tico/quantization/README.md)<br>[tico/quantization/wrapq/README.md](../../../../sources/Samsung__TICO/tico/quantization/wrapq/README.md)<br>[tico/quantization/recipes/README.md](../../../../sources/Samsung__TICO/tico/quantization/recipes/README.md)<br>[tico/quantization/recipes/stages/README.md](../../../../sources/Samsung__TICO/tico/quantization/recipes/stages/README.md)<br>[tico/quantization/recipes/export/README.md](../../../../sources/Samsung__TICO/tico/quantization/recipes/export/README.md)<br>[tico/quantization/recipes/evaluation/README.md](../../../../sources/Samsung__TICO/tico/quantization/recipes/evaluation/README.md)<br>[tico/quantization/recipes/debug/README.md](../../../../sources/Samsung__TICO/tico/quantization/recipes/debug/README.md) |
| config | 31 | [pyproject.toml](../../../../sources/Samsung__TICO/pyproject.toml)<br>[requirements-lintrunner.txt](../../../../sources/Samsung__TICO/requirements-lintrunner.txt)<br>[test/requirements_pre.txt](../../../../sources/Samsung__TICO/test/requirements_pre.txt)<br>[test/requirements.txt](../../../../sources/Samsung__TICO/test/requirements.txt)<br>[test/performance/requirements.txt](../../../../sources/Samsung__TICO/test/performance/requirements.txt)<br>[test/modules/model/TinyLlamaWithFusedRMSNorm/requirements.txt](../../../../sources/Samsung__TICO/test/modules/model/TinyLlamaWithFusedRMSNorm/requirements.txt)<br>[test/modules/model/TinyLlamaWithDynamicCache/requirements.txt](../../../../sources/Samsung__TICO/test/modules/model/TinyLlamaWithDynamicCache/requirements.txt)<br>[test/modules/model/TinyLlama/requirements.txt](../../../../sources/Samsung__TICO/test/modules/model/TinyLlama/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 433 | [tico/utils/trace_decorators.py](../../../../sources/Samsung__TICO/tico/utils/trace_decorators.py)<br>[tico/quantization/wrapq/examples/qwen/trace_qwen.py](../../../../sources/Samsung__TICO/tico/quantization/wrapq/examples/qwen/trace_qwen.py)<br>[tico/quantization/recipes/evaluation/__init__.py](../../../../sources/Samsung__TICO/tico/quantization/recipes/evaluation/__init__.py)<br>[tico/quantization/recipes/evaluation/hellaswag.py](../../../../sources/Samsung__TICO/tico/quantization/recipes/evaluation/hellaswag.py)<br>[tico/quantization/recipes/evaluation/llava_bench_judge.py](../../../../sources/Samsung__TICO/tico/quantization/recipes/evaluation/llava_bench_judge.py)<br>[tico/quantization/recipes/evaluation/llm.py](../../../../sources/Samsung__TICO/tico/quantization/recipes/evaluation/llm.py) |
| CI workflows | 4 | [.github/workflows/check-pr.yaml](../../../../sources/Samsung__TICO/.github/workflows/check-pr.yaml)<br>[.github/workflows/check-workflows.yaml](../../../../sources/Samsung__TICO/.github/workflows/check-workflows.yaml)<br>[.github/workflows/publish-nightly-package.yaml](../../../../sources/Samsung__TICO/.github/workflows/publish-nightly-package.yaml)<br>[.github/workflows/publish-official-package.yaml](../../../../sources/Samsung__TICO/.github/workflows/publish-official-package.yaml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `pyproject.toml`, `requirements-lintrunner.txt`, `test/requirements_pre.txt`.
2. Map agent/tool runtime through: `tico/quantization/recipes/context.py`, `tico/quantization/recipes/runner.py`, `tico/quantization/recipes/debug/wrapper_smoke/runner.py`.
3. Inspect retrieval/memory/indexing through: `tico/utils/diff_graph.py`, `tico/utils/graph.py`, `tico/serialize/circle_graph.py`.
4. Verify behavior through test/eval files: `tico/utils/trace_decorators.py`, `tico/quantization/wrapq/examples/qwen/trace_qwen.py`, `tico/quantization/recipes/evaluation/__init__.py`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 A python library for converting Pytorch modules into a circle model that is a lightweight and efficient representation i. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, next, torch이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
