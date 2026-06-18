# kakao/varlog

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakao/varlog |
| local path | sources/kakao__varlog |
| HEAD | 6a885fb |
| stars/forks | 53 / 7 |
| language | Go |
| license | Apache-2.0 |
| pushedAt | 2026-02-16T13:35:00Z |
| trendScore / priorityScore | 91 / 244 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 270 | README.md, go.mod, Makefile |
| Infra / observability | 109 | go.mod, Makefile, internal/storagenode/telemetry/metrics_test.go |
| AI agent / tool use | 5 | cmd/benchmark/test_command.go |
| Security / compliance | 5 | README.md, .github/workflows/codeql.yml |
| Frontend / developer experience | 3 | go.mod |
| LLM wiki / memory / graph | 3 | internal/storage/encode.go, internal/storage/store.go, internal/storagenode/logstream/subscribe.go |
| Spec / doc-driven workflow | 3 | internal/storagenode/telemetry/metrics.go |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, rag, sdk-api, security-compliance, spec-driven |
| stacks | Python, Go |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 565 |
| manifests | 5 |
| docs | 9 |
| tests | 127 |
| ci/ops | 12 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Varlog |
| headings | Varlog / Installation / Usage / License |
| excerpt | Varlog ! ci https //github.com/kakao/varlog/actions/workflows/ci.yaml/badge.svg?branch=main https //github.com/kakao/varlog/actions?query=workflow%3Aci+branch%3Amain ! codecov https //codecov.io/gh/kakao/varlog/branch/main/graph/badge.svg?token=E6ULNVKEZM https //codecov.io/gh/kakao/varlog Varlog is a strongly consistent distributed log storage. It enables many distributed systems to leverage total ordered logs to support transactional event processing with high performance, and simplify the building the complex distributed systems. Installation With Go module support, add the following import to your code. Usage License This software is licensed under the Apache 2 license LICENSE , quoted b |


## 주요 파일

### Manifests

- githooks/README.md
- README.md
- go.mod
- Makefile
- go.sum


### Spec / Docs / Prompt Artifacts

- docs/benchmark.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| internal | 285 |
| pkg | 82 |
| proto | 53 |
| tests | 44 |
| cmd | 31 |
| testdata | 23 |
| .github | 9 |
| bin | 7 |
| scripts | 7 |
| pylib | 4 |
| docs | 2 |
| githooks | 2 |
| .clang-format | 1 |
| .dockerignore | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .go | 370 |
| [no-ext] | 82 |
| .json | 24 |
| .log | 17 |
| .proto | 13 |
| .sst | 12 |
| .py | 11 |
| .md | 9 |
| .sh | 7 |
| .yaml | 4 |
| .ct | 3 |
| .yml | 3 |
| .manifest-000006 | 2 |
| .tmpl | 2 |
| .013 | 1 |
| .016 | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
