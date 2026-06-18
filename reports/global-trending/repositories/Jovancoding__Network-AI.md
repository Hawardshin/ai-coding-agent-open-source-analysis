# Jovancoding/Network-AI

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Jovancoding/Network-AI |
| local path | sources/Jovancoding__Network-AI |
| HEAD | 344fb17 |
| stars/forks | 63 / 11 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T20:22:56Z |
| trendScore / priorityScore | 133 / 404 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/README.md, README.md, CLAUDE.md |
| Security / supply chain | 430 | examples/README.md, README.md, CLAUDE.md |
| MCP / agent interoperability | 316 | README.md, CLAUDE.md, .github/copilot-instructions.md |
| Developer tools / DX | 184 | README.md, CLAUDE.md, .github/copilot-instructions.md |
| Data / ML platform | 72 | examples/README.md, README.md, CLAUDE.md |
| Coding agent / software automation | 70 | README.md, CLAUDE.md, .github/copilot-instructions.md |
| Database / data infrastructure | 59 | README.md, examples/05-code-review-swarm.ts, examples/07-full-showcase.ts |
| Cloud native / infrastructure | 47 | README.md, Dockerfile, test-security.ts |
| Observability / evaluation | 40 | README.md, examples/05-code-review-swarm.ts, docs/index.html |
| RAG / retrieval / knowledge | 16 | README.md, .github/SECURITY.md, lib/agent-memory.ts |
| Local LLM / inference | 12 | README.md, BENCHMARKS.md |
| Frontend / app framework | 3 | test-adapters.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 243 |
| manifests | 9 |
| docs | 35 |
| tests | 0 |
| ci/ops | 5 |
| spec artifacts | 4 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Network-AI | Network-AI / ⚡ Try in 60 Seconds / What's Included / Why teams use Network-AI / Architecture / Install / Use as MCP Server / or from source: / Use as a Claude Code Plugin / Use with OpenAI Codex | Network AI TypeScript/Node.js multi agent orchestrator — shared state, guardrails, budgets, and cross framework coordination ! Website https //img.shields.io/badge/website network ai.org 4b9df2?style=flat&logo=web&logoColor=white https //network ai.org/ ! CI https //github.com/Jovancoding/Network AI/actions/workflows/ci.yml/badge.svg https //github.com/Jovancoding/Network AI/actions/workflows/ci.yml ! CodeQL https //github.com/Jovancoding/Network AI/actions/workflows/codeql.yml/badge.svg https //github.com/Jovancoding/Network AI/actions/workflows/codeql.yml ! Release https //img.shields.io/badge/release v5.12.1 blue.svg https //github.com/Jovancoding/Network AI/releases ! npm https //img.shi |


## Key Files

### Manifests

- examples/README.md
- README.md
- CLAUDE.md
- Dockerfile
- package.json
- requirements.txt
- tsconfig.json
- tsconfig.build.json
- tsconfig.esm.json


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- .github/copilot-instructions.md
- requirements.txt
- ARCHITECTURE.md


### Agent Instruction Files

- CLAUDE.md
- .github/copilot-instructions.md


## Top Directories

| dir | count |
| --- | --- |
| lib | 81 |
| adapters | 33 |
| .github | 13 |
| examples | 11 |
| scripts | 7 |
| references | 5 |
| bin | 4 |
| types | 3 |
| .claude-plugin | 2 |
| .clawhubignore | 1 |
| .codex | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| .mcp.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 169 |
| .md | 34 |
| .json | 12 |
| .yml | 7 |
| .py | 6 |
| [no-ext] | 5 |
| .html | 4 |
| .example | 1 |
| .js | 1 |
| .svg | 1 |
| .toml | 1 |
| .txt | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
