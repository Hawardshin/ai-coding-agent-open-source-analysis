# areal-project/AReaL Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

The RL Bridge for LLM-based Agent Applications. Made Simple & Flexible.

## 요약

- 조사 단위: `sources/areal-project__AReaL` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,084 files, 213 directories, depth score 129, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=examples/tir/tests/test_tool_registry_lazy.py이고, 의존성 단서는 openai, anthropic, claude, langchain, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | areal-project/AReaL |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 5316 |
| Forks | 522 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/areal-project__AReaL](../../../../sources/areal-project__AReaL) |
| Existing report | [reports/global-trending/repositories/areal-project__AReaL.md](../../../global-trending/repositories/areal-project__AReaL.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1084 / 213 |
| Max observed depth | 7 |
| Top directories | .agents, .claude, .codex, .github, .opencode, areal, assets, benchmark, blog, docs, examples, notebook, scripts, tests |
| Top extensions | .py: 733, .md: 179, .yaml: 66, .png: 44, .yml: 17, .toml: 12, .sh: 7, (none): 6, .json: 5, .ipynb: 3, .jpg: 3, .lock: 2 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 60 |
| docs | documentation surface | 24 |
| examples/terminal_bench | examples workspace | 10 |
| examples/tir | examples workspace | 10 |
| examples/agent_workflow | examples workspace | 6 |
| examples/sandbox_daytona | examples workspace | 5 |
| examples/search_agent | examples workspace | 5 |
| examples/agent_service | examples workspace | 4 |
| examples/scaffolding | examples workspace | 2 |
| examples/tau2 | examples workspace | 2 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| areal | top-level component | 1 |
| assets | top-level component | 1 |
| benchmark | validation surface | 1 |
| blog | top-level component | 1 |
| examples | top-level component | 1 |
| examples/alignment | examples workspace | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic, claude |
| agentProtocols | none |
| agentFrameworks | langchain |
| vectorStores | none |
| modelRuntime | torch, transformers, vllm |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [examples/tir/tests/test_tool_registry_lazy.py](../../../../sources/areal-project__AReaL/examples/tir/tests/test_tool_registry_lazy.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/areal-project__AReaL/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/infra/sandbox/__init__.py](../../../../sources/areal-project__AReaL/tests/infra/sandbox/__init__.py) | agentRuntime signal |
| agentRuntime | [tests/infra/sandbox/test_client_manager.py](../../../../sources/areal-project__AReaL/tests/infra/sandbox/test_client_manager.py) | agentRuntime signal |
| agentRuntime | [tests/infra/sandbox/test_runner.py](../../../../sources/areal-project__AReaL/tests/infra/sandbox/test_runner.py) | agentRuntime signal |
| entrypoints | [areal/infra/rpc/guard/__main__.py](../../../../sources/areal-project__AReaL/areal/infra/rpc/guard/__main__.py) | entrypoints signal |
| entrypoints | [areal/infra/data_service/worker/__main__.py](../../../../sources/areal-project__AReaL/areal/infra/data_service/worker/__main__.py) | entrypoints signal |
| entrypoints | [areal/infra/data_service/router/__main__.py](../../../../sources/areal-project__AReaL/areal/infra/data_service/router/__main__.py) | entrypoints signal |
| entrypoints | [areal/infra/data_service/guard/__main__.py](../../../../sources/areal-project__AReaL/areal/infra/data_service/guard/__main__.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/areal-project__AReaL/CLAUDE.md) | instruction signal |
| instruction | [.codex/config.toml](../../../../sources/areal-project__AReaL/.codex/config.toml) | instruction signal |
| instruction | [.codex/agents/algorithm-expert.md](../../../../sources/areal-project__AReaL/.codex/agents/algorithm-expert.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 21 | [areal/infra/rpc/guard/__main__.py](../../../../sources/areal-project__AReaL/areal/infra/rpc/guard/__main__.py)<br>[areal/infra/data_service/worker/__main__.py](../../../../sources/areal-project__AReaL/areal/infra/data_service/worker/__main__.py)<br>[areal/infra/data_service/router/__main__.py](../../../../sources/areal-project__AReaL/areal/infra/data_service/router/__main__.py)<br>[areal/infra/data_service/guard/__main__.py](../../../../sources/areal-project__AReaL/areal/infra/data_service/guard/__main__.py)<br>[areal/infra/data_service/gateway/__main__.py](../../../../sources/areal-project__AReaL/areal/infra/data_service/gateway/__main__.py)<br>[areal/experimental/weight_update/gateway/__main__.py](../../../../sources/areal-project__AReaL/areal/experimental/weight_update/gateway/__main__.py)<br>[areal/experimental/training_service/worker/__main__.py](../../../../sources/areal-project__AReaL/areal/experimental/training_service/worker/__main__.py)<br>[areal/experimental/training_service/router/__main__.py](../../../../sources/areal-project__AReaL/areal/experimental/training_service/router/__main__.py) |
| agentRuntime | 179 | [AGENTS.md](../../../../sources/areal-project__AReaL/AGENTS.md)<br>[tests/infra/sandbox/__init__.py](../../../../sources/areal-project__AReaL/tests/infra/sandbox/__init__.py)<br>[tests/infra/sandbox/test_client_manager.py](../../../../sources/areal-project__AReaL/tests/infra/sandbox/test_client_manager.py)<br>[tests/infra/sandbox/test_runner.py](../../../../sources/areal-project__AReaL/tests/infra/sandbox/test_runner.py)<br>[tests/experimental/agent_service/__init__.py](../../../../sources/areal-project__AReaL/tests/experimental/agent_service/__init__.py)<br>[tests/experimental/agent_service/test_agent_router.py](../../../../sources/areal-project__AReaL/tests/experimental/agent_service/test_agent_router.py)<br>[tests/experimental/agent_service/test_agent_worker.py](../../../../sources/areal-project__AReaL/tests/experimental/agent_service/test_agent_worker.py)<br>[tests/experimental/agent_service/test_controller.py](../../../../sources/areal-project__AReaL/tests/experimental/agent_service/test_controller.py) |
| mcp | 1 | [examples/tir/tests/test_tool_registry_lazy.py](../../../../sources/areal-project__AReaL/examples/tir/tests/test_tool_registry_lazy.py) |
| retrieval | 2 | [tests/test_fsdp_memory_efficient_lora.py](../../../../sources/areal-project__AReaL/tests/test_fsdp_memory_efficient_lora.py)<br>[tests/torchrun/run_fsdp_memory_efficient_lora.py](../../../../sources/areal-project__AReaL/tests/torchrun/run_fsdp_memory_efficient_lora.py) |
| spec | 7 | [ROADMAP.md](../../../../sources/areal-project__AReaL/ROADMAP.md)<br>[examples/search_agent/tongyi_deepresearch/requirements.txt](../../../../sources/areal-project__AReaL/examples/search_agent/tongyi_deepresearch/requirements.txt)<br>[docs/requirements.txt](../../../../sources/areal-project__AReaL/docs/requirements.txt)<br>[areal/experimental/models/archon/model_spec.py](../../../../sources/areal-project__AReaL/areal/experimental/models/archon/model_spec.py)<br>[areal/experimental/models/archon/qwen3_5/spec.py](../../../../sources/areal-project__AReaL/areal/experimental/models/archon/qwen3_5/spec.py)<br>[areal/experimental/models/archon/qwen3/spec.py](../../../../sources/areal-project__AReaL/areal/experimental/models/archon/qwen3/spec.py)<br>[areal/experimental/models/archon/qwen2/spec.py](../../../../sources/areal-project__AReaL/areal/experimental/models/archon/qwen2/spec.py) |
| eval | 289 | [tests/__init__.py](../../../../sources/areal-project__AReaL/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/areal-project__AReaL/tests/conftest.py)<br>[tests/test_adv_norm_config.py](../../../../sources/areal-project__AReaL/tests/test_adv_norm_config.py)<br>[tests/test_allocation_mode.py](../../../../sources/areal-project__AReaL/tests/test_allocation_mode.py)<br>[tests/test_async_reward_wrapper.py](../../../../sources/areal-project__AReaL/tests/test_async_reward_wrapper.py)<br>[tests/test_async_task_runner.py](../../../../sources/areal-project__AReaL/tests/test_async_task_runner.py)<br>[tests/test_attn_impl_validation.py](../../../../sources/areal-project__AReaL/tests/test_attn_impl_validation.py)<br>[tests/test_cuda_deterministic.py](../../../../sources/areal-project__AReaL/tests/test_cuda_deterministic.py) |
| security | 34 | [tests/infra/sandbox/__init__.py](../../../../sources/areal-project__AReaL/tests/infra/sandbox/__init__.py)<br>[tests/infra/sandbox/test_client_manager.py](../../../../sources/areal-project__AReaL/tests/infra/sandbox/test_client_manager.py)<br>[tests/infra/sandbox/test_runner.py](../../../../sources/areal-project__AReaL/tests/infra/sandbox/test_runner.py)<br>[tests/infra/data_service/test_auth.py](../../../../sources/areal-project__AReaL/tests/infra/data_service/test_auth.py)<br>[tests/infra/data_service/test_guard.py](../../../../sources/areal-project__AReaL/tests/infra/data_service/test_guard.py)<br>[tests/experimental/inference_service/test_guard.py](../../../../sources/areal-project__AReaL/tests/experimental/inference_service/test_guard.py)<br>[tests/experimental/agent_service/test_guard.py](../../../../sources/areal-project__AReaL/tests/experimental/agent_service/test_guard.py)<br>[examples/sandbox_daytona/README.md](../../../../sources/areal-project__AReaL/examples/sandbox_daytona/README.md) |
| ci | 10 | [.github/workflows/bake-gcp-image.yml](../../../../sources/areal-project__AReaL/.github/workflows/bake-gcp-image.yml)<br>[.github/workflows/build-docker-image.yml](../../../../sources/areal-project__AReaL/.github/workflows/build-docker-image.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/areal-project__AReaL/.github/workflows/deploy-docs.yml)<br>[.github/workflows/install-test.yml](../../../../sources/areal-project__AReaL/.github/workflows/install-test.yml)<br>[.github/workflows/nightly.yml](../../../../sources/areal-project__AReaL/.github/workflows/nightly.yml)<br>[.github/workflows/pre-commit.yml](../../../../sources/areal-project__AReaL/.github/workflows/pre-commit.yml)<br>[.github/workflows/runner-heartbeat.yml](../../../../sources/areal-project__AReaL/.github/workflows/runner-heartbeat.yml)<br>[.github/workflows/stale-issues.yml](../../../../sources/areal-project__AReaL/.github/workflows/stale-issues.yml) |
| container | 1 | [Dockerfile](../../../../sources/areal-project__AReaL/Dockerfile) |
| instruction | 19 | [AGENTS.md](../../../../sources/areal-project__AReaL/AGENTS.md)<br>[CLAUDE.md](../../../../sources/areal-project__AReaL/CLAUDE.md)<br>[.codex/config.toml](../../../../sources/areal-project__AReaL/.codex/config.toml)<br>[.codex/agents/algorithm-expert.md](../../../../sources/areal-project__AReaL/.codex/agents/algorithm-expert.md)<br>[.codex/agents/algorithm-expert.toml](../../../../sources/areal-project__AReaL/.codex/agents/algorithm-expert.toml)<br>[.codex/agents/archon-expert.md](../../../../sources/areal-project__AReaL/.codex/agents/archon-expert.md)<br>[.codex/agents/archon-expert.toml](../../../../sources/areal-project__AReaL/.codex/agents/archon-expert.toml)<br>[.codex/agents/code-verifier.md](../../../../sources/areal-project__AReaL/.codex/agents/code-verifier.md) |
| docs | 117 | [README.md](../../../../sources/areal-project__AReaL/README.md)<br>[examples/vlm_npu/README.md](../../../../sources/areal-project__AReaL/examples/vlm_npu/README.md)<br>[examples/tir/README_zh.md](../../../../sources/areal-project__AReaL/examples/tir/README_zh.md)<br>[examples/tir/README.md](../../../../sources/areal-project__AReaL/examples/tir/README.md)<br>[examples/terminal_bench/README.md](../../../../sources/areal-project__AReaL/examples/terminal_bench/README.md)<br>[examples/tau2/README.md](../../../../sources/areal-project__AReaL/examples/tau2/README.md)<br>[examples/skypilot/README.md](../../../../sources/areal-project__AReaL/examples/skypilot/README.md)<br>[examples/search_agent/tongyi_deepresearch/README.md](../../../../sources/areal-project__AReaL/examples/search_agent/tongyi_deepresearch/README.md) |
| config | 5 | [pyproject.toml](../../../../sources/areal-project__AReaL/pyproject.toml)<br>[uv.lock](../../../../sources/areal-project__AReaL/uv.lock)<br>[examples/terminal_bench/pyproject.toml](../../../../sources/areal-project__AReaL/examples/terminal_bench/pyproject.toml)<br>[examples/search_agent/tongyi_deepresearch/requirements.txt](../../../../sources/areal-project__AReaL/examples/search_agent/tongyi_deepresearch/requirements.txt)<br>[docs/requirements.txt](../../../../sources/areal-project__AReaL/docs/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 289 | [tests/__init__.py](../../../../sources/areal-project__AReaL/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/areal-project__AReaL/tests/conftest.py)<br>[tests/test_adv_norm_config.py](../../../../sources/areal-project__AReaL/tests/test_adv_norm_config.py)<br>[tests/test_allocation_mode.py](../../../../sources/areal-project__AReaL/tests/test_allocation_mode.py)<br>[tests/test_async_reward_wrapper.py](../../../../sources/areal-project__AReaL/tests/test_async_reward_wrapper.py)<br>[tests/test_async_task_runner.py](../../../../sources/areal-project__AReaL/tests/test_async_task_runner.py) |
| CI workflows | 10 | [.github/workflows/bake-gcp-image.yml](../../../../sources/areal-project__AReaL/.github/workflows/bake-gcp-image.yml)<br>[.github/workflows/build-docker-image.yml](../../../../sources/areal-project__AReaL/.github/workflows/build-docker-image.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/areal-project__AReaL/.github/workflows/deploy-docs.yml)<br>[.github/workflows/install-test.yml](../../../../sources/areal-project__AReaL/.github/workflows/install-test.yml)<br>[.github/workflows/nightly.yml](../../../../sources/areal-project__AReaL/.github/workflows/nightly.yml)<br>[.github/workflows/pre-commit.yml](../../../../sources/areal-project__AReaL/.github/workflows/pre-commit.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/areal-project__AReaL/Dockerfile) |
| Security / policy | 34 | [tests/infra/sandbox/__init__.py](../../../../sources/areal-project__AReaL/tests/infra/sandbox/__init__.py)<br>[tests/infra/sandbox/test_client_manager.py](../../../../sources/areal-project__AReaL/tests/infra/sandbox/test_client_manager.py)<br>[tests/infra/sandbox/test_runner.py](../../../../sources/areal-project__AReaL/tests/infra/sandbox/test_runner.py)<br>[tests/infra/data_service/test_auth.py](../../../../sources/areal-project__AReaL/tests/infra/data_service/test_auth.py)<br>[tests/infra/data_service/test_guard.py](../../../../sources/areal-project__AReaL/tests/infra/data_service/test_guard.py)<br>[tests/experimental/inference_service/test_guard.py](../../../../sources/areal-project__AReaL/tests/experimental/inference_service/test_guard.py) |
| Agent instructions | 19 | [AGENTS.md](../../../../sources/areal-project__AReaL/AGENTS.md)<br>[CLAUDE.md](../../../../sources/areal-project__AReaL/CLAUDE.md)<br>[.codex/config.toml](../../../../sources/areal-project__AReaL/.codex/config.toml)<br>[.codex/agents/algorithm-expert.md](../../../../sources/areal-project__AReaL/.codex/agents/algorithm-expert.md)<br>[.codex/agents/algorithm-expert.toml](../../../../sources/areal-project__AReaL/.codex/agents/algorithm-expert.toml)<br>[.codex/agents/archon-expert.md](../../../../sources/areal-project__AReaL/.codex/agents/archon-expert.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `examples/tir/tests/test_tool_registry_lazy.py`, `AGENTS.md`, `tests/infra/sandbox/__init__.py`.
2. Trace execution through entrypoints: `areal/infra/rpc/guard/__main__.py`, `areal/infra/data_service/worker/__main__.py`, `areal/infra/data_service/router/__main__.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/infra/sandbox/__init__.py`, `tests/infra/sandbox/test_client_manager.py`.
4. Inspect retrieval/memory/indexing through: `tests/test_fsdp_memory_efficient_lora.py`, `tests/torchrun/run_fsdp_memory_efficient_lora.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/test_adv_norm_config.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 The RL Bridge for LLM based Agent Applications. Made Simple & Flexible.. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, README.md, AGENTS.md, CLAUDE.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
