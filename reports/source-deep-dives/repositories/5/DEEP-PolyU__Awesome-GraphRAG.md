# DEEP-PolyU/Awesome-GraphRAG Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Awesome-GraphRAG: A curated list of resources (surveys, papers, benchmarks, and opensource projects) on graph-based retrieval-augmented generation.

## 요약

- 조사 단위: `sources/DEEP-PolyU__Awesome-GraphRAG` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 7 files, 1 directories, depth score 31, key references 3개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=figs/rag_vs_graphrag.png, figs/retrieval.png이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 3개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | DEEP-PolyU/Awesome-GraphRAG |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | none |
| Stars | 2474 |
| Forks | 213 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/DEEP-PolyU__Awesome-GraphRAG](../../../../sources/DEEP-PolyU__Awesome-GraphRAG) |
| Existing report | [reports/llm-wiki/repositories/DEEP-PolyU__Awesome-GraphRAG.md](../../../llm-wiki/repositories/DEEP-PolyU__Awesome-GraphRAG.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 7 / 1 |
| Max observed depth | 2 |
| Top directories | figs |
| Top extensions | .png: 5, .md: 1, (none): 1 |
| Source patterns | retrieval/vector path |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| figs | top-level component | 1 |


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
| retrieval | [figs/rag_vs_graphrag.png](../../../../sources/DEEP-PolyU__Awesome-GraphRAG/figs/rag_vs_graphrag.png) | retrieval signal |
| retrieval | [figs/retrieval.png](../../../../sources/DEEP-PolyU__Awesome-GraphRAG/figs/retrieval.png) | retrieval signal |
| docs | [README.md](../../../../sources/DEEP-PolyU__Awesome-GraphRAG/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 2 | [figs/rag_vs_graphrag.png](../../../../sources/DEEP-PolyU__Awesome-GraphRAG/figs/rag_vs_graphrag.png)<br>[figs/retrieval.png](../../../../sources/DEEP-PolyU__Awesome-GraphRAG/figs/retrieval.png) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/DEEP-PolyU__Awesome-GraphRAG/README.md) |
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

1. Start from key references: `figs/rag_vs_graphrag.png`, `figs/retrieval.png`, `README.md`.
2. Inspect retrieval/memory/indexing through: `figs/rag_vs_graphrag.png`, `figs/retrieval.png`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Awesome GraphRAG A curated list of resources surveys, papers, benchmarks, and opensource projects on graph based retriev. 핵심 구조 신호는 README.md, LICENSE, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
