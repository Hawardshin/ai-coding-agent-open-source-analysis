# mudler/LocalAI

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/mudler/LocalAI |
| local path | sources/mudler__LocalAI |
| HEAD | 4ce0f61 |
| stars/forks | 46944 / 4146 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T22:48:57Z |
| trendScore / priorityScore | 222 / 566 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 320 | examples/README.md, docs/README.md, AGENTS.md |
| Local LLM / inference | 275 | backend/python/vllm/README.md, AGENTS.md, backend/README.md |
| AI agent / orchestration | 255 | AGENTS.md, README.md, docs/content/features/agents.md |
| MCP / agent interoperability | 169 | AGENTS.md, README.md, docs/content/features/agents.md |
| Observability / evaluation | 75 | backend/README.md, docs/content/features/agents.md, go.mod |
| Frontend / app framework | 67 | AGENTS.md, README.md, Dockerfile |
| RAG / retrieval / knowledge | 62 | examples/README.md, backend/README.md, README.md |
| Developer tools / DX | 57 | docs/README.md, README.md, backend/python/README.md |
| Database / data infrastructure | 44 | README.md, docs/content/features/agents.md, docker-compose.yaml |
| Data / ML platform | 36 | backend/README.md, README.md, backend/python/diffusers/README.md |
| Security / supply chain | 33 | README.md, go.mod, Makefile |
| Coding agent / software automation | 4 | AGENTS.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2539 |
| manifests | 40 |
| docs | 175 |
| tests | 508 |
| ci/ops | 56 |
| spec artifacts | 50 |
| agent instruction files | 17 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | CUDA 13 | Guided tour / Quickstart / macOS / Containers (Docker, podman, ...) / CUDA 13 / CUDA 12 / NVIDIA Jetson ARM64 (CUDA 12, for AGX Orin and similar) / NVIDIA Jetson ARM64 (CUDA 13, for DGX Spark) / Loading models / From the model gallery (see available models with `local-ai models list` or at https://models.localai.io) | <h1 align="center" <br <img width="300" src="./core/http/static/logo.png" <br <br </h1 <p align="center" <a href="https //github.com/go skynet/LocalAI/stargazers" target="blank" <img src="https //img.shields.io/github/stars/go skynet/LocalAI?style=for the badge" alt="LocalAI stars"/ </a <a href='https //github.com/go skynet/LocalAI/releases' <img src='https //img.shields.io/github/release/go skynet/LocalAI?&label=Latest&style=for the badge' </a <a href="LICENSE" target="blank" <img src="https //img.shields.io/badge/License MIT yellow.svg?style=for the badge" alt="LocalAI License"/ </a </p <p align="center" <a href="https //twitter.com/LocalAI API" target="blank" <img src="https //img.shields |


## Key Files

### Manifests

- examples/README.md
- docs/README.md
- backend/python/vllm/README.md
- AGENTS.md
- backend/README.md
- README.md
- tests/fixtures/faces/README.md
- backend/python/coqui/README.md
- backend/python/diffusers/README.md
- backend/python/insightface/README.md
- backend/python/kokoro/README.md
- backend/python/README.md
- backend/python/rerankers/README.md
- backend/python/speaker-recognition/README.md
- backend/python/transformers/README.md
- core/config/gen_inference_defaults/README.md
- docs/docker-compose.yaml
- docs/Dockerfile
- docs/go.mod
- docs/package.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- docs/content/features/agents.md
- backend/python/vllm-omni/requirements.txt
- backend/python/vllm/requirements.txt
- backend/python/ace-step/requirements.txt
- backend/python/chatterbox/requirements.txt
- backend/python/common/template/requirements.txt
- backend/python/coqui/requirements.txt
- backend/python/diffusers/requirements.txt
- backend/python/faster-qwen3-tts/requirements.txt
- backend/python/faster-whisper/requirements.txt
- backend/python/fish-speech/requirements.txt
- backend/python/insightface/requirements.txt
- backend/python/kitten-tts/requirements.txt
- backend/python/kokoro/requirements.txt
- backend/python/liquid-audio/requirements.txt
- backend/python/llama-cpp-quantization/requirements.txt
- backend/python/mlx-audio/requirements.txt
- backend/python/mlx-distributed/requirements.txt
- backend/python/mlx-vlm/requirements.txt


### Agent Instruction Files

- AGENTS.md
- docs/content/features/agents.md
- pkg/mcp/localaitools/prompts/00_role.md
- pkg/mcp/localaitools/prompts/10_safety.md
- pkg/mcp/localaitools/prompts/20_tools.md
- pkg/mcp/localaitools/prompts/skills/configure_branding.md
- pkg/mcp/localaitools/prompts/skills/edit_model_config.md
- pkg/mcp/localaitools/prompts/skills/import_model_from_uri.md
- pkg/mcp/localaitools/prompts/skills/install_chat_model.md
- pkg/mcp/localaitools/prompts/skills/system_status.md
- pkg/mcp/localaitools/prompts/skills/upgrade_backend.md
- core/http/react-ui/public/locales/de/agents.json
- core/http/react-ui/public/locales/en/agents.json
- core/http/react-ui/public/locales/es/agents.json
- core/http/react-ui/public/locales/id/agents.json


## Top Directories

| dir | count |
| --- | --- |
| core | 1151 |
| backend | 748 |
| pkg | 206 |
| docs | 131 |
| gallery | 78 |
| tests | 66 |
| .github | 63 |
| .agents | 15 |
| scripts | 14 |
| cmd | 10 |
| prompt-templates | 7 |
| .docker | 5 |
| .devcontainer | 4 |
| swagger | 4 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 1116 |
| .txt | 274 |
| .sh | 209 |
| .md | 124 |
| .jsx | 115 |
| .yaml | 109 |
| .py | 99 |
| .json | 92 |
| [no-ext] | 92 |
| .js | 88 |
| .html | 64 |
| .yml | 38 |
| .ttf | 24 |
| .css | 23 |
| .cpp | 13 |
| .h | 12 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
