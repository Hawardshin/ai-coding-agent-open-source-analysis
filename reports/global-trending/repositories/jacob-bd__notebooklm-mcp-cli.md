# jacob-bd/notebooklm-mcp-cli

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/jacob-bd/notebooklm-mcp-cli |
| local path | sources/jacob-bd__notebooklm-mcp-cli |
| HEAD | 78b3d28 |
| stars/forks | 4941 / 772 |
| language | Python |
| license |  |
| pushedAt | 2026-06-16T22:59:39Z |
| trendScore / priorityScore | 178 / 455 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 500 | AGENTS.md, README.md, CLAUDE.md |
| MCP / agent interoperability | 500 | AGENTS.md, README.md, CLAUDE.md |
| Coding agent / software automation | 296 | AGENTS.md, README.md, CLAUDE.md |
| AI agent / orchestration | 116 | AGENTS.md, README.md, GEMINI.md |
| Data / ML platform | 64 | README.md, GEMINI.md, docs/MCP_CLI_TEST_PLAN.md |
| Cloud native / infrastructure | 27 | README.md, docs/MCP_CLI_TEST_PLAN.md, docs/API_REFERENCE.md |
| Frontend / app framework | 18 | docs/CLI_GUIDE.md, docs/API_REFERENCE.md, docs/KNOWN_ISSUES.md |
| Security / supply chain | 18 | README.md, docs/AUTHENTICATION.md, docs/MULTI_USER_ANALYSIS.md |
| Observability / evaluation | 2 | docs/AUTHENTICATION.md, src/notebooklm_tools/mcp/server.py |
| RAG / retrieval / knowledge | 2 | docs/MULTI_USER_ANALYSIS.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 203 |
| manifests | 5 |
| docs | 23 |
| tests | 69 |
| ci/ops | 4 |
| spec artifacts | 3 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | NotebookLM CLI & MCP Server | NotebookLM CLI & MCP Server / Latest / MCP Demos / CLI Demos / Two Ways to Use / 🖥️ Command-Line Interface (CLI) / 🤖 MCP Server (for AI Agents) / Automatic setup — picks the right config for each tool / Generate JSON config for any other tool / Features | NotebookLM CLI & MCP Server ! NotebookLM MCP Header docs/media/header.jpg ! PyPI version https //img.shields.io/pypi/v/notebooklm mcp cli https //pypi.org/project/notebooklm mcp cli/ ! PyPI downloads https //img.shields.io/pypi/dm/notebooklm mcp cli https //pypistats.org/packages/notebooklm mcp cli ! Total downloads https //static.pepy.tech/badge/notebooklm mcp cli https //pepy.tech/projects/notebooklm mcp cli ! Python https //img.shields.io/pypi/pyversions/notebooklm mcp cli https //pypi.org/project/notebooklm mcp cli/ ! License https //img.shields.io/pypi/l/notebooklm mcp cli https //github.com/jacob bd/notebooklm mcp cli/blob/main/LICENSE ! Buy Me a Coffee https //img.shields.io/badge/Buy |


## Key Files

### Manifests

- AGENTS.md
- README.md
- CLAUDE.md
- GEMINI.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- GEMINI.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- GEMINI.md


## Top Directories

| dir | count |
| --- | --- |
| src | 104 |
| tests | 69 |
| docs | 10 |
| .github | 4 |
| scripts | 4 |
| desktop-extension | 2 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| CHANGELOG.md | 1 |
| CLAUDE.md | 1 |
| CONTRIBUTING.md | 1 |
| GEMINI.md | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 171 |
| .md | 23 |
| .yml | 4 |
| [no-ext] | 2 |
| .json | 1 |
| .toml | 1 |
| .txt | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
