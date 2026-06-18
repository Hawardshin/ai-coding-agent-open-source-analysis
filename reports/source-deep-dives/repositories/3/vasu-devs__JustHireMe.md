# vasu-devs/JustHireMe 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local-first AI job intelligence workbench for scraping roles, ranking fit, and generating tailored application materials.

## 요약

- 조사 단위: `sources/vasu-devs__JustHireMe` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 452 files, 77 directories, depth score 115, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/MCP.md, backend/mcp_server.py, backend/tests/test_mcp_server.py이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | vasu-devs/JustHireMe |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 2058 |
| Forks | 334 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/vasu-devs__JustHireMe](../../../../sources/vasu-devs__JustHireMe) |
| 기존 보고서 | [reports/global-trending/repositories/vasu-devs__JustHireMe.md](../../../global-trending/repositories/vasu-devs__JustHireMe.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 452 / 77 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, backend, Designs, docs, Posts, public, scripts, skills, src, src-tauri, website |
| 상위 확장자 | .py: 247, .tsx: 34, .ts: 26, .md: 23, .jsx: 16, .png: 15, .mjs: 14, (none): 13, .json: 11, .yml: 11, .js: 8, .html: 6 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 8 | [website/src/main.jsx](../../../../sources/vasu-devs__JustHireMe/website/src/main.jsx)<br>[src-tauri/src/main.rs](../../../../sources/vasu-devs__JustHireMe/src-tauri/src/main.rs)<br>[src-tauri/resources/bin/chromium/.gitkeep](../../../../sources/vasu-devs__JustHireMe/src-tauri/resources/bin/chromium/.gitkeep)<br>[src/App.tsx](../../../../sources/vasu-devs__JustHireMe/src/App.tsx)<br>[src/index.css](../../../../sources/vasu-devs__JustHireMe/src/index.css)<br>[src/main.tsx](../../../../sources/vasu-devs__JustHireMe/src/main.tsx)<br>`Designs/JustHireMe (Remix)/src/app.jsx`<br>[backend/main.py](../../../../sources/vasu-devs__JustHireMe/backend/main.py) |
| agentRuntime | 13 | [src/shared/hooks/useAppVersion.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useAppVersion.ts)<br>[src/shared/hooks/useDueFollowups.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useDueFollowups.ts)<br>[src/shared/hooks/useGraphStats.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useGraphStats.ts)<br>[src/shared/hooks/useKeyboardShortcuts.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useKeyboardShortcuts.ts)<br>[src/shared/hooks/useLeads.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useLeads.ts)<br>[src/shared/hooks/useWS.render.test.tsx](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useWS.render.test.tsx)<br>[src/shared/hooks/useWS.test.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useWS.test.ts)<br>[src/shared/hooks/useWS.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useWS.ts) |
| mcp | 3 | [docs/MCP.md](../../../../sources/vasu-devs__JustHireMe/docs/MCP.md)<br>[backend/mcp_server.py](../../../../sources/vasu-devs__JustHireMe/backend/mcp_server.py)<br>[backend/tests/test_mcp_server.py](../../../../sources/vasu-devs__JustHireMe/backend/tests/test_mcp_server.py) |
| retrieval | 34 | [index.html](../../../../sources/vasu-devs__JustHireMe/index.html)<br>[website/index.html](../../../../sources/vasu-devs__JustHireMe/website/index.html)<br>[website/public/legal/index.html](../../../../sources/vasu-devs__JustHireMe/website/public/legal/index.html)<br>[src/index.css](../../../../sources/vasu-devs__JustHireMe/src/index.css)<br>[src/features/graph/GraphView.tsx](../../../../sources/vasu-devs__JustHireMe/src/features/graph/GraphView.tsx)<br>[scripts/package-vector-runtime.mjs](../../../../sources/vasu-devs__JustHireMe/scripts/package-vector-runtime.mjs)<br>`Designs/JustHireMe (Remix)/src/views/graph.jsx`<br>[backend/tests/test_embedding_dims.py](../../../../sources/vasu-devs__JustHireMe/backend/tests/test_embedding_dims.py) |
| spec | 3 | [ROADMAP.md](../../../../sources/vasu-devs__JustHireMe/ROADMAP.md)<br>[docs/ARCHITECTURE.md](../../../../sources/vasu-devs__JustHireMe/docs/ARCHITECTURE.md)<br>[docs/PRODUCTION_RELEASE_ROADMAP.md](../../../../sources/vasu-devs__JustHireMe/docs/PRODUCTION_RELEASE_ROADMAP.md) |
| eval | 88 | [src/test-node.d.ts](../../../../sources/vasu-devs__JustHireMe/src/test-node.d.ts)<br>[src/shared/lib/leadUtils.test.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/lib/leadUtils.test.ts)<br>[src/shared/hooks/useWS.render.test.tsx](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useWS.render.test.tsx)<br>[src/shared/hooks/useWS.test.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useWS.test.ts)<br>[src/shared/context/AppContext.test.tsx](../../../../sources/vasu-devs__JustHireMe/src/shared/context/AppContext.test.tsx)<br>[src/features/behavioralRender.test.tsx](../../../../sources/vasu-devs__JustHireMe/src/features/behavioralRender.test.tsx)<br>[src/features/stabilityComponents.test.ts](../../../../sources/vasu-devs__JustHireMe/src/features/stabilityComponents.test.ts)<br>[src/features/settings/SettingsPanel.test.tsx](../../../../sources/vasu-devs__JustHireMe/src/features/settings/SettingsPanel.test.tsx) |
| security | 9 | [SECURITY.md](../../../../sources/vasu-devs__JustHireMe/SECURITY.md)<br>[website/public/legal/privacy-policy.html](../../../../sources/vasu-devs__JustHireMe/website/public/legal/privacy-policy.html)<br>[docs/legal/privacy-policy.md](../../../../sources/vasu-devs__JustHireMe/docs/legal/privacy-policy.md)<br>[backend/tests/test_security_hardening.py](../../../../sources/vasu-devs__JustHireMe/backend/tests/test_security_hardening.py)<br>[backend/tests/test_url_guard.py](../../../../sources/vasu-devs__JustHireMe/backend/tests/test_url_guard.py)<br>[backend/tests/test_ws_auth.py](../../../../sources/vasu-devs__JustHireMe/backend/tests/test_ws_auth.py)<br>[backend/profile/url_guard.py](../../../../sources/vasu-devs__JustHireMe/backend/profile/url_guard.py)<br>[backend/core/url_guard.py](../../../../sources/vasu-devs__JustHireMe/backend/core/url_guard.py) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/vasu-devs__JustHireMe/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/vasu-devs__JustHireMe/.github/workflows/release.yml)<br>[.github/workflows/test-build.yml](../../../../sources/vasu-devs__JustHireMe/.github/workflows/test-build.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 32 | [README.md](../../../../sources/vasu-devs__JustHireMe/README.md)<br>[website/index.html](../../../../sources/vasu-devs__JustHireMe/website/index.html)<br>[website/package-lock.json](../../../../sources/vasu-devs__JustHireMe/website/package-lock.json)<br>[website/package.json](../../../../sources/vasu-devs__JustHireMe/website/package.json)<br>[website/README.md](../../../../sources/vasu-devs__JustHireMe/website/README.md)<br>[website/vite.config.js](../../../../sources/vasu-devs__JustHireMe/website/vite.config.js)<br>[website/src/main.jsx](../../../../sources/vasu-devs__JustHireMe/website/src/main.jsx)<br>[website/src/styles.css](../../../../sources/vasu-devs__JustHireMe/website/src/styles.css) |
| config | 7 | [package.json](../../../../sources/vasu-devs__JustHireMe/package.json)<br>[tsconfig.json](../../../../sources/vasu-devs__JustHireMe/tsconfig.json)<br>[website/package.json](../../../../sources/vasu-devs__JustHireMe/website/package.json)<br>[src-tauri/Cargo.lock](../../../../sources/vasu-devs__JustHireMe/src-tauri/Cargo.lock)<br>[src-tauri/Cargo.toml](../../../../sources/vasu-devs__JustHireMe/src-tauri/Cargo.toml)<br>[backend/pyproject.toml](../../../../sources/vasu-devs__JustHireMe/backend/pyproject.toml)<br>[backend/uv.lock](../../../../sources/vasu-devs__JustHireMe/backend/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 88 | [src/test-node.d.ts](../../../../sources/vasu-devs__JustHireMe/src/test-node.d.ts)<br>[src/shared/lib/leadUtils.test.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/lib/leadUtils.test.ts)<br>[src/shared/hooks/useWS.render.test.tsx](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useWS.render.test.tsx)<br>[src/shared/hooks/useWS.test.ts](../../../../sources/vasu-devs__JustHireMe/src/shared/hooks/useWS.test.ts)<br>[src/shared/context/AppContext.test.tsx](../../../../sources/vasu-devs__JustHireMe/src/shared/context/AppContext.test.tsx)<br>[src/features/behavioralRender.test.tsx](../../../../sources/vasu-devs__JustHireMe/src/features/behavioralRender.test.tsx) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/vasu-devs__JustHireMe/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/vasu-devs__JustHireMe/.github/workflows/release.yml)<br>[.github/workflows/test-build.yml](../../../../sources/vasu-devs__JustHireMe/.github/workflows/test-build.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 9 | [SECURITY.md](../../../../sources/vasu-devs__JustHireMe/SECURITY.md)<br>[website/public/legal/privacy-policy.html](../../../../sources/vasu-devs__JustHireMe/website/public/legal/privacy-policy.html)<br>[docs/legal/privacy-policy.md](../../../../sources/vasu-devs__JustHireMe/docs/legal/privacy-policy.md)<br>[backend/tests/test_security_hardening.py](../../../../sources/vasu-devs__JustHireMe/backend/tests/test_security_hardening.py)<br>[backend/tests/test_url_guard.py](../../../../sources/vasu-devs__JustHireMe/backend/tests/test_url_guard.py)<br>[backend/tests/test_ws_auth.py](../../../../sources/vasu-devs__JustHireMe/backend/tests/test_ws_auth.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `docs/MCP.md`, `backend/mcp_server.py`, `backend/tests/test_mcp_server.py`.
2. entrypoint를 따라 실행 흐름 확인: `website/src/main.jsx`, `src-tauri/src/main.rs`, `src-tauri/resources/bin/chromium/.gitkeep`.
3. agent/tool runtime 매핑: `src/shared/hooks/useAppVersion.ts`, `src/shared/hooks/useDueFollowups.ts`, `src/shared/hooks/useGraphStats.ts`.
4. retrieval/memory/indexing 확인: `index.html`, `website/index.html`, `website/public/legal/index.html`.
5. test/eval 파일로 동작 검증: `src/test-node.d.ts`, `src/shared/lib/leadUtils.test.ts`, `src/shared/hooks/useWS.render.test.tsx`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local first AI job intelligence workbench for scraping roles, ranking fit, and generating tailored application materials. 핵심 구조 신호는 Python, package.json, README.md, LICENSE, react, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
