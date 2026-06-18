# waybarrios/vllm-mlx

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/waybarrios/vllm-mlx |
| local path | sources/waybarrios__vllm-mlx |
| HEAD | a48c86c |
| stars/forks | 1350 / 188 |
| language | Python |
| license |  |
| pushedAt | 2026-06-12T21:09:54Z |
| trendScore / priorityScore | 168 / 465 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Local LLM / inference | 500 | docs/benchmarks/README.md, docs/es/benchmarks/README.md, docs/fr/benchmarks/README.md |
| MCP / agent interoperability | 303 | README.md, examples/mcp_chat.py, examples/mcp_tool_use.py |
| Observability / evaluation | 281 | docs/benchmarks/README.md, docs/es/benchmarks/README.md, docs/fr/benchmarks/README.md |
| Data / ML platform | 154 | README.md, examples/benchmark_all_models.py, examples/benchmark_detokenizer.py |
| RAG / retrieval / knowledge | 145 | README.md, examples/mllm_benchmark.py, docs/es/guides/embeddings.md |
| AI agent / orchestration | 99 | README.md, examples/mcp_tool_use.py, examples/mllm_benchmark.py |
| Developer tools / DX | 84 | README.md, pyproject.toml, docs/es/guides/embeddings.md |
| Security / supply chain | 55 | docs/es/guides/mcp-tools.md, docs/es/reference/cli.md, docs/fr/guides/mcp-tools.md |
| Database / data infrastructure | 36 | docs/benchmarks/README.md, README.md, docs/es/guides/mcp-tools.md |
| Cloud native / infrastructure | 11 | docs/es/guides/mcp-tools.md, docs/fr/guides/mcp-tools.md, docs/guides/mcp-tools.md |
| Coding agent / software automation | 6 | README.md, examples/closed_captions.py, tests/test_prompt_warmup.py |
| Frontend / app framework | 1 | docs/fr/reference/cli.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 363 |
| manifests | 6 |
| docs | 96 |
| tests | 97 |
| ci/ops | 1 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | vllm-mlx | vllm-mlx / What is vllm-mlx? / Quick start (30 seconds) / Features / APIs / Throughput & memory / Multimodal / Reasoning & advanced / Observability / Native GPU acceleration | vllm mlx Read this in other languages English README.md · Español README.es.md · Français README.fr.md · 中文 README.zh.md Continuous batching + OpenAI + Anthropic APIs in one server. Native Apple Silicon inference. ! PyPI version https //img.shields.io/pypi/v/vllm mlx.svg https //pypi.org/project/vllm mlx/ ! PyPI Downloads https //img.shields.io/pypi/dm/vllm mlx.svg https //pypi.org/project/vllm mlx/ ! Python 3.10+ https //img.shields.io/badge/python 3.10+ blue.svg https //www.python.org/downloads/ ! License https //img.shields.io/badge/License Apache 2.0 blue.svg LICENSE ! Apple Silicon https //img.shields.io/badge/Apple Silicon black.svg https //support.apple.com/en us/HT211814 ! GitHub sta |


## Key Files

### Manifests

- docs/benchmarks/README.md
- docs/es/benchmarks/README.md
- docs/fr/benchmarks/README.md
- docs/zh/benchmarks/README.md
- README.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- docs/development/architecture.md


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| vllm_mlx | 118 |
| tests | 97 |
| docs | 91 |
| examples | 34 |
| .github | 7 |
| scripts | 2 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| benchmarks | 1 |
| gsm8k_qwen3_0.6b_results.json | 1 |
| LICENSE | 1 |
| mcp.example.json | 1 |
| mise.toml | 1 |
| pyproject.toml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 236 |
| .md | 96 |
| .json | 9 |
| .wav | 6 |
| .yml | 6 |
| .sh | 3 |
| .toml | 2 |
| [no-ext] | 2 |
| .ini | 1 |
| .mp3 | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
