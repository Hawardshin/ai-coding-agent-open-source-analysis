# line/line-liff-v2-starter Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

This is a small web application that demonstrates the basic functionality of the LINE Front-end Framework (LIFF).

## 요약

- 조사 단위: `sources/line__line-liff-v2-starter` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 40 files, 11 directories, depth score 53, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 config=package.json, src/vanilla/package.json, src/nuxtjs/package.json이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/line-liff-v2-starter |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | CSS |
| Stars | 376 |
| Forks | 385 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__line-liff-v2-starter](../../../../sources/line__line-liff-v2-starter) |
| Existing report | [reports/korea-trending/repositories/line__line-liff-v2-starter.md](../../../korea-trending/repositories/line__line-liff-v2-starter.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 40 / 11 |
| Max observed depth | 4 |
| Top directories | .github, src |
| Top extensions | .md: 9, (none): 8, .js: 5, .json: 5, .lock: 4, .css: 2, .ico: 2, .html: 1, .toml: 1, .ts: 1, .txt: 1, .vue: 1 |
| Source patterns | retrieval/vector path |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 13 |
| .github | ci surface | 1 |


## How It Runs

_No command surface extracted from root manifests._


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
| config | [package.json](../../../../sources/line__line-liff-v2-starter/package.json) | config signal |
| config | [src/vanilla/package.json](../../../../sources/line__line-liff-v2-starter/src/vanilla/package.json) | config signal |
| config | [src/nuxtjs/package.json](../../../../sources/line__line-liff-v2-starter/src/nuxtjs/package.json) | config signal |
| config | [src/nuxtjs/tsconfig.json](../../../../sources/line__line-liff-v2-starter/src/nuxtjs/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/line__line-liff-v2-starter/README.md) | docs signal |
| docs | [src/vanilla/README.md](../../../../sources/line__line-liff-v2-starter/src/vanilla/README.md) | docs signal |
| docs | [src/nuxtjs/README.md](../../../../sources/line__line-liff-v2-starter/src/nuxtjs/README.md) | docs signal |
| docs | [src/nextjs/README.md](../../../../sources/line__line-liff-v2-starter/src/nextjs/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 5 | [src/vanilla/index.css](../../../../sources/line__line-liff-v2-starter/src/vanilla/index.css)<br>[src/vanilla/index.html](../../../../sources/line__line-liff-v2-starter/src/vanilla/index.html)<br>[src/vanilla/index.js](../../../../sources/line__line-liff-v2-starter/src/vanilla/index.js)<br>[src/nuxtjs/pages/index.vue](../../../../sources/line__line-liff-v2-starter/src/nuxtjs/pages/index.vue)<br>[src/nextjs/pages/index.js](../../../../sources/line__line-liff-v2-starter/src/nextjs/pages/index.js) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 4 | [README.md](../../../../sources/line__line-liff-v2-starter/README.md)<br>[src/vanilla/README.md](../../../../sources/line__line-liff-v2-starter/src/vanilla/README.md)<br>[src/nuxtjs/README.md](../../../../sources/line__line-liff-v2-starter/src/nuxtjs/README.md)<br>[src/nextjs/README.md](../../../../sources/line__line-liff-v2-starter/src/nextjs/README.md) |
| config | 5 | [package.json](../../../../sources/line__line-liff-v2-starter/package.json)<br>[src/vanilla/package.json](../../../../sources/line__line-liff-v2-starter/src/vanilla/package.json)<br>[src/nuxtjs/package.json](../../../../sources/line__line-liff-v2-starter/src/nuxtjs/package.json)<br>[src/nuxtjs/tsconfig.json](../../../../sources/line__line-liff-v2-starter/src/nuxtjs/tsconfig.json)<br>[src/nextjs/package.json](../../../../sources/line__line-liff-v2-starter/src/nextjs/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `package.json`, `src/vanilla/package.json`, `src/nuxtjs/package.json`.
2. Inspect retrieval/memory/indexing through: `src/vanilla/index.css`, `src/vanilla/index.html`, `src/vanilla/index.js`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 This is a small web application that demonstrates the basic functionality of the LINE Front end Framework LIFF .. 핵심 구조 신호는 CSS, package.json, README.md, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
