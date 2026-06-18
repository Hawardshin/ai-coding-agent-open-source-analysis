# Dicklesworthstone/mcp_agent_mail_rust

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Dicklesworthstone/mcp_agent_mail_rust |
| local path | sources/Dicklesworthstone__mcp_agent_mail_rust |
| HEAD | 59b9349 |
| stars/forks | 89 / 23 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T23:57:36Z |
| trendScore / priorityScore | 139 / 434 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | crates/mcp-agent-mail-conformance/tests/conformance/fixtures/share/README.md, crates/mcp-agent-mail-conformance/tests/conformance/README.md, crates/mcp-agent-mail-conformance/README.md |
| Developer tools / DX | 500 | AGENTS.md, tests/fixtures/corruption_corpus/README.md, crates/mcp-agent-mail-cli/Cargo.toml |
| MCP / agent interoperability | 500 | docs/examples/mcp/README.md, crates/mcp-agent-mail-conformance/tests/conformance/fixtures/share/README.md, crates/mcp-agent-mail-conformance/tests/conformance/README.md |
| Database / data infrastructure | 246 | crates/mcp-agent-mail-conformance/tests/conformance/README.md, AGENTS.md, tests/fixtures/corruption_corpus/README.md |
| Cloud native / infrastructure | 217 | AGENTS.md, tests/fixtures/corruption_corpus/README.md, Dockerfile |
| Security / supply chain | 141 | crates/mcp-agent-mail-conformance/tests/conformance/fixtures/share/README.md, AGENTS.md, docs/AGENT_HEALTH_SCORING.md |
| Observability / evaluation | 113 | AGENTS.md, crates/mcp-agent-mail-test-helpers/Cargo.toml, crates/mcp-agent-mail-cli/Cargo.toml |
| RAG / retrieval / knowledge | 83 | crates/mcp-agent-mail-db/Cargo.toml, crates/mcp-agent-mail-search-core/Cargo.toml, Cargo.toml |
| Coding agent / software automation | 78 | AGENTS.md, docs/ADR-002-single-binary-cli-opt-in.md, docs/archive/agent-session-notes/INTRODUCTION.md |
| Data / ML platform | 46 | crates/mcp-agent-mail-conformance/tests/conformance/fixtures/share/README.md, crates/mcp-agent-mail-conformance/tests/conformance/README.md, AGENTS.md |
| Local LLM / inference | 2 | docs/CONFORMANCE_AUDIT_2026-04-18.md |
| Frontend / app framework | 1 | experimental/mcp-agent-mail-wasm/Cargo.toml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3423 |
| manifests | 29 |
| docs | 175 |
| tests | 553 |
| ci/ops | 14 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | MCP Agent Mail (Rust) | MCP Agent Mail (Rust) / Table of Contents / TL;DR / Why Use Agent Mail? / Quick Example / Install and start (auto-detects all installed coding agents) / That's it. Server starts on 127.0.0.1:8765 with the interactive TUI. / Agents coordinate through MCP tools: / ensure_project(human_key="/abs/path") / register_agent(project_key="/abs/path", program="claude-code", model="opus-4.6") | MCP Agent Mail Rust <div align="center" <img src="docs/assets/am illustration.webp" alt="MCP Agent Mail A mail like coordination layer for AI coding agents" </div <div align="center" ! License MIT+Rider https //img.shields.io/badge/License MIT%2BOpenAI%2FAnthropic%20Rider yellow.svg ./LICENSE </div "It's like Gmail for your coding agents!" A mail like coordination layer for AI coding agents, exposed as an MCP server with 37 tools and 25 resources, Git backed archive, SQLite indexing, an interactive 16 screen TUI, a server rendered web UI, and an agent first robot CLI. The Rust rewrite of the original Python project https //github.com/Dicklesworthstone/mcp agent mail 1,700+ stars . Supported |


## Key Files

### Manifests

- docs/examples/mcp/README.md
- crates/mcp-agent-mail-conformance/tests/conformance/fixtures/share/README.md
- crates/mcp-agent-mail-conformance/tests/conformance/README.md
- crates/mcp-agent-mail-storage/tests/fixtures/notifications/README.md
- crates/mcp-agent-mail-tools/tests/fixtures/llm/README.md
- crates/mcp-agent-mail-conformance/README.md
- AGENTS.md
- experimental/README.md
- README.md
- tests/fixtures/corruption_corpus/README.md
- tests/fixtures/reservation_regression/README.md
- crates/mcp-agent-mail-test-helpers/Cargo.toml
- crates/mcp-agent-mail-agent-detect/Cargo.toml
- crates/mcp-agent-mail-cli/Cargo.toml
- crates/mcp-agent-mail-conformance/Cargo.toml
- crates/mcp-agent-mail-core/Cargo.toml
- crates/mcp-agent-mail-db/Cargo.toml
- crates/mcp-agent-mail-guard/Cargo.toml
- crates/mcp-agent-mail-guard/fuzz/Cargo.toml
- crates/mcp-agent-mail-search-core/Cargo.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| crates | 2882 |
| tests | 269 |
| docs | 113 |
| scripts | 56 |
| benches | 33 |
| refactor | 17 |
| .github | 12 |
| experimental | 7 |
| .beads | 4 |
| .cargo | 1 |
| .gitignore | 1 |
| .rchignore | 1 |
| AGENT_MAIL_RUST_VERSION_REPO_TRANSITION_PLAN.md | 1 |
| AGENTS.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| [no-ext] | 2198 |
| .rs | 476 |
| .sh | 208 |
| .md | 155 |
| .json | 110 |
| .snap | 100 |
| .txt | 83 |
| .html | 22 |
| .toml | 21 |
| .sql | 12 |
| .yml | 12 |
| .py | 7 |
| .js | 4 |
| .svg | 4 |
| .css | 2 |
| .sha256 | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
