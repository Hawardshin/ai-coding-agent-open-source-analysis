# vasu-devs/JustHireMe Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local-first AI job intelligence workbench for scraping roles, ranking fit, and generating tailored application materials.

## 요약

- 조사 단위: `sources/vasu-devs__JustHireMe` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 452 files, 77 directories, depth score 121, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/MCP.md, backend/mcp_server.py, backend/tests/test_mcp_server.py이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | vasu-devs/JustHireMe |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 2058 |
| Forks | 334 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/vasu-devs__JustHireMe](../../../../sources/vasu-devs__JustHireMe) |
| Existing report | [reports/global-trending/repositories/vasu-devs__JustHireMe.md](../../../global-trending/repositories/vasu-devs__JustHireMe.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 452 / 77 |
| Max observed depth | 5 |
| Top directories | .github, backend, Designs, docs, Posts, public, scripts, skills, src, src-tauri, website |
| Top extensions | .py: 247, .tsx: 34, .ts: 26, .md: 23, .jsx: 16, .png: 15, .mjs: 14, (none): 13, .json: 11, .yml: 11, .js: 8, .html: 6 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 27 |
| docs | documentation surface | 16 |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| Designs | top-level component | 1 |
| Posts | top-level component | 1 |
| public | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| src-tauri | source boundary | 1 |
| website | documentation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | vite |
| quality | package.json | lint | eslint src/ |
| quality | package.json | typecheck | tsc --noEmit |
| test | package.json | test | vitest run |
| test | package.json | test:behavioral | vitest run src/features/behavioralRender.test.tsx |
| test | package.json | test:coverage | vitest run --coverage --exclude src/features/behavioralRender.test.tsx |
| build | package.json | build | node scripts/build-frontend.mjs |
| build | package.json | build:sidecar | node scripts/build-sidecar.mjs |
| build | package.json | build:runtime-pack | node scripts/package-runtime-pack.mjs |
| build | package.json | build:vector-runtime | node scripts/package-vector-runtime.mjs |
| build | package.json | build:all | node scripts/run-parallel.mjs build:all |
| build | package.json | release:verify-updater | node scripts/verify-updater-release.mjs |
| build | package.json | release:preflight | npm run check:all && npm run release:smoke |
| utility | package.json | version:bump | node scripts/version.mjs bump |
| quality | package.json | version:check | node scripts/version.mjs check |
| quality | package.json | check | npm run check:all |
| quality | package.json | check:all | node scripts/run-parallel.mjs check:all |
| serve-dev | package.json | preview | vite preview |
| utility | package.json | tauri | tauri |
| utility | package.json | smoke:sidecar | node scripts/smoke-sidecar.mjs |
| utility | package.json | smoke:windows-update | node scripts/smoke-windows-update.mjs |
| utility | package.json | smoke:live-sources | node scripts/smoke-live-sources.mjs |
| build | package.json | release:smoke | node scripts/run-parallel.mjs release:smoke && cd src-tauri && cargo build --release && cd .. && npm run smoke:sidecar |
| build | package.json | release | npm run release:windows |
| build | package.json | release:windows | npm run version:check && npm run build && npm run build:sidecar && npm run build:runtime-pack && npm run package:windows |
| build | package.json | release:linux | npm run version:check && npm run build && npm run build:sidecar && npm run build:runtime-pack && npm run package:linux |
| build | package.json | release:macos | npm run version:check && npm run build && npm run build:sidecar && npm run build:runtime-pack && npm run package:macos |
| build | package.json | package:fast | npm run release:smoke |
| build | package.json | package:windows | tauri build --bundles nsis |
| build | package.json | package:windows:all | tauri build --bundles nsis msi |
| build | package.json | package:windows:msi | tauri build --bundles msi |
| build | package.json | package:linux | tauri build --bundles deb appimage |
| build | package.json | package:macos | tauri build --bundles app,dmg |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | react |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [docs/MCP.md](../../../../sources/vasu-devs__JustHireMe/docs/MCP.md) | mcp signal |
| mcp | [backend/mcp_server.py](../../../../sources/vasu-devs__JustHireMe/backend/mcp_server.py) | mcp signal |
| mcp | [backend/tests/test_mcp_server.py](../../../../sources/vasu-devs__JustHireMe/backend/tests/test_mcp_server.py) | mcp signal |
| agentRuntime | [src/shared/hooks/useAppVersion.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useAppVersion.ts) | agentRuntime signal |
| agentRuntime | [src/shared/hooks/useDueFollowups.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useDueFollowups.ts) | agentRuntime signal |
| agentRuntime | [src/shared/hooks/useGraphStats.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useGraphStats.ts) | agentRuntime signal |
| agentRuntime | [src/shared/hooks/useKeyboardShortcuts.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useKeyboardShortcuts.ts) | agentRuntime signal |
| entrypoints | [website/src/main.jsx](../../../../sources/vasu-devs__JustHireMe/website/src/main.jsx) | entrypoints signal |
| entrypoints | [src-tauri/src/main.rs](../../../../sources/vasu-devs__JustHireMe/src-tauri/src/main.rs) | entrypoints signal |
| entrypoints | [src-tauri/resources/bin/chromium/.gitkeep](../../../../sources/vasu-devs__JustHireMe/src-tauri/resources/bin/chromium/.gitkeep) | entrypoints signal |
| entrypoints | [src/App.tsx](../../../../sources/vasu-devs__JustHireMe/src/App.tsx) | entrypoints signal |
| config | [package.json](../../../../sources/vasu-devs__JustHireMe/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 8 | [website/src/main.jsx](../../../../sources/vasu-devs__JustHireMe/website/src/main.jsx)<br>[src-tauri/src/main.rs](../../../../sources/vasu-devs__JustHireMe/src-tauri/src/main.rs)<br>[src-tauri/resources/bin/chromium/.gitkeep](../../../../sources/vasu-devs__JustHireMe/src-tauri/resources/bin/chromium/.gitkeep)<br>[src/App.tsx](../../../../sources/vasu-devs__JustHireMe/src/App.tsx)<br>[src/index.css](../../../../sources/vasu-devs__JustHireMe/src/index.css)<br>[src/main.tsx](../../../../sources/vasu-devs__JustHireMe/src/main.tsx)<br>`Designs/JustHireMe (Remix)/src/app.jsx`<br>[backend/main.py](../../../../sources/vasu-devs__JustHireMe/backend/main.py) |
| agentRuntime | 13 | [src/shared/hooks/useAppVersion.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useAppVersion.ts)<br>[src/shared/hooks/useDueFollowups.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useDueFollowups.ts)<br>[src/shared/hooks/useGraphStats.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useGraphStats.ts)<br>[src/shared/hooks/useKeyboardShortcuts.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useKeyboardShortcuts.ts)<br>[src/shared/hooks/useLeads.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useLeads.ts)<br>[src/shared/hooks/useWS.render.test.tsx](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useWS.render.test.tsx)<br>[src/shared/hooks/useWS.test.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useWS.test.ts)<br>[src/shared/hooks/useWS.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useWS.ts) |
| mcp | 3 | [docs/MCP.md](../../../../sources/vasu-devs__JustHireMe/docs/MCP.md)<br>[backend/mcp_server.py](../../../../sources/vasu-devs__JustHireMe/backend/mcp_server.py)<br>[backend/tests/test_mcp_server.py](../../../../sources/vasu-devs__JustHireMe/backend/tests/test_mcp_server.py) |
| retrieval | 34 | [index.html](../../../../sources/vasu-devs__JustHireMe/index.html)<br>[website/index.html](../../../../sources/vasu-devs__JustHireMe/website/index.html)<br>[website/public/legal/index.html](../../../../sources/vasu-devs__JustHireMe/website/public/legal/index.html)<br>[src/index.css](../../../../sources/vasu-devs__JustHireMe/src/index.css)<br>[src/features/graph/GraphView.tsx](../../../../sources/vasu-devs__JustHireMe/src/features/graph/GraphView.tsx)<br>[scripts/package-vector-runtime.mjs](../../../../sources/vasu-devs__JustHireMe/scripts/package-vector-runtime.mjs)<br>`Designs/JustHireMe (Remix)/src/views/graph.jsx`<br>[backend/tests/test_embedding_dims.py](../../../../sources/vasu-devs__JustHireMe/backend/tests/test_embedding_dims.py) |
| spec | 3 | [ROADMAP.md](../../../../sources/vasu-devs__JustHireMe/ROADMAP.md)<br>[docs/ARCHITECTURE.md](../../../../sources/vasu-devs__JustHireMe/docs/ARCHITECTURE.md)<br>[docs/PRODUCTION_RELEASE_ROADMAP.md](../../../../sources/vasu-devs__JustHireMe/docs/PRODUCTION_RELEASE_ROADMAP.md) |
| eval | 88 | [src/test-node.d.ts](../../../../sources/vasu-devs__JustHireMe/src/test-node.d.ts)<br>[src/shared/lib/leadUtils.test.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/lib/leadUtils.test.ts)<br>[src/shared/hooks/useWS.render.test.tsx](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useWS.render.test.tsx)<br>[src/shared/hooks/useWS.test.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useWS.test.ts)<br>[src/shared/context/AppContext.test.tsx](../../../../sources/vasu-devs__JustHireMe/src/shared/context/AppContext.test.tsx)<br>[src/features/behavioralRender.test.tsx](../../../../sources/vasu-devs__JustHireMe/src/features/behavioralRender.test.tsx)<br>[src/features/stabilityComponents.test.ts](../../../../sources/vasu-devs__JustHireMe/src/features/stabilityComponents.test.ts)<br>[src/features/settings/SettingsPanel.test.tsx](../../../../sources/vasu-devs__JustHireMe/src/features/settings/SettingsPanel.test.tsx) |
| security | 9 | [SECURITY.md](../../../../sources/vasu-devs__JustHireMe/SECURITY.md)<br>[website/public/legal/privacy-policy.html](../../../../sources/vasu-devs__JustHireMe/website/public/legal/privacy-policy.html)<br>[docs/legal/privacy-policy.md](../../../../sources/vasu-devs__JustHireMe/docs/legal/privacy-policy.md)<br>[backend/tests/test_security_hardening.py](../../../../sources/vasu-devs__JustHireMe/backend/tests/test_security_hardening.py)<br>[backend/tests/test_url_guard.py](../../../../sources/vasu-devs__JustHireMe/backend/tests/test_url_guard.py)<br>[backend/tests/test_ws_auth.py](../../../../sources/vasu-devs__JustHireMe/backend/tests/test_ws_auth.py)<br>[backend/profile/url_guard.py](../../../../sources/vasu-devs__JustHireMe/backend/profile/url_guard.py)<br>[backend/core/url_guard.py](../../../../sources/vasu-devs__JustHireMe/backend/core/url_guard.py) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/vasu-devs__JustHireMe/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/vasu-devs__JustHireMe/.github/workflows/release.yml)<br>[.github/workflows/test-build.yml](../../../../sources/vasu-devs__JustHireMe/.github/workflows/test-build.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 32 | [README.md](../../../../sources/vasu-devs__JustHireMe/README.md)<br>[website/index.html](../../../../sources/vasu-devs__JustHireMe/website/index.html)<br>[website/package-lock.json](../../../../sources/vasu-devs__JustHireMe/website/package-lock.json)<br>[website/package.json](../../../../sources/vasu-devs__JustHireMe/website/package.json)<br>[website/README.md](../../../../sources/vasu-devs__JustHireMe/website/README.md)<br>[website/vite.config.js](../../../../sources/vasu-devs__JustHireMe/website/vite.config.js)<br>[website/src/main.jsx](../../../../sources/vasu-devs__JustHireMe/website/src/main.jsx)<br>[website/src/styles.css](../../../../sources/vasu-devs__JustHireMe/website/src/styles.css) |
| config | 7 | [package.json](../../../../sources/vasu-devs__JustHireMe/package.json)<br>[tsconfig.json](../../../../sources/vasu-devs__JustHireMe/tsconfig.json)<br>[website/package.json](../../../../sources/vasu-devs__JustHireMe/website/package.json)<br>[src-tauri/Cargo.lock](../../../../sources/vasu-devs__JustHireMe/src-tauri/Cargo.lock)<br>[src-tauri/Cargo.toml](../../../../sources/vasu-devs__JustHireMe/src-tauri/Cargo.toml)<br>[backend/pyproject.toml](../../../../sources/vasu-devs__JustHireMe/backend/pyproject.toml)<br>[backend/uv.lock](../../../../sources/vasu-devs__JustHireMe/backend/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 88 | [src/test-node.d.ts](../../../../sources/vasu-devs__JustHireMe/src/test-node.d.ts)<br>[src/shared/lib/leadUtils.test.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/lib/leadUtils.test.ts)<br>[src/shared/hooks/useWS.render.test.tsx](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useWS.render.test.tsx)<br>[src/shared/hooks/useWS.test.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useWS.test.ts)<br>[src/shared/context/AppContext.test.tsx](../../../../sources/vasu-devs__JustHireMe/src/shared/context/AppContext.test.tsx)<br>[src/features/behavioralRender.test.tsx](../../../../sources/vasu-devs__JustHireMe/src/features/behavioralRender.test.tsx) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/vasu-devs__JustHireMe/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/vasu-devs__JustHireMe/.github/workflows/release.yml)<br>[.github/workflows/test-build.yml](../../../../sources/vasu-devs__JustHireMe/.github/workflows/test-build.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 9 | [SECURITY.md](../../../../sources/vasu-devs__JustHireMe/SECURITY.md)<br>[website/public/legal/privacy-policy.html](../../../../sources/vasu-devs__JustHireMe/website/public/legal/privacy-policy.html)<br>[docs/legal/privacy-policy.md](../../../../sources/vasu-devs__JustHireMe/docs/legal/privacy-policy.md)<br>[backend/tests/test_security_hardening.py](../../../../sources/vasu-devs__JustHireMe/backend/tests/test_security_hardening.py)<br>[backend/tests/test_url_guard.py](../../../../sources/vasu-devs__JustHireMe/backend/tests/test_url_guard.py)<br>[backend/tests/test_ws_auth.py](../../../../sources/vasu-devs__JustHireMe/backend/tests/test_ws_auth.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `docs/MCP.md`, `backend/mcp_server.py`, `backend/tests/test_mcp_server.py`.
2. Trace execution through entrypoints: `website/src/main.jsx`, `src-tauri/src/main.rs`, `src-tauri/resources/bin/chromium/.gitkeep`.
3. Map agent/tool runtime through: `src/shared/hooks/useAppVersion.ts`, `src/shared/hooks/useDueFollowups.ts`, `src/shared/hooks/useGraphStats.ts`.
4. Inspect retrieval/memory/indexing through: `index.html`, `website/index.html`, `website/public/legal/index.html`.
5. Verify behavior through test/eval files: `src/test-node.d.ts`, `src/shared/lib/leadUtils.test.ts`, `src/shared/hooks/useWS.render.test.tsx`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local first AI job intelligence workbench for scraping roles, ranking fit, and generating tailored application materials. 핵심 구조 신호는 Python, package.json, README.md, LICENSE, react, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
