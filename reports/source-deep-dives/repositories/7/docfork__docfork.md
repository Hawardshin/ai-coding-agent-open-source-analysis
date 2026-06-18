# docfork/docfork 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 149 files, 44 directories.

## 요약

- 조사 단위: `sources/docfork__docfork` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 149 files, 44 directories, depth score 111, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=plugins/cursor/docfork/.mcp.json, plugins/claude/docfork/.mcp.json, packages/mcp/.npmrc이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | docfork/docfork |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/docfork__docfork](../../../../sources/docfork__docfork) |
| 기존 보고서 | [reports/clone-structures/docfork__docfork.md](../../../clone-structures/docfork__docfork.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 149 / 44 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .claude-plugin, .cursor-plugin, .dgrep, .github, packages, plugins, scripts |
| 상위 확장자 | .ts: 75, .json: 21, .md: 21, (none): 14, .mjs: 3, .yaml: 3, .yml: 3, .mdc: 2, .png: 2, .svg: 2, .gif: 1, .sh: 1 |
| 소스 패턴 | monorepo/workspace, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/mcp | packages workspace | 31 |
| packages/dgrep | packages workspace | 30 |
| packages/sdk | packages workspace | 8 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | preinstall | npx only-allow pnpm |
| build | package.json | build | turbo run build |
| serve-dev | package.json | dev | turbo run dev |
| serve-dev | package.json | start | turbo run start |
| serve-dev | package.json | start:stdio | turbo run start:stdio |
| quality | package.json | lint | turbo run lint |
| quality | package.json | lint:check | turbo run lint:check |
| quality | package.json | format | turbo run format |
| quality | package.json | format:check | turbo run format:check |
| quality | package.json | typecheck | turbo run typecheck |
| test | package.json | test | turbo run test |
| utility | package.json | clean | turbo run clean && rm -rf node_modules |


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
| mcp | [plugins/cursor/docfork/.mcp.json](../../../../sources/docfork__docfork/plugins/cursor/docfork/.mcp.json) | mcp signal |
| mcp | [plugins/claude/docfork/.mcp.json](../../../../sources/docfork__docfork/plugins/claude/docfork/.mcp.json) | mcp signal |
| mcp | [packages/mcp/.npmrc](../../../../sources/docfork__docfork/packages/mcp/.npmrc) | mcp signal |
| mcp | [packages/mcp/.prettierignore](../../../../sources/docfork__docfork/packages/mcp/.prettierignore) | mcp signal |
| agentRuntime | [plugins/cursor/docfork/skills/docfork-docs/SKILL.md](../../../../sources/docfork__docfork/plugins/cursor/docfork/skills/docfork-docs/SKILL.md) | agentRuntime signal |
| agentRuntime | [plugins/cursor/docfork/agents/docs-researcher.md](../../../../sources/docfork__docfork/plugins/cursor/docfork/agents/docs-researcher.md) | agentRuntime signal |
| agentRuntime | [plugins/claude/docfork/skills/docfork-docs/SKILL.md](../../../../sources/docfork__docfork/plugins/claude/docfork/skills/docfork-docs/SKILL.md) | agentRuntime signal |
| agentRuntime | [plugins/claude/docfork/agents/docs-researcher.md](../../../../sources/docfork__docfork/plugins/claude/docfork/agents/docs-researcher.md) | agentRuntime signal |
| entrypoints | [packages/sdk/src/index.ts](../../../../sources/docfork__docfork/packages/sdk/src/index.ts) | entrypoints signal |
| entrypoints | [packages/mcp/server.json](../../../../sources/docfork__docfork/packages/mcp/server.json) | entrypoints signal |
| entrypoints | [packages/mcp/src/index.ts](../../../../sources/docfork__docfork/packages/mcp/src/index.ts) | entrypoints signal |
| entrypoints | [packages/dgrep/src/index.ts](../../../../sources/docfork__docfork/packages/dgrep/src/index.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [packages/sdk/src/index.ts](../../../../sources/docfork__docfork/packages/sdk/src/index.ts)<br>[packages/mcp/server.json](../../../../sources/docfork__docfork/packages/mcp/server.json)<br>[packages/mcp/src/index.ts](../../../../sources/docfork__docfork/packages/mcp/src/index.ts)<br>[packages/dgrep/src/index.ts](../../../../sources/docfork__docfork/packages/dgrep/src/index.ts) |
| agentRuntime | 6 | [plugins/cursor/docfork/skills/docfork-docs/SKILL.md](../../../../sources/docfork__docfork/plugins/cursor/docfork/skills/docfork-docs/SKILL.md)<br>[plugins/cursor/docfork/agents/docs-researcher.md](../../../../sources/docfork__docfork/plugins/cursor/docfork/agents/docs-researcher.md)<br>[plugins/claude/docfork/skills/docfork-docs/SKILL.md](../../../../sources/docfork__docfork/plugins/claude/docfork/skills/docfork-docs/SKILL.md)<br>[plugins/claude/docfork/agents/docs-researcher.md](../../../../sources/docfork__docfork/plugins/claude/docfork/agents/docs-researcher.md)<br>[packages/dgrep/test/lib/agents.test.ts](../../../../sources/docfork__docfork/packages/dgrep/test/lib/agents.test.ts)<br>[packages/dgrep/src/lib/agents.ts](../../../../sources/docfork__docfork/packages/dgrep/src/lib/agents.ts) |
| mcp | 25 | [plugins/cursor/docfork/.mcp.json](../../../../sources/docfork__docfork/plugins/cursor/docfork/.mcp.json)<br>[plugins/claude/docfork/.mcp.json](../../../../sources/docfork__docfork/plugins/claude/docfork/.mcp.json)<br>[packages/mcp/.npmrc](../../../../sources/docfork__docfork/packages/mcp/.npmrc)<br>[packages/mcp/.prettierignore](../../../../sources/docfork__docfork/packages/mcp/.prettierignore)<br>[packages/mcp/CHANGELOG.md](../../../../sources/docfork__docfork/packages/mcp/CHANGELOG.md)<br>[packages/mcp/Dockerfile](../../../../sources/docfork__docfork/packages/mcp/Dockerfile)<br>[packages/mcp/gemini-extension.json](../../../../sources/docfork__docfork/packages/mcp/gemini-extension.json)<br>[packages/mcp/glama.json](../../../../sources/docfork__docfork/packages/mcp/glama.json) |
| retrieval | 4 | [packages/sdk/src/index.ts](../../../../sources/docfork__docfork/packages/sdk/src/index.ts)<br>[packages/mcp/src/index.ts](../../../../sources/docfork__docfork/packages/mcp/src/index.ts)<br>[packages/mcp/src/api/index.ts](../../../../sources/docfork__docfork/packages/mcp/src/api/index.ts)<br>[packages/dgrep/src/index.ts](../../../../sources/docfork__docfork/packages/dgrep/src/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 23 | [packages/sdk/smoke.test.ts](../../../../sources/docfork__docfork/packages/sdk/smoke.test.ts)<br>[packages/sdk/src/errors.test.ts](../../../../sources/docfork__docfork/packages/sdk/src/errors.test.ts)<br>[packages/sdk/src/pagination.test.ts](../../../../sources/docfork__docfork/packages/sdk/src/pagination.test.ts)<br>[packages/dgrep/test/setup.ts](../../../../sources/docfork__docfork/packages/dgrep/test/setup.ts)<br>[packages/dgrep/test/mocks/handlers.ts](../../../../sources/docfork__docfork/packages/dgrep/test/mocks/handlers.ts)<br>[packages/dgrep/test/lib/agents.test.ts](../../../../sources/docfork__docfork/packages/dgrep/test/lib/agents.test.ts)<br>[packages/dgrep/test/lib/api-client.test.ts](../../../../sources/docfork__docfork/packages/dgrep/test/lib/api-client.test.ts)<br>[packages/dgrep/test/lib/auth.test.ts](../../../../sources/docfork__docfork/packages/dgrep/test/lib/auth.test.ts) |
| security | 3 | [SECURITY.md](../../../../sources/docfork__docfork/SECURITY.md)<br>[packages/dgrep/test/lib/auth.test.ts](../../../../sources/docfork__docfork/packages/dgrep/test/lib/auth.test.ts)<br>[packages/dgrep/src/lib/auth.ts](../../../../sources/docfork__docfork/packages/dgrep/src/lib/auth.ts) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/docfork__docfork/.github/workflows/ci.yml)<br>[.github/workflows/release-please.yml](../../../../sources/docfork__docfork/.github/workflows/release-please.yml)<br>[.github/workflows/release.yml](../../../../sources/docfork__docfork/.github/workflows/release.yml) |
| container | 1 | [packages/mcp/Dockerfile](../../../../sources/docfork__docfork/packages/mcp/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/docfork__docfork/CLAUDE.md) |
| docs | 7 | [README.md](../../../../sources/docfork__docfork/README.md)<br>[plugins/cursor/docfork/README.md](../../../../sources/docfork__docfork/plugins/cursor/docfork/README.md)<br>[plugins/claude/docfork/README.md](../../../../sources/docfork__docfork/plugins/claude/docfork/README.md)<br>[packages/sdk/README.md](../../../../sources/docfork__docfork/packages/sdk/README.md)<br>[packages/mcp/README.md](../../../../sources/docfork__docfork/packages/mcp/README.md)<br>[packages/dgrep/README.md](../../../../sources/docfork__docfork/packages/dgrep/README.md)<br>[packages/dgrep/docs/testing-strategy.md](../../../../sources/docfork__docfork/packages/dgrep/docs/testing-strategy.md) |
| config | 9 | [package.json](../../../../sources/docfork__docfork/package.json)<br>[pnpm-workspace.yaml](../../../../sources/docfork__docfork/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/docfork__docfork/turbo.json)<br>[packages/sdk/package.json](../../../../sources/docfork__docfork/packages/sdk/package.json)<br>[packages/sdk/tsconfig.json](../../../../sources/docfork__docfork/packages/sdk/tsconfig.json)<br>[packages/mcp/package.json](../../../../sources/docfork__docfork/packages/mcp/package.json)<br>[packages/mcp/tsconfig.json](../../../../sources/docfork__docfork/packages/mcp/tsconfig.json)<br>[packages/dgrep/package.json](../../../../sources/docfork__docfork/packages/dgrep/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 23 | [packages/sdk/smoke.test.ts](../../../../sources/docfork__docfork/packages/sdk/smoke.test.ts)<br>[packages/sdk/src/errors.test.ts](../../../../sources/docfork__docfork/packages/sdk/src/errors.test.ts)<br>[packages/sdk/src/pagination.test.ts](../../../../sources/docfork__docfork/packages/sdk/src/pagination.test.ts)<br>[packages/dgrep/test/setup.ts](../../../../sources/docfork__docfork/packages/dgrep/test/setup.ts)<br>[packages/dgrep/test/mocks/handlers.ts](../../../../sources/docfork__docfork/packages/dgrep/test/mocks/handlers.ts)<br>[packages/dgrep/test/lib/agents.test.ts](../../../../sources/docfork__docfork/packages/dgrep/test/lib/agents.test.ts) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/docfork__docfork/.github/workflows/ci.yml)<br>[.github/workflows/release-please.yml](../../../../sources/docfork__docfork/.github/workflows/release-please.yml)<br>[.github/workflows/release.yml](../../../../sources/docfork__docfork/.github/workflows/release.yml) |
| 컨테이너/배포 | 1 | [packages/mcp/Dockerfile](../../../../sources/docfork__docfork/packages/mcp/Dockerfile) |
| 보안/정책 | 3 | [SECURITY.md](../../../../sources/docfork__docfork/SECURITY.md)<br>[packages/dgrep/test/lib/auth.test.ts](../../../../sources/docfork__docfork/packages/dgrep/test/lib/auth.test.ts)<br>[packages/dgrep/src/lib/auth.ts](../../../../sources/docfork__docfork/packages/dgrep/src/lib/auth.ts) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/docfork__docfork/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `plugins/cursor/docfork/.mcp.json`, `plugins/claude/docfork/.mcp.json`, `packages/mcp/.npmrc`.
2. entrypoint를 따라 실행 흐름 확인: `packages/sdk/src/index.ts`, `packages/mcp/server.json`, `packages/mcp/src/index.ts`.
3. agent/tool runtime 매핑: `plugins/cursor/docfork/skills/docfork-docs/SKILL.md`, `plugins/cursor/docfork/agents/docs-researcher.md`, `plugins/claude/docfork/skills/docfork-docs/SKILL.md`.
4. retrieval/memory/indexing 확인: `packages/sdk/src/index.ts`, `packages/mcp/src/index.ts`, `packages/mcp/src/api/index.ts`.
5. test/eval 파일로 동작 검증: `packages/sdk/smoke.test.ts`, `packages/sdk/src/errors.test.ts`, `packages/sdk/src/pagination.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 149 files, 44 directories.. 핵심 구조 신호는 package.json, README.md, CLAUDE.md, LICENSE, tests, ci이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
