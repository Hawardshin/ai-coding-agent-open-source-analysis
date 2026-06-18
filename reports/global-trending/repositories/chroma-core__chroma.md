# chroma-core/chroma

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/chroma-core/chroma |
| local path | sources/chroma-core__chroma |
| HEAD | b8bf764 |
| stars/forks | 28464 / 2326 |
| language | Rust |
| license | Apache-2.0 |
| pushedAt | 2026-06-17T23:31:43Z |
| trendScore / priorityScore | 149 / 434 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 196 | clients/js/examples/node/README.md, clients/js/examples/README.md, docs/mintlify/AGENTS.md |
| Cloud native / infrastructure | 101 | examples/basic_functionality/authz/README.md, examples/deployments/aws-terraform/README.md, examples/deployments/do-terraform/README.md |
| Observability / evaluation | 55 | examples/observability/README.md, sample_apps/generative_benchmarking/README.md, chromadb/telemetry/README.md |
| Local LLM / inference | 44 | clients/js/packages/chromadb-client/README.md, clients/new-js/packages/ai-embeddings/all/README.md, clients/new-js/packages/ai-embeddings/huggingface-server/README.md |
| Coding agent / software automation | 35 | AGENTS.md, go/README.md, rust/index/src/sparse/README.md |
| Developer tools / DX | 31 | docs/mintlify/AGENTS.md, examples/deployments/aws-terraform/README.md, examples/deployments/do-terraform/README.md |
| Database / data infrastructure | 26 | go/README.md, rust/chroma/README.md, rust/spanner-migrations/README.md |
| Frontend / app framework | 16 | examples/README.md, rust/metering-macros/README.md, CLAUDE.md |
| Security / supply chain | 13 | examples/basic_functionality/authz/README.md, examples/deployments/aws-terraform/README.md, clients/new-js/packages/ai-embeddings/huggingface-server/README.md |
| AI agent / orchestration | 7 | docs/mintlify/AGENTS.md, AGENTS.md, clients/js/examples/node/pnpm-lock.yaml |
| Data / ML platform | 7 | sample_apps/generative_benchmarking/README.md, rust/index/src/fulltext/README.md |
| MCP / agent interoperability | 2 |  |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1976 |
| manifests | 40 |
| docs | 221 |
| tests | 313 |
| ci/ops | 82 |
| spec artifacts | 10 |
| agent instruction files | 4 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | for javascript, npm install chromadb! | for javascript, npm install chromadb! / for client-server mode, chroma run --path /chroma_db_path / Chroma Cloud / API / setup Chroma in-memory, for easy prototyping. Can add persistence easily! / Create collection. get_collection, get_or_create_collection, delete_collection also available! / Add docs to the collection. Can also update and delete. Row-based API coming soon! / Query/search 2 most similar results. You can also .get by id / Get involved / License | ! Chroma ./docs/assets/chroma wordmark color.png gh light mode only ! Chroma ./docs/assets/chroma wordmark white.png gh dark mode only <p align="center" <b Chroma the open source data infrastructure for AI</b . <br / </p <p align="center" <a href="https //discord.gg/MMeYNTmh3x" target=" blank" <img src="https //img.shields.io/discord/1073293645303795742?cacheSeconds=3600" alt="Discord" </a <a href="https //github.com/chroma core/chroma/blob/master/LICENSE" target=" blank" <img src="https //img.shields.io/badge/License Apache 2.0 blue.svg" alt="License" </a <a href="https //docs.trychroma.com/" target=" blank" Docs </a <a href="https //www.trychroma.com/" target=" blank" Homepage </a </p Chro |


## Key Files

### Manifests

- clients/js/examples/node/README.md
- clients/js/examples/README.md
- docs/mintlify/AGENTS.md
- examples/README.md
- examples/basic_functionality/authz/README.md
- examples/chat_with_your_documents/README.md
- examples/deployments/aws-terraform/README.md
- examples/deployments/do-terraform/README.md
- examples/deployments/google-cloud-compute/README.md
- examples/deployments/render-terraform/README.md
- examples/gemini/README.md
- examples/observability/README.md
- examples/xai/README.md
- sample_apps/generative_benchmarking/README.md
- docs/mintlify/README.md
- docs/scripts/README.md
- chromadb/utils/embedding_functions/schemas/README.md
- clients/js/packages/chromadb-client/README.md
- clients/js/packages/chromadb-core/src/generated/README.md
- clients/js/packages/chromadb/README.md


### Spec / Docs / Prompt Artifacts

- docs/mintlify/AGENTS.md
- AGENTS.md
- CLAUDE.md
- examples/chat_with_your_documents/requirements.txt
- examples/gemini/requirements.txt
- examples/xai/requirements.txt
- sample_apps/generative_benchmarking/requirements.txt
- clients/python/requirements.txt
- requirements.txt
- docs/mintlify/.claude/settings.json


### Agent Instruction Files

- docs/mintlify/AGENTS.md
- AGENTS.md
- CLAUDE.md
- docs/mintlify/.claude/settings.json


## Top Directories

| dir | count |
| --- | --- |
| rust | 805 |
| clients | 337 |
| chromadb | 241 |
| docs | 145 |
| go | 140 |
| examples | 61 |
| sample_apps | 48 |
| k8s | 45 |
| .github | 43 |
| schemas | 37 |
| bin | 27 |
| idl | 11 |
| deployments | 6 |
| .config | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 653 |
| .py | 240 |
| .ts | 230 |
| .mdx | 131 |
| .json | 122 |
| .go | 98 |
| .sql | 95 |
| .md | 79 |
| .yaml | 77 |
| .toml | 46 |
| [no-ext] | 36 |
| .yml | 35 |
| .sh | 24 |
| .ipynb | 16 |
| .txt | 15 |
| .tf | 12 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
