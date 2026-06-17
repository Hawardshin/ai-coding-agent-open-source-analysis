# langchain-ai/open-swe 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/langchain-ai__open-swe |
| remote | https://github.com/langchain-ai/open-swe.git |
| HEAD | 7dd758f (2026-06-17) feat: shared GitHub HTTP helper with retries, rate-limit handling [closes OPE-45] (#1565) |
| branch | main |
| groups | previous-clone-inventory-107 |
| files | 410 |
| dirs | 38 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Architecture`, `1. Agent Harness — Composed on Deep Agents`, `2. Sandbox — Isolated Cloud Environments`, `3. Tools — Curated, Not Accumulated`, `4. Context Engineering — AGENTS.md + Source Context`, `5. Orchestration — Subagents + Middleware`, `6. Invocation — Slack, Linear, and GitHub`, `7. Validation — Prompt-Driven`, `Comparison`, `Features`, `Getting Started`, `License`

> <div align="center" <a href="https //github.com/langchain ai/open swe" <picture <source media="(prefers color scheme dark)" srcset="static/dark.svg" <source media="(prefers color scheme light)" srcset="static/light.svg" <img alt="Open SWE Logo" src="static/dark.svg" width="35%" </picture </a </div <div align="center" <h3 Open source framework for building your org's internal coding agent.</h3 </div <div align="center" <a href="https //opensource.org/licenses/MIT" target=" blank" <img src="https //img.shields.io/github/license/langchain ai/open swe" alt="License" </a <a href="https //github.com/langchain ai/open swe/stargazers" target=" blank" <img src="https //img.shields.io/github/stars/langchain ai/open swe" alt="GitHub Stars" </a <a href="https //github.com/langchain ai/langgraph" target=" blank" <img src="https //img.shields.io/badge/Built%20on LangGraph blue" alt="Built on LangGraph

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .codespellignore | file |
| .dockerignore | file |
| .github | dir |
| .gitignore | file |
| .vscode | dir |
| agent | dir |
| AGENTS.md | file |
| CLAUDE.md | file |
| CUSTOMIZATION.md | file |
| default_prompt.md | file |
| Dockerfile | file |
| evals | dir |
| INSTALLATION.md | file |
| langgraph.json | file |
| LICENSE | file |
| Makefile | file |
| pyproject.toml | file |
| README.md | file |
| scripts | dir |
| SECURITY.md | file |
| static | dir |
| tests | dir |
| ui | dir |
| uv.lock | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| ui/ | 149 |
| agent/ | 125 |
| tests/ | 96 |
| (root) | 16 |
| evals/ | 12 |
| .github/ | 5 |
| scripts/ | 4 |
| static/ | 2 |
| .vscode/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| tests/ | 96 | preferred |
| scripts/ | 4 | preferred |
| ui/ | 149 | large |
| ui/src/ | 126 | large |
| agent/ | 125 | large |
| ui/src/components/ | 76 | large |
| agent/utils/ | 31 | large |
| agent/dashboard/ | 26 | large |
| agent/tools/ | 26 | large |
| ui/src/lib/ | 22 | large |
| ui/src/routes/ | 22 | large |
| agent/middleware/ | 13 | large |
| evals/ | 12 | large |
| evals/reviewer/ | 12 | large |
| agent/integrations/ | 9 | large |
| ui/public/ | 7 | large |
| .github/ | 5 | large |
| evals/reviewer/golden_comments/ | 5 | large |
| .github/workflows/ | 4 | large |
| ui/assets/ | 3 | large |
| agent/skills/ | 2 | large |
| static/ | 2 | large |
| .vscode/ | 1 | large |
| agent/skills/bootstrap-repo-analysis/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `pyproject.toml`
- `ui/bun.lock`
- `ui/package.json`
- `ui/tsconfig.json`
- `ui/vite.config.ts`
- `ui/yarn.lock`
- `uv.lock`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| ui/package.json | open-swe-dashboard | dev, build, preview, test, lint, format, typecheck | @base-ui/react, @fontsource-variable/inter, @langchain/core, @langchain/langgraph-sdk, @langchain/react, @monaco-editor/react, @phosphor-icons/react, @pierre/diffs, @pierre/trees, @tailwindcss/vite, @tanstack/react-devtools, @tanstack/react-query, @tanstack/react-query-devtools, @tanstack/react-router |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | open-swe-agent | false | false | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `evals/reviewer/README.md`
- `ui/README.md`

### 에이전트 지침 후보

- `AGENTS.md`
- `CLAUDE.md`
- `agent/integrations/datadog_mcp.py`
- `agent/skills/bootstrap-repo-analysis/SKILL.md`
- `agent/skills/continual-learning/SKILL.md`
- `agent/utils/analyzer_skills.py`
- `agent/utils/api_standards_skill.py`
- `tests/test_analyzer_skills.py`
- `tests/test_api_standards_skill.py`

### 스펙/템플릿/명령/스킬 후보

- `agent/skills/bootstrap-repo-analysis/SKILL.md`
- `agent/skills/continual-learning/SKILL.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/conftest.py`
- `tests/middleware/test_sandbox_recovery.py`
- `tests/test_account_link.py`
- `tests/test_agent_instructions.py`
- `tests/test_agent_schedules.py`
- `tests/test_agent_subagent_models.py`
- `tests/test_agent_thread_pr_state.py`
- `tests/test_agent_usage.py`
- `tests/test_analyzer_cron.py`
- `tests/test_analyzer_skills.py`
- `tests/test_anthropic_effort.py`
- `tests/test_api_standards_skill.py`
- `tests/test_auth_sources.py`
- `tests/test_authorship.py`
- `tests/test_autofix_state.py`
- `tests/test_autofix_webhook.py`
- `tests/test_check_message_queue.py`
- `tests/test_ci_autofix.py`
- `tests/test_currents_tools.py`
- `tests/test_dashboard_csrf.py`
- `tests/test_dashboard_links.py`
- `tests/test_dashboard_org_login_gate.py`
- `tests/test_dashboard_repo_optional.py`
- `tests/test_dashboard_repos.py`
- `tests/test_dashboard_reviews.py`
- `tests/test_dashboard_run_email.py`
- `tests/test_dashboard_thread_api.py`
- `tests/test_dashboard_thread_api_activity.py`
- `tests/test_dashboard_web_handoff.py`
- `tests/test_daytona_integration.py`
- `tests/test_encryption.py`
- `tests/test_eval_jobs.py`
- `tests/test_eval_store_reporter.py`
- `tests/test_fireworks_model.py`
- `tests/test_github_app.py`
- `tests/test_github_checks.py`
- `tests/test_github_ci.py`
- `tests/test_github_comment_prompts.py`
- `tests/test_github_feedback.py`
- `tests/test_github_http.py`
- `tests/test_github_issue_webhook.py`
- `tests/test_github_oauth_refresh.py`
- `tests/test_github_proxy_refresh.py`
- `tests/test_github_token_ttl.py`
- `tests/test_google_model.py`
- `tests/test_http_security.py`
- `tests/test_langsmith_sandbox_config.py`
- `tests/test_langsmith_sandbox_timeout.py`
- `tests/test_langsmith_trace_url.py`
- `tests/test_local_integration.py`
- `tests/test_model_fallback_middleware.py`
- `tests/test_model_fallback_resolution.py`
- `tests/test_multimodal.py`
- `tests/test_normalize_repo.py`
- `tests/test_notify_step_limit_middleware.py`
- `tests/test_observability_tools.py`
- `tests/test_open_pull_request.py`
- `tests/test_pr_ready_auto_review.py`
- `tests/test_prompt_default_repo.py`
- `tests/test_proxy_auth.py`
- `tests/test_public_repo_org_gate.py`
- `tests/test_recent_comments.py`
- `tests/test_refresh_slack_status_middleware.py`
- `tests/test_repo_extraction.py`
- `tests/test_repo_prep.py`
- `tests/test_review_api.py`
- `tests/test_review_chat.py`
- `tests/test_review_style_collector.py`
- `tests/test_review_style_sync.py`
- `tests/test_review_styles_store.py`
- `tests/test_reviewer.py`
- `tests/test_reviewer_diff.py`
- `tests/test_reviewer_eval_run.py`
- `tests/test_reviewer_eval_target.py`
- `tests/test_reviewer_findings.py`
- `tests/test_reviewer_groups.py`
- `tests/test_reviewer_outcomes.py`
- `tests/test_reviewer_publish.py`
- `tests/test_reviewer_reconcile.py`
- `tests/test_reviewer_tools.py`
- ... 17 more

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `.github/workflows/pr_lint.yml`
- `.github/workflows/promote_main_to_prod.yml`
- `.github/workflows/reviewer_eval.yml`
- `Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 228 |
| .tsx | 93 |
| .ts | 31 |
| .json | 12 |
| .md | 11 |
| .png | 7 |
| .svg | 5 |
| .yml | 5 |
| .lock | 3 |
| .css | 2 |
| .gitignore | 2 |
| .toml | 2 |
| .codespellignore | 1 |
| .dockerignore | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `ui/ 내부 책임 분리`
- `ui/src/ 내부 책임 분리`
- `agent/ 내부 책임 분리`
- `agent/skills/bootstrap-repo-analysis/SKILL.md 스펙/명령 의미`
- `agent/skills/continual-learning/SKILL.md 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `ui/bun.lock 실행 스크립트와 패키지 경계`
- `ui/package.json 실행 스크립트와 패키지 경계`
- `ui/tsconfig.json 실행 스크립트와 패키지 경계`

