# Arize-ai/phoenix 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/Arize-ai__phoenix |
| remote | https://github.com/Arize-ai/phoenix |
| HEAD | 3d33799 (2026-06-11) fix: add Anthropic computer-use beta header (#13242) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 6021 |
| dirs | 1091 |
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
- 주요 heading: `Installation`, `Packages`, `Python Subpackages`, `TypeScript Subpackages`, `Tracing Integrations`, `Span Processors`, `JavaScript Integrations`, `Java Integrations`, `Platforms`, `Coding Agent Skills`, `Security & Privacy`, `Telemetry`, `Community`, `Breaking Changes`, `Copyright, Patent, and License`

> <p align="center" <a target=" blank" href="https //phoenix.arize.com" style="background none" <img alt="phoenix banner" src="https //github.com/Arize ai/phoenix assets/blob/main/images/socal/github large banner phoenix v2.jpg?raw=true" width="auto" height="auto" </img </a <br/ <br/ <a href="https //arize.com/docs/phoenix/" <img src="https //img.shields.io/static/v1?message=Docs&logo=data image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAG4ElEQVR4nO2d4XHjNhCFcTf+b3ZgdWCmgmMqOKUC0xXYrsBOBVEqsFRB7ApCVRCygrMriFQBM7h5mNlwKBECARLg7jeDscamSQj7sFgsQfBL27ZK4MtXsT1vRADMEQEwRwTAHBEAc0QAzBEBMEcEwBwRAHNEAMwRATBnjAByFGE+MqVUMcYOY24GVUqpb/h8VErVKAf87QNFcEcbd4WSw+D6803njHscO5sATmGEURGBiCj6yUlv1uX2gv91FsDViArbcA2RUKF8QhAV8RQc0b15DcOt0VaTE1oAfWj3dYdCBfGGsmSM0XX5HsP3nEMAXbqCeCdiOERQPx9og5exGJ0S4zRQN9KrUupfpdQWjZciure/YIj7K0bjqwTyAHdovA805iqCOg2xgnB1nZ97IvaoSCURdIPG/IHGjTH/YAz/A8KdJai7lBQzgbpx

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .claude | dir |
| .codex | dir |
| .cursor | dir |
| .dockerignore | file |
| .editorconfig | file |
| .eslintignore | file |
| .git-blame-ignore-revs | file |
| .github | dir |
| .gitignore | file |
| .mintignore | file |
| .nvmrc | file |
| .oxfmtrc.jsonc | file |
| .oxlintrc.json | file |
| .pre-commit-config.yaml | file |
| .prettierignore | file |
| .python-version | file |
| .readthedocs.yaml | file |
| .release-please-manifest.json | file |
| .tours | dir |
| .vale.ini | file |
| .vscode | dir |
| AGENTS.md | file |
| api_reference | dir |
| app | dir |
| CHANGELOG.md | file |
| CLA.md | file |
| CLAUDE.md | other |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| cspell.json | file |
| DEVELOPMENT.md | file |
| docker-compose.yml | file |
| Dockerfile | file |
| docs | dir |
| docs.json | file |
| evals | dir |
| examples | dir |
| helm | dir |
| internal_docs | dir |
| IP_NOTICE | file |
| js | dir |
| kustomize | dir |
| LICENSE | file |
| Makefile | file |
| MIGRATION.md | file |
| packages | dir |
| prompts | dir |
| pyment.conf | file |
| pyproject.toml | file |
| pytest-quiet.ini | file |
| README.md | file |
| release-please-config.json | file |
| requirements | dir |
| REVIEW.md | file |
| schemas | dir |
| scripts | dir |
| SECURITY.md | file |
| sitemap.xml | file |
| skills-lock.json | file |
| src | dir |
| styles | dir |
| tests | dir |
| tox.ini | file |
| tutorials | dir |
| uv.lock | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| app/ | 2419 |
| src/ | 732 |
| docs/ | 698 |
| js/ | 577 |
| scripts/ | 305 |
| tests/ | 295 |
| packages/ | 279 |
| .agents/ | 177 |
| tutorials/ | 150 |
| examples/ | 133 |
| internal_docs/ | 76 |
| .github/ | 49 |
| (root) | 40 |
| evals/ | 19 |
| helm/ | 15 |
| api_reference/ | 11 |
| requirements/ | 11 |
| prompts/ | 10 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 732 | preferred |
| app/ | 2419 | preferred |
| packages/ | 279 | preferred |
| docs/ | 698 | preferred |
| examples/ | 133 | preferred |
| tests/ | 295 | preferred |
| scripts/ | 305 | preferred |
| app/src/ | 2234 | large |
| app/src/components/ | 855 | large |
| app/src/pages/ | 813 | large |
| src/phoenix/ | 732 | large |
| docs/phoenix/ | 689 | large |
| src/phoenix/server/ | 590 | large |
| js/ | 577 | large |
| js/packages/ | 446 | large |
| app/src/agent/ | 392 | large |
| tests/unit/ | 245 | large |
| js/packages/phoenix-client/ | 209 | large |
| .agents/ | 177 | large |
| .agents/skills/ | 177 | large |
| tests/unit/server/ | 176 | large |
| docs/phoenix/release-notes/ | 162 | large |
| packages/phoenix-client/ | 150 | large |
| tutorials/ | 150 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `api_reference/requirements.txt`
- `app/package.json`
- `app/pnpm-lock.yaml`
- `app/pnpm-workspace.yaml`
- `app/tsconfig.json`
- `docker-compose.yml`
- `examples/agent_framework_comparison/requirements.txt`
- `examples/agents/requirements.txt`
- `examples/code_gen_agent/requirements.txt`
- `examples/computer_use_agent/Dockerfile`
- `examples/computer_use_agent/requirements.txt`
- `examples/cron-evals/requirements.txt`
- `examples/llamaindex-workflows-research-agent/requirements.txt`
- `examples/rag_agent/requirements.txt`
- `internal_docs/vignettes/json-jsonb-demo/package.json`
- `internal_docs/vignettes/json-jsonb-demo/tsconfig.json`
- `js/benchmarks/evals-benchmarks/package.json`
- `js/benchmarks/evals-benchmarks/tsconfig.json`
- `js/examples/apps/cli-agent-starter-kit/docker-compose.yml`
- `js/examples/apps/cli-agent-starter-kit/package.json`
- `js/examples/apps/cli-agent-starter-kit/tsconfig.json`
- `js/examples/apps/demo-document-relevancy-experiment/package.json`
- `js/examples/apps/demo-document-relevancy-experiment/tsconfig.json`
- `js/examples/apps/experiments-quickstart/package.json`
- `js/examples/apps/experiments-quickstart/tsconfig.json`
- `js/examples/apps/langchain-quickstart/package.json`
- `js/examples/apps/langchain-quickstart/tsconfig.json`
- `js/examples/apps/mastra-agent/package.json`
- `js/examples/apps/mastra-agent/tsconfig.json`
- `js/examples/apps/mastra-quickstart/package.json`
- `js/examples/apps/mastra-quickstart/tsconfig.json`
- `js/examples/apps/phoenix-experiment-runner/docker-compose.yml`
- `js/examples/apps/phoenix-experiment-runner/package.json`
- `js/examples/apps/phoenix-experiment-runner/tsconfig.json`
- `js/examples/apps/tracing-tutorial/package.json`
- `js/examples/apps/tracing-tutorial/tsconfig.json`
- `js/examples/notebooks/deno.json`
- `js/examples/notebooks/langchain/deno.json`
- `js/examples/notebooks/langchain/package.json`
- `js/package.json`
- `js/packages/phoenix-cli/package.json`
- `js/packages/phoenix-cli/tsconfig.json`
- `js/packages/phoenix-client/package.json`
- `js/packages/phoenix-client/tsconfig.json`
- `js/packages/phoenix-config/package.json`
- `js/packages/phoenix-config/tsconfig.json`
- `js/packages/phoenix-evals/package.json`
- `js/packages/phoenix-evals/tsconfig.json`
- `js/packages/phoenix-mcp/package.json`
- `js/packages/phoenix-mcp/tsconfig.json`
- `js/packages/phoenix-otel/package.json`
- `js/packages/phoenix-otel/tsconfig.json`
- `js/pnpm-lock.yaml`
- `js/pnpm-workspace.yaml`
- `packages/phoenix-client/docs/requirements.txt`
- `packages/phoenix-client/pyproject.toml`
- `packages/phoenix-evals/docs/requirements.txt`
- `packages/phoenix-evals/pyproject.toml`
- `packages/phoenix-otel/docs/requirements.txt`
- `packages/phoenix-otel/pyproject.toml`
- `pyproject.toml`
- `scripts/analytics/requirements.txt`
- `scripts/docker/devops/Dockerfile`
- `scripts/docker/devops/docker-compose.yml`
- `scripts/docker/devops/oidc-server/Dockerfile`
- `scripts/docker/devops/oidc-server/frontend/package.json`
- `scripts/docker/devops/oidc-server/frontend/pnpm-workspace.yaml`
- `scripts/docker/devops/oidc-server/frontend/tsconfig.json`
- `scripts/docker/devops/oidc-server/frontend/vite.config.ts`
- `scripts/docker/devops/oidc-server/package.json`
- `scripts/docker/devops/oidc-server/pnpm-workspace.yaml`
- `scripts/docker/devops/oidc-server/tsconfig.json`
- `scripts/docker/devops/smtp-server/Dockerfile`
- `scripts/docker/devops/smtp-server/package.json`
- `scripts/docker/devops/smtp-server/pnpm-workspace.yaml`
- `scripts/docker/devops/smtp-server/tsconfig.json`
- `scripts/docker/devops/smtp-server/ui/package.json`
- `scripts/docker/devops/smtp-server/ui/tsconfig.json`
- `scripts/docker/devops/smtp-server/ui/vite.config.ts`
- ... 15 more

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| app/package.json | phoenix-ui | build, build-storybook, build:relay, build:static, chromatic, dev, dev:embeddings, dev:offline, dev:server, dev:server:embeddings, dev:server:init, dev:server:offline, dev:server:test, dev:ui, ensure:env, fmt | @ai-sdk/react, @apollo/client, @arizeai/openinference-semantic-conventions, @codemirror/autocomplete, @codemirror/commands, @codemirror/lang-javascript, @codemirror/lang-json, @codemirror/lang-python, @codemirror/language, @codemirror/legacy-modes, @codemirror/lint, @codemirror/state, @dnd-kit/core, @dnd-kit/sortable |
| internal_docs/vignettes/json-jsonb-demo/package.json | pglite-json-jsonb-demo | compare, format, lint, performance, query, start, test, typecheck | @electric-sql/pglite |
| js/benchmarks/evals-benchmarks/package.json | evals-benchmarks | build, dev | @ai-sdk/openai, @arizeai/phoenix-client, @arizeai/phoenix-evals |
| js/examples/apps/cli-agent-starter-kit/package.json | cli-agent-starter-kit | build, clean, dev, dev:no-phoenix, dev:verbose, eval, eval:benchmark, eval:no-phoenix, eval:terminal-format, eval:verbose, phoenix:down, phoenix:ensure, phoenix:ensure:verbose, phoenix:logs, phoenix:reload, phoenix:restart | @ai-sdk/anthropic, @ai-sdk/anthropic-v5, @ai-sdk/mcp, @arizeai/openinference-core, @arizeai/phoenix-client, @arizeai/phoenix-evals, @arizeai/phoenix-otel, @clack/prompts, ai, zod |
| js/examples/apps/demo-document-relevancy-experiment/package.json | demo-document-relevancy-experiment | start | @ai-sdk/openai, @arizeai/openinference-instrumentation-openai, @arizeai/phoenix-client, @arizeai/phoenix-evals, dotenv, openai |
| js/examples/apps/experiments-quickstart/package.json | experiments-quickstart | start | @ai-sdk/openai, @arizeai/openinference-semantic-conventions, @arizeai/phoenix-client, @arizeai/phoenix-evals, @arizeai/phoenix-otel, @opentelemetry/api, ai, dotenv |
| js/examples/apps/langchain-quickstart/package.json | langchain-quickstart | build, custom_evals, pre_built_evals, start | @ai-sdk/openai, @arizeai/openinference-instrumentation-langchain, @arizeai/phoenix-client, @arizeai/phoenix-evals, @arizeai/phoenix-otel, @langchain/core, @langchain/openai, dotenv, langchain, zod |
| js/examples/apps/mastra-agent/package.json | mastra-agent | dev, eval | @ai-sdk/openai, @arizeai/phoenix-client, @arizeai/phoenix-evals, @mastra/arize, @mastra/core, @mastra/observability, dotenv, zod |
| js/examples/apps/mastra-quickstart/package.json | mastra-quickstart | add_traces, build, dev, evals, experiments, start, test | @ai-sdk/openai, @arizeai/phoenix-client, @arizeai/phoenix-evals, @mastra/arize, @mastra/client-js, @mastra/core, @mastra/evals, @mastra/libsql, @mastra/loggers, @mastra/memory, @mastra/observability, dotenv, zod |
| js/examples/apps/phoenix-experiment-runner/package.json | phoenix-experiment-runner | build, d:down, d:up, dev, start | @arizeai/openinference-instrumentation-openai, @arizeai/openinference-semantic-conventions, @arizeai/phoenix-client, @arizeai/phoenix-evals, @arizeai/phoenix-otel, @clack/prompts, autoevals, dotenv, openai, zod |
| js/examples/apps/tracing-tutorial/package.json | tracing-tutorial | evaluate, evaluate:sessions, sessions, start | @ai-sdk/openai, @arizeai/openinference-core, @arizeai/openinference-semantic-conventions, @arizeai/phoenix-client, @arizeai/phoenix-evals, @arizeai/phoenix-otel, ai, zod |
| js/examples/notebooks/langchain/package.json |  |  | @arizeai/openinference-instrumentation-langchain, @arizeai/openinference-semantic-conventions, @langchain/core, @langchain/openai, @opentelemetry/exporter-trace-otlp-proto, @opentelemetry/resources, @opentelemetry/sdk-trace-node |
| js/package.json | phoenix-js | build, ci:publish, ci:version, clean, clean:node_modules, docs:generate, docs:preview, fmt, fmt:check, lint, lint:fix, sync-package-docs, test, typecheck |  |
| js/packages/phoenix-cli/package.json | @arizeai/phoenix-cli | build, build:schema, clean, dev, prebuild, test, test:watch, typecheck | @arizeai/openinference-semantic-conventions, @arizeai/phoenix-client, @arizeai/phoenix-config, @clack/prompts, commander, zod |
| js/packages/phoenix-client/package.json | @arizeai/phoenix-client | build, clean, generate, postbuild, postpublish, prebuild, prepack, test, test:watch, typecheck | @arizeai/openinference-semantic-conventions, @arizeai/openinference-vercel, @arizeai/phoenix-config, @arizeai/phoenix-otel, async, openapi-fetch, tiny-invariant, zod |
| js/packages/phoenix-config/package.json | @arizeai/phoenix-config | build, clean, postbuild, test, test:watch, typecheck |  |
| js/packages/phoenix-evals/package.json | @arizeai/phoenix-evals | build, clean, docs, docs:preview, postbuild, postpublish, prebuild, prepack, test, test:watch, typecheck | @arizeai/openinference-core, @opentelemetry/api, ai, jsonpath-plus, mustache, zod |
| js/packages/phoenix-mcp/package.json | @arizeai/phoenix-mcp | build, dev, inspect, test, typecheck | @arizeai/phoenix-client, @arizeai/phoenix-config, @modelcontextprotocol/sdk, glob, minimist, zod |
| js/packages/phoenix-otel/package.json | @arizeai/phoenix-otel | build, clean, postbuild, postpublish, prebuild, prepack, test, test:watch, typecheck | @arizeai/openinference-core, @arizeai/openinference-semantic-conventions, @arizeai/openinference-vercel, @opentelemetry/api, @opentelemetry/context-async-hooks, @opentelemetry/core, @opentelemetry/exporter-trace-otlp-proto, @opentelemetry/instrumentation, @opentelemetry/resources, @opentelemetry/sdk-trace-base, @opentelemetry/sdk-trace-node |
| scripts/docker/devops/oidc-server/frontend/package.json | oidc-user-selector | build, check, dev, fix, fmt, fmt:check, lint, lint:fix, preview, typecheck | lucide-react, react, react-dom |
| scripts/docker/devops/oidc-server/package.json | phoenix-oidc-dev-server | build, check, check:all, dev, fix, fix:all, fmt, fmt:check, lint, lint:fix, start, typecheck | @fastify/cors, @fastify/formbody, @fastify/static, fastify, jose, pg, yaml |
| scripts/docker/devops/smtp-server/package.json | phoenix-smtp-dev-server | build, build:ui, dev, dev:ui, fmt, fmt:check, lint, lint:fix, start, type-check, typecheck | @fastify/cors, @fastify/static, fastify, mailparser, smtp-server, zod |
| scripts/docker/devops/smtp-server/ui/package.json | phoenix-smtp-ui | build, dev, fmt, fmt:check, lint, lint:fix, preview, type-check, typecheck | lucide-react, react, react-dom |
| scripts/gh-comment-watch/package.json | gh-comment-watch | db:generate, db:migrate, dev, dev:web, start, build, typecheck, lint, lint:fix, fmt, fmt:check, test | @hono/node-server, better-sqlite3, drizzle-orm, hono |
| scripts/gh-comment-watch/web/package.json | gh-comment-watch-web | build, dev, fmt, fmt:check, lint, lint:fix, preview, typecheck | react, react-dom |
| scripts/mock-llm-server/dashboard/package.json | dashboard | build, dev, fmt, fmt:check, lint, lint:fix, preview, typecheck | react, react-dom, recharts |
| scripts/mock-llm-server/package.json | mock-llm-server | build, build:all, build:dashboard, dev, fmt, fmt:check, lint, lint:fix, start, test, test:watch, typecheck | @faker-js/faker, express, ws |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| packages/phoenix-client/pyproject.toml | arize-phoenix-client | false | false | true | true |
| packages/phoenix-evals/pyproject.toml | arize-phoenix-evals | false | false | true | true |
| packages/phoenix-otel/pyproject.toml | arize-phoenix-otel | false | false | true | true |
| pyproject.toml | arize-phoenix | false | true | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.agents/skills/README.md`
- `.agents/skills/phoenix-tracing/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `api_reference/README.md`
- `app/README.md`
- `app/src/agent/tools/docs/docsToolTypes.ts`
- `app/src/agent/tools/docs/index.ts`
- `docs/PROMPT.md`
- `docs/analytics.js`
- `docs/favicon.png`
- `docs/logo/dark.png`
- `docs/logo/light.png`
- `docs/phoenix.mdx`
- `docs/phoenix/agent-assisted-setup.mdx`
- `docs/phoenix/cookbook.mdx`
- `docs/phoenix/cookbook/agent-workflow-patterns.mdx`
- `docs/phoenix/cookbook/agent-workflow-patterns/autogen.mdx`
- `docs/phoenix/cookbook/agent-workflow-patterns/crewai.mdx`
- `docs/phoenix/cookbook/agent-workflow-patterns/google-genai-sdk-manual-orchestration.mdx`
- `docs/phoenix/cookbook/agent-workflow-patterns/langgraph.mdx`
- `docs/phoenix/cookbook/agent-workflow-patterns/openai-agents.mdx`
- `docs/phoenix/cookbook/agent-workflow-patterns/smolagents.mdx`
- `docs/phoenix/cookbook/ai-engineering-workflows/aligning-evals-with-human-feedback.mdx`
- `docs/phoenix/cookbook/ai-engineering-workflows/analyzing-customer-review-evals-with-repetition-experiments.mdx`
- `docs/phoenix/cookbook/ai-engineering-workflows/iterative-evaluation-and-experimentation-workflow-python.mdx`
- `docs/phoenix/cookbook/ai-engineering-workflows/iterative-evaluation-and-experimentation-workflow-typescript.mdx`
- `docs/phoenix/cookbook/datasets-and-experiments/analyzing-customer-review-evals-with-repetition-experiments.mdx`
- `docs/phoenix/cookbook/datasets-and-experiments/comparing-llamaindex-query-engines-with-a-pairwise-evaluator.mdx`
- `docs/phoenix/cookbook/datasets-and-experiments/cookbooks.mdx`
- `docs/phoenix/cookbook/datasets-and-experiments/experiment-with-a-customer-support-agent.mdx`
- `docs/phoenix/cookbook/datasets-and-experiments/summarization.mdx`
- `docs/phoenix/cookbook/datasets-and-experiments/text2sql.mdx`
- `docs/phoenix/cookbook/evaluation/code-readability-evaluation.mdx`
- `docs/phoenix/cookbook/evaluation/cookbooks.mdx`
- `docs/phoenix/cookbook/evaluation/creating-a-custom-llm-evaluator-with-a-benchmark-dataset.mdx`
- `docs/phoenix/cookbook/evaluation/evaluate-an-agent.mdx`
- `docs/phoenix/cookbook/evaluation/evaluate-rag.mdx`
- `docs/phoenix/cookbook/evaluation/openai-agents-sdk-cookbook.mdx`
- `docs/phoenix/cookbook/evaluation/relevance-classification-evaluation.mdx`
- `docs/phoenix/cookbook/evaluation/trace-level-evaluation.mdx`
- `docs/phoenix/cookbook/evaluation/using-ragas-to-evaluate-a-math-problem-solving-agent.mdx`
- `docs/phoenix/cookbook/human-in-the-loop-workflows-annotations/aligning-llm-evals-with-human-annotations-typescript.mdx`
- `docs/phoenix/cookbook/human-in-the-loop-workflows-annotations/using-human-annotations-for-eval-driven-development.mdx`
- `docs/phoenix/cookbook/prompt-engineering/chain-of-thought-prompting.mdx`
- `docs/phoenix/cookbook/prompt-engineering/few-shot-prompting.mdx`
- `docs/phoenix/cookbook/prompt-engineering/llm-as-a-judge-prompt-optimization.mdx`
- `docs/phoenix/cookbook/prompt-engineering/optimizing-coding-agent-prompts-prompt-learning.mdx`
- `docs/phoenix/cookbook/prompt-engineering/prompt-learning-optimizing-prompts-for-classification.mdx`
- `docs/phoenix/cookbook/prompt-engineering/prompt-optimization.mdx`
- ... 30 more

### 에이전트 지침 후보

- `.agents/skills/README.md`
- `.agents/skills/agent-browser/SKILL.md`
- `.agents/skills/mintlify/SKILL.md`
- `.agents/skills/phoenix-cli/SKILL.md`
- `.agents/skills/phoenix-cli/references/axial-coding.md`
- `.agents/skills/phoenix-cli/references/open-coding.md`
- `.agents/skills/phoenix-design/SKILL.md`
- `.agents/skills/phoenix-design/rules/bem.md`
- `.agents/skills/phoenix-design/rules/counters.md`
- `.agents/skills/phoenix-design/rules/dialogs.md`
- `.agents/skills/phoenix-design/rules/error-display.md`
- `.agents/skills/phoenix-design/rules/icons.md`
- `.agents/skills/phoenix-design/rules/layout.md`
- `.agents/skills/phoenix-design/rules/tokens.md`
- `.agents/skills/phoenix-docs-gap-audit/SKILL.md`
- `.agents/skills/phoenix-evals-new-metric/SKILL.md`
- `.agents/skills/phoenix-evals/SKILL.md`
- `.agents/skills/phoenix-evals/references/axial-coding.md`
- `.agents/skills/phoenix-evals/references/common-mistakes-python.md`
- `.agents/skills/phoenix-evals/references/error-analysis-multi-turn.md`
- `.agents/skills/phoenix-evals/references/error-analysis.md`
- `.agents/skills/phoenix-evals/references/evaluate-dataframe-python.md`
- `.agents/skills/phoenix-evals/references/evaluators-code-python.md`
- `.agents/skills/phoenix-evals/references/evaluators-code-typescript.md`
- `.agents/skills/phoenix-evals/references/evaluators-custom-templates.md`
- `.agents/skills/phoenix-evals/references/evaluators-llm-python.md`
- `.agents/skills/phoenix-evals/references/evaluators-llm-typescript.md`
- `.agents/skills/phoenix-evals/references/evaluators-overview.md`
- `.agents/skills/phoenix-evals/references/evaluators-pre-built.md`
- `.agents/skills/phoenix-evals/references/evaluators-rag.md`
- `.agents/skills/phoenix-evals/references/experiments-datasets-python.md`
- `.agents/skills/phoenix-evals/references/experiments-datasets-typescript.md`
- `.agents/skills/phoenix-evals/references/experiments-overview.md`
- `.agents/skills/phoenix-evals/references/experiments-running-python.md`
- `.agents/skills/phoenix-evals/references/experiments-running-typescript.md`
- `.agents/skills/phoenix-evals/references/experiments-synthetic-python.md`
- `.agents/skills/phoenix-evals/references/experiments-synthetic-typescript.md`
- `.agents/skills/phoenix-evals/references/fundamentals-anti-patterns.md`
- `.agents/skills/phoenix-evals/references/fundamentals-model-selection.md`
- `.agents/skills/phoenix-evals/references/fundamentals.md`
- `.agents/skills/phoenix-evals/references/observe-sampling-python.md`
- `.agents/skills/phoenix-evals/references/observe-sampling-typescript.md`
- `.agents/skills/phoenix-evals/references/observe-tracing-setup.md`
- `.agents/skills/phoenix-evals/references/production-continuous.md`
- `.agents/skills/phoenix-evals/references/production-guardrails.md`
- `.agents/skills/phoenix-evals/references/production-overview.md`
- `.agents/skills/phoenix-evals/references/setup-python.md`
- `.agents/skills/phoenix-evals/references/setup-typescript.md`
- `.agents/skills/phoenix-evals/references/validation-evaluators-python.md`
- `.agents/skills/phoenix-evals/references/validation-evaluators-typescript.md`
- `.agents/skills/phoenix-evals/references/validation.md`
- `.agents/skills/phoenix-frontend/SKILL.md`
- `.agents/skills/phoenix-frontend/rules/accessibility.md`
- `.agents/skills/phoenix-frontend/rules/components.md`
- `.agents/skills/phoenix-frontend/rules/relay.md`
- `.agents/skills/phoenix-frontend/rules/resize-svg-logo-assets.md`
- `.agents/skills/phoenix-frontend/rules/test-ids.md`
- `.agents/skills/phoenix-frontend/scripts/scale-svg.py`
- `.agents/skills/phoenix-github/SKILL.md`
- `.agents/skills/phoenix-integration-snippets/SKILL.md`
- `.agents/skills/phoenix-llms-txt/SKILL.md`
- `.agents/skills/phoenix-playwright-tests/EXAMPLES.md`
- `.agents/skills/phoenix-playwright-tests/SKILL.md`
- `.agents/skills/phoenix-playwright-tests/UI-COMPONENTS.md`
- `.agents/skills/phoenix-pr-screenshot/SKILL.md`
- `.agents/skills/phoenix-pxi-playwright/SKILL.md`
- `.agents/skills/phoenix-release-notes/SKILL.md`
- `.agents/skills/phoenix-release-please/SKILL.md`
- `.agents/skills/phoenix-rest-api/SKILL.md`
- `.agents/skills/phoenix-rest-api/references/endpoint-patterns.md`
- `.agents/skills/phoenix-rest-api/references/openapi-codegen.md`
- `.agents/skills/phoenix-rest-api/references/testing-patterns.md`
- `.agents/skills/phoenix-server/SKILL.md`
- `.agents/skills/phoenix-server/references/database-patterns.md`
- `.agents/skills/phoenix-server/references/graphql-patterns.md`
- `.agents/skills/phoenix-server/references/llm-trace-tests.md`
- `.agents/skills/phoenix-server/references/test-patterns.md`
- `.agents/skills/phoenix-skills-audit/SKILL.md`
- `.agents/skills/phoenix-skills-audit/evals/evals.json`
- `.agents/skills/phoenix-tracing/README.md`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `.agents/skills/README.md`
- `.agents/skills/agent-browser/SKILL.md`
- `.agents/skills/mintlify/SKILL.md`
- `.agents/skills/phoenix-cli/SKILL.md`
- `.agents/skills/phoenix-cli/references/axial-coding.md`
- `.agents/skills/phoenix-cli/references/open-coding.md`
- `.agents/skills/phoenix-design/SKILL.md`
- `.agents/skills/phoenix-design/rules/bem.md`
- `.agents/skills/phoenix-design/rules/counters.md`
- `.agents/skills/phoenix-design/rules/dialogs.md`
- `.agents/skills/phoenix-design/rules/error-display.md`
- `.agents/skills/phoenix-design/rules/icons.md`
- `.agents/skills/phoenix-design/rules/layout.md`
- `.agents/skills/phoenix-design/rules/tokens.md`
- `.agents/skills/phoenix-docs-gap-audit/SKILL.md`
- `.agents/skills/phoenix-evals-new-metric/SKILL.md`
- `.agents/skills/phoenix-evals/SKILL.md`
- `.agents/skills/phoenix-evals/references/axial-coding.md`
- `.agents/skills/phoenix-evals/references/common-mistakes-python.md`
- `.agents/skills/phoenix-evals/references/error-analysis-multi-turn.md`
- `.agents/skills/phoenix-evals/references/error-analysis.md`
- `.agents/skills/phoenix-evals/references/evaluate-dataframe-python.md`
- `.agents/skills/phoenix-evals/references/evaluators-code-python.md`
- `.agents/skills/phoenix-evals/references/evaluators-code-typescript.md`
- `.agents/skills/phoenix-evals/references/evaluators-custom-templates.md`
- `.agents/skills/phoenix-evals/references/evaluators-llm-python.md`
- `.agents/skills/phoenix-evals/references/evaluators-llm-typescript.md`
- `.agents/skills/phoenix-evals/references/evaluators-overview.md`
- `.agents/skills/phoenix-evals/references/evaluators-pre-built.md`
- `.agents/skills/phoenix-evals/references/evaluators-rag.md`
- `.agents/skills/phoenix-evals/references/experiments-datasets-python.md`
- `.agents/skills/phoenix-evals/references/experiments-datasets-typescript.md`
- `.agents/skills/phoenix-evals/references/experiments-overview.md`
- `.agents/skills/phoenix-evals/references/experiments-running-python.md`
- `.agents/skills/phoenix-evals/references/experiments-running-typescript.md`
- `.agents/skills/phoenix-evals/references/experiments-synthetic-python.md`
- `.agents/skills/phoenix-evals/references/experiments-synthetic-typescript.md`
- `.agents/skills/phoenix-evals/references/fundamentals-anti-patterns.md`
- `.agents/skills/phoenix-evals/references/fundamentals-model-selection.md`
- `.agents/skills/phoenix-evals/references/fundamentals.md`
- `.agents/skills/phoenix-evals/references/observe-sampling-python.md`
- `.agents/skills/phoenix-evals/references/observe-sampling-typescript.md`
- `.agents/skills/phoenix-evals/references/observe-tracing-setup.md`
- `.agents/skills/phoenix-evals/references/production-continuous.md`
- `.agents/skills/phoenix-evals/references/production-guardrails.md`
- `.agents/skills/phoenix-evals/references/production-overview.md`
- `.agents/skills/phoenix-evals/references/setup-python.md`
- `.agents/skills/phoenix-evals/references/setup-typescript.md`
- `.agents/skills/phoenix-evals/references/validation-evaluators-python.md`
- `.agents/skills/phoenix-evals/references/validation-evaluators-typescript.md`
- `.agents/skills/phoenix-evals/references/validation.md`
- `.agents/skills/phoenix-frontend/SKILL.md`
- `.agents/skills/phoenix-frontend/rules/accessibility.md`
- `.agents/skills/phoenix-frontend/rules/components.md`
- `.agents/skills/phoenix-frontend/rules/relay.md`
- `.agents/skills/phoenix-frontend/rules/resize-svg-logo-assets.md`
- `.agents/skills/phoenix-frontend/rules/test-ids.md`
- `.agents/skills/phoenix-frontend/scripts/scale-svg.py`
- `.agents/skills/phoenix-github/SKILL.md`
- `.agents/skills/phoenix-integration-snippets/SKILL.md`
- `.agents/skills/phoenix-llms-txt/SKILL.md`
- `.agents/skills/phoenix-playwright-tests/EXAMPLES.md`
- `.agents/skills/phoenix-playwright-tests/SKILL.md`
- `.agents/skills/phoenix-playwright-tests/UI-COMPONENTS.md`
- `.agents/skills/phoenix-pr-screenshot/SKILL.md`
- `.agents/skills/phoenix-pxi-playwright/SKILL.md`
- `.agents/skills/phoenix-release-notes/SKILL.md`
- `.agents/skills/phoenix-release-please/SKILL.md`
- `.agents/skills/phoenix-rest-api/SKILL.md`
- `.agents/skills/phoenix-rest-api/references/endpoint-patterns.md`
- `.agents/skills/phoenix-rest-api/references/openapi-codegen.md`
- `.agents/skills/phoenix-rest-api/references/testing-patterns.md`
- `.agents/skills/phoenix-server/SKILL.md`
- `.agents/skills/phoenix-server/references/database-patterns.md`
- `.agents/skills/phoenix-server/references/graphql-patterns.md`
- `.agents/skills/phoenix-server/references/llm-trace-tests.md`
- `.agents/skills/phoenix-server/references/test-patterns.md`
- `.agents/skills/phoenix-skills-audit/SKILL.md`
- `.agents/skills/phoenix-skills-audit/evals/evals.json`
- `.agents/skills/phoenix-tracing/README.md`
- `.agents/skills/phoenix-tracing/SKILL.md`
- `.agents/skills/phoenix-tracing/references/annotations-overview.md`
- `.agents/skills/phoenix-tracing/references/annotations-python.md`
- `.agents/skills/phoenix-tracing/references/annotations-typescript.md`
- `.agents/skills/phoenix-tracing/references/fundamentals-flattening.md`
- `.agents/skills/phoenix-tracing/references/fundamentals-overview.md`
- `.agents/skills/phoenix-tracing/references/fundamentals-required-attributes.md`
- `.agents/skills/phoenix-tracing/references/fundamentals-universal-attributes.md`
- `.agents/skills/phoenix-tracing/references/instrumentation-atif-python.md`
- `.agents/skills/phoenix-tracing/references/instrumentation-auto-python.md`
- `.agents/skills/phoenix-tracing/references/instrumentation-auto-typescript.md`
- `.agents/skills/phoenix-tracing/references/instrumentation-manual-python.md`
- `.agents/skills/phoenix-tracing/references/instrumentation-manual-typescript.md`
- `.agents/skills/phoenix-tracing/references/metadata-python.md`
- `.agents/skills/phoenix-tracing/references/metadata-typescript.md`
- `.agents/skills/phoenix-tracing/references/production-python.md`
- `.agents/skills/phoenix-tracing/references/production-typescript.md`
- `.agents/skills/phoenix-tracing/references/projects-python.md`
- `.agents/skills/phoenix-tracing/references/projects-typescript.md`
- `.agents/skills/phoenix-tracing/references/sessions-python.md`
- ... 40 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `app/__tests__/authFetch.test.ts`
- `app/src/agent/chat/__tests__/buildAgentChatRequestBody.test.ts`
- `app/src/agent/chat/__tests__/rewindMessages.test.ts`
- `app/src/agent/chat/__tests__/shouldSendAutomatically.test.ts`
- `app/src/agent/context/__tests__/deriveRouteContexts.test.ts`
- `app/src/agent/context/__tests__/selectors.test.ts`
- `app/src/agent/extensions/__tests__/capabilities.test.ts`
- `app/src/agent/extensions/__tests__/registryContract.test.ts`
- `app/src/agent/extensions/__tests__/toolRegistry.test.ts`
- `app/src/agent/quickActions/__tests__/quickActions.test.tsx`
- `app/src/agent/shared/__tests__/resolveNamesToIds.test.ts`
- `app/src/agent/shared/pendingApproval/__tests__/pendingApproval.test.ts`
- `app/src/agent/shared/pendingDatasetWrite/__tests__/pendingDatasetWrite.test.ts`
- `app/src/agent/skills/__tests__/requestedSkills.test.ts`
- `app/src/agent/slashCommands/__tests__/promptCommands.test.ts`
- `app/src/agent/slashCommands/__tests__/runPromptCommands.test.ts`
- `app/src/agent/slashCommands/__tests__/slashTokens.test.ts`
- `app/src/agent/tools/bash/__tests__/bashToolFilesystemPolicy.test.ts`
- `app/src/agent/tools/bash/__tests__/bashToolSchema.test.ts`
- `app/src/agent/tools/bash/__tests__/bashToolSessionRegistry.test.ts`
- `app/src/agent/tools/bash/context/__tests__/refreshAgentContext.test.ts`
- `app/src/agent/tools/batchSpanAnnotate/__tests__/batchSpanAnnotate.test.ts`
- `app/src/agent/tools/codeEvaluatorDraft/__tests__/codeEvaluatorDraft.test.ts`
- `app/src/agent/tools/codeEvaluatorDraft/__tests__/submitCodeEvaluatorDraft.test.ts`
- `app/src/agent/tools/createDataset/__tests__/createDataset.test.ts`
- `app/src/agent/tools/datasetEdit/__tests__/datasetEdit.test.ts`
- `app/src/agent/tools/datasetEvaluatorDefinition/__tests__/datasetEvaluatorDefinition.test.ts`
- `app/src/agent/tools/datasetEvaluatorForEdit/__tests__/datasetEvaluatorForEdit.test.ts`
- `app/src/agent/tools/datasetEvaluatorSelection/__tests__/datasetEvaluatorSelection.test.ts`
- `app/src/agent/tools/datasetExamples/__tests__/datasetExamples.test.ts`
- `app/src/agent/tools/datasetLabels/__tests__/datasetLabels.test.ts`
- `app/src/agent/tools/datasetSplits/__tests__/datasetSplits.test.ts`
- `app/src/agent/tools/getRouteInfo/__tests__/getRouteInfo.test.ts`
- `app/src/agent/tools/listDatasets/__tests__/listDatasets.test.ts`
- `app/src/agent/tools/llmEvaluatorDraft/__tests__/llmEvaluatorDraft.test.ts`
- `app/src/agent/tools/llmEvaluatorDraft/__tests__/submitLlmEvaluatorDraft.test.ts`
- `app/src/agent/tools/playgroundAppendedMessagesPath/__tests__/playgroundAppendedMessagesPath.test.ts`
- `app/src/agent/tools/playgroundExperimentRecording/__tests__/playgroundExperimentRecording.test.ts`
- `app/src/agent/tools/playgroundLoadDataset/__tests__/playgroundLoadDataset.test.ts`
- `app/src/agent/tools/playgroundModel/__tests__/playgroundModel.test.ts`
- `app/src/agent/tools/playgroundOutput/__tests__/playgroundOutput.test.ts`
- `app/src/agent/tools/playgroundPrompt/__tests__/playgroundPrompt.test.ts`
- `app/src/agent/tools/playgroundPromptTools/__tests__/playgroundPromptTools.test.ts`
- `app/src/agent/tools/playgroundRepetitions/__tests__/playgroundRepetitions.test.ts`
- `app/src/agent/tools/playgroundRun/__tests__/playgroundRun.test.ts`
- `app/src/agent/tools/playgroundSavePrompt/__tests__/playgroundSavePrompt.test.ts`
- `app/src/agent/tools/playgroundTemplateVariablesPath/__tests__/playgroundTemplateVariablesPath.test.ts`
- `app/src/agent/tools/playgroundVariableValues/__tests__/playgroundVariableValues.test.ts`
- `app/src/agent/tools/spansToDataset/__tests__/spansToDataset.test.ts`
- `app/src/components/agent/__tests__/AgentChatPanelView.test.tsx`
- `app/src/components/agent/__tests__/AgentChatWidget.test.tsx`
- `app/src/components/agent/__tests__/AgentFabPositioner.test.tsx`
- `app/src/components/agent/__tests__/AskUserToolDetails.test.tsx`
- `app/src/components/agent/__tests__/BashToolDetails.test.tsx`
- `app/src/components/agent/__tests__/BatchSpanAnnotateToolDetails.test.tsx`
- `app/src/components/agent/__tests__/Chat.test.tsx`
- `app/src/components/agent/__tests__/ChatSessionUsage.test.ts`
- `app/src/components/agent/__tests__/GenerativeUI.test.tsx`
- `app/src/components/agent/__tests__/LoadSkillToolDetails.test.tsx`
- `app/src/components/agent/__tests__/ResizableFloatingPanel.test.tsx`
- `app/src/components/agent/__tests__/SkillHighlightOverlay.test.ts`
- `app/src/components/agent/__tests__/ToolPartDisclosure.test.tsx`
- `app/src/components/agent/__tests__/agentCuratedModels.test.ts`
- `app/src/components/agent/__tests__/agentFabPositioning.test.ts`
- `app/src/components/agent/__tests__/generativeUICatalog.test.ts`
- `app/src/components/agent/__tests__/groupMessageParts.test.ts`
- `app/src/components/agent/__tests__/scrollAnchor.test.tsx`
- `app/src/components/agent/__tests__/usePromptSkillCommand.test.ts`
- `app/src/components/annotation/__tests__/optimizationUtils.test.ts`
- `app/src/components/chart/__tests__/InteractiveLegend.test.tsx`
- `app/src/components/chart/__tests__/getFormatFromSamplingInterval.test.ts`
- `app/src/components/chart/__tests__/timeTicks.test.ts`
- `app/src/components/code/__tests__/AttributesJSONBlock.test.ts`
- `app/src/components/core/content/__tests__/ExpandableContent.test.tsx`
- `app/src/components/core/overlay/__tests__/Drawer.test.ts`
- `app/src/components/core/overlay/__tests__/useDefaultDrawerSize.test.ts`
- `app/src/components/datetime/__tests__/TimeRangeContext.test.tsx`
- `app/src/components/datetime/__tests__/TimeRangeSelector.test.tsx`
- `app/src/components/datetime/__tests__/utils.test.ts`
- `app/src/components/evaluators/EvaluatorChatTemplate/__tests__/utils.test.ts`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/auto-label-external-issues.yaml`
- `.github/workflows/check-card-links.yml`
- `.github/workflows/check-dependabot-uv-version.yml`
- `.github/workflows/chromatic.yml`
- `.github/workflows/cla.yml`
- `.github/workflows/claude-code-review.yml`
- `.github/workflows/claude-docs-gap-audit.yml`
- `.github/workflows/claude-implement-issue.yml`
- `.github/workflows/claude-llms-txt.yml`
- `.github/workflows/claude-release-notes.yml`
- `.github/workflows/claude-skills-audit.yml`
- `.github/workflows/claude-weekly-deps-upgrade.yml`
- `.github/workflows/claude.yml`
- `.github/workflows/clean_up_caches.yml`
- `.github/workflows/collect-customer-issues.yaml`
- `.github/workflows/cost-sync.yml`
- `.github/workflows/docker-build-experimental.yml`
- `.github/workflows/docker-build-nightly.yml`
- `.github/workflows/docker-build-release.yml`
- `.github/workflows/generate-sitemap.yml`
- `.github/workflows/gh_pages.yml`
- `.github/workflows/helm-ci.yml`
- `.github/workflows/helm-release.yaml`
- `.github/workflows/openapi-schema.yaml`
- `.github/workflows/package-version-check.yml`
- `.github/workflows/playwright.yaml`
- `.github/workflows/publish.yaml`
- `.github/workflows/pull-requests.yaml`
- `.github/workflows/pxi-evals.yml`
- `.github/workflows/pypi-smoke-test.yml`
- `.github/workflows/python-CI.yml`
- `.github/workflows/python-all-platforms.yml`
- `.github/workflows/release.yml`
- `.github/workflows/sync-lockfile-release-pr.yml`
- `.github/workflows/typescript-CI.yml`
- `.github/workflows/typescript-packages-CI.yml`
- `.github/workflows/typescript-packages-publish-experimental.yml`
- `.github/workflows/typescript-packages-publish.yml`
- `.github/workflows/update-phoenix-package-versions.yml`
- `.github/workflows/weekly-skills-update.yml`
- `.github/workflows/zizmor.yml`
- `Dockerfile`
- `docker-compose.yml`
- `examples/computer_use_agent/Dockerfile`
- `internal_docs/vignettes/postgresql_tls/docker-compose.yaml`
- `js/examples/apps/cli-agent-starter-kit/docker-compose.yml`
- `js/examples/apps/phoenix-experiment-runner/docker-compose.yml`
- `scripts/docker/devops/Dockerfile`
- `scripts/docker/devops/docker-compose.yml`
- `scripts/docker/devops/oidc-server/Dockerfile`
- `scripts/docker/devops/smtp-server/Dockerfile`
- `scripts/docker/devops/vite-dev/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 1796 |
| .py | 1250 |
| .tsx | 1140 |
| .mdx | 689 |
| .md | 350 |
| .json | 150 |
| .ipynb | 128 |
| .yaml | 83 |
| .j2 | 78 |
| .yml | 61 |
| .txt | 44 |
| .gitignore | 27 |
| .html | 17 |
| .rst | 17 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `app/ 내부 책임 분리`
- `packages/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `.agents/skills/README.md 스펙/명령 의미`
- `.agents/skills/agent-browser/SKILL.md 스펙/명령 의미`
- `.agents/skills/mintlify/SKILL.md 스펙/명령 의미`
- `.agents/skills/phoenix-cli/SKILL.md 스펙/명령 의미`
- `.agents/skills/phoenix-cli/references/axial-coding.md 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `api_reference/requirements.txt 실행 스크립트와 패키지 경계`
- `app/package.json 실행 스크립트와 패키지 경계`
- `app/pnpm-lock.yaml 실행 스크립트와 패키지 경계`
- `app/pnpm-workspace.yaml 실행 스크립트와 패키지 경계`

