# 0xMassi/webclaw

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/0xMassi/webclaw |
| local path | sources/0xMassi__webclaw |
| HEAD | 3caca67 |
| stars/forks | 1416 / 157 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T15:14:56Z |
| trendScore / priorityScore | 172 / 460 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 248 | examples/README.md, examples/proxy-backed-crawling/README.md, README.md |
| MCP / agent interoperability | 161 | examples/mcp-web-scraping/README.md, examples/README.md, README.md |
| Developer tools / DX | 117 | examples/html-to-markdown-rag/README.md, examples/mcp-web-scraping/README.md, examples/README.md |
| Local LLM / inference | 98 | examples/README.md, README.md, CLAUDE.md |
| Frontend / app framework | 94 | benchmarks/README.md, CLAUDE.md, benchmarks/facts.json |
| Observability / evaluation | 58 | examples/proxy-backed-crawling/README.md, benchmarks/README.md, README.md |
| AI agent / orchestration | 56 | examples/html-to-markdown-rag/README.md, examples/README.md, README.md |
| Coding agent / software automation | 55 | examples/mcp-web-scraping/README.md, examples/README.md, README.md |
| Security / supply chain | 42 | .github/workflows/release.yml, crates/webclaw-core/src/llm/cleanup.rs, crates/webclaw-fetch/src/client.rs |
| Data / ML platform | 40 | examples/README.md, benchmarks/README.md, CLAUDE.md |
| Database / data infrastructure | 32 | CLAUDE.md, benchmarks/facts.json, crates/webclaw-core/src/llm/mod.rs |
| RAG / retrieval / knowledge | 20 | examples/html-to-markdown-rag/README.md, examples/README.md, benchmarks/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 167 |
| manifests | 21 |
| docs | 16 |
| tests | 2 |
| ci/ops | 6 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Example Domain | Example Domain / Install / Agent setup / Homebrew / Prebuilt binaries / Docker / Cargo / Quick Start / Scrape one page / Return LLM-optimized text | <p align="center" <a href="https //webclaw.io" <img src=".github/banner.png" alt="webclaw" width="760" / </a </p <h1 align="center" webclaw</h1 <p align="center" <strong Turn websites into clean markdown, JSON, and LLM ready context.</strong <br/ <sub CLI, MCP server, REST API, and SDKs for AI agents and RAG pipelines.</sub </p <p align="center" <a href="https //github.com/0xMassi/webclaw/stargazers" <img src="https //shieldcn.dev/github/stars/0xMassi/webclaw.svg?variant=branded&logo=github" alt="Stars" / </a <a href="https //github.com/0xMassi/webclaw/releases" <img src="https //shieldcn.dev/github/tag/0xMassi/webclaw.svg?variant=branded&logo=rust" alt="Version" / </a <a href="https //githu |


## Key Files

### Manifests

- examples/html-to-markdown-rag/README.md
- examples/mcp-web-scraping/README.md
- examples/README.md
- examples/cloudflare-diagnostics/README.md
- examples/firecrawl-compatible-api/README.md
- examples/proxy-backed-crawling/README.md
- benchmarks/README.md
- README.md
- packages/create-webclaw/README.md
- CLAUDE.md
- crates/webclaw-cli/Cargo.toml
- crates/webclaw-llm/Cargo.toml
- crates/webclaw-mcp/Cargo.toml
- Cargo.toml
- docker-compose.yml
- Dockerfile
- crates/webclaw-core/Cargo.toml
- crates/webclaw-fetch/Cargo.toml
- crates/webclaw-pdf/Cargo.toml
- crates/webclaw-server/Cargo.toml


### Spec / Docs / Prompt Artifacts

- CLAUDE.md


### Agent Instruction Files

- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| crates | 120 |
| benchmarks | 7 |
| examples | 6 |
| .github | 4 |
| packages | 4 |
| .cargo | 1 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .mcp.json | 1 |
| assets | 1 |
| Cargo.toml | 1 |
| CHANGELOG.md | 1 |
| CLAUDE.md | 1 |
| CODE_OF_CONDUCT.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 107 |
| .md | 16 |
| .toml | 10 |
| .html | 6 |
| .json | 6 |
| .yml | 5 |
| .sh | 4 |
| [no-ext] | 4 |
| .txt | 3 |
| .ci | 1 |
| .example | 1 |
| .mjs | 1 |
| .mp4 | 1 |
| .py | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
