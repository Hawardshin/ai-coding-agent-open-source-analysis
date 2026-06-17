# google-gemini/gemini-cli 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/google-gemini__gemini-cli |
| remote | https://github.com/google-gemini/gemini-cli |
| HEAD | 1d2adf7 (2026-06-10) chore(release): bump version to 0.48.0-nightly.20260609.g3a13b8eeb (#27779) |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 2867 |
| dirs | 267 |
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
- 주요 heading: `Gemini CLI`, `🚀 Why Gemini CLI?`, `📦 Installation`, `Quick Install`, `Using npx (no installation required)`, `Create and activate a new environment`, `Install Gemini CLI globally via npm (inside the environment)`, `Release Channels`, `Preview`, `Stable`, `Nightly`, `📋 Key Features`, `Code Understanding & Generation`, `Automation & Integration`, `Advanced Capabilities`, `GitHub Integration`, `🔐 Authentication Options`, `Option 1: Sign in with Google (OAuth login using your Google Account)`

> Gemini CLI Gemini CLI is an open source AI agent that brings the power of Gemini directly into your terminal. It provides lightweight access to Gemini, giving you the most direct path from your prompt to our model. Learn all about Gemini CLI in our documentation. 🚀 Why Gemini CLI? 🎯 Free tier 60 requests/min and 1,000 requests/day with personal Google account. 🧠 Powerful Gemini 3 models Access to improved reasoning and 1M token context window. 🔧 Built in tools Google Search grounding, file operations, shell commands, web fetching. 🔌 Extensible MCP (Model Context Protocol) support for custom integrations. 💻 Terminal first Designed for developers who live in the command line. 🛡️ Open source Apache 2.0 licensed. 📦 Installation See Gemini CLI installation, execution, and releases for recommended system specifications and a detailed installation guide. Quick Install Run instantly with

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .allstar | dir |
| .dockerignore | file |
| .editorconfig | file |
| .gcp | dir |
| .gemini | dir |
| .geminiignore | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .husky | dir |
| .lycheeignore | file |
| .npmrc | file |
| .nvmrc | file |
| .prettierignore | file |
| .prettierrc.json | file |
| .vscode | dir |
| .yamllint.yml | file |
| CONTRIBUTING.md | file |
| Dockerfile | file |
| docs | dir |
| esbuild.config.js | file |
| eslint.config.js | file |
| evals | dir |
| GEMINI.md | file |
| integration-tests | dir |
| LICENSE | file |
| Makefile | file |
| memory-tests | dir |
| package-lock.json | file |
| package.json | file |
| packages | dir |
| perf-tests | dir |
| README.md | file |
| ROADMAP.md | file |
| schemas | dir |
| scripts | dir |
| sea | dir |
| SECURITY.md | file |
| third_party | dir |
| tools | dir |
| tsconfig.json | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| packages/ | 2309 |
| docs/ | 123 |
| integration-tests/ | 120 |
| .github/ | 72 |
| scripts/ | 65 |
| .gemini/ | 46 |
| evals/ | 45 |
| (root) | 24 |
| tools/ | 23 |
| perf-tests/ | 12 |
| memory-tests/ | 10 |
| .gcp/ | 5 |
| .vscode/ | 4 |
| third_party/ | 4 |
| sea/ | 2 |
| .allstar/ | 1 |
| .husky/ | 1 |
| schemas/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| packages/ | 2309 | preferred |
| docs/ | 123 | preferred |
| tools/ | 23 | preferred |
| scripts/ | 65 | preferred |
| packages/cli/ | 1271 | large |
| packages/cli/src/ | 1263 | large |
| packages/core/ | 915 | large |
| packages/core/src/ | 902 | large |
| integration-tests/ | 120 | large |
| .github/ | 72 | large |
| .gemini/ | 46 | large |
| .github/workflows/ | 46 | large |
| evals/ | 45 | large |
| packages/a2a-server/ | 41 | large |
| docs/cli/ | 39 | large |
| packages/a2a-server/src/ | 34 | large |
| .gemini/skills/ | 32 | large |
| packages/sdk/ | 32 | large |
| docs/assets/ | 24 | large |
| tools/gemini-cli-bot/ | 23 | large |
| packages/vscode-ide-companion/ | 22 | large |
| packages/test-utils/ | 17 | large |
| docs/tools/ | 13 | large |
| packages/sdk/src/ | 13 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `evals/tsconfig.json`
- `integration-tests/tsconfig.json`
- `memory-tests/tsconfig.json`
- `package.json`
- `packages/a2a-server/package.json`
- `packages/a2a-server/tsconfig.json`
- `packages/cli/package.json`
- `packages/cli/src/commands/extensions/examples/mcp-server/package.json`
- `packages/cli/tsconfig.json`
- `packages/core/package.json`
- `packages/core/tsconfig.json`
- `packages/devtools/package.json`
- `packages/devtools/tsconfig.json`
- `packages/sdk/package.json`
- `packages/sdk/tsconfig.json`
- `packages/test-utils/package.json`
- `packages/test-utils/tsconfig.json`
- `packages/vscode-ide-companion/package.json`
- `packages/vscode-ide-companion/tsconfig.json`
- `perf-tests/tsconfig.json`
- `third_party/get-ripgrep/package.json`
- `tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | @google/gemini-cli | start, start:prod, start:a2a-server, debug, deflake, deflake:test:integration:sandbox:none, deflake:test:integration:sandbox:docker, auth:npm, auth:docker, auth, generate, predocs:settings, schema:settings, docs:settings, docs:keybindings, build | ink, latest-version, node-fetch-native, proper-lockfile, punycode, simple-git |
| packages/a2a-server/package.json | @google/gemini-cli-a2a-server | build, start, lint, format, test, test:ci, typecheck | @a2a-js/sdk, @google-cloud/storage, @google/gemini-cli-core, express, fs-extra, strip-json-comments, tar, uuid, winston |
| packages/cli/package.json | @google/gemini-cli | build, start, debug, lint, format, test, test:ci, posttest, typecheck | @agentclientprotocol/sdk, @google/gemini-cli-core, @google/genai, @iarna/toml, @modelcontextprotocol/sdk, ansi-escapes, ansi-regex, chalk, cli-spinners, clipboardy, color-convert, command-exists, comment-json, diff |
| packages/cli/src/commands/extensions/examples/mcp-server/package.json | mcp-server-example |  | @modelcontextprotocol/sdk, zod |
| packages/core/package.json | @google/gemini-cli-core | bundle:browser-mcp, build, lint, format, test, test:ci, posttest, typecheck | @a2a-js/sdk, @bufbuild/protobuf, @google-cloud/logging, @google-cloud/opentelemetry-cloud-monitoring-exporter, @google-cloud/opentelemetry-cloud-trace-exporter, @google/genai, @grpc/grpc-js, @iarna/toml, @modelcontextprotocol/sdk, @opentelemetry/api, @opentelemetry/api-logs, @opentelemetry/core, @opentelemetry/exporter-logs-otlp-grpc, @opentelemetry/exporter-logs-otlp-http |
| packages/devtools/package.json | @google/gemini-cli-devtools | build, build:client | ws |
| packages/sdk/package.json | @google/gemini-cli-sdk | build, lint, format, test, test:ci, typecheck | @google/gemini-cli-core, zod, zod-to-json-schema |
| packages/test-utils/package.json | @google/gemini-cli-test-utils | build, typecheck | @google/gemini-cli-core, @lydell/node-pty, asciichart, strip-ansi, vitest |
| packages/vscode-ide-companion/package.json | gemini-cli-vscode-ide-companion | prepackage, build, build:dev, build:prod, generate:notices, prepare, check-types, lint, watch, watch:esbuild, watch:tsc, package, test, test:ci, validate:notices | @modelcontextprotocol/sdk, cors, express, zod |
| third_party/get-ripgrep/package.json | @lvce-editor/ripgrep | postinstall, test, test:watch, format | @lvce-editor/verror, execa, extract-zip, fs-extra, got, path-exists, tempy, xdg-basedir |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/admin/enterprise-controls.md`
- `docs/assets/connected_devtools.png`
- `docs/assets/gemini-screenshot.png`
- `docs/assets/monitoring-dashboard-logs.png`
- `docs/assets/monitoring-dashboard-metrics.png`
- `docs/assets/monitoring-dashboard-overview.png`
- `docs/assets/release_patch.png`
- `docs/assets/theme-ansi-dark.png`
- `docs/assets/theme-ansi-light.png`
- `docs/assets/theme-atom-one-dark.png`
- `docs/assets/theme-ayu-dark.png`
- `docs/assets/theme-ayu-light.png`
- `docs/assets/theme-custom.png`
- `docs/assets/theme-default-dark.png`
- `docs/assets/theme-default-light.png`
- `docs/assets/theme-dracula-dark.png`
- `docs/assets/theme-github-dark.png`
- `docs/assets/theme-github-light.png`
- `docs/assets/theme-google-light.png`
- `docs/assets/theme-holiday-dark.png`
- `docs/assets/theme-shades-of-purple-dark.png`
- `docs/assets/theme-solarized-dark.png`
- `docs/assets/theme-solarized-light.png`
- `docs/assets/theme-tokyonight-dark.png`
- `docs/assets/theme-xcode-light.png`
- `docs/changelogs/index.md`
- `docs/changelogs/latest.md`
- `docs/changelogs/preview.md`
- `docs/cli/acp-mode.md`
- `docs/cli/auto-memory.md`
- `docs/cli/checkpointing.md`
- `docs/cli/cli-reference.md`
- `docs/cli/creating-skills.md`
- `docs/cli/custom-commands.md`
- `docs/cli/enterprise.md`
- `docs/cli/gemini-ignore.md`
- `docs/cli/gemini-md.md`
- `docs/cli/generation-settings.md`
- `docs/cli/git-worktrees.md`
- `docs/cli/headless.md`
- `docs/cli/model-routing.md`
- `docs/cli/model-steering.md`
- `docs/cli/model.md`
- `docs/cli/notifications.md`
- `docs/cli/plan-mode.md`
- `docs/cli/rewind.md`
- `docs/cli/sandbox.md`
- `docs/cli/session-management.md`
- ... 30 more

### 에이전트 지침 후보

- `.gemini/skills/agent-tui/SKILL.md`
- `.gemini/skills/async-pr-review/SKILL.md`
- `.gemini/skills/async-pr-review/policy.toml`
- `.gemini/skills/async-pr-review/scripts/async-review.sh`
- `.gemini/skills/async-pr-review/scripts/check-async-review.sh`
- `.gemini/skills/behavioral-evals/SKILL.md`
- `.gemini/skills/behavioral-evals/assets/interactive_eval.ts.txt`
- `.gemini/skills/behavioral-evals/assets/standard_eval.ts.txt`
- `.gemini/skills/behavioral-evals/references/creating.md`
- `.gemini/skills/behavioral-evals/references/fixing.md`
- `.gemini/skills/behavioral-evals/references/promoting.md`
- `.gemini/skills/behavioral-evals/references/running.md`
- `.gemini/skills/ci/SKILL.md`
- `.gemini/skills/ci/scripts/ci.mjs`
- `.gemini/skills/code-reviewer/SKILL.md`
- `.gemini/skills/docs-changelog/SKILL.md`
- `.gemini/skills/docs-changelog/references/highlights_examples.md`
- `.gemini/skills/docs-changelog/references/index_template.md`
- `.gemini/skills/docs-changelog/references/latest_template.md`
- `.gemini/skills/docs-changelog/references/preview_template.md`
- `.gemini/skills/docs-writer/SKILL.md`
- `.gemini/skills/docs-writer/quota-limit-style-guide.md`
- `.gemini/skills/docs-writer/references/docs-auditing.md`
- `.gemini/skills/github-issue-creator/SKILL.md`
- `.gemini/skills/pr-address-comments/SKILL.md`
- `.gemini/skills/pr-address-comments/scripts/fetch-pr-info.js`
- `.gemini/skills/pr-creator/SKILL.md`
- `.gemini/skills/review-duplication/SKILL.md`
- `.gemini/skills/string-reviewer/SKILL.md`
- `.gemini/skills/string-reviewer/references/settings.md`
- `.gemini/skills/string-reviewer/references/word-list.md`
- `.gemini/skills/tui-tester/SKILL.md`
- `GEMINI.md`
- `docs/cli/creating-skills.md`
- `docs/cli/skills-best-practices.md`
- `docs/cli/skills.md`
- `docs/cli/tutorials/mcp-setup.md`
- `docs/cli/tutorials/skills-getting-started.md`
- `docs/cli/using-agent-skills.md`
- `docs/tools/activate-skill.md`
- `docs/tools/mcp-resources.md`
- `docs/tools/mcp-server.md`
- `evals/skill_extraction.eval.ts`
- `integration-tests/mcp-list-resources.responses`
- `integration-tests/mcp-read-resource.responses`
- `integration-tests/mcp-resources.responses`
- `integration-tests/mcp-resources.test.ts`
- `integration-tests/mcp_server_cyclic_schema.test.ts`
- `integration-tests/simple-mcp-server.test.ts`
- `integration-tests/skill-creator-scripts.test.ts`
- `integration-tests/skill-creator-vulnerabilities.test.ts`
- `integration-tests/test-mcp-server.ts`
- `integration-tests/test-mcp-support.responses`
- `integration-tests/test-mcp-support.test.ts`
- `packages/a2a-server/GEMINI.md`
- `packages/cli/GEMINI.md`
- `packages/cli/src/commands/extensions/examples/mcp-server/.gitignore`
- `packages/cli/src/commands/extensions/examples/mcp-server/README.md`
- `packages/cli/src/commands/extensions/examples/mcp-server/example.js`
- `packages/cli/src/commands/extensions/examples/mcp-server/gemini-extension.json`
- `packages/cli/src/commands/extensions/examples/mcp-server/package.json`
- `packages/cli/src/commands/extensions/examples/skills/.gitignore`
- `packages/cli/src/commands/extensions/examples/skills/gemini-extension.json`
- `packages/cli/src/commands/extensions/examples/skills/skills/greeter/SKILL.md`
- `packages/cli/src/commands/mcp.test.ts`
- `packages/cli/src/commands/mcp.ts`
- `packages/cli/src/commands/mcp/add.test.ts`
- `packages/cli/src/commands/mcp/add.ts`
- `packages/cli/src/commands/mcp/enableDisable.ts`
- `packages/cli/src/commands/mcp/list.test.ts`
- `packages/cli/src/commands/mcp/list.ts`
- `packages/cli/src/commands/mcp/remove.test.ts`
- `packages/cli/src/commands/mcp/remove.ts`
- `packages/cli/src/commands/skills.test.tsx`
- `packages/cli/src/commands/skills.tsx`
- `packages/cli/src/commands/skills/disable.test.ts`
- `packages/cli/src/commands/skills/disable.ts`
- `packages/cli/src/commands/skills/enable.test.ts`
- `packages/cli/src/commands/skills/enable.ts`
- `packages/cli/src/commands/skills/install.test.ts`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `.gemini/commands/code-guide.toml`
- `.gemini/commands/core.toml`
- `.gemini/commands/find-docs.toml`
- `.gemini/commands/frontend.toml`
- `.gemini/commands/full-context.toml`
- `.gemini/commands/github/cleanup-back-to-main.toml`
- `.gemini/commands/introspect.toml`
- `.gemini/commands/oncall/pr-review.toml`
- `.gemini/commands/prompt-suggest.toml`
- `.gemini/commands/review-and-fix.toml`
- `.gemini/commands/review-frontend.toml`
- `.gemini/commands/strict-development-rules.md`
- `.gemini/skills/agent-tui/SKILL.md`
- `.gemini/skills/async-pr-review/SKILL.md`
- `.gemini/skills/async-pr-review/policy.toml`
- `.gemini/skills/async-pr-review/scripts/async-review.sh`
- `.gemini/skills/async-pr-review/scripts/check-async-review.sh`
- `.gemini/skills/behavioral-evals/SKILL.md`
- `.gemini/skills/behavioral-evals/assets/interactive_eval.ts.txt`
- `.gemini/skills/behavioral-evals/assets/standard_eval.ts.txt`
- `.gemini/skills/behavioral-evals/references/creating.md`
- `.gemini/skills/behavioral-evals/references/fixing.md`
- `.gemini/skills/behavioral-evals/references/promoting.md`
- `.gemini/skills/behavioral-evals/references/running.md`
- `.gemini/skills/ci/SKILL.md`
- `.gemini/skills/ci/scripts/ci.mjs`
- `.gemini/skills/code-reviewer/SKILL.md`
- `.gemini/skills/docs-changelog/SKILL.md`
- `.gemini/skills/docs-changelog/references/highlights_examples.md`
- `.gemini/skills/docs-changelog/references/index_template.md`
- `.gemini/skills/docs-changelog/references/latest_template.md`
- `.gemini/skills/docs-changelog/references/preview_template.md`
- `.gemini/skills/docs-writer/SKILL.md`
- `.gemini/skills/docs-writer/quota-limit-style-guide.md`
- `.gemini/skills/docs-writer/references/docs-auditing.md`
- `.gemini/skills/github-issue-creator/SKILL.md`
- `.gemini/skills/pr-address-comments/SKILL.md`
- `.gemini/skills/pr-address-comments/scripts/fetch-pr-info.js`
- `.gemini/skills/pr-creator/SKILL.md`
- `.gemini/skills/review-duplication/SKILL.md`
- `.gemini/skills/string-reviewer/SKILL.md`
- `.gemini/skills/string-reviewer/references/settings.md`
- `.gemini/skills/string-reviewer/references/word-list.md`
- `.gemini/skills/tui-tester/SKILL.md`
- `packages/a2a-server/src/commands/command-registry.test.ts`
- `packages/a2a-server/src/commands/command-registry.ts`
- `packages/a2a-server/src/commands/extensions.test.ts`
- `packages/a2a-server/src/commands/extensions.ts`
- `packages/a2a-server/src/commands/init.test.ts`
- `packages/a2a-server/src/commands/init.ts`
- `packages/a2a-server/src/commands/memory.test.ts`
- `packages/a2a-server/src/commands/memory.ts`
- `packages/a2a-server/src/commands/restore.test.ts`
- `packages/a2a-server/src/commands/restore.ts`
- `packages/a2a-server/src/commands/types.ts`
- `packages/cli/src/acp/commands/about.ts`
- `packages/cli/src/acp/commands/commandRegistry.ts`
- `packages/cli/src/acp/commands/extensions.test.ts`
- `packages/cli/src/acp/commands/extensions.ts`
- `packages/cli/src/acp/commands/help.test.ts`
- `packages/cli/src/acp/commands/help.ts`
- `packages/cli/src/acp/commands/init.ts`
- `packages/cli/src/acp/commands/memory.ts`
- `packages/cli/src/acp/commands/restore.test.ts`
- `packages/cli/src/acp/commands/restore.ts`
- `packages/cli/src/acp/commands/types.ts`
- `packages/cli/src/commands/extensions.test.tsx`
- `packages/cli/src/commands/extensions.tsx`
- `packages/cli/src/commands/extensions/configure.test.ts`
- `packages/cli/src/commands/extensions/configure.ts`
- `packages/cli/src/commands/extensions/disable.test.ts`
- `packages/cli/src/commands/extensions/disable.ts`
- `packages/cli/src/commands/extensions/enable.test.ts`
- `packages/cli/src/commands/extensions/enable.ts`
- `packages/cli/src/commands/extensions/examples/custom-commands/.gitignore`
- `packages/cli/src/commands/extensions/examples/custom-commands/commands/fs/grep-code.toml`
- `packages/cli/src/commands/extensions/examples/custom-commands/gemini-extension.json`
- `packages/cli/src/commands/extensions/examples/exclude-tools/.gitignore`
- `packages/cli/src/commands/extensions/examples/exclude-tools/gemini-extension.json`
- `packages/cli/src/commands/extensions/examples/hooks/.gitignore`
- `packages/cli/src/commands/extensions/examples/hooks/gemini-extension.json`
- `packages/cli/src/commands/extensions/examples/hooks/hooks/hooks.json`
- `packages/cli/src/commands/extensions/examples/hooks/scripts/on-start.js`
- `packages/cli/src/commands/extensions/examples/mcp-server/.gitignore`
- `packages/cli/src/commands/extensions/examples/mcp-server/README.md`
- `packages/cli/src/commands/extensions/examples/mcp-server/example.js`
- `packages/cli/src/commands/extensions/examples/mcp-server/gemini-extension.json`
- `packages/cli/src/commands/extensions/examples/mcp-server/package.json`
- `packages/cli/src/commands/extensions/examples/policies/README.md`
- `packages/cli/src/commands/extensions/examples/policies/gemini-extension.json`
- `packages/cli/src/commands/extensions/examples/policies/policies/policies.toml`
- `packages/cli/src/commands/extensions/examples/skills/.gitignore`
- `packages/cli/src/commands/extensions/examples/skills/gemini-extension.json`
- `packages/cli/src/commands/extensions/examples/skills/skills/greeter/SKILL.md`
- `packages/cli/src/commands/extensions/examples/themes-example/README.md`
- `packages/cli/src/commands/extensions/examples/themes-example/gemini-extension.json`
- `packages/cli/src/commands/extensions/install.test.ts`
- `packages/cli/src/commands/extensions/install.ts`
- `packages/cli/src/commands/extensions/link.test.ts`
- `packages/cli/src/commands/extensions/link.ts`
- ... 40 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `evals/test-helper.test.ts`
- `integration-tests/acp-env-auth.test.ts`
- `integration-tests/acp-telemetry.test.ts`
- `integration-tests/api-resilience.test.ts`
- `integration-tests/browser-agent-localhost.test.ts`
- `integration-tests/browser-agent.test.ts`
- `integration-tests/browser-policy.test.ts`
- `integration-tests/checkpointing.test.ts`
- `integration-tests/clipboard-linux.test.ts`
- `integration-tests/concurrency-limit.test.ts`
- `integration-tests/context-compress-interactive.test.ts`
- `integration-tests/context-fidelity.test.ts`
- `integration-tests/ctrl-c-exit.test.ts`
- `integration-tests/deprecation-warnings.test.ts`
- `integration-tests/extensions-install.test.ts`
- `integration-tests/extensions-reload.test.ts`
- `integration-tests/file-system-interactive.test.ts`
- `integration-tests/file-system.test.ts`
- `integration-tests/flicker.test.ts`
- `integration-tests/google_web_search.test.ts`
- `integration-tests/hooks-agent-flow.test.ts`
- `integration-tests/hooks-system.test.ts`
- `integration-tests/json-output.test.ts`
- `integration-tests/list_directory.test.ts`
- `integration-tests/mcp-resources.test.ts`
- `integration-tests/mcp_server_cyclic_schema.test.ts`
- `integration-tests/mixed-input-crash.test.ts`
- `integration-tests/parallel-tools.test.ts`
- `integration-tests/plan-mode.test.ts`
- `integration-tests/policy-headless.test.ts`
- `integration-tests/read_many_files.test.ts`
- `integration-tests/replace.test.ts`
- `integration-tests/resume-gc.test.ts`
- `integration-tests/resume_repro.test.ts`
- `integration-tests/ripgrep-real.test.ts`
- `integration-tests/run_shell_command.test.ts`
- `integration-tests/shell-background.test.ts`
- `integration-tests/simple-mcp-server.test.ts`
- `integration-tests/skill-creator-scripts.test.ts`
- `integration-tests/skill-creator-vulnerabilities.test.ts`
- `integration-tests/stdin-context.test.ts`
- `integration-tests/stdout-stderr-output.test.ts`
- `integration-tests/symlink-install.test.ts`
- `integration-tests/telemetry.test.ts`
- `integration-tests/test-mcp-support.test.ts`
- `integration-tests/user-policy.test.ts`
- `integration-tests/utf-bom-encoding.test.ts`
- `integration-tests/voice-mode.test.ts`
- `integration-tests/write_file.test.ts`
- `memory-tests/memory-usage.test.ts`
- `packages/a2a-server/src/agent/executor.test.ts`
- `packages/a2a-server/src/agent/race-condition.test.ts`
- `packages/a2a-server/src/agent/task-event-driven.test.ts`
- `packages/a2a-server/src/agent/task.test.ts`
- `packages/a2a-server/src/commands/command-registry.test.ts`
- `packages/a2a-server/src/commands/extensions.test.ts`
- `packages/a2a-server/src/commands/init.test.ts`
- `packages/a2a-server/src/commands/memory.test.ts`
- `packages/a2a-server/src/commands/restore.test.ts`
- `packages/a2a-server/src/config/config.test.ts`
- `packages/a2a-server/src/config/settings.test.ts`
- `packages/a2a-server/src/http/app.test.ts`
- `packages/a2a-server/src/http/endpoints.test.ts`
- `packages/a2a-server/src/persistence/gcs.test.ts`
- `packages/cli/src/acp/acpCommandHandler.test.ts`
- `packages/cli/src/acp/acpErrors.test.ts`
- `packages/cli/src/acp/acpFileSystemService.test.ts`
- `packages/cli/src/acp/acpResume.test.ts`
- `packages/cli/src/acp/acpRpcDispatcher.test.ts`
- `packages/cli/src/acp/acpSession.test.ts`
- `packages/cli/src/acp/acpSessionManager.test.ts`
- `packages/cli/src/acp/commands/extensions.test.ts`
- `packages/cli/src/acp/commands/help.test.ts`
- `packages/cli/src/acp/commands/restore.test.ts`
- `packages/cli/src/commands/extensions.test.tsx`
- `packages/cli/src/commands/extensions/configure.test.ts`
- `packages/cli/src/commands/extensions/disable.test.ts`
- `packages/cli/src/commands/extensions/enable.test.ts`
- `packages/cli/src/commands/extensions/install.test.ts`
- `packages/cli/src/commands/extensions/link.test.ts`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/agent-session-drift-check.yml`
- `.github/workflows/build-unsigned-mac-binaries.yml`
- `.github/workflows/chained_e2e.yml`
- `.github/workflows/ci.yml`
- `.github/workflows/community-report.yml`
- `.github/workflows/deflake.yml`
- `.github/workflows/docs-audit.yml`
- `.github/workflows/docs-page-action.yml`
- `.github/workflows/docs-rebuild.yml`
- `.github/workflows/eval-pr.yml`
- `.github/workflows/eval.yml`
- `.github/workflows/evals-nightly.yml`
- `.github/workflows/gemini-automated-issue-dedup.yml`
- `.github/workflows/gemini-automated-issue-triage.yml`
- `.github/workflows/gemini-cli-bot-brain.yml`
- `.github/workflows/gemini-cli-bot-pulse.yml`
- `.github/workflows/gemini-lifecycle-manager.yml`
- `.github/workflows/gemini-scheduled-issue-dedup.yml`
- `.github/workflows/gemini-scheduled-issue-triage.yml`
- `.github/workflows/gemini-scheduled-pr-triage.yml`
- `.github/workflows/gemini-self-assign-issue.yml`
- `.github/workflows/issue-opened-labeler.yml`
- `.github/workflows/label-backlog-child-issues.yml`
- `.github/workflows/label-workstream-rollup.yml`
- `.github/workflows/links.yml`
- `.github/workflows/memory-nightly.yml`
- `.github/workflows/perf-nightly.yml`
- `.github/workflows/pr-rate-limiter.yaml`
- `.github/workflows/pr-size-labeler-batch-run.yml`
- `.github/workflows/pr-size-labeler.yml`
- `.github/workflows/release-change-tags.yml`
- `.github/workflows/release-manual.yml`
- `.github/workflows/release-nightly.yml`
- `.github/workflows/release-notes.yml`
- `.github/workflows/release-patch-0-from-comment.yml`
- `.github/workflows/release-patch-1-create-pr.yml`
- `.github/workflows/release-patch-2-trigger.yml`
- `.github/workflows/release-patch-3-release.yml`
- `.github/workflows/release-promote.yml`
- `.github/workflows/release-rollback.yml`
- `.github/workflows/release-sandbox.yml`
- `.github/workflows/smoke-test.yml`
- `.github/workflows/test-build-binary.yml`
- `.github/workflows/trigger_e2e.yml`
- `.github/workflows/unassign-inactive-assignees.yml`
- `.github/workflows/verify-release.yml`
- `Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 1694 |
| .tsx | 418 |
| .md | 156 |
| .snap | 120 |
| .svg | 98 |
| .responses | 72 |
| .yml | 64 |
| .json | 59 |
| .js | 57 |
| .png | 25 |
| .toml | 24 |
| .cjs | 11 |
| .sh | 9 |
| .html | 8 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `packages/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `tools/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `packages/cli/ 내부 책임 분리`
- `.gemini/commands/code-guide.toml 스펙/명령 의미`
- `.gemini/commands/core.toml 스펙/명령 의미`
- `.gemini/commands/find-docs.toml 스펙/명령 의미`
- `.gemini/commands/frontend.toml 스펙/명령 의미`
- `.gemini/commands/full-context.toml 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `evals/tsconfig.json 실행 스크립트와 패키지 경계`
- `integration-tests/tsconfig.json 실행 스크립트와 패키지 경계`
- `memory-tests/tsconfig.json 실행 스크립트와 패키지 경계`
- `package.json 실행 스크립트와 패키지 경계`

