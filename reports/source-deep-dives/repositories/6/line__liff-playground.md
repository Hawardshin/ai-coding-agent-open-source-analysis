# line/liff-playground Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

An example app to show the usage of LIFF's API functions

## 요약

- 조사 단위: `sources/line__liff-playground` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 50 files, 6 directories, depth score 80, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/App.css, src/App.module.css, src/App.tsx이고, 의존성 단서는 react, 검증/운영 단서는 CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/liff-playground |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 118 |
| Forks | 56 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__liff-playground](../../../../sources/line__liff-playground) |
| Existing report | [reports/korea-trending/repositories/line__liff-playground.md](../../../korea-trending/repositories/line__liff-playground.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 50 / 6 |
| Max observed depth | 3 |
| Top directories | .github, public, src |
| Top extensions | .css: 10, .tsx: 10, (none): 5, .json: 4, .ts: 4, .md: 3, .png: 3, .yml: 3, .html: 1, .ico: 1, .jpg: 1, .lock: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 7 |
| .github | ci surface | 1 |
| public | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | vite |
| serve-dev | package.json | dev:https | HTTPS=true vite |
| serve-dev | package.json | build | tsc && vite build |
| serve-dev | package.json | preview | vite preview |
| quality | package.json | lint | eslint "src/**/*.{ts,tsx}" |


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
| entrypoints | [src/App.css](../../../../sources/line__liff-playground/src/App.css) | entrypoints signal |
| entrypoints | [src/App.module.css](../../../../sources/line__liff-playground/src/App.module.css) | entrypoints signal |
| entrypoints | [src/App.tsx](../../../../sources/line__liff-playground/src/App.tsx) | entrypoints signal |
| entrypoints | [src/main.css](../../../../sources/line__liff-playground/src/main.css) | entrypoints signal |
| config | [package.json](../../../../sources/line__liff-playground/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/line__liff-playground/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/line__liff-playground/README.md) | docs signal |
| ci | [.github/workflows/deploy-to-netlify.yml](../../../../sources/line__liff-playground/.github/workflows/deploy-to-netlify.yml) | ci support |
| ci | [.github/workflows/pr-check.yml](../../../../sources/line__liff-playground/.github/workflows/pr-check.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [src/App.css](../../../../sources/line__liff-playground/src/App.css)<br>[src/App.module.css](../../../../sources/line__liff-playground/src/App.module.css)<br>[src/App.tsx](../../../../sources/line__liff-playground/src/App.tsx)<br>[src/main.css](../../../../sources/line__liff-playground/src/main.css)<br>[src/main.tsx](../../../../sources/line__liff-playground/src/main.tsx) |
| agentRuntime | 1 | [src/Context.tsx](../../../../sources/line__liff-playground/src/Context.tsx) |
| mcp | 0 | not obvious |
| retrieval | 1 | [index.html](../../../../sources/line__liff-playground/index.html) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/deploy-to-netlify.yml](../../../../sources/line__liff-playground/.github/workflows/deploy-to-netlify.yml)<br>[.github/workflows/pr-check.yml](../../../../sources/line__liff-playground/.github/workflows/pr-check.yml)<br>[.github/workflows/upgrade-liff-sdk.yml](../../../../sources/line__liff-playground/.github/workflows/upgrade-liff-sdk.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/line__liff-playground/README.md) |
| config | 2 | [package.json](../../../../sources/line__liff-playground/package.json)<br>[tsconfig.json](../../../../sources/line__liff-playground/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 3 | [.github/workflows/deploy-to-netlify.yml](../../../../sources/line__liff-playground/.github/workflows/deploy-to-netlify.yml)<br>[.github/workflows/pr-check.yml](../../../../sources/line__liff-playground/.github/workflows/pr-check.yml)<br>[.github/workflows/upgrade-liff-sdk.yml](../../../../sources/line__liff-playground/.github/workflows/upgrade-liff-sdk.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/App.css`, `src/App.module.css`, `src/App.tsx`.
2. Trace execution through entrypoints: `src/App.css`, `src/App.module.css`, `src/App.tsx`.
3. Map agent/tool runtime through: `src/Context.tsx`.
4. Inspect retrieval/memory/indexing through: `index.html`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 An example app to show the usage of LIFF's API functions. 핵심 구조 신호는 TypeScript, package.json, README.md, react, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
