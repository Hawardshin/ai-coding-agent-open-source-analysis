# VectifyAI/OpenKB 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/VectifyAI__OpenKB |
| remote | https://github.com/VectifyAI/OpenKB |
| HEAD | 26f8b13 (2026-06-16) feat(skills): add openkb-deck-neon (dark Aurora Glass) + make it the default deck skill (#101) |
| branch | main |
| groups | llm-wiki-100 |
| files | 104 |
| dirs | 17 |
| stack | Python |

## 구조 해석

- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `OpenKB — Open LLM Knowledge Base`, `📑 What is OpenKB`, `Why not traditional RAG?`, `🚀 Getting Started`, `Install`, `Quick Start`, `1. Create a directory for your knowledge base`, `2. Initialize the knowledge base`, `3. Add documents`, `4. Ask a question`, `5. Or chat interactively`, `6. Or distill your wiki into a redistributable skill`, `Set up your LLM`, `🧩 How OpenKB Works`, `Architecture`, `Short vs. Long Document Handling`, `Knowledge Compilation`, `⚙️ Usage`

> <div align="center" <a href="https //openkb.ai" <img src="https //docs.pageindex.ai/images/openkb.png" alt="OpenKB (by PageIndex)" / </a OpenKB — Open LLM Knowledge Base <p align="center" <i Scale to long documents&nbsp; • &nbsp;Reasoning based retrieval&nbsp; • &nbsp;Native multi modality&nbsp; • &nbsp;No Vector DB</i </p </div 📑 What is OpenKB OpenKB (Open Knowledge Base) is an open source system (in CLI) that compiles raw documents into a structured, interlinked wiki style knowledge base using LLMs, powered by PageIndex for vectorless long document retrieval. The idea is based on a concept described by Andrej Karpathy LLMs generate summaries, concept pages, and cross references, all maintained automatically. Knowledge compounds over time instead of being re derived on every query. Why not traditional RAG? Traditional RAG rediscovers knowledge from scratch on every query. Nothing accu

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude-plugin | dir |
| .env.example | file |
| .github | dir |
| .gitignore | file |
| config.yaml.example | file |
| examples | dir |
| LICENSE | file |
| openkb | dir |
| pyproject.toml | file |
| README.md | file |
| skills | dir |
| tests | dir |
| uv.lock | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| tests/ | 48 |
| openkb/ | 38 |
| (root) | 7 |
| skills/ | 6 |
| examples/ | 3 |
| .claude-plugin/ | 1 |
| .github/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| examples/ | 3 | preferred |
| tests/ | 48 | preferred |
| skills/ | 6 | preferred |
| openkb/ | 38 | large |
| openkb/agent/ | 10 | large |
| openkb/skill/ | 8 | large |
| examples/docs/ | 3 | large |
| openkb/deck/ | 3 | large |
| skills/openkb/ | 3 | large |
| openkb/prompts/ | 2 | large |
| skills/openkb/references/ | 2 | large |
| .claude-plugin/ | 1 | large |
| .github/ | 1 | large |
| .github/workflows/ | 1 | large |
| skills/openkb-deck-editorial/ | 1 | large |
| skills/openkb-deck-neon/ | 1 | large |
| skills/openkb-html-critic/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `pyproject.toml`
- `uv.lock`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | openkb | false | false | false | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `examples/docs/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf`
- `examples/docs/attention-is-all-you-need.pdf`
- `examples/docs/deepseek-r1.pdf`

### 에이전트 지침 후보

- `openkb/agent/skill_runner.py`
- `openkb/agent/skills.py`
- `openkb/prompts/skill_create.md`
- `openkb/skill/__init__.py`
- `openkb/skill/creator.py`
- `openkb/skill/evaluator.py`
- `openkb/skill/generator.py`
- `openkb/skill/marketplace.py`
- `openkb/skill/tools.py`
- `openkb/skill/validator.py`
- `openkb/skill/workspace.py`
- `skills/openkb-deck-editorial/SKILL.md`
- `skills/openkb-deck-neon/SKILL.md`
- `skills/openkb-html-critic/SKILL.md`
- `skills/openkb/SKILL.md`
- `skills/openkb/references/commands.md`
- `skills/openkb/references/wiki-schema.md`
- `tests/test_skill_chat_slash.py`
- `tests/test_skill_cli.py`
- `tests/test_skill_creator.py`
- `tests/test_skill_evaluator.py`
- `tests/test_skill_name_validation.py`
- `tests/test_skill_runner.py`
- `tests/test_skill_tools.py`
- `tests/test_skill_validator.py`
- `tests/test_skill_workspace.py`
- `tests/test_skills.py`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/conftest.py`
- `tests/test_add_command.py`
- `tests/test_agent_tools.py`
- `tests/test_chat_session.py`
- `tests/test_chat_slash_commands.py`
- `tests/test_cli.py`
- `tests/test_compiler.py`
- `tests/test_config.py`
- `tests/test_converter.py`
- `tests/test_critique_slash.py`
- `tests/test_cross_platform_locks.py`
- `tests/test_deck_chat_slash.py`
- `tests/test_deck_cli.py`
- `tests/test_deck_creator.py`
- `tests/test_deck_neon_prompt.py`
- `tests/test_deck_package.py`
- `tests/test_deck_prompt.py`
- `tests/test_deck_validator.py`
- `tests/test_feedback.py`
- `tests/test_generator.py`
- `tests/test_images.py`
- `tests/test_indexer.py`
- `tests/test_lint.py`
- `tests/test_lint_cli.py`
- `tests/test_linter.py`
- `tests/test_list_status.py`
- `tests/test_locks.py`
- `tests/test_markdown_renderer.py`
- `tests/test_marketplace.py`
- `tests/test_query.py`
- `tests/test_read_kb_file.py`
- `tests/test_recompile.py`
- `tests/test_remove.py`
- `tests/test_skill_chat_slash.py`
- `tests/test_skill_cli.py`
- `tests/test_skill_creator.py`
- `tests/test_skill_evaluator.py`
- `tests/test_skill_name_validation.py`
- `tests/test_skill_runner.py`
- `tests/test_skill_tools.py`
- `tests/test_skill_validator.py`
- `tests/test_skill_workspace.py`
- `tests/test_skills.py`
- `tests/test_state.py`
- `tests/test_tree_renderer.py`
- `tests/test_url_ingest.py`
- `tests/test_watcher.py`
- `tests/test_write_kb_file.py`

### CI/Docker 후보

- `.github/workflows/publish.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 85 |
| .md | 8 |
| .pdf | 3 |
| .example | 2 |
| .gitignore | 1 |
| .json | 1 |
| .lock | 1 |
| .toml | 1 |
| .yml | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `skills/ 내부 책임 분리`
- `openkb/ 내부 책임 분리`
- `openkb/agent/ 내부 책임 분리`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `uv.lock 실행 스크립트와 패키지 경계`

