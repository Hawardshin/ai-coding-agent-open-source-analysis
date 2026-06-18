# modelcontextprotocol/python-sdk

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/modelcontextprotocol/python-sdk |
| local path | sources/modelcontextprotocol__python-sdk |
| HEAD | 734746a |
| stars/forks | 23356 / 3550 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T07:46:45Z |
| trendScore / priorityScore | 166 / 440 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | examples/clients/simple-auth-client/README.md, examples/clients/sse-polling-client/README.md, examples/servers/simple-prompt/README.md |
| Developer tools / DX | 130 | examples/clients/simple-auth-client/README.md, examples/README.md, examples/servers/everything-server/README.md |
| Security / supply chain | 108 | examples/clients/simple-auth-client/README.md, examples/servers/simple-auth/README.md, AGENTS.md |
| Database / data infrastructure | 62 | examples/servers/simple-pagination/README.md, examples/clients/simple-chatbot/README.MD, README.md |
| Coding agent / software automation | 57 | examples/servers/simple-pagination/README.md, README.md, examples/servers/simple-pagination/pyproject.toml |
| RAG / retrieval / knowledge | 27 | examples/mcpserver/memory.py, docs/migration.md |
| AI agent / orchestration | 19 | CLAUDE.md, examples/clients/simple-chatbot/mcp_simple_chatbot/main.py, examples/mcpserver/memory.py |
| Observability / evaluation | 3 | tests/interaction/README.md, pyproject.toml |
| Cloud native / infrastructure | 2 | docs/migration.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 461 |
| manifests | 33 |
| docs | 32 |
| tests | 180 |
| ci/ops | 9 |
| spec artifacts | 11 |
| agent instruction files | 10 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | MCP Python SDK | MCP Python SDK / Table of Contents / Overview / Installation / Adding MCP to your python project / Running the standalone MCP development tools / Quickstart / Create an MCP server / Add an addition tool / Add a dynamic greeting resource | MCP Python SDK <div align="center" <strong Python implementation of the Model Context Protocol MCP </strong ! PyPI pypi badge pypi url ! MIT licensed mit badge mit url ! Python Version python badge python url ! Documentation docs badge docs url ! Protocol protocol badge protocol url ! Specification spec badge spec url </div <! TODO v2 Replace this README with README.v2.md when v2 is released !NOTE This README documents v1.x of the MCP Python SDK the current stable release . v2 is in alpha. Pre releases are published to PyPI as 2.0.0aN and can be installed with an explicit pin, for example pip install mcp==2.0.0a1 . See README.v2.md README.v2.md for the v2 documentation and the migration guid |


## Key Files

### Manifests

- examples/clients/simple-auth-client/README.md
- examples/clients/sse-polling-client/README.md
- examples/servers/simple-prompt/README.md
- examples/README.md
- examples/servers/everything-server/README.md
- examples/servers/simple-auth/README.md
- examples/servers/simple-pagination/README.md
- examples/servers/simple-resource/README.md
- examples/servers/simple-streamablehttp-stateless/README.md
- examples/servers/simple-streamablehttp/README.md
- examples/servers/simple-tool/README.md
- examples/servers/sse-polling-demo/README.md
- AGENTS.md
- README.md
- schema/README.md
- tests/interaction/README.md
- CLAUDE.md
- examples/clients/simple-auth-client/pyproject.toml
- examples/clients/simple-chatbot/mcp_simple_chatbot/requirements.txt
- examples/clients/simple-chatbot/pyproject.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- examples/clients/simple-chatbot/mcp_simple_chatbot/requirements.txt
- tests/server/mcpserver/prompts/__init__.py
- tests/server/mcpserver/prompts/test_base.py
- tests/server/mcpserver/prompts/test_manager.py
- src/mcp/server/mcpserver/prompts/__init__.py
- src/mcp/server/mcpserver/prompts/base.py
- src/mcp/server/mcpserver/prompts/manager.py
- .github/workflows/claude.yml
- .claude/commands/review-pr.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- tests/server/mcpserver/prompts/__init__.py
- tests/server/mcpserver/prompts/test_base.py
- tests/server/mcpserver/prompts/test_manager.py
- src/mcp/server/mcpserver/prompts/__init__.py
- src/mcp/server/mcpserver/prompts/base.py
- src/mcp/server/mcpserver/prompts/manager.py
- .github/workflows/claude.yml
- .claude/commands/review-pr.md


## Top Directories

| dir | count |
| --- | --- |
| tests | 180 |
| examples | 123 |
| src | 109 |
| .github | 17 |
| docs | 8 |
| schema | 4 |
| scripts | 4 |
| .claude | 1 |
| .git-blame-ignore-revs | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| AGENTS.md | 1 |
| CLAUDE.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 382 |
| .md | 31 |
| .toml | 15 |
| .yml | 12 |
| .yaml | 5 |
| [no-ext] | 5 |
| .json | 4 |
| .sh | 2 |
| .typed | 2 |
| .db | 1 |
| .example | 1 |
| .txt | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
