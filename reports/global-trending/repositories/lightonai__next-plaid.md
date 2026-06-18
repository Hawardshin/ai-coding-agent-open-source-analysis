# lightonai/next-plaid

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/lightonai/next-plaid |
| local path | sources/lightonai__next-plaid |
| HEAD | 7e772cf |
| stars/forks | 495 / 57 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T17:27:34Z |
| trendScore / priorityScore | 154 / 423 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 377 | next-plaid-api/README.md, next-plaid/README.md, README.md |
| Developer tools / DX | 317 | colgrep/README.md, next-plaid-api/README.md, next-plaid-onnx/README.md |
| RAG / retrieval / knowledge | 270 | colgrep/README.md, next-plaid-api/README.md, next-plaid-onnx/README.md |
| Data / ML platform | 100 | colgrep/README.md, next-plaid-api/README.md, next-plaid-onnx/README.md |
| Observability / evaluation | 81 | colgrep/README.md, next-plaid-api/README.md, README.md |
| Frontend / app framework | 79 | colgrep/README.md, colgrep/python-sdk/README.md, colgrep/src/parser/tests/test_svelte.rs |
| Database / data infrastructure | 66 | colgrep/README.md, next-plaid-api/README.md, next-plaid/README.md |
| Coding agent / software automation | 58 | colgrep/README.md, next-plaid-onnx/README.md, README.md |
| AI agent / orchestration | 38 | colgrep/README.md, next-plaid-api/README.md, README.md |
| Security / supply chain | 8 | colgrep/README.md, .claude-plugin/plugin.json, colgrep/PRIVACY.md |
| Local LLM / inference | 1 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 194 |
| manifests | 24 |
| docs | 22 |
| tests | 43 |
| ci/ops | 11 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Homebrew (macOS / Linux) | ColGREP / Quick start / Homebrew (macOS / Linux) / Shell installer / Change the model / Persist as the default (existing indexes for other models are kept) / One-shot override for a single query or init / See which model an index was built with / Private HuggingFace model / Agent integrations | <div align="center" <h1 NextPlaid & ColGREP</h1 <p <b NextPlaid</b is a multi vector search engine. <b ColGREP</b is semantic code search, built on it.</p <p <a href="colgrep/README.md" <b ColGREP</b </a · <a href="next plaid api/README.md" <b NextPlaid</b </a · <a href=" models" <b Models</b </a </p </div <p align="center" <img width="680" src="docs/colgrep demo.gif" alt="ColGREP demo"/ </p ColGREP Semantic code search for your terminal and your coding agents. Searches combine regex filtering with semantic ranking. All local, your code never leaves your machine. Quick start Install Build the index Search That's it. No server, no API, no dependencies. ColGREP is a single Rust binary with eve |


## Key Files

### Manifests

- colgrep/README.md
- next-plaid-api/README.md
- next-plaid-onnx/README.md
- next-plaid/README.md
- README.md
- colgrep/python-sdk/README.md
- next-plaid-api/python-sdk/README.md
- next-plaid-onnx/python/README.md
- docs/benchmarks/pyproject.toml
- Cargo.toml
- colgrep/Cargo.toml
- docker-compose.yml
- Makefile
- next-plaid-api/Cargo.toml
- next-plaid-api/Dockerfile
- next-plaid-api/tests/pyproject.toml
- next-plaid-onnx/Cargo.toml
- next-plaid/Cargo.toml
- colgrep/python-sdk/Cargo.toml
- colgrep/python-sdk/pyproject.toml


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| colgrep | 88 |
| next-plaid-api | 32 |
| next-plaid | 23 |
| next-plaid-onnx | 16 |
| docs | 11 |
| .github | 7 |
| scripts | 3 |
| .claude-plugin | 2 |
| .dockerignore | 1 |
| .gitignore | 1 |
| Cargo.toml | 1 |
| docker-compose.cuda.local.yml | 1 |
| docker-compose.cuda.yml | 1 |
| docker-compose.yml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 113 |
| .py | 26 |
| .md | 11 |
| .toml | 11 |
| .yml | 10 |
| .json | 9 |
| [no-ext] | 7 |
| .sh | 3 |
| .svg | 2 |
| .nix | 1 |
| .typed | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
