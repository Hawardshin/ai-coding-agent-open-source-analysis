# opencode-ai/opencode 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/opencode-ai__opencode |
| remote | https://github.com/opencode-ai/opencode.git |
| HEAD | 73ee493 (2025-09-17) docs(readme): update archive note |
| branch | main |
| groups | previous-clone-inventory-107 |
| files | 162 |
| dirs | 46 |
| stack | Go |

## 구조 해석

- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Archived: Project has Moved`, `⌬ OpenCode`, `Overview`, `Features`, `Installation`, `Using the Install Script`, `Install the latest version`, `Install a specific version`, `Using Homebrew (macOS and Linux)`, `Using AUR (Arch Linux)`, `Using yay`, `Using paru`, `Using Go`, `Configuration`, `Auto Compact Feature`, `Environment Variables`, `Shell Configuration`, `Configuration File Structure`

> Archived Project has Moved This repository is no longer maintained and has been archived for provenance. The project has continued under the name [Crush][crush], developed by the original author and the Charm team. Please follow [Crush][crush] for ongoing development. [crush] https //github.com/charmbracelet/crush ⌬ OpenCode <p align="center" <img src="https //github.com/user attachments/assets/9ae61ef6 70e5 4876 bc45 5bcb4e52c714" width="800" </p ⚠️ Early Development Notice This project is in early development and is not yet ready for production use. Features may change, break, or be incomplete. Use at your own risk. A powerful terminal based AI assistant for developers, providing intelligent coding assistance directly in your terminal. Overview OpenCode is a Go based CLI application that brings AI assistance to your terminal. It provides a TUI (Terminal User Interface) for interacting 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| .goreleaser.yml | file |
| .opencode.json | file |
| cmd | dir |
| go.mod | file |
| go.sum | file |
| install | file |
| internal | dir |
| LICENSE | file |
| main.go | file |
| opencode-schema.json | file |
| README.md | file |
| scripts | dir |
| sqlc.yaml | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| internal/ | 143 |
| (root) | 11 |
| cmd/ | 3 |
| scripts/ | 3 |
| .github/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| cmd/ | 3 | preferred |
| scripts/ | 3 | preferred |
| internal/ | 143 | large |
| internal/tui/ | 48 | large |
| internal/llm/ | 44 | large |
| internal/tui/components/ | 22 | large |
| internal/lsp/ | 16 | large |
| internal/llm/tools/ | 15 | large |
| internal/db/ | 13 | large |
| internal/tui/theme/ | 12 | large |
| internal/llm/models/ | 11 | large |
| internal/llm/provider/ | 8 | large |
| internal/lsp/protocol/ | 8 | large |
| internal/llm/prompt/ | 6 | large |
| internal/llm/agent/ | 4 | large |
| internal/tui/layout/ | 4 | large |
| internal/tui/styles/ | 4 | large |
| internal/db/sql/ | 3 | large |
| internal/logging/ | 3 | large |
| internal/message/ | 3 | large |
| internal/tui/page/ | 3 | large |
| .github/ | 2 | large |
| .github/workflows/ | 2 | large |
| cmd/schema/ | 2 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `go.mod`

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| go.mod | github.com/opencode-ai/opencode | 1.24.0 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `cmd/schema/README.md`

### 에이전트 지침 후보

- `internal/llm/agent/mcp-tools.go`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

- `.github/workflows/build.yml`
- `.github/workflows/release.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .go | 140 |
| .sql | 5 |
| .yml | 3 |
| .json | 2 |
| .md | 2 |
| license | 2 |
| .gitignore | 1 |
| .mod | 1 |
| .sh | 1 |
| .sum | 1 |
| .yaml | 1 |
| install | 1 |
| release | 1 |
| snapshot | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `cmd/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `internal/ 내부 책임 분리`
- `internal/tui/ 내부 책임 분리`
- `internal/llm/ 내부 책임 분리`
- `go.mod 실행 스크립트와 패키지 경계`

