# mem0ai/mem0 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/mem0ai__mem0 |
| remote | https://github.com/mem0ai/mem0 |
| HEAD | 06d33f6 (2026-06-12) fix: relax flaky entity boost parallelism timing threshold (#5511) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 1671 |
| dirs | 340 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `New Memory Algorithm (April 2026)`, `Research Highlights`, `Introduction`, `Key Features & Use Cases`, `🚀 Quickstart Guide <a name="quickstart"></a>`, `Sign up as an agent`, `1. Install`, `2. Sign up as an agent (replace `claude-code` with your name)`, `3. Add a memory`, `4. Search`, `Library (pip / npm)`, `Self-Hosted Server`, `Recommended: one command — start the stack, create an admin, issue the first API key.`, `Manual: start the stack and finish setup via the browser wizard.`, `Cloud Platform`, `CLI`, `Agent Skills`, `Basic Usage`

> <p align="center" <a href="https //github.com/mem0ai/mem0" <img src="docs/images/banner sm.png" width="800px" alt="Mem0 The Memory Layer for Personalized AI" </a </p <p align="center" style="display flex; justify content center; gap 20px; align items center;" <a href="https //trendshift.io/repositories/11194" target="blank" <img src="https //trendshift.io/api/badge/repositories/11194" alt="mem0ai%2Fmem0 Trendshift" width="250" height="55"/ </a </p <p align="center" <a href="https //mem0.ai" Learn more</a · <a href="https //mem0.dev/DiG" Join Discord</a · <a href="https //mem0.dev/demo" Demo</a </p <p align="center" <a href="https //mem0.dev/DiG" <img src="https //img.shields.io/badge/Discord %235865F2.svg?&logo=discord&logoColor=white" alt="Mem0 Discord" </a <a href="https //pepy.tech/project/mem0ai" <img src="https //img.shields.io/pypi/dm/mem0ai" alt="Mem0 PyPI Downloads" </a <a href="

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .claude-plugin | dir |
| .codex-plugin | dir |
| .cursor-plugin | dir |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| AGENTS.md | file |
| CLAUDE.md | other |
| cli | dir |
| CONTRIBUTING.md | file |
| cookbooks | dir |
| docs | dir |
| evaluation | dir |
| examples | dir |
| integrations | dir |
| LICENSE | file |
| LLM.md | file |
| Makefile | file |
| marketplace.json | file |
| mem0 | dir |
| mem0-ts | dir |
| openmemory | dir |
| poetry.lock | file |
| pyproject.toml | file |
| README.md | file |
| scripts | dir |
| server | dir |
| skills | dir |
| tests | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| docs/ | 282 |
| integrations/ | 276 |
| openmemory/ | 195 |
| server/ | 183 |
| examples/ | 179 |
| mem0-ts/ | 146 |
| mem0/ | 143 |
| cli/ | 84 |
| tests/ | 80 |
| skills/ | 39 |
| .github/ | 26 |
| evaluation/ | 16 |
| (root) | 11 |
| cookbooks/ | 4 |
| scripts/ | 3 |
| .agents/ | 1 |
| .claude-plugin/ | 1 |
| .codex-plugin/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| cli/ | 84 | preferred |
| server/ | 183 | preferred |
| docs/ | 282 | preferred |
| examples/ | 179 | preferred |
| tests/ | 80 | preferred |
| skills/ | 39 | preferred |
| scripts/ | 3 | preferred |
| integrations/ | 276 | large |
| openmemory/ | 195 | large |
| server/dashboard/ | 149 | large |
| mem0-ts/ | 146 | large |
| mem0/ | 143 | large |
| openmemory/ui/ | 143 | large |
| integrations/mem0-plugin/ | 136 | large |
| mem0-ts/src/ | 133 | large |
| server/dashboard/src/ | 102 | large |
| mem0-ts/src/oss/ | 99 | large |
| docs/components/ | 69 | large |
| integrations/openclaw/ | 63 | large |
| openmemory/ui/components/ | 60 | large |
| mem0/configs/ | 51 | large |
| examples/multimodal-demo/ | 46 | large |
| examples/vercel-ai-sdk-chat-app/ | 45 | large |
| examples/mem0-demo/ | 44 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `cli/node/package.json`
- `cli/node/pnpm-lock.yaml`
- `cli/node/pnpm-workspace.yaml`
- `cli/node/tsconfig.json`
- `cli/python/pyproject.toml`
- `examples/mem0-demo/package.json`
- `examples/mem0-demo/tsconfig.json`
- `examples/multimodal-demo/package.json`
- `examples/multimodal-demo/tsconfig.json`
- `examples/multimodal-demo/vite.config.ts`
- `examples/openai-inbuilt-tools/package.json`
- `examples/vercel-ai-sdk-chat-app/package.json`
- `examples/vercel-ai-sdk-chat-app/tsconfig.json`
- `examples/vercel-ai-sdk-chat-app/vite.config.ts`
- `examples/yt-assistant-chrome/package.json`
- `integrations/mem0-plugin/.opencode-plugin/bun.lock`
- `integrations/mem0-plugin/.opencode-plugin/package.json`
- `integrations/mem0-plugin/.opencode-plugin/tsconfig.json`
- `integrations/mem0-plugin/requirements.txt`
- `integrations/openclaw/package.json`
- `integrations/openclaw/pnpm-lock.yaml`
- `integrations/openclaw/pnpm-workspace.yaml`
- `integrations/openclaw/tsconfig.json`
- `integrations/pi-agent-plugin/package.json`
- `integrations/pi-agent-plugin/pnpm-lock.yaml`
- `integrations/pi-agent-plugin/pnpm-workspace.yaml`
- `integrations/pi-agent-plugin/tsconfig.json`
- `integrations/vercel-ai-sdk/package.json`
- `integrations/vercel-ai-sdk/pnpm-lock.yaml`
- `integrations/vercel-ai-sdk/pnpm-workspace.yaml`
- `integrations/vercel-ai-sdk/tsconfig.json`
- `mem0-ts/package.json`
- `mem0-ts/pnpm-lock.yaml`
- `mem0-ts/pnpm-workspace.yaml`
- `mem0-ts/src/community/package.json`
- `mem0-ts/src/community/tsconfig.json`
- `mem0-ts/src/oss/package.json`
- `mem0-ts/src/oss/tsconfig.json`
- `mem0-ts/tsconfig.json`
- `openmemory/api/Dockerfile`
- `openmemory/api/requirements.txt`
- `openmemory/docker-compose.yml`
- `openmemory/ui/Dockerfile`
- `openmemory/ui/package.json`
- `openmemory/ui/pnpm-lock.yaml`
- `openmemory/ui/pnpm-workspace.yaml`
- `openmemory/ui/tsconfig.json`
- `poetry.lock`
- `pyproject.toml`
- `server/Dockerfile`
- `server/dashboard/Dockerfile`
- `server/dashboard/package.json`
- `server/dashboard/pnpm-lock.yaml`
- `server/dashboard/pnpm-workspace.yaml`
- `server/dashboard/tsconfig.json`
- `server/requirements.txt`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| cli/node/package.json | @mem0/cli | build, dev, test, test:watch, lint, lint:fix, typecheck | commander, chalk, cli-table3, ora, boxen |
| examples/mem0-demo/package.json | mem0-demo | dev, build, start, lint | @ai-sdk/openai, @assistant-ui/react, @assistant-ui/react-ai-sdk, @assistant-ui/react-markdown, @mem0/vercel-ai-provider, @radix-ui/react-alert-dialog, @radix-ui/react-avatar, @radix-ui/react-popover, @radix-ui/react-scroll-area, @radix-ui/react-slot, @radix-ui/react-tooltip, @types/js-cookie, @types/react-syntax-highlighter, @types/uuid |
| examples/multimodal-demo/package.json | mem0-sdk-chat-bot | dev, build, lint, preview | @mem0/vercel-ai-provider, @radix-ui/react-avatar, @radix-ui/react-dialog, @radix-ui/react-icons, @radix-ui/react-label, @radix-ui/react-scroll-area, @radix-ui/react-select, @radix-ui/react-slot, ai, buffer, class-variance-authority, clsx, framer-motion, lucide-react |
| examples/openai-inbuilt-tools/package.json | openai-inbuilt-tools | test, start | mem0ai, openai, zod |
| examples/vercel-ai-sdk-chat-app/package.json | mem0-sdk-chat-bot | dev, build, lint, preview | @mem0/vercel-ai-provider, @radix-ui/react-avatar, @radix-ui/react-dialog, @radix-ui/react-icons, @radix-ui/react-label, @radix-ui/react-scroll-area, @radix-ui/react-select, @radix-ui/react-slot, ai, buffer, class-variance-authority, clsx, framer-motion, lucide-react |
| examples/yt-assistant-chrome/package.json | mem0-assistant | build, watch | mem0ai |
| integrations/mem0-plugin/.opencode-plugin/package.json | @mem0/opencode-plugin | build, dev, type-check, prepack, postpack | @opencode-ai/plugin, mem0ai |
| integrations/openclaw/package.json | @mem0/openclaw-mem0 | build, test | @sinclair/typebox, mem0ai |
| integrations/pi-agent-plugin/package.json | @mem0/pi-agent-plugin | build, test, test:watch, typecheck | mem0ai |
| integrations/vercel-ai-sdk/package.json | @mem0/vercel-ai-provider | build, clean, dev, lint, type-check, prettier-check, test, test:edge, test:node | @ai-sdk/anthropic, @ai-sdk/cohere, @ai-sdk/google, @ai-sdk/groq, @ai-sdk/openai, @ai-sdk/provider, @ai-sdk/provider-utils, ai, dotenv, partial-json, zod |
| mem0-ts/package.json | mem0ai | clean, build, dev, start, example, test, test:ci, test:unit, test:integration, test:ts, test:watch, format, format:check | axios, openai, uuid, zod |
| mem0-ts/src/community/package.json | @mem0/community | clean, build, dev, test, test:ts, test:watch, format, format:check, prepublishOnly | @langchain/community, @langchain/core, axios, mem0ai, uuid, zod |
| mem0-ts/src/oss/package.json | mem0ai-oss | build, test, start, example, clean, prepare | @anthropic-ai/sdk, @google/genai, @qdrant/js-client-rest, @types/node, @types/pg, @types/redis, @types/uuid, cloudflare, dotenv, groq-sdk, openai, pg, redis, better-sqlite3 |
| openmemory/ui/package.json | my-v0-project | dev, build, start, lint | @hookform/resolvers, @radix-ui/react-accordion, @radix-ui/react-alert-dialog, @radix-ui/react-aspect-ratio, @radix-ui/react-avatar, @radix-ui/react-checkbox, @radix-ui/react-collapsible, @radix-ui/react-context-menu, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-hover-card, @radix-ui/react-label, @radix-ui/react-menubar, @radix-ui/react-navigation-menu |
| server/dashboard/package.json | mem0-dashboard | dev, build, start, lint, format, typecheck | @hookform/resolvers, @radix-ui/react-accordion, @radix-ui/react-alert-dialog, @radix-ui/react-avatar, @radix-ui/react-checkbox, @radix-ui/react-collapsible, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-hover-card, @radix-ui/react-icons, @radix-ui/react-label, @radix-ui/react-popover, @radix-ui/react-progress, @radix-ui/react-radio-group |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| cli/python/pyproject.toml | mem0-cli | false | false | true | false |
| pyproject.toml | mem0ai | false | false | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `cli/README.md`
- `cli/node/README.md`
- `cli/python/README.md`
- `docs/README.md`
- `docs/_snippets/async-memory-add.mdx`
- `docs/_snippets/blank-notif.mdx`
- `docs/_snippets/get-help.mdx`
- `docs/api-reference.mdx`
- `docs/api-reference/entities/delete-user.mdx`
- `docs/api-reference/entities/get-users.mdx`
- `docs/api-reference/events/get-event.mdx`
- `docs/api-reference/events/get-events.mdx`
- `docs/api-reference/memory/add-memories.mdx`
- `docs/api-reference/memory/batch-delete.mdx`
- `docs/api-reference/memory/batch-update.mdx`
- `docs/api-reference/memory/create-memory-export.mdx`
- `docs/api-reference/memory/delete-memories.mdx`
- `docs/api-reference/memory/delete-memory.mdx`
- `docs/api-reference/memory/feedback.mdx`
- `docs/api-reference/memory/get-memories.mdx`
- `docs/api-reference/memory/get-memory-export.mdx`
- `docs/api-reference/memory/get-memory.mdx`
- `docs/api-reference/memory/history-memory.mdx`
- `docs/api-reference/memory/search-memories.mdx`
- `docs/api-reference/memory/update-memory.mdx`
- `docs/api-reference/organization/add-org-member.mdx`
- `docs/api-reference/organization/create-org.mdx`
- `docs/api-reference/organization/delete-org.mdx`
- `docs/api-reference/organization/get-org-members.mdx`
- `docs/api-reference/organization/get-org.mdx`
- `docs/api-reference/organization/get-orgs.mdx`
- `docs/api-reference/organizations-projects.mdx`
- `docs/api-reference/project/add-project-member.mdx`
- `docs/api-reference/project/create-project.mdx`
- `docs/api-reference/project/delete-project.mdx`
- `docs/api-reference/project/get-project-members.mdx`
- `docs/api-reference/project/get-project.mdx`
- `docs/api-reference/project/get-projects.mdx`
- `docs/api-reference/webhook/create-webhook.mdx`
- `docs/api-reference/webhook/delete-webhook.mdx`
- `docs/api-reference/webhook/get-webhook.mdx`
- `docs/api-reference/webhook/update-webhook.mdx`
- `docs/changelog/highlights.mdx`
- `docs/changelog/openclaw.mdx`
- `docs/changelog/platform.mdx`
- `docs/changelog/sdk.mdx`
- `docs/components/embedders/config.mdx`
- `docs/components/embedders/models/aws_bedrock.mdx`
- ... 30 more

### 에이전트 지침 후보

- `AGENTS.md`
- `docs/cookbooks/frameworks/gemini-3-with-mem0-mcp.mdx`
- `docs/platform/features/mcp-integration.mdx`
- `docs/platform/mem0-mcp.mdx`
- `integrations/mem0-plugin/.codex-mcp.json`
- `integrations/mem0-plugin/.cursor-mcp.json`
- `integrations/mem0-plugin/.mcp.json`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/context-loader/SKILL.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/dream/SKILL.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/export/SKILL.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/forget/SKILL.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/health/SKILL.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/import/SKILL.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/list-projects/SKILL.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/mem0/LICENSE`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/mem0/README.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/mem0/SKILL.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/mem0/client/differences.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/mem0/client/node.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/mem0/client/python.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/mem0/references/api-reference.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/mem0/references/architecture.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/mem0/references/features.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/mem0/references/integration-patterns.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/mem0/references/quickstart.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/mem0/references/sdk-guide.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/mem0/references/use-cases.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/mem0/scripts/mem0_doc_search.ts`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/memory-reviewer/SKILL.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/onboard/SKILL.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/peek/SKILL.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/pin/SKILL.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/remember/SKILL.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/stats/SKILL.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/switch-project/SKILL.md`
- `integrations/mem0-plugin/.opencode-plugin/opencode-skills/tour/SKILL.md`
- `integrations/mem0-plugin/mcp_config.json`
- `integrations/mem0-plugin/skills/context-loader/SKILL.md`
- `integrations/mem0-plugin/skills/dream/SKILL.md`
- `integrations/mem0-plugin/skills/export/SKILL.md`
- `integrations/mem0-plugin/skills/forget/SKILL.md`
- `integrations/mem0-plugin/skills/health/SKILL.md`
- `integrations/mem0-plugin/skills/import/SKILL.md`
- `integrations/mem0-plugin/skills/list-projects/SKILL.md`
- `integrations/mem0-plugin/skills/mem0/LICENSE`
- `integrations/mem0-plugin/skills/mem0/README.md`
- `integrations/mem0-plugin/skills/mem0/SKILL.md`
- `integrations/mem0-plugin/skills/mem0/client/differences.md`
- `integrations/mem0-plugin/skills/mem0/client/node.md`
- `integrations/mem0-plugin/skills/mem0/client/python.md`
- `integrations/mem0-plugin/skills/mem0/references/api-reference.md`
- `integrations/mem0-plugin/skills/mem0/references/architecture.md`
- `integrations/mem0-plugin/skills/mem0/references/features.md`
- `integrations/mem0-plugin/skills/mem0/references/integration-patterns.md`
- `integrations/mem0-plugin/skills/mem0/references/quickstart.md`
- `integrations/mem0-plugin/skills/mem0/references/sdk-guide.md`
- `integrations/mem0-plugin/skills/mem0/references/use-cases.md`
- `integrations/mem0-plugin/skills/mem0/scripts/mem0_doc_search.py`
- `integrations/mem0-plugin/skills/memory-reviewer/SKILL.md`
- `integrations/mem0-plugin/skills/onboard/SKILL.md`
- `integrations/mem0-plugin/skills/peek/SKILL.md`
- `integrations/mem0-plugin/skills/pin/SKILL.md`
- `integrations/mem0-plugin/skills/remember/SKILL.md`
- `integrations/mem0-plugin/skills/stats/SKILL.md`
- `integrations/mem0-plugin/skills/switch-project/SKILL.md`
- `integrations/mem0-plugin/skills/tour/SKILL.md`
- `integrations/openclaw/skill-loader.test.ts`
- `integrations/openclaw/skill-loader.ts`
- `integrations/openclaw/skills/memory-dream/SKILL.md`
- `integrations/openclaw/skills/memory-triage/SKILL.md`
- `integrations/openclaw/skills/memory-triage/domains/companion.md`
- `integrations/openclaw/skills/memory-triage/recall-protocol.md`
- `integrations/pi-agent-plugin/skills/context-loader/SKILL.md`
- `integrations/pi-agent-plugin/skills/dream/SKILL.md`
- `integrations/pi-agent-plugin/skills/forget/SKILL.md`
- `integrations/pi-agent-plugin/skills/pin/SKILL.md`
- `integrations/pi-agent-plugin/skills/remember/SKILL.md`
- `integrations/pi-agent-plugin/skills/search/SKILL.md`
- `integrations/pi-agent-plugin/skills/status/SKILL.md`
- `integrations/pi-agent-plugin/skills/tour/SKILL.md`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `cli/node/src/commands/agent-mode.ts`
- `cli/node/src/commands/agent-rush.ts`
- `cli/node/src/commands/config.ts`
- `cli/node/src/commands/entities.ts`
- `cli/node/src/commands/events.ts`
- `cli/node/src/commands/identify.ts`
- `cli/node/src/commands/init.ts`
- `cli/node/src/commands/memory.ts`
- `cli/node/src/commands/utils.ts`
- `cli/node/src/commands/whoami.ts`
- `cli/python/src/mem0_cli/commands/__init__.py`
- `cli/python/src/mem0_cli/commands/agent_mode_cmd.py`
- `cli/python/src/mem0_cli/commands/agent_rush_cmd.py`
- `cli/python/src/mem0_cli/commands/config_cmd.py`
- `cli/python/src/mem0_cli/commands/entities.py`
- `cli/python/src/mem0_cli/commands/events_cmd.py`
- `cli/python/src/mem0_cli/commands/identify_cmd.py`
- `cli/python/src/mem0_cli/commands/init_cmd.py`
- `cli/python/src/mem0_cli/commands/memory.py`
- `cli/python/src/mem0_cli/commands/utils.py`
- `cli/python/src/mem0_cli/commands/whoami_cmd.py`
- `docs/templates/api_reference_template.mdx`
- `docs/templates/concept_guide_template.mdx`
- `docs/templates/cookbook_template.mdx`
- `docs/templates/feature_guide_template.mdx`
- `docs/templates/integration_guide_template.mdx`
- `docs/templates/migration_guide_template.mdx`
- `docs/templates/operation_guide_template.mdx`
- `docs/templates/parameters_reference_template.mdx`
- `docs/templates/quickstart_template.mdx`
- `docs/templates/release_notes_template.mdx`
- `docs/templates/section_overview_template.mdx`
- `docs/templates/troubleshooting_playbook_template.mdx`
- `integrations/mem0-plugin/skills/context-loader/SKILL.md`
- `integrations/mem0-plugin/skills/dream/SKILL.md`
- `integrations/mem0-plugin/skills/export/SKILL.md`
- `integrations/mem0-plugin/skills/forget/SKILL.md`
- `integrations/mem0-plugin/skills/health/SKILL.md`
- `integrations/mem0-plugin/skills/import/SKILL.md`
- `integrations/mem0-plugin/skills/list-projects/SKILL.md`
- `integrations/mem0-plugin/skills/mem0/LICENSE`
- `integrations/mem0-plugin/skills/mem0/README.md`
- `integrations/mem0-plugin/skills/mem0/SKILL.md`
- `integrations/mem0-plugin/skills/mem0/client/differences.md`
- `integrations/mem0-plugin/skills/mem0/client/node.md`
- `integrations/mem0-plugin/skills/mem0/client/python.md`
- `integrations/mem0-plugin/skills/mem0/references/api-reference.md`
- `integrations/mem0-plugin/skills/mem0/references/architecture.md`
- `integrations/mem0-plugin/skills/mem0/references/features.md`
- `integrations/mem0-plugin/skills/mem0/references/integration-patterns.md`
- `integrations/mem0-plugin/skills/mem0/references/quickstart.md`
- `integrations/mem0-plugin/skills/mem0/references/sdk-guide.md`
- `integrations/mem0-plugin/skills/mem0/references/use-cases.md`
- `integrations/mem0-plugin/skills/mem0/scripts/mem0_doc_search.py`
- `integrations/mem0-plugin/skills/memory-reviewer/SKILL.md`
- `integrations/mem0-plugin/skills/onboard/SKILL.md`
- `integrations/mem0-plugin/skills/peek/SKILL.md`
- `integrations/mem0-plugin/skills/pin/SKILL.md`
- `integrations/mem0-plugin/skills/remember/SKILL.md`
- `integrations/mem0-plugin/skills/stats/SKILL.md`
- `integrations/mem0-plugin/skills/switch-project/SKILL.md`
- `integrations/mem0-plugin/skills/tour/SKILL.md`
- `integrations/openclaw/skills/memory-dream/SKILL.md`
- `integrations/openclaw/skills/memory-triage/SKILL.md`
- `integrations/openclaw/skills/memory-triage/domains/companion.md`
- `integrations/openclaw/skills/memory-triage/recall-protocol.md`
- `integrations/pi-agent-plugin/skills/context-loader/SKILL.md`
- `integrations/pi-agent-plugin/skills/dream/SKILL.md`
- `integrations/pi-agent-plugin/skills/forget/SKILL.md`
- `integrations/pi-agent-plugin/skills/pin/SKILL.md`
- `integrations/pi-agent-plugin/skills/remember/SKILL.md`
- `integrations/pi-agent-plugin/skills/search/SKILL.md`
- `integrations/pi-agent-plugin/skills/status/SKILL.md`
- `integrations/pi-agent-plugin/skills/tour/SKILL.md`
- `skills/mem0-oss-to-platform/references/plan-template.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `cli/node/tests/agent-mode.test.ts`
- `cli/node/tests/branding.test.ts`
- `cli/node/tests/cli-integration.test.ts`
- `cli/node/tests/commands.test.ts`
- `cli/node/tests/config.test.ts`
- `cli/node/tests/init-internals.test.ts`
- `cli/node/tests/output.test.ts`
- `cli/node/tests/setup.ts`
- `cli/python/tests/__init__.py`
- `cli/python/tests/conftest.py`
- `cli/python/tests/test_agent_mode.py`
- `cli/python/tests/test_branding.py`
- `cli/python/tests/test_cli_integration.py`
- `cli/python/tests/test_commands.py`
- `cli/python/tests/test_config.py`
- `cli/python/tests/test_init_internals.py`
- `cli/python/tests/test_output.py`
- `integrations/mem0-plugin/tests/conftest.py`
- `integrations/mem0-plugin/tests/test_auto_capture.py`
- `integrations/mem0-plugin/tests/test_auto_setup_categories.py`
- `integrations/mem0-plugin/tests/test_coding_categories.py`
- `integrations/mem0-plugin/tests/test_import_competing_tools.py`
- `integrations/mem0-plugin/tests/test_parse_export_file.py`
- `integrations/mem0-plugin/tests/test_parse_mem0_config.py`
- `integrations/mem0-plugin/tests/test_project.py`
- `integrations/mem0-plugin/tests/test_rubric_dedup.py`
- `integrations/mem0-plugin/tests/test_search.py`
- `integrations/mem0-plugin/tests/test_session_stats.py`
- `integrations/mem0-plugin/tests/test_telemetry.py`
- `integrations/mem0-plugin/tests/test_write_path.py`
- `integrations/openclaw/index.test.ts`
- `integrations/openclaw/skill-loader.test.ts`
- `integrations/openclaw/sqlite-resilience.test.ts`
- `integrations/openclaw/tests/backend-platform.test.ts`
- `integrations/openclaw/tests/cli-commands.test.ts`
- `integrations/openclaw/tests/config-file.test.ts`
- `integrations/openclaw/tests/config.test.ts`
- `integrations/openclaw/tests/dream-gate.test.ts`
- `integrations/openclaw/tests/filtering.test.ts`
- `integrations/openclaw/tests/fs-safe.test.ts`
- `integrations/openclaw/tests/json-helpers.test.ts`
- `integrations/openclaw/tests/oss-wizard.test.ts`
- `integrations/openclaw/tests/providers.test.ts`
- `integrations/openclaw/tests/telemetry.test.ts`
- `integrations/openclaw/tests/tools.test.ts`
- `integrations/pi-agent-plugin/src/commands.test.ts`
- `integrations/pi-agent-plugin/src/entry.test.ts`
- `integrations/pi-agent-plugin/src/memory/scoping.test.ts`
- `integrations/pi-agent-plugin/tests/capture.test.ts`
- `integrations/pi-agent-plugin/tests/config.test.ts`
- `integrations/pi-agent-plugin/tests/dream.test.ts`
- `integrations/pi-agent-plugin/tests/formatting.test.ts`
- `integrations/pi-agent-plugin/tests/scoping.test.ts`
- `integrations/pi-agent-plugin/tests/telemetry.test.ts`
- `integrations/pi-agent-plugin/tests/tools.test.ts`
- `integrations/vercel-ai-sdk/tests/generate-output.test.ts`
- `integrations/vercel-ai-sdk/tests/mem0-provider-tests/mem0-cohere.test.ts`
- `integrations/vercel-ai-sdk/tests/mem0-provider-tests/mem0-google.test.ts`
- `integrations/vercel-ai-sdk/tests/mem0-provider-tests/mem0-groq.test.ts`
- `integrations/vercel-ai-sdk/tests/mem0-provider-tests/mem0-openai-structured-ouput.test.ts`
- `integrations/vercel-ai-sdk/tests/mem0-provider-tests/mem0-openai.test.ts`
- `integrations/vercel-ai-sdk/tests/mem0-provider-tests/mem0_anthropic.test.ts`
- `integrations/vercel-ai-sdk/tests/mem0-toolcalls.test.ts`
- `integrations/vercel-ai-sdk/tests/memory-core.test.ts`
- `integrations/vercel-ai-sdk/tests/text-properties.test.ts`
- `integrations/vercel-ai-sdk/tests/utils-test/anthropic-integration.test.ts`
- `integrations/vercel-ai-sdk/tests/utils-test/cohere-integration.test.ts`
- `integrations/vercel-ai-sdk/tests/utils-test/google-integration.test.ts`
- `integrations/vercel-ai-sdk/tests/utils-test/groq-integration.test.ts`
- `integrations/vercel-ai-sdk/tests/utils-test/openai-integration.test.ts`
- `integrations/vercel-ai-sdk/tests/v3-provider-contract.test.ts`
- `mem0-ts/src/client/tests/helpers.ts`
- `mem0-ts/src/client/tests/integration/batch.test.ts`
- `mem0-ts/src/client/tests/integration/crud.test.ts`
- `mem0-ts/src/client/tests/integration/global-setup.ts`
- `mem0-ts/src/client/tests/integration/global-teardown.ts`
- `mem0-ts/src/client/tests/integration/helpers.ts`
- `mem0-ts/src/client/tests/integration/initialization.test.ts`
- `mem0-ts/src/client/tests/integration/management.test.ts`
- `mem0-ts/src/client/tests/integration/search.test.ts`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/cd.yml`
- `.github/workflows/ci-gate.yml`
- `.github/workflows/ci.yml`
- `.github/workflows/cli-node-cd.yml`
- `.github/workflows/cli-node-ci.yml`
- `.github/workflows/cli-python-cd.yml`
- `.github/workflows/cli-python-ci.yml`
- `.github/workflows/docs-llms-txt-check.yml`
- `.github/workflows/issue-labeler.yml`
- `.github/workflows/openclaw-cd.yml`
- `.github/workflows/openclaw-checks.yml`
- `.github/workflows/opencode-plugin-cd.yml`
- `.github/workflows/opencode-plugin-checks.yml`
- `.github/workflows/pi-agent-plugin-cd.yml`
- `.github/workflows/pi-agent-plugin-checks.yml`
- `.github/workflows/release.yml`
- `.github/workflows/stale.yml`
- `.github/workflows/ts-sdk-cd.yml`
- `.github/workflows/ts-sdk-ci.yml`
- `.github/workflows/vercel-ai-cd.yml`
- `openmemory/api/Dockerfile`
- `openmemory/docker-compose.yml`
- `openmemory/ui/Dockerfile`
- `server/Dockerfile`
- `server/dashboard/Dockerfile`
- `server/docker-compose.yaml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 372 |
| .ts | 333 |
| .mdx | 241 |
| .tsx | 227 |
| .md | 129 |
| .json | 65 |
| .png | 54 |
| .yml | 35 |
| .svg | 33 |
| .sh | 28 |
| .js | 16 |
| .yaml | 16 |
| .css | 12 |
| license | 12 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `cli/ 내부 책임 분리`
- `server/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `cli/node/src/commands/agent-mode.ts 스펙/명령 의미`
- `cli/node/src/commands/agent-rush.ts 스펙/명령 의미`
- `cli/node/src/commands/config.ts 스펙/명령 의미`
- `cli/node/src/commands/entities.ts 스펙/명령 의미`
- `cli/node/src/commands/events.ts 스펙/명령 의미`
- `cli/node/package.json 실행 스크립트와 패키지 경계`
- `cli/node/pnpm-lock.yaml 실행 스크립트와 패키지 경계`
- `cli/node/pnpm-workspace.yaml 실행 스크립트와 패키지 경계`
- `cli/node/tsconfig.json 실행 스크립트와 패키지 경계`
- `cli/python/pyproject.toml 실행 스크립트와 패키지 경계`

