# gsd-build/get-shit-done 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/gsd-build__get-shit-done |
| remote | https://github.com/gsd-build/get-shit-done |
| HEAD | bdcaab2 (2026-05-31) Merge pull request #3886 from gsd-build/chore/update-discord-link |
| branch | main |
| groups | spec-driven-20 |
| files | 1854 |
| dirs | 87 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `GSD Has Moved`

> <! GSD 2 Archived repository redirect GSD Has Moved This repository is no longer the active home for GSD development. The project now continues as GSD Core in the Open GSD repository https //github.com/open gsd/gsd core Use the new repository for current source code, issues, releases, and contribution work.

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .base64scanignore | file |
| .changeset | dir |
| .clinerules | file |
| .coderabbit.yaml | file |
| .githooks | dir |
| .github | dir |
| .gitignore | file |
| .out-of-scope | dir |
| .plans | dir |
| .release-monitor.sh | file |
| .secretscanignore | file |
| agents | dir |
| AGENTS.md | file |
| assets | dir |
| bin | dir |
| CHANGELOG.md | file |
| commands | dir |
| CONTEXT.md | file |
| CONTRIBUTING.md | file |
| docs | dir |
| get-shit-done | dir |
| hooks | dir |
| LICENSE | file |
| package-lock.json | file |
| package.json | file |
| QUICK-WINS-CONFIRMED-BUGS.md | file |
| README.ja-JP.md | file |
| README.ko-KR.md | file |
| README.md | file |
| README.pt-BR.md | file |
| README.zh-CN.md | file |
| scripts | dir |
| sdk | dir |
| SECURITY.md | file |
| TEST-EXAMPLES.md | file |
| tests | dir |
| tsconfig.json | file |
| VERSIONING.md | file |
| vitest.config.ts | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| tests/ | 581 |
| sdk/ | 347 |
| get-shit-done/ | 299 |
| .changeset/ | 294 |
| docs/ | 115 |
| commands/ | 67 |
| .github/ | 33 |
| agents/ | 33 |
| scripts/ | 33 |
| (root) | 24 |
| hooks/ | 15 |
| assets/ | 5 |
| bin/ | 3 |
| .githooks/ | 2 |
| .out-of-scope/ | 2 |
| .plans/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 115 | preferred |
| tests/ | 581 | preferred |
| commands/ | 67 | preferred |
| agents/ | 33 | preferred |
| scripts/ | 33 | preferred |
| sdk/ | 347 | large |
| sdk/src/ | 304 | large |
| get-shit-done/ | 299 | large |
| .changeset/ | 294 | large |
| sdk/src/query/ | 193 | large |
| get-shit-done/workflows/ | 107 | large |
| get-shit-done/bin/ | 80 | large |
| get-shit-done/bin/lib/ | 77 | large |
| commands/gsd/ | 67 | large |
| get-shit-done/references/ | 63 | large |
| get-shit-done/templates/ | 46 | large |
| .github/ | 33 | large |
| tests/fixtures/ | 27 | large |
| sdk/scripts/ | 21 | large |
| tests/fixtures/adversarial/ | 21 | large |
| .github/workflows/ | 20 | large |
| docs/adr/ | 18 | large |
| docs/zh-CN/ | 15 | large |
| hooks/ | 15 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `package.json`
- `sdk/package.json`
- `sdk/tsconfig.json`
- `tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | get-shit-done-cc | build:hooks, build:sdk, check:alias-drift, check:state-document-fresh, check:configuration-fresh, check:workstream-inventory-builder-fresh, check:project-root-fresh, check:plan-scan-fresh, check:secrets-fresh, check:schema-detect-fresh, check:decisions-fresh, check:workstream-name-policy-fresh, prepublishOnly, pretest, pretest:coverage, lint:descriptions | @anthropic-ai/claude-agent-sdk, ws |
| sdk/package.json | @gsd-build/sdk | build, check:alias-drift, gen:state-document, check:state-document-fresh, gen:configuration, check:configuration-fresh, gen:workstream-inventory-builder, check:workstream-inventory-builder-fresh, gen:project-root, check:project-root-fresh, gen:plan-scan, check:plan-scan-fresh, gen:secrets, check:secrets-fresh, gen:schema-detect, check:schema-detect-fresh | @anthropic-ai/claude-agent-sdk, synckit, ws |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.changeset/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `docs/AGENTS.md`
- `docs/ARCHITECTURE.md`
- `docs/BETA.md`
- `docs/CANARY.md`
- `docs/CLI-TOOLS.md`
- `docs/COMMANDS.md`
- `docs/CONFIGURATION.md`
- `docs/FEATURES.md`
- `docs/INVENTORY-MANIFEST.json`
- `docs/INVENTORY.md`
- `docs/README.md`
- `docs/RELEASE-v1.39.0-rc.4.md`
- `docs/RELEASE-v1.39.0-rc.5.md`
- `docs/RELEASE-v1.39.0-rc.6.md`
- `docs/RELEASE-v1.39.0-rc.7.md`
- `docs/RELEASE-v1.40.0-rc.1.md`
- `docs/RELEASE-v1.41.0.md`
- `docs/RELEASE-v1.42.0-rc.1.md`
- `docs/RELEASE-v1.42.1.md`
- `docs/RELEASE-v1.42.3.md`
- `docs/RELEASE-v1.50.0-canary.1.md`
- `docs/STATE-MD-LIFECYCLE.md`
- `docs/TESTING-SUITES.md`
- `docs/USER-GUIDE.md`
- `docs/adr/0001-dispatch-policy-module.md`
- `docs/adr/0002-command-contract-validation-module.md`
- `docs/adr/0003-model-catalog-module.md`
- `docs/adr/0004-worktree-workstream-seam-module.md`
- `docs/adr/0005-sdk-architecture-seam-map.md`
- `docs/adr/0006-planning-path-projection-module.md`
- `docs/adr/0007-sdk-package-seam-module.md`
- `docs/adr/0008-installer-migration-module.md`
- `docs/adr/0009-shell-command-projection-module.md`
- `docs/adr/0010-file-operation-engine-module.md`
- `docs/adr/0010-skill-surface-budget-module.md`
- `docs/adr/0011-review-default-reviewers-prd.md`
- `docs/adr/0011-review-default-reviewers.md`
- `docs/adr/0011-skill-surface-budget-module.md`
- `docs/adr/0012-command-routing-hub.md`
- `docs/adr/3524-cjs-sdk-hard-seam.md`
- `docs/adr/3660-runtime-artifact-layout-module.md`
- `docs/adr/README.md`
- `docs/agents/cjs-sdk-seam.md`
- `docs/agents/domain.md`
- `docs/agents/issue-tracker.md`
- `docs/agents/triage-labels.md`
- `docs/context-monitor.md`
- ... 30 more

### 에이전트 지침 후보

- `.changeset/3562-codex-install-skill-surface.md`
- `.changeset/feat-3408-skill-profiles.md`
- `.changeset/feat-3408-skill-surface.md`
- `.changeset/fix-3126-global-skills-base-runtime.md`
- `.changeset/mcp-token-budget-docs.md`
- `AGENTS.md`
- `docs/AGENTS.md`
- `docs/adr/0010-skill-surface-budget-module.md`
- `docs/adr/0011-skill-surface-budget-module.md`
- `docs/ja-JP/AGENTS.md`
- `docs/ko-KR/AGENTS.md`
- `docs/pt-BR/AGENTS.md`
- `docs/research/2026-05-12-skill-surface-budget.md`
- `docs/research/data/2026-05-12-skill-audit.json`
- `docs/skills/discovery-contract.md`
- `get-shit-done/references/project-skills-discovery.md`
- `get-shit-done/workflows/sync-skills.md`
- `scripts/lint-skill-deps.cjs`
- `sdk/src/query/skill-manifest.test.ts`
- `sdk/src/query/skill-manifest.ts`
- `sdk/src/query/skills.test.ts`
- `sdk/src/query/skills.ts`
- `sdk/src/workflow-agent-skills-consistency.test.ts`
- `tests/agent-skills-awareness.test.cjs`
- `tests/agent-skills.test.cjs`
- `tests/bug-2643-skill-frontmatter-name.test.cjs`
- `tests/bug-2808-skill-hyphen-name.test.cjs`
- `tests/bug-2876-skill-frontmatter-quote.test.cjs`
- `tests/bug-2942-detect-custom-skills.test.cjs`
- `tests/bug-2973-profile-user-skills-path.test.cjs`
- `tests/bug-3126-global-skills-base-runtime-path.test.cjs`
- `tests/bug-3562-codex-install-skill-surface.test.cjs`
- `tests/bug-3582-codex-skills-materialized.test.cjs`
- `tests/bug-3659-applysurface-prune-skill-dirs.test.cjs`
- `tests/claude-skills-migration.test.cjs`
- `tests/enh-2380-sync-skills.test.cjs`
- `tests/enh-2790-skill-consolidation.test.cjs`
- `tests/enh-2792-namespace-skills.test.cjs`
- `tests/feat-3025-mcp-token-budget-docs.test.cjs`
- `tests/hermes-skills-migration.test.cjs`
- `tests/lint-skill-deps.test.cjs`
- `tests/mcp-tool-inheritance.test.cjs`
- `tests/qwen-skills-migration.test.cjs`
- `tests/skill-frontmatter-contract.test.cjs`
- `tests/skill-manifest.test.cjs`

### 스펙/템플릿/명령/스킬 후보

- `docs/ja-JP/superpowers/specs/2026-03-20-multi-project-workspaces-design.md`
- `docs/ko-KR/superpowers/specs/2026-03-20-multi-project-workspaces-design.md`
- `docs/pt-BR/superpowers/specs/2026-03-20-multi-project-workspaces-design.md`
- `docs/skills/discovery-contract.md`
- `docs/superpowers/specs/2026-04-17-ultraplan-phase-design.md`
- `get-shit-done/templates/AI-SPEC.md`
- `get-shit-done/templates/DEBUG.md`
- `get-shit-done/templates/README.md`
- `get-shit-done/templates/SECURITY.md`
- `get-shit-done/templates/UAT.md`
- `get-shit-done/templates/UI-SPEC.md`
- `get-shit-done/templates/VALIDATION.md`
- `get-shit-done/templates/claude-md.md`
- `get-shit-done/templates/codebase/architecture.md`
- `get-shit-done/templates/codebase/concerns.md`
- `get-shit-done/templates/codebase/conventions.md`
- `get-shit-done/templates/codebase/integrations.md`
- `get-shit-done/templates/codebase/stack.md`
- `get-shit-done/templates/codebase/structure.md`
- `get-shit-done/templates/codebase/testing.md`
- `get-shit-done/templates/config.json`
- `get-shit-done/templates/context.md`
- `get-shit-done/templates/continue-here.md`
- `get-shit-done/templates/copilot-instructions.md`
- `get-shit-done/templates/debug-subagent-prompt.md`
- `get-shit-done/templates/dev-preferences.md`
- `get-shit-done/templates/discovery.md`
- `get-shit-done/templates/discussion-log.md`
- `get-shit-done/templates/milestone-archive.md`
- `get-shit-done/templates/milestone.md`
- `get-shit-done/templates/phase-prompt.md`
- `get-shit-done/templates/planner-subagent-prompt.md`
- `get-shit-done/templates/project.md`
- `get-shit-done/templates/requirements.md`
- `get-shit-done/templates/research-project/ARCHITECTURE.md`
- `get-shit-done/templates/research-project/FEATURES.md`
- `get-shit-done/templates/research-project/PITFALLS.md`
- `get-shit-done/templates/research-project/STACK.md`
- `get-shit-done/templates/research-project/SUMMARY.md`
- `get-shit-done/templates/research.md`
- `get-shit-done/templates/retrospective.md`
- `get-shit-done/templates/roadmap.md`
- `get-shit-done/templates/spec.md`
- `get-shit-done/templates/state.md`
- `get-shit-done/templates/summary-complex.md`
- `get-shit-done/templates/summary-minimal.md`
- `get-shit-done/templates/summary-standard.md`
- `get-shit-done/templates/summary.md`
- `get-shit-done/templates/user-profile.md`
- `get-shit-done/templates/user-setup.md`
- `get-shit-done/templates/verification-report.md`
- `get-shit-done/workflows/discuss-phase/templates/checkpoint.json`
- `get-shit-done/workflows/discuss-phase/templates/context.md`
- `get-shit-done/workflows/discuss-phase/templates/discussion-log.md`
- `sdk/prompts/templates/project.md`
- `sdk/prompts/templates/requirements.md`
- `sdk/prompts/templates/research-project/ARCHITECTURE.md`
- `sdk/prompts/templates/research-project/FEATURES.md`
- `sdk/prompts/templates/research-project/PITFALLS.md`
- `sdk/prompts/templates/research-project/STACK.md`
- `sdk/prompts/templates/research-project/SUMMARY.md`
- `sdk/prompts/templates/roadmap.md`
- `sdk/prompts/templates/state.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `sdk/src/assembled-prompts.test.ts`
- `sdk/src/bug-3589-planning-paths-validation.test.ts`
- `sdk/src/bug-3591-gsdtools-runtime-workstream.test.ts`
- `sdk/src/cli-transport.test.ts`
- `sdk/src/cli.test.ts`
- `sdk/src/config.test.ts`
- `sdk/src/configuration/index.test.ts`
- `sdk/src/context-engine.test.ts`
- `sdk/src/context-truncation.test.ts`
- `sdk/src/e2e.integration.test.ts`
- `sdk/src/event-stream.test.ts`
- `sdk/src/golden/golden-policy.test.ts`
- `sdk/src/golden/golden.integration.test.ts`
- `sdk/src/golden/read-only-parity.integration.test.ts`
- `sdk/src/gsd-tools-error.test.ts`
- `sdk/src/gsd-tools.test.ts`
- `sdk/src/gsd-transport-policy.test.ts`
- `sdk/src/gsd-transport.test.ts`
- `sdk/src/init-e2e.integration.test.ts`
- `sdk/src/init-runner.test.ts`
- `sdk/src/lifecycle-e2e.integration.test.ts`
- `sdk/src/logger.test.ts`
- `sdk/src/milestone-runner.test.ts`
- `sdk/src/phase-runner.integration.test.ts`
- `sdk/src/phase-runner.test.ts`
- `sdk/src/plan-parser.test.ts`
- `sdk/src/planning-journal.test.ts`
- `sdk/src/planning-runtime.test.ts`
- `sdk/src/project-root/index.test.ts`
- `sdk/src/prompt-builder.test.ts`
- `sdk/src/prompt-sanitizer.test.ts`
- `sdk/src/query-execution-policy.test.ts`
- `sdk/src/query-failure-classification.test.ts`
- `sdk/src/query-native-direct-adapter.test.ts`
- `sdk/src/query-native-hotpath-adapter.test.ts`
- `sdk/src/query-raw-output-projection.test.ts`
- `sdk/src/query-runtime-bridge.test.ts`
- `sdk/src/query-runtime-seam-coverage.test.ts`
- `sdk/src/query-subprocess-adapter.test.ts`
- `sdk/src/query-tools-error-factory.test.ts`
- `sdk/src/query/agent-failure-classifier.test.ts`
- `sdk/src/query/check-auto-mode.test.ts`
- `sdk/src/query/check-completion.test.ts`
- `sdk/src/query/check-decision-coverage.test.ts`
- `sdk/src/query/check-gates.test.ts`
- `sdk/src/query/check-ship-ready.test.ts`
- `sdk/src/query/check-verification-status.test.ts`
- `sdk/src/query/command-definition.test.ts`
- `sdk/src/query/command-resolution.test.ts`
- `sdk/src/query/command-seam-coverage.test.ts`
- `sdk/src/query/command-topology.test.ts`
- `sdk/src/query/commands-list.test.ts`
- `sdk/src/query/commit.test.ts`
- `sdk/src/query/config-gates.test.ts`
- `sdk/src/query/config-mutation.test.ts`
- `sdk/src/query/config-query.test.ts`
- `sdk/src/query/decisions.test.ts`
- `sdk/src/query/decomposed-handlers.test.ts`
- `sdk/src/query/detect-custom-files.test.ts`
- `sdk/src/query/detect-phase-type.test.ts`
- `sdk/src/query/frontmatter-array.test.ts`
- `sdk/src/query/frontmatter-mutation.test.ts`
- `sdk/src/query/frontmatter.test.ts`
- `sdk/src/query/helpers.test.ts`
- `sdk/src/query/index-thin-seam.test.ts`
- `sdk/src/query/init-complex.test.ts`
- `sdk/src/query/init-workstream-milestone-op.test.ts`
- `sdk/src/query/init.test.ts`
- `sdk/src/query/intel.test.ts`
- `sdk/src/query/mutation-event-decorator.test.ts`
- `sdk/src/query/mutation-event-mapper.test.ts`
- `sdk/src/query/mvp.test.ts`
- `sdk/src/query/normalize-query-command.test.ts`
- `sdk/src/query/phase-lifecycle.test.ts`
- `sdk/src/query/phase-list-queries.test.ts`
- `sdk/src/query/phase-ready.test.ts`
- `sdk/src/query/phase.test.ts`
- `sdk/src/query/pipeline.test.ts`
- `sdk/src/query/plan-scan.test.ts`
- `sdk/src/query/plan-task-structure.test.ts`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/auto-branch.yml`
- `.github/workflows/auto-close-deprecated.yml`
- `.github/workflows/auto-label-issues.yml`
- `.github/workflows/branch-cleanup.yml`
- `.github/workflows/branch-naming.yml`
- `.github/workflows/canary.yml`
- `.github/workflows/changeset-required.yml`
- `.github/workflows/close-draft-prs.yml`
- `.github/workflows/dismiss-unauthorized-pr-approvals.yml`
- `.github/workflows/docs-required.yml`
- `.github/workflows/hotfix.yml`
- `.github/workflows/install-smoke.yml`
- `.github/workflows/pr-gate.yml`
- `.github/workflows/pr-template-format.yml`
- `.github/workflows/release-sdk.yml`
- `.github/workflows/release.yml`
- `.github/workflows/require-issue-link.yml`
- `.github/workflows/security-scan.yml`
- `.github/workflows/stale.yml`
- `.github/workflows/test.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 786 |
| .cjs | 661 |
| .ts | 303 |
| .yml | 28 |
| .json | 19 |
| .mjs | 19 |
| .js | 13 |
| .sh | 10 |
| .svg | 3 |
| .png | 2 |
| .base64scanignore | 1 |
| .clinerules | 1 |
| .gitignore | 1 |
| .jsonl | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `commands/ 내부 책임 분리`
- `agents/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `docs/ja-JP/superpowers/specs/2026-03-20-multi-project-workspaces-design.md 스펙/명령 의미`
- `docs/ko-KR/superpowers/specs/2026-03-20-multi-project-workspaces-design.md 스펙/명령 의미`
- `docs/pt-BR/superpowers/specs/2026-03-20-multi-project-workspaces-design.md 스펙/명령 의미`
- `docs/skills/discovery-contract.md 스펙/명령 의미`
- `docs/superpowers/specs/2026-04-17-ultraplan-phase-design.md 스펙/명령 의미`
- `package.json 실행 스크립트와 패키지 경계`
- `sdk/package.json 실행 스크립트와 패키지 경계`
- `sdk/tsconfig.json 실행 스크립트와 패키지 경계`
- `tsconfig.json 실행 스크립트와 패키지 경계`

