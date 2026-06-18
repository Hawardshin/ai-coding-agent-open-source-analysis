# naver/kapture

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/kapture |
| local path | sources/naver__kapture |
| HEAD | 8225b77 |
| stars/forks | 541 / 71 |
| language | Python |
| license | BSD-3-Clause |
| pushedAt | 2026-04-17T09:46:26Z |
| trendScore / priorityScore | 119 / 266 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 50 | README.adoc, doc/datasets.adoc, doc/installation.adoc |
| Spec / doc-driven workflow | 8 | README.adoc, doc/installation.adoc, CONTRIBUTING.adoc |
| RAG / retrieval | 7 | README.adoc, .github/workflows/kapture-release-pypi.yml, kapture_format.adoc |
| LLM wiki / memory / graph | 5 | samples/Aachen-Day-Night/LICENSE.txt |
| Security / compliance | 1 | samples/Aachen-Day-Night/LICENSE.txt |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, example-rich, graphMemory, korea-signal, llm-wiki-memory, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 474 |
| manifests | 3 |
| docs | 6 |
| tests | 22 |
| ci/ops | 4 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.adoc |
| title | build the docker image : if you have already cloned the repository |
| headings | build the docker image : if you have already cloned the repository / OR build the docker image directly from github (no need to clone). / run unit tests |
| excerpt | sectnums sectnumlevels 1 toc macro toclevels 2 image assets/kapture banner.png "KAPTURE", width=800px toc image https //github.com/naver/kapture/workflows/kapture main/badge.svg Continuous Integration Status == Overview Kapture is a pivot file format, based on text and binary files, used to describe SfM Structure From Motion and more generally sensor acquired data. It can be used to store sensor parameters and raw sensor data cameras images lidar and other sensor data As well as computed data 2d features 3d reconstruction Finally, many popular datasets can directly be downloaded using the convenient https //github.com/naver/kapture/blob/main/doc/tutorial.adoc download a dataset downloader ! |


## 주요 파일

### Manifests

- docker/Dockerfile
- Makefile
- pyproject.toml


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| samples | 320 |
| kapture | 71 |
| tools | 39 |
| tests | 22 |
| assets | 4 |
| .github | 3 |
| doc | 3 |
| dataset | 2 |
| .gitignore | 1 |
| CONTRIBUTING.adoc | 1 |
| CONTRIBUTORS | 1 |
| docker | 1 |
| kapture_format.adoc | 1 |
| LICENSE | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .txt | 161 |
| .py | 132 |
| .kpt | 32 |
| .depth | 27 |
| .desc | 15 |
| .matches | 15 |
| [no-ext] | 13 |
| .svg | 12 |
| .json | 10 |
| .ply | 10 |
| .yaml | 7 |
| .adoc | 6 |
| .pcd | 6 |
| .feat | 4 |
| .yml | 4 |
| .bin | 3 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
