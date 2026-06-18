# zhimaAi/ChatClaw Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

ChatClaw: Get OpenClaw-like knowledge base personal AI agent in 5 mins. Sandbox-secured, ultra-small 30MB installer for macOS & Windows (install in 1 min). Connects to WhatsApp, Telegram, Slack, Discord, Gmail, DingTalk, WeChat Work, QQ, Feishu. Built-in Skill Market, Knowledge Base, Memory, MCP, Scheduled Tasks. Developed in Go ,run

## 요약

- 조사 단위: `sources/zhimaAi__ChatClaw` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,027 files, 181 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=internal/sqlite/migrations/202603051000_add_mcp_settings.go, internal/sqlite/migrations/202603051100_create_mcp_servers.go, internal/sqlite/migrations/202603091000_add_agent_mcp_fields.go이고, 의존성 단서는 openai, anthropic, claude, gemini, mcp, ollama, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | zhimaAi/ChatClaw |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Go |
| Stars | 291 |
| Forks | 54 |
| License | GPL-3.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/zhimaAi__ChatClaw](../../../../sources/zhimaAi__ChatClaw) |
| Existing report | [reports/llm-wiki/repositories/zhimaAi__ChatClaw.md](../../../llm-wiki/repositories/zhimaAi__ChatClaw.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1027 / 181 |
| Max observed depth | 7 |
| Top directories | .cursor, docs, frontend, images, internal, pkg |
| Top extensions | .go: 385, .vue: 240, .ts: 110, .svg: 104, .png: 71, .md: 37, .json: 22, .py: 20, .mdc: 8, .html: 5, .m: 4, .js: 3 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 24 |
| frontend | top-level component | 1 |
| images | top-level component | 1 |
| internal | top-level component | 1 |
| pkg | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic, claude, gemini |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | ollama, llama |
| webRuntime | none |
| developerSurface | none |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [internal/sqlite/migrations/202603051000_add_mcp_settings.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202603051000_add_mcp_settings.go) | mcp signal |
| mcp | [internal/sqlite/migrations/202603051100_create_mcp_servers.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202603051100_create_mcp_servers.go) | mcp signal |
| mcp | [internal/sqlite/migrations/202603091000_add_agent_mcp_fields.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202603091000_add_agent_mcp_fields.go) | mcp signal |
| mcp | [internal/sqlite/migrations/202603091100_add_mcp_server_description.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202603091100_add_mcp_server_description.go) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/zhimaAi__ChatClaw/AGENTS.md) | agentRuntime signal |
| agentRuntime | [internal/tools/skillhub/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/skillhub/main.go) | agentRuntime signal |
| agentRuntime | [internal/tools/openclawbundle/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/openclawbundle/main.go) | agentRuntime signal |
| agentRuntime | [internal/tools/notempty/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/notempty/main.go) | agentRuntime signal |
| entrypoints | [main.go](../../../../sources/zhimaAi__ChatClaw/main.go) | entrypoints signal |
| instruction | [.cursor/rules/backend-architecture-and-conventions.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/backend-architecture-and-conventions.mdc) | instruction signal |
| instruction | [.cursor/rules/Chinese-reply.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/Chinese-reply.mdc) | instruction signal |
| instruction | [.cursor/rules/frontend-architecture-and-conventions.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/frontend-architecture-and-conventions.mdc) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 15 | [main.go](../../../../sources/zhimaAi__ChatClaw/main.go)<br>[internal/tools/skillhub/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/skillhub/main.go)<br>[internal/tools/openclawbundle/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/openclawbundle/main.go)<br>[internal/tools/notempty/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/notempty/main.go)<br>[internal/tools/mkdirp/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/mkdirp/main.go)<br>[internal/tools/fileexists/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/fileexists/main.go)<br>[internal/tools/clawhub/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/clawhub/main.go)<br>[internal/tools/archdetect/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/archdetect/main.go) |
| agentRuntime | 109 | [AGENTS.md](../../../../sources/zhimaAi__ChatClaw/AGENTS.md)<br>[internal/tools/skillhub/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/skillhub/main.go)<br>[internal/tools/openclawbundle/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/openclawbundle/main.go)<br>[internal/tools/notempty/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/notempty/main.go)<br>[internal/tools/mkdirp/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/mkdirp/main.go)<br>[internal/tools/fileexists/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/fileexists/main.go)<br>[internal/tools/clawhub/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/clawhub/main.go)<br>[internal/tools/archdetect/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/archdetect/main.go) |
| mcp | 22 | [internal/sqlite/migrations/202603051000_add_mcp_settings.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202603051000_add_mcp_settings.go)<br>[internal/sqlite/migrations/202603051100_create_mcp_servers.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202603051100_create_mcp_servers.go)<br>[internal/sqlite/migrations/202603091000_add_agent_mcp_fields.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202603091000_add_agent_mcp_fields.go)<br>[internal/sqlite/migrations/202603091100_add_mcp_server_description.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202603091100_add_mcp_server_description.go)<br>[internal/sqlite/migrations/202603101000_add_agent_mcp_server_enabled_ids.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202603101000_add_agent_mcp_server_enabled_ids.go)<br>[internal/sqlite/migrations/202603121000_create_assistant_mcp_tables.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202603121000_create_assistant_mcp_tables.go)<br>[internal/sqlite/migrations/202603171000_enable_mcp_by_default.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202603171000_enable_mcp_by_default.go)<br>[internal/services/mcp/service_nonwindows.go](../../../../sources/zhimaAi__ChatClaw/internal/services/mcp/service_nonwindows.go) |
| retrieval | 61 | [internal/sqlite/migrations/202602021700_add_embedding_settings.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202602021700_add_embedding_settings.go)<br>[internal/services/retrieval/service.go](../../../../sources/zhimaAi__ChatClaw/internal/services/retrieval/service.go)<br>[internal/services/memory/service.go](../../../../sources/zhimaAi__ChatClaw/internal/services/memory/service.go)<br>[internal/eino/embedding/batch.go](../../../../sources/zhimaAi__ChatClaw/internal/eino/embedding/batch.go)<br>[internal/eino/embedding/chatwiki_embedder.go](../../../../sources/zhimaAi__ChatClaw/internal/eino/embedding/chatwiki_embedder.go)<br>[internal/eino/embedding/factory.go](../../../../sources/zhimaAi__ChatClaw/internal/eino/embedding/factory.go)<br>[frontend/index.html](../../../../sources/zhimaAi__ChatClaw/frontend/index.html)<br>[frontend/src/stores/index.ts](../../../../sources/zhimaAi__ChatClaw/frontend/src/stores/index.ts) |
| spec | 6 | [internal/services/toolchain/spec_bun.go](../../../../sources/zhimaAi__ChatClaw/internal/services/toolchain/spec_bun.go)<br>[internal/services/toolchain/spec_codex.go](../../../../sources/zhimaAi__ChatClaw/internal/services/toolchain/spec_codex.go)<br>[internal/services/toolchain/spec_uv.go](../../../../sources/zhimaAi__ChatClaw/internal/services/toolchain/spec_uv.go)<br>[frontend/tests/e2e/model-provider.spec.ts](../../../../sources/zhimaAi__ChatClaw/frontend/tests/e2e/model-provider.spec.ts)<br>[.cursor/rules/backend-architecture-and-conventions.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/backend-architecture-and-conventions.mdc)<br>[.cursor/rules/frontend-architecture-and-conventions.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/frontend-architecture-and-conventions.mdc) |
| eval | 19 | [internal/services/toolchain/spec_bun.go](../../../../sources/zhimaAi__ChatClaw/internal/services/toolchain/spec_bun.go)<br>[internal/services/toolchain/spec_codex.go](../../../../sources/zhimaAi__ChatClaw/internal/services/toolchain/spec_codex.go)<br>[internal/services/toolchain/spec_uv.go](../../../../sources/zhimaAi__ChatClaw/internal/services/toolchain/spec_uv.go)<br>[internal/services/skillmarket/sync_test.go](../../../../sources/zhimaAi__ChatClaw/internal/services/skillmarket/sync_test.go)<br>[internal/services/settings/service_test.go](../../../../sources/zhimaAi__ChatClaw/internal/services/settings/service_test.go)<br>[internal/services/openclaw/channels/dingtalk_openclaw_test.go](../../../../sources/zhimaAi__ChatClaw/internal/services/openclaw/channels/dingtalk_openclaw_test.go)<br>[internal/services/openclaw/channels/wechat_openclaw_test.go](../../../../sources/zhimaAi__ChatClaw/internal/services/openclaw/channels/wechat_openclaw_test.go)<br>[internal/services/openclaw/channels/whatsapp_openclaw_test.go](../../../../sources/zhimaAi__ChatClaw/internal/services/openclaw/channels/whatsapp_openclaw_test.go) |
| security | 1 | [internal/sqlite/migrations/202603231300_migrate_sandbox_mode_to_openclaw.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202603231300_migrate_sandbox_mode_to_openclaw.go) |
| ci | 0 | not obvious |
| container | 1 | [docker-compose.yml](../../../../sources/zhimaAi__ChatClaw/docker-compose.yml) |
| instruction | 9 | [AGENTS.md](../../../../sources/zhimaAi__ChatClaw/AGENTS.md)<br>[.cursor/rules/backend-architecture-and-conventions.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/backend-architecture-and-conventions.mdc)<br>[.cursor/rules/Chinese-reply.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/Chinese-reply.mdc)<br>[.cursor/rules/frontend-architecture-and-conventions.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/frontend-architecture-and-conventions.mdc)<br>[.cursor/rules/frontend-locales-single-quotes.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/frontend-locales-single-quotes.mdc)<br>[.cursor/rules/karpathy-guidelines.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/karpathy-guidelines.mdc)<br>[.cursor/rules/think-docs-convention.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/think-docs-convention.mdc)<br>[.cursor/rules/ui-icons-and-toast-theme.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/ui-icons-and-toast-theme.mdc) |
| docs | 27 | [README.md](../../../../sources/zhimaAi__ChatClaw/README.md)<br>[pkg/webviewpanel/README.md](../../../../sources/zhimaAi__ChatClaw/pkg/webviewpanel/README.md)<br>[frontend/README.md](../../../../sources/zhimaAi__ChatClaw/frontend/README.md)<br>[docs/LOGO_ASSETS.md](../../../../sources/zhimaAi__ChatClaw/docs/LOGO_ASSETS.md)<br>[docs/mac-window-hierarchy-wake-logic.md](../../../../sources/zhimaAi__ChatClaw/docs/mac-window-hierarchy-wake-logic.md)<br>[docs/windows-focus-handling.md](../../../../sources/zhimaAi__ChatClaw/docs/windows-focus-handling.md)<br>[docs/windows-multi-monitor-popup-positioning.md](../../../../sources/zhimaAi__ChatClaw/docs/windows-multi-monitor-popup-positioning.md)<br>[docs/windows-syscall-callback-limit.md](../../../../sources/zhimaAi__ChatClaw/docs/windows-syscall-callback-limit.md) |
| config | 4 | [go.mod](../../../../sources/zhimaAi__ChatClaw/go.mod)<br>[frontend/package.json](../../../../sources/zhimaAi__ChatClaw/frontend/package.json)<br>[frontend/pnpm-workspace.yaml](../../../../sources/zhimaAi__ChatClaw/frontend/pnpm-workspace.yaml)<br>[frontend/tsconfig.json](../../../../sources/zhimaAi__ChatClaw/frontend/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 19 | [internal/services/toolchain/spec_bun.go](../../../../sources/zhimaAi__ChatClaw/internal/services/toolchain/spec_bun.go)<br>[internal/services/toolchain/spec_codex.go](../../../../sources/zhimaAi__ChatClaw/internal/services/toolchain/spec_codex.go)<br>[internal/services/toolchain/spec_uv.go](../../../../sources/zhimaAi__ChatClaw/internal/services/toolchain/spec_uv.go)<br>[internal/services/skillmarket/sync_test.go](../../../../sources/zhimaAi__ChatClaw/internal/services/skillmarket/sync_test.go)<br>[internal/services/settings/service_test.go](../../../../sources/zhimaAi__ChatClaw/internal/services/settings/service_test.go)<br>[internal/services/openclaw/channels/dingtalk_openclaw_test.go](../../../../sources/zhimaAi__ChatClaw/internal/services/openclaw/channels/dingtalk_openclaw_test.go) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 1 | [docker-compose.yml](../../../../sources/zhimaAi__ChatClaw/docker-compose.yml) |
| Security / policy | 1 | [internal/sqlite/migrations/202603231300_migrate_sandbox_mode_to_openclaw.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202603231300_migrate_sandbox_mode_to_openclaw.go) |
| Agent instructions | 9 | [AGENTS.md](../../../../sources/zhimaAi__ChatClaw/AGENTS.md)<br>[.cursor/rules/backend-architecture-and-conventions.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/backend-architecture-and-conventions.mdc)<br>[.cursor/rules/Chinese-reply.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/Chinese-reply.mdc)<br>[.cursor/rules/frontend-architecture-and-conventions.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/frontend-architecture-and-conventions.mdc)<br>[.cursor/rules/frontend-locales-single-quotes.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/frontend-locales-single-quotes.mdc)<br>[.cursor/rules/karpathy-guidelines.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/karpathy-guidelines.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `internal/sqlite/migrations/202603051000_add_mcp_settings.go`, `internal/sqlite/migrations/202603051100_create_mcp_servers.go`, `internal/sqlite/migrations/202603091000_add_agent_mcp_fields.go`.
2. Trace execution through entrypoints: `main.go`, `internal/tools/skillhub/main.go`, `internal/tools/openclawbundle/main.go`.
3. Map agent/tool runtime through: `AGENTS.md`, `internal/tools/skillhub/main.go`, `internal/tools/openclawbundle/main.go`.
4. Inspect retrieval/memory/indexing through: `internal/sqlite/migrations/202602021700_add_embedding_settings.go`, `internal/services/retrieval/service.go`, `internal/services/memory/service.go`.
5. Verify behavior through test/eval files: `internal/services/toolchain/spec_bun.go`, `internal/services/toolchain/spec_codex.go`, `internal/services/toolchain/spec_uv.go`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 ChatClaw Get OpenClaw like knowledge base personal AI agent in 5 mins. Sandbox secured, ultra small 30MB installer for m. 핵심 구조 신호는 Go, go.mod, docker-compose.yml, README.md, AGENTS.md, openai이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
