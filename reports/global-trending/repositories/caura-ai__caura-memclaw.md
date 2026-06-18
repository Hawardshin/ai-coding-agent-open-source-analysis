# caura-ai/caura-memclaw

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/caura-ai/caura-memclaw |
| local path | sources/caura-ai__caura-memclaw |
| HEAD | eae40c8 |
| stars/forks | 127 / 12 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:17:54Z |
| trendScore / priorityScore | 172 / 481 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | clients/python/README.md, clients/typescript/README.md, README.md |
| RAG / retrieval / knowledge | 331 | core-storage-api/src/core_storage_api/scripts/README.md, README.md, core-storage-api/pyproject.toml |
| MCP / agent interoperability | 325 | clients/python/README.md, clients/typescript/README.md, README.md |
| Cloud native / infrastructure | 257 | core-storage-api/src/core_storage_api/scripts/README.md, README.md, core-storage-api/pyproject.toml |
| Database / data infrastructure | 178 | README.md, core-storage-api/Dockerfile, core-storage-api/pyproject.toml |
| Security / supply chain | 148 | README.md, docs/live-memory-pitch/skill-factory-spec.md, requirements.txt |
| Observability / evaluation | 96 | README.md, core-api/pyproject.toml, docs/live-memory-pitch/skill-factory-spec.md |
| Coding agent / software automation | 89 | README.md, docs/live-memory-pitch/skill-factory-spec.md, docs/live-memory-pitch/feature-priorities.md |
| Developer tools / DX | 69 | README.md, core-storage-api/pyproject.toml, core-api/pyproject.toml |
| Data / ML platform | 65 | README.md, core-api/pyproject.toml, docs/live-memory-pitch/skill-factory-spec.md |
| Frontend / app framework | 27 | docs/live-memory-pitch/skill-factory-implementation-plan.md, scripts/hyperagent_test.py |
| Local LLM / inference | 9 | docker-compose.yml, tests/test_embedding_openai_compat.py, docs/local-embedder.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 789 |
| manifests | 22 |
| docs | 42 |
| tests | 282 |
| ci/ops | 20 |
| spec artifacts | 3 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Write a memory — no API key needed | MemClaw — Fleet memory for AI agents / Quick Start / Try it locally — no API key, no signup / Write a memory — no API key needed / Search for it / Managed Platform / Self-Hosted (Open Source) / {"status":"ok","storage":"connected","redis":"connected","event_bus":"ok"} / Write a memory (standalone mode — no API key needed) / Search for it | <p align="center" <img src="static/images/memCLAW logo dark.png" alt="MemClaw" width="420" / </p <h3 align="center" Fleet memory for AI agents &mdash; governed, shared, self improving.</h3 <p align="center" <a href="LICENSE" <img src="https //img.shields.io/badge/License Apache 2.0 blue.svg" alt="License" / </a <a href="https //github.com/caura ai/caura memclaw/stargazers" <img src="https //img.shields.io/github/stars/caura ai/caura memclaw?style=social" alt="GitHub Stars" / </a <a href="https //github.com/caura ai/caura memclaw/actions" <img src="https //img.shields.io/github/actions/workflow/status/caura ai/caura memclaw/ci.yml?label=CI" alt="CI" / </a <a href="https //github.com/caura ai/ |


## Key Files

### Manifests

- clients/python/README.md
- clients/typescript/README.md
- core-storage-api/src/core_storage_api/scripts/README.md
- README.md
- tests/fixtures/README.md
- core-storage-api/Dockerfile
- core-storage-api/pyproject.toml
- clients/python/pyproject.toml
- clients/typescript/package.json
- clients/typescript/tsconfig.json
- core-api/Dockerfile
- core-api/pyproject.toml
- core-operations/Dockerfile
- core-operations/pyproject.toml
- core-worker/Dockerfile
- core-worker/pyproject.toml
- docker-compose.yml
- package.json
- plugin/package.json
- plugin/tsconfig.json


### Spec / Docs / Prompt Artifacts

- requirements.txt
- .claude/settings.json
- .claude/hooks/pre-commit-check.sh


### Agent Instruction Files

- .claude/settings.json
- .claude/hooks/pre-commit-check.sh


## Top Directories

| dir | count |
| --- | --- |
| tests | 240 |
| core-api | 194 |
| common | 74 |
| core-storage-api | 71 |
| plugin | 48 |
| scripts | 31 |
| core-worker | 23 |
| docs | 22 |
| .github | 21 |
| clients | 15 |
| core-operations | 12 |
| static | 3 |
| .claude | 2 |
| .dockerignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 624 |
| .ts | 44 |
| .md | 30 |
| .yml | 21 |
| .json | 19 |
| .svg | 13 |
| [no-ext] | 11 |
| .sh | 6 |
| .ini | 5 |
| .toml | 5 |
| .jsonl | 4 |
| .dev | 1 |
| .example | 1 |
| .mako | 1 |
| .test | 1 |
| .txt | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
