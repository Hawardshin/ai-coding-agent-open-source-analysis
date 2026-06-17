# promptfoo/promptfoo 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/promptfoo__promptfoo |
| remote | https://github.com/promptfoo/promptfoo |
| HEAD | 30dc14b (2026-06-12) fix(eval): handle config directory inputs without promptfooconfig (#7825) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 5400 |
| dirs | 1002 |
| stack | Node/TypeScript/JavaScript, Python, Go |

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
- 주요 heading: `Promptfoo: LLM evals & red teaming`, `Quick Start`, `What can you do with Promptfoo?`, `Why Promptfoo?`, `Learn More`, `Contributing`

> Promptfoo LLM evals & red teaming <p align="center" <a href="https //npmjs.com/package/promptfoo" <img src="https //img.shields.io/npm/v/promptfoo" alt="npm" </a <a href="https //npmjs.com/package/promptfoo" <img src="https //img.shields.io/npm/dm/promptfoo" alt="npm" </a <a href="https //github.com/promptfoo/promptfoo/actions/workflows/main.yml" <img src="https //img.shields.io/github/actions/workflow/status/promptfoo/promptfoo/main.yml" alt="GitHub Workflow Status" </a <a href="https //github.com/promptfoo/promptfoo/blob/main/LICENSE" <img src="https //img.shields.io/github/license/promptfoo/promptfoo" alt="MIT license" </a <a href="https //discord.gg/promptfoo" <img src="https //img.shields.io/discord/1146610656779440188?logo=discord&label=promptfoo" alt="Discord" </a </p <p align="center" <code promptfoo</code is a CLI and library for evaluating and red teaming LLM apps. Stop the tri

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .biomeignore | file |
| .claude | dir |
| .claude-plugin | dir |
| .cursor | dir |
| .devcontainer | dir |
| .dockerignore | file |
| .git-blame-ignore-revs | file |
| .github | dir |
| .gitignore | file |
| .husky | dir |
| .mailmap | file |
| .npmignore | file |
| .npmrc | file |
| .nvmrc | file |
| .prettierignore | file |
| .prettierrc.yaml | file |
| .release-please-manifest.json | file |
| .rubocop.yml | file |
| .ruff.toml | file |
| .vscode | dir |
| AGENTS.md | file |
| architecture | dir |
| biome.jsonc | file |
| CHANGELOG.md | file |
| CITATION.cff | file |
| CLAUDE.md | file |
| CODE_OF_CONDUCT.md | file |
| code-scan-action | dir |
| codecov.yml | file |
| CONTRIBUTING.md | file |
| Dockerfile | file |
| docs | dir |
| drizzle | dir |
| drizzle.config.ts | file |
| examples | dir |
| helm | dir |
| knip.json | file |
| LICENSE | file |
| package-lock.json | file |
| package.json | file |
| plugins | dir |
| pnpm-workspace.yaml | file |
| README.md | file |
| release-please-config.json | file |
| renovate.json | file |
| scripts | dir |
| SECURITY.md | file |
| site | dir |
| src | dir |
| test | dir |
| tools | dir |
| tsconfig.json | file |
| tsdown.config.ts | file |
| vitest.config.ts | file |
| vitest.integration.config.ts | file |
| vitest.setup.ts | file |
| vitest.smoke.config.ts | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 1653 |
| site/ | 1261 |
| examples/ | 1231 |
| test/ | 1052 |
| drizzle/ | 50 |
| (root) | 38 |
| .github/ | 20 |
| plugins/ | 18 |
| scripts/ | 17 |
| docs/ | 15 |
| code-scan-action/ | 14 |
| helm/ | 11 |
| .claude/ | 5 |
| .agents/ | 4 |
| .devcontainer/ | 3 |
| .vscode/ | 2 |
| architecture/ | 2 |
| .claude-plugin/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 1653 | preferred |
| docs/ | 15 | preferred |
| examples/ | 1231 | preferred |
| test/ | 1052 | preferred |
| tools/ | 1 | preferred |
| scripts/ | 17 | preferred |
| plugins/ | 18 | preferred |
| site/ | 1261 | large |
| src/app/ | 709 | large |
| src/app/src/ | 688 | large |
| site/static/ | 600 | large |
| site/static/img/ | 575 | large |
| site/docs/ | 387 | large |
| src/providers/ | 236 | large |
| src/redteam/ | 233 | large |
| test/providers/ | 211 | large |
| test/smoke/ | 164 | large |
| site/src/ | 153 | large |
| test/smoke/fixtures/ | 149 | large |
| site/docs/red-team/ | 145 | large |
| test/redteam/ | 140 | large |
| src/redteam/plugins/ | 135 | large |
| site/blog/ | 109 | large |
| src/util/ | 101 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `.devcontainer/docker-compose.yml`
- `Dockerfile`
- `code-scan-action/package.json`
- `code-scan-action/tsconfig.json`
- `examples/claude-agent-sdk/advanced/workspace/package.json`
- `examples/claude-agent-sdk/working-dir/sample-project/package.json`
- `examples/config-node-package-typescript/package.json`
- `examples/config-node-package/package.json`
- `examples/config-stateful-session-management/package.json`
- `examples/config-ts/package.json`
- `examples/config-ts/tsconfig.json`
- `examples/config-websockets/basic/test-server/package.json`
- `examples/config-websockets/streaming/server/package.json`
- `examples/eval-bert-score/requirements.txt`
- `examples/eval-f-score/requirements.txt`
- `examples/eval-image-classification/requirements.txt`
- `examples/eval-rag-full/requirements.txt`
- `examples/integration-browser/headless/requirements.txt`
- `examples/integration-crewai/requirements.txt`
- `examples/integration-docker/code-generation-sandbox/requirements.txt`
- `examples/integration-google-adk/requirements.txt`
- `examples/integration-jest/package.json`
- `examples/integration-langchain/requirements.txt`
- `examples/integration-opentelemetry/javascript/package.json`
- `examples/integration-opentelemetry/python/requirements.txt`
- `examples/integration-pydantic-ai/requirements.txt`
- `examples/integration-strands-agents/requirements.txt`
- `examples/integration-vercel/ai-sdk/package.json`
- `examples/openai-agents-advanced/package.json`
- `examples/openai-agents-basic/package.json`
- `examples/openai-agents/requirements.txt`
- `examples/provider-golang/go.mod`
- `examples/provider-http/auth-signature-jks/package.json`
- `examples/provider-http/auth-signature-pfx/package.json`
- `examples/provider-http/auth-signature/package.json`
- `examples/provider-python/requirements.txt`
- `examples/redteam-api-top-10/pyproject.toml`
- `examples/redteam-chatbot/package.json`
- `examples/redteam-indirect-web-pwn/package.json`
- `examples/redteam-langchain/requirements.txt`
- `examples/redteam-mcp-agent/package.json`
- `examples/redteam-medical-agent/package.json`
- `examples/redteam-tracing-example/package.json`
- `examples/simple-mcp/package.json`
- `package.json`
- `pnpm-workspace.yaml`
- `site/package.json`
- `site/tsconfig.json`
- `src/app/package.json`
- `src/app/tsconfig.json`
- `src/app/vite.config.ts`
- `src/golang/go.mod`
- `test/smoke/fixtures/frontend-ts-provider/tsconfig.json`
- `test/smoke/fixtures/providers/go.mod`
- `tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| code-scan-action/package.json | @promptfoo/code-scan-action | build, package, test, dev, tsc, tsc:watch | @actions/core, @actions/exec, @actions/github, @octokit/auth-app, @octokit/rest |
| examples/claude-agent-sdk/advanced/workspace/package.json | auth-module | start |  |
| examples/claude-agent-sdk/working-dir/sample-project/package.json | sample-api | start | express |
| examples/config-node-package-typescript/package.json | simple-import | test | promptfoo |
| examples/config-node-package/package.json | simple-import | test | promptfoo |
| examples/config-stateful-session-management/package.json | dynamic-conversation-ids | server | express, uuid, openai |
| examples/config-ts/package.json | ts-config-example | eval, eval-schema, view | openai, tsx, zod |
| examples/config-websockets/basic/test-server/package.json | websockets | test | ws |
| examples/config-websockets/streaming/server/package.json | openai-ws-server | start, dev, lint | cors, dotenv, express, openai, ws |
| examples/integration-jest/package.json | promptfoo-jest-vitest-integration-example | test, test:jest, test:vitest |  |
| examples/integration-opentelemetry/javascript/package.json | @promptfoo/opentelemetry-tracing-example | eval, view | @opentelemetry/api, @opentelemetry/sdk-trace-node, @opentelemetry/exporter-trace-otlp-http, @opentelemetry/resources, @opentelemetry/semantic-conventions |
| examples/integration-vercel/ai-sdk/package.json | vercel-ai-sdk |  | ai, @ai-sdk/openai |
| examples/openai-agents-advanced/package.json | @promptfoo/openai-agents-advanced-example |  | @openai/agents, zod |
| examples/openai-agents-basic/package.json | @promptfoo/openai-agents-basic-example | eval, view | @openai/agents, zod |
| examples/provider-http/auth-signature-jks/package.json | http-provider-auth-signature-jks | start, test | express, express-rate-limit, promptfoo, jks-js |
| examples/provider-http/auth-signature-pfx/package.json | http-provider-auth-signature-pfx | start, test | express, express-rate-limit, pem, promptfoo |
| examples/provider-http/auth-signature/package.json | http-provider-auth-signature | start, test | express, express-rate-limit, promptfoo |
| examples/redteam-chatbot/package.json | redteam-chatbot | start, test | express, promptfoo |
| examples/redteam-indirect-web-pwn/package.json | redteam-indirect-web-pwn | redteam, view | openai |
| examples/redteam-mcp-agent/package.json | agent_custom_provider | test | @faker-js/faker, @modelcontextprotocol/sdk, dotenv, openai, zod |
| examples/redteam-medical-agent/package.json | redteam-medical-agent | start, test | express, openai, dotenv, cors |
| examples/redteam-tracing-example/package.json | redteam-tracing-example | server, test, eval | express |
| examples/simple-mcp/package.json | simple-mcp-example | start, test | @modelcontextprotocol/sdk, zod |
| package.json | promptfoo | audit:fix, architecture:baseline, architecture:check, bin, build:app, build:clean, build:watch, build, postbuild, citation:generate, db:generate, db:migrate, db:studio, openapi:generate, openapi:check, modelAuditSchema:generate | @anthropic-ai/sdk, @apidevtools/json-schema-ref-parser, @inquirer/checkbox, @inquirer/confirm, @inquirer/core, @inquirer/editor, @inquirer/input, @inquirer/search, @inquirer/select, @libsql/client, @opentelemetry/api, @opentelemetry/core, @opentelemetry/exporter-trace-otlp-http, @opentelemetry/resources |
| site/package.json | promptfoo-docs | docusaurus, fetch-stats, ensure-stats, postinstall, prestart, start, prebuild, build, swizzle, deploy, clear, serve, write-translations, write-heading-ids, typecheck, format | @emotion/react, @emotion/styled, @mui/material, @mui/system, @types/react, @types/react-dom, dompurify, react-countup, swiper |
| src/app/package.json | app | dev, tsc, build, build:watch, lint, lint:ci, lint:circular, preview, test, test:browser, test:ci, test:coverage, storybook, build-storybook | @radix-ui/react-alert-dialog, @radix-ui/react-checkbox, @radix-ui/react-collapsible, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-label, @radix-ui/react-navigation-menu, @radix-ui/react-popover, @radix-ui/react-progress, @radix-ui/react-radio-group, @radix-ui/react-select, @radix-ui/react-separator, @radix-ui/react-slider, @radix-ui/react-slot |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| examples/redteam-api-top-10/pyproject.toml | swag-store-demo | false | false | false | false |

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| examples/provider-golang/go.mod | github.com/promptfoo/promptfoo/examples/golang-provider | 1.23.6 |
| src/golang/go.mod | github.com/promptfoo/golang | 1.26.1 |
| test/smoke/fixtures/providers/go.mod | echo-provider | 1.21 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `code-scan-action/README.md`
- `docs/agents/AGENTS.md`
- `docs/agents/codex-app-server-provider-notes.md`
- `docs/agents/coding-agent-provider-taxonomy.md`
- `docs/agents/database-security.md`
- `docs/agents/dependency-management.md`
- `docs/agents/git-workflow.md`
- `docs/agents/logging.md`
- `docs/agents/pr-conventions.md`
- `docs/agents/python.md`
- `docs/architecture/packages.md`
- `docs/plans/2026-01-08-plugins-state-management-refactor.md`
- `docs/plans/2026-05-02-multi-package-system-proposal.md`
- `docs/plans/eng-1770.md`
- `docs/plans/smoke-tests.md`
- `docs/scheduler-architecture.md`
- `examples/amazon-bedrock/README.md`
- `examples/amazon-bedrock/agents/README.md`
- `examples/amazon-bedrock/models/README.md`
- `examples/amazon-bedrock/video/README.md`
- `examples/anthropic/claude-code-session/README.md`
- `examples/anthropic/fable-5-coding/README.md`
- `examples/anthropic/mcp/README.md`
- `examples/anthropic/memory-tool/README.md`
- `examples/anthropic/opus-4-6-coding/README.md`
- `examples/anthropic/opus-4-8-coding/README.md`
- `examples/anthropic/structured-outputs/README.md`
- `examples/anthropic/web-tools/README.md`
- `examples/azure-mai/README.md`
- `examples/azure/README.md`
- `examples/azure/assistant/README.md`
- `examples/azure/claude/README.md`
- `examples/azure/comparison/README.md`
- `examples/azure/deepseek/README.md`
- `examples/azure/foundry-agent/README.md`
- `examples/azure/llama/README.md`
- `examples/azure/mistral/README.md`
- `examples/azure/openai/README.md`
- `examples/claude-agent-sdk/README.md`
- `examples/claude-agent-sdk/advanced-options/README.md`
- `examples/claude-agent-sdk/skill-comparison/README.md`
- `examples/claude-thinking/README.md`
- `examples/claude-vision/README.md`
- `examples/compare-agentic-sdks/README.md`
- `examples/compare-agentic-sdks/test-codebase/README.md`
- `examples/compare-claude-vs-gpt-image/README.md`
- `examples/compare-claude-vs-gpt/README.md`
- `examples/compare-deepseek-r1-vs-openai-o1/README.md`
- ... 30 more

### 에이전트 지침 후보

- `.agents/AGENTS.md`
- `.agents/skills/redteam-plugin-development/SKILL.md`
- `.agents/skills/search-params/SKILL.md`
- `.claude/settings.json`
- `.claude/skills/promptfoo-evals/SKILL.md`
- `.claude/skills/promptfoo-evals/references/cheatsheet.md`
- `.claude/skills/redteam-plugin-development/SKILL.md`
- `.claude/skills/search-params/SKILL.md`
- `.cursor/mcp.json`
- `.github/AGENTS.md`
- `AGENTS.md`
- `CLAUDE.md`
- `code-scan-action/AGENTS.md`
- `docs/agents/AGENTS.md`
- `drizzle/AGENTS.md`
- `drizzle/CLAUDE.md`
- `examples/AGENTS.md`
- `examples/CLAUDE.md`
- `examples/amazon-bedrock/models/promptfooconfig.converse-mcp.yaml`
- `examples/anthropic/mcp/README.md`
- `examples/anthropic/mcp/promptfooconfig.yaml`
- `examples/claude-agent-sdk/mcp/promptfooconfig.yaml`
- `examples/claude-agent-sdk/plugins/sample-plugin/skills/standards-check/SKILL.md`
- `examples/claude-agent-sdk/skill-comparison/README.md`
- `examples/claude-agent-sdk/skill-comparison/fixtures/v1/.claude/skills/review-standards/SKILL.md`
- `examples/claude-agent-sdk/skill-comparison/fixtures/v1/src/auth.ts`
- `examples/claude-agent-sdk/skill-comparison/fixtures/v2/.claude/skills/review-standards/SKILL.md`
- `examples/claude-agent-sdk/skill-comparison/fixtures/v2/src/auth.ts`
- `examples/claude-agent-sdk/skill-comparison/promptfooconfig.yaml`
- `examples/claude-agent-sdk/skills/promptfooconfig.yaml`
- `examples/claude-agent-sdk/skills/sample-project/.claude/skills/code-review/SKILL.md`
- `examples/claude-agent-sdk/skills/sample-project/src/auth.ts`
- `examples/openai-agents/skill_fixture/repo/src/discount_policy.py`
- `examples/openai-agents/skill_fixture/repo/tickets/TICKET-014.md`
- `examples/openai-agents/skills/discount-review/SKILL.md`
- `examples/openai-agents/skills/discount-review/scripts/analyze_discount_policy.py`
- `examples/openai-codex-app-server/skills/promptfooconfig.yaml`
- `examples/openai-codex-app-server/skills/skill-input.json`
- `examples/openai-codex-sdk/skill-comparison/README.md`
- `examples/openai-codex-sdk/skill-comparison/fixtures/v1/.agents/skills/review-standards/SKILL.md`
- `examples/openai-codex-sdk/skill-comparison/fixtures/v1/src/auth.ts`
- `examples/openai-codex-sdk/skill-comparison/fixtures/v2/.agents/skills/review-standards/SKILL.md`
- `examples/openai-codex-sdk/skill-comparison/fixtures/v2/src/auth.ts`
- `examples/openai-codex-sdk/skill-comparison/promptfooconfig.yaml`
- `examples/openai-codex-sdk/skill-comparison/sample-codex-home/.gitignore`
- `examples/openai-codex-sdk/skills/promptfooconfig.tracing.yaml`
- `examples/openai-codex-sdk/skills/promptfooconfig.yaml`
- `examples/openai-codex-sdk/skills/sample-codex-home/.gitignore`
- `examples/openai-codex-sdk/skills/sample-codex-home/.gitkeep`
- `examples/openai-codex-sdk/skills/sample-project/.agents/skills/token-skill/SKILL.md`
- `examples/openai-deep-research/mcp-server-example.md`
- `examples/openai-mcp/README.md`
- `examples/openai-mcp/promptfooconfig.approval.yaml`
- `examples/openai-mcp/promptfooconfig.authenticated.yaml`
- `examples/openai-mcp/promptfooconfig.yaml`
- `examples/openai-responses/promptfooconfig.mcp.yaml`
- `examples/provider-truefoundry/promptfooconfig-mcp.yaml`
- `examples/redteam-api-top-10/app/mcp_client.py`
- `examples/redteam-mcp-agent/README.md`
- `examples/redteam-mcp-agent/package.json`
- `examples/redteam-mcp-agent/promptfooconfig.yaml`
- `examples/redteam-mcp-agent/redteam.yaml`
- `examples/redteam-mcp-agent/server.py`
- `examples/redteam-mcp-agent/src/mcp-client.js`
- `examples/redteam-mcp-agent/src/mcp_server/data/mockData.js`
- `examples/redteam-mcp-agent/src/mcp_server/index.js`
- `examples/redteam-mcp-agent/src/mcp_server/tools/analyticsTools.js`
- `examples/redteam-mcp-agent/src/mcp_server/tools/erpTools.js`
- `examples/redteam-mcp-agent/src/openai-agent-provider.js`
- `examples/redteam-mcp-agent/src/react-agent.js`
- `examples/redteam-mcp-auth/README.md`
- `examples/redteam-mcp-auth/promptfooconfig.agent-oauth.yaml`
- `examples/redteam-mcp-auth/promptfooconfig.oauth.yaml`
- `examples/redteam-mcp/README.md`
- `examples/redteam-mcp/promptfooconfig.yaml`
- `examples/simple-mcp/README.md`
- `examples/simple-mcp/example-server.js`
- `examples/simple-mcp/package.json`
- `examples/simple-mcp/promptfooconfig.yaml`
- `examples/simple-mcp/response-parser.js`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `.agents/skills/redteam-plugin-development/SKILL.md`
- `.agents/skills/search-params/SKILL.md`
- `.claude/skills/promptfoo-evals/SKILL.md`
- `.claude/skills/promptfoo-evals/references/cheatsheet.md`
- `.claude/skills/redteam-plugin-development/SKILL.md`
- `.claude/skills/search-params/SKILL.md`
- `examples/claude-agent-sdk/plugins/sample-plugin/skills/standards-check/SKILL.md`
- `examples/claude-agent-sdk/skill-comparison/fixtures/v1/.claude/skills/review-standards/SKILL.md`
- `examples/claude-agent-sdk/skill-comparison/fixtures/v2/.claude/skills/review-standards/SKILL.md`
- `examples/claude-agent-sdk/skills/promptfooconfig.yaml`
- `examples/claude-agent-sdk/skills/sample-project/.claude/skills/code-review/SKILL.md`
- `examples/claude-agent-sdk/skills/sample-project/src/auth.ts`
- `examples/openai-agents/skills/discount-review/SKILL.md`
- `examples/openai-agents/skills/discount-review/scripts/analyze_discount_policy.py`
- `examples/openai-codex-app-server/skills/promptfooconfig.yaml`
- `examples/openai-codex-app-server/skills/skill-input.json`
- `examples/openai-codex-sdk/skill-comparison/fixtures/v1/.agents/skills/review-standards/SKILL.md`
- `examples/openai-codex-sdk/skill-comparison/fixtures/v2/.agents/skills/review-standards/SKILL.md`
- `examples/openai-codex-sdk/skills/promptfooconfig.tracing.yaml`
- `examples/openai-codex-sdk/skills/promptfooconfig.yaml`
- `examples/openai-codex-sdk/skills/sample-codex-home/.gitignore`
- `examples/openai-codex-sdk/skills/sample-codex-home/.gitkeep`
- `examples/openai-codex-sdk/skills/sample-project/.agents/skills/token-skill/SKILL.md`
- `helm/chart/promptfoo/templates/_helpers.tpl`
- `helm/chart/promptfoo/templates/deployment.yaml`
- `helm/chart/promptfoo/templates/hpa.yaml`
- `helm/chart/promptfoo/templates/ingress.yaml`
- `helm/chart/promptfoo/templates/pvc.yaml`
- `helm/chart/promptfoo/templates/service.yaml`
- `helm/chart/promptfoo/templates/serviceaccount.yaml`
- `helm/chart/promptfoo/templates/tests/test-connection.yaml`
- `plugins/promptfoo/skills/promptfoo-evals/SKILL.md`
- `plugins/promptfoo/skills/promptfoo-evals/agents/openai.yaml`
- `plugins/promptfoo/skills/promptfoo-evals/references/eval-patterns.md`
- `plugins/promptfoo/skills/promptfoo-provider-setup/SKILL.md`
- `plugins/promptfoo/skills/promptfoo-provider-setup/agents/openai.yaml`
- `plugins/promptfoo/skills/promptfoo-provider-setup/references/provider-patterns.md`
- `plugins/promptfoo/skills/promptfoo-provider-setup/scripts/openapi-operation-to-config.mjs`
- `plugins/promptfoo/skills/promptfoo-redteam-run/SKILL.md`
- `plugins/promptfoo/skills/promptfoo-redteam-run/agents/openai.yaml`
- `plugins/promptfoo/skills/promptfoo-redteam-run/references/redteam-run-patterns.md`
- `plugins/promptfoo/skills/promptfoo-redteam-setup/SKILL.md`
- `plugins/promptfoo/skills/promptfoo-redteam-setup/agents/openai.yaml`
- `plugins/promptfoo/skills/promptfoo-redteam-setup/references/redteam-setup-patterns.md`
- `plugins/promptfoo/skills/promptfoo-redteam-setup/scripts/openapi-operation-to-redteam-config.mjs`
- `src/codeScan/commands/run.ts`
- `src/commands/AGENTS.md`
- `src/commands/CLAUDE.md`
- `src/commands/auth.ts`
- `src/commands/cache.ts`
- `src/commands/config.ts`
- `src/commands/debug.ts`
- `src/commands/delete.ts`
- `src/commands/eval.ts`
- `src/commands/evalSetup.ts`
- `src/commands/exampleAliases.ts`
- `src/commands/export.ts`
- `src/commands/feedback.ts`
- `src/commands/generate/assertions.ts`
- `src/commands/generate/dataset.ts`
- `src/commands/import.ts`
- `src/commands/init.ts`
- `src/commands/list.ts`
- `src/commands/logs.ts`
- `src/commands/mcp/index.ts`
- `src/commands/mcp/lib/errors.ts`
- `src/commands/mcp/lib/performance.ts`
- `src/commands/mcp/lib/resultFormatter.ts`
- `src/commands/mcp/lib/security.ts`
- `src/commands/mcp/lib/toolRegistry.ts`
- `src/commands/mcp/lib/types.ts`
- `src/commands/mcp/lib/utils.ts`
- `src/commands/mcp/resources.ts`
- `src/commands/mcp/server.ts`
- `src/commands/mcp/tools/compareProviders.ts`
- `src/commands/mcp/tools/generateDataset.ts`
- `src/commands/mcp/tools/generateTestCases.ts`
- `src/commands/mcp/tools/getEvaluationDetails.ts`
- `src/commands/mcp/tools/listEvaluations.ts`
- `src/commands/mcp/tools/logs.ts`
- `src/commands/mcp/tools/redteamGenerate.ts`
- `src/commands/mcp/tools/redteamRun.ts`
- `src/commands/mcp/tools/runAssertion.ts`
- `src/commands/mcp/tools/runEvaluation.ts`
- `src/commands/mcp/tools/shareEvaluation.ts`
- `src/commands/mcp/tools/testProvider.ts`
- `src/commands/mcp/tools/validatePromptfooConfig.ts`
- `src/commands/mcp/types.ts`
- `src/commands/modelScan.ts`
- `src/commands/optimize.ts`
- `src/commands/redteam/init.ts`
- `src/commands/redteam/report.ts`
- `src/commands/redteam/setup.ts`
- `src/commands/retry.ts`
- `src/commands/share.ts`
- `src/commands/show.ts`
- `src/commands/validate.ts`
- `src/commands/view.ts`
- `src/redteam/commands/discover.ts`
- `src/redteam/commands/generate.ts`
- ... 40 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `examples/config-separate-test-configs/tests/tests1.yaml`
- `examples/config-separate-test-configs/tests/tests2.yaml`
- `examples/integration-jest/index.test.ts`
- `helm/chart/promptfoo/templates/tests/test-connection.yaml`
- `site/src/components/Store/ProductCard.test.tsx`
- `site/src/components/Store/StoreErrorBoundary.test.tsx`
- `site/src/components/Store/useFourthwall.test.ts`
- `site/src/gdpr/consent.test.ts`
- `site/src/gdpr/middleware.test.ts`
- `site/src/test/docusaurusComponentStub.tsx`
- `site/src/test/docusaurusRuntimeStub.tsx`
- `site/src/test/trailingSlash.test.ts`
- `site/src/test/useIsBrowserStub.ts`
- `src/app/src/App.test.tsx`
- `src/app/src/__benchmarks__/reactCompiler.test.tsx`
- `src/app/src/circularDependencies.test.ts`
- `src/app/src/components/ApiSettingsModal.test.tsx`
- `src/app/src/components/EnterpriseBanner.test.tsx`
- `src/app/src/components/ErrorBoundary.test.tsx`
- `src/app/src/components/InfoModal.test.tsx`
- `src/app/src/components/JsonTextField.test.tsx`
- `src/app/src/components/Navigation.test.tsx`
- `src/app/src/components/PageShell.test.tsx`
- `src/app/src/components/PostHogPageViewTracker.test.tsx`
- `src/app/src/components/PostHogProvider.test.tsx`
- `src/app/src/components/PylonChat.test.tsx`
- `src/app/src/components/ThemeSelector.test.tsx`
- `src/app/src/components/UpdateBanner.test.tsx`
- `src/app/src/components/data-table/data-table-filter.test.tsx`
- `src/app/src/components/data-table/data-table-multi-filter.test.tsx`
- `src/app/src/components/data-table/data-table.test.tsx`
- `src/app/src/components/data-table/use-server-sorting.test.tsx`
- `src/app/src/components/data-table/use-server-virtualized-rows.test.tsx`
- `src/app/src/components/traces/TraceTimeline.test.tsx`
- `src/app/src/components/traces/TraceView.test.tsx`
- `src/app/src/components/ui/alert.test.tsx`
- `src/app/src/components/ui/badge.test.tsx`
- `src/app/src/components/ui/breadcrumb.test.tsx`
- `src/app/src/components/ui/button.test.tsx`
- `src/app/src/components/ui/card.test.tsx`
- `src/app/src/components/ui/checkbox.test.tsx`
- `src/app/src/components/ui/code-editor.test.tsx`
- `src/app/src/components/ui/collapsible.test.tsx`
- `src/app/src/components/ui/combobox.test.tsx`
- `src/app/src/components/ui/copy-button.test.tsx`
- `src/app/src/components/ui/dialog.test.tsx`
- `src/app/src/components/ui/dropdown-menu.test.tsx`
- `src/app/src/components/ui/input.test.tsx`
- `src/app/src/components/ui/json-textarea.test.tsx`
- `src/app/src/components/ui/label.test.tsx`
- `src/app/src/components/ui/navigation-menu.test.tsx`
- `src/app/src/components/ui/number-input.test.tsx`
- `src/app/src/components/ui/popover.test.tsx`
- `src/app/src/components/ui/progress.test.tsx`
- `src/app/src/components/ui/select.test.tsx`
- `src/app/src/components/ui/separator.test.tsx`
- `src/app/src/components/ui/skeleton.test.tsx`
- `src/app/src/components/ui/spinner.test.tsx`
- `src/app/src/components/ui/switch.test.tsx`
- `src/app/src/components/ui/tabs.test.tsx`
- `src/app/src/components/ui/tag-input.test.tsx`
- `src/app/src/components/ui/textarea.test.tsx`
- `src/app/src/components/ui/tooltip.test.tsx`
- `src/app/src/contexts/EvalHistoryContext.test.tsx`
- `src/app/src/contexts/UserContext.test.tsx`
- `src/app/src/hooks/useApiHealth.test.tsx`
- `src/app/src/hooks/useCloudConfig.test.ts`
- `src/app/src/hooks/useCustomPoliciesMap.test.ts`
- `src/app/src/hooks/useDownloadEval.test.ts`
- `src/app/src/hooks/useEmailVerification.test.ts`
- `src/app/src/hooks/useEvalOperations.test.ts`
- `src/app/src/hooks/useIsPrinting.spec.ts`
- `src/app/src/hooks/usePageMeta.test.ts`
- `src/app/src/hooks/useShiftKey.test.tsx`
- `src/app/src/hooks/useTelemetry.test.tsx`
- `src/app/src/hooks/useToast.test.tsx`
- `src/app/src/hooks/useVersionCheck.test.ts`
- `src/app/src/lib/prism.test.ts`
- `src/app/src/pages/NotFoundPage.test.tsx`
- `src/app/src/pages/datasets/DatasetDialog.test.tsx`
- ... 40 more

### CI/Docker 후보

- `.devcontainer/docker-compose.yml`
- `.github/workflows/deploy-launcher.yml`
- `.github/workflows/docker.yml`
- `.github/workflows/image-actions.yml`
- `.github/workflows/main.yml`
- `.github/workflows/promptfoo-code-scan.yml`
- `.github/workflows/release-please-format.yml`
- `.github/workflows/release-please-sha-drift.yml`
- `.github/workflows/release-please.yml`
- `.github/workflows/tusk-test-runner-app-vitest-unit-tests.yml`
- `.github/workflows/tusk-test-runner-vitest-unit-tests.yml`
- `.github/workflows/validate-pr-title.yml`
- `.github/workflows/validate-renovate-config.yml`
- `Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 1950 |
| .md | 833 |
| .tsx | 631 |
| .yaml | 625 |
| .png | 367 |
| .json | 166 |
| .jpg | 109 |
| .js | 106 |
| .py | 103 |
| .svg | 89 |
| .txt | 85 |
| .css | 75 |
| .mjs | 31 |
| .sql | 26 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `test/ 내부 책임 분리`
- `tools/ 내부 책임 분리`
- `.agents/skills/redteam-plugin-development/SKILL.md 스펙/명령 의미`
- `.agents/skills/search-params/SKILL.md 스펙/명령 의미`
- `.claude/skills/promptfoo-evals/SKILL.md 스펙/명령 의미`
- `.claude/skills/promptfoo-evals/references/cheatsheet.md 스펙/명령 의미`
- `.claude/skills/redteam-plugin-development/SKILL.md 스펙/명령 의미`
- `.devcontainer/docker-compose.yml 실행 스크립트와 패키지 경계`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `code-scan-action/package.json 실행 스크립트와 패키지 경계`
- `code-scan-action/tsconfig.json 실행 스크립트와 패키지 경계`
- `examples/claude-agent-sdk/advanced/workspace/package.json 실행 스크립트와 패키지 경계`

