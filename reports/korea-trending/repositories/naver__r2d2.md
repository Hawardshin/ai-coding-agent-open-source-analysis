# naver/r2d2

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/r2d2 |
| local path | sources/naver__r2d2 |
| HEAD | 0ff8f6a |
| stars/forks | 519 / 92 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2023-12-17T18:50:23Z |
| trendScore / priorityScore | 89 / 210 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 25 | README.md, nets/sampler.py, datasets/__init__.py |
| Frontend / developer experience | 5 | tools/dataloader.py, tools/transforms.py |
| LLM wiki / memory / graph | 3 | README.md, tools/dataloader.py, tools/transforms_tools.py |
| RAG / retrieval | 1 | tools/dataloader.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, rag |
| stacks | Python |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 36 |
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
| title | R2D2: Reliable and Repeatable Detector and Descriptor # |
| headings | R2D2: Reliable and Repeatable Detector and Descriptor # / e.g.: install mapping and query of Extended-CMU-Seasons_slice22 / Downloading training data ### / Training details ### |
| excerpt | R2D2 Reliable and Repeatable Detector and Descriptor This repository contains the implementation of the following paper https //europe.naverlabs.com/research/publications/r2d2 reliable and repeatable detectors and descriptors for joint sparse local keypoint detection and feature extraction/ Fast R2D2 This repository also contains the code needed to train and extract Fast R2D2 keypoints. Fast R2D2 is a revised version of R2D2 that is significantly faster, uses less memory yet achieves the same order of precision as the original network. License Our code is released under the Creative Commons BY NC SA 3.0 see LICENSE LICENSE for more details , available only for non commercial use. Getting sta |


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
| datasets | 6 |
| nets | 6 |
| tools | 6 |
| models | 5 |
| results | 5 |
| download_training_data.sh | 1 |
| extract_kapture.py | 1 |
| extract.py | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| README.md | 1 |
| train.py | 1 |
| viz_heatmaps.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 22 |
| .npy | 5 |
| .pt | 5 |
| [no-ext] | 2 |
| .md | 1 |
| .sh | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
