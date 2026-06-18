# naver/croco

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/croco |
| local path | sources/naver__croco |
| HEAD | 5d4dbc9 |
| stars/forks | 502 / 72 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2025-09-09T13:25:31Z |
| trendScore / priorityScore | 94 / 227 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 32 | datasets/crops/README.MD, demo.py, stereoflow/test.py |
| RAG / retrieval | 19 | README.MD, models/blocks.py, models/croco_downstream.py |
| LLM wiki / memory / graph | 5 | models/croco.py, pretrain.py, stereoflow/train.py |
| AI agent / tool use | 3 | datasets/habitat_sim/multiview_habitat_sim_generator.py |
| Frontend / developer experience | 2 | models/pos_embed.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, rag |
| stacks | Python, C/C++ |
| capabilities | Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 44 |
| manifests | 0 |
| docs | 4 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.MD |
| title | CroCo + CroCo v2 / CroCo-Stereo / CroCo-Flow |
| headings | CroCo + CroCo v2 / CroCo-Stereo / CroCo-Flow / License / Preparation / Reconstruction example / Interactive demonstration of cross-view completion reconstruction on the Habitat simulator / Pre-training / CroCo / CroCo v2 / Stereo matching and Optical flow downstream tasks |
| excerpt | CroCo + CroCo v2 / CroCo Stereo / CroCo Flow CroCo arXiv https //arxiv.org/abs/2210.10716 CroCo v2 arXiv https //arxiv.org/abs/2211.10408 project page and demo https //croco.europe.naverlabs.com/ This repository contains the code for our CroCo model presented in our NeurIPS'22 paper CroCo Self Supervised Pre training for 3D Vision Tasks by Cross View Completion https //openreview.net/pdf?id=wZEfHUM5ri and its follow up extension published at ICCV'23 Improved Cross view Completion Pre training for Stereo Matching and Optical Flow https //openaccess.thecvf.com/content/ICCV2023/html/Weinzaepfel CroCo v2 Improved Cross view Completion Pre training for Stereo Matching and ICCV 2023 paper.html , r |


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
| datasets | 13 |
| models | 13 |
| stereoflow | 9 |
| croco-stereo-flow-demo.ipynb | 1 |
| demo.py | 1 |
| interactive_demo.ipynb | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| NOTICE_CHECKPOINTS | 1 |
| pretrain.py | 1 |
| README.MD | 1 |
| utils | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 32 |
| .md | 4 |
| [no-ext] | 3 |
| .ipynb | 2 |
| .cpp | 1 |
| .cu | 1 |
| .sh | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
