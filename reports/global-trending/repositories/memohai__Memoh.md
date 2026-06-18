# memohai/Memoh

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/memohai/Memoh |
| local path | sources/memohai__Memoh |
| HEAD | ed28f16 |
| stars/forks | 1910 / 181 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T14:20:38Z |
| trendScore / priorityScore | 139 / 464 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 500 | AGENTS.md, apps/desktop/AGENTS.md, apps/web/AGENTS.md |
| Frontend / app framework | 348 | AGENTS.md, apps/desktop/AGENTS.md, apps/web/AGENTS.md |
| AI agent / orchestration | 340 | AGENTS.md, apps/desktop/AGENTS.md, apps/web/AGENTS.md |
| MCP / agent interoperability | 314 | AGENTS.md, apps/desktop/AGENTS.md, apps/web/AGENTS.md |
| Cloud native / infrastructure | 266 | AGENTS.md, apps/desktop/AGENTS.md, apps/web/AGENTS.md |
| Coding agent / software automation | 170 | .agents/skills/humanizer-zh/README.md, .agents/skills/humanizer/README.md, AGENTS.md |
| Database / data infrastructure | 130 | AGENTS.md, apps/desktop/AGENTS.md, internal/db/sqlite/sqlc/README.md |
| Security / supply chain | 89 | AGENTS.md, apps/desktop/AGENTS.md, apps/web/AGENTS.md |
| Observability / evaluation | 22 | apps/desktop/AGENTS.md, go.mod, internal/agent/prompts/mode_heartbeat.md |
| Data / ML platform | 10 | .agents/skills/humanizer/README.md, AGENTS.md, apps/desktop/AGENTS.md |
| RAG / retrieval / knowledge | 7 | AGENTS.md, internal/memory/memllm/prompts/memory_extract.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2592 |
| manifests | 40 |
| docs | 49 |
| tests | 379 |
| ci/ops | 29 |
| spec artifacts | 25 |
| agent instruction files | 20 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Edit config.toml | What is Memoh? / Quick Start / Desktop / Deploy to Server / Edit config.toml / Why Memoh? / Features / Core / Agent Capabilities / Memory | <div align="right" <span <a href="./README.md" English</a <span </span <a href="./README CN.md" 简体中文</a </span </span <a href="./README JA.md" 日本語</a </span </div <div align="center" <img src="./assets/logo.png" alt="Memoh" height="80" <h1 Memoh</h1 <p The open source multi agent platform.<br Every agent gets its own computer, desktop, network, and long term memory.</p <div align="center" <img src="https //img.shields.io/github/package json/v/memohai/Memoh" alt="Version" / <img src="https //img.shields.io/github/stars/memohai/Memoh?style=social" alt="Stars" / <img src="https //img.shields.io/github/forks/memohai/Memoh?style=social" alt="Forks" / <a href="https //deepwiki.com/memohai/Memoh" < |


## Key Files

### Manifests

- .agents/skills/humanizer-zh/README.md
- .agents/skills/humanizer/README.md
- AGENTS.md
- apps/desktop/AGENTS.md
- apps/web/AGENTS.md
- cmd/bridge/template/AGENTS.md
- internal/workspace/templates/AGENTS.md
- packages/ui/AGENTS.md
- README.md
- apps/desktop/README.md
- apps/web/README.md
- apps/web/src/layout/README.md
- internal/db/sqlite/sqlc/README.md
- packages/config/README.md
- packages/sdk/README.md
- packages/ui/README.md
- crates/a11y-cli/Cargo.toml
- internal/memory/sparse/service/requirements.txt
- Cargo.toml
- devenv/docker-compose.yml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- apps/desktop/AGENTS.md
- apps/web/AGENTS.md
- cmd/bridge/template/AGENTS.md
- internal/workspace/templates/AGENTS.md
- packages/ui/AGENTS.md
- internal/memory/sparse/service/requirements.txt
- internal/agent/prompts/_identities.md
- internal/agent/prompts/_memory.md
- internal/agent/prompts/heartbeat.md
- internal/agent/prompts/mode_background_delivery.md
- internal/agent/prompts/mode_chat.md
- internal/agent/prompts/mode_discuss.md
- internal/agent/prompts/mode_heartbeat.md
- internal/agent/prompts/mode_schedule.md
- internal/agent/prompts/mode_subagent.md
- internal/agent/prompts/schedule.md
- internal/agent/prompts/system_common.md
- internal/memory/memllm/prompts/memory_extract.md
- internal/memory/memllm/prompts/memory_update.md


### Agent Instruction Files

- AGENTS.md
- apps/desktop/AGENTS.md
- apps/web/AGENTS.md
- cmd/bridge/template/AGENTS.md
- internal/workspace/templates/AGENTS.md
- packages/ui/AGENTS.md
- internal/agent/prompts/_identities.md
- internal/agent/prompts/_memory.md
- internal/agent/prompts/heartbeat.md
- internal/agent/prompts/mode_background_delivery.md
- internal/agent/prompts/mode_chat.md
- internal/agent/prompts/mode_discuss.md
- internal/agent/prompts/mode_heartbeat.md
- internal/agent/prompts/mode_schedule.md
- internal/agent/prompts/mode_subagent.md


## Top Directories

| dir | count |
| --- | --- |
| internal | 1017 |
| packages | 547 |
| apps | 513 |
| db | 325 |
| conf | 38 |
| cmd | 29 |
| scripts | 19 |
| docker | 18 |
| devenv | 14 |
| .github | 12 |
| .agents | 11 |
| crates | 7 |
| .husky | 5 |
| spec | 3 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 1016 |
| .vue | 611 |
| .sql | 322 |
| .ts | 289 |
| .svg | 102 |
| .md | 49 |
| .json | 36 |
| .yaml | 36 |
| [no-ext] | 29 |
| .yml | 27 |
| .sh | 19 |
| .toml | 16 |
| .mjs | 10 |
| .css | 7 |
| .rs | 6 |
| .html | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
