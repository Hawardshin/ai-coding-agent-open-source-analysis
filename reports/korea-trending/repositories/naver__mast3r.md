# naver/mast3r

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/mast3r |
| local path | sources/naver__mast3r |
| HEAD | f5209af |
| stars/forks | 2999 / 272 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2025-06-30T07:07:35Z |
| trendScore / priorityScore | 104 / 263 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 64 | README.md, mast3r/retrieval/graph.py, mast3r/retrieval/processor.py |
| Korean language / Korea domain | 54 | README.md, mast3r/retrieval/graph.py, mast3r/retrieval/model.py |
| Infra / observability | 20 | README.md, docker/run.sh, mast3r/losses.py |
| Spec / doc-driven workflow | 3 | README.md |
| Frontend / developer experience | 1 | mast3r/cloud_opt/utils/losses.py |
| LLM wiki / memory / graph | 1 | mast3r/losses.py |
| Security / compliance | 1 | mast3r/cloud_opt/sparse_ga.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, rag, security-compliance, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | Vector/search store, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 51 |
| manifests | 2 |
| docs | 1 |
| tests | 0 |
| ci/ops | 2 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Copyright (C) 2024-present Naver Corporation. All rights reserved. |
| headings | Table of Contents / License / Copyright (C) 2024-present Naver Corporation. All rights reserved. / Licensed under CC BY-NC-SA 4.0 (non-commercial use only). / Get Started / Installation / if you have already cloned mast3r: / git submodule update --init --recursive / Optional: you can also install additional packages to: / - add support for HEIC images |
| excerpt | ! banner assets/mast3r.jpg Official implementation of Grounding Image Matching in 3D with MASt3R Project page https //europe.naverlabs.com/blog/mast3r matching and stereo 3d reconstruction/ , MASt3R arxiv https //arxiv.org/abs/2406.09756 , DUSt3R arxiv https //arxiv.org/abs/2312.14132 ! Example of matching results obtained from MASt3R assets/examples.jpg ! High level overview of MASt3R's architecture assets/mast3r archi.jpg Table of Contents Table of Contents table of contents License license Get Started get started Installation installation Checkpoints checkpoints MASt3R Model mast3r model Retrieval Model retrieval model Dune Model dune model MASt3R SfM mast3r sfm Interactive demo interacti |


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
| mast3r | 31 |
| docker | 6 |
| .gitignore | 1 |
| .gitmodules | 1 |
| CHECKPOINTS_NOTICE | 1 |
| demo_dust3r_ga.py | 1 |
| demo_glomap.py | 1 |
| demo.py | 1 |
| kapture_mast3r_mapping.py | 1 |
| LICENSE | 1 |
| make_pairs.py | 1 |
| NOTICE | 1 |
| README.md | 1 |
| requirements.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 38 |
| [no-ext] | 5 |
| .dockerfile | 2 |
| .sh | 2 |
| .yml | 2 |
| .md | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
