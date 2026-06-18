# hyperconnect/TC-ResNet

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/hyperconnect/TC-ResNet |
| local path | sources/hyperconnect__TC-ResNet |
| HEAD | 8ccbff3 |
| stars/forks | 234 / 55 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2023-03-24T22:51:36Z |
| trendScore / priorityScore | 81 / 183 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 12 | audio_nets/kws.py, helper/base.py, helper/trainer.py |
| Spec / doc-driven workflow | 8 | README.md, audio_nets/kws.py |
| Frontend / developer experience | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 67 |
| manifests | 2 |
| docs | 2 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Temporal Convolution for Real-time Keyword Spotting on Mobile Devices |
| headings | Temporal Convolution for Real-time Keyword Spotting on Mobile Devices / Abstract / Requirements / Installation / Dataset / Google Speech Commands Dataset / How to run / Benchmark tool / 1. Connect Android device to your computer / 2. Check if connection is established |
| excerpt | Temporal Convolution for Real time Keyword Spotting on Mobile Devices <p align="center" <img src="https //raw.githubusercontent.com/hyperconnect/TC ResNet/master/figure/main figure.png", width="500", alt="tc resnet temporal convolution" </p Abstract Keyword spotting KWS plays a critical role in enabling speech based user interactions on smart devices. Recent developments in the field of deep learning have led to wide adoption of convolutional neural networks CNNs in KWS systems due to their exceptional accuracy and robustness. The main challenge faced by KWS systems is the trade off between high accuracy and low latency. Unfortunately, there has been little quantitative analysis of the actua |


## 주요 파일

### Manifests

- README.md
- speech_commands_dataset/README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| scripts | 16 |
| metrics | 11 |
| datasets | 6 |
| speech_commands_dataset | 6 |
| audio_nets | 4 |
| common | 4 |
| helper | 4 |
| factory | 3 |
| requirements | 3 |
| tflite_tools | 2 |
| .gitignore | 1 |
| const.py | 1 |
| evaluate_audio.py | 1 |
| execute_script.sh | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 38 |
| .sh | 18 |
| .txt | 6 |
| .md | 2 |
| [no-ext] | 2 |
| .13_official | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
