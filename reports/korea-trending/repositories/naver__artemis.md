# naver/artemis

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/artemis |
| local path | sources/naver__artemis |
| HEAD | f36f779 |
| stars/forks | 52 / 5 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2023-02-09T16:23:26Z |
| trendScore / priorityScore | 80 / 187 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 40 | README.md, evaluate.py, artemis_model.py |
| LLM wiki / memory / graph | 25 | README.md, evaluate.py, data.py |
| Korean language / Korea domain | 12 | evaluate_ptflops.py, artemis_model.py, config.py |
| Spec / doc-driven workflow | 4 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, graphMemory, korea-signal, llm-wiki-memory, rag, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 27 |
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
| title | ARTEMIS code release |
| headings | ARTEMIS code release / License / The task / Our method / Preparations / Environment / ⚙️ Configuration / :open_file_folder: Datasets / 📕 Vocabularies / 📊 Evaluation |
| excerpt | ARTEMIS code release This repository contains the code release of ARTEMIS, from our paper ARTEMIS Attention based Retrieval with Text Explicit Matching and Implicit Similarity https //openreview.net/pdf?id=CVfLvQq9gLo Ginger Delmas, Rafael Sampaio de Rezende, Gabriela Csurka, Diane Larlus, ICLR 2022. \ Project page\ https //europe.naverlabs.com/research/computer vision/artemis If this code and/or paper is useful in your research, please cite License This code is distributed under the CC BY NC SA 4.0 License. See LICENSE LICENSE for more information. The task We address the problem of image search with free form text modifiers , which consists in ranking a collection of images by relevance wi |


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
| artemis_model.py | 1 |
| config.py | 1 |
| data.py | 1 |
| dataset_cirr.py | 1 |
| dataset_f200k.py | 1 |
| dataset_fashionIQ.py | 1 |
| dataset_shoes.py | 1 |
| dataset.py | 1 |
| encoders.py | 1 |
| evaluate_cirr.py | 1 |
| evaluate_ptflops.py | 1 |
| evaluate.py | 1 |
| generate_heatmaps.py | 1 |
| LICENSE | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 23 |
| .md | 1 |
| .sh | 1 |
| .txt | 1 |
| [no-ext] | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
