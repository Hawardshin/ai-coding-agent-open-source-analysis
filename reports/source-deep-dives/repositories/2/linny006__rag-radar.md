# linny006/rag-radar Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Live tracker of new RAG implementations, tools, and patterns — updated every 15 minutes

## 요약

- 조사 단위: `sources/linny006__rag-radar` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 10 files, 3 directories, depth score 47, key references 6개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 docs=README_CN.md, README_ES.md, README_JA.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | linny006/rag-radar |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 1 |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/linny006__rag-radar](../../../../sources/linny006__rag-radar) |
| Existing report | [reports/llm-wiki/repositories/linny006__rag-radar.md](../../../llm-wiki/repositories/linny006__rag-radar.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 10 / 3 |
| Max observed depth | 3 |
| Top directories | .github, data |
| Top extensions | .md: 6, .json: 1, .py: 1, .txt: 1, .yml: 1 |
| Source patterns | spec/docs-driven |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| data | top-level component | 1 |


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
| docs | [README_CN.md](../../../../sources/linny006__rag-radar/README_CN.md) | docs signal |
| docs | [README_ES.md](../../../../sources/linny006__rag-radar/README_ES.md) | docs signal |
| docs | [README_JA.md](../../../../sources/linny006__rag-radar/README_JA.md) | docs signal |
| docs | [README_KO.md](../../../../sources/linny006__rag-radar/README_KO.md) | docs signal |
| config | [requirements.txt](../../../../sources/linny006__rag-radar/requirements.txt) | config signal |
| ci | [.github/workflows/update.yml](../../../../sources/linny006__rag-radar/.github/workflows/update.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 1 | [requirements.txt](../../../../sources/linny006__rag-radar/requirements.txt) |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/update.yml](../../../../sources/linny006__rag-radar/.github/workflows/update.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 6 | [README_CN.md](../../../../sources/linny006__rag-radar/README_CN.md)<br>[README_ES.md](../../../../sources/linny006__rag-radar/README_ES.md)<br>[README_JA.md](../../../../sources/linny006__rag-radar/README_JA.md)<br>[README_KO.md](../../../../sources/linny006__rag-radar/README_KO.md)<br>[README_PT.md](../../../../sources/linny006__rag-radar/README_PT.md)<br>[README.md](../../../../sources/linny006__rag-radar/README.md) |
| config | 1 | [requirements.txt](../../../../sources/linny006__rag-radar/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 1 | [.github/workflows/update.yml](../../../../sources/linny006__rag-radar/.github/workflows/update.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README_CN.md`, `README_ES.md`, `README_JA.md`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Live tracker of new RAG implementations, tools, and patterns — updated every 15 minutes. 핵심 구조 신호는 Python, requirements.txt, README.md, ci, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
