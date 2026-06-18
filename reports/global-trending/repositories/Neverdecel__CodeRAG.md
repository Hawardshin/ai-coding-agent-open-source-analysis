# Neverdecel/CodeRAG

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Neverdecel/CodeRAG |
| local path | sources/Neverdecel__CodeRAG |
| HEAD | cd744b6 |
| stars/forks | 214 / 35 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T20:09:13Z |
| trendScore / priorityScore | 148 / 418 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 432 | AGENTS.md, deploy/README.md, README.md |
| Cloud native / infrastructure | 205 | deploy/README.md, README.md, Dockerfile |
| Observability / evaluation | 141 | README.md, docs/eval.md, docs/research/code-retrieval-strategy.md |
| MCP / agent interoperability | 104 | AGENTS.md, README.md, pyproject.toml |
| Coding agent / software automation | 99 | deploy/README.md, README.md, Dockerfile |
| Security / supply chain | 90 | AGENTS.md, deploy/README.md, README.md |
| Data / ML platform | 86 | README.md, docs/eval.md, docs/research/code-retrieval-strategy.md |
| AI agent / orchestration | 39 | AGENTS.md, README.md, docs/eval.md |
| Developer tools / DX | 34 | AGENTS.md, README.md, pyproject.toml |
| Local LLM / inference | 30 | deploy/README.md, README.md, Dockerfile |
| Database / data infrastructure | 27 | AGENTS.md, deploy/README.md, README.md |
| Frontend / app framework | 5 | coderag/chunking/languages.py, coderag/surfaces/static/app.css |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 121 |
| manifests | 7 |
| docs | 10 |
| tests | 16 |
| ci/ops | 33 |
| spec artifacts | 3 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | CodeRAG | CodeRAG / ⚡ Find the right code in one call — not a grep loop / ✨ Highlights / 🚀 Quick start / optional extras: / 🧑‍💻 The surfaces / CLI / Python library / HTTP / REST  (`coderag serve`) / Web UI  (`coderag ui`) | <p align="center" <img src="assets/logo/coderag logo.png" alt="CodeRAG logo" width="160" / </p CodeRAG A standalone, local first semantic code search engine for large and custom codebases. ! Python 3.11+ https //img.shields.io/badge/python 3.11+ blue.svg https //www.python.org/downloads/ ! License https //img.shields.io/badge/License Apache%202.0 blue.svg https //opensource.org/licenses/Apache 2.0 ! CI https //github.com/Neverdecel/CodeRAG/actions/workflows/ci tests.yml/badge.svg?branch=master https //github.com/Neverdecel/CodeRAG/actions/workflows/ci tests.yml ! codecov https //codecov.io/gh/Neverdecel/CodeRAG/branch/master/graph/badge.svg https //codecov.io/gh/Neverdecel/CodeRAG ! Docker h |


## Key Files

### Manifests

- AGENTS.md
- deploy/README.md
- README.md
- .clusterfuzzlite/Dockerfile
- Dockerfile
- pyproject.toml
- requirements.txt


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- docs/eval.md
- requirements.txt


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| coderag | 50 |
| deploy | 23 |
| tests | 15 |
| .github | 12 |
| docs | 3 |
| scripts | 3 |
| .clusterfuzzlite | 2 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| AGENTS.md | 1 |
| DEVELOPMENT.md | 1 |
| Dockerfile | 1 |
| example.env | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 55 |
| .yaml | 19 |
| .md | 10 |
| .yml | 10 |
| .html | 8 |
| [no-ext] | 6 |
| .jsonl | 3 |
| .json | 2 |
| .txt | 2 |
| .css | 1 |
| .env | 1 |
| .js | 1 |
| .sh | 1 |
| .toml | 1 |
| .tpl | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
