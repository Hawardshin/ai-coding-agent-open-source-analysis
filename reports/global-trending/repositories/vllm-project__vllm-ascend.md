# vllm-project/vllm-ascend

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/vllm-project/vllm-ascend |
| local path | sources/vllm-project__vllm-ascend |
| HEAD | 350d1f0 |
| stars/forks | 2258 / 1411 |
| language | C++ |
| license |  |
| pushedAt | 2026-06-17T16:47:35Z |
| trendScore / priorityScore | 137 / 415 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Local LLM / inference | 500 | docs/README.md, examples/external_online_dp/README.md, .agents/README.md |
| Cloud native / infrastructure | 176 | examples/external_online_dp/README.md, .agents/README.md, .github/workflows/schedule_vllm_e2e_test.yaml |
| Data / ML platform | 169 | benchmarks/README.md, README.md, examples/prompt_embed_inference.py |
| Observability / evaluation | 151 | benchmarks/README.md, README.md, .github/workflows/schedule_vllm_e2e_test.yaml |
| RAG / retrieval / knowledge | 69 | README.md, docs/source/developer_guide/performance_and_debug/performance_benchmark.md, docs/source/tutorials/models/Qwen3_embedding.md |
| Security / supply chain | 46 | .github/workflows/schedule_vllm_e2e_test.yaml, Dockerfile, examples/offline_data_parallel.py |
| AI agent / orchestration | 17 | .agents/README.md, .claude/README.md, CLAUDE.md |
| Developer tools / DX | 17 | benchmarks/README.md, AGENTS.md, docs/source/developer_guide/evaluation/using_evalscope.md |
| Coding agent / software automation | 3 | .agents/README.md, AGENTS.md, .claude/README.md |
| MCP / agent interoperability | 3 | CLAUDE.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Python, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2757 |
| manifests | 26 |
| docs | 317 |
| tests | 528 |
| ci/ops | 64 |
| spec artifacts | 6 |
| agent instruction files | 5 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Overview / Prerequisites / Getting Started / Branch / Contributing / Weekly Meeting / License | <p align="center" <picture <source media=" prefers color scheme dark " srcset="https //raw.githubusercontent.com/vllm project/vllm ascend/main/docs/source/logos/vllm ascend logo text dark.png" <img alt="vllm ascend" src="https //raw.githubusercontent.com/vllm project/vllm ascend/main/docs/source/logos/vllm ascend logo text light.png" width=55% </picture </p <h3 align="center" vLLM Ascend Plugin </h3 <div align="center" ! DeepWiki https //img.shields.io/badge/DeepWiki Ask AI .svg?style=flat&color=0052D9&labelColor=000000&logo=data image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyCAYAAAAnWDnqAAAAAXNSR0IArs4c6QAAA05JREFUaEPtmUtyEzEQhtWTQyQLHNak2AB7ZnyXZMEjXMGeK/AIi+QuHrMnbChYY7MIh8g01fJoopFb0uh |


## Key Files

### Manifests

- docs/README.md
- examples/external_online_dp/README.md
- .agents/README.md
- benchmarks/README.md
- vllm_ascend/worker/v2/README.md
- AGENTS.md
- .claude/README.md
- README.md
- csrc/attention/compressor/README.md
- csrc/attention/kv_quant_sparse_attn_sharedkv_metadata/README.md
- csrc/attention/kv_quant_sparse_attn_sharedkv/README.md
- csrc/attention/lightning_indexer/README.md
- csrc/attention/quant_lightning_indexer_metadata/README.md
- csrc/attention/quant_lightning_indexer/README.md
- csrc/attention/sparse_attn_sharedkv_metadata/README.md
- csrc/attention/sparse_attn_sharedkv/README.md
- csrc/attention/sparse_flash_attention/README.md
- csrc/gmm/grouped_matmul_swiglu_quant/README.md
- CLAUDE.md
- docs/Makefile


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- .claude/README.md
- CLAUDE.md
- requirements.txt
- tests/e2e/prompts/example.txt
- tests/e2e/prompts/long_prompt.txt


### Agent Instruction Files

- AGENTS.md
- .claude/README.md
- CLAUDE.md
- tests/e2e/prompts/example.txt
- tests/e2e/prompts/long_prompt.txt


## Top Directories

| dir | count |
| --- | --- |
| csrc | 1347 |
| tests | 516 |
| vllm_ascend | 409 |
| docs | 274 |
| .github | 78 |
| examples | 36 |
| tools | 30 |
| .agents | 20 |
| benchmarks | 9 |
| .gemini | 2 |
| .clang-format | 1 |
| .claude | 1 |
| .gitignore | 1 |
| .gitmodules | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 924 |
| .h | 710 |
| .cpp | 299 |
| .md | 176 |
| .po | 136 |
| .txt | 127 |
| .yaml | 118 |
| .hpp | 63 |
| .cmake | 48 |
| .sh | 47 |
| .yml | 22 |
| .json | 17 |
| .inc | 16 |
| [no-ext] | 11 |
| .xml | 5 |
| .info | 4 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
