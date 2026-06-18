# bgauryy/octocode 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

MCP server for semantic code research and context generation on real-time using LLM patterns | Search naturally across public & private repos based on your permissions | Transform any accessible codebase/s into AI-optimized knowledge on simple and complex flows | Find real implementations and live docs from anywhere

## 요약

- 조사 단위: `sources/bgauryy__octocode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,213 files, 203 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=skills/octocode-research/src/types/mcp.ts, packages/octocode-mcp/.dxtignore, packages/octocode-mcp/build.mjs이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | bgauryy/octocode |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 864 |
| Forks | 73 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/bgauryy__octocode](../../../../sources/bgauryy__octocode) |
| 기존 보고서 | [reports/global-trending/repositories/bgauryy__octocode.md](../../../global-trending/repositories/bgauryy__octocode.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1213 / 203 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, .yarn, assets, benchmark, docs, packages, scripts, skills |
| 상위 확장자 | .ts: 910, .md: 171, .mjs: 43, .json: 34, (none): 14, .sh: 11, .js: 9, .html: 5, .png: 4, .yml: 4, .cjs: 2, .css: 2 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/octocode-mcp | packages workspace | 52 |
| packages/octocode-security-utils | packages workspace | 41 |
| docs | documentation surface | 21 |
| packages/octocode-cli | packages workspace | 14 |
| packages/octocode-shared | packages workspace | 10 |
| packages/octocode-vscode | packages workspace | 3 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmark | validation surface | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | node ./scripts/workspace-health.mjs run build |
| utility | package.json | docs:verify | node ./scripts/docs-verify.mjs |
| quality | package.json | health:check | node ./scripts/workspace-health.mjs check |
| utility | package.json | health:report | node ./scripts/workspace-health.mjs report |
| quality | package.json | lint | node ./scripts/workspace-health.mjs run lint |
| quality | package.json | lint:fix | yarn workspaces foreach -Apt run lint:fix |
| utility | package.json | syncpack:fix | syncpack fix |
| quality | package.json | syncpack:format | syncpack format |
| quality | package.json | syncpack:lint | syncpack lint |
| utility | package.json | syncpack:list | syncpack list |
| test | package.json | test | node ./scripts/workspace-health.mjs run test |
| test | package.json | test:quiet | yarn workspaces foreach -Apt run test:quiet |
| quality | package.json | typecheck | node ./scripts/workspace-health.mjs run typecheck |
| utility | package.json | verify | node ./scripts/workspace-health.mjs verify |


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
| mcp | [skills/octocode-research/src/types/mcp.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/types/mcp.ts) | mcp signal |
| mcp | [packages/octocode-mcp/.dxtignore](../../../../sources/bgauryy__octocode/packages/octocode-mcp/.dxtignore) | mcp signal |
| mcp | [packages/octocode-mcp/build.mjs](../../../../sources/bgauryy__octocode/packages/octocode-mcp/build.mjs) | mcp signal |
| mcp | [packages/octocode-mcp/LICENSE](../../../../sources/bgauryy__octocode/packages/octocode-mcp/LICENSE) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/bgauryy__octocode/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills/README.md](../../../../sources/bgauryy__octocode/skills/README.md) | agentRuntime signal |
| agentRuntime | [skills/octocode-stats/SKILL.md](../../../../sources/bgauryy__octocode/skills/octocode-stats/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/octocode-stats/scripts/build_dashboard.mjs](../../../../sources/bgauryy__octocode/skills/octocode-stats/scripts/build_dashboard.mjs) | agentRuntime signal |
| entrypoints | [skills/octocode-research/src/index.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/index.ts) | entrypoints signal |
| entrypoints | [skills/octocode-research/src/server.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/server.ts) | entrypoints signal |
| entrypoints | [skills/octocode-research/scripts/server.d.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/scripts/server.d.ts) | entrypoints signal |
| entrypoints | [skills/octocode-research/scripts/server.js](../../../../sources/bgauryy__octocode/skills/octocode-research/scripts/server.js) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 13 | [skills/octocode-research/src/index.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/index.ts)<br>[skills/octocode-research/src/server.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/server.ts)<br>[skills/octocode-research/scripts/server.d.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/scripts/server.d.ts)<br>[skills/octocode-research/scripts/server.js](../../../../sources/bgauryy__octocode/skills/octocode-research/scripts/server.js)<br>[skills/octocode-engineer/src/index.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/index.test.ts)<br>[skills/octocode-engineer/src/index.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/index.ts)<br>[skills/octocode-engineer/src/pipeline/main.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/pipeline/main.ts)<br>[packages/octocode-shared/src/index.ts](../../../../sources/bgauryy__octocode/packages/octocode-shared/src/index.ts) |
| agentRuntime | 561 | [AGENTS.md](../../../../sources/bgauryy__octocode/AGENTS.md)<br>[skills/README.md](../../../../sources/bgauryy__octocode/skills/README.md)<br>[skills/octocode-stats/SKILL.md](../../../../sources/bgauryy__octocode/skills/octocode-stats/SKILL.md)<br>[skills/octocode-stats/scripts/build_dashboard.mjs](../../../../sources/bgauryy__octocode/skills/octocode-stats/scripts/build_dashboard.mjs)<br>[skills/octocode-stats/assets/template.html](../../../../sources/bgauryy__octocode/skills/octocode-stats/assets/template.html)<br>[skills/octocode-slides/README.md](../../../../sources/bgauryy__octocode/skills/octocode-slides/README.md)<br>[skills/octocode-slides/SKILL.md](../../../../sources/bgauryy__octocode/skills/octocode-slides/SKILL.md)<br>[skills/octocode-slides/scripts/animation.js](../../../../sources/bgauryy__octocode/skills/octocode-slides/scripts/animation.js) |
| mcp | 564 | [skills/octocode-research/src/types/mcp.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/types/mcp.ts)<br>[packages/octocode-mcp/.dxtignore](../../../../sources/bgauryy__octocode/packages/octocode-mcp/.dxtignore)<br>[packages/octocode-mcp/build.mjs](../../../../sources/bgauryy__octocode/packages/octocode-mcp/build.mjs)<br>[packages/octocode-mcp/LICENSE](../../../../sources/bgauryy__octocode/packages/octocode-mcp/LICENSE)<br>[packages/octocode-mcp/manifest.json](../../../../sources/bgauryy__octocode/packages/octocode-mcp/manifest.json)<br>[packages/octocode-mcp/package.json](../../../../sources/bgauryy__octocode/packages/octocode-mcp/package.json)<br>[packages/octocode-mcp/README.md](../../../../sources/bgauryy__octocode/packages/octocode-mcp/README.md)<br>[packages/octocode-mcp/server.json](../../../../sources/bgauryy__octocode/packages/octocode-mcp/server.json) |
| retrieval | 34 | [skills/octocode-research/src/index.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/index.ts)<br>[skills/octocode-research/src/validation/index.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/validation/index.ts)<br>[skills/octocode-engineer/src/index.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/index.test.ts)<br>[skills/octocode-engineer/src/index.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/index.ts)<br>[skills/octocode-engineer/src/types/index.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/types/index.ts)<br>[skills/octocode-engineer/src/reporting/graph-features.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/reporting/graph-features.test.ts)<br>[skills/octocode-engineer/src/detectors/index.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/detectors/index.test.ts)<br>[skills/octocode-engineer/src/detectors/index.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/detectors/index.ts) |
| spec | 16 | [skills/octocode-slides/references/04-design.md](../../../../sources/bgauryy__octocode/skills/octocode-slides/references/04-design.md)<br>[skills/octocode-slides/references/design-system.md](../../../../sources/bgauryy__octocode/skills/octocode-slides/references/design-system.md)<br>[skills/octocode-research/docs/ARCHITECTURE.md](../../../../sources/bgauryy__octocode/skills/octocode-research/docs/ARCHITECTURE.md)<br>[skills/octocode-design/README.md](../../../../sources/bgauryy__octocode/skills/octocode-design/README.md)<br>[skills/octocode-design/SKILL.md](../../../../sources/bgauryy__octocode/skills/octocode-design/SKILL.md)<br>[skills/octocode-design/references/components.md](../../../../sources/bgauryy__octocode/skills/octocode-design/references/components.md)<br>[skills/octocode-design/references/resources.md](../../../../sources/bgauryy__octocode/skills/octocode-design/references/resources.md)<br>[skills/octocode-design/references/tokens.md](../../../../sources/bgauryy__octocode/skills/octocode-design/references/tokens.md) |
| eval | 496 | [skills/octocode-research/src/__tests__/unit/circuitBreaker.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/circuitBreaker.test.ts)<br>[skills/octocode-research/src/__tests__/unit/errorHandler.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/errorHandler.test.ts)<br>[skills/octocode-research/src/__tests__/unit/httpPreprocess.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/httpPreprocess.test.ts)<br>[skills/octocode-research/src/__tests__/unit/logger.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/logger.test.ts)<br>[skills/octocode-research/src/__tests__/unit/queryParser.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/queryParser.test.ts)<br>[skills/octocode-research/src/__tests__/unit/readiness.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/readiness.test.ts)<br>[skills/octocode-research/src/__tests__/unit/resilience.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/resilience.test.ts)<br>[skills/octocode-research/src/__tests__/unit/responseBuilder.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/responseBuilder.test.ts) |
| security | 77 | [skills/octocode-engineer/src/detectors/security.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/detectors/security.test.ts)<br>[skills/octocode-engineer/src/detectors/security.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/detectors/security.ts)<br>[skills/octocode-engineer/src/collectors/security.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/collectors/security.test.ts)<br>[skills/octocode-engineer/src/collectors/security.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/collectors/security.ts)<br>[skills/octocode-chrome-devtools/scripts/cdp-sandbox.mjs](../../../../sources/bgauryy__octocode/skills/octocode-chrome-devtools/scripts/cdp-sandbox.mjs)<br>[skills/octocode-chrome-devtools/references/INTENTS_AUTH.md](../../../../sources/bgauryy__octocode/skills/octocode-chrome-devtools/references/INTENTS_AUTH.md)<br>[packages/octocode-security-utils/build.mjs](../../../../sources/bgauryy__octocode/packages/octocode-security-utils/build.mjs)<br>[packages/octocode-security-utils/package.json](../../../../sources/bgauryy__octocode/packages/octocode-security-utils/package.json) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/bgauryy__octocode/.github/workflows/ci.yml)<br>[.github/workflows/README.md](../../../../sources/bgauryy__octocode/.github/workflows/README.md)<br>[.github/workflows/releases.yml](../../../../sources/bgauryy__octocode/.github/workflows/releases.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [AGENTS.md](../../../../sources/bgauryy__octocode/AGENTS.md)<br>[CLAUDE.md](../../../../sources/bgauryy__octocode/CLAUDE.md) |
| docs | 45 | [README.md](../../../../sources/bgauryy__octocode/README.md)<br>[skills/README.md](../../../../sources/bgauryy__octocode/skills/README.md)<br>[skills/octocode-slides/README.md](../../../../sources/bgauryy__octocode/skills/octocode-slides/README.md)<br>[skills/octocode-research/README.md](../../../../sources/bgauryy__octocode/skills/octocode-research/README.md)<br>[skills/octocode-research/docs/API_REFERENCE.md](../../../../sources/bgauryy__octocode/skills/octocode-research/docs/API_REFERENCE.md)<br>[skills/octocode-research/docs/ARCHITECTURE.md](../../../../sources/bgauryy__octocode/skills/octocode-research/docs/ARCHITECTURE.md)<br>[skills/octocode-research/docs/FLOWS.md](../../../../sources/bgauryy__octocode/skills/octocode-research/docs/FLOWS.md)<br>[skills/octocode-research/docs/OVERVIEW.md](../../../../sources/bgauryy__octocode/skills/octocode-research/docs/OVERVIEW.md) |
| config | 17 | [package.json](../../../../sources/bgauryy__octocode/package.json)<br>[skills/octocode-research/package.json](../../../../sources/bgauryy__octocode/skills/octocode-research/package.json)<br>[skills/octocode-research/tsconfig.json](../../../../sources/bgauryy__octocode/skills/octocode-research/tsconfig.json)<br>[skills/octocode-news/package.json](../../../../sources/bgauryy__octocode/skills/octocode-news/package.json)<br>[skills/octocode-news/tsconfig.json](../../../../sources/bgauryy__octocode/skills/octocode-news/tsconfig.json)<br>[skills/octocode-engineer/package.json](../../../../sources/bgauryy__octocode/skills/octocode-engineer/package.json)<br>[skills/octocode-engineer/tsconfig.json](../../../../sources/bgauryy__octocode/skills/octocode-engineer/tsconfig.json)<br>[packages/octocode-vscode/package.json](../../../../sources/bgauryy__octocode/packages/octocode-vscode/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 496 | [skills/octocode-research/src/__tests__/unit/circuitBreaker.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/circuitBreaker.test.ts)<br>[skills/octocode-research/src/__tests__/unit/errorHandler.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/errorHandler.test.ts)<br>[skills/octocode-research/src/__tests__/unit/httpPreprocess.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/httpPreprocess.test.ts)<br>[skills/octocode-research/src/__tests__/unit/logger.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/logger.test.ts)<br>[skills/octocode-research/src/__tests__/unit/queryParser.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/queryParser.test.ts)<br>[skills/octocode-research/src/__tests__/unit/readiness.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-research/src/__tests__/unit/readiness.test.ts) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/bgauryy__octocode/.github/workflows/ci.yml)<br>[.github/workflows/README.md](../../../../sources/bgauryy__octocode/.github/workflows/README.md)<br>[.github/workflows/releases.yml](../../../../sources/bgauryy__octocode/.github/workflows/releases.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 77 | [skills/octocode-engineer/src/detectors/security.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/detectors/security.test.ts)<br>[skills/octocode-engineer/src/detectors/security.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/detectors/security.ts)<br>[skills/octocode-engineer/src/collectors/security.test.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/collectors/security.test.ts)<br>[skills/octocode-engineer/src/collectors/security.ts](../../../../sources/bgauryy__octocode/skills/octocode-engineer/src/collectors/security.ts)<br>[skills/octocode-chrome-devtools/scripts/cdp-sandbox.mjs](../../../../sources/bgauryy__octocode/skills/octocode-chrome-devtools/scripts/cdp-sandbox.mjs)<br>[skills/octocode-chrome-devtools/references/INTENTS_AUTH.md](../../../../sources/bgauryy__octocode/skills/octocode-chrome-devtools/references/INTENTS_AUTH.md) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/bgauryy__octocode/AGENTS.md)<br>[CLAUDE.md](../../../../sources/bgauryy__octocode/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `skills/octocode-research/src/types/mcp.ts`, `packages/octocode-mcp/.dxtignore`, `packages/octocode-mcp/build.mjs`.
2. entrypoint를 따라 실행 흐름 확인: `skills/octocode-research/src/index.ts`, `skills/octocode-research/src/server.ts`, `skills/octocode-research/scripts/server.d.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `skills/README.md`, `skills/octocode-stats/SKILL.md`.
4. retrieval/memory/indexing 확인: `skills/octocode-research/src/index.ts`, `skills/octocode-research/src/validation/index.ts`, `skills/octocode-engineer/src/index.test.ts`.
5. test/eval 파일로 동작 검증: `skills/octocode-research/src/__tests__/unit/circuitBreaker.test.ts`, `skills/octocode-research/src/__tests__/unit/errorHandler.test.ts`, `skills/octocode-research/src/__tests__/unit/httpPreprocess.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 MCP server for semantic code research and context generation on real time using LLM patterns Search naturally across pub. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
