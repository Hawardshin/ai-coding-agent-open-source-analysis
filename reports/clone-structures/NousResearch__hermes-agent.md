# NousResearch/hermes-agent 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/NousResearch__hermes-agent |
| remote | https://github.com/NousResearch/hermes-agent |
| HEAD | a72bb03 (2026-06-10) fix(docker): optimize image size — .dockerignore, drop dev deps, split build layers (#38749) |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 4944 |
| dirs | 793 |
| stack | Node/TypeScript/JavaScript, Python, Rust |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Hermes Agent ☤`, `Quick Install`, `Linux, macOS, WSL2, Termux`, `Windows (native, PowerShell)`, `Getting Started`, `Skip the API-key collection — Nous Portal`, `CLI vs Messaging Quick Reference`, `Documentation`, `Migrating from OpenClaw`, `Contributing`, `Community`, `License`

> <p align="center" <img src="assets/banner.png" alt="Hermes Agent" width="100%" </p Hermes Agent ☤ <p align="center" <a href="https //hermes agent.nousresearch.com/" Hermes Agent</a <a href="https //hermes agent.nousresearch.com/" Hermes Desktop</a </p <p align="center" <a href="https //hermes agent.nousresearch.com/docs/" <img src="https //img.shields.io/badge/Docs hermes agent.nousresearch.com FFD700?style=for the badge" alt="Documentation" </a <a href="https //discord.gg/NousResearch" <img src="https //img.shields.io/badge/Discord 5865F2?style=for the badge&logo=discord&logoColor=white" alt="Discord" </a <a href="https //github.com/NousResearch/hermes agent/blob/main/LICENSE" <img src="https //img.shields.io/badge/License MIT green?style=for the badge" alt="License MIT" </a <a href="https //nousresearch.com" <img src="https //img.shields.io/badge/Built%20by Nous%20Research blueviolet?s

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| __pycache__ | dir |
| .dockerignore | file |
| .env.example | file |
| .envrc | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .hadolint.yaml | file |
| .mailmap | file |
| .plans | dir |
| acp_adapter | dir |
| acp_registry | dir |
| agent | dir |
| AGENTS.md | file |
| apps | dir |
| assets | dir |
| batch_runner.py | file |
| cli-config.yaml.example | file |
| cli.py | file |
| constraints-termux.txt | file |
| CONTRIBUTING.md | file |
| cron | dir |
| datagen-config-examples | dir |
| docker | dir |
| docker-compose.windows.yml | file |
| docker-compose.yml | file |
| Dockerfile | file |
| docs | dir |
| flake.lock | file |
| flake.nix | file |
| gateway | dir |
| hermes | file |
| hermes_bootstrap.py | file |
| hermes_cli | dir |
| hermes_constants.py | file |
| hermes_logging.py | file |
| hermes_state.py | file |
| hermes_time.py | file |
| hermes-already-has-routines.md | file |
| infographic | dir |
| LICENSE | file |
| locales | dir |
| MANIFEST.in | file |
| mcp_serve.py | file |
| mini_swe_runner.py | file |
| model_tools.py | file |
| nix | dir |
| optional-mcps | dir |
| optional-skills | dir |
| package-lock.json | file |
| package.json | file |
| packaging | dir |
| plans | dir |
| plugins | dir |
| providers | dir |
| pyproject.toml | file |
| README.md | file |
| README.ur-pk.md | file |
| README.zh-CN.md | file |
| run_agent.py | file |
| scripts | dir |
| SECURITY.md | file |
| setup-hermes.sh | file |
| setup.py | file |
| skills | dir |
| tests | dir |
| tools | dir |
| toolset_distributions.py | file |
| toolsets.py | file |
| trajectory_compressor.py | file |
| tui_gateway | dir |
| ui-tui | dir |
| utils.py | file |
| uv.lock | file |
| web | dir |
| website | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| tests/ | 1493 |
| website/ | 722 |
| apps/ | 513 |
| skills/ | 452 |
| optional-skills/ | 409 |
| ui-tui/ | 356 |
| plugins/ | 243 |
| hermes_cli/ | 170 |
| agent/ | 113 |
| web/ | 108 |
| tools/ | 103 |
| gateway/ | 67 |
| (root) | 45 |
| scripts/ | 32 |
| .github/ | 29 |
| docker/ | 16 |
| locales/ | 16 |
| nix/ | 12 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| apps/ | 513 | preferred |
| web/ | 108 | preferred |
| docs/ | 5 | preferred |
| tests/ | 1493 | preferred |
| skills/ | 452 | preferred |
| tools/ | 103 | preferred |
| scripts/ | 32 | preferred |
| plugins/ | 243 | preferred |
| website/ | 722 | large |
| apps/desktop/ | 474 | large |
| optional-skills/ | 409 | large |
| apps/desktop/src/ | 387 | large |
| ui-tui/ | 356 | large |
| website/docs/ | 348 | large |
| tests/hermes_cli/ | 328 | large |
| website/i18n/ | 318 | large |
| website/i18n/zh-Hans/ | 318 | large |
| tests/gateway/ | 305 | large |
| website/docs/user-guide/ | 266 | large |
| tests/tools/ | 252 | large |
| skills/creative/ | 222 | large |
| ui-tui/src/ | 200 | large |
| hermes_cli/ | 170 | large |
| tests/agent/ | 163 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `apps/bootstrap-installer/package.json`
- `apps/bootstrap-installer/src-tauri/Cargo.toml`
- `apps/bootstrap-installer/tsconfig.json`
- `apps/bootstrap-installer/vite.config.ts`
- `apps/desktop/package.json`
- `apps/desktop/tsconfig.json`
- `apps/desktop/vite.config.ts`
- `apps/shared/package.json`
- `apps/shared/tsconfig.json`
- `docker-compose.yml`
- `optional-skills/finance/dcf-model/requirements.txt`
- `package.json`
- `plugins/platforms/photon/sidecar/package.json`
- `pyproject.toml`
- `scripts/whatsapp-bridge/package.json`
- `tests/e2e/matrix_xsign_bootstrap/docker-compose.yml`
- `ui-tui/package.json`
- `ui-tui/packages/hermes-ink/package.json`
- `ui-tui/tsconfig.json`
- `uv.lock`
- `web/package.json`
- `web/tsconfig.json`
- `web/vite.config.ts`
- `website/package.json`
- `website/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| apps/bootstrap-installer/package.json | @hermes/bootstrap-installer | dev, build, preview, tauri, tauri:dev, tauri:build, tauri:build:debug | @nous-research/ui, @tailwindcss/vite, @tailwindcss/typography, @tauri-apps/api, @tauri-apps/plugin-dialog, @tauri-apps/plugin-opener, @tauri-apps/plugin-process, @tauri-apps/plugin-shell, @vscode/codicons, class-variance-authority, clsx, katex, lucide-react, nanostores |
| apps/desktop/package.json | hermes | dev, dev:fake-boot, dev:renderer, dev:electron, profile:main, profile:main:cpu, start, build, builder, pack, dist, dist:mac, dist:mac:dmg, dist:mac:zip, dist:win, dist:win:msi | @assistant-ui/react, @assistant-ui/react-streamdown, @audiowave/react, @chenglou/pretext, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, @hermes/shared, @icons-pack/react-simple-icons, @nanostores/react, @nous-research/ui, @radix-ui/react-slot, @streamdown/code, @tabler/icons-react |
| apps/shared/package.json | @hermes/shared | type-check |  |
| package.json | hermes-agent | postinstall, install:root, install:web, install:tui, install:desktop, audit:root, audit:web, audit:tui, audit:fix:root, audit:fix:web, audit:fix:tui | @streamdown/math, agent-browser |
| plugins/platforms/photon/sidecar/package.json | @hermes-agent/photon-sidecar | start | spectrum-ts |
| scripts/whatsapp-bridge/package.json | hermes-whatsapp-bridge | start | @whiskeysockets/baileys, express, qrcode-terminal, pino |
| ui-tui/package.json | hermes-tui | dev, start, build, type-check, lint, lint:fix, fmt, fix, test, test:watch | @hermes/ink, @nanostores/react, ink, ink-text-input, nanostores, react, unicode-animations |
| ui-tui/packages/hermes-ink/package.json | @hermes/ink | build | @alcalzone/ansi-tokenize, auto-bind, bidi-js, chalk, cli-boxes, code-excerpt, emoji-regex, get-east-asian-width, indent-string, lodash-es, react, react-reconciler, semver, signal-exit |
| web/package.json | web | dev, build, lint, preview | @nous-research/ui, @observablehq/plot, @react-three/fiber, @tailwindcss/vite, @xterm/addon-fit, @xterm/addon-unicode11, @xterm/addon-web-links, @xterm/addon-webgl, @xterm/xterm, class-variance-authority, clsx, gsap, leva, lucide-react |
| website/package.json | website | docusaurus, prestart, start, prebuild, build, swizzle, deploy, clear, serve, write-translations, write-heading-ids, typecheck, lint:diagrams | @docusaurus/core, @docusaurus/preset-classic, @docusaurus/theme-mermaid, @easyops-cn/docusaurus-search-local, @mdx-js/react, clsx, prism-react-renderer, react, react-dom |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | hermes-agent | false | false | true | true |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| apps/bootstrap-installer/src-tauri/Cargo.toml | hermes-bootstrap | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `apps/desktop/README.md`
- `docs/hermes-kanban-v1-spec.pdf`
- `docs/kanban/multi-gateway.md`
- `docs/middleware/README.md`
- `docs/observability/README.md`
- `docs/security/network-egress-isolation.md`
- `optional-skills/mlops/saelens/references/README.md`
- `optional-skills/software-development/code-wiki/templates/README.md`
- `packaging/homebrew/README.md`
- `plugins/disk-cleanup/README.md`
- `plugins/google_meet/README.md`
- `plugins/hermes-achievements/README.md`
- `plugins/hermes-achievements/docs/achievements-performance-implementation-plan.md`
- `plugins/hermes-achievements/docs/achievements-performance-implementation-spec.md`
- `plugins/hermes-achievements/docs/achievements-performance-spec.md`
- `plugins/hermes-achievements/docs/assets/achievements-dashboard-hd.png`
- `plugins/hermes-achievements/docs/assets/achievements-tier-showcase-hd.png`
- `plugins/memory/byterover/README.md`
- `plugins/memory/hindsight/README.md`
- `plugins/memory/holographic/README.md`
- `plugins/memory/honcho/README.md`
- `plugins/memory/mem0/README.md`
- `plugins/memory/openviking/README.md`
- `plugins/memory/retaindb/README.md`
- `plugins/memory/supermemory/README.md`
- `plugins/model-providers/README.md`
- `plugins/observability/langfuse/README.md`
- `plugins/observability/nemo_relay/README.md`
- `plugins/platforms/photon/README.md`
- `plugins/platforms/photon/sidecar/README.md`
- `plugins/security-guidance/README.md`
- `providers/README.md`
- `skills/creative/ascii-video/README.md`
- `skills/creative/comfyui/tests/README.md`
- `skills/creative/comfyui/workflows/README.md`
- `skills/creative/manim-video/README.md`
- `skills/creative/p5js/README.md`
- `skills/research/research-paper-writing/templates/README.md`
- `skills/research/research-paper-writing/templates/aaai2026/README.md`
- `skills/research/research-paper-writing/templates/acl/README.md`
- `skills/research/research-paper-writing/templates/colm2025/README.md`
- `tests/e2e/matrix_xsign_bootstrap/README.md`
- `tests/stress/README.md`
- `ui-tui/README.md`
- `web/README.md`
- `website/README.md`
- `website/docs/developer-guide/_category_.json`
- `website/docs/developer-guide/acp-internals.md`
- ... 30 more

### 에이전트 지침 후보

- `.github/workflows/skills-index-freshness.yml`
- `.github/workflows/skills-index.yml`
- `AGENTS.md`
- `agent/skill_bundles.py`
- `agent/skill_commands.py`
- `agent/skill_preprocessing.py`
- `agent/skill_utils.py`
- `agent/transports/hermes_tools_mcp_server.py`
- `apps/desktop/src/app/settings/mcp-settings.tsx`
- `apps/desktop/src/app/skills/index.test.tsx`
- `apps/desktop/src/app/skills/index.tsx`
- `hermes_cli/mcp_catalog.py`
- `hermes_cli/mcp_config.py`
- `hermes_cli/mcp_picker.py`
- `hermes_cli/mcp_startup.py`
- `hermes_cli/skills_config.py`
- `hermes_cli/skills_hub.py`
- `hermes_cli/subcommands/mcp.py`
- `hermes_cli/subcommands/skills.py`
- `mcp_serve.py`
- `optional-mcps/linear/manifest.yaml`
- `optional-mcps/n8n/manifest.yaml`
- `optional-skills/DESCRIPTION.md`
- `optional-skills/autonomous-ai-agents/DESCRIPTION.md`
- `optional-skills/autonomous-ai-agents/antigravity-cli/SKILL.md`
- `optional-skills/autonomous-ai-agents/antigravity-cli/references/cli-docs.md`
- `optional-skills/autonomous-ai-agents/blackbox/SKILL.md`
- `optional-skills/autonomous-ai-agents/grok/SKILL.md`
- `optional-skills/autonomous-ai-agents/honcho/SKILL.md`
- `optional-skills/autonomous-ai-agents/openhands/SKILL.md`
- `optional-skills/blockchain/evm/SKILL.md`
- `optional-skills/blockchain/evm/scripts/evm_client.py`
- `optional-skills/blockchain/hyperliquid/SKILL.md`
- `optional-skills/blockchain/hyperliquid/scripts/hyperliquid_client.py`
- `optional-skills/blockchain/solana/SKILL.md`
- `optional-skills/blockchain/solana/scripts/solana_client.py`
- `optional-skills/communication/DESCRIPTION.md`
- `optional-skills/communication/one-three-one-rule/SKILL.md`
- `optional-skills/creative/baoyu-article-illustrator/PORT_NOTES.md`
- `optional-skills/creative/baoyu-article-illustrator/SKILL.md`
- `optional-skills/creative/baoyu-article-illustrator/prompts/system.md`
- `optional-skills/creative/baoyu-article-illustrator/references/palettes/macaron.md`
- `optional-skills/creative/baoyu-article-illustrator/references/palettes/mono-ink.md`
- `optional-skills/creative/baoyu-article-illustrator/references/palettes/neon.md`
- `optional-skills/creative/baoyu-article-illustrator/references/palettes/warm.md`
- `optional-skills/creative/baoyu-article-illustrator/references/prompt-construction.md`
- `optional-skills/creative/baoyu-article-illustrator/references/style-presets.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles/blueprint.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles/chalkboard.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles/editorial.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles/elegant.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles/fantasy-animation.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles/flat-doodle.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles/flat.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles/ink-notes.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles/intuition-machine.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles/minimal.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles/nature.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles/notion.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles/pixel-art.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles/playful.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles/retro.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles/scientific.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles/screen-print.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles/sketch-notes.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles/sketch.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles/vector-illustration.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles/vintage.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles/warm.md`
- `optional-skills/creative/baoyu-article-illustrator/references/styles/watercolor.md`
- `optional-skills/creative/baoyu-article-illustrator/references/usage.md`
- `optional-skills/creative/baoyu-article-illustrator/references/workflow.md`
- `optional-skills/creative/baoyu-comic/PORT_NOTES.md`
- `optional-skills/creative/baoyu-comic/SKILL.md`
- `optional-skills/creative/baoyu-comic/references/analysis-framework.md`
- `optional-skills/creative/baoyu-comic/references/art-styles/chalk.md`
- `optional-skills/creative/baoyu-comic/references/art-styles/ink-brush.md`
- `optional-skills/creative/baoyu-comic/references/art-styles/ligne-claire.md`
- `optional-skills/creative/baoyu-comic/references/art-styles/manga.md`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `apps/desktop/DESIGN.md`
- `apps/desktop/src/app/skills/index.test.tsx`
- `apps/desktop/src/app/skills/index.tsx`
- `optional-skills/creative/concept-diagrams/templates/template.html`
- `optional-skills/mcp/fastmcp/templates/api_wrapper.py`
- `optional-skills/mcp/fastmcp/templates/database_server.py`
- `optional-skills/mcp/fastmcp/templates/file_processor.py`
- `optional-skills/mlops/obliteratus/templates/abliteration-config.yaml`
- `optional-skills/mlops/obliteratus/templates/analysis-study.yaml`
- `optional-skills/mlops/obliteratus/templates/batch-abliteration.yaml`
- `optional-skills/mlops/training/trl-fine-tuning/templates/basic_grpo_training.py`
- `optional-skills/research/darwinian-evolver/templates/custom_problem_template.py`
- `optional-skills/research/osint-investigation/templates/source-template.md`
- `optional-skills/security/godmode/templates/prefill-subtle.json`
- `optional-skills/security/godmode/templates/prefill.json`
- `optional-skills/security/oss-forensics/templates/forensic-report.md`
- `optional-skills/security/oss-forensics/templates/malicious-package-report.md`
- `optional-skills/security/web-pentest/templates/authorization.md`
- `optional-skills/security/web-pentest/templates/exploitation-queue.json`
- `optional-skills/security/web-pentest/templates/pentest-report.md`
- `optional-skills/software-development/code-wiki/templates/README.md`
- `optional-skills/software-development/code-wiki/templates/architecture.md`
- `optional-skills/software-development/code-wiki/templates/getting-started.md`
- `optional-skills/software-development/code-wiki/templates/module.md`
- `skills/creative/architecture-diagram/templates/template.html`
- `skills/creative/design-md/templates/starter.md`
- `skills/creative/manim-video/references/visual-design.md`
- `skills/creative/p5js/templates/viewer.html`
- `skills/creative/popular-web-designs/templates/airbnb.md`
- `skills/creative/popular-web-designs/templates/airtable.md`
- `skills/creative/popular-web-designs/templates/apple.md`
- `skills/creative/popular-web-designs/templates/bmw.md`
- `skills/creative/popular-web-designs/templates/cal.md`
- `skills/creative/popular-web-designs/templates/claude.md`
- `skills/creative/popular-web-designs/templates/clay.md`
- `skills/creative/popular-web-designs/templates/clickhouse.md`
- `skills/creative/popular-web-designs/templates/cohere.md`
- `skills/creative/popular-web-designs/templates/coinbase.md`
- `skills/creative/popular-web-designs/templates/composio.md`
- `skills/creative/popular-web-designs/templates/cursor.md`
- `skills/creative/popular-web-designs/templates/elevenlabs.md`
- `skills/creative/popular-web-designs/templates/expo.md`
- `skills/creative/popular-web-designs/templates/figma.md`
- `skills/creative/popular-web-designs/templates/framer.md`
- `skills/creative/popular-web-designs/templates/hashicorp.md`
- `skills/creative/popular-web-designs/templates/ibm.md`
- `skills/creative/popular-web-designs/templates/intercom.md`
- `skills/creative/popular-web-designs/templates/kraken.md`
- `skills/creative/popular-web-designs/templates/linear.app.md`
- `skills/creative/popular-web-designs/templates/lovable.md`
- `skills/creative/popular-web-designs/templates/minimax.md`
- `skills/creative/popular-web-designs/templates/mintlify.md`
- `skills/creative/popular-web-designs/templates/miro.md`
- `skills/creative/popular-web-designs/templates/mistral.ai.md`
- `skills/creative/popular-web-designs/templates/mongodb.md`
- `skills/creative/popular-web-designs/templates/notion.md`
- `skills/creative/popular-web-designs/templates/nvidia.md`
- `skills/creative/popular-web-designs/templates/ollama.md`
- `skills/creative/popular-web-designs/templates/opencode.ai.md`
- `skills/creative/popular-web-designs/templates/pinterest.md`
- `skills/creative/popular-web-designs/templates/posthog.md`
- `skills/creative/popular-web-designs/templates/raycast.md`
- `skills/creative/popular-web-designs/templates/replicate.md`
- `skills/creative/popular-web-designs/templates/resend.md`
- `skills/creative/popular-web-designs/templates/revolut.md`
- `skills/creative/popular-web-designs/templates/runwayml.md`
- `skills/creative/popular-web-designs/templates/sanity.md`
- `skills/creative/popular-web-designs/templates/sentry.md`
- `skills/creative/popular-web-designs/templates/spacex.md`
- `skills/creative/popular-web-designs/templates/spotify.md`
- `skills/creative/popular-web-designs/templates/stripe.md`
- `skills/creative/popular-web-designs/templates/supabase.md`
- `skills/creative/popular-web-designs/templates/superhuman.md`
- `skills/creative/popular-web-designs/templates/together.ai.md`
- `skills/creative/popular-web-designs/templates/uber.md`
- `skills/creative/popular-web-designs/templates/vercel.md`
- `skills/creative/popular-web-designs/templates/voltagent.md`
- `skills/creative/popular-web-designs/templates/warp.md`
- `skills/creative/popular-web-designs/templates/webflow.md`
- `skills/creative/popular-web-designs/templates/wise.md`
- `skills/creative/popular-web-designs/templates/x.ai.md`
- `skills/creative/popular-web-designs/templates/zapier.md`
- `skills/creative/pretext/templates/donut-orbit.html`
- `skills/creative/pretext/templates/hello-orb-flow.html`
- `skills/dogfood/templates/dogfood-report-template.md`
- `skills/github/github-issues/templates/bug-report.md`
- `skills/github/github-issues/templates/feature-request.md`
- `skills/github/github-pr-workflow/templates/pr-body-bugfix.md`
- `skills/github/github-pr-workflow/templates/pr-body-feature.md`
- `skills/mlops/evaluation/lm-evaluation-harness/references/custom-tasks.md`
- `skills/research/research-paper-writing/templates/README.md`
- `skills/research/research-paper-writing/templates/aaai2026/README.md`
- `skills/research/research-paper-writing/templates/aaai2026/aaai2026-unified-supp.tex`
- `skills/research/research-paper-writing/templates/aaai2026/aaai2026-unified-template.tex`
- `skills/research/research-paper-writing/templates/aaai2026/aaai2026.bib`
- `skills/research/research-paper-writing/templates/aaai2026/aaai2026.bst`
- `skills/research/research-paper-writing/templates/aaai2026/aaai2026.sty`
- `skills/research/research-paper-writing/templates/acl/README.md`
- `skills/research/research-paper-writing/templates/acl/acl.sty`
- `skills/research/research-paper-writing/templates/acl/acl_latex.tex`
- ... 40 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `apps/desktop/src/app/artifacts/index.test.ts`
- `apps/desktop/src/app/chat/composer/enter-submit-dom-race.test.tsx`
- `apps/desktop/src/app/chat/composer/ime-composition-dom-repro.test.tsx`
- `apps/desktop/src/app/chat/composer/rich-editor.test.ts`
- `apps/desktop/src/app/chat/composer/slash-nav-dom-repro.test.tsx`
- `apps/desktop/src/app/chat/composer/text-utils.test.ts`
- `apps/desktop/src/app/chat/composer/trigger-popover.test.tsx`
- `apps/desktop/src/app/chat/hooks/use-composer-actions.test.ts`
- `apps/desktop/src/app/chat/right-rail/preview-pane.test.tsx`
- `apps/desktop/src/app/chat/thread-loading.test.ts`
- `apps/desktop/src/app/gateway/hooks/use-gateway-boot.test.tsx`
- `apps/desktop/src/app/right-sidebar/files/use-project-tree.test.ts`
- `apps/desktop/src/app/session/hooks/use-preview-routing.test.tsx`
- `apps/desktop/src/app/session/hooks/use-prompt-actions.test.tsx`
- `apps/desktop/src/app/session/hooks/use-route-resume.test.tsx`
- `apps/desktop/src/app/session/hooks/use-session-state-cache.test.tsx`
- `apps/desktop/src/app/settings/helpers.test.ts`
- `apps/desktop/src/app/settings/model-settings.test.tsx`
- `apps/desktop/src/app/settings/toolset-config-panel.test.tsx`
- `apps/desktop/src/app/shell/titlebar.test.ts`
- `apps/desktop/src/app/skills/index.test.tsx`
- `apps/desktop/src/components/assistant-ui/directive-text.test.ts`
- `apps/desktop/src/components/assistant-ui/markdown-text.test.ts`
- `apps/desktop/src/components/assistant-ui/streaming.test.tsx`
- `apps/desktop/src/components/assistant-ui/tool-approval-group.test.tsx`
- `apps/desktop/src/components/assistant-ui/tool-approval.test.tsx`
- `apps/desktop/src/components/assistant-ui/tool-fallback-model.test.ts`
- `apps/desktop/src/components/assistant-ui/user-message-edit.test.tsx`
- `apps/desktop/src/components/boot-failure-reauth.test.ts`
- `apps/desktop/src/components/chat/activity-timer.test.tsx`
- `apps/desktop/src/components/desktop-onboarding-overlay.test.tsx`
- `apps/desktop/src/components/gateway-connecting-overlay.test.tsx`
- `apps/desktop/src/components/language-switcher.test.tsx`
- `apps/desktop/src/components/pane-shell/pane-shell.test.tsx`
- `apps/desktop/src/components/ui/copy-button.test.tsx`
- `apps/desktop/src/hermes.test.ts`
- `apps/desktop/src/i18n/context.test.tsx`
- `apps/desktop/src/i18n/languages.test.ts`
- `apps/desktop/src/i18n/runtime.test.ts`
- `apps/desktop/src/lib/ansi.test.ts`
- `apps/desktop/src/lib/chat-messages.test.ts`
- `apps/desktop/src/lib/chat-runtime.test.ts`
- `apps/desktop/src/lib/commit-changelog.test.ts`
- `apps/desktop/src/lib/desktop-slash-commands.test.ts`
- `apps/desktop/src/lib/embedded-images.test.ts`
- `apps/desktop/src/lib/external-link.test.tsx`
- `apps/desktop/src/lib/gateway-events.test.ts`
- `apps/desktop/src/lib/gateway-ws-url.test.ts`
- `apps/desktop/src/lib/keybinds/combo.test.ts`
- `apps/desktop/src/lib/markdown-code.test.ts`
- `apps/desktop/src/lib/media.remote.test.ts`
- `apps/desktop/src/lib/model-status-label.test.ts`
- `apps/desktop/src/lib/preview-targets.test.ts`
- `apps/desktop/src/lib/provider-setup-errors.test.ts`
- `apps/desktop/src/lib/runtime-readiness.test.ts`
- `apps/desktop/src/lib/session-search.test.ts`
- `apps/desktop/src/lib/todos.test.ts`
- `apps/desktop/src/lib/tool-result-summary.test.ts`
- `apps/desktop/src/lib/update-copy.test.ts`
- `apps/desktop/src/store/clarify.test.ts`
- `apps/desktop/src/store/composer-input-history.test.ts`
- `apps/desktop/src/store/composer-queue.test.ts`
- `apps/desktop/src/store/composer.test.ts`
- `apps/desktop/src/store/model-visibility.test.ts`
- `apps/desktop/src/store/onboarding.test.ts`
- `apps/desktop/src/store/panes.test.ts`
- `apps/desktop/src/store/preview.test.ts`
- `apps/desktop/src/store/prompts.test.ts`
- `apps/desktop/src/store/session-switcher.test.ts`
- `apps/desktop/src/store/session.test.ts`
- `apps/desktop/src/store/subagents.test.ts`
- `apps/desktop/src/store/updates.test.ts`
- `apps/desktop/src/store/windows.test.ts`
- `apps/desktop/src/themes/install.test.ts`
- `apps/desktop/src/themes/presets.test.ts`
- `apps/desktop/src/themes/profile-theme.test.ts`
- `apps/desktop/src/themes/user-themes.test.ts`
- `apps/desktop/src/themes/vscode.test.ts`
- `plugins/hermes-achievements/tests/test_achievement_engine.py`
- `scripts/tests/test-install-ps1-stage-protocol.ps1`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/build-windows-installer.yml`
- `.github/workflows/contributor-check.yml`
- `.github/workflows/deploy-site.yml`
- `.github/workflows/docker-lint.yml`
- `.github/workflows/docker-publish.yml`
- `.github/workflows/docs-site-checks.yml`
- `.github/workflows/history-check.yml`
- `.github/workflows/lint.yml`
- `.github/workflows/nix-lockfile-fix.yml`
- `.github/workflows/nix.yml`
- `.github/workflows/osv-scanner.yml`
- `.github/workflows/skills-index-freshness.yml`
- `.github/workflows/skills-index.yml`
- `.github/workflows/supply-chain-audit.yml`
- `.github/workflows/tests.yml`
- `.github/workflows/upload_to_pypi.yml`
- `.github/workflows/uv-lockfile-check.yml`
- `Dockerfile`
- `docker-compose.windows.yml`
- `docker-compose.yml`
- `tests/e2e/matrix_xsign_bootstrap/docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 2225 |
| .md | 1349 |
| .ts | 555 |
| .tsx | 281 |
| .yaml | 98 |
| .json | 56 |
| .png | 56 |
| .xsd | 39 |
| .cjs | 37 |
| .mjs | 28 |
| .yml | 27 |
| .sh | 24 |
| .nix | 13 |
| .sty | 13 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `apps/ 내부 책임 분리`
- `web/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `skills/ 내부 책임 분리`
- `apps/desktop/DESIGN.md 스펙/명령 의미`
- `apps/desktop/src/app/skills/index.test.tsx 스펙/명령 의미`
- `apps/desktop/src/app/skills/index.tsx 스펙/명령 의미`
- `optional-skills/creative/concept-diagrams/templates/template.html 스펙/명령 의미`
- `optional-skills/mcp/fastmcp/templates/api_wrapper.py 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `apps/bootstrap-installer/package.json 실행 스크립트와 패키지 경계`
- `apps/bootstrap-installer/src-tauri/Cargo.toml 실행 스크립트와 패키지 경계`
- `apps/bootstrap-installer/tsconfig.json 실행 스크립트와 패키지 경계`
- `apps/bootstrap-installer/vite.config.ts 실행 스크립트와 패키지 경계`

