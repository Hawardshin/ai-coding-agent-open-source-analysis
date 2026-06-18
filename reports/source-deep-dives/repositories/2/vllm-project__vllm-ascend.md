# vllm-project/vllm-ascend Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Community maintained hardware plugin for vLLM on Ascend

## 요약

- 조사 단위: `sources/vllm-project__vllm-ascend` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,793 files, 594 directories, depth score 121, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 container=Dockerfile, Dockerfile.310p, Dockerfile.310p.openEuler이고, 의존성 단서는 fastapi, express, torch, transformers, vllm, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | vllm-project/vllm-ascend |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | C++ |
| Stars | 2258 |
| Forks | 1411 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/vllm-project__vllm-ascend](../../../../sources/vllm-project__vllm-ascend) |
| Existing report | [reports/global-trending/repositories/vllm-project__vllm-ascend.md](../../../global-trending/repositories/vllm-project__vllm-ascend.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2793 / 594 |
| Max observed depth | 9 |
| Top directories | .agents, .claude, .gemini, .github, benchmarks, cmake, csrc, docs, examples, tests, tools, vllm_ascend |
| Top extensions | .py: 924, .h: 710, .cpp: 299, .md: 176, .po: 136, .txt: 127, .yaml: 118, .hpp: 63, .cmake: 48, .sh: 47, .png: 36, .yml: 22 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 53 |
| docs | documentation surface | 45 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| cmake | top-level component | 1 |
| csrc | source boundary | 1 |
| examples | top-level component | 1 |
| examples/external_online_dp | examples workspace | 1 |
| examples/offline_embed.py | examples workspace | 1 |
| examples/prompt_embed_inference.py | examples workspace | 1 |
| examples/prompt_embedding_inference.py | examples workspace | 1 |
| tools | top-level component | 1 |
| vllm_ascend | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch, transformers, vllm |
| webRuntime | fastapi, express |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| container | [Dockerfile](../../../../sources/vllm-project__vllm-ascend/Dockerfile) | container signal |
| container | [Dockerfile.310p](../../../../sources/vllm-project__vllm-ascend/Dockerfile.310p) | container signal |
| container | [Dockerfile.310p.openEuler](../../../../sources/vllm-project__vllm-ascend/Dockerfile.310p.openEuler) | container signal |
| container | [Dockerfile.a3](../../../../sources/vllm-project__vllm-ascend/Dockerfile.a3) | container signal |
| config | [pyproject.toml](../../../../sources/vllm-project__vllm-ascend/pyproject.toml) | config signal |
| config | [requirements-dev.txt](../../../../sources/vllm-project__vllm-ascend/requirements-dev.txt) | config signal |
| config | [requirements-lint.txt](../../../../sources/vllm-project__vllm-ascend/requirements-lint.txt) | config signal |
| config | [requirements.txt](../../../../sources/vllm-project__vllm-ascend/requirements.txt) | config signal |
| ci | [.github/workflows/_e2e_nightly_multi_node.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_e2e_nightly_multi_node.yaml) | ci signal |
| ci | [.github/workflows/_e2e_nightly_single_node_models.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_e2e_nightly_single_node_models.yaml) | ci signal |
| ci | [.github/workflows/_e2e_nightly_single_node.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_e2e_nightly_single_node.yaml) | ci signal |
| ci | [.github/workflows/_nightly_image_build.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_nightly_image_build.yaml) | ci signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 65 | [AGENTS.md](../../../../sources/vllm-project__vllm-ascend/AGENTS.md)<br>[vllm_ascend/model_loader/netloader/executor/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/model_loader/netloader/executor/__init__.py)<br>[vllm_ascend/model_loader/netloader/executor/elastic_load.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/model_loader/netloader/executor/elastic_load.py)<br>[vllm_ascend/model_loader/netloader/executor/netloader_pg.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/model_loader/netloader/executor/netloader_pg.py)<br>[vllm_ascend/attention/context_parallel/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/attention/context_parallel/__init__.py)<br>[vllm_ascend/attention/context_parallel/attention_cp.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/attention/context_parallel/attention_cp.py)<br>[vllm_ascend/attention/context_parallel/common_cp.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/attention/context_parallel/common_cp.py)<br>[vllm_ascend/attention/context_parallel/dsa_cp.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/attention/context_parallel/dsa_cp.py) |
| mcp | 0 | not obvious |
| retrieval | 161 | [vllm_ascend/worker/encoder_acl_graph.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/encoder_acl_graph.py)<br>[vllm_ascend/patch/platform/patch_profiling_chunk.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/patch/platform/patch_profiling_chunk.py)<br>[vllm_ascend/ops/rotary_embedding.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/ops/rotary_embedding.py)<br>[vllm_ascend/ops/vocab_parallel_embedding.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/ops/vocab_parallel_embedding.py)<br>[vllm_ascend/ops/triton/gdn_chunk_meta.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/ops/triton/gdn_chunk_meta.py)<br>[vllm_ascend/ops/triton/fla/chunk_delta_h.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/ops/triton/fla/chunk_delta_h.py)<br>[vllm_ascend/ops/triton/fla/chunk_delta_hupdate.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/ops/triton/fla/chunk_delta_hupdate.py)<br>[vllm_ascend/ops/triton/fla/chunk_o_update.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/ops/triton/fla/chunk_o_update.py) |
| spec | 83 | [requirements-dev.txt](../../../../sources/vllm-project__vllm-ascend/requirements-dev.txt)<br>[requirements-lint.txt](../../../../sources/vllm-project__vllm-ascend/requirements-lint.txt)<br>[requirements.txt](../../../../sources/vllm-project__vllm-ascend/requirements.txt)<br>[vllm_ascend/worker/v2/spec_decode/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/__init__.py)<br>[vllm_ascend/worker/v2/spec_decode/rejection_sampler_utils.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/rejection_sampler_utils.py)<br>[vllm_ascend/worker/v2/spec_decode/eagle/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/eagle/__init__.py)<br>[vllm_ascend/worker/v2/spec_decode/eagle/aclgraph.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/eagle/aclgraph.py)<br>[vllm_ascend/worker/v2/spec_decode/eagle/speculator.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/eagle/speculator.py) |
| eval | 588 | [vllm_ascend/worker/v2/spec_decode/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/__init__.py)<br>[vllm_ascend/worker/v2/spec_decode/rejection_sampler_utils.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/rejection_sampler_utils.py)<br>[vllm_ascend/worker/v2/spec_decode/eagle/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/eagle/__init__.py)<br>[vllm_ascend/worker/v2/spec_decode/eagle/aclgraph.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/eagle/aclgraph.py)<br>[vllm_ascend/worker/v2/spec_decode/eagle/speculator.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/eagle/speculator.py)<br>[vllm_ascend/spec_decode/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/spec_decode/__init__.py)<br>[vllm_ascend/spec_decode/dflash_proposer.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/spec_decode/dflash_proposer.py)<br>[vllm_ascend/spec_decode/draft_proposer.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/spec_decode/draft_proposer.py) |
| security | 19 | [vllm_ascend/ops/triton/fla/layernorm_guard.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/ops/triton/fla/layernorm_guard.py)<br>[vllm_ascend/eplb/core/policy/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/__init__.py)<br>[vllm_ascend/eplb/core/policy/policy_abstract.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/policy_abstract.py)<br>[vllm_ascend/eplb/core/policy/policy_default_eplb.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/policy_default_eplb.py)<br>[vllm_ascend/eplb/core/policy/policy_factory.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/policy_factory.py)<br>[vllm_ascend/eplb/core/policy/policy_flashlb.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/policy_flashlb.py)<br>[vllm_ascend/eplb/core/policy/policy_random.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/policy_random.py)<br>[vllm_ascend/eplb/core/policy/policy_swift_balancer.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/policy_swift_balancer.py) |
| ci | 56 | [.github/workflows/_e2e_nightly_multi_node.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_e2e_nightly_multi_node.yaml)<br>[.github/workflows/_e2e_nightly_single_node_models.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_e2e_nightly_single_node_models.yaml)<br>[.github/workflows/_e2e_nightly_single_node.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_e2e_nightly_single_node.yaml)<br>[.github/workflows/_nightly_image_build.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_nightly_image_build.yaml)<br>[.github/workflows/_schedule_image_build.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_schedule_image_build.yaml)<br>[.github/workflows/_selected_tests.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_selected_tests.yaml)<br>[.github/workflows/bot_issue_manage.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/bot_issue_manage.yaml)<br>[.github/workflows/bot_merge_conflict.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/bot_merge_conflict.yaml) |
| container | 14 | [Dockerfile](../../../../sources/vllm-project__vllm-ascend/Dockerfile)<br>[Dockerfile.310p](../../../../sources/vllm-project__vllm-ascend/Dockerfile.310p)<br>[Dockerfile.310p.openEuler](../../../../sources/vllm-project__vllm-ascend/Dockerfile.310p.openEuler)<br>[Dockerfile.a3](../../../../sources/vllm-project__vllm-ascend/Dockerfile.a3)<br>[Dockerfile.a3.openEuler](../../../../sources/vllm-project__vllm-ascend/Dockerfile.a3.openEuler)<br>[Dockerfile.a5](../../../../sources/vllm-project__vllm-ascend/Dockerfile.a5)<br>[Dockerfile.a5.openEuler](../../../../sources/vllm-project__vllm-ascend/Dockerfile.a5.openEuler)<br>[Dockerfile.openEuler](../../../../sources/vllm-project__vllm-ascend/Dockerfile.openEuler) |
| instruction | 2 | [AGENTS.md](../../../../sources/vllm-project__vllm-ascend/AGENTS.md)<br>[CLAUDE.md](../../../../sources/vllm-project__vllm-ascend/CLAUDE.md) |
| docs | 330 | [README.md](../../../../sources/vllm-project__vllm-ascend/README.md)<br>[README.zh.md](../../../../sources/vllm-project__vllm-ascend/README.zh.md)<br>[vllm_ascend/worker/v2/README.md](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/README.md)<br>[examples/external_online_dp/README.md](../../../../sources/vllm-project__vllm-ascend/examples/external_online_dp/README.md)<br>[docs/Makefile](../../../../sources/vllm-project__vllm-ascend/docs/Makefile)<br>[docs/README.md](../../../../sources/vllm-project__vllm-ascend/docs/README.md)<br>[docs/requirements-docs.txt](../../../../sources/vllm-project__vllm-ascend/docs/requirements-docs.txt)<br>[docs/source/conf.py](../../../../sources/vllm-project__vllm-ascend/docs/source/conf.py) |
| config | 8 | [pyproject.toml](../../../../sources/vllm-project__vllm-ascend/pyproject.toml)<br>[requirements-dev.txt](../../../../sources/vllm-project__vllm-ascend/requirements-dev.txt)<br>[requirements-lint.txt](../../../../sources/vllm-project__vllm-ascend/requirements-lint.txt)<br>[requirements.txt](../../../../sources/vllm-project__vllm-ascend/requirements.txt)<br>[docs/Makefile](../../../../sources/vllm-project__vllm-ascend/docs/Makefile)<br>[docs/requirements-docs.txt](../../../../sources/vllm-project__vllm-ascend/docs/requirements-docs.txt)<br>[benchmarks/requirements-bench.txt](../../../../sources/vllm-project__vllm-ascend/benchmarks/requirements-bench.txt)<br>[.github/workflows/scripts/wheel/pyproject.toml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/scripts/wheel/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 588 | [vllm_ascend/worker/v2/spec_decode/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/__init__.py)<br>[vllm_ascend/worker/v2/spec_decode/rejection_sampler_utils.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/rejection_sampler_utils.py)<br>[vllm_ascend/worker/v2/spec_decode/eagle/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/eagle/__init__.py)<br>[vllm_ascend/worker/v2/spec_decode/eagle/aclgraph.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/eagle/aclgraph.py)<br>[vllm_ascend/worker/v2/spec_decode/eagle/speculator.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/eagle/speculator.py)<br>[vllm_ascend/spec_decode/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/spec_decode/__init__.py) |
| CI workflows | 56 | [.github/workflows/_e2e_nightly_multi_node.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_e2e_nightly_multi_node.yaml)<br>[.github/workflows/_e2e_nightly_single_node_models.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_e2e_nightly_single_node_models.yaml)<br>[.github/workflows/_e2e_nightly_single_node.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_e2e_nightly_single_node.yaml)<br>[.github/workflows/_nightly_image_build.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_nightly_image_build.yaml)<br>[.github/workflows/_schedule_image_build.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_schedule_image_build.yaml)<br>[.github/workflows/_selected_tests.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_selected_tests.yaml) |
| Containers / deploy | 14 | [Dockerfile](../../../../sources/vllm-project__vllm-ascend/Dockerfile)<br>[Dockerfile.310p](../../../../sources/vllm-project__vllm-ascend/Dockerfile.310p)<br>[Dockerfile.310p.openEuler](../../../../sources/vllm-project__vllm-ascend/Dockerfile.310p.openEuler)<br>[Dockerfile.a3](../../../../sources/vllm-project__vllm-ascend/Dockerfile.a3)<br>[Dockerfile.a3.openEuler](../../../../sources/vllm-project__vllm-ascend/Dockerfile.a3.openEuler)<br>[Dockerfile.a5](../../../../sources/vllm-project__vllm-ascend/Dockerfile.a5) |
| Security / policy | 19 | [vllm_ascend/ops/triton/fla/layernorm_guard.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/ops/triton/fla/layernorm_guard.py)<br>[vllm_ascend/eplb/core/policy/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/__init__.py)<br>[vllm_ascend/eplb/core/policy/policy_abstract.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/policy_abstract.py)<br>[vllm_ascend/eplb/core/policy/policy_default_eplb.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/policy_default_eplb.py)<br>[vllm_ascend/eplb/core/policy/policy_factory.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/policy_factory.py)<br>[vllm_ascend/eplb/core/policy/policy_flashlb.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/policy_flashlb.py) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/vllm-project__vllm-ascend/AGENTS.md)<br>[CLAUDE.md](../../../../sources/vllm-project__vllm-ascend/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `Dockerfile`, `Dockerfile.310p`, `Dockerfile.310p.openEuler`.
2. Map agent/tool runtime through: `AGENTS.md`, `vllm_ascend/model_loader/netloader/executor/__init__.py`, `vllm_ascend/model_loader/netloader/executor/elastic_load.py`.
3. Inspect retrieval/memory/indexing through: `vllm_ascend/worker/encoder_acl_graph.py`, `vllm_ascend/patch/platform/patch_profiling_chunk.py`, `vllm_ascend/ops/rotary_embedding.py`.
4. Verify behavior through test/eval files: `vllm_ascend/worker/v2/spec_decode/__init__.py`, `vllm_ascend/worker/v2/spec_decode/rejection_sampler_utils.py`, `vllm_ascend/worker/v2/spec_decode/eagle/__init__.py`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Community maintained hardware plugin for vLLM on Ascend. 핵심 구조 신호는 C++, pyproject.toml, requirements.txt, Dockerfile, README.md, AGENTS.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
