# OSU-NLP-Group/HippoRAG Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

[NeurIPS'24] HippoRAG is a novel RAG framework inspired by human long-term memory that enables LLMs to continuously integrate knowledge across external documents. RAG + Knowledge Graphs + Personalized PageRank.

## 요약

- 조사 단위: `sources/OSU-NLP-Group__HippoRAG` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 86 files, 15 directories, depth score 85, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=src/hipporag/embedding_store.py, src/hipporag/utils/embed_utils.py, src/hipporag/prompts/templates/rag_qa_musique.py이고, 의존성 단서는 openai, pydantic, torch, transformers, vllm, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | OSU-NLP-Group/HippoRAG |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | mixed |
| Language | Python |
| Stars | 3631 |
| Forks | 382 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/OSU-NLP-Group__HippoRAG](../../../../sources/OSU-NLP-Group__HippoRAG) |
| Existing report | [reports/llm-wiki/repositories/OSU-NLP-Group__HippoRAG.md](../../../llm-wiki/repositories/OSU-NLP-Group__HippoRAG.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 86 / 15 |
| Max observed depth | 5 |
| Top directories | images, outputs, reproduce, src |
| Top extensions | .py: 62, .json: 11, .md: 5, .png: 5, (none): 2, .txt: 1 |
| Source patterns | cli-first, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 22 |
| images | top-level component | 1 |
| outputs | top-level component | 1 |
| reproduce | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch, transformers, vllm |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [src/hipporag/embedding_store.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/embedding_store.py) | retrieval signal |
| retrieval | [src/hipporag/utils/embed_utils.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/utils/embed_utils.py) | retrieval signal |
| retrieval | [src/hipporag/prompts/templates/rag_qa_musique.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/prompts/templates/rag_qa_musique.py) | retrieval signal |
| retrieval | [src/hipporag/evaluation/retrieval_eval.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/evaluation/retrieval_eval.py) | retrieval signal |
| entrypoints | [main.py](../../../../sources/OSU-NLP-Group__HippoRAG/main.py) | entrypoints signal |
| docs | [README.md](../../../../sources/OSU-NLP-Group__HippoRAG/README.md) | docs signal |
| docs | [src/hipporag/prompts/templates/README.md](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/prompts/templates/README.md) | docs signal |
| docs | [src/hipporag/evaluation/README.md](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/evaluation/README.md) | docs signal |
| docs | [reproduce/README.md](../../../../sources/OSU-NLP-Group__HippoRAG/reproduce/README.md) | docs signal |
| eval | [test_transformers.py](../../../../sources/OSU-NLP-Group__HippoRAG/test_transformers.py) | eval signal |
| eval | [tests_azure.py](../../../../sources/OSU-NLP-Group__HippoRAG/tests_azure.py) | eval signal |
| eval | [tests_local.py](../../../../sources/OSU-NLP-Group__HippoRAG/tests_local.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [main.py](../../../../sources/OSU-NLP-Group__HippoRAG/main.py) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 13 | [src/hipporag/embedding_store.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/embedding_store.py)<br>[src/hipporag/utils/embed_utils.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/utils/embed_utils.py)<br>[src/hipporag/prompts/templates/rag_qa_musique.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/prompts/templates/rag_qa_musique.py)<br>[src/hipporag/evaluation/retrieval_eval.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/evaluation/retrieval_eval.py)<br>[src/hipporag/embedding_model/__init__.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/embedding_model/__init__.py)<br>[src/hipporag/embedding_model/base.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/embedding_model/base.py)<br>[src/hipporag/embedding_model/Cohere.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/embedding_model/Cohere.py)<br>[src/hipporag/embedding_model/Contriever.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/embedding_model/Contriever.py) |
| spec | 1 | [requirements.txt](../../../../sources/OSU-NLP-Group__HippoRAG/requirements.txt) |
| eval | 10 | [test_transformers.py](../../../../sources/OSU-NLP-Group__HippoRAG/test_transformers.py)<br>[tests_azure.py](../../../../sources/OSU-NLP-Group__HippoRAG/tests_azure.py)<br>[tests_local.py](../../../../sources/OSU-NLP-Group__HippoRAG/tests_local.py)<br>[tests_openai.py](../../../../sources/OSU-NLP-Group__HippoRAG/tests_openai.py)<br>[src/hipporag/utils/eval_utils.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/utils/eval_utils.py)<br>[src/hipporag/evaluation/__init__.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/evaluation/__init__.py)<br>[src/hipporag/evaluation/base.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/evaluation/base.py)<br>[src/hipporag/evaluation/qa_eval.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/evaluation/qa_eval.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 4 | [README.md](../../../../sources/OSU-NLP-Group__HippoRAG/README.md)<br>[src/hipporag/prompts/templates/README.md](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/prompts/templates/README.md)<br>[src/hipporag/evaluation/README.md](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/evaluation/README.md)<br>[reproduce/README.md](../../../../sources/OSU-NLP-Group__HippoRAG/reproduce/README.md) |
| config | 1 | [requirements.txt](../../../../sources/OSU-NLP-Group__HippoRAG/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 10 | [test_transformers.py](../../../../sources/OSU-NLP-Group__HippoRAG/test_transformers.py)<br>[tests_azure.py](../../../../sources/OSU-NLP-Group__HippoRAG/tests_azure.py)<br>[tests_local.py](../../../../sources/OSU-NLP-Group__HippoRAG/tests_local.py)<br>[tests_openai.py](../../../../sources/OSU-NLP-Group__HippoRAG/tests_openai.py)<br>[src/hipporag/utils/eval_utils.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/utils/eval_utils.py)<br>[src/hipporag/evaluation/__init__.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/evaluation/__init__.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/hipporag/embedding_store.py`, `src/hipporag/utils/embed_utils.py`, `src/hipporag/prompts/templates/rag_qa_musique.py`.
2. Trace execution through entrypoints: `main.py`.
3. Inspect retrieval/memory/indexing through: `src/hipporag/embedding_store.py`, `src/hipporag/utils/embed_utils.py`, `src/hipporag/prompts/templates/rag_qa_musique.py`.
4. Verify behavior through test/eval files: `test_transformers.py`, `tests_azure.py`, `tests_local.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 NeurIPS'24 HippoRAG is a novel RAG framework inspired by human long term memory that enables LLMs to continuously integr. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, openai, pydantic이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
