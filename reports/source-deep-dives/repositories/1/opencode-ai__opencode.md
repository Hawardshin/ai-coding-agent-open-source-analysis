# opencode-ai/opencode 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 162 files, 46 directories.

## 요약

- 조사 단위: `sources/opencode-ai__opencode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 162 files, 46 directories, depth score 97, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=internal/llm/agent/mcp-tools.go이고, 의존성 단서는 openai, anthropic, mcp, cobra, chroma, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | opencode-ai/opencode |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/opencode-ai__opencode](../../../../sources/opencode-ai__opencode) |
| 기존 보고서 | [reports/clone-structures/opencode-ai__opencode.md](../../../clone-structures/opencode-ai__opencode.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 162 / 46 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, cmd, internal, scripts |
| 상위 확장자 | .go: 140, (none): 6, .sql: 5, .yml: 3, .json: 2, .md: 2, .mod: 1, .sh: 1, .sum: 1, .yaml: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| cmd/schema | cmd workspace | 2 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| internal | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | chroma |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | cobra |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [internal/llm/agent/mcp-tools.go](../../../../sources/opencode-ai__opencode/internal/llm/agent/mcp-tools.go) | mcp signal |
| agentRuntime | [internal/llm/tools/bash.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/bash.go) | agentRuntime signal |
| agentRuntime | [internal/llm/tools/diagnostics.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/diagnostics.go) | agentRuntime signal |
| agentRuntime | [internal/llm/tools/edit.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/edit.go) | agentRuntime signal |
| agentRuntime | [internal/llm/tools/fetch.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/fetch.go) | agentRuntime signal |
| entrypoints | [main.go](../../../../sources/opencode-ai__opencode/main.go) | entrypoints signal |
| entrypoints | [cmd/schema/main.go](../../../../sources/opencode-ai__opencode/cmd/schema/main.go) | entrypoints signal |
| config | [go.mod](../../../../sources/opencode-ai__opencode/go.mod) | config signal |
| ci | [.github/workflows/build.yml](../../../../sources/opencode-ai__opencode/.github/workflows/build.yml) | ci support |
| ci | [.github/workflows/release.yml](../../../../sources/opencode-ai__opencode/.github/workflows/release.yml) | ci support |
| eval | [internal/tui/theme/theme_test.go](../../../../sources/opencode-ai__opencode/internal/tui/theme/theme_test.go) | eval support |
| eval | [internal/tui/components/dialog/custom_commands_test.go](../../../../sources/opencode-ai__opencode/internal/tui/components/dialog/custom_commands_test.go) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [main.go](../../../../sources/opencode-ai__opencode/main.go)<br>[cmd/schema/main.go](../../../../sources/opencode-ai__opencode/cmd/schema/main.go) |
| agentRuntime | 19 | [internal/llm/tools/bash.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/bash.go)<br>[internal/llm/tools/diagnostics.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/diagnostics.go)<br>[internal/llm/tools/edit.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/edit.go)<br>[internal/llm/tools/fetch.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/fetch.go)<br>[internal/llm/tools/file.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/file.go)<br>[internal/llm/tools/glob.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/glob.go)<br>[internal/llm/tools/grep.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/grep.go)<br>[internal/llm/tools/ls_test.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/ls_test.go) |
| mcp | 1 | [internal/llm/agent/mcp-tools.go](../../../../sources/opencode-ai__opencode/internal/llm/agent/mcp-tools.go) |
| retrieval | 1 | [internal/db/embed.go](../../../../sources/opencode-ai__opencode/internal/db/embed.go) |
| spec | 0 | 명확하지 않음 |
| eval | 4 | [internal/tui/theme/theme_test.go](../../../../sources/opencode-ai__opencode/internal/tui/theme/theme_test.go)<br>[internal/tui/components/dialog/custom_commands_test.go](../../../../sources/opencode-ai__opencode/internal/tui/components/dialog/custom_commands_test.go)<br>[internal/llm/tools/ls_test.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/ls_test.go)<br>[internal/llm/prompt/prompt_test.go](../../../../sources/opencode-ai__opencode/internal/llm/prompt/prompt_test.go) |
| security | 2 | [internal/tui/components/dialog/permission.go](../../../../sources/opencode-ai__opencode/internal/tui/components/dialog/permission.go)<br>[internal/permission/permission.go](../../../../sources/opencode-ai__opencode/internal/permission/permission.go) |
| ci | 2 | [.github/workflows/build.yml](../../../../sources/opencode-ai__opencode/.github/workflows/build.yml)<br>[.github/workflows/release.yml](../../../../sources/opencode-ai__opencode/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 2 | [README.md](../../../../sources/opencode-ai__opencode/README.md)<br>[cmd/schema/README.md](../../../../sources/opencode-ai__opencode/cmd/schema/README.md) |
| config | 1 | [go.mod](../../../../sources/opencode-ai__opencode/go.mod) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 4 | [internal/tui/theme/theme_test.go](../../../../sources/opencode-ai__opencode/internal/tui/theme/theme_test.go)<br>[internal/tui/components/dialog/custom_commands_test.go](../../../../sources/opencode-ai__opencode/internal/tui/components/dialog/custom_commands_test.go)<br>[internal/llm/tools/ls_test.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/ls_test.go)<br>[internal/llm/prompt/prompt_test.go](../../../../sources/opencode-ai__opencode/internal/llm/prompt/prompt_test.go) |
| CI workflow | 2 | [.github/workflows/build.yml](../../../../sources/opencode-ai__opencode/.github/workflows/build.yml)<br>[.github/workflows/release.yml](../../../../sources/opencode-ai__opencode/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [internal/tui/components/dialog/permission.go](../../../../sources/opencode-ai__opencode/internal/tui/components/dialog/permission.go)<br>[internal/permission/permission.go](../../../../sources/opencode-ai__opencode/internal/permission/permission.go) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `internal/llm/agent/mcp-tools.go`, `internal/llm/tools/bash.go`, `internal/llm/tools/diagnostics.go`.
2. entrypoint를 따라 실행 흐름 확인: `main.go`, `cmd/schema/main.go`.
3. agent/tool runtime 매핑: `internal/llm/tools/bash.go`, `internal/llm/tools/diagnostics.go`, `internal/llm/tools/edit.go`.
4. retrieval/memory/indexing 확인: `internal/db/embed.go`.
5. test/eval 파일로 동작 검증: `internal/tui/theme/theme_test.go`, `internal/tui/components/dialog/custom_commands_test.go`, `internal/llm/tools/ls_test.go`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 162 files, 46 directories.. 핵심 구조 신호는 go.mod, README.md, LICENSE, openai, anthropic, mcp이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음입니다.
