# naver/splade

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/splade |
| local path | sources/naver__splade |
| HEAD | 8dcd33a |
| stars/forks | 994 / 96 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2024-05-03T14:52:32Z |
| trendScore / priorityScore | 110 / 272 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 112 | conf/README.md, efficient_splade_pisa/README.md, pruning/README.md |
| Korean language / Korea domain | 34 | README.md, setup.py, conf/efficient_splade/config_V_from_huggingface.yaml |
| LLM wiki / memory / graph | 7 | README.md, splade/datasets/datasets.py, splade/hf/datasets.py |
| Local LLM / on-device inference | 1 | splade/tasks/base/evaluator.py |
| Spec / doc-driven workflow | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | documentParsing, evalObservability, graphMemory, korea-signal, llm-wiki-memory, llmFramework, local-llm, rag, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 175 |
| manifests | 8 |
| docs | 8 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | SPLADE |
| headings | SPLADE / What's New: / Getting started :rocket: / Requirements / Usage / Playing with the model / High level overview of the code structure / Data / Quick start / Additional examples |
| excerpt | SPLADE ! paper https //img.shields.io/badge/arxiv arXiv%3A2107.05720 brightgreen https //arxiv.org/abs/2107.05720 ! blog https //img.shields.io/badge/blog splade orange https //europe.naverlabs.com/blog/splade a sparse bi encoder bert based model achieves effective and efficient first stage ranking/ ! huggingface weights https //img.shields.io/badge/huggingface splade 9cf https //huggingface.co/naver ! weights https //img.shields.io/badge/weights splade blue https //europe.naverlabs.com/research/machine learning and optimization/splade models/ What's New November 2023 Better training code for SPLADE and rerankers training e.g, cross encoders, RankT5 available; new models coming soon on githu |


## 주요 파일

### Manifests

- benchmarking_sigir23/README.md
- conf/README.md
- efficient_splade_pisa/README.md
- pruning/README.md
- README.md
- conf/efficient_splade/README.md
- main_config/two_msmarco/README.md
- splade/hf/README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| conf | 66 |
| splade | 52 |
| main_config | 28 |
| pruning | 13 |
| data | 7 |
| .gitattributes | 1 |
| .gitignore | 1 |
| benchmarking_sigir23 | 1 |
| conda_splade_env.yml | 1 |
| efficient_splade_pisa | 1 |
| inference_splade.ipynb | 1 |
| LICENSE | 1 |
| README.md | 1 |
| setup.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .yaml | 90 |
| .py | 55 |
| .sh | 10 |
| .md | 8 |
| .tsv | 5 |
| [no-ext] | 3 |
| .json | 2 |
| .ipynb | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
