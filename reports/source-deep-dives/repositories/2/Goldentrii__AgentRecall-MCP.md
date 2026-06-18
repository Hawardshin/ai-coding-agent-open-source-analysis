# Goldentrii/AgentRecall-MCP 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Persistent, correction-driven memory for AI agents. Cross-session, cross-platform (Claude Code, Codex, Gemini — any MCP client). Learns from mistakes, compresses context to save tokens, consolidates knowledge overnight. npm: agent-recall-mcp

## 요약

- 조사 단위: `sources/Goldentrii__AgentRecall-MCP` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 363 files, 60 directories, depth score 118, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=wiki/MCP-Tools-Reference.md, packages/mcp-server/package.json, packages/mcp-server/README-pre-redesign.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Goldentrii/AgentRecall-MCP |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 303 |
| Forks | 52 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Goldentrii__AgentRecall-MCP](../../../../sources/Goldentrii__AgentRecall-MCP) |
| 기존 보고서 | [reports/global-trending/repositories/Goldentrii__AgentRecall-MCP.md](../../../global-trending/repositories/Goldentrii__AgentRecall-MCP.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 363 / 60 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, agent-prompts, benchmark, commands, docs, eval, integrations, packages, scripts, wiki |
| 상위 확장자 | .ts: 159, .md: 130, .mjs: 39, .json: 11, .woff2: 11, .html: 4, (none): 3, .js: 2, .sql: 2, .css: 1, .yml: 1 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/mcp-server | packages workspace | 86 |
| docs | documentation surface | 47 |
| packages/core | packages workspace | 46 |
| packages/sdk | packages workspace | 8 |
| packages/cli | packages workspace | 7 |
| .github | ci surface | 1 |
| agent-prompts | top-level component | 1 |
| benchmark | validation surface | 1 |
| commands | top-level component | 1 |
| eval | top-level component | 1 |
| integrations | top-level component | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |
| wiki | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | sync-readme | cp README.md packages/core/README.md && cp README.md packages/mcp-server/README.md && cp README.md packages/sdk/README.md && cp README.md packages/cli/README.md |
| serve-dev | package.json | build | npm run build -w packages/core && npm run build -w packages/mcp-server && npm run build -w packages/sdk && npm run build -w packages/cli |
| test | package.json | test | npm test -w packages/core && npm test -w packages/mcp-server && npm test -w packages/sdk && npm test -w packages/cli |
| build | package.json | clean | rm -rf packages/*/dist packages/*/*.tsbuildinfo |
| serve-dev | package.json | lint | tsc --noEmit -p packages/core && tsc --noEmit -p packages/mcp-server && tsc --noEmit -p packages/sdk && tsc --noEmit -p packages/cli |


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
| mcp | [wiki/MCP-Tools-Reference.md](../../../../sources/Goldentrii__AgentRecall-MCP/wiki/MCP-Tools-Reference.md) | mcp signal |
| mcp | [packages/mcp-server/package.json](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/package.json) | mcp signal |
| mcp | [packages/mcp-server/README-pre-redesign.md](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/README-pre-redesign.md) | mcp signal |
| mcp | [packages/mcp-server/README.md](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/README.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/Goldentrii__AgentRecall-MCP/AGENTS.md) | agentRuntime signal |
| agentRuntime | [SKILL.md](../../../../sources/Goldentrii__AgentRecall-MCP/SKILL.md) | agentRuntime signal |
| agentRuntime | [packages/sdk/test/agent-recall.test.mjs](../../../../sources/Goldentrii__AgentRecall-MCP/packages/sdk/test/agent-recall.test.mjs) | agentRuntime signal |
| agentRuntime | [packages/sdk/src/agent-recall.ts](../../../../sources/Goldentrii__AgentRecall-MCP/packages/sdk/src/agent-recall.ts) | agentRuntime signal |
| entrypoints | [packages/sdk/src/index.ts](../../../../sources/Goldentrii__AgentRecall-MCP/packages/sdk/src/index.ts) | entrypoints signal |
| entrypoints | [packages/mcp-server/src/index.ts](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/src/index.ts) | entrypoints signal |
| entrypoints | [packages/mcp-server/src/server.ts](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/src/server.ts) | entrypoints signal |
| entrypoints | [packages/core/src/index.ts](../../../../sources/Goldentrii__AgentRecall-MCP/packages/core/src/index.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [packages/sdk/src/index.ts](../../../../sources/Goldentrii__AgentRecall-MCP/packages/sdk/src/index.ts)<br>[packages/mcp-server/src/index.ts](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/src/index.ts)<br>[packages/mcp-server/src/server.ts](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/src/server.ts)<br>[packages/core/src/index.ts](../../../../sources/Goldentrii__AgentRecall-MCP/packages/core/src/index.ts)<br>[packages/cli/src/index.ts](../../../../sources/Goldentrii__AgentRecall-MCP/packages/cli/src/index.ts) |
| agentRuntime | 132 | [AGENTS.md](../../../../sources/Goldentrii__AgentRecall-MCP/AGENTS.md)<br>[SKILL.md](../../../../sources/Goldentrii__AgentRecall-MCP/SKILL.md)<br>[packages/sdk/test/agent-recall.test.mjs](../../../../sources/Goldentrii__AgentRecall-MCP/packages/sdk/test/agent-recall.test.mjs)<br>[packages/sdk/src/agent-recall.ts](../../../../sources/Goldentrii__AgentRecall-MCP/packages/sdk/src/agent-recall.ts)<br>[packages/mcp-server/src/tools/alignment-check.ts](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/src/tools/alignment-check.ts)<br>[packages/mcp-server/src/tools/awareness-update.ts](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/src/tools/awareness-update.ts)<br>[packages/mcp-server/src/tools/bootstrap.ts](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/src/tools/bootstrap.ts)<br>[packages/mcp-server/src/tools/check-action.ts](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/src/tools/check-action.ts) |
| mcp | 60 | [wiki/MCP-Tools-Reference.md](../../../../sources/Goldentrii__AgentRecall-MCP/wiki/MCP-Tools-Reference.md)<br>[packages/mcp-server/package.json](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/package.json)<br>[packages/mcp-server/README-pre-redesign.md](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/README-pre-redesign.md)<br>[packages/mcp-server/README.md](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/README.md)<br>[packages/mcp-server/tsconfig.json](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/tsconfig.json)<br>[packages/mcp-server/test/smoke.test.mjs](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/test/smoke.test.mjs)<br>[packages/mcp-server/src/index.ts](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/src/index.ts)<br>[packages/mcp-server/src/server.ts](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/src/server.ts) |
| retrieval | 34 | [wiki/_Sidebar.md](../../../../sources/Goldentrii__AgentRecall-MCP/wiki/_Sidebar.md)<br>[wiki/Core-Concepts.md](../../../../sources/Goldentrii__AgentRecall-MCP/wiki/Core-Concepts.md)<br>[wiki/FAQ.md](../../../../sources/Goldentrii__AgentRecall-MCP/wiki/FAQ.md)<br>[wiki/Getting-Started.md](../../../../sources/Goldentrii__AgentRecall-MCP/wiki/Getting-Started.md)<br>[wiki/Home.md](../../../../sources/Goldentrii__AgentRecall-MCP/wiki/Home.md)<br>[wiki/Intelligent-Distance.md](../../../../sources/Goldentrii__AgentRecall-MCP/wiki/Intelligent-Distance.md)<br>[wiki/MCP-Tools-Reference.md](../../../../sources/Goldentrii__AgentRecall-MCP/wiki/MCP-Tools-Reference.md)<br>[wiki/The-Vision.md](../../../../sources/Goldentrii__AgentRecall-MCP/wiki/The-Vision.md) |
| spec | 6 | [docs/mcp-adapter-spec.md](../../../../sources/Goldentrii__AgentRecall-MCP/docs/mcp-adapter-spec.md)<br>[docs/sdk-design.md](../../../../sources/Goldentrii__AgentRecall-MCP/docs/sdk-design.md)<br>[docs/superpowers/specs/2026-04-27-x-content-campaign-design.md](../../../../sources/Goldentrii__AgentRecall-MCP/docs/superpowers/specs/2026-04-27-x-content-campaign-design.md)<br>[docs/superpowers/specs/2026-04-29-supabase-semantic-recall-design.md](../../../../sources/Goldentrii__AgentRecall-MCP/docs/superpowers/specs/2026-04-29-supabase-semantic-recall-design.md)<br>[docs/superpowers/specs/2026-05-25-dashboard-design.md](../../../../sources/Goldentrii__AgentRecall-MCP/docs/superpowers/specs/2026-05-25-dashboard-design.md)<br>[docs/internal/HANDOFF-warroom-design.md](../../../../sources/Goldentrii__AgentRecall-MCP/docs/internal/HANDOFF-warroom-design.md) |
| eval | 89 | [packages/sdk/test/agent-recall.test.mjs](../../../../sources/Goldentrii__AgentRecall-MCP/packages/sdk/test/agent-recall.test.mjs)<br>[packages/mcp-server/test/smoke.test.mjs](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/test/smoke.test.mjs)<br>[packages/core/test/associative-link.test.mjs](../../../../sources/Goldentrii__AgentRecall-MCP/packages/core/test/associative-link.test.mjs)<br>[packages/core/test/auto-name.test.mjs](../../../../sources/Goldentrii__AgentRecall-MCP/packages/core/test/auto-name.test.mjs)<br>[packages/core/test/awareness.test.mjs](../../../../sources/Goldentrii__AgentRecall-MCP/packages/core/test/awareness.test.mjs)<br>[packages/core/test/composite-tools.test.mjs](../../../../sources/Goldentrii__AgentRecall-MCP/packages/core/test/composite-tools.test.mjs)<br>[packages/core/test/config.test.mjs](../../../../sources/Goldentrii__AgentRecall-MCP/packages/core/test/config.test.mjs)<br>[packages/core/test/consistency.test.mjs](../../../../sources/Goldentrii__AgentRecall-MCP/packages/core/test/consistency.test.mjs) |
| security | 3 | [docs/security/2026-05-08-audit-summary.md](../../../../sources/Goldentrii__AgentRecall-MCP/docs/security/2026-05-08-audit-summary.md)<br>[docs/review/2026-05-06-integration-audit.md](../../../../sources/Goldentrii__AgentRecall-MCP/docs/review/2026-05-06-integration-audit.md)<br>[benchmark/heeded-guard.mjs](../../../../sources/Goldentrii__AgentRecall-MCP/benchmark/heeded-guard.mjs) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/Goldentrii__AgentRecall-MCP/.github/workflows/ci.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [AGENTS.md](../../../../sources/Goldentrii__AgentRecall-MCP/AGENTS.md)<br>[eval/seeds/migration/CLAUDE.md](../../../../sources/Goldentrii__AgentRecall-MCP/eval/seeds/migration/CLAUDE.md) |
| docs | 44 | [README.md](../../../../sources/Goldentrii__AgentRecall-MCP/README.md)<br>[packages/sdk/README.md](../../../../sources/Goldentrii__AgentRecall-MCP/packages/sdk/README.md)<br>[packages/mcp-server/README-pre-redesign.md](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/README-pre-redesign.md)<br>[packages/mcp-server/README.md](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/README.md)<br>[packages/core/README-pre-redesign.md](../../../../sources/Goldentrii__AgentRecall-MCP/packages/core/README-pre-redesign.md)<br>[packages/core/README.md](../../../../sources/Goldentrii__AgentRecall-MCP/packages/core/README.md)<br>[packages/cli/README.md](../../../../sources/Goldentrii__AgentRecall-MCP/packages/cli/README.md)<br>[docs/commands.md](../../../../sources/Goldentrii__AgentRecall-MCP/docs/commands.md) |
| config | 9 | [package.json](../../../../sources/Goldentrii__AgentRecall-MCP/package.json)<br>[packages/sdk/package.json](../../../../sources/Goldentrii__AgentRecall-MCP/packages/sdk/package.json)<br>[packages/sdk/tsconfig.json](../../../../sources/Goldentrii__AgentRecall-MCP/packages/sdk/tsconfig.json)<br>[packages/mcp-server/package.json](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/package.json)<br>[packages/mcp-server/tsconfig.json](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/tsconfig.json)<br>[packages/core/package.json](../../../../sources/Goldentrii__AgentRecall-MCP/packages/core/package.json)<br>[packages/core/tsconfig.json](../../../../sources/Goldentrii__AgentRecall-MCP/packages/core/tsconfig.json)<br>[packages/cli/package.json](../../../../sources/Goldentrii__AgentRecall-MCP/packages/cli/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 89 | [packages/sdk/test/agent-recall.test.mjs](../../../../sources/Goldentrii__AgentRecall-MCP/packages/sdk/test/agent-recall.test.mjs)<br>[packages/mcp-server/test/smoke.test.mjs](../../../../sources/Goldentrii__AgentRecall-MCP/packages/mcp-server/test/smoke.test.mjs)<br>[packages/core/test/associative-link.test.mjs](../../../../sources/Goldentrii__AgentRecall-MCP/packages/core/test/associative-link.test.mjs)<br>[packages/core/test/auto-name.test.mjs](../../../../sources/Goldentrii__AgentRecall-MCP/packages/core/test/auto-name.test.mjs)<br>[packages/core/test/awareness.test.mjs](../../../../sources/Goldentrii__AgentRecall-MCP/packages/core/test/awareness.test.mjs)<br>[packages/core/test/composite-tools.test.mjs](../../../../sources/Goldentrii__AgentRecall-MCP/packages/core/test/composite-tools.test.mjs) |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/Goldentrii__AgentRecall-MCP/.github/workflows/ci.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 3 | [docs/security/2026-05-08-audit-summary.md](../../../../sources/Goldentrii__AgentRecall-MCP/docs/security/2026-05-08-audit-summary.md)<br>[docs/review/2026-05-06-integration-audit.md](../../../../sources/Goldentrii__AgentRecall-MCP/docs/review/2026-05-06-integration-audit.md)<br>[benchmark/heeded-guard.mjs](../../../../sources/Goldentrii__AgentRecall-MCP/benchmark/heeded-guard.mjs) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/Goldentrii__AgentRecall-MCP/AGENTS.md)<br>[eval/seeds/migration/CLAUDE.md](../../../../sources/Goldentrii__AgentRecall-MCP/eval/seeds/migration/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `wiki/MCP-Tools-Reference.md`, `packages/mcp-server/package.json`, `packages/mcp-server/README-pre-redesign.md`.
2. entrypoint를 따라 실행 흐름 확인: `packages/sdk/src/index.ts`, `packages/mcp-server/src/index.ts`, `packages/mcp-server/src/server.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `SKILL.md`, `packages/sdk/test/agent-recall.test.mjs`.
4. retrieval/memory/indexing 확인: `wiki/_Sidebar.md`, `wiki/Core-Concepts.md`, `wiki/FAQ.md`.
5. test/eval 파일로 동작 검증: `packages/sdk/test/agent-recall.test.mjs`, `packages/mcp-server/test/smoke.test.mjs`, `packages/core/test/associative-link.test.mjs`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Persistent, correction driven memory for AI agents. Cross session, cross platform Claude Code, Codex, Gemini — any MCP c. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
