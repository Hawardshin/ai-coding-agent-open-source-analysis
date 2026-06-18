# markus-global/markus 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Not another agent framework — an operating system for AI workforces. Autonomous agents coordinate, remember across sessions, review each other's work, and deliver while you sleep. One command. Zero dependencies. Manage your AI company from your phone.

## 요약

- 조사 단위: `sources/markus-global__markus` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 731 files, 123 directories, depth score 125, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/core/test/mcp-client.test.ts, packages/core/src/tools/markus-browser-mcp.ts, packages/core/src/tools/mcp-client.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | markus-global/markus |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 161 |
| Forks | 4 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/markus-global__markus](../../../../sources/markus-global__markus) |
| 기존 보고서 | [reports/global-trending/repositories/markus-global__markus.md](../../../global-trending/repositories/markus-global__markus.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 731 / 123 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, deploy, docs, examples, packages, scripts, templates |
| 상위 확장자 | .ts: 452, .md: 96, .json: 85, .tsx: 54, .yaml: 7, .png: 6, .sh: 6, .mjs: 4, .yml: 4, (none): 4, .js: 3, .example: 2 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/org-manager | packages workspace | 32 |
| packages/core | packages workspace | 29 |
| packages/web-ui | packages workspace | 19 |
| packages/shared | packages workspace | 18 |
| docs | documentation surface | 17 |
| packages/storage | packages workspace | 9 |
| packages/cli | packages workspace | 8 |
| packages/gui | packages workspace | 7 |
| packages/a2a | packages workspace | 6 |
| packages/comms | packages workspace | 6 |
| packages/remote | packages workspace | 4 |
| packages/chrome-extension | packages workspace | 2 |
| .github | ci surface | 1 |
| deploy | deployment surface | 1 |
| examples | top-level component | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |
| templates | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | pnpm -r build |
| serve-dev | package.json | dev | pnpm build && concurrently -n api,ui -c blue,green "node packages/cli/dist/index.js start" "node scripts/wait-for-api.mjs && pnpm --filter @markus/web-ui dev" |
| serve-dev | package.json | dev:api | node packages/cli/dist/index.js start |
| serve-dev | package.json | dev:ui | pnpm --filter @markus/web-ui dev |
| serve-dev | package.json | dev:watch | pnpm build && concurrently -n tsc,api,ui -c gray,blue,green "pnpm -r --parallel --filter=!@markus/web-ui dev" "node packages/cli/dist/index.js start" "node scripts/wait-for-api.mjs && pnpm --filter @markus/web-ui dev" |
| quality | package.json | lint | eslint packages/*/src/ |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | test:coverage | vitest run --coverage |
| quality | package.json | typecheck | tsc -b && tsc --noEmit -p packages/web-ui |
| test | package.json | quality | npm run typecheck && npm run test |
| utility | package.json | clean | pnpm -r clean |
| test | package.json | test:gui | tsx test-gui-integration.ts |
| utility | package.json | example:gui | tsx examples/gui-automation-workflow.ts |
| build | package.json | markus | node packages/cli/dist/index.js |
| build | package.json | build:publish | pnpm build && pnpm --filter @markus/web-ui build && pnpm --filter @markus-global/cli build:bundle |


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
| mcp | [packages/core/test/mcp-client.test.ts](../../../../sources/markus-global__markus/packages/core/test/mcp-client.test.ts) | mcp signal |
| mcp | [packages/core/src/tools/markus-browser-mcp.ts](../../../../sources/markus-global__markus/packages/core/src/tools/markus-browser-mcp.ts) | mcp signal |
| mcp | [packages/core/src/tools/mcp-client.ts](../../../../sources/markus-global__markus/packages/core/src/tools/mcp-client.ts) | mcp signal |
| agentRuntime | [templates/skills/workflow-building/skill.json](../../../../sources/markus-global__markus/templates/skills/workflow-building/skill.json) | agentRuntime signal |
| agentRuntime | [templates/skills/workflow-building/SKILL.md](../../../../sources/markus-global__markus/templates/skills/workflow-building/SKILL.md) | agentRuntime signal |
| agentRuntime | [templates/skills/team-building/skill.json](../../../../sources/markus-global__markus/templates/skills/team-building/skill.json) | agentRuntime signal |
| agentRuntime | [templates/skills/team-building/SKILL.md](../../../../sources/markus-global__markus/templates/skills/team-building/SKILL.md) | agentRuntime signal |
| entrypoints | [templates/skills/markus-hub-connector/server.mjs](../../../../sources/markus-global__markus/templates/skills/markus-hub-connector/server.mjs) | entrypoints signal |
| entrypoints | [packages/web-ui/src/App.tsx](../../../../sources/markus-global__markus/packages/web-ui/src/App.tsx) | entrypoints signal |
| entrypoints | [packages/web-ui/src/index.css](../../../../sources/markus-global__markus/packages/web-ui/src/index.css) | entrypoints signal |
| entrypoints | [packages/web-ui/src/main.tsx](../../../../sources/markus-global__markus/packages/web-ui/src/main.tsx) | entrypoints signal |
| instruction | [templates/openclaw-markus-skill/AGENTS.md](../../../../sources/markus-global__markus/templates/openclaw-markus-skill/AGENTS.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 13 | [templates/skills/markus-hub-connector/server.mjs](../../../../sources/markus-global__markus/templates/skills/markus-hub-connector/server.mjs)<br>[packages/web-ui/src/App.tsx](../../../../sources/markus-global__markus/packages/web-ui/src/App.tsx)<br>[packages/web-ui/src/index.css](../../../../sources/markus-global__markus/packages/web-ui/src/index.css)<br>[packages/web-ui/src/main.tsx](../../../../sources/markus-global__markus/packages/web-ui/src/main.tsx)<br>[packages/storage/src/index.ts](../../../../sources/markus-global__markus/packages/storage/src/index.ts)<br>[packages/shared/src/index.ts](../../../../sources/markus-global__markus/packages/shared/src/index.ts)<br>[packages/remote/src/index.ts](../../../../sources/markus-global__markus/packages/remote/src/index.ts)<br>[packages/org-manager/src/index.ts](../../../../sources/markus-global__markus/packages/org-manager/src/index.ts) |
| agentRuntime | 138 | [templates/skills/workflow-building/skill.json](../../../../sources/markus-global__markus/templates/skills/workflow-building/skill.json)<br>[templates/skills/workflow-building/SKILL.md](../../../../sources/markus-global__markus/templates/skills/workflow-building/SKILL.md)<br>[templates/skills/team-building/skill.json](../../../../sources/markus-global__markus/templates/skills/team-building/skill.json)<br>[templates/skills/team-building/SKILL.md](../../../../sources/markus-global__markus/templates/skills/team-building/SKILL.md)<br>[templates/skills/skill-building/skill.json](../../../../sources/markus-global__markus/templates/skills/skill-building/skill.json)<br>[templates/skills/skill-building/SKILL.md](../../../../sources/markus-global__markus/templates/skills/skill-building/SKILL.md)<br>[templates/skills/self-evolution/skill.json](../../../../sources/markus-global__markus/templates/skills/self-evolution/skill.json)<br>[templates/skills/self-evolution/SKILL.md](../../../../sources/markus-global__markus/templates/skills/self-evolution/SKILL.md) |
| mcp | 3 | [packages/core/test/mcp-client.test.ts](../../../../sources/markus-global__markus/packages/core/test/mcp-client.test.ts)<br>[packages/core/src/tools/markus-browser-mcp.ts](../../../../sources/markus-global__markus/packages/core/src/tools/markus-browser-mcp.ts)<br>[packages/core/src/tools/mcp-client.ts](../../../../sources/markus-global__markus/packages/core/src/tools/mcp-client.ts) |
| retrieval | 37 | [packages/web-ui/index.html](../../../../sources/markus-global__markus/packages/web-ui/index.html)<br>[packages/web-ui/src/index.css](../../../../sources/markus-global__markus/packages/web-ui/src/index.css)<br>[packages/web-ui/src/transport/index.ts](../../../../sources/markus-global__markus/packages/web-ui/src/transport/index.ts)<br>[packages/web-ui/src/showcase/index.ts](../../../../sources/markus-global__markus/packages/web-ui/src/showcase/index.ts)<br>[packages/web-ui/src/i18n/index.ts](../../../../sources/markus-global__markus/packages/web-ui/src/i18n/index.ts)<br>[packages/storage/src/index.ts](../../../../sources/markus-global__markus/packages/storage/src/index.ts)<br>[packages/shared/src/index.ts](../../../../sources/markus-global__markus/packages/shared/src/index.ts)<br>[packages/remote/src/index.ts](../../../../sources/markus-global__markus/packages/remote/src/index.ts) |
| spec | 8 | [packages/shared/src/types/requirement.ts](../../../../sources/markus-global__markus/packages/shared/src/types/requirement.ts)<br>[packages/org-manager/test/requirement-service.test.ts](../../../../sources/markus-global__markus/packages/org-manager/test/requirement-service.test.ts)<br>[packages/org-manager/src/requirement-service.ts](../../../../sources/markus-global__markus/packages/org-manager/src/requirement-service.ts)<br>[packages/gui/ARCHITECTURE.md](../../../../sources/markus-global__markus/packages/gui/ARCHITECTURE.md)<br>[packages/a2a/docs/structured-message-design.md](../../../../sources/markus-global__markus/packages/a2a/docs/structured-message-design.md)<br>[docs/ARCHITECTURE.md](../../../../sources/markus-global__markus/docs/ARCHITECTURE.md)<br>[docs/COGNITIVE-ARCHITECTURE.md](../../../../sources/markus-global__markus/docs/COGNITIVE-ARCHITECTURE.md)<br>[docs/model-routing-architecture.md](../../../../sources/markus-global__markus/docs/model-routing-architecture.md) |
| eval | 209 | [run-parser-tests.ts](../../../../sources/markus-global__markus/run-parser-tests.ts)<br>[TEST-ISSUES.md](../../../../sources/markus-global__markus/TEST-ISSUES.md)<br>[packages/storage/test/edge-cases.test.ts](../../../../sources/markus-global__markus/packages/storage/test/edge-cases.test.ts)<br>[packages/storage/test/sqlite-comprehensive.test.ts](../../../../sources/markus-global__markus/packages/storage/test/sqlite-comprehensive.test.ts)<br>[packages/storage/test/sqlite-repos.test.ts](../../../../sources/markus-global__markus/packages/storage/test/sqlite-repos.test.ts)<br>[packages/storage/test/sqlite-storage.test.ts](../../../../sources/markus-global__markus/packages/storage/test/sqlite-storage.test.ts)<br>[packages/storage/test/status-transitions.test.ts](../../../../sources/markus-global__markus/packages/storage/test/status-transitions.test.ts)<br>[packages/shared/test/config.test.ts](../../../../sources/markus-global__markus/packages/shared/test/config.test.ts) |
| security | 13 | [packages/web-ui/src/locales/zh-CN/auth.json](../../../../sources/markus-global__markus/packages/web-ui/src/locales/zh-CN/auth.json)<br>[packages/web-ui/src/locales/en/auth.json](../../../../sources/markus-global__markus/packages/web-ui/src/locales/en/auth.json)<br>[packages/org-manager/test/api-keys-auth.test.ts](../../../../sources/markus-global__markus/packages/org-manager/test/api-keys-auth.test.ts)<br>[packages/org-manager/test/audit-service.test.ts](../../../../sources/markus-global__markus/packages/org-manager/test/audit-service.test.ts)<br>[packages/org-manager/src/audit-service.ts](../../../../sources/markus-global__markus/packages/org-manager/src/audit-service.ts)<br>[packages/core/test/llm-auth-profiles.test.ts](../../../../sources/markus-global__markus/packages/core/test/llm-auth-profiles.test.ts)<br>[packages/core/test/llm-oauth-manager.test.ts](../../../../sources/markus-global__markus/packages/core/test/llm-oauth-manager.test.ts)<br>[packages/core/test/security.test.ts](../../../../sources/markus-global__markus/packages/core/test/security.test.ts) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/markus-global__markus/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/markus-global__markus/.github/workflows/publish.yml) |
| container | 8 | [Dockerfile](../../../../sources/markus-global__markus/Dockerfile)<br>[packages/gui/docker-compose.yml](../../../../sources/markus-global__markus/packages/gui/docker-compose.yml)<br>[deploy/.env.example](../../../../sources/markus-global__markus/deploy/.env.example)<br>[deploy/docker-compose.yml](../../../../sources/markus-global__markus/deploy/docker-compose.yml)<br>[deploy/k8s/deployment.yaml](../../../../sources/markus-global__markus/deploy/k8s/deployment.yaml)<br>[deploy/k8s/namespace.yaml](../../../../sources/markus-global__markus/deploy/k8s/namespace.yaml)<br>[deploy/k8s/secrets.yaml](../../../../sources/markus-global__markus/deploy/k8s/secrets.yaml)<br>[deploy/k8s/service.yaml](../../../../sources/markus-global__markus/deploy/k8s/service.yaml) |
| instruction | 1 | [templates/openclaw-markus-skill/AGENTS.md](../../../../sources/markus-global__markus/templates/openclaw-markus-skill/AGENTS.md) |
| docs | 17 | [README.md](../../../../sources/markus-global__markus/README.md)<br>[README.zh-CN.md](../../../../sources/markus-global__markus/README.zh-CN.md)<br>[packages/gui/README.md](../../../../sources/markus-global__markus/packages/gui/README.md)<br>[packages/cli/README.md](../../../../sources/markus-global__markus/packages/cli/README.md)<br>[packages/a2a/docs/structured-message-design.md](../../../../sources/markus-global__markus/packages/a2a/docs/structured-message-design.md)<br>[docs/API.md](../../../../sources/markus-global__markus/docs/API.md)<br>[docs/ARCHITECTURE.md](../../../../sources/markus-global__markus/docs/ARCHITECTURE.md)<br>[docs/COGNITIVE-ARCHITECTURE.md](../../../../sources/markus-global__markus/docs/COGNITIVE-ARCHITECTURE.md) |
| config | 25 | [package.json](../../../../sources/markus-global__markus/package.json)<br>[pnpm-workspace.yaml](../../../../sources/markus-global__markus/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/markus-global__markus/tsconfig.json)<br>[packages/web-ui/package.json](../../../../sources/markus-global__markus/packages/web-ui/package.json)<br>[packages/web-ui/tsconfig.json](../../../../sources/markus-global__markus/packages/web-ui/tsconfig.json)<br>[packages/storage/package.json](../../../../sources/markus-global__markus/packages/storage/package.json)<br>[packages/storage/tsconfig.json](../../../../sources/markus-global__markus/packages/storage/tsconfig.json)<br>[packages/shared/package.json](../../../../sources/markus-global__markus/packages/shared/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 209 | [run-parser-tests.ts](../../../../sources/markus-global__markus/run-parser-tests.ts)<br>[TEST-ISSUES.md](../../../../sources/markus-global__markus/TEST-ISSUES.md)<br>[packages/storage/test/edge-cases.test.ts](../../../../sources/markus-global__markus/packages/storage/test/edge-cases.test.ts)<br>[packages/storage/test/sqlite-comprehensive.test.ts](../../../../sources/markus-global__markus/packages/storage/test/sqlite-comprehensive.test.ts)<br>[packages/storage/test/sqlite-repos.test.ts](../../../../sources/markus-global__markus/packages/storage/test/sqlite-repos.test.ts)<br>[packages/storage/test/sqlite-storage.test.ts](../../../../sources/markus-global__markus/packages/storage/test/sqlite-storage.test.ts) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/markus-global__markus/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/markus-global__markus/.github/workflows/publish.yml) |
| 컨테이너/배포 | 8 | [Dockerfile](../../../../sources/markus-global__markus/Dockerfile)<br>[packages/gui/docker-compose.yml](../../../../sources/markus-global__markus/packages/gui/docker-compose.yml)<br>[deploy/.env.example](../../../../sources/markus-global__markus/deploy/.env.example)<br>[deploy/docker-compose.yml](../../../../sources/markus-global__markus/deploy/docker-compose.yml)<br>[deploy/k8s/deployment.yaml](../../../../sources/markus-global__markus/deploy/k8s/deployment.yaml)<br>[deploy/k8s/namespace.yaml](../../../../sources/markus-global__markus/deploy/k8s/namespace.yaml) |
| 보안/정책 | 13 | [packages/web-ui/src/locales/zh-CN/auth.json](../../../../sources/markus-global__markus/packages/web-ui/src/locales/zh-CN/auth.json)<br>[packages/web-ui/src/locales/en/auth.json](../../../../sources/markus-global__markus/packages/web-ui/src/locales/en/auth.json)<br>[packages/org-manager/test/api-keys-auth.test.ts](../../../../sources/markus-global__markus/packages/org-manager/test/api-keys-auth.test.ts)<br>[packages/org-manager/test/audit-service.test.ts](../../../../sources/markus-global__markus/packages/org-manager/test/audit-service.test.ts)<br>[packages/org-manager/src/audit-service.ts](../../../../sources/markus-global__markus/packages/org-manager/src/audit-service.ts)<br>[packages/core/test/llm-auth-profiles.test.ts](../../../../sources/markus-global__markus/packages/core/test/llm-auth-profiles.test.ts) |
| 에이전트 지시문 | 1 | [templates/openclaw-markus-skill/AGENTS.md](../../../../sources/markus-global__markus/templates/openclaw-markus-skill/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/core/test/mcp-client.test.ts`, `packages/core/src/tools/markus-browser-mcp.ts`, `packages/core/src/tools/mcp-client.ts`.
2. entrypoint를 따라 실행 흐름 확인: `templates/skills/markus-hub-connector/server.mjs`, `packages/web-ui/src/App.tsx`, `packages/web-ui/src/index.css`.
3. agent/tool runtime 매핑: `templates/skills/workflow-building/skill.json`, `templates/skills/workflow-building/SKILL.md`, `templates/skills/team-building/skill.json`.
4. retrieval/memory/indexing 확인: `packages/web-ui/index.html`, `packages/web-ui/src/index.css`, `packages/web-ui/src/transport/index.ts`.
5. test/eval 파일로 동작 검증: `run-parser-tests.ts`, `TEST-ISSUES.md`, `packages/storage/test/edge-cases.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Not another agent framework — an operating system for AI workforces. Autonomous agents coordinate, remember across sessi. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
