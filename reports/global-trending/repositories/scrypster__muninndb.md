# scrypster/muninndb

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/scrypster/muninndb |
| local path | sources/scrypster__muninndb |
| HEAD | b9c6119 |
| stars/forks | 301 / 71 |
| language | Go |
| license |  |
| pushedAt | 2026-06-12T12:28:42Z |
| trendScore / priorityScore | 135 / 427 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Database / data infrastructure | 344 | README.md, sdk/node/README.md, sdk/php/README.md |
| MCP / agent interoperability | 295 | README.md, docker-compose.yml, Dockerfile |
| RAG / retrieval / knowledge | 231 | README.md, sdk/python/README.md, docker-compose.yml |
| AI agent / orchestration | 100 | README.md, sdk/muninndb/README.md, sdk/php/README.md |
| Cloud native / infrastructure | 86 | README.md, contrib/cluster/README.md, docker-compose.yml |
| Observability / evaluation | 81 | internal/replication/README.md, sdk/php/README.md, docs/agent-prompting.md |
| Developer tools / DX | 75 | README.md, contrib/cluster/README.md, sdk/muninndb/README.md |
| Security / supply chain | 64 | README.md, sdk/php/README.md, contrib/cluster/docker-compose.yml |
| Data / ML platform | 51 | README.md, Dockerfile, docs/how-memory-works.md |
| Coding agent / software automation | 49 | README.md, docker-compose.yml, docs/agent-prompting.md |
| Local LLM / inference | 44 | README.md, docker-compose.yml, docs/feature-reference.md |
| Frontend / app framework | 12 | Dockerfile, docs/hierarchical-memory.md, Makefile |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go, Java/Kotlin, Swift, PHP |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 846 |
| manifests | 22 |
| docs | 47 |
| tests | 387 |
| ci/ops | 7 |
| spec artifacts | 7 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | MuninnDB | MuninnDB / Try It — 30 Seconds / 1. Install / 2. Start (first-run setup is automatic) / 1. Install / 2. Start (first-run setup is automatic) / 3. Store a memory / 4. Ask what is relevant RIGHT NOW / Connect Your AI Tools / What Just Happened | MuninnDB Memory that strengthens with use, fades when unused, and pushes to you when it matters — accessible over MCP, REST, gRPC, or SDK. Provisional patent filed Feb 26, 2026 on the core cognitive primitives engine native Ebbinghaus decay, Hebbian learning, Bayesian confidence, semantic triggers . This helps protect the project so we can keep it open and innovative for everyone. ! CI https //github.com/scrypster/muninndb/actions/workflows/ci.yml/badge.svg https //github.com/scrypster/muninndb/actions/workflows/ci.yml ! License https //img.shields.io/badge/license BSL%201.1 blue LICENSE ! Go https //img.shields.io/badge/go 1.25%2B 00ADD8 https //go.dev ! Status https //img.shields.io/badge/ |


## Key Files

### Manifests

- README.md
- contrib/cluster/README.md
- internal/replication/README.md
- sdk/muninndb/README.md
- sdk/node/README.md
- sdk/php/README.md
- sdk/python/README.md
- docker-compose.yml
- Dockerfile
- go.mod
- Makefile
- web/package.json
- contrib/cluster/docker-compose.yml
- sdk/go/muninn/go.mod
- sdk/kotlin/build.gradle.kts
- sdk/muninndb/pyproject.toml
- sdk/node/package.json
- sdk/node/tsconfig.json
- sdk/python/pyproject.toml
- sdk/python/requirements.txt


### Spec / Docs / Prompt Artifacts

- sdk/python/requirements.txt
- docs/architecture.md
- docs/adr/2026-03-04-association-durability.md
- docs/adr/2026-03-04-coactivation-count.md
- .claude/hookify.api-spec-drift.local.md
- .claude/hookify.sdk-types-drift.local.md
- internal/replication/DESIGN.md


### Agent Instruction Files

- .claude/hookify.api-spec-drift.local.md
- .claude/hookify.sdk-types-drift.local.md


## Top Directories

| dir | count |
| --- | --- |
| internal | 612 |
| sdk | 70 |
| cmd | 68 |
| docs | 31 |
| web | 29 |
| .github | 5 |
| contrib | 3 |
| proto | 3 |
| .claude | 2 |
| .gitignore | 1 |
| .goreleaser.yml | 1 |
| CHANGELOG.md | 1 |
| CLA.md | 1 |
| CONTRIBUTING.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 689 |
| .md | 47 |
| .ts | 20 |
| .py | 15 |
| [no-ext] | 12 |
| .js | 11 |
| .php | 8 |
| .yml | 7 |
| .json | 6 |
| .swift | 6 |
| .kt | 5 |
| .css | 4 |
| .kts | 2 |
| .mod | 2 |
| .sh | 2 |
| .toml | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
