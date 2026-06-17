# mreferre/ralph-loop-kiro-specs 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/mreferre__ralph-loop-kiro-specs |
| remote | https://github.com/mreferre/ralph-loop-kiro-specs |
| HEAD | 2685064 (2026-02-13) Added a dashboard output example |
| branch | main |
| groups | spec-driven-20 |
| files | 5 |
| dirs | 1 |
| stack | unknown/mixed |

## 구조 해석

- 루트 파일과 manifest 중심의 얕은 구조이며, README와 주요 manifest부터 읽어야 한다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Ralph Loop for Kiro Specs`, `Dashboard Example`, `What is the Ralph Loop?`, `What are Kiro Specs?`, `How It Works`, `Phase 1: Load Context`, `Phase 2: Pick ONE Task`, `Phase 3: Understand Before Implementing`, `Phase 4: Implement`, `Phase 5: Verify Exit Criteria`, `Phase 6: Update Tracking`, `The Self-Correction System`, `Codebase Patterns`, `Completion and Summary`, `Prerequisites`, `Project Structure`, `Usage`, `Example`

> This README was written by Kiro. Ralph Loop for Kiro Specs Ralph Loop is an automated, iterative agent runner that drives spec based development in Kiro. It wraps the kiro cli in a bash loop, feeding it a carefully engineered prompt that turns Kiro into a disciplined, self correcting implementation agent — one that picks up tasks from a spec, implements them, verifies its own work, and learns from its mistakes across iterations. Dashboard Example When all tasks are complete, Ralph generates a self contained summary.html dashboard What is the Ralph Loop? Most AI coding workflows are one shot you give the agent a prompt, it produces code, and you manually review and iterate. The Ralph Loop flips this model. Instead of a single prompt response cycle, Ralph runs Kiro repeatedly in a loop — each iteration picks up exactly one task from a structured task list, implements it fully, verifies it 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| images | dir |
| LICENSE | file |
| ralph-loop-kiro-specs-prompt.md | file |
| ralph-loop-kiro-specs-script.sh | file |
| README.md | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| (root) | 4 |
| images/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| images/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

_없음_

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

_없음_

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 2 |
| .png | 1 |
| .sh | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `images/ 내부 책임 분리`

