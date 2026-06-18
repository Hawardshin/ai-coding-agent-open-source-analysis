# stanford-oval/WikiChat Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

WikiChat is an improved RAG. It stops the hallucination of large language models by retrieving data from a corpus.

## 요약

- 조사 단위: `sources/stanford-oval__WikiChat` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 163 files, 20 directories, depth score 73, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/test_index.py, tasks/retrieval.py, retrieval/create_index.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | stanford-oval/WikiChat |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 1602 |
| Forks | 144 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/stanford-oval__WikiChat](../../../../sources/stanford-oval__WikiChat) |
| Existing report | [reports/llm-wiki/repositories/stanford-oval__WikiChat.md](../../../llm-wiki/repositories/stanford-oval__WikiChat.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 163 / 20 |
| Max observed depth | 4 |
| Top directories | .chainlit, benchmark, pipelines, preprocessing, public, retrieval, tasks, tests, utils |
| Top extensions | .py: 59, .json: 50, .prompt: 16, .png: 9, .jinja2: 7, .js: 3, .txt: 3, .css: 2, .jsonl: 2, .md: 2, .toml: 2, .yaml: 2 |
| Source patterns | cli-first, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 10 |
| benchmark | validation surface | 1 |
| pipelines | top-level component | 1 |
| preprocessing | top-level component | 1 |
| public | top-level component | 1 |
| retrieval | top-level component | 1 |
| tasks | top-level component | 1 |
| utils | top-level component | 1 |


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
| retrieval | [tests/test_index.py](../../../../sources/stanford-oval__WikiChat/tests/test_index.py) | retrieval signal |
| retrieval | [tasks/retrieval.py](../../../../sources/stanford-oval__WikiChat/tasks/retrieval.py) | retrieval signal |
| retrieval | [retrieval/create_index.py](../../../../sources/stanford-oval__WikiChat/retrieval/create_index.py) | retrieval signal |
| retrieval | [retrieval/embedding_model_info.py](../../../../sources/stanford-oval__WikiChat/retrieval/embedding_model_info.py) | retrieval signal |
| entrypoints | [tasks/main.py](../../../../sources/stanford-oval__WikiChat/tasks/main.py) | entrypoints signal |
| docs | [README.md](../../../../sources/stanford-oval__WikiChat/README.md) | docs signal |
| eval | [tests/pytest.ini](../../../../sources/stanford-oval__WikiChat/tests/pytest.ini) | eval signal |
| eval | [tests/test_collection_malformed.jsonl](../../../../sources/stanford-oval__WikiChat/tests/test_collection_malformed.jsonl) | eval signal |
| eval | [tests/test_collection.jsonl](../../../../sources/stanford-oval__WikiChat/tests/test_collection.jsonl) | eval signal |
| eval | [tests/test_custom_docling.py](../../../../sources/stanford-oval__WikiChat/tests/test_custom_docling.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [tasks/main.py](../../../../sources/stanford-oval__WikiChat/tasks/main.py) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 19 | [tests/test_index.py](../../../../sources/stanford-oval__WikiChat/tests/test_index.py)<br>[tasks/retrieval.py](../../../../sources/stanford-oval__WikiChat/tasks/retrieval.py)<br>[retrieval/create_index.py](../../../../sources/stanford-oval__WikiChat/retrieval/create_index.py)<br>[retrieval/embedding_model_info.py](../../../../sources/stanford-oval__WikiChat/retrieval/embedding_model_info.py)<br>[retrieval/llm_reranker.py](../../../../sources/stanford-oval__WikiChat/retrieval/llm_reranker.py)<br>[retrieval/qdrant_index.py](../../../../sources/stanford-oval__WikiChat/retrieval/qdrant_index.py)<br>[retrieval/retrieval_commons.py](../../../../sources/stanford-oval__WikiChat/retrieval/retrieval_commons.py)<br>[retrieval/retriever_api.py](../../../../sources/stanford-oval__WikiChat/retrieval/retriever_api.py) |
| spec | 0 | not obvious |
| eval | 53 | [tests/pytest.ini](../../../../sources/stanford-oval__WikiChat/tests/pytest.ini)<br>[tests/test_collection_malformed.jsonl](../../../../sources/stanford-oval__WikiChat/tests/test_collection_malformed.jsonl)<br>[tests/test_collection.jsonl](../../../../sources/stanford-oval__WikiChat/tests/test_collection.jsonl)<br>[tests/test_custom_docling.py](../../../../sources/stanford-oval__WikiChat/tests/test_custom_docling.py)<br>[tests/test_index.py](../../../../sources/stanford-oval__WikiChat/tests/test_index.py)<br>[tests/test_pipelines.py](../../../../sources/stanford-oval__WikiChat/tests/test_pipelines.py)<br>[tests/test_search_query.py](../../../../sources/stanford-oval__WikiChat/tests/test_search_query.py)<br>[tests/test_wikipedia_preprocessing.py](../../../../sources/stanford-oval__WikiChat/tests/test_wikipedia_preprocessing.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/stanford-oval__WikiChat/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 53 | [tests/pytest.ini](../../../../sources/stanford-oval__WikiChat/tests/pytest.ini)<br>[tests/test_collection_malformed.jsonl](../../../../sources/stanford-oval__WikiChat/tests/test_collection_malformed.jsonl)<br>[tests/test_collection.jsonl](../../../../sources/stanford-oval__WikiChat/tests/test_collection.jsonl)<br>[tests/test_custom_docling.py](../../../../sources/stanford-oval__WikiChat/tests/test_custom_docling.py)<br>[tests/test_index.py](../../../../sources/stanford-oval__WikiChat/tests/test_index.py)<br>[tests/test_pipelines.py](../../../../sources/stanford-oval__WikiChat/tests/test_pipelines.py) |
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
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `tests/test_index.py`, `tasks/retrieval.py`, `retrieval/create_index.py`.
2. Trace execution through entrypoints: `tasks/main.py`.
3. Inspect retrieval/memory/indexing through: `tests/test_index.py`, `tasks/retrieval.py`, `retrieval/create_index.py`.
4. Verify behavior through test/eval files: `tests/pytest.ini`, `tests/test_collection_malformed.jsonl`, `tests/test_collection.jsonl`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 WikiChat is an improved RAG. It stops the hallucination of large language models by retrieving data from a corpus.. 핵심 구조 신호는 Python, README.md, LICENSE, tests, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 ci signal not obvious, needs deeper structural scan입니다.
