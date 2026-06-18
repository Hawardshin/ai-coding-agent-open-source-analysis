# 0xranx/OpenContext 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

A personal context store for AI agents and assistants—reuse your existing coding agent CLI (Codex/Claude/OpenCode) with built‑in Skills/tools and a desktop GUI to capture, search, and reuse project knowledge across agents and repos.

## 요약

- 조사 단위: `sources/0xranx__OpenContext` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 242 files, 71 directories, depth score 102, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp.example.json, src/mcp/server.js이고, 의존성 단서는 openai, modelcontextprotocol, express, next, react, commander, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | 0xranx/OpenContext |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | JavaScript |
| Stars | 590 |
| Forks | 37 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/0xranx__OpenContext](../../../../sources/0xranx__OpenContext) |
| 기존 보고서 | [reports/global-trending/repositories/0xranx__OpenContext.md](../../../global-trending/repositories/0xranx__OpenContext.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 242 / 71 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, bin, crates, docs, scripts, src, src-ios, src-tauri, tests |
| 상위 확장자 | .js: 81, .jsx: 41, .rs: 28, .json: 20, .png: 16, .svg: 8, .md: 6, .yml: 6, (none): 6, .cjs: 5, .toml: 3, .css: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 40 |
| docs | documentation surface | 9 |
| crates/opencontext-node | crates workspace | 8 |
| crates/opencontext-core | crates workspace | 7 |
| tests | validation surface | 7 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| crates | source boundary | 1 |
| scripts | top-level component | 1 |
| src-ios | source boundary | 1 |
| src-tauri | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | prepare | [ -d .git ] && ./scripts/setup-hooks.sh \|\| true |
| test | package.json | test | npm run test:core && npm run test:search && npm run test:native |
| test | package.json | test:core | node --test tests/core/*.test.js |
| test | package.json | test:search | node --test tests/search/*.test.js |
| test | package.json | test:native | node --test tests/native/*.test.js |
| test | package.json | test:integration | node --test tests/integration/*.test.js |
| test | package.json | test:all | npm run test && npm run test:integration && npm run test:rust |
| test | package.json | test:rust | cd crates/opencontext-core && cargo test --release --features search |
| test | package.json | test:ui | node --test src/ui/tests/*.test.cjs |
| serve-dev | package.json | mcp | node src/mcp/server.js |
| serve-dev | package.json | ui:dev | vite --config src/ui/vite.config.js |
| serve-dev | package.json | ui:build | vite build --config src/ui/vite.config.js |
| serve-dev | package.json | ui:preview | vite preview --config src/ui/vite.config.js |
| build | package.json | prepublishOnly | npm run ui:build |
| utility | package.json | tauri | tauri |
| serve-dev | package.json | tauri:dev | tauri dev |
| build | package.json | tauri:build | tauri build |
| build | package.json | tauri:build:mac | tauri build --target universal-apple-darwin |
| build | package.json | tauri:build:win | echo '⚠️ Windows 构建需要在 Windows 上执行，或使用 GitHub Actions' && echo '运行: gh workflow run desktop-build.yml' && exit 1 |
| serve-dev | package.json | api:dev | node scripts/api-server.js |
| entrypoint | package.json bin | oc.js | ./bin/oc.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | milvus |
| modelRuntime | 없음 |
| webRuntime | express, next, react |
| developerSurface | commander |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [mcp.example.json](../../../../sources/0xranx__OpenContext/mcp.example.json) | mcp signal |
| mcp | [src/mcp/server.js](../../../../sources/0xranx__OpenContext/src/mcp/server.js) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/0xranx__OpenContext/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src-tauri/src/agent_rpc.rs](../../../../sources/0xranx__OpenContext/src-tauri/src/agent_rpc.rs) | agentRuntime signal |
| agentRuntime | [src-tauri/src/commands/agent.rs](../../../../sources/0xranx__OpenContext/src-tauri/src/commands/agent.rs) | agentRuntime signal |
| agentRuntime | [src-tauri/src/commands/context.rs](../../../../sources/0xranx__OpenContext/src-tauri/src/commands/context.rs) | agentRuntime signal |
| entrypoints | [src-tauri/src/main.rs](../../../../sources/0xranx__OpenContext/src-tauri/src/main.rs) | entrypoints signal |
| entrypoints | [src/ui/server.js](../../../../sources/0xranx__OpenContext/src/ui/server.js) | entrypoints signal |
| entrypoints | [src/ui/src/App.jsx](../../../../sources/0xranx__OpenContext/src/ui/src/App.jsx) | entrypoints signal |
| entrypoints | [src/ui/src/index.css](../../../../sources/0xranx__OpenContext/src/ui/src/index.css) | entrypoints signal |
| config | [package.json](../../../../sources/0xranx__OpenContext/package.json) | config signal |
| config | [src-tauri/Cargo.toml](../../../../sources/0xranx__OpenContext/src-tauri/Cargo.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 9 | [src-tauri/src/main.rs](../../../../sources/0xranx__OpenContext/src-tauri/src/main.rs)<br>[src/ui/server.js](../../../../sources/0xranx__OpenContext/src/ui/server.js)<br>[src/ui/src/App.jsx](../../../../sources/0xranx__OpenContext/src/ui/src/App.jsx)<br>[src/ui/src/index.css](../../../../sources/0xranx__OpenContext/src/ui/src/index.css)<br>[src/ui/src/main.jsx](../../../../sources/0xranx__OpenContext/src/ui/src/main.jsx)<br>[src/mcp/server.js](../../../../sources/0xranx__OpenContext/src/mcp/server.js)<br>[crates/opencontext-node/src/lib.rs](../../../../sources/0xranx__OpenContext/crates/opencontext-node/src/lib.rs)<br>[crates/opencontext-core/src/lib.rs](../../../../sources/0xranx__OpenContext/crates/opencontext-core/src/lib.rs) |
| agentRuntime | 24 | [AGENTS.md](../../../../sources/0xranx__OpenContext/AGENTS.md)<br>[src-tauri/src/agent_rpc.rs](../../../../sources/0xranx__OpenContext/src-tauri/src/agent_rpc.rs)<br>[src-tauri/src/commands/agent.rs](../../../../sources/0xranx__OpenContext/src-tauri/src/commands/agent.rs)<br>[src-tauri/src/commands/context.rs](../../../../sources/0xranx__OpenContext/src-tauri/src/commands/context.rs)<br>[src/ui/src/hooks/useDataIntegrity.js](../../../../sources/0xranx__OpenContext/src/ui/src/hooks/useDataIntegrity.js)<br>[src/ui/src/hooks/useDocLoader.js](../../../../sources/0xranx__OpenContext/src/ui/src/hooks/useDocLoader.js)<br>[src/ui/src/hooks/useFolderCache.js](../../../../sources/0xranx__OpenContext/src/ui/src/hooks/useFolderCache.js)<br>[src/ui/src/hooks/useIdeaLoader.js](../../../../sources/0xranx__OpenContext/src/ui/src/hooks/useIdeaLoader.js) |
| mcp | 2 | [mcp.example.json](../../../../sources/0xranx__OpenContext/mcp.example.json)<br>[src/mcp/server.js](../../../../sources/0xranx__OpenContext/src/mcp/server.js) |
| retrieval | 16 | [src-ios/index.js](../../../../sources/0xranx__OpenContext/src-ios/index.js)<br>[src-ios/i18n/index.js](../../../../sources/0xranx__OpenContext/src-ios/i18n/index.js)<br>[src-ios/db/index.js](../../../../sources/0xranx__OpenContext/src-ios/db/index.js)<br>[src/ui/index.html](../../../../sources/0xranx__OpenContext/src/ui/index.html)<br>[src/ui/src/index.css](../../../../sources/0xranx__OpenContext/src/ui/src/index.css)<br>[src/ui/src/services/idea/index.js](../../../../sources/0xranx__OpenContext/src/ui/src/services/idea/index.js)<br>[src/ui/src/routes/index.jsx](../../../../sources/0xranx__OpenContext/src/ui/src/routes/index.jsx)<br>[src/ui/src/mobile/index.jsx](../../../../sources/0xranx__OpenContext/src/ui/src/mobile/index.jsx) |
| spec | 0 | 명확하지 않음 |
| eval | 13 | [tests/helpers.js](../../../../sources/0xranx__OpenContext/tests/helpers.js)<br>[tests/search/formatter.test.js](../../../../sources/0xranx__OpenContext/tests/search/formatter.test.js)<br>[tests/native/native-adapter.test.js](../../../../sources/0xranx__OpenContext/tests/native/native-adapter.test.js)<br>[tests/native/store-native.test.js](../../../../sources/0xranx__OpenContext/tests/native/store-native.test.js)<br>[tests/integration/cli.test.js](../../../../sources/0xranx__OpenContext/tests/integration/cli.test.js)<br>[tests/core/config.test.js](../../../../sources/0xranx__OpenContext/tests/core/config.test.js)<br>[src/ui/tests/editor-list-compat.test.cjs](../../../../sources/0xranx__OpenContext/src/ui/tests/editor-list-compat.test.cjs)<br>[src/ui/tests/move.test.cjs](../../../../sources/0xranx__OpenContext/src/ui/tests/move.test.cjs) |
| security | 0 | 명확하지 않음 |
| ci | 5 | [.github/workflows/ci.yml](../../../../sources/0xranx__OpenContext/.github/workflows/ci.yml)<br>[.github/workflows/cli-publish.yml](../../../../sources/0xranx__OpenContext/.github/workflows/cli-publish.yml)<br>[.github/workflows/cli-smoke.yml](../../../../sources/0xranx__OpenContext/.github/workflows/cli-smoke.yml)<br>[.github/workflows/desktop-build.yml](../../../../sources/0xranx__OpenContext/.github/workflows/desktop-build.yml)<br>[.github/workflows/native-build.yml](../../../../sources/0xranx__OpenContext/.github/workflows/native-build.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/0xranx__OpenContext/AGENTS.md) |
| docs | 13 | [README.md](../../../../sources/0xranx__OpenContext/README.md)<br>[README.zh-CN.md](../../../../sources/0xranx__OpenContext/README.zh-CN.md)<br>[src-ios/README.md](../../../../sources/0xranx__OpenContext/src-ios/README.md)<br>[src/ui/src/components/agent/README.md](../../../../sources/0xranx__OpenContext/src/ui/src/components/agent/README.md)<br>[docs/images/avatar.png](../../../../sources/0xranx__OpenContext/docs/images/avatar.png)<br>[docs/images/folder-refer-git.gif](../../../../sources/0xranx__OpenContext/docs/images/folder-refer-git.gif)<br>[docs/images/logo-dark.png](../../../../sources/0xranx__OpenContext/docs/images/logo-dark.png)<br>[docs/images/logo-dark.svg](../../../../sources/0xranx__OpenContext/docs/images/logo-dark.svg) |
| config | 7 | [package.json](../../../../sources/0xranx__OpenContext/package.json)<br>[src-tauri/Cargo.toml](../../../../sources/0xranx__OpenContext/src-tauri/Cargo.toml)<br>[src-ios/package.json](../../../../sources/0xranx__OpenContext/src-ios/package.json)<br>[src/ui/src/package.json](../../../../sources/0xranx__OpenContext/src/ui/src/package.json)<br>[crates/opencontext-node/Cargo.toml](../../../../sources/0xranx__OpenContext/crates/opencontext-node/Cargo.toml)<br>[crates/opencontext-node/package.json](../../../../sources/0xranx__OpenContext/crates/opencontext-node/package.json)<br>[crates/opencontext-core/Cargo.toml](../../../../sources/0xranx__OpenContext/crates/opencontext-core/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 13 | [tests/helpers.js](../../../../sources/0xranx__OpenContext/tests/helpers.js)<br>[tests/search/formatter.test.js](../../../../sources/0xranx__OpenContext/tests/search/formatter.test.js)<br>[tests/native/native-adapter.test.js](../../../../sources/0xranx__OpenContext/tests/native/native-adapter.test.js)<br>[tests/native/store-native.test.js](../../../../sources/0xranx__OpenContext/tests/native/store-native.test.js)<br>[tests/integration/cli.test.js](../../../../sources/0xranx__OpenContext/tests/integration/cli.test.js)<br>[tests/core/config.test.js](../../../../sources/0xranx__OpenContext/tests/core/config.test.js) |
| CI workflow | 5 | [.github/workflows/ci.yml](../../../../sources/0xranx__OpenContext/.github/workflows/ci.yml)<br>[.github/workflows/cli-publish.yml](../../../../sources/0xranx__OpenContext/.github/workflows/cli-publish.yml)<br>[.github/workflows/cli-smoke.yml](../../../../sources/0xranx__OpenContext/.github/workflows/cli-smoke.yml)<br>[.github/workflows/desktop-build.yml](../../../../sources/0xranx__OpenContext/.github/workflows/desktop-build.yml)<br>[.github/workflows/native-build.yml](../../../../sources/0xranx__OpenContext/.github/workflows/native-build.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/0xranx__OpenContext/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp.example.json`, `src/mcp/server.js`, `AGENTS.md`.
2. entrypoint를 따라 실행 흐름 확인: `src-tauri/src/main.rs`, `src/ui/server.js`, `src/ui/src/App.jsx`.
3. agent/tool runtime 매핑: `AGENTS.md`, `src-tauri/src/agent_rpc.rs`, `src-tauri/src/commands/agent.rs`.
4. retrieval/memory/indexing 확인: `src-ios/index.js`, `src-ios/i18n/index.js`, `src-ios/db/index.js`.
5. test/eval 파일로 동작 검증: `tests/helpers.js`, `tests/search/formatter.test.js`, `tests/native/native-adapter.test.js`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A personal context store for AI agents and assistants—reuse your existing coding agent CLI Codex/Claude/OpenCode with bu. 핵심 구조 신호는 JavaScript, package.json, README.md, AGENTS.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
