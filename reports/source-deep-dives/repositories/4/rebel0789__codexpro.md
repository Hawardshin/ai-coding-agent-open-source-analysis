# rebel0789/codexpro Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Use ChatGPT Developer Mode as a local coding agent for your repo through MCP.

## 요약

- 조사 단위: `sources/rebel0789__codexpro` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 50 files, 5 directories, depth score 78, key references 6개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.example.md이고, 의존성 단서는 modelcontextprotocol, express, 검증/운영 단서는 CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | rebel0789/codexpro |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | JavaScript |
| Stars | 239 |
| Forks | 22 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/rebel0789__codexpro](../../../../sources/rebel0789__codexpro) |
| Existing report | [reports/global-trending/repositories/rebel0789__codexpro.md](../../../global-trending/repositories/rebel0789__codexpro.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 50 / 5 |
| Max observed depth | 3 |
| Top directories | .github, docs, scripts, src |
| Top extensions | .ts: 14, .md: 12, .mjs: 9, .json: 3, .svg: 3, (none): 3, .html: 2, .css: 1, .env: 1, .js: 1, .yml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 9 |
| src | source boundary | 3 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc -p tsconfig.json |
| build | package.json | prepack | npm run build |
| serve-dev | package.json | start | node dist/stdio.js |
| serve-dev | package.json | start:stdio | node dist/stdio.js |
| serve-dev | package.json | start:http | node dist/http.js |
| serve-dev | package.json | dev:stdio | tsx src/stdio.ts |
| serve-dev | package.json | dev:http | tsx src/http.ts |
| utility | package.json | smoke | node scripts/smoke.mjs && node scripts/http-smoke.mjs && node scripts/pro-smoke.mjs && node scripts/doctor-smoke.mjs && node scripts/settings-smoke.mjs && node scripts/execute-handoff-smoke.mjs |
| utility | package.json | doctor | node scripts/codexpro.mjs doctor |
| utility | package.json | connect | node scripts/codexpro.mjs |
| utility | package.json | connect:setup | node scripts/codexpro.mjs setup |
| utility | package.json | connect:local | node scripts/codexpro.mjs --tunnel none |
| utility | package.json | connect:cloudflare | node scripts/codexpro.mjs --tunnel cloudflare |
| utility | package.json | connect:chatgpt | node scripts/codexpro.mjs --tunnel cloudflare |
| utility | package.json | connect:stable | node scripts/codexpro.mjs --tunnel cloudflare-named |
| utility | package.json | connect:ngrok | node scripts/codexpro.mjs ngrok |
| build | package.json | pro:bundle | node scripts/pro-bundle.mjs |
| utility | package.json | pro:apply | node scripts/pro-apply.mjs |
| entrypoint | package.json bin | codexpro.mjs | scripts/codexpro.mjs |
| entrypoint | package.json bin | stdio.js | dist/stdio.js |
| entrypoint | package.json bin | http.js | dist/http.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | express |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [AGENTS.example.md](../../../../sources/rebel0789__codexpro/AGENTS.example.md) | agentRuntime signal |
| entrypoints | [src/server.ts](../../../../sources/rebel0789__codexpro/src/server.ts) | entrypoints signal |
| config | [package.json](../../../../sources/rebel0789__codexpro/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/rebel0789__codexpro/tsconfig.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/rebel0789__codexpro/.github/workflows/ci.yml) | ci support |
| manifest-entrypoint | [scripts/codexpro.mjs](../../../../sources/rebel0789__codexpro/scripts/codexpro.mjs) | package manifest entrypoint |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/server.ts](../../../../sources/rebel0789__codexpro/src/server.ts) |
| agentRuntime | 1 | [AGENTS.example.md](../../../../sources/rebel0789__codexpro/AGENTS.example.md) |
| mcp | 0 | not obvious |
| retrieval | 1 | [docs/index.html](../../../../sources/rebel0789__codexpro/docs/index.html) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 2 | [SECURITY.md](../../../../sources/rebel0789__codexpro/SECURITY.md)<br>[src/guard.ts](../../../../sources/rebel0789__codexpro/src/guard.ts) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/rebel0789__codexpro/.github/workflows/ci.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 9 | [README_ZH.md](../../../../sources/rebel0789__codexpro/README_ZH.md)<br>[README.md](../../../../sources/rebel0789__codexpro/README.md)<br>[docs/favicon.svg](../../../../sources/rebel0789__codexpro/docs/favicon.svg)<br>[docs/index.html](../../../../sources/rebel0789__codexpro/docs/index.html)<br>[docs/og.svg](../../../../sources/rebel0789__codexpro/docs/og.svg)<br>[docs/script.js](../../../../sources/rebel0789__codexpro/docs/script.js)<br>[docs/star.svg](../../../../sources/rebel0789__codexpro/docs/star.svg)<br>[docs/styles.css](../../../../sources/rebel0789__codexpro/docs/styles.css) |
| config | 2 | [package.json](../../../../sources/rebel0789__codexpro/package.json)<br>[tsconfig.json](../../../../sources/rebel0789__codexpro/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/rebel0789__codexpro/.github/workflows/ci.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [SECURITY.md](../../../../sources/rebel0789__codexpro/SECURITY.md)<br>[src/guard.ts](../../../../sources/rebel0789__codexpro/src/guard.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious; test/eval path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `AGENTS.example.md`, `src/server.ts`, `package.json`.
2. Trace execution through entrypoints: `src/server.ts`.
3. Map agent/tool runtime through: `AGENTS.example.md`.
4. Inspect retrieval/memory/indexing through: `docs/index.html`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Use ChatGPT Developer Mode as a local coding agent for your repo through MCP.. 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, modelcontextprotocol, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
