# apocas/restai

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/apocas/restai |
| local path | sources/apocas__restai |
| HEAD | 2bb9f23 |
| stars/forks | 510 / 103 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T18:52:44Z |
| trendScore / priorityScore | 162 / 454 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / app framework | 216 | frontend/README.md, README.md, CLAUDE.md |
| Database / data infrastructure | 166 | README.md, integrations/wordpress/README.md, CLAUDE.md |
| RAG / retrieval / knowledge | 155 | examples/README.md, examples/php/README.md, examples/python/README.md |
| Cloud native / infrastructure | 139 | examples/README.md, README.md, CLAUDE.md |
| MCP / agent interoperability | 125 | README.md, CLAUDE.md, examples/python/agent_chat_streaming.py |
| AI agent / orchestration | 108 | examples/README.md, examples/python/README.md, README.md |
| Security / supply chain | 84 | README.md, integrations/android/README.md, CLAUDE.md |
| Developer tools / DX | 57 | examples/README.md, examples/python/README.md, README.md |
| Observability / evaluation | 53 | README.md, CLAUDE.md, pyproject.toml |
| Local LLM / inference | 37 | README.md, integrations/wordpress/restai/readme.txt, docker-compose.yml |
| Coding agent / software automation | 28 | README.md, CLAUDE.md, docs/index.html |
| Data / ML platform | 22 | README.md, CLAUDE.md, tests/test_evals.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin, PHP |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 795 |
| manifests | 19 |
| docs | 25 |
| tests | 87 |
| ci/ops | 7 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | → http://localhost:9000/admin (admin / admin) | Live Demo / Quick Start / Install from PyPI / Run from source (development) / Docker / → http://localhost:9000/admin (admin / admin) / Updating / Why RESTai? / Features / Dashboard & Analytics | <! markdownlint disable MD033 <h1 align="center" <img src="https //github.com/apocas/restai/blob/master/readme/assets/restai logo.png" alt="RESTai Logo" width="120"/ <br/ RESTai </h1 <p align="center" <strong AIaaS AI as a Service — Create AI projects and consume them via a simple REST API.</strong </p <p align="center" <a href="https //github.com/apocas/restai/actions/workflows/tests.yml" <img src="https //github.com/apocas/restai/actions/workflows/tests.yml/badge.svg" alt="Tests"/ </a <img src="https //img.shields.io/badge/python 3.11+ blue.svg" alt="Python 3.11+"/ <a href="https //github.com/apocas/restai/blob/master/LICENSE" <img src="https //img.shields.io/badge/license Apache%202.0 gre |


## Key Files

### Manifests

- examples/README.md
- examples/php/README.md
- examples/python/README.md
- frontend/README.md
- README.md
- integrations/android/README.md
- integrations/wordpress/README.md
- CLAUDE.md
- examples/python/requirements.txt
- frontend/package.json
- docker-compose.yml
- Dockerfile
- integrations/widget_test/package.json
- Makefile
- pyproject.toml
- docker/app-runtime/Dockerfile
- integrations/android/app/build.gradle.kts
- integrations/android/build.gradle.kts
- integrations/wordpress/docker-compose.yml


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- examples/python/requirements.txt


### Agent Instruction Files

- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| restai | 235 |
| frontend | 234 |
| tests | 87 |
| integrations | 73 |
| migrations | 60 |
| docs | 16 |
| examples | 16 |
| chart | 14 |
| crons | 13 |
| worker_envs | 9 |
| userland | 7 |
| .github | 3 |
| .vscode | 2 |
| docker | 2 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 410 |
| .jsx | 178 |
| .js | 49 |
| .php | 25 |
| .xml | 20 |
| .json | 19 |
| [no-ext] | 18 |
| .sh | 12 |
| .yaml | 11 |
| .md | 9 |
| .html | 7 |
| .kt | 7 |
| .txt | 6 |
| .yml | 5 |
| .properties | 4 |
| .css | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
