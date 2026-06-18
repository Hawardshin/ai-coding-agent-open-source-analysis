# kakaobrain/sparse-detr

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakaobrain/sparse-detr |
| local path | sources/kakaobrain__sparse-detr |
| HEAD | f40632c |
| stars/forks | 175 / 17 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2024-01-03T05:42:46Z |
| trendScore / priorityScore | 76 / 192 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 27 | README.md, datasets/data_prefetcher.py, main.py |
| RAG / retrieval | 23 | main.py, models/deformable_detr.py, models/deformable_transformer.py |
| Spec / doc-driven workflow | 5 | README.md, models/deformable_detr.py, models/ops/setup.py |
| Korean language / Korea domain | 3 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, graphMemory, korea-signal, llm-wiki-memory, rag, spec-driven |
| stacks | Python, C/C++ |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 64 |
| manifests | 2 |
| docs | 1 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Introduction |
| headings | Introduction / Installation / Requirements / Compiling CUDA operators / unit test (should see all checking is True) / Usage / Dataset preparation / Training / Training on a single node / Training on multiple nodes |
| excerpt | ! KakaoBrain https //img.shields.io/badge/kakao brain ffcd00.svg http //kakaobrain.com/ ! pytorch https //img.shields.io/badge/pytorch 1.6.0 %2523ee4c2c.svg https //pytorch.org/ ! pytorch https //img.shields.io/badge/pytorch 1.7.1 %2523ee4c2c.svg https //pytorch.org/ Sparse DETR ICLR'22 ======== By Byungseok Roh https //scholar.google.com/citations?user=H4VWYHwAAAAJ \ , Jaewoong Shin https //scholar.google.com/citations?user=i o 95kAAAAJ \ , Wuhyun Shin https //scholar.google.com/citations?user=bGwfkakAAAAJ \ , and Saehoon Kim https //scholar.google.com/citations?user= ZfueMIAAAAJ at Kakao Brain https //www.kakaobrain.com . Equal contribution This repository is an official implementation of |


## 주요 파일

### Manifests

- README.md
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| models | 30 |
| configs | 10 |
| datasets | 10 |
| util | 6 |
| tools | 2 |
| engine.py | 1 |
| LICENSE | 1 |
| main.py | 1 |
| NOTICE | 1 |
| README.md | 1 |
| requirements.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 36 |
| .sh | 12 |
| .yaml | 5 |
| .h | 3 |
| .cpp | 2 |
| [no-ext] | 2 |
| .cu | 1 |
| .cuh | 1 |
| .md | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
