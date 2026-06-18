# vllm-project/vllm

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/vllm-project/vllm |
| local path | sources/vllm-project__vllm |
| HEAD | a30addc |
| stars/forks | 83195 / 18159 |
| language | Python |
| license |  |
| pushedAt | 2026-06-18T00:28:34Z |
| trendScore / priorityScore | 194 / 527 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Local LLM / inference | 500 | examples/pooling/embed/openai_embedding_long_text/README.md, rust/src/engine-core-client/examples/README.md, rust/src/llm/examples/README.md |
| Observability / evaluation | 299 | docs/benchmarking/README.md, docs/cli/README.md, docs/examples/README.md |
| Data / ML platform | 256 | docs/features/speculative_decoding/README.md, docs/README.md, examples/basic/offline_inference/README.md |
| RAG / retrieval / knowledge | 232 | examples/pooling/embed/openai_embedding_long_text/README.md, docs/examples/README.md, docs/README.md |
| Developer tools / DX | 100 | rust/src/engine-core-client/examples/README.md, rust/src/llm/examples/README.md, docs/benchmarking/README.md |
| Cloud native / infrastructure | 98 | examples/deployment/chart-helm/README.md, examples/disaggregated/disaggregated_encoder/README.md, examples/disaggregated/disaggregated_serving/README.md |
| AI agent / orchestration | 39 | docs/contributing/README.md, AGENTS.md, CLAUDE.md |
| Frontend / app framework | 35 | rust/src/engine-core-client/examples/README.md, rust/src/llm/examples/README.md, rust/src/chat/examples/README.md |
| MCP / agent interoperability | 17 | AGENTS.md, CLAUDE.md, rust/CLAUDE.md |
| Security / supply chain | 12 | examples/features/openai_batch/README.md, docs/contributing/README.md, docs/serving/online_serving/README.md |
| Coding agent / software automation | 5 | docs/contributing/README.md, docs/features/quantization/README.md, rust/AGENTS.md |
| Database / data infrastructure | 4 | vllm/distributed/kv_transfer/README.md, examples/applications/rag/retrieval_augmented_generation_with_langchain.py, examples/applications/rag/retrieval_augmented_generation_with_llamaindex.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 5396 |
| manifests | 40 |
| docs | 306 |
| tests | 1566 |
| ci/ops | 27 |
| spec artifacts | 8 |
| agent instruction files | 6 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | About / Getting Started / Contributing / Citation / Contact Us / Media Kit | <! markdownlint disable MD001 MD041 <p align="center" <picture <source media=" prefers color scheme dark " srcset="https //raw.githubusercontent.com/vllm project/vllm/main/docs/assets/logos/vllm logo text dark.png" <img alt="vLLM" src="https //raw.githubusercontent.com/vllm project/vllm/main/docs/assets/logos/vllm logo text light.png" width=55% </picture </p <h3 align="center" Easy, fast, and cheap LLM serving for everyone </h3 <p align="center" <a href="https //docs.vllm.ai" <b Documentation</b </a <a href="https //blog.vllm.ai/" <b Blog</b </a <a href="https //arxiv.org/abs/2309.06180" <b Paper</b </a <a href="https //x.com/vllm project" <b Twitter/X</b </a <a href="https //discuss.vllm.ai |


## Key Files

### Manifests

- examples/pooling/embed/openai_embedding_long_text/README.md
- rust/src/engine-core-client/examples/README.md
- rust/src/llm/examples/README.md
- docs/benchmarking/README.md
- docs/cli/README.md
- docs/features/quantization/llm_compressor/README.md
- docs/examples/README.md
- docs/features/speculative_decoding/README.md
- docs/README.md
- examples/basic/offline_inference/README.md
- examples/deployment/chart-helm/README.md
- examples/disaggregated/disaggregated_encoder/README.md
- examples/disaggregated/disaggregated_serving/README.md
- examples/disaggregated/example_connector/README.md
- examples/disaggregated/kv_load_failure_recovery_offline/README.md
- examples/disaggregated/lmcache/README.md
- examples/features/logits_processor/README.md
- examples/features/openai_batch/README.md
- examples/features/structured_outputs/README.md
- examples/generate/multimodal/qwen2_5_omni/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- rust/AGENTS.md
- CLAUDE.md
- rust/CLAUDE.md
- benchmarks/kernels/requirements.txt
- benchmarks/multi_turn/requirements.txt
- tests/prompts/example.txt
- tests/prompts/summary.txt


### Agent Instruction Files

- AGENTS.md
- rust/AGENTS.md
- CLAUDE.md
- rust/CLAUDE.md
- tests/prompts/example.txt
- tests/prompts/summary.txt


## Top Directories

| dir | count |
| --- | --- |
| vllm | 2386 |
| tests | 1482 |
| rust | 297 |
| csrc | 292 |
| examples | 254 |
| docs | 250 |
| .buildkite | 178 |
| benchmarks | 109 |
| tools | 41 |
| .github | 30 |
| requirements | 24 |
| docker | 15 |
| cmake | 8 |
| .clang-format | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 3421 |
| .json | 594 |
| .md | 281 |
| .rs | 220 |
| .yaml | 210 |
| .sh | 119 |
| .cu | 92 |
| .jinja | 91 |
| .cuh | 77 |
| .txt | 66 |
| .hpp | 41 |
| .h | 40 |
| .cpp | 33 |
| .yml | 26 |
| .toml | 19 |
| [no-ext] | 18 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
