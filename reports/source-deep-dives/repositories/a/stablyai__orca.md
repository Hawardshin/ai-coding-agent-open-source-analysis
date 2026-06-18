# stablyai/orca Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Orca is the ADE for working with a fleet of parallel agents. Run any coding agent with your own subscription. Available on desktop and mobile.

## 요약

- 조사 단위: `sources/stablyai__orca` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 5,487 files, 253 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

코딩 에이전트/IDE 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/renderer/src/App.tsx, src/renderer/src/main.tsx, src/renderer/src/web/main.tsx이고, 의존성 단서는 next, react, vscode, electron, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 coding-agent reference implementation이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | stablyai/orca |
| Topic | Coding Agent and IDE / 코딩 에이전트/IDE |
| Region | global |
| Language | TypeScript |
| Stars | 5221 |
| Forks | 368 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/stablyai__orca](../../../../sources/stablyai__orca) |
| Existing report | [reports/global-trending/repositories/stablyai__orca.md](../../../global-trending/repositories/stablyai__orca.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 5487 / 253 |
| Max observed depth | 11 |
| Top directories | .github, .husky, .visual-evidence, Casks, config, docs, mobile, native, notes, resources, skills, src, tests, tools |
| Top extensions | .ts: 4150, .tsx: 955, .mjs: 96, .md: 59, .json: 43, .gif: 33, .jpg: 27, .swift: 18, .yml: 17, (none): 16, .png: 13, .mp3: 9 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 118 |
| tests | validation surface | 83 |
| docs | documentation surface | 37 |
| .github | ci surface | 1 |
| Casks | top-level component | 1 |
| config | top-level component | 1 |
| mobile | top-level component | 1 |
| native | top-level component | 1 |
| notes | top-level component | 1 |
| resources | top-level component | 1 |
| skills | top-level component | 1 |
| tools | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| quality | package.json | format | oxfmt --write . |
| test | package.json | lint | oxlint && pnpm run lint:switch-exhaustiveness && node config/scripts/check-styled-scrollbars.mjs && pnpm run verify:localization-catalog && pnpm run verify:localization-coverage |
| quality | package.json | lint:react-doctor | oxlint --config config/oxlint-react-doctor.json |
| quality | package.json | lint:react-doctor:changed | node config/scripts/lint-react-doctor-changed.mjs |
| test | package.json | lint:switch-exhaustiveness | oxlint --type-aware --config config/oxlint-switch-exhaustiveness.json src/main src/preload src/shared src/relay src/cli src/renderer/src config tests --quiet |
| utility | package.json | prepare | husky |
| test | package.json | test | node config/scripts/ensure-native-runtime.mjs --runtime=node && vitest run --config config/vitest.config.ts |
| quality | package.json | check:styled-scrollbars | node config/scripts/check-styled-scrollbars.mjs |
| quality | package.json | check:feature-wall-assets | node config/scripts/check-feature-wall-assets.mjs |
| utility | package.json | verify:macos-entitlements | node config/scripts/verify-macos-entitlements.mjs |
| utility | package.json | vendor:feature-wall-assets | node config/scripts/vendor-feature-wall-assets.mjs |
| quality | package.json | tc:node | pnpm run typecheck:node |
| quality | package.json | tc:cli | pnpm run typecheck:cli |
| quality | package.json | tc:web | pnpm run typecheck:web |
| quality | package.json | tc | pnpm run typecheck |
| quality | package.json | typecheck:node | tsgo --noEmit -p config/tsconfig.node.json |
| quality | package.json | typecheck:cli | tsgo --noEmit -p config/tsconfig.tc.cli.json |
| quality | package.json | typecheck:web | tsgo --noEmit -p config/tsconfig.tc.web.json |
| quality | package.json | typecheck | tsgo --noEmit -p config/tsconfig.node.json && tsgo --noEmit -p config/tsconfig.tc.cli.json && tsgo --noEmit -p config/tsconfig.tc.web.json |
| quality | package.json | typecheck:tsc:node | tsc --noEmit -p config/tsconfig.node.json --composite false |
| quality | package.json | typecheck:tsc:cli | tsc --noEmit -p config/tsconfig.cli.json --composite false |
| quality | package.json | typecheck:tsc:web | tsc --noEmit -p config/tsconfig.web.json --composite false |
| quality | package.json | typecheck:tsc | tsc --noEmit -p config/tsconfig.node.json --composite false && tsc --noEmit -p config/tsconfig.cli.json --composite false && tsc --noEmit -p config/tsconfig.web.json --composite false |
| utility | package.json | ensure:electron-runtime | node config/scripts/ensure-native-runtime.mjs --runtime=electron |
| serve-dev | package.json | start | pnpm run ensure:electron-runtime && electron-vite preview |
| serve-dev | package.json | dev | pnpm run ensure:electron-runtime && node config/scripts/run-electron-vite-dev.mjs |
| serve-dev | package.json | dev-stable-name | pnpm run ensure:electron-runtime && node config/scripts/run-electron-vite-dev.mjs --stable-name |
| serve-dev | package.json | dev:web | vite --config vite.web.config.ts --host 127.0.0.1 |
| build | package.json | build:relay | node config/scripts/build-relay.mjs |
| build | package.json | build:computer-macos | node config/scripts/build-computer-macos.mjs |
| build | package.json | build:native | node config/scripts/build-native-for-platform.mjs |
| utility | package.json | smoke:computer | node config/scripts/computer-use-smoke.mjs |
| utility | package.json | verify:computer-native | node config/scripts/verify-computer-native.mjs |
| utility | package.json | verify:cli-bin | node config/scripts/verify-cli-bin.mjs |
| utility | package.json | verify:localization-catalog | node config/scripts/verify-localization-catalog.mjs |
| utility | package.json | sync:localization-catalog | node config/scripts/verify-localization-catalog.mjs --fix |
| utility | package.json | bootstrap:locale-catalog | node config/scripts/bootstrap-locale-catalog.mjs |
| utility | package.json | bootstrap:zh-catalog | node config/scripts/bootstrap-zh-catalog.mjs |
| utility | package.json | bootstrap:ko-catalog | node config/scripts/bootstrap-locale-catalog.mjs --locale ko |
| utility | package.json | bootstrap:ja-catalog | node config/scripts/bootstrap-locale-catalog.mjs --locale ja |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | next, react |
| developerSurface | vscode, electron |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [src/renderer/src/App.tsx](../../../../sources/stablyai__orca/src/renderer/src/App.tsx) | entrypoints signal |
| entrypoints | [src/renderer/src/main.tsx](../../../../sources/stablyai__orca/src/renderer/src/main.tsx) | entrypoints signal |
| entrypoints | [src/renderer/src/web/main.tsx](../../../../sources/stablyai__orca/src/renderer/src/web/main.tsx) | entrypoints signal |
| entrypoints | [src/main/agent-hooks/server.test.ts](../../../../sources/stablyai__orca/src/main/agent-hooks/server.test.ts) | entrypoints signal |
| agentRuntime | [AGENTS.md](../../../../sources/stablyai__orca/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/repro-macos-renderer-close-teardown.cjs](../../../../sources/stablyai__orca/tools/repro-macos-renderer-close-teardown.cjs) | agentRuntime signal |
| agentRuntime | [tools/spikes/.gitignore](../../../../sources/stablyai__orca/tools/spikes/.gitignore) | agentRuntime signal |
| agentRuntime | [tools/benchmarks/daemon-coldstart-bench.mjs](../../../../sources/stablyai__orca/tools/benchmarks/daemon-coldstart-bench.mjs) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/stablyai__orca/CLAUDE.md) | instruction signal |
| instruction | [tests/e2e/AGENTS.md](../../../../sources/stablyai__orca/tests/e2e/AGENTS.md) | instruction signal |
| security | [src/shared/codex-auth-errors.ts](../../../../sources/stablyai__orca/src/shared/codex-auth-errors.ts) | security signal |
| security | [src/shared/github-auth-types.ts](../../../../sources/stablyai__orca/src/shared/github-auth-types.ts) | security signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 9 | [src/renderer/src/App.tsx](../../../../sources/stablyai__orca/src/renderer/src/App.tsx)<br>[src/renderer/src/main.tsx](../../../../sources/stablyai__orca/src/renderer/src/main.tsx)<br>[src/renderer/src/web/main.tsx](../../../../sources/stablyai__orca/src/renderer/src/web/main.tsx)<br>[src/main/agent-hooks/server.test.ts](../../../../sources/stablyai__orca/src/main/agent-hooks/server.test.ts)<br>[src/main/agent-hooks/server.ts](../../../../sources/stablyai__orca/src/main/agent-hooks/server.ts)<br>[resources/win32/bin/orca.cmd](../../../../sources/stablyai__orca/resources/win32/bin/orca.cmd)<br>[resources/linux/bin/orca-ide](../../../../sources/stablyai__orca/resources/linux/bin/orca-ide)<br>[resources/darwin/bin/orca](../../../../sources/stablyai__orca/resources/darwin/bin/orca) |
| agentRuntime | 279 | [AGENTS.md](../../../../sources/stablyai__orca/AGENTS.md)<br>[tools/repro-macos-renderer-close-teardown.cjs](../../../../sources/stablyai__orca/tools/repro-macos-renderer-close-teardown.cjs)<br>[tools/spikes/.gitignore](../../../../sources/stablyai__orca/tools/spikes/.gitignore)<br>[tools/benchmarks/daemon-coldstart-bench.mjs](../../../../sources/stablyai__orca/tools/benchmarks/daemon-coldstart-bench.mjs)<br>[tools/benchmarks/startup-time-bench.mjs](../../../../sources/stablyai__orca/tools/benchmarks/startup-time-bench.mjs)<br>[tools/benchmarks/results/startup-acl-fix-2026-06-10T19-37-58-671Z.json](../../../../sources/stablyai__orca/tools/benchmarks/results/startup-acl-fix-2026-06-10T19-37-58-671Z.json)<br>[tools/benchmarks/results/startup-acl-fix-steady-2026-06-10T19-41-40-683Z.json](../../../../sources/stablyai__orca/tools/benchmarks/results/startup-acl-fix-steady-2026-06-10T19-41-40-683Z.json)<br>[tools/benchmarks/results/startup-baseline-2026-06-10T19-36-01-305Z.json](../../../../sources/stablyai__orca/tools/benchmarks/results/startup-baseline-2026-06-10T19-36-01-305Z.json) |
| mcp | 3 | [src/shared/mcp-config.test.ts](../../../../sources/stablyai__orca/src/shared/mcp-config.test.ts)<br>[src/shared/mcp-config.ts](../../../../sources/stablyai__orca/src/shared/mcp-config.ts)<br>[src/renderer/src/components/settings/mcp-config-inspection.ts](../../../../sources/stablyai__orca/src/renderer/src/components/settings/mcp-config-inspection.ts) |
| retrieval | 43 | [src/shared/git-history-graph.test.ts](../../../../sources/stablyai__orca/src/shared/git-history-graph.test.ts)<br>[src/shared/git-history-graph.ts](../../../../sources/stablyai__orca/src/shared/git-history-graph.ts)<br>[src/renderer/index.html](../../../../sources/stablyai__orca/src/renderer/index.html)<br>[src/renderer/web-index.html](../../../../sources/stablyai__orca/src/renderer/web-index.html)<br>[src/renderer/src/store/index.ts](../../../../sources/stablyai__orca/src/renderer/src/store/index.ts)<br>[src/renderer/src/store/slices/memory.test.ts](../../../../sources/stablyai__orca/src/renderer/src/store/slices/memory.test.ts)<br>[src/renderer/src/store/slices/memory.ts](../../../../sources/stablyai__orca/src/renderer/src/store/slices/memory.ts)<br>[src/renderer/src/runtime/sync-runtime-graph-automation-leaf.test.ts](../../../../sources/stablyai__orca/src/renderer/src/runtime/sync-runtime-graph-automation-leaf.test.ts) |
| spec | 84 | [tests/e2e/activity-agent-pane-isolation.spec.ts](../../../../sources/stablyai__orca/tests/e2e/activity-agent-pane-isolation.spec.ts)<br>[tests/e2e/add-project-default-checkout.spec.ts](../../../../sources/stablyai__orca/tests/e2e/add-project-default-checkout.spec.ts)<br>[tests/e2e/agent-session-quit-resume.spec.ts](../../../../sources/stablyai__orca/tests/e2e/agent-session-quit-resume.spec.ts)<br>[tests/e2e/artificial-opencode-terminal-load.spec.ts](../../../../sources/stablyai__orca/tests/e2e/artificial-opencode-terminal-load.spec.ts)<br>[tests/e2e/browser-tab.spec.ts](../../../../sources/stablyai__orca/tests/e2e/browser-tab.spec.ts)<br>[tests/e2e/daemon-live-session-preservation.spec.ts](../../../../sources/stablyai__orca/tests/e2e/daemon-live-session-preservation.spec.ts)<br>[tests/e2e/daemon-slow-health-check-preservation.spec.ts](../../../../sources/stablyai__orca/tests/e2e/daemon-slow-health-check-preservation.spec.ts)<br>[tests/e2e/daemon-slow-init-pty-gate.spec.ts](../../../../sources/stablyai__orca/tests/e2e/daemon-slow-init-pty-gate.spec.ts) |
| eval | 2013 | [tools/benchmarks/daemon-coldstart-bench.mjs](../../../../sources/stablyai__orca/tools/benchmarks/daemon-coldstart-bench.mjs)<br>[tools/benchmarks/startup-time-bench.mjs](../../../../sources/stablyai__orca/tools/benchmarks/startup-time-bench.mjs)<br>[tests/.gitignore](../../../../sources/stablyai__orca/tests/.gitignore)<br>[tests/playwright.config.ts](../../../../sources/stablyai__orca/tests/playwright.config.ts)<br>[tests/e2e/activity-agent-pane-isolation.spec.ts](../../../../sources/stablyai__orca/tests/e2e/activity-agent-pane-isolation.spec.ts)<br>[tests/e2e/add-project-default-checkout.spec.ts](../../../../sources/stablyai__orca/tests/e2e/add-project-default-checkout.spec.ts)<br>[tests/e2e/agent-session-quit-resume.spec.ts](../../../../sources/stablyai__orca/tests/e2e/agent-session-quit-resume.spec.ts)<br>[tests/e2e/AGENTS.md](../../../../sources/stablyai__orca/tests/e2e/AGENTS.md) |
| security | 63 | [src/shared/codex-auth-errors.ts](../../../../sources/stablyai__orca/src/shared/codex-auth-errors.ts)<br>[src/shared/github-auth-types.ts](../../../../sources/stablyai__orca/src/shared/github-auth-types.ts)<br>[src/shared/hook-command-source-policy.test.ts](../../../../sources/stablyai__orca/src/shared/hook-command-source-policy.test.ts)<br>[src/shared/hook-command-source-policy.ts](../../../../sources/stablyai__orca/src/shared/hook-command-source-policy.ts)<br>[src/shared/window-shortcut-policy.test.ts](../../../../sources/stablyai__orca/src/shared/window-shortcut-policy.test.ts)<br>[src/shared/window-shortcut-policy.ts](../../../../sources/stablyai__orca/src/shared/window-shortcut-policy.ts)<br>[src/renderer/src/lib/floating-workspace-shortcut-policy.ts](../../../../sources/stablyai__orca/src/renderer/src/lib/floating-workspace-shortcut-policy.ts)<br>[src/renderer/src/lib/local-path-open-guard.test.ts](../../../../sources/stablyai__orca/src/renderer/src/lib/local-path-open-guard.test.ts) |
| ci | 14 | [.github/workflows/computer-e2e.yml](../../../../sources/stablyai__orca/.github/workflows/computer-e2e.yml)<br>[.github/workflows/e2e.yml](../../../../sources/stablyai__orca/.github/workflows/e2e.yml)<br>[.github/workflows/golden-e2e-experiment.yml](../../../../sources/stablyai__orca/.github/workflows/golden-e2e-experiment.yml)<br>[.github/workflows/homebrew-bump.yml](../../../../sources/stablyai__orca/.github/workflows/homebrew-bump.yml)<br>[.github/workflows/issue-os-labeler.yaml](../../../../sources/stablyai__orca/.github/workflows/issue-os-labeler.yaml)<br>[.github/workflows/mobile-android-release.yml](../../../../sources/stablyai__orca/.github/workflows/mobile-android-release.yml)<br>[.github/workflows/mobile-ios-release.yml](../../../../sources/stablyai__orca/.github/workflows/mobile-ios-release.yml)<br>[.github/workflows/mobile.yml](../../../../sources/stablyai__orca/.github/workflows/mobile.yml) |
| container | 0 | not obvious |
| instruction | 3 | [AGENTS.md](../../../../sources/stablyai__orca/AGENTS.md)<br>[CLAUDE.md](../../../../sources/stablyai__orca/CLAUDE.md)<br>[tests/e2e/AGENTS.md](../../../../sources/stablyai__orca/tests/e2e/AGENTS.md) |
| docs | 85 | [README.md](../../../../sources/stablyai__orca/README.md)<br>[src/main/providers/__tests__/shell-ready-framework/README.md](../../../../sources/stablyai__orca/src/main/providers/__tests__/shell-ready-framework/README.md)<br>[mobile/README.md](../../../../sources/stablyai__orca/mobile/README.md)<br>[mobile/packages/expo-two-way-audio/README.md](../../../../sources/stablyai__orca/mobile/packages/expo-two-way-audio/README.md)<br>[docs/automations-navigation-stack.md](../../../../sources/stablyai__orca/docs/automations-navigation-stack.md)<br>[docs/compact-worktree-card-setting-graduation.md](../../../../sources/stablyai__orca/docs/compact-worktree-card-setting-graduation.md)<br>[docs/configurable-open-in-menu.md](../../../../sources/stablyai__orca/docs/configurable-open-in-menu.md)<br>[docs/droid-orchestration-group.md](../../../../sources/stablyai__orca/docs/droid-orchestration-group.md) |
| config | 6 | [package.json](../../../../sources/stablyai__orca/package.json)<br>[tsconfig.json](../../../../sources/stablyai__orca/tsconfig.json)<br>[mobile/package.json](../../../../sources/stablyai__orca/mobile/package.json)<br>[mobile/tsconfig.json](../../../../sources/stablyai__orca/mobile/tsconfig.json)<br>[mobile/packages/expo-two-way-audio/package.json](../../../../sources/stablyai__orca/mobile/packages/expo-two-way-audio/package.json)<br>[mobile/packages/expo-two-way-audio/tsconfig.json](../../../../sources/stablyai__orca/mobile/packages/expo-two-way-audio/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2013 | [tools/benchmarks/daemon-coldstart-bench.mjs](../../../../sources/stablyai__orca/tools/benchmarks/daemon-coldstart-bench.mjs)<br>[tools/benchmarks/startup-time-bench.mjs](../../../../sources/stablyai__orca/tools/benchmarks/startup-time-bench.mjs)<br>[tests/.gitignore](../../../../sources/stablyai__orca/tests/.gitignore)<br>[tests/playwright.config.ts](../../../../sources/stablyai__orca/tests/playwright.config.ts)<br>[tests/e2e/activity-agent-pane-isolation.spec.ts](../../../../sources/stablyai__orca/tests/e2e/activity-agent-pane-isolation.spec.ts)<br>[tests/e2e/add-project-default-checkout.spec.ts](../../../../sources/stablyai__orca/tests/e2e/add-project-default-checkout.spec.ts) |
| CI workflows | 14 | [.github/workflows/computer-e2e.yml](../../../../sources/stablyai__orca/.github/workflows/computer-e2e.yml)<br>[.github/workflows/e2e.yml](../../../../sources/stablyai__orca/.github/workflows/e2e.yml)<br>[.github/workflows/golden-e2e-experiment.yml](../../../../sources/stablyai__orca/.github/workflows/golden-e2e-experiment.yml)<br>[.github/workflows/homebrew-bump.yml](../../../../sources/stablyai__orca/.github/workflows/homebrew-bump.yml)<br>[.github/workflows/issue-os-labeler.yaml](../../../../sources/stablyai__orca/.github/workflows/issue-os-labeler.yaml)<br>[.github/workflows/mobile-android-release.yml](../../../../sources/stablyai__orca/.github/workflows/mobile-android-release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 63 | [src/shared/codex-auth-errors.ts](../../../../sources/stablyai__orca/src/shared/codex-auth-errors.ts)<br>[src/shared/github-auth-types.ts](../../../../sources/stablyai__orca/src/shared/github-auth-types.ts)<br>[src/shared/hook-command-source-policy.test.ts](../../../../sources/stablyai__orca/src/shared/hook-command-source-policy.test.ts)<br>[src/shared/hook-command-source-policy.ts](../../../../sources/stablyai__orca/src/shared/hook-command-source-policy.ts)<br>[src/shared/window-shortcut-policy.test.ts](../../../../sources/stablyai__orca/src/shared/window-shortcut-policy.test.ts)<br>[src/shared/window-shortcut-policy.ts](../../../../sources/stablyai__orca/src/shared/window-shortcut-policy.ts) |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/stablyai__orca/AGENTS.md)<br>[CLAUDE.md](../../../../sources/stablyai__orca/CLAUDE.md)<br>[tests/e2e/AGENTS.md](../../../../sources/stablyai__orca/tests/e2e/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/renderer/src/App.tsx`, `src/renderer/src/main.tsx`, `src/renderer/src/web/main.tsx`.
2. Trace execution through entrypoints: `src/renderer/src/App.tsx`, `src/renderer/src/main.tsx`, `src/renderer/src/web/main.tsx`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/repro-macos-renderer-close-teardown.cjs`, `tools/spikes/.gitignore`.
4. Inspect retrieval/memory/indexing through: `src/shared/git-history-graph.test.ts`, `src/shared/git-history-graph.ts`, `src/renderer/index.html`.
5. Verify behavior through test/eval files: `tools/benchmarks/daemon-coldstart-bench.mjs`, `tools/benchmarks/startup-time-bench.mjs`, `tests/.gitignore`.

## Existing Repository Insight

코딩 에이전트/IDE 관점에서 Orca is the ADE for working with a fleet of parallel agents. Run any coding agent with your own subscription. Available . 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 코딩 에이전트/IDE 레포입니다. 활용 관점은 coding-agent reference implementation이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
