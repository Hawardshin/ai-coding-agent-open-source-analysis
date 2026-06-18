# naver/bergen 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Benchmarking library for RAG

## 요약

- 조사 단위: `sources/naver__bergen` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 701 files, 55 directories, depth score 88, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=scripts/wiki_url_to_id.py, runs/run.rerank.retriever.top_50.bm25.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec, runs/run.rerank.retriever.top_50.naver_splade-v3.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec이고, 의존성 단서는 transformers, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | naver/bergen |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Jupyter Notebook |
| Stars | 274 |
| Forks | 33 |
| License | NOASSERTION |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__bergen](../../../../sources/naver__bergen) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__bergen.md](../../../korea-trending/repositories/naver__bergen.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 701 / 55 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | config, documentation, models, modules, notebooks, qrels, runs, scripts, tests |
| 상위 확장자 | .yaml: 421, .trec: 100, .py: 88, .txt: 27, .json: 26, .md: 13, .sh: 8, .pdf: 7, .ipynb: 3, .png: 2, .tsv: 2, (none): 2 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | transformers |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 31 | [models/context_processors/__init__.py](../../../../sources/naver__bergen/models/context_processors/__init__.py)<br>[models/context_processors/context_processor.py](../../../../sources/naver__bergen/models/context_processors/context_processor.py)<br>[models/context_processors/dslr_ce.py](../../../../sources/naver__bergen/models/context_processors/dslr_ce.py)<br>[models/context_processors/llmlingua2.py](../../../../sources/naver__bergen/models/context_processors/llmlingua2.py)<br>[models/context_processors/longllmlingua.py](../../../../sources/naver__bergen/models/context_processors/longllmlingua.py)<br>[models/context_processors/provence.py](../../../../sources/naver__bergen/models/context_processors/provence.py)<br>[models/context_processors/recomp.py](../../../../sources/naver__bergen/models/context_processors/recomp.py)<br>[config/context_processor/recomp/recomp_abs.yaml](../../../../sources/naver__bergen/config/context_processor/recomp/recomp_abs.yaml) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 26 | [scripts/wiki_url_to_id.py](../../../../sources/naver__bergen/scripts/wiki_url_to_id.py)<br>[runs/run.rerank.retriever.top_50.bm25.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec](../../../../sources/naver__bergen/runs/run.rerank.retriever.top_50.bm25.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec)<br>[runs/run.rerank.retriever.top_50.naver_splade-v3.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec](../../../../sources/naver__bergen/runs/run.rerank.retriever.top_50.naver_splade-v3.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec)<br>[runs/run.rerank.retriever.top_50.Shitao_RetroMAE_MSMARCO_distill.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec](../../../../sources/naver__bergen/runs/run.rerank.retriever.top_50.Shitao_RetroMAE_MSMARCO_distill.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec)<br>[runs/run.retrieve.top_50.wiki_qa.kilt-100w.dev.bm25.trec](../../../../sources/naver__bergen/runs/run.retrieve.top_50.wiki_qa.kilt-100w.dev.bm25.trec)<br>[runs/run.retrieve.top_50.wiki_qa.kilt-100w.dev.naver_splade-v3.trec](../../../../sources/naver__bergen/runs/run.retrieve.top_50.wiki_qa.kilt-100w.dev.naver_splade-v3.trec)<br>[runs/run.retrieve.top_50.wiki_qa.kilt-100w.dev.Shitao_RetroMAE_MSMARCO_distill.trec](../../../../sources/naver__bergen/runs/run.retrieve.top_50.wiki_qa.kilt-100w.dev.Shitao_RetroMAE_MSMARCO_distill.trec)<br>[modules/rag.py](../../../../sources/naver__bergen/modules/rag.py) |
| spec | 1 | [requirements.txt](../../../../sources/naver__bergen/requirements.txt) |
| eval | 19 | [tests/__init__.py](../../../../sources/naver__bergen/tests/__init__.py)<br>[tests/zeroshot_test.py](../../../../sources/naver__bergen/tests/zeroshot_test.py)<br>[tests/utdata/ut1_docs.tsv](../../../../sources/naver__bergen/tests/utdata/ut1_docs.tsv)<br>[tests/utdata/ut1_queries.tsv](../../../../sources/naver__bergen/tests/utdata/ut1_queries.tsv)<br>[tests/utdata/utexp_pos/config.yaml](../../../../sources/naver__bergen/tests/utdata/utexp_pos/config.yaml)<br>[tests/utdata/utexp_pos/eval_dev_out.json](../../../../sources/naver__bergen/tests/utdata/utexp_pos/eval_dev_out.json)<br>[tests/utdata/utexp_neg/config.yaml](../../../../sources/naver__bergen/tests/utdata/utexp_neg/config.yaml)<br>[tests/utdata/utexp_neg/eval_dev_out.json](../../../../sources/naver__bergen/tests/utdata/utexp_neg/eval_dev_out.json) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 3 | [README.md](../../../../sources/naver__bergen/README.md)<br>[scripts/xprovence/readme.md](../../../../sources/naver__bergen/scripts/xprovence/readme.md)<br>[scripts/provence/readme.md](../../../../sources/naver__bergen/scripts/provence/readme.md) |
| config | 1 | [requirements.txt](../../../../sources/naver__bergen/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 19 | [tests/__init__.py](../../../../sources/naver__bergen/tests/__init__.py)<br>[tests/zeroshot_test.py](../../../../sources/naver__bergen/tests/zeroshot_test.py)<br>[tests/utdata/ut1_docs.tsv](../../../../sources/naver__bergen/tests/utdata/ut1_docs.tsv)<br>[tests/utdata/ut1_queries.tsv](../../../../sources/naver__bergen/tests/utdata/ut1_queries.tsv)<br>[tests/utdata/utexp_pos/config.yaml](../../../../sources/naver__bergen/tests/utdata/utexp_pos/config.yaml)<br>[tests/utdata/utexp_pos/eval_dev_out.json](../../../../sources/naver__bergen/tests/utdata/utexp_pos/eval_dev_out.json) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `scripts/wiki_url_to_id.py`, `runs/run.rerank.retriever.top_50.bm25.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec`, `runs/run.rerank.retriever.top_50.naver_splade-v3.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec`.
2. agent/tool runtime 매핑: `models/context_processors/__init__.py`, `models/context_processors/context_processor.py`, `models/context_processors/dslr_ce.py`.
3. retrieval/memory/indexing 확인: `scripts/wiki_url_to_id.py`, `runs/run.rerank.retriever.top_50.bm25.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec`, `runs/run.rerank.retriever.top_50.naver_splade-v3.rerank.top_50.wiki_qa.kilt-100w.dev.naver_trecdl22-crossencoder-debertav3.trec`.
4. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/zeroshot_test.py`, `tests/utdata/ut1_docs.tsv`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Benchmarking library for RAG. 핵심 구조 신호는 Jupyter Notebook, requirements.txt, README.md, transformers, tests, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
