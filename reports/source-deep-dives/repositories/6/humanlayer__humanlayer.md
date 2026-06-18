# humanlayer/humanlayer Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 794 files, 114 directories.

## 요약

- 조사 단위: `sources/humanlayer__humanlayer` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 794 files, 114 directories, depth score 137, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=hlyr/src/mcp.ts, hld/session/manager_mcp_socket_test.go, hld/mcp/server.go이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | humanlayer/humanlayer |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/humanlayer__humanlayer](../../../../sources/humanlayer__humanlayer) |
| Existing report | [reports/clone-structures/humanlayer__humanlayer.md](../../../clone-structures/humanlayer__humanlayer.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 794 / 114 |
| Max observed depth | 8 |
| Top directories | .claude, .github, apps, claudecode-go, docs, hack, hld, hlyr, humanlayer-wui, packages, scripts |
| Top extensions | .ts: 241, .tsx: 171, .go: 106, .md: 81, .png: 44, .json: 43, (none): 25, .sh: 16, .lock: 8, .yml: 8, .css: 7, .mdx: 4 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 30 |
| apps/react | apps workspace | 29 |
| apps/daemon | apps workspace | 10 |
| packages/contracts | packages workspace | 7 |
| packages/database | packages workspace | 7 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| claudecode-go | top-level component | 1 |
| hack | top-level component | 1 |
| hld | top-level component | 1 |
| hlyr | top-level component | 1 |
| humanlayer-wui | top-level component | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | turbo run build |
| serve-dev | package.json | dev | turbo run dev |
| quality | package.json | lint | turbo run lint |
| quality | package.json | format | prettier --write "**/*.{ts,tsx,md}" |
| quality | package.json | check-types | turbo run check-types |
| utility | package.json | db:generate |  |
| utility | package.json | db:migrate |  |
| utility | package.json | db:seed |  |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | setup | make setup |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | setup-ci | make setup-ci |
| utility | Makefile | ci-tools | make ci-tools |
| utility | Makefile | thoughts | make thoughts |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | worktree | make worktree |
| quality | Makefile | check-hlyr | make check-hlyr |
| quality | Makefile | check-wui | make check-wui |
| quality | Makefile | check-hld | make check-hld |
| quality | Makefile | check-claudecode-go | make check-claudecode-go |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | check-header | make check-header |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | check | make check |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test-hlyr | make test-hlyr |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test-hld | make test-hld |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [hlyr/src/mcp.ts](../../../../sources/humanlayer__humanlayer/hlyr/src/mcp.ts) | mcp signal |
| mcp | [hld/session/manager_mcp_socket_test.go](../../../../sources/humanlayer__humanlayer/hld/session/manager_mcp_socket_test.go) | mcp signal |
| mcp | [hld/mcp/server.go](../../../../sources/humanlayer__humanlayer/hld/mcp/server.go) | mcp signal |
| mcp | [hld/daemon/mcp_claudecode_integration_test.go](../../../../sources/humanlayer__humanlayer/hld/daemon/mcp_claudecode_integration_test.go) | mcp signal |
| agentRuntime | [humanlayer-wui/src/hooks/index.ts](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/hooks/index.ts) | agentRuntime signal |
| agentRuntime | [humanlayer-wui/src/hooks/useApprovals.ts](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/hooks/useApprovals.ts) | agentRuntime signal |
| agentRuntime | [humanlayer-wui/src/hooks/useAsyncState.ts](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/hooks/useAsyncState.ts) | agentRuntime signal |
| agentRuntime | [humanlayer-wui/src/hooks/useConversation.ts](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/hooks/useConversation.ts) | agentRuntime signal |
| entrypoints | [packages/contracts/src/index.ts](../../../../sources/humanlayer__humanlayer/packages/contracts/src/index.ts) | entrypoints signal |
| entrypoints | [humanlayer-wui/src-tauri/src/main.rs](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src-tauri/src/main.rs) | entrypoints signal |
| entrypoints | [humanlayer-wui/src/App.css](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/App.css) | entrypoints signal |
| entrypoints | [humanlayer-wui/src/main.tsx](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/main.tsx) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 39 | [packages/contracts/src/index.ts](../../../../sources/humanlayer__humanlayer/packages/contracts/src/index.ts)<br>[humanlayer-wui/src-tauri/src/main.rs](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src-tauri/src/main.rs)<br>[humanlayer-wui/src/App.css](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/App.css)<br>[humanlayer-wui/src/main.tsx](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/main.tsx)<br>[humanlayer-wui/.storybook/main.ts](../../../../sources/humanlayer__humanlayer/humanlayer-wui/.storybook/main.ts)<br>[hlyr/src/index.ts](../../../../sources/humanlayer__humanlayer/hlyr/src/index.ts)<br>[hld/sdk/typescript/src/index.ts](../../../../sources/humanlayer__humanlayer/hld/sdk/typescript/src/index.ts)<br>[hld/rpc/server.go](../../../../sources/humanlayer__humanlayer/hld/rpc/server.go) |
| agentRuntime | 38 | [humanlayer-wui/src/hooks/index.ts](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/hooks/index.ts)<br>[humanlayer-wui/src/hooks/useApprovals.ts](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/hooks/useApprovals.ts)<br>[humanlayer-wui/src/hooks/useAsyncState.ts](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/hooks/useAsyncState.ts)<br>[humanlayer-wui/src/hooks/useConversation.ts](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/hooks/useConversation.ts)<br>[humanlayer-wui/src/hooks/useDaemonConnection.ts](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/hooks/useDaemonConnection.ts)<br>[humanlayer-wui/src/hooks/useDebounce.ts](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/hooks/useDebounce.ts)<br>[humanlayer-wui/src/hooks/useFileBrowser.test.ts](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/hooks/useFileBrowser.test.ts)<br>[humanlayer-wui/src/hooks/useFileBrowser.ts](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/hooks/useFileBrowser.ts) |
| mcp | 9 | [hlyr/src/mcp.ts](../../../../sources/humanlayer__humanlayer/hlyr/src/mcp.ts)<br>[hld/session/manager_mcp_socket_test.go](../../../../sources/humanlayer__humanlayer/hld/session/manager_mcp_socket_test.go)<br>[hld/mcp/server.go](../../../../sources/humanlayer__humanlayer/hld/mcp/server.go)<br>[hld/daemon/mcp_claudecode_integration_test.go](../../../../sources/humanlayer__humanlayer/hld/daemon/mcp_claudecode_integration_test.go)<br>[hld/daemon/mcp_integration_test.go](../../../../sources/humanlayer__humanlayer/hld/daemon/mcp_integration_test.go)<br>[hld/daemon/mcp_phase4_integration_test.go](../../../../sources/humanlayer__humanlayer/hld/daemon/mcp_phase4_integration_test.go)<br>[hld/daemon/mcp_server_integration_test.go](../../../../sources/humanlayer__humanlayer/hld/daemon/mcp_server_integration_test.go)<br>[hld/daemon/mcp_session_header_test.go](../../../../sources/humanlayer__humanlayer/hld/daemon/mcp_session_header_test.go) |
| retrieval | 24 | [packages/database/index.ts](../../../../sources/humanlayer__humanlayer/packages/database/index.ts)<br>[packages/database/schema/index.ts](../../../../sources/humanlayer__humanlayer/packages/database/schema/index.ts)<br>[packages/contracts/src/index.ts](../../../../sources/humanlayer__humanlayer/packages/contracts/src/index.ts)<br>[packages/contracts/src/daemon/index.ts](../../../../sources/humanlayer__humanlayer/packages/contracts/src/daemon/index.ts)<br>[humanlayer-wui/index.html](../../../../sources/humanlayer__humanlayer/humanlayer-wui/index.html)<br>[humanlayer-wui/src/stores/index.ts](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/stores/index.ts)<br>[humanlayer-wui/src/stores/demo/export/index.tsx](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/stores/demo/export/index.tsx)<br>[humanlayer-wui/src/lib/daemon/index.ts](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/lib/daemon/index.ts) |
| spec | 2 | [humanlayer-wui/docs/ARCHITECTURE.md](../../../../sources/humanlayer__humanlayer/humanlayer-wui/docs/ARCHITECTURE.md)<br>[hack/spec_metadata.sh](../../../../sources/humanlayer__humanlayer/hack/spec_metadata.sh) |
| eval | 101 | [test-slash-commands.md](../../../../sources/humanlayer__humanlayer/test-slash-commands.md)<br>[scripts/test.ts](../../../../sources/humanlayer__humanlayer/scripts/test.ts)<br>[packages/database/scripts/test.ts](../../../../sources/humanlayer__humanlayer/packages/database/scripts/test.ts)<br>[humanlayer-wui/src/AppStore.archive.test.ts](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/AppStore.archive.test.ts)<br>[humanlayer-wui/src/AppStore.events.test.ts](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/AppStore.events.test.ts)<br>[humanlayer-wui/src/AppStore.sync.test.ts](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/AppStore.sync.test.ts)<br>[humanlayer-wui/src/AppStore.test.ts](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/AppStore.test.ts)<br>[humanlayer-wui/src/test-utils.ts](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/test-utils.ts) |
| security | 3 | [hld/session/permission_monitor_test.go](../../../../sources/humanlayer__humanlayer/hld/session/permission_monitor_test.go)<br>[hld/session/permission_monitor.go](../../../../sources/humanlayer__humanlayer/hld/session/permission_monitor.go)<br>[hld/daemon/daemon_permission_test.go](../../../../sources/humanlayer__humanlayer/hld/daemon/daemon_permission_test.go) |
| ci | 8 | [.github/workflows/claude-code-review.yml](../../../../sources/humanlayer__humanlayer/.github/workflows/claude-code-review.yml)<br>[.github/workflows/CLAUDE.md](../../../../sources/humanlayer__humanlayer/.github/workflows/CLAUDE.md)<br>[.github/workflows/claude.yml](../../../../sources/humanlayer__humanlayer/.github/workflows/claude.yml)<br>[.github/workflows/linear-create-plan.yml](../../../../sources/humanlayer__humanlayer/.github/workflows/linear-create-plan.yml)<br>[.github/workflows/linear-implement-plan.yml](../../../../sources/humanlayer__humanlayer/.github/workflows/linear-implement-plan.yml)<br>[.github/workflows/linear-research-tickets.yml](../../../../sources/humanlayer__humanlayer/.github/workflows/linear-research-tickets.yml)<br>[.github/workflows/main.yml](../../../../sources/humanlayer__humanlayer/.github/workflows/main.yml)<br>[.github/workflows/release-macos.yml](../../../../sources/humanlayer__humanlayer/.github/workflows/release-macos.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/humanlayer__humanlayer/docker-compose.yml)<br>[docs/Dockerfile](../../../../sources/humanlayer__humanlayer/docs/Dockerfile) |
| instruction | 9 | [CLAUDE.md](../../../../sources/humanlayer__humanlayer/CLAUDE.md)<br>[scripts/CLAUDE.md](../../../../sources/humanlayer__humanlayer/scripts/CLAUDE.md)<br>[packages/database/CLAUDE.md](../../../../sources/humanlayer__humanlayer/packages/database/CLAUDE.md)<br>[packages/contracts/CLAUDE.md](../../../../sources/humanlayer__humanlayer/packages/contracts/CLAUDE.md)<br>[humanlayer-wui/CLAUDE.md](../../../../sources/humanlayer__humanlayer/humanlayer-wui/CLAUDE.md)<br>[hld/CLAUDE.md](../../../../sources/humanlayer__humanlayer/hld/CLAUDE.md)<br>[apps/react/CLAUDE.md](../../../../sources/humanlayer__humanlayer/apps/react/CLAUDE.md)<br>[apps/daemon/CLAUDE.md](../../../../sources/humanlayer__humanlayer/apps/daemon/CLAUDE.md) |
| docs | 44 | [README.md](../../../../sources/humanlayer__humanlayer/README.md)<br>[scripts/README.md](../../../../sources/humanlayer__humanlayer/scripts/README.md)<br>[packages/database/README.md](../../../../sources/humanlayer__humanlayer/packages/database/README.md)<br>[packages/contracts/README.md](../../../../sources/humanlayer__humanlayer/packages/contracts/README.md)<br>[humanlayer-wui/README.md](../../../../sources/humanlayer__humanlayer/humanlayer-wui/README.md)<br>[humanlayer-wui/src/stores/demo/README.md](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/stores/demo/README.md)<br>[humanlayer-wui/docs/API.md](../../../../sources/humanlayer__humanlayer/humanlayer-wui/docs/API.md)<br>[humanlayer-wui/docs/ARCHITECTURE.md](../../../../sources/humanlayer__humanlayer/humanlayer-wui/docs/ARCHITECTURE.md) |
| config | 32 | [Makefile](../../../../sources/humanlayer__humanlayer/Makefile)<br>[package.json](../../../../sources/humanlayer__humanlayer/package.json)<br>[tsconfig.json](../../../../sources/humanlayer__humanlayer/tsconfig.json)<br>[turbo.json](../../../../sources/humanlayer__humanlayer/turbo.json)<br>[scripts/package.json](../../../../sources/humanlayer__humanlayer/scripts/package.json)<br>[scripts/tsconfig.json](../../../../sources/humanlayer__humanlayer/scripts/tsconfig.json)<br>[packages/database/package.json](../../../../sources/humanlayer__humanlayer/packages/database/package.json)<br>[packages/database/tsconfig.json](../../../../sources/humanlayer__humanlayer/packages/database/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 101 | [test-slash-commands.md](../../../../sources/humanlayer__humanlayer/test-slash-commands.md)<br>[scripts/test.ts](../../../../sources/humanlayer__humanlayer/scripts/test.ts)<br>[packages/database/scripts/test.ts](../../../../sources/humanlayer__humanlayer/packages/database/scripts/test.ts)<br>[humanlayer-wui/src/AppStore.archive.test.ts](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/AppStore.archive.test.ts)<br>[humanlayer-wui/src/AppStore.events.test.ts](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/AppStore.events.test.ts)<br>[humanlayer-wui/src/AppStore.sync.test.ts](../../../../sources/humanlayer__humanlayer/humanlayer-wui/src/AppStore.sync.test.ts) |
| CI workflows | 8 | [.github/workflows/claude-code-review.yml](../../../../sources/humanlayer__humanlayer/.github/workflows/claude-code-review.yml)<br>[.github/workflows/CLAUDE.md](../../../../sources/humanlayer__humanlayer/.github/workflows/CLAUDE.md)<br>[.github/workflows/claude.yml](../../../../sources/humanlayer__humanlayer/.github/workflows/claude.yml)<br>[.github/workflows/linear-create-plan.yml](../../../../sources/humanlayer__humanlayer/.github/workflows/linear-create-plan.yml)<br>[.github/workflows/linear-implement-plan.yml](../../../../sources/humanlayer__humanlayer/.github/workflows/linear-implement-plan.yml)<br>[.github/workflows/linear-research-tickets.yml](../../../../sources/humanlayer__humanlayer/.github/workflows/linear-research-tickets.yml) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/humanlayer__humanlayer/docker-compose.yml)<br>[docs/Dockerfile](../../../../sources/humanlayer__humanlayer/docs/Dockerfile) |
| Security / policy | 3 | [hld/session/permission_monitor_test.go](../../../../sources/humanlayer__humanlayer/hld/session/permission_monitor_test.go)<br>[hld/session/permission_monitor.go](../../../../sources/humanlayer__humanlayer/hld/session/permission_monitor.go)<br>[hld/daemon/daemon_permission_test.go](../../../../sources/humanlayer__humanlayer/hld/daemon/daemon_permission_test.go) |
| Agent instructions | 9 | [CLAUDE.md](../../../../sources/humanlayer__humanlayer/CLAUDE.md)<br>[scripts/CLAUDE.md](../../../../sources/humanlayer__humanlayer/scripts/CLAUDE.md)<br>[packages/database/CLAUDE.md](../../../../sources/humanlayer__humanlayer/packages/database/CLAUDE.md)<br>[packages/contracts/CLAUDE.md](../../../../sources/humanlayer__humanlayer/packages/contracts/CLAUDE.md)<br>[humanlayer-wui/CLAUDE.md](../../../../sources/humanlayer__humanlayer/humanlayer-wui/CLAUDE.md)<br>[hld/CLAUDE.md](../../../../sources/humanlayer__humanlayer/hld/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `hlyr/src/mcp.ts`, `hld/session/manager_mcp_socket_test.go`, `hld/mcp/server.go`.
2. Trace execution through entrypoints: `packages/contracts/src/index.ts`, `humanlayer-wui/src-tauri/src/main.rs`, `humanlayer-wui/src/App.css`.
3. Map agent/tool runtime through: `humanlayer-wui/src/hooks/index.ts`, `humanlayer-wui/src/hooks/useApprovals.ts`, `humanlayer-wui/src/hooks/useAsyncState.ts`.
4. Inspect retrieval/memory/indexing through: `packages/database/index.ts`, `packages/database/schema/index.ts`, `packages/contracts/src/index.ts`.
5. Verify behavior through test/eval files: `test-slash-commands.md`, `scripts/test.ts`, `packages/database/scripts/test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 794 files, 114 directories.. 핵심 구조 신호는 package.json, docker-compose.yml, Makefile, README.md, CLAUDE.md, tests이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
