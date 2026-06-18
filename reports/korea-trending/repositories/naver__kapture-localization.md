# naver/kapture-localization

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/kapture-localization |
| local path | sources/naver__kapture-localization |
| HEAD | f3bbdcd |
| stars/forks | 286 / 43 |
| language | Python |
| license | BSD-3-Clause |
| pushedAt | 2024-03-28T13:55:53Z |
| trendScore / priorityScore | 98 / 255 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 123 | README.adoc, doc/benchmark_results.adoc, doc/benchmark.adoc |
| RAG / retrieval | 105 | pipeline/README.adoc, README.adoc, doc/benchmark_results_aachen.adoc |
| Spec / doc-driven workflow | 13 | doc/benchmark.adoc, Dockerfile, doc/installation.adoc |
| LLM wiki / memory / graph | 8 | tools/kapture_image_retrieval_late_fusion.py, samples/virtual_gallery_tutorial/LICENSE.txt, tools/kapture_colmap_localize_sift.py |
| Frontend / developer experience | 4 | kapture_localization/triangulation/triangulate.py |
| Local LLM / on-device inference | 2 | kapture_localization/matching/matching.py |
| Security / compliance | 1 | samples/virtual_gallery_tutorial/LICENSE.txt |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, local-llm, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 159 |
| manifests | 2 |
| docs | 10 |
| tests | 2 |
| ci/ops | 3 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.adoc |
| title |  |
| headings |  |
| excerpt | = kapture localization toolbox sectnums sectnumlevels 1 toc macro toclevels 2 toc == Overview kapture localization is a toolbox in which you will find implementations for various localization related algorithms. It strongly relies on the https //github.com/naver/kapture kapture format for data representation and manipulation. The localization algorithms include . mapping , . localization , and . benchmarking image retrieval for visual localization . It works on Ubuntu, Windows, and MacOS. == Structure The directories are organised as follow ├── kapture localization/ package library ├── pipeline/ main programs executing all steps of the localization pipelines ├── samples/ some sample data ├── |


## 주요 파일

### Manifests

- Dockerfile
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| samples | 62 |
| kapture_localization | 35 |
| tools | 27 |
| pipeline | 16 |
| doc | 8 |
| .github | 2 |
| tests | 2 |
| .gitignore | 1 |
| Dockerfile | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| README.adoc | 1 |
| requirements.txt | 1 |
| setup.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 74 |
| .desc | 16 |
| .gfeat | 16 |
| .kpt | 16 |
| .txt | 12 |
| .adoc | 10 |
| .sh | 8 |
| [no-ext] | 5 |
| .yml | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
