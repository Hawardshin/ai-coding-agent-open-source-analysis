# charmbracelet/crush 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Glamourous agentic coding for all 💘

## 요약

- 조사 단위: `sources/charmbracelet__crush` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 949 files, 133 directories, depth score 112, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=internal/ui/model/mcp.go, internal/ui/chat/docker_mcp.go, internal/ui/chat/mcp_test.go이고, 의존성 단서는 openai, anthropic, modelcontextprotocol, cobra, chroma, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | charmbracelet/crush |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 25441 |
| Forks | 1835 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/charmbracelet__crush](../../../../sources/charmbracelet__crush) |
| 기존 보고서 | [reports/global-trending/repositories/charmbracelet__crush.md](../../../global-trending/repositories/charmbracelet__crush.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 949 / 133 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .agents, .github, docs, internal, scripts |
| 상위 확장자 | .go: 461, .golden: 363, .md: 29, .yaml: 17, .tpl: 15, .yml: 14, .sql: 12, .after: 5, .before: 5, .json: 5, (none): 5, .sh: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 4 |
| .github | ci surface | 1 |
| internal | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | modelcontextprotocol |
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
| mcp | [internal/ui/model/mcp.go](../../../../sources/charmbracelet__crush/internal/ui/model/mcp.go) | mcp signal |
| mcp | [internal/ui/chat/docker_mcp.go](../../../../sources/charmbracelet__crush/internal/ui/chat/docker_mcp.go) | mcp signal |
| mcp | [internal/ui/chat/mcp_test.go](../../../../sources/charmbracelet__crush/internal/ui/chat/mcp_test.go) | mcp signal |
| mcp | [internal/ui/chat/mcp.go](../../../../sources/charmbracelet__crush/internal/ui/chat/mcp.go) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/charmbracelet__crush/AGENTS.md) | agentRuntime signal |
| agentRuntime | [internal/ui/AGENTS.md](../../../../sources/charmbracelet__crush/internal/ui/AGENTS.md) | agentRuntime signal |
| agentRuntime | [internal/ui/model/skills_test.go](../../../../sources/charmbracelet__crush/internal/ui/model/skills_test.go) | agentRuntime signal |
| agentRuntime | [internal/ui/model/skills.go](../../../../sources/charmbracelet__crush/internal/ui/model/skills.go) | agentRuntime signal |
| entrypoints | [main.go](../../../../sources/charmbracelet__crush/main.go) | entrypoints signal |
| entrypoints | [internal/ui/logo/example/main.go](../../../../sources/charmbracelet__crush/internal/ui/logo/example/main.go) | entrypoints signal |
| entrypoints | [internal/server/server.go](../../../../sources/charmbracelet__crush/internal/server/server.go) | entrypoints signal |
| entrypoints | [internal/proto/server.go](../../../../sources/charmbracelet__crush/internal/proto/server.go) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [main.go](../../../../sources/charmbracelet__crush/main.go)<br>[internal/ui/logo/example/main.go](../../../../sources/charmbracelet__crush/internal/ui/logo/example/main.go)<br>[internal/server/server.go](../../../../sources/charmbracelet__crush/internal/server/server.go)<br>[internal/proto/server.go](../../../../sources/charmbracelet__crush/internal/proto/server.go)<br>[internal/cmd/server.go](../../../../sources/charmbracelet__crush/internal/cmd/server.go) |
| agentRuntime | 158 | [AGENTS.md](../../../../sources/charmbracelet__crush/AGENTS.md)<br>[internal/ui/AGENTS.md](../../../../sources/charmbracelet__crush/internal/ui/AGENTS.md)<br>[internal/ui/model/skills_test.go](../../../../sources/charmbracelet__crush/internal/ui/model/skills_test.go)<br>[internal/ui/model/skills.go](../../../../sources/charmbracelet__crush/internal/ui/model/skills.go)<br>[internal/ui/chat/agent.go](../../../../sources/charmbracelet__crush/internal/ui/chat/agent.go)<br>[internal/ui/chat/tool_result_content_test.go](../../../../sources/charmbracelet__crush/internal/ui/chat/tool_result_content_test.go)<br>[internal/ui/chat/tool_result_content.go](../../../../sources/charmbracelet__crush/internal/ui/chat/tool_result_content.go)<br>[internal/ui/chat/tools.go](../../../../sources/charmbracelet__crush/internal/ui/chat/tools.go) |
| mcp | 19 | [internal/ui/model/mcp.go](../../../../sources/charmbracelet__crush/internal/ui/model/mcp.go)<br>[internal/ui/chat/docker_mcp.go](../../../../sources/charmbracelet__crush/internal/ui/chat/docker_mcp.go)<br>[internal/ui/chat/mcp_test.go](../../../../sources/charmbracelet__crush/internal/ui/chat/mcp_test.go)<br>[internal/ui/chat/mcp.go](../../../../sources/charmbracelet__crush/internal/ui/chat/mcp.go)<br>[internal/proto/mcp.go](../../../../sources/charmbracelet__crush/internal/proto/mcp.go)<br>[internal/config/docker_mcp_test.go](../../../../sources/charmbracelet__crush/internal/config/docker_mcp_test.go)<br>[internal/config/docker_mcp.go](../../../../sources/charmbracelet__crush/internal/config/docker_mcp.go)<br>[internal/config/mcp_resolved_url_test.go](../../../../sources/charmbracelet__crush/internal/config/mcp_resolved_url_test.go) |
| retrieval | 4 | [internal/skills/embed.go](../../../../sources/charmbracelet__crush/internal/skills/embed.go)<br>[internal/cmd/stats/index.css](../../../../sources/charmbracelet__crush/internal/cmd/stats/index.css)<br>[internal/cmd/stats/index.html](../../../../sources/charmbracelet__crush/internal/cmd/stats/index.html)<br>[internal/cmd/stats/index.js](../../../../sources/charmbracelet__crush/internal/cmd/stats/index.js) |
| spec | 0 | 명확하지 않음 |
| eval | 149 | [internal/workspace/client_workspace_test.go](../../../../sources/charmbracelet__crush/internal/workspace/client_workspace_test.go)<br>[internal/workspace/export_test.go](../../../../sources/charmbracelet__crush/internal/workspace/export_test.go)<br>[internal/workspace/multiclient_integration_test.go](../../../../sources/charmbracelet__crush/internal/workspace/multiclient_integration_test.go)<br>[internal/update/update_test.go](../../../../sources/charmbracelet__crush/internal/update/update_test.go)<br>[internal/ui/notification/notification_test.go](../../../../sources/charmbracelet__crush/internal/ui/notification/notification_test.go)<br>[internal/ui/model/chat_draw_cache_test.go](../../../../sources/charmbracelet__crush/internal/ui/model/chat_draw_cache_test.go)<br>[internal/ui/model/chat_expand_test.go](../../../../sources/charmbracelet__crush/internal/ui/model/chat_expand_test.go)<br>[internal/ui/model/filter_test.go](../../../../sources/charmbracelet__crush/internal/ui/model/filter_test.go) |
| security | 17 | [internal/ui/model/permission_test.go](../../../../sources/charmbracelet__crush/internal/ui/model/permission_test.go)<br>[internal/ui/dialog/oauth_copilot.go](../../../../sources/charmbracelet__crush/internal/ui/dialog/oauth_copilot.go)<br>[internal/ui/dialog/oauth_hyper.go](../../../../sources/charmbracelet__crush/internal/ui/dialog/oauth_hyper.go)<br>[internal/ui/dialog/oauth.go](../../../../sources/charmbracelet__crush/internal/ui/dialog/oauth.go)<br>[internal/proto/permission_test.go](../../../../sources/charmbracelet__crush/internal/proto/permission_test.go)<br>[internal/proto/permission.go](../../../../sources/charmbracelet__crush/internal/proto/permission.go)<br>[internal/permission/permission_test.go](../../../../sources/charmbracelet__crush/internal/permission/permission_test.go)<br>[internal/permission/permission.go](../../../../sources/charmbracelet__crush/internal/permission/permission.go) |
| ci | 10 | [.github/workflows/build.yml](../../../../sources/charmbracelet__crush/.github/workflows/build.yml)<br>[.github/workflows/cla.yml](../../../../sources/charmbracelet__crush/.github/workflows/cla.yml)<br>[.github/workflows/labeler.yml](../../../../sources/charmbracelet__crush/.github/workflows/labeler.yml)<br>[.github/workflows/lint-sync.yml](../../../../sources/charmbracelet__crush/.github/workflows/lint-sync.yml)<br>[.github/workflows/lint.yml](../../../../sources/charmbracelet__crush/.github/workflows/lint.yml)<br>[.github/workflows/nightly.yml](../../../../sources/charmbracelet__crush/.github/workflows/nightly.yml)<br>[.github/workflows/release.yml](../../../../sources/charmbracelet__crush/.github/workflows/release.yml)<br>[.github/workflows/schema-update.yml](../../../../sources/charmbracelet__crush/.github/workflows/schema-update.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 3 | [AGENTS.md](../../../../sources/charmbracelet__crush/AGENTS.md)<br>[internal/ui/AGENTS.md](../../../../sources/charmbracelet__crush/internal/ui/AGENTS.md)<br>[internal/cmd/stats/AGENTS.md](../../../../sources/charmbracelet__crush/internal/cmd/stats/AGENTS.md) |
| docs | 4 | [README.md](../../../../sources/charmbracelet__crush/README.md)<br>[docs/hooks/FUTURE.md](../../../../sources/charmbracelet__crush/docs/hooks/FUTURE.md)<br>[docs/hooks/README.md](../../../../sources/charmbracelet__crush/docs/hooks/README.md)<br>[docs/hooks/examples/rtk-rewrite.sh](../../../../sources/charmbracelet__crush/docs/hooks/examples/rtk-rewrite.sh) |
| config | 1 | [go.mod](../../../../sources/charmbracelet__crush/go.mod) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 149 | [internal/workspace/client_workspace_test.go](../../../../sources/charmbracelet__crush/internal/workspace/client_workspace_test.go)<br>[internal/workspace/export_test.go](../../../../sources/charmbracelet__crush/internal/workspace/export_test.go)<br>[internal/workspace/multiclient_integration_test.go](../../../../sources/charmbracelet__crush/internal/workspace/multiclient_integration_test.go)<br>[internal/update/update_test.go](../../../../sources/charmbracelet__crush/internal/update/update_test.go)<br>[internal/ui/notification/notification_test.go](../../../../sources/charmbracelet__crush/internal/ui/notification/notification_test.go)<br>[internal/ui/model/chat_draw_cache_test.go](../../../../sources/charmbracelet__crush/internal/ui/model/chat_draw_cache_test.go) |
| CI workflow | 10 | [.github/workflows/build.yml](../../../../sources/charmbracelet__crush/.github/workflows/build.yml)<br>[.github/workflows/cla.yml](../../../../sources/charmbracelet__crush/.github/workflows/cla.yml)<br>[.github/workflows/labeler.yml](../../../../sources/charmbracelet__crush/.github/workflows/labeler.yml)<br>[.github/workflows/lint-sync.yml](../../../../sources/charmbracelet__crush/.github/workflows/lint-sync.yml)<br>[.github/workflows/lint.yml](../../../../sources/charmbracelet__crush/.github/workflows/lint.yml)<br>[.github/workflows/nightly.yml](../../../../sources/charmbracelet__crush/.github/workflows/nightly.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 17 | [internal/ui/model/permission_test.go](../../../../sources/charmbracelet__crush/internal/ui/model/permission_test.go)<br>[internal/ui/dialog/oauth_copilot.go](../../../../sources/charmbracelet__crush/internal/ui/dialog/oauth_copilot.go)<br>[internal/ui/dialog/oauth_hyper.go](../../../../sources/charmbracelet__crush/internal/ui/dialog/oauth_hyper.go)<br>[internal/ui/dialog/oauth.go](../../../../sources/charmbracelet__crush/internal/ui/dialog/oauth.go)<br>[internal/proto/permission_test.go](../../../../sources/charmbracelet__crush/internal/proto/permission_test.go)<br>[internal/proto/permission.go](../../../../sources/charmbracelet__crush/internal/proto/permission.go) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/charmbracelet__crush/AGENTS.md)<br>[internal/ui/AGENTS.md](../../../../sources/charmbracelet__crush/internal/ui/AGENTS.md)<br>[internal/cmd/stats/AGENTS.md](../../../../sources/charmbracelet__crush/internal/cmd/stats/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `internal/ui/model/mcp.go`, `internal/ui/chat/docker_mcp.go`, `internal/ui/chat/mcp_test.go`.
2. entrypoint를 따라 실행 흐름 확인: `main.go`, `internal/ui/logo/example/main.go`, `internal/server/server.go`.
3. agent/tool runtime 매핑: `AGENTS.md`, `internal/ui/AGENTS.md`, `internal/ui/model/skills_test.go`.
4. retrieval/memory/indexing 확인: `internal/skills/embed.go`, `internal/cmd/stats/index.css`, `internal/cmd/stats/index.html`.
5. test/eval 파일로 동작 검증: `internal/workspace/client_workspace_test.go`, `internal/workspace/export_test.go`, `internal/workspace/multiclient_integration_test.go`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Glamourous agentic coding for all 💘. 핵심 구조 신호는 Go, go.mod, README.md, AGENTS.md, openai, anthropic이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
