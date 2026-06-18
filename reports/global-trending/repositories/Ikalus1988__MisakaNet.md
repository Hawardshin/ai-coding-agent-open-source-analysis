# Ikalus1988/MisakaNet

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Ikalus1988/MisakaNet |
| local path | sources/Ikalus1988__MisakaNet |
| HEAD | 4b60218 |
| stars/forks | 159 / 42 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T16:49:52Z |
| trendScore / priorityScore | 135 / 413 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 448 | AGENTS.md, archive/README.md, misakanet/README.md |
| AI agent / orchestration | 321 | AGENTS.md, archive/README.md, misakanet/README.md |
| Developer tools / DX | 122 | archive/README.md, README.md, docs/cli-reference.md |
| Data / ML platform | 115 | README.md, docs/LIMITATIONS.md, reference/swarm-memory-architecture-comparison.md |
| Cloud native / infrastructure | 88 | README.md, workers/README.md, docs/hardening-field-report.md |
| MCP / agent interoperability | 73 | AGENTS.md, README.md, CLAUDE.md |
| Security / supply chain | 46 | README.md, lessons/core/README.md, workers/email-register/README.md |
| Database / data infrastructure | 38 | README.md, docs/cli-reference.md, docs/LIMITATIONS.md |
| Local LLM / inference | 30 | tasks/lesson-rag-三通道-llm-容灾方案.json, archive/conversation-dumps/rag-kb-complete-docs.md, hub/storage/skill_index.json |
| Coding agent / software automation | 24 | README.md, docs/domains/claude.md, docs/agents/knowledge-structure.md |
| Observability / evaluation | 14 | README.md, AGENT_GUIDE.md, docs/journey/index.html |
| Frontend / app framework | 10 | tests/frontend.test.js, docs/hardening-field-report.md, docs/js/core.js |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 597 |
| manifests | 18 |
| docs | 319 |
| tests | 15 |
| ci/ops | 22 |
| spec artifacts | 9 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Swarm Knowledge Protocol (SKP) | Swarm Knowledge Protocol (SKP) / 🧱 Architecture & Ecosystem / Any third-party tool can reuse the core engine: / What is the Swarm Knowledge Protocol? / Why? / How is this different? / Quick Start / Commands at a glance / Register a node / Stats | Swarm Knowledge Protocol SKP MisakaNet is the flagship reference implementation of the Swarm Knowledge Protocol. <p align="center" <img src="promotional/og card.png" width="720" alt="MisakaNet — SKP Reference Implementation"/ </p <p align="center" <a href="https //github.com/Ikalus1988/MisakaNet/stargazers" <img src="https //img.shields.io/github/stars/Ikalus1988/MisakaNet?style=social" alt="Stars"/ </a <a href="https //img.shields.io/badge/nodes 35+ green" <img src="https //img.shields.io/badge/nodes 35+ green?label=Nodes" alt="Nodes"/ </a <a href="https //img.shields.io/badge/lessons 188+ blue" <img src="https //img.shields.io/badge/lessons 188+ blue?label=Lessons" alt="Lessons"/ </a <a hr |


## Key Files

### Manifests

- docs/openclaw-pr/README.md
- AGENTS.md
- archive/README.md
- meta/README.md
- misakanet/README.md
- README.md
- workers/README.md
- lessons/contrib/README.md
- lessons/core/README.md
- lessons/locales/README.md
- workers/email-register/README.md
- CLAUDE.md
- hub/requirements.txt
- Makefile
- package.json
- pyproject.toml
- requirements.txt
- web/package.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- docs/domains/claude.md
- hub/requirements.txt
- requirements.txt
- docs/adr/pre-commit-dco-independent.md
- ARCHITECTURE.md
- ROADMAP.md
- archive/wiki/Architecture.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- docs/domains/claude.md


## Top Directories

| dir | count |
| --- | --- |
| lessons | 195 |
| tasks | 99 |
| .github | 39 |
| archive | 35 |
| misakanet | 33 |
| .nodes | 30 |
| docs | 28 |
| hub | 27 |
| scripts | 27 |
| tests | 15 |
| meta | 13 |
| reference | 6 |
| workers | 6 |
| bench_results | 4 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 311 |
| .json | 120 |
| .py | 90 |
| .yml | 36 |
| [no-ext] | 11 |
| .js | 6 |
| .sh | 4 |
| .svg | 3 |
| .txt | 3 |
| .example | 2 |
| .html | 2 |
| .jsonc | 2 |
| .yaml | 2 |
| .jsonl | 1 |
| .mjs | 1 |
| .tape | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
