# hwdsl2/self-hosted-ai-stack

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/hwdsl2/self-hosted-ai-stack |
| local path | sources/hwdsl2__self-hosted-ai-stack |
| HEAD | 0c58b52 |
| stars/forks | 91 / 17 |
| language | Shell |
| license |  |
| pushedAt | 2026-06-15T04:01:07Z |
| trendScore / priorityScore | 140 / 402 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 500 | stacks/rag-pipeline-full/README.md, stacks/rag-pipeline/README.md, README.md |
| Local LLM / inference | 500 | stacks/rag-pipeline-full/README.md, stacks/rag-pipeline/README.md, README.md |
| MCP / agent interoperability | 500 | stacks/rag-pipeline-full/README.md, stacks/rag-pipeline/README.md, README.md |
| Database / data infrastructure | 318 | stacks/rag-pipeline-full/README.md, stacks/rag-pipeline/README.md, README.md |
| RAG / retrieval / knowledge | 197 | stacks/rag-pipeline-full/README.md, stacks/rag-pipeline/README.md, README.md |
| Data / ML platform | 114 | stacks/rag-pipeline-full/README.md, stacks/rag-pipeline/README.md, README.md |
| Security / supply chain | 76 | README.md, stacks/chat-ui/README.md, stacks/voice-chat/README.md |
| Coding agent / software automation | 49 | README.md, stacks/ai-tools/README.md, stacks/code-assistant/README.md |
| Developer tools / DX | 29 | README.md, stacks/voice-chat/README.md, stacks/voice-pipeline/README.md |
| AI agent / orchestration | 2 | stacks/chat-ui/README.md, stacks/voice-chat/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, rag, security, securityTooling, vectorSearch |
| stacks | docs/awesome-list |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 82 |
| manifests | 28 |
| docs | 54 |
| tests | 0 |
| ci/ops | 19 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Self-Hosted AI Stack | Self-Hosted AI Stack / Community / Included services / Quick start / Clone the repository to get the compose files / At any time from the data volume: / Or from the live logs (only shown on first start): / Stop and remove all containers (data is preserved in Docker volumes) / GPU acceleration (NVIDIA CUDA) / Lightweight stacks | English README.md 简体中文 README zh.md 繁體中文 README zh Hant.md Русский README ru.md Self Hosted AI Stack ! Powered by Docker Compose docs/images/powered by docker compose.svg https //docs.docker.com/compose/ &nbsp; ! Docker Pulls https //raw.githubusercontent.com/hwdsl2/badges/main/img/docker pulls ai stack.svg https //hub.docker.com/u/hwdsl2 &nbsp; ! License MIT docs/images/license.svg https //opensource.org/licenses/MIT <p align="center" <img src="docs/images/self hosted ai stack overview.png" alt="Self Hosted AI Stack deploy a complete self hosted AI stack with one command" width="100%" </p Includes Ollama, LiteLLM, AnythingLLM, Whisper, MCP Gateway, Embeddings, Docling, and Kokoro — fully co |


## Key Files

### Manifests

- stacks/rag-pipeline-full/README.md
- stacks/rag-pipeline/README.md
- README.md
- stacks/ai-tools/README.md
- stacks/chat-only/README.md
- stacks/chat-ui/README.md
- stacks/code-assistant/README.md
- stacks/voice-chat/README.md
- stacks/voice-pipeline/README.md
- stacks/rag-pipeline-full/docker-compose.yml
- stacks/rag-pipeline/docker-compose.yml
- docker-compose.yml
- stacks/ai-tools/docker-compose.yml
- stacks/chat-only/docker-compose.yml
- stacks/chat-ui/docker-compose.yml
- stacks/code-assistant/docker-compose.yml
- stacks/voice-chat/docker-compose.yml
- stacks/voice-pipeline/docker-compose.yml
- stacks/rag-pipeline-full/docker-compose.cuda.yml
- stacks/rag-pipeline/docker-compose.cuda.yml


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| stacks | 52 |
| docs | 10 |
| .github | 5 |
| .gitattributes | 1 |
| .gitignore | 1 |
| caddy | 1 |
| CHANGELOG.md | 1 |
| chat-ui-bootstrap.sh | 1 |
| CONTRIBUTING.md | 1 |
| docker-compose.cuda.yml | 1 |
| docker-compose.proxy.yml | 1 |
| docker-compose.yml | 1 |
| LICENSE.md | 1 |
| README-ru.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 52 |
| .yml | 19 |
| [no-ext] | 5 |
| .sh | 4 |
| .svg | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
