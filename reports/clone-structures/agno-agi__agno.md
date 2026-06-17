# agno-agi/agno 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/agno-agi__agno |
| remote | https://github.com/agno-agi/agno |
| HEAD | 3adb736 (2026-06-10) feat: socket support for workflows HITL (#7749) |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 4746 |
| dirs | 716 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Introduction`, `What you can build`, `Get started`, `Features`, `Use Agno with your coding agent`, `Community`, `Contributing`, `Telemetry`

> <div align="center" id="top" <a href="https //agno.com" <picture <source media="(prefers color scheme dark)" srcset="https //agno public.s3.us east 1.amazonaws.com/assets/logo dark.svg" <source media="(prefers color scheme light)" srcset="https //agno public.s3.us east 1.amazonaws.com/assets/logo light.svg" <img src="https //agno public.s3.us east 1.amazonaws.com/assets/logo light.svg" alt="Agno" </picture </a </div <p align="center" Build, run, and manage agent platforms.<br/ </p Introduction Agno is an SDK for building agent platforms. Build agents using any agent framework. Run them as production services with tracing, scheduling, and RBAC. Manage using a single control plane. Agno allows you to own your agent stack. Maintain control of your data, context, tools, permissions, memory and human review loops. Run your platform in your cloud, and manage it using a beautiful UI. <img width

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .cursorrules | file |
| .editorconfig | file |
| .github | dir |
| .gitignore | file |
| AGENTS.md | file |
| CLAUDE.md | file |
| CODE_OF_CONDUCT.md | file |
| CODEOWNERS | file |
| CONTRIBUTING.md | file |
| cookbook | dir |
| libs | dir |
| LICENSE | file |
| README.md | file |
| scripts | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| cookbook/ | 2754 |
| libs/ | 1952 |
| scripts/ | 19 |
| .github/ | 11 |
| (root) | 10 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| scripts/ | 19 | preferred |
| cookbook/ | 2754 | large |
| libs/ | 1952 | large |
| libs/agno/ | 1821 | large |
| libs/agno/tests/ | 934 | large |
| libs/agno/agno/ | 868 | large |
| cookbook/90_models/ | 635 | large |
| cookbook/05_agent_os/ | 330 | large |
| cookbook/91_tools/ | 275 | large |
| cookbook/07_knowledge/ | 219 | large |
| cookbook/03_teams/ | 206 | large |
| cookbook/04_workflows/ | 201 | large |
| cookbook/02_agents/ | 181 | large |
| cookbook/07_knowledge/09_archive/ | 146 | large |
| libs/agno_infra/ | 131 | large |
| libs/agno_infra/agno/ | 118 | large |
| cookbook/06_storage/ | 101 | large |
| cookbook/data_labeling/ | 95 | large |
| cookbook/10_reasoning/ | 94 | large |
| cookbook/05_agent_os/interfaces/ | 90 | large |
| cookbook/90_models/google/ | 79 | large |
| cookbook/04_workflows/06_advanced_concepts/ | 74 | large |
| cookbook/09_evals/ | 68 | large |
| cookbook/08_learning/ | 61 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `cookbook/00_quickstart/requirements.txt`
- `cookbook/01_demo/requirements.txt`
- `cookbook/08_learning/requirements.txt`
- `cookbook/91_tools/mcp/mcp_toolbox_demo/docker-compose.yml`
- `cookbook/91_tools/mcp/mcp_toolbox_demo/pyproject.toml`
- `cookbook/91_tools/mcp/mcp_toolbox_demo/requirements.txt`
- `cookbook/91_tools/mcp/mcp_toolbox_demo/uv.lock`
- `cookbook/data_labeling/image_search/requirements.txt`
- `cookbook/gemini_3/requirements.txt`
- `cookbook/levels_of_agentic_software/requirements.txt`
- `libs/agno/pyproject.toml`
- `libs/agno/requirements.txt`
- `libs/agno/tests/system/requirements.txt`
- `libs/agno_infra/pyproject.toml`
- `libs/agno_infra/requirements.txt`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| cookbook/91_tools/mcp/mcp_toolbox_demo/pyproject.toml | mcp-toolbox-demo | false | true | false | false |
| libs/agno/pyproject.toml | agno | false | false | true | true |
| libs/agno_infra/pyproject.toml | agno-infra | false | false | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `cookbook/00_quickstart/README.md`
- `cookbook/01_demo/README.md`
- `cookbook/02_agents/01_quickstart/README.md`
- `cookbook/02_agents/02_input_output/README.md`
- `cookbook/02_agents/03_context_management/README.md`
- `cookbook/02_agents/04_tools/README.md`
- `cookbook/02_agents/05_state_and_session/README.md`
- `cookbook/02_agents/06_memory_and_learning/README.md`
- `cookbook/02_agents/07_knowledge/README.md`
- `cookbook/02_agents/08_guardrails/README.md`
- `cookbook/02_agents/09_hooks/README.md`
- `cookbook/02_agents/10_human_in_the_loop/README.md`
- `cookbook/02_agents/11_approvals/README.md`
- `cookbook/02_agents/12_multimodal/README.md`
- `cookbook/02_agents/13_reasoning/README.md`
- `cookbook/02_agents/14_advanced/README.md`
- `cookbook/02_agents/14_advanced/interchange_model/README.md`
- `cookbook/02_agents/15_dependencies/README.md`
- `cookbook/02_agents/16_skills/README.md`
- `cookbook/02_agents/README.md`
- `cookbook/03_teams/01_quickstart/README.md`
- `cookbook/03_teams/02_modes/README.md`
- `cookbook/03_teams/02_modes/broadcast/README.md`
- `cookbook/03_teams/02_modes/coordinate/README.md`
- `cookbook/03_teams/02_modes/route/README.md`
- `cookbook/03_teams/02_modes/tasks/README.md`
- `cookbook/03_teams/03_tools/README.md`
- `cookbook/03_teams/04_structured_input_output/README.md`
- `cookbook/03_teams/05_knowledge/README.md`
- `cookbook/03_teams/06_memory/README.md`
- `cookbook/03_teams/07_session/README.md`
- `cookbook/03_teams/08_streaming/README.md`
- `cookbook/03_teams/09_context_management/README.md`
- `cookbook/03_teams/10_context_compression/README.md`
- `cookbook/03_teams/11_reasoning/README.md`
- `cookbook/03_teams/12_learning/README.md`
- `cookbook/03_teams/13_hooks/README.md`
- `cookbook/03_teams/14_run_control/README.md`
- `cookbook/03_teams/15_distributed_rag/README.md`
- `cookbook/03_teams/16_search_coordination/README.md`
- `cookbook/03_teams/17_dependencies/README.md`
- `cookbook/03_teams/18_guardrails/README.md`
- `cookbook/03_teams/19_multimodal/README.md`
- `cookbook/03_teams/20_human_in_the_loop/README.md`
- `cookbook/03_teams/21_state/README.md`
- `cookbook/03_teams/22_metrics/README.md`
- `cookbook/03_teams/README.md`
- `cookbook/04_workflows/01_basic_workflows/01_sequence_of_steps/README.md`
- ... 30 more

### 에이전트 지침 후보

- `AGENTS.md`
- `CLAUDE.md`
- `cookbook/02_agents/10_human_in_the_loop/confirmation_required_mcp_toolkit.py`
- `cookbook/02_agents/16_skills/README.md`
- `cookbook/02_agents/16_skills/TEST_LOG.md`
- `cookbook/02_agents/16_skills/basic_skills.py`
- `cookbook/02_agents/16_skills/basic_skills_team.py`
- `cookbook/02_agents/16_skills/sample_skills/code-review/SKILL.md`
- `cookbook/02_agents/16_skills/sample_skills/code-review/references/style-guide.md`
- `cookbook/02_agents/16_skills/sample_skills/code-review/scripts/check_style.py`
- `cookbook/02_agents/16_skills/sample_skills/git-workflow/SKILL.md`
- `cookbook/02_agents/16_skills/sample_skills/git-workflow/references/commit-types.md`
- `cookbook/02_agents/16_skills/sample_skills/git-workflow/scripts/commit_message.py`
- `cookbook/03_teams/20_human_in_the_loop/CLAUDE.md`
- `cookbook/05_agent_os/advanced_demo/mcp_demo.py`
- `cookbook/05_agent_os/mcp_demo/README.md`
- `cookbook/05_agent_os/mcp_demo/TEST_LOG.md`
- `cookbook/05_agent_os/mcp_demo/dynamic_headers/README.md`
- `cookbook/05_agent_os/mcp_demo/dynamic_headers/TEST_LOG.md`
- `cookbook/05_agent_os/mcp_demo/dynamic_headers/client.py`
- `cookbook/05_agent_os/mcp_demo/dynamic_headers/server.py`
- `cookbook/05_agent_os/mcp_demo/enable_mcp_example.py`
- `cookbook/05_agent_os/mcp_demo/mcp_tools_advanced_example.py`
- `cookbook/05_agent_os/mcp_demo/mcp_tools_example.py`
- `cookbook/05_agent_os/mcp_demo/mcp_tools_existing_lifespan.py`
- `cookbook/05_agent_os/mcp_demo/test_client.py`
- `cookbook/05_agent_os/scheduler/CLAUDE.md`
- `cookbook/05_agent_os/skills/README.md`
- `cookbook/05_agent_os/skills/TEST_LOG.md`
- `cookbook/05_agent_os/skills/sample_skills/system-info/SKILL.md`
- `cookbook/05_agent_os/skills/sample_skills/system-info/scripts/README.md`
- `cookbook/05_agent_os/skills/sample_skills/system-info/scripts/TEST_LOG.md`
- `cookbook/05_agent_os/skills/sample_skills/system-info/scripts/get_system_info.py`
- `cookbook/05_agent_os/skills/sample_skills/system-info/scripts/list_directory.py`
- `cookbook/05_agent_os/skills/skills_with_agentos.py`
- `cookbook/12_context/02_web_exa_mcp.py`
- `cookbook/12_context/06_mcp_server.py`
- `cookbook/12_context/11_web_parallel_mcp.py`
- `cookbook/90_models/anthropic/mcp_connector.py`
- `cookbook/90_models/anthropic/skills/README.md`
- `cookbook/90_models/anthropic/skills/TEST_LOG.md`
- `cookbook/90_models/anthropic/skills/agent_with_documents.py`
- `cookbook/90_models/anthropic/skills/agent_with_excel.py`
- `cookbook/90_models/anthropic/skills/agent_with_powerpoint.py`
- `cookbook/90_models/anthropic/skills/multi_skill_agent.py`
- `cookbook/90_models/google/gemini_interactions/deep_research_mcp.py`
- `cookbook/91_tools/mcp/README.md`
- `cookbook/91_tools/mcp/TEST_LOG.md`
- `cookbook/91_tools/mcp/agno_mcp.py`
- `cookbook/91_tools/mcp/airbnb.py`
- `cookbook/91_tools/mcp/brave.py`
- `cookbook/91_tools/mcp/cli.py`
- `cookbook/91_tools/mcp/dynamic_headers/README.md`
- `cookbook/91_tools/mcp/dynamic_headers/TEST_LOG.md`
- `cookbook/91_tools/mcp/dynamic_headers/client.py`
- `cookbook/91_tools/mcp/dynamic_headers/server.py`
- `cookbook/91_tools/mcp/filesystem.py`
- `cookbook/91_tools/mcp/gibsonai.py`
- `cookbook/91_tools/mcp/github.py`
- `cookbook/91_tools/mcp/graphiti.py`
- `cookbook/91_tools/mcp/groq_mcp.py`
- `cookbook/91_tools/mcp/include_exclude_tools.py`
- `cookbook/91_tools/mcp/include_tools.py`
- `cookbook/91_tools/mcp/local_server/README.md`
- `cookbook/91_tools/mcp/local_server/TEST_LOG.md`
- `cookbook/91_tools/mcp/local_server/client.py`
- `cookbook/91_tools/mcp/local_server/server.py`
- `cookbook/91_tools/mcp/mcp_toolbox_demo/README.md`
- `cookbook/91_tools/mcp/mcp_toolbox_demo/TEST_LOG.md`
- `cookbook/91_tools/mcp/mcp_toolbox_demo/agent.py`
- `cookbook/91_tools/mcp/mcp_toolbox_demo/agent_os.py`
- `cookbook/91_tools/mcp/mcp_toolbox_demo/config/init.sql`
- `cookbook/91_tools/mcp/mcp_toolbox_demo/config/tools.yaml`
- `cookbook/91_tools/mcp/mcp_toolbox_demo/docker-compose.yml`
- `cookbook/91_tools/mcp/mcp_toolbox_demo/hotel_management_typesafe.py`
- `cookbook/91_tools/mcp/mcp_toolbox_demo/hotel_management_workflows.py`
- `cookbook/91_tools/mcp/mcp_toolbox_demo/pyproject.toml`
- `cookbook/91_tools/mcp/mcp_toolbox_demo/requirements.txt`
- `cookbook/91_tools/mcp/mcp_toolbox_demo/uv.lock`
- `cookbook/91_tools/mcp/mcp_toolbox_for_db.py`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `cookbook/05_agent_os/skills/README.md`
- `cookbook/05_agent_os/skills/TEST_LOG.md`
- `cookbook/05_agent_os/skills/sample_skills/system-info/SKILL.md`
- `cookbook/05_agent_os/skills/sample_skills/system-info/scripts/README.md`
- `cookbook/05_agent_os/skills/sample_skills/system-info/scripts/TEST_LOG.md`
- `cookbook/05_agent_os/skills/sample_skills/system-info/scripts/get_system_info.py`
- `cookbook/05_agent_os/skills/sample_skills/system-info/scripts/list_directory.py`
- `cookbook/05_agent_os/skills/skills_with_agentos.py`
- `cookbook/90_models/anthropic/skills/README.md`
- `cookbook/90_models/anthropic/skills/TEST_LOG.md`
- `cookbook/90_models/anthropic/skills/agent_with_documents.py`
- `cookbook/90_models/anthropic/skills/agent_with_excel.py`
- `cookbook/90_models/anthropic/skills/agent_with_powerpoint.py`
- `cookbook/90_models/anthropic/skills/multi_skill_agent.py`
- `cookbook/frameworks/antigravity/example_agent/skills/haiku/SKILL.md`
- `libs/agno/agno/skills/__init__.py`
- `libs/agno/agno/skills/agent_skills.py`
- `libs/agno/agno/skills/errors.py`
- `libs/agno/agno/skills/loaders/__init__.py`
- `libs/agno/agno/skills/loaders/base.py`
- `libs/agno/agno/skills/loaders/local.py`
- `libs/agno/agno/skills/skill.py`
- `libs/agno/agno/skills/utils.py`
- `libs/agno/agno/skills/validator.py`
- `libs/agno/tests/unit/skills/__init__.py`
- `libs/agno/tests/unit/skills/conftest.py`
- `libs/agno/tests/unit/skills/loaders/__init__.py`
- `libs/agno/tests/unit/skills/loaders/test_base.py`
- `libs/agno/tests/unit/skills/loaders/test_local.py`
- `libs/agno/tests/unit/skills/test_agent_skills.py`
- `libs/agno/tests/unit/skills/test_errors.py`
- `libs/agno/tests/unit/skills/test_skill.py`
- `libs/agno/tests/unit/skills/test_validator.py`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `libs/agno/tests/__init__.py`
- `libs/agno/tests/integration/__init__.py`
- `libs/agno/tests/integration/agent/__init__.py`
- `libs/agno/tests/integration/agent/conftest.py`
- `libs/agno/tests/integration/agent/human_in_the_loop/__init__.py`
- `libs/agno/tests/integration/agent/human_in_the_loop/test_continue_run_history_context.py`
- `libs/agno/tests/integration/agent/human_in_the_loop/test_external_execution_flows.py`
- `libs/agno/tests/integration/agent/human_in_the_loop/test_multi_round_user_input.py`
- `libs/agno/tests/integration/agent/human_in_the_loop/test_run_requirement.py`
- `libs/agno/tests/integration/agent/human_in_the_loop/test_user_confirmation_flows.py`
- `libs/agno/tests/integration/agent/human_in_the_loop/test_user_input_flows.py`
- `libs/agno/tests/integration/agent/test_agent_convenience_functions.py`
- `libs/agno/tests/integration/agent/test_agent_reasoning_new_models.py`
- `libs/agno/tests/integration/agent/test_agent_run_cancellation.py`
- `libs/agno/tests/integration/agent/test_async_tool_calling.py`
- `libs/agno/tests/integration/agent/test_chat_history.py`
- `libs/agno/tests/integration/agent/test_custom_retriever.py`
- `libs/agno/tests/integration/agent/test_dependencies.py`
- `libs/agno/tests/integration/agent/test_disable_storing_tool_and_history_messages.py`
- `libs/agno/tests/integration/agent/test_event_streaming.py`
- `libs/agno/tests/integration/agent/test_filter_tool_calls.py`
- `libs/agno/tests/integration/agent/test_followups.py`
- `libs/agno/tests/integration/agent/test_guardrails.py`
- `libs/agno/tests/integration/agent/test_history.py`
- `libs/agno/tests/integration/agent/test_hooks.py`
- `libs/agno/tests/integration/agent/test_input.py`
- `libs/agno/tests/integration/agent/test_instructions.py`
- `libs/agno/tests/integration/agent/test_introduction.py`
- `libs/agno/tests/integration/agent/test_memory.py`
- `libs/agno/tests/integration/agent/test_memory_impact.py`
- `libs/agno/tests/integration/agent/test_message_ordering.py`
- `libs/agno/tests/integration/agent/test_metrics.py`
- `libs/agno/tests/integration/agent/test_multimodal.py`
- `libs/agno/tests/integration/agent/test_output_model.py`
- `libs/agno/tests/integration/agent/test_output_schema_override.py`
- `libs/agno/tests/integration/agent/test_parser_model.py`
- `libs/agno/tests/integration/agent/test_print_response.py`
- `libs/agno/tests/integration/agent/test_rag.py`
- `libs/agno/tests/integration/agent/test_reasoning_content_default_COT.py`
- `libs/agno/tests/integration/agent/test_reasoning_content_reasoning_tools.py`
- `libs/agno/tests/integration/agent/test_retries.py`
- `libs/agno/tests/integration/agent/test_session.py`
- `libs/agno/tests/integration/agent/test_session_state.py`
- `libs/agno/tests/integration/agent/test_shared_model.py`
- `libs/agno/tests/integration/agent/test_storage.py`
- `libs/agno/tests/integration/agent/test_structured_output_parsing.py`
- `libs/agno/tests/integration/agent/test_tool_call_limit.py`
- `libs/agno/tests/integration/agent/test_tool_compression.py`
- `libs/agno/tests/integration/agent/test_tool_hooks.py`
- `libs/agno/tests/integration/agent/test_tool_parsing.py`
- `libs/agno/tests/integration/conftest.py`
- `libs/agno/tests/integration/db/__init__.py`
- `libs/agno/tests/integration/db/async_mongo/__init__.py`
- `libs/agno/tests/integration/db/async_mongo/conftest.py`
- `libs/agno/tests/integration/db/async_mongo/test_db.py`
- `libs/agno/tests/integration/db/async_mysql/__init__.py`
- `libs/agno/tests/integration/db/async_mysql/conftest.py`
- `libs/agno/tests/integration/db/async_mysql/test_db.py`
- `libs/agno/tests/integration/db/async_mysql/test_evals.py`
- `libs/agno/tests/integration/db/async_mysql/test_knowledge.py`
- `libs/agno/tests/integration/db/async_mysql/test_memory.py`
- `libs/agno/tests/integration/db/async_mysql/test_metrics.py`
- `libs/agno/tests/integration/db/async_mysql/test_session.py`
- `libs/agno/tests/integration/db/async_mysql/test_trace_upsert.py`
- `libs/agno/tests/integration/db/async_postgres/__init__.py`
- `libs/agno/tests/integration/db/async_postgres/conftest.py`
- `libs/agno/tests/integration/db/async_postgres/test_db.py`
- `libs/agno/tests/integration/db/async_postgres/test_evals.py`
- `libs/agno/tests/integration/db/async_postgres/test_knowledge.py`
- `libs/agno/tests/integration/db/async_postgres/test_memory.py`
- `libs/agno/tests/integration/db/async_postgres/test_metrics.py`
- `libs/agno/tests/integration/db/async_postgres/test_sanitization.py`
- `libs/agno/tests/integration/db/async_postgres/test_session.py`
- `libs/agno/tests/integration/db/async_postgres/test_trace_upsert.py`
- `libs/agno/tests/integration/db/postgres/__init__.py`
- `libs/agno/tests/integration/db/postgres/test_db.py`
- `libs/agno/tests/integration/db/postgres/test_evals.py`
- `libs/agno/tests/integration/db/postgres/test_knowledge.py`
- `libs/agno/tests/integration/db/postgres/test_memory.py`
- `libs/agno/tests/integration/db/postgres/test_metrics.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/claude.yml`
- `.github/workflows/performance.yml`
- `.github/workflows/pr-lint.yml`
- `.github/workflows/pr-triage.yml`
- `.github/workflows/release.yml`
- `.github/workflows/test.yml`
- `.github/workflows/test_on_release.yml`
- `cookbook/91_tools/mcp/mcp_toolbox_demo/docker-compose.yml`
- `libs/agno/tests/system/docker-compose.yaml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 3938 |
| .md | 612 |
| .sh | 43 |
| .bat | 25 |
| .txt | 20 |
| .gitignore | 14 |
| .png | 11 |
| .yml | 11 |
| .pdf | 9 |
| .json | 8 |
| .docx | 7 |
| .yaml | 7 |
| .in | 5 |
| .toml | 3 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `scripts/ 내부 책임 분리`
- `cookbook/ 내부 책임 분리`
- `libs/ 내부 책임 분리`
- `libs/agno/ 내부 책임 분리`
- `libs/agno/tests/ 내부 책임 분리`
- `cookbook/05_agent_os/skills/README.md 스펙/명령 의미`
- `cookbook/05_agent_os/skills/TEST_LOG.md 스펙/명령 의미`
- `cookbook/05_agent_os/skills/sample_skills/system-info/SKILL.md 스펙/명령 의미`
- `cookbook/05_agent_os/skills/sample_skills/system-info/scripts/README.md 스펙/명령 의미`
- `cookbook/05_agent_os/skills/sample_skills/system-info/scripts/TEST_LOG.md 스펙/명령 의미`
- `cookbook/00_quickstart/requirements.txt 실행 스크립트와 패키지 경계`
- `cookbook/01_demo/requirements.txt 실행 스크립트와 패키지 경계`
- `cookbook/08_learning/requirements.txt 실행 스크립트와 패키지 경계`
- `cookbook/91_tools/mcp/mcp_toolbox_demo/docker-compose.yml 실행 스크립트와 패키지 경계`
- `cookbook/91_tools/mcp/mcp_toolbox_demo/pyproject.toml 실행 스크립트와 패키지 경계`

