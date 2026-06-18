# proffesor-for-testing/agentic-qe 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Agentic QE Fleet is an open-source AI-powered QA/QE platform designed for use with Coding Agents (works best with Claude Code) featuring specialized agents and skills to support testing activities for a product at any stage of the SDLC. Free to use, fork, build, and contribute. Based on the Agentic QE Framework created by Dragan Spiridonov.

## 요약

- 조사 단위: `sources/proffesor-for-testing__agentic-qe` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 4,720 files, 1,435 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=verification/mcp-tool-parity-baseline.json, tests/unit/validation/agent-mcp-validator.test.ts, tests/unit/mcp/heartbeat-handlers.test.ts이고, 의존성 단서는 claude, commander, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | proffesor-for-testing/agentic-qe |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 390 |
| Forks | 77 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/proffesor-for-testing__agentic-qe](../../../../sources/proffesor-for-testing__agentic-qe) |
| 기존 보고서 | [reports/global-trending/repositories/proffesor-for-testing__agentic-qe.md](../../../global-trending/repositories/proffesor-for-testing__agentic-qe.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 4720 / 1435 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .agentic-qe, .claude, .claude-plugin, .devcontainer, .github, .husky, .kiro, .opencode, .ruvector, assets, benchmarks, config, docs, examples, fixtures, packages, plugins, reports, schemas, scripts |
| 상위 확장자 | .ts: 2291, .md: 1403, .json: 510, .yaml: 288, .sh: 71, .cjs: 32, .js: 28, .mjs: 25, .yml: 20, .wasm: 9, (none): 9, .html: 8 |
| 소스 패턴 | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | claude |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | transformers |
| webRuntime | 없음 |
| developerSurface | commander |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1507 | [tests/docker-compose.test.yml](../../../../sources/proffesor-for-testing__agentic-qe/tests/docker-compose.test.yml)<br>[tests/global-teardown.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/global-teardown.ts)<br>[tests/setup-worker.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/setup-worker.ts)<br>[tests/workers/quality-daemon/ci-monitor.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/workers/quality-daemon/ci-monitor.test.ts)<br>[tests/workers/quality-daemon/coverage-delta.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/workers/quality-daemon/coverage-delta.test.ts)<br>[tests/workers/quality-daemon/daemon-cli.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/workers/quality-daemon/daemon-cli.test.ts) |
| CI workflow | 16 | [.github/workflows/benchmark.yml](../../../../sources/proffesor-for-testing__agentic-qe/.github/workflows/benchmark.yml)<br>[.github/workflows/coherence.yml](../../../../sources/proffesor-for-testing__agentic-qe/.github/workflows/coherence.yml)<br>[.github/workflows/consumer-audit.yml](../../../../sources/proffesor-for-testing__agentic-qe/.github/workflows/consumer-audit.yml)<br>[.github/workflows/init-chaos.yml](../../../../sources/proffesor-for-testing__agentic-qe/.github/workflows/init-chaos.yml)<br>[.github/workflows/init-corpus-mirror-test.yml](../../../../sources/proffesor-for-testing__agentic-qe/.github/workflows/init-corpus-mirror-test.yml)<br>[.github/workflows/invariant-check.yml](../../../../sources/proffesor-for-testing__agentic-qe/.github/workflows/invariant-check.yml) |
| 컨테이너/배포 | 2 | [Dockerfile](../../../../sources/proffesor-for-testing__agentic-qe/Dockerfile)<br>[tests/docker-compose.test.yml](../../../../sources/proffesor-for-testing__agentic-qe/tests/docker-compose.test.yml) |
| 보안/정책 | 280 | [SECURITY.md](../../../../sources/proffesor-for-testing__agentic-qe/SECURITY.md)<br>[tests/unit/workers/workers/compliance-checker.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/workers/workers/compliance-checker.test.ts)<br>[tests/unit/workers/workers/security-scan.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/workers/workers/security-scan.test.ts)<br>[tests/unit/shared/io/file-reader-security.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/shared/io/file-reader-security.test.ts)<br>[tests/unit/mcp/tool-registry-security.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/mcp/tool-registry-security.test.ts)<br>[tests/unit/mcp/security/cve-prevention.test.ts](../../../../sources/proffesor-for-testing__agentic-qe/tests/unit/mcp/security/cve-prevention.test.ts) |
| 에이전트 지시문 | 3 | [CLAUDE.md](../../../../sources/proffesor-for-testing__agentic-qe/CLAUDE.md)<br>[.claude/commands/monitoring/agents.md](../../../../sources/proffesor-for-testing__agentic-qe/.claude/commands/monitoring/agents.md)<br>[.agentic-qe/docs/agents.md](../../../../sources/proffesor-for-testing__agentic-qe/.agentic-qe/docs/agents.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `verification/mcp-tool-parity-baseline.json`, `tests/unit/validation/agent-mcp-validator.test.ts`, `tests/unit/mcp/heartbeat-handlers.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `tests/fixtures/sample-project/src/index.ts`, `src/index.ts`, `packages/aqe-opencode-types/src/index.ts`.
3. agent/tool runtime 매핑: `tests/validation/opencode/agent-configs.test.ts`, `tests/validation/opencode/skill-configs.test.ts`, `tests/validation/opencode/tool-wrappers.test.ts`.
4. retrieval/memory/indexing 확인: `tests/workers/quality-daemon/index.test.ts`, `tests/workers/quality-daemon/persistent-memory.test.ts`, `tests/unit/shared/code-index-extractor.test.ts`.
5. test/eval 파일로 동작 검증: `tests/docker-compose.test.yml`, `tests/global-teardown.ts`, `tests/setup-worker.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Agentic QE Fleet is an open source AI powered QA/QE platform designed for use with Coding Agents works best with Claude . 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
