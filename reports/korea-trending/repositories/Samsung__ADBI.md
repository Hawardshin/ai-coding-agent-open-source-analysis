# Samsung/ADBI

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/ADBI |
| local path | sources/Samsung__ADBI |
| HEAD | 3e424c4 |
| stars/forks | 317 / 84 |
| language | C |
| license | Apache-2.0 |
| pushedAt | 2023-04-07T10:41:11Z |
| trendScore / priorityScore | 85 / 228 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Spec / doc-driven workflow | 37 | arch/arm/tests/blx_reg_a1.py, arch/arm/tests/blx_reg_t1.py, arch/arm/tests/branch.py |
| Korean language / Korea domain | 3 | make_deb.sh, make_toolchain_deb.sh |
| LLM wiki / memory / graph | 3 | idk/cachebuilder/debuginfo.py, idk/dwexpr/machine.py, idk/dwexpr/result.py |
| RAG / retrieval | 3 | adbiclient/adbi/rsock.py |
| Infra / observability | 1 | Makefile |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, example-rich, graphMemory, infra-observability, korea-signal, llm-wiki-memory, rag, spec-driven |
| stacks | Python, C/C++ |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 324 |
| manifests | 11 |
| docs | 10 |
| tests | 49 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file |  |
| title |  |
| headings |  |
| excerpt |  |


## 주요 파일

### Manifests

- adbilog/Makefile
- arch/arm/tests/Makefile
- arch/arm64/tests/Makefile
- idk/tests/Makefile
- Makefile
- arch/arm/templates/Makefile
- arch/arm64/templates/Makefile
- inj/adbi_mmap/Makefile
- inj/adbi_munmap/Makefile
- inj/adbi/Makefile
- inj/dummy/Makefile


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| arch | 113 |
| idk | 86 |
| lib | 19 |
| procutil | 13 |
| process | 12 |
| demo | 11 |
| doc | 10 |
| util | 10 |
| inj | 9 |
| adbiclient | 8 |
| tracepoint | 7 |
| communication | 6 |
| injectable | 4 |
| injection | 4 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 88 |
| .h | 74 |
| .c | 61 |
| [no-ext] | 45 |
| .s | 43 |
| .a | 3 |
| .adbi | 2 |
| .sh | 2 |
| .txt | 2 |
| .html | 1 |
| .patterns | 1 |
| .sql | 1 |
| .x | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
