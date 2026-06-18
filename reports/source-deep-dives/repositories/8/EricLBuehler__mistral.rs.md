# EricLBuehler/mistral.rs Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 1325 files, 273 directories.

## 요약

- 조사 단위: `sources/EricLBuehler__mistral.rs` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,325 files, 273 directories, depth score 138, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mistralrs-server/src/mcp_server.rs, mistralrs-mcp/Cargo.toml, mistralrs-mcp/README.md이고, 의존성 단서는 mcp, transformers, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | EricLBuehler/mistral.rs |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/EricLBuehler__mistral.rs](../../../../sources/EricLBuehler__mistral.rs) |
| Existing report | [reports/clone-structures/EricLBuehler__mistral.rs.md](../../../clone-structures/EricLBuehler__mistral.rs.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1325 / 273 |
| Max observed depth | 7 |
| Top directories | .cargo, .github, calibration_data, chat_templates, docs, examples, game_of_life_plots, matformer_configs, mistralrs, mistralrs-audio, mistralrs-bench, mistralrs-cli, mistralrs-code-exec, mistralrs-core, mistralrs-flash-attn, mistralrs-macros, mistralrs-mcp, mistralrs-paged-attn, mistralrs-pyo3, mistralrs-quant |
| Top extensions | .rs: 634, .md: 134, .py: 132, .cu: 119, .cuh: 42, .metal: 37, .toml: 31, .json: 26, .h: 23, .ttf: 20, .woff: 20, .woff2: 19 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 55 |
| examples/python | examples workspace | 6 |
| examples/server | examples workspace | 5 |
| examples/mcp-test-config.json | examples workspace | 2 |
| .github | ci surface | 1 |
| calibration_data | source boundary | 1 |
| chat_templates | top-level component | 1 |
| examples | top-level component | 1 |
| examples/MCP_QUICK_START.md | examples workspace | 1 |
| examples/mcp-config-reference.json | examples workspace | 1 |
| examples/mcp-server-config.json | examples workspace | 1 |
| examples/mcp-simple-config.json | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| game_of_life_plots | top-level component | 1 |
| matformer_configs | top-level component | 1 |
| mistralrs | top-level component | 1 |
| mistralrs-audio | top-level component | 1 |
| mistralrs-bench | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | fmt | make fmt |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | transformers |
| webRuntime | none |
| developerSurface | none |
| observability | prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [mistralrs-server/src/mcp_server.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-server/src/mcp_server.rs) | mcp signal |
| mcp | [mistralrs-mcp/Cargo.toml](../../../../sources/EricLBuehler__mistral.rs/mistralrs-mcp/Cargo.toml) | mcp signal |
| mcp | [mistralrs-mcp/README.md](../../../../sources/EricLBuehler__mistral.rs/mistralrs-mcp/README.md) | mcp signal |
| mcp | [mistralrs-mcp/src/client.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-mcp/src/client.rs) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/EricLBuehler__mistral.rs/AGENTS.md) | agentRuntime signal |
| agentRuntime | [mistralrs-quant/src/cutile/context.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-quant/src/cutile/context.rs) | agentRuntime signal |
| agentRuntime | [mistralrs-paged-attn/src/cuda/backend/context_attention_mla.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-paged-attn/src/cuda/backend/context_attention_mla.rs) | agentRuntime signal |
| agentRuntime | [mistralrs-mcp/src/tools.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-mcp/src/tools.rs) | agentRuntime signal |
| entrypoints | [mistralrs-server/src/main.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-server/src/main.rs) | entrypoints signal |
| entrypoints | [mistralrs-cli/webui/src/app.css](../../../../sources/EricLBuehler__mistral.rs/mistralrs-cli/webui/src/app.css) | entrypoints signal |
| entrypoints | [mistralrs-cli/webui/src/App.svelte](../../../../sources/EricLBuehler__mistral.rs/mistralrs-cli/webui/src/App.svelte) | entrypoints signal |
| entrypoints | [mistralrs-cli/webui/src/main.ts](../../../../sources/EricLBuehler__mistral.rs/mistralrs-cli/webui/src/main.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 60 | [mistralrs-server/src/main.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-server/src/main.rs)<br>[mistralrs-cli/webui/src/app.css](../../../../sources/EricLBuehler__mistral.rs/mistralrs-cli/webui/src/app.css)<br>[mistralrs-cli/webui/src/App.svelte](../../../../sources/EricLBuehler__mistral.rs/mistralrs-cli/webui/src/App.svelte)<br>[mistralrs-cli/webui/src/main.ts](../../../../sources/EricLBuehler__mistral.rs/mistralrs-cli/webui/src/main.ts)<br>[mistralrs-cli/src/main.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-cli/src/main.rs)<br>[mistralrs-cli/src/args/server.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-cli/src/args/server.rs)<br>[mistralrs-bench/src/main.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-bench/src/main.rs)<br>[mistralrs/examples/quantization/uqff_multimodal/main.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs/examples/quantization/uqff_multimodal/main.rs) |
| agentRuntime | 44 | [AGENTS.md](../../../../sources/EricLBuehler__mistral.rs/AGENTS.md)<br>[mistralrs-quant/src/cutile/context.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-quant/src/cutile/context.rs)<br>[mistralrs-paged-attn/src/cuda/backend/context_attention_mla.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-paged-attn/src/cuda/backend/context_attention_mla.rs)<br>[mistralrs-mcp/src/tools.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-mcp/src/tools.rs)<br>[mistralrs-core/src/utils/memory_usage.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-core/src/utils/memory_usage.rs)<br>[mistralrs-core/src/tools/grammar.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-core/src/tools/grammar.rs)<br>[mistralrs-core/src/tools/mod.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-core/src/tools/mod.rs)<br>[mistralrs-core/src/tools/request.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-core/src/tools/request.rs) |
| mcp | 20 | [mistralrs-server/src/mcp_server.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-server/src/mcp_server.rs)<br>[mistralrs-mcp/Cargo.toml](../../../../sources/EricLBuehler__mistral.rs/mistralrs-mcp/Cargo.toml)<br>[mistralrs-mcp/README.md](../../../../sources/EricLBuehler__mistral.rs/mistralrs-mcp/README.md)<br>[mistralrs-mcp/src/client.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-mcp/src/client.rs)<br>[mistralrs-mcp/src/lib.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-mcp/src/lib.rs)<br>[mistralrs-mcp/src/tools.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-mcp/src/tools.rs)<br>[mistralrs-mcp/src/transport.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-mcp/src/transport.rs)<br>[mistralrs-mcp/src/types.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-mcp/src/types.rs) |
| retrieval | 50 | [mistralrs-quant/src/vector_fp8/ffi.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-quant/src/vector_fp8/ffi.rs)<br>[mistralrs-quant/src/vector_fp8/mod.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-quant/src/vector_fp8/mod.rs)<br>[mistralrs-quant/src/vector_fp8/ops.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-quant/src/vector_fp8/ops.rs)<br>[mistralrs-quant/kernels/vector_fp8/vector_fp8_dummy.cu](../../../../sources/EricLBuehler__mistral.rs/mistralrs-quant/kernels/vector_fp8/vector_fp8_dummy.cu)<br>[mistralrs-quant/kernels/vector_fp8/vector_fp8.cu](../../../../sources/EricLBuehler__mistral.rs/mistralrs-quant/kernels/vector_fp8/vector_fp8.cu)<br>[mistralrs-core/src/vision_models/phi4/audio_embedding.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-core/src/vision_models/phi4/audio_embedding.rs)<br>[mistralrs-core/src/vision_models/phi4/image_embedding.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-core/src/vision_models/phi4/image_embedding.rs)<br>[mistralrs-core/src/vision_models/phi4/mm_embedding.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-core/src/vision_models/phi4/mm_embedding.rs) |
| spec | 2 | [docs/src/content/docs/explanation/architecture.md](../../../../sources/EricLBuehler__mistral.rs/docs/src/content/docs/explanation/architecture.md)<br>[docs/src/content/docs/explanation/code-execution-design.md](../../../../sources/EricLBuehler__mistral.rs/docs/src/content/docs/explanation/code-execution-design.md) |
| eval | 16 | [scripts/bench.py](../../../../sources/EricLBuehler__mistral.rs/scripts/bench.py)<br>[mistralrs-vision/tests/integration.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-vision/tests/integration.rs)<br>[mistralrs-sandbox/tests/linux.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-sandbox/tests/linux.rs)<br>[mistralrs-sandbox/tests/null.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-sandbox/tests/null.rs)<br>[mistralrs-quant/tests/cutile_moe_tests.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-quant/tests/cutile_moe_tests.rs)<br>[mistralrs-quant/tests/cutlass_moe_tests.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-quant/tests/cutlass_moe_tests.rs)<br>[mistralrs-quant/src/cublaslt/tests.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-quant/src/cublaslt/tests.rs)<br>[mistralrs-flash-attn/tests/flash_attn_tests.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-flash-attn/tests/flash_attn_tests.rs) |
| security | 16 | [mistralrs-sandbox/Cargo.toml](../../../../sources/EricLBuehler__mistral.rs/mistralrs-sandbox/Cargo.toml)<br>[mistralrs-sandbox/tests/linux.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-sandbox/tests/linux.rs)<br>[mistralrs-sandbox/tests/null.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-sandbox/tests/null.rs)<br>[mistralrs-sandbox/src/env_scrub.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-sandbox/src/env_scrub.rs)<br>[mistralrs-sandbox/src/lib.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-sandbox/src/lib.rs)<br>[mistralrs-sandbox/src/null.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-sandbox/src/null.rs)<br>[mistralrs-sandbox/src/macos/mod.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-sandbox/src/macos/mod.rs)<br>[mistralrs-sandbox/src/macos/profile.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-sandbox/src/macos/profile.rs) |
| ci | 7 | [.github/workflows/analysis.yaml](../../../../sources/EricLBuehler__mistral.rs/.github/workflows/analysis.yaml)<br>[.github/workflows/brew_release.yml](../../../../sources/EricLBuehler__mistral.rs/.github/workflows/brew_release.yml)<br>[.github/workflows/build_cpu.yaml](../../../../sources/EricLBuehler__mistral.rs/.github/workflows/build_cpu.yaml)<br>[.github/workflows/build_cuda_all.yaml](../../../../sources/EricLBuehler__mistral.rs/.github/workflows/build_cuda_all.yaml)<br>[.github/workflows/ci_cuda.yaml](../../../../sources/EricLBuehler__mistral.rs/.github/workflows/ci_cuda.yaml)<br>[.github/workflows/ci.yml](../../../../sources/EricLBuehler__mistral.rs/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/EricLBuehler__mistral.rs/.github/workflows/docs.yml) |
| container | 7 | [Dockerfile](../../../../sources/EricLBuehler__mistral.rs/Dockerfile)<br>[Dockerfile.cuda-13.0-ubi9](../../../../sources/EricLBuehler__mistral.rs/Dockerfile.cuda-13.0-ubi9)<br>[Dockerfile.cuda-all](../../../../sources/EricLBuehler__mistral.rs/Dockerfile.cuda-all)<br>[Dockerfile.manylinux](../../../../sources/EricLBuehler__mistral.rs/Dockerfile.manylinux)<br>[docs/src/content/docs/guides/deploy/docker.md](../../../../sources/EricLBuehler__mistral.rs/docs/src/content/docs/guides/deploy/docker.md)<br>[docs/src/content/docs/guides/deploy/index.md](../../../../sources/EricLBuehler__mistral.rs/docs/src/content/docs/guides/deploy/index.md)<br>[docs/src/content/docs/guides/deploy/production-checklist.md](../../../../sources/EricLBuehler__mistral.rs/docs/src/content/docs/guides/deploy/production-checklist.md) |
| instruction | 2 | [AGENTS.md](../../../../sources/EricLBuehler__mistral.rs/AGENTS.md)<br>[CLAUDE.md](../../../../sources/EricLBuehler__mistral.rs/CLAUDE.md) |
| docs | 134 | [README.md](../../../../sources/EricLBuehler__mistral.rs/README.md)<br>[mistralrs-vision/README.md](../../../../sources/EricLBuehler__mistral.rs/mistralrs-vision/README.md)<br>[mistralrs-server-core/README.md](../../../../sources/EricLBuehler__mistral.rs/mistralrs-server-core/README.md)<br>[mistralrs-quant/README.md](../../../../sources/EricLBuehler__mistral.rs/mistralrs-quant/README.md)<br>[mistralrs-pyo3/README.md](../../../../sources/EricLBuehler__mistral.rs/mistralrs-pyo3/README.md)<br>[mistralrs-paged-attn/README.md](../../../../sources/EricLBuehler__mistral.rs/mistralrs-paged-attn/README.md)<br>[mistralrs-mcp/README.md](../../../../sources/EricLBuehler__mistral.rs/mistralrs-mcp/README.md)<br>[mistralrs-macros/README.md](../../../../sources/EricLBuehler__mistral.rs/mistralrs-macros/README.md) |
| config | 24 | [Cargo.lock](../../../../sources/EricLBuehler__mistral.rs/Cargo.lock)<br>[Cargo.toml](../../../../sources/EricLBuehler__mistral.rs/Cargo.toml)<br>[Makefile](../../../../sources/EricLBuehler__mistral.rs/Makefile)<br>[mistralrs-vision/Cargo.toml](../../../../sources/EricLBuehler__mistral.rs/mistralrs-vision/Cargo.toml)<br>[mistralrs-server-core/Cargo.toml](../../../../sources/EricLBuehler__mistral.rs/mistralrs-server-core/Cargo.toml)<br>[mistralrs-server/Cargo.toml](../../../../sources/EricLBuehler__mistral.rs/mistralrs-server/Cargo.toml)<br>[mistralrs-sandbox/Cargo.toml](../../../../sources/EricLBuehler__mistral.rs/mistralrs-sandbox/Cargo.toml)<br>[mistralrs-quant/Cargo.toml](../../../../sources/EricLBuehler__mistral.rs/mistralrs-quant/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 16 | [scripts/bench.py](../../../../sources/EricLBuehler__mistral.rs/scripts/bench.py)<br>[mistralrs-vision/tests/integration.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-vision/tests/integration.rs)<br>[mistralrs-sandbox/tests/linux.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-sandbox/tests/linux.rs)<br>[mistralrs-sandbox/tests/null.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-sandbox/tests/null.rs)<br>[mistralrs-quant/tests/cutile_moe_tests.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-quant/tests/cutile_moe_tests.rs)<br>[mistralrs-quant/tests/cutlass_moe_tests.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-quant/tests/cutlass_moe_tests.rs) |
| CI workflows | 7 | [.github/workflows/analysis.yaml](../../../../sources/EricLBuehler__mistral.rs/.github/workflows/analysis.yaml)<br>[.github/workflows/brew_release.yml](../../../../sources/EricLBuehler__mistral.rs/.github/workflows/brew_release.yml)<br>[.github/workflows/build_cpu.yaml](../../../../sources/EricLBuehler__mistral.rs/.github/workflows/build_cpu.yaml)<br>[.github/workflows/build_cuda_all.yaml](../../../../sources/EricLBuehler__mistral.rs/.github/workflows/build_cuda_all.yaml)<br>[.github/workflows/ci_cuda.yaml](../../../../sources/EricLBuehler__mistral.rs/.github/workflows/ci_cuda.yaml)<br>[.github/workflows/ci.yml](../../../../sources/EricLBuehler__mistral.rs/.github/workflows/ci.yml) |
| Containers / deploy | 7 | [Dockerfile](../../../../sources/EricLBuehler__mistral.rs/Dockerfile)<br>[Dockerfile.cuda-13.0-ubi9](../../../../sources/EricLBuehler__mistral.rs/Dockerfile.cuda-13.0-ubi9)<br>[Dockerfile.cuda-all](../../../../sources/EricLBuehler__mistral.rs/Dockerfile.cuda-all)<br>[Dockerfile.manylinux](../../../../sources/EricLBuehler__mistral.rs/Dockerfile.manylinux)<br>[docs/src/content/docs/guides/deploy/docker.md](../../../../sources/EricLBuehler__mistral.rs/docs/src/content/docs/guides/deploy/docker.md)<br>[docs/src/content/docs/guides/deploy/index.md](../../../../sources/EricLBuehler__mistral.rs/docs/src/content/docs/guides/deploy/index.md) |
| Security / policy | 16 | [mistralrs-sandbox/Cargo.toml](../../../../sources/EricLBuehler__mistral.rs/mistralrs-sandbox/Cargo.toml)<br>[mistralrs-sandbox/tests/linux.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-sandbox/tests/linux.rs)<br>[mistralrs-sandbox/tests/null.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-sandbox/tests/null.rs)<br>[mistralrs-sandbox/src/env_scrub.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-sandbox/src/env_scrub.rs)<br>[mistralrs-sandbox/src/lib.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-sandbox/src/lib.rs)<br>[mistralrs-sandbox/src/null.rs](../../../../sources/EricLBuehler__mistral.rs/mistralrs-sandbox/src/null.rs) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/EricLBuehler__mistral.rs/AGENTS.md)<br>[CLAUDE.md](../../../../sources/EricLBuehler__mistral.rs/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `mistralrs-server/src/mcp_server.rs`, `mistralrs-mcp/Cargo.toml`, `mistralrs-mcp/README.md`.
2. Trace execution through entrypoints: `mistralrs-server/src/main.rs`, `mistralrs-cli/webui/src/app.css`, `mistralrs-cli/webui/src/App.svelte`.
3. Map agent/tool runtime through: `AGENTS.md`, `mistralrs-quant/src/cutile/context.rs`, `mistralrs-paged-attn/src/cuda/backend/context_attention_mla.rs`.
4. Inspect retrieval/memory/indexing through: `mistralrs-quant/src/vector_fp8/ffi.rs`, `mistralrs-quant/src/vector_fp8/mod.rs`, `mistralrs-quant/src/vector_fp8/ops.rs`.
5. Verify behavior through test/eval files: `scripts/bench.py`, `mistralrs-vision/tests/integration.rs`, `mistralrs-sandbox/tests/linux.rs`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 1325 files, 273 directories.. 핵심 구조 신호는 Cargo.toml, Dockerfile, Makefile, README.md, AGENTS.md, mcp이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
