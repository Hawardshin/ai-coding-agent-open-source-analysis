# aaif-goose/goose 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/aaif-goose__goose |
| remote | https://github.com/aaif-goose/goose |
| HEAD | d2ab786 (2026-06-10) feat: acp list session with keyword and type filter (#9695) |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 2325 |
| dirs | 492 |
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
- 주요 heading: `goose`, `Get started`, `Quick links`, `Need help?`, `a little goose humor 🪿`, `goose around with us`

> 🦆 goose has moved! This project has moved from block/goose to the Agentic AI Foundation (AAIF) at the Linux Foundation. Some links and references are still being updated — please bear with us during the transition. <div align="center" goose your native open source AI agent — desktop app, CLI, and API — for code, workflows, and everything in between <p align="center" <a href="https //opensource.org/licenses/Apache 2.0" <img src="https //img.shields.io/badge/License Apache 2.0 blue.svg" </a <a href="https //discord.gg/goose oss" <img src="https //img.shields.io/discord/1287729918100246654?logo=discord&logoColor=white&label=Join+Us&color=blueviolet" alt="Discord" </a <a href="https //github.com/aaif goose/goose/actions/workflows/ci.yml" <img src="https //img.shields.io/github/actions/workflow/status/aaif goose/goose/ci.yml?branch=main" alt="CI" </a <a href="https //insights.linuxfoundation

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .cargo | dir |
| .claude | dir |
| .codex | dir |
| .cursor | dir |
| .devcontainer | dir |
| .dockerignore | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .goosehints | file |
| .intersect | dir |
| AGENTS.md | file |
| bin | dir |
| BUILDING_DOCKER.md | file |
| BUILDING_LINUX.md | file |
| Cargo.lock | file |
| Cargo.toml | file |
| CLAUDE.md | file |
| clippy.toml | file |
| CONTRIBUTING_RECIPES.md | file |
| CONTRIBUTING.md | file |
| crates | dir |
| CUSTOM_DISTROS.md | file |
| deny.toml | file |
| Dockerfile | file |
| documentation | dir |
| download_cli.ps1 | file |
| download_cli.sh | file |
| evals | dir |
| examples | dir |
| flake.lock | file |
| flake.nix | file |
| goose-self-test.yaml | file |
| GOVERNANCE.md | file |
| I18N.md | file |
| Justfile | file |
| LICENSE | file |
| MAINTAINERS.md | file |
| oidc-proxy | dir |
| README.md | file |
| recipe-scanner | dir |
| RELEASE_CHECKLIST.md | file |
| RELEASE.md | file |
| rust-toolchain.toml | file |
| scripts | dir |
| SECURITY.md | file |
| services | dir |
| test_acp_client.py | file |
| ui | dir |
| vendor | dir |
| workflow_recipes | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| documentation/ | 901 |
| ui/ | 609 |
| crates/ | 600 |
| .github/ | 61 |
| (root) | 32 |
| evals/ | 31 |
| scripts/ | 27 |
| services/ | 25 |
| examples/ | 12 |
| oidc-proxy/ | 8 |
| bin/ | 5 |
| recipe-scanner/ | 5 |
| workflow_recipes/ | 3 |
| .devcontainer/ | 2 |
| vendor/ | 2 |
| .cargo/ | 1 |
| .intersect/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| crates/ | 600 | preferred |
| examples/ | 12 | preferred |
| scripts/ | 27 | preferred |
| documentation/ | 901 | large |
| ui/ | 609 | large |
| ui/desktop/ | 548 | large |
| ui/desktop/src/ | 493 | large |
| crates/goose/ | 384 | large |
| documentation/blog/ | 329 | large |
| crates/goose/src/ | 327 | large |
| documentation/docs/ | 222 | large |
| documentation/src/ | 219 | large |
| documentation/src/pages/ | 150 | large |
| documentation/static/ | 82 | large |
| documentation/docs/mcp/ | 78 | large |
| crates/goose-cli/ | 67 | large |
| documentation/docs/guides/ | 67 | large |
| crates/goose-cli/src/ | 65 | large |
| documentation/static/img/ | 64 | large |
| .github/ | 61 | large |
| documentation/src/components/ | 49 | large |
| .github/workflows/ | 47 | large |
| crates/goose-mcp/ | 47 | large |
| crates/goose/tests/ | 47 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `.devcontainer/Dockerfile`
- `Cargo.toml`
- `Dockerfile`
- `crates/goose-acp-macros/Cargo.toml`
- `crates/goose-cli/Cargo.toml`
- `crates/goose-mcp/Cargo.toml`
- `crates/goose-providers/Cargo.toml`
- `crates/goose-sdk-types/Cargo.toml`
- `crates/goose-sdk/Cargo.toml`
- `crates/goose-server/Cargo.toml`
- `crates/goose-test-support/Cargo.toml`
- `crates/goose-test/Cargo.toml`
- `crates/goose/Cargo.toml`
- `documentation/docs/docker/Dockerfile`
- `documentation/docs/docker/docker-compose.yml`
- `documentation/package.json`
- `documentation/tsconfig.json`
- `evals/open-model-gym/mcp-harness/package.json`
- `evals/open-model-gym/mcp-harness/tsconfig.json`
- `evals/open-model-gym/suite/package.json`
- `evals/open-model-gym/suite/tsconfig.json`
- `examples/mcp-wiki/pyproject.toml`
- `oidc-proxy/package.json`
- `recipe-scanner/Dockerfile`
- `scripts/provider-error-proxy/pyproject.toml`
- `scripts/provider-error-proxy/uv.lock`
- `services/ask-ai-bot/Dockerfile`
- `services/ask-ai-bot/bun.lock`
- `services/ask-ai-bot/package.json`
- `services/ask-ai-bot/tsconfig.json`
- `ui/desktop/package.json`
- `ui/desktop/tsconfig.json`
- `ui/goose-binary/goose-binary-darwin-arm64/package.json`
- `ui/goose-binary/goose-binary-darwin-x64/package.json`
- `ui/goose-binary/goose-binary-linux-arm64/package.json`
- `ui/goose-binary/goose-binary-linux-x64/package.json`
- `ui/goose-binary/goose-binary-win32-x64/package.json`
- `ui/package.json`
- `ui/pnpm-lock.yaml`
- `ui/pnpm-workspace.yaml`
- `ui/sdk/package.json`
- `ui/sdk/tsconfig.json`
- `ui/text/package.json`
- `ui/text/tsconfig.json`
- `vendor/v8/Cargo.toml`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| documentation/package.json | goose | docusaurus, start, build, swizzle, deploy, clear, serve, write-translations, write-heading-ids, test, typecheck, serve-static | @docusaurus/core, @docusaurus/plugin-client-redirects, @docusaurus/preset-classic, @inkeep/docusaurus, @mdx-js/react, autoprefixer, clsx, dotenv, framer-motion, lucide-react, postcss, postcss-import, prism-react-renderer, react |
| evals/open-model-gym/mcp-harness/package.json | mcp-harness | build, start | @modelcontextprotocol/sdk |
| evals/open-model-gym/suite/package.json | agent-runner | build, test, test:scenario | glob, yaml |
| oidc-proxy/package.json | oidc-proxy | dev, deploy, test |  |
| services/ask-ai-bot/package.json | goose-ask-ai-bot | start, build, dev | @ai-sdk/anthropic, ai, consola, dedent, discord.js, dotenv, marked, minisearch, zod |
| ui/desktop/package.json | goose-app | postinstall, typecheck, generate-api, start-gui, start-gui-debug, start, start:test-error, package, make, bundle:default, bundle:intel, debug, test-e2e, test-e2e:dev, test-e2e:ui, test-e2e:debug | @aaif/goose-sdk, @agentclientprotocol/sdk, @mcp-ui/client, @modelcontextprotocol/ext-apps, @radix-ui/react-accordion, @radix-ui/react-avatar, @radix-ui/react-dialog, @radix-ui/react-icons, @radix-ui/react-popover, @radix-ui/react-radio-group, @radix-ui/react-scroll-area, @radix-ui/react-select, @radix-ui/react-slot, @radix-ui/react-tabs |
| ui/goose-binary/goose-binary-darwin-arm64/package.json | @aaif/goose-binary-darwin-arm64 |  |  |
| ui/goose-binary/goose-binary-darwin-x64/package.json | @aaif/goose-binary-darwin-x64 |  |  |
| ui/goose-binary/goose-binary-linux-arm64/package.json | @aaif/goose-binary-linux-arm64 |  |  |
| ui/goose-binary/goose-binary-linux-x64/package.json | @aaif/goose-binary-linux-x64 |  |  |
| ui/goose-binary/goose-binary-win32-x64/package.json | @aaif/goose-binary-win32-x64 |  |  |
| ui/package.json |  | changeset, version, release |  |
| ui/sdk/package.json | @aaif/goose-sdk | build, build:ts, build:native, build:native:all, generate, lint, test, typecheck:test, format, check:compat | @modelcontextprotocol/ext-apps, @modelcontextprotocol/sdk, zod |
| ui/text/package.json | @aaif/goose | build, start, lint | @aaif/goose-sdk, @agentclientprotocol/sdk, @inkjs/ui, ink, ink-multiline-input, marked, marked-terminal, meow, react |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| examples/mcp-wiki/pyproject.toml | mcp-wiki | false | false | false | false |
| scripts/provider-error-proxy/pyproject.toml | provider-error-proxy | false | false | false | false |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| Cargo.toml |  | true |      "crates/*",     # Mainly for cargo-machete to not error out during inspection.     "vendor/v8",  |
| crates/goose-acp-macros/Cargo.toml | goose-acp-macros | false |  |
| crates/goose-cli/Cargo.toml | goose-cli | false |  |
| crates/goose-mcp/Cargo.toml | goose-mcp | false |  |
| crates/goose-providers/Cargo.toml | goose-providers | false |  |
| crates/goose-sdk-types/Cargo.toml | goose-sdk-types | false |  |
| crates/goose-sdk/Cargo.toml | goose-sdk | false |  |
| crates/goose-server/Cargo.toml | goose-server | false |  |
| crates/goose-test-support/Cargo.toml | goose-test-support | false |  |
| crates/goose-test/Cargo.toml | goose-test | false |  |
| crates/goose/Cargo.toml | goose | false |  |
| vendor/v8/Cargo.toml | v8 | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `crates/goose-mcp/README.md`
- `crates/goose-providers/src/canonical/README.md`
- `crates/goose-sdk/README.md`
- `documentation/README.md`
- `documentation/automation/README.md`
- `documentation/automation/cli-command-tracking/README.md`
- `documentation/automation/recipe-schema-tracking/README.md`
- `documentation/blog/README.md`
- `documentation/docs/assets/bg.png`
- `documentation/docs/assets/bg2.png`
- `documentation/docs/assets/bg3.png`
- `documentation/docs/assets/bg4.png`
- `documentation/docs/assets/docs.css`
- `documentation/docs/assets/docs.js`
- `documentation/docs/assets/goose-in-action.gif`
- `documentation/docs/assets/goose-in-action.mp4`
- `documentation/docs/assets/goose.png`
- `documentation/docs/assets/guides/cli/add-builtin-extension.png`
- `documentation/docs/assets/guides/cli/add-extension.png`
- `documentation/docs/assets/guides/computer-controller-csv-result.png`
- `documentation/docs/assets/guides/create-shared-agent-ui.png`
- `documentation/docs/assets/guides/custom-extension-chat.png`
- `documentation/docs/assets/guides/custom-extension-mcp-inspector.png`
- `documentation/docs/assets/guides/custom-extension-tools.png`
- `documentation/docs/assets/guides/figma-mcp-design.png`
- `documentation/docs/assets/guides/figma-mcp-output.png`
- `documentation/docs/assets/guides/gemini-config-cli.png`
- `documentation/docs/assets/guides/goose-providers-cli.png`
- `documentation/docs/assets/guides/install-extension-ui.png`
- `documentation/docs/assets/guides/interactive-loop.png`
- `documentation/docs/assets/guides/laminar.png`
- `documentation/docs/assets/guides/manage-extensions-ui.png`
- `documentation/docs/assets/guides/mlflow-goose-tracing.png`
- `documentation/docs/assets/guides/programmer-jokes-fetch-mcp.png`
- `documentation/docs/assets/guides/set-up-provider.png`
- `documentation/docs/assets/guides/square-mcp-goosin-menu.png`
- `documentation/docs/assets/guides/ui-session-interface.png`
- `documentation/docs/assets/guides/vscode-mcp.png`
- `documentation/docs/assets/logo.gif`
- `documentation/docs/assets/logo.png`
- `documentation/docs/docker/Dockerfile`
- `documentation/docs/docker/docker-compose.yml`
- `documentation/docs/experimental/_category_.json`
- `documentation/docs/experimental/goose-mobile.md`
- `documentation/docs/experimental/index.md`
- `documentation/docs/experimental/mobile-access.md`
- `documentation/docs/experimental/ollama.md`
- `documentation/docs/experimental/remote-access/index.md`
- ... 30 more

### 에이전트 지침 후보

- `.github/copilot-instructions.md`
- `.github/scripts/pr-review-mcp.py`
- `.github/workflows/rebuild-skills-marketplace.yml`
- `AGENTS.md`
- `CLAUDE.md`
- `crates/goose-cli/src/commands/skills.rs`
- `crates/goose-mcp/Cargo.toml`
- `crates/goose-mcp/README.md`
- `crates/goose-mcp/examples/mcp.rs`
- `crates/goose-mcp/licenses/chart-js.license`
- `crates/goose-mcp/licenses/d3-js.license`
- `crates/goose-mcp/licenses/d3-sankey.license`
- `crates/goose-mcp/licenses/leaflet-markercluster.license`
- `crates/goose-mcp/licenses/leaflet.license`
- `crates/goose-mcp/licenses/mermaid.license`
- `crates/goose-mcp/src/autovisualiser/mod.rs`
- `crates/goose-mcp/src/autovisualiser/templates/assets/chart.min.js`
- `crates/goose-mcp/src/autovisualiser/templates/assets/d3.min.js`
- `crates/goose-mcp/src/autovisualiser/templates/assets/d3.sankey.min.js`
- `crates/goose-mcp/src/autovisualiser/templates/assets/leaflet.markercluster.min.js`
- `crates/goose-mcp/src/autovisualiser/templates/assets/leaflet.min.css`
- `crates/goose-mcp/src/autovisualiser/templates/assets/leaflet.min.js`
- `crates/goose-mcp/src/autovisualiser/templates/assets/mcp-app-base.css`
- `crates/goose-mcp/src/autovisualiser/templates/assets/mcp-app-bridge.js`
- `crates/goose-mcp/src/autovisualiser/templates/assets/mermaid.min.js`
- `crates/goose-mcp/src/autovisualiser/templates/chart_template.html`
- `crates/goose-mcp/src/autovisualiser/templates/chord_template.html`
- `crates/goose-mcp/src/autovisualiser/templates/donut_template.html`
- `crates/goose-mcp/src/autovisualiser/templates/map_template.html`
- `crates/goose-mcp/src/autovisualiser/templates/mermaid_template.html`
- `crates/goose-mcp/src/autovisualiser/templates/radar_template.html`
- `crates/goose-mcp/src/autovisualiser/templates/sankey_template.html`
- `crates/goose-mcp/src/autovisualiser/templates/treemap_template.html`
- `crates/goose-mcp/src/computercontroller/docx_tool.rs`
- `crates/goose-mcp/src/computercontroller/mod.rs`
- `crates/goose-mcp/src/computercontroller/pdf_tool.rs`
- `crates/goose-mcp/src/computercontroller/platform/linux.rs`
- `crates/goose-mcp/src/computercontroller/platform/macos.rs`
- `crates/goose-mcp/src/computercontroller/platform/mod.rs`
- `crates/goose-mcp/src/computercontroller/platform/windows.rs`
- `crates/goose-mcp/src/computercontroller/tests/data/FinancialSample.xlsx`
- `crates/goose-mcp/src/computercontroller/tests/data/sample.docx`
- `crates/goose-mcp/src/computercontroller/tests/data/test.pdf`
- `crates/goose-mcp/src/computercontroller/tests/data/test_image.pdf`
- `crates/goose-mcp/src/computercontroller/xlsx_tool.rs`
- `crates/goose-mcp/src/lib.rs`
- `crates/goose-mcp/src/mcp_server_runner.rs`
- `crates/goose-mcp/src/memory/mod.rs`
- `crates/goose-mcp/src/peekaboo/mod.rs`
- `crates/goose-mcp/src/subprocess.rs`
- `crates/goose-mcp/src/tutorial/mod.rs`
- `crates/goose-mcp/src/tutorial/tutorials/build-mcp-extension.md`
- `crates/goose-mcp/src/tutorial/tutorials/first-game.md`
- `crates/goose-providers/src/mcp_utils.rs`
- `crates/goose-server/src/routes/mcp_app_proxy.rs`
- `crates/goose-server/src/routes/mcp_ui_proxy.rs`
- `crates/goose-server/src/routes/templates/mcp_app_proxy.html`
- `crates/goose-server/src/routes/templates/mcp_ui_proxy.html`
- `crates/goose-test-support/examples/mcp_fixture_server.rs`
- `crates/goose-test-support/src/mcp.rs`
- `crates/goose-test/src/mcp/mod.rs`
- `crates/goose-test/src/mcp/stdio/mod.rs`
- `crates/goose-test/src/mcp/stdio/playback.rs`
- `crates/goose-test/src/mcp/stdio/record.rs`
- `crates/goose/src/acp/mcp_app_proxy.rs`
- `crates/goose/src/acp/templates/mcp_app_proxy.html`
- `crates/goose/src/agents/mcp_client.rs`
- `crates/goose/src/mcp_utils.rs`
- `crates/goose/src/skills/arguments.rs`
- `crates/goose/src/skills/builtin.rs`
- `crates/goose/src/skills/builtins/goose_doc_guide.md`
- `crates/goose/src/skills/client.rs`
- `crates/goose/src/skills/mod.rs`
- `crates/goose/src/slash_commands/skill_slash_command.rs`
- `crates/goose/tests/fastmcp_test_server.py`
- `crates/goose/tests/mcp_integration_test.rs`
- `crates/goose/tests/mcp_replays/github-mcp-serverstdio`
- `crates/goose/tests/mcp_replays/github-mcp-serverstdio.results.json`
- `crates/goose/tests/mcp_replays/npx-y@modelcontextprotocol_server-everything@2026.1.14`
- `crates/goose/tests/mcp_replays/npx-y@modelcontextprotocol_server-everything@2026.1.14.results.json`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `crates/goose-cli/src/commands/configure.rs`
- `crates/goose-cli/src/commands/doctor.rs`
- `crates/goose-cli/src/commands/gateway.rs`
- `crates/goose-cli/src/commands/info.rs`
- `crates/goose-cli/src/commands/mod.rs`
- `crates/goose-cli/src/commands/plugin.rs`
- `crates/goose-cli/src/commands/project.rs`
- `crates/goose-cli/src/commands/recipe.rs`
- `crates/goose-cli/src/commands/review/default_review_prompt.md`
- `crates/goose-cli/src/commands/review/handler.rs`
- `crates/goose-cli/src/commands/review/mod.rs`
- `crates/goose-cli/src/commands/review/orchestrator.rs`
- `crates/goose-cli/src/commands/review/prompt.rs`
- `crates/goose-cli/src/commands/schedule.rs`
- `crates/goose-cli/src/commands/session.rs`
- `crates/goose-cli/src/commands/skills.rs`
- `crates/goose-cli/src/commands/term.rs`
- `crates/goose-cli/src/commands/tui.rs`
- `crates/goose-cli/src/commands/update.rs`
- `crates/goose-mcp/src/autovisualiser/templates/assets/chart.min.js`
- `crates/goose-mcp/src/autovisualiser/templates/assets/d3.min.js`
- `crates/goose-mcp/src/autovisualiser/templates/assets/d3.sankey.min.js`
- `crates/goose-mcp/src/autovisualiser/templates/assets/leaflet.markercluster.min.js`
- `crates/goose-mcp/src/autovisualiser/templates/assets/leaflet.min.css`
- `crates/goose-mcp/src/autovisualiser/templates/assets/leaflet.min.js`
- `crates/goose-mcp/src/autovisualiser/templates/assets/mcp-app-base.css`
- `crates/goose-mcp/src/autovisualiser/templates/assets/mcp-app-bridge.js`
- `crates/goose-mcp/src/autovisualiser/templates/assets/mermaid.min.js`
- `crates/goose-mcp/src/autovisualiser/templates/chart_template.html`
- `crates/goose-mcp/src/autovisualiser/templates/chord_template.html`
- `crates/goose-mcp/src/autovisualiser/templates/donut_template.html`
- `crates/goose-mcp/src/autovisualiser/templates/map_template.html`
- `crates/goose-mcp/src/autovisualiser/templates/mermaid_template.html`
- `crates/goose-mcp/src/autovisualiser/templates/radar_template.html`
- `crates/goose-mcp/src/autovisualiser/templates/sankey_template.html`
- `crates/goose-mcp/src/autovisualiser/templates/treemap_template.html`
- `crates/goose-server/src/commands/agent.rs`
- `crates/goose-server/src/commands/mod.rs`
- `crates/goose-server/src/routes/templates/mcp_app_proxy.html`
- `crates/goose-server/src/routes/templates/mcp_ui_proxy.html`
- `crates/goose/src/acp/templates/mcp_app_proxy.html`
- `crates/goose/src/config/signup_openrouter/templates/error.html`
- `crates/goose/src/config/signup_openrouter/templates/invalid.html`
- `crates/goose/src/config/signup_openrouter/templates/success.html`
- `crates/goose/src/config/signup_tetrate/templates/error.html`
- `crates/goose/src/config/signup_tetrate/templates/invalid.html`
- `crates/goose/src/config/signup_tetrate/templates/success.html`
- `crates/goose/src/skills/arguments.rs`
- `crates/goose/src/skills/builtin.rs`
- `crates/goose/src/skills/builtins/goose_doc_guide.md`
- `crates/goose/src/skills/client.rs`
- `crates/goose/src/skills/mod.rs`
- `documentation/docs/goose-architecture/extensions-design.md`
- `documentation/docs/guides/running-tasks.md`
- `documentation/src/pages/skills/detail.tsx`
- `documentation/src/pages/skills/index.tsx`
- `documentation/src/pages/skills/types/index.tsx`
- `evals/harbor/.agents/skills/compare_tasks/SKILL.md`
- `services/ask-ai-bot/commands/ping.ts`
- `ui/desktop/src/components/skills/SkillsView.tsx`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `crates/goose-mcp/src/computercontroller/tests/data/FinancialSample.xlsx`
- `crates/goose-mcp/src/computercontroller/tests/data/sample.docx`
- `crates/goose-mcp/src/computercontroller/tests/data/test.pdf`
- `crates/goose-mcp/src/computercontroller/tests/data/test_image.pdf`
- `crates/goose-server/tests/tls_test.rs`
- `crates/goose/tests/acp_common_tests/mod.rs`
- `crates/goose/tests/acp_custom_provider_methods_test.rs`
- `crates/goose/tests/acp_custom_requests_test.rs`
- `crates/goose/tests/acp_fixtures/mod.rs`
- `crates/goose/tests/acp_fixtures/provider.rs`
- `crates/goose/tests/acp_fixtures/server.rs`
- `crates/goose/tests/acp_provider_test.rs`
- `crates/goose/tests/acp_secret_cache_invalidation_test.rs`
- `crates/goose/tests/acp_server_test.rs`
- `crates/goose/tests/acp_test_data/openai_basic.txt`
- `crates/goose/tests/acp_test_data/openai_builtin_execute.txt`
- `crates/goose/tests/acp_test_data/openai_builtin_final.txt`
- `crates/goose/tests/acp_test_data/openai_builtin_search.txt`
- `crates/goose/tests/acp_test_data/openai_fs_read_tool_call.txt`
- `crates/goose/tests/acp_test_data/openai_fs_read_tool_result.txt`
- `crates/goose/tests/acp_test_data/openai_fs_write_tool_call.txt`
- `crates/goose/tests/acp_test_data/openai_fs_write_tool_result.txt`
- `crates/goose/tests/acp_test_data/openai_image_attachment.txt`
- `crates/goose/tests/acp_test_data/openai_image_tool_call.txt`
- `crates/goose/tests/acp_test_data/openai_image_tool_result.txt`
- `crates/goose/tests/acp_test_data/openai_models.json`
- `crates/goose/tests/acp_test_data/openai_shell_tool_call.txt`
- `crates/goose/tests/acp_test_data/openai_shell_tool_result.txt`
- `crates/goose/tests/acp_test_data/openai_tool_call.txt`
- `crates/goose/tests/acp_test_data/openai_tool_result.txt`
- `crates/goose/tests/adversary_inspector_tests.rs`
- `crates/goose/tests/agent.rs`
- `crates/goose/tests/compaction.rs`
- `crates/goose/tests/fastmcp_test_server.py`
- `crates/goose/tests/local_inference_integration.rs`
- `crates/goose/tests/local_inference_perf.rs`
- `crates/goose/tests/mcp_integration_test.rs`
- `crates/goose/tests/mcp_replays/github-mcp-serverstdio`
- `crates/goose/tests/mcp_replays/github-mcp-serverstdio.results.json`
- `crates/goose/tests/mcp_replays/npx-y@modelcontextprotocol_server-everything@2026.1.14`
- `crates/goose/tests/mcp_replays/npx-y@modelcontextprotocol_server-everything@2026.1.14.results.json`
- `crates/goose/tests/mcp_replays/uvrun--withfastmcp==2.14.4fastmcpruntests_fastmcp_test_server.py`
- `crates/goose/tests/mcp_replays/uvrun--withfastmcp==2.14.4fastmcpruntests_fastmcp_test_server.py.results.json`
- `crates/goose/tests/mcp_replays/uvxmcp-server-fetch`
- `crates/goose/tests/mcp_replays/uvxmcp-server-fetch.results.json`
- `crates/goose/tests/providers.rs`
- `crates/goose/tests/repetition_inspector_tests.rs`
- `crates/goose/tests/scheduler_test_support.rs`
- `crates/goose/tests/session_id_propagation_test.rs`
- `crates/goose/tests/subprocess_cleanup.rs`
- `crates/goose/tests/tetrate_streaming.rs`
- `crates/goose/tests/tool_inspection_manager_tests.rs`
- `documentation/scripts/generate-docs-map.test.js`
- `oidc-proxy/test/index.test.js`
- `ui/desktop/src/App.test.tsx`
- `ui/desktop/src/__tests__/sessions.test.ts`
- `ui/desktop/src/components/ExtensionInstallModal.test.tsx`
- `ui/desktop/src/components/MarkdownContent.test.tsx`
- `ui/desktop/src/components/__tests__/GroupedExtensionLoadingToast.test.tsx`
- `ui/desktop/src/components/alerts/__tests__/AlertBox.test.tsx`
- `ui/desktop/src/components/alerts/__tests__/useAlerts.test.tsx`
- `ui/desktop/src/components/recipes/__tests__/CreateRecipeFromSessionModal.test.tsx`
- `ui/desktop/src/components/recipes/shared/__tests__/RecipeActivityEditor.test.tsx`
- `ui/desktop/src/components/recipes/shared/__tests__/RecipeFormFields.test.tsx`
- `ui/desktop/src/components/recipes/shared/__tests__/recipeFormSchema.test.ts`
- `ui/desktop/src/components/schedule/__tests__/CronPicker.test.tsx`
- `ui/desktop/src/components/settings/auth/AuthSettingsSection.test.tsx`
- `ui/desktop/src/components/settings/extensions/bundled-extensions.test.ts`
- `ui/desktop/src/components/settings/extensions/deeplink.test.ts`
- `ui/desktop/src/components/settings/extensions/modal/ExtensionModal.test.tsx`
- `ui/desktop/src/components/settings/extensions/utils.test.ts`
- `ui/desktop/src/components/settings/models/bottom_bar/ModelsBottomBar.test.tsx`
- `ui/desktop/src/hooks/useAutoSubmit.test.tsx`
- `ui/desktop/src/hooks/useSessionEvents.test.tsx`
- `ui/desktop/src/i18n/i18n.test.ts`
- `ui/desktop/src/recipe/validation.test.ts`
- `ui/desktop/src/test/setup.ts`
- `ui/desktop/src/utils/__tests__/csp.test.ts`
- `ui/desktop/src/utils/__tests__/parameterSubstitution.test.ts`
- `ui/desktop/src/utils/htmlSecurity.test.ts`
- ... 16 more

### CI/Docker 후보

- `.devcontainer/Dockerfile`
- `.github/workflows/autoclose`
- `.github/workflows/build-cli.yml`
- `.github/workflows/build-notify.yml`
- `.github/workflows/bundle-desktop-intel.yml`
- `.github/workflows/bundle-desktop-linux.yml`
- `.github/workflows/bundle-desktop-manual.yml`
- `.github/workflows/bundle-desktop-windows.yml`
- `.github/workflows/bundle-desktop.yml`
- `.github/workflows/canary.yml`
- `.github/workflows/cargo-deny.yml`
- `.github/workflows/cargo-machete.yml`
- `.github/workflows/check-release-pr.yaml`
- `.github/workflows/ci.yml`
- `.github/workflows/close-release-pr-on-tag.yaml`
- `.github/workflows/code-review.yml`
- `.github/workflows/create-release-branch.yaml`
- `.github/workflows/create-version-bump-pr.yaml`
- `.github/workflows/dependabot-auto-merge.yml`
- `.github/workflows/deploy-docs-and-extensions.yml`
- `.github/workflows/docs-update-cli-ref.yml`
- `.github/workflows/docs-update-recipe-ref.yml`
- `.github/workflows/goose-issue-solver.yml`
- `.github/workflows/goose-pr-reviewer.yml`
- `.github/workflows/goose-release-notes.yml`
- `.github/workflows/minor-release.yaml`
- `.github/workflows/patch-release.yaml`
- `.github/workflows/pr-comment-build-cli.yml`
- `.github/workflows/pr-comment-bundle-intel.yml`
- `.github/workflows/pr-comment-bundle-windows.yml`
- `.github/workflows/pr-comment-bundle.yml`
- `.github/workflows/pr-smoke-test.yml`
- `.github/workflows/pr-website-preview.yml`
- `.github/workflows/publish-ask-ai-bot.yml`
- `.github/workflows/publish-docker.yml`
- `.github/workflows/publish-npm.yml`
- `.github/workflows/quarantine.yml`
- `.github/workflows/rebuild-skills-marketplace.yml`
- `.github/workflows/recipe-security-scanner.yml`
- `.github/workflows/release-branches.yml`
- `.github/workflows/release.yml`
- `.github/workflows/scorecard.yml`
- `.github/workflows/stale.yml`
- `.github/workflows/take.yml`
- `.github/workflows/test-finder.yml`
- `.github/workflows/update-hacktoberfest-leaderboard.yml`
- `.github/workflows/update-health-dashboard.yml`
- `.github/workflows/update-release-pr.yaml`
- `Dockerfile`
- `documentation/docs/docker/Dockerfile`
- `documentation/docs/docker/docker-compose.yml`
- `recipe-scanner/Dockerfile`
- `services/ask-ai-bot/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .rs | 442 |
| .tsx | 362 |
| .md | 333 |
| .png | 305 |
| .ts | 186 |
| .json | 176 |
| .yaml | 99 |
| .yml | 47 |
| .js | 41 |
| .jpg | 29 |
| .sh | 28 |
| .svg | 25 |
| .py | 24 |
| .html | 22 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `crates/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `documentation/ 내부 책임 분리`
- `ui/ 내부 책임 분리`
- `crates/goose-cli/src/commands/configure.rs 스펙/명령 의미`
- `crates/goose-cli/src/commands/doctor.rs 스펙/명령 의미`
- `crates/goose-cli/src/commands/gateway.rs 스펙/명령 의미`
- `crates/goose-cli/src/commands/info.rs 스펙/명령 의미`
- `crates/goose-cli/src/commands/mod.rs 스펙/명령 의미`
- `.devcontainer/Dockerfile 실행 스크립트와 패키지 경계`
- `Cargo.toml 실행 스크립트와 패키지 경계`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `crates/goose-acp-macros/Cargo.toml 실행 스크립트와 패키지 경계`
- `crates/goose-cli/Cargo.toml 실행 스크립트와 패키지 경계`

