# hyperconnect/MMNet

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/hyperconnect/MMNet |
| local path | sources/hyperconnect__MMNet |
| HEAD | aa423b5 |
| stars/forks | 177 / 35 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2019-04-08T02:05:41Z |
| trendScore / priorityScore | 78 / 166 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Spec / doc-driven workflow | 5 | readme.md |
| LLM wiki / memory / graph | 2 | helper/base.py, helper/trainer.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, graphMemory, korea-signal, llm-wiki-memory, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 46 |
| manifests | 0 |
| docs | 1 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | readme.md |
| title |  |
| headings | Towards Real-Time Automatic Portrait Matting on Mobile Devices / Requirements / Installation / Dataset / Training / MMNet / Mobile DeepLabv3 / Evaluation / MMNet / Mobile DeepLabv3 |
| excerpt | Towards Real Time Automatic Portrait Matting on Mobile Devices We tackle the problem of automatic portrait matting on mobile devices. The proposed model is aimed at attaining real time inference on mobile devices with minimal degradation of model performance. Our model MMNet, based on multi branch dilated convolution with linear bottleneck blocks, outperforms the state of the art model and is orders of magnitude faster. The model can be accelerated four times to attain 30 FPS on Xiaomi Mi 5 device with moderate increase in the gradient error. Under the same conditions, our model has an order of magnitude less number of parameters and is faster than Mobile DeepLabv3 while maintaining comparab |


## 주요 파일

### Manifests

_없음_


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| metrics | 8 |
| common | 6 |
| factory | 5 |
| datasets | 4 |
| helper | 4 |
| matting_nets | 4 |
| scripts | 4 |
| requirements | 3 |
| .gitmodules | 1 |
| const.py | 1 |
| demo | 1 |
| evaluate.py | 1 |
| LICENSE | 1 |
| nets | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 35 |
| .sh | 4 |
| .txt | 3 |
| [no-ext] | 2 |
| .md | 1 |
| .mp4 | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
