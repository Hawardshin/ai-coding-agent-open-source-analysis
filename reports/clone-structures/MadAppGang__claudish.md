# madappgang/claudish 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/MadAppGang__claudish |
| remote | https://github.com/MadAppGang/claudish.git |
| HEAD | cd1a1a4 (2026-06-10) docs: update CHANGELOG.md for v7.5.0 |
| branch | main |
| groups | previous-clone-inventory-107 |
| files | 354 |
| dirs | 64 |
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
- 주요 heading: `🔮 Claudish`, `Claude Code. Any Model.`, `Use Your Existing AI Subscriptions`, `Bring Your Own Key (BYOK)`, `Features`, `Installation`, `Quick Install`, `Shell script (Linux/macOS)`, `Homebrew (macOS)`, `npm`, `Bun`, `Prerequisites`, `Other Install Options`, `Quick Start`, `Step 0: Initialize Claudish Skill (First Time Only)`, `Navigate to your project directory`, `Install Claudish skill for automatic best practices`, `Reload Claude Code to discover the skill`

> <div align="center" 🔮 Claudish Claude Code. Any Model. Use your existing AI subscriptions with Claude Code. Works with Anthropic Max, Gemini Advanced, ChatGPT Plus/Codex, Kimi, GLM, OllamaCloud — plus 580+ models via OpenRouter and local models for complete privacy. Website · Documentation · Report Bug </div Claudish (Claude ish) is a CLI tool that allows you to run Claude Code with any AI model by proxying requests through a local Anthropic API compatible server. Supported Providers Cloud OpenRouter (580+ models), Google Gemini, OpenAI, MiniMax, Kimi, GLM, Z.AI, OllamaCloud, OpenCode Zen Local Ollama, LM Studio, vLLM, MLX Enterprise Vertex AI (Google Cloud) Use Your Existing AI Subscriptions Stop paying for multiple AI subscriptions. Claudish lets you use subscriptions you already have with Claude Code's powerful interface Your Subscription Command Anthropic Max Native support (just us

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude | dir |
| .github | dir |
| .gitignore | file |
| AI_AGENT_GUIDE.md | file |
| apps | dir |
| biome.json | file |
| bun.lock | file |
| CHANGELOG.md | file |
| CLAUDE.md | file |
| cliff.toml | file |
| design-references | dir |
| docs | dir |
| experiments | dir |
| install.sh | file |
| package.json | file |
| packages | dir |
| README.md | file |
| ROADMAP.md | file |
| scripts | dir |
| skills | dir |
| test-mcp-e2e.ts | file |
| tsconfig.json | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| packages/ | 266 |
| experiments/ | 25 |
| docs/ | 19 |
| apps/ | 17 |
| (root) | 13 |
| .github/ | 8 |
| design-references/ | 2 |
| scripts/ | 2 |
| .claude/ | 1 |
| skills/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| apps/ | 17 | preferred |
| packages/ | 266 | preferred |
| docs/ | 19 | preferred |
| skills/ | 1 | preferred |
| scripts/ | 2 | preferred |
| packages/cli/ | 230 | large |
| packages/cli/src/ | 216 | large |
| experiments/ | 25 | large |
| experiments/tool-replacement-proxy-2026-04/ | 25 | large |
| packages/macos-bridge/ | 23 | large |
| apps/ClaudishProxy/ | 16 | large |
| apps/ClaudishProxy/Sources/ | 15 | large |
| packages/macos-bridge/src/ | 14 | large |
| .github/ | 8 | large |
| experiments/tool-replacement-proxy-2026-04/poc/ | 7 | large |
| experiments/tool-replacement-proxy-2026-04/research/ | 7 | large |
| packages/cli/scripts/ | 7 | large |
| experiments/tool-replacement-proxy-2026-04/evidence/ | 6 | large |
| packages/macos-bridge/scripts/ | 6 | large |
| docs/usage/ | 5 | large |
| .github/workflows/ | 4 | large |
| docs/advanced/ | 4 | large |
| experiments/tool-replacement-proxy-2026-04/claudish-patch/ | 3 | large |
| packages/magmux-darwin-arm64/ | 3 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `bun.lock`
- `package.json`
- `packages/cli/package.json`
- `packages/cli/tsconfig.json`
- `packages/macos-bridge/package.json`
- `packages/macos-bridge/tsconfig.json`
- `packages/magmux-darwin-arm64/package.json`
- `packages/magmux-darwin-x64/package.json`
- `packages/magmux-linux-arm64/package.json`
- `packages/magmux-linux-x64/package.json`
- `tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | claudish-monorepo | dev, dev:mcp, dev:grok, dev:grok:debug, dev:info, dev:bridge, build, build:cli, build:bridge, typecheck, lint, format, test, clean, postinstall | @hono/node-server, @inquirer/prompts, @inquirer/search, @modelcontextprotocol/sdk, dotenv, hono, undici, zod |
| packages/cli/package.json | claudish | dev, dev:mcp, dev:grok, dev:grok:debug, dev:info, build, build:binary, typecheck, lint, format, test, smoke | @inquirer/prompts, @inquirer/search, @modelcontextprotocol/sdk, @opentui/core, @opentui/react, dotenv, react, zod |
| packages/macos-bridge/package.json | @claudish/macos-bridge | dev, build, typecheck, lint, format, test | claudish, @hono/node-server, cycletls, hono, node-forge |
| packages/magmux-darwin-arm64/package.json | @claudish/magmux-darwin-arm64 |  |  |
| packages/magmux-darwin-x64/package.json | @claudish/magmux-darwin-x64 |  |  |
| packages/magmux-linux-arm64/package.json | @claudish/magmux-linux-arm64 |  |  |
| packages/magmux-linux-x64/package.json | @claudish/magmux-linux-x64 |  |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/advanced/automation.md`
- `docs/advanced/cost-tracking.md`
- `docs/advanced/environment.md`
- `docs/advanced/mtm-to-magmux-migration.md`
- `docs/ai-integration/for-agents.md`
- `docs/api-key-architecture.md`
- `docs/getting-started/quick-start.md`
- `docs/index.md`
- `docs/models/choosing-models.md`
- `docs/models/model-mapping.md`
- `docs/serve-gateway.md`
- `docs/settings-reference.md`
- `docs/three-layer-architecture.md`
- `docs/troubleshooting.md`
- `docs/usage/interactive-mode.md`
- `docs/usage/magmux.md`
- `docs/usage/mcp-server.md`
- `docs/usage/monitor-mode.md`
- `docs/usage/single-shot-mode.md`
- `experiments/tool-replacement-proxy-2026-04/README.md`
- `experiments/tool-replacement-proxy-2026-04/poc/README.md`
- `packages/macos-bridge/docs/PROXY_TRAFFIC_FLOW.md`

### 에이전트 지침 후보

- `.claude/settings.json`
- `CLAUDE.md`
- `docs/usage/mcp-server.md`
- `packages/cli/skills/claudish-usage/SKILL.md`
- `packages/cli/src/mcp-server.test.ts`
- `packages/cli/src/mcp-server.ts`
- `skills/claudish-usage/SKILL.md`
- `test-mcp-e2e.ts`

### 스펙/템플릿/명령/스킬 후보

- `packages/cli/skills/claudish-usage/SKILL.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `experiments/tool-replacement-proxy-2026-04/claudish-patch/native-handler-advisor.test.ts`
- `packages/cli/scripts/smoke.test.ts`
- `packages/cli/src/channel/channel-wire-format.test.ts`
- `packages/cli/src/channel/e2e-channel.test.ts`
- `packages/cli/src/channel/scrollback-buffer.test.ts`
- `packages/cli/src/channel/session-manager.test.ts`
- `packages/cli/src/channel/signal-watcher.test.ts`
- `packages/cli/src/cli-passthrough.test.ts`
- `packages/cli/src/cli.test.ts`
- `packages/cli/src/config-schema.test.ts`
- `packages/cli/src/default-provider.test.ts`
- `packages/cli/src/format-translation.test.ts`
- `packages/cli/src/glm-adapter.test.ts`
- `packages/cli/src/handlers/composed-handler.test.ts`
- `packages/cli/src/handlers/default-provider-e2e.test.ts`
- `packages/cli/src/handlers/fallback-handler.test.ts`
- `packages/cli/src/handlers/native-handler-advisor.test.ts`
- `packages/cli/src/handlers/shared/anthropic-error.test.ts`
- `packages/cli/src/launcher/catalog-warm.test.ts`
- `packages/cli/src/mcp-server.test.ts`
- `packages/cli/src/model-catalog.test.ts`
- `packages/cli/src/model-loader.test.ts`
- `packages/cli/src/model-selector.test.ts`
- `packages/cli/src/native-anthropic-mapping.test.ts`
- `packages/cli/src/providers/all-models-cache.test.ts`
- `packages/cli/src/providers/catalog-query.test.ts`
- `packages/cli/src/providers/catalog-resolvers/openrouter.test.ts`
- `packages/cli/src/providers/custom-endpoints-loader.test.ts`
- `packages/cli/src/providers/default-routing-rules.test.ts`
- `packages/cli/src/providers/model-catalog.test.ts`
- `packages/cli/src/providers/probe-catalog.test.ts`
- `packages/cli/src/providers/provider-definitions.test.ts`
- `packages/cli/src/providers/provider-routing.test.ts`
- `packages/cli/src/providers/routing-rules.test.ts`
- `packages/cli/src/providers/runtime-providers.test.ts`
- `packages/cli/src/providers/transport/anthropic-compat.test.ts`
- `packages/cli/src/providers/transport/openai.test.ts`
- `packages/cli/src/providers/transport/probe-discovery.test.ts`
- `packages/cli/src/stats-buffer.test.ts`
- `packages/cli/src/stats-otlp.test.ts`
- `packages/cli/src/stats.test.ts`
- `packages/cli/src/team-grid.e2e.test.ts`
- `packages/cli/src/team-orchestrator.test.ts`
- `packages/cli/src/team-timeout-repro.test.ts`
- `packages/cli/src/telemetry.test.ts`
- `packages/cli/src/zai-glm.e2e.test.ts`
- `packages/macos-bridge/src/bridge.test.ts`

### CI/Docker 후보

- `.github/workflows/claude-code.yml`
- `.github/workflows/issue-triage.yml`
- `.github/workflows/release.yml`
- `.github/workflows/smoke-test.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 225 |
| .md | 42 |
| .swift | 16 |
| .json | 14 |
| .tsx | 14 |
| .sse | 9 |
| .gitignore | 8 |
| .yml | 5 |
| .gitkeep | 4 |
| .ndjson | 4 |
| .sh | 4 |
| .cjs | 2 |
| .js | 2 |
| .jpeg | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `apps/ 내부 책임 분리`
- `packages/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `skills/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `packages/cli/skills/claudish-usage/SKILL.md 스펙/명령 의미`
- `bun.lock 실행 스크립트와 패키지 경계`
- `package.json 실행 스크립트와 패키지 경계`
- `packages/cli/package.json 실행 스크립트와 패키지 경계`
- `packages/cli/tsconfig.json 실행 스크립트와 패키지 경계`
- `packages/macos-bridge/package.json 실행 스크립트와 패키지 경계`

