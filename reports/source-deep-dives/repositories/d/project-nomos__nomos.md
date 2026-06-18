# project-nomos/nomos 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Your AI digital clone — learns who you are, acts on your behalf, remembers everything. Persistent vector memory, multi-agent teams, 60+ skills, smart model routing. Self-hosted, encrypted, multi-provider (Claude/Ollama/OpenRouter). Deploy to Slack, Discord, Telegram, WhatsApp & more in minutes.

## 요약

- 조사 단위: `sources/project-nomos__nomos` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 584 files, 157 directories, depth score 124, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=src/sdk/discord-mcp.ts, src/sdk/google-mcp.test.ts, src/sdk/google-mcp.ts이고, 의존성 단서는 anthropic, claude, react, commander, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | project-nomos/nomos |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 22 |
| Forks | 4 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/project-nomos__nomos](../../../../sources/project-nomos__nomos) |
| 기존 보고서 | [reports/global-trending/repositories/project-nomos__nomos.md](../../../global-trending/repositories/project-nomos__nomos.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 584 / 157 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .claude, .github, .husky, autonomous, docs, eval, Formula, images, proto, scripts, settings, skills, src |
| 상위 확장자 | .ts: 405, .md: 71, .tsx: 67, .json: 6, .yml: 6, (none): 6, .yaml: 4, .example: 3, .mjs: 3, .sh: 3, .png: 2, .svg: 2 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 158 |
| docs | documentation surface | 31 |
| .github | ci surface | 1 |
| autonomous | top-level component | 1 |
| eval | top-level component | 1 |
| Formula | top-level component | 1 |
| images | top-level component | 1 |
| proto | top-level component | 1 |
| scripts | top-level component | 1 |
| settings | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | postinstall | bash scripts/fetch-anthropic-skills.sh && bash scripts/fetch-plugins.sh && playwright install chromium && (which uvx >/dev/null 2>&1 \|\| (echo 'Installing uv (Python package runner)...' && curl -LsSf https://astral.sh/uv/ |
| build | package.json | build | node scripts/sync-inline-schema.mjs && tsdown |
| utility | package.json | sync-schema | node scripts/sync-inline-schema.mjs |
| utility | package.json | codegen | buf generate |
| utility | package.json | eval:recall | tsx scripts/recall-eval.ts |
| utility | package.json | eval:agent | tsx eval/agent-eval.ts |
| utility | package.json | eval:audit | tsx eval/agent-eval.ts --audit |
| serve-dev | package.json | dev | tsx src/index.ts |
| serve-dev | package.json | start | node dist/index.js |
| quality | package.json | check | pnpm format:check && pnpm typecheck && pnpm lint |
| quality | package.json | typecheck | tsc --noEmit |
| quality | package.json | lint | oxlint |
| quality | package.json | lint:fix | oxlint --fix && pnpm format |
| quality | package.json | format | oxfmt --write |
| quality | package.json | format:check | oxfmt --check |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| serve-dev | package.json | daemon:dev | tsx src/daemon/index.ts |
| serve-dev | package.json | daemon:start | node dist/index.js daemon start |
| utility | package.json | prepare | husky |
| quality | package.json | check:isolation | tsx scripts/isolation-check.ts |
| entrypoint | package.json bin | index.js | dist/index.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | anthropic, claude |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | react |
| developerSurface | commander |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [src/sdk/discord-mcp.ts](../../../../sources/project-nomos__nomos/src/sdk/discord-mcp.ts) | mcp signal |
| mcp | [src/sdk/google-mcp.test.ts](../../../../sources/project-nomos__nomos/src/sdk/google-mcp.test.ts) | mcp signal |
| mcp | [src/sdk/google-mcp.ts](../../../../sources/project-nomos__nomos/src/sdk/google-mcp.ts) | mcp signal |
| mcp | [src/sdk/google-rest-mcp.test.ts](../../../../sources/project-nomos__nomos/src/sdk/google-rest-mcp.test.ts) | mcp signal |
| agentRuntime | [src/ui/hooks/use-alternate-buffer.ts](../../../../sources/project-nomos__nomos/src/ui/hooks/use-alternate-buffer.ts) | agentRuntime signal |
| agentRuntime | [src/ui/components/agent-progress-line.tsx](../../../../sources/project-nomos__nomos/src/ui/components/agent-progress-line.tsx) | agentRuntime signal |
| agentRuntime | [src/ui/components/tool-block.tsx](../../../../sources/project-nomos__nomos/src/ui/components/tool-block.tsx) | agentRuntime signal |
| agentRuntime | [src/skills/frontmatter.test.ts](../../../../sources/project-nomos__nomos/src/skills/frontmatter.test.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/project-nomos__nomos/src/index.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/project-nomos__nomos/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/project-nomos__nomos/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/project-nomos__nomos/tsconfig.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/project-nomos__nomos/src/index.ts) |
| agentRuntime | 114 | [src/ui/hooks/use-alternate-buffer.ts](../../../../sources/project-nomos__nomos/src/ui/hooks/use-alternate-buffer.ts)<br>[src/ui/components/agent-progress-line.tsx](../../../../sources/project-nomos__nomos/src/ui/components/agent-progress-line.tsx)<br>[src/ui/components/tool-block.tsx](../../../../sources/project-nomos__nomos/src/ui/components/tool-block.tsx)<br>[src/skills/frontmatter.test.ts](../../../../sources/project-nomos__nomos/src/skills/frontmatter.test.ts)<br>[src/skills/frontmatter.ts](../../../../sources/project-nomos__nomos/src/skills/frontmatter.ts)<br>[src/skills/installer.ts](../../../../sources/project-nomos__nomos/src/skills/installer.ts)<br>[src/skills/loader.test.ts](../../../../sources/project-nomos__nomos/src/skills/loader.test.ts)<br>[src/skills/loader.ts](../../../../sources/project-nomos__nomos/src/skills/loader.ts) |
| mcp | 16 | [src/sdk/discord-mcp.ts](../../../../sources/project-nomos__nomos/src/sdk/discord-mcp.ts)<br>[src/sdk/google-mcp.test.ts](../../../../sources/project-nomos__nomos/src/sdk/google-mcp.test.ts)<br>[src/sdk/google-mcp.ts](../../../../sources/project-nomos__nomos/src/sdk/google-mcp.ts)<br>[src/sdk/google-rest-mcp.test.ts](../../../../sources/project-nomos__nomos/src/sdk/google-rest-mcp.test.ts)<br>[src/sdk/google-rest-mcp.ts](../../../../sources/project-nomos__nomos/src/sdk/google-rest-mcp.ts)<br>[src/sdk/google-workspace-mcp.ts](../../../../sources/project-nomos__nomos/src/sdk/google-workspace-mcp.ts)<br>[src/sdk/loop-mcp.ts](../../../../sources/project-nomos__nomos/src/sdk/loop-mcp.ts)<br>[src/sdk/nomos-slack-mcp.ts](../../../../sources/project-nomos__nomos/src/sdk/nomos-slack-mcp.ts) |
| retrieval | 85 | [src/index.ts](../../../../sources/project-nomos__nomos/src/index.ts)<br>[src/sessions/index.ts](../../../../sources/project-nomos__nomos/src/sessions/index.ts)<br>[src/security/index.ts](../../../../sources/project-nomos__nomos/src/security/index.ts)<br>[src/routing/index.ts](../../../../sources/project-nomos__nomos/src/routing/index.ts)<br>[src/proactive/index.ts](../../../../sources/project-nomos__nomos/src/proactive/index.ts)<br>[src/memory/auto-dream.ts](../../../../sources/project-nomos__nomos/src/memory/auto-dream.ts)<br>[src/memory/brain.ts](../../../../sources/project-nomos__nomos/src/memory/brain.ts)<br>[src/memory/calibration.ts](../../../../sources/project-nomos__nomos/src/memory/calibration.ts) |
| spec | 1 | [docs/system-design.md](../../../../sources/project-nomos__nomos/docs/system-design.md) |
| eval | 91 | [src/ui/bootstrap.test.ts](../../../../sources/project-nomos__nomos/src/ui/bootstrap.test.ts)<br>[src/studio/assets.test.ts](../../../../sources/project-nomos__nomos/src/studio/assets.test.ts)<br>[src/studio/consent.test.ts](../../../../sources/project-nomos__nomos/src/studio/consent.test.ts)<br>[src/studio/engine.test.ts](../../../../sources/project-nomos__nomos/src/studio/engine.test.ts)<br>[src/studio/face-embedder.test.ts](../../../../sources/project-nomos__nomos/src/studio/face-embedder.test.ts)<br>[src/studio/gc.test.ts](../../../../sources/project-nomos__nomos/src/studio/gc.test.ts)<br>[src/studio/identity-gate.test.ts](../../../../sources/project-nomos__nomos/src/studio/identity-gate.test.ts)<br>[src/studio/learn.test.ts](../../../../sources/project-nomos__nomos/src/studio/learn.test.ts) |
| security | 27 | [SECURITY.md](../../../../sources/project-nomos__nomos/SECURITY.md)<br>[src/ui/components/permission-prompt.tsx](../../../../sources/project-nomos__nomos/src/ui/components/permission-prompt.tsx)<br>[src/security/allowlist.ts](../../../../sources/project-nomos__nomos/src/security/allowlist.ts)<br>[src/security/full-disk-access.test.ts](../../../../sources/project-nomos__nomos/src/security/full-disk-access.test.ts)<br>[src/security/full-disk-access.ts](../../../../sources/project-nomos__nomos/src/security/full-disk-access.ts)<br>[src/security/index.ts](../../../../sources/project-nomos__nomos/src/security/index.ts)<br>[src/security/pairing.ts](../../../../sources/project-nomos__nomos/src/security/pairing.ts)<br>[src/security/tool-approval.test.ts](../../../../sources/project-nomos__nomos/src/security/tool-approval.test.ts) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/project-nomos__nomos/.github/workflows/ci.yml)<br>[.github/workflows/docker.yml](../../../../sources/project-nomos__nomos/.github/workflows/docker.yml)<br>[.github/workflows/release.yml](../../../../sources/project-nomos__nomos/.github/workflows/release.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/project-nomos__nomos/docker-compose.yml)<br>[Dockerfile](../../../../sources/project-nomos__nomos/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/project-nomos__nomos/CLAUDE.md) |
| docs | 31 | [README.md](../../../../sources/project-nomos__nomos/README.md)<br>[eval/README.md](../../../../sources/project-nomos__nomos/eval/README.md)<br>[docs/advanced-features.md](../../../../sources/project-nomos__nomos/docs/advanced-features.md)<br>[docs/agent-presence-and-continuity.md](../../../../sources/project-nomos__nomos/docs/agent-presence-and-continuity.md)<br>[docs/autonomous-loops.md](../../../../sources/project-nomos__nomos/docs/autonomous-loops.md)<br>[docs/cate-protocol.md](../../../../sources/project-nomos__nomos/docs/cate-protocol.md)<br>[docs/channels.md](../../../../sources/project-nomos__nomos/docs/channels.md)<br>[docs/contacts.md](../../../../sources/project-nomos__nomos/docs/contacts.md) |
| config | 4 | [package.json](../../../../sources/project-nomos__nomos/package.json)<br>[tsconfig.json](../../../../sources/project-nomos__nomos/tsconfig.json)<br>[settings/package.json](../../../../sources/project-nomos__nomos/settings/package.json)<br>[settings/tsconfig.json](../../../../sources/project-nomos__nomos/settings/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 91 | [src/ui/bootstrap.test.ts](../../../../sources/project-nomos__nomos/src/ui/bootstrap.test.ts)<br>[src/studio/assets.test.ts](../../../../sources/project-nomos__nomos/src/studio/assets.test.ts)<br>[src/studio/consent.test.ts](../../../../sources/project-nomos__nomos/src/studio/consent.test.ts)<br>[src/studio/engine.test.ts](../../../../sources/project-nomos__nomos/src/studio/engine.test.ts)<br>[src/studio/face-embedder.test.ts](../../../../sources/project-nomos__nomos/src/studio/face-embedder.test.ts)<br>[src/studio/gc.test.ts](../../../../sources/project-nomos__nomos/src/studio/gc.test.ts) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/project-nomos__nomos/.github/workflows/ci.yml)<br>[.github/workflows/docker.yml](../../../../sources/project-nomos__nomos/.github/workflows/docker.yml)<br>[.github/workflows/release.yml](../../../../sources/project-nomos__nomos/.github/workflows/release.yml) |
| 컨테이너/배포 | 2 | [docker-compose.yml](../../../../sources/project-nomos__nomos/docker-compose.yml)<br>[Dockerfile](../../../../sources/project-nomos__nomos/Dockerfile) |
| 보안/정책 | 27 | [SECURITY.md](../../../../sources/project-nomos__nomos/SECURITY.md)<br>[src/ui/components/permission-prompt.tsx](../../../../sources/project-nomos__nomos/src/ui/components/permission-prompt.tsx)<br>[src/security/allowlist.ts](../../../../sources/project-nomos__nomos/src/security/allowlist.ts)<br>[src/security/full-disk-access.test.ts](../../../../sources/project-nomos__nomos/src/security/full-disk-access.test.ts)<br>[src/security/full-disk-access.ts](../../../../sources/project-nomos__nomos/src/security/full-disk-access.ts)<br>[src/security/index.ts](../../../../sources/project-nomos__nomos/src/security/index.ts) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/project-nomos__nomos/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/sdk/discord-mcp.ts`, `src/sdk/google-mcp.test.ts`, `src/sdk/google-mcp.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`.
3. agent/tool runtime 매핑: `src/ui/hooks/use-alternate-buffer.ts`, `src/ui/components/agent-progress-line.tsx`, `src/ui/components/tool-block.tsx`.
4. retrieval/memory/indexing 확인: `src/index.ts`, `src/sessions/index.ts`, `src/security/index.ts`.
5. test/eval 파일로 동작 검증: `src/ui/bootstrap.test.ts`, `src/studio/assets.test.ts`, `src/studio/consent.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Your AI digital clone — learns who you are, acts on your behalf, remembers everything. Persistent vector memory, multi a. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, docker-compose.yml, README.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
