# Ontos-AI/knowhere

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Ontos-AI/knowhere |
| local path | sources/Ontos-AI__knowhere |
| HEAD | 10e1a1d |
| stars/forks | 1502 / 160 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T18:17:02Z |
| trendScore / priorityScore | 155 / 456 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | docs/adr/README.md, AGENTS.md, README.md |
| RAG / retrieval / knowledge | 500 | AGENTS.md, apps/worker/tests/contract/README.md, README.md |
| Observability / evaluation | 166 | README.md, apps/worker/requirements.txt, apps/api/app/data/demo_documents/research-ai-agents-overview/chunks.json |
| Database / data infrastructure | 158 | AGENTS.md, apps/api/tests/migrations/README.md, apps/api/tests/README.md |
| Data / ML platform | 140 | AGENTS.md, README.md, apps/api/app/data/demo_documents/research-ai-agents-overview/chunks.json |
| Security / supply chain | 51 | AGENTS.md, README.md, apps/api/app/data/demo_documents/research-rag-realized/doc_nav.json |
| Developer tools / DX | 39 | AGENTS.md, apps/worker/tests/contract/README.md, README.md |
| MCP / agent interoperability | 39 | apps/api/pyproject.toml, apps/api/app/data/demo_documents/research-ai-agents-overview/chunks.json, apps/api/app/data/demo_documents/research-ai-agents-overview/doc_nav.json |
| Frontend / app framework | 28 | AGENTS.md, apps/api/app/data/demo_documents/research-ai-agents-overview/chunks.json, apps/api/app/data/demo_documents/research-ai-agents-overview/doc_nav.json |
| Cloud native / infrastructure | 27 | AGENTS.md, deploy/README.md, README.md |
| Local LLM / inference | 14 | apps/api/app/data/demo_documents/research-rag-realized/doc_nav.json, apps/api/app/data/demo_documents/research-rag-realized/full.md |
| Coding agent / software automation | 4 | AGENTS.md, README.md, apps/api/app/data/demo_documents/research-rag-survey/doc_nav.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1434 |
| manifests | 17 |
| docs | 46 |
| tests | 62 |
| ci/ops | 7 |
| spec artifacts | 6 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Overview / 📢 News / How it Works / Step 1: Parse and Build Memory / Step 2: Agentic Retrieval / FAQ / Performance Benchmark / Key Advantages / Ecosystem / Features | <img width="1000" height="233" alt="20260506 102713" src="https //github.com/user attachments/assets/896e64d2 e50e 4158 b71c bc69e11c7c65" / <h1 align="center" Prepare unstructured data for AI Agents</h1 <p align="center" <a href="https //www.python.org/downloads/" <img alt="Python Version" src="https //img.shields.io/badge/Python %3E%3D%203.11 3776AB.svg?style=for the badge&logo=python&logoColor=white&labelColor=000000" </a <a href="https //github.com/Ontos AI/knowhere/stargazers" <img alt="GitHub stars" src="https //img.shields.io/github/stars/ontos ai/knowhere?style=for the badge&logo=github&labelColor=000000" </a <a href="https //github.com/Ontos AI/knowhere/actions" <img alt="Build Stat |


## Key Files

### Manifests

- docs/adr/README.md
- AGENTS.md
- apps/api/tests/contract/README.md
- apps/api/tests/migrations/README.md
- apps/api/tests/README.md
- apps/api/tests/support/README.md
- apps/worker/tests/contract/README.md
- deploy/README.md
- README.md
- deploy/local-dev/README.md
- Makefile
- pyproject.toml
- apps/api/pyproject.toml
- apps/worker/pyproject.toml
- apps/worker/requirements.txt
- packages/shared-python/pyproject.toml
- deploy/local-dev/docker-compose.dev.yml


### Spec / Docs / Prompt Artifacts

- docs/adr/README.md
- AGENTS.md
- apps/worker/requirements.txt
- docs/adr/0003-keep-retrieval-workflow-policy-explicit.md
- docs/adr/0001-keep-routes-and-worker-tasks-as-adapters.md
- docs/adr/0002-use-typed-workflow-outcomes.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| apps | 1132 |
| packages | 265 |
| deploy | 10 |
| .github | 9 |
| docs | 4 |
| .dockerignore | 1 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| CITATION.cff | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTEXT.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| Makefile | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .html | 676 |
| .py | 576 |
| .json | 90 |
| .md | 46 |
| .yml | 9 |
| [no-ext] | 8 |
| .txt | 6 |
| .ini | 4 |
| .toml | 4 |
| .sh | 3 |
| .docx | 2 |
| .example | 2 |
| .xlsx | 2 |
| .api | 1 |
| .cff | 1 |
| .mako | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
