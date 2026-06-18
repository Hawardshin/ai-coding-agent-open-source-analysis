# infiniflow/infinity

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/infiniflow/infinity |
| local path | sources/infiniflow__infinity |
| HEAD | ef18b5e |
| stars/forks | 4571 / 426 |
| language | C++ |
| license |  |
| pushedAt | 2026-06-16T12:29:38Z |
| trendScore / priorityScore | 160 / 439 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Database / data infrastructure | 199 | python/benchmark/README.md, AGENTS.md, go/README.md |
| RAG / retrieval / knowledge | 133 | python/benchmark/legacy_benchmark/README.md, python/benchmark/README.md, src/storage/knn_index/plaid/README.md |
| Observability / evaluation | 114 | python/benchmark/legacy_benchmark/README.md, python/benchmark/README.md, AGENTS.md |
| Cloud native / infrastructure | 98 | README.md, third_party/curlpp/Readme.md, gui/package.json |
| Developer tools / DX | 79 | example/README.md, AGENTS.md, go/README.md |
| Security / supply chain | 58 | gui/README.md, third_party/minio-cpp/README.md, example/benchmark_plaid_index.py |
| Data / ML platform | 44 | python/benchmark/legacy_benchmark/README.md, python/benchmark/README.md, src/storage/knn_index/plaid/README.md |
| Frontend / app framework | 37 | gui/next.config.js, gui/package.json, gui/tsconfig.json |
| AI agent / orchestration | 5 | AGENTS.md, .github/copilot-instructions.md |
| MCP / agent interoperability | 3 | .github/copilot-instructions.md |
| Coding agent / software automation | 2 | gui/app/(dashboard)/database-card.tsx |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 4020 |
| manifests | 31 |
| docs | 47 |
| tests | 407 |
| ci/ops | 5 |
| spec artifacts | 3 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | ⚡️ Performance / 🌟 Key Features / 🚀 Incredibly fast / 🔮 Powerful search / 🍔 Rich data types / 🎁 Ease-of-use / 🎮 Get Started / Prerequisites / Install Infinity server / Install Infinity client | <div align="center" <img width="187" src="https //github.com/infiniflow/infinity/assets/7248/015e1f02 1f7f 4b09 a0c2 9d261cd4858b" alt="Infinity logo"/ </div <p align="center" <b The AI native database built for LLM applications, providing incredibly fast hybrid search of dense embedding, sparse embedding, tensor and full text</b </p <h4 align="center" <a href="https //infiniflow.org/docs/dev/category/get started" Document</a <a href="https //infiniflow.org/docs/dev/benchmark" Benchmark</a <a href="https //twitter.com/infiniflowai" Twitter</a <a href="https //discord.gg/jEfRUwEYEV" Discord</a </h4 Infinity is a cutting edge AI native database that provides a wide range of search capabilities |


## Key Files

### Manifests

- example/README.md
- client/cpp/README.md
- python/benchmark/legacy_benchmark/README.md
- python/benchmark/README.md
- src/storage/invertedindex/fst/README.md
- src/storage/knn_index/plaid/README.md
- AGENTS.md
- go/README.md
- gui/README.md
- python/README.md
- python/test_cluster/README.md
- README.md
- test/data/tpch/README.md
- test/data/txt/README.md
- tools/README.md
- python/infinity_sdk/README.md
- third_party/base64/README.md
- third_party/cppjieba/deps/limonp/README.md
- third_party/cppjieba/README.md
- third_party/curl/include/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- .github/copilot-instructions.md
- docs/references/benchmark.md


### Agent Instruction Files

- AGENTS.md
- .github/copilot-instructions.md


## Top Directories

| dir | count |
| --- | --- |
| src | 2010 |
| third_party | 1044 |
| test | 366 |
| python | 197 |
| gui | 103 |
| tools | 59 |
| example | 58 |
| go | 52 |
| benchmark | 21 |
| conf | 17 |
| cmake | 16 |
| docs | 14 |
| ports | 14 |
| .github | 13 |


## Extension Distribution

| ext | count |
| --- | --- |
| .cpp | 1139 |
| .cppm | 817 |
| .h | 563 |
| .py | 270 |
| .c | 231 |
| .slt | 166 |
| .toml | 91 |
| .s | 74 |
| .asm | 58 |
| .tsx | 58 |
| .hpp | 55 |
| .go | 49 |
| .csv | 48 |
| .json | 45 |
| .cmake | 39 |
| .md | 39 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
