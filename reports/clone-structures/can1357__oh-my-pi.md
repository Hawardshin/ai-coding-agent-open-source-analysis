# can1357/oh-my-pi 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/can1357__oh-my-pi |
| remote | https://github.com/can1357/oh-my-pi.git |
| HEAD | 7251ca1 (2026-06-17) test(coding-agent): added OpenAI key initialization in context test setup |
| branch | main |
| groups | previous-clone-inventory-107 |
| files | 4212 |
| dirs | 456 |
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
- 주요 heading: `Install`, `Shell completions`, `zsh — add to ~/.zshrc (or write the output into a file on your $fpath)`, `bash — add to ~/.bashrc`, `fish`, `Every tool, _benchmaxxed_.`, `The Pi _you love_, with **batteries included**.`, `01 · Code execution w/ tool-calling`, `02 · LSP wired into every write`, `03 · Drives a real debugger`, `04 · Time-traveling stream rules`, `05 · First-class subagents`, `06 · Read a pdf on arxiv, why not?`, `07 · Unapologetically native. Even on Windows.`, `08 · Code review with priorities and a verdict`, `09 · Hashline: edit by content hash`, `10 · GitHub is just another filesystem`, `11 · Hindsight: memory the agent curates`

> <p align="center" <img src="https //github.com/can1357/oh my pi/blob/main/assets/hero.png?raw=true" alt="omp" </p <p align="center" <strong A coding agent with the IDE wired in.</strong <strong <a href="https //omp.sh" omp.sh</a </strong </p <p align="center" <a href="https //www.npmjs.com/package/@oh my pi/pi coding agent" <img src="https //img.shields.io/npm/v/@oh my pi/pi coding agent?style=flat&colorA=222222&colorB=CB3837" alt="npm version" </a <a href="https //github.com/can1357/oh my pi/blob/main/packages/coding agent/CHANGELOG.md" <img src="https //img.shields.io/badge/changelog keep E05735?style=flat&colorA=222222" alt="Changelog" </a <a href="https //github.com/can1357/oh my pi/actions" <img src="https //img.shields.io/github/actions/workflow/status/can1357/oh my pi/ci.yml?style=flat&colorA=222222&colorB=3FB950" alt="CI" </a <a href="https //github.com/can1357/oh my pi/blob/main

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .fallowrc.jsonc | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .omp | dir |
| AGENTS.md | file |
| assets | dir |
| biome.json | file |
| bun.lock | file |
| bunfig.toml | file |
| Cargo.lock | file |
| Cargo.toml | file |
| crates | dir |
| Dockerfile | file |
| Dockerfile.dockerignore | file |
| Dockerfile.robomp | file |
| Dockerfile.robomp.dockerignore | file |
| docs | dir |
| infra | dir |
| LICENSE | file |
| package.json | file |
| packages | dir |
| patches | dir |
| python | dir |
| README.md | file |
| rust-analyzer.toml | file |
| rust-toolchain.toml | file |
| rustfmt.toml | file |
| scripts | dir |
| tsconfig.base.json | file |
| tsconfig.json | file |
| tsconfig.tools.json | file |
| types | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| packages/ | 3450 |
| crates/ | 389 |
| python/ | 120 |
| docs/ | 119 |
| scripts/ | 68 |
| (root) | 22 |
| .github/ | 14 |
| assets/ | 14 |
| infra/ | 8 |
| .omp/ | 6 |
| patches/ | 1 |
| types/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| packages/ | 3450 | preferred |
| crates/ | 389 | preferred |
| docs/ | 119 | preferred |
| scripts/ | 68 | preferred |
| packages/coding-agent/ | 2120 | large |
| packages/coding-agent/src/ | 1198 | large |
| packages/coding-agent/test/ | 862 | large |
| packages/ai/ | 470 | large |
| packages/ai/src/ | 245 | large |
| packages/ai/test/ | 218 | large |
| crates/pi-shell/ | 171 | large |
| packages/mnemopi/ | 137 | large |
| packages/tui/ | 124 | large |
| python/ | 120 | large |
| crates/pi-shell/src/ | 118 | large |
| packages/snapcompact/ | 118 | large |
| crates/brush-core-vendored/ | 107 | large |
| packages/snapcompact/research/ | 107 | large |
| python/robomp/ | 107 | large |
| crates/brush-core-vendored/src/ | 101 | large |
| packages/catalog/ | 95 | large |
| packages/collab-web/ | 94 | large |
| packages/tui/test/ | 79 | large |
| packages/stats/ | 69 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Cargo.toml`
- `Dockerfile`
- `bun.lock`
- `crates/brush-builtins-vendored/Cargo.toml`
- `crates/brush-core-vendored/Cargo.toml`
- `crates/pi-ast/Cargo.toml`
- `crates/pi-iso/Cargo.toml`
- `crates/pi-natives/Cargo.toml`
- `crates/pi-shell/Cargo.toml`
- `docs/skills/examples/hello-extension/package.json`
- `docs/skills/examples/mini-marketplace/my-plugin/package.json`
- `docs/skills/examples/safety-hook/package.json`
- `package.json`
- `packages/agent/package.json`
- `packages/agent/tsconfig.json`
- `packages/ai/package.json`
- `packages/ai/tsconfig.json`
- `packages/catalog/package.json`
- `packages/catalog/tsconfig.json`
- `packages/coding-agent/examples/extensions/with-deps/package.json`
- `packages/coding-agent/package.json`
- `packages/coding-agent/tsconfig.json`
- `packages/collab-web/package.json`
- `packages/collab-web/tsconfig.json`
- `packages/hashline/package.json`
- `packages/hashline/tsconfig.json`
- `packages/mnemopi/package.json`
- `packages/mnemopi/tsconfig.json`
- `packages/natives/package.json`
- `packages/natives/tsconfig.json`
- `packages/snapcompact/package.json`
- `packages/snapcompact/tsconfig.json`
- `packages/stats/package.json`
- `packages/stats/tsconfig.json`
- `packages/swarm-extension/package.json`
- `packages/swarm-extension/tsconfig.json`
- `packages/tui/package.json`
- `packages/tui/tsconfig.json`
- `packages/typescript-edit-benchmark/package.json`
- `packages/typescript-edit-benchmark/tsconfig.json`
- `packages/utils/package.json`
- `packages/utils/tsconfig.json`
- `packages/wire/package.json`
- `packages/wire/tsconfig.json`
- `python/omp-rpc/pyproject.toml`
- `python/robomp/docker-compose.yml`
- `python/robomp/pyproject.toml`
- `python/robomp/web/package.json`
- `python/robomp/web/tsconfig.json`
- `python/robomp/web/vite.config.ts`
- `tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| docs/skills/examples/hello-extension/package.json | hello-extension |  |  |
| docs/skills/examples/mini-marketplace/my-plugin/package.json | my-plugin |  |  |
| docs/skills/examples/safety-hook/package.json | safety-hook |  |  |
| package.json | omp-monorepo | install:dev, dev, dev:timing, stats, collab:web:dev, collab:relay, collab:mock-host, collab:web:build, claude:trace, build, build:native, test, test:ts, test:scripts, test:rs, check | sherpa-onnx, sherpa-onnx-darwin-arm64, sherpa-onnx-node |
| packages/agent/package.json | @oh-my-pi/pi-agent-core | check, check:types, lint, test, fix, fmt | @oh-my-pi/pi-ai, @oh-my-pi/pi-catalog, @oh-my-pi/pi-natives, @oh-my-pi/pi-utils, @oh-my-pi/snapcompact, @opentelemetry/api |
| packages/ai/package.json | @oh-my-pi/pi-ai | check, check:types, lint, test, fix, fmt | @bufbuild/protobuf, @oh-my-pi/pi-catalog, @oh-my-pi/pi-utils, partial-json, zod |
| packages/catalog/package.json | @oh-my-pi/pi-catalog | check, check:types, lint, test, fix, fmt, generate-models | @bufbuild/protobuf, @oh-my-pi/pi-utils, zod |
| packages/coding-agent/examples/extensions/with-deps/package.json | pi-extension-with-deps |  | ms |
| packages/coding-agent/package.json | @oh-my-pi/pi-coding-agent | build, check, check:types, lint, test, fix, fmt, format-prompts, generate-docs-index, prepack, bench:guard | @agentclientprotocol/sdk, @babel/parser, @mozilla/readability, @oh-my-pi/hashline, @oh-my-pi/omp-stats, @oh-my-pi/pi-agent-core, @oh-my-pi/pi-ai, @oh-my-pi/pi-catalog, @oh-my-pi/pi-mnemopi, @oh-my-pi/pi-natives, @oh-my-pi/pi-tui, @oh-my-pi/pi-utils, @oh-my-pi/pi-wire, @oh-my-pi/snapcompact |
| packages/collab-web/package.json | @oh-my-pi/collab-web | dev, mock-host, relay, build, build:tool-views, prepack, test, check, check:types, lint, fix, fmt | @oh-my-pi/pi-wire, lucide-react, marked, react, react-dom |
| packages/hashline/package.json | @oh-my-pi/hashline | check, check:types, lint, test, fix, fmt | diff, lru-cache |
| packages/mnemopi/package.json | @oh-my-pi/pi-mnemopi | check, check:types, lint, test, fix, fmt | @oh-my-pi/pi-ai, @oh-my-pi/pi-catalog, @oh-my-pi/pi-utils, lru-cache |
| packages/natives/package.json | @oh-my-pi/pi-natives | build, check, check:types, lint, test, fix, fmt, embed:native, gen:npm, bench |  |
| packages/snapcompact/package.json | @oh-my-pi/snapcompact | check, check:types, lint, test, fix, fmt | @oh-my-pi/pi-ai, @oh-my-pi/pi-natives, @oh-my-pi/pi-utils |
| packages/stats/package.json | @oh-my-pi/omp-stats | build, dev, check, check:types, lint, fix, fmt | @oh-my-pi/pi-ai, @oh-my-pi/pi-catalog, @oh-my-pi/pi-utils, @tailwindcss/node, chart.js, date-fns, lucide-react, react, react-chartjs-2, react-dom, tailwindcss |
| packages/swarm-extension/package.json | @oh-my-pi/swarm-extension | check, check:types, lint, fix, fmt | @oh-my-pi/pi-utils |
| packages/tui/package.json | @oh-my-pi/pi-tui | check, check:types, lint, test, fix, fmt | @oh-my-pi/pi-natives, @oh-my-pi/pi-utils, lru-cache, marked |
| packages/typescript-edit-benchmark/package.json | @oh-my-pi/typescript-edit-benchmark | check, check:types, lint, test, fix, fmt, generate, start | @babel/generator, @babel/parser, @babel/traverse, @babel/types, @oh-my-pi/hashline, @oh-my-pi/pi-agent-core, @oh-my-pi/pi-coding-agent, @oh-my-pi/pi-utils, diff, prettier, regexp-tree, @oh-my-pi/pi-ai, @oh-my-pi/pi-tui |
| packages/utils/package.json | @oh-my-pi/pi-utils | check, check:types, lint, test, fix, fmt | @oh-my-pi/pi-natives, beautiful-mermaid, handlebars, winston, winston-daily-rotate-file |
| packages/wire/package.json | @oh-my-pi/pi-wire | check, check:types, lint, fix, fmt, test |  |
| python/robomp/web/package.json | robomp-web | dev, build, preview, typecheck | solid-js |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| python/omp-rpc/pyproject.toml | omp-rpc | false | false | false | false |
| python/robomp/pyproject.toml | robomp | false | false | true | true |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| Cargo.toml |  | true | "crates/*" |
| crates/brush-builtins-vendored/Cargo.toml | brush-builtins | false |  |
| crates/brush-core-vendored/Cargo.toml | brush-core | false |  |
| crates/pi-ast/Cargo.toml | pi-ast | false |  |
| crates/pi-iso/Cargo.toml | pi-iso | false |  |
| crates/pi-natives/Cargo.toml | pi-natives | false |  |
| crates/pi-shell/Cargo.toml | pi-shell | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `crates/brush-builtins-vendored/README.md`
- `crates/brush-core-vendored/README.md`
- `docs/ERRATA-GPT5-HARMONY.md`
- `docs/adding-a-provider.md`
- `docs/advisor-watchdog.md`
- `docs/ai-schema-normalize.md`
- `docs/approval-mode.md`
- `docs/auth-broker-gateway.md`
- `docs/bash-tool-runtime.md`
- `docs/blob-artifact-architecture.md`
- `docs/collab.md`
- `docs/compaction.md`
- `docs/config-usage.md`
- `docs/context-files.md`
- `docs/custom-tools.md`
- `docs/environment-variables.md`
- `docs/extension-loading.md`
- `docs/extensions.md`
- `docs/fs-scan-cache-architecture.md`
- `docs/gemini-manifest-extensions.md`
- `docs/handoff-generation-pipeline.md`
- `docs/hooks.md`
- `docs/install-id.md`
- `docs/keybindings.md`
- `docs/local-models.md`
- `docs/lsp-config.md`
- `docs/macos-signing-notarization.md`
- `docs/marketplace.md`
- `docs/mcp-config.md`
- `docs/mcp-protocol-transports.md`
- `docs/mcp-runtime-lifecycle.md`
- `docs/mcp-server-tool-authoring.md`
- `docs/memory.md`
- `docs/mnemosyne-memory-backend.md`
- `docs/models.md`
- `docs/natives-addon-loader-runtime.md`
- `docs/natives-architecture.md`
- `docs/natives-binding-contract.md`
- `docs/natives-build-release-debugging.md`
- `docs/natives-media-system-utils.md`
- `docs/natives-rust-task-cancellation.md`
- `docs/natives-shell-pty-process.md`
- `docs/natives-text-search-pipeline.md`
- `docs/non-compaction-retry-policy.md`
- `docs/notebook-tool-runtime.md`
- `docs/plugin-manager-installer-plumbing.md`
- `docs/porting-from-pi-mono.md`
- `docs/porting-to-natives.md`
- `docs/provider-streaming-internals.md`
- ... 30 more

### 에이전트 지침 후보

- `.omp/skills/semantic-compression/SKILL.md`
- `.omp/skills/system-prompts/SKILL.md`
- `AGENTS.md`
- `docs/mcp-config.md`
- `docs/mcp-protocol-transports.md`
- `docs/mcp-runtime-lifecycle.md`
- `docs/mcp-server-tool-authoring.md`
- `docs/skills.md`
- `docs/skills/authoring-extensions.md`
- `docs/skills/authoring-hooks.md`
- `docs/skills/authoring-marketplaces.md`
- `docs/skills/examples/hello-extension/README.md`
- `docs/skills/examples/hello-extension/index.ts`
- `docs/skills/examples/hello-extension/package.json`
- `docs/skills/examples/mini-marketplace/.claude-plugin/marketplace.json`
- `docs/skills/examples/mini-marketplace/README.md`
- `docs/skills/examples/mini-marketplace/my-plugin/index.ts`
- `docs/skills/examples/mini-marketplace/my-plugin/package.json`
- `docs/skills/examples/safety-hook/README.md`
- `docs/skills/examples/safety-hook/index.ts`
- `docs/skills/examples/safety-hook/package.json`
- `docs/toolconv/gemini.md`
- `packages/ai/src/dialect/gemini.md`
- `packages/coding-agent/examples/sdk/04-skills.ts`
- `packages/coding-agent/src/autolearn/managed-skills.ts`
- `packages/coding-agent/src/capability/mcp.ts`
- `packages/coding-agent/src/capability/skill.ts`
- `packages/coding-agent/src/config/mcp-schema.json`
- `packages/coding-agent/src/discovery/mcp-json.ts`
- `packages/coding-agent/src/exa/mcp-client.ts`
- `packages/coding-agent/src/extensibility/skills.ts`
- `packages/coding-agent/src/internal-urls/mcp-protocol.ts`
- `packages/coding-agent/src/internal-urls/skill-protocol.ts`
- `packages/coding-agent/src/mcp/client.ts`
- `packages/coding-agent/src/mcp/config-writer.ts`
- `packages/coding-agent/src/mcp/config.ts`
- `packages/coding-agent/src/mcp/index.ts`
- `packages/coding-agent/src/mcp/json-rpc.ts`
- `packages/coding-agent/src/mcp/loader.ts`
- `packages/coding-agent/src/mcp/manager.ts`
- `packages/coding-agent/src/mcp/oauth-credentials.ts`
- `packages/coding-agent/src/mcp/oauth-discovery.ts`
- `packages/coding-agent/src/mcp/oauth-flow.ts`
- `packages/coding-agent/src/mcp/render.ts`
- `packages/coding-agent/src/mcp/smithery-auth.ts`
- `packages/coding-agent/src/mcp/smithery-connect.ts`
- `packages/coding-agent/src/mcp/smithery-registry.ts`
- `packages/coding-agent/src/mcp/startup-events.ts`
- `packages/coding-agent/src/mcp/timeout.ts`
- `packages/coding-agent/src/mcp/tool-bridge.ts`
- `packages/coding-agent/src/mcp/tool-cache.ts`
- `packages/coding-agent/src/mcp/transports/http.ts`
- `packages/coding-agent/src/mcp/transports/index.ts`
- `packages/coding-agent/src/mcp/transports/stdio.ts`
- `packages/coding-agent/src/mcp/types.ts`
- `packages/coding-agent/src/modes/components/mcp-add-wizard.ts`
- `packages/coding-agent/src/modes/components/skill-message.ts`
- `packages/coding-agent/src/modes/controllers/mcp-command-controller.ts`
- `packages/coding-agent/src/prompts/tools/manage-skill.md`
- `packages/coding-agent/src/slash-commands/helpers/mcp.ts`
- `packages/coding-agent/src/tools/bash-skill-urls.ts`
- `packages/coding-agent/src/tools/manage-skill.ts`
- `packages/coding-agent/test/acp-mcp-isolation.test.ts`
- `packages/coding-agent/test/agent-session-mcp-discovery.test.ts`
- `packages/coding-agent/test/agent-session-skill-keywords.test.ts`
- `packages/coding-agent/test/autolearn-managed-skills.test.ts`
- `packages/coding-agent/test/discovery/agents-monorepo-skills.test.ts`
- `packages/coding-agent/test/discovery/github-skills.test.ts`
- `packages/coding-agent/test/discovery/mcp-json.test.ts`
- `packages/coding-agent/test/discovery/mcp-profile.test.ts`
- `packages/coding-agent/test/discovery/monorepo-skills.test.ts`
- `packages/coding-agent/test/fixtures/crash-after-init-mcp.ts`
- `packages/coding-agent/test/fixtures/hang-during-init-mcp.ts`
- `packages/coding-agent/test/fixtures/instructions-mcp.ts`
- `packages/coding-agent/test/fixtures/many-tools-mcp.ts`
- `packages/coding-agent/test/fixtures/skills-collision/first/calendar/SKILL.md`
- `packages/coding-agent/test/fixtures/skills-collision/second/calendar/SKILL.md`
- `packages/coding-agent/test/fixtures/skills/consecutive-hyphens/SKILL.md`
- `packages/coding-agent/test/fixtures/skills/invalid-name-chars/SKILL.md`
- `packages/coding-agent/test/fixtures/skills/long-name/SKILL.md`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `.omp/commands/fix-issues.md`
- `.omp/commands/release.md`
- `.omp/commands/review-prs.md`
- `.omp/commands/triage.md`
- `.omp/skills/semantic-compression/SKILL.md`
- `.omp/skills/system-prompts/SKILL.md`
- `docs/skills/authoring-extensions.md`
- `docs/skills/authoring-hooks.md`
- `docs/skills/authoring-marketplaces.md`
- `docs/skills/examples/hello-extension/README.md`
- `docs/skills/examples/hello-extension/index.ts`
- `docs/skills/examples/hello-extension/package.json`
- `docs/skills/examples/mini-marketplace/.claude-plugin/marketplace.json`
- `docs/skills/examples/mini-marketplace/README.md`
- `docs/skills/examples/mini-marketplace/my-plugin/index.ts`
- `docs/skills/examples/mini-marketplace/my-plugin/package.json`
- `docs/skills/examples/safety-hook/README.md`
- `docs/skills/examples/safety-hook/index.ts`
- `docs/skills/examples/safety-hook/package.json`
- `packages/coding-agent/src/cli/commands/init-xdg.ts`
- `packages/coding-agent/src/commands/acp.ts`
- `packages/coding-agent/src/commands/agents.ts`
- `packages/coding-agent/src/commands/auth-broker.ts`
- `packages/coding-agent/src/commands/auth-gateway.ts`
- `packages/coding-agent/src/commands/bench.ts`
- `packages/coding-agent/src/commands/commit.ts`
- `packages/coding-agent/src/commands/complete.ts`
- `packages/coding-agent/src/commands/completions.ts`
- `packages/coding-agent/src/commands/config.ts`
- `packages/coding-agent/src/commands/dry-balance.ts`
- `packages/coding-agent/src/commands/gallery.ts`
- `packages/coding-agent/src/commands/grep.ts`
- `packages/coding-agent/src/commands/grievances.ts`
- `packages/coding-agent/src/commands/install.ts`
- `packages/coding-agent/src/commands/join.ts`
- `packages/coding-agent/src/commands/launch.ts`
- `packages/coding-agent/src/commands/models.ts`
- `packages/coding-agent/src/commands/plugin.ts`
- `packages/coding-agent/src/commands/read.ts`
- `packages/coding-agent/src/commands/say.ts`
- `packages/coding-agent/src/commands/setup.ts`
- `packages/coding-agent/src/commands/shell.ts`
- `packages/coding-agent/src/commands/ssh.ts`
- `packages/coding-agent/src/commands/stats.ts`
- `packages/coding-agent/src/commands/tiny-models.ts`
- `packages/coding-agent/src/commands/token.ts`
- `packages/coding-agent/src/commands/update.ts`
- `packages/coding-agent/src/commands/usage.ts`
- `packages/coding-agent/src/commands/web-search.ts`
- `packages/coding-agent/src/commands/worktree.ts`
- `packages/coding-agent/test/fixtures/skills/consecutive-hyphens/SKILL.md`
- `packages/coding-agent/test/fixtures/skills/invalid-name-chars/SKILL.md`
- `packages/coding-agent/test/fixtures/skills/long-name/SKILL.md`
- `packages/coding-agent/test/fixtures/skills/missing-description/SKILL.md`
- `packages/coding-agent/test/fixtures/skills/name-mismatch/SKILL.md`
- `packages/coding-agent/test/fixtures/skills/nested/child-skill/SKILL.md`
- `packages/coding-agent/test/fixtures/skills/no-frontmatter/SKILL.md`
- `packages/coding-agent/test/fixtures/skills/unknown-field/SKILL.md`
- `packages/coding-agent/test/fixtures/skills/valid-skill/SKILL.md`
- `packages/coding-agent/test/marketplace/fixtures/valid-marketplace/plugins/hello-plugin/commands/hello.md`
- `packages/coding-agent/test/marketplace/fixtures/valid-marketplace/plugins/hello-plugin/skills/greet/SKILL.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `crates/pi-shell/tests/fixtures/minimizer/cargo/test-pass.cmd`
- `crates/pi-shell/tests/fixtures/minimizer/cargo/test-pass.raw`
- `crates/pi-shell/tests/fixtures/minimizer/git/log-default.cmd`
- `crates/pi-shell/tests/fixtures/minimizer/git/log-default.min`
- `crates/pi-shell/tests/fixtures/minimizer/git/log-default.raw`
- `crates/pi-shell/tests/fixtures/minimizer/git/log.cmd`
- `crates/pi-shell/tests/fixtures/minimizer/git/log.min`
- `crates/pi-shell/tests/fixtures/minimizer/git/log.raw`
- `crates/pi-shell/tests/fixtures/minimizer/git/status-long.cmd`
- `crates/pi-shell/tests/fixtures/minimizer/git/status-long.min`
- `crates/pi-shell/tests/fixtures/minimizer/git/status-long.raw`
- `crates/pi-shell/tests/fixtures/minimizer/git/status.cmd`
- `crates/pi-shell/tests/fixtures/minimizer/git/status.min`
- `crates/pi-shell/tests/fixtures/minimizer/git/status.raw`
- `crates/pi-shell/tests/fixtures/minimizer/glab/ci-trace.cmd`
- `crates/pi-shell/tests/fixtures/minimizer/glab/ci-trace.raw`
- `crates/pi-shell/tests/fixtures/minimizer/glab/release-list.cmd`
- `crates/pi-shell/tests/fixtures/minimizer/glab/release-list.min`
- `crates/pi-shell/tests/fixtures/minimizer/glab/release-list.raw`
- `crates/pi-shell/tests/fixtures/minimizer/glab/release-view.cmd`
- `crates/pi-shell/tests/fixtures/minimizer/glab/release-view.raw`
- `crates/pi-shell/tests/fixtures/minimizer/go/test-pass.cmd`
- `crates/pi-shell/tests/fixtures/minimizer/go/test-pass.raw`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/gradle-build.cmd`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/gradle-build.raw`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/gradle-connected.cmd`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/gradle-connected.raw`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/gradle-lint.cmd`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/gradle-lint.exit`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/gradle-lint.raw`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/gradle-test.cmd`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/gradle-test.min`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/gradle-test.raw`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/mvn-install-full.cmd`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/mvn-install-full.raw`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/mvn-install-slice.cmd`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/mvn-install-slice.raw`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/mvn-quiet-fail.cmd`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/mvn-quiet-fail.exit`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/mvn-quiet-fail.raw`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/mvn-test-fail.cmd`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/mvn-test-fail.exit`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/mvn-test-fail.raw`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/mvn-test-pass-full.cmd`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/mvn-test-pass-full.raw`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/mvn-test-pass-slice.cmd`
- `crates/pi-shell/tests/fixtures/minimizer/jvm/mvn-test-pass-slice.raw`
- `crates/pi-shell/tests/fixtures/minimizer/npm/install.cmd`
- `crates/pi-shell/tests/fixtures/minimizer/npm/install.raw`
- `crates/pi-shell/tests/minimizer_fixtures.rs`
- `packages/agent/test/agent-loop.test.ts`
- `packages/agent/test/agent.test.ts`
- `packages/agent/test/append-only-context.test.ts`
- `packages/agent/test/compaction-error-status.test.ts`
- `packages/agent/test/compaction-file-ops.test.ts`
- `packages/agent/test/compaction-telemetry.test.ts`
- `packages/agent/test/compaction-thinking-level.test.ts`
- `packages/agent/test/handoff.test.ts`
- `packages/agent/test/helpers.ts`
- `packages/agent/test/otel.test.ts`
- `packages/agent/test/prompt-tools-loop.test.ts`
- `packages/agent/test/proxy-stream-disconnect.test.ts`
- `packages/agent/test/remote-compaction.test.ts`
- `packages/agent/test/run-summary.test.ts`
- `packages/agent/test/serialize-conversation.test.ts`
- `packages/agent/test/shake.test.ts`
- `packages/agent/test/snapcompact-frames.test.ts`
- `packages/agent/test/supersede-prune.test.ts`
- `packages/agent/test/tool-protection.test.ts`
- `packages/agent/test/utils/calculate.ts`
- `packages/agent/test/utils/get-current-time.ts`
- `packages/agent/test/yield.test.ts`
- `packages/ai/src/providers/__tests__/google-auth.test.ts`
- `packages/ai/src/registry/oauth/__tests__/xai-oauth.test.ts`
- `packages/ai/test/abort-source-tracker.test.ts`
- `packages/ai/test/abort.test.ts`
- `packages/ai/test/alibaba-endpoint-selection.test.ts`
- `packages/ai/test/anthropic-abandoned-tooluse-replay.test.ts`
- `packages/ai/test/anthropic-alignment.test.ts`
- `packages/ai/test/anthropic-client.test.ts`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `Dockerfile`
- `python/robomp/docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 2764 |
| .md | 421 |
| .rs | 243 |
| .json | 176 |
| .py | 160 |
| .txt | 99 |
| .tsx | 91 |
| .toml | 82 |
| .png | 24 |
| .cmd | 20 |
| .raw | 20 |
| .yml | 13 |
| .webp | 11 |
| .css | 9 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `packages/ 내부 책임 분리`
- `crates/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `packages/coding-agent/ 내부 책임 분리`
- `.omp/commands/fix-issues.md 스펙/명령 의미`
- `.omp/commands/release.md 스펙/명령 의미`
- `.omp/commands/review-prs.md 스펙/명령 의미`
- `.omp/commands/triage.md 스펙/명령 의미`
- `.omp/skills/semantic-compression/SKILL.md 스펙/명령 의미`
- `Cargo.toml 실행 스크립트와 패키지 경계`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `bun.lock 실행 스크립트와 패키지 경계`
- `crates/brush-builtins-vendored/Cargo.toml 실행 스크립트와 패키지 경계`
- `crates/brush-core-vendored/Cargo.toml 실행 스크립트와 패키지 경계`

