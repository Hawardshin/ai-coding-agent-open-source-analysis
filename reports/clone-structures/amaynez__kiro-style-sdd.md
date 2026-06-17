# amaynez/kiro-style-sdd 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/amaynez__kiro-style-sdd |
| remote | https://github.com/amaynez/kiro-style-sdd |
| HEAD | be24eb6 (2026-05-13) Merge pull request #6 from amaynez/testing-improvement-native-test-runner-8290160101254076852 |
| branch | main |
| groups | spec-driven-20 |
| files | 26 |
| dirs | 12 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Spec Driven Development (SDD) Agent Skills`, `Overview of Skills`, `Supported Agents`, `Installation & Setup`, `NPM Installation`, `Manual Installation`, `Usage`

> Spec Driven Development (SDD) Agent Skills This methodology was inspired by how Kiro, the AI IDE from Amazon, does Spec Driven Development (SDD). This repository provides native "Agent Skills" to guide AI Agents through the Spec Driven Development (SDD) methodology. By leveraging these skills, you can predictably and systematically transform a rough feature idea into an actionable, test driven implementation. Overview of Skills The SDD methodology has been modernized into four distinct skills, accessible via slash commands in supported AI agents 1. /spec Transforms a rough feature idea into a structured requirements document using the EARS format. 2. /design Develops a comprehensive technical design document (architecture, data models, components) based on the approved requirements. 3. /plan Creates an actionable implementation plan, producing a task list optimized for AI coding agents. 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude | dir |
| .cursor | dir |
| .cursorrules | file |
| .kiro | dir |
| .skills | dir |
| LICENSE | file |
| package-lock.json | file |
| package.json | file |
| README.md | file |
| tests | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| .skills/ | 8 |
| (root) | 5 |
| .claude/ | 4 |
| .cursor/ | 4 |
| .kiro/ | 4 |
| tests/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| tests/ | 1 | preferred |
| .kiro/ | 4 | preferred |
| .skills/ | 8 | large |
| .claude/ | 4 | large |
| .claude/skills/ | 4 | large |
| .cursor/ | 4 | large |
| .cursor/rules/ | 4 | large |
| .kiro/skills/ | 4 | large |
| .skills/design/ | 2 | large |
| .skills/implement/ | 2 | large |
| .skills/plan/ | 2 | large |
| .skills/spec/ | 2 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `package.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | amaynez-sdd | test |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`

### 에이전트 지침 후보

- `.claude/skills/design.md`
- `.claude/skills/implement.md`
- `.claude/skills/plan.md`
- `.claude/skills/spec.md`
- `.cursor/rules/design.mdc`
- `.cursor/rules/implement.mdc`
- `.cursor/rules/plan.mdc`
- `.cursor/rules/spec.mdc`
- `.kiro/skills/design.md`
- `.kiro/skills/implement.md`
- `.kiro/skills/plan.md`
- `.kiro/skills/spec.md`
- `.skills/design/SKILL.md`
- `.skills/design/template.md`
- `.skills/implement/SKILL.md`
- `.skills/implement/template.md`
- `.skills/plan/SKILL.md`
- `.skills/plan/template.md`
- `.skills/spec/SKILL.md`
- `.skills/spec/template.md`
- `tests/skills.test.js`

### 스펙/템플릿/명령/스킬 후보

- `.claude/skills/design.md`
- `.claude/skills/implement.md`
- `.claude/skills/plan.md`
- `.claude/skills/spec.md`
- `.kiro/skills/design.md`
- `.kiro/skills/implement.md`
- `.kiro/skills/plan.md`
- `.kiro/skills/spec.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/skills.test.js`

### CI/Docker 후보

_없음_

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 17 |
| .mdc | 4 |
| .json | 2 |
| .cursorrules | 1 |
| .js | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `tests/ 내부 책임 분리`
- `.kiro/ 내부 책임 분리`
- `.skills/ 내부 책임 분리`
- `.claude/ 내부 책임 분리`
- `.claude/skills/ 내부 책임 분리`
- `.claude/skills/design.md 스펙/명령 의미`
- `.claude/skills/implement.md 스펙/명령 의미`
- `.claude/skills/plan.md 스펙/명령 의미`
- `.claude/skills/spec.md 스펙/명령 의미`
- `.kiro/skills/design.md 스펙/명령 의미`
- `package.json 실행 스크립트와 패키지 경계`

