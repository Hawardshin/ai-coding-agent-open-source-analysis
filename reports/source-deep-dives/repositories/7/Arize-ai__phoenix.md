# Arize-ai/phoenix 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 6021 files, 1091 directories.

## 요약

- 조사 단위: `sources/Arize-ai__phoenix` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 6,014 files, 1,088 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=tutorials/llama_index_multimodal_image_reasoning.ipynb, tutorials/tracing/agentic_rag_tracing.ipynb, tutorials/tracing/llama_index_openai_agent_tracing_tutorial.ipynb이고, 의존성 단서는 openai, anthropic, mcp, langchain, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | Arize-ai/phoenix |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/Arize-ai__phoenix](../../../../sources/Arize-ai__phoenix) |
| 기존 보고서 | [reports/clone-structures/Arize-ai__phoenix.md](../../../clone-structures/Arize-ai__phoenix.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 6014 / 1088 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .agents, .claude, .codex, .cursor, .github, .tours, api_reference, app, docs, evals, examples, helm, internal_docs, js, kustomize, packages, prompts, requirements, schemas, scripts |
| 상위 확장자 | .ts: 1796, .py: 1246, .tsx: 1140, .mdx: 689, .md: 350, .json: 149, .ipynb: 128, .yaml: 83, (none): 79, .j2: 78, .yml: 61, .txt: 44 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | opentelemetry, prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1246 | [tutorials/llm_application_tracing_evaluating_and_analysis.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/llm_application_tracing_evaluating_and_analysis.ipynb)<br>[tutorials/tracing/.gitigure](../../../../sources/Arize-ai__phoenix/tutorials/tracing/.gitigure)<br>[tutorials/tracing/agentic_rag_tracing.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/tracing/agentic_rag_tracing.ipynb)<br>[tutorials/tracing/anthropic_tracing_tutorial.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/tracing/anthropic_tracing_tutorial.ipynb)<br>[tutorials/tracing/autogen_tutorial.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/tracing/autogen_tutorial.ipynb)<br>[tutorials/tracing/crewai_tracing_tutorial.ipynb](../../../../sources/Arize-ai__phoenix/tutorials/tracing/crewai_tracing_tutorial.ipynb) |
| CI workflow | 67 | [scripts/ci/compile_openapi_schema.py](../../../../sources/Arize-ai__phoenix/scripts/ci/compile_openapi_schema.py)<br>[scripts/ci/ensure_graphql_mutations_have_permission_classes.py](../../../../sources/Arize-ai__phoenix/scripts/ci/ensure_graphql_mutations_have_permission_classes.py)<br>[scripts/ci/test_helm.py](../../../../sources/Arize-ai__phoenix/scripts/ci/test_helm.py)<br>[scripts/ci/json-canonicalization-schema/verify-canonicalization.py](../../../../sources/Arize-ai__phoenix/scripts/ci/json-canonicalization-schema/verify-canonicalization.py)<br>[scripts/ci/json-canonicalization-schema/verify-numbers.py](../../../../sources/Arize-ai__phoenix/scripts/ci/json-canonicalization-schema/verify-numbers.py)<br>[scripts/ci/json-canonicalization-schema/testdata/numgen.go](../../../../sources/Arize-ai__phoenix/scripts/ci/json-canonicalization-schema/testdata/numgen.go) |
| 컨테이너/배포 | 36 | [docker-compose.yml](../../../../sources/Arize-ai__phoenix/docker-compose.yml)<br>[Dockerfile](../../../../sources/Arize-ai__phoenix/Dockerfile)<br>[tutorials/deployment/AWS Cloudformation/app.yml](../../../../sources/Arize-ai__phoenix/tutorials/deployment/AWS Cloudformation/app.yml)<br>[tutorials/deployment/AWS Cloudformation/permissions.json](../../../../sources/Arize-ai__phoenix/tutorials/deployment/AWS Cloudformation/permissions.json)<br>[tutorials/deployment/AWS Cloudformation/phoenix-auth.yml](../../../../sources/Arize-ai__phoenix/tutorials/deployment/AWS Cloudformation/phoenix-auth.yml)<br>[tutorials/deployment/AWS Cloudformation/phoenix-network.yml](../../../../sources/Arize-ai__phoenix/tutorials/deployment/AWS Cloudformation/phoenix-network.yml) |
| 보안/정책 | 126 | [SECURITY.md](../../../../sources/Arize-ai__phoenix/SECURITY.md)<br>[tutorials/deployment/AWS Cloudformation/phoenix-auth.yml](../../../../sources/Arize-ai__phoenix/tutorials/deployment/AWS Cloudformation/phoenix-auth.yml)<br>[tests/unit/test_auth.py](../../../../sources/Arize-ai__phoenix/tests/unit/test_auth.py)<br>[tests/unit/server/test_bearer_auth.py](../../../../sources/Arize-ai__phoenix/tests/unit/server/test_bearer_auth.py)<br>[tests/unit/server/sandbox/__init__.py](../../../../sources/Arize-ai__phoenix/tests/unit/server/sandbox/__init__.py)<br>[tests/unit/server/sandbox/test_app_lifecycle.py](../../../../sources/Arize-ai__phoenix/tests/unit/server/sandbox/test_app_lifecycle.py) |
| 에이전트 지시문 | 20 | [AGENTS.md](../../../../sources/Arize-ai__phoenix/AGENTS.md)<br>[packages/phoenix-evals/.cursor/rules/general/RULE.md](../../../../sources/Arize-ai__phoenix/packages/phoenix-evals/.cursor/rules/general/RULE.md)<br>[packages/phoenix-client/.cursor/rules/general/RULE.md](../../../../sources/Arize-ai__phoenix/packages/phoenix-client/.cursor/rules/general/RULE.md)<br>[js/packages/phoenix-client/.cursor/rules/general.mdc](../../../../sources/Arize-ai__phoenix/js/packages/phoenix-client/.cursor/rules/general.mdc)<br>[js/packages/phoenix-client/.cursor/rules/general/RULE.md](../../../../sources/Arize-ai__phoenix/js/packages/phoenix-client/.cursor/rules/general/RULE.md)<br>[js/packages/phoenix-cli/AGENTS.md](../../../../sources/Arize-ai__phoenix/js/packages/phoenix-cli/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tutorials/llama_index_multimodal_image_reasoning.ipynb`, `tutorials/tracing/agentic_rag_tracing.ipynb`, `tutorials/tracing/llama_index_openai_agent_tracing_tutorial.ipynb`.
2. entrypoint를 따라 실행 흐름 확인: `tutorials/mcp/tracing_between_mcp_client_and_server/server.py`, `src/phoenix/server/main.py`, `src/phoenix/server/api/helpers/substitutions/server.yaml`.
3. agent/tool runtime 매핑: `AGENTS.md`, `skills-lock.json`, `tutorials/experiments/agents-cookbook.ipynb`.
4. retrieval/memory/indexing 확인: `tutorials/llama_index_multimodal_image_reasoning.ipynb`, `tutorials/tracing/agentic_rag_tracing.ipynb`, `tutorials/tracing/llama_index_openai_agent_tracing_tutorial.ipynb`.
5. test/eval 파일로 동작 검증: `tutorials/llm_application_tracing_evaluating_and_analysis.ipynb`, `tutorials/tracing/.gitigure`, `tutorials/tracing/agentic_rag_tracing.ipynb`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Local clone structure analysis 6021 files, 1091 directories.. 핵심 구조 신호는 pyproject.toml, Dockerfile, docker-compose.yml, Makefile, README.md, openai이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
