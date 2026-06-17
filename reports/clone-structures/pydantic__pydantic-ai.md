# pydantic/pydantic-ai 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/pydantic__pydantic-ai |
| remote | https://github.com/pydantic/pydantic-ai |
| HEAD | 3c98a10 (2026-06-12) Add agent guideline: avoid `getattr`/`setattr` over our own statically-known fields (#5902) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 2095 |
| dirs | 167 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `<em>Pydantic AI is a Python agent framework designed to help you quickly, confidently, and painlessly build production grade applications and workflows with Generative AI.</em>`, `Why use Pydantic AI`, `Hello World Example`, `Define a very simple agent including the model to use, you can also set the model when running the agent.`, `Run the agent synchronously, conducting a conversation with the LLM.`, `Tools & Dependency Injection Example`, `SupportDependencies is used to pass data, connections, and logic into the model that will be needed when running`, `instructions and tool functions. Dependency injection provides a type-safe way to customise the behavior of your agents.`, `This Pydantic model defines the structure of the output returned by the agent.`, `This agent will act as first-tier support in a bank.`, `Agents are generic in the type of dependencies they accept and the type of output they return.`, `In this case, the support agent has type `Agent[SupportDependencies, SupportOutput]`.`, `Dynamic instructions can make use of dependency injection.`, `Dependencies are carried via the `RunContext` argument, which is parameterized with the `deps_type` from above.`, `If the type annotation here is wrong, static type checkers will catch it.`, `The `tool` decorator let you register functions which the LLM may call while responding to a user.`, `Again, dependencies are carried via `RunContext`, any other arguments become the tool schema passed to the LLM.`, `Pydantic is used to validate these arguments, and errors are passed back to the LLM so it can retry.`

> <div align="center" <a href="https //ai.pydantic.dev/" <picture <source media="(prefers color scheme dark)" srcset="https //pydantic.dev/docs/ai/img/pydantic ai dark.svg" <img src="https //pydantic.dev/docs/ai/img/pydantic ai light.svg" alt="Pydantic AI" </picture </a </div <div align="center" <h3 GenAI Agent Framework, the Pydantic way</h3 </div <div align="center" <a href="https //github.com/pydantic/pydantic ai/actions/workflows/ci.yml?query=branch%3Amain" <img src="https //github.com/pydantic/pydantic ai/actions/workflows/ci.yml/badge.svg?event=push" alt="CI" </a <a href="https //coverage badge.samuelcolvin.workers.dev/redirect/pydantic/pydantic ai" <img src="https //coverage badge.samuelcolvin.workers.dev/pydantic/pydantic ai.svg" alt="Coverage" </a <a href="https //pypi.python.org/pypi/pydantic ai" <img src="https //img.shields.io/pypi/v/pydantic ai.svg" alt="PyPI" </a <a href="htt

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .claude | dir |
| .gemini | dir |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| agent_docs | dir |
| AGENTS.md | file |
| clai | dir |
| CLAUDE.md | other |
| CONTRIBUTING.md | other |
| docs | dir |
| docs-site | dir |
| examples | dir |
| LICENSE | file |
| Makefile | file |
| mkdocs.yml | file |
| pydantic_ai_slim | dir |
| pydantic_evals | dir |
| pydantic_graph | dir |
| pyproject.toml | file |
| README.md | file |
| scripts | dir |
| tests | dir |
| uv.lock | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| tests/ | 1372 |
| pydantic_ai_slim/ | 275 |
| docs/ | 199 |
| .github/ | 83 |
| examples/ | 50 |
| pydantic_graph/ | 39 |
| pydantic_evals/ | 33 |
| (root) | 10 |
| scripts/ | 9 |
| docs-site/ | 7 |
| clai/ | 6 |
| .claude/ | 5 |
| agent_docs/ | 5 |
| .agents/ | 1 |
| .gemini/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 199 | preferred |
| examples/ | 50 | preferred |
| tests/ | 1372 | preferred |
| scripts/ | 9 | preferred |
| tests/models/ | 1011 | large |
| tests/models/cassettes/ | 888 | large |
| pydantic_ai_slim/ | 275 | large |
| pydantic_ai_slim/pydantic_ai/ | 272 | large |
| tests/cassettes/ | 174 | large |
| .github/ | 83 | large |
| docs/api/ | 64 | large |
| tests/cassettes/test_embeddings/ | 54 | large |
| .github/workflows/ | 51 | large |
| examples/pydantic_ai_examples/ | 47 | large |
| tests/providers/ | 43 | large |
| pydantic_graph/ | 39 | large |
| pydantic_ai_slim/pydantic_ai/providers/ | 36 | large |
| pydantic_graph/pydantic_graph/ | 36 | large |
| pydantic_evals/ | 33 | large |
| pydantic_ai_slim/pydantic_ai/capabilities/ | 31 | large |
| pydantic_ai_slim/pydantic_ai/durable_exec/ | 31 | large |
| pydantic_evals/pydantic_evals/ | 30 | large |
| tests/cassettes/test_temporal/ | 26 | large |
| pydantic_ai_slim/pydantic_ai/models/ | 25 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `clai/pyproject.toml`
- `docs-site/package.json`
- `docs-site/tsconfig.json`
- `examples/pyproject.toml`
- `pydantic_ai_slim/pyproject.toml`
- `pydantic_evals/pyproject.toml`
- `pydantic_graph/pyproject.toml`
- `pyproject.toml`
- `uv.lock`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| docs-site/package.json | my-static-site | typecheck, typegen, deploy, dev | @pydantic/logfire-api, @pydantic/logfire-cf-workers, marked |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| clai/pyproject.toml | clai | false | true | false | false |
| examples/pyproject.toml | pydantic-ai-examples | false | true | true | false |
| pydantic_ai_slim/pyproject.toml | pydantic-ai-slim | false | true | false | false |
| pydantic_evals/pyproject.toml | pydantic-evals | false | true | false | false |
| pydantic_graph/pyproject.toml | pydantic-graph | false | true | false | false |
| pyproject.toml | pydantic-ai | false | true | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `clai/README.md`
- `docs-site/README.md`
- `docs/.cursor/rules.mdc`
- `docs/.hooks/algolia.py`
- `docs/.hooks/main.py`
- `docs/.hooks/snippets.py`
- `docs/.hooks/test_snippets.py`
- `docs/.overrides/.icons/logfire/logo.svg`
- `docs/.overrides/partials/search.html`
- `docs/.partials/index-header.html`
- `docs/AGENTS.md`
- `docs/a2a.md`
- `docs/agent-spec.md`
- `docs/agent.md`
- `docs/api/ag_ui.md`
- `docs/api/agent.md`
- `docs/api/capabilities.md`
- `docs/api/common_tools.md`
- `docs/api/concurrency.md`
- `docs/api/direct.md`
- `docs/api/durable_exec.md`
- `docs/api/embeddings.md`
- `docs/api/exceptions.md`
- `docs/api/ext.md`
- `docs/api/fasta2a.md`
- `docs/api/format_prompt.md`
- `docs/api/function_signature.md`
- `docs/api/mcp.md`
- `docs/api/messages.md`
- `docs/api/models/anthropic.md`
- `docs/api/models/base.md`
- `docs/api/models/bedrock.md`
- `docs/api/models/cerebras.md`
- `docs/api/models/cohere.md`
- `docs/api/models/fallback.md`
- `docs/api/models/function.md`
- `docs/api/models/google.md`
- `docs/api/models/groq.md`
- `docs/api/models/huggingface.md`
- `docs/api/models/instrumented.md`
- `docs/api/models/mcp-sampling.md`
- `docs/api/models/mistral.md`
- `docs/api/models/ollama.md`
- `docs/api/models/openai.md`
- `docs/api/models/openrouter.md`
- `docs/api/models/outlines.md`
- `docs/api/models/test.md`
- `docs/api/models/wrapper.md`
- `docs/api/models/xai.md`
- ... 30 more

### 에이전트 지침 후보

- `.agents/skills/complete-partial-pr/SKILL.md`
- `.claude/settings.json`
- `.claude/skills/address-feedback/SKILL.md`
- `.claude/skills/pre-push-review/SKILL.md`
- `.claude/skills/testing-skill/SKILL.md`
- `.claude/skills/testing-skill/parse_cassette.py`
- `AGENTS.md`
- `docs/.cursor/rules.mdc`
- `docs/AGENTS.md`
- `docs/api/mcp.md`
- `docs/api/models/mcp-sampling.md`
- `docs/coding-agent-skills.md`
- `docs/mcp/client.md`
- `docs/mcp/fastmcp-client.md`
- `docs/mcp/overview.md`
- `docs/mcp/server.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/SKILL.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/AGENTS-CORE.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/ARCHITECTURE.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/CAPABILITIES-AND-HOOKS.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/COMMON-TASKS.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/INPUT-AND-HISTORY.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/NATIVE-TOOLS.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/ON-DEMAND-CAPABILITIES.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/ORCHESTRATION-AND-INTEGRATIONS.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/TESTING-AND-DEBUGGING.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/TOOLS-ADVANCED.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/TOOLS-CORE.md`
- `pydantic_ai_slim/pydantic_ai/AGENTS.md`
- `pydantic_ai_slim/pydantic_ai/_mcp.py`
- `pydantic_ai_slim/pydantic_ai/capabilities/AGENTS.md`
- `pydantic_ai_slim/pydantic_ai/capabilities/mcp.py`
- `pydantic_ai_slim/pydantic_ai/durable_exec/AGENTS.md`
- `pydantic_ai_slim/pydantic_ai/durable_exec/dbos/_fastmcp_toolset.py`
- `pydantic_ai_slim/pydantic_ai/durable_exec/dbos/_mcp.py`
- `pydantic_ai_slim/pydantic_ai/durable_exec/dbos/_mcp_server.py`
- `pydantic_ai_slim/pydantic_ai/durable_exec/dbos/_mcp_toolset.py`
- `pydantic_ai_slim/pydantic_ai/durable_exec/prefect/_mcp_server.py`
- `pydantic_ai_slim/pydantic_ai/durable_exec/temporal/_fastmcp_toolset.py`
- `pydantic_ai_slim/pydantic_ai/durable_exec/temporal/_mcp.py`
- `pydantic_ai_slim/pydantic_ai/durable_exec/temporal/_mcp_server.py`
- `pydantic_ai_slim/pydantic_ai/durable_exec/temporal/_mcp_toolset.py`
- `pydantic_ai_slim/pydantic_ai/mcp.py`
- `pydantic_ai_slim/pydantic_ai/models/AGENTS.md`
- `pydantic_ai_slim/pydantic_ai/models/mcp_sampling.py`
- `pydantic_ai_slim/pydantic_ai/native_tools/AGENTS.md`
- `pydantic_ai_slim/pydantic_ai/profiles/AGENTS.md`
- `pydantic_ai_slim/pydantic_ai/providers/AGENTS.md`
- `pydantic_ai_slim/pydantic_ai/toolsets/AGENTS.md`
- `pydantic_ai_slim/pydantic_ai/toolsets/fastmcp.py`
- `pydantic_ai_slim/pydantic_ai/ui/AGENTS.md`
- `tests/AGENTS.md`
- `tests/cassettes/test_dbos/test_fastmcp_toolset.yaml`
- `tests/cassettes/test_dbos/test_mcp_tools_not_cached_when_disabled.yaml`
- `tests/cassettes/test_mcp/test_agent_run_stream_with_mcp_server_http.yaml`
- `tests/cassettes/test_mcp/test_agent_with_server_not_running.yaml`
- `tests/cassettes/test_mcp/test_agent_with_stdio_server.yaml`
- `tests/cassettes/test_mcp/test_custom_http_client_not_closed.yaml`
- `tests/cassettes/test_mcp/test_tool_returning_audio_resource.yaml`
- `tests/cassettes/test_mcp/test_tool_returning_audio_resource_link.yaml`
- `tests/cassettes/test_mcp/test_tool_returning_dict.yaml`
- `tests/cassettes/test_mcp/test_tool_returning_error.yaml`
- `tests/cassettes/test_mcp/test_tool_returning_image.yaml`
- `tests/cassettes/test_mcp/test_tool_returning_image_resource.yaml`
- `tests/cassettes/test_mcp/test_tool_returning_image_resource_link.yaml`
- `tests/cassettes/test_mcp/test_tool_returning_multiple_items.yaml`
- `tests/cassettes/test_mcp/test_tool_returning_none.yaml`
- `tests/cassettes/test_mcp/test_tool_returning_str.yaml`
- `tests/cassettes/test_mcp/test_tool_returning_text_resource.yaml`
- `tests/cassettes/test_mcp/test_tool_returning_text_resource_link.yaml`
- `tests/cassettes/test_mcp/test_tool_returning_unstructured_dict.yaml`
- `tests/cassettes/test_temporal/test_fastmcp_toolset.yaml`
- `tests/cassettes/test_temporal/test_mcp_dynamic_toolset_in_workflow.yaml`
- `tests/cassettes/test_temporal/test_mcp_tools_cached_across_activities.yaml`
- `tests/cassettes/test_temporal/test_mcp_tools_not_cached_when_disabled.yaml`
- `tests/cassettes/test_temporal/test_mcptoolset_dynamic_toolset_in_workflow.yaml`
- `tests/cassettes/test_temporal/test_mcptoolset_in_temporal_workflow.yaml`
- `tests/example_modules/mcp_server.py`
- `tests/mcp_server.py`
- `tests/models/cassettes/test_anthropic/test_anthropic_mcp_servers.yaml`
- ... 11 more

### 스펙/템플릿/명령/스킬 후보

- `.agents/skills/complete-partial-pr/SKILL.md`
- `.claude/skills/address-feedback/SKILL.md`
- `.claude/skills/pre-push-review/SKILL.md`
- `.claude/skills/testing-skill/SKILL.md`
- `.claude/skills/testing-skill/parse_cassette.py`
- `agent_docs/api-design.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/SKILL.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/AGENTS-CORE.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/ARCHITECTURE.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/CAPABILITIES-AND-HOOKS.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/COMMON-TASKS.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/INPUT-AND-HISTORY.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/NATIVE-TOOLS.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/ON-DEMAND-CAPABILITIES.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/ORCHESTRATION-AND-INTEGRATIONS.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/TESTING-AND-DEBUGGING.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/TOOLS-ADVANCED.md`
- `pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/TOOLS-CORE.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/AGENTS.md`
- `tests/__init__.py`
- `tests/_inline_snapshot.py`
- `tests/assets/dummy.pdf`
- `tests/assets/dummy.txt`
- `tests/assets/kiwi.jpg`
- `tests/assets/marcelo.mp3`
- `tests/assets/product_name.txt`
- `tests/assets/small_video.mp4`
- `tests/cassette_utils.py`
- `tests/cassettes/test_ag_ui/test_thinking_roundtrip_anthropic.yaml`
- `tests/cassettes/test_capabilities/TestImageGenerationCapability.test_image_generation_local_fallback.yaml`
- `tests/cassettes/test_capabilities/TestImageGenerationCapability.test_image_generation_local_fallback_google.yaml`
- `tests/cassettes/test_dbos/test_complex_agent_run_in_workflow.yaml`
- `tests/cassettes/test_dbos/test_complex_agent_run_sequential_tool.yaml`
- `tests/cassettes/test_dbos/test_dbos_agent_iter.yaml`
- `tests/cassettes/test_dbos/test_dbos_agent_iter_in_workflow.yaml`
- `tests/cassettes/test_dbos/test_dbos_agent_override_deps_in_workflow.yaml`
- `tests/cassettes/test_dbos/test_dbos_agent_override_tools_in_workflow.yaml`
- `tests/cassettes/test_dbos/test_dbos_agent_run.yaml`
- `tests/cassettes/test_dbos/test_dbos_agent_run_in_workflow_with_toolsets.yaml`
- `tests/cassettes/test_dbos/test_dbos_agent_run_stream.yaml`
- `tests/cassettes/test_dbos/test_dbos_agent_run_sync.yaml`
- `tests/cassettes/test_dbos/test_dbos_agent_run_sync_in_workflow.yaml`
- `tests/cassettes/test_dbos/test_dbos_agent_with_hitl_tool.yaml`
- `tests/cassettes/test_dbos/test_dbos_agent_with_hitl_tool_sync.yaml`
- `tests/cassettes/test_dbos/test_dbos_agent_with_model_retry.yaml`
- `tests/cassettes/test_dbos/test_dbos_agent_with_unserializable_deps_type.yaml`
- `tests/cassettes/test_dbos/test_dbos_model_stream_direct.yaml`
- `tests/cassettes/test_dbos/test_fastmcp_toolset.yaml`
- `tests/cassettes/test_dbos/test_mcp_tools_not_cached_when_disabled.yaml`
- `tests/cassettes/test_dbos/test_multiple_agents.yaml`
- `tests/cassettes/test_dbos/test_simple_agent_run_in_workflow.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_cohere_v3_minimal.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_cohere_v3_with_base_truncate.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_cohere_v3_with_input_type.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_cohere_v3_with_truncate.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_cohere_v4_batch_documents.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_cohere_v4_minimal.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_cohere_v4_truncate_priority.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_cohere_v4_with_dimensions.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_cohere_v4_with_input_type.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_cohere_v4_with_max_tokens.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_cohere_v4_with_truncate.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_cohere_v4_with_truncate_start.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_inference_profile_embed.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_instrumentation.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_nova_minimal.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_nova_multiple_texts.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_nova_with_base_truncate.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_nova_with_dimensions.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_nova_with_embedding_purpose.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_nova_with_truncate.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_nova_with_truncate_start.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_regional_prefix_embed.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_titan_v1_minimal.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_titan_v2_minimal.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_titan_v2_multiple_texts.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_titan_v2_with_dimensions.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_titan_v2_with_normalize_false.yaml`
- `tests/cassettes/test_embeddings/TestBedrock.test_titan_v2_with_normalize_true.yaml`
- `tests/cassettes/test_embeddings/TestCohere.test_count_tokens.yaml`
- `tests/cassettes/test_embeddings/TestCohere.test_documents.yaml`
- `tests/cassettes/test_embeddings/TestCohere.test_embed_error.yaml`
- `tests/cassettes/test_embeddings/TestCohere.test_query.yaml`
- `tests/cassettes/test_embeddings/TestCohere.test_query_with_cohere_truncate.yaml`
- `tests/cassettes/test_embeddings/TestCohere.test_query_with_truncate.yaml`
- `tests/cassettes/test_embeddings/TestGoogle.test_count_tokens.yaml`
- `tests/cassettes/test_embeddings/TestGoogle.test_count_tokens_error.yaml`
- `tests/cassettes/test_embeddings/TestGoogle.test_documents.yaml`
- `tests/cassettes/test_embeddings/TestGoogle.test_embed_error.yaml`
- `tests/cassettes/test_embeddings/TestGoogle.test_instrumentation.yaml`
- `tests/cassettes/test_embeddings/TestGoogle.test_query.yaml`
- `tests/cassettes/test_embeddings/TestGoogle.test_query_with_dimensions.yaml`
- `tests/cassettes/test_embeddings/TestGoogle.test_query_with_task_type.yaml`
- `tests/cassettes/test_embeddings/TestGoogle.test_vertex_query.yaml`
- `tests/cassettes/test_embeddings/TestOpenAI.test_count_tokens.yaml`
- `tests/cassettes/test_embeddings/TestOpenAI.test_documents.yaml`
- `tests/cassettes/test_embeddings/TestOpenAI.test_embed_error.yaml`
- `tests/cassettes/test_embeddings/TestOpenAI.test_instrumentation.yaml`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/after-ci.yml`
- `.github/workflows/agentics-maintenance.yml`
- `.github/workflows/at-claude.yml`
- `.github/workflows/bots.yml`
- `.github/workflows/ci.yml`
- `.github/workflows/docs-preview.yml`
- `.github/workflows/gateway-model-health.yml`
- `.github/workflows/harness-compat.yml`
- `.github/workflows/manually-deploy-docs.yml`
- `.github/workflows/pr-guard.yml`
- `.github/workflows/pydantic-ai-bug-hunter.lock.yml`
- `.github/workflows/pydantic-ai-bug-hunter.md`
- `.github/workflows/pydantic-ai-docs-drift.lock.yml`
- `.github/workflows/pydantic-ai-docs-drift.md`
- `.github/workflows/pydantic-ai-pr-review.lock.yml`
- `.github/workflows/pydantic-ai-pr-review.md`
- `.github/workflows/pydantic-ai-provider-mapping-sweep.lock.yml`
- `.github/workflows/pydantic-ai-provider-mapping-sweep.md`
- `.github/workflows/pydantic-ai-provider-parity-explore.lock.yml`
- `.github/workflows/pydantic-ai-provider-parity-explore.md`
- `.github/workflows/pydantic-ai-regression-detector.lock.yml`
- `.github/workflows/pydantic-ai-regression-detector.md`
- `.github/workflows/pydantic-ai-roundtrip-sweep.lock.yml`
- `.github/workflows/pydantic-ai-roundtrip-sweep.md`
- `.github/workflows/pydantic-ai-stale-issues-finder.lock.yml`
- `.github/workflows/pydantic-ai-stale-issues-finder.md`
- `.github/workflows/pydantic-ai-streaming-resilience-sweep.lock.yml`
- `.github/workflows/pydantic-ai-streaming-resilience-sweep.md`
- `.github/workflows/pydantic-ai-ui-security-review.lock.yml`
- `.github/workflows/pydantic-ai-ui-security-review.md`
- `.github/workflows/shared/checkout.md`
- `.github/workflows/shared/engine-minimax.md`
- `.github/workflows/shared/network-vendor-domains.md`
- `.github/workflows/shared/otel-logfire.md`
- `.github/workflows/shared/pre-agent-steps.md`
- `.github/workflows/shared/pre-steps.md`
- `.github/workflows/shared/prompts/pydantic-ai-bug-hunter.md`
- `.github/workflows/shared/prompts/pydantic-ai-docs-drift.md`
- `.github/workflows/shared/prompts/pydantic-ai-pr-review.md`
- `.github/workflows/shared/prompts/pydantic-ai-provider-mapping-sweep.md`
- `.github/workflows/shared/prompts/pydantic-ai-provider-parity-explore.md`
- `.github/workflows/shared/prompts/pydantic-ai-regression-detector.md`
- `.github/workflows/shared/prompts/pydantic-ai-roundtrip-sweep.md`
- `.github/workflows/shared/prompts/pydantic-ai-stale-issues-finder.md`
- `.github/workflows/shared/prompts/pydantic-ai-streaming-resilience-sweep.md`
- `.github/workflows/shared/prompts/pydantic-ai-ui-security-review.md`
- `.github/workflows/shared/repo-context.md`
- `.github/workflows/shared/review-context.md`
- `.github/workflows/shared/rigor.md`
- `.github/workflows/shared/tool-hints.md`
- `.github/workflows/stale.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .yaml | 1146 |
| .py | 611 |
| .md | 240 |
| .yml | 27 |
| .png | 15 |
| .json | 8 |
| .toml | 7 |
| .sh | 6 |
| license | 6 |
| .svg | 4 |
| .typed | 4 |
| .html | 3 |
| .ts | 3 |
| .txt | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `tests/models/ 내부 책임 분리`
- `.agents/skills/complete-partial-pr/SKILL.md 스펙/명령 의미`
- `.claude/skills/address-feedback/SKILL.md 스펙/명령 의미`
- `.claude/skills/pre-push-review/SKILL.md 스펙/명령 의미`
- `.claude/skills/testing-skill/SKILL.md 스펙/명령 의미`
- `.claude/skills/testing-skill/parse_cassette.py 스펙/명령 의미`
- `clai/pyproject.toml 실행 스크립트와 패키지 경계`
- `docs-site/package.json 실행 스크립트와 패키지 경계`
- `docs-site/tsconfig.json 실행 스크립트와 패키지 경계`
- `examples/pyproject.toml 실행 스크립트와 패키지 경계`
- `pydantic_ai_slim/pyproject.toml 실행 스크립트와 패키지 경계`

