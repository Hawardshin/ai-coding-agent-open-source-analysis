# Bitterbot-AI/bitterbot-desktop Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A local-first AI agent with persistent memory, emotional intelligence, and a peer-to-peer skills economy.

## 요약

- 조사 단위: `sources/Bitterbot-AI__bitterbot-desktop` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 4,301 files, 359 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=benchmarks/arc-agi-3/tests/mcp-server.test.ts, benchmarks/arc-agi-3/mcp-server/context.ts, benchmarks/arc-agi-3/mcp-server/index.ts이고, 의존성 단서는 anthropic, claude, modelcontextprotocol, express, commander, ollama, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Bitterbot-AI/bitterbot-desktop |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 2392 |
| Forks | 417 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/Bitterbot-AI__bitterbot-desktop](../../../../sources/Bitterbot-AI__bitterbot-desktop) |
| Existing report | [reports/global-trending/repositories/Bitterbot-AI__bitterbot-desktop.md](../../../global-trending/repositories/Bitterbot-AI__bitterbot-desktop.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 4301 / 359 |
| Max observed depth | 7 |
| Top directories | .github, benchmarks, deploy, desktop, docs, extensions, git-hooks, orchestrator, scripts, skills, src, test |
| Top extensions | .ts: 3459, .md: 510, .tsx: 115, .json: 40, .py: 39, .sh: 28, (none): 17, .mjs: 15, .rs: 10, .png: 8, .yml: 8, .svg: 6 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 173 |
| docs | documentation surface | 37 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| deploy | deployment surface | 1 |
| desktop | top-level component | 1 |
| extensions | top-level component | 1 |
| git-hooks | top-level component | 1 |
| orchestrator | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | android:assemble | cd apps/android && ./gradlew :app:assembleDebug |
| utility | package.json | android:install | cd apps/android && ./gradlew :app:installDebug |
| serve-dev | package.json | android:run | cd apps/android && ./gradlew :app:installDebug && adb shell am start -n ai.bitterbot.android/.MainActivity |
| test | package.json | android:test | cd apps/android && ./gradlew :app:testDebugUnitTest |
| test | package.json | benchmark:biomemeval | vitest run --config benchmarks/biomemeval/vitest.config.ts && node --import tsx benchmarks/biomemeval/generate-report.ts |
| utility | package.json | benchmark:longmemeval | node --import tsx benchmarks/longmemeval/runner.ts |
| utility | package.json | benchmark:longmemeval:biological | node --import tsx benchmarks/longmemeval/runner-biological.ts --oracle |
| utility | package.json | benchmark:longmemeval:contrastive | node --import tsx benchmarks/longmemeval/runner-contrastive.ts --oracle --split train |
| utility | package.json | benchmark:longmemeval:download | bash benchmarks/longmemeval/download.sh |
| utility | package.json | benchmark:longmemeval:evaluate | node --import tsx benchmarks/longmemeval/evaluate.ts |
| utility | package.json | benchmark:longmemeval:oracle | node --import tsx benchmarks/longmemeval/runner.ts --oracle |
| utility | package.json | bitterbot | node scripts/run-node.mjs |
| utility | package.json | bitterbot:rpc | node scripts/run-node.mjs agent --mode rpc --json |
| build | package.json | build | pnpm canvas:a2ui:bundle && tsdown && node scripts/build-gateway-entry.mjs && pnpm build:plugin-sdk:dts && node --import tsx scripts/write-plugin-sdk-entry-dts.ts && node --import tsx scripts/canvas-a2ui-copy.ts && node - |
| build | package.json | build:plugin-sdk:dts | tsc -p tsconfig.plugin-sdk.dts.json |
| build | package.json | canvas:a2ui:bundle | bash scripts/bundle-a2ui.sh |
| quality | package.json | check | pnpm format:check && pnpm tsgo && pnpm lint |
| quality | package.json | check:docs | pnpm format:docs:check && pnpm lint:docs && pnpm docs:check-links |
| quality | package.json | check:loc | node --import tsx scripts/check-ts-max-loc.ts --max 500 |
| serve-dev | package.json | dev | node scripts/run-node.mjs |
| serve-dev | package.json | dev:all | node scripts/dev-all.mjs |
| quality | package.json | docs:check-links | node scripts/docs-link-audit.mjs |
| serve-dev | package.json | docs:dev | cd docs && mint dev |
| quality | package.json | format | oxfmt --write |
| quality | package.json | format:all | pnpm format && pnpm format:swift |
| quality | package.json | format:check | oxfmt --check |
| quality | package.json | format:docs | git ls-files 'docs/**/*.md' 'docs/**/*.mdx' 'README.md' \| xargs oxfmt --write |
| quality | package.json | format:docs:check | git ls-files 'docs/**/*.md' 'docs/**/*.mdx' 'README.md' \| xargs oxfmt --check |
| quality | package.json | format:swift | swiftformat --lint --config .swiftformat apps/macos/Sources apps/ios/Sources apps/shared/BitterbotKit/Sources |
| serve-dev | package.json | gateway:watch | node scripts/watch-node.mjs gateway --force |
| build | package.json | ios:build | bash -lc 'cd apps/ios && xcodegen generate && xcodebuild -project Bitterbot.xcodeproj -scheme Bitterbot -destination "${IOS_DEST:-platform=iOS Simulator,name=iPhone 17}" -configuration Debug build' |
| utility | package.json | ios:gen | cd apps/ios && xcodegen generate |
| utility | package.json | ios:open | cd apps/ios && xcodegen generate && open Bitterbot.xcodeproj |
| build | package.json | ios:run | bash -lc 'cd apps/ios && xcodegen generate && xcodebuild -project Bitterbot.xcodeproj -scheme Bitterbot -destination "${IOS_DEST:-platform=iOS Simulator,name=iPhone 17}" -configuration Debug build && xcrun simctl boot "$ |
| quality | package.json | lint | oxlint --type-aware |
| quality | package.json | lint:all | pnpm lint && pnpm lint:swift |
| quality | package.json | lint:docs | pnpm dlx markdownlint-cli2 |
| quality | package.json | lint:docs:fix | pnpm dlx markdownlint-cli2 --fix |
| quality | package.json | lint:fix | oxlint --type-aware --fix && pnpm format |
| quality | package.json | lint:swift | swiftlint lint --config .swiftlint.yml && (cd apps/ios && swiftlint lint --config .swiftlint.yml) |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | anthropic, claude |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | ollama, llama |
| webRuntime | express |
| developerSurface | commander |
| observability | opentelemetry |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [benchmarks/arc-agi-3/tests/mcp-server.test.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/benchmarks/arc-agi-3/tests/mcp-server.test.ts) | mcp signal |
| mcp | [benchmarks/arc-agi-3/mcp-server/context.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/benchmarks/arc-agi-3/mcp-server/context.ts) | mcp signal |
| mcp | [benchmarks/arc-agi-3/mcp-server/index.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/benchmarks/arc-agi-3/mcp-server/index.ts) | mcp signal |
| mcp | [benchmarks/arc-agi-3/mcp-server/manifest.json](../../../../sources/Bitterbot-AI__bitterbot-desktop/benchmarks/arc-agi-3/mcp-server/manifest.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/Bitterbot-AI__bitterbot-desktop/AGENTS.md) | agentRuntime signal |
| agentRuntime | [test/fixtures/hooks-install/npm-pack-hooks.tgz](../../../../sources/Bitterbot-AI__bitterbot-desktop/test/fixtures/hooks-install/npm-pack-hooks.tgz) | agentRuntime signal |
| agentRuntime | [test/fixtures/hooks-install/tar-evil-id.tar](../../../../sources/Bitterbot-AI__bitterbot-desktop/test/fixtures/hooks-install/tar-evil-id.tar) | agentRuntime signal |
| agentRuntime | [test/fixtures/hooks-install/tar-hooks.tar](../../../../sources/Bitterbot-AI__bitterbot-desktop/test/fixtures/hooks-install/tar-hooks.tar) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/index.ts) | entrypoints signal |
| entrypoints | [src/media/server.test.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/media/server.test.ts) | entrypoints signal |
| entrypoints | [src/media/server.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/media/server.ts) | entrypoints signal |
| entrypoints | [src/gateway/server.agent.gateway-server-agent-a.e2e.test.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/gateway/server.agent.gateway-server-agent-a.e2e.test.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 47 | [src/index.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/index.ts)<br>[src/media/server.test.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/media/server.test.ts)<br>[src/media/server.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/media/server.ts)<br>[src/gateway/server.agent.gateway-server-agent-a.e2e.test.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/gateway/server.agent.gateway-server-agent-a.e2e.test.ts)<br>[src/gateway/server.agent.gateway-server-agent-b.e2e.test.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/gateway/server.agent.gateway-server-agent-b.e2e.test.ts)<br>[src/gateway/server.agent.gateway-server-agent.mocks.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/gateway/server.agent.gateway-server-agent.mocks.ts)<br>[src/gateway/server.auth.e2e.test.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/gateway/server.auth.e2e.test.ts)<br>[src/gateway/server.canvas-auth.e2e.test.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/gateway/server.canvas-auth.e2e.test.ts) |
| agentRuntime | 1343 | [AGENTS.md](../../../../sources/Bitterbot-AI__bitterbot-desktop/AGENTS.md)<br>[test/fixtures/hooks-install/npm-pack-hooks.tgz](../../../../sources/Bitterbot-AI__bitterbot-desktop/test/fixtures/hooks-install/npm-pack-hooks.tgz)<br>[test/fixtures/hooks-install/tar-evil-id.tar](../../../../sources/Bitterbot-AI__bitterbot-desktop/test/fixtures/hooks-install/tar-evil-id.tar)<br>[test/fixtures/hooks-install/tar-hooks.tar](../../../../sources/Bitterbot-AI__bitterbot-desktop/test/fixtures/hooks-install/tar-hooks.tar)<br>[test/fixtures/hooks-install/tar-reserved-id.tar](../../../../sources/Bitterbot-AI__bitterbot-desktop/test/fixtures/hooks-install/tar-reserved-id.tar)<br>[test/fixtures/hooks-install/tar-traversal.tar](../../../../sources/Bitterbot-AI__bitterbot-desktop/test/fixtures/hooks-install/tar-traversal.tar)<br>[test/fixtures/hooks-install/zip-hooks.zip](../../../../sources/Bitterbot-AI__bitterbot-desktop/test/fixtures/hooks-install/zip-hooks.zip)<br>[test/fixtures/hooks-install/zip-traversal.zip](../../../../sources/Bitterbot-AI__bitterbot-desktop/test/fixtures/hooks-install/zip-traversal.zip) |
| mcp | 11 | [benchmarks/arc-agi-3/tests/mcp-server.test.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/benchmarks/arc-agi-3/tests/mcp-server.test.ts)<br>[benchmarks/arc-agi-3/mcp-server/context.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/benchmarks/arc-agi-3/mcp-server/context.ts)<br>[benchmarks/arc-agi-3/mcp-server/index.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/benchmarks/arc-agi-3/mcp-server/index.ts)<br>[benchmarks/arc-agi-3/mcp-server/manifest.json](../../../../sources/Bitterbot-AI__bitterbot-desktop/benchmarks/arc-agi-3/mcp-server/manifest.json)<br>[benchmarks/arc-agi-3/mcp-server/tools/hormonal.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/benchmarks/arc-agi-3/mcp-server/tools/hormonal.ts)<br>[benchmarks/arc-agi-3/mcp-server/tools/hypothesis.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/benchmarks/arc-agi-3/mcp-server/tools/hypothesis.ts)<br>[benchmarks/arc-agi-3/mcp-server/tools/list-rules.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/benchmarks/arc-agi-3/mcp-server/tools/list-rules.ts)<br>[benchmarks/arc-agi-3/mcp-server/tools/log-transition.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/benchmarks/arc-agi-3/mcp-server/tools/log-transition.ts) |
| retrieval | 472 | [how-the-memory-works.md](../../../../sources/Bitterbot-AI__bitterbot-desktop/how-the-memory-works.md)<br>[src/index.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/index.ts)<br>[src/utils/chunk-items.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/utils/chunk-items.ts)<br>[src/telegram/index.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/telegram/index.ts)<br>[src/slack/index.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/slack/index.ts)<br>[src/slack/http/index.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/slack/http/index.ts)<br>[src/signal/index.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/signal/index.ts)<br>[src/process/supervisor/index.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/process/supervisor/index.ts) |
| spec | 6 | [src/shared/requirements.test.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/shared/requirements.test.ts)<br>[src/shared/requirements.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/shared/requirements.ts)<br>[src/infra/npm-registry-spec.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/infra/npm-registry-spec.ts)<br>[src/infra/outbound/message-action-spec.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/infra/outbound/message-action-spec.ts)<br>[docs/memory/architecture-overview.md](../../../../sources/Bitterbot-AI__bitterbot-desktop/docs/memory/architecture-overview.md)<br>[docs/concepts/architecture.md](../../../../sources/Bitterbot-AI__bitterbot-desktop/docs/concepts/architecture.md) |
| eval | 1405 | [tsconfig.test.json](../../../../sources/Bitterbot-AI__bitterbot-desktop/tsconfig.test.json)<br>[test/gateway.multi.e2e.test.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/test/gateway.multi.e2e.test.ts)<br>[test/git-hooks-pre-commit.integration.test.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/test/git-hooks-pre-commit.integration.test.ts)<br>[test/git-hooks-pre-commit.test.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/test/git-hooks-pre-commit.test.ts)<br>[test/global-setup.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/test/global-setup.ts)<br>[test/media-understanding.auto.e2e.test.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/test/media-understanding.auto.e2e.test.ts)<br>[test/provider-timeout.e2e.test.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/test/provider-timeout.e2e.test.ts)<br>[test/setup.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/test/setup.ts) |
| security | 295 | [Dockerfile.sandbox-browser](../../../../sources/Bitterbot-AI__bitterbot-desktop/Dockerfile.sandbox-browser)<br>[Dockerfile.sandbox-common](../../../../sources/Bitterbot-AI__bitterbot-desktop/Dockerfile.sandbox-common)<br>[SECURITY.md](../../../../sources/Bitterbot-AI__bitterbot-desktop/SECURITY.md)<br>[src/web/accounts.whatsapp-auth.test.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/web/accounts.whatsapp-auth.test.ts)<br>[src/web/auth-store.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/web/auth-store.ts)<br>[src/utils/normalize-secret-input.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/utils/normalize-secret-input.ts)<br>[src/telegram/audit.test.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/telegram/audit.test.ts)<br>[src/telegram/audit.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/telegram/audit.ts) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/Bitterbot-AI__bitterbot-desktop/.github/workflows/ci.yml)<br>[.github/workflows/desktop-release.yml](../../../../sources/Bitterbot-AI__bitterbot-desktop/.github/workflows/desktop-release.yml)<br>[.github/workflows/orchestrator-release.yml](../../../../sources/Bitterbot-AI__bitterbot-desktop/.github/workflows/orchestrator-release.yml) |
| container | 15 | [docker-compose.yml](../../../../sources/Bitterbot-AI__bitterbot-desktop/docker-compose.yml)<br>[Dockerfile](../../../../sources/Bitterbot-AI__bitterbot-desktop/Dockerfile)<br>[Dockerfile.sandbox](../../../../sources/Bitterbot-AI__bitterbot-desktop/Dockerfile.sandbox)<br>[Dockerfile.sandbox-browser](../../../../sources/Bitterbot-AI__bitterbot-desktop/Dockerfile.sandbox-browser)<br>[Dockerfile.sandbox-common](../../../../sources/Bitterbot-AI__bitterbot-desktop/Dockerfile.sandbox-common)<br>[deploy/relay-fleet/.gitignore](../../../../sources/Bitterbot-AI__bitterbot-desktop/deploy/relay-fleet/.gitignore)<br>[deploy/relay-fleet/.terraform.lock.hcl](../../../../sources/Bitterbot-AI__bitterbot-desktop/deploy/relay-fleet/.terraform.lock.hcl)<br>[deploy/relay-fleet/cloud-init.yaml](../../../../sources/Bitterbot-AI__bitterbot-desktop/deploy/relay-fleet/cloud-init.yaml) |
| instruction | 5 | [AGENTS.md](../../../../sources/Bitterbot-AI__bitterbot-desktop/AGENTS.md)<br>[src/gateway/server-methods/AGENTS.md](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/gateway/server-methods/AGENTS.md)<br>[src/gateway/server-methods/CLAUDE.md](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/gateway/server-methods/CLAUDE.md)<br>[docs/cli/agents.md](../../../../sources/Bitterbot-AI__bitterbot-desktop/docs/cli/agents.md)<br>[benchmarks/arc-agi-3/CLAUDE.md](../../../../sources/Bitterbot-AI__bitterbot-desktop/benchmarks/arc-agi-3/CLAUDE.md) |
| docs | 301 | [README.md](../../../../sources/Bitterbot-AI__bitterbot-desktop/README.md)<br>[src/hooks/bundled/README.md](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/hooks/bundled/README.md)<br>[src/docs/slash-commands-doc.test.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/docs/slash-commands-doc.test.ts)<br>[extensions/twitch/README.md](../../../../sources/Bitterbot-AI__bitterbot-desktop/extensions/twitch/README.md)<br>[extensions/qwen-portal-auth/README.md](../../../../sources/Bitterbot-AI__bitterbot-desktop/extensions/qwen-portal-auth/README.md)<br>[extensions/google-gemini-cli-auth/README.md](../../../../sources/Bitterbot-AI__bitterbot-desktop/extensions/google-gemini-cli-auth/README.md)<br>[extensions/google-antigravity-auth/README.md](../../../../sources/Bitterbot-AI__bitterbot-desktop/extensions/google-antigravity-auth/README.md)<br>[docs/bitterbot_avatar.png](../../../../sources/Bitterbot-AI__bitterbot-desktop/docs/bitterbot_avatar.png) |
| config | 18 | [package.json](../../../../sources/Bitterbot-AI__bitterbot-desktop/package.json)<br>[pnpm-workspace.yaml](../../../../sources/Bitterbot-AI__bitterbot-desktop/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/Bitterbot-AI__bitterbot-desktop/tsconfig.json)<br>[orchestrator/Cargo.lock](../../../../sources/Bitterbot-AI__bitterbot-desktop/orchestrator/Cargo.lock)<br>[orchestrator/Cargo.toml](../../../../sources/Bitterbot-AI__bitterbot-desktop/orchestrator/Cargo.toml)<br>[extensions/whatsapp/package.json](../../../../sources/Bitterbot-AI__bitterbot-desktop/extensions/whatsapp/package.json)<br>[extensions/twitch/package.json](../../../../sources/Bitterbot-AI__bitterbot-desktop/extensions/twitch/package.json)<br>[extensions/telegram/package.json](../../../../sources/Bitterbot-AI__bitterbot-desktop/extensions/telegram/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1405 | [tsconfig.test.json](../../../../sources/Bitterbot-AI__bitterbot-desktop/tsconfig.test.json)<br>[test/gateway.multi.e2e.test.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/test/gateway.multi.e2e.test.ts)<br>[test/git-hooks-pre-commit.integration.test.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/test/git-hooks-pre-commit.integration.test.ts)<br>[test/git-hooks-pre-commit.test.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/test/git-hooks-pre-commit.test.ts)<br>[test/global-setup.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/test/global-setup.ts)<br>[test/media-understanding.auto.e2e.test.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/test/media-understanding.auto.e2e.test.ts) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/Bitterbot-AI__bitterbot-desktop/.github/workflows/ci.yml)<br>[.github/workflows/desktop-release.yml](../../../../sources/Bitterbot-AI__bitterbot-desktop/.github/workflows/desktop-release.yml)<br>[.github/workflows/orchestrator-release.yml](../../../../sources/Bitterbot-AI__bitterbot-desktop/.github/workflows/orchestrator-release.yml) |
| Containers / deploy | 15 | [docker-compose.yml](../../../../sources/Bitterbot-AI__bitterbot-desktop/docker-compose.yml)<br>[Dockerfile](../../../../sources/Bitterbot-AI__bitterbot-desktop/Dockerfile)<br>[Dockerfile.sandbox](../../../../sources/Bitterbot-AI__bitterbot-desktop/Dockerfile.sandbox)<br>[Dockerfile.sandbox-browser](../../../../sources/Bitterbot-AI__bitterbot-desktop/Dockerfile.sandbox-browser)<br>[Dockerfile.sandbox-common](../../../../sources/Bitterbot-AI__bitterbot-desktop/Dockerfile.sandbox-common)<br>[deploy/relay-fleet/.gitignore](../../../../sources/Bitterbot-AI__bitterbot-desktop/deploy/relay-fleet/.gitignore) |
| Security / policy | 295 | [Dockerfile.sandbox-browser](../../../../sources/Bitterbot-AI__bitterbot-desktop/Dockerfile.sandbox-browser)<br>[Dockerfile.sandbox-common](../../../../sources/Bitterbot-AI__bitterbot-desktop/Dockerfile.sandbox-common)<br>[SECURITY.md](../../../../sources/Bitterbot-AI__bitterbot-desktop/SECURITY.md)<br>[src/web/accounts.whatsapp-auth.test.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/web/accounts.whatsapp-auth.test.ts)<br>[src/web/auth-store.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/web/auth-store.ts)<br>[src/utils/normalize-secret-input.ts](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/utils/normalize-secret-input.ts) |
| Agent instructions | 5 | [AGENTS.md](../../../../sources/Bitterbot-AI__bitterbot-desktop/AGENTS.md)<br>[src/gateway/server-methods/AGENTS.md](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/gateway/server-methods/AGENTS.md)<br>[src/gateway/server-methods/CLAUDE.md](../../../../sources/Bitterbot-AI__bitterbot-desktop/src/gateway/server-methods/CLAUDE.md)<br>[docs/cli/agents.md](../../../../sources/Bitterbot-AI__bitterbot-desktop/docs/cli/agents.md)<br>[benchmarks/arc-agi-3/CLAUDE.md](../../../../sources/Bitterbot-AI__bitterbot-desktop/benchmarks/arc-agi-3/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `benchmarks/arc-agi-3/tests/mcp-server.test.ts`, `benchmarks/arc-agi-3/mcp-server/context.ts`, `benchmarks/arc-agi-3/mcp-server/index.ts`.
2. Trace execution through entrypoints: `src/index.ts`, `src/media/server.test.ts`, `src/media/server.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `test/fixtures/hooks-install/npm-pack-hooks.tgz`, `test/fixtures/hooks-install/tar-evil-id.tar`.
4. Inspect retrieval/memory/indexing through: `how-the-memory-works.md`, `src/index.ts`, `src/utils/chunk-items.ts`.
5. Verify behavior through test/eval files: `tsconfig.test.json`, `test/gateway.multi.e2e.test.ts`, `test/git-hooks-pre-commit.integration.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A local first AI agent with persistent memory, emotional intelligence, and a peer to peer skills economy.. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, docker-compose.yml, README.md, AGENTS.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
