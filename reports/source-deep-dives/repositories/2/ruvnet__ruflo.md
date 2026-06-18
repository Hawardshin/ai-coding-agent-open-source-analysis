# ruvnet/ruflo 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

🌊 The leading agent meta-harness for Claude. Deploy intelligent multi-agent swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning swarm intelligence, RAG integration, and native Claude Code / Codex Integration

## 요약

- 조사 단위: `sources/ruvnet__ruflo` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 4,824 files, 1,453 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=verification/cli-mcp-tool-baseline.json, verification/mcp-tool-baseline.json, v3/src/mcp/index.ts이고, 의존성 단서는 openai, claude, codex, mcp, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | ruvnet/ruflo |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 59994 |
| Forks | 6954 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/ruvnet__ruflo](../../../../sources/ruvnet__ruflo) |
| 기존 보고서 | [reports/global-trending/repositories/ruvnet__ruflo.md](../../../global-trending/repositories/ruvnet__ruflo.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 4824 / 1453 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .agents, .claude, .claude-plugin, .githooks, .github, .harness, bin, data, docs, plugin, plugins, ruflo, scripts, tests, v3, verification |
| 상위 확장자 | .ts: 1788, .md: 1690, .json: 341, .mjs: 193, .sh: 169, .svelte: 85, .yaml: 83, .tsx: 78, .js: 77, .map: 70, (none): 39, .yml: 37 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 3 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| data | top-level component | 1 |
| docs | documentation surface | 1 |
| plugin | top-level component | 1 |
| plugins | top-level component | 1 |
| ruflo | top-level component | 1 |
| scripts | top-level component | 1 |
| v3 | top-level component | 1 |
| verification | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | tsx watch src/index.ts |
| build | package.json | build | tsc |
| build | package.json | build:ts | cd v3/@claude-flow/cli && npm run build \|\| true |
| test | package.json | test | vitest |
| test | package.json | test:ui | vitest --ui |
| test | package.json | test:security | vitest run v3/__tests__/security/ |
| quality | package.json | lint | cd v3/@claude-flow/cli && npm run lint \|\| true |
| utility | package.json | security:audit | npm audit --audit-level high |
| utility | package.json | security:fix | npm audit fix |
| test | package.json | security:test | npm run test:security |
| build | package.json | v3:domains | npm run build:domains |
| serve-dev | package.json | v3:swarm | npm run start:swarm |
| test | package.json | v3:security | npm run security:audit && npm run security:test |
| entrypoint | package.json bin | cli.js | ./bin/cli.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, claude |
| agentProtocols | mcp, codex |
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
| mcp | [verification/cli-mcp-tool-baseline.json](../../../../sources/ruvnet__ruflo/verification/cli-mcp-tool-baseline.json) | mcp signal |
| mcp | [verification/mcp-tool-baseline.json](../../../../sources/ruvnet__ruflo/verification/mcp-tool-baseline.json) | mcp signal |
| mcp | [v3/src/mcp/index.ts](../../../../sources/ruvnet__ruflo/v3/src/mcp/index.ts) | mcp signal |
| mcp | [v3/src/infrastructure/mcp/index.ts](../../../../sources/ruvnet__ruflo/v3/src/infrastructure/mcp/index.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/ruvnet__ruflo/AGENTS.md) | agentRuntime signal |
| agentRuntime | [v3/src/memory/infrastructure/AgentDBBackend.ts](../../../../sources/ruvnet__ruflo/v3/src/memory/infrastructure/AgentDBBackend.ts) | agentRuntime signal |
| agentRuntime | [v3/src/memory/infrastructure/HybridBackend.ts](../../../../sources/ruvnet__ruflo/v3/src/memory/infrastructure/HybridBackend.ts) | agentRuntime signal |
| agentRuntime | [v3/src/memory/infrastructure/index.ts](../../../../sources/ruvnet__ruflo/v3/src/memory/infrastructure/index.ts) | agentRuntime signal |
| entrypoints | [v3/src/index.ts](../../../../sources/ruvnet__ruflo/v3/src/index.ts) | entrypoints signal |
| entrypoints | [v3/plugins/test-intelligence/src/index.ts](../../../../sources/ruvnet__ruflo/v3/plugins/test-intelligence/src/index.ts) | entrypoints signal |
| entrypoints | [v3/plugins/teammate-plugin/src/index.ts](../../../../sources/ruvnet__ruflo/v3/plugins/teammate-plugin/src/index.ts) | entrypoints signal |
| entrypoints | [v3/plugins/ruvector-upstream/src/index.ts](../../../../sources/ruvnet__ruflo/v3/plugins/ruvector-upstream/src/index.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 63 | [v3/src/index.ts](../../../../sources/ruvnet__ruflo/v3/src/index.ts)<br>[v3/plugins/test-intelligence/src/index.ts](../../../../sources/ruvnet__ruflo/v3/plugins/test-intelligence/src/index.ts)<br>[v3/plugins/teammate-plugin/src/index.ts](../../../../sources/ruvnet__ruflo/v3/plugins/teammate-plugin/src/index.ts)<br>[v3/plugins/ruvector-upstream/src/index.ts](../../../../sources/ruvnet__ruflo/v3/plugins/ruvector-upstream/src/index.ts)<br>[v3/plugins/quantum-optimizer/src/index.ts](../../../../sources/ruvnet__ruflo/v3/plugins/quantum-optimizer/src/index.ts)<br>[v3/plugins/prime-radiant/src/index.ts](../../../../sources/ruvnet__ruflo/v3/plugins/prime-radiant/src/index.ts)<br>[v3/plugins/perf-optimizer/src/index.ts](../../../../sources/ruvnet__ruflo/v3/plugins/perf-optimizer/src/index.ts)<br>[v3/plugins/neural-coordination/src/index.ts](../../../../sources/ruvnet__ruflo/v3/plugins/neural-coordination/src/index.ts) |
| agentRuntime | 1244 | [AGENTS.md](../../../../sources/ruvnet__ruflo/AGENTS.md)<br>[v3/src/memory/infrastructure/AgentDBBackend.ts](../../../../sources/ruvnet__ruflo/v3/src/memory/infrastructure/AgentDBBackend.ts)<br>[v3/src/memory/infrastructure/HybridBackend.ts](../../../../sources/ruvnet__ruflo/v3/src/memory/infrastructure/HybridBackend.ts)<br>[v3/src/memory/infrastructure/index.ts](../../../../sources/ruvnet__ruflo/v3/src/memory/infrastructure/index.ts)<br>[v3/src/memory/infrastructure/SQLiteBackend.ts](../../../../sources/ruvnet__ruflo/v3/src/memory/infrastructure/SQLiteBackend.ts)<br>[v3/src/memory/domain/Memory.ts](../../../../sources/ruvnet__ruflo/v3/src/memory/domain/Memory.ts)<br>[v3/src/infrastructure/mcp/tools/AgentTools.ts](../../../../sources/ruvnet__ruflo/v3/src/infrastructure/mcp/tools/AgentTools.ts)<br>[v3/src/infrastructure/mcp/tools/ConfigTools.ts](../../../../sources/ruvnet__ruflo/v3/src/infrastructure/mcp/tools/ConfigTools.ts) |
| mcp | 519 | [verification/cli-mcp-tool-baseline.json](../../../../sources/ruvnet__ruflo/verification/cli-mcp-tool-baseline.json)<br>[verification/mcp-tool-baseline.json](../../../../sources/ruvnet__ruflo/verification/mcp-tool-baseline.json)<br>[v3/src/mcp/index.ts](../../../../sources/ruvnet__ruflo/v3/src/mcp/index.ts)<br>[v3/src/infrastructure/mcp/index.ts](../../../../sources/ruvnet__ruflo/v3/src/infrastructure/mcp/index.ts)<br>[v3/src/infrastructure/mcp/MCPServer.ts](../../../../sources/ruvnet__ruflo/v3/src/infrastructure/mcp/MCPServer.ts)<br>[v3/src/infrastructure/mcp/tools/AgentTools.ts](../../../../sources/ruvnet__ruflo/v3/src/infrastructure/mcp/tools/AgentTools.ts)<br>[v3/src/infrastructure/mcp/tools/ConfigTools.ts](../../../../sources/ruvnet__ruflo/v3/src/infrastructure/mcp/tools/ConfigTools.ts)<br>[v3/src/infrastructure/mcp/tools/MemoryTools.ts](../../../../sources/ruvnet__ruflo/v3/src/infrastructure/mcp/tools/MemoryTools.ts) |
| retrieval | 518 | [v3/index.ts](../../../../sources/ruvnet__ruflo/v3/index.ts)<br>[v3/src/index.ts](../../../../sources/ruvnet__ruflo/v3/src/index.ts)<br>[v3/src/task-execution/application/index.ts](../../../../sources/ruvnet__ruflo/v3/src/task-execution/application/index.ts)<br>[v3/src/shared/types/index.ts](../../../../sources/ruvnet__ruflo/v3/src/shared/types/index.ts)<br>[v3/src/memory/infrastructure/AgentDBBackend.ts](../../../../sources/ruvnet__ruflo/v3/src/memory/infrastructure/AgentDBBackend.ts)<br>[v3/src/memory/infrastructure/HybridBackend.ts](../../../../sources/ruvnet__ruflo/v3/src/memory/infrastructure/HybridBackend.ts)<br>[v3/src/memory/infrastructure/index.ts](../../../../sources/ruvnet__ruflo/v3/src/memory/infrastructure/index.ts)<br>[v3/src/memory/infrastructure/SQLiteBackend.ts](../../../../sources/ruvnet__ruflo/v3/src/memory/infrastructure/SQLiteBackend.ts) |
| spec | 284 | [v3/implementation/optimization/V3-OPTIMIZATION-ROADMAP.md](../../../../sources/ruvnet__ruflo/v3/implementation/optimization/V3-OPTIMIZATION-ROADMAP.md)<br>[v3/implementation/migration/v3-migration-roadmap.md](../../../../sources/ruvnet__ruflo/v3/implementation/migration/v3-migration-roadmap.md)<br>[v3/implementation/architecture/AGENTIC-FLOW-INTEGRATION-ANALYSIS.md](../../../../sources/ruvnet__ruflo/v3/implementation/architecture/AGENTIC-FLOW-INTEGRATION-ANALYSIS.md)<br>[v3/implementation/architecture/SDK-ARCHITECTURE-ANALYSIS.md](../../../../sources/ruvnet__ruflo/v3/implementation/architecture/SDK-ARCHITECTURE-ANALYSIS.md)<br>[v3/implementation/architecture/v3-assessment.md](../../../../sources/ruvnet__ruflo/v3/implementation/architecture/v3-assessment.md)<br>[v3/implementation/adrs/ADR-001-AGENT-IMPLEMENTATION.md](../../../../sources/ruvnet__ruflo/v3/implementation/adrs/ADR-001-AGENT-IMPLEMENTATION.md)<br>[v3/implementation/adrs/ADR-002-DDD-STRUCTURE.md](../../../../sources/ruvnet__ruflo/v3/implementation/adrs/ADR-002-DDD-STRUCTURE.md)<br>[v3/implementation/adrs/ADR-003-CONSOLIDATION-COMPLETE.md](../../../../sources/ruvnet__ruflo/v3/implementation/adrs/ADR-003-CONSOLIDATION-COMPLETE.md) |
| eval | 603 | [v3/scripts/quick-benchmark.mjs](../../../../sources/ruvnet__ruflo/v3/scripts/quick-benchmark.mjs)<br>[v3/plugins/test-intelligence/package-lock.json](../../../../sources/ruvnet__ruflo/v3/plugins/test-intelligence/package-lock.json)<br>[v3/plugins/test-intelligence/package.json](../../../../sources/ruvnet__ruflo/v3/plugins/test-intelligence/package.json)<br>[v3/plugins/test-intelligence/README.md](../../../../sources/ruvnet__ruflo/v3/plugins/test-intelligence/README.md)<br>[v3/plugins/test-intelligence/tsconfig.json](../../../../sources/ruvnet__ruflo/v3/plugins/test-intelligence/tsconfig.json)<br>[v3/plugins/test-intelligence/vitest.config.ts](../../../../sources/ruvnet__ruflo/v3/plugins/test-intelligence/vitest.config.ts)<br>[v3/plugins/test-intelligence/tests/bridges.test.ts](../../../../sources/ruvnet__ruflo/v3/plugins/test-intelligence/tests/bridges.test.ts)<br>[v3/plugins/test-intelligence/tests/mcp-tools.test.ts](../../../../sources/ruvnet__ruflo/v3/plugins/test-intelligence/tests/mcp-tools.test.ts) |
| security | 185 | [SECURITY.md](../../../../sources/ruvnet__ruflo/SECURITY.md)<br>[v3/plugins/SECURITY-AUDIT.md](../../../../sources/ruvnet__ruflo/v3/plugins/SECURITY-AUDIT.md)<br>[v3/plugins/gastown-bridge/agents/security-architect.yaml](../../../../sources/ruvnet__ruflo/v3/plugins/gastown-bridge/agents/security-architect.yaml)<br>[v3/plugins/agentic-qe/src/tools/security-compliance/audit-compliance.ts](../../../../sources/ruvnet__ruflo/v3/plugins/agentic-qe/src/tools/security-compliance/audit-compliance.ts)<br>[v3/plugins/agentic-qe/src/tools/security-compliance/detect-secrets.ts](../../../../sources/ruvnet__ruflo/v3/plugins/agentic-qe/src/tools/security-compliance/detect-secrets.ts)<br>[v3/plugins/agentic-qe/src/tools/security-compliance/security-scan.ts](../../../../sources/ruvnet__ruflo/v3/plugins/agentic-qe/src/tools/security-compliance/security-scan.ts)<br>[v3/plugins/agentic-qe/agents/security-architect.yaml](../../../../sources/ruvnet__ruflo/v3/plugins/agentic-qe/agents/security-architect.yaml)<br>[v3/plugins/agentic-qe/__tests__/tools/security-scan.test.ts](../../../../sources/ruvnet__ruflo/v3/plugins/agentic-qe/__tests__/tools/security-scan.test.ts) |
| ci | 27 | [ruflo/src/ruvocal/.github/workflows/build-docs.yml](../../../../sources/ruvnet__ruflo/ruflo/src/ruvocal/.github/workflows/build-docs.yml)<br>[ruflo/src/ruvocal/.github/workflows/build-image.yml](../../../../sources/ruvnet__ruflo/ruflo/src/ruvocal/.github/workflows/build-image.yml)<br>[ruflo/src/ruvocal/.github/workflows/build-pr-docs.yml](../../../../sources/ruvnet__ruflo/ruflo/src/ruvocal/.github/workflows/build-pr-docs.yml)<br>[ruflo/src/ruvocal/.github/workflows/deploy-dev.yml](../../../../sources/ruvnet__ruflo/ruflo/src/ruvocal/.github/workflows/deploy-dev.yml)<br>[ruflo/src/ruvocal/.github/workflows/deploy-prod.yml](../../../../sources/ruvnet__ruflo/ruflo/src/ruvocal/.github/workflows/deploy-prod.yml)<br>[ruflo/src/ruvocal/.github/workflows/lint-and-test.yml](../../../../sources/ruvnet__ruflo/ruflo/src/ruvocal/.github/workflows/lint-and-test.yml)<br>[ruflo/src/ruvocal/.github/workflows/slugify.yaml](../../../../sources/ruvnet__ruflo/ruflo/src/ruvocal/.github/workflows/slugify.yaml)<br>[ruflo/src/ruvocal/.github/workflows/trufflehog.yml](../../../../sources/ruvnet__ruflo/ruflo/src/ruvocal/.github/workflows/trufflehog.yml) |
| container | 34 | [v3/@claude-flow/plugins/examples/ruvector/docker-compose.yml](../../../../sources/ruvnet__ruflo/v3/@claude-flow/plugins/examples/ruvector/docker-compose.yml)<br>[v3/@claude-flow/deployment/package.json](../../../../sources/ruvnet__ruflo/v3/@claude-flow/deployment/package.json)<br>[v3/@claude-flow/deployment/QUICK_START.md](../../../../sources/ruvnet__ruflo/v3/@claude-flow/deployment/QUICK_START.md)<br>[v3/@claude-flow/deployment/README.md](../../../../sources/ruvnet__ruflo/v3/@claude-flow/deployment/README.md)<br>[v3/@claude-flow/deployment/tmp.json](../../../../sources/ruvnet__ruflo/v3/@claude-flow/deployment/tmp.json)<br>[v3/@claude-flow/deployment/tsconfig.json](../../../../sources/ruvnet__ruflo/v3/@claude-flow/deployment/tsconfig.json)<br>[v3/@claude-flow/deployment/vitest.config.ts](../../../../sources/ruvnet__ruflo/v3/@claude-flow/deployment/vitest.config.ts)<br>[v3/@claude-flow/deployment/src/index.ts](../../../../sources/ruvnet__ruflo/v3/@claude-flow/deployment/src/index.ts) |
| instruction | 10 | [AGENTS.md](../../../../sources/ruvnet__ruflo/AGENTS.md)<br>[CLAUDE.md](../../../../sources/ruvnet__ruflo/CLAUDE.md)<br>[v3/CLAUDE.md](../../../../sources/ruvnet__ruflo/v3/CLAUDE.md)<br>[v3/@claude-flow/mcp/CLAUDE.md](../../../../sources/ruvnet__ruflo/v3/@claude-flow/mcp/CLAUDE.md)<br>[v3/@claude-flow/mcp/.claude/commands/monitoring/agents.md](../../../../sources/ruvnet__ruflo/v3/@claude-flow/mcp/.claude/commands/monitoring/agents.md)<br>[v3/@claude-flow/codex/AGENTS.md](../../../../sources/ruvnet__ruflo/v3/@claude-flow/codex/AGENTS.md)<br>[v3/@claude-flow/cli/CLAUDE.md](../../../../sources/ruvnet__ruflo/v3/@claude-flow/cli/CLAUDE.md)<br>[v3/@claude-flow/cli/.claude/commands/monitoring/agents.md](../../../../sources/ruvnet__ruflo/v3/@claude-flow/cli/.claude/commands/monitoring/agents.md) |
| docs | 496 | [README.md](../../../../sources/ruvnet__ruflo/README.md)<br>[verification/README.md](../../../../sources/ruvnet__ruflo/verification/README.md)<br>[v3/README.md](../../../../sources/ruvnet__ruflo/v3/README.md)<br>[v3/plugins/test-intelligence/README.md](../../../../sources/ruvnet__ruflo/v3/plugins/test-intelligence/README.md)<br>[v3/plugins/teammate-plugin/README.md](../../../../sources/ruvnet__ruflo/v3/plugins/teammate-plugin/README.md)<br>[v3/plugins/ruvector-upstream/README.md](../../../../sources/ruvnet__ruflo/v3/plugins/ruvector-upstream/README.md)<br>[v3/plugins/quantum-optimizer/README.md](../../../../sources/ruvnet__ruflo/v3/plugins/quantum-optimizer/README.md)<br>[v3/plugins/prime-radiant/README.md](../../../../sources/ruvnet__ruflo/v3/plugins/prime-radiant/README.md) |
| config | 105 | [package.json](../../../../sources/ruvnet__ruflo/package.json)<br>[tsconfig.json](../../../../sources/ruvnet__ruflo/tsconfig.json)<br>[v3/package.json](../../../../sources/ruvnet__ruflo/v3/package.json)<br>[v3/pnpm-workspace.yaml](../../../../sources/ruvnet__ruflo/v3/pnpm-workspace.yaml)<br>[v3/tsconfig.json](../../../../sources/ruvnet__ruflo/v3/tsconfig.json)<br>[v3/plugins/test-intelligence/package.json](../../../../sources/ruvnet__ruflo/v3/plugins/test-intelligence/package.json)<br>[v3/plugins/test-intelligence/tsconfig.json](../../../../sources/ruvnet__ruflo/v3/plugins/test-intelligence/tsconfig.json)<br>[v3/plugins/teammate-plugin/package.json](../../../../sources/ruvnet__ruflo/v3/plugins/teammate-plugin/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 603 | [v3/scripts/quick-benchmark.mjs](../../../../sources/ruvnet__ruflo/v3/scripts/quick-benchmark.mjs)<br>[v3/plugins/test-intelligence/package-lock.json](../../../../sources/ruvnet__ruflo/v3/plugins/test-intelligence/package-lock.json)<br>[v3/plugins/test-intelligence/package.json](../../../../sources/ruvnet__ruflo/v3/plugins/test-intelligence/package.json)<br>[v3/plugins/test-intelligence/README.md](../../../../sources/ruvnet__ruflo/v3/plugins/test-intelligence/README.md)<br>[v3/plugins/test-intelligence/tsconfig.json](../../../../sources/ruvnet__ruflo/v3/plugins/test-intelligence/tsconfig.json)<br>[v3/plugins/test-intelligence/vitest.config.ts](../../../../sources/ruvnet__ruflo/v3/plugins/test-intelligence/vitest.config.ts) |
| CI workflow | 27 | [ruflo/src/ruvocal/.github/workflows/build-docs.yml](../../../../sources/ruvnet__ruflo/ruflo/src/ruvocal/.github/workflows/build-docs.yml)<br>[ruflo/src/ruvocal/.github/workflows/build-image.yml](../../../../sources/ruvnet__ruflo/ruflo/src/ruvocal/.github/workflows/build-image.yml)<br>[ruflo/src/ruvocal/.github/workflows/build-pr-docs.yml](../../../../sources/ruvnet__ruflo/ruflo/src/ruvocal/.github/workflows/build-pr-docs.yml)<br>[ruflo/src/ruvocal/.github/workflows/deploy-dev.yml](../../../../sources/ruvnet__ruflo/ruflo/src/ruvocal/.github/workflows/deploy-dev.yml)<br>[ruflo/src/ruvocal/.github/workflows/deploy-prod.yml](../../../../sources/ruvnet__ruflo/ruflo/src/ruvocal/.github/workflows/deploy-prod.yml)<br>[ruflo/src/ruvocal/.github/workflows/lint-and-test.yml](../../../../sources/ruvnet__ruflo/ruflo/src/ruvocal/.github/workflows/lint-and-test.yml) |
| 컨테이너/배포 | 34 | [v3/@claude-flow/plugins/examples/ruvector/docker-compose.yml](../../../../sources/ruvnet__ruflo/v3/@claude-flow/plugins/examples/ruvector/docker-compose.yml)<br>[v3/@claude-flow/deployment/package.json](../../../../sources/ruvnet__ruflo/v3/@claude-flow/deployment/package.json)<br>[v3/@claude-flow/deployment/QUICK_START.md](../../../../sources/ruvnet__ruflo/v3/@claude-flow/deployment/QUICK_START.md)<br>[v3/@claude-flow/deployment/README.md](../../../../sources/ruvnet__ruflo/v3/@claude-flow/deployment/README.md)<br>[v3/@claude-flow/deployment/tmp.json](../../../../sources/ruvnet__ruflo/v3/@claude-flow/deployment/tmp.json)<br>[v3/@claude-flow/deployment/tsconfig.json](../../../../sources/ruvnet__ruflo/v3/@claude-flow/deployment/tsconfig.json) |
| 보안/정책 | 185 | [SECURITY.md](../../../../sources/ruvnet__ruflo/SECURITY.md)<br>[v3/plugins/SECURITY-AUDIT.md](../../../../sources/ruvnet__ruflo/v3/plugins/SECURITY-AUDIT.md)<br>[v3/plugins/gastown-bridge/agents/security-architect.yaml](../../../../sources/ruvnet__ruflo/v3/plugins/gastown-bridge/agents/security-architect.yaml)<br>[v3/plugins/agentic-qe/src/tools/security-compliance/audit-compliance.ts](../../../../sources/ruvnet__ruflo/v3/plugins/agentic-qe/src/tools/security-compliance/audit-compliance.ts)<br>[v3/plugins/agentic-qe/src/tools/security-compliance/detect-secrets.ts](../../../../sources/ruvnet__ruflo/v3/plugins/agentic-qe/src/tools/security-compliance/detect-secrets.ts)<br>[v3/plugins/agentic-qe/src/tools/security-compliance/security-scan.ts](../../../../sources/ruvnet__ruflo/v3/plugins/agentic-qe/src/tools/security-compliance/security-scan.ts) |
| 에이전트 지시문 | 10 | [AGENTS.md](../../../../sources/ruvnet__ruflo/AGENTS.md)<br>[CLAUDE.md](../../../../sources/ruvnet__ruflo/CLAUDE.md)<br>[v3/CLAUDE.md](../../../../sources/ruvnet__ruflo/v3/CLAUDE.md)<br>[v3/@claude-flow/mcp/CLAUDE.md](../../../../sources/ruvnet__ruflo/v3/@claude-flow/mcp/CLAUDE.md)<br>[v3/@claude-flow/mcp/.claude/commands/monitoring/agents.md](../../../../sources/ruvnet__ruflo/v3/@claude-flow/mcp/.claude/commands/monitoring/agents.md)<br>[v3/@claude-flow/codex/AGENTS.md](../../../../sources/ruvnet__ruflo/v3/@claude-flow/codex/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `verification/cli-mcp-tool-baseline.json`, `verification/mcp-tool-baseline.json`, `v3/src/mcp/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `v3/src/index.ts`, `v3/plugins/test-intelligence/src/index.ts`, `v3/plugins/teammate-plugin/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `v3/src/memory/infrastructure/AgentDBBackend.ts`, `v3/src/memory/infrastructure/HybridBackend.ts`.
4. retrieval/memory/indexing 확인: `v3/index.ts`, `v3/src/index.ts`, `v3/src/task-execution/application/index.ts`.
5. test/eval 파일로 동작 검증: `v3/scripts/quick-benchmark.mjs`, `v3/plugins/test-intelligence/package-lock.json`, `v3/plugins/test-intelligence/package.json`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 🌊 The leading agent meta harness for Claude. Deploy intelligent multi agent swarms, coordinate autonomous workflows, an. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
