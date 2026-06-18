# barry-ran/QuickDesk Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

QuickDesk is the first AI-native remote desktop — an open-source, free application with a built-in MCP (Model Context Protocol) Server that lets any AI agent see and control remote computers.

## 요약

- 조사 단위: `sources/barry-ran__QuickDesk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 459 files, 104 directories, depth score 118, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=test/mcp/index.html, scripts/build_mcp_mac.sh, scripts/build_mcp_win.bat이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | barry-ran/QuickDesk |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | QML |
| Stars | 260 |
| Forks | 42 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/barry-ran__QuickDesk](../../../../sources/barry-ran__QuickDesk) |
| Existing report | [reports/global-trending/repositories/barry-ran__QuickDesk.md](../../../global-trending/repositories/barry-ran__QuickDesk.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 459 / 104 |
| Max observed depth | 5 |
| Top directories | .github, cmake, docs, examples, QuickDesk, quickdesk-mcp, quickdesk-skill-host, quickdesk-virtual-display, scripts, SignalingServer, test, WebClient |
| Top extensions | .go: 67, .qml: 66, .h: 51, .js: 49, .cpp: 43, .md: 27, .vue: 24, .rs: 18, .json: 15, .sh: 14, (none): 10, .bat: 9 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 27 |
| examples/mcp-configs | examples workspace | 17 |
| .github | ci surface | 1 |
| cmake | top-level component | 1 |
| examples | top-level component | 1 |
| QuickDesk | top-level component | 1 |
| quickdesk-mcp | top-level component | 1 |
| quickdesk-skill-host | top-level component | 1 |
| quickdesk-virtual-display | top-level component | 1 |
| scripts | top-level component | 1 |
| SignalingServer | source boundary | 1 |
| test | validation surface | 1 |
| WebClient | source boundary | 1 |


## How It Runs

_No command surface extracted from root manifests._


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
| mcp | [test/mcp/index.html](../../../../sources/barry-ran__QuickDesk/test/mcp/index.html) | mcp signal |
| mcp | [scripts/build_mcp_mac.sh](../../../../sources/barry-ran__QuickDesk/scripts/build_mcp_mac.sh) | mcp signal |
| mcp | [scripts/build_mcp_win.bat](../../../../sources/barry-ran__QuickDesk/scripts/build_mcp_win.bat) | mcp signal |
| mcp | [quickdesk-skill-host/mcp-server-common/Cargo.toml](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/mcp-server-common/Cargo.toml) | mcp signal |
| agentRuntime | [quickdesk-skill-host/skills/sys-info/Cargo.toml](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/sys-info/Cargo.toml) | agentRuntime signal |
| agentRuntime | [quickdesk-skill-host/skills/sys-info/SKILL.md](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/sys-info/SKILL.md) | agentRuntime signal |
| agentRuntime | [quickdesk-skill-host/skills/sys-info/src/main.rs](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/sys-info/src/main.rs) | agentRuntime signal |
| agentRuntime | [quickdesk-skill-host/skills/shell-runner/Cargo.toml](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/shell-runner/Cargo.toml) | agentRuntime signal |
| entrypoints | [WebClient/src/App.vue](../../../../sources/barry-ran__QuickDesk/WebClient/src/App.vue) | entrypoints signal |
| entrypoints | [WebClient/src/main.js](../../../../sources/barry-ran__QuickDesk/WebClient/src/main.js) | entrypoints signal |
| entrypoints | [SignalingServer/web/src/App.vue](../../../../sources/barry-ran__QuickDesk/SignalingServer/web/src/App.vue) | entrypoints signal |
| entrypoints | [SignalingServer/web/src/main.js](../../../../sources/barry-ran__QuickDesk/SignalingServer/web/src/main.js) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 11 | [WebClient/src/App.vue](../../../../sources/barry-ran__QuickDesk/WebClient/src/App.vue)<br>[WebClient/src/main.js](../../../../sources/barry-ran__QuickDesk/WebClient/src/main.js)<br>[SignalingServer/web/src/App.vue](../../../../sources/barry-ran__QuickDesk/SignalingServer/web/src/App.vue)<br>[SignalingServer/web/src/main.js](../../../../sources/barry-ran__QuickDesk/SignalingServer/web/src/main.js)<br>[SignalingServer/cmd/signaling/main.go](../../../../sources/barry-ran__QuickDesk/SignalingServer/cmd/signaling/main.go)<br>[quickdesk-skill-host/skills/sys-info/src/main.rs](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/sys-info/src/main.rs)<br>[quickdesk-skill-host/skills/shell-runner/src/main.rs](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/shell-runner/src/main.rs)<br>[quickdesk-skill-host/skills/file-ops/src/main.rs](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/file-ops/src/main.rs) |
| agentRuntime | 13 | [quickdesk-skill-host/skills/sys-info/Cargo.toml](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/sys-info/Cargo.toml)<br>[quickdesk-skill-host/skills/sys-info/SKILL.md](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/sys-info/SKILL.md)<br>[quickdesk-skill-host/skills/sys-info/src/main.rs](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/sys-info/src/main.rs)<br>[quickdesk-skill-host/skills/shell-runner/Cargo.toml](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/shell-runner/Cargo.toml)<br>[quickdesk-skill-host/skills/shell-runner/SKILL.md](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/shell-runner/SKILL.md)<br>[quickdesk-skill-host/skills/shell-runner/src/main.rs](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/shell-runner/src/main.rs)<br>[quickdesk-skill-host/skills/file-ops/Cargo.toml](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/file-ops/Cargo.toml)<br>[quickdesk-skill-host/skills/file-ops/SKILL.md](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/file-ops/SKILL.md) |
| mcp | 35 | [test/mcp/index.html](../../../../sources/barry-ran__QuickDesk/test/mcp/index.html)<br>[scripts/build_mcp_mac.sh](../../../../sources/barry-ran__QuickDesk/scripts/build_mcp_mac.sh)<br>[scripts/build_mcp_win.bat](../../../../sources/barry-ran__QuickDesk/scripts/build_mcp_win.bat)<br>[quickdesk-skill-host/mcp-server-common/Cargo.toml](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/mcp-server-common/Cargo.toml)<br>[quickdesk-skill-host/mcp-server-common/src/lib.rs](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/mcp-server-common/src/lib.rs)<br>[quickdesk-skill-host/host/src/mcp_client.rs](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/host/src/mcp_client.rs)<br>[quickdesk-mcp/build_log.txt](../../../../sources/barry-ran__QuickDesk/quickdesk-mcp/build_log.txt)<br>[quickdesk-mcp/Cargo.lock](../../../../sources/barry-ran__QuickDesk/quickdesk-mcp/Cargo.lock) |
| retrieval | 9 | [WebClient/index.html](../../../../sources/barry-ran__QuickDesk/WebClient/index.html)<br>[WebClient/src/router/index.js](../../../../sources/barry-ran__QuickDesk/WebClient/src/router/index.js)<br>[test/websocket/index.html](../../../../sources/barry-ran__QuickDesk/test/websocket/index.html)<br>[test/mcp/index.html](../../../../sources/barry-ran__QuickDesk/test/mcp/index.html)<br>[SignalingServer/web_embed.go](../../../../sources/barry-ran__QuickDesk/SignalingServer/web_embed.go)<br>[SignalingServer/web/index.html](../../../../sources/barry-ran__QuickDesk/SignalingServer/web/index.html)<br>[SignalingServer/web/src/router/index.js](../../../../sources/barry-ran__QuickDesk/SignalingServer/web/src/router/index.js)<br>[SignalingServer/web/src/i18n/index.js](../../../../sources/barry-ran__QuickDesk/SignalingServer/web/src/i18n/index.js) |
| spec | 0 | not obvious |
| eval | 3 | [test/websocket/index.html](../../../../sources/barry-ran__QuickDesk/test/websocket/index.html)<br>[test/mcp/index.html](../../../../sources/barry-ran__QuickDesk/test/mcp/index.html)<br>[quickdesk-virtual-display/driver/Trace.h](../../../../sources/barry-ran__QuickDesk/quickdesk-virtual-display/driver/Trace.h) |
| security | 14 | [WebClient/src/store/auth.js](../../../../sources/barry-ran__QuickDesk/WebClient/src/store/auth.js)<br>[WebClient/js/auth/auth-util.js](../../../../sources/barry-ran__QuickDesk/WebClient/js/auth/auth-util.js)<br>[WebClient/js/auth/spake2.js](../../../../sources/barry-ran__QuickDesk/WebClient/js/auth/spake2.js)<br>[SignalingServer/web/src/api/audit.js](../../../../sources/barry-ran__QuickDesk/SignalingServer/web/src/api/audit.js)<br>[SignalingServer/web/src/api/auth.js](../../../../sources/barry-ran__QuickDesk/SignalingServer/web/src/api/auth.js)<br>[SignalingServer/internal/service/audit_service.go](../../../../sources/barry-ran__QuickDesk/SignalingServer/internal/service/audit_service.go)<br>[SignalingServer/internal/service/device_secret_service.go](../../../../sources/barry-ran__QuickDesk/SignalingServer/internal/service/device_secret_service.go)<br>[SignalingServer/internal/models/audit_log.go](../../../../sources/barry-ran__QuickDesk/SignalingServer/internal/models/audit_log.go) |
| ci | 4 | [.github/workflows/docker-publish.yml](../../../../sources/barry-ran__QuickDesk/.github/workflows/docker-publish.yml)<br>[.github/workflows/quickdesk-macos.yml](../../../../sources/barry-ran__QuickDesk/.github/workflows/quickdesk-macos.yml)<br>[.github/workflows/quickdesk-vdd.yml](../../../../sources/barry-ran__QuickDesk/.github/workflows/quickdesk-vdd.yml)<br>[.github/workflows/quickdesk-windows.yml](../../../../sources/barry-ran__QuickDesk/.github/workflows/quickdesk-windows.yml) |
| container | 3 | [SignalingServer/docker-compose.build.yml](../../../../sources/barry-ran__QuickDesk/SignalingServer/docker-compose.build.yml)<br>[SignalingServer/docker-compose.yml](../../../../sources/barry-ran__QuickDesk/SignalingServer/docker-compose.yml)<br>[SignalingServer/Dockerfile](../../../../sources/barry-ran__QuickDesk/SignalingServer/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 30 | [README_zh.md](../../../../sources/barry-ran__QuickDesk/README_zh.md)<br>[README.md](../../../../sources/barry-ran__QuickDesk/README.md)<br>[SignalingServer/README.md](../../../../sources/barry-ran__QuickDesk/SignalingServer/README.md)<br>[SignalingServer/docs/user-api-docs.md](../../../../sources/barry-ran__QuickDesk/SignalingServer/docs/user-api-docs.md)<br>[quickdesk-virtual-display/prebuilt/x64/README.md](../../../../sources/barry-ran__QuickDesk/quickdesk-virtual-display/prebuilt/x64/README.md)<br>[QuickDesk/qml/component/README.md](../../../../sources/barry-ran__QuickDesk/QuickDesk/qml/component/README.md)<br>[examples/mcp-configs/README.md](../../../../sources/barry-ran__QuickDesk/examples/mcp-configs/README.md)<br>[docs/demo-scenarios.md](../../../../sources/barry-ran__QuickDesk/docs/demo-scenarios.md) |
| config | 12 | [WebClient/package.json](../../../../sources/barry-ran__QuickDesk/WebClient/package.json)<br>[SignalingServer/go.mod](../../../../sources/barry-ran__QuickDesk/SignalingServer/go.mod)<br>[SignalingServer/web/package.json](../../../../sources/barry-ran__QuickDesk/SignalingServer/web/package.json)<br>[quickdesk-skill-host/Cargo.lock](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/Cargo.lock)<br>[quickdesk-skill-host/Cargo.toml](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/Cargo.toml)<br>[quickdesk-skill-host/skills/sys-info/Cargo.toml](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/sys-info/Cargo.toml)<br>[quickdesk-skill-host/skills/shell-runner/Cargo.toml](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/shell-runner/Cargo.toml)<br>[quickdesk-skill-host/skills/file-ops/Cargo.toml](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/file-ops/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3 | [test/websocket/index.html](../../../../sources/barry-ran__QuickDesk/test/websocket/index.html)<br>[test/mcp/index.html](../../../../sources/barry-ran__QuickDesk/test/mcp/index.html)<br>[quickdesk-virtual-display/driver/Trace.h](../../../../sources/barry-ran__QuickDesk/quickdesk-virtual-display/driver/Trace.h) |
| CI workflows | 4 | [.github/workflows/docker-publish.yml](../../../../sources/barry-ran__QuickDesk/.github/workflows/docker-publish.yml)<br>[.github/workflows/quickdesk-macos.yml](../../../../sources/barry-ran__QuickDesk/.github/workflows/quickdesk-macos.yml)<br>[.github/workflows/quickdesk-vdd.yml](../../../../sources/barry-ran__QuickDesk/.github/workflows/quickdesk-vdd.yml)<br>[.github/workflows/quickdesk-windows.yml](../../../../sources/barry-ran__QuickDesk/.github/workflows/quickdesk-windows.yml) |
| Containers / deploy | 3 | [SignalingServer/docker-compose.build.yml](../../../../sources/barry-ran__QuickDesk/SignalingServer/docker-compose.build.yml)<br>[SignalingServer/docker-compose.yml](../../../../sources/barry-ran__QuickDesk/SignalingServer/docker-compose.yml)<br>[SignalingServer/Dockerfile](../../../../sources/barry-ran__QuickDesk/SignalingServer/Dockerfile) |
| Security / policy | 14 | [WebClient/src/store/auth.js](../../../../sources/barry-ran__QuickDesk/WebClient/src/store/auth.js)<br>[WebClient/js/auth/auth-util.js](../../../../sources/barry-ran__QuickDesk/WebClient/js/auth/auth-util.js)<br>[WebClient/js/auth/spake2.js](../../../../sources/barry-ran__QuickDesk/WebClient/js/auth/spake2.js)<br>[SignalingServer/web/src/api/audit.js](../../../../sources/barry-ran__QuickDesk/SignalingServer/web/src/api/audit.js)<br>[SignalingServer/web/src/api/auth.js](../../../../sources/barry-ran__QuickDesk/SignalingServer/web/src/api/auth.js)<br>[SignalingServer/internal/service/audit_service.go](../../../../sources/barry-ran__QuickDesk/SignalingServer/internal/service/audit_service.go) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `test/mcp/index.html`, `scripts/build_mcp_mac.sh`, `scripts/build_mcp_win.bat`.
2. Trace execution through entrypoints: `WebClient/src/App.vue`, `WebClient/src/main.js`, `SignalingServer/web/src/App.vue`.
3. Map agent/tool runtime through: `quickdesk-skill-host/skills/sys-info/Cargo.toml`, `quickdesk-skill-host/skills/sys-info/SKILL.md`, `quickdesk-skill-host/skills/sys-info/src/main.rs`.
4. Inspect retrieval/memory/indexing through: `WebClient/index.html`, `WebClient/src/router/index.js`, `test/websocket/index.html`.
5. Verify behavior through test/eval files: `test/websocket/index.html`, `test/mcp/index.html`, `quickdesk-virtual-display/driver/Trace.h`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 QuickDesk is the first AI native remote desktop — an open source, free application with a built in MCP Model Context Pro. 핵심 구조 신호는 QML, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
