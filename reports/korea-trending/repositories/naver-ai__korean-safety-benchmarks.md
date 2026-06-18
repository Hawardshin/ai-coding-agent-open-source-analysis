# naver-ai/korean-safety-benchmarks

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/korean-safety-benchmarks |
| local path | sources/naver-ai__korean-safety-benchmarks |
| HEAD | e32837c |
| stars/forks | 251 / 18 |
| language | Python |
| license | MIT |
| pushedAt | 2023-06-29T03:39:35Z |
| trendScore / priorityScore | 103 / 219 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 32 | README.md, pipeline/kosbi/augment_demo_context.py, pipeline/kosbi/augment_demo_sentence.py |
| LLM wiki / memory / graph | 1 | src/train.py |
| Spec / doc-driven workflow | 1 |  |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, example-rich, korea-signal, llm-wiki-memory, llmFramework, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 52 |
| manifests | 4 |
| docs | 3 |
| tests | 4 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Korean Safety Benchmarks |
| headings | Korean Safety Benchmarks / Overview / SQuARe / [Dataset](./data/SQuARe/) / [Data Generation Pipeline](./pipeline/square/README.md) / KoSBi / [Dataset](./data/KoSBi/) / [Data Generation Pipeline](./pipeline/kosbi/README.md) / License / How to cite |
| excerpt | Korean Safety Benchmarks Overview This repository provides the codes and datasets of the following two papers 1. SQuARe A Large Scale Dataset of Sensitive Questions and Acceptable Responses Created through Human Machine Collaboration https //arxiv.org/abs/2305.17696 Hwaran Lee https //hwaranlee.github.io , Seokhee Hong https //hongcheki.github.io/ , Joonsuk Park https //facultystaff.richmond.edu/~jpark/ , Takyoung Kim https //youngerous.github.io , Meeyoung Cha https //ds.ibs.re.kr/ci/ , Yejin Choi https //homes.cs.washington.edu/~yejin/ , Byoung Pil Kim https //itm.kaist.ac.kr/en/m41 view.php?people num=447 , Gunhee Kim https //vision.snu.ac.kr/gunhee/ , Eun Ju Lee https //scholar.google.co |


## 주요 파일

### Manifests

- README.md
- pipeline/kosbi/README.md
- pipeline/square/README.md
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| data | 22 |
| pipeline | 22 |
| src | 4 |
| LICENSE | 1 |
| NOTICE | 1 |
| README.md | 1 |
| requirements.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .json | 28 |
| .py | 18 |
| .md | 3 |
| [no-ext] | 2 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
