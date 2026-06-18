# naver-ai/pit

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/pit |
| local path | sources/naver-ai__pit |
| HEAD | 9d97a62 |
| stars/forks | 245 / 29 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2021-07-23T04:05:56Z |
| trendScore / priorityScore | 80 / 175 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 3 | README.md, pit.py |
| Spec / doc-driven workflow | 2 | README.md |
| Security / compliance | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | korea-signal, llmFramework, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework |


## 구조 요약

| key | value |
| --- | --- |
| files | 5 |
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
| headings | Accepted to ICCV 2021 !! / Rethinking Spatial Dimensions of Vision Transformers / News / Abstract / Model performance / Use PiT models with timm repo / Pretrained weights / Dependancies / How to use models / License |
| excerpt | Accepted to ICCV 2021 !! Rethinking Spatial Dimensions of Vision Transformers Byeongho Heo, Sangdoo Yun, Dongyoon Han, Sanghyuk Chun, Junsuk Choe, Seong Joon Oh Paper https //arxiv.org/abs/2103.16302 NAVER AI LAB <img src="teaser.png" width="100%" title="" alt="teaser" </img News Mar 30, 2021 Code & paper released Apr 2, 2021 PiT models with pretrained weights are added to timm repo https //github.com/rwightman/pytorch image models/blob/master/timm/models/pit.py . You can directly use PiT models with timm =0.4.7 . Jul 23, 2021 Accepted to ICCV 2021 as a poster session Abstract Vision Transformer ViT extends the application range of transformers from language processing to computer vision tas |


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
| LICENSE | 1 |
| NOTICE | 1 |
| pit.py | 1 |
| README.md | 1 |
| requirements.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| [no-ext] | 2 |
| .md | 1 |
| .py | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
