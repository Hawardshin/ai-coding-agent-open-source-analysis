# mksglu/context-mode Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 562 files, 105 directories.

## 요약

- 조사 단위: `sources/mksglu__context-mode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 562 files, 105 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json.codex.example, .mcp.json.example, tests/mcp-integration.ts이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | mksglu/context-mode |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/mksglu__context-mode](../../../../sources/mksglu__context-mode) |
| Existing report | [reports/clone-structures/mksglu__context-mode.md](../../../clone-structures/mksglu__context-mode.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 562 / 105 |
| Max observed depth | 5 |
| Top directories | .agents, .claude, .claude-plugin, .codex-plugin, .cursor-plugin, .github, .openclaw-plugin, .pi, bin, configs, docs, hooks, insight, scripts, skills, src, tests, web |
| Top extensions | .ts: 285, .mjs: 84, .md: 55, .json: 51, .tsx: 22, .txt: 12, .png: 10, (none): 10, .yml: 9, .html: 7, .sh: 4, .example: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
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


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [server.bundle.mjs](../../../../sources/mksglu__context-mode/server.bundle.mjs)<br>[tests/core/server.test.ts](../../../../sources/mksglu__context-mode/tests/core/server.test.ts)<br>[src/cli.ts](../../../../sources/mksglu__context-mode/src/cli.ts)<br>[src/server.ts](../../../../sources/mksglu__context-mode/src/server.ts)<br>[insight/server.mjs](../../../../sources/mksglu__context-mode/insight/server.mjs)<br>[insight/src/main.tsx](../../../../sources/mksglu__context-mode/insight/src/main.tsx)<br>[bin/statusline.mjs](../../../../sources/mksglu__context-mode/bin/statusline.mjs) |
| agentRuntime | 164 | [web/context-saving.html](../../../../sources/mksglu__context-mode/web/context-saving.html)<br>[web/og/context-saving-og.html](../../../../sources/mksglu__context-mode/web/og/context-saving-og.html)<br>[web/og/context-saving.png](../../../../sources/mksglu__context-mode/web/og/context-saving.png)<br>[tests/context-comparison.ts](../../../../sources/mksglu__context-mode/tests/context-comparison.ts)<br>[tests/executor.test.ts](../../../../sources/mksglu__context-mode/tests/executor.test.ts)<br>[tests/hook-runtime-resolution.test.ts](../../../../sources/mksglu__context-mode/tests/hook-runtime-resolution.test.ts)<br>[tests/session/tool-calls-persistence.test.ts](../../../../sources/mksglu__context-mode/tests/session/tool-calls-persistence.test.ts)<br>[tests/hooks/cache-heal-self-heal.test.ts](../../../../sources/mksglu__context-mode/tests/hooks/cache-heal-self-heal.test.ts) |
| mcp | 28 | [.mcp.json.codex.example](../../../../sources/mksglu__context-mode/.mcp.json.codex.example)<br>[.mcp.json.example](../../../../sources/mksglu__context-mode/.mcp.json.example)<br>[tests/mcp-integration.ts](../../../../sources/mksglu__context-mode/tests/mcp-integration.ts)<br>[tests/util/postinstall-heal-mcp-json.test.ts](../../../../sources/mksglu__context-mode/tests/util/postinstall-heal-mcp-json.test.ts)<br>[tests/scripts/start-mjs-mcp-boot.test.ts](../../../../sources/mksglu__context-mode/tests/scripts/start-mjs-mcp-boot.test.ts)<br>[tests/fixtures/mcp-tools.json](../../../../sources/mksglu__context-mode/tests/fixtures/mcp-tools.json)<br>[tests/fixtures/cursor/posttooluse-mcp.json](../../../../sources/mksglu__context-mode/tests/fixtures/cursor/posttooluse-mcp.json)<br>[tests/fixtures/cursor/pretooluse-mcp.json](../../../../sources/mksglu__context-mode/tests/fixtures/cursor/pretooluse-mcp.json) |
| retrieval | 29 | [web/index.html](../../../../sources/mksglu__context-mode/web/index.html)<br>[tests/core/auto-memory-adapter.test.ts](../../../../sources/mksglu__context-mode/tests/core/auto-memory-adapter.test.ts)<br>[tests/core/auto-memory-config-dir.test.ts](../../../../sources/mksglu__context-mode/tests/core/auto-memory-config-dir.test.ts)<br>[tests/adapters/base-adapter-memory.test.ts](../../../../sources/mksglu__context-mode/tests/adapters/base-adapter-memory.test.ts)<br>[tests/adapters/claude-code-memory.test.ts](../../../../sources/mksglu__context-mode/tests/adapters/claude-code-memory.test.ts)<br>[tests/adapters/memory-conventions.test.ts](../../../../sources/mksglu__context-mode/tests/adapters/memory-conventions.test.ts)<br>[src/search/auto-memory.ts](../../../../sources/mksglu__context-mode/src/search/auto-memory.ts)<br>[src/adapters/zed/index.ts](../../../../sources/mksglu__context-mode/src/adapters/zed/index.ts) |
| spec | 4 | [docs/adr/0001-sessiondb-multi-writer.md](../../../../sources/mksglu__context-mode/docs/adr/0001-sessiondb-multi-writer.md)<br>[docs/adr/0002-tool-description-style.md](../../../../sources/mksglu__context-mode/docs/adr/0002-tool-description-style.md)<br>[docs/adr/0003-routing-deny-reasons.md](../../../../sources/mksglu__context-mode/docs/adr/0003-routing-deny-reasons.md)<br>[docs/adr/0004-stats-strict-compression-formula.md](../../../../sources/mksglu__context-mode/docs/adr/0004-stats-strict-compression-formula.md) |
| eval | 225 | [BENCHMARK.md](../../../../sources/mksglu__context-mode/BENCHMARK.md)<br>[tests/benchmark-results-v04.json](../../../../sources/mksglu__context-mode/tests/benchmark-results-v04.json)<br>[tests/benchmark.ts](../../../../sources/mksglu__context-mode/tests/benchmark.ts)<br>[tests/context-comparison.ts](../../../../sources/mksglu__context-mode/tests/context-comparison.ts)<br>[tests/ecosystem-benchmark.ts](../../../../sources/mksglu__context-mode/tests/ecosystem-benchmark.ts)<br>[tests/executor.test.ts](../../../../sources/mksglu__context-mode/tests/executor.test.ts)<br>[tests/formatters.test.ts](../../../../sources/mksglu__context-mode/tests/formatters.test.ts)<br>[tests/guidance-throttle.test.ts](../../../../sources/mksglu__context-mode/tests/guidance-throttle.test.ts) |
| security | 6 | [tests/security.test.ts](../../../../sources/mksglu__context-mode/tests/security.test.ts)<br>[tests/util/package-deps-policy.test.ts](../../../../sources/mksglu__context-mode/tests/util/package-deps-policy.test.ts)<br>[tests/hooks/require-security.test.ts](../../../../sources/mksglu__context-mode/tests/hooks/require-security.test.ts)<br>[tests/core/deny-policy.test.ts](../../../../sources/mksglu__context-mode/tests/core/deny-policy.test.ts)<br>[src/security.ts](../../../../sources/mksglu__context-mode/src/security.ts)<br>[hooks/security.bundle.mjs](../../../../sources/mksglu__context-mode/hooks/security.bundle.mjs) |
| ci | 5 | [.github/workflows/bundle.yml](../../../../sources/mksglu__context-mode/.github/workflows/bundle.yml)<br>[.github/workflows/ci.yml](../../../../sources/mksglu__context-mode/.github/workflows/ci.yml)<br>[.github/workflows/openclaw-e2e.yml](../../../../sources/mksglu__context-mode/.github/workflows/openclaw-e2e.yml)<br>[.github/workflows/tier2-e2e-smoke.yml](../../../../sources/mksglu__context-mode/.github/workflows/tier2-e2e-smoke.yml)<br>[.github/workflows/update-stats.yml](../../../../sources/mksglu__context-mode/.github/workflows/update-stats.yml) |
| container | 0 | not obvious |
| instruction | 12 | [CLAUDE.md](../../../../sources/mksglu__context-mode/CLAUDE.md)<br>[configs/zed/AGENTS.md](../../../../sources/mksglu__context-mode/configs/zed/AGENTS.md)<br>[configs/vscode-copilot/copilot-instructions.md](../../../../sources/mksglu__context-mode/configs/vscode-copilot/copilot-instructions.md)<br>[configs/pi/AGENTS.md](../../../../sources/mksglu__context-mode/configs/pi/AGENTS.md)<br>[configs/opencode/AGENTS.md](../../../../sources/mksglu__context-mode/configs/opencode/AGENTS.md)<br>[configs/openclaw/AGENTS.md](../../../../sources/mksglu__context-mode/configs/openclaw/AGENTS.md)<br>[configs/kilo/AGENTS.md](../../../../sources/mksglu__context-mode/configs/kilo/AGENTS.md)<br>[configs/jetbrains-copilot/copilot-instructions.md](../../../../sources/mksglu__context-mode/configs/jetbrains-copilot/copilot-instructions.md) |
| docs | 13 | [README.md](../../../../sources/mksglu__context-mode/README.md)<br>[docs/jetbrains-copilot.md](../../../../sources/mksglu__context-mode/docs/jetbrains-copilot.md)<br>[docs/llms-full.txt](../../../../sources/mksglu__context-mode/docs/llms-full.txt)<br>[docs/llms.txt](../../../../sources/mksglu__context-mode/docs/llms.txt)<br>[docs/platform-support.md](../../../../sources/mksglu__context-mode/docs/platform-support.md)<br>[docs/UPSTREAM-CREDITS.md](../../../../sources/mksglu__context-mode/docs/UPSTREAM-CREDITS.md)<br>[docs/adr/0001-sessiondb-multi-writer.md](../../../../sources/mksglu__context-mode/docs/adr/0001-sessiondb-multi-writer.md)<br>[docs/adr/0002-tool-description-style.md](../../../../sources/mksglu__context-mode/docs/adr/0002-tool-description-style.md) |
| config | 8 | [package.json](../../../../sources/mksglu__context-mode/package.json)<br>[tsconfig.json](../../../../sources/mksglu__context-mode/tsconfig.json)<br>[web/og/package.json](../../../../sources/mksglu__context-mode/web/og/package.json)<br>[insight/package.json](../../../../sources/mksglu__context-mode/insight/package.json)<br>[insight/tsconfig.json](../../../../sources/mksglu__context-mode/insight/tsconfig.json)<br>[.pi/extensions/context-mode/package.json](../../../../sources/mksglu__context-mode/.pi/extensions/context-mode/package.json)<br>[.pi/extensions/context-mode/tsconfig.json](../../../../sources/mksglu__context-mode/.pi/extensions/context-mode/tsconfig.json)<br>[.openclaw-plugin/package.json](../../../../sources/mksglu__context-mode/.openclaw-plugin/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 225 | [BENCHMARK.md](../../../../sources/mksglu__context-mode/BENCHMARK.md)<br>[tests/benchmark-results-v04.json](../../../../sources/mksglu__context-mode/tests/benchmark-results-v04.json)<br>[tests/benchmark.ts](../../../../sources/mksglu__context-mode/tests/benchmark.ts)<br>[tests/context-comparison.ts](../../../../sources/mksglu__context-mode/tests/context-comparison.ts)<br>[tests/ecosystem-benchmark.ts](../../../../sources/mksglu__context-mode/tests/ecosystem-benchmark.ts)<br>[tests/executor.test.ts](../../../../sources/mksglu__context-mode/tests/executor.test.ts) |
| CI workflows | 5 | [.github/workflows/bundle.yml](../../../../sources/mksglu__context-mode/.github/workflows/bundle.yml)<br>[.github/workflows/ci.yml](../../../../sources/mksglu__context-mode/.github/workflows/ci.yml)<br>[.github/workflows/openclaw-e2e.yml](../../../../sources/mksglu__context-mode/.github/workflows/openclaw-e2e.yml)<br>[.github/workflows/tier2-e2e-smoke.yml](../../../../sources/mksglu__context-mode/.github/workflows/tier2-e2e-smoke.yml)<br>[.github/workflows/update-stats.yml](../../../../sources/mksglu__context-mode/.github/workflows/update-stats.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 6 | [tests/security.test.ts](../../../../sources/mksglu__context-mode/tests/security.test.ts)<br>[tests/util/package-deps-policy.test.ts](../../../../sources/mksglu__context-mode/tests/util/package-deps-policy.test.ts)<br>[tests/hooks/require-security.test.ts](../../../../sources/mksglu__context-mode/tests/hooks/require-security.test.ts)<br>[tests/core/deny-policy.test.ts](../../../../sources/mksglu__context-mode/tests/core/deny-policy.test.ts)<br>[src/security.ts](../../../../sources/mksglu__context-mode/src/security.ts)<br>[hooks/security.bundle.mjs](../../../../sources/mksglu__context-mode/hooks/security.bundle.mjs) |
| Agent instructions | 12 | [CLAUDE.md](../../../../sources/mksglu__context-mode/CLAUDE.md)<br>[configs/zed/AGENTS.md](../../../../sources/mksglu__context-mode/configs/zed/AGENTS.md)<br>[configs/vscode-copilot/copilot-instructions.md](../../../../sources/mksglu__context-mode/configs/vscode-copilot/copilot-instructions.md)<br>[configs/pi/AGENTS.md](../../../../sources/mksglu__context-mode/configs/pi/AGENTS.md)<br>[configs/opencode/AGENTS.md](../../../../sources/mksglu__context-mode/configs/opencode/AGENTS.md)<br>[configs/openclaw/AGENTS.md](../../../../sources/mksglu__context-mode/configs/openclaw/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `.mcp.json.codex.example`, `.mcp.json.example`, `tests/mcp-integration.ts`.
2. Trace execution through entrypoints: `server.bundle.mjs`, `tests/core/server.test.ts`, `src/cli.ts`.
3. Map agent/tool runtime through: `web/context-saving.html`, `web/og/context-saving-og.html`, `web/og/context-saving.png`.
4. Inspect retrieval/memory/indexing through: `web/index.html`, `tests/core/auto-memory-adapter.test.ts`, `tests/core/auto-memory-config-dir.test.ts`.
5. Verify behavior through test/eval files: `BENCHMARK.md`, `tests/benchmark-results-v04.json`, `tests/benchmark.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 562 files, 105 directories.. 핵심 구조 신호는 package.json, README.md, CLAUDE.md, LICENSE, modelcontextprotocol, tests이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
