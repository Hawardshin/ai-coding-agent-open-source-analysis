# potpie-ai/potpie 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/potpie-ai__potpie |
| remote | https://github.com/potpie-ai/potpie |
| HEAD | 602f4db (2026-06-17) Restore detached context-engine daemon lifecycle (#889) |
| branch | main |
| groups | spec-driven-20 |
| files | 1494 |
| dirs | 274 |
| stack | Python, Rust |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Potpie`, `Quick Start`, `Prerequisites`, `Installation`, `Optional: durable agent runtime with Hatchet`, `How it works?`, `GitHub Authentication`, `Self-Hosted Git Providers`, `Potpie's Prebuilt Agents`, `Custom Agents`, `Use Cases`, `Extensions &amp; Integrations`, `Community & Support`, `License`, `Contributors`

> <p align="center" <a href="https //potpie.ai?utm source=github" <picture <source media="(prefers color scheme dark)" srcset="./assets/readme logo dark.svg" / <source media="(prefers color scheme light)" srcset="./assets/readme logo light.svg" / <img src="./assets/logo light.svg" alt="Potpie AI logo" / </picture </a </p Potpie Potpie turns your entire codebase into a knowledge graph a structural index of every file, class, and function, capturing all their relationships and what each part of the code does in context of everything else. AI agents built on this graph can reason about your code with the precision of someone who wrote it from debugging to feature development. <p align="center" <img width="700" alt="Potpie Dashboard" src="./assets/dashboard.gif" / </p <p align="center" <a href="https //docs.potpie.ai" <img src="https //img.shields.io/badge/Docs Read blue?logo=readthedocs&logoC

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .coverage | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| assets | dir |
| docs | dir |
| legacy | dir |
| LICENSE | file |
| potpie | dir |
| pyproject.toml | file |
| README.md | file |
| uv.lock | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| potpie/ | 842 |
| legacy/ | 617 |
| docs/ | 12 |
| .github/ | 9 |
| (root) | 7 |
| assets/ | 7 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 12 | preferred |
| potpie/ | 842 | large |
| potpie/context-engine/ | 663 | large |
| legacy/ | 617 | large |
| legacy/app/ | 435 | large |
| legacy/app/modules/ | 381 | large |
| potpie/context-engine/adapters/ | 221 | large |
| potpie/context-engine/tests/ | 186 | large |
| legacy/tests/ | 99 | large |
| potpie/context-engine/domain/ | 98 | large |
| legacy/tests/unit/ | 96 | large |
| potpie/context-engine/benchmarks/ | 86 | large |
| potpie/sandbox/ | 78 | large |
| potpie/sandbox/sandbox/ | 46 | large |
| potpie/integrations/ | 42 | large |
| potpie/parsing/ | 42 | large |
| legacy/app/alembic/ | 39 | large |
| potpie/context-engine/application/ | 37 | large |
| potpie/integrations/integrations/ | 36 | large |
| legacy/scripts/ | 27 | large |
| legacy/seed/ | 21 | large |
| legacy/deployment/ | 20 | large |
| potpie/parsing/parsing/ | 18 | large |
| potpie/sandbox/tests/ | 18 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `legacy/pyproject.toml`
- `legacy/uv.lock`
- `potpie/context-engine/pyproject.toml`
- `potpie/context-engine/uv.lock`
- `potpie/integrations/pyproject.toml`
- `potpie/observability/pyproject.toml`
- `potpie/parsing/Cargo.toml`
- `potpie/parsing/pyproject.toml`
- `potpie/parsing/uv.lock`
- `potpie/sandbox/docker-compose.yml`
- `potpie/sandbox/images/agent-sandbox/Dockerfile`
- `potpie/sandbox/pyproject.toml`
- `potpie/sandbox/uv.lock`
- `pyproject.toml`
- `uv.lock`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| legacy/pyproject.toml | potpie-legacy | false | true | true | true |
| potpie/context-engine/pyproject.toml | potpie-context-engine | false | true | true | true |
| potpie/integrations/pyproject.toml | potpie-integrations | false | false | false | true |
| potpie/observability/pyproject.toml | potpie-observability | false | false | false | false |
| potpie/parsing/pyproject.toml | potpie-parsing | false | true | false | false |
| potpie/sandbox/pyproject.toml | potpie-sandbox | false | true | true | true |
| pyproject.toml | potpie | false | true | true | false |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| potpie/parsing/Cargo.toml | parsing_rs | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.github/CONTRIBUTING.md`
- `README.md`
- `docs/async-migration-plan.md`
- `docs/context-graph/README.md`
- `docs/context-graph/architecture.md`
- `docs/context-graph/bench-plan.md`
- `docs/context-graph/cli-flow.md`
- `docs/context-graph/observability.md`
- `docs/context-graph/todo.md`
- `docs/context-graph/vision.md`
- `docs/sandbox-core-setup.md`
- `docs/sandbox-integration-plan.md`
- `docs/telemetry/sentry.md`
- `docs/vscode-extension-debug-handoff.md`
- `legacy/README.md`
- `legacy/app/alembic/README`
- `legacy/app/modules/context_graph/README.md`
- `legacy/app/modules/intelligence/tools/confluence_tools/README.md`
- `legacy/app/modules/intelligence/tools/jira_tools/README.md`
- `legacy/app/modules/intelligence/tools/linear_tools/README.md`
- `legacy/app/modules/intelligence/tools/registry/README.md`
- `legacy/deploy/observability/README.md`
- `legacy/seed/README.md`
- `legacy/tests/README.md`
- `potpie/context-engine/adapters/inbound/cli/README.md`
- `potpie/context-engine/benchmarks/README.md`
- `potpie/context-engine/benchmarks/fixtures/README.md`
- `potpie/integrations/README.md`
- `potpie/parsing/README.md`

### 에이전트 지침 후보

- `legacy/tests/unit/cli/test_potpie_skills.py`
- `potpie/context-engine/adapters/inbound/cli/commands/skills.py`
- `potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/.agents/skills/potpie-agent-context/SKILL.md`
- `potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/.agents/skills/potpie-agent-context/agents/openai.yaml`
- `potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/.agents/skills/potpie-cli-troubleshooting/SKILL.md`
- `potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/.agents/skills/potpie-cli-troubleshooting/agents/openai.yaml`
- `potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/.agents/skills/potpie-cli/SKILL.md`
- `potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/.agents/skills/potpie-cli/agents/openai.yaml`
- `potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/.agents/skills/potpie-pot-scope/SKILL.md`
- `potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/.agents/skills/potpie-pot-scope/agents/openai.yaml`
- `potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/AGENTS.md`
- `potpie/context-engine/adapters/inbound/cli/templates/claude_bundle/.claude/commands/potpie-feature.md`
- `potpie/context-engine/adapters/inbound/cli/templates/claude_bundle/.claude/commands/potpie-record.md`
- `potpie/context-engine/adapters/inbound/cli/templates/claude_bundle/CLAUDE.md`
- `potpie/context-engine/adapters/inbound/mcp/__init__.py`
- `potpie/context-engine/adapters/inbound/mcp/project_access.py`
- `potpie/context-engine/adapters/inbound/mcp/server.py`
- `potpie/context-engine/adapters/inbound/mcp/tools/__init__.py`
- `potpie/context-engine/adapters/outbound/reconciliation/skills/backfill-enumerate-drain/SKILL.md`
- `potpie/context-engine/adapters/outbound/reconciliation/skills/graph-mutation-plan/SKILL.md`
- `potpie/context-engine/adapters/outbound/reconciliation/skills/sandbox-recovery/SKILL.md`
- `potpie/context-engine/adapters/outbound/skills/__init__.py`
- `potpie/context-engine/adapters/outbound/skills/agent_installer.py`
- `potpie/context-engine/adapters/outbound/skills/bundle_catalog.py`
- `potpie/context-engine/adapters/outbound/skills/claude_target.py`
- `potpie/context-engine/application/services/skill_manager.py`
- `potpie/context-engine/domain/ports/services/skill_manager.py`
- `potpie/context-engine/tests/unit/test_diff_sync_ingestion_skills.py`
- `potpie/context-engine/tests/unit/test_jira_project_one_shot_ingestion_skill.py`
- `potpie/context-engine/tests/unit/test_linear_team_one_shot_ingestion_skill.py`
- `potpie/context-engine/tests/unit/test_mcp_project_access.py`
- `potpie/context-engine/tests/unit/test_repo_one_shot_ingestion_skill.py`
- `potpie/context-engine/tests/unit/test_setup_agent_skills.py`
- `potpie/context-engine/tests/unit/test_setup_defer_skills.py`
- `potpie/context-engine/tests/unit/test_skill_manager_global_targets.py`

### 스펙/템플릿/명령/스킬 후보

- `potpie/context-engine/adapters/inbound/cli/commands/__init__.py`
- `potpie/context-engine/adapters/inbound/cli/commands/_common.py`
- `potpie/context-engine/adapters/inbound/cli/commands/auth.py`
- `potpie/context-engine/adapters/inbound/cli/commands/bootstrap.py`
- `potpie/context-engine/adapters/inbound/cli/commands/cloud.py`
- `potpie/context-engine/adapters/inbound/cli/commands/daemon.py`
- `potpie/context-engine/adapters/inbound/cli/commands/graph.py`
- `potpie/context-engine/adapters/inbound/cli/commands/ingest.py`
- `potpie/context-engine/adapters/inbound/cli/commands/ledger.py`
- `potpie/context-engine/adapters/inbound/cli/commands/pots.py`
- `potpie/context-engine/adapters/inbound/cli/commands/query.py`
- `potpie/context-engine/adapters/inbound/cli/commands/service.py`
- `potpie/context-engine/adapters/inbound/cli/commands/skills.py`
- `potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/.agents/skills/potpie-agent-context/SKILL.md`
- `potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/.agents/skills/potpie-agent-context/agents/openai.yaml`
- `potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/.agents/skills/potpie-cli-troubleshooting/SKILL.md`
- `potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/.agents/skills/potpie-cli-troubleshooting/agents/openai.yaml`
- `potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/.agents/skills/potpie-cli/SKILL.md`
- `potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/.agents/skills/potpie-cli/agents/openai.yaml`
- `potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/.agents/skills/potpie-pot-scope/SKILL.md`
- `potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/.agents/skills/potpie-pot-scope/agents/openai.yaml`
- `potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/AGENTS.md`
- `potpie/context-engine/adapters/inbound/cli/templates/claude_bundle/.claude/commands/potpie-feature.md`
- `potpie/context-engine/adapters/inbound/cli/templates/claude_bundle/.claude/commands/potpie-record.md`
- `potpie/context-engine/adapters/inbound/cli/templates/claude_bundle/CLAUDE.md`
- `potpie/context-engine/adapters/outbound/reconciliation/skills/backfill-enumerate-drain/SKILL.md`
- `potpie/context-engine/adapters/outbound/reconciliation/skills/graph-mutation-plan/SKILL.md`
- `potpie/context-engine/adapters/outbound/reconciliation/skills/sandbox-recovery/SKILL.md`
- `potpie/context-engine/adapters/outbound/skills/__init__.py`
- `potpie/context-engine/adapters/outbound/skills/agent_installer.py`
- `potpie/context-engine/adapters/outbound/skills/bundle_catalog.py`
- `potpie/context-engine/adapters/outbound/skills/claude_target.py`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `legacy/tests/README.md`
- `legacy/tests/conftest.py`
- `legacy/tests/smoke/test_debug_agent_smoke.py`
- `legacy/tests/unit/__init__.py`
- `legacy/tests/unit/auth/__init__.py`
- `legacy/tests/unit/auth/test_api_key_service.py`
- `legacy/tests/unit/auth/test_auth_router_helpers.py`
- `legacy/tests/unit/auth/test_auth_service.py`
- `legacy/tests/unit/auth/test_models.py`
- `legacy/tests/unit/auth/test_unified_auth_service.py`
- `legacy/tests/unit/billing/conftest.py`
- `legacy/tests/unit/billing/test_usage_service.py`
- `legacy/tests/unit/celery/__init__.py`
- `legacy/tests/unit/celery/test_agent_tasks.py`
- `legacy/tests/unit/celery/test_base_task.py`
- `legacy/tests/unit/cli/test_potpie_skills.py`
- `legacy/tests/unit/code_provider/__init__.py`
- `legacy/tests/unit/code_provider/test_git_safe.py`
- `legacy/tests/unit/code_provider/test_github_service.py`
- `legacy/tests/unit/code_provider/test_user_local_tunnel_provider.py`
- `legacy/tests/unit/conversations/__init__.py`
- `legacy/tests/unit/conversations/test_access_service.py`
- `legacy/tests/unit/conversations/test_conversation_service.py`
- `legacy/tests/unit/conversations/test_conversation_store.py`
- `legacy/tests/unit/conversations/test_conversations_router_helpers.py`
- `legacy/tests/unit/conversations/test_redis_streaming.py`
- `legacy/tests/unit/conversations/test_sandbox_lifecycle.py`
- `legacy/tests/unit/conversations/test_session_service.py`
- `legacy/tests/unit/conversations/test_session_service_extended.py`
- `legacy/tests/unit/core/__init__.py`
- `legacy/tests/unit/core/test_config_provider.py`
- `legacy/tests/unit/integrations/__init__.py`
- `legacy/tests/unit/integrations/test_integrations_router_helpers.py`
- `legacy/tests/unit/integrations/test_integrations_service.py`
- `legacy/tests/unit/integrations/test_provider_registry.py`
- `legacy/tests/unit/integrations/test_save_linear_integration.py`
- `legacy/tests/unit/intelligence/test_agent_backend_selection.py`
- `legacy/tests/unit/intelligence/test_agent_dispatch_routing.py`
- `legacy/tests/unit/intelligence/test_agent_execution_service.py`
- `legacy/tests/unit/intelligence/test_anthropic_caching_model.py`
- `legacy/tests/unit/intelligence/test_chat_agent_context.py`
- `legacy/tests/unit/intelligence/test_dap_tools.py`
- `legacy/tests/unit/intelligence/test_debug_agent_end_to_end.py`
- `legacy/tests/unit/intelligence/test_debug_agent_hatchet_path.py`
- `legacy/tests/unit/intelligence/test_debug_agent_prompt.py`
- `legacy/tests/unit/intelligence/test_debug_agent_routing.py`
- `legacy/tests/unit/intelligence/test_debug_agent_tool_allowlist.py`
- `legacy/tests/unit/intelligence/test_debug_hypothesis_contract.py`
- `legacy/tests/unit/intelligence/test_get_workspace_debug_context_tool.py`
- `legacy/tests/unit/intelligence/test_hatchet_backend.py`
- `legacy/tests/unit/intelligence/test_hatchet_local_bootstrap.py`
- `legacy/tests/unit/intelligence/test_hatchet_worker_registration.py`
- `legacy/tests/unit/intelligence/test_hypothesis_state_tools.py`
- `legacy/tests/unit/intelligence/test_local_search_tool_registration.py`
- `legacy/tests/unit/intelligence/test_message_helpers.py`
- `legacy/tests/unit/intelligence/test_multi_agent_tool_utils.py`
- `legacy/tests/unit/intelligence/test_parse_failure_signal_tool.py`
- `legacy/tests/unit/intelligence/test_reasoning_manager.py`
- `legacy/tests/unit/intelligence/test_run_validation_tool.py`
- `legacy/tests/unit/intelligence/test_system_agents_regressions.py`
- `legacy/tests/unit/intelligence/test_tool_utils_general.py`
- `legacy/tests/unit/intelligence/test_tunnel_socket_error_normalization.py`
- `legacy/tests/unit/key_management/__init__.py`
- `legacy/tests/unit/key_management/test_secret_manager.py`
- `legacy/tests/unit/key_management/test_secret_storage_handler.py`
- `legacy/tests/unit/media/__init__.py`
- `legacy/tests/unit/media/test_media_service.py`
- `legacy/tests/unit/parsing/__init__.py`
- `legacy/tests/unit/parsing/test_content_hash.py`
- `legacy/tests/unit/parsing/test_encoding_detector.py`
- `legacy/tests/unit/parsing/test_parsing_helper.py`
- `legacy/tests/unit/parsing/test_parsing_schema.py`
- `legacy/tests/unit/parsing/test_parsing_validator.py`
- `legacy/tests/unit/parsing/test_repo_name_normalizer.py`
- `legacy/tests/unit/parsing/test_sandbox_parse_flow.py`
- `legacy/tests/unit/sandbox_tools/__init__.py`
- `legacy/tests/unit/sandbox_tools/test_project_sandbox.py`
- `legacy/tests/unit/sandbox_tools/test_read_helpers.py`
- `legacy/tests/unit/sandbox_tools/test_resolve_auth.py`
- `legacy/tests/unit/sandbox_tools/test_sandbox_tools.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/test.yml`
- `legacy/compose.yaml`
- `legacy/deploy/observability/docker-compose.observability.yml`
- `potpie/sandbox/docker-compose.yml`
- `potpie/sandbox/images/agent-sandbox/Dockerfile`
- `potpie/sandbox/scripts/daytona-overrides/docker-compose.override.yaml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 1246 |
| .yaml | 60 |
| .md | 49 |
| .scm | 32 |
| .sh | 15 |
| .rs | 13 |
| .toml | 8 |
| .yml | 8 |
| .conf | 7 |
| .json | 7 |
| .dockerfile | 6 |
| .lock | 6 |
| .svg | 6 |
| .gitignore | 4 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `potpie/ 내부 책임 분리`
- `potpie/context-engine/ 내부 책임 분리`
- `legacy/ 내부 책임 분리`
- `legacy/app/ 내부 책임 분리`
- `potpie/context-engine/adapters/inbound/cli/commands/__init__.py 스펙/명령 의미`
- `potpie/context-engine/adapters/inbound/cli/commands/_common.py 스펙/명령 의미`
- `potpie/context-engine/adapters/inbound/cli/commands/auth.py 스펙/명령 의미`
- `potpie/context-engine/adapters/inbound/cli/commands/bootstrap.py 스펙/명령 의미`
- `potpie/context-engine/adapters/inbound/cli/commands/cloud.py 스펙/명령 의미`
- `legacy/pyproject.toml 실행 스크립트와 패키지 경계`
- `legacy/uv.lock 실행 스크립트와 패키지 경계`
- `potpie/context-engine/pyproject.toml 실행 스크립트와 패키지 경계`
- `potpie/context-engine/uv.lock 실행 스크립트와 패키지 경계`
- `potpie/integrations/pyproject.toml 실행 스크립트와 패키지 경계`

