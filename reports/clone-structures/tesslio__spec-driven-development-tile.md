# tesslio/spec-driven-development-tile 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/tesslio__spec-driven-development-tile |
| remote | https://github.com/tesslio/spec-driven-development-tile |
| HEAD | b8fdff7 (2026-03-30) Merge pull request #7 from tesslio/chore/bump-v2.0.1 |
| branch | main |
| groups | spec-driven-20 |
| files | 37 |
| dirs | 20 |
| stack | unknown/mixed |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Spec-Driven Development Tile`, `What This Tile Does`, `Installation`, `Using Tessl CLI`, `Using npx (no installation required)`, `Usage`, `What's in This Tile`, `Skills`, `Rules`, `Docs`, `Scripts`, `Evals`, `CI`, `The Spec Format`, `User Authentication`, `Error Handling`, `Why Spec-Driven Development?`, `How It Works`

> Spec Driven Development Tile This repository contains the source code of the "Spec Driven Development" tile released by Tessl. Published versions https //tessl.io/registry/tessl labs/spec driven development/ Source code https //github.com/tesslio/spec driven development tile/ A methodology tile that teaches AI coding agents to gather requirements, write specifications, and get approval before writing code. What This Tile Does When installed, this tile changes how your AI coding agent approaches tasks. Instead of diving straight into code, the agent will 1. Ask clarifying questions — Interview you about requirements, one question at a time 2. Write specs first — Create structured specification documents before any implementation 3. Wait for your approval — Pause for confirmation that the specs capture your intent 4. Implement with guardrails — Build against the approved specs, then verify

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| docs | dir |
| evals | dir |
| LICENSE | file |
| Makefile | file |
| README.md | file |
| rules | dir |
| scripts | dir |
| skills | dir |
| tile.json | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| evals/ | 18 |
| (root) | 5 |
| skills/ | 4 |
| docs/ | 3 |
| rules/ | 3 |
| .github/ | 2 |
| scripts/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 3 | preferred |
| skills/ | 4 | preferred |
| scripts/ | 2 | preferred |
| evals/ | 18 | large |
| rules/ | 3 | large |
| .github/ | 2 | large |
| .github/workflows/ | 2 | large |
| evals/one-question-enforcement/ | 2 | large |
| evals/requirements-gap-analysis-from-existing-specs/ | 2 | large |
| evals/skip-spec-pushback/ | 2 | large |
| evals/spec-authoring-structure-and-format/ | 2 | large |
| evals/spec-drift-after-refactor/ | 2 | large |
| evals/spec-from-vague-request/ | 2 | large |
| evals/spec-update-for-new-requirement/ | 2 | large |
| evals/trivial-change-exception/ | 2 | large |
| evals/work-review-with-discovered-requirements/ | 2 | large |
| skills/requirement-gathering/ | 1 | large |
| skills/spec-verification/ | 1 | large |
| skills/spec-writer/ | 1 | large |
| skills/work-review/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

_없음_

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/index.md`
- `docs/spec-format.md`
- `docs/spec-styleguide.md`

### 에이전트 지침 후보

- `skills/requirement-gathering/SKILL.md`
- `skills/spec-verification/SKILL.md`
- `skills/spec-writer/SKILL.md`
- `skills/work-review/SKILL.md`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

- `.github/workflows/ci.yaml`
- `.github/workflows/publish.yaml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 20 |
| .json | 10 |
| .sh | 2 |
| .yaml | 2 |
| .gitignore | 1 |
| license | 1 |
| makefile | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `skills/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `evals/ 내부 책임 분리`
- `rules/ 내부 책임 분리`

