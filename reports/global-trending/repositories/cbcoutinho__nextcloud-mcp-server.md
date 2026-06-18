# cbcoutinho/nextcloud-mcp-server

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/cbcoutinho/nextcloud-mcp-server |
| local path | sources/cbcoutinho__nextcloud-mcp-server |
| HEAD | ccc3f42 |
| stars/forks | 272 / 45 |
| language | Python |
| license |  |
| pushedAt | 2026-06-18T00:24:23Z |
| trendScore / priorityScore | 170 / 500 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 500 | infra/terraform/nextcloud-mcp-deployer-role/README.md, infra/terraform/nextcloud-mcp-server/README.md, README.md |
| MCP / agent interoperability | 500 | tests/rag_evaluation/README.md, infra/terraform/nextcloud-mcp-deployer-role/README.md, infra/terraform/nextcloud-mcp-server/README.md |
| RAG / retrieval / knowledge | 500 | tests/rag_evaluation/README.md, infra/terraform/nextcloud-mcp-server/README.md, README.md |
| Security / supply chain | 500 | infra/terraform/nextcloud-mcp-deployer-role/README.md, infra/terraform/nextcloud-mcp-server/README.md, README.md |
| Database / data infrastructure | 346 | tests/rag_evaluation/README.md, README.md, CLAUDE.md |
| Observability / evaluation | 162 | tests/rag_evaluation/README.md, README.md, CLAUDE.md |
| Developer tools / DX | 114 | tests/rag_evaluation/README.md, README.md, CLAUDE.md |
| AI agent / orchestration | 111 | README.md, CLAUDE.md, docs/ADR-008-mcp-sampling-for-semantic-search.md |
| Local LLM / inference | 107 | tests/rag_evaluation/README.md, README.md, CLAUDE.md |
| Data / ML platform | 54 | tests/rag_evaluation/README.md, README.md, infra/terraform/README.md |
| Coding agent / software automation | 33 | README.md, CLAUDE.md, docs/ADR-004-mcp-application-oauth.md |
| Frontend / app framework | 23 | docs/testing-oidc-consent.md, docs/ADR-012-unified-multi-algorithm-search.md, docs/ADR-022-deployment-mode-consolidation.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 608 |
| manifests | 10 |
| docs | 71 |
| tests | 265 |
| ci/ops | 29 |
| spec artifacts | 6 |
| agent instruction files | 6 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Nextcloud MCP Server | Nextcloud MCP Server / Quick Start / Docker / Key Features / Supported Apps / Authentication / Semantic Search / Documentation / Contributing / Security | <p align="center" <img src="astrolabe.svg" alt="Nextcloud MCP Server" width="128" height="128" </p Nextcloud MCP Server ! Docker Image https //img.shields.io/badge/docker ghcr.io/cbcoutinho/nextcloud mcp server blue https //github.com/cbcoutinho/nextcloud mcp server/pkgs/container/nextcloud mcp server A production ready MCP server that connects AI assistants to your Nextcloud instance. Enable Large Language Models like Claude, GPT, and Gemini to interact with your Nextcloud data through a secure API. Create notes, manage calendars, organize contacts, work with files, and more all through natural language conversations. This is a dedicated standalone MCP server designed for external MCP clien |


## Key Files

### Manifests

- tests/rag_evaluation/README.md
- infra/terraform/nextcloud-mcp-deployer-role/README.md
- infra/terraform/nextcloud-mcp-server/README.md
- README.md
- infra/terraform/README.md
- CLAUDE.md
- docker-compose.yml
- Dockerfile
- pyproject.toml
- docker-compose.ci.yml


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- .github/workflows/claude.yml
- .claude/hooks/sonar-secrets/build-scripts/prompt-secrets.sh
- .claude/settings.json
- .claude/hooks/sonar-secrets/build-scripts/pretool-secrets.sh
- .claude/skills/pre-push-review/SKILL.md


### Agent Instruction Files

- CLAUDE.md
- .github/workflows/claude.yml
- .claude/hooks/sonar-secrets/build-scripts/prompt-secrets.sh
- .claude/settings.json
- .claude/hooks/sonar-secrets/build-scripts/pretool-secrets.sh
- .claude/skills/pre-push-review/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| tests | 265 |
| nextcloud_mcp_server | 190 |
| docs | 58 |
| app-hooks | 19 |
| infra | 17 |
| .github | 14 |
| scripts | 5 |
| .claude | 4 |
| mcpb | 4 |
| alembic | 2 |
| claude-funnel | 2 |
| .dockerignore | 1 |
| .env.keycloak.sample | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 443 |
| .md | 71 |
| .sh | 24 |
| .yml | 16 |
| .tf | 13 |
| .json | 8 |
| [no-ext] | 8 |
| .html | 7 |
| .conf | 2 |
| .example | 2 |
| .sample | 2 |
| .claude-funnel | 1 |
| .cmd | 1 |
| .css | 1 |
| .ini | 1 |
| .js | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
