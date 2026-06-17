# Fission-AI/OpenSpec 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/Fission-AI__OpenSpec |
| remote | https://github.com/Fission-AI/OpenSpec |
| HEAD | 1b06fdd (2026-06-03) Version Packages (#1166) |
| branch | main |
| groups | spec-driven-20 |
| files | 842 |
| dirs | 462 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `See it in action`, `Quick Start`, `Docs`, `Community schemas`, `Why OpenSpec?`, `How we compare`, `Updating OpenSpec`, `Usage Notes`, `Contributing`, `Development`, `Other`, `License`

> <p align="center" <a href="https //github.com/Fission AI/OpenSpec" <picture <source srcset="assets/openspec bg.png" <img src="assets/openspec bg.png" alt="OpenSpec logo" </picture </a </p <p align="center" <a href="https //github.com/Fission AI/OpenSpec/actions/workflows/ci.yml" <img alt="CI" src="https //github.com/Fission AI/OpenSpec/actions/workflows/ci.yml/badge.svg" / </a <a href="https //www.npmjs.com/package/@fission ai/openspec" <img alt="npm version" src="https //img.shields.io/npm/v/@fission ai/openspec?style=flat square" / </a <a href="./LICENSE" <img alt="License MIT" src="https //img.shields.io/badge/License MIT blue.svg?style=flat square" / </a <a href="https //discord.gg/YctCnvvshC" <img alt="Discord" src="https //img.shields.io/discord/1411657095639601154?style=flat square&logo=discord&logoColor=white&label=Discord&suffix=%20online" / </a </p <details <summary <strong The

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .actrc | file |
| .changeset | dir |
| .coderabbit.yaml | file |
| .devcontainer | dir |
| .github | dir |
| .gitignore | file |
| AGENTS.md | file |
| assets | dir |
| bin | dir |
| build.js | file |
| CHANGELOG.md | file |
| docs | dir |
| eslint.config.js | file |
| flake.lock | file |
| flake.nix | file |
| LICENSE | file |
| MAINTAINERS.md | file |
| openspec | dir |
| openspec-parallel-merge-plan.md | file |
| package-lock.json | file |
| package.json | file |
| pnpm-lock.yaml | file |
| README_OLD.md | file |
| README.md | file |
| schemas | dir |
| scripts | dir |
| src | dir |
| test | dir |
| tsconfig.json | file |
| vitest.config.ts | file |
| vitest.setup.ts | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| openspec/ | 507 |
| src/ | 179 |
| test/ | 95 |
| (root) | 20 |
| docs/ | 13 |
| schemas/ | 10 |
| scripts/ | 5 |
| .github/ | 4 |
| assets/ | 4 |
| .changeset/ | 2 |
| .devcontainer/ | 2 |
| bin/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 179 | preferred |
| docs/ | 13 | preferred |
| test/ | 95 | preferred |
| scripts/ | 5 | preferred |
| openspec/ | 507 | preferred |
| openspec/changes/ | 398 | large |
| openspec/changes/archive/ | 336 | large |
| src/core/ | 131 | large |
| openspec/initiatives/ | 63 | large |
| openspec/initiatives/context-store-and-initiatives/ | 63 | large |
| test/core/ | 56 | large |
| openspec/specs/ | 40 | large |
| src/commands/ | 31 | large |
| src/core/command-generation/ | 31 | large |
| test/commands/ | 21 | large |
| src/core/completions/ | 17 | large |
| src/core/templates/ | 15 | large |
| openspec/changes/add-global-install-scope/ | 11 | large |
| src/commands/workspace/ | 11 | large |
| schemas/ | 10 | large |
| src/utils/ | 10 | large |
| test/core/completions/ | 10 | large |
| src/commands/workflow/ | 9 | large |
| src/core/workspace/ | 9 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `package.json`
- `pnpm-lock.yaml`
- `tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | @fission-ai/openspec | lint, build, dev, dev:cli, test, test:watch, test:ui, test:coverage, test:postinstall, prepare, prepublishOnly, postinstall, check:pack-version, release, release:ci, changeset | @inquirer/core, @inquirer/prompts, chalk, commander, cross-spawn, fast-glob, ora, posthog-node, yaml, zod |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.changeset/README.md`
- `.devcontainer/README.md`
- `.github/workflows/README.md`
- `README.md`
- `docs/cli.md`
- `docs/commands.md`
- `docs/concepts.md`
- `docs/customization.md`
- `docs/getting-started.md`
- `docs/installation.md`
- `docs/migration-guide.md`
- `docs/multi-language.md`
- `docs/opsx.md`
- `docs/supported-tools.md`
- `docs/workflows.md`
- `docs/workspaces-beta/agent-cli-playbook.md`
- `docs/workspaces-beta/user-guide.md`
- `openspec/changes/archive/2025-08-11-add-complexity-guidelines/specs/openspec-docs/README.md`
- `openspec/changes/archive/2026-01-30-opencode-command-references/README.md`
- `openspec/changes/archive/2026-04-23-add-kimi-cli-skills-only-support/README.md`
- `openspec/changes/workspace-reimplementation-roadmap/README.md`
- `openspec/initiatives/context-store-and-initiatives/README.md`
- `scripts/README.md`

### 에이전트 지침 후보

- `AGENTS.md`
- `openspec/changes/archive/2026-01-06-add-specs-apply-command/specs/specs-sync-skill/spec.md`
- `openspec/changes/archive/2026-01-06-opsx-archive-command/specs/opsx-archive-skill/spec.md`
- `openspec/changes/archive/2026-02-17-add-opsx-onboard-skill/.openspec.yaml`
- `openspec/changes/archive/2026-02-17-add-opsx-onboard-skill/design.md`
- `openspec/changes/archive/2026-02-17-add-opsx-onboard-skill/proposal.md`
- `openspec/changes/archive/2026-02-17-add-opsx-onboard-skill/specs/opsx-onboard-skill/spec.md`
- `openspec/changes/archive/2026-02-17-add-opsx-onboard-skill/tasks.md`
- `openspec/changes/archive/2026-02-17-add-verify-skill/design.md`
- `openspec/changes/archive/2026-02-17-add-verify-skill/proposal.md`
- `openspec/changes/archive/2026-02-17-add-verify-skill/specs/opsx-verify-skill/spec.md`
- `openspec/changes/archive/2026-02-17-add-verify-skill/tasks.md`
- `openspec/changes/archive/2026-02-17-multi-provider-skill-generation/.openspec.yaml`
- `openspec/changes/archive/2026-02-17-multi-provider-skill-generation/design.md`
- `openspec/changes/archive/2026-02-17-multi-provider-skill-generation/proposal.md`
- `openspec/changes/archive/2026-02-17-multi-provider-skill-generation/specs/ai-tool-paths/spec.md`
- `openspec/changes/archive/2026-02-17-multi-provider-skill-generation/specs/cli-artifact-workflow/spec.md`
- `openspec/changes/archive/2026-02-17-multi-provider-skill-generation/specs/command-generation/spec.md`
- `openspec/changes/archive/2026-02-17-multi-provider-skill-generation/tasks.md`
- `openspec/changes/archive/2026-04-23-add-kimi-cli-skills-only-support/.openspec.yaml`
- `openspec/changes/archive/2026-04-23-add-kimi-cli-skills-only-support/README.md`
- `openspec/changes/archive/2026-04-23-add-kimi-cli-skills-only-support/design.md`
- `openspec/changes/archive/2026-04-23-add-kimi-cli-skills-only-support/proposal.md`
- `openspec/changes/archive/2026-04-23-add-kimi-cli-skills-only-support/specs/ai-tool-paths/spec.md`
- `openspec/changes/archive/2026-04-23-add-kimi-cli-skills-only-support/specs/cli-init/spec.md`
- `openspec/changes/archive/2026-04-23-add-kimi-cli-skills-only-support/tasks.md`
- `openspec/changes/simplify-skill-installation/.openspec.yaml`
- `openspec/changes/simplify-skill-installation/design.md`
- `openspec/changes/simplify-skill-installation/proposal.md`
- `openspec/changes/simplify-skill-installation/specs/cli-init/spec.md`
- `openspec/changes/simplify-skill-installation/specs/cli-update/spec.md`
- `openspec/changes/simplify-skill-installation/specs/profiles/spec.md`
- `openspec/changes/simplify-skill-installation/specs/propose-workflow/spec.md`
- `openspec/changes/simplify-skill-installation/tasks.md`
- `openspec/specs/opsx-archive-skill/spec.md`
- `openspec/specs/opsx-onboard-skill/spec.md`
- `openspec/specs/opsx-verify-skill/spec.md`
- `openspec/specs/specs-sync-skill/spec.md`
- `src/core/shared/skill-generation.ts`
- `src/core/templates/skill-templates.ts`
- `src/core/workspace/skills.ts`
- `test/AGENTS.md`
- `test/core/shared/skill-generation.test.ts`
- `test/core/templates/skill-templates-parity.test.ts`
- `test/core/workspace/skills.test.ts`

### 스펙/템플릿/명령/스킬 후보

- `openspec/changes/IMPLEMENTATION_ORDER.md`
- `openspec/changes/add-artifact-regeneration-support/proposal.md`
- `openspec/changes/add-change-stacking-awareness/.openspec.yaml`
- `openspec/changes/add-change-stacking-awareness/proposal.md`
- `openspec/changes/add-change-stacking-awareness/specs/change-creation/spec.md`
- `openspec/changes/add-change-stacking-awareness/specs/change-stacking-workflow/spec.md`
- `openspec/changes/add-change-stacking-awareness/specs/cli-change/spec.md`
- `openspec/changes/add-change-stacking-awareness/specs/openspec-conventions/spec.md`
- `openspec/changes/add-change-stacking-awareness/tasks.md`
- `openspec/changes/add-global-install-scope/.openspec.yaml`
- `openspec/changes/add-global-install-scope/design.md`
- `openspec/changes/add-global-install-scope/proposal.md`
- `openspec/changes/add-global-install-scope/specs/ai-tool-paths/spec.md`
- `openspec/changes/add-global-install-scope/specs/cli-config/spec.md`
- `openspec/changes/add-global-install-scope/specs/cli-init/spec.md`
- `openspec/changes/add-global-install-scope/specs/cli-update/spec.md`
- `openspec/changes/add-global-install-scope/specs/command-generation/spec.md`
- `openspec/changes/add-global-install-scope/specs/global-config/spec.md`
- `openspec/changes/add-global-install-scope/specs/installation-scope/spec.md`
- `openspec/changes/add-global-install-scope/tasks.md`
- `openspec/changes/add-qa-smoke-harness/.openspec.yaml`
- `openspec/changes/add-qa-smoke-harness/proposal.md`
- `openspec/changes/add-qa-smoke-harness/specs/developer-qa-workflow/spec.md`
- `openspec/changes/add-tool-command-surface-capabilities/.openspec.yaml`
- `openspec/changes/add-tool-command-surface-capabilities/proposal.md`
- `openspec/changes/add-tool-command-surface-capabilities/specs/cli-init/spec.md`
- `openspec/changes/add-tool-command-surface-capabilities/specs/cli-update/spec.md`
- `openspec/changes/add-tool-command-surface-capabilities/tasks.md`
- `openspec/changes/archive/2025-01-11-add-update-command/design.md`
- `openspec/changes/archive/2025-01-11-add-update-command/proposal.md`
- `openspec/changes/archive/2025-01-11-add-update-command/specs/cli-update/spec.md`
- `openspec/changes/archive/2025-01-11-add-update-command/tasks.md`
- `openspec/changes/archive/2025-01-13-add-list-command/proposal.md`
- `openspec/changes/archive/2025-01-13-add-list-command/specs/cli-list/spec.md`
- `openspec/changes/archive/2025-01-13-add-list-command/tasks.md`
- `openspec/changes/archive/2025-08-05-initialize-typescript-project/design.md`
- `openspec/changes/archive/2025-08-05-initialize-typescript-project/proposal.md`
- `openspec/changes/archive/2025-08-05-initialize-typescript-project/tasks.md`
- `openspec/changes/archive/2025-08-06-add-init-command/design.md`
- `openspec/changes/archive/2025-08-06-add-init-command/proposal.md`
- `openspec/changes/archive/2025-08-06-add-init-command/specs/cli-init/spec.md`
- `openspec/changes/archive/2025-08-06-add-init-command/tasks.md`
- `openspec/changes/archive/2025-08-06-adopt-future-state-storage/proposal.md`
- `openspec/changes/archive/2025-08-06-adopt-future-state-storage/specs/openspec-conventions/spec.md`
- `openspec/changes/archive/2025-08-06-adopt-future-state-storage/tasks.md`
- `openspec/changes/archive/2025-08-11-add-complexity-guidelines/proposal.md`
- `openspec/changes/archive/2025-08-11-add-complexity-guidelines/specs/openspec-docs/README.md`
- `openspec/changes/archive/2025-08-11-add-complexity-guidelines/tasks.md`
- `openspec/changes/archive/2025-08-13-add-archive-command/proposal.md`
- `openspec/changes/archive/2025-08-13-add-archive-command/specs/cli-archive/spec.md`
- `openspec/changes/archive/2025-08-13-add-archive-command/tasks.md`
- `openspec/changes/archive/2025-08-13-add-diff-command/proposal.md`
- `openspec/changes/archive/2025-08-13-add-diff-command/specs/cli-diff/spec.md`
- `openspec/changes/archive/2025-08-13-add-diff-command/tasks.md`
- `openspec/changes/archive/2025-08-19-add-change-commands/design.md`
- `openspec/changes/archive/2025-08-19-add-change-commands/proposal.md`
- `openspec/changes/archive/2025-08-19-add-change-commands/specs/cli-change/spec.md`
- `openspec/changes/archive/2025-08-19-add-change-commands/specs/cli-list/spec.md`
- `openspec/changes/archive/2025-08-19-add-change-commands/tasks.md`
- `openspec/changes/archive/2025-08-19-add-interactive-show-command/proposal.md`
- `openspec/changes/archive/2025-08-19-add-interactive-show-command/specs/cli-change/spec.md`
- `openspec/changes/archive/2025-08-19-add-interactive-show-command/specs/cli-show/spec.md`
- `openspec/changes/archive/2025-08-19-add-interactive-show-command/specs/cli-spec/spec.md`
- `openspec/changes/archive/2025-08-19-add-interactive-show-command/tasks.md`
- `openspec/changes/archive/2025-08-19-add-skip-specs-archive-option/proposal.md`
- `openspec/changes/archive/2025-08-19-add-skip-specs-archive-option/specs/cli-archive/spec.md`
- `openspec/changes/archive/2025-08-19-add-skip-specs-archive-option/tasks.md`
- `openspec/changes/archive/2025-08-19-add-spec-commands/design.md`
- `openspec/changes/archive/2025-08-19-add-spec-commands/proposal.md`
- `openspec/changes/archive/2025-08-19-add-spec-commands/specs/cli-spec/spec.md`
- `openspec/changes/archive/2025-08-19-add-spec-commands/tasks.md`
- `openspec/changes/archive/2025-08-19-add-zod-validation/design.md`
- `openspec/changes/archive/2025-08-19-add-zod-validation/proposal.md`
- `openspec/changes/archive/2025-08-19-add-zod-validation/specs/cli-archive/spec.md`
- `openspec/changes/archive/2025-08-19-add-zod-validation/specs/cli-diff/spec.md`
- `openspec/changes/archive/2025-08-19-add-zod-validation/tasks.md`
- `openspec/changes/archive/2025-08-19-adopt-delta-based-changes/proposal.md`
- `openspec/changes/archive/2025-08-19-adopt-delta-based-changes/specs/cli-archive/spec.md`
- `openspec/changes/archive/2025-08-19-adopt-delta-based-changes/specs/cli-diff/spec.md`
- `openspec/changes/archive/2025-08-19-adopt-delta-based-changes/specs/openspec-conventions/spec.md`
- `openspec/changes/archive/2025-08-19-adopt-delta-based-changes/tasks.md`
- `openspec/changes/archive/2025-08-19-adopt-verb-noun-cli-structure/design.md`
- `openspec/changes/archive/2025-08-19-adopt-verb-noun-cli-structure/proposal.md`
- `openspec/changes/archive/2025-08-19-adopt-verb-noun-cli-structure/specs/cli-list/spec.md`
- `openspec/changes/archive/2025-08-19-adopt-verb-noun-cli-structure/specs/openspec-conventions/spec.md`
- `openspec/changes/archive/2025-08-19-adopt-verb-noun-cli-structure/tasks.md`
- `openspec/changes/archive/2025-08-19-bulk-validation-interactive-selection/proposal.md`
- `openspec/changes/archive/2025-08-19-bulk-validation-interactive-selection/specs/cli-change/spec.md`
- `openspec/changes/archive/2025-08-19-bulk-validation-interactive-selection/specs/cli-spec/spec.md`
- `openspec/changes/archive/2025-08-19-bulk-validation-interactive-selection/specs/cli-validate/spec.md`
- `openspec/changes/archive/2025-08-19-bulk-validation-interactive-selection/tasks.md`
- `openspec/changes/archive/2025-08-19-fix-update-tool-selection/proposal.md`
- `openspec/changes/archive/2025-08-19-fix-update-tool-selection/specs/cli-update/spec.md`
- `openspec/changes/archive/2025-08-19-fix-update-tool-selection/tasks.md`
- `openspec/changes/archive/2025-08-19-improve-validate-error-messages/proposal.md`
- `openspec/changes/archive/2025-08-19-improve-validate-error-messages/specs/cli-validate/spec.md`
- `openspec/changes/archive/2025-08-19-improve-validate-error-messages/tasks.md`
- `openspec/changes/archive/2025-08-19-structured-spec-format/proposal.md`
- `openspec/changes/archive/2025-08-19-structured-spec-format/specs/openspec-conventions/spec.md`
- `openspec/changes/archive/2025-08-19-structured-spec-format/tasks.md`
- ... 40 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `test/AGENTS.md`
- `test/cli-e2e/basic.test.ts`
- `test/commands/artifact-workflow.test.ts`
- `test/commands/change-initiative-link.test.ts`
- `test/commands/change.interactive-show.test.ts`
- `test/commands/change.interactive-validate.test.ts`
- `test/commands/completion.test.ts`
- `test/commands/config-profile.test.ts`
- `test/commands/config.test.ts`
- `test/commands/context-store.test.ts`
- `test/commands/feedback.test.ts`
- `test/commands/initiative.test.ts`
- `test/commands/schema.test.ts`
- `test/commands/show.test.ts`
- `test/commands/spec.interactive-show.test.ts`
- `test/commands/spec.interactive-validate.test.ts`
- `test/commands/spec.test.ts`
- `test/commands/validate.enriched-output.test.ts`
- `test/commands/validate.test.ts`
- `test/commands/workspace-initiative-open.test.ts`
- `test/commands/workspace-open.test.ts`
- `test/commands/workspace.interactive.test.ts`
- `test/commands/workspace.test.ts`
- `test/core/archive.test.ts`
- `test/core/artifact-graph/graph.test.ts`
- `test/core/artifact-graph/instruction-loader.test.ts`
- `test/core/artifact-graph/outputs.test.ts`
- `test/core/artifact-graph/resolver.test.ts`
- `test/core/artifact-graph/schema.test.ts`
- `test/core/artifact-graph/state.test.ts`
- `test/core/artifact-graph/workflow.integration.test.ts`
- `test/core/available-tools.test.ts`
- `test/core/collections/initiatives/operations.test.ts`
- `test/core/collections/initiatives/resolution.test.ts`
- `test/core/collections/initiatives/schema.test.ts`
- `test/core/collections/initiatives/templates.test.ts`
- `test/core/collections/runtime.test.ts`
- `test/core/command-generation/adapters.test.ts`
- `test/core/command-generation/generator.test.ts`
- `test/core/command-generation/registry.test.ts`
- `test/core/command-generation/types.test.ts`
- `test/core/commands/change-command.list.test.ts`
- `test/core/commands/change-command.show-validate.test.ts`
- `test/core/completions/command-registry.test.ts`
- `test/core/completions/completion-provider.test.ts`
- `test/core/completions/generators/bash-generator.test.ts`
- `test/core/completions/generators/fish-generator.test.ts`
- `test/core/completions/generators/powershell-generator.test.ts`
- `test/core/completions/generators/zsh-generator.test.ts`
- `test/core/completions/installers/bash-installer.test.ts`
- `test/core/completions/installers/fish-installer.test.ts`
- `test/core/completions/installers/powershell-installer.test.ts`
- `test/core/completions/installers/zsh-installer.test.ts`
- `test/core/config-schema.test.ts`
- `test/core/context-store/foundation.test.ts`
- `test/core/context-store/registry.test.ts`
- `test/core/converters/json-converter.test.ts`
- `test/core/global-config.test.ts`
- `test/core/init.test.ts`
- `test/core/legacy-cleanup.test.ts`
- `test/core/list.test.ts`
- `test/core/migration.test.ts`
- `test/core/parsers/change-parser.test.ts`
- `test/core/parsers/markdown-parser.test.ts`
- `test/core/parsers/requirement-blocks.test.ts`
- `test/core/planning-home.test.ts`
- `test/core/profile-sync-drift.test.ts`
- `test/core/profiles.test.ts`
- `test/core/project-config.test.ts`
- `test/core/shared/skill-generation.test.ts`
- `test/core/shared/tool-detection.test.ts`
- `test/core/templates/skill-templates-parity.test.ts`
- `test/core/update.test.ts`
- `test/core/validation.enriched-messages.test.ts`
- `test/core/validation.test.ts`
- `test/core/view.test.ts`
- `test/core/workspace/foundation.test.ts`
- `test/core/workspace/legacy-state.test.ts`
- `test/core/workspace/skills.test.ts`
- `test/fixtures/tmp-init/openspec/changes/c1/proposal.md`
- ... 15 more

### CI/Docker 후보

- `.github/workflows/README.md`
- `.github/workflows/ci.yml`
- `.github/workflows/release-prepare.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 517 |
| .ts | 272 |
| .yaml | 29 |
| .json | 5 |
| .js | 4 |
| .png | 2 |
| .sh | 2 |
| .svg | 2 |
| .yml | 2 |
| .actrc | 1 |
| .gitignore | 1 |
| .lock | 1 |
| .mjs | 1 |
| .nix | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `test/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `openspec/ 내부 책임 분리`
- `openspec/changes/IMPLEMENTATION_ORDER.md 스펙/명령 의미`
- `openspec/changes/add-artifact-regeneration-support/proposal.md 스펙/명령 의미`
- `openspec/changes/add-change-stacking-awareness/.openspec.yaml 스펙/명령 의미`
- `openspec/changes/add-change-stacking-awareness/proposal.md 스펙/명령 의미`
- `openspec/changes/add-change-stacking-awareness/specs/change-creation/spec.md 스펙/명령 의미`
- `package.json 실행 스크립트와 패키지 경계`
- `pnpm-lock.yaml 실행 스크립트와 패키지 경계`
- `tsconfig.json 실행 스크립트와 패키지 경계`

