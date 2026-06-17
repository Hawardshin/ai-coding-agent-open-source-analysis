# codervisor/leanspec 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/codervisor__leanspec |
| remote | https://github.com/codervisor/leanspec |
| HEAD | ee122d6 (2026-05-20) chore(skills): retire draft/planned/in-progress spec status labels (#313) |
| branch | main |
| groups | spec-driven-20 |
| files | 1393 |
| dirs | 506 |
| stack | Node/TypeScript/JavaScript, Rust |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `LeanSpec`, `Quick Start`, `Markdown specs (default — works out of the box)`, `Or try with a tutorial project`, `leanspec.provider.yaml`, `Option 1: Markdown files (default, zero config)`, `Option 2: GitHub Issues as specs`, `provider: github`, `owner: myuser`, `repo: myproject`, `Option 3: Azure DevOps Work Items as specs`, `provider: ado`, `organization: mycompany`, `project: myproject`, `Why LeanSpec?`, `AI Integration`, `Spec Providers`, `Agent Skills`

> LeanSpec <p align="center" <img src="https //github.com/codervisor/lean spec docs/blob/main/static/img/logo with bg.svg" alt="LeanSpec Logo" width="120" height="120" </p <p align="center" <a href="https //github.com/codervisor/leanspec/actions/workflows/ci.yml" <img src="https //img.shields.io/github/actions/workflow/status/codervisor/leanspec/ci.yml?branch=main" alt="CI Status" </a <a href="https //www.npmjs.com/package/@leanspec/cli" <img src="https //img.shields.io/npm/v/@leanspec/cli.svg" alt="npm version" </a <a href="https //www.npmjs.com/package/@leanspec/cli" <img src="https //img.shields.io/npm/dm/@leanspec/cli.svg" alt="npm downloads" </a <a href="LICENSE" <img src="https //img.shields.io/badge/license MIT blue.svg" alt="License" </a </p <p align="center" <a href="https //www.lean spec.dev" <strong Documentation</strong </a • <a href="https //www.lean spec.dev/zh Hans/docs/guid

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .claude | dir |
| .gemini | dir |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .husky | dir |
| .lean-spec | dir |
| .npmignore | file |
| .prettierignore | file |
| .prettierrc | file |
| .vscode | dir |
| AGENTS.md | file |
| bin | dir |
| CHANGELOG.md | file |
| CLAUDE.md | file |
| CONTRIBUTING.md | file |
| deploy | dir |
| docker | dir |
| docs | dir |
| docs-site | dir |
| favicon.ico | file |
| hooks | dir |
| lean-spec.code-workspace | file |
| LICENSE | file |
| opencode.json | file |
| package.json | file |
| packages | dir |
| pnpm-lock.yaml | file |
| pnpm-workspace.yaml | file |
| railway.json | file |
| README.md | file |
| rust | dir |
| schemas | dir |
| scripts | dir |
| skills | dir |
| skills-lock.json | file |
| specs | dir |
| tsconfig.json | file |
| turbo.json | file |
| vercel.json | file |
| vitest.config.ts | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| packages/ | 534 |
| specs/ | 389 |
| rust/ | 224 |
| docs-site/ | 157 |
| (root) | 23 |
| scripts/ | 19 |
| .agents/ | 14 |
| skills/ | 6 |
| deploy/ | 5 |
| .github/ | 4 |
| .claude/ | 3 |
| docker/ | 3 |
| docs/ | 3 |
| .husky/ | 2 |
| .lean-spec/ | 2 |
| bin/ | 2 |
| .vscode/ | 1 |
| hooks/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| packages/ | 534 | preferred |
| docs/ | 3 | preferred |
| skills/ | 6 | preferred |
| scripts/ | 19 | preferred |
| specs/ | 389 | preferred |
| packages/ui/ | 476 | large |
| packages/ui/src/ | 440 | large |
| rust/ | 224 | large |
| docs-site/ | 157 | large |
| rust/leanspec-cli/ | 97 | large |
| rust/leanspec-cli/src/ | 61 | large |
| docs-site/i18n/ | 60 | large |
| docs-site/i18n/zh-Hans/ | 60 | large |
| rust/leanspec-core/ | 57 | large |
| rust/leanspec-core/src/ | 52 | large |
| packages/cli/ | 51 | large |
| packages/cli/templates/ | 45 | large |
| rust/leanspec-http/ | 44 | large |
| docs-site/docs/ | 42 | large |
| rust/leanspec-cli/tests/ | 31 | large |
| rust/leanspec-http/src/ | 29 | large |
| docs-site/static/ | 28 | large |
| docs-site/docs/guide/ | 24 | large |
| docs-site/static/img/ | 23 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `deploy/examples/docker-compose.yml`
- `docker/Dockerfile`
- `docs-site/package.json`
- `docs-site/pnpm-lock.yaml`
- `docs-site/pnpm-workspace.yaml`
- `docs-site/tsconfig.json`
- `package.json`
- `packages/cli/package.json`
- `packages/cli/templates/examples/api-refactor/package.json`
- `packages/cli/templates/examples/dark-theme/package.json`
- `packages/cli/templates/examples/dashboard-widgets/package.json`
- `packages/http-server/package.json`
- `packages/mcp/package.json`
- `packages/ui/package.json`
- `packages/ui/tsconfig.json`
- `packages/ui/vite.config.ts`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `rust/Cargo.toml`
- `rust/leanspec-cli/Cargo.toml`
- `rust/leanspec-core/Cargo.toml`
- `rust/leanspec-http/Cargo.toml`
- `rust/leanspec-mcp/Cargo.toml`
- `tsconfig.json`
- `turbo.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| docs-site/package.json | docs-site | docusaurus, start, build, swizzle, deploy, clear, serve, write-translations, write-heading-ids, typecheck, validate:mdx, fix:mdx, fix:mdx:dry-run | @docusaurus/core, @docusaurus/preset-classic, @docusaurus/theme-mermaid, @mdx-js/react, @vercel/analytics, clsx, prism-react-renderer, react, react-dom, react-icons |
| package.json | leanspec | prepare, dev, dev:watch, dev:web, build, build:rust, build:rust:release, test, test:rust, test:watch, test:ui, test:coverage, typecheck, lint, lint:rust, check:rust |  |
| packages/cli/package.json | @leanspec/cli | typecheck |  |
| packages/cli/templates/examples/api-refactor/package.json | api-refactor-demo | start, dev | node-fetch |
| packages/cli/templates/examples/dark-theme/package.json | dark-theme-demo | start, dev | express |
| packages/cli/templates/examples/dashboard-widgets/package.json | dashboard-widgets-demo | dev, build, preview | react, react-dom |
| packages/http-server/package.json | @leanspec/http-server | dev, typecheck |  |
| packages/mcp/package.json | @leanspec/mcp | typecheck |  |
| packages/ui/package.json | @leanspec/ui | dev, build, lint, preview, typecheck, test, test:watch | @ai-sdk/react, @dagrejs/dagre, @exuanbo/file-icons-js, @leanspec/http-server, @radix-ui/react-accordion, @radix-ui/react-avatar, @radix-ui/react-collapsible, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-hover-card, @radix-ui/react-popover, @radix-ui/react-progress, @radix-ui/react-scroll-area, @radix-ui/react-select |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| rust/Cargo.toml |  | true |    "leanspec-core",   "leanspec-cli",   "leanspec-http",   "leanspec-mcp",  |
| rust/leanspec-cli/Cargo.toml | leanspec-cli | false |  |
| rust/leanspec-core/Cargo.toml | leanspec-core | false |  |
| rust/leanspec-http/Cargo.toml | leanspec-http | false |  |
| rust/leanspec-mcp/Cargo.toml | leanspec-mcp | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `deploy/README.md`
- `docker/README.md`
- `docs-site/README.md`
- `docs-site/docs/advanced/ai-agent-memory.mdx`
- `docs-site/docs/advanced/ai-assisted-spec-writing.mdx`
- `docs-site/docs/advanced/context-engineering.mdx`
- `docs-site/docs/advanced/first-principles.mdx`
- `docs-site/docs/advanced/limits-and-tradeoffs.mdx`
- `docs-site/docs/advanced/philosophy.mdx`
- `docs-site/docs/faq.mdx`
- `docs-site/docs/guide/development.mdx`
- `docs-site/docs/guide/getting-started.mdx`
- `docs-site/docs/guide/index.mdx`
- `docs-site/docs/guide/migration.mdx`
- `docs-site/docs/guide/terminology/built-in-metadata.mdx`
- `docs-site/docs/guide/terminology/sdd-workflow.mdx`
- `docs-site/docs/guide/terminology/spec.mdx`
- `docs-site/docs/guide/understanding-leanspec.mdx`
- `docs-site/docs/guide/usage/advanced-features/agent-configuration.mdx`
- `docs-site/docs/guide/usage/advanced-features/custom-fields.mdx`
- `docs-site/docs/guide/usage/advanced-features/frontmatter.mdx`
- `docs-site/docs/guide/usage/advanced-features/templates.mdx`
- `docs-site/docs/guide/usage/advanced-features/variables.mdx`
- `docs-site/docs/guide/usage/ai-coding-workflow.mdx`
- `docs-site/docs/guide/usage/cli/creating-managing.mdx`
- `docs-site/docs/guide/usage/cli/finding-specs.mdx`
- `docs-site/docs/guide/usage/cli/overview.mdx`
- `docs-site/docs/guide/usage/cli/project-management.mdx`
- `docs-site/docs/guide/usage/cli/validation.mdx`
- `docs-site/docs/guide/usage/mcp-integration.mdx`
- `docs-site/docs/guide/usage/overview.mdx`
- `docs-site/docs/guide/usage/spec-structure.mdx`
- `docs-site/docs/guide/visual-mode.mdx`
- `docs-site/docs/guide/why-leanspec.mdx`
- `docs-site/docs/reference/cli.mdx`
- `docs-site/docs/reference/config.mdx`
- `docs-site/docs/reference/frontmatter.mdx`
- `docs-site/docs/reference/mcp-server.mdx`
- `docs-site/docs/reference/ui-package.mdx`
- `docs-site/docs/roadmap.mdx`
- `docs-site/docs/tutorials/first-spec-with-ai.mdx`
- `docs-site/docs/tutorials/large-project-management.mdx`
- `docs-site/docs/tutorials/managing-multiple-features.mdx`
- `docs-site/docs/tutorials/refactoring-with-specs.mdx`
- `docs-site/docs/tutorials/sdd-without-toolkit.mdx`
- `docs/cloud-sync-bridge.md`
- `docs/i18n/README.md`
- `docs/vision/codervisor-platform.md`
- ... 30 more

### 에이전트 지침 후보

- `.agents/skills/leanspec-dev-process/SKILL.md`
- `.agents/skills/leanspec-development/SKILL.md`
- `.agents/skills/leanspec-development/references/CI-COMMANDS.md`
- `.agents/skills/leanspec-development/references/CI-TROUBLESHOOTING.md`
- `.agents/skills/leanspec-development/references/CI-WORKFLOWS.md`
- `.agents/skills/leanspec-development/references/DEV-PUBLISHING.md`
- `.agents/skills/leanspec-development/references/I18N.md`
- `.agents/skills/leanspec-development/references/NPM-DISTRIBUTION.md`
- `.agents/skills/leanspec-development/references/PUBLISHING.md`
- `.agents/skills/leanspec-development/references/RULES.md`
- `.agents/skills/leanspec-development/references/STRUCTURE.md`
- `.agents/skills/leanspec-development/references/runners-catalog.md`
- `.agents/skills/leanspec-pr-lifecycle/SKILL.md`
- `.agents/skills/leanspec-pre-push/SKILL.md`
- `.claude/hooks/session-start.sh`
- `.claude/settings.json`
- `.claude/skills/watch-ci/SKILL.md`
- `.vscode/mcp.json`
- `AGENTS.md`
- `CLAUDE.md`
- `docs-site/AGENTS.md`
- `docs-site/docs/guide/usage/mcp-integration.mdx`
- `docs-site/docs/reference/mcp-server.mdx`
- `docs-site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guide/usage/mcp-integration.mdx`
- `docs-site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/mcp-server.mdx`
- `packages/cli/templates/detailed/AGENTS.md`
- `packages/cli/templates/standard/AGENTS.md`
- `packages/mcp/bin/leanspec-mcp.js`
- `packages/mcp/package.json`
- `rust/leanspec-cli/templates/AGENTS-with-skill.md`
- `rust/leanspec-cli/templates/AGENTS.md`
- `rust/leanspec-mcp/Cargo.toml`
- `rust/leanspec-mcp/src/error.rs`
- `rust/leanspec-mcp/src/lib.rs`
- `rust/leanspec-mcp/src/main.rs`
- `rust/leanspec-mcp/src/protocol.rs`
- `rust/leanspec-mcp/src/schema_to_input.rs`
- `rust/leanspec-mcp/src/state.rs`
- `rust/leanspec-mcp/src/tools/create_spec.rs`
- `rust/leanspec-mcp/src/tools/doc.rs`
- `rust/leanspec-mcp/src/tools/get_capabilities.rs`
- `rust/leanspec-mcp/src/tools/get_schema.rs`
- `rust/leanspec-mcp/src/tools/get_spec.rs`
- `rust/leanspec-mcp/src/tools/list_specs.rs`
- `rust/leanspec-mcp/src/tools/markdown_only.rs`
- `rust/leanspec-mcp/src/tools/mod.rs`
- `rust/leanspec-mcp/src/tools/reload_schema.rs`
- `rust/leanspec-mcp/src/tools/search_specs.rs`
- `rust/leanspec-mcp/src/tools/update_spec.rs`
- `rust/leanspec-mcp/tests/integration.rs`
- `rust/npm-dist/mcp-wrapper.js`
- `skills-lock.json`
- `skills/leanspec/SKILL.md`
- `skills/leanspec/references/adapters.md`
- `skills/leanspec/references/best-practices.md`
- `skills/leanspec/references/commands.md`
- `skills/leanspec/references/examples.md`
- `skills/leanspec/references/workflow.md`
- `specs/033-mcp-server/README.md`
- `specs/038-mcp-frontmatter-bug-fix/README.md`
- `specs/042-mcp-error-handling/README.md`
- `specs/070-mcp-token-counting-tool/README.md`
- `specs/080-mcp-server-modular-architecture/README.md`
- `specs/099-enhanced-dependency-commands-cli-mcp/README.md`
- `specs/102-mcp-wrapper-package/README.md`
- `specs/111-mcp-prompts-refinement/README.md`
- `specs/121-mcp-first-agent-experience/README.md`
- `specs/129-mcp-link-tool/README.md`
- `specs/145-mcp-config-auto-setup/README.md`
- `specs/170-cli-mcp-core-rust-migration-evaluation/README.md`
- `specs/172-rust-cli-mcp-npm-distribution/README.md`
- `specs/176-rust-mcp-server-test-suite/README.md`
- `specs/178-rust-mcp-cli-template-loading/README.md`
- `specs/196-mcp-create-content-field-documentation/README.md`
- `specs/211-leanspec-as-anthropic-skill/README.md`
- `specs/226-agent-skills-init-integration/README.md`
- `specs/280-skill-auto-update/README.md`
- `specs/290-skills-repository-migration/README.md`
- `specs/309-init-skill-agent-alignment/README.md`
- `specs/335-sdd-skill-command-alignment/README.md`
- ... 1 more

### 스펙/템플릿/명령/스킬 후보

- `.agents/skills/leanspec-dev-process/SKILL.md`
- `.agents/skills/leanspec-development/SKILL.md`
- `.agents/skills/leanspec-development/references/CI-COMMANDS.md`
- `.agents/skills/leanspec-development/references/CI-TROUBLESHOOTING.md`
- `.agents/skills/leanspec-development/references/CI-WORKFLOWS.md`
- `.agents/skills/leanspec-development/references/DEV-PUBLISHING.md`
- `.agents/skills/leanspec-development/references/I18N.md`
- `.agents/skills/leanspec-development/references/NPM-DISTRIBUTION.md`
- `.agents/skills/leanspec-development/references/PUBLISHING.md`
- `.agents/skills/leanspec-development/references/RULES.md`
- `.agents/skills/leanspec-development/references/STRUCTURE.md`
- `.agents/skills/leanspec-development/references/runners-catalog.md`
- `.agents/skills/leanspec-pr-lifecycle/SKILL.md`
- `.agents/skills/leanspec-pre-push/SKILL.md`
- `.claude/skills/watch-ci/SKILL.md`
- `.lean-spec/templates/spec-template.md`
- `packages/cli/templates/detailed/AGENTS-minimal.md`
- `packages/cli/templates/detailed/AGENTS.md`
- `packages/cli/templates/detailed/README.md`
- `packages/cli/templates/detailed/config.json`
- `packages/cli/templates/detailed/files/DESIGN.md`
- `packages/cli/templates/detailed/files/PLAN.md`
- `packages/cli/templates/detailed/files/README.md`
- `packages/cli/templates/detailed/files/TEST.md`
- `packages/cli/templates/examples/api-refactor/.gitignore`
- `packages/cli/templates/examples/api-refactor/README.md`
- `packages/cli/templates/examples/api-refactor/package.json`
- `packages/cli/templates/examples/api-refactor/src/app.js`
- `packages/cli/templates/examples/api-refactor/src/services/currencyService.js`
- `packages/cli/templates/examples/api-refactor/src/services/timezoneService.js`
- `packages/cli/templates/examples/api-refactor/src/services/weatherService.js`
- `packages/cli/templates/examples/dark-theme/.gitignore`
- `packages/cli/templates/examples/dark-theme/README.md`
- `packages/cli/templates/examples/dark-theme/package.json`
- `packages/cli/templates/examples/dark-theme/src/public/app.js`
- `packages/cli/templates/examples/dark-theme/src/public/index.html`
- `packages/cli/templates/examples/dark-theme/src/public/style.css`
- `packages/cli/templates/examples/dark-theme/src/server.js`
- `packages/cli/templates/examples/dashboard-widgets/.gitignore`
- `packages/cli/templates/examples/dashboard-widgets/README.md`
- `packages/cli/templates/examples/dashboard-widgets/index.html`
- `packages/cli/templates/examples/dashboard-widgets/package.json`
- `packages/cli/templates/examples/dashboard-widgets/src/App.css`
- `packages/cli/templates/examples/dashboard-widgets/src/App.jsx`
- `packages/cli/templates/examples/dashboard-widgets/src/components/Dashboard.css`
- `packages/cli/templates/examples/dashboard-widgets/src/components/Dashboard.jsx`
- `packages/cli/templates/examples/dashboard-widgets/src/components/WidgetWrapper.css`
- `packages/cli/templates/examples/dashboard-widgets/src/components/WidgetWrapper.jsx`
- `packages/cli/templates/examples/dashboard-widgets/src/components/widgets/ChartWidget.css`
- `packages/cli/templates/examples/dashboard-widgets/src/components/widgets/ChartWidget.jsx`
- `packages/cli/templates/examples/dashboard-widgets/src/components/widgets/StatsWidget.css`
- `packages/cli/templates/examples/dashboard-widgets/src/components/widgets/StatsWidget.jsx`
- `packages/cli/templates/examples/dashboard-widgets/src/index.css`
- `packages/cli/templates/examples/dashboard-widgets/src/main.jsx`
- `packages/cli/templates/examples/dashboard-widgets/src/utils/mockData.js`
- `packages/cli/templates/examples/dashboard-widgets/vite.config.js`
- `packages/cli/templates/standard/AGENTS-minimal.md`
- `packages/cli/templates/standard/AGENTS.md`
- `packages/cli/templates/standard/README.md`
- `packages/cli/templates/standard/config.json`
- `packages/cli/templates/standard/files/README.md`
- `packages/ui/src/components/specs/board-view.tsx`
- `packages/ui/src/components/specs/hierarchy-list.tsx`
- `packages/ui/src/components/specs/list-view.tsx`
- `packages/ui/src/components/specs/specs-filters.tsx`
- `packages/ui/src/components/specs/token-details-dialog.tsx`
- `packages/ui/src/components/specs/validation-dialog.tsx`
- `rust/leanspec-cli/src/commands/analyze.rs`
- `rust/leanspec-cli/src/commands/archive.rs`
- `rust/leanspec-cli/src/commands/backfill.rs`
- `rust/leanspec-cli/src/commands/board.rs`
- `rust/leanspec-cli/src/commands/capabilities.rs`
- `rust/leanspec-cli/src/commands/check.rs`
- `rust/leanspec-cli/src/commands/children.rs`
- `rust/leanspec-cli/src/commands/compact.rs`
- `rust/leanspec-cli/src/commands/create.rs`
- `rust/leanspec-cli/src/commands/crystallize/generator.rs`
- `rust/leanspec-cli/src/commands/crystallize/mod.rs`
- `rust/leanspec-cli/src/commands/crystallize/scanners/arch.rs`
- `rust/leanspec-cli/src/commands/crystallize/scanners/git.rs`
- `rust/leanspec-cli/src/commands/crystallize/scanners/mod.rs`
- `rust/leanspec-cli/src/commands/crystallize/scanners/naming.rs`
- `rust/leanspec-cli/src/commands/crystallize/scanners/specs.rs`
- `rust/leanspec-cli/src/commands/crystallize/scanners/tests.rs`
- `rust/leanspec-cli/src/commands/crystallize/signals.rs`
- `rust/leanspec-cli/src/commands/crystallize/writer.rs`
- `rust/leanspec-cli/src/commands/deps.rs`
- `rust/leanspec-cli/src/commands/examples.rs`
- `rust/leanspec-cli/src/commands/files.rs`
- `rust/leanspec-cli/src/commands/gantt.rs`
- `rust/leanspec-cli/src/commands/git_repo.rs`
- `rust/leanspec-cli/src/commands/init.rs`
- `rust/leanspec-cli/src/commands/list.rs`
- `rust/leanspec-cli/src/commands/migrate.rs`
- `rust/leanspec-cli/src/commands/mod.rs`
- `rust/leanspec-cli/src/commands/open.rs`
- `rust/leanspec-cli/src/commands/package_manager.rs`
- `rust/leanspec-cli/src/commands/rel.rs`
- `rust/leanspec-cli/src/commands/schema.rs`
- `rust/leanspec-cli/src/commands/search.rs`
- ... 40 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `packages/ui/src/hooks/use-media-query.test.ts`
- `packages/ui/src/hooks/useKeyboardShortcuts.test.ts`
- `packages/ui/src/hooks/useProjectQuery.test.tsx`
- `packages/ui/src/hooks/useSessionsQuery.test.tsx`
- `packages/ui/src/hooks/useSpecsQuery.test.tsx`
- `packages/ui/src/lib/__tests__/color-utils.test.ts`
- `packages/ui/src/lib/__tests__/date-utils.test.ts`
- `packages/ui/src/lib/__tests__/session-stream.test.ts`
- `packages/ui/src/lib/__tests__/utils.test.ts`
- `packages/ui/src/lib/i18n.test.ts`
- `packages/ui/src/stores/theme.test.tsx`
- `packages/ui/src/test/setup.ts`
- `rust/leanspec-cli/tests/archive.rs`
- `rust/leanspec-cli/tests/board.rs`
- `rust/leanspec-cli/tests/common/mod.rs`
- `rust/leanspec-cli/tests/create.rs`
- `rust/leanspec-cli/tests/create_template.rs`
- `rust/leanspec-cli/tests/crystallize.rs`
- `rust/leanspec-cli/tests/fixtures/tui-sample/001-draft-spec/README.md`
- `rust/leanspec-cli/tests/fixtures/tui-sample/002-planned-spec/README.md`
- `rust/leanspec-cli/tests/fixtures/tui-sample/003-in-progress-spec/README.md`
- `rust/leanspec-cli/tests/fixtures/tui-sample/004-complete-spec/README.md`
- `rust/leanspec-cli/tests/fixtures/tui-sample/005-archived-spec/README.md`
- `rust/leanspec-cli/tests/fixtures/tui-sample/006-tui-feature/README.md`
- `rust/leanspec-cli/tests/fixtures/tui-sample/007-tui-testing/README.md`
- `rust/leanspec-cli/tests/fixtures/tui-sample/008-backend-api/README.md`
- `rust/leanspec-cli/tests/fixtures/tui-sample/009-database/README.md`
- `rust/leanspec-cli/tests/fixtures/tui-sample/010-auth/README.md`
- `rust/leanspec-cli/tests/init.rs`
- `rust/leanspec-cli/tests/list.rs`
- `rust/leanspec-cli/tests/markdown_only_guards.rs`
- `rust/leanspec-cli/tests/migrate.rs`
- `rust/leanspec-cli/tests/regression.rs`
- `rust/leanspec-cli/tests/search.rs`
- `rust/leanspec-cli/tests/session.rs`
- `rust/leanspec-cli/tests/spec_lifecycle.rs`
- `rust/leanspec-cli/tests/stats.rs`
- `rust/leanspec-cli/tests/tokens.rs`
- `rust/leanspec-cli/tests/tui.rs`
- `rust/leanspec-cli/tests/tui_e2e.rs`
- `rust/leanspec-cli/tests/update.rs`
- `rust/leanspec-cli/tests/validate.rs`
- `rust/leanspec-cli/tests/view.rs`
- `rust/leanspec-http/tests/common/fixtures.rs`
- `rust/leanspec-http/tests/common/helpers.rs`
- `rust/leanspec-http/tests/common/mod.rs`
- `rust/leanspec-http/tests/deps_test.rs`
- `rust/leanspec-http/tests/error_handling_test.rs`
- `rust/leanspec-http/tests/export_bindings.rs`
- `rust/leanspec-http/tests/projects_test.rs`
- `rust/leanspec-http/tests/scenarios_test.rs`
- `rust/leanspec-http/tests/schema_test.rs`
- `rust/leanspec-http/tests/search_test.rs`
- `rust/leanspec-http/tests/server_integration_test.rs`
- `rust/leanspec-http/tests/specs_test.rs`
- `rust/leanspec-http/tests/stats_test.rs`
- `rust/leanspec-http/tests/validate_test.rs`
- `rust/leanspec-mcp/tests/integration.rs`

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `.github/workflows/copilot-setup-steps.yml`
- `.github/workflows/docker.yml`
- `.github/workflows/publish.yml`
- `deploy/examples/docker-compose.yml`
- `docker/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 458 |
| .tsx | 262 |
| .rs | 195 |
| .ts | 191 |
| .mdx | 99 |
| .json | 41 |
| .svg | 25 |
| .js | 23 |
| .png | 21 |
| .css | 13 |
| .yaml | 9 |
| .toml | 7 |
| .yml | 7 |
| .gitignore | 6 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `packages/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `skills/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `specs/ 내부 책임 분리`
- `.agents/skills/leanspec-dev-process/SKILL.md 스펙/명령 의미`
- `.agents/skills/leanspec-development/SKILL.md 스펙/명령 의미`
- `.agents/skills/leanspec-development/references/CI-COMMANDS.md 스펙/명령 의미`
- `.agents/skills/leanspec-development/references/CI-TROUBLESHOOTING.md 스펙/명령 의미`
- `.agents/skills/leanspec-development/references/CI-WORKFLOWS.md 스펙/명령 의미`
- `deploy/examples/docker-compose.yml 실행 스크립트와 패키지 경계`
- `docker/Dockerfile 실행 스크립트와 패키지 경계`
- `docs-site/package.json 실행 스크립트와 패키지 경계`
- `docs-site/pnpm-lock.yaml 실행 스크립트와 패키지 경계`
- `docs-site/pnpm-workspace.yaml 실행 스크립트와 패키지 경계`

