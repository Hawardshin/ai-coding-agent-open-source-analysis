# eugeniughelbur/obsidian-second-brain 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/eugeniughelbur__obsidian-second-brain |
| remote | https://github.com/eugeniughelbur/obsidian-second-brain |
| HEAD | 9930ebf (2026-06-17) Bump actions/checkout to v6 + set Dependabot to monthly grouped updates |
| branch | main |
| groups | llm-wiki-100 |
| files | 161 |
| dirs | 29 |
| stack | Python |

## 구조 해석

- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Follow along`, `The Problem`, `How this extends Karpathy's LLM Wiki`, `What Happens When You Install This`, `Before & After`, `How It Works`, `45 Commands`, `Operations -- Claude remembers`, `Thinking -- Claude thinks with you`, `Context -- Claude knows you`, `Research -- Claude pulls knowledge in`, `The Vault is Alive`, `Choose Your Preset`, `Background Agent & Scheduled Agents`, `Vault Architecture`, `Wiki-style (default) -- LLM-first`, `Install`, `Claude Code (default)`

> <p align="center" <a href="https //github.com/eugeniughelbur/obsidian second brain" <img src="media/banner.png" alt="obsidian second brain one brain, four CLIs, 45 commands. A cross CLI skill for Obsidian that runs on Claude Code, Codex CLI, Gemini CLI, and OpenCode." width="100%" / </a </p <p align="center" <a href=" install" <img src="https //img.shields.io/badge/Claude Code D97757?style=for the badge&logo=anthropic&logoColor=white" alt="Claude Code" / </a <a href=" codex cli gemini cli opencode" <img src="https //img.shields.io/badge/Codex CLI 412991?style=for the badge&logo=openai&logoColor=white" alt="Codex CLI" / </a <a href=" codex cli gemini cli opencode" <img src="https //img.shields.io/badge/Gemini CLI 4285F4?style=for the badge&logo=googlegemini&logoColor=white" alt="Gemini CLI" / </a <a href=" codex cli gemini cli opencode" <img src="https //img.shields.io/badge/OpenCode 1818

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| _config.yml | file |
| _includes | dir |
| .env.example | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| adapters | dir |
| architecture.md | file |
| CHANGELOG.md | file |
| CITATION.cff | file |
| CLAUDE.md | file |
| CODE_OF_CONDUCT.md | file |
| commands | dir |
| CONTRIBUTING.md | file |
| ECOSYSTEM.md | file |
| examples | dir |
| FORK_INSIGHTS.md | file |
| hooks | dir |
| install.sh | file |
| integrations | dir |
| LICENSE | file |
| llms.txt | file |
| media | dir |
| pyproject.toml | file |
| README.md | file |
| references | dir |
| scripts | dir |
| SECURITY.md | file |
| SKILL.md | file |
| tests | dir |
| update.sh | file |
| uv.lock | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| scripts/ | 48 |
| commands/ | 45 |
| (root) | 21 |
| references/ | 10 |
| .github/ | 8 |
| examples/ | 8 |
| hooks/ | 6 |
| integrations/ | 6 |
| adapters/ | 5 |
| tests/ | 2 |
| _includes/ | 1 |
| media/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| examples/ | 8 | preferred |
| tests/ | 2 | preferred |
| commands/ | 45 | preferred |
| scripts/ | 48 | preferred |
| scripts/research/ | 32 | large |
| scripts/research/lib/ | 24 | large |
| references/ | 10 | large |
| .github/ | 8 | large |
| examples/sample-vault/ | 7 | large |
| hooks/ | 6 | large |
| integrations/ | 6 | large |
| integrations/telegram-journal/ | 6 | large |
| adapters/ | 5 | large |
| references/bases/ | 4 | large |
| .github/ISSUE_TEMPLATE/ | 3 | large |
| .github/workflows/ | 2 | large |
| examples/sample-vault/people/ | 2 | large |
| _includes/ | 1 | large |
| adapters/claude-code/ | 1 | large |
| adapters/codex-cli/ | 1 | large |
| adapters/gemini-cli/ | 1 | large |
| adapters/opencode/ | 1 | large |
| examples/sample-vault/Daily/ | 1 | large |
| examples/sample-vault/Ideas/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `pyproject.toml`
- `uv.lock`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | obsidian-second-brain-research | false | false | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `examples/README.md`
- `integrations/telegram-journal/README.md`

### 에이전트 지침 후보

- `CLAUDE.md`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/test_research_sources.py`
- `tests/test_smoke.py`

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `.github/workflows/scorecard.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 71 |
| .py | 46 |
| .sh | 16 |
| .yml | 8 |
| .template | 4 |
| .example | 3 |
| .gitignore | 2 |
| .yaml | 2 |
| .cff | 1 |
| .gitattributes | 1 |
| .html | 1 |
| .json | 1 |
| .lock | 1 |
| .png | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `commands/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `scripts/research/ 내부 책임 분리`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `uv.lock 실행 스크립트와 패키지 경계`

