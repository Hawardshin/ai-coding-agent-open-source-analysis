# ComposioHQ/composio 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/ComposioHQ__composio |
| remote | https://github.com/ComposioHQ/composio |
| HEAD | 094aed6 (2026-06-09) rename scoped API key reference (#3534) |
| branch | next |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 2244 |
| dirs | 565 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Composio SDK`, `Getting Started`, `TypeScript SDK Installation`, `Using npm`, `Using yarn`, `Using pnpm`, `Python SDK Installation`, `Using pip`, `Using poetry`, `Initialize Composio client with OpenAI Agents Provider`, `Create an agent with the tools`, `Run the agent`, `will return the response from the agent with data from HACKERNEWS API.`, `Open API Specification`, `Pull the latest API specifications from the backend`, `Available SDKs`, `TypeScript SDK (/ts)`, `Python SDK (/python)`

> <div align="center" <img src="https //raw.githubusercontent.com/ComposioHQ/composio/next/public/cover.png" alt="Composio Logo" width="auto" height="auto" style="margin bottom 20px;"/ Composio SDK Skills that evolve for your Agents 🌐 Website • 📚 Documentation </div This repository contains the official Software Development Kits (SDKs) for Composio, providing seamless integration capabilities for Python and Typescript Agentic Frameworks and Libraries. Getting Started TypeScript SDK Installation Quick start Simple Agent with OpenAI Agents Python SDK Installation Quick start Simple Agent with OpenAI Agents For more detailed usage instructions and examples, please refer to each SDK's specific documentation. Open API Specification To update the OpenAPI specifications used for generating SDK documentation This command pulls the OpenAPI specification from https //backend.composio.dev/api/v3/op

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .bun-version | file |
| .changeset | dir |
| .claude | dir |
| .codex | file |
| .dockerignore | file |
| .dvmrc | file |
| .github | dir |
| .gitignore | file |
| .gitleaks.toml | file |
| .gitleaksignore | file |
| .gitmodules | file |
| .husky | dir |
| .nvmrc | file |
| .pnpmfile.cjs | file |
| .prettierrc | file |
| .python-version | file |
| AGENTS.md | file |
| CLAUDE.md | file |
| context7.json | file |
| CONTRIBUTING.md | file |
| Dockerfile | file |
| docs | dir |
| eslint.config.mjs | file |
| INSTALL.md | file |
| install.sh | file |
| LICENSE | file |
| mise.toml | file |
| node_modules | dir |
| package.json | file |
| plans | dir |
| pnpm-lock.yaml | file |
| pnpm-workspace.yaml | file |
| public | dir |
| pyproject.toml | file |
| python | dir |
| README.md | file |
| test | dir |
| test-exports.ts | file |
| ts | dir |
| tsconfig.base.json | file |
| tsdown.config.base.ts | file |
| turbo.jsonc | file |
| uv.lock | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| ts/ | 1314 |
| docs/ | 571 |
| python/ | 229 |
| .github/ | 40 |
| (root) | 32 |
| .claude/ | 26 |
| .agents/ | 19 |
| .changeset/ | 7 |
| plans/ | 2 |
| public/ | 2 |
| .husky/ | 1 |
| test/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 571 | preferred |
| test/ | 1 | preferred |
| ts/ | 1314 | large |
| ts/packages/ | 992 | large |
| ts/packages/cli/ | 573 | large |
| docs/content/ | 299 | large |
| python/ | 229 | large |
| ts/packages/core/ | 168 | large |
| ts/examples/ | 159 | large |
| ts/e2e-tests/ | 127 | large |
| docs/public/ | 92 | large |
| ts/e2e-tests/runtimes/ | 92 | large |
| docs/content/docs/ | 90 | large |
| python/providers/ | 89 | large |
| docs/content/reference/ | 78 | large |
| ts/packages/providers/ | 77 | large |
| ts/packages/ts-builders/ | 73 | large |
| docs/public/images/ | 69 | large |
| docs/content/changelog/ | 68 | large |
| docs/components/ | 63 | large |
| python/composio/ | 55 | large |
| docs/content/toolkits/ | 48 | large |
| .github/ | 40 | large |
| python/tests/ | 40 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `docs/bun.lock`
- `docs/package.json`
- `docs/tsconfig.json`
- `package.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `pyproject.toml`
- `python/providers/anthropic/pyproject.toml`
- `python/providers/autogen/pyproject.toml`
- `python/providers/claude_agent_sdk/pyproject.toml`
- `python/providers/claude_agent_sdk/uv.lock`
- `python/providers/crewai/pyproject.toml`
- `python/providers/gemini/pyproject.toml`
- `python/providers/google/pyproject.toml`
- `python/providers/google_adk/pyproject.toml`
- `python/providers/langchain/pyproject.toml`
- `python/providers/langgraph/pyproject.toml`
- `python/providers/llamaindex/pyproject.toml`
- `python/providers/openai/pyproject.toml`
- `python/providers/openai/uv.lock`
- `python/providers/openai_agents/pyproject.toml`
- `python/pyproject.toml`
- `ts/e2e-tests/_utils/package.json`
- `ts/e2e-tests/_utils/tsconfig.json`
- `ts/e2e-tests/cli/toolkits/info/package.json`
- `ts/e2e-tests/cli/toolkits/list/package.json`
- `ts/e2e-tests/cli/toolkits/search/package.json`
- `ts/e2e-tests/cli/version/package.json`
- `ts/e2e-tests/cli/whoami/package.json`
- `ts/e2e-tests/runtimes/cloudflare/cf-workers-basic/package.json`
- `ts/e2e-tests/runtimes/cloudflare/cf-workers-basic/tsconfig.json`
- `ts/e2e-tests/runtimes/cloudflare/cf-workers-files/package.json`
- `ts/e2e-tests/runtimes/cloudflare/cf-workers-files/tsconfig.json`
- `ts/e2e-tests/runtimes/cloudflare/cf-workers-tool-router-ai/package.json`
- `ts/e2e-tests/runtimes/cloudflare/cf-workers-tool-router-ai/tsconfig.json`
- `ts/e2e-tests/runtimes/deno/esm-basic/fixtures/deno.jsonc`
- `ts/e2e-tests/runtimes/deno/esm-basic/package.json`
- `ts/e2e-tests/runtimes/deno/esm-basic/tsconfig.json`
- `ts/e2e-tests/runtimes/node/cjs-basic/package.json`
- `ts/e2e-tests/runtimes/node/cjs-basic/tsconfig.json`
- `ts/e2e-tests/runtimes/node/custom-tools/package.json`
- `ts/e2e-tests/runtimes/node/esm-basic/package.json`
- `ts/e2e-tests/runtimes/node/esm-basic/tsconfig.json`
- `ts/e2e-tests/runtimes/node/file-roundtrip/package.json`
- `ts/e2e-tests/runtimes/node/file-roundtrip/tsconfig.json`
- `ts/e2e-tests/runtimes/node/json-schema-to-zod-v3/package.json`
- `ts/e2e-tests/runtimes/node/json-schema-to-zod-v3/tsconfig.json`
- `ts/e2e-tests/runtimes/node/json-schema-to-zod-v4/package.json`
- `ts/e2e-tests/runtimes/node/json-schema-to-zod-v4/tsconfig.json`
- `ts/e2e-tests/runtimes/node/mastra-tool-router-zod-v3/package.json`
- `ts/e2e-tests/runtimes/node/mastra-tool-router-zod-v3/tsconfig.json`
- `ts/e2e-tests/runtimes/node/mastra-tool-router-zod-v4/package.json`
- `ts/e2e-tests/runtimes/node/mastra-tool-router-zod-v4/tsconfig.json`
- `ts/e2e-tests/runtimes/node/openai-zod4-compat/fixtures/package.json`
- `ts/e2e-tests/runtimes/node/openai-zod4-compat/package.json`
- `ts/e2e-tests/runtimes/node/openai-zod4-compat/tsconfig.json`
- `ts/e2e-tests/runtimes/node/tool-router-files/package.json`
- `ts/e2e-tests/runtimes/node/tool-router-files/tsconfig.json`
- `ts/e2e-tests/runtimes/node/tool-router-pagination/package.json`
- `ts/e2e-tests/runtimes/node/tool-router-pagination/tsconfig.json`
- `ts/e2e-tests/runtimes/node/typescript-mjs-import-nodenext/fixtures/tsconfig.json`
- `ts/e2e-tests/runtimes/node/typescript-mjs-import-nodenext/package.json`
- `ts/e2e-tests/runtimes/node/typescript-mjs-import-nodenext/tsconfig.json`
- `ts/examples/anthropic/package.json`
- `ts/examples/anthropic/tsconfig.json`
- `ts/examples/cjs/package.json`
- `ts/examples/cjs/tsconfig.json`
- `ts/examples/cloudflare-wrangler/package.json`
- `ts/examples/cloudflare-wrangler/test/tsconfig.json`
- `ts/examples/cloudflare-wrangler/tsconfig.json`
- `ts/examples/connected-accounts/package.json`
- `ts/examples/connected-accounts/tsconfig.json`
- `ts/examples/error-handling-demo/package.json`
- `ts/examples/error-handling-demo/tsconfig.json`
- `ts/examples/file-handling/package.json`
- `ts/examples/file-handling/tsconfig.json`
- `ts/examples/google/package.json`
- `ts/examples/google/tsconfig.json`
- `ts/examples/json-schema-to-zod/package.json`
- ... 20 more

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| docs/package.json | @composio/docs | build, dev, start, types:check, postinstall, lint, lint:links, sync:search, test:search, generate:toolkits, generate:meta-tools, generate:api-index, test, test:integration | @radix-ui/react-tabs, @shikijs/twoslash, @vercel/analytics, algoliasearch, class-variance-authority, clsx, framer-motion, fumadocs-core, fumadocs-mdx, fumadocs-openapi, fumadocs-ui, lucide-react, mermaid, next |
| package.json | composio | build, build:binary, build:binary:all, build:binary:checksums, install:binary, build:packages, cli:record, record, test, test:install-sh, test:examples, test:e2e, test:e2e:node, test:e2e:deno, test:e2e:cli, test:e2e:cloudflare |  |
| ts/e2e-tests/_utils/package.json | @e2e-tests/utils | docker:build, docker:clean, typecheck |  |
| ts/e2e-tests/cli/toolkits/info/package.json | @e2e-tests/cli-toolkits-info | typecheck, test:e2e, test:e2e:cli |  |
| ts/e2e-tests/cli/toolkits/list/package.json | @e2e-tests/cli-toolkits-list | typecheck, test:e2e, test:e2e:cli |  |
| ts/e2e-tests/cli/toolkits/search/package.json | @e2e-tests/cli-toolkits-search | typecheck, test:e2e, test:e2e:cli |  |
| ts/e2e-tests/cli/version/package.json | @e2e-tests/cli-version | typecheck, test:e2e, test:e2e:cli |  |
| ts/e2e-tests/cli/whoami/package.json | @e2e-tests/cli-whoami | typecheck, test:e2e, test:e2e:cli |  |
| ts/e2e-tests/runtimes/cloudflare/cf-workers-basic/package.json | @e2e-tests/cf-workers-basic | test:e2e, test:e2e:cloudflare, dev, cf-typegen | @composio/core, hono, openai |
| ts/e2e-tests/runtimes/cloudflare/cf-workers-files/package.json | @e2e-tests/cf-workers-files | test:e2e, test:e2e:cloudflare, dev, cf-typegen | @composio/core, hono |
| ts/e2e-tests/runtimes/cloudflare/cf-workers-tool-router-ai/package.json | @e2e-tests/cf-workers-tool-router-ai | test:e2e, test:e2e:cloudflare, dev, cf-typegen | @ai-sdk/mcp, @ai-sdk/openai, @composio/core, @composio/vercel, ai, hono |
| ts/e2e-tests/runtimes/deno/esm-basic/package.json | @e2e-tests/deno-esm-basic | typecheck, test:e2e, test:e2e:deno |  |
| ts/e2e-tests/runtimes/node/cjs-basic/package.json | @e2e-tests/node-cjs-basic | typecheck, test:e2e, test:e2e:node |  |
| ts/e2e-tests/runtimes/node/custom-tools/package.json | @e2e-tests/node-custom-tools | typecheck, test:e2e, test:e2e:node | @composio/core, zod |
| ts/e2e-tests/runtimes/node/esm-basic/package.json | @e2e-tests/node-esm-basic | typecheck, test:e2e, test:e2e:node |  |
| ts/e2e-tests/runtimes/node/file-roundtrip/package.json | @e2e-tests/node-file-roundtrip | typecheck, test:e2e, test:e2e:node |  |
| ts/e2e-tests/runtimes/node/json-schema-to-zod-v3/package.json | @e2e-tests/node-json-schema-to-zod-v3 | typecheck, test:e2e, test:e2e:node | @composio/json-schema-to-zod, zod, zod-to-json-schema |
| ts/e2e-tests/runtimes/node/json-schema-to-zod-v4/package.json | @e2e-tests/node-json-schema-to-zod-v4 | typecheck, test:e2e, test:e2e:node | @composio/json-schema-to-zod, zod |
| ts/e2e-tests/runtimes/node/mastra-tool-router-zod-v3/package.json | @e2e-tests/node-mastra-tool-router-zod-v3 | typecheck, test:e2e, test:e2e:node | @ai-sdk/openai, @composio/core, @composio/mastra, @mastra/core, @mastra/mcp, ai, zod |
| ts/e2e-tests/runtimes/node/mastra-tool-router-zod-v4/package.json | @e2e-tests/node-mastra-tool-router-zod-v4 | typecheck, test:e2e, test:e2e:node | @ai-sdk/openai, @composio/core, @composio/mastra, @mastra/core, @mastra/mcp, ai, zod |
| ts/e2e-tests/runtimes/node/openai-zod4-compat/fixtures/package.json |  |  | @composio/core, openai, zod |
| ts/e2e-tests/runtimes/node/openai-zod4-compat/package.json | @e2e-tests/node-openai-zod4-compat | typecheck, test:e2e, test:e2e:node |  |
| ts/e2e-tests/runtimes/node/tool-router-files/package.json | @e2e-tests/node-tool-router-files | typecheck, test:e2e, test:e2e:node | @composio/core |
| ts/e2e-tests/runtimes/node/tool-router-pagination/package.json | @e2e-tests/node-tool-router-pagination | typecheck, test:e2e, test:e2e:node | @composio/core |
| ts/e2e-tests/runtimes/node/typescript-mjs-import-nodenext/package.json | @e2e-tests/node-typescript-mjs-import-nodenext | typecheck, test:e2e, test:e2e:node |  |
| ts/examples/anthropic/package.json | anthropic-example | clean, start, start:claude-agents-sdk, test | @anthropic-ai/sdk, @anthropic-ai/claude-agent-sdk, @composio/anthropic, @composio/claude-agent-sdk, @composio/core, @mastra/mcp, dotenv, zod, zod-to-json-schema |
| ts/examples/cjs/package.json | cjs-example | start | @composio/core, dotenv |
| ts/examples/cloudflare-wrangler/package.json | cloudflare-wrangler-example | deploy, dev, start, test, cf-typegen | @composio/core, hono, openai |
| ts/examples/connected-accounts/package.json | connected-accounts-example | clean, start, test | @composio/core, openai |
| ts/examples/error-handling-demo/package.json | error-handling-example | clean, start, test | @composio/core, dotenv |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml |  | false | true | false | false |
| python/providers/anthropic/pyproject.toml | composio-anthropic | false | false | false | false |
| python/providers/autogen/pyproject.toml | composio-autogen | false | false | false | false |
| python/providers/claude_agent_sdk/pyproject.toml | composio-claude-agent-sdk | false | false | false | false |
| python/providers/crewai/pyproject.toml | composio-crewai | false | false | false | false |
| python/providers/gemini/pyproject.toml | composio-gemini | false | false | false | false |
| python/providers/google/pyproject.toml | composio-google | false | false | false | false |
| python/providers/google_adk/pyproject.toml | composio-google-adk | false | false | false | false |
| python/providers/langchain/pyproject.toml | composio-langchain | false | false | false | false |
| python/providers/langgraph/pyproject.toml | composio-langgraph | false | false | false | false |
| python/providers/llamaindex/pyproject.toml | composio-llamaindex | false | false | false | false |
| python/providers/openai/pyproject.toml | composio-openai | false | false | false | false |
| python/providers/openai_agents/pyproject.toml | composio-openai-agents | false | false | false | false |
| python/pyproject.toml | composio | false | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.changeset/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `docs/.claude/agents/changelog-docs-updater.md`
- `docs/.claude/agents/connect-clients-sync.md`
- `docs/.claude/agents/docs-reviewer.md`
- `docs/.claude/context/api-reference.md`
- `docs/.claude/context/fumadocs.md`
- `docs/.claude/context/pipelines.md`
- `docs/.claude/context/sdk-reference.md`
- `docs/.claude/context/twoslash.md`
- `docs/.claude/decisions/examples.md`
- `docs/.claude/decisions/feedback.md`
- `docs/.claude/decisions/llm-guardrails.md`
- `docs/.claude/decisions/toolkits.md`
- `docs/.claude/guides/changelog.md`
- `docs/.claude/plan.md`
- `docs/.env.example`
- `docs/.gitignore`
- `docs/CLAUDE.md`
- `docs/README.md`
- `docs/app/(home)/cookbooks/[[...slug]]/page.tsx`
- `docs/app/(home)/cookbooks/layout.tsx`
- `docs/app/(home)/docs/[[...slug]]/page.tsx`
- `docs/app/(home)/docs/changelog/[...slug]/page.tsx`
- `docs/app/(home)/docs/changelog/page.tsx`
- `docs/app/(home)/docs/layout.tsx`
- `docs/app/(home)/layout.tsx`
- `docs/app/(home)/page.tsx`
- `docs/app/(home)/reference/(v31)/[[...slug]]/page.tsx`
- `docs/app/(home)/reference/(v31)/changelog/page.tsx`
- `docs/app/(home)/reference/(v31)/layout.tsx`
- `docs/app/(home)/reference/layout.tsx`
- `docs/app/(home)/reference/v3/[[...slug]]/page.tsx`
- `docs/app/(home)/reference/v3/layout.tsx`
- `docs/app/(home)/toolkits/[[...slug]]/page.tsx`
- `docs/app/(home)/toolkits/layout.tsx`
- `docs/app/api/feedback/route.ts`
- `docs/app/api/proxy/route.ts`
- `docs/app/api/search/route.ts`
- `docs/app/api/tools/[slug]/route.ts`
- `docs/app/apple-icon.png`
- `docs/app/error.tsx`
- `docs/app/fonts/Flecha Font.otf`
- `docs/app/fonts/Inter Font.ttf`
- `docs/app/global-error.tsx`
- `docs/app/global.css`
- `docs/app/icon.png`
- `docs/app/layout.tsx`
- `docs/app/llms-full.txt/route.ts`
- ... 30 more

### 에이전트 지침 후보

- `.agents/skills/bug-fixing-guide/SKILL.md`
- `.agents/skills/building-agents-using-anthropic/SKILL.md`
- `.agents/skills/building-agents-using-autogen/SKILL.md`
- `.agents/skills/building-agents-using-cloudflare/SKILL.md`
- `.agents/skills/building-agents-using-crewai/SKILL.md`
- `.agents/skills/building-agents-using-google/SKILL.md`
- `.agents/skills/building-agents-using-langchain/SKILL.md`
- `.agents/skills/building-agents-using-langgraph/SKILL.md`
- `.agents/skills/building-agents-using-llamaindex/SKILL.md`
- `.agents/skills/building-agents-using-mastra/SKILL.md`
- `.agents/skills/building-agents-using-openai/SKILL.md`
- `.agents/skills/building-agents-using-vercel/SKILL.md`
- `.agents/skills/building-agents/SKILL.md`
- `.agents/skills/cli-release-promotion/SKILL.md`
- `.agents/skills/create-cli-e2e/SKILL.md`
- `.agents/skills/create-cli/SKILL.md`
- `.agents/skills/ephemeral-e2e-sdk-tests/SKILL.md`
- `.agents/skills/implement-cli-command/SKILL.md`
- `.agents/skills/test-sdk-in-realworld/SKILL.md`
- `.changeset/fix-mcp-empty-output-parameters.md`
- `.claude/commands/api-update.md`
- `.claude/commands/changelog.md`
- `.claude/rules/bug-fix-testing.mdc`
- `.claude/scheduled_tasks.lock`
- `.claude/skills/bug-fixing-guide/SKILL.md`
- `.claude/skills/building-agents-using-anthropic/SKILL.md`
- `.claude/skills/building-agents-using-autogen/SKILL.md`
- `.claude/skills/building-agents-using-cloudflare/SKILL.md`
- `.claude/skills/building-agents-using-crewai/SKILL.md`
- `.claude/skills/building-agents-using-google/SKILL.md`
- `.claude/skills/building-agents-using-langchain/SKILL.md`
- `.claude/skills/building-agents-using-langgraph/SKILL.md`
- `.claude/skills/building-agents-using-llamaindex/SKILL.md`
- `.claude/skills/building-agents-using-mastra/SKILL.md`
- `.claude/skills/building-agents-using-openai/SKILL.md`
- `.claude/skills/building-agents-using-vercel/SKILL.md`
- `.claude/skills/building-agents/SKILL.md`
- `.claude/skills/cli-release/SKILL.md`
- `.claude/skills/cli-test-with-bundling/SKILL.md`
- `.claude/skills/cli-test/SKILL.md`
- `.claude/skills/create-cli-e2e/SKILL.md`
- `.claude/skills/create-cli/SKILL.md`
- `.claude/skills/ephemeral-e2e-sdk-tests/SKILL.md`
- `.claude/skills/full-cli-test/SKILL.md`
- `.claude/skills/implement-cli-command/SKILL.md`
- `.claude/skills/test-sdk-in-realworld/SKILL.md`
- `AGENTS.md`
- `CLAUDE.md`
- `docs/.claude/agents/changelog-docs-updater.md`
- `docs/.claude/agents/connect-clients-sync.md`
- `docs/.claude/agents/docs-reviewer.md`
- `docs/.claude/context/api-reference.md`
- `docs/.claude/context/fumadocs.md`
- `docs/.claude/context/pipelines.md`
- `docs/.claude/context/sdk-reference.md`
- `docs/.claude/context/twoslash.md`
- `docs/.claude/decisions/examples.md`
- `docs/.claude/decisions/feedback.md`
- `docs/.claude/decisions/llm-guardrails.md`
- `docs/.claude/decisions/toolkits.md`
- `docs/.claude/guides/changelog.md`
- `docs/.claude/plan.md`
- `docs/CLAUDE.md`
- `docs/content/changelog/01-08-26-mcp-api-key-enforcement.mdx`
- `docs/content/changelog/03-04-26-mcp-api-key-default-new-orgs.mdx`
- `docs/content/changelog/03-25-26-mcp-endpoint-removed.mdx`
- `docs/content/docs/native-tools-vs-mcp.mdx`
- `docs/content/docs/single-toolkit-mcp.mdx`
- `docs/content/docs/troubleshooting/mcp.mdx`
- `docs/content/reference/api-reference/mcp/index.mdx`
- `docs/content/reference/sdk-reference/python/mcp.mdx`
- `docs/content/reference/sdk-reference/typescript/mcp.mdx`
- `docs/content/reference/v3/api-reference/mcp/index.mdx`
- `docs/public/assets/images/mcp-api-key-toggle.png`
- `docs/public/images/clients/mcp-dark.svg`
- `docs/public/images/clients/mcp.svg`
- `docs/public/images/mcp-logo-dark.svg`
- `docs/public/images/mcp-logo.svg`
- `docs/public/images/troubleshooting/troubleshooting-mcp-connected-account-id.png`
- `docs/public/images/troubleshooting/troubleshooting-mcp-server-url.png`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `.agents/skills/bug-fixing-guide/SKILL.md`
- `.agents/skills/building-agents-using-anthropic/SKILL.md`
- `.agents/skills/building-agents-using-autogen/SKILL.md`
- `.agents/skills/building-agents-using-cloudflare/SKILL.md`
- `.agents/skills/building-agents-using-crewai/SKILL.md`
- `.agents/skills/building-agents-using-google/SKILL.md`
- `.agents/skills/building-agents-using-langchain/SKILL.md`
- `.agents/skills/building-agents-using-langgraph/SKILL.md`
- `.agents/skills/building-agents-using-llamaindex/SKILL.md`
- `.agents/skills/building-agents-using-mastra/SKILL.md`
- `.agents/skills/building-agents-using-openai/SKILL.md`
- `.agents/skills/building-agents-using-vercel/SKILL.md`
- `.agents/skills/building-agents/SKILL.md`
- `.agents/skills/cli-release-promotion/SKILL.md`
- `.agents/skills/create-cli-e2e/SKILL.md`
- `.agents/skills/create-cli/SKILL.md`
- `.agents/skills/ephemeral-e2e-sdk-tests/SKILL.md`
- `.agents/skills/implement-cli-command/SKILL.md`
- `.agents/skills/test-sdk-in-realworld/SKILL.md`
- `.claude/commands/api-update.md`
- `.claude/commands/changelog.md`
- `.claude/skills/bug-fixing-guide/SKILL.md`
- `.claude/skills/building-agents-using-anthropic/SKILL.md`
- `.claude/skills/building-agents-using-autogen/SKILL.md`
- `.claude/skills/building-agents-using-cloudflare/SKILL.md`
- `.claude/skills/building-agents-using-crewai/SKILL.md`
- `.claude/skills/building-agents-using-google/SKILL.md`
- `.claude/skills/building-agents-using-langchain/SKILL.md`
- `.claude/skills/building-agents-using-langgraph/SKILL.md`
- `.claude/skills/building-agents-using-llamaindex/SKILL.md`
- `.claude/skills/building-agents-using-mastra/SKILL.md`
- `.claude/skills/building-agents-using-openai/SKILL.md`
- `.claude/skills/building-agents-using-vercel/SKILL.md`
- `.claude/skills/building-agents/SKILL.md`
- `.claude/skills/cli-release/SKILL.md`
- `.claude/skills/cli-test-with-bundling/SKILL.md`
- `.claude/skills/cli-test/SKILL.md`
- `.claude/skills/create-cli-e2e/SKILL.md`
- `.claude/skills/create-cli/SKILL.md`
- `.claude/skills/ephemeral-e2e-sdk-tests/SKILL.md`
- `.claude/skills/full-cli-test/SKILL.md`
- `.claude/skills/implement-cli-command/SKILL.md`
- `.claude/skills/test-sdk-in-realworld/SKILL.md`
- `docs/content/toolkits/faq/googletasks.md`
- `docs/public/images/templates/data-analyst-agent.gif`
- `docs/public/images/templates/open-chatgpt-atlas.gif`
- `docs/public/images/templates/open-gamma.mp4`
- `docs/public/images/templates/trustclaw.mp4`
- `ts/packages/cli/src/commands/$default.cmd.ts`
- `ts/packages/cli/src/commands/agent/agent.cmd.ts`
- `ts/packages/cli/src/commands/agent/commands/agent.claim.cmd.ts`
- `ts/packages/cli/src/commands/agent/commands/agent.inbox.cmd.ts`
- `ts/packages/cli/src/commands/agent/commands/agent.login.cmd.ts`
- `ts/packages/cli/src/commands/agent/commands/agent.signup.cmd.ts`
- `ts/packages/cli/src/commands/agent/commands/agent.whoami.cmd.ts`
- `ts/packages/cli/src/commands/artifacts.cmd.ts`
- `ts/packages/cli/src/commands/auth-configs/auth-configs.cmd.ts`
- `ts/packages/cli/src/commands/auth-configs/commands/auth-configs.create.cmd.ts`
- `ts/packages/cli/src/commands/auth-configs/commands/auth-configs.info.cmd.ts`
- `ts/packages/cli/src/commands/auth-configs/commands/auth-configs.list.cmd.ts`
- `ts/packages/cli/src/commands/auth-configs/format.ts`
- `ts/packages/cli/src/commands/config/config.cmd.ts`
- `ts/packages/cli/src/commands/config/config.experimental.cmd.ts`
- `ts/packages/cli/src/commands/connected-accounts/commands/connected-accounts.info.cmd.ts`
- `ts/packages/cli/src/commands/connected-accounts/commands/connected-accounts.link.cmd.ts`
- `ts/packages/cli/src/commands/connected-accounts/commands/connected-accounts.list.cmd.ts`
- `ts/packages/cli/src/commands/connected-accounts/commands/connected-accounts.whoami.cmd.ts`
- `ts/packages/cli/src/commands/connected-accounts/connected-accounts.cmd.ts`
- `ts/packages/cli/src/commands/connected-accounts/format.ts`
- `ts/packages/cli/src/commands/connections/commands/connections.list.cmd.ts`
- `ts/packages/cli/src/commands/connections/commands/connections.remove.cmd.ts`
- `ts/packages/cli/src/commands/connections/connections.cmd.ts`
- `ts/packages/cli/src/commands/dev.cmd.ts`
- `ts/packages/cli/src/commands/dev/dev.native-ui.cmd.ts`
- `ts/packages/cli/src/commands/feature-tags.ts`
- `ts/packages/cli/src/commands/generate/generate.cmd.ts`
- `ts/packages/cli/src/commands/generate/generate.py.cmd.ts`
- `ts/packages/cli/src/commands/generate/generate.ts.cmd.ts`
- `ts/packages/cli/src/commands/index.ts`
- `ts/packages/cli/src/commands/init.cmd.ts`
- `ts/packages/cli/src/commands/install.cmd.ts`
- `ts/packages/cli/src/commands/listen.cmd.ts`
- `ts/packages/cli/src/commands/local-tools/commands/local-tools.configure.cmd.ts`
- `ts/packages/cli/src/commands/local-tools/commands/local-tools.doctor.cmd.ts`
- `ts/packages/cli/src/commands/local-tools/commands/local-tools.list.cmd.ts`
- `ts/packages/cli/src/commands/local-tools/commands/local-tools.meta.cmd.ts`
- `ts/packages/cli/src/commands/local-tools/local-tools.cmd.ts`
- `ts/packages/cli/src/commands/login.cmd.ts`
- `ts/packages/cli/src/commands/logout.cmd.ts`
- `ts/packages/cli/src/commands/logs-cmd/commands/logs.tools.cmd.ts`
- `ts/packages/cli/src/commands/logs-cmd/commands/logs.triggers.cmd.ts`
- `ts/packages/cli/src/commands/logs-cmd/format.ts`
- `ts/packages/cli/src/commands/logs-cmd/logs.cmd.ts`
- `ts/packages/cli/src/commands/logs-cmd/utils.ts`
- `ts/packages/cli/src/commands/orgs/commands/orgs.list.cmd.ts`
- `ts/packages/cli/src/commands/orgs/commands/orgs.switch.cmd.ts`
- `ts/packages/cli/src/commands/orgs/orgs.cmd.ts`
- `ts/packages/cli/src/commands/projects/commands/projects.list.cmd.ts`
- `ts/packages/cli/src/commands/projects/commands/projects.switch.cmd.ts`
- `ts/packages/cli/src/commands/projects/projects.cmd.ts`
- ... 40 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `docs/tests/integration/helpers.ts`
- `docs/tests/integration/llm-endpoints.test.ts`
- `docs/tests/integration/redirects.test.ts`
- `docs/tests/integration/rendering.test.ts`
- `docs/tests/integration/search.test.ts`
- `docs/tests/static/content.test.ts`
- `docs/tests/static/navigation.test.ts`
- `docs/tests/static/toolkit-data.test.ts`
- `python/providers/claude_agent_sdk/tests/__init__.py`
- `python/providers/claude_agent_sdk/tests/test_provider.py`
- `python/tests/__init__.py`
- `python/tests/conftest.py`
- `python/tests/fixtures/webhook/golden-signatures.json`
- `python/tests/fixtures/webhook/v1-github-push.json`
- `python/tests/fixtures/webhook/v2-github-push.json`
- `python/tests/fixtures/webhook/v3-github-push.json`
- `python/tests/test_auth_configs.py`
- `python/tests/test_auto_upload_download_files.py`
- `python/tests/test_connected_accounts.py`
- `python/tests/test_core_types.py`
- `python/tests/test_cross_sdk_compatibility.py`
- `python/tests/test_custom_tools.py`
- `python/tests/test_files.py`
- `python/tests/test_gemini_provider.py`
- `python/tests/test_imports.py`
- `python/tests/test_provider.py`
- `python/tests/test_schema_parser.py`
- `python/tests/test_sdk.py`
- `python/tests/test_sensitive_file_upload_paths.py`
- `python/tests/test_tool_execution.py`
- `python/tests/test_tool_router.py`
- `python/tests/test_tool_router_session_files.py`
- `python/tests/test_toolkit_version.py`
- `python/tests/test_triggers.py`
- `python/tests/test_type_inference.py`
- `python/tests/test_type_inference_anthropic.py`
- `python/tests/test_type_inference_autogen.py`
- `python/tests/test_type_inference_claude_agent_sdk.py`
- `python/tests/test_type_inference_crewai.py`
- `python/tests/test_type_inference_custom_provider.py`
- `python/tests/test_type_inference_gemini.py`
- `python/tests/test_type_inference_google.py`
- `python/tests/test_type_inference_google_adk.py`
- `python/tests/test_type_inference_langchain.py`
- `python/tests/test_type_inference_langgraph.py`
- `python/tests/test_type_inference_llamaindex.py`
- `python/tests/test_type_inference_openai_agents.py`
- `python/tests/test_upload_dir_allowlist.py`
- `python/tests/test_verify_webhook_integration.py`
- `python/tests/test_webhook_events.py`
- `test/install-sh-release-resolution.test.sh`
- `ts/e2e-tests/cli/toolkits/info/e2e.test.ts`
- `ts/e2e-tests/cli/toolkits/list/e2e.test.ts`
- `ts/e2e-tests/cli/toolkits/search/e2e.test.ts`
- `ts/e2e-tests/cli/version/e2e.test.ts`
- `ts/e2e-tests/cli/whoami/e2e.test.ts`
- `ts/e2e-tests/runtimes/cloudflare/cf-workers-basic/test/platform.spec.ts`
- `ts/e2e-tests/runtimes/cloudflare/cf-workers-files/test/files.spec.ts`
- `ts/e2e-tests/runtimes/cloudflare/cf-workers-tool-router-ai/test/tool-router-ai.spec.ts`
- `ts/e2e-tests/runtimes/deno/esm-basic/e2e.test.ts`
- `ts/e2e-tests/runtimes/node/cjs-basic/e2e.test.ts`
- `ts/e2e-tests/runtimes/node/custom-tools/e2e.test.ts`
- `ts/e2e-tests/runtimes/node/esm-basic/e2e.test.ts`
- `ts/e2e-tests/runtimes/node/file-roundtrip/e2e.test.ts`
- `ts/e2e-tests/runtimes/node/json-schema-to-zod-v3/e2e.test.ts`
- `ts/e2e-tests/runtimes/node/json-schema-to-zod-v4/e2e.test.ts`
- `ts/e2e-tests/runtimes/node/mastra-tool-router-zod-v3/e2e.test.ts`
- `ts/e2e-tests/runtimes/node/mastra-tool-router-zod-v4/e2e.test.ts`
- `ts/e2e-tests/runtimes/node/openai-zod4-compat/e2e.test.ts`
- `ts/e2e-tests/runtimes/node/tool-router-files/e2e.test.ts`
- `ts/e2e-tests/runtimes/node/tool-router-pagination/e2e.test.ts`
- `ts/e2e-tests/runtimes/node/typescript-mjs-import-nodenext/e2e.test.ts`
- `ts/examples/cloudflare-wrangler/test/env.d.ts`
- `ts/examples/cloudflare-wrangler/test/index.spec.ts`
- `ts/examples/cloudflare-wrangler/test/tsconfig.json`
- `ts/packages/cli-keyring/test/e2e.test.ts`
- `ts/packages/cli-keyring/test/entry.test.ts`
- `ts/packages/cli-keyring/test/errors.test.ts`
- `ts/packages/cli-keyring/test/ffi.test.ts`
- `ts/packages/cli-keyring/test/shared.test.ts`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/build-cli-binaries.yml`
- `.github/workflows/claude-code-doc-review.yml`
- `.github/workflows/claude.yml`
- `.github/workflows/cli.install-health-check.yml`
- `.github/workflows/cli.test-installation.yml`
- `.github/workflows/docs-check-links.yml`
- `.github/workflows/docs-search-sync.yml`
- `.github/workflows/docs-tests.yml`
- `.github/workflows/docs-typescript-check.yml`
- `.github/workflows/docs-update-data.yml`
- `.github/workflows/docs.changelog-notification.yml`
- `.github/workflows/docs.changelog-to-docs.yml`
- `.github/workflows/docs.health-check.yml`
- `.github/workflows/docs.sdk-change-sync.yml`
- `.github/workflows/docs.sync-connect-clients.yml`
- `.github/workflows/generate-sdk-docs.yml`
- `.github/workflows/issue-triage.yml`
- `.github/workflows/py.check.yaml`
- `.github/workflows/py.release.yml`
- `.github/workflows/py.test.yml`
- `.github/workflows/security.secrets-detection.yml`
- `.github/workflows/stale.yml`
- `.github/workflows/ts.audit.yml`
- `.github/workflows/ts.build.yml`
- `.github/workflows/ts.release.yml`
- `.github/workflows/ts.test-e2e.yml`
- `.github/workflows/ts.test.yml`
- `.github/workflows/ts.typecheck.yml`
- `Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 853 |
| .md | 252 |
| .mdx | 232 |
| .json | 198 |
| .py | 177 |
| .svg | 90 |
| .tsx | 84 |
| .tape | 50 |
| .ascii | 49 |
| .png | 37 |
| .yml | 35 |
| .example | 25 |
| .toml | 21 |
| .mjs | 18 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `test/ 내부 책임 분리`
- `ts/ 내부 책임 분리`
- `ts/packages/ 내부 책임 분리`
- `ts/packages/cli/ 내부 책임 분리`
- `.agents/skills/bug-fixing-guide/SKILL.md 스펙/명령 의미`
- `.agents/skills/building-agents-using-anthropic/SKILL.md 스펙/명령 의미`
- `.agents/skills/building-agents-using-autogen/SKILL.md 스펙/명령 의미`
- `.agents/skills/building-agents-using-cloudflare/SKILL.md 스펙/명령 의미`
- `.agents/skills/building-agents-using-crewai/SKILL.md 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `docs/bun.lock 실행 스크립트와 패키지 경계`
- `docs/package.json 실행 스크립트와 패키지 경계`
- `docs/tsconfig.json 실행 스크립트와 패키지 경계`
- `package.json 실행 스크립트와 패키지 경계`

