# naver/pow3r

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/pow3r |
| local path | sources/naver__pow3r |
| HEAD | 25d7bb6 |
| stars/forks | 231 / 18 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2025-07-16T13:03:22Z |
| trendScore / priorityScore | 84 / 196 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 12 | demo_high_res.py, pow3r/__init__.py, pow3r/datasets/utils/modalities.py |
| Frontend / developer experience | 10 | pow3r/tools/video_maker.py |
| RAG / retrieval | 4 | pow3r/model/blocks.py, pow3r/model/model.py |
| Spec / doc-driven workflow | 3 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | frontend-dx, korea-signal, rag, spec-driven |
| stacks | Python |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 19 |
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
| headings | Table of Contents / License / Get started / Installation / Checkpoints / Demo / High-Resolution 3D reconstruction demo / Training |
| excerpt | ! logo assets/pow3r.jpg Official implementation of Pow3R Empowering Unconstrained 3D Reconstruction with Camera and Scene Priors CVPR 2025 Project page https //europe.naverlabs.com/pow3r , arxiv https //arxiv.org/abs/2503.17316 ! examples assets/examples.jpg ! overview assets/overview.jpg Table of Contents Table of Contents table of contents License license Get Started get started Installation installation Checkpoints checkpoints Demo demo Training training Notes notes License see LICENSE LICENSE Get started Installation Checkpoints We provide the pre trained model Modelname Training resolutions Head Encoder Decoder Pow3R ViTLarge BaseDecoder 512 linear.pth https //download.europe.naverlabs. |


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
| pow3r | 12 |
| .gitignore | 1 |
| .gitmodules | 1 |
| demo_high_res.py | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| README.md | 1 |
| requirements.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 13 |
| [no-ext] | 4 |
| .md | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
