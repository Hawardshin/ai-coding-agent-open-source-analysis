# gpustack/gpustack

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/gpustack/gpustack |
| local path | sources/gpustack__gpustack |
| HEAD | 88bd070 |
| stars/forks | 5175 / 548 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T12:10:31Z |
| trendScore / priorityScore | 142 / 441 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 500 | README.md, tests/websocket_proxy/README.md, charts/gpustack-chart/README.md |
| Observability / evaluation | 500 | README.md, tests/websocket_proxy/README.md, Makefile |
| Local LLM / inference | 468 | README.md, charts/gpustack-chart/README.md, pack/Dockerfile |
| Data / ML platform | 214 | pack/Dockerfile, docs/performance-lab/references/evaluating-lmcache-prefill-acceleration-in-vllm.md, docs/performance-lab/references/the-impact-of-quantization-on-vllm-inference-performance.md |
| Database / data infrastructure | 186 | charts/gpustack-chart/README.md, pack/Dockerfile, docs/cli-reference/start.md |
| RAG / retrieval / knowledge | 71 | docs/integrations/integrate-with-ragflow.md, docs/performance-lab/references/evaluating-lmcache-prefill-acceleration-in-vllm.md, docs/user-guide/playground/embedding.md |
| Security / supply chain | 68 | README.md, charts/gpustack-chart/README.md, pack/Dockerfile |
| Developer tools / DX | 51 | pack/Dockerfile, docs/cli-reference/start.md, docs/user-guide/gpuservice-storage-types.md |
| Coding agent / software automation | 25 | docs/image-selector/assets/style.css, docs/integrations/integrate-with-claude-code.md |
| AI agent / orchestration | 16 | pack/Dockerfile, docs/tutorials/running-deepseek-r1-671b-with-distributed-vllm.md, docs/contributing.md |
| Frontend / app framework | 2 | pack/Dockerfile, benchmarks/benchmark_serving.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 874 |
| manifests | 11 |
| docs | 124 |
| tests | 190 |
| ci/ops | 21 |
| spec artifacts | 3 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Replace `your_api_key` and `your_gpustack_server_url` | Overview / Architecture / Optimized Inference Performance / Supported Accelerators / Quick Start / Prerequisites / Install GPUStack / Set Up a GPU Cluster / Deploy a Model / Use the model via API | <br <p align="center" <img alt="GPUStack" src="https //raw.githubusercontent.com/gpustack/gpustack/main/docs/assets/gpustack logo.png" width="300px"/ </p <br <p align="center" <a href="https //docs.gpustack.ai" target=" blank" <img alt="Documentation" src="https //img.shields.io/badge/Docs GPUStack blue?logo=readthedocs&logoColor=white" </a <a href="./LICENSE" target=" blank" <img alt="License" src="https //img.shields.io/github/license/gpustack/gpustack?logo=github&logoColor=white&label=License&color=blue" </a <a href="https //discord.gg/VXYJzuaqwD" target=" blank" <img alt="Discord" src="https //img.shields.io/badge/Discord GPUStack blue?logo=discord&logoColor=white" </a <a href="https //t |


## Key Files

### Manifests

- README.md
- tests/websocket_proxy/README.md
- charts/gpustack-chart/README.md
- benchmarks/requirements.txt
- Makefile
- pack/Dockerfile
- pyproject.toml
- docs/installation/requirements.md
- docker-compose/docker-compose.external-observability.yaml
- docker-compose/docker-compose.server.yaml
- hack/package.sh


### Spec / Docs / Prompt Artifacts

- benchmarks/requirements.txt
- docs/architecture.md
- docs/installation/requirements.md


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| gpustack | 362 |
| tests | 190 |
| docs | 119 |
| pack | 111 |
| hack | 35 |
| charts | 20 |
| .github | 11 |
| docker-compose | 7 |
| benchmarks | 3 |
| .dockerignore | 1 |
| .flake8 | 1 |
| .gemini | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 453 |
| [no-ext] | 112 |
| .md | 110 |
| .json | 91 |
| .yaml | 35 |
| .sh | 21 |
| .yml | 12 |
| .jinja | 11 |
| .ps1 | 11 |
| .js | 4 |
| .ini | 3 |
| .css | 2 |
| .html | 2 |
| .jsonc | 2 |
| .txt | 2 |
| .mako | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
