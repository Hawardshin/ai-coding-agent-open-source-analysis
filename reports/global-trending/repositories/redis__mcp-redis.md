# redis/mcp-redis

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/redis/mcp-redis |
| local path | sources/redis__mcp-redis |
| HEAD | e3ed320 |
| stars/forks | 535 / 99 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T11:23:25Z |
| trendScore / priorityScore | 146 / 370 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Database / data infrastructure | 500 | README.md, GEMINI.md, Dockerfile |
| MCP / agent interoperability | 311 | README.md, GEMINI.md, Dockerfile |
| Security / supply chain | 58 | README.md, pyproject.toml, .github/workflows/ci.yml |
| Developer tools / DX | 48 | README.md, pyproject.toml, examples/redis_assistant.py |
| RAG / retrieval / knowledge | 37 | README.md, GEMINI.md, tests/tools/test_redis_query_engine.py |
| AI agent / orchestration | 28 | README.md, GEMINI.md, examples/redis_assistant.py |
| Cloud native / infrastructure | 25 | README.md, .github/workflows/ci.yml, .github/dependabot.yml |
| Coding agent / software automation | 25 | tests/test_integration.py, src/tools/misc.py |
| Data / ML platform | 1 | src/common/entraid_auth.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, rag, security, securityTooling, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 59 |
| manifests | 4 |
| docs | 2 |
| tests | 21 |
| ci/ops | 4 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Redis MCP Server | Redis MCP Server / Overview / Table of Contents / Features / Tools / Installation / From PyPI (recommended) / Testing the PyPI package / From GitHub / Run with Redis URI | Redis MCP Server <! mcp name io.github.redis/mcp redis ! Integration https //github.com/redis/mcp redis/actions/workflows/ci.yml/badge.svg?branch=main https //github.com/redis/mcp redis/actions/workflows/ci.yml ! PyPI Version https //img.shields.io/pypi/v/redis mcp server https //pypi.org/project/redis mcp server/ ! Python Version https //img.shields.io/badge/python 3.14%2B blue&logo=redis https //www.python.org/downloads/ ! MIT licensed https //img.shields.io/badge/license MIT blue.svg ./LICENSE.txt ! Verified on MseeP https //mseep.ai/badge.svg https //mseep.ai/app/70102150 efe0 4705 9f7d 87980109a279 ! Docker Image Version https //img.shields.io/docker/v/mcp/redis?sort=semver&logo=docker& |


## Key Files

### Manifests

- README.md
- GEMINI.md
- Dockerfile
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- GEMINI.md


### Agent Instruction Files

- GEMINI.md


## Top Directories

| dir | count |
| --- | --- |
| src | 22 |
| tests | 21 |
| .github | 4 |
| .dockerignore | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| Dockerfile | 1 |
| examples | 1 |
| fly.toml | 1 |
| gemini-extension.json | 1 |
| GEMINI.md | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 44 |
| .yml | 4 |
| [no-ext] | 4 |
| .json | 2 |
| .md | 2 |
| .toml | 2 |
| .example | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
