# line/garr

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/garr |
| local path | sources/line__garr |
| HEAD | cd7c766 |
| stars/forks | 371 / 9 |
| language | Go |
| license | Apache-2.0 |
| pushedAt | 2022-07-29T01:50:16Z |
| trendScore / priorityScore | 80 / 226 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 62 | adder/atomicAdder_test.go, adder/atomicF64Adder_test.go, adder/jdkAdder_test.go |
| Korean language / Korea domain | 23 | circuit-breaker/README.md, queue/README.md, README.md |
| Spec / doc-driven workflow | 16 | retry/backoff_test.go, retry/backoff.go, retry/consts.go |
| Infra / observability | 15 | README.md |
| RAG / retrieval | 4 | queue/mutexLinkedQueue.go, queue/pkg.go |
| LLM wiki / memory / graph | 2 | retry/README.md, CODE_OF_CONDUCT.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, infra-observability, korea-signal, llm-wiki-memory, rag, security-compliance, spec-driven |
| stacks | Go |
| capabilities | Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 79 |
| manifests | 8 |
| docs | 8 |
| tests | 27 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Garr - Go libs in a Jar |
| headings | Garr - Go libs in a Jar / Usage / Getting started / Examples / Adder / Queue / Circuit Breaker |
| excerpt | Garr Go libs in a Jar ! Go Reference https //pkg.go.dev/badge/go.linecorp.com/garr.svg https //pkg.go.dev/go.linecorp.com/garr ! CI https //github.com/line/garr/actions/workflows/ci.yml/badge.svg ! Go Report Card https //goreportcard.com/badge/go.linecorp.com/garr https //goreportcard.com/report/go.linecorp.com/garr Collection of high performance, thread safe, lock free go data structures. adder ./adder/README.md Data structure to perform highly performant sum under high contention. Inspired by OpenJDK LongAdder https //openjdk.java.net/ circuit breaker ./circuit breaker/README.md Data structure to implement circuit breaker pattern to detect remote service failure/alive status. queue ./queue |


## 주요 파일

### Manifests

- adder/README.md
- circuit-breaker/README.md
- queue/README.md
- README.md
- retry/README.md
- worker-pool/README.md
- go.mod
- go.sum


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| adder | 20 |
| circuit-breaker | 17 |
| retry | 16 |
| queue | 9 |
| internal | 5 |
| worker-pool | 3 |
| .github | 2 |
| .gitignore | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| go.mod | 1 |
| go.sum | 1 |
| LICENSE | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .go | 65 |
| .md | 8 |
| [no-ext] | 3 |
| .mod | 1 |
| .sum | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
