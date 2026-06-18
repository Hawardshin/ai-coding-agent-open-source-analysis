# tableau/tableau-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Tableau's official MCP Server. Helping Agents see and understand data.

## 요약

- 조사 단위: `sources/tableau__tableau-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 660 files, 126 directories, depth score 117, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/web/apps/mcp-app.html, src/web/apps/src/mcp-app.css, src/web/apps/src/mcp-app.ts이고, 의존성 단서는 openai, anthropic, mcp, modelcontextprotocol, express, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | tableau/tableau-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 294 |
| Forks | 116 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/tableau__tableau-mcp](../../../../sources/tableau__tableau-mcp) |
| 기존 보고서 | [reports/global-trending/repositories/tableau__tableau-mcp.md](../../../global-trending/repositories/tableau__tableau-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 660 / 126 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .claude, .cursor, .github, docs, scripts, src, tests, types |
| 상위 확장자 | .ts: 491, .md: 75, .json: 31, .png: 18, .yml: 14, (none): 11, .css: 4, .mdc: 4, .list: 3, .svg: 2, .tsx: 2, .html: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 79 |
| docs | documentation surface | 59 |
| src | source boundary | 57 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |
| types | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsx src/scripts/build.ts |
| build | package.json | build:desktop | tsx src/scripts/build.ts --variant desktop |
| build | package.json | build:combined | tsx src/scripts/build.ts --variant combined |
| serve-dev | package.json | build:dev | tsx src/scripts/build.ts --dev |
| build | package.json | build:docker | docker build -t tableau-mcp . |
| build | package.json | :build:mcpb | npx -y @anthropic-ai/mcpb pack . tableau-mcp.mcpb |
| build | package.json | build:mcpb | run-s build:manifest :build:mcpb |
| build | package.json | build:manifest | tsx src/scripts/createClaudeMcpBundleManifest.ts |
| serve-dev | package.json | start:http | node build/index.js |
| serve-dev | package.json | start:http:apm | node -r ./build/telemetry/tracing.js build/index.js |
| serve-dev | package.json | start:http:docker | docker run -p 3927:3927 -i --rm --env-file env.list tableau-mcp |
| quality | package.json | lint | npm exec eslint |
| quality | package.json | lint:fix | npm exec eslint -- --fix |
| test | package.json | inspect | npx @modelcontextprotocol/inspector --config config.json --server tableau |
| test | package.json | :inspect:http | npx @modelcontextprotocol/inspector --config config.http.json --server tableau |
| test | package.json | inspect:http | run-p start:http :inspect:http |
| test | package.json | inspect:docker | npx @modelcontextprotocol/inspector --config config.docker.json --server tableau |
| test | package.json | inspect:docker:http | run-p start:http:docker :inspect:http |
| test | package.json | build:inspect | run-s build inspect |
| test | package.json | build:inspect:docker | run-s build:docker inspect:docker |
| test | package.json | build:inspect:docker:http | run-s build:docker inspect:docker:http |
| test | package.json | test | vitest --config ./vitest.config.ts |
| test | package.json | test:e2e | vitest --config ./vitest.config.e2e.ts |
| test | package.json | test:eval | vitest --config ./vitest.config.eval.ts |
| test | package.json | test:oauth:embedded | vitest --config ./vitest.config.oauth.embedded.ts |
| test | package.json | test:oauth:tableau | npx playwright test |
| test | package.json | coverage | vitest run --config ./vitest.config.ts --coverage |
| utility | package.json | version:major | npm version major --no-git-tag-version |
| utility | package.json | version:minor | npm version minor --no-git-tag-version |
| utility | package.json | version:patch | npm version patch --no-git-tag-version |
| serve-dev | package.json | docs:start | npm run start --prefix docs |
| entrypoint | package.json bin | index.js | ./build/index.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp, modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [src/web/apps/mcp-app.html](../../../../sources/tableau__tableau-mcp/src/web/apps/mcp-app.html) | mcp signal |
| mcp | [src/web/apps/src/mcp-app.css](../../../../sources/tableau__tableau-mcp/src/web/apps/src/mcp-app.css) | mcp signal |
| mcp | [src/web/apps/src/mcp-app.ts](../../../../sources/tableau__tableau-mcp/src/web/apps/src/mcp-app.ts) | mcp signal |
| mcp | [docs/docs/developers/mcp-inspector.md](../../../../sources/tableau__tableau-mcp/docs/docs/developers/mcp-inspector.md) | mcp signal |
| agentRuntime | [src/tools/tool.ts](../../../../sources/tableau__tableau-mcp/src/tools/tool.ts) | agentRuntime signal |
| agentRuntime | [src/tools/toolContext.ts](../../../../sources/tableau__tableau-mcp/src/tools/toolContext.ts) | agentRuntime signal |
| agentRuntime | [src/tools/toolName.test.ts](../../../../sources/tableau__tableau-mcp/src/tools/toolName.test.ts) | agentRuntime signal |
| agentRuntime | [src/tools/toolName.ts](../../../../sources/tableau__tableau-mcp/src/tools/toolName.ts) | agentRuntime signal |
| entrypoints | [tests/e2e/server.test.ts](../../../../sources/tableau__tableau-mcp/tests/e2e/server.test.ts) | entrypoints signal |
| entrypoints | [src/index.combined.ts](../../../../sources/tableau__tableau-mcp/src/index.combined.ts) | entrypoints signal |
| entrypoints | [src/index.desktop.ts](../../../../sources/tableau__tableau-mcp/src/index.desktop.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/tableau__tableau-mcp/src/index.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 9 | [tests/e2e/server.test.ts](../../../../sources/tableau__tableau-mcp/tests/e2e/server.test.ts)<br>[src/index.combined.ts](../../../../sources/tableau__tableau-mcp/src/index.combined.ts)<br>[src/index.desktop.ts](../../../../sources/tableau__tableau-mcp/src/index.desktop.ts)<br>[src/index.ts](../../../../sources/tableau__tableau-mcp/src/index.ts)<br>[src/server.desktop.test.ts](../../../../sources/tableau__tableau-mcp/src/server.desktop.test.ts)<br>[src/server.desktop.ts](../../../../sources/tableau__tableau-mcp/src/server.desktop.ts)<br>[src/server.ts](../../../../sources/tableau__tableau-mcp/src/server.ts)<br>[src/server.web.test.ts](../../../../sources/tableau__tableau-mcp/src/server.web.test.ts) |
| agentRuntime | 206 | [src/tools/tool.ts](../../../../sources/tableau__tableau-mcp/src/tools/tool.ts)<br>[src/tools/toolContext.ts](../../../../sources/tableau__tableau-mcp/src/tools/toolContext.ts)<br>[src/tools/toolName.test.ts](../../../../sources/tableau__tableau-mcp/src/tools/toolName.test.ts)<br>[src/tools/toolName.ts](../../../../sources/tableau__tableau-mcp/src/tools/toolName.ts)<br>[src/tools/web/adminGate.test.ts](../../../../sources/tableau__tableau-mcp/src/tools/web/adminGate.test.ts)<br>[src/tools/web/adminGate.ts](../../../../sources/tableau__tableau-mcp/src/tools/web/adminGate.ts)<br>[src/tools/web/convertViewImageToToolResult.ts](../../../../sources/tableau__tableau-mcp/src/tools/web/convertViewImageToToolResult.ts)<br>[src/tools/web/genericFilterDescription.ts](../../../../sources/tableau__tableau-mcp/src/tools/web/genericFilterDescription.ts) |
| mcp | 20 | [src/web/apps/mcp-app.html](../../../../sources/tableau__tableau-mcp/src/web/apps/mcp-app.html)<br>[src/web/apps/src/mcp-app.css](../../../../sources/tableau__tableau-mcp/src/web/apps/src/mcp-app.css)<br>[src/web/apps/src/mcp-app.ts](../../../../sources/tableau__tableau-mcp/src/web/apps/src/mcp-app.ts)<br>[docs/docs/developers/mcp-inspector.md](../../../../sources/tableau__tableau-mcp/docs/docs/developers/mcp-inspector.md)<br>[docs/docs/configuration/mcp-config/_category_.json](../../../../sources/tableau__tableau-mcp/docs/docs/configuration/mcp-config/_category_.json)<br>[docs/docs/configuration/mcp-config/env-vars.md](../../../../sources/tableau__tableau-mcp/docs/docs/configuration/mcp-config/env-vars.md)<br>[docs/docs/configuration/mcp-config/http-server.md](../../../../sources/tableau__tableau-mcp/docs/docs/configuration/mcp-config/http-server.md)<br>[docs/docs/configuration/mcp-config/oauth.md](../../../../sources/tableau__tableau-mcp/docs/docs/configuration/mcp-config/oauth.md) |
| retrieval | 8 | [src/index.combined.ts](../../../../sources/tableau__tableau-mcp/src/index.combined.ts)<br>[src/index.desktop.ts](../../../../sources/tableau__tableau-mcp/src/index.desktop.ts)<br>[src/index.ts](../../../../sources/tableau__tableau-mcp/src/index.ts)<br>[src/prompts/index.ts](../../../../sources/tableau__tableau-mcp/src/prompts/index.ts)<br>[src/desktop/libraries/workbook-serialization-converter/index.ts](../../../../sources/tableau__tableau-mcp/src/desktop/libraries/workbook-serialization-converter/index.ts)<br>[docs/src/pages/index.module.css](../../../../sources/tableau__tableau-mcp/docs/src/pages/index.module.css)<br>[docs/src/pages/index.tsx](../../../../sources/tableau__tableau-mcp/docs/src/pages/index.tsx)<br>[docs/src/components/HomepageFeatures/index.tsx](../../../../sources/tableau__tableau-mcp/docs/src/components/HomepageFeatures/index.tsx) |
| spec | 0 | 명확하지 않음 |
| eval | 230 | [vitest.config.eval.ts](../../../../sources/tableau__tableau-mcp/vitest.config.eval.ts)<br>[tests/constants.ts](../../../../sources/tableau__tableau-mcp/tests/constants.ts)<br>[tests/testEnv.ts](../../../../sources/tableau__tableau-mcp/tests/testEnv.ts)<br>[tests/oauth/tableau-authz/constants.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/constants.ts)<br>[tests/oauth/tableau-authz/env.oauth.example.list](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/env.oauth.example.list)<br>[tests/oauth/tableau-authz/oauthClient.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/oauthClient.ts)<br>[tests/oauth/tableau-authz/testEnv.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/testEnv.ts)<br>[tests/oauth/tableau-authz/tests/base.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/tests/base.ts) |
| security | 86 | [SECURITY.md](../../../../sources/tableau__tableau-mcp/SECURITY.md)<br>[vitest.config.oauth.embedded.ts](../../../../sources/tableau__tableau-mcp/vitest.config.oauth.embedded.ts)<br>[tests/oauth/tableau-authz/constants.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/constants.ts)<br>[tests/oauth/tableau-authz/env.oauth.example.list](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/env.oauth.example.list)<br>[tests/oauth/tableau-authz/oauthClient.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/oauthClient.ts)<br>[tests/oauth/tableau-authz/testEnv.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/testEnv.ts)<br>[tests/oauth/tableau-authz/tests/base.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/tests/base.ts)<br>[tests/oauth/tableau-authz/tests/generatePulseInsightBriefTool.test.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/tests/generatePulseInsightBriefTool.test.ts) |
| ci | 11 | [.github/workflows/ci.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/ci.yml)<br>[.github/workflows/cleanup-releases.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/cleanup-releases.yml)<br>[.github/workflows/deploy.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/deploy.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/docker-publish.yml)<br>[.github/workflows/pr-post-merge-tests.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/pr-post-merge-tests.yml)<br>[.github/workflows/pr-title-check.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/pr-title-check.yml)<br>[.github/workflows/publish.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/publish.yml)<br>[.github/workflows/tag.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/tag.yml) |
| container | 1 | [Dockerfile](../../../../sources/tableau__tableau-mcp/Dockerfile) |
| instruction | 5 | [CLAUDE.md](../../../../sources/tableau__tableau-mcp/CLAUDE.md)<br>[.cursor/rules/auth.mdc](../../../../sources/tableau__tableau-mcp/.cursor/rules/auth.mdc)<br>[.cursor/rules/tableau-mcp.mdc](../../../../sources/tableau__tableau-mcp/.cursor/rules/tableau-mcp.mdc)<br>[.cursor/rules/testing.mdc](../../../../sources/tableau__tableau-mcp/.cursor/rules/testing.mdc)<br>[.cursor/rules/tools.mdc](../../../../sources/tableau__tableau-mcp/.cursor/rules/tools.mdc) |
| docs | 118 | [README.combined.md](../../../../sources/tableau__tableau-mcp/README.combined.md)<br>[README.desktop.md](../../../../sources/tableau__tableau-mcp/README.desktop.md)<br>[README.md](../../../../sources/tableau__tableau-mcp/README.md)<br>[docs/.gitignore](../../../../sources/tableau__tableau-mcp/docs/.gitignore)<br>[docs/docusaurus.config.ts](../../../../sources/tableau__tableau-mcp/docs/docusaurus.config.ts)<br>[docs/package-lock.json](../../../../sources/tableau__tableau-mcp/docs/package-lock.json)<br>[docs/package.json](../../../../sources/tableau__tableau-mcp/docs/package.json)<br>[docs/README.md](../../../../sources/tableau__tableau-mcp/docs/README.md) |
| config | 4 | [package.json](../../../../sources/tableau__tableau-mcp/package.json)<br>[tsconfig.json](../../../../sources/tableau__tableau-mcp/tsconfig.json)<br>[docs/package.json](../../../../sources/tableau__tableau-mcp/docs/package.json)<br>[docs/tsconfig.json](../../../../sources/tableau__tableau-mcp/docs/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 230 | [vitest.config.eval.ts](../../../../sources/tableau__tableau-mcp/vitest.config.eval.ts)<br>[tests/constants.ts](../../../../sources/tableau__tableau-mcp/tests/constants.ts)<br>[tests/testEnv.ts](../../../../sources/tableau__tableau-mcp/tests/testEnv.ts)<br>[tests/oauth/tableau-authz/constants.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/constants.ts)<br>[tests/oauth/tableau-authz/env.oauth.example.list](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/env.oauth.example.list)<br>[tests/oauth/tableau-authz/oauthClient.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/oauthClient.ts) |
| CI workflow | 11 | [.github/workflows/ci.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/ci.yml)<br>[.github/workflows/cleanup-releases.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/cleanup-releases.yml)<br>[.github/workflows/deploy.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/deploy.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/docker-publish.yml)<br>[.github/workflows/pr-post-merge-tests.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/pr-post-merge-tests.yml)<br>[.github/workflows/pr-title-check.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/pr-title-check.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/tableau__tableau-mcp/Dockerfile) |
| 보안/정책 | 86 | [SECURITY.md](../../../../sources/tableau__tableau-mcp/SECURITY.md)<br>[vitest.config.oauth.embedded.ts](../../../../sources/tableau__tableau-mcp/vitest.config.oauth.embedded.ts)<br>[tests/oauth/tableau-authz/constants.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/constants.ts)<br>[tests/oauth/tableau-authz/env.oauth.example.list](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/env.oauth.example.list)<br>[tests/oauth/tableau-authz/oauthClient.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/oauthClient.ts)<br>[tests/oauth/tableau-authz/testEnv.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/testEnv.ts) |
| 에이전트 지시문 | 5 | [CLAUDE.md](../../../../sources/tableau__tableau-mcp/CLAUDE.md)<br>[.cursor/rules/auth.mdc](../../../../sources/tableau__tableau-mcp/.cursor/rules/auth.mdc)<br>[.cursor/rules/tableau-mcp.mdc](../../../../sources/tableau__tableau-mcp/.cursor/rules/tableau-mcp.mdc)<br>[.cursor/rules/testing.mdc](../../../../sources/tableau__tableau-mcp/.cursor/rules/testing.mdc)<br>[.cursor/rules/tools.mdc](../../../../sources/tableau__tableau-mcp/.cursor/rules/tools.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/web/apps/mcp-app.html`, `src/web/apps/src/mcp-app.css`, `src/web/apps/src/mcp-app.ts`.
2. entrypoint를 따라 실행 흐름 확인: `tests/e2e/server.test.ts`, `src/index.combined.ts`, `src/index.desktop.ts`.
3. agent/tool runtime 매핑: `src/tools/tool.ts`, `src/tools/toolContext.ts`, `src/tools/toolName.test.ts`.
4. retrieval/memory/indexing 확인: `src/index.combined.ts`, `src/index.desktop.ts`, `src/index.ts`.
5. test/eval 파일로 동작 검증: `vitest.config.eval.ts`, `tests/constants.ts`, `tests/testEnv.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Tableau's official MCP Server. Helping Agents see and understand data.. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, CLAUDE.md, openai이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
