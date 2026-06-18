# naver-ai/relabel_imagenet

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/relabel_imagenet |
| local path | sources/naver-ai__relabel_imagenet |
| HEAD | 3d4824f |
| stars/forks | 406 / 39 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2022-09-22T23:39:53Z |
| trendScore / priorityScore | 85 / 188 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 7 | README.md, main.py, train.py |
| Spec / doc-driven workflow | 2 | README.md |
| Security / compliance | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, graphMemory, korea-signal, security-compliance, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 16 |
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
| title |  |
| headings | Accepted at CVPR 2021 !! / Re-labeling ImageNet: from Single to Multi-Labels, from Global to Localized Labels / Abstract / News / Installation / Dependancies / Dataset / How to Run / Train a model with ReLabel / Test a pretrained model |
| excerpt | Accepted at CVPR 2021 !! Re labeling ImageNet from Single to Multi Labels, from Global to Localized Labels Official PyTorch implementation of Re labeling ImageNet Paper https //arxiv.org/abs/2101.05022 Pretrained Models experiments Sangdoo Yun https //sangdooyun.github.io/ , Seong Joon Oh, Byeongho Heo, Dongyoon Han, Junsuk Choe, Sanghyuk Chun NAVER AI LAB <img src="teaser.png" width="60%" title="" alt="teaser" </img Abstract ImageNet has been arguably the most popular image classification benchmark, but it is also the one with a significant level of label noise. Recent studies have shown that many samples contain multiple classes, despite being assumed to be a single label benchmark. They h |


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
| utils | 7 |
| configs | 3 |
| LICENSE | 1 |
| main.py | 1 |
| NOTICE | 1 |
| README.md | 1 |
| requirements.txt | 1 |
| train.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 9 |
| .yaml | 3 |
| [no-ext] | 2 |
| .md | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
