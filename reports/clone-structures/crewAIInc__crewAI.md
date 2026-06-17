# crewAIInc/crewAI 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/crewAIInc__crewAI |
| remote | https://github.com/crewAIInc/crewAI |
| HEAD | da8fe8c (2026-06-09) fix: respect suppress_flow_events for method-execution events (#6095) |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 3287 |
| dirs | 512 |
| stack | Python |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Fast and Flexible Multi-Agent Automation Framework`, `CrewAI AMP Suite`, `Crew Control Plane Key Features:`, `Table of contents`, `Build with AI`, `Why CrewAI?`, `Getting Started`, `Learning Resources`, `Understanding Flows and Crews`, `Getting Started with Installation`, `1. Installation`, `Troubleshooting Dependencies`, `2. Setting Up Your Crew with the YAML Configuration`, `src/my_project/config/agents.yaml`, `src/my_project/config/tasks.yaml`, `src/my_project/crew.py`, `src/my_project/main.py`, `3. Running Your Crew`

> <p align="center" <a href="https //github.com/crewAIInc/crewAI" <img src="docs/images/crewai logo.png" width="600px" alt="Open source Multi AI Agent orchestration framework" </a </p <p align="center" style="display flex; justify content center; gap 20px; align items center;" <a href="https //trendshift.io/repositories/11239" target=" blank" <img src="https //trendshift.io/api/badge/repositories/11239" alt="crewAIInc%2FcrewAI Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a </p <p align="center" <a href="https //crewai.com" Homepage</a · <a href="https //docs.crewai.com" Docs</a · <a href="https //app.crewai.com" Start Cloud Trial</a · <a href="https //blog.crewai.com" Blog</a · <a href="https //community.crewai.com" Forum</a </p <p align="center" <a href="https //github.com/crewAIInc/crewAI" <img src="https //img.shields.io/github/stars/crewAIInc/crewAI" alt="Gi

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .editorconfig | file |
| .env.test | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| .python-version | file |
| conftest.py | file |
| docs | dir |
| lib | dir |
| LICENSE | file |
| pyproject.toml | file |
| README.md | file |
| scripts | dir |
| uv.lock | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| lib/ | 1974 |
| docs/ | 1281 |
| .github/ | 21 |
| (root) | 10 |
| scripts/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| lib/ | 1974 | preferred |
| docs/ | 1281 | preferred |
| scripts/ | 1 | preferred |
| lib/crewai/ | 1351 | large |
| lib/crewai/tests/ | 839 | large |
| lib/crewai/src/ | 510 | large |
| lib/crewai-tools/ | 404 | large |
| lib/crewai-tools/src/ | 340 | large |
| docs/en/ | 274 | large |
| docs/ar/ | 266 | large |
| docs/ko/ | 262 | large |
| docs/pt-BR/ | 262 | large |
| docs/images/ | 209 | large |
| docs/images/enterprise/ | 132 | large |
| lib/cli/ | 130 | large |
| lib/cli/src/ | 91 | large |
| docs/en/enterprise/ | 84 | large |
| docs/en/tools/ | 84 | large |
| docs/ar/enterprise/ | 81 | large |
| docs/ko/enterprise/ | 81 | large |
| docs/pt-BR/enterprise/ | 81 | large |
| docs/ar/tools/ | 80 | large |
| docs/ko/tools/ | 79 | large |
| docs/pt-BR/tools/ | 79 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `lib/cli/pyproject.toml`
- `lib/cli/src/crewai_cli/templates/crew/pyproject.toml`
- `lib/cli/src/crewai_cli/templates/flow/pyproject.toml`
- `lib/cli/src/crewai_cli/templates/tool/pyproject.toml`
- `lib/crewai-core/pyproject.toml`
- `lib/crewai-files/pyproject.toml`
- `lib/crewai-tools/pyproject.toml`
- `lib/crewai/pyproject.toml`
- `lib/devtools/pyproject.toml`
- `pyproject.toml`
- `uv.lock`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| lib/cli/pyproject.toml | crewai-cli | false | false | false | false |
| lib/cli/src/crewai_cli/templates/crew/pyproject.toml | {{folder_name}} | false | false | false | false |
| lib/cli/src/crewai_cli/templates/flow/pyproject.toml | {{folder_name}} | false | false | false | false |
| lib/cli/src/crewai_cli/templates/tool/pyproject.toml | {{folder_name}} | false | false | false | false |
| lib/crewai-core/pyproject.toml | crewai-core | false | false | false | false |
| lib/crewai-files/pyproject.toml | crewai-files | false | true | false | false |
| lib/crewai-tools/pyproject.toml | crewai-tools | false | true | false | false |
| lib/crewai/pyproject.toml | crewai | false | true | false | false |
| lib/devtools/pyproject.toml | crewai-devtools | false | true | false | true |
| pyproject.toml | crewai-workspace | false | true | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.github/CONTRIBUTING.md`
- `README.md`
- `docs/ar/api-reference/inputs.mdx`
- `docs/ar/api-reference/introduction.mdx`
- `docs/ar/api-reference/kickoff.mdx`
- `docs/ar/api-reference/resume.mdx`
- `docs/ar/api-reference/status.mdx`
- `docs/ar/changelog.mdx`
- `docs/ar/concepts/agent-capabilities.mdx`
- `docs/ar/concepts/agents.mdx`
- `docs/ar/concepts/checkpointing.mdx`
- `docs/ar/concepts/cli.mdx`
- `docs/ar/concepts/collaboration.mdx`
- `docs/ar/concepts/crews.mdx`
- `docs/ar/concepts/event-listener.mdx`
- `docs/ar/concepts/files.mdx`
- `docs/ar/concepts/flows.mdx`
- `docs/ar/concepts/knowledge.mdx`
- `docs/ar/concepts/llms.mdx`
- `docs/ar/concepts/memory.mdx`
- `docs/ar/concepts/planning.mdx`
- `docs/ar/concepts/processes.mdx`
- `docs/ar/concepts/production-architecture.mdx`
- `docs/ar/concepts/reasoning.mdx`
- `docs/ar/concepts/skills.mdx`
- `docs/ar/concepts/tasks.mdx`
- `docs/ar/concepts/testing.mdx`
- `docs/ar/concepts/tools.mdx`
- `docs/ar/concepts/training.mdx`
- `docs/ar/enterprise/features/agent-control-plane/monitoring.mdx`
- `docs/ar/enterprise/features/agent-control-plane/overview.mdx`
- `docs/ar/enterprise/features/agent-control-plane/rules.mdx`
- `docs/ar/enterprise/features/agent-repositories.mdx`
- `docs/ar/enterprise/features/automations.mdx`
- `docs/ar/enterprise/features/crew-studio.mdx`
- `docs/ar/enterprise/features/flow-hitl-management.mdx`
- `docs/ar/enterprise/features/hallucination-guardrail.mdx`
- `docs/ar/enterprise/features/marketplace.mdx`
- `docs/ar/enterprise/features/pii-trace-redactions.mdx`
- `docs/ar/enterprise/features/rbac.mdx`
- `docs/ar/enterprise/features/secrets-manager/aws-workload-identity.mdx`
- `docs/ar/enterprise/features/secrets-manager/aws.mdx`
- `docs/ar/enterprise/features/secrets-manager/azure-workload-identity.mdx`
- `docs/ar/enterprise/features/secrets-manager/azure.mdx`
- `docs/ar/enterprise/features/secrets-manager/gcp-workload-identity.mdx`
- `docs/ar/enterprise/features/secrets-manager/gcp.mdx`
- `docs/ar/enterprise/features/secrets-manager/overview.mdx`
- `docs/ar/enterprise/features/secrets-manager/usage.mdx`
- `docs/ar/enterprise/features/secrets-manager/verify-rotation.mdx`
- `docs/ar/enterprise/features/tools-and-integrations.mdx`
- ... 30 more

### 에이전트 지침 후보

- `docs/ar/concepts/skills.mdx`
- `docs/ar/enterprise/guides/custom-mcp-server.mdx`
- `docs/ar/mcp/dsl-integration.mdx`
- `docs/ar/mcp/multiple-servers.mdx`
- `docs/ar/mcp/overview.mdx`
- `docs/ar/mcp/security.mdx`
- `docs/ar/mcp/sse.mdx`
- `docs/ar/mcp/stdio.mdx`
- `docs/ar/mcp/streamable-http.mdx`
- `docs/ar/skills.mdx`
- `docs/en/concepts/skills.mdx`
- `docs/en/enterprise/guides/custom-mcp-server.mdx`
- `docs/en/mcp/dsl-integration.mdx`
- `docs/en/mcp/multiple-servers.mdx`
- `docs/en/mcp/overview.mdx`
- `docs/en/mcp/security.mdx`
- `docs/en/mcp/sse.mdx`
- `docs/en/mcp/stdio.mdx`
- `docs/en/mcp/streamable-http.mdx`
- `docs/en/skills.mdx`
- `docs/images/enterprise/custom-mcp-auth-token.png`
- `docs/images/enterprise/custom-mcp-oauth.png`
- `docs/images/enterprise/mcp-enterprise-download.png`
- `docs/ko/concepts/skills.mdx`
- `docs/ko/enterprise/guides/custom-mcp-server.mdx`
- `docs/ko/mcp/dsl-integration.mdx`
- `docs/ko/mcp/multiple-servers.mdx`
- `docs/ko/mcp/overview.mdx`
- `docs/ko/mcp/security.mdx`
- `docs/ko/mcp/sse.mdx`
- `docs/ko/mcp/stdio.mdx`
- `docs/ko/mcp/streamable-http.mdx`
- `docs/ko/skills.mdx`
- `docs/pt-BR/concepts/skills.mdx`
- `docs/pt-BR/enterprise/guides/custom-mcp-server.mdx`
- `docs/pt-BR/mcp/dsl-integration.mdx`
- `docs/pt-BR/mcp/multiple-servers.mdx`
- `docs/pt-BR/mcp/overview.mdx`
- `docs/pt-BR/mcp/security.mdx`
- `docs/pt-BR/mcp/sse.mdx`
- `docs/pt-BR/mcp/stdio.mdx`
- `docs/pt-BR/mcp/streamable-http.mdx`
- `docs/pt-BR/skills.mdx`
- `lib/cli/src/crewai_cli/experimental/skills/__init__.py`
- `lib/cli/src/crewai_cli/experimental/skills/main.py`
- `lib/cli/src/crewai_cli/templates/AGENTS.md`
- `lib/cli/src/crewai_cli/templates/crew/skills/.gitkeep`
- `lib/cli/src/crewai_cli/templates/flow/skills/.gitkeep`
- `lib/cli/tests/experimental/skills/__init__.py`
- `lib/cli/tests/experimental/skills/test_main.py`
- `lib/cli/tests/skills/__init__.py`
- `lib/crewai-tools/src/crewai_tools/adapters/mcp_adapter.py`
- `lib/crewai-tools/tests/adapters/mcp_adapter_test.py`
- `lib/crewai/src/crewai/events/types/mcp_events.py`
- `lib/crewai/src/crewai/events/types/skill_events.py`
- `lib/crewai/src/crewai/experimental/skills/__init__.py`
- `lib/crewai/src/crewai/experimental/skills/_flag.py`
- `lib/crewai/src/crewai/experimental/skills/cache.py`
- `lib/crewai/src/crewai/experimental/skills/events.py`
- `lib/crewai/src/crewai/experimental/skills/registry.py`
- `lib/crewai/src/crewai/mcp/__init__.py`
- `lib/crewai/src/crewai/mcp/client.py`
- `lib/crewai/src/crewai/mcp/config.py`
- `lib/crewai/src/crewai/mcp/filters.py`
- `lib/crewai/src/crewai/mcp/tool_resolver.py`
- `lib/crewai/src/crewai/mcp/transports/__init__.py`
- `lib/crewai/src/crewai/mcp/transports/base.py`
- `lib/crewai/src/crewai/mcp/transports/http.py`
- `lib/crewai/src/crewai/mcp/transports/sse.py`
- `lib/crewai/src/crewai/mcp/transports/stdio.py`
- `lib/crewai/src/crewai/skills/__init__.py`
- `lib/crewai/src/crewai/skills/loader.py`
- `lib/crewai/src/crewai/skills/models.py`
- `lib/crewai/src/crewai/skills/parser.py`
- `lib/crewai/src/crewai/skills/validation.py`
- `lib/crewai/src/crewai/tools/mcp_native_tool.py`
- `lib/crewai/src/crewai/tools/mcp_tool_wrapper.py`
- `lib/crewai/tests/cassettes/agents/TestAgentA2AKickoff.test_agent_kickoff_with_calculator_skill.yaml`
- `lib/crewai/tests/cassettes/agents/TestAgentA2AKickoff.test_agent_kickoff_with_conversation_skill.yaml`
- `lib/crewai/tests/cassettes/agents/test_agent_kickoff_with_mcp_tools.yaml`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `lib/cli/src/crewai_cli/experimental/skills/__init__.py`
- `lib/cli/src/crewai_cli/experimental/skills/main.py`
- `lib/cli/src/crewai_cli/templates/AGENTS.md`
- `lib/cli/src/crewai_cli/templates/__init__.py`
- `lib/cli/src/crewai_cli/templates/crew/.gitignore`
- `lib/cli/src/crewai_cli/templates/crew/README.md`
- `lib/cli/src/crewai_cli/templates/crew/__init__.py`
- `lib/cli/src/crewai_cli/templates/crew/config/agents.yaml`
- `lib/cli/src/crewai_cli/templates/crew/config/tasks.yaml`
- `lib/cli/src/crewai_cli/templates/crew/crew.py`
- `lib/cli/src/crewai_cli/templates/crew/knowledge/user_preference.txt`
- `lib/cli/src/crewai_cli/templates/crew/main.py`
- `lib/cli/src/crewai_cli/templates/crew/pyproject.toml`
- `lib/cli/src/crewai_cli/templates/crew/skills/.gitkeep`
- `lib/cli/src/crewai_cli/templates/crew/tools/__init__.py`
- `lib/cli/src/crewai_cli/templates/crew/tools/custom_tool.py`
- `lib/cli/src/crewai_cli/templates/flow/.gitignore`
- `lib/cli/src/crewai_cli/templates/flow/README.md`
- `lib/cli/src/crewai_cli/templates/flow/__init__.py`
- `lib/cli/src/crewai_cli/templates/flow/crews/content_crew/config/agents.yaml`
- `lib/cli/src/crewai_cli/templates/flow/crews/content_crew/config/tasks.yaml`
- `lib/cli/src/crewai_cli/templates/flow/crews/content_crew/content_crew.py`
- `lib/cli/src/crewai_cli/templates/flow/main.py`
- `lib/cli/src/crewai_cli/templates/flow/pyproject.toml`
- `lib/cli/src/crewai_cli/templates/flow/skills/.gitkeep`
- `lib/cli/src/crewai_cli/templates/flow/tools/__init__.py`
- `lib/cli/src/crewai_cli/templates/flow/tools/custom_tool.py`
- `lib/cli/src/crewai_cli/templates/tool/.gitignore`
- `lib/cli/src/crewai_cli/templates/tool/README.md`
- `lib/cli/src/crewai_cli/templates/tool/pyproject.toml`
- `lib/cli/src/crewai_cli/templates/tool/src/{{folder_name}}/__init__.py`
- `lib/cli/src/crewai_cli/templates/tool/src/{{folder_name}}/tool.py`
- `lib/cli/tests/experimental/skills/__init__.py`
- `lib/cli/tests/experimental/skills/test_main.py`
- `lib/cli/tests/skills/__init__.py`
- `lib/crewai/src/crewai/experimental/skills/__init__.py`
- `lib/crewai/src/crewai/experimental/skills/_flag.py`
- `lib/crewai/src/crewai/experimental/skills/cache.py`
- `lib/crewai/src/crewai/experimental/skills/events.py`
- `lib/crewai/src/crewai/experimental/skills/registry.py`
- `lib/crewai/src/crewai/skills/__init__.py`
- `lib/crewai/src/crewai/skills/loader.py`
- `lib/crewai/src/crewai/skills/models.py`
- `lib/crewai/src/crewai/skills/parser.py`
- `lib/crewai/src/crewai/skills/validation.py`
- `lib/crewai/tests/experimental/skills/__init__.py`
- `lib/crewai/tests/experimental/skills/conftest.py`
- `lib/crewai/tests/experimental/skills/test_cache.py`
- `lib/crewai/tests/experimental/skills/test_flag.py`
- `lib/crewai/tests/experimental/skills/test_models_version.py`
- `lib/crewai/tests/experimental/skills/test_registry.py`
- `lib/crewai/tests/skills/__init__.py`
- `lib/crewai/tests/skills/fixtures/invalid-name/SKILL.md`
- `lib/crewai/tests/skills/fixtures/minimal-skill/SKILL.md`
- `lib/crewai/tests/skills/fixtures/valid-skill/SKILL.md`
- `lib/crewai/tests/skills/fixtures/valid-skill/assets/config.json`
- `lib/crewai/tests/skills/fixtures/valid-skill/references/guide.md`
- `lib/crewai/tests/skills/fixtures/valid-skill/scripts/setup.sh`
- `lib/crewai/tests/skills/test_integration.py`
- `lib/crewai/tests/skills/test_loader.py`
- `lib/crewai/tests/skills/test_models.py`
- `lib/crewai/tests/skills/test_parser.py`
- `lib/crewai/tests/skills/test_validation.py`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `lib/cli/tests/__init__.py`
- `lib/cli/tests/authentication/__init__.py`
- `lib/cli/tests/authentication/providers/__init__.py`
- `lib/cli/tests/authentication/providers/test_auth0.py`
- `lib/cli/tests/authentication/providers/test_entra_id.py`
- `lib/cli/tests/authentication/providers/test_keycloak.py`
- `lib/cli/tests/authentication/providers/test_okta.py`
- `lib/cli/tests/authentication/providers/test_workos.py`
- `lib/cli/tests/authentication/test_auth_main.py`
- `lib/cli/tests/authentication/test_utils.py`
- `lib/cli/tests/deploy/__init__.py`
- `lib/cli/tests/deploy/test_deploy_main.py`
- `lib/cli/tests/deploy/test_validate.py`
- `lib/cli/tests/enterprise/__init__.py`
- `lib/cli/tests/enterprise/test_main.py`
- `lib/cli/tests/experimental/__init__.py`
- `lib/cli/tests/experimental/skills/__init__.py`
- `lib/cli/tests/experimental/skills/test_main.py`
- `lib/cli/tests/organization/__init__.py`
- `lib/cli/tests/organization/test_main.py`
- `lib/cli/tests/skills/__init__.py`
- `lib/cli/tests/test_cli.py`
- `lib/cli/tests/test_click_compatibility.py`
- `lib/cli/tests/test_config.py`
- `lib/cli/tests/test_constants.py`
- `lib/cli/tests/test_create_crew.py`
- `lib/cli/tests/test_crew_test.py`
- `lib/cli/tests/test_git.py`
- `lib/cli/tests/test_plus_api.py`
- `lib/cli/tests/test_settings_command.py`
- `lib/cli/tests/test_token_manager.py`
- `lib/cli/tests/test_train_crew.py`
- `lib/cli/tests/test_utils.py`
- `lib/cli/tests/test_version.py`
- `lib/cli/tests/tools/__init__.py`
- `lib/cli/tests/tools/test_main.py`
- `lib/cli/tests/triggers/test_main.py`
- `lib/crewai-core/tests/__init__.py`
- `lib/crewai-core/tests/test_smoke.py`
- `lib/crewai-files/tests/fixtures/agents.pdf`
- `lib/crewai-files/tests/fixtures/quarterly_report.csv`
- `lib/crewai-files/tests/fixtures/revenue_chart.png`
- `lib/crewai-files/tests/fixtures/review_guidelines.txt`
- `lib/crewai-files/tests/fixtures/sample_audio.wav`
- `lib/crewai-files/tests/fixtures/sample_video.mp4`
- `lib/crewai-files/tests/processing/__init__.py`
- `lib/crewai-files/tests/processing/test_constraints.py`
- `lib/crewai-files/tests/processing/test_processor.py`
- `lib/crewai-files/tests/processing/test_transformers.py`
- `lib/crewai-files/tests/processing/test_validators.py`
- `lib/crewai-files/tests/test_file_url.py`
- `lib/crewai-files/tests/test_resolved.py`
- `lib/crewai-files/tests/test_resolver.py`
- `lib/crewai-files/tests/test_upload_cache.py`
- `lib/crewai-tools/tests/__init__.py`
- `lib/crewai-tools/tests/adapters/mcp_adapter_test.py`
- `lib/crewai-tools/tests/base_tool_test.py`
- `lib/crewai-tools/tests/cassettes/tools/test_csv_search_tool.yaml`
- `lib/crewai-tools/tests/cassettes/tools/test_directory_search_tool.yaml`
- `lib/crewai-tools/tests/cassettes/tools/test_json_search_tool.yaml`
- `lib/crewai-tools/tests/cassettes/tools/test_mdx_search_tool.yaml`
- `lib/crewai-tools/tests/cassettes/tools/test_txt_search_tool.yaml`
- `lib/crewai-tools/tests/file_read_tool_test.py`
- `lib/crewai-tools/tests/rag/__init__.py`
- `lib/crewai-tools/tests/rag/test_csv_loader.py`
- `lib/crewai-tools/tests/rag/test_directory_loader.py`
- `lib/crewai-tools/tests/rag/test_docx_loader.py`
- `lib/crewai-tools/tests/rag/test_embedding_service.py`
- `lib/crewai-tools/tests/rag/test_json_loader.py`
- `lib/crewai-tools/tests/rag/test_mdx_loader.py`
- `lib/crewai-tools/tests/rag/test_text_loaders.py`
- `lib/crewai-tools/tests/rag/test_webpage_loader.py`
- `lib/crewai-tools/tests/rag/test_xml_loader.py`
- `lib/crewai-tools/tests/test_generate_tool_specs.py`
- `lib/crewai-tools/tests/test_optional_dependencies.py`
- `lib/crewai-tools/tests/tools/__init__.py`
- `lib/crewai-tools/tests/tools/arxiv_paper_tool_test.py`
- `lib/crewai-tools/tests/tools/brave_search_tool_test.py`
- `lib/crewai-tools/tests/tools/brightdata_serp_tool_test.py`
- `lib/crewai-tools/tests/tools/brightdata_webunlocker_tool_test.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/build-uv-cache.yml`
- `.github/workflows/codeql.yml`
- `.github/workflows/docs-broken-links.yml`
- `.github/workflows/generate-tool-specs.yml`
- `.github/workflows/linter.yml`
- `.github/workflows/nightly.yml`
- `.github/workflows/pr-size.yml`
- `.github/workflows/pr-title.yml`
- `.github/workflows/publish.yml`
- `.github/workflows/stale.yml`
- `.github/workflows/tests.yml`
- `.github/workflows/type-checker.yml`
- `.github/workflows/update-test-durations.yml`
- `.github/workflows/vulnerability-scan.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 1224 |
| .mdx | 1065 |
| .yaml | 609 |
| .png | 212 |
| .md | 97 |
| .yml | 19 |
| .json | 16 |
| .toml | 10 |
| .typed | 5 |
| .gitignore | 4 |
| .gif | 3 |
| .js | 3 |
| .gitkeep | 2 |
| .pdf | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `lib/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `lib/crewai/ 내부 책임 분리`
- `lib/crewai/tests/ 내부 책임 분리`
- `lib/cli/src/crewai_cli/experimental/skills/__init__.py 스펙/명령 의미`
- `lib/cli/src/crewai_cli/experimental/skills/main.py 스펙/명령 의미`
- `lib/cli/src/crewai_cli/templates/AGENTS.md 스펙/명령 의미`
- `lib/cli/src/crewai_cli/templates/__init__.py 스펙/명령 의미`
- `lib/cli/src/crewai_cli/templates/crew/.gitignore 스펙/명령 의미`
- `lib/cli/pyproject.toml 실행 스크립트와 패키지 경계`
- `lib/cli/src/crewai_cli/templates/crew/pyproject.toml 실행 스크립트와 패키지 경계`
- `lib/cli/src/crewai_cli/templates/flow/pyproject.toml 실행 스크립트와 패키지 경계`
- `lib/cli/src/crewai_cli/templates/tool/pyproject.toml 실행 스크립트와 패키지 경계`
- `lib/crewai-core/pyproject.toml 실행 스크립트와 패키지 경계`

