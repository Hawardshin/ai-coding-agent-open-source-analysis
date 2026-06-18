# schmitech/orbit

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/schmitech/orbit |
| local path | sources/schmitech__orbit |
| HEAD | 184dcae |
| stars/forks | 282 / 49 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T23:34:09Z |
| trendScore / priorityScore | 154 / 496 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Database / data infrastructure | 500 | docs/README.md, examples/customer-orders/README.md, examples/intent-templates/duckdb-intent-template/examples/crime-stats/edmonton/README.md |
| Local LLM / inference | 446 | docs/README.md, docs/cookbook/README.md, utils/vector/pinecone/README.md |
| RAG / retrieval / knowledge | 396 | docs/README.md, examples/customer-orders/README.md, examples/intent-templates/duckdb-intent-template/README.md |
| Cloud native / infrastructure | 334 | docs/README.md, docs/cookbook/README.md, clients/orbitchat/README.md |
| Data / ML platform | 227 | docs/README.md, examples/intent-templates/duckdb-intent-template/examples/crime-stats/edmonton/README.md, examples/intent-templates/duckdb-intent-template/examples/crime-stats/montreal/README.md |
| Security / supply chain | 211 | docs/README.md, examples/intent-templates/http-intent-template/README.md, clients/node-api/README.md |
| MCP / agent interoperability | 159 | docs/README.md, docs/cookbook/README.md, README.md |
| AI agent / orchestration | 132 | docs/README.md, examples/intent-templates/duckdb-intent-template/examples/crime-stats/edmonton/README.md, examples/intent-templates/duckdb-intent-template/examples/crime-stats/montreal/README.md |
| Developer tools / DX | 121 | examples/intent-templates/duckdb-intent-template/examples/crime-stats/README.md, examples/intent-templates/elasticsearch-intent-template/application-logs/README.md, clients/node-api/test/README.md |
| Frontend / app framework | 96 | clients/node-api/README.md, clients/openai-realtime-voice/README.md, clients/orbitchat/README.md |
| Observability / evaluation | 74 | examples/customer-orders/README.md, README.md, server/tests/perf/README.md |
| Coding agent / software automation | 4 | examples/intent-templates/http-intent-template/README.md, clients/orbitchat/CLAUDE.md, CLAUDE.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1316 |
| manifests | 40 |
| docs | 236 |
| tests | 206 |
| ci/ops | 3 |
| spec artifacts | 38 |
| agent instruction files | 38 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | 💡 What is ORBIT? / 🏗️ Architecture / 🎬 Demos / 🚀 Key Capabilities: / ⚡ Quick Start / 📦 Option A: Release Tarball (Manual Linux/macOS Install — Preferred) / 🐳 Option B: Docker Compose / ⚙️ Verify & Access the Gateway / ⚖️ Why ORBIT? (Compared to custom setups) / 🎨 Client Integrations | <div align="center" <a href="https //github.com/schmitech/orbit" <img src="https //github.com/user attachments/assets/565d48af 1dc5 49cb a1d4 77f4e696662c" alt="ORBIT Logo" width="250"/ </a ORBIT Open Retrieval Based Inference Toolkit Self hosted, private AI gateway and unified RAG infrastructure for multi model applications. </div <p align="center" <a href="https //opensource.org/licenses/Apache 2.0" <img src="https //img.shields.io/badge/License Apache 2.0 blue.svg?style=flat square" alt="License" </a <a href="https //www.python.org/downloads/" <img src="https //img.shields.io/badge/Python 3.12+ blue.svg?style=flat square&logo=python&logoColor=white" alt="Python" </a <a href="https //githu |


## Key Files

### Manifests

- docs/README.md
- examples/customer-orders/README.md
- examples/intent-templates/duckdb-intent-template/examples/crime-stats/edmonton/README.md
- examples/intent-templates/duckdb-intent-template/examples/crime-stats/montreal/README.md
- examples/intent-templates/duckdb-intent-template/examples/crime-stats/README.md
- examples/intent-templates/duckdb-intent-template/README.md
- examples/intent-templates/elasticsearch-intent-template/application-logs/README.md
- examples/intent-templates/firecrawl-intent-template/README.md
- examples/intent-templates/graphql-intent-template/README.md
- examples/intent-templates/http-intent-template/examples/jsonplaceholder/README.md
- examples/intent-templates/http-intent-template/README.md
- clients/node-api/test/README.md
- docs/cookbook/README.md
- clients/node-api/README.md
- clients/openai-realtime-voice/README.md
- clients/orbitchat/README.md
- utils/vector/pinecone/README.md
- utils/vector/qdrant/README.md
- utils/vllm/README.md
- clients/orbitchat/CLAUDE.md


### Spec / Docs / Prompt Artifacts

- clients/orbitchat/CLAUDE.md
- CLAUDE.md
- examples/prompts/audio/audio-transcription-prompt.md
- examples/prompts/audio/local-audio-transcription-prompt.md
- examples/prompts/audio/multilingual-voice-assistant-prompt.md
- examples/prompts/audio/personaplex/personaplex-assistant-prompt.md
- examples/prompts/audio/personaplex/personaplex-chat-prompt.md
- examples/prompts/audio/personaplex/personaplex-customer-service-prompt.md
- examples/prompts/audio/personaplex/personaplex-interview-coach-prompt.md
- examples/prompts/audio/personaplex/personaplex-language-tutor-prompt.md
- examples/prompts/audio/personaplex/personaplex-storyteller-prompt.md
- examples/prompts/audio/premium-voice-chat-prompt.md
- examples/prompts/audio/real-time-voice-chat-prompt.md
- examples/prompts/audio/simple-chat-with-files-audio-prompt.md
- examples/prompts/audio/voice-chat-prompt.md
- examples/prompts/examples/activity/activity-assistant-normal-prompt.md
- examples/prompts/examples/activity/activity-assistant-poet-prompt.md
- examples/prompts/examples/activity/activity-assistant-salesperson-prompt.md
- examples/prompts/examples/city/city-assistant-enhanced-prompt.md
- examples/prompts/examples/city/city-assistant-friendly-prompt.md


### Agent Instruction Files

- clients/orbitchat/CLAUDE.md
- CLAUDE.md
- examples/prompts/audio/audio-transcription-prompt.md
- examples/prompts/audio/local-audio-transcription-prompt.md
- examples/prompts/audio/multilingual-voice-assistant-prompt.md
- examples/prompts/audio/personaplex/personaplex-assistant-prompt.md
- examples/prompts/audio/personaplex/personaplex-chat-prompt.md
- examples/prompts/audio/personaplex/personaplex-customer-service-prompt.md
- examples/prompts/audio/personaplex/personaplex-interview-coach-prompt.md
- examples/prompts/audio/personaplex/personaplex-language-tutor-prompt.md
- examples/prompts/audio/personaplex/personaplex-storyteller-prompt.md
- examples/prompts/audio/premium-voice-chat-prompt.md
- examples/prompts/audio/real-time-voice-chat-prompt.md
- examples/prompts/audio/simple-chat-with-files-audio-prompt.md
- examples/prompts/audio/voice-chat-prompt.md


## Top Directories

| dir | count |
| --- | --- |
| server | 651 |
| examples | 232 |
| clients | 142 |
| docs | 99 |
| utils | 75 |
| config | 43 |
| install | 28 |
| bin | 24 |
| docker | 10 |
| .gitattributes | 1 |
| .gitignore | 1 |
| CHANGELOG.md | 1 |
| CLAUDE.md | 1 |
| CODE_OF_CONDUCT.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 717 |
| .md | 236 |
| .yaml | 143 |
| .ts | 53 |
| .tsx | 39 |
| .sh | 29 |
| .js | 18 |
| .sql | 18 |
| .json | 17 |
| [no-ext] | 9 |
| .example | 5 |
| .css | 4 |
| .html | 4 |
| .minimal | 3 |
| .toml | 3 |
| .conf | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
