# dongdorrong/korean-law-mcp-lab Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

dongdorrong/korean-law-mcp-lab

## 요약

- 조사 단위: `sources/dongdorrong__korean-law-mcp-lab` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 8 files, 3 directories, depth score 30, key references 2개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=examples/korean-law-mcp.env.example, docs/korean-law-mcp-guide.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 2개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | dongdorrong/korean-law-mcp-lab |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Shell |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/dongdorrong__korean-law-mcp-lab](../../../../sources/dongdorrong__korean-law-mcp-lab) |
| Existing report | [reports/korea-trending/repositories/dongdorrong__korean-law-mcp-lab.md](../../../korea-trending/repositories/dongdorrong__korean-law-mcp-lab.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 8 / 3 |
| Max observed depth | 2 |
| Top directories | docs, examples, scripts |
| Top extensions | .md: 5, .example: 1, .sh: 1, (none): 1 |
| Source patterns | agent/tool runtime |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 6 |
| examples | top-level component | 1 |
| examples/korean-law-mcp.env.example | examples workspace | 1 |
| scripts | top-level component | 1 |


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
| mcp | [examples/korean-law-mcp.env.example](../../../../sources/dongdorrong__korean-law-mcp-lab/examples/korean-law-mcp.env.example) | mcp signal |
| mcp | [docs/korean-law-mcp-guide.md](../../../../sources/dongdorrong__korean-law-mcp-lab/docs/korean-law-mcp-guide.md) | mcp signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 2 | [examples/korean-law-mcp.env.example](../../../../sources/dongdorrong__korean-law-mcp-lab/examples/korean-law-mcp.env.example)<br>[docs/korean-law-mcp-guide.md](../../../../sources/dongdorrong__korean-law-mcp-lab/docs/korean-law-mcp-guide.md) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 5 | [README.md](../../../../sources/dongdorrong__korean-law-mcp-lab/README.md)<br>[docs/integrated-practice.md](../../../../sources/dongdorrong__korean-law-mcp-lab/docs/integrated-practice.md)<br>[docs/korean-law-mcp-guide.md](../../../../sources/dongdorrong__korean-law-mcp-lab/docs/korean-law-mcp-guide.md)<br>[docs/legalize-kr-guide.md](../../../../sources/dongdorrong__korean-law-mcp-lab/docs/legalize-kr-guide.md)<br>[docs/repo-crawl-report.md](../../../../sources/dongdorrong__korean-law-mcp-lab/docs/repo-crawl-report.md) |
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

1. Start from key references: `examples/korean-law-mcp.env.example`, `docs/korean-law-mcp-guide.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 Shell, README.md, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
