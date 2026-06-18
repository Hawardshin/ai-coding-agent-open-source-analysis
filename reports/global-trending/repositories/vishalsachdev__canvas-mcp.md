# vishalsachdev/canvas-mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/vishalsachdev/canvas-mcp |
| local path | sources/vishalsachdev__canvas-mcp |
| HEAD | 20da02d |
| stars/forks | 146 / 41 |
| language | Python |
| license |  |
| pushedAt | 2026-06-18T00:20:24Z |
| trendScore / priorityScore | 144 / 392 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | cli/README.md, .github/workflows/README.md, src/canvas_mcp/code_api/README.md |
| Security / supply chain | 343 | .github/workflows/README.md, AGENTS.md, README.md |
| Coding agent / software automation | 151 | cli/README.md, .github/workflows/README.md, AGENTS.md |
| Database / data infrastructure | 104 | AGENTS.md, README.md, tools/README.md |
| Developer tools / DX | 96 | cli/README.md, .github/workflows/README.md, AGENTS.md |
| Cloud native / infrastructure | 90 | README.md, config/overlays/README.md, CLAUDE.md |
| AI agent / orchestration | 70 | AGENTS.md, README.md, tools/README.md |
| Observability / evaluation | 10 | README.md, docs/SECURITY-COMPLIANCE.md, docs/student-guide.html |
| Data / ML platform | 8 | README.md, CLAUDE.md, docs/SECURITY-COMPLIANCE.md |
| Frontend / app framework | 1 | docs/best-practices.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 172 |
| manifests | 13 |
| docs | 40 |
| tests | 32 |
| ci/ops | 12 |
| spec artifacts | 3 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Canvas MCP Server | Canvas MCP Server / For AI Agents / Quick Reference / Overview / Latest Release: v1.4.0 / For Students 👨‍🎓 / For Educators 👨‍🏫 / For Learning Designers 🎨 / 🤖 Agent Skills / Install via skills.sh (Any Agent) | <p align="center" <img src="docs/canvas mcp header.png" alt="Canvas MCP — AI tools for Canvas LMS" width="800" </p Canvas MCP Server <! mcp name io.github.vishalsachdev/canvas mcp ! License MIT https //img.shields.io/badge/License MIT yellow.svg https //opensource.org/licenses/MIT ! skills.sh https //img.shields.io/badge/skills.sh canvas mcp blue https //skills.sh MCP server for Canvas LMS with 90 tools and 8 agent skills . Works with Claude Desktop, Cursor, Codex, Windsurf, and 40+ other agents https //skills.sh . For AI Agents <! INLINE AGENT GUIDE Intentionally duplicates AGENTS.md content. WHY Agents often can't fetch raw.githubusercontent.com or GitHub blob pages. MAINTENANCE When updat |


## Key Files

### Manifests

- cli/README.md
- .github/workflows/README.md
- src/canvas_mcp/code_api/README.md
- AGENTS.md
- README.md
- tools/README.md
- config/overlays/README.md
- CLAUDE.md
- cli/package.json
- Dockerfile
- package.json
- pyproject.toml
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- .github/workflows/claude.yml


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- .github/workflows/claude.yml


## Top Directories

| dir | count |
| --- | --- |
| src | 55 |
| tests | 31 |
| docs | 16 |
| .github | 15 |
| cli | 9 |
| skills | 8 |
| examples | 5 |
| config | 4 |
| deploy | 3 |
| articles | 2 |
| scripts | 2 |
| tools | 2 |
| .dockerignore | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 68 |
| .md | 28 |
| .ts | 17 |
| .yml | 14 |
| .json | 10 |
| [no-ext] | 8 |
| .html | 7 |
| .js | 5 |
| .sh | 4 |
| .env | 3 |
| .txt | 2 |
| .conf | 1 |
| .css | 1 |
| .service | 1 |
| .template | 1 |
| .toml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
