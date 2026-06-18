# datagouv/datagouv-mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/datagouv/datagouv-mcp |
| local path | sources/datagouv__datagouv-mcp |
| HEAD | 88375fa |
| stars/forks | 1538 / 125 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T12:25:25Z |
| trendScore / priorityScore | 146 / 359 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 283 | README.md, docker-compose.yml, pyproject.toml |
| Data / ML platform | 81 | README.md, helpers/datagouv_api_client.py, helpers/tabular_api_client.py |
| Developer tools / DX | 33 | README.md, pyproject.toml, .pre-commit-config.yaml |
| AI agent / orchestration | 25 | helpers/crawler_api_client.py, helpers/datagouv_api_client.py, helpers/metrics_api_client.py |
| Coding agent / software automation | 23 | README.md, CHANGELOG.md, main.py |
| Cloud native / infrastructure | 20 | README.md, .circleci/config.yml, CHANGELOG.md |
| Observability / evaluation | 11 | README.md, pyproject.toml, CHANGELOG.md |
| Security / supply chain | 5 | README.md, CHANGELOG.md, main.py |
| Database / data infrastructure | 1 | tests/test_tabular_api_client_errors.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, security |
| stacks | Python |
| capabilities | LLM/app framework, Infra/Ops, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 52 |
| manifests | 4 |
| docs | 3 |
| tests | 12 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | data.gouv.fr MCP Server | data.gouv.fr MCP Server / 🌐 Connect your chatbot to the MCP server / AnythingLLM / ChatGPT / Claude Code / Claude Desktop / Cursor / Gemini CLI / HuggingChat / IBM Bob | data.gouv.fr MCP Server <img width="1200" height="675" alt="image" src="https //github.com/user attachments/assets/5d20e992 349a 4b3b 9a0a ebe308735cc9" / !TIP Got feedback? Tell us about it here https //tally.so/r/KYMboX ! CircleCI https //circleci.com/gh/datagouv/datagouv mcp.svg?style=svg https //circleci.com/gh/datagouv/datagouv mcp ! License MIT https //img.shields.io/badge/License MIT yellow.svg https //opensource.org/licenses/MIT Model Context Protocol MCP server that allows AI chatbots Claude, ChatGPT, Gemini, etc. to search, explore, and analyze datasets from data.gouv.fr https //www.data.gouv.fr , the French national Open Data platform, directly through conversation. Instead of man |


## Key Files

### Manifests

- README.md
- docker-compose.yml
- Dockerfile
- pyproject.toml


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| helpers | 12 |
| tests | 12 |
| tools | 11 |
| .github | 4 |
| .circleci | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| CHANGELOG.md | 1 |
| docker-compose.yml | 1 |
| Dockerfile | 1 |
| LICENSE | 1 |
| main.py | 1 |
| pyproject.toml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 37 |
| .yml | 5 |
| .md | 3 |
| [no-ext] | 3 |
| .example | 1 |
| .sh | 1 |
| .toml | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
