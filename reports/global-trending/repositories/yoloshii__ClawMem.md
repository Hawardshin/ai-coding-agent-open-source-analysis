# yoloshii/ClawMem

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/yoloshii/ClawMem |
| local path | sources/yoloshii__ClawMem |
| HEAD | 8016a44 |
| stars/forks | 185 / 27 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-05-20T19:22:45Z |
| trendScore / priorityScore | 142 / 436 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 500 | AGENTS.md, README.md, CLAUDE.md |
| AI agent / orchestration | 282 | AGENTS.md, README.md, CLAUDE.md |
| MCP / agent interoperability | 245 | AGENTS.md, README.md, CLAUDE.md |
| Database / data infrastructure | 240 | AGENTS.md, README.md, CLAUDE.md |
| Local LLM / inference | 144 | AGENTS.md, README.md, CLAUDE.md |
| Coding agent / software automation | 138 | AGENTS.md, README.md, CLAUDE.md |
| Cloud native / infrastructure | 103 | README.md, docs/guides/cloud-embedding.md, docs/troubleshooting.md |
| Developer tools / DX | 100 | AGENTS.md, README.md, CLAUDE.md |
| Data / ML platform | 95 | AGENTS.md, README.md, CLAUDE.md |
| Security / supply chain | 70 | AGENTS.md, README.md, CLAUDE.md |
| Observability / evaluation | 5 | AGENTS.md, CLAUDE.md, docs/guides/systemd-services.md |
| Frontend / app framework | 2 | tsconfig.json, docs/reference/rest-api.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 181 |
| manifests | 6 |
| docs | 33 |
| tests | 75 |
| ci/ops | 0 |
| spec artifacts | 3 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | ClawMem — On-device memory layer for Claude Code, OpenClaw, and Hermes agents | ClawMem — On-device memory layer for Claude Code, OpenClaw, and Hermes agents / What It Does / Architecture / Install / Platform Support / Prerequisites / Install from npm (recommended) / Install from source / Setup roadmap / Quick start commands | ClawMem — On device memory layer for Claude Code, OpenClaw, and Hermes agents <p align="center" <img src="docs/clawmem hero.jpg" alt="ClawMem" width="100%" </p On device memory for Claude Code, OpenClaw, Hermes, and AI agents. Retrieval augmented search, hooks, and an MCP server in a single local system. No API keys, no cloud dependencies. ClawMem fuses recent research into a retrieval augmented memory layer that agents actually use. The hybrid architecture combines QMD https //github.com/tobi/qmd derived multi signal retrieval BM25 + vector search + reciprocal rank fusion + query expansion + cross encoder reranking , SAME https //github.com/sgx labs/statelessagent inspired composite scoring |


## Key Files

### Manifests

- AGENTS.md
- README.md
- CLAUDE.md
- package.json
- tsconfig.json
- src/openclaw/package.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- docs/concepts/architecture.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| tests | 75 |
| src | 62 |
| docs | 24 |
| .github | 3 |
| .env.example | 1 |
| .gitignore | 1 |
| agents | 1 |
| AGENTS.md | 1 |
| bin | 1 |
| CLAUDE.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| googledd6f95190aef61f7.html | 1 |
| LICENSE | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 134 |
| .md | 32 |
| .json | 4 |
| .yml | 3 |
| [no-ext] | 3 |
| .example | 1 |
| .excalidraw | 1 |
| .html | 1 |
| .py | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
