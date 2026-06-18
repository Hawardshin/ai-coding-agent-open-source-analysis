# orneryd/NornicDB

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/orneryd/NornicDB |
| local path | sources/orneryd__NornicDB |
| HEAD | f1fb4be |
| stars/forks | 777 / 44 |
| language | Go |
| license |  |
| pushedAt | 2026-06-16T23:34:41Z |
| trendScore / priorityScore | 141 / 495 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Database / data infrastructure | 500 | docs/security/README.md, testing/benchmarks/http_write_latency/README.md, docs/advanced/k-means-clustering/README.md |
| RAG / retrieval / knowledge | 500 | docs/advanced/embeddings/README.md, docs/README.md, testing/benchmarks/grpc_vs_bolt/README.md |
| Security / supply chain | 348 | docs/security/README.md, docs/README.md, docs/compliance/README.md |
| Cloud native / infrastructure | 282 | docs/README.md, docs/getting-started/README.md, docs/operations/README.md |
| Local LLM / inference | 265 | docs/advanced/embeddings/README.md, docs/advanced/README.md, AGENTS.md |
| Observability / evaluation | 224 | docs/README.md, .agents/README.md, testing/benchmarks/grpc_vs_bolt/README.md |
| Data / ML platform | 210 | testing/benchmarks/grpc_vs_bolt/README.md, docs/advanced/k-means-clustering/README.md, neural/docs/README.md |
| AI agent / orchestration | 183 | docs/ai-agents/README.md, docs/README.md, .agents/README.md |
| MCP / agent interoperability | 121 | docs/ai-agents/README.md, .agents/README.md, docs/features/README.md |
| Developer tools / DX | 115 | docs/ai-agents/README.md, .agents/README.md, docs/operations/README.md |
| Coding agent / software automation | 43 | docs/ai-agents/README.md, .agents/README.md, docs/skills/README.md |
| Frontend / app framework | 35 | ui/README.md, ui/package.json, ui/tsconfig.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go, Swift, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2218 |
| manifests | 40 |
| docs | 295 |
| tests | 1050 |
| ci/ops | 34 |
| spec artifacts | 24 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Homebrew | Quick Start / Homebrew / arm64 / Apple Silicon / amd64 / CPU only / What NornicDB Is / Why NornicDB Is Different / Deployment Patterns / Transactional Guarantees & Isolation / Performance Snapshot / Hybrid Retrieval Benchmarks | <p align="center" <img src="https //raw.githubusercontent.com/orneryd/NornicDB/refs/heads/main/docs/assets/logos/nornicdb logo pride.svg" alt="NornicDB Logo" width="200"/ </p <h1 align="center" NornicDB</h1 <p align="center" <strong Graph, vector, and historical truth in one database</strong <br/ Neo4j compatible • Hybrid graph + vector retrieval • Historical reads via MVCC<br/ <em Achieving Psygnosis for AI</em <p align="center" Multi arch support CPU CUDA Metal Vulkan <p align="center" </p <p align="center" <img src="https //img.shields.io/badge/version 1.1.7 success" alt="Version 1.1.7" <a href="https //coveralls.io/github/orneryd/NornicDB?branch=main" <img src="https //coveralls.io/repos |


## Key Files

### Manifests

- docs/advanced/embeddings/README.md
- docs/ai-agents/README.md
- docs/security/README.md
- docs/README.md
- .agents/README.md
- testing/benchmarks/grpc_vs_bolt/README.md
- testing/benchmarks/http_write_latency/README.md
- docs/advanced/k-means-clustering/README.md
- docs/advanced/README.md
- docs/api-reference/cypher-functions/README.md
- docs/api-reference/README.md
- docs/architecture/README.md
- docs/compliance/README.md
- docs/development/README.md
- docs/features/README.md
- docs/getting-started/README.md
- docs/neo4j-migration/README.md
- docs/operations/README.md
- docs/packaging/README.md
- docs/performance/README.md


### Spec / Docs / Prompt Artifacts

- docs/architecture/README.md
- AGENTS.md
- docs/architecture/embedding-search-examples.md
- neural/requirements.txt
- docs/architecture/embedding-search-architecture.md
- docs/architecture/embedding-search-flow-diagrams.md
- docs/architecture/embedding-search-index.md
- docs/architecture/embedding-search.md
- docs/architecture/graph-rag-nornicdb-comparison.md
- docs/architecture/indexing-memory-large-datasets.md
- docs/architecture/qdrant-collection-to-database-diagrams.md
- docs/architecture/multi-db-implementation-spec.md
- docs/architecture/clustering-roadmap.md
- docs/architecture/cognitive-slm-architecture.md
- docs/architecture/composite-db-analysis.md
- docs/architecture/cypher-parser-modes.md
- docs/architecture/multi-db-architecture.md
- docs/architecture/mvcc-lifecycle-background-work.md
- docs/architecture/neon-simd-implementation.md
- docs/architecture/norns-mythology.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| pkg | 1629 |
| docs | 218 |
| ui | 65 |
| apoc | 61 |
| scripts | 43 |
| macos | 39 |
| neural | 36 |
| cmd | 27 |
| docker | 18 |
| .github | 13 |
| deploy | 10 |
| .agents | 9 |
| testing | 9 |
| lib | 6 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 1687 |
| .md | 270 |
| .tsx | 36 |
| .sh | 29 |
| .py | 26 |
| .yml | 17 |
| .yaml | 15 |
| .txt | 14 |
| [no-ext] | 13 |
| .ts | 12 |
| .swift | 11 |
| .svg | 10 |
| .json | 8 |
| .bat | 5 |
| .comp | 4 |
| .plist | 4 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
