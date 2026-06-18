# jingcheng-chen/rhinomcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/jingcheng-chen/rhinomcp |
| local path | sources/jingcheng-chen__rhinomcp |
| HEAD | 02ab3dd |
| stars/forks | 724 / 76 |
| language | Python |
| license |  |
| pushedAt | 2026-06-16T11:19:46Z |
| trendScore / priorityScore | 158 / 369 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 263 | contracts/README.md, README.md, server/README.md |
| Coding agent / software automation | 24 | README.md, docs/IMPLEMENTATION.md, README.zh-CN.md |
| Developer tools / DX | 9 | contracts/README.md, README.md, server/pyproject.toml |
| AI agent / orchestration | 4 | README.md, docs/IMPLEMENTATION.md, server/src/rhinomcp/tools/run_command.py |
| Frontend / app framework | 3 | README.md, server/src/rhinomcp/tools/grasshopper_catalog.py |
| RAG / retrieval / knowledge | 3 | plugin/RhinoMCPServer.cs, server/src/rhinomcp/tools/rhinoscript_docs.py |
| Security / supply chain | 3 | README.md, .github/workflows/mcp-server-publish.yml, docs/IMPLEMENTATION.md |
| Cloud native / infrastructure | 2 | README.md, server/src/rhinomcp/server.py |
| Database / data infrastructure | 1 | docs/IMPLEMENTATION.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, devtools, frontend, frontendStack, infra, mcp, rag, security, securityTooling |
| stacks | Python, .NET |
| capabilities | Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 226 |
| manifests | 4 |
| docs | 8 |
| tests | 7 |
| ci/ops | 3 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | RhinoMCP | RhinoMCP / Highlights / Demos / What it can do / <img width="30" height="30" src="https://img.icons8.com/color/48/rhinoceros-6.png" alt="rhinoceros-6"/> Rhino / <img width="30" height="30" src="https://img.icons8.com/officel/80/grasshopper.png" alt="grasshopper"/> Grasshopper / Quick start / 1. Install the Rhino plugin / 2. Connect your AI client / 3. Start the Rhino bridge | <div align="center" <img src="docs/assets/rhinomcp logo.svg" alt="RhinoMCP Logo" width="140" RhinoMCP Control Rhino 3D and Grasshopper with AI, in plain language. RhinoMCP connects Rhino to AI agents through the Model Context Protocol https //modelcontextprotocol.io , so assistants like Claude and Cursor can model geometry, read your document, and build Grasshopper definitions for you, just by chatting. ! PyPI https //img.shields.io/pypi/v/rhinomcp?logo=pypi&logoColor=white&label=PyPI&color=3775A9 https //pypi.org/project/rhinomcp/ ! Rhino 8 https //img.shields.io/badge/Rhino 8 178600?logo=rhinoceros&logoColor=white https //www.rhino3d.com/ ! Python 3.10+ https //img.shields.io/badge/Python |


## Key Files

### Manifests

- contracts/README.md
- README.md
- server/README.md
- server/pyproject.toml


### Spec / Docs / Prompt Artifacts

- server/src/rhinomcp/prompts/assert_general_strategy.py


### Agent Instruction Files

- server/src/rhinomcp/prompts/assert_general_strategy.py


## Top Directories

| dir | count |
| --- | --- |
| server | 81 |
| contracts | 77 |
| plugin | 57 |
| docs | 4 |
| .github | 3 |
| .gitignore | 1 |
| LICENSE | 1 |
| README.md | 1 |
| README.zh-CN.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 77 |
| .json | 76 |
| .cs | 51 |
| .md | 5 |
| .yml | 4 |
| [no-ext] | 4 |
| .sh | 2 |
| .txt | 2 |
| .csproj | 1 |
| .ini | 1 |
| .sln | 1 |
| .svg | 1 |
| .toml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
