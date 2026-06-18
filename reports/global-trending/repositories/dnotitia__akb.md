# dnotitia/akb

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/dnotitia/akb |
| local path | sources/dnotitia__akb |
| HEAD | bac4527 |
| stars/forks | 59 / 3 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T17:58:07Z |
| trendScore / priorityScore | 164 / 459 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / app framework | 314 | frontend/README.md, eval/agentic-bench/README.md, README.md |
| MCP / agent interoperability | 233 | eval/agentic-bench/README.md, okf/README.md, README.md |
| Cloud native / infrastructure | 187 | eval/longmemeval/README.md, README.md, deploy/all-in-one/README.md |
| AI agent / orchestration | 184 | frontend/README.md, eval/agentic-bench/README.md, okf/README.md |
| RAG / retrieval / knowledge | 180 | eval/agentic-bench/README.md, eval/longmemeval/README.md, okf/README.md |
| Security / supply chain | 165 | frontend/README.md, eval/longmemeval/README.md, README.md |
| Database / data infrastructure | 101 | eval/longmemeval/README.md, okf/README.md, README.md |
| Coding agent / software automation | 81 | README.md, packages/akb-mcp-client/package.json, backend/pyproject.toml |
| Observability / evaluation | 46 | backend/tests/eval/README.md, eval/longmemeval/README.md, README.md |
| Developer tools / DX | 44 | frontend/README.md, okf/README.md, README.md |
| Data / ML platform | 16 | eval/agentic-bench/README.md, eval/longmemeval/README.md, CLAUDE.md |
| Local LLM / inference | 1 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 681 |
| manifests | 25 |
| docs | 88 |
| tests | 165 |
| ci/ops | 22 |
| spec artifacts | 6 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | AKB — Agent Knowledge Base | AKB — Agent Knowledge Base / Works with / Plugins / Try it live / Why AKB / Retrieval quality / Design philosophy / Architecture / Key Concepts / MCP Tools (selection) | <p align="center" <img src="docs/assets/akb hero.png" alt="AKB — agents reading and writing into a permissioned knowledge vault of docs, tables, and files, linked by a URI graph" width="100%" </p AKB — Agent Knowledge Base Organizational memory for AI agents. Git backed knowledge base served over the Model Context Protocol MCP — agents read and write directly with hybrid semantic + keyword search, structured tables, files, and a URI graph. Drop in alternative to Confluence / Notion for Claude Code, Cursor, Windsurf, and any MCP aware agent. ! License BSL 1.1 https //img.shields.io/badge/license BUSL 1.1 blue.svg ./LICENSE ! npm akb mcp https //img.shields.io/npm/v/akb mcp.svg?label=npm%3A%20 |


## Key Files

### Manifests

- backend/tests/eval/README.md
- frontend/README.md
- backend/app/services/vector_store/_grpc/README.md
- eval/agentic-bench/README.md
- eval/longmemeval/README.md
- okf/README.md
- README.md
- deploy/all-in-one/README.md
- deploy/k8s/README.md
- CLAUDE.md
- agents/requirements.txt
- frontend/Dockerfile
- frontend/package.json
- frontend/tsconfig.json
- frontend/vite.config.ts
- eval/longmemeval/docker-compose.yaml
- packages/akb-mcp-client/package.json
- backend/Dockerfile
- backend/pyproject.toml
- deploy/docker-compose.yaml


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- agents/requirements.txt
- backend/templates/doc-templates/adr.md
- backend/templates/doc-templates/prd.md
- templates/doc-templates/adr.md
- templates/doc-templates/prd.md


### Agent Instruction Files

- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| backend | 334 |
| frontend | 193 |
| plugins | 44 |
| deploy | 20 |
| templates | 20 |
| eval | 19 |
| docs | 9 |
| okf | 6 |
| packages | 6 |
| scripts | 5 |
| .github | 3 |
| agents | 2 |
| config | 2 |
| .agents | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 250 |
| .tsx | 126 |
| .md | 88 |
| .sh | 69 |
| .ts | 53 |
| .yaml | 31 |
| .json | 16 |
| .proto | 13 |
| [no-ext] | 10 |
| .mjs | 4 |
| .conf | 3 |
| .example | 3 |
| .yml | 3 |
| .sql | 2 |
| .svg | 2 |
| .baseline | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
