# cline/cline 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/cline__cline |
| remote | https://github.com/cline/cline |
| HEAD | 7d11935 (2026-06-10) fix(cli): suppress flickering console windows on Windows (#11408) |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 3383 |
| dirs | 687 |
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
- 주요 heading: `CLI`, `Kanban`, `VS Code Extension`, `JetBrains Plugin`, `SDK`, `Index`, `Edits Code Across Your Project`, `Runs Bash Commands`, `Plan and Act`, `Rules and Skills`, `Works With Every Model`, `Extend With Plugins or MCP Servers`, `Multi-Agent Teams`, `Scheduled Agents`, `Connect to Slack, Telegram, Discord, and More`, `Connect to Telegram`, `Connect to Slack through webhook`, `Connect to Slack using socket mode`

> <p align="center" <img src="assets/icons/icon.png" width="80" alt="Cline" / </p <h1 align="center" Cline</h1 <p align="center" The open source coding agent in your IDE and terminal. </p <div align="center" <div align="center" <table <tbody <td align="center" <a href="https //docs.cline.bot" target=" blank" <strong Docs</strong </a </td <td align="center" <a href="https //discord.gg/cline" target=" blank" <strong Discord</strong </a </td <td align="center" <a href="https //www.reddit.com/r/cline/" target=" blank" <strong r/cline</strong </a </td <td align="center" <a href="https //github.com/cline/cline/discussions/categories/feature requests?discussions q=is%3Aopen+category%3A%22Feature+Requests%22+sort%3Atop" target=" blank" <strong Feature Requests</strong </a </td <td align="center" <a href="https //cline.bot/join us" target=" blank" <strong Join us!</strong </a </td </tbody </table <

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .changeset | dir |
| .claude | dir |
| .cline | dir |
| .clinerules | dir |
| .codex | dir |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .gitleaks.toml | file |
| .gitmodules | file |
| .greptile | dir |
| .husky | dir |
| .kanban | dir |
| .nvmrc | file |
| .tool-versions | file |
| .vscode | dir |
| .worktreeinclude | other |
| apps | dir |
| assets | dir |
| biome.json | file |
| bun.lock | file |
| CHANGELOG.md | file |
| CLAUDE.md | file |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| docs | dir |
| evals | dir |
| LICENSE | file |
| package.json | file |
| README.md | file |
| sdk | dir |
| SECURITY.md | file |
| vitest.config.ts | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| apps/ | 2439 |
| sdk/ | 662 |
| docs/ | 126 |
| evals/ | 44 |
| .agents/ | 43 |
| .github/ | 23 |
| (root) | 17 |
| .clinerules/ | 13 |
| .vscode/ | 4 |
| .greptile/ | 3 |
| .claude/ | 2 |
| assets/ | 2 |
| .changeset/ | 1 |
| .cline/ | 1 |
| .codex/ | 1 |
| .husky/ | 1 |
| .kanban/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| apps/ | 2439 | preferred |
| docs/ | 126 | preferred |
| apps/vscode/ | 1530 | large |
| apps/vscode/src/ | 1080 | large |
| sdk/ | 662 | large |
| sdk/packages/ | 585 | large |
| apps/examples/ | 389 | large |
| apps/cli/ | 373 | large |
| sdk/packages/core/ | 368 | large |
| apps/cli/src/ | 355 | large |
| apps/vscode/webview-ui/ | 346 | large |
| apps/examples/desktop-app/ | 183 | large |
| apps/cline-hub/ | 145 | large |
| apps/cline-hub/src/ | 142 | large |
| apps/examples/vscode/ | 119 | large |
| sdk/packages/llms/ | 101 | large |
| sdk/packages/shared/ | 98 | large |
| apps/examples/menubar/ | 64 | large |
| sdk/examples/ | 62 | large |
| evals/ | 44 | large |
| .agents/ | 43 | large |
| .agents/skills/ | 43 | large |
| apps/vscode/scripts/ | 27 | large |
| sdk/examples/plugins/ | 27 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `apps/cli/package.json`
- `apps/cli/src/tests/package.json`
- `apps/cli/tsconfig.json`
- `apps/cline-hub/package.json`
- `apps/cline-hub/src/webview/package.json`
- `apps/cline-hub/src/webview/tsconfig.json`
- `apps/cline-hub/src/webview/vite.config.ts`
- `apps/cline-hub/tsconfig.json`
- `apps/examples/cli-agent/package.json`
- `apps/examples/cli-agent/tsconfig.json`
- `apps/examples/cline-core-cli-agent/package.json`
- `apps/examples/cline-core-cli-agent/tsconfig.json`
- `apps/examples/code-review-bot/package.json`
- `apps/examples/code-review-bot/tsconfig.json`
- `apps/examples/desktop-app/package.json`
- `apps/examples/desktop-app/src-tauri/Cargo.toml`
- `apps/examples/desktop-app/tsconfig.json`
- `apps/examples/desktop-app/webview/tsconfig.json`
- `apps/examples/menubar/package.json`
- `apps/examples/menubar/src-tauri/Cargo.toml`
- `apps/examples/menubar/tsconfig.json`
- `apps/examples/multi-agent/package.json`
- `apps/examples/multi-agent/tsconfig.json`
- `apps/examples/quickstart/package.json`
- `apps/examples/quickstart/tsconfig.json`
- `apps/examples/vscode/package.json`
- `apps/examples/vscode/src/webview/package.json`
- `apps/examples/vscode/src/webview/tsconfig.json`
- `apps/examples/vscode/src/webview/vite.config.ts`
- `apps/examples/vscode/tsconfig.json`
- `apps/vscode/package.json`
- `apps/vscode/standalone/runtime-files/package.json`
- `apps/vscode/standalone/runtime-files/vscode/package.json`
- `apps/vscode/testing-platform/package.json`
- `apps/vscode/testing-platform/tsconfig.json`
- `apps/vscode/tsconfig.json`
- `apps/vscode/webview-ui/package.json`
- `apps/vscode/webview-ui/tsconfig.json`
- `apps/vscode/webview-ui/vite.config.ts`
- `bun.lock`
- `docs/package.json`
- `evals/analysis/package.json`
- `evals/analysis/tsconfig.json`
- `evals/package.json`
- `evals/tsconfig.json`
- `package.json`
- `sdk/examples/package.json`
- `sdk/examples/plugins/agents-squad/package.json`
- `sdk/examples/plugins/agents-squad/tsconfig.json`
- `sdk/examples/tsconfig.json`
- `sdk/packages/agents/package.json`
- `sdk/packages/agents/tsconfig.json`
- `sdk/packages/core/package.json`
- `sdk/packages/core/tsconfig.json`
- `sdk/packages/llms/package.json`
- `sdk/packages/llms/scripts/tsconfig.json`
- `sdk/packages/llms/tsconfig.json`
- `sdk/packages/sdk/package.json`
- `sdk/packages/sdk/tsconfig.json`
- `sdk/packages/shared/package.json`
- `sdk/packages/shared/tsconfig.json`
- `sdk/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| apps/cli/package.json | @cline/cli | build, build:platforms, build:platforms:single, prepack, prepublishOnly, publish:npm, publish:npm:dry, dev, typecheck, test, test:unit, test:e2e, test:e2e:interactive, test:watch, test:e2e:cli:tui, link | @agentclientprotocol/sdk, @chat-adapter/discord, @chat-adapter/gchat, @chat-adapter/linear, @chat-adapter/slack, @chat-adapter/telegram, @chat-adapter/whatsapp, @clack/prompts, @cline/cline-hub, @gramio/format, @opentui-ui/dialog, @opentui/core, @opentui/react, chat |
| apps/cli/src/tests/package.json |  |  |  |
| apps/cline-hub/package.json | @cline/cline-hub | build:webview, dev, start, smoke:options, typecheck | @cline/core, @cline/llms, @cline/shared |
| apps/cline-hub/src/webview/package.json | @cline/cline-hub-webview | dev, build, preview | @base-ui/react, @fontsource-variable/geist, @radix-ui/react-use-controllable-state, @rive-app/react-webgl2, @streamdown/cjk, @streamdown/code, @streamdown/math, @streamdown/mermaid, @tailwindcss/vite, @xyflow/react, ai, ansi-to-react, class-variance-authority, clsx |
| apps/examples/cli-agent/package.json | @cline/example-cli-agent | dev, build:sdk, build, start | @cline/sdk, zod |
| apps/examples/cline-core-cli-agent/package.json | @cline/example-cline-core-cli-agent | dev, build:sdk, build, start | @cline/sdk |
| apps/examples/code-review-bot/package.json | @cline/example-code-review-bot | dev, build:sdk, build, start | @cline/sdk, zod |
| apps/examples/desktop-app/package.json | @cline/code | dev:web, dev:sidecar, dev, build, build:sidecar, build:sidecar:bin, build:binary, start, typecheck, clean | @base-ui/react, @cline/core, @cline/llms, @cline/shared, @fontsource-variable/geist, @hookform/resolvers, @radix-ui/react-accordion, @radix-ui/react-alert-dialog, @radix-ui/react-aspect-ratio, @radix-ui/react-avatar, @radix-ui/react-checkbox, @radix-ui/react-collapsible, @radix-ui/react-context-menu, @radix-ui/react-dialog |
| apps/examples/menubar/package.json | @cline/menubar | dev:ui, dev, build, build:sidecar:bin, typecheck, clean | @cline/core, @cline/shared |
| apps/examples/multi-agent/package.json | @cline/example-multi-agent | dev, build:sdk, build, start | @cline/sdk |
| apps/examples/quickstart/package.json | @cline/example-quickstart | dev, build:sdk, build, start | @cline/sdk |
| apps/examples/vscode/package.json | @cline/vscode | build:webview, build, watch, typecheck, dev | @ai-sdk/react, @cline/core, @cline/llms, @cline/shared, ai |
| apps/examples/vscode/src/webview/package.json | webview | dev, build, preview | @base-ui/react, @fontsource-variable/geist, @radix-ui/react-use-controllable-state, @rive-app/react-webgl2, @streamdown/cjk, @streamdown/code, @streamdown/math, @streamdown/mermaid, @tailwindcss/vite, @xyflow/react, ai, ansi-to-react, class-variance-authority, clsx |
| apps/vscode/package.json | claude-dev | vscode:prepublish, compile, compile-standalone, postcompile-standalone, dev, watch, watch:esbuild, watch:tsc, package, protos, protos-python, download-ripgrep, postprotos, clean:build, clean:deps, clean:all | @anthropic-ai/sdk, @anthropic-ai/vertex-sdk, @aws-sdk/client-bedrock-runtime, @aws-sdk/credential-providers, @azure/identity, @bufbuild/protobuf, @cerebras/cerebras_cloud_sdk, @google-cloud/vertexai, @google/genai, @grpc/grpc-js, @grpc/reflection, @mistralai/mistralai, @modelcontextprotocol/sdk, @opentelemetry/api |
| apps/vscode/standalone/runtime-files/package.json | cline-core |  | @grpc/grpc-js, @grpc/reflection, better-sqlite3, grpc-health-check, open, vscode-uri |
| apps/vscode/standalone/runtime-files/vscode/package.json | vscode |  |  |
| apps/vscode/testing-platform/package.json | testing-infra | build, start:dev, start | jest-diff |
| apps/vscode/webview-ui/package.json | webview-ui | dev, build, build:test, preview, lint, test, test:watch, test:coverage, storybook, build-storybook | @floating-ui/react, @fontsource/azeret-mono, @heroui/react, @paper-design/shaders-react, @radix-ui/react-dialog, @radix-ui/react-hover-card, @radix-ui/react-label, @radix-ui/react-popover, @radix-ui/react-progress, @radix-ui/react-select, @radix-ui/react-separator, @radix-ui/react-slider, @radix-ui/react-slot, @radix-ui/react-switch |
| docs/package.json | docs | test, dev, check, rename | mintlify |
| evals/analysis/package.json | @cline/analysis | start, build, test, test:watch, test:ui | commander, js-yaml, chalk |
| evals/package.json | cline-evals | analysis | better-sqlite3, chalk, commander, dotenv, tiktoken |
| package.json | @cline/packages | prepare, build, build:sdk, build:apps, build:models, dev, cli, code, clean, types, test, test:unit, test:e2e, test:e2e:interactive, verify:routines, verify:workos-device-auth |  |
| sdk/examples/package.json | examples | typecheck, clean | @cline/core |
| sdk/examples/plugins/agents-squad/package.json | cline-agent-squad-plugin | typecheck, clean | yaml, zod |
| sdk/packages/agents/package.json | @cline/agents | build, dev, typecheck, test, test:watch | @cline/llms, @cline/shared, nanoid |
| sdk/packages/core/package.json | @cline/core | build, typecheck, typecheck:smoke, test, test:live, test:unit, test:e2e, verify:routines, test:watch | @cline/agents, @cline/shared, @cline/llms, @modelcontextprotocol/sdk, @opentelemetry/api, @opentelemetry/api-logs, @opentelemetry/exporter-logs-otlp-http, @opentelemetry/exporter-metrics-otlp-http, @opentelemetry/exporter-trace-otlp-http, @opentelemetry/resources, @opentelemetry/sdk-logs, @opentelemetry/sdk-metrics, @opentelemetry/sdk-trace-base, @opentelemetry/sdk-trace-node |
| sdk/packages/llms/package.json | @cline/llms | build, typecheck, test, test:live, test:vcr, test:watch, generate:models | @ai-sdk/amazon-bedrock, @ai-sdk/anthropic, @ai-sdk/google, @ai-sdk/google-vertex, @ai-sdk/mistral, @ai-sdk/openai, @ai-sdk/openai-compatible, @ai-sdk/provider, @aws-sdk/credential-providers, @cline/shared, @jerome-benoit/sap-ai-provider, @langfuse/otel, @opentelemetry/api, @opentelemetry/sdk-trace-node |
| sdk/packages/sdk/package.json | @cline/sdk | build, typecheck | @cline/core |
| sdk/packages/shared/package.json | @cline/shared | build, typecheck, test, test:unit | aws4fetch, jsonrepair, zod, zod-to-json-schema |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| apps/examples/desktop-app/src-tauri/Cargo.toml | cline-app | false |  |
| apps/examples/menubar/src-tauri/Cargo.toml | cline-menubar | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.clinerules/hooks/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `apps/cli/README.md`
- `apps/cli/src/tests/configs/README.md`
- `apps/cline-hub/README.md`
- `apps/examples/README.md`
- `apps/examples/cli-agent/README.md`
- `apps/examples/cline-core-cli-agent/README.md`
- `apps/examples/code-review-bot/README.md`
- `apps/examples/desktop-app/README.md`
- `apps/examples/menubar/README.md`
- `apps/examples/multi-agent/README.md`
- `apps/examples/quickstart/README.md`
- `apps/examples/vscode/README.md`
- `apps/examples/vscode/src/webview/README.md`
- `apps/vscode/README.md`
- `apps/vscode/src/core/README.md`
- `apps/vscode/src/core/hooks/__tests__/fixtures/README.md`
- `apps/vscode/src/core/hooks/__tests__/fixtures/template/README.md`
- `apps/vscode/src/core/prompts/system-prompt/CONTRIBUTING.md`
- `apps/vscode/src/core/prompts/system-prompt/README.md`
- `apps/vscode/src/core/prompts/system-prompt/__tests__/README.md`
- `apps/vscode/src/core/prompts/system-prompt/tools/README.md`
- `apps/vscode/src/exports/README.md`
- `apps/vscode/src/test/e2e/README.md`
- `apps/vscode/src/test/e2e/fixtures/workspace/README.md`
- `apps/vscode/src/test/e2e/fixtures/workspace_2/README.md`
- `apps/vscode/testing-platform/README.md`
- `apps/vscode/webview-ui/.storybook/README.md`
- `apps/vscode/webview-ui/src/components/settings/README.md`
- `assets/docs/demo.gif`
- `docs/api/authentication.mdx`
- `docs/api/chat-completions.mdx`
- `docs/api/errors.mdx`
- `docs/api/getting-started.mdx`
- `docs/api/models.mdx`
- `docs/api/overview.mdx`
- `docs/api/sdk-examples.mdx`
- `docs/assets/Cline_Logo-complete_black.png`
- `docs/assets/Cline_Logo-complete_white.png`
- `docs/assets/hooks/hook-controls.png`
- `docs/assets/hooks/hooks-collapsed-view.png`
- `docs/assets/hooks/hooks-empty-state.png`
- `docs/assets/hooks/hooks-interface-with-dropdown.png`
- `docs/assets/hooks/new-hook-dropdown.png`
- `docs/assets/jupyter-explain-improve-cell.gif`
- `docs/assets/jupyter-generate-cell.gif`
- `docs/assets/robot_panel_dark.png`
- `docs/assets/robot_panel_light.png`
- ... 30 more

### 에이전트 지침 후보

- `.agents/skills/cline-sdk/SKILL.md`
- `.agents/skills/cline-sdk/references/agent/REFERENCE.md`
- `.agents/skills/cline-sdk/references/agent/api.md`
- `.agents/skills/cline-sdk/references/agent/gotchas.md`
- `.agents/skills/cline-sdk/references/agent/patterns.md`
- `.agents/skills/cline-sdk/references/clinecore/REFERENCE.md`
- `.agents/skills/cline-sdk/references/clinecore/api.md`
- `.agents/skills/cline-sdk/references/clinecore/gotchas.md`
- `.agents/skills/cline-sdk/references/clinecore/patterns.md`
- `.agents/skills/cline-sdk/references/events/REFERENCE.md`
- `.agents/skills/cline-sdk/references/multi-agent/REFERENCE.md`
- `.agents/skills/cline-sdk/references/plugins/REFERENCE.md`
- `.agents/skills/cline-sdk/references/production/REFERENCE.md`
- `.agents/skills/cline-sdk/references/providers/REFERENCE.md`
- `.agents/skills/cline-sdk/references/scheduling/REFERENCE.md`
- `.agents/skills/cline-sdk/references/tools/REFERENCE.md`
- `.agents/skills/create-pull-request/SKILL.md`
- `.agents/skills/opentui/SKILL.md`
- `.agents/skills/opentui/references/animation/REFERENCE.md`
- `.agents/skills/opentui/references/components/REFERENCE.md`
- `.agents/skills/opentui/references/components/code-diff.md`
- `.agents/skills/opentui/references/components/containers.md`
- `.agents/skills/opentui/references/components/inputs.md`
- `.agents/skills/opentui/references/components/text-display.md`
- `.agents/skills/opentui/references/core/REFERENCE.md`
- `.agents/skills/opentui/references/core/api.md`
- `.agents/skills/opentui/references/core/configuration.md`
- `.agents/skills/opentui/references/core/gotchas.md`
- `.agents/skills/opentui/references/core/patterns.md`
- `.agents/skills/opentui/references/keyboard/REFERENCE.md`
- `.agents/skills/opentui/references/layout/REFERENCE.md`
- `.agents/skills/opentui/references/layout/patterns.md`
- `.agents/skills/opentui/references/react/REFERENCE.md`
- `.agents/skills/opentui/references/react/api.md`
- `.agents/skills/opentui/references/react/configuration.md`
- `.agents/skills/opentui/references/react/gotchas.md`
- `.agents/skills/opentui/references/react/patterns.md`
- `.agents/skills/opentui/references/solid/REFERENCE.md`
- `.agents/skills/opentui/references/solid/api.md`
- `.agents/skills/opentui/references/solid/configuration.md`
- `.agents/skills/opentui/references/solid/gotchas.md`
- `.agents/skills/opentui/references/solid/patterns.md`
- `.agents/skills/opentui/references/testing/REFERENCE.md`
- `.claude/hooks/claude-code-for-web-setup.sh`
- `.claude/settings.json`
- `.cline/skills/publish-cli/SKILL.md`
- `.codex/environments/environment.toml`
- `.github/copilot-instructions.md`
- `CLAUDE.md`
- `apps/cli/skills-lock.json`
- `apps/cli/src/tests/configs/claude-sonnet-4.6/data/settings/cline_mcp_settings.json`
- `apps/cli/src/tests/configs/default/data/settings/cline_mcp_settings.json`
- `apps/cli/src/tests/configs/unauthenticated/data/settings/cline_mcp_settings.json`
- `apps/cli/src/tui/components/dialogs/mcp-manager-dialog.test.ts`
- `apps/cli/src/tui/components/dialogs/mcp-manager-dialog.tsx`
- `apps/cli/src/tui/components/dialogs/skills-picker.tsx`
- `apps/cli/src/tui/hooks/use-mcp-manager.tsx`
- `apps/cli/src/tui/utils/skill-command-input.test.ts`
- `apps/cli/src/tui/utils/skill-command-input.ts`
- `apps/cli/src/wizards/mcp/index.ts`
- `apps/cli/src/wizards/mcp/settings.test.ts`
- `apps/cli/src/wizards/mcp/settings.ts`
- `apps/cline-hub/src/server/mcp.ts`
- `apps/cline-hub/src/webview/src/components/views/settings/mcp-view.tsx`
- `apps/examples/desktop-app/webview/components/views/settings/mcp-view.tsx`
- `apps/vscode/proto/cline/mcp.proto`
- `apps/vscode/skills-lock.json`
- `apps/vscode/src/core/context/instructions/user-instructions/__tests__/skills.test.ts`
- `apps/vscode/src/core/context/instructions/user-instructions/skills.ts`
- `apps/vscode/src/core/controller/mcp/addRemoteMcpServer.ts`
- `apps/vscode/src/core/controller/mcp/authenticateMcpServer.ts`
- `apps/vscode/src/core/controller/mcp/deleteMcpServer.ts`
- `apps/vscode/src/core/controller/mcp/downloadMcp.ts`
- `apps/vscode/src/core/controller/mcp/getLatestMcpServers.ts`
- `apps/vscode/src/core/controller/mcp/openMcpSettings.ts`
- `apps/vscode/src/core/controller/mcp/refreshMcpMarketplace.ts`
- `apps/vscode/src/core/controller/mcp/restartMcpServer.ts`
- `apps/vscode/src/core/controller/mcp/subscribeToMcpMarketplaceCatalog.ts`
- `apps/vscode/src/core/controller/mcp/subscribeToMcpServers.ts`
- `apps/vscode/src/core/controller/mcp/toggleMcpServer.ts`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `.agents/skills/cline-sdk/SKILL.md`
- `.agents/skills/cline-sdk/references/agent/REFERENCE.md`
- `.agents/skills/cline-sdk/references/agent/api.md`
- `.agents/skills/cline-sdk/references/agent/gotchas.md`
- `.agents/skills/cline-sdk/references/agent/patterns.md`
- `.agents/skills/cline-sdk/references/clinecore/REFERENCE.md`
- `.agents/skills/cline-sdk/references/clinecore/api.md`
- `.agents/skills/cline-sdk/references/clinecore/gotchas.md`
- `.agents/skills/cline-sdk/references/clinecore/patterns.md`
- `.agents/skills/cline-sdk/references/events/REFERENCE.md`
- `.agents/skills/cline-sdk/references/multi-agent/REFERENCE.md`
- `.agents/skills/cline-sdk/references/plugins/REFERENCE.md`
- `.agents/skills/cline-sdk/references/production/REFERENCE.md`
- `.agents/skills/cline-sdk/references/providers/REFERENCE.md`
- `.agents/skills/cline-sdk/references/scheduling/REFERENCE.md`
- `.agents/skills/cline-sdk/references/tools/REFERENCE.md`
- `.agents/skills/create-pull-request/SKILL.md`
- `.agents/skills/opentui/SKILL.md`
- `.agents/skills/opentui/references/animation/REFERENCE.md`
- `.agents/skills/opentui/references/components/REFERENCE.md`
- `.agents/skills/opentui/references/components/code-diff.md`
- `.agents/skills/opentui/references/components/containers.md`
- `.agents/skills/opentui/references/components/inputs.md`
- `.agents/skills/opentui/references/components/text-display.md`
- `.agents/skills/opentui/references/core/REFERENCE.md`
- `.agents/skills/opentui/references/core/api.md`
- `.agents/skills/opentui/references/core/configuration.md`
- `.agents/skills/opentui/references/core/gotchas.md`
- `.agents/skills/opentui/references/core/patterns.md`
- `.agents/skills/opentui/references/keyboard/REFERENCE.md`
- `.agents/skills/opentui/references/layout/REFERENCE.md`
- `.agents/skills/opentui/references/layout/patterns.md`
- `.agents/skills/opentui/references/react/REFERENCE.md`
- `.agents/skills/opentui/references/react/api.md`
- `.agents/skills/opentui/references/react/configuration.md`
- `.agents/skills/opentui/references/react/gotchas.md`
- `.agents/skills/opentui/references/react/patterns.md`
- `.agents/skills/opentui/references/solid/REFERENCE.md`
- `.agents/skills/opentui/references/solid/api.md`
- `.agents/skills/opentui/references/solid/configuration.md`
- `.agents/skills/opentui/references/solid/gotchas.md`
- `.agents/skills/opentui/references/solid/patterns.md`
- `.agents/skills/opentui/references/testing/REFERENCE.md`
- `.cline/skills/publish-cli/SKILL.md`
- `apps/cli/src/commands/auth.test.ts`
- `apps/cli/src/commands/auth.ts`
- `apps/cli/src/commands/bin-wrapper.test.ts`
- `apps/cli/src/commands/build-options.test.ts`
- `apps/cli/src/commands/config.ts`
- `apps/cli/src/commands/connect.ts`
- `apps/cli/src/commands/dashboard.test.ts`
- `apps/cli/src/commands/dashboard.ts`
- `apps/cli/src/commands/distribution-package.test.ts`
- `apps/cli/src/commands/doctor.test.ts`
- `apps/cli/src/commands/doctor.ts`
- `apps/cli/src/commands/help.ts`
- `apps/cli/src/commands/history.test.ts`
- `apps/cli/src/commands/history.ts`
- `apps/cli/src/commands/hook.ts`
- `apps/cli/src/commands/hub.test.ts`
- `apps/cli/src/commands/hub.ts`
- `apps/cli/src/commands/kanban.test.ts`
- `apps/cli/src/commands/kanban.ts`
- `apps/cli/src/commands/plugin.test.ts`
- `apps/cli/src/commands/plugin.ts`
- `apps/cli/src/commands/program.ts`
- `apps/cli/src/commands/rpc-runtime/provider-registry.test.ts`
- `apps/cli/src/commands/schedule.test.ts`
- `apps/cli/src/commands/schedule.ts`
- `apps/cli/src/commands/schedule/client.ts`
- `apps/cli/src/commands/schedule/common.ts`
- `apps/cli/src/commands/schedule/handlers.ts`
- `apps/cli/src/commands/schedule/import-export.ts`
- `apps/cli/src/commands/schedule/types.ts`
- `apps/cli/src/commands/update.test.ts`
- `apps/cli/src/commands/update.ts`
- `apps/cli/src/tui/commands/slash-command-registry.test.ts`
- `apps/cli/src/tui/commands/slash-command-registry.ts`
- `apps/vscode/src/core/commands/reconstructTaskHistory.ts`
- `apps/vscode/src/core/controller/commands/addToCline.ts`
- `apps/vscode/src/core/controller/commands/explainWithCline.ts`
- `apps/vscode/src/core/controller/commands/fixWithCline.ts`
- `apps/vscode/src/core/controller/commands/improveWithCline.ts`
- `apps/vscode/src/core/prompts/commands/deep-planning/index.ts`
- `apps/vscode/src/core/prompts/commands/deep-planning/registry.ts`
- `apps/vscode/src/core/prompts/commands/deep-planning/types.ts`
- `apps/vscode/src/core/prompts/commands/deep-planning/variants/anthropic.ts`
- `apps/vscode/src/core/prompts/commands/deep-planning/variants/gemini.ts`
- `apps/vscode/src/core/prompts/commands/deep-planning/variants/gemini3.ts`
- `apps/vscode/src/core/prompts/commands/deep-planning/variants/generic.ts`
- `apps/vscode/src/core/prompts/commands/deep-planning/variants/gpt51.ts`
- `apps/vscode/src/core/prompts/commands/deep-planning/variants/index.ts`
- `apps/vscode/src/core/prompts/system-prompt/templates/TemplateEngine.ts`
- `apps/vscode/src/core/prompts/system-prompt/templates/placeholders.ts`
- `apps/vscode/src/dev/commands/tasks.ts`
- `apps/vscode/tests/specs/grpc_recorded_session_single_root.json`
- `sdk/.cline/skills/plugin.md`
- `sdk/examples/plugins/agents-squad/skills/api-design.md`
- `sdk/examples/plugins/agents-squad/skills/code-review.md`
- `sdk/examples/plugins/agents-squad/skills/debugging.md`
- ... 11 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `.github/scripts/tests/coverage_check_test.py`
- `apps/cli/src/acp/index.test.ts`
- `apps/cli/src/cli.e2e.test.ts`
- `apps/cli/src/cli.interactive.e2e.test.ts`
- `apps/cli/src/commands/auth.test.ts`
- `apps/cli/src/commands/bin-wrapper.test.ts`
- `apps/cli/src/commands/build-options.test.ts`
- `apps/cli/src/commands/dashboard.test.ts`
- `apps/cli/src/commands/distribution-package.test.ts`
- `apps/cli/src/commands/doctor.test.ts`
- `apps/cli/src/commands/history.test.ts`
- `apps/cli/src/commands/hub.test.ts`
- `apps/cli/src/commands/kanban.test.ts`
- `apps/cli/src/commands/plugin.test.ts`
- `apps/cli/src/commands/rpc-runtime/provider-registry.test.ts`
- `apps/cli/src/commands/schedule.test.ts`
- `apps/cli/src/commands/update.test.ts`
- `apps/cli/src/connectors/adapters/discord.test.ts`
- `apps/cli/src/connectors/adapters/gchat.test.ts`
- `apps/cli/src/connectors/adapters/linear.test.ts`
- `apps/cli/src/connectors/adapters/slack.test.ts`
- `apps/cli/src/connectors/adapters/telegram-format.test.ts`
- `apps/cli/src/connectors/adapters/telegram.test.ts`
- `apps/cli/src/connectors/adapters/whatsapp.test.ts`
- `apps/cli/src/connectors/common.test.ts`
- `apps/cli/src/connectors/connector-host.test.ts`
- `apps/cli/src/connectors/registry.test.ts`
- `apps/cli/src/connectors/runtime-turn.test.ts`
- `apps/cli/src/connectors/session-runtime.test.ts`
- `apps/cli/src/connectors/task-updates.test.ts`
- `apps/cli/src/connectors/thread-bindings.test.ts`
- `apps/cli/src/kanban-migration/notice.test.ts`
- `apps/cli/src/logging/adapter.test.ts`
- `apps/cli/src/main.test.ts`
- `apps/cli/src/runtime/active-runtime.test.ts`
- `apps/cli/src/runtime/interactive/approvals.test.ts`
- `apps/cli/src/runtime/interactive/chat-command-runner.test.ts`
- `apps/cli/src/runtime/interactive/compaction.test.ts`
- `apps/cli/src/runtime/interactive/config-data.test.ts`
- `apps/cli/src/runtime/interactive/exit-summary.test.ts`
- `apps/cli/src/runtime/interactive/fork/metadata.test.ts`
- `apps/cli/src/runtime/interactive/fork/title.test.ts`
- `apps/cli/src/runtime/interactive/mistakes.test.ts`
- `apps/cli/src/runtime/interactive/mode.test.ts`
- `apps/cli/src/runtime/interactive/session-runtime.test.ts`
- `apps/cli/src/runtime/prompt.test.ts`
- `apps/cli/src/runtime/run-agent.test.ts`
- `apps/cli/src/runtime/run-zen.test.ts`
- `apps/cli/src/runtime/session-events.test.ts`
- `apps/cli/src/runtime/tool-policies.test.ts`
- `apps/cli/src/session/session.test.ts`
- `apps/cli/src/tests/cli/auth.test.ts`
- `apps/cli/src/tests/cli/config.test.ts`
- `apps/cli/src/tests/cli/flags-behavior.test.ts`
- `apps/cli/src/tests/cli/history.test.ts`
- `apps/cli/src/tests/configs/README.md`
- `apps/cli/src/tests/configs/claude-sonnet-4.6/data/cache/remote_config_org-01JZPE4CHW5XTP73W95762121Y.json`
- `apps/cli/src/tests/configs/claude-sonnet-4.6/data/globalState.json`
- `apps/cli/src/tests/configs/claude-sonnet-4.6/data/settings/cline_mcp_settings.json`
- `apps/cli/src/tests/configs/claude-sonnet-4.6/data/settings/providers.json`
- `apps/cli/src/tests/configs/claude-sonnet-4.6/data/workspaces/43962aa4/workspaceState.json`
- `apps/cli/src/tests/configs/default/data/globalState.json`
- `apps/cli/src/tests/configs/default/data/settings/cline_mcp_settings.json`
- `apps/cli/src/tests/configs/default/data/settings/providers.json`
- `apps/cli/src/tests/configs/unauthenticated/data/globalState.json`
- `apps/cli/src/tests/configs/unauthenticated/data/settings/cline_mcp_settings.json`
- `apps/cli/src/tests/fixtures/file-edit-auto-approve.json`
- `apps/cli/src/tests/fixtures/headless-json-timeout.json`
- `apps/cli/src/tests/fixtures/headless-json.json`
- `apps/cli/src/tests/fixtures/headless-model-flag.json`
- `apps/cli/src/tests/fixtures/headless-piped-stdin.json`
- `apps/cli/src/tests/fixtures/headless-timeout.json`
- `apps/cli/src/tests/fixtures/headless-verbose.json`
- `apps/cli/src/tests/fixtures/headless-yolo-basic.json`
- `apps/cli/src/tests/fixtures/hello-and-goodbye.json`
- `apps/cli/src/tests/fixtures/per-turn-metrics.json`
- `apps/cli/src/tests/fixtures/read-file-outside-cwd.json`
- `apps/cli/src/tests/fixtures/read-file.json`
- `apps/cli/src/tests/fixtures/safe-command-no-permission.json`
- `apps/cli/src/tests/fixtures/subagents.json`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/cli-publish.yml`
- `.github/workflows/ext-jb-test-integration.yml`
- `.github/workflows/ext-vscode-publish-nightly.yml`
- `.github/workflows/ext-vscode-publish-stable.yml`
- `.github/workflows/ext-vscode-test-e2e.yml`
- `.github/workflows/ext-vscode-test.yml`
- `.github/workflows/repo-label-issues.yml`
- `.github/workflows/repo-stale-issues.yml`
- `.github/workflows/sdk-publish.yml`
- `.github/workflows/sdk-test.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 1967 |
| .tsx | 574 |
| .json | 163 |
| .md | 160 |
| .png | 122 |
| .mdx | 109 |
| .snap | 57 |
| .mjs | 21 |
| .proto | 21 |
| .sh | 16 |
| .py | 15 |
| .yml | 14 |
| .svg | 13 |
| .js | 11 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `apps/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `apps/vscode/ 내부 책임 분리`
- `apps/vscode/src/ 내부 책임 분리`
- `sdk/ 내부 책임 분리`
- `.agents/skills/cline-sdk/SKILL.md 스펙/명령 의미`
- `.agents/skills/cline-sdk/references/agent/REFERENCE.md 스펙/명령 의미`
- `.agents/skills/cline-sdk/references/agent/api.md 스펙/명령 의미`
- `.agents/skills/cline-sdk/references/agent/gotchas.md 스펙/명령 의미`
- `.agents/skills/cline-sdk/references/agent/patterns.md 스펙/명령 의미`
- `apps/cli/package.json 실행 스크립트와 패키지 경계`
- `apps/cli/src/tests/package.json 실행 스크립트와 패키지 경계`
- `apps/cli/tsconfig.json 실행 스크립트와 패키지 경계`
- `apps/cline-hub/package.json 실행 스크립트와 패키지 경계`
- `apps/cline-hub/src/webview/package.json 실행 스크립트와 패키지 경계`

