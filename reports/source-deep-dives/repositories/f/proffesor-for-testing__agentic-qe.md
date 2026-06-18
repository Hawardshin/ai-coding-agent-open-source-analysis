# proffesor-for-testing/agentic-qe Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Agentic QE Fleet is an open-source AI-powered QA/QE platform designed for use with Coding Agents (works best with Claude Code) featuring specialized agents and skills to support testing activities for a product at any stage of the SDLC. Free to use, fork, build, and contribute. Based on the Agentic QE Framework created by Dragan Spiridonov.

## 요약

- 조사 단위: `sources/proffesor-for-testing__agentic-qe` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 4,720 files, 1,435 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=verification/mcp-tool-parity-baseline.json, tests/unit/validation/agent-mcp-validator.test.ts, tests/unit/mcp/heartbeat-handlers.test.ts이고, 의존성 단서는 claude, commander, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | proffesor-for-testing/agentic-qe |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 390 |
| Forks | 77 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/proffesor-for-testing__agentic-qe](../../../../sources/proffesor-for-testing__agentic-qe) |
| Existing report | [reports/global-trending/repositories/proffesor-for-testing__agentic-qe.md](../../../global-trending/repositories/proffesor-for-testing__agentic-qe.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 4720 / 1435 |
| Max observed depth | 7 |
| Top directories | .agentic-qe, .claude, .claude-plugin, .devcontainer, .github, .husky, .kiro, .opencode, .ruvector, assets, benchmarks, config, docs, examples, fixtures, packages, plugins, reports, schemas, scripts |
| Top extensions | .ts: 2291, .md: 1403, .json: 510, .yaml: 288, .sh: 71, .cjs: 32, .js: 28, .mjs: 25, .yml: 20, .wasm: 9, (none): 9, .html: 8 |
| Source patterns | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 236 |
| src | source boundary | 29 |
| docs | documentation surface | 22 |
| packages/aqe-opencode-bridge | packages workspace | 3 |
| packages/aqe-opencode-plugin | packages workspace | 3 |
| packages/aqe-opencode-types | packages workspace | 3 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmarks | validation surface | 1 |
| config | top-level component | 1 |
| examples | top-level component | 1 |
| fixtures | top-level component | 1 |
| packages | source boundary | 1 |
| plugins | top-level component | 1 |
| reports | top-level component | 1 |
| schemas | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | preinstall | node scripts/preinstall.cjs \|\| true |
| utility | package.json | postinstall | node scripts/postinstall.cjs |
| build | package.json | build | tsc && npm run build:cli && npm run build:mcp |
| build | package.json | build:cli | node scripts/build-cli.mjs |
| build | package.json | build:mcp | node scripts/build-mcp.mjs |
| utility | package.json | prepublishOnly | node scripts/sync-agents.cjs && node scripts/prepare-assets.cjs |
| utility | package.json | cli | tsx src/cli/index.ts |
| utility | package.json | aqe | tsx src/cli/index.ts |
| utility | package.json | mcp | tsx src/mcp/entry.ts |
| test | package.json | test | NODE_OPTIONS='--max-old-space-size=1024 --expose-gc' vitest run |
| test | package.json | test:unit | npm run test:unit:fast && npm run test:unit:heavy && npm run test:unit:mcp |
| test | package.json | test:unit:fast | vitest run --exclude='**/qe-reasoning-bank.test.ts' --exclude='**/qe-reasoning-bank-feedback-loop.test.ts' --exclude='**/aqe-learning-engine.test.ts' --exclude='**/aqe-learning-engine-patterns.test.ts' tests/unit/adapter |
| test | package.json | test:unit:heavy | vitest run tests/unit/coordination tests/unit/domains tests/unit/integrations tests/unit/optimization tests/unit/init --exclude='**/browser/**' --exclude='**/*.e2e.test.ts' --exclude='**/vibium/**' --exclude='**/browser- |
| test | package.json | test:unit:mcp | vitest run tests/unit/mcp --exclude='**/mcp/handlers/domain-handlers.test.ts' --fileParallelism=false |
| test | package.json | test:ci | vitest run --exclude='**/browser/**' --exclude='**/*.e2e.test.ts' --exclude='**/vibium/**' --exclude='**/integration/browser/**' --exclude='**/browser-swarm-coordinator.test.ts' --exclude='**/mcp/handlers/domain-handlers |
| test | package.json | test:e2e | vitest run tests/integration/browser --testTimeout=120000 |
| test | package.json | test:safe | NODE_OPTIONS='--max-old-space-size=768 --expose-gc' vitest run --maxForks=1 |
| test | package.json | test:dev | npm run test:unit:fast |
| test | package.json | test:all | npm test -- --run |
| test | package.json | test:mcp | npm run test:unit:mcp |
| test | package.json | test:mcp:integration | npm test -- --run tests/integration/mcp/ |
| test | package.json | test:integration:fast | NODE_OPTIONS='--max-old-space-size=2048 --expose-gc' vitest run tests/integration/mcp/fleet-init-wires-daemon.test.ts tests/integration/mcp/mcp-cli-inprocess.test.ts tests/integration/mcp/memory-delete-cache-invalidation |
| test | package.json | test:integration | NODE_OPTIONS='--max-old-space-size=4096 --expose-gc' vitest run tests/integration/ --exclude='**/browser/**' --exclude='**/browser-integration/**' --exclude='**/*.e2e.test.ts' |
| utility | package.json | mcp:validate | node scripts/smoke-mcp-protocol.mjs |
| utility | package.json | mcp:parity | node scripts/audit-mcp-tool-parity.mjs |
| test | package.json | mcp:report | echo 'MCP Report: uses vitest for test reporting' && exit 0 |
| test | package.json | test:code-intelligence | npm test -- --run tests/unit/domains/code-intelligence/ tests/unit/coordination/mincut/ |
| utility | package.json | verify:invariants | tsx scripts/verify-shipped-invariants.ts |
| test | package.json | verify:counts | node -e "const fs=require('fs'),g=require('glob'),p=require('path');const src=g.globSync('src/**/*.ts',{ignore:'src/**/*.test.ts'});const tests=g.globSync('tests/**/*.test.ts');const agents=g.globSync('.claude/agents/v3/ |
| utility | package.json | verify:agent-skills | node -e "const fs=require('fs'),g=require('glob'),p=require('path');const agents=g.globSync('.claude/agents/v3/qe-*.md');const skills=g.globSync('.claude/skills/**/*.md');const missing=[];for(const a of agents){const nam |
| utility | package.json | verify:features | node -e "const fs=require('fs'),p=require('path');const pkg=JSON.parse(fs.readFileSync('package.json','utf8'));const hasBin=!!pkg.bin&&Object.keys(pkg.bin).length>=2;const hasExports=!!pkg.exports&&Object.keys(pkg.export |
| test | package.json | test:contracts | npm test -- --run tests/unit/domains/contract-testing/ |
| test | package.json | test:infrastructure | npm test -- --run tests/unit/kernel/ tests/unit/shared/ |
| test | package.json | test:regression | npm run test:unit |
| test | package.json | test:coverage | vitest run --coverage --exclude='**/browser/**' --exclude='**/*.e2e.test.ts' --exclude='**/integration/browser/**' --exclude='**/browser-swarm-coordinator.test.ts' --exclude='**/mcp/handlers/domain-handlers.test.ts' |
| test | package.json | test:perf | vitest bench tests/performance/ |
| test | package.json | test:journeys | npm test -- --run tests/integration/ |
| test | package.json | test:journeys:ci | vitest run tests/integration/ --exclude='**/browser/**' --exclude='**/browser-integration/**' --exclude='**/integration/mcp/**' --exclude='**/integration/sync/**' --exclude='**/integration/learning/**' --exclude='**/inte |
| test | package.json | test:watch | vitest |
| utility | package.json | performance:gate | npx tsx src/performance/run-gates.ts |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | claude |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | transformers |
| webRuntime | none |
| developerSurface | commander |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [verification/mcp-tool-parity-baseline.json](../../../../sources/proffesor-for-testing__agentic-qe/verification/mcp-tool-parity-baseline.json) | mcp signal |
| mcp | [tests/unit/validation/agent-mcp-validator.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/validation/agent-mcp-validator.test.ts) | mcp signal |
| mcp | [tests/unit/mcp/heartbeat-handlers.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/mcp/heartbeat-handlers.test.ts) | mcp signal |
| mcp | [tests/unit/mcp/mcp-performance-benchmark.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/mcp/mcp-performance-benchmark.test.ts) | mcp signal |
| agentRuntime | [tests/validation/opencode/agent-configs.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/validation/opencode/agent-configs.test.ts) | agentRuntime signal |
| agentRuntime | [tests/validation/opencode/skill-configs.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/validation/opencode/skill-configs.test.ts) | agentRuntime signal |
| agentRuntime | [tests/validation/opencode/tool-wrappers.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/validation/opencode/tool-wrappers.test.ts) | agentRuntime signal |
| entrypoints | [tests/fixtures/sample-project/src/index.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/fixtures/sample-project/src/index.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/proffesor-for-testing__agentic-qe/src/index.ts) | entrypoints signal |
| entrypoints | [packages/aqe-opencode-types/src/index.ts](../../../../sources/proffesor-for-testing__agentic-qe/packages/aqe-opencode-types/src/index.ts) | entrypoints signal |
| entrypoints | [packages/aqe-opencode-plugin/src/index.ts](../../../../sources/proffesor-for-testing__agentic-qe/packages/aqe-opencode-plugin/src/index.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/proffesor-for-testing__agentic-qe/CLAUDE.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [tests/fixtures/sample-project/src/index.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/fixtures/sample-project/src/index.ts)<br>[src/index.ts](../../../../sources/proffesor-for-testing__agentic-qe/src/index.ts)<br>[packages/aqe-opencode-types/src/index.ts](../../../../sources/proffesor-for-testing__agentic-qe/packages/aqe-opencode-types/src/index.ts)<br>[packages/aqe-opencode-plugin/src/index.ts](../../../../sources/proffesor-for-testing__agentic-qe/packages/aqe-opencode-plugin/src/index.ts)<br>[packages/aqe-opencode-bridge/src/index.ts](../../../../sources/proffesor-for-testing__agentic-qe/packages/aqe-opencode-bridge/src/index.ts) |
| agentRuntime | 1745 | [tests/validation/opencode/agent-configs.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/validation/opencode/agent-configs.test.ts)<br>[tests/validation/opencode/skill-configs.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/validation/opencode/skill-configs.test.ts)<br>[tests/validation/opencode/tool-wrappers.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/validation/opencode/tool-wrappers.test.ts)<br>[tests/unit/validation/agent-mcp-validator.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/validation/agent-mcp-validator.test.ts)<br>[tests/unit/shared/llm/translation/tool-translator.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/shared/llm/translation/tool-translator.test.ts)<br>[tests/unit/routing/agent-dependency-graph.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/routing/agent-dependency-graph.test.ts)<br>[tests/unit/memory/convergence-tracker.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/memory/convergence-tracker.test.ts)<br>[tests/unit/memory/crdt.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/memory/crdt.test.ts) |
| mcp | 192 | [verification/mcp-tool-parity-baseline.json](../../../../sources/proffesor-for-testing__agentic-qe/verification/mcp-tool-parity-baseline.json)<br>[tests/unit/validation/agent-mcp-validator.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/validation/agent-mcp-validator.test.ts)<br>[tests/unit/mcp/heartbeat-handlers.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/mcp/heartbeat-handlers.test.ts)<br>[tests/unit/mcp/mcp-performance-benchmark.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/mcp/mcp-performance-benchmark.test.ts)<br>[tests/unit/mcp/mcp-server.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/mcp/mcp-server.test.ts)<br>[tests/unit/mcp/routing-economics-handler.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/mcp/routing-economics-handler.test.ts)<br>[tests/unit/mcp/tool-registry-security.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/mcp/tool-registry-security.test.ts)<br>[tests/unit/mcp/tool-scoping.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/mcp/tool-scoping.test.ts) |
| retrieval | 335 | [tests/workers/quality-daemon/index.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/workers/quality-daemon/index.test.ts)<br>[tests/workers/quality-daemon/persistent-memory.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/workers/quality-daemon/persistent-memory.test.ts)<br>[tests/unit/shared/code-index-extractor.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/shared/code-index-extractor.test.ts)<br>[tests/unit/routing/agent-dependency-graph.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/routing/agent-dependency-graph.test.ts)<br>[tests/unit/memory/convergence-tracker.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/memory/convergence-tracker.test.ts)<br>[tests/unit/memory/crdt.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/memory/crdt.test.ts)<br>[tests/unit/memory/cross-phase-memory.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/memory/cross-phase-memory.test.ts)<br>[tests/unit/memory/g-counter.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/memory/g-counter.test.ts) |
| spec | 277 | [tests/unit/domains/requirements-validation/bdd-scenario-writer.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/domains/requirements-validation/bdd-scenario-writer.test.ts)<br>[tests/unit/domains/requirements-validation/coordinator.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/domains/requirements-validation/coordinator.test.ts)<br>[tests/unit/domains/requirements-validation/plugin.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/domains/requirements-validation/plugin.test.ts)<br>[tests/unit/domains/requirements-validation/quality-criteria.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/domains/requirements-validation/quality-criteria.test.ts)<br>[tests/unit/domains/requirements-validation/requirements-validator.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/domains/requirements-validation/requirements-validator.test.ts)<br>[tests/unit/domains/requirements-validation/test-idea-transformer.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/domains/requirements-validation/test-idea-transformer.test.ts)<br>[tests/unit/domains/requirements-validation/testability-scorer.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/domains/requirements-validation/testability-scorer.test.ts)<br>[tests/unit/architecture/hooks-boundary.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/architecture/hooks-boundary.test.ts) |
| eval | 1507 | [tests/docker-compose.test.yml](../../../../sources/proffesor-for-testing__agentic-qe/tests/docker-compose.test.yml)<br>[tests/global-teardown.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/global-teardown.ts)<br>[tests/setup-worker.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/setup-worker.ts)<br>[tests/workers/quality-daemon/ci-monitor.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/workers/quality-daemon/ci-monitor.test.ts)<br>[tests/workers/quality-daemon/coverage-delta.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/workers/quality-daemon/coverage-delta.test.ts)<br>[tests/workers/quality-daemon/daemon-cli.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/workers/quality-daemon/daemon-cli.test.ts)<br>[tests/workers/quality-daemon/git-watcher.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/workers/quality-daemon/git-watcher.test.ts)<br>[tests/workers/quality-daemon/index.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/workers/quality-daemon/index.test.ts) |
| security | 280 | [SECURITY.md](../../../../sources/proffesor-for-testing__agentic-qe/SECURITY.md)<br>[tests/unit/workers/workers/compliance-checker.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/workers/workers/compliance-checker.test.ts)<br>[tests/unit/workers/workers/security-scan.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/workers/workers/security-scan.test.ts)<br>[tests/unit/shared/io/file-reader-security.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/shared/io/file-reader-security.test.ts)<br>[tests/unit/mcp/tool-registry-security.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/mcp/tool-registry-security.test.ts)<br>[tests/unit/mcp/security/cve-prevention.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/mcp/security/cve-prevention.test.ts)<br>[tests/unit/mcp/security/oauth21-provider.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/mcp/security/oauth21-provider.test.ts)<br>[tests/unit/mcp/security/rate-limiter.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/mcp/security/rate-limiter.test.ts) |
| ci | 16 | [.github/workflows/benchmark.yml](../../../../sources/proffesor-for-testing__agentic-qe/.github/workflows/benchmark.yml)<br>[.github/workflows/coherence.yml](../../../../sources/proffesor-for-testing__agentic-qe/.github/workflows/coherence.yml)<br>[.github/workflows/consumer-audit.yml](../../../../sources/proffesor-for-testing__agentic-qe/.github/workflows/consumer-audit.yml)<br>[.github/workflows/init-chaos.yml](../../../../sources/proffesor-for-testing__agentic-qe/.github/workflows/init-chaos.yml)<br>[.github/workflows/init-corpus-mirror-test.yml](../../../../sources/proffesor-for-testing__agentic-qe/.github/workflows/init-corpus-mirror-test.yml)<br>[.github/workflows/invariant-check.yml](../../../../sources/proffesor-for-testing__agentic-qe/.github/workflows/invariant-check.yml)<br>[.github/workflows/mcp-tools-test.yml](../../../../sources/proffesor-for-testing__agentic-qe/.github/workflows/mcp-tools-test.yml)<br>[.github/workflows/n8n-workflow-ci.yml](../../../../sources/proffesor-for-testing__agentic-qe/.github/workflows/n8n-workflow-ci.yml) |
| container | 2 | [Dockerfile](../../../../sources/proffesor-for-testing__agentic-qe/Dockerfile)<br>[tests/docker-compose.test.yml](../../../../sources/proffesor-for-testing__agentic-qe/tests/docker-compose.test.yml) |
| instruction | 3 | [CLAUDE.md](../../../../sources/proffesor-for-testing__agentic-qe/CLAUDE.md)<br>[.claude/commands/monitoring/agents.md](../../../../sources/proffesor-for-testing__agentic-qe/.claude/commands/monitoring/agents.md)<br>[.agentic-qe/docs/agents.md](../../../../sources/proffesor-for-testing__agentic-qe/.agentic-qe/docs/agents.md) |
| docs | 584 | [README.md](../../../../sources/proffesor-for-testing__agentic-qe/README.md)<br>[tests/safety/behavioral/results/README.md](../../../../sources/proffesor-for-testing__agentic-qe/tests/safety/behavioral/results/README.md)<br>[tests/integration/templates/README.md](../../../../sources/proffesor-for-testing__agentic-qe/tests/integration/templates/README.md)<br>[tests/fixtures/init-corpus/README.md](../../../../sources/proffesor-for-testing__agentic-qe/tests/fixtures/init-corpus/README.md)<br>[tests/fixtures/init-chaos/README.md](../../../../sources/proffesor-for-testing__agentic-qe/tests/fixtures/init-chaos/README.md)<br>[tests/e2e/README.md](../../../../sources/proffesor-for-testing__agentic-qe/tests/e2e/README.md)<br>[tests/benchmarks/README.md](../../../../sources/proffesor-for-testing__agentic-qe/tests/benchmarks/README.md)<br>[src/skills/security-visual-testing/README.md](../../../../sources/proffesor-for-testing__agentic-qe/src/skills/security-visual-testing/README.md) |
| config | 17 | [package.json](../../../../sources/proffesor-for-testing__agentic-qe/package.json)<br>[tsconfig.json](../../../../sources/proffesor-for-testing__agentic-qe/tsconfig.json)<br>[tests/fixtures/sample-project/package.json](../../../../sources/proffesor-for-testing__agentic-qe/tests/fixtures/sample-project/package.json)<br>[tests/fixtures/sample-project/tsconfig.json](../../../../sources/proffesor-for-testing__agentic-qe/tests/fixtures/sample-project/tsconfig.json)<br>[tests/e2e/package.json](../../../../sources/proffesor-for-testing__agentic-qe/tests/e2e/package.json)<br>[tests/e2e/tsconfig.json](../../../../sources/proffesor-for-testing__agentic-qe/tests/e2e/tsconfig.json)<br>[src/integrations/agent-booster-wasm/package.json](../../../../sources/proffesor-for-testing__agentic-qe/src/integrations/agent-booster-wasm/package.json)<br>[packages/aqe-opencode-types/package.json](../../../../sources/proffesor-for-testing__agentic-qe/packages/aqe-opencode-types/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1507 | [tests/docker-compose.test.yml](../../../../sources/proffesor-for-testing__agentic-qe/tests/docker-compose.test.yml)<br>[tests/global-teardown.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/global-teardown.ts)<br>[tests/setup-worker.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/setup-worker.ts)<br>[tests/workers/quality-daemon/ci-monitor.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/workers/quality-daemon/ci-monitor.test.ts)<br>[tests/workers/quality-daemon/coverage-delta.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/workers/quality-daemon/coverage-delta.test.ts)<br>[tests/workers/quality-daemon/daemon-cli.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/workers/quality-daemon/daemon-cli.test.ts) |
| CI workflows | 16 | [.github/workflows/benchmark.yml](../../../../sources/proffesor-for-testing__agentic-qe/.github/workflows/benchmark.yml)<br>[.github/workflows/coherence.yml](../../../../sources/proffesor-for-testing__agentic-qe/.github/workflows/coherence.yml)<br>[.github/workflows/consumer-audit.yml](../../../../sources/proffesor-for-testing__agentic-qe/.github/workflows/consumer-audit.yml)<br>[.github/workflows/init-chaos.yml](../../../../sources/proffesor-for-testing__agentic-qe/.github/workflows/init-chaos.yml)<br>[.github/workflows/init-corpus-mirror-test.yml](../../../../sources/proffesor-for-testing__agentic-qe/.github/workflows/init-corpus-mirror-test.yml)<br>[.github/workflows/invariant-check.yml](../../../../sources/proffesor-for-testing__agentic-qe/.github/workflows/invariant-check.yml) |
| Containers / deploy | 2 | [Dockerfile](../../../../sources/proffesor-for-testing__agentic-qe/Dockerfile)<br>[tests/docker-compose.test.yml](../../../../sources/proffesor-for-testing__agentic-qe/tests/docker-compose.test.yml) |
| Security / policy | 280 | [SECURITY.md](../../../../sources/proffesor-for-testing__agentic-qe/SECURITY.md)<br>[tests/unit/workers/workers/compliance-checker.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/workers/workers/compliance-checker.test.ts)<br>[tests/unit/workers/workers/security-scan.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/workers/workers/security-scan.test.ts)<br>[tests/unit/shared/io/file-reader-security.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/shared/io/file-reader-security.test.ts)<br>[tests/unit/mcp/tool-registry-security.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/mcp/tool-registry-security.test.ts)<br>[tests/unit/mcp/security/cve-prevention.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/mcp/security/cve-prevention.test.ts) |
| Agent instructions | 3 | [CLAUDE.md](../../../../sources/proffesor-for-testing__agentic-qe/CLAUDE.md)<br>[.claude/commands/monitoring/agents.md](../../../../sources/proffesor-for-testing__agentic-qe/.claude/commands/monitoring/agents.md)<br>[.agentic-qe/docs/agents.md](../../../../sources/proffesor-for-testing__agentic-qe/.agentic-qe/docs/agents.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `verification/mcp-tool-parity-baseline.json`, `tests/unit/validation/agent-mcp-validator.test.ts`, `tests/unit/mcp/heartbeat-handlers.test.ts`.
2. Trace execution through entrypoints: `tests/fixtures/sample-project/src/index.ts`, `src/index.ts`, `packages/aqe-opencode-types/src/index.ts`.
3. Map agent/tool runtime through: `tests/validation/opencode/agent-configs.test.ts`, `tests/validation/opencode/skill-configs.test.ts`, `tests/validation/opencode/tool-wrappers.test.ts`.
4. Inspect retrieval/memory/indexing through: `tests/workers/quality-daemon/index.test.ts`, `tests/workers/quality-daemon/persistent-memory.test.ts`, `tests/unit/shared/code-index-extractor.test.ts`.
5. Verify behavior through test/eval files: `tests/docker-compose.test.yml`, `tests/global-teardown.ts`, `tests/setup-worker.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Agentic QE Fleet is an open source AI powered QA/QE platform designed for use with Coding Agents works best with Claude . 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
