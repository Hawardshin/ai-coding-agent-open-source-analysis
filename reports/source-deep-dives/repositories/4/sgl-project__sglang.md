# sgl-project/sglang 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 6477 files, 1022 directories.

## 요약

- 조사 단위: `sources/sgl-project__sglang` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 6,477 files, 1,022 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=sgl-model-gateway/src/main.rs, sgl-model-gateway/src/server.rs, sgl-model-gateway/bindings/python/src/sglang_router/__main__.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | sgl-project/sglang |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 29137 |
| Forks | 6585 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/sgl-project__sglang](../../../../sources/sgl-project__sglang) |
| 기존 보고서 | [reports/global-trending/repositories/sgl-project__sglang.md](../../../global-trending/repositories/sgl-project__sglang.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 6477 / 1022 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .claude, .devcontainer, .github, 3rdparty, assets, benchmark, docker, docs, docs_new, examples, experimental, proto, python, rust, scripts, sgl-kernel, sgl-model-gateway, test |
| 상위 확장자 | .py: 4134, .json: 558, .rs: 348, .md: 281, .mdx: 237, .cuh: 136, .yml: 92, .jsx: 81, .yaml: 77, .sh: 69, .cu: 62, .h: 61 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 4 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| 3rdparty | top-level component | 1 |
| assets | top-level component | 1 |
| benchmark | validation surface | 1 |
| docker | documentation surface | 1 |
| docs_new | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/frontend_language | examples workspace | 1 |
| examples/monitoring | examples workspace | 1 |
| experimental | top-level component | 1 |
| proto | top-level component | 1 |
| python | top-level component | 1 |
| rust | top-level component | 1 |
| scripts | top-level component | 1 |
| sgl-kernel | top-level component | 1 |
| sgl-model-gateway | top-level component | 1 |


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
| entrypoints | [sgl-model-gateway/src/main.rs](../../../../sources/sgl-project__sglang/sgl-model-gateway/src/main.rs) | entrypoints signal |
| entrypoints | [sgl-model-gateway/src/server.rs](../../../../sources/sgl-project__sglang/sgl-model-gateway/src/server.rs) | entrypoints signal |
| entrypoints | [sgl-model-gateway/bindings/python/src/sglang_router/__main__.py](../../../../sources/sgl-project__sglang/sgl-model-gateway/bindings/python/src/sglang_router/__main__.py) | entrypoints signal |
| entrypoints | [sgl-model-gateway/bindings/golang/examples/streaming/main.go](../../../../sources/sgl-project__sglang/sgl-model-gateway/bindings/golang/examples/streaming/main.go) | entrypoints signal |
| container | [sgl-model-gateway/e2e_test/k8s_integration/Dockerfile.gateway](../../../../sources/sgl-project__sglang/sgl-model-gateway/e2e_test/k8s_integration/Dockerfile.gateway) | container signal |
| container | [sgl-kernel/Dockerfile](../../../../sources/sgl-project__sglang/sgl-kernel/Dockerfile) | container signal |
| container | [experimental/sgl-router/tests/e2e/k8s_integration/Dockerfile.fake_worker](../../../../sources/sgl-project__sglang/experimental/sgl-router/tests/e2e/k8s_integration/Dockerfile.fake_worker) | container signal |
| container | [experimental/sgl-router/tests/e2e/k8s_integration/Dockerfile.router](../../../../sources/sgl-project__sglang/experimental/sgl-router/tests/e2e/k8s_integration/Dockerfile.router) | container signal |
| config | [sgl-model-gateway/Cargo.toml](../../../../sources/sgl-project__sglang/sgl-model-gateway/Cargo.toml) | config signal |
| config | [sgl-model-gateway/Makefile](../../../../sources/sgl-project__sglang/sgl-model-gateway/Makefile) | config signal |
| config | [sgl-model-gateway/examples/wasm/wasm-guest-ratelimit/Cargo.toml](../../../../sources/sgl-project__sglang/sgl-model-gateway/examples/wasm/wasm-guest-ratelimit/Cargo.toml) | config signal |
| config | [sgl-model-gateway/examples/wasm/wasm-guest-logging/Cargo.toml](../../../../sources/sgl-project__sglang/sgl-model-gateway/examples/wasm/wasm-guest-logging/Cargo.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 18 | [sgl-model-gateway/src/main.rs](../../../../sources/sgl-project__sglang/sgl-model-gateway/src/main.rs)<br>[sgl-model-gateway/src/server.rs](../../../../sources/sgl-project__sglang/sgl-model-gateway/src/server.rs)<br>[sgl-model-gateway/bindings/python/src/sglang_router/__main__.py](../../../../sources/sgl-project__sglang/sgl-model-gateway/bindings/python/src/sglang_router/__main__.py)<br>[sgl-model-gateway/bindings/golang/examples/streaming/main.go](../../../../sources/sgl-project__sglang/sgl-model-gateway/bindings/golang/examples/streaming/main.go)<br>[sgl-model-gateway/bindings/golang/examples/simple/main.go](../../../../sources/sgl-project__sglang/sgl-model-gateway/bindings/golang/examples/simple/main.go)<br>[sgl-model-gateway/bindings/golang/examples/oai_server/main.go](../../../../sources/sgl-project__sglang/sgl-model-gateway/bindings/golang/examples/oai_server/main.go)<br>[rust/sglang-grpc/src/server.rs](../../../../sources/sgl-project__sglang/rust/sglang-grpc/src/server.rs)<br>[python/sglang/srt/debug_utils/schedule_simulator/__main__.py](../../../../sources/sgl-project__sglang/python/sglang/srt/debug_utils/schedule_simulator/__main__.py) |
| agentRuntime | 220 | [test/registered/unit/tools/test_docker_build_metadata_args.py](../../../../sources/sgl-project__sglang/test/registered/unit/tools/test_docker_build_metadata_args.py)<br>[test/registered/unit/tools/test_get_version_tag.py](../../../../sources/sgl-project__sglang/test/registered/unit/tools/test_get_version_tag.py)<br>[test/registered/ascend/llm_models/tool_chat_template_c4ai_command_r_v01.jinja](../../../../sources/sgl-project__sglang/test/registered/ascend/llm_models/tool_chat_template_c4ai_command_r_v01.jinja)<br>[test/registered/ascend/basic_function/memory_and_scheduling/test_npu_no_chunked_prefill.py](../../../../sources/sgl-project__sglang/test/registered/ascend/basic_function/memory_and_scheduling/test_npu_no_chunked_prefill.py)<br>[sgl-model-gateway/src/routers/openai/context.rs](../../../../sources/sgl-project__sglang/sgl-model-gateway/src/routers/openai/context.rs)<br>[sgl-model-gateway/src/routers/openai/responses/tool_handler.rs](../../../../sources/sgl-project__sglang/sgl-model-gateway/src/routers/openai/responses/tool_handler.rs)<br>[sgl-model-gateway/src/routers/grpc/context.rs](../../../../sources/sgl-project__sglang/sgl-model-gateway/src/routers/grpc/context.rs)<br>[sgl-model-gateway/src/routers/grpc/common/responses/context.rs](../../../../sources/sgl-project__sglang/sgl-model-gateway/src/routers/grpc/common/responses/context.rs) |
| mcp | 5 | [sgl-model-gateway/tests/mcp_test.rs](../../../../sources/sgl-project__sglang/sgl-model-gateway/tests/mcp_test.rs)<br>[sgl-model-gateway/tests/common/mock_mcp_server.rs](../../../../sources/sgl-project__sglang/sgl-model-gateway/tests/common/mock_mcp_server.rs)<br>[sgl-model-gateway/src/routers/mcp_utils.rs](../../../../sources/sgl-project__sglang/sgl-model-gateway/src/routers/mcp_utils.rs)<br>[sgl-model-gateway/src/routers/openai/responses/mcp.rs](../../../../sources/sgl-project__sglang/sgl-model-gateway/src/routers/openai/responses/mcp.rs)<br>[sgl-model-gateway/src/core/steps/mcp_registration.rs](../../../../sources/sgl-project__sglang/sgl-model-gateway/src/core/steps/mcp_registration.rs) |
| retrieval | 200 | [test/srt/cpu/test_cpu_graph.py](../../../../sources/sgl-project__sglang/test/srt/cpu/test_cpu_graph.py)<br>[test/registered/xpu/test_xpu_embedding.py](../../../../sources/sgl-project__sglang/test/registered/xpu/test_xpu_embedding.py)<br>[test/registered/unit/model_executor/test_cuda_graph_buffer_registry.py](../../../../sources/sgl-project__sglang/test/registered/unit/model_executor/test_cuda_graph_buffer_registry.py)<br>[test/registered/unit/mem_cache/test_embedding_cache_controller.py](../../../../sources/sgl-project__sglang/test/registered/unit/mem_cache/test_embedding_cache_controller.py)<br>[test/registered/unit/entrypoints/openai/test_serving_embedding.py](../../../../sources/sgl-project__sglang/test/registered/unit/entrypoints/openai/test_serving_embedding.py)<br>[test/registered/rl/test_multi_instance_release_memory_occupation.py](../../../../sources/sgl-project__sglang/test/registered/rl/test_multi_instance_release_memory_occupation.py)<br>[test/registered/rl/test_release_memory_occupation.py](../../../../sources/sgl-project__sglang/test/registered/rl/test_release_memory_occupation.py)<br>[test/registered/prefill_only/test_embed_overrides.py](../../../../sources/sgl-project__sglang/test/registered/prefill_only/test_embed_overrides.py) |
| spec | 75 | [test/registered/unit/spec/test_adaptive_spec_params.py](../../../../sources/sgl-project__sglang/test/registered/unit/spec/test_adaptive_spec_params.py)<br>[test/registered/unit/spec/test_decode_bookkeeping_ownership.py](../../../../sources/sgl-project__sglang/test/registered/unit/spec/test_decode_bookkeeping_ownership.py)<br>[test/registered/unit/spec/test_eagle_worker_v2_topk1_fastpath.py](../../../../sources/sgl-project__sglang/test/registered/unit/spec/test_eagle_worker_v2_topk1_fastpath.py)<br>[test/registered/unit/spec/test_ngram_corpus.py](../../../../sources/sgl-project__sglang/test/registered/unit/spec/test_ngram_corpus.py)<br>[test/registered/unit/spec/test_resolve_swa_kv_pool.py](../../../../sources/sgl-project__sglang/test/registered/unit/spec/test_resolve_swa_kv_pool.py)<br>[test/registered/unit/spec/test_spec_registry.py](../../../../sources/sgl-project__sglang/test/registered/unit/spec/test_spec_registry.py)<br>[test/registered/unit/spec/test_spec_utils_traverse_tree.py](../../../../sources/sgl-project__sglang/test/registered/unit/spec/test_spec_utils_traverse_tree.py)<br>[test/registered/spec/test_constrained_decoding_spec_reasoning.py](../../../../sources/sgl-project__sglang/test/registered/spec/test_constrained_decoding_spec_reasoning.py) |
| eval | 2242 | [test/pytest.ini](../../../../sources/sgl-project__sglang/test/pytest.ini)<br>[test/README.md](../../../../sources/sgl-project__sglang/test/README.md)<br>[test/run_suite.py](../../../../sources/sgl-project__sglang/test/run_suite.py)<br>[test/srt/run_suite.py](../../../../sources/sgl-project__sglang/test/srt/run_suite.py)<br>[test/srt/cpu/test_activation.py](../../../../sources/sgl-project__sglang/test/srt/cpu/test_activation.py)<br>[test/srt/cpu/test_binding.py](../../../../sources/sgl-project__sglang/test/srt/cpu/test_binding.py)<br>[test/srt/cpu/test_bmm.py](../../../../sources/sgl-project__sglang/test/srt/cpu/test_bmm.py)<br>[test/srt/cpu/test_causal_conv1d.py](../../../../sources/sgl-project__sglang/test/srt/cpu/test_causal_conv1d.py) |
| security | 35 | [test/registered/unit/utils/test_auth.py](../../../../sources/sgl-project__sglang/test/registered/unit/utils/test_auth.py)<br>[test/registered/unit/utils/test_http_server_auth.py](../../../../sources/sgl-project__sglang/test/registered/unit/utils/test_http_server_auth.py)<br>[test/registered/unit/mem_cache/test_evict_policy.py](../../../../sources/sgl-project__sglang/test/registered/unit/mem_cache/test_evict_policy.py)<br>[test/registered/lora/test_lora_eviction_policy.py](../../../../sources/sgl-project__sglang/test/registered/lora/test_lora_eviction_policy.py)<br>[test/registered/layers/test_fla_layernorm_guard.py](../../../../sources/sgl-project__sglang/test/registered/layers/test_fla_layernorm_guard.py)<br>[test/manual/test_schedule_policy.py](../../../../sources/sgl-project__sglang/test/manual/test_schedule_policy.py)<br>[sgl-model-gateway/tests/load_guard_raii_test.rs](../../../../sources/sgl-project__sglang/sgl-model-gateway/tests/load_guard_raii_test.rs)<br>[sgl-model-gateway/tests/security_tests.rs](../../../../sources/sgl-project__sglang/sgl-model-gateway/tests/security_tests.rs) |
| ci | 149 | [scripts/ci/check_no_docs_changes.py](../../../../sources/sgl-project__sglang/scripts/ci/check_no_docs_changes.py)<br>[scripts/ci/check_no_registered_tests_in_package.py](../../../../sources/sgl-project__sglang/scripts/ci/check_no_registered_tests_in_package.py)<br>[scripts/ci/check_registered_tests.py](../../../../sources/sgl-project__sglang/scripts/ci/check_registered_tests.py)<br>[scripts/ci/check_workflow_job_names.py](../../../../sources/sgl-project__sglang/scripts/ci/check_workflow_job_names.py)<br>[scripts/ci/runner_configs.py](../../../../sources/sgl-project__sglang/scripts/ci/runner_configs.py)<br>[scripts/ci/runner_configs.yml](../../../../sources/sgl-project__sglang/scripts/ci/runner_configs.yml)<br>[scripts/ci/update_est_time.py](../../../../sources/sgl-project__sglang/scripts/ci/update_est_time.py)<br>[scripts/ci/xpu/xpu_ci_start_container.sh](../../../../sources/sgl-project__sglang/scripts/ci/xpu/xpu_ci_start_container.sh) |
| container | 9 | [sgl-model-gateway/e2e_test/k8s_integration/Dockerfile.gateway](../../../../sources/sgl-project__sglang/sgl-model-gateway/e2e_test/k8s_integration/Dockerfile.gateway)<br>[sgl-kernel/Dockerfile](../../../../sources/sgl-project__sglang/sgl-kernel/Dockerfile)<br>[experimental/sgl-router/tests/e2e/k8s_integration/Dockerfile.fake_worker](../../../../sources/sgl-project__sglang/experimental/sgl-router/tests/e2e/k8s_integration/Dockerfile.fake_worker)<br>[experimental/sgl-router/tests/e2e/k8s_integration/Dockerfile.router](../../../../sources/sgl-project__sglang/experimental/sgl-router/tests/e2e/k8s_integration/Dockerfile.router)<br>[examples/monitoring/docker-compose.yaml](../../../../sources/sgl-project__sglang/examples/monitoring/docker-compose.yaml)<br>[examples/frontend_language/usage/triton/Dockerfile](../../../../sources/sgl-project__sglang/examples/frontend_language/usage/triton/Dockerfile)<br>[docker/compose.yaml](../../../../sources/sgl-project__sglang/docker/compose.yaml)<br>[docker/Dockerfile](../../../../sources/sgl-project__sglang/docker/Dockerfile) |
| instruction | 2 | [python/sglang/multimodal_gen/.claude/CLAUDE.md](../../../../sources/sgl-project__sglang/python/sglang/multimodal_gen/.claude/CLAUDE.md)<br>[docs_new/AGENTS.md](../../../../sources/sgl-project__sglang/docs_new/AGENTS.md) |
| docs | 432 | [README.md](../../../../sources/sgl-project__sglang/README.md)<br>[test/README.md](../../../../sources/sgl-project__sglang/test/README.md)<br>[test/registered/README.md](../../../../sources/sgl-project__sglang/test/registered/README.md)<br>[test/registered/unit/README.md](../../../../sources/sgl-project__sglang/test/registered/unit/README.md)<br>[test/registered/attention/unittests/swa/README.md](../../../../sources/sgl-project__sglang/test/registered/attention/unittests/swa/README.md)<br>[test/registered/attention/unittests/mla/README.md](../../../../sources/sgl-project__sglang/test/registered/attention/unittests/mla/README.md)<br>[test/registered/attention/unittests/mamba/README.md](../../../../sources/sgl-project__sglang/test/registered/attention/unittests/mamba/README.md)<br>[test/registered/attention/unittests/lightning/README.md](../../../../sources/sgl-project__sglang/test/registered/attention/unittests/lightning/README.md) |
| config | 24 | [sgl-model-gateway/Cargo.toml](../../../../sources/sgl-project__sglang/sgl-model-gateway/Cargo.toml)<br>[sgl-model-gateway/Makefile](../../../../sources/sgl-project__sglang/sgl-model-gateway/Makefile)<br>[sgl-model-gateway/examples/wasm/wasm-guest-ratelimit/Cargo.toml](../../../../sources/sgl-project__sglang/sgl-model-gateway/examples/wasm/wasm-guest-ratelimit/Cargo.toml)<br>[sgl-model-gateway/examples/wasm/wasm-guest-logging/Cargo.toml](../../../../sources/sgl-project__sglang/sgl-model-gateway/examples/wasm/wasm-guest-logging/Cargo.toml)<br>[sgl-model-gateway/examples/wasm/wasm-guest-auth/Cargo.toml](../../../../sources/sgl-project__sglang/sgl-model-gateway/examples/wasm/wasm-guest-auth/Cargo.toml)<br>[sgl-model-gateway/e2e_test/pyproject.toml](../../../../sources/sgl-project__sglang/sgl-model-gateway/e2e_test/pyproject.toml)<br>[sgl-model-gateway/bindings/python/Cargo.toml](../../../../sources/sgl-project__sglang/sgl-model-gateway/bindings/python/Cargo.toml)<br>[sgl-model-gateway/bindings/python/pyproject.toml](../../../../sources/sgl-project__sglang/sgl-model-gateway/bindings/python/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 2242 | [test/pytest.ini](../../../../sources/sgl-project__sglang/test/pytest.ini)<br>[test/README.md](../../../../sources/sgl-project__sglang/test/README.md)<br>[test/run_suite.py](../../../../sources/sgl-project__sglang/test/run_suite.py)<br>[test/srt/run_suite.py](../../../../sources/sgl-project__sglang/test/srt/run_suite.py)<br>[test/srt/cpu/test_activation.py](../../../../sources/sgl-project__sglang/test/srt/cpu/test_activation.py)<br>[test/srt/cpu/test_binding.py](../../../../sources/sgl-project__sglang/test/srt/cpu/test_binding.py) |
| CI workflow | 149 | [scripts/ci/check_no_docs_changes.py](../../../../sources/sgl-project__sglang/scripts/ci/check_no_docs_changes.py)<br>[scripts/ci/check_no_registered_tests_in_package.py](../../../../sources/sgl-project__sglang/scripts/ci/check_no_registered_tests_in_package.py)<br>[scripts/ci/check_registered_tests.py](../../../../sources/sgl-project__sglang/scripts/ci/check_registered_tests.py)<br>[scripts/ci/check_workflow_job_names.py](../../../../sources/sgl-project__sglang/scripts/ci/check_workflow_job_names.py)<br>[scripts/ci/runner_configs.py](../../../../sources/sgl-project__sglang/scripts/ci/runner_configs.py)<br>[scripts/ci/runner_configs.yml](../../../../sources/sgl-project__sglang/scripts/ci/runner_configs.yml) |
| 컨테이너/배포 | 9 | [sgl-model-gateway/e2e_test/k8s_integration/Dockerfile.gateway](../../../../sources/sgl-project__sglang/sgl-model-gateway/e2e_test/k8s_integration/Dockerfile.gateway)<br>[sgl-kernel/Dockerfile](../../../../sources/sgl-project__sglang/sgl-kernel/Dockerfile)<br>[experimental/sgl-router/tests/e2e/k8s_integration/Dockerfile.fake_worker](../../../../sources/sgl-project__sglang/experimental/sgl-router/tests/e2e/k8s_integration/Dockerfile.fake_worker)<br>[experimental/sgl-router/tests/e2e/k8s_integration/Dockerfile.router](../../../../sources/sgl-project__sglang/experimental/sgl-router/tests/e2e/k8s_integration/Dockerfile.router)<br>[examples/monitoring/docker-compose.yaml](../../../../sources/sgl-project__sglang/examples/monitoring/docker-compose.yaml)<br>[examples/frontend_language/usage/triton/Dockerfile](../../../../sources/sgl-project__sglang/examples/frontend_language/usage/triton/Dockerfile) |
| 보안/정책 | 35 | [test/registered/unit/utils/test_auth.py](../../../../sources/sgl-project__sglang/test/registered/unit/utils/test_auth.py)<br>[test/registered/unit/utils/test_http_server_auth.py](../../../../sources/sgl-project__sglang/test/registered/unit/utils/test_http_server_auth.py)<br>[test/registered/unit/mem_cache/test_evict_policy.py](../../../../sources/sgl-project__sglang/test/registered/unit/mem_cache/test_evict_policy.py)<br>[test/registered/lora/test_lora_eviction_policy.py](../../../../sources/sgl-project__sglang/test/registered/lora/test_lora_eviction_policy.py)<br>[test/registered/layers/test_fla_layernorm_guard.py](../../../../sources/sgl-project__sglang/test/registered/layers/test_fla_layernorm_guard.py)<br>[test/manual/test_schedule_policy.py](../../../../sources/sgl-project__sglang/test/manual/test_schedule_policy.py) |
| 에이전트 지시문 | 2 | [python/sglang/multimodal_gen/.claude/CLAUDE.md](../../../../sources/sgl-project__sglang/python/sglang/multimodal_gen/.claude/CLAUDE.md)<br>[docs_new/AGENTS.md](../../../../sources/sgl-project__sglang/docs_new/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `sgl-model-gateway/src/main.rs`, `sgl-model-gateway/src/server.rs`, `sgl-model-gateway/bindings/python/src/sglang_router/__main__.py`.
2. entrypoint를 따라 실행 흐름 확인: `sgl-model-gateway/src/main.rs`, `sgl-model-gateway/src/server.rs`, `sgl-model-gateway/bindings/python/src/sglang_router/__main__.py`.
3. agent/tool runtime 매핑: `test/registered/unit/tools/test_docker_build_metadata_args.py`, `test/registered/unit/tools/test_get_version_tag.py`, `test/registered/ascend/llm_models/tool_chat_template_c4ai_command_r_v01.jinja`.
4. retrieval/memory/indexing 확인: `test/srt/cpu/test_cpu_graph.py`, `test/registered/xpu/test_xpu_embedding.py`, `test/registered/unit/model_executor/test_cuda_graph_buffer_registry.py`.
5. test/eval 파일로 동작 검증: `test/pytest.ini`, `test/README.md`, `test/run_suite.py`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Local clone structure analysis 6477 files, 1022 directories.. 핵심 구조 신호는 Python, README.md, LICENSE, tests, ci, docs이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
