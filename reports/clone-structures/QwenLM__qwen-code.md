# QwenLM/qwen-code 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/QwenLM__qwen-code |
| remote | https://github.com/QwenLM/qwen-code |
| HEAD | be62f0e (2026-06-10) fix(core): give complete intentional-sleep guidance on first rejection for sleep chains (#4948) |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 3114 |
| dirs | 460 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `🎉 News`, `Why Qwen Code?`, `Installation`, `Quick Install (Recommended)`, `Manual Installation`, `Quick Start`, `Start Qwen Code (interactive)`, `Then, in the session:`, `🦞 Use Qwen Code for Coding Tasks in Claw`, `Authentication`, `Usage`, `→ qwen serve listening on http://127.0.0.1:4170 (mode=http-bridge)`, `Commands & Shortcuts`, `Session Commands`, `Keyboard Shortcuts`, `Configuration`, `Benchmark Results`, `Terminal-Bench Performance`

> <div align="center" <a href="https //trendshift.io/repositories/15287" target=" blank" <img src="https //trendshift.io/api/badge/repositories/15287" alt="QwenLM%2Fqwen code Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a An open source AI agent that lives in your terminal. <a href="https //qwenlm.github.io/qwen code docs/zh/users/overview" 中文</a <a href="https //qwenlm.github.io/qwen code docs/de/users/overview" Deutsch</a <a href="https //qwenlm.github.io/qwen code docs/fr/users/overview" français</a <a href="https //qwenlm.github.io/qwen code docs/ja/users/overview" 日本語</a <a href="https //qwenlm.github.io/qwen code docs/ru/users/overview" Русский</a <a href="https //qwenlm.github.io/qwen code docs/pt BR/users/overview" Português (Brasil)</a </div 🎉 News 2026 04 15 Qwen OAuth free tier has been discontinued. To continue using Qwen Code, switch to Alibaba Clo

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .dockerignore | file |
| .editorconfig | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .husky | dir |
| .npmrc | file |
| .nvmrc | file |
| .prettierignore | file |
| .prettierrc.json | file |
| .qwen | dir |
| .vscode | dir |
| .yamllint.yml | file |
| AGENTS.md | file |
| CHANGELOG.md | file |
| CONTRIBUTING.md | file |
| Dockerfile | file |
| docs | dir |
| docs-site | dir |
| esbuild.config.js | file |
| eslint-rules | dir |
| eslint.config.js | file |
| integration-tests | dir |
| LICENSE | file |
| Makefile | file |
| package-lock.json | file |
| package.json | file |
| packages | dir |
| README.md | file |
| scripts | dir |
| SECURITY.md | file |
| tsconfig.json | file |
| vitest.config.ts | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| packages/ | 2674 |
| docs/ | 153 |
| integration-tests/ | 107 |
| scripts/ | 62 |
| .qwen/ | 50 |
| .github/ | 27 |
| (root) | 23 |
| docs-site/ | 12 |
| .vscode/ | 4 |
| .husky/ | 1 |
| eslint-rules/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| packages/ | 2674 | preferred |
| docs/ | 153 | preferred |
| scripts/ | 62 | preferred |
| packages/cli/ | 1134 | large |
| packages/cli/src/ | 1129 | large |
| packages/core/ | 842 | large |
| packages/core/src/ | 828 | large |
| packages/sdk-java/ | 198 | large |
| packages/vscode-ide-companion/ | 161 | large |
| packages/webui/ | 144 | large |
| packages/vscode-ide-companion/src/ | 137 | large |
| packages/webui/src/ | 128 | large |
| packages/sdk-java/client/ | 123 | large |
| integration-tests/ | 107 | large |
| packages/sdk-java/qwencode/ | 75 | large |
| packages/channels/ | 68 | large |
| docs/users/ | 61 | large |
| .qwen/ | 50 | large |
| packages/sdk-typescript/ | 47 | large |
| .qwen/skills/ | 40 | large |
| packages/web-templates/ | 39 | large |
| docs/design/ | 36 | large |
| packages/web-templates/src/ | 36 | large |
| docs/developers/ | 33 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `docs-site/package.json`
- `integration-tests/concurrent-runner/examples/toy-project/package.json`
- `integration-tests/concurrent-runner/requirements.txt`
- `integration-tests/fixtures/idle-mcp/package.json`
- `integration-tests/terminal-bench/ci-tasks/hello-world/Dockerfile`
- `integration-tests/terminal-bench/ci-tasks/swe-bench-astropy-1/Dockerfile`
- `integration-tests/terminal-capture/package.json`
- `integration-tests/tsconfig.json`
- `package.json`
- `packages/acp-bridge/package.json`
- `packages/acp-bridge/tsconfig.json`
- `packages/channels/base/package.json`
- `packages/channels/base/tsconfig.json`
- `packages/channels/dingtalk/package.json`
- `packages/channels/dingtalk/tsconfig.json`
- `packages/channels/feishu/package.json`
- `packages/channels/feishu/tsconfig.json`
- `packages/channels/plugin-example/package.json`
- `packages/channels/plugin-example/tsconfig.json`
- `packages/channels/telegram/package.json`
- `packages/channels/telegram/tsconfig.json`
- `packages/channels/weixin/package.json`
- `packages/channels/weixin/tsconfig.json`
- `packages/cli/package.json`
- `packages/cli/src/commands/extensions/examples/mcp-server/package.json`
- `packages/cli/src/commands/extensions/examples/mcp-server/tsconfig.json`
- `packages/cli/tsconfig.json`
- `packages/core/package.json`
- `packages/core/tsconfig.json`
- `packages/sdk-python/pyproject.toml`
- `packages/sdk-typescript/package.json`
- `packages/sdk-typescript/tsconfig.json`
- `packages/vscode-ide-companion/package.json`
- `packages/vscode-ide-companion/tsconfig.json`
- `packages/web-templates/package.json`
- `packages/web-templates/src/export-html/package.json`
- `packages/web-templates/src/export-html/tsconfig.json`
- `packages/web-templates/src/insight/package.json`
- `packages/web-templates/src/insight/tsconfig.json`
- `packages/web-templates/tsconfig.json`
- `packages/webui/package.json`
- `packages/webui/tsconfig.json`
- `packages/webui/vite.config.ts`
- `tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| docs-site/package.json | docs-site | link, clean, dev, test | next, nextra, nextra-theme-docs, react, react-dom |
| integration-tests/concurrent-runner/examples/toy-project/package.json | toy-project | build |  |
| integration-tests/fixtures/idle-mcp/package.json | idle-mcp |  |  |
| integration-tests/terminal-capture/package.json | @qwen-code/terminal-capture | capture, capture:about, capture:all, capture:markdown-rendering | @lydell/node-pty, @xterm/xterm, playwright, strip-ansi |
| package.json | @qwen-code/qwen-code | start, dev, debug, generate, generate:settings-schema, build, build-and-start, build:vscode, build:all, build:packages, build:sandbox, bundle, test, test:ci, test:scripts, test:e2e | @testing-library/dom, ink, simple-git |
| packages/acp-bridge/package.json | @qwen-code/acp-bridge | build, lint, format, test, test:ci, typecheck | @agentclientprotocol/sdk, @qwen-code/qwen-code-core |
| packages/channels/base/package.json | @qwen-code/channel-base | build | @agentclientprotocol/sdk |
| packages/channels/dingtalk/package.json | @qwen-code/channel-dingtalk | build | @qwen-code/channel-base, dingtalk-stream-sdk-nodejs |
| packages/channels/feishu/package.json | @qwen-code/channel-feishu | build | @qwen-code/channel-base, @larksuiteoapi/node-sdk |
| packages/channels/plugin-example/package.json | @qwen-code/channel-plugin-example | build, prepublishOnly | @qwen-code/channel-base, ws |
| packages/channels/telegram/package.json | @qwen-code/channel-telegram | build | @qwen-code/channel-base, grammy, https-proxy-agent, telegram-markdown-formatter |
| packages/channels/weixin/package.json | @qwen-code/channel-weixin | build | @qwen-code/channel-base |
| packages/cli/package.json | @qwen-code/qwen-code | build, start, debug, lint, format, test, test:ci, typecheck, check-i18n | @agentclientprotocol/sdk, @google/genai, @iarna/toml, @modelcontextprotocol/sdk, @qwen-code/acp-bridge, @qwen-code/channel-base, @qwen-code/channel-dingtalk, @qwen-code/channel-feishu, @qwen-code/channel-telegram, @qwen-code/channel-weixin, @qwen-code/qwen-code-core, @qwen-code/web-templates, @types/update-notifier, ansi-regex |
| packages/cli/src/commands/extensions/examples/mcp-server/package.json | mcp-server-example | build | @modelcontextprotocol/sdk, zod |
| packages/core/package.json | @qwen-code/qwen-code-core | build, lint, format, test, test:ci, typecheck, postinstall | @anthropic-ai/sdk, @google/genai, @iarna/toml, @modelcontextprotocol/sdk, @opentelemetry/api, @opentelemetry/exporter-logs-otlp-grpc, @opentelemetry/exporter-logs-otlp-http, @opentelemetry/exporter-metrics-otlp-grpc, @opentelemetry/exporter-metrics-otlp-http, @opentelemetry/exporter-trace-otlp-grpc, @opentelemetry/exporter-trace-otlp-http, @opentelemetry/instrumentation-http, @opentelemetry/instrumentation-undici, @opentelemetry/sdk-node |
| packages/sdk-typescript/package.json | @qwen-code/sdk | build, bundle:cli, test, test:ci, test:watch, test:coverage, lint, lint:fix, typecheck, clean, prepublishOnly, prepack | @modelcontextprotocol/sdk, zod |
| packages/vscode-ide-companion/package.json | qwen-code-vscode-ide-companion | prepackage, build, build:dev, build:prod, generate:notices, prepare, check-types, lint, watch, watch:esbuild, watch:tsc, package, test, test:ci, validate:notices | @agentclientprotocol/sdk, @qwen-code/sdk, @qwen-code/webui, @modelcontextprotocol/sdk, cors, dotenv, express, markdown-it, react, react-dom, semver, zod |
| packages/web-templates/package.json | @qwen-code/web-templates | build, build:templates |  |
| packages/web-templates/src/export-html/package.json | @qwen-code/cli-export-html | build | @qwen-code/webui |
| packages/web-templates/src/insight/package.json | @qwen-code/cli-insight | dev, build |  |
| packages/webui/package.json | @qwen-code/webui | dev, build, typecheck, lint, lint:fix, storybook, build-storybook | markdown-it |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| packages/sdk-python/pyproject.toml | qwen-code-sdk | false | false | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs-site/README.md`
- `docs/_meta.ts`
- `docs/design/2026-05-15-async-memory-recall-design.md`
- `docs/design/adaptive-output-token-escalation/adaptive-output-token-escalation-design.md`
- `docs/design/auth/motivation.md`
- `docs/design/auto-compaction-threshold-redesign.md`
- `docs/design/auto-memory/memory-system.md`
- `docs/design/channels/channels-design.md`
- `docs/design/compact-mode/compact-mode-design.md`
- `docs/design/compaction-image-stripping/compaction-image-stripping-design.md`
- `docs/design/custom-api-key-auth-wizard-prd.md`
- `docs/design/customize-banner-area/customize-banner-area.md`
- `docs/design/customize-banner-area/customize-banner-area.zh-CN.md`
- `docs/design/fork-subagent/fork-subagent-design.md`
- `docs/design/markdown-syntax-extension.md`
- `docs/design/openrouter-auth-and-models.md`
- `docs/design/prompt-suggestion/prompt-suggestion-design.md`
- `docs/design/prompt-suggestion/prompt-suggestion-implementation.md`
- `docs/design/prompt-suggestion/speculation-design.md`
- `docs/design/rt-optimization/reduce-rounds-via-skill-design.md`
- `docs/design/rt-optimization/rt-optimization-design.md`
- `docs/design/session-recap/session-recap-design.md`
- `docs/design/session-title/session-title-design.md`
- `docs/design/skill-nudge/skill-nudge.md`
- `docs/design/slash-command/compare.md`
- `docs/design/slash-command/phase1-technical-design.md`
- `docs/design/slash-command/phase2-technical-design.md`
- `docs/design/slash-command/phase3-technical-design.md`
- `docs/design/slash-command/roadmap.md`
- `docs/design/structured-output/structured-output.md`
- `docs/design/telemetry-llm-request-timing-design.md`
- `docs/design/telemetry-outbound-propagation-design.md`
- `docs/design/telemetry-resource-attributes-design.md`
- `docs/design/telemetry-subagent-spans-design.md`
- `docs/design/tool-use-summary/tool-use-summary-design.md`
- `docs/design/virtual-viewport/README.md`
- `docs/design/workflow-tracing-gaps.md`
- `docs/design/worktree.md`
- `docs/developers/_meta.ts`
- `docs/developers/architecture.md`
- `docs/developers/channel-plugins.md`
- `docs/developers/contributing.md`
- `docs/developers/daemon-client-adapters/channel-web.md`
- `docs/developers/daemon-client-adapters/ide.md`
- `docs/developers/daemon-client-adapters/tui.md`
- `docs/developers/development/_meta.ts`
- `docs/developers/development/deployment.md`
- `docs/developers/development/integration-tests.md`
- ... 30 more

### 에이전트 지침 후보

- `.qwen/skills/agent-reproduce-align/SKILL.md`
- `.qwen/skills/agent-reproduce-align/references/alignment-workflow.md`
- `.qwen/skills/agent-reproduce-align/scripts/compare_traces.py`
- `.qwen/skills/agent-reproduce-align/scripts/normalize_trace.py`
- `.qwen/skills/agent-reproduce-align/scripts/run_pair_capture.sh`
- `.qwen/skills/agent-reproduce-feature/SKILL.md`
- `.qwen/skills/agent-reproduce-feature/references/capture-workflow.md`
- `.qwen/skills/agent-reproduce-feature/scripts/capture_state.py`
- `.qwen/skills/agent-reproduce-feature/scripts/llm_dump.py`
- `.qwen/skills/agent-reproduce-feature/scripts/run_tmux_capture.sh`
- `.qwen/skills/agent-reproduce-feature/scripts/run_with_mitm.sh`
- `.qwen/skills/bugfix/SKILL.md`
- `.qwen/skills/codegraph/SKILL.md`
- `.qwen/skills/codegraph/bug-analysis.md`
- `.qwen/skills/codegraph/evals/evals.json`
- `.qwen/skills/codegraph/patterns.md`
- `.qwen/skills/codegraph/pr-analysis.md`
- `.qwen/skills/codegraph/schema.md`
- `.qwen/skills/docs-audit-and-refresh/SKILL.md`
- `.qwen/skills/docs-audit-and-refresh/references/audit-checklist.md`
- `.qwen/skills/docs-update-from-diff/SKILL.md`
- `.qwen/skills/docs-update-from-diff/references/docs-surface.md`
- `.qwen/skills/e2e-testing/SKILL.md`
- `.qwen/skills/e2e-testing/references/mcp-testing.md`
- `.qwen/skills/e2e-testing/scripts/mcp-test-server.js`
- `.qwen/skills/e2e-testing/scripts/token-stats.py`
- `.qwen/skills/feat-dev/SKILL.md`
- `.qwen/skills/memory-leak-debug/SKILL.md`
- `.qwen/skills/memory-leak-debug/examples/react-reconciler-performance-measure-leak.md`
- `.qwen/skills/memory-leak-debug/scripts/find-leaf-node.sh`
- `.qwen/skills/openwork-desktop-sync/SKILL.md`
- `.qwen/skills/qwen-code-claw/SKILL.md`
- `.qwen/skills/structured-debugging/SKILL.md`
- `.qwen/skills/structured-debugging/examples/headless-bg-agent-empty-stdout.md`
- `.qwen/skills/terminal-capture/SKILL.md`
- `.qwen/skills/tmux-real-user-testing/SKILL.md`
- `.qwen/skills/tmux-real-user-testing/scripts/tmux-real-user-log.sh`
- `.qwen/skills/triage/SKILL.md`
- `.qwen/skills/triage/references/issue-workflow.md`
- `.qwen/skills/triage/references/pr-workflow.md`
- `AGENTS.md`
- `docs/design/rt-optimization/reduce-rounds-via-skill-design.md`
- `docs/design/skill-nudge/skill-nudge.md`
- `docs/developers/tools/mcp-server.md`
- `docs/users/features/mcp.md`
- `docs/users/features/skills.md`
- `integration-tests/cli/mcp_server_cyclic_schema.test.ts`
- `integration-tests/cli/simple-mcp-server.test.ts`
- `integration-tests/fixtures/idle-mcp/package.json`
- `integration-tests/fixtures/idle-mcp/server.mjs`
- `integration-tests/sdk-typescript/mcp-server.test.ts`
- `integration-tests/sdk-typescript/sdk-mcp-server.test.ts`
- `integration-tests/test-mcp-server.ts`
- `packages/cli/src/commands/extensions/examples/mcp-server/example.ts`
- `packages/cli/src/commands/extensions/examples/mcp-server/package.json`
- `packages/cli/src/commands/extensions/examples/mcp-server/qwen-extension.json`
- `packages/cli/src/commands/extensions/examples/mcp-server/tsconfig.json`
- `packages/cli/src/commands/extensions/examples/skills/qwen-extension.json`
- `packages/cli/src/commands/extensions/examples/skills/skills/synonyms/SKILL.md`
- `packages/cli/src/commands/mcp.test.ts`
- `packages/cli/src/commands/mcp.ts`
- `packages/cli/src/commands/mcp/add.test.ts`
- `packages/cli/src/commands/mcp/add.ts`
- `packages/cli/src/commands/mcp/list.test.ts`
- `packages/cli/src/commands/mcp/list.ts`
- `packages/cli/src/commands/mcp/reconnect.test.ts`
- `packages/cli/src/commands/mcp/reconnect.ts`
- `packages/cli/src/commands/mcp/remove.test.ts`
- `packages/cli/src/commands/mcp/remove.ts`
- `packages/cli/src/ui/commands/mcpCommand.test.ts`
- `packages/cli/src/ui/commands/mcpCommand.ts`
- `packages/cli/src/ui/commands/skillsCommand.test.ts`
- `packages/cli/src/ui/commands/skillsCommand.ts`
- `packages/cli/src/ui/components/mcp/MCPHealthPill.test.tsx`
- `packages/cli/src/ui/components/mcp/MCPHealthPill.tsx`
- `packages/cli/src/ui/components/mcp/MCPManagementDialog.tsx`
- `packages/cli/src/ui/components/mcp/constants.ts`
- `packages/cli/src/ui/components/mcp/index.ts`
- `packages/cli/src/ui/components/mcp/steps/AuthenticateStep.tsx`
- `packages/cli/src/ui/components/mcp/steps/DisableScopeSelectStep.tsx`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `.qwen/commands/qc/bugfix.md`
- `.qwen/commands/qc/code-review.md`
- `.qwen/commands/qc/commit.md`
- `.qwen/commands/qc/create-issue.md`
- `.qwen/commands/qc/create-pr.md`
- `.qwen/design/2026-05-21-memory-pressure-monitor-design.md`
- `.qwen/plans/2025-06-03-stats-dashboard-redesign.md`
- `.qwen/skills/agent-reproduce-align/SKILL.md`
- `.qwen/skills/agent-reproduce-align/references/alignment-workflow.md`
- `.qwen/skills/agent-reproduce-align/scripts/compare_traces.py`
- `.qwen/skills/agent-reproduce-align/scripts/normalize_trace.py`
- `.qwen/skills/agent-reproduce-align/scripts/run_pair_capture.sh`
- `.qwen/skills/agent-reproduce-feature/SKILL.md`
- `.qwen/skills/agent-reproduce-feature/references/capture-workflow.md`
- `.qwen/skills/agent-reproduce-feature/scripts/capture_state.py`
- `.qwen/skills/agent-reproduce-feature/scripts/llm_dump.py`
- `.qwen/skills/agent-reproduce-feature/scripts/run_tmux_capture.sh`
- `.qwen/skills/agent-reproduce-feature/scripts/run_with_mitm.sh`
- `.qwen/skills/bugfix/SKILL.md`
- `.qwen/skills/codegraph/SKILL.md`
- `.qwen/skills/codegraph/bug-analysis.md`
- `.qwen/skills/codegraph/evals/evals.json`
- `.qwen/skills/codegraph/patterns.md`
- `.qwen/skills/codegraph/pr-analysis.md`
- `.qwen/skills/codegraph/schema.md`
- `.qwen/skills/docs-audit-and-refresh/SKILL.md`
- `.qwen/skills/docs-audit-and-refresh/references/audit-checklist.md`
- `.qwen/skills/docs-update-from-diff/SKILL.md`
- `.qwen/skills/docs-update-from-diff/references/docs-surface.md`
- `.qwen/skills/e2e-testing/SKILL.md`
- `.qwen/skills/e2e-testing/references/mcp-testing.md`
- `.qwen/skills/e2e-testing/scripts/mcp-test-server.js`
- `.qwen/skills/e2e-testing/scripts/token-stats.py`
- `.qwen/skills/feat-dev/SKILL.md`
- `.qwen/skills/memory-leak-debug/SKILL.md`
- `.qwen/skills/memory-leak-debug/examples/react-reconciler-performance-measure-leak.md`
- `.qwen/skills/memory-leak-debug/scripts/find-leaf-node.sh`
- `.qwen/skills/openwork-desktop-sync/SKILL.md`
- `.qwen/skills/qwen-code-claw/SKILL.md`
- `.qwen/skills/structured-debugging/SKILL.md`
- `.qwen/skills/structured-debugging/examples/headless-bg-agent-empty-stdout.md`
- `.qwen/skills/terminal-capture/SKILL.md`
- `.qwen/skills/tmux-real-user-testing/SKILL.md`
- `.qwen/skills/tmux-real-user-testing/scripts/tmux-real-user-log.sh`
- `.qwen/skills/triage/SKILL.md`
- `.qwen/skills/triage/references/issue-workflow.md`
- `.qwen/skills/triage/references/pr-workflow.md`
- `.qwen/specs/2025-06-03-stats-dashboard-redesign.md`
- `docs/design/2026-05-15-async-memory-recall-design.md`
- `docs/design/adaptive-output-token-escalation/adaptive-output-token-escalation-design.md`
- `docs/design/auto-compaction-threshold-redesign.md`
- `docs/design/channels/channels-design.md`
- `docs/design/compact-mode/compact-mode-design.md`
- `docs/design/compaction-image-stripping/compaction-image-stripping-design.md`
- `docs/design/fork-subagent/fork-subagent-design.md`
- `docs/design/prompt-suggestion/prompt-suggestion-design.md`
- `docs/design/prompt-suggestion/speculation-design.md`
- `docs/design/rt-optimization/reduce-rounds-via-skill-design.md`
- `docs/design/rt-optimization/rt-optimization-design.md`
- `docs/design/session-recap/session-recap-design.md`
- `docs/design/session-title/session-title-design.md`
- `docs/design/slash-command/phase1-technical-design.md`
- `docs/design/slash-command/phase2-technical-design.md`
- `docs/design/slash-command/phase3-technical-design.md`
- `docs/design/telemetry-llm-request-timing-design.md`
- `docs/design/telemetry-outbound-propagation-design.md`
- `docs/design/telemetry-resource-attributes-design.md`
- `docs/design/telemetry-subagent-spans-design.md`
- `docs/design/tool-use-summary/tool-use-summary-design.md`
- `docs/plans/2026-03-22-agent-tool-display-design.md`
- `docs/plans/2026-05-14-auto-compaction-threshold-redesign.md`
- `docs/plans/memory-diagnostics-reference-design.md`
- `docs/users/features/scheduled-tasks.md`
- `packages/cli/src/commands/auth.test.ts`
- `packages/cli/src/commands/auth.ts`
- `packages/cli/src/commands/channel.ts`
- `packages/cli/src/commands/channel/channel-registry.ts`
- `packages/cli/src/commands/channel/config-utils.test.ts`
- `packages/cli/src/commands/channel/config-utils.ts`
- `packages/cli/src/commands/channel/configure.ts`
- `packages/cli/src/commands/channel/pairing.ts`
- `packages/cli/src/commands/channel/pidfile.test.ts`
- `packages/cli/src/commands/channel/pidfile.ts`
- `packages/cli/src/commands/channel/start.test.ts`
- `packages/cli/src/commands/channel/start.ts`
- `packages/cli/src/commands/channel/status.ts`
- `packages/cli/src/commands/channel/stop.ts`
- `packages/cli/src/commands/extensions.test.tsx`
- `packages/cli/src/commands/extensions.tsx`
- `packages/cli/src/commands/extensions/consent.test.ts`
- `packages/cli/src/commands/extensions/consent.ts`
- `packages/cli/src/commands/extensions/disable.test.ts`
- `packages/cli/src/commands/extensions/disable.ts`
- `packages/cli/src/commands/extensions/enable.test.ts`
- `packages/cli/src/commands/extensions/enable.ts`
- `packages/cli/src/commands/extensions/examples/agent/agents/diary.md`
- `packages/cli/src/commands/extensions/examples/agent/qwen-extension.json`
- `packages/cli/src/commands/extensions/examples/commands/commands/fs/grep-code.md`
- `packages/cli/src/commands/extensions/examples/commands/qwen-extension.json`
- `packages/cli/src/commands/extensions/examples/context/QWEN.md`
- ... 40 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `docs-site/src/app/[[...mdxPath]]/page.test.jsx`
- `docs-site/src/app/public-docs.test.js`
- `integration-tests/channel-plugin.test.ts`
- `integration-tests/cli/acp-cron.test.ts`
- `integration-tests/cli/acp-integration.test.ts`
- `integration-tests/cli/cron-tools.test.ts`
- `integration-tests/cli/edit.test.ts`
- `integration-tests/cli/extensions-install.test.ts`
- `integration-tests/cli/file-system.test.ts`
- `integration-tests/cli/json-output.test.ts`
- `integration-tests/cli/json-schema.test.ts`
- `integration-tests/cli/list_directory.test.ts`
- `integration-tests/cli/mcp_server_cyclic_schema.test.ts`
- `integration-tests/cli/monitor.test.ts`
- `integration-tests/cli/notebook-edit.test.ts`
- `integration-tests/cli/qwen-config-dir.test.ts`
- `integration-tests/cli/qwen-serve-baseline.test.ts`
- `integration-tests/cli/qwen-serve-routes.test.ts`
- `integration-tests/cli/qwen-serve-streaming.test.ts`
- `integration-tests/cli/read_many_files.test.ts`
- `integration-tests/cli/run_shell_command.test.ts`
- `integration-tests/cli/save_memory.test.ts`
- `integration-tests/cli/settings-migration.test.ts`
- `integration-tests/cli/simple-mcp-server.test.ts`
- `integration-tests/cli/sleep-interception.test.ts`
- `integration-tests/cli/stdin-context.test.ts`
- `integration-tests/cli/telemetry.test.ts`
- `integration-tests/cli/todo_write.test.ts`
- `integration-tests/cli/tool-search.test.ts`
- `integration-tests/cli/utf-bom-encoding.test.ts`
- `integration-tests/cli/write_file.test.ts`
- `integration-tests/hook-integration/hooks-advanced.test.ts`
- `integration-tests/hook-integration/hooks.test.ts`
- `integration-tests/interactive/context-compress-interactive.test.ts`
- `integration-tests/interactive/cron-interactive.test.ts`
- `integration-tests/interactive/ctrl-c-exit.test.ts`
- `integration-tests/interactive/file-system-interactive.test.ts`
- `integration-tests/interactive/hooks-command.test.ts`
- `integration-tests/interactive/mixed-input-crash.test.ts`
- `integration-tests/sdk-typescript/abort-and-lifecycle.test.ts`
- `integration-tests/sdk-typescript/configuration-options.test.ts`
- `integration-tests/sdk-typescript/mcp-server.test.ts`
- `integration-tests/sdk-typescript/message-event-pairing.test.ts`
- `integration-tests/sdk-typescript/multi-turn.test.ts`
- `integration-tests/sdk-typescript/permission-control.test.ts`
- `integration-tests/sdk-typescript/sdk-mcp-server.test.ts`
- `integration-tests/sdk-typescript/session-id.test.ts`
- `integration-tests/sdk-typescript/single-turn.test.ts`
- `integration-tests/sdk-typescript/subagents.test.ts`
- `integration-tests/sdk-typescript/system-control.test.ts`
- `integration-tests/sdk-typescript/tool-control.test.ts`
- `integration-tests/terminal-bench/ci-tasks/hello-world/tests/run-uv-pytest.sh`
- `integration-tests/terminal-bench/ci-tasks/hello-world/tests/setup-uv-pytest.sh`
- `integration-tests/terminal-bench/ci-tasks/hello-world/tests/test_outputs.py`
- `integration-tests/terminal-bench/terminal-bench.test.ts`
- `packages/acp-bridge/src/eventBus.test.ts`
- `packages/acp-bridge/src/inMemoryChannel.test.ts`
- `packages/acp-bridge/src/status.test.ts`
- `packages/channels/base/src/BlockStreamer.test.ts`
- `packages/channels/base/src/ChannelBase.test.ts`
- `packages/channels/base/src/DaemonChannelBridge.test.ts`
- `packages/channels/base/src/GroupGate.test.ts`
- `packages/channels/base/src/SenderGate.test.ts`
- `packages/channels/base/src/SessionRouter.test.ts`
- `packages/channels/base/src/paths.test.ts`
- `packages/channels/dingtalk/src/markdown.test.ts`
- `packages/channels/feishu/src/adapter.test.ts`
- `packages/channels/feishu/src/markdown.test.ts`
- `packages/channels/feishu/src/media.test.ts`
- `packages/channels/weixin/src/media.test.ts`
- `packages/channels/weixin/src/send.test.ts`
- `packages/cli/src/acp-integration/acpAgent.test.ts`
- `packages/cli/src/acp-integration/acpAgent.worktree.test.ts`
- `packages/cli/src/acp-integration/authMethods.test.ts`
- `packages/cli/src/acp-integration/authPreflight.test.ts`
- `packages/cli/src/acp-integration/runtimeOutputDirContext.test.ts`
- `packages/cli/src/acp-integration/service/filesystem.test.ts`
- `packages/cli/src/acp-integration/session/HistoryReplayer.test.ts`
- `packages/cli/src/acp-integration/session/Session.test.ts`
- `packages/cli/src/acp-integration/session/Session.worktree.test.ts`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/build-and-publish-image.yml`
- `.github/workflows/check-issue-completeness.yml`
- `.github/workflows/ci.yml`
- `.github/workflows/desktop-release.yml`
- `.github/workflows/docs-page-action.yml`
- `.github/workflows/e2e.yml`
- `.github/workflows/gemini-scheduled-pr-triage.yml`
- `.github/workflows/qwen-automated-issue-triage.yml`
- `.github/workflows/qwen-code-pr-review.yml`
- `.github/workflows/qwen-issue-followup-bot.yml`
- `.github/workflows/qwen-scheduled-issue-triage.yml`
- `.github/workflows/qwen-triage.yml`
- `.github/workflows/release-sdk-python.yml`
- `.github/workflows/release-sdk.yml`
- `.github/workflows/release-vscode-companion.yml`
- `.github/workflows/release.yml`
- `.github/workflows/sdk-python.yml`
- `.github/workflows/stale.yml`
- `.github/workflows/sync-release-to-oss.yml`
- `.github/workflows/terminal-bench.yml`
- `Dockerfile`
- `integration-tests/terminal-bench/ci-tasks/hello-world/Dockerfile`
- `integration-tests/terminal-bench/ci-tasks/hello-world/docker-compose.yaml`
- `integration-tests/terminal-bench/ci-tasks/swe-bench-astropy-1/Dockerfile`
- `integration-tests/terminal-bench/ci-tasks/swe-bench-astropy-1/docker-compose.yaml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 1947 |
| .tsx | 434 |
| .md | 214 |
| .java | 181 |
| .js | 73 |
| .json | 65 |
| .yml | 26 |
| .snap | 25 |
| .py | 24 |
| .sh | 22 |
| .css | 16 |
| .mjs | 12 |
| .sb | 6 |
| .html | 5 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `packages/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `packages/cli/ 내부 책임 분리`
- `packages/cli/src/ 내부 책임 분리`
- `.qwen/commands/qc/bugfix.md 스펙/명령 의미`
- `.qwen/commands/qc/code-review.md 스펙/명령 의미`
- `.qwen/commands/qc/commit.md 스펙/명령 의미`
- `.qwen/commands/qc/create-issue.md 스펙/명령 의미`
- `.qwen/commands/qc/create-pr.md 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `docs-site/package.json 실행 스크립트와 패키지 경계`
- `integration-tests/concurrent-runner/examples/toy-project/package.json 실행 스크립트와 패키지 경계`
- `integration-tests/concurrent-runner/requirements.txt 실행 스크립트와 패키지 경계`
- `integration-tests/fixtures/idle-mcp/package.json 실행 스크립트와 패키지 경계`

