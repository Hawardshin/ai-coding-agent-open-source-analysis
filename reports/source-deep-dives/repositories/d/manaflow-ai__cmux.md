# manaflow-ai/cmux Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Ghostty-based macOS terminal with vertical tabs and notifications for AI coding agents

## 요약

- 조사 단위: `sources/manaflow-ai__cmux` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 5,501 files, 1,008 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

코딩 에이전트/IDE 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=workers/presence/src/index.ts, webviews/src/App.tsx, webviews/src/main.tsx이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 coding-agent reference implementation이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | manaflow-ai/cmux |
| Topic | Coding Agent and IDE / 코딩 에이전트/IDE |
| Region | global |
| Language | Swift |
| Stars | 22309 |
| Forks | 1742 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/manaflow-ai__cmux](../../../../sources/manaflow-ai__cmux) |
| Existing report | [reports/global-trending/repositories/manaflow-ai__cmux.md](../../../global-trending/repositories/manaflow-ai__cmux.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 5501 / 1008 |
| Max observed depth | 8 |
| Top directories | .agents, .claude, .cursor, .github, .greptile, AppIcon.icon, Assets.xcassets, CLI, cmux.xcodeproj, cmux.xcworkspace, cmuxTests, cmuxUITests, daemon, design, docs, dogfood, Examples, experiments, ghostty, homebrew-cmux |
| Top extensions | .swift: 3032, .mjs: 729, (none): 495, .py: 258, .ts: 182, .md: 165, .sh: 114, .png: 98, .tsx: 97, .json: 81, .jpg: 28, .yml: 22 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | agent-session-web:build | sh scripts/build-agent-session-web.sh |
| test | package.json | agent-session-web:test | bun test webviews/src/agent-session/shared/*.test.ts |
| quality | package.json | biome:check | biome check . |
| utility | package.json | feed-tui | bun Resources/feed-tui/index.ts |


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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 10 | [workers/presence/src/index.ts](../../../../sources/manaflow-ai__cmux/workers/presence/src/index.ts)<br>[webviews/src/App.tsx](../../../../sources/manaflow-ai__cmux/webviews/src/App.tsx)<br>[webviews/src/main.tsx](../../../../sources/manaflow-ai__cmux/webviews/src/main.tsx)<br>[webviews/src/agent-session/solid/main.ts](../../../../sources/manaflow-ai__cmux/webviews/src/agent-session/solid/main.ts)<br>[webviews/src/agent-session/react/main.ts](../../../../sources/manaflow-ai__cmux/webviews/src/agent-session/react/main.ts)<br>[Resources/bin/cmux-claude-wrapper](../../../../sources/manaflow-ai__cmux/Resources/bin/cmux-claude-wrapper)<br>[Resources/bin/grok](../../../../sources/manaflow-ai__cmux/Resources/bin/grok)<br>[Resources/bin/open](../../../../sources/manaflow-ai__cmux/Resources/bin/open) |
| agentRuntime | 138 | [skills.sh](../../../../sources/manaflow-ai__cmux/skills.sh)<br>[webviews/src/agent-session/solid/main.ts](../../../../sources/manaflow-ai__cmux/webviews/src/agent-session/solid/main.ts)<br>[webviews/src/agent-session/shared/activityGlyph.test.ts](../../../../sources/manaflow-ai__cmux/webviews/src/agent-session/shared/activityGlyph.test.ts)<br>[webviews/src/agent-session/shared/activityGlyph.ts](../../../../sources/manaflow-ai__cmux/webviews/src/agent-session/shared/activityGlyph.ts)<br>[webviews/src/agent-session/shared/bridge.ts](../../../../sources/manaflow-ai__cmux/webviews/src/agent-session/shared/bridge.ts)<br>[webviews/src/agent-session/shared/codexClassNames.ts](../../../../sources/manaflow-ai__cmux/webviews/src/agent-session/shared/codexClassNames.ts)<br>[webviews/src/agent-session/shared/codexIconPaths.ts](../../../../sources/manaflow-ai__cmux/webviews/src/agent-session/shared/codexIconPaths.ts)<br>[webviews/src/agent-session/shared/composerLayout.test.ts](../../../../sources/manaflow-ai__cmux/webviews/src/agent-session/shared/composerLayout.test.ts) |
| mcp | 0 | not obvious |
| retrieval | 58 | [workers/presence/src/index.ts](../../../../sources/manaflow-ai__cmux/workers/presence/src/index.ts)<br>[webviews/index.html](../../../../sources/manaflow-ai__cmux/webviews/index.html)<br>[web/tests/docs-search-index.test.ts](../../../../sources/manaflow-ai__cmux/web/tests/docs-search-index.test.ts)<br>[web/services/vms/drivers/index.ts](../../../../sources/manaflow-ai__cmux/web/services/vms/drivers/index.ts)<br>[tests/test_cli_version_memory_guard.py](../../../../sources/manaflow-ai__cmux/tests/test_cli_version_memory_guard.py)<br>[scripts/capture-memory.sh](../../../../sources/manaflow-ai__cmux/scripts/capture-memory.sh)<br>[Resources/markdown-viewer/vega-embed.min.js](../../../../sources/manaflow-ai__cmux/Resources/markdown-viewer/vega-embed.min.js)<br>[Resources/markdown-viewer/diff-viewer/chunks/chunk-24HTWSHD.mjs](../../../../sources/manaflow-ai__cmux/Resources/markdown-viewer/diff-viewer/chunks/chunk-24HTWSHD.mjs) |
| spec | 18 | [skills/cmux-architecture/SKILL.md](../../../../sources/manaflow-ai__cmux/skills/cmux-architecture/SKILL.md)<br>[skills/cmux-architecture/references/concurrency-carveouts.md](../../../../sources/manaflow-ai__cmux/skills/cmux-architecture/references/concurrency-carveouts.md)<br>[skills/cmux-architecture/references/file-api-discipline.md](../../../../sources/manaflow-ai__cmux/skills/cmux-architecture/references/file-api-discipline.md)<br>[skills/cmux-architecture/references/package-boundaries.md](../../../../sources/manaflow-ai__cmux/skills/cmux-architecture/references/package-boundaries.md)<br>[skills/cmux-architecture/agents/openai.yaml](../../../../sources/manaflow-ai__cmux/skills/cmux-architecture/agents/openai.yaml)<br>[plans/feat-ios-iroh/DESIGN.md](../../../../sources/manaflow-ai__cmux/plans/feat-ios-iroh/DESIGN.md)<br>[plans/feat-ios-groups-mobile/DESIGN.md](../../../../sources/manaflow-ai__cmux/plans/feat-ios-groups-mobile/DESIGN.md)<br>[plans/feat-do-device-list/DESIGN.md](../../../../sources/manaflow-ai__cmux/plans/feat-do-device-list/DESIGN.md) |
| eval | 781 | [workers/presence/tsconfig.test.json](../../../../sources/manaflow-ai__cmux/workers/presence/tsconfig.test.json)<br>[workers/presence/test/auth.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/auth.test.ts)<br>[workers/presence/test/core.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/core.test.ts)<br>[workers/presence/test/sync.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/sync.test.ts)<br>[workers/presence/test/syncStorage.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/syncStorage.test.ts)<br>[workers/presence/test/validate.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/validate.test.ts)<br>[webviews/test/actions.test.ts](../../../../sources/manaflow-ai__cmux/webviews/test/actions.test.ts)<br>[webviews/test/app.test.tsx](../../../../sources/manaflow-ai__cmux/webviews/test/app.test.tsx) |
| security | 37 | [workers/presence/test/auth.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/auth.test.ts)<br>[workers/presence/src/auth.ts](../../../../sources/manaflow-ai__cmux/workers/presence/src/auth.ts)<br>[webviews/scripts/verify-tanstack-router-security.mjs](../../../../sources/manaflow-ai__cmux/webviews/scripts/verify-tanstack-router-security.mjs)<br>[web/security-headers.ts](../../../../sources/manaflow-ai__cmux/web/security-headers.ts)<br>[web/tests/security-headers.test.ts](../../../../sources/manaflow-ai__cmux/web/tests/security-headers.test.ts)<br>[web/tests/vm-route-auth.test.ts](../../../../sources/manaflow-ai__cmux/web/tests/vm-route-auth.test.ts)<br>[web/services/vms/auth.ts](../../../../sources/manaflow-ai__cmux/web/services/vms/auth.ts)<br>[web/scripts/test-cloud-vm-ws-auth.ts](../../../../sources/manaflow-ai__cmux/web/scripts/test-cloud-vm-ws-auth.ts) |
| ci | 22 | [scripts/ci/run-app-host-xcodebuild.sh](../../../../sources/manaflow-ai__cmux/scripts/ci/run-app-host-xcodebuild.sh)<br>[scripts/ci/sanitize-xcode-source-packages-cache.py](../../../../sources/manaflow-ai__cmux/scripts/ci/sanitize-xcode-source-packages-cache.py)<br>[scripts/ci/upload-r2-object.py](../../../../sources/manaflow-ai__cmux/scripts/ci/upload-r2-object.py)<br>[scripts/ci/virtual-display-lock.sh](../../../../sources/manaflow-ai__cmux/scripts/ci/virtual-display-lock.sh)<br>[scripts/ci/xcodebuild_noninteractive.py](../../../../sources/manaflow-ai__cmux/scripts/ci/xcodebuild_noninteractive.py)<br>[.github/workflows/build-ghosttykit.yml](../../../../sources/manaflow-ai__cmux/.github/workflows/build-ghosttykit.yml)<br>[.github/workflows/ci-macos-compat.yml](../../../../sources/manaflow-ai__cmux/.github/workflows/ci-macos-compat.yml)<br>[.github/workflows/ci.yml](../../../../sources/manaflow-ai__cmux/.github/workflows/ci.yml) |
| container | 2 | [web/docker-compose.db.yml](../../../../sources/manaflow-ai__cmux/web/docker-compose.db.yml)<br>[tests/fixtures/ssh-remote/Dockerfile](../../../../sources/manaflow-ai__cmux/tests/fixtures/ssh-remote/Dockerfile) |
| instruction | 3 | [CLAUDE.md](../../../../sources/manaflow-ai__cmux/CLAUDE.md)<br>[Prototypes/SettingsShellLab/.codex/environments/environment.toml](../../../../sources/manaflow-ai__cmux/Prototypes/SettingsShellLab/.codex/environments/environment.toml)<br>[.cursor/rules/main.mdc](../../../../sources/manaflow-ai__cmux/.cursor/rules/main.mdc) |
| docs | 115 | [README.ar.md](../../../../sources/manaflow-ai__cmux/README.ar.md)<br>[README.bs.md](../../../../sources/manaflow-ai__cmux/README.bs.md)<br>[README.da.md](../../../../sources/manaflow-ai__cmux/README.da.md)<br>[README.de.md](../../../../sources/manaflow-ai__cmux/README.de.md)<br>[README.es.md](../../../../sources/manaflow-ai__cmux/README.es.md)<br>[README.fr.md](../../../../sources/manaflow-ai__cmux/README.fr.md)<br>[README.it.md](../../../../sources/manaflow-ai__cmux/README.it.md)<br>[README.ja.md](../../../../sources/manaflow-ai__cmux/README.ja.md) |
| config | 14 | [package.json](../../../../sources/manaflow-ai__cmux/package.json)<br>[workers/presence/package.json](../../../../sources/manaflow-ai__cmux/workers/presence/package.json)<br>[workers/presence/tsconfig.json](../../../../sources/manaflow-ai__cmux/workers/presence/tsconfig.json)<br>[webviews/package.json](../../../../sources/manaflow-ai__cmux/webviews/package.json)<br>[webviews/tsconfig.json](../../../../sources/manaflow-ai__cmux/webviews/tsconfig.json)<br>[web/package.json](../../../../sources/manaflow-ai__cmux/web/package.json)<br>[web/tsconfig.json](../../../../sources/manaflow-ai__cmux/web/tsconfig.json)<br>[Native/CommandPaletteNucleoFFI/Cargo.lock](../../../../sources/manaflow-ai__cmux/Native/CommandPaletteNucleoFFI/Cargo.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 781 | [workers/presence/tsconfig.test.json](../../../../sources/manaflow-ai__cmux/workers/presence/tsconfig.test.json)<br>[workers/presence/test/auth.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/auth.test.ts)<br>[workers/presence/test/core.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/core.test.ts)<br>[workers/presence/test/sync.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/sync.test.ts)<br>[workers/presence/test/syncStorage.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/syncStorage.test.ts)<br>[workers/presence/test/validate.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/validate.test.ts) |
| CI workflows | 22 | [scripts/ci/run-app-host-xcodebuild.sh](../../../../sources/manaflow-ai__cmux/scripts/ci/run-app-host-xcodebuild.sh)<br>[scripts/ci/sanitize-xcode-source-packages-cache.py](../../../../sources/manaflow-ai__cmux/scripts/ci/sanitize-xcode-source-packages-cache.py)<br>[scripts/ci/upload-r2-object.py](../../../../sources/manaflow-ai__cmux/scripts/ci/upload-r2-object.py)<br>[scripts/ci/virtual-display-lock.sh](../../../../sources/manaflow-ai__cmux/scripts/ci/virtual-display-lock.sh)<br>[scripts/ci/xcodebuild_noninteractive.py](../../../../sources/manaflow-ai__cmux/scripts/ci/xcodebuild_noninteractive.py)<br>[.github/workflows/build-ghosttykit.yml](../../../../sources/manaflow-ai__cmux/.github/workflows/build-ghosttykit.yml) |
| Containers / deploy | 2 | [web/docker-compose.db.yml](../../../../sources/manaflow-ai__cmux/web/docker-compose.db.yml)<br>[tests/fixtures/ssh-remote/Dockerfile](../../../../sources/manaflow-ai__cmux/tests/fixtures/ssh-remote/Dockerfile) |
| Security / policy | 37 | [workers/presence/test/auth.test.ts](../../../../sources/manaflow-ai__cmux/workers/presence/test/auth.test.ts)<br>[workers/presence/src/auth.ts](../../../../sources/manaflow-ai__cmux/workers/presence/src/auth.ts)<br>[webviews/scripts/verify-tanstack-router-security.mjs](../../../../sources/manaflow-ai__cmux/webviews/scripts/verify-tanstack-router-security.mjs)<br>[web/security-headers.ts](../../../../sources/manaflow-ai__cmux/web/security-headers.ts)<br>[web/tests/security-headers.test.ts](../../../../sources/manaflow-ai__cmux/web/tests/security-headers.test.ts)<br>[web/tests/vm-route-auth.test.ts](../../../../sources/manaflow-ai__cmux/web/tests/vm-route-auth.test.ts) |
| Agent instructions | 3 | [CLAUDE.md](../../../../sources/manaflow-ai__cmux/CLAUDE.md)<br>[Prototypes/SettingsShellLab/.codex/environments/environment.toml](../../../../sources/manaflow-ai__cmux/Prototypes/SettingsShellLab/.codex/environments/environment.toml)<br>[.cursor/rules/main.mdc](../../../../sources/manaflow-ai__cmux/.cursor/rules/main.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `workers/presence/src/index.ts`, `webviews/src/App.tsx`, `webviews/src/main.tsx`.
2. Trace execution through entrypoints: `workers/presence/src/index.ts`, `webviews/src/App.tsx`, `webviews/src/main.tsx`.
3. Map agent/tool runtime through: `skills.sh`, `webviews/src/agent-session/solid/main.ts`, `webviews/src/agent-session/shared/activityGlyph.test.ts`.
4. Inspect retrieval/memory/indexing through: `workers/presence/src/index.ts`, `webviews/index.html`, `web/tests/docs-search-index.test.ts`.
5. Verify behavior through test/eval files: `workers/presence/tsconfig.test.json`, `workers/presence/test/auth.test.ts`, `workers/presence/test/core.test.ts`.

## Existing Repository Insight

코딩 에이전트/IDE 관점에서 Ghostty based macOS terminal with vertical tabs and notifications for AI coding agents. 핵심 구조 신호는 Swift, package.json, README.md, CLAUDE.md, LICENSE, react이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 코딩 에이전트/IDE 레포입니다. 활용 관점은 coding-agent reference implementation이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
