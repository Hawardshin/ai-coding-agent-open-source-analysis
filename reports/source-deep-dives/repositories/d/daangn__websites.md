# daangn/websites Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Daangn on the WWW

## 요약

- 조사 단위: `sources/daangn__websites` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 404 files, 158 directories, depth score 96, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 entrypoints=_workers/websites-integration/src/main.ts, _workers/prismic-image-proxy/src/main.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | daangn/websites |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 676 |
| Forks | 62 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/daangn__websites](../../../../sources/daangn__websites) |
| Existing report | [reports/korea-trending/repositories/daangn__websites.md](../../../korea-trending/repositories/daangn__websites.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 404 / 158 |
| Max observed depth | 8 |
| Top directories | _docs, _packages, _template, _workers, .github, .vim, .yarn, about.daangn.com, careers.ca.karrotmarket.com, careers.en.karrotmarket.com, careers.jp.karrotmarket.com, ir.daangn.com |
| Top extensions | .tsx: 157, .ts: 86, .svg: 42, .json: 38, .mjs: 17, (none): 17, .md: 12, .js: 10, .png: 7, .yml: 6, .example: 3, .jsonc: 2 |
| Source patterns | cli-first, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| _docs | documentation surface | 1 |
| _packages | source boundary | 1 |
| _template | top-level component | 1 |
| _workers | top-level component | 1 |
| .github | ci surface | 1 |
| about.daangn.com | top-level component | 1 |
| careers.ca.karrotmarket.com | top-level component | 1 |
| careers.en.karrotmarket.com | top-level component | 1 |
| careers.jp.karrotmarket.com | top-level component | 1 |
| ir.daangn.com | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| quality | package.json | lint | biome check . --apply |
| quality | package.json | format | biome format . --write |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
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
| entrypoints | [_workers/websites-integration/src/main.ts](../../../../sources/daangn__websites/_workers/websites-integration/src/main.ts) | entrypoints signal |
| entrypoints | [_workers/prismic-image-proxy/src/main.ts](../../../../sources/daangn__websites/_workers/prismic-image-proxy/src/main.ts) | entrypoints signal |
| config | [package.json](../../../../sources/daangn__websites/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/daangn__websites/tsconfig.json) | config signal |
| config | [careers.jp.karrotmarket.com/package.json](../../../../sources/daangn__websites/careers.jp.karrotmarket.com/package.json) | config signal |
| config | [careers.jp.karrotmarket.com/tsconfig.json](../../../../sources/daangn__websites/careers.jp.karrotmarket.com/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/daangn__websites/README.md) | docs signal |
| docs | [_workers/README.md](../../../../sources/daangn__websites/_workers/README.md) | docs signal |
| docs | [_workers/websites-integration/README.md](../../../../sources/daangn__websites/_workers/websites-integration/README.md) | docs signal |
| docs | [_workers/greenhouse-proxy-worker/README.md](../../../../sources/daangn__websites/_workers/greenhouse-proxy-worker/README.md) | docs signal |
| eval | [_packages/@karrotmarket/gatsby-transformer-job-post/__tests__/greenhouseJobBlockParser.ts](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-transformer-job-post/__tests__/greenhouseJobBlockParser.ts) | eval signal |
| ci | [.github/workflows/about_daangn_com-build.yml](../../../../sources/daangn__websites/.github/workflows/about_daangn_com-build.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [_workers/websites-integration/src/main.ts](../../../../sources/daangn__websites/_workers/websites-integration/src/main.ts)<br>[_workers/prismic-image-proxy/src/main.ts](../../../../sources/daangn__websites/_workers/prismic-image-proxy/src/main.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 12 | [about.daangn.com/src/pages/index.tsx](../../../../sources/daangn__websites/about.daangn.com/src/pages/index.tsx)<br>[_template/src/pages/index.tsx](../../../../sources/daangn__websites/_template/src/pages/index.tsx)<br>[_packages/@karrotmarket/gatsby-transformer-post/index.js](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-transformer-post/index.js)<br>[_packages/@karrotmarket/gatsby-transformer-job-post/index.js](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-transformer-job-post/index.js)<br>[_packages/@karrotmarket/gatsby-theme-website-team/index.js](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-website-team/index.js)<br>[_packages/@karrotmarket/gatsby-theme-website-team/src/translation/index.ts](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-website-team/src/translation/index.ts)<br>[_packages/@karrotmarket/gatsby-theme-website-team/src/pages/index.tsx](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-website-team/src/pages/index.tsx)<br>[_packages/@karrotmarket/gatsby-theme-website-team/src/layouts/index.tsx](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-website-team/src/layouts/index.tsx) |
| spec | 13 | [_packages/@karrotmarket/gatsby-theme-seed-design/.gitattributes](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-seed-design/.gitattributes)<br>[_packages/@karrotmarket/gatsby-theme-seed-design/gatsby-config.mjs](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-seed-design/gatsby-config.mjs)<br>[_packages/@karrotmarket/gatsby-theme-seed-design/gatsby-ssr.tsx](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-seed-design/gatsby-ssr.tsx)<br>[_packages/@karrotmarket/gatsby-theme-seed-design/icon.config.yml](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-seed-design/icon.config.yml)<br>[_packages/@karrotmarket/gatsby-theme-seed-design/index.js](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-seed-design/index.js)<br>[_packages/@karrotmarket/gatsby-theme-seed-design/package.json](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-seed-design/package.json)<br>[_packages/@karrotmarket/gatsby-theme-seed-design/README.md](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-seed-design/README.md)<br>[_packages/@karrotmarket/gatsby-theme-seed-design/tsconfig.json](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-seed-design/tsconfig.json) |
| eval | 1 | [_packages/@karrotmarket/gatsby-transformer-job-post/__tests__/greenhouseJobBlockParser.ts](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-transformer-job-post/__tests__/greenhouseJobBlockParser.ts) |
| security | 0 | not obvious |
| ci | 4 | [.github/workflows/about_daangn_com-build.yml](../../../../sources/daangn__websites/.github/workflows/about_daangn_com-build.yml)<br>[.github/workflows/about_daangn_com-cache.yml](../../../../sources/daangn__websites/.github/workflows/about_daangn_com-cache.yml)<br>[.github/workflows/deploy-greenhouse-proxy-worker.yml](../../../../sources/daangn__websites/.github/workflows/deploy-greenhouse-proxy-worker.yml)<br>[.github/workflows/integration.yml](../../../../sources/daangn__websites/.github/workflows/integration.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 6 | [README.md](../../../../sources/daangn__websites/README.md)<br>[_workers/README.md](../../../../sources/daangn__websites/_workers/README.md)<br>[_workers/websites-integration/README.md](../../../../sources/daangn__websites/_workers/websites-integration/README.md)<br>[_workers/greenhouse-proxy-worker/README.md](../../../../sources/daangn__websites/_workers/greenhouse-proxy-worker/README.md)<br>[_packages/@karrotmarket/gatsby-theme-seed-design/README.md](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-seed-design/README.md)<br>[_packages/@karrotmarket/gatsby-theme-seed-design/docs/theme-composition.webp](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-seed-design/docs/theme-composition.webp) |
| config | 30 | [package.json](../../../../sources/daangn__websites/package.json)<br>[tsconfig.json](../../../../sources/daangn__websites/tsconfig.json)<br>[careers.jp.karrotmarket.com/package.json](../../../../sources/daangn__websites/careers.jp.karrotmarket.com/package.json)<br>[careers.jp.karrotmarket.com/tsconfig.json](../../../../sources/daangn__websites/careers.jp.karrotmarket.com/tsconfig.json)<br>[careers.ca.karrotmarket.com/package.json](../../../../sources/daangn__websites/careers.ca.karrotmarket.com/package.json)<br>[careers.ca.karrotmarket.com/tsconfig.json](../../../../sources/daangn__websites/careers.ca.karrotmarket.com/tsconfig.json)<br>[about.daangn.com/package.json](../../../../sources/daangn__websites/about.daangn.com/package.json)<br>[about.daangn.com/tsconfig.json](../../../../sources/daangn__websites/about.daangn.com/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [_packages/@karrotmarket/gatsby-transformer-job-post/__tests__/greenhouseJobBlockParser.ts](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-transformer-job-post/__tests__/greenhouseJobBlockParser.ts) |
| CI workflows | 4 | [.github/workflows/about_daangn_com-build.yml](../../../../sources/daangn__websites/.github/workflows/about_daangn_com-build.yml)<br>[.github/workflows/about_daangn_com-cache.yml](../../../../sources/daangn__websites/.github/workflows/about_daangn_com-cache.yml)<br>[.github/workflows/deploy-greenhouse-proxy-worker.yml](../../../../sources/daangn__websites/.github/workflows/deploy-greenhouse-proxy-worker.yml)<br>[.github/workflows/integration.yml](../../../../sources/daangn__websites/.github/workflows/integration.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `_workers/websites-integration/src/main.ts`, `_workers/prismic-image-proxy/src/main.ts`, `package.json`.
2. Trace execution through entrypoints: `_workers/websites-integration/src/main.ts`, `_workers/prismic-image-proxy/src/main.ts`.
3. Inspect retrieval/memory/indexing through: `about.daangn.com/src/pages/index.tsx`, `_template/src/pages/index.tsx`, `_packages/@karrotmarket/gatsby-transformer-post/index.js`.
4. Verify behavior through test/eval files: `_packages/@karrotmarket/gatsby-transformer-job-post/__tests__/greenhouseJobBlockParser.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Daangn on the WWW. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
