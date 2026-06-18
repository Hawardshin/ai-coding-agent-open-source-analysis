# vllm-project/vllm 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Local clone structure analysis: 5488 files, 713 directories.

## 요약

- 조사 단위: `sources/vllm-project__vllm` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 5,488 files, 713 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=vllm/entrypoints/mcp/__init__.py, vllm/entrypoints/mcp/tool_server.py, vllm/entrypoints/mcp/tool.py이고, 의존성 단서는 express, pydantic, torch, vllm, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | vllm-project/vllm |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 83195 |
| Forks | 18159 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/vllm-project__vllm](../../../../sources/vllm-project__vllm) |
| 기존 보고서 | [reports/global-trending/repositories/vllm-project__vllm.md](../../../global-trending/repositories/vllm-project__vllm.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 5488 / 713 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .buildkite, .gemini, .github, benchmarks, cmake, csrc, docker, docs, examples, requirements, rust, scripts, tests, tools, vllm |
| 상위 확장자 | .py: 3422, .json: 596, .md: 281, .rs: 220, .yaml: 210, .sh: 119, .cu: 92, .jinja: 91, .png: 87, .cuh: 77, .txt: 61, .hpp: 41 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| examples/deployment | examples workspace | 24 |
| docs | documentation surface | 23 |
| tests | validation surface | 9 |
| examples/observability | examples workspace | 6 |
| examples/disaggregated | examples workspace | 5 |
| examples/features | examples workspace | 4 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| cmake | top-level component | 1 |
| csrc | source boundary | 1 |
| docker | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/basic | examples workspace | 1 |
| examples/generate | examples workspace | 1 |
| examples/pooling | examples workspace | 1 |
| examples/tool_calling | examples workspace | 1 |
| requirements | top-level component | 1 |
| rust | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | vllm | vllm |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch, vllm |
| webRuntime | express |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [vllm/entrypoints/mcp/__init__.py](../../../../sources/vllm-project__vllm/vllm/entrypoints/mcp/__init__.py) | mcp signal |
| mcp | [vllm/entrypoints/mcp/tool_server.py](../../../../sources/vllm-project__vllm/vllm/entrypoints/mcp/tool_server.py) | mcp signal |
| mcp | [vllm/entrypoints/mcp/tool.py](../../../../sources/vllm-project__vllm/vllm/entrypoints/mcp/tool.py) | mcp signal |
| mcp | [tests/entrypoints/openai/responses/test_mcp_tools.py](../../../../sources/vllm-project__vllm/tests/entrypoints/openai/responses/test_mcp_tools.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/vllm-project__vllm/AGENTS.md) | agentRuntime signal |
| agentRuntime | [vllm/v1/executor/__init__.py](../../../../sources/vllm-project__vllm/vllm/v1/executor/__init__.py) | agentRuntime signal |
| agentRuntime | [vllm/v1/executor/abstract.py](../../../../sources/vllm-project__vllm/vllm/v1/executor/abstract.py) | agentRuntime signal |
| agentRuntime | [vllm/v1/executor/multiproc_executor.py](../../../../sources/vllm-project__vllm/vllm/v1/executor/multiproc_executor.py) | agentRuntime signal |
| entrypoints | [vllm/entrypoints/cli/main.py](../../../../sources/vllm-project__vllm/vllm/entrypoints/cli/main.py) | entrypoints signal |
| entrypoints | [vllm/entrypoints/cli/benchmark/main.py](../../../../sources/vllm-project__vllm/vllm/entrypoints/cli/benchmark/main.py) | entrypoints signal |
| entrypoints | [vllm/benchmarks/sweep/server.py](../../../../sources/vllm-project__vllm/vllm/benchmarks/sweep/server.py) | entrypoints signal |
| entrypoints | [rust/src/mock-engine/src/main.rs](../../../../sources/vllm-project__vllm/rust/src/mock-engine/src/main.rs) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [vllm/entrypoints/cli/main.py](../../../../sources/vllm-project__vllm/vllm/entrypoints/cli/main.py)<br>[vllm/entrypoints/cli/benchmark/main.py](../../../../sources/vllm-project__vllm/vllm/entrypoints/cli/benchmark/main.py)<br>[vllm/benchmarks/sweep/server.py](../../../../sources/vllm-project__vllm/vllm/benchmarks/sweep/server.py)<br>[rust/src/mock-engine/src/main.rs](../../../../sources/vllm-project__vllm/rust/src/mock-engine/src/main.rs)<br>[rust/src/managed-engine/src/cli.rs](../../../../sources/vllm-project__vllm/rust/src/managed-engine/src/cli.rs)<br>[rust/src/cmd/src/cli.rs](../../../../sources/vllm-project__vllm/rust/src/cmd/src/cli.rs)<br>[rust/src/cmd/src/main.rs](../../../../sources/vllm-project__vllm/rust/src/cmd/src/main.rs) |
| agentRuntime | 297 | [AGENTS.md](../../../../sources/vllm-project__vllm/AGENTS.md)<br>[vllm/v1/executor/__init__.py](../../../../sources/vllm-project__vllm/vllm/v1/executor/__init__.py)<br>[vllm/v1/executor/abstract.py](../../../../sources/vllm-project__vllm/vllm/v1/executor/abstract.py)<br>[vllm/v1/executor/multiproc_executor.py](../../../../sources/vllm-project__vllm/vllm/v1/executor/multiproc_executor.py)<br>[vllm/v1/executor/ray_env_utils.py](../../../../sources/vllm-project__vllm/vllm/v1/executor/ray_env_utils.py)<br>[vllm/v1/executor/ray_executor_v2.py](../../../../sources/vllm-project__vllm/vllm/v1/executor/ray_executor_v2.py)<br>[vllm/v1/executor/ray_executor.py](../../../../sources/vllm-project__vllm/vllm/v1/executor/ray_executor.py)<br>[vllm/v1/executor/ray_utils.py](../../../../sources/vllm-project__vllm/vllm/v1/executor/ray_utils.py) |
| mcp | 5 | [vllm/entrypoints/mcp/__init__.py](../../../../sources/vllm-project__vllm/vllm/entrypoints/mcp/__init__.py)<br>[vllm/entrypoints/mcp/tool_server.py](../../../../sources/vllm-project__vllm/vllm/entrypoints/mcp/tool_server.py)<br>[vllm/entrypoints/mcp/tool.py](../../../../sources/vllm-project__vllm/vllm/entrypoints/mcp/tool.py)<br>[tests/entrypoints/openai/responses/test_mcp_tools.py](../../../../sources/vllm-project__vllm/tests/entrypoints/openai/responses/test_mcp_tools.py)<br>[examples/tool_calling/openai_responses_client_with_mcp_tools.py](../../../../sources/vllm-project__vllm/examples/tool_calling/openai_responses_client_with_mcp_tools.py) |
| retrieval | 115 | [vllm/renderers/embed_utils.py](../../../../sources/vllm-project__vllm/vllm/renderers/embed_utils.py)<br>[vllm/model_executor/layers/vocab_parallel_embedding.py](../../../../sources/vllm-project__vllm/vllm/model_executor/layers/vocab_parallel_embedding.py)<br>[vllm/model_executor/layers/rotary_embedding/__init__.py](../../../../sources/vllm-project__vllm/vllm/model_executor/layers/rotary_embedding/__init__.py)<br>[vllm/model_executor/layers/rotary_embedding/base.py](../../../../sources/vllm-project__vllm/vllm/model_executor/layers/rotary_embedding/base.py)<br>[vllm/model_executor/layers/rotary_embedding/common.py](../../../../sources/vllm-project__vllm/vllm/model_executor/layers/rotary_embedding/common.py)<br>[vllm/model_executor/layers/rotary_embedding/deepseek_scaling_rope.py](../../../../sources/vllm-project__vllm/vllm/model_executor/layers/rotary_embedding/deepseek_scaling_rope.py)<br>[vllm/model_executor/layers/rotary_embedding/dual_chunk_rope.py](../../../../sources/vllm-project__vllm/vllm/model_executor/layers/rotary_embedding/dual_chunk_rope.py)<br>[vllm/model_executor/layers/rotary_embedding/dynamic_ntk_alpha_rope.py](../../../../sources/vllm-project__vllm/vllm/model_executor/layers/rotary_embedding/dynamic_ntk_alpha_rope.py) |
| spec | 164 | [vllm/v1/kv_cache_spec_registry.py](../../../../sources/vllm-project__vllm/vllm/v1/kv_cache_spec_registry.py)<br>[vllm/v1/worker/gpu/spec_decode/__init__.py](../../../../sources/vllm-project__vllm/vllm/v1/worker/gpu/spec_decode/__init__.py)<br>[vllm/v1/worker/gpu/spec_decode/rejection_sampler_utils.py](../../../../sources/vllm-project__vllm/vllm/v1/worker/gpu/spec_decode/rejection_sampler_utils.py)<br>[vllm/v1/worker/gpu/spec_decode/rejection_sampler.py](../../../../sources/vllm-project__vllm/vllm/v1/worker/gpu/spec_decode/rejection_sampler.py)<br>[vllm/v1/worker/gpu/spec_decode/speculator.py](../../../../sources/vllm-project__vllm/vllm/v1/worker/gpu/spec_decode/speculator.py)<br>[vllm/v1/worker/gpu/spec_decode/utils.py](../../../../sources/vllm-project__vllm/vllm/v1/worker/gpu/spec_decode/utils.py)<br>[vllm/v1/worker/gpu/spec_decode/mtp/__init__.py](../../../../sources/vllm-project__vllm/vllm/v1/worker/gpu/spec_decode/mtp/__init__.py)<br>[vllm/v1/worker/gpu/spec_decode/mtp/speculator.py](../../../../sources/vllm-project__vllm/vllm/v1/worker/gpu/spec_decode/mtp/speculator.py) |
| eval | 1848 | [vllm/v1/kv_cache_spec_registry.py](../../../../sources/vllm-project__vllm/vllm/v1/kv_cache_spec_registry.py)<br>[vllm/v1/worker/gpu/spec_decode/__init__.py](../../../../sources/vllm-project__vllm/vllm/v1/worker/gpu/spec_decode/__init__.py)<br>[vllm/v1/worker/gpu/spec_decode/rejection_sampler_utils.py](../../../../sources/vllm-project__vllm/vllm/v1/worker/gpu/spec_decode/rejection_sampler_utils.py)<br>[vllm/v1/worker/gpu/spec_decode/rejection_sampler.py](../../../../sources/vllm-project__vllm/vllm/v1/worker/gpu/spec_decode/rejection_sampler.py)<br>[vllm/v1/worker/gpu/spec_decode/speculator.py](../../../../sources/vllm-project__vllm/vllm/v1/worker/gpu/spec_decode/speculator.py)<br>[vllm/v1/worker/gpu/spec_decode/utils.py](../../../../sources/vllm-project__vllm/vllm/v1/worker/gpu/spec_decode/utils.py)<br>[vllm/v1/worker/gpu/spec_decode/mtp/__init__.py](../../../../sources/vllm-project__vllm/vllm/v1/worker/gpu/spec_decode/mtp/__init__.py)<br>[vllm/v1/worker/gpu/spec_decode/mtp/speculator.py](../../../../sources/vllm-project__vllm/vllm/v1/worker/gpu/spec_decode/mtp/speculator.py) |
| security | 9 | [SECURITY.md](../../../../sources/vllm-project__vllm/SECURITY.md)<br>[vllm/model_executor/layers/fla/ops/layernorm_guard.py](../../../../sources/vllm-project__vllm/vllm/model_executor/layers/fla/ops/layernorm_guard.py)<br>[vllm/distributed/eplb/policy/__init__.py](../../../../sources/vllm-project__vllm/vllm/distributed/eplb/policy/__init__.py)<br>[vllm/distributed/eplb/policy/abstract.py](../../../../sources/vllm-project__vllm/vllm/distributed/eplb/policy/abstract.py)<br>[vllm/distributed/eplb/policy/default.py](../../../../sources/vllm-project__vllm/vllm/distributed/eplb/policy/default.py)<br>[tests/kernels/test_fla_layernorm_guard.py](../../../../sources/vllm-project__vllm/tests/kernels/test_fla_layernorm_guard.py)<br>[rust/src/server/src/middleware/auth.rs](../../../../sources/vllm-project__vllm/rust/src/server/src/middleware/auth.rs)<br>[docs/usage/security.md](../../../../sources/vllm-project__vllm/docs/usage/security.md) |
| ci | 17 | [docs/contributing/ci/failures.md](../../../../sources/vllm-project__vllm/docs/contributing/ci/failures.md)<br>[docs/contributing/ci/nightly_builds.md](../../../../sources/vllm-project__vllm/docs/contributing/ci/nightly_builds.md)<br>[docs/contributing/ci/update_pytorch_version.md](../../../../sources/vllm-project__vllm/docs/contributing/ci/update_pytorch_version.md)<br>[.github/workflows/add_label_automerge.yml](../../../../sources/vllm-project__vllm/.github/workflows/add_label_automerge.yml)<br>[.github/workflows/issue_autolabel.yml](../../../../sources/vllm-project__vllm/.github/workflows/issue_autolabel.yml)<br>[.github/workflows/macos-smoke-test.yml](../../../../sources/vllm-project__vllm/.github/workflows/macos-smoke-test.yml)<br>[.github/workflows/new_pr_bot.yml](../../../../sources/vllm-project__vllm/.github/workflows/new_pr_bot.yml)<br>[.github/workflows/pre-commit.yml](../../../../sources/vllm-project__vllm/.github/workflows/pre-commit.yml) |
| container | 94 | [examples/observability/prometheus_grafana/docker-compose.yaml](../../../../sources/vllm-project__vllm/examples/observability/prometheus_grafana/docker-compose.yaml)<br>[examples/deployment/async_llm_streaming.py](../../../../sources/vllm-project__vllm/examples/deployment/async_llm_streaming.py)<br>[examples/deployment/llm_engine_example.py](../../../../sources/vllm-project__vllm/examples/deployment/llm_engine_example.py)<br>[examples/deployment/sagemaker-entrypoint.sh](../../../../sources/vllm-project__vllm/examples/deployment/sagemaker-entrypoint.sh)<br>[examples/deployment/chart-helm/.helmignore](../../../../sources/vllm-project__vllm/examples/deployment/chart-helm/.helmignore)<br>[examples/deployment/chart-helm/Chart.yaml](../../../../sources/vllm-project__vllm/examples/deployment/chart-helm/Chart.yaml)<br>[examples/deployment/chart-helm/ct.yaml](../../../../sources/vllm-project__vllm/examples/deployment/chart-helm/ct.yaml)<br>[examples/deployment/chart-helm/lintconf.yaml](../../../../sources/vllm-project__vllm/examples/deployment/chart-helm/lintconf.yaml) |
| instruction | 4 | [AGENTS.md](../../../../sources/vllm-project__vllm/AGENTS.md)<br>[CLAUDE.md](../../../../sources/vllm-project__vllm/CLAUDE.md)<br>[rust/AGENTS.md](../../../../sources/vllm-project__vllm/rust/AGENTS.md)<br>[rust/CLAUDE.md](../../../../sources/vllm-project__vllm/rust/CLAUDE.md) |
| docs | 380 | [mkdocs.yaml](../../../../sources/vllm-project__vllm/mkdocs.yaml)<br>[README.md](../../../../sources/vllm-project__vllm/README.md)<br>[vllm/v1/worker/gpu/README.md](../../../../sources/vllm-project__vllm/vllm/v1/worker/gpu/README.md)<br>[vllm/model_executor/layers/quantization/utils/configs/README.md](../../../../sources/vllm-project__vllm/vllm/model_executor/layers/quantization/utils/configs/README.md)<br>[vllm/model_executor/layers/fused_moe/configs/README](../../../../sources/vllm-project__vllm/vllm/model_executor/layers/fused_moe/configs/README)<br>[vllm/lora/ops/triton_ops/README_TUNING.md](../../../../sources/vllm-project__vllm/vllm/lora/ops/triton_ops/README_TUNING.md)<br>[vllm/distributed/kv_transfer/README.md](../../../../sources/vllm-project__vllm/vllm/distributed/kv_transfer/README.md)<br>[tools/profiler/nsys_profile_tools/README.md](../../../../sources/vllm-project__vllm/tools/profiler/nsys_profile_tools/README.md) |
| config | 34 | [pyproject.toml](../../../../sources/vllm-project__vllm/pyproject.toml)<br>[rust/Cargo.lock](../../../../sources/vllm-project__vllm/rust/Cargo.lock)<br>[rust/Cargo.toml](../../../../sources/vllm-project__vllm/rust/Cargo.toml)<br>[rust/src/tool-parser/Cargo.toml](../../../../sources/vllm-project__vllm/rust/src/tool-parser/Cargo.toml)<br>[rust/src/tool-parser/python/Cargo.toml](../../../../sources/vllm-project__vllm/rust/src/tool-parser/python/Cargo.toml)<br>[rust/src/tokenizer/Cargo.toml](../../../../sources/vllm-project__vllm/rust/src/tokenizer/Cargo.toml)<br>[rust/src/text/Cargo.toml](../../../../sources/vllm-project__vllm/rust/src/text/Cargo.toml)<br>[rust/src/server/Cargo.toml](../../../../sources/vllm-project__vllm/rust/src/server/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1848 | [vllm/v1/kv_cache_spec_registry.py](../../../../sources/vllm-project__vllm/vllm/v1/kv_cache_spec_registry.py)<br>[vllm/v1/worker/gpu/spec_decode/__init__.py](../../../../sources/vllm-project__vllm/vllm/v1/worker/gpu/spec_decode/__init__.py)<br>[vllm/v1/worker/gpu/spec_decode/rejection_sampler_utils.py](../../../../sources/vllm-project__vllm/vllm/v1/worker/gpu/spec_decode/rejection_sampler_utils.py)<br>[vllm/v1/worker/gpu/spec_decode/rejection_sampler.py](../../../../sources/vllm-project__vllm/vllm/v1/worker/gpu/spec_decode/rejection_sampler.py)<br>[vllm/v1/worker/gpu/spec_decode/speculator.py](../../../../sources/vllm-project__vllm/vllm/v1/worker/gpu/spec_decode/speculator.py)<br>[vllm/v1/worker/gpu/spec_decode/utils.py](../../../../sources/vllm-project__vllm/vllm/v1/worker/gpu/spec_decode/utils.py) |
| CI workflow | 17 | [docs/contributing/ci/failures.md](../../../../sources/vllm-project__vllm/docs/contributing/ci/failures.md)<br>[docs/contributing/ci/nightly_builds.md](../../../../sources/vllm-project__vllm/docs/contributing/ci/nightly_builds.md)<br>[docs/contributing/ci/update_pytorch_version.md](../../../../sources/vllm-project__vllm/docs/contributing/ci/update_pytorch_version.md)<br>[.github/workflows/add_label_automerge.yml](../../../../sources/vllm-project__vllm/.github/workflows/add_label_automerge.yml)<br>[.github/workflows/issue_autolabel.yml](../../../../sources/vllm-project__vllm/.github/workflows/issue_autolabel.yml)<br>[.github/workflows/macos-smoke-test.yml](../../../../sources/vllm-project__vllm/.github/workflows/macos-smoke-test.yml) |
| 컨테이너/배포 | 94 | [examples/observability/prometheus_grafana/docker-compose.yaml](../../../../sources/vllm-project__vllm/examples/observability/prometheus_grafana/docker-compose.yaml)<br>[examples/deployment/async_llm_streaming.py](../../../../sources/vllm-project__vllm/examples/deployment/async_llm_streaming.py)<br>[examples/deployment/llm_engine_example.py](../../../../sources/vllm-project__vllm/examples/deployment/llm_engine_example.py)<br>[examples/deployment/sagemaker-entrypoint.sh](../../../../sources/vllm-project__vllm/examples/deployment/sagemaker-entrypoint.sh)<br>[examples/deployment/chart-helm/.helmignore](../../../../sources/vllm-project__vllm/examples/deployment/chart-helm/.helmignore)<br>[examples/deployment/chart-helm/Chart.yaml](../../../../sources/vllm-project__vllm/examples/deployment/chart-helm/Chart.yaml) |
| 보안/정책 | 9 | [SECURITY.md](../../../../sources/vllm-project__vllm/SECURITY.md)<br>[vllm/model_executor/layers/fla/ops/layernorm_guard.py](../../../../sources/vllm-project__vllm/vllm/model_executor/layers/fla/ops/layernorm_guard.py)<br>[vllm/distributed/eplb/policy/__init__.py](../../../../sources/vllm-project__vllm/vllm/distributed/eplb/policy/__init__.py)<br>[vllm/distributed/eplb/policy/abstract.py](../../../../sources/vllm-project__vllm/vllm/distributed/eplb/policy/abstract.py)<br>[vllm/distributed/eplb/policy/default.py](../../../../sources/vllm-project__vllm/vllm/distributed/eplb/policy/default.py)<br>[tests/kernels/test_fla_layernorm_guard.py](../../../../sources/vllm-project__vllm/tests/kernels/test_fla_layernorm_guard.py) |
| 에이전트 지시문 | 4 | [AGENTS.md](../../../../sources/vllm-project__vllm/AGENTS.md)<br>[CLAUDE.md](../../../../sources/vllm-project__vllm/CLAUDE.md)<br>[rust/AGENTS.md](../../../../sources/vllm-project__vllm/rust/AGENTS.md)<br>[rust/CLAUDE.md](../../../../sources/vllm-project__vllm/rust/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `vllm/entrypoints/mcp/__init__.py`, `vllm/entrypoints/mcp/tool_server.py`, `vllm/entrypoints/mcp/tool.py`.
2. entrypoint를 따라 실행 흐름 확인: `vllm/entrypoints/cli/main.py`, `vllm/entrypoints/cli/benchmark/main.py`, `vllm/benchmarks/sweep/server.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `vllm/v1/executor/__init__.py`, `vllm/v1/executor/abstract.py`.
4. retrieval/memory/indexing 확인: `vllm/renderers/embed_utils.py`, `vllm/model_executor/layers/vocab_parallel_embedding.py`, `vllm/model_executor/layers/rotary_embedding/__init__.py`.
5. test/eval 파일로 동작 검증: `vllm/v1/kv_cache_spec_registry.py`, `vllm/v1/worker/gpu/spec_decode/__init__.py`, `vllm/v1/worker/gpu/spec_decode/rejection_sampler_utils.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 5488 files, 713 directories.. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
