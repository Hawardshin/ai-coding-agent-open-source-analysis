# nesquena/hermes-webui 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/nesquena__hermes-webui |
| remote | https://github.com/nesquena/hermes-webui |
| HEAD | 85d0e52 (2026-06-10) Stamp v0.51.350 — Release LN (session-move / project-delete timeout fix) (#3923) |
| branch | master |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 1237 |
| dirs | 101 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Hermes Web UI`, `Contents`, `Why Hermes`, `Quick start`, `Advanced: dynamic recall prefill & Gateway-backed chat`, `Features`, `Chat and agent`, `Sessions`, `Workspace file browser`, `Voice input`, `Profiles`, `Authentication and security`, `Themes`, `Settings and configuration`, `Slash commands`, `Panels`, `Mobile responsive`, `Configuration & access`

> Hermes Web UI Hermes Agent is a sophisticated autonomous agent that lives on your server, accessed via a terminal or messaging apps, that remembers what it learns and gets more capable the longer it runs. Hermes WebUI is a lightweight, dark themed web app interface in your browser for Hermes Agent. Full parity with the CLI experience everything you can do from a terminal, you can do from this UI. No build step, no framework, no bundler. Just Python and vanilla JS. Layout three panel. Left sidebar for sessions and navigation, center for chat, right for workspace file browsing. Model, profile, and workspace controls live in the composer footer — always visible while composing. A circular context ring shows token usage at a glance. All settings and session tools are in the Hermes Control Center (launcher at the sidebar bottom). <img width="2448" height="1748" alt="Hermes Web UI — three pane

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| __pycache__ | dir |
| .dockerignore | file |
| .env.docker.example | file |
| .env.example | file |
| .github | dir |
| .gitignore | file |
| AGENTS.md | file |
| api | dir |
| ARCHITECTURE.md | file |
| bootstrap.py | file |
| BUGS.md | file |
| CHANGELOG.md | file |
| CONTRIBUTING.md | file |
| CONTRIBUTORS.md | file |
| ctl.sh | file |
| DESIGN.md | file |
| docker_init.bash | file |
| docker-compose.three-container.yml | file |
| docker-compose.two-container.yml | file |
| docker-compose.yml | file |
| Dockerfile | file |
| docs | dir |
| eslint.runtime-guard.config.mjs | file |
| LICENSE | file |
| mcp_server.py | file |
| package.json | file |
| pyproject.toml | file |
| pytest.ini | file |
| README.md | file |
| requirements.txt | file |
| ROADMAP.md | file |
| scripts | dir |
| server.py | file |
| SPRINTS.md | file |
| start.ps1 | file |
| start.sh | file |
| static | dir |
| TESTING.md | file |
| tests | dir |
| THEMES.md | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| tests/ | 852 |
| docs/ | 198 |
| static/ | 88 |
| api/ | 54 |
| (root) | 33 |
| .github/ | 6 |
| scripts/ | 6 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 198 | preferred |
| tests/ | 852 | preferred |
| scripts/ | 6 | preferred |
| docs/pr-media/ | 159 | large |
| static/ | 88 | large |
| static/vendor/ | 64 | large |
| static/vendor/katex/ | 62 | large |
| api/ | 54 | large |
| docs/pr-media/2548/ | 25 | large |
| docs/images/ | 10 | large |
| docs/rfcs/ | 9 | large |
| .github/ | 6 | large |
| .github/workflows/ | 5 | large |
| docs/pr-media/2064/ | 5 | large |
| docs/pr-media/2518/ | 4 | large |
| docs/pr-media/offline-banner-warning-theme/ | 4 | large |
| docs/pr-media/uiux-theme-demo-controls/ | 4 | large |
| docs/pr-media/update-summary-category-dedup/ | 4 | large |
| docs/pr-media/1640/ | 3 | large |
| docs/pr-media/1796/ | 3 | large |
| docs/pr-media/1808/ | 3 | large |
| docs/pr-media/2246/ | 3 | large |
| docs/architecture/ | 2 | large |
| docs/pr-assets/ | 2 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `docker-compose.yml`
- `package.json`
- `pyproject.toml`
- `requirements.txt`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | hermes-webui-devtools | lint:runtime |  |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml |  | false | false | true | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/CONTRACTS.md`
- `docs/EXTENSIONS.md`
- `docs/ISSUES.md`
- `docs/UIUX-GUIDE.md`
- `docs/advanced-chat-setup.md`
- `docs/architecture/agent-api-contract.md`
- `docs/architecture/unified-session-db.md`
- `docs/docker.md`
- `docs/images/pr-2458-board-selector-after.png`
- `docs/images/pr-2458-board-selector-before.png`
- `docs/images/pr-2919-clarify-after-desktop.png`
- `docs/images/pr-2919-clarify-before-desktop.png`
- `docs/images/ui-sessions.png`
- `docs/images/ui-workspace.png`
- `docs/images/update-banner-whats-new-after-summary-off.png`
- `docs/images/update-banner-whats-new-after-summary-on.png`
- `docs/images/update-banner-whats-new-after.png`
- `docs/images/update-banner-whats-new-before.png`
- `docs/onboarding-agent-checklist.md`
- `docs/onboarding.md`
- `docs/pr-assets/restore-top-titlebar-after.png`
- `docs/pr-assets/restore-top-titlebar-before.png`
- `docs/pr-media/1257/llm-wiki-status.png`
- `docs/pr-media/1321/update-network-error.png`
- `docs/pr-media/1362/claude-code-onboarding.png`
- `docs/pr-media/1362/codex-oauth-onboarding.png`
- `docs/pr-media/1406/eager-config-app-shell.png`
- `docs/pr-media/1451/raw-pre-render-validation.png`
- `docs/pr-media/1455/logs-tab-mvp.png`
- `docs/pr-media/1456/insights-before.png`
- `docs/pr-media/1456/insights-daily-tokens-models.png`
- `docs/pr-media/1459/dashboard-nav-link.png`
- `docs/pr-media/1640/tps-toggle-off-default.png`
- `docs/pr-media/1640/tps-toggle-on-hot-apply.png`
- `docs/pr-media/1640/tps-toggle-settings.png`
- `docs/pr-media/1688/chat-no-health-bar.png`
- `docs/pr-media/1688/insights-system-health.png`
- `docs/pr-media/1690/scroll-preserved-after-completion.png`
- `docs/pr-media/1698/workspace-double-click-rename.png`
- `docs/pr-media/1699/model-cache-auth-store-refresh.png`
- `docs/pr-media/1700/profile-switch-away-from-running-session.png`
- `docs/pr-media/1715/activity-focus-reload.png`
- `docs/pr-media/1716/active-elapsed-timer.png`
- `docs/pr-media/1725/activity-summary-after.png`
- `docs/pr-media/1725/activity-summary-before.png`
- `docs/pr-media/1765/codex-quota-error-collapsed.png`
- `docs/pr-media/1765/codex-quota-error-expanded.png`
- `docs/pr-media/1771/session-model-fallback.png`
- ... 30 more

### 에이전트 지침 후보

- `AGENTS.md`
- `api/skill_usage.py`
- `docs/pr-media/1880/profile-skills-tab.png`
- `docs/pr-media/2210/after-mcp-tools-paginated.png`
- `docs/pr-media/2210/before-mcp-tools-unbounded.png`
- `docs/pr-media/2250/skill-detail-after.png`
- `docs/pr-media/2250/skill-detail-before.png`
- `docs/pr-media/696/mcp-servers-system-panel.png`
- `docs/pr-media/697/mcp-tools-search-filter.png`
- `docs/pr-media/guard-skill-detail-errors/skill-detail-error-after.png`
- `docs/pr-media/guard-skill-detail-errors/skill-detail-error-before.png`
- `mcp_server.py`
- `tests/test_issue1880_profile_scoped_skills.py`
- `tests/test_issue1968_mcp_profile_discovery.py`
- `tests/test_issue1989_profile_skill_count.py`
- `tests/test_issue2023_hermes_home_skill_modules.py`
- `tests/test_issue2024_env_lock_skill_imports.py`
- `tests/test_issue2305_profile_create_seeds_skills.py`
- `tests/test_issue3066_profile_skill_disabled_state.py`
- `tests/test_issue538_mcp_management.py`
- `tests/test_issue696_mcp_visibility_panel.py`
- `tests/test_issue697_mcp_tool_inventory.py`
- `tests/test_mcp_server.py`
- `tests/test_mcp_tools_list_overflow.py`
- `tests/test_memory_skill_badge.py`
- `tests/test_profile_skills_stats.py`
- `tests/test_skill_detail_error_guard.py`
- `tests/test_skill_detail_markdown_styling.py`
- `tests/test_skill_usage.py`
- `tests/test_skills_category_collapse.py`
- `tests/test_skills_toggle.py`

### 스펙/템플릿/명령/스킬 후보

- `DESIGN.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/__init__.py`
- `tests/_pytest_port.py`
- `tests/_wakeup_helpers.py`
- `tests/browser_smoke.py`
- `tests/conftest.py`
- `tests/manual/repro_wakeup_hang.py`
- `tests/test_1003_appearance_autosave.py`
- `tests/test_1003_preferences_autosave.py`
- `tests/test_1038_pwa_auth_redirect.py`
- `tests/test_1044_mermaid_csp_font.py`
- `tests/test_1045_bfcache_layout_restore.py`
- `tests/test_1058_adaptive_title_refresh.py`
- `tests/test_1059_settings_picker_active_state.py`
- `tests/test_1062_busy_input_modes.py`
- `tests/test_1079_cron_session_project.py`
- `tests/test_1325_user_fenced_code.py`
- `tests/test_1432_newchat_and_1423_profile_input.py`
- `tests/test_1466_bfcache_inflight_reattach.py`
- `tests/test_1466_sidebar_cancel_clarify.py`
- `tests/test_1560_password_env_var_no_op.py`
- `tests/test_1620_paste_text_with_image.py`
- `tests/test_1694_prompt_ownership.py`
- `tests/test_1694_root_saved_running_policy.py`
- `tests/test_1694_terminal_cleanup_ownership.py`
- `tests/test_1695_aiagent_import_error_detail.py`
- `tests/test_1707_workspace_filename_click.py`
- `tests/test_1710_folder_tooltip.py`
- `tests/test_1764_context_menu_essentials.py`
- `tests/test_2111_ios_pwa_bottom_scroll_stutter.py`
- `tests/test_2235_initial_aux_title.py`
- `tests/test_2558_reveal_path_translation.py`
- `tests/test_2735_open_in_vscode.py`
- `tests/test_2791_model_picker_keyboard_nav.py`
- `tests/test_3007_approval_card_collapse.py`
- `tests/test_3230_preserve_manual_session_title.py`
- `tests/test_465_session_branching.py`
- `tests/test_499_tts_playback.py`
- `tests/test_732_gateway_routing_metadata.py`
- `tests/test_745_code_block_newlines.py`
- `tests/test_779_html_preview.py`
- `tests/test_886_ordered_list_numbering.py`
- `tests/test_active_empty_session_sidebar.py`
- `tests/test_agent_context_docs.py`
- `tests/test_agent_health_pid_path_fallback.py`
- `tests/test_agent_health_remote.py`
- `tests/test_agent_max_turns_parity.py`
- `tests/test_agent_source_dependency_audit.py`
- `tests/test_api_timeout.py`
- `tests/test_app_titlebar_restore.py`
- `tests/test_approval_card_layering.py`
- `tests/test_approval_queue.py`
- `tests/test_approval_sse.py`
- `tests/test_approval_unblock.py`
- `tests/test_attention_session_events.py`
- `tests/test_auth.py`
- `tests/test_auth_password_hash_cache.py`
- `tests/test_auth_session_persistence.py`
- `tests/test_auth_sessions.py`
- `tests/test_auto_compression_card.py`
- `tests/test_auto_compression_terminal_failure.py`
- `tests/test_auxiliary_models_settings.py`
- `tests/test_background_tasks.py`
- `tests/test_batch_fixes.py`
- `tests/test_bg_task_complete_ab_coexistence.py`
- `tests/test_bg_task_complete_focus_drop.py`
- `tests/test_bg_task_complete_loadsession_stream_restart.py`
- `tests/test_bg_task_complete_ring_buffer.py`
- `tests/test_bg_task_complete_throttle.py`
- `tests/test_bg_task_complete_wakeup.py`
- `tests/test_blockquote_rendering.py`
- `tests/test_bootstrap_discover_agent.py`
- `tests/test_bootstrap_dotenv.py`
- `tests/test_bootstrap_foreground.py`
- `tests/test_bootstrap_python_selection.py`
- `tests/test_broken_pipe_cascade.py`
- `tests/test_bugbatch_apr2026.py`
- `tests/test_bugfix_sweep.py`
- `tests/test_byok_model_dropdown.py`
- `tests/test_byte_range_parser.py`
- `tests/test_cancel_interrupt.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/browser-smoke.yml`
- `.github/workflows/docker-smoke.yml`
- `.github/workflows/native-windows-startup.yml`
- `.github/workflows/release.yml`
- `.github/workflows/tests.yml`
- `Dockerfile`
- `docker-compose.three-container.yml`
- `docker-compose.two-container.yml`
- `docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 914 |
| .png | 170 |
| .md | 38 |
| .ttf | 20 |
| .woff | 20 |
| .woff2 | 20 |
| .js | 17 |
| .yml | 9 |
| .json | 5 |
| .html | 3 |
| .sh | 3 |
| .css | 2 |
| .example | 2 |
| .ps1 | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `docs/pr-media/ 내부 책임 분리`
- `static/ 내부 책임 분리`
- `DESIGN.md 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `package.json 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `requirements.txt 실행 스크립트와 패키지 경계`

