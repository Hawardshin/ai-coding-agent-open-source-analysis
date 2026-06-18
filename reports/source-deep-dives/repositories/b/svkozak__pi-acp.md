# svkozak/pi-acp 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

ACP adapter for pi coding agent

## 요약

- 조사 단위: `sources/svkozak__pi-acp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 72 files, 11 directories, depth score 92, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, test/component/agent-steering-followup-modes.test.ts, src/acp/agent.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | svkozak/pi-acp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 455 |
| Forks | 72 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/svkozak__pi-acp](../../../../sources/svkozak__pi-acp) |
| 기존 보고서 | [reports/global-trending/repositories/svkozak__pi-acp.md](../../../global-trending/repositories/svkozak__pi-acp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 72 / 11 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, scripts, src, test |
| 상위 확장자 | .ts: 49, .mjs: 11, .json: 3, .md: 3, (none): 3, .yml: 2, .js: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 6 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | tsx src/index.ts |
| build | package.json | build | tsup |
| serve-dev | package.json | start | node dist/index.js |
| quality | package.json | format | prettier . --write |
| quality | package.json | typecheck | tsc --noEmit |
| quality | package.json | lint | eslint . |
| test | package.json | test | node --import tsx --test test/**/*.test.ts |
| utility | package.json | smoke | node scripts/smoke-acp.mjs |
| build | package.json | prepack | npm run build |
| test | package.json | prepublishOnly | npm run test && npm run build |
| entrypoint | package.json bin | index.js | dist/index.js |


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
| agentRuntime | [AGENTS.md](../../../../sources/svkozak__pi-acp/AGENTS.md) | agentRuntime signal |
| agentRuntime | [test/component/agent-steering-followup-modes.test.ts](../../../../sources/svkozak__pi-acp/test/component/agent-steering-followup-modes.test.ts) | agentRuntime signal |
| agentRuntime | [src/acp/agent.ts](../../../../sources/svkozak__pi-acp/src/acp/agent.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/svkozak__pi-acp/src/index.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/svkozak__pi-acp/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/svkozak__pi-acp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/svkozak__pi-acp/tsconfig.json) | config signal |
| ci | [.github/workflows/github-release.yml](../../../../sources/svkozak__pi-acp/.github/workflows/github-release.yml) | ci support |
| ci | [.github/workflows/npm-publish.yml](../../../../sources/svkozak__pi-acp/.github/workflows/npm-publish.yml) | ci support |
| eval | [test/unit/auth-methods-terminal-auth-meta.test.ts](../../../../sources/svkozak__pi-acp/test/unit/auth-methods-terminal-auth-meta.test.ts) | eval support |
| eval | [test/unit/builtin-commands.test.ts](../../../../sources/svkozak__pi-acp/test/unit/builtin-commands.test.ts) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/svkozak__pi-acp/src/index.ts) |
| agentRuntime | 3 | [AGENTS.md](../../../../sources/svkozak__pi-acp/AGENTS.md)<br>[test/component/agent-steering-followup-modes.test.ts](../../../../sources/svkozak__pi-acp/test/component/agent-steering-followup-modes.test.ts)<br>[src/acp/agent.ts](../../../../sources/svkozak__pi-acp/src/acp/agent.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 2 | [test/unit/pi-enable-embed-context-flag.test.ts](../../../../sources/svkozak__pi-acp/test/unit/pi-enable-embed-context-flag.test.ts)<br>[src/index.ts](../../../../sources/svkozak__pi-acp/src/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 31 | [test/unit/auth-methods-terminal-auth-meta.test.ts](../../../../sources/svkozak__pi-acp/test/unit/auth-methods-terminal-auth-meta.test.ts)<br>[test/unit/builtin-commands.test.ts](../../../../sources/svkozak__pi-acp/test/unit/builtin-commands.test.ts)<br>[test/unit/merge-commands.test.ts](../../../../sources/svkozak__pi-acp/test/unit/merge-commands.test.ts)<br>[test/unit/new-session-auth-required-when-no-models.test.ts](../../../../sources/svkozak__pi-acp/test/unit/new-session-auth-required-when-no-models.test.ts)<br>[test/unit/new-session-pi-not-found.test.ts](../../../../sources/svkozak__pi-acp/test/unit/new-session-pi-not-found.test.ts)<br>[test/unit/new-session-runtime-startup-errors.test.ts](../../../../sources/svkozak__pi-acp/test/unit/new-session-runtime-startup-errors.test.ts)<br>[test/unit/pi-command.test.ts](../../../../sources/svkozak__pi-acp/test/unit/pi-command.test.ts)<br>[test/unit/pi-commands.test.ts](../../../../sources/svkozak__pi-acp/test/unit/pi-commands.test.ts) |
| security | 4 | [test/unit/auth-methods-terminal-auth-meta.test.ts](../../../../sources/svkozak__pi-acp/test/unit/auth-methods-terminal-auth-meta.test.ts)<br>[test/unit/new-session-auth-required-when-no-models.test.ts](../../../../sources/svkozak__pi-acp/test/unit/new-session-auth-required-when-no-models.test.ts)<br>[src/acp/auth-required.ts](../../../../sources/svkozak__pi-acp/src/acp/auth-required.ts)<br>[src/acp/auth.ts](../../../../sources/svkozak__pi-acp/src/acp/auth.ts) |
| ci | 2 | [.github/workflows/github-release.yml](../../../../sources/svkozak__pi-acp/.github/workflows/github-release.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/svkozak__pi-acp/.github/workflows/npm-publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [AGENTS.md](../../../../sources/svkozak__pi-acp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/svkozak__pi-acp/CLAUDE.md) |
| docs | 1 | [README.md](../../../../sources/svkozak__pi-acp/README.md) |
| config | 2 | [package.json](../../../../sources/svkozak__pi-acp/package.json)<br>[tsconfig.json](../../../../sources/svkozak__pi-acp/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 31 | [test/unit/auth-methods-terminal-auth-meta.test.ts](../../../../sources/svkozak__pi-acp/test/unit/auth-methods-terminal-auth-meta.test.ts)<br>[test/unit/builtin-commands.test.ts](../../../../sources/svkozak__pi-acp/test/unit/builtin-commands.test.ts)<br>[test/unit/merge-commands.test.ts](../../../../sources/svkozak__pi-acp/test/unit/merge-commands.test.ts)<br>[test/unit/new-session-auth-required-when-no-models.test.ts](../../../../sources/svkozak__pi-acp/test/unit/new-session-auth-required-when-no-models.test.ts)<br>[test/unit/new-session-pi-not-found.test.ts](../../../../sources/svkozak__pi-acp/test/unit/new-session-pi-not-found.test.ts)<br>[test/unit/new-session-runtime-startup-errors.test.ts](../../../../sources/svkozak__pi-acp/test/unit/new-session-runtime-startup-errors.test.ts) |
| CI workflow | 2 | [.github/workflows/github-release.yml](../../../../sources/svkozak__pi-acp/.github/workflows/github-release.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/svkozak__pi-acp/.github/workflows/npm-publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 4 | [test/unit/auth-methods-terminal-auth-meta.test.ts](../../../../sources/svkozak__pi-acp/test/unit/auth-methods-terminal-auth-meta.test.ts)<br>[test/unit/new-session-auth-required-when-no-models.test.ts](../../../../sources/svkozak__pi-acp/test/unit/new-session-auth-required-when-no-models.test.ts)<br>[src/acp/auth-required.ts](../../../../sources/svkozak__pi-acp/src/acp/auth-required.ts)<br>[src/acp/auth.ts](../../../../sources/svkozak__pi-acp/src/acp/auth.ts) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/svkozak__pi-acp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/svkozak__pi-acp/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `test/component/agent-steering-followup-modes.test.ts`, `src/acp/agent.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `test/component/agent-steering-followup-modes.test.ts`, `src/acp/agent.ts`.
4. retrieval/memory/indexing 확인: `test/unit/pi-enable-embed-context-flag.test.ts`, `src/index.ts`.
5. test/eval 파일로 동작 검증: `test/unit/auth-methods-terminal-auth-meta.test.ts`, `test/unit/builtin-commands.test.ts`, `test/unit/merge-commands.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 ACP adapter for pi coding agent. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
