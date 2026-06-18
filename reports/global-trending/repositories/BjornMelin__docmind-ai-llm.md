# BjornMelin/docmind-ai-llm

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/BjornMelin/docmind-ai-llm |
| local path | sources/BjornMelin__docmind-ai-llm |
| HEAD | 9e6cbec |
| stars/forks | 132 / 24 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T09:57:16Z |
| trendScore / priorityScore | 140 / 474 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | docs/developers/prompts/README.md, docs/developers/adrs/README.md, docs/developers/README.md |
| RAG / retrieval / knowledge | 500 | docs/developers/prompts/README.md, docs/developers/adrs/README.md, docs/developers/README.md |
| Observability / evaluation | 346 | docs/developers/adrs/README.md, data/eval/README.md, AGENTS.md |
| Local LLM / inference | 323 | docs/developers/adrs/README.md, docs/developers/README.md, AGENTS.md |
| Security / supply chain | 281 | docs/developers/prompts/README.md, docs/developers/adrs/README.md, docs/developers/README.md |
| Database / data infrastructure | 254 | docs/developers/prompts/README.md, docs/developers/adrs/README.md, AGENTS.md |
| Cloud native / infrastructure | 187 | docs/developers/prompts/README.md, docs/developers/adrs/README.md, AGENTS.md |
| Data / ML platform | 170 | docs/developers/adrs/README.md, docs/developers/README.md, data/eval/README.md |
| MCP / agent interoperability | 79 | docs/developers/prompts/README.md, docs/developers/adrs/ADR-039-offline-evaluation-clis.md, docs/developers/prompts/implemented/prompt-022-settings-ui-hardening.md |
| Developer tools / DX | 70 | docs/developers/prompts/README.md, docs/developers/adrs/README.md, README.md |
| Coding agent / software automation | 60 | docs/developers/prompts/README.md, docs/specs/spec-003-embeddings.md, pyproject.toml |
| Frontend / app framework | 3 | docker-compose.yml, Dockerfile |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 691 |
| manifests | 14 |
| docs | 184 |
| tests | 385 |
| ci/ops | 7 |
| spec artifacts | 50 |
| agent instruction files | 31 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | 🧠 DocMind AI: Local LLM for AI-Powered Document Analysis | 🧠 DocMind AI: Local LLM for AI-Powered Document Analysis / ✨ Features of DocMind AI / Table of Contents / Getting Started with DocMind AI / Prerequisites / Installation / Running the App / Usage / Configure LLM Runtime (Settings page) / Ingest Documents and Build Snapshots (Documents page) | 🧠 DocMind AI Local LLM for AI Powered Document Analysis ! Python https //img.shields.io/badge/Python 3776AB?style=for the badge&logo=python&logoColor=white ! Streamlit https //img.shields.io/badge/Streamlit FF4B4B?style=for the badge&logo=streamlit&logoColor=white ! LlamaIndex https //img.shields.io/badge/LlamaIndex 7C3AED?style=for the badge ! LangGraph https //img.shields.io/badge/🔗 LangGraph 4A90E2?style=for the badge ! Qdrant https //img.shields.io/badge/Qdrant DC244C?style=for the badge&logo=qdrant&logoColor=white ! spaCy https //img.shields.io/badge/spaCy 09A3D5?style=for the badge&logo=spacy&logoColor=white ! Docker https //img.shields.io/badge/Docker 2496ED?style=for the badge&logo |


## Key Files

### Manifests

- docs/developers/prompts/README.md
- docs/developers/adrs/README.md
- docs/developers/README.md
- data/eval/README.md
- AGENTS.md
- tests/README.md
- README.md
- scripts/README.md
- tests/integration/README.md
- docker-compose.yml
- Dockerfile
- pyproject.toml
- docs/specs/requirements.md
- docker-compose.prod.yml


### Spec / Docs / Prompt Artifacts

- docs/developers/prompts/README.md
- AGENTS.md
- docs/specs/spec-001-llm-runtime.md
- docs/specs/spec-003-embeddings.md
- docs/specs/spec-004-hybrid-retrieval.md
- docs/specs/spec-006-graphrag.md
- docs/specs/spec-007-multi-agent-supervisor.md
- docs/specs/spec-010-evaluation.md
- docs/specs/spec-011-security-privacy.md
- docs/specs/spec-020-prompt-template-system.md
- docs/specs/spec-040-agent-deadline-propagation-and-router-injection.md
- docs/specs/spec-041-chat-persistence-agentic-memory-langgraph-sqlite.md
- docs/developers/prompts/implemented/prompt-022-settings-ui-hardening.md
- docs/developers/prompts/implemented/prompt-023-containerization-hardening.md
- docs/developers/prompts/implemented/prompt-025-keyword-tool-sparse-only.md
- docs/developers/prompts/implemented/prompt-026-ingestion-api-facade.md
- docs/developers/prompts/implemented/prompt-027-remove-legacy-main-entrypoint.md
- docs/developers/prompts/implemented/prompt-028-safe-logging-no-pii-redactor.md
- docs/developers/prompts/implemented/prompt-029-docs-consistency-pass.md
- docs/developers/prompts/implemented/prompt-030-multimodal-helper-cleanup.md


### Agent Instruction Files

- docs/developers/prompts/README.md
- AGENTS.md
- docs/developers/prompts/implemented/prompt-022-settings-ui-hardening.md
- docs/developers/prompts/implemented/prompt-023-containerization-hardening.md
- docs/developers/prompts/implemented/prompt-025-keyword-tool-sparse-only.md
- docs/developers/prompts/implemented/prompt-026-ingestion-api-facade.md
- docs/developers/prompts/implemented/prompt-027-remove-legacy-main-entrypoint.md
- docs/developers/prompts/implemented/prompt-028-safe-logging-no-pii-redactor.md
- docs/developers/prompts/implemented/prompt-029-docs-consistency-pass.md
- docs/developers/prompts/implemented/prompt-030-multimodal-helper-cleanup.md
- docs/developers/prompts/implemented/prompt-031-config-discipline-env-bridges.md
- docs/developers/prompts/implemented/prompt-032-documents-snapshot-service-boundary.md
- docs/developers/prompts/implemented/prompt-033-background-ingestion-jobs.md
- docs/developers/prompts/implemented/prompt-034-analytics-page-hardening.md
- docs/developers/prompts/implemented/prompt-036-document-analysis-modes.md


## Top Directories

| dir | count |
| --- | --- |
| tests | 341 |
| docs | 171 |
| src | 123 |
| scripts | 17 |
| templates | 6 |
| .github | 5 |
| schemas | 3 |
| tools | 3 |
| .coderabbit.yaml | 1 |
| .dockerignore | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| .python-version | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 482 |
| .md | 179 |
| .json | 9 |
| .yml | 7 |
| .yaml | 5 |
| [no-ext] | 5 |
| .toml | 2 |
| .example | 1 |
| .sh | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
