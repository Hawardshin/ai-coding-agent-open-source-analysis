# tanaikech/ggsrun 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

High-performance Google Drive CLI and Model Context Protocol (MCP) Server for LLM/AI agents (v5.3.2). Natively execute Apps Script (GAS) dynamically, automate conflict policies, recursive transfer, and manage Drive infrastructure.

## 요약

- 조사 단위: `sources/tanaikech__ggsrun` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 61 files, 7 directories, depth score 69, key references 6개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=internal/app/handler_mcp.go이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | tanaikech/ggsrun |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 166 |
| Forks | 18 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/tanaikech__ggsrun](../../../../sources/tanaikech__ggsrun) |
| 기존 보고서 | [reports/global-trending/repositories/tanaikech__ggsrun.md](../../../global-trending/repositories/tanaikech__ggsrun.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 61 / 7 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | help, internal, server |
| 상위 확장자 | .go: 36, .gif: 8, .png: 5, .md: 4, .gs: 2, .jpg: 2, (none): 2, .mod: 1, .sum: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| server | source boundary | 4 |
| help | top-level component | 1 |
| internal | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
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
| mcp | [internal/app/handler_mcp.go](../../../../sources/tanaikech__ggsrun/internal/app/handler_mcp.go) | mcp signal |
| entrypoints | [main.go](../../../../sources/tanaikech__ggsrun/main.go) | entrypoints signal |
| entrypoints | [server/server.gs](../../../../sources/tanaikech__ggsrun/server/server.gs) | entrypoints signal |
| config | [go.mod](../../../../sources/tanaikech__ggsrun/go.mod) | config signal |
| eval | [server/server_test.gs](../../../../sources/tanaikech__ggsrun/server/server_test.gs) | eval support |
| eval | [internal/tui/fd_test.go](../../../../sources/tanaikech__ggsrun/internal/tui/fd_test.go) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [main.go](../../../../sources/tanaikech__ggsrun/main.go)<br>[server/server.gs](../../../../sources/tanaikech__ggsrun/server/server.gs) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 1 | [internal/app/handler_mcp.go](../../../../sources/tanaikech__ggsrun/internal/app/handler_mcp.go) |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 3 | [server/server_test.gs](../../../../sources/tanaikech__ggsrun/server/server_test.gs)<br>[internal/tui/fd_test.go](../../../../sources/tanaikech__ggsrun/internal/tui/fd_test.go)<br>[internal/app/conflict_test.go](../../../../sources/tanaikech__ggsrun/internal/app/conflict_test.go) |
| security | 1 | [internal/app/oauth.go](../../../../sources/tanaikech__ggsrun/internal/app/oauth.go) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 9 | [README.md](../../../../sources/tanaikech__ggsrun/README.md)<br>[server/README.md](../../../../sources/tanaikech__ggsrun/server/README.md)<br>[help/README.md](../../../../sources/tanaikech__ggsrun/help/README.md)<br>[help/images/readme_Flow_exe1.png](../../../../sources/tanaikech__ggsrun/help/images/readme_Flow_exe1.png)<br>[help/images/readme_Flow_exe2.png](../../../../sources/tanaikech__ggsrun/help/images/readme_Flow_exe2.png)<br>[help/images/readme_flow.png](../../../../sources/tanaikech__ggsrun/help/images/readme_flow.png)<br>[help/images/readme_sheet.png](../../../../sources/tanaikech__ggsrun/help/images/readme_sheet.png)<br>[help/images/readme_sublimedemo.gif](../../../../sources/tanaikech__ggsrun/help/images/readme_sublimedemo.gif) |
| config | 1 | [go.mod](../../../../sources/tanaikech__ggsrun/go.mod) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 3 | [server/server_test.gs](../../../../sources/tanaikech__ggsrun/server/server_test.gs)<br>[internal/tui/fd_test.go](../../../../sources/tanaikech__ggsrun/internal/tui/fd_test.go)<br>[internal/app/conflict_test.go](../../../../sources/tanaikech__ggsrun/internal/app/conflict_test.go) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [internal/app/oauth.go](../../../../sources/tanaikech__ggsrun/internal/app/oauth.go) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `internal/app/handler_mcp.go`, `main.go`, `server/server.gs`.
2. entrypoint를 따라 실행 흐름 확인: `main.go`, `server/server.gs`.
3. test/eval 파일로 동작 검증: `server/server_test.gs`, `internal/tui/fd_test.go`, `internal/app/conflict_test.go`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 High performance Google Drive CLI and Model Context Protocol MCP Server for LLM/AI agents v5.3.2 . Natively execute Apps. 핵심 구조 신호는 Go, go.mod, README.md, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
