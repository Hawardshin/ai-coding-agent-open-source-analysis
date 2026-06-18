# joshuaswarren/remnic 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Open-source memory and context for user-aware agents: scoped memory, provenance, retrieval quality, correction, boundaries, evals, and MCP/HTTP access.

## 요약

- 조사 단위: `sources/joshuaswarren__remnic` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,408 files, 315 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/access-mcp-action-confidence.test.ts, tests/access-mcp-chatgpt-app.test.ts, tests/access-mcp-recall-xray.test.ts이고, 의존성 단서는 openai, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | joshuaswarren/remnic |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 87 |
| Forks | 15 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/joshuaswarren__remnic](../../../../sources/joshuaswarren__remnic) |
| 기존 보고서 | [reports/global-trending/repositories/joshuaswarren__remnic.md](../../../global-trending/repositories/joshuaswarren__remnic.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2408 / 315 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .agents, .changeset, .cursor, .githooks, .github, admin-console, benchmarks, bin, dashboard, docs, evals, examples, integrations, packages, prompts, scripts, src, tests |
| 상위 확장자 | .ts: 1764, .md: 327, .json: 108, .mjs: 63, .py: 33, .tsx: 25, .sh: 23, .yml: 21, (none): 13, .js: 8, .cjs: 5, .txt: 5 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 127 |
| docs | documentation surface | 36 |
| packages/remnic-core | packages workspace | 26 |
| src | source boundary | 21 |
| packages/plugin-codex | packages workspace | 8 |
| packages/plugin-claude-code | packages workspace | 7 |
| packages/remnic-server | packages workspace | 7 |
| packages/bench | packages workspace | 6 |
| packages/remnic-cli | packages workspace | 6 |
| packages/plugin-openclaw | packages workspace | 5 |
| packages/plugin-pi | packages workspace | 5 |
| packages/shim-openclaw-engram | packages workspace | 5 |
| packages/hermes-provider | packages workspace | 4 |
| packages/import-chatgpt | packages workspace | 4 |
| packages/import-claude | packages workspace | 4 |
| packages/import-gemini | packages workspace | 4 |
| packages/import-lossless-claw | packages workspace | 4 |
| packages/import-mem0 | packages workspace | 4 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | sync:openclaw-plugin | node scripts/sync-openclaw-plugin.mjs |
| quality | package.json | check:openclaw-plugin-sync | node scripts/check-openclaw-plugin-sync.mjs |
| quality | package.json | check:openclaw-sdk-surface | node scripts/check-openclaw-sdk-surface.mjs |
| quality | package.json | check:openclaw-sdk-surface:required | node scripts/check-openclaw-sdk-surface.mjs --require |
| build | package.json | release:bump-changed-packages | node scripts/bump-changed-packages.mjs |
| build | package.json | build | pnpm --filter @remnic/core build && pnpm run check:openclaw-plugin-sync && tsup && node scripts/copy-admin-console.mjs |
| serve-dev | package.json | dev | tsup --watch |
| test | package.json | check-types | pnpm --filter @remnic/core build && tsc --noEmit && pnpm --recursive --if-present --filter="./packages/*" run check-types && node scripts/check-test-types.mjs |
| quality | package.json | check-config-contract | NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--conditions=remnic-source" tsx scripts/validate-config-contract.ts |
| test | package.json | test | pnpm --filter @remnic/core build && node scripts/run-root-tests.mjs |
| test | package.json | test:openclaw-scenarios | NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--conditions=remnic-source" pnpm exec tsx --test tests/openclaw-adapter-scenarios.test.ts |
| test | package.json | test:openclaw-privacy | NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--conditions=remnic-source" pnpm exec tsx --test tests/openclaw-hook-privacy.test.ts |
| test | package.json | test:entity-hardening | NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--conditions=remnic-source" tsx --test tests/intent.test.ts tests/recall-no-recall-short-circuit.test.ts tests/orchestrator-path-filter.test.ts tests/artifact-cache.test.ts te |
| utility | package.json | demo:coding-agent-memory | NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--conditions=remnic-source" tsx examples/coding-agent-memory-demo/demo.mts |
| test | package.json | test:coding-agent-memory-demo | node examples/coding-agent-memory-demo/smoke-test.mjs |
| test | package.json | test:release-smoke | pnpm run build && node scripts/check-release-artifacts.mjs |
| test | package.json | plugin:inspect | pnpm --filter @remnic/plugin-openclaw run plugin:inspect |
| test | package.json | plugin:inspect:runtime | pnpm --filter @remnic/plugin-openclaw run plugin:inspect:runtime |
| utility | package.json | scan:openclaw-plugin | node scripts/openclaw-plugin-security-scan.mjs packages/plugin-openclaw |
| utility | package.json | verify:openclaw-clawpack | node scripts/verify-openclaw-clawpack.mjs |
| utility | package.json | bench:list | node scripts/run-bench-cli.mjs list |
| utility | package.json | bench:run | node scripts/run-bench-cli.mjs run |
| utility | package.json | bench:compare | node scripts/run-bench-cli.mjs compare |
| utility | package.json | bench:quick | node scripts/run-bench-cli.mjs run --quick longmemeval |
| utility | package.json | eval:ci-gate | NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--conditions=remnic-source" tsx scripts/eval-ci-gate.ts |
| utility | package.json | eval:run | NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--conditions=remnic-source" tsx evals/run.ts |
| utility | package.json | eval:download | bash evals/scripts/download-datasets.sh |
| utility | package.json | eval:bench | NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--conditions=remnic-source" tsx evals/run.ts --benchmark all |
| quality | package.json | lint | biome check --diagnostic-level=error --files-ignore-unknown=true biome.json eslint.config.js package.json |
| utility | package.json | preflight | bash scripts/pr-preflight.sh full |
| utility | package.json | preflight:quick | bash scripts/pr-preflight.sh quick |
| utility | package.json | review:cursor | bash scripts/cursor-prepush-review.sh |
| quality | package.json | review:patterns | bash scripts/check-review-patterns.sh |
| utility | package.json | hooks:install | bash scripts/install-git-hooks.sh |
| utility | package.json | migrate | NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--conditions=remnic-source" tsx scripts/migrate.ts |
| utility | package.json | postinstall | node scripts/ensure-better-sqlite3.mjs |
| build | package.json | prepack | pnpm run check-types && pnpm run build |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| build | Makefile | build | make build |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
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
| mcp | [tests/access-mcp-action-confidence.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp-action-confidence.test.ts) | mcp signal |
| mcp | [tests/access-mcp-chatgpt-app.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp-chatgpt-app.test.ts) | mcp signal |
| mcp | [tests/access-mcp-recall-xray.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp-recall-xray.test.ts) | mcp signal |
| mcp | [tests/access-mcp.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp.test.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/joshuaswarren__remnic/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/hook-migration-preamble.test.ts](../../../../sources/joshuaswarren__remnic/tests/hook-migration-preamble.test.ts) | agentRuntime signal |
| agentRuntime | [tests/memory-action-contracts.test.ts](../../../../sources/joshuaswarren__remnic/tests/memory-action-contracts.test.ts) | agentRuntime signal |
| agentRuntime | [tests/memory-action-lifecycle-integration.test.ts](../../../../sources/joshuaswarren__remnic/tests/memory-action-lifecycle-integration.test.ts) | agentRuntime signal |
| entrypoints | [tests/compat-fixtures/missing-manifest/src/index.ts](../../../../sources/joshuaswarren__remnic/tests/compat-fixtures/missing-manifest/src/index.ts) | entrypoints signal |
| entrypoints | [tests/compat-fixtures/healthy/src/index.ts](../../../../sources/joshuaswarren__remnic/tests/compat-fixtures/healthy/src/index.ts) | entrypoints signal |
| entrypoints | [tests/compat-fixtures/empty-package/src/index.ts](../../../../sources/joshuaswarren__remnic/tests/compat-fixtures/empty-package/src/index.ts) | entrypoints signal |
| entrypoints | [src/cli.ts](../../../../sources/joshuaswarren__remnic/src/cli.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 55 | [tests/compat-fixtures/missing-manifest/src/index.ts](../../../../sources/joshuaswarren__remnic/tests/compat-fixtures/missing-manifest/src/index.ts)<br>[tests/compat-fixtures/healthy/src/index.ts](../../../../sources/joshuaswarren__remnic/tests/compat-fixtures/healthy/src/index.ts)<br>[tests/compat-fixtures/empty-package/src/index.ts](../../../../sources/joshuaswarren__remnic/tests/compat-fixtures/empty-package/src/index.ts)<br>[src/cli.ts](../../../../sources/joshuaswarren__remnic/src/cli.ts)<br>[src/index.ts](../../../../sources/joshuaswarren__remnic/src/index.ts)<br>[packages/shim-openclaw-engram/src/index.ts](../../../../sources/joshuaswarren__remnic/packages/shim-openclaw-engram/src/index.ts)<br>[packages/shim-openclaw-engram/bin/engram-access.js](../../../../sources/joshuaswarren__remnic/packages/shim-openclaw-engram/bin/engram-access.js)<br>[packages/remnic-server/src/index.ts](../../../../sources/joshuaswarren__remnic/packages/remnic-server/src/index.ts) |
| agentRuntime | 196 | [AGENTS.md](../../../../sources/joshuaswarren__remnic/AGENTS.md)<br>[tests/hook-migration-preamble.test.ts](../../../../sources/joshuaswarren__remnic/tests/hook-migration-preamble.test.ts)<br>[tests/memory-action-contracts.test.ts](../../../../sources/joshuaswarren__remnic/tests/memory-action-contracts.test.ts)<br>[tests/memory-action-lifecycle-integration.test.ts](../../../../sources/joshuaswarren__remnic/tests/memory-action-lifecycle-integration.test.ts)<br>[tests/memory-action-policy.test.ts](../../../../sources/joshuaswarren__remnic/tests/memory-action-policy.test.ts)<br>[tests/memory-boxes.test.ts](../../../../sources/joshuaswarren__remnic/tests/memory-boxes.test.ts)<br>[tests/memory-cache.test.ts](../../../../sources/joshuaswarren__remnic/tests/memory-cache.test.ts)<br>[tests/memory-extension-discovery.test.ts](../../../../sources/joshuaswarren__remnic/tests/memory-extension-discovery.test.ts) |
| mcp | 15 | [tests/access-mcp-action-confidence.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp-action-confidence.test.ts)<br>[tests/access-mcp-chatgpt-app.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp-chatgpt-app.test.ts)<br>[tests/access-mcp-recall-xray.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp-recall-xray.test.ts)<br>[tests/access-mcp.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp.test.ts)<br>[tests/briefing-mcp-tool.test.ts](../../../../sources/joshuaswarren__remnic/tests/briefing-mcp-tool.test.ts)<br>[src/access-mcp.ts](../../../../sources/joshuaswarren__remnic/src/access-mcp.ts)<br>[src/mcp-memory-inspector-app.ts](../../../../sources/joshuaswarren__remnic/src/mcp-memory-inspector-app.ts)<br>[packages/remnic-core/src/access-mcp.test.ts](../../../../sources/joshuaswarren__remnic/packages/remnic-core/src/access-mcp.test.ts) |
| retrieval | 329 | [tests/bench-memory-arena-runner.test.ts](../../../../sources/joshuaswarren__remnic/tests/bench-memory-arena-runner.test.ts)<br>[tests/causal-retrieval.test.ts](../../../../sources/joshuaswarren__remnic/tests/causal-retrieval.test.ts)<br>[tests/causal-trajectory-graph.test.ts](../../../../sources/joshuaswarren__remnic/tests/causal-trajectory-graph.test.ts)<br>[tests/cli-conversation-index-health.test.ts](../../../../sources/joshuaswarren__remnic/tests/cli-conversation-index-health.test.ts)<br>[tests/cli-graph-health.test.ts](../../../../sources/joshuaswarren__remnic/tests/cli-graph-health.test.ts)<br>[tests/cli-memory-action-audit.test.ts](../../../../sources/joshuaswarren__remnic/tests/cli-memory-action-audit.test.ts)<br>[tests/cli-memory-governance.test.ts](../../../../sources/joshuaswarren__remnic/tests/cli-memory-governance.test.ts)<br>[tests/cli-memory-search.test.ts](../../../../sources/joshuaswarren__remnic/tests/cli-memory-search.test.ts) |
| spec | 33 | [scripts/faiss_requirements.txt](../../../../sources/joshuaswarren__remnic/scripts/faiss_requirements.txt)<br>[packages/remnic-core/scripts/faiss_requirements.txt](../../../../sources/joshuaswarren__remnic/packages/remnic-core/scripts/faiss_requirements.txt)<br>[packages/plugin-openclaw/scripts/faiss_requirements.txt](../../../../sources/joshuaswarren__remnic/packages/plugin-openclaw/scripts/faiss_requirements.txt)<br>[docs/ARCHITECTURE.md](../../../../sources/joshuaswarren__remnic/docs/ARCHITECTURE.md)<br>[docs/superpowers/specs/2026-04-17-bench-suite-design.md](../../../../sources/joshuaswarren__remnic/docs/superpowers/specs/2026-04-17-bench-suite-design.md)<br>[docs/superpowers/specs/2026-04-18-ingestion-benchmarks-design.md](../../../../sources/joshuaswarren__remnic/docs/superpowers/specs/2026-04-18-ingestion-benchmarks-design.md)<br>[docs/requirements/README.md](../../../../sources/joshuaswarren__remnic/docs/requirements/README.md)<br>[docs/plans/2026-02-21-engram-memory-os-roadmap.md](../../../../sources/joshuaswarren__remnic/docs/plans/2026-02-21-engram-memory-os-roadmap.md) |
| eval | 1152 | [tsconfig.tests.json](../../../../sources/joshuaswarren__remnic/tsconfig.tests.json)<br>[tests/abstraction-nodes.test.ts](../../../../sources/joshuaswarren__remnic/tests/abstraction-nodes.test.ts)<br>[tests/access-http-action-confidence.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-http-action-confidence.test.ts)<br>[tests/access-http.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-http.test.ts)<br>[tests/access-idempotency.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-idempotency.test.ts)<br>[tests/access-mcp-action-confidence.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp-action-confidence.test.ts)<br>[tests/access-mcp-chatgpt-app.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp-chatgpt-app.test.ts)<br>[tests/access-mcp-recall-xray.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp-recall-xray.test.ts) |
| security | 70 | [SECURITY.md](../../../../sources/joshuaswarren__remnic/SECURITY.md)<br>[tests/changelog-guard.test.mjs](../../../../sources/joshuaswarren__remnic/tests/changelog-guard.test.mjs)<br>[tests/cli-memory-action-audit.test.ts](../../../../sources/joshuaswarren__remnic/tests/cli-memory-action-audit.test.ts)<br>[tests/cli-policy-tuning.test.ts](../../../../sources/joshuaswarren__remnic/tests/cli-policy-tuning.test.ts)<br>[tests/config-lifecycle-policy.test.ts](../../../../sources/joshuaswarren__remnic/tests/config-lifecycle-policy.test.ts)<br>[tests/config-proactive-policy.test.ts](../../../../sources/joshuaswarren__remnic/tests/config-proactive-policy.test.ts)<br>[tests/continuity-audit.test.ts](../../../../sources/joshuaswarren__remnic/tests/continuity-audit.test.ts)<br>[tests/memory-action-policy.test.ts](../../../../sources/joshuaswarren__remnic/tests/memory-action-policy.test.ts) |
| ci | 15 | [.github/workflows/ai-review-gate.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/ai-review-gate.yml)<br>[.github/workflows/amb-beam-remnic.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/amb-beam-remnic.yml)<br>[.github/workflows/bench-exploit-audit.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/bench-exploit-audit.yml)<br>[.github/workflows/bench-smoke.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/bench-smoke.yml)<br>[.github/workflows/changelog-guard.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/changelog-guard.yml)<br>[.github/workflows/ci.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/dependency-review.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 3 | [AGENTS.md](../../../../sources/joshuaswarren__remnic/AGENTS.md)<br>[CLAUDE.md](../../../../sources/joshuaswarren__remnic/CLAUDE.md)<br>[src/AGENTS.md](../../../../sources/joshuaswarren__remnic/src/AGENTS.md) |
| docs | 244 | [README.md](../../../../sources/joshuaswarren__remnic/README.md)<br>[tests/compat-fixtures/README.md](../../../../sources/joshuaswarren__remnic/tests/compat-fixtures/README.md)<br>[scripts/faiss/README.md](../../../../sources/joshuaswarren__remnic/scripts/faiss/README.md)<br>[packages/shim-openclaw-engram/README.md](../../../../sources/joshuaswarren__remnic/packages/shim-openclaw-engram/README.md)<br>[packages/remnic-server/README.md](../../../../sources/joshuaswarren__remnic/packages/remnic-server/README.md)<br>[packages/remnic-core/README.md](../../../../sources/joshuaswarren__remnic/packages/remnic-core/README.md)<br>[packages/remnic-cli/README.md](../../../../sources/joshuaswarren__remnic/packages/remnic-cli/README.md)<br>[packages/plugin-pi/README.md](../../../../sources/joshuaswarren__remnic/packages/plugin-pi/README.md) |
| config | 57 | [Makefile](../../../../sources/joshuaswarren__remnic/Makefile)<br>[package.json](../../../../sources/joshuaswarren__remnic/package.json)<br>[pnpm-workspace.yaml](../../../../sources/joshuaswarren__remnic/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/joshuaswarren__remnic/tsconfig.json)<br>[turbo.json](../../../../sources/joshuaswarren__remnic/turbo.json)<br>[tests/compat-fixtures/missing-manifest/package.json](../../../../sources/joshuaswarren__remnic/tests/compat-fixtures/missing-manifest/package.json)<br>[tests/compat-fixtures/healthy/package.json](../../../../sources/joshuaswarren__remnic/tests/compat-fixtures/healthy/package.json)<br>[tests/compat-fixtures/empty-package/package.json](../../../../sources/joshuaswarren__remnic/tests/compat-fixtures/empty-package/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1152 | [tsconfig.tests.json](../../../../sources/joshuaswarren__remnic/tsconfig.tests.json)<br>[tests/abstraction-nodes.test.ts](../../../../sources/joshuaswarren__remnic/tests/abstraction-nodes.test.ts)<br>[tests/access-http-action-confidence.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-http-action-confidence.test.ts)<br>[tests/access-http.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-http.test.ts)<br>[tests/access-idempotency.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-idempotency.test.ts)<br>[tests/access-mcp-action-confidence.test.ts](../../../../sources/joshuaswarren__remnic/tests/access-mcp-action-confidence.test.ts) |
| CI workflow | 15 | [.github/workflows/ai-review-gate.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/ai-review-gate.yml)<br>[.github/workflows/amb-beam-remnic.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/amb-beam-remnic.yml)<br>[.github/workflows/bench-exploit-audit.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/bench-exploit-audit.yml)<br>[.github/workflows/bench-smoke.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/bench-smoke.yml)<br>[.github/workflows/changelog-guard.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/changelog-guard.yml)<br>[.github/workflows/ci.yml](../../../../sources/joshuaswarren__remnic/.github/workflows/ci.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 70 | [SECURITY.md](../../../../sources/joshuaswarren__remnic/SECURITY.md)<br>[tests/changelog-guard.test.mjs](../../../../sources/joshuaswarren__remnic/tests/changelog-guard.test.mjs)<br>[tests/cli-memory-action-audit.test.ts](../../../../sources/joshuaswarren__remnic/tests/cli-memory-action-audit.test.ts)<br>[tests/cli-policy-tuning.test.ts](../../../../sources/joshuaswarren__remnic/tests/cli-policy-tuning.test.ts)<br>[tests/config-lifecycle-policy.test.ts](../../../../sources/joshuaswarren__remnic/tests/config-lifecycle-policy.test.ts)<br>[tests/config-proactive-policy.test.ts](../../../../sources/joshuaswarren__remnic/tests/config-proactive-policy.test.ts) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/joshuaswarren__remnic/AGENTS.md)<br>[CLAUDE.md](../../../../sources/joshuaswarren__remnic/CLAUDE.md)<br>[src/AGENTS.md](../../../../sources/joshuaswarren__remnic/src/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/access-mcp-action-confidence.test.ts`, `tests/access-mcp-chatgpt-app.test.ts`, `tests/access-mcp-recall-xray.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `tests/compat-fixtures/missing-manifest/src/index.ts`, `tests/compat-fixtures/healthy/src/index.ts`, `tests/compat-fixtures/empty-package/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/hook-migration-preamble.test.ts`, `tests/memory-action-contracts.test.ts`.
4. retrieval/memory/indexing 확인: `tests/bench-memory-arena-runner.test.ts`, `tests/causal-retrieval.test.ts`, `tests/causal-trajectory-graph.test.ts`.
5. test/eval 파일로 동작 검증: `tsconfig.tests.json`, `tests/abstraction-nodes.test.ts`, `tests/access-http-action-confidence.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Open source memory and context for user aware agents scoped memory, provenance, retrieval quality, correction, boundarie. 핵심 구조 신호는 TypeScript, package.json, Makefile, README.md, AGENTS.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
