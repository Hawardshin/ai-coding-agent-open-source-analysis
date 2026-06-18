# datopian/portaljs Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

🌀 AI-native framework for building data portals. Scaffold a full portal from a brief and load datasets in minutes with agentic skills — any backend (CKAN, GitHub, Frictionless).

## 요약

- 조사 단위: `sources/datopian__portaljs` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,325 files, 347 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=site/public/static/img/cloud-docs/mcp-claude-add-connector.png, site/public/static/img/cloud-docs/mcp-claude-connector-url.png, site/public/static/img/cloud-docs/mcp-claude-funcs.png이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | datopian/portaljs |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 2282 |
| Forks | 332 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/datopian__portaljs](../../../../sources/datopian__portaljs) |
| Existing report | [reports/global-trending/repositories/datopian__portaljs.md](../../../global-trending/repositories/datopian__portaljs.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2325 / 347 |
| Max observed depth | 8 |
| Top directories | .changeset, .claude, .claude-plugin, .github, assets, cloud, examples, packages, scripts, site, tests |
| Top extensions | .md: 534, .html: 392, .png: 354, .json: 266, .tsx: 236, .ts: 113, .webp: 100, .js: 55, .svg: 51, .jpg: 45, (none): 34, .mdown: 31 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 27 |
| packages/core | packages workspace | 17 |
| examples/openspending | examples workspace | 12 |
| examples/ckan-ssg | examples workspace | 6 |
| packages/ckan-api-client-js | packages workspace | 5 |
| examples/turing | examples workspace | 4 |
| packages/ckan | packages workspace | 4 |
| packages/create-portaljs | packages workspace | 4 |
| examples/ckan | examples workspace | 3 |
| examples/fivethirtyeight | examples workspace | 2 |
| examples/github-backed-catalog | examples workspace | 2 |
| examples/learn | examples workspace | 2 |
| examples/portaljs-catalog | examples workspace | 2 |
| examples/portaljs-template | examples workspace | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| cloud | top-level component | 1 |
| examples | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | changeset | changeset |
| build | package.json | release | changeset publish |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | react |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [site/public/static/img/cloud-docs/mcp-claude-add-connector.png](../../../../sources/datopian__portaljs/site/public/static/img/cloud-docs/mcp-claude-add-connector.png) | mcp signal |
| mcp | [site/public/static/img/cloud-docs/mcp-claude-connector-url.png](../../../../sources/datopian__portaljs/site/public/static/img/cloud-docs/mcp-claude-connector-url.png) | mcp signal |
| mcp | [site/public/static/img/cloud-docs/mcp-claude-funcs.png](../../../../sources/datopian__portaljs/site/public/static/img/cloud-docs/mcp-claude-funcs.png) | mcp signal |
| mcp | [site/public/static/img/cloud-docs/mcp-claude-query.png](../../../../sources/datopian__portaljs/site/public/static/img/cloud-docs/mcp-claude-query.png) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/datopian__portaljs/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/skill-triggering/run-all.sh](../../../../sources/datopian__portaljs/tests/skill-triggering/run-all.sh) | agentRuntime signal |
| agentRuntime | [tests/skill-triggering/run-test.sh](../../../../sources/datopian__portaljs/tests/skill-triggering/run-test.sh) | agentRuntime signal |
| agentRuntime | [tests/skill-triggering/prompts/add-chart.txt](../../../../sources/datopian__portaljs/tests/skill-triggering/prompts/add-chart.txt) | agentRuntime signal |
| entrypoints | [site/public/static/icons/light/server.json](../../../../sources/datopian__portaljs/site/public/static/icons/light/server.json) | entrypoints signal |
| entrypoints | [site/public/static/icons/dark/server.json](../../../../sources/datopian__portaljs/site/public/static/icons/dark/server.json) | entrypoints signal |
| entrypoints | [site/public/globe/main.js](../../../../sources/datopian__portaljs/site/public/globe/main.js) | entrypoints signal |
| entrypoints | [site/public/globe/main.js.LICENSE.txt](../../../../sources/datopian__portaljs/site/public/globe/main.js.LICENSE.txt) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 12 | [site/public/static/icons/light/server.json](../../../../sources/datopian__portaljs/site/public/static/icons/light/server.json)<br>[site/public/static/icons/dark/server.json](../../../../sources/datopian__portaljs/site/public/static/icons/dark/server.json)<br>[site/public/globe/main.js](../../../../sources/datopian__portaljs/site/public/globe/main.js)<br>[site/public/globe/main.js.LICENSE.txt](../../../../sources/datopian__portaljs/site/public/globe/main.js.LICENSE.txt)<br>[packages/core/src/index.ts](../../../../sources/datopian__portaljs/packages/core/src/index.ts)<br>[packages/ckan-api-client-js/test/main.ts](../../../../sources/datopian__portaljs/packages/ckan-api-client-js/test/main.ts)<br>[packages/ckan-api-client-js/src/index.ts](../../../../sources/datopian__portaljs/packages/ckan-api-client-js/src/index.ts)<br>[packages/ckan/src/index.css](../../../../sources/datopian__portaljs/packages/ckan/src/index.css) |
| agentRuntime | 29 | [AGENTS.md](../../../../sources/datopian__portaljs/AGENTS.md)<br>[tests/skill-triggering/run-all.sh](../../../../sources/datopian__portaljs/tests/skill-triggering/run-all.sh)<br>[tests/skill-triggering/run-test.sh](../../../../sources/datopian__portaljs/tests/skill-triggering/run-test.sh)<br>[tests/skill-triggering/prompts/add-chart.txt](../../../../sources/datopian__portaljs/tests/skill-triggering/prompts/add-chart.txt)<br>[tests/skill-triggering/prompts/add-dataset.txt](../../../../sources/datopian__portaljs/tests/skill-triggering/prompts/add-dataset.txt)<br>[tests/skill-triggering/prompts/add-map.txt](../../../../sources/datopian__portaljs/tests/skill-triggering/prompts/add-map.txt)<br>[tests/skill-triggering/prompts/add-resource.txt](../../../../sources/datopian__portaljs/tests/skill-triggering/prompts/add-resource.txt)<br>[tests/skill-triggering/prompts/architect.txt](../../../../sources/datopian__portaljs/tests/skill-triggering/prompts/architect.txt) |
| mcp | 12 | [site/public/static/img/cloud-docs/mcp-claude-add-connector.png](../../../../sources/datopian__portaljs/site/public/static/img/cloud-docs/mcp-claude-add-connector.png)<br>[site/public/static/img/cloud-docs/mcp-claude-connector-url.png](../../../../sources/datopian__portaljs/site/public/static/img/cloud-docs/mcp-claude-connector-url.png)<br>[site/public/static/img/cloud-docs/mcp-claude-funcs.png](../../../../sources/datopian__portaljs/site/public/static/img/cloud-docs/mcp-claude-funcs.png)<br>[site/public/static/img/cloud-docs/mcp-claude-query.png](../../../../sources/datopian__portaljs/site/public/static/img/cloud-docs/mcp-claude-query.png)<br>[site/public/static/img/cloud-docs/mcp-copy.png](../../../../sources/datopian__portaljs/site/public/static/img/cloud-docs/mcp-copy.png)<br>[site/public/static/img/cloud-docs/mcp-demo-video.png](../../../../sources/datopian__portaljs/site/public/static/img/cloud-docs/mcp-demo-video.png)<br>[site/public/static/img/cloud-docs/mcp-server-page.png](../../../../sources/datopian__portaljs/site/public/static/img/cloud-docs/mcp-server-page.png)<br>[site/public/static/img/blog/supercharging-data-portals-with-the-portaljs-mcp-server/hero.png](../../../../sources/datopian__portaljs/site/public/static/img/blog/supercharging-data-portals-with-the-portaljs-mcp-server/hero.png) |
| retrieval | 174 | [site/specs/index.spec.js](../../../../sources/datopian__portaljs/site/specs/index.spec.js)<br>[site/public/static/img/docs/share-embed-graphs.png](../../../../sources/datopian__portaljs/site/public/static/img/docs/share-embed-graphs.png)<br>[site/public/static/img/docs/share-embed-tables.png](../../../../sources/datopian__portaljs/site/public/static/img/docs/share-embed-tables.png)<br>[site/public/static/img/docs/vega-graph-example.png](../../../../sources/datopian__portaljs/site/public/static/img/docs/vega-graph-example.png)<br>[site/public/static/img/blog/basics-of-metadata-how-it-helps-to-understand-your-data/metadata-iceberg-illustration-vector.png](../../../../sources/datopian__portaljs/site/public/static/img/blog/basics-of-metadata-how-it-helps-to-understand-your-data/metadata-iceberg-illustration-vector.png)<br>[site/public/static/img/blog/2023-06-22-Edit-your-flowershow-website/obsidian-content-book-index-2.png](../../../../sources/datopian__portaljs/site/public/static/img/blog/2023-06-22-Edit-your-flowershow-website/obsidian-content-book-index-2.png)<br>[site/public/static/img/blog/2023-06-22-Edit-your-flowershow-website/obsidian-content-book-index-3.png](../../../../sources/datopian__portaljs/site/public/static/img/blog/2023-06-22-Edit-your-flowershow-website/obsidian-content-book-index-3.png)<br>[site/public/static/img/blog/2023-06-22-Edit-your-flowershow-website/obsidian-content-book-index.png](../../../../sources/datopian__portaljs/site/public/static/img/blog/2023-06-22-Edit-your-flowershow-website/obsidian-content-book-index.png) |
| spec | 11 | [DESIGN.md](../../../../sources/datopian__portaljs/DESIGN.md)<br>[ROADMAP.md](../../../../sources/datopian__portaljs/ROADMAP.md)<br>[site/specs/index.spec.js](../../../../sources/datopian__portaljs/site/specs/index.spec.js)<br>[site/content/docs/architecture/decision-framework.md](../../../../sources/datopian__portaljs/site/content/docs/architecture/decision-framework.md)<br>[site/content/blog/vega-upgrade-spec-v3.md](../../../../sources/datopian__portaljs/site/content/blog/vega-upgrade-spec-v3.md)<br>[packages/create-portaljs/SPEC.md](../../../../sources/datopian__portaljs/packages/create-portaljs/SPEC.md)<br>[examples/openspending/content/blog/2015-04-15-announcing-a-new-architectural-roadmap-for-openspending.md](../../../../sources/datopian__portaljs/examples/openspending/content/blog/2015-04-15-announcing-a-new-architectural-roadmap-for-openspending.md)<br>[examples/openspending/content/about/fiscal-spec.md](../../../../sources/datopian__portaljs/examples/openspending/content/about/fiscal-spec.md) |
| eval | 41 | [tests/README.md](../../../../sources/datopian__portaljs/tests/README.md)<br>[tests/skill-triggering/run-all.sh](../../../../sources/datopian__portaljs/tests/skill-triggering/run-all.sh)<br>[tests/skill-triggering/run-test.sh](../../../../sources/datopian__portaljs/tests/skill-triggering/run-test.sh)<br>[tests/skill-triggering/prompts/add-chart.txt](../../../../sources/datopian__portaljs/tests/skill-triggering/prompts/add-chart.txt)<br>[tests/skill-triggering/prompts/add-dataset.txt](../../../../sources/datopian__portaljs/tests/skill-triggering/prompts/add-dataset.txt)<br>[tests/skill-triggering/prompts/add-map.txt](../../../../sources/datopian__portaljs/tests/skill-triggering/prompts/add-map.txt)<br>[tests/skill-triggering/prompts/add-resource.txt](../../../../sources/datopian__portaljs/tests/skill-triggering/prompts/add-resource.txt)<br>[tests/skill-triggering/prompts/architect.txt](../../../../sources/datopian__portaljs/tests/skill-triggering/prompts/architect.txt) |
| security | 22 | [SECURITY.md](../../../../sources/datopian__portaljs/SECURITY.md)<br>[site/public/static/icons/light/online-security.json](../../../../sources/datopian__portaljs/site/public/static/icons/light/online-security.json)<br>[site/public/static/icons/light/privacy-policy.json](../../../../sources/datopian__portaljs/site/public/static/icons/light/privacy-policy.json)<br>[site/public/static/icons/dark/online-security.json](../../../../sources/datopian__portaljs/site/public/static/icons/dark/online-security.json)<br>[site/public/static/icons/dark/privacy-policy.json](../../../../sources/datopian__portaljs/site/public/static/icons/dark/privacy-policy.json)<br>[site/components/home/Security.tsx](../../../../sources/datopian__portaljs/site/components/home/Security.tsx)<br>[examples/openspending/content/resources/gb-spending/report/publisher-audit-commission.html](../../../../sources/datopian__portaljs/examples/openspending/content/resources/gb-spending/report/publisher-audit-commission.html)<br>[cloud/auth/.gitignore](../../../../sources/datopian__portaljs/cloud/auth/.gitignore) |
| ci | 1 | [.github/workflows/release.yml](../../../../sources/datopian__portaljs/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/datopian__portaljs/AGENTS.md)<br>[CLAUDE.md](../../../../sources/datopian__portaljs/CLAUDE.md) |
| docs | 980 | [README.md](../../../../sources/datopian__portaljs/README.md)<br>[tests/README.md](../../../../sources/datopian__portaljs/tests/README.md)<br>[site/.gitignore](../../../../sources/datopian__portaljs/site/.gitignore)<br>[site/.npmrc](../../../../sources/datopian__portaljs/site/.npmrc)<br>[site/netlify.toml](../../../../sources/datopian__portaljs/site/netlify.toml)<br>[site/next-env.d.ts](../../../../sources/datopian__portaljs/site/next-env.d.ts)<br>[site/next-sitemap.config.js](../../../../sources/datopian__portaljs/site/next-sitemap.config.js)<br>[site/next.config.mjs](../../../../sources/datopian__portaljs/site/next.config.mjs) |
| config | 35 | [package.json](../../../../sources/datopian__portaljs/package.json)<br>[site/package.json](../../../../sources/datopian__portaljs/site/package.json)<br>[site/tsconfig.json](../../../../sources/datopian__portaljs/site/tsconfig.json)<br>[packages/create-portaljs/package.json](../../../../sources/datopian__portaljs/packages/create-portaljs/package.json)<br>[packages/core/package.json](../../../../sources/datopian__portaljs/packages/core/package.json)<br>[packages/core/tsconfig.json](../../../../sources/datopian__portaljs/packages/core/tsconfig.json)<br>[packages/ckan-api-client-js/package.json](../../../../sources/datopian__portaljs/packages/ckan-api-client-js/package.json)<br>[packages/ckan-api-client-js/tsconfig.json](../../../../sources/datopian__portaljs/packages/ckan-api-client-js/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 41 | [tests/README.md](../../../../sources/datopian__portaljs/tests/README.md)<br>[tests/skill-triggering/run-all.sh](../../../../sources/datopian__portaljs/tests/skill-triggering/run-all.sh)<br>[tests/skill-triggering/run-test.sh](../../../../sources/datopian__portaljs/tests/skill-triggering/run-test.sh)<br>[tests/skill-triggering/prompts/add-chart.txt](../../../../sources/datopian__portaljs/tests/skill-triggering/prompts/add-chart.txt)<br>[tests/skill-triggering/prompts/add-dataset.txt](../../../../sources/datopian__portaljs/tests/skill-triggering/prompts/add-dataset.txt)<br>[tests/skill-triggering/prompts/add-map.txt](../../../../sources/datopian__portaljs/tests/skill-triggering/prompts/add-map.txt) |
| CI workflows | 1 | [.github/workflows/release.yml](../../../../sources/datopian__portaljs/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 22 | [SECURITY.md](../../../../sources/datopian__portaljs/SECURITY.md)<br>[site/public/static/icons/light/online-security.json](../../../../sources/datopian__portaljs/site/public/static/icons/light/online-security.json)<br>[site/public/static/icons/light/privacy-policy.json](../../../../sources/datopian__portaljs/site/public/static/icons/light/privacy-policy.json)<br>[site/public/static/icons/dark/online-security.json](../../../../sources/datopian__portaljs/site/public/static/icons/dark/online-security.json)<br>[site/public/static/icons/dark/privacy-policy.json](../../../../sources/datopian__portaljs/site/public/static/icons/dark/privacy-policy.json)<br>[site/components/home/Security.tsx](../../../../sources/datopian__portaljs/site/components/home/Security.tsx) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/datopian__portaljs/AGENTS.md)<br>[CLAUDE.md](../../../../sources/datopian__portaljs/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `site/public/static/img/cloud-docs/mcp-claude-add-connector.png`, `site/public/static/img/cloud-docs/mcp-claude-connector-url.png`, `site/public/static/img/cloud-docs/mcp-claude-funcs.png`.
2. Trace execution through entrypoints: `site/public/static/icons/light/server.json`, `site/public/static/icons/dark/server.json`, `site/public/globe/main.js`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/skill-triggering/run-all.sh`, `tests/skill-triggering/run-test.sh`.
4. Inspect retrieval/memory/indexing through: `site/specs/index.spec.js`, `site/public/static/img/docs/share-embed-graphs.png`, `site/public/static/img/docs/share-embed-tables.png`.
5. Verify behavior through test/eval files: `tests/README.md`, `tests/skill-triggering/run-all.sh`, `tests/skill-triggering/run-test.sh`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 🌀 AI native framework for building data portals. Scaffold a full portal from a brief and load datasets in minutes with . 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
