# vllm-project/vllm-ascend 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Community maintained hardware plugin for vLLM on Ascend

## 요약

- 조사 단위: `sources/vllm-project__vllm-ascend` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,793 files, 594 directories, depth score 115, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 container=Dockerfile, Dockerfile.310p, Dockerfile.310p.openEuler이고, 의존성 단서는 fastapi, express, torch, transformers, vllm, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | vllm-project/vllm-ascend |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | C++ |
| Stars | 2258 |
| Forks | 1411 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/vllm-project__vllm-ascend](../../../../sources/vllm-project__vllm-ascend) |
| 기존 보고서 | [reports/global-trending/repositories/vllm-project__vllm-ascend.md](../../../global-trending/repositories/vllm-project__vllm-ascend.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2793 / 594 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .agents, .claude, .gemini, .github, benchmarks, cmake, csrc, docs, examples, tests, tools, vllm_ascend |
| 상위 확장자 | .py: 924, .h: 710, .cpp: 299, .md: 176, .po: 136, .txt: 127, .yaml: 118, .hpp: 63, .cmake: 48, .sh: 47, .png: 36, .yml: 22 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch, transformers, vllm |
| webRuntime | fastapi, express |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 65 | [AGENTS.md](../../../../sources/vllm-project__vllm-ascend/AGENTS.md)<br>[vllm_ascend/model_loader/netloader/executor/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/model_loader/netloader/executor/__init__.py)<br>[vllm_ascend/model_loader/netloader/executor/elastic_load.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/model_loader/netloader/executor/elastic_load.py)<br>[vllm_ascend/model_loader/netloader/executor/netloader_pg.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/model_loader/netloader/executor/netloader_pg.py)<br>[vllm_ascend/attention/context_parallel/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/attention/context_parallel/__init__.py)<br>[vllm_ascend/attention/context_parallel/attention_cp.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/attention/context_parallel/attention_cp.py)<br>[vllm_ascend/attention/context_parallel/common_cp.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/attention/context_parallel/common_cp.py)<br>[vllm_ascend/attention/context_parallel/dsa_cp.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/attention/context_parallel/dsa_cp.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 161 | [vllm_ascend/worker/encoder_acl_graph.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/encoder_acl_graph.py)<br>[vllm_ascend/patch/platform/patch_profiling_chunk.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/patch/platform/patch_profiling_chunk.py)<br>[vllm_ascend/ops/rotary_embedding.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/ops/rotary_embedding.py)<br>[vllm_ascend/ops/vocab_parallel_embedding.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/ops/vocab_parallel_embedding.py)<br>[vllm_ascend/ops/triton/gdn_chunk_meta.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/ops/triton/gdn_chunk_meta.py)<br>[vllm_ascend/ops/triton/fla/chunk_delta_h.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/ops/triton/fla/chunk_delta_h.py)<br>[vllm_ascend/ops/triton/fla/chunk_delta_hupdate.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/ops/triton/fla/chunk_delta_hupdate.py)<br>[vllm_ascend/ops/triton/fla/chunk_o_update.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/ops/triton/fla/chunk_o_update.py) |
| spec | 83 | [requirements-dev.txt](../../../../sources/vllm-project__vllm-ascend/requirements-dev.txt)<br>[requirements-lint.txt](../../../../sources/vllm-project__vllm-ascend/requirements-lint.txt)<br>[requirements.txt](../../../../sources/vllm-project__vllm-ascend/requirements.txt)<br>[vllm_ascend/worker/v2/spec_decode/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/__init__.py)<br>[vllm_ascend/worker/v2/spec_decode/rejection_sampler_utils.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/rejection_sampler_utils.py)<br>[vllm_ascend/worker/v2/spec_decode/eagle/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/eagle/__init__.py)<br>[vllm_ascend/worker/v2/spec_decode/eagle/aclgraph.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/eagle/aclgraph.py)<br>[vllm_ascend/worker/v2/spec_decode/eagle/speculator.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/eagle/speculator.py) |
| eval | 588 | [vllm_ascend/worker/v2/spec_decode/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/__init__.py)<br>[vllm_ascend/worker/v2/spec_decode/rejection_sampler_utils.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/rejection_sampler_utils.py)<br>[vllm_ascend/worker/v2/spec_decode/eagle/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/eagle/__init__.py)<br>[vllm_ascend/worker/v2/spec_decode/eagle/aclgraph.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/eagle/aclgraph.py)<br>[vllm_ascend/worker/v2/spec_decode/eagle/speculator.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/eagle/speculator.py)<br>[vllm_ascend/spec_decode/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/spec_decode/__init__.py)<br>[vllm_ascend/spec_decode/dflash_proposer.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/spec_decode/dflash_proposer.py)<br>[vllm_ascend/spec_decode/draft_proposer.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/spec_decode/draft_proposer.py) |
| security | 19 | [vllm_ascend/ops/triton/fla/layernorm_guard.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/ops/triton/fla/layernorm_guard.py)<br>[vllm_ascend/eplb/core/policy/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/__init__.py)<br>[vllm_ascend/eplb/core/policy/policy_abstract.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/policy_abstract.py)<br>[vllm_ascend/eplb/core/policy/policy_default_eplb.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/policy_default_eplb.py)<br>[vllm_ascend/eplb/core/policy/policy_factory.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/policy_factory.py)<br>[vllm_ascend/eplb/core/policy/policy_flashlb.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/policy_flashlb.py)<br>[vllm_ascend/eplb/core/policy/policy_random.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/policy_random.py)<br>[vllm_ascend/eplb/core/policy/policy_swift_balancer.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/policy_swift_balancer.py) |
| ci | 56 | [.github/workflows/_e2e_nightly_multi_node.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_e2e_nightly_multi_node.yaml)<br>[.github/workflows/_e2e_nightly_single_node_models.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_e2e_nightly_single_node_models.yaml)<br>[.github/workflows/_e2e_nightly_single_node.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_e2e_nightly_single_node.yaml)<br>[.github/workflows/_nightly_image_build.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_nightly_image_build.yaml)<br>[.github/workflows/_schedule_image_build.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_schedule_image_build.yaml)<br>[.github/workflows/_selected_tests.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_selected_tests.yaml)<br>[.github/workflows/bot_issue_manage.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/bot_issue_manage.yaml)<br>[.github/workflows/bot_merge_conflict.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/bot_merge_conflict.yaml) |
| container | 14 | [Dockerfile](../../../../sources/vllm-project__vllm-ascend/Dockerfile)<br>[Dockerfile.310p](../../../../sources/vllm-project__vllm-ascend/Dockerfile.310p)<br>[Dockerfile.310p.openEuler](../../../../sources/vllm-project__vllm-ascend/Dockerfile.310p.openEuler)<br>[Dockerfile.a3](../../../../sources/vllm-project__vllm-ascend/Dockerfile.a3)<br>[Dockerfile.a3.openEuler](../../../../sources/vllm-project__vllm-ascend/Dockerfile.a3.openEuler)<br>[Dockerfile.a5](../../../../sources/vllm-project__vllm-ascend/Dockerfile.a5)<br>[Dockerfile.a5.openEuler](../../../../sources/vllm-project__vllm-ascend/Dockerfile.a5.openEuler)<br>[Dockerfile.openEuler](../../../../sources/vllm-project__vllm-ascend/Dockerfile.openEuler) |
| instruction | 2 | [AGENTS.md](../../../../sources/vllm-project__vllm-ascend/AGENTS.md)<br>[CLAUDE.md](../../../../sources/vllm-project__vllm-ascend/CLAUDE.md) |
| docs | 330 | [README.md](../../../../sources/vllm-project__vllm-ascend/README.md)<br>[README.zh.md](../../../../sources/vllm-project__vllm-ascend/README.zh.md)<br>[vllm_ascend/worker/v2/README.md](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/README.md)<br>[examples/external_online_dp/README.md](../../../../sources/vllm-project__vllm-ascend/examples/external_online_dp/README.md)<br>[docs/Makefile](../../../../sources/vllm-project__vllm-ascend/docs/Makefile)<br>[docs/README.md](../../../../sources/vllm-project__vllm-ascend/docs/README.md)<br>[docs/requirements-docs.txt](../../../../sources/vllm-project__vllm-ascend/docs/requirements-docs.txt)<br>[docs/source/conf.py](../../../../sources/vllm-project__vllm-ascend/docs/source/conf.py) |
| config | 8 | [pyproject.toml](../../../../sources/vllm-project__vllm-ascend/pyproject.toml)<br>[requirements-dev.txt](../../../../sources/vllm-project__vllm-ascend/requirements-dev.txt)<br>[requirements-lint.txt](../../../../sources/vllm-project__vllm-ascend/requirements-lint.txt)<br>[requirements.txt](../../../../sources/vllm-project__vllm-ascend/requirements.txt)<br>[docs/Makefile](../../../../sources/vllm-project__vllm-ascend/docs/Makefile)<br>[docs/requirements-docs.txt](../../../../sources/vllm-project__vllm-ascend/docs/requirements-docs.txt)<br>[benchmarks/requirements-bench.txt](../../../../sources/vllm-project__vllm-ascend/benchmarks/requirements-bench.txt)<br>[.github/workflows/scripts/wheel/pyproject.toml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/scripts/wheel/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 588 | [vllm_ascend/worker/v2/spec_decode/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/__init__.py)<br>[vllm_ascend/worker/v2/spec_decode/rejection_sampler_utils.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/rejection_sampler_utils.py)<br>[vllm_ascend/worker/v2/spec_decode/eagle/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/eagle/__init__.py)<br>[vllm_ascend/worker/v2/spec_decode/eagle/aclgraph.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/eagle/aclgraph.py)<br>[vllm_ascend/worker/v2/spec_decode/eagle/speculator.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/worker/v2/spec_decode/eagle/speculator.py)<br>[vllm_ascend/spec_decode/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/spec_decode/__init__.py) |
| CI workflow | 56 | [.github/workflows/_e2e_nightly_multi_node.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_e2e_nightly_multi_node.yaml)<br>[.github/workflows/_e2e_nightly_single_node_models.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_e2e_nightly_single_node_models.yaml)<br>[.github/workflows/_e2e_nightly_single_node.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_e2e_nightly_single_node.yaml)<br>[.github/workflows/_nightly_image_build.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_nightly_image_build.yaml)<br>[.github/workflows/_schedule_image_build.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_schedule_image_build.yaml)<br>[.github/workflows/_selected_tests.yaml](../../../../sources/vllm-project__vllm-ascend/.github/workflows/_selected_tests.yaml) |
| 컨테이너/배포 | 14 | [Dockerfile](../../../../sources/vllm-project__vllm-ascend/Dockerfile)<br>[Dockerfile.310p](../../../../sources/vllm-project__vllm-ascend/Dockerfile.310p)<br>[Dockerfile.310p.openEuler](../../../../sources/vllm-project__vllm-ascend/Dockerfile.310p.openEuler)<br>[Dockerfile.a3](../../../../sources/vllm-project__vllm-ascend/Dockerfile.a3)<br>[Dockerfile.a3.openEuler](../../../../sources/vllm-project__vllm-ascend/Dockerfile.a3.openEuler)<br>[Dockerfile.a5](../../../../sources/vllm-project__vllm-ascend/Dockerfile.a5) |
| 보안/정책 | 19 | [vllm_ascend/ops/triton/fla/layernorm_guard.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/ops/triton/fla/layernorm_guard.py)<br>[vllm_ascend/eplb/core/policy/__init__.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/__init__.py)<br>[vllm_ascend/eplb/core/policy/policy_abstract.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/policy_abstract.py)<br>[vllm_ascend/eplb/core/policy/policy_default_eplb.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/policy_default_eplb.py)<br>[vllm_ascend/eplb/core/policy/policy_factory.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/policy_factory.py)<br>[vllm_ascend/eplb/core/policy/policy_flashlb.py](../../../../sources/vllm-project__vllm-ascend/vllm_ascend/eplb/core/policy/policy_flashlb.py) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/vllm-project__vllm-ascend/AGENTS.md)<br>[CLAUDE.md](../../../../sources/vllm-project__vllm-ascend/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `Dockerfile`, `Dockerfile.310p`, `Dockerfile.310p.openEuler`.
2. agent/tool runtime 매핑: `AGENTS.md`, `vllm_ascend/model_loader/netloader/executor/__init__.py`, `vllm_ascend/model_loader/netloader/executor/elastic_load.py`.
3. retrieval/memory/indexing 확인: `vllm_ascend/worker/encoder_acl_graph.py`, `vllm_ascend/patch/platform/patch_profiling_chunk.py`, `vllm_ascend/ops/rotary_embedding.py`.
4. test/eval 파일로 동작 검증: `vllm_ascend/worker/v2/spec_decode/__init__.py`, `vllm_ascend/worker/v2/spec_decode/rejection_sampler_utils.py`, `vllm_ascend/worker/v2/spec_decode/eagle/__init__.py`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Community maintained hardware plugin for vLLM on Ascend. 핵심 구조 신호는 C++, pyproject.toml, requirements.txt, Dockerfile, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
