# latemonk/agent-store-skills Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Claude Skills for the Agent Store MCP connector (Korean public & financial data)

## 요약

- 조사 단위: `sources/latemonk__agent-store-skills` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 8 files, 7 directories, depth score 34, key references 4개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=korean-real-estate/SKILL.md, korean-public-data/SKILL.md, korea-macro-stats/SKILL.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 4개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | latemonk/agent-store-skills |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/latemonk__agent-store-skills](../../../../sources/latemonk__agent-store-skills) |
| Existing report | [reports/korea-trending/repositories/latemonk__agent-store-skills.md](../../../korea-trending/repositories/latemonk__agent-store-skills.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 8 / 7 |
| Max observed depth | 2 |
| Top directories | commercial-district-analytics, company-due-diligence, dart-financial-analysis, equity-report-jobs, korea-macro-stats, korean-public-data, korean-real-estate |
| Top extensions | .md: 8 |
| Source patterns | agent/tool runtime |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| commercial-district-analytics | ci surface | 1 |
| company-due-diligence | top-level component | 1 |
| dart-financial-analysis | ci surface | 1 |
| equity-report-jobs | top-level component | 1 |
| korea-macro-stats | top-level component | 1 |
| korean-public-data | top-level component | 1 |
| korean-real-estate | top-level component | 1 |


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
| agentRuntime | [korean-real-estate/SKILL.md](../../../../sources/latemonk__agent-store-skills/korean-real-estate/SKILL.md) | agentRuntime signal |
| agentRuntime | [korean-public-data/SKILL.md](../../../../sources/latemonk__agent-store-skills/korean-public-data/SKILL.md) | agentRuntime signal |
| agentRuntime | [korea-macro-stats/SKILL.md](../../../../sources/latemonk__agent-store-skills/korea-macro-stats/SKILL.md) | agentRuntime signal |
| agentRuntime | [equity-report-jobs/SKILL.md](../../../../sources/latemonk__agent-store-skills/equity-report-jobs/SKILL.md) | agentRuntime signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 7 | [korean-real-estate/SKILL.md](../../../../sources/latemonk__agent-store-skills/korean-real-estate/SKILL.md)<br>[korean-public-data/SKILL.md](../../../../sources/latemonk__agent-store-skills/korean-public-data/SKILL.md)<br>[korea-macro-stats/SKILL.md](../../../../sources/latemonk__agent-store-skills/korea-macro-stats/SKILL.md)<br>[equity-report-jobs/SKILL.md](../../../../sources/latemonk__agent-store-skills/equity-report-jobs/SKILL.md)<br>[dart-financial-analysis/SKILL.md](../../../../sources/latemonk__agent-store-skills/dart-financial-analysis/SKILL.md)<br>[company-due-diligence/SKILL.md](../../../../sources/latemonk__agent-store-skills/company-due-diligence/SKILL.md)<br>[commercial-district-analytics/SKILL.md](../../../../sources/latemonk__agent-store-skills/commercial-district-analytics/SKILL.md) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/latemonk__agent-store-skills/README.md) |
| config | 0 | not obvious |


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
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `korean-real-estate/SKILL.md`, `korean-public-data/SKILL.md`, `korea-macro-stats/SKILL.md`.
2. Map agent/tool runtime through: `korean-real-estate/SKILL.md`, `korean-public-data/SKILL.md`, `korea-macro-stats/SKILL.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Claude Skills for the Agent Store MCP connector Korean public & financial data. 핵심 구조 신호는 README.md, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
