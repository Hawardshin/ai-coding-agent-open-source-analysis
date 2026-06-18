# netboxlabs/netbox-mcp-server

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/netboxlabs/netbox-mcp-server |
| local path | sources/netboxlabs__netbox-mcp-server |
| HEAD | 8d02e9a |
| stars/forks | 187 / 84 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T20:10:45Z |
| trendScore / priorityScore | 154 / 349 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 313 | README.md, CLAUDE.md, Dockerfile |
| Cloud native / infrastructure | 67 | README.md, CLAUDE.md, .github/workflows/container-rescan.yaml |
| Security / supply chain | 62 | README.md, CLAUDE.md, SECURITY.md |
| Developer tools / DX | 15 | README.md, CLAUDE.md, pyproject.toml |
| Coding agent / software automation | 9 | README.md, CLAUDE.md, CONTRIBUTING.md |
| Observability / evaluation | 5 | .claude/skills/netbox-mcp-testing/SKILL.md, src/netbox_mcp_server/config.py, src/netbox_mcp_server/server.py |
| AI agent / orchestration | 1 | CLAUDE.md |
| Data / ML platform | 1 | CHANGELOG.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, devtools, frontendStack, infra, infraOps, llm-app, mcp, observability, security, securityTooling |
| stacks | Python |
| capabilities | Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 46 |
| manifests | 4 |
| docs | 7 |
| tests | 12 |
| ci/ops | 7 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | NetBox MCP Server | NetBox MCP Server / Community / Tools / Usage / Claude Code / Start the server with HTTP transport (using .env or environment variables) / Add the HTTP MCP server (note: URL must include http:// or https:// prefix) / Claude Desktop / Field Filtering (Token Optimization) / Without fields: ~5000 tokens for 50 devices | NetBox MCP Server ⚠️ Breaking Change in v1.0.0 The project structure has changed. If upgrading from v0.1.0, update your configuration Change uv run server.py to uv run netbox mcp server Update Claude Desktop/Code configs to use netbox mcp server instead of server.py Docker users rebuild images with updated CMD See CHANGELOG.md CHANGELOG.md for full details This is a simple read only Model Context Protocol https //modelcontextprotocol.io/ server for NetBox. It enables you to interact with your data in NetBox directly via LLMs that support MCP. The server is intentionally simple easy to get started with, hard to misuse read only by default, no plugin surface , and easy to fork and adapt. Forki |


## Key Files

### Manifests

- README.md
- CLAUDE.md
- Dockerfile
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- .claude/skills/netbox-mcp-testing/SKILL.md


### Agent Instruction Files

- CLAUDE.md
- .claude/skills/netbox-mcp-testing/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| .github | 13 |
| tests | 12 |
| src | 6 |
| .claude | 1 |
| .dockerignore | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| CHANGELOG.md | 1 |
| CLAUDE.md | 1 |
| CONTRIBUTING.md | 1 |
| Dockerfile | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 18 |
| .yaml | 8 |
| .md | 7 |
| .yml | 5 |
| [no-ext] | 5 |
| .example | 1 |
| .json5 | 1 |
| .toml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
