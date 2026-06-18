# thedotmack/claude-mem

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/thedotmack/claude-mem |
| local path | sources/thedotmack__claude-mem |
| HEAD | aafbb3a |
| stars/forks | 82994 / 7188 |
| language | JavaScript |
| license |  |
| pushedAt | 2026-06-17T21:24:31Z |
| trendScore / priorityScore | 175 / 513 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Database / data infrastructure | 500 | README.md, docker/claude-mem/README.md, src/services/worker/README.md |
| Coding agent / software automation | 409 | cursor-hooks/README.md, README.md, docker/claude-mem/README.md |
| Developer tools / DX | 373 | README.md, docker/claude-mem/README.md, scripts/translate-readme/README.md |
| AI agent / orchestration | 278 | cursor-hooks/README.md, README.md, scripts/translate-readme/README.md |
| MCP / agent interoperability | 272 | cursor-hooks/README.md, README.md, src/services/worker/README.md |
| Cloud native / infrastructure | 244 | README.md, docker/claude-mem/README.md, src/services/worker/README.md |
| Security / supply chain | 115 | README.md, docker/claude-mem/README.md, docker-compose.yml |
| RAG / retrieval / knowledge | 19 | README.md, src/services/worker/README.md, docs/public/usage/knowledge-agents.mdx |
| Data / ML platform | 18 | docs/public/configuration/litellm-gateway.mdx, docs/server-beta-architecture-and-team-vision.md, docs/server-beta-release-readiness.md |
| Observability / evaluation | 16 | docs/public/smart-explore-benchmark.mdx, docs/ip-boundary.md, docs/production-guide.md |
| Frontend / app framework | 12 | src/services/worker/README.md, package.json, tsconfig.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 914 |
| manifests | 16 |
| docs | 188 |
| tests | 202 |
| ci/ops | 14 |
| spec artifacts | 8 |
| agent instruction files | 8 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Quick Start / 🦞 OpenClaw Gateway / Documentation / Getting Started / Best Practices / Architecture / Configuration & Development / How It Works / MCP Search Tools / Beta Features | <h1 align="center" <br <a href="https //github.com/thedotmack/claude mem" <picture <source media=" prefers color scheme dark " srcset="https //raw.githubusercontent.com/thedotmack/claude mem/main/docs/public/claude mem logo for dark mode.webp" <source media=" prefers color scheme light " srcset="https //raw.githubusercontent.com/thedotmack/claude mem/main/docs/public/claude mem logo for light mode.webp" <img src="https //raw.githubusercontent.com/thedotmack/claude mem/main/docs/public/claude mem logo for light mode.webp" alt="Claude Mem" width="400" </picture </a <br </h1 <p align="center" <a href="docs/i18n/README.zh.md" 🇨🇳 中文</a • <a href="docs/i18n/README.zh tw.md" 🇹🇼 繁體中文</a • <a hre |


## Key Files

### Manifests

- ragtime/README.md
- cursor-hooks/README.md
- README.md
- docker/claude-mem/README.md
- scripts/translate-readme/README.md
- src/services/worker/README.md
- CLAUDE.md
- docker-compose.yml
- openclaw/package.json
- openclaw/tsconfig.json
- package.json
- plugin/package.json
- tsconfig.json
- docker/claude-mem/Dockerfile
- src/ui/viewer/tsconfig.json
- docker-compose.e2e.yml


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- .github/copilot-instructions.md
- src/services/sqlite/prompts/get.ts
- src/services/sqlite/prompts/store.ts
- src/services/sqlite/prompts/types.ts
- .github/workflows/claude.yml
- .claude/settings.json
- .claude/commands/anti-pattern-czar.md


### Agent Instruction Files

- CLAUDE.md
- .github/copilot-instructions.md
- src/services/sqlite/prompts/get.ts
- src/services/sqlite/prompts/store.ts
- src/services/sqlite/prompts/types.ts
- .github/workflows/claude.yml
- .claude/settings.json
- .claude/commands/anti-pattern-czar.md


## Top Directories

| dir | count |
| --- | --- |
| src | 364 |
| tests | 200 |
| docs | 95 |
| plugin | 80 |
| plans | 45 |
| scripts | 40 |
| openclaw | 15 |
| .github | 12 |
| cursor-hooks | 10 |
| evals | 7 |
| docker | 6 |
| .plan | 4 |
| install | 4 |
| ragtime | 3 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 557 |
| .md | 144 |
| .json | 58 |
| .mdx | 39 |
| .js | 16 |
| .sh | 16 |
| .tsx | 15 |
| .svg | 14 |
| [no-ext] | 14 |
| .cjs | 12 |
| .yml | 11 |
| .mjs | 3 |
| .html | 2 |
| .py | 2 |
| .woff | 2 |
| .woff2 | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
