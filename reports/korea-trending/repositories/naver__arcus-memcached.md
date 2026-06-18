# naver/arcus-memcached

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/arcus-memcached |
| local path | sources/naver__arcus-memcached |
| HEAD | 05d6169 |
| stars/forks | 76 / 59 |
| language | C |
| license | Apache-2.0 |
| pushedAt | 2026-06-15T11:31:30Z |
| trendScore / priorityScore | 97 / 228 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 63 | README.md, doc/protocol.txt, docs/administration/commandline_args.md |
| RAG / retrieval | 43 | doc/protocol.txt, docs/administration/commandline_args.md, docs/administration/sasl.md |
| Korean language / Korea domain | 15 | README.md, docs/install.md, docs/ascii-protocol/ch04-command-key-value.md |
| Infra / observability | 3 | docs/ascii-protocol/README.md, docs/ascii-protocol/ch13-command-administration.md |
| Spec / doc-driven workflow | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | context-engineering, documentParsing, example-rich, graphMemory, infra-observability, korea-signal, llm-wiki-memory, rag, spec-driven |
| stacks | C/C++ |
| capabilities | Graph/memory store, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 335 |
| manifests | 4 |
| docs | 41 |
| tests | 13 |
| ci/ops | 2 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | arcus-memcached : Arcus Memory Cache Server |
| headings | arcus-memcached : Arcus Memory Cache Server / Build on Linux / Run / ASCII Protocol / Issues / Arcus Contributors / License / Patents |
| excerpt | arcus memcached Arcus Memory Cache Server ! CI https //github.com/naver/arcus memcached/actions/workflows/CI.yml/badge.svg?branch=develop https //github.com/naver/arcus memcached/actions/workflows/CI.yml ! Coverage Status https //coveralls.io/repos/github/naver/arcus memcached/badge.svg?branch=develop https //coveralls.io/github/naver/arcus memcached Arcus is a memcached based cache cloud developed by NAVER Corp. Memcached has been heavily modified to support functional and performance requirements of NAVER services. Arcus is normally positioned in front of a back end storage, such as DB, where it stores/retrieves hot spot data of service applications using fast main memory. Therefore, Arcus |


## 주요 파일

### Manifests

- docs/administration/README.md
- docs/ascii-protocol/README.md
- README.md
- Dockerfile


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| t | 126 |
| engines | 43 |
| docs | 20 |
| doc | 16 |
| include | 16 |
| win32 | 9 |
| scripts | 7 |
| .github | 4 |
| config | 4 |
| devtools | 4 |
| rfc1321 | 3 |
| _run_memcached_solo.sh | 1 |
| .gitignore | 1 |
| .shipit | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .t | 99 |
| .h | 64 |
| .c | 59 |
| .md | 25 |
| [no-ext] | 22 |
| .pl | 20 |
| .bt | 7 |
| .sh | 5 |
| .txt | 5 |
| .in | 4 |
| .xml | 4 |
| .conf | 3 |
| .am | 2 |
| .ent | 2 |
| .xsl | 2 |
| .1 | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
