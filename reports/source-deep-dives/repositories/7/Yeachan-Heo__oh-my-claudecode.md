# Yeachan-Heo/oh-my-claudecode 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local clone structure analysis: 1529 files, 290 directories.

## 요약

- 조사 단위: `sources/Yeachan-Heo__oh-my-claudecode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,529 files, 290 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, src/team/mcp-comm.ts, src/team/mcp-team-bridge.ts이고, 의존성 단서는 anthropic, claude, modelcontextprotocol, vscode, commander, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Yeachan-Heo/oh-my-claudecode |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/Yeachan-Heo__oh-my-claudecode](../../../../sources/Yeachan-Heo__oh-my-claudecode) |
| 기존 보고서 | [reports/clone-structures/Yeachan-Heo__oh-my-claudecode.md](../../../clone-structures/Yeachan-Heo__oh-my-claudecode.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1529 / 290 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .claude-plugin, .clawhip, .github, .omx, agents, assets, benchmark, benchmarks, bin, bridge, commands, docs, examples, hooks, missions, research, scripts, seminar, shellmark, skills |
| 상위 확장자 | .ts: 1107, .md: 229, .mjs: 73, .json: 40, .sh: 30, .yml: 10, .cjs: 9, (none): 7, .py: 6, .js: 4, .jsonl: 4, .txt: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 164 |
| docs | documentation surface | 32 |
| tests | validation surface | 15 |
| examples/vendor-mcp-server | examples workspace | 4 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| assets | top-level component | 1 |
| benchmark | validation surface | 1 |
| benchmarks | validation surface | 1 |
| bin | top-level component | 1 |
| bridge | top-level component | 1 |
| commands | top-level component | 1 |
| examples | top-level component | 1 |
| hooks | top-level component | 1 |
| missions | top-level component | 1 |
| research | top-level component | 1 |
| scripts | top-level component | 1 |
| seminar | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | build | tsc && node scripts/build-skill-bridge.mjs && node scripts/build-mcp-server.mjs && node scripts/build-bridge-entry.mjs && npm run compose-docs && npm run build:runtime-cli && npm run build:team-server && npm run build:cl |
| build | package.json | build:bridge | node scripts/build-skill-bridge.mjs |
| build | package.json | build:bridge-entry | node scripts/build-bridge-entry.mjs |
| build | package.json | build:cli | node scripts/build-cli.mjs |
| build | package.json | build:runtime-cli | node scripts/build-runtime-cli.mjs |
| serve-dev | package.json | build:team-server | node scripts/build-team-server.mjs |
| container | package.json | compose-docs | node scripts/compose-docs.mjs |
| serve-dev | package.json | dev | tsc --watch |
| serve-dev | package.json | dev:full | concurrently --names "tsc,cli,mcp,bridge-entry,skill-bridge,runtime,team" "tsc --watch" "node scripts/build-cli.mjs --watch" "node scripts/build-mcp-server.mjs --watch" "node scripts/build-bridge-entry.mjs --watch" "node |
| serve-dev | package.json | start | node dist/index.js |
| test | package.json | test | vitest |
| utility | package.json | bench:prompts | tsx benchmarks/run-all.ts |
| utility | package.json | bench:prompts:save | tsx benchmarks/run-all.ts --save-baseline |
| utility | package.json | bench:prompts:compare | tsx benchmarks/run-all.ts --compare |
| test | package.json | test:ui | vitest --ui |
| test | package.json | test:run | vitest run |
| test | package.json | test:coverage | vitest run --coverage |
| quality | package.json | lint | eslint src |
| quality | package.json | format | prettier --write src/**/*.ts |
| utility | package.json | sync-featured-contributors | tsx scripts/generate-featured-contributors.ts |
| utility | package.json | sync-featured-contributors:verify | tsx scripts/generate-featured-contributors.ts --verify |
| utility | package.json | sync-featured-contributors:dry-run | tsx scripts/generate-featured-contributors.ts --dry-run |
| utility | package.json | sync-metadata | tsx scripts/sync-metadata.ts |
| utility | package.json | sync-metadata:verify | tsx scripts/sync-metadata.ts --verify |
| utility | package.json | sync-metadata:dry-run | tsx scripts/sync-metadata.ts --dry-run |
| build | package.json | release | tsx scripts/release.ts |
| build | package.json | prepublishOnly | npm run build && npm run compose-docs |
| utility | package.json | version | bash scripts/sync-version.sh |
| entrypoint | package.json bin | oh-my-claudecode.js | bin/oh-my-claudecode.js |
| entrypoint | package.json bin | oh-my-claudecode.js | bin/oh-my-claudecode.js |
| entrypoint | package.json bin | cli.cjs | bridge/cli.cjs |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | anthropic, claude |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | vscode, commander |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/Yeachan-Heo__oh-my-claudecode/.mcp.json) | mcp signal |
| mcp | [src/team/mcp-comm.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/team/mcp-comm.ts) | mcp signal |
| mcp | [src/team/mcp-team-bridge.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/team/mcp-team-bridge.ts) | mcp signal |
| mcp | [src/team/__tests__/mcp-team-bridge.spawn-args.test.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/team/__tests__/mcp-team-bridge.spawn-args.test.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/lint/skill-parallel-caveats.test.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/tests/lint/skill-parallel-caveats.test.ts) | agentRuntime signal |
| agentRuntime | [templates/hooks/code-simplifier.mjs](../../../../sources/Yeachan-Heo__oh-my-claudecode/templates/hooks/code-simplifier.mjs) | agentRuntime signal |
| agentRuntime | [templates/hooks/keyword-detector.mjs](../../../../sources/Yeachan-Heo__oh-my-claudecode/templates/hooks/keyword-detector.mjs) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/index.ts) | entrypoints signal |
| entrypoints | [examples/vendor-mcp-server/server.mjs](../../../../sources/Yeachan-Heo__oh-my-claudecode/examples/vendor-mcp-server/server.mjs) | entrypoints signal |
| entrypoints | [bin/oh-my-claudecode.js](../../../../sources/Yeachan-Heo__oh-my-claudecode/bin/oh-my-claudecode.js) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/CLAUDE.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [src/index.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/index.ts)<br>[examples/vendor-mcp-server/server.mjs](../../../../sources/Yeachan-Heo__oh-my-claudecode/examples/vendor-mcp-server/server.mjs)<br>[bin/oh-my-claudecode.js](../../../../sources/Yeachan-Heo__oh-my-claudecode/bin/oh-my-claudecode.js) |
| agentRuntime | 526 | [AGENTS.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/AGENTS.md)<br>[tests/lint/skill-parallel-caveats.test.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/tests/lint/skill-parallel-caveats.test.ts)<br>[templates/hooks/code-simplifier.mjs](../../../../sources/Yeachan-Heo__oh-my-claudecode/templates/hooks/code-simplifier.mjs)<br>[templates/hooks/keyword-detector.mjs](../../../../sources/Yeachan-Heo__oh-my-claudecode/templates/hooks/keyword-detector.mjs)<br>[templates/hooks/persistent-mode.mjs](../../../../sources/Yeachan-Heo__oh-my-claudecode/templates/hooks/persistent-mode.mjs)<br>[templates/hooks/post-tool-use-failure.mjs](../../../../sources/Yeachan-Heo__oh-my-claudecode/templates/hooks/post-tool-use-failure.mjs)<br>[templates/hooks/post-tool-use.mjs](../../../../sources/Yeachan-Heo__oh-my-claudecode/templates/hooks/post-tool-use.mjs)<br>[templates/hooks/pre-tool-use.mjs](../../../../sources/Yeachan-Heo__oh-my-claudecode/templates/hooks/pre-tool-use.mjs) |
| mcp | 38 | [.mcp.json](../../../../sources/Yeachan-Heo__oh-my-claudecode/.mcp.json)<br>[src/team/mcp-comm.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/team/mcp-comm.ts)<br>[src/team/mcp-team-bridge.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/team/mcp-team-bridge.ts)<br>[src/team/__tests__/mcp-team-bridge.spawn-args.test.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/team/__tests__/mcp-team-bridge.spawn-args.test.ts)<br>[src/team/__tests__/mcp-team-bridge.usage.test.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/team/__tests__/mcp-team-bridge.usage.test.ts)<br>[src/mcp/index.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/mcp/index.ts)<br>[src/mcp/job-management.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/mcp/job-management.ts)<br>[src/mcp/mcp-config.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/mcp/mcp-config.ts) |
| retrieval | 155 | [tests/integration/concurrent-project-memory.test.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/tests/integration/concurrent-project-memory.test.ts)<br>[src/index.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/index.ts)<br>[src/tools/index.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/tools/index.ts)<br>[src/tools/memory-tools.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/tools/memory-tools.ts)<br>[src/tools/shared-memory-tools.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/tools/shared-memory-tools.ts)<br>[src/tools/wiki-tools.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/tools/wiki-tools.ts)<br>[src/tools/python-repl/index.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/tools/python-repl/index.ts)<br>[src/tools/lsp/index.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/tools/lsp/index.ts) |
| spec | 14 | [src/ralphthon/prd.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/ralphthon/prd.ts)<br>[src/ralphthon/__tests__/prd.test.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/ralphthon/__tests__/prd.test.ts)<br>[src/hud/elements/prd.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/hud/elements/prd.ts)<br>[src/hooks/ralph/prd.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/hooks/ralph/prd.ts)<br>[src/__tests__/ralph-prd-mandatory.test.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/__tests__/ralph-prd-mandatory.test.ts)<br>[src/__tests__/ralph-prd.test.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/__tests__/ralph-prd.test.ts)<br>[docs/ARCHITECTURE.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/docs/ARCHITECTURE.md)<br>[docs/design/CLAUDE_CODE_GOAL_ADAPTER.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/docs/design/CLAUDE_CODE_GOAL_ADAPTER.md) |
| eval | 627 | [tests/perf/subagent-lock.bench.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/tests/perf/subagent-lock.bench.ts)<br>[tests/lint/handoffs-writers.test.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/tests/lint/handoffs-writers.test.ts)<br>[tests/lint/skill-parallel-caveats.test.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/tests/lint/skill-parallel-caveats.test.ts)<br>[tests/integration/concurrent-project-memory.test.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/tests/integration/concurrent-project-memory.test.ts)<br>[tests/integration/concurrent-ralph-sessions.test.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/tests/integration/concurrent-ralph-sessions.test.ts)<br>[tests/integration/multirepo-workspace.test.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/tests/integration/multirepo-workspace.test.ts)<br>[tests/fixtures/typescript-pnpm/package.json](../../../../sources/Yeachan-Heo__oh-my-claudecode/tests/fixtures/typescript-pnpm/package.json)<br>[tests/fixtures/typescript-pnpm/pnpm-lock.yaml](../../../../sources/Yeachan-Heo__oh-my-claudecode/tests/fixtures/typescript-pnpm/pnpm-lock.yaml) |
| security | 37 | [SECURITY.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/SECURITY.md)<br>[templates/rules/security.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/templates/rules/security.md)<br>[src/utils/ssrf-guard.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/utils/ssrf-guard.ts)<br>[src/tools/python-repl/__tests__/python-sandbox.test.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/tools/python-repl/__tests__/python-sandbox.test.ts)<br>[src/team/allocation-policy.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/team/allocation-policy.ts)<br>[src/team/audit-log.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/team/audit-log.ts)<br>[src/team/__tests__/allocation-policy.test.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/team/__tests__/allocation-policy.test.ts)<br>[src/team/__tests__/audit-log.test.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/team/__tests__/audit-log.test.ts) |
| ci | 9 | [scripts/ci/check-multirepo-paths.mjs](../../../../sources/Yeachan-Heo__oh-my-claudecode/scripts/ci/check-multirepo-paths.mjs)<br>[scripts/ci/multirepo-patterns.yml](../../../../sources/Yeachan-Heo__oh-my-claudecode/scripts/ci/multirepo-patterns.yml)<br>[.github/workflows/auto-label.yml](../../../../sources/Yeachan-Heo__oh-my-claudecode/.github/workflows/auto-label.yml)<br>[.github/workflows/ci.yml](../../../../sources/Yeachan-Heo__oh-my-claudecode/.github/workflows/ci.yml)<br>[.github/workflows/cleanup.yml](../../../../sources/Yeachan-Heo__oh-my-claudecode/.github/workflows/cleanup.yml)<br>[.github/workflows/pr-check.yml](../../../../sources/Yeachan-Heo__oh-my-claudecode/.github/workflows/pr-check.yml)<br>[.github/workflows/release.yml](../../../../sources/Yeachan-Heo__oh-my-claudecode/.github/workflows/release.yml)<br>[.github/workflows/stale.yml](../../../../sources/Yeachan-Heo__oh-my-claudecode/.github/workflows/stale.yml) |
| container | 2 | [benchmark/docker-compose.yml](../../../../sources/Yeachan-Heo__oh-my-claudecode/benchmark/docker-compose.yml)<br>[benchmark/Dockerfile](../../../../sources/Yeachan-Heo__oh-my-claudecode/benchmark/Dockerfile) |
| instruction | 13 | [AGENTS.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/AGENTS.md)<br>[CLAUDE.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/CLAUDE.md)<br>[src/AGENTS.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/AGENTS.md)<br>[src/tools/AGENTS.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/tools/AGENTS.md)<br>[src/tools/lsp/AGENTS.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/tools/lsp/AGENTS.md)<br>[src/tools/diagnostics/AGENTS.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/tools/diagnostics/AGENTS.md)<br>[src/hooks/AGENTS.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/hooks/AGENTS.md)<br>[src/features/AGENTS.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/features/AGENTS.md) |
| docs | 60 | [README.de.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/README.de.md)<br>[README.es.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/README.es.md)<br>[README.fr.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/README.fr.md)<br>[README.it.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/README.it.md)<br>[README.ja.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/README.ja.md)<br>[README.ko.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/README.ko.md)<br>[README.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/README.md)<br>[README.pt.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/README.pt.md) |
| config | 5 | [package.json](../../../../sources/Yeachan-Heo__oh-my-claudecode/package.json)<br>[tsconfig.json](../../../../sources/Yeachan-Heo__oh-my-claudecode/tsconfig.json)<br>[tests/fixtures/typescript-pnpm/package.json](../../../../sources/Yeachan-Heo__oh-my-claudecode/tests/fixtures/typescript-pnpm/package.json)<br>[tests/fixtures/typescript-pnpm/tsconfig.json](../../../../sources/Yeachan-Heo__oh-my-claudecode/tests/fixtures/typescript-pnpm/tsconfig.json)<br>[benchmark/requirements.txt](../../../../sources/Yeachan-Heo__oh-my-claudecode/benchmark/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 627 | [tests/perf/subagent-lock.bench.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/tests/perf/subagent-lock.bench.ts)<br>[tests/lint/handoffs-writers.test.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/tests/lint/handoffs-writers.test.ts)<br>[tests/lint/skill-parallel-caveats.test.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/tests/lint/skill-parallel-caveats.test.ts)<br>[tests/integration/concurrent-project-memory.test.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/tests/integration/concurrent-project-memory.test.ts)<br>[tests/integration/concurrent-ralph-sessions.test.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/tests/integration/concurrent-ralph-sessions.test.ts)<br>[tests/integration/multirepo-workspace.test.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/tests/integration/multirepo-workspace.test.ts) |
| CI workflow | 9 | [scripts/ci/check-multirepo-paths.mjs](../../../../sources/Yeachan-Heo__oh-my-claudecode/scripts/ci/check-multirepo-paths.mjs)<br>[scripts/ci/multirepo-patterns.yml](../../../../sources/Yeachan-Heo__oh-my-claudecode/scripts/ci/multirepo-patterns.yml)<br>[.github/workflows/auto-label.yml](../../../../sources/Yeachan-Heo__oh-my-claudecode/.github/workflows/auto-label.yml)<br>[.github/workflows/ci.yml](../../../../sources/Yeachan-Heo__oh-my-claudecode/.github/workflows/ci.yml)<br>[.github/workflows/cleanup.yml](../../../../sources/Yeachan-Heo__oh-my-claudecode/.github/workflows/cleanup.yml)<br>[.github/workflows/pr-check.yml](../../../../sources/Yeachan-Heo__oh-my-claudecode/.github/workflows/pr-check.yml) |
| 컨테이너/배포 | 2 | [benchmark/docker-compose.yml](../../../../sources/Yeachan-Heo__oh-my-claudecode/benchmark/docker-compose.yml)<br>[benchmark/Dockerfile](../../../../sources/Yeachan-Heo__oh-my-claudecode/benchmark/Dockerfile) |
| 보안/정책 | 37 | [SECURITY.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/SECURITY.md)<br>[templates/rules/security.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/templates/rules/security.md)<br>[src/utils/ssrf-guard.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/utils/ssrf-guard.ts)<br>[src/tools/python-repl/__tests__/python-sandbox.test.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/tools/python-repl/__tests__/python-sandbox.test.ts)<br>[src/team/allocation-policy.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/team/allocation-policy.ts)<br>[src/team/audit-log.ts](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/team/audit-log.ts) |
| 에이전트 지시문 | 13 | [AGENTS.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/AGENTS.md)<br>[CLAUDE.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/CLAUDE.md)<br>[src/AGENTS.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/AGENTS.md)<br>[src/tools/AGENTS.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/tools/AGENTS.md)<br>[src/tools/lsp/AGENTS.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/tools/lsp/AGENTS.md)<br>[src/tools/diagnostics/AGENTS.md](../../../../sources/Yeachan-Heo__oh-my-claudecode/src/tools/diagnostics/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `.mcp.json`, `src/team/mcp-comm.ts`, `src/team/mcp-team-bridge.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`, `examples/vendor-mcp-server/server.mjs`, `bin/oh-my-claudecode.js`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/lint/skill-parallel-caveats.test.ts`, `templates/hooks/code-simplifier.mjs`.
4. retrieval/memory/indexing 확인: `tests/integration/concurrent-project-memory.test.ts`, `src/index.ts`, `src/tools/index.ts`.
5. test/eval 파일로 동작 검증: `tests/perf/subagent-lock.bench.ts`, `tests/lint/handoffs-writers.test.ts`, `tests/lint/skill-parallel-caveats.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 1529 files, 290 directories.. 핵심 구조 신호는 package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE, anthropic이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
