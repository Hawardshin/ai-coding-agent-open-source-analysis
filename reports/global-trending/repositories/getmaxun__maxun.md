# getmaxun/maxun

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/getmaxun/maxun |
| local path | sources/getmaxun__maxun |
| HEAD | d581502 |
| stars/forks | 15927 / 1329 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-16T16:21:26Z |
| trendScore / priorityScore | 150 / 419 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 240 | README.md, docker-compose.yml, docs/nginx.conf |
| Frontend / app framework | 156 | docker-compose.yml, package.json, server/tsconfig.json |
| Developer tools / DX | 133 | README.md, package.json, server/src/mcp-worker.ts |
| Database / data infrastructure | 99 | docker-compose.yml, docs/self-hosting-docker.md, server/src/db/config/database.js |
| Local LLM / inference | 58 | server/src/routes/storage.ts, server/src/sdk/browserAgent.ts, src/api/storage.ts |
| MCP / agent interoperability | 48 | README.md, package.json, server/tsconfig.mcp.json |
| Security / supply chain | 47 | package.json, server/src/routes/storage.ts, server/src/storage/mino.ts |
| AI agent / orchestration | 18 | README.md, server/src/sdk/browserAgent.ts, server/src/browser-management/classes/RemoteBrowser.ts |
| Observability / evaluation | 12 | src/helpers/clientListExtractor.ts, src/helpers/clientPaginationDetector.ts, maxun-core/src/browserSide/scraper.js |
| Coding agent / software automation | 8 | .github/COMMIT_CONVENTION.md, public/locales/es.json |
| Data / ML platform | 1 | public/locales/en.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 255 |
| manifests | 13 |
| docs | 8 |
| tests | 0 |
| ci/ops | 4 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Sponsors / What is Maxun? / Ecosystem / How Does It Work? / 1. Extract / Example: Extract 10 Property Listings from Airbnb / Example: Extract Names, Rating & Duration of Top 50 Movies from IMDb / 2. Scrape / 3. Crawl / 4. Search | <h2 align="center" <div <a href="https //www.maxun.dev/?ref=ghread" <img src="/src/assets/maxunlogo.png" width="70" / <br Maxun </a </div Turn Any Website Into A Structured API <br </h2 <p align="center" ✨ The unified open source no code platform for real time web scraping, crawling, search and AI data extraction ✨ <p align="center" <a href="https //app.maxun.dev/?ref=ghread" <b Go To App</b </a • <a href="https //docs.maxun.dev/?ref=ghread" <b Documentation</b </a • <a href="https //www.maxun.dev/?ref=ghread" <b Website</b </a • <a href="https //discord.gg/5GbPjBUkws" <b Discord</b </a • <a href="https //www.youtube.com/@MaxunOSS?ref=ghread" <b Watch Tutorials</b </a <br / <br / <a href="ht |


## Key Files

### Manifests

- maxun-core/README.md
- README.md
- browser/Dockerfile
- browser/package.json
- browser/tsconfig.json
- docker-compose.yml
- maxun-core/package.json
- maxun-core/tsconfig.json
- package.json
- server/tsconfig.json
- tsconfig.json
- package.frontend.json
- server/tsconfig.mcp.json


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| src | 98 |
| server | 74 |
| legacy | 21 |
| public | 18 |
| maxun-core | 14 |
| browser | 5 |
| .github | 3 |
| docs | 2 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .sequelizerc | 1 |
| CONTRIBUTING.md | 1 |
| docker-compose.yml | 1 |
| docker-entrypoint.sh | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 97 |
| .tsx | 92 |
| .json | 17 |
| .svg | 12 |
| .js | 10 |
| [no-ext] | 9 |
| .md | 7 |
| .sh | 3 |
| .conf | 2 |
| .yml | 2 |
| .backend | 1 |
| .css | 1 |
| .frontend | 1 |
| .html | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
