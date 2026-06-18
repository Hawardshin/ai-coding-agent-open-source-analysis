# BuilderIO/agent-native 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

A framework for building agent-native applications.

## 요약

- 조사 단위: `sources/BuilderIO__agent-native` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 6,704 files, 1,239 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=templates/plan/server/plan-mcp-pr-visual-recap.spec.ts, templates/plan/server/plugins/00-mcp.ts, templates/mail/app/lib/mcp-chat-bridge.ts이고, 의존성 단서는 playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | BuilderIO/agent-native |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 574 |
| Forks | 81 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/BuilderIO__agent-native](../../../../sources/BuilderIO__agent-native) |
| 기존 보고서 | [reports/global-trending/repositories/BuilderIO__agent-native.md](../../../global-trending/repositories/BuilderIO__agent-native.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 6704 / 1239 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .video-bakeoff, .agents, .changeset, .claude, .claude-plugin, .gemini, .github, docs, packages, plans, registry, scripts, skills, templates |
| 상위 확장자 | .ts: 3697, .tsx: 1765, .md: 553, .json: 169, .svg: 154, (none): 92, .png: 50, .css: 28, .toml: 28, .mjs: 24, .rs: 22, .mdx: 19 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 861 | [templates/videos/app/remotion/animations/__tests__/colorParsing.test.ts](../../../../sources/BuilderIO__agent-native/templates/videos/app/remotion/animations/__tests__/colorParsing.test.ts)<br>[templates/videos/app/lib/utils.spec.ts](../../../../sources/BuilderIO__agent-native/templates/videos/app/lib/utils.spec.ts)<br>[templates/videos/actions/analyze-brand-assets.spec.ts](../../../../sources/BuilderIO__agent-native/templates/videos/actions/analyze-brand-assets.spec.ts)<br>[templates/starter/app/routes/observability.tsx](../../../../sources/BuilderIO__agent-native/templates/starter/app/routes/observability.tsx)<br>[templates/slides/shared/aspect-ratios.test.ts](../../../../sources/BuilderIO__agent-native/templates/slides/shared/aspect-ratios.test.ts)<br>[templates/slides/shared/upload-types.test.ts](../../../../sources/BuilderIO__agent-native/templates/slides/shared/upload-types.test.ts) |
| CI workflow | 14 | [.github/workflows/auto-merge-version-packages.yml](../../../../sources/BuilderIO__agent-native/.github/workflows/auto-merge-version-packages.yml)<br>[.github/workflows/auto-publish.yml](../../../../sources/BuilderIO__agent-native/.github/workflows/auto-publish.yml)<br>[.github/workflows/cancel-stale-netlify-previews.yml](../../../../sources/BuilderIO__agent-native/.github/workflows/cancel-stale-netlify-previews.yml)<br>[.github/workflows/changeset-check.yml](../../../../sources/BuilderIO__agent-native/.github/workflows/changeset-check.yml)<br>[.github/workflows/ci.yml](../../../../sources/BuilderIO__agent-native/.github/workflows/ci.yml)<br>[.github/workflows/clips-desktop-build-check.yml](../../../../sources/BuilderIO__agent-native/.github/workflows/clips-desktop-build-check.yml) |
| 컨테이너/배포 | 10 | [templates/analytics/.builder/skills/charts/SKILL.md](../../../../sources/BuilderIO__agent-native/templates/analytics/.builder/skills/charts/SKILL.md)<br>[packages/core/src/deploy/build.spec.ts](../../../../sources/BuilderIO__agent-native/packages/core/src/deploy/build.spec.ts)<br>[packages/core/src/deploy/build.ts](../../../../sources/BuilderIO__agent-native/packages/core/src/deploy/build.ts)<br>[packages/core/src/deploy/immutable-assets.ts](../../../../sources/BuilderIO__agent-native/packages/core/src/deploy/immutable-assets.ts)<br>[packages/core/src/deploy/route-discovery.spec.ts](../../../../sources/BuilderIO__agent-native/packages/core/src/deploy/route-discovery.spec.ts)<br>[packages/core/src/deploy/route-discovery.ts](../../../../sources/BuilderIO__agent-native/packages/core/src/deploy/route-discovery.ts) |
| 보안/정책 | 199 | [templates/videos/server/plugins/auth.ts](../../../../sources/BuilderIO__agent-native/templates/videos/server/plugins/auth.ts)<br>[templates/videos/server/middleware/auth.ts](../../../../sources/BuilderIO__agent-native/templates/videos/server/middleware/auth.ts)<br>[templates/videos/.agents/skills/security/SKILL.md](../../../../sources/BuilderIO__agent-native/templates/videos/.agents/skills/security/SKILL.md)<br>[templates/starter/server/plugins/auth.ts](../../../../sources/BuilderIO__agent-native/templates/starter/server/plugins/auth.ts)<br>[templates/starter/server/middleware/auth.ts](../../../../sources/BuilderIO__agent-native/templates/starter/server/middleware/auth.ts)<br>[templates/starter/.agents/skills/security/SKILL.md](../../../../sources/BuilderIO__agent-native/templates/starter/.agents/skills/security/SKILL.md) |
| 에이전트 지시문 | 20 | [AGENTS.md](../../../../sources/BuilderIO__agent-native/AGENTS.md)<br>[templates/videos/AGENTS.md](../../../../sources/BuilderIO__agent-native/templates/videos/AGENTS.md)<br>[templates/starter/AGENTS.md](../../../../sources/BuilderIO__agent-native/templates/starter/AGENTS.md)<br>[templates/slides/AGENTS.md](../../../../sources/BuilderIO__agent-native/templates/slides/AGENTS.md)<br>[templates/plan/AGENTS.md](../../../../sources/BuilderIO__agent-native/templates/plan/AGENTS.md)<br>[templates/mail/AGENTS.md](../../../../sources/BuilderIO__agent-native/templates/mail/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `templates/plan/server/plan-mcp-pr-visual-recap.spec.ts`, `templates/plan/server/plugins/00-mcp.ts`, `templates/mail/app/lib/mcp-chat-bridge.ts`.
2. entrypoint를 따라 실행 흐름 확인: `templates/clips/desktop/src-tauri/src/main.rs`, `templates/clips/desktop/src/app.tsx`, `templates/clips/desktop/src/main.tsx`.
3. agent/tool runtime 매핑: `AGENTS.md`, `templates/videos/AGENTS.md`, `templates/videos/server/plugins/agent-chat.ts`.
4. retrieval/memory/indexing 확인: `templates/videos/server/db/index.ts`, `templates/videos/app/routes/_index.tsx`, `templates/videos/app/routes/extensions._index.tsx`.
5. test/eval 파일로 동작 검증: `templates/videos/app/remotion/animations/__tests__/colorParsing.test.ts`, `templates/videos/app/lib/utils.spec.ts`, `templates/videos/actions/analyze-brand-assets.spec.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A framework for building agent native applications.. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, playwright, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
