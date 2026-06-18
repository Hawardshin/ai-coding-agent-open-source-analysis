# naver/panst3r

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/panst3r |
| local path | sources/naver__panst3r |
| HEAD | 0253909 |
| stars/forks | 73 / 6 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2026-03-20T16:13:59Z |
| trendScore / priorityScore | 82 / 193 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 39 | README.md, src/panst3r/engine/retrieval.py, tools/demo_panst3r.py |
| Korean language / Korea domain | 33 | README.md, pyproject.toml, src/panst3r/engine/retrieval.py |
| LLM wiki / memory / graph | 24 | README.md, tools/demo_panst3r.py, configs/base.yaml |
| Spec / doc-driven workflow | 1 | src/panst3r/criterion/panoptic.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 43 |
| manifests | 2 |
| docs | 1 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Limit CPU threading to prevent oversubscription in multi-GPU training |
| headings | Table of Contents / License / Getting started / Installation / Running the demo / Checkpoints / Training / Preparing the data / Training / Limit CPU threading to prevent oversubscription in multi-GPU training |
| excerpt | <p align="center" <img src="https //github.com/user attachments/assets/0c03d65c 31ef 4abe bfae e3d59ee029fb" width="100%" <br <a href="https //arxiv.org/abs/2506.21348" target=" blank" 📖 <b Paper</b </a • <a href="https //youtu.be/f1YY1XJJ HA" target=" blank" 🎬 <b Overview</b </a • <a href=" cite" 🔖 <b Cite</b </a </p <br Official implementation of PanSt3R Multi view Consistent Panoptic Segmentation . Presented at ICCV 2025 . <p align="center" <img src="https //github.com/user attachments/assets/956de4bb 4173 4b62 a8d0 e883660c4128" height="300" <img src="https //github.com/user attachments/assets/add7456a 8358 4d17 8e96 c611c41c92bd" height="300" <br/ PanSt3R Panoptic 3D reconstruction e |


## 주요 파일

### Manifests

- README.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 31 |
| configs | 3 |
| tools | 2 |
| .gitignore | 1 |
| gradio_panst3r.py | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| pyproject.toml | 1 |
| README.md | 1 |
| train.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 35 |
| .yaml | 3 |
| [no-ext] | 3 |
| .md | 1 |
| .toml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
