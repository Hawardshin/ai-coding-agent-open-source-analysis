# rohitg00/agentmemory 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/rohitg00__agentmemory |
| remote | https://github.com/rohitg00/agentmemory.git |
| HEAD | f6f9e3c (2026-06-11) fix(website): portal mobile nav sheet to body and close breakpoint gap (#670) |
| branch | main |
| groups | previous-clone-inventory-107 |
| files | 615 |
| dirs | 92 |
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
- 주요 heading: `Install`, `If you hit EACCES on macOS/Linux system Node installs, retry with:`, `sudo npm install -g @agentmemory/agentmemory`, `Retrieval Accuracy`, `Token Savings`, `Try it in 30 seconds`, `Terminal 1: start the server`, `Terminal 2: seed sample data and see recall in action`, `Recommended: install globally`, `If you hit EACCES on macOS/Linux system Node installs, retry with:`, `sudo npm install -g @agentmemory/agentmemory`, `Session Replay`, `Import everything under the default ~/.claude/projects`, `Or import a single file`, `Upgrade / Maintenance`, `Claude Code (one block, paste it)`, `Codex CLI (Codex plugin platform)`, `1. start the memory server in a separate terminal`

> <p align="center" <img src="assets/banner.png" alt="agentmemory — Persistent memory for AI coding agents" width="720" / </p <p align="center" <strong Your coding agent remembers everything. No more re explaining. Built on <a href="https //github.com/iii hq/iii" iii engine</a </strong <br/ Persistent memory for Claude Code, GitHub Copilot CLI, Cursor, Gemini CLI, Codex CLI, Hermes, OpenClaw, pi, OpenCode, and any MCP client. </p <p align="center" <a href="README.md" English</a <a href="READMEs/README.zh CN.md" 简体中文</a <a href="READMEs/README.zh TW.md" 繁體中文</a <a href="READMEs/README.ja JP.md" 日本語</a <a href="READMEs/README.ko KR.md" 한국어</a <a href="READMEs/README.es ES.md" Español</a <a href="READMEs/README.tr TR.md" Türkçe</a <a href="READMEs/README.ru RU.md" Русский</a <a href="READMEs/README.hi IN.md" हिन्दी</a <a href="READMEs/README.pt BR.md" Português</a <a href="READMEs/README.fr F

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude-plugin | dir |
| .codex-plugin | dir |
| .env.example | file |
| .github | dir |
| .gitignore | file |
| AGENTS.md | file |
| assets | dir |
| benchmark | dir |
| CHANGELOG.md | file |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| deploy | dir |
| DESIGN.md | file |
| docker-compose.yml | file |
| docs | dir |
| eval | dir |
| examples | dir |
| GOVERNANCE.md | file |
| iii-config.docker.yaml | file |
| iii-config.yaml | file |
| INSTALL_FOR_AGENTS.md | file |
| integrations | dir |
| LICENSE | file |
| MAINTAINERS.md | file |
| package.json | file |
| packages | dir |
| plugin | dir |
| README.md | file |
| READMEs | dir |
| ROADMAP.md | file |
| scripts | dir |
| SECURITY.md | file |
| src | dir |
| test | dir |
| tsconfig.json | file |
| tsdown.config.ts | file |
| website | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 177 |
| test/ | 133 |
| assets/ | 69 |
| website/ | 61 |
| plugin/ | 56 |
| (root) | 20 |
| benchmark/ | 17 |
| deploy/ | 17 |
| integrations/ | 16 |
| eval/ | 12 |
| READMEs/ | 11 |
| .github/ | 10 |
| packages/ | 4 |
| scripts/ | 4 |
| docs/ | 3 |
| examples/ | 3 |
| .claude-plugin/ | 1 |
| .codex-plugin/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 177 | preferred |
| packages/ | 4 | preferred |
| docs/ | 3 | preferred |
| examples/ | 3 | preferred |
| test/ | 133 | preferred |
| scripts/ | 4 | preferred |
| assets/ | 69 | large |
| src/functions/ | 64 | large |
| website/ | 61 | large |
| assets/tags/ | 60 | large |
| plugin/ | 56 | large |
| website/components/ | 37 | large |
| assets/tags/light/ | 30 | large |
| plugin/skills/ | 29 | large |
| src/cli/ | 28 | large |
| src/cli/connect/ | 23 | large |
| src/providers/ | 20 | large |
| benchmark/ | 17 | large |
| deploy/ | 17 | large |
| integrations/ | 16 | large |
| src/hooks/ | 15 | large |
| plugin/scripts/ | 14 | large |
| eval/ | 12 | large |
| src/state/ | 12 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `deploy/coolify/Dockerfile`
- `deploy/coolify/docker-compose.yml`
- `deploy/fly/Dockerfile`
- `deploy/railway/Dockerfile`
- `deploy/render/Dockerfile`
- `docker-compose.yml`
- `integrations/filesystem-watcher/package.json`
- `integrations/openclaw/package.json`
- `integrations/pi/package.json`
- `package.json`
- `packages/mcp/package.json`
- `tsconfig.json`
- `website/package.json`
- `website/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| integrations/filesystem-watcher/package.json | @agentmemory/fs-watcher |  |  |
| integrations/openclaw/package.json | agentmemory |  |  |
| integrations/pi/package.json | agentmemory-pi-extension |  |  |
| package.json | @agentmemory/agentmemory | build, dev, start, migrate, test, test:watch, test:integration, test:all, skills:gen, skills:check, bench:load, eval:longmemeval, eval:coding-life | @anthropic-ai/claude-agent-sdk, @anthropic-ai/sdk, @clack/prompts, dotenv, iii-sdk, zod |
| packages/mcp/package.json | @agentmemory/mcp |  | @agentmemory/agentmemory |
| website/package.json | agentmemory-website | gen-meta, predev, prebuild, dev, build, start, lint | next, react, react-dom |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `benchmark/README.md`
- `deploy/README.md`
- `deploy/coolify/README.md`
- `deploy/fly/README.md`
- `deploy/railway/README.md`
- `deploy/render/README.md`
- `docs/benchmarks/2026-05-20-coding-agent-life-v1.md`
- `docs/benchmarks/TEMPLATE.md`
- `docs/recipes/pairings.md`
- `eval/README.md`
- `examples/python/README.md`
- `integrations/filesystem-watcher/README.md`
- `integrations/hermes/README.md`
- `integrations/openclaw/README.md`
- `integrations/pi/README.md`
- `packages/mcp/README.md`
- `plugin/opencode/README.md`
- `website/README.md`

### 에이전트 지침 후보

- `AGENTS.md`
- `assets/tags/light/pill-mcp.svg`
- `assets/tags/light/pill-skill.svg`
- `assets/tags/light/section-mcp.svg`
- `assets/tags/pill-mcp.svg`
- `assets/tags/pill-skill.svg`
- `assets/tags/section-mcp.svg`
- `packages/mcp/LICENSE`
- `packages/mcp/README.md`
- `packages/mcp/bin.mjs`
- `packages/mcp/package.json`
- `plugin/.mcp.copilot.json`
- `plugin/.mcp.json`
- `plugin/skills/_shared/TROUBLESHOOTING.md`
- `plugin/skills/agentmemory-agents/REFERENCE.md`
- `plugin/skills/agentmemory-agents/SKILL.md`
- `plugin/skills/agentmemory-architecture/SKILL.md`
- `plugin/skills/agentmemory-config/REFERENCE.md`
- `plugin/skills/agentmemory-config/SKILL.md`
- `plugin/skills/agentmemory-hooks/REFERENCE.md`
- `plugin/skills/agentmemory-hooks/SKILL.md`
- `plugin/skills/agentmemory-mcp-tools/REFERENCE.md`
- `plugin/skills/agentmemory-mcp-tools/SKILL.md`
- `plugin/skills/agentmemory-rest-api/REFERENCE.md`
- `plugin/skills/agentmemory-rest-api/SKILL.md`
- `plugin/skills/commit-context/EXAMPLES.md`
- `plugin/skills/commit-context/SKILL.md`
- `plugin/skills/commit-history/EXAMPLES.md`
- `plugin/skills/commit-history/SKILL.md`
- `plugin/skills/forget/EXAMPLES.md`
- `plugin/skills/forget/SKILL.md`
- `plugin/skills/handoff/EXAMPLES.md`
- `plugin/skills/handoff/SKILL.md`
- `plugin/skills/recall/EXAMPLES.md`
- `plugin/skills/recall/SKILL.md`
- `plugin/skills/recap/EXAMPLES.md`
- `plugin/skills/recap/SKILL.md`
- `plugin/skills/remember/EXAMPLES.md`
- `plugin/skills/remember/SKILL.md`
- `plugin/skills/session-history/EXAMPLES.md`
- `plugin/skills/session-history/SKILL.md`
- `plugin/skills/write-agentmemory-skill/SKILL.md`
- `scripts/skills/check.ts`
- `scripts/skills/generate.ts`
- `src/cli/connect/json-mcp-adapter.ts`
- `src/functions/skill-extract.ts`
- `src/mcp/in-memory-kv.ts`
- `src/mcp/rest-proxy.ts`
- `src/mcp/server.ts`
- `src/mcp/standalone.ts`
- `src/mcp/tools-registry.ts`
- `src/mcp/transport.ts`
- `test/mcp-env-placeholder.test.ts`
- `test/mcp-prompts.test.ts`
- `test/mcp-resources.test.ts`
- `test/mcp-standalone-proxy.test.ts`
- `test/mcp-standalone.test.ts`
- `test/mcp-surface-default.test.ts`
- `test/mcp-transport.test.ts`
- `test/skill-extract.test.ts`

### 스펙/템플릿/명령/스킬 후보

- `DESIGN.md`
- `plugin/opencode/commands/recall.md`
- `plugin/opencode/commands/remember.md`
- `plugin/skills/_shared/TROUBLESHOOTING.md`
- `plugin/skills/agentmemory-agents/REFERENCE.md`
- `plugin/skills/agentmemory-agents/SKILL.md`
- `plugin/skills/agentmemory-architecture/SKILL.md`
- `plugin/skills/agentmemory-config/REFERENCE.md`
- `plugin/skills/agentmemory-config/SKILL.md`
- `plugin/skills/agentmemory-hooks/REFERENCE.md`
- `plugin/skills/agentmemory-hooks/SKILL.md`
- `plugin/skills/agentmemory-mcp-tools/REFERENCE.md`
- `plugin/skills/agentmemory-mcp-tools/SKILL.md`
- `plugin/skills/agentmemory-rest-api/REFERENCE.md`
- `plugin/skills/agentmemory-rest-api/SKILL.md`
- `plugin/skills/commit-context/EXAMPLES.md`
- `plugin/skills/commit-context/SKILL.md`
- `plugin/skills/commit-history/EXAMPLES.md`
- `plugin/skills/commit-history/SKILL.md`
- `plugin/skills/forget/EXAMPLES.md`
- `plugin/skills/forget/SKILL.md`
- `plugin/skills/handoff/EXAMPLES.md`
- `plugin/skills/handoff/SKILL.md`
- `plugin/skills/recall/EXAMPLES.md`
- `plugin/skills/recall/SKILL.md`
- `plugin/skills/recap/EXAMPLES.md`
- `plugin/skills/recap/SKILL.md`
- `plugin/skills/remember/EXAMPLES.md`
- `plugin/skills/remember/SKILL.md`
- `plugin/skills/session-history/EXAMPLES.md`
- `plugin/skills/session-history/SKILL.md`
- `plugin/skills/write-agentmemory-skill/SKILL.md`
- `scripts/skills/check.ts`
- `scripts/skills/generate.ts`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `test/access-tracker.test.ts`
- `test/actions.test.ts`
- `test/agent-id-scope.test.ts`
- `test/agent-isolation-search.test.ts`
- `test/agent-sdk-provider.test.ts`
- `test/audit.test.ts`
- `test/auto-compress.test.ts`
- `test/auto-forget.test.ts`
- `test/cascade.test.ts`
- `test/checkpoints.test.ts`
- `test/circuit-breaker.test.ts`
- `test/claude-bridge-path.test.ts`
- `test/claude-bridge.test.ts`
- `test/claude-code-with-hooks.test.ts`
- `test/cli-connect.test.ts`
- `test/cli-doctor-fixes.test.ts`
- `test/cli-onboarding.test.ts`
- `test/cli-remove.test.ts`
- `test/codex-connect-hooks.test.ts`
- `test/codex-plugin.test.ts`
- `test/compress-file.test.ts`
- `test/confidence.test.ts`
- `test/connect-new-agents.test.ts`
- `test/consistency.test.ts`
- `test/consolidate-project-scope.test.ts`
- `test/consolidation-default.test.ts`
- `test/consolidation-pipeline.test.ts`
- `test/context-injection.test.ts`
- `test/context-lessons.test.ts`
- `test/context-slots.test.ts`
- `test/copilot-plugin.test.ts`
- `test/cross-project-isolation.test.ts`
- `test/crystallize.test.ts`
- `test/diagnostic-followup-rate.test.ts`
- `test/diagnostics.test.ts`
- `test/embedding-provider.test.ts`
- `test/enrich-project-isolation.test.ts`
- `test/enrich.test.ts`
- `test/env-loader.test.ts`
- `test/eval-adapters.test.ts`
- `test/eval.test.ts`
- `test/evict.test.ts`
- `test/export-import.test.ts`
- `test/facets.test.ts`
- `test/fallback-chain.test.ts`
- `test/fallback-model-resolution.test.ts`
- `test/fetch-timeout.test.ts`
- `test/fixtures/jsonl/basic.jsonl`
- `test/fixtures/jsonl/errors.jsonl`
- `test/fixtures/jsonl/tool-use.jsonl`
- `test/frontier.test.ts`
- `test/fs-watcher.test.ts`
- `test/governance.test.ts`
- `test/graph-retrieval.test.ts`
- `test/graph.test.ts`
- `test/health-thresholds.test.ts`
- `test/helpers/mocks.ts`
- `test/hermes-plugin.test.ts`
- `test/hook-project.test.ts`
- `test/hybrid-search.test.ts`
- `test/index-persistence.test.ts`
- `test/infer-memory-projects.test.ts`
- `test/integration-plaintext-http.test.ts`
- `test/integration.test.ts`
- `test/leases.test.ts`
- `test/lessons.test.ts`
- `test/mcp-env-placeholder.test.ts`
- `test/mcp-prompts.test.ts`
- `test/mcp-resources.test.ts`
- `test/mcp-standalone-proxy.test.ts`
- `test/mcp-standalone.test.ts`
- `test/mcp-surface-default.test.ts`
- `test/mcp-transport.test.ts`
- `test/memories-pagination.test.ts`
- `test/mesh.test.ts`
- `test/minimax-provider.test.ts`
- `test/multi-instance-port.test.ts`
- `test/multimodal.test.ts`
- `test/observe-implicit-session.test.ts`
- `test/obsidian-export.test.ts`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `.github/workflows/publish.yml`
- `deploy/coolify/Dockerfile`
- `deploy/coolify/docker-compose.yml`
- `deploy/fly/Dockerfile`
- `deploy/railway/Dockerfile`
- `deploy/render/Dockerfile`
- `docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 331 |
| .md | 82 |
| .svg | 66 |
| .json | 28 |
| .tsx | 23 |
| .mjs | 20 |
| .css | 19 |
| .png | 8 |
| .sh | 6 |
| .yml | 6 |
| .yaml | 5 |
| dockerfile | 4 |
| .gitignore | 3 |
| .jsonl | 3 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `packages/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `test/ 내부 책임 분리`
- `DESIGN.md 스펙/명령 의미`
- `plugin/opencode/commands/recall.md 스펙/명령 의미`
- `plugin/opencode/commands/remember.md 스펙/명령 의미`
- `plugin/skills/_shared/TROUBLESHOOTING.md 스펙/명령 의미`
- `plugin/skills/agentmemory-agents/REFERENCE.md 스펙/명령 의미`
- `deploy/coolify/Dockerfile 실행 스크립트와 패키지 경계`
- `deploy/coolify/docker-compose.yml 실행 스크립트와 패키지 경계`
- `deploy/fly/Dockerfile 실행 스크립트와 패키지 경계`
- `deploy/railway/Dockerfile 실행 스크립트와 패키지 경계`
- `deploy/render/Dockerfile 실행 스크립트와 패키지 경계`

