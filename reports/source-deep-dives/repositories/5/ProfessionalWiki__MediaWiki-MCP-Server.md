# ProfessionalWiki/MediaWiki-MCP-Server 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Model Context Protocol (MCP) Server to connect your AI with any MediaWiki

## 요약

- 조사 단위: `sources/ProfessionalWiki__MediaWiki-MCP-Server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 306 files, 41 directories, depth score 114, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp.docker.json, mcp.json이고, 의존성 단서는 anthropic, mcp, modelcontextprotocol, express, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | ProfessionalWiki/MediaWiki-MCP-Server |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 96 |
| Forks | 25 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/ProfessionalWiki__MediaWiki-MCP-Server](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server) |
| 기존 보고서 | [reports/global-trending/repositories/ProfessionalWiki__MediaWiki-MCP-Server.md](../../../global-trending/repositories/ProfessionalWiki__MediaWiki-MCP-Server.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 306 / 41 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, docs, mcpb, scripts, src, tests |
| 상위 확장자 | .ts: 261, .json: 13, .md: 13, .cjs: 8, (none): 6, .yml: 5 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 110 |
| src | source boundary | 28 |
| docs | documentation surface | 7 |
| .github | ci surface | 1 |
| mcpb | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | start | node dist/index.js |
| serve-dev | package.json | start:http | MCP_TRANSPORT=http node dist/index.js |
| serve-dev | package.json | dev | tsgo --watch |
| build | package.json | build | tsgo |
| test | package.json | fmt | oxfmt src tests scripts |
| test | package.json | fmt:check | oxfmt --check src tests scripts |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| quality | package.json | lint | oxlint --tsconfig=./tsconfig.lint.json |
| serve-dev | package.json | validate:server-json | node scripts/validate-server-json.cjs |
| test | package.json | preflight | npm ci && npm run lint && npm run fmt:check && npm run validate:server-json && npm run test && npm run build && npm run bundle -- --clean |
| utility | package.json | prepare | lefthook install |
| test | package.json | inspector | concurrently --kill-others "tsgo --watch" "npx -y @modelcontextprotocol/inspector@latest node dist/index.js" |
| test | package.json | inspector:http | concurrently --kill-others "tsgo --watch" "npx -y @modelcontextprotocol/inspector@latest" "MCP_TRANSPORT=http node dist/index.js" |
| test | package.json | mcpjam | concurrently --kill-others "tsgo --watch" "npx -y @mcpjam/inspector@latest node $(pwd)/dist/index.js" |
| build | package.json | bundle | npm run build && node scripts/bundle.cjs |
| utility | package.json | preversion | npm run preflight |
| serve-dev | package.json | version | node scripts/sync-version.cjs && node scripts/promote-changelog.cjs && git add server.json mcpb/manifest.json gemini-extension.json CHANGELOG.md |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install | make install |
| utility | Makefile | update | make update |
| build | Makefile | build | make build |
| test | Makefile | test | make test |
| quality | Makefile | lint | make lint |
| serve-dev | Makefile | start | make start |
| serve-dev | Makefile | dev | make dev |
| test | Makefile | inspector | make inspector |
| utility | Makefile | mcpjam | make mcpjam |
| entrypoint | package.json bin | index.js | dist/index.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | anthropic |
| agentProtocols | mcp, modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [mcp.docker.json](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/mcp.docker.json) | mcp signal |
| mcp | [mcp.json](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/mcp.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/tools/add-wiki.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/add-wiki.test.ts) | agentRuntime signal |
| agentRuntime | [tests/tools/compare-pages.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/compare-pages.test.ts) | agentRuntime signal |
| agentRuntime | [tests/tools/create-page.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/create-page.test.ts) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/server.json) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/src/index.ts) | entrypoints signal |
| entrypoints | [src/server.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/src/server.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/CLAUDE.md) | instruction signal |
| config | [Makefile](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/Makefile) | config signal |
| config | [package.json](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [server.json](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/server.json)<br>[src/index.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/src/index.ts)<br>[src/server.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/src/server.ts) |
| agentRuntime | 109 | [AGENTS.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/AGENTS.md)<br>[tests/tools/add-wiki.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/add-wiki.test.ts)<br>[tests/tools/compare-pages.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/compare-pages.test.ts)<br>[tests/tools/create-page.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/create-page.test.ts)<br>[tests/tools/delete-page.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/delete-page.test.ts)<br>[tests/tools/get-category-members.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/get-category-members.test.ts)<br>[tests/tools/get-file-data.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/get-file-data.test.ts)<br>[tests/tools/get-file.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/get-file.test.ts) |
| mcp | 2 | [mcp.docker.json](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/mcp.docker.json)<br>[mcp.json](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/mcp.json) |
| retrieval | 16 | [tests/tools/add-wiki.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/add-wiki.test.ts)<br>[tests/tools/index.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/index.test.ts)<br>[tests/tools/remove-wiki.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/remove-wiki.test.ts)<br>[tests/tools/extensions/index.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/extensions/index.test.ts)<br>[tests/runtime/dispatch.wiki.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/runtime/dispatch.wiki.test.ts)<br>[tests/resources/index.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/resources/index.test.ts)<br>[src/index.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/src/index.ts)<br>[src/tools/add-wiki.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/src/tools/add-wiki.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 130 | [tests/setup.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/setup.ts)<br>[tests/wikis/activeWiki.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/activeWiki.test.ts)<br>[tests/wikis/execSecret.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/execSecret.test.ts)<br>[tests/wikis/mwnErrorSanitizer.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/mwnErrorSanitizer.test.ts)<br>[tests/wikis/mwnProvider.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/mwnProvider.test.ts)<br>[tests/wikis/siteInfo.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/siteInfo.test.ts)<br>[tests/wikis/uploadDirs.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/uploadDirs.test.ts)<br>[tests/wikis/wikiCache.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/wikiCache.test.ts) |
| security | 47 | [SECURITY.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/SECURITY.md)<br>[tests/transport/streamableHttp.oauth.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/transport/streamableHttp.oauth.test.ts)<br>[tests/tools/oauth-logout.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/oauth-logout.test.ts)<br>[tests/tools/oauth-status.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/oauth-status.test.ts)<br>[tests/runtime/dispatch.oauth.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/runtime/dispatch.oauth.test.ts)<br>[tests/auth/acquireToken.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/auth/acquireToken.test.ts)<br>[tests/auth/browserAuth.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/auth/browserAuth.test.ts)<br>[tests/auth/metadata.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/auth/metadata.test.ts) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/.github/workflows/ci.yml)<br>[.github/workflows/publish-image.yml](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/.github/workflows/publish-image.yml)<br>[.github/workflows/release.yml](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/.github/workflows/release.yml) |
| container | 1 | [Dockerfile](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/AGENTS.md)<br>[CLAUDE.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/CLAUDE.md) |
| docs | 7 | [README.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/README.md)<br>[docs/configuration.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/docs/configuration.md)<br>[docs/deployment.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/docs/deployment.md)<br>[docs/operations.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/docs/operations.md)<br>[docs/releasing.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/docs/releasing.md)<br>[docs/testing.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/docs/testing.md)<br>[docs/tool-conventions.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/docs/tool-conventions.md) |
| config | 3 | [Makefile](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/Makefile)<br>[package.json](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/package.json)<br>[tsconfig.json](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 130 | [tests/setup.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/setup.ts)<br>[tests/wikis/activeWiki.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/activeWiki.test.ts)<br>[tests/wikis/execSecret.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/execSecret.test.ts)<br>[tests/wikis/mwnErrorSanitizer.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/mwnErrorSanitizer.test.ts)<br>[tests/wikis/mwnProvider.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/mwnProvider.test.ts)<br>[tests/wikis/siteInfo.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/siteInfo.test.ts) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/.github/workflows/ci.yml)<br>[.github/workflows/publish-image.yml](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/.github/workflows/publish-image.yml)<br>[.github/workflows/release.yml](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/.github/workflows/release.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/Dockerfile) |
| 보안/정책 | 47 | [SECURITY.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/SECURITY.md)<br>[tests/transport/streamableHttp.oauth.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/transport/streamableHttp.oauth.test.ts)<br>[tests/tools/oauth-logout.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/oauth-logout.test.ts)<br>[tests/tools/oauth-status.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/oauth-status.test.ts)<br>[tests/runtime/dispatch.oauth.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/runtime/dispatch.oauth.test.ts)<br>[tests/auth/acquireToken.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/auth/acquireToken.test.ts) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/AGENTS.md)<br>[CLAUDE.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp.docker.json`, `mcp.json`, `AGENTS.md`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `src/index.ts`, `src/server.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/tools/add-wiki.test.ts`, `tests/tools/compare-pages.test.ts`.
4. retrieval/memory/indexing 확인: `tests/tools/add-wiki.test.ts`, `tests/tools/index.test.ts`, `tests/tools/remove-wiki.test.ts`.
5. test/eval 파일로 동작 검증: `tests/setup.ts`, `tests/wikis/activeWiki.test.ts`, `tests/wikis/execSecret.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Model Context Protocol MCP Server to connect your AI with any MediaWiki. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, Makefile, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
