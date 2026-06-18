# toss/slash-site Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

slash is a showcase platform that introduces and highlights Toss's open source projects

## 요약

- 조사 단위: `sources/toss__slash-site` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 78 files, 24 directories, depth score 49, key references 3개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, ui/extension surface 구조로 읽힌다. 핵심 소스 근거는 config=package.json, tsconfig.json이고, 의존성 단서는 next, react, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 3개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | toss/slash-site |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 7 |
| Forks | 1 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/toss__slash-site](../../../../sources/toss__slash-site) |
| Existing report | [reports/korea-trending/repositories/toss__slash-site.md](../../../korea-trending/repositories/toss__slash-site.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 78 / 24 |
| Max observed depth | 5 |
| Top directories | public, scripts, src |
| Top extensions | .tsx: 17, .png: 15, .css: 12, .jpeg: 9, .ts: 6, .svg: 4, .md: 3, .jpg: 2, .js: 2, .json: 2, .mp4: 2, .ico: 1 |
| Source patterns | retrieval/vector path, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 10 |
| public | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | next dev --turbopack |
| build | package.json | build | next build --turbopack |
| serve-dev | package.json | start | next start |
| quality | package.json | lint | eslint |
| utility | package.json | fetch-stats | node scripts/fetch-github-stats.js |
| utility | package.json | fetch-npm | node scripts/fetch-npm-stats.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | next, react |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| config | [package.json](../../../../sources/toss__slash-site/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/toss__slash-site/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/toss__slash-site/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 10 | [Vector.png](../../../../sources/toss__slash-site/Vector.png)<br>[src/app/constants/index.ts](../../../../sources/toss__slash-site/src/app/constants/index.ts)<br>[src/app/components/team/index.tsx](../../../../sources/toss__slash-site/src/app/components/team/index.tsx)<br>[src/app/components/project/index.tsx](../../../../sources/toss__slash-site/src/app/components/project/index.tsx)<br>[src/app/components/principle/index.tsx](../../../../sources/toss__slash-site/src/app/components/principle/index.tsx)<br>[src/app/components/navbar/index.tsx](../../../../sources/toss__slash-site/src/app/components/navbar/index.tsx)<br>[src/app/components/introduce/index.tsx](../../../../sources/toss__slash-site/src/app/components/introduce/index.tsx)<br>[src/app/components/hiring/index.tsx](../../../../sources/toss__slash-site/src/app/components/hiring/index.tsx) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/toss__slash-site/README.md) |
| config | 2 | [package.json](../../../../sources/toss__slash-site/package.json)<br>[tsconfig.json](../../../../sources/toss__slash-site/tsconfig.json) |


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
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `package.json`, `tsconfig.json`, `README.md`.
2. Inspect retrieval/memory/indexing through: `Vector.png`, `src/app/constants/index.ts`, `src/app/components/team/index.tsx`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 slash is a showcase platform that introduces and highlights Toss's open source projects. 핵심 구조 신호는 TypeScript, package.json, README.md, next, react, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
