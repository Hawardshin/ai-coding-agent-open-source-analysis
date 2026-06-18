# spiceai/spiceai

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/spiceai/spiceai |
| local path | sources/spiceai__spiceai |
| HEAD | c6c7198 |
| stars/forks | 2960 / 200 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-18T00:27:37Z |
| trendScore / priorityScore | 141 / 432 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Database / data infrastructure | 347 | docs/README.md, examples/cosmosdb-connector/README.md, examples/flatten-json-properties/README.md |
| Observability / evaluation | 170 | examples/flatten-json-properties/README.md, docs/criteria/features/README.md, crates/test-framework/src/queries/README.md |
| Developer tools / DX | 154 | examples/cosmosdb-connector/README.md, examples/flatten-json-properties/README.md, examples/git-connector/README.md |
| RAG / retrieval / knowledge | 130 | examples/flatten-json-properties/README.md, examples/git-connector/README.md, README.md |
| Security / supply chain | 98 | examples/git-connector/README.md, README.md, crates/data_components/src/scylladb/README.md |
| Cloud native / infrastructure | 74 | examples/cosmosdb-connector/README.md, examples/flatten-json-properties/README.md, crates/s3_vectors_metadata_filter/README.md |
| Data / ML platform | 52 | examples/cosmosdb-connector/README.md, examples/flatten-json-properties/README.md, examples/git-connector/README.md |
| AI agent / orchestration | 34 | examples/git-connector/README.md, crates/test-framework/src/queries/README.md, README.md |
| MCP / agent interoperability | 22 | README.md, tools/spicepodschema/README.md, Makefile |
| Coding agent / software automation | 12 | README.md, test/adbc/python/README.md, .github/copilot-instructions.md |
| Local LLM / inference | 5 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python, Rust, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 8000 (capped) |
| manifests | 40 |
| docs | 242 |
| tests | 3165 |
| ci/ops | 72 |
| spec artifacts | 6 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Why Spice? / What you get / 🎥 Watch & Learn / What's New / Cluster-Sidecar Architecture: localhost latency, cluster scale / Apache Ballista distributed query / Spice Cayenne — next-gen data acceleration on Vortex / Apache Iceberg: query, accelerate, and write / Petabyte-scale hybrid search / Multi-tenancy for AI agents — without per-tenant pipelines | <p align="center" <img src="https //github.com/user attachments/assets/13ff4c9d d6a7 4c20 9408 45573c508c41" alt="spice oss logo" width="600"/ </p <div align="center" ! CodeQL https //github.com/spiceai/spiceai/actions/workflows/codeql analysis.yml/badge.svg?branch=trunk&event=push https //github.com/spiceai/spiceai/actions/workflows/codeql analysis.yml?query=branch%3Atrunk+event%3Apush ! License Apache 2.0 https //img.shields.io/badge/License Apache 2.0 blue.svg https //opensource.org/licenses/Apache 2.0 ! Slack https //img.shields.io/badge/Slack Join%20Us 4A154B?logo=slack https //spice.ai/slack ! Follow on X https //img.shields.io/twitter/follow/spice ai.svg?style=social&logo=x https //x. |


## Key Files

### Manifests

- docs/README.md
- examples/cosmosdb-connector/README.md
- examples/flatten-json-properties/README.md
- examples/git-connector/README.md
- docs/criteria/features/README.md
- crates/s3_vectors_metadata_filter/README.md
- crates/s3_vectors/README.md
- crates/data_components/tests/hadoop_data/README.md
- crates/test-framework/src/queries/README.md
- README.md
- test/adbc/python/README.md
- test/spicepods/http/README.md
- test/spicepods/README.md
- test/spicepods/search/README.md
- tools/testoperator/dispatch/perf-cayenne-vs-duckdb/README.md
- tools/testoperator/README.md
- crates/arrow_sql_gen/README.md
- crates/arrow_tools/README.md
- crates/cache/benches/README.md
- crates/cayenne/README.md


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- .github/copilot-instructions.md
- test/adbc/python/requirements.txt
- .github/prompts/writeReleaseNotes.prompt.md
- docs/ROADMAP.md
- .vscode/tasks.json


### Agent Instruction Files

- CLAUDE.md
- .github/copilot-instructions.md
- .github/prompts/writeReleaseNotes.prompt.md


## Top Directories

| dir | count |
| --- | --- |
| crates | 6789 |
| test | 452 |
| tools | 331 |
| docs | 190 |
| .github | 107 |
| bin | 60 |
| deploy | 10 |
| examples | 9 |
| media | 6 |
| install | 5 |
| scripts | 5 |
| monitoring | 4 |
| .vscode | 3 |
| .schema | 2 |


## Extension Distribution

| ext | count |
| --- | --- |
| .snap | 4413 |
| .rs | 1727 |
| .sql | 662 |
| .yaml | 562 |
| .md | 238 |
| .toml | 113 |
| .yml | 97 |
| .json | 46 |
| .csv | 33 |
| .sh | 26 |
| [no-ext] | 24 |
| .bash | 10 |
| .py | 10 |
| .ctl | 8 |
| .exp | 6 |
| .svg | 6 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
