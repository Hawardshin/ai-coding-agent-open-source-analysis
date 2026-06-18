# naver/PoseGPT

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/PoseGPT |
| local path | sources/naver__PoseGPT |
| HEAD | bb2045c |
| stars/forks | 140 / 3 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2022-10-18T08:02:01Z |
| trendScore / priorityScore | 70 / 180 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 33 | evaluate.py, auto_encode.py, dataset/mocap.py |
| Korean language / Korea domain | 31 | evaluate.py, auto_encode.py, classify.py |
| LLM wiki / memory / graph | 2 | auto_encode.py |
| Spec / doc-driven workflow | 1 | models/transformer_vqvae.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 43 |
| manifests | 1 |
| docs | 2 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | PoseGPT: Quantization-based 3D Human Motion Generation and Forecasting [ECCV 2022] |
| headings | PoseGPT: Quantization-based 3D Human Motion Generation and Forecasting [ECCV 2022] / Install / Pre-process the data / Train a transformer based classifier using smpl parameters as input: / Train the auto_encoder / Train the generator / Demo [Coming soon] / Citation / License |
| excerpt | PoseGPT Quantization based 3D Human Motion Generation and Forecasting ECCV 2022 ! report https //img.shields.io/badge/ArXiv Paper red ./ ! Drag Racing teaser.png PoseGPT Quantization based 3D Human Motion Generation and Forecasting ./ , Thomas Lucas https //europe.naverlabs.com/people user/thomas lucas/ , Fabien Baradel https //fabienbaradel.github.io/ , Philippe Weinzaepfel https //europe.naverlabs.com/people user/philippe weinzaepfel/ , Grégory Rogez https //europe.naverlabs.com/people user/gregory rogez/ European Conference on Computer Vision ECCV , 2022 Pytorch training and evaluation code for PoseGPT on BABEL. Install Our code is running using python3.7 and requires the following packag |


## 주요 파일

### Manifests

- README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| utils | 17 |
| models | 11 |
| dataset | 4 |
| threed | 3 |
| auto_encode.py | 1 |
| classify.py | 1 |
| evaluate.py | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| README.md | 1 |
| train_gpt.py | 1 |
| trainer.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 39 |
| .md | 2 |
| [no-ext] | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
