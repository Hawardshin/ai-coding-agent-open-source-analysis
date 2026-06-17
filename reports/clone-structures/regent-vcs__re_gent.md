# regent-vcs/re_gent 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/regent-vcs__re_gent |
| remote | https://github.com/regent-vcs/re_gent.git |
| HEAD | 1cde53e (2026-06-13) Merge pull request #65 from regent-vcs/fix/version-ldflags-64 |
| branch | main |
| groups | previous-clone-inventory-107 |
| files | 132 |
| dirs | 42 |
| stack | Go |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Quick Start`, `Install via Homebrew (macOS/Linux)`, `Or via Go`, `Initialize in your project`, `Work with Claude Code, Codex, or OpenCode normally — activity is tracked automatically`, `See what happened`, `Demo`, `Examples`, `What You Get`, `See what your agent actually did`, `Blame: which prompt wrote this line?`, `Track multiple concurrent sessions`, `Filter history by session`, `See full context for any change`, `Why This Exists`, `How It Works`, `Installation`, `Via Homebrew (macOS/Linux)`

> <div align="center" <a href="https //github.com/regent vcs/regent" <img src="assets/regent logo dark.png" alt="re gent" width="100%" / </a <br / <br / <h1 Version Control for AI Agents</h1 <p Track what your agent did, which prompt wrote each line, and inspect any step. </p </div Quick Start That's it. Your agent activity is now auditable. Demo <div align="center" https //github.com/user attachments/assets/a19b7c56 2e3c 4f04 81a1 d8665e3963b8 <p <em Every agent turn is automatically captured. No manual commits needed.</em </p </div Examples Debugging a Bad Refactor trace a realistic billing regression with rgt log , rgt blame , and rgt show . What You Get See what your agent actually did Blame which prompt wrote this line? Track multiple concurrent sessions See full context for any change Why This Exists AI agents have no version control of their own. You know this pain "It was working f

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .claude | dir |
| .github | dir |
| .gitignore | file |
| .golangci.yml | file |
| .goreleaser.yaml | file |
| assets | dir |
| BRAND.md | file |
| CHANGELOG.md | file |
| CLAUDE.md | file |
| cmd | dir |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| CONTRIBUTORS.md | file |
| demo | dir |
| docs | dir |
| examples | dir |
| go.mod | file |
| go.sum | file |
| internal | dir |
| LICENSE | file |
| Makefile | file |
| POC.md | file |
| README.md | file |
| ROADMAP.md | file |
| scripts | dir |
| SUPPORT.md | file |
| test | dir |
| TESTING.md | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| internal/ | 63 |
| (root) | 18 |
| .github/ | 10 |
| cmd/ | 9 |
| demo/ | 7 |
| assets/ | 6 |
| examples/ | 6 |
| .agents/ | 3 |
| docs/ | 3 |
| test/ | 3 |
| .claude/ | 2 |
| scripts/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| cmd/ | 9 | preferred |
| docs/ | 3 | preferred |
| examples/ | 6 | preferred |
| test/ | 3 | preferred |
| scripts/ | 2 | preferred |
| internal/ | 63 | large |
| internal/cli/ | 23 | large |
| internal/store/ | 17 | large |
| .github/ | 10 | large |
| cmd/rgt/ | 9 | large |
| demo/ | 7 | large |
| assets/ | 6 | large |
| examples/bad-refactor/ | 6 | large |
| internal/index/ | 5 | large |
| demo/.claude/ | 4 | large |
| .agents/ | 3 | large |
| .agents/skills/ | 3 | large |
| .github/ISSUE_TEMPLATE/ | 3 | large |
| demo/.claude/skills/ | 3 | large |
| internal/hook/ | 3 | large |
| .claude/ | 2 | large |
| .github/workflows/ | 2 | large |
| internal/capture/ | 2 | large |
| internal/conversation/ | 2 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `go.mod`

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| go.mod | github.com/regent-vcs/regent | 1.23.0 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/FAQ.md`
- `docs/images/log-command-example.png`
- `docs/shell-completion.md`
- `examples/bad-refactor/README.md`

### 에이전트 지침 후보

- `.agents/skills/blame/SKILL.md`
- `.agents/skills/log/SKILL.md`
- `.agents/skills/show/SKILL.md`
- `.claude/settings.json`
- `.claude/skills/rewind/SKILL.md`
- `CLAUDE.md`
- `demo/.claude/settings.json`
- `demo/.claude/skills/blame/SKILL.md`
- `demo/.claude/skills/log/SKILL.md`
- `demo/.claude/skills/show/SKILL.md`

### 스펙/템플릿/명령/스킬 후보

- `.agents/skills/blame/SKILL.md`
- `.agents/skills/log/SKILL.md`
- `.agents/skills/show/SKILL.md`
- `.claude/skills/rewind/SKILL.md`
- `demo/.claude/skills/blame/SKILL.md`
- `demo/.claude/skills/log/SKILL.md`
- `demo/.claude/skills/show/SKILL.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `test/integration_test.go`
- `test/phase1_acceptance_test.go`
- `test/session_branching_test.go`

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `.github/workflows/release.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .go | 75 |
| .md | 25 |
| .yml | 7 |
| .py | 5 |
| .gif | 3 |
| .sh | 3 |
| .gitignore | 2 |
| .json | 2 |
| .png | 2 |
| .jsonc | 1 |
| .mod | 1 |
| .mp4 | 1 |
| .sum | 1 |
| .svg | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `cmd/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `test/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `.agents/skills/blame/SKILL.md 스펙/명령 의미`
- `.agents/skills/log/SKILL.md 스펙/명령 의미`
- `.agents/skills/show/SKILL.md 스펙/명령 의미`
- `.claude/skills/rewind/SKILL.md 스펙/명령 의미`
- `demo/.claude/skills/blame/SKILL.md 스펙/명령 의미`
- `go.mod 실행 스크립트와 패키지 경계`

