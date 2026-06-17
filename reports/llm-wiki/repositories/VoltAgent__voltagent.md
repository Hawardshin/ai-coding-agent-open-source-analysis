# VoltAgent/voltagent 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/VoltAgent__voltagent |
| remote | https://github.com/VoltAgent/voltagent |
| HEAD | 1e1af65 (2026-06-08) ci(changesets): version packages (#1340) |
| branch | main |
| groups | llm-wiki-100 |
| files | 2871 |
| dirs | 855 |
| stack | Node/TypeScript/JavaScript, Go |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `⚡ Quick Start`, `Running Your First Workflow`, `Examples`, `Observability & Tracing`, `Dashboard`, `Logs`, `Memory Management`, `Traces`, `Prompt Builder`, `Deployment`, `Triggers & Actions`, `Monitoring`, `Guardrails`, `Evals`, `RAG (Knowledge Base)`, `Learning VoltAgent`, `Contribution`, `Contributor ♥️ Thanks`

> <div align="center" <a href="https //voltagent.dev/" <img width="1500" height="276" alt="voltagent" src="https //github.com/user attachments/assets/d9ad69bd b905 42a3 81af 99a0581348c0" / </a <h3 align="center" AI Agent Engineering Platform </h3 <div align="center" English <a href="i18n/README cn traditional.md" 繁體中文</a <a href="i18n/README cn bsc.md" 简体中文</a <a href="i18n/README jp.md" 日本語</a <a href="i18n/README kr.md" 한국어</a </div <br/ <div align="center" <a href="https //voltagent.dev" Home Page</a <a href="https //voltagent.dev/docs/" Documentation</a <a href="https //github.com/voltagent/voltagent/tree/main/examples" Examples</a </div </div <br/ <div align="center" </div <h3 align="center" ⭐ Like what we're doing? Give us a star ⬆️ </h3 VoltAgent is an end to end AI Agent Engineering Platform that consists of two main parts Open Source TypeScript Framework – Memory, RAG, Guardrails

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .changeset | dir |
| .cursor | dir |
| .devcontainer | dir |
| .github | dir |
| .gitignore | file |
| .husky | dir |
| .prettierignore | file |
| .prettierrc | file |
| .syncpackrc | file |
| AGENTS.md | file |
| announcements.json | file |
| archive | dir |
| biome.json | file |
| CHANGELOG.md | file |
| changelog.sh | file |
| CLAUDE.md | other |
| CODE_OF_CONDUCT.md | file |
| commitlint.config.js | file |
| CONSOLE.md | file |
| CONTRIBUTING.md | file |
| DESIGN.md | file |
| docs | dir |
| examples | dir |
| i18n | dir |
| jog.yaml | file |
| lerna.json | file |
| LICENCE | file |
| nx.json | file |
| package.json | file |
| packages | dir |
| pnpm-lock.yaml | file |
| pnpm-workspace.yaml | file |
| PRERELEASE.md | file |
| README.md | file |
| scripts | dir |
| SECURITY.md | file |
| syncpack.config.js | file |
| tools | dir |
| tsconfig.json | file |
| vitest.config.mts | file |
| vitest.workspace.ts | file |
| website | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| packages/ | 1016 |
| examples/ | 881 |
| website/ | 798 |
| archive/ | 73 |
| tools/ | 48 |
| (root) | 28 |
| .github/ | 9 |
| docs/ | 4 |
| i18n/ | 4 |
| .changeset/ | 3 |
| scripts/ | 3 |
| .husky/ | 2 |
| .cursor/ | 1 |
| .devcontainer/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| packages/ | 1016 | preferred |
| docs/ | 4 | preferred |
| examples/ | 881 | preferred |
| tools/ | 48 | preferred |
| scripts/ | 3 | preferred |
| website/ | 798 | large |
| packages/core/ | 346 | large |
| packages/core/src/ | 336 | large |
| website/src/ | 268 | large |
| website/static/ | 152 | large |
| website/static/img/ | 150 | large |
| website/src/components/ | 144 | large |
| website/docs/ | 129 | large |
| packages/server-hono/ | 106 | large |
| packages/server-hono/src/ | 100 | large |
| website/src/theme/ | 88 | large |
| website/models-docs/ | 82 | large |
| website/models-docs/providers/ | 81 | large |
| examples/next-js-chatbot-starter-template/ | 80 | large |
| archive/ | 73 | large |
| archive/deprecated-providers/ | 73 | large |
| examples/with-nextjs-resumable-stream/ | 73 | large |
| packages/server-core/ | 69 | large |
| packages/server-core/src/ | 64 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `archive/deprecated-providers/anthropic-ai/package.json`
- `archive/deprecated-providers/anthropic-ai/tsconfig.json`
- `archive/deprecated-providers/google-ai/package.json`
- `archive/deprecated-providers/google-ai/tsconfig.json`
- `archive/deprecated-providers/groq-ai/package.json`
- `archive/deprecated-providers/groq-ai/tsconfig.json`
- `archive/deprecated-providers/vercel-ai/package.json`
- `archive/deprecated-providers/vercel-ai/tsconfig.json`
- `archive/deprecated-providers/vercel-ui/package.json`
- `archive/deprecated-providers/vercel-ui/tsconfig.json`
- `archive/deprecated-providers/xsai/package.json`
- `archive/deprecated-providers/xsai/tsconfig.json`
- `examples/base/package.json`
- `examples/base/tsconfig.json`
- `examples/github-repo-analyzer/package.json`
- `examples/github-repo-analyzer/tsconfig.json`
- `examples/github-star-stories/package.json`
- `examples/github-star-stories/tsconfig.json`
- `examples/next-js-chatbot-starter-template/package.json`
- `examples/next-js-chatbot-starter-template/tsconfig.json`
- `examples/with-a2a-server/package.json`
- `examples/with-a2a-server/tsconfig.json`
- `examples/with-ad-creator/Dockerfile`
- `examples/with-ad-creator/package.json`
- `examples/with-ad-creator/tsconfig.json`
- `examples/with-agent-tool/package.json`
- `examples/with-agent-tool/tsconfig.json`
- `examples/with-airtable/package.json`
- `examples/with-airtable/tsconfig.json`
- `examples/with-amazon-bedrock/package.json`
- `examples/with-amazon-bedrock/tsconfig.json`
- `examples/with-anthropic/package.json`
- `examples/with-anthropic/tsconfig.json`
- `examples/with-assistant-ui/package.json`
- `examples/with-assistant-ui/tsconfig.json`
- `examples/with-auth/package.json`
- `examples/with-auth/tsconfig.json`
- `examples/with-cerbos/docker-compose.yml`
- `examples/with-cerbos/package.json`
- `examples/with-cerbos/tsconfig.json`
- `examples/with-chat-sdk/package.json`
- `examples/with-chat-sdk/tsconfig.json`
- `examples/with-chroma/package.json`
- `examples/with-chroma/tsconfig.json`
- `examples/with-client-side-tools/package.json`
- `examples/with-client-side-tools/tsconfig.json`
- `examples/with-cloudflare-workers/package.json`
- `examples/with-cloudflare-workers/tsconfig.json`
- `examples/with-composio-mcp/package.json`
- `examples/with-composio-mcp/tsconfig.json`
- `examples/with-copilotkit/client/package.json`
- `examples/with-copilotkit/client/tsconfig.json`
- `examples/with-copilotkit/client/vite.config.ts`
- `examples/with-copilotkit/server/package.json`
- `examples/with-copilotkit/server/tsconfig.json`
- `examples/with-custom-endpoints/package.json`
- `examples/with-custom-endpoints/tsconfig.json`
- `examples/with-dynamic-parameters/package.json`
- `examples/with-dynamic-parameters/tsconfig.json`
- `examples/with-dynamic-prompts/package.json`
- `examples/with-dynamic-prompts/tsconfig.json`
- `examples/with-feedback/package.json`
- `examples/with-feedback/tsconfig.json`
- `examples/with-google-ai/package.json`
- `examples/with-google-ai/tsconfig.json`
- `examples/with-google-drive-mcp/client/package.json`
- `examples/with-google-drive-mcp/client/tsconfig.json`
- `examples/with-google-drive-mcp/client/vite.config.ts`
- `examples/with-google-drive-mcp/server/package.json`
- `examples/with-google-drive-mcp/server/tsconfig.json`
- `examples/with-google-vertex-ai/package.json`
- `examples/with-google-vertex-ai/tsconfig.json`
- `examples/with-groq-ai/package.json`
- `examples/with-groq-ai/tsconfig.json`
- `examples/with-guardrails/package.json`
- `examples/with-guardrails/tsconfig.json`
- `examples/with-hooks/package.json`
- `examples/with-hooks/tsconfig.json`
- `examples/with-hugging-face-mcp/package.json`
- `examples/with-hugging-face-mcp/tsconfig.json`
- ... 20 more

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| archive/deprecated-providers/anthropic-ai/package.json | @voltagent/anthropic-ai | attw, build, dev, lint, lint:fix, publint, test, test:coverage | @anthropic-ai/sdk |
| archive/deprecated-providers/google-ai/package.json | @voltagent/google-ai | attw, build, dev, lint, lint:fix, publint, test, test:coverage | @google/genai, zod-to-json-schema |
| archive/deprecated-providers/groq-ai/package.json | @voltagent/groq-ai | attw, build, dev, lint, lint:fix, publint, test, test:coverage | groq-sdk, zod-to-json-schema |
| archive/deprecated-providers/vercel-ai/package.json | @voltagent/vercel-ai | attw, build, dev, lint, lint:fix, publint, test, test:coverage | @ai-sdk/openai, ai, ts-pattern, type-fest |
| archive/deprecated-providers/vercel-ui/package.json | @voltagent/vercel-ui | attw, build, dev, lint, lint:fix, publint, test, test:coverage | @voltagent/internal, ai, ts-pattern, type-fest |
| archive/deprecated-providers/xsai/package.json | @voltagent/xsai | attw, build, dev, lint, lint:fix, publint, test, test:coverage | @voltagent/core, ts-pattern, type-fest, xsai, zod |
| examples/base/package.json | voltagent-example-base | build, dev, start, volt | @ai-sdk/openai, @voltagent/cli, @voltagent/core, @voltagent/libsql, @voltagent/logger, @voltagent/server-hono, ai, zod |
| examples/github-repo-analyzer/package.json | voltagent-example-github-repo-analyzer | build, dev, start, volt | @ai-sdk/openai, @octokit/rest, @voltagent/core, @voltagent/libsql, @voltagent/logger, @voltagent/server-hono, ai, zod |
| examples/github-star-stories/package.json | voltagent-example-github-star-stories | build, deploy, dev, preview, start, volt | @voltagent/cli, @voltagent/core, @voltagent/logger, @voltagent/server-hono, @voltagent/serverless-hono, dotenv, wrangler, zod |
| examples/next-js-chatbot-starter-template/package.json | voltagent-example-next-js-chatbot-starter-template | build, dev, start, volt, voltagent:run | @ai-sdk/react, @libsql/client, @radix-ui/react-avatar, @radix-ui/react-collapsible, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-hover-card, @radix-ui/react-progress, @radix-ui/react-scroll-area, @radix-ui/react-select, @radix-ui/react-slot, @radix-ui/react-tooltip, @radix-ui/react-use-controllable-state, @voltagent/cli |
| examples/with-a2a-server/package.json | voltagent-example-with-a2a-server | build, dev, start, test:smoke, volt | @voltagent/a2a-server, @voltagent/core, @voltagent/internal, @voltagent/logger, @voltagent/server-hono, ai, zod |
| examples/with-ad-creator/package.json | ai-ad-generator | build, dev, lint, lint:fix, start, typecheck, volt | @browserbasehq/sdk, @browserbasehq/stagehand, @google-cloud/aiplatform, @google/generative-ai, @voltagent/cli, @voltagent/core, @voltagent/libsql, @voltagent/logger, @voltagent/server-hono, ai, dotenv, sharp, zod |
| examples/with-agent-tool/package.json | voltagent-example-with-agent-tool | build, dev, start | @voltagent/core, ai, zod |
| examples/with-airtable/package.json | voltagent-example-with-airtable | build, dev, start, volt | @voltagent/cli, @voltagent/core, @voltagent/internal, @voltagent/logger, @voltagent/sdk, @voltagent/server-hono, ai, zod |
| examples/with-amazon-bedrock/package.json | voltagent-example-amazon-bedrock | build, dev, start, volt | @voltagent/cli, @voltagent/core, @voltagent/libsql, @voltagent/logger, @voltagent/server-hono, ai, zod |
| examples/with-anthropic/package.json | voltagent-example-with-anthropic | build, dev, start, volt | @voltagent/cli, @voltagent/core, @voltagent/libsql, @voltagent/logger, @voltagent/server-hono, ai, zod |
| examples/with-assistant-ui/package.json | assistant-ui-starter | build, dev, start, voltagent:run | @assistant-ui/react, @assistant-ui/react-ai-sdk, @assistant-ui/react-markdown, @libsql/client, @radix-ui/react-avatar, @radix-ui/react-collapsible, @radix-ui/react-dialog, @radix-ui/react-separator, @radix-ui/react-slot, @radix-ui/react-tooltip, @voltagent/core, @voltagent/libsql, @voltagent/server-hono, ai |
| examples/with-auth/package.json | voltagent-example-with-auth | build, dev, start, volt | @ai-sdk/openai, @voltagent/cli, @voltagent/core, @voltagent/libsql, @voltagent/logger, @voltagent/server-hono, ai, zod |
| examples/with-cerbos/package.json | voltagent-example-with-cerbos | build, cerbos:start, cerbos:stop, dev, start, volt | @cerbos/grpc, @modelcontextprotocol/sdk, @voltagent/cli, @voltagent/core, @voltagent/server-hono, ai, express, zod |
| examples/with-chat-sdk/package.json | voltagent-example-with-chat-sdk | build, dev, start, volt | @chat-adapter/slack, @chat-adapter/state-redis, @voltagent/cli, @voltagent/core, ai, chat, next, react, react-dom, zod |
| examples/with-chroma/package.json | voltagent-example-with-chroma | build, chroma, dev, start, volt | @chroma-core/default-embed, @chroma-core/ollama, @chroma-core/openai, @voltagent/cli, @voltagent/core, @voltagent/libsql, @voltagent/logger, @voltagent/server-hono, ai, chromadb, zod |
| examples/with-client-side-tools/package.json | voltagent-example-with-client-side-tools | build, dev, start, voltagent:run | @ai-sdk/react, @libsql/client, @voltagent/core, @voltagent/server-hono, @voltagent/vercel-ai, @voltagent/vercel-ui, ai, next, react, react-dom, zod |
| examples/with-cloudflare-workers/package.json | voltagent-example-cloudflare-workers | build, deploy, deploy:production, dev, preview, tail, volt | @voltagent/core, @voltagent/serverless-hono, ai, hono, zod |
| examples/with-composio-mcp/package.json | voltagent-example-with-composio-mcp | build, dev, start, volt | @voltagent/cli, @voltagent/core, @voltagent/libsql, @voltagent/logger, @voltagent/server-hono, ai, zod |
| examples/with-copilotkit/client/package.json | voltagent-copilotkit-client | build, dev, lint, preview | @copilotkit/react-core, @copilotkit/react-ui, react, react-dom |
| examples/with-copilotkit/server/package.json | voltagent-with-copilotkit-server | build, dev, start, volt | @copilotkit/runtime, @voltagent/ag-ui, @voltagent/cli, @voltagent/core, @voltagent/server-hono, ai, zod |
| examples/with-custom-endpoints/package.json | voltagent-example-custom-endpoints | build, dev, start, volt | @voltagent/cli, @voltagent/core, @voltagent/libsql, @voltagent/logger, @voltagent/server-hono, ai, zod |
| examples/with-dynamic-parameters/package.json | voltagent-example-with-dynamic-parameters | build, dev, start, volt | @voltagent/cli, @voltagent/core, @voltagent/libsql, @voltagent/logger, @voltagent/server-hono, ai, zod |
| examples/with-dynamic-prompts/package.json | voltagent-example-with-dynamic-prompts | build, dev, start, volt | @voltagent/cli, @voltagent/core, @voltagent/libsql, @voltagent/logger, @voltagent/server-hono, ai, zod |
| examples/with-feedback/package.json | voltagent-example-with-feedback | build, dev, start, volt | @voltagent/cli, @voltagent/core, @voltagent/logger, @voltagent/server-hono, ai |

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| examples/with-mcp-elicitation/go-server/go.mod | voltagent-example-mcp-elicitation-go | 1.23.0 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.changeset/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `archive/deprecated-providers/README.md`
- `archive/deprecated-providers/anthropic-ai/README.md`
- `archive/deprecated-providers/google-ai/README.md`
- `archive/deprecated-providers/groq-ai/README.md`
- `archive/deprecated-providers/vercel-ai/README.md`
- `archive/deprecated-providers/vercel-ui/README.md`
- `archive/deprecated-providers/xsai/README.md`
- `docs/linting.md`
- `docs/structure.md`
- `docs/testing.md`
- `docs/tooling.md`
- `examples/README.md`
- `examples/base/README.md`
- `examples/github-repo-analyzer/README.md`
- `examples/github-star-stories/README.md`
- `examples/next-js-chatbot-starter-template/README.md`
- `examples/with-a2a-server/README.md`
- `examples/with-ad-creator/README.md`
- `examples/with-agent-tool/README.md`
- `examples/with-airtable/README.md`
- `examples/with-amazon-bedrock/README.md`
- `examples/with-anthropic/README.md`
- `examples/with-assistant-ui/README.md`
- `examples/with-auth/README.md`
- `examples/with-cerbos/README.md`
- `examples/with-chat-sdk/README.md`
- `examples/with-chroma/README.md`
- `examples/with-client-side-tools/README.md`
- `examples/with-cloudflare-workers/README.md`
- `examples/with-composio-mcp/README.md`
- `examples/with-copilotkit/README.md`
- `examples/with-custom-endpoints/README.md`
- `examples/with-dynamic-parameters/README.md`
- `examples/with-dynamic-prompts/README.md`
- `examples/with-feedback/README.md`
- `examples/with-google-ai/README.md`
- `examples/with-google-drive-mcp/README.md`
- `examples/with-google-vertex-ai/README.md`
- `examples/with-groq-ai/README.md`
- `examples/with-guardrails/README.md`
- `examples/with-hooks/README.md`
- `examples/with-hugging-face-mcp/README.md`
- `examples/with-jwt-auth/README.md`
- `examples/with-lancedb/README.md`
- `examples/with-langfuse/README.md`
- `examples/with-live-evals/README.md`
- `examples/with-mcp-elicitation/README.md`
- ... 30 more

### 에이전트 지침 후보

- `.cursor/rules/agents.mdc`
- `AGENTS.md`
- `examples/with-cerbos/policies/mcp_tools.yaml`
- `examples/with-cerbos/src/mcp-server.ts`
- `examples/with-composio-mcp/.env.example`
- `examples/with-composio-mcp/.gitignore`
- `examples/with-composio-mcp/README.md`
- `examples/with-composio-mcp/package.json`
- `examples/with-composio-mcp/src/index.ts`
- `examples/with-composio-mcp/tsconfig.json`
- `examples/with-google-drive-mcp/README.md`
- `examples/with-google-drive-mcp/client/.gitignore`
- `examples/with-google-drive-mcp/client/biome.json`
- `examples/with-google-drive-mcp/client/favicon.ico`
- `examples/with-google-drive-mcp/client/index.html`
- `examples/with-google-drive-mcp/client/package.json`
- `examples/with-google-drive-mcp/client/src/App.tsx`
- `examples/with-google-drive-mcp/client/src/components/Layout.tsx`
- `examples/with-google-drive-mcp/client/src/components/LoginPage.tsx`
- `examples/with-google-drive-mcp/client/src/components/ProtectedRoute.tsx`
- `examples/with-google-drive-mcp/client/src/components/VoltLogo.tsx`
- `examples/with-google-drive-mcp/client/src/context/AuthContext.tsx`
- `examples/with-google-drive-mcp/client/src/index.css`
- `examples/with-google-drive-mcp/client/src/main.tsx`
- `examples/with-google-drive-mcp/client/src/vite-env.d.ts`
- `examples/with-google-drive-mcp/client/tsconfig.app.json`
- `examples/with-google-drive-mcp/client/tsconfig.json`
- `examples/with-google-drive-mcp/client/tsconfig.node.json`
- `examples/with-google-drive-mcp/client/vite.config.ts`
- `examples/with-google-drive-mcp/server/.env.example`
- `examples/with-google-drive-mcp/server/.gitignore`
- `examples/with-google-drive-mcp/server/biome.json`
- `examples/with-google-drive-mcp/server/package.json`
- `examples/with-google-drive-mcp/server/src/db/index.ts`
- `examples/with-google-drive-mcp/server/src/db/pendingConnections.ts`
- `examples/with-google-drive-mcp/server/src/index.ts`
- `examples/with-google-drive-mcp/server/src/utils.ts`
- `examples/with-google-drive-mcp/server/src/voltagent/index.ts`
- `examples/with-google-drive-mcp/server/tsconfig.json`
- `examples/with-hugging-face-mcp/.env.example`
- `examples/with-hugging-face-mcp/.gitignore`
- `examples/with-hugging-face-mcp/README.md`
- `examples/with-hugging-face-mcp/package.json`
- `examples/with-hugging-face-mcp/src/index.ts`
- `examples/with-hugging-face-mcp/tsconfig.json`
- `examples/with-mcp-elicitation/.env.example`
- `examples/with-mcp-elicitation/.gitignore`
- `examples/with-mcp-elicitation/README.md`
- `examples/with-mcp-elicitation/go-server/go.mod`
- `examples/with-mcp-elicitation/go-server/go.sum`
- `examples/with-mcp-elicitation/go-server/main.go`
- `examples/with-mcp-elicitation/package.json`
- `examples/with-mcp-elicitation/src/index.ts`
- `examples/with-mcp-elicitation/src/mcp-server.ts`
- `examples/with-mcp-elicitation/tsconfig.json`
- `examples/with-mcp-server/.env.example`
- `examples/with-mcp-server/README.md`
- `examples/with-mcp-server/package.json`
- `examples/with-mcp-server/src/index.ts`
- `examples/with-mcp-server/tsconfig.json`
- `examples/with-mcp/.env.example`
- `examples/with-mcp/.gitignore`
- `examples/with-mcp/README.md`
- `examples/with-mcp/data/readme.txt`
- `examples/with-mcp/package.json`
- `examples/with-mcp/src/index.ts`
- `examples/with-mcp/tsconfig.json`
- `examples/with-peaka-mcp/.env.example`
- `examples/with-peaka-mcp/.gitignore`
- `examples/with-peaka-mcp/README.md`
- `examples/with-peaka-mcp/package.json`
- `examples/with-peaka-mcp/src/index.ts`
- `examples/with-peaka-mcp/tsconfig.json`
- `examples/with-workspace/workspace/skills/data-analysis/SKILL.md`
- `examples/with-workspace/workspace/skills/data-analysis/assets/sample.csv`
- `examples/with-workspace/workspace/skills/data-analysis/references/schema.md`
- `examples/with-workspace/workspace/skills/playwright-cli/SKILL.md`
- `examples/with-workspace/workspace/skills/playwright-cli/references/request-mocking.md`
- `examples/with-workspace/workspace/skills/playwright-cli/references/running-code.md`
- `examples/with-workspace/workspace/skills/playwright-cli/references/session-management.md`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `DESIGN.md`
- `examples/with-workspace/workspace/skills/data-analysis/SKILL.md`
- `examples/with-workspace/workspace/skills/data-analysis/assets/sample.csv`
- `examples/with-workspace/workspace/skills/data-analysis/references/schema.md`
- `examples/with-workspace/workspace/skills/playwright-cli/SKILL.md`
- `examples/with-workspace/workspace/skills/playwright-cli/references/request-mocking.md`
- `examples/with-workspace/workspace/skills/playwright-cli/references/running-code.md`
- `examples/with-workspace/workspace/skills/playwright-cli/references/session-management.md`
- `examples/with-workspace/workspace/skills/playwright-cli/references/storage-state.md`
- `examples/with-workspace/workspace/skills/playwright-cli/references/test-generation.md`
- `examples/with-workspace/workspace/skills/playwright-cli/references/tracing.md`
- `examples/with-workspace/workspace/skills/playwright-cli/references/video-recording.md`
- `packages/cli/src/commands/add.ts`
- `packages/cli/src/commands/deploy.ts`
- `packages/cli/src/commands/eval.ts`
- `packages/cli/src/commands/init.ts`
- `packages/cli/src/commands/login.ts`
- `packages/cli/src/commands/logout.ts`
- `packages/cli/src/commands/mcp.ts`
- `packages/cli/src/commands/prompts.ts`
- `packages/cli/src/commands/tunnel.ts`
- `packages/cli/src/commands/update.ts`
- `packages/cli/src/commands/whoami.ts`
- `packages/cli/src/templates/cloudflare-wrangler.toml`
- `packages/cli/src/templates/netlify.toml`
- `packages/cli/src/templates/vercel.json.template`
- `packages/core/src/workspace/skills/index.spec.ts`
- `packages/core/src/workspace/skills/index.ts`
- `packages/core/src/workspace/skills/types.ts`
- `packages/create-voltagent-app/templates/base/.dockerignore.template`
- `packages/create-voltagent-app/templates/base/.env.template`
- `packages/create-voltagent-app/templates/base/Dockerfile.template`
- `packages/create-voltagent-app/templates/base/README.md.template`
- `packages/create-voltagent-app/templates/base/index.ts.template`
- `packages/create-voltagent-app/templates/base/tools/index.ts.template`
- `packages/create-voltagent-app/templates/base/tools/weather.ts.template`
- `packages/create-voltagent-app/templates/base/tsconfig.json.template`
- `packages/create-voltagent-app/templates/base/tsdown.config.ts.template`
- `packages/create-voltagent-app/templates/base/workflows/index.ts.template`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `archive/deprecated-providers/anthropic-ai/src/index.spec.ts`
- `archive/deprecated-providers/google-ai/src/index.spec.ts`
- `archive/deprecated-providers/google-ai/src/utils/schema_helper.spec.ts`
- `archive/deprecated-providers/groq-ai/src/index.spec.ts`
- `archive/deprecated-providers/vercel-ai/src/provider-custom.spec.ts`
- `archive/deprecated-providers/vercel-ai/src/provider.spec.ts`
- `archive/deprecated-providers/vercel-ai/src/utils.spec.ts`
- `archive/deprecated-providers/xsai/src/index.spec.ts`
- `archive/deprecated-providers/xsai/src/utils.spec.ts`
- `packages/a2a-server/src/server.spec.ts`
- `packages/ag-ui/src/voltagent-agent.spec.ts`
- `packages/cli/src/index.spec.ts`
- `packages/cloudflare-d1/src/memory-adapter.spec.ts`
- `packages/core/src/agent/agent-observability.spec.ts`
- `packages/core/src/agent/agent-semantic-search.spec.ts`
- `packages/core/src/agent/agent.spec.ts`
- `packages/core/src/agent/apply-summarization.spec.ts`
- `packages/core/src/agent/concurrent-tool-spans.spec.ts`
- `packages/core/src/agent/conversation-buffer.spec.ts`
- `packages/core/src/agent/error-utils.spec.ts`
- `packages/core/src/agent/errors/abort-error.spec.ts`
- `packages/core/src/agent/errors/voltagent-error.spec.ts`
- `packages/core/src/agent/eval.spec.ts`
- `packages/core/src/agent/feedback.spec.ts`
- `packages/core/src/agent/guardrail.integration.spec.ts`
- `packages/core/src/agent/guardrail.spec.ts`
- `packages/core/src/agent/guardrails/defaults.spec.ts`
- `packages/core/src/agent/hooks/index.spec.ts`
- `packages/core/src/agent/memory-persist-queue.spec.ts`
- `packages/core/src/agent/memory-persistence.integration.spec.ts`
- `packages/core/src/agent/merged-stream-close.spec.ts`
- `packages/core/src/agent/message-normalizer.spec.ts`
- `packages/core/src/agent/model-message-normalizer.spec.ts`
- `packages/core/src/agent/open-telemetry/trace-context.spec.ts`
- `packages/core/src/agent/prepare-step.spec.ts`
- `packages/core/src/agent/prompt-context-usage.spec.ts`
- `packages/core/src/agent/retry-after.spec.ts`
- `packages/core/src/agent/step-persistence.spec.ts`
- `packages/core/src/agent/streaming/guardrail-stream.spec.ts`
- `packages/core/src/agent/streaming/output-guardrail-stream-runner.spec.ts`
- `packages/core/src/agent/subagent/bail.spec.ts`
- `packages/core/src/agent/subagent/index.spec.ts`
- `packages/core/src/agent/tool-input-coercion.spec.ts`
- `packages/core/src/eval/builder.spec.ts`
- `packages/core/src/eval/create-scorer.spec.ts`
- `packages/core/src/index.spec.ts`
- `packages/core/src/logger/console-logger.spec.ts`
- `packages/core/src/logger/events.spec.ts`
- `packages/core/src/logger/index.spec.ts`
- `packages/core/src/logger/logger-proxy.spec.ts`
- `packages/core/src/logger/message-builder.spec.ts`
- `packages/core/src/mcp/client/index.spec.ts`
- `packages/core/src/mcp/registry/index.spec.ts`
- `packages/core/src/memory/adapters/embedding/ai-sdk.spec.ts`
- `packages/core/src/memory/adapters/storage/in-memory.spec.ts`
- `packages/core/src/memory/manager/memory-manager.spec.ts`
- `packages/core/src/memory/semantic-search.spec.ts`
- `packages/core/src/memory/working-memory.spec.ts`
- `packages/core/src/observability/processors/span-filter-processor.spec.ts`
- `packages/core/src/observability/utils.spec.ts`
- `packages/core/src/observability/voltagent-observability.spec.ts`
- `packages/core/src/planagent/plan-agent.spec.ts`
- `packages/core/src/registries/model-provider-registry-minimax.spec.ts`
- `packages/core/src/retriever/retriever.spec.ts`
- `packages/core/src/retriever/tools/index.spec.ts`
- `packages/core/src/tool/index.spec.ts`
- `packages/core/src/tool/manager/index.spec.ts`
- `packages/core/src/tool/reasoning/index.spec.ts`
- `packages/core/src/utils/createPrompt/index.spec.ts`
- `packages/core/src/utils/message-converter.spec.ts`
- `packages/core/src/utils/message-helpers.spec.ts`
- `packages/core/src/utils/queue/queue.spec.ts`
- `packages/core/src/utils/serialization/index.spec.ts`
- `packages/core/src/utils/tool-input.spec.ts`
- `packages/core/src/utils/toolParser/index.spec.ts`
- `packages/core/src/utils/usage-normalizer.spec.ts`
- `packages/core/src/voltagent.spec.ts`
- `packages/core/src/voltops/actions/client.spec.ts`
- `packages/core/src/voltops/client-priority.spec.ts`
- `packages/core/src/voltops/client.spec.ts`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/prerelease.yml`
- `.github/workflows/pull-request.yml`
- `.github/workflows/release.yml`
- `examples/with-ad-creator/Dockerfile`
- `examples/with-cerbos/docker-compose.yml`
- `examples/with-whatsapp/Dockerfile`
- `packages/postgres/docker-compose.test.yaml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 1176 |
| .md | 537 |
| .tsx | 401 |
| .json | 327 |
| .js | 72 |
| .example | 70 |
| .gitignore | 69 |
| .css | 39 |
| .svg | 27 |
| .png | 25 |
| .mts | 24 |
| .template | 21 |
| .mjs | 10 |
| .yml | 10 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `packages/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tools/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `DESIGN.md 스펙/명령 의미`
- `examples/with-workspace/workspace/skills/data-analysis/SKILL.md 스펙/명령 의미`
- `examples/with-workspace/workspace/skills/data-analysis/assets/sample.csv 스펙/명령 의미`
- `examples/with-workspace/workspace/skills/data-analysis/references/schema.md 스펙/명령 의미`
- `examples/with-workspace/workspace/skills/playwright-cli/SKILL.md 스펙/명령 의미`
- `archive/deprecated-providers/anthropic-ai/package.json 실행 스크립트와 패키지 경계`
- `archive/deprecated-providers/anthropic-ai/tsconfig.json 실행 스크립트와 패키지 경계`
- `archive/deprecated-providers/google-ai/package.json 실행 스크립트와 패키지 경계`
- `archive/deprecated-providers/google-ai/tsconfig.json 실행 스크립트와 패키지 경계`
- `archive/deprecated-providers/groq-ai/package.json 실행 스크립트와 패키지 경계`

