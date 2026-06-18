# charmbracelet/crush Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Glamourous agentic coding for all 💘

## 요약

- 조사 단위: `sources/charmbracelet__crush` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 949 files, 133 directories, depth score 118, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=internal/ui/model/mcp.go, internal/ui/chat/docker_mcp.go, internal/ui/chat/mcp_test.go이고, 의존성 단서는 openai, anthropic, modelcontextprotocol, cobra, chroma, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | charmbracelet/crush |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 25441 |
| Forks | 1835 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/charmbracelet__crush](../../../../sources/charmbracelet__crush) |
| Existing report | [reports/global-trending/repositories/charmbracelet__crush.md](../../../global-trending/repositories/charmbracelet__crush.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 949 / 133 |
| Max observed depth | 8 |
| Top directories | .agents, .github, docs, internal, scripts |
| Top extensions | .go: 461, .golden: 363, .md: 29, .yaml: 17, .tpl: 15, .yml: 14, .sql: 12, .after: 5, .before: 5, .json: 5, (none): 5, .sh: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 4 |
| .github | ci surface | 1 |
| internal | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | chroma |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | cobra |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [main.go](../../../../sources/charmbracelet__crush/main.go)<br>[internal/ui/logo/example/main.go](../../../../sources/charmbracelet__crush/internal/ui/logo/example/main.go)<br>[internal/server/server.go](../../../../sources/charmbracelet__crush/internal/server/server.go)<br>[internal/proto/server.go](../../../../sources/charmbracelet__crush/internal/proto/server.go)<br>[internal/cmd/server.go](../../../../sources/charmbracelet__crush/internal/cmd/server.go) |
| agentRuntime | 158 | [AGENTS.md](../../../../sources/charmbracelet__crush/AGENTS.md)<br>[internal/ui/AGENTS.md](../../../../sources/charmbracelet__crush/internal/ui/AGENTS.md)<br>[internal/ui/model/skills_test.go](../../../../sources/charmbracelet__crush/internal/ui/model/skills_test.go)<br>[internal/ui/model/skills.go](../../../../sources/charmbracelet__crush/internal/ui/model/skills.go)<br>[internal/ui/chat/agent.go](../../../../sources/charmbracelet__crush/internal/ui/chat/agent.go)<br>[internal/ui/chat/tool_result_content_test.go](../../../../sources/charmbracelet__crush/internal/ui/chat/tool_result_content_test.go)<br>[internal/ui/chat/tool_result_content.go](../../../../sources/charmbracelet__crush/internal/ui/chat/tool_result_content.go)<br>[internal/ui/chat/tools.go](../../../../sources/charmbracelet__crush/internal/ui/chat/tools.go) |
| mcp | 19 | [internal/ui/model/mcp.go](../../../../sources/charmbracelet__crush/internal/ui/model/mcp.go)<br>[internal/ui/chat/docker_mcp.go](../../../../sources/charmbracelet__crush/internal/ui/chat/docker_mcp.go)<br>[internal/ui/chat/mcp_test.go](../../../../sources/charmbracelet__crush/internal/ui/chat/mcp_test.go)<br>[internal/ui/chat/mcp.go](../../../../sources/charmbracelet__crush/internal/ui/chat/mcp.go)<br>[internal/proto/mcp.go](../../../../sources/charmbracelet__crush/internal/proto/mcp.go)<br>[internal/config/docker_mcp_test.go](../../../../sources/charmbracelet__crush/internal/config/docker_mcp_test.go)<br>[internal/config/docker_mcp.go](../../../../sources/charmbracelet__crush/internal/config/docker_mcp.go)<br>[internal/config/mcp_resolved_url_test.go](../../../../sources/charmbracelet__crush/internal/config/mcp_resolved_url_test.go) |
| retrieval | 4 | [internal/skills/embed.go](../../../../sources/charmbracelet__crush/internal/skills/embed.go)<br>[internal/cmd/stats/index.css](../../../../sources/charmbracelet__crush/internal/cmd/stats/index.css)<br>[internal/cmd/stats/index.html](../../../../sources/charmbracelet__crush/internal/cmd/stats/index.html)<br>[internal/cmd/stats/index.js](../../../../sources/charmbracelet__crush/internal/cmd/stats/index.js) |
| spec | 0 | not obvious |
| eval | 149 | [internal/workspace/client_workspace_test.go](../../../../sources/charmbracelet__crush/internal/workspace/client_workspace_test.go)<br>[internal/workspace/export_test.go](../../../../sources/charmbracelet__crush/internal/workspace/export_test.go)<br>[internal/workspace/multiclient_integration_test.go](../../../../sources/charmbracelet__crush/internal/workspace/multiclient_integration_test.go)<br>[internal/update/update_test.go](../../../../sources/charmbracelet__crush/internal/update/update_test.go)<br>[internal/ui/notification/notification_test.go](../../../../sources/charmbracelet__crush/internal/ui/notification/notification_test.go)<br>[internal/ui/model/chat_draw_cache_test.go](../../../../sources/charmbracelet__crush/internal/ui/model/chat_draw_cache_test.go)<br>[internal/ui/model/chat_expand_test.go](../../../../sources/charmbracelet__crush/internal/ui/model/chat_expand_test.go)<br>[internal/ui/model/filter_test.go](../../../../sources/charmbracelet__crush/internal/ui/model/filter_test.go) |
| security | 17 | [internal/ui/model/permission_test.go](../../../../sources/charmbracelet__crush/internal/ui/model/permission_test.go)<br>[internal/ui/dialog/oauth_copilot.go](../../../../sources/charmbracelet__crush/internal/ui/dialog/oauth_copilot.go)<br>[internal/ui/dialog/oauth_hyper.go](../../../../sources/charmbracelet__crush/internal/ui/dialog/oauth_hyper.go)<br>[internal/ui/dialog/oauth.go](../../../../sources/charmbracelet__crush/internal/ui/dialog/oauth.go)<br>[internal/proto/permission_test.go](../../../../sources/charmbracelet__crush/internal/proto/permission_test.go)<br>[internal/proto/permission.go](../../../../sources/charmbracelet__crush/internal/proto/permission.go)<br>[internal/permission/permission_test.go](../../../../sources/charmbracelet__crush/internal/permission/permission_test.go)<br>[internal/permission/permission.go](../../../../sources/charmbracelet__crush/internal/permission/permission.go) |
| ci | 10 | [.github/workflows/build.yml](../../../../sources/charmbracelet__crush/.github/workflows/build.yml)<br>[.github/workflows/cla.yml](../../../../sources/charmbracelet__crush/.github/workflows/cla.yml)<br>[.github/workflows/labeler.yml](../../../../sources/charmbracelet__crush/.github/workflows/labeler.yml)<br>[.github/workflows/lint-sync.yml](../../../../sources/charmbracelet__crush/.github/workflows/lint-sync.yml)<br>[.github/workflows/lint.yml](../../../../sources/charmbracelet__crush/.github/workflows/lint.yml)<br>[.github/workflows/nightly.yml](../../../../sources/charmbracelet__crush/.github/workflows/nightly.yml)<br>[.github/workflows/release.yml](../../../../sources/charmbracelet__crush/.github/workflows/release.yml)<br>[.github/workflows/schema-update.yml](../../../../sources/charmbracelet__crush/.github/workflows/schema-update.yml) |
| container | 0 | not obvious |
| instruction | 3 | [AGENTS.md](../../../../sources/charmbracelet__crush/AGENTS.md)<br>[internal/ui/AGENTS.md](../../../../sources/charmbracelet__crush/internal/ui/AGENTS.md)<br>[internal/cmd/stats/AGENTS.md](../../../../sources/charmbracelet__crush/internal/cmd/stats/AGENTS.md) |
| docs | 4 | [README.md](../../../../sources/charmbracelet__crush/README.md)<br>[docs/hooks/FUTURE.md](../../../../sources/charmbracelet__crush/docs/hooks/FUTURE.md)<br>[docs/hooks/README.md](../../../../sources/charmbracelet__crush/docs/hooks/README.md)<br>[docs/hooks/examples/rtk-rewrite.sh](../../../../sources/charmbracelet__crush/docs/hooks/examples/rtk-rewrite.sh) |
| config | 1 | [go.mod](../../../../sources/charmbracelet__crush/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 149 | [internal/workspace/client_workspace_test.go](../../../../sources/charmbracelet__crush/internal/workspace/client_workspace_test.go)<br>[internal/workspace/export_test.go](../../../../sources/charmbracelet__crush/internal/workspace/export_test.go)<br>[internal/workspace/multiclient_integration_test.go](../../../../sources/charmbracelet__crush/internal/workspace/multiclient_integration_test.go)<br>[internal/update/update_test.go](../../../../sources/charmbracelet__crush/internal/update/update_test.go)<br>[internal/ui/notification/notification_test.go](../../../../sources/charmbracelet__crush/internal/ui/notification/notification_test.go)<br>[internal/ui/model/chat_draw_cache_test.go](../../../../sources/charmbracelet__crush/internal/ui/model/chat_draw_cache_test.go) |
| CI workflows | 10 | [.github/workflows/build.yml](../../../../sources/charmbracelet__crush/.github/workflows/build.yml)<br>[.github/workflows/cla.yml](../../../../sources/charmbracelet__crush/.github/workflows/cla.yml)<br>[.github/workflows/labeler.yml](../../../../sources/charmbracelet__crush/.github/workflows/labeler.yml)<br>[.github/workflows/lint-sync.yml](../../../../sources/charmbracelet__crush/.github/workflows/lint-sync.yml)<br>[.github/workflows/lint.yml](../../../../sources/charmbracelet__crush/.github/workflows/lint.yml)<br>[.github/workflows/nightly.yml](../../../../sources/charmbracelet__crush/.github/workflows/nightly.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 17 | [internal/ui/model/permission_test.go](../../../../sources/charmbracelet__crush/internal/ui/model/permission_test.go)<br>[internal/ui/dialog/oauth_copilot.go](../../../../sources/charmbracelet__crush/internal/ui/dialog/oauth_copilot.go)<br>[internal/ui/dialog/oauth_hyper.go](../../../../sources/charmbracelet__crush/internal/ui/dialog/oauth_hyper.go)<br>[internal/ui/dialog/oauth.go](../../../../sources/charmbracelet__crush/internal/ui/dialog/oauth.go)<br>[internal/proto/permission_test.go](../../../../sources/charmbracelet__crush/internal/proto/permission_test.go)<br>[internal/proto/permission.go](../../../../sources/charmbracelet__crush/internal/proto/permission.go) |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/charmbracelet__crush/AGENTS.md)<br>[internal/ui/AGENTS.md](../../../../sources/charmbracelet__crush/internal/ui/AGENTS.md)<br>[internal/cmd/stats/AGENTS.md](../../../../sources/charmbracelet__crush/internal/cmd/stats/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `internal/ui/model/mcp.go`, `internal/ui/chat/docker_mcp.go`, `internal/ui/chat/mcp_test.go`.
2. Trace execution through entrypoints: `main.go`, `internal/ui/logo/example/main.go`, `internal/server/server.go`.
3. Map agent/tool runtime through: `AGENTS.md`, `internal/ui/AGENTS.md`, `internal/ui/model/skills_test.go`.
4. Inspect retrieval/memory/indexing through: `internal/skills/embed.go`, `internal/cmd/stats/index.css`, `internal/cmd/stats/index.html`.
5. Verify behavior through test/eval files: `internal/workspace/client_workspace_test.go`, `internal/workspace/export_test.go`, `internal/workspace/multiclient_integration_test.go`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Glamourous agentic coding for all 💘. 핵심 구조 신호는 Go, go.mod, README.md, AGENTS.md, openai, anthropic이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
