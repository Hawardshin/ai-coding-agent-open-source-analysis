# NVIDIA/Model-Optimizer

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/NVIDIA/Model-Optimizer |
| local path | sources/NVIDIA__Model-Optimizer |
| HEAD | 769ea5f |
| stars/forks | 2944 / 450 |
| language | Python |
| license |  |
| pushedAt | 2026-06-18T00:15:10Z |
| trendScore / priorityScore | 137 / 434 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Data / ML platform | 500 | examples/llm_autodeploy/README.md, examples/llm_distill/README.md, examples/llm_eval/README.md |
| Observability / evaluation | 314 | examples/llm_distill/README.md, examples/llm_eval/README.md, examples/llm_ptq/README.md |
| Local LLM / inference | 237 | examples/llm_eval/README.md, examples/llm_ptq/README.md, examples/llm_qat/README.md |
| Cloud native / infrastructure | 127 | examples/llm_autodeploy/README.md, examples/llm_distill/README.md, examples/llm_ptq/README.md |
| Developer tools / DX | 70 | examples/llm_eval/README.md, examples/llm_qad/README.md, examples/llm_qat/configs/dataset/README.md |
| AI agent / orchestration | 45 | .agents/README.md, tools/mcp/README.md, AGENTS.md |
| Security / supply chain | 39 | examples/onnx_ptq/README.md, examples/specdec_bench/README.md, examples/torch_onnx/README.md |
| MCP / agent interoperability | 35 | tools/mcp/README.md, tools/mcp/pyproject.toml |
| Coding agent / software automation | 29 | examples/llm_qat/configs/dataset/README.md, examples/megatron_bridge/tutorials/NVIDIA-Nemotron-3-Nano-30B-A3B-BF16/README.md, examples/pruning/minitron/NVIDIA-Nemotron-Nano-9B-v2/README.md |
| RAG / retrieval / knowledge | 12 | examples/windows/accuracy_benchmark/perplexity_metrics/README.md, examples/diffusers/fastgen/README.md, examples/pruning/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Python, C/C++ |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1758 |
| manifests | 40 |
| docs | 197 |
| tests | 418 |
| ci/ops | 15 |
| spec artifacts | 33 |
| agent instruction files | 4 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | NVIDIA Model Optimizer | NVIDIA Model Optimizer / Latest News / Install / Clone the Model Optimizer repository / Techniques / Pre-Quantized Checkpoints / Resources / Model Support Matrix / Deprecation Policy / Contributing | <div align="center" ! Banner image docs/source/assets/model optimizer banner.png NVIDIA Model Optimizer ! Documentation https //img.shields.io/badge/Documentation latest brightgreen.svg?style=flat https //nvidia.github.io/Model Optimizer ! version https //img.shields.io/pypi/v/nvidia modelopt?label=Release https //pypi.org/project/nvidia modelopt/ ! license https //img.shields.io/badge/License Apache%202.0 blue ./LICENSE Documentation https //nvidia.github.io/Model Optimizer Roadmap https //github.com/NVIDIA/Model Optimizer/issues/146 </div NVIDIA Model Optimizer referred to as Model Optimizer , or ModelOpt is a library comprising state of the art model optimization techniques techniques inc |


## Key Files

### Manifests

- examples/llm_autodeploy/README.md
- examples/llm_distill/README.md
- examples/llm_eval/README.md
- examples/llm_ptq/README.md
- examples/llm_qad/README.md
- examples/llm_qat/configs/dataset/README.md
- examples/llm_qat/llama_factory/README.md
- examples/llm_qat/README.md
- examples/llm_sparsity/attention_sparsity/README.md
- examples/llm_sparsity/weight_sparsity/README.md
- examples/vllm_serve/README.md
- examples/windows/accuracy_benchmark/fvd_metrics/README.md
- examples/windows/accuracy_benchmark/kl_divergence_metrics/README.md
- examples/windows/accuracy_benchmark/perplexity_metrics/README.md
- examples/windows/accuracy_benchmark/README.md
- examples/windows/onnx_ptq/genai_llm/README.md
- examples/alpamayo/README.md
- examples/cnn_qat/README.md
- examples/dataset/README.md
- examples/deepseek/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- examples/diffusers/eval/requirements.txt
- examples/llm_distill/requirements.txt
- examples/llm_eval/requirements.txt
- examples/llm_ptq/requirements.txt
- examples/llm_qat/notebooks/requirements.txt
- examples/llm_qat/requirements.txt
- examples/llm_sparsity/weight_sparsity/requirements.txt
- examples/windows/accuracy_benchmark/fvd_metrics/requirements.txt
- examples/windows/accuracy_benchmark/kl_divergence_metrics/requirements.txt
- examples/windows/accuracy_benchmark/perplexity_metrics/requirements.txt
- examples/windows/accuracy_benchmark/requirements.txt
- examples/windows/onnx_ptq/genai_llm/requirements.txt
- tools/debugger/CLAUDE.md
- tools/launcher/CLAUDE.md
- examples/cnn_qat/requirements.txt
- examples/diffusers/distillation/requirements.txt
- examples/diffusers/fastgen/requirements.txt
- examples/diffusers/requirements.txt
- examples/gpt-oss/requirements.txt


### Agent Instruction Files

- AGENTS.md
- tools/debugger/CLAUDE.md
- tools/launcher/CLAUDE.md
- .github/workflows/claude.yml


## Top Directories

| dir | count |
| --- | --- |
| modelopt | 534 |
| examples | 406 |
| tests | 394 |
| modelopt_recipes | 123 |
| tools | 113 |
| .agents | 73 |
| docs | 39 |
| experimental | 33 |
| .github | 24 |
| .vscode | 2 |
| .coderabbit.yaml | 1 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .gitlab | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 1100 |
| .yaml | 279 |
| .md | 157 |
| .sh | 58 |
| .rst | 37 |
| .txt | 26 |
| [no-ext] | 20 |
| .yml | 18 |
| .ipynb | 15 |
| .json | 13 |
| .cpp | 7 |
| .jinja | 6 |
| .h | 5 |
| .cu | 4 |
| .toml | 4 |
| .conf | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
