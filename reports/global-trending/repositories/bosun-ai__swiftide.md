# bosun-ai/swiftide

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/bosun-ai/swiftide |
| local path | sources/bosun-ai__swiftide |
| HEAD | e5fb532 |
| stars/forks | 710 / 62 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T07:01:02Z |
| trendScore / priorityScore | 142 / 424 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | AGENTS.md, README.md, examples/Cargo.toml |
| Observability / evaluation | 283 | README.md, examples/Cargo.toml, swiftide-agents/Cargo.toml |
| Data / ML platform | 142 | AGENTS.md, README.md, examples/Cargo.toml |
| RAG / retrieval / knowledge | 113 | README.md, examples/agent_can_fail_custom_schema.rs, examples/hello_agents.rs |
| Database / data infrastructure | 105 | README.md, examples/Cargo.toml, examples/agent_can_fail_custom_schema.rs |
| MCP / agent interoperability | 49 | README.md, examples/Cargo.toml, swiftide-agents/Cargo.toml |
| Local LLM / inference | 16 | README.md, examples/Cargo.toml, examples/index_md_into_pgvector.rs |
| Developer tools / DX | 15 | examples/aws_bedrock_agent.rs, Cargo.toml, swiftide-integrations/Cargo.toml |
| Cloud native / infrastructure | 14 | AGENTS.md, README.md, examples/langfuse.rs |
| Coding agent / software automation | 13 | examples/Cargo.toml, examples/hello_agents.rs, examples/fastembed.rs |
| Security / supply chain | 6 | Cargo.toml, swiftide-integrations/Cargo.toml, .github/dependabot.yml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 386 |
| manifests | 16 |
| docs | 14 |
| tests | 47 |
| ci/ops | 7 |
| spec artifacts | 7 |
| agent instruction files | 7 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Why Swiftide / Quick Start / Agent Harness / Typed Task Graphs / RAG Pipelines / Integrations / Examples / Project Status / Contributing / Core Team Members | <a name="readme top" </a ! CI https //img.shields.io/github/actions/workflow/status/bosun ai/swiftide/test.yml?style=flat square ! Coverage Status https //img.shields.io/coverallsCoverage/github/bosun ai/swiftide?style=flat square ! Crate Badge Crate ! Docs Badge API Docs ! Contributors contributors shield contributors url ! Stargazers stars shield stars url ! Discord https //img.shields.io/discord/1257672801553354802?style=flat square&link=https%3A%2F%2Fdiscord.gg%2F3jjXYen9UY ! MIT License license shield license url ! LinkedIn linkedin shield linkedin url <br / <div align="center" <a href="https //github.com/bosun ai/swiftide" <img src="https //raw.githubusercontent.com/bosun ai/swiftide/m |


## Key Files

### Manifests

- AGENTS.md
- README.md
- swiftide-core/README.md
- examples/Cargo.toml
- benchmarks/Cargo.toml
- swiftide-agents/Cargo.toml
- swiftide-test-utils/Cargo.toml
- Cargo.toml
- swiftide-core/Cargo.toml
- swiftide-indexing/Cargo.toml
- swiftide-integrations/Cargo.toml
- swiftide-langfuse/Cargo.toml
- swiftide-macros/Cargo.toml
- swiftide-query/Cargo.toml
- swiftide-tasks/Cargo.toml
- swiftide/Cargo.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- swiftide-indexing/src/transformers/prompts/metadata_keywords.prompt.md
- swiftide-indexing/src/transformers/prompts/metadata_qa_text.prompt.md
- swiftide-indexing/src/transformers/prompts/metadata_summary.prompt.md
- swiftide-indexing/src/transformers/prompts/metadata_title.prompt.md
- swiftide-integrations/src/treesitter/prompts/compress_code_outline.prompt.md
- swiftide-integrations/src/treesitter/prompts/metadata_qa_code.prompt.md


### Agent Instruction Files

- AGENTS.md
- swiftide-indexing/src/transformers/prompts/metadata_keywords.prompt.md
- swiftide-indexing/src/transformers/prompts/metadata_qa_text.prompt.md
- swiftide-indexing/src/transformers/prompts/metadata_summary.prompt.md
- swiftide-indexing/src/transformers/prompts/metadata_title.prompt.md
- swiftide-integrations/src/treesitter/prompts/compress_code_outline.prompt.md
- swiftide-integrations/src/treesitter/prompts/metadata_qa_code.prompt.md


## Top Directories

| dir | count |
| --- | --- |
| swiftide-integrations | 88 |
| swiftide-langfuse | 47 |
| examples | 36 |
| swiftide-core | 36 |
| swiftide-tasks | 36 |
| swiftide-macros | 30 |
| swiftide-indexing | 27 |
| swiftide-agents | 20 |
| swiftide-query | 19 |
| .github | 10 |
| swiftide | 10 |
| benchmarks | 6 |
| images | 3 |
| swiftide-test-utils | 3 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 292 |
| .snap | 27 |
| .toml | 19 |
| .md | 14 |
| .stderr | 13 |
| .yml | 8 |
| .sql | 4 |
| .svg | 3 |
| [no-ext] | 2 |
| .json | 1 |
| .parquet | 1 |
| .txt | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
