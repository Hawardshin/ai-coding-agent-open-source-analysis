# naver/bergen Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Benchmarking library for RAG

## 요약

- 조사 단위: `sources/naver__bergen` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 701 files, 55 directories, depth score 94, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=scripts/wiki_url_to_id.py, runs/run.rerank.retriever.top_50.bm25.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec, runs/run.rerank.retriever.top_50.naver_splade-v3.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec이고, 의존성 단서는 transformers, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/bergen |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Jupyter Notebook |
| Stars | 274 |
| Forks | 33 |
| License | NOASSERTION |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__bergen](../../../../sources/naver__bergen) |
| Existing report | [reports/korea-trending/repositories/naver__bergen.md](../../../korea-trending/repositories/naver__bergen.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 701 / 55 |
| Max observed depth | 4 |
| Top directories | config, documentation, models, modules, notebooks, qrels, runs, scripts, tests |
| Top extensions | .yaml: 421, .trec: 100, .py: 88, .txt: 27, .json: 26, .md: 13, .sh: 8, .pdf: 7, .ipynb: 3, .png: 2, .tsv: 2, (none): 2 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 9 |
| config | top-level component | 1 |
| documentation | documentation surface | 1 |
| models | top-level component | 1 |
| modules | top-level component | 1 |
| notebooks | top-level component | 1 |
| qrels | top-level component | 1 |
| runs | top-level component | 1 |
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
| modelRuntime | transformers |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [scripts/wiki_url_to_id.py](../../../../sources/naver__bergen/scripts/wiki_url_to_id.py) | retrieval signal |
| retrieval | [runs/run.rerank.retriever.top_50.bm25.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec](../../../../sources/naver__bergen/runs/run.rerank.retriever.top_50.bm25.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec) | retrieval signal |
| retrieval | [runs/run.rerank.retriever.top_50.naver_splade-v3.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec](../../../../sources/naver__bergen/runs/run.rerank.retriever.top_50.naver_splade-v3.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec) | retrieval signal |
| retrieval | [runs/run.rerank.retriever.top_50.Shitao_RetroMAE_MSMARCO_distill.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec](../../../../sources/naver__bergen/runs/run.rerank.retriever.top_50.Shitao_RetroMAE_MSMARCO_distill.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec) | retrieval signal |
| docs | [README.md](../../../../sources/naver__bergen/README.md) | docs signal |
| docs | [scripts/xprovence/readme.md](../../../../sources/naver__bergen/scripts/xprovence/readme.md) | docs signal |
| docs | [scripts/provence/readme.md](../../../../sources/naver__bergen/scripts/provence/readme.md) | docs signal |
| eval | [tests/__init__.py](../../../../sources/naver__bergen/tests/__init__.py) | eval signal |
| eval | [tests/zeroshot_test.py](../../../../sources/naver__bergen/tests/zeroshot_test.py) | eval signal |
| eval | [tests/utdata/ut1_docs.tsv](../../../../sources/naver__bergen/tests/utdata/ut1_docs.tsv) | eval signal |
| eval | [tests/utdata/ut1_queries.tsv](../../../../sources/naver__bergen/tests/utdata/ut1_queries.tsv) | eval signal |
| config | [requirements.txt](../../../../sources/naver__bergen/requirements.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 31 | [models/context_processors/__init__.py](../../../../sources/naver__bergen/models/context_processors/__init__.py)<br>[models/context_processors/context_processor.py](../../../../sources/naver__bergen/models/context_processors/context_processor.py)<br>[models/context_processors/dslr_ce.py](../../../../sources/naver__bergen/models/context_processors/dslr_ce.py)<br>[models/context_processors/llmlingua2.py](../../../../sources/naver__bergen/models/context_processors/llmlingua2.py)<br>[models/context_processors/longllmlingua.py](../../../../sources/naver__bergen/models/context_processors/longllmlingua.py)<br>[models/context_processors/provence.py](../../../../sources/naver__bergen/models/context_processors/provence.py)<br>[models/context_processors/recomp.py](../../../../sources/naver__bergen/models/context_processors/recomp.py)<br>[config/context_processor/recomp/recomp_abs.yaml](../../../../sources/naver__bergen/config/context_processor/recomp/recomp_abs.yaml) |
| mcp | 0 | not obvious |
| retrieval | 26 | [scripts/wiki_url_to_id.py](../../../../sources/naver__bergen/scripts/wiki_url_to_id.py)<br>[runs/run.rerank.retriever.top_50.bm25.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec](../../../../sources/naver__bergen/runs/run.rerank.retriever.top_50.bm25.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec)<br>[runs/run.rerank.retriever.top_50.naver_splade-v3.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec](../../../../sources/naver__bergen/runs/run.rerank.retriever.top_50.naver_splade-v3.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec)<br>[runs/run.rerank.retriever.top_50.Shitao_RetroMAE_MSMARCO_distill.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec](../../../../sources/naver__bergen/runs/run.rerank.retriever.top_50.Shitao_RetroMAE_MSMARCO_distill.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec)<br>[runs/run.retrieve.top_50.wiki_qa.kilt-100w.dev.bm25.trec](../../../../sources/naver__bergen/runs/run.retrieve.top_50.wiki_qa.kilt-100w.dev.bm25.trec)<br>[runs/run.retrieve.top_50.wiki_qa.kilt-100w.dev.naver_splade-v3.trec](../../../../sources/naver__bergen/runs/run.retrieve.top_50.wiki_qa.kilt-100w.dev.naver_splade-v3.trec)<br>[runs/run.retrieve.top_50.wiki_qa.kilt-100w.dev.Shitao_RetroMAE_MSMARCO_distill.trec](../../../../sources/naver__bergen/runs/run.retrieve.top_50.wiki_qa.kilt-100w.dev.Shitao_RetroMAE_MSMARCO_distill.trec)<br>[modules/rag.py](../../../../sources/naver__bergen/modules/rag.py) |
| spec | 1 | [requirements.txt](../../../../sources/naver__bergen/requirements.txt) |
| eval | 19 | [tests/__init__.py](../../../../sources/naver__bergen/tests/__init__.py)<br>[tests/zeroshot_test.py](../../../../sources/naver__bergen/tests/zeroshot_test.py)<br>[tests/utdata/ut1_docs.tsv](../../../../sources/naver__bergen/tests/utdata/ut1_docs.tsv)<br>[tests/utdata/ut1_queries.tsv](../../../../sources/naver__bergen/tests/utdata/ut1_queries.tsv)<br>[tests/utdata/utexp_pos/config.yaml](../../../../sources/naver__bergen/tests/utdata/utexp_pos/config.yaml)<br>[tests/utdata/utexp_pos/eval_dev_out.json](../../../../sources/naver__bergen/tests/utdata/utexp_pos/eval_dev_out.json)<br>[tests/utdata/utexp_neg/config.yaml](../../../../sources/naver__bergen/tests/utdata/utexp_neg/config.yaml)<br>[tests/utdata/utexp_neg/eval_dev_out.json](../../../../sources/naver__bergen/tests/utdata/utexp_neg/eval_dev_out.json) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 3 | [README.md](../../../../sources/naver__bergen/README.md)<br>[scripts/xprovence/readme.md](../../../../sources/naver__bergen/scripts/xprovence/readme.md)<br>[scripts/provence/readme.md](../../../../sources/naver__bergen/scripts/provence/readme.md) |
| config | 1 | [requirements.txt](../../../../sources/naver__bergen/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 19 | [tests/__init__.py](../../../../sources/naver__bergen/tests/__init__.py)<br>[tests/zeroshot_test.py](../../../../sources/naver__bergen/tests/zeroshot_test.py)<br>[tests/utdata/ut1_docs.tsv](../../../../sources/naver__bergen/tests/utdata/ut1_docs.tsv)<br>[tests/utdata/ut1_queries.tsv](../../../../sources/naver__bergen/tests/utdata/ut1_queries.tsv)<br>[tests/utdata/utexp_pos/config.yaml](../../../../sources/naver__bergen/tests/utdata/utexp_pos/config.yaml)<br>[tests/utdata/utexp_pos/eval_dev_out.json](../../../../sources/naver__bergen/tests/utdata/utexp_pos/eval_dev_out.json) |
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
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `scripts/wiki_url_to_id.py`, `runs/run.rerank.retriever.top_50.bm25.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec`, `runs/run.rerank.retriever.top_50.naver_splade-v3.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec`.
2. Map agent/tool runtime through: `models/context_processors/__init__.py`, `models/context_processors/context_processor.py`, `models/context_processors/dslr_ce.py`.
3. Inspect retrieval/memory/indexing through: `scripts/wiki_url_to_id.py`, `runs/run.rerank.retriever.top_50.bm25.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec`, `runs/run.rerank.retriever.top_50.naver_splade-v3.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec`.
4. Verify behavior through test/eval files: `tests/__init__.py`, `tests/zeroshot_test.py`, `tests/utdata/ut1_docs.tsv`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Benchmarking library for RAG. 핵심 구조 신호는 Jupyter Notebook, requirements.txt, README.md, transformers, tests, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 ci signal not obvious, needs deeper structural scan입니다.
