# kakaobrain/hotr

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakaobrain/hotr |
| local path | sources/kakaobrain__hotr |
| HEAD | d3cb632 |
| stars/forks | 154 / 20 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2023-03-16T05:03:59Z |
| trendScore / priorityScore | 75 / 200 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 62 | hotr/data/evaluators/hico_eval.py, hotr/data/datasets/hico.py, hotr/models/post_process.py |
| Korean language / Korea domain | 15 | README.md, hotr/data/evaluators/hico_eval.py, hotr/engine/evaluator_vcoco.py |
| RAG / retrieval | 10 | hotr/engine/arg_parser.py, hotr/models/criterion.py, hotr/models/detr.py |
| AI agent / tool use | 2 | hotr/metrics/vcoco/ap_agent.py |
| Spec / doc-driven workflow | 1 | hotr/models/criterion.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 39 |
| manifests | 2 |
| docs | 1 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | HOTR: End-to-End Human-Object Interaction Detection with Transformers |
| headings | HOTR: End-to-End Human-Object Interaction Detection with Transformers / 1. Environmental Setup / 2. HOI dataset setup / V-COCO setup / HICO-DET setup / dataset setup / 3. How to Train/Test HOTR / single-gpu training / testing / multi-gpu training / testing (8 GPUs) / [Makefile] |
| excerpt | <p align="center" <img width="40%" src="./imgs/logo.png" </p Official PyTorch Implementation for HOTR End to End Human Object Interaction Detection with Transformers http //arxiv.org/abs/2104.13682 CVPR'2021, Oral Presentation HOTR End to End Human Object Interaction Detection with Transformers HOTR is a novel framework which directly predicts a set of {human, object, interaction} triplets from an image using a transformer based encoder decoder. Through the set level prediction, our method effectively exploits the inherent semantic relationships in an image and does not require time consuming post processing which is the main bottleneck of existing methods. Our proposed algorithm achieves th |


## 주요 파일

### Manifests

- README.md
- Makefile


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| hotr | 33 |
| .gitignore | 1 |
| LICENSE | 1 |
| main.py | 1 |
| Makefile | 1 |
| NOTICE | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 34 |
| [no-ext] | 4 |
| .md | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
