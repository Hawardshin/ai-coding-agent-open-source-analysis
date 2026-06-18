# CodeBendKit/codeseek

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/CodeBendKit/codeseek |
| local path | sources/CodeBendKit__codeseek |
| HEAD | f11acd1 |
| stars/forks | 185 / 16 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-10T04:07:18Z |
| trendScore / priorityScore | 141 / 380 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 173 | README.md, CLAUDE.md, docs/codeseek-cli-rewrite-plan.md |
| Developer tools / DX | 87 | README.md, CLAUDE.md, docs/codeseek-cli-rewrite-plan.md |
| Coding agent / software automation | 67 | README.md, CLAUDE.md, docs/codeseek-cli-rewrite-plan.md |
| MCP / agent interoperability | 48 | README.md, docs/codeseek-cli-rewrite-plan.md, package.json |
| AI agent / orchestration | 40 | README.md, docs/ARCHITECTURE.md, rust-core/src/storage/incremental.rs |
| Observability / evaluation | 19 | rust-core/Cargo.toml, docs/ARCHITECTURE.md, rust-core/src/cli/analyze.rs |
| Database / data infrastructure | 16 | README.md, CLAUDE.md, docs/codeseek-cli-rewrite-plan.md |
| Data / ML platform | 10 | README.md, rust-core/src/storage/tantivy_index.rs, CONTRIBUTING.md |
| Frontend / app framework | 9 | rust-core/tests/fixtures/cases/js/main.js, rust-core/src/codegraph/treesitter/language_id.rs |
| Security / supply chain | 5 | docs/sandbox-设计思路.md, docs/SETUP_GUIDE.md, src/bin/codeseek.ts |
| Cloud native / infrastructure | 3 | docs/sandbox-设计思路.md, rust-core/src/codegraph/treesitter/parsers/cpp.rs, rust-core/src/codegraph/treesitter/parsers/python.rs |
| Local LLM / inference | 2 | docs/SETUP_GUIDE.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, Java/Kotlin, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 142 |
| manifests | 11 |
| docs | 8 |
| tests | 67 |
| ci/ops | 1 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | CodeSeek | CodeSeek / Quick Start / Install via npm (handles setup wizard + binary download automatically) / First run — interactive setup wizard configures your embedding model / Index your project / Search code by symbol name / Query call graph / Register with Claude Code / Codex as MCP tools / Check status / Auto-index on git commits | CodeSeek Code intelligence CLI tool for Claude Code. AST based call graph analysis + semantic search — right from your terminal. Quick Start Install npm The npm package ships a lightweight JS wrapper that handles Step Description First run wizard Interactive CLI prompts for embedding API token, model, and base URL Binary download Automatically pulls the correct Rust binary for your platform from GitHub Releases Pass through All commands init , search , callers , etc. are forwarded to the native binary Supported platforms Platform Architecture macOS arm64 Apple Silicon , x64 Intel Linux x64 Homebrew From source build.sh compiles both the TypeScript wrapper dist/ and the Rust binary, then inst |


## Key Files

### Manifests

- README.md
- CLAUDE.md
- package.json
- rust-core/Cargo.toml
- rust-core/tests/test_repos/simple_js_project/package.json
- rust-core/tests/test_repos/simple_rust_project/Cargo.toml
- rust-core/tests/test_repos/simple_ts_project/package.json
- rust-core/tests/test_repos/simple_ts_project/tsconfig.json
- tsconfig.json
- rust-core/tests/parsers/go.rs
- rust-core/src/codegraph/treesitter/parsers/go.rs


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- docs/ARCHITECTURE.md


### Agent Instruction Files

- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| rust-core | 120 |
| .github | 4 |
| docs | 4 |
| src | 2 |
| .gitignore | 1 |
| build.sh | 1 |
| CLAUDE.md | 1 |
| CONTRIBUTING.md | 1 |
| Formula | 1 |
| LICENSE | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| README_ZH.md | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 65 |
| .json | 16 |
| .md | 8 |
| .ts | 8 |
| .decl_json | 7 |
| .py | 7 |
| .skeleton | 7 |
| .js | 6 |
| .yml | 4 |
| .sh | 3 |
| .cpp | 2 |
| .go | 2 |
| .java | 2 |
| .toml | 2 |
| [no-ext] | 2 |
| .rb | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
