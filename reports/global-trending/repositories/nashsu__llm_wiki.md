# nashsu/llm_wiki

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/nashsu/llm_wiki |
| local path | sources/nashsu__llm_wiki |
| HEAD | d0437e8 |
| stars/forks | 11795 / 1434 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-16T07:53:24Z |
| trendScore / priorityScore | 149 / 445 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 405 | mcp-server/README.md, README.md, mcp-server/package.json |
| Developer tools / DX | 217 | README.md, mcp-server/package.json, package.json |
| Coding agent / software automation | 208 | README.md, src-tauri/Cargo.toml, llm-wiki.md |
| Local LLM / inference | 144 | README.md, llm-wiki.md, src/lib/__tests__/llm-providers.test.ts |
| MCP / agent interoperability | 102 | mcp-server/README.md, README.md, mcp-server/package.json |
| Frontend / app framework | 79 | README.md, package.json, src-tauri/Cargo.toml |
| AI agent / orchestration | 46 | README.md, llm-wiki.md, src/lib/codex-cli-transport.test.ts |
| Cloud native / infrastructure | 33 | llm-wiki.md, mcp-server/package-lock.json, mcp-server/test/api-client.test.ts |
| Data / ML platform | 33 | README.md, src/lib/embedding.real-llm.test.ts, src/lib/ingest.real-llm.test.ts |
| Security / supply chain | 16 | mcp-server/README.md, mcp-server/test/api-client.test.ts, src-tauri/src/commands/claude_cli.rs |
| Database / data infrastructure | 1 | src/lib/graph-search.test.ts |
| Observability / evaluation | 1 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 350 |
| manifests | 10 |
| docs | 7 |
| tests | 114 |
| ci/ops | 2 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | LLM Wiki | LLM Wiki / Features / What is this? / Credits / What We Kept from the Original / What We Changed & Added / 1. From CLI to Desktop Application / 2. Purpose.md — The Wiki's Soul / 3. Two-Step Chain-of-Thought Ingest / 4. Knowledge Graph with Relevance Model | LLM Wiki <p align="center" <img src="logo.jpg" width="128" height="128" style="border radius 22%;" alt="LLM Wiki Logo" </p <p align="center" <strong A personal knowledge base that builds itself.</strong <br LLM reads your documents, builds a structured wiki, and keeps it current. </p <p align="center" <a href=" what is this" What is this?</a • <a href=" what we changed added" Features</a • <a href=" tech stack" Tech Stack</a • <a href=" installation" Installation</a • <a href=" credits" Credits</a • <a href=" license" License</a </p <p align="center" English <a href="README CN.md" 中文</a <a href="README JA.md" 日本語</a <a href="README KO.md" 한국어</a </p <p align="center" <img src="assets/overvie |


## Key Files

### Manifests

- mcp-server/README.md
- README.md
- mcp-server/package.json
- mcp-server/tsconfig.json
- package.json
- src-tauri/Cargo.toml
- tsconfig.json
- vite.config.ts
- tsconfig.app.json
- tsconfig.node.json


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| src | 289 |
| src-tauri | 28 |
| mcp-server | 9 |
| extension | 5 |
| .github | 2 |
| .gitignore | 1 |
| components.json | 1 |
| index.html | 1 |
| LICENSE | 1 |
| llm-wiki.md | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| plans | 1 |
| README_CN.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 236 |
| .tsx | 55 |
| .rs | 20 |
| .json | 18 |
| .md | 7 |
| .js | 3 |
| .html | 2 |
| .yml | 2 |
| [no-ext] | 2 |
| .css | 1 |
| .icns | 1 |
| .py | 1 |
| .toml | 1 |
| .xml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
