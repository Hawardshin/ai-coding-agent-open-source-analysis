# nanocoai/nanoclaw 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

A lightweight alternative to OpenClaw that runs in containers for security. Connects to WhatsApp, Telegram, Slack, Discord, Gmail and other messaging apps,, has memory, scheduled jobs, and runs directly on Anthropic's Agents SDK

## 요약

- 조사 단위: `sources/nanocoai__nanoclaw` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 560 files, 116 directories, depth score 123, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, container/agent-runner/src/mcp-tools/agents.instructions.md, container/agent-runner/src/mcp-tools/agents.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | nanocoai/nanoclaw |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 29904 |
| Forks | 12880 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/nanocoai__nanoclaw](../../../../sources/nanocoai__nanoclaw) |
| 기존 보고서 | [reports/global-trending/repositories/nanocoai__nanoclaw.md](../../../global-trending/repositories/nanocoai__nanoclaw.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 560 / 116 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .claude, .github, .husky, assets, bin, config-examples, container, docs, groups, launchd, repo-tokens, scripts, setup, src |
| 상위 확장자 | .ts: 323, .md: 151, .sh: 40, (none): 10, .json: 9, .png: 5, .svg: 5, .yml: 5, .lock: 2, .yaml: 2, .example: 1, .html: 1 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 71 |
| docs | documentation surface | 39 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| bin | top-level component | 1 |
| config-examples | top-level component | 1 |
| container | top-level component | 1 |
| groups | top-level component | 1 |
| launchd | top-level component | 1 |
| repo-tokens | top-level component | 1 |
| scripts | top-level component | 1 |
| setup | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| serve-dev | package.json | start | node dist/index.js |
| serve-dev | package.json | dev | tsx src/index.ts |
| quality | package.json | typecheck | tsc --noEmit |
| quality | package.json | format | prettier --write "src/**/*.ts" |
| quality | package.json | format:fix | prettier --write "src/**/*.ts" |
| quality | package.json | format:check | prettier --check "src/**/*.ts" |
| utility | package.json | prepare | husky |
| utility | package.json | setup | tsx setup/index.ts |
| utility | package.json | setup:auto | tsx setup/auto.ts |
| utility | package.json | ncl | tsx src/cli/client.ts |
| utility | package.json | chat | tsx scripts/chat.ts |
| utility | package.json | auth | tsx src/whatsapp-auth.ts |
| quality | package.json | lint | eslint src/ |
| quality | package.json | lint:fix | eslint src/ --fix |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| entrypoint | package.json bin | ncl | bin/ncl |


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
| mcp | [.mcp.json](../../../../sources/nanocoai__nanoclaw/.mcp.json) | mcp signal |
| mcp | [container/agent-runner/src/mcp-tools/agents.instructions.md](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/agents.instructions.md) | mcp signal |
| mcp | [container/agent-runner/src/mcp-tools/agents.ts](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/agents.ts) | mcp signal |
| mcp | [container/agent-runner/src/mcp-tools/cli.instructions.md](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/cli.instructions.md) | mcp signal |
| agentRuntime | [src/modules/self-mod/agent.md](../../../../sources/nanocoai__nanoclaw/src/modules/self-mod/agent.md) | agentRuntime signal |
| agentRuntime | [src/modules/permissions/db/agent-group-members.ts](../../../../sources/nanocoai__nanoclaw/src/modules/permissions/db/agent-group-members.ts) | agentRuntime signal |
| agentRuntime | [src/modules/interactive/agent.md](../../../../sources/nanocoai__nanoclaw/src/modules/interactive/agent.md) | agentRuntime signal |
| agentRuntime | [src/modules/approvals/agent.md](../../../../sources/nanocoai__nanoclaw/src/modules/approvals/agent.md) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/nanocoai__nanoclaw/src/index.ts) | entrypoints signal |
| entrypoints | [container/agent-runner/src/index.ts](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/index.ts) | entrypoints signal |
| entrypoints | [container/agent-runner/src/mcp-tools/server.ts](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/server.ts) | entrypoints signal |
| entrypoints | [bin/ncl](../../../../sources/nanocoai__nanoclaw/bin/ncl) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [src/index.ts](../../../../sources/nanocoai__nanoclaw/src/index.ts)<br>[container/agent-runner/src/index.ts](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/index.ts)<br>[container/agent-runner/src/mcp-tools/server.ts](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/server.ts)<br>[bin/ncl](../../../../sources/nanocoai__nanoclaw/bin/ncl) |
| agentRuntime | 198 | [src/modules/self-mod/agent.md](../../../../sources/nanocoai__nanoclaw/src/modules/self-mod/agent.md)<br>[src/modules/permissions/db/agent-group-members.ts](../../../../sources/nanocoai__nanoclaw/src/modules/permissions/db/agent-group-members.ts)<br>[src/modules/interactive/agent.md](../../../../sources/nanocoai__nanoclaw/src/modules/interactive/agent.md)<br>[src/modules/approvals/agent.md](../../../../sources/nanocoai__nanoclaw/src/modules/approvals/agent.md)<br>[src/modules/agent-to-agent/agent-route.test.ts](../../../../sources/nanocoai__nanoclaw/src/modules/agent-to-agent/agent-route.test.ts)<br>[src/modules/agent-to-agent/agent-route.ts](../../../../sources/nanocoai__nanoclaw/src/modules/agent-to-agent/agent-route.ts)<br>[src/modules/agent-to-agent/create-agent.test.ts](../../../../sources/nanocoai__nanoclaw/src/modules/agent-to-agent/create-agent.test.ts)<br>[src/modules/agent-to-agent/create-agent.ts](../../../../sources/nanocoai__nanoclaw/src/modules/agent-to-agent/create-agent.ts) |
| mcp | 18 | [.mcp.json](../../../../sources/nanocoai__nanoclaw/.mcp.json)<br>[container/agent-runner/src/mcp-tools/agents.instructions.md](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/agents.instructions.md)<br>[container/agent-runner/src/mcp-tools/agents.ts](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/agents.ts)<br>[container/agent-runner/src/mcp-tools/cli.instructions.md](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/cli.instructions.md)<br>[container/agent-runner/src/mcp-tools/core.instructions.md](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/core.instructions.md)<br>[container/agent-runner/src/mcp-tools/core.test.ts](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/core.test.ts)<br>[container/agent-runner/src/mcp-tools/core.ts](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/core.ts)<br>[container/agent-runner/src/mcp-tools/index.ts](../../../../sources/nanocoai__nanoclaw/container/agent-runner/src/mcp-tools/index.ts) |
| retrieval | 32 | [src/index.ts](../../../../sources/nanocoai__nanoclaw/src/index.ts)<br>[src/providers/index.ts](../../../../sources/nanocoai__nanoclaw/src/providers/index.ts)<br>[src/modules/index.ts](../../../../sources/nanocoai__nanoclaw/src/modules/index.ts)<br>[src/modules/typing/index.test.ts](../../../../sources/nanocoai__nanoclaw/src/modules/typing/index.test.ts)<br>[src/modules/typing/index.ts](../../../../sources/nanocoai__nanoclaw/src/modules/typing/index.ts)<br>[src/modules/self-mod/index.ts](../../../../sources/nanocoai__nanoclaw/src/modules/self-mod/index.ts)<br>[src/modules/scheduling/index.ts](../../../../sources/nanocoai__nanoclaw/src/modules/scheduling/index.ts)<br>[src/modules/permissions/index.ts](../../../../sources/nanocoai__nanoclaw/src/modules/permissions/index.ts) |
| spec | 5 | [docs/architecture-diagram.html](../../../../sources/nanocoai__nanoclaw/docs/architecture-diagram.html)<br>[docs/architecture-diagram.md](../../../../sources/nanocoai__nanoclaw/docs/architecture-diagram.md)<br>[docs/architecture.md](../../../../sources/nanocoai__nanoclaw/docs/architecture.md)<br>[docs/REQUIREMENTS.md](../../../../sources/nanocoai__nanoclaw/docs/REQUIREMENTS.md)<br>[docs/SPEC.md](../../../../sources/nanocoai__nanoclaw/docs/SPEC.md) |
| eval | 89 | [src/attachment-naming.test.ts](../../../../sources/nanocoai__nanoclaw/src/attachment-naming.test.ts)<br>[src/circuit-breaker.test.ts](../../../../sources/nanocoai__nanoclaw/src/circuit-breaker.test.ts)<br>[src/container-restart.test.ts](../../../../sources/nanocoai__nanoclaw/src/container-restart.test.ts)<br>[src/container-runner.test.ts](../../../../sources/nanocoai__nanoclaw/src/container-runner.test.ts)<br>[src/container-runtime.test.ts](../../../../sources/nanocoai__nanoclaw/src/container-runtime.test.ts)<br>[src/delivery-actions.test.ts](../../../../sources/nanocoai__nanoclaw/src/delivery-actions.test.ts)<br>[src/delivery.test.ts](../../../../sources/nanocoai__nanoclaw/src/delivery.test.ts)<br>[src/group-folder.test.ts](../../../../sources/nanocoai__nanoclaw/src/group-folder.test.ts) |
| security | 7 | [src/modules/mount-security/index.ts](../../../../sources/nanocoai__nanoclaw/src/modules/mount-security/index.ts)<br>[setup/auth.ts](../../../../sources/nanocoai__nanoclaw/setup/auth.ts)<br>[setup/provider-auth.ts](../../../../sources/nanocoai__nanoclaw/setup/provider-auth.ts)<br>[setup/signal-auth.ts](../../../../sources/nanocoai__nanoclaw/setup/signal-auth.ts)<br>[setup/whatsapp-auth.ts](../../../../sources/nanocoai__nanoclaw/setup/whatsapp-auth.ts)<br>[setup/migrate-v2/channel-auth.ts](../../../../sources/nanocoai__nanoclaw/setup/migrate-v2/channel-auth.ts)<br>[docs/SECURITY.md](../../../../sources/nanocoai__nanoclaw/docs/SECURITY.md) |
| ci | 4 | [.github/workflows/bump-version.yml](../../../../sources/nanocoai__nanoclaw/.github/workflows/bump-version.yml)<br>[.github/workflows/ci.yml](../../../../sources/nanocoai__nanoclaw/.github/workflows/ci.yml)<br>[.github/workflows/label-pr.yml](../../../../sources/nanocoai__nanoclaw/.github/workflows/label-pr.yml)<br>[.github/workflows/update-tokens.yml](../../../../sources/nanocoai__nanoclaw/.github/workflows/update-tokens.yml) |
| container | 1 | [container/Dockerfile](../../../../sources/nanocoai__nanoclaw/container/Dockerfile) |
| instruction | 4 | [CLAUDE.md](../../../../sources/nanocoai__nanoclaw/CLAUDE.md)<br>[groups/main/CLAUDE.md](../../../../sources/nanocoai__nanoclaw/groups/main/CLAUDE.md)<br>[groups/global/CLAUDE.md](../../../../sources/nanocoai__nanoclaw/groups/global/CLAUDE.md)<br>[container/CLAUDE.md](../../../../sources/nanocoai__nanoclaw/container/CLAUDE.md) |
| docs | 33 | [README_ja.md](../../../../sources/nanocoai__nanoclaw/README_ja.md)<br>[README_zh.md](../../../../sources/nanocoai__nanoclaw/README_zh.md)<br>[README.md](../../../../sources/nanocoai__nanoclaw/README.md)<br>[repo-tokens/README.md](../../../../sources/nanocoai__nanoclaw/repo-tokens/README.md)<br>[docs/agent-runner-details.md](../../../../sources/nanocoai__nanoclaw/docs/agent-runner-details.md)<br>[docs/api-details.md](../../../../sources/nanocoai__nanoclaw/docs/api-details.md)<br>[docs/APPLE-CONTAINER-NETWORKING.md](../../../../sources/nanocoai__nanoclaw/docs/APPLE-CONTAINER-NETWORKING.md)<br>[docs/architecture-diagram.html](../../../../sources/nanocoai__nanoclaw/docs/architecture-diagram.html) |
| config | 5 | [package.json](../../../../sources/nanocoai__nanoclaw/package.json)<br>[pnpm-workspace.yaml](../../../../sources/nanocoai__nanoclaw/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/nanocoai__nanoclaw/tsconfig.json)<br>[container/agent-runner/package.json](../../../../sources/nanocoai__nanoclaw/container/agent-runner/package.json)<br>[container/agent-runner/tsconfig.json](../../../../sources/nanocoai__nanoclaw/container/agent-runner/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 89 | [src/attachment-naming.test.ts](../../../../sources/nanocoai__nanoclaw/src/attachment-naming.test.ts)<br>[src/circuit-breaker.test.ts](../../../../sources/nanocoai__nanoclaw/src/circuit-breaker.test.ts)<br>[src/container-restart.test.ts](../../../../sources/nanocoai__nanoclaw/src/container-restart.test.ts)<br>[src/container-runner.test.ts](../../../../sources/nanocoai__nanoclaw/src/container-runner.test.ts)<br>[src/container-runtime.test.ts](../../../../sources/nanocoai__nanoclaw/src/container-runtime.test.ts)<br>[src/delivery-actions.test.ts](../../../../sources/nanocoai__nanoclaw/src/delivery-actions.test.ts) |
| CI workflow | 4 | [.github/workflows/bump-version.yml](../../../../sources/nanocoai__nanoclaw/.github/workflows/bump-version.yml)<br>[.github/workflows/ci.yml](../../../../sources/nanocoai__nanoclaw/.github/workflows/ci.yml)<br>[.github/workflows/label-pr.yml](../../../../sources/nanocoai__nanoclaw/.github/workflows/label-pr.yml)<br>[.github/workflows/update-tokens.yml](../../../../sources/nanocoai__nanoclaw/.github/workflows/update-tokens.yml) |
| 컨테이너/배포 | 1 | [container/Dockerfile](../../../../sources/nanocoai__nanoclaw/container/Dockerfile) |
| 보안/정책 | 7 | [src/modules/mount-security/index.ts](../../../../sources/nanocoai__nanoclaw/src/modules/mount-security/index.ts)<br>[setup/auth.ts](../../../../sources/nanocoai__nanoclaw/setup/auth.ts)<br>[setup/provider-auth.ts](../../../../sources/nanocoai__nanoclaw/setup/provider-auth.ts)<br>[setup/signal-auth.ts](../../../../sources/nanocoai__nanoclaw/setup/signal-auth.ts)<br>[setup/whatsapp-auth.ts](../../../../sources/nanocoai__nanoclaw/setup/whatsapp-auth.ts)<br>[setup/migrate-v2/channel-auth.ts](../../../../sources/nanocoai__nanoclaw/setup/migrate-v2/channel-auth.ts) |
| 에이전트 지시문 | 4 | [CLAUDE.md](../../../../sources/nanocoai__nanoclaw/CLAUDE.md)<br>[groups/main/CLAUDE.md](../../../../sources/nanocoai__nanoclaw/groups/main/CLAUDE.md)<br>[groups/global/CLAUDE.md](../../../../sources/nanocoai__nanoclaw/groups/global/CLAUDE.md)<br>[container/CLAUDE.md](../../../../sources/nanocoai__nanoclaw/container/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `.mcp.json`, `container/agent-runner/src/mcp-tools/agents.instructions.md`, `container/agent-runner/src/mcp-tools/agents.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`, `container/agent-runner/src/index.ts`, `container/agent-runner/src/mcp-tools/server.ts`.
3. agent/tool runtime 매핑: `src/modules/self-mod/agent.md`, `src/modules/permissions/db/agent-group-members.ts`, `src/modules/interactive/agent.md`.
4. retrieval/memory/indexing 확인: `src/index.ts`, `src/providers/index.ts`, `src/modules/index.ts`.
5. test/eval 파일로 동작 검증: `src/attachment-naming.test.ts`, `src/circuit-breaker.test.ts`, `src/container-restart.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A lightweight alternative to OpenClaw that runs in containers for security. Connects to WhatsApp, Telegram, Slack, Disco. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
