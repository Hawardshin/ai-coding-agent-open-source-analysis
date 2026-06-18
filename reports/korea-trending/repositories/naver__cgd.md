# naver/cgd

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/cgd |
| local path | sources/naver__cgd |
| HEAD | 52c2984 |
| stars/forks | 150 / 15 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2020-04-23T05:54:45Z |
| trendScore / priorityScore | 90 / 186 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 5 | README.md, evaluator.py, test.py |
| Security / compliance | 4 | README.md, evaluator.py, test.py |
| RAG / retrieval | 3 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | korea-signal, rag, security-compliance |
| stacks | Python |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 9 |
| manifests | 1 |
| docs | 1 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Combination of Multiple Global Descriptors for Image Retrieval |
| headings | Combination of Multiple Global Descriptors for Image Retrieval / Approach / Prerequisite / Usage / Download dataset / Extract pre-trained model / Test / Citation / License |
| excerpt | Combination of Multiple Global Descriptors for Image Retrieval This is the repository to reproduce the results of our paper " Combination of Multiple Global Descriptors for Image Retrieval https //arxiv.org/abs/1903.10663 " . HeeJae Jun\ , Byungsoo Ko\ , Youngjoon Kim, Insik Kim, Jongtack Kim Authors contributed equally. @NAVER/LINE Vision Approach <div align="center" <img src="figures/architecture.png" </div Prerequisite Python 2.7 or above MXNet 1.4.0 or above Numpy and tqdm Usage Download dataset Extract pre trained model Test Citation License |


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
| meta | 3 |
| dataset.py | 1 |
| download.sh | 1 |
| evaluator.py | 1 |
| LICENSE | 1 |
| README.md | 1 |
| test.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 3 |
| .txt | 3 |
| .md | 1 |
| .sh | 1 |
| [no-ext] | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
