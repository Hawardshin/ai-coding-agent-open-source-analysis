# All-Hands-AI/OpenHands 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/All-Hands-AI__OpenHands |
| remote | https://github.com/All-Hands-AI/OpenHands |
| HEAD | 2a3f06a (2026-06-09) perf: skip runtime API call in webhook auth via SandboxRecord (#14732) |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 2385 |
| dirs | 368 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `OpenHands Software Agent SDK`, `OpenHands CLI`, `OpenHands Local GUI`, `OpenHands Cloud`, `OpenHands Enterprise`, `Everything Else`, `Thank You to Our Contributors`, `Trusted by Engineers at`

> <a name="readme top" </a <div align="center" <img src="https //raw.githubusercontent.com/OpenHands/docs/main/openhands/static/img/logo.png" alt="Logo" width="200" <h1 align="center" style="border bottom none" OpenHands AI Driven Development</h1 </div <div align="center" <a href="https //github.com/OpenHands/OpenHands/blob/main/LICENSE" <img src="https //img.shields.io/badge/LICENSE MIT 20B2AA?style=for the badge" alt="MIT License" </a <a href="https //docs.google.com/spreadsheets/d/1wOUdFCMyY6Nt0AIqF705KN4JKOWgeI4wUGUP60krXXs/edit?gid=811504672 gid=811504672" <img src="https //img.shields.io/badge/SWEBench 77.6 00cc00?logoColor=FFE165&style=for the badge" alt="Benchmark Score" </a <br/ <a href="https //docs.openhands.dev/sdk" <img src="https //img.shields.io/badge/Documentation 000?logo=googledocs&logoColor=FFE165&style=for the badge" alt="Check out the documentation" </a <a href="https 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .devcontainer | dir |
| .dockerignore | file |
| .editorconfig | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .nvmrc | file |
| .openhands | dir |
| .vscode | dir |
| AGENTS.md | file |
| build.sh | file |
| CITATION.cff | file |
| CNAME | file |
| CODE_OF_CONDUCT.md | file |
| COMMUNITY.md | file |
| config.template.toml | file |
| containers | dir |
| CONTRIBUTING.md | file |
| CREDITS.md | file |
| dev_config | dir |
| Development.md | file |
| docker-compose.yml | file |
| enterprise | dir |
| frontend | dir |
| ISSUE_TRIAGE.md | file |
| kind | dir |
| LICENSE | file |
| Makefile | file |
| MANIFEST.in | file |
| openhands | dir |
| openhands-ui | dir |
| poetry.lock | file |
| pydoc-markdown.yml | file |
| pyproject.toml | file |
| pytest.ini | file |
| README.md | file |
| scripts | dir |
| skills | dir |
| tests | dir |
| uv.lock | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| frontend/ | 1299 |
| enterprise/ | 519 |
| openhands/ | 261 |
| tests/ | 106 |
| openhands-ui/ | 81 |
| .github/ | 32 |
| skills/ | 27 |
| (root) | 26 |
| containers/ | 7 |
| .agents/ | 6 |
| kind/ | 6 |
| scripts/ | 5 |
| .openhands/ | 4 |
| .devcontainer/ | 3 |
| dev_config/ | 2 |
| .vscode/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| frontend/ | 1299 | preferred |
| tests/ | 106 | preferred |
| skills/ | 27 | preferred |
| scripts/ | 5 | preferred |
| frontend/src/ | 986 | large |
| enterprise/ | 519 | large |
| frontend/src/components/ | 420 | large |
| frontend/__tests__/ | 276 | large |
| openhands/ | 261 | large |
| openhands/app_server/ | 239 | large |
| frontend/src/hooks/ | 181 | large |
| enterprise/tests/ | 156 | large |
| enterprise/tests/unit/ | 155 | large |
| frontend/__tests__/components/ | 139 | large |
| enterprise/migrations/ | 121 | large |
| enterprise/migrations/versions/ | 118 | large |
| frontend/src/icons/ | 113 | large |
| tests/unit/ | 105 | large |
| openhands/app_server/integrations/ | 91 | large |
| enterprise/storage/ | 82 | large |
| openhands-ui/ | 81 | large |
| enterprise/server/ | 80 | large |
| frontend/src/utils/ | 71 | large |
| openhands-ui/components/ | 60 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `containers/app/Dockerfile`
- `containers/dev/Dockerfile`
- `containers/dev/compose.yml`
- `docker-compose.yml`
- `enterprise/Dockerfile`
- `enterprise/poetry.lock`
- `enterprise/pyproject.toml`
- `frontend/package.json`
- `frontend/tsconfig.json`
- `frontend/vite.config.ts`
- `openhands-ui/bun.lock`
- `openhands-ui/package.json`
- `openhands-ui/tsconfig.json`
- `openhands-ui/vite.config.ts`
- `poetry.lock`
- `pyproject.toml`
- `uv.lock`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| frontend/package.json | openhands-frontend | dev, dev:mock, dev:mock:saas, build, start, test, test:e2e, test:coverage, dev_wsl, preview, make-i18n, prelint, lint, lint:fix, prepare, typecheck | @heroui/react, @microlink/react-json-view, @monaco-editor/react, @react-router/node, @react-router/serve, @tailwindcss/vite, @tanstack/react-query, @uidotdev/usehooks, @xterm/addon-fit, @xterm/xterm, axios, class-variance-authority, clsx, downshift |
| openhands-ui/package.json | @openhands/ui | dev, build:sb, clean, build, prepublishOnly | @floating-ui/react, clsx, deep-equal, focus-trap-react, react-bootstrap-icons, react-select, sonner, tailwind-scrollbar |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| enterprise/pyproject.toml | enterprise_server | true | false | true | true |
| pyproject.toml | openhands-ai | true | false | true | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.devcontainer/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `containers/README.md`
- `containers/dev/README.md`
- `enterprise/README.md`
- `enterprise/doc/architecture/README.md`
- `enterprise/doc/architecture/authentication.md`
- `enterprise/doc/architecture/external-integrations.md`
- `enterprise/doc/design-doc/openhands-enterprise-telemetry-design.md`
- `enterprise/doc/design-doc/plugin-launch-flow.md`
- `enterprise/enterprise_local/README.md`
- `enterprise/migrations/README.md`
- `enterprise/server/maintenance_task_processor/README.md`
- `enterprise/server/sharing/README.md`
- `enterprise/sync/README.md`
- `frontend/README.md`
- `frontend/__tests__/helpers/README.md`
- `frontend/src/api/README.md`
- `openhands-ui/README.md`
- `openhands/app_server/README.md`
- `openhands/app_server/app_conversation/README.md`
- `openhands/app_server/app_conversation/git/README.md`
- `openhands/app_server/app_lifespan/alembic/README`
- `openhands/app_server/event/README.md`
- `openhands/app_server/event_callback/README.md`
- `openhands/app_server/file_store/README.md`
- `openhands/app_server/sandbox/README.md`
- `openhands/app_server/services/README.md`
- `openhands/app_server/user/README.md`
- `openhands/app_server/utils/README.md`
- `skills/README.md`
- `tests/unit/README.md`

### 에이전트 지침 후보

- `.agents/skills/cross-repo-testing/SKILL.md`
- `.agents/skills/custom-codereview-guide.md`
- `.agents/skills/upcoming-release/SKILL.md`
- `.agents/skills/update-sdk/SKILL.md`
- `.agents/skills/update-sdk/references/docker-image-locations.md`
- `.agents/skills/update-sdk/references/sdk-pinning-examples.md`
- `AGENTS.md`
- `enterprise/migrations/versions/036_add_mcp_config_to_user_settings.py`
- `enterprise/migrations/versions/082_add_setting_up_skills_enum_value.py`
- `enterprise/migrations/versions/102_add_disabled_skills_to_user_settings.py`
- `enterprise/migrations/versions/103_add_mcp_config_to_org_member.py`
- `enterprise/migrations/versions/104_add_disabled_skills_to_user.py`
- `frontend/__tests__/components/features/settings/mcp-settings/mcp-server-form.validation.test.tsx`
- `frontend/__tests__/components/features/settings/mcp-settings/mcp-server-list.test.tsx`
- `frontend/__tests__/components/modals/skills/skill-modal.test.tsx`
- `frontend/__tests__/components/v1/chat/event-content-helpers/create-skill-ready-event.test.ts`
- `frontend/__tests__/components/v1/chat/event-content-helpers/get-skill-ready-items.test.ts`
- `frontend/__tests__/components/v1/chat/event-message-components/skill-item-expanded.test.ts`
- `frontend/__tests__/components/v1/chat/event-message-components/skill-ready-content-list.test.tsx`
- `frontend/__tests__/hooks/mutation/use-mcp-server-mutations.test.tsx`
- `frontend/__tests__/routes/mcp-settings.test.tsx`
- `frontend/__tests__/utils/mcp-config.test.ts`
- `frontend/src/api/skills-service.ts`
- `frontend/src/components/features/chat/event-message-components/mcp-event-message.tsx`
- `frontend/src/components/features/chat/mcp-observation-content.tsx`
- `frontend/src/components/features/conversation-panel/skill-content.tsx`
- `frontend/src/components/features/conversation-panel/skill-item.tsx`
- `frontend/src/components/features/conversation-panel/skill-triggers.tsx`
- `frontend/src/components/features/conversation-panel/skills-empty-state.tsx`
- `frontend/src/components/features/conversation-panel/skills-loading-state.tsx`
- `frontend/src/components/features/conversation-panel/skills-modal-header.tsx`
- `frontend/src/components/features/conversation-panel/skills-modal.tsx`
- `frontend/src/components/features/settings/mcp-settings/mcp-server-form.tsx`
- `frontend/src/components/features/settings/mcp-settings/mcp-server-list-item.tsx`
- `frontend/src/components/features/settings/mcp-settings/mcp-server-list.tsx`
- `frontend/src/components/v1/chat/event-content-helpers/create-skill-ready-event.ts`
- `frontend/src/components/v1/chat/event-content-helpers/get-skill-ready-content.ts`
- `frontend/src/components/v1/chat/event-message-components/skill-item-expanded.tsx`
- `frontend/src/components/v1/chat/event-message-components/skill-ready-content-list.tsx`
- `frontend/src/hooks/mutation/use-add-mcp-server.ts`
- `frontend/src/hooks/mutation/use-delete-mcp-server.ts`
- `frontend/src/hooks/mutation/use-update-mcp-server.ts`
- `frontend/src/hooks/query/use-conversation-skills.ts`
- `frontend/src/hooks/query/use-skills.ts`
- `frontend/src/routes/mcp-settings.tsx`
- `frontend/src/routes/skills-settings.tsx`
- `frontend/src/utils/mcp-config.ts`
- `openhands/app_server/app_conversation/skill_loader.py`
- `openhands/app_server/mcp/mcp_router.py`
- `openhands/app_server/user/skills_router.py`
- `skills/README.md`
- `skills/add_agent.md`
- `skills/add_repo_inst.md`
- `skills/address_pr_comments.md`
- `skills/agent-builder.md`
- `skills/agent_memory.md`
- `skills/azure_devops.md`
- `skills/bitbucket.md`
- `skills/bitbucket_data_center.md`
- `skills/code-review.md`
- `skills/codereview-roasted.md`
- `skills/default-tools.md`
- `skills/docker.md`
- `skills/fix-py-line-too-long.md`
- `skills/fix_test.md`
- `skills/flarglebargle.md`
- `skills/github.md`
- `skills/gitlab.md`
- `skills/kubernetes.md`
- `skills/npm.md`
- `skills/onboarding.md`
- `skills/pdflatex.md`
- `skills/security.md`
- `skills/ssh.md`
- `skills/swift-linux.md`
- `skills/update_pr_description.md`
- `skills/update_test.md`
- `tests/unit/app_server/test_app_conversation_skills_endpoint.py`
- `tests/unit/app_server/test_skill_loader.py`
- `tests/unit/mcp/test_mcp_integration.py`
- ... 2 more

### 스펙/템플릿/명령/스킬 후보

- `.agents/skills/cross-repo-testing/SKILL.md`
- `.agents/skills/custom-codereview-guide.md`
- `.agents/skills/upcoming-release/SKILL.md`
- `.agents/skills/update-sdk/SKILL.md`
- `.agents/skills/update-sdk/references/docker-image-locations.md`
- `.agents/skills/update-sdk/references/sdk-pinning-examples.md`
- `enterprise/doc/design-doc/openhands-enterprise-telemetry-design.md`
- `frontend/__tests__/components/modals/skills/skill-modal.test.tsx`
- `openhands/app_server/integrations/templates/resolver/azure_devops/issue_conversation_instructions.j2`
- `openhands/app_server/integrations/templates/resolver/azure_devops/issue_prompt.j2`
- `openhands/app_server/integrations/templates/resolver/azure_devops/pr_update_conversation_instructions.j2`
- `openhands/app_server/integrations/templates/resolver/azure_devops/pr_update_prompt.j2`
- `openhands/app_server/integrations/templates/resolver/bitbucket/issue_conversation_instructions.j2`
- `openhands/app_server/integrations/templates/resolver/bitbucket/issue_prompt.j2`
- `openhands/app_server/integrations/templates/resolver/bitbucket/pr_update_conversation_instructions.j2`
- `openhands/app_server/integrations/templates/resolver/bitbucket/pr_update_initial_message.j2`
- `openhands/app_server/integrations/templates/resolver/bitbucket/pr_update_prompt.j2`
- `openhands/app_server/integrations/templates/resolver/github/issue_comment_initial_message.j2`
- `openhands/app_server/integrations/templates/resolver/github/issue_conversation_instructions.j2`
- `openhands/app_server/integrations/templates/resolver/github/issue_prompt.j2`
- `openhands/app_server/integrations/templates/resolver/github/pr_update_conversation_instructions.j2`
- `openhands/app_server/integrations/templates/resolver/github/pr_update_initial_message.j2`
- `openhands/app_server/integrations/templates/resolver/github/pr_update_prompt.j2`
- `openhands/app_server/integrations/templates/resolver/gitlab/issue_conversation_instructions.j2`
- `openhands/app_server/integrations/templates/resolver/gitlab/issue_prompt.j2`
- `openhands/app_server/integrations/templates/resolver/gitlab/mr_update_conversation_instructions.j2`
- `openhands/app_server/integrations/templates/resolver/gitlab/mr_update_prompt.j2`
- `openhands/app_server/integrations/templates/resolver/jira/jira_existing_conversation.j2`
- `openhands/app_server/integrations/templates/resolver/jira/jira_instructions.j2`
- `openhands/app_server/integrations/templates/resolver/jira/jira_new_conversation.j2`
- `openhands/app_server/integrations/templates/resolver/jira_dc/jira_dc_existing_conversation.j2`
- `openhands/app_server/integrations/templates/resolver/jira_dc/jira_dc_instructions.j2`
- `openhands/app_server/integrations/templates/resolver/jira_dc/jira_dc_new_conversation.j2`
- `openhands/app_server/integrations/templates/resolver/linear/linear_existing_conversation.j2`
- `openhands/app_server/integrations/templates/resolver/linear/linear_instructions.j2`
- `openhands/app_server/integrations/templates/resolver/linear/linear_new_conversation.j2`
- `openhands/app_server/integrations/templates/resolver/slack/user_message_conversation_instructions.j2`
- `openhands/app_server/integrations/templates/resolver/summary_prompt.j2`
- `openhands/app_server/integrations/templates/suggested_task/failing_checks_prompt.j2`
- `openhands/app_server/integrations/templates/suggested_task/merge_conflict_prompt.j2`
- `openhands/app_server/integrations/templates/suggested_task/open_issue_prompt.j2`
- `openhands/app_server/integrations/templates/suggested_task/unresolved_comments_prompt.j2`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `enterprise/tests/__init__.py`
- `enterprise/tests/unit/__init__.py`
- `enterprise/tests/unit/conftest.py`
- `enterprise/tests/unit/integrations/__init__.py`
- `enterprise/tests/unit/integrations/azure_devops/__init__.py`
- `enterprise/tests/unit/integrations/azure_devops/test_azure_devops_service.py`
- `enterprise/tests/unit/integrations/bitbucket/__init__.py`
- `enterprise/tests/unit/integrations/bitbucket/test_bitbucket_manager.py`
- `enterprise/tests/unit/integrations/bitbucket/test_bitbucket_view.py`
- `enterprise/tests/unit/integrations/bitbucket/test_bitbucket_webhook.py`
- `enterprise/tests/unit/integrations/bitbucket_data_center/__init__.py`
- `enterprise/tests/unit/integrations/bitbucket_data_center/test_bitbucket_dc_manager.py`
- `enterprise/tests/unit/integrations/bitbucket_data_center/test_bitbucket_dc_service.py`
- `enterprise/tests/unit/integrations/bitbucket_data_center/test_bitbucket_dc_view.py`
- `enterprise/tests/unit/integrations/bitbucket_data_center/test_bitbucket_dc_webhook.py`
- `enterprise/tests/unit/integrations/github/test_data_collector_timestamps.py`
- `enterprise/tests/unit/integrations/github/test_github_manager.py`
- `enterprise/tests/unit/integrations/github/test_github_v1_callback_processor.py`
- `enterprise/tests/unit/integrations/github/test_github_view_v1_initial_user_message.py`
- `enterprise/tests/unit/integrations/gitlab/test_gitlab_manager.py`
- `enterprise/tests/unit/integrations/gitlab/test_gitlab_service.py`
- `enterprise/tests/unit/integrations/gitlab/test_gitlab_v1_callback_processor.py`
- `enterprise/tests/unit/integrations/jira/__init__.py`
- `enterprise/tests/unit/integrations/jira/conftest.py`
- `enterprise/tests/unit/integrations/jira/test_jira_manager.py`
- `enterprise/tests/unit/integrations/jira/test_jira_payload.py`
- `enterprise/tests/unit/integrations/jira/test_jira_v1_callback_processor.py`
- `enterprise/tests/unit/integrations/jira/test_jira_view.py`
- `enterprise/tests/unit/integrations/jira_dc/__init__.py`
- `enterprise/tests/unit/integrations/jira_dc/conftest.py`
- `enterprise/tests/unit/integrations/jira_dc/test_jira_dc_manager.py`
- `enterprise/tests/unit/integrations/jira_dc/test_jira_dc_service_account.py`
- `enterprise/tests/unit/integrations/jira_dc/test_jira_dc_v1_callback_processor.py`
- `enterprise/tests/unit/integrations/jira_dc/test_jira_dc_view.py`
- `enterprise/tests/unit/integrations/slack/test_slack_v1_callback_processor.py`
- `enterprise/tests/unit/integrations/slack/test_slack_view.py`
- `enterprise/tests/unit/integrations/test_resolver_context.py`
- `enterprise/tests/unit/integrations/test_resolver_org_router.py`
- `enterprise/tests/unit/integrations/test_utils.py`
- `enterprise/tests/unit/mock_stripe_service.py`
- `enterprise/tests/unit/routes/__init__.py`
- `enterprise/tests/unit/routes/test_service.py`
- `enterprise/tests/unit/server/auth/__init__.py`
- `enterprise/tests/unit/server/auth/test_cookie_chunking.py`
- `enterprise/tests/unit/server/auth/test_reject_x_org_id_path_mismatch.py`
- `enterprise/tests/unit/server/auth/test_saas_user_auth_effective_org.py`
- `enterprise/tests/unit/server/auth/test_saas_user_auth_org_info.py`
- `enterprise/tests/unit/server/routes/__init__.py`
- `enterprise/tests/unit/server/routes/test_analytics_events.py`
- `enterprise/tests/unit/server/routes/test_api_keys.py`
- `enterprise/tests/unit/server/routes/test_auth_offline_token.py`
- `enterprise/tests/unit/server/routes/test_auth_onboarding.py`
- `enterprise/tests/unit/server/routes/test_bitbucket_dc_proxy.py`
- `enterprise/tests/unit/server/routes/test_email_routes.py`
- `enterprise/tests/unit/server/routes/test_github_proxy.py`
- `enterprise/tests/unit/server/routes/test_gitlab_integration_routes.py`
- `enterprise/tests/unit/server/routes/test_jira_dc_integration_routes.py`
- `enterprise/tests/unit/server/routes/test_jira_integration_routes.py`
- `enterprise/tests/unit/server/routes/test_oauth_device.py`
- `enterprise/tests/unit/server/routes/test_org_defaults_settings.py`
- `enterprise/tests/unit/server/routes/test_org_git_claims.py`
- `enterprise/tests/unit/server/routes/test_orgs.py`
- `enterprise/tests/unit/server/routes/test_user_app_settings.py`
- `enterprise/tests/unit/server/routes/test_users_v1.py`
- `enterprise/tests/unit/server/services/test_automation_event_service.py`
- `enterprise/tests/unit/server/services/test_org_app_settings_service.py`
- `enterprise/tests/unit/server/services/test_org_member_financial_service.py`
- `enterprise/tests/unit/server/services/test_org_member_service.py`
- `enterprise/tests/unit/server/services/test_user_app_settings_service.py`
- `enterprise/tests/unit/server/test_constants.py`
- `enterprise/tests/unit/server/test_rate_limit.py`
- `enterprise/tests/unit/server/test_rate_limit_utils.py`
- `enterprise/tests/unit/storage/__init__.py`
- `enterprise/tests/unit/storage/test_api_key_store.py`
- `enterprise/tests/unit/storage/test_auth_token_store.py`
- `enterprise/tests/unit/storage/test_bitbucket_dc_webhook_store.py`
- `enterprise/tests/unit/storage/test_database.py`
- `enterprise/tests/unit/storage/test_device_code.py`
- `enterprise/tests/unit/storage/test_device_code_store.py`
- `enterprise/tests/unit/storage/test_gitlab_webhook_store.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/_build-image.yml`
- `.github/workflows/check-package-versions.yml`
- `.github/workflows/check-version-consistency.yml`
- `.github/workflows/enterprise-apply-migrations-test-db.yml`
- `.github/workflows/enterprise-check-migrations.yml`
- `.github/workflows/fe-e2e-tests.yml`
- `.github/workflows/fe-unit-tests.yml`
- `.github/workflows/ghcr-build.yml`
- `.github/workflows/issue-opened.yml`
- `.github/workflows/lint-fix.yml`
- `.github/workflows/lint.yml`
- `.github/workflows/npm-publish-ui.yml`
- `.github/workflows/pr-artifacts.yml`
- `.github/workflows/pr-readiness-confirm.yml`
- `.github/workflows/promote-to-development.yml`
- `.github/workflows/py-tests.yml`
- `.github/workflows/pypi-release.yml`
- `.github/workflows/qa-changes-by-openhands.yml`
- `.github/workflows/remove-duplicate-candidate-label.yml`
- `.github/workflows/stale.yml`
- `.github/workflows/tag-image.yml`
- `.github/workflows/ui-build.yml`
- `.github/workflows/welcome-good-first-issue.yml`
- `containers/app/Dockerfile`
- `containers/dev/Dockerfile`
- `containers/dev/compose.yml`
- `docker-compose.yml`
- `enterprise/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 818 |
| .tsx | 715 |
| .ts | 498 |
| .svg | 121 |
| .md | 77 |
| .j2 | 34 |
| .yml | 32 |
| .json | 9 |
| .sh | 9 |
| .yaml | 8 |
| .css | 7 |
| .png | 6 |
| .ini | 5 |
| .lock | 4 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `frontend/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `skills/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `frontend/src/ 내부 책임 분리`
- `.agents/skills/cross-repo-testing/SKILL.md 스펙/명령 의미`
- `.agents/skills/custom-codereview-guide.md 스펙/명령 의미`
- `.agents/skills/upcoming-release/SKILL.md 스펙/명령 의미`
- `.agents/skills/update-sdk/SKILL.md 스펙/명령 의미`
- `.agents/skills/update-sdk/references/docker-image-locations.md 스펙/명령 의미`
- `containers/app/Dockerfile 실행 스크립트와 패키지 경계`
- `containers/dev/Dockerfile 실행 스크립트와 패키지 경계`
- `containers/dev/compose.yml 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `enterprise/Dockerfile 실행 스크립트와 패키지 경계`

