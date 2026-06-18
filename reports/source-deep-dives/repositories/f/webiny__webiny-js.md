# webiny/webiny-js 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Open-source, self-hosted CMS platform on AWS serverless (Lambda, DynamoDB, S3). TypeScript framework with multi-tenancy, lifecycle hooks, GraphQL API, and AI-assisted development via MCP server. Built for developers at large organizations.

## 요약

- 조사 단위: `sources/webiny__webiny-js` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 14,168 files, 3,280 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/mcp/bin.js, packages/mcp/package.json, packages/mcp/prepublishOnly.sh이고, 의존성 단서는 next, react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | webiny/webiny-js |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 7991 |
| Forks | 675 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/webiny__webiny-js](../../../../sources/webiny__webiny-js) |
| 기존 보고서 | [reports/global-trending/repositories/webiny__webiny-js.md](../../../global-trending/repositories/webiny__webiny-js.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 14168 / 3280 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .claude, .github, .yarn, ai-context, cypress-tests, dependencies, devtools, docs, extensions, packages, plans, public, scripts, skills, testing, typings |
| 상위 확장자 | .ts: 8401, .svg: 2388, .tsx: 2054, .json: 453, .js: 370, .md: 222, .png: 122, .mdx: 45, .yml: 32, .css: 18, .cjs: 13, (none): 8 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 36 |
| packages/webiny | packages workspace | 27 |
| packages/mcp | packages workspace | 25 |
| packages/webhooks | packages workspace | 25 |
| packages/project-aws | packages workspace | 11 |
| packages/website-builder-sdk | packages workspace | 9 |
| packages/common-audit-logs | packages workspace | 8 |
| packages/system-requirements | packages workspace | 8 |
| packages/api-sync-system | packages workspace | 7 |
| packages/app-security-access-management | packages workspace | 7 |
| packages/website-builder-vue | packages workspace | 6 |
| packages/api-headless-cms-sql | packages workspace | 5 |
| packages/api-headless-cms | packages workspace | 4 |
| packages/react-properties | packages workspace | 4 |
| packages/wcp | packages workspace | 4 |
| packages/website-builder-react | packages workspace | 4 |
| packages/admin-ui | packages workspace | 3 |
| packages/utils | packages workspace | 3 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | add-webiny-package | node scripts/addWebinyPackage.js |
| utility | package.json | awp | yarn add-webiny-package |
| build | package.json | build | tsx scripts/buildPackages |
| quality | package.json | check | tsx scripts/checkPackages |
| build | package.json | build:api | yarn webiny ws run build --scope='@webiny/api*' --scope='@webiny/handler*' |
| build | package.json | build:apps | yarn webiny ws run build --scope='@webiny/app*' |
| build | package.json | build:full | yarn build --build-overrides='{"tsConfig":{"compilerOptions":{"skipLibCheck":false}}}' |
| quality | package.json | check:circular-deps | tsx scripts/circularDependencyCheck.ts |
| quality | package.json | check:node-modules | tsx scripts/checkNodeModules/index.ts |
| quality | package.json | check:node-modules:ci | tsx scripts/checkNodeModules/index.ts --ci --workspacesOnly |
| quality | package.json | check-ts-configs | node scripts/checkTsConfigs.js |
| build | package.json | ci-workflows:build | yarn ghawac build |
| serve-dev | package.json | ci-workflows:watch | yarn ghawac watch |
| build | package.json | clear-all | yarn clear-dist && yarn clear-webiny-build-cache && yarn clear-node-modules && yarn clear-empty-package-folders --no-preview |
| build | package.json | clear-dist | rm -rf packages/*/dist |
| utility | package.json | clear-empty-package-folders | node scripts/deleteEmptyPackageFolders.js |
| utility | package.json | clear-node-modules | rm -rf node_modules |
| build | package.json | clear-webiny-build-cache | rm -rf .webiny/cached-packages |
| utility | package.json | cy:open | yarn cypress:open |
| utility | package.json | cy:run | yarn cypress:run |
| utility | package.json | cy:setup | yarn setup-cypress |
| utility | package.json | cy:ts | yarn cypress:ts |
| test | package.json | cypress:open | cd cypress-tests && yarn cypress open |
| test | package.json | cypress:run | cd cypress-tests && yarn cypress run |
| test | package.json | cypress:ts | cd cypress-tests && yarn tsc --noEmit |
| utility | package.json | deploy | yarn webiny deploy |
| utility | package.json | dispatch-github-event | node ./scripts/dispatchGitHubEvent.js |
| quality | package.json | format | oxfmt |
| quality | package.json | format:fix | oxfmt |
| quality | package.json | format:check | oxfmt --check |
| utility | package.json | link-workspaces | node ./scripts/linkWorkspaces.js |
| quality | package.json | lint | oxlint --deny-warnings |
| quality | package.json | lint:fix | oxlint --fix |
| utility | package.json | mdx-from-folder | tsx scripts/mdxFromFolder |
| utility | package.json | open | yarn webiny open |
| utility | package.json | postinstall | yarn node ./scripts/linkWorkspaces.js |
| utility | package.json | prepublishOnly | tsx scripts/prepublishOnly/src/index.ts |
| build | package.json | release | tsx ./scripts/release/src/index.ts |
| utility | package.json | setup-cypress | tsx scripts/setupCypress |
| utility | package.json | setup-env-files | node scripts/setupEnvFiles |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | next, react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [packages/mcp/bin.js](../../../../sources/webiny__webiny-js/packages/mcp/bin.js) | mcp signal |
| mcp | [packages/mcp/package.json](../../../../sources/webiny__webiny-js/packages/mcp/package.json) | mcp signal |
| mcp | [packages/mcp/prepublishOnly.sh](../../../../sources/webiny__webiny-js/packages/mcp/prepublishOnly.sh) | mcp signal |
| mcp | [packages/mcp/tsconfig.build.json](../../../../sources/webiny__webiny-js/packages/mcp/tsconfig.build.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/webiny__webiny-js/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills/user-skills/website-builder/SKILL.md](../../../../sources/webiny__webiny-js/skills/user-skills/website-builder/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/user-skills/webiny-sdk/SKILL.md](../../../../sources/webiny__webiny-js/skills/user-skills/webiny-sdk/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/user-skills/project-structure/SKILL.md](../../../../sources/webiny__webiny-js/skills/user-skills/project-structure/SKILL.md) | agentRuntime signal |
| entrypoints | [scripts/release/src/index.ts](../../../../sources/webiny__webiny-js/scripts/release/src/index.ts) | entrypoints signal |
| entrypoints | [scripts/prepublishOnly/src/index.ts](../../../../sources/webiny__webiny-js/scripts/prepublishOnly/src/index.ts) | entrypoints signal |
| entrypoints | [scripts/mdxFromFolder/src/index.ts](../../../../sources/webiny__webiny-js/scripts/mdxFromFolder/src/index.ts) | entrypoints signal |
| entrypoints | [scripts/cli/src/Cli.ts](../../../../sources/webiny__webiny-js/scripts/cli/src/Cli.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 144 | [scripts/release/src/index.ts](../../../../sources/webiny__webiny-js/scripts/release/src/index.ts)<br>[scripts/prepublishOnly/src/index.ts](../../../../sources/webiny__webiny-js/scripts/prepublishOnly/src/index.ts)<br>[scripts/mdxFromFolder/src/index.ts](../../../../sources/webiny__webiny-js/scripts/mdxFromFolder/src/index.ts)<br>[scripts/cli/src/Cli.ts](../../../../sources/webiny__webiny-js/scripts/cli/src/Cli.ts)<br>[scripts/checkPackages/src/index.js](../../../../sources/webiny__webiny-js/scripts/checkPackages/src/index.js)<br>[scripts/buildPackages/src/index.js](../../../../sources/webiny__webiny-js/scripts/buildPackages/src/index.js)<br>[packages/website-builder-vue/src/index.ts](../../../../sources/webiny__webiny-js/packages/website-builder-vue/src/index.ts)<br>[packages/website-builder-sdk/src/index.ts](../../../../sources/webiny__webiny-js/packages/website-builder-sdk/src/index.ts) |
| agentRuntime | 483 | [AGENTS.md](../../../../sources/webiny__webiny-js/AGENTS.md)<br>[skills/user-skills/website-builder/SKILL.md](../../../../sources/webiny__webiny-js/skills/user-skills/website-builder/SKILL.md)<br>[skills/user-skills/webiny-sdk/SKILL.md](../../../../sources/webiny__webiny-js/skills/user-skills/webiny-sdk/SKILL.md)<br>[skills/user-skills/project-structure/SKILL.md](../../../../sources/webiny__webiny-js/skills/user-skills/project-structure/SKILL.md)<br>[skills/user-skills/mailer-smtp/SKILL.md](../../../../sources/webiny__webiny-js/skills/user-skills/mailer-smtp/SKILL.md)<br>[skills/user-skills/local-development/SKILL.md](../../../../sources/webiny__webiny-js/skills/user-skills/local-development/SKILL.md)<br>[skills/user-skills/infrastructure-extensions/SKILL.md](../../../../sources/webiny__webiny-js/skills/user-skills/infrastructure-extensions/SKILL.md)<br>[skills/user-skills/generated/infra/SKILL.md](../../../../sources/webiny__webiny-js/skills/user-skills/generated/infra/SKILL.md) |
| mcp | 23 | [packages/mcp/bin.js](../../../../sources/webiny__webiny-js/packages/mcp/bin.js)<br>[packages/mcp/package.json](../../../../sources/webiny__webiny-js/packages/mcp/package.json)<br>[packages/mcp/prepublishOnly.sh](../../../../sources/webiny__webiny-js/packages/mcp/prepublishOnly.sh)<br>[packages/mcp/tsconfig.build.json](../../../../sources/webiny__webiny-js/packages/mcp/tsconfig.build.json)<br>[packages/mcp/tsconfig.json](../../../../sources/webiny__webiny-js/packages/mcp/tsconfig.json)<br>[packages/mcp/webiny.config.js](../../../../sources/webiny__webiny-js/packages/mcp/webiny.config.js)<br>[packages/mcp/src/bin.js](../../../../sources/webiny__webiny-js/packages/mcp/src/bin.js)<br>[packages/mcp/src/cli.ts](../../../../sources/webiny__webiny-js/packages/mcp/src/cli.ts) |
| retrieval | 1513 | [typings/webiny-env/index.d.ts](../../../../sources/webiny__webiny-js/typings/webiny-env/index.d.ts)<br>[typings/void/index.d.ts](../../../../sources/webiny__webiny-js/typings/void/index.d.ts)<br>[typings/vitest/index.d.ts](../../../../sources/webiny__webiny-js/typings/vitest/index.d.ts)<br>[typings/static/index.d.ts](../../../../sources/webiny__webiny-js/typings/static/index.d.ts)<br>[testing/index.ts](../../../../sources/webiny__webiny-js/testing/index.ts)<br>[scripts/updatePackagesLib/index.ts](../../../../sources/webiny__webiny-js/scripts/updatePackagesLib/index.ts)<br>[scripts/updatePackagesLib/presets/index.ts](../../../../sources/webiny__webiny-js/scripts/updatePackagesLib/presets/index.ts)<br>[scripts/release/src/index.ts](../../../../sources/webiny__webiny-js/scripts/release/src/index.ts) |
| spec | 35 | [packages/webiny/src/admin/icons/architecture.svg](../../../../sources/webiny__webiny-js/packages/webiny/src/admin/icons/architecture.svg)<br>[packages/webiny/src/admin/icons/design_services.svg](../../../../sources/webiny__webiny-js/packages/webiny/src/admin/icons/design_services.svg)<br>[packages/system-requirements/constraints.js](../../../../sources/webiny__webiny-js/packages/system-requirements/constraints.js)<br>[packages/system-requirements/ensureSystemRequirements.d.ts](../../../../sources/webiny__webiny-js/packages/system-requirements/ensureSystemRequirements.d.ts)<br>[packages/system-requirements/ensureSystemRequirements.js](../../../../sources/webiny__webiny-js/packages/system-requirements/ensureSystemRequirements.js)<br>[packages/system-requirements/index.d.ts](../../../../sources/webiny__webiny-js/packages/system-requirements/index.d.ts)<br>[packages/system-requirements/index.js](../../../../sources/webiny__webiny-js/packages/system-requirements/index.js)<br>[packages/system-requirements/package.json](../../../../sources/webiny__webiny-js/packages/system-requirements/package.json) |
| eval | 1374 | [scripts/release/__tests__/betaRelease.test.ts](../../../../sources/webiny__webiny-js/scripts/release/__tests__/betaRelease.test.ts)<br>[scripts/release/__tests__/changelog.test.ts](../../../../sources/webiny__webiny-js/scripts/release/__tests__/changelog.test.ts)<br>[scripts/release/__tests__/githubRelease.test.ts](../../../../sources/webiny__webiny-js/scripts/release/__tests__/githubRelease.test.ts)<br>[scripts/release/__tests__/latestRelease.test.ts](../../../../sources/webiny__webiny-js/scripts/release/__tests__/latestRelease.test.ts)<br>[scripts/release/__tests__/unstableRelease.test.ts](../../../../sources/webiny__webiny-js/scripts/release/__tests__/unstableRelease.test.ts)<br>[scripts/release/__tests__/verdaccioRelease.test.ts](../../../../sources/webiny__webiny-js/scripts/release/__tests__/verdaccioRelease.test.ts)<br>[scripts/release/__tests__/versionPackages.test.ts](../../../../sources/webiny__webiny-js/scripts/release/__tests__/versionPackages.test.ts)<br>[packages/website-builder-sdk/src/BindingsProcessor.test.ts](../../../../sources/webiny__webiny-js/packages/website-builder-sdk/src/BindingsProcessor.test.ts) |
| security | 498 | [SECURITY.md](../../../../sources/webiny__webiny-js/SECURITY.md)<br>[skills/user-skills/generated/api/security/SKILL.md](../../../../sources/webiny__webiny-js/skills/user-skills/generated/api/security/SKILL.md)<br>[skills/user-skills/generated/admin/security/SKILL.md](../../../../sources/webiny__webiny-js/skills/user-skills/generated/admin/security/SKILL.md)<br>[packages/webiny/src/api/security.ts](../../../../sources/webiny__webiny-js/packages/webiny/src/api/security.ts)<br>[packages/webiny/src/api/security/api-key.ts](../../../../sources/webiny__webiny-js/packages/webiny/src/api/security/api-key.ts)<br>[packages/webiny/src/api/security/authentication.ts](../../../../sources/webiny__webiny-js/packages/webiny/src/api/security/authentication.ts)<br>[packages/webiny/src/api/security/role.ts](../../../../sources/webiny__webiny-js/packages/webiny/src/api/security/role.ts)<br>[packages/webiny/src/api/security/user.ts](../../../../sources/webiny__webiny-js/packages/webiny/src/api/security/user.ts) |
| ci | 64 | [.github/workflows/chromaticStorybook.yml](../../../../sources/webiny__webiny-js/.github/workflows/chromaticStorybook.yml)<br>[.github/workflows/ci.config.schema.json](../../../../sources/webiny__webiny-js/.github/workflows/ci.config.schema.json)<br>[.github/workflows/cleanup.yml](../../../../sources/webiny__webiny-js/.github/workflows/cleanup.yml)<br>[.github/workflows/codeql-analysis.yml](../../../../sources/webiny__webiny-js/.github/workflows/codeql-analysis.yml)<br>[.github/workflows/deleteReleaseBranch.yml](../../../../sources/webiny__webiny-js/.github/workflows/deleteReleaseBranch.yml)<br>[.github/workflows/fullRelease.yml](../../../../sources/webiny__webiny-js/.github/workflows/fullRelease.yml)<br>[.github/workflows/pullRequests.yml](../../../../sources/webiny__webiny-js/.github/workflows/pullRequests.yml)<br>[.github/workflows/pullRequestsCommandBeta.yml](../../../../sources/webiny__webiny-js/.github/workflows/pullRequestsCommandBeta.yml) |
| container | 7 | [packages/api-sync-system/src/resolver/deployment/Deployment.ts](../../../../sources/webiny__webiny-js/packages/api-sync-system/src/resolver/deployment/Deployment.ts)<br>[packages/api-sync-system/src/resolver/deployment/Deployments.ts](../../../../sources/webiny__webiny-js/packages/api-sync-system/src/resolver/deployment/Deployments.ts)<br>[packages/api-sync-system/src/resolver/deployment/DeploymentsFetcher.ts](../../../../sources/webiny__webiny-js/packages/api-sync-system/src/resolver/deployment/DeploymentsFetcher.ts)<br>[packages/api-sync-system/src/resolver/deployment/types.ts](../../../../sources/webiny__webiny-js/packages/api-sync-system/src/resolver/deployment/types.ts)<br>[packages/api-sync-system/__tests__/resolver/deployment/Deployment.test.ts](../../../../sources/webiny__webiny-js/packages/api-sync-system/__tests__/resolver/deployment/Deployment.test.ts)<br>[packages/api-sync-system/__tests__/resolver/deployment/Deployments.test.ts](../../../../sources/webiny__webiny-js/packages/api-sync-system/__tests__/resolver/deployment/Deployments.test.ts)<br>[packages/api-sync-system/__tests__/resolver/deployment/DeploymentsFetcher.test.ts](../../../../sources/webiny__webiny-js/packages/api-sync-system/__tests__/resolver/deployment/DeploymentsFetcher.test.ts) |
| instruction | 4 | [AGENTS.md](../../../../sources/webiny__webiny-js/AGENTS.md)<br>[CLAUDE.md](../../../../sources/webiny__webiny-js/CLAUDE.md)<br>[packages/webiny/AGENTS.md](../../../../sources/webiny__webiny-js/packages/webiny/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/webiny__webiny-js/.github/copilot-instructions.md) |
| docs | 90 | [README.md](../../../../sources/webiny__webiny-js/README.md)<br>[skills/repo-skills/README.md](../../../../sources/webiny__webiny-js/skills/repo-skills/README.md)<br>[scripts/prepublishOnly/src/generators/README.txt](../../../../sources/webiny__webiny-js/scripts/prepublishOnly/src/generators/README.txt)<br>[scripts/prepublishOnly/src/generators/ReadmeGenerator.ts](../../../../sources/webiny__webiny-js/scripts/prepublishOnly/src/generators/ReadmeGenerator.ts)<br>[packages/wcp/docs/examples/retrievingWcpUrls.md](../../../../sources/webiny__webiny-js/packages/wcp/docs/examples/retrievingWcpUrls.md)<br>[packages/react-properties/__tests__/cases/docs/components.tsx](../../../../sources/webiny__webiny-js/packages/react-properties/__tests__/cases/docs/components.tsx)<br>[packages/react-properties/__tests__/cases/docs/docs.test.tsx](../../../../sources/webiny__webiny-js/packages/react-properties/__tests__/cases/docs/docs.test.tsx)<br>[packages/react-properties/__tests__/cases/docs/navigation.tsx](../../../../sources/webiny__webiny-js/packages/react-properties/__tests__/cases/docs/navigation.tsx) |
| config | 287 | [package.json](../../../../sources/webiny__webiny-js/package.json)<br>[tsconfig.json](../../../../sources/webiny__webiny-js/tsconfig.json)<br>[typings/void/package.json](../../../../sources/webiny__webiny-js/typings/void/package.json)<br>[scripts/release/package.json](../../../../sources/webiny__webiny-js/scripts/release/package.json)<br>[scripts/release/tsconfig.json](../../../../sources/webiny__webiny-js/scripts/release/tsconfig.json)<br>[scripts/prepublishOnly/package.json](../../../../sources/webiny__webiny-js/scripts/prepublishOnly/package.json)<br>[scripts/prepublishOnly/tsconfig.json](../../../../sources/webiny__webiny-js/scripts/prepublishOnly/tsconfig.json)<br>[scripts/mdxFromFolder/package.json](../../../../sources/webiny__webiny-js/scripts/mdxFromFolder/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1374 | [scripts/release/__tests__/betaRelease.test.ts](../../../../sources/webiny__webiny-js/scripts/release/__tests__/betaRelease.test.ts)<br>[scripts/release/__tests__/changelog.test.ts](../../../../sources/webiny__webiny-js/scripts/release/__tests__/changelog.test.ts)<br>[scripts/release/__tests__/githubRelease.test.ts](../../../../sources/webiny__webiny-js/scripts/release/__tests__/githubRelease.test.ts)<br>[scripts/release/__tests__/latestRelease.test.ts](../../../../sources/webiny__webiny-js/scripts/release/__tests__/latestRelease.test.ts)<br>[scripts/release/__tests__/unstableRelease.test.ts](../../../../sources/webiny__webiny-js/scripts/release/__tests__/unstableRelease.test.ts)<br>[scripts/release/__tests__/verdaccioRelease.test.ts](../../../../sources/webiny__webiny-js/scripts/release/__tests__/verdaccioRelease.test.ts) |
| CI workflow | 64 | [.github/workflows/chromaticStorybook.yml](../../../../sources/webiny__webiny-js/.github/workflows/chromaticStorybook.yml)<br>[.github/workflows/ci.config.schema.json](../../../../sources/webiny__webiny-js/.github/workflows/ci.config.schema.json)<br>[.github/workflows/cleanup.yml](../../../../sources/webiny__webiny-js/.github/workflows/cleanup.yml)<br>[.github/workflows/codeql-analysis.yml](../../../../sources/webiny__webiny-js/.github/workflows/codeql-analysis.yml)<br>[.github/workflows/deleteReleaseBranch.yml](../../../../sources/webiny__webiny-js/.github/workflows/deleteReleaseBranch.yml)<br>[.github/workflows/fullRelease.yml](../../../../sources/webiny__webiny-js/.github/workflows/fullRelease.yml) |
| 컨테이너/배포 | 7 | [packages/api-sync-system/src/resolver/deployment/Deployment.ts](../../../../sources/webiny__webiny-js/packages/api-sync-system/src/resolver/deployment/Deployment.ts)<br>[packages/api-sync-system/src/resolver/deployment/Deployments.ts](../../../../sources/webiny__webiny-js/packages/api-sync-system/src/resolver/deployment/Deployments.ts)<br>[packages/api-sync-system/src/resolver/deployment/DeploymentsFetcher.ts](../../../../sources/webiny__webiny-js/packages/api-sync-system/src/resolver/deployment/DeploymentsFetcher.ts)<br>[packages/api-sync-system/src/resolver/deployment/types.ts](../../../../sources/webiny__webiny-js/packages/api-sync-system/src/resolver/deployment/types.ts)<br>[packages/api-sync-system/__tests__/resolver/deployment/Deployment.test.ts](../../../../sources/webiny__webiny-js/packages/api-sync-system/__tests__/resolver/deployment/Deployment.test.ts)<br>[packages/api-sync-system/__tests__/resolver/deployment/Deployments.test.ts](../../../../sources/webiny__webiny-js/packages/api-sync-system/__tests__/resolver/deployment/Deployments.test.ts) |
| 보안/정책 | 498 | [SECURITY.md](../../../../sources/webiny__webiny-js/SECURITY.md)<br>[skills/user-skills/generated/api/security/SKILL.md](../../../../sources/webiny__webiny-js/skills/user-skills/generated/api/security/SKILL.md)<br>[skills/user-skills/generated/admin/security/SKILL.md](../../../../sources/webiny__webiny-js/skills/user-skills/generated/admin/security/SKILL.md)<br>[packages/webiny/src/api/security.ts](../../../../sources/webiny__webiny-js/packages/webiny/src/api/security.ts)<br>[packages/webiny/src/api/security/api-key.ts](../../../../sources/webiny__webiny-js/packages/webiny/src/api/security/api-key.ts)<br>[packages/webiny/src/api/security/authentication.ts](../../../../sources/webiny__webiny-js/packages/webiny/src/api/security/authentication.ts) |
| 에이전트 지시문 | 4 | [AGENTS.md](../../../../sources/webiny__webiny-js/AGENTS.md)<br>[CLAUDE.md](../../../../sources/webiny__webiny-js/CLAUDE.md)<br>[packages/webiny/AGENTS.md](../../../../sources/webiny__webiny-js/packages/webiny/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/webiny__webiny-js/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/mcp/bin.js`, `packages/mcp/package.json`, `packages/mcp/prepublishOnly.sh`.
2. entrypoint를 따라 실행 흐름 확인: `scripts/release/src/index.ts`, `scripts/prepublishOnly/src/index.ts`, `scripts/mdxFromFolder/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `skills/user-skills/website-builder/SKILL.md`, `skills/user-skills/webiny-sdk/SKILL.md`.
4. retrieval/memory/indexing 확인: `typings/webiny-env/index.d.ts`, `typings/void/index.d.ts`, `typings/vitest/index.d.ts`.
5. test/eval 파일로 동작 검증: `scripts/release/__tests__/betaRelease.test.ts`, `scripts/release/__tests__/changelog.test.ts`, `scripts/release/__tests__/githubRelease.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Open source, self hosted CMS platform on AWS serverless Lambda, DynamoDB, S3 . TypeScript framework with multi tenancy, . 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
