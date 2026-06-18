# 0xranx/OpenContext Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A personal context store for AI agents and assistants—reuse your existing coding agent CLI (Codex/Claude/OpenCode) with built‑in Skills/tools and a desktop GUI to capture, search, and reuse project knowledge across agents and repos.

## 요약

- 조사 단위: `sources/0xranx__OpenContext` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 242 files, 71 directories, depth score 108, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp.example.json, src/mcp/server.js이고, 의존성 단서는 openai, modelcontextprotocol, express, next, react, commander, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | 0xranx/OpenContext |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | JavaScript |
| Stars | 590 |
| Forks | 37 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/0xranx__OpenContext](../../../../sources/0xranx__OpenContext) |
| Existing report | [reports/global-trending/repositories/0xranx__OpenContext.md](../../../global-trending/repositories/0xranx__OpenContext.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 242 / 71 |
| Max observed depth | 7 |
| Top directories | .github, bin, crates, docs, scripts, src, src-ios, src-tauri, tests |
| Top extensions | .js: 81, .jsx: 41, .rs: 28, .json: 20, .png: 16, .svg: 8, .md: 6, .yml: 6, (none): 6, .cjs: 5, .toml: 3, .css: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, ui/extension surface |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
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


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | milvus |
| modelRuntime | none |
| webRuntime | express, next, react |
| developerSurface | commander |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 9 | [src-tauri/src/main.rs](../../../../sources/0xranx__OpenContext/src-tauri/src/main.rs)<br>[src/ui/server.js](../../../../sources/0xranx__OpenContext/src/ui/server.js)<br>[src/ui/src/App.jsx](../../../../sources/0xranx__OpenContext/src/ui/src/App.jsx)<br>[src/ui/src/index.css](../../../../sources/0xranx__OpenContext/src/ui/src/index.css)<br>[src/ui/src/main.jsx](../../../../sources/0xranx__OpenContext/src/ui/src/main.jsx)<br>[src/mcp/server.js](../../../../sources/0xranx__OpenContext/src/mcp/server.js)<br>[crates/opencontext-node/src/lib.rs](../../../../sources/0xranx__OpenContext/crates/opencontext-node/src/lib.rs)<br>[crates/opencontext-core/src/lib.rs](../../../../sources/0xranx__OpenContext/crates/opencontext-core/src/lib.rs) |
| agentRuntime | 24 | [AGENTS.md](../../../../sources/0xranx__OpenContext/AGENTS.md)<br>[src-tauri/src/agent_rpc.rs](../../../../sources/0xranx__OpenContext/src-tauri/src/agent_rpc.rs)<br>[src-tauri/src/commands/agent.rs](../../../../sources/0xranx__OpenContext/src-tauri/src/commands/agent.rs)<br>[src-tauri/src/commands/context.rs](../../../../sources/0xranx__OpenContext/src-tauri/src/commands/context.rs)<br>[src/ui/src/hooks/useDataIntegrity.js](../../../../sources/0xranx__OpenContext/src/ui/src/hooks/useDataIntegrity.js)<br>[src/ui/src/hooks/useDocLoader.js](../../../../sources/0xranx__OpenContext/src/ui/src/hooks/useDocLoader.js)<br>[src/ui/src/hooks/useFolderCache.js](../../../../sources/0xranx__OpenContext/src/ui/src/hooks/useFolderCache.js)<br>[src/ui/src/hooks/useIdeaLoader.js](../../../../sources/0xranx__OpenContext/src/ui/src/hooks/useIdeaLoader.js) |
| mcp | 2 | [mcp.example.json](../../../../sources/0xranx__OpenContext/mcp.example.json)<br>[src/mcp/server.js](../../../../sources/0xranx__OpenContext/src/mcp/server.js) |
| retrieval | 16 | [src-ios/index.js](../../../../sources/0xranx__OpenContext/src-ios/index.js)<br>[src-ios/i18n/index.js](../../../../sources/0xranx__OpenContext/src-ios/i18n/index.js)<br>[src-ios/db/index.js](../../../../sources/0xranx__OpenContext/src-ios/db/index.js)<br>[src/ui/index.html](../../../../sources/0xranx__OpenContext/src/ui/index.html)<br>[src/ui/src/index.css](../../../../sources/0xranx__OpenContext/src/ui/src/index.css)<br>[src/ui/src/services/idea/index.js](../../../../sources/0xranx__OpenContext/src/ui/src/services/idea/index.js)<br>[src/ui/src/routes/index.jsx](../../../../sources/0xranx__OpenContext/src/ui/src/routes/index.jsx)<br>[src/ui/src/mobile/index.jsx](../../../../sources/0xranx__OpenContext/src/ui/src/mobile/index.jsx) |
| spec | 0 | not obvious |
| eval | 13 | [tests/helpers.js](../../../../sources/0xranx__OpenContext/tests/helpers.js)<br>[tests/search/formatter.test.js](../../../../sources/0xranx__OpenContext/tests/search/formatter.test.js)<br>[tests/native/native-adapter.test.js](../../../../sources/0xranx__OpenContext/tests/native/native-adapter.test.js)<br>[tests/native/store-native.test.js](../../../../sources/0xranx__OpenContext/tests/native/store-native.test.js)<br>[tests/integration/cli.test.js](../../../../sources/0xranx__OpenContext/tests/integration/cli.test.js)<br>[tests/core/config.test.js](../../../../sources/0xranx__OpenContext/tests/core/config.test.js)<br>[src/ui/tests/editor-list-compat.test.cjs](../../../../sources/0xranx__OpenContext/src/ui/tests/editor-list-compat.test.cjs)<br>[src/ui/tests/move.test.cjs](../../../../sources/0xranx__OpenContext/src/ui/tests/move.test.cjs) |
| security | 0 | not obvious |
| ci | 5 | [.github/workflows/ci.yml](../../../../sources/0xranx__OpenContext/.github/workflows/ci.yml)<br>[.github/workflows/cli-publish.yml](../../../../sources/0xranx__OpenContext/.github/workflows/cli-publish.yml)<br>[.github/workflows/cli-smoke.yml](../../../../sources/0xranx__OpenContext/.github/workflows/cli-smoke.yml)<br>[.github/workflows/desktop-build.yml](../../../../sources/0xranx__OpenContext/.github/workflows/desktop-build.yml)<br>[.github/workflows/native-build.yml](../../../../sources/0xranx__OpenContext/.github/workflows/native-build.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/0xranx__OpenContext/AGENTS.md) |
| docs | 13 | [README.md](../../../../sources/0xranx__OpenContext/README.md)<br>[README.zh-CN.md](../../../../sources/0xranx__OpenContext/README.zh-CN.md)<br>[src-ios/README.md](../../../../sources/0xranx__OpenContext/src-ios/README.md)<br>[src/ui/src/components/agent/README.md](../../../../sources/0xranx__OpenContext/src/ui/src/components/agent/README.md)<br>[docs/images/avatar.png](../../../../sources/0xranx__OpenContext/docs/images/avatar.png)<br>[docs/images/folder-refer-git.gif](../../../../sources/0xranx__OpenContext/docs/images/folder-refer-git.gif)<br>[docs/images/logo-dark.png](../../../../sources/0xranx__OpenContext/docs/images/logo-dark.png)<br>[docs/images/logo-dark.svg](../../../../sources/0xranx__OpenContext/docs/images/logo-dark.svg) |
| config | 7 | [package.json](../../../../sources/0xranx__OpenContext/package.json)<br>[src-tauri/Cargo.toml](../../../../sources/0xranx__OpenContext/src-tauri/Cargo.toml)<br>[src-ios/package.json](../../../../sources/0xranx__OpenContext/src-ios/package.json)<br>[src/ui/src/package.json](../../../../sources/0xranx__OpenContext/src/ui/src/package.json)<br>[crates/opencontext-node/Cargo.toml](../../../../sources/0xranx__OpenContext/crates/opencontext-node/Cargo.toml)<br>[crates/opencontext-node/package.json](../../../../sources/0xranx__OpenContext/crates/opencontext-node/package.json)<br>[crates/opencontext-core/Cargo.toml](../../../../sources/0xranx__OpenContext/crates/opencontext-core/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 13 | [tests/helpers.js](../../../../sources/0xranx__OpenContext/tests/helpers.js)<br>[tests/search/formatter.test.js](../../../../sources/0xranx__OpenContext/tests/search/formatter.test.js)<br>[tests/native/native-adapter.test.js](../../../../sources/0xranx__OpenContext/tests/native/native-adapter.test.js)<br>[tests/native/store-native.test.js](../../../../sources/0xranx__OpenContext/tests/native/store-native.test.js)<br>[tests/integration/cli.test.js](../../../../sources/0xranx__OpenContext/tests/integration/cli.test.js)<br>[tests/core/config.test.js](../../../../sources/0xranx__OpenContext/tests/core/config.test.js) |
| CI workflows | 5 | [.github/workflows/ci.yml](../../../../sources/0xranx__OpenContext/.github/workflows/ci.yml)<br>[.github/workflows/cli-publish.yml](../../../../sources/0xranx__OpenContext/.github/workflows/cli-publish.yml)<br>[.github/workflows/cli-smoke.yml](../../../../sources/0xranx__OpenContext/.github/workflows/cli-smoke.yml)<br>[.github/workflows/desktop-build.yml](../../../../sources/0xranx__OpenContext/.github/workflows/desktop-build.yml)<br>[.github/workflows/native-build.yml](../../../../sources/0xranx__OpenContext/.github/workflows/native-build.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/0xranx__OpenContext/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `mcp.example.json`, `src/mcp/server.js`, `AGENTS.md`.
2. Trace execution through entrypoints: `src-tauri/src/main.rs`, `src/ui/server.js`, `src/ui/src/App.jsx`.
3. Map agent/tool runtime through: `AGENTS.md`, `src-tauri/src/agent_rpc.rs`, `src-tauri/src/commands/agent.rs`.
4. Inspect retrieval/memory/indexing through: `src-ios/index.js`, `src-ios/i18n/index.js`, `src-ios/db/index.js`.
5. Verify behavior through test/eval files: `tests/helpers.js`, `tests/search/formatter.test.js`, `tests/native/native-adapter.test.js`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A personal context store for AI agents and assistants—reuse your existing coding agent CLI Codex/Claude/OpenCode with bu. 핵심 구조 신호는 JavaScript, package.json, README.md, AGENTS.md, LICENSE, openai이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
