# 2betforyou/GraphRAG Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

GraphRAG framework for Korean financial-security regulatory interpretation

## 요약

- 조사 단위: `sources/2betforyou__GraphRAG` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 419 files, 40 directories, depth score 90, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 retrieval=pjy/ask_rag.py, pjy/build_index.py, pjy/inference_graphrag.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | 2betforyou/GraphRAG |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/2betforyou__GraphRAG](../../../../sources/2betforyou__GraphRAG) |
| Existing report | [reports/korea-trending/repositories/2betforyou__GraphRAG.md](../../../korea-trending/repositories/2betforyou__GraphRAG.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 419 / 40 |
| Max observed depth | 5 |
| Top directories | dataset, fin, pjy |
| Top extensions | .txt: 164, .csv: 88, .jsonl: 77, .py: 71, .md: 12, .json: 4, (none): 2, .yml: 1 |
| Source patterns | retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| dataset | top-level component | 1 |
| fin | top-level component | 1 |
| pjy | top-level component | 1 |


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
| retrieval | [pjy/ask_rag.py](../../../../sources/2betforyou__GraphRAG/pjy/ask_rag.py) | retrieval signal |
| retrieval | [pjy/build_index.py](../../../../sources/2betforyou__GraphRAG/pjy/build_index.py) | retrieval signal |
| retrieval | [pjy/inference_graphrag.py](../../../../sources/2betforyou__GraphRAG/pjy/inference_graphrag.py) | retrieval signal |
| retrieval | [pjy/inference5_rag.py](../../../../sources/2betforyou__GraphRAG/pjy/inference5_rag.py) | retrieval signal |
| docs | [README.md](../../../../sources/2betforyou__GraphRAG/README.md) | docs signal |
| docs | [pjy/README.md](../../../../sources/2betforyou__GraphRAG/pjy/README.md) | docs signal |
| docs | [pjy/graphrag/README.md](../../../../sources/2betforyou__GraphRAG/pjy/graphrag/README.md) | docs signal |
| docs | [fin/README.md](../../../../sources/2betforyou__GraphRAG/fin/README.md) | docs signal |
| eval | [fin/data/test.csv](../../../../sources/2betforyou__GraphRAG/fin/data/test.csv) | eval signal |
| eval | [dataset/test.csv](../../../../sources/2betforyou__GraphRAG/dataset/test.csv) | eval signal |
| config | [fin/requirements.txt](../../../../sources/2betforyou__GraphRAG/fin/requirements.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 29 | [pjy/ask_rag.py](../../../../sources/2betforyou__GraphRAG/pjy/ask_rag.py)<br>[pjy/build_index.py](../../../../sources/2betforyou__GraphRAG/pjy/build_index.py)<br>[pjy/inference_graphrag.py](../../../../sources/2betforyou__GraphRAG/pjy/inference_graphrag.py)<br>[pjy/inference5_rag.py](../../../../sources/2betforyou__GraphRAG/pjy/inference5_rag.py)<br>[pjy/rag_searcher.py](../../../../sources/2betforyou__GraphRAG/pjy/rag_searcher.py)<br>[pjy/graphrag/build_graph.py](../../../../sources/2betforyou__GraphRAG/pjy/graphrag/build_graph.py)<br>[pjy/graphrag/build_index_embed.py](../../../../sources/2betforyou__GraphRAG/pjy/graphrag/build_index_embed.py)<br>[pjy/graphrag/build_index.py](../../../../sources/2betforyou__GraphRAG/pjy/graphrag/build_index.py) |
| spec | 1 | [fin/requirements.txt](../../../../sources/2betforyou__GraphRAG/fin/requirements.txt) |
| eval | 2 | [fin/data/test.csv](../../../../sources/2betforyou__GraphRAG/fin/data/test.csv)<br>[dataset/test.csv](../../../../sources/2betforyou__GraphRAG/dataset/test.csv) |
| security | 1 | [dataset/all/extra_security_sft.jsonl](../../../../sources/2betforyou__GraphRAG/dataset/all/extra_security_sft.jsonl) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 6 | [README.md](../../../../sources/2betforyou__GraphRAG/README.md)<br>[pjy/README.md](../../../../sources/2betforyou__GraphRAG/pjy/README.md)<br>[pjy/graphrag/README.md](../../../../sources/2betforyou__GraphRAG/pjy/graphrag/README.md)<br>[fin/README.md](../../../../sources/2betforyou__GraphRAG/fin/README.md)<br>[fin/scripts/README_RAG_TTA.md](../../../../sources/2betforyou__GraphRAG/fin/scripts/README_RAG_TTA.md)<br>[dataset/korquad.github.io/README.md](../../../../sources/2betforyou__GraphRAG/dataset/korquad.github.io/README.md) |
| config | 1 | [fin/requirements.txt](../../../../sources/2betforyou__GraphRAG/fin/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2 | [fin/data/test.csv](../../../../sources/2betforyou__GraphRAG/fin/data/test.csv)<br>[dataset/test.csv](../../../../sources/2betforyou__GraphRAG/dataset/test.csv) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [dataset/all/extra_security_sft.jsonl](../../../../sources/2betforyou__GraphRAG/dataset/all/extra_security_sft.jsonl) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `pjy/ask_rag.py`, `pjy/build_index.py`, `pjy/inference_graphrag.py`.
2. Inspect retrieval/memory/indexing through: `pjy/ask_rag.py`, `pjy/build_index.py`, `pjy/inference_graphrag.py`.
3. Verify behavior through test/eval files: `fin/data/test.csv`, `dataset/test.csv`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 GraphRAG framework for Korean financial security regulatory interpretation. 핵심 구조 신호는 Python, README.md, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
