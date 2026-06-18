# Dicklesworthstone/coding_agent_session_search

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Dicklesworthstone/coding_agent_session_search |
| local path | sources/Dicklesworthstone__coding_agent_session_search |
| HEAD | 9b221db |
| stars/forks | 909 / 114 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-18T00:20:32Z |
| trendScore / priorityScore | 148 / 436 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | AGENTS.md, .beads/README.md, tests/fixtures/message_grouping/README.md |
| Coding agent / software automation | 419 | tests/doctor_fixtures/fm-storage-frankensqlite-openread-cursor/README.md, AGENTS.md, .beads/README.md |
| Developer tools / DX | 351 | AGENTS.md, .beads/README.md, tests/fixtures/message_grouping/README.md |
| Database / data infrastructure | 240 | AGENTS.md, tests/doctor_fixtures/fm-analytics-frankensqlite-aggregate-only/README.md, tests/doctor_fixtures/fm-analytics-token-rollup-gap/README.md |
| Security / supply chain | 111 | AGENTS.md, tests/fixtures/message_grouping/README.md, tests/fixtures/README.md |
| RAG / retrieval / knowledge | 73 | AGENTS.md, tests/fixtures/models/README.md, tests/fixtures/README.md |
| Observability / evaluation | 58 | AGENTS.md, scripts/historical_recovery/README.md, Cargo.toml |
| MCP / agent interoperability | 57 | AGENTS.md, docs/artifacts/migration-baseline/search_quality/database_migration.json, docs/artifacts/migration-baseline/search_quality/memory_leak_debugging.json |
| Cloud native / infrastructure | 50 | AGENTS.md, docs/planning/cli-robot-enhancements.md, docs/planning/RUST_CLI_TOOLS_BEST_PRACTICES_GUIDE.md |
| Data / ML platform | 36 | AGENTS.md, tests/fixtures/models/README.md, docs/test-coverage-audit.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Ruby |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3597 |
| manifests | 40 |
| docs | 328 |
| tests | 643 |
| ci/ops | 14 |
| spec artifacts | 5 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | 🔎 coding-agent-search (cass) | 🔎 coding-agent-search (cass) / Windows (PowerShell) / Homebrew (Apple Silicon macOS + Linux) / Windows (Scoop) / 🤖 Agent Quickstart (Robot Mode) / 1) One-shot agent triage. Follow next_command when present. / From zero context, `cass --json` and `cass --robot` also resolve to triage. / 2) Search across all agent history. Default search is hybrid-preferred: / lexical is the fast required path; semantic refinement joins when ready. / 3) Find the current or recent session for this workspace | 🔎 coding agent search cass <div align="center" <img src="docs/assets/images/cass illustration.webp" alt="coding agent search cass illustration" </div ! Platform https //img.shields.io/badge/platform Linux%20%7C%20macOS%20%7C%20Windows blue.svg ! Rust https //img.shields.io/badge/Rust stable orange.svg ! Status https //img.shields.io/badge/status alpha purple.svg ! Coverage https //codecov.io/gh/Dicklesworthstone/coding agent session search/branch/main/graph/badge.svg https //codecov.io/gh/Dicklesworthstone/coding agent session search ! License https //img.shields.io/badge/license MIT%2BOpenAI%2FAnthropic%20Rider green.svg Unified, high performance TUI to index and search your local coding a |


## Key Files

### Manifests

- tests/doctor_fixtures/fm-cli_robot-introspect-golden-drift/README.md
- tests/doctor_fixtures/fm-cli_robot-schema-version-missing-doctor-root/README.md
- tests/doctor_fixtures/fm-indexer-semantic-vector-partial-build/README.md
- tests/doctor_fixtures/fm-storage-db-bloat/README.md
- tests/doctor_fixtures/fm-storage-fixable-corruption/README.md
- tests/doctor_fixtures/fm-storage-frankensqlite-openread-cursor/README.md
- tests/doctor_fixtures/fm-storage-pragma-integrity-fail/README.md
- tests/doctor_fixtures/fm-storage-stale-wal-shm/README.md
- docs/artifacts/README.md
- docs/assets/README.md
- AGENTS.md
- .beads/README.md
- README.md
- tests/doctor_fixtures/fm-analytics-frankensqlite-aggregate-only/README.md
- tests/doctor_fixtures/fm-analytics-token-rollup-gap/README.md
- tests/doctor_fixtures/fm-bookmarks-stale-source-path/README.md
- tests/doctor_fixtures/fm-connectors-aider-external-id-collision/README.md
- tests/doctor_fixtures/fm-connectors-malformed-session-json/README.md
- tests/doctor_fixtures/fm-daemon-socket-stale/README.md
- tests/doctor_fixtures/fm-daemon-stale-pidfile/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- docs/artifacts/refactor-runs/20260425T024205Z-second-simplify/architecture.md
- docs/artifacts/refactor-runs/20260425T154730Z-third-simplify/architecture.md
- docs/artifacts/refactor-runs/20260425T180745Z-fourth-simplify/architecture.md
- docs/artifacts/refactor-runs/20260425T184600Z-fifth-simplify/architecture.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| fuzz | 2332 |
| tests | 604 |
| docs | 283 |
| src | 253 |
| scripts | 63 |
| .beads | 19 |
| .github | 13 |
| benches | 11 |
| .cargo | 1 |
| .config | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .ubsignore | 1 |
| AGENTS.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| [no-ext] | 2324 |
| .rs | 493 |
| .md | 278 |
| .json | 119 |
| .golden | 61 |
| .sh | 57 |
| .js | 42 |
| .jsonl | 37 |
| .snap | 36 |
| .ts | 30 |
| .txt | 20 |
| .log | 12 |
| .yml | 12 |
| .html | 7 |
| .py | 7 |
| .toml | 7 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
