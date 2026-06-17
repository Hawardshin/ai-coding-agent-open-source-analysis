# agenta-ai/agenta 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/agenta-ai__agenta |
| remote | https://github.com/agenta-ai/agenta |
| HEAD | a2e9150 (2026-06-12) Merge pull request #4651 from Agenta-AI/all-contributors/add-unfitcoder101 |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 9270 |
| dirs | 1925 |
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
- 주요 heading: `What is Agenta?`, `Core Features`, `🧪 Prompt Management & Prompt Engineering`, `📊 LLM Evaluation`, `📡 LLM Observability`, `📸 Screenshots`, `🚀 Getting Started`, `Agenta Cloud (Recommended):`, `Self-hosting Agenta`, `💬 Community`, `🧰 Support`, `🤝 Contribute`, `⭐ Star Agenta`, `Contributors ✨`, `Disabling Anonymized Tracking`

> <p align="center" <a href="https //agenta.ai?utm source=github&utm medium=referral&utm campaign=readme" <picture <source width="275" media="(prefers color scheme dark)" srcset="https //github.com/user attachments/assets/97e31bfc b1fc 4d19 b443 5aedf6029017" <source width="275" media="(prefers color scheme light)" srcset="https //github.com/user attachments/assets/fdc5f23f 2095 4cfc 9511 14c6851c1262" <img alt="Shows the logo of agenta" src="https //github.com/user attachments/assets/fdc5f23f 2095 4cfc 9511 14c6851c1262" </picture </a <div align="center" <strong <h1 The Open source LLMOps Platform </h1 </strong Build reliable LLM applications faster with integrated prompt management, evaluation, and observability. </div <br / <div align="center" <a href="https //cloud.agenta.ai?utm source=github&utm medium=referral&utm campaign=readme" <picture <source media="(prefers color scheme dark)" 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .all-contributorsrc | file |
| .better-commits.json | file |
| .claude | dir |
| .dockerignore | file |
| .github | dir |
| .gitignore | file |
| .gitleaks.toml | file |
| .gitleaksignore | file |
| .husky | dir |
| .mailmap | file |
| .pre-commit-config.yaml | file |
| agents | dir |
| AGENTS.md | file |
| api | dir |
| CLAUDE.md | file |
| clients | dir |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| docs | dir |
| ee | dir |
| examples | dir |
| hooks | dir |
| hosting | dir |
| LICENSE | file |
| README.md | file |
| ruff.toml | file |
| sdks | dir |
| SECURITY.md | file |
| services | dir |
| web | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| web/ | 4020 |
| docs/ | 2615 |
| api/ | 1114 |
| clients/ | 772 |
| sdks/ | 337 |
| examples/ | 159 |
| hosting/ | 90 |
| services/ | 66 |
| agents/ | 41 |
| .github/ | 26 |
| (root) | 16 |
| .claude/ | 6 |
| .agents/ | 3 |
| .husky/ | 3 |
| ee/ | 1 |
| hooks/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| web/ | 4020 | preferred |
| docs/ | 2615 | preferred |
| examples/ | 159 | preferred |
| agents/ | 41 | preferred |
| web/packages/ | 2310 | large |
| docs/docs/ | 1740 | large |
| docs/docs/reference/ | 1524 | large |
| web/oss/ | 1399 | large |
| web/oss/src/ | 1292 | large |
| web/packages/agenta-api-client/ | 1116 | large |
| api/ | 1114 | large |
| api/oss/ | 831 | large |
| clients/ | 772 | large |
| clients/python/ | 770 | large |
| clients/python/agenta_client/ | 766 | large |
| api/oss/src/ | 382 | large |
| web/packages/agenta-ui/ | 371 | large |
| sdks/ | 337 | large |
| sdks/python/ | 337 | large |
| api/oss/tests/ | 330 | large |
| web/packages/agenta-entities/ | 330 | large |
| api/ee/ | 267 | large |
| docs/static/ | 255 | large |
| docs/design/ | 250 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `api/ee/tests/manual/evaluations/sdk/requirements.txt`
- `api/pyproject.toml`
- `api/uv.lock`
- `clients/python/pyproject.toml`
- `clients/python/uv.lock`
- `docs/package.json`
- `docs/pnpm-lock.yaml`
- `docs/tsconfig.json`
- `examples/node/observability-opentelemetry/package.json`
- `examples/node/observability-vercel-ai/package.json`
- `examples/python/RAG_QA_chatbot/frontend/next.config.js`
- `examples/python/RAG_QA_chatbot/frontend/package.json`
- `examples/python/RAG_QA_chatbot/frontend/tsconfig.json`
- `examples/python/RAG_QA_chatbot/pyproject.toml`
- `examples/python/custom_workflows/ai-code-reviewer/requirements.txt`
- `examples/python/custom_workflows/chain_of_prompts/requirements.txt`
- `hosting/railway/oss/alembic/Dockerfile`
- `hosting/railway/oss/api/Dockerfile`
- `hosting/railway/oss/cron/Dockerfile`
- `hosting/railway/oss/gateway/Dockerfile`
- `hosting/railway/oss/redis/Dockerfile`
- `hosting/railway/oss/services/Dockerfile`
- `hosting/railway/oss/web/Dockerfile`
- `hosting/railway/oss/worker-evaluations/Dockerfile`
- `hosting/railway/oss/worker-events/Dockerfile`
- `hosting/railway/oss/worker-tracing/Dockerfile`
- `hosting/railway/oss/worker-webhooks/Dockerfile`
- `sdks/python/oss/tests/legacy/annotations/requirements.txt`
- `sdks/python/oss/tests/legacy/custom_workflows/requirements.txt`
- `sdks/python/oss/tests/legacy/observability_sdk/integrations/instructor/requirements.txt`
- `sdks/python/oss/tests/legacy/observability_sdk/integrations/langchain/requirements.txt`
- `sdks/python/oss/tests/legacy/observability_sdk/integrations/litellm/requirements.txt`
- `sdks/python/oss/tests/legacy/observability_sdk/integrations/llama_index/requirements.txt`
- `sdks/python/oss/tests/legacy/observability_sdk/integrations/openai/requirements.txt`
- `sdks/python/oss/tests/legacy/observability_sdk/sanity_check/requirements.txt`
- `sdks/python/oss/tests/legacy/redact/requirements.txt`
- `sdks/python/oss/tests/legacy/sdk_routing/assets/greetings/requirements.txt`
- `sdks/python/oss/tests/legacy/sdk_tests/management_sdk/manual_tests/apps_with_new_sdk/requirements.txt`
- `sdks/python/oss/tests/legacy/sdk_tests/management_sdk/manual_tests/apps_with_old_sdk/requirements.txt`
- `sdks/python/pyproject.toml`
- `sdks/python/uv.lock`
- `services/pyproject.toml`
- `services/uv.lock`
- `web/_reference/agenta-sdk-ai/package.json`
- `web/_reference/agenta-sdk-ai/tsconfig.json`
- `web/_reference/agenta-sdk-mastra/package.json`
- `web/_reference/agenta-sdk-mastra/tsconfig.json`
- `web/_reference/agenta-sdk-tracing/package.json`
- `web/_reference/agenta-sdk-tracing/tsconfig.json`
- `web/_reference/agenta-sdk/package.json`
- `web/_reference/agenta-sdk/tsconfig.json`
- `web/ee/package.json`
- `web/ee/tsconfig.json`
- `web/oss/package.json`
- `web/oss/tsconfig.json`
- `web/package.json`
- `web/packages/agenta-annotation-ui/package.json`
- `web/packages/agenta-annotation-ui/tsconfig.json`
- `web/packages/agenta-annotation/package.json`
- `web/packages/agenta-annotation/tsconfig.json`
- `web/packages/agenta-api-client/package.json`
- `web/packages/agenta-api-client/tsconfig.json`
- `web/packages/agenta-entities/package.json`
- `web/packages/agenta-entities/tsconfig.json`
- `web/packages/agenta-entity-ui/package.json`
- `web/packages/agenta-entity-ui/tsconfig.json`
- `web/packages/agenta-playground-ui/package.json`
- `web/packages/agenta-playground-ui/tsconfig.json`
- `web/packages/agenta-playground/package.json`
- `web/packages/agenta-playground/tsconfig.json`
- `web/packages/agenta-sdk/package.json`
- `web/packages/agenta-sdk/tsconfig.json`
- `web/packages/agenta-shared/package.json`
- `web/packages/agenta-shared/tsconfig.json`
- `web/packages/agenta-ui/package.json`
- `web/packages/agenta-ui/tsconfig.json`
- `web/pnpm-lock.yaml`
- `web/pnpm-workspace.yaml`
- `web/tests/package.json`
- `web/tests/tsconfig.json`
- ... 2 more

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| docs/package.json | doc | docusaurus, start, start:prod, build, build:dev, swizzle, deploy, clear, serve, write-translations, write-heading-ids, gen-api-docs, clean-api-docs, gen-api-docs:version, clean-api-docs:version, update-api-docs | @cloudflare/stream-react, @docsearch/react, @docusaurus/core, @docusaurus/plugin-client-redirects, @docusaurus/plugin-content-blog, @docusaurus/plugin-content-docs, @docusaurus/plugin-ideal-image, @docusaurus/preset-classic, @docusaurus/theme-common, @docusaurus/theme-search-algolia, @mdx-js/react, clsx, docusaurus-plugin-image-zoom, docusaurus-plugin-llms-txt |
| examples/node/observability-opentelemetry/package.json | agenta-opentelemetry-quickstart | start | @arizeai/openinference-instrumentation-openai, @arizeai/openinference-semantic-conventions, @opentelemetry/api, @opentelemetry/exporter-trace-otlp-proto, @opentelemetry/instrumentation, @opentelemetry/resources, @opentelemetry/sdk-trace-base, @opentelemetry/sdk-trace-node, @opentelemetry/semantic-conventions, dotenv, openai |
| examples/node/observability-vercel-ai/package.json | agenta-vercel-ai-observability | start | @ai-sdk/openai, @opentelemetry/exporter-trace-otlp-proto, @opentelemetry/resources, @opentelemetry/sdk-trace-base, @opentelemetry/sdk-trace-node, @opentelemetry/semantic-conventions, ai, dotenv |
| examples/python/RAG_QA_chatbot/frontend/package.json | rag-chatbot-frontend | dev, build, start | @ai-sdk/react, @radix-ui/react-collapsible, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-hover-card, @radix-ui/react-progress, @radix-ui/react-scroll-area, @radix-ui/react-select, @radix-ui/react-separator, @radix-ui/react-slot, @radix-ui/react-tooltip, @radix-ui/react-use-controllable-state, @valibot/to-json-schema, @xyflow/react |
| web/_reference/agenta-sdk-ai/package.json | @agenta/sdk-ai | typecheck | @agenta/sdk, @agenta/sdk-tracing |
| web/_reference/agenta-sdk-mastra/package.json | @agenta/sdk-mastra | build, build:dist, types:check, lint | @agenta/sdk, @agenta/sdk-tracing |
| web/_reference/agenta-sdk-tracing/package.json | @agenta/sdk-tracing | build, build:dist, types:check, lint |  |
| web/_reference/agenta-sdk/package.json | @agenta/sdk | build, build:dist, types:check, types:check:examples, generate:schemas, test, test:coverage, test:integration, test:watch, lint |  |
| web/ee/package.json | @agenta/ee | dev, dev:local, dev:turbo, build, start, lint, lint-fix, format, format-fix, types:check, types:watch | @agenta/annotation, @agenta/annotation-ui, @agenta/entities, @agenta/entity-ui, @agenta/oss, @agenta/playground, @agenta/playground-ui, @agenta/shared, @agenta/ui, @ant-design/colors, @ant-design/cssinjs, @ant-design/icons, @lexical/code-shiki, @phosphor-icons/react |
| web/oss/package.json | @agenta/oss | dev, dev:local, dev:turbo, build, start, lint, lint-fix, format, format-fix, types:check, types:watch | @agenta/annotation, @agenta/annotation-ui, @agenta/entities, @agenta/entity-ui, @agenta/playground, @agenta/playground-ui, @agenta/sdk, @agenta/shared, @agenta/ui, @agenta/web-tests, @agentaai/nextstepjs, @ant-design/colors, @ant-design/cssinjs, @ant-design/icons |
| web/package.json | agenta-web | build-oss, build-ee, dev-ee, dev-oss, lint, lint-fix, test:revision-centric, test:apps, test:environments, test:deployments, test:orgs, test:profile, test:workspace, test:project, test:newPlayground, test:playground-dev | ajv-formats, jotai-eager, jotai-history, jotai-transaction, json5, next |
| web/packages/agenta-annotation-ui/package.json | @agenta/annotation-ui | build, types:check, lint | @agenta/annotation, @agenta/entities, @agenta/entity-ui, @agenta/shared, @agenta/ui, @phosphor-icons/react, dayjs |
| web/packages/agenta-annotation/package.json | @agenta/annotation | build, types:check, lint, test, test:unit, test:watch, test:coverage, test:integration, test:all, check | @agenta/entities, @agenta/shared, fast-deep-equal |
| web/packages/agenta-api-client/package.json | @agentaai/api-client | generate, build, prepare |  |
| web/packages/agenta-entities/package.json | @agenta/entities | build, types:check, lint, lint:fix, test:tsc, test:etl, test:etl:memory, test:etl:longrun, test:etl:longrun:engine, test:etl:longrun:molecules, test:etl:longrun:combined, test, test:all, test:unit, test:watch, test:coverage | @agentaai/api-client, @agenta/sdk, @agenta/shared, @agenta/ui, fast-deep-equal, jotai-scheduler, lodash, openapi-json-schema, stable-hash, uuid, zod |
| web/packages/agenta-entity-ui/package.json | @agenta/entity-ui | build, types:check, lint, test, test:unit, test:watch | @agenta/entities, @agenta/shared, @agenta/ui, @phosphor-icons/react, clsx, js-yaml, lodash, lucide-react, uuid, zod |
| web/packages/agenta-playground-ui/package.json | @agenta/playground-ui | build, types:check, lint | @agenta/entities, @agenta/entity-ui, @agenta/playground, @agenta/shared, @agenta/ui, @phosphor-icons/react, clsx, json5, uuid |
| web/packages/agenta-playground/package.json | @agenta/playground | build, types:check, lint, test, test:unit, test:watch, test:coverage, check | @agenta/entities, @agenta/shared, fast-deep-equal, lz-string, uuid |
| web/packages/agenta-sdk/package.json | @agenta/sdk | build, types:check, lint, lint:fix | @agentaai/api-client |
| web/packages/agenta-shared/package.json | @agenta/shared | build, types:check, lint, lint:fix, test, test:unit, test:watch, test:coverage, check | axios, dayjs, json5, jsonrepair, uuid |
| web/packages/agenta-ui/package.json | @agenta/ui | build, types:check, lint, lint:fix, test | @agenta/shared, @ant-design/icons, @lexical/code, @lexical/code-shiki, @lexical/hashtag, @lexical/html, @lexical/link, @lexical/list, @lexical/mark, @lexical/markdown, @lexical/overflow, @lexical/react, @lexical/rich-text, @lexical/table |
| web/tests/package.json | agenta-web-tests | test:acceptance, test:acceptance:ui, test:acceptance:debug, test:smoke | axios |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| api/pyproject.toml | api | false | true | false | false |
| clients/python/pyproject.toml | agenta-client | false | true | false | false |
| examples/python/RAG_QA_chatbot/pyproject.toml | rag-qa-chatbot | false | false | false | false |
| sdks/python/pyproject.toml | agenta | false | true | false | false |
| services/pyproject.toml | services | false | true | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `agents/docs/code-review/README.md`
- `agents/docs/code-review/criteria.md`
- `agents/docs/code-review/deliverables.md`
- `agents/docs/code-review/docs.specs.md`
- `agents/docs/code-review/guidelines.md`
- `agents/docs/code-review/instructions.md`
- `agents/docs/code-review/rubrics/api.md`
- `agents/docs/code-review/rubrics/architecture.md`
- `agents/docs/code-review/rubrics/databases.md`
- `agents/docs/code-review/rubrics/general.md`
- `agents/docs/code-review/rubrics/observability.md`
- `agents/docs/code-review/rubrics/performance.md`
- `agents/docs/code-review/rubrics/qa.md`
- `agents/docs/code-review/rubrics/sdk.md`
- `agents/docs/code-review/rubrics/security.md`
- `agents/docs/code-review/rubrics/services.md`
- `agents/docs/code-review/rubrics/testability.md`
- `agents/docs/code-review/rubrics/web.md`
- `agents/docs/code-review/templates/findings.md`
- `agents/docs/code-review/templates/metadata.json`
- `agents/docs/code-review/templates/plan.md`
- `agents/docs/code-review/templates/progress.md`
- `agents/docs/code-review/templates/questions.md`
- `agents/docs/code-review/templates/risks.md`
- `agents/docs/code-review/templates/scope.md`
- `agents/docs/code-review/templates/scorecard.md`
- `agents/docs/code-review/templates/summary.md`
- `agents/docs/diataxis/initial.digest.md`
- `agents/skills/README.md`
- `api/ee/databases/postgres/migrations/core/README.md`
- `api/ee/tests/manual/auth/README.md`
- `api/oss/databases/postgres/migrations/core/README.md`
- `api/oss/databases/postgres/migrations/tracing/README.md`
- `api/oss/tests/manual/tools/README.md`
- `api/oss/tests/manual/tracing/ingestion/README.md`
- `clients/README.md`
- `clients/python/README.md`
- `docs/.gitignore`
- `docs/Makefile`
- `docs/PR.md`
- `docs/README.md`
- `docs/blog/announcement-assets/dark-mode.md`
- `docs/blog/announcement-assets/playground-evaluation-workbench.md`
- `docs/blog/entries/add-spans-to-test-sets.mdx`
- `docs/blog/entries/adding-cost-and-token-usage-to-the-playground.mdx`
- `docs/blog/entries/agenta-is-soc-2-type-1-certified.mdx`
- `docs/blog/entries/annotate-your-llm-response-preview.mdx`
- `docs/blog/entries/annotation-queues.mdx`
- ... 30 more

### 에이전트 지침 후보

- `.agents/skills/agenta-package-practices/SKILL.md`
- `.agents/skills/write-docs/SKILL.md`
- `.agents/skills/write-pr-description/SKILL.md`
- `.claude/agents/changelog-editor.md`
- `.claude/skills/add-announcement/SKILL.md`
- `.claude/skills/create-changelog-announcement/SKILL.md`
- `.claude/skills/update-api-docs/SKILL.md`
- `.claude/skills/update-llm-model-list/SKILL.md`
- `.claude/skills/write-social-announcement/SKILL.md`
- `AGENTS.md`
- `CLAUDE.md`
- `agents/skills/README.md`
- `agents/skills/resolve-findings/SKILL.md`
- `agents/skills/resolve-findings/agents/openai.yaml`
- `agents/skills/scan-codebase/SKILL.md`
- `agents/skills/scan-codebase/agents/openai.yaml`
- `agents/skills/shared/references/findings.lifecycle.md`
- `agents/skills/shared/references/findings.schema.md`
- `agents/skills/sync-findings/SKILL.md`
- `agents/skills/sync-findings/agents/openai.yaml`
- `agents/skills/test-codebase/SKILL.md`
- `agents/skills/test-codebase/agents/openai.yaml`
- `agents/skills/triage-findings/SKILL.md`
- `agents/skills/triage-findings/agents/openai.yaml`
- `api/AGENTS.md`
- `docs/blog/entries/mcp-server.mdx`
- `docs/docs/misc/05-mcp-server.mdx`
- `hosting/AGENTS.md`
- `web/AGENTS.md`

### 스펙/템플릿/명령/스킬 후보

- `.agents/skills/agenta-package-practices/SKILL.md`
- `.agents/skills/write-docs/SKILL.md`
- `.agents/skills/write-pr-description/SKILL.md`
- `.claude/skills/add-announcement/SKILL.md`
- `.claude/skills/create-changelog-announcement/SKILL.md`
- `.claude/skills/update-api-docs/SKILL.md`
- `.claude/skills/update-llm-model-list/SKILL.md`
- `.claude/skills/write-social-announcement/SKILL.md`
- `agents/docs/code-review/templates/findings.md`
- `agents/docs/code-review/templates/metadata.json`
- `agents/docs/code-review/templates/plan.md`
- `agents/docs/code-review/templates/progress.md`
- `agents/docs/code-review/templates/questions.md`
- `agents/docs/code-review/templates/risks.md`
- `agents/docs/code-review/templates/scope.md`
- `agents/docs/code-review/templates/scorecard.md`
- `agents/docs/code-review/templates/summary.md`
- `agents/skills/README.md`
- `agents/skills/resolve-findings/SKILL.md`
- `agents/skills/resolve-findings/agents/openai.yaml`
- `agents/skills/scan-codebase/SKILL.md`
- `agents/skills/scan-codebase/agents/openai.yaml`
- `agents/skills/shared/references/findings.lifecycle.md`
- `agents/skills/shared/references/findings.schema.md`
- `agents/skills/sync-findings/SKILL.md`
- `agents/skills/sync-findings/agents/openai.yaml`
- `agents/skills/test-codebase/SKILL.md`
- `agents/skills/test-codebase/agents/openai.yaml`
- `agents/skills/triage-findings/SKILL.md`
- `agents/skills/triage-findings/agents/openai.yaml`
- `docs/design/archive-workflows/archived-entities-view-design.md`
- `docs/design/stateless-playground/api-design.md`
- `docs/designs/dynamic-access-and-billing/tasks.md`
- `docs/designs/extend-events-beyond-deployments/tasks.md`
- `docs/designs/extend-meters/tasks.md`
- `docs/designs/support-fields/tasks.md`
- `docs/designs/webhooks/DESIGN.md`
- `hosting/kubernetes/helm/templates/NOTES.txt`
- `hosting/kubernetes/helm/templates/_compatibility.tpl`
- `hosting/kubernetes/helm/templates/_helpers.tpl`
- `hosting/kubernetes/helm/templates/_validations.tpl`
- `hosting/kubernetes/helm/templates/alembic-job.yaml`
- `hosting/kubernetes/helm/templates/api-deployment.yaml`
- `hosting/kubernetes/helm/templates/api-service.yaml`
- `hosting/kubernetes/helm/templates/cron-deployment.yaml`
- `hosting/kubernetes/helm/templates/extra-objects.yaml`
- `hosting/kubernetes/helm/templates/ingress.yaml`
- `hosting/kubernetes/helm/templates/postgresql-auth-secret.yaml`
- `hosting/kubernetes/helm/templates/postgresql-initdb-configmap.yaml`
- `hosting/kubernetes/helm/templates/redis-durable-service.yaml`
- `hosting/kubernetes/helm/templates/redis-durable-statefulset.yaml`
- `hosting/kubernetes/helm/templates/redis-volatile-deployment.yaml`
- `hosting/kubernetes/helm/templates/redis-volatile-service.yaml`
- `hosting/kubernetes/helm/templates/secrets.yaml`
- `hosting/kubernetes/helm/templates/serviceaccount.yaml`
- `hosting/kubernetes/helm/templates/services-deployment.yaml`
- `hosting/kubernetes/helm/templates/services-service.yaml`
- `hosting/kubernetes/helm/templates/supertokens-deployment.yaml`
- `hosting/kubernetes/helm/templates/supertokens-service.yaml`
- `hosting/kubernetes/helm/templates/tests/test-connection.yaml`
- `hosting/kubernetes/helm/templates/web-deployment.yaml`
- `hosting/kubernetes/helm/templates/web-service.yaml`
- `hosting/kubernetes/helm/templates/worker-evaluations-deployment.yaml`
- `hosting/kubernetes/helm/templates/worker-events-deployment.yaml`
- `hosting/kubernetes/helm/templates/worker-tracing-deployment.yaml`
- `hosting/kubernetes/helm/templates/worker-webhooks-deployment.yaml`
- `web/packages/agenta-ui/src/Editor/commands/InitialContentCommand.ts`
- `web/packages/agenta-ui/src/Editor/plugins/code/core/commands/registerAutoCloseBracketsCommands.ts`
- `web/packages/agenta-ui/src/Editor/plugins/code/core/commands/registerAutoFormatAndValidateOnPasteCommands.ts`
- `web/packages/agenta-ui/src/Editor/plugins/code/core/commands/registerBasicEnterCommands.ts`
- `web/packages/agenta-ui/src/Editor/plugins/code/core/commands/registerClosingBracketIndentationCommands.ts`
- `web/packages/agenta-ui/src/Editor/plugins/code/core/commands/registerIndentationCommands.ts`
- `web/packages/agenta-ui/src/Editor/plugins/code/core/commands/registerVerticalNavigationCommands.ts`
- `web/packages/agenta-ui/src/Editor/plugins/markdown/commands/index.tsx`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `api/ee/tests/__init__.py`
- `api/ee/tests/manual/auth/00-setup-verification.http`
- `api/ee/tests/manual/auth/00-setup-verification.md`
- `api/ee/tests/manual/auth/01-discovery.http`
- `api/ee/tests/manual/auth/03-domain-verification.http`
- `api/ee/tests/manual/auth/03-identity-tracking.http`
- `api/ee/tests/manual/auth/04-policy-enforcement.http`
- `api/ee/tests/manual/auth/05-slug-immutability.http`
- `api/ee/tests/manual/auth/QUICK-START.md`
- `api/ee/tests/manual/auth/README.md`
- `api/ee/tests/manual/billing.http`
- `api/ee/tests/manual/evaluations/sdk/__init__.py`
- `api/ee/tests/manual/evaluations/sdk/chat-schema.json`
- `api/ee/tests/manual/evaluations/sdk/completion-schema.json`
- `api/ee/tests/manual/evaluations/sdk/openai_agent.py`
- `api/ee/tests/manual/evaluations/sdk/quick_start.py`
- `api/ee/tests/manual/evaluations/sdk/requirements.txt`
- `api/ee/tests/manual/evaluations/sdk/test_basics.py`
- `api/ee/tests/manual/evaluations/sdk/test_handlers.py`
- `api/ee/tests/manual/evaluations/sdk/test_local.py`
- `api/ee/tests/manual/evaluations/sdk/test_loop.py`
- `api/ee/tests/manual/evaluations/sdk/test_loop_agent.py`
- `api/ee/tests/manual/evaluations/sdk/test_openai_agent_evaluator.py`
- `api/ee/tests/manual/evaluations/sdk/test_serve.py`
- `api/ee/tests/manual/evaluations/sdk/testset-management.ipynb`
- `api/ee/tests/manual/test_billing_period.py`
- `api/ee/tests/pytest/__init__.py`
- `api/ee/tests/pytest/acceptance/.gitkeep`
- `api/ee/tests/pytest/acceptance/__init__.py`
- `api/ee/tests/pytest/acceptance/accounts/__init__.py`
- `api/ee/tests/pytest/acceptance/accounts/test_memberships.py`
- `api/ee/tests/pytest/acceptance/accounts/test_simple_entities_ee.py`
- `api/ee/tests/pytest/acceptance/accounts/test_transfer_ownership.py`
- `api/ee/tests/pytest/acceptance/billing_period_test_cases.csv`
- `api/ee/tests/pytest/acceptance/events/__init__.py`
- `api/ee/tests/pytest/acceptance/events/test_events_basics.py`
- `api/ee/tests/pytest/acceptance/workspaces/test_workspace_members.py`
- `api/ee/tests/pytest/conftest.py`
- `api/ee/tests/pytest/integration/.gitkeep`
- `api/ee/tests/pytest/unit/.gitkeep`
- `api/ee/tests/pytest/unit/events/test_events_router_audit.py`
- `api/ee/tests/pytest/unit/services/test_db_manager_ee.py`
- `api/ee/tests/pytest/unit/test_access_controls.py`
- `api/ee/tests/pytest/unit/test_admin_retention_routers.py`
- `api/ee/tests/pytest/unit/test_billing_router.py`
- `api/ee/tests/pytest/unit/test_billing_settings.py`
- `api/ee/tests/pytest/unit/test_compute_meter_id.py`
- `api/ee/tests/pytest/unit/test_controls_env_override.py`
- `api/ee/tests/pytest/unit/test_events_retention.py`
- `api/ee/tests/pytest/unit/test_meters_dao_fetch.py`
- `api/ee/tests/pytest/unit/test_meters_dao_strict_soft.py`
- `api/ee/tests/pytest/unit/test_meters_types.py`
- `api/ee/tests/pytest/unit/test_organization_fastapi_models.py`
- `api/ee/tests/pytest/unit/test_period_from.py`
- `api/ee/tests/pytest/unit/test_scope_from.py`
- `api/ee/tests/pytest/utils/.gitkeep`
- `api/oss/tests/__init__.py`
- `api/oss/tests/legacy/.gitignore`
- `api/oss/tests/legacy/admin/__init__.py`
- `api/oss/tests/legacy/admin/tests.py`
- `api/oss/tests/legacy/apps/__init__.py`
- `api/oss/tests/legacy/apps/fixtures.py`
- `api/oss/tests/legacy/auth/__init__.py`
- `api/oss/tests/legacy/auth/tests.py`
- `api/oss/tests/legacy/conftest.py`
- `api/oss/tests/legacy/old_tests/__init__.py`
- `api/oss/tests/legacy/old_tests/conftest.py`
- `api/oss/tests/legacy/old_tests/engine.py`
- `api/oss/tests/legacy/old_tests/models.py`
- `api/oss/tests/legacy/old_tests/pytest.ini`
- `api/oss/tests/legacy/old_tests/setenv.py`
- `api/oss/tests/legacy/old_tests/unit/test_evaluators.py`
- `api/oss/tests/legacy/old_tests/unit/test_traces.py`
- `api/oss/tests/legacy/old_tests/variants_main_router/conftest.py`
- `api/oss/tests/legacy/old_tests/variants_user_profile_router/test_user_profile.py`
- `api/oss/tests/legacy/pytest.ini`
- `api/oss/tests/legacy/requirements.test.txt`
- `api/oss/tests/legacy/run_backend_tests.sh`
- `api/oss/tests/legacy/sdk/__init__.py`
- `api/oss/tests/legacy/sdk/apps/__init__.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/00-releases.yml`
- `.github/workflows/01-create-release-branch.yml`
- `.github/workflows/10-checks.yml`
- `.github/workflows/11-check-code-styling.yml`
- `.github/workflows/12-check-unit-tests.yml`
- `.github/workflows/13-check-pr-contribution.yml`
- `.github/workflows/14-check-pr-preview.yml`
- `.github/workflows/30-crons.yml`
- `.github/workflows/31-sync-github-labels.yml`
- `.github/workflows/32-generate-demo-traces.yml`
- `.github/workflows/33-update-api-docs.yml`
- `.github/workflows/40-railway.yml`
- `.github/workflows/41-railway-setup.yml`
- `.github/workflows/42-railway-build.yml`
- `.github/workflows/43-railway-deploy.yml`
- `.github/workflows/44-railway-tests.yml`
- `.github/workflows/45-railway-cleanup.yml`
- `hosting/docker-compose/ee/.dockerignore`
- `hosting/docker-compose/ee/LICENSE`
- `hosting/docker-compose/ee/README.md`
- `hosting/docker-compose/ee/docker-compose.dev.yml`
- `hosting/docker-compose/ee/docker-compose.gh.local.yml`
- `hosting/docker-compose/ee/docker-compose.gh.yml`
- `hosting/docker-compose/ee/env.ee.dev.example`
- `hosting/docker-compose/ee/env.ee.gh.example`
- `hosting/docker-compose/oss/.dockerignore`
- `hosting/docker-compose/oss/docker-compose.dev.yml`
- `hosting/docker-compose/oss/docker-compose.gh.local.yml`
- `hosting/docker-compose/oss/docker-compose.gh.ssl.yml`
- `hosting/docker-compose/oss/docker-compose.gh.yml`
- `hosting/docker-compose/oss/docker-compose.otel.yml`
- `hosting/docker-compose/oss/env.oss.dev.example`
- `hosting/docker-compose/oss/env.oss.gh.example`
- `hosting/docker-compose/oss/nginx/nginx.conf`
- `hosting/docker-compose/oss/otel-collector-config.yml`
- `hosting/docker-compose/oss/ssl/traefik.yml`
- `hosting/docker-compose/run.sh`
- `hosting/railway/oss/alembic/Dockerfile`
- `hosting/railway/oss/api/Dockerfile`
- `hosting/railway/oss/cron/Dockerfile`
- `hosting/railway/oss/gateway/Dockerfile`
- `hosting/railway/oss/redis/Dockerfile`
- `hosting/railway/oss/services/Dockerfile`
- `hosting/railway/oss/web/Dockerfile`
- `hosting/railway/oss/worker-evaluations/Dockerfile`
- `hosting/railway/oss/worker-events/Dockerfile`
- `hosting/railway/oss/worker-tracing/Dockerfile`
- `hosting/railway/oss/worker-webhooks/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 2777 |
| .py | 2118 |
| .json | 1179 |
| .tsx | 1083 |
| .mdx | 733 |
| .md | 647 |
| .png | 266 |
| .http | 73 |
| .sh | 39 |
| .yaml | 38 |
| .gitkeep | 34 |
| .yml | 33 |
| .txt | 29 |
| .css | 26 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `web/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `agents/ 내부 책임 분리`
- `web/packages/ 내부 책임 분리`
- `.agents/skills/agenta-package-practices/SKILL.md 스펙/명령 의미`
- `.agents/skills/write-docs/SKILL.md 스펙/명령 의미`
- `.agents/skills/write-pr-description/SKILL.md 스펙/명령 의미`
- `.claude/skills/add-announcement/SKILL.md 스펙/명령 의미`
- `.claude/skills/create-changelog-announcement/SKILL.md 스펙/명령 의미`
- `api/ee/tests/manual/evaluations/sdk/requirements.txt 실행 스크립트와 패키지 경계`
- `api/pyproject.toml 실행 스크립트와 패키지 경계`
- `api/uv.lock 실행 스크립트와 패키지 경계`
- `clients/python/pyproject.toml 실행 스크립트와 패키지 경계`
- `clients/python/uv.lock 실행 스크립트와 패키지 경계`

