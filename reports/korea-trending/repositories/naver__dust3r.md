# naver/dust3r

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/dust3r |
| local path | sources/naver__dust3r |
| HEAD | 4c24a6e |
| stars/forks | 7196 / 759 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2025-09-24T16:32:31Z |
| trendScore / priorityScore | 105 / 268 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 96 | dust3r_visloc/README.md, README.md, dust3r_visloc/evaluation.py |
| Infra / observability | 17 | README.md, docker/run.sh, dust3r/losses.py |
| RAG / retrieval | 7 | dust3r_visloc/README.md, README.md, dust3r/model.py |
| AI agent / tool use | 3 | datasets_preprocess/habitat/habitat_renderer/habitat_sim_envmaps_renderer.py |
| LLM wiki / memory / graph | 3 | dust3r/training.py, dust3r/cloud_opt/init_im_poses.py |
| Spec / doc-driven workflow | 3 | README.md, dust3r/model.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, graphMemory, infra-observability, korea-signal, llm-wiki-memory, rag, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 91 |
| manifests | 4 |
| docs | 3 |
| tests | 0 |
| ci/ops | 2 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Copyright (C) 2024-present Naver Corporation. All rights reserved. |
| headings | Table of Contents / License / Copyright (C) 2024-present Naver Corporation. All rights reserved. / Licensed under CC BY-NC-SA 4.0 (non-commercial use only). / Get Started / Installation / if you have already cloned dust3r: / git submodule update --init --recursive / Optional: you can also install additional packages to: / - add support for HEIC images |
| excerpt | ! demo assets/dust3r.jpg Official implementation of DUSt3R Geometric 3D Vision Made Easy Project page https //dust3r.europe.naverlabs.com/ , DUSt3R arxiv https //arxiv.org/abs/2312.14132 Make sure to also check our other works Grounding Image Matching in 3D with MASt3R https //github.com/naver/mast3r DUSt3R with a local feature head, metric pointmaps, and a more scalable global alignment! Pow3R Empowering Unconstrained 3D Reconstruction with Camera and Scene Priors https //github.com/naver/pow3r DUSt3R with known depth / focal length / poses. MUSt3R Multi view Network for Stereo 3D Reconstruction https //github.com/naver/must3r Multi view predictions RGB SLAM/SfM without any global alignment |


## 주요 파일

### Manifests

- dust3r_visloc/README.md
- README.md
- datasets_preprocess/habitat/README.md
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| dust3r | 46 |
| datasets_preprocess | 17 |
| dust3r_visloc | 12 |
| docker | 6 |
| .gitignore | 1 |
| .gitmodules | 1 |
| demo.py | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| README.md | 1 |
| requirements_optional.txt | 1 |
| requirements.txt | 1 |
| train.py | 1 |
| visloc.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 76 |
| [no-ext] | 4 |
| .md | 3 |
| .dockerfile | 2 |
| .sh | 2 |
| .txt | 2 |
| .yml | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
