# blockscout/mcp-server

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/blockscout/mcp-server |
| local path | sources/blockscout__mcp-server |
| HEAD | 2ed7f05 |
| stars/forks | 40 / 19 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:15:13Z |
| trendScore / priorityScore | 139 / 408 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | .cursor/AGENTS.md, mcpb/README.md, tests/evals/README.md |
| Coding agent / software automation | 207 | .cursor/AGENTS.md, README.md, .gemini/GEMINI.md |
| AI agent / orchestration | 188 | .cursor/AGENTS.md, tests/evals/README.md, AGENTS.md |
| Cloud native / infrastructure | 155 | mcpb/README.md, tests/evals/README.md, AGENTS.md |
| Observability / evaluation | 90 | tests/evals/README.md, AGENTS.md, README.md |
| Database / data infrastructure | 88 | tests/evals/README.md, AGENTS.md, blockscout_mcp_server/analytics.py |
| Developer tools / DX | 80 | .cursor/AGENTS.md, mcpb/README.md, tests/evals/README.md |
| Security / supply chain | 29 | AGENTS.md, gpt/README.md, README.md |
| RAG / retrieval / knowledge | 3 | Dockerfile, .agents/skills/describe-changes/SKILL.md |
| Frontend / app framework | 1 | blockscout_mcp_server/config.py |
| Local LLM / inference | 1 | .devcontainer/devcontainer.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 271 |
| manifests | 10 |
| docs | 34 |
| tests | 112 |
| ci/ops | 7 |
| spec artifacts | 33 |
| agent instruction files | 32 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Blockscout MCP Server | Blockscout MCP Server / Enhanced Analysis with Agent Skills / Configuring MCP Clients / Blockscout PRO API Key / Using Claude Connectors Directory - Recommended / Claude Desktop Setup / Claude Code Setup / ChatGPT Apps Setup / Codex App Setup / Codex CLI Setup | Blockscout MCP Server ! smithery badge https //smithery.ai/badge/@blockscout/mcp server https //smithery.ai/server/@blockscout/mcp server <a href="https //glama.ai/mcp/servers/@blockscout/mcp server" <img width="380" height="200" src="https //glama.ai/mcp/servers/@blockscout/mcp server/badge" alt="Blockscout Server MCP server" / </a The Model Context Protocol MCP is an open protocol designed to allow AI agents, IDEs, and automation tools to consume, query, and analyze structured data through context aware APIs. This server wraps Blockscout APIs and exposes blockchain data—balances, tokens, NFTs, contract metadata—via MCP so that AI agents and tools like Claude, Cursor, or IDEs can access and |


## Key Files

### Manifests

- .cursor/AGENTS.md
- mcpb/README.md
- tests/evals/README.md
- AGENTS.md
- gpt/README.md
- README.md
- .gemini/GEMINI.md
- tests/evals/docker-compose.yml
- Dockerfile
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- .cursor/AGENTS.md
- AGENTS.md
- .gemini/GEMINI.md
- .github/copilot-instructions.md
- .cursor/rules/110-new-mcp-tool.mdc
- .cursor/rules/120-mcp-tool-arguments.mdc
- .cursor/rules/135-mcpb-manifest-version.mdc
- .cursor/rules/200-development-testing-workflow.mdc
- .cursor/rules/210-unit-testing-guidelines.mdc
- .cursor/rules/220-integration-testing-guidelines.mdc
- .cursor/rules/230-api-route-tests.mdc
- .cursor/rules/000-role-and-task.mdc
- .cursor/rules/010-implementation-rules.mdc
- .cursor/rules/112-direct-api-handlers.mdc
- .cursor/rules/113-direct-api-migration-checklist.mdc
- .cursor/rules/115-tool-module-structure.mdc
- .cursor/rules/130-version-management.mdc
- .cursor/rules/140-tool-description.mdc
- .cursor/rules/150-rest-api-implementation.mdc
- .cursor/rules/160-static-content-caching.mdc


### Agent Instruction Files

- .cursor/AGENTS.md
- AGENTS.md
- .gemini/GEMINI.md
- .github/copilot-instructions.md
- .cursor/rules/110-new-mcp-tool.mdc
- .cursor/rules/120-mcp-tool-arguments.mdc
- .cursor/rules/135-mcpb-manifest-version.mdc
- .cursor/rules/200-development-testing-workflow.mdc
- .cursor/rules/210-unit-testing-guidelines.mdc
- .cursor/rules/220-integration-testing-guidelines.mdc
- .cursor/rules/230-api-route-tests.mdc
- .cursor/rules/000-role-and-task.mdc
- .cursor/rules/010-implementation-rules.mdc
- .cursor/rules/112-direct-api-handlers.mdc
- .cursor/rules/113-direct-api-migration-checklist.mdc


## Top Directories

| dir | count |
| --- | --- |
| tests | 111 |
| blockscout_mcp_server | 57 |
| .cursor | 21 |
| .agents | 17 |
| .gemini | 11 |
| .github | 10 |
| .claude | 8 |
| gpt | 5 |
| mcpb | 4 |
| scripts | 4 |
| .devcontainer | 3 |
| .codex | 2 |
| .dockerignore | 1 |
| .env.example | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 162 |
| .md | 34 |
| .mdc | 20 |
| .json | 10 |
| .sh | 10 |
| [no-ext] | 9 |
| .yaml | 7 |
| .toml | 6 |
| .yml | 6 |
| .example | 3 |
| .html | 1 |
| .ini | 1 |
| .sol | 1 |
| .txt | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
