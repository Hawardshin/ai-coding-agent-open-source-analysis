# Ar9av/obsidian-wiki 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/Ar9av__obsidian-wiki |
| remote | https://github.com/Ar9av/obsidian-wiki |
| HEAD | c4d27ec (2026-06-16) Fix OKF folder-note link roundtrip (#110) |
| branch | main |
| groups | llm-wiki-100 |
| files | 89 |
| dirs | 73 |
| stack | Python |

## 구조 해석

- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `obsidian-wiki`, `Quick Start`, `Install via pip (recommended)`, `Install via Skills CLI`, `Install via git clone`, `Agent Compatibility`, `Manual setup (if you prefer `setup.sh`)`, `Mine Hermes history into the wiki:`, `Mine OpenClaw history:`, `Mine Pi session history:`, `How it works`, `Visualization`, `Color-coding the graph`, `What we added on top of Karpathy's pattern`, `Optional: QMD Semantic Search`, ``_raw/` Staging Directory`, `Syncing your vault to GitHub`, `then commit and push manually, or re-run setup.sh to get the sync script`

> obsidian wiki <p align="center" <a href="https //deepwiki.com/Ar9av/obsidian wiki" <img src="https //deepwiki.com/badge.svg" alt="Ask DeepWiki" / </a <a href="https //github.com/ar9av/obsidian wiki/pulls" <img src="https //img.shields.io/badge/PRs welcome brightgreen.svg" alt="PRs Welcome" / </a <a href="https //x.com/ ar9av" <img src="https //img.shields.io/badge/@ ar9av black?logo=x&logoColor=white" alt="X" / </a </p <p align="center" <img width="768" height="512" alt="obisidan wiki" src="https //github.com/user attachments/assets/b44cf63b 3197 4fb1 8e18 dbc9a39f27a7" / </p A digital brain you grow with your AI agent. It remembers what you figure out, connects it to what you already know, and answers when you ask. The pattern comes from Andrej Karpathy's LLM Wiki gist compile knowledge once into interconnected markdown files and keep them current, instead of asking an LLM the same ques

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agent | dir |
| .agents | dir |
| .claude | dir |
| .cursor | dir |
| .env.example | file |
| .github | dir |
| .gitignore | file |
| .hermes.md | other |
| .kiro | dir |
| .pi | dir |
| .skills | dir |
| .windsurf | dir |
| AGENTS.md | file |
| CLAUDE.md | other |
| GEMINI.md | other |
| LICENSE | file |
| obsidian_wiki | dir |
| pyproject.toml | file |
| README.md | file |
| scripts | dir |
| SETUP.md | file |
| setup.sh | file |
| tests | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| .skills/ | 62 |
| (root) | 8 |
| scripts/ | 5 |
| .github/ | 3 |
| obsidian_wiki/ | 3 |
| .agent/ | 2 |
| .claude/ | 2 |
| .cursor/ | 1 |
| .kiro/ | 1 |
| .windsurf/ | 1 |
| tests/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| tests/ | 1 | preferred |
| scripts/ | 5 | preferred |
| .kiro/ | 1 | preferred |
| .skills/ | 62 | large |
| .skills/skill-creator/ | 18 | large |
| .skills/skill-creator/scripts/ | 9 | large |
| .skills/wiki-ingest/ | 4 | large |
| .github/ | 3 | large |
| .skills/skill-creator/agents/ | 3 | large |
| .skills/wiki-ingest/references/ | 3 | large |
| obsidian_wiki/ | 3 | large |
| .agent/ | 2 | large |
| .claude/ | 2 | large |
| .github/workflows/ | 2 | large |
| .skills/claude-history-ingest/ | 2 | large |
| .skills/codex-history-ingest/ | 2 | large |
| .skills/copilot-history-ingest/ | 2 | large |
| .skills/hermes-history-ingest/ | 2 | large |
| .skills/llm-wiki/ | 2 | large |
| .skills/openclaw-history-ingest/ | 2 | large |
| .skills/skill-creator/eval-viewer/ | 2 | large |
| .skills/wiki-capture/ | 2 | large |
| .agent/rules/ | 1 | large |
| .agent/workflows/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `pyproject.toml`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | obsidian-wiki | false | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`

### 에이전트 지침 후보

- `.claude/hooks/wiki-stop-capture.sh`
- `.claude/settings.json`
- `.cursor/rules/obsidian-wiki.mdc`
- `.github/copilot-instructions.md`
- `.skills/claude-history-ingest/SKILL.md`
- `.skills/claude-history-ingest/references/claude-data-format.md`
- `.skills/codex-history-ingest/SKILL.md`
- `.skills/codex-history-ingest/references/codex-data-format.md`
- `.skills/copilot-history-ingest/SKILL.md`
- `.skills/copilot-history-ingest/references/copilot-data-format.md`
- `.skills/cross-linker/SKILL.md`
- `.skills/daily-update/SKILL.md`
- `.skills/graph-colorize/SKILL.md`
- `.skills/hermes-history-ingest/SKILL.md`
- `.skills/hermes-history-ingest/references/hermes-data-format.md`
- `.skills/impl-validator/SKILL.md`
- `.skills/llm-wiki/SKILL.md`
- `.skills/llm-wiki/references/karpathy-pattern.md`
- `.skills/memory-bridge/SKILL.md`
- `.skills/openclaw-history-ingest/SKILL.md`
- `.skills/openclaw-history-ingest/references/openclaw-data-format.md`
- `.skills/pi-history-ingest/SKILL.md`
- `.skills/skill-creator/LICENSE.txt`
- `.skills/skill-creator/SKILL.md`
- `.skills/skill-creator/agents/analyzer.md`
- `.skills/skill-creator/agents/comparator.md`
- `.skills/skill-creator/agents/grader.md`
- `.skills/skill-creator/assets/eval_review.html`
- `.skills/skill-creator/eval-viewer/generate_review.py`
- `.skills/skill-creator/eval-viewer/viewer.html`
- `.skills/skill-creator/references/schemas.md`
- `.skills/skill-creator/scripts/__init__.py`
- `.skills/skill-creator/scripts/aggregate_benchmark.py`
- `.skills/skill-creator/scripts/generate_report.py`
- `.skills/skill-creator/scripts/improve_description.py`
- `.skills/skill-creator/scripts/package_skill.py`
- `.skills/skill-creator/scripts/quick_validate.py`
- `.skills/skill-creator/scripts/run_eval.py`
- `.skills/skill-creator/scripts/run_loop.py`
- `.skills/skill-creator/scripts/utils.py`
- `.skills/tag-taxonomy/SKILL.md`
- `.skills/vault-skill-factory/SKILL.md`
- `.skills/wiki-agent/SKILL.md`
- `.skills/wiki-capture/SKILL.md`
- `.skills/wiki-capture/references/RAW-FORMAT.md`
- `.skills/wiki-context-pack/SKILL.md`
- `.skills/wiki-dashboard/SKILL.md`
- `.skills/wiki-dedup/SKILL.md`
- `.skills/wiki-digest/SKILL.md`
- `.skills/wiki-export/SKILL.md`
- `.skills/wiki-history-ingest/SKILL.md`
- `.skills/wiki-import/SKILL.md`
- `.skills/wiki-ingest/SKILL.md`
- `.skills/wiki-ingest/references/ingest-prompts.md`
- `.skills/wiki-ingest/references/pageindex.md`
- `.skills/wiki-ingest/references/url-sources.md`
- `.skills/wiki-lint/SKILL.md`
- `.skills/wiki-query/SKILL.md`
- `.skills/wiki-rebuild/SKILL.md`
- `.skills/wiki-research/SKILL.md`
- `.skills/wiki-setup/SKILL.md`
- `.skills/wiki-stage-commit/SKILL.md`
- `.skills/wiki-status/SKILL.md`
- `.skills/wiki-switch/SKILL.md`
- `.skills/wiki-synthesize/SKILL.md`
- `.skills/wiki-update/SKILL.md`
- `AGENTS.md`

### 스펙/템플릿/명령/스킬 후보

- `.kiro/steering/obsidian-wiki.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/test_okf_same_name_link_roundtrip.py`

### CI/Docker 후보

- `.github/workflows/publish.yml`
- `.github/workflows/setup.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 57 |
| .py | 16 |
| .sh | 4 |
| .html | 2 |
| .yml | 2 |
| .example | 1 |
| .gitignore | 1 |
| .json | 1 |
| .mdc | 1 |
| .plist | 1 |
| .toml | 1 |
| .txt | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `.kiro/ 내부 책임 분리`
- `.skills/ 내부 책임 분리`
- `.skills/skill-creator/ 내부 책임 분리`
- `.kiro/steering/obsidian-wiki.md 스펙/명령 의미`
- `pyproject.toml 실행 스크립트와 패키지 경계`

