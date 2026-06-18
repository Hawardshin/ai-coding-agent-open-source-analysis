# hmmhmmhm/daiso-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

한국 로컬 리테일과 영화관 조회를 MCP, CLI, Codex Skill로 연결합니다.

## 요약

- 조사 단위: `sources/hmmhmmhm__daiso-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 576 files, 87 directories, depth score 113, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, tests/scripts/mcp-smoke.test.ts, tests/app/app-mcp-client.test.ts이고, 의존성 단서는 mcp, modelcontextprotocol, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | hmmhmmhm/daiso-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/hmmhmmhm__daiso-mcp](../../../../sources/hmmhmmhm__daiso-mcp) |
| Existing report | [reports/korea-trending/repositories/hmmhmmhm__daiso-mcp.md](../../../korea-trending/repositories/hmmhmmhm__daiso-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 576 / 87 |
| Max observed depth | 5 |
| Top directories | .githooks, .github, assets, docs, examples, scripts, skills, src, tests |
| Top extensions | .ts: 438, .md: 52, .sh: 38, .yml: 13, .py: 11, .json: 7, (none): 7, .example: 1, .html: 1, .jsonc: 1, .kt: 1, .png: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 91 |
| docs | documentation surface | 40 |
| src | source boundary | 23 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| examples | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | hooks:install | git config core.hooksPath .githooks && chmod +x .githooks/pre-push |
| serve-dev | package.json | dev | wrangler dev |
| utility | package.json | deploy | wrangler deploy |
| build | package.json | build | tsc && npx tsx scripts/ops/generate-openapi.ts |
| build | package.json | build:openapi | npx tsx scripts/ops/generate-openapi.ts |
| build | package.json | cli:smoke | npm run build && npx tsx scripts/ops/cli-smoke.ts |
| utility | package.json | mcp:smoke | npx tsx scripts/ops/mcp-smoke.ts |
| utility | package.json | update:workers-chart | npx tsx scripts/ops/update-workers-invocations-chart.ts |
| build | package.json | prepack | npm run build |
| build | package.json | prepublishOnly | npm run check && npm run build |
| build | package.json | release:dry-run | npm pack --dry-run |
| utility | package.json | publish:public | npm publish --access public |
| quality | package.json | typecheck | tsc --noEmit |
| test | package.json | lint | eslint "src/**/*.ts" "tests/**/*.ts" "scripts/**/*.ts" "vitest.config.ts" |
| test | package.json | lint:fix | eslint "src/**/*.ts" "tests/**/*.ts" "scripts/**/*.ts" "vitest.config.ts" --fix |
| quality | package.json | format | prettier .github/**/*.md .github/**/*.yml README.md SECURITY.md AGENTS.md CONTRIBUTING.md package.json tsconfig.json .prettierrc.json .mcp.json eslint.config.ts --write |
| quality | package.json | format:check | prettier .github/**/*.md .github/**/*.yml README.md SECURITY.md AGENTS.md CONTRIBUTING.md package.json tsconfig.json .prettierrc.json .mcp.json eslint.config.ts --check |
| quality | package.json | cf-typegen | wrangler types |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | test:coverage | vitest run --coverage |
| test | package.json | check | npm run format:check && npm run lint && npm run lint:biome && npm run typecheck && npm test |
| quality | package.json | lint:biome | biome lint |
| entrypoint | package.json bin | bin.js | dist/bin.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp, modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/hmmhmmhm__daiso-mcp/.mcp.json) | mcp signal |
| mcp | [tests/scripts/mcp-smoke.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/scripts/mcp-smoke.test.ts) | mcp signal |
| mcp | [tests/app/app-mcp-client.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/app/app-mcp-client.test.ts) | mcp signal |
| mcp | [scripts/ops/mcp-smoke.ts](../../../../sources/hmmhmmhm__daiso-mcp/scripts/ops/mcp-smoke.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/hmmhmmhm__daiso-mcp/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/services/seveneleven/tools/checkInventory.storeFiltering.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/tools/checkInventory.storeFiltering.test.ts) | agentRuntime signal |
| agentRuntime | [tests/services/seveneleven/tools/checkInventory.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/tools/checkInventory.test.ts) | agentRuntime signal |
| agentRuntime | [tests/services/seveneleven/tools/getCatalogSnapshot.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/tools/getCatalogSnapshot.test.ts) | agentRuntime signal |
| entrypoints | [src/cli.ts](../../../../sources/hmmhmmhm__daiso-mcp/src/cli.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/hmmhmmhm__daiso-mcp/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/hmmhmmhm__daiso-mcp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/hmmhmmhm__daiso-mcp/tsconfig.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/cli.ts](../../../../sources/hmmhmmhm__daiso-mcp/src/cli.ts)<br>[src/index.ts](../../../../sources/hmmhmmhm__daiso-mcp/src/index.ts) |
| agentRuntime | 74 | [AGENTS.md](../../../../sources/hmmhmmhm__daiso-mcp/AGENTS.md)<br>[tests/services/seveneleven/tools/checkInventory.storeFiltering.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/tools/checkInventory.storeFiltering.test.ts)<br>[tests/services/seveneleven/tools/checkInventory.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/tools/checkInventory.test.ts)<br>[tests/services/seveneleven/tools/getCatalogSnapshot.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/tools/getCatalogSnapshot.test.ts)<br>[tests/services/seveneleven/tools/getSearchPopwords.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/tools/getSearchPopwords.test.ts)<br>[tests/services/seveneleven/tools/searchProducts.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/tools/searchProducts.test.ts)<br>[tests/services/seveneleven/tools/searchStores.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/tools/searchStores.test.ts)<br>[tests/services/oliveyoung/tools/checkInventory.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/oliveyoung/tools/checkInventory.test.ts) |
| mcp | 10 | [.mcp.json](../../../../sources/hmmhmmhm__daiso-mcp/.mcp.json)<br>[tests/scripts/mcp-smoke.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/scripts/mcp-smoke.test.ts)<br>[tests/app/app-mcp-client.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/app/app-mcp-client.test.ts)<br>[scripts/ops/mcp-smoke.ts](../../../../sources/hmmhmmhm__daiso-mcp/scripts/ops/mcp-smoke.ts)<br>[scripts/ghidra/check-cli-ghidra-mcp.sh](../../../../sources/hmmhmmhm__daiso-mcp/scripts/ghidra/check-cli-ghidra-mcp.sh)<br>[scripts/ghidra/check-ghidra-mcp.sh](../../../../sources/hmmhmmhm__daiso-mcp/scripts/ghidra/check-ghidra-mcp.sh)<br>[scripts/ghidra/cli_mcp_ghidra.py](../../../../sources/hmmhmmhm__daiso-mcp/scripts/ghidra/cli_mcp_ghidra.py)<br>[docs/oliveyoung-playwright-mcp-onboarding.md](../../../../sources/hmmhmmhm__daiso-mcp/docs/oliveyoung-playwright-mcp-onboarding.md) |
| retrieval | 29 | [tests/services/seveneleven/index.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/index.test.ts)<br>[tests/services/places/index.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/places/index.test.ts)<br>[tests/services/opinet/index.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/opinet/index.test.ts)<br>[tests/services/oliveyoung/index.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/oliveyoung/index.test.ts)<br>[tests/services/megabox/index.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/megabox/index.test.ts)<br>[tests/services/lottemart/index.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/lottemart/index.test.ts)<br>[tests/services/lottecinema/index.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/lottecinema/index.test.ts)<br>[tests/services/gs25/index.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/gs25/index.test.ts) |
| spec | 0 | not obvious |
| eval | 146 | [tests/utils/cache.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/utils/cache.test.ts)<br>[tests/utils/fetch.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/utils/fetch.test.ts)<br>[tests/utils/http.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/utils/http.test.ts)<br>[tests/utils/zyte.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/utils/zyte.test.ts)<br>[tests/services/seveneleven/client.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/client.test.ts)<br>[tests/services/seveneleven/index.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/index.test.ts)<br>[tests/services/seveneleven/productKeyword.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/productKeyword.test.ts)<br>[tests/services/seveneleven/tools/checkInventory.storeFiltering.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/tools/checkInventory.storeFiltering.test.ts) |
| security | 5 | [SECURITY.md](../../../../sources/hmmhmmhm__daiso-mcp/SECURITY.md)<br>[scripts/gs25-ui-guard-flow.sh](../../../../sources/hmmhmmhm__daiso-mcp/scripts/gs25-ui-guard-flow.sh)<br>[scripts/frida/gs25-frida-only-native-connect-audit.ts](../../../../sources/hmmhmmhm__daiso-mcp/scripts/frida/gs25-frida-only-native-connect-audit.ts)<br>[scripts/frida/gs25-frida-only-pinning-audit.ts](../../../../sources/hmmhmmhm__daiso-mcp/scripts/frida/gs25-frida-only-pinning-audit.ts)<br>[scripts/frida/gs25-frida-only-pinning-deep-audit.ts](../../../../sources/hmmhmmhm__daiso-mcp/scripts/frida/gs25-frida-only-pinning-deep-audit.ts) |
| ci | 9 | [.github/workflows/ci.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/codeql.yml)<br>[.github/workflows/coverage.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/coverage.yml)<br>[.github/workflows/deploy.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/deploy.yml)<br>[.github/workflows/external-smoke.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/external-smoke.yml)<br>[.github/workflows/health-checks.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/health-checks.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/npm-publish.yml)<br>[.github/workflows/sync-worker-secrets.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/sync-worker-secrets.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/hmmhmmhm__daiso-mcp/AGENTS.md) |
| docs | 52 | [README.md](../../../../sources/hmmhmmhm__daiso-mcp/README.md)<br>[scripts/README.md](../../../../sources/hmmhmmhm__daiso-mcp/scripts/README.md)<br>[scripts/research/README.md](../../../../sources/hmmhmmhm__daiso-mcp/scripts/research/README.md)<br>[scripts/ops/README.md](../../../../sources/hmmhmmhm__daiso-mcp/scripts/ops/README.md)<br>[docs/ai-instruction.md](../../../../sources/hmmhmmhm__daiso-mcp/docs/ai-instruction.md)<br>[docs/cgv-network-analysis-result.md](../../../../sources/hmmhmmhm__daiso-mcp/docs/cgv-network-analysis-result.md)<br>[docs/cu-app-request-capture-guide.md](../../../../sources/hmmhmmhm__daiso-mcp/docs/cu-app-request-capture-guide.md)<br>[docs/cu-app-scraping-replay-guide.md](../../../../sources/hmmhmmhm__daiso-mcp/docs/cu-app-scraping-replay-guide.md) |
| config | 2 | [package.json](../../../../sources/hmmhmmhm__daiso-mcp/package.json)<br>[tsconfig.json](../../../../sources/hmmhmmhm__daiso-mcp/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 146 | [tests/utils/cache.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/utils/cache.test.ts)<br>[tests/utils/fetch.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/utils/fetch.test.ts)<br>[tests/utils/http.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/utils/http.test.ts)<br>[tests/utils/zyte.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/utils/zyte.test.ts)<br>[tests/services/seveneleven/client.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/client.test.ts)<br>[tests/services/seveneleven/index.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/index.test.ts) |
| CI workflows | 9 | [.github/workflows/ci.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/codeql.yml)<br>[.github/workflows/coverage.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/coverage.yml)<br>[.github/workflows/deploy.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/deploy.yml)<br>[.github/workflows/external-smoke.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/external-smoke.yml)<br>[.github/workflows/health-checks.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/health-checks.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 5 | [SECURITY.md](../../../../sources/hmmhmmhm__daiso-mcp/SECURITY.md)<br>[scripts/gs25-ui-guard-flow.sh](../../../../sources/hmmhmmhm__daiso-mcp/scripts/gs25-ui-guard-flow.sh)<br>[scripts/frida/gs25-frida-only-native-connect-audit.ts](../../../../sources/hmmhmmhm__daiso-mcp/scripts/frida/gs25-frida-only-native-connect-audit.ts)<br>[scripts/frida/gs25-frida-only-pinning-audit.ts](../../../../sources/hmmhmmhm__daiso-mcp/scripts/frida/gs25-frida-only-pinning-audit.ts)<br>[scripts/frida/gs25-frida-only-pinning-deep-audit.ts](../../../../sources/hmmhmmhm__daiso-mcp/scripts/frida/gs25-frida-only-pinning-deep-audit.ts) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/hmmhmmhm__daiso-mcp/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `.mcp.json`, `tests/scripts/mcp-smoke.test.ts`, `tests/app/app-mcp-client.test.ts`.
2. Trace execution through entrypoints: `src/cli.ts`, `src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/services/seveneleven/tools/checkInventory.storeFiltering.test.ts`, `tests/services/seveneleven/tools/checkInventory.test.ts`.
4. Inspect retrieval/memory/indexing through: `tests/services/seveneleven/index.test.ts`, `tests/services/places/index.test.ts`, `tests/services/opinet/index.test.ts`.
5. Verify behavior through test/eval files: `tests/utils/cache.test.ts`, `tests/utils/fetch.test.ts`, `tests/utils/http.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 한국 로컬 리테일과 영화관 조회를 MCP, CLI, Codex Skill로 연결합니다.. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, modelcontextprotocol이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
