# naver/fire

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/fire |
| local path | sources/naver__fire |
| HEAD | d150290 |
| stars/forks | 142 / 7 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2022-07-06T08:12:31Z |
| trendScore / priorityScore | 72 / 167 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 12 | README.MD, Dockerfile, evaluate.py |
| RAG / retrieval | 3 | README.MD, train_fire.yml |
| Spec / doc-driven workflow | 1 | README.MD |


## 분류와 스택

| key | value |
| --- | --- |
| categories | graphMemory, korea-signal, rag, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | Vector/search store, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 13 |
| manifests | 1 |
| docs | 1 |
| tests | 0 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.MD |
| title | Learning Super-Features for Image Retrieval |
| headings | Learning Super-Features for Image Retrieval / License / Preparation / Evaluating our ICLR'22 FIRe model / Training a FIRe model / Pretrained models / Dockerfile / kapture integration / prepare dataset / read license terms and type y [enter] to agree |
| excerpt | Learning Super Features for Image Retrieval This repository contains the code for running our FIRe model presented in our ICLR'22 paper https //openreview.net/pdf?id=wogsFPHwftY License The code is distributed under the CC BY NC SA 4.0 License. See LICENSE LICENSE for more information. It is based on code from HOW https //github.com/gtolias/how , cirtorch https //github.com/filipradenovic/cnnimageretrieval pytorch/ and ASMK https //github.com/jenicek/asmk that are released under their own license, the MIT license. Preparation After cloning this repository, you must also have HOW, cirtorch and ASMK and have them in your PYTHONPATH. 1. install HOW https //github.com/gtolias/how 2. install cirt |


## 주요 파일

### Manifests

- Dockerfile


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| _asmk_how_fire.yml | 1 |
| Dockerfile | 1 |
| eval_fire.yml | 1 |
| evaluate.py | 1 |
| fire_network.py | 1 |
| kapture_compute_pairs.py | 1 |
| LICENSE | 1 |
| lit.py | 1 |
| losses.py | 1 |
| NOTICE | 1 |
| README.MD | 1 |
| train_fire.yml | 1 |
| train.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 6 |
| .yml | 3 |
| [no-ext] | 3 |
| .md | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
