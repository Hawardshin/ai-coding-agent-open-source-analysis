# kakao/buffalo

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakao/buffalo |
| local path | sources/kakao__buffalo |
| HEAD | 130b90a |
| stars/forks | 581 / 109 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2025-05-16T08:00:54Z |
| trendScore / priorityScore | 90 / 243 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 42 | benchmark/README.md, benchmark/test_performance.py, docs/index.rst |
| RAG / retrieval | 32 | docs/index.rst, buffalo/algo/cfr.py, buffalo/algo/options.py |
| Korean language / Korea domain | 27 | benchmark/README.md, tests/README.md, README.md |
| Spec / doc-driven workflow | 15 | docs/README.md, README.md, examples/Dockerfile |
| Security / compliance | 6 | README.md, NOTICE.md |
| Infra / observability | 1 | buffalo/algo/cfr.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | documentParsing, evalObservability, example-rich, graphMemory, infra-observability, korea-signal, llm-wiki-memory, rag, security-compliance, spec-driven, vectorSearch |
| stacks | Python, C/C++ |
| capabilities | Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 136 |
| manifests | 8 |
| docs | 14 |
| tests | 28 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Buffalo |
| headings | Buffalo / Requirements / License |
| excerpt | ! Linux/Mac Build Status https //travis ci.org/kakao/buffalo.svg?branch=master https //travis ci.org/kakao/buffalo <center <img src="./docs/buffalo.png" width="320px" </center Buffalo Buffalo is a fast and scalable production ready open source project for recommender systems. Buffalo effectively utilizes system resources, enabling high performance even on low spec machines. The implementation is optimized for CPU and SSD. Even so, it shows good performance with GPU accelerator, too. Buffalo, developed by Kakao, has been reliably used in production for various Kakao services. For more information see the documentation https //buffalo recsys.readthedocs.io Requirements Python 3.8+ cmake 3.17+ |


## 주요 파일

### Manifests

- docs/README.md
- benchmark/README.md
- examples/README.md
- tests/README.md
- README.md
- docs/Makefile
- examples/Dockerfile
- pyproject.toml


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| buffalo | 40 |
| tests | 28 |
| include | 16 |
| lib | 11 |
| benchmark | 9 |
| examples | 8 |
| docs | 7 |
| .github | 2 |
| install | 2 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .gitmodules | 1 |
| .readthedocs.yml | 1 |
| CONTRIBUTING.MD | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 59 |
| .hpp | 16 |
| .pyx | 12 |
| [no-ext] | 12 |
| .cc | 9 |
| .md | 8 |
| .ipynb | 5 |
| .rst | 4 |
| .cu | 2 |
| .yaml | 2 |
| .cfg | 1 |
| .cuh | 1 |
| .in | 1 |
| .ini | 1 |
| .toml | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
