# vercel/ai Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a free open-source library for building AI-powered applications and agents

## 요약

- 조사 단위: `sources/vercel__ai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 7,129 files, 1,154 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/xai/src/tool/mcp-server.ts, packages/react/src/mcp-apps/app-frame.tsx, packages/react/src/mcp-apps/app-renderer.tsx이고, 의존성 단서는 next, react, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | vercel/ai |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 24941 |
| Forks | 4628 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/vercel__ai](../../../../sources/vercel__ai) |
| Existing report | [reports/global-trending/repositories/vercel__ai.md](../../../global-trending/repositories/vercel__ai.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 7129 / 1154 |
| Max observed depth | 9 |
| Top directories | .agents, .changeset, .claude, .cursor, .github, .husky, architecture, assets, content, contributing, examples, packages, skills, tools |
| Top extensions | .ts: 4513, .md: 767, .json: 494, .mdx: 492, .tsx: 313, .js: 168, .txt: 133, .snap: 45, (none): 31, .example: 22, .vue: 21, .css: 19 |
| Source patterns | monorepo/workspace, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/xai | packages workspace | 28 |
| packages/sandbox-vercel | packages workspace | 20 |
| packages/mcp | packages workspace | 19 |
| packages/sandbox-just-bash | packages workspace | 18 |
| packages/workflow | packages workspace | 16 |
| packages/policy-opa | packages workspace | 14 |
| packages/react | packages workspace | 14 |
| packages/voyage | packages workspace | 14 |
| packages/openai | packages workspace | 13 |
| packages/vue | packages workspace | 12 |
| packages/provider-utils | packages workspace | 9 |
| packages/rsc | packages workspace | 8 |
| packages/provider | packages workspace | 7 |
| packages/togetherai | packages workspace | 7 |
| packages/vercel | packages workspace | 7 |
| packages/valibot | packages workspace | 6 |
| packages/svelte | packages workspace | 5 |
| packages/tui | packages workspace | 5 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | turbo build --concurrency 16 |
| build | package.json | build:examples | turbo build --filter=@example/* |
| build | package.json | build:packages | turbo build --filter=@ai-sdk/* --filter=ai |
| utility | package.json | changeset | changeset |
| utility | package.json | clean | turbo clean |
| serve-dev | package.json | dev | turbo dev --cache=local:r,remote:r --concurrency 25 --continue |
| utility | package.json | prepare | husky |
| utility | package.json | update-references | update-ts-references && node tools/split-ts-references.mjs |
| build | package.json | type-check | tsc --build |
| build | package.json | type-check:full | tsc --build tsconfig.with-examples.json |
| quality | package.json | publint | turbo publint |
| test | package.json | test | turbo test --concurrency 16 --filter=!@example/* |
| test | package.json | test:ci | turbo test --concurrency 16 --filter=!@example/* --filter=!ai --filter=!@ai-sdk/codemod --only |
| test | package.json | test:update | turbo test:update --concurrency 16 --filter=!@example/* |
| build | package.json | ci:release | turbo clean && turbo build && changeset publish |
| utility | package.json | ci:version | changeset version && node .github/scripts/cleanup-examples-changesets.mjs && pnpm install --no-frozen-lockfile |
| utility | package.json | clean-examples | node .github/scripts/cleanup-examples-changesets.mjs && pnpm install --no-frozen-lockfile |
| quality | package.json | check | ultracite check |
| utility | package.json | fix | ultracite fix |
| utility | package.json | validate:docs | node tools/validate-properties-tables.mjs |
| quality | package.json | konsistent | turbo run konsistent:validate konsistent:check --log-order=grouped --log-prefix=none |
| quality | package.json | konsistent:check | konsistent --config-path .github/konsistent.json |
| utility | package.json | konsistent:validate | konsistent validate --config-path .github/konsistent.json |
| utility | package.json | worktree:setup | bash tools/worktree-setup.sh |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | next, react |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [packages/xai/src/tool/mcp-server.ts](../../../../sources/vercel__ai/packages/xai/src/tool/mcp-server.ts) | mcp signal |
| mcp | [packages/react/src/mcp-apps/app-frame.tsx](../../../../sources/vercel__ai/packages/react/src/mcp-apps/app-frame.tsx) | mcp signal |
| mcp | [packages/react/src/mcp-apps/app-renderer.tsx](../../../../sources/vercel__ai/packages/react/src/mcp-apps/app-renderer.tsx) | mcp signal |
| mcp | [packages/react/src/mcp-apps/bridge.test.ts](../../../../sources/vercel__ai/packages/react/src/mcp-apps/bridge.test.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/vercel__ai/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/split-ts-references.mjs](../../../../sources/vercel__ai/tools/split-ts-references.mjs) | agentRuntime signal |
| agentRuntime | [tools/validate-properties-tables.mjs](../../../../sources/vercel__ai/tools/validate-properties-tables.mjs) | agentRuntime signal |
| agentRuntime | [tools/worktree-setup.sh](../../../../sources/vercel__ai/tools/worktree-setup.sh) | agentRuntime signal |
| entrypoints | [tools/konsistent-provider/src/index.ts](../../../../sources/vercel__ai/tools/konsistent-provider/src/index.ts) | entrypoints signal |
| entrypoints | [packages/xai/src/index.ts](../../../../sources/vercel__ai/packages/xai/src/index.ts) | entrypoints signal |
| entrypoints | [packages/workflow/src/index.ts](../../../../sources/vercel__ai/packages/workflow/src/index.ts) | entrypoints signal |
| entrypoints | [packages/vue/src/index.ts](../../../../sources/vercel__ai/packages/vue/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 102 | [tools/konsistent-provider/src/index.ts](../../../../sources/vercel__ai/tools/konsistent-provider/src/index.ts)<br>[packages/xai/src/index.ts](../../../../sources/vercel__ai/packages/xai/src/index.ts)<br>[packages/workflow/src/index.ts](../../../../sources/vercel__ai/packages/workflow/src/index.ts)<br>[packages/vue/src/index.ts](../../../../sources/vercel__ai/packages/vue/src/index.ts)<br>[packages/voyage/src/index.ts](../../../../sources/vercel__ai/packages/voyage/src/index.ts)<br>[packages/vercel/src/index.ts](../../../../sources/vercel__ai/packages/vercel/src/index.ts)<br>[packages/valibot/src/index.ts](../../../../sources/vercel__ai/packages/valibot/src/index.ts)<br>[packages/tui/src/index.ts](../../../../sources/vercel__ai/packages/tui/src/index.ts) |
| agentRuntime | 595 | [AGENTS.md](../../../../sources/vercel__ai/AGENTS.md)<br>[tools/split-ts-references.mjs](../../../../sources/vercel__ai/tools/split-ts-references.mjs)<br>[tools/validate-properties-tables.mjs](../../../../sources/vercel__ai/tools/validate-properties-tables.mjs)<br>[tools/worktree-setup.sh](../../../../sources/vercel__ai/tools/worktree-setup.sh)<br>[tools/tsconfig/base.json](../../../../sources/vercel__ai/tools/tsconfig/base.json)<br>[tools/tsconfig/package.json](../../../../sources/vercel__ai/tools/tsconfig/package.json)<br>[tools/tsconfig/react-library.json](../../../../sources/vercel__ai/tools/tsconfig/react-library.json)<br>[tools/tsconfig/ts-library.json](../../../../sources/vercel__ai/tools/tsconfig/ts-library.json) |
| mcp | 159 | [packages/xai/src/tool/mcp-server.ts](../../../../sources/vercel__ai/packages/xai/src/tool/mcp-server.ts)<br>[packages/react/src/mcp-apps/app-frame.tsx](../../../../sources/vercel__ai/packages/react/src/mcp-apps/app-frame.tsx)<br>[packages/react/src/mcp-apps/app-renderer.tsx](../../../../sources/vercel__ai/packages/react/src/mcp-apps/app-renderer.tsx)<br>[packages/react/src/mcp-apps/bridge.test.ts](../../../../sources/vercel__ai/packages/react/src/mcp-apps/bridge.test.ts)<br>[packages/react/src/mcp-apps/bridge.ts](../../../../sources/vercel__ai/packages/react/src/mcp-apps/bridge.ts)<br>[packages/react/src/mcp-apps/index.ts](../../../../sources/vercel__ai/packages/react/src/mcp-apps/index.ts)<br>[packages/react/src/mcp-apps/sandbox.ts](../../../../sources/vercel__ai/packages/react/src/mcp-apps/sandbox.ts)<br>[packages/react/src/mcp-apps/types.ts](../../../../sources/vercel__ai/packages/react/src/mcp-apps/types.ts) |
| retrieval | 417 | [tools/konsistent-provider/src/index.ts](../../../../sources/vercel__ai/tools/konsistent-provider/src/index.ts)<br>[packages/xai/src/index.ts](../../../../sources/vercel__ai/packages/xai/src/index.ts)<br>[packages/xai/src/tool/index.ts](../../../../sources/vercel__ai/packages/xai/src/tool/index.ts)<br>[packages/xai/src/realtime/index.ts](../../../../sources/vercel__ai/packages/xai/src/realtime/index.ts)<br>[packages/workflow/src/index.ts](../../../../sources/vercel__ai/packages/workflow/src/index.ts)<br>[packages/workflow/src/to-ui-message-chunk.ts](../../../../sources/vercel__ai/packages/workflow/src/to-ui-message-chunk.ts)<br>[packages/vue/src/index.ts](../../../../sources/vercel__ai/packages/vue/src/index.ts)<br>[packages/voyage/src/index.ts](../../../../sources/vercel__ai/packages/voyage/src/index.ts) |
| spec | 21 | [skills/adr-skill/SKILL.md](../../../../sources/vercel__ai/skills/adr-skill/SKILL.md)<br>[skills/adr-skill/scripts/bootstrap_adr.js](../../../../sources/vercel__ai/skills/adr-skill/scripts/bootstrap_adr.js)<br>[skills/adr-skill/scripts/new_adr.js](../../../../sources/vercel__ai/skills/adr-skill/scripts/new_adr.js)<br>[skills/adr-skill/scripts/set_adr_status.js](../../../../sources/vercel__ai/skills/adr-skill/scripts/set_adr_status.js)<br>[skills/adr-skill/references/adr-conventions.md](../../../../sources/vercel__ai/skills/adr-skill/references/adr-conventions.md)<br>[skills/adr-skill/references/examples.md](../../../../sources/vercel__ai/skills/adr-skill/references/examples.md)<br>[skills/adr-skill/references/review-checklist.md](../../../../sources/vercel__ai/skills/adr-skill/references/review-checklist.md)<br>[skills/adr-skill/references/template-variants.md](../../../../sources/vercel__ai/skills/adr-skill/references/template-variants.md) |
| eval | 1068 | [skills/capture-api-response-test-fixture/SKILL.md](../../../../sources/vercel__ai/skills/capture-api-response-test-fixture/SKILL.md)<br>[packages/xai/src/convert-to-xai-chat-messages.test.ts](../../../../sources/vercel__ai/packages/xai/src/convert-to-xai-chat-messages.test.ts)<br>[packages/xai/src/convert-xai-chat-usage.test.ts](../../../../sources/vercel__ai/packages/xai/src/convert-xai-chat-usage.test.ts)<br>[packages/xai/src/xai-chat-language-model.test.ts](../../../../sources/vercel__ai/packages/xai/src/xai-chat-language-model.test.ts)<br>[packages/xai/src/xai-error.test.ts](../../../../sources/vercel__ai/packages/xai/src/xai-error.test.ts)<br>[packages/xai/src/xai-image-model.test.ts](../../../../sources/vercel__ai/packages/xai/src/xai-image-model.test.ts)<br>[packages/xai/src/xai-prepare-tools.test.ts](../../../../sources/vercel__ai/packages/xai/src/xai-prepare-tools.test.ts)<br>[packages/xai/src/xai-provider.test.ts](../../../../sources/vercel__ai/packages/xai/src/xai-provider.test.ts) |
| security | 143 | [packages/sandbox-vercel/CHANGELOG.md](../../../../sources/vercel__ai/packages/sandbox-vercel/CHANGELOG.md)<br>[packages/sandbox-vercel/package.json](../../../../sources/vercel__ai/packages/sandbox-vercel/package.json)<br>[packages/sandbox-vercel/README.md](../../../../sources/vercel__ai/packages/sandbox-vercel/README.md)<br>[packages/sandbox-vercel/tsconfig.build.json](../../../../sources/vercel__ai/packages/sandbox-vercel/tsconfig.build.json)<br>[packages/sandbox-vercel/tsconfig.json](../../../../sources/vercel__ai/packages/sandbox-vercel/tsconfig.json)<br>[packages/sandbox-vercel/tsup.config.ts](../../../../sources/vercel__ai/packages/sandbox-vercel/tsup.config.ts)<br>[packages/sandbox-vercel/turbo.json](../../../../sources/vercel__ai/packages/sandbox-vercel/turbo.json)<br>[packages/sandbox-vercel/vitest.node.config.js](../../../../sources/vercel__ai/packages/sandbox-vercel/vitest.node.config.js) |
| ci | 14 | [.github/workflows/ai-provider-api-changes.yml](../../../../sources/vercel__ai/.github/workflows/ai-provider-api-changes.yml)<br>[.github/workflows/ai-provider-models.yml](../../../../sources/vercel__ai/.github/workflows/ai-provider-models.yml)<br>[.github/workflows/assign-team-pull-request.yml](../../../../sources/vercel__ai/.github/workflows/assign-team-pull-request.yml)<br>[.github/workflows/auto-merge-release-prs.yml](../../../../sources/vercel__ai/.github/workflows/auto-merge-release-prs.yml)<br>[.github/workflows/backport.yml](../../../../sources/vercel__ai/.github/workflows/backport.yml)<br>[.github/workflows/ci.yml](../../../../sources/vercel__ai/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/vercel__ai/.github/workflows/release.yml)<br>[.github/workflows/slack-team-review-notification.yml](../../../../sources/vercel__ai/.github/workflows/slack-team-review-notification.yml) |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/vercel__ai/AGENTS.md)<br>[packages/ai/AGENTS.md](../../../../sources/vercel__ai/packages/ai/AGENTS.md) |
| docs | 364 | [tools/konsistent-provider/README.md](../../../../sources/vercel__ai/tools/konsistent-provider/README.md)<br>[packages/xai/README.md](../../../../sources/vercel__ai/packages/xai/README.md)<br>[packages/workflow/README.md](../../../../sources/vercel__ai/packages/workflow/README.md)<br>[packages/vue/README.md](../../../../sources/vercel__ai/packages/vue/README.md)<br>[packages/voyage/README.md](../../../../sources/vercel__ai/packages/voyage/README.md)<br>[packages/vercel/README.md](../../../../sources/vercel__ai/packages/vercel/README.md)<br>[packages/valibot/README.md](../../../../sources/vercel__ai/packages/valibot/README.md)<br>[packages/tui/README.md](../../../../sources/vercel__ai/packages/tui/README.md) |
| config | 257 | [package.json](../../../../sources/vercel__ai/package.json)<br>[pnpm-workspace.yaml](../../../../sources/vercel__ai/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/vercel__ai/tsconfig.json)<br>[turbo.json](../../../../sources/vercel__ai/turbo.json)<br>[tools/tsconfig/package.json](../../../../sources/vercel__ai/tools/tsconfig/package.json)<br>[tools/konsistent-provider/package.json](../../../../sources/vercel__ai/tools/konsistent-provider/package.json)<br>[tools/konsistent-provider/tsconfig.json](../../../../sources/vercel__ai/tools/konsistent-provider/tsconfig.json)<br>[tools/generate-llms-txt/package.json](../../../../sources/vercel__ai/tools/generate-llms-txt/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1068 | [skills/capture-api-response-test-fixture/SKILL.md](../../../../sources/vercel__ai/skills/capture-api-response-test-fixture/SKILL.md)<br>[packages/xai/src/convert-to-xai-chat-messages.test.ts](../../../../sources/vercel__ai/packages/xai/src/convert-to-xai-chat-messages.test.ts)<br>[packages/xai/src/convert-xai-chat-usage.test.ts](../../../../sources/vercel__ai/packages/xai/src/convert-xai-chat-usage.test.ts)<br>[packages/xai/src/xai-chat-language-model.test.ts](../../../../sources/vercel__ai/packages/xai/src/xai-chat-language-model.test.ts)<br>[packages/xai/src/xai-error.test.ts](../../../../sources/vercel__ai/packages/xai/src/xai-error.test.ts)<br>[packages/xai/src/xai-image-model.test.ts](../../../../sources/vercel__ai/packages/xai/src/xai-image-model.test.ts) |
| CI workflows | 14 | [.github/workflows/ai-provider-api-changes.yml](../../../../sources/vercel__ai/.github/workflows/ai-provider-api-changes.yml)<br>[.github/workflows/ai-provider-models.yml](../../../../sources/vercel__ai/.github/workflows/ai-provider-models.yml)<br>[.github/workflows/assign-team-pull-request.yml](../../../../sources/vercel__ai/.github/workflows/assign-team-pull-request.yml)<br>[.github/workflows/auto-merge-release-prs.yml](../../../../sources/vercel__ai/.github/workflows/auto-merge-release-prs.yml)<br>[.github/workflows/backport.yml](../../../../sources/vercel__ai/.github/workflows/backport.yml)<br>[.github/workflows/ci.yml](../../../../sources/vercel__ai/.github/workflows/ci.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 143 | [packages/sandbox-vercel/CHANGELOG.md](../../../../sources/vercel__ai/packages/sandbox-vercel/CHANGELOG.md)<br>[packages/sandbox-vercel/package.json](../../../../sources/vercel__ai/packages/sandbox-vercel/package.json)<br>[packages/sandbox-vercel/README.md](../../../../sources/vercel__ai/packages/sandbox-vercel/README.md)<br>[packages/sandbox-vercel/tsconfig.build.json](../../../../sources/vercel__ai/packages/sandbox-vercel/tsconfig.build.json)<br>[packages/sandbox-vercel/tsconfig.json](../../../../sources/vercel__ai/packages/sandbox-vercel/tsconfig.json)<br>[packages/sandbox-vercel/tsup.config.ts](../../../../sources/vercel__ai/packages/sandbox-vercel/tsup.config.ts) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/vercel__ai/AGENTS.md)<br>[packages/ai/AGENTS.md](../../../../sources/vercel__ai/packages/ai/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `packages/xai/src/tool/mcp-server.ts`, `packages/react/src/mcp-apps/app-frame.tsx`, `packages/react/src/mcp-apps/app-renderer.tsx`.
2. Trace execution through entrypoints: `tools/konsistent-provider/src/index.ts`, `packages/xai/src/index.ts`, `packages/workflow/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/split-ts-references.mjs`, `tools/validate-properties-tables.mjs`.
4. Inspect retrieval/memory/indexing through: `tools/konsistent-provider/src/index.ts`, `packages/xai/src/index.ts`, `packages/xai/src/tool/index.ts`.
5. Verify behavior through test/eval files: `skills/capture-api-response-test-fixture/SKILL.md`, `packages/xai/src/convert-to-xai-chat-messages.test.ts`, `packages/xai/src/convert-xai-chat-usage.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a free open source library for building AI po. 핵심 구조 신호는 TypeScript, package.json, AGENTS.md, LICENSE, next, react이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
