# hyperconnect/LADE

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/hyperconnect/LADE |
| local path | sources/hyperconnect__LADE |
| HEAD | 5db5d13 |
| stars/forks | 105 / 10 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2022-08-22T13:12:40Z |
| trendScore / priorityScore | 71 / 167 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Spec / doc-driven workflow | 3 | utils.py |
| LLM wiki / memory / graph | 2 | run_networks.py |
| RAG / retrieval | 2 | run_networks.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | graphMemory, korea-signal, llm-wiki-memory, rag, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 58 |
| manifests | 1 |
| docs | 1 |
| tests | 2 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Disentangling Label Distribution for Long-tailed Visual Recognition (CVPR 2021) |
| headings | Disentangling Label Distribution for Long-tailed Visual Recognition (CVPR 2021) / Install / Training / Preliminaries / CIFAR-100 training / Places-LT training / ImageNet-LT training / iNaturalist18 training / Evaluate on shifted test set & Confidence calibration / License |
| excerpt | Disentangling Label Distribution for Long tailed Visual Recognition CVPR 2021 Arxiv link https //arxiv.org/abs/2012.00321 Blog post https //hyperconnect.github.io/2021/04/05/ailab lade.html Poster ./LADE poster.pdf This codebase is built on Causal Norm https //github.com/KaihuaTang/Long Tailed Recognition.pytorch . Install Training Preliminaries Download pretrained caffe resnet152 model for Places LT please refer to link https //github.com/zhmiao/OpenLongTailRecognition OLTR download caffe pre trained models for places lt stage 1 training . Prepare dataset CIFAR 100, Places LT, ImageNet LT, iNaturalist 2018 Please download those datasets following Decoupling https //github.com/facebookresear |


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
| config | 16 |
| data | 15 |
| models | 12 |
| loss | 5 |
| notebooks | 2 |
| .gitignore | 1 |
| LICENSE | 1 |
| logger.py | 1 |
| main.py | 1 |
| parse_json.py | 1 |
| README.md | 1 |
| run_networks.py | 1 |
| utils.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 27 |
| .yaml | 16 |
| .txt | 10 |
| .ipynb | 2 |
| [no-ext] | 2 |
| .md | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
