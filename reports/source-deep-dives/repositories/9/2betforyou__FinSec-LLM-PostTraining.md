# 2betforyou/FinSec-LLM-PostTraining Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

RAG and QLoRA post-training pipeline for Korean financial-security and regulatory QA

## 요약

- 조사 단위: `sources/2betforyou__FinSec-LLM-PostTraining` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 42 files, 12 directories, depth score 80, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 retrieval=src/retrieval/ask_rag.py, src/retrieval/build_index.py, src/retrieval/rag_searcher.py이고, 의존성 단서는 torch, transformers, faiss, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | 2betforyou/FinSec-LLM-PostTraining |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/2betforyou__FinSec-LLM-PostTraining](../../../../sources/2betforyou__FinSec-LLM-PostTraining) |
| Existing report | [reports/korea-trending/repositories/2betforyou__FinSec-LLM-PostTraining.md](../../../korea-trending/repositories/2betforyou__FinSec-LLM-PostTraining.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 42 / 12 |
| Max observed depth | 3 |
| Top directories | .github, configs, docs, examples, src, tests |
| Top extensions | .py: 22, .md: 13, .yaml: 2, (none): 2, .csv: 1, .jsonl: 1, .txt: 1 |
| Source patterns | retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 18 |
| docs | documentation surface | 5 |
| tests | validation surface | 2 |
| .github | ci surface | 1 |
| configs | top-level component | 1 |
| examples | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | faiss |
| modelRuntime | torch, transformers |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [src/retrieval/ask_rag.py](../../../../sources/2betforyou__FinSec-LLM-PostTraining/src/retrieval/ask_rag.py) | retrieval signal |
| retrieval | [src/retrieval/build_index.py](../../../../sources/2betforyou__FinSec-LLM-PostTraining/src/retrieval/build_index.py) | retrieval signal |
| retrieval | [src/retrieval/rag_searcher.py](../../../../sources/2betforyou__FinSec-LLM-PostTraining/src/retrieval/rag_searcher.py) | retrieval signal |
| retrieval | [src/retrieval/retriever.py](../../../../sources/2betforyou__FinSec-LLM-PostTraining/src/retrieval/retriever.py) | retrieval signal |
| docs | [README.md](../../../../sources/2betforyou__FinSec-LLM-PostTraining/README.md) | docs signal |
| docs | [src/graph_retrieval/README.md](../../../../sources/2betforyou__FinSec-LLM-PostTraining/src/graph_retrieval/README.md) | docs signal |
| docs | [docs/data_card.md](../../../../sources/2betforyou__FinSec-LLM-PostTraining/docs/data_card.md) | docs signal |
| docs | [docs/experiment_notes.md](../../../../sources/2betforyou__FinSec-LLM-PostTraining/docs/experiment_notes.md) | docs signal |
| eval | [tests/test_make_sft_from_csv.py](../../../../sources/2betforyou__FinSec-LLM-PostTraining/tests/test_make_sft_from_csv.py) | eval signal |
| eval | [src/evaluation/evals.py](../../../../sources/2betforyou__FinSec-LLM-PostTraining/src/evaluation/evals.py) | eval signal |
| config | [requirements.txt](../../../../sources/2betforyou__FinSec-LLM-PostTraining/requirements.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 16 | [src/retrieval/ask_rag.py](../../../../sources/2betforyou__FinSec-LLM-PostTraining/src/retrieval/ask_rag.py)<br>[src/retrieval/build_index.py](../../../../sources/2betforyou__FinSec-LLM-PostTraining/src/retrieval/build_index.py)<br>[src/retrieval/rag_searcher.py](../../../../sources/2betforyou__FinSec-LLM-PostTraining/src/retrieval/rag_searcher.py)<br>[src/retrieval/retriever.py](../../../../sources/2betforyou__FinSec-LLM-PostTraining/src/retrieval/retriever.py)<br>[src/inference/inference_rag.py](../../../../sources/2betforyou__FinSec-LLM-PostTraining/src/inference/inference_rag.py)<br>[src/graph_retrieval/build_graph.py](../../../../sources/2betforyou__FinSec-LLM-PostTraining/src/graph_retrieval/build_graph.py)<br>[src/graph_retrieval/build_index_embed.py](../../../../sources/2betforyou__FinSec-LLM-PostTraining/src/graph_retrieval/build_index_embed.py)<br>[src/graph_retrieval/build_index.py](../../../../sources/2betforyou__FinSec-LLM-PostTraining/src/graph_retrieval/build_index.py) |
| spec | 2 | [requirements.txt](../../../../sources/2betforyou__FinSec-LLM-PostTraining/requirements.txt)<br>[ROADMAP.md](../../../../sources/2betforyou__FinSec-LLM-PostTraining/ROADMAP.md) |
| eval | 2 | [tests/test_make_sft_from_csv.py](../../../../sources/2betforyou__FinSec-LLM-PostTraining/tests/test_make_sft_from_csv.py)<br>[src/evaluation/evals.py](../../../../sources/2betforyou__FinSec-LLM-PostTraining/src/evaluation/evals.py) |
| security | 1 | [SECURITY.md](../../../../sources/2betforyou__FinSec-LLM-PostTraining/SECURITY.md) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 6 | [README.md](../../../../sources/2betforyou__FinSec-LLM-PostTraining/README.md)<br>[src/graph_retrieval/README.md](../../../../sources/2betforyou__FinSec-LLM-PostTraining/src/graph_retrieval/README.md)<br>[docs/data_card.md](../../../../sources/2betforyou__FinSec-LLM-PostTraining/docs/data_card.md)<br>[docs/experiment_notes.md](../../../../sources/2betforyou__FinSec-LLM-PostTraining/docs/experiment_notes.md)<br>[docs/project_summary.md](../../../../sources/2betforyou__FinSec-LLM-PostTraining/docs/project_summary.md)<br>[docs/upstage_application_note_ko.md](../../../../sources/2betforyou__FinSec-LLM-PostTraining/docs/upstage_application_note_ko.md) |
| config | 1 | [requirements.txt](../../../../sources/2betforyou__FinSec-LLM-PostTraining/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2 | [tests/test_make_sft_from_csv.py](../../../../sources/2betforyou__FinSec-LLM-PostTraining/tests/test_make_sft_from_csv.py)<br>[src/evaluation/evals.py](../../../../sources/2betforyou__FinSec-LLM-PostTraining/src/evaluation/evals.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [SECURITY.md](../../../../sources/2betforyou__FinSec-LLM-PostTraining/SECURITY.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/retrieval/ask_rag.py`, `src/retrieval/build_index.py`, `src/retrieval/rag_searcher.py`.
2. Inspect retrieval/memory/indexing through: `src/retrieval/ask_rag.py`, `src/retrieval/build_index.py`, `src/retrieval/rag_searcher.py`.
3. Verify behavior through test/eval files: `tests/test_make_sft_from_csv.py`, `src/evaluation/evals.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 RAG and QLoRA post training pipeline for Korean financial security and regulatory QA. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, torch, transformers이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
