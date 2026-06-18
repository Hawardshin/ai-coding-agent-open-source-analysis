# naver-ai/calm

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/calm |
| local path | sources/naver-ai__calm |
| HEAD | 0ebb8a5 |
| stars/forks | 90 / 6 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2022-06-08T04:20:14Z |
| trendScore / priorityScore | 68 / 144 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 14 | README.md, eval_cue_location.py, eval_remove_classify.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, korea-signal |
| stacks | Python |
| capabilities | Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 73 |
| manifests | 1 |
| docs | 1 |
| tests | 12 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | Keep CALM and Improve Visual Feature Attribution (ICCV 2021) \| [Paper](https://arxiv.org/abs/2106.07861) / Abstract / Dataset downloading / How to use models / Pretrained weights / Explainability scores / License / How to cite |
| excerpt | Keep CALM and Improve Visual Feature Attribution ICCV 2021 Paper https //arxiv.org/abs/2106.07861 Jae Myung Kim<sup 1 </sup , Junsuk Choe<sup 1 </sup , Zeynep Akata<sup 2</sup , Seong Joon Oh<sup 1&dagger;</sup <sub \ Equal contribution</sub <sub &dagger;</sub <sub Corresponding author </sub <sup 1</sup <sub NAVER AI LAB</sub <sup 2</sup <sub University of T&uuml;bingen</sub <p align="center" <img src="teaser.png" width="70%" title="" alt="CAM vs CALM" </img </p Abstract The class activation mapping, or CAM, has been the cornerstone of feature attribution methods for multiple vision tasks. Its simplicity and effectiveness have led to wide applications in the explanation of visual predictions |


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
| metadata | 44 |
| score_map_method | 8 |
| network | 6 |
| dataset | 4 |
| config.py | 1 |
| data_loaders.py | 1 |
| eval_cue_location.py | 1 |
| eval_remove_classify.py | 1 |
| LICENSE | 1 |
| logger.py | 1 |
| main.py | 1 |
| NOTICE | 1 |
| README.md | 1 |
| util_cub_trait.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .txt | 39 |
| .py | 22 |
| [no-ext] | 6 |
| .sh | 4 |
| .json | 1 |
| .md | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
