# humanlayer/humanlayer 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/humanlayer__humanlayer |
| remote | https://github.com/humanlayer/humanlayer |
| HEAD | bdea199 (2026-01-07) Merge pull request #885 from jeanduplessis/fix-log-file-path |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 794 |
| dirs | 114 |
| stack | Node/TypeScript/JavaScript, Rust, Go |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `The best way to get Coding Agents to solve hard problems in complex codebases`, `From the team that brought you "Context Engineering"`, `For Teams`, `Quick Start`, `Coming soon - join the waitlist for early access`, `Legacy Documentation`, `Contributing`, `License`

> <div align="center" </div <div align="center" The best way to get Coding Agents to solve hard problems in complex codebases CodeLayer is an open source IDE that lets you orchestrate AI coding agents. It comes with battle tested workflows that enable AI to solve hard problems in large, complex codebases. Built on Claude Code. Open source. Scale from your laptop to your entire team. <h3 Join Waitlist Discord </h3 <img referrerpolicy="no referrer when downgrade" src="https //static.scarf.sh/a.png?x pxid=fcfc0926 d841 47fb b8a6 6aba3a6c3228" / </div "Our entire company is using CodeLayer now. We're shipping one banger PR after the other. It is so f ing good. Unbelievable dude." – René Brandel, Founder @ Casco (YC X25) Superhuman for Claude Code Keyboard first workflows designed for builders who value speed and control. Advanced Context Engineering Scale AI first dev to your entire team, with

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude | dir |
| .github | dir |
| .gitignore | file |
| .npmrc | file |
| .pre-commit-config.yaml | file |
| apps | dir |
| biome.jsonc | file |
| bun.lock | file |
| CLAUDE.md | file |
| claudecode-go | dir |
| CONTRIBUTING.md | file |
| DEVELOPMENT.md | file |
| docker-compose.yml | file |
| docs | dir |
| hack | dir |
| hld | dir |
| hlyr | dir |
| humanlayer-wui | dir |
| humanlayer.md | file |
| LICENSE | file |
| Makefile | file |
| package.json | file |
| packages | dir |
| README.md | file |
| scripts | dir |
| test-slash-commands.md | file |
| tsconfig.json | file |
| turbo.json | file |
| y-schema.sql | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| humanlayer-wui/ | 333 |
| hld/ | 210 |
| apps/ | 43 |
| hlyr/ | 43 |
| .claude/ | 34 |
| packages/ | 30 |
| docs/ | 27 |
| hack/ | 25 |
| (root) | 18 |
| .github/ | 12 |
| claudecode-go/ | 11 |
| scripts/ | 8 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| apps/ | 43 | preferred |
| packages/ | 30 | preferred |
| docs/ | 27 | preferred |
| scripts/ | 8 | preferred |
| humanlayer-wui/ | 333 | large |
| humanlayer-wui/src/ | 258 | large |
| hld/ | 210 | large |
| humanlayer-wui/src/components/ | 151 | large |
| hld/sdk/ | 94 | large |
| hld/sdk/typescript/ | 94 | large |
| humanlayer-wui/src-tauri/ | 44 | large |
| hlyr/ | 43 | large |
| .claude/ | 34 | large |
| apps/react/ | 33 | large |
| .claude/commands/ | 27 | large |
| hack/ | 25 | large |
| hld/api/ | 25 | large |
| hld/daemon/ | 23 | large |
| hlyr/src/ | 23 | large |
| apps/react/src/ | 22 | large |
| humanlayer-wui/src/hooks/ | 22 | large |
| humanlayer-wui/src/stores/ | 22 | large |
| humanlayer-wui/src/lib/ | 21 | large |
| packages/database/ | 21 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `apps/daemon/package.json`
- `apps/daemon/tsconfig.json`
- `apps/react/package.json`
- `apps/react/tsconfig.json`
- `bun.lock`
- `claudecode-go/go.mod`
- `docker-compose.yml`
- `docs/Dockerfile`
- `hack/linear/bun.lock`
- `hack/linear/package.json`
- `hack/linear/tsconfig.json`
- `hld/e2e/bun.lock`
- `hld/e2e/package.json`
- `hld/go.mod`
- `hld/sdk/typescript/bun.lock`
- `hld/sdk/typescript/package.json`
- `hld/sdk/typescript/tsconfig.json`
- `hlyr/bun.lock`
- `hlyr/package.json`
- `hlyr/tsconfig.json`
- `humanlayer-wui/.storybook/tsconfig.json`
- `humanlayer-wui/bun.lock`
- `humanlayer-wui/package.json`
- `humanlayer-wui/src-tauri/Cargo.toml`
- `humanlayer-wui/tsconfig.json`
- `humanlayer-wui/vite.config.ts`
- `package.json`
- `packages/contracts/package.json`
- `packages/contracts/tsconfig.json`
- `packages/database/package.json`
- `packages/database/tsconfig.json`
- `scripts/bun.lock`
- `scripts/package.json`
- `scripts/tsconfig.json`
- `tsconfig.json`
- `turbo.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| apps/daemon/package.json | daemon |  | @codelayer/contracts, @orpc/openapi, @orpc/server, @orpc/zod, zod |
| apps/react/package.json | @codelayer/react | dev, start, build | @codelayer/database, @electric-sql/react, @radix-ui/react-label, @radix-ui/react-select, @radix-ui/react-slot, @tiptap/extension-collaboration, @tiptap/extension-collaboration-cursor, @tiptap/pm, @tiptap/react, @tiptap/starter-kit, bun-plugin-tailwind, class-variance-authority, clsx, dotenv |
| hack/linear/package.json | linear-cli | build, start, prepare | @linear/sdk, chalk, commander, inquirer, node-fetch |
| hld/e2e/package.json | @humanlayer/hld-tests | test:e2e, test:e2e:verbose, test:e2e:manual | @types/node, bun |
| hld/sdk/typescript/package.json | @humanlayer/hld-sdk | build, generate, test, typecheck, check | eventsource |
| hlyr/package.json | humanlayer | build, prepack, postpack, build:watch, dev, lint, format, format:check, test, test:watch, check, clean | @clack/prompts, @humanlayer/sdk, @modelcontextprotocol/sdk, chalk, commander, dotenv |
| humanlayer-wui/package.json | humanlayer-wui | dev, build, preview, tauri, lint, format, format:check, typecheck, check, test, storybook, build-storybook | @humanlayer/hld-sdk, @radix-ui/react-checkbox, @radix-ui/react-collapsible, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-label, @radix-ui/react-popover, @radix-ui/react-scroll-area, @radix-ui/react-select, @radix-ui/react-slot, @radix-ui/react-switch, @radix-ui/react-tabs, @radix-ui/react-tooltip, @sentry/react |
| package.json | codelayer | build, dev, lint, format, check-types, db:generate, db:migrate, db:seed |  |
| packages/contracts/package.json | @codelayer/contracts | build, build:declaration, postbuild | @orpc/contract, zod |
| packages/database/package.json | @codelayer/database | db:generate, db:push, db:migrate, db:introspect, db:pull, db:studio | drizzle-orm, pg, uuidv7 |
| scripts/package.json | scripts |  |  |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| humanlayer-wui/src-tauri/Cargo.toml | humanlayer-wui | false |  |

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| claudecode-go/go.mod | github.com/humanlayer/humanlayer/claudecode-go | 1.21 |
| hld/go.mod | github.com/humanlayer/humanlayer/hld | 1.24.0 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `apps/daemon/README.md`
- `apps/react/README.md`
- `claudecode-go/README.md`
- `docs/.gitignore`
- `docs/Dockerfile`
- `docs/case-studies/healthcare-case-study.md`
- `docs/development.mdx`
- `docs/docs.knowledge.md`
- `docs/favicon.ico`
- `docs/images/agent-webhooks.png`
- `docs/images/email-create-linear-ticket.png`
- `docs/images/function_stakes.png`
- `docs/images/gen-2-gen-3-agents.png`
- `docs/images/humanlayer-dark.png`
- `docs/images/humanlayer-get-started.gif`
- `docs/images/humanlayer-light.png`
- `docs/images/humanlayer_require_approval.png`
- `docs/images/slack-byo.png`
- `docs/images/slack-conversation.png`
- `docs/images/slack-from-manifest.png`
- `docs/images/slack-humanlayer.png`
- `docs/images/video-preview.png`
- `docs/images/wordmark-dark.svg`
- `docs/images/wordmark-light.svg`
- `docs/introduction.mdx`
- `docs/mint.json`
- `docs/package-lock.json`
- `docs/quickstart-typescript.mdx`
- `docs/readme.md`
- `docs/workshop.mdx`
- `hack/linear/README.md`
- `hld/README.md`
- `hld/sdk/typescript/README.md`
- `hlyr/README.md`
- `humanlayer-wui/README.md`
- `humanlayer-wui/docs/API.md`
- `humanlayer-wui/docs/ARCHITECTURE.md`
- `humanlayer-wui/docs/DEVELOPER_GUIDE.md`
- `humanlayer-wui/docs/HOTKEYS.md`
- `humanlayer-wui/src/stores/demo/README.md`
- `packages/contracts/README.md`
- `packages/database/README.md`
- `scripts/README.md`

### 에이전트 지침 후보

- `.claude/agents/codebase-analyzer.md`
- `.claude/agents/codebase-locator.md`
- `.claude/agents/codebase-pattern-finder.md`
- `.claude/agents/thoughts-analyzer.md`
- `.claude/agents/thoughts-locator.md`
- `.claude/agents/web-search-researcher.md`
- `.claude/commands/ci_commit.md`
- `.claude/commands/ci_describe_pr.md`
- `.claude/commands/commit.md`
- `.claude/commands/create_handoff.md`
- `.claude/commands/create_plan.md`
- `.claude/commands/create_plan_generic.md`
- `.claude/commands/create_plan_nt.md`
- `.claude/commands/create_worktree.md`
- `.claude/commands/debug.md`
- `.claude/commands/describe_pr.md`
- `.claude/commands/describe_pr_nt.md`
- `.claude/commands/founder_mode.md`
- `.claude/commands/implement_plan.md`
- `.claude/commands/iterate_plan.md`
- `.claude/commands/iterate_plan_nt.md`
- `.claude/commands/linear.md`
- `.claude/commands/local_review.md`
- `.claude/commands/oneshot.md`
- `.claude/commands/oneshot_plan.md`
- `.claude/commands/ralph_impl.md`
- `.claude/commands/ralph_plan.md`
- `.claude/commands/ralph_research.md`
- `.claude/commands/research_codebase.md`
- `.claude/commands/research_codebase_generic.md`
- `.claude/commands/research_codebase_nt.md`
- `.claude/commands/resume_handoff.md`
- `.claude/commands/validate_plan.md`
- `.claude/settings.json`
- `.github/workflows/CLAUDE.md`
- `CLAUDE.md`
- `apps/daemon/CLAUDE.md`
- `apps/react/CLAUDE.md`
- `hld/CLAUDE.md`
- `hld/daemon/mcp_claudecode_integration_test.go`
- `hld/daemon/mcp_integration_test.go`
- `hld/daemon/mcp_phase4_integration_test.go`
- `hld/daemon/mcp_server_integration_test.go`
- `hld/daemon/mcp_session_header_test.go`
- `hld/daemon/mcp_tool_use_id_integration_test.go`
- `hld/mcp/server.go`
- `hld/session/manager_mcp_socket_test.go`
- `hlyr/src/mcp.ts`
- `hlyr/src/mcpLogger.ts`
- `humanlayer-wui/CLAUDE.md`
- `packages/contracts/CLAUDE.md`
- `packages/database/CLAUDE.md`
- `scripts/CLAUDE.md`

### 스펙/템플릿/명령/스킬 후보

- `.claude/commands/ci_commit.md`
- `.claude/commands/ci_describe_pr.md`
- `.claude/commands/commit.md`
- `.claude/commands/create_handoff.md`
- `.claude/commands/create_plan.md`
- `.claude/commands/create_plan_generic.md`
- `.claude/commands/create_plan_nt.md`
- `.claude/commands/create_worktree.md`
- `.claude/commands/debug.md`
- `.claude/commands/describe_pr.md`
- `.claude/commands/describe_pr_nt.md`
- `.claude/commands/founder_mode.md`
- `.claude/commands/implement_plan.md`
- `.claude/commands/iterate_plan.md`
- `.claude/commands/iterate_plan_nt.md`
- `.claude/commands/linear.md`
- `.claude/commands/local_review.md`
- `.claude/commands/oneshot.md`
- `.claude/commands/oneshot_plan.md`
- `.claude/commands/ralph_impl.md`
- `.claude/commands/ralph_plan.md`
- `.claude/commands/ralph_research.md`
- `.claude/commands/research_codebase.md`
- `.claude/commands/research_codebase_generic.md`
- `.claude/commands/research_codebase_nt.md`
- `.claude/commands/resume_handoff.md`
- `.claude/commands/validate_plan.md`
- `hlyr/src/commands/claude.ts`
- `hlyr/src/commands/claude/init.ts`
- `hlyr/src/commands/configShow.ts`
- `hlyr/src/commands/joinWaitlist.ts`
- `hlyr/src/commands/launch.ts`
- `hlyr/src/commands/thoughts.ts`
- `hlyr/src/commands/thoughts/config.ts`
- `hlyr/src/commands/thoughts/init.ts`
- `hlyr/src/commands/thoughts/profile/create.ts`
- `hlyr/src/commands/thoughts/profile/delete.ts`
- `hlyr/src/commands/thoughts/profile/list.ts`
- `hlyr/src/commands/thoughts/profile/show.ts`
- `hlyr/src/commands/thoughts/status.ts`
- `hlyr/src/commands/thoughts/sync.ts`
- `hlyr/src/commands/thoughts/uninit.ts`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `hld/sdk/typescript/src/middleware.test.ts`
- `hlyr/src/thoughtsConfig.test.ts`
- `hlyr/tests/claudeInit.e2e.test.ts`
- `hlyr/tests/configShow.e2e.test.ts`
- `humanlayer-wui/src/AppStore.archive.test.ts`
- `humanlayer-wui/src/AppStore.events.test.ts`
- `humanlayer-wui/src/AppStore.sync.test.ts`
- `humanlayer-wui/src/AppStore.test.ts`
- `humanlayer-wui/src/components/CommandPaletteMenu.test.tsx`
- `humanlayer-wui/src/components/internal/ConversationStream/EventContent/DiffViewer/DiffViewer.test.tsx`
- `humanlayer-wui/src/components/internal/ConversationStream/EventContent/integration.test.tsx`
- `humanlayer-wui/src/components/internal/SessionDetail/__tests__/formatToolResult.test.tsx`
- `humanlayer-wui/src/components/internal/SessionDetail/components/__tests__/markdown-patterns.test.ts`
- `humanlayer-wui/src/components/internal/SessionDetail/hooks/useAutoScroll.test.ts`
- `humanlayer-wui/src/components/ui/button.test.tsx`
- `humanlayer-wui/src/components/ui/dropdown-menu.test.tsx`
- `humanlayer-wui/src/hooks/__tests__/useDaemonConnection.test.ts`
- `humanlayer-wui/src/hooks/useFileBrowser.test.ts`
- `humanlayer-wui/src/lib/daemon/fetch-mock.test.ts`
- `humanlayer-wui/src/lib/daemon/http-client.test.ts`
- `humanlayer-wui/src/lib/telemetry/posthog-sanitizer.test.ts`
- `humanlayer-wui/src/lib/telemetry/sentry.test.ts`
- `humanlayer-wui/src/stores/demo/composedDemoStore.test.ts`
- `humanlayer-wui/src/stores/demo/slices/appSlice.test.ts`
- `humanlayer-wui/src/stores/demo/slices/launcherSlice.test.ts`
- `humanlayer-wui/src/stores/demo/slices/sessionSlice.test.ts`
- `humanlayer-wui/src/stores/demo/slices/themeSlice.test.ts`
- `humanlayer-wui/src/utils/ansiParser.test.tsx`
- `humanlayer-wui/src/utils/formatting.test.ts`

### CI/Docker 후보

- `.github/workflows/CLAUDE.md`
- `.github/workflows/claude-code-review.yml`
- `.github/workflows/claude.yml`
- `.github/workflows/linear-create-plan.yml`
- `.github/workflows/linear-implement-plan.yml`
- `.github/workflows/linear-research-tickets.yml`
- `.github/workflows/main.yml`
- `.github/workflows/release-macos.yml`
- `docker-compose.yml`
- `docs/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 241 |
| .tsx | 171 |
| .go | 106 |
| .md | 81 |
| .png | 44 |
| .json | 43 |
| .sh | 16 |
| .gitignore | 14 |
| .lock | 8 |
| .yml | 8 |
| .css | 7 |
| makefile | 5 |
| .mdx | 4 |
| .rs | 4 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `apps/ 내부 책임 분리`
- `packages/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `humanlayer-wui/ 내부 책임 분리`
- `.claude/commands/ci_commit.md 스펙/명령 의미`
- `.claude/commands/ci_describe_pr.md 스펙/명령 의미`
- `.claude/commands/commit.md 스펙/명령 의미`
- `.claude/commands/create_handoff.md 스펙/명령 의미`
- `.claude/commands/create_plan.md 스펙/명령 의미`
- `apps/daemon/package.json 실행 스크립트와 패키지 경계`
- `apps/daemon/tsconfig.json 실행 스크립트와 패키지 경계`
- `apps/react/package.json 실행 스크립트와 패키지 경계`
- `apps/react/tsconfig.json 실행 스크립트와 패키지 경계`
- `bun.lock 실행 스크립트와 패키지 경계`

