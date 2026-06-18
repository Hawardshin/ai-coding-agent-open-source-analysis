# Muvon/octocode

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Muvon/octocode |
| local path | sources/Muvon__octocode |
| HEAD | b5170d4 |
| stars/forks | 402 / 40 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T15:48:19Z |
| trendScore / priorityScore | 135 / 407 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | benchmark/README.md, README.md, Cargo.toml |
| RAG / retrieval / knowledge | 500 | benchmark/README.md, README.md, Cargo.toml |
| Coding agent / software automation | 129 | benchmark/README.md, README.md, Cargo.toml |
| Developer tools / DX | 124 | README.md, Cargo.toml, doc/MCP_CLIENTS.md |
| Database / data infrastructure | 111 | benchmark/README.md, README.md, doc/MCP_INTEGRATION.md |
| Security / supply chain | 109 | README.md, doc/MCP_INTEGRATION.md, Dockerfile |
| Observability / evaluation | 89 | benchmark/README.md, README.md, Cargo.toml |
| Cloud native / infrastructure | 62 | README.md, Cargo.toml, doc/MCP_INTEGRATION.md |
| Data / ML platform | 43 | benchmark/README.md, README.md, Cargo.toml |
| Frontend / app framework | 23 | README.md, Cargo.toml, doc/MCP_INTEGRATION.md |
| AI agent / orchestration | 10 | benchmark/README.md, README.md, doc/MCP_CLIENTS.md |
| Local LLM / inference | 4 | benchmark/config.toml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 157 |
| manifests | 6 |
| docs | 17 |
| tests | 3 |
| ci/ops | 5 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Semantic search finds the right code | **Structural Code Intelligence for AI Agents — MCP Server + Knowledge Graph + Semantic Search** / 🤖 Built for AI Agents / 🤔 Why Octocode? / Semantic search finds the right code / GraphRAG reveals the full dependency chain / 🔬 How It Works / ✨ What Makes It Different / 🚀 Quick Start / 1. Install / Universal installer (Linux, macOS, Windows) | <div align="center" <img src="https //raw.githubusercontent.com/Muvon/octocode/master/logo.svg" width="240" alt="Octocode" Structural Code Intelligence for AI Agents — MCP Server + Knowledge Graph + Semantic Search ! GitHub stars https //img.shields.io/github/stars/Muvon/octocode?style=social https //github.com/Muvon/octocode/stargazers ! License https //img.shields.io/badge/License Apache%202.0 blue.svg https //opensource.org/licenses/Apache 2.0 ! Rust https //img.shields.io/badge/Rust 1.82%2B orange.svg https //www.rust lang.org ! Release https //img.shields.io/github/v/release/Muvon/octocode https //github.com/Muvon/octocode/releases Give your AI assistant a brain for your codebase. Octoc |


## Key Files

### Manifests

- benchmark/README.md
- README.md
- Cargo.toml
- Dockerfile
- Makefile
- src/indexer/languages/go.rs


### Spec / Docs / Prompt Artifacts

- doc/ARCHITECTURE.md


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| src | 110 |
| doc | 12 |
| benchmark | 5 |
| .github | 4 |
| scripts | 3 |
| website | 3 |
| .cargo | 1 |
| .dockerignore | 1 |
| .editorconfig | 1 |
| .gitignore | 1 |
| .noindex | 1 |
| .pre-commit-config.yaml | 1 |
| Cargo.toml | 1 |
| CHANGELOG.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 110 |
| .md | 17 |
| [no-ext] | 7 |
| .toml | 5 |
| .sh | 4 |
| .yml | 4 |
| .csv | 2 |
| .svg | 2 |
| .css | 1 |
| .html | 1 |
| .js | 1 |
| .json | 1 |
| .py | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
