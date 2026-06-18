# naver/anny

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/anny |
| local path | sources/naver__anny |
| HEAD | e53d4b8 |
| stars/forks | 486 / 37 |
| language | Jupyter Notebook |
| license | NOASSERTION |
| pushedAt | 2026-06-09T22:26:18Z |
| trendScore / priorityScore | 106 / 258 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 41 | README.md, docker/Readme.md, docker/Dockerfile |
| Spec / doc-driven workflow | 15 | CLAUDE.md, src/anny/models/__init__.py |
| Infra / observability | 12 | docker/Readme.md, docker/docker-compose.yml |
| RAG / retrieval | 6 | build_doc.bash, src/anny/face_segmentation.py, src/anny/models/full_model.py |
| LLM wiki / memory / graph | 2 | README.md, src/anny/models/rigged_model.py |
| Security / compliance | 2 | .devcontainer/devcontainer.json, src/anny/data/mpfb2/LICENSE.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, example-rich, graphMemory, infra-observability, korea-signal, llm-wiki-memory, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 113 |
| manifests | 6 |
| docs | 5 |
| tests | 14 |
| ci/ops | 3 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | Features / News / Installation / Caching / Tutorials / Interactive demo / License / Citation |
| excerpt | <h1 style="text align center;" Anny Body</h1 <img src="docs/figures/anny teaser.jpg" alt="Anny" style="display block;max width 100%;max height 24em;margin auto"/ Anny is a differentiable human body mesh model written in PyTorch. Anny models a large variety of human body shapes, from infants to elders, using a common topology and parameter space. ! ArXiv https //img.shields.io/badge/arXiv 2511.03589 33cb56 https //arxiv.org/abs/2511.03589 ! Demo https //img.shields.io/badge/Demo 33cb56 http //anny demo.europe.naverlabs.com/ ! Blogpost https //img.shields.io/badge/Blogpost 33cb56 https //europe.naverlabs.com/blog/anny a free to use 3d human parametric model for all ages/ Features Anny is based |


## 주요 파일

### Manifests

- README.md
- CLAUDE.md
- .devcontainer/Dockerfile
- docker/docker-compose.yml
- docker/Dockerfile
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- CLAUDE.md


### Agent Instruction Files

- CLAUDE.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 79 |
| test | 14 |
| tutorials | 4 |
| docker | 3 |
| .devcontainer | 2 |
| scripts | 2 |
| .gitignore | 1 |
| build_and_push_doc.bash | 1 |
| build_doc.bash | 1 |
| CLAUDE.md | 1 |
| docs | 1 |
| LICENSE | 1 |
| MANIFEST.in | 1 |
| pyproject.toml | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 50 |
| .json | 30 |
| .obj | 8 |
| .ipynb | 4 |
| .md | 4 |
| .pth | 4 |
| [no-ext] | 4 |
| .bash | 2 |
| .html | 1 |
| .in | 1 |
| .mirror | 1 |
| .pt | 1 |
| .toml | 1 |
| .yaml | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
