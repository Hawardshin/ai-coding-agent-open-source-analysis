# Arize-ai/phoenix Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 6021 files, 1091 directories.

## 요약

- 조사 단위: `sources/Arize-ai__phoenix` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 6,014 files, 1,088 directories, depth score 138, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=tutorials/llama_index_multimodal_image_reasoning.ipynb, tutorials/tracing/agentic_rag_tracing.ipynb, tutorials/tracing/llama_index_openai_agent_tracing_tutorial.ipynb이고, 의존성 단서는 openai, anthropic, mcp, langchain, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | Arize-ai/phoenix |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/Arize-ai__phoenix](../../../../sources/Arize-ai__phoenix) |
| Existing report | [reports/clone-structures/Arize-ai__phoenix.md](../../../clone-structures/Arize-ai__phoenix.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 6014 / 1088 |
| Max observed depth | 11 |
| Top directories | .agents, .claude, .codex, .cursor, .github, .tours, api_reference, app, docs, evals, examples, helm, internal_docs, js, kustomize, packages, prompts, requirements, schemas, scripts |
| Top extensions | .ts: 1796, .py: 1246, .tsx: 1140, .mdx: 689, .md: 350, .json: 149, .ipynb: 128, .yaml: 83, (none): 79, .j2: 78, .yml: 61, .txt: 44 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 45 |
| packages/phoenix-otel | packages workspace | 19 |
| src | source boundary | 19 |
| packages/phoenix-evals | packages workspace | 7 |
| packages/phoenix-client | packages workspace | 5 |
| docs | documentation surface | 3 |
| examples/computer_use_agent | examples workspace | 2 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| api_reference | source boundary | 1 |
| app | top-level component | 1 |
| evals | top-level component | 1 |
| examples | top-level component | 1 |
| examples/agent_framework_comparison | examples workspace | 1 |
| examples/agents | examples workspace | 1 |
| examples/code_gen_agent | examples workspace | 1 |
| examples/cron-evals | examples workspace | 1 |
| examples/llamaindex-workflows-research-agent | examples workspace | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| quality | Makefile | check-tools | make check-tools |
| utility | Makefile | install-python | make install-python |
| utility | Makefile | install-node | make install-node |
| utility | Makefile | setup | make setup |
| utility | Makefile | schema-graphql | make schema-graphql |
| build | Makefile | relay-build | make relay-build |
| utility | Makefile | graphql | make graphql |
| utility | Makefile | schema-openapi | make schema-openapi |
| utility | Makefile | codegen-python-client | make codegen-python-client |
| utility | Makefile | codegen-ts-client | make codegen-ts-client |
| utility | Makefile | codegen-ts-app | make codegen-ts-app |
| utility | Makefile | schema-generative-ui | make schema-generative-ui |
| utility | Makefile | openapi | make openapi |
| serve-dev | Makefile | dev | make dev |
| serve-dev | Makefile | dev-backend | make dev-backend |
| serve-dev | Makefile | dev-frontend | make dev-frontend |
| test | Makefile | test-python | make test-python |
| test | Makefile | test-frontend | make test-frontend |
| utility | pyproject.toml | arize-phoenix | arize-phoenix |
| utility | pyproject.toml | phoenix | phoenix |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | fastapi |
| developerSurface | none |
| observability | opentelemetry, prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [tutorials/llama_index_multimodal_image_reasoning.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/llama_index_multimodal_image_reasoning.ipynb) | retrieval signal |
| retrieval | [tutorials/tracing/agentic_rag_tracing.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/tracing/agentic_rag_tracing.ipynb) | retrieval signal |
| retrieval | [tutorials/tracing/llama_index_openai_agent_tracing_tutorial.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/tracing/llama_index_openai_agent_tracing_tutorial.ipynb) | retrieval signal |
| retrieval | [tutorials/tracing/llama_index_sql_retriever_tutorial.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/tracing/llama_index_sql_retriever_tutorial.ipynb) | retrieval signal |
| entrypoints | [tutorials/mcp/tracing_between_mcp_client_and_server/server.py](../../../../sources/Arize-ai__phoenix/tutorials/mcp/tracing_between_mcp_client_and_server/server.py) | entrypoints signal |
| entrypoints | [src/phoenix/server/main.py](../../../../sources/Arize-ai__phoenix/src/phoenix/server/main.py) | entrypoints signal |
| entrypoints | [src/phoenix/server/api/helpers/substitutions/server.yaml](../../../../sources/Arize-ai__phoenix/src/phoenix/server/api/helpers/substitutions/server.yaml) | entrypoints signal |
| entrypoints | [scripts/mock-llm-server/src/server.ts](../../../../sources/Arize-ai__phoenix/scripts/mock-llm-server/src/server.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/Arize-ai__phoenix/README.md) | docs signal |
| docs | [tutorials/mcp/tracing_between_mcp_client_and_server/README.md](../../../../sources/Arize-ai__phoenix/tutorials/mcp/tracing_between_mcp_client_and_server/README.md) | docs signal |
| docs | [tutorials/ai_evals_course/README.md](../../../../sources/Arize-ai__phoenix/tutorials/ai_evals_course/README.md) | docs signal |
| docs | [tutorials/ai_evals_course/hw5_phoenix/README.md](../../../../sources/Arize-ai__phoenix/tutorials/ai_evals_course/hw5_phoenix/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 72 | [tutorials/mcp/tracing_between_mcp_client_and_server/server.py](../../../../sources/Arize-ai__phoenix/tutorials/mcp/tracing_between_mcp_client_and_server/server.py)<br>[src/phoenix/server/main.py](../../../../sources/Arize-ai__phoenix/src/phoenix/server/main.py)<br>[src/phoenix/server/api/helpers/substitutions/server.yaml](../../../../sources/Arize-ai__phoenix/src/phoenix/server/api/helpers/substitutions/server.yaml)<br>[scripts/mock-llm-server/src/server.ts](../../../../sources/Arize-ai__phoenix/scripts/mock-llm-server/src/server.ts)<br>[scripts/mock-llm-server/dashboard/src/App.tsx](../../../../sources/Arize-ai__phoenix/scripts/mock-llm-server/dashboard/src/App.tsx)<br>[scripts/mock-llm-server/dashboard/src/index.css](../../../../sources/Arize-ai__phoenix/scripts/mock-llm-server/dashboard/src/index.css)<br>[scripts/mock-llm-server/dashboard/src/main.tsx](../../../../sources/Arize-ai__phoenix/scripts/mock-llm-server/dashboard/src/main.tsx)<br>[scripts/gh-comment-watch/web/src/App.tsx](../../../../sources/Arize-ai__phoenix/scripts/gh-comment-watch/web/src/App.tsx) |
| agentRuntime | 1127 | [AGENTS.md](../../../../sources/Arize-ai__phoenix/AGENTS.md)<br>[skills-lock.json](../../../../sources/Arize-ai__phoenix/skills-lock.json)<br>[tutorials/experiments/agents-cookbook.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/experiments/agents-cookbook.ipynb)<br>[tutorials/experiments/tool_calling_eval_dataset.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/experiments/tool_calling_eval_dataset.ipynb)<br>[tutorials/agents/smolagents/smolagents_orchestrator.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/agents/smolagents/smolagents_orchestrator.ipynb)<br>[tutorials/agents/smolagents/smolagents_prompt_chaining.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/agents/smolagents/smolagents_prompt_chaining.ipynb)<br>[tutorials/agents/openai/openai_agents_basic.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/agents/openai/openai_agents_basic.ipynb)<br>[tutorials/agents/openai/openai_agents_evaluator_optimizer.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/agents/openai/openai_agents_evaluator_optimizer.ipynb) |
| mcp | 53 | [tutorials/mcp/tracing_between_mcp_client_and_server/.env.example](../../../../sources/Arize-ai__phoenix/tutorials/mcp/tracing_between_mcp_client_and_server/.env.example)<br>[tutorials/mcp/tracing_between_mcp_client_and_server/client.py](../../../../sources/Arize-ai__phoenix/tutorials/mcp/tracing_between_mcp_client_and_server/client.py)<br>[tutorials/mcp/tracing_between_mcp_client_and_server/README.md](../../../../sources/Arize-ai__phoenix/tutorials/mcp/tracing_between_mcp_client_and_server/README.md)<br>[tutorials/mcp/tracing_between_mcp_client_and_server/requirements.txt](../../../../sources/Arize-ai__phoenix/tutorials/mcp/tracing_between_mcp_client_and_server/requirements.txt)<br>[tutorials/mcp/tracing_between_mcp_client_and_server/server.py](../../../../sources/Arize-ai__phoenix/tutorials/mcp/tracing_between_mcp_client_and_server/server.py)<br>[tests/unit/server/test_app_docs_mcp_lifespan.py](../../../../sources/Arize-ai__phoenix/tests/unit/server/test_app_docs_mcp_lifespan.py)<br>[src/phoenix/server/agents/capabilities/docs_mcp.py](../../../../sources/Arize-ai__phoenix/src/phoenix/server/agents/capabilities/docs_mcp.py)<br>[js/packages/phoenix-mcp/.env.example](../../../../sources/Arize-ai__phoenix/js/packages/phoenix-mcp/.env.example) |
| retrieval | 256 | [tutorials/llama_index_multimodal_image_reasoning.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/llama_index_multimodal_image_reasoning.ipynb)<br>[tutorials/tracing/agentic_rag_tracing.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/tracing/agentic_rag_tracing.ipynb)<br>[tutorials/tracing/llama_index_openai_agent_tracing_tutorial.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/tracing/llama_index_openai_agent_tracing_tutorial.ipynb)<br>[tutorials/tracing/llama_index_sql_retriever_tutorial.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/tracing/llama_index_sql_retriever_tutorial.ipynb)<br>[tutorials/tracing/llama_index_tracing_tutorial.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/tracing/llama_index_tracing_tutorial.ipynb)<br>[tutorials/tracing/project_sessions_llama_index_query_engine.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/tracing/project_sessions_llama_index_query_engine.ipynb)<br>[tutorials/experiments/run_experiments_with_llama_index.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/experiments/run_experiments_with_llama_index.ipynb)<br>[tutorials/evals/evaluate_rag_system.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/evals/evaluate_rag_system.ipynb) |
| spec | 62 | [tutorials/mcp/tracing_between_mcp_client_and_server/requirements.txt](../../../../sources/Arize-ai__phoenix/tutorials/mcp/tracing_between_mcp_client_and_server/requirements.txt)<br>[src/phoenix/server/generative_ui/spec_schema.json](../../../../sources/Arize-ai__phoenix/src/phoenix/server/generative_ui/spec_schema.json)<br>[scripts/analytics/requirements.txt](../../../../sources/Arize-ai__phoenix/scripts/analytics/requirements.txt)<br>[requirements/ci.txt](../../../../sources/Arize-ai__phoenix/requirements/ci.txt)<br>[requirements/integration-tests.txt](../../../../sources/Arize-ai__phoenix/requirements/integration-tests.txt)<br>[requirements/type-check.txt](../../../../sources/Arize-ai__phoenix/requirements/type-check.txt)<br>[requirements/unit-tests.txt](../../../../sources/Arize-ai__phoenix/requirements/unit-tests.txt)<br>[requirements/packages/phoenix-client.txt](../../../../sources/Arize-ai__phoenix/requirements/packages/phoenix-client.txt) |
| eval | 1246 | [tutorials/llm_application_tracing_evaluating_and_analysis.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/llm_application_tracing_evaluating_and_analysis.ipynb)<br>[tutorials/tracing/.gitigure](../../../../sources/Arize-ai__phoenix/tutorials/tracing/.gitigure)<br>[tutorials/tracing/agentic_rag_tracing.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/tracing/agentic_rag_tracing.ipynb)<br>[tutorials/tracing/anthropic_tracing_tutorial.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/tracing/anthropic_tracing_tutorial.ipynb)<br>[tutorials/tracing/autogen_tutorial.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/tracing/autogen_tutorial.ipynb)<br>[tutorials/tracing/crewai_tracing_tutorial.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/tracing/crewai_tracing_tutorial.ipynb)<br>[tutorials/tracing/dspy_tracing_tutorial.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/tracing/dspy_tracing_tutorial.ipynb)<br>[tutorials/tracing/google_agent_engine_tracing_tutorial.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/tracing/google_agent_engine_tracing_tutorial.ipynb) |
| security | 126 | [SECURITY.md](../../../../sources/Arize-ai__phoenix/SECURITY.md)<br>[tutorials/deployment/AWS Cloudformation/phoenix-auth.yml](../../../../sources/Arize-ai__phoenix/tutorials/deployment/AWS Cloudformation/phoenix-auth.yml)<br>[tests/unit/test_auth.py](../../../../sources/Arize-ai__phoenix/tests/unit/test_auth.py)<br>[tests/unit/server/test_bearer_auth.py](../../../../sources/Arize-ai__phoenix/tests/unit/server/test_bearer_auth.py)<br>[tests/unit/server/sandbox/__init__.py](../../../../sources/Arize-ai__phoenix/tests/unit/server/sandbox/__init__.py)<br>[tests/unit/server/sandbox/test_app_lifecycle.py](../../../../sources/Arize-ai__phoenix/tests/unit/server/sandbox/test_app_lifecycle.py)<br>[tests/unit/server/sandbox/test_build_sandbox_backend.py](../../../../sources/Arize-ai__phoenix/tests/unit/server/sandbox/test_build_sandbox_backend.py)<br>[tests/unit/server/sandbox/test_credential_resolution.py](../../../../sources/Arize-ai__phoenix/tests/unit/server/sandbox/test_credential_resolution.py) |
| ci | 67 | [scripts/ci/compile_openapi_schema.py](../../../../sources/Arize-ai__phoenix/scripts/ci/compile_openapi_schema.py)<br>[scripts/ci/ensure_graphql_mutations_have_permission_classes.py](../../../../sources/Arize-ai__phoenix/scripts/ci/ensure_graphql_mutations_have_permission_classes.py)<br>[scripts/ci/test_helm.py](../../../../sources/Arize-ai__phoenix/scripts/ci/test_helm.py)<br>[scripts/ci/json-canonicalization-schema/verify-canonicalization.py](../../../../sources/Arize-ai__phoenix/scripts/ci/json-canonicalization-schema/verify-canonicalization.py)<br>[scripts/ci/json-canonicalization-schema/verify-numbers.py](../../../../sources/Arize-ai__phoenix/scripts/ci/json-canonicalization-schema/verify-numbers.py)<br>[scripts/ci/json-canonicalization-schema/testdata/numgen.go](../../../../sources/Arize-ai__phoenix/scripts/ci/json-canonicalization-schema/testdata/numgen.go)<br>[scripts/ci/json-canonicalization-schema/testdata/numgen.js](../../../../sources/Arize-ai__phoenix/scripts/ci/json-canonicalization-schema/testdata/numgen.js)<br>[scripts/ci/json-canonicalization-schema/testdata/README.md](../../../../sources/Arize-ai__phoenix/scripts/ci/json-canonicalization-schema/testdata/README.md) |
| container | 36 | [docker-compose.yml](../../../../sources/Arize-ai__phoenix/docker-compose.yml)<br>[Dockerfile](../../../../sources/Arize-ai__phoenix/Dockerfile)<br>[tutorials/deployment/AWS Cloudformation/app.yml](../../../../sources/Arize-ai__phoenix/tutorials/deployment/AWS Cloudformation/app.yml)<br>[tutorials/deployment/AWS Cloudformation/permissions.json](../../../../sources/Arize-ai__phoenix/tutorials/deployment/AWS Cloudformation/permissions.json)<br>[tutorials/deployment/AWS Cloudformation/phoenix-auth.yml](../../../../sources/Arize-ai__phoenix/tutorials/deployment/AWS Cloudformation/phoenix-auth.yml)<br>[tutorials/deployment/AWS Cloudformation/phoenix-network.yml](../../../../sources/Arize-ai__phoenix/tutorials/deployment/AWS Cloudformation/phoenix-network.yml)<br>[scripts/docker/devops/docker-compose.yml](../../../../sources/Arize-ai__phoenix/scripts/docker/devops/docker-compose.yml)<br>[scripts/docker/devops/Dockerfile](../../../../sources/Arize-ai__phoenix/scripts/docker/devops/Dockerfile) |
| instruction | 20 | [AGENTS.md](../../../../sources/Arize-ai__phoenix/AGENTS.md)<br>[packages/phoenix-evals/.cursor/rules/general/RULE.md](../../../../sources/Arize-ai__phoenix/packages/phoenix-evals/.cursor/rules/general/RULE.md)<br>[packages/phoenix-client/.cursor/rules/general/RULE.md](../../../../sources/Arize-ai__phoenix/packages/phoenix-client/.cursor/rules/general/RULE.md)<br>[js/packages/phoenix-client/.cursor/rules/general.mdc](../../../../sources/Arize-ai__phoenix/js/packages/phoenix-client/.cursor/rules/general.mdc)<br>[js/packages/phoenix-client/.cursor/rules/general/RULE.md](../../../../sources/Arize-ai__phoenix/js/packages/phoenix-client/.cursor/rules/general/RULE.md)<br>[js/packages/phoenix-cli/AGENTS.md](../../../../sources/Arize-ai__phoenix/js/packages/phoenix-cli/AGENTS.md)<br>[js/examples/apps/cli-agent-starter-kit/AGENTS.md](../../../../sources/Arize-ai__phoenix/js/examples/apps/cli-agent-starter-kit/AGENTS.md)<br>[app/.cursor/rules/styling/RULE.md](../../../../sources/Arize-ai__phoenix/app/.cursor/rules/styling/RULE.md) |
| docs | 812 | [README.md](../../../../sources/Arize-ai__phoenix/README.md)<br>[tutorials/mcp/tracing_between_mcp_client_and_server/README.md](../../../../sources/Arize-ai__phoenix/tutorials/mcp/tracing_between_mcp_client_and_server/README.md)<br>[tutorials/ai_evals_course/README.md](../../../../sources/Arize-ai__phoenix/tutorials/ai_evals_course/README.md)<br>[tutorials/ai_evals_course/hw5_phoenix/README.md](../../../../sources/Arize-ai__phoenix/tutorials/ai_evals_course/hw5_phoenix/README.md)<br>[tutorials/ai_evals_course/hw3_phoenix/README.md](../../../../sources/Arize-ai__phoenix/tutorials/ai_evals_course/hw3_phoenix/README.md)<br>[src/phoenix/trace/dsl/README.md](../../../../sources/Arize-ai__phoenix/src/phoenix/trace/dsl/README.md)<br>[src/phoenix/server/api/README.md](../../../../sources/Arize-ai__phoenix/src/phoenix/server/api/README.md)<br>[src/phoenix/db/README.md](../../../../sources/Arize-ai__phoenix/src/phoenix/db/README.md) |
| config | 93 | [Makefile](../../../../sources/Arize-ai__phoenix/Makefile)<br>[pyproject.toml](../../../../sources/Arize-ai__phoenix/pyproject.toml)<br>[uv.lock](../../../../sources/Arize-ai__phoenix/uv.lock)<br>[tutorials/mcp/tracing_between_mcp_client_and_server/requirements.txt](../../../../sources/Arize-ai__phoenix/tutorials/mcp/tracing_between_mcp_client_and_server/requirements.txt)<br>[scripts/mock-llm-server/package.json](../../../../sources/Arize-ai__phoenix/scripts/mock-llm-server/package.json)<br>[scripts/mock-llm-server/pnpm-workspace.yaml](../../../../sources/Arize-ai__phoenix/scripts/mock-llm-server/pnpm-workspace.yaml)<br>[scripts/mock-llm-server/tsconfig.json](../../../../sources/Arize-ai__phoenix/scripts/mock-llm-server/tsconfig.json)<br>[scripts/mock-llm-server/dashboard/package.json](../../../../sources/Arize-ai__phoenix/scripts/mock-llm-server/dashboard/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1246 | [tutorials/llm_application_tracing_evaluating_and_analysis.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/llm_application_tracing_evaluating_and_analysis.ipynb)<br>[tutorials/tracing/.gitigure](../../../../sources/Arize-ai__phoenix/tutorials/tracing/.gitigure)<br>[tutorials/tracing/agentic_rag_tracing.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/tracing/agentic_rag_tracing.ipynb)<br>[tutorials/tracing/anthropic_tracing_tutorial.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/tracing/anthropic_tracing_tutorial.ipynb)<br>[tutorials/tracing/autogen_tutorial.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/tracing/autogen_tutorial.ipynb)<br>[tutorials/tracing/crewai_tracing_tutorial.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/tracing/crewai_tracing_tutorial.ipynb) |
| CI workflows | 67 | [scripts/ci/compile_openapi_schema.py](../../../../sources/Arize-ai__phoenix/scripts/ci/compile_openapi_schema.py)<br>[scripts/ci/ensure_graphql_mutations_have_permission_classes.py](../../../../sources/Arize-ai__phoenix/scripts/ci/ensure_graphql_mutations_have_permission_classes.py)<br>[scripts/ci/test_helm.py](../../../../sources/Arize-ai__phoenix/scripts/ci/test_helm.py)<br>[scripts/ci/json-canonicalization-schema/verify-canonicalization.py](../../../../sources/Arize-ai__phoenix/scripts/ci/json-canonicalization-schema/verify-canonicalization.py)<br>[scripts/ci/json-canonicalization-schema/verify-numbers.py](../../../../sources/Arize-ai__phoenix/scripts/ci/json-canonicalization-schema/verify-numbers.py)<br>[scripts/ci/json-canonicalization-schema/testdata/numgen.go](../../../../sources/Arize-ai__phoenix/scripts/ci/json-canonicalization-schema/testdata/numgen.go) |
| Containers / deploy | 36 | [docker-compose.yml](../../../../sources/Arize-ai__phoenix/docker-compose.yml)<br>[Dockerfile](../../../../sources/Arize-ai__phoenix/Dockerfile)<br>[tutorials/deployment/AWS Cloudformation/app.yml](../../../../sources/Arize-ai__phoenix/tutorials/deployment/AWS Cloudformation/app.yml)<br>[tutorials/deployment/AWS Cloudformation/permissions.json](../../../../sources/Arize-ai__phoenix/tutorials/deployment/AWS Cloudformation/permissions.json)<br>[tutorials/deployment/AWS Cloudformation/phoenix-auth.yml](../../../../sources/Arize-ai__phoenix/tutorials/deployment/AWS Cloudformation/phoenix-auth.yml)<br>[tutorials/deployment/AWS Cloudformation/phoenix-network.yml](../../../../sources/Arize-ai__phoenix/tutorials/deployment/AWS Cloudformation/phoenix-network.yml) |
| Security / policy | 126 | [SECURITY.md](../../../../sources/Arize-ai__phoenix/SECURITY.md)<br>[tutorials/deployment/AWS Cloudformation/phoenix-auth.yml](../../../../sources/Arize-ai__phoenix/tutorials/deployment/AWS Cloudformation/phoenix-auth.yml)<br>[tests/unit/test_auth.py](../../../../sources/Arize-ai__phoenix/tests/unit/test_auth.py)<br>[tests/unit/server/test_bearer_auth.py](../../../../sources/Arize-ai__phoenix/tests/unit/server/test_bearer_auth.py)<br>[tests/unit/server/sandbox/__init__.py](../../../../sources/Arize-ai__phoenix/tests/unit/server/sandbox/__init__.py)<br>[tests/unit/server/sandbox/test_app_lifecycle.py](../../../../sources/Arize-ai__phoenix/tests/unit/server/sandbox/test_app_lifecycle.py) |
| Agent instructions | 20 | [AGENTS.md](../../../../sources/Arize-ai__phoenix/AGENTS.md)<br>[packages/phoenix-evals/.cursor/rules/general/RULE.md](../../../../sources/Arize-ai__phoenix/packages/phoenix-evals/.cursor/rules/general/RULE.md)<br>[packages/phoenix-client/.cursor/rules/general/RULE.md](../../../../sources/Arize-ai__phoenix/packages/phoenix-client/.cursor/rules/general/RULE.md)<br>[js/packages/phoenix-client/.cursor/rules/general.mdc](../../../../sources/Arize-ai__phoenix/js/packages/phoenix-client/.cursor/rules/general.mdc)<br>[js/packages/phoenix-client/.cursor/rules/general/RULE.md](../../../../sources/Arize-ai__phoenix/js/packages/phoenix-client/.cursor/rules/general/RULE.md)<br>[js/packages/phoenix-cli/AGENTS.md](../../../../sources/Arize-ai__phoenix/js/packages/phoenix-cli/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tutorials/llama_index_multimodal_image_reasoning.ipynb`, `tutorials/tracing/agentic_rag_tracing.ipynb`, `tutorials/tracing/llama_index_openai_agent_tracing_tutorial.ipynb`.
2. Trace execution through entrypoints: `tutorials/mcp/tracing_between_mcp_client_and_server/server.py`, `src/phoenix/server/main.py`, `src/phoenix/server/api/helpers/substitutions/server.yaml`.
3. Map agent/tool runtime through: `AGENTS.md`, `skills-lock.json`, `tutorials/experiments/agents-cookbook.ipynb`.
4. Inspect retrieval/memory/indexing through: `tutorials/llama_index_multimodal_image_reasoning.ipynb`, `tutorials/tracing/agentic_rag_tracing.ipynb`, `tutorials/tracing/llama_index_openai_agent_tracing_tutorial.ipynb`.
5. Verify behavior through test/eval files: `tutorials/llm_application_tracing_evaluating_and_analysis.ipynb`, `tutorials/tracing/.gitigure`, `tutorials/tracing/agentic_rag_tracing.ipynb`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Local clone structure analysis 6021 files, 1091 directories.. 핵심 구조 신호는 pyproject.toml, Dockerfile, docker-compose.yml, Makefile, README.md, openai이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
