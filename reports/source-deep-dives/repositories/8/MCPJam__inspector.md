# MCPJam/inspector 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Testing and evaluation platform to chat, inspect, and debug MCP servers, MCP apps, and ChatGPT apps.

## 요약

- 조사 단위: `sources/MCPJam__inspector` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,723 files, 366 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 eval=widget-react/src/__tests__/widget-file-messages.test.ts, widget-react/src/__tests__/widget-host-context.test.tsx, sdk/tsconfig.test.json이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 품질/평가 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | MCPJam/inspector |
| 주제 | 평가/관측/품질 / 평가/관측/품질 |
| Region | global |
| Language | TypeScript |
| Stars | 2016 |
| Forks | 239 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/MCPJam__inspector](../../../../sources/MCPJam__inspector) |
| 기존 보고서 | [reports/global-trending/repositories/MCPJam__inspector.md](../../../global-trending/repositories/MCPJam__inspector.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2723 / 366 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .changeset, .github, .release-plan, .worktrees, chat-ui, cli, design-explorations, design-system, docs, examples, mcp, mcpjam-inspector, scripts, sdk, skills, soundcheck, widget-react |
| 상위 확장자 | .ts: 1498, .tsx: 841, .png: 70, .mdx: 67, .json: 61, .md: 44, .mjs: 26, (none): 26, .css: 17, .yml: 17, .svg: 16, .html: 9 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 31 |
| examples/mcp-apps | examples workspace | 19 |
| examples/evals | examples workspace | 6 |
| examples/chatgpt-apps | examples workspace | 4 |
| examples/conformance | examples workspace | 3 |
| .github | ci surface | 1 |
| chat-ui | top-level component | 1 |
| cli | top-level component | 1 |
| design-explorations | top-level component | 1 |
| design-system | top-level component | 1 |
| examples | top-level component | 1 |
| examples/mcp-servers | examples workspace | 1 |
| mcp | top-level component | 1 |
| mcpjam-inspector | top-level component | 1 |
| scripts | top-level component | 1 |
| sdk | top-level component | 1 |
| skills | top-level component | 1 |
| soundcheck | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| test | package.json | build | npm run build -w @mcpjam/sdk && npm run build -w @mcpjam/cli && npm run build -w @mcpjam/chat-ui && npm run build -w @mcpjam/widget-react && npm run build -w @mcpjam/inspector |
| build | package.json | build:packages | npm run build -w @mcpjam/sdk && npm run build -w @mcpjam/cli |
| test | package.json | build:inspector | npm run build -w @mcpjam/inspector |
| build | package.json | typecheck | npm run typecheck -w @mcpjam/sdk && npm run build -w @mcpjam/sdk && npm run typecheck -w @mcpjam/cli && npm run typecheck -w @mcpjam/design-system && npm run typecheck -w @mcpjam/chat-ui && npm run typecheck -w @mcpjam/w |
| test | package.json | check:mcp-v1-runtime-imports | ! rg -n '@modelcontextprotocol/sdk' sdk/src cli/src mcpjam-inspector/client/src mcpjam-inspector/server -g '!**/dist/**' -g '!**/*.bundled.ts' -g '!**/*.generated.ts' |
| quality | package.json | check:platform-runtime-safety | ! rg -n '["\x27]node:\|process\.env' sdk/src/platform |
| test | package.json | check:platform-runtime-safety:dist | test -d sdk/dist/platform && ! rg -n '["\x27]node:\|process\.env' sdk/dist/platform -g '!*.map' |
| test | package.json | test | npm run check:mcp-v1-runtime-imports && npm run check:platform-runtime-safety && npm run build -w @mcpjam/sdk && npm run check:platform-runtime-safety:dist && npm run test:parallel && npm run test:packaging -w @mcpjam/sd |
| test | package.json | test:parallel | concurrently -n sdk,cli,design,chatui,widget,inspector,mcp -c blue,green,yellow,white,red,magenta,cyan --kill-others-on-fail "npm run test -w @mcpjam/sdk" "npm run test -w @mcpjam/cli" "npm run test -w @mcpjam/design-sys |
| test | package.json | test:ordered | npm run test -w @mcpjam/sdk && npm run test:packaging -w @mcpjam/sdk && npm run test -w @mcpjam/cli && npm run test -w @mcpjam/design-system && npm run test -w @mcpjam/chat-ui && npm run test -w @mcpjam/widget-react && n |
| test | package.json | verify | npm run typecheck && npm run test && npm run build:inspector |
| utility | package.json | docs:sync-tokens | node scripts/sync-docs-tokens.mjs |
| quality | package.json | docs:check-tokens | node scripts/sync-docs-tokens.mjs --check |
| build | package.json | release:status | changeset status |
| build | package.json | release:version | changeset version |
| build | package.json | release:publish | changeset publish |


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
| eval | [widget-react/src/__tests__/widget-file-messages.test.ts](../../../../sources/MCPJam__inspector/widget-react/src/__tests__/widget-file-messages.test.ts) | eval signal |
| eval | [widget-react/src/__tests__/widget-host-context.test.tsx](../../../../sources/MCPJam__inspector/widget-react/src/__tests__/widget-host-context.test.tsx) | eval signal |
| eval | [sdk/tsconfig.test.json](../../../../sources/MCPJam__inspector/sdk/tsconfig.test.json) | eval signal |
| eval | [sdk/tests/artifact-parsers.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/artifact-parsers.test.ts) | eval signal |
| entrypoints | [widget-react/src/index.ts](../../../../sources/MCPJam__inspector/widget-react/src/index.ts) | entrypoints signal |
| entrypoints | [sdk/src/index.ts](../../../../sources/MCPJam__inspector/sdk/src/index.ts) | entrypoints signal |
| entrypoints | [mcpjam-inspector/src/main.ts](../../../../sources/MCPJam__inspector/mcpjam-inspector/src/main.ts) | entrypoints signal |
| entrypoints | [mcpjam-inspector/client/src/App.tsx](../../../../sources/MCPJam__inspector/mcpjam-inspector/client/src/App.tsx) | entrypoints signal |
| config | [package.json](../../../../sources/MCPJam__inspector/package.json) | config signal |
| config | [widget-react/package.json](../../../../sources/MCPJam__inspector/widget-react/package.json) | config signal |
| config | [widget-react/tsconfig.json](../../../../sources/MCPJam__inspector/widget-react/tsconfig.json) | config signal |
| config | [soundcheck/package.json](../../../../sources/MCPJam__inspector/soundcheck/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 21 | [widget-react/src/index.ts](../../../../sources/MCPJam__inspector/widget-react/src/index.ts)<br>[sdk/src/index.ts](../../../../sources/MCPJam__inspector/sdk/src/index.ts)<br>[mcpjam-inspector/src/main.ts](../../../../sources/MCPJam__inspector/mcpjam-inspector/src/main.ts)<br>[mcpjam-inspector/client/src/App.tsx](../../../../sources/MCPJam__inspector/mcpjam-inspector/client/src/App.tsx)<br>[mcpjam-inspector/client/src/index.css](../../../../sources/MCPJam__inspector/mcpjam-inspector/client/src/index.css)<br>[mcpjam-inspector/client/src/main.tsx](../../../../sources/MCPJam__inspector/mcpjam-inspector/client/src/main.tsx)<br>[mcpjam-inspector/bin/start.js](../../../../sources/MCPJam__inspector/mcpjam-inspector/bin/start.js)<br>[mcp/src/index.ts](../../../../sources/MCPJam__inspector/mcp/src/index.ts) |
| agentRuntime | 244 | [widget-react/src/tool-result-utils.ts](../../../../sources/MCPJam__inspector/widget-react/src/tool-result-utils.ts)<br>[skills/mcp-inspector/SKILL.md](../../../../sources/MCPJam__inspector/skills/mcp-inspector/SKILL.md)<br>[skills/mcp-inspector/references/cli-surface-notes.md](../../../../sources/MCPJam__inspector/skills/mcp-inspector/references/cli-surface-notes.md)<br>[skills/mcp-inspector/references/mcp-2025-11-25-interpretation.md](../../../../sources/MCPJam__inspector/skills/mcp-inspector/references/mcp-2025-11-25-interpretation.md)<br>[skills/mcp-inspector/references/security-best-practices.md](../../../../sources/MCPJam__inspector/skills/mcp-inspector/references/security-best-practices.md)<br>[sdk/tests/sandbox-policy.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/sandbox-policy.test.ts)<br>[sdk/tests/tool-converters.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/tool-converters.test.ts)<br>[sdk/tests/tool-extraction.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/tool-extraction.test.ts) |
| mcp | 345 | [widget-react/src/mcp-apps-modal.tsx](../../../../sources/MCPJam__inspector/widget-react/src/mcp-apps-modal.tsx)<br>[widget-react/src/mcp-apps-renderer.tsx](../../../../sources/MCPJam__inspector/widget-react/src/mcp-apps-renderer.tsx)<br>[widget-react/src/mcp-apps-utils.ts](../../../../sources/MCPJam__inspector/widget-react/src/mcp-apps-utils.ts)<br>[soundcheck/src/components/mcp-deploy-status.tsx](../../../../sources/MCPJam__inspector/soundcheck/src/components/mcp-deploy-status.tsx)<br>[skills/mcp-inspector/SKILL.md](../../../../sources/MCPJam__inspector/skills/mcp-inspector/SKILL.md)<br>[skills/mcp-inspector/references/cli-surface-notes.md](../../../../sources/MCPJam__inspector/skills/mcp-inspector/references/cli-surface-notes.md)<br>[skills/mcp-inspector/references/mcp-2025-11-25-interpretation.md](../../../../sources/MCPJam__inspector/skills/mcp-inspector/references/mcp-2025-11-25-interpretation.md)<br>[skills/mcp-inspector/references/security-best-practices.md](../../../../sources/MCPJam__inspector/skills/mcp-inspector/references/security-best-practices.md) |
| retrieval | 43 | [widget-react/src/index.ts](../../../../sources/MCPJam__inspector/widget-react/src/index.ts)<br>[sdk/tests/mock-servers/index.ts](../../../../sources/MCPJam__inspector/sdk/tests/mock-servers/index.ts)<br>[sdk/src/index.ts](../../../../sources/MCPJam__inspector/sdk/src/index.ts)<br>[sdk/src/widget-runtime/index.ts](../../../../sources/MCPJam__inspector/sdk/src/widget-runtime/index.ts)<br>[sdk/src/predicates/index.ts](../../../../sources/MCPJam__inspector/sdk/src/predicates/index.ts)<br>[sdk/src/platform/index.ts](../../../../sources/MCPJam__inspector/sdk/src/platform/index.ts)<br>[sdk/src/oauth-conformance/index.ts](../../../../sources/MCPJam__inspector/sdk/src/oauth-conformance/index.ts)<br>[sdk/src/mcp-conformance/index.ts](../../../../sources/MCPJam__inspector/sdk/src/mcp-conformance/index.ts) |
| spec | 72 | [mcpjam-inspector/apps-spec.mdx](../../../../sources/MCPJam__inspector/mcpjam-inspector/apps-spec.mdx)<br>[mcpjam-inspector/e2e/nux.spec.ts](../../../../sources/MCPJam__inspector/mcpjam-inspector/e2e/nux.spec.ts)<br>[mcpjam-inspector/e2e/smoke.spec.ts](../../../../sources/MCPJam__inspector/mcpjam-inspector/e2e/smoke.spec.ts)<br>[mcpjam-inspector/client/src/components/chat-v2/thread/mcp-apps/widget-host.design.md](../../../../sources/MCPJam__inspector/mcpjam-inspector/client/src/components/chat-v2/thread/mcp-apps/widget-host.design.md)<br>[mcpjam-inspector/client/src/components/architecture-diagram/ArchAssetNode.tsx](../../../../sources/MCPJam__inspector/mcpjam-inspector/client/src/components/architecture-diagram/ArchAssetNode.tsx)<br>[mcpjam-inspector/client/src/components/architecture-diagram/ArchBlockNode.tsx](../../../../sources/MCPJam__inspector/mcpjam-inspector/client/src/components/architecture-diagram/ArchBlockNode.tsx)<br>[mcpjam-inspector/client/src/components/architecture-diagram/ArchConnectionEdge.tsx](../../../../sources/MCPJam__inspector/mcpjam-inspector/client/src/components/architecture-diagram/ArchConnectionEdge.tsx)<br>[mcpjam-inspector/client/src/components/architecture-diagram/archDiagramBuilder.ts](../../../../sources/MCPJam__inspector/mcpjam-inspector/client/src/components/architecture-diagram/archDiagramBuilder.ts) |
| eval | 848 | [widget-react/src/__tests__/widget-file-messages.test.ts](../../../../sources/MCPJam__inspector/widget-react/src/__tests__/widget-file-messages.test.ts)<br>[widget-react/src/__tests__/widget-host-context.test.tsx](../../../../sources/MCPJam__inspector/widget-react/src/__tests__/widget-host-context.test.tsx)<br>[sdk/tsconfig.test.json](../../../../sources/MCPJam__inspector/sdk/tsconfig.test.json)<br>[sdk/tests/artifact-parsers.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/artifact-parsers.test.ts)<br>[sdk/tests/browser-entry.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/browser-entry.test.ts)<br>[sdk/tests/compat-runtime-bundle-fresh.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/compat-runtime-bundle-fresh.test.ts)<br>[sdk/tests/conformance-reporting.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/conformance-reporting.test.ts)<br>[sdk/tests/errors.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/errors.test.ts) |
| security | 206 | [SECURITY.md](../../../../sources/MCPJam__inspector/SECURITY.md)<br>[skills/mcp-inspector/references/security-best-practices.md](../../../../sources/MCPJam__inspector/skills/mcp-inspector/references/security-best-practices.md)<br>[sdk/tests/host-config-policy.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/host-config-policy.test.ts)<br>[sdk/tests/oauth-login.probe-timeout.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/oauth-login.probe-timeout.test.ts)<br>[sdk/tests/oauth-login.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/oauth-login.test.ts)<br>[sdk/tests/oauth-proxy.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/oauth-proxy.test.ts)<br>[sdk/tests/refresh-token-auth.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/refresh-token-auth.test.ts)<br>[sdk/tests/sandbox-policy.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/sandbox-policy.test.ts) |
| ci | 16 | [.github/workflows/claude.yml](../../../../sources/MCPJam__inspector/.github/workflows/claude.yml)<br>[.github/workflows/deploy-mcp-prod.yml](../../../../sources/MCPJam__inspector/.github/workflows/deploy-mcp-prod.yml)<br>[.github/workflows/deploy-mcp-staging.yml](../../../../sources/MCPJam__inspector/.github/workflows/deploy-mcp-staging.yml)<br>[.github/workflows/deploy-soundcheck.yml](../../../../sources/MCPJam__inspector/.github/workflows/deploy-soundcheck.yml)<br>[.github/workflows/deploy-staging.yml](../../../../sources/MCPJam__inspector/.github/workflows/deploy-staging.yml)<br>[.github/workflows/lint.yml](../../../../sources/MCPJam__inspector/.github/workflows/lint.yml)<br>[.github/workflows/mac-release.yml](../../../../sources/MCPJam__inspector/.github/workflows/mac-release.yml)<br>[.github/workflows/mintlify-triage.yml](../../../../sources/MCPJam__inspector/.github/workflows/mintlify-triage.yml) |
| container | 2 | [mcpjam-inspector/compose.yaml](../../../../sources/MCPJam__inspector/mcpjam-inspector/compose.yaml)<br>[mcpjam-inspector/Dockerfile](../../../../sources/MCPJam__inspector/mcpjam-inspector/Dockerfile) |
| instruction | 1 | [mcpjam-inspector/AGENTS.md](../../../../sources/MCPJam__inspector/mcpjam-inspector/AGENTS.md) |
| docs | 128 | [README.md](../../../../sources/MCPJam__inspector/README.md)<br>[soundcheck/README.md](../../../../sources/MCPJam__inspector/soundcheck/README.md)<br>[sdk/README.md](../../../../sources/MCPJam__inspector/sdk/README.md)<br>[mcpjam-inspector/README.md](../../../../sources/MCPJam__inspector/mcpjam-inspector/README.md)<br>[mcpjam-inspector/e2e/README.md](../../../../sources/MCPJam__inspector/mcpjam-inspector/e2e/README.md)<br>[mcpjam-inspector/client/README.md](../../../../sources/MCPJam__inspector/mcpjam-inspector/client/README.md)<br>[mcpjam-inspector/client/src/hooks/README.md](../../../../sources/MCPJam__inspector/mcpjam-inspector/client/src/hooks/README.md)<br>[mcp/README.md](../../../../sources/MCPJam__inspector/mcp/README.md) |
| config | 37 | [package.json](../../../../sources/MCPJam__inspector/package.json)<br>[widget-react/package.json](../../../../sources/MCPJam__inspector/widget-react/package.json)<br>[widget-react/tsconfig.json](../../../../sources/MCPJam__inspector/widget-react/tsconfig.json)<br>[soundcheck/package.json](../../../../sources/MCPJam__inspector/soundcheck/package.json)<br>[soundcheck/tsconfig.json](../../../../sources/MCPJam__inspector/soundcheck/tsconfig.json)<br>[sdk/package.json](../../../../sources/MCPJam__inspector/sdk/package.json)<br>[sdk/tsconfig.json](../../../../sources/MCPJam__inspector/sdk/tsconfig.json)<br>[sdk/tests/tsconfig.json](../../../../sources/MCPJam__inspector/sdk/tests/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 848 | [widget-react/src/__tests__/widget-file-messages.test.ts](../../../../sources/MCPJam__inspector/widget-react/src/__tests__/widget-file-messages.test.ts)<br>[widget-react/src/__tests__/widget-host-context.test.tsx](../../../../sources/MCPJam__inspector/widget-react/src/__tests__/widget-host-context.test.tsx)<br>[sdk/tsconfig.test.json](../../../../sources/MCPJam__inspector/sdk/tsconfig.test.json)<br>[sdk/tests/artifact-parsers.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/artifact-parsers.test.ts)<br>[sdk/tests/browser-entry.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/browser-entry.test.ts)<br>[sdk/tests/compat-runtime-bundle-fresh.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/compat-runtime-bundle-fresh.test.ts) |
| CI workflow | 16 | [.github/workflows/claude.yml](../../../../sources/MCPJam__inspector/.github/workflows/claude.yml)<br>[.github/workflows/deploy-mcp-prod.yml](../../../../sources/MCPJam__inspector/.github/workflows/deploy-mcp-prod.yml)<br>[.github/workflows/deploy-mcp-staging.yml](../../../../sources/MCPJam__inspector/.github/workflows/deploy-mcp-staging.yml)<br>[.github/workflows/deploy-soundcheck.yml](../../../../sources/MCPJam__inspector/.github/workflows/deploy-soundcheck.yml)<br>[.github/workflows/deploy-staging.yml](../../../../sources/MCPJam__inspector/.github/workflows/deploy-staging.yml)<br>[.github/workflows/lint.yml](../../../../sources/MCPJam__inspector/.github/workflows/lint.yml) |
| 컨테이너/배포 | 2 | [mcpjam-inspector/compose.yaml](../../../../sources/MCPJam__inspector/mcpjam-inspector/compose.yaml)<br>[mcpjam-inspector/Dockerfile](../../../../sources/MCPJam__inspector/mcpjam-inspector/Dockerfile) |
| 보안/정책 | 206 | [SECURITY.md](../../../../sources/MCPJam__inspector/SECURITY.md)<br>[skills/mcp-inspector/references/security-best-practices.md](../../../../sources/MCPJam__inspector/skills/mcp-inspector/references/security-best-practices.md)<br>[sdk/tests/host-config-policy.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/host-config-policy.test.ts)<br>[sdk/tests/oauth-login.probe-timeout.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/oauth-login.probe-timeout.test.ts)<br>[sdk/tests/oauth-login.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/oauth-login.test.ts)<br>[sdk/tests/oauth-proxy.test.ts](../../../../sources/MCPJam__inspector/sdk/tests/oauth-proxy.test.ts) |
| 에이전트 지시문 | 1 | [mcpjam-inspector/AGENTS.md](../../../../sources/MCPJam__inspector/mcpjam-inspector/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `widget-react/src/__tests__/widget-file-messages.test.ts`, `widget-react/src/__tests__/widget-host-context.test.tsx`, `sdk/tsconfig.test.json`.
2. entrypoint를 따라 실행 흐름 확인: `widget-react/src/index.ts`, `sdk/src/index.ts`, `mcpjam-inspector/src/main.ts`.
3. agent/tool runtime 매핑: `widget-react/src/tool-result-utils.ts`, `skills/mcp-inspector/SKILL.md`, `skills/mcp-inspector/references/cli-surface-notes.md`.
4. retrieval/memory/indexing 확인: `widget-react/src/index.ts`, `sdk/tests/mock-servers/index.ts`, `sdk/src/index.ts`.
5. test/eval 파일로 동작 검증: `widget-react/src/__tests__/widget-file-messages.test.ts`, `widget-react/src/__tests__/widget-host-context.test.tsx`, `sdk/tsconfig.test.json`.

## 기존 레포 인사이트

평가/관측/품질 관점에서 Testing and evaluation platform to chat, inspect, and debug MCP servers, MCP apps, and ChatGPT apps.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, tests이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 평가/관측/품질 레포입니다. 활용 관점은 품질/평가 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
