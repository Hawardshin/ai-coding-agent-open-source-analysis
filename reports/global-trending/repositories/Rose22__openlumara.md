# Rose22/openlumara

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Rose22/openlumara |
| local path | sources/Rose22__openlumara |
| HEAD | 54093a1 |
| stars/forks | 271 / 25 |
| language | Python |
| license |  |
| pushedAt | 2026-06-16T17:47:32Z |
| trendScore / priorityScore | 136 / 359 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 167 | README.md, docs/openlumara_dev_docs/webui_js_docs/messages.md, docs/openlumara_dev_docs/webui_js_docs/send.md |
| Developer tools / DX | 148 | README.md, docs/openlumara_dev_docs/channels/cli.md, docs/openlumara_dev_docs/channels/webui_frontend.md |
| Coding agent / software automation | 111 | channels/webui/static/css/storage_editor.css, main.py, modules/coder.py |
| AI agent / orchestration | 69 | README.md, docs/openlumara_dev_docs/core/api_client.md, docs/openlumara_dev_docs/core/storage.md |
| Security / supply chain | 46 | README.md, docs/openlumara_dev_docs/channels/discord.md, docs/openlumara_dev_docs/core/module.md |
| Data / ML platform | 18 | docs/openlumara_dev_docs/core/chat.md, modules/web_search.py, channels/webui/static/js/autocomplete.js |
| Frontend / app framework | 14 | docs/openlumara_dev_docs/channels/webui_frontend.md, core/api_client.py, docs/openlumara_dev_docs/architecture.md |
| Database / data infrastructure | 6 | docs/openlumara_dev_docs/webui_js_docs/audio.md, modules/coder.py, modules/http.py |
| Local LLM / inference | 5 | README.md, CONTRIBUTING.md, core/toolcalls.py |
| RAG / retrieval / knowledge | 5 | docs/openlumara_dev_docs/channels/telegram.md, docs/openlumara_dev_docs/core/config.md, docs/openlumara_dev_docs/webui_js_docs/export.md |
| Observability / evaluation | 4 | docs/openlumara_dev_docs/core/api_client.md, modules/calculator.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, observability, rag, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 201 |
| manifests | 2 |
| docs | 56 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | OpenLumara | OpenLumara / How to install / How to create your own channel / extend the class from core.channel.Channel to get all the required functionality / ⛔⛔⛔ THIS IS A LOBSTER-FREE ZONE ⛔⛔⛔ | OpenLumara OpenLumara is a modular, token efficient AI agent framework written from scratch in Python. Unlike many other AI agents out there, this one is local first , lightweight, modular, and very fast. The system prompt can be extremely small, as little as around 4000 tokens with normal use. This makes it very well suited for local use, but it also results in drastically reduced token use when used with public API's. It pairs well with llamacpp and koboldcpp . Currently supports WebUI for use in your browser , CLI terminal interface , Telegram, Discord, Matrix with encryption support! . More coming. !TIP OpenLumara is especially well suited to life management todos, notes, morning routine |


## Key Files

### Manifests

- README.md
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt
- docs/openlumara_dev_docs/architecture.md


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| channels | 95 |
| docs | 54 |
| modules | 25 |
| core | 14 |
| .gitignore | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| main.py | 1 |
| README.md | 1 |
| requirements_matrix.txt | 1 |
| requirements_termux.txt | 1 |
| requirements.txt | 1 |
| run_termux.sh | 1 |
| run.bat | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 56 |
| .py | 47 |
| .json | 31 |
| .js | 30 |
| .css | 24 |
| .sh | 3 |
| .txt | 3 |
| .bat | 2 |
| .html | 2 |
| [no-ext] | 2 |
| .example | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
