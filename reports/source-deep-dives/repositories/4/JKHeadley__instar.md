# JKHeadley/instar 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Persistent Claude Code agents with scheduling, sessions, memory, and Telegram.

## 요약

- 조사 단위: `sources/JKHeadley__instar` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 7,871 files, 309 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, upgrades/job-mcp-access.eli16.md, upgrades/side-effects/feat-portability-codex-mcp.md이고, 의존성 단서는 modelcontextprotocol, express, commander, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | JKHeadley/instar |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 68 |
| Forks | 16 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/JKHeadley__instar](../../../../sources/JKHeadley__instar) |
| 기존 보고서 | [reports/global-trending/repositories/JKHeadley__instar.md](../../../global-trending/repositories/JKHeadley__instar.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 7871 / 309 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .claude, .github, .husky, .instar, .planning, assets, commitments, dashboard, docs, examples, feedback-front, packages, playbook-scripts, scripts, site, skills, specs, src, tests, upgrades |
| 상위 확장자 | .md: 3642, .ts: 3597, .json: 292, .txt: 69, .mjs: 61, .js: 54, .py: 40, .sh: 35, .png: 23, (none): 12, .yml: 8, .astro: 6 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 62 |
| docs | documentation surface | 17 |
| packages/threadline-mcp | packages workspace | 17 |
| src | source boundary | 11 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| commitments | top-level component | 1 |
| dashboard | top-level component | 1 |
| examples | top-level component | 1 |
| feedback-front | top-level component | 1 |
| packages | source boundary | 1 |
| playbook-scripts | top-level component | 1 |
| scripts | top-level component | 1 |
| site | documentation surface | 1 |
| skills | top-level component | 1 |
| specs | top-level component | 1 |
| upgrades | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | generate:manifest | node scripts/generate-builtin-manifest.cjs |
| build | package.json | build | node scripts/generate-builtin-manifest.cjs && tsc && chmod 0755 dist/cli.js && node scripts/sign-instar-lockfile.mjs |
| serve-dev | package.json | dev | tsc --watch |
| test | package.json | test | vitest run |
| test | package.json | test:push | vitest run --config vitest.push.config.ts |
| test | package.json | test:smoke | node scripts/pre-push-smoke.mjs |
| test | package.json | test:flaky | vitest run tests/unit/relationship-routes.test.ts tests/integration/messaging-routes.test.ts tests/integration/whatsapp-routes.test.ts tests/unit/server.test.ts tests/e2e/semantic-memory-lifecycle.test.ts tests/e2e/syste |
| test | package.json | test:watch | vitest |
| test | package.json | test:integration | vitest run --config vitest.integration.config.ts |
| test | package.json | test:e2e | vitest run --config vitest.e2e.config.ts |
| test | package.json | test:contract | node scripts/run-contract-tests.js |
| test | package.json | test:contract:raw | vitest run --config vitest.contract.config.ts |
| test | package.json | test:all | vitest run && vitest run --config vitest.integration.config.ts && vitest run --config vitest.e2e.config.ts |
| quality | package.json | lint | tsc --noEmit && node scripts/lint-no-direct-destructive.js && node scripts/lint-no-direct-llm-http.js && node scripts/lint-no-direct-url-log.js && node scripts/lint-no-unfunneled-topic-creation.js && node scripts/lint-no |
| quality | package.json | lint:destructive | node scripts/lint-no-direct-destructive.js |
| serve-dev | package.json | lint:dev-agent-dark-gate | node scripts/lint-dev-agent-dark-gate.js |
| quality | package.json | lint:guard-manifest | node scripts/lint-guard-manifest.js |
| serve-dev | package.json | lint:dev-agent-dark-gate:staged | node scripts/lint-dev-agent-dark-gate.js --staged |
| quality | package.json | lint:destructive:staged | node scripts/lint-no-direct-destructive.js --staged |
| quality | package.json | lint:llm-http | node scripts/lint-no-direct-llm-http.js |
| quality | package.json | lint:llm-attribution | node scripts/lint-llm-attribution.js |
| quality | package.json | lint:llm-attribution:staged | node scripts/lint-llm-attribution.js --staged |
| quality | package.json | lint:llm-http:staged | node scripts/lint-no-direct-llm-http.js --staged |
| quality | package.json | lint:credential-write | node scripts/lint-no-unfunneled-credential-write.js |
| quality | package.json | lint:credential-write:staged | node scripts/lint-no-unfunneled-credential-write.js --staged |
| build | package.json | clean | rm -rf dist |
| quality | package.json | check:upgrade-guide | node scripts/check-upgrade-guide.js |
| quality | package.json | check:pre-push-gate | node scripts/pre-push-gate.js |
| build | package.json | check:release | node scripts/analyze-release.js |
| quality | package.json | check:contract-evidence | node scripts/check-contract-evidence.js |
| build | package.json | prepublishOnly | npm run build && npm run check:upgrade-guide && npm run check:contract-evidence |
| utility | package.json | postinstall | node scripts/fix-better-sqlite3.cjs |
| utility | package.json | prepare | husky |
| entrypoint | package.json bin | cli.js | dist/cli.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | transformers |
| webRuntime | express |
| developerSurface | commander |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/JKHeadley__instar/.mcp.json) | mcp signal |
| mcp | [upgrades/job-mcp-access.eli16.md](../../../../sources/JKHeadley__instar/upgrades/job-mcp-access.eli16.md) | mcp signal |
| mcp | [upgrades/side-effects/feat-portability-codex-mcp.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/feat-portability-codex-mcp.md) | mcp signal |
| mcp | [upgrades/side-effects/job-mcp-access.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/job-mcp-access.md) | mcp signal |
| agentRuntime | [upgrades/context-wall-compact-escalation.eli16.md](../../../../sources/JKHeadley__instar/upgrades/context-wall-compact-escalation.eli16.md) | agentRuntime signal |
| agentRuntime | [upgrades/side-effects/agent-autonomy-principles.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/agent-autonomy-principles.md) | agentRuntime signal |
| agentRuntime | [upgrades/side-effects/agent-data-spotlight-exclusion.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/agent-data-spotlight-exclusion.md) | agentRuntime signal |
| agentRuntime | [upgrades/side-effects/agent-hard-sleep-controller.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/agent-hard-sleep-controller.md) | agentRuntime signal |
| entrypoints | [tests/unit/server.test.ts](../../../../sources/JKHeadley__instar/tests/unit/server.test.ts) | entrypoints signal |
| entrypoints | [src/cli.ts](../../../../sources/JKHeadley__instar/src/cli.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/JKHeadley__instar/src/index.ts) | entrypoints signal |
| entrypoints | [src/commands/server.ts](../../../../sources/JKHeadley__instar/src/commands/server.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [tests/unit/server.test.ts](../../../../sources/JKHeadley__instar/tests/unit/server.test.ts)<br>[src/cli.ts](../../../../sources/JKHeadley__instar/src/cli.ts)<br>[src/index.ts](../../../../sources/JKHeadley__instar/src/index.ts)<br>[src/commands/server.ts](../../../../sources/JKHeadley__instar/src/commands/server.ts)<br>[scripts/attachments-sync/main.go](../../../../sources/JKHeadley__instar/scripts/attachments-sync/main.go)<br>[packages/threadline-mcp/server.json](../../../../sources/JKHeadley__instar/packages/threadline-mcp/server.json)<br>[packages/threadline-mcp/src/server.ts](../../../../sources/JKHeadley__instar/packages/threadline-mcp/src/server.ts) |
| agentRuntime | 220 | [upgrades/context-wall-compact-escalation.eli16.md](../../../../sources/JKHeadley__instar/upgrades/context-wall-compact-escalation.eli16.md)<br>[upgrades/side-effects/agent-autonomy-principles.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/agent-autonomy-principles.md)<br>[upgrades/side-effects/agent-data-spotlight-exclusion.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/agent-data-spotlight-exclusion.md)<br>[upgrades/side-effects/agent-hard-sleep-controller.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/agent-hard-sleep-controller.md)<br>[upgrades/side-effects/agent-hard-sleep-mechanism.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/agent-hard-sleep-mechanism.md)<br>[upgrades/side-effects/agent-health-alert-authority-routing.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/agent-health-alert-authority-routing.md)<br>[upgrades/side-effects/agent-owned-followthrough.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/agent-owned-followthrough.md)<br>[upgrades/side-effects/agent-telegram-comms-primitive.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/agent-telegram-comms-primitive.md) |
| mcp | 41 | [.mcp.json](../../../../sources/JKHeadley__instar/.mcp.json)<br>[upgrades/job-mcp-access.eli16.md](../../../../sources/JKHeadley__instar/upgrades/job-mcp-access.eli16.md)<br>[upgrades/side-effects/feat-portability-codex-mcp.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/feat-portability-codex-mcp.md)<br>[upgrades/side-effects/job-mcp-access.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/job-mcp-access.md)<br>[upgrades/side-effects/loop-session-no-mcp.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/loop-session-no-mcp.md)<br>[upgrades/side-effects/mcp-process-reaper.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/mcp-process-reaper.md)<br>[upgrades/side-effects/watchdog-mcp-version-pin.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/watchdog-mcp-version-pin.md)<br>[tests/unit/mcp-process-reaper.test.ts](../../../../sources/JKHeadley__instar/tests/unit/mcp-process-reaper.test.ts) |
| retrieval | 124 | [upgrades/side-effects/promptgate-auto-dismiss-memory.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/promptgate-auto-dismiss-memory.md)<br>[upgrades/side-effects/secret-retrieval-first-standard.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/secret-retrieval-first-standard.md)<br>[upgrades/side-effects/semantic-memory-corruption-recovery.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/semantic-memory-corruption-recovery.md)<br>[upgrades/side-effects/session-boot-self-knowledge.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/session-boot-self-knowledge.md)<br>[upgrades/side-effects/ws2-send-2-knowledge.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/ws2-send-2-knowledge.md)<br>[upgrades/side-effects/ws24-knowledge.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/ws24-knowledge.md)<br>[tests/unit/boot-self-knowledge.test.ts](../../../../sources/JKHeadley__instar/tests/unit/boot-self-knowledge.test.ts)<br>[tests/unit/episodic-memory.test.ts](../../../../sources/JKHeadley__instar/tests/unit/episodic-memory.test.ts) |
| spec | 298 | [upgrades/side-effects/APPRENTICESHIP-STEP0-RETRO-HARVEST-SPEC.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/APPRENTICESHIP-STEP0-RETRO-HARVEST-SPEC.md)<br>[upgrades/side-effects/APPRENTICESHIP-STEP1-PROGRAM-SCAFFOLD-SPEC.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/APPRENTICESHIP-STEP1-PROGRAM-SCAFFOLD-SPEC.md)<br>[upgrades/side-effects/APPRENTICESHIP-STEP2-GEMINI-RUNTIME-ADAPTER-SPEC.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/APPRENTICESHIP-STEP2-GEMINI-RUNTIME-ADAPTER-SPEC.md)<br>[upgrades/side-effects/pr-gate-phase-a-spec-and-reports-docs-only.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/pr-gate-phase-a-spec-and-reports-docs-only.md)<br>[upgrades/side-effects/spec-converge-foundation-audit.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/spec-converge-foundation-audit.md)<br>[upgrades/side-effects/threadline-cooldown-spec-landing.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/threadline-cooldown-spec-landing.md)<br>[tests/unit/migrate-spec-converge-foundation-audit.test.ts](../../../../sources/JKHeadley__instar/tests/unit/migrate-spec-converge-foundation-audit.test.ts)<br>[tests/unit/spec-conformance-cli.test.ts](../../../../sources/JKHeadley__instar/tests/unit/spec-conformance-cli.test.ts) |
| eval | 2667 | [upgrades/feedback-phase3-monitor.eli16.md](../../../../sources/JKHeadley__instar/upgrades/feedback-phase3-monitor.eli16.md)<br>[upgrades/mentor-tick-observability.eli16.md](../../../../sources/JKHeadley__instar/upgrades/mentor-tick-observability.eli16.md)<br>[upgrades/test-env-hermetic-reply-scripts.eli16.md](../../../../sources/JKHeadley__instar/upgrades/test-env-hermetic-reply-scripts.eli16.md)<br>[upgrades/watchdog-launchctl-test-guard.eli16.md](../../../../sources/JKHeadley__instar/upgrades/watchdog-launchctl-test-guard.eli16.md)<br>[upgrades/side-effects/a2a-inbound-gate-observability.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/a2a-inbound-gate-observability.md)<br>[upgrades/side-effects/agentmd-loader-200jobs-perf-benchmark.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/agentmd-loader-200jobs-perf-benchmark.md)<br>[upgrades/side-effects/APPRENTICESHIP-STEP0-RETRO-HARVEST-SPEC.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/APPRENTICESHIP-STEP0-RETRO-HARVEST-SPEC.md)<br>[upgrades/side-effects/APPRENTICESHIP-STEP1-PROGRAM-SCAFFOLD-SPEC.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/APPRENTICESHIP-STEP1-PROGRAM-SCAFFOLD-SPEC.md) |
| security | 326 | [SECURITY.md](../../../../sources/JKHeadley__instar/SECURITY.md)<br>[upgrades/autoloop-gate-compliance.eli16.md](../../../../sources/JKHeadley__instar/upgrades/autoloop-gate-compliance.eli16.md)<br>[upgrades/commitment-bare-continuation-guard.eli16.md](../../../../sources/JKHeadley__instar/upgrades/commitment-bare-continuation-guard.eli16.md)<br>[upgrades/decision-audit-presence.eli16.md](../../../../sources/JKHeadley__instar/upgrades/decision-audit-presence.eli16.md)<br>[upgrades/decision-audit-self-commit.eli16.md](../../../../sources/JKHeadley__instar/upgrades/decision-audit-self-commit.eli16.md)<br>[upgrades/dev-preflight-new-surface-friction-guard.eli16.md](../../../../sources/JKHeadley__instar/upgrades/dev-preflight-new-surface-friction-guard.eli16.md)<br>[upgrades/double-send-route-guard.eli16.md](../../../../sources/JKHeadley__instar/upgrades/double-send-route-guard.eli16.md)<br>[upgrades/gate-blocked-audit-hygiene.eli16.md](../../../../sources/JKHeadley__instar/upgrades/gate-blocked-audit-hygiene.eli16.md) |
| ci | 8 | [.github/workflows/ci.yml](../../../../sources/JKHeadley__instar/.github/workflows/ci.yml)<br>[.github/workflows/decision-audit-gate.yml](../../../../sources/JKHeadley__instar/.github/workflows/decision-audit-gate.yml)<br>[.github/workflows/docs-coverage-weekly.yml](../../../../sources/JKHeadley__instar/.github/workflows/docs-coverage-weekly.yml)<br>[.github/workflows/eli16-pr-gate.yml](../../../../sources/JKHeadley__instar/.github/workflows/eli16-pr-gate.yml)<br>[.github/workflows/publish-threadline-mcp.yml](../../../../sources/JKHeadley__instar/.github/workflows/publish-threadline-mcp.yml)<br>[.github/workflows/publish.yml](../../../../sources/JKHeadley__instar/.github/workflows/publish.yml)<br>[.github/workflows/runbook-pr-gate.yml](../../../../sources/JKHeadley__instar/.github/workflows/runbook-pr-gate.yml)<br>[.github/workflows/worktree-trailer-sig-check.yml](../../../../sources/JKHeadley__instar/.github/workflows/worktree-trailer-sig-check.yml) |
| container | 1 | [Dockerfile.relay](../../../../sources/JKHeadley__instar/Dockerfile.relay) |
| instruction | 4 | [CLAUDE.md](../../../../sources/JKHeadley__instar/CLAUDE.md)<br>[tests/fixtures/test-repo/CLAUDE.md](../../../../sources/JKHeadley__instar/tests/fixtures/test-repo/CLAUDE.md)<br>[specs/frameworks/codex-cli/agents.md](../../../../sources/JKHeadley__instar/specs/frameworks/codex-cli/agents.md)<br>[specs/frameworks/claude-code/agents.md](../../../../sources/JKHeadley__instar/specs/frameworks/claude-code/agents.md) |
| docs | 1333 | [README.md](../../../../sources/JKHeadley__instar/README.md)<br>[tests/fixtures/test-repo/README.md](../../../../sources/JKHeadley__instar/tests/fixtures/test-repo/README.md)<br>[tests/fixtures/migration-agents/README.md](../../../../sources/JKHeadley__instar/tests/fixtures/migration-agents/README.md)<br>[src/redteam/packs/README.md](../../../../sources/JKHeadley__instar/src/redteam/packs/README.md)<br>[src/providers/README.md](../../../../sources/JKHeadley__instar/src/providers/README.md)<br>[src/providers/adapters/anthropic-interactive-pool/README.md](../../../../sources/JKHeadley__instar/src/providers/adapters/anthropic-interactive-pool/README.md)<br>[src/providers/adapters/anthropic-headless/README.md](../../../../sources/JKHeadley__instar/src/providers/adapters/anthropic-headless/README.md)<br>[specs/provider-portability/README.md](../../../../sources/JKHeadley__instar/specs/provider-portability/README.md) |
| config | 8 | [package.json](../../../../sources/JKHeadley__instar/package.json)<br>[tsconfig.json](../../../../sources/JKHeadley__instar/tsconfig.json)<br>[site/package.json](../../../../sources/JKHeadley__instar/site/package.json)<br>[site/tsconfig.json](../../../../sources/JKHeadley__instar/site/tsconfig.json)<br>[scripts/attachments-sync/go.mod](../../../../sources/JKHeadley__instar/scripts/attachments-sync/go.mod)<br>[packages/threadline-mcp/package.json](../../../../sources/JKHeadley__instar/packages/threadline-mcp/package.json)<br>[packages/threadline-mcp/tsconfig.json](../../../../sources/JKHeadley__instar/packages/threadline-mcp/tsconfig.json)<br>[feedback-front/package.json](../../../../sources/JKHeadley__instar/feedback-front/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 2667 | [upgrades/feedback-phase3-monitor.eli16.md](../../../../sources/JKHeadley__instar/upgrades/feedback-phase3-monitor.eli16.md)<br>[upgrades/mentor-tick-observability.eli16.md](../../../../sources/JKHeadley__instar/upgrades/mentor-tick-observability.eli16.md)<br>[upgrades/test-env-hermetic-reply-scripts.eli16.md](../../../../sources/JKHeadley__instar/upgrades/test-env-hermetic-reply-scripts.eli16.md)<br>[upgrades/watchdog-launchctl-test-guard.eli16.md](../../../../sources/JKHeadley__instar/upgrades/watchdog-launchctl-test-guard.eli16.md)<br>[upgrades/side-effects/a2a-inbound-gate-observability.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/a2a-inbound-gate-observability.md)<br>[upgrades/side-effects/agentmd-loader-200jobs-perf-benchmark.md](../../../../sources/JKHeadley__instar/upgrades/side-effects/agentmd-loader-200jobs-perf-benchmark.md) |
| CI workflow | 8 | [.github/workflows/ci.yml](../../../../sources/JKHeadley__instar/.github/workflows/ci.yml)<br>[.github/workflows/decision-audit-gate.yml](../../../../sources/JKHeadley__instar/.github/workflows/decision-audit-gate.yml)<br>[.github/workflows/docs-coverage-weekly.yml](../../../../sources/JKHeadley__instar/.github/workflows/docs-coverage-weekly.yml)<br>[.github/workflows/eli16-pr-gate.yml](../../../../sources/JKHeadley__instar/.github/workflows/eli16-pr-gate.yml)<br>[.github/workflows/publish-threadline-mcp.yml](../../../../sources/JKHeadley__instar/.github/workflows/publish-threadline-mcp.yml)<br>[.github/workflows/publish.yml](../../../../sources/JKHeadley__instar/.github/workflows/publish.yml) |
| 컨테이너/배포 | 1 | [Dockerfile.relay](../../../../sources/JKHeadley__instar/Dockerfile.relay) |
| 보안/정책 | 326 | [SECURITY.md](../../../../sources/JKHeadley__instar/SECURITY.md)<br>[upgrades/autoloop-gate-compliance.eli16.md](../../../../sources/JKHeadley__instar/upgrades/autoloop-gate-compliance.eli16.md)<br>[upgrades/commitment-bare-continuation-guard.eli16.md](../../../../sources/JKHeadley__instar/upgrades/commitment-bare-continuation-guard.eli16.md)<br>[upgrades/decision-audit-presence.eli16.md](../../../../sources/JKHeadley__instar/upgrades/decision-audit-presence.eli16.md)<br>[upgrades/decision-audit-self-commit.eli16.md](../../../../sources/JKHeadley__instar/upgrades/decision-audit-self-commit.eli16.md)<br>[upgrades/dev-preflight-new-surface-friction-guard.eli16.md](../../../../sources/JKHeadley__instar/upgrades/dev-preflight-new-surface-friction-guard.eli16.md) |
| 에이전트 지시문 | 4 | [CLAUDE.md](../../../../sources/JKHeadley__instar/CLAUDE.md)<br>[tests/fixtures/test-repo/CLAUDE.md](../../../../sources/JKHeadley__instar/tests/fixtures/test-repo/CLAUDE.md)<br>[specs/frameworks/codex-cli/agents.md](../../../../sources/JKHeadley__instar/specs/frameworks/codex-cli/agents.md)<br>[specs/frameworks/claude-code/agents.md](../../../../sources/JKHeadley__instar/specs/frameworks/claude-code/agents.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `.mcp.json`, `upgrades/job-mcp-access.eli16.md`, `upgrades/side-effects/feat-portability-codex-mcp.md`.
2. entrypoint를 따라 실행 흐름 확인: `tests/unit/server.test.ts`, `src/cli.ts`, `src/index.ts`.
3. agent/tool runtime 매핑: `upgrades/context-wall-compact-escalation.eli16.md`, `upgrades/side-effects/agent-autonomy-principles.md`, `upgrades/side-effects/agent-data-spotlight-exclusion.md`.
4. retrieval/memory/indexing 확인: `upgrades/side-effects/promptgate-auto-dismiss-memory.md`, `upgrades/side-effects/secret-retrieval-first-standard.md`, `upgrades/side-effects/semantic-memory-corruption-recovery.md`.
5. test/eval 파일로 동작 검증: `upgrades/feedback-phase3-monitor.eli16.md`, `upgrades/mentor-tick-observability.eli16.md`, `upgrades/test-env-hermetic-reply-scripts.eli16.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Persistent Claude Code agents with scheduling, sessions, memory, and Telegram.. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, modelcontextprotocol이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
