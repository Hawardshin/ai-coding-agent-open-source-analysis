# langfuse/langfuse 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/langfuse__langfuse |
| remote | https://github.com/langfuse/langfuse |
| HEAD | de483b3 (2026-06-12) perf(api): add redundant timestamp bound to scores v3 cursor for index pruning (LFE-10208) (#14230) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 3660 |
| dirs | 1176 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `✨ Core Features`, `📦 Deploy Langfuse`, `Langfuse Cloud`, `Self-Host Langfuse`, `🔌 Integrations`, `Main Integrations:`, `Packages integrated with Langfuse:`, `🚀 Quickstart`, `1️⃣ Create new project`, `2️⃣ Log your first LLM call`, `LANGFUSE_BASE_URL="https://us.cloud.langfuse.com" # 🇺🇸 US region`, `3️⃣ See traces in Langfuse`, `💭 Support`, `🤝 Contributing`, `🥇 License`, `Dependencies`, `⭐️ Star History`, `❤️ Open Source Projects Using Langfuse`

> <img width="2400" alt="hero b (1)" src="https //github.com/user attachments/assets/5810ae13 15d6 4b60 afd2 927adc501861" / <div align="center" <div <h3 <a href="https //cloud.langfuse.com" <strong Langfuse Cloud</strong </a · <a href="https //langfuse.com/docs/deployment/self host" <strong Self Host</strong </a · <a href="https //langfuse.com/demo" <strong Demo</strong </a </h3 </div <div <a href="https //langfuse.com/docs" <strong Docs</strong </a · <a href="https //langfuse.com/issues" <strong Report Bug</strong </a · <a href="https //langfuse.com/ideas" <strong Feature Request</strong </a · <a href="https //langfuse.com/changelog" <strong Changelog</strong </a · <a href="https //langfuse.com/roadmap" <strong Roadmap</strong </a · </div <br/ <span Langfuse uses <a href="https //github.com/orgs/langfuse/discussions" <strong GitHub Discussions</strong </a for Support and Feature Requests

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .codespellrc | file |
| .devcontainer | dir |
| .dockerignore | file |
| .env.dev-azure.example | file |
| .env.dev-oci.example | file |
| .env.dev-redis-cluster.example | file |
| .env.dev.example | file |
| .env.prod.example | file |
| .env.test.example | file |
| .github | dir |
| .gitignore | file |
| .husky | dir |
| .nvmrc | file |
| .prettierignore | file |
| .semgrepignore | file |
| .vscode | dir |
| AGENTS.md | other |
| CLAUDE.md | other |
| CONTRIBUTING.md | file |
| docker-compose.build.yml | file |
| docker-compose.dev-azure.yml | file |
| docker-compose.dev-redis-cluster.yml | file |
| docker-compose.dev.yml | file |
| docker-compose.yml | file |
| ee | dir |
| fern | dir |
| LICENSE | file |
| package.json | file |
| packages | dir |
| patches | dir |
| pnpm-lock.yaml | file |
| pnpm-workspace.yaml | file |
| prettier.config.cjs | file |
| README.cn.md | file |
| README.ja.md | file |
| README.kr.md | file |
| README.md | file |
| scripts | dir |
| SECURITY.md | file |
| specs | dir |
| turbo.json | file |
| vitest.workspace.ts | file |
| web | dir |
| worker | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| web/ | 2026 |
| packages/ | 1038 |
| worker/ | 332 |
| .agents/ | 126 |
| fern/ | 44 |
| .github/ | 30 |
| (root) | 30 |
| scripts/ | 14 |
| ee/ | 9 |
| .vscode/ | 3 |
| patches/ | 3 |
| .devcontainer/ | 2 |
| .husky/ | 2 |
| specs/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| packages/ | 1038 | preferred |
| web/ | 2026 | preferred |
| scripts/ | 14 | preferred |
| specs/ | 1 | preferred |
| web/src/ | 1920 | large |
| packages/shared/ | 1018 | large |
| web/src/features/ | 967 | large |
| packages/shared/src/ | 415 | large |
| packages/shared/prisma/ | 408 | large |
| web/src/components/ | 387 | large |
| worker/ | 332 | large |
| worker/src/ | 325 | large |
| web/src/__tests__/ | 192 | large |
| web/src/pages/ | 179 | large |
| packages/shared/clickhouse/ | 140 | large |
| .agents/ | 126 | large |
| worker/src/__tests__/ | 124 | large |
| .agents/skills/ | 122 | large |
| worker/src/features/ | 93 | large |
| web/src/ee/ | 79 | large |
| web/.agents/ | 69 | large |
| web/.agents/skills/ | 69 | large |
| packages/shared/scripts/ | 50 | large |
| fern/ | 44 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `.devcontainer/Dockerfile`
- `docker-compose.yml`
- `ee/package.json`
- `ee/tsconfig.json`
- `package.json`
- `packages/config-eslint/package.json`
- `packages/config-typescript/package.json`
- `packages/eslint-plugin/package.json`
- `packages/eslint-plugin/tsconfig.json`
- `packages/shared/package.json`
- `packages/shared/tsconfig.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `turbo.json`
- `web/.storybook/tsconfig.json`
- `web/Dockerfile`
- `web/package.json`
- `web/tsconfig.json`
- `worker/Dockerfile`
- `worker/package.json`
- `worker/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| ee/package.json | @langfuse/ee | build, build:check, typecheck, dev, lint, lint:fix | @langfuse/shared, @opentelemetry/api, https-proxy-agent, next, next-auth, zod |
| package.json | langfuse | agents:check, agents:sync, postinstall, preinstall, infra:dev:up, infra:dev:down, infra:dev:prune, db:generate, db:migrate, db:seed, db:seed:examples, nuke, seed, dx, dx-f, dx:skip-infra |  |
| packages/config-eslint/package.json | @repo/eslint-config |  | @eslint/js, @repo/eslint-plugin, eslint-config-next, eslint-config-prettier, eslint-config-turbo, eslint-plugin-only-warn, globals, typescript-eslint |
| packages/config-typescript/package.json | @repo/typescript-config |  |  |
| packages/eslint-plugin/package.json | @repo/eslint-plugin | test, build |  |
| packages/shared/package.json | @langfuse/shared | build, build:check, typecheck, dev, lint, lint:fix, test, db:migrate, db:push, db:reset, db:reset:test, db:deploy, db:seed, db:generate, db:seed:examples, db:seed:load | @anthropic-ai/tokenizer, @aws-sdk/client-cloudwatch, @aws-sdk/client-lambda, @aws-sdk/client-s3, @aws-sdk/client-sesv2, @aws-sdk/lib-storage, @aws-sdk/s3-request-presigner, @azure/storage-blob, @clickhouse/client, @google-cloud/storage, @langchain/anthropic, @langchain/aws, @langchain/core, @langchain/google |
| web/package.json | web | build, build:check, typecheck, dev, dev:http, lint, lint:fix, analyze, clean, start, test, test:in-source, test-client, test:watch, test:e2e, test:e2e:server | @ag-ui/client, @ag-ui/core, @ag-ui/mastra, @ai-sdk/amazon-bedrock, @anthropic-ai/tokenizer, @appsignal/opentelemetry-instrumentation-bullmq, @astral-sh/ruff-wasm-web, @aws-sdk/credential-providers, @baselime/trpc-opentelemetry-middleware, @codemirror/lang-javascript, @codemirror/lang-json, @codemirror/lang-python, @codemirror/language, @codemirror/lint |
| worker/package.json | worker | test, test:exclude-llm-connections, test:llm-connections-only, coverage, start, build, build:check, typecheck, dev, lint, lint:fix, refill-ingestion-events, refill-billing-event, refill-queue-event | @anthropic-ai/tokenizer, @appsignal/opentelemetry-instrumentation-bullmq, @aws-sdk/client-s3, @langfuse/shared, @opentelemetry/api, @opentelemetry/exporter-trace-otlp-proto, @opentelemetry/instrumentation, @opentelemetry/instrumentation-aws-sdk, @opentelemetry/instrumentation-express, @opentelemetry/instrumentation-http, @opentelemetry/instrumentation-ioredis, @opentelemetry/instrumentation-winston, @opentelemetry/resource-detector-aws, @opentelemetry/resource-detector-container |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.agents/README.md`
- `.agents/skills/clickhouse-best-practices/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `ee/README.md`
- `packages/shared/scripts/seeder/README.md`
- `packages/shared/scripts/seeder/utils/README.md`
- `packages/shared/scripts/seeder/utils/framework-traces/README.md`
- `packages/shared/src/features/scores/interfaces/README.md`
- `packages/shared/src/server/instrumentation/README.md`
- `packages/shared/src/server/repositories/README.md`
- `web/src/components/design-system/README.md`
- `web/src/components/layouts/README.md`
- `web/src/components/table/peek/README.md`
- `web/src/components/table/table-view-presets/README.md`
- `web/src/components/ui/AdvancedJsonViewer/README.md`
- `web/src/ee/README.md`
- `web/src/ee/features/billing/README.md`
- `web/src/features/README.md`
- `web/src/features/batch-exports/README.md`
- `web/src/features/datasets/server/actions/README.md`
- `web/src/features/entitlements/README.md`
- `web/src/features/feature-flags/README.md`
- `web/src/features/mcp/README.md`
- `web/src/features/prompts/README.md`
- `web/src/features/prompts/server/actions/README.md`
- `web/src/features/public-api/README.md`
- `web/src/features/score-analytics/README.md`
- `web/src/features/slack/README.md`
- `web/src/features/telemetry/README.md`
- `web/src/features/tracing-tables/README.md`
- `web/src/pages/api/billing/README.md`
- `web/src/pages/api/public/otel/otlp-proto/README.md`
- `web/src/utils/chatml/README.md`
- `worker/src/__tests__/chatml/framework-traces/README.md`
- `worker/src/backgroundMigrations/README.md`
- `worker/src/scripts/refillQueueEvent/README.md`
- `worker/src/scripts/replayIngestionEvents/README.md`
- `worker/src/scripts/replayIngestionEventsV2/README.md`
- `worker/src/scripts/verifyClickhouseRecords/README.md`

### 에이전트 지침 후보

- `.agents/AGENTS.md`
- `.agents/skills/add-model-price/SKILL.md`
- `.agents/skills/add-model-price/references/match-patterns.md`
- `.agents/skills/add-model-price/references/provider-sources-and-price-keys.md`
- `.agents/skills/add-model-price/references/schema-and-tiers.md`
- `.agents/skills/add-model-price/references/workflow-and-validation.md`
- `.agents/skills/add-model-price/scripts/test-match-pattern.mjs`
- `.agents/skills/add-model-price/scripts/validate-pricing-file.mjs`
- `.agents/skills/agent-setup-maintenance/SKILL.md`
- `.agents/skills/analyze-cloud-costs/SKILL.md`
- `.agents/skills/analyze-cloud-costs/agents/openai.yaml`
- `.agents/skills/analyze-cloud-costs/references/cost-marts.md`
- `.agents/skills/backend-dev-guidelines/SKILL.md`
- `.agents/skills/backend-dev-guidelines/references/architecture-overview.md`
- `.agents/skills/backend-dev-guidelines/references/configuration.md`
- `.agents/skills/backend-dev-guidelines/references/database-patterns.md`
- `.agents/skills/backend-dev-guidelines/references/middleware-guide.md`
- `.agents/skills/backend-dev-guidelines/references/routing-and-controllers.md`
- `.agents/skills/backend-dev-guidelines/references/services-and-repositories.md`
- `.agents/skills/backend-dev-guidelines/references/testing-guide.md`
- `.agents/skills/changelog-writing/SKILL.md`
- `.agents/skills/clickhouse-best-practices/README.md`
- `.agents/skills/clickhouse-best-practices/SKILL.md`
- `.agents/skills/clickhouse-best-practices/rules/_sections.md`
- `.agents/skills/clickhouse-best-practices/rules/_template.md`
- `.agents/skills/clickhouse-best-practices/rules/insert-async-small-batches.md`
- `.agents/skills/clickhouse-best-practices/rules/insert-batch-size.md`
- `.agents/skills/clickhouse-best-practices/rules/insert-format-native.md`
- `.agents/skills/clickhouse-best-practices/rules/insert-mutation-avoid-delete.md`
- `.agents/skills/clickhouse-best-practices/rules/insert-mutation-avoid-update.md`
- `.agents/skills/clickhouse-best-practices/rules/insert-optimize-avoid-final.md`
- `.agents/skills/clickhouse-best-practices/rules/query-index-skipping-indices.md`
- `.agents/skills/clickhouse-best-practices/rules/query-join-choose-algorithm.md`
- `.agents/skills/clickhouse-best-practices/rules/query-join-consider-alternatives.md`
- `.agents/skills/clickhouse-best-practices/rules/query-join-filter-before.md`
- `.agents/skills/clickhouse-best-practices/rules/query-join-null-handling.md`
- `.agents/skills/clickhouse-best-practices/rules/query-join-use-any.md`
- `.agents/skills/clickhouse-best-practices/rules/query-mv-incremental.md`
- `.agents/skills/clickhouse-best-practices/rules/query-mv-refreshable.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-json-when-to-use.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-partition-lifecycle.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-partition-low-cardinality.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-partition-query-tradeoffs.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-partition-start-without.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-pk-cardinality-order.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-pk-filter-on-orderby.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-pk-plan-before-creation.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-pk-prioritize-filters.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-types-avoid-nullable.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-types-enum.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-types-lowcardinality.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-types-minimize-bitwidth.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-types-native-types.md`
- `.agents/skills/code-review/SKILL.md`
- `.agents/skills/code-review/references/review-checklist.md`
- `.agents/skills/datadog-query-recipes/SKILL.md`
- `.agents/skills/datadog-query-recipes/agents/openai.yaml`
- `.agents/skills/datadog-query-recipes/references/environments.md`
- `.agents/skills/datadog-query-recipes/references/public-api-tenant-usage.md`
- `.agents/skills/datadog-query-recipes/references/queue-consumers.md`
- `.agents/skills/debug-issue-with-datadog/SKILL.md`
- `.agents/skills/debug-issue-with-datadog/references/datadog-playbook.md`
- `.agents/skills/debug-issue-with-datadog/references/intake.md`
- `.agents/skills/debug-issue-with-datadog/references/output-template.md`
- `.agents/skills/debug-issue-with-datadog/references/repo-debug-map.md`
- `.agents/skills/frontend-browser-review/SKILL.md`
- `.agents/skills/frontend-large-feature-architecture/SKILL.md`
- `.agents/skills/frontend-large-feature-architecture/agents/openai.yaml`
- `.agents/skills/frontend-large-feature-architecture/references/big-feature-rules.md`
- `.agents/skills/frontend-large-feature-architecture/references/controller-migration.md`
- `.agents/skills/frontend-large-feature-architecture/references/feature-readmes.md`
- `.agents/skills/frontend-large-feature-architecture/references/local-feature-state.md`
- `.agents/skills/frontend-large-feature-architecture/references/virtualized-lists.md`
- `.agents/skills/git-workflow/SKILL.md`
- `.agents/skills/linear-bug-triage/SKILL.md`
- `.agents/skills/linear-bug-triage/agents/openai.yaml`
- `.agents/skills/pnpm-upgrade-package/SKILL.md`
- `.agents/skills/pnpm-upgrade-package/agents/openai.yaml`
- `.agents/skills/pnpm-upgrade-package/scripts/check-release-age-window.mjs`
- `.agents/skills/pnpm-upgrade-package/scripts/lib/workspace-utils.mjs`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `.agents/skills/add-model-price/SKILL.md`
- `.agents/skills/add-model-price/references/match-patterns.md`
- `.agents/skills/add-model-price/references/provider-sources-and-price-keys.md`
- `.agents/skills/add-model-price/references/schema-and-tiers.md`
- `.agents/skills/add-model-price/references/workflow-and-validation.md`
- `.agents/skills/add-model-price/scripts/test-match-pattern.mjs`
- `.agents/skills/add-model-price/scripts/validate-pricing-file.mjs`
- `.agents/skills/agent-setup-maintenance/SKILL.md`
- `.agents/skills/analyze-cloud-costs/SKILL.md`
- `.agents/skills/analyze-cloud-costs/agents/openai.yaml`
- `.agents/skills/analyze-cloud-costs/references/cost-marts.md`
- `.agents/skills/backend-dev-guidelines/SKILL.md`
- `.agents/skills/backend-dev-guidelines/references/architecture-overview.md`
- `.agents/skills/backend-dev-guidelines/references/configuration.md`
- `.agents/skills/backend-dev-guidelines/references/database-patterns.md`
- `.agents/skills/backend-dev-guidelines/references/middleware-guide.md`
- `.agents/skills/backend-dev-guidelines/references/routing-and-controllers.md`
- `.agents/skills/backend-dev-guidelines/references/services-and-repositories.md`
- `.agents/skills/backend-dev-guidelines/references/testing-guide.md`
- `.agents/skills/changelog-writing/SKILL.md`
- `.agents/skills/clickhouse-best-practices/README.md`
- `.agents/skills/clickhouse-best-practices/SKILL.md`
- `.agents/skills/clickhouse-best-practices/rules/_sections.md`
- `.agents/skills/clickhouse-best-practices/rules/_template.md`
- `.agents/skills/clickhouse-best-practices/rules/insert-async-small-batches.md`
- `.agents/skills/clickhouse-best-practices/rules/insert-batch-size.md`
- `.agents/skills/clickhouse-best-practices/rules/insert-format-native.md`
- `.agents/skills/clickhouse-best-practices/rules/insert-mutation-avoid-delete.md`
- `.agents/skills/clickhouse-best-practices/rules/insert-mutation-avoid-update.md`
- `.agents/skills/clickhouse-best-practices/rules/insert-optimize-avoid-final.md`
- `.agents/skills/clickhouse-best-practices/rules/query-index-skipping-indices.md`
- `.agents/skills/clickhouse-best-practices/rules/query-join-choose-algorithm.md`
- `.agents/skills/clickhouse-best-practices/rules/query-join-consider-alternatives.md`
- `.agents/skills/clickhouse-best-practices/rules/query-join-filter-before.md`
- `.agents/skills/clickhouse-best-practices/rules/query-join-null-handling.md`
- `.agents/skills/clickhouse-best-practices/rules/query-join-use-any.md`
- `.agents/skills/clickhouse-best-practices/rules/query-mv-incremental.md`
- `.agents/skills/clickhouse-best-practices/rules/query-mv-refreshable.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-json-when-to-use.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-partition-lifecycle.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-partition-low-cardinality.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-partition-query-tradeoffs.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-partition-start-without.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-pk-cardinality-order.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-pk-filter-on-orderby.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-pk-plan-before-creation.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-pk-prioritize-filters.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-types-avoid-nullable.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-types-enum.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-types-lowcardinality.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-types-minimize-bitwidth.md`
- `.agents/skills/clickhouse-best-practices/rules/schema-types-native-types.md`
- `.agents/skills/code-review/SKILL.md`
- `.agents/skills/code-review/references/review-checklist.md`
- `.agents/skills/datadog-query-recipes/SKILL.md`
- `.agents/skills/datadog-query-recipes/agents/openai.yaml`
- `.agents/skills/datadog-query-recipes/references/environments.md`
- `.agents/skills/datadog-query-recipes/references/public-api-tenant-usage.md`
- `.agents/skills/datadog-query-recipes/references/queue-consumers.md`
- `.agents/skills/debug-issue-with-datadog/SKILL.md`
- `.agents/skills/debug-issue-with-datadog/references/datadog-playbook.md`
- `.agents/skills/debug-issue-with-datadog/references/intake.md`
- `.agents/skills/debug-issue-with-datadog/references/output-template.md`
- `.agents/skills/debug-issue-with-datadog/references/repo-debug-map.md`
- `.agents/skills/frontend-browser-review/SKILL.md`
- `.agents/skills/frontend-large-feature-architecture/SKILL.md`
- `.agents/skills/frontend-large-feature-architecture/agents/openai.yaml`
- `.agents/skills/frontend-large-feature-architecture/references/big-feature-rules.md`
- `.agents/skills/frontend-large-feature-architecture/references/controller-migration.md`
- `.agents/skills/frontend-large-feature-architecture/references/feature-readmes.md`
- `.agents/skills/frontend-large-feature-architecture/references/local-feature-state.md`
- `.agents/skills/frontend-large-feature-architecture/references/virtualized-lists.md`
- `.agents/skills/git-workflow/SKILL.md`
- `.agents/skills/linear-bug-triage/SKILL.md`
- `.agents/skills/linear-bug-triage/agents/openai.yaml`
- `.agents/skills/pnpm-upgrade-package/SKILL.md`
- `.agents/skills/pnpm-upgrade-package/agents/openai.yaml`
- `.agents/skills/pnpm-upgrade-package/scripts/check-release-age-window.mjs`
- `.agents/skills/pnpm-upgrade-package/scripts/lib/workspace-utils.mjs`
- `.agents/skills/security-review/SKILL.md`
- `.agents/skills/security-review/references/checklist.md`
- `.agents/skills/security-review/references/outbound-url-validation.md`
- `.agents/skills/seed-test-data/SKILL.md`
- `.agents/skills/seed-test-data/agents/openai.yaml`
- `.agents/skills/skill-creator/SKILL.md`
- `.agents/skills/skill-creator/agents/openai.yaml`
- `.agents/skills/skill-creator/assets/skill-creator-small.svg`
- `.agents/skills/skill-creator/assets/skill-creator.png`
- `.agents/skills/skill-creator/license.txt`
- `.agents/skills/skill-creator/references/openai_yaml.md`
- `.agents/skills/skill-creator/scripts/generate_openai_yaml.py`
- `.agents/skills/skill-creator/scripts/init_skill.py`
- `.agents/skills/skill-creator/scripts/quick_validate.py`
- `.agents/skills/storybook/SKILL.md`
- `.agents/skills/turborepo/SKILL.md`
- `.agents/skills/turborepo/command/turborepo.md`
- `.agents/skills/turborepo/references/best-practices/RULE.md`
- `.agents/skills/turborepo/references/best-practices/dependencies.md`
- `.agents/skills/turborepo/references/best-practices/packages.md`
- `.agents/skills/turborepo/references/best-practices/structure.md`
- ... 40 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `packages/eslint-plugin/src/rules/no-in-source-vitest.test.ts`
- `packages/eslint-plugin/src/rules/no-tailwind-overflow-scroll.test.ts`
- `packages/shared/src/domain/automations.test.ts`
- `packages/shared/src/features/monitors/isValidQuery.test.ts`
- `packages/shared/src/features/monitors/isValidThresholdOrder.test.ts`
- `packages/shared/src/features/monitors/processor/applyStateMachine.test.ts`
- `packages/shared/src/features/monitors/processor/buildMonitorAlertSlackMessage.test.ts`
- `packages/shared/src/features/monitors/processor/buildPermalink.test.ts`
- `packages/shared/src/features/monitors/processor/computeSeverity.test.ts`
- `packages/shared/src/features/monitors/processor/renderAlertMessage.test.ts`
- `packages/shared/src/features/monitors/scheduler/types.test.ts`
- `packages/shared/src/features/monitors/service/helpers.test.ts`
- `packages/shared/src/features/monitors/service/service.test.ts`
- `packages/shared/src/features/monitors/service/types.test.ts`
- `packages/shared/src/features/monitors/types.test.ts`
- `packages/shared/src/features/query/server/queryBuilder.intervalBucketing.test.ts`
- `packages/shared/src/server/automations.test.ts`
- `packages/shared/src/server/clickhouse/client.test.ts`
- `packages/shared/src/server/clickhouse/compatibility.test.ts`
- `packages/shared/src/server/evals/awsLambdaCodeEvalDispatcher.test.ts`
- `packages/shared/src/server/queues.test.ts`
- `packages/shared/src/server/repositories/traces.test.ts`
- `packages/shared/src/server/utils/compareVersions.test.ts`
- `web/src/__e2e__/auth.spec.ts`
- `web/src/__e2e__/create-project.spec.ts`
- `worker/src/__tests__/applyFieldMapping.test.ts`
- `worker/src/__tests__/backfillValidToForDatasetItems.test.ts`
- `worker/src/__tests__/batchAction.test.ts`
- `worker/src/__tests__/batchDataRetentionCleaner.test.ts`
- `worker/src/__tests__/batchExport.test.ts`
- `worker/src/__tests__/batchProjectBlobCleaner.test.ts`
- `worker/src/__tests__/batchProjectCleaner.test.ts`
- `worker/src/__tests__/batchProjectMediaCleaner.test.ts`
- `worker/src/__tests__/batchTraceDeletionCleaner.test.ts`
- `worker/src/__tests__/blobStorageIntegrationProcessing.test.ts`
- `worker/src/__tests__/blockEvaluatorConfigs.unit.test.ts`
- `worker/src/__tests__/bufferedStreamUploader.test.ts`
- `worker/src/__tests__/bullmqVersionCheckOptions.test.ts`
- `worker/src/__tests__/chatml/adapters/aisdk.test.ts`
- `worker/src/__tests__/chatml/adapters/gemini.test.ts`
- `worker/src/__tests__/chatml/adapters/generic.test.ts`
- `worker/src/__tests__/chatml/adapters/langgraph.test.ts`
- `worker/src/__tests__/chatml/adapters/microsoft-agent.test.ts`
- `worker/src/__tests__/chatml/adapters/openai.test.ts`
- `worker/src/__tests__/chatml/adapters/pydantic-ai.test.ts`
- `worker/src/__tests__/chatml/adapters/semantic-kernel.test.ts`
- `worker/src/__tests__/chatml/integration.test.ts`
- `worker/src/__tests__/dataRetentionProcessing.test.ts`
- `worker/src/__tests__/deletedMaskCleaner.test.ts`
- `worker/src/__tests__/encryption.test.ts`
- `worker/src/__tests__/enrichObservationStream.unit.test.ts`
- `worker/src/__tests__/evalService.filtering.test.ts`
- `worker/src/__tests__/evalService.test.ts`
- `worker/src/__tests__/experimentsService.test.ts`
- `worker/src/__tests__/extractToolsBackend.test.ts`
- `worker/src/__tests__/fetchLLMCompletion-bedrock-auth.test.ts`
- `worker/src/__tests__/fetchLLMCompletionErrors.test.ts`
- `worker/src/__tests__/fetchLLMCompletionReasoning.test.ts`
- `worker/src/__tests__/fetchLLMCompletionTimeout.test.ts`
- `worker/src/__tests__/getInternalTracingHandler.test.ts`
- `worker/src/__tests__/getQueuePrefix.test.ts`
- `worker/src/__tests__/googleSecureApiClient.test.ts`
- `worker/src/__tests__/inMemoryFilterService.test.ts`
- `worker/src/__tests__/ingestionMasking.test.ts`
- `worker/src/__tests__/ip-blocking.test.ts`
- `worker/src/__tests__/llm-base-url-validation.test.ts`
- `worker/src/__tests__/llmConnections.test.ts`
- `worker/src/__tests__/localCache.test.ts`
- `worker/src/__tests__/mediaRetentionCleaner.test.ts`
- `worker/src/__tests__/mixpanelIntegrationProjectJob.test.ts`
- `worker/src/__tests__/mixpanelTransformers.test.ts`
- `worker/src/__tests__/modelMatch.test.ts`
- `worker/src/__tests__/monitorProcessor.test.ts`
- `worker/src/__tests__/monitorProcessorScalarQuery.test.ts`
- `worker/src/__tests__/monitorScheduler.test.ts`
- `worker/src/__tests__/monitorWorkerIntegration.test.ts`
- `worker/src/__tests__/observation-retry.test.ts`
- `worker/src/__tests__/outbound-connection-validation.test.ts`
- `worker/src/__tests__/patchLLMToolAndLLLMSchemaAuditLogs.test.ts`
- `worker/src/__tests__/periodicRunner.test.ts`
- ... 40 more

### CI/Docker 후보

- `.devcontainer/Dockerfile`
- `.github/workflows/_deploy_ecs_service.yml`
- `.github/workflows/ci.yml.template`
- `.github/workflows/cla-assistant.yml`
- `.github/workflows/claude-code-security-review.yml`
- `.github/workflows/claude-review-maintainer-prs.yml`
- `.github/workflows/codeql.yml`
- `.github/workflows/codespell.yml`
- `.github/workflows/dependabot-rebase-stale.yml`
- `.github/workflows/deploy.yml`
- `.github/workflows/licencecheck.yml`
- `.github/workflows/pipeline.yml`
- `.github/workflows/promote-main-to-production.yml`
- `.github/workflows/release.yml`
- `.github/workflows/sdk-api-spec.yml`
- `.github/workflows/semgrep.yml`
- `.github/workflows/snyk-web.yml`
- `.github/workflows/snyk-worker.yml`
- `.github/workflows/stale_issues.yml`
- `.github/workflows/storybook-preview.yml`
- `.github/workflows/validate-pr-title.yml`
- `.github/workflows/zizmor.yml`
- `docker-compose.build.yml`
- `docker-compose.dev-azure.yml`
- `docker-compose.dev-redis-cluster.yml`
- `docker-compose.dev.yml`
- `docker-compose.yml`
- `web/Dockerfile`
- `worker/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 1794 |
| .tsx | 827 |
| .sql | 542 |
| .md | 228 |
| .json | 84 |
| .yml | 78 |
| .sh | 15 |
| .mjs | 12 |
| .svg | 10 |
| .yaml | 10 |
| .png | 9 |
| .example | 6 |
| .js | 5 |
| .py | 5 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `packages/ 내부 책임 분리`
- `web/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `specs/ 내부 책임 분리`
- `web/src/ 내부 책임 분리`
- `.agents/skills/add-model-price/SKILL.md 스펙/명령 의미`
- `.agents/skills/add-model-price/references/match-patterns.md 스펙/명령 의미`
- `.agents/skills/add-model-price/references/provider-sources-and-price-keys.md 스펙/명령 의미`
- `.agents/skills/add-model-price/references/schema-and-tiers.md 스펙/명령 의미`
- `.agents/skills/add-model-price/references/workflow-and-validation.md 스펙/명령 의미`
- `.devcontainer/Dockerfile 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `ee/package.json 실행 스크립트와 패키지 경계`
- `ee/tsconfig.json 실행 스크립트와 패키지 경계`
- `package.json 실행 스크립트와 패키지 경계`

