# kaplanelad/shellfirm 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/kaplanelad__shellfirm |
| remote | https://github.com/kaplanelad/shellfirm.git |
| HEAD | 7ebf869 (2026-05-15) fix: force direct tty prompts for zsh hook (#184) |
| branch | main |
| groups | previous-clone-inventory-107 |
| files | 182 |
| dirs | 33 |
| stack | Node/TypeScript/JavaScript, Rust |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `shellfirm`, `Features`, `AI Tool Integration`, `Claude Code`, `MCP Tools`, `Installation`, `npm`, `Homebrew`, `Cargo`, `Quick Start`, `Documentation`, `Contributing`, `License`

> <p align="center" <img src="https //github.com/kaplanelad/shellfirm/actions/workflows/ci.yaml/badge.svg"/ <img src="https //github.com/kaplanelad/shellfirm/actions/workflows/release.yml/badge.svg"/ </p shellfirm Think before you execute. Humans make mistakes. AI agents make them faster. shellfirm intercepts dangerous shell commands before the damage is done. Features 100+ patterns across 9 ecosystems (filesystem, git, Kubernetes, Terraform, Docker, AWS, GCP/Azure, Heroku, databases) 8 shells — Zsh, Bash, Fish, Nushell, PowerShell, Elvish, Xonsh, Oils Context aware escalation — harder challenges when connected via SSH, running as root, on protected git branches, or in production Kubernetes clusters Safe alternative suggestions — actionable safer commands shown alongside every warning Severity levels with configurable thresholds ( Critical , High , Medium , Low , Info ) Project policies — 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .cargo | dir |
| .github | dir |
| .gitignore | file |
| build.rs | file |
| Cargo.lock | file |
| Cargo.toml | file |
| CHANGELOG.md | file |
| CONTRIBUTING.md | file |
| docs | dir |
| LICENSE | file |
| Makefile | file |
| npm | dir |
| README.md | file |
| scripts | dir |
| shellfirm | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| shellfirm/ | 143 |
| docs/ | 17 |
| (root) | 9 |
| npm/ | 6 |
| .github/ | 5 |
| .cargo/ | 1 |
| scripts/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 17 | preferred |
| scripts/ | 1 | preferred |
| shellfirm/ | 143 | large |
| shellfirm/src/ | 88 | large |
| shellfirm/tests/ | 30 | large |
| shellfirm/src/tui/ | 29 | large |
| shellfirm/src/snapshots/ | 24 | large |
| shellfirm/checks/ | 22 | large |
| shellfirm/tests/checks/ | 22 | large |
| shellfirm/src/bin/ | 17 | large |
| docs/checks/ | 10 | large |
| npm/ | 6 | large |
| .github/ | 5 | large |
| docs/docker/ | 4 | large |
| shellfirm/src/wrap/ | 4 | large |
| .github/ISSUE_TEMPLATE/ | 3 | large |
| .github/workflows/ | 2 | large |
| docs/docker/bash/ | 2 | large |
| docs/docker/zsh/ | 2 | large |
| npm/shellfirm/ | 2 | large |
| .cargo/ | 1 | large |
| docs/media/ | 1 | large |
| npm/cli-darwin-arm64/ | 1 | large |
| npm/cli-darwin-x64/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Cargo.toml`
- `docs/docker/bash/Dockerfile`
- `docs/docker/zsh/Dockerfile`
- `npm/cli-darwin-arm64/package.json`
- `npm/cli-darwin-x64/package.json`
- `npm/cli-linux-x64/package.json`
- `npm/cli-win32-x64/package.json`
- `npm/shellfirm/package.json`
- `shellfirm/Cargo.toml`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| npm/cli-darwin-arm64/package.json | @shellfirm/cli-darwin-arm64 |  |  |
| npm/cli-darwin-x64/package.json | @shellfirm/cli-darwin-x64 |  |  |
| npm/cli-linux-x64/package.json | @shellfirm/cli-linux-x64 |  |  |
| npm/cli-win32-x64/package.json | @shellfirm/cli-win32-x64 |  |  |
| npm/shellfirm/package.json | @shellfirm/cli |  |  |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| Cargo.toml |  | true | "shellfirm" |
| shellfirm/Cargo.toml | shellfirm | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/add-new-patterns.md`
- `docs/checks/base.md`
- `docs/checks/fs-strict.md`
- `docs/checks/fs.md`
- `docs/checks/git-strict.md`
- `docs/checks/git.md`
- `docs/checks/heroku.md`
- `docs/checks/kubernetes-strict.md`
- `docs/checks/kubernetes.md`
- `docs/checks/network.md`
- `docs/checks/terraform.md`
- `docs/config.md`
- `docs/docker/bash/Dockerfile`
- `docs/docker/bash/README.md`
- `docs/docker/zsh/Dockerfile`
- `docs/docker/zsh/README.md`
- `docs/media/example.gif`

### 에이전트 지침 후보

- `shellfirm/src/bin/cmd/mcp_cmd.rs`
- `shellfirm/src/mcp.rs`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `shellfirm/tests/checks.rs`
- `shellfirm/tests/checks/aws.yaml`
- `shellfirm/tests/checks/azure.yaml`
- `shellfirm/tests/checks/base.yaml`
- `shellfirm/tests/checks/database.yaml`
- `shellfirm/tests/checks/docker.yaml`
- `shellfirm/tests/checks/flyio.yaml`
- `shellfirm/tests/checks/fs.yaml`
- `shellfirm/tests/checks/gcp.yaml`
- `shellfirm/tests/checks/git.yaml`
- `shellfirm/tests/checks/github.yaml`
- `shellfirm/tests/checks/heroku.yaml`
- `shellfirm/tests/checks/kubernetes.yaml`
- `shellfirm/tests/checks/mongodb.yaml`
- `shellfirm/tests/checks/mysql.yaml`
- `shellfirm/tests/checks/netlify.yaml`
- `shellfirm/tests/checks/network.yaml`
- `shellfirm/tests/checks/npm.yaml`
- `shellfirm/tests/checks/psql.yaml`
- `shellfirm/tests/checks/redis.yaml`
- `shellfirm/tests/checks/shell.yaml`
- `shellfirm/tests/checks/terraform.yaml`
- `shellfirm/tests/checks/vercel.yaml`
- `shellfirm/tests/decision_matrix.rs`
- `shellfirm/tests/decisions/matrix.yaml`
- `shellfirm/tests/escalation_matrix_proptest.rs`
- `shellfirm/tests/per_mode_resolution.rs`
- `shellfirm/tests/pure_logic.rs`
- `shellfirm/tests/sandboxed_integration.rs`
- `shellfirm/tests/tui_app.rs`

### CI/Docker 후보

- `.github/workflows/ci.yaml`
- `.github/workflows/release.yml`
- `docs/docker/bash/Dockerfile`
- `docs/docker/zsh/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .rs | 70 |
| .yaml | 46 |
| .snap | 27 |
| .md | 20 |
| .json | 5 |
| .toml | 3 |
| dockerfile | 2 |
| .gif | 1 |
| .gitignore | 1 |
| .gitkeep | 1 |
| .lock | 1 |
| .sh | 1 |
| .yml | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `shellfirm/ 내부 책임 분리`
- `shellfirm/src/ 내부 책임 분리`
- `shellfirm/tests/ 내부 책임 분리`
- `Cargo.toml 실행 스크립트와 패키지 경계`
- `docs/docker/bash/Dockerfile 실행 스크립트와 패키지 경계`
- `docs/docker/zsh/Dockerfile 실행 스크립트와 패키지 경계`
- `npm/cli-darwin-arm64/package.json 실행 스크립트와 패키지 경계`
- `npm/cli-darwin-x64/package.json 실행 스크립트와 패키지 경계`

