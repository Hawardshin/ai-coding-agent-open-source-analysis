# mksglu/context-mode 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 562 files, 105 directories.

## 요약

- 조사 단위: `sources/mksglu__context-mode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 562 files, 105 directories, depth score 116, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json.codex.example, .mcp.json.example, tests/mcp-integration.ts이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | mksglu/context-mode |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/mksglu__context-mode](../../../../sources/mksglu__context-mode) |
| 기존 보고서 | [reports/clone-structures/mksglu__context-mode.md](../../../clone-structures/mksglu__context-mode.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 562 / 105 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .agents, .claude, .claude-plugin, .codex-plugin, .cursor-plugin, .github, .openclaw-plugin, .pi, bin, configs, docs, hooks, insight, scripts, skills, src, tests, web |
| 상위 확장자 | .ts: 285, .mjs: 84, .md: 55, .json: 51, .tsx: 22, .txt: 12, .png: 10, (none): 10, .yml: 9, .html: 7, .sh: 4, .example: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 101 |
| src | source boundary | 23 |
| docs | documentation surface | 16 |
| web | source boundary | 6 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| configs | top-level component | 1 |
| hooks | top-level component | 1 |
| insight | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsc && node -e "if(process.platform!=='win32'){require('fs').chmodSync('build/cli.js',0o755)}" && npm run bundle && npm run assert-bundle && npm run assert-asymmetric-drift |
| serve-dev | package.json | assert-bundle | node scripts/assert-bundle.mjs server.bundle.mjs cli.bundle.mjs hooks/session-extract.bundle.mjs hooks/session-snapshot.bundle.mjs hooks/session-db.bundle.mjs hooks/security.bundle.mjs |
| utility | package.json | assert-asymmetric-drift | node scripts/assert-asymmetric-drift.mjs |
| serve-dev | package.json | bundle | esbuild src/server.ts --bundle --platform=node --target=node18 --format=esm --outfile=server.bundle.mjs --external:better-sqlite3 --external:turndown --external:turndown-plugin-gfm --external:@mixmark-io/domino --minify |
| utility | package.json | version-sync | node scripts/version-sync.mjs |
| utility | package.json | version | node scripts/version-sync.mjs && git add package.json .claude-plugin/plugin.json .claude-plugin/marketplace.json .cursor-plugin/plugin.json .codex-plugin/plugin.json .openclaw-plugin/openclaw.plugin.json .openclaw-plugin |
| build | package.json | prepublishOnly | npm run build |
| serve-dev | package.json | dev | npx tsx src/server.ts |
| utility | package.json | setup | npx tsx src/cli.ts setup |
| utility | package.json | doctor | npx tsx src/cli.ts doctor |
| quality | package.json | typecheck | tsc --noEmit |
| test | package.json | pretest | npm run build |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | benchmark | npx tsx tests/benchmark.ts |
| test | package.json | test:use-cases | npx tsx tests/use-cases.ts |
| test | package.json | test:compare | npx tsx tests/context-comparison.ts |
| test | package.json | test:ecosystem | npx tsx tests/ecosystem-benchmark.ts |
| utility | package.json | install:openclaw | node -e "if(process.platform==='win32'){console.error('OpenClaw install requires bash (Git Bash or WSL)');process.exit(1)}else{require('child_process').execSync('bash scripts/install-openclaw-plugin.sh',{stdio:'inherit'} |
| utility | package.json | postinstall | node scripts/postinstall.mjs |
| entrypoint | package.json bin | cli.bundle.mjs | ./cli.bundle.mjs |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
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
| mcp | [.mcp.json.codex.example](../../../../sources/mksglu__context-mode/.mcp.json.codex.example) | mcp signal |
| mcp | [.mcp.json.example](../../../../sources/mksglu__context-mode/.mcp.json.example) | mcp signal |
| mcp | [tests/mcp-integration.ts](../../../../sources/mksglu__context-mode/tests/mcp-integration.ts) | mcp signal |
| mcp | [tests/util/postinstall-heal-mcp-json.test.ts](../../../../sources/mksglu__context-mode/tests/util/postinstall-heal-mcp-json.test.ts) | mcp signal |
| agentRuntime | [web/context-saving.html](../../../../sources/mksglu__context-mode/web/context-saving.html) | agentRuntime signal |
| agentRuntime | [web/og/context-saving-og.html](../../../../sources/mksglu__context-mode/web/og/context-saving-og.html) | agentRuntime signal |
| agentRuntime | [web/og/context-saving.png](../../../../sources/mksglu__context-mode/web/og/context-saving.png) | agentRuntime signal |
| agentRuntime | [tests/context-comparison.ts](../../../../sources/mksglu__context-mode/tests/context-comparison.ts) | agentRuntime signal |
| entrypoints | [server.bundle.mjs](../../../../sources/mksglu__context-mode/server.bundle.mjs) | entrypoints signal |
| entrypoints | [tests/core/server.test.ts](../../../../sources/mksglu__context-mode/tests/core/server.test.ts) | entrypoints signal |
| entrypoints | [src/cli.ts](../../../../sources/mksglu__context-mode/src/cli.ts) | entrypoints signal |
| entrypoints | [src/server.ts](../../../../sources/mksglu__context-mode/src/server.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [server.bundle.mjs](../../../../sources/mksglu__context-mode/server.bundle.mjs)<br>[tests/core/server.test.ts](../../../../sources/mksglu__context-mode/tests/core/server.test.ts)<br>[src/cli.ts](../../../../sources/mksglu__context-mode/src/cli.ts)<br>[src/server.ts](../../../../sources/mksglu__context-mode/src/server.ts)<br>[insight/server.mjs](../../../../sources/mksglu__context-mode/insight/server.mjs)<br>[insight/src/main.tsx](../../../../sources/mksglu__context-mode/insight/src/main.tsx)<br>[bin/statusline.mjs](../../../../sources/mksglu__context-mode/bin/statusline.mjs) |
| agentRuntime | 164 | [web/context-saving.html](../../../../sources/mksglu__context-mode/web/context-saving.html)<br>[web/og/context-saving-og.html](../../../../sources/mksglu__context-mode/web/og/context-saving-og.html)<br>[web/og/context-saving.png](../../../../sources/mksglu__context-mode/web/og/context-saving.png)<br>[tests/context-comparison.ts](../../../../sources/mksglu__context-mode/tests/context-comparison.ts)<br>[tests/executor.test.ts](../../../../sources/mksglu__context-mode/tests/executor.test.ts)<br>[tests/hook-runtime-resolution.test.ts](../../../../sources/mksglu__context-mode/tests/hook-runtime-resolution.test.ts)<br>[tests/session/tool-calls-persistence.test.ts](../../../../sources/mksglu__context-mode/tests/session/tool-calls-persistence.test.ts)<br>[tests/hooks/cache-heal-self-heal.test.ts](../../../../sources/mksglu__context-mode/tests/hooks/cache-heal-self-heal.test.ts) |
| mcp | 28 | [.mcp.json.codex.example](../../../../sources/mksglu__context-mode/.mcp.json.codex.example)<br>[.mcp.json.example](../../../../sources/mksglu__context-mode/.mcp.json.example)<br>[tests/mcp-integration.ts](../../../../sources/mksglu__context-mode/tests/mcp-integration.ts)<br>[tests/util/postinstall-heal-mcp-json.test.ts](../../../../sources/mksglu__context-mode/tests/util/postinstall-heal-mcp-json.test.ts)<br>[tests/scripts/start-mjs-mcp-boot.test.ts](../../../../sources/mksglu__context-mode/tests/scripts/start-mjs-mcp-boot.test.ts)<br>[tests/fixtures/mcp-tools.json](../../../../sources/mksglu__context-mode/tests/fixtures/mcp-tools.json)<br>[tests/fixtures/cursor/posttooluse-mcp.json](../../../../sources/mksglu__context-mode/tests/fixtures/cursor/posttooluse-mcp.json)<br>[tests/fixtures/cursor/pretooluse-mcp.json](../../../../sources/mksglu__context-mode/tests/fixtures/cursor/pretooluse-mcp.json) |
| retrieval | 29 | [web/index.html](../../../../sources/mksglu__context-mode/web/index.html)<br>[tests/core/auto-memory-adapter.test.ts](../../../../sources/mksglu__context-mode/tests/core/auto-memory-adapter.test.ts)<br>[tests/core/auto-memory-config-dir.test.ts](../../../../sources/mksglu__context-mode/tests/core/auto-memory-config-dir.test.ts)<br>[tests/adapters/base-adapter-memory.test.ts](../../../../sources/mksglu__context-mode/tests/adapters/base-adapter-memory.test.ts)<br>[tests/adapters/claude-code-memory.test.ts](../../../../sources/mksglu__context-mode/tests/adapters/claude-code-memory.test.ts)<br>[tests/adapters/memory-conventions.test.ts](../../../../sources/mksglu__context-mode/tests/adapters/memory-conventions.test.ts)<br>[src/search/auto-memory.ts](../../../../sources/mksglu__context-mode/src/search/auto-memory.ts)<br>[src/adapters/zed/index.ts](../../../../sources/mksglu__context-mode/src/adapters/zed/index.ts) |
| spec | 4 | [docs/adr/0001-sessiondb-multi-writer.md](../../../../sources/mksglu__context-mode/docs/adr/0001-sessiondb-multi-writer.md)<br>[docs/adr/0002-tool-description-style.md](../../../../sources/mksglu__context-mode/docs/adr/0002-tool-description-style.md)<br>[docs/adr/0003-routing-deny-reasons.md](../../../../sources/mksglu__context-mode/docs/adr/0003-routing-deny-reasons.md)<br>[docs/adr/0004-stats-strict-compression-formula.md](../../../../sources/mksglu__context-mode/docs/adr/0004-stats-strict-compression-formula.md) |
| eval | 225 | [BENCHMARK.md](../../../../sources/mksglu__context-mode/BENCHMARK.md)<br>[tests/benchmark-results-v04.json](../../../../sources/mksglu__context-mode/tests/benchmark-results-v04.json)<br>[tests/benchmark.ts](../../../../sources/mksglu__context-mode/tests/benchmark.ts)<br>[tests/context-comparison.ts](../../../../sources/mksglu__context-mode/tests/context-comparison.ts)<br>[tests/ecosystem-benchmark.ts](../../../../sources/mksglu__context-mode/tests/ecosystem-benchmark.ts)<br>[tests/executor.test.ts](../../../../sources/mksglu__context-mode/tests/executor.test.ts)<br>[tests/formatters.test.ts](../../../../sources/mksglu__context-mode/tests/formatters.test.ts)<br>[tests/guidance-throttle.test.ts](../../../../sources/mksglu__context-mode/tests/guidance-throttle.test.ts) |
| security | 6 | [tests/security.test.ts](../../../../sources/mksglu__context-mode/tests/security.test.ts)<br>[tests/util/package-deps-policy.test.ts](../../../../sources/mksglu__context-mode/tests/util/package-deps-policy.test.ts)<br>[tests/hooks/require-security.test.ts](../../../../sources/mksglu__context-mode/tests/hooks/require-security.test.ts)<br>[tests/core/deny-policy.test.ts](../../../../sources/mksglu__context-mode/tests/core/deny-policy.test.ts)<br>[src/security.ts](../../../../sources/mksglu__context-mode/src/security.ts)<br>[hooks/security.bundle.mjs](../../../../sources/mksglu__context-mode/hooks/security.bundle.mjs) |
| ci | 5 | [.github/workflows/bundle.yml](../../../../sources/mksglu__context-mode/.github/workflows/bundle.yml)<br>[.github/workflows/ci.yml](../../../../sources/mksglu__context-mode/.github/workflows/ci.yml)<br>[.github/workflows/openclaw-e2e.yml](../../../../sources/mksglu__context-mode/.github/workflows/openclaw-e2e.yml)<br>[.github/workflows/tier2-e2e-smoke.yml](../../../../sources/mksglu__context-mode/.github/workflows/tier2-e2e-smoke.yml)<br>[.github/workflows/update-stats.yml](../../../../sources/mksglu__context-mode/.github/workflows/update-stats.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 12 | [CLAUDE.md](../../../../sources/mksglu__context-mode/CLAUDE.md)<br>[configs/zed/AGENTS.md](../../../../sources/mksglu__context-mode/configs/zed/AGENTS.md)<br>[configs/vscode-copilot/copilot-instructions.md](../../../../sources/mksglu__context-mode/configs/vscode-copilot/copilot-instructions.md)<br>[configs/pi/AGENTS.md](../../../../sources/mksglu__context-mode/configs/pi/AGENTS.md)<br>[configs/opencode/AGENTS.md](../../../../sources/mksglu__context-mode/configs/opencode/AGENTS.md)<br>[configs/openclaw/AGENTS.md](../../../../sources/mksglu__context-mode/configs/openclaw/AGENTS.md)<br>[configs/kilo/AGENTS.md](../../../../sources/mksglu__context-mode/configs/kilo/AGENTS.md)<br>[configs/jetbrains-copilot/copilot-instructions.md](../../../../sources/mksglu__context-mode/configs/jetbrains-copilot/copilot-instructions.md) |
| docs | 13 | [README.md](../../../../sources/mksglu__context-mode/README.md)<br>[docs/jetbrains-copilot.md](../../../../sources/mksglu__context-mode/docs/jetbrains-copilot.md)<br>[docs/llms-full.txt](../../../../sources/mksglu__context-mode/docs/llms-full.txt)<br>[docs/llms.txt](../../../../sources/mksglu__context-mode/docs/llms.txt)<br>[docs/platform-support.md](../../../../sources/mksglu__context-mode/docs/platform-support.md)<br>[docs/UPSTREAM-CREDITS.md](../../../../sources/mksglu__context-mode/docs/UPSTREAM-CREDITS.md)<br>[docs/adr/0001-sessiondb-multi-writer.md](../../../../sources/mksglu__context-mode/docs/adr/0001-sessiondb-multi-writer.md)<br>[docs/adr/0002-tool-description-style.md](../../../../sources/mksglu__context-mode/docs/adr/0002-tool-description-style.md) |
| config | 8 | [package.json](../../../../sources/mksglu__context-mode/package.json)<br>[tsconfig.json](../../../../sources/mksglu__context-mode/tsconfig.json)<br>[web/og/package.json](../../../../sources/mksglu__context-mode/web/og/package.json)<br>[insight/package.json](../../../../sources/mksglu__context-mode/insight/package.json)<br>[insight/tsconfig.json](../../../../sources/mksglu__context-mode/insight/tsconfig.json)<br>[.pi/extensions/context-mode/package.json](../../../../sources/mksglu__context-mode/.pi/extensions/context-mode/package.json)<br>[.pi/extensions/context-mode/tsconfig.json](../../../../sources/mksglu__context-mode/.pi/extensions/context-mode/tsconfig.json)<br>[.openclaw-plugin/package.json](../../../../sources/mksglu__context-mode/.openclaw-plugin/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 225 | [BENCHMARK.md](../../../../sources/mksglu__context-mode/BENCHMARK.md)<br>[tests/benchmark-results-v04.json](../../../../sources/mksglu__context-mode/tests/benchmark-results-v04.json)<br>[tests/benchmark.ts](../../../../sources/mksglu__context-mode/tests/benchmark.ts)<br>[tests/context-comparison.ts](../../../../sources/mksglu__context-mode/tests/context-comparison.ts)<br>[tests/ecosystem-benchmark.ts](../../../../sources/mksglu__context-mode/tests/ecosystem-benchmark.ts)<br>[tests/executor.test.ts](../../../../sources/mksglu__context-mode/tests/executor.test.ts) |
| CI workflow | 5 | [.github/workflows/bundle.yml](../../../../sources/mksglu__context-mode/.github/workflows/bundle.yml)<br>[.github/workflows/ci.yml](../../../../sources/mksglu__context-mode/.github/workflows/ci.yml)<br>[.github/workflows/openclaw-e2e.yml](../../../../sources/mksglu__context-mode/.github/workflows/openclaw-e2e.yml)<br>[.github/workflows/tier2-e2e-smoke.yml](../../../../sources/mksglu__context-mode/.github/workflows/tier2-e2e-smoke.yml)<br>[.github/workflows/update-stats.yml](../../../../sources/mksglu__context-mode/.github/workflows/update-stats.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 6 | [tests/security.test.ts](../../../../sources/mksglu__context-mode/tests/security.test.ts)<br>[tests/util/package-deps-policy.test.ts](../../../../sources/mksglu__context-mode/tests/util/package-deps-policy.test.ts)<br>[tests/hooks/require-security.test.ts](../../../../sources/mksglu__context-mode/tests/hooks/require-security.test.ts)<br>[tests/core/deny-policy.test.ts](../../../../sources/mksglu__context-mode/tests/core/deny-policy.test.ts)<br>[src/security.ts](../../../../sources/mksglu__context-mode/src/security.ts)<br>[hooks/security.bundle.mjs](../../../../sources/mksglu__context-mode/hooks/security.bundle.mjs) |
| 에이전트 지시문 | 12 | [CLAUDE.md](../../../../sources/mksglu__context-mode/CLAUDE.md)<br>[configs/zed/AGENTS.md](../../../../sources/mksglu__context-mode/configs/zed/AGENTS.md)<br>[configs/vscode-copilot/copilot-instructions.md](../../../../sources/mksglu__context-mode/configs/vscode-copilot/copilot-instructions.md)<br>[configs/pi/AGENTS.md](../../../../sources/mksglu__context-mode/configs/pi/AGENTS.md)<br>[configs/opencode/AGENTS.md](../../../../sources/mksglu__context-mode/configs/opencode/AGENTS.md)<br>[configs/openclaw/AGENTS.md](../../../../sources/mksglu__context-mode/configs/openclaw/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `.mcp.json.codex.example`, `.mcp.json.example`, `tests/mcp-integration.ts`.
2. entrypoint를 따라 실행 흐름 확인: `server.bundle.mjs`, `tests/core/server.test.ts`, `src/cli.ts`.
3. agent/tool runtime 매핑: `web/context-saving.html`, `web/og/context-saving-og.html`, `web/og/context-saving.png`.
4. retrieval/memory/indexing 확인: `web/index.html`, `tests/core/auto-memory-adapter.test.ts`, `tests/core/auto-memory-config-dir.test.ts`.
5. test/eval 파일로 동작 검증: `BENCHMARK.md`, `tests/benchmark-results-v04.json`, `tests/benchmark.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 562 files, 105 directories.. 핵심 구조 신호는 package.json, README.md, CLAUDE.md, LICENSE, modelcontextprotocol, tests이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
