# zilliztech/claude-context

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/zilliztech/claude-context |
| local path | sources/zilliztech__claude-context |
| HEAD | b2b4ca4 |
| stars/forks | 11880 / 877 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-08T08:31:15Z |
| trendScore / priorityScore | 179 / 488 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 500 | examples/basic-usage/README.md, evaluation/README.md, evaluation/case_study/django_14170/README.md |
| MCP / agent interoperability | 491 | docs/README.md, evaluation/README.md, packages/mcp/README.md |
| Coding agent / software automation | 381 | docs/README.md, examples/basic-usage/README.md, evaluation/README.md |
| Database / data infrastructure | 125 | examples/basic-usage/README.md, packages/mcp/README.md, python/README.md |
| Local LLM / inference | 100 | packages/mcp/README.md, README.md, packages/core/README.md |
| Developer tools / DX | 80 | packages/mcp/README.md, python/README.md, README.md |
| Cloud native / infrastructure | 55 | examples/basic-usage/README.md, packages/core/README.md, packages/vscode-extension/README.md |
| Observability / evaluation | 55 | evaluation/README.md, evaluation/case_study/README.md, packages/mcp/README.md |
| Data / ML platform | 48 | evaluation/README.md, evaluation/case_study/pydata_xarray_6938/README.md, evaluation/case_study/README.md |
| AI agent / orchestration | 41 | evaluation/README.md, evaluation/case_study/README.md, packages/mcp/README.md |
| Frontend / app framework | 25 | evaluation/README.md, packages/mcp/README.md, packages/mcp/src/snapshot.request-options.test.ts |
| Security / supply chain | 8 | packages/mcp/README.md, packages/chrome-extension/CONTRIBUTING.md, packages/vscode-extension/src/webview/templates/semanticSearch.html |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 150 |
| manifests | 25 |
| docs | 26 |
| tests | 8 |
| ci/ops | 2 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | IMPORTANT: the top-level key is `mcp_servers` rather than `mcpServers`. | Your entire codebase as Claude's context / 🚀 Demo / Quick Start / Prerequisites / Configure MCP for Claude Code / Other MCP Client Configurations / IMPORTANT: the top-level key is `mcp_servers` rather than `mcpServers`. / Optional: override the default 10s startup timeout / Usage in Your Codebase / Environment Variables Configuration | ! assets/claude context.png 🆕 Looking for persistent memory for Claude Code? Check out memsearch Claude Code plugin https //github.com/zilliztech/memsearch for claude code users — a markdown first memory system that gives your AI agent long term memory across sessions. Your entire codebase as Claude's context ! License https //img.shields.io/badge/License MIT blue.svg https //opensource.org/licenses/MIT ! Node.js https //img.shields.io/badge/Node.js 20%2B green.svg https //nodejs.org/ ! Documentation https //img.shields.io/badge/Documentation 📚 orange.svg docs/ ! VS Code Marketplace https //img.shields.io/visual studio marketplace/v/zilliz.semanticcodesearch?label=VS%20Code%20Extension&log |


## Key Files

### Manifests

- examples/README.md
- docs/README.md
- examples/basic-usage/README.md
- evaluation/README.md
- evaluation/case_study/django_14170/README.md
- evaluation/case_study/pydata_xarray_6938/README.md
- evaluation/case_study/README.md
- packages/mcp/README.md
- python/README.md
- README.md
- packages/chrome-extension/README.md
- packages/core/README.md
- packages/vscode-extension/README.md
- examples/basic-usage/package.json
- evaluation/pyproject.toml
- packages/mcp/package.json
- packages/mcp/tsconfig.json
- package.json
- tsconfig.json
- packages/chrome-extension/package.json


### Spec / Docs / Prompt Artifacts

- .vscode/tasks.json


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| packages | 84 |
| evaluation | 30 |
| docs | 8 |
| .vscode | 4 |
| examples | 4 |
| python | 4 |
| .github | 3 |
| .env.example | 1 |
| .eslintrc.js | 1 |
| .gitignore | 1 |
| .npmrc | 1 |
| build-benchmark.json | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 53 |
| .md | 26 |
| .json | 21 |
| .py | 18 |
| .js | 9 |
| [no-ext] | 5 |
| .log | 4 |
| .css | 2 |
| .html | 2 |
| .mjs | 2 |
| .yaml | 2 |
| .yml | 2 |
| .cjs | 1 |
| .example | 1 |
| .svg | 1 |
| .toml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
