# Samsung/create-tizen-app Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Samsung/create-tizen-app

## 요약

- 조사 단위: `sources/Samsung__create-tizen-app` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 62 files, 5 directories, depth score 56, key references 5개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/cli.ts, src/index.ts이고, 의존성 단서는 commander, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/create-tizen-app |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 36 |
| Forks | 6 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/Samsung__create-tizen-app](../../../../sources/Samsung__create-tizen-app) |
| Existing report | [reports/korea-trending/repositories/Samsung__create-tizen-app.md](../../../korea-trending/repositories/Samsung__create-tizen-app.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 62 / 5 |
| Max observed depth | 3 |
| Top directories | src |
| Top extensions | .ts: 54, .json: 3, (none): 3, .js: 1, .md: 1 |
| Source patterns | cli-first, retrieval/vector path |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 8 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | init | mkdir .test |
| test | package.json | start | cd .test && node ../dist/cli.js |
| test | package.json | doctor | cd .test/doctor && node ../../dist/cli.js doctor |
| serve-dev | package.json | webpack | webpack --watch --mode=development |
| build | package.json | release | webpack --mode=production |
| entrypoint | package.json bin | cli.js | dist/cli.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | commander |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [src/cli.ts](../../../../sources/Samsung__create-tizen-app/src/cli.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/Samsung__create-tizen-app/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/Samsung__create-tizen-app/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/Samsung__create-tizen-app/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/Samsung__create-tizen-app/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/cli.ts](../../../../sources/Samsung__create-tizen-app/src/cli.ts)<br>[src/index.ts](../../../../sources/Samsung__create-tizen-app/src/index.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 5 | [src/index.ts](../../../../sources/Samsung__create-tizen-app/src/index.ts)<br>[src/prompter/index.ts](../../../../sources/Samsung__create-tizen-app/src/prompter/index.ts)<br>[src/order/index.ts](../../../../sources/Samsung__create-tizen-app/src/order/index.ts)<br>[src/doctor/index.ts](../../../../sources/Samsung__create-tizen-app/src/doctor/index.ts)<br>[src/command/index.ts](../../../../sources/Samsung__create-tizen-app/src/command/index.ts) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/Samsung__create-tizen-app/README.md) |
| config | 2 | [package.json](../../../../sources/Samsung__create-tizen-app/package.json)<br>[tsconfig.json](../../../../sources/Samsung__create-tizen-app/tsconfig.json) |


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
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/cli.ts`, `src/index.ts`, `package.json`.
2. Trace execution through entrypoints: `src/cli.ts`, `src/index.ts`.
3. Inspect retrieval/memory/indexing through: `src/index.ts`, `src/prompter/index.ts`, `src/order/index.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
