# EmbeddedLLM/JamAIBase

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/EmbeddedLLM/JamAIBase |
| local path | sources/EmbeddedLLM__JamAIBase |
| HEAD | 91e2743 |
| stars/forks | 1098 / 41 |
| language | Python |
| license |  |
| pushedAt | 2026-06-08T06:06:06Z |
| trendScore / priorityScore | 140 / 414 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 278 | clients/python/README.md, clients/typescript/README.md, README.md |
| AI agent / orchestration | 103 | clients/python/README.md, clients/typescript/README.md, AGENTS.md |
| Cloud native / infrastructure | 102 | clients/python/README.md, clients/typescript/README.md, AGENTS.md |
| Security / supply chain | 89 | clients/typescript/README.md, AGENTS.md, services/app/vite.config.ts |
| Frontend / app framework | 75 | clients/python/README.md, clients/typescript/README.md, AGENTS.md |
| Observability / evaluation | 43 | services/api/pyproject.toml, docs/alert_guide.md, services/api/tests/docling_ground_truth/(2017.06.30) NMT in Linear Time (ByteNet).json |
| Database / data infrastructure | 41 | clients/typescript/README.md, AGENTS.md, README.md |
| Developer tools / DX | 41 | clients/python/README.md, clients/typescript/README.md, AGENTS.md |
| MCP / agent interoperability | 39 | AGENTS.md, CLAUDE.md, services/api/pyproject.toml |
| Data / ML platform | 19 | clients/typescript/README.md, README.md, clients/python/pyproject.toml |
| Coding agent / software automation | 8 | AGENTS.md, clients/python/src/jamaibase/types/__init__.py, clients/python/src/jamaibase/types/mcp.py |
| Local LLM / inference | 5 | clients/python/src/jamaibase/types/db.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 797 |
| manifests | 20 |
| docs | 24 |
| tests | 116 |
| ci/ops | 8 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | JamAI Base | JamAI Base / Overview / Migration Guide from v1 to v2 / Key Features / Generative Tables / Action Tables / Knowledge Tables / Chat Tables / LanceDB Integration / Declarative Paradigm | JamAI Base ! JamAI Base Cover JamAI Base Cover.png <! prettier ignore start ! Linting https //github.com/EmbeddedLLM/JamAIBase/actions/workflows/lint.yml/badge.svg ! CI https //github.com/EmbeddedLLM/JamAIBase/actions/workflows/ci.yml/badge.svg !TIP Explore our docs explore the documentation <! prettier ignore end Overview JamAI Base is an open source RAG Retrieval Augmented Generation backend platform that integrates an embedded database SQLite and an embedded vector database LanceDB with managed memory and RAG capabilities. It features built in LLM, vector embeddings, and reranker orchestration and management, all accessible through a convenient, intuitive, spreadsheet like UI and a simple |


## Key Files

### Manifests

- clients/python/README.md
- clients/typescript/README.md
- AGENTS.md
- README.md
- services/api/tests/README.md
- services/api/README.md
- services/app/README.md
- CLAUDE.md
- clients/python/pyproject.toml
- services/api/pyproject.toml
- services/app/package.json
- services/app/tsconfig.json
- services/app/vite.config.ts
- services/replication/docker-compose.yaml
- docker/compose.test-llm.yml
- docker/compose.bake.hcl
- docker/compose.base.yml
- docker/compose.ci.yml
- docker/compose.dev.yml
- docker/compose.oss.yml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| services | 623 |
| clients | 111 |
| docker | 25 |
| scripts | 14 |
| .github | 6 |
| docs | 3 |
| .dockerignore | 1 |
| .env.example | 1 |
| .flake8 | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .gitmodules | 1 |
| .prettierignore | 1 |
| .prettierrc | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .svelte | 300 |
| .ts | 170 |
| .py | 157 |
| .md | 23 |
| [no-ext] | 23 |
| .yml | 18 |
| .svg | 15 |
| .json | 12 |
| .mp3 | 9 |
| .sh | 7 |
| .cjs | 6 |
| .csv | 4 |
| .html | 4 |
| .js | 4 |
| .txt | 4 |
| .css | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
