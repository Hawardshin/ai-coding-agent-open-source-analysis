# RooCodeInc/Roo-Code 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/RooCodeInc__Roo-Code |
| remote | https://github.com/RooCodeInc/Roo-Code |
| HEAD | b867ec9 (2026-05-15) Remove roocode.com web app (#12375) |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 3013 |
| dirs | 548 |
| stack | Node/TypeScript/JavaScript |

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
- 주요 heading: `Roo Code`, `What Can Roo Code Do For YOU?`, `Modes`, `Resources`, `Disclaimer`, `License`

> <p align="center" <a href="https //marketplace.visualstudio.com/items?itemName=RooVeterinaryInc.roo cline" <img src="https //img.shields.io/badge/VS Code Marketplace 007ACC?style=flat&logo=visualstudiocode&logoColor=white" alt="VS Code Marketplace" </a </p Roo Code Your AI Powered Dev Team, Right in Your Editor <details <summary 🌐 Available languages</summary English Català Deutsch Español Français हिंदी Bahasa Indonesia Italiano 日本語 한국어 Nederlands Polski Português (BR) Русский Türkçe Tiếng Việt 简体中文 繁體中文 ... </details What Can Roo Code Do For YOU? Generate Code from natural language descriptions and specs Adapt with Modes Code, Architect, Ask, Debug, and Custom Modes Refactor & Debug existing code Write & Update documentation Answer Questions about your codebase Automate repetitive tasks Utilize MCP Servers Modes Roo Code adapts to how you work Code Mode everyday coding, edits, and fil

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .changeset | dir |
| .dockerignore | file |
| .env.sample | file |
| .git-blame-ignore-revs | file |
| .gitattributes | file |
| .gitconfig | file |
| .github | dir |
| .gitignore | file |
| .husky | dir |
| .nvmrc | file |
| .prettierrc.json | file |
| .roo | dir |
| .rooignore | file |
| .roomodes | file |
| .tool-versions | file |
| .vscode | dir |
| AGENTS.md | file |
| apps | dir |
| CHANGELOG.md | file |
| ellipsis.yaml | file |
| knip.json | file |
| LICENSE | file |
| locales | dir |
| package.json | file |
| packages | dir |
| pnpm-lock.yaml | file |
| pnpm-workspace.yaml | file |
| PRIVACY.md | file |
| progress.txt | file |
| README.md | file |
| releases | dir |
| renovate.json | file |
| schemas | dir |
| scripts | dir |
| SECURITY.md | file |
| src | dir |
| tsconfig.json | file |
| turbo.json | file |
| webview-ui | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| apps/ | 1090 |
| src/ | 969 |
| webview-ui/ | 554 |
| packages/ | 201 |
| releases/ | 76 |
| .roo/ | 49 |
| (root) | 26 |
| locales/ | 17 |
| .github/ | 15 |
| scripts/ | 5 |
| .changeset/ | 4 |
| .vscode/ | 4 |
| .husky/ | 2 |
| schemas/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 969 | preferred |
| apps/ | 1090 | preferred |
| packages/ | 201 | preferred |
| scripts/ | 5 | preferred |
| apps/docs/ | 903 | large |
| webview-ui/ | 554 | large |
| webview-ui/src/ | 540 | large |
| apps/docs/docs/ | 510 | large |
| apps/docs/static/ | 327 | large |
| webview-ui/src/components/ | 315 | large |
| src/core/ | 264 | large |
| src/services/ | 208 | large |
| webview-ui/src/i18n/ | 162 | large |
| apps/cli/ | 158 | large |
| src/api/ | 155 | large |
| apps/cli/src/ | 131 | large |
| src/services/tree-sitter/ | 123 | large |
| src/api/providers/ | 111 | large |
| src/i18n/ | 110 | large |
| src/i18n/locales/ | 108 | large |
| src/core/prompts/ | 82 | large |
| packages/types/ | 80 | large |
| releases/ | 76 | large |
| packages/types/src/ | 69 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `apps/cli/package.json`
- `apps/cli/tsconfig.json`
- `apps/docs/package.json`
- `apps/docs/tsconfig.json`
- `apps/docs/turbo.json`
- `apps/vscode-e2e/package.json`
- `apps/vscode-e2e/tsconfig.json`
- `apps/vscode-nightly/package.json`
- `apps/vscode-nightly/turbo.json`
- `package.json`
- `packages/config-eslint/package.json`
- `packages/config-typescript/package.json`
- `packages/core/package.json`
- `packages/core/tsconfig.json`
- `packages/ipc/package.json`
- `packages/ipc/tsconfig.json`
- `packages/types/package.json`
- `packages/types/tsconfig.json`
- `packages/vscode-shim/package.json`
- `packages/vscode-shim/tsconfig.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `src/package.json`
- `src/tsconfig.json`
- `src/turbo.json`
- `tsconfig.json`
- `turbo.json`
- `webview-ui/package.json`
- `webview-ui/tsconfig.json`
- `webview-ui/turbo.json`
- `webview-ui/vite.config.ts`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| apps/cli/package.json | @roo-code/cli | format, lint, check-types, test, test:integration, build, build:extension, dev, dev:local, clean | @inkjs/ui, @roo-code/core, @roo-code/types, @roo-code/vscode-shim, @trpc/client, @vscode/ripgrep, commander, cross-spawn, execa, fuzzysort, ink, p-wait-for, react, superjson |
| apps/docs/package.json | @roo-code/docs | docusaurus, start, build, swizzle, deploy, clear, serve, write-translations, write-heading-ids, check-types, lint, lint:fix, lint:unused, clean | @docusaurus/core, @docusaurus/plugin-client-redirects, @docusaurus/plugin-content-docs, @docusaurus/plugin-sitemap, @docusaurus/preset-classic, @docusaurus/theme-common, @easyops-cn/autocomplete.js, @easyops-cn/docusaurus-search-local, @mdx-js/react, @vscode/codicons, clsx, lucide-react, prism-react-renderer, react |
| apps/vscode-e2e/package.json | @roo-code/vscode-e2e | lint, check-types, format, test:ci, test:run, clean |  |
| apps/vscode-nightly/package.json | @roo-code/vscode-nightly | bundle:nightly, vsix:nightly, clean |  |
| package.json | roo-code | preinstall, prepare, install, install:all, lint, check-types, test, format, build, bundle, bundle:nightly, vsix, vsix:nightly, clean, install:vsix, install:vsix:nightly |  |
| packages/config-eslint/package.json | @roo-code/config-eslint |  |  |
| packages/config-typescript/package.json | @roo-code/config-typescript |  |  |
| packages/core/package.json | @roo-code/core | lint, check-types, test, clean | @roo-code/types, esbuild, execa, ignore, openai, zod |
| packages/ipc/package.json | @roo-code/ipc | lint, check-types, clean | @roo-code/types, node-ipc |
| packages/types/package.json | @roo-code/types | lint, check-types, test, build, build:watch, npm:publish, clean, generate:schema | ai-sdk-provider-poe, zod |
| packages/vscode-shim/package.json | @roo-code/vscode-shim | format, lint, check-types, test, clean |  |
| src/package.json | roo-cline | lint, check-types, pretest, test, format, bundle, vscode:prepublish, vsix, publish:marketplace, watch:bundle, watch:tsc, clean | @ai-sdk/amazon-bedrock, @ai-sdk/baseten, @ai-sdk/deepseek, @ai-sdk/fireworks, @ai-sdk/google, @ai-sdk/google-vertex, @ai-sdk/mistral, @ai-sdk/xai, @anthropic-ai/sdk, @anthropic-ai/vertex-sdk, @aws-sdk/client-bedrock-runtime, @aws-sdk/credential-providers, @google/genai, @lmstudio/sdk |
| webview-ui/package.json | @roo-code/vscode-webview | lint, check-types, pretest, test, format, dev, build, build:nightly, preview, clean | @radix-ui/react-alert-dialog, @radix-ui/react-checkbox, @radix-ui/react-collapsible, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-icons, @radix-ui/react-popover, @radix-ui/react-portal, @radix-ui/react-progress, @radix-ui/react-radio-group, @radix-ui/react-select, @radix-ui/react-separator, @radix-ui/react-slider, @radix-ui/react-slot |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.changeset/README.md`
- `README.md`
- `apps/cli/README.md`
- `apps/cli/docs/AGENT_LOOP.md`
- `apps/docs/.env.example`
- `apps/docs/.gitignore`
- `apps/docs/LICENSE`
- `apps/docs/README.md`
- `apps/docs/docs/advanced-usage/available-tools/access-mcp-resource.md`
- `apps/docs/docs/advanced-usage/available-tools/apply-diff.md`
- `apps/docs/docs/advanced-usage/available-tools/apply-patch.md`
- `apps/docs/docs/advanced-usage/available-tools/ask-followup-question.md`
- `apps/docs/docs/advanced-usage/available-tools/attempt-completion.md`
- `apps/docs/docs/advanced-usage/available-tools/codebase-search.md`
- `apps/docs/docs/advanced-usage/available-tools/edit-file.md`
- `apps/docs/docs/advanced-usage/available-tools/edit.md`
- `apps/docs/docs/advanced-usage/available-tools/execute-command.md`
- `apps/docs/docs/advanced-usage/available-tools/generate-image.md`
- `apps/docs/docs/advanced-usage/available-tools/list-files.md`
- `apps/docs/docs/advanced-usage/available-tools/new-task.md`
- `apps/docs/docs/advanced-usage/available-tools/read-command-output.md`
- `apps/docs/docs/advanced-usage/available-tools/read-file.md`
- `apps/docs/docs/advanced-usage/available-tools/run-slash-command.md`
- `apps/docs/docs/advanced-usage/available-tools/search-files.md`
- `apps/docs/docs/advanced-usage/available-tools/search-replace.md`
- `apps/docs/docs/advanced-usage/available-tools/skill.md`
- `apps/docs/docs/advanced-usage/available-tools/switch-mode.md`
- `apps/docs/docs/advanced-usage/available-tools/tool-use-overview.md`
- `apps/docs/docs/advanced-usage/available-tools/update-todo-list.md`
- `apps/docs/docs/advanced-usage/available-tools/use-mcp-tool.md`
- `apps/docs/docs/advanced-usage/available-tools/write-to-file.md`
- `apps/docs/docs/advanced-usage/context-poisoning.md`
- `apps/docs/docs/advanced-usage/large-projects.md`
- `apps/docs/docs/advanced-usage/local-models.md`
- `apps/docs/docs/advanced-usage/prompt-engineering.md`
- `apps/docs/docs/advanced-usage/prompt-structure.md`
- `apps/docs/docs/advanced-usage/rate-limits-costs.md`
- `apps/docs/docs/advanced-usage/roo-code-nightly.mdx`
- `apps/docs/docs/basic-usage/context-mentions.md`
- `apps/docs/docs/basic-usage/how-tools-work.md`
- `apps/docs/docs/basic-usage/the-chat-interface.md`
- `apps/docs/docs/basic-usage/typing-your-requests.md`
- `apps/docs/docs/basic-usage/using-modes.md`
- `apps/docs/docs/faq.md`
- `apps/docs/docs/features/api-configuration-profiles.mdx`
- `apps/docs/docs/features/auto-approving-actions.mdx`
- `apps/docs/docs/features/boomerang-tasks.mdx`
- `apps/docs/docs/features/checkpoints.mdx`
- `apps/docs/docs/features/code-actions.mdx`
- `apps/docs/docs/features/codebase-indexing.mdx`
- ... 30 more

### 에이전트 지침 후보

- `.roo/skills/evals-context/SKILL.md`
- `.roo/skills/roo-conflict-resolution/SKILL.md`
- `.roo/skills/roo-translation/SKILL.md`
- `AGENTS.md`
- `apps/docs/docs/advanced-usage/available-tools/access-mcp-resource.md`
- `apps/docs/docs/advanced-usage/available-tools/skill.md`
- `apps/docs/docs/advanced-usage/available-tools/use-mcp-tool.md`
- `apps/docs/docs/features/mcp/mcp-vs-api.md`
- `apps/docs/docs/features/mcp/overview.md`
- `apps/docs/docs/features/mcp/recommended-mcp-servers.md`
- `apps/docs/docs/features/mcp/server-transports.md`
- `apps/docs/docs/features/mcp/using-mcp-in-roo.mdx`
- `apps/docs/docs/features/mcp/what-is-mcp.md`
- `apps/docs/docs/features/skills.mdx`
- `apps/docs/docs/providers/gemini.md`
- `apps/docs/static/img/recommended-mcp-servers/context7-global-setup-fixed.png`
- `apps/docs/static/img/recommended-mcp-servers/context7-project-setup-fixed.png`
- `apps/docs/static/img/recommended-mcp-servers/context7-running-fixed.png`
- `apps/docs/static/img/using-mcp-in-roo/using-mcp-in-roo-1.png`
- `apps/docs/static/img/using-mcp-in-roo/using-mcp-in-roo-10.png`
- `apps/docs/static/img/using-mcp-in-roo/using-mcp-in-roo-2.png`
- `apps/docs/static/img/using-mcp-in-roo/using-mcp-in-roo-3.png`
- `apps/docs/static/img/using-mcp-in-roo/using-mcp-in-roo-4.png`
- `apps/docs/static/img/using-mcp-in-roo/using-mcp-in-roo-5.png`
- `apps/docs/static/img/using-mcp-in-roo/using-mcp-in-roo-6.png`
- `apps/docs/static/img/using-mcp-in-roo/using-mcp-in-roo-7.png`
- `apps/docs/static/img/using-mcp-in-roo/using-mcp-in-roo-8.png`
- `apps/docs/static/img/using-mcp-in-roo/using-mcp-in-roo-9.png`
- `apps/docs/static/img/using-mcp-in-roo/using-mcp-in-roo.png`
- `apps/vscode-e2e/src/suite/tools/use-mcp-tool.test.ts`
- `packages/types/src/mcp.ts`
- `packages/types/src/skills.ts`
- `src/core/auto-approval/mcp.ts`
- `src/core/prompts/__tests__/__snapshots__/add-custom-instructions/mcp-server-creation-disabled.snap`
- `src/core/prompts/__tests__/__snapshots__/system-prompt/with-mcp-hub-provided.snap`
- `src/core/prompts/__tests__/__snapshots__/system-prompt/with-undefined-mcp-hub.snap`
- `src/core/prompts/sections/__tests__/skills.spec.ts`
- `src/core/prompts/sections/skills.ts`
- `src/core/prompts/tools/native-tools/__tests__/mcp_server.spec.ts`
- `src/core/prompts/tools/native-tools/access_mcp_resource.ts`
- `src/core/prompts/tools/native-tools/mcp_server.ts`
- `src/core/prompts/tools/native-tools/skill.ts`
- `src/core/tools/__tests__/skillTool.spec.ts`
- `src/core/webview/__tests__/skillsMessageHandler.spec.ts`
- `src/core/webview/skillsMessageHandler.ts`
- `src/i18n/locales/ca/mcp.json`
- `src/i18n/locales/ca/skills.json`
- `src/i18n/locales/de/mcp.json`
- `src/i18n/locales/de/skills.json`
- `src/i18n/locales/en/mcp.json`
- `src/i18n/locales/en/skills.json`
- `src/i18n/locales/es/mcp.json`
- `src/i18n/locales/es/skills.json`
- `src/i18n/locales/fr/mcp.json`
- `src/i18n/locales/fr/skills.json`
- `src/i18n/locales/hi/mcp.json`
- `src/i18n/locales/hi/skills.json`
- `src/i18n/locales/id/mcp.json`
- `src/i18n/locales/id/skills.json`
- `src/i18n/locales/it/mcp.json`
- `src/i18n/locales/it/skills.json`
- `src/i18n/locales/ja/mcp.json`
- `src/i18n/locales/ja/skills.json`
- `src/i18n/locales/ko/mcp.json`
- `src/i18n/locales/ko/skills.json`
- `src/i18n/locales/nl/mcp.json`
- `src/i18n/locales/nl/skills.json`
- `src/i18n/locales/pl/mcp.json`
- `src/i18n/locales/pl/skills.json`
- `src/i18n/locales/pt-BR/mcp.json`
- `src/i18n/locales/pt-BR/skills.json`
- `src/i18n/locales/ru/mcp.json`
- `src/i18n/locales/ru/skills.json`
- `src/i18n/locales/tr/mcp.json`
- `src/i18n/locales/tr/skills.json`
- `src/i18n/locales/vi/mcp.json`
- `src/i18n/locales/vi/skills.json`
- `src/i18n/locales/zh-CN/mcp.json`
- `src/i18n/locales/zh-CN/skills.json`
- `src/i18n/locales/zh-TW/mcp.json`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `.roo/commands/cli-release.md`
- `.roo/commands/commit.md`
- `.roo/commands/release.md`
- `.roo/commands/roo-resolve-conflicts.md`
- `.roo/commands/roo-translate.md`
- `.roo/skills/evals-context/SKILL.md`
- `.roo/skills/roo-conflict-resolution/SKILL.md`
- `.roo/skills/roo-translation/SKILL.md`
- `apps/cli/src/commands/cli/__tests__/cancellation.test.ts`
- `apps/cli/src/commands/cli/__tests__/list.test.ts`
- `apps/cli/src/commands/cli/__tests__/parse-stdin-command.test.ts`
- `apps/cli/src/commands/cli/__tests__/run.test.ts`
- `apps/cli/src/commands/cli/__tests__/upgrade.test.ts`
- `apps/cli/src/commands/cli/cancellation.ts`
- `apps/cli/src/commands/cli/index.ts`
- `apps/cli/src/commands/cli/list.ts`
- `apps/cli/src/commands/cli/run.ts`
- `apps/cli/src/commands/cli/stdin-stream.ts`
- `apps/cli/src/commands/cli/upgrade.ts`
- `apps/cli/src/commands/index.ts`
- `src/services/skills/SkillsManager.ts`
- `src/services/skills/__tests__/SkillsManager.spec.ts`
- `src/services/skills/__tests__/skillInvocation.spec.ts`
- `src/services/skills/skillInvocation.ts`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `apps/cli/src/__tests__/index.test.ts`
- `apps/cli/src/agent/__tests__/events.test.ts`
- `apps/cli/src/agent/__tests__/extension-client.test.ts`
- `apps/cli/src/agent/__tests__/extension-host.test.ts`
- `apps/cli/src/agent/__tests__/json-event-emitter-control.test.ts`
- `apps/cli/src/agent/__tests__/json-event-emitter-result.test.ts`
- `apps/cli/src/agent/__tests__/json-event-emitter-streaming.test.ts`
- `apps/cli/src/commands/cli/__tests__/cancellation.test.ts`
- `apps/cli/src/commands/cli/__tests__/list.test.ts`
- `apps/cli/src/commands/cli/__tests__/parse-stdin-command.test.ts`
- `apps/cli/src/commands/cli/__tests__/run.test.ts`
- `apps/cli/src/commands/cli/__tests__/upgrade.test.ts`
- `apps/cli/src/lib/storage/__tests__/history.test.ts`
- `apps/cli/src/lib/storage/__tests__/settings.test.ts`
- `apps/cli/src/lib/task-history/__tests__/index.test.ts`
- `apps/cli/src/lib/utils/__tests__/commands.test.ts`
- `apps/cli/src/lib/utils/__tests__/extension.test.ts`
- `apps/cli/src/lib/utils/__tests__/guards.test.ts`
- `apps/cli/src/lib/utils/__tests__/input.test.ts`
- `apps/cli/src/lib/utils/__tests__/path.test.ts`
- `apps/cli/src/lib/utils/__tests__/provider.test.ts`
- `apps/cli/src/lib/utils/__tests__/shell.test.ts`
- `apps/cli/src/ui/__tests__/store.test.ts`
- `apps/cli/src/ui/components/__tests__/ChatHistoryItem.test.tsx`
- `apps/cli/src/ui/components/__tests__/Icon.test.tsx`
- `apps/cli/src/ui/components/__tests__/ToastDisplay.test.tsx`
- `apps/cli/src/ui/components/__tests__/TodoChangeDisplay.test.tsx`
- `apps/cli/src/ui/components/__tests__/TodoDisplay.test.tsx`
- `apps/cli/src/ui/components/autocomplete/triggers/__tests__/FileTrigger.test.tsx`
- `apps/cli/src/ui/components/autocomplete/triggers/__tests__/HelpTrigger.test.tsx`
- `apps/cli/src/ui/components/autocomplete/triggers/__tests__/HistoryTrigger.test.tsx`
- `apps/cli/src/ui/components/autocomplete/triggers/__tests__/ModeTrigger.test.tsx`
- `apps/cli/src/ui/components/autocomplete/triggers/__tests__/SlashCommandTrigger.test.tsx`
- `apps/cli/src/ui/components/tools/__tests__/CommandTool.test.tsx`
- `apps/cli/src/ui/hooks/__tests__/useToast.test.ts`
- `apps/vscode-e2e/src/suite/extension.test.ts`
- `apps/vscode-e2e/src/suite/markdown-lists.test.ts`
- `apps/vscode-e2e/src/suite/modes.test.ts`
- `apps/vscode-e2e/src/suite/subtasks.test.ts`
- `apps/vscode-e2e/src/suite/task.test.ts`
- `apps/vscode-e2e/src/suite/tools/apply-diff.test.ts`
- `apps/vscode-e2e/src/suite/tools/execute-command.test.ts`
- `apps/vscode-e2e/src/suite/tools/list-files.test.ts`
- `apps/vscode-e2e/src/suite/tools/read-file.test.ts`
- `apps/vscode-e2e/src/suite/tools/search-files.test.ts`
- `apps/vscode-e2e/src/suite/tools/use-mcp-tool.test.ts`
- `apps/vscode-e2e/src/suite/tools/write-to-file.test.ts`
- `packages/core/src/custom-tools/__tests__/custom-tool-registry.spec.ts`
- `packages/core/src/custom-tools/__tests__/esbuild-runner.spec.ts`
- `packages/core/src/custom-tools/__tests__/format-native.spec.ts`
- `packages/core/src/custom-tools/__tests__/serialize.spec.ts`
- `packages/core/src/message-utils/__tests__/consolidateApiRequests.spec.ts`
- `packages/core/src/message-utils/__tests__/consolidateCommands.spec.ts`
- `packages/core/src/message-utils/__tests__/consolidateTokenUsage.spec.ts`
- `packages/core/src/task-history/__tests__/task-history.spec.ts`
- `packages/core/src/worktree/__tests__/worktree-include.spec.ts`
- `packages/core/src/worktree/__tests__/worktree-service.spec.ts`
- `packages/types/src/__tests__/cli.test.ts`
- `packages/types/src/__tests__/context-management.test.ts`
- `packages/types/src/__tests__/custom-tool.spec.ts`
- `packages/types/src/__tests__/index.test.ts`
- `packages/types/src/__tests__/ipc.test.ts`
- `packages/types/src/__tests__/message.test.ts`
- `packages/types/src/__tests__/provider-settings.test.ts`
- `packages/types/src/__tests__/roomodes-schema-sync.spec.ts`
- `packages/types/src/__tests__/roomodes-schema.spec.ts`
- `packages/vscode-shim/src/__tests__/Additional.test.ts`
- `packages/vscode-shim/src/__tests__/CancellationToken.test.ts`
- `packages/vscode-shim/src/__tests__/CommandsAPI.test.ts`
- `packages/vscode-shim/src/__tests__/EventEmitter.test.ts`
- `packages/vscode-shim/src/__tests__/ExtensionContext.test.ts`
- `packages/vscode-shim/src/__tests__/FileSystemAPI.test.ts`
- `packages/vscode-shim/src/__tests__/OutputChannel.test.ts`
- `packages/vscode-shim/src/__tests__/Position.test.ts`
- `packages/vscode-shim/src/__tests__/Range.test.ts`
- `packages/vscode-shim/src/__tests__/Selection.test.ts`
- `packages/vscode-shim/src/__tests__/StatusBarItem.test.ts`
- `packages/vscode-shim/src/__tests__/TabGroupsAPI.test.ts`
- `packages/vscode-shim/src/__tests__/TextEdit.test.ts`
- `packages/vscode-shim/src/__tests__/TextEditorDecorationType.test.ts`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/changeset-release.yml`
- `.github/workflows/cli-release.yml`
- `.github/workflows/code-qa.yml`
- `.github/workflows/codeql.yml`
- `.github/workflows/docs-pages.yml`
- `.github/workflows/marketplace-publish.yml`
- `.github/workflows/nightly-publish.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 1175 |
| .png | 396 |
| .tsx | 374 |
| .md | 333 |
| .json | 330 |
| .mdx | 226 |
| .xml | 32 |
| .snap | 27 |
| .gitkeep | 15 |
| .yml | 15 |
| .css | 14 |
| .mjs | 13 |
| .js | 11 |
| .svg | 8 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `apps/ 내부 책임 분리`
- `packages/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `apps/docs/ 내부 책임 분리`
- `.roo/commands/cli-release.md 스펙/명령 의미`
- `.roo/commands/commit.md 스펙/명령 의미`
- `.roo/commands/release.md 스펙/명령 의미`
- `.roo/commands/roo-resolve-conflicts.md 스펙/명령 의미`
- `.roo/commands/roo-translate.md 스펙/명령 의미`
- `apps/cli/package.json 실행 스크립트와 패키지 경계`
- `apps/cli/tsconfig.json 실행 스크립트와 패키지 경계`
- `apps/docs/package.json 실행 스크립트와 패키지 경계`
- `apps/docs/tsconfig.json 실행 스크립트와 패키지 경계`
- `apps/docs/turbo.json 실행 스크립트와 패키지 경계`

