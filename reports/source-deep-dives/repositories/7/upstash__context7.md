# upstash/context7 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 322 files, 103 directories.

## 요약

- 조사 단위: `sources/upstash__context7` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 322 files, 103 directories, depth score 117, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=skills/context7-mcp/SKILL.md, rules/context7-mcp.md, plugins/cursor/context7/mcp.json이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | upstash/context7 |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 57572 |
| Forks | 2714 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/upstash__context7](../../../../sources/upstash__context7) |
| 기존 보고서 | [reports/global-trending/repositories/upstash__context7.md](../../../global-trending/repositories/upstash__context7.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 322 / 103 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .changeset, .claude-plugin, .github, docs, i18n, packages, plugins, public, rules, skills |
| 상위 확장자 | .ts: 92, .md: 57, .mdx: 55, .png: 48, .json: 29, (none): 11, .yml: 9, .js: 6, .svg: 5, .mjs: 3, .yaml: 3, .example: 1 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 38 |
| packages/mcp | packages workspace | 37 |
| packages/tools-ai-sdk | packages workspace | 28 |
| packages/cli | packages workspace | 24 |
| packages/sdk | packages workspace | 16 |
| packages/pi | packages workspace | 7 |
| .github | ci surface | 1 |
| i18n | top-level component | 1 |
| packages | source boundary | 1 |
| plugins | top-level component | 1 |
| public | top-level component | 1 |
| rules | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | pnpm -r run build |
| build | package.json | build:sdk | pnpm --filter @upstash/context7-sdk build |
| build | package.json | build:mcp | pnpm --filter @upstash/context7-mcp build |
| build | package.json | build:ai-sdk | pnpm --filter @upstash/context7-tools-ai-sdk build |
| quality | package.json | typecheck | pnpm -r run typecheck |
| test | package.json | test | pnpm -r run test |
| test | package.json | test:sdk | pnpm --filter @upstash/context7-sdk test |
| test | package.json | test:tools-ai-sdk | pnpm --filter @upstash/context7-tools-ai-sdk test |
| utility | package.json | clean | pnpm -r run clean && rm -rf node_modules |
| quality | package.json | lint | pnpm -r run lint |
| quality | package.json | lint:check | pnpm -r run lint:check |
| quality | package.json | format | pnpm -r run format |
| quality | package.json | format:check | pnpm -r run format:check |
| build | package.json | release | pnpm build && changeset publish |
| build | package.json | release:snapshot | changeset version --snapshot canary && pnpm build && changeset publish --tag canary --no-git-tag |


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
| mcp | [skills/context7-mcp/SKILL.md](../../../../sources/upstash__context7/skills/context7-mcp/SKILL.md) | mcp signal |
| mcp | [rules/context7-mcp.md](../../../../sources/upstash__context7/rules/context7-mcp.md) | mcp signal |
| mcp | [plugins/cursor/context7/mcp.json](../../../../sources/upstash__context7/plugins/cursor/context7/mcp.json) | mcp signal |
| mcp | [plugins/cursor/context7/skills/context7-mcp/SKILL.md](../../../../sources/upstash__context7/plugins/cursor/context7/skills/context7-mcp/SKILL.md) | mcp signal |
| agentRuntime | [skills/find-docs/SKILL.md](../../../../sources/upstash__context7/skills/find-docs/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/context7-cli/SKILL.md](../../../../sources/upstash__context7/skills/context7-cli/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/context7-cli/references/docs.md](../../../../sources/upstash__context7/skills/context7-cli/references/docs.md) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/upstash__context7/server.json) | entrypoints signal |
| entrypoints | [packages/tools-ai-sdk/src/index.test.ts](../../../../sources/upstash__context7/packages/tools-ai-sdk/src/index.test.ts) | entrypoints signal |
| entrypoints | [packages/tools-ai-sdk/src/index.ts](../../../../sources/upstash__context7/packages/tools-ai-sdk/src/index.ts) | entrypoints signal |
| entrypoints | [packages/mcp/src/index.ts](../../../../sources/upstash__context7/packages/mcp/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/upstash__context7/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [server.json](../../../../sources/upstash__context7/server.json)<br>[packages/tools-ai-sdk/src/index.test.ts](../../../../sources/upstash__context7/packages/tools-ai-sdk/src/index.test.ts)<br>[packages/tools-ai-sdk/src/index.ts](../../../../sources/upstash__context7/packages/tools-ai-sdk/src/index.ts)<br>[packages/mcp/src/index.ts](../../../../sources/upstash__context7/packages/mcp/src/index.ts)<br>[packages/cli/src/index.ts](../../../../sources/upstash__context7/packages/cli/src/index.ts) |
| agentRuntime | 40 | [skills/find-docs/SKILL.md](../../../../sources/upstash__context7/skills/find-docs/SKILL.md)<br>[skills/context7-mcp/SKILL.md](../../../../sources/upstash__context7/skills/context7-mcp/SKILL.md)<br>[skills/context7-cli/SKILL.md](../../../../sources/upstash__context7/skills/context7-cli/SKILL.md)<br>[skills/context7-cli/references/docs.md](../../../../sources/upstash__context7/skills/context7-cli/references/docs.md)<br>[skills/context7-cli/references/setup.md](../../../../sources/upstash__context7/skills/context7-cli/references/setup.md)<br>[skills/context7-cli/references/skills.md](../../../../sources/upstash__context7/skills/context7-cli/references/skills.md)<br>[plugins/cursor/context7/skills/context7-mcp/SKILL.md](../../../../sources/upstash__context7/plugins/cursor/context7/skills/context7-mcp/SKILL.md)<br>[plugins/cursor/context7/agents/docs-researcher.md](../../../../sources/upstash__context7/plugins/cursor/context7/agents/docs-researcher.md) |
| mcp | 44 | [skills/context7-mcp/SKILL.md](../../../../sources/upstash__context7/skills/context7-mcp/SKILL.md)<br>[rules/context7-mcp.md](../../../../sources/upstash__context7/rules/context7-mcp.md)<br>[plugins/cursor/context7/mcp.json](../../../../sources/upstash__context7/plugins/cursor/context7/mcp.json)<br>[plugins/cursor/context7/skills/context7-mcp/SKILL.md](../../../../sources/upstash__context7/plugins/cursor/context7/skills/context7-mcp/SKILL.md)<br>[plugins/copilot/context7/.mcp.json](../../../../sources/upstash__context7/plugins/copilot/context7/.mcp.json)<br>[plugins/copilot/context7/skills/context7-mcp/SKILL.md](../../../../sources/upstash__context7/plugins/copilot/context7/skills/context7-mcp/SKILL.md)<br>[plugins/context7-power/mcp.json](../../../../sources/upstash__context7/plugins/context7-power/mcp.json)<br>[plugins/claude/context7/.mcp.json](../../../../sources/upstash__context7/plugins/claude/context7/.mcp.json) |
| retrieval | 15 | [packages/tools-ai-sdk/src/index.test.ts](../../../../sources/upstash__context7/packages/tools-ai-sdk/src/index.test.ts)<br>[packages/tools-ai-sdk/src/index.ts](../../../../sources/upstash__context7/packages/tools-ai-sdk/src/index.ts)<br>[packages/tools-ai-sdk/src/tools/index.ts](../../../../sources/upstash__context7/packages/tools-ai-sdk/src/tools/index.ts)<br>[packages/tools-ai-sdk/src/prompts/index.ts](../../../../sources/upstash__context7/packages/tools-ai-sdk/src/prompts/index.ts)<br>[packages/tools-ai-sdk/src/agents/index.ts](../../../../sources/upstash__context7/packages/tools-ai-sdk/src/agents/index.ts)<br>[packages/sdk/src/http/index.test.ts](../../../../sources/upstash__context7/packages/sdk/src/http/index.test.ts)<br>[packages/sdk/src/http/index.ts](../../../../sources/upstash__context7/packages/sdk/src/http/index.ts)<br>[packages/sdk/src/error/index.ts](../../../../sources/upstash__context7/packages/sdk/src/error/index.ts) |
| spec | 1 | [docs/images/on-premise-architecture.png](../../../../sources/upstash__context7/docs/images/on-premise-architecture.png) |
| eval | 21 | [packages/tools-ai-sdk/src/index.test.ts](../../../../sources/upstash__context7/packages/tools-ai-sdk/src/index.test.ts)<br>[packages/sdk/src/client.test.ts](../../../../sources/upstash__context7/packages/sdk/src/client.test.ts)<br>[packages/sdk/src/utils/test-utils.ts](../../../../sources/upstash__context7/packages/sdk/src/utils/test-utils.ts)<br>[packages/sdk/src/http/index.test.ts](../../../../sources/upstash__context7/packages/sdk/src/http/index.test.ts)<br>[packages/sdk/src/commands/search-library/index.test.ts](../../../../sources/upstash__context7/packages/sdk/src/commands/search-library/index.test.ts)<br>[packages/sdk/src/commands/get-context/index.test.ts](../../../../sources/upstash__context7/packages/sdk/src/commands/get-context/index.test.ts)<br>[packages/pi/__tests__/extension.test.ts](../../../../sources/upstash__context7/packages/pi/__tests__/extension.test.ts)<br>[packages/mcp/tsconfig.test.json](../../../../sources/upstash__context7/packages/mcp/tsconfig.test.json) |
| security | 17 | [SECURITY.md](../../../../sources/upstash__context7/SECURITY.md)<br>[packages/mcp/src/lib/auth/auth-prompt.ts](../../../../sources/upstash__context7/packages/mcp/src/lib/auth/auth-prompt.ts)<br>[packages/cli/src/utils/auth.ts](../../../../sources/upstash__context7/packages/cli/src/utils/auth.ts)<br>[packages/cli/src/commands/auth.ts](../../../../sources/upstash__context7/packages/cli/src/commands/auth.ts)<br>[packages/cli/src/__tests__/auth-commands.test.ts](../../../../sources/upstash__context7/packages/cli/src/__tests__/auth-commands.test.ts)<br>[packages/cli/src/__tests__/auth-utils.test.ts](../../../../sources/upstash__context7/packages/cli/src/__tests__/auth-utils.test.ts)<br>[docs/security/auth-and-access-control.mdx](../../../../sources/upstash__context7/docs/security/auth-and-access-control.mdx)<br>[docs/security/best-practices.mdx](../../../../sources/upstash__context7/docs/security/best-practices.mdx) |
| ci | 5 | [.github/workflows/canary-release.yml](../../../../sources/upstash__context7/.github/workflows/canary-release.yml)<br>[.github/workflows/ecr-deploy.yml](../../../../sources/upstash__context7/.github/workflows/ecr-deploy.yml)<br>[.github/workflows/mcp-registry.yml](../../../../sources/upstash__context7/.github/workflows/mcp-registry.yml)<br>[.github/workflows/release.yml](../../../../sources/upstash__context7/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/upstash__context7/.github/workflows/test.yml) |
| container | 3 | [packages/mcp/Dockerfile](../../../../sources/upstash__context7/packages/mcp/Dockerfile)<br>[docs/enterprise/deployment/docker.mdx](../../../../sources/upstash__context7/docs/enterprise/deployment/docker.mdx)<br>[docs/enterprise/deployment/kubernetes.mdx](../../../../sources/upstash__context7/docs/enterprise/deployment/kubernetes.mdx) |
| instruction | 0 | 명확하지 않음 |
| docs | 132 | [README.md](../../../../sources/upstash__context7/README.md)<br>[plugins/cursor/context7/README.md](../../../../sources/upstash__context7/plugins/cursor/context7/README.md)<br>[plugins/copilot/context7/README.md](../../../../sources/upstash__context7/plugins/copilot/context7/README.md)<br>[plugins/claude/context7/README.md](../../../../sources/upstash__context7/plugins/claude/context7/README.md)<br>[packages/tools-ai-sdk/README.md](../../../../sources/upstash__context7/packages/tools-ai-sdk/README.md)<br>[packages/sdk/README.md](../../../../sources/upstash__context7/packages/sdk/README.md)<br>[packages/pi/README.md](../../../../sources/upstash__context7/packages/pi/README.md)<br>[packages/mcp/README.md](../../../../sources/upstash__context7/packages/mcp/README.md) |
| config | 13 | [package.json](../../../../sources/upstash__context7/package.json)<br>[pnpm-workspace.yaml](../../../../sources/upstash__context7/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/upstash__context7/tsconfig.json)<br>[packages/tools-ai-sdk/package.json](../../../../sources/upstash__context7/packages/tools-ai-sdk/package.json)<br>[packages/tools-ai-sdk/tsconfig.json](../../../../sources/upstash__context7/packages/tools-ai-sdk/tsconfig.json)<br>[packages/sdk/package.json](../../../../sources/upstash__context7/packages/sdk/package.json)<br>[packages/sdk/tsconfig.json](../../../../sources/upstash__context7/packages/sdk/tsconfig.json)<br>[packages/pi/package.json](../../../../sources/upstash__context7/packages/pi/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 21 | [packages/tools-ai-sdk/src/index.test.ts](../../../../sources/upstash__context7/packages/tools-ai-sdk/src/index.test.ts)<br>[packages/sdk/src/client.test.ts](../../../../sources/upstash__context7/packages/sdk/src/client.test.ts)<br>[packages/sdk/src/utils/test-utils.ts](../../../../sources/upstash__context7/packages/sdk/src/utils/test-utils.ts)<br>[packages/sdk/src/http/index.test.ts](../../../../sources/upstash__context7/packages/sdk/src/http/index.test.ts)<br>[packages/sdk/src/commands/search-library/index.test.ts](../../../../sources/upstash__context7/packages/sdk/src/commands/search-library/index.test.ts)<br>[packages/sdk/src/commands/get-context/index.test.ts](../../../../sources/upstash__context7/packages/sdk/src/commands/get-context/index.test.ts) |
| CI workflow | 5 | [.github/workflows/canary-release.yml](../../../../sources/upstash__context7/.github/workflows/canary-release.yml)<br>[.github/workflows/ecr-deploy.yml](../../../../sources/upstash__context7/.github/workflows/ecr-deploy.yml)<br>[.github/workflows/mcp-registry.yml](../../../../sources/upstash__context7/.github/workflows/mcp-registry.yml)<br>[.github/workflows/release.yml](../../../../sources/upstash__context7/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/upstash__context7/.github/workflows/test.yml) |
| 컨테이너/배포 | 3 | [packages/mcp/Dockerfile](../../../../sources/upstash__context7/packages/mcp/Dockerfile)<br>[docs/enterprise/deployment/docker.mdx](../../../../sources/upstash__context7/docs/enterprise/deployment/docker.mdx)<br>[docs/enterprise/deployment/kubernetes.mdx](../../../../sources/upstash__context7/docs/enterprise/deployment/kubernetes.mdx) |
| 보안/정책 | 17 | [SECURITY.md](../../../../sources/upstash__context7/SECURITY.md)<br>[packages/mcp/src/lib/auth/auth-prompt.ts](../../../../sources/upstash__context7/packages/mcp/src/lib/auth/auth-prompt.ts)<br>[packages/cli/src/utils/auth.ts](../../../../sources/upstash__context7/packages/cli/src/utils/auth.ts)<br>[packages/cli/src/commands/auth.ts](../../../../sources/upstash__context7/packages/cli/src/commands/auth.ts)<br>[packages/cli/src/__tests__/auth-commands.test.ts](../../../../sources/upstash__context7/packages/cli/src/__tests__/auth-commands.test.ts)<br>[packages/cli/src/__tests__/auth-utils.test.ts](../../../../sources/upstash__context7/packages/cli/src/__tests__/auth-utils.test.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `skills/context7-mcp/SKILL.md`, `rules/context7-mcp.md`, `plugins/cursor/context7/mcp.json`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `packages/tools-ai-sdk/src/index.test.ts`, `packages/tools-ai-sdk/src/index.ts`.
3. agent/tool runtime 매핑: `skills/find-docs/SKILL.md`, `skills/context7-mcp/SKILL.md`, `skills/context7-cli/SKILL.md`.
4. retrieval/memory/indexing 확인: `packages/tools-ai-sdk/src/index.test.ts`, `packages/tools-ai-sdk/src/index.ts`, `packages/tools-ai-sdk/src/tools/index.ts`.
5. test/eval 파일로 동작 검증: `packages/tools-ai-sdk/src/index.test.ts`, `packages/sdk/src/client.test.ts`, `packages/sdk/src/utils/test-utils.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 322 files, 103 directories.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, tests, ci이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 큰 메타데이터 위험이 명확하지 않음입니다.
