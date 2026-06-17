# langbot-app/LangBot 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/langbot-app__LangBot |
| remote | https://github.com/langbot-app/LangBot |
| HEAD | b3c6de2 (2026-06-16) [codex] cover frontend CRUD smoke flows (#2253) |
| branch | master |
| groups | llm-wiki-100 |
| files | 1010 |
| dirs | 242 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `What is LangBot?`, `Key Capabilities`, `Quick Start`, `☁️ LangBot Cloud (Recommended)`, `One-Line Launch`, `Docker Compose`, `One-Click Cloud Deploy`, `Supported Platforms`, `Supported LLMs & Integrations`, `Why LangBot?`, `Live Demo`, `Community`, `Star History`, `Contributors`

> <p align="center" <a href="https //langbot.app" <img width="130" src="res/logo blue.png" alt="LangBot"/ </a <div align="center" <a href="https //www.producthunt.com/products/langbot?utm source=badge follow&utm medium=badge&utm source=badge langbot" target=" blank" <img src="https //api.producthunt.com/widgets/embed image/v1/follow.svg?product id=1077185&theme=light" alt="LangBot Production& 0045;grade& 0032;IM& 0032;bot& 0032;made& 0032;easy& 0046; Product Hunt" style="width 250px; height 54px;" width="250" height="54" / </a <h3 Production grade platform for building agentic IM bots.</h3 <h4 Quickly build, debug, and ship AI bots to Slack, Discord, Telegram, WeChat, and more.</h4 English / 简体中文 / 繁體中文 / 日本語 / Español / Français / 한국어 / Русский / Tiếng Việt <img src="https //img.shields.io/badge/python 3.10 ~ 3.13 blue.svg" alt="python" <a href="https //langbot.app" Website</a ｜ <a href="

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .dockerignore | file |
| .github | dir |
| .gitignore | file |
| .mcp.json | file |
| .pre-commit-config.yaml | file |
| AGENTS.md | file |
| CLA.md | file |
| CLAUDE.md | other |
| codecov.yml | file |
| CONTRIBUTING.md | file |
| docker | dir |
| Dockerfile | file |
| docs | dir |
| LICENSE | file |
| main.py | file |
| Makefile | file |
| pyproject.toml | file |
| pytest.ini | file |
| README_CN.md | file |
| README_ES.md | file |
| README_FR.md | file |
| README_JP.md | file |
| README_KO.md | file |
| README_RU.md | file |
| README_TW.md | file |
| README_VI.md | file |
| README.md | file |
| res | dir |
| run_tests.sh | file |
| scripts | dir |
| src | dir |
| test-embed.html | file |
| tests | dir |
| uv.lock | file |
| web | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 535 |
| web/ | 248 |
| tests/ | 156 |
| (root) | 26 |
| .github/ | 19 |
| docs/ | 13 |
| res/ | 7 |
| docker/ | 3 |
| scripts/ | 3 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 535 | preferred |
| web/ | 248 | preferred |
| docs/ | 13 | preferred |
| tests/ | 156 | preferred |
| scripts/ | 3 | preferred |
| src/langbot/ | 535 | large |
| src/langbot/pkg/ | 457 | large |
| web/src/ | 219 | large |
| web/src/app/ | 158 | large |
| tests/unit_tests/ | 121 | large |
| src/langbot/libs/ | 60 | large |
| web/src/components/ | 42 | large |
| tests/unit_tests/pipeline/ | 21 | large |
| .github/ | 19 | large |
| src/langbot/templates/ | 16 | large |
| tests/integration/ | 15 | large |
| tests/unit_tests/api/ | 15 | large |
| tests/unit_tests/provider/ | 15 | large |
| tests/unit_tests/plugin/ | 12 | large |
| .github/workflows/ | 11 | large |
| tests/unit_tests/utils/ | 11 | large |
| web/src/i18n/ | 10 | large |
| tests/integration/api/ | 9 | large |
| tests/unit_tests/core/ | 8 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `pyproject.toml`
- `uv.lock`
- `web/package.json`
- `web/pnpm-lock.yaml`
- `web/tsconfig.json`
- `web/vite.config.ts`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| web/package.json | web | dev, build, preview, test:e2e, lint, format | @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, @hookform/resolvers, @radix-ui/react-alert-dialog, @radix-ui/react-avatar, @radix-ui/react-checkbox, @radix-ui/react-collapsible, @radix-ui/react-context-menu, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-hover-card, @radix-ui/react-label, @radix-ui/react-popover |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | langbot | false | false | true | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/API_KEY_AUTH.md`
- `docs/MIGRATION_SUMMARY.md`
- `docs/PYPI_INSTALLATION.md`
- `docs/SEEKDB_INTEGRATION.md`
- `docs/TESTING_SUMMARY.md`
- `docs/WEBSOCKET_README.md`
- `docs/review/box-architecture.md`
- `docs/review/box-issues.md`
- `docs/review/box-session-scope.md`
- `docs/review/box-test-coverage.md`
- `docs/review/box-tob-analysis.md`
- `docs/review/box-vs-plugin-runtime.md`
- `docs/service-api-openapi.json`
- `src/langbot/libs/README.md`
- `src/langbot/libs/dify_service_api/README.md`
- `src/langbot/libs/wechatpad_api/README.md`
- `src/langbot/pkg/persistence/migrations/README.md`
- `tests/README.md`
- `web/README.md`
- `web/src/app/infra/http/README.md`

### 에이전트 지침 후보

- `.mcp.json`
- `AGENTS.md`
- `src/langbot/pkg/api/http/controller/groups/resources/mcp.py`
- `src/langbot/pkg/api/http/controller/groups/skills.py`
- `src/langbot/pkg/api/http/service/mcp.py`
- `src/langbot/pkg/api/http/service/skill.py`
- `src/langbot/pkg/entity/persistence/mcp.py`
- `src/langbot/pkg/persistence/alembic/versions/0004_add_mcp_readme.py`
- `src/langbot/pkg/provider/tools/loaders/mcp.py`
- `src/langbot/pkg/provider/tools/loaders/mcp_stdio.py`
- `src/langbot/pkg/provider/tools/loaders/skill.py`
- `src/langbot/pkg/provider/tools/loaders/skill_authoring.py`
- `src/langbot/pkg/skill/__init__.py`
- `src/langbot/pkg/skill/activation.py`
- `src/langbot/pkg/skill/manager.py`
- `src/langbot/pkg/skill/utils.py`
- `tests/integration_tests/box/test_box_mcp_integration.py`
- `tests/unit_tests/api/service/test_mcp_service.py`
- `tests/unit_tests/provider/test_mcp_box_integration.py`
- `tests/unit_tests/provider/test_skill_tools.py`
- `tests/unit_tests/test_skill_service.py`
- `web/src/app/home/mcp/MCPDetailContent.tsx`
- `web/src/app/home/mcp/components/mcp-form/MCPForm.tsx`
- `web/src/app/home/mcp/components/mcp-form/MCPReadme.tsx`
- `web/src/app/home/mcp/page.tsx`
- `web/src/app/home/plugins/mcp-server/MCPCardVO.ts`
- `web/src/app/home/plugins/mcp-server/MCPServerComponent.tsx`
- `web/src/app/home/plugins/mcp-server/mcp-card/MCPCardComponent.tsx`
- `web/src/app/home/plugins/mcp-server/mcp-form/MCPDeleteConfirmDialog.tsx`
- `web/src/app/home/plugins/mcp-server/mcp-form/MCPFormDialog.tsx`
- `web/src/app/home/skills/SkillDetailContent.tsx`
- `web/src/app/home/skills/components/SkillZipPreviewPanel.tsx`
- `web/src/app/home/skills/components/skill-form/SkillForm.tsx`
- `web/src/app/home/skills/page.tsx`

### 스펙/템플릿/명령/스킬 후보

- `src/langbot/templates/__init__.py`
- `src/langbot/templates/components.yaml`
- `src/langbot/templates/config.yaml`
- `src/langbot/templates/default-pipeline-config.json`
- `src/langbot/templates/embed/logo.webp`
- `src/langbot/templates/embed/widget.js`
- `src/langbot/templates/legacy/command.json`
- `src/langbot/templates/legacy/pipeline.json`
- `src/langbot/templates/legacy/platform.json`
- `src/langbot/templates/legacy/provider.json`
- `src/langbot/templates/legacy/system.json`
- `src/langbot/templates/metadata/pipeline/ai.yaml`
- `src/langbot/templates/metadata/pipeline/output.yaml`
- `src/langbot/templates/metadata/pipeline/safety.yaml`
- `src/langbot/templates/metadata/pipeline/trigger.yaml`
- `src/langbot/templates/metadata/sensitive-words.json`
- `web/src/app/home/skills/SkillDetailContent.tsx`
- `web/src/app/home/skills/components/SkillZipPreviewPanel.tsx`
- `web/src/app/home/skills/components/skill-form/SkillForm.tsx`
- `web/src/app/home/skills/page.tsx`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/README.md`
- `tests/__init__.py`
- `tests/e2e/conftest.py`
- `tests/e2e/test_startup.py`
- `tests/e2e/utils/config_factory.py`
- `tests/e2e/utils/process_manager.py`
- `tests/factories/__init__.py`
- `tests/factories/app.py`
- `tests/factories/message.py`
- `tests/factories/platform.py`
- `tests/factories/provider.py`
- `tests/integration/__init__.py`
- `tests/integration/api/__init__.py`
- `tests/integration/api/conftest.py`
- `tests/integration/api/test_bots.py`
- `tests/integration/api/test_embed.py`
- `tests/integration/api/test_knowledge.py`
- `tests/integration/api/test_monitoring.py`
- `tests/integration/api/test_pipelines.py`
- `tests/integration/api/test_providers.py`
- `tests/integration/api/test_smoke.py`
- `tests/integration/persistence/__init__.py`
- `tests/integration/persistence/test_migrations.py`
- `tests/integration/persistence/test_migrations_postgres.py`
- `tests/integration/pipeline/__init__.py`
- `tests/integration/pipeline/test_full_flow.py`
- `tests/integration_tests/__init__.py`
- `tests/integration_tests/box/__init__.py`
- `tests/integration_tests/box/test_box_integration.py`
- `tests/integration_tests/box/test_box_mcp_integration.py`
- `tests/smoke/__init__.py`
- `tests/smoke/test_fake_message_flow.py`
- `tests/test_cwe94_debug_exec.py`
- `tests/unit_tests/COVERAGE_EXCLUSIONS.md`
- `tests/unit_tests/__init__.py`
- `tests/unit_tests/api/__init__.py`
- `tests/unit_tests/api/http/service/test_bot_service.py`
- `tests/unit_tests/api/service/__init__.py`
- `tests/unit_tests/api/service/test_apikey_service.py`
- `tests/unit_tests/api/service/test_bot_service.py`
- `tests/unit_tests/api/service/test_knowledge_service.py`
- `tests/unit_tests/api/service/test_maintenance_service.py`
- `tests/unit_tests/api/service/test_mcp_service.py`
- `tests/unit_tests/api/service/test_model_service.py`
- `tests/unit_tests/api/service/test_pipeline_service.py`
- `tests/unit_tests/api/service/test_provider_service.py`
- `tests/unit_tests/api/service/test_space_service.py`
- `tests/unit_tests/api/service/test_user_service.py`
- `tests/unit_tests/api/service/test_webhook_service.py`
- `tests/unit_tests/api/test_apikey_service.py`
- `tests/unit_tests/box/test_box_connector.py`
- `tests/unit_tests/box/test_box_service.py`
- `tests/unit_tests/box/test_workspace.py`
- `tests/unit_tests/command/__init__.py`
- `tests/unit_tests/command/test_cmdmgr.py`
- `tests/unit_tests/command/test_operator.py`
- `tests/unit_tests/config/__init__.py`
- `tests/unit_tests/config/test_config_loader.py`
- `tests/unit_tests/core/__init__.py`
- `tests/unit_tests/core/test_app_config_validation.py`
- `tests/unit_tests/core/test_boot.py`
- `tests/unit_tests/core/test_bootutils_deps.py`
- `tests/unit_tests/core/test_bootutils_log.py`
- `tests/unit_tests/core/test_load_config.py`
- `tests/unit_tests/core/test_stage.py`
- `tests/unit_tests/core/test_taskmgr.py`
- `tests/unit_tests/discover/test_engine.py`
- `tests/unit_tests/persistence/test_database_decorator.py`
- `tests/unit_tests/persistence/test_mgr_methods.py`
- `tests/unit_tests/persistence/test_serialize_model.py`
- `tests/unit_tests/pipeline/__init__.py`
- `tests/unit_tests/pipeline/conftest.py`
- `tests/unit_tests/pipeline/test_aggregator.py`
- `tests/unit_tests/pipeline/test_bansess.py`
- `tests/unit_tests/pipeline/test_chat_handler.py`
- `tests/unit_tests/pipeline/test_chat_handler_logging.py`
- `tests/unit_tests/pipeline/test_chat_session_limit.py`
- `tests/unit_tests/pipeline/test_cntfilter.py`
- `tests/unit_tests/pipeline/test_command_handler.py`
- `tests/unit_tests/pipeline/test_config_coercion.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/build-dev-image.yaml`
- `.github/workflows/build-docker-image.yml`
- `.github/workflows/build-release-artifacts.yaml`
- `.github/workflows/check-i18n.yml`
- `.github/workflows/cla.yml`
- `.github/workflows/frontend-tests.yml`
- `.github/workflows/lint.yml`
- `.github/workflows/publish-to-pypi.yml`
- `.github/workflows/run-tests.yml`
- `.github/workflows/test-dev-image.yaml`
- `.github/workflows/test-migrations.yml`
- `Dockerfile`
- `docker/docker-compose.yaml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 545 |
| .tsx | 152 |
| .yaml | 77 |
| .ts | 59 |
| .svg | 42 |
| .md | 33 |
| .png | 23 |
| .json | 17 |
| .yml | 16 |
| .css | 10 |
| .sh | 7 |
| .webp | 5 |
| .mjs | 4 |
| license | 3 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `web/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `src/langbot/templates/__init__.py 스펙/명령 의미`
- `src/langbot/templates/components.yaml 스펙/명령 의미`
- `src/langbot/templates/config.yaml 스펙/명령 의미`
- `src/langbot/templates/default-pipeline-config.json 스펙/명령 의미`
- `src/langbot/templates/embed/logo.webp 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `uv.lock 실행 스크립트와 패키지 경계`
- `web/package.json 실행 스크립트와 패키지 경계`
- `web/pnpm-lock.yaml 실행 스크립트와 패키지 경계`

