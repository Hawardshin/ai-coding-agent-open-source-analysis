# FredAntB/Spec-Driven-Development 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/FredAntB__Spec-Driven-Development |
| remote | https://github.com/FredAntB/Spec-Driven-Development |
| HEAD | 7296108 (2026-05-22) Update README with new assertion and test counts |
| branch | main |
| groups | spec-driven-20 |
| files | 33 |
| dirs | 11 |
| stack | unknown/mixed |

## 구조 해석

- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `spec-driven-development`, `The problem this solves`, `Quick start`, `Installation`, `Claude.ai / Claude desktop app (Chat tab)`, `Claude Code (Code tab)`, `What you get`, `For a new project (greenfield)`, `Functional Requirements`, `Tasks`, `Phase 2: Core endpoints`, `For an existing codebase (retrofit)`, `For cross-AI teams`, `Supported AI tools`, `The Universal Instruction Block`, `Test suite & CI`, `GitHub Actions workflow (`.github/workflows/ci.yml`)`, `Running locally`

> spec driven development Claude, Cursor, and Copilot all read the same plan before touching your code. A Claude skill that writes your specs before you write code — interviews you, generates requirements.md , design.md , and tasks.md , then creates matching config files for every AI tool you use so they can't contradict each other. The problem this solves You open Claude Code and ask it to build a feature. An hour later it's done something technically impressive that isn't quite what you wanted. You ask Cursor to fix it. It contradicts what Claude Code did. You ask Copilot to clean up. It invents a third interpretation. The root cause is always the same your AI agents have no shared source of truth. They fill every gap with their own assumptions. This skill fixes that by creating three files before any code is written File Answers requirements.md What the system must do design.md How it w

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| beta | dir |
| CLAUDE.md | file |
| LICENSE | file |
| phase2a | dir |
| phase2b | dir |
| phase2c | dir |
| README.md | file |
| references | dir |
| SKILL.md | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| phase2c/ | 16 |
| (root) | 4 |
| beta/ | 3 |
| phase2a/ | 3 |
| phase2b/ | 3 |
| references/ | 3 |
| .github/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| phase2c/ | 16 | large |
| phase2c/flow_a/ | 5 | large |
| phase2c/flow_c/ | 4 | large |
| beta/ | 3 | large |
| phase2a/ | 3 | large |
| phase2b/ | 3 | large |
| phase2c/flow_b/ | 3 | large |
| references/ | 3 | large |
| .github/ | 1 | large |
| .github/workflows/ | 1 | large |
| phase2c/flow_c/.github/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

_없음_

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`

### 에이전트 지침 후보

- `CLAUDE.md`
- `phase2c/flow_a/CLAUDE.md`
- `phase2c/flow_c/.github/copilot-instructions.md`
- `phase2c/flow_c/CLAUDE.md`

### 스펙/템플릿/명령/스킬 후보

- `phase2c/flow_a/design.md`
- `phase2c/flow_a/requirements.md`
- `phase2c/flow_a/tasks.md`
- `phase2c/flow_b/design.md`
- `phase2c/flow_b/requirements.md`
- `phase2c/flow_b/tasks.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

- `.github/workflows/ci.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 26 |
| .cursorrules | 2 |
| .py | 2 |
| .windsurfrules | 1 |
| .yml | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `phase2c/ 내부 책임 분리`
- `phase2c/flow_a/ 내부 책임 분리`
- `phase2c/flow_c/ 내부 책임 분리`
- `beta/ 내부 책임 분리`
- `phase2a/ 내부 책임 분리`
- `phase2c/flow_a/design.md 스펙/명령 의미`
- `phase2c/flow_a/requirements.md 스펙/명령 의미`
- `phase2c/flow_a/tasks.md 스펙/명령 의미`
- `phase2c/flow_b/design.md 스펙/명령 의미`
- `phase2c/flow_b/requirements.md 스펙/명령 의미`

