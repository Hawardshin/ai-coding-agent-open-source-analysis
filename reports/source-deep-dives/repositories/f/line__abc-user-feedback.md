# line/abc-user-feedback 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

ABC User Feedback is a standalone web application that manages Voice of Customer (VoC) data. It allows you to gather and organize feedback from your customers.

## 요약

- 조사 단위: `sources/line__abc-user-feedback` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,578 files, 326 directories, depth score 118, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/ufb-shared/src/index.ts, packages/ufb-react/src/index.ts, apps/web/src/env.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/abc-user-feedback |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 376 |
| Forks | 35 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__abc-user-feedback](../../../../sources/line__abc-user-feedback) |
| 기존 보고서 | [reports/korea-trending/repositories/line__abc-user-feedback.md](../../../korea-trending/repositories/line__abc-user-feedback.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1578 / 326 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .github, apps, assets, docker, packages, tooling |
| 상위 확장자 | .ts: 904, .tsx: 281, .md: 86, .png: 68, .json: 62, .css: 59, .svg: 38, .js: 34, .yml: 15, (none): 10, .dockerfile: 3, .example: 3 |
| 소스 패턴 | monorepo/workspace, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1105 | [packages/ufb-shared/src/index.ts](../../../../sources/line__abc-user-feedback/packages/ufb-shared/src/index.ts)<br>[packages/ufb-react/src/index.ts](../../../../sources/line__abc-user-feedback/packages/ufb-react/src/index.ts)<br>[apps/web/src/env.ts](../../../../sources/line__abc-user-feedback/apps/web/src/env.ts)<br>[apps/web/src/proxy.ts](../../../../sources/line__abc-user-feedback/apps/web/src/proxy.ts)<br>[apps/web/src/server-side-translations.ts](../../../../sources/line__abc-user-feedback/apps/web/src/server-side-translations.ts)<br>[apps/web/src/test-utils.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/test-utils.tsx)<br>[apps/web/src/widgets/setting-menu/index.ts](../../../../sources/line__abc-user-feedback/apps/web/src/widgets/setting-menu/index.ts)<br>[apps/web/src/widgets/setting-menu/setting-menu.type.ts](../../../../sources/line__abc-user-feedback/apps/web/src/widgets/setting-menu/setting-menu.type.ts) |
| agentRuntime | 6 | [apps/web/src/features/update-ai-setting/hooks/use-ai-issue-delete.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/features/update-ai-setting/hooks/use-ai-issue-delete.tsx)<br>[apps/web/src/features/update-ai-setting/hooks/use-ai-issue-form.ts](../../../../sources/line__abc-user-feedback/apps/web/src/features/update-ai-setting/hooks/use-ai-issue-form.ts)<br>[apps/web/src/features/update-ai-setting/hooks/use-ai-issue-test.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/features/update-ai-setting/hooks/use-ai-issue-test.tsx)<br>[apps/web/src/features/update-ai-setting/hooks/use-ai-template-deletion.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/features/update-ai-setting/hooks/use-ai-template-deletion.tsx)<br>[apps/web/src/features/update-ai-setting/hooks/use-ai-template-form.ts](../../../../sources/line__abc-user-feedback/apps/web/src/features/update-ai-setting/hooks/use-ai-template-form.ts)<br>[apps/web/src/features/update-ai-setting/hooks/use-ai-template-test.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/features/update-ai-setting/hooks/use-ai-template-test.tsx) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 187 | [tooling/prettier/index.js](../../../../sources/line__abc-user-feedback/tooling/prettier/index.js)<br>[tooling/eslint-plugin-header/index.js](../../../../sources/line__abc-user-feedback/tooling/eslint-plugin-header/index.js)<br>[packages/ufb-tailwindcss/index.d.ts](../../../../sources/line__abc-user-feedback/packages/ufb-tailwindcss/index.d.ts)<br>[packages/ufb-tailwindcss/index.js](../../../../sources/line__abc-user-feedback/packages/ufb-tailwindcss/index.js)<br>[packages/ufb-shared/src/index.ts](../../../../sources/line__abc-user-feedback/packages/ufb-shared/src/index.ts)<br>[packages/ufb-react/src/index.ts](../../../../sources/line__abc-user-feedback/packages/ufb-react/src/index.ts)<br>[packages/ufb-react/src/components/index.ts](../../../../sources/line__abc-user-feedback/packages/ufb-react/src/components/index.ts)<br>[docker/vector.yml](../../../../sources/line__abc-user-feedback/docker/vector.yml) |
| spec | 78 | [apps/e2e/scenarios/create-channel.spec.ts](../../../../sources/line__abc-user-feedback/apps/e2e/scenarios/create-channel.spec.ts)<br>[apps/e2e/scenarios/create-feedback-with-image.spec.ts](../../../../sources/line__abc-user-feedback/apps/e2e/scenarios/create-feedback-with-image.spec.ts)<br>[apps/e2e/scenarios/create-feedback.spec.ts](../../../../sources/line__abc-user-feedback/apps/e2e/scenarios/create-feedback.spec.ts)<br>[apps/e2e/scenarios/create-issue.spec.ts](../../../../sources/line__abc-user-feedback/apps/e2e/scenarios/create-issue.spec.ts)<br>[apps/e2e/scenarios/create-multiple-feedbacks.spec.ts](../../../../sources/line__abc-user-feedback/apps/e2e/scenarios/create-multiple-feedbacks.spec.ts)<br>[apps/e2e/scenarios/create-project.spec.ts](../../../../sources/line__abc-user-feedback/apps/e2e/scenarios/create-project.spec.ts)<br>[apps/e2e/scenarios/search-feedback.spec.ts](../../../../sources/line__abc-user-feedback/apps/e2e/scenarios/search-feedback.spec.ts)<br>[apps/api/test/auth.e2e-spec.ts](../../../../sources/line__abc-user-feedback/apps/api/test/auth.e2e-spec.ts) |
| eval | 135 | [docker/docker-compose.otel-test.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.otel-test.yml)<br>[apps/web/src/test-utils.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/test-utils.tsx)<br>[apps/web/src/features/update-ai-setting/hooks/use-ai-issue-test.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/features/update-ai-setting/hooks/use-ai-issue-test.tsx)<br>[apps/web/src/features/update-ai-setting/hooks/use-ai-template-test.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/features/update-ai-setting/hooks/use-ai-template-test.tsx)<br>[apps/e2e/test.list.ts](../../../../sources/line__abc-user-feedback/apps/e2e/test.list.ts)<br>[apps/e2e/scenarios/create-channel.spec.ts](../../../../sources/line__abc-user-feedback/apps/e2e/scenarios/create-channel.spec.ts)<br>[apps/e2e/scenarios/create-feedback-with-image.spec.ts](../../../../sources/line__abc-user-feedback/apps/e2e/scenarios/create-feedback-with-image.spec.ts)<br>[apps/e2e/scenarios/create-feedback.spec.ts](../../../../sources/line__abc-user-feedback/apps/e2e/scenarios/create-feedback.spec.ts) |
| security | 69 | [apps/web/src/pages/auth/oauth-callback.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/pages/auth/oauth-callback.tsx)<br>[apps/web/src/pages/auth/reset-password.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/pages/auth/reset-password.tsx)<br>[apps/web/src/pages/auth/sign-in.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/pages/auth/sign-in.tsx)<br>[apps/web/src/pages/auth/sign-up.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/pages/auth/sign-up.tsx)<br>[apps/web/src/features/auth/sign-up-with-email/index.ts](../../../../sources/line__abc-user-feedback/apps/web/src/features/auth/sign-up-with-email/index.ts)<br>[apps/web/src/features/auth/sign-up-with-email/sign-up-with-email.schema.ts](../../../../sources/line__abc-user-feedback/apps/web/src/features/auth/sign-up-with-email/sign-up-with-email.schema.ts)<br>[apps/web/src/features/auth/sign-up-with-email/sign-up-with-email.type.ts](../../../../sources/line__abc-user-feedback/apps/web/src/features/auth/sign-up-with-email/sign-up-with-email.type.ts)<br>[apps/web/src/features/auth/sign-up-with-email/ui/index.ts](../../../../sources/line__abc-user-feedback/apps/web/src/features/auth/sign-up-with-email/ui/index.ts) |
| ci | 6 | [.github/workflows/ci.yaml](../../../../sources/line__abc-user-feedback/.github/workflows/ci.yaml)<br>[.github/workflows/docker-dev-image.yml](../../../../sources/line__abc-user-feedback/.github/workflows/docker-dev-image.yml)<br>[.github/workflows/docker-prod-image.yml](../../../../sources/line__abc-user-feedback/.github/workflows/docker-prod-image.yml)<br>[.github/workflows/e2e-test.yml](../../../../sources/line__abc-user-feedback/.github/workflows/e2e-test.yml)<br>[.github/workflows/integration-test.yml](../../../../sources/line__abc-user-feedback/.github/workflows/integration-test.yml)<br>[.github/workflows/publish-api-docs.yml](../../../../sources/line__abc-user-feedback/.github/workflows/publish-api-docs.yml) |
| container | 11 | [docker/docker-compose.apps.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.apps.yml)<br>[docker/docker-compose.e2e.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.e2e.yml)<br>[docker/docker-compose.infra.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.infra.yml)<br>[docker/docker-compose.otel-test.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.otel-test.yml)<br>[docker/docker-compose.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.yml)<br>[apps/web/src/shared/ui/charts/bar-chart.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/shared/ui/charts/bar-chart.tsx)<br>[apps/web/src/shared/ui/charts/chart-card.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/shared/ui/charts/chart-card.tsx)<br>[apps/web/src/shared/ui/charts/index.ts](../../../../sources/line__abc-user-feedback/apps/web/src/shared/ui/charts/index.ts) |
| instruction | 0 | 명확하지 않음 |
| docs | 165 | [README.md](../../../../sources/line__abc-user-feedback/README.md)<br>[apps/web/README.md](../../../../sources/line__abc-user-feedback/apps/web/README.md)<br>[apps/docs/.env.example](../../../../sources/line__abc-user-feedback/apps/docs/.env.example)<br>[apps/docs/.gitignore](../../../../sources/line__abc-user-feedback/apps/docs/.gitignore)<br>[apps/docs/docusaurus.config.ts](../../../../sources/line__abc-user-feedback/apps/docs/docusaurus.config.ts)<br>[apps/docs/eslint.config.mjs](../../../../sources/line__abc-user-feedback/apps/docs/eslint.config.mjs)<br>[apps/docs/package.json](../../../../sources/line__abc-user-feedback/apps/docs/package.json)<br>[apps/docs/README.md](../../../../sources/line__abc-user-feedback/apps/docs/README.md) |
| config | 24 | [package.json](../../../../sources/line__abc-user-feedback/package.json)<br>[pnpm-workspace.yaml](../../../../sources/line__abc-user-feedback/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/line__abc-user-feedback/turbo.json)<br>[tooling/typescript/package.json](../../../../sources/line__abc-user-feedback/tooling/typescript/package.json)<br>[tooling/prettier/package.json](../../../../sources/line__abc-user-feedback/tooling/prettier/package.json)<br>[tooling/prettier/tsconfig.json](../../../../sources/line__abc-user-feedback/tooling/prettier/tsconfig.json)<br>[tooling/github/package.json](../../../../sources/line__abc-user-feedback/tooling/github/package.json)<br>[tooling/eslint-plugin-header/package.json](../../../../sources/line__abc-user-feedback/tooling/eslint-plugin-header/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 135 | [docker/docker-compose.otel-test.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.otel-test.yml)<br>[apps/web/src/test-utils.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/test-utils.tsx)<br>[apps/web/src/features/update-ai-setting/hooks/use-ai-issue-test.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/features/update-ai-setting/hooks/use-ai-issue-test.tsx)<br>[apps/web/src/features/update-ai-setting/hooks/use-ai-template-test.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/features/update-ai-setting/hooks/use-ai-template-test.tsx)<br>[apps/e2e/test.list.ts](../../../../sources/line__abc-user-feedback/apps/e2e/test.list.ts)<br>[apps/e2e/scenarios/create-channel.spec.ts](../../../../sources/line__abc-user-feedback/apps/e2e/scenarios/create-channel.spec.ts) |
| CI workflow | 6 | [.github/workflows/ci.yaml](../../../../sources/line__abc-user-feedback/.github/workflows/ci.yaml)<br>[.github/workflows/docker-dev-image.yml](../../../../sources/line__abc-user-feedback/.github/workflows/docker-dev-image.yml)<br>[.github/workflows/docker-prod-image.yml](../../../../sources/line__abc-user-feedback/.github/workflows/docker-prod-image.yml)<br>[.github/workflows/e2e-test.yml](../../../../sources/line__abc-user-feedback/.github/workflows/e2e-test.yml)<br>[.github/workflows/integration-test.yml](../../../../sources/line__abc-user-feedback/.github/workflows/integration-test.yml)<br>[.github/workflows/publish-api-docs.yml](../../../../sources/line__abc-user-feedback/.github/workflows/publish-api-docs.yml) |
| 컨테이너/배포 | 11 | [docker/docker-compose.apps.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.apps.yml)<br>[docker/docker-compose.e2e.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.e2e.yml)<br>[docker/docker-compose.infra.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.infra.yml)<br>[docker/docker-compose.otel-test.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.otel-test.yml)<br>[docker/docker-compose.yml](../../../../sources/line__abc-user-feedback/docker/docker-compose.yml)<br>[apps/web/src/shared/ui/charts/bar-chart.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/shared/ui/charts/bar-chart.tsx) |
| 보안/정책 | 69 | [apps/web/src/pages/auth/oauth-callback.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/pages/auth/oauth-callback.tsx)<br>[apps/web/src/pages/auth/reset-password.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/pages/auth/reset-password.tsx)<br>[apps/web/src/pages/auth/sign-in.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/pages/auth/sign-in.tsx)<br>[apps/web/src/pages/auth/sign-up.tsx](../../../../sources/line__abc-user-feedback/apps/web/src/pages/auth/sign-up.tsx)<br>[apps/web/src/features/auth/sign-up-with-email/index.ts](../../../../sources/line__abc-user-feedback/apps/web/src/features/auth/sign-up-with-email/index.ts)<br>[apps/web/src/features/auth/sign-up-with-email/sign-up-with-email.schema.ts](../../../../sources/line__abc-user-feedback/apps/web/src/features/auth/sign-up-with-email/sign-up-with-email.schema.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/ufb-shared/src/index.ts`, `packages/ufb-react/src/index.ts`, `apps/web/src/env.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/ufb-shared/src/index.ts`, `packages/ufb-react/src/index.ts`, `apps/web/src/env.ts`.
3. agent/tool runtime 매핑: `apps/web/src/features/update-ai-setting/hooks/use-ai-issue-delete.tsx`, `apps/web/src/features/update-ai-setting/hooks/use-ai-issue-form.ts`, `apps/web/src/features/update-ai-setting/hooks/use-ai-issue-test.tsx`.
4. retrieval/memory/indexing 확인: `tooling/prettier/index.js`, `tooling/eslint-plugin-header/index.js`, `packages/ufb-tailwindcss/index.d.ts`.
5. test/eval 파일로 동작 검증: `docker/docker-compose.otel-test.yml`, `apps/web/src/test-utils.tsx`, `apps/web/src/features/update-ai-setting/hooks/use-ai-issue-test.tsx`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 ABC User Feedback is a standalone web application that manages Voice of Customer VoC data. It allows you to gather and o. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
