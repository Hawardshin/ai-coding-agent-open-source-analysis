# codecentric/c4-genai-suite

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/codecentric/c4-genai-suite |
| local path | sources/codecentric__c4-genai-suite |
| HEAD | 1b2d1f5 |
| stars/forks | 171 / 20 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T19:53:43Z |
| trendScore / priorityScore | 167 / 437 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / app framework | 358 | frontend/README.md, services/eval/README.md, helm-chart/README.md |
| Observability / evaluation | 218 | services/eval/README.md, backend/README.md, helm-chart/README.md |
| Database / data infrastructure | 103 | services/eval/llm_eval/alembic/README.md, services/eval/README.md, backend/README.md |
| Cloud native / infrastructure | 102 | frontend/README.md, e2e/README.md, helm-chart/README.md |
| Security / supply chain | 59 | helm-chart/README.md, README.md, services/reis/README.md |
| AI agent / orchestration | 41 | backend/package.json, frontend/public/docs/admin/theme/index.md, backend/src/controllers/eval/eval.controller.e2e.spec.ts |
| MCP / agent interoperability | 41 | e2e/README.md, README.md, scripts/README.md |
| RAG / retrieval / knowledge | 36 | helm-chart/README.md, README.md, services/reis/README.md |
| Developer tools / DX | 29 | services/eval/README.md, README.md, scripts/README.md |
| Local LLM / inference | 29 | helm-chart/README.md, README.md, backend/package.json |
| Coding agent / software automation | 4 | frontend/src/pages/admin/evals/evaluations/components/TestCaseResultsTable.tsx, frontend/src/pages/admin/evals/metrics/__tests__/MetricsPage.ui-unit.spec.tsx |
| Data / ML platform | 2 | e2e/README.md, services/eval/pyproject.toml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1404 |
| manifests | 40 |
| docs | 36 |
| tests | 228 |
| ci/ops | 83 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | c4 GenAI Suite | c4 GenAI Suite / Features / Large Language Models (LLM) and Multimodal Models / Retrieval Augmented Generation (RAG) / Extensions / Getting Started / Using Docker-Compose / Using Helm & Kubernetes / Setting up Assistants and Extensions / Model Context Protocol (MCP) [optional] | c4 GenAI Suite An AI chatbot application with Model Context Provider MCP integration, powered by ai sdk and compatibility for all major Large Language Models LLMs and Embedding Models. Administrators can create assistants with different capabilities by adding extensions, such as RAG Retrieval Augmented Generation services or MCP servers. The application is built using a modern tech stack, including React, NestJS, and Python FastAPI for the REI S service. Users can interact with assistants through a user friendly interface. Depending on the assistant's configuration, users may be able to ask questions, upload their own files, or use other features. The assistants interact with various LLM pro |


## Key Files

### Manifests

- frontend/README.md
- services/eval/llm_eval/alembic/README.md
- services/eval/README.md
- backend/README.md
- e2e/README.md
- helm-chart/README.md
- README.md
- scripts/README.md
- services/confluence-importer/README.md
- services/reis/README.md
- frontend/Dockerfile
- frontend/package.json
- frontend/tsconfig.json
- frontend/vite.config.ts
- dev/mcp-tool-as-server/Dockerfile
- dev/mcp-tool-as-server/package.json
- dev/mcp-tool-as-server/tsconfig.json
- services/eval/Dockerfile
- services/eval/pyproject.toml
- backend/Dockerfile


### Spec / Docs / Prompt Artifacts

- .github/workflows/eval.yaml
- services/eval/ROADMAP.md


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| frontend | 513 |
| backend | 429 |
| services | 298 |
| helm-chart | 49 |
| e2e | 42 |
| .github | 24 |
| dev | 19 |
| scripts | 6 |
| .vscode | 2 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .gitleaks.toml | 1 |
| .gitleaksignore | 1 |
| .husky | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 693 |
| .py | 230 |
| .tsx | 193 |
| .yaml | 66 |
| [no-ext] | 62 |
| .json | 42 |
| .md | 31 |
| .env | 13 |
| .js | 13 |
| .example | 6 |
| .mjs | 6 |
| .yml | 6 |
| .puml | 5 |
| .csv | 4 |
| .toml | 4 |
| .xml | 4 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
