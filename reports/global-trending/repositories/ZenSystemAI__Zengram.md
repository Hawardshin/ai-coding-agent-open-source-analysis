# ZenSystemAI/Zengram

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/ZenSystemAI/Zengram |
| local path | sources/ZenSystemAI__Zengram |
| HEAD | bda6179 |
| stars/forks | 48 / 7 |
| language | JavaScript |
| license |  |
| pushedAt | 2026-06-18T00:26:11Z |
| trendScore / priorityScore | 139 / 393 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 259 | mcp-server/README.md, README.md, mcp-server/package.json |
| Database / data infrastructure | 194 | mcp-server/README.md, README.md, examples/python-client.py |
| AI agent / orchestration | 191 | mcp-server/README.md, README.md, adapters/claude-code/README.md |
| MCP / agent interoperability | 123 | mcp-server/README.md, README.md, adapters/claude-code/README.md |
| Cloud native / infrastructure | 108 | mcp-server/README.md, README.md, docker-compose.yml |
| Observability / evaluation | 54 | README.md, docs/benchmarks.md, docs/eval-harness.md |
| Security / supply chain | 50 | README.md, mcp-server/package.json, api/package.json |
| Local LLM / inference | 33 | docs/eval-harness.md, docs/architecture.md, docs/configuration.md |
| Coding agent / software automation | 27 | mcp-server/README.md, README.md, adapters/claude-code/README.md |
| Frontend / app framework | 23 | docs/mcp-tools.md, docs/api-reference.md, docs/data-model.md |
| Developer tools / DX | 22 | mcp-server/README.md, README.md, mcp-server/package.json |
| Data / ML platform | 18 | docs/benchmarks.md, docs/eval-harness.md, examples/curl-demo.sh |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 97 |
| manifests | 8 |
| docs | 19 |
| tests | 14 |
| ci/ops | 5 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Edit .env — set BRAIN_API_KEY and your embedding provider key | The Problem / How It Works / Typed Memory / Unified Storage / Multi-Path Search / Built for Multi-Agent / Benchmarks / How It Compares / Quick Start / Edit .env — set BRAIN_API_KEY and your embedding provider key | <p align="center" <img src=".github/logo.svg" alt="ZenSystem" width="120" / <h1 align="center" Zengram</h1 <p align="center" <strong Shared memory for multi agent AI systems.</strong </p <p align="center" <a href=" quick start" Quick Start</a &bull; <a href=" how it works" How It Works</a &bull; <a href=" benchmarks" Benchmarks</a &bull; <a href=" adapters" Adapters</a &bull; <a href="docs/api reference.md" API Docs</a &bull; <a href="docs/configuration.md" Config</a </p <p align="center" <a href="https //github.com/ZenSystemAI/Zengram/actions/workflows/ci.yml" <img alt="CI" src="https //github.com/ZenSystemAI/Zengram/actions/workflows/ci.yml/badge.svg" / </a <a href="https //www.npmjs.com/p |


## Key Files

### Manifests

- mcp-server/README.md
- README.md
- adapters/claude-code/README.md
- mcp-server/package.json
- api/Dockerfile
- api/package.json
- docker-compose.yml
- docker-compose.production.yml


### Spec / Docs / Prompt Artifacts

- docs/architecture.md


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| api | 63 |
| docs | 8 |
| .github | 7 |
| mcp-server | 5 |
| adapters | 4 |
| examples | 2 |
| .env.example | 1 |
| .gitignore | 1 |
| CHANGELOG.md | 1 |
| CONTRIBUTING.md | 1 |
| docker-compose.production.yml | 1 |
| docker-compose.yml | 1 |
| LICENSE | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .js | 59 |
| .md | 19 |
| .json | 6 |
| .yml | 4 |
| [no-ext] | 3 |
| .sh | 2 |
| .svg | 2 |
| .example | 1 |
| .py | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
