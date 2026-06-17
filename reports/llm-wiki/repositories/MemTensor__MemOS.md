# MemTensor/MemOS 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/MemTensor__MemOS |
| remote | https://github.com/MemTensor/MemOS |
| HEAD | 258c3a3 (2026-06-12) chore: add ai harness rules (#1843) |
| branch | main |
| groups | llm-wiki-100 |
| files | 1794 |
| dirs | 394 |
| stack | Node/TypeScript/JavaScript, Python |

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
- 주요 heading: `🧠 MemOS Plugin: Persistent Memory for Your AI Agents ✨`, `👾 MemOS: Memory Operating System for LLM & AI Agents`, `Key Features`, `News`, `🚀 Quick-start Guide`, `☁️ 1、Cloud API (Hosted)`, `🖥️ 2、Self-Hosted (Local/Private)`, `Basic Usage (Self-Hosted)`, `FAQ`, `What is MemOS?`, `What are the benchmark results?`, `How does MemOS compare to other memory solutions?`, `What are the key features?`, `What deployment options are available?`, `How do I get started with Cloud API?`, `How do I self-host MemOS?`, `Clone`, `Install dependencies`

> <div align="center" <a href="https //memos.openmem.net/" <img src="https //statics.memtensor.com.cn/memos/memos banner.gif" alt="MemOS Banner" </a <h1 align="center" <img src="https //statics.memtensor.com.cn/logo/memos color m.png" alt="MemOS Logo" width="48"/ &nbsp; MemOS 2.0&ensp;Stardust（星尘） </h1 <p align="center" <br <a href="https //memos docs.openmem.net/home/overview/" <img src="https //img.shields.io/badge/Docs Get Start 002FA7?labelColor=gray&style=for the badge&logo=googledocs&logoColor=white" alt="Docs" </a <a href="https //arxiv.org/abs/2507.03724" <img src="https //img.shields.io/badge/ArXiv 2507.03724 B31B1B?labelColor=gray&style=for the badge&logo=arxiv&logoColor=white" alt="ArXiv" </a <a href="https //x.com/MemOS dev" <img src="https //img.shields.io/badge/Follow MemOS 000000?labelColor=gray&style=for the badge&logo=x&logoColor=white" alt="X" </a <a href="https //discord

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude | dir |
| .codex | dir |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| AGENTS.md | file |
| apps | dir |
| CLAUDE.md | file |
| CONTRIBUTING.md | file |
| deploy | dir |
| docker | dir |
| Dockerfile | file |
| docs | dir |
| evaluation | dir |
| examples | dir |
| LICENSE | file |
| Makefile | file |
| packages | dir |
| poetry.lock | file |
| pyproject.toml | file |
| README.md | file |
| scripts | dir |
| src | dir |
| tests | dir |
| uv.lock | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| apps/ | 934 |
| src/ | 379 |
| docs/ | 130 |
| tests/ | 119 |
| examples/ | 77 |
| packages/ | 55 |
| evaluation/ | 51 |
| (root) | 12 |
| deploy/ | 10 |
| .github/ | 9 |
| docker/ | 7 |
| .claude/ | 5 |
| .codex/ | 5 |
| scripts/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 379 | preferred |
| apps/ | 934 | preferred |
| packages/ | 55 | preferred |
| docs/ | 130 | preferred |
| examples/ | 77 | preferred |
| tests/ | 119 | preferred |
| scripts/ | 1 | preferred |
| apps/memos-local-plugin/ | 584 | large |
| src/memos/ | 378 | large |
| apps/memos-local-plugin/core/ | 264 | large |
| apps/openwork-memos-integration/ | 205 | large |
| apps/openwork-memos-integration/apps/ | 185 | large |
| apps/memos-local-plugin/tests/ | 147 | large |
| apps/memos-local-openclaw/ | 123 | large |
| src/memos/mem_scheduler/ | 78 | large |
| docs/cn/ | 68 | large |
| apps/memos-local-plugin/viewer/ | 62 | large |
| docs/en/ | 62 | large |
| docs/cn/open_source/ | 60 | large |
| apps/memos-local-openclaw/src/ | 54 | large |
| docs/en/open_source/ | 54 | large |
| packages/memos-core/ | 53 | large |
| packages/memos-core/src/ | 53 | large |
| evaluation/ | 51 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `apps/MemOS-Cloud-OpenClaw-Plugin/package.json`
- `apps/memos-local-openclaw/package.json`
- `apps/memos-local-openclaw/tsconfig.json`
- `apps/memos-local-plugin/package.json`
- `apps/memos-local-plugin/pnpm-lock.yaml`
- `apps/memos-local-plugin/tsconfig.json`
- `apps/memos-local-plugin/vite.config.ts`
- `apps/openwork-memos-integration/apps/desktop/e2e/docker/Dockerfile`
- `apps/openwork-memos-integration/apps/desktop/e2e/docker/docker-compose.yml`
- `apps/openwork-memos-integration/apps/desktop/package.json`
- `apps/openwork-memos-integration/apps/desktop/skills/ask-user-question/package.json`
- `apps/openwork-memos-integration/apps/desktop/skills/ask-user-question/tsconfig.json`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/package.json`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/tsconfig.json`
- `apps/openwork-memos-integration/apps/desktop/skills/file-permission/package.json`
- `apps/openwork-memos-integration/apps/desktop/skills/file-permission/tsconfig.json`
- `apps/openwork-memos-integration/apps/desktop/tsconfig.json`
- `apps/openwork-memos-integration/apps/desktop/vite.config.ts`
- `apps/openwork-memos-integration/package.json`
- `apps/openwork-memos-integration/packages/shared/package.json`
- `apps/openwork-memos-integration/packages/shared/tsconfig.json`
- `apps/openwork-memos-integration/pnpm-workspace.yaml`
- `docker/Dockerfile`
- `docker/docker-compose.yml`
- `docker/requirements.txt`
- `poetry.lock`
- `pyproject.toml`
- `uv.lock`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| apps/MemOS-Cloud-OpenClaw-Plugin/package.json | @memtensor/memos-cloud-openclaw-plugin | sync-version, version, publish-beta, publish-beta-patch, publish-latest, publish-latest-patch |  |
| apps/memos-local-openclaw/package.json | @memtensor/memos-local-openclaw-plugin | build, dev, lint, test, test:watch, test:accuracy, postinstall, prepublishOnly | @huggingface/transformers, @sinclair/typebox, better-sqlite3, posthog-node, puppeteer, semver, uuid |
| apps/memos-local-plugin/package.json | @memtensor/memos-local-plugin | build, build:viewer, build:package, prepack, dev, viewer:dev, bridge, bridge:daemon, test, test:watch, test:unit, test:integration, test:e2e, lint, postinstall | @huggingface/transformers, @preact/signals, @sinclair/typebox, better-sqlite3, preact, tsx, uuid, yaml |
| apps/openwork-memos-integration/apps/desktop/package.json | @accomplish/desktop | postinstall, dev, dev:clean, build, build:electron, build:unpack, package, package:mac, release, release:mac, preview, typecheck, lint, clean, download:nodejs, test | @accomplish/shared, @aws-sdk/client-bedrock, @aws-sdk/credential-providers, @radix-ui/react-avatar, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-label, @radix-ui/react-popover, @radix-ui/react-select, @radix-ui/react-separator, @radix-ui/react-slot, @radix-ui/react-tooltip, class-variance-authority, clsx |
| apps/openwork-memos-integration/apps/desktop/skills/ask-user-question/package.json | ask-user-question | start, dev | @modelcontextprotocol/sdk, tsx, typescript |
| apps/openwork-memos-integration/apps/desktop/skills/dev-browser/package.json | dev-browser | start-server, start-extension, dev, test, test:watch | @hono/node-server, @hono/node-ws, express, hono, playwright, tsx, typescript |
| apps/openwork-memos-integration/apps/desktop/skills/file-permission/package.json | file-permission | start, dev | @modelcontextprotocol/sdk, tsx, typescript |
| apps/openwork-memos-integration/package.json | accomplish | dev, build, build:desktop, lint, typecheck, clean |  |
| apps/openwork-memos-integration/packages/shared/package.json | @accomplish/shared | typecheck, clean |  |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | MemoryOS | true | false | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `apps/MemOS-Cloud-OpenClaw-Plugin/README.md`
- `apps/memos-local-openclaw/README.md`
- `apps/memos-local-openclaw/docs/index.html`
- `apps/memos-local-openclaw/docs/troubleshooting.html`
- `apps/memos-local-openclaw/tests/bench/README.md`
- `apps/memos-local-openclaw/www/docs/index.html`
- `apps/memos-local-openclaw/www/docs/troubleshooting.html`
- `apps/memos-local-plugin/README.md`
- `apps/memos-local-plugin/adapters/README.md`
- `apps/memos-local-plugin/adapters/hermes/README.md`
- `apps/memos-local-plugin/adapters/openclaw/README.md`
- `apps/memos-local-plugin/agent-contract/README.md`
- `apps/memos-local-plugin/bridge/README.md`
- `apps/memos-local-plugin/core/capture/README.md`
- `apps/memos-local-plugin/core/config/README.md`
- `apps/memos-local-plugin/core/embedding/README.md`
- `apps/memos-local-plugin/core/episode/README.md`
- `apps/memos-local-plugin/core/feedback/README.md`
- `apps/memos-local-plugin/core/hub/README.md`
- `apps/memos-local-plugin/core/llm/README.md`
- `apps/memos-local-plugin/core/logger/README.md`
- `apps/memos-local-plugin/core/logger/transports/README.md`
- `apps/memos-local-plugin/core/memory/l1/README.md`
- `apps/memos-local-plugin/core/memory/l2/README.md`
- `apps/memos-local-plugin/core/memory/l3/README.md`
- `apps/memos-local-plugin/core/pipeline/README.md`
- `apps/memos-local-plugin/core/retrieval/README.md`
- `apps/memos-local-plugin/core/reward/README.md`
- `apps/memos-local-plugin/core/session/README.md`
- `apps/memos-local-plugin/core/skill/README.md`
- `apps/memos-local-plugin/core/storage/README.md`
- `apps/memos-local-plugin/core/telemetry/README.md`
- `apps/memos-local-plugin/core/update-check/README.md`
- `apps/memos-local-plugin/docs/.gitkeep`
- `apps/memos-local-plugin/docs/ALGORITHM_ALIGNMENT.md`
- `apps/memos-local-plugin/docs/CONFIG-ADVANCED.md`
- `apps/memos-local-plugin/docs/DATA-MODEL.md`
- `apps/memos-local-plugin/docs/DEMO_TaskCLI_OpenClaw_test.md`
- `apps/memos-local-plugin/docs/E2E_TEST_SCENARIO.md`
- `apps/memos-local-plugin/docs/FEEDBACK_EXPERIENCE_FIX_SUMMARY.md`
- `apps/memos-local-plugin/docs/FEEDBACK_LLM_CLASSIFIER_INTEGRATION.md`
- `apps/memos-local-plugin/docs/GRANULARITY-AND-MEMORY-LAYERS.md`
- `apps/memos-local-plugin/docs/LOGGING.md`
- `apps/memos-local-plugin/docs/MANUAL_E2E_TESTING.md`
- `apps/memos-local-plugin/docs/MULTI_AGENT_VIEWER.md`
- `apps/memos-local-plugin/docs/PROMPT-INJECTION-AND-RETRIEVAL-FILTER.md`
- `apps/memos-local-plugin/docs/README.md`
- `apps/memos-local-plugin/docs/RFC-001-l2-induction-prompt-business-granularity.md`
- ... 30 more

### 에이전트 지침 후보

- `.claude/agents/backend-dev.md`
- `.claude/agents/code-reviewer.md`
- `.claude/agents/design-reviewer.md`
- `.claude/agents/explorer.md`
- `.claude/agents/integration-tester.md`
- `.codex/agents/backend-dev.toml`
- `.codex/agents/code-reviewer.toml`
- `.codex/agents/design-reviewer.toml`
- `.codex/agents/explorer.toml`
- `.codex/agents/integration-tester.toml`
- `AGENTS.md`
- `CLAUDE.md`
- `apps/memos-local-openclaw/scripts/mock-skills.ts`
- `apps/memos-local-openclaw/scripts/refresh-skill.ts`
- `apps/memos-local-openclaw/skill/browserwing-admin/SKILL.md`
- `apps/memos-local-openclaw/skill/browserwing-executor/SKILL.md`
- `apps/memos-local-openclaw/skill/memos-memory-guide/SKILL.md`
- `apps/memos-local-openclaw/src/client/skill-sync.ts`
- `apps/memos-local-openclaw/src/skill/__tests__/evolver.test.ts`
- `apps/memos-local-openclaw/src/skill/bundled-memory-guide.ts`
- `apps/memos-local-openclaw/src/skill/evaluator.ts`
- `apps/memos-local-openclaw/src/skill/evolver.ts`
- `apps/memos-local-openclaw/src/skill/generator.ts`
- `apps/memos-local-openclaw/src/skill/installer.ts`
- `apps/memos-local-openclaw/src/skill/upgrader.ts`
- `apps/memos-local-openclaw/src/skill/validator.ts`
- `apps/memos-local-openclaw/tests/e2e-summarizer-skill.ts`
- `apps/memos-local-openclaw/tests/skill-auto-install.test.ts`
- `apps/memos-local-openclaw/tests/skill-runtime-flow.test.ts`
- `apps/memos-local-openclaw/tests/skill-sync.test.ts`
- `apps/memos-local-openclaw/tests/skill-v1-enhancements.test.ts`
- `apps/memos-local-plugin/core/llm/prompts/skill-crystallize.ts`
- `apps/memos-local-plugin/core/retrieval/tier1-skill.ts`
- `apps/memos-local-plugin/core/skill/.gitkeep`
- `apps/memos-local-plugin/core/skill/ALGORITHMS.md`
- `apps/memos-local-plugin/core/skill/README.md`
- `apps/memos-local-plugin/core/skill/crystallize.ts`
- `apps/memos-local-plugin/core/skill/eligibility.ts`
- `apps/memos-local-plugin/core/skill/events.ts`
- `apps/memos-local-plugin/core/skill/evidence.ts`
- `apps/memos-local-plugin/core/skill/index.ts`
- `apps/memos-local-plugin/core/skill/lifecycle.ts`
- `apps/memos-local-plugin/core/skill/packager.ts`
- `apps/memos-local-plugin/core/skill/skill.ts`
- `apps/memos-local-plugin/core/skill/subscriber.ts`
- `apps/memos-local-plugin/core/skill/tool-names.ts`
- `apps/memos-local-plugin/core/skill/types.ts`
- `apps/memos-local-plugin/core/skill/verifier.ts`
- `apps/memos-local-plugin/core/storage/migrations/004-skill-usage.sql`
- `apps/memos-local-plugin/core/storage/migrations/005-skill-trials.sql`
- `apps/memos-local-plugin/core/storage/repos/skill_trials.ts`
- `apps/memos-local-plugin/core/storage/repos/skills.ts`
- `apps/memos-local-plugin/server/routes/skill.ts`
- `apps/memos-local-plugin/tests/unit/skill/_helpers.ts`
- `apps/memos-local-plugin/tests/unit/skill/crystallize.test.ts`
- `apps/memos-local-plugin/tests/unit/skill/eligibility.test.ts`
- `apps/memos-local-plugin/tests/unit/skill/events.test.ts`
- `apps/memos-local-plugin/tests/unit/skill/evidence.test.ts`
- `apps/memos-local-plugin/tests/unit/skill/lifecycle.test.ts`
- `apps/memos-local-plugin/tests/unit/skill/packager.test.ts`
- `apps/memos-local-plugin/tests/unit/skill/skill.integration.test.ts`
- `apps/memos-local-plugin/tests/unit/skill/subscriber.test.ts`
- `apps/memos-local-plugin/tests/unit/skill/verifier.test.ts`
- `apps/openwork-memos-integration/CLAUDE.md`
- `apps/openwork-memos-integration/apps/desktop/skills/ask-user-question/SKILL.md`
- `apps/openwork-memos-integration/apps/desktop/skills/ask-user-question/package.json`
- `apps/openwork-memos-integration/apps/desktop/skills/ask-user-question/src/index.ts`
- `apps/openwork-memos-integration/apps/desktop/skills/ask-user-question/tsconfig.json`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/.gitignore`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/SKILL.md`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/package.json`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/references/scraping.md`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/scripts/start-relay.ts`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/scripts/start-server.ts`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/server.sh`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/src/client.ts`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/src/index.ts`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/src/relay.ts`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/src/snapshot/__tests__/snapshot.test.ts`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/src/snapshot/browser-script.ts`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `apps/memos-local-plugin/templates/.gitkeep`
- `apps/memos-local-plugin/templates/README.md`
- `apps/memos-local-plugin/templates/README.user.md`
- `apps/memos-local-plugin/templates/config.demo.yaml`
- `apps/memos-local-plugin/templates/config.hermes.yaml`
- `apps/memos-local-plugin/templates/config.openclaw.yaml`
- `apps/openwork-memos-integration/apps/desktop/e2e/specs/execution.spec.ts`
- `apps/openwork-memos-integration/apps/desktop/e2e/specs/home.spec.ts`
- `apps/openwork-memos-integration/apps/desktop/e2e/specs/settings-bedrock.spec.ts`
- `apps/openwork-memos-integration/apps/desktop/e2e/specs/settings-providers.spec.ts`
- `apps/openwork-memos-integration/apps/desktop/e2e/specs/settings.spec.ts`
- `apps/openwork-memos-integration/apps/desktop/e2e/specs/task-launch-guard.spec.ts`
- `apps/openwork-memos-integration/apps/desktop/skills/ask-user-question/SKILL.md`
- `apps/openwork-memos-integration/apps/desktop/skills/ask-user-question/package.json`
- `apps/openwork-memos-integration/apps/desktop/skills/ask-user-question/src/index.ts`
- `apps/openwork-memos-integration/apps/desktop/skills/ask-user-question/tsconfig.json`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/.gitignore`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/SKILL.md`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/package.json`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/references/scraping.md`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/scripts/start-relay.ts`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/scripts/start-server.ts`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/server.sh`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/src/client.ts`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/src/index.ts`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/src/relay.ts`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/src/snapshot/__tests__/snapshot.test.ts`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/src/snapshot/browser-script.ts`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/src/snapshot/index.ts`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/src/snapshot/inject.ts`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/src/types.ts`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/tsconfig.json`
- `apps/openwork-memos-integration/apps/desktop/skills/dev-browser/vitest.config.ts`
- `apps/openwork-memos-integration/apps/desktop/skills/file-permission/package.json`
- `apps/openwork-memos-integration/apps/desktop/skills/file-permission/src/index.ts`
- `apps/openwork-memos-integration/apps/desktop/skills/file-permission/tsconfig.json`
- `apps/openwork-memos-integration/apps/desktop/skills/safe-file-deletion/SKILL.md`
- `deploy/helm/templates/_helpers.tpl`
- `deploy/helm/templates/configmap.yaml`
- `deploy/helm/templates/ingress.yaml`
- `deploy/helm/templates/memos.yaml`
- `deploy/helm/templates/neo4j.yaml`
- `deploy/helm/templates/qdrant.yaml`
- `docs/cn/open_source/best_practice/memory_structure_design.md`
- `docs/en/open_source/best_practice/memory_structure_design.md`
- `src/memos/templates/__init__.py`
- `src/memos/templates/advanced_search_prompts.py`
- `src/memos/templates/cloud_service_prompt.py`
- `src/memos/templates/instruction_completion.py`
- `src/memos/templates/mem_agent_prompts.py`
- `src/memos/templates/mem_feedback_prompts.py`
- `src/memos/templates/mem_reader_prompts.py`
- `src/memos/templates/mem_reader_strategy_prompts.py`
- `src/memos/templates/mem_scheduler_prompts.py`
- `src/memos/templates/mem_search_prompts.py`
- `src/memos/templates/mos_prompts.py`
- `src/memos/templates/prefer_complete_prompt.py`
- `src/memos/templates/skill_mem_prompt.py`
- `src/memos/templates/tool_mem_prompts.py`
- `src/memos/templates/tree_reorganize_prompts.py`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `apps/MemOS-Cloud-OpenClaw-Plugin/test/direct-session-user-id.test.mjs`
- `apps/MemOS-Cloud-OpenClaw-Plugin/test/query-strip.test.mjs`
- `apps/memos-local-openclaw/src/skill/__tests__/evolver.test.ts`
- `apps/memos-local-openclaw/tests/accuracy.test.ts`
- `apps/memos-local-openclaw/tests/bench/README.md`
- `apps/memos-local-openclaw/tests/capture.test.ts`
- `apps/memos-local-openclaw/tests/chunker.test.ts`
- `apps/memos-local-openclaw/tests/client-connector.test.ts`
- `apps/memos-local-openclaw/tests/config.test.ts`
- `apps/memos-local-openclaw/tests/e2e-capabilities-fallback.ts`
- `apps/memos-local-openclaw/tests/e2e-host-model-proxy.ts`
- `apps/memos-local-openclaw/tests/e2e-summarizer-skill.ts`
- `apps/memos-local-openclaw/tests/hub-auth.test.ts`
- `apps/memos-local-openclaw/tests/hub-eager-connect.test.ts`
- `apps/memos-local-openclaw/tests/hub-server.test.ts`
- `apps/memos-local-openclaw/tests/incremental-sharing.test.ts`
- `apps/memos-local-openclaw/tests/integration.test.ts`
- `apps/memos-local-openclaw/tests/migration-status.test.ts`
- `apps/memos-local-openclaw/tests/multi-agent.test.ts`
- `apps/memos-local-openclaw/tests/openclaw-fallback.test.ts`
- `apps/memos-local-openclaw/tests/plugin-impl-access.test.ts`
- `apps/memos-local-openclaw/tests/plugin-openclaw-wiring.test.ts`
- `apps/memos-local-openclaw/tests/policy.test.ts`
- `apps/memos-local-openclaw/tests/postinstall-native-binding.test.ts`
- `apps/memos-local-openclaw/tests/recall.test.ts`
- `apps/memos-local-openclaw/tests/shutdown-lifecycle.test.ts`
- `apps/memos-local-openclaw/tests/skill-auto-install.test.ts`
- `apps/memos-local-openclaw/tests/skill-runtime-flow.test.ts`
- `apps/memos-local-openclaw/tests/skill-sync.test.ts`
- `apps/memos-local-openclaw/tests/skill-v1-enhancements.test.ts`
- `apps/memos-local-openclaw/tests/storage.test.ts`
- `apps/memos-local-openclaw/tests/task-processor.test.ts`
- `apps/memos-local-openclaw/tests/update-install.test.ts`
- `apps/memos-local-openclaw/tests/viewer-config.test.ts`
- `apps/memos-local-openclaw/tests/viewer-sharing.test.ts`
- `apps/memos-local-openclaw/tests/viewer-ui.test.ts`
- `apps/memos-local-openclaw/tests/worker-lifecycle.test.ts`
- `apps/memos-local-plugin/tests/README.md`
- `apps/memos-local-plugin/tests/e2e/.gitkeep`
- `apps/memos-local-plugin/tests/e2e/v7-full-chain.e2e.test.ts`
- `apps/memos-local-plugin/tests/fixtures/.gitkeep`
- `apps/memos-local-plugin/tests/helpers/.gitkeep`
- `apps/memos-local-plugin/tests/helpers/fake-embedder.ts`
- `apps/memos-local-plugin/tests/helpers/fake-llm.ts`
- `apps/memos-local-plugin/tests/helpers/tmp-db.ts`
- `apps/memos-local-plugin/tests/helpers/tmp-home.ts`
- `apps/memos-local-plugin/tests/integration/.gitkeep`
- `apps/memos-local-plugin/tests/integration/adapters/openclaw-full-chain.test.ts`
- `apps/memos-local-plugin/tests/integration/diagnostic-mode.test.ts`
- `apps/memos-local-plugin/tests/python/test_bridge_client.py`
- `apps/memos-local-plugin/tests/python/test_hermes_provider_pipeline.py`
- `apps/memos-local-plugin/tests/unit/.gitkeep`
- `apps/memos-local-plugin/tests/unit/adapters/hermes-persistence.test.ts`
- `apps/memos-local-plugin/tests/unit/adapters/hermes-protocol.test.ts`
- `apps/memos-local-plugin/tests/unit/adapters/openclaw-bridge.test.ts`
- `apps/memos-local-plugin/tests/unit/adapters/openclaw-e2e.test.ts`
- `apps/memos-local-plugin/tests/unit/adapters/openclaw-runtime-lock.test.ts`
- `apps/memos-local-plugin/tests/unit/adapters/openclaw-runtime.test.ts`
- `apps/memos-local-plugin/tests/unit/agent-contract/contract.test.ts`
- `apps/memos-local-plugin/tests/unit/agent-contract/episode-status.test.ts`
- `apps/memos-local-plugin/tests/unit/bridge/methods.test.ts`
- `apps/memos-local-plugin/tests/unit/bridge/stdio.test.ts`
- `apps/memos-local-plugin/tests/unit/capture/alpha-scorer.test.ts`
- `apps/memos-local-plugin/tests/unit/capture/batch-scorer.test.ts`
- `apps/memos-local-plugin/tests/unit/capture/capture-batch.test.ts`
- `apps/memos-local-plugin/tests/unit/capture/capture.test.ts`
- `apps/memos-local-plugin/tests/unit/capture/embedder.test.ts`
- `apps/memos-local-plugin/tests/unit/capture/error-signature.test.ts`
- `apps/memos-local-plugin/tests/unit/capture/events.test.ts`
- `apps/memos-local-plugin/tests/unit/capture/normalizer.test.ts`
- `apps/memos-local-plugin/tests/unit/capture/reflection-extractor.test.ts`
- `apps/memos-local-plugin/tests/unit/capture/reflection-synth.test.ts`
- `apps/memos-local-plugin/tests/unit/capture/step-extractor.test.ts`
- `apps/memos-local-plugin/tests/unit/capture/subscriber.test.ts`
- `apps/memos-local-plugin/tests/unit/capture/tagger.test.ts`
- `apps/memos-local-plugin/tests/unit/config/load.test.ts`
- `apps/memos-local-plugin/tests/unit/config/paths.test.ts`
- `apps/memos-local-plugin/tests/unit/config/writer.test.ts`
- `apps/memos-local-plugin/tests/unit/embedding/cache.test.ts`
- `apps/memos-local-plugin/tests/unit/embedding/embedder.test.ts`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/memos-local-plugin-publish.yml`
- `.github/workflows/openclaw-plugin-publish.yml`
- `.github/workflows/python-release.yml`
- `.github/workflows/python-tests.yml`
- `.github/workflows/stale.yml`
- `Dockerfile`
- `apps/openwork-memos-integration/apps/desktop/e2e/docker/Dockerfile`
- `apps/openwork-memos-integration/apps/desktop/e2e/docker/docker-compose.yml`
- `docker/Dockerfile`
- `docker/docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 643 |
| .py | 596 |
| .md | 226 |
| .tsx | 84 |
| .gitkeep | 43 |
| .json | 38 |
| .svg | 22 |
| .yaml | 20 |
| .sh | 17 |
| .html | 13 |
| .sql | 12 |
| .cjs | 10 |
| .yml | 10 |
| .js | 9 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `apps/ 내부 책임 분리`
- `packages/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `apps/memos-local-plugin/templates/.gitkeep 스펙/명령 의미`
- `apps/memos-local-plugin/templates/README.md 스펙/명령 의미`
- `apps/memos-local-plugin/templates/README.user.md 스펙/명령 의미`
- `apps/memos-local-plugin/templates/config.demo.yaml 스펙/명령 의미`
- `apps/memos-local-plugin/templates/config.hermes.yaml 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `apps/MemOS-Cloud-OpenClaw-Plugin/package.json 실행 스크립트와 패키지 경계`
- `apps/memos-local-openclaw/package.json 실행 스크립트와 패키지 경계`
- `apps/memos-local-openclaw/tsconfig.json 실행 스크립트와 패키지 경계`
- `apps/memos-local-plugin/package.json 실행 스크립트와 패키지 경계`

