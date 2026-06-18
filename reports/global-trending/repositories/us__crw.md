# us/crw

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/us/crw |
| local path | sources/us__crw |
| HEAD | 06acb83 |
| stars/forks | 187 / 16 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T22:05:23Z |
| trendScore / priorityScore | 144 / 459 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/README.md, crates/crw-cli/README.md, crates/crw-mcp/README.md |
| MCP / agent interoperability | 500 | examples/README.md, examples/openclaw/README.md, examples/pi/README.md |
| RAG / retrieval / knowledge | 493 | crates/crw-extract/README.md, docs/llms-full.txt, docs/agent-onboarding/index.html |
| Cloud native / infrastructure | 353 | crates/crw-cli/README.md, crates/crw-mcp/README.md, README.md |
| Developer tools / DX | 320 | examples/README.md, crates/crw-cli/README.md, crates/crw-mcp/README.md |
| Coding agent / software automation | 261 | examples/README.md, crates/crw-mcp/README.md, README.md |
| Data / ML platform | 191 | README.md, crates/crw-browse/README.md, crates/crw-extract/README.md |
| Observability / evaluation | 127 | README.md, crates/crw-cli/Cargo.toml, crates/crw-mcp/Cargo.toml |
| Security / supply chain | 46 | README.md, crates/crw-crawl/README.md, docker-compose.yml |
| Database / data infrastructure | 40 | README.md, crates/crw-server/README.md, docker-compose.yml |
| Frontend / app framework | 8 | blog/crw-vs-tavily-search-api-benchmark.md, blog/langgraph-web-scraping-agent.md, blog/web-search-api-for-ai-agents.md |
| Local LLM / inference | 5 | blog/crw-v0-7-0-llm-release.md, blog/langflow-rag-crw.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 610 |
| manifests | 40 |
| docs | 267 |
| tests | 69 |
| ci/ops | 15 |
| spec artifacts | 4 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | /v1/scrape — URL → markdown / HTML / JSON / links | Why fastCRW? / Comparison Table / Quickstart / /v1/scrape — URL → markdown / HTML / JSON / links / /v1/scrape + formats:["json"] — structured JSON extraction via a JSON Schema / /v1/crawl — async multi-page job (returns a job id; poll with /v1/crawl/:id) / Self-host (no auth, localhost) — single docker command / Why Rust? / MCP + SDK quickstart / Self-host vs Managed | <p align="center" <img src="docs/logo animation.gif" alt="fastCRW" width="220" / </p <h1 align="center" fastCRW</h1 <p align="center" Self hosted, Rust native web crawler &amp; scraper for AI agents </p The open source alternative to Firecrawl. One static binary, ~50 MB RAM idle, Firecrawl compatible REST API on both /v1/ and /v2/ scrape, crawl, map, search, extract, plus v2 batch & parse — a drop in for the official Firecrawl SDKs — plus first class MCP. Self host free under AGPL 3.0, or hit our managed API at api.fastcrw.com . Reproducible 63.74% truth recall on the public 1,000 URL dataset diagnose 3way.py , 2026 05 08 — see fastcrw.com/benchmarks https //fastcrw.com/benchmarks . Built in |


## Key Files

### Manifests

- examples/README.md
- examples/openclaw/README.md
- examples/pi/README.md
- crates/crw-cli/README.md
- crates/crw-mcp/README.md
- conformance/README.md
- README.md
- crates/crw-browse/README.md
- crates/crw-core/README.md
- crates/crw-crawl/README.md
- crates/crw-extract/README.md
- crates/crw-renderer/README.md
- crates/crw-server/README.md
- sdks/python/README.md
- sdks/typescript/README.md
- crates/crw-cli/Cargo.toml
- crates/crw-mcp-proto/Cargo.toml
- crates/crw-mcp/Cargo.toml
- mcp/crw-mcp-darwin-arm64/package.json
- mcp/crw-mcp-darwin-x64/package.json


### Spec / Docs / Prompt Artifacts

- .github/workflows/claude.yml
- docs/architecture/index.html
- docs/docs/architecture.md
- ROADMAP.md


### Agent Instruction Files

- .github/workflows/claude.yml


## Top Directories

| dir | count |
| --- | --- |
| crates | 220 |
| docs | 160 |
| blog | 75 |
| sdks | 31 |
| scripts | 28 |
| conformance | 22 |
| .github | 17 |
| bench | 8 |
| mcp | 8 |
| examples | 5 |
| plans | 5 |
| tests | 3 |
| .dockerignore | 1 |
| .githooks | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 186 |
| .md | 157 |
| .html | 101 |
| .py | 35 |
| .json | 32 |
| .sh | 25 |
| .toml | 19 |
| .yml | 17 |
| [no-ext] | 11 |
| .js | 6 |
| .ts | 6 |
| .svg | 4 |
| .mjs | 3 |
| .txt | 3 |
| .css | 1 |
| .dat | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
