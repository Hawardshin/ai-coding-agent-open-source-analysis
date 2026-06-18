# ohbryt/bb-wiki Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Brown Biotech persistent knowledge base — Karpathy LLM-Wiki × An Lab pedagogy × BB 14 query family. 4-섹션 judgment layer on all concept/entity pages. Synced to Obsidian ~/Documents/Obsidian Vault/brown-biotech.

## 요약

- 조사 단위: `sources/ohbryt__bb-wiki` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 28 files, 5 directories, depth score 39, key references 4개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=index.md, scripts/ingest_deep_dive.py, scripts/wiki_lint.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 4개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | ohbryt/bb-wiki |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/ohbryt__bb-wiki](../../../../sources/ohbryt__bb-wiki) |
| Existing report | [reports/llm-wiki/repositories/ohbryt__bb-wiki.md](../../../llm-wiki/repositories/ohbryt__bb-wiki.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 28 / 5 |
| Max observed depth | 2 |
| Top directories | comparisons, concepts, entities, queries, scripts |
| Top extensions | .md: 25, .py: 2, (none): 1 |
| Source patterns | retrieval/vector path |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| comparisons | top-level component | 1 |
| concepts | top-level component | 1 |
| entities | top-level component | 1 |
| queries | top-level component | 1 |
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
| retrieval | [index.md](../../../../sources/ohbryt__bb-wiki/index.md) | retrieval signal |
| retrieval | [scripts/ingest_deep_dive.py](../../../../sources/ohbryt__bb-wiki/scripts/ingest_deep_dive.py) | retrieval signal |
| retrieval | [scripts/wiki_lint.py](../../../../sources/ohbryt__bb-wiki/scripts/wiki_lint.py) | retrieval signal |
| docs | [README.md](../../../../sources/ohbryt__bb-wiki/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 3 | [index.md](../../../../sources/ohbryt__bb-wiki/index.md)<br>[scripts/ingest_deep_dive.py](../../../../sources/ohbryt__bb-wiki/scripts/ingest_deep_dive.py)<br>[scripts/wiki_lint.py](../../../../sources/ohbryt__bb-wiki/scripts/wiki_lint.py) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/ohbryt__bb-wiki/README.md) |
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
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `index.md`, `scripts/ingest_deep_dive.py`, `scripts/wiki_lint.py`.
2. Inspect retrieval/memory/indexing through: `index.md`, `scripts/ingest_deep_dive.py`, `scripts/wiki_lint.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Brown Biotech persistent knowledge base — Karpathy LLM Wiki × An Lab pedagogy × BB 14 query family. 4 섹션 judgment layer . 핵심 구조 신호는 Python, README.md, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
