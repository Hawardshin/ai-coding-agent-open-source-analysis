# openclaw/openclaw Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 19887 files, 1152 directories.

## 요약

- 조사 단위: `sources/openclaw__openclaw` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 15,000 files, 766 directories, depth score 134, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=ui/src/ui/views/mcp.test.ts, ui/src/ui/views/mcp.ts, test/scripts/cron-mcp-cleanup-docker-client.test.ts이고, 의존성 단서는 openai, anthropic, modelcontextprotocol, express, commander, playwright, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | openclaw/openclaw |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/openclaw__openclaw](../../../../sources/openclaw__openclaw) |
| Existing report | [reports/clone-structures/openclaw__openclaw.md](../../../clone-structures/openclaw__openclaw.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 15000 / 766 |
| Max observed depth | 8 |
| Top directories | .agents, .github, apps, config, deploy, docs, extensions, git-hooks, packages, patches, qa, scripts, security, skills, src, test, ui |
| Top extensions | .ts: 13541, .json: 358, .mjs: 357, .md: 288, .sh: 173, .prose: 64, .go: 28, (none): 28, .mts: 26, .jsonl: 25, .css: 21, .txt: 16 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 149 |
| packages/llm-core | packages workspace | 2 |
| packages/llm-runtime | packages workspace | 2 |
| packages/model-catalog-core | packages workspace | 2 |
| packages/plugin-sdk | packages workspace | 2 |
| packages/speech-core | packages workspace | 2 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| config | top-level component | 1 |
| deploy | deployment surface | 1 |
| docs | documentation surface | 1 |
| extensions | top-level component | 1 |
| git-hooks | top-level component | 1 |
| packages | source boundary | 1 |
| packages/acp-core | packages workspace | 1 |
| packages/agent-core | packages workspace | 1 |
| packages/gateway-client | packages workspace | 1 |
| packages/gateway-protocol | packages workspace | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | android:assemble | node scripts/run-android-gradle.mjs :app:assemblePlayDebug |
| utility | package.json | android:assemble:third-party | node scripts/run-android-gradle.mjs :app:assembleThirdPartyDebug |
| build | package.json | android:bundle:release | bun apps/android/scripts/build-release-aab.ts |
| quality | package.json | android:format | cd apps/android && ./gradlew :app:ktlintFormat :benchmark:ktlintFormat |
| utility | package.json | android:install | node scripts/run-android-gradle.mjs :app:installPlayDebug |
| utility | package.json | android:install:third-party | node scripts/run-android-gradle.mjs :app:installThirdPartyDebug |
| quality | package.json | android:lint | cd apps/android && ./gradlew :app:ktlintCheck :benchmark:ktlintCheck |
| quality | package.json | android:lint:android | node scripts/run-android-gradle.mjs :app:lintDebug |
| serve-dev | package.json | android:run | node scripts/run-android-gradle.mjs :app:installPlayDebug -- adb shell am start -n ai.openclaw.app/.MainActivity |
| serve-dev | package.json | android:run:third-party | node scripts/run-android-gradle.mjs :app:installThirdPartyDebug -- adb shell am start -n ai.openclaw.app/.MainActivity |
| test | package.json | android:test | node scripts/run-android-gradle.mjs :app:testPlayDebugUnitTest |
| test | package.json | android:test:integration | node scripts/run-with-env.mjs OPENCLAW_LIVE_TEST=1 OPENCLAW_LIVE_ANDROID_NODE=1 -- node scripts/run-vitest.mjs run --config test/vitest/vitest.live.config.ts src/gateway/android-node.capabilities.live.test.ts |
| test | package.json | android:test:third-party | node scripts/run-android-gradle.mjs :app:testThirdPartyDebugUnitTest |
| utility | package.json | audit:seams | node scripts/audit-seams.mjs |
| build | package.json | build | node scripts/build-all.mjs |
| build | package.json | build:ci-artifacts | node scripts/build-all.mjs ciArtifacts |
| build | package.json | build:docker | node scripts/tsdown-build.mjs && node scripts/check-cli-bootstrap-imports.mjs && node scripts/runtime-postbuild.mjs && node scripts/build-stamp.mjs && node scripts/runtime-postbuild-stamp.mjs && pnpm plugins:assets:build |
| build | package.json | build:plugin-sdk:dts | node scripts/run-tsgo.mjs -p tsconfig.plugin-sdk.dts.json --declaration true |
| build | package.json | build:plugin-sdk:strict-smoke | pnpm build:plugin-sdk:dts && node --experimental-strip-types scripts/write-plugin-sdk-entry-dts.ts |
| build | package.json | build:strict-smoke | pnpm plugins:assets:build && node scripts/tsdown-build.mjs && node scripts/check-cli-bootstrap-imports.mjs && node scripts/runtime-postbuild.mjs && node scripts/build-stamp.mjs && node scripts/runtime-postbuild-stamp.mjs |
| build | package.json | canvas:a2ui:bundle | node scripts/bundle-a2ui.mjs |
| utility | package.json | changed:lanes | node scripts/changed-lanes.mjs |
| quality | package.json | check | node scripts/check.mjs |
| quality | package.json | check:architecture | pnpm check:import-cycles && pnpm check:madge-import-cycles && pnpm check:deprecated-api-usage && pnpm check:deprecated-jsdoc && pnpm db:kysely:check && pnpm lint:kysely |
| quality | package.json | check:base-config-schema | node --import tsx scripts/generate-base-config-schema.ts --check |
| build | package.json | check:bundled-channel-config-metadata | node --import tsx scripts/generate-bundled-channel-config-metadata.ts --check |
| quality | package.json | check:changed | node scripts/check-changed.mjs |
| quality | package.json | check:changelog-attributions | node scripts/check-changelog-attributions.mjs |
| quality | package.json | check:deprecated-api-usage | node scripts/check-deprecated-api-usage.mjs |
| quality | package.json | check:deprecated-jsdoc | node scripts/check-deprecated-jsdoc.mjs |
| quality | package.json | check:docs | pnpm format:docs:check && pnpm lint:docs && pnpm docs:check-mdx && pnpm docs:check-i18n-glossary && pnpm docs:check-links |
| quality | package.json | check:host-env-policy:swift | node scripts/generate-host-env-security-policy-swift.mjs --check |
| quality | package.json | check:import-cycles | node --import tsx scripts/check-import-cycles.ts |
| quality | package.json | check:loc | node --import tsx scripts/check-ts-max-loc.ts --max 500 |
| quality | package.json | check:madge-import-cycles | node --import tsx scripts/check-madge-import-cycles.ts |
| quality | package.json | check:media-download-helpers | node scripts/check-media-download-helper-roundtrip.mjs |
| quality | package.json | check:no-conflict-markers | node scripts/check-no-conflict-markers.mjs |
| quality | package.json | check:no-runtime-action-load-config | node scripts/check-no-runtime-action-load-config.mjs |
| quality | package.json | check:opengrep-rule-metadata | node security/opengrep/check-rule-metadata.mjs |
| quality | package.json | check:runtime-sidecar-loaders | node --import tsx scripts/check-runtime-sidecar-loaders.mjs |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | express |
| developerSurface | commander |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [ui/src/ui/views/mcp.test.ts](../../../../sources/openclaw__openclaw/ui/src/ui/views/mcp.test.ts) | mcp signal |
| mcp | [ui/src/ui/views/mcp.ts](../../../../sources/openclaw__openclaw/ui/src/ui/views/mcp.ts) | mcp signal |
| mcp | [test/scripts/cron-mcp-cleanup-docker-client.test.ts](../../../../sources/openclaw__openclaw/test/scripts/cron-mcp-cleanup-docker-client.test.ts) | mcp signal |
| mcp | [test/scripts/mcp-channel-limits.test.ts](../../../../sources/openclaw__openclaw/test/scripts/mcp-channel-limits.test.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/openclaw__openclaw/AGENTS.md) | agentRuntime signal |
| agentRuntime | [ui/AGENTS.md](../../../../sources/openclaw__openclaw/ui/AGENTS.md) | agentRuntime signal |
| agentRuntime | [ui/src/ui/tool-display.ts](../../../../sources/openclaw__openclaw/ui/src/ui/tool-display.ts) | agentRuntime signal |
| agentRuntime | [ui/src/ui/views/agents-panels-overview.ts](../../../../sources/openclaw__openclaw/ui/src/ui/views/agents-panels-overview.ts) | agentRuntime signal |
| entrypoints | [ui/src/main.ts](../../../../sources/openclaw__openclaw/ui/src/main.ts) | entrypoints signal |
| entrypoints | [src/index.test.ts](../../../../sources/openclaw__openclaw/src/index.test.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/openclaw__openclaw/src/index.ts) | entrypoints signal |
| entrypoints | [src/gateway/server.agent.gateway-server-agent-a.test.ts](../../../../sources/openclaw__openclaw/src/gateway/server.agent.gateway-server-agent-a.test.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 126 | [ui/src/main.ts](../../../../sources/openclaw__openclaw/ui/src/main.ts)<br>[src/index.test.ts](../../../../sources/openclaw__openclaw/src/index.test.ts)<br>[src/index.ts](../../../../sources/openclaw__openclaw/src/index.ts)<br>[src/gateway/server.agent.gateway-server-agent-a.test.ts](../../../../sources/openclaw__openclaw/src/gateway/server.agent.gateway-server-agent-a.test.ts)<br>[src/gateway/server.agent.gateway-server-agent-b.test.ts](../../../../sources/openclaw__openclaw/src/gateway/server.agent.gateway-server-agent-b.test.ts)<br>[src/gateway/server.agent.gateway-server-agent.mocks.ts](../../../../sources/openclaw__openclaw/src/gateway/server.agent.gateway-server-agent.mocks.ts)<br>[src/gateway/server.agent.subagent-delivery-context.test.ts](../../../../sources/openclaw__openclaw/src/gateway/server.agent.subagent-delivery-context.test.ts)<br>[src/gateway/server.auth.browser-hardening.test.ts](../../../../sources/openclaw__openclaw/src/gateway/server.auth.browser-hardening.test.ts) |
| agentRuntime | 3039 | [AGENTS.md](../../../../sources/openclaw__openclaw/AGENTS.md)<br>[ui/AGENTS.md](../../../../sources/openclaw__openclaw/ui/AGENTS.md)<br>[ui/src/ui/tool-display.ts](../../../../sources/openclaw__openclaw/ui/src/ui/tool-display.ts)<br>[ui/src/ui/views/agents-panels-overview.ts](../../../../sources/openclaw__openclaw/ui/src/ui/views/agents-panels-overview.ts)<br>[ui/src/ui/views/agents-panels-status-files.ts](../../../../sources/openclaw__openclaw/ui/src/ui/views/agents-panels-status-files.ts)<br>[ui/src/ui/views/agents-panels-tools-skills.browser.test.ts](../../../../sources/openclaw__openclaw/ui/src/ui/views/agents-panels-tools-skills.browser.test.ts)<br>[ui/src/ui/views/agents-panels-tools-skills.ts](../../../../sources/openclaw__openclaw/ui/src/ui/views/agents-panels-tools-skills.ts)<br>[ui/src/ui/views/agents-utils.test.ts](../../../../sources/openclaw__openclaw/ui/src/ui/views/agents-utils.test.ts) |
| mcp | 114 | [ui/src/ui/views/mcp.test.ts](../../../../sources/openclaw__openclaw/ui/src/ui/views/mcp.test.ts)<br>[ui/src/ui/views/mcp.ts](../../../../sources/openclaw__openclaw/ui/src/ui/views/mcp.ts)<br>[test/scripts/cron-mcp-cleanup-docker-client.test.ts](../../../../sources/openclaw__openclaw/test/scripts/cron-mcp-cleanup-docker-client.test.ts)<br>[test/scripts/mcp-channel-limits.test.ts](../../../../sources/openclaw__openclaw/test/scripts/mcp-channel-limits.test.ts)<br>[test/scripts/mcp-channels-harness.test.ts](../../../../sources/openclaw__openclaw/test/scripts/mcp-channels-harness.test.ts)<br>[test/scripts/mcp-code-mode-gateway-client.test.ts](../../../../sources/openclaw__openclaw/test/scripts/mcp-code-mode-gateway-client.test.ts)<br>[test/scripts/mcp-connect-timeout.test.ts](../../../../sources/openclaw__openclaw/test/scripts/mcp-connect-timeout.test.ts)<br>[test/scripts/mcp-websocket-open.test.ts](../../../../sources/openclaw__openclaw/test/scripts/mcp-websocket-open.test.ts) |
| retrieval | 712 | [ui/index.html](../../../../sources/openclaw__openclaw/ui/index.html)<br>[ui/src/ui/embed-sandbox.ts](../../../../sources/openclaw__openclaw/ui/src/ui/embed-sandbox.ts)<br>[ui/src/i18n/index.ts](../../../../sources/openclaw__openclaw/ui/src/i18n/index.ts)<br>[test/vitest/vitest.extension-active-memory-paths.mjs](../../../../sources/openclaw__openclaw/test/vitest/vitest.extension-active-memory-paths.mjs)<br>[test/vitest/vitest.extension-active-memory.config.ts](../../../../sources/openclaw__openclaw/test/vitest/vitest.extension-active-memory.config.ts)<br>[test/vitest/vitest.extension-memory-paths.mjs](../../../../sources/openclaw__openclaw/test/vitest/vitest.extension-memory-paths.mjs)<br>[test/vitest/vitest.extension-memory.config.ts](../../../../sources/openclaw__openclaw/test/vitest/vitest.extension-memory.config.ts)<br>[test/scripts/check-cli-startup-memory.test.ts](../../../../sources/openclaw__openclaw/test/scripts/check-cli-startup-memory.test.ts) |
| spec | 27 | [test/architecture-smells.test.ts](../../../../sources/openclaw__openclaw/test/architecture-smells.test.ts)<br>[test/scripts/package-acceptance-workflow.test.ts](../../../../sources/openclaw__openclaw/test/scripts/package-acceptance-workflow.test.ts)<br>[src/test-utils/npm-spec-install-test-helpers.ts](../../../../sources/openclaw__openclaw/src/test-utils/npm-spec-install-test-helpers.ts)<br>[src/shared/requirements.test.ts](../../../../sources/openclaw__openclaw/src/shared/requirements.test.ts)<br>[src/shared/requirements.ts](../../../../sources/openclaw__openclaw/src/shared/requirements.ts)<br>[src/plugins/install.npm-spec.e2e.test.ts](../../../../sources/openclaw__openclaw/src/plugins/install.npm-spec.e2e.test.ts)<br>[src/plugins/install.npm-spec.test.ts](../../../../sources/openclaw__openclaw/src/plugins/install.npm-spec.test.ts)<br>[src/infra/clawhub-spec.ts](../../../../sources/openclaw__openclaw/src/infra/clawhub-spec.ts) |
| eval | 6331 | [ui/src/ui/app-channels.test.ts](../../../../sources/openclaw__openclaw/ui/src/ui/app-channels.test.ts)<br>[ui/src/ui/app-chat.test.ts](../../../../sources/openclaw__openclaw/ui/src/ui/app-chat.test.ts)<br>[ui/src/ui/app-defaults.test.ts](../../../../sources/openclaw__openclaw/ui/src/ui/app-defaults.test.ts)<br>[ui/src/ui/app-gateway-chat-load.node.test.ts](../../../../sources/openclaw__openclaw/ui/src/ui/app-gateway-chat-load.node.test.ts)<br>[ui/src/ui/app-gateway.node.test.ts](../../../../sources/openclaw__openclaw/ui/src/ui/app-gateway.node.test.ts)<br>[ui/src/ui/app-gateway.sessions.node.test.ts](../../../../sources/openclaw__openclaw/ui/src/ui/app-gateway.sessions.node.test.ts)<br>[ui/src/ui/app-lifecycle-connect.node.test.ts](../../../../sources/openclaw__openclaw/ui/src/ui/app-lifecycle-connect.node.test.ts)<br>[ui/src/ui/app-lifecycle.node.test.ts](../../../../sources/openclaw__openclaw/ui/src/ui/app-lifecycle.node.test.ts) |
| security | 1229 | [SECURITY.md](../../../../sources/openclaw__openclaw/SECURITY.md)<br>[ui/src/ui/app-render.exec-policy.test.ts](../../../../sources/openclaw__openclaw/ui/src/ui/app-render.exec-policy.test.ts)<br>[ui/src/ui/control-ui-auth.ts](../../../../sources/openclaw__openclaw/ui/src/ui/control-ui-auth.ts)<br>[ui/src/ui/device-auth.ts](../../../../sources/openclaw__openclaw/ui/src/ui/device-auth.ts)<br>[ui/src/ui/embed-sandbox.ts](../../../../sources/openclaw__openclaw/ui/src/ui/embed-sandbox.ts)<br>[ui/src/ui/model-auth-helpers.ts](../../../../sources/openclaw__openclaw/ui/src/ui/model-auth-helpers.ts)<br>[ui/src/ui/controllers/model-auth-status.ts](../../../../sources/openclaw__openclaw/ui/src/ui/controllers/model-auth-status.ts)<br>[test/vitest/vitest.full-core-unit-security.config.ts](../../../../sources/openclaw__openclaw/test/vitest/vitest.full-core-unit-security.config.ts) |
| ci | 0 | not obvious |
| container | 19 | [docker-compose.yml](../../../../sources/openclaw__openclaw/docker-compose.yml)<br>[Dockerfile](../../../../sources/openclaw__openclaw/Dockerfile)<br>[src/dockerfile.test.ts](../../../../sources/openclaw__openclaw/src/dockerfile.test.ts)<br>[scripts/k8s/create-kind.sh](../../../../sources/openclaw__openclaw/scripts/k8s/create-kind.sh)<br>[scripts/k8s/deploy.sh](../../../../sources/openclaw__openclaw/scripts/k8s/deploy.sh)<br>[scripts/k8s/manifests/configmap.yaml](../../../../sources/openclaw__openclaw/scripts/k8s/manifests/configmap.yaml)<br>[scripts/k8s/manifests/deployment.yaml](../../../../sources/openclaw__openclaw/scripts/k8s/manifests/deployment.yaml)<br>[scripts/k8s/manifests/kustomization.yaml](../../../../sources/openclaw__openclaw/scripts/k8s/manifests/kustomization.yaml) |
| instruction | 18 | [AGENTS.md](../../../../sources/openclaw__openclaw/AGENTS.md)<br>[ui/AGENTS.md](../../../../sources/openclaw__openclaw/ui/AGENTS.md)<br>[test/AGENTS.md](../../../../sources/openclaw__openclaw/test/AGENTS.md)<br>[test/helpers/AGENTS.md](../../../../sources/openclaw__openclaw/test/helpers/AGENTS.md)<br>[src/tui/AGENTS.md](../../../../sources/openclaw__openclaw/src/tui/AGENTS.md)<br>[src/plugins/AGENTS.md](../../../../sources/openclaw__openclaw/src/plugins/AGENTS.md)<br>[src/plugin-sdk/AGENTS.md](../../../../sources/openclaw__openclaw/src/plugin-sdk/AGENTS.md)<br>[src/infra/outbound/AGENTS.md](../../../../sources/openclaw__openclaw/src/infra/outbound/AGENTS.md) |
| docs | 42 | [README.md](../../../../sources/openclaw__openclaw/README.md)<br>[test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/README.md](../../../../sources/openclaw__openclaw/test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/README.md)<br>[src/hooks/bundled/README.md](../../../../sources/openclaw__openclaw/src/hooks/bundled/README.md)<br>[src/docs/channel-config-examples.test.ts](../../../../sources/openclaw__openclaw/src/docs/channel-config-examples.test.ts)<br>[src/docs/clawhub-plugin-docs.test.ts](../../../../sources/openclaw__openclaw/src/docs/clawhub-plugin-docs.test.ts)<br>[src/docs/config-path-docs.test.ts](../../../../sources/openclaw__openclaw/src/docs/config-path-docs.test.ts)<br>[src/docs/environment-docs.test.ts](../../../../sources/openclaw__openclaw/src/docs/environment-docs.test.ts)<br>[src/docs/install-cloud-secrets.test.ts](../../../../sources/openclaw__openclaw/src/docs/install-cloud-secrets.test.ts) |
| config | 169 | [package.json](../../../../sources/openclaw__openclaw/package.json)<br>[pnpm-workspace.yaml](../../../../sources/openclaw__openclaw/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/openclaw__openclaw/tsconfig.json)<br>[ui/package.json](../../../../sources/openclaw__openclaw/ui/package.json)<br>[test/tsconfig.json](../../../../sources/openclaw__openclaw/test/tsconfig.json)<br>[test/fixtures/ts-topology/basic/tsconfig.json](../../../../sources/openclaw__openclaw/test/fixtures/ts-topology/basic/tsconfig.json)<br>[skills/pyproject.toml](../../../../sources/openclaw__openclaw/skills/pyproject.toml)<br>[scripts/tsconfig.json](../../../../sources/openclaw__openclaw/scripts/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 6331 | [ui/src/ui/app-channels.test.ts](../../../../sources/openclaw__openclaw/ui/src/ui/app-channels.test.ts)<br>[ui/src/ui/app-chat.test.ts](../../../../sources/openclaw__openclaw/ui/src/ui/app-chat.test.ts)<br>[ui/src/ui/app-defaults.test.ts](../../../../sources/openclaw__openclaw/ui/src/ui/app-defaults.test.ts)<br>[ui/src/ui/app-gateway-chat-load.node.test.ts](../../../../sources/openclaw__openclaw/ui/src/ui/app-gateway-chat-load.node.test.ts)<br>[ui/src/ui/app-gateway.node.test.ts](../../../../sources/openclaw__openclaw/ui/src/ui/app-gateway.node.test.ts)<br>[ui/src/ui/app-gateway.sessions.node.test.ts](../../../../sources/openclaw__openclaw/ui/src/ui/app-gateway.sessions.node.test.ts) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 19 | [docker-compose.yml](../../../../sources/openclaw__openclaw/docker-compose.yml)<br>[Dockerfile](../../../../sources/openclaw__openclaw/Dockerfile)<br>[src/dockerfile.test.ts](../../../../sources/openclaw__openclaw/src/dockerfile.test.ts)<br>[scripts/k8s/create-kind.sh](../../../../sources/openclaw__openclaw/scripts/k8s/create-kind.sh)<br>[scripts/k8s/deploy.sh](../../../../sources/openclaw__openclaw/scripts/k8s/deploy.sh)<br>[scripts/k8s/manifests/configmap.yaml](../../../../sources/openclaw__openclaw/scripts/k8s/manifests/configmap.yaml) |
| Security / policy | 1229 | [SECURITY.md](../../../../sources/openclaw__openclaw/SECURITY.md)<br>[ui/src/ui/app-render.exec-policy.test.ts](../../../../sources/openclaw__openclaw/ui/src/ui/app-render.exec-policy.test.ts)<br>[ui/src/ui/control-ui-auth.ts](../../../../sources/openclaw__openclaw/ui/src/ui/control-ui-auth.ts)<br>[ui/src/ui/device-auth.ts](../../../../sources/openclaw__openclaw/ui/src/ui/device-auth.ts)<br>[ui/src/ui/embed-sandbox.ts](../../../../sources/openclaw__openclaw/ui/src/ui/embed-sandbox.ts)<br>[ui/src/ui/model-auth-helpers.ts](../../../../sources/openclaw__openclaw/ui/src/ui/model-auth-helpers.ts) |
| Agent instructions | 18 | [AGENTS.md](../../../../sources/openclaw__openclaw/AGENTS.md)<br>[ui/AGENTS.md](../../../../sources/openclaw__openclaw/ui/AGENTS.md)<br>[test/AGENTS.md](../../../../sources/openclaw__openclaw/test/AGENTS.md)<br>[test/helpers/AGENTS.md](../../../../sources/openclaw__openclaw/test/helpers/AGENTS.md)<br>[src/tui/AGENTS.md](../../../../sources/openclaw__openclaw/src/tui/AGENTS.md)<br>[src/plugins/AGENTS.md](../../../../sources/openclaw__openclaw/src/plugins/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | large repository scan truncated at 15000 files |
| operation | CI workflow path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `ui/src/ui/views/mcp.test.ts`, `ui/src/ui/views/mcp.ts`, `test/scripts/cron-mcp-cleanup-docker-client.test.ts`.
2. Trace execution through entrypoints: `ui/src/main.ts`, `src/index.test.ts`, `src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `ui/AGENTS.md`, `ui/src/ui/tool-display.ts`.
4. Inspect retrieval/memory/indexing through: `ui/index.html`, `ui/src/ui/embed-sandbox.ts`, `ui/src/i18n/index.ts`.
5. Verify behavior through test/eval files: `ui/src/ui/app-channels.test.ts`, `ui/src/ui/app-chat.test.ts`, `ui/src/ui/app-defaults.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 19887 files, 1152 directories.. 핵심 구조 신호는 package.json, Dockerfile, docker-compose.yml, README.md, AGENTS.md, openai이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
