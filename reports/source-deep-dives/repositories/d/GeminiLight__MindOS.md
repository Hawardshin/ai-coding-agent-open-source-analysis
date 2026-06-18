# GeminiLight/MindOS Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

MindOS is a Human-AI Collaborative Mind System, where human thinks and agents act. Globally sync your mind for all agents: transparent, controllable, and evolving symbiotically.

## 요약

- 조사 단위: `sources/GeminiLight__MindOS` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,534 files, 520 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=wiki/refs/acp-skills-mcp-workflow-integration-2026-03-31.md, wiki/refs/multi-agent-mcp-management-tools-survey.md, wiki/archive/task-spec-mcp-skill-gui.md이고, 의존성 단서는 react, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | GeminiLight/MindOS |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 628 |
| Forks | 55 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/GeminiLight__MindOS](../../../../sources/GeminiLight__MindOS) |
| Existing report | [reports/global-trending/repositories/GeminiLight__MindOS.md](../../../global-trending/repositories/GeminiLight__MindOS.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2534 / 520 |
| Max observed depth | 10 |
| Top directories | .github, assets, docs, packages, scripts, skills, templates, tests, wiki |
| Top extensions | .ts: 1400, .tsx: 460, .md: 324, .js: 83, .json: 64, .svg: 49, .png: 39, .mjs: 29, (none): 11, .csv: 10, .sh: 9, .webp: 9 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 61 |
| packages/web | packages workspace | 51 |
| packages/mindos | packages workspace | 49 |
| packages/retrieval | packages workspace | 14 |
| packages/mindos-platforms | packages workspace | 8 |
| packages/mobile | packages workspace | 6 |
| packages/desktop-tauri | packages workspace | 3 |
| packages/browser-extension | packages workspace | 2 |
| packages/desktop | packages workspace | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| docs | documentation surface | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| templates | top-level component | 1 |
| wiki | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | setup | node scripts/setup.js |
| serve-dev | package.json | dev | node packages/mindos/bin/cli.js dev |
| build | package.json | build | node packages/mindos/bin/cli.js build |
| serve-dev | package.json | start | node packages/mindos/bin/cli.js start |
| utility | package.json | mcp | node packages/mindos/bin/cli.js mcp |
| test | package.json | test | pnpm run test:contracts && pnpm run test:unit && turbo run test |
| test | package.json | test:quick | pnpm run test:contracts && pnpm run test:unit |
| test | package.json | test:release | pnpm run test:contracts && pnpm run test:unit && turbo run build && turbo run test && turbo run type-check |
| test | package.json | test:contracts | vitest run tests/*.test.ts |
| test | package.json | test:unit | vitest run tests/unit/*.test.ts |
| test | package.json | test:integration | vitest run --config tests/integration/vitest.config.ts |
| test | package.json | test:e2e | playwright test -c tests/e2e/playwright.config.ts |
| quality | package.json | lint | turbo run lint |
| quality | package.json | type-check | turbo run type-check |
| utility | package.json | verify:standalone | node scripts/verify-standalone.mjs |
| utility | package.json | clean:product-stage | node scripts/clean-product-stage.mjs --include-package-docs |
| build | package.json | release | bash scripts/release.sh |
| utility | package.json | clean | turbo run clean && node scripts/remove-node-modules.mjs |
| serve-dev | package.json | prepare | git config core.hooksPath scripts/hooks 2>/dev/null \|\| true |


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
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [wiki/refs/acp-skills-mcp-workflow-integration-2026-03-31.md](../../../../sources/GeminiLight__MindOS/wiki/refs/acp-skills-mcp-workflow-integration-2026-03-31.md) | mcp signal |
| mcp | [wiki/refs/multi-agent-mcp-management-tools-survey.md](../../../../sources/GeminiLight__MindOS/wiki/refs/multi-agent-mcp-management-tools-survey.md) | mcp signal |
| mcp | [wiki/archive/task-spec-mcp-skill-gui.md](../../../../sources/GeminiLight__MindOS/wiki/archive/task-spec-mcp-skill-gui.md) | mcp signal |
| mcp | [tests/mcp-package-migration-contract.test.ts](../../../../sources/GeminiLight__MindOS/tests/mcp-package-migration-contract.test.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/GeminiLight__MindOS/AGENTS.md) | agentRuntime signal |
| agentRuntime | [wiki/refs/agent-communication-protocol-survey.md](../../../../sources/GeminiLight__MindOS/wiki/refs/agent-communication-protocol-survey.md) | agentRuntime signal |
| agentRuntime | [wiki/refs/agent-config-registry.md](../../../../sources/GeminiLight__MindOS/wiki/refs/agent-config-registry.md) | agentRuntime signal |
| agentRuntime | [wiki/refs/agent-dashboard-visualization-management-refs.md](../../../../sources/GeminiLight__MindOS/wiki/refs/agent-dashboard-visualization-management-refs.md) | agentRuntime signal |
| entrypoints | [packages/web/__tests__/fixtures/obsidian-plugin-packages/community-canary/main.js](../../../../sources/GeminiLight__MindOS/packages/web/__tests__/fixtures/obsidian-plugin-packages/community-canary/main.js) | entrypoints signal |
| entrypoints | [packages/retrieval/vector/src/index.ts](../../../../sources/GeminiLight__MindOS/packages/retrieval/vector/src/index.ts) | entrypoints signal |
| entrypoints | [packages/retrieval/search/src/index.ts](../../../../sources/GeminiLight__MindOS/packages/retrieval/search/src/index.ts) | entrypoints signal |
| entrypoints | [packages/retrieval/indexer/src/index.ts](../../../../sources/GeminiLight__MindOS/packages/retrieval/indexer/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 91 | [packages/web/__tests__/fixtures/obsidian-plugin-packages/community-canary/main.js](../../../../sources/GeminiLight__MindOS/packages/web/__tests__/fixtures/obsidian-plugin-packages/community-canary/main.js)<br>[packages/retrieval/vector/src/index.ts](../../../../sources/GeminiLight__MindOS/packages/retrieval/vector/src/index.ts)<br>[packages/retrieval/search/src/index.ts](../../../../sources/GeminiLight__MindOS/packages/retrieval/search/src/index.ts)<br>[packages/retrieval/indexer/src/index.ts](../../../../sources/GeminiLight__MindOS/packages/retrieval/indexer/src/index.ts)<br>[packages/retrieval/api/src/index.ts](../../../../sources/GeminiLight__MindOS/packages/retrieval/api/src/index.ts)<br>[packages/retrieval/api/src/server.test.ts](../../../../sources/GeminiLight__MindOS/packages/retrieval/api/src/server.test.ts)<br>[packages/retrieval/api/src/server.ts](../../../../sources/GeminiLight__MindOS/packages/retrieval/api/src/server.ts)<br>[packages/mindos/src/cli.d.ts](../../../../sources/GeminiLight__MindOS/packages/mindos/src/cli.d.ts) |
| agentRuntime | 503 | [AGENTS.md](../../../../sources/GeminiLight__MindOS/AGENTS.md)<br>[wiki/refs/agent-communication-protocol-survey.md](../../../../sources/GeminiLight__MindOS/wiki/refs/agent-communication-protocol-survey.md)<br>[wiki/refs/agent-config-registry.md](../../../../sources/GeminiLight__MindOS/wiki/refs/agent-config-registry.md)<br>[wiki/refs/agent-dashboard-visualization-management-refs.md](../../../../sources/GeminiLight__MindOS/wiki/refs/agent-dashboard-visualization-management-refs.md)<br>[wiki/refs/workflow-entry-points-summary.md](../../../../sources/GeminiLight__MindOS/wiki/refs/workflow-entry-points-summary.md)<br>[wiki/refs/workflow-ui-wireframes.md](../../../../sources/GeminiLight__MindOS/wiki/refs/workflow-ui-wireframes.md)<br>[wiki/refs/workflow-yaml-implementation.md](../../../../sources/GeminiLight__MindOS/wiki/refs/workflow-yaml-implementation.md)<br>[wiki/plugins/agent-inspector.md](../../../../sources/GeminiLight__MindOS/wiki/plugins/agent-inspector.md) |
| mcp | 53 | [wiki/refs/acp-skills-mcp-workflow-integration-2026-03-31.md](../../../../sources/GeminiLight__MindOS/wiki/refs/acp-skills-mcp-workflow-integration-2026-03-31.md)<br>[wiki/refs/multi-agent-mcp-management-tools-survey.md](../../../../sources/GeminiLight__MindOS/wiki/refs/multi-agent-mcp-management-tools-survey.md)<br>[wiki/archive/task-spec-mcp-skill-gui.md](../../../../sources/GeminiLight__MindOS/wiki/archive/task-spec-mcp-skill-gui.md)<br>[tests/mcp-package-migration-contract.test.ts](../../../../sources/GeminiLight__MindOS/tests/mcp-package-migration-contract.test.ts)<br>[tests/unit/cli-mcp-agents.test.ts](../../../../sources/GeminiLight__MindOS/tests/unit/cli-mcp-agents.test.ts)<br>[tests/unit/cli-mcp-install-toml.test.ts](../../../../sources/GeminiLight__MindOS/tests/unit/cli-mcp-install-toml.test.ts)<br>[tests/unit/cli-mcp-install-yaml.test.ts](../../../../sources/GeminiLight__MindOS/tests/unit/cli-mcp-install-yaml.test.ts)<br>[tests/unit/cli-mcp-install.test.ts](../../../../sources/GeminiLight__MindOS/tests/unit/cli-mcp-install.test.ts) |
| retrieval | 261 | [wiki/20-system-architecture.md](../../../../sources/GeminiLight__MindOS/wiki/20-system-architecture.md)<br>[wiki/21-design-principle.md](../../../../sources/GeminiLight__MindOS/wiki/21-design-principle.md)<br>[wiki/22-page-design.md](../../../../sources/GeminiLight__MindOS/wiki/22-page-design.md)<br>[wiki/23-mind-spaces.md](../../../../sources/GeminiLight__MindOS/wiki/23-mind-spaces.md)<br>[wiki/25-agent-architecture.md](../../../../sources/GeminiLight__MindOS/wiki/25-agent-architecture.md)<br>[wiki/30-api-reference.md](../../../../sources/GeminiLight__MindOS/wiki/30-api-reference.md)<br>[wiki/40-conventions.md](../../../../sources/GeminiLight__MindOS/wiki/40-conventions.md)<br>[wiki/41-dev-pitfall-patterns.md](../../../../sources/GeminiLight__MindOS/wiki/41-dev-pitfall-patterns.md) |
| spec | 27 | [wiki/20-system-architecture.md](../../../../sources/GeminiLight__MindOS/wiki/20-system-architecture.md)<br>[wiki/21-design-principle.md](../../../../sources/GeminiLight__MindOS/wiki/21-design-principle.md)<br>[wiki/22-page-design.md](../../../../sources/GeminiLight__MindOS/wiki/22-page-design.md)<br>[wiki/25-agent-architecture.md](../../../../sources/GeminiLight__MindOS/wiki/25-agent-architecture.md)<br>[wiki/61-plugin-architecture.md](../../../../sources/GeminiLight__MindOS/wiki/61-plugin-architecture.md)<br>[wiki/architecture-design-review.md](../../../../sources/GeminiLight__MindOS/wiki/architecture-design-review.md)<br>[wiki/architecture-diagrams.md](../../../../sources/GeminiLight__MindOS/wiki/architecture-diagrams.md)<br>[wiki/refs/opencode-desktop-architecture-and-size-research-2026-04-21.md](../../../../sources/GeminiLight__MindOS/wiki/refs/opencode-desktop-architecture-and-size-research-2026-04-21.md) |
| eval | 689 | [wiki/archive/task-spec-cli-ux.md](../../../../sources/GeminiLight__MindOS/wiki/archive/task-spec-cli-ux.md)<br>[wiki/archive/task-spec-mcp-skill-gui.md](../../../../sources/GeminiLight__MindOS/wiki/archive/task-spec-mcp-skill-gui.md)<br>[tests/acp-package-migration-contract.test.ts](../../../../sources/GeminiLight__MindOS/tests/acp-package-migration-contract.test.ts)<br>[tests/browser-extension-ai-conversation.test.ts](../../../../sources/GeminiLight__MindOS/tests/browser-extension-ai-conversation.test.ts)<br>[tests/browser-extension-api.test.ts](../../../../sources/GeminiLight__MindOS/tests/browser-extension-api.test.ts)<br>[tests/browser-extension-dir-picker.test.ts](../../../../sources/GeminiLight__MindOS/tests/browser-extension-dir-picker.test.ts)<br>[tests/browser-extension-popup-safety.test.ts](../../../../sources/GeminiLight__MindOS/tests/browser-extension-popup-safety.test.ts)<br>[tests/browser-extension-tab-extraction.test.ts](../../../../sources/GeminiLight__MindOS/tests/browser-extension-tab-extraction.test.ts) |
| security | 47 | [wiki/wiki-code-audit-report-2026-04-04.md](../../../../sources/GeminiLight__MindOS/wiki/wiki-code-audit-report-2026-04-04.md)<br>[wiki/archive/wiki-audit-report-2026-03-22.md](../../../../sources/GeminiLight__MindOS/wiki/archive/wiki-audit-report-2026-03-22.md)<br>[tests/security-hardening.test.ts](../../../../sources/GeminiLight__MindOS/tests/security-hardening.test.ts)<br>[tests/unit/cli-auth-command.test.ts](../../../../sources/GeminiLight__MindOS/tests/unit/cli-auth-command.test.ts)<br>[scripts/migrate-agent-audit-log.js](../../../../sources/GeminiLight__MindOS/scripts/migrate-agent-audit-log.js)<br>[packages/web/lib/auth-session.ts](../../../../sources/GeminiLight__MindOS/packages/web/lib/auth-session.ts)<br>[packages/web/lib/runtime-auth-config.ts](../../../../sources/GeminiLight__MindOS/packages/web/lib/runtime-auth-config.ts)<br>[packages/web/lib/obsidian-compat/import-policy.ts](../../../../sources/GeminiLight__MindOS/packages/web/lib/obsidian-compat/import-policy.ts) |
| ci | 7 | [.github/workflows/build-desktop.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/build-desktop.yml)<br>[.github/workflows/build-mobile.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/build-mobile.yml)<br>[.github/workflows/build-tauri-desktop.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/build-tauri-desktop.yml)<br>[.github/workflows/publish-clipper.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/publish-clipper.yml)<br>[.github/workflows/publish-npm.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/publish-npm.yml)<br>[.github/workflows/publish-runtime.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/publish-runtime.yml)<br>[.github/workflows/test-channel-cross-platform.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/test-channel-cross-platform.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/GeminiLight__MindOS/AGENTS.md) |
| docs | 87 | [README_zh.md](../../../../sources/GeminiLight__MindOS/README_zh.md)<br>[README.md](../../../../sources/GeminiLight__MindOS/README.md)<br>[wiki/refs/coding-agent-harness-research/README.md](../../../../sources/GeminiLight__MindOS/wiki/refs/coding-agent-harness-research/README.md)<br>[wiki/plugins/README.md](../../../../sources/GeminiLight__MindOS/wiki/plugins/README.md)<br>[tests/integration/README.md](../../../../sources/GeminiLight__MindOS/tests/integration/README.md)<br>[tests/e2e/README.md](../../../../sources/GeminiLight__MindOS/tests/e2e/README.md)<br>[templates/README.md](../../../../sources/GeminiLight__MindOS/templates/README.md)<br>[templates/zh/README.md](../../../../sources/GeminiLight__MindOS/templates/zh/README.md) |
| config | 34 | [package.json](../../../../sources/GeminiLight__MindOS/package.json)<br>[pnpm-workspace.yaml](../../../../sources/GeminiLight__MindOS/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/GeminiLight__MindOS/tsconfig.json)<br>[turbo.json](../../../../sources/GeminiLight__MindOS/turbo.json)<br>[tests/integration/package.json](../../../../sources/GeminiLight__MindOS/tests/integration/package.json)<br>[packages/web/package.json](../../../../sources/GeminiLight__MindOS/packages/web/package.json)<br>[packages/web/tsconfig.json](../../../../sources/GeminiLight__MindOS/packages/web/tsconfig.json)<br>[packages/retrieval/vector/package.json](../../../../sources/GeminiLight__MindOS/packages/retrieval/vector/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 689 | [wiki/archive/task-spec-cli-ux.md](../../../../sources/GeminiLight__MindOS/wiki/archive/task-spec-cli-ux.md)<br>[wiki/archive/task-spec-mcp-skill-gui.md](../../../../sources/GeminiLight__MindOS/wiki/archive/task-spec-mcp-skill-gui.md)<br>[tests/acp-package-migration-contract.test.ts](../../../../sources/GeminiLight__MindOS/tests/acp-package-migration-contract.test.ts)<br>[tests/browser-extension-ai-conversation.test.ts](../../../../sources/GeminiLight__MindOS/tests/browser-extension-ai-conversation.test.ts)<br>[tests/browser-extension-api.test.ts](../../../../sources/GeminiLight__MindOS/tests/browser-extension-api.test.ts)<br>[tests/browser-extension-dir-picker.test.ts](../../../../sources/GeminiLight__MindOS/tests/browser-extension-dir-picker.test.ts) |
| CI workflows | 7 | [.github/workflows/build-desktop.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/build-desktop.yml)<br>[.github/workflows/build-mobile.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/build-mobile.yml)<br>[.github/workflows/build-tauri-desktop.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/build-tauri-desktop.yml)<br>[.github/workflows/publish-clipper.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/publish-clipper.yml)<br>[.github/workflows/publish-npm.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/publish-npm.yml)<br>[.github/workflows/publish-runtime.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/publish-runtime.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 47 | [wiki/wiki-code-audit-report-2026-04-04.md](../../../../sources/GeminiLight__MindOS/wiki/wiki-code-audit-report-2026-04-04.md)<br>[wiki/archive/wiki-audit-report-2026-03-22.md](../../../../sources/GeminiLight__MindOS/wiki/archive/wiki-audit-report-2026-03-22.md)<br>[tests/security-hardening.test.ts](../../../../sources/GeminiLight__MindOS/tests/security-hardening.test.ts)<br>[tests/unit/cli-auth-command.test.ts](../../../../sources/GeminiLight__MindOS/tests/unit/cli-auth-command.test.ts)<br>[scripts/migrate-agent-audit-log.js](../../../../sources/GeminiLight__MindOS/scripts/migrate-agent-audit-log.js)<br>[packages/web/lib/auth-session.ts](../../../../sources/GeminiLight__MindOS/packages/web/lib/auth-session.ts) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/GeminiLight__MindOS/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `wiki/refs/acp-skills-mcp-workflow-integration-2026-03-31.md`, `wiki/refs/multi-agent-mcp-management-tools-survey.md`, `wiki/archive/task-spec-mcp-skill-gui.md`.
2. Trace execution through entrypoints: `packages/web/__tests__/fixtures/obsidian-plugin-packages/community-canary/main.js`, `packages/retrieval/vector/src/index.ts`, `packages/retrieval/search/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `wiki/refs/agent-communication-protocol-survey.md`, `wiki/refs/agent-config-registry.md`.
4. Inspect retrieval/memory/indexing through: `wiki/20-system-architecture.md`, `wiki/21-design-principle.md`, `wiki/22-page-design.md`.
5. Verify behavior through test/eval files: `wiki/archive/task-spec-cli-ux.md`, `wiki/archive/task-spec-mcp-skill-gui.md`, `tests/acp-package-migration-contract.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 MindOS is a Human AI Collaborative Mind System, where human thinks and agents act. Globally sync your mind for all agent. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, react이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
