# heymrun/heym

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/heymrun/heym |
| local path | sources/heymrun__heym |
| HEAD | f9c4e1a |
| stars/forks | 612 / 65 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T21:15:41Z |
| trendScore / priorityScore | 166 / 510 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | AGENTS.md, README.md, CLAUDE.md |
| Frontend / app framework | 500 | AGENTS.md, README.md, frontend/Dockerfile |
| MCP / agent interoperability | 408 | AGENTS.md, README.md, CLAUDE.md |
| Security / supply chain | 405 | AGENTS.md, README.md, frontend/vite.config.ts |
| Observability / evaluation | 214 | AGENTS.md, README.md, backend/pyproject.toml |
| Database / data infrastructure | 179 | AGENTS.md, README.md, backend/pyproject.toml |
| Cloud native / infrastructure | 171 | AGENTS.md, README.md, frontend/vite.config.ts |
| Developer tools / DX | 163 | AGENTS.md, README.md, backend/Dockerfile |
| RAG / retrieval / knowledge | 129 | AGENTS.md, README.md, docs/superpowers/specs/2026-04-09-agent-node-persistent-memory-design.md |
| Coding agent / software automation | 30 | AGENTS.md, README.md, docs/superpowers/specs/2026-04-12-expressioninput-parametric-evaluation-design.md |
| Data / ML platform | 14 | README.md, docs/superpowers/specs/2026-04-12-unified-expression-evaluator-design.md, docs/superpowers/plans/2026-04-12-unified-expression-evaluator.md |
| Local LLM / inference | 4 | frontend/src/docs/content/nodes/agent-node.md, frontend/src/docs/content/nodes/llm-node.md, frontend/src/docs/content/reference/integrations.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 782 |
| manifests | 11 |
| docs | 201 |
| tests | 144 |
| ci/ops | 6 |
| spec artifacts | 42 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Heym | Heym / AI-Native Workflow Automation Platform / What Is Heym? / No Enterprise Gatekeeping / Product Demos / Watch Heym Tutorials / Generate Workflows from Natural Language / Running Workflows / Create Skills for Agents / Call Workflows from Chat | <div align="center" <br/ <img src="./docs/readme assets/logo.svg" width="80" height="80" alt="Heym Logo"/ Heym AI Native Workflow Automation Platform <p align="center" <strong Build, visualize, and run intelligent AI workflows — without writing code.</strong <br/ Drag and drop canvas · LLM & Agent nodes · RAG pipelines · Multi agent orchestration · MCP support </p <p align="center" <a href="https //heym.run" heym.run</a </p <br/ ! License MIT https //img.shields.io/badge/License MIT green.svg?style=flat square LICENSE ! Commons Clause https //img.shields.io/badge/Condition Commons%20Clause orange.svg?style=flat square COMMONS CLAUSE.md ! Heym Version https //img.shields.io/badge/dynamic/json |


## Key Files

### Manifests

- AGENTS.md
- README.md
- CLAUDE.md
- frontend/Dockerfile
- frontend/package.json
- frontend/tsconfig.json
- frontend/vite.config.ts
- backend/Dockerfile
- backend/pyproject.toml
- docker-compose.yml
- frontend/tsconfig.node.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- docs/superpowers/specs/2026-04-07-agent-context-compression-design.md
- docs/superpowers/specs/2026-04-09-agent-node-persistent-memory-design.md
- docs/superpowers/specs/2026-04-12-expressioninput-parametric-evaluation-design.md
- docs/superpowers/specs/2026-04-12-unified-expression-evaluator-design.md
- docs/superpowers/specs/2026-05-05-multi-mcp-server-design.md
- docs/superpowers/specs/2026-05-06-mcp-call-node-design.md
- docs/superpowers/specs/2026-05-26-traces-llm-metrics-design.md
- docs/superpowers/specs/2026-04-06-folder-zip-export-import-design.md
- docs/superpowers/specs/2026-04-07-context-compression-comparison-tables-design.md
- docs/superpowers/specs/2026-04-08-running-executions-in-history-dialogs-design.md
- docs/superpowers/specs/2026-04-09-drive-node-design.md
- docs/superpowers/specs/2026-04-09-execute-node-do-not-wait-design.md
- docs/superpowers/specs/2026-04-09-json-escape-unescape-design.md
- docs/superpowers/specs/2026-04-09-skill-builder-design.md
- docs/superpowers/specs/2026-04-10-chat-with-docs-design.md
- docs/superpowers/specs/2026-04-11-sse-streaming-curl-dialog-design.md
- docs/superpowers/specs/2026-04-14-edit-history-preview-design.md
- docs/superpowers/specs/2026-04-15-google-sheets-node-design.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- .cursor/skills/heym-documentation/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| frontend | 362 |
| backend | 313 |
| docs | 83 |
| .github | 4 |
| docker | 2 |
| .cursor | 1 |
| .editorconfig | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| check.sh | 1 |
| CLAUDE.md | 1 |
| COMMONS-CLAUSE.md | 1 |
| deploy.sh | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 307 |
| .md | 184 |
| .vue | 140 |
| .ts | 88 |
| .webm | 17 |
| .svg | 9 |
| .sh | 7 |
| [no-ext] | 7 |
| .yml | 5 |
| .js | 4 |
| .json | 4 |
| .css | 1 |
| .development | 1 |
| .dockerfile | 1 |
| .example | 1 |
| .html | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
