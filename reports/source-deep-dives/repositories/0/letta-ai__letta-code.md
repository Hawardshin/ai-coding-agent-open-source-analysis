# letta-ai/letta-code 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

The memory-first coding agent

## 요약

- 조사 단위: `sources/letta-ai__letta-code` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,321 files, 105 directories, depth score 119, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=src/skills/builtin/converting-mcps-to-skills/scripts/mcp-http.ts, src/skills/builtin/converting-mcps-to-skills/scripts/mcp-stdio.ts, src/mods/tool-registry.ts이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | letta-ai/letta-code |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 2743 |
| Forks | 307 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/letta-ai__letta-code](../../../../sources/letta-ai__letta-code) |
| 기존 보고서 | [reports/global-trending/repositories/letta-ai__letta-code.md](../../../global-trending/repositories/letta-ai__letta-code.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1321 / 105 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .cursor, .github, .husky, .skills, assets, bin, docs, hooks, nix, scripts, src |
| 상위 확장자 | .ts: 981, .tsx: 111, .md: 106, .json: 52, .mdx: 14, .js: 11, .sh: 10, .yml: 10, (none): 6, .nix: 4, .py: 4, .txt: 4 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 162 |
| docs | documentation surface | 5 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| bin | top-level component | 1 |
| hooks | top-level component | 1 |
| nix | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | prepare | node .husky/install.mjs |
| quality | package.json | lint | bunx --bun @biomejs/biome@2.2.5 check src |
| quality | package.json | fix | bunx --bun @biomejs/biome@2.2.5 check --write src |
| quality | package.json | typecheck | tsc --noEmit |
| quality | package.json | check:cycles | madge --circular --extensions ts,tsx src/ |
| quality | package.json | check:boundaries | node scripts/check-layer-boundaries.js |
| quality | package.json | check:exported-functions | node scripts/check-exported-functions.js |
| quality | package.json | check:filename-casing | node scripts/check-filename-casing.js |
| test | package.json | check:test-mock-isolation | bun run scripts/check-test-mock-isolation.js |
| test | package.json | check:test-coverage | node scripts/check-test-coverage.cjs |
| build | package.json | check:bundled-skill-scripts | node scripts/check-bundled-skill-scripts.js |
| quality | package.json | check | bun run scripts/check.js |
| serve-dev | package.json | dev | LETTA_DEBUG=${LETTA_DEBUG:-1} LETTA_RESPONSES_WS=${LETTA_RESPONSES_WS:-1} bun --loader=.md:text --loader=.mdx:text --loader=.txt:text run src/index.ts |
| build | package.json | build | node scripts/postinstall-patches.js && bun run build.js |
| test | package.json | test:update-chain:manual | bun run src/test-utils/update-chain-smoke.ts --mode manual |
| test | package.json | test:update-chain:startup | bun run src/test-utils/update-chain-smoke.ts --mode startup |
| build | package.json | prepublishOnly | bun run build |
| build | package.json | postinstall | node scripts/postinstall-patches.js \|\| echo letta: vendor patches skipped && node -e "try{require('fs').chmodSync(require('path').join(require.resolve('node-pty/package.json'),'../prebuilds/darwin-arm64/spawn-helper'),0o |
| entrypoint | package.json bin | letta.js | letta.js |


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
| mcp | [src/skills/builtin/converting-mcps-to-skills/scripts/mcp-http.ts](../../../../sources/letta-ai__letta-code/src/skills/builtin/converting-mcps-to-skills/scripts/mcp-http.ts) | mcp signal |
| mcp | [src/skills/builtin/converting-mcps-to-skills/scripts/mcp-stdio.ts](../../../../sources/letta-ai__letta-code/src/skills/builtin/converting-mcps-to-skills/scripts/mcp-stdio.ts) | mcp signal |
| mcp | [src/mods/tool-registry.ts](../../../../sources/letta-ai__letta-code/src/mods/tool-registry.ts) | mcp signal |
| mcp | [src/cli/helpers/mcp-oauth.ts](../../../../sources/letta-ai__letta-code/src/cli/helpers/mcp-oauth.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/letta-ai__letta-code/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/websocket/listener/skill-injection.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener/skill-injection.ts) | agentRuntime signal |
| agentRuntime | [src/websocket/listener/commands/agents-conversations.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener/commands/agents-conversations.ts) | agentRuntime signal |
| agentRuntime | [src/websocket/listener/commands/memory.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener/commands/memory.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/letta-ai__letta-code/src/index.ts) | entrypoints signal |
| entrypoints | [bin/letta.js](../../../../sources/letta-ai__letta-code/bin/letta.js) | entrypoints signal |
| config | [package.json](../../../../sources/letta-ai__letta-code/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/letta-ai__letta-code/tsconfig.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [src/index.ts](../../../../sources/letta-ai__letta-code/src/index.ts)<br>[bin/letta.js](../../../../sources/letta-ai__letta-code/bin/letta.js) |
| agentRuntime | 474 | [AGENTS.md](../../../../sources/letta-ai__letta-code/AGENTS.md)<br>[src/websocket/listener/skill-injection.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener/skill-injection.ts)<br>[src/websocket/listener/commands/agents-conversations.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener/commands/agents-conversations.ts)<br>[src/websocket/listener/commands/memory.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener/commands/memory.ts)<br>[src/websocket/listener/commands/skills-agents.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener/commands/skills-agents.ts)<br>[src/web/context-usage.test.ts](../../../../sources/letta-ai__letta-code/src/web/context-usage.test.ts)<br>[src/web/context-usage.ts](../../../../sources/letta-ai__letta-code/src/web/context-usage.ts)<br>[src/web/memory-viewer-template.txt](../../../../sources/letta-ai__letta-code/src/web/memory-viewer-template.txt) |
| mcp | 6 | [src/skills/builtin/converting-mcps-to-skills/scripts/mcp-http.ts](../../../../sources/letta-ai__letta-code/src/skills/builtin/converting-mcps-to-skills/scripts/mcp-http.ts)<br>[src/skills/builtin/converting-mcps-to-skills/scripts/mcp-stdio.ts](../../../../sources/letta-ai__letta-code/src/skills/builtin/converting-mcps-to-skills/scripts/mcp-stdio.ts)<br>[src/mods/tool-registry.ts](../../../../sources/letta-ai__letta-code/src/mods/tool-registry.ts)<br>[src/cli/helpers/mcp-oauth.ts](../../../../sources/letta-ai__letta-code/src/cli/helpers/mcp-oauth.ts)<br>[src/cli/components/mcp-selector.test.ts](../../../../sources/letta-ai__letta-code/src/cli/components/mcp-selector.test.ts)<br>[src/cli/commands/mcp.ts](../../../../sources/letta-ai__letta-code/src/cli/commands/mcp.ts) |
| retrieval | 60 | [src/index.ts](../../../../sources/letta-ai__letta-code/src/index.ts)<br>[src/websocket/listener/commands/memory.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener/commands/memory.ts)<br>[src/web/generate-memory-viewer.ts](../../../../sources/letta-ai__letta-code/src/web/generate-memory-viewer.ts)<br>[src/web/local-memory-context.ts](../../../../sources/letta-ai__letta-code/src/web/local-memory-context.ts)<br>[src/web/memory-viewer-template.txt](../../../../sources/letta-ai__letta-code/src/web/memory-viewer-template.txt)<br>[src/tools/memory-apply-patch.test.ts](../../../../sources/letta-ai__letta-code/src/tools/memory-apply-patch.test.ts)<br>[src/tools/memory-tool.test.ts](../../../../sources/letta-ai__letta-code/src/tools/memory-tool.test.ts)<br>[src/tools/schemas/Memory.json](../../../../sources/letta-ai__letta-code/src/tools/schemas/Memory.json) |
| spec | 1 | [src/skills/builtin/creating-mods/references/architecture.md](../../../../sources/letta-ai__letta-code/src/skills/builtin/creating-mods/references/architecture.md) |
| eval | 432 | [src/app-server-client.test.ts](../../../../sources/letta-ai__letta-code/src/app-server-client.test.ts)<br>[src/backend-switch.test.ts](../../../../sources/letta-ai__letta-code/src/backend-switch.test.ts)<br>[src/dev-backend-smoke.test.ts](../../../../sources/letta-ai__letta-code/src/dev-backend-smoke.test.ts)<br>[src/discord-debounce.test.ts](../../../../sources/letta-ai__letta-code/src/discord-debounce.test.ts)<br>[src/goal-loop-mode.test.ts](../../../../sources/letta-ai__letta-code/src/goal-loop-mode.test.ts)<br>[src/headless-approval-recovery.test.ts](../../../../sources/letta-ai__letta-code/src/headless-approval-recovery.test.ts)<br>[src/headless-backend-lifecycle.test.ts](../../../../sources/letta-ai__letta-code/src/headless-backend-lifecycle.test.ts)<br>[src/headless-bidirectional-reflection.test.ts](../../../../sources/letta-ai__letta-code/src/headless-bidirectional-reflection.test.ts) |
| security | 31 | [src/websocket/listener-permission-mode.test.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener-permission-mode.test.ts)<br>[src/websocket/listener/permission-mode.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener/permission-mode.ts)<br>[src/tools/interactive-policy.ts](../../../../sources/letta-ai__letta-code/src/tools/interactive-policy.ts)<br>[src/tools/secret-substitution.test.ts](../../../../sources/letta-ai__letta-code/src/tools/secret-substitution.test.ts)<br>[src/tools/secret-substitution.ts](../../../../sources/letta-ai__letta-code/src/tools/secret-substitution.ts)<br>[src/telemetry/flush-auth.test.ts](../../../../sources/letta-ai__letta-code/src/telemetry/flush-auth.test.ts)<br>[src/skills/builtin/modifying-the-harness/scripts/add_permission.py](../../../../sources/letta-ai__letta-code/src/skills/builtin/modifying-the-harness/scripts/add_permission.py)<br>[src/reminders/permission-mode.test.ts](../../../../sources/letta-ai__letta-code/src/reminders/permission-mode.test.ts) |
| ci | 10 | [.github/workflows/ci.yml](../../../../sources/letta-ai__letta-code/.github/workflows/ci.yml)<br>[.github/workflows/codex-release-watch.yml](../../../../sources/letta-ai__letta-code/.github/workflows/codex-release-watch.yml)<br>[.github/workflows/letta.yml](../../../../sources/letta-ai__letta-code/.github/workflows/letta.yml)<br>[.github/workflows/nightly-update-smoke.yml](../../../../sources/letta-ai__letta-code/.github/workflows/nightly-update-smoke.yml)<br>[.github/workflows/pr-title.yml](../../../../sources/letta-ai__letta-code/.github/workflows/pr-title.yml)<br>[.github/workflows/prepare-release.yml](../../../../sources/letta-ai__letta-code/.github/workflows/prepare-release.yml)<br>[.github/workflows/release.yml](../../../../sources/letta-ai__letta-code/.github/workflows/release.yml)<br>[.github/workflows/review.yml](../../../../sources/letta-ai__letta-code/.github/workflows/review.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/letta-ai__letta-code/AGENTS.md) |
| docs | 8 | [README.md](../../../../sources/letta-ai__letta-code/README.md)<br>[src/tools/README.md](../../../../sources/letta-ai__letta-code/src/tools/README.md)<br>[src/cli/app/README.md](../../../../sources/letta-ai__letta-code/src/cli/app/README.md)<br>[src/channels/README.md](../../../../sources/letta-ai__letta-code/src/channels/README.md)<br>[src/agent/prompts/README.md](../../../../sources/letta-ai__letta-code/src/agent/prompts/README.md)<br>[docs/nix.md](../../../../sources/letta-ai__letta-code/docs/nix.md)<br>[docs/plans/discord-channel-policy-consolidation.md](../../../../sources/letta-ai__letta-code/docs/plans/discord-channel-policy-consolidation.md)<br>[docs/plans/resume-tail-fast-path.md](../../../../sources/letta-ai__letta-code/docs/plans/resume-tail-fast-path.md) |
| config | 2 | [package.json](../../../../sources/letta-ai__letta-code/package.json)<br>[tsconfig.json](../../../../sources/letta-ai__letta-code/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 432 | [src/app-server-client.test.ts](../../../../sources/letta-ai__letta-code/src/app-server-client.test.ts)<br>[src/backend-switch.test.ts](../../../../sources/letta-ai__letta-code/src/backend-switch.test.ts)<br>[src/dev-backend-smoke.test.ts](../../../../sources/letta-ai__letta-code/src/dev-backend-smoke.test.ts)<br>[src/discord-debounce.test.ts](../../../../sources/letta-ai__letta-code/src/discord-debounce.test.ts)<br>[src/goal-loop-mode.test.ts](../../../../sources/letta-ai__letta-code/src/goal-loop-mode.test.ts)<br>[src/headless-approval-recovery.test.ts](../../../../sources/letta-ai__letta-code/src/headless-approval-recovery.test.ts) |
| CI workflow | 10 | [.github/workflows/ci.yml](../../../../sources/letta-ai__letta-code/.github/workflows/ci.yml)<br>[.github/workflows/codex-release-watch.yml](../../../../sources/letta-ai__letta-code/.github/workflows/codex-release-watch.yml)<br>[.github/workflows/letta.yml](../../../../sources/letta-ai__letta-code/.github/workflows/letta.yml)<br>[.github/workflows/nightly-update-smoke.yml](../../../../sources/letta-ai__letta-code/.github/workflows/nightly-update-smoke.yml)<br>[.github/workflows/pr-title.yml](../../../../sources/letta-ai__letta-code/.github/workflows/pr-title.yml)<br>[.github/workflows/prepare-release.yml](../../../../sources/letta-ai__letta-code/.github/workflows/prepare-release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 31 | [src/websocket/listener-permission-mode.test.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener-permission-mode.test.ts)<br>[src/websocket/listener/permission-mode.ts](../../../../sources/letta-ai__letta-code/src/websocket/listener/permission-mode.ts)<br>[src/tools/interactive-policy.ts](../../../../sources/letta-ai__letta-code/src/tools/interactive-policy.ts)<br>[src/tools/secret-substitution.test.ts](../../../../sources/letta-ai__letta-code/src/tools/secret-substitution.test.ts)<br>[src/tools/secret-substitution.ts](../../../../sources/letta-ai__letta-code/src/tools/secret-substitution.ts)<br>[src/telemetry/flush-auth.test.ts](../../../../sources/letta-ai__letta-code/src/telemetry/flush-auth.test.ts) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/letta-ai__letta-code/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/skills/builtin/converting-mcps-to-skills/scripts/mcp-http.ts`, `src/skills/builtin/converting-mcps-to-skills/scripts/mcp-stdio.ts`, `src/mods/tool-registry.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`, `bin/letta.js`.
3. agent/tool runtime 매핑: `AGENTS.md`, `src/websocket/listener/skill-injection.ts`, `src/websocket/listener/commands/agents-conversations.ts`.
4. retrieval/memory/indexing 확인: `src/index.ts`, `src/websocket/listener/commands/memory.ts`, `src/web/generate-memory-viewer.ts`.
5. test/eval 파일로 동작 검증: `src/app-server-client.test.ts`, `src/backend-switch.test.ts`, `src/dev-backend-smoke.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The memory first coding agent. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, react이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
