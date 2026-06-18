# daangn/autopprof

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/daangn/autopprof |
| local path | sources/daangn__autopprof |
| HEAD | f87ad09 |
| stars/forks | 218 / 10 |
| language | Go |
| license | Apache-2.0 |
| pushedAt | 2026-06-04T09:30:34Z |
| trendScore / priorityScore | 96 / 211 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 23 | README.md, examples/go.mod, go.mod |
| LLM wiki / memory / graph | 13 | README.md, examples/example.go, error.go |
| Spec / doc-driven workflow | 2 | examples/go.mod, go.mod |


## 분류와 스택

| key | value |
| --- | --- |
| categories | context-engineering, evalObservability, example-rich, graphMemory, korea-signal, llm-wiki-memory, spec-driven |
| stacks | Go |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 42 |
| manifests | 6 |
| docs | 2 |
| tests | 8 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | autopprof |
| headings | autopprof / Installation / Usage / Custom metrics / Migrating from v1 to v2 / 1. Update the module path / 2. `Option` changes / 3. `SlackReporterOption` changes / 4. `Reporter` interface (4 methods → 1) / 5. Bug fixes carried in v2 |
| excerpt | autopprof ! Run tests https //github.com/daangn/autopprof/workflows/Run%20tests/badge.svg ! Release https //img.shields.io/github/v/tag/daangn/autopprof?label=Release https //github.com/daangn/autopprof/releases Automatically profile the Go applications when CPU or memory utilization crosses specific threshold levels against the Linux container CPU quota and memory limit. Once you start the autopprof, the autopprof process will periodically check the CPU and memory utilization of the Go applications. If the resource utilization crosses the specified threshold for each type of resource, the autopprof will automatically profile the application heap or cpu and report the profiling report to the |


## 주요 파일

### Manifests

- README.md
- examples/go.mod
- Dockerfile
- go.mod
- examples/go.sum
- go.sum


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| queryer | 12 |
| examples | 3 |
| report | 3 |
| .github | 2 |
| .gitignore | 1 |
| .goreleaser.yml | 1 |
| autopprof_test.go | 1 |
| autopprof_unsupported_test.go | 1 |
| autopprof_unsupported.go | 1 |
| autopprof.go | 1 |
| benchmark.sh | 1 |
| DEVELOPMENT.md | 1 |
| Dockerfile | 1 |
| error.go | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .go | 29 |
| .yml | 3 |
| [no-ext] | 3 |
| .md | 2 |
| .mod | 2 |
| .sum | 2 |
| .sh | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
