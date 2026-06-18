# gsd-build/get-shit-done Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 1854 files, 87 directories.

## 요약

- 조사 단위: `sources/gsd-build__get-shit-done` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,854 files, 87 directories, depth score 131, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/feat-3025-mcp-token-budget-docs.test.cjs, tests/mcp-tool-inheritance.test.cjs, .changeset/mcp-token-budget-docs.md이고, 의존성 단서는 anthropic, claude, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | gsd-build/get-shit-done |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | JavaScript |
| Stars | 64305 |
| Forks | 5465 |
| License | MIT License |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/gsd-build__get-shit-done](../../../../sources/gsd-build__get-shit-done) |
| Existing report | [reports/clone-structures/gsd-build__get-shit-done.md](../../../clone-structures/gsd-build__get-shit-done.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1854 / 87 |
| Max observed depth | 7 |
| Top directories | .changeset, .githooks, .github, .out-of-scope, .plans, agents, assets, bin, commands, docs, get-shit-done, hooks, scripts, sdk, tests |
| Top extensions | .md: 786, .cjs: 661, .ts: 303, .yml: 28, .json: 19, .mjs: 19, .js: 13, .sh: 10, (none): 8, .svg: 3, .png: 2, .jsonl: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 125 |
| docs | documentation surface | 34 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| assets | top-level component | 1 |
| bin | top-level component | 1 |
| commands | top-level component | 1 |
| get-shit-done | top-level component | 1 |
| hooks | top-level component | 1 |
| scripts | top-level component | 1 |
| sdk | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build:hooks | node scripts/build-hooks.js |
| build | package.json | build:sdk | cd sdk && npm ci && npm run build |
| quality | package.json | check:alias-drift | cd sdk && npm run check:alias-drift |
| quality | package.json | check:state-document-fresh | cd sdk && npm run check:state-document-fresh |
| quality | package.json | check:configuration-fresh | cd sdk && npm run check:configuration-fresh |
| build | package.json | check:workstream-inventory-builder-fresh | cd sdk && npm run check:workstream-inventory-builder-fresh |
| quality | package.json | check:project-root-fresh | cd sdk && npm run check:project-root-fresh |
| quality | package.json | check:plan-scan-fresh | cd sdk && npm run check:plan-scan-fresh |
| quality | package.json | check:secrets-fresh | cd sdk && npm run check:secrets-fresh |
| quality | package.json | check:schema-detect-fresh | cd sdk && npm run check:schema-detect-fresh |
| quality | package.json | check:decisions-fresh | cd sdk && npm run check:decisions-fresh |
| quality | package.json | check:workstream-name-policy-fresh | cd sdk && npm run check:workstream-name-policy-fresh |
| build | package.json | prepublishOnly | npm run build:hooks && npm run build:sdk |
| test | package.json | pretest | npm run build:sdk && npm run lint:skill-deps |
| test | package.json | pretest:coverage | npm run build:sdk |
| quality | package.json | lint:descriptions | node scripts/lint-descriptions.cjs |
| quality | package.json | lint:skill-deps | node scripts/lint-skill-deps.cjs |
| test | package.json | lint:tests | node scripts/lint-no-source-grep.cjs |
| test | package.json | lint:test-file-count | node scripts/lint-test-file-count.cjs |
| quality | package.json | lint:pr-checks | node scripts/lint-pr-check-project-dir.cjs |
| quality | package.json | lint:changeset | node scripts/changeset/lint.cjs |
| quality | package.json | lint:docs | node scripts/lint-docs-required.cjs |
| utility | package.json | changeset | node scripts/changeset/new.cjs |
| utility | package.json | changelog:render | node scripts/changeset/cli.cjs render |
| test | package.json | test | node scripts/run-tests.cjs |
| test | package.json | test:unit | node scripts/run-tests.cjs --suite unit |
| test | package.json | test:integration | node scripts/run-tests.cjs --suite integration |
| test | package.json | test:install | node scripts/run-tests.cjs --suite install |
| test | package.json | test:security | node scripts/run-tests.cjs --suite security |
| test | package.json | test:slow | node scripts/run-tests.cjs --suite slow |
| test | package.json | test:coverage | c8 --check-coverage --lines 70 --reporter text --include 'get-shit-done/bin/lib/*.cjs' --exclude 'tests/**' --all node scripts/run-tests.cjs |
| test | package.json | test:coverage:unit | c8 --check-coverage --lines 70 --reporter text --include 'get-shit-done/bin/lib/*.cjs' --exclude 'tests/**' --all node scripts/run-tests.cjs --suite unit |
| test | package.json | test:coverage:all | npm run test:coverage |
| entrypoint | package.json bin | install.js | bin/install.js |
| entrypoint | package.json bin | gsd-sdk.js | bin/gsd-sdk.js |
| entrypoint | package.json bin | gsd-sdk.js | bin/gsd-sdk.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | anthropic, claude |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/feat-3025-mcp-token-budget-docs.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/feat-3025-mcp-token-budget-docs.test.cjs) | mcp signal |
| mcp | [tests/mcp-tool-inheritance.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/mcp-tool-inheritance.test.cjs) | mcp signal |
| mcp | [.changeset/mcp-token-budget-docs.md](../../../../sources/gsd-build__get-shit-done/.changeset/mcp-token-budget-docs.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/gsd-build__get-shit-done/AGENTS.md) | agentRuntime signal |
| agentRuntime | [CONTEXT.md](../../../../sources/gsd-build__get-shit-done/CONTEXT.md) | agentRuntime signal |
| agentRuntime | [tests/agent-frontmatter.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-frontmatter.test.cjs) | agentRuntime signal |
| agentRuntime | [tests/agent-install-validation.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-install-validation.test.cjs) | agentRuntime signal |
| entrypoints | [sdk/src/cli.test.ts](../../../../sources/gsd-build__get-shit-done/sdk/src/cli.test.ts) | entrypoints signal |
| entrypoints | [sdk/src/cli.ts](../../../../sources/gsd-build__get-shit-done/sdk/src/cli.ts) | entrypoints signal |
| entrypoints | [sdk/src/index.ts](../../../../sources/gsd-build__get-shit-done/sdk/src/index.ts) | entrypoints signal |
| entrypoints | [get-shit-done/bin/check-latest-version.cjs](../../../../sources/gsd-build__get-shit-done/get-shit-done/bin/check-latest-version.cjs) | entrypoints signal |
| instruction | [get-shit-done/templates/copilot-instructions.md](../../../../sources/gsd-build__get-shit-done/get-shit-done/templates/copilot-instructions.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 86 | [sdk/src/cli.test.ts](../../../../sources/gsd-build__get-shit-done/sdk/src/cli.test.ts)<br>[sdk/src/cli.ts](../../../../sources/gsd-build__get-shit-done/sdk/src/cli.ts)<br>[sdk/src/index.ts](../../../../sources/gsd-build__get-shit-done/sdk/src/index.ts)<br>[get-shit-done/bin/check-latest-version.cjs](../../../../sources/gsd-build__get-shit-done/get-shit-done/bin/check-latest-version.cjs)<br>[get-shit-done/bin/gsd-tools.cjs](../../../../sources/gsd-build__get-shit-done/get-shit-done/bin/gsd-tools.cjs)<br>[get-shit-done/bin/verify-reapply-patches.cjs](../../../../sources/gsd-build__get-shit-done/get-shit-done/bin/verify-reapply-patches.cjs)<br>[get-shit-done/bin/lib/active-workstream-store.cjs](../../../../sources/gsd-build__get-shit-done/get-shit-done/bin/lib/active-workstream-store.cjs)<br>[get-shit-done/bin/lib/adr-parser.cjs](../../../../sources/gsd-build__get-shit-done/get-shit-done/bin/lib/adr-parser.cjs) |
| agentRuntime | 122 | [AGENTS.md](../../../../sources/gsd-build__get-shit-done/AGENTS.md)<br>[CONTEXT.md](../../../../sources/gsd-build__get-shit-done/CONTEXT.md)<br>[tests/agent-frontmatter.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-frontmatter.test.cjs)<br>[tests/agent-install-validation.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-install-validation.test.cjs)<br>[tests/agent-required-reading-consistency.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-required-reading-consistency.test.cjs)<br>[tests/agent-size-budget.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-size-budget.test.cjs)<br>[tests/agent-skills-awareness.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-skills-awareness.test.cjs)<br>[tests/agent-skills.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-skills.test.cjs) |
| mcp | 3 | [tests/feat-3025-mcp-token-budget-docs.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/feat-3025-mcp-token-budget-docs.test.cjs)<br>[tests/mcp-tool-inheritance.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/mcp-tool-inheritance.test.cjs)<br>[.changeset/mcp-token-budget-docs.md](../../../../sources/gsd-build__get-shit-done/.changeset/mcp-token-budget-docs.md) |
| retrieval | 14 | [tests/bug-2801-ingest-docs-handler.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-2801-ingest-docs-handler.test.cjs)<br>[tests/enh-3209-plan-phase-ingest-adr.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/enh-3209-plan-phase-ingest-adr.test.cjs)<br>[tests/ingest-docs.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/ingest-docs.test.cjs)<br>[sdk/src/index.ts](../../../../sources/gsd-build__get-shit-done/sdk/src/index.ts)<br>[sdk/src/runtime-bridge-sync/index.test.ts](../../../../sources/gsd-build__get-shit-done/sdk/src/runtime-bridge-sync/index.test.ts)<br>[sdk/src/runtime-bridge-sync/index.ts](../../../../sources/gsd-build__get-shit-done/sdk/src/runtime-bridge-sync/index.ts)<br>[sdk/src/query/index-thin-seam.test.ts](../../../../sources/gsd-build__get-shit-done/sdk/src/query/index-thin-seam.test.ts)<br>[sdk/src/query/index.ts](../../../../sources/gsd-build__get-shit-done/sdk/src/query/index.ts) |
| spec | 81 | [tests/adr-parser.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/adr-parser.test.cjs)<br>[tests/bug-2661-roadmap-sync-parallel.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-2661-roadmap-sync-parallel.test.cjs)<br>[tests/bug-2769-requirements-header-variants.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-2769-requirements-header-variants.test.cjs)<br>[tests/bug-3128-roadmap-plan-count-slug-layout.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-3128-roadmap-plan-count-slug-layout.test.cjs)<br>[tests/bug-3537-padded-id-against-unpadded-roadmap.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-3537-padded-id-against-unpadded-roadmap.test.cjs)<br>[tests/bug-3599-roadmap-get-phase-project-code-prefix.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-3599-roadmap-get-phase-project-code-prefix.test.cjs)<br>[tests/enh-2447-roadmap-wave-deps.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/enh-2447-roadmap-wave-deps.test.cjs)<br>[tests/enh-3209-plan-phase-ingest-adr.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/enh-3209-plan-phase-ingest-adr.test.cjs) |
| eval | 747 | [.release-monitor.sh](../../../../sources/gsd-build__get-shit-done/.release-monitor.sh)<br>[TEST-EXAMPLES.md](../../../../sources/gsd-build__get-shit-done/TEST-EXAMPLES.md)<br>[tests/active-workstream-store.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/active-workstream-store.test.cjs)<br>[tests/adr-parser.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/adr-parser.test.cjs)<br>[tests/agent-frontmatter.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-frontmatter.test.cjs)<br>[tests/agent-install-validation.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-install-validation.test.cjs)<br>[tests/agent-required-reading-consistency.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-required-reading-consistency.test.cjs)<br>[tests/agent-size-budget.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-size-budget.test.cjs) |
| security | 75 | [SECURITY.md](../../../../sources/gsd-build__get-shit-done/SECURITY.md)<br>[tests/audit-fix-command.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/audit-fix-command.test.cjs)<br>[tests/bug-1754-js-hook-guard.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-1754-js-hook-guard.test.cjs)<br>[tests/bug-1817-sh-hook-guard.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-1817-sh-hook-guard.test.cjs)<br>[tests/bug-2344-read-guard-claudecode-env.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-2344-read-guard-claudecode-env.test.cjs)<br>[tests/bug-2384-post-merge-deletion-audit.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-2384-post-merge-deletion-audit.test.cjs)<br>[tests/bug-2520-read-guard-hook-subprocess-env.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-2520-read-guard-hook-subprocess-env.test.cjs)<br>[tests/bug-2659-audit-open-crash.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-2659-audit-open-crash.test.cjs) |
| ci | 20 | [.github/workflows/auto-branch.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/auto-branch.yml)<br>[.github/workflows/auto-close-deprecated.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/auto-close-deprecated.yml)<br>[.github/workflows/auto-label-issues.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/auto-label-issues.yml)<br>[.github/workflows/branch-cleanup.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/branch-cleanup.yml)<br>[.github/workflows/branch-naming.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/branch-naming.yml)<br>[.github/workflows/canary.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/canary.yml)<br>[.github/workflows/changeset-required.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/changeset-required.yml)<br>[.github/workflows/close-draft-prs.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/close-draft-prs.yml) |
| container | 0 | not obvious |
| instruction | 6 | [AGENTS.md](../../../../sources/gsd-build__get-shit-done/AGENTS.md)<br>[get-shit-done/templates/copilot-instructions.md](../../../../sources/gsd-build__get-shit-done/get-shit-done/templates/copilot-instructions.md)<br>[docs/AGENTS.md](../../../../sources/gsd-build__get-shit-done/docs/AGENTS.md)<br>[docs/pt-BR/AGENTS.md](../../../../sources/gsd-build__get-shit-done/docs/pt-BR/AGENTS.md)<br>[docs/ko-KR/AGENTS.md](../../../../sources/gsd-build__get-shit-done/docs/ko-KR/AGENTS.md)<br>[docs/ja-JP/AGENTS.md](../../../../sources/gsd-build__get-shit-done/docs/ja-JP/AGENTS.md) |
| docs | 127 | [README.ja-JP.md](../../../../sources/gsd-build__get-shit-done/README.ja-JP.md)<br>[README.ko-KR.md](../../../../sources/gsd-build__get-shit-done/README.ko-KR.md)<br>[README.md](../../../../sources/gsd-build__get-shit-done/README.md)<br>[README.pt-BR.md](../../../../sources/gsd-build__get-shit-done/README.pt-BR.md)<br>[README.zh-CN.md](../../../../sources/gsd-build__get-shit-done/README.zh-CN.md)<br>[tests/fixtures/adversarial/security/README.md](../../../../sources/gsd-build__get-shit-done/tests/fixtures/adversarial/security/README.md)<br>[tests/fixtures/adversarial/roadmap/README.md](../../../../sources/gsd-build__get-shit-done/tests/fixtures/adversarial/roadmap/README.md)<br>[tests/fixtures/adversarial/frontmatter/README.md](../../../../sources/gsd-build__get-shit-done/tests/fixtures/adversarial/frontmatter/README.md) |
| config | 4 | [package.json](../../../../sources/gsd-build__get-shit-done/package.json)<br>[tsconfig.json](../../../../sources/gsd-build__get-shit-done/tsconfig.json)<br>[sdk/package.json](../../../../sources/gsd-build__get-shit-done/sdk/package.json)<br>[sdk/tsconfig.json](../../../../sources/gsd-build__get-shit-done/sdk/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 747 | [.release-monitor.sh](../../../../sources/gsd-build__get-shit-done/.release-monitor.sh)<br>[TEST-EXAMPLES.md](../../../../sources/gsd-build__get-shit-done/TEST-EXAMPLES.md)<br>[tests/active-workstream-store.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/active-workstream-store.test.cjs)<br>[tests/adr-parser.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/adr-parser.test.cjs)<br>[tests/agent-frontmatter.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-frontmatter.test.cjs)<br>[tests/agent-install-validation.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-install-validation.test.cjs) |
| CI workflows | 20 | [.github/workflows/auto-branch.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/auto-branch.yml)<br>[.github/workflows/auto-close-deprecated.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/auto-close-deprecated.yml)<br>[.github/workflows/auto-label-issues.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/auto-label-issues.yml)<br>[.github/workflows/branch-cleanup.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/branch-cleanup.yml)<br>[.github/workflows/branch-naming.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/branch-naming.yml)<br>[.github/workflows/canary.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/canary.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 75 | [SECURITY.md](../../../../sources/gsd-build__get-shit-done/SECURITY.md)<br>[tests/audit-fix-command.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/audit-fix-command.test.cjs)<br>[tests/bug-1754-js-hook-guard.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-1754-js-hook-guard.test.cjs)<br>[tests/bug-1817-sh-hook-guard.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-1817-sh-hook-guard.test.cjs)<br>[tests/bug-2344-read-guard-claudecode-env.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-2344-read-guard-claudecode-env.test.cjs)<br>[tests/bug-2384-post-merge-deletion-audit.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-2384-post-merge-deletion-audit.test.cjs) |
| Agent instructions | 6 | [AGENTS.md](../../../../sources/gsd-build__get-shit-done/AGENTS.md)<br>[get-shit-done/templates/copilot-instructions.md](../../../../sources/gsd-build__get-shit-done/get-shit-done/templates/copilot-instructions.md)<br>[docs/AGENTS.md](../../../../sources/gsd-build__get-shit-done/docs/AGENTS.md)<br>[docs/pt-BR/AGENTS.md](../../../../sources/gsd-build__get-shit-done/docs/pt-BR/AGENTS.md)<br>[docs/ko-KR/AGENTS.md](../../../../sources/gsd-build__get-shit-done/docs/ko-KR/AGENTS.md)<br>[docs/ja-JP/AGENTS.md](../../../../sources/gsd-build__get-shit-done/docs/ja-JP/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/feat-3025-mcp-token-budget-docs.test.cjs`, `tests/mcp-tool-inheritance.test.cjs`, `.changeset/mcp-token-budget-docs.md`.
2. Trace execution through entrypoints: `sdk/src/cli.test.ts`, `sdk/src/cli.ts`, `sdk/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `CONTEXT.md`, `tests/agent-frontmatter.test.cjs`.
4. Inspect retrieval/memory/indexing through: `tests/bug-2801-ingest-docs-handler.test.cjs`, `tests/enh-3209-plan-phase-ingest-adr.test.cjs`, `tests/ingest-docs.test.cjs`.
5. Verify behavior through test/eval files: `.release-monitor.sh`, `TEST-EXAMPLES.md`, `tests/active-workstream-store.test.cjs`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 1854 files, 87 directories.. 핵심 구조 신호는 JavaScript, package.json, README.md, AGENTS.md, LICENSE, anthropic이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 major metadata risk not obvious입니다.
