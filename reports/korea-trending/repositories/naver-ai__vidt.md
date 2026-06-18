# naver-ai/vidt

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/vidt |
| local path | sources/naver-ai__vidt |
| HEAD | a8c48b5 |
| stars/forks | 319 / 39 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2022-10-26T13:57:33Z |
| trendScore / priorityScore | 83 / 218 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 37 | README.md, arguments.py, engine.py |
| LLM wiki / memory / graph | 23 | util/detectron2/utils/memory.py, methods/segmentation.py, methods/swin_w_ram.py |
| RAG / retrieval | 23 | arguments.py, methods/coat_w_ram.py, methods/swin_w_ram.py |
| Spec / doc-driven workflow | 7 | README.md, ops/setup.py, methods/vidt_wo_neck/criterion.py |
| Infra / observability | 3 | util/misc.py, util/detectron2/layers/mask_ops.py |
| Security / compliance | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance, spec-driven |
| stacks | Python, C/C++ |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 50 |
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
| title | An Extendable, Efficient and Effective Transformer-based Object Detector (Extension of VIDT published at ICLR2022) |
| headings | An Extendable, Efficient and Effective Transformer-based Object Detector (Extension of VIDT published at ICLR2022) / ViDT+ for Joint-learning of Object Detection and Instance Segmentation / Extension to ViDT+ / Evaluation / Requirements / unit test (should see all checking is True) / Training and Evaluation / Training for ViDT+ / Evaluation for ViDT+ / Training for ViDT |
| excerpt | An Extendable, Efficient and Effective Transformer based Object Detector Extension of VIDT published at ICLR2022 Please see the vidt branch https //github.com/naver ai/vidt/tree/main if you are interested in the vanilla ViDT model. </br This is an extension of ViDT for joint learning of object detection and instance segmentation. by Hwanjun Song https //scholar.google.com/citations?user=Ijzuc 8AAAAJ&hl=en&oi=ao <sup 1</sup , Deqing Sun https //scholar.google.com/citations?hl=en&user=t4rgICIAAAAJ <sup 2</sup , Sanghyuk Chun https //scholar.google.com/citations?user=4 uj0xcAAAAJ&hl=en&oi=ao <sup 1</sup , Varun Jampani https //scholar.google.com/citations?hl=en&user=1Cv6Sf4AAAAJ <sup 2</sup , D |


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
| methods | 15 |
| ops | 14 |
| util | 8 |
| datasets | 5 |
| arguments.py | 1 |
| engine.py | 1 |
| fps_calculator.py | 1 |
| LICENSE | 1 |
| main.py | 1 |
| NOTICE | 1 |
| README.md | 1 |
| requirements.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 38 |
| .h | 3 |
| .cpp | 2 |
| [no-ext] | 2 |
| .cu | 1 |
| .cuh | 1 |
| .md | 1 |
| .sh | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
