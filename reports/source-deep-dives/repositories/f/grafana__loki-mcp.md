# grafana/loki-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

An MCP ( Model Context Protocol ) Server for Grafana Loki

## 요약

- 조사 단위: `sources/grafana__loki-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 27 files, 15 directories, depth score 81, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=loki-mcp-client, run-mcp-server.sh이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | grafana/loki-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 152 |
| Forks | 32 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/grafana__loki-mcp](../../../../sources/grafana__loki-mcp) |
| 기존 보고서 | [reports/global-trending/repositories/grafana__loki-mcp.md](../../../global-trending/repositories/grafana__loki-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 27 / 15 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, cmd, examples, grafana, internal, pkg, promtail |
| 상위 확장자 | .go: 5, .json: 4, .yml: 4, (none): 4, .sh: 3, .html: 2, .md: 2, .mod: 1, .sum: 1, .yaml: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| cmd/client | cmd workspace | 1 |
| cmd/server | cmd workspace | 1 |
| examples | top-level component | 1 |
| grafana | top-level component | 1 |
| internal | top-level component | 1 |
| pkg | top-level component | 1 |
| promtail | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| build | Makefile | build | make build |
| utility | Makefile | clean | make clean |
| test | Makefile | test | make test |
| utility | Makefile | run | make run |
| utility | Makefile | run-client | make run-client |
| utility | Makefile | deps | make deps |
| utility | Makefile | tidy | make tidy |
| build | Makefile | build-linux | make build-linux |
| utility | Makefile | help | make help |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [loki-mcp-client](../../../../sources/grafana__loki-mcp/loki-mcp-client) | mcp signal |
| mcp | [run-mcp-server.sh](../../../../sources/grafana__loki-mcp/run-mcp-server.sh) | mcp signal |
| entrypoints | [cmd/server/main.go](../../../../sources/grafana__loki-mcp/cmd/server/main.go) | entrypoints signal |
| entrypoints | [cmd/client/main.go](../../../../sources/grafana__loki-mcp/cmd/client/main.go) | entrypoints signal |
| config | [go.mod](../../../../sources/grafana__loki-mcp/go.mod) | config signal |
| config | [Makefile](../../../../sources/grafana__loki-mcp/Makefile) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/grafana__loki-mcp/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/README.md](../../../../sources/grafana__loki-mcp/.github/workflows/README.md) | ci support |
| container | [docker-compose.yml](../../../../sources/grafana__loki-mcp/docker-compose.yml) | container support |
| container | [Dockerfile](../../../../sources/grafana__loki-mcp/Dockerfile) | container support |
| eval | [test-loki-query.sh](../../../../sources/grafana__loki-mcp/test-loki-query.sh) | eval support |
| eval | [internal/handlers/loki_test.go](../../../../sources/grafana__loki-mcp/internal/handlers/loki_test.go) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [cmd/server/main.go](../../../../sources/grafana__loki-mcp/cmd/server/main.go)<br>[cmd/client/main.go](../../../../sources/grafana__loki-mcp/cmd/client/main.go) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 2 | [loki-mcp-client](../../../../sources/grafana__loki-mcp/loki-mcp-client)<br>[run-mcp-server.sh](../../../../sources/grafana__loki-mcp/run-mcp-server.sh) |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 3 | [test-loki-query.sh](../../../../sources/grafana__loki-mcp/test-loki-query.sh)<br>[internal/handlers/loki_test.go](../../../../sources/grafana__loki-mcp/internal/handlers/loki_test.go)<br>[.github/workflows/test.yml](../../../../sources/grafana__loki-mcp/.github/workflows/test.yml) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/grafana__loki-mcp/.github/workflows/ci.yml)<br>[.github/workflows/README.md](../../../../sources/grafana__loki-mcp/.github/workflows/README.md)<br>[.github/workflows/test.yml](../../../../sources/grafana__loki-mcp/.github/workflows/test.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/grafana__loki-mcp/docker-compose.yml)<br>[Dockerfile](../../../../sources/grafana__loki-mcp/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 2 | [README.md](../../../../sources/grafana__loki-mcp/README.md)<br>[.github/workflows/README.md](../../../../sources/grafana__loki-mcp/.github/workflows/README.md) |
| config | 2 | [go.mod](../../../../sources/grafana__loki-mcp/go.mod)<br>[Makefile](../../../../sources/grafana__loki-mcp/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 3 | [test-loki-query.sh](../../../../sources/grafana__loki-mcp/test-loki-query.sh)<br>[internal/handlers/loki_test.go](../../../../sources/grafana__loki-mcp/internal/handlers/loki_test.go)<br>[.github/workflows/test.yml](../../../../sources/grafana__loki-mcp/.github/workflows/test.yml) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/grafana__loki-mcp/.github/workflows/ci.yml)<br>[.github/workflows/README.md](../../../../sources/grafana__loki-mcp/.github/workflows/README.md)<br>[.github/workflows/test.yml](../../../../sources/grafana__loki-mcp/.github/workflows/test.yml) |
| 컨테이너/배포 | 2 | [docker-compose.yml](../../../../sources/grafana__loki-mcp/docker-compose.yml)<br>[Dockerfile](../../../../sources/grafana__loki-mcp/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `loki-mcp-client`, `run-mcp-server.sh`, `cmd/server/main.go`.
2. entrypoint를 따라 실행 흐름 확인: `cmd/server/main.go`, `cmd/client/main.go`.
3. test/eval 파일로 동작 검증: `test-loki-query.sh`, `internal/handlers/loki_test.go`, `.github/workflows/test.yml`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 An MCP Model Context Protocol Server for Grafana Loki. 핵심 구조 신호는 Go, go.mod, Dockerfile, docker-compose.yml, Makefile, README.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
