# naver/claf

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/claf |
| local path | sources/naver__claf |
| HEAD | 6f45b1e |
| stars/forks | 215 / 33 |
| language | Python |
| license | MIT |
| pushedAt | 2021-03-26T00:34:11Z |
| trendScore / priorityScore | 79 / 226 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 500 | README.md, docs/claf.machine.components.retrieval.rst, docs/claf.tokens.embedding.rst |
| Korean language / Korea domain | 67 | README.md, Dockerfile, docs/_build/html/_modules/claf/tokens/hangul.html |
| LLM wiki / memory / graph | 10 | README.md, docs/_build/html/_sources/contents/pretrained_vector.md.txt, docs/_build/html/contents/pretrained_vector.html |
| Spec / doc-driven workflow | 7 | README.md, Dockerfile |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 666 |
| manifests | 7 |
| docs | 348 |
| tests | 45 |
| ci/ops | 1 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | CLaF: Clova Language Framework |
| headings | CLaF: Clova Language Framework / Table of Contents / Overview / Features / Installation / Requirements / Install via pip / Experiment / Usage / write predictions files (<log_dir>/predictions/predictions-valid-19.json) |
| excerpt | <p align="center" <img src="images/logo.png" style="inline" width=300 </p <h4 align="center" Clova Language Framework</h4 <p align="center" <a href="https //naver.github.io/claf" <img src="https //img.shields.io/badge/docs passing brightgreen.svg" alt="Documentation Status" </a <a href="https //travis ci.org/naver/claf" <img src='https //travis ci.org/naver/claf.svg?branch=master'/ </a <a href="https //github.com/ambv/black" <img src="https //img.shields.io/badge/code%20style black 000000.svg" alt="Code style black" <a href="https //codecov.io/gh/naver/claf" <img src="https //codecov.io/gh/naver/claf/branch/master/graph/badge.svg" / </a </p CLaF Clova Language Framework Full Documentation ht |


## 주요 파일

### Manifests

- README.md
- docs/Makefile
- docs/requirements.txt
- Dockerfile
- pyproject.toml
- requirements.txt
- docs/_templates/package.rst


### Spec / Docs / Prompt Artifacts

- docs/requirements.txt
- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| docs | 346 |
| claf | 187 |
| base_config | 78 |
| reports | 14 |
| tests | 14 |
| script | 6 |
| machine_config | 2 |
| .coveragerc | 1 |
| .gitignore | 1 |
| .nojekyll | 1 |
| .readthedocs.yml | 1 |
| .travis.yml | 1 |
| CONTRIBUTING.md | 1 |
| Dockerfile | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 211 |
| .html | 194 |
| .json | 91 |
| .txt | 42 |
| .doctree | 40 |
| .rst | 32 |
| .js | 12 |
| .md | 12 |
| [no-ext] | 9 |
| .css | 6 |
| .yaml | 3 |
| .sh | 2 |
| .svg | 2 |
| .yml | 2 |
| .bat | 1 |
| .eot | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
