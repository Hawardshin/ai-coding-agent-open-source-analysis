# okx/agent-trade-kit 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

OKX trading MCP server — connect AI agents to spot, swap, futures, options & grid bots via the Model Context Protocol.

## 요약

- 조사 단위: `sources/okx__agent-trade-kit` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 339 files, 56 directories, depth score 113, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=test/mcp-e2e.mjs, packages/mcp/package.json, packages/mcp/README.md이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | okx/agent-trade-kit |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 335 |
| Forks | 56 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/okx__agent-trade-kit](../../../../sources/okx__agent-trade-kit) |
| 기존 보고서 | [reports/global-trending/repositories/okx__agent-trade-kit.md](../../../global-trending/repositories/okx__agent-trade-kit.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 339 / 56 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, docs, packages, scripts, skills, test |
| 상위 확장자 | .ts: 203, .md: 97, .json: 15, .sh: 5, .yml: 5, .mjs: 3, (none): 3, .example: 2, .js: 2, .yaml: 2, .ps1: 1, .txt: 1 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/core | packages workspace | 49 |
| docs | documentation surface | 27 |
| packages/mcp | packages workspace | 23 |
| packages/cli | packages workspace | 13 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | pnpm --filter @agent-tradekit/core build && pnpm --filter @okx_ai/okx-trade-mcp build && pnpm --filter @okx_ai/okx-trade-cli build |
| quality | package.json | typecheck | pnpm -r typecheck |
| utility | package.json | clean | pnpm -r clean |
| test | package.json | test:unit | pnpm --filter @agent-tradekit/core test:unit && pnpm --filter @okx_ai/okx-trade-cli test:unit && pnpm --filter @okx_ai/okx-trade-mcp test:unit |
| test | package.json | test:coverage | c8 --reporter=lcov --reporter=text --src=packages/core/src --src=packages/cli/src node_modules/.bin/tsx --test packages/core/test/*.test.ts packages/cli/test/*.test.ts packages/mcp/test/*.test.ts |
| test | package.json | test | c8 --reporter=lcov --reporter=text --src=packages/core/src --src=packages/cli/src node_modules/.bin/tsx --test packages/core/test/*.test.ts packages/cli/test/*.test.ts packages/mcp/test/*.test.ts |
| test | package.json | pretest | npm run build -w packages/core && npm run build -w packages/cli |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
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
| mcp | [test/mcp-e2e.mjs](../../../../sources/okx__agent-trade-kit/test/mcp-e2e.mjs) | mcp signal |
| mcp | [packages/mcp/package.json](../../../../sources/okx__agent-trade-kit/packages/mcp/package.json) | mcp signal |
| mcp | [packages/mcp/README.md](../../../../sources/okx__agent-trade-kit/packages/mcp/README.md) | mcp signal |
| mcp | [packages/mcp/README.zh-CN.md](../../../../sources/okx__agent-trade-kit/packages/mcp/README.zh-CN.md) | mcp signal |
| agentRuntime | [skills/README.md](../../../../sources/okx__agent-trade-kit/skills/README.md) | agentRuntime signal |
| agentRuntime | [skills/README.zh-CN.md](../../../../sources/okx__agent-trade-kit/skills/README.zh-CN.md) | agentRuntime signal |
| agentRuntime | [skills/okx-sentiment-tracker/SKILL.md](../../../../sources/okx__agent-trade-kit/skills/okx-sentiment-tracker/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/okx-sentiment-tracker/references/workflows.md](../../../../sources/okx__agent-trade-kit/skills/okx-sentiment-tracker/references/workflows.md) | agentRuntime signal |
| entrypoints | [packages/mcp/test/server.test.ts](../../../../sources/okx__agent-trade-kit/packages/mcp/test/server.test.ts) | entrypoints signal |
| entrypoints | [packages/mcp/src/index.ts](../../../../sources/okx__agent-trade-kit/packages/mcp/src/index.ts) | entrypoints signal |
| entrypoints | [packages/mcp/src/server.ts](../../../../sources/okx__agent-trade-kit/packages/mcp/src/server.ts) | entrypoints signal |
| entrypoints | [packages/core/src/index.ts](../../../../sources/okx__agent-trade-kit/packages/core/src/index.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [packages/mcp/test/server.test.ts](../../../../sources/okx__agent-trade-kit/packages/mcp/test/server.test.ts)<br>[packages/mcp/src/index.ts](../../../../sources/okx__agent-trade-kit/packages/mcp/src/index.ts)<br>[packages/mcp/src/server.ts](../../../../sources/okx__agent-trade-kit/packages/mcp/src/server.ts)<br>[packages/core/src/index.ts](../../../../sources/okx__agent-trade-kit/packages/core/src/index.ts)<br>[packages/cli/src/index.ts](../../../../sources/okx__agent-trade-kit/packages/cli/src/index.ts) |
| agentRuntime | 111 | [skills/README.md](../../../../sources/okx__agent-trade-kit/skills/README.md)<br>[skills/README.zh-CN.md](../../../../sources/okx__agent-trade-kit/skills/README.zh-CN.md)<br>[skills/okx-sentiment-tracker/SKILL.md](../../../../sources/okx__agent-trade-kit/skills/okx-sentiment-tracker/SKILL.md)<br>[skills/okx-sentiment-tracker/references/workflows.md](../../../../sources/okx__agent-trade-kit/skills/okx-sentiment-tracker/references/workflows.md)<br>[skills/okx-outcomes/SKILL.md](../../../../sources/okx__agent-trade-kit/skills/okx-outcomes/SKILL.md)<br>[skills/okx-outcomes/references/account-commands.md](../../../../sources/okx__agent-trade-kit/skills/okx-outcomes/references/account-commands.md)<br>[skills/okx-outcomes/references/clob-commands.md](../../../../sources/okx__agent-trade-kit/skills/okx-outcomes/references/clob-commands.md)<br>[skills/okx-outcomes/references/ctf-commands.md](../../../../sources/okx__agent-trade-kit/skills/okx-outcomes/references/ctf-commands.md) |
| mcp | 15 | [test/mcp-e2e.mjs](../../../../sources/okx__agent-trade-kit/test/mcp-e2e.mjs)<br>[packages/mcp/package.json](../../../../sources/okx__agent-trade-kit/packages/mcp/package.json)<br>[packages/mcp/README.md](../../../../sources/okx__agent-trade-kit/packages/mcp/README.md)<br>[packages/mcp/README.zh-CN.md](../../../../sources/okx__agent-trade-kit/packages/mcp/README.zh-CN.md)<br>[packages/mcp/tsconfig.json](../../../../sources/okx__agent-trade-kit/packages/mcp/tsconfig.json)<br>[packages/mcp/tsup.config.ts](../../../../sources/okx__agent-trade-kit/packages/mcp/tsup.config.ts)<br>[packages/mcp/test/bundle.test.ts](../../../../sources/okx__agent-trade-kit/packages/mcp/test/bundle.test.ts)<br>[packages/mcp/test/server.test.ts](../../../../sources/okx__agent-trade-kit/packages/mcp/test/server.test.ts) |
| retrieval | 8 | [packages/mcp/src/index.ts](../../../../sources/okx__agent-trade-kit/packages/mcp/src/index.ts)<br>[packages/core/src/index.ts](../../../../sources/okx__agent-trade-kit/packages/core/src/index.ts)<br>[packages/core/src/tools/index.ts](../../../../sources/okx__agent-trade-kit/packages/core/src/tools/index.ts)<br>[packages/core/src/tools/earn/index.ts](../../../../sources/okx__agent-trade-kit/packages/core/src/tools/earn/index.ts)<br>[packages/core/src/tools/bot/index.ts](../../../../sources/okx__agent-trade-kit/packages/core/src/tools/bot/index.ts)<br>[packages/core/src/skills/index.ts](../../../../sources/okx__agent-trade-kit/packages/core/src/skills/index.ts)<br>[packages/cli/test/index.test.ts](../../../../sources/okx__agent-trade-kit/packages/cli/test/index.test.ts)<br>[packages/cli/src/index.ts](../../../../sources/okx__agent-trade-kit/packages/cli/src/index.ts) |
| spec | 3 | [ARCHITECTURE.md](../../../../sources/okx__agent-trade-kit/ARCHITECTURE.md)<br>[ARCHITECTURE.zh-CN.md](../../../../sources/okx__agent-trade-kit/ARCHITECTURE.zh-CN.md)<br>[docs/mcp-design-guideline.md](../../../../sources/okx__agent-trade-kit/docs/mcp-design-guideline.md) |
| eval | 101 | [test/mcp-e2e.mjs](../../../../sources/okx__agent-trade-kit/test/mcp-e2e.mjs)<br>[test/smoke.sh](../../../../sources/okx__agent-trade-kit/test/smoke.sh)<br>[test/test-indicators.sh](../../../../sources/okx__agent-trade-kit/test/test-indicators.sh)<br>[scripts/smoke-test/README.md](../../../../sources/okx__agent-trade-kit/scripts/smoke-test/README.md)<br>[scripts/smoke-test/run.ts](../../../../sources/okx__agent-trade-kit/scripts/smoke-test/run.ts)<br>[scripts/scenario-test/run.ts](../../../../sources/okx__agent-trade-kit/scripts/scenario-test/run.ts)<br>[scripts/scenario-test/spot-flow.ts](../../../../sources/okx__agent-trade-kit/scripts/scenario-test/spot-flow.ts)<br>[scripts/scenario-test/stateless.ts](../../../../sources/okx__agent-trade-kit/scripts/scenario-test/stateless.ts) |
| security | 20 | [SECURITY.md](../../../../sources/okx__agent-trade-kit/SECURITY.md)<br>[skills/okx-outcomes/references/setup-auth.md](../../../../sources/okx__agent-trade-kit/skills/okx-outcomes/references/setup-auth.md)<br>[skills/okx-cex-auth/SKILL.md](../../../../sources/okx__agent-trade-kit/skills/okx-cex-auth/SKILL.md)<br>[packages/core/test/audit.test.ts](../../../../sources/okx__agent-trade-kit/packages/core/test/audit.test.ts)<br>[packages/core/test/auth-binary.test.ts](../../../../sources/okx__agent-trade-kit/packages/core/test/auth-binary.test.ts)<br>[packages/core/test/auth-installer.test.ts](../../../../sources/okx__agent-trade-kit/packages/core/test/auth-installer.test.ts)<br>[packages/core/test/auth-update-check.test.ts](../../../../sources/okx__agent-trade-kit/packages/core/test/auth-update-check.test.ts)<br>[packages/core/test/fixtures/mock-auth-binary.mjs](../../../../sources/okx__agent-trade-kit/packages/core/test/fixtures/mock-auth-binary.mjs) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/okx__agent-trade-kit/.github/workflows/ci.yml)<br>[.github/workflows/opensource-guard.yml](../../../../sources/okx__agent-trade-kit/.github/workflows/opensource-guard.yml)<br>[.github/workflows/smoke-test.yml](../../../../sources/okx__agent-trade-kit/.github/workflows/smoke-test.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 33 | [README.md](../../../../sources/okx__agent-trade-kit/README.md)<br>[README.zh-CN.md](../../../../sources/okx__agent-trade-kit/README.zh-CN.md)<br>[skills/README.md](../../../../sources/okx__agent-trade-kit/skills/README.md)<br>[skills/README.zh-CN.md](../../../../sources/okx__agent-trade-kit/skills/README.zh-CN.md)<br>[scripts/smoke-test/README.md](../../../../sources/okx__agent-trade-kit/scripts/smoke-test/README.md)<br>[packages/mcp/README.md](../../../../sources/okx__agent-trade-kit/packages/mcp/README.md)<br>[packages/mcp/README.zh-CN.md](../../../../sources/okx__agent-trade-kit/packages/mcp/README.zh-CN.md)<br>[packages/cli/README.md](../../../../sources/okx__agent-trade-kit/packages/cli/README.md) |
| config | 11 | [package.json](../../../../sources/okx__agent-trade-kit/package.json)<br>[pnpm-workspace.yaml](../../../../sources/okx__agent-trade-kit/pnpm-workspace.yaml)<br>[packages/mcp/package.json](../../../../sources/okx__agent-trade-kit/packages/mcp/package.json)<br>[packages/mcp/tsconfig.json](../../../../sources/okx__agent-trade-kit/packages/mcp/tsconfig.json)<br>[packages/mcp/test/tsconfig.json](../../../../sources/okx__agent-trade-kit/packages/mcp/test/tsconfig.json)<br>[packages/core/package.json](../../../../sources/okx__agent-trade-kit/packages/core/package.json)<br>[packages/core/tsconfig.json](../../../../sources/okx__agent-trade-kit/packages/core/tsconfig.json)<br>[packages/core/test/tsconfig.json](../../../../sources/okx__agent-trade-kit/packages/core/test/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 101 | [test/mcp-e2e.mjs](../../../../sources/okx__agent-trade-kit/test/mcp-e2e.mjs)<br>[test/smoke.sh](../../../../sources/okx__agent-trade-kit/test/smoke.sh)<br>[test/test-indicators.sh](../../../../sources/okx__agent-trade-kit/test/test-indicators.sh)<br>[scripts/smoke-test/README.md](../../../../sources/okx__agent-trade-kit/scripts/smoke-test/README.md)<br>[scripts/smoke-test/run.ts](../../../../sources/okx__agent-trade-kit/scripts/smoke-test/run.ts)<br>[scripts/scenario-test/run.ts](../../../../sources/okx__agent-trade-kit/scripts/scenario-test/run.ts) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/okx__agent-trade-kit/.github/workflows/ci.yml)<br>[.github/workflows/opensource-guard.yml](../../../../sources/okx__agent-trade-kit/.github/workflows/opensource-guard.yml)<br>[.github/workflows/smoke-test.yml](../../../../sources/okx__agent-trade-kit/.github/workflows/smoke-test.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 20 | [SECURITY.md](../../../../sources/okx__agent-trade-kit/SECURITY.md)<br>[skills/okx-outcomes/references/setup-auth.md](../../../../sources/okx__agent-trade-kit/skills/okx-outcomes/references/setup-auth.md)<br>[skills/okx-cex-auth/SKILL.md](../../../../sources/okx__agent-trade-kit/skills/okx-cex-auth/SKILL.md)<br>[packages/core/test/audit.test.ts](../../../../sources/okx__agent-trade-kit/packages/core/test/audit.test.ts)<br>[packages/core/test/auth-binary.test.ts](../../../../sources/okx__agent-trade-kit/packages/core/test/auth-binary.test.ts)<br>[packages/core/test/auth-installer.test.ts](../../../../sources/okx__agent-trade-kit/packages/core/test/auth-installer.test.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `test/mcp-e2e.mjs`, `packages/mcp/package.json`, `packages/mcp/README.md`.
2. entrypoint를 따라 실행 흐름 확인: `packages/mcp/test/server.test.ts`, `packages/mcp/src/index.ts`, `packages/mcp/src/server.ts`.
3. agent/tool runtime 매핑: `skills/README.md`, `skills/README.zh-CN.md`, `skills/okx-sentiment-tracker/SKILL.md`.
4. retrieval/memory/indexing 확인: `packages/mcp/src/index.ts`, `packages/core/src/index.ts`, `packages/core/src/tools/index.ts`.
5. test/eval 파일로 동작 검증: `test/mcp-e2e.mjs`, `test/smoke.sh`, `test/test-indicators.sh`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 OKX trading MCP server — connect AI agents to spot, swap, futures, options & grid bots via the Model Context Protocol.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, modelcontextprotocol, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
