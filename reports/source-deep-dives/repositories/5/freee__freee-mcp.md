# freee/freee-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Model Context Protocol (MCP) server for freee API integration

## 요약

- 조사 단위: `sources/freee__freee-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 310 files, 40 directories, depth score 114, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, mcp.json, src/types/mcp-overrides.d.ts이고, 의존성 단서는 modelcontextprotocol, express, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | freee/freee-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 459 |
| Forks | 53 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/freee__freee-mcp](../../../../sources/freee__freee-mcp) |
| 기존 보고서 | [reports/global-trending/repositories/freee__freee-mcp.md](../../../global-trending/repositories/freee__freee-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 310 / 40 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .agents, .changeset, .claude, .claude-plugin, .codex, .codex-plugin, .github, bin, docs, openapi, scripts, skills, src |
| 상위 확장자 | .ts: 138, .md: 117, .json: 28, (none): 10, .yml: 6, .yaml: 5, .png: 2, .cjs: 1, .js: 1, .lock: 1, .sign: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 93 |
| docs | documentation surface | 3 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| openapi | source boundary | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | clean | rm -rf dist bin/freee-mcp.js bin/freee-remote-mcp.js bin/freee-sign-mcp.js bin/freee-sign-remote-mcp.js |
| build | package.json | build | bun run build.ts |
| build | package.json | prepare | bun run build |
| serve-dev | package.json | start | bun run src/index.ts |
| serve-dev | package.json | dev | bun --watch run src/index.ts |
| serve-dev | package.json | dev:remote | bun --watch run src/entry-remote.ts |
| quality | package.json | typecheck | tsc --noEmit |
| quality | package.json | lint | biome lint src/ |
| quality | package.json | lint:fix | biome lint --write src/ |
| utility | package.json | knip | knip |
| quality | package.json | format | biome format --write src/ |
| quality | package.json | check | biome check src/ |
| test | package.json | inspector | mcp-inspector bun run src/index.ts |
| test | package.json | test | vitest |
| test | package.json | test:run | vitest run |
| test | package.json | test:coverage | vitest run --coverage |
| test | package.json | test:ui | vitest --ui |
| utility | package.json | generate:references | bun run scripts/generate-references.ts |
| utility | package.json | fetch:schemas | bun run scripts/fetch-schemas.ts |
| utility | package.json | changeset | changeset |
| utility | package.json | version | changeset version |
| build | package.json | release | bun run build && changeset publish |
| utility | Makefile | .PHONY | make .PHONY |
| entrypoint | package.json bin | freee-mcp.js | ./bin/freee-mcp.js |
| entrypoint | package.json bin | freee-remote-mcp.js | ./bin/freee-remote-mcp.js |
| entrypoint | package.json bin | freee-sign-mcp.js | ./bin/freee-sign-mcp.js |
| entrypoint | package.json bin | freee-sign-remote-mcp.js | ./bin/freee-sign-remote-mcp.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express |
| developerSurface | 없음 |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/freee__freee-mcp/.mcp.json) | mcp signal |
| mcp | [mcp.json](../../../../sources/freee__freee-mcp/mcp.json) | mcp signal |
| mcp | [src/types/mcp-overrides.d.ts](../../../../sources/freee__freee-mcp/src/types/mcp-overrides.d.ts) | mcp signal |
| mcp | [src/mcp/file-upload-tool.test.ts](../../../../sources/freee__freee-mcp/src/mcp/file-upload-tool.test.ts) | mcp signal |
| agentRuntime | [src/telemetry/tool-tracer.test.ts](../../../../sources/freee__freee-mcp/src/telemetry/tool-tracer.test.ts) | agentRuntime signal |
| agentRuntime | [src/telemetry/tool-tracer.ts](../../../../sources/freee__freee-mcp/src/telemetry/tool-tracer.ts) | agentRuntime signal |
| agentRuntime | [src/storage/context.test.ts](../../../../sources/freee__freee-mcp/src/storage/context.test.ts) | agentRuntime signal |
| agentRuntime | [src/storage/context.ts](../../../../sources/freee__freee-mcp/src/storage/context.ts) | agentRuntime signal |
| entrypoints | [src/cli.ts](../../../../sources/freee__freee-mcp/src/cli.ts) | entrypoints signal |
| entrypoints | [src/index.test.ts](../../../../sources/freee__freee-mcp/src/index.test.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/freee__freee-mcp/src/index.ts) | entrypoints signal |
| entrypoints | [src/auth/server.test.ts](../../../../sources/freee__freee-mcp/src/auth/server.test.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [src/cli.ts](../../../../sources/freee__freee-mcp/src/cli.ts)<br>[src/index.test.ts](../../../../sources/freee__freee-mcp/src/index.test.ts)<br>[src/index.ts](../../../../sources/freee__freee-mcp/src/index.ts)<br>[src/auth/server.test.ts](../../../../sources/freee__freee-mcp/src/auth/server.test.ts)<br>[src/auth/server.ts](../../../../sources/freee__freee-mcp/src/auth/server.ts)<br>[bin/.keep](../../../../sources/freee__freee-mcp/bin/.keep) |
| agentRuntime | 117 | [src/telemetry/tool-tracer.test.ts](../../../../sources/freee__freee-mcp/src/telemetry/tool-tracer.test.ts)<br>[src/telemetry/tool-tracer.ts](../../../../sources/freee__freee-mcp/src/telemetry/tool-tracer.ts)<br>[src/storage/context.test.ts](../../../../sources/freee__freee-mcp/src/storage/context.test.ts)<br>[src/storage/context.ts](../../../../sources/freee__freee-mcp/src/storage/context.ts)<br>[src/sign/tools.ts](../../../../sources/freee__freee-mcp/src/sign/tools.ts)<br>[src/mcp/tools.test.ts](../../../../sources/freee__freee-mcp/src/mcp/tools.test.ts)<br>[src/mcp/tools.ts](../../../../sources/freee__freee-mcp/src/mcp/tools.ts)<br>[skills/freee-api-skill/apm.yml](../../../../sources/freee__freee-mcp/skills/freee-api-skill/apm.yml) |
| mcp | 13 | [.mcp.json](../../../../sources/freee__freee-mcp/.mcp.json)<br>[mcp.json](../../../../sources/freee__freee-mcp/mcp.json)<br>[src/types/mcp-overrides.d.ts](../../../../sources/freee__freee-mcp/src/types/mcp-overrides.d.ts)<br>[src/mcp/file-upload-tool.test.ts](../../../../sources/freee__freee-mcp/src/mcp/file-upload-tool.test.ts)<br>[src/mcp/file-upload-tool.ts](../../../../sources/freee__freee-mcp/src/mcp/file-upload-tool.ts)<br>[src/mcp/handlers.test.ts](../../../../sources/freee__freee-mcp/src/mcp/handlers.test.ts)<br>[src/mcp/handlers.ts](../../../../sources/freee__freee-mcp/src/mcp/handlers.ts)<br>[src/mcp/tools.test.ts](../../../../sources/freee__freee-mcp/src/mcp/tools.test.ts) |
| retrieval | 5 | [src/index.test.ts](../../../../sources/freee__freee-mcp/src/index.test.ts)<br>[src/index.ts](../../../../sources/freee__freee-mcp/src/index.ts)<br>[src/sign/index.ts](../../../../sources/freee__freee-mcp/src/sign/index.ts)<br>[src/sign/cli/index.ts](../../../../sources/freee__freee-mcp/src/sign/cli/index.ts)<br>[src/cli/index.ts](../../../../sources/freee__freee-mcp/src/cli/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 63 | [src/config-remote.test.ts](../../../../sources/freee__freee-mcp/src/config-remote.test.ts)<br>[src/config.test.ts](../../../../sources/freee__freee-mcp/src/config.test.ts)<br>[src/index.test.ts](../../../../sources/freee__freee-mcp/src/index.test.ts)<br>[src/utils/error.test.ts](../../../../sources/freee__freee-mcp/src/utils/error.test.ts)<br>[src/utils/format-company.test.ts](../../../../sources/freee__freee-mcp/src/utils/format-company.test.ts)<br>[src/test-utils/setup.ts](../../../../sources/freee__freee-mcp/src/test-utils/setup.ts)<br>[src/test-utils/temp-dir.ts](../../../../sources/freee__freee-mcp/src/test-utils/temp-dir.ts)<br>[src/telemetry/fetch-patch.test.ts](../../../../sources/freee__freee-mcp/src/telemetry/fetch-patch.test.ts) |
| security | 26 | [src/sign/oauth.test.ts](../../../../sources/freee__freee-mcp/src/sign/oauth.test.ts)<br>[src/sign/oauth.ts](../../../../sources/freee__freee-mcp/src/sign/oauth.ts)<br>[src/sign/server/sign-auth-basic.integration.test.ts](../../../../sources/freee__freee-mcp/src/sign/server/sign-auth-basic.integration.test.ts)<br>[src/sign/server/sign-oauth-provider.ts](../../../../sources/freee__freee-mcp/src/sign/server/sign-oauth-provider.ts)<br>[src/server/auth-basic.integration.test.ts](../../../../sources/freee__freee-mcp/src/server/auth-basic.integration.test.ts)<br>[src/server/client-auth-basic.test.ts](../../../../sources/freee__freee-mcp/src/server/client-auth-basic.test.ts)<br>[src/server/client-auth-basic.ts](../../../../sources/freee__freee-mcp/src/server/client-auth-basic.ts)<br>[src/server/oauth-metadata-override.test.ts](../../../../sources/freee__freee-mcp/src/server/oauth-metadata-override.test.ts) |
| ci | 4 | [.github/workflows/claude.yml](../../../../sources/freee__freee-mcp/.github/workflows/claude.yml)<br>[.github/workflows/close-issue-by-label.yml](../../../../sources/freee__freee-mcp/.github/workflows/close-issue-by-label.yml)<br>[.github/workflows/publish.yml](../../../../sources/freee__freee-mcp/.github/workflows/publish.yml)<br>[.github/workflows/test.yml](../../../../sources/freee__freee-mcp/.github/workflows/test.yml) |
| container | 3 | [compose.yaml](../../../../sources/freee__freee-mcp/compose.yaml)<br>[Dockerfile](../../../../sources/freee__freee-mcp/Dockerfile)<br>[Dockerfile.sign](../../../../sources/freee__freee-mcp/Dockerfile.sign) |
| instruction | 2 | [CLAUDE.md](../../../../sources/freee__freee-mcp/CLAUDE.md)<br>[.github/CLAUDE.md](../../../../sources/freee__freee-mcp/.github/CLAUDE.md) |
| docs | 4 | [README.md](../../../../sources/freee__freee-mcp/README.md)<br>[docs/images/claude-desktop-custom-connector.png](../../../../sources/freee__freee-mcp/docs/images/claude-desktop-custom-connector.png)<br>[docs/images/claude-desktop-skill-upload.png](../../../../sources/freee__freee-mcp/docs/images/claude-desktop-skill-upload.png)<br>[.changeset/README.md](../../../../sources/freee__freee-mcp/.changeset/README.md) |
| config | 3 | [Makefile](../../../../sources/freee__freee-mcp/Makefile)<br>[package.json](../../../../sources/freee__freee-mcp/package.json)<br>[tsconfig.json](../../../../sources/freee__freee-mcp/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 63 | [src/config-remote.test.ts](../../../../sources/freee__freee-mcp/src/config-remote.test.ts)<br>[src/config.test.ts](../../../../sources/freee__freee-mcp/src/config.test.ts)<br>[src/index.test.ts](../../../../sources/freee__freee-mcp/src/index.test.ts)<br>[src/utils/error.test.ts](../../../../sources/freee__freee-mcp/src/utils/error.test.ts)<br>[src/utils/format-company.test.ts](../../../../sources/freee__freee-mcp/src/utils/format-company.test.ts)<br>[src/test-utils/setup.ts](../../../../sources/freee__freee-mcp/src/test-utils/setup.ts) |
| CI workflow | 4 | [.github/workflows/claude.yml](../../../../sources/freee__freee-mcp/.github/workflows/claude.yml)<br>[.github/workflows/close-issue-by-label.yml](../../../../sources/freee__freee-mcp/.github/workflows/close-issue-by-label.yml)<br>[.github/workflows/publish.yml](../../../../sources/freee__freee-mcp/.github/workflows/publish.yml)<br>[.github/workflows/test.yml](../../../../sources/freee__freee-mcp/.github/workflows/test.yml) |
| 컨테이너/배포 | 3 | [compose.yaml](../../../../sources/freee__freee-mcp/compose.yaml)<br>[Dockerfile](../../../../sources/freee__freee-mcp/Dockerfile)<br>[Dockerfile.sign](../../../../sources/freee__freee-mcp/Dockerfile.sign) |
| 보안/정책 | 26 | [src/sign/oauth.test.ts](../../../../sources/freee__freee-mcp/src/sign/oauth.test.ts)<br>[src/sign/oauth.ts](../../../../sources/freee__freee-mcp/src/sign/oauth.ts)<br>[src/sign/server/sign-auth-basic.integration.test.ts](../../../../sources/freee__freee-mcp/src/sign/server/sign-auth-basic.integration.test.ts)<br>[src/sign/server/sign-oauth-provider.ts](../../../../sources/freee__freee-mcp/src/sign/server/sign-oauth-provider.ts)<br>[src/server/auth-basic.integration.test.ts](../../../../sources/freee__freee-mcp/src/server/auth-basic.integration.test.ts)<br>[src/server/client-auth-basic.test.ts](../../../../sources/freee__freee-mcp/src/server/client-auth-basic.test.ts) |
| 에이전트 지시문 | 2 | [CLAUDE.md](../../../../sources/freee__freee-mcp/CLAUDE.md)<br>[.github/CLAUDE.md](../../../../sources/freee__freee-mcp/.github/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `.mcp.json`, `mcp.json`, `src/types/mcp-overrides.d.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/cli.ts`, `src/index.test.ts`, `src/index.ts`.
3. agent/tool runtime 매핑: `src/telemetry/tool-tracer.test.ts`, `src/telemetry/tool-tracer.ts`, `src/storage/context.test.ts`.
4. retrieval/memory/indexing 확인: `src/index.test.ts`, `src/index.ts`, `src/sign/index.ts`.
5. test/eval 파일로 동작 검증: `src/config-remote.test.ts`, `src/config.test.ts`, `src/index.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Model Context Protocol MCP server for freee API integration. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, Makefile, README.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
