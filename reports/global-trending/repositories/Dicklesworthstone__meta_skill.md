# Dicklesworthstone/meta_skill

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Dicklesworthstone/meta_skill |
| local path | sources/Dicklesworthstone__meta_skill |
| HEAD | c60d6c1 |
| stars/forks | 174 / 32 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-14T03:55:58Z |
| trendScore / priorityScore | 147 / 421 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 410 | AGENTS.md, README.md, Cargo.toml |
| AI agent / orchestration | 329 | AGENTS.md, homebrew-tap/README.md, README.md |
| Security / supply chain | 250 | AGENTS.md, README.md, docs/prompt_injection_defense.md |
| Coding agent / software automation | 230 | AGENTS.md, README.md, Cargo.toml |
| MCP / agent interoperability | 161 | AGENTS.md, README.md, docs/RICH_OUTPUT.md |
| Database / data infrastructure | 124 | AGENTS.md, README.md, Cargo.toml |
| RAG / retrieval / knowledge | 68 | AGENTS.md, README.md, Cargo.toml |
| Observability / evaluation | 34 | AGENTS.md, Cargo.toml, docs/TESTING_STRATEGY.md |
| Cloud native / infrastructure | 18 | AGENTS.md, docs/prompt_injection_defense.md, docs/composition.md |
| Frontend / app framework | 6 | AGENTS.md, metaskill_polished_prompts.md |
| Data / ML platform | 4 | AGENTS.md, README.md, docs/prompt_injection_defense.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python, Rust, Ruby |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 455 |
| manifests | 8 |
| docs | 46 |
| tests | 147 |
| ci/ops | 8 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | ms | ms / What ms Actually Is / Quick Example / Initialize a local ms root (.ms/) / Configure skill paths / Index SKILL.md files / Search and inspect / Get context-aware suggestions / Analyze skill dependencies / Start MCP server for AI agent integration | ms <div align="center" <img src="ms illustration.webp" alt="ms Meta Skill CLI A local first skill management platform" </div <div align="center" ! License MIT https //img.shields.io/badge/License MIT%2BOpenAI%2FAnthropic%20Rider blue.svg ./LICENSE </div Meta Skill ms is a local first skill management platform that turns operational knowledge into structured, searchable, reusable artifacts. It provides dual persistence SQLite + Git , hybrid search lexical + semantic , adaptive suggestions with bandit optimization, multi layer security prompt injection defense + command safety gates , dependency graph analysis, provenance tracking, and native AI agent integration via MCP. <div align="center" < |


## Key Files

### Manifests

- AGENTS.md
- homebrew-tap/README.md
- README.md
- scoop-bucket/README.md
- tests/fixtures/bundles/README.md
- Cargo.toml
- src/cli/commands/requirements.rs
- src/bundler/package.rs


### Spec / Docs / Prompt Artifacts

- AGENTS.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| src | 221 |
| tests | 146 |
| skills | 19 |
| migrations | 14 |
| docs | 11 |
| scripts | 8 |
| .github | 6 |
| scoop-bucket | 4 |
| homebrew-tap | 3 |
| benches | 2 |
| .beads | 1 |
| .cargo | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 303 |
| .snap | 55 |
| .md | 44 |
| .sql | 14 |
| .yml | 9 |
| .toml | 8 |
| .sh | 7 |
| .msb | 4 |
| [no-ext] | 3 |
| .json | 2 |
| .py | 2 |
| .jsonl | 1 |
| .ps1 | 1 |
| .rb | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
