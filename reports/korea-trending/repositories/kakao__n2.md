# kakao/n2

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakao/n2 |
| local path | sources/kakao__n2 |
| HEAD | 20b02de |
| stars/forks | 581 / 70 |
| language | Jupyter Notebook |
| license | Apache-2.0 |
| pushedAt | 2023-06-27T16:54:16Z |
| trendScore / priorityScore | 89 / 223 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 25 | README.rst, docs/benchmark.rst, benchmarks/benchmark_script.py |
| Korean language / Korea domain | 22 | README.rst, docs/benchmark.rst, docs/conf.py |
| Spec / doc-driven workflow | 7 | docs/README.rst, docs/install.rst, .readthedocs.yml |
| Security / compliance | 6 | README.rst, docs/go_api.rst, NOTICE.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, example-rich, graphMemory, korea-signal, llm-wiki-memory, security-compliance, spec-driven, vectorSearch |
| stacks | Python, Go, C/C++ |
| capabilities | Vector/search store, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 76 |
| manifests | 8 |
| docs | 17 |
| tests | 6 |
| ci/ops | 0 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.rst |
| title |  |
| headings |  |
| excerpt | N2 ============================================================================== pypi docs travis license .. begin badges .. docs image https //readthedocs.org/projects/n2/badge/?version=latest target https //n2.readthedocs.io/en/latest/?badge=latest alt Documentation Status .. pypi image https //img.shields.io/pypi/v/n2.svg?style=flat target https //pypi.python.org/pypi/n2 alt Latest Version .. travis image https //travis ci.org/kakao/n2.svg?branch=master target https //travis ci.org/kakao/n2 alt Build Status .. license image https //img.shields.io/github/license/kakao/n2 target https //github.com/kakao/n2/blob/master/LICENSE alt Apache License 2.0 .. end badges .. begin intro Lightweight |


## 주요 파일

### Manifests

- benchmarks/README.md
- docs/Makefile
- docs/requirements.txt
- benchmarks/Makefile
- benchmarks/requirements.txt
- Makefile
- src/Makefile
- tests/cpp_test/Makefile


### Spec / Docs / Prompt Artifacts

- docs/requirements.txt
- benchmarks/requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| include | 16 |
| benchmarks | 11 |
| docs | 11 |
| src | 8 |
| tests | 6 |
| bindings | 5 |
| examples | 5 |
| .gitignore | 1 |
| .gitmodules | 1 |
| .project.info | 1 |
| .readthedocs.yml | 1 |
| .travis.yml | 1 |
| AUTHORS.md | 1 |
| CONTRIBUTING.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .h | 17 |
| .py | 12 |
| [no-ext] | 9 |
| .rst | 8 |
| .cc | 7 |
| .md | 5 |
| .go | 4 |
| .cpp | 2 |
| .txt | 2 |
| .yml | 2 |
| .css | 1 |
| .cxx | 1 |
| .i | 1 |
| .in | 1 |
| .info | 1 |
| .ipynb | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
