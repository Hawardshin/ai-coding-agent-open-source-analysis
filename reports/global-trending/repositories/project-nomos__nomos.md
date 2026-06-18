# project-nomos/nomos

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/project-nomos/nomos |
| local path | sources/project-nomos__nomos |
| HEAD | 34d6619 |
| stars/forks | 22 / 4 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T20:49:38Z |
| trendScore / priorityScore | 145 / 434 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | eval/README.md, README.md, CLAUDE.md |
| Developer tools / DX | 433 | eval/README.md, README.md, CLAUDE.md |
| Database / data infrastructure | 254 | eval/README.md, README.md, CLAUDE.md |
| MCP / agent interoperability | 202 | README.md, CLAUDE.md, docs/agent-presence-and-continuity.md |
| RAG / retrieval / knowledge | 199 | eval/README.md, README.md, CLAUDE.md |
| Security / supply chain | 148 | eval/README.md, README.md, CLAUDE.md |
| Observability / evaluation | 144 | eval/README.md, README.md, CLAUDE.md |
| Cloud native / infrastructure | 96 | eval/README.md, README.md, CLAUDE.md |
| Frontend / app framework | 48 | README.md, CLAUDE.md, package.json |
| Coding agent / software automation | 44 | README.md, CLAUDE.md, docs/advanced-features.md |
| Local LLM / inference | 38 | README.md, CLAUDE.md, docs/settings-ui.md |
| Data / ML platform | 31 | README.md, CLAUDE.md, docs/agent-presence-and-continuity.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Ruby |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 583 |
| manifests | 9 |
| docs | 73 |
| tests | 79 |
| ci/ops | 5 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Homebrew (recommended) | Why Nomos? / Get Running in 2 Minutes / Homebrew (recommended) / Then just: / npm (GitHub Packages) / Docker Compose (includes database) / Edit .env with your ANTHROPIC_API_KEY (or OPENROUTER_API_KEY) / Docker (standalone) / From source / Prerequisites | <p align="center" <img src="images/project nomos header.png" alt="Project Nomos" width="100%" / </p <p align="center" <strong Your AI digital clone — learns who you are, acts on your behalf, remembers everything, and represents you across every platform</strong <br/ Multi provider Anthropic, OpenRouter, Vertex AI, Ollama . Self hosted. Encrypted. MIT licensed. </p <p align="center" <a href=" get running in 2 minutes" Quick Start</a &middot; <a href=" why nomos" Why Nomos</a &middot; <a href=" what you get" Features</a &middot; <a href=" digital clone" Digital Clone</a &middot; <a href=" channel integrations" Channels</a &middot; <a href=" skills system" Skills</a &middot; <a href=" plugins" |


## Key Files

### Manifests

- eval/README.md
- README.md
- CLAUDE.md
- docker-compose.yml
- Dockerfile
- package.json
- settings/package.json
- settings/tsconfig.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- .claude/settings.json


### Agent Instruction Files

- CLAUDE.md
- .claude/settings.json


## Top Directories

| dir | count |
| --- | --- |
| src | 360 |
| settings | 105 |
| docs | 29 |
| skills | 27 |
| scripts | 13 |
| eval | 8 |
| .github | 6 |
| autonomous | 6 |
| .claude | 1 |
| .dockerignore | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| .husky | 1 |
| .nvmrc | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 406 |
| .md | 71 |
| .tsx | 67 |
| .json | 6 |
| .yml | 6 |
| [no-ext] | 6 |
| .yaml | 4 |
| .example | 3 |
| .mjs | 3 |
| .sh | 3 |
| .svg | 2 |
| .css | 1 |
| .plist | 1 |
| .proto | 1 |
| .rb | 1 |
| .scpt | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
