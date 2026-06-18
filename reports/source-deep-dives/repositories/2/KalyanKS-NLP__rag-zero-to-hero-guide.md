# KalyanKS-NLP/rag-zero-to-hero-guide Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Comprehensive guide to learn RAG from basics to advanced.

## 요약

- 조사 단위: `sources/KalyanKS-NLP__rag-zero-to-hero-guide` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 32 files, 6 directories, depth score 62, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 retrieval=RAG Evaluation/rag_eval_intro.md, RAG Evaluation/rag_generator_metrics.md, RAG Evaluation/rag_retriever_metrics.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | KalyanKS-NLP/rag-zero-to-hero-guide |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Jupyter Notebook |
| Stars | 1348 |
| Forks | 333 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/KalyanKS-NLP__rag-zero-to-hero-guide](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide) |
| Existing report | [reports/llm-wiki/repositories/KalyanKS-NLP__rag-zero-to-hero-guide.md](../../../llm-wiki/repositories/KalyanKS-NLP__rag-zero-to-hero-guide.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 32 / 6 |
| Max observed depth | 3 |
| Top directories | RAG Basics, RAG Evaluation |
| Top extensions | .gif: 12, .md: 11, .ipynb: 8, (none): 1 |
| Source patterns | retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| RAG Basics | top-level component | 1 |
| RAG Evaluation | top-level component | 1 |


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
| retrieval | [RAG Evaluation/rag_eval_intro.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/rag_eval_intro.md) | retrieval signal |
| retrieval | [RAG Evaluation/rag_generator_metrics.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/rag_generator_metrics.md) | retrieval signal |
| retrieval | [RAG Evaluation/rag_retriever_metrics.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/rag_retriever_metrics.md) | retrieval signal |
| retrieval | [RAG Evaluation/notebooks/Hallucination_RAG.ipynb](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/notebooks/Hallucination_RAG.ipynb) | retrieval signal |
| docs | [README.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/README.md) | docs signal |
| eval | [RAG Evaluation/notebooks/RAG_Evaluation_using_DeepEval.ipynb](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/notebooks/RAG_Evaluation_using_DeepEval.ipynb) | eval signal |
| eval | [RAG Evaluation/notebooks/RAG_Evaluation_using_RAGAS.ipynb](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/notebooks/RAG_Evaluation_using_RAGAS.ipynb) | eval signal |
| eval | [RAG Evaluation/images/RAG_Evaluation_Metrics.gif](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/images/RAG_Evaluation_Metrics.gif) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 29 | [RAG Evaluation/rag_eval_intro.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/rag_eval_intro.md)<br>[RAG Evaluation/rag_generator_metrics.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/rag_generator_metrics.md)<br>[RAG Evaluation/rag_retriever_metrics.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/rag_retriever_metrics.md)<br>[RAG Evaluation/notebooks/Hallucination_RAG.ipynb](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/notebooks/Hallucination_RAG.ipynb)<br>[RAG Evaluation/notebooks/RAG_Evaluation_using_DeepEval.ipynb](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/notebooks/RAG_Evaluation_using_DeepEval.ipynb)<br>[RAG Evaluation/notebooks/RAG_Evaluation_using_RAGAS.ipynb](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/notebooks/RAG_Evaluation_using_RAGAS.ipynb)<br>[RAG Evaluation/images/RAG_Evaluation_Metrics.gif](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/images/RAG_Evaluation_Metrics.gif)<br>[RAG Basics/How_does_RAG_work.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Basics/How_does_RAG_work.md) |
| spec | 2 | [RAG Basics/RAG_Roadmap.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Basics/RAG_Roadmap.md)<br>[RAG Basics/images/RAG_Roadmap.gif](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Basics/images/RAG_Roadmap.gif) |
| eval | 4 | [RAG Evaluation/rag_eval_intro.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/rag_eval_intro.md)<br>[RAG Evaluation/notebooks/RAG_Evaluation_using_DeepEval.ipynb](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/notebooks/RAG_Evaluation_using_DeepEval.ipynb)<br>[RAG Evaluation/notebooks/RAG_Evaluation_using_RAGAS.ipynb](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/notebooks/RAG_Evaluation_using_RAGAS.ipynb)<br>[RAG Evaluation/images/RAG_Evaluation_Metrics.gif](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/images/RAG_Evaluation_Metrics.gif) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 4 | [RAG Evaluation/rag_eval_intro.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/rag_eval_intro.md)<br>[RAG Evaluation/notebooks/RAG_Evaluation_using_DeepEval.ipynb](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/notebooks/RAG_Evaluation_using_DeepEval.ipynb)<br>[RAG Evaluation/notebooks/RAG_Evaluation_using_RAGAS.ipynb](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/notebooks/RAG_Evaluation_using_RAGAS.ipynb)<br>[RAG Evaluation/images/RAG_Evaluation_Metrics.gif](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/images/RAG_Evaluation_Metrics.gif) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `RAG Evaluation/rag_eval_intro.md`, `RAG Evaluation/rag_generator_metrics.md`, `RAG Evaluation/rag_retriever_metrics.md`.
2. Inspect retrieval/memory/indexing through: `RAG Evaluation/rag_eval_intro.md`, `RAG Evaluation/rag_generator_metrics.md`, `RAG Evaluation/rag_retriever_metrics.md`.
3. Verify behavior through test/eval files: `RAG Evaluation/rag_eval_intro.md`, `RAG Evaluation/notebooks/RAG_Evaluation_using_DeepEval.ipynb`, `RAG Evaluation/notebooks/RAG_Evaluation_using_RAGAS.ipynb`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Comprehensive guide to learn RAG from basics to advanced.. 핵심 구조 신호는 Jupyter Notebook, README.md, LICENSE, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
