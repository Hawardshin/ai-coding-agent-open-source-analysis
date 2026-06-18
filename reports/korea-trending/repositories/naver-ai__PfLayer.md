# naver-ai/PfLayer

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/PfLayer |
| local path | sources/naver-ai__PfLayer |
| HEAD | 008a096 |
| stars/forks | 84 / 6 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2023-05-03T04:56:09Z |
| trendScore / priorityScore | 68 / 150 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 7 | README.md, pit_pf.py, resnet_pf.py |
| Security / compliance | 1 | README.md |
| Spec / doc-driven workflow | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | korea-signal, llmFramework, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework |


## 구조 요약

| key | value |
| --- | --- |
| files | 6 |
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
| title |  |
| headings | Learning Features with Parameter-Free Layers (ICLR 2022) / Updates / Abstract / Our Proposed Models / Usage / Some Analyses in The Paper / License / How to cite |
| excerpt | Learning Features with Parameter Free Layers ICLR 2022 Dongyoon Han, YoungJoon Yoo, Beomyoung Kim, Byeongho Heo Paper https //arxiv.org/pdf/2202.02777.pdf NAVER AI Lab, NAVER CLOVA Updates 07.25.2022 The pretrained weights of ViT and PiT are updated model sizes are minimized 07.06.2022 Improved ResNet50 pretrained on ImageNet 1k are added 03.23.2022 Performance of ViT and PiT has been updated 02.11.2022 Code has been uploaded 02.06.2022 Initial update Abstract Trainable layers such as convolutional building blocks are the standard network design choices by learning parameters to capture the global context through successive spatial operations. When designing an efficient network, trainable l |


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
| LICENSE | 1 |
| NOTICE | 1 |
| pit_pf.py | 1 |
| README.md | 1 |
| resnet_pf.py | 1 |
| vit_pf.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 3 |
| [no-ext] | 2 |
| .md | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
