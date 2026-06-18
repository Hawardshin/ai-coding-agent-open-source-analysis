# nanbingxyz/5ire

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/nanbingxyz/5ire |
| local path | sources/nanbingxyz__5ire |
| HEAD | c7fabb9 |
| stars/forks | 5247 / 407 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T07:00:19Z |
| trendScore / priorityScore | 158 / 442 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 363 | README.md, package.json, docs/ARCHITECTURE.md |
| Database / data infrastructure | 182 | README.md, docs/ARCHITECTURE.md, src/mcp.config.ts |
| Cloud native / infrastructure | 102 | package.json, docs/ARCHITECTURE.md, src/mcp.config.ts |
| Frontend / app framework | 94 | package.json, tsconfig.json, src/renderer/pages/prompt/Form.tsx |
| RAG / retrieval / knowledge | 89 | README.md, docs/ARCHITECTURE.md, src/main/database/schema/tables.ts |
| Developer tools / DX | 73 | README.md, package.json, docs/ARCHITECTURE.md |
| AI agent / orchestration | 20 | package.json, src/main/model/content-specification.ts, test/intellichat/reader.spec.ts |
| Coding agent / software automation | 19 | src/main/services/mcp-prompts-manager.ts, src/main/services/mcp-resources-manager.ts, src/main/services/mcp-tools-manager.ts |
| Security / supply chain | 18 | README.md, docs/ARCHITECTURE.md, src/main/mcp.ts |
| Local LLM / inference | 10 | README.md, src/main/database/schema/tables.ts, src/main/database/types.ts |
| Data / ML platform | 3 | package.json, docs/ARCHITECTURE.md |
| Observability / evaluation | 3 | package.json, src/main/services/mcp-servers-manager.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 456 |
| manifests | 3 |
| docs | 9 |
| tests | 28 |
| ci/ops | 2 |
| spec artifacts | 4 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Features | Before to activating tools feature, ensure the following components are installed: / 💪 Getting involved / 💬 Community / Features / ⚒️ Support Tools via MCP Servers / 💡 Local Knowledge Base / 📈 Usage Analytics / ✨ Prompts Library / 🔖 Bookmarks / 🔍 Quick Search | <div align="center" <a href="https //github.com/nanbingxyz/5ire" <img src="https //5ire.app/logo.png" alt="Logo" width="120" </a <br / <span pronounced "fai er" </span <h1 A Sleek AI Assistant & MCP Client</h1 <div <a href="https //modelcontextprotocol.io/clients" target=" blank" <img src="https //badge.mcpx.dev/?type=client" / </a <img src="https //badge.mcpx.dev/?type=client&features=tools,prompts" / <a href="https //discord.gg/ADfBTGd5jd" <img src="https //dcbadge.limes.pink/api/server/ADfBTGd5jd?style=flat&theme=clean" alt="5ire discord server"/ </a <img src="https //img.shields.io/badge/price free brightgreen.svg"/ <a href="https //linkedin.com/in/nanbing" target=" blank" <img src="http |


## Key Files

### Manifests

- README.md
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- src/renderer/pages/prompt/Form.tsx
- src/renderer/pages/prompt/Grid.tsx
- src/renderer/pages/prompt/index.tsx
- docs/ARCHITECTURE.md


### Agent Instruction Files

- src/renderer/pages/prompt/Form.tsx
- src/renderer/pages/prompt/Grid.tsx
- src/renderer/pages/prompt/index.tsx


## Top Directories

| dir | count |
| --- | --- |
| src | 368 |
| test | 28 |
| drizzle | 25 |
| public | 7 |
| .github | 4 |
| scripts | 3 |
| .better-commits.json | 1 |
| .editorconfig | 1 |
| .erb | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .husky | 1 |
| biome.json | 1 |
| CODE_OF_CONDUCT.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 204 |
| .tsx | 107 |
| .json | 26 |
| .woff2 | 22 |
| .ttf | 20 |
| .woff | 20 |
| .sql | 12 |
| .scss | 11 |
| .md | 9 |
| .js | 5 |
| [no-ext] | 5 |
| .yml | 3 |
| .txt | 2 |
| .csv | 1 |
| .docx | 1 |
| .ejs | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
