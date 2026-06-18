# spences10/mcpick 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Claude Code extension manager — MCP servers, plugins (skills, hooks, agents), and marketplaces

## 요약

- 조사 단위: `sources/spences10__mcpick` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 81 files, 12 directories, depth score 101, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/adr/0001-vendor-neutral-mcp-core.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | spences10/mcpick |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 85 |
| Forks | 12 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/spences10__mcpick](../../../../sources/spences10__mcpick) |
| 기존 보고서 | [reports/global-trending/repositories/spences10__mcpick.md](../../../global-trending/repositories/spences10__mcpick.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 81 / 12 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .changeset, .github, .zed, docs, src |
| 상위 확장자 | .ts: 63, .md: 7, .json: 5, (none): 3, .yaml: 2, .yml: 1 |
| 소스 패턴 | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 23 |
| docs | documentation surface | 6 |
| .github | ci surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | vp pack |
| serve-dev | package.json | dev | vp pack --watch |
| serve-dev | package.json | start | node ./dist/index.js |
| quality | package.json | check | vp check |
| quality | package.json | format | vp check --fix |
| test | package.json | test | vp test |
| utility | package.json | changeset | changeset |
| utility | package.json | version | changeset version |
| build | package.json | release | pnpm run build && changeset publish |
| entrypoint | package.json bin | index.js | ./dist/index.js |


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
| mcp | [docs/adr/0001-vendor-neutral-mcp-core.md](../../../../sources/spences10__mcpick/docs/adr/0001-vendor-neutral-mcp-core.md) | mcp signal |
| agentRuntime | [CONTEXT.md](../../../../sources/spences10__mcpick/CONTEXT.md) | agentRuntime signal |
| agentRuntime | [src/utils/skills-cli.ts](../../../../sources/spences10__mcpick/src/utils/skills-cli.ts) | agentRuntime signal |
| agentRuntime | [src/core/hook-state.ts](../../../../sources/spences10__mcpick/src/core/hook-state.ts) | agentRuntime signal |
| agentRuntime | [src/cli/commands/hooks.ts](../../../../sources/spences10__mcpick/src/cli/commands/hooks.ts) | agentRuntime signal |
| entrypoints | [src/index.test.ts](../../../../sources/spences10__mcpick/src/index.test.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/spences10__mcpick/src/index.ts) | entrypoints signal |
| instruction | [.github/copilot-instructions.md](../../../../sources/spences10__mcpick/.github/copilot-instructions.md) | instruction signal |
| config | [package.json](../../../../sources/spences10__mcpick/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/spences10__mcpick/pnpm-workspace.yaml) | config signal |
| config | [tsconfig.json](../../../../sources/spences10__mcpick/tsconfig.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/spences10__mcpick/.github/workflows/ci.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [src/index.test.ts](../../../../sources/spences10__mcpick/src/index.test.ts)<br>[src/index.ts](../../../../sources/spences10__mcpick/src/index.ts) |
| agentRuntime | 5 | [CONTEXT.md](../../../../sources/spences10__mcpick/CONTEXT.md)<br>[src/utils/skills-cli.ts](../../../../sources/spences10__mcpick/src/utils/skills-cli.ts)<br>[src/core/hook-state.ts](../../../../sources/spences10__mcpick/src/core/hook-state.ts)<br>[src/cli/commands/hooks.ts](../../../../sources/spences10__mcpick/src/cli/commands/hooks.ts)<br>[src/cli/commands/skills.ts](../../../../sources/spences10__mcpick/src/cli/commands/skills.ts) |
| mcp | 1 | [docs/adr/0001-vendor-neutral-mcp-core.md](../../../../sources/spences10__mcpick/docs/adr/0001-vendor-neutral-mcp-core.md) |
| retrieval | 3 | [src/index.test.ts](../../../../sources/spences10__mcpick/src/index.test.ts)<br>[src/index.ts](../../../../sources/spences10__mcpick/src/index.ts)<br>[src/cli/index.ts](../../../../sources/spences10__mcpick/src/cli/index.ts) |
| spec | 2 | [docs/VENDOR_NEUTRAL_ARCHITECTURE.md](../../../../sources/spences10__mcpick/docs/VENDOR_NEUTRAL_ARCHITECTURE.md)<br>[docs/adr/0001-vendor-neutral-mcp-core.md](../../../../sources/spences10__mcpick/docs/adr/0001-vendor-neutral-mcp-core.md) |
| eval | 13 | [src/index.test.ts](../../../../sources/spences10__mcpick/src/index.test.ts)<br>[src/utils/claude-cli.test.ts](../../../../sources/spences10__mcpick/src/utils/claude-cli.test.ts)<br>[src/utils/paths.test.ts](../../../../sources/spences10__mcpick/src/utils/paths.test.ts)<br>[src/utils/redact.test.ts](../../../../sources/spences10__mcpick/src/utils/redact.test.ts)<br>[src/utils/safe-apply.test.ts](../../../../sources/spences10__mcpick/src/utils/safe-apply.test.ts)<br>[src/core/client-config.test.ts](../../../../sources/spences10__mcpick/src/core/client-config.test.ts)<br>[src/core/config.test.ts](../../../../sources/spences10__mcpick/src/core/config.test.ts)<br>[src/core/plugin-cache.test.ts](../../../../sources/spences10__mcpick/src/core/plugin-cache.test.ts) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/spences10__mcpick/.github/workflows/ci.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [.github/copilot-instructions.md](../../../../sources/spences10__mcpick/.github/copilot-instructions.md) |
| docs | 4 | [README.md](../../../../sources/spences10__mcpick/README.md)<br>[docs/VENDOR_NEUTRAL_ARCHITECTURE.md](../../../../sources/spences10__mcpick/docs/VENDOR_NEUTRAL_ARCHITECTURE.md)<br>[docs/adr/0001-vendor-neutral-mcp-core.md](../../../../sources/spences10__mcpick/docs/adr/0001-vendor-neutral-mcp-core.md)<br>[.changeset/README.md](../../../../sources/spences10__mcpick/.changeset/README.md) |
| config | 3 | [package.json](../../../../sources/spences10__mcpick/package.json)<br>[pnpm-workspace.yaml](../../../../sources/spences10__mcpick/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/spences10__mcpick/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 13 | [src/index.test.ts](../../../../sources/spences10__mcpick/src/index.test.ts)<br>[src/utils/claude-cli.test.ts](../../../../sources/spences10__mcpick/src/utils/claude-cli.test.ts)<br>[src/utils/paths.test.ts](../../../../sources/spences10__mcpick/src/utils/paths.test.ts)<br>[src/utils/redact.test.ts](../../../../sources/spences10__mcpick/src/utils/redact.test.ts)<br>[src/utils/safe-apply.test.ts](../../../../sources/spences10__mcpick/src/utils/safe-apply.test.ts)<br>[src/core/client-config.test.ts](../../../../sources/spences10__mcpick/src/core/client-config.test.ts) |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/spences10__mcpick/.github/workflows/ci.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [.github/copilot-instructions.md](../../../../sources/spences10__mcpick/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `docs/adr/0001-vendor-neutral-mcp-core.md`, `CONTEXT.md`, `src/utils/skills-cli.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.test.ts`, `src/index.ts`.
3. agent/tool runtime 매핑: `CONTEXT.md`, `src/utils/skills-cli.ts`, `src/core/hook-state.ts`.
4. retrieval/memory/indexing 확인: `src/index.test.ts`, `src/index.ts`, `src/cli/index.ts`.
5. test/eval 파일로 동작 검증: `src/index.test.ts`, `src/utils/claude-cli.test.ts`, `src/utils/paths.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Claude Code extension manager — MCP servers, plugins skills, hooks, agents , and marketplaces. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
