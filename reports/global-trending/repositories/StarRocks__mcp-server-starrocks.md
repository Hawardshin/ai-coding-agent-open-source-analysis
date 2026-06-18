# StarRocks/mcp-server-starrocks

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/StarRocks/mcp-server-starrocks |
| local path | sources/StarRocks__mcp-server-starrocks |
| HEAD | 75bc4a9 |
| stars/forks | 175 / 55 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T00:20:38Z |
| trendScore / priorityScore | 146 / 342 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Database / data infrastructure | 326 | tests/README.md, README.md, CLAUDE.md |
| MCP / agent interoperability | 121 | tests/README.md, README.md, CLAUDE.md |
| Security / supply chain | 41 | README.md, CLAUDE.md, tests/test_db_client.py |
| Coding agent / software automation | 33 | tests/README.md, README.md, CLAUDE.md |
| Observability / evaluation | 6 | CLAUDE.md, src/mcp_server_starrocks/connection_health_checker.py, src/mcp_server_starrocks/server.py |
| Developer tools / DX | 5 | README.md, src/mcp_server_starrocks/secret_resolver.py, RELEASE_NOTES.md |
| Cloud native / infrastructure | 4 | README.md, src/mcp_server_starrocks/server.py |
| AI agent / orchestration | 1 | README.md |
| Frontend / app framework | 1 | src/mcp_server_starrocks/server.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, databaseRuntime, devtools, frontend, frontendStack, infra, mcp, observability, security, securityTooling |
| stacks | Python |
| capabilities | Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 19 |
| manifests | 4 |
| docs | 4 |
| tests | 3 |
| ci/ops | 1 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | StarRocks Official MCP Server | StarRocks Official MCP Server / Features / Prerequisites / Installing `uv` / macOS / Linux / Windows (PowerShell) / Or via Homebrew / pipx / pip / pipx install uv / pip install uv / Installation | ! MseeP.ai Security Assessment Badge https //mseep.net/mseep audited.png https //mseep.ai/app/starrocks mcp server starrocks StarRocks Official MCP Server The StarRocks MCP Server acts as a bridge between AI assistants and StarRocks databases. It allows for direct SQL execution, database exploration, data visualization via charts, and retrieving detailed schema/data overviews without requiring complex client side setup. <a href="https //glama.ai/mcp/servers/@StarRocks/mcp server starrocks" <img width="380" height="200" src="https //glama.ai/mcp/servers/@StarRocks/mcp server starrocks/badge" alt="StarRocks Server MCP server" / </a Features Direct SQL Execution Run SELECT queries read query an |


## Key Files

### Manifests

- tests/README.md
- README.md
- CLAUDE.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- CLAUDE.md


### Agent Instruction Files

- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| src | 6 |
| tests | 3 |
| .github | 1 |
| .gitignore | 1 |
| .python-version | 1 |
| CLAUDE.md | 1 |
| glama.json | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |
| pytest.ini | 1 |
| README.md | 1 |
| RELEASE_NOTES.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 8 |
| .md | 4 |
| [no-ext] | 3 |
| .ini | 1 |
| .json | 1 |
| .toml | 1 |
| .yml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
