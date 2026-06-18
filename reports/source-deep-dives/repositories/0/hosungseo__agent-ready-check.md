# hosungseo/agent-ready-check Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

AI agent readiness scanner — robots.txt, llms.txt, MCP, OpenGraph, OpenAPI 19 checks across Korean government sites

## 요약

- 조사 단위: `sources/hosungseo__agent-ready-check` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 24 files, 14 directories, depth score 41, key references 3개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 ui/extension surface 구조로 읽힌다. 핵심 소스 근거는 config=package.json, tsconfig.json이고, 의존성 단서는 next, react, 검증/운영 단서는 CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 3개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | hosungseo/agent-ready-check |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/hosungseo__agent-ready-check](../../../../sources/hosungseo__agent-ready-check) |
| Existing report | [reports/korea-trending/repositories/hosungseo__agent-ready-check.md](../../../korea-trending/repositories/hosungseo__agent-ready-check.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 24 / 14 |
| Max observed depth | 4 |
| Top directories | .github, app, components, lib, public, scripts |
| Top extensions | .ts: 9, .tsx: 6, .json: 3, .css: 1, .md: 1, .mjs: 1, .yaml: 1, .yml: 1, (none): 1 |
| Source patterns | ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| app | top-level component | 1 |
| components | top-level component | 1 |
| lib | source boundary | 1 |
| public | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | next dev -p 3030 |
| build | package.json | build | next build |
| serve-dev | package.json | start | next start -p 3030 |
| quality | package.json | lint | next lint |
| utility | package.json | rank | tsx scripts/rank.ts |


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
| config | [package.json](../../../../sources/hosungseo__agent-ready-check/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/hosungseo__agent-ready-check/tsconfig.json) | config signal |
| ci | [.github/workflows/rank.yml](../../../../sources/hosungseo__agent-ready-check/.github/workflows/rank.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/rank.yml](../../../../sources/hosungseo__agent-ready-check/.github/workflows/rank.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/hosungseo__agent-ready-check/README.md) |
| config | 2 | [package.json](../../../../sources/hosungseo__agent-ready-check/package.json)<br>[tsconfig.json](../../../../sources/hosungseo__agent-ready-check/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 1 | [.github/workflows/rank.yml](../../../../sources/hosungseo__agent-ready-check/.github/workflows/rank.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `package.json`, `tsconfig.json`, `.github/workflows/rank.yml`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 AI agent readiness scanner — robots.txt, llms.txt, MCP, OpenGraph, OpenAPI 19 checks across Korean government sites. 핵심 구조 신호는 TypeScript, package.json, README.md, next, react, ci이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
