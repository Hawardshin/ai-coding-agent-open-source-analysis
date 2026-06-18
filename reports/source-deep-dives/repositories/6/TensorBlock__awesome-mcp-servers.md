# TensorBlock/awesome-mcp-servers Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A comprehensive collection of Model Context Protocol (MCP) servers

## 요약

- 조사 단위: `sources/TensorBlock__awesome-mcp-servers` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 7,629 files, 28 directories, depth score 116, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/registry-mcp/test/server.test.ts, packages/registry-mcp/src/server.ts, data/server-metadata/bitcompare-net-mcp-1db77cc7.json이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | TensorBlock/awesome-mcp-servers |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 746 |
| Forks | 503 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/TensorBlock__awesome-mcp-servers](../../../../sources/TensorBlock__awesome-mcp-servers) |
| Existing report | [reports/global-trending/repositories/TensorBlock__awesome-mcp-servers.md](../../../global-trending/repositories/TensorBlock__awesome-mcp-servers.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 7629 / 28 |
| Max observed depth | 4 |
| Top directories | .github, data, docs, packages, schemas |
| Top extensions | .json: 7523, .md: 41, .ts: 28, .mjs: 19, .yml: 16, (none): 2 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 46 |
| packages/registry-api | packages workspace | 6 |
| packages/catalog-builder | packages workspace | 5 |
| packages/registry-mcp | packages workspace | 5 |
| packages/config-generator | packages workspace | 2 |
| packages/profile-renderer | packages workspace | 2 |
| .github | ci surface | 1 |
| data | top-level component | 1 |
| packages | source boundary | 1 |
| schemas | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc -p tsconfig.base.json |
| test | package.json | test | vitest run --passWithNoTests |
| quality | package.json | typecheck | tsc -p tsconfig.base.json --noEmit |
| build | package.json | catalog:build | tsx packages/catalog-builder/src/cli.ts |
| quality | package.json | catalog:health | node .github/scripts/check-catalog-health.mjs |
| build | package.json | profiles:build | tsx packages/profile-renderer/src/cli.ts |
| utility | package.json | config:generate | tsx packages/config-generator/src/cli.ts |
| serve-dev | package.json | registry:mcp | tsx packages/registry-mcp/src/server.ts |
| serve-dev | package.json | registry:api | node dist-ts/packages/registry-api/src/server.js |
| serve-dev | package.json | registry:api:dev | tsx packages/registry-api/src/server.ts |
| serve-dev | package.json | start | npm run registry:api |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [packages/registry-mcp/test/server.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-mcp/test/server.test.ts) | mcp signal |
| mcp | [packages/registry-mcp/src/server.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-mcp/src/server.ts) | mcp signal |
| mcp | [data/server-metadata/bitcompare-net-mcp-1db77cc7.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/server-metadata/bitcompare-net-mcp-1db77cc7.json) | mcp signal |
| mcp | [data/server-metadata/emile-wine-mcp-0f8bfe89.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/server-metadata/emile-wine-mcp-0f8bfe89.json) | mcp signal |
| entrypoints | [schemas/server.schema.json](../../../../sources/TensorBlock__awesome-mcp-servers/schemas/server.schema.json) | entrypoints signal |
| entrypoints | [packages/registry-api/test/server.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/test/server.test.ts) | entrypoints signal |
| config | [package.json](../../../../sources/TensorBlock__awesome-mcp-servers/package.json) | config signal |
| ci | [.github/workflows/add-server-issue-pr.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/add-server-issue-pr.yml) | ci support |
| ci | [.github/workflows/broken-entry-report-pr.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/broken-entry-report-pr.yml) | ci support |
| eval | [packages/registry-api/test/badge.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/test/badge.test.ts) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 8 | [schemas/server.schema.json](../../../../sources/TensorBlock__awesome-mcp-servers/schemas/server.schema.json)<br>[packages/registry-mcp/test/server.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-mcp/test/server.test.ts)<br>[packages/registry-mcp/src/server.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-mcp/src/server.ts)<br>[packages/registry-api/test/server.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/test/server.test.ts)<br>[packages/registry-api/src/server.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/src/server.ts)<br>[packages/profile-renderer/src/cli.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/profile-renderer/src/cli.ts)<br>[packages/config-generator/src/cli.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/config-generator/src/cli.ts)<br>[packages/catalog-builder/src/cli.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/catalog-builder/src/cli.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 6240 | [packages/registry-mcp/test/server.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-mcp/test/server.test.ts)<br>[packages/registry-mcp/src/server.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-mcp/src/server.ts)<br>[data/server-metadata/bitcompare-net-mcp-1db77cc7.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/server-metadata/bitcompare-net-mcp-1db77cc7.json)<br>[data/server-metadata/emile-wine-mcp-0f8bfe89.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/server-metadata/emile-wine-mcp-0f8bfe89.json)<br>[data/server-metadata/github-alvisooculus-optionsahoy-mcp-7af553c8.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/server-metadata/github-alvisooculus-optionsahoy-mcp-7af553c8.json)<br>[data/server-metadata/github-getxapi-getxapi-mcp-d0b54b6c.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/server-metadata/github-getxapi-getxapi-mcp-d0b54b6c.json)<br>[data/server-metadata/github-ipythoning-domain-monitor-mcp-server-48496711.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/server-metadata/github-ipythoning-domain-monitor-mcp-server-48496711.json)<br>[data/server-metadata/github-kaitoinfra-twitterapi-io-mcp-server-6e3365ac.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/server-metadata/github-kaitoinfra-twitterapi-io-mcp-server-6e3365ac.json) |
| retrieval | 102 | [docs/index-api.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/index-api.md)<br>[docs/knowledge-management--memory.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/knowledge-management--memory.md)<br>[docs/index-alpha/contribution-guide.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/index-alpha/contribution-guide.md)<br>[data/profiles/github-0xluluv587-empyrical-mcp-knowledge-base-59d1a0c1.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-0xluluv587-empyrical-mcp-knowledge-base-59d1a0c1.json)<br>[data/profiles/github-aaronsb-memory-graph-c979c229.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-aaronsb-memory-graph-c979c229.json)<br>[data/profiles/github-abeyuya-memory-bank-loader-mcp-124e1d3e.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-abeyuya-memory-bank-loader-mcp-124e1d3e.json)<br>[data/profiles/github-adhikasp-mcp-git-ingest-307e3374.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-adhikasp-mcp-git-ingest-307e3374.json)<br>[data/profiles/github-agentwong-iac-memory-mcp-server-681e118c.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-agentwong-iac-memory-mcp-server-681e118c.json) |
| spec | 7 | [data/profiles/github-captaincrouton89-requirements-gathering-c8f1f428.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-captaincrouton89-requirements-gathering-c8f1f428.json)<br>[data/profiles/github-mastergo-design-mastergo-magic-mcp-13474643.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-mastergo-design-mastergo-magic-mcp-13474643.json)<br>[data/profiles/github-saml1211-prd-mcp-server-e7871a8d.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-saml1211-prd-mcp-server-e7871a8d.json)<br>[data/profiles/github-ssaitho-design-system-mcp-sandbox-858b6ac7.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-ssaitho-design-system-mcp-sandbox-858b6ac7.json)<br>[data/profiles/github-unixlamadev-spec-aiprox-mcp-3aa8abc2.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-unixlamadev-spec-aiprox-mcp-3aa8abc2.json)<br>[data/profiles/github-unixlamadev-spec-lightningprox-mcp-035b66dd.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-unixlamadev-spec-lightningprox-mcp-035b66dd.json)<br>[data/profiles/github-unixlamadev-spec-lpxpoly-mcp-bb693940.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-unixlamadev-spec-lpxpoly-mcp-bb693940.json) |
| eval | 91 | [packages/registry-mcp/test/server.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-mcp/test/server.test.ts)<br>[packages/registry-api/test/badge.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/test/badge.test.ts)<br>[packages/registry-api/test/profilePage.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/test/profilePage.test.ts)<br>[packages/registry-api/test/search.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/test/search.test.ts)<br>[packages/registry-api/test/server.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/test/server.test.ts)<br>[packages/profile-renderer/test/renderProfiles.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/profile-renderer/test/renderProfiles.test.ts)<br>[packages/config-generator/test/generateConfig.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/config-generator/test/generateConfig.test.ts)<br>[packages/catalog-builder/test/buildCatalog.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/catalog-builder/test/buildCatalog.test.ts) |
| security | 36 | [docs/security.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/security.md)<br>[data/profiles/github-302ai-302-sandbox-mcp-f13f40a3.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-302ai-302-sandbox-mcp-f13f40a3.json)<br>[data/profiles/github-alfonsograziano-node-code-sandbox-mcp-8addc7a1.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-alfonsograziano-node-code-sandbox-mcp-8addc7a1.json)<br>[data/profiles/github-atamaplus-public-mcp-guardrail-9929d4bc.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-atamaplus-public-mcp-guardrail-9929d4bc.json)<br>[data/profiles/github-automata-labs-team-code-sandbox-mcp-16bcfa0c.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-automata-labs-team-code-sandbox-mcp-16bcfa0c.json)<br>[data/profiles/github-bewt85-mcp-deno-sandbox-f520401e.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-bewt85-mcp-deno-sandbox-f520401e.json)<br>[data/profiles/github-chrishayuk-mcp-code-sandbox-31185c8d.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-chrishayuk-mcp-code-sandbox-31185c8d.json)<br>[data/profiles/github-cloudywu0410-python-sandbox-mcp-server-bf4b5223.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-cloudywu0410-python-sandbox-mcp-server-bf4b5223.json) |
| ci | 10 | [.github/workflows/add-server-issue-pr.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/add-server-issue-pr.yml)<br>[.github/workflows/broken-entry-report-pr.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/broken-entry-report-pr.yml)<br>[.github/workflows/catalog-health-check.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/catalog-health-check.yml)<br>[.github/workflows/claim-profile-pr.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/claim-profile-pr.yml)<br>[.github/workflows/client-config-request-pr.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/client-config-request-pr.yml)<br>[.github/workflows/deploy-registry-api.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/deploy-registry-api.yml)<br>[.github/workflows/improve-metadata-pr.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/improve-metadata-pr.yml)<br>[.github/workflows/issue-triage.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/issue-triage.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 41 | [README.md](../../../../sources/TensorBlock__awesome-mcp-servers/README.md)<br>[docs/ai--llm-integration.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/ai--llm-integration.md)<br>[docs/art-culture--media.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/art-culture--media.md)<br>[docs/browser-automation--web-scraping.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/browser-automation--web-scraping.md)<br>[docs/build--deployment-tools.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/build--deployment-tools.md)<br>[docs/cloud-platforms--services.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/cloud-platforms--services.md)<br>[docs/code-analysis--quality.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/code-analysis--quality.md)<br>[docs/code-execution.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/code-execution.md) |
| config | 1 | [package.json](../../../../sources/TensorBlock__awesome-mcp-servers/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 91 | [packages/registry-mcp/test/server.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-mcp/test/server.test.ts)<br>[packages/registry-api/test/badge.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/test/badge.test.ts)<br>[packages/registry-api/test/profilePage.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/test/profilePage.test.ts)<br>[packages/registry-api/test/search.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/test/search.test.ts)<br>[packages/registry-api/test/server.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/test/server.test.ts)<br>[packages/profile-renderer/test/renderProfiles.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/profile-renderer/test/renderProfiles.test.ts) |
| CI workflows | 10 | [.github/workflows/add-server-issue-pr.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/add-server-issue-pr.yml)<br>[.github/workflows/broken-entry-report-pr.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/broken-entry-report-pr.yml)<br>[.github/workflows/catalog-health-check.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/catalog-health-check.yml)<br>[.github/workflows/claim-profile-pr.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/claim-profile-pr.yml)<br>[.github/workflows/client-config-request-pr.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/client-config-request-pr.yml)<br>[.github/workflows/deploy-registry-api.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/deploy-registry-api.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 36 | [docs/security.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/security.md)<br>[data/profiles/github-302ai-302-sandbox-mcp-f13f40a3.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-302ai-302-sandbox-mcp-f13f40a3.json)<br>[data/profiles/github-alfonsograziano-node-code-sandbox-mcp-8addc7a1.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-alfonsograziano-node-code-sandbox-mcp-8addc7a1.json)<br>[data/profiles/github-atamaplus-public-mcp-guardrail-9929d4bc.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-atamaplus-public-mcp-guardrail-9929d4bc.json)<br>[data/profiles/github-automata-labs-team-code-sandbox-mcp-16bcfa0c.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-automata-labs-team-code-sandbox-mcp-16bcfa0c.json)<br>[data/profiles/github-bewt85-mcp-deno-sandbox-f520401e.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-bewt85-mcp-deno-sandbox-f520401e.json) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `packages/registry-mcp/test/server.test.ts`, `packages/registry-mcp/src/server.ts`, `data/server-metadata/bitcompare-net-mcp-1db77cc7.json`.
2. Trace execution through entrypoints: `schemas/server.schema.json`, `packages/registry-mcp/test/server.test.ts`, `packages/registry-mcp/src/server.ts`.
3. Inspect retrieval/memory/indexing through: `docs/index-api.md`, `docs/knowledge-management--memory.md`, `docs/index-alpha/contribution-guide.md`.
4. Verify behavior through test/eval files: `packages/registry-mcp/test/server.test.ts`, `packages/registry-api/test/badge.test.ts`, `packages/registry-api/test/profilePage.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A comprehensive collection of Model Context Protocol MCP servers. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, modelcontextprotocol, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
