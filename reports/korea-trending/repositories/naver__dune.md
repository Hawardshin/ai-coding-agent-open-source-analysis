# naver/dune

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/dune |
| local path | sources/naver__dune |
| HEAD | 1e1a111 |
| stars/forks | 101 / 6 |
| language | Python |
| license |  |
| pushedAt | 2025-10-28T10:27:31Z |
| trendScore / priorityScore | 75 / 192 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 27 | scripts/pca_vis.py, teachers/config.py, utils/exp.py |
| Korean language / Korea domain | 22 | README.md, data/paths.py, Project NLE DUNE LICENSE.txt |
| LLM wiki / memory / graph | 6 | README.md, Project NLE DUNE LICENSE.txt, utils/exp.py |
| AI agent / tool use | 1 | Project NLE DUNE LICENSE.txt |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, context-engineering, evalObservability, graphMemory, korea-signal, llm-wiki-memory, llmFramework, localRuntime, rag |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 67 |
| manifests | 4 |
| docs | 3 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Easy navigation |
| headings | Easy navigation / Summary / Pre-trained models / full model with projectors and teacher norms / just the ViT encoder part of the model / Installation / Conda environment / Teacher models / BEFORE EXECUTING THIS COMMAND, MAKE SURE TO SEE THE CONTENTS OF THE SCRIPTS! / Distillation datasets |
| excerpt | <div align="center" <h1 DUNE Distilling a Universal Encoder from Heterogeneous 2D and 3D Teachers</h1 Mert Bulent Sariyildiz https //mbsariyildiz.github.io/ · Philippe Weinzaepfel https //europe.naverlabs.com/people user naverlabs/philippe weinzaepfel/ · Thomas Lucas https //europe.naverlabs.com/people user naverlabs/thomas lucas/ · Pau de Jorge https //europe.naverlabs.com/people user naverlabs/pau de jorge/ · Diane Larlus https //europe.naverlabs.com/people user naverlabs/diane larlus/ · Yannis Kalantidis https //europe.naverlabs.com/people user naverlabs/yannis kalantidis/ NAVER LABS Europe CVPR 2025 ArXiv https //arxiv.org/abs/2503.14405 · Citation citation </div <! omit in toc Easy navi |


## 주요 파일

### Manifests

- README.md
- scripts/teachers/README.md
- teachers/dinov2/README.md
- Makefile


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| model | 19 |
| teachers | 17 |
| data | 10 |
| scripts | 9 |
| utils | 5 |
| .gitignore | 1 |
| ACKNOWLEDGEMENTS - NLE DUNE.txt | 1 |
| hubconf.py | 1 |
| main_dune.py | 1 |
| Makefile | 1 |
| Project NLE DUNE LICENSE.txt | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 53 |
| .sh | 7 |
| .md | 3 |
| .txt | 2 |
| [no-ext] | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
