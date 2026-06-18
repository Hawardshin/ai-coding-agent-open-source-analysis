# alpic-ai/skybridge 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Type-safe. React-powered. Platform-agnostic.

## 요약

- 조사 단위: `sources/alpic-ai__skybridge` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 813 files, 165 directories, depth score 125, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=skills/mcp-app-builder/SKILL.md, packages/devtools/src/lib/mcp/browser-oauth-provider.ts, packages/devtools/src/lib/mcp/client.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | alpic-ai/skybridge |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 1754 |
| Forks | 102 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/alpic-ai__skybridge](../../../../sources/alpic-ai__skybridge) |
| 기존 보고서 | [reports/global-trending/repositories/alpic-ai__skybridge.md](../../../global-trending/repositories/alpic-ai__skybridge.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 813 / 165 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .claude, .github, docs, examples, infrastructure, landing, packages, scripts, skills |
| 상위 확장자 | .ts: 260, .tsx: 124, .json: 98, .mdx: 68, .webp: 64, .png: 45, .md: 44, .svg: 26, .css: 21, (none): 21, .example: 7, .jpg: 6 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/core | packages workspace | 56 |
| packages/devtools | packages workspace | 47 |
| docs | documentation surface | 28 |
| packages/create-skybridge | packages workspace | 22 |
| examples/auth-stytch | examples workspace | 19 |
| examples/auth-workos | examples workspace | 19 |
| examples/capitals | examples workspace | 7 |
| examples/everything | examples workspace | 7 |
| examples/investigation-game | examples workspace | 7 |
| examples/chess | examples workspace | 6 |
| examples/ecom-carousel | examples workspace | 6 |
| examples/generative-ui | examples workspace | 6 |
| examples/manifest-ui | examples workspace | 6 |
| examples/productivity | examples workspace | 6 |
| examples/supabase-triplog | examples workspace | 6 |
| examples/times-up | examples workspace | 6 |
| examples/flight-booking | examples workspace | 5 |
| examples/auth-auth0 | examples workspace | 2 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | pnpm --filter "./packages/*" build |
| test | package.json | test | pnpm -r --if-present test |
| quality | package.json | format | pnpm -r --if-present format |
| test | package.json | test:unit | pnpm -r --if-present test:unit |
| test | package.json | test:format | pnpm -r --if-present test:format |
| serve-dev | package.json | docs:dev | pnpm --filter @skybridge/docs dev |
| utility | package.json | bump | node scripts/bump.js && pnpm i |


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
| mcp | [skills/mcp-app-builder/SKILL.md](../../../../sources/alpic-ai__skybridge/skills/mcp-app-builder/SKILL.md) | mcp signal |
| mcp | [packages/devtools/src/lib/mcp/browser-oauth-provider.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/mcp/browser-oauth-provider.ts) | mcp signal |
| mcp | [packages/devtools/src/lib/mcp/client.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/mcp/client.ts) | mcp signal |
| mcp | [packages/devtools/src/lib/mcp/index.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/mcp/index.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/alpic-ai__skybridge/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills/skybridge/SKILL.md](../../../../sources/alpic-ai__skybridge/skills/skybridge/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/chatgpt-app-builder/SKILL.md](../../../../sources/alpic-ai__skybridge/skills/chatgpt-app-builder/SKILL.md) | agentRuntime signal |
| entrypoints | [packages/devtools/src/App.tsx](../../../../sources/alpic-ai__skybridge/packages/devtools/src/App.tsx) | entrypoints signal |
| entrypoints | [packages/devtools/src/index.css](../../../../sources/alpic-ai__skybridge/packages/devtools/src/index.css) | entrypoints signal |
| entrypoints | [packages/devtools/src/index.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/index.ts) | entrypoints signal |
| entrypoints | [packages/devtools/src/main.tsx](../../../../sources/alpic-ai__skybridge/packages/devtools/src/main.tsx) | entrypoints signal |
| instruction | [packages/create-skybridge/templates/demo/AGENTS.md](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/demo/AGENTS.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 47 | [packages/devtools/src/App.tsx](../../../../sources/alpic-ai__skybridge/packages/devtools/src/App.tsx)<br>[packages/devtools/src/index.css](../../../../sources/alpic-ai__skybridge/packages/devtools/src/index.css)<br>[packages/devtools/src/index.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/index.ts)<br>[packages/devtools/src/main.tsx](../../../../sources/alpic-ai__skybridge/packages/devtools/src/main.tsx)<br>[packages/devtools/e2e/fixtures/server.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/fixtures/server.ts)<br>[packages/create-skybridge/templates/demo/src/index.css](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/demo/src/index.css)<br>[packages/create-skybridge/templates/demo/src/server.ts](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/demo/src/server.ts)<br>[packages/create-skybridge/templates/blank/src/server.ts](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/blank/src/server.ts) |
| agentRuntime | 96 | [AGENTS.md](../../../../sources/alpic-ai__skybridge/AGENTS.md)<br>[skills/skybridge/SKILL.md](../../../../sources/alpic-ai__skybridge/skills/skybridge/SKILL.md)<br>[skills/mcp-app-builder/SKILL.md](../../../../sources/alpic-ai__skybridge/skills/mcp-app-builder/SKILL.md)<br>[skills/chatgpt-app-builder/SKILL.md](../../../../sources/alpic-ai__skybridge/skills/chatgpt-app-builder/SKILL.md)<br>[skills/chatgpt-app-builder/references/architecture.md](../../../../sources/alpic-ai__skybridge/skills/chatgpt-app-builder/references/architecture.md)<br>[skills/chatgpt-app-builder/references/copy-template.md](../../../../sources/alpic-ai__skybridge/skills/chatgpt-app-builder/references/copy-template.md)<br>[skills/chatgpt-app-builder/references/csp.md](../../../../sources/alpic-ai__skybridge/skills/chatgpt-app-builder/references/csp.md)<br>[skills/chatgpt-app-builder/references/deploy.md](../../../../sources/alpic-ai__skybridge/skills/chatgpt-app-builder/references/deploy.md) |
| mcp | 16 | [skills/mcp-app-builder/SKILL.md](../../../../sources/alpic-ai__skybridge/skills/mcp-app-builder/SKILL.md)<br>[packages/devtools/src/lib/mcp/browser-oauth-provider.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/mcp/browser-oauth-provider.ts)<br>[packages/devtools/src/lib/mcp/client.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/mcp/client.ts)<br>[packages/devtools/src/lib/mcp/index.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/mcp/index.ts)<br>[packages/devtools/src/lib/mcp/webmcp.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/mcp/webmcp.ts)<br>[packages/core/src/web/bridges/mcp-app/adaptor.ts](../../../../sources/alpic-ai__skybridge/packages/core/src/web/bridges/mcp-app/adaptor.ts)<br>[packages/core/src/web/bridges/mcp-app/bridge.ts](../../../../sources/alpic-ai__skybridge/packages/core/src/web/bridges/mcp-app/bridge.ts)<br>[packages/core/src/web/bridges/mcp-app/index.ts](../../../../sources/alpic-ai__skybridge/packages/core/src/web/bridges/mcp-app/index.ts) |
| retrieval | 39 | [packages/devtools/index.html](../../../../sources/alpic-ai__skybridge/packages/devtools/index.html)<br>[packages/devtools/src/index.css](../../../../sources/alpic-ai__skybridge/packages/devtools/src/index.css)<br>[packages/devtools/src/index.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/index.ts)<br>[packages/devtools/src/lib/mcp/index.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/mcp/index.ts)<br>[packages/devtools/src/components/layout/tools-list/index.tsx](../../../../sources/alpic-ai__skybridge/packages/devtools/src/components/layout/tools-list/index.tsx)<br>[packages/devtools/src/components/layout/tools-list/form/index.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/components/layout/tools-list/form/index.ts)<br>[packages/devtools/src/components/layout/tool-panel/index.tsx](../../../../sources/alpic-ai__skybridge/packages/devtools/src/components/layout/tool-panel/index.tsx)<br>[packages/devtools/src/components/layout/tool-panel/view/index.tsx](../../../../sources/alpic-ai__skybridge/packages/devtools/src/components/layout/tool-panel/view/index.tsx) |
| spec | 6 | [skills/chatgpt-app-builder/references/architecture.md](../../../../sources/alpic-ai__skybridge/skills/chatgpt-app-builder/references/architecture.md)<br>[skills/chatgpt-app-builder/evals/architecture.json](../../../../sources/alpic-ai__skybridge/skills/chatgpt-app-builder/evals/architecture.json)<br>[packages/devtools/e2e/tests/auth.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/auth.spec.ts)<br>[packages/devtools/e2e/tests/every-input-type.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/every-input-type.spec.ts)<br>[packages/devtools/e2e/tests/mixed-auth.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/mixed-auth.spec.ts)<br>[packages/devtools/e2e/tests/smoke.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/smoke.spec.ts) |
| eval | 51 | [packages/devtools/e2e/tests/auth.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/auth.spec.ts)<br>[packages/devtools/e2e/tests/every-input-type.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/every-input-type.spec.ts)<br>[packages/devtools/e2e/tests/mixed-auth.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/mixed-auth.spec.ts)<br>[packages/devtools/e2e/tests/smoke.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/smoke.spec.ts)<br>[packages/create-skybridge/src/index.test.ts](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/src/index.test.ts)<br>[packages/core/src/web/create-store.test.ts](../../../../sources/alpic-ai__skybridge/packages/core/src/web/create-store.test.ts)<br>[packages/core/src/web/data-llm.test.tsx](../../../../sources/alpic-ai__skybridge/packages/core/src/web/data-llm.test.tsx)<br>[packages/core/src/web/generate-helpers.test-d.ts](../../../../sources/alpic-ai__skybridge/packages/core/src/web/generate-helpers.test-d.ts) |
| security | 72 | [SECURITY.md](../../../../sources/alpic-ai__skybridge/SECURITY.md)<br>[skills/chatgpt-app-builder/references/oauth.md](../../../../sources/alpic-ai__skybridge/skills/chatgpt-app-builder/references/oauth.md)<br>[packages/devtools/src/lib/auth-store.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/auth-store.ts)<br>[packages/devtools/src/lib/mcp/browser-oauth-provider.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/mcp/browser-oauth-provider.ts)<br>[packages/devtools/e2e/tests/auth.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/auth.spec.ts)<br>[packages/devtools/e2e/tests/mixed-auth.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/mixed-auth.spec.ts)<br>[packages/devtools/e2e/fixtures/mock-auth-server.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/fixtures/mock-auth-server.ts)<br>[packages/devtools/e2e/fixtures/seed-auth.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/fixtures/seed-auth.ts) |
| ci | 4 | [.github/workflows/ci.yml](../../../../sources/alpic-ai__skybridge/.github/workflows/ci.yml)<br>[.github/workflows/deploy-infra.yml](../../../../sources/alpic-ai__skybridge/.github/workflows/deploy-infra.yml)<br>[.github/workflows/deploy-landing.yml](../../../../sources/alpic-ai__skybridge/.github/workflows/deploy-landing.yml)<br>[.github/workflows/publish.yml](../../../../sources/alpic-ai__skybridge/.github/workflows/publish.yml) |
| container | 2 | [packages/create-skybridge/templates/demo/Dockerfile](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/demo/Dockerfile)<br>[packages/create-skybridge/templates/blank/Dockerfile](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/blank/Dockerfile) |
| instruction | 5 | [AGENTS.md](../../../../sources/alpic-ai__skybridge/AGENTS.md)<br>[packages/create-skybridge/templates/demo/AGENTS.md](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/demo/AGENTS.md)<br>[packages/create-skybridge/templates/blank/AGENTS.md](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/blank/AGENTS.md)<br>[landing/CLAUDE.md](../../../../sources/alpic-ai__skybridge/landing/CLAUDE.md)<br>[examples/investigation-game/AGENTS.md](../../../../sources/alpic-ai__skybridge/examples/investigation-game/AGENTS.md) |
| docs | 136 | [README.md](../../../../sources/alpic-ai__skybridge/README.md)<br>[skills/chatgpt-app-builder/evals/README.md](../../../../sources/alpic-ai__skybridge/skills/chatgpt-app-builder/evals/README.md)<br>[packages/create-skybridge/templates/demo/README.md](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/demo/README.md)<br>[packages/create-skybridge/templates/blank/README.md](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/blank/README.md)<br>[examples/times-up/README.md](../../../../sources/alpic-ai__skybridge/examples/times-up/README.md)<br>[examples/supabase-triplog/README.md](../../../../sources/alpic-ai__skybridge/examples/supabase-triplog/README.md)<br>[examples/productivity/README.md](../../../../sources/alpic-ai__skybridge/examples/productivity/README.md)<br>[examples/manifest-ui/README.md](../../../../sources/alpic-ai__skybridge/examples/manifest-ui/README.md) |
| config | 48 | [package.json](../../../../sources/alpic-ai__skybridge/package.json)<br>[pnpm-workspace.yaml](../../../../sources/alpic-ai__skybridge/pnpm-workspace.yaml)<br>[packages/devtools/package.json](../../../../sources/alpic-ai__skybridge/packages/devtools/package.json)<br>[packages/devtools/tsconfig.json](../../../../sources/alpic-ai__skybridge/packages/devtools/tsconfig.json)<br>[packages/devtools/e2e/tsconfig.json](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tsconfig.json)<br>[packages/create-skybridge/package.json](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/package.json)<br>[packages/create-skybridge/tsconfig.json](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/tsconfig.json)<br>[packages/create-skybridge/templates/demo/package.json](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/demo/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 51 | [packages/devtools/e2e/tests/auth.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/auth.spec.ts)<br>[packages/devtools/e2e/tests/every-input-type.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/every-input-type.spec.ts)<br>[packages/devtools/e2e/tests/mixed-auth.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/mixed-auth.spec.ts)<br>[packages/devtools/e2e/tests/smoke.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/smoke.spec.ts)<br>[packages/create-skybridge/src/index.test.ts](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/src/index.test.ts)<br>[packages/core/src/web/create-store.test.ts](../../../../sources/alpic-ai__skybridge/packages/core/src/web/create-store.test.ts) |
| CI workflow | 4 | [.github/workflows/ci.yml](../../../../sources/alpic-ai__skybridge/.github/workflows/ci.yml)<br>[.github/workflows/deploy-infra.yml](../../../../sources/alpic-ai__skybridge/.github/workflows/deploy-infra.yml)<br>[.github/workflows/deploy-landing.yml](../../../../sources/alpic-ai__skybridge/.github/workflows/deploy-landing.yml)<br>[.github/workflows/publish.yml](../../../../sources/alpic-ai__skybridge/.github/workflows/publish.yml) |
| 컨테이너/배포 | 2 | [packages/create-skybridge/templates/demo/Dockerfile](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/demo/Dockerfile)<br>[packages/create-skybridge/templates/blank/Dockerfile](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/blank/Dockerfile) |
| 보안/정책 | 72 | [SECURITY.md](../../../../sources/alpic-ai__skybridge/SECURITY.md)<br>[skills/chatgpt-app-builder/references/oauth.md](../../../../sources/alpic-ai__skybridge/skills/chatgpt-app-builder/references/oauth.md)<br>[packages/devtools/src/lib/auth-store.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/auth-store.ts)<br>[packages/devtools/src/lib/mcp/browser-oauth-provider.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/mcp/browser-oauth-provider.ts)<br>[packages/devtools/e2e/tests/auth.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/auth.spec.ts)<br>[packages/devtools/e2e/tests/mixed-auth.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/mixed-auth.spec.ts) |
| 에이전트 지시문 | 5 | [AGENTS.md](../../../../sources/alpic-ai__skybridge/AGENTS.md)<br>[packages/create-skybridge/templates/demo/AGENTS.md](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/demo/AGENTS.md)<br>[packages/create-skybridge/templates/blank/AGENTS.md](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/blank/AGENTS.md)<br>[landing/CLAUDE.md](../../../../sources/alpic-ai__skybridge/landing/CLAUDE.md)<br>[examples/investigation-game/AGENTS.md](../../../../sources/alpic-ai__skybridge/examples/investigation-game/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `skills/mcp-app-builder/SKILL.md`, `packages/devtools/src/lib/mcp/browser-oauth-provider.ts`, `packages/devtools/src/lib/mcp/client.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/devtools/src/App.tsx`, `packages/devtools/src/index.css`, `packages/devtools/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `skills/skybridge/SKILL.md`, `skills/mcp-app-builder/SKILL.md`.
4. retrieval/memory/indexing 확인: `packages/devtools/index.html`, `packages/devtools/src/index.css`, `packages/devtools/src/index.ts`.
5. test/eval 파일로 동작 검증: `packages/devtools/e2e/tests/auth.spec.ts`, `packages/devtools/e2e/tests/every-input-type.spec.ts`, `packages/devtools/e2e/tests/mixed-auth.spec.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Skybridge is a full stack TypeScript framework for MCP Apps and ChatGPT Apps. Type safe. React powered. Platform agnosti. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
