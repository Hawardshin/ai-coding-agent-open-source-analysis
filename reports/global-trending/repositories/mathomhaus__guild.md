# mathomhaus/guild

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/mathomhaus/guild |
| local path | sources/mathomhaus__guild |
| HEAD | 548877b |
| stars/forks | 312 / 47 |
| language | Go |
| license |  |
| pushedAt | 2026-06-15T17:47:28Z |
| trendScore / priorityScore | 152 / 421 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 488 | examples/README.md, examples/01-hello-guild/README.md, examples/02-quest-decomposition/README.md |
| AI agent / orchestration | 313 | examples/README.md, examples/01-hello-guild/README.md, examples/02-quest-decomposition/expected/README.md |
| Developer tools / DX | 287 | examples/README.md, examples/02-quest-decomposition/README.md, docs/generated/README.md |
| Coding agent / software automation | 131 | examples/01-hello-guild/README.md, examples/02-quest-decomposition/README.md, examples/04-session-handoff/README.md |
| Database / data infrastructure | 82 | examples/01-hello-guild/expected/README.md, examples/02-quest-decomposition/expected/README.md, AGENTS.md |
| RAG / retrieval / knowledge | 67 | examples/03-cross-project/README.md, examples/04-session-handoff/README.md, examples/05-lore-only/README.md |
| Data / ML platform | 34 | recipe/README.md, cmd/sqlcheck/README.md, internal/lore/embed/assets/README.md |
| Security / supply chain | 33 | internal/mcp/doc_coverage_test.go, internal/mcp/telemetry_test.go, SECURITY.md |
| Observability / evaluation | 14 | examples/02-quest-decomposition/expected/README.md, examples/02-quest-decomposition/PROMPT.md, examples/02-quest-decomposition/expected/quest-list-final.txt |
| Cloud native / infrastructure | 13 | README.md, internal/mcp/embed_autobackfill_test.go, internal/mcp/server_test.go |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, llmFramework, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Python, Go |
| capabilities | LLM/app framework, Vector/search store, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 441 |
| manifests | 21 |
| docs | 32 |
| tests | 144 |
| ci/ops | 7 |
| spec artifacts | 7 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | The Agent Guild | The Agent Guild / What Is It / 📜 Mythos / Quick Start / 1. Install / 2. Initialize your project / 3. Start a new session / ⚔️ A full session / Act 1 — arrival / Act 2 — adventure | The Agent Guild Shared context, memory, and task coordination across AI coding agents. ! CI https //github.com/mathomhaus/guild/actions/workflows/ci.yml/badge.svg https //github.com/mathomhaus/guild/actions/workflows/ci.yml ! Go 1.25 https //img.shields.io/badge/go 1.25 blue https //go.dev ! Apache 2.0 https //img.shields.io/badge/license Apache 2.0 green ./LICENSE What Is It guild is a single compiled Go binary containing a first class MCP server backed by embedded SQLite. State lives strictly on local host; nothing leaves your machine. Search blends keyword BM25 with vector similarity, fused via reciprocal rank fusion, so "how did we do X last time" surfaces both exact term and semantic ne |


## Key Files

### Manifests

- examples/README.md
- examples/01-hello-guild/expected/README.md
- examples/01-hello-guild/README.md
- examples/02-quest-decomposition/expected/README.md
- examples/02-quest-decomposition/README.md
- examples/03-cross-project/expected/README.md
- examples/03-cross-project/README.md
- examples/04-session-handoff/expected/README.md
- examples/04-session-handoff/README.md
- examples/05-lore-only/expected/README.md
- examples/05-lore-only/README.md
- docs/generated/README.md
- AGENTS.md
- README.md
- recipe/README.md
- cmd/sqlcheck/README.md
- internal/lore/embed/assets/README.md
- go.mod
- Makefile
- recipe/requirements.txt


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- examples/01-hello-guild/PROMPT.md
- examples/02-quest-decomposition/PROMPT.md
- examples/03-cross-project/PROMPT.md
- examples/04-session-handoff/PROMPT.md
- examples/05-lore-only/PROMPT.md
- recipe/requirements.txt


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| internal | 344 |
| examples | 40 |
| .github | 14 |
| cmd | 12 |
| tests | 7 |
| docs | 5 |
| recipe | 3 |
| .gitignore | 1 |
| .golangci.yml | 1 |
| .goreleaser.yml | 1 |
| .model-version | 1 |
| AGENTS.md | 1 |
| CHANGELOG.md | 1 |
| CODE_OF_CONDUCT.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 349 |
| .md | 32 |
| .txt | 15 |
| .yml | 15 |
| .sh | 11 |
| .sql | 8 |
| [no-ext] | 5 |
| .json | 1 |
| .mod | 1 |
| .ps1 | 1 |
| .py | 1 |
| .sum | 1 |
| .tmpl | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
