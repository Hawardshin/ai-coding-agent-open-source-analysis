# rush-db/rushdb 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

RushDB is a graph + vector database and memory layer for AI agents. Push any JSON, get typed, searchable, relationship-aware records back — no schema, no migrations. Built on Neo4j.

## 요약

- 조사 단위: `sources/rush-db__rushdb` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 958 files, 264 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp.yaml, platform/core/src/dashboard/mcp-oauth/mcp-oauth.module.ts, platform/core/src/dashboard/mcp-oauth/mcp-oauth.scheduler.ts이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | rush-db/rushdb |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 196 |
| Forks | 17 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/rush-db__rushdb](../../../../sources/rush-db__rushdb) |
| 기존 보고서 | [reports/global-trending/repositories/rush-db__rushdb.md](../../../global-trending/repositories/rush-db__rushdb.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 958 / 264 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .changeset, .github, .husky, charts, docs, packages, platform |
| 상위 확장자 | .ts: 473, .tsx: 175, .mdx: 94, .md: 73, .json: 26, (none): 23, .png: 18, .svg: 18, .yaml: 13, .sql: 10, .js: 8, .css: 4 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 63 |
| packages/mcp-server | packages workspace | 42 |
| packages/javascript-sdk | packages workspace | 29 |
| packages/skills | packages workspace | 16 |
| .github | ci surface | 1 |
| charts | top-level component | 1 |
| packages | source boundary | 1 |
| platform | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | clean | pnpm -r run clean |
| utility | package.json | clean:install | pnpm -r run flush & pnpm install |
| serve-dev | package.json | dev | cd platform && pnpm dev:platform |
| build | package.json | build | pnpm -r run build |
| build | package.json | build:platform-image | docker build -t platform -f platform/Dockerfile . |
| quality | package.json | types:check | pnpm -r run types:check |
| quality | package.json | format | prettier --write ./**/*.{ts,tsx} |
| quality | package.json | lint | eslint --ext mjs,js,ts,tsx |
| quality | package.json | lint:fix | pnpm lint --fix |
| test | package.json | test | echo "No test specified" && exit 0 |
| test | package.json | test:watch | jest --watch |
| utility | package.json | version | changeset version |
| build | package.json | release | changeset publish |
| serve-dev | package.json | version:dev | changeset version --snapshot dev |
| serve-dev | package.json | release:dev | changeset publish --tag dev |
| quality | package.json | reinstall | find . -name 'node_modules' -type d -prune -exec rm -rf '{}' + && pnpm i |
| utility | package.json | prepare | husky install |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [mcp.yaml](../../../../sources/rush-db__rushdb/mcp.yaml) | mcp signal |
| mcp | [platform/core/src/dashboard/mcp-oauth/mcp-oauth.module.ts](../../../../sources/rush-db__rushdb/platform/core/src/dashboard/mcp-oauth/mcp-oauth.module.ts) | mcp signal |
| mcp | [platform/core/src/dashboard/mcp-oauth/mcp-oauth.scheduler.ts](../../../../sources/rush-db__rushdb/platform/core/src/dashboard/mcp-oauth/mcp-oauth.scheduler.ts) | mcp signal |
| mcp | [platform/core/src/dashboard/mcp-oauth/mcp-oauth.service.ts](../../../../sources/rush-db__rushdb/platform/core/src/dashboard/mcp-oauth/mcp-oauth.service.ts) | mcp signal |
| agentRuntime | [platform/dashboard/src/hooks/useClickOutside.ts](../../../../sources/rush-db__rushdb/platform/dashboard/src/hooks/useClickOutside.ts) | agentRuntime signal |
| agentRuntime | [platform/dashboard/src/hooks/useControllableState.ts](../../../../sources/rush-db__rushdb/platform/dashboard/src/hooks/useControllableState.ts) | agentRuntime signal |
| agentRuntime | [platform/dashboard/src/hooks/useDebounce.ts](../../../../sources/rush-db__rushdb/platform/dashboard/src/hooks/useDebounce.ts) | agentRuntime signal |
| agentRuntime | [platform/dashboard/src/hooks/useFocusOutside.ts](../../../../sources/rush-db__rushdb/platform/dashboard/src/hooks/useFocusOutside.ts) | agentRuntime signal |
| entrypoints | [platform/dashboard/src/App.tsx](../../../../sources/rush-db__rushdb/platform/dashboard/src/App.tsx) | entrypoints signal |
| entrypoints | [platform/dashboard/src/index.css](../../../../sources/rush-db__rushdb/platform/dashboard/src/index.css) | entrypoints signal |
| entrypoints | [platform/dashboard/src/main.tsx](../../../../sources/rush-db__rushdb/platform/dashboard/src/main.tsx) | entrypoints signal |
| entrypoints | [platform/core/src/app.controller.ts](../../../../sources/rush-db__rushdb/platform/core/src/app.controller.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 10 | [platform/dashboard/src/App.tsx](../../../../sources/rush-db__rushdb/platform/dashboard/src/App.tsx)<br>[platform/dashboard/src/index.css](../../../../sources/rush-db__rushdb/platform/dashboard/src/index.css)<br>[platform/dashboard/src/main.tsx](../../../../sources/rush-db__rushdb/platform/dashboard/src/main.tsx)<br>[platform/core/src/app.controller.ts](../../../../sources/rush-db__rushdb/platform/core/src/app.controller.ts)<br>[platform/core/src/app.module.ts](../../../../sources/rush-db__rushdb/platform/core/src/app.module.ts)<br>[platform/core/src/app.service.ts](../../../../sources/rush-db__rushdb/platform/core/src/app.service.ts)<br>[platform/core/src/cli.ts](../../../../sources/rush-db__rushdb/platform/core/src/cli.ts)<br>[platform/core/src/main.ts](../../../../sources/rush-db__rushdb/platform/core/src/main.ts) |
| agentRuntime | 83 | [platform/dashboard/src/hooks/useClickOutside.ts](../../../../sources/rush-db__rushdb/platform/dashboard/src/hooks/useClickOutside.ts)<br>[platform/dashboard/src/hooks/useControllableState.ts](../../../../sources/rush-db__rushdb/platform/dashboard/src/hooks/useControllableState.ts)<br>[platform/dashboard/src/hooks/useDebounce.ts](../../../../sources/rush-db__rushdb/platform/dashboard/src/hooks/useDebounce.ts)<br>[platform/dashboard/src/hooks/useFocusOutside.ts](../../../../sources/rush-db__rushdb/platform/dashboard/src/hooks/useFocusOutside.ts)<br>[platform/dashboard/src/hooks/useHotkeys.ts](../../../../sources/rush-db__rushdb/platform/dashboard/src/hooks/useHotkeys.ts)<br>[platform/dashboard/src/hooks/useIntersection.ts](../../../../sources/rush-db__rushdb/platform/dashboard/src/hooks/useIntersection.ts)<br>[platform/dashboard/src/hooks/useTimeout.ts](../../../../sources/rush-db__rushdb/platform/dashboard/src/hooks/useTimeout.ts)<br>[platform/dashboard/src/hooks/useSize/index.ts](../../../../sources/rush-db__rushdb/platform/dashboard/src/hooks/useSize/index.ts) |
| mcp | 69 | [mcp.yaml](../../../../sources/rush-db__rushdb/mcp.yaml)<br>[platform/core/src/dashboard/mcp-oauth/mcp-oauth.module.ts](../../../../sources/rush-db__rushdb/platform/core/src/dashboard/mcp-oauth/mcp-oauth.module.ts)<br>[platform/core/src/dashboard/mcp-oauth/mcp-oauth.scheduler.ts](../../../../sources/rush-db__rushdb/platform/core/src/dashboard/mcp-oauth/mcp-oauth.scheduler.ts)<br>[platform/core/src/dashboard/mcp-oauth/mcp-oauth.service.ts](../../../../sources/rush-db__rushdb/platform/core/src/dashboard/mcp-oauth/mcp-oauth.service.ts)<br>[platform/core/src/dashboard/mcp-oauth/model/oauth.repository.ts](../../../../sources/rush-db__rushdb/platform/core/src/dashboard/mcp-oauth/model/oauth.repository.ts)<br>[platform/core/src/dashboard/mcp-oauth/dto/authorize-accept.dto.ts](../../../../sources/rush-db__rushdb/platform/core/src/dashboard/mcp-oauth/dto/authorize-accept.dto.ts)<br>[platform/core/src/dashboard/mcp-oauth/dto/register-client.dto.ts](../../../../sources/rush-db__rushdb/platform/core/src/dashboard/mcp-oauth/dto/register-client.dto.ts)<br>[platform/core/src/dashboard/mcp-oauth/dto/token-request.dto.ts](../../../../sources/rush-db__rushdb/platform/core/src/dashboard/mcp-oauth/dto/token-request.dto.ts) |
| retrieval | 90 | [platform/dashboard/index.html](../../../../sources/rush-db__rushdb/platform/dashboard/index.html)<br>[platform/dashboard/src/index.css](../../../../sources/rush-db__rushdb/platform/dashboard/src/index.css)<br>[platform/dashboard/src/layout/RootLayout/index.tsx](../../../../sources/rush-db__rushdb/platform/dashboard/src/layout/RootLayout/index.tsx)<br>[platform/dashboard/src/layout/PublicLayout/index.tsx](../../../../sources/rush-db__rushdb/platform/dashboard/src/layout/PublicLayout/index.tsx)<br>[platform/dashboard/src/layout/ProjectLayout/index.tsx](../../../../sources/rush-db__rushdb/platform/dashboard/src/layout/ProjectLayout/index.tsx)<br>[platform/dashboard/src/layout/AuthLayout/index.tsx](../../../../sources/rush-db__rushdb/platform/dashboard/src/layout/AuthLayout/index.tsx)<br>[platform/dashboard/src/hooks/useSize/index.ts](../../../../sources/rush-db__rushdb/platform/dashboard/src/hooks/useSize/index.ts)<br>[platform/dashboard/src/features/projects/components/index.tsx](../../../../sources/rush-db__rushdb/platform/dashboard/src/features/projects/components/index.tsx) |
| spec | 12 | [platform/core/test/app.e2e-spec.ts](../../../../sources/rush-db__rushdb/platform/core/test/app.e2e-spec.ts)<br>[platform/core/src/core/search/parser/tests/aggregate.spec.ts](../../../../sources/rush-db__rushdb/platform/core/src/core/search/parser/tests/aggregate.spec.ts)<br>[platform/core/src/core/search/parser/tests/buildCompleteQuery.spec.ts](../../../../sources/rush-db__rushdb/platform/core/src/core/search/parser/tests/buildCompleteQuery.spec.ts)<br>[platform/core/src/core/search/parser/tests/compileExpr.spec.ts](../../../../sources/rush-db__rushdb/platform/core/src/core/search/parser/tests/compileExpr.spec.ts)<br>[platform/core/src/core/search/parser/tests/isCurrentLevelCriteria.spec.ts](../../../../sources/rush-db__rushdb/platform/core/src/core/search/parser/tests/isCurrentLevelCriteria.spec.ts)<br>[platform/core/src/core/search/parser/tests/isPropertyCriteria.spec.ts](../../../../sources/rush-db__rushdb/platform/core/src/core/search/parser/tests/isPropertyCriteria.spec.ts)<br>[platform/core/src/core/search/parser/tests/normalize.spec.ts](../../../../sources/rush-db__rushdb/platform/core/src/core/search/parser/tests/normalize.spec.ts)<br>[platform/core/src/core/search/parser/tests/parse-condition.spec.ts](../../../../sources/rush-db__rushdb/platform/core/src/core/search/parser/tests/parse-condition.spec.ts) |
| eval | 30 | [platform/core/test/app.e2e-spec.ts](../../../../sources/rush-db__rushdb/platform/core/test/app.e2e-spec.ts)<br>[platform/core/test/jest-e2e.json](../../../../sources/rush-db__rushdb/platform/core/test/jest-e2e.json)<br>[platform/core/src/core/search/parser/tests/aggregate.spec.ts](../../../../sources/rush-db__rushdb/platform/core/src/core/search/parser/tests/aggregate.spec.ts)<br>[platform/core/src/core/search/parser/tests/buildCompleteQuery.spec.ts](../../../../sources/rush-db__rushdb/platform/core/src/core/search/parser/tests/buildCompleteQuery.spec.ts)<br>[platform/core/src/core/search/parser/tests/compileExpr.spec.ts](../../../../sources/rush-db__rushdb/platform/core/src/core/search/parser/tests/compileExpr.spec.ts)<br>[platform/core/src/core/search/parser/tests/isCurrentLevelCriteria.spec.ts](../../../../sources/rush-db__rushdb/platform/core/src/core/search/parser/tests/isCurrentLevelCriteria.spec.ts)<br>[platform/core/src/core/search/parser/tests/isPropertyCriteria.spec.ts](../../../../sources/rush-db__rushdb/platform/core/src/core/search/parser/tests/isPropertyCriteria.spec.ts)<br>[platform/core/src/core/search/parser/tests/normalize.spec.ts](../../../../sources/rush-db__rushdb/platform/core/src/core/search/parser/tests/normalize.spec.ts) |
| security | 67 | [platform/dashboard/src/pages/oauth/consent.tsx](../../../../sources/rush-db__rushdb/platform/dashboard/src/pages/oauth/consent.tsx)<br>[platform/dashboard/src/pages/auth/confirmEmail.tsx](../../../../sources/rush-db__rushdb/platform/dashboard/src/pages/auth/confirmEmail.tsx)<br>[platform/dashboard/src/pages/auth/github.tsx](../../../../sources/rush-db__rushdb/platform/dashboard/src/pages/auth/github.tsx)<br>[platform/dashboard/src/pages/auth/google.tsx](../../../../sources/rush-db__rushdb/platform/dashboard/src/pages/auth/google.tsx)<br>[platform/dashboard/src/features/auth/constants.ts](../../../../sources/rush-db__rushdb/platform/dashboard/src/features/auth/constants.ts)<br>[platform/dashboard/src/features/auth/types.ts](../../../../sources/rush-db__rushdb/platform/dashboard/src/features/auth/types.ts)<br>[platform/dashboard/src/features/auth/stores/auth.ts](../../../../sources/rush-db__rushdb/platform/dashboard/src/features/auth/stores/auth.ts)<br>[platform/dashboard/src/features/auth/stores/settings.ts](../../../../sources/rush-db__rushdb/platform/dashboard/src/features/auth/stores/settings.ts) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/rush-db__rushdb/.github/workflows/ci.yml)<br>[.github/workflows/helm-publish.yml](../../../../sources/rush-db__rushdb/.github/workflows/helm-publish.yml)<br>[.github/workflows/release.yml](../../../../sources/rush-db__rushdb/.github/workflows/release.yml) |
| container | 36 | [platform/Dockerfile](../../../../sources/rush-db__rushdb/platform/Dockerfile)<br>[platform/core/docker-compose.yml](../../../../sources/rush-db__rushdb/platform/core/docker-compose.yml)<br>[packages/mcp-server/Dockerfile](../../../../sources/rush-db__rushdb/packages/mcp-server/Dockerfile)<br>[docs/docs/deploy/remote-hosting/aws-gcp-azure.mdx](../../../../sources/rush-db__rushdb/docs/docs/deploy/remote-hosting/aws-gcp-azure.mdx)<br>[docs/docs/deploy/remote-hosting/digital-ocean.mdx](../../../../sources/rush-db__rushdb/docs/docs/deploy/remote-hosting/digital-ocean.mdx)<br>[docs/docs/deploy/remote-hosting/index.mdx](../../../../sources/rush-db__rushdb/docs/docs/deploy/remote-hosting/index.mdx)<br>[docs/docs/deploy/remote-hosting/prerequisites.mdx](../../../../sources/rush-db__rushdb/docs/docs/deploy/remote-hosting/prerequisites.mdx)<br>[docs/docs/deploy/remote-hosting/self-hosting-rushdb.mdx](../../../../sources/rush-db__rushdb/docs/docs/deploy/remote-hosting/self-hosting-rushdb.mdx) |
| instruction | 1 | [docs/docs/connect/agents.mdx](../../../../sources/rush-db__rushdb/docs/docs/connect/agents.mdx) |
| docs | 199 | [README.md](../../../../sources/rush-db__rushdb/README.md)<br>[platform/dashboard/README.md](../../../../sources/rush-db__rushdb/platform/dashboard/README.md)<br>[platform/core/README.md](../../../../sources/rush-db__rushdb/platform/core/README.md)<br>[packages/skills/README.md](../../../../sources/rush-db__rushdb/packages/skills/README.md)<br>[packages/mcp-server/README.md](../../../../sources/rush-db__rushdb/packages/mcp-server/README.md)<br>[packages/javascript-sdk/README.md](../../../../sources/rush-db__rushdb/packages/javascript-sdk/README.md)<br>[packages/javascript-sdk/tests/README.md](../../../../sources/rush-db__rushdb/packages/javascript-sdk/tests/README.md)<br>[docs/.editorconfig](../../../../sources/rush-db__rushdb/docs/.editorconfig) |
| config | 15 | [package.json](../../../../sources/rush-db__rushdb/package.json)<br>[pnpm-workspace.yaml](../../../../sources/rush-db__rushdb/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/rush-db__rushdb/tsconfig.json)<br>[platform/package.json](../../../../sources/rush-db__rushdb/platform/package.json)<br>[platform/dashboard/package.json](../../../../sources/rush-db__rushdb/platform/dashboard/package.json)<br>[platform/dashboard/tsconfig.json](../../../../sources/rush-db__rushdb/platform/dashboard/tsconfig.json)<br>[platform/core/package.json](../../../../sources/rush-db__rushdb/platform/core/package.json)<br>[platform/core/tsconfig.json](../../../../sources/rush-db__rushdb/platform/core/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 30 | [platform/core/test/app.e2e-spec.ts](../../../../sources/rush-db__rushdb/platform/core/test/app.e2e-spec.ts)<br>[platform/core/test/jest-e2e.json](../../../../sources/rush-db__rushdb/platform/core/test/jest-e2e.json)<br>[platform/core/src/core/search/parser/tests/aggregate.spec.ts](../../../../sources/rush-db__rushdb/platform/core/src/core/search/parser/tests/aggregate.spec.ts)<br>[platform/core/src/core/search/parser/tests/buildCompleteQuery.spec.ts](../../../../sources/rush-db__rushdb/platform/core/src/core/search/parser/tests/buildCompleteQuery.spec.ts)<br>[platform/core/src/core/search/parser/tests/compileExpr.spec.ts](../../../../sources/rush-db__rushdb/platform/core/src/core/search/parser/tests/compileExpr.spec.ts)<br>[platform/core/src/core/search/parser/tests/isCurrentLevelCriteria.spec.ts](../../../../sources/rush-db__rushdb/platform/core/src/core/search/parser/tests/isCurrentLevelCriteria.spec.ts) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/rush-db__rushdb/.github/workflows/ci.yml)<br>[.github/workflows/helm-publish.yml](../../../../sources/rush-db__rushdb/.github/workflows/helm-publish.yml)<br>[.github/workflows/release.yml](../../../../sources/rush-db__rushdb/.github/workflows/release.yml) |
| 컨테이너/배포 | 36 | [platform/Dockerfile](../../../../sources/rush-db__rushdb/platform/Dockerfile)<br>[platform/core/docker-compose.yml](../../../../sources/rush-db__rushdb/platform/core/docker-compose.yml)<br>[packages/mcp-server/Dockerfile](../../../../sources/rush-db__rushdb/packages/mcp-server/Dockerfile)<br>[docs/docs/deploy/remote-hosting/aws-gcp-azure.mdx](../../../../sources/rush-db__rushdb/docs/docs/deploy/remote-hosting/aws-gcp-azure.mdx)<br>[docs/docs/deploy/remote-hosting/digital-ocean.mdx](../../../../sources/rush-db__rushdb/docs/docs/deploy/remote-hosting/digital-ocean.mdx)<br>[docs/docs/deploy/remote-hosting/index.mdx](../../../../sources/rush-db__rushdb/docs/docs/deploy/remote-hosting/index.mdx) |
| 보안/정책 | 67 | [platform/dashboard/src/pages/oauth/consent.tsx](../../../../sources/rush-db__rushdb/platform/dashboard/src/pages/oauth/consent.tsx)<br>[platform/dashboard/src/pages/auth/confirmEmail.tsx](../../../../sources/rush-db__rushdb/platform/dashboard/src/pages/auth/confirmEmail.tsx)<br>[platform/dashboard/src/pages/auth/github.tsx](../../../../sources/rush-db__rushdb/platform/dashboard/src/pages/auth/github.tsx)<br>[platform/dashboard/src/pages/auth/google.tsx](../../../../sources/rush-db__rushdb/platform/dashboard/src/pages/auth/google.tsx)<br>[platform/dashboard/src/features/auth/constants.ts](../../../../sources/rush-db__rushdb/platform/dashboard/src/features/auth/constants.ts)<br>[platform/dashboard/src/features/auth/types.ts](../../../../sources/rush-db__rushdb/platform/dashboard/src/features/auth/types.ts) |
| 에이전트 지시문 | 1 | [docs/docs/connect/agents.mdx](../../../../sources/rush-db__rushdb/docs/docs/connect/agents.mdx) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp.yaml`, `platform/core/src/dashboard/mcp-oauth/mcp-oauth.module.ts`, `platform/core/src/dashboard/mcp-oauth/mcp-oauth.scheduler.ts`.
2. entrypoint를 따라 실행 흐름 확인: `platform/dashboard/src/App.tsx`, `platform/dashboard/src/index.css`, `platform/dashboard/src/main.tsx`.
3. agent/tool runtime 매핑: `platform/dashboard/src/hooks/useClickOutside.ts`, `platform/dashboard/src/hooks/useControllableState.ts`, `platform/dashboard/src/hooks/useDebounce.ts`.
4. retrieval/memory/indexing 확인: `platform/dashboard/index.html`, `platform/dashboard/src/index.css`, `platform/dashboard/src/layout/RootLayout/index.tsx`.
5. test/eval 파일로 동작 검증: `platform/core/test/app.e2e-spec.ts`, `platform/core/test/jest-e2e.json`, `platform/core/src/core/search/parser/tests/aggregate.spec.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 RushDB is a graph + vector database and memory layer for AI agents. Push any JSON, get typed, searchable, relationship a. 핵심 구조 신호는 TypeScript, package.json, README.md, react, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
