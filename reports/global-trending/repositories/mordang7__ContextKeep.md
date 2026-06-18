# mordang7/ContextKeep

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/mordang7/ContextKeep |
| local path | sources/mordang7__ContextKeep |
| HEAD | 95fd19a |
| stars/forks | 156 / 36 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T13:14:01Z |
| trendScore / priorityScore | 136 / 335 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 180 | README.md, docs/CLIENT_CONFIGURATION.md, docs/DIRECTIVE_UPDATE.md |
| MCP / agent interoperability | 118 | README.md, docker-compose.yml, docs/CLIENT_CONFIGURATION.md |
| Database / data infrastructure | 107 | README.md, docs/CLIENT_CONFIGURATION.md, pyproject.toml |
| AI agent / orchestration | 22 | README.md, docs/CLIENT_CONFIGURATION.md, pyproject.toml |
| Developer tools / DX | 10 | README.md, docs/CLIENT_CONFIGURATION.md, docs/DIRECTIVE_UPDATE.md |
| Data / ML platform | 8 | static/js/app.js |
| Coding agent / software automation | 5 | docs/CLIENT_CONFIGURATION.md, static/css/style.css |
| Security / supply chain | 5 | core/memory_manager.py, core/categories.py, templates/index.html |
| RAG / retrieval / knowledge | 3 | README.md, docs/DIRECTIVE_UPDATE.md, migrate.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontendStack, infra, infraOps, llmFramework, mcp, rag, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 38 |
| manifests | 5 |
| docs | 8 |
| tests | 0 |
| ci/ops | 2 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | ContextKeep | ContextKeep / Long-Term Memory for AI Agents / Features / What's New In V2.1 Atlas / Safe Upgrade First / Install / Fresh Bare-Metal Install / Fresh Docker Install / Run / MCP Tools | <div align="center" ! ContextKeep Banner assets/banner.png ContextKeep Long Term Memory for AI Agents ! Version 2.1 https //img.shields.io/badge/Version 2.1 brightgreen?style=for the badge https //github.com/mordang7/ContextKeep ! Status Stable https //img.shields.io/badge/Status Stable blue?style=for the badge https //github.com/mordang7/ContextKeep ! Platform Linux Windows macOS https //img.shields.io/badge/Platform Linux%20%7C%20Windows%20%7C%20macOS lightgrey?style=for the badge https //github.com/mordang7/ContextKeep ! License MIT https //img.shields.io/badge/License MIT yellow?style=for the badge https //opensource.org/licenses/MIT ! Python 3.10+ https //img.shields.io/badge/python 3.1 |


## Key Files

### Manifests

- README.md
- docker-compose.yml
- Dockerfile
- pyproject.toml
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| docs | 6 |
| scripts | 5 |
| core | 4 |
| static | 2 |
| .dockerignore | 1 |
| .gitignore | 1 |
| check_timezone.py | 1 |
| contextkeep-server.service | 1 |
| contextkeep-webui.service | 1 |
| docker-compose.yml | 1 |
| Dockerfile | 1 |
| install_services.sh | 1 |
| install.py | 1 |
| mcp_config.antigravity.example.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 14 |
| .md | 8 |
| .json | 4 |
| [no-ext] | 3 |
| .service | 2 |
| .css | 1 |
| .html | 1 |
| .js | 1 |
| .sh | 1 |
| .toml | 1 |
| .txt | 1 |
| .yml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
