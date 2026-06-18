# kenn-io/agentsview

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/kenn-io/agentsview |
| local path | sources/kenn-io__agentsview |
| HEAD | 99a23c0 |
| stars/forks | 2796 / 241 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T22:31:45Z |
| trendScore / priorityScore | 168 / 464 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | AGENTS.md, README.md, scripts/qwenpaw-fixtures/README.md |
| Frontend / app framework | 432 | AGENTS.md, frontend/AGENTS.md, README.md |
| Database / data infrastructure | 427 | AGENTS.md, README.md, internal/duckdb/README.md |
| Coding agent / software automation | 195 | desktop/README.md, README.md, docs/duckdb-backend-plan.md |
| Cloud native / infrastructure | 105 | AGENTS.md, README.md, internal/duckdb/README.md |
| Security / supply chain | 61 | README.md, scripts/qwenpaw-fixtures/README.md, docs/desktop-release-setup.md |
| Developer tools / DX | 50 | AGENTS.md, frontend/AGENTS.md, README.md |
| Observability / evaluation | 9 | README.md, go.mod, Makefile |
| Data / ML platform | 6 | AGENTS.md, docs/desktop-release-setup.md, cmd/agentsview/stats_test.go |
| MCP / agent interoperability | 4 | AGENTS.md, frontend/src/lib/utils/toolDisplay.test.ts |
| RAG / retrieval / knowledge | 1 | internal/duckdb/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1047 |
| manifests | 18 |
| docs | 11 |
| tests | 370 |
| ci/ops | 11 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | agentsview | agentsview / Install / macOS / Linux / Windows / Quick Start / Remote / forwarded access / Browser opens http://127.0.0.1:18080 via `ssh -L 18080:127.0.0.1:8080 host` / Browser opens a forwarded hostname / Docker / Populate /data/sessions.duckdb from the mounted SQLite archive. | agentsview Browse, search, and track costs across all your AI coding agents. One binary, no accounts, everything local. <p align="center" <img src="https //agentsview.io/screenshots/dashboard.png" alt="Analytics dashboard" width="720" </p Install Or download the desktop app macOS / Windows from GitHub Releases https //github.com/kenn io/agentsview/releases or via homebrew brew install cask agentsview Or run the published Docker image Quick Start On first run, agentsview discovers sessions from every supported agent on your machine, syncs them into a local SQLite database, and serves a web UI at http //127.0.0.1 8080 . Use agentsview serve background when you want the dashboard to keep runnin |


## Key Files

### Manifests

- AGENTS.md
- frontend/AGENTS.md
- desktop/README.md
- README.md
- internal/duckdb/README.md
- scripts/qwenpaw-fixtures/README.md
- frontend/package.json
- frontend/tsconfig.json
- frontend/vite.config.ts
- desktop/package.json
- Dockerfile
- go.mod
- Makefile
- testdata/ssh/Dockerfile
- desktop/src-tauri/Cargo.toml
- docker-compose.test.yml
- docker-compose.prod.yaml
- go.sum


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- frontend/AGENTS.md


### Agent Instruction Files

- AGENTS.md
- frontend/AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| internal | 486 |
| frontend | 409 |
| cmd | 76 |
| desktop | 20 |
| scripts | 12 |
| .github | 11 |
| testdata | 6 |
| docs | 4 |
| .air.toml | 1 |
| .custom-gcl.yml | 1 |
| .dockerignore | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .golangci.nilaway.yml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 532 |
| .ts | 319 |
| .svelte | 81 |
| .jsonl | 20 |
| .json | 18 |
| .yml | 15 |
| .sh | 12 |
| .md | 11 |
| [no-ext] | 10 |
| .toml | 5 |
| .html | 3 |
| .py | 3 |
| .rs | 3 |
| .plist | 2 |
| .ps1 | 2 |
| .svg | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
