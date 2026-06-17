# browser-use/browser-use 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/browser-use__browser-use |
| remote | https://github.com/browser-use/browser-use |
| HEAD | 476ef1b (2026-06-09) [codex] add BU3 browser use models (#5002) |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 496 |
| dirs | 100 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `🤖 LLM Quickstart`, `👋 Human Quickstart`, `or: pip install "browser-use[core]"`, `.env`, `GOOGLE_API_KEY=your-key`, `ANTHROPIC_API_KEY=your-key`, `from browser_use.beta import ChatOpenAI  # ChatOpenAI(model='gpt-5.5')`, `from browser_use.beta import ChatAnthropic  # ChatAnthropic(model='claude-opus-4-8')`, `Open Source vs Cloud`, `Demos`, `📋 Form-Filling`, `🍎 Grocery-Shopping`, `💻 Personal-Assistant.`, `💡See [more examples here ↗](https://docs.browser-use.com/examples) and give us a star!`, `🚀 Template Quickstart`, `💻 CLI`, `Claude Code Skill`, `Integrations, hosting, custom tools, MCP, and more on our [Docs ↗](https://docs.browser-use.com)`

> <picture <source media="(prefers color scheme light)" srcset="https //github.com/user attachments/assets/2ccdb752 22fb 41c7 8948 857fc1ad7e24" <source media="(prefers color scheme dark)" srcset="https //github.com/user attachments/assets/774a46d5 27a0 490c b7d0 e65fcbbfa358" <img alt="Shows a black Browser Use Logo in light color mode and a white one in dark color mode." src="https //github.com/user attachments/assets/2ccdb752 22fb 41c7 8948 857fc1ad7e24" width="full" </picture <div align="center" <picture <source media="(prefers color scheme light)" srcset="https //github.com/user attachments/assets/9955dda9 ede3 4971 8ee0 91cbc3850125" <source media="(prefers color scheme dark)" srcset="https //github.com/user attachments/assets/6797d09b 8ac3 4cb9 ba07 b289e080765a" <img alt="The AI browser agent." src="https //github.com/user attachments/assets/9955dda9 ede3 4971 8ee0 91cbc3850125" wi

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .dockerignore | file |
| .env.example | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| .python-version | file |
| AGENTS.md | file |
| BETA_AGENT_INTEGRATION_FEATURES.md | file |
| bin | dir |
| browser_use | dir |
| CLAUDE.md | file |
| CLOUD.md | file |
| docker | dir |
| Dockerfile | file |
| Dockerfile.fast | file |
| examples | dir |
| LICENSE | file |
| pyproject.toml | file |
| README.md | file |
| skills | dir |
| static | dir |
| tests | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| browser_use/ | 201 |
| examples/ | 123 |
| tests/ | 99 |
| skills/ | 26 |
| .github/ | 19 |
| (root) | 15 |
| docker/ | 5 |
| static/ | 5 |
| bin/ | 3 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| examples/ | 123 | preferred |
| tests/ | 99 | preferred |
| skills/ | 26 | preferred |
| browser_use/ | 201 | large |
| tests/ci/ | 93 | large |
| browser_use/llm/ | 54 | large |
| browser_use/browser/ | 28 | large |
| examples/models/ | 28 | large |
| examples/features/ | 24 | large |
| browser_use/skill_cli/ | 22 | large |
| browser_use/agent/ | 20 | large |
| .github/ | 19 | large |
| tests/ci/browser/ | 16 | large |
| browser_use/browser/watchdogs/ | 15 | large |
| browser_use/dom/ | 12 | large |
| .github/workflows/ | 11 | large |
| skills/cloud/ | 11 | large |
| examples/custom-functions/ | 10 | large |
| examples/use-cases/ | 10 | large |
| skills/cloud/references/ | 10 | large |
| skills/open-source/ | 10 | large |
| browser_use/actor/ | 9 | large |
| browser_use/agent/system_prompts/ | 9 | large |
| examples/apps/ | 9 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `docker/base-images/chromium/Dockerfile`
- `docker/base-images/python-deps/Dockerfile`
- `docker/base-images/system/Dockerfile`
- `pyproject.toml`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | browser-use | false | true | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.github/CONTRIBUTING.md`
- `README.md`
- `browser_use/README.md`
- `browser_use/actor/README.md`
- `browser_use/llm/README.md`
- `browser_use/llm/oci_raw/README.md`
- `browser_use/skill_cli/README.md`
- `browser_use/skills/README.md`
- `docker/README.md`
- `examples/apps/ad-use/README.md`
- `examples/apps/msg-use/README.md`
- `examples/apps/news-use/README.md`
- `examples/cloud/README.md`
- `examples/integrations/README.md`
- `examples/integrations/slack/README.md`
- `examples/models/langchain/README.md`
- `examples/ui/README.md`
- `tests/agent_tasks/README.md`

### 에이전트 지침 후보

- `AGENTS.md`
- `CLAUDE.md`
- `browser_use/mcp/.dxtignore`
- `browser_use/mcp/__init__.py`
- `browser_use/mcp/__main__.py`
- `browser_use/mcp/client.py`
- `browser_use/mcp/controller.py`
- `browser_use/mcp/manifest.json`
- `browser_use/mcp/server.py`
- `browser_use/skill_cli/README.md`
- `browser_use/skill_cli/__init__.py`
- `browser_use/skill_cli/__main__.py`
- `browser_use/skill_cli/actions.py`
- `browser_use/skill_cli/browser.py`
- `browser_use/skill_cli/commands/__init__.py`
- `browser_use/skill_cli/commands/browser.py`
- `browser_use/skill_cli/commands/cloud.py`
- `browser_use/skill_cli/commands/doctor.py`
- `browser_use/skill_cli/commands/python_exec.py`
- `browser_use/skill_cli/commands/setup.py`
- `browser_use/skill_cli/config.py`
- `browser_use/skill_cli/daemon.py`
- `browser_use/skill_cli/install.sh`
- `browser_use/skill_cli/install_lite.sh`
- `browser_use/skill_cli/main.py`
- `browser_use/skill_cli/profile_use.py`
- `browser_use/skill_cli/python_session.py`
- `browser_use/skill_cli/requirements-cli.txt`
- `browser_use/skill_cli/sessions.py`
- `browser_use/skill_cli/tunnel.py`
- `browser_use/skill_cli/utils.py`
- `browser_use/skills/README.md`
- `browser_use/skills/__init__.py`
- `browser_use/skills/service.py`
- `browser_use/skills/utils.py`
- `browser_use/skills/views.py`
- `examples/models/skills.py`
- `skills/browser-use/SKILL.md`
- `skills/browser-use/references/cdp-python.md`
- `skills/browser-use/references/multi-session.md`
- `skills/cloud/SKILL.md`
- `skills/cloud/references/api-v2.md`
- `skills/cloud/references/api-v3.md`
- `skills/cloud/references/browser-api.md`
- `skills/cloud/references/features.md`
- `skills/cloud/references/guides/chat-ui.md`
- `skills/cloud/references/guides/subagent.md`
- `skills/cloud/references/guides/tools-integration.md`
- `skills/cloud/references/patterns.md`
- `skills/cloud/references/quickstart.md`
- `skills/cloud/references/sessions.md`
- `skills/open-source/SKILL.md`
- `skills/open-source/references/actor.md`
- `skills/open-source/references/agent.md`
- `skills/open-source/references/browser.md`
- `skills/open-source/references/examples.md`
- `skills/open-source/references/integrations.md`
- `skills/open-source/references/models.md`
- `skills/open-source/references/monitoring.md`
- `skills/open-source/references/quickstart.md`
- `skills/open-source/references/tools.md`
- `skills/remote-browser/SKILL.md`
- `skills/x402/SKILL.md`
- `tests/ci/security/test_mcp_allowed_domains.py`

### 스펙/템플릿/명령/스킬 후보

- `browser_use/skill_cli/commands/__init__.py`
- `browser_use/skill_cli/commands/browser.py`
- `browser_use/skill_cli/commands/cloud.py`
- `browser_use/skill_cli/commands/doctor.py`
- `browser_use/skill_cli/commands/python_exec.py`
- `browser_use/skill_cli/commands/setup.py`
- `browser_use/skills/README.md`
- `browser_use/skills/__init__.py`
- `browser_use/skills/service.py`
- `browser_use/skills/utils.py`
- `browser_use/skills/views.py`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `browser_use/llm/tests/test_anthropic_cache.py`
- `browser_use/llm/tests/test_chat_models.py`
- `browser_use/llm/tests/test_gemini_image.py`
- `browser_use/llm/tests/test_groq_loop.py`
- `browser_use/llm/tests/test_mistral_schema.py`
- `browser_use/llm/tests/test_single_step.py`
- `browser_use/tokens/tests/test_cost.py`
- `tests/agent_tasks/README.md`
- `tests/agent_tasks/amazon_laptop.yaml`
- `tests/agent_tasks/browser_use_pip.yaml`
- `tests/ci/browser/iframe_template.html`
- `tests/ci/browser/test_cdp_headers.py`
- `tests/ci/browser/test_cloud_browser.py`
- `tests/ci/browser/test_cross_origin_click.py`
- `tests/ci/browser/test_dom_serializer.py`
- `tests/ci/browser/test_navigation.py`
- `tests/ci/browser/test_navigation_slow_pages.py`
- `tests/ci/browser/test_output_paths.py`
- `tests/ci/browser/test_page_stacked_template.html`
- `tests/ci/browser/test_page_template.html`
- `tests/ci/browser/test_profile_copy.py`
- `tests/ci/browser/test_proxy.py`
- `tests/ci/browser/test_screenshot.py`
- `tests/ci/browser/test_session_start.py`
- `tests/ci/browser/test_tabs.py`
- `tests/ci/browser/test_true_cross_origin_click.py`
- `tests/ci/conftest.py`
- `tests/ci/evaluate_tasks.py`
- `tests/ci/infrastructure/test_config.py`
- `tests/ci/infrastructure/test_filesystem.py`
- `tests/ci/infrastructure/test_registry_action_parameter_injection.py`
- `tests/ci/infrastructure/test_registry_core.py`
- `tests/ci/infrastructure/test_registry_validation.py`
- `tests/ci/infrastructure/test_url_shortening.py`
- `tests/ci/infrastructure/test_version_check.py`
- `tests/ci/interactions/test_autocomplete_interaction.py`
- `tests/ci/interactions/test_dropdown_aria_menus.py`
- `tests/ci/interactions/test_dropdown_native.py`
- `tests/ci/interactions/test_radio_buttons.py`
- `tests/ci/models/model_test_helper.py`
- `tests/ci/models/test_azure_responses_api.py`
- `tests/ci/models/test_llm_anthropic.py`
- `tests/ci/models/test_llm_azure.py`
- `tests/ci/models/test_llm_browseruse.py`
- `tests/ci/models/test_llm_google.py`
- `tests/ci/models/test_llm_model_factory.py`
- `tests/ci/models/test_llm_openai.py`
- `tests/ci/models/test_llm_schema_optimizer.py`
- `tests/ci/security/test_daemon_socket_perms.py`
- `tests/ci/security/test_domain_filtering.py`
- `tests/ci/security/test_download_filename_sanitization.py`
- `tests/ci/security/test_ip_blocking.py`
- `tests/ci/security/test_mcp_allowed_domains.py`
- `tests/ci/security/test_security_flags.py`
- `tests/ci/security/test_sensitive_data.py`
- `tests/ci/security/test_upload_file_containment.py`
- `tests/ci/test_action_blank_page.py`
- `tests/ci/test_action_loop_detection.py`
- `tests/ci/test_action_record.py`
- `tests/ci/test_action_save_as_pdf.py`
- `tests/ci/test_action_timeout.py`
- `tests/ci/test_agent_planning.py`
- `tests/ci/test_ai_step.py`
- `tests/ci/test_ax_name_matching.py`
- `tests/ci/test_beta_agent.py`
- `tests/ci/test_budget_warning.py`
- `tests/ci/test_cdp_timeout.py`
- `tests/ci/test_cli_cloud.py`
- `tests/ci/test_cli_cloud_connect.py`
- `tests/ci/test_cli_connect.py`
- `tests/ci/test_cli_coordinate_click.py`
- `tests/ci/test_cli_headed_flag.py`
- `tests/ci/test_cli_install_init.py`
- `tests/ci/test_cli_lifecycle.py`
- `tests/ci/test_cli_lite_deps.py`
- `tests/ci/test_cli_sessions.py`
- `tests/ci/test_cli_upload.py`
- `tests/ci/test_coordinate_clicking.py`
- `tests/ci/test_doctor_command.py`
- `tests/ci/test_downloads_watchdog.py`
- ... 26 more

### CI/Docker 후보

- `.github/workflows/build-base-image.yml.disabled`
- `.github/workflows/claude.yml`
- `.github/workflows/cloud_evals.yml`
- `.github/workflows/docker.yml`
- `.github/workflows/eval-on-pr.yml`
- `.github/workflows/install-script.yml`
- `.github/workflows/lint.yml`
- `.github/workflows/package.yaml`
- `.github/workflows/publish.yml`
- `.github/workflows/stale-bot.yml`
- `.github/workflows/test.yaml`
- `Dockerfile`
- `docker/base-images/chromium/Dockerfile`
- `docker/base-images/python-deps/Dockerfile`
- `docker/base-images/system/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 385 |
| .md | 57 |
| .yml | 13 |
| .png | 7 |
| .sh | 6 |
| .yaml | 5 |
| dockerfile | 4 |
| .html | 3 |
| .example | 2 |
| .json | 2 |
| .disabled | 1 |
| .dockerignore | 1 |
| .dxtignore | 1 |
| .fast | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `skills/ 내부 책임 분리`
- `browser_use/ 내부 책임 분리`
- `tests/ci/ 내부 책임 분리`
- `browser_use/skill_cli/commands/__init__.py 스펙/명령 의미`
- `browser_use/skill_cli/commands/browser.py 스펙/명령 의미`
- `browser_use/skill_cli/commands/cloud.py 스펙/명령 의미`
- `browser_use/skill_cli/commands/doctor.py 스펙/명령 의미`
- `browser_use/skill_cli/commands/python_exec.py 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `docker/base-images/chromium/Dockerfile 실행 스크립트와 패키지 경계`
- `docker/base-images/python-deps/Dockerfile 실행 스크립트와 패키지 경계`
- `docker/base-images/system/Dockerfile 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`

