# buildermethods/agent-os 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/buildermethods__agent-os |
| remote | https://github.com/buildermethods/agent-os |
| HEAD | cae8e66 (2026-05-05) Note PR #327 in CHANGELOG |
| branch | main |
| groups | spec-driven-20 |
| files | 22 |
| dirs | 9 |
| stack | unknown/mixed |

## 구조 해석

- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Agents that build the way you would`, `Documentation & Installation`, `Follow updates & releases`, `Created by Brian Casel @ Builder Methods`

> <img width="1200" height="675" alt="Agent OS" src="https //github.com/user attachments/assets/97ad4491 d199 4b9b 9482 ae710291dfb4" / Agents that build the way you would Agent OS helps you shape better specs, keeps agents aligned in a lightweight system that fits how you already build. Works alongside Claude Code, Cursor, Antigravity, and other AI tools. Any language, any framework. Core capabilities Discover Standards — Extract patterns and conventions from your codebase into documented standards Deploy Standards — Intelligently inject relevant standards based on what you're building Shape Spec — Create better plans that lead to better builds Index Standards — Keep your standards organized and discoverable Documentation & Installation Docs, installation, usage, & best practices 👉 It's all here Follow updates & releases Read the changelog Subscribe to be notified of major new releases o

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| CHANGELOG.md | file |
| commands | dir |
| config.yml | file |
| LICENSE | file |
| profiles | dir |
| README.md | file |
| scripts | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| .github/ | 8 |
| (root) | 5 |
| commands/ | 5 |
| scripts/ | 3 |
| profiles/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| commands/ | 5 | preferred |
| scripts/ | 3 | preferred |
| .github/ | 8 | large |
| commands/agent-os/ | 5 | large |
| .github/workflows/ | 2 | large |
| .github/ISSUE_TEMPLATE/ | 1 | large |
| profiles/ | 1 | large |
| profiles/default/ | 1 | large |
| profiles/default/global/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

_없음_

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.github/CONTRIBUTING.md`
- `README.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

- `.github/workflows/pr-decline.yml`
- `.github/workflows/stale.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 12 |
| .yml | 5 |
| .sh | 3 |
| .gitignore | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `commands/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `.github/ 내부 책임 분리`
- `commands/agent-os/ 내부 책임 분리`
- `.github/workflows/ 내부 책임 분리`

