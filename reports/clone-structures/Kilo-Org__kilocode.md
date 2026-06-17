# Kilo-Org/kilocode 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/Kilo-Org__kilocode |
| remote | https://github.com/Kilo-Org/kilocode |
| HEAD | 5637375 (2026-06-10) Merge pull request #11072 from Kilo-Org/curious-swordtail |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 6848 |
| dirs | 914 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Quick Links`, `Key Features`, `Get Started in Visual Studio Code`, `Get Started with the CLI`, `npm`, `Or run directly with npx`, `npm Install Note: Hidden `.kilo` File`, `Install from GitHub Releases (Optional)`, `Autonomous Mode (CI/CD)`, `Contributing`, `Code of Conduct`, `License`, `FAQ`

> <p align="center" <a href="https //marketplace.visualstudio.com/items?itemName=kilocode.Kilo Code" <img src="https //raster.shields.io/badge/VS Code Marketplace 007ACC?style=flat&logo=visualstudiocode&logoColor=white" alt="VS Code Marketplace" height="20" </a <a href="https //x.com/kilocode" <img src="https //raster.shields.io/badge/kilocode 000000?style=flat&logo=x&logoColor=white" alt="X (Twitter)" height="20" </a <a href="https //blog.kilo.ai" <img src="https //raster.shields.io/badge/Blog 555?style=flat&logo=substack&logoColor=white" alt="Substack Blog" height="20" </a <a href="https //kilo.ai/discord" <img src="https //raster.shields.io/badge/Join%20Discord 5865F2?style=flat&logo=discord&logoColor=white" alt="Discord" height="20" </a <a href="https //www.reddit.com/r/kilocode/" <img src="https //raster.shields.io/badge/Join%20r%2Fkilocode D84315?style=flat&logo=reddit&logoColor=whit

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .changeset | dir |
| .editorconfig | file |
| .envrc | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .gitleaksignore | file |
| .husky | dir |
| .idea | dir |
| .kilo | dir |
| .kilocode | dir |
| .opencode | dir |
| .opencode-version | file |
| .oxlintrc.json | file |
| .prettierignore | file |
| .vscode | dir |
| .zed | dir |
| AgentManagerApp.tsx | file |
| AGENTS.md | file |
| bin | dir |
| bun.lock | file |
| bunfig.toml | file |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| flake.lock | file |
| flake.nix | file |
| github | dir |
| install | file |
| kilocode-2.code-workspace | file |
| LICENSE | file |
| logo.png | file |
| nix | dir |
| package.json | file |
| packages | dir |
| patches | dir |
| PRIVACY.md | file |
| README.md | file |
| RELEASING.md | file |
| REVIEW.md | file |
| script | dir |
| SECURITY.md | file |
| specs | dir |
| TESTING.md | file |
| tsconfig.json | file |
| turbo.json | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| packages/ | 6598 |
| script/ | 71 |
| .github/ | 53 |
| .opencode/ | 42 |
| (root) | 29 |
| .kilo/ | 19 |
| patches/ | 7 |
| .changeset/ | 6 |
| nix/ | 5 |
| specs/ | 5 |
| .vscode/ | 4 |
| github/ | 4 |
| bin/ | 2 |
| .husky/ | 1 |
| .kilocode/ | 1 |
| .zed/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| packages/ | 6598 | preferred |
| specs/ | 5 | preferred |
| packages/ui/ | 1635 | large |
| packages/ui/src/ | 1628 | large |
| packages/opencode/ | 1472 | large |
| packages/kilo-vscode/ | 1062 | large |
| packages/opencode/src/ | 871 | large |
| packages/kilo-docs/ | 857 | large |
| packages/kilo-docs/public/ | 528 | large |
| packages/opencode/test/ | 515 | large |
| packages/kilo-jetbrains/ | 476 | large |
| packages/kilo-vscode/src/ | 403 | large |
| packages/kilo-jetbrains/frontend/ | 347 | large |
| packages/kilo-vscode/webview-ui/ | 343 | large |
| packages/kilo-docs/pages/ | 241 | large |
| packages/kilo-ui/ | 229 | large |
| packages/kilo-ui/src/ | 217 | large |
| packages/kilo-vscode/tests/ | 208 | large |
| packages/core/ | 167 | large |
| packages/kilo-web-ui/ | 150 | large |
| packages/kilo-web-ui/src/ | 148 | large |
| packages/llm/ | 135 | large |
| packages/kilo-indexing/ | 115 | large |
| packages/core/src/ | 110 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `bun.lock`
- `package.json`
- `packages/containers/base/Dockerfile`
- `packages/containers/bun-node/Dockerfile`
- `packages/containers/publish/Dockerfile`
- `packages/containers/rust/Dockerfile`
- `packages/containers/tauri-linux/Dockerfile`
- `packages/containers/tsconfig.json`
- `packages/core/package.json`
- `packages/core/tsconfig.json`
- `packages/http-recorder/package.json`
- `packages/http-recorder/tsconfig.json`
- `packages/kilo-console/package.json`
- `packages/kilo-console/tsconfig.json`
- `packages/kilo-console/vite.config.ts`
- `packages/kilo-docs/next.config.js`
- `packages/kilo-docs/package.json`
- `packages/kilo-docs/tsconfig.json`
- `packages/kilo-gateway/package.json`
- `packages/kilo-gateway/tsconfig.json`
- `packages/kilo-i18n/package.json`
- `packages/kilo-i18n/tsconfig.json`
- `packages/kilo-indexing/package.json`
- `packages/kilo-indexing/tsconfig.json`
- `packages/kilo-jetbrains/package.json`
- `packages/kilo-telemetry/package.json`
- `packages/kilo-telemetry/tsconfig.json`
- `packages/kilo-ui/.storybook/tsconfig.json`
- `packages/kilo-ui/package.json`
- `packages/kilo-ui/tsconfig.json`
- `packages/kilo-vscode/.storybook/tsconfig.json`
- `packages/kilo-vscode/package.json`
- `packages/kilo-vscode/tests/package.json`
- `packages/kilo-vscode/tsconfig.json`
- `packages/kilo-vscode/webview-ui/tsconfig.json`
- `packages/kilo-web-ui/package.json`
- `packages/kilo-web-ui/tsconfig.json`
- `packages/llm/package.json`
- `packages/llm/tsconfig.json`
- `packages/opencode/Dockerfile`
- `packages/opencode/package.json`
- `packages/opencode/tsconfig.json`
- `packages/plugin-atomic-chat/package.json`
- `packages/plugin-atomic-chat/tsconfig.json`
- `packages/plugin/package.json`
- `packages/plugin/tsconfig.json`
- `packages/script/package.json`
- `packages/script/tsconfig.json`
- `packages/sdk/js/package.json`
- `packages/sdk/js/tsconfig.json`
- `packages/storybook/package.json`
- `packages/storybook/tsconfig.json`
- `packages/ui/package.json`
- `packages/ui/tsconfig.json`
- `packages/ui/vite.config.ts`
- `script/upstream/package.json`
- `script/upstream/tsconfig.json`
- `tsconfig.json`
- `turbo.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | @kilocode/kilo | dev, dev:storybook, lint, typecheck, upgrade-opentui, postinstall, prepare, random, hello, test, extension, dev-setup | @aws-sdk/client-s3, @kilocode/plugin, @opencode-ai/script, @kilocode/sdk, heap-snapshot-toolkit, typescript, @morphllm/morphsdk |
| packages/core/package.json | @opencode-ai/core | test, test:ci, typecheck | @kilocode/kilo-gateway, @effect/opentelemetry, @effect/platform-node, @npmcli/arborist, @npmcli/config, @opentelemetry/api, @opentelemetry/context-async-hooks, @opentelemetry/exporter-trace-otlp-http, @opentelemetry/sdk-trace-base, effect, cross-spawn, glob, mime-types, minimatch |
| packages/http-recorder/package.json | @opencode-ai/http-recorder | test, test:ci, typecheck | @effect/platform-node, effect |
| packages/kilo-console/package.json | @kilocode/kilo-console | dev, build, preview, test, typecheck | @kilocode/kilo-web-ui, @kilocode/sdk, @lottiefiles/dotlottie-web, @opencode-ai/ui, @solidjs/router, ghostty-web, solid-js, yaml |
| packages/kilo-docs/package.json | @kilocode/kilo-docs | dev, build, lint, start, test, typecheck | @docsearch/css, @docsearch/js, @markdoc/markdoc, @markdoc/next.js, @vscode/codicons, @xyflow/react, js-yaml, mermaid, next, posthog-js, prismjs, react, react-dom |
| packages/kilo-gateway/package.json | @kilocode/kilo-gateway | typecheck, build, test:ci | @kilocode/plugin, @kilocode/sdk, @ai-sdk/alibaba, @ai-sdk/anthropic, @ai-sdk/openai, @ai-sdk/openai-compatible, @ai-sdk/mistral, @openrouter/ai-sdk-provider, @clack/prompts, ai, open, zod |
| packages/kilo-i18n/package.json | @kilocode/kilo-i18n | typecheck |  |
| packages/kilo-indexing/package.json | @kilocode/kilo-indexing | typecheck, build, test | @aws-sdk/client-bedrock-runtime, @aws-sdk/credential-provider-ini, @kilocode/kilo-gateway, @kilocode/plugin, @lancedb/lancedb, @qdrant/js-client-rest, async-mutex, chokidar, effect, glob, hono, hono-openapi, ignore, minimatch |
| packages/kilo-jetbrains/package.json | @kilocode/kilo-jetbrains | build, build:production, typecheck, test, test:ci |  |
| packages/kilo-telemetry/package.json | @kilocode/kilo-telemetry | typecheck, build, test | posthog-node, @kilocode/kilo-gateway |
| packages/kilo-ui/package.json | @kilocode/kilo-ui | storybook, build-storybook, test:visual, test:visual:update | @kilocode/sdk, @kobalte/core, @opencode-ai/core, @pierre/diffs, @solid-primitives/lifecycle, diff, @solid-primitives/media, @solid-primitives/resize-observer, @solid-primitives/rootless, lucide-solid, motion, motion-dom, motion-utils, strip-ansi |
| packages/kilo-vscode/package.json | kilo-code | prepare:cli-binary, compile, watch, watch:esbuild, watch:tsc, watch:cli, package, compile-tests, watch-tests, pretest, check-types, check-types:webview, typecheck, check-types:extension, format, format:check | @anthropic-ai/sdk, fuzzysort, @kilocode/kilo-gateway, @kilocode/kilo-i18n, @kilocode/kilo-indexing, @kilocode/kilo-ui, @kilocode/sdk, @opencode-ai/ui, @pierre/diffs, @thisbeyond/solid-dnd, @xterm/addon-clipboard, @xterm/addon-fit, @xterm/addon-unicode-graphemes, @xterm/addon-web-links |
| packages/kilo-vscode/tests/package.json |  |  |  |
| packages/kilo-web-ui/package.json | @kilocode/kilo-web-ui | typecheck | @kobalte/core, @kilocode/kilo-ui, solid-js |
| packages/llm/package.json | @opencode-ai/llm | setup:recording-env, test, typecheck | @smithy/eventstream-codec, @smithy/util-utf8, aws4fetch, effect |
| packages/opencode/package.json | @kilocode/cli | typecheck, test, test:ci, test:httpapi, build, fix-node-pty, dev, dev:temporary, db | @actions/core, @actions/github, @agentclientprotocol/sdk, @ai-sdk/alibaba, @ai-sdk/amazon-bedrock, @ai-sdk/anthropic, @ai-sdk/azure, @ai-sdk/cerebras, @ai-sdk/cohere, @ai-sdk/deepinfra, @ai-sdk/gateway, @ai-sdk/google, @ai-sdk/google-vertex, @ai-sdk/groq |
| packages/plugin-atomic-chat/package.json | @kilocode/plugin-atomic-chat | typecheck, test, test:watch | @kilocode/plugin |
| packages/plugin/package.json | @kilocode/plugin | typecheck, build | @kilocode/sdk, effect, zod |
| packages/script/package.json | @opencode-ai/script |  | semver |
| packages/sdk/js/package.json | @kilocode/sdk | typecheck, build | cross-spawn |
| packages/storybook/package.json | @opencode-ai/storybook | storybook, build |  |
| packages/ui/package.json | @opencode-ai/ui | typecheck, test, test:ci, dev, generate:tailwind | @kobalte/core, @kilocode/sdk, @pierre/diffs, @shikijs/transformers, @solid-primitives/bounds, @solid-primitives/event-listener, @solid-primitives/media, @solid-primitives/resize-observer, @solidjs/meta, @solidjs/router, diff, dompurify, fuzzysort, katex |
| script/upstream/package.json | @kilocode/upstream-merge | merge, merge:dry-run, merge:report, transform:names, transform:imports, transform:strings, transform:all, versions, fix:markers, reset:upstream, find:candidates, keep-ours | ts-morph |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.changeset/README.md`
- `.opencode/glossary/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `github/README.md`
- `packages/containers/README.md`
- `packages/core/src/github-copilot/README.md`
- `packages/http-recorder/README.md`
- `packages/kilo-docs/docs/getting-started/devcontainer-persistence.md`
- `packages/kilo-docs/docs/getting-started/switching-from-cline.md`
- `packages/kilo-docs/lib/nav/contributing.ts`
- `packages/kilo-gateway/README.md`
- `packages/kilo-jetbrains/README.md`
- `packages/kilo-vscode/README.md`
- `packages/kilo-vscode/docs/agent-behaviour/mcp-server-creation.md`
- `packages/kilo-vscode/docs/agent-behaviour/modes-subtab-parity.md`
- `packages/kilo-vscode/docs/agent-behaviour/rules-workflows-subtab-parity.md`
- `packages/kilo-vscode/docs/chat-ui-features/browser-session-controls.md`
- `packages/kilo-vscode/docs/chat-ui-features/checkpoint-task-management.md`
- `packages/kilo-vscode/docs/chat-ui-features/mermaid-diagram-features.md`
- `packages/kilo-vscode/docs/chat-ui-features/message-editing-management.md`
- `packages/kilo-vscode/docs/chat-ui-features/special-content-types.md`
- `packages/kilo-vscode/docs/cli-side/architect-mode-plan-files.md`
- `packages/kilo-vscode/docs/cli-side/init-secret-check.md`
- `packages/kilo-vscode/docs/cli-side/plan-mode-over-prompting.md`
- `packages/kilo-vscode/docs/error-handling/autocomplete-settings-link.md`
- `packages/kilo-vscode/docs/error-handling/cli-startup-errors.md`
- `packages/kilo-vscode/docs/error-handling/extension-refresh-on-update.md`
- `packages/kilo-vscode/docs/error-handling/pre-release-switch-crash.md`
- `packages/kilo-vscode/docs/error-handling/propagate-cli-errors-to-ui.md`
- `packages/kilo-vscode/docs/features/expandable-mcp-tools.md`
- `packages/kilo-vscode/docs/features/file-attachments.md`
- `packages/kilo-vscode/docs/features/remember-last-model.md`
- `packages/kilo-vscode/docs/features/session-preview-improvements.md`
- `packages/kilo-vscode/docs/features/task-completion-notification.md`
- `packages/kilo-vscode/docs/infrastructure/changelog-on-update.md`
- `packages/kilo-vscode/docs/infrastructure/dedicated-output-channel.md`
- `packages/kilo-vscode/docs/infrastructure/http-request-timeouts.md`
- `packages/kilo-vscode/docs/infrastructure/openvsx-publish.md`
- `packages/kilo-vscode/docs/infrastructure/vscode-error-notifications.md`
- `packages/kilo-vscode/docs/mercury-next-edit-testing.html`
- `packages/kilo-vscode/docs/nes-examples/01_finish_function_body.py`
- `packages/kilo-vscode/docs/nes-examples/02_pattern_continuation.py`
- `packages/kilo-vscode/docs/nes-examples/03_typo_completion.py`
- `packages/kilo-vscode/docs/nes-examples/04_loop_body.py`
- `packages/kilo-vscode/docs/nes-examples/05_class_method.py`
- `packages/kilo-vscode/docs/nes-examples/07_multiline_rename_refactor.py`
- `packages/kilo-vscode/docs/nes-examples/08_mixed_insert_and_replace.py`
- `packages/kilo-vscode/docs/nes-examples/10_mid_token_completion.py`
- `packages/kilo-vscode/docs/nes-examples/11_fill_sibling_method.py`
- ... 30 more

### 에이전트 지침 후보

- `.kilo/skills/gh-issues/SKILL.md`
- `.kilo/skills/kilocode-merge-minimizer/SKILL.md`
- `.kilo/skills/release-jetbrains/SKILL.md`
- `.kilo/skills/release-jetbrains/script/dispatch-prepare.ts`
- `.kilo/skills/release-jetbrains/script/resolve-version.ts`
- `.kilo/skills/release-jetbrains/script/update-changelog.ts`
- `.kilo/skills/release-jetbrains/script/watch-publish.ts`
- `.kilocode/skills/vscode-visual-regression/SKILL.md`
- `.opencode/skills/effect/SKILL.md`
- `.opencode/skills/improve-codebase-architecture/DEEPENING.md`
- `.opencode/skills/improve-codebase-architecture/INTERFACE-DESIGN.md`
- `.opencode/skills/improve-codebase-architecture/LANGUAGE.md`
- `.opencode/skills/improve-codebase-architecture/SKILL.md`
- `AGENTS.md`
- `packages/kilo-console/src/routes/config/state/mcp.ts`
- `packages/kilo-console/src/styles/mcp.css`
- `packages/kilo-docs/.kilocode/mcp.json`
- `packages/kilo-docs/AGENTS.md`
- `packages/kilo-docs/pages/ai-providers/gemini.md`
- `packages/kilo-docs/pages/automate/mcp/mcp-vs-api.md`
- `packages/kilo-docs/pages/automate/mcp/overview.md`
- `packages/kilo-docs/pages/automate/mcp/server-transports.md`
- `packages/kilo-docs/pages/automate/mcp/using-in-cli.md`
- `packages/kilo-docs/pages/automate/mcp/using-in-kilo-code.md`
- `packages/kilo-docs/pages/automate/mcp/what-is-mcp.md`
- `packages/kilo-docs/pages/automate/tools/access-mcp-resource.md`
- `packages/kilo-docs/pages/automate/tools/use-mcp-tool.md`
- `packages/kilo-docs/pages/contributing/features/enterprise-mcp-controls.md`
- `packages/kilo-docs/pages/customize/skills.md`
- `packages/kilo-docs/public/img/enterprise-mcp-controls-org-user-install.png`
- `packages/kilo-docs/public/img/enterprise-mcp-controls-today.png`
- `packages/kilo-docs/public/img/enterprise-mcp-controls-with-ent-control.png`
- `packages/kilo-docs/public/img/screenshot-tests/kilo-vscode/visual-regression/composite-webview/mcp-tool-cards-chromium-linux.png`
- `packages/kilo-docs/public/img/screenshot-tests/kilo-vscode/visual-regression/composite-webview/mcp-tool-expanded-chromium-linux.png`
- `packages/kilo-docs/public/img/screenshot-tests/kilo-vscode/visual-regression/marketplace/installed-mcp-card-chromium-linux.png`
- `packages/kilo-docs/public/img/screenshot-tests/kilo-vscode/visual-regression/marketplace/installed-skill-card-chromium-linux.png`
- `packages/kilo-docs/public/img/screenshot-tests/kilo-vscode/visual-regression/marketplace/mcp-tab-empty-chromium-linux.png`
- `packages/kilo-docs/public/img/screenshot-tests/kilo-vscode/visual-regression/marketplace/mcp-tab-with-installed-chromium-linux.png`
- `packages/kilo-docs/public/img/screenshot-tests/kilo-vscode/visual-regression/marketplace/mcp-tab-with-items-chromium-linux.png`
- `packages/kilo-docs/public/img/screenshot-tests/kilo-vscode/visual-regression/marketplace/single-mcp-card-chromium-linux.png`
- `packages/kilo-docs/public/img/screenshot-tests/kilo-vscode/visual-regression/marketplace/single-skill-card-chromium-linux.png`
- `packages/kilo-docs/public/img/screenshot-tests/kilo-vscode/visual-regression/marketplace/skills-tab-empty-chromium-linux.png`
- `packages/kilo-docs/public/img/screenshot-tests/kilo-vscode/visual-regression/marketplace/skills-tab-with-installed-chromium-linux.png`
- `packages/kilo-docs/public/img/screenshot-tests/kilo-vscode/visual-regression/marketplace/skills-tab-with-items-chromium-linux.png`
- `packages/kilo-docs/public/img/screenshot-tests/kilo-vscode/visual-regression/settings/mcp-edit-view-local-chromium-linux.png`
- `packages/kilo-docs/public/img/screenshot-tests/kilo-vscode/visual-regression/settings/mcp-edit-view-local-with-env-chromium-linux.png`
- `packages/kilo-docs/public/img/screenshot-tests/kilo-vscode/visual-regression/settings/mcp-edit-view-remote-chromium-linux.png`
- `packages/kilo-docs/public/img/using-mcp-in-kilo-code/mcp-installed-config.png`
- `packages/kilo-docs/public/img/using-mcp-in-kilo-code/using-mcp-in-kilo-code-1.png`
- `packages/kilo-docs/public/img/using-mcp-in-kilo-code/using-mcp-in-kilo-code-2.png`
- `packages/kilo-docs/public/img/using-mcp-in-kilo-code/using-mcp-in-kilo-code-3.png`
- `packages/kilo-docs/public/img/using-mcp-in-kilo-code/using-mcp-in-kilo-code-4.png`
- `packages/kilo-docs/public/img/using-mcp-in-kilo-code/using-mcp-in-kilo-code-5.png`
- `packages/kilo-docs/public/img/using-mcp-in-kilo-code/using-mcp-in-kilo-code-6.png`
- `packages/kilo-docs/public/img/using-mcp-in-kilo-code/using-mcp-in-kilo-code-7.png`
- `packages/kilo-docs/public/img/using-mcp-in-kilo-code/using-mcp-in-kilo-code-8.png`
- `packages/kilo-docs/public/img/using-mcp-in-kilo-code/using-mcp-in-kilo-code-9.png`
- `packages/kilo-jetbrains/AGENTS.md`
- `packages/kilo-jetbrains/frontend/src/main/resources/icons/views/mcp.svg`
- `packages/kilo-jetbrains/frontend/src/main/resources/icons/views/mcp_dark.svg`
- `packages/kilo-vscode/AGENTS.md`
- `packages/kilo-vscode/docs/agent-behaviour/mcp-server-creation.md`
- `packages/kilo-vscode/docs/features/expandable-mcp-tools.md`
- `packages/kilo-vscode/docs/non-agent-features/mcp-and-mcp-hub.md`
- `packages/kilo-vscode/docs/non-agent-features/skills-system.md`
- `packages/kilo-vscode/src/kilo-provider/mcp-oauth.ts`
- `packages/llm/AGENTS.md`
- `packages/opencode/AGENTS.md`
- `packages/opencode/src/cli/cmd/debug/skill.ts`
- `packages/opencode/src/cli/cmd/mcp.ts`
- `packages/opencode/src/cli/cmd/tui/component/dialog-mcp.tsx`
- `packages/opencode/src/cli/cmd/tui/component/dialog-skill.tsx`
- `packages/opencode/src/cli/cmd/tui/feature-plugins/sidebar/mcp.tsx`
- `packages/opencode/src/config/mcp.ts`
- `packages/opencode/src/config/skills.ts`
- `packages/opencode/src/kilocode/cli/cmd/mcp.ts`
- `packages/opencode/src/kilocode/mcp-migrator.ts`
- `packages/opencode/src/kilocode/mcp-oauth-callback.ts`
- `packages/opencode/src/kilocode/skills/builtin.ts`
- `packages/opencode/src/kilocode/skills/kilo-config.md`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `.kilo/skills/gh-issues/SKILL.md`
- `.kilo/skills/kilocode-merge-minimizer/SKILL.md`
- `.kilo/skills/release-jetbrains/SKILL.md`
- `.kilo/skills/release-jetbrains/script/dispatch-prepare.ts`
- `.kilo/skills/release-jetbrains/script/resolve-version.ts`
- `.kilo/skills/release-jetbrains/script/update-changelog.ts`
- `.kilo/skills/release-jetbrains/script/watch-publish.ts`
- `.kilocode/skills/vscode-visual-regression/SKILL.md`
- `.opencode/skills/effect/SKILL.md`
- `.opencode/skills/improve-codebase-architecture/DEEPENING.md`
- `.opencode/skills/improve-codebase-architecture/INTERFACE-DESIGN.md`
- `.opencode/skills/improve-codebase-architecture/LANGUAGE.md`
- `.opencode/skills/improve-codebase-architecture/SKILL.md`
- `packages/kilo-vscode/src/commands/heap-snapshot.ts`
- `packages/kilo-vscode/src/commands/toggle-auto-approve.ts`
- `packages/opencode/specs/effect/error-boundaries-plan.md`
- `packages/opencode/specs/effect/errors.md`
- `packages/opencode/specs/effect/facades.md`
- `packages/opencode/specs/effect/guide.md`
- `packages/opencode/specs/effect/instance-context.md`
- `packages/opencode/specs/effect/loose-ends.md`
- `packages/opencode/specs/effect/migration.md`
- `packages/opencode/specs/effect/routes.md`
- `packages/opencode/specs/effect/schema.md`
- `packages/opencode/specs/effect/server-package.md`
- `packages/opencode/specs/effect/todo.md`
- `packages/opencode/specs/effect/tools.md`
- `packages/opencode/specs/openapi-translation-cleanup.md`
- `packages/opencode/specs/tui-plugins.md`
- `packages/opencode/specs/v2/api.ts`
- `packages/opencode/specs/v2/message-shape.md`
- `packages/opencode/specs/v2/notifications.md`
- `packages/opencode/specs/v2/tui-command-shim.md`
- `packages/opencode/src/kilocode/skills/builtin.ts`
- `packages/opencode/src/kilocode/skills/kilo-config.md`
- `packages/opencode/test/fixture/skills/agents-sdk/SKILL.md`
- `packages/opencode/test/fixture/skills/agents-sdk/references/callable.md`
- `packages/opencode/test/fixture/skills/cloudflare/SKILL.md`
- `packages/opencode/test/fixture/skills/index.json`
- `specs/project.md`
- `specs/v2/api.html`
- `specs/v2/provider-model.md`
- `specs/v2/session.md`
- `specs/v2/todo.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `packages/core/test/catalog.test.ts`
- `packages/core/test/effect/cross-spawn-spawner.test.ts`
- `packages/core/test/effect/observability.test.ts`
- `packages/core/test/filesystem/filesystem.test.ts`
- `packages/core/test/fixture/effect-flock-worker.ts`
- `packages/core/test/fixture/flock-worker.ts`
- `packages/core/test/fixture/tmpdir.ts`
- `packages/core/test/github-copilot/convert-to-copilot-messages.test.ts`
- `packages/core/test/github-copilot/copilot-chat-model.test.ts`
- `packages/core/test/global.test.ts`
- `packages/core/test/kilocode/effect-zod.test.ts`
- `packages/core/test/kilocode/filesystem-containment.test.ts`
- `packages/core/test/lib/effect.ts`
- `packages/core/test/models.test.ts`
- `packages/core/test/npm-config.test.ts`
- `packages/core/test/npm.test.ts`
- `packages/core/test/plugin/fixtures/provider-factory.ts`
- `packages/core/test/plugin/provider-alibaba.test.ts`
- `packages/core/test/plugin/provider-amazon-bedrock.test.ts`
- `packages/core/test/plugin/provider-anthropic.test.ts`
- `packages/core/test/plugin/provider-azure-cognitive-services.test.ts`
- `packages/core/test/plugin/provider-azure.test.ts`
- `packages/core/test/plugin/provider-cerebras.test.ts`
- `packages/core/test/plugin/provider-cloudflare-ai-gateway.test.ts`
- `packages/core/test/plugin/provider-cloudflare-workers-ai.test.ts`
- `packages/core/test/plugin/provider-cohere.test.ts`
- `packages/core/test/plugin/provider-deepinfra.test.ts`
- `packages/core/test/plugin/provider-dynamic.test.ts`
- `packages/core/test/plugin/provider-gateway.test.ts`
- `packages/core/test/plugin/provider-github-copilot.test.ts`
- `packages/core/test/plugin/provider-gitlab.test.ts`
- `packages/core/test/plugin/provider-google-vertex-anthropic.test.ts`
- `packages/core/test/plugin/provider-google-vertex.test.ts`
- `packages/core/test/plugin/provider-google.test.ts`
- `packages/core/test/plugin/provider-groq.test.ts`
- `packages/core/test/plugin/provider-helper.ts`
- `packages/core/test/plugin/provider-kilo.test.ts`
- `packages/core/test/plugin/provider-llmgateway.test.ts`
- `packages/core/test/plugin/provider-mistral.test.ts`
- `packages/core/test/plugin/provider-nvidia.test.ts`
- `packages/core/test/plugin/provider-openai-compatible.test.ts`
- `packages/core/test/plugin/provider-openai.test.ts`
- `packages/core/test/plugin/provider-opencode.test.ts`
- `packages/core/test/plugin/provider-openrouter.test.ts`
- `packages/core/test/plugin/provider-perplexity.test.ts`
- `packages/core/test/plugin/provider-sap-ai-core.test.ts`
- `packages/core/test/plugin/provider-togetherai.test.ts`
- `packages/core/test/plugin/provider-venice.test.ts`
- `packages/core/test/plugin/provider-vercel.test.ts`
- `packages/core/test/plugin/provider-xai.test.ts`
- `packages/core/test/plugin/provider-zenmux.test.ts`
- `packages/core/test/process/process.test.ts`
- `packages/core/test/util/effect-flock.test.ts`
- `packages/core/test/util/flock.test.ts`
- `packages/http-recorder/test/fixtures/recordings/record-replay/multi-step.json`
- `packages/http-recorder/test/fixtures/recordings/record-replay/retry.json`
- `packages/http-recorder/test/record-replay.test.ts`
- `packages/kilo-console/src/client.test.ts`
- `packages/kilo-console/src/shared/navigation.test.ts`
- `packages/kilo-docs/__tests__/heading.test.ts`
- `packages/kilo-docs/__tests__/previous-docs-redirects.spec.ts`
- `packages/kilo-docs/__tests__/sitemap.test.ts`
- `packages/kilo-gateway/test/api/embedding-models.test.ts`
- `packages/kilo-gateway/test/api/models.test.ts`
- `packages/kilo-gateway/test/api/url.test.ts`
- `packages/kilo-gateway/test/autocomplete.test.ts`
- `packages/kilo-gateway/test/cloud-sessions.test.ts`
- `packages/kilo-gateway/test/edit-prompt.test.ts`
- `packages/kilo-gateway/test/edit.test.ts`
- `packages/kilo-gateway/test/fim.test.ts`
- `packages/kilo-gateway/test/mistral-fim-endpoint.test.ts`
- `packages/kilo-gateway/test/provider.test.ts`
- `packages/kilo-gateway/test/responses.test.ts`
- `packages/kilo-indexing/test/kilocode/indexing/config-manager.test.ts`
- `packages/kilo-indexing/test/kilocode/indexing/detect.test.ts`
- `packages/kilo-indexing/test/kilocode/indexing/embedders/__helpers__/openai-mock.ts`
- `packages/kilo-indexing/test/kilocode/indexing/embedders/bedrock.test.ts`
- `packages/kilo-indexing/test/kilocode/indexing/embedders/gemini.test.ts`
- `packages/kilo-indexing/test/kilocode/indexing/embedders/kilo.test.ts`
- `packages/kilo-indexing/test/kilocode/indexing/embedders/mistral.test.ts`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/auto-docs.yml`
- `.github/workflows/beta.yml`
- `.github/workflows/check-forbidden-strings.yml`
- `.github/workflows/check-kilo-generated-artifacts.yml`
- `.github/workflows/check-md-table-padding.yml`
- `.github/workflows/check-opencode-annotations.yml`
- `.github/workflows/check-org-member.yml`
- `.github/workflows/close-issues.yml`
- `.github/workflows/close-stale-prs.yml`
- `.github/workflows/codeql-kotlin.yml`
- `.github/workflows/codeql.yml`
- `.github/workflows/containers.yml`
- `.github/workflows/disabled/compliance-close.yml.disabled`
- `.github/workflows/disabled/kilo.yml.disabled`
- `.github/workflows/disabled/nix-desktop.yml.disabled`
- `.github/workflows/disabled/notify-discord.yml.disabled`
- `.github/workflows/disabled/pr-management.yml.disabled`
- `.github/workflows/disabled/pr-standards.yml.disabled`
- `.github/workflows/disabled/publish-github-action.yml.disabled`
- `.github/workflows/disabled/release-github-action.yml.disabled`
- `.github/workflows/disabled/review.yml.disabled`
- `.github/workflows/disabled/stats.yml.disabled`
- `.github/workflows/disabled/storybook.yml.disabled`
- `.github/workflows/disabled/sync-zed-extension.yml.disabled`
- `.github/workflows/docs-build.yml`
- `.github/workflows/docs-check-links.yml`
- `.github/workflows/duplicate-issues.yml`
- `.github/workflows/generate.yml`
- `.github/workflows/kilo-auto-close.yml`
- `.github/workflows/nix-eval.yml`
- `.github/workflows/nix-hashes.yml`
- `.github/workflows/prepare-jetbrains-release.yml`
- `.github/workflows/publish-jetbrains.yml`
- `.github/workflows/publish.yml`
- `.github/workflows/smoke-test.yml`
- `.github/workflows/source-check-links.yml`
- `.github/workflows/test-vscode.yml`
- `.github/workflows/test.yml`
- `.github/workflows/triage.yml`
- `.github/workflows/typecheck.yml`
- `.github/workflows/visual-regression.yml`
- `.github/workflows/watch-opencode-releases.yml`
- `packages/containers/base/Dockerfile`
- `packages/containers/bun-node/Dockerfile`
- `packages/containers/publish/Dockerfile`
- `packages/containers/rust/Dockerfile`
- `packages/containers/tauri-linux/Dockerfile`
- `packages/opencode/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 2719 |
| .svg | 1302 |
| .tsx | 703 |
| .png | 529 |
| .md | 421 |
| .kt | 356 |
| .json | 198 |
| .css | 164 |
| .txt | 56 |
| .scm | 52 |
| .aac | 45 |
| .mp3 | 45 |
| .yml | 41 |
| .sql | 22 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `packages/ 내부 책임 분리`
- `specs/ 내부 책임 분리`
- `packages/ui/ 내부 책임 분리`
- `packages/ui/src/ 내부 책임 분리`
- `packages/opencode/ 내부 책임 분리`
- `.kilo/skills/gh-issues/SKILL.md 스펙/명령 의미`
- `.kilo/skills/kilocode-merge-minimizer/SKILL.md 스펙/명령 의미`
- `.kilo/skills/release-jetbrains/SKILL.md 스펙/명령 의미`
- `.kilo/skills/release-jetbrains/script/dispatch-prepare.ts 스펙/명령 의미`
- `.kilo/skills/release-jetbrains/script/resolve-version.ts 스펙/명령 의미`
- `bun.lock 실행 스크립트와 패키지 경계`
- `package.json 실행 스크립트와 패키지 경계`
- `packages/containers/base/Dockerfile 실행 스크립트와 패키지 경계`
- `packages/containers/bun-node/Dockerfile 실행 스크립트와 패키지 경계`
- `packages/containers/publish/Dockerfile 실행 스크립트와 패키지 경계`

