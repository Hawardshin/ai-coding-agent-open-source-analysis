# tomtom-international/tomtom-maps-mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/tomtom-international/tomtom-maps-mcp |
| local path | sources/tomtom-international__tomtom-maps-mcp |
| HEAD | b2499e2 |
| stars/forks | 47 / 22 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T09:47:13Z |
| trendScore / priorityScore | 134 / 360 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | README.md, .agents/skills/mcp-builder/scripts/requirements.txt, docker-compose.yml |
| Security / supply chain | 113 | README.md, bin/tomtom-mcp-http.js, bin/tomtom-mcp.js |
| Developer tools / DX | 101 | README.md, package.json, ui/package.json |
| Cloud native / infrastructure | 75 | README.md, Dockerfile, docs/smolagents/smolagents-setup.md |
| Observability / evaluation | 71 | .agents/skills/mcp-builder/reference/evaluation.md, .agents/skills/mcp-builder/scripts/evaluation.py, .agents/skills/mcp-builder/SKILL.md |
| AI agent / orchestration | 52 | README.md, .github/copilot-instructions.md, docs/smolagents/smolagents_example.py |
| Coding agent / software automation | 27 | README.md, docs/cursor-setup.md, .agents/skills/mcp-builder/reference/mcp_best_practices.md |
| Frontend / app framework | 23 | package.json, ui/package.json, ui/tsconfig.json |
| Data / ML platform | 5 | .github/workflows/veracode.yml, .agents/skills/mcp-builder/reference/evaluation.md, src/apps/shared/decompress.test.ts |
| RAG / retrieval / knowledge | 1 | .agents/skills/mcp-builder/reference/evaluation.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 272 |
| manifests | 9 |
| docs | 22 |
| tests | 62 |
| ci/ops | 8 |
| spec artifacts | 4 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | TomTom Maps MCP Server | TomTom Maps MCP Server / Demo / Table of Contents / Remote MCP Server (No Installation Required) / Generic MCP Client Configuration / Selecting a Map Backend / VS Code (GitHub Copilot) / Claude Desktop / Security Notice / Quick Start | TomTom Maps MCP Server ! NPM Version https //img.shields.io/npm/v/@tomtom org/tomtom mcp.svg https //www.npmjs.com/package/@tomtom org/tomtom mcp ! License https //img.shields.io/badge/License Apache%202.0 blue.svg https //opensource.org/licenses/Apache 2.0 The TomTom Maps MCP Server simplifies geospatial development by providing seamless access to TomTom’s location services, including search, routing, traffic and static maps data. It enables easy integration of precise and accurate geolocation data into AI workflows and development environments. Demo ! TomTom Maps MCP Demo ./images/claude demo.gif Table of Contents Demo demo Security Notice security notice Remote MCP Server No Installation |


## Key Files

### Manifests

- README.md
- .agents/skills/mcp-builder/scripts/requirements.txt
- docker-compose.yml
- Dockerfile
- package.json
- tsconfig.json
- ui/package.json
- ui/tsconfig.json
- ui/vite.config.ts


### Spec / Docs / Prompt Artifacts

- .agents/skills/mcp-builder/scripts/requirements.txt
- .github/copilot-instructions.md
- .claude/settings.json
- .vscode/tasks.json


### Agent Instruction Files

- .github/copilot-instructions.md
- .claude/settings.json


## Top Directories

| dir | count |
| --- | --- |
| src | 185 |
| ui | 14 |
| .github | 12 |
| .agents | 11 |
| docs | 6 |
| e2e | 3 |
| scripts | 3 |
| .vscode | 2 |
| bin | 2 |
| tests | 2 |
| .claude | 1 |
| .dockerignore | 1 |
| .env.example | 1 |
| .eslintignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 163 |
| .md | 21 |
| .css | 18 |
| .html | 18 |
| .json | 11 |
| [no-ext] | 10 |
| .js | 9 |
| .yml | 9 |
| .py | 3 |
| .cjs | 2 |
| .txt | 2 |
| .example | 1 |
| .mjs | 1 |
| .sh | 1 |
| .svg | 1 |
| .tsx | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
