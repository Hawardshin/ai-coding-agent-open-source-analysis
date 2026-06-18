# barry-ran/QuickDesk 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

QuickDesk is the first AI-native remote desktop — an open-source, free application with a built-in MCP (Model Context Protocol) Server that lets any AI agent see and control remote computers.

## 요약

- 조사 단위: `sources/barry-ran__QuickDesk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 459 files, 104 directories, depth score 112, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=test/mcp/index.html, scripts/build_mcp_mac.sh, scripts/build_mcp_win.bat이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | barry-ran/QuickDesk |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | QML |
| Stars | 260 |
| Forks | 42 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/barry-ran__QuickDesk](../../../../sources/barry-ran__QuickDesk) |
| 기존 보고서 | [reports/global-trending/repositories/barry-ran__QuickDesk.md](../../../global-trending/repositories/barry-ran__QuickDesk.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 459 / 104 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, cmake, docs, examples, QuickDesk, quickdesk-mcp, quickdesk-skill-host, quickdesk-virtual-display, scripts, SignalingServer, test, WebClient |
| 상위 확장자 | .go: 67, .qml: 66, .h: 51, .js: 49, .cpp: 43, .md: 27, .vue: 24, .rs: 18, .json: 15, .sh: 14, (none): 10, .bat: 9 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 11 | [WebClient/src/App.vue](../../../../sources/barry-ran__QuickDesk/WebClient/src/App.vue)<br>[WebClient/src/main.js](../../../../sources/barry-ran__QuickDesk/WebClient/src/main.js)<br>[SignalingServer/web/src/App.vue](../../../../sources/barry-ran__QuickDesk/SignalingServer/web/src/App.vue)<br>[SignalingServer/web/src/main.js](../../../../sources/barry-ran__QuickDesk/SignalingServer/web/src/main.js)<br>[SignalingServer/cmd/signaling/main.go](../../../../sources/barry-ran__QuickDesk/SignalingServer/cmd/signaling/main.go)<br>[quickdesk-skill-host/skills/sys-info/src/main.rs](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/sys-info/src/main.rs)<br>[quickdesk-skill-host/skills/shell-runner/src/main.rs](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/shell-runner/src/main.rs)<br>[quickdesk-skill-host/skills/file-ops/src/main.rs](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/file-ops/src/main.rs) |
| agentRuntime | 13 | [quickdesk-skill-host/skills/sys-info/Cargo.toml](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/sys-info/Cargo.toml)<br>[quickdesk-skill-host/skills/sys-info/SKILL.md](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/sys-info/SKILL.md)<br>[quickdesk-skill-host/skills/sys-info/src/main.rs](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/sys-info/src/main.rs)<br>[quickdesk-skill-host/skills/shell-runner/Cargo.toml](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/shell-runner/Cargo.toml)<br>[quickdesk-skill-host/skills/shell-runner/SKILL.md](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/shell-runner/SKILL.md)<br>[quickdesk-skill-host/skills/shell-runner/src/main.rs](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/shell-runner/src/main.rs)<br>[quickdesk-skill-host/skills/file-ops/Cargo.toml](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/file-ops/Cargo.toml)<br>[quickdesk-skill-host/skills/file-ops/SKILL.md](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/file-ops/SKILL.md) |
| mcp | 35 | [test/mcp/index.html](../../../../sources/barry-ran__QuickDesk/test/mcp/index.html)<br>[scripts/build_mcp_mac.sh](../../../../sources/barry-ran__QuickDesk/scripts/build_mcp_mac.sh)<br>[scripts/build_mcp_win.bat](../../../../sources/barry-ran__QuickDesk/scripts/build_mcp_win.bat)<br>[quickdesk-skill-host/mcp-server-common/Cargo.toml](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/mcp-server-common/Cargo.toml)<br>[quickdesk-skill-host/mcp-server-common/src/lib.rs](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/mcp-server-common/src/lib.rs)<br>[quickdesk-skill-host/host/src/mcp_client.rs](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/host/src/mcp_client.rs)<br>[quickdesk-mcp/build_log.txt](../../../../sources/barry-ran__QuickDesk/quickdesk-mcp/build_log.txt)<br>[quickdesk-mcp/Cargo.lock](../../../../sources/barry-ran__QuickDesk/quickdesk-mcp/Cargo.lock) |
| retrieval | 9 | [WebClient/index.html](../../../../sources/barry-ran__QuickDesk/WebClient/index.html)<br>[WebClient/src/router/index.js](../../../../sources/barry-ran__QuickDesk/WebClient/src/router/index.js)<br>[test/websocket/index.html](../../../../sources/barry-ran__QuickDesk/test/websocket/index.html)<br>[test/mcp/index.html](../../../../sources/barry-ran__QuickDesk/test/mcp/index.html)<br>[SignalingServer/web_embed.go](../../../../sources/barry-ran__QuickDesk/SignalingServer/web_embed.go)<br>[SignalingServer/web/index.html](../../../../sources/barry-ran__QuickDesk/SignalingServer/web/index.html)<br>[SignalingServer/web/src/router/index.js](../../../../sources/barry-ran__QuickDesk/SignalingServer/web/src/router/index.js)<br>[SignalingServer/web/src/i18n/index.js](../../../../sources/barry-ran__QuickDesk/SignalingServer/web/src/i18n/index.js) |
| spec | 0 | 명확하지 않음 |
| eval | 3 | [test/websocket/index.html](../../../../sources/barry-ran__QuickDesk/test/websocket/index.html)<br>[test/mcp/index.html](../../../../sources/barry-ran__QuickDesk/test/mcp/index.html)<br>[quickdesk-virtual-display/driver/Trace.h](../../../../sources/barry-ran__QuickDesk/quickdesk-virtual-display/driver/Trace.h) |
| security | 14 | [WebClient/src/store/auth.js](../../../../sources/barry-ran__QuickDesk/WebClient/src/store/auth.js)<br>[WebClient/js/auth/auth-util.js](../../../../sources/barry-ran__QuickDesk/WebClient/js/auth/auth-util.js)<br>[WebClient/js/auth/spake2.js](../../../../sources/barry-ran__QuickDesk/WebClient/js/auth/spake2.js)<br>[SignalingServer/web/src/api/audit.js](../../../../sources/barry-ran__QuickDesk/SignalingServer/web/src/api/audit.js)<br>[SignalingServer/web/src/api/auth.js](../../../../sources/barry-ran__QuickDesk/SignalingServer/web/src/api/auth.js)<br>[SignalingServer/internal/service/audit_service.go](../../../../sources/barry-ran__QuickDesk/SignalingServer/internal/service/audit_service.go)<br>[SignalingServer/internal/service/device_secret_service.go](../../../../sources/barry-ran__QuickDesk/SignalingServer/internal/service/device_secret_service.go)<br>[SignalingServer/internal/models/audit_log.go](../../../../sources/barry-ran__QuickDesk/SignalingServer/internal/models/audit_log.go) |
| ci | 4 | [.github/workflows/docker-publish.yml](../../../../sources/barry-ran__QuickDesk/.github/workflows/docker-publish.yml)<br>[.github/workflows/quickdesk-macos.yml](../../../../sources/barry-ran__QuickDesk/.github/workflows/quickdesk-macos.yml)<br>[.github/workflows/quickdesk-vdd.yml](../../../../sources/barry-ran__QuickDesk/.github/workflows/quickdesk-vdd.yml)<br>[.github/workflows/quickdesk-windows.yml](../../../../sources/barry-ran__QuickDesk/.github/workflows/quickdesk-windows.yml) |
| container | 3 | [SignalingServer/docker-compose.build.yml](../../../../sources/barry-ran__QuickDesk/SignalingServer/docker-compose.build.yml)<br>[SignalingServer/docker-compose.yml](../../../../sources/barry-ran__QuickDesk/SignalingServer/docker-compose.yml)<br>[SignalingServer/Dockerfile](../../../../sources/barry-ran__QuickDesk/SignalingServer/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 30 | [README_zh.md](../../../../sources/barry-ran__QuickDesk/README_zh.md)<br>[README.md](../../../../sources/barry-ran__QuickDesk/README.md)<br>[SignalingServer/README.md](../../../../sources/barry-ran__QuickDesk/SignalingServer/README.md)<br>[SignalingServer/docs/user-api-docs.md](../../../../sources/barry-ran__QuickDesk/SignalingServer/docs/user-api-docs.md)<br>[quickdesk-virtual-display/prebuilt/x64/README.md](../../../../sources/barry-ran__QuickDesk/quickdesk-virtual-display/prebuilt/x64/README.md)<br>[QuickDesk/qml/component/README.md](../../../../sources/barry-ran__QuickDesk/QuickDesk/qml/component/README.md)<br>[examples/mcp-configs/README.md](../../../../sources/barry-ran__QuickDesk/examples/mcp-configs/README.md)<br>[docs/demo-scenarios.md](../../../../sources/barry-ran__QuickDesk/docs/demo-scenarios.md) |
| config | 12 | [WebClient/package.json](../../../../sources/barry-ran__QuickDesk/WebClient/package.json)<br>[SignalingServer/go.mod](../../../../sources/barry-ran__QuickDesk/SignalingServer/go.mod)<br>[SignalingServer/web/package.json](../../../../sources/barry-ran__QuickDesk/SignalingServer/web/package.json)<br>[quickdesk-skill-host/Cargo.lock](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/Cargo.lock)<br>[quickdesk-skill-host/Cargo.toml](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/Cargo.toml)<br>[quickdesk-skill-host/skills/sys-info/Cargo.toml](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/sys-info/Cargo.toml)<br>[quickdesk-skill-host/skills/shell-runner/Cargo.toml](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/shell-runner/Cargo.toml)<br>[quickdesk-skill-host/skills/file-ops/Cargo.toml](../../../../sources/barry-ran__QuickDesk/quickdesk-skill-host/skills/file-ops/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 3 | [test/websocket/index.html](../../../../sources/barry-ran__QuickDesk/test/websocket/index.html)<br>[test/mcp/index.html](../../../../sources/barry-ran__QuickDesk/test/mcp/index.html)<br>[quickdesk-virtual-display/driver/Trace.h](../../../../sources/barry-ran__QuickDesk/quickdesk-virtual-display/driver/Trace.h) |
| CI workflow | 4 | [.github/workflows/docker-publish.yml](../../../../sources/barry-ran__QuickDesk/.github/workflows/docker-publish.yml)<br>[.github/workflows/quickdesk-macos.yml](../../../../sources/barry-ran__QuickDesk/.github/workflows/quickdesk-macos.yml)<br>[.github/workflows/quickdesk-vdd.yml](../../../../sources/barry-ran__QuickDesk/.github/workflows/quickdesk-vdd.yml)<br>[.github/workflows/quickdesk-windows.yml](../../../../sources/barry-ran__QuickDesk/.github/workflows/quickdesk-windows.yml) |
| 컨테이너/배포 | 3 | [SignalingServer/docker-compose.build.yml](../../../../sources/barry-ran__QuickDesk/SignalingServer/docker-compose.build.yml)<br>[SignalingServer/docker-compose.yml](../../../../sources/barry-ran__QuickDesk/SignalingServer/docker-compose.yml)<br>[SignalingServer/Dockerfile](../../../../sources/barry-ran__QuickDesk/SignalingServer/Dockerfile) |
| 보안/정책 | 14 | [WebClient/src/store/auth.js](../../../../sources/barry-ran__QuickDesk/WebClient/src/store/auth.js)<br>[WebClient/js/auth/auth-util.js](../../../../sources/barry-ran__QuickDesk/WebClient/js/auth/auth-util.js)<br>[WebClient/js/auth/spake2.js](../../../../sources/barry-ran__QuickDesk/WebClient/js/auth/spake2.js)<br>[SignalingServer/web/src/api/audit.js](../../../../sources/barry-ran__QuickDesk/SignalingServer/web/src/api/audit.js)<br>[SignalingServer/web/src/api/auth.js](../../../../sources/barry-ran__QuickDesk/SignalingServer/web/src/api/auth.js)<br>[SignalingServer/internal/service/audit_service.go](../../../../sources/barry-ran__QuickDesk/SignalingServer/internal/service/audit_service.go) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `test/mcp/index.html`, `scripts/build_mcp_mac.sh`, `scripts/build_mcp_win.bat`.
2. entrypoint를 따라 실행 흐름 확인: `WebClient/src/App.vue`, `WebClient/src/main.js`, `SignalingServer/web/src/App.vue`.
3. agent/tool runtime 매핑: `quickdesk-skill-host/skills/sys-info/Cargo.toml`, `quickdesk-skill-host/skills/sys-info/SKILL.md`, `quickdesk-skill-host/skills/sys-info/src/main.rs`.
4. retrieval/memory/indexing 확인: `WebClient/index.html`, `WebClient/src/router/index.js`, `test/websocket/index.html`.
5. test/eval 파일로 동작 검증: `test/websocket/index.html`, `test/mcp/index.html`, `quickdesk-virtual-display/driver/Trace.h`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 QuickDesk is the first AI native remote desktop — an open source, free application with a built in MCP Model Context Pro. 핵심 구조 신호는 QML, README.md, LICENSE, tests, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
