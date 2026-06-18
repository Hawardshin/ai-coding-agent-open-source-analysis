# manaflow-ai/cmux 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Ghostty-based macOS terminal with vertical tabs and notifications for AI coding agents

## 요약

- 조사 단위: `sources/manaflow-ai__cmux` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 5,501 files, 1,008 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

코딩 에이전트/IDE 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=workers/presence/src/index.ts, webviews/src/App.tsx, webviews/src/main.tsx이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 코딩 에이전트 참고 구현이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | manaflow-ai/cmux |
| 주제 | 코딩 에이전트/IDE / 코딩 에이전트/IDE |
| Region | global |
| Language | Swift |
| Stars | 22309 |
| Forks | 1742 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/manaflow-ai__cmux](../../../../sources/manaflow-ai__cmux) |
| 기존 보고서 | [reports/global-trending/repositories/manaflow-ai__cmux.md](../../../global-trending/repositories/manaflow-ai__cmux.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 5501 / 1008 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .agents, .claude, .cursor, .github, .greptile, AppIcon.icon, Assets.xcassets, CLI, cmux.xcodeproj, cmux.xcworkspace, cmuxTests, cmuxUITests, daemon, design, docs, dogfood, Examples, experiments, ghostty, homebrew-cmux |
| 상위 확장자 | .swift: 3032, .mjs: 729, (none): 495, .py: 258, .ts: 182, .md: 165, .sh: 114, .png: 98, .tsx: 97, .json: 81, .jpg: 28, .yml: 22 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| web | source boundary | 44 |
| tests | validation surface | 7 |
| docs | documentation surface | 6 |
| Packages/macOS | Packages workspace | 5 |
| .github | ci surface | 1 |
| AppIcon.icon | top-level component | 1 |
| Assets.xcassets | top-level component | 1 |
| CLI | top-level component | 1 |
| cmux.xcodeproj | top-level component | 1 |
| cmux.xcworkspace | top-level component | 1 |
| cmuxTests | validation surface | 1 |
| cmuxUITests | validation surface | 1 |
| daemon | top-level component | 1 |
| design | top-level component | 1 |
| dogfood | top-level component | 1 |
| Examples | top-level component | 1 |
| experiments | top-level component | 1 |
| ghostty | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | agent-session-web:build | sh scripts/build-agent-session-web.sh |
| test | package.json | agent-session-web:test | bun test webviews/src/agent-session/shared/*.test.ts |
| quality | package.json | biome:check | biome check . |
| utility | package.json | feed-tui | bun Resources/feed-tui/index.ts |


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
| entrypoints | [workers/presence/src/index.ts](../../../../sources/manaflow-ai__cmux/workers/presence/src/index.ts) | entrypoints signal |
| entrypoints | [webviews/src/App.tsx](../../../../sources/manaflow-ai__cmux/webviews/src/App.tsx) | entrypoints signal |
| entrypoints | [webviews/src/main.tsx](../../../../sources/manaflow-ai__cmux/webviews/src/main.tsx) | entrypoints signal |
| entrypoints | [webviews/src/agent-session/solid/main.ts](../../../../sources/manaflow-ai__cmux/webviews/src/agent-session/solid/main.ts) | entrypoints signal |
| agentRuntime | [skills.sh](../../../../sources/manaflow-ai__cmux/skills.sh) | agentRuntime signal |
| agentRuntime | [webviews/src/agent-session/shared/activityGlyph.test.ts](../../../../sources/manaflow-ai__cmux/webviews/src/agent-session/shared/activityGlyph.test.ts) | agentRuntime signal |
| agentRuntime | [webviews/src/agent-session/shared/activityGlyph.ts](../../../../sources/manaflow-ai__cmux/webviews/src/agent-session/shared/activityGlyph.ts) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/manaflow-ai__cmux/CLAUDE.md) | instruction signal |
| instruction | [Prototypes/SettingsShellLab/.codex/environments/environment.toml](../../../../sources/manaflow-ai__cmux/Prototypes/SettingsShellLab/.codex/environments/environment.toml) | instruction signal |
| instruction | [.cursor/rules/main.mdc](../../../../sources/manaflow-ai__cmux/.cursor/rules/main.mdc) | instruction signal |
| security | [workers/presence/test/auth.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/auth.test.ts) | security signal |
| security | [workers/presence/src/auth.ts](../../../../sources/manaflow-ai__cmux/workers/presence/src/auth.ts) | security signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 10 | [workers/presence/src/index.ts](../../../../sources/manaflow-ai__cmux/workers/presence/src/index.ts)<br>[webviews/src/App.tsx](../../../../sources/manaflow-ai__cmux/webviews/src/App.tsx)<br>[webviews/src/main.tsx](../../../../sources/manaflow-ai__cmux/webviews/src/main.tsx)<br>[webviews/src/agent-session/solid/main.ts](../../../../sources/manaflow-ai__cmux/webviews/src/agent-session/solid/main.ts)<br>[webviews/src/agent-session/react/main.ts](../../../../sources/manaflow-ai__cmux/webviews/src/agent-session/react/main.ts)<br>[Resources/bin/cmux-claude-wrapper](../../../../sources/manaflow-ai__cmux/Resources/bin/cmux-claude-wrapper)<br>[Resources/bin/grok](../../../../sources/manaflow-ai__cmux/Resources/bin/grok)<br>[Resources/bin/open](../../../../sources/manaflow-ai__cmux/Resources/bin/open) |
| agentRuntime | 138 | [skills.sh](../../../../sources/manaflow-ai__cmux/skills.sh)<br>[webviews/src/agent-session/solid/main.ts](../../../../sources/manaflow-ai__cmux/webviews/src/agent-session/solid/main.ts)<br>[webviews/src/agent-session/shared/activityGlyph.test.ts](../../../../sources/manaflow-ai__cmux/webviews/src/agent-session/shared/activityGlyph.test.ts)<br>[webviews/src/agent-session/shared/activityGlyph.ts](../../../../sources/manaflow-ai__cmux/webviews/src/agent-session/shared/activityGlyph.ts)<br>[webviews/src/agent-session/shared/bridge.ts](../../../../sources/manaflow-ai__cmux/webviews/src/agent-session/shared/bridge.ts)<br>[webviews/src/agent-session/shared/codexClassNames.ts](../../../../sources/manaflow-ai__cmux/webviews/src/agent-session/shared/codexClassNames.ts)<br>[webviews/src/agent-session/shared/codexIconPaths.ts](../../../../sources/manaflow-ai__cmux/webviews/src/agent-session/shared/codexIconPaths.ts)<br>[webviews/src/agent-session/shared/composerLayout.test.ts](../../../../sources/manaflow-ai__cmux/webviews/src/agent-session/shared/composerLayout.test.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 58 | [workers/presence/src/index.ts](../../../../sources/manaflow-ai__cmux/workers/presence/src/index.ts)<br>[webviews/index.html](../../../../sources/manaflow-ai__cmux/webviews/index.html)<br>[web/tests/docs-search-index.test.ts](../../../../sources/manaflow-ai__cmux/web/tests/docs-search-index.test.ts)<br>[web/services/vms/drivers/index.ts](../../../../sources/manaflow-ai__cmux/web/services/vms/drivers/index.ts)<br>[tests/test_cli_version_memory_guard.py](../../../../sources/manaflow-ai__cmux/tests/test_cli_version_memory_guard.py)<br>[scripts/capture-memory.sh](../../../../sources/manaflow-ai__cmux/scripts/capture-memory.sh)<br>[Resources/markdown-viewer/vega-embed.min.js](../../../../sources/manaflow-ai__cmux/Resources/markdown-viewer/vega-embed.min.js)<br>[Resources/markdown-viewer/diff-viewer/chunks/chunk-24HTWSHD.mjs](../../../../sources/manaflow-ai__cmux/Resources/markdown-viewer/diff-viewer/chunks/chunk-24HTWSHD.mjs) |
| spec | 18 | [skills/cmux-architecture/SKILL.md](../../../../sources/manaflow-ai__cmux/skills/cmux-architecture/SKILL.md)<br>[skills/cmux-architecture/references/concurrency-carveouts.md](../../../../sources/manaflow-ai__cmux/skills/cmux-architecture/references/concurrency-carveouts.md)<br>[skills/cmux-architecture/references/file-api-discipline.md](../../../../sources/manaflow-ai__cmux/skills/cmux-architecture/references/file-api-discipline.md)<br>[skills/cmux-architecture/references/package-boundaries.md](../../../../sources/manaflow-ai__cmux/skills/cmux-architecture/references/package-boundaries.md)<br>[skills/cmux-architecture/agents/openai.yaml](../../../../sources/manaflow-ai__cmux/skills/cmux-architecture/agents/openai.yaml)<br>[plans/feat-ios-iroh/DESIGN.md](../../../../sources/manaflow-ai__cmux/plans/feat-ios-iroh/DESIGN.md)<br>[plans/feat-ios-groups-mobile/DESIGN.md](../../../../sources/manaflow-ai__cmux/plans/feat-ios-groups-mobile/DESIGN.md)<br>[plans/feat-do-device-list/DESIGN.md](../../../../sources/manaflow-ai__cmux/plans/feat-do-device-list/DESIGN.md) |
| eval | 781 | [workers/presence/tsconfig.test.json](../../../../sources/manaflow-ai__cmux/workers/presence/tsconfig.test.json)<br>[workers/presence/test/auth.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/auth.test.ts)<br>[workers/presence/test/core.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/core.test.ts)<br>[workers/presence/test/sync.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/sync.test.ts)<br>[workers/presence/test/syncStorage.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/syncStorage.test.ts)<br>[workers/presence/test/validate.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/validate.test.ts)<br>[webviews/test/actions.test.ts](../../../../sources/manaflow-ai__cmux/webviews/test/actions.test.ts)<br>[webviews/test/app.test.tsx](../../../../sources/manaflow-ai__cmux/webviews/test/app.test.tsx) |
| security | 37 | [workers/presence/test/auth.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/auth.test.ts)<br>[workers/presence/src/auth.ts](../../../../sources/manaflow-ai__cmux/workers/presence/src/auth.ts)<br>[webviews/scripts/verify-tanstack-router-security.mjs](../../../../sources/manaflow-ai__cmux/webviews/scripts/verify-tanstack-router-security.mjs)<br>[web/security-headers.ts](../../../../sources/manaflow-ai__cmux/web/security-headers.ts)<br>[web/tests/security-headers.test.ts](../../../../sources/manaflow-ai__cmux/web/tests/security-headers.test.ts)<br>[web/tests/vm-route-auth.test.ts](../../../../sources/manaflow-ai__cmux/web/tests/vm-route-auth.test.ts)<br>[web/services/vms/auth.ts](../../../../sources/manaflow-ai__cmux/web/services/vms/auth.ts)<br>[web/scripts/test-cloud-vm-ws-auth.ts](../../../../sources/manaflow-ai__cmux/web/scripts/test-cloud-vm-ws-auth.ts) |
| ci | 22 | [scripts/ci/run-app-host-xcodebuild.sh](../../../../sources/manaflow-ai__cmux/scripts/ci/run-app-host-xcodebuild.sh)<br>[scripts/ci/sanitize-xcode-source-packages-cache.py](../../../../sources/manaflow-ai__cmux/scripts/ci/sanitize-xcode-source-packages-cache.py)<br>[scripts/ci/upload-r2-object.py](../../../../sources/manaflow-ai__cmux/scripts/ci/upload-r2-object.py)<br>[scripts/ci/virtual-display-lock.sh](../../../../sources/manaflow-ai__cmux/scripts/ci/virtual-display-lock.sh)<br>[scripts/ci/xcodebuild_noninteractive.py](../../../../sources/manaflow-ai__cmux/scripts/ci/xcodebuild_noninteractive.py)<br>[.github/workflows/build-ghosttykit.yml](../../../../sources/manaflow-ai__cmux/.github/workflows/build-ghosttykit.yml)<br>[.github/workflows/ci-macos-compat.yml](../../../../sources/manaflow-ai__cmux/.github/workflows/ci-macos-compat.yml)<br>[.github/workflows/ci.yml](../../../../sources/manaflow-ai__cmux/.github/workflows/ci.yml) |
| container | 2 | [web/docker-compose.db.yml](../../../../sources/manaflow-ai__cmux/web/docker-compose.db.yml)<br>[tests/fixtures/ssh-remote/Dockerfile](../../../../sources/manaflow-ai__cmux/tests/fixtures/ssh-remote/Dockerfile) |
| instruction | 3 | [CLAUDE.md](../../../../sources/manaflow-ai__cmux/CLAUDE.md)<br>[Prototypes/SettingsShellLab/.codex/environments/environment.toml](../../../../sources/manaflow-ai__cmux/Prototypes/SettingsShellLab/.codex/environments/environment.toml)<br>[.cursor/rules/main.mdc](../../../../sources/manaflow-ai__cmux/.cursor/rules/main.mdc) |
| docs | 115 | [README.ar.md](../../../../sources/manaflow-ai__cmux/README.ar.md)<br>[README.bs.md](../../../../sources/manaflow-ai__cmux/README.bs.md)<br>[README.da.md](../../../../sources/manaflow-ai__cmux/README.da.md)<br>[README.de.md](../../../../sources/manaflow-ai__cmux/README.de.md)<br>[README.es.md](../../../../sources/manaflow-ai__cmux/README.es.md)<br>[README.fr.md](../../../../sources/manaflow-ai__cmux/README.fr.md)<br>[README.it.md](../../../../sources/manaflow-ai__cmux/README.it.md)<br>[README.ja.md](../../../../sources/manaflow-ai__cmux/README.ja.md) |
| config | 14 | [package.json](../../../../sources/manaflow-ai__cmux/package.json)<br>[workers/presence/package.json](../../../../sources/manaflow-ai__cmux/workers/presence/package.json)<br>[workers/presence/tsconfig.json](../../../../sources/manaflow-ai__cmux/workers/presence/tsconfig.json)<br>[webviews/package.json](../../../../sources/manaflow-ai__cmux/webviews/package.json)<br>[webviews/tsconfig.json](../../../../sources/manaflow-ai__cmux/webviews/tsconfig.json)<br>[web/package.json](../../../../sources/manaflow-ai__cmux/web/package.json)<br>[web/tsconfig.json](../../../../sources/manaflow-ai__cmux/web/tsconfig.json)<br>[Native/CommandPaletteNucleoFFI/Cargo.lock](../../../../sources/manaflow-ai__cmux/Native/CommandPaletteNucleoFFI/Cargo.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 781 | [workers/presence/tsconfig.test.json](../../../../sources/manaflow-ai__cmux/workers/presence/tsconfig.test.json)<br>[workers/presence/test/auth.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/auth.test.ts)<br>[workers/presence/test/core.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/core.test.ts)<br>[workers/presence/test/sync.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/sync.test.ts)<br>[workers/presence/test/syncStorage.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/syncStorage.test.ts)<br>[workers/presence/test/validate.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/validate.test.ts) |
| CI workflow | 22 | [scripts/ci/run-app-host-xcodebuild.sh](../../../../sources/manaflow-ai__cmux/scripts/ci/run-app-host-xcodebuild.sh)<br>[scripts/ci/sanitize-xcode-source-packages-cache.py](../../../../sources/manaflow-ai__cmux/scripts/ci/sanitize-xcode-source-packages-cache.py)<br>[scripts/ci/upload-r2-object.py](../../../../sources/manaflow-ai__cmux/scripts/ci/upload-r2-object.py)<br>[scripts/ci/virtual-display-lock.sh](../../../../sources/manaflow-ai__cmux/scripts/ci/virtual-display-lock.sh)<br>[scripts/ci/xcodebuild_noninteractive.py](../../../../sources/manaflow-ai__cmux/scripts/ci/xcodebuild_noninteractive.py)<br>[.github/workflows/build-ghosttykit.yml](../../../../sources/manaflow-ai__cmux/.github/workflows/build-ghosttykit.yml) |
| 컨테이너/배포 | 2 | [web/docker-compose.db.yml](../../../../sources/manaflow-ai__cmux/web/docker-compose.db.yml)<br>[tests/fixtures/ssh-remote/Dockerfile](../../../../sources/manaflow-ai__cmux/tests/fixtures/ssh-remote/Dockerfile) |
| 보안/정책 | 37 | [workers/presence/test/auth.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/auth.test.ts)<br>[workers/presence/src/auth.ts](../../../../sources/manaflow-ai__cmux/workers/presence/src/auth.ts)<br>[webviews/scripts/verify-tanstack-router-security.mjs](../../../../sources/manaflow-ai__cmux/webviews/scripts/verify-tanstack-router-security.mjs)<br>[web/security-headers.ts](../../../../sources/manaflow-ai__cmux/web/security-headers.ts)<br>[web/tests/security-headers.test.ts](../../../../sources/manaflow-ai__cmux/web/tests/security-headers.test.ts)<br>[web/tests/vm-route-auth.test.ts](../../../../sources/manaflow-ai__cmux/web/tests/vm-route-auth.test.ts) |
| 에이전트 지시문 | 3 | [CLAUDE.md](../../../../sources/manaflow-ai__cmux/CLAUDE.md)<br>[Prototypes/SettingsShellLab/.codex/environments/environment.toml](../../../../sources/manaflow-ai__cmux/Prototypes/SettingsShellLab/.codex/environments/environment.toml)<br>[.cursor/rules/main.mdc](../../../../sources/manaflow-ai__cmux/.cursor/rules/main.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `workers/presence/src/index.ts`, `webviews/src/App.tsx`, `webviews/src/main.tsx`.
2. entrypoint를 따라 실행 흐름 확인: `workers/presence/src/index.ts`, `webviews/src/App.tsx`, `webviews/src/main.tsx`.
3. agent/tool runtime 매핑: `skills.sh`, `webviews/src/agent-session/solid/main.ts`, `webviews/src/agent-session/shared/activityGlyph.test.ts`.
4. retrieval/memory/indexing 확인: `workers/presence/src/index.ts`, `webviews/index.html`, `web/tests/docs-search-index.test.ts`.
5. test/eval 파일로 동작 검증: `workers/presence/tsconfig.test.json`, `workers/presence/test/auth.test.ts`, `workers/presence/test/core.test.ts`.

## 기존 레포 인사이트

코딩 에이전트/IDE 관점에서 Ghostty based macOS terminal with vertical tabs and notifications for AI coding agents. 핵심 구조 신호는 Swift, package.json, README.md, CLAUDE.md, LICENSE, react이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 코딩 에이전트/IDE 레포입니다. 활용 관점은 코딩 에이전트 참고 구현이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
