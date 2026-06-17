# AgriciDaniel/claude-obsidian 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/AgriciDaniel__claude-obsidian |
| remote | https://github.com/AgriciDaniel/claude-obsidian |
| HEAD | cb93ff6 (2026-05-28) chore(assets): add 1280x640 social preview card |
| branch | main |
| groups | llm-wiki-100 |
| files | 211 |
| dirs | 64 |
| stack | unknown/mixed |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `claude-obsidian: Self-Organizing AI Second Brain for Obsidian + Claude Code`, `Contents`, `What It Does`, `[YouTube Demo](https://www.youtube.com/watch?v=a2hgayvr-H4)`, `Why claude-obsidian?`, `Quick Start`, `Option 1: Clone as vault (recommended, full setup in 2 minutes)`, `Option 2: Install as Claude Code plugin`, `Step 1: add the marketplace`, `Step 2: install the plugin`, `Option 3: Add to an existing vault`, `Commands`, ``/wiki`: setup, scaffold, continue`, ``/autoresearch`: autonomous research loop`, ``/canvas`: visual layer`, ``/think`: 10-principle thinking loop`, `Methodology Modes (v1.8+)`, `Vault Use Cases (v1.0+)`

> claude obsidian Self Organizing AI Second Brain for Obsidian + Claude Code <p align="center" <img src="wiki/meta/claude obsidian gif cover 16x9.gif" alt="claude obsidian persistent compounding wiki vault for Claude Code and Obsidian" width="100%" / </p Claude + Obsidian knowledge companion and self organizing AI second brain. A running AI notetaker that builds and maintains a persistent, compounding wiki vault. Every source you add gets integrated. Every question you ask pulls from everything that has been read. Knowledge compounds like interest. Open source Obsidian AI plugin for AI note taking, personal knowledge management (PKM), second brain workflows, and a private Notion alternative. 15 Claude Code skills , multi agent support, multi writer safe (v1.7+), first class methodology modes (LYT / PARA / Zettelkasten / Generic via v1.8), and the 10 principle thinking framework (v1.9). Bas

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| _templates | dir |
| .claude-plugin | dir |
| .cursor | dir |
| .github | dir |
| .gitignore | file |
| .obsidian | dir |
| .raw | dir |
| .vault-meta | dir |
| .windsurf | dir |
| agents | dir |
| AGENTS.md | file |
| assets | dir |
| ATTRIBUTION.md | file |
| bin | dir |
| CHANGELOG.md | file |
| CITATION.cff | file |
| CLAUDE.md | file |
| CODE_OF_CONDUCT.md | file |
| CODEOWNERS | file |
| commands | dir |
| CONTRIBUTING.md | file |
| docs | dir |
| GEMINI.md | file |
| hooks | dir |
| LICENSE | file |
| Makefile | file |
| PRIVACY.md | file |
| README.md | file |
| scripts | dir |
| SECURITY.md | file |
| skills | dir |
| tests | dir |
| wiki | dir |
| WIKI.md | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| wiki/ | 70 |
| skills/ | 31 |
| .obsidian/ | 22 |
| (root) | 16 |
| scripts/ | 12 |
| docs/ | 11 |
| tests/ | 9 |
| .github/ | 6 |
| _templates/ | 5 |
| bin/ | 5 |
| .vault-meta/ | 4 |
| assets/ | 4 |
| commands/ | 4 |
| .raw/ | 3 |
| agents/ | 3 |
| .claude-plugin/ | 2 |
| hooks/ | 2 |
| .cursor/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 11 | preferred |
| tests/ | 9 | preferred |
| commands/ | 4 | preferred |
| skills/ | 31 | preferred |
| agents/ | 3 | preferred |
| scripts/ | 12 | preferred |
| wiki/ | 70 | large |
| wiki/meta/ | 29 | large |
| .obsidian/ | 22 | large |
| wiki/concepts/ | 14 | large |
| .obsidian/plugins/ | 13 | large |
| wiki/entities/ | 9 | large |
| skills/wiki/ | 8 | large |
| skills/wiki-mode/ | 7 | large |
| skills/wiki/references/ | 7 | large |
| .github/ | 6 | large |
| skills/wiki-mode/templates/ | 6 | large |
| _templates/ | 5 | large |
| bin/ | 5 | large |
| docs/audits/ | 5 | large |
| .obsidian/plugins/calendar/ | 4 | large |
| .obsidian/plugins/thino/ | 4 | large |
| .vault-meta/ | 4 | large |
| assets/ | 4 | large |

## Manifest / 런타임 표면

### Manifest 파일

_없음_

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/audits/v1.7.0-audit-2026-05-17.md`
- `docs/audits/v1.7.1-fixes-plan.md`
- `docs/audits/v1.7.2-sss-plus-plan.md`
- `docs/audits/v1.8.0-pre-push-audit-2026-05-18.md`
- `docs/audits/v1.9.0-pre-public-promotion-audit-2026-05-18.md`
- `docs/compound-vault-guide.md`
- `docs/dragonscale-guide.md`
- `docs/install-guide.md`
- `docs/install-guide.pdf`
- `docs/methodology-modes-guide.md`
- `docs/releases/v1.6.0.md`
- `hooks/README.md`

### 에이전트 지침 후보

- `.cursor/rules/claude-obsidian.mdc`
- `.github/copilot-instructions.md`
- `AGENTS.md`
- `CLAUDE.md`
- `GEMINI.md`
- `skills/autoresearch/SKILL.md`
- `skills/autoresearch/references/program.md`
- `skills/canvas/SKILL.md`
- `skills/canvas/references/canvas-spec.md`
- `skills/defuddle/SKILL.md`
- `skills/obsidian-bases/SKILL.md`
- `skills/obsidian-markdown/SKILL.md`
- `skills/save/SKILL.md`
- `skills/think/SKILL.md`
- `skills/wiki-cli/SKILL.md`
- `skills/wiki-fold/SKILL.md`
- `skills/wiki-fold/references/fold-template.md`
- `skills/wiki-ingest/SKILL.md`
- `skills/wiki-lint/SKILL.md`
- `skills/wiki-mode/SKILL.md`
- `skills/wiki-mode/templates/lyt/atomic-template.md`
- `skills/wiki-mode/templates/lyt/moc-template.md`
- `skills/wiki-mode/templates/para/area-template.md`
- `skills/wiki-mode/templates/para/project-template.md`
- `skills/wiki-mode/templates/para/resource-template.md`
- `skills/wiki-mode/templates/zettel/atomic-template.md`
- `skills/wiki-query/SKILL.md`
- `skills/wiki-retrieve/SKILL.md`
- `skills/wiki/SKILL.md`
- `skills/wiki/references/css-snippets.md`
- `skills/wiki/references/frontmatter.md`
- `skills/wiki/references/git-setup.md`
- `skills/wiki/references/mcp-setup.md`
- `skills/wiki/references/modes.md`
- `skills/wiki/references/plugins.md`
- `skills/wiki/references/rest-api.md`
- `wiki/entities/Nexus-claudesidian-mcp.md`
- `wiki/entities/kepano-obsidian-skills.md`

### 스펙/템플릿/명령/스킬 후보

- `skills/wiki-mode/templates/lyt/atomic-template.md`
- `skills/wiki-mode/templates/lyt/moc-template.md`
- `skills/wiki-mode/templates/para/area-template.md`
- `skills/wiki-mode/templates/para/project-template.md`
- `skills/wiki-mode/templates/para/resource-template.md`
- `skills/wiki-mode/templates/zettel/atomic-template.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/test_allocate_address.sh`
- `tests/test_bm25_index.py`
- `tests/test_boundary_score.py`
- `tests/test_concurrent_write.sh`
- `tests/test_contextual_prefix.py`
- `tests/test_retrieve.py`
- `tests/test_tiling_check.py`
- `tests/test_wiki_lock.sh`
- `tests/test_wiki_mode.py`

### CI/Docker 후보

- `.github/workflows/test.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 120 |
| .json | 17 |
| .py | 15 |
| .sh | 11 |
| .png | 8 |
| .css | 7 |
| .svg | 6 |
| .canvas | 5 |
| .gif | 5 |
| .js | 3 |
| .gitkeep | 2 |
| .txt | 2 |
| .yml | 2 |
| .base | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `commands/ 내부 책임 분리`
- `skills/ 내부 책임 분리`
- `agents/ 내부 책임 분리`
- `skills/wiki-mode/templates/lyt/atomic-template.md 스펙/명령 의미`
- `skills/wiki-mode/templates/lyt/moc-template.md 스펙/명령 의미`
- `skills/wiki-mode/templates/para/area-template.md 스펙/명령 의미`
- `skills/wiki-mode/templates/para/project-template.md 스펙/명령 의미`
- `skills/wiki-mode/templates/para/resource-template.md 스펙/명령 의미`

