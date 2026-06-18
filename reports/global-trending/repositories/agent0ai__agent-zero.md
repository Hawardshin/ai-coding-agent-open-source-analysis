# agent0ai/agent-zero

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/agent0ai/agent-zero |
| local path | sources/agent0ai__agent-zero |
| HEAD | f9d8167 |
| stars/forks | 18111 / 3662 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T13:04:26Z |
| trendScore / priorityScore | 163 / 478 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | prompts/AGENTS.md, docs/README.md, plugins/_memory/README.md |
| MCP / agent interoperability | 177 | docs/README.md, .github/AGENTS.md, AGENTS.md |
| Developer tools / DX | 167 | docs/README.md, AGENTS.md, plugins/_oauth/AGENTS.md |
| Cloud native / infrastructure | 122 | docs/AGENTS.md, docs/README.md, .github/AGENTS.md |
| Security / supply chain | 107 | tests/AGENTS.md, plugins/_promptinclude/README.md, api/AGENTS.md |
| Coding agent / software automation | 64 | plugins/AGENTS.md, plugins/_oauth/AGENTS.md, README.md |
| Frontend / app framework | 47 | AGENTS.md, api/AGENTS.md, extensions/AGENTS.md |
| Observability / evaluation | 22 | README.md, plugins/_infection_check/README.md, agents/developer/prompts/agent.system.main.specifics.md |
| Database / data infrastructure | 18 | plugins/_memory/README.md, agents/developer/prompts/agent.system.main.specifics.md, agents/researcher/prompts/agent.system.main.specifics.md |
| RAG / retrieval / knowledge | 14 | plugins/_memory/README.md, knowledge/AGENTS.md, plugins/_code_execution/README.md |
| Data / ML platform | 13 | AGENTS.md, plugins/_code_execution/README.md, agents/developer/prompts/agent.system.main.specifics.md |
| Local LLM / inference | 2 | docs/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1929 |
| manifests | 40 |
| docs | 286 |
| tests | 82 |
| ci/ops | 7 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Agent Zero | Agent Zero / A full Linux system for your AI agent. / What Makes Agent Zero Different / How To Install / macOS / Linux / Windows PowerShell / Docker already installed? Run this directly / A Real Linux Desktop in the Canvas / Native Browser With DOM Annotations / Cowork on Documents | <div align="center" <img src="docs/res/a0 vector graphics/horizontal banner.svg" alt="Agent Zero Banner" width="100%"/ Agent Zero A full Linux system for your AI agent. Agent Zero is an open, dynamic, organic agentic framework. One Docker container ships a full Linux system with a desktop and a plugin hub that the agent can extend using Skills. ! Website https //img.shields.io/badge/Website agent zero.ai 0A192F?style=for the badge&logo=vercel&logoColor=white https //agent zero.ai ! Docs https //img.shields.io/badge/Docs Read%20the%20guides 1F6FEB?style=for the badge&logo=readthedocs&logoColor=white ./docs/ ! Discord https //img.shields.io/badge/Discord Join%20us 5865F2?style=for the badge&lo |


## Key Files

### Manifests

- docs/AGENTS.md
- prompts/AGENTS.md
- docs/README.md
- tests/AGENTS.md
- plugins/_memory/README.md
- plugins/_promptinclude/README.md
- .github/AGENTS.md
- AGENTS.md
- agents/AGENTS.md
- api/AGENTS.md
- conf/AGENTS.md
- docker/AGENTS.md
- extensions/AGENTS.md
- helpers/AGENTS.md
- knowledge/AGENTS.md
- lib/AGENTS.md
- plugins/AGENTS.md
- scripts/AGENTS.md
- skills/AGENTS.md
- tools/AGENTS.md


### Spec / Docs / Prompt Artifacts

- docs/AGENTS.md
- prompts/AGENTS.md
- tests/AGENTS.md
- .github/AGENTS.md
- AGENTS.md
- agents/AGENTS.md
- api/AGENTS.md
- conf/AGENTS.md
- docker/AGENTS.md
- extensions/AGENTS.md
- helpers/AGENTS.md
- knowledge/AGENTS.md
- lib/AGENTS.md
- plugins/AGENTS.md
- scripts/AGENTS.md
- skills/AGENTS.md
- tools/AGENTS.md
- webui/AGENTS.md
- extensions/python/AGENTS.md
- extensions/webui/AGENTS.md


### Agent Instruction Files

- docs/AGENTS.md
- prompts/AGENTS.md
- tests/AGENTS.md
- .github/AGENTS.md
- AGENTS.md
- agents/AGENTS.md
- api/AGENTS.md
- conf/AGENTS.md
- docker/AGENTS.md
- extensions/AGENTS.md
- helpers/AGENTS.md
- knowledge/AGENTS.md
- lib/AGENTS.md
- plugins/AGENTS.md
- scripts/AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| webui | 734 |
| plugins | 590 |
| helpers | 101 |
| extensions | 93 |
| api | 82 |
| tests | 80 |
| prompts | 70 |
| docker | 40 |
| docs | 40 |
| agents | 21 |
| tools | 16 |
| skills | 12 |
| knowledge | 9 |
| .github | 5 |


## Extension Distribution

| ext | count |
| --- | --- |
| .js | 617 |
| .py | 614 |
| .md | 278 |
| .html | 167 |
| .svg | 65 |
| [no-ext] | 56 |
| .yaml | 54 |
| .sh | 24 |
| .css | 18 |
| .json | 9 |
| .txt | 6 |
| .yml | 6 |
| ._py | 5 |
| .gitignore | 3 |
| .conf | 2 |
| .toml | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
