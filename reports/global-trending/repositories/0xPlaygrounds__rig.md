# 0xPlaygrounds/rig

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/0xPlaygrounds/rig |
| local path | sources/0xPlaygrounds__rig |
| HEAD | 586f543 |
| stars/forks | 7660 / 855 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T19:28:56Z |
| trendScore / priorityScore | 152 / 427 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 373 | crates/rig-memory/README.md, AGENTS.md, README.md |
| RAG / retrieval / knowledge | 142 | crates/rig-s3vectors/README.md, crates/rig-vectorize/README.md, AGENTS.md |
| Observability / evaluation | 120 | README.md, crates/rig-core/README.md, examples/otel/Dockerfile |
| Database / data infrastructure | 117 | tests/README.md, README.md, crates/rig-core/README.md |
| Cloud native / infrastructure | 26 | tests/README.md, README.md, crates/rig-milvus/README.md |
| Developer tools / DX | 25 | README.md, crates/rig-core/README.md, crates/rig-helixdb/README.md |
| Data / ML platform | 21 | examples/agent_parallelization.rs, examples/agent_with_tools_otel.rs, examples/custom_vector_store.rs |
| Local LLM / inference | 14 | tests/README.md, crates/rig-core/README.md, examples/pdf_agent.rs |
| MCP / agent interoperability | 10 | AGENTS.md, README.md, examples/agent_with_tools_otel.rs |
| Security / supply chain | 3 | examples/debate.rs, crates/rig-derive/examples/rig_tool/simple.rs |
| Coding agent / software automation | 2 | README.md, crates/rig-core/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1087 |
| manifests | 40 |
| docs | 49 |
| tests | 646 |
| ci/ops | 3 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | or: cargo add rig-core | Table of contents / What is Rig? / Features / Who is using Rig? / Get Started / or: cargo add rig-core / Simple example / Supported Integrations | <p align="center" <picture <source media=" prefers color scheme dark " srcset="img/rig rebranded logo white.svg" <source media=" prefers color scheme light " srcset="img/rig rebranded logo black.svg" <img src="img/rig rebranded logo white.svg" style="width 40%; height 40%;" alt="Rig logo" </picture <br <br <a href="https //docs.rig.rs" <img src="https //img.shields.io/badge/📖 docs rig.rs dca282.svg" / </a &nbsp; <a href="https //docs.rs/rig/latest/rig/" <img src="https //img.shields.io/badge/docs API Reference dca282.svg" / </a &nbsp; <a href="https //crates.io/crates/rig" <img src="https //img.shields.io/crates/v/rig.svg?color=dca282" / </a &nbsp; <a href="https //crates.io/crates/rig" <im |


## Key Files

### Manifests

- crates/rig-memory/README.md
- crates/rig-s3vectors/README.md
- crates/rig-vectorize/README.md
- AGENTS.md
- tests/README.md
- README.md
- crates/rig-bedrock/README.md
- crates/rig-core/README.md
- crates/rig-fastembed/README.md
- crates/rig-gemini-grpc/README.md
- crates/rig-helixdb/README.md
- crates/rig-lancedb/README.md
- crates/rig-milvus/README.md
- crates/rig-mongodb/README.md
- crates/rig-neo4j/README.md
- crates/rig-postgres/README.md
- crates/rig-qdrant/README.md
- crates/rig-scylladb/README.md
- crates/rig-sqlite/README.md
- crates/rig-surrealdb/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| tests | 627 |
| crates | 375 |
| examples | 55 |
| .github | 10 |
| img | 8 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| AGENTS.md | 1 |
| Cargo.toml | 1 |
| CHANGELOG.md | 1 |
| CONTRIBUTING.md | 1 |
| flake.nix | 1 |
| LICENSE | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 703 |
| .yaml | 273 |
| .md | 49 |
| .toml | 23 |
| [no-ext] | 15 |
| .svg | 8 |
| .stderr | 5 |
| .hx | 2 |
| .sql | 2 |
| .epub | 1 |
| .example | 1 |
| .mp3 | 1 |
| .nix | 1 |
| .proto | 1 |
| .surql | 1 |
| .yml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
