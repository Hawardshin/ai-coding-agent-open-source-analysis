# github/spec-kit 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/github__spec-kit |
| remote | https://github.com/github/spec-kit |
| HEAD | ee8b358 (2026-06-17) fix(bug-assess): recompile lock so github guard repos is 'all' (#3036) |
| branch | main |
| groups | spec-driven-20 |
| files | 380 |
| dirs | 111 |
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
- 주요 heading: `Table of Contents`, `🤔 What is Spec-Driven Development?`, `⚡ Get Started`, `1. Install Specify CLI`, `2. Initialize a project`, `Check whether a newer release is available (read-only — does not modify anything)`, `Preview what would run, without actually upgrading`, `Upgrade in place to the latest stable release (auto-detects uv tool vs pipx install)`, `Or pin a specific release tag (replace vX.Y.Z[suffix] with your desired release tag)`, `3. Establish project principles`, `4. Create the spec`, `5. Create a technical implementation plan`, `6. Break down into tasks`, `7. Execute implementation`, `📽️ Video Overview`, `🌍 Community`, `🤖 Supported AI Coding Agent Integrations`, `Available Slash Commands`

> <div align="center" <img src="./media/logo large.webp" alt="Spec Kit Logo" width="200" height="200"/ <h1 🌱 Spec Kit</h1 <h3 <em Build high quality software faster.</em </h3 </div <p align="center" <strong An open source toolkit that allows you to focus on product scenarios and predictable outcomes instead of vibe coding every piece from scratch.</strong </p <p align="center" <a href="https //github.com/github/spec kit/releases/latest" <img src="https //img.shields.io/github/v/release/github/spec kit" alt="Latest Release"/ </a <a href="https //github.com/github/spec kit/stargazers" <img src="https //img.shields.io/github/stars/github/spec kit?style=social" alt="GitHub stars"/ </a <a href="https //github.com/github/spec kit/blob/main/LICENSE" <img src="https //img.shields.io/github/license/github/spec kit" alt="License"/ </a <a href="https //github.github.io/spec kit/" <img src="https //i

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .devcontainer | dir |
| .editorconfig | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .markdownlint-cli2.jsonc | file |
| .zenodo.json | file |
| AGENTS.md | file |
| CHANGELOG.md | file |
| CITATION.cff | file |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| DEVELOPMENT.md | file |
| docs | dir |
| extensions | dir |
| integrations | dir |
| LICENSE | file |
| media | dir |
| newsletters | dir |
| presets | dir |
| pyproject.toml | file |
| README.md | file |
| scripts | dir |
| SECURITY.md | file |
| spec-driven.md | file |
| spec-kit.code-workspace | file |
| src | dir |
| SUPPORT.md | file |
| templates | dir |
| tests | dir |
| workflows | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| tests/ | 96 |
| src/ | 88 |
| extensions/ | 46 |
| docs/ | 30 |
| presets/ | 27 |
| .github/ | 26 |
| (root) | 18 |
| templates/ | 16 |
| scripts/ | 10 |
| workflows/ | 8 |
| media/ | 5 |
| integrations/ | 4 |
| newsletters/ | 4 |
| .devcontainer/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 88 | preferred |
| docs/ | 30 | preferred |
| tests/ | 96 | preferred |
| templates/ | 16 | preferred |
| scripts/ | 10 | preferred |
| extensions/ | 46 | preferred |
| src/specify_cli/ | 88 | large |
| tests/integrations/ | 49 | large |
| src/specify_cli/integrations/ | 44 | large |
| presets/ | 27 | large |
| .github/ | 26 | large |
| extensions/git/ | 17 | large |
| src/specify_cli/workflows/ | 17 | large |
| .github/workflows/ | 15 | large |
| templates/commands/ | 10 | large |
| presets/self-test/ | 9 | large |
| extensions/git/scripts/ | 8 | large |
| extensions/template/ | 8 | large |
| workflows/ | 8 | large |
| docs/reference/ | 7 | large |
| presets/lean/ | 7 | large |
| .github/ISSUE_TEMPLATE/ | 6 | large |
| extensions/agent-context/ | 6 | large |
| presets/scaffold/ | 6 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `pyproject.toml`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | specify-cli | false | false | false | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/.gitignore`
- `docs/README.md`
- `docs/community/extensions.md`
- `docs/community/friends.md`
- `docs/community/overview.md`
- `docs/community/presets.md`
- `docs/community/walkthroughs.md`
- `docs/concepts/complex-features.md`
- `docs/concepts/sdd.md`
- `docs/concepts/spec-persistence.md`
- `docs/docfx.json`
- `docs/guides/evolving-specs.md`
- `docs/index.md`
- `docs/install/air-gapped.md`
- `docs/install/one-time.md`
- `docs/install/pipx.md`
- `docs/install/uv.md`
- `docs/installation.md`
- `docs/local-development.md`
- `docs/quickstart.md`
- `docs/reference/authentication.md`
- `docs/reference/core.md`
- `docs/reference/extensions.md`
- `docs/reference/integrations.md`
- `docs/reference/overview.md`
- `docs/reference/presets.md`
- `docs/reference/workflows.md`
- `docs/template/public/main.css`
- `docs/toc.yml`
- `docs/upgrade.md`
- `extensions/README.md`
- `extensions/agent-context/README.md`
- `extensions/bug/README.md`
- `extensions/git/README.md`
- `extensions/template/README.md`
- `integrations/CONTRIBUTING.md`
- `integrations/README.md`
- `presets/README.md`
- `presets/lean/README.md`
- `presets/scaffold/README.md`
- `workflows/README.md`

### 에이전트 지침 후보

- `.github/skills/add-community-extension/SKILL.md`
- `AGENTS.md`
- `tests/integrations/test_integration_base_skills.py`
- `tests/test_extension_skills.py`

### 스펙/템플릿/명령/스킬 후보

- `.github/skills/add-community-extension/SKILL.md`
- `extensions/agent-context/commands/speckit.agent-context.update.md`
- `extensions/bug/commands/speckit.bug.assess.md`
- `extensions/bug/commands/speckit.bug.fix.md`
- `extensions/bug/commands/speckit.bug.test.md`
- `extensions/git/commands/speckit.git.commit.md`
- `extensions/git/commands/speckit.git.feature.md`
- `extensions/git/commands/speckit.git.initialize.md`
- `extensions/git/commands/speckit.git.remote.md`
- `extensions/git/commands/speckit.git.validate.md`
- `extensions/selftest/commands/selftest.md`
- `extensions/template/commands/example.md`
- `presets/lean/commands/speckit.constitution.md`
- `presets/lean/commands/speckit.implement.md`
- `presets/lean/commands/speckit.plan.md`
- `presets/lean/commands/speckit.specify.md`
- `presets/lean/commands/speckit.tasks.md`
- `presets/scaffold/commands/speckit.myext.myextcmd.md`
- `presets/scaffold/commands/speckit.specify.md`
- `presets/scaffold/templates/myext-template.md`
- `presets/scaffold/templates/spec-template.md`
- `presets/self-test/commands/speckit.specify.md`
- `presets/self-test/commands/speckit.wrap-test.md`
- `presets/self-test/templates/agent-file-template.md`
- `presets/self-test/templates/checklist-template.md`
- `presets/self-test/templates/constitution-template.md`
- `presets/self-test/templates/plan-template.md`
- `presets/self-test/templates/spec-template.md`
- `presets/self-test/templates/tasks-template.md`
- `src/specify_cli/commands/__init__.py`
- `src/specify_cli/commands/init.py`
- `templates/commands/analyze.md`
- `templates/commands/checklist.md`
- `templates/commands/clarify.md`
- `templates/commands/constitution.md`
- `templates/commands/converge.md`
- `templates/commands/implement.md`
- `templates/commands/plan.md`
- `templates/commands/specify.md`
- `templates/commands/tasks.md`
- `templates/commands/taskstoissues.md`
- `templates/plan-template.md`
- `templates/spec-template.md`
- `tests/hooks/tasks.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/__init__.py`
- `tests/auth_helpers.py`
- `tests/conftest.py`
- `tests/extensions/__init__.py`
- `tests/extensions/bug/__init__.py`
- `tests/extensions/bug/test_bug_extension.py`
- `tests/extensions/git/__init__.py`
- `tests/extensions/git/test_git_extension.py`
- `tests/extensions/test_extension_agent_context.py`
- `tests/hooks/.specify/extensions.yml`
- `tests/hooks/TESTING.md`
- `tests/hooks/plan.md`
- `tests/hooks/spec.md`
- `tests/hooks/tasks.md`
- `tests/http_helpers.py`
- `tests/integrations/__init__.py`
- `tests/integrations/conftest.py`
- `tests/integrations/test_base.py`
- `tests/integrations/test_cli.py`
- `tests/integrations/test_extra_args.py`
- `tests/integrations/test_integration_agy.py`
- `tests/integrations/test_integration_amp.py`
- `tests/integrations/test_integration_auggie.py`
- `tests/integrations/test_integration_base_markdown.py`
- `tests/integrations/test_integration_base_skills.py`
- `tests/integrations/test_integration_base_toml.py`
- `tests/integrations/test_integration_base_yaml.py`
- `tests/integrations/test_integration_bob.py`
- `tests/integrations/test_integration_catalog.py`
- `tests/integrations/test_integration_claude.py`
- `tests/integrations/test_integration_cline.py`
- `tests/integrations/test_integration_codebuddy.py`
- `tests/integrations/test_integration_codex.py`
- `tests/integrations/test_integration_copilot.py`
- `tests/integrations/test_integration_cursor_agent.py`
- `tests/integrations/test_integration_devin.py`
- `tests/integrations/test_integration_forge.py`
- `tests/integrations/test_integration_gemini.py`
- `tests/integrations/test_integration_generic.py`
- `tests/integrations/test_integration_goose.py`
- `tests/integrations/test_integration_hermes.py`
- `tests/integrations/test_integration_iflow.py`
- `tests/integrations/test_integration_junie.py`
- `tests/integrations/test_integration_kilocode.py`
- `tests/integrations/test_integration_kimi.py`
- `tests/integrations/test_integration_kiro_cli.py`
- `tests/integrations/test_integration_lingma.py`
- `tests/integrations/test_integration_opencode.py`
- `tests/integrations/test_integration_pi.py`
- `tests/integrations/test_integration_qodercli.py`
- `tests/integrations/test_integration_qwen.py`
- `tests/integrations/test_integration_roo.py`
- `tests/integrations/test_integration_rovodev.py`
- `tests/integrations/test_integration_scaffold.py`
- `tests/integrations/test_integration_shai.py`
- `tests/integrations/test_integration_state.py`
- `tests/integrations/test_integration_subcommand.py`
- `tests/integrations/test_integration_tabnine.py`
- `tests/integrations/test_integration_trae.py`
- `tests/integrations/test_integration_vibe.py`
- `tests/integrations/test_integration_windsurf.py`
- `tests/integrations/test_integration_zed.py`
- `tests/integrations/test_manifest.py`
- `tests/integrations/test_registry.py`
- `tests/self_upgrade_helpers.py`
- `tests/test_agent_config_consistency.py`
- `tests/test_authentication.py`
- `tests/test_branch_numbering.py`
- `tests/test_check_prerequisites_paths_only.py`
- `tests/test_check_tool.py`
- `tests/test_cli_version.py`
- `tests/test_commands_package.py`
- `tests/test_console_imports.py`
- `tests/test_extension_registration.py`
- `tests/test_extension_skills.py`
- `tests/test_extension_update_hardening.py`
- `tests/test_extensions.py`
- `tests/test_github_http.py`
- `tests/test_live_transient_windows.py`
- `tests/test_merge.py`
- ... 16 more

### CI/Docker 후보

- `.github/workflows/RELEASE-PROCESS.md`
- `.github/workflows/add-community-extension.lock.yml`
- `.github/workflows/add-community-extension.md`
- `.github/workflows/add-community-preset.lock.yml`
- `.github/workflows/add-community-preset.md`
- `.github/workflows/bug-assess.lock.yml`
- `.github/workflows/bug-assess.md`
- `.github/workflows/catalog-assign.yml`
- `.github/workflows/codeql.yml`
- `.github/workflows/docs.yml`
- `.github/workflows/lint.yml`
- `.github/workflows/release-trigger.yml`
- `.github/workflows/release.yml`
- `.github/workflows/stale.yml`
- `.github/workflows/test.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 179 |
| .md | 114 |
| .yml | 33 |
| .json | 15 |
| .sh | 11 |
| .ps1 | 10 |
| .gitignore | 3 |
| .gif | 2 |
| .webp | 2 |
| license | 2 |
| .cff | 1 |
| .code-workspace | 1 |
| .css | 1 |
| .editorconfig | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `templates/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `.github/skills/add-community-extension/SKILL.md 스펙/명령 의미`
- `extensions/agent-context/commands/speckit.agent-context.update.md 스펙/명령 의미`
- `extensions/bug/commands/speckit.bug.assess.md 스펙/명령 의미`
- `extensions/bug/commands/speckit.bug.fix.md 스펙/명령 의미`
- `extensions/bug/commands/speckit.bug.test.md 스펙/명령 의미`
- `pyproject.toml 실행 스크립트와 패키지 경계`

