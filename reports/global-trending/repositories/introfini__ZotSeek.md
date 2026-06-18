# introfini/ZotSeek

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/introfini/ZotSeek |
| local path | sources/introfini__ZotSeek |
| HEAD | dea5fa0 |
| stars/forks | 128 / 8 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-12T13:29:32Z |
| trendScore / priorityScore | 142 / 371 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 298 | README.md, docs/MCP.md, package.json |
| Cloud native / infrastructure | 156 | README.md, docs/SEARCH_ARCHITECTURE.md, CHANGELOG.md |
| Database / data infrastructure | 142 | README.md, docs/API.md, docs/ROADMAP.md |
| MCP / agent interoperability | 103 | README.md, docs/MCP.md, docs/API.md |
| Data / ML platform | 76 | README.md, docs/MCP.md, docs/API.md |
| AI agent / orchestration | 26 | README.md, docs/MCP.md, docs/API.md |
| Coding agent / software automation | 25 | README.md, docs/MCP.md, CHANGELOG.md |
| Observability / evaluation | 13 | docs/SEARCH_ARCHITECTURE.md, src/index.ts, src/core/auto-index-manager.ts |
| Developer tools / DX | 6 | docs/MCP.md, docs/API.md, docs/ROADMAP.md |
| Security / supply chain | 6 | README.md, docs/MCP.md |
| Frontend / app framework | 4 | src/server/mcp-endpoint.ts, content/searchDialog.css, src/ui/results-table.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 86 |
| manifests | 3 |
| docs | 7 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | ZotSeek \| AI-Powered Semantic Search & MCP Server for Zotero | ZotSeek \| AI-Powered Semantic Search & MCP Server for Zotero / Features / Privacy & Security / More Screenshots / Find Similar Documents / Context Menu / PDF Selection Context Menu / Settings Panel / Indexing Progress / How It Works | ZotSeek AI Powered Semantic Search & MCP Server for Zotero Find similar papers by meaning , not just keywords. 100% local, no data leaves your machine. Now with a built in MCP server for AI agents. Status ✅ Stable release · Zotero 8 & 9 · Transformers.js running locally New 🤖 MCP server built in — Claude Code, Codex, and any MCP client can search your library and cite papers with links that open straight to the matched PDF page. Fully local, read only, opt in. Set it up in one line → docs/MCP.md ! ZotSeek Search Dialog docs/images/search dialog by section hover.png Features 🔒 100% Local No data sent to cloud, works completely offline 🧠 True Semantic Search Find papers by meaning, not just |


## Key Files

### Manifests

- README.md
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- docs/ROADMAP.md


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| src | 45 |
| content | 14 |
| locale | 8 |
| docs | 5 |
| scripts | 2 |
| .gitattributes | 1 |
| .gitignore | 1 |
| bootstrap.js | 1 |
| CHANGELOG.md | 1 |
| manifest.json | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| prefs.js | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 45 |
| .json | 8 |
| .md | 7 |
| .xhtml | 6 |
| .dtd | 4 |
| .ftl | 4 |
| .js | 4 |
| [no-ext] | 3 |
| .css | 2 |
| .mjs | 1 |
| .onnx | 1 |
| .svg | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
