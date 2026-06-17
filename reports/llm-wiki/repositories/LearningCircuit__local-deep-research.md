# LearningCircuit/local-deep-research 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/LearningCircuit__local-deep-research |
| remote | https://github.com/LearningCircuit/local-deep-research |
| HEAD | c964494 (2026-06-18) fix(memory): cap persisted log message size + share /history/logs cap constants (#4240) |
| branch | main |
| groups | llm-wiki-100 |
| files | 3020 |
| dirs | 348 |
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
- 주요 heading: `Local Deep Research`, `🚀 What is Local Deep Research?`, `⚡ Quick Start`, `Step 1: Pull and run Ollama`, `Step 2: Pull and run SearXNG for optimal search results`, `Step 3: Pull and run Local Deep Research`, `🏗️ How It Works`, `Research`, `Build Your Knowledge Base`, `🛡️ Security`, `1. Verify image signature`, `2. Verify SBOM attestation (SPDX JSON) for YOUR platform`, `SBOM attestations are stored per-architecture (amd64, arm64) on the`, `per-arch image digest, not on the multi-arch manifest list. Resolve to`, `your platform's digest first.`, `🔒 Privacy & Data`, `📊 Benchmarks`, `Benchmark Results`

> Local Deep Research <div align="center" <! Well known security scanners that visitors will recognize AI powered research assistant for deep, agentic research Performs deep, agentic research using multiple LLMs and search engines with proper citations 🧪 First open source project — fully local on a single RTX 3090 (Qwen3.6 27B) — to report ~95% SimpleQA (n=500) and 77% xbench DeepSearch (n=100) on local hardware. See the r/LocalLLaMA announcement and the benchmark dataset. <a href="https //www.youtube.com/watch?v=pfxgLX MxMY&t=1999" ▶️ Watch Review by The Art Of The Terminal </a </div 🚀 What is Local Deep Research? AI research assistant you control. Run locally for privacy, use any LLM and build your own searchable knowledge base. You own your data and see exactly how it works. ⚡ Quick Start CPU requirement (x86 64) an AVX capable CPU — Intel Sandy Bridge / AMD Bulldozer (2011) or newer.

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .file-whitelist.txt | file |
| .github | dir |
| .gitignore | file |
| .gitleaks.toml | file |
| .gitleaksignore | file |
| .grype.yaml | file |
| .hadolint.yaml | file |
| .nvmrc | file |
| .pre-commit-config.yaml | file |
| .pre-commit-hooks | dir |
| .safety-policy.yml | file |
| .semgrep | dir |
| .trivyignore | file |
| .yamllint.yaml | file |
| .zap | dir |
| bearer.yml | file |
| changelog.d | dir |
| community_benchmark_results | dir |
| CONTRIBUTING.md | file |
| cookiecutter-docker | dir |
| docker-compose.gpu.override.yml | file |
| docker-compose.unraid.yml | file |
| docker-compose.yml | file |
| Dockerfile | file |
| docs | dir |
| eslint.config.js | file |
| examples | dir |
| LICENSE | file |
| lighthouserc.json | file |
| MANIFEST.in | file |
| package-lock.json | file |
| package.json | file |
| pdm.lock | file |
| playwright.config.js | file |
| pyproject.toml | file |
| README.md | file |
| scripts | dir |
| SECURITY.md | file |
| src | dir |
| tests | dir |
| unraid-templates | dir |
| vite.config.js | file |
| vulture_whitelist.py | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| tests/ | 1837 |
| src/ | 750 |
| changelog.d/ | 95 |
| .github/ | 89 |
| docs/ | 74 |
| examples/ | 65 |
| .pre-commit-hooks/ | 48 |
| (root) | 30 |
| scripts/ | 19 |
| community_benchmark_results/ | 4 |
| cookiecutter-docker/ | 4 |
| .semgrep/ | 3 |
| .zap/ | 1 |
| unraid-templates/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 750 | preferred |
| docs/ | 74 | preferred |
| examples/ | 65 | preferred |
| tests/ | 1837 | preferred |
| scripts/ | 19 | preferred |
| src/local_deep_research/ | 750 | large |
| src/local_deep_research/web/ | 225 | large |
| tests/ui_tests/ | 221 | large |
| tests/web/ | 153 | large |
| tests/news/ | 135 | large |
| tests/security/ | 123 | large |
| tests/advanced_search_system/ | 108 | large |
| changelog.d/ | 95 | large |
| tests/research_library/ | 91 | large |
| .github/ | 89 | large |
| tests/web_search_engines/ | 77 | large |
| tests/database/ | 74 | large |
| tests/benchmarks/ | 71 | large |
| .github/workflows/ | 67 | large |
| src/local_deep_research/advanced_search_system/ | 59 | large |
| src/local_deep_research/database/ | 59 | large |
| tests/utilities/ | 51 | large |
| tests/web_search_engines/engines/ | 51 | large |
| .pre-commit-hooks/ | 48 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `docker-compose.yml`
- `examples/elasticsearch/docker-compose.yml`
- `package.json`
- `pyproject.toml`
- `tests/accessibility_tests/package.json`
- `tests/api_tests_with_login/package.json`
- `tests/infrastructure_tests/package.json`
- `tests/package.json`
- `tests/puppeteer/package.json`
- `tests/ui_tests/package.json`
- `tests/ui_tests/playwright/package.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | local-deep-research-web | dev, build, preview, update, audit, audit-fix, security-check, test, test:watch, test:coverage | @fortawesome/fontawesome-free, bootstrap, bootstrap-icons, chart.js, chartjs-adapter-date-fns, chartjs-plugin-annotation, date-fns, dompurify, highlight.js, html2canvas, jspdf, katex, marked, marked-katex-extension |
| tests/accessibility_tests/package.json | ldr-accessibility-tests |  | @axe-core/playwright, @lhci/cli, @playwright/test |
| tests/api_tests_with_login/package.json | ldr-api-tests-with-login | test, test:report, test:settings, test:history, test:models, test:search, test:research, test:auth, test:metrics, test:benchmark, test:queue, test:apiv1, test:debug, test:watch |  |
| tests/infrastructure_tests/package.json | infrastructure-tests | test, test:watch, test:coverage |  |
| tests/package.json |  | test:api-key, test:api-key:debug | chai, mocha, puppeteer |
| tests/puppeteer/package.json | ldr-puppeteer-tests | test, test:all, test:ci, test:openai, test:ssrf, test:ssrf:watch, test:ui, test:ui:watch, test:deep, test:deep:watch, test:headful, test:debug | chai, mocha, puppeteer |
| tests/ui_tests/package.json | ldr-ui-tests | test, test:auth, test:pages, test:settings, test:navigation, test:navigation:search, test:workflow, test:workflow:headless, test:simple, test:research, test:research:api, test:research:diagnosis, test:research:simple, test:research:verify, test:research:fixed, test:research:working | puppeteer |
| tests/ui_tests/playwright/package.json | ldr-playwright-tests | test, test:mobile, test:tablet, test:desktop, test:visual, test:headed, test:debug, test:ui, report, install-browsers |  |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | local-deep-research | false | false | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.github/workflows/README.md`
- `.semgrep/rules/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `changelog.d/README.md`
- `community_benchmark_results/README.md`
- `docs/AI_Code_Reviewer_Setup.md`
- `docs/BENCHMARKING.md`
- `docs/CI_CD_INFRASTRUCTURE.md`
- `docs/CONFIGURATION.md`
- `docs/CUSTOM_LLM_INTEGRATION.md`
- `docs/FRONTEND_BUILD_SYSTEM.md`
- `docs/LANGCHAIN_RETRIEVER_INTEGRATION.md`
- `docs/MIGRATION_GUIDE_v1.md`
- `docs/NOTIFICATIONS.md`
- `docs/NOTIFICATION_FLOW.md`
- `docs/RELEASE_GUIDE.md`
- `docs/SQLCIPHER_INSTALL.md`
- `docs/SearXNG-Setup.md`
- `docs/analytics-dashboard.md`
- `docs/api-quickstart.md`
- `docs/architecture.md`
- `docs/architecture/DATABASE_SCHEMA.md`
- `docs/architecture/OVERVIEW.md`
- `docs/architecture/SEMANTIC_SEARCH.md`
- `docs/ci/workflow-status.md`
- `docs/cli-tools.md`
- `docs/decisions/0001-remove-detect-secrets.md`
- `docs/decisions/0002-pre-commit-hook-reviews.md`
- `docs/decisions/0003-reject-raise-without-from-hook.md`
- `docs/decisions/0004-nullpool-for-sqlcipher.md`
- `docs/deployment/unraid.md`
- `docs/developing.md`
- `docs/developing/EXTENDING.md`
- `docs/developing/resource-cleanup.md`
- `docs/docker-compose-guide.md`
- `docs/egress-modes.md`
- `docs/elasticsearch_search_engine.md`
- `docs/elasticsearch_search_engine.zh.md`
- `docs/enhancements/metrics/dashboard-improvements.md`
- `docs/enhancements/metrics/enhanced-token-tracking.md`
- `docs/env_configuration.md`
- `docs/faq.md`
- `docs/features.md`
- `docs/images/Local Search.png`
- `docs/images/local_search_embedding_model_type.png`
- `docs/images/local_search_paths.png`
- `docs/install-pip.md`
- `docs/installation.md`
- `docs/journal-quality.md`
- ... 30 more

### 에이전트 지침 후보

- `.github/workflows/mcp-tests.yml`
- `changelog.d/+egress-mcp-tool-filter.security.md`
- `docs/mcp-server.md`
- `scripts/mcp_smoke_test.sh`
- `src/local_deep_research/advanced_search_system/strategies/mcp_strategy.py`
- `src/local_deep_research/mcp/__init__.py`
- `src/local_deep_research/mcp/__main__.py`
- `src/local_deep_research/mcp/client.py`
- `src/local_deep_research/mcp/server.py`
- `tests/advanced_search_system/strategies/test_mcp_strategy_pure_logic.py`
- `tests/content_fetcher/test_mcp_integration.py`
- `tests/mcp/__init__.py`
- `tests/mcp/conftest.py`
- `tests/mcp/test_additional_coverage.py`
- `tests/mcp/test_client_coverage.py`
- `tests/mcp/test_edge_cases.py`
- `tests/mcp/test_egress_audit_net.py`
- `tests/mcp/test_integration.py`
- `tests/mcp/test_mcp_call_tool_parsing.py`
- `tests/mcp/test_mcp_client.py`
- `tests/mcp/test_mcp_client_gaps.py`
- `tests/mcp/test_mcp_client_server_integration.py`
- `tests/mcp/test_mcp_protocol.py`
- `tests/mcp/test_mcp_strategy.py`
- `tests/mcp/test_server.py`
- `tests/mcp/test_server_coverage.py`
- `tests/mcp/test_server_validators.py`
- `tests/mcp/test_validation.py`
- `tests/performance/mcp/__init__.py`
- `tests/performance/mcp/echo_server.py`
- `tests/performance/mcp/test_concurrent_mcp_calls.py`
- `tests/performance/mcp/test_mcp_client_server_live.py`
- `tests/security/test_egress_mcp_scope_gating.py`

### 스펙/템플릿/명령/스킬 후보

- `src/local_deep_research/notifications/templates/api_quota_warning.jinja2`
- `src/local_deep_research/notifications/templates/auth_issue.jinja2`
- `src/local_deep_research/notifications/templates/research_completed.jinja2`
- `src/local_deep_research/notifications/templates/research_failed.jinja2`
- `src/local_deep_research/notifications/templates/research_queued.jinja2`
- `src/local_deep_research/notifications/templates/subscription_error.jinja2`
- `src/local_deep_research/notifications/templates/subscription_update.jinja2`
- `src/local_deep_research/notifications/templates/test.jinja2`
- `src/local_deep_research/web/static/templates/followup_modal.html`
- `src/local_deep_research/web/templates/auth/change_password.html`
- `src/local_deep_research/web/templates/auth/login.html`
- `src/local_deep_research/web/templates/auth/register.html`
- `src/local_deep_research/web/templates/base.html`
- `src/local_deep_research/web/templates/components/custom_dropdown.html`
- `src/local_deep_research/web/templates/components/delete_confirmation_modal.html`
- `src/local_deep_research/web/templates/components/followup_modal.html`
- `src/local_deep_research/web/templates/components/help_macros.html`
- `src/local_deep_research/web/templates/components/log_panel.html`
- `src/local_deep_research/web/templates/components/settings_form.html`
- `src/local_deep_research/web/templates/components/sidebar.html`
- `src/local_deep_research/web/templates/components/storage_mode_modal.html`
- `src/local_deep_research/web/templates/pages/benchmark.html`
- `src/local_deep_research/web/templates/pages/benchmark_results.html`
- `src/local_deep_research/web/templates/pages/benchmark_simple.html`
- `src/local_deep_research/web/templates/pages/chat.html`
- `src/local_deep_research/web/templates/pages/collection_create.html`
- `src/local_deep_research/web/templates/pages/collection_details.html`
- `src/local_deep_research/web/templates/pages/collection_upload.html`
- `src/local_deep_research/web/templates/pages/collections.html`
- `src/local_deep_research/web/templates/pages/context_overflow.html`
- `src/local_deep_research/web/templates/pages/cost_analytics.html`
- `src/local_deep_research/web/templates/pages/details.html`
- `src/local_deep_research/web/templates/pages/document_chunks.html`
- `src/local_deep_research/web/templates/pages/document_details.html`
- `src/local_deep_research/web/templates/pages/document_text.html`
- `src/local_deep_research/web/templates/pages/download_manager.html`
- `src/local_deep_research/web/templates/pages/embedding_settings.html`
- `src/local_deep_research/web/templates/pages/history.html`
- `src/local_deep_research/web/templates/pages/journal_quality.html`
- `src/local_deep_research/web/templates/pages/library.html`
- `src/local_deep_research/web/templates/pages/link_analytics.html`
- `src/local_deep_research/web/templates/pages/metrics.html`
- `src/local_deep_research/web/templates/pages/news-subscription-form.html`
- `src/local_deep_research/web/templates/pages/news.html`
- `src/local_deep_research/web/templates/pages/news_cleaned.html`
- `src/local_deep_research/web/templates/pages/progress.html`
- `src/local_deep_research/web/templates/pages/research.html`
- `src/local_deep_research/web/templates/pages/results.html`
- `src/local_deep_research/web/templates/pages/star_reviews.html`
- `src/local_deep_research/web/templates/pages/subscriptions.html`
- `src/local_deep_research/web/templates/settings_dashboard.html`
- `tests/web/templates/__init__.py`
- `tests/web/templates/test_settings_form_password_render.py`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/CI_INTEGRATION.md`
- `tests/README.md`
- `tests/TESTING_COMPARISON.md`
- `tests/TESTING_PROPOSAL.md`
- `tests/TEST_OPTIMIZATION.md`
- `tests/TEST_ORGANIZATION.md`
- `tests/__init__.py`
- `tests/accessibility_tests/README.md`
- `tests/accessibility_tests/__init__.py`
- `tests/accessibility_tests/auth-setup.js`
- `tests/accessibility_tests/axe-helper.js`
- `tests/accessibility_tests/package-lock.json`
- `tests/accessibility_tests/package.json`
- `tests/accessibility_tests/test_accessibility_backend.py`
- `tests/accessibility_tests/wcag-compliance.spec.js`
- `tests/advanced_search_system/__init__.py`
- `tests/advanced_search_system/candidate_exploration/__init__.py`
- `tests/advanced_search_system/candidate_exploration/test_adaptive_explorer.py`
- `tests/advanced_search_system/candidate_exploration/test_constraint_guided_explorer.py`
- `tests/advanced_search_system/candidate_exploration/test_constraint_guided_high_value.py`
- `tests/advanced_search_system/candidate_exploration/test_diversity_explorer.py`
- `tests/advanced_search_system/candidate_exploration/test_diversity_explorer_coverage.py`
- `tests/advanced_search_system/candidate_exploration/test_diversity_explorer_deep_coverage.py`
- `tests/advanced_search_system/candidate_exploration/test_diversity_explorer_high_value.py`
- `tests/advanced_search_system/candidate_exploration/test_parallel_explorer.py`
- `tests/advanced_search_system/candidate_exploration/test_progressive_explorer.py`
- `tests/advanced_search_system/candidate_exploration/test_progressive_explorer_coverage.py`
- `tests/advanced_search_system/candidate_exploration/test_rank_by_diversity_pure_logic.py`
- `tests/advanced_search_system/candidates/__init__.py`
- `tests/advanced_search_system/candidates/test_base_candidate_extended.py`
- `tests/advanced_search_system/candidates/test_base_candidate_high_value.py`
- `tests/advanced_search_system/conftest.py`
- `tests/advanced_search_system/constraints/__init__.py`
- `tests/advanced_search_system/constraints/test_base_constraint_high_value.py`
- `tests/advanced_search_system/constraints/test_constraint_analyzer.py`
- `tests/advanced_search_system/constraints/test_constraint_analyzer_high_value.py`
- `tests/advanced_search_system/evidence/__init__.py`
- `tests/advanced_search_system/evidence/test_base_evidence.py`
- `tests/advanced_search_system/evidence/test_base_evidence_high_value.py`
- `tests/advanced_search_system/evidence/test_evaluator.py`
- `tests/advanced_search_system/evidence/test_evaluator_high_value.py`
- `tests/advanced_search_system/evidence/test_evaluator_integration.py`
- `tests/advanced_search_system/evidence/test_evaluator_pure_logic.py`
- `tests/advanced_search_system/filters/__init__.py`
- `tests/advanced_search_system/filters/conftest.py`
- `tests/advanced_search_system/filters/test_base_filter.py`
- `tests/advanced_search_system/filters/test_cross_engine_filter.py`
- `tests/advanced_search_system/filters/test_cross_engine_filter_high_value.py`
- `tests/advanced_search_system/filters/test_cross_engine_filter_integration.py`
- `tests/advanced_search_system/filters/test_filters_high_value.py`
- `tests/advanced_search_system/filters/test_followup_relevance_filter.py`
- `tests/advanced_search_system/filters/test_journal_filter_tiers.py`
- `tests/advanced_search_system/filters/test_journal_reputation_coverage.py`
- `tests/advanced_search_system/filters/test_journal_reputation_filter.py`
- `tests/advanced_search_system/findings/__init__.py`
- `tests/advanced_search_system/findings/test_base_findings.py`
- `tests/advanced_search_system/findings/test_findings_high_value.py`
- `tests/advanced_search_system/findings/test_findings_repository.py`
- `tests/advanced_search_system/findings/test_findings_repository_coverage.py`
- `tests/advanced_search_system/findings/test_findings_repository_deep_coverage.py`
- `tests/advanced_search_system/findings/test_format_links.py`
- `tests/advanced_search_system/findings/test_repository.py`
- `tests/advanced_search_system/findings/test_repository_high_value.py`
- `tests/advanced_search_system/findings/test_synthesize_pure_logic.py`
- `tests/advanced_search_system/findings/test_topic.py`
- `tests/advanced_search_system/findings/test_topic_coverage.py`
- `tests/advanced_search_system/findings/test_topic_high_value.py`
- `tests/advanced_search_system/knowledge/__init__.py`
- `tests/advanced_search_system/knowledge/test_base_knowledge_generator.py`
- `tests/advanced_search_system/knowledge/test_followup_context_manager.py`
- `tests/advanced_search_system/knowledge/test_followup_context_manager_high_value.py`
- `tests/advanced_search_system/knowledge/test_followup_context_pure_logic.py`
- `tests/advanced_search_system/knowledge/test_knowledge_generator.py`
- `tests/advanced_search_system/knowledge/test_standard_knowledge.py`
- `tests/advanced_search_system/questions/__init__.py`
- `tests/advanced_search_system/questions/followup/__init__.py`
- `tests/advanced_search_system/questions/followup/test_base_followup_question.py`
- `tests/advanced_search_system/questions/followup/test_llm_followup_question.py`
- `tests/advanced_search_system/questions/followup/test_simple_followup_question.py`
- `tests/advanced_search_system/questions/test_atomic_fact_question.py`
- ... 40 more

### CI/Docker 후보

- `.github/scripts/validate-docker-compose-images.sh`
- `.github/workflows/README.md`
- `.github/workflows/advanced-search-reminder.yml`
- `.github/workflows/ai-code-reviewer.yml`
- `.github/workflows/backwards-compatibility.yml`
- `.github/workflows/bearer.yml`
- `.github/workflows/check-config-docs.yml`
- `.github/workflows/check-env-vars.yml`
- `.github/workflows/check-workflow-status.yml`
- `.github/workflows/checkov.yml`
- `.github/workflows/ci-gate.yml`
- `.github/workflows/claude-code-review.yml`
- `.github/workflows/codeql.yml`
- `.github/workflows/compose-integration-test.yml`
- `.github/workflows/compose-published-smoke.yml`
- `.github/workflows/container-security.yml`
- `.github/workflows/danger-zone-alert.yml`
- `.github/workflows/dependency-review.yml`
- `.github/workflows/devskim.yml`
- `.github/workflows/docker-multiarch-test.yml`
- `.github/workflows/docker-publish.yml`
- `.github/workflows/docker-tests.yml`
- `.github/workflows/dockle.yml`
- `.github/workflows/e2e-research-test.yml`
- `.github/workflows/file-whitelist-check.yml`
- `.github/workflows/fuzz.yml`
- `.github/workflows/gitleaks-main.yml`
- `.github/workflows/gitleaks.yml`
- `.github/workflows/grype.yml`
- `.github/workflows/hadolint.yml`
- `.github/workflows/issue-research.yml`
- `.github/workflows/journal-data-integration.yml`
- `.github/workflows/label-fixed-in-dev.yml`
- `.github/workflows/labels-sync.yml`
- `.github/workflows/ldr-research-reusable.yml`
- `.github/workflows/mcp-tests.yml`
- `.github/workflows/mypy-type-check.yml`
- `.github/workflows/npm-audit.yml`
- `.github/workflows/nuclei.yml`
- `.github/workflows/ossf-scorecard.yml`
- `.github/workflows/osv-scanner-scheduled.yml`
- `.github/workflows/osv-scanner.yml`
- `.github/workflows/owasp-zap-scan.yml`
- `.github/workflows/playwright-webkit-tests.yml`
- `.github/workflows/pr-triage.yml`
- `.github/workflows/pre-commit.yml`
- `.github/workflows/prerelease-docker.yml`
- `.github/workflows/publish.yml`
- `.github/workflows/puppeteer-e2e-tests.yml`
- `.github/workflows/release-gate.yml`
- `.github/workflows/release.yml`
- `.github/workflows/responsive-ui-tests-enhanced.yml`
- `.github/workflows/retirejs.yml`
- `.github/workflows/sbom.yml`
- `.github/workflows/security-file-write-check.yml`
- `.github/workflows/security-headers-validation.yml`
- `.github/workflows/security-tests.yml`
- `.github/workflows/semgrep.yml`
- `.github/workflows/sync-main-to-dev.yml`
- `.github/workflows/ui-full-shards.yml`
- `.github/workflows/update-dependencies.yml`
- `.github/workflows/update-npm-dependencies.yml`
- `.github/workflows/update-precommit-hooks.yml`
- `.github/workflows/validate-image-pinning.yml`
- `.github/workflows/version_check.yml`
- `.github/workflows/vulture-dead-code.yml`
- `.github/workflows/welcome-first-time.yml`
- `.github/workflows/zizmor-security.yml`
- `Dockerfile`
- `cookiecutter-docker/{{cookiecutter.config_name}}/docker-compose.{{cookiecutter.config_name}}.yml`
- `docker-compose.gpu.override.yml`
- `docker-compose.unraid.yml`
- `docker-compose.yml`
- `docs/docker-compose-guide.md`
- `examples/elasticsearch/docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 2152 |
| .js | 350 |
| .md | 228 |
| .yml | 79 |
| .css | 60 |
| .json | 45 |
| .html | 44 |
| .sh | 20 |
| .yaml | 9 |
| .jinja2 | 8 |
| .png | 4 |
| .txt | 3 |
| .mp3 | 2 |
| .toml | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `src/local_deep_research/notifications/templates/api_quota_warning.jinja2 스펙/명령 의미`
- `src/local_deep_research/notifications/templates/auth_issue.jinja2 스펙/명령 의미`
- `src/local_deep_research/notifications/templates/research_completed.jinja2 스펙/명령 의미`
- `src/local_deep_research/notifications/templates/research_failed.jinja2 스펙/명령 의미`
- `src/local_deep_research/notifications/templates/research_queued.jinja2 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `examples/elasticsearch/docker-compose.yml 실행 스크립트와 패키지 경계`
- `package.json 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`

