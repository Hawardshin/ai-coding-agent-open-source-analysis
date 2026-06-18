# line/abc-user-feedback Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

ABC User Feedback is a standalone web application that manages Voice of Customer (VoC) data. It allows you to gather and organize feedback from your customers.

## 요약

- 조사 단위: `sources/line__abc-user-feedback` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,578 files, 326 directories, depth score 124, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/ufb-shared/src/index.ts, packages/ufb-react/src/index.ts, apps/web/src/env.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/abc-user-feedback |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 376 |
| Forks | 35 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__abc-user-feedback](../../../../sources/line__abc-user-feedback) |
| Existing report | [reports/korea-trending/repositories/line__abc-user-feedback.md](../../../korea-trending/repositories/line__abc-user-feedback.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1578 / 326 |
| Max observed depth | 10 |
| Top directories | .github, apps, assets, docker, packages, tooling |
| Top extensions | .ts: 904, .tsx: 281, .md: 86, .png: 68, .json: 62, .css: 59, .svg: 38, .js: 34, .yml: 15, (none): 10, .dockerfile: 3, .example: 3 |
| Source patterns | monorepo/workspace, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| apps/web | apps workspace | 112 |
| apps/api | apps workspace | 76 |
| apps/docs | apps workspace | 43 |
| apps/e2e | apps workspace | 16 |
| packages/ufb-react | packages workspace | 5 |
| packages/ufb-shared | packages workspace | 4 |
| packages/ufb-tailwindcss | packages workspace | 3 |
| apps/cli | apps workspace | 2 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| assets | top-level component | 1 |
| docker | documentation surface | 1 |
| packages | source boundary | 1 |
| tooling | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | turbo run build |
| build | package.json | build:api | turbo run build -F api... |
| build | package.json | build:web | turbo run build -F web... |
| utility | package.json | clean | git clean -xdf node_modules .turbo |
| utility | package.json | clean:workspaces | turbo run clean |
| serve-dev | package.json | dev | turbo watch dev --continue |
| serve-dev | package.json | dev:api | turbo watch dev -F api... |
| serve-dev | package.json | dev:web | turbo watch dev -F web... |
| quality | package.json | format | turbo run format --continue -- --cache --cache-location .cache/.prettiercache |
| quality | package.json | format:fix | turbo run format --continue -- --write --cache --cache-location .cache/.prettiercache |
| quality | package.json | lint | turbo run lint --continue -- --cache --cache-location .cache/.eslintcache |
| quality | package.json | lint:fix | turbo run lint --continue -- --fix --cache --cache-location .cache/.eslintcache |
| test | package.json | lint:ws | pnpm dlx sherif@latest |
| quality | package.json | postinstall | pnpm lint:ws |
| quality | package.json | typecheck | turbo run typecheck |
| test | package.json | test | turbo run test |
| test | package.json | test:e2e | cd apps/e2e && pnpm test:e2e |
| test | package.json | test:integration | cd apps/api && pnpm test:integration |


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
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [packages/ufb-shared/src/index.ts](../../../../sources/line__abc-user-feedback/packages/ufb-shared/src/index.ts) | entrypoints signal |
| entrypoints | [packages/ufb-react/src/index.ts](../../../../sources/line__abc-user-feedback/packages/ufb-react/src/index.ts) | entrypoints signal |
| entrypoints | [apps/web/src/env.ts](../../../../sources/line__abc-user-feedback/apps/web/src/env.ts) | entrypoints signal |
| entrypoints | [apps/web/src/proxy.ts](../../../../sources/line__abc-user-feedback/apps/web/src/proxy.ts) | entrypoints signal |
| config | [package.json](../../../../sources/line__abc-user-feedback/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/line__abc-user-feedback/pnpm-workspace.yaml) | config signal |
| config | [turbo.json](../../../../sources/line__abc-user-feedback/turbo.json) | config signal |
| config | [tooling/typescript/package.json](../../../../sources/line__abc-user-feedback/tooling/typescript/package.json) | config signal |
| docs | [README.md](../../../../sources/line__abc-user-feedback/README.md) | docs signal |
| docs | [apps/web/README.md](../../../../sources/line__abc-user-feedback/apps/web/README.md) | docs signal |
| docs | [apps/docs/.env.example](../../../../sources/line__abc-user-feedback/apps/docs/.env.example) | docs signal |
| docs | [apps/docs/.gitignore](../../../../sources/line__abc-user-feedback/apps/docs/.gitignore) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1105 | [packages/ufb-shared/src/index.ts](../../../../sources/line__abc-user-feedback/packages/ufb-shared/src/index.ts)<br>[packages/ufb-react/src/index.ts](../../../../sources/line__abc-user-feedback/packages/ufb-react/src/index.ts)<br>[apps/web/src/env.ts](../../../../sources/line__abc-user-feedback/apps/web/src/env.ts)<br>[apps/web/src/proxy.ts](../../../../sources/line__abc-user-feedback/apps/web/src/proxy.ts)<br>[apps/web/src/server-side-translations.ts](../../../../sources/line__abc-user-feedback/apps/web/src/server-side-translations.ts)<br>[apps/web/src/test-utils.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/test-utils.tsx)<br>[apps/web/src/widgets/setting-menu/index.ts](../../../../sources/line__abc-user-feedback/apps/web/src/widgets/setting-menu/index.ts)<br>[apps/web/src/widgets/setting-menu/setting-menu.type.ts](../../../../sources/line__abc-user-feedback/apps/web/src/widgets/setting-menu/setting-menu.type.ts) |
| agentRuntime | 6 | [apps/web/src/features/update-ai-setting/hooks/use-ai-issue-delete.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/features/update-ai-setting/hooks/use-ai-issue-delete.tsx)<br>[apps/web/src/features/update-ai-setting/hooks/use-ai-issue-form.ts](../../../../sources/line__abc-user-feedback/apps/web/src/features/update-ai-setting/hooks/use-ai-issue-form.ts)<br>[apps/web/src/features/update-ai-setting/hooks/use-ai-issue-test.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/features/update-ai-setting/hooks/use-ai-issue-test.tsx)<br>[apps/web/src/features/update-ai-setting/hooks/use-ai-template-deletion.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/features/update-ai-setting/hooks/use-ai-template-deletion.tsx)<br>[apps/web/src/features/update-ai-setting/hooks/use-ai-template-form.ts](../../../../sources/line__abc-user-feedback/apps/web/src/features/update-ai-setting/hooks/use-ai-template-form.ts)<br>[apps/web/src/features/update-ai-setting/hooks/use-ai-template-test.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/features/update-ai-setting/hooks/use-ai-template-test.tsx) |
| mcp | 0 | not obvious |
| retrieval | 187 | [tooling/prettier/index.js](../../../../sources/line__abc-user-feedback/tooling/prettier/index.js)<br>[tooling/eslint-plugin-header/index.js](../../../../sources/line__abc-user-feedback/tooling/eslint-plugin-header/index.js)<br>[packages/ufb-tailwindcss/index.d.ts](../../../../sources/line__abc-user-feedback/packages/ufb-tailwindcss/index.d.ts)<br>[packages/ufb-tailwindcss/index.js](../../../../sources/line__abc-user-feedback/packages/ufb-tailwindcss/index.js)<br>[packages/ufb-shared/src/index.ts](../../../../sources/line__abc-user-feedback/packages/ufb-shared/src/index.ts)<br>[packages/ufb-react/src/index.ts](../../../../sources/line__abc-user-feedback/packages/ufb-react/src/index.ts)<br>[packages/ufb-react/src/components/index.ts](../../../../sources/line__abc-user-feedback/packages/ufb-react/src/components/index.ts)<br>[docker/vector.yml](../../../../sources/line__abc-user-feedback/docker/vector.yml) |
| spec | 78 | [apps/e2e/scenarios/create-channel.spec.ts](../../../../sources/line__abc-user-feedback/apps/e2e/scenarios/create-channel.spec.ts)<br>[apps/e2e/scenarios/create-feedback-with-image.spec.ts](../../../../sources/line__abc-user-feedback/apps/e2e/scenarios/create-feedback-with-image.spec.ts)<br>[apps/e2e/scenarios/create-feedback.spec.ts](../../../../sources/line__abc-user-feedback/apps/e2e/scenarios/create-feedback.spec.ts)<br>[apps/e2e/scenarios/create-issue.spec.ts](../../../../sources/line__abc-user-feedback/apps/e2e/scenarios/create-issue.spec.ts)<br>[apps/e2e/scenarios/create-multiple-feedbacks.spec.ts](../../../../sources/line__abc-user-feedback/apps/e2e/scenarios/create-multiple-feedbacks.spec.ts)<br>[apps/e2e/scenarios/create-project.spec.ts](../../../../sources/line__abc-user-feedback/apps/e2e/scenarios/create-project.spec.ts)<br>[apps/e2e/scenarios/search-feedback.spec.ts](../../../../sources/line__abc-user-feedback/apps/e2e/scenarios/search-feedback.spec.ts)<br>[apps/api/test/auth.e2e-spec.ts](../../../../sources/line__abc-user-feedback/apps/api/test/auth.e2e-spec.ts) |
| eval | 135 | [docker/docker-compose.otel-test.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.otel-test.yml)<br>[apps/web/src/test-utils.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/test-utils.tsx)<br>[apps/web/src/features/update-ai-setting/hooks/use-ai-issue-test.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/features/update-ai-setting/hooks/use-ai-issue-test.tsx)<br>[apps/web/src/features/update-ai-setting/hooks/use-ai-template-test.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/features/update-ai-setting/hooks/use-ai-template-test.tsx)<br>[apps/e2e/test.list.ts](../../../../sources/line__abc-user-feedback/apps/e2e/test.list.ts)<br>[apps/e2e/scenarios/create-channel.spec.ts](../../../../sources/line__abc-user-feedback/apps/e2e/scenarios/create-channel.spec.ts)<br>[apps/e2e/scenarios/create-feedback-with-image.spec.ts](../../../../sources/line__abc-user-feedback/apps/e2e/scenarios/create-feedback-with-image.spec.ts)<br>[apps/e2e/scenarios/create-feedback.spec.ts](../../../../sources/line__abc-user-feedback/apps/e2e/scenarios/create-feedback.spec.ts) |
| security | 69 | [apps/web/src/pages/auth/oauth-callback.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/pages/auth/oauth-callback.tsx)<br>[apps/web/src/pages/auth/reset-password.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/pages/auth/reset-password.tsx)<br>[apps/web/src/pages/auth/sign-in.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/pages/auth/sign-in.tsx)<br>[apps/web/src/pages/auth/sign-up.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/pages/auth/sign-up.tsx)<br>[apps/web/src/features/auth/sign-up-with-email/index.ts](../../../../sources/line__abc-user-feedback/apps/web/src/features/auth/sign-up-with-email/index.ts)<br>[apps/web/src/features/auth/sign-up-with-email/sign-up-with-email.schema.ts](../../../../sources/line__abc-user-feedback/apps/web/src/features/auth/sign-up-with-email/sign-up-with-email.schema.ts)<br>[apps/web/src/features/auth/sign-up-with-email/sign-up-with-email.type.ts](../../../../sources/line__abc-user-feedback/apps/web/src/features/auth/sign-up-with-email/sign-up-with-email.type.ts)<br>[apps/web/src/features/auth/sign-up-with-email/ui/index.ts](../../../../sources/line__abc-user-feedback/apps/web/src/features/auth/sign-up-with-email/ui/index.ts) |
| ci | 6 | [.github/workflows/ci.yaml](../../../../sources/line__abc-user-feedback/.github/workflows/ci.yaml)<br>[.github/workflows/docker-dev-image.yml](../../../../sources/line__abc-user-feedback/.github/workflows/docker-dev-image.yml)<br>[.github/workflows/docker-prod-image.yml](../../../../sources/line__abc-user-feedback/.github/workflows/docker-prod-image.yml)<br>[.github/workflows/e2e-test.yml](../../../../sources/line__abc-user-feedback/.github/workflows/e2e-test.yml)<br>[.github/workflows/integration-test.yml](../../../../sources/line__abc-user-feedback/.github/workflows/integration-test.yml)<br>[.github/workflows/publish-api-docs.yml](../../../../sources/line__abc-user-feedback/.github/workflows/publish-api-docs.yml) |
| container | 11 | [docker/docker-compose.apps.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.apps.yml)<br>[docker/docker-compose.e2e.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.e2e.yml)<br>[docker/docker-compose.infra.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.infra.yml)<br>[docker/docker-compose.otel-test.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.otel-test.yml)<br>[docker/docker-compose.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.yml)<br>[apps/web/src/shared/ui/charts/bar-chart.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/shared/ui/charts/bar-chart.tsx)<br>[apps/web/src/shared/ui/charts/chart-card.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/shared/ui/charts/chart-card.tsx)<br>[apps/web/src/shared/ui/charts/index.ts](../../../../sources/line__abc-user-feedback/apps/web/src/shared/ui/charts/index.ts) |
| instruction | 0 | not obvious |
| docs | 165 | [README.md](../../../../sources/line__abc-user-feedback/README.md)<br>[apps/web/README.md](../../../../sources/line__abc-user-feedback/apps/web/README.md)<br>[apps/docs/.env.example](../../../../sources/line__abc-user-feedback/apps/docs/.env.example)<br>[apps/docs/.gitignore](../../../../sources/line__abc-user-feedback/apps/docs/.gitignore)<br>[apps/docs/docusaurus.config.ts](../../../../sources/line__abc-user-feedback/apps/docs/docusaurus.config.ts)<br>[apps/docs/eslint.config.mjs](../../../../sources/line__abc-user-feedback/apps/docs/eslint.config.mjs)<br>[apps/docs/package.json](../../../../sources/line__abc-user-feedback/apps/docs/package.json)<br>[apps/docs/README.md](../../../../sources/line__abc-user-feedback/apps/docs/README.md) |
| config | 24 | [package.json](../../../../sources/line__abc-user-feedback/package.json)<br>[pnpm-workspace.yaml](../../../../sources/line__abc-user-feedback/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/line__abc-user-feedback/turbo.json)<br>[tooling/typescript/package.json](../../../../sources/line__abc-user-feedback/tooling/typescript/package.json)<br>[tooling/prettier/package.json](../../../../sources/line__abc-user-feedback/tooling/prettier/package.json)<br>[tooling/prettier/tsconfig.json](../../../../sources/line__abc-user-feedback/tooling/prettier/tsconfig.json)<br>[tooling/github/package.json](../../../../sources/line__abc-user-feedback/tooling/github/package.json)<br>[tooling/eslint-plugin-header/package.json](../../../../sources/line__abc-user-feedback/tooling/eslint-plugin-header/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 135 | [docker/docker-compose.otel-test.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.otel-test.yml)<br>[apps/web/src/test-utils.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/test-utils.tsx)<br>[apps/web/src/features/update-ai-setting/hooks/use-ai-issue-test.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/features/update-ai-setting/hooks/use-ai-issue-test.tsx)<br>[apps/web/src/features/update-ai-setting/hooks/use-ai-template-test.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/features/update-ai-setting/hooks/use-ai-template-test.tsx)<br>[apps/e2e/test.list.ts](../../../../sources/line__abc-user-feedback/apps/e2e/test.list.ts)<br>[apps/e2e/scenarios/create-channel.spec.ts](../../../../sources/line__abc-user-feedback/apps/e2e/scenarios/create-channel.spec.ts) |
| CI workflows | 6 | [.github/workflows/ci.yaml](../../../../sources/line__abc-user-feedback/.github/workflows/ci.yaml)<br>[.github/workflows/docker-dev-image.yml](../../../../sources/line__abc-user-feedback/.github/workflows/docker-dev-image.yml)<br>[.github/workflows/docker-prod-image.yml](../../../../sources/line__abc-user-feedback/.github/workflows/docker-prod-image.yml)<br>[.github/workflows/e2e-test.yml](../../../../sources/line__abc-user-feedback/.github/workflows/e2e-test.yml)<br>[.github/workflows/integration-test.yml](../../../../sources/line__abc-user-feedback/.github/workflows/integration-test.yml)<br>[.github/workflows/publish-api-docs.yml](../../../../sources/line__abc-user-feedback/.github/workflows/publish-api-docs.yml) |
| Containers / deploy | 11 | [docker/docker-compose.apps.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.apps.yml)<br>[docker/docker-compose.e2e.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.e2e.yml)<br>[docker/docker-compose.infra.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.infra.yml)<br>[docker/docker-compose.otel-test.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.otel-test.yml)<br>[docker/docker-compose.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.yml)<br>[apps/web/src/shared/ui/charts/bar-chart.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/shared/ui/charts/bar-chart.tsx) |
| Security / policy | 69 | [apps/web/src/pages/auth/oauth-callback.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/pages/auth/oauth-callback.tsx)<br>[apps/web/src/pages/auth/reset-password.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/pages/auth/reset-password.tsx)<br>[apps/web/src/pages/auth/sign-in.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/pages/auth/sign-in.tsx)<br>[apps/web/src/pages/auth/sign-up.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/pages/auth/sign-up.tsx)<br>[apps/web/src/features/auth/sign-up-with-email/index.ts](../../../../sources/line__abc-user-feedback/apps/web/src/features/auth/sign-up-with-email/index.ts)<br>[apps/web/src/features/auth/sign-up-with-email/sign-up-with-email.schema.ts](../../../../sources/line__abc-user-feedback/apps/web/src/features/auth/sign-up-with-email/sign-up-with-email.schema.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/ufb-shared/src/index.ts`, `packages/ufb-react/src/index.ts`, `apps/web/src/env.ts`.
2. Trace execution through entrypoints: `packages/ufb-shared/src/index.ts`, `packages/ufb-react/src/index.ts`, `apps/web/src/env.ts`.
3. Map agent/tool runtime through: `apps/web/src/features/update-ai-setting/hooks/use-ai-issue-delete.tsx`, `apps/web/src/features/update-ai-setting/hooks/use-ai-issue-form.ts`, `apps/web/src/features/update-ai-setting/hooks/use-ai-issue-test.tsx`.
4. Inspect retrieval/memory/indexing through: `tooling/prettier/index.js`, `tooling/eslint-plugin-header/index.js`, `packages/ufb-tailwindcss/index.d.ts`.
5. Verify behavior through test/eval files: `docker/docker-compose.otel-test.yml`, `apps/web/src/test-utils.tsx`, `apps/web/src/features/update-ai-setting/hooks/use-ai-issue-test.tsx`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 ABC User Feedback is a standalone web application that manages Voice of Customer VoC data. It allows you to gather and o. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
