# preset-io/agor

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/preset-io/agor |
| local path | sources/preset-io__agor |
| HEAD | 7e902cd |
| stars/forks | 1264 / 107 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T23:45:54Z |
| trendScore / priorityScore | 163 / 485 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 500 | AGENTS.md, context/README.md, docker/README.md |
| MCP / agent interoperability | 500 | AGENTS.md, context/README.md, README.md |
| Security / supply chain | 461 | AGENTS.md, context/README.md, docker/README.md |
| Database / data infrastructure | 270 | AGENTS.md, context/README.md, docker/README.md |
| AI agent / orchestration | 269 | AGENTS.md, context/README.md, docker/README.md |
| Coding agent / software automation | 265 | AGENTS.md, context/README.md, README.md |
| Cloud native / infrastructure | 222 | AGENTS.md, docker/README.md, README.md |
| Frontend / app framework | 116 | AGENTS.md, README.md, apps/agor-ui/README.md |
| RAG / retrieval / knowledge | 23 | context/README.md, apps/agor-ui/vite.config.ts, apps/agor-daemon/src/services/knowledge-embedding-indexer.test.ts |
| Observability / evaluation | 12 | docker/README.md, package.json, packages/core/src/config/security-resolver.test.ts |
| Data / ML platform | 2 | docs/internal/claude-code-cli-integration-analysis-2026-05-14.md, apps/agor-daemon/src/mcp/tools/messages.test.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Ruby |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1702 |
| manifests | 40 |
| docs | 109 |
| tests | 322 |
| ci/ops | 15 |
| spec artifacts | 3 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Agor | Agor / See It In Action / Quick Start / What is Agor? / Features / Screenshots / Architecture / Development / Roadmap / Community | <img src=".github/logo circle.png" alt="Agor Logo" width="160" / Agor Team command center for all things agentic. Agor is a shared canvas where coding agents Claude Code, Codex, Gemini and long lived assistants run side by side on isolated git branches — the anchor entity where sessions, dev environments, prompts, and PRs converge. Your whole team rallies around the same live work in real time, and the agents themselves drive Agor over MCP. Team workspace for AI agents — multiplayer is the core differentiator. Live cursors, facepile, scoped comments, shared sessions and dev envs. Branches as the anchor — one entity per piece of work, where conversations + dev env + PR + prompts all converge. |


## Key Files

### Manifests

- AGENTS.md
- context/README.md
- docker/README.md
- README.md
- apps/agor-docs/README.md
- apps/agor-ui/public/sounds/README.md
- apps/agor-ui/README.md
- apps/agor-ui/src/components/ToolUseRenderer/renderers/README.md
- packages/agor-live/README.md
- packages/core/src/seed/README.md
- packages/executor/README.md
- apps/agor-cli/package.json
- apps/agor-cli/tsconfig.json
- packages/client/package.json
- packages/client/tsconfig.json
- docker-compose.yml
- docker/Dockerfile
- Makefile
- package.json
- apps/agor-daemon/package.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- apps/agor-docs/pages/guide/architecture.mdx
- context/concepts/architecture.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| apps | 992 |
| packages | 601 |
| context | 37 |
| docs | 12 |
| scripts | 12 |
| docker | 10 |
| .github | 8 |
| .agor.yml | 1 |
| .dockerignore | 1 |
| .editorconfig | 1 |
| .env.example | 1 |
| .env.postgres | 1 |
| .gitignore | 1 |
| .husky | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 1034 |
| .tsx | 276 |
| .sql | 108 |
| .json | 69 |
| .md | 65 |
| .mdx | 43 |
| [no-ext] | 20 |
| .mjs | 17 |
| .css | 15 |
| .yml | 15 |
| .sh | 8 |
| .mp3 | 7 |
| .js | 6 |
| .example | 4 |
| .txt | 3 |
| .html | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
