# line/centraldogma-go

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/centraldogma-go |
| local path | sources/line__centraldogma-go |
| HEAD | 016c8c7 |
| stars/forks | 54 / 17 |
| language | Go |
| license | Apache-2.0 |
| pushedAt | 2026-05-19T02:25:15Z |
| trendScore / priorityScore | 87 / 204 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 37 | content_service_test.go, dogma_test.go, metric_test.go |
| Korean language / Korea domain | 22 | README.md, go.mod, internal/app/dogma/go.mod |
| Infra / observability | 15 | go.mod, internal/app/dogma/go.mod, metric_test.go |
| LLM wiki / memory / graph | 2 | README.md, CODE_OF_CONDUCT.md |
| RAG / retrieval | 1 | content_service.go |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, infra-observability, korea-signal, llm-wiki-memory, rag, security-compliance |
| stacks | Go |
| capabilities | Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 51 |
| manifests | 5 |
| docs | 3 |
| tests | 14 |
| ci/ops | 2 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Central Dogma client for Go |
| headings | Central Dogma client for Go / Usage / Getting started / Customize transport / Example / Building CLI / Set up the GOPATH. / Clone the repository. / Build the CLI. |
| excerpt | Central Dogma client for Go Central Dogma https //line.github.io/centraldogma/ GoDoc https //godoc.org/go.linecorp.com/centraldogma CLI manual https //line.github.io/centraldogma/client cli.html Usage Getting started Customize transport If transport is nil like above , http2.Transport is used by default. You could inject your own transport easily Example Building CLI We use Go Modules https //github.com/golang/go/wiki/Modules formerly known as vgo to manage the dependencies. |


## 주요 파일

### Manifests

- README.md
- go.mod
- internal/app/dogma/go.mod
- go.sum
- internal/app/dogma/go.sum


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| internal | 22 |
| .github | 3 |
| .codecov.yml | 1 |
| .gitignore | 1 |
| .goreleaser.yml | 1 |
| .travis.yml | 1 |
| CODE_OF_CONDUCT.md | 1 |
| consts.go | 1 |
| content_service_test.go | 1 |
| content_service.go | 1 |
| CONTRIBUTING.md | 1 |
| dogma_test.go | 1 |
| dogma.go | 1 |
| enums.go | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .go | 36 |
| .yml | 5 |
| .md | 3 |
| [no-ext] | 3 |
| .mod | 2 |
| .sum | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
