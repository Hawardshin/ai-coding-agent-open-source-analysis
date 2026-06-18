# mnemon-dev/mnemon

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/mnemon-dev/mnemon |
| local path | sources/mnemon-dev__mnemon |
| HEAD | 80e9cd7 |
| stars/forks | 351 / 52 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T13:53:30Z |
| trendScore / priorityScore | 158 / 456 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Coding agent / software automation | 431 | docs/harness/README.md, docs/zh/harness/README.md, docs/zh/README.md |
| AI agent / orchestration | 297 | docs/harness/README.md, docs/zh/harness/README.md, docs/zh/README.md |
| Database / data infrastructure | 168 | docs/zh/README.md, README.md, CLAUDE.md |
| RAG / retrieval / knowledge | 132 | docs/zh/README.md, README.md, CLAUDE.md |
| Local LLM / inference | 96 | docs/zh/README.md, README.md, CLAUDE.md |
| Cloud native / infrastructure | 91 | README.md, Dockerfile, Makefile |
| Observability / evaluation | 89 | docs/harness/README.md, docs/zh/harness/README.md, AGENTS.md |
| Security / supply chain | 89 | README.md, docs/DEPLOYMENT.md, docs/harness/capability-spec-v1.md |
| Developer tools / DX | 84 | docs/harness/README.md, docs/zh/harness/README.md, docs/zh/README.md |
| MCP / agent interoperability | 61 | docs/zh/README.md, README.md, docs/DESIGN.md |
| Data / ML platform | 40 | README.md, docs/DESIGN.md, docs/design/02-philosophy.md |
| Frontend / app framework | 10 | harness/internal/assets/loops/skill/README.md, docs/design/04-graph-model.md, docs/zh/design/04-graph-model.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 459 |
| manifests | 18 |
| docs | 79 |
| tests | 172 |
| ci/ops | 4 |
| spec artifacts | 4 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Mnemon | Mnemon / Why Mnemon? / Quick Start / Install / Claude Code / [Codex](https://github.com/openai/codex) / [OpenClaw](https://github.com/openclaw/openclaw) / [Pi](https://pi.dev) / [Hermes Agent](https://github.com/NousResearch/hermes-agent) / [NanoClaw](https://github.com/qwibitai/nanoclaw) | <p align="center" <img src="docs/logo/logo.svg" width="160" height="160" alt="Mnemon Logo" / </p Mnemon English 中文 docs/zh/README.md LLM supervised persistent memory for AI agents. ! Go 1.24+ https //img.shields.io/badge/Go 1.24%2B 00ADD8?logo=go&logoColor=white https //go.dev/ ! CI https //github.com/mnemon dev/mnemon/actions/workflows/ci.yml/badge.svg https //github.com/mnemon dev/mnemon/actions/workflows/ci.yml ! Go Report Card https //goreportcard.com/badge/github.com/mnemon dev/mnemon https //goreportcard.com/report/github.com/mnemon dev/mnemon ! License Apache 2.0 https //img.shields.io/badge/License Apache 2.0 blue.svg LICENSE LLM agents forget everything between sessions. Context com |


## Key Files

### Manifests

- docs/harness/README.md
- docs/logo/README.md
- docs/zh/harness/README.md
- docs/zh/README.md
- harness/internal/assets/loops/memory/README.md
- AGENTS.md
- harness/README.md
- README.md
- harness/internal/assets/hosts/README.md
- harness/internal/assets/loops/README.md
- harness/internal/assets/loops/skill/README.md
- CLAUDE.md
- docker-compose.yml
- Dockerfile
- go.mod
- Makefile
- internal/setup/assets/openclaw/plugin/package.json
- go.sum


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- docs/DESIGN.md
- docs/zh/DESIGN.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| harness | 279 |
| internal | 84 |
| docs | 44 |
| cmd | 24 |
| scripts | 6 |
| .github | 5 |
| .dockerignore | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| .goreleaser.yml | 1 |
| AGENTS.md | 1 |
| CHANGELOG.md | 1 |
| CLAUDE.md | 1 |
| CONTRIBUTING.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 317 |
| .md | 74 |
| .sh | 24 |
| .json | 22 |
| [no-ext] | 5 |
| .yml | 4 |
| .drawio | 3 |
| .py | 3 |
| .js | 2 |
| .example | 1 |
| .mod | 1 |
| .sum | 1 |
| .svg | 1 |
| .ts | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
