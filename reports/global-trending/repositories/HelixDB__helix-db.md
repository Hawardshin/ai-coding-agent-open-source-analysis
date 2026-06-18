# HelixDB/helix-db

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/HelixDB/helix-db |
| local path | sources/HelixDB__helix-db |
| HEAD | 37bd438 |
| stars/forks | 5370 / 298 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T09:44:24Z |
| trendScore / priorityScore | 141 / 389 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 389 | helix-cli/README.md, README.md, sdks/tests/parity/README.md |
| Cloud native / infrastructure | 144 | helix-cli/README.md, README.md, sdks/typescript/README.md |
| RAG / retrieval / knowledge | 74 | README.md, sdks/rust/README.md, sdks/rust/examples/generate_parity_fixtures.rs |
| AI agent / orchestration | 49 | helix-cli/README.md, README.md, sdks/rust/README.md |
| MCP / agent interoperability | 31 | helix-cli/README.md, README.md, helix-cli/src/commands/init.rs |
| Database / data infrastructure | 22 | README.md, sdks/python/pyproject.toml, sdks/rust/Cargo.toml |
| Coding agent / software automation | 16 | helix-cli/README.md, README.md, helix-cli/src/main.rs |
| Frontend / app framework | 2 | README.md, helix-cli/src/commands/init.rs |
| Observability / evaluation | 1 | CONTRIBUTORS.md |
| Security / supply chain | 1 | .github/workflows/s3_push.yml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go |
| capabilities | Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 113 |
| manifests | 19 |
| docs | 11 |
| tests | 12 |
| ci/ops | 5 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Getting Started / 1. Install the CLI / 2. The quickest path — `helix chef` / 3. Manual local setup / Writing queries with the SDKs / Rust / TypeScript / Python / HelixDB Cloud / Commercial Support | <div align="center" <img src="./assets/full logo dark.png gh dark mode only" alt="HelixDB Logo" <img src="./assets/full logo light.png gh light mode only" alt="HelixDB Logo" <b HelixDB</b a graph vector database for knowledge graphs and AI memory. Built from scratch in Rust. <br/ <br/ <a href="https //www.ycombinator.com/launches/Naz helixdb the database for rag ai" target=" blank" <img src="https //www.ycombinator.com/launches/Naz helixdb the database for rag ai/upvote embed.svg" alt="Launch YC HelixDB The Database for Intelligence" style="margin left 12px;"/ </a <h3 <a href="https //helix db.com" website</a <a href="https //docs.helix db.com" docs</a <a href="https //discord.gg/2stgMPr5BD" |


## Key Files

### Manifests

- helix-cli/README.md
- README.md
- sdks/tests/parity/README.md
- sdks/go/README.md
- sdks/python/README.md
- sdks/rust/helix-dsl-macros/README.md
- sdks/rust/README.md
- sdks/typescript/README.md
- sdks/rust/example/Cargo.toml
- helix-cli/Cargo.toml
- Cargo.toml
- metrics/Cargo.toml
- sdks/go/go.mod
- sdks/python/pyproject.toml
- sdks/rust/Cargo.toml
- sdks/rust/helix-dsl-macros/Cargo.toml
- sdks/typescript/package.json
- sdks/typescript/tsconfig.json
- sdks/typescript/tsconfig.build.json


### Spec / Docs / Prompt Artifacts

- .github/ISSUE_TEMPLATE/task.yml


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| sdks | 48 |
| helix-cli | 45 |
| .github | 10 |
| metrics | 3 |
| .gitignore | 1 |
| Cargo.toml | 1 |
| clippy_check.sh | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTORS.md | 1 |
| LICENSE | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 49 |
| .md | 11 |
| .ts | 10 |
| .yml | 9 |
| .toml | 7 |
| .py | 6 |
| .json | 5 |
| [no-ext] | 5 |
| .go | 4 |
| .sh | 4 |
| .js | 1 |
| .mod | 1 |
| .typed | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
