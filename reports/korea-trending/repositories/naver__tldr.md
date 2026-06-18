# naver/tldr

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/tldr |
| local path | sources/naver__tldr |
| HEAD | bcbd043 |
| stars/forks | 127 / 3 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2022-06-15T06:55:41Z |
| trendScore / priorityScore | 86 / 193 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Spec / doc-driven workflow | 10 | README.md, tldr/tldr.py |
| Korean language / Korea domain | 5 | README.md, setup.py, tldr/tldr.py |
| LLM wiki / memory / graph | 2 | README.md, tldr/tldr.py |
| RAG / retrieval | 2 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, graphMemory, korea-signal, llm-wiki-memory, rag, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | Vector/search store, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 11 |
| manifests | 1 |
| docs | 1 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | TLDR: Twin Learning for Dimensionality Reduction |
| headings | TLDR: Twin Learning for Dimensionality Reduction / Installing the TLDR library / Using the TLDR library / Generate random data / Instantiating a TLDR model / Learning and applying the TLDR model / Saving/loading the model / Documentation / Architecture Specification Strings / Citation |
| excerpt | TLDR Twin Learning for Dimensionality Reduction TLDR https //openreview.net/forum?id=86fhqdBUbx Twin Learning for Dimensionality Reduction is an unsupervised dimensionality reduction method that combines neighborhood embedding learning with the simplicity and effectiveness of recent self supervised learning losses. Inspired by manifold learning, TLDR uses nearest neighbors as a way to build pairs from a training set and a redundancy reduction loss to learn an encoder that produces representations invariant across such pairs. Similar to other neighborhood embeddings, TLDR effectively and unsupervisedly learns low dimensional spaces where local neighborhoods of the input space are preserved; u |


## 주요 파일

### Manifests

- README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| tldr | 5 |
| .gitignore | 1 |
| LICENSE | 1 |
| LICENSE_Barlow_Twins | 1 |
| README.md | 1 |
| scripts | 1 |
| setup.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 7 |
| [no-ext] | 3 |
| .md | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
