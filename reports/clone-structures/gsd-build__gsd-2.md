# gsd-build/gsd-2 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/gsd-build__gsd-2 |
| remote | https://github.com/gsd-build/gsd-2 |
| HEAD | 33c00aa (2026-05-22) Merge pull request #6451 from gsd-build/fix/legacy-forensics-redirect |
| branch | main |
| groups | spec-driven-20 |
| files | 3607 |
| dirs | 350 |
| stack | Node/TypeScript/JavaScript, Rust |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `GSD 2 Has Moved`

> <! GSD 2 Archived repository redirect GSD 2 Has Moved This repository is no longer the active home for GSD 2 development. The project now continues as GSD Pi in the Open GSD repository https //github.com/open gsd/gsd pi Use the new repository for current source code, issues, releases, and contribution work. For community support, use the canonical Discord invite https //discord.com/invite/nKXTsAcmbT

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .dockerignore | file |
| .github | dir |
| .gitignore | file |
| .mcp.json | file |
| .npmignore | file |
| .npmrc | file |
| .plans | dir |
| .prompt-injection-scanignore | file |
| .secretscanignore | file |
| CHANGELOG.md | file |
| CONTEXT.md | file |
| CONTRIBUTING.md | file |
| docker | dir |
| Dockerfile | file |
| docs | dir |
| extensions | dir |
| gitbook | dir |
| gsd-orchestrator | dir |
| LICENSE | file |
| mintlify-docs | dir |
| native | dir |
| package-lock.json | file |
| package.json | file |
| packages | dir |
| pkg | dir |
| README.md | file |
| scripts | dir |
| src | dir |
| studio | dir |
| tests | dir |
| tsconfig.extensions.json | file |
| tsconfig.json | file |
| tsconfig.resources.json | file |
| tsconfig.test.json | file |
| VISION.md | file |
| vscode-extension | dir |
| web | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 2255 |
| packages/ | 581 |
| docs/ | 216 |
| web/ | 203 |
| scripts/ | 81 |
| native/ | 45 |
| vscode-extension/ | 38 |
| gitbook/ | 34 |
| mintlify-docs/ | 25 |
| tests/ | 25 |
| .github/ | 23 |
| .plans/ | 21 |
| (root) | 20 |
| studio/ | 20 |
| docker/ | 8 |
| gsd-orchestrator/ | 8 |
| extensions/ | 3 |
| pkg/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 2255 | preferred |
| packages/ | 581 | preferred |
| web/ | 203 | preferred |
| docs/ | 216 | preferred |
| tests/ | 25 | preferred |
| scripts/ | 81 | preferred |
| extensions/ | 3 | preferred |
| src/resources/ | 2016 | large |
| src/resources/extensions/ | 1651 | large |
| src/resources/skills/ | 351 | large |
| packages/pi-coding-agent/ | 281 | large |
| packages/pi-coding-agent/src/ | 278 | large |
| src/tests/ | 162 | large |
| docs/dev/ | 152 | large |
| packages/pi-ai/ | 106 | large |
| packages/pi-ai/src/ | 101 | large |
| web/components/ | 96 | large |
| web/components/ui/ | 57 | large |
| packages/native/ | 50 | large |
| packages/pi-tui/ | 50 | large |
| packages/native/src/ | 48 | large |
| packages/pi-tui/src/ | 48 | large |
| web/app/ | 46 | large |
| native/ | 45 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `extensions/google-search/package.json`
- `native/Cargo.toml`
- `native/crates/ast/Cargo.toml`
- `native/crates/engine/Cargo.toml`
- `native/crates/grep/Cargo.toml`
- `native/npm/darwin-arm64/package.json`
- `native/npm/darwin-x64/package.json`
- `native/npm/linux-arm64-gnu/package.json`
- `native/npm/linux-x64-gnu/package.json`
- `native/npm/win32-x64-msvc/package.json`
- `package.json`
- `packages/contracts/package.json`
- `packages/contracts/tsconfig.json`
- `packages/daemon/package.json`
- `packages/daemon/tsconfig.json`
- `packages/mcp-server/package.json`
- `packages/mcp-server/tsconfig.json`
- `packages/native/package.json`
- `packages/native/tsconfig.json`
- `packages/pi-agent-core/package.json`
- `packages/pi-agent-core/tsconfig.json`
- `packages/pi-ai/package.json`
- `packages/pi-ai/tsconfig.json`
- `packages/pi-coding-agent/package.json`
- `packages/pi-coding-agent/tsconfig.json`
- `packages/pi-tui/package.json`
- `packages/pi-tui/tsconfig.json`
- `packages/rpc-client/package.json`
- `packages/rpc-client/tsconfig.json`
- `pkg/package.json`
- `src/resources/extensions/browser-tools/package.json`
- `src/resources/extensions/claude-code-cli/package.json`
- `src/resources/extensions/cmux/package.json`
- `src/resources/extensions/context7/package.json`
- `src/resources/extensions/google-search/package.json`
- `src/resources/extensions/gsd/package.json`
- `src/resources/extensions/package.json`
- `src/resources/extensions/universal-config/package.json`
- `studio/package.json`
- `studio/tsconfig.json`
- `tsconfig.json`
- `vscode-extension/package.json`
- `vscode-extension/tsconfig.json`
- `web/package.json`
- `web/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| extensions/google-search/package.json | @gsd-extensions/google-search |  | @google/genai, @sinclair/typebox |
| native/npm/darwin-arm64/package.json | @gsd-build/engine-darwin-arm64 |  |  |
| native/npm/darwin-x64/package.json | @gsd-build/engine-darwin-x64 |  |  |
| native/npm/linux-arm64-gnu/package.json | @gsd-build/engine-linux-arm64-gnu |  |  |
| native/npm/linux-x64-gnu/package.json | @gsd-build/engine-linux-x64-gnu |  |  |
| native/npm/win32-x64-msvc/package.json | @gsd-build/engine-win32-x64-msvc |  |  |
| package.json | gsd-pi | build:pi-tui, build:pi-ai, build:pi-agent-core, build:pi-coding-agent, build:native-pkg, build:contracts, build:rpc-client, build:pi, build:mcp-server, build:core, build, stage:web-host, build:web-host, copy-resources, copy-themes, copy-export-html | @anthropic-ai/sdk, @anthropic-ai/vertex-sdk, @aws-sdk/client-bedrock-runtime, @clack/prompts, @google/genai, @mariozechner/jiti, @mistralai/mistralai, @modelcontextprotocol/sdk, @silvia-odwyer/photon-node, @sinclair/typebox, ajv, ajv-formats, chalk, chokidar |
| packages/contracts/package.json | @gsd-build/contracts | build, test |  |
| packages/daemon/package.json | @gsd-build/daemon | build, test | @anthropic-ai/sdk, @gsd-build/contracts, @gsd-build/rpc-client, discord.js, yaml, zod |
| packages/mcp-server/package.json | @gsd-build/mcp-server | build, build:test, test | @gsd-build/contracts, @gsd-build/rpc-client, @modelcontextprotocol/sdk, zod |
| packages/native/package.json | @gsd/native | build, build:native, build:native:dev, test |  |
| packages/pi-agent-core/package.json | @gsd/pi-agent-core | build |  |
| packages/pi-ai/package.json | @gsd/pi-ai | build | @anthropic-ai/sdk, @anthropic-ai/vertex-sdk, @aws-sdk/client-bedrock-runtime, @google/genai, @mistralai/mistralai, @sinclair/typebox, ajv, ajv-formats, chalk, openai, proxy-agent, undici, zod-to-json-schema |
| packages/pi-coding-agent/package.json | @gsd/pi-coding-agent | build, copy-assets | @gsd-build/contracts, @mariozechner/jiti, @silvia-odwyer/photon-node, chalk, diff, extract-zip, file-type, glob, hosted-git-info, ignore, marked, minimatch, proper-lockfile, strip-ansi |
| packages/pi-tui/package.json | @gsd/pi-tui | build | chalk, get-east-asian-width, marked, mime-types |
| packages/rpc-client/package.json | @gsd-build/rpc-client | build, test | @gsd-build/contracts |
| pkg/package.json | @glittercowboy/gsd |  |  |
| src/resources/extensions/browser-tools/package.json | pi-browser-tools | test |  |
| src/resources/extensions/claude-code-cli/package.json | @gsd/claude-code-cli |  |  |
| src/resources/extensions/cmux/package.json | @gsd/cmux |  |  |
| src/resources/extensions/context7/package.json | pi-extension-context7 |  |  |
| src/resources/extensions/google-search/package.json | pi-extension-google-search |  |  |
| src/resources/extensions/gsd/package.json | pi-extension-gsd |  |  |
| src/resources/extensions/package.json |  |  |  |
| src/resources/extensions/universal-config/package.json | pi-extension-universal-config |  |  |
| studio/package.json | @gsd/studio | dev, build, preview, test, test:e2e | @phosphor-icons/react, react, react-dom, react-resizable-panels, zustand |
| vscode-extension/package.json | gsd-2 | build, watch, test, package, publish | @gsd-build/contracts |
| web/package.json | gsd-web | dev, build, start, start:standalone, lint, test | @gsd-build/contracts, @hookform/resolvers, @lezer/highlight, @mariozechner/jiti, @radix-ui/react-accordion, @radix-ui/react-alert-dialog, @radix-ui/react-aspect-ratio, @radix-ui/react-avatar, @radix-ui/react-checkbox, @radix-ui/react-collapsible, @radix-ui/react-context-menu, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-hover-card |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| native/Cargo.toml |  | true | "crates/*" |
| native/crates/ast/Cargo.toml | gsd-ast | false |  |
| native/crates/engine/Cargo.toml | gsd-engine | false |  |
| native/crates/grep/Cargo.toml | gsd-grep | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docker/README.md`
- `docs/README.md`
- `docs/adr/.gitkeep`
- `docs/agents/domain.md`
- `docs/agents/issue-tracker.md`
- `docs/agents/triage-labels.md`
- `docs/db-map.md`
- `docs/dev/2026-04-24-swarm-delivery-implementation-plan.md`
- `docs/dev/2026-05-03-long-running-refactor-plan-of-plans.md`
- `docs/dev/ADR-001-branchless-worktree-architecture.md`
- `docs/dev/ADR-002-external-state-directory.md`
- `docs/dev/ADR-003-pipeline-simplification.md`
- `docs/dev/ADR-004-capability-aware-model-routing.md`
- `docs/dev/ADR-005-multi-model-provider-tool-strategy.md`
- `docs/dev/ADR-006-extension-modularization.md`
- `docs/dev/ADR-007-model-catalog-split.md`
- `docs/dev/ADR-008-IMPLEMENTATION-PLAN.md`
- `docs/dev/ADR-008-gsd-tools-over-mcp-for-provider-parity.md`
- `docs/dev/ADR-009-IMPLEMENTATION-PLAN.md`
- `docs/dev/ADR-009-orchestration-kernel-refactor.md`
- `docs/dev/ADR-010-pi-clean-seam-architecture.md`
- `docs/dev/ADR-011-progressive-planning-escalation.md`
- `docs/dev/ADR-012-provider-id-vs-api-shape.md`
- `docs/dev/ADR-013-memory-store-consolidation.md`
- `docs/dev/ADR-014-auto-orchestration-deep-module.md`
- `docs/dev/ADR-015-runtime-invariant-modules.md`
- `docs/dev/ADR-016-phase-2-design.md`
- `docs/dev/ADR-016-worktree-lifecycle-and-projection.md`
- `docs/dev/ADR-016-worktree-safety-fail-closed.md`
- `docs/dev/ADR-017-state-reconciliation-drift-driven.md`
- `docs/dev/ADR-018-project-authority-contract.md`
- `docs/dev/ADR-019-unify-tui-style-system.md`
- `docs/dev/FILE-SYSTEM-MAP.md`
- `docs/dev/FRONTIER-TECHNIQUES.md`
- `docs/dev/PRD-branchless-worktree-architecture.md`
- `docs/dev/PRD-pi-clean-seam-refactor.md`
- `docs/dev/agent-knowledge-index.md`
- `docs/dev/architecture.md`
- `docs/dev/building-coding-agents/01-work-decomposition.md`
- `docs/dev/building-coding-agents/02-what-to-keep-discard-from-human-engineering.md`
- `docs/dev/building-coding-agents/03-state-machine-context-management.md`
- `docs/dev/building-coding-agents/04-optimal-storage-for-project-context.md`
- `docs/dev/building-coding-agents/05-parallelization-strategy.md`
- `docs/dev/building-coding-agents/06-maximizing-agent-autonomy-superpowers.md`
- `docs/dev/building-coding-agents/07-system-prompt-llm-vs-deterministic-split.md`
- `docs/dev/building-coding-agents/08-speed-optimization.md`
- `docs/dev/building-coding-agents/09-top-10-tips-for-a-world-class-agent.md`
- `docs/dev/building-coding-agents/10-top-10-pitfalls-to-avoid.md`
- ... 30 more

### 에이전트 지침 후보

- `.mcp.json`
- `docs/dev/ADR-008-gsd-tools-over-mcp-for-provider-parity.md`
- `docs/user-docs/skills.md`
- `docs/zh-CN/user-docs/skills.md`
- `gitbook/configuration/mcp-servers.md`
- `gitbook/features/skills.md`
- `mintlify-docs/guides/skills.mdx`
- `packages/mcp-server/.npmignore`
- `packages/mcp-server/README.md`
- `packages/mcp-server/package.json`
- `packages/mcp-server/src/alias-telemetry.test.ts`
- `packages/mcp-server/src/alias-telemetry.ts`
- `packages/mcp-server/src/cli.ts`
- `packages/mcp-server/src/env-writer.test.ts`
- `packages/mcp-server/src/env-writer.ts`
- `packages/mcp-server/src/import-candidates.test.ts`
- `packages/mcp-server/src/index.ts`
- `packages/mcp-server/src/mcp-server.test.ts`
- `packages/mcp-server/src/parse-workflow-args.test.ts`
- `packages/mcp-server/src/readers/captures.ts`
- `packages/mcp-server/src/readers/doctor-lite.ts`
- `packages/mcp-server/src/readers/graph.test.ts`
- `packages/mcp-server/src/readers/graph.ts`
- `packages/mcp-server/src/readers/index.ts`
- `packages/mcp-server/src/readers/knowledge.ts`
- `packages/mcp-server/src/readers/metrics.ts`
- `packages/mcp-server/src/readers/paths.test.ts`
- `packages/mcp-server/src/readers/paths.ts`
- `packages/mcp-server/src/readers/readers.test.ts`
- `packages/mcp-server/src/readers/roadmap.ts`
- `packages/mcp-server/src/readers/state.ts`
- `packages/mcp-server/src/remote-questions.test.ts`
- `packages/mcp-server/src/remote-questions.ts`
- `packages/mcp-server/src/secure-env-collect.test.ts`
- `packages/mcp-server/src/server.ts`
- `packages/mcp-server/src/session-manager.ts`
- `packages/mcp-server/src/tool-credentials.test.ts`
- `packages/mcp-server/src/tool-credentials.ts`
- `packages/mcp-server/src/types.ts`
- `packages/mcp-server/src/workflow-tools-parity.test.ts`
- `packages/mcp-server/src/workflow-tools.test.ts`
- `packages/mcp-server/src/workflow-tools.ts`
- `packages/mcp-server/tsconfig.json`
- `packages/mcp-server/tsconfig.test.json`
- `packages/pi-coding-agent/src/core/skill-tool.test.ts`
- `packages/pi-coding-agent/src/core/skills.ts`
- `packages/pi-coding-agent/src/modes/interactive/components/skill-invocation-message.ts`
- `packages/pi-coding-agent/src/tests/system-prompt-skill-filter.test.ts`
- `scripts/check-skill-references.mjs`
- `src/mcp-server.ts`
- `src/resources/extensions/gsd/commands-mcp-status.ts`
- `src/resources/extensions/gsd/mcp-filter.ts`
- `src/resources/extensions/gsd/mcp-project-config.ts`
- `src/resources/extensions/gsd/preferences-mcp.ts`
- `src/resources/extensions/gsd/preferences-skills.ts`
- `src/resources/extensions/gsd/prompts/heal-skill.md`
- `src/resources/extensions/gsd/skill-catalog.ts`
- `src/resources/extensions/gsd/skill-discovery.ts`
- `src/resources/extensions/gsd/skill-health.ts`
- `src/resources/extensions/gsd/skill-manifest.ts`
- `src/resources/extensions/gsd/skill-telemetry.ts`
- `src/resources/extensions/gsd/skills/gsd-headless/SKILL.md`
- `src/resources/extensions/gsd/skills/gsd-headless/references/answer-injection.md`
- `src/resources/extensions/gsd/skills/gsd-headless/references/commands.md`
- `src/resources/extensions/gsd/skills/gsd-headless/references/multi-session.md`
- `src/resources/extensions/gsd/tests/auto-retry-mcp-churn-fixes.test.ts`
- `src/resources/extensions/gsd/tests/bundled-skill-triggers.test.ts`
- `src/resources/extensions/gsd/tests/claude-skill-dirs.test.ts`
- `src/resources/extensions/gsd/tests/mcp-client-security.test.ts`
- `src/resources/extensions/gsd/tests/mcp-filter.test.ts`
- `src/resources/extensions/gsd/tests/mcp-project-config.test.ts`
- `src/resources/extensions/gsd/tests/mcp-status.test.ts`
- `src/resources/extensions/gsd/tests/parallel-skill-prompt-integration.test.ts`
- `src/resources/extensions/gsd/tests/preferences-mcp.test.ts`
- `src/resources/extensions/gsd/tests/skill-activation.test.ts`
- `src/resources/extensions/gsd/tests/skill-catalog.test.ts`
- `src/resources/extensions/gsd/tests/skill-lifecycle.test.ts`
- `src/resources/extensions/gsd/tests/skill-manifest.test.ts`
- `src/resources/extensions/gsd/tests/workflow-mcp-auto-prep.test.ts`
- `src/resources/extensions/gsd/tests/workflow-mcp.test.ts`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `docs/dev/ADR-016-phase-2-design.md`
- `docs/dev/superpowers/specs/2026-03-17-cicd-pipeline-design.md`
- `gsd-orchestrator/templates/spec.md`
- `src/resources/extensions/gsd/commands/catalog.ts`
- `src/resources/extensions/gsd/commands/context.ts`
- `src/resources/extensions/gsd/commands/dispatcher.ts`
- `src/resources/extensions/gsd/commands/handlers/auto.ts`
- `src/resources/extensions/gsd/commands/handlers/core.ts`
- `src/resources/extensions/gsd/commands/handlers/escalate.ts`
- `src/resources/extensions/gsd/commands/handlers/notifications-handler.ts`
- `src/resources/extensions/gsd/commands/handlers/onboarding.ts`
- `src/resources/extensions/gsd/commands/handlers/ops.ts`
- `src/resources/extensions/gsd/commands/handlers/parallel.ts`
- `src/resources/extensions/gsd/commands/handlers/workflow.ts`
- `src/resources/extensions/gsd/commands/index.ts`
- `src/resources/extensions/gsd/prompts/guided-discuss-requirements.md`
- `src/resources/extensions/gsd/schemas/__fixtures__/valid-requirements.md`
- `src/resources/extensions/gsd/skills/gsd-headless/SKILL.md`
- `src/resources/extensions/gsd/skills/gsd-headless/references/answer-injection.md`
- `src/resources/extensions/gsd/skills/gsd-headless/references/commands.md`
- `src/resources/extensions/gsd/skills/gsd-headless/references/multi-session.md`
- `src/resources/extensions/gsd/templates/PREFERENCES.md`
- `src/resources/extensions/gsd/templates/context.md`
- `src/resources/extensions/gsd/templates/decisions.md`
- `src/resources/extensions/gsd/templates/knowledge.md`
- `src/resources/extensions/gsd/templates/milestone-summary.md`
- `src/resources/extensions/gsd/templates/milestone-validation.md`
- `src/resources/extensions/gsd/templates/plan.md`
- `src/resources/extensions/gsd/templates/project.md`
- `src/resources/extensions/gsd/templates/reassessment.md`
- `src/resources/extensions/gsd/templates/requirements.md`
- `src/resources/extensions/gsd/templates/research.md`
- `src/resources/extensions/gsd/templates/roadmap.md`
- `src/resources/extensions/gsd/templates/runtime.md`
- `src/resources/extensions/gsd/templates/secrets-manifest.md`
- `src/resources/extensions/gsd/templates/slice-context.md`
- `src/resources/extensions/gsd/templates/slice-summary.md`
- `src/resources/extensions/gsd/templates/state.md`
- `src/resources/extensions/gsd/templates/task-plan.md`
- `src/resources/extensions/gsd/templates/task-summary.md`
- `src/resources/extensions/gsd/templates/uat.md`
- `src/resources/skills/accessibility/SKILL.md`
- `src/resources/skills/accessibility/references/WCAG.md`
- `src/resources/skills/agent-browser/SKILL.md`
- `src/resources/skills/agent-browser/references/authentication.md`
- `src/resources/skills/agent-browser/references/commands.md`
- `src/resources/skills/agent-browser/references/profiling.md`
- `src/resources/skills/agent-browser/references/proxy-support.md`
- `src/resources/skills/agent-browser/references/session-management.md`
- `src/resources/skills/agent-browser/references/snapshot-refs.md`
- `src/resources/skills/agent-browser/references/video-recording.md`
- `src/resources/skills/agent-browser/templates/authenticated-session.sh`
- `src/resources/skills/agent-browser/templates/capture-workflow.sh`
- `src/resources/skills/agent-browser/templates/form-automation.sh`
- `src/resources/skills/api-design/SKILL.md`
- `src/resources/skills/best-practices/SKILL.md`
- `src/resources/skills/btw/SKILL.md`
- `src/resources/skills/code-optimizer/SKILL.md`
- `src/resources/skills/code-optimizer/references/algorithmic-complexity.md`
- `src/resources/skills/code-optimizer/references/build-compilation.md`
- `src/resources/skills/code-optimizer/references/bundle-dependencies.md`
- `src/resources/skills/code-optimizer/references/caching-memoization.md`
- `src/resources/skills/code-optimizer/references/concurrency-async.md`
- `src/resources/skills/code-optimizer/references/config-infra.md`
- `src/resources/skills/code-optimizer/references/data-structures.md`
- `src/resources/skills/code-optimizer/references/database-queries.md`
- `src/resources/skills/code-optimizer/references/dead-code-redundancy.md`
- `src/resources/skills/code-optimizer/references/error-resilience.md`
- `src/resources/skills/code-optimizer/references/io-network.md`
- `src/resources/skills/code-optimizer/references/logging-observability.md`
- `src/resources/skills/code-optimizer/references/memory-resources.md`
- `src/resources/skills/code-optimizer/references/rendering-ui.md`
- `src/resources/skills/code-optimizer/references/security-performance.md`
- `src/resources/skills/core-web-vitals/SKILL.md`
- `src/resources/skills/core-web-vitals/references/LCP.md`
- `src/resources/skills/create-gsd-extension/SKILL.md`
- `src/resources/skills/create-gsd-extension/references/compaction-session-control.md`
- `src/resources/skills/create-gsd-extension/references/custom-commands.md`
- `src/resources/skills/create-gsd-extension/references/custom-rendering.md`
- `src/resources/skills/create-gsd-extension/references/custom-tools.md`
- `src/resources/skills/create-gsd-extension/references/custom-ui.md`
- `src/resources/skills/create-gsd-extension/references/events-reference.md`
- `src/resources/skills/create-gsd-extension/references/extension-lifecycle.md`
- `src/resources/skills/create-gsd-extension/references/extensionapi-reference.md`
- `src/resources/skills/create-gsd-extension/references/extensioncontext-reference.md`
- `src/resources/skills/create-gsd-extension/references/key-rules-gotchas.md`
- `src/resources/skills/create-gsd-extension/references/mode-behavior.md`
- `src/resources/skills/create-gsd-extension/references/model-provider-management.md`
- `src/resources/skills/create-gsd-extension/references/packaging-distribution.md`
- `src/resources/skills/create-gsd-extension/references/remote-execution-overrides.md`
- `src/resources/skills/create-gsd-extension/references/state-management.md`
- `src/resources/skills/create-gsd-extension/references/system-prompt-modification.md`
- `src/resources/skills/create-gsd-extension/templates/extension-skeleton.ts`
- `src/resources/skills/create-gsd-extension/templates/stateful-tool-skeleton.ts`
- `src/resources/skills/create-gsd-extension/templates/templates.test.ts`
- `src/resources/skills/create-gsd-extension/workflows/add-capability.md`
- `src/resources/skills/create-gsd-extension/workflows/create-extension.md`
- `src/resources/skills/create-gsd-extension/workflows/debug-extension.md`
- `src/resources/skills/create-mcp-server/SKILL.md`
- `src/resources/skills/create-skill/SKILL.md`
- ... 40 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `packages/contracts/src/rpc.test.ts`
- `packages/daemon/src/daemon.test.ts`
- `packages/daemon/src/discord-bot.test.ts`
- `packages/daemon/src/event-bridge.test.ts`
- `packages/daemon/src/event-formatter.test.ts`
- `packages/daemon/src/launchd.test.ts`
- `packages/daemon/src/message-batcher.test.ts`
- `packages/daemon/src/orchestrator.test.ts`
- `packages/daemon/src/project-scanner.test.ts`
- `packages/daemon/src/session-manager.test.ts`
- `packages/daemon/src/verbosity.test.ts`
- `packages/mcp-server/src/alias-telemetry.test.ts`
- `packages/mcp-server/src/env-writer.test.ts`
- `packages/mcp-server/src/import-candidates.test.ts`
- `packages/mcp-server/src/mcp-server.test.ts`
- `packages/mcp-server/src/parse-workflow-args.test.ts`
- `packages/mcp-server/src/readers/graph.test.ts`
- `packages/mcp-server/src/readers/paths.test.ts`
- `packages/mcp-server/src/readers/readers.test.ts`
- `packages/mcp-server/src/remote-questions.test.ts`
- `packages/mcp-server/src/secure-env-collect.test.ts`
- `packages/mcp-server/src/tool-credentials.test.ts`
- `packages/mcp-server/src/workflow-tools-parity.test.ts`
- `packages/mcp-server/src/workflow-tools.test.ts`
- `packages/pi-agent-core/src/agent-loop.test.ts`
- `packages/pi-agent-core/src/agent.test.ts`
- `packages/pi-agent-core/src/token-audit.test.ts`
- `packages/pi-ai/src/models.generated.test.ts`
- `packages/pi-ai/src/models.test.ts`
- `packages/pi-ai/src/providers/amazon-bedrock.test.ts`
- `packages/pi-ai/src/providers/anthropic-auth.test.ts`
- `packages/pi-ai/src/providers/anthropic-bearer-auth.test.ts`
- `packages/pi-ai/src/providers/anthropic-shared.cache-breakpoint.test.ts`
- `packages/pi-ai/src/providers/anthropic-shared.test.ts`
- `packages/pi-ai/src/providers/api-family.test.ts`
- `packages/pi-ai/src/providers/google-gemini-cli.test.ts`
- `packages/pi-ai/src/providers/google-shared.test.ts`
- `packages/pi-ai/src/providers/minimax-tool-name.test.ts`
- `packages/pi-ai/src/providers/openai-codex-responses.test.ts`
- `packages/pi-ai/src/providers/openai-completions.test.ts`
- `packages/pi-ai/src/providers/provider-capabilities.test.ts`
- `packages/pi-ai/src/providers/simple-options.test.ts`
- `packages/pi-ai/src/providers/think-tag-parser.test.ts`
- `packages/pi-ai/src/providers/transform-messages-report.test.ts`
- `packages/pi-ai/src/utils/oauth/github-copilot.test.ts`
- `packages/pi-ai/src/utils/oauth/google-antigravity.test.ts`
- `packages/pi-ai/src/utils/oauth/google-gemini-cli.test.ts`
- `packages/pi-ai/src/utils/tests/json-parse.test.ts`
- `packages/pi-ai/src/utils/tests/overflow.test.ts`
- `packages/pi-ai/src/utils/tests/repair-tool-json.test.ts`
- `packages/pi-coding-agent/src/cli/abort-signal-timeout.test.ts`
- `packages/pi-coding-agent/src/cli/args.test.ts`
- `packages/pi-coding-agent/src/core/agent-session-abort-order.test.ts`
- `packages/pi-coding-agent/src/core/agent-session-model-switch.test.ts`
- `packages/pi-coding-agent/src/core/agent-session-renderable-tools.test.ts`
- `packages/pi-coding-agent/src/core/agent-session-thinking-level.test.ts`
- `packages/pi-coding-agent/src/core/agent-session-tool-refresh.test.ts`
- `packages/pi-coding-agent/src/core/auth-storage.test.ts`
- `packages/pi-coding-agent/src/core/chat-controller-ordering.test.ts`
- `packages/pi-coding-agent/src/core/compaction-orchestrator.test.ts`
- `packages/pi-coding-agent/src/core/compaction-threshold.test.ts`
- `packages/pi-coding-agent/src/core/compaction-utils.test.ts`
- `packages/pi-coding-agent/src/core/compaction/compaction.test.ts`
- `packages/pi-coding-agent/src/core/contextual-tips.test.ts`
- `packages/pi-coding-agent/src/core/db-snapshot.test.ts`
- `packages/pi-coding-agent/src/core/discovery-cache.test.ts`
- `packages/pi-coding-agent/src/core/extensions/extension-manifest.test.ts`
- `packages/pi-coding-agent/src/core/extensions/extension-sort.test.ts`
- `packages/pi-coding-agent/src/core/extensions/loader.test.ts`
- `packages/pi-coding-agent/src/core/extensions/provider-registration.test.ts`
- `packages/pi-coding-agent/src/core/extensions/runner.test.ts`
- `packages/pi-coding-agent/src/core/fallback-resolver.test.ts`
- `packages/pi-coding-agent/src/core/fs-utils.test.ts`
- `packages/pi-coding-agent/src/core/hooks-runner.test.ts`
- `packages/pi-coding-agent/src/core/image-overflow-recovery.test.ts`
- `packages/pi-coding-agent/src/core/lifecycle-hooks.test.ts`
- `packages/pi-coding-agent/src/core/lsp/lsp-integration.test.ts`
- `packages/pi-coding-agent/src/core/lsp/lsp-legacy-alias.test.ts`
- `packages/pi-coding-agent/src/core/messages.test.ts`
- `packages/pi-coding-agent/src/core/model-discovery.test.ts`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/agent-workflow-guard.yml`
- `.github/workflows/ai-triage.yml`
- `.github/workflows/build-native.yml`
- `.github/workflows/ci.yml`
- `.github/workflows/cleanup-dev-versions.yml`
- `.github/workflows/dev-publish.yml`
- `.github/workflows/forensics-check.yml`
- `.github/workflows/issue-dedupe.yml`
- `.github/workflows/issue-lifecycle.yml`
- `.github/workflows/next-publish.yml`
- `.github/workflows/pipeline.yml`
- `.github/workflows/pr-risk.yml`
- `.github/workflows/prod-release.yml`
- `.github/workflows/security-audit.yml`
- `.github/workflows/version-check.yml`
- `Dockerfile`
- `docker/docker-compose.full.yaml`
- `docker/docker-compose.yaml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 2432 |
| .md | 736 |
| .tsx | 102 |
| .json | 73 |
| .mjs | 67 |
| .rs | 29 |
| .yml | 23 |
| .mdx | 21 |
| .cjs | 18 |
| .sh | 17 |
| .js | 14 |
| .yaml | 11 |
| .svg | 7 |
| .gitignore | 6 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `packages/ 내부 책임 분리`
- `web/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `docs/dev/ADR-016-phase-2-design.md 스펙/명령 의미`
- `docs/dev/superpowers/specs/2026-03-17-cicd-pipeline-design.md 스펙/명령 의미`
- `gsd-orchestrator/templates/spec.md 스펙/명령 의미`
- `src/resources/extensions/gsd/commands/catalog.ts 스펙/명령 의미`
- `src/resources/extensions/gsd/commands/context.ts 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `extensions/google-search/package.json 실행 스크립트와 패키지 경계`
- `native/Cargo.toml 실행 스크립트와 패키지 경계`
- `native/crates/ast/Cargo.toml 실행 스크립트와 패키지 경계`
- `native/crates/engine/Cargo.toml 실행 스크립트와 패키지 경계`

