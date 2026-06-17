# xuiltul/animaworks 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/xuiltul__animaworks |
| remote | https://github.com/xuiltul/animaworks |
| HEAD | c7427cb (2026-06-16) fix: sync Korean reference templates with CI expectations |
| branch | main |
| groups | llm-wiki-100 |
| files | 2787 |
| dirs | 507 |
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
- 주요 heading: `AnimaWorks — Organization-as-Code`, `How It Compares`, `:rocket: Try It Now — Docker Demo`, `Quick Start`, `Install uv (skip if already installed)`, `Clone and install`, `Start`, `What You Can Do`, `Dashboard`, `Build an organization and delegate`, `Memory system`, `Multi-model support`, `Auto-generated avatars`, `Why AnimaWorks?`, `Server`, `Initialization`, `Anima management`, `Communication`

> AnimaWorks — Organization as Code No one can do anything alone. So I built an organization. A framework that treats AI agents not as one off “tools,” but as team members who keep working with persistent memory. Each Anima has a name, role, personality, memory, and schedule; they coordinate by message, make decisions, and ask humans when confirmation is needed. Humans can talk to a leader or responsible member, while task breakdown, delegation, progress checks, memory updates, and daily or weekly reflection stay inside the same organization. <p align="center" <img src="docs/images/workspace dashboard.gif" alt="AnimaWorks Workspace — real time org tree with live activity feeds" width="720" <br <em Workspace dashboard each Anima’s role, status, and recent actions are visible in real time.</em </p <p align="center" <img src="docs/images/workspace demo.gif" alt="AnimaWorks 3D Workspace — agen

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude | dir |
| .cursorrules | file |
| .dockerignore | file |
| .env.example | file |
| .git-blame-ignore-revs | file |
| .github | dir |
| .gitignore | file |
| .mailmap | file |
| .python-version | file |
| .report-runtime-errors-20260515.md | file |
| assets | dir |
| benchmarks | dir |
| CHANGELOG.md | file |
| cli | dir |
| CONTRIBUTING.md | file |
| core | dir |
| demo | dir |
| deploy | dir |
| docker-compose.neo4j.yml | file |
| docker-compose.yml | file |
| Dockerfile | file |
| docs | dir |
| LICENSE | file |
| main.py | file |
| pyproject.toml | file |
| README_ja.md | file |
| README_ko.md | file |
| README_zh.md | file |
| README.md | file |
| scripts | dir |
| server | dir |
| swe | dir |
| templates | dir |
| tests | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| tests/ | 978 |
| templates/ | 767 |
| core/ | 425 |
| server/ | 222 |
| demo/ | 168 |
| docs/ | 62 |
| scripts/ | 49 |
| assets/ | 30 |
| cli/ | 30 |
| benchmarks/ | 21 |
| (root) | 20 |
| swe/ | 10 |
| .claude/ | 2 |
| .github/ | 2 |
| deploy/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| core/ | 425 | preferred |
| cli/ | 30 | preferred |
| server/ | 222 | preferred |
| docs/ | 62 | preferred |
| tests/ | 978 | preferred |
| templates/ | 767 | preferred |
| scripts/ | 49 | preferred |
| tests/unit/ | 707 | large |
| tests/unit/core/ | 374 | large |
| templates/en/ | 254 | large |
| templates/ja/ | 254 | large |
| templates/ko/ | 250 | large |
| tests/e2e/ | 212 | large |
| server/static/ | 170 | large |
| demo/ | 168 | large |
| core/memory/ | 124 | large |
| templates/en/common_knowledge/ | 112 | large |
| templates/ja/common_knowledge/ | 112 | large |
| templates/ko/common_knowledge/ | 110 | large |
| demo/presets/ | 88 | large |
| tests/unit/server/ | 75 | large |
| demo/examples/ | 70 | large |
| templates/en/prompts/ | 63 | large |
| templates/ja/prompts/ | 63 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `demo/Dockerfile`
- `demo/docker-compose.yml`
- `docker-compose.yml`
- `pyproject.toml`
- `swe/Dockerfile`
- `swe/docker-compose.yml`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | animaworks | false | false | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `benchmarks/locomo/README.md`
- `demo/README.md`
- `docs/README.ja.md`
- `docs/README.md`
- `docs/api-reference.ja.md`
- `docs/api-reference.md`
- `docs/brain-mapping.ja.md`
- `docs/brain-mapping.md`
- `docs/cli-reference.ja.md`
- `docs/cli-reference.md`
- `docs/features.ja.md`
- `docs/features.md`
- `docs/gpu-operations.md`
- `docs/images/asset-management.png`
- `docs/images/chat-memory.png`
- `docs/images/dashboard.png`
- `docs/images/workspace-dashboard.gif`
- `docs/images/workspace-demo.gif`
- `docs/implemented/20260304_dk-removal-phase4-knowledge-injection-cleanup_implemented-20260605.md`
- `docs/implemented/20260605_review_dk-removal-phase4-knowledge-injection-cleanup_approved-20260605.md`
- `docs/implemented/20260611_consolidation_interrupt_root_cause-implemented-20260611.md`
- `docs/implemented/20260611_fact_extraction_rollout_report-implemented-20260611.md`
- `docs/implemented/20260611_review_issue220_operational_health-implemented-20260611.md`
- `docs/implemented/20260611_vector_worker_corruption_root_cause-implemented-20260611.md`
- `docs/memory.ja.md`
- `docs/memory.md`
- `docs/paper/20260311_advanced-agent-benchmark.en.md`
- `docs/paper/20260311_advanced-agent-benchmark.ja.md`
- `docs/paper/context-window-illusion.ja.md`
- `docs/paper/context-window-illusion.md`
- `docs/release/v0.5.ja.md`
- `docs/release/v0.5.md`
- `docs/reports/20260311_hina-4model-benchmark.md`
- `docs/security.ja.md`
- `docs/security.md`
- `docs/slack-socket-mode-setup.ja.md`
- `docs/slack-socket-mode-setup.md`
- `docs/spec.ja.md`
- `docs/spec.md`
- `docs/specs/20260214_priming-layer_design.md`
- `docs/specs/20260215_memory-write-security-20260216.md`
- `docs/specs/20260218_activity-log-spec-compliance-fixes-implemented-20260218.md`
- `docs/specs/20260218_consolidation-validation-pipeline-20260218.md`
- `docs/specs/20260218_episode-dedup-state-autoupdate-resolution-propagation.md`
- `docs/specs/20260218_knowledge-contradiction-detection-resolution-20260218.md`
- `docs/specs/20260218_memory-system-enhancement-checklist-20260218.md`
- `docs/specs/20260218_priming-format-redesign_implemented-20260218.md`
- `docs/specs/20260218_procedural-memory-auto-distillation-20260218.md`
- ... 19 more

### 에이전트 지침 후보

- `.claude/launch.json`
- `.claude/settings.json`
- `cli/commands/skills.py`
- `core/mcp/__init__.py`
- `core/mcp/server.py`
- `core/memory/skill_metadata.py`
- `core/migrations/legacy_flat_skills.py`
- `core/skills/__init__.py`
- `core/skills/activation.py`
- `core/skills/activation_render.py`
- `core/skills/activation_state.py`
- `core/skills/autolearn.py`
- `core/skills/autolearn_lifecycle.py`
- `core/skills/context.py`
- `core/skills/cron_context.py`
- `core/skills/curator.py`
- `core/skills/guard.py`
- `core/skills/hub.py`
- `core/skills/hub_storage.py`
- `core/skills/index.py`
- `core/skills/loader.py`
- `core/skills/migration/__init__.py`
- `core/skills/migration/_common.py`
- `core/skills/migration/hermes.py`
- `core/skills/migration/hermes_format.py`
- `core/skills/migration/openclaw.py`
- `core/skills/migration/report.py`
- `core/skills/models.py`
- `core/skills/pointer_rewriter.py`
- `core/skills/policy.py`
- `core/skills/probation_promotion.py`
- `core/skills/promotion.py`
- `core/skills/promotion_approval.py`
- `core/skills/promotion_utils.py`
- `core/skills/reference_rewriter.py`
- `core/skills/router.py`
- `core/skills/router_metadata.py`
- `core/skills/sources/__init__.py`
- `core/skills/sources/github.py`
- `core/skills/sources/local.py`
- `core/skills/sources/url.py`
- `core/skills/trust.py`
- `core/skills/trust_gate.py`
- `core/skills/usage.py`
- `core/tooling/handler_skills.py`
- `core/tooling/schemas/skill.py`
- `core/tooling/skill_creator.py`
- `core/tooling/skill_promotion_tool.py`
- `scripts/evaluate_skill_router.py`
- `scripts/lint_skill.py`
- `server/routes/skills.py`
- `templates/en/anima_templates/_blank/skills/newstaff/SKILL.md`
- `templates/en/anima_templates/_blank/skills/worker_management/SKILL.md`
- `templates/en/common_skills/agent-browser/SKILL.md`
- `templates/en/common_skills/animaworks-guide/SKILL.md`
- `templates/en/common_skills/aws-collector-tool/SKILL.md`
- `templates/en/common_skills/chatwork-tool/SKILL.md`
- `templates/en/common_skills/cron-management/SKILL.md`
- `templates/en/common_skills/discord-tool/SKILL.md`
- `templates/en/common_skills/github-tool/SKILL.md`
- `templates/en/common_skills/gmail-tool/SKILL.md`
- `templates/en/common_skills/google-calendar-tool/SKILL.md`
- `templates/en/common_skills/google-tasks-tool/SKILL.md`
- `templates/en/common_skills/image-gen-tool/SKILL.md`
- `templates/en/common_skills/image-posting/SKILL.md`
- `templates/en/common_skills/local-llm-tool/SKILL.md`
- `templates/en/common_skills/machine-tool/SKILL.md`
- `templates/en/common_skills/notion-tool/SKILL.md`
- `templates/en/common_skills/skill-creator/SKILL.md`
- `templates/en/common_skills/skill-creator/references/description_guide.md`
- `templates/en/common_skills/skill-creator/scripts/lint_skill.py`
- `templates/en/common_skills/skill-creator/templates/skill_template.md`
- `templates/en/common_skills/slack-tool/SKILL.md`
- `templates/en/common_skills/subagent-cli/SKILL.md`
- `templates/en/common_skills/subordinate-management/SKILL.md`
- `templates/en/common_skills/tool-creator/SKILL.md`
- `templates/en/common_skills/transcribe-tool/SKILL.md`
- `templates/en/common_skills/web-search-tool/SKILL.md`
- `templates/en/common_skills/workspace-manager/SKILL.md`
- `templates/en/common_skills/x-search-tool/SKILL.md`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `cli/commands/__init__.py`
- `cli/commands/anima.py`
- `cli/commands/anima_communities.py`
- `cli/commands/anima_mgmt.py`
- `cli/commands/board.py`
- `cli/commands/cost_cmd.py`
- `cli/commands/import_cmd.py`
- `cli/commands/index_cmd.py`
- `cli/commands/init_cmd.py`
- `cli/commands/internal_cmd.py`
- `cli/commands/logs.py`
- `cli/commands/memory_cmd.py`
- `cli/commands/memory_ops.py`
- `cli/commands/messaging.py`
- `cli/commands/migrate_cmd.py`
- `cli/commands/models_cmd.py`
- `cli/commands/optimize_assets.py`
- `cli/commands/profile.py`
- `cli/commands/remake_cmd.py`
- `cli/commands/repair_rag_cmd.py`
- `cli/commands/server.py`
- `cli/commands/skills.py`
- `cli/commands/supervisor_cmd.py`
- `cli/commands/task_cmd.py`
- `cli/commands/tmp_cmd.py`
- `cli/commands/vault_cmd.py`
- `core/skills/__init__.py`
- `core/skills/activation.py`
- `core/skills/activation_render.py`
- `core/skills/activation_state.py`
- `core/skills/autolearn.py`
- `core/skills/autolearn_lifecycle.py`
- `core/skills/context.py`
- `core/skills/cron_context.py`
- `core/skills/curator.py`
- `core/skills/guard.py`
- `core/skills/hub.py`
- `core/skills/hub_storage.py`
- `core/skills/index.py`
- `core/skills/loader.py`
- `core/skills/migration/__init__.py`
- `core/skills/migration/_common.py`
- `core/skills/migration/hermes.py`
- `core/skills/migration/hermes_format.py`
- `core/skills/migration/openclaw.py`
- `core/skills/migration/report.py`
- `core/skills/models.py`
- `core/skills/pointer_rewriter.py`
- `core/skills/policy.py`
- `core/skills/probation_promotion.py`
- `core/skills/promotion.py`
- `core/skills/promotion_approval.py`
- `core/skills/promotion_utils.py`
- `core/skills/reference_rewriter.py`
- `core/skills/router.py`
- `core/skills/router_metadata.py`
- `core/skills/sources/__init__.py`
- `core/skills/sources/github.py`
- `core/skills/sources/local.py`
- `core/skills/sources/url.py`
- `core/skills/trust.py`
- `core/skills/trust_gate.py`
- `core/skills/usage.py`
- `demo/examples/en/kai/knowledge/tenant-isolation-design.md`
- `demo/examples/ja/sora/knowledge/tenant-isolation-design.md`
- `docs/specs/20260214_priming-layer_design.md`
- `docs/specs/20260215_memory-write-security-20260216.md`
- `docs/specs/20260218_activity-log-spec-compliance-fixes-implemented-20260218.md`
- `docs/specs/20260218_consolidation-validation-pipeline-20260218.md`
- `docs/specs/20260218_episode-dedup-state-autoupdate-resolution-propagation.md`
- `docs/specs/20260218_knowledge-contradiction-detection-resolution-20260218.md`
- `docs/specs/20260218_memory-system-enhancement-checklist-20260218.md`
- `docs/specs/20260218_priming-format-redesign_implemented-20260218.md`
- `docs/specs/20260218_procedural-memory-auto-distillation-20260218.md`
- `docs/specs/20260218_procedural-memory-foundation-20260218.md`
- `docs/specs/20260218_procedural-memory-reconsolidation-20260218.md`
- `docs/specs/20260218_procedural-memory-utility-forgetting-20260218.md`
- `docs/specs/20260218_streaming-journal-implemented-20260218.md`
- `docs/specs/20260218_unified-activity-log-implemented-20260218.md`
- `docs/specs/20260228_provenance-1-foundation.md`
- `docs/specs/20260228_provenance-2-input-boundary.md`
- `docs/specs/20260228_provenance-3-propagation.md`
- `docs/specs/20260228_provenance-4-rag-provenance.md`
- `docs/specs/20260228_provenance-5-mode-s-trust.md`
- `docs/specs/20260228_security-command-injection-fix.md`
- `docs/specs/20260228_security-path-traversal-fix.md`
- `docs/specs/20260307_generic-notion-tool_implemented-20260307.md`
- `docs/specs/windows-native-codex-fork-plan.md`
- `templates/en/anima_templates/_blank/skills/newstaff/SKILL.md`
- `templates/en/anima_templates/_blank/skills/worker_management/SKILL.md`
- `templates/en/common_knowledge/operations/background-tasks.md`
- `templates/en/common_skills/skill-creator/templates/skill_template.md`
- `templates/ja/anima_templates/_blank/skills/newstaff/SKILL.md`
- `templates/ja/anima_templates/_blank/skills/worker_management/SKILL.md`
- `templates/ja/common_knowledge/operations/background-tasks.md`
- `templates/ja/common_skills/skill-creator/templates/skill_template.md`
- `templates/ko/anima_templates/_blank/skills/newstaff/SKILL.md`
- `templates/ko/anima_templates/_blank/skills/worker_management/SKILL.md`
- `templates/ko/common_knowledge/operations/background-tasks.md`
- `templates/ko/common_skills/skill-creator/templates/skill_template.md`
- ... 11 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/__init__.py`
- `tests/conftest.py`
- `tests/e2e/__init__.py`
- `tests/e2e/conftest.py`
- `tests/e2e/core/__init__.py`
- `tests/e2e/core/test_action_memory_gate_e2e.py`
- `tests/e2e/core/test_activity_log_e2e.py`
- `tests/e2e/core/test_background_model_override_e2e.py`
- `tests/e2e/core/test_behavior_rules_action_sync_e2e.py`
- `tests/e2e/core/test_heartbeat_dialogue_e2e.py`
- `tests/e2e/core/test_heartbeat_message_episode_e2e.py`
- `tests/e2e/core/test_heartbeat_reflection_e2e.py`
- `tests/e2e/core/test_legacy_atomic_facts_e2e.py`
- `tests/e2e/core/test_legacy_entity_aware_graph_e2e.py`
- `tests/e2e/core/test_legacy_entity_index_boost_e2e.py`
- `tests/e2e/core/test_legacy_fact_invalidation_valid_until_e2e.py`
- `tests/e2e/core/test_legacy_query_expansion_access_boost_e2e.py`
- `tests/e2e/core/test_legacy_unified_memory_search_e2e.py`
- `tests/e2e/core/test_memory_decomposition_e2e.py`
- `tests/e2e/core/test_messaging_unification_e2e.py`
- `tests/e2e/core/test_priming_channel_c_e2e.py`
- `tests/e2e/core/test_priming_intent_budget_e2e.py`
- `tests/e2e/core/test_spec_compliance_e2e.py`
- `tests/e2e/test_a1_hook_tool_logging_e2e.py`
- `tests/e2e/test_a1_messaging.py`
- `tests/e2e/test_a1_output_guard_e2e.py`
- `tests/e2e/test_a2_enhancement.py`
- `tests/e2e/test_activity_grouped_api_e2e.py`
- `tests/e2e/test_activity_log_degradation_e2e.py`
- `tests/e2e/test_activity_logger_consolidation_e2e.py`
- `tests/e2e/test_activity_timeline_e2e.py`
- `tests/e2e/test_activity_timeline_sort_e2e.py`
- `tests/e2e/test_adaptive_thinking_e2e.py`
- `tests/e2e/test_agent_lane_session_isolation_e2e.py`
- `tests/e2e/test_agent_tool_intercept_e2e.py`
- `tests/e2e/test_anima_lifecycle_e2e.py`
- `tests/e2e/test_anima_restart_stop_e2e.py`
- `tests/e2e/test_api_scaling_e2e.py`
- `tests/e2e/test_asset_reconciliation_e2e.py`
- `tests/e2e/test_audit_subordinate_e2e.py`
- `tests/e2e/test_autonomous_skill_lifecycle_e2e.py`
- `tests/e2e/test_background_tasks_e2e.py`
- `tests/e2e/test_bg_tool_name_match_e2e.py`
- `tests/e2e/test_board_dm_display_fixes_e2e.py`
- `tests/e2e/test_board_mention_fanout_e2e.py`
- `tests/e2e/test_board_taskboard_boundary_e2e.py`
- `tests/e2e/test_board_webui_e2e.py`
- `tests/e2e/test_bootstrap_e2e.py`
- `tests/e2e/test_bootstrap_flow.py`
- `tests/e2e/test_bootstrap_reconciliation_e2e.py`
- `tests/e2e/test_bootstrap_ui.py`
- `tests/e2e/test_boundary_labeling_e2e.py`
- `tests/e2e/test_bubble_actions_e2e.py`
- `tests/e2e/test_business_theme_e2e.py`
- `tests/e2e/test_bustup_expression_e2e.py`
- `tests/e2e/test_character_scale_and_hierarchy_e2e.py`
- `tests/e2e/test_chat_ui_state_e2e.py`
- `tests/e2e/test_ci_autofix_local_e2e.py`
- `tests/e2e/test_codex_mode_e2e.py`
- `tests/e2e/test_common_knowledge_rag.py`
- `tests/e2e/test_consolidate_model_names_e2e.py`
- `tests/e2e/test_consolidate_model_names_unit.py`
- `tests/e2e/test_consolidation_episode_glob_e2e.py`
- `tests/e2e/test_context_autocompact_e2e.py`
- `tests/e2e/test_context_over_compression_e2e.py`
- `tests/e2e/test_conversation_data_loss.py`
- `tests/e2e/test_conversation_history_api_e2e.py`
- `tests/e2e/test_conversation_memory.py`
- `tests/e2e/test_conversation_turn_limit_e2e.py`
- `tests/e2e/test_create_anima_e2e.py`
- `tests/e2e/test_create_anima_supervisor_e2e.py`
- `tests/e2e/test_credential_cascade_e2e.py`
- `tests/e2e/test_custom_exception_hierarchy_e2e.py`
- `tests/e2e/test_dashboard_api_e2e.py`
- `tests/e2e/test_dashboard_tool_use_filter_e2e.py`
- `tests/e2e/test_distilled_knowledge_injection_e2e.py`
- `tests/e2e/test_dm_flood_prevention_e2e.py`
- `tests/e2e/test_dm_visibility_e2e.py`
- `tests/e2e/test_embed_centralization_e2e.py`
- `tests/e2e/test_episode_compress_and_cleanup_e2e.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `.github/workflows/publish.yml`
- `Dockerfile`
- `demo/Dockerfile`
- `demo/docker-compose.dev.yml`
- `demo/docker-compose.yml`
- `docker-compose.neo4j.yml`
- `docker-compose.yml`
- `swe/Dockerfile`
- `swe/docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 1528 |
| .md | 886 |
| .js | 123 |
| .png | 75 |
| .json | 70 |
| .jsonl | 24 |
| .css | 21 |
| .txt | 12 |
| .sh | 8 |
| .yml | 7 |
| .html | 4 |
| .csv | 3 |
| .pdf | 3 |
| dockerfile | 3 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `core/ 내부 책임 분리`
- `cli/ 내부 책임 분리`
- `server/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `cli/commands/__init__.py 스펙/명령 의미`
- `cli/commands/anima.py 스펙/명령 의미`
- `cli/commands/anima_communities.py 스펙/명령 의미`
- `cli/commands/anima_mgmt.py 스펙/명령 의미`
- `cli/commands/board.py 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `demo/Dockerfile 실행 스크립트와 패키지 경계`
- `demo/docker-compose.yml 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`

