# NickCirv/engram 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

The context spine that 10x's every AI coding session. Live in 8 IDEs (Claude Code, Cursor, Cline, Continue, Aider, Codex, Windsurf, Zed) via npm + OpenVSX + Anthropic plugin directory. 89% measured token reduction. Local SQLite, zero cloud, Apache 2.0.

## 요약

- 조사 단위: `sources/NickCirv__engram` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 343 files, 84 directories, depth score 114, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/providers/mcp-config.test.ts, src/providers/mcp-client.ts, src/providers/mcp-config.ts이고, 의존성 단서는 modelcontextprotocol, commander, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | NickCirv/engram |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 133 |
| Forks | 13 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/NickCirv__engram](../../../../sources/NickCirv__engram) |
| 기존 보고서 | [reports/global-trending/repositories/NickCirv__engram.md](../../../global-trending/repositories/NickCirv__engram.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 343 / 84 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, adapters, assets, bench, demo, docs, extensions, plugins, scripts, src, tests |
| 상위 확장자 | .ts: 204, .md: 68, .json: 19, .yaml: 10, .png: 9, (none): 8, .html: 7, .mjs: 5, .sh: 3, .cast: 2, .vtt: 2, .csv: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 69 |
| docs | documentation surface | 57 |
| src | source boundary | 31 |
| .github | ci surface | 1 |
| adapters | top-level component | 1 |
| assets | top-level component | 1 |
| bench | validation surface | 1 |
| demo | top-level component | 1 |
| extensions | top-level component | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsup && node scripts/bundle-grammars.mjs |
| build | package.json | build:nogrammars | tsup |
| serve-dev | package.json | dev | tsup --watch |
| test | package.json | test | vitest |
| quality | package.json | lint | tsc --noEmit |
| build | package.json | prepublishOnly | npm run build |
| utility | package.json | bench | tsx bench/runner.ts |
| test | package.json | stress | tsx bench/stress-test.ts |
| utility | package.json | postinstall | node scripts/postinstall.mjs |
| utility | package.json | preuninstall | node scripts/preuninstall.mjs |
| utility | package.json | demo | tsx demo/run.ts |
| test | package.json | bench:recall | tsx bench/recall-coverage.ts |
| entrypoint | package.json bin | cli.js | dist/cli.js |
| entrypoint | package.json bin | cli.js | dist/cli.js |
| entrypoint | package.json bin | serve.js | dist/serve.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | commander |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/providers/mcp-config.test.ts](../../../../sources/NickCirv__engram/tests/providers/mcp-config.test.ts) | mcp signal |
| mcp | [src/providers/mcp-client.ts](../../../../sources/NickCirv__engram/src/providers/mcp-client.ts) | mcp signal |
| mcp | [src/providers/mcp-config.ts](../../../../sources/NickCirv__engram/src/providers/mcp-config.ts) | mcp signal |
| mcp | [scripts/mcp-engram](../../../../sources/NickCirv__engram/scripts/mcp-engram) | mcp signal |
| agentRuntime | [CONTEXT.md](../../../../sources/NickCirv__engram/CONTEXT.md) | agentRuntime signal |
| agentRuntime | [tests/skills-miner.test.ts](../../../../sources/NickCirv__engram/tests/skills-miner.test.ts) | agentRuntime signal |
| agentRuntime | [tests/intercept/context.test.ts](../../../../sources/NickCirv__engram/tests/intercept/context.test.ts) | agentRuntime signal |
| agentRuntime | [tests/intercept/hook-log.test.ts](../../../../sources/NickCirv__engram/tests/intercept/hook-log.test.ts) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/NickCirv__engram/server.json) | entrypoints signal |
| entrypoints | [src/cli.ts](../../../../sources/NickCirv__engram/src/cli.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/NickCirv__engram/src/index.ts) | entrypoints signal |
| entrypoints | [adapters/continue/src/index.ts](../../../../sources/NickCirv__engram/adapters/continue/src/index.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [server.json](../../../../sources/NickCirv__engram/server.json)<br>[src/cli.ts](../../../../sources/NickCirv__engram/src/cli.ts)<br>[src/index.ts](../../../../sources/NickCirv__engram/src/index.ts)<br>[adapters/continue/src/index.ts](../../../../sources/NickCirv__engram/adapters/continue/src/index.ts) |
| agentRuntime | 27 | [CONTEXT.md](../../../../sources/NickCirv__engram/CONTEXT.md)<br>[tests/skills-miner.test.ts](../../../../sources/NickCirv__engram/tests/skills-miner.test.ts)<br>[tests/intercept/context.test.ts](../../../../sources/NickCirv__engram/tests/intercept/context.test.ts)<br>[tests/intercept/hook-log.test.ts](../../../../sources/NickCirv__engram/tests/intercept/hook-log.test.ts)<br>[tests/intercept/memory-md.test.ts](../../../../sources/NickCirv__engram/tests/intercept/memory-md.test.ts)<br>[tests/fixtures/skills/unicode/SKILL.md](../../../../sources/NickCirv__engram/tests/fixtures/skills/unicode/SKILL.md)<br>[tests/fixtures/skills/normal/SKILL.md](../../../../sources/NickCirv__engram/tests/fixtures/skills/normal/SKILL.md)<br>[tests/fixtures/skills/multiline/SKILL.md](../../../../sources/NickCirv__engram/tests/fixtures/skills/multiline/SKILL.md) |
| mcp | 6 | [tests/providers/mcp-config.test.ts](../../../../sources/NickCirv__engram/tests/providers/mcp-config.test.ts)<br>[src/providers/mcp-client.ts](../../../../sources/NickCirv__engram/src/providers/mcp-client.ts)<br>[src/providers/mcp-config.ts](../../../../sources/NickCirv__engram/src/providers/mcp-config.ts)<br>[scripts/mcp-engram](../../../../sources/NickCirv__engram/scripts/mcp-engram)<br>[plugins/anthropic-marketplace/engram/.mcp.json](../../../../sources/NickCirv__engram/plugins/anthropic-marketplace/engram/.mcp.json)<br>[docs/integrations/cursor-mcp.md](../../../../sources/NickCirv__engram/docs/integrations/cursor-mcp.md) |
| retrieval | 29 | [tests/mistake-memory.test.ts](../../../../sources/NickCirv__engram/tests/mistake-memory.test.ts)<br>[tests/providers/anthropic-memory.test.ts](../../../../sources/NickCirv__engram/tests/providers/anthropic-memory.test.ts)<br>[tests/intercept/memory-md.test.ts](../../../../sources/NickCirv__engram/tests/intercept/memory-md.test.ts)<br>[tests/graph/pagerank.test.ts](../../../../sources/NickCirv__engram/tests/graph/pagerank.test.ts)<br>[tests/graph/traversal.test.ts](../../../../sources/NickCirv__engram/tests/graph/traversal.test.ts)<br>[tests/fixtures/memory-md/sample-index.md](../../../../sources/NickCirv__engram/tests/fixtures/memory-md/sample-index.md)<br>[src/index.ts](../../../../sources/NickCirv__engram/src/index.ts)<br>[src/tuner/index.ts](../../../../sources/NickCirv__engram/src/tuner/index.ts) |
| spec | 16 | [docs/specs/2026-04-13-context-spine-design.md](../../../../sources/NickCirv__engram/docs/specs/2026-04-13-context-spine-design.md)<br>[docs/specs/engram-v2-roadmap.md](../../../../sources/NickCirv__engram/docs/specs/engram-v2-roadmap.md)<br>[docs/adr/0001-grep-symbol-intercept.md](../../../../sources/NickCirv__engram/docs/adr/0001-grep-symbol-intercept.md)<br>[docs/adr/0002-session-level-bench.md](../../../../sources/NickCirv__engram/docs/adr/0002-session-level-bench.md)<br>[docs/adr/0003-same-session-read-dedup.md](../../../../sources/NickCirv__engram/docs/adr/0003-same-session-read-dedup.md)<br>[docs/adr/0004-grep-richer-find-usages.md](../../../../sources/NickCirv__engram/docs/adr/0004-grep-richer-find-usages.md)<br>[docs/adr/0005-bash-grep-interception.md](../../../../sources/NickCirv__engram/docs/adr/0005-bash-grep-interception.md)<br>[docs/adr/0006-honest-before-after-demo.md](../../../../sources/NickCirv__engram/docs/adr/0006-honest-before-after-demo.md) |
| eval | 124 | [tests/ast-miner.test.ts](../../../../sources/NickCirv__engram/tests/ast-miner.test.ts)<br>[tests/autogen.test.ts](../../../../sources/NickCirv__engram/tests/autogen.test.ts)<br>[tests/bench-stats.test.ts](../../../../sources/NickCirv__engram/tests/bench-stats.test.ts)<br>[tests/cache.test.ts](../../../../sources/NickCirv__engram/tests/cache.test.ts)<br>[tests/cli-guards.test.ts](../../../../sources/NickCirv__engram/tests/cli-guards.test.ts)<br>[tests/core-packet-ratio.test.ts](../../../../sources/NickCirv__engram/tests/core-packet-ratio.test.ts)<br>[tests/core.test.ts](../../../../sources/NickCirv__engram/tests/core.test.ts)<br>[tests/cost-instrument.test.ts](../../../../sources/NickCirv__engram/tests/cost-instrument.test.ts) |
| security | 8 | [SECURITY.md](../../../../sources/NickCirv__engram/SECURITY.md)<br>[tests/server/security.test.ts](../../../../sources/NickCirv__engram/tests/server/security.test.ts)<br>[tests/mesh/audit.test.ts](../../../../sources/NickCirv__engram/tests/mesh/audit.test.ts)<br>[tests/intercept/mistake-guard-invocation.test.ts](../../../../sources/NickCirv__engram/tests/intercept/mistake-guard-invocation.test.ts)<br>[tests/intercept/handlers/mistake-guard.test.ts](../../../../sources/NickCirv__engram/tests/intercept/handlers/mistake-guard.test.ts)<br>[src/server/auth.ts](../../../../sources/NickCirv__engram/src/server/auth.ts)<br>[src/mesh/audit.ts](../../../../sources/NickCirv__engram/src/mesh/audit.ts)<br>[src/intercept/handlers/mistake-guard.ts](../../../../sources/NickCirv__engram/src/intercept/handlers/mistake-guard.ts) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/NickCirv__engram/.github/workflows/ci.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 3 | [CLAUDE.md](../../../../sources/NickCirv__engram/CLAUDE.md)<br>[docs/demos/hf/AGENTS.md](../../../../sources/NickCirv__engram/docs/demos/hf/AGENTS.md)<br>[docs/demos/hf/CLAUDE.md](../../../../sources/NickCirv__engram/docs/demos/hf/CLAUDE.md) |
| docs | 65 | [README.md](../../../../sources/NickCirv__engram/README.md)<br>[tests/fixtures/hook-payloads/README.md](../../../../sources/NickCirv__engram/tests/fixtures/hook-payloads/README.md)<br>[plugins/anthropic-marketplace/engram/README.md](../../../../sources/NickCirv__engram/plugins/anthropic-marketplace/engram/README.md)<br>[extensions/vscode/README.md](../../../../sources/NickCirv__engram/extensions/vscode/README.md)<br>[docs/COMPARISON.md](../../../../sources/NickCirv__engram/docs/COMPARISON.md)<br>[docs/engram-integration-guide.html](../../../../sources/NickCirv__engram/docs/engram-integration-guide.html)<br>[docs/engram-sentinel-ecosystem.html](../../../../sources/NickCirv__engram/docs/engram-sentinel-ecosystem.html)<br>[docs/engram-sentinel-ecosystem.pdf](../../../../sources/NickCirv__engram/docs/engram-sentinel-ecosystem.pdf) |
| config | 6 | [package.json](../../../../sources/NickCirv__engram/package.json)<br>[tsconfig.json](../../../../sources/NickCirv__engram/tsconfig.json)<br>[extensions/vscode/package.json](../../../../sources/NickCirv__engram/extensions/vscode/package.json)<br>[extensions/vscode/tsconfig.json](../../../../sources/NickCirv__engram/extensions/vscode/tsconfig.json)<br>[adapters/continue/package.json](../../../../sources/NickCirv__engram/adapters/continue/package.json)<br>[adapters/continue/tsconfig.json](../../../../sources/NickCirv__engram/adapters/continue/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 124 | [tests/ast-miner.test.ts](../../../../sources/NickCirv__engram/tests/ast-miner.test.ts)<br>[tests/autogen.test.ts](../../../../sources/NickCirv__engram/tests/autogen.test.ts)<br>[tests/bench-stats.test.ts](../../../../sources/NickCirv__engram/tests/bench-stats.test.ts)<br>[tests/cache.test.ts](../../../../sources/NickCirv__engram/tests/cache.test.ts)<br>[tests/cli-guards.test.ts](../../../../sources/NickCirv__engram/tests/cli-guards.test.ts)<br>[tests/core-packet-ratio.test.ts](../../../../sources/NickCirv__engram/tests/core-packet-ratio.test.ts) |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/NickCirv__engram/.github/workflows/ci.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 8 | [SECURITY.md](../../../../sources/NickCirv__engram/SECURITY.md)<br>[tests/server/security.test.ts](../../../../sources/NickCirv__engram/tests/server/security.test.ts)<br>[tests/mesh/audit.test.ts](../../../../sources/NickCirv__engram/tests/mesh/audit.test.ts)<br>[tests/intercept/mistake-guard-invocation.test.ts](../../../../sources/NickCirv__engram/tests/intercept/mistake-guard-invocation.test.ts)<br>[tests/intercept/handlers/mistake-guard.test.ts](../../../../sources/NickCirv__engram/tests/intercept/handlers/mistake-guard.test.ts)<br>[src/server/auth.ts](../../../../sources/NickCirv__engram/src/server/auth.ts) |
| 에이전트 지시문 | 3 | [CLAUDE.md](../../../../sources/NickCirv__engram/CLAUDE.md)<br>[docs/demos/hf/AGENTS.md](../../../../sources/NickCirv__engram/docs/demos/hf/AGENTS.md)<br>[docs/demos/hf/CLAUDE.md](../../../../sources/NickCirv__engram/docs/demos/hf/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/providers/mcp-config.test.ts`, `src/providers/mcp-client.ts`, `src/providers/mcp-config.ts`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `src/cli.ts`, `src/index.ts`.
3. agent/tool runtime 매핑: `CONTEXT.md`, `tests/skills-miner.test.ts`, `tests/intercept/context.test.ts`.
4. retrieval/memory/indexing 확인: `tests/mistake-memory.test.ts`, `tests/providers/anthropic-memory.test.ts`, `tests/intercept/memory-md.test.ts`.
5. test/eval 파일로 동작 검증: `tests/ast-miner.test.ts`, `tests/autogen.test.ts`, `tests/bench-stats.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The context spine that 10x's every AI coding session. Live in 8 IDEs Claude Code, Cursor, Cline, Continue, Aider, Codex,. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, modelcontextprotocol이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
