# zhimaAi/ChatClaw 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

ChatClaw: Get OpenClaw-like knowledge base personal AI agent in 5 mins. Sandbox-secured, ultra-small 30MB installer for macOS & Windows (install in 1 min). Connects to WhatsApp, Telegram, Slack, Discord, Gmail, DingTalk, WeChat Work, QQ, Feishu. Built-in Skill Market, Knowledge Base, Memory, MCP, Scheduled Tasks. Developed in Go ,run

## 요약

- 조사 단위: `sources/zhimaAi__ChatClaw` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,027 files, 181 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=internal/sqlite/migrations/202603051000_add_mcp_settings.go, internal/sqlite/migrations/202603051100_create_mcp_servers.go, internal/sqlite/migrations/202603091000_add_agent_mcp_fields.go이고, 의존성 단서는 openai, anthropic, claude, gemini, mcp, ollama, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | zhimaAi/ChatClaw |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Go |
| Stars | 291 |
| Forks | 54 |
| License | GPL-3.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/zhimaAi__ChatClaw](../../../../sources/zhimaAi__ChatClaw) |
| 기존 보고서 | [reports/llm-wiki/repositories/zhimaAi__ChatClaw.md](../../../llm-wiki/repositories/zhimaAi__ChatClaw.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1027 / 181 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .cursor, docs, frontend, images, internal, pkg |
| 상위 확장자 | .go: 385, .vue: 240, .ts: 110, .svg: 104, .png: 71, .md: 37, .json: 22, .py: 20, .mdc: 8, .html: 5, .m: 4, .js: 3 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 24 |
| frontend | top-level component | 1 |
| images | top-level component | 1 |
| internal | top-level component | 1 |
| pkg | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic, claude, gemini |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | ollama, llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 15 | [main.go](../../../../sources/zhimaAi__ChatClaw/main.go)<br>[internal/tools/skillhub/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/skillhub/main.go)<br>[internal/tools/openclawbundle/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/openclawbundle/main.go)<br>[internal/tools/notempty/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/notempty/main.go)<br>[internal/tools/mkdirp/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/mkdirp/main.go)<br>[internal/tools/fileexists/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/fileexists/main.go)<br>[internal/tools/clawhub/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/clawhub/main.go)<br>[internal/tools/archdetect/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/archdetect/main.go) |
| agentRuntime | 109 | [AGENTS.md](../../../../sources/zhimaAi__ChatClaw/AGENTS.md)<br>[internal/tools/skillhub/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/skillhub/main.go)<br>[internal/tools/openclawbundle/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/openclawbundle/main.go)<br>[internal/tools/notempty/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/notempty/main.go)<br>[internal/tools/mkdirp/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/mkdirp/main.go)<br>[internal/tools/fileexists/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/fileexists/main.go)<br>[internal/tools/clawhub/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/clawhub/main.go)<br>[internal/tools/archdetect/main.go](../../../../sources/zhimaAi__ChatClaw/internal/tools/archdetect/main.go) |
| mcp | 22 | [internal/sqlite/migrations/202603051000_add_mcp_settings.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202603051000_add_mcp_settings.go)<br>[internal/sqlite/migrations/202603051100_create_mcp_servers.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202603051100_create_mcp_servers.go)<br>[internal/sqlite/migrations/202603091000_add_agent_mcp_fields.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202603091000_add_agent_mcp_fields.go)<br>[internal/sqlite/migrations/202603091100_add_mcp_server_description.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202603091100_add_mcp_server_description.go)<br>[internal/sqlite/migrations/202603101000_add_agent_mcp_server_enabled_ids.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202603101000_add_agent_mcp_server_enabled_ids.go)<br>[internal/sqlite/migrations/202603121000_create_assistant_mcp_tables.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202603121000_create_assistant_mcp_tables.go)<br>[internal/sqlite/migrations/202603171000_enable_mcp_by_default.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202603171000_enable_mcp_by_default.go)<br>[internal/services/mcp/service_nonwindows.go](../../../../sources/zhimaAi__ChatClaw/internal/services/mcp/service_nonwindows.go) |
| retrieval | 61 | [internal/sqlite/migrations/202602021700_add_embedding_settings.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202602021700_add_embedding_settings.go)<br>[internal/services/retrieval/service.go](../../../../sources/zhimaAi__ChatClaw/internal/services/retrieval/service.go)<br>[internal/services/memory/service.go](../../../../sources/zhimaAi__ChatClaw/internal/services/memory/service.go)<br>[internal/eino/embedding/batch.go](../../../../sources/zhimaAi__ChatClaw/internal/eino/embedding/batch.go)<br>[internal/eino/embedding/chatwiki_embedder.go](../../../../sources/zhimaAi__ChatClaw/internal/eino/embedding/chatwiki_embedder.go)<br>[internal/eino/embedding/factory.go](../../../../sources/zhimaAi__ChatClaw/internal/eino/embedding/factory.go)<br>[frontend/index.html](../../../../sources/zhimaAi__ChatClaw/frontend/index.html)<br>[frontend/src/stores/index.ts](../../../../sources/zhimaAi__ChatClaw/frontend/src/stores/index.ts) |
| spec | 6 | [internal/services/toolchain/spec_bun.go](../../../../sources/zhimaAi__ChatClaw/internal/services/toolchain/spec_bun.go)<br>[internal/services/toolchain/spec_codex.go](../../../../sources/zhimaAi__ChatClaw/internal/services/toolchain/spec_codex.go)<br>[internal/services/toolchain/spec_uv.go](../../../../sources/zhimaAi__ChatClaw/internal/services/toolchain/spec_uv.go)<br>[frontend/tests/e2e/model-provider.spec.ts](../../../../sources/zhimaAi__ChatClaw/frontend/tests/e2e/model-provider.spec.ts)<br>[.cursor/rules/backend-architecture-and-conventions.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/backend-architecture-and-conventions.mdc)<br>[.cursor/rules/frontend-architecture-and-conventions.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/frontend-architecture-and-conventions.mdc) |
| eval | 19 | [internal/services/toolchain/spec_bun.go](../../../../sources/zhimaAi__ChatClaw/internal/services/toolchain/spec_bun.go)<br>[internal/services/toolchain/spec_codex.go](../../../../sources/zhimaAi__ChatClaw/internal/services/toolchain/spec_codex.go)<br>[internal/services/toolchain/spec_uv.go](../../../../sources/zhimaAi__ChatClaw/internal/services/toolchain/spec_uv.go)<br>[internal/services/skillmarket/sync_test.go](../../../../sources/zhimaAi__ChatClaw/internal/services/skillmarket/sync_test.go)<br>[internal/services/settings/service_test.go](../../../../sources/zhimaAi__ChatClaw/internal/services/settings/service_test.go)<br>[internal/services/openclaw/channels/dingtalk_openclaw_test.go](../../../../sources/zhimaAi__ChatClaw/internal/services/openclaw/channels/dingtalk_openclaw_test.go)<br>[internal/services/openclaw/channels/wechat_openclaw_test.go](../../../../sources/zhimaAi__ChatClaw/internal/services/openclaw/channels/wechat_openclaw_test.go)<br>[internal/services/openclaw/channels/whatsapp_openclaw_test.go](../../../../sources/zhimaAi__ChatClaw/internal/services/openclaw/channels/whatsapp_openclaw_test.go) |
| security | 1 | [internal/sqlite/migrations/202603231300_migrate_sandbox_mode_to_openclaw.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202603231300_migrate_sandbox_mode_to_openclaw.go) |
| ci | 0 | 명확하지 않음 |
| container | 1 | [docker-compose.yml](../../../../sources/zhimaAi__ChatClaw/docker-compose.yml) |
| instruction | 9 | [AGENTS.md](../../../../sources/zhimaAi__ChatClaw/AGENTS.md)<br>[.cursor/rules/backend-architecture-and-conventions.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/backend-architecture-and-conventions.mdc)<br>[.cursor/rules/Chinese-reply.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/Chinese-reply.mdc)<br>[.cursor/rules/frontend-architecture-and-conventions.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/frontend-architecture-and-conventions.mdc)<br>[.cursor/rules/frontend-locales-single-quotes.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/frontend-locales-single-quotes.mdc)<br>[.cursor/rules/karpathy-guidelines.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/karpathy-guidelines.mdc)<br>[.cursor/rules/think-docs-convention.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/think-docs-convention.mdc)<br>[.cursor/rules/ui-icons-and-toast-theme.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/ui-icons-and-toast-theme.mdc) |
| docs | 27 | [README.md](../../../../sources/zhimaAi__ChatClaw/README.md)<br>[pkg/webviewpanel/README.md](../../../../sources/zhimaAi__ChatClaw/pkg/webviewpanel/README.md)<br>[frontend/README.md](../../../../sources/zhimaAi__ChatClaw/frontend/README.md)<br>[docs/LOGO_ASSETS.md](../../../../sources/zhimaAi__ChatClaw/docs/LOGO_ASSETS.md)<br>[docs/mac-window-hierarchy-wake-logic.md](../../../../sources/zhimaAi__ChatClaw/docs/mac-window-hierarchy-wake-logic.md)<br>[docs/windows-focus-handling.md](../../../../sources/zhimaAi__ChatClaw/docs/windows-focus-handling.md)<br>[docs/windows-multi-monitor-popup-positioning.md](../../../../sources/zhimaAi__ChatClaw/docs/windows-multi-monitor-popup-positioning.md)<br>[docs/windows-syscall-callback-limit.md](../../../../sources/zhimaAi__ChatClaw/docs/windows-syscall-callback-limit.md) |
| config | 4 | [go.mod](../../../../sources/zhimaAi__ChatClaw/go.mod)<br>[frontend/package.json](../../../../sources/zhimaAi__ChatClaw/frontend/package.json)<br>[frontend/pnpm-workspace.yaml](../../../../sources/zhimaAi__ChatClaw/frontend/pnpm-workspace.yaml)<br>[frontend/tsconfig.json](../../../../sources/zhimaAi__ChatClaw/frontend/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 19 | [internal/services/toolchain/spec_bun.go](../../../../sources/zhimaAi__ChatClaw/internal/services/toolchain/spec_bun.go)<br>[internal/services/toolchain/spec_codex.go](../../../../sources/zhimaAi__ChatClaw/internal/services/toolchain/spec_codex.go)<br>[internal/services/toolchain/spec_uv.go](../../../../sources/zhimaAi__ChatClaw/internal/services/toolchain/spec_uv.go)<br>[internal/services/skillmarket/sync_test.go](../../../../sources/zhimaAi__ChatClaw/internal/services/skillmarket/sync_test.go)<br>[internal/services/settings/service_test.go](../../../../sources/zhimaAi__ChatClaw/internal/services/settings/service_test.go)<br>[internal/services/openclaw/channels/dingtalk_openclaw_test.go](../../../../sources/zhimaAi__ChatClaw/internal/services/openclaw/channels/dingtalk_openclaw_test.go) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 1 | [docker-compose.yml](../../../../sources/zhimaAi__ChatClaw/docker-compose.yml) |
| 보안/정책 | 1 | [internal/sqlite/migrations/202603231300_migrate_sandbox_mode_to_openclaw.go](../../../../sources/zhimaAi__ChatClaw/internal/sqlite/migrations/202603231300_migrate_sandbox_mode_to_openclaw.go) |
| 에이전트 지시문 | 9 | [AGENTS.md](../../../../sources/zhimaAi__ChatClaw/AGENTS.md)<br>[.cursor/rules/backend-architecture-and-conventions.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/backend-architecture-and-conventions.mdc)<br>[.cursor/rules/Chinese-reply.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/Chinese-reply.mdc)<br>[.cursor/rules/frontend-architecture-and-conventions.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/frontend-architecture-and-conventions.mdc)<br>[.cursor/rules/frontend-locales-single-quotes.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/frontend-locales-single-quotes.mdc)<br>[.cursor/rules/karpathy-guidelines.mdc](../../../../sources/zhimaAi__ChatClaw/.cursor/rules/karpathy-guidelines.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `internal/sqlite/migrations/202603051000_add_mcp_settings.go`, `internal/sqlite/migrations/202603051100_create_mcp_servers.go`, `internal/sqlite/migrations/202603091000_add_agent_mcp_fields.go`.
2. entrypoint를 따라 실행 흐름 확인: `main.go`, `internal/tools/skillhub/main.go`, `internal/tools/openclawbundle/main.go`.
3. agent/tool runtime 매핑: `AGENTS.md`, `internal/tools/skillhub/main.go`, `internal/tools/openclawbundle/main.go`.
4. retrieval/memory/indexing 확인: `internal/sqlite/migrations/202602021700_add_embedding_settings.go`, `internal/services/retrieval/service.go`, `internal/services/memory/service.go`.
5. test/eval 파일로 동작 검증: `internal/services/toolchain/spec_bun.go`, `internal/services/toolchain/spec_codex.go`, `internal/services/toolchain/spec_uv.go`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 ChatClaw Get OpenClaw like knowledge base personal AI agent in 5 mins. Sandbox secured, ultra small 30MB installer for m. 핵심 구조 신호는 Go, go.mod, docker-compose.yml, README.md, AGENTS.md, openai이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
