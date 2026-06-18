# modelcontextprotocol/rust-sdk

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/modelcontextprotocol/rust-sdk |
| local path | sources/modelcontextprotocol__rust-sdk |
| HEAD | 5d00e20 |
| stars/forks | 3526 / 542 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T20:46:51Z |
| trendScore / priorityScore | 156 / 405 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | examples/clients/README.md, examples/simple-chat-client/README.md, examples/README.md |
| Observability / evaluation | 155 | examples/clients/README.md, examples/servers/README.md, examples/clients/Cargo.toml |
| Security / supply chain | 102 | examples/clients/README.md, examples/servers/README.md, crates/rmcp/README.md |
| Developer tools / DX | 48 | examples/simple-chat-client/README.md, examples/README.md, crates/rmcp-macros/README.md |
| Cloud native / infrastructure | 35 | README.md, examples/clients/src/auth/callback.html, examples/servers/templates/mcp_oauth_authorize.html |
| AI agent / orchestration | 17 | README.md, examples/simple-chat-client/src/chat.rs, examples/simple-chat-client/src/model.rs |
| Coding agent / software automation | 8 | README.md, examples/clients/src/auth/callback.html, examples/servers/templates/mcp_oauth_authorize.html |
| Database / data infrastructure | 3 | README.md, examples/servers/src/completion_stdio.rs |
| RAG / retrieval / knowledge | 1 | examples/simple-chat-client/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, devtools, example-rich, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 244 |
| manifests | 19 |
| docs | 19 |
| tests | 72 |
| ci/ops | 5 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | RMCP | RMCP / Table of Contents / Usage / Import the crate / or dev channel / Third Dependencies / Build a Client / Build a Server / Tools / Server-side | <div align = "right" <a href="docs/readme/README.zh cn.md" 简体中文</a </div RMCP ! Crates.io Version https //img.shields.io/crates/v/rmcp https //crates.io/crates/rmcp ! docs.rs https //img.shields.io/docsrs/rmcp https //docs.rs/rmcp/latest/rmcp ! CI https //github.com/modelcontextprotocol/rust sdk/actions/workflows/ci.yml/badge.svg https //github.com/modelcontextprotocol/rust sdk/actions/workflows/ci.yml ! License https //img.shields.io/crates/l/rmcp LICENSE An official Rust Model Context Protocol SDK implementation with tokio async runtime. Migrating to 1.x? See the migration guide https //github.com/modelcontextprotocol/rust sdk/discussions/716 for breaking changes and upgrade instructions. |


## Key Files

### Manifests

- examples/clients/README.md
- examples/simple-chat-client/README.md
- examples/README.md
- examples/servers/README.md
- examples/wasi/README.md
- crates/rmcp-macros/README.md
- crates/rmcp/README.md
- README.md
- examples/clients/Cargo.toml
- examples/simple-chat-client/Cargo.toml
- examples/servers/Cargo.toml
- examples/transport/Cargo.toml
- examples/wasi/Cargo.toml
- crates/rmcp/tests/test_with_js/package.json
- crates/rmcp/tests/test_with_python/pyproject.toml
- crates/rmcp-macros/Cargo.toml
- crates/rmcp/Cargo.toml
- Cargo.toml
- conformance/Cargo.toml


### Spec / Docs / Prompt Artifacts

- .github/instructions/fetch-mcp-doc.instructions.md
- ROADMAP.md


### Agent Instruction Files

- .github/instructions/fetch-mcp-doc.instructions.md


## Top Directories

| dir | count |
| --- | --- |
| crates | 147 |
| examples | 63 |
| .github | 10 |
| conformance | 5 |
| docs | 4 |
| .devcontainer | 1 |
| .githooks | 1 |
| .gitignore | 1 |
| Cargo.toml | 1 |
| client-metadata.json | 1 |
| clippy.toml | 1 |
| justfile | 1 |
| LICENSE | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 175 |
| .md | 19 |
| .toml | 16 |
| .json | 9 |
| .yml | 8 |
| [no-ext] | 7 |
| .js | 4 |
| .html | 3 |
| .py | 2 |
| .sh | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
