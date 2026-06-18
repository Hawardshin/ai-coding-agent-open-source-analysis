# NirDiamant/RAG_Techniques Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

This repository showcases various advanced techniques for Retrieval-Augmented Generation (RAG) systems. Each technique has a detailed notebook tutorial.

## 요약

- 조사 단위: `sources/NirDiamant__RAG_Techniques` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 122 files, 8 directories, depth score 70, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | NirDiamant/RAG_Techniques |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Jupyter Notebook |
| Stars | 28014 |
| Forks | 3389 |
| License | NOASSERTION |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/NirDiamant__RAG_Techniques](../../../../sources/NirDiamant__RAG_Techniques) |
| Existing report | [reports/global-trending/repositories/NirDiamant__RAG_Techniques.md](../../../global-trending/repositories/NirDiamant__RAG_Techniques.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 122 / 8 |
| Max observed depth | 3 |
| Top directories | .github, all_rag_techniques, all_rag_techniques_runnable_scripts, data, evaluation, images, tests |
| Top extensions | .ipynb: 42, .svg: 29, .py: 23, .png: 14, .json: 3, .yml: 3, .csv: 2, .md: 2, (none): 2, .pdf: 1, .txt: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 3 |
| .github | ci surface | 1 |
| all_rag_techniques | top-level component | 1 |
| all_rag_techniques_runnable_scripts | top-level component | 1 |
| data | top-level component | 1 |
| evaluation | top-level component | 1 |
| images | top-level component | 1 |


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
| docs | [README.md](../../../../sources/NirDiamant__RAG_Techniques/README.md) | docs signal |
| eval | [tests/conftest.py](../../../../sources/NirDiamant__RAG_Techniques/tests/conftest.py) | eval signal |
| eval | [tests/test_imports.py](../../../../sources/NirDiamant__RAG_Techniques/tests/test_imports.py) | eval signal |
| eval | [evaluation/define_evaluation_metrics.ipynb](../../../../sources/NirDiamant__RAG_Techniques/evaluation/define_evaluation_metrics.ipynb) | eval signal |
| eval | [evaluation/end-2-end_rag_evaluation.ipynb](../../../../sources/NirDiamant__RAG_Techniques/evaluation/end-2-end_rag_evaluation.ipynb) | eval signal |
| ci | [.github/workflows/github-test.yml](../../../../sources/NirDiamant__RAG_Techniques/.github/workflows/github-test.yml) | ci support |
| ci | [.github/workflows/local-test.yml](../../../../sources/NirDiamant__RAG_Techniques/.github/workflows/local-test.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 4 | [images/context_enrichment_window.svg](../../../../sources/NirDiamant__RAG_Techniques/images/context_enrichment_window.svg)<br>[all_rag_techniques_runnable_scripts/context_enrichment_window_around_chunk.py](../../../../sources/NirDiamant__RAG_Techniques/all_rag_techniques_runnable_scripts/context_enrichment_window_around_chunk.py)<br>[all_rag_techniques/context_enrichment_window_around_chunk_with_llamaindex.ipynb](../../../../sources/NirDiamant__RAG_Techniques/all_rag_techniques/context_enrichment_window_around_chunk_with_llamaindex.ipynb)<br>[all_rag_techniques/context_enrichment_window_around_chunk.ipynb](../../../../sources/NirDiamant__RAG_Techniques/all_rag_techniques/context_enrichment_window_around_chunk.ipynb) |
| mcp | 0 | not obvious |
| retrieval | 73 | [images/adaptive_retrieval.svg](../../../../sources/NirDiamant__RAG_Techniques/images/adaptive_retrieval.svg)<br>[images/contextual_chunk_headers.svg](../../../../sources/NirDiamant__RAG_Techniques/images/contextual_chunk_headers.svg)<br>[images/fusion_retrieval.svg](../../../../sources/NirDiamant__RAG_Techniques/images/fusion_retrieval.svg)<br>[images/graph_rag_with_milvus_1.png](../../../../sources/NirDiamant__RAG_Techniques/images/graph_rag_with_milvus_1.png)<br>[images/graph_rag_with_milvus_2.png](../../../../sources/NirDiamant__RAG_Techniques/images/graph_rag_with_milvus_2.png)<br>[images/graph_rag.svg](../../../../sources/NirDiamant__RAG_Techniques/images/graph_rag.svg)<br>[images/Microsoft_GraphRag.svg](../../../../sources/NirDiamant__RAG_Techniques/images/Microsoft_GraphRag.svg)<br>[images/multi_model_rag_with_captioning.svg](../../../../sources/NirDiamant__RAG_Techniques/images/multi_model_rag_with_captioning.svg) |
| spec | 0 | not obvious |
| eval | 10 | [tests/conftest.py](../../../../sources/NirDiamant__RAG_Techniques/tests/conftest.py)<br>[tests/test_imports.py](../../../../sources/NirDiamant__RAG_Techniques/tests/test_imports.py)<br>[evaluation/define_evaluation_metrics.ipynb](../../../../sources/NirDiamant__RAG_Techniques/evaluation/define_evaluation_metrics.ipynb)<br>[evaluation/end-2-end_rag_evaluation.ipynb](../../../../sources/NirDiamant__RAG_Techniques/evaluation/end-2-end_rag_evaluation.ipynb)<br>[evaluation/evaluation_deep_eval.ipynb](../../../../sources/NirDiamant__RAG_Techniques/evaluation/evaluation_deep_eval.ipynb)<br>[evaluation/evaluation_grouse.ipynb](../../../../sources/NirDiamant__RAG_Techniques/evaluation/evaluation_grouse.ipynb)<br>[evaluation/evalute_rag.py](../../../../sources/NirDiamant__RAG_Techniques/evaluation/evalute_rag.py)<br>[evaluation/open-rag-eval-example.ipynb](../../../../sources/NirDiamant__RAG_Techniques/evaluation/open-rag-eval-example.ipynb) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/github-test.yml](../../../../sources/NirDiamant__RAG_Techniques/.github/workflows/github-test.yml)<br>[.github/workflows/local-test.yml](../../../../sources/NirDiamant__RAG_Techniques/.github/workflows/local-test.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/NirDiamant__RAG_Techniques/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 10 | [tests/conftest.py](../../../../sources/NirDiamant__RAG_Techniques/tests/conftest.py)<br>[tests/test_imports.py](../../../../sources/NirDiamant__RAG_Techniques/tests/test_imports.py)<br>[evaluation/define_evaluation_metrics.ipynb](../../../../sources/NirDiamant__RAG_Techniques/evaluation/define_evaluation_metrics.ipynb)<br>[evaluation/end-2-end_rag_evaluation.ipynb](../../../../sources/NirDiamant__RAG_Techniques/evaluation/end-2-end_rag_evaluation.ipynb)<br>[evaluation/evaluation_deep_eval.ipynb](../../../../sources/NirDiamant__RAG_Techniques/evaluation/evaluation_deep_eval.ipynb)<br>[evaluation/evaluation_grouse.ipynb](../../../../sources/NirDiamant__RAG_Techniques/evaluation/evaluation_grouse.ipynb) |
| CI workflows | 2 | [.github/workflows/github-test.yml](../../../../sources/NirDiamant__RAG_Techniques/.github/workflows/github-test.yml)<br>[.github/workflows/local-test.yml](../../../../sources/NirDiamant__RAG_Techniques/.github/workflows/local-test.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.md`, `tests/conftest.py`, `tests/test_imports.py`.
2. Map agent/tool runtime through: `images/context_enrichment_window.svg`, `all_rag_techniques_runnable_scripts/context_enrichment_window_around_chunk.py`, `all_rag_techniques/context_enrichment_window_around_chunk_with_llamaindex.ipynb`.
3. Inspect retrieval/memory/indexing through: `images/adaptive_retrieval.svg`, `images/contextual_chunk_headers.svg`, `images/fusion_retrieval.svg`.
4. Verify behavior through test/eval files: `tests/conftest.py`, `tests/test_imports.py`, `evaluation/define_evaluation_metrics.ipynb`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 This repository showcases various advanced techniques for Retrieval Augmented Generation RAG systems. Each technique has. 핵심 구조 신호는 Jupyter Notebook, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
