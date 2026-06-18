# jee3m/augmentative-knowledge-hooks Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Semantic Search for Pi 2026: Local Knowledge Base & AI Tool

## 요약

- 조사 단위: `sources/jee3m__augmentative-knowledge-hooks` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 4 files, 2 directories, depth score 29, key references 1개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=not obvious이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 1개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | jee3m/augmentative-knowledge-hooks |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | HTML |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/jee3m__augmentative-knowledge-hooks](../../../../sources/jee3m__augmentative-knowledge-hooks) |
| Existing report | [reports/llm-wiki/repositories/jee3m__augmentative-knowledge-hooks.md](../../../llm-wiki/repositories/jee3m__augmentative-knowledge-hooks.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 4 / 2 |
| Max observed depth | 3 |
| Top directories | .github |
| Top extensions | .html: 1, .md: 1, .yml: 1, (none): 1 |
| Source patterns | retrieval/vector path |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
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
| ci | [.github/workflows/hkeUOCQocLCp.yml](../../../../sources/jee3m__augmentative-knowledge-hooks/.github/workflows/hkeUOCQocLCp.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 1 | [index.html](../../../../sources/jee3m__augmentative-knowledge-hooks/index.html) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/hkeUOCQocLCp.yml](../../../../sources/jee3m__augmentative-knowledge-hooks/.github/workflows/hkeUOCQocLCp.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/jee3m__augmentative-knowledge-hooks/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 1 | [.github/workflows/hkeUOCQocLCp.yml](../../../../sources/jee3m__augmentative-knowledge-hooks/.github/workflows/hkeUOCQocLCp.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `.github/workflows/hkeUOCQocLCp.yml`.
2. Inspect retrieval/memory/indexing through: `index.html`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Semantic Search for Pi 2026 Local Knowledge Base & AI Tool. 핵심 구조 신호는 HTML, README.md, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
