# BuilderIO/agent-native Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A framework for building agent-native applications.

## 요약

- 조사 단위: `sources/BuilderIO__agent-native` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 6,704 files, 1,239 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=templates/plan/server/plan-mcp-pr-visual-recap.spec.ts, templates/plan/server/plugins/00-mcp.ts, templates/mail/app/lib/mcp-chat-bridge.ts이고, 의존성 단서는 playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | BuilderIO/agent-native |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 574 |
| Forks | 81 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/BuilderIO__agent-native](../../../../sources/BuilderIO__agent-native) |
| Existing report | [reports/global-trending/repositories/BuilderIO__agent-native.md](../../../global-trending/repositories/BuilderIO__agent-native.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 6704 / 1239 |
| Max observed depth | 10 |
| Top directories | .video-bakeoff, .agents, .changeset, .claude, .claude-plugin, .gemini, .github, docs, packages, plans, registry, scripts, skills, templates |
| Top extensions | .ts: 3697, .tsx: 1765, .md: 553, .json: 169, .svg: 154, (none): 92, .png: 50, .css: 28, .toml: 28, .mjs: 24, .rs: 22, .mdx: 19 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/core | packages workspace | 42 |
| packages/scheduling | packages workspace | 15 |
| packages/dispatch | packages workspace | 7 |
| packages/skills | packages workspace | 6 |
| packages/pinpoint | packages workspace | 4 |
| packages/frame | packages workspace | 2 |
| .video-bakeoff | top-level component | 1 |
| .github | ci surface | 1 |
| docs | documentation surface | 1 |
| packages | source boundary | 1 |
| packages/code-agents-ui | packages workspace | 1 |
| packages/desktop-app | packages workspace | 1 |
| packages/embedding | packages workspace | 1 |
| packages/migrate | packages workspace | 1 |
| packages/vscode-extension | packages workspace | 1 |
| plans | top-level component | 1 |
| registry | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | postinstall | pnpm --filter @agent-native/shared-app-config --filter @agent-native/core --filter @agent-native/code-agents-ui --filter @agent-native/migrate --filter @agent-native/pinpoint --filter @agent-native/scheduling --filter @a |
| utility | package.json | setup | pnpm install |
| build | package.json | build | pnpm -r build |
| serve-dev | package.json | dev | node scripts/dev-lazy.ts |
| quality | package.json | typecheck | tsx scripts/workspace-run.ts typecheck |
| quality | package.json | fmt | prettier --write --cache --cache-location node_modules/.cache/prettier/.prettier-cache --log-level warn . |
| quality | package.json | fmt:check | prettier --check --cache --cache-location node_modules/.cache/prettier/.prettier-cache --log-level warn . |
| quality | package.json | fix:imports | prettier --write --plugin prettier-plugin-organize-imports --log-level warn . |
| test | package.json | test | tsx scripts/workspace-run.ts test |
| test | package.json | test:brain-evals | pnpm --filter brain eval:ci |
| utility | package.json | qa:cli | tsx scripts/qa-cli-smoke.ts |
| serve-dev | package.json | qa:standalone-starter-dev | tsx scripts/qa-standalone-starter-dev-smoke.ts |
| container | package.json | qa:composer-geometry | tsx scripts/qa-composer-geometry-smoke.ts |
| utility | package.json | qa:dispatch-workspace-resources | tsx scripts/qa-dispatch-workspace-resources-smoke.ts |
| utility | package.json | qa:template-routes | tsx scripts/qa-template-route-matrix.ts |
| utility | package.json | actions:audit | node scripts/audit-template-actions.mjs |
| test | package.json | test:mcp:e2e | tsx scripts/e2e-mcp-test.ts |
| quality | package.json | lint | pnpm fmt:check && pnpm oxlint && pnpm typecheck |
| quality | package.json | oxlint | oxlint --config .oxlintrc.json . |
| serve-dev | package.json | dev:cli | tsx packages/core/src/cli/index.ts |
| utility | package.json | guard:no-drizzle-push | node scripts/guard-no-drizzle-push.mjs |
| utility | package.json | guard:no-unscoped-queries | node scripts/guard-no-unscoped-queries.mjs |
| utility | package.json | guard:no-env-credentials | node scripts/guard-no-env-credentials.mjs |
| utility | package.json | guard:no-unscoped-credentials | node scripts/guard-no-unscoped-credentials.mjs |
| utility | package.json | guard:no-env-mutation | node scripts/guard-no-env-mutation.mjs |
| utility | package.json | guard:no-localhost-fallback | node scripts/guard-no-localhost-fallback.mjs |
| utility | package.json | guard:google-auth-redirects | node scripts/guard-google-auth-redirects.mjs |
| utility | package.json | guard:db-tool-scoping | node scripts/guard-db-tool-scoping.mjs |
| utility | package.json | guard:template-list | node scripts/guard-template-list.mjs |
| quality | package.json | guard:workspace-skills | tsx scripts/sync-workspace-core-skills.ts --check |
| utility | package.json | guard:public-packages | tsx scripts/guard-public-packages.ts |
| utility | package.json | guard:no-generated-artifacts | node scripts/guard-no-generated-artifacts.mjs |
| utility | package.json | guard:extension-no-public | node scripts/guard-extension-no-public.mjs |
| utility | package.json | guard:no-one-off-mcp-app-html | node scripts/guard-no-one-off-mcp-app-html.mjs |
| quality | package.json | guard:plan-marketplace | tsx scripts/sync-plan-marketplace.ts --check |
| utility | package.json | guard:no-error-string-returns | node scripts/guard-no-error-string-returns.mjs |
| utility | package.json | guard:no-action-twin-routes | node scripts/guard-no-action-twin-routes.mjs |
| utility | package.json | guards | tsx scripts/run-guards.ts |
| utility | package.json | sync:netlify-env | tsx scripts/sync-template-netlify-env.ts |
| utility | package.json | sync:workspace-skills | tsx scripts/sync-workspace-core-skills.ts |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [templates/plan/server/plan-mcp-pr-visual-recap.spec.ts](../../../../sources/BuilderIO__agent-native/templates/plan/server/plan-mcp-pr-visual-recap.spec.ts) | mcp signal |
| mcp | [templates/plan/server/plugins/00-mcp.ts](../../../../sources/BuilderIO__agent-native/templates/plan/server/plugins/00-mcp.ts) | mcp signal |
| mcp | [templates/mail/app/lib/mcp-chat-bridge.ts](../../../../sources/BuilderIO__agent-native/templates/mail/app/lib/mcp-chat-bridge.ts) | mcp signal |
| mcp | [templates/mail/app/lib/mcp-embed.spec.ts](../../../../sources/BuilderIO__agent-native/templates/mail/app/lib/mcp-embed.spec.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/BuilderIO__agent-native/AGENTS.md) | agentRuntime signal |
| agentRuntime | [templates/videos/AGENTS.md](../../../../sources/BuilderIO__agent-native/templates/videos/AGENTS.md) | agentRuntime signal |
| agentRuntime | [templates/videos/server/plugins/agent-chat.ts](../../../../sources/BuilderIO__agent-native/templates/videos/server/plugins/agent-chat.ts) | agentRuntime signal |
| agentRuntime | [templates/videos/public/agent-native-icon-dark.svg](../../../../sources/BuilderIO__agent-native/templates/videos/public/agent-native-icon-dark.svg) | agentRuntime signal |
| entrypoints | [templates/clips/desktop/src-tauri/src/main.rs](../../../../sources/BuilderIO__agent-native/templates/clips/desktop/src-tauri/src/main.rs) | entrypoints signal |
| entrypoints | [templates/clips/desktop/src/app.tsx](../../../../sources/BuilderIO__agent-native/templates/clips/desktop/src/app.tsx) | entrypoints signal |
| entrypoints | [templates/clips/desktop/src/main.tsx](../../../../sources/BuilderIO__agent-native/templates/clips/desktop/src/main.tsx) | entrypoints signal |
| entrypoints | [packages/skills/src/cli.ts](../../../../sources/BuilderIO__agent-native/packages/skills/src/cli.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 27 | [templates/clips/desktop/src-tauri/src/main.rs](../../../../sources/BuilderIO__agent-native/templates/clips/desktop/src-tauri/src/main.rs)<br>[templates/clips/desktop/src/app.tsx](../../../../sources/BuilderIO__agent-native/templates/clips/desktop/src/app.tsx)<br>[templates/clips/desktop/src/main.tsx](../../../../sources/BuilderIO__agent-native/templates/clips/desktop/src/main.tsx)<br>[packages/skills/src/cli.ts](../../../../sources/BuilderIO__agent-native/packages/skills/src/cli.ts)<br>[packages/skills/src/index.spec.ts](../../../../sources/BuilderIO__agent-native/packages/skills/src/index.spec.ts)<br>[packages/skills/src/index.ts](../../../../sources/BuilderIO__agent-native/packages/skills/src/index.ts)<br>[packages/scheduling/src/index.ts](../../../../sources/BuilderIO__agent-native/packages/scheduling/src/index.ts)<br>[packages/pinpoint/src/cli.ts](../../../../sources/BuilderIO__agent-native/packages/pinpoint/src/cli.ts) |
| agentRuntime | 893 | [AGENTS.md](../../../../sources/BuilderIO__agent-native/AGENTS.md)<br>[templates/videos/AGENTS.md](../../../../sources/BuilderIO__agent-native/templates/videos/AGENTS.md)<br>[templates/videos/server/plugins/agent-chat.ts](../../../../sources/BuilderIO__agent-native/templates/videos/server/plugins/agent-chat.ts)<br>[templates/videos/public/agent-native-icon-dark.svg](../../../../sources/BuilderIO__agent-native/templates/videos/public/agent-native-icon-dark.svg)<br>[templates/videos/public/agent-native-icon-light.svg](../../../../sources/BuilderIO__agent-native/templates/videos/public/agent-native-icon-light.svg)<br>[templates/videos/public/agent-native-logo-dark.svg](../../../../sources/BuilderIO__agent-native/templates/videos/public/agent-native-logo-dark.svg)<br>[templates/videos/public/agent-native-logo-light.svg](../../../../sources/BuilderIO__agent-native/templates/videos/public/agent-native-logo-light.svg)<br>[templates/videos/app/remotion/hooks/createInteractiveComposition.tsx](../../../../sources/BuilderIO__agent-native/templates/videos/app/remotion/hooks/createInteractiveComposition.tsx) |
| mcp | 94 | [templates/plan/server/plan-mcp-pr-visual-recap.spec.ts](../../../../sources/BuilderIO__agent-native/templates/plan/server/plan-mcp-pr-visual-recap.spec.ts)<br>[templates/plan/server/plugins/00-mcp.ts](../../../../sources/BuilderIO__agent-native/templates/plan/server/plugins/00-mcp.ts)<br>[templates/mail/app/lib/mcp-chat-bridge.ts](../../../../sources/BuilderIO__agent-native/templates/mail/app/lib/mcp-chat-bridge.ts)<br>[templates/mail/app/lib/mcp-embed.spec.ts](../../../../sources/BuilderIO__agent-native/templates/mail/app/lib/mcp-embed.spec.ts)<br>[templates/mail/app/lib/mcp-embed.ts](../../../../sources/BuilderIO__agent-native/templates/mail/app/lib/mcp-embed.ts)<br>[templates/mail/app/components/email/mcp-compose-prompts.spec.ts](../../../../sources/BuilderIO__agent-native/templates/mail/app/components/email/mcp-compose-prompts.spec.ts)<br>[templates/calendar/app/lib/mcp-embed.spec.ts](../../../../sources/BuilderIO__agent-native/templates/calendar/app/lib/mcp-embed.spec.ts)<br>[templates/calendar/app/lib/mcp-embed.ts](../../../../sources/BuilderIO__agent-native/templates/calendar/app/lib/mcp-embed.ts) |
| retrieval | 294 | [templates/videos/server/db/index.ts](../../../../sources/BuilderIO__agent-native/templates/videos/server/db/index.ts)<br>[templates/videos/app/routes/_index.tsx](../../../../sources/BuilderIO__agent-native/templates/videos/app/routes/_index.tsx)<br>[templates/videos/app/routes/extensions._index.tsx](../../../../sources/BuilderIO__agent-native/templates/videos/app/routes/extensions._index.tsx)<br>[templates/videos/app/remotion/ui-components/index.ts](../../../../sources/BuilderIO__agent-native/templates/videos/app/remotion/ui-components/index.ts)<br>[templates/videos/app/remotion/library-components/index.ts](../../../../sources/BuilderIO__agent-native/templates/videos/app/remotion/library-components/index.ts)<br>[templates/videos/app/remotion/compositions/index.ts](../../../../sources/BuilderIO__agent-native/templates/videos/app/remotion/compositions/index.ts)<br>[templates/videos/app/pages/Index.tsx](../../../../sources/BuilderIO__agent-native/templates/videos/app/pages/Index.tsx)<br>[templates/starter/app/routes/_index.tsx](../../../../sources/BuilderIO__agent-native/templates/starter/app/routes/_index.tsx) |
| spec | 968 | [templates/videos/app/routes/design-systems.tsx](../../../../sources/BuilderIO__agent-native/templates/videos/app/routes/design-systems.tsx)<br>[templates/videos/app/lib/design-systems.ts](../../../../sources/BuilderIO__agent-native/templates/videos/app/lib/design-systems.ts)<br>[templates/videos/app/lib/utils.spec.ts](../../../../sources/BuilderIO__agent-native/templates/videos/app/lib/utils.spec.ts)<br>[templates/videos/app/hooks/use-composition-design-system.ts](../../../../sources/BuilderIO__agent-native/templates/videos/app/hooks/use-composition-design-system.ts)<br>[templates/videos/app/hooks/use-design-systems.ts](../../../../sources/BuilderIO__agent-native/templates/videos/app/hooks/use-design-systems.ts)<br>[templates/videos/app/components/design-system/DesignSystemCard.tsx](../../../../sources/BuilderIO__agent-native/templates/videos/app/components/design-system/DesignSystemCard.tsx)<br>[templates/videos/app/components/design-system/DesignSystemPreview.tsx](../../../../sources/BuilderIO__agent-native/templates/videos/app/components/design-system/DesignSystemPreview.tsx)<br>[templates/videos/app/components/design-system/DesignSystemSetup.tsx](../../../../sources/BuilderIO__agent-native/templates/videos/app/components/design-system/DesignSystemSetup.tsx) |
| eval | 861 | [templates/videos/app/remotion/animations/__tests__/colorParsing.test.ts](../../../../sources/BuilderIO__agent-native/templates/videos/app/remotion/animations/__tests__/colorParsing.test.ts)<br>[templates/videos/app/lib/utils.spec.ts](../../../../sources/BuilderIO__agent-native/templates/videos/app/lib/utils.spec.ts)<br>[templates/videos/actions/analyze-brand-assets.spec.ts](../../../../sources/BuilderIO__agent-native/templates/videos/actions/analyze-brand-assets.spec.ts)<br>[templates/starter/app/routes/observability.tsx](../../../../sources/BuilderIO__agent-native/templates/starter/app/routes/observability.tsx)<br>[templates/slides/shared/aspect-ratios.test.ts](../../../../sources/BuilderIO__agent-native/templates/slides/shared/aspect-ratios.test.ts)<br>[templates/slides/shared/upload-types.test.ts](../../../../sources/BuilderIO__agent-native/templates/slides/shared/upload-types.test.ts)<br>[templates/slides/server/agent-card.test.ts](../../../../sources/BuilderIO__agent-native/templates/slides/server/agent-card.test.ts)<br>[templates/slides/server/lib/chat-attachments.spec.ts](../../../../sources/BuilderIO__agent-native/templates/slides/server/lib/chat-attachments.spec.ts) |
| security | 199 | [templates/videos/server/plugins/auth.ts](../../../../sources/BuilderIO__agent-native/templates/videos/server/plugins/auth.ts)<br>[templates/videos/server/middleware/auth.ts](../../../../sources/BuilderIO__agent-native/templates/videos/server/middleware/auth.ts)<br>[templates/videos/.agents/skills/security/SKILL.md](../../../../sources/BuilderIO__agent-native/templates/videos/.agents/skills/security/SKILL.md)<br>[templates/starter/server/plugins/auth.ts](../../../../sources/BuilderIO__agent-native/templates/starter/server/plugins/auth.ts)<br>[templates/starter/server/middleware/auth.ts](../../../../sources/BuilderIO__agent-native/templates/starter/server/middleware/auth.ts)<br>[templates/starter/.agents/skills/security/SKILL.md](../../../../sources/BuilderIO__agent-native/templates/starter/.agents/skills/security/SKILL.md)<br>`templates/slides/server/routes/[base]/_agent-native/google-docs/auth-url.get.ts`<br>[templates/slides/server/routes/_agent-native/google-docs/auth-url.get.ts](../../../../sources/BuilderIO__agent-native/templates/slides/server/routes/_agent-native/google-docs/auth-url.get.ts) |
| ci | 14 | [.github/workflows/auto-merge-version-packages.yml](../../../../sources/BuilderIO__agent-native/.github/workflows/auto-merge-version-packages.yml)<br>[.github/workflows/auto-publish.yml](../../../../sources/BuilderIO__agent-native/.github/workflows/auto-publish.yml)<br>[.github/workflows/cancel-stale-netlify-previews.yml](../../../../sources/BuilderIO__agent-native/.github/workflows/cancel-stale-netlify-previews.yml)<br>[.github/workflows/changeset-check.yml](../../../../sources/BuilderIO__agent-native/.github/workflows/changeset-check.yml)<br>[.github/workflows/ci.yml](../../../../sources/BuilderIO__agent-native/.github/workflows/ci.yml)<br>[.github/workflows/clips-desktop-build-check.yml](../../../../sources/BuilderIO__agent-native/.github/workflows/clips-desktop-build-check.yml)<br>[.github/workflows/clips-desktop-release.yml](../../../../sources/BuilderIO__agent-native/.github/workflows/clips-desktop-release.yml)<br>[.github/workflows/desktop-release.yml](../../../../sources/BuilderIO__agent-native/.github/workflows/desktop-release.yml) |
| container | 10 | [templates/analytics/.builder/skills/charts/SKILL.md](../../../../sources/BuilderIO__agent-native/templates/analytics/.builder/skills/charts/SKILL.md)<br>[packages/core/src/deploy/build.spec.ts](../../../../sources/BuilderIO__agent-native/packages/core/src/deploy/build.spec.ts)<br>[packages/core/src/deploy/build.ts](../../../../sources/BuilderIO__agent-native/packages/core/src/deploy/build.ts)<br>[packages/core/src/deploy/immutable-assets.ts](../../../../sources/BuilderIO__agent-native/packages/core/src/deploy/immutable-assets.ts)<br>[packages/core/src/deploy/route-discovery.spec.ts](../../../../sources/BuilderIO__agent-native/packages/core/src/deploy/route-discovery.spec.ts)<br>[packages/core/src/deploy/route-discovery.ts](../../../../sources/BuilderIO__agent-native/packages/core/src/deploy/route-discovery.ts)<br>[packages/core/src/deploy/workspace-core.spec.ts](../../../../sources/BuilderIO__agent-native/packages/core/src/deploy/workspace-core.spec.ts)<br>[packages/core/src/deploy/workspace-core.ts](../../../../sources/BuilderIO__agent-native/packages/core/src/deploy/workspace-core.ts) |
| instruction | 20 | [AGENTS.md](../../../../sources/BuilderIO__agent-native/AGENTS.md)<br>[templates/videos/AGENTS.md](../../../../sources/BuilderIO__agent-native/templates/videos/AGENTS.md)<br>[templates/starter/AGENTS.md](../../../../sources/BuilderIO__agent-native/templates/starter/AGENTS.md)<br>[templates/slides/AGENTS.md](../../../../sources/BuilderIO__agent-native/templates/slides/AGENTS.md)<br>[templates/plan/AGENTS.md](../../../../sources/BuilderIO__agent-native/templates/plan/AGENTS.md)<br>[templates/mail/AGENTS.md](../../../../sources/BuilderIO__agent-native/templates/mail/AGENTS.md)<br>[templates/macros/AGENTS.md](../../../../sources/BuilderIO__agent-native/templates/macros/AGENTS.md)<br>[templates/forms/AGENTS.md](../../../../sources/BuilderIO__agent-native/templates/forms/AGENTS.md) |
| docs | 239 | [README.md](../../../../sources/BuilderIO__agent-native/README.md)<br>[templates/videos/README.md](../../../../sources/BuilderIO__agent-native/templates/videos/README.md)<br>[templates/videos/docs/examples/create-composition.example.ts](../../../../sources/BuilderIO__agent-native/templates/videos/docs/examples/create-composition.example.ts)<br>[templates/videos/app/remotion/docs/CURSOR_TRACKS.md](../../../../sources/BuilderIO__agent-native/templates/videos/app/remotion/docs/CURSOR_TRACKS.md)<br>[templates/plan/README.md](../../../../sources/BuilderIO__agent-native/templates/plan/README.md)<br>[templates/plan/docs/commenting-ux-plan.md](../../../../sources/BuilderIO__agent-native/templates/plan/docs/commenting-ux-plan.md)<br>[templates/content/README.md](../../../../sources/BuilderIO__agent-native/templates/content/README.md)<br>[templates/content/docs/solutions/.gitkeep](../../../../sources/BuilderIO__agent-native/templates/content/docs/solutions/.gitkeep) |
| config | 85 | [package.json](../../../../sources/BuilderIO__agent-native/package.json)<br>[pnpm-workspace.yaml](../../../../sources/BuilderIO__agent-native/pnpm-workspace.yaml)<br>[templates/videos/package.json](../../../../sources/BuilderIO__agent-native/templates/videos/package.json)<br>[templates/videos/tsconfig.json](../../../../sources/BuilderIO__agent-native/templates/videos/tsconfig.json)<br>[templates/starter/package.json](../../../../sources/BuilderIO__agent-native/templates/starter/package.json)<br>[templates/starter/tsconfig.json](../../../../sources/BuilderIO__agent-native/templates/starter/tsconfig.json)<br>[templates/slides/package.json](../../../../sources/BuilderIO__agent-native/templates/slides/package.json)<br>[templates/slides/tsconfig.json](../../../../sources/BuilderIO__agent-native/templates/slides/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 861 | [templates/videos/app/remotion/animations/__tests__/colorParsing.test.ts](../../../../sources/BuilderIO__agent-native/templates/videos/app/remotion/animations/__tests__/colorParsing.test.ts)<br>[templates/videos/app/lib/utils.spec.ts](../../../../sources/BuilderIO__agent-native/templates/videos/app/lib/utils.spec.ts)<br>[templates/videos/actions/analyze-brand-assets.spec.ts](../../../../sources/BuilderIO__agent-native/templates/videos/actions/analyze-brand-assets.spec.ts)<br>[templates/starter/app/routes/observability.tsx](../../../../sources/BuilderIO__agent-native/templates/starter/app/routes/observability.tsx)<br>[templates/slides/shared/aspect-ratios.test.ts](../../../../sources/BuilderIO__agent-native/templates/slides/shared/aspect-ratios.test.ts)<br>[templates/slides/shared/upload-types.test.ts](../../../../sources/BuilderIO__agent-native/templates/slides/shared/upload-types.test.ts) |
| CI workflows | 14 | [.github/workflows/auto-merge-version-packages.yml](../../../../sources/BuilderIO__agent-native/.github/workflows/auto-merge-version-packages.yml)<br>[.github/workflows/auto-publish.yml](../../../../sources/BuilderIO__agent-native/.github/workflows/auto-publish.yml)<br>[.github/workflows/cancel-stale-netlify-previews.yml](../../../../sources/BuilderIO__agent-native/.github/workflows/cancel-stale-netlify-previews.yml)<br>[.github/workflows/changeset-check.yml](../../../../sources/BuilderIO__agent-native/.github/workflows/changeset-check.yml)<br>[.github/workflows/ci.yml](../../../../sources/BuilderIO__agent-native/.github/workflows/ci.yml)<br>[.github/workflows/clips-desktop-build-check.yml](../../../../sources/BuilderIO__agent-native/.github/workflows/clips-desktop-build-check.yml) |
| Containers / deploy | 10 | [templates/analytics/.builder/skills/charts/SKILL.md](../../../../sources/BuilderIO__agent-native/templates/analytics/.builder/skills/charts/SKILL.md)<br>[packages/core/src/deploy/build.spec.ts](../../../../sources/BuilderIO__agent-native/packages/core/src/deploy/build.spec.ts)<br>[packages/core/src/deploy/build.ts](../../../../sources/BuilderIO__agent-native/packages/core/src/deploy/build.ts)<br>[packages/core/src/deploy/immutable-assets.ts](../../../../sources/BuilderIO__agent-native/packages/core/src/deploy/immutable-assets.ts)<br>[packages/core/src/deploy/route-discovery.spec.ts](../../../../sources/BuilderIO__agent-native/packages/core/src/deploy/route-discovery.spec.ts)<br>[packages/core/src/deploy/route-discovery.ts](../../../../sources/BuilderIO__agent-native/packages/core/src/deploy/route-discovery.ts) |
| Security / policy | 199 | [templates/videos/server/plugins/auth.ts](../../../../sources/BuilderIO__agent-native/templates/videos/server/plugins/auth.ts)<br>[templates/videos/server/middleware/auth.ts](../../../../sources/BuilderIO__agent-native/templates/videos/server/middleware/auth.ts)<br>[templates/videos/.agents/skills/security/SKILL.md](../../../../sources/BuilderIO__agent-native/templates/videos/.agents/skills/security/SKILL.md)<br>[templates/starter/server/plugins/auth.ts](../../../../sources/BuilderIO__agent-native/templates/starter/server/plugins/auth.ts)<br>[templates/starter/server/middleware/auth.ts](../../../../sources/BuilderIO__agent-native/templates/starter/server/middleware/auth.ts)<br>[templates/starter/.agents/skills/security/SKILL.md](../../../../sources/BuilderIO__agent-native/templates/starter/.agents/skills/security/SKILL.md) |
| Agent instructions | 20 | [AGENTS.md](../../../../sources/BuilderIO__agent-native/AGENTS.md)<br>[templates/videos/AGENTS.md](../../../../sources/BuilderIO__agent-native/templates/videos/AGENTS.md)<br>[templates/starter/AGENTS.md](../../../../sources/BuilderIO__agent-native/templates/starter/AGENTS.md)<br>[templates/slides/AGENTS.md](../../../../sources/BuilderIO__agent-native/templates/slides/AGENTS.md)<br>[templates/plan/AGENTS.md](../../../../sources/BuilderIO__agent-native/templates/plan/AGENTS.md)<br>[templates/mail/AGENTS.md](../../../../sources/BuilderIO__agent-native/templates/mail/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `templates/plan/server/plan-mcp-pr-visual-recap.spec.ts`, `templates/plan/server/plugins/00-mcp.ts`, `templates/mail/app/lib/mcp-chat-bridge.ts`.
2. Trace execution through entrypoints: `templates/clips/desktop/src-tauri/src/main.rs`, `templates/clips/desktop/src/app.tsx`, `templates/clips/desktop/src/main.tsx`.
3. Map agent/tool runtime through: `AGENTS.md`, `templates/videos/AGENTS.md`, `templates/videos/server/plugins/agent-chat.ts`.
4. Inspect retrieval/memory/indexing through: `templates/videos/server/db/index.ts`, `templates/videos/app/routes/_index.tsx`, `templates/videos/app/routes/extensions._index.tsx`.
5. Verify behavior through test/eval files: `templates/videos/app/remotion/animations/__tests__/colorParsing.test.ts`, `templates/videos/app/lib/utils.spec.ts`, `templates/videos/actions/analyze-brand-assets.spec.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A framework for building agent native applications.. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, playwright, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
