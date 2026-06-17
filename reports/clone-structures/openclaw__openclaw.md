# openclaw/openclaw 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/openclaw__openclaw |
| remote | https://github.com/openclaw/openclaw |
| HEAD | bb6e4772 (2026-06-10) fix(compaction): lower default timeout from 900s to 180s, preserve explicit config (#91361) |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 19887 |
| dirs | 1152 |
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
- 주요 heading: `🦞 OpenClaw — Personal AI Assistant`, `Sponsors`, `Install (recommended)`, `or: pnpm add -g openclaw@latest`, `Quick start (TL;DR)`, `Send a message`, `Talk to the assistant (optionally deliver back to any connected channel: WhatsApp/Telegram/Slack/Discord/Google Chat/Signal/iMessage/IRC/Microsoft Teams/Matrix/Feishu/LINE/Mattermost/Nextcloud Talk/Nostr/Synology Chat/Tlon/Twitch/Zalo/Zalo Personal/WeChat/QQ/WebChat)`, `Security defaults (DM access)`, `Highlights`, `Security model (important)`, `Operator quick refs`, `Docs by goal`, `Apps (optional)`, `macOS (OpenClaw.app) (optional)`, `iOS node (optional)`, `Android node (optional)`, `From source (development)`, `First run only (or after resetting local OpenClaw config/workspace)`

> 🦞 OpenClaw — Personal AI Assistant <p align="center" <picture <source media="(prefers color scheme light)" srcset="https //raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw logo text dark.svg" <img src="https //raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw logo text.svg" alt="OpenClaw" width="500" </picture </p <p align="center" <strong EXFOLIATE! EXFOLIATE!</strong </p <p align="center" <a href="https //github.com/openclaw/openclaw/actions/workflows/ci.yml?branch=main" <img src="https //img.shields.io/github/actions/workflow/status/openclaw/openclaw/ci.yml?branch=main&style=for the badge" alt="CI status" </a <a href="https //github.com/openclaw/openclaw/releases" <img src="https //img.shields.io/github/v/release/openclaw/openclaw?include prereleases&style=for the badge" alt="GitHub release" </a <a href="https //discord.gg/clawd" <img src="htt

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .crabbox.yaml | file |
| .dockerignore | file |
| .env.example | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .npmrc | file |
| .oxfmtrc.jsonc | file |
| .oxlintrc.json | file |
| .pre-commit-config.yaml | file |
| .semgrepignore | file |
| .vscode | dir |
| AGENTS.md | file |
| appcast.xml | file |
| apps | dir |
| CHANGELOG.md | file |
| CLAUDE.md | other |
| config | dir |
| CONTRIBUTING.md | file |
| deploy | dir |
| docker-compose.yml | file |
| Dockerfile | file |
| docs | dir |
| extensions | dir |
| fly.toml | file |
| git-hooks | dir |
| LICENSE | file |
| npm-shrinkwrap.json | file |
| openclaw.mjs | file |
| package.json | file |
| packages | dir |
| patches | dir |
| pnpm-lock.yaml | file |
| pnpm-workspace.yaml | file |
| qa | dir |
| README.md | file |
| render.yaml | file |
| scripts | dir |
| security | dir |
| SECURITY.md | file |
| skills | dir |
| src | dir |
| taxonomy.yaml | file |
| test | dir |
| THIRD_PARTY_NOTICES.md | file |
| tsconfig.core.json | file |
| tsconfig.core.projects.json | file |
| tsconfig.extensions.json | file |
| tsconfig.extensions.projects.json | file |
| tsconfig.json | file |
| tsconfig.plugin-sdk.dts.json | file |
| tsconfig.projects.json | file |
| tsdown.config.ts | file |
| ui | dir |
| VISION.md | file |
| vitest.config.ts | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 8833 |
| extensions/ | 6502 |
| apps/ | 1042 |
| scripts/ | 807 |
| docs/ | 760 |
| test/ | 558 |
| ui/ | 493 |
| packages/ | 426 |
| qa/ | 137 |
| .github/ | 107 |
| skills/ | 82 |
| .agents/ | 81 |
| (root) | 38 |
| config/ | 9 |
| security/ | 6 |
| .vscode/ | 2 |
| patches/ | 2 |
| deploy/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 8833 | preferred |
| apps/ | 1042 | preferred |
| packages/ | 426 | preferred |
| docs/ | 760 | preferred |
| test/ | 558 | preferred |
| skills/ | 82 | preferred |
| scripts/ | 807 | preferred |
| extensions/ | 6502 | preferred |
| src/agents/ | 1789 | large |
| src/infra/ | 766 | large |
| src/gateway/ | 714 | large |
| src/commands/ | 696 | large |
| src/plugins/ | 627 | large |
| src/plugin-sdk/ | 582 | large |
| src/auto-reply/ | 542 | large |
| extensions/discord/ | 540 | large |
| extensions/discord/src/ | 502 | large |
| ui/ | 493 | large |
| ui/src/ | 480 | large |
| src/auto-reply/reply/ | 457 | large |
| src/cli/ | 446 | large |
| apps/macos/ | 386 | large |
| src/channels/ | 381 | large |
| src/config/ | 371 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `.github/images/live-media-runner/Dockerfile`
- `Dockerfile`
- `docker-compose.yml`
- `extensions/acpx/package.json`
- `extensions/acpx/tsconfig.json`
- `extensions/admin-http-rpc/package.json`
- `extensions/admin-http-rpc/tsconfig.json`
- `extensions/alibaba/package.json`
- `extensions/alibaba/tsconfig.json`
- `extensions/amazon-bedrock-mantle/package.json`
- `extensions/amazon-bedrock-mantle/tsconfig.json`
- `extensions/amazon-bedrock/package.json`
- `extensions/amazon-bedrock/tsconfig.json`
- `extensions/anthropic-vertex/package.json`
- `extensions/anthropic-vertex/tsconfig.json`
- `extensions/anthropic/package.json`
- `extensions/anthropic/tsconfig.json`
- `extensions/arcee/package.json`
- `extensions/arcee/tsconfig.json`
- `extensions/azure-speech/package.json`
- `extensions/azure-speech/tsconfig.json`
- `extensions/bonjour/package.json`
- `extensions/brave/package.json`
- `extensions/brave/tsconfig.json`
- `extensions/browser/package.json`
- `extensions/browser/tsconfig.json`
- `extensions/byteplus/package.json`
- `extensions/byteplus/tsconfig.json`
- `extensions/canvas/package.json`
- `extensions/cerebras/package.json`
- `extensions/cerebras/tsconfig.json`
- `extensions/chutes/package.json`
- `extensions/chutes/tsconfig.json`
- `extensions/clickclack/package.json`
- `extensions/clickclack/tsconfig.json`
- `extensions/cloudflare-ai-gateway/package.json`
- `extensions/cloudflare-ai-gateway/tsconfig.json`
- `extensions/codex-supervisor/package.json`
- `extensions/codex-supervisor/tsconfig.json`
- `extensions/codex/package.json`
- `extensions/codex/tsconfig.json`
- `extensions/comfy/package.json`
- `extensions/comfy/tsconfig.json`
- `extensions/copilot-proxy/package.json`
- `extensions/copilot-proxy/tsconfig.json`
- `extensions/copilot/package.json`
- `extensions/copilot/tsconfig.json`
- `extensions/deepgram/package.json`
- `extensions/deepgram/tsconfig.json`
- `extensions/deepinfra/package.json`
- `extensions/deepinfra/tsconfig.json`
- `extensions/deepseek/package.json`
- `extensions/deepseek/tsconfig.json`
- `extensions/diagnostics-otel/package.json`
- `extensions/diagnostics-otel/tsconfig.json`
- `extensions/diagnostics-prometheus/package.json`
- `extensions/diagnostics-prometheus/tsconfig.json`
- `extensions/diffs-language-pack/package.json`
- `extensions/diffs/package.json`
- `extensions/diffs/tsconfig.json`
- `extensions/discord/package.json`
- `extensions/discord/tsconfig.json`
- `extensions/document-extract/package.json`
- `extensions/duckduckgo/package.json`
- `extensions/duckduckgo/tsconfig.json`
- `extensions/elevenlabs/package.json`
- `extensions/elevenlabs/tsconfig.json`
- `extensions/exa/package.json`
- `extensions/exa/tsconfig.json`
- `extensions/fal/package.json`
- `extensions/fal/tsconfig.json`
- `extensions/feishu/package.json`
- `extensions/feishu/tsconfig.json`
- `extensions/file-transfer/package.json`
- `extensions/firecrawl/package.json`
- `extensions/firecrawl/tsconfig.json`
- `extensions/fireworks/package.json`
- `extensions/fireworks/tsconfig.json`
- `extensions/github-copilot/package.json`
- `extensions/github-copilot/tsconfig.json`
- ... 20 more

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| extensions/acpx/package.json | @openclaw/acpx |  | @agentclientprotocol/claude-agent-acp, @zed-industries/codex-acp, acpx, zod |
| extensions/admin-http-rpc/package.json | @openclaw/admin-http-rpc |  |  |
| extensions/alibaba/package.json | @openclaw/alibaba-provider |  |  |
| extensions/amazon-bedrock-mantle/package.json | @openclaw/amazon-bedrock-mantle-provider |  | @anthropic-ai/sdk, @aws/bedrock-token-generator |
| extensions/amazon-bedrock/package.json | @openclaw/amazon-bedrock-provider |  | @aws-sdk/client-bedrock, @aws-sdk/client-bedrock-runtime, @aws-sdk/credential-provider-node, @smithy/node-http-handler, @smithy/shared-ini-file-loader, @smithy/types |
| extensions/anthropic-vertex/package.json | @openclaw/anthropic-vertex-provider |  | @anthropic-ai/vertex-sdk |
| extensions/anthropic/package.json | @openclaw/anthropic-provider |  |  |
| extensions/arcee/package.json | @openclaw/arcee-provider |  |  |
| extensions/azure-speech/package.json | @openclaw/azure-speech |  |  |
| extensions/bonjour/package.json | @openclaw/bonjour |  | @homebridge/ciao |
| extensions/brave/package.json | @openclaw/brave-plugin |  |  |
| extensions/browser/package.json | @openclaw/browser-plugin |  | @modelcontextprotocol/sdk, commander, express, playwright-core, typebox, ws |
| extensions/byteplus/package.json | @openclaw/byteplus-provider |  |  |
| extensions/canvas/package.json | @openclaw/canvas-plugin |  | @a2ui/lit, @lit/context, chokidar, lit, typebox, ws |
| extensions/cerebras/package.json | @openclaw/cerebras-provider |  |  |
| extensions/chutes/package.json | @openclaw/chutes-provider |  |  |
| extensions/clickclack/package.json | @openclaw/clickclack |  | ws, zod |
| extensions/cloudflare-ai-gateway/package.json | @openclaw/cloudflare-ai-gateway-provider |  |  |
| extensions/codex-supervisor/package.json | @openclaw/codex-supervisor |  | @modelcontextprotocol/sdk, typebox, ws, zod |
| extensions/codex/package.json | @openclaw/codex |  | @openai/codex, typebox, ws, zod |
| extensions/comfy/package.json | @openclaw/comfy-provider |  |  |
| extensions/copilot-proxy/package.json | @openclaw/copilot-proxy |  |  |
| extensions/copilot/package.json | @openclaw/copilot |  | @github/copilot-sdk |
| extensions/deepgram/package.json | @openclaw/deepgram-provider |  |  |
| extensions/deepinfra/package.json | @openclaw/deepinfra-provider |  |  |
| extensions/deepseek/package.json | @openclaw/deepseek-provider |  |  |
| extensions/diagnostics-otel/package.json | @openclaw/diagnostics-otel |  | @opentelemetry/api, @opentelemetry/api-logs, @opentelemetry/exporter-logs-otlp-proto, @opentelemetry/exporter-metrics-otlp-proto, @opentelemetry/exporter-trace-otlp-proto, @opentelemetry/resources, @opentelemetry/sdk-logs, @opentelemetry/sdk-metrics, @opentelemetry/sdk-node, @opentelemetry/sdk-trace-base, @opentelemetry/semantic-conventions |
| extensions/diagnostics-prometheus/package.json | @openclaw/diagnostics-prometheus |  |  |
| extensions/diffs-language-pack/package.json | @openclaw/diffs-language-pack |  |  |
| extensions/diffs/package.json | @openclaw/diffs |  | @pierre/diffs, @pierre/theme, @shikijs/langs, playwright-core, typebox, zod |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `apps/android/README.md`
- `apps/ios/README.md`
- `apps/ios/fastlane/metadata/README.md`
- `apps/macos/README.md`
- `apps/swabble/README.md`
- `apps/swabble/docs/spec.md`
- `docs/.generated/README.md`
- `docs/.generated/config-baseline.sha256`
- `docs/.generated/plugin-sdk-api-baseline.sha256`
- `docs/.i18n/README.md`
- `docs/.i18n/ar-navigation.json`
- `docs/.i18n/de-navigation.json`
- `docs/.i18n/es-navigation.json`
- `docs/.i18n/fr-navigation.json`
- `docs/.i18n/glossary.ar.json`
- `docs/.i18n/glossary.de.json`
- `docs/.i18n/glossary.es.json`
- `docs/.i18n/glossary.fa.json`
- `docs/.i18n/glossary.fr.json`
- `docs/.i18n/glossary.id.json`
- `docs/.i18n/glossary.it.json`
- `docs/.i18n/glossary.ja-JP.json`
- `docs/.i18n/glossary.ko.json`
- `docs/.i18n/glossary.nl.json`
- `docs/.i18n/glossary.pl.json`
- `docs/.i18n/glossary.pt-BR.json`
- `docs/.i18n/glossary.th.json`
- `docs/.i18n/glossary.tr.json`
- `docs/.i18n/glossary.uk.json`
- `docs/.i18n/glossary.vi.json`
- `docs/.i18n/glossary.zh-CN.json`
- `docs/.i18n/glossary.zh-TW.json`
- `docs/.i18n/id-navigation.json`
- `docs/.i18n/it-navigation.json`
- `docs/.i18n/ja-navigation.json`
- `docs/.i18n/ko-navigation.json`
- `docs/.i18n/pl-navigation.json`
- `docs/.i18n/pt-BR-navigation.json`
- `docs/.i18n/tr-navigation.json`
- `docs/.i18n/translation-workflow.md`
- `docs/.i18n/zh-Hans-navigation.json`
- `docs/AGENTS.md`
- `docs/agent-runtime-architecture.md`
- `docs/announcements/bluebubbles-imessage.md`
- `docs/assets/install-script.svg`
- `docs/assets/macos-onboarding/01-macos-warning.jpeg`
- `docs/assets/macos-onboarding/02-local-networks.jpeg`
- `docs/assets/macos-onboarding/03-security-notice.png`
- ... 30 more

### 에이전트 지침 후보

- `.agents/skills/agent-transcript/SKILL.md`
- `.agents/skills/agent-transcript/scripts/agent-transcript`
- `.agents/skills/autoreview/SKILL.md`
- `.agents/skills/autoreview/scripts/autoreview`
- `.agents/skills/autoreview/scripts/test-review-harness`
- `.agents/skills/autoreview/scripts/test-review-harness.ps1`
- `.agents/skills/autoreview/scripts/test-review-harness.py`
- `.agents/skills/channel-message-flows/SKILL.md`
- `.agents/skills/clawdtributor/SKILL.md`
- `.agents/skills/clawsweeper/SKILL.md`
- `.agents/skills/clawsweeper/agents/openai.yaml`
- `.agents/skills/control-ui-e2e/SKILL.md`
- `.agents/skills/control-ui-e2e/agents/openai.yaml`
- `.agents/skills/crabbox/SKILL.md`
- `.agents/skills/discord-clawd/SKILL.md`
- `.agents/skills/discord-clawd/agents/openai.yaml`
- `.agents/skills/discrawl/SKILL.md`
- `.agents/skills/discrawl/agents/openai.yaml`
- `.agents/skills/gitcrawl/SKILL.md`
- `.agents/skills/gitcrawl/agents/openai.yaml`
- `.agents/skills/graincrawl/SKILL.md`
- `.agents/skills/graincrawl/agents/openai.yaml`
- `.agents/skills/notcrawl/SKILL.md`
- `.agents/skills/notcrawl/agents/openai.yaml`
- `.agents/skills/openclaw-changelog-update/SKILL.md`
- `.agents/skills/openclaw-debugging/SKILL.md`
- `.agents/skills/openclaw-debugging/agents/openai.yaml`
- `.agents/skills/openclaw-docker-e2e-authoring/SKILL.md`
- `.agents/skills/openclaw-ghsa-maintainer/SKILL.md`
- `.agents/skills/openclaw-landable-bug-sweep/SKILL.md`
- `.agents/skills/openclaw-landable-bug-sweep/agents/openai.yaml`
- `.agents/skills/openclaw-parallels-smoke/SKILL.md`
- `.agents/skills/openclaw-pr-maintainer/SKILL.md`
- `.agents/skills/openclaw-pr-maintainer/scripts/github-activity.sh`
- `.agents/skills/openclaw-qa-testing/SKILL.md`
- `.agents/skills/openclaw-qa-testing/agents/openai.yaml`
- `.agents/skills/openclaw-refactor-docs/SKILL.md`
- `.agents/skills/openclaw-secret-scanning-maintainer/SKILL.md`
- `.agents/skills/openclaw-secret-scanning-maintainer/scripts/secret-scanning.mjs`
- `.agents/skills/openclaw-small-bugfix-sweep/SKILL.md`
- `.agents/skills/openclaw-test-heap-leaks/SKILL.md`
- `.agents/skills/openclaw-test-heap-leaks/agents/openai.yaml`
- `.agents/skills/openclaw-test-heap-leaks/scripts/heapsnapshot-delta.mjs`
- `.agents/skills/openclaw-test-performance/SKILL.md`
- `.agents/skills/openclaw-test-performance/agents/openai.yaml`
- `.agents/skills/openclaw-testing/SKILL.md`
- `.agents/skills/openclaw-testing/agents/openai.yaml`
- `.agents/skills/parallels-discord-roundtrip/SKILL.md`
- `.agents/skills/release-openclaw-announcement/SKILL.md`
- `.agents/skills/release-openclaw-announcement/agents/openai.yaml`
- `.agents/skills/release-openclaw-ci/SKILL.md`
- `.agents/skills/release-openclaw-ci/agents/openai.yaml`
- `.agents/skills/release-openclaw-ci/references/release-ci-notes.md`
- `.agents/skills/release-openclaw-ci/scripts/release-ci-summary.mjs`
- `.agents/skills/release-openclaw-ci/scripts/verify-provider-secrets.mjs`
- `.agents/skills/release-openclaw-mac/SKILL.md`
- `.agents/skills/release-openclaw-maintainer/SKILL.md`
- `.agents/skills/release-openclaw-nightly/SKILL.md`
- `.agents/skills/release-openclaw-plugin-testing/SKILL.md`
- `.agents/skills/release-openclaw-plugin-testing/agents/openai.yaml`
- `.agents/skills/security-triage/SKILL.md`
- `.agents/skills/slacrawl/SKILL.md`
- `.agents/skills/slacrawl/agents/openai.yaml`
- `.agents/skills/tag-duplicate-prs-issues/SKILL.md`
- `.agents/skills/tag-duplicate-prs-issues/agents/openai.yaml`
- `.agents/skills/technical-documentation/SKILL.md`
- `.agents/skills/technical-documentation/agents/docs-framework-agent.md`
- `.agents/skills/technical-documentation/agents/governance-agent.md`
- `.agents/skills/technical-documentation/agents/inventory-agent.md`
- `.agents/skills/technical-documentation/agents/openai.yaml`
- `.agents/skills/technical-documentation/agents/synthesis-agent.md`
- `.agents/skills/technical-documentation/assets/icon.jpg`
- `.agents/skills/technical-documentation/references/agent-and-contributing.md`
- `.agents/skills/technical-documentation/references/build.md`
- `.agents/skills/technical-documentation/references/openclaw.md`
- `.agents/skills/technical-documentation/references/principles.md`
- `.agents/skills/technical-documentation/references/review.md`
- `.agents/skills/technical-documentation/references/tooling.md`
- `.agents/skills/telegram-crabbox-e2e-proof/SKILL.md`
- `.agents/skills/verify-release/SKILL.md`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `.agents/skills/agent-transcript/SKILL.md`
- `.agents/skills/agent-transcript/scripts/agent-transcript`
- `.agents/skills/autoreview/SKILL.md`
- `.agents/skills/autoreview/scripts/autoreview`
- `.agents/skills/autoreview/scripts/test-review-harness`
- `.agents/skills/autoreview/scripts/test-review-harness.ps1`
- `.agents/skills/autoreview/scripts/test-review-harness.py`
- `.agents/skills/channel-message-flows/SKILL.md`
- `.agents/skills/clawdtributor/SKILL.md`
- `.agents/skills/clawsweeper/SKILL.md`
- `.agents/skills/clawsweeper/agents/openai.yaml`
- `.agents/skills/control-ui-e2e/SKILL.md`
- `.agents/skills/control-ui-e2e/agents/openai.yaml`
- `.agents/skills/crabbox/SKILL.md`
- `.agents/skills/discord-clawd/SKILL.md`
- `.agents/skills/discord-clawd/agents/openai.yaml`
- `.agents/skills/discrawl/SKILL.md`
- `.agents/skills/discrawl/agents/openai.yaml`
- `.agents/skills/gitcrawl/SKILL.md`
- `.agents/skills/gitcrawl/agents/openai.yaml`
- `.agents/skills/graincrawl/SKILL.md`
- `.agents/skills/graincrawl/agents/openai.yaml`
- `.agents/skills/notcrawl/SKILL.md`
- `.agents/skills/notcrawl/agents/openai.yaml`
- `.agents/skills/openclaw-changelog-update/SKILL.md`
- `.agents/skills/openclaw-debugging/SKILL.md`
- `.agents/skills/openclaw-debugging/agents/openai.yaml`
- `.agents/skills/openclaw-docker-e2e-authoring/SKILL.md`
- `.agents/skills/openclaw-ghsa-maintainer/SKILL.md`
- `.agents/skills/openclaw-landable-bug-sweep/SKILL.md`
- `.agents/skills/openclaw-landable-bug-sweep/agents/openai.yaml`
- `.agents/skills/openclaw-parallels-smoke/SKILL.md`
- `.agents/skills/openclaw-pr-maintainer/SKILL.md`
- `.agents/skills/openclaw-pr-maintainer/scripts/github-activity.sh`
- `.agents/skills/openclaw-qa-testing/SKILL.md`
- `.agents/skills/openclaw-qa-testing/agents/openai.yaml`
- `.agents/skills/openclaw-refactor-docs/SKILL.md`
- `.agents/skills/openclaw-secret-scanning-maintainer/SKILL.md`
- `.agents/skills/openclaw-secret-scanning-maintainer/scripts/secret-scanning.mjs`
- `.agents/skills/openclaw-small-bugfix-sweep/SKILL.md`
- `.agents/skills/openclaw-test-heap-leaks/SKILL.md`
- `.agents/skills/openclaw-test-heap-leaks/agents/openai.yaml`
- `.agents/skills/openclaw-test-heap-leaks/scripts/heapsnapshot-delta.mjs`
- `.agents/skills/openclaw-test-performance/SKILL.md`
- `.agents/skills/openclaw-test-performance/agents/openai.yaml`
- `.agents/skills/openclaw-testing/SKILL.md`
- `.agents/skills/openclaw-testing/agents/openai.yaml`
- `.agents/skills/parallels-discord-roundtrip/SKILL.md`
- `.agents/skills/release-openclaw-announcement/SKILL.md`
- `.agents/skills/release-openclaw-announcement/agents/openai.yaml`
- `.agents/skills/release-openclaw-ci/SKILL.md`
- `.agents/skills/release-openclaw-ci/agents/openai.yaml`
- `.agents/skills/release-openclaw-ci/references/release-ci-notes.md`
- `.agents/skills/release-openclaw-ci/scripts/release-ci-summary.mjs`
- `.agents/skills/release-openclaw-ci/scripts/verify-provider-secrets.mjs`
- `.agents/skills/release-openclaw-mac/SKILL.md`
- `.agents/skills/release-openclaw-maintainer/SKILL.md`
- `.agents/skills/release-openclaw-nightly/SKILL.md`
- `.agents/skills/release-openclaw-plugin-testing/SKILL.md`
- `.agents/skills/release-openclaw-plugin-testing/agents/openai.yaml`
- `.agents/skills/security-triage/SKILL.md`
- `.agents/skills/slacrawl/SKILL.md`
- `.agents/skills/slacrawl/agents/openai.yaml`
- `.agents/skills/tag-duplicate-prs-issues/SKILL.md`
- `.agents/skills/tag-duplicate-prs-issues/agents/openai.yaml`
- `.agents/skills/technical-documentation/SKILL.md`
- `.agents/skills/technical-documentation/agents/docs-framework-agent.md`
- `.agents/skills/technical-documentation/agents/governance-agent.md`
- `.agents/skills/technical-documentation/agents/inventory-agent.md`
- `.agents/skills/technical-documentation/agents/openai.yaml`
- `.agents/skills/technical-documentation/agents/synthesis-agent.md`
- `.agents/skills/technical-documentation/assets/icon.jpg`
- `.agents/skills/technical-documentation/references/agent-and-contributing.md`
- `.agents/skills/technical-documentation/references/build.md`
- `.agents/skills/technical-documentation/references/openclaw.md`
- `.agents/skills/technical-documentation/references/principles.md`
- `.agents/skills/technical-documentation/references/review.md`
- `.agents/skills/technical-documentation/references/tooling.md`
- `.agents/skills/telegram-crabbox-e2e-proof/SKILL.md`
- `.agents/skills/verify-release/SKILL.md`
- `docs/automation/tasks.md`
- `docs/cli/tasks.md`
- `docs/reference/templates/AGENTS.dev.md`
- `docs/reference/templates/AGENTS.md`
- `docs/reference/templates/BOOT.md`
- `docs/reference/templates/BOOTSTRAP.md`
- `docs/reference/templates/HEARTBEAT.md`
- `docs/reference/templates/IDENTITY.dev.md`
- `docs/reference/templates/IDENTITY.md`
- `docs/reference/templates/SOUL.dev.md`
- `docs/reference/templates/SOUL.md`
- `docs/reference/templates/TOOLS.dev.md`
- `docs/reference/templates/TOOLS.md`
- `docs/reference/templates/USER.dev.md`
- `docs/reference/templates/USER.md`
- `docs/specs/claw-supervisor.md`
- `extensions/acpx/skills/acp-router/SKILL.md`
- `extensions/browser/skills/browser-automation/SKILL.md`
- `extensions/diffs/skills/diffs/SKILL.md`
- `extensions/feishu/skills/feishu-doc/SKILL.md`
- ... 40 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `apps/android/app/src/test/java/ai/openclaw/app/AssistantLaunchTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/CronJobStatusParsingTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/GatewayBootstrapAuthTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/NodeForegroundServiceTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/NotificationForwardingPolicyTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/PermissionRequesterTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/SecurePrefsNotificationForwardingTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/SecurePrefsTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/SessionKeyTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/WakeWordsTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/chat/ChatControllerMessageIdentityTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/chat/ChatControllerSessionPolicyTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/chat/ChatMessageContentParsingTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/gateway/BonjourEscapesTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/gateway/DeviceAuthPayloadTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/gateway/DeviceAuthStoreTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/gateway/GatewaySessionInvokeTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/gateway/GatewaySessionInvokeTimeoutTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/gateway/GatewaySessionReconnectTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/gateway/InvokeErrorParserTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/CalendarHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/CameraHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/CanvasActionTrustTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/CanvasControllerSnapshotParamsTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/ConnectionManagerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/ContactsHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/DeviceHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/DeviceNotificationListenerServiceTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/InvokeCommandRegistryTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/InvokeDispatcherTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/JpegSizeLimiterTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/LocationHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/MotionHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/NodeHandlerRobolectricTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/NodePresenceAliveBeaconTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/NotificationsHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/PhotosHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/node/SystemHandlerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/protocol/OpenClawCanvasA2UIActionTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/protocol/OpenClawProtocolConstantsTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/CanvasA2UIActionBridgeTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/GatewayConfigResolverTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/OnboardingFlowLogicTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/ProviderModelStatusTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/SettingsScreensTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/SettingsSheetNotificationAppsTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/ShellScreenLogicTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/VoiceScreenLogicTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/chat/ChatComposerDraftTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/chat/ChatImageCodecTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/chat/ChatMarkdownTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/chat/ChatSheetContentTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/chat/ChatTimelineTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/ui/chat/SessionFiltersTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/ChatEventTextTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/MicCaptureManagerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkAudioPlayerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkDirectiveParserTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkModeConfigParsingTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkModeManagerTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkSpeakClientTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/VoiceWakeCommandExtractorTest.kt`
- `apps/android/app/src/test/java/ai/openclaw/app/voice/VoiceWakeManagerTest.kt`
- `apps/ios/Tests/AppCoverageTests.swift`
- `apps/ios/Tests/BackgroundAliveBeaconTests.swift`
- `apps/ios/Tests/CameraControllerClampTests.swift`
- `apps/ios/Tests/CameraControllerErrorTests.swift`
- `apps/ios/Tests/CommandCenterTabLayoutTests.swift`
- `apps/ios/Tests/CommandCenterTabSessionFilterTests.swift`
- `apps/ios/Tests/DeepLinkParserTests.swift`
- `apps/ios/Tests/ExecApprovalNotificationBridgeTests.swift`
- `apps/ios/Tests/GatewayConnectionControllerTests.swift`
- `apps/ios/Tests/GatewayConnectionIssueTests.swift`
- `apps/ios/Tests/GatewayConnectionSecurityTests.swift`
- `apps/ios/Tests/GatewayDiscoveryModelTests.swift`
- `apps/ios/Tests/GatewayEndpointIDTests.swift`
- `apps/ios/Tests/GatewaySettingsStoreTests.swift`
- `apps/ios/Tests/GatewayStatusBuilderTests.swift`
- `apps/ios/Tests/IOSGatewayChatTransportTests.swift`
- `apps/ios/Tests/Info.plist`
- ... 40 more

### CI/Docker 후보

- `.github/images/live-media-runner/Dockerfile`
- `.github/workflows/auto-response.yml`
- `.github/workflows/ci-build-artifacts-testbox.yml`
- `.github/workflows/ci-check-arm-testbox.yml`
- `.github/workflows/ci-check-testbox.yml`
- `.github/workflows/ci.yml`
- `.github/workflows/clawsweeper-dispatch.yml`
- `.github/workflows/codeql-android-critical-security.yml`
- `.github/workflows/codeql-critical-quality.yml`
- `.github/workflows/codeql-macos-critical-security.yml`
- `.github/workflows/codeql.yml`
- `.github/workflows/control-ui-locale-refresh.yml`
- `.github/workflows/crabbox-hydrate.yml`
- `.github/workflows/dependency-guard.yml`
- `.github/workflows/docker-release.yml`
- `.github/workflows/docs-agent.yml`
- `.github/workflows/docs-sync-publish.yml`
- `.github/workflows/docs-translate-trigger-release.yml`
- `.github/workflows/docs.yml`
- `.github/workflows/duplicate-after-merge.yml`
- `.github/workflows/full-release-validation.yml`
- `.github/workflows/install-smoke.yml`
- `.github/workflows/labeler.yml`
- `.github/workflows/live-media-runner-image.yml`
- `.github/workflows/macos-release.yml`
- `.github/workflows/maintainer-command-reactions.yml`
- `.github/workflows/mantis-discord-smoke.yml`
- `.github/workflows/mantis-discord-status-reactions.yml`
- `.github/workflows/mantis-discord-thread-attachment.yml`
- `.github/workflows/mantis-scenario.yml`
- `.github/workflows/mantis-slack-desktop-smoke.yml`
- `.github/workflows/mantis-telegram-desktop-proof.yml`
- `.github/workflows/mantis-telegram-live.yml`
- `.github/workflows/npm-telegram-beta-e2e.yml`
- `.github/workflows/openclaw-cross-os-release-checks-reusable.yml`
- `.github/workflows/openclaw-live-and-e2e-checks-reusable.yml`
- `.github/workflows/openclaw-npm-release.yml`
- `.github/workflows/openclaw-performance.yml`
- `.github/workflows/openclaw-release-checks.yml`
- `.github/workflows/openclaw-release-publish.yml`
- `.github/workflows/openclaw-scheduled-live-checks.yml`
- `.github/workflows/opengrep-precise-full.yml`
- `.github/workflows/opengrep-precise.yml`
- `.github/workflows/package-acceptance.yml`
- `.github/workflows/plugin-clawhub-release.yml`
- `.github/workflows/plugin-npm-release.yml`
- `.github/workflows/plugin-prerelease.yml`
- `.github/workflows/qa-live-transports-convex.yml`
- `.github/workflows/real-behavior-proof.yml`
- `.github/workflows/sandbox-common-smoke.yml`
- `.github/workflows/stale.yml`
- `.github/workflows/test-performance-agent.yml`
- `.github/workflows/tui-pty.yml`
- `.github/workflows/update-migration.yml`
- `.github/workflows/website-installer-sync.yml`
- `.github/workflows/windows-blacksmith-testbox.yml`
- `.github/workflows/windows-node-release.yml`
- `.github/workflows/windows-testbox-probe.yml`
- `.github/workflows/workflow-sanity.yml`
- `Dockerfile`
- `docker-compose.yml`
- `scripts/docker/cleanup-smoke/Dockerfile`
- `scripts/docker/install-sh-e2e/Dockerfile`
- `scripts/docker/install-sh-nonroot/Dockerfile`
- `scripts/docker/install-sh-smoke/Dockerfile`
- `scripts/docker/sandbox/Dockerfile`
- `scripts/e2e/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 16181 |
| .md | 1058 |
| .swift | 689 |
| .json | 609 |
| .mjs | 367 |
| .kt | 183 |
| .sh | 181 |
| .yml | 102 |
| .png | 84 |
| .prose | 64 |
| .txt | 32 |
| .yaml | 32 |
| .mts | 29 |
| .go | 28 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `apps/ 내부 책임 분리`
- `packages/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `test/ 내부 책임 분리`
- `.agents/skills/agent-transcript/SKILL.md 스펙/명령 의미`
- `.agents/skills/agent-transcript/scripts/agent-transcript 스펙/명령 의미`
- `.agents/skills/autoreview/SKILL.md 스펙/명령 의미`
- `.agents/skills/autoreview/scripts/autoreview 스펙/명령 의미`
- `.agents/skills/autoreview/scripts/test-review-harness 스펙/명령 의미`
- `.github/images/live-media-runner/Dockerfile 실행 스크립트와 패키지 경계`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `extensions/acpx/package.json 실행 스크립트와 패키지 경계`
- `extensions/acpx/tsconfig.json 실행 스크립트와 패키지 경계`

