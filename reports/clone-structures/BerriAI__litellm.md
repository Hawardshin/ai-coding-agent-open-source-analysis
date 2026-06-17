# BerriAI/litellm 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/BerriAI__litellm |
| remote | https://github.com/BerriAI/litellm |
| HEAD | 729b005 (2026-06-12) fix(google_genai): preserve complete SSE events in Vertex/Gemini image streaming (#30270) |
| branch | litellm_internal_staging |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 6958 |
| dirs | 1693 |
| stack | Node/TypeScript/JavaScript, Python, Go |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `What is LiteLLM`, `Why LiteLLM`, `OSS Adopters`, `Features`, `Python SDK`, `OpenAI`, `Anthropic`, `AI Gateway (Proxy Server)`, `Python SDK - A2A Protocol`, `AI Gateway (Proxy Server)`, `Python SDK - MCP Bridge`, `AI Gateway - MCP Gateway`, `Use with Cursor IDE`, `Supported Providers ([Website Supported Models](https://models.litellm.ai/) | [Docs](https://docs.litellm.ai/docs/providers))`, `Get Started`, `Run in Developer Mode`, `Verify Docker Image Signatures`, `Enterprise`

> <h1 align="center" 🚅 LiteLLM </h1 <p align="center" <p align="center" LiteLLM AI Gateway </p <p align="center" Open Source AI Gateway for 100+ LLMs. Self hosted. Enterprise ready. Call any LLM in OpenAI format.</p <p align="center" <a href="https //render.com/deploy?repo=https //github.com/BerriAI/litellm" target=" blank" rel="nofollow" <img src="https //render.com/images/deploy to render button.svg" alt="Deploy to Render" </a <a href="https //railway.com/deploy/RhvhdC?referralCode=7mRv9K&utm medium=integration&utm source=template&utm campaign=generic" <img src="https //railway.com/button.svg" alt="Deploy on Railway" </a </p </p <h4 align="center" <a href="https //docs.litellm.ai/docs/simple proxy" target=" blank" LiteLLM Proxy Server (AI Gateway)</a <a href="https //docs.litellm.ai/docs/enterprise hosted litellm proxy" target=" blank" Hosted Proxy</a <a href="https //litellm.ai/enterpr

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .circleci | dir |
| .devcontainer | dir |
| .dockerignore | file |
| .env.example | file |
| .flake8 | file |
| .git-blame-ignore-revs | file |
| .gitattributes | file |
| .gitguardian.yaml | file |
| .githooks | dir |
| .github | dir |
| .gitignore | file |
| .npmrc | file |
| .semgrep | dir |
| AGENTS.md | file |
| ARCHITECTURE.md | file |
| backend | dir |
| ci_cd | dir |
| CLAUDE.md | file |
| codecov.yaml | file |
| CONTRIBUTING.md | file |
| cookbook | dir |
| cosign.pub | file |
| db_scripts | dir |
| deploy | dir |
| dist | dir |
| docker | dir |
| docker-compose.hardened.yml | file |
| docker-compose.yml | file |
| Dockerfile | file |
| docs | dir |
| enterprise | dir |
| gateway | dir |
| GEMINI.md | file |
| helm | dir |
| LICENSE | file |
| license_cache.json | file |
| litellm | dir |
| litellm-proxy-extras | dir |
| Makefile | file |
| mcp_servers.json | file |
| migrations | dir |
| model_prices_and_context_window.json | file |
| package-lock.json | file |
| package.json | file |
| packaging | dir |
| policy_templates.json | file |
| prometheus.yml | file |
| provider_endpoints_support.json | file |
| proxy_server_config.yaml | file |
| pyproject.toml | file |
| pyrightconfig.json | file |
| README.md | file |
| render.yaml | file |
| ruff.toml | file |
| schema.prisma | file |
| scripts | dir |
| security.md | file |
| taplo.toml | file |
| terraform | dir |
| tests | dir |
| ui | dir |
| uv.lock | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| litellm/ | 2568 |
| tests/ | 2356 |
| ui/ | 1351 |
| enterprise/ | 146 |
| litellm-proxy-extras/ | 139 |
| cookbook/ | 118 |
| .github/ | 59 |
| terraform/ | 49 |
| (root) | 38 |
| deploy/ | 38 |
| scripts/ | 32 |
| helm/ | 17 |
| docker/ | 12 |
| ci_cd/ | 6 |
| db_scripts/ | 5 |
| .semgrep/ | 4 |
| backend/ | 4 |
| gateway/ | 4 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| backend/ | 4 | preferred |
| docs/ | 3 | preferred |
| tests/ | 2356 | preferred |
| scripts/ | 32 | preferred |
| litellm/ | 2568 | large |
| tests/test_litellm/ | 1378 | large |
| ui/ | 1351 | large |
| ui/litellm-dashboard/ | 1349 | large |
| ui/litellm-dashboard/src/ | 1143 | large |
| litellm/proxy/ | 957 | large |
| litellm/llms/ | 869 | large |
| tests/test_litellm/llms/ | 477 | large |
| tests/test_litellm/proxy/ | 471 | large |
| litellm/proxy/_experimental/ | 386 | large |
| litellm/proxy/guardrails/ | 206 | large |
| litellm/integrations/ | 204 | large |
| tests/local_testing/ | 182 | large |
| litellm/types/ | 172 | large |
| enterprise/ | 146 | large |
| litellm-proxy-extras/ | 139 | large |
| enterprise/litellm_enterprise/ | 133 | large |
| ui/litellm-dashboard/public/ | 133 | large |
| litellm-proxy-extras/litellm_proxy_extras/ | 132 | large |
| litellm-proxy-extras/litellm_proxy_extras/migrations/ | 128 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `backend/Dockerfile`
- `cookbook/anthropic_agent_sdk/requirements.txt`
- `cookbook/gollem_go_agent_framework/go.mod`
- `cookbook/litellm-ollama-docker-image/Dockerfile`
- `cookbook/litellm-ollama-docker-image/requirements.txt`
- `cookbook/livekit_agent_sdk/requirements.txt`
- `docker-compose.yml`
- `enterprise/pyproject.toml`
- `gateway/Dockerfile`
- `litellm-proxy-extras/pyproject.toml`
- `migrations/Dockerfile`
- `package.json`
- `pyproject.toml`
- `tests/llm_translation/test_skills_data/slack-gif-creator/requirements.txt`
- `tests/pass_through_tests/package.json`
- `tests/proxy_admin_ui_tests/ui_unit_tests/package.json`
- `tests/proxy_admin_ui_tests/ui_unit_tests/tsconfig.json`
- `ui/Dockerfile`
- `ui/litellm-dashboard/package.json`
- `ui/litellm-dashboard/tsconfig.json`
- `uv.lock`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json |  |  | prism-react-renderer, prisma, react-copy-to-clipboard |
| tests/pass_through_tests/package.json | litellm-pass-through-tests |  | @google-cloud/vertexai, @google/generative-ai |
| tests/proxy_admin_ui_tests/ui_unit_tests/package.json | ui-unit-tests | test, test:watch | antd, @ant-design/icons, react, react-dom |
| ui/litellm-dashboard/package.json | litellm-dashboard | dev, dev:webpack, build, start, lint, test, test:dot, test:watch, test:coverage, format, format:check, e2e, e2e:ui, e2e:migration, e2e:migration:root, knip | @anthropic-ai/sdk, @headlessui/tailwindcss, @heroicons/react, @tanstack/react-pacer, @tanstack/react-query, @tanstack/react-table, @tremor/react, @types/papaparse, antd, cva, dayjs, jwt-decode, lucide-react, moment |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| enterprise/pyproject.toml | litellm-enterprise | false | true | false | false |
| litellm-proxy-extras/pyproject.toml | litellm-proxy-extras | false | true | false | false |
| pyproject.toml | litellm | false | true | false | true |

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| cookbook/gollem_go_agent_framework/go.mod | github.com/BerriAI/litellm/cookbook/gollem_go_agent_framework | 1.26.3 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.semgrep/rules/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `cookbook/anthropic_agent_sdk/README.md`
- `cookbook/benchmark/readme.md`
- `cookbook/codellama-server/README.MD`
- `cookbook/gollem_go_agent_framework/README.md`
- `cookbook/litellm_proxy_server/grafana_dashboard/dashboard_1/readme.md`
- `cookbook/litellm_proxy_server/grafana_dashboard/readme.md`
- `cookbook/litellm_proxy_server/readme.md`
- `cookbook/livekit_agent_sdk/README.md`
- `cookbook/mock_prompt_management_server/README.md`
- `deploy/charts/litellm-helm/README.md`
- `docker/README.md`
- `docker/build_from_pip/Readme.md`
- `docs/images/local-testing/hosted-vllm-custom-tool-local-test.png`
- `docs/my-website/docs/providers/crusoe.md`
- `docs/my-website/docs/proxy/guardrails/xecguard.md`
- `enterprise/README.md`
- `enterprise/enterprise_ui/README.md`
- `enterprise/litellm_enterprise/proxy/readme.md`
- `litellm-proxy-extras/README.md`
- `litellm/a2a_protocol/litellm_completion_bridge/README.md`
- `litellm/anthropic_interface/readme.md`
- `litellm/batch_completion/Readme.md`
- `litellm/caching/Readme.md`
- `litellm/completion_extras/README.md`
- `litellm/containers/README.md`
- `litellm/experimental_mcp_client/Readme.md`
- `litellm/google_genai/Readme.md`
- `litellm/integrations/Readme.md`
- `litellm/integrations/SlackAlerting/Readme.md`
- `litellm/integrations/arize/README.md`
- `litellm/integrations/bitbucket/README.md`
- `litellm/integrations/dotprompt/README.md`
- `litellm/integrations/gcs_bucket/Readme.md`
- `litellm/integrations/gitlab/README.md`
- `litellm/integrations/levo/README.md`
- `litellm/integrations/otel/README.md`
- `litellm/litellm_core_utils/README.md`
- `litellm/llms/README.md`
- `litellm/llms/a2a/chat/guardrail_translation/README.md`
- `litellm/llms/anthropic/experimental_pass_through/messages/interceptors/README.md`
- `litellm/llms/anthropic/skills/readme.md`
- `litellm/llms/azure_ai/README.md`
- `litellm/llms/bedrock/messages/readme.md`
- `litellm/llms/cohere/rerank/guardrail_translation/README.md`
- `litellm/llms/gemini/context_caching/README.md`
- `litellm/llms/hosted_vllm/embedding/README.md`
- `litellm/llms/litellm_proxy/skills/README.md`
- ... 30 more

### 에이전트 지침 후보

- `.github/workflows/test-mcp.yml`
- `AGENTS.md`
- `CLAUDE.md`
- `GEMINI.md`
- `cookbook/anthropic_agent_sdk/agent_with_mcp.py`
- `cookbook/litellm_proxy_server/mcp/mcp_with_litellm_proxy.py`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20250507161526_add_mcp_table_to_db/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20250507161527_add_health_check_fields_to_mcp_servers/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20250507184818_add_mcp_key_team_permission_mgmt/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20250707212517_add_mcp_info_column_mcp_servers/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20250707230009_add_mcp_namespaced_tool_name/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20250711220620_add_stdio_mcp/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20250806095134_rename_alias_to_server_name_mcp_table/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20250918083359_drop_spec_version_column_from_mcp_table/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20251003165142_add_allowed_tools_to_mcp/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20251003190954_extra_headers_to_mcp_table/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20251006143948_add_mcp_tool_permissions/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20251104220043_add_credentials_to_mcp_servers/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20260102131258_add_metadata_urls_to_mcp_servers/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20260105151539_add_allow_all_keys_to_mcp_servers/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20260207093506_add_available_on_public_internet_to_mcp_servers/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20260220124742_add_spec_path_to_mcp_servers/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20260228110000_mcp_default_public_internet_true/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20260309000000_add_mcp_approval_status/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20260309000001_add_mcp_source_url/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20260319000000_restore_mcp_approval_fields/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20260321000000_add_mcp_toolsets/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20260414140000_add_mcp_server_instructions/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20260513120000_add_delegate_auth_to_upstream_to_mcp_servers/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20260520120000_add_mcp_env_vars/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20260526120000_add_oauth_passthrough_to_mcp_servers/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20260604120000_add_oauth2_flow_to_mcp_servers/migration.sql`
- `litellm-proxy-extras/litellm_proxy_extras/migrations/20260605182307_add_timeout_to_mcp_server_table/migration.sql`
- `litellm/experimental_mcp_client/Readme.md`
- `litellm/experimental_mcp_client/__init__.py`
- `litellm/experimental_mcp_client/client.py`
- `litellm/experimental_mcp_client/tools.py`
- `litellm/llms/anthropic/skills/__init__.py`
- `litellm/llms/anthropic/skills/readme.md`
- `litellm/llms/anthropic/skills/transformation.py`
- `litellm/llms/base_llm/skills/__init__.py`
- `litellm/llms/base_llm/skills/transformation.py`
- `litellm/llms/litellm_proxy/skills/README.md`
- `litellm/llms/litellm_proxy/skills/__init__.py`
- `litellm/llms/litellm_proxy/skills/code_execution.py`
- `litellm/llms/litellm_proxy/skills/constants.py`
- `litellm/llms/litellm_proxy/skills/handler.py`
- `litellm/llms/litellm_proxy/skills/prompt_injection.py`
- `litellm/llms/litellm_proxy/skills/sandbox_executor.py`
- `litellm/llms/litellm_proxy/skills/transformation.py`
- `litellm/models/mcp_server.py`
- `litellm/models/skills.py`
- `litellm/proxy/_experimental/mcp_server/CLAUDE.md`
- `litellm/proxy/_experimental/mcp_server/auth/litellm_auth_handler.py`
- `litellm/proxy/_experimental/mcp_server/auth/token_exchange.py`
- `litellm/proxy/_experimental/mcp_server/auth/user_api_key_auth_mcp.py`
- `litellm/proxy/_experimental/mcp_server/byok_oauth_endpoints.py`
- `litellm/proxy/_experimental/mcp_server/cost_calculator.py`
- `litellm/proxy/_experimental/mcp_server/db.py`
- `litellm/proxy/_experimental/mcp_server/discoverable_endpoints.py`
- `litellm/proxy/_experimental/mcp_server/elicitation_handler.py`
- `litellm/proxy/_experimental/mcp_server/exceptions.py`
- `litellm/proxy/_experimental/mcp_server/guardrail_translation/__init__.py`
- `litellm/proxy/_experimental/mcp_server/guardrail_translation/handler.py`
- `litellm/proxy/_experimental/mcp_server/mcp_context.py`
- `litellm/proxy/_experimental/mcp_server/mcp_debug.py`
- `litellm/proxy/_experimental/mcp_server/mcp_server_manager.py`
- `litellm/proxy/_experimental/mcp_server/oauth2_token_cache.py`
- `litellm/proxy/_experimental/mcp_server/oauth_utils.py`
- `litellm/proxy/_experimental/mcp_server/openapi_to_mcp_generator.py`
- `litellm/proxy/_experimental/mcp_server/rest_endpoints.py`
- `litellm/proxy/_experimental/mcp_server/sampling_handler.py`
- `litellm/proxy/_experimental/mcp_server/semantic_tool_filter.py`
- `litellm/proxy/_experimental/mcp_server/server.py`
- `litellm/proxy/_experimental/mcp_server/sse_transport.py`
- `litellm/proxy/_experimental/mcp_server/tool_registry.py`
- `litellm/proxy/_experimental/mcp_server/toolset_db.py`
- `litellm/proxy/_experimental/mcp_server/ui_session_utils.py`
- `litellm/proxy/_experimental/mcp_server/utils.py`
- `litellm/proxy/_experimental/out/assets/logos/mcp_logo.png`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `deploy/charts/litellm-helm/templates/NOTES.txt`
- `deploy/charts/litellm-helm/templates/_helpers.tpl`
- `deploy/charts/litellm-helm/templates/configmap-litellm.yaml`
- `deploy/charts/litellm-helm/templates/deployment.yaml`
- `deploy/charts/litellm-helm/templates/extra-resources.yaml`
- `deploy/charts/litellm-helm/templates/hpa.yaml`
- `deploy/charts/litellm-helm/templates/ingress.yaml`
- `deploy/charts/litellm-helm/templates/keda.yaml`
- `deploy/charts/litellm-helm/templates/migrations-job.yaml`
- `deploy/charts/litellm-helm/templates/poddisruptionbudget.yaml`
- `deploy/charts/litellm-helm/templates/secret-dbcredentials.yaml`
- `deploy/charts/litellm-helm/templates/secret-masterkey.yaml`
- `deploy/charts/litellm-helm/templates/service.yaml`
- `deploy/charts/litellm-helm/templates/serviceaccount.yaml`
- `deploy/charts/litellm-helm/templates/servicemonitor.yaml`
- `deploy/charts/litellm-helm/templates/tests/test-connection.yaml`
- `deploy/charts/litellm-helm/templates/tests/test-env-vars.yaml`
- `deploy/charts/litellm-helm/templates/tests/test-servicemonitor.yaml`
- `helm/litellm/templates/NOTES.txt`
- `helm/litellm/templates/_helpers.tpl`
- `helm/litellm/templates/backend/deployment.yaml`
- `helm/litellm/templates/backend/hpa.yaml`
- `helm/litellm/templates/backend/service.yaml`
- `helm/litellm/templates/gateway/configmap.yaml`
- `helm/litellm/templates/gateway/deployment.yaml`
- `helm/litellm/templates/gateway/hpa.yaml`
- `helm/litellm/templates/gateway/service.yaml`
- `helm/litellm/templates/ingress.yaml`
- `helm/litellm/templates/migrations-job.yaml`
- `helm/litellm/templates/serviceaccount.yaml`
- `helm/litellm/templates/ui/deployment.yaml`
- `helm/litellm/templates/ui/hpa.yaml`
- `helm/litellm/templates/ui/service.yaml`
- `litellm/llms/anthropic/skills/__init__.py`
- `litellm/llms/anthropic/skills/readme.md`
- `litellm/llms/anthropic/skills/transformation.py`
- `litellm/llms/base_llm/skills/__init__.py`
- `litellm/llms/base_llm/skills/transformation.py`
- `litellm/llms/litellm_proxy/skills/README.md`
- `litellm/llms/litellm_proxy/skills/__init__.py`
- `litellm/llms/litellm_proxy/skills/code_execution.py`
- `litellm/llms/litellm_proxy/skills/constants.py`
- `litellm/llms/litellm_proxy/skills/handler.py`
- `litellm/llms/litellm_proxy/skills/prompt_injection.py`
- `litellm/llms/litellm_proxy/skills/sandbox_executor.py`
- `litellm/llms/litellm_proxy/skills/transformation.py`
- `litellm/proxy/client/cli/commands/__init__.py`
- `litellm/proxy/client/cli/commands/agents.py`
- `litellm/proxy/client/cli/commands/auth.py`
- `litellm/proxy/client/cli/commands/chat.py`
- `litellm/proxy/client/cli/commands/credentials.py`
- `litellm/proxy/client/cli/commands/http.py`
- `litellm/proxy/client/cli/commands/keys.py`
- `litellm/proxy/client/cli/commands/models.py`
- `litellm/proxy/client/cli/commands/teams.py`
- `litellm/proxy/client/cli/commands/users.py`
- `litellm/skills/__init__.py`
- `litellm/skills/main.py`
- `ui/litellm-dashboard/src/components/templates/KeyInfoHeader.test.tsx`
- `ui/litellm-dashboard/src/components/templates/KeyInfoHeader.tsx`
- `ui/litellm-dashboard/src/components/templates/KeyInfoView.handleKeyUpdate.test.tsx`
- `ui/litellm-dashboard/src/components/templates/key_edit_view.test.tsx`
- `ui/litellm-dashboard/src/components/templates/key_edit_view.tsx`
- `ui/litellm-dashboard/src/components/templates/key_info_view.budget_display.test.tsx`
- `ui/litellm-dashboard/src/components/templates/key_info_view.test.tsx`
- `ui/litellm-dashboard/src/components/templates/key_info_view.tsx`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `deploy/charts/litellm-helm/templates/tests/test-connection.yaml`
- `deploy/charts/litellm-helm/templates/tests/test-env-vars.yaml`
- `deploy/charts/litellm-helm/templates/tests/test-servicemonitor.yaml`
- `deploy/charts/litellm-helm/tests/deployment_command_args_labels_tests.yaml`
- `deploy/charts/litellm-helm/tests/deployment_tests.yaml`
- `deploy/charts/litellm-helm/tests/hpa_tests.yaml`
- `deploy/charts/litellm-helm/tests/ingress_tests.yaml`
- `deploy/charts/litellm-helm/tests/masterkey-secret_tests.yaml`
- `deploy/charts/litellm-helm/tests/migrations-job_tests.yaml`
- `deploy/charts/litellm-helm/tests/pdb_tests.yaml`
- `deploy/charts/litellm-helm/tests/service_tests.yaml`
- `docker/tests/nonroot.yaml`
- `litellm-proxy-extras/tests/__init__.py`
- `litellm-proxy-extras/tests/test_setup_database_fail_fast.py`
- `tests/README.MD`
- `tests/__init__.py`
- `tests/_flush_vcr_cache.py`
- `tests/_live_test_helpers.py`
- `tests/_openai_record_replay_proxy.py`
- `tests/_vcr_conftest_common.py`
- `tests/_vcr_redis_persister.py`
- `tests/agent_tests/local_only_agent_tests/local_vertex_agent.py`
- `tests/agent_tests/local_only_agent_tests/test_a2a.py`
- `tests/agent_tests/local_only_agent_tests/test_a2a_completion_bridge.py`
- `tests/agent_tests/test_a2a_agent.py`
- `tests/audio_tests/aws_polly_speech.mp3`
- `tests/audio_tests/aws_polly_speech_generative.mp3`
- `tests/audio_tests/azure_speech.mp3`
- `tests/audio_tests/conftest.py`
- `tests/audio_tests/eagle.wav`
- `tests/audio_tests/gettysburg.wav`
- `tests/audio_tests/runwayml_speech.mp3`
- `tests/audio_tests/speech_vertex.mp3`
- `tests/audio_tests/test_audio_speech.py`
- `tests/audio_tests/test_whisper.py`
- `tests/basic_proxy_startup_tests/test_basic_proxy_startup.py`
- `tests/batches_tests/batch_job_results_furniture.jsonl`
- `tests/batches_tests/bedrock_batch_completions.jsonl`
- `tests/batches_tests/conftest.py`
- `tests/batches_tests/openai_batch_completions.jsonl`
- `tests/batches_tests/pathrise-convert-1606954137718.json`
- `tests/batches_tests/test_batch_custom_pricing.py`
- `tests/batches_tests/test_batch_rate_limits.py`
- `tests/batches_tests/test_batches_logging_unit_tests.py`
- `tests/batches_tests/test_bedrock_files_and_batches.py`
- `tests/batches_tests/test_fine_tuning_api.py`
- `tests/batches_tests/test_hosted_vllm_batches_and_files.py`
- `tests/batches_tests/test_manus_files_all_methods.py`
- `tests/batches_tests/test_openai_batches_and_files.py`
- `tests/batches_tests/vertex_batch_completions.jsonl`
- `tests/benchmarks/__init__.py`
- `tests/benchmarks/test_benchmarks.py`
- `tests/code_coverage_tests/azure_client_usage_test.py`
- `tests/code_coverage_tests/ban_constant_numbers.py`
- `tests/code_coverage_tests/ban_copy_deepcopy_kwargs.py`
- `tests/code_coverage_tests/bedrock_pricing.py`
- `tests/code_coverage_tests/callback_manager_test.py`
- `tests/code_coverage_tests/check_data_replace_usage.py`
- `tests/code_coverage_tests/check_endpoint_coverage.py`
- `tests/code_coverage_tests/check_fastuuid_usage.py`
- `tests/code_coverage_tests/check_get_model_cost_key_performance.py`
- `tests/code_coverage_tests/check_guardrail_apply_decorator.py`
- `tests/code_coverage_tests/check_licenses.py`
- `tests/code_coverage_tests/check_provider_folders_documented.py`
- `tests/code_coverage_tests/check_spanattributes_value_usage.py`
- `tests/code_coverage_tests/check_unsafe_enterprise_import.py`
- `tests/code_coverage_tests/code_qa_check_tests.py`
- `tests/code_coverage_tests/enforce_llms_folder_style.py`
- `tests/code_coverage_tests/ensure_async_clients_test.py`
- `tests/code_coverage_tests/info_log_check.py`
- `tests/code_coverage_tests/liccheck.ini`
- `tests/code_coverage_tests/license_cache.json`
- `tests/code_coverage_tests/litellm_logging_code_coverage.py`
- `tests/code_coverage_tests/log.txt`
- `tests/code_coverage_tests/memory_test.py`
- `tests/code_coverage_tests/pass_through_code_coverage.py`
- `tests/code_coverage_tests/prevent_key_leaks_in_exceptions.py`
- `tests/code_coverage_tests/recursive_detector.py`
- `tests/code_coverage_tests/router_code_coverage.py`
- `tests/code_coverage_tests/router_enforce_line_length.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/_test-unit-base.yml`
- `.github/workflows/auto_update_price_and_context_window.yml`
- `.github/workflows/auto_update_price_and_context_window_file.py`
- `.github/workflows/check-schema-sync.yml`
- `.github/workflows/check-ui-api-types.yml`
- `.github/workflows/check_duplicate_issues.yml`
- `.github/workflows/codeql.yml`
- `.github/workflows/codspeed.yml`
- `.github/workflows/conventional-commits.yml`
- `.github/workflows/create-release-branch.yml`
- `.github/workflows/create-release.yml`
- `.github/workflows/create_daily_oss_agent_shin_branch.yml`
- `.github/workflows/create_daily_staging_branch.yml`
- `.github/workflows/guard-fork-dependencies.yml`
- `.github/workflows/guard-main-branch.yml`
- `.github/workflows/helm_unit_test.yml`
- `.github/workflows/issue-keyword-labeler.yml`
- `.github/workflows/label-component.yml`
- `.github/workflows/mutation-test.yml`
- `.github/workflows/run_llm_translation_tests.py`
- `.github/workflows/scorecard.yml`
- `.github/workflows/stale.yml`
- `.github/workflows/sync-schema.yml`
- `.github/workflows/test-code-quality.yml`
- `.github/workflows/test-linting.yml`
- `.github/workflows/test-litellm-ui-build.yml`
- `.github/workflows/test-mcp.yml`
- `.github/workflows/test-model-map.yaml`
- `.github/workflows/test-semgrep.yml`
- `.github/workflows/test-unit-core-utils.yml`
- `.github/workflows/test-unit-documentation.yml`
- `.github/workflows/test-unit-enterprise-routing.yml`
- `.github/workflows/test-unit-integrations.yml`
- `.github/workflows/test-unit-llm-providers.yml`
- `.github/workflows/test-unit-misc.yml`
- `.github/workflows/test-unit-proxy-auth.yml`
- `.github/workflows/test-unit-proxy-db.yml`
- `.github/workflows/test-unit-proxy-endpoints.yml`
- `.github/workflows/test-unit-proxy-infra.yml`
- `.github/workflows/test-unit-proxy-legacy.yml`
- `.github/workflows/test-unit-responses-caching-types.yml`
- `.github/workflows/test_server_root_path.yml`
- `.github/workflows/zizmor.yml`
- `Dockerfile`
- `backend/Dockerfile`
- `cookbook/litellm-ollama-docker-image/Dockerfile`
- `docker-compose.hardened.yml`
- `docker-compose.yml`
- `gateway/Dockerfile`
- `migrations/Dockerfile`
- `ui/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 4346 |
| .tsx | 876 |
| .ts | 303 |
| .yaml | 186 |
| .svg | 156 |
| .sql | 130 |
| .json | 128 |
| .txt | 126 |
| .md | 119 |
| .js | 113 |
| .png | 101 |
| .yml | 53 |
| .ipynb | 41 |
| .jsonl | 41 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `backend/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `litellm/ 내부 책임 분리`
- `deploy/charts/litellm-helm/templates/NOTES.txt 스펙/명령 의미`
- `deploy/charts/litellm-helm/templates/_helpers.tpl 스펙/명령 의미`
- `deploy/charts/litellm-helm/templates/configmap-litellm.yaml 스펙/명령 의미`
- `deploy/charts/litellm-helm/templates/deployment.yaml 스펙/명령 의미`
- `deploy/charts/litellm-helm/templates/extra-resources.yaml 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `backend/Dockerfile 실행 스크립트와 패키지 경계`
- `cookbook/anthropic_agent_sdk/requirements.txt 실행 스크립트와 패키지 경계`
- `cookbook/gollem_go_agent_framework/go.mod 실행 스크립트와 패키지 경계`
- `cookbook/litellm-ollama-docker-image/Dockerfile 실행 스크립트와 패키지 경계`

