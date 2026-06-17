# mksglu/context-mode 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/mksglu__context-mode |
| remote | https://github.com/mksglu/context-mode.git |
| HEAD | 26ef3ba (2026-06-17) ci: update install stats |
| branch | main |
| groups | previous-clone-inventory-107 |
| files | 562 |
| dirs | 105 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Context Mode`, `The Problem`, `How Context Mode Solves It`, `Install`, `Option A — Marketplace plugin (recommended once published)`, `Option B — Manual install (existing path)`, `Tools`, `How the Sandbox Works`, `How the Knowledge Base Works`, `Ranking: Reciprocal Rank Fusion`, `Proximity Reranking`, `Fuzzy Correction`, `Smart Snippets`, `TTL Cache`, `Progressive Throttling`, `Session Continuity`, `Platform Compatibility`, `Routing Enforcement`

> Context Mode The other half of the context problem. <p align="center" <sub Used across teams at</sub <br <br <a href=" " <img src="https //img.shields.io/badge/Microsoft 141414?style=flat" alt="Microsoft" / </a <a href=" " <img src="https //img.shields.io/badge/Google 141414?style=flat&logo=google&logoColor=white" alt="Google" / </a <a href=" " <img src="https //img.shields.io/badge/Meta 141414?style=flat&logo=meta&logoColor=white" alt="Meta" / </a <a href=" " <img src="https //img.shields.io/badge/Amazon 141414?style=flat" alt="Amazon" / </a <a href=" " <img src="https //img.shields.io/badge/IBM 141414?style=flat" alt="IBM" / </a <a href=" " <img src="https //img.shields.io/badge/NVIDIA 141414?style=flat&logo=nvidia&logoColor=white" alt="NVIDIA" / </a <a href=" " <img src="https //img.shields.io/badge/ByteDance 141414?style=flat&logo=bytedance&logoColor=white" alt="ByteDance" / </a <a h

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .claude | dir |
| .claude-plugin | dir |
| .codex-plugin | dir |
| .cursor-plugin | dir |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .mcp.json.codex.example | file |
| .mcp.json.example | file |
| .npmignore | file |
| .openclaw-plugin | dir |
| .pi | dir |
| BENCHMARK.md | file |
| bin | dir |
| bun.lock | file |
| CLAUDE.md | file |
| cli.bundle.mjs | file |
| configs | dir |
| CONTRIBUTING.md | file |
| docs | dir |
| hooks | dir |
| insight | dir |
| LICENSE | file |
| llms-full.txt | file |
| llms.txt | file |
| openclaw.plugin.json | file |
| package.json | file |
| README.md | file |
| release-notes-v1.0.148.md | file |
| scripts | dir |
| server.bundle.mjs | file |
| skills | dir |
| src | dir |
| start.mjs | file |
| stats.json | file |
| tests | dir |
| tsconfig.json | file |
| vitest.config.ts | file |
| web | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| tests/ | 223 |
| src/ | 83 |
| hooks/ | 71 |
| configs/ | 33 |
| insight/ | 33 |
| (root) | 22 |
| web/ | 22 |
| scripts/ | 15 |
| skills/ | 13 |
| docs/ | 11 |
| .claude/ | 10 |
| .github/ | 10 |
| .codex-plugin/ | 3 |
| .cursor-plugin/ | 3 |
| .openclaw-plugin/ | 3 |
| .pi/ | 3 |
| .claude-plugin/ | 2 |
| .agents/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 83 | preferred |
| web/ | 22 | preferred |
| docs/ | 11 | preferred |
| tests/ | 223 | preferred |
| skills/ | 13 | preferred |
| scripts/ | 15 | preferred |
| hooks/ | 71 | large |
| src/adapters/ | 52 | large |
| tests/session/ | 42 | large |
| tests/adapters/ | 40 | large |
| configs/ | 33 | large |
| insight/ | 33 | large |
| tests/hooks/ | 30 | large |
| insight/src/ | 26 | large |
| tests/fixtures/ | 26 | large |
| tests/util/ | 20 | large |
| insight/src/components/ | 13 | large |
| tests/core/ | 13 | large |
| .claude/ | 10 | large |
| .github/ | 10 | large |
| .claude/skills/ | 9 | large |
| .claude/skills/context-mode-ops/ | 9 | large |
| src/session/ | 9 | large |
| web/og/ | 9 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `.openclaw-plugin/package.json`
- `.pi/extensions/context-mode/package.json`
- `.pi/extensions/context-mode/tsconfig.json`
- `bun.lock`
- `insight/package.json`
- `insight/tsconfig.json`
- `insight/vite.config.ts`
- `package.json`
- `tsconfig.json`
- `web/og/package.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| .openclaw-plugin/package.json | context-mode |  |  |
| .pi/extensions/context-mode/package.json | context-mode |  | better-sqlite3 |
| insight/package.json | memory-ui | dev, build, preview, test | @base-ui/react, @fontsource-variable/geist, @tailwindcss/vite, @tanstack/react-devtools, @tanstack/react-router, @tanstack/react-router-devtools, @tanstack/router-plugin, class-variance-authority, clsx, lucide-react, react, react-dom, recharts, shadcn |
| package.json | context-mode | build, assert-bundle, assert-asymmetric-drift, bundle, version-sync, version, prepublishOnly, dev, setup, doctor, typecheck, pretest, test, test:watch, benchmark, test:use-cases | @clack/prompts, @mixmark-io/domino, @modelcontextprotocol/sdk, better-sqlite3, picocolors, turndown, turndown-plugin-gfm, zod |
| web/og/package.json | og | test | playwright |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.cursor-plugin/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `docs/UPSTREAM-CREDITS.md`
- `docs/adapters/kimi-code.md`
- `docs/adapters/openclaw.md`
- `docs/adr/0001-sessiondb-multi-writer.md`
- `docs/adr/0002-tool-description-style.md`
- `docs/adr/0003-routing-deny-reasons.md`
- `docs/adr/0004-stats-strict-compression-formula.md`
- `docs/jetbrains-copilot.md`
- `docs/llms-full.txt`
- `docs/llms.txt`
- `docs/platform-support.md`

### 에이전트 지침 후보

- `.claude/settings.json`
- `.claude/skills/context-mode-ops/SKILL.md`
- `.claude/skills/context-mode-ops/agent-teams.md`
- `.claude/skills/context-mode-ops/communication.md`
- `.claude/skills/context-mode-ops/marketing.md`
- `.claude/skills/context-mode-ops/release.md`
- `.claude/skills/context-mode-ops/review-pr.md`
- `.claude/skills/context-mode-ops/tdd.md`
- `.claude/skills/context-mode-ops/triage-issue.md`
- `.claude/skills/context-mode-ops/validation.md`
- `.codex-plugin/mcp.json`
- `.mcp.json.codex.example`
- `.mcp.json.example`
- `CLAUDE.md`
- `configs/antigravity/GEMINI.md`
- `configs/antigravity/mcp_config.json`
- `configs/claude-code/CLAUDE.md`
- `configs/codex/AGENTS.md`
- `configs/cursor/mcp.json`
- `configs/gemini-cli/GEMINI.md`
- `configs/gemini-cli/mcp.json`
- `configs/jetbrains-copilot/mcp.json`
- `configs/kilo/AGENTS.md`
- `configs/kiro/mcp.json`
- `configs/omp/mcp.json`
- `configs/openclaw/AGENTS.md`
- `configs/opencode/AGENTS.md`
- `configs/pi/AGENTS.md`
- `configs/vscode-copilot/mcp.json`
- `configs/zed/AGENTS.md`
- `hooks/core/mcp-ready.mjs`
- `skills/.ignore`
- `skills/context-mode/SKILL.md`
- `skills/context-mode/references/anti-patterns.md`
- `skills/context-mode/references/patterns-javascript.md`
- `skills/context-mode/references/patterns-python.md`
- `skills/context-mode/references/patterns-shell.md`
- `skills/ctx-doctor/SKILL.md`
- `skills/ctx-index/SKILL.md`
- `skills/ctx-insight/SKILL.md`
- `skills/ctx-purge/SKILL.md`
- `skills/ctx-search/SKILL.md`
- `skills/ctx-stats/SKILL.md`
- `skills/ctx-upgrade/SKILL.md`
- `src/adapters/openclaw/mcp-tools.ts`
- `src/adapters/pi/mcp-bridge.ts`
- `src/util/sibling-mcp.ts`
- `tests/adapters/codex-external-mcp-routing.test.ts`
- `tests/adapters/cursor-external-mcp-routing.test.ts`
- `tests/adapters/gemini-cli-external-mcp-routing.test.ts`
- `tests/adapters/kiro-external-mcp-routing.test.ts`
- `tests/adapters/pi-mcp-bridge-env-scrub.test.ts`
- `tests/adapters/pi-mcp-bridge.test.ts`
- `tests/adapters/qwen-code-external-mcp-routing.test.ts`
- `tests/cli/upgrade-mcp-json-assertion.test.ts`
- `tests/fixtures/cursor/posttooluse-mcp.json`
- `tests/fixtures/cursor/pretooluse-mcp.json`
- `tests/fixtures/mcp-tools.json`
- `tests/mcp-integration.ts`
- `tests/scripts/start-mjs-mcp-boot.test.ts`
- `tests/util/postinstall-heal-mcp-json.test.ts`

### 스펙/템플릿/명령/스킬 후보

- `.claude/skills/context-mode-ops/SKILL.md`
- `.claude/skills/context-mode-ops/agent-teams.md`
- `.claude/skills/context-mode-ops/communication.md`
- `.claude/skills/context-mode-ops/marketing.md`
- `.claude/skills/context-mode-ops/release.md`
- `.claude/skills/context-mode-ops/review-pr.md`
- `.claude/skills/context-mode-ops/tdd.md`
- `.claude/skills/context-mode-ops/triage-issue.md`
- `.claude/skills/context-mode-ops/validation.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/adapters/antigravity.test.ts`
- `tests/adapters/base-adapter-memory.test.ts`
- `tests/adapters/claude-code-memory.test.ts`
- `tests/adapters/claude-code.test.ts`
- `tests/adapters/client-map.test.ts`
- `tests/adapters/codex-external-mcp-routing.test.ts`
- `tests/adapters/codex.test.ts`
- `tests/adapters/copilot-base-cwd-consistency.test.ts`
- `tests/adapters/cursor-claude-compat-config-dir.test.ts`
- `tests/adapters/cursor-external-mcp-routing.test.ts`
- `tests/adapters/cursor.test.ts`
- `tests/adapters/detect-ambiguity-matrix.test.ts`
- `tests/adapters/detect-claude-code-in-vscode.test.ts`
- `tests/adapters/detect-config-dir.test.ts`
- `tests/adapters/detect.test.ts`
- `tests/adapters/gemini-cli-external-mcp-routing.test.ts`
- `tests/adapters/gemini-cli.test.ts`
- `tests/adapters/hook-path-parity.test.ts`
- `tests/adapters/hook-runtime-per-adapter.test.ts`
- `tests/adapters/jetbrains-copilot.test.ts`
- `tests/adapters/kimi.test.ts`
- `tests/adapters/kiro-external-mcp-routing.test.ts`
- `tests/adapters/kiro.test.ts`
- `tests/adapters/memory-conventions.test.ts`
- `tests/adapters/omp-plugin.test.ts`
- `tests/adapters/omp.test.ts`
- `tests/adapters/openclaw.test.ts`
- `tests/adapters/opencode.test.ts`
- `tests/adapters/pi-adapter.test.ts`
- `tests/adapters/pi-bridge-parent-death.test.ts`
- `tests/adapters/pi-extension-workspace-resolve.test.ts`
- `tests/adapters/pi-help-skip-bootstrap.test.ts`
- `tests/adapters/pi-mcp-bridge-env-scrub.test.ts`
- `tests/adapters/pi-mcp-bridge.test.ts`
- `tests/adapters/pi-no-orphan-on-help.test.ts`
- `tests/adapters/qwen-code-external-mcp-routing.test.ts`
- `tests/adapters/qwen-code.test.ts`
- `tests/adapters/vscode-copilot.test.ts`
- `tests/adapters/zed.test.ts`
- `tests/adapters/zod3tov4.test.ts`
- `tests/analytics/format-report.test.ts`
- `tests/analytics/insight-cors.test.ts`
- `tests/analytics/lifetime-stats-config-dir.test.ts`
- `tests/analytics/metrics.test.ts`
- `tests/analytics/price-per-token.test.ts`
- `tests/benchmark-results-v04.json`
- `tests/benchmark.ts`
- `tests/cli/open-browser.test.ts`
- `tests/cli/upgrade-mcp-json-assertion.test.ts`
- `tests/cli/upgrade-plugin-json-assertion.test.ts`
- `tests/cli/upgrade-rewrites-shell-snapshots.test.ts`
- `tests/cli/upgrade-verifies-binding.test.ts`
- `tests/codex/marketplace-layout.test.ts`
- `tests/context-comparison.ts`
- `tests/core/.gitkeep`
- `tests/core/auto-memory-adapter.test.ts`
- `tests/core/auto-memory-config-dir.test.ts`
- `tests/core/cache-plugin-root.test.ts`
- `tests/core/cli.test.ts`
- `tests/core/deny-policy.test.ts`
- `tests/core/echo-commands.test.ts`
- `tests/core/fetch-cleanup.test.ts`
- `tests/core/routing.test.ts`
- `tests/core/search-project-filter.test.ts`
- `tests/core/search.test.ts`
- `tests/core/server-timeline-adapter.test.ts`
- `tests/core/server.test.ts`
- `tests/ecosystem-benchmark.ts`
- `tests/executor.test.ts`
- `tests/executor/cwd-override.test.ts`
- `tests/fixtures/access.log`
- `tests/fixtures/analytics.csv`
- `tests/fixtures/api-response.json`
- `tests/fixtures/build-output.txt`
- `tests/fixtures/context7-nextjs-docs.md`
- `tests/fixtures/context7-react-docs.md`
- `tests/fixtures/context7-supabase-edge.md`
- `tests/fixtures/context7-tailwind-docs.md`
- `tests/fixtures/cursor/posttooluse-mcp.json`
- `tests/fixtures/cursor/posttooluse-shell.json`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/bundle.yml`
- `.github/workflows/ci.yml`
- `.github/workflows/openclaw-e2e.yml`
- `.github/workflows/tier2-e2e-smoke.yml`
- `.github/workflows/update-stats.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 285 |
| .mjs | 84 |
| .md | 55 |
| .json | 51 |
| .tsx | 22 |
| .txt | 12 |
| .png | 10 |
| .yml | 9 |
| .html | 7 |
| .sh | 4 |
| .gitignore | 3 |
| .gitkeep | 3 |
| .example | 2 |
| .svg | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `web/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `skills/ 내부 책임 분리`
- `.claude/skills/context-mode-ops/SKILL.md 스펙/명령 의미`
- `.claude/skills/context-mode-ops/agent-teams.md 스펙/명령 의미`
- `.claude/skills/context-mode-ops/communication.md 스펙/명령 의미`
- `.claude/skills/context-mode-ops/marketing.md 스펙/명령 의미`
- `.claude/skills/context-mode-ops/release.md 스펙/명령 의미`
- `.openclaw-plugin/package.json 실행 스크립트와 패키지 경계`
- `.pi/extensions/context-mode/package.json 실행 스크립트와 패키지 경계`
- `.pi/extensions/context-mode/tsconfig.json 실행 스크립트와 패키지 경계`
- `bun.lock 실행 스크립트와 패키지 경계`
- `insight/package.json 실행 스크립트와 패키지 경계`

