# vstorm-co/full-stack-ai-agent-template

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/vstorm-co/full-stack-ai-agent-template |
| local path | sources/vstorm-co__full-stack-ai-agent-template |
| HEAD | d97d291 |
| stars/forks | 1424 / 288 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T17:04:16Z |
| trendScore / priorityScore | 156 / 497 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | template/{{cookiecutter.project_slug}}/frontend/README.md, AGENTS.md, template/{{cookiecutter.project_slug}}/AGENTS.md |
| Database / data infrastructure | 500 | template/{{cookiecutter.project_slug}}/frontend/README.md, AGENTS.md, template/{{cookiecutter.project_slug}}/AGENTS.md |
| RAG / retrieval / knowledge | 500 | AGENTS.md, template/{{cookiecutter.project_slug}}/AGENTS.md, README.md |
| Frontend / app framework | 488 | template/{{cookiecutter.project_slug}}/frontend/README.md, AGENTS.md, template/{{cookiecutter.project_slug}}/AGENTS.md |
| Cloud native / infrastructure | 410 | template/{{cookiecutter.project_slug}}/frontend/README.md, AGENTS.md, README.md |
| Developer tools / DX | 249 | template/{{cookiecutter.project_slug}}/frontend/README.md, AGENTS.md, template/{{cookiecutter.project_slug}}/AGENTS.md |
| Security / supply chain | 235 | template/{{cookiecutter.project_slug}}/frontend/README.md, template/{{cookiecutter.project_slug}}/AGENTS.md, README.md |
| Observability / evaluation | 160 | template/{{cookiecutter.project_slug}}/frontend/README.md, AGENTS.md, README.md |
| MCP / agent interoperability | 47 | AGENTS.md, template/{{cookiecutter.project_slug}}/AGENTS.md, README.md |
| Data / ML platform | 23 | README.md, docs/rag.md, template/{{cookiecutter.project_slug}}/docs/howto/add-rag-source.md |
| Coding agent / software automation | 12 | AGENTS.md, template/{{cookiecutter.project_slug}}/AGENTS.md, README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 840 |
| manifests | 18 |
| docs | 64 |
| tests | 51 |
| ci/ops | 17 |
| spec artifacts | 17 |
| agent instruction files | 15 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | pip | Vstorm OSS Ecosystem / 🚀 Quick Start / Installation / pip / uv (recommended) / pipx / Create Your Project / Interactive wizard (recommended — runs by default) / Quick mode with options / Use presets for common setups | <p align="center" <img src="https //raw.githubusercontent.com/vstorm co/full stack ai agent template/main/assets/new2/chat demo.gif" alt="Live chat — web search, tool calls, and chart generation" width="100%" </p <h1 align="center" Full Stack AI Agent Template</h1 <p align="center" <i Production ready FastAPI + Next.js project generator with AI agents, RAG, and 20+ enterprise integrations.</i </p <p align="center" <a href=" quick start" Quick Start</a • <a href=" features" Features</a • <a href=" demo" Demo</a • <a href="https //vstorm co.github.io/full stack ai agent template/" Documentation</a • <a href="https //oss.vstorm.co/projects/full stack ai agent template/configurator/" Configurato |


## Key Files

### Manifests

- template/{{cookiecutter.project_slug}}/frontend/README.md
- AGENTS.md
- template/{{cookiecutter.project_slug}}/AGENTS.md
- README.md
- template/{{cookiecutter.project_slug}}/README.md
- CLAUDE.md
- template/{{cookiecutter.project_slug}}/CLAUDE.md
- template/{{cookiecutter.project_slug}}/frontend/Dockerfile
- template/{{cookiecutter.project_slug}}/frontend/package.json
- template/{{cookiecutter.project_slug}}/frontend/tsconfig.json
- pyproject.toml
- template/{{cookiecutter.project_slug}}/backend/Dockerfile
- template/{{cookiecutter.project_slug}}/backend/pyproject.toml
- template/{{cookiecutter.project_slug}}/docker-compose.yml
- template/{{cookiecutter.project_slug}}/Makefile
- template/{{cookiecutter.project_slug}}/docker-compose.frontend.yml
- template/{{cookiecutter.project_slug}}/docker-compose.dev.yml
- template/{{cookiecutter.project_slug}}/docker-compose.prod.yml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- template/{{cookiecutter.project_slug}}/AGENTS.md
- CLAUDE.md
- template/{{cookiecutter.project_slug}}/CLAUDE.md
- docs/architecture.md
- template/{{cookiecutter.project_slug}}/docs/architecture.md
- template/{{cookiecutter.project_slug}}/.claude/rules/exceptions-security.md
- template/{{cookiecutter.project_slug}}/.claude/rules/frontend.md
- template/{{cookiecutter.project_slug}}/.claude/rules/testing.md
- template/{{cookiecutter.project_slug}}/.claude/commands/add-endpoint.md
- template/{{cookiecutter.project_slug}}/.claude/commands/fix-issue.md
- template/{{cookiecutter.project_slug}}/.claude/commands/review.md
- template/{{cookiecutter.project_slug}}/.claude/rules/api-conventions.md
- template/{{cookiecutter.project_slug}}/.claude/rules/architecture.md
- template/{{cookiecutter.project_slug}}/.claude/rules/code-style.md
- template/{{cookiecutter.project_slug}}/.claude/rules/schemas-models.md
- template/{{cookiecutter.project_slug}}/.claude/settings.json


### Agent Instruction Files

- AGENTS.md
- template/{{cookiecutter.project_slug}}/AGENTS.md
- CLAUDE.md
- template/{{cookiecutter.project_slug}}/CLAUDE.md
- template/{{cookiecutter.project_slug}}/.claude/rules/exceptions-security.md
- template/{{cookiecutter.project_slug}}/.claude/rules/frontend.md
- template/{{cookiecutter.project_slug}}/.claude/rules/testing.md
- template/{{cookiecutter.project_slug}}/.claude/commands/add-endpoint.md
- template/{{cookiecutter.project_slug}}/.claude/commands/fix-issue.md
- template/{{cookiecutter.project_slug}}/.claude/commands/review.md
- template/{{cookiecutter.project_slug}}/.claude/rules/api-conventions.md
- template/{{cookiecutter.project_slug}}/.claude/rules/architecture.md
- template/{{cookiecutter.project_slug}}/.claude/rules/code-style.md
- template/{{cookiecutter.project_slug}}/.claude/rules/schemas-models.md
- template/{{cookiecutter.project_slug}}/.claude/settings.json


## Top Directories

| dir | count |
| --- | --- |
| template | 783 |
| docs | 17 |
| tests | 12 |
| .github | 8 |
| fastapi_gen | 5 |
| .actrc | 1 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| CHANGELOG.md | 1 |
| CLAUDE.md | 1 |
| CONTRIBUTING.md | 1 |
| DCO | 1 |
| GOVERNANCE.md | 1 |
| LICENSE | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 326 |
| .tsx | 205 |
| .ts | 161 |
| .md | 59 |
| [no-ext] | 18 |
| .html | 14 |
| .yml | 14 |
| .txt | 13 |
| .json | 8 |
| .yaml | 8 |
| .mdx | 3 |
| .css | 2 |
| .example | 2 |
| .mjs | 2 |
| .toml | 2 |
| .conf | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
