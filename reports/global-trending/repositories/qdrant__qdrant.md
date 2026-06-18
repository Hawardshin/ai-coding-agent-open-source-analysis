# qdrant/qdrant

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/qdrant/qdrant |
| local path | sources/qdrant__qdrant |
| HEAD | 44ad62f |
| stars/forks | 32410 / 2391 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T22:20:57Z |
| trendScore / priorityScore | 193 / 445 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 127 | docs/roadmap/README.md, README.md, tests/pyproject.toml |
| Observability / evaluation | 81 | README.md, lib/storage/Cargo.toml, Cargo.toml |
| RAG / retrieval / knowledge | 55 | docs/roadmap/README.md, README.md, lib/edge/publish/README.md |
| Security / supply chain | 26 | README.md, Dockerfile, .github/workflows/io-bridge-object-store-tests.yml |
| Data / ML platform | 17 | docs/roadmap/README.md, README.md, lib/bm25/Cargo.toml |
| Developer tools / DX | 14 | Dockerfile, lib/edge/python/pyproject.toml, .github/workflows/edge-test.yml |
| AI agent / orchestration | 10 | README.md, lib/edge/publish/README.md, lib/edge/python/README.md |
| Database / data infrastructure | 3 | README.md, Cargo.toml, tests/e2e_tests/client_utils.py |
| Local LLM / inference | 3 | lib/edge/publish/README.md, lib/edge/python/README.md, tests/e2e_tests/client_utils.py |
| Coding agent / software automation | 2 | docs/CONTRIBUTING.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llmFramework, local-llm, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1866 |
| manifests | 40 |
| docs | 82 |
| tests | 343 |
| ci/ops | 20 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Getting Started / Agent Skills / Client-Server / Clients / Qdrant Edge / Where Do I Go from Here? / Demo Projects / Discover Semantic Text Search 🔍 / Explore Similar Image Search - Food Discovery 🍕 / Master Extreme Classification - E-Commerce Product Categorization 📺 | <p align="center" <picture <source media=" prefers color scheme dark " srcset="https //github.com/qdrant/qdrant/raw/master/docs/logo dark.svg" <source media=" prefers color scheme light " srcset="https //github.com/qdrant/qdrant/raw/master/docs/logo light.svg" <img height="100" alt="Qdrant" src="https //github.com/qdrant/qdrant/raw/master/docs/logo.svg" </picture </p <p align="center" <b Vector Search Engine for the next generation of AI applications</b </p <p align=center <a href="https //github.com/qdrant/qdrant/actions/workflows/rust.yml" <img src="https //img.shields.io/github/actions/workflow/status/qdrant/qdrant/rust.yml?style=flat square" alt="Tests status" </a <a href="https //api.qd |


## Key Files

### Manifests

- docs/roadmap/README.md
- README.md
- tests/e2e_tests/README.md
- lib/collection/README.md
- lib/edge/publish/README.md
- lib/edge/python/README.md
- lib/edge/README.md
- lib/segment/src/index/field_index/full_text_index/stop_words/README.md
- lib/edge/publish/examples/Cargo.toml
- lib/storage/Cargo.toml
- tests/pyproject.toml
- Cargo.toml
- Dockerfile
- tests/consensus_tests/docker-compose.yaml
- lib/api/Cargo.toml
- lib/bm25/Cargo.toml
- lib/collection/Cargo.toml
- lib/common/cancel/Cargo.toml
- lib/common/common/Cargo.toml
- lib/common/dataset/Cargo.toml


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| lib | 1379 |
| tests | 230 |
| src | 114 |
| docs | 66 |
| .github | 27 |
| tools | 20 |
| openapi | 11 |
| config | 4 |
| pkg | 2 |
| .config | 1 |
| .dockerignore | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .rusty-hook.toml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 1391 |
| .py | 208 |
| .json | 59 |
| .sh | 32 |
| .toml | 32 |
| .yaml | 23 |
| .comp | 22 |
| .md | 21 |
| .yml | 19 |
| .proto | 16 |
| [no-ext] | 16 |
| .c | 4 |
| .svg | 4 |
| .pem | 3 |
| .cfg | 2 |
| .js | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
