# dcostenco/prism-coder

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/dcostenco/prism-coder |
| local path | sources/dcostenco__prism-coder |
| HEAD | 897edb9 |
| stars/forks | 147 / 24 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-16T20:20:00Z |
| trendScore / priorityScore | 163 / 499 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/adversarial-eval-demo/README.md, examples/langgraph-agent/README.md, examples/multi-agent-hivemind/README.md |
| MCP / agent interoperability | 500 | examples/adversarial-eval-demo/README.md, examples/langgraph-agent/README.md, examples/multi-agent-hivemind/README.md |
| Local LLM / inference | 387 | tests/benchmarks/cascade-14b-32b-opus/README.md, tests/benchmarks/prism-routing-100/README.md, README.md |
| Developer tools / DX | 374 | examples/langgraph-agent/README.md, examples/langgraph-ts/README.md, examples/vercel-ai-sdk-prism/README.md |
| RAG / retrieval / knowledge | 324 | examples/langgraph-agent/README.md, examples/langgraph-ts/README.md, examples/vercel-ai-sdk-prism/README.md |
| Security / supply chain | 307 | examples/adversarial-eval-demo/README.md, examples/langgraph-ts/README.md, README.md |
| Observability / evaluation | 236 | examples/adversarial-eval-demo/README.md, examples/multi-agent-hivemind/README.md, tests/benchmarks/cascade-14b-32b-opus/README.md |
| Database / data infrastructure | 234 | examples/multi-agent-hivemind/README.md, tests/README.md, README.md |
| Coding agent / software automation | 157 | examples/langgraph-agent/README.md, examples/multi-agent-hivemind/README.md, README.md |
| Data / ML platform | 150 | examples/adversarial-eval-demo/README.md, examples/langgraph-agent/README.md, tests/README.md |
| Cloud native / infrastructure | 28 | README.md, docker-compose.yml, vertex-ai/test_pipeline_benchmark.ts |
| Frontend / app framework | 23 | examples/langgraph-ts/README.md, examples/vercel-ai-sdk-prism/README.md, examples/vercel-ai-sdk-prism/package.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 428 |
| manifests | 20 |
| docs | 58 |
| tests | 120 |
| ci/ops | 9 |
| spec artifacts | 3 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Prism Coder | Prism Coder / Quickstart / What it does / Mind Palace — persistent memory that survives across sessions / Knowledge Graph — semantic + keyword + graph search / Session History — immutable audit trail / Session Drift Detection / Behavioral Verification — catch bad edits before they happen / Time Travel / Cognitive Routing | Prism Coder Give your AI agent memory that lasts. Persistent sessions, knowledge graphs, and offline tool routing — fully local and free. ! npm https //img.shields.io/npm/v/prism mcp server?color=cb0000&label=npm https //www.npmjs.com/package/prism mcp server ! MCP Registry https //img.shields.io/badge/MCP Registry listed 00ADD8 https //github.com/modelcontextprotocol/servers ! License AGPL 3.0 https //img.shields.io/badge/License AGPL 3.0 blue.svg LICENSE ! Models on HuggingFace https //img.shields.io/badge/🤗 prism coder yellow https //huggingface.co/dcostenco <p align="center" <img src="docs/v11 hivemind multi agent dashboard.jpg" alt="Prism Coder — Mind Palace Dashboard with Knowledge Gr |


## Key Files

### Manifests

- examples/adversarial-eval-demo/README.md
- examples/langgraph-agent/README.md
- examples/multi-agent-hivemind/README.md
- examples/langgraph-ts/README.md
- examples/skills/aba-precision-protocol/README.md
- examples/vercel-ai-sdk-prism/README.md
- tests/benchmarks/cascade-14b-32b-opus/README.md
- tests/benchmarks/locomo-plus-cognitive/README.md
- tests/benchmarks/prism-routing-100/README.md
- tests/README.md
- README.md
- GEMINI.md
- examples/vercel-ai-sdk-prism/package.json
- examples/vercel-ai-sdk-prism/tsconfig.json
- docker-compose.yml
- Dockerfile
- package.json
- tsconfig.json
- packages/prism-coder/package.json
- tsconfig.tsbuildinfo


### Spec / Docs / Prompt Artifacts

- GEMINI.md
- docs/ARCHITECTURE.md
- ROADMAP.md


### Agent Instruction Files

- GEMINI.md


## Top Directories

| dir | count |
| --- | --- |
| src | 144 |
| tests | 117 |
| examples | 30 |
| docs | 28 |
| supabase | 27 |
| scripts | 10 |
| .github | 8 |
| adapters | 7 |
| vertex-ai | 6 |
| skills | 5 |
| .agents | 3 |
| packages | 2 |
| .env.example | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 259 |
| .md | 55 |
| .py | 28 |
| .sql | 27 |
| .json | 12 |
| [no-ext] | 11 |
| .yml | 9 |
| .js | 4 |
| .mjs | 4 |
| .sh | 4 |
| .txt | 3 |
| .example | 2 |
| .html | 2 |
| .tsx | 2 |
| .32b | 1 |
| .cjs | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
