# https-deeplearning-ai/sc-spec-driven-development-files 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/https-deeplearning-ai__sc-spec-driven-development-files |
| remote | https://github.com/https-deeplearning-ai/sc-spec-driven-development-files |
| HEAD | 4a9c2ac (2026-06-01) Enhance README with DeepLearning.AI resource links |
| branch | main |
| groups | spec-driven-20 |
| files | 332 |
| dirs | 101 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Spec-Driven Development with Agentic Coding Assistants`, `Other DeepLearning.AI Resources`, `How to use this repo`, `Video overview`, `Other directories`, `Prerequisites`

> Spec Driven Development with Agentic Coding Assistants This repository contains the companion code for the DeepLearning.AI Spec Driven Development course. Each video folder holds the complete project state you need to follow along with that video. Other DeepLearning.AI Resources mortar board Keep learning → Explore all DeepLearning.AI courses — taught by the people building the future of AI. Find your next one. computer Explore more course artifacts → Browse the DeepLearning.AI course artifacts repo to find notebooks, projects, and notes from other courses across the DeepLearning.AI library. How to use this repo The simplest way to take this course is to start at Video 5 and follow along with each video, building the project as you go. Each VideoNN folder contains a snapshot of the AgentClinic project as it should look at the start of that video. You don't need to copy these folders each

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .gitignore | file |
| example_specs | dir |
| prompts | dir |
| README.md | file |
| skills | dir |
| Video05_Creating_the_Constitution | dir |
| Video06_Feature_Specification | dir |
| Video07_Feature_Implementation | dir |
| Video08_Feature_Validation | dir |
| Video09_Project_Replanning | dir |
| Video10_The_second_feature_phase | dir |
| Video11_The_MVP | dir |
| Video12_Legacy_support | dir |
| Video13_Build_your_own_workflow | dir |
| Video14_Agents_replaceability | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| Video14_Agents_replaceability/ | 64 |
| Video13_Build_your_own_workflow/ | 59 |
| Video12_Legacy_support/ | 56 |
| Video11_The_MVP/ | 43 |
| Video10_The_second_feature_phase/ | 26 |
| Video08_Feature_Validation/ | 19 |
| Video09_Project_Replanning/ | 19 |
| Video07_Feature_Implementation/ | 13 |
| prompts/ | 10 |
| Video06_Feature_Specification/ | 10 |
| Video05_Creating_the_Constitution/ | 6 |
| skills/ | 3 |
| (root) | 2 |
| example_specs/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| skills/ | 3 | preferred |
| Video14_Agents_replaceability/ | 64 | large |
| Video13_Build_your_own_workflow/ | 59 | large |
| Video12_Legacy_support/ | 56 | large |
| Video11_The_MVP/ | 43 | large |
| Video13_Build_your_own_workflow/src/ | 38 | large |
| Video14_Agents_replaceability/src/ | 38 | large |
| Video12_Legacy_support/src/ | 33 | large |
| Video10_The_second_feature_phase/ | 26 | large |
| Video11_The_MVP/src/ | 20 | large |
| Video08_Feature_Validation/ | 19 | large |
| Video09_Project_Replanning/ | 19 | large |
| Video07_Feature_Implementation/ | 13 | large |
| Video13_Build_your_own_workflow/src/components/ | 13 | large |
| Video14_Agents_replaceability/src/components/ | 13 | large |
| Video13_Build_your_own_workflow/src/db/ | 12 | large |
| Video14_Agents_replaceability/src/db/ | 12 | large |
| Video12_Legacy_support/src/components/ | 11 | large |
| Video12_Legacy_support/src/db/ | 11 | large |
| Video06_Feature_Specification/ | 10 | large |
| prompts/ | 10 | large |
| Video11_The_MVP/specs/ | 9 | large |
| Video12_Legacy_support/specs/ | 9 | large |
| Video14_Agents_replaceability/specs/ | 9 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Video05_Creating_the_Constitution/package.json`
- `Video05_Creating_the_Constitution/tsconfig.json`
- `Video06_Feature_Specification/package.json`
- `Video06_Feature_Specification/tsconfig.json`
- `Video07_Feature_Implementation/package.json`
- `Video07_Feature_Implementation/tsconfig.json`
- `Video08_Feature_Validation/package.json`
- `Video08_Feature_Validation/tsconfig.json`
- `Video09_Project_Replanning/package.json`
- `Video09_Project_Replanning/tsconfig.json`
- `Video10_The_second_feature_phase/package.json`
- `Video10_The_second_feature_phase/tsconfig.json`
- `Video11_The_MVP/package.json`
- `Video11_The_MVP/tsconfig.json`
- `Video12_Legacy_support/package.json`
- `Video12_Legacy_support/tsconfig.json`
- `Video13_Build_your_own_workflow/package.json`
- `Video13_Build_your_own_workflow/tsconfig.json`
- `Video14_Agents_replaceability/package.json`
- `Video14_Agents_replaceability/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| Video05_Creating_the_Constitution/package.json | agentclinic | build |  |
| Video06_Feature_Specification/package.json | agentclinic | build |  |
| Video07_Feature_Implementation/package.json | agentclinic | build |  |
| Video08_Feature_Validation/package.json | agentclinic | build, dev, typecheck | @hono/node-server, hono |
| Video09_Project_Replanning/package.json | agentclinic | build, dev, typecheck | @hono/node-server, hono |
| Video10_The_second_feature_phase/package.json | agentclinic | build, dev, typecheck, test | @hono/node-server, hono |
| Video11_The_MVP/package.json | agentclinic | build, dev, typecheck, seed, test | @hono/node-server, better-sqlite3, hono |
| Video12_Legacy_support/package.json | agentclinic | build, dev, typecheck, seed, test | @hono/node-server, better-sqlite3, hono |
| Video13_Build_your_own_workflow/package.json | agentclinic | build, dev, typecheck, seed, test | @hono/node-server, better-sqlite3, hono |
| Video14_Agents_replaceability/package.json | agentclinic | build, dev, typecheck, seed, test | @hono/node-server, better-sqlite3, hono |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `Video05_Creating_the_Constitution/README.md`
- `Video06_Feature_Specification/README.md`
- `Video07_Feature_Implementation/README.md`
- `Video08_Feature_Validation/README.md`
- `Video09_Project_Replanning/README.md`
- `Video10_The_second_feature_phase/README.md`
- `Video11_The_MVP/README.md`
- `Video12_Legacy_support/README.md`
- `Video13_Build_your_own_workflow/README.md`
- `Video14_Agents_replaceability/README.md`

### 에이전트 지침 후보

- `Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md`
- `skills/changelog/SKILL.md`
- `skills/changelog/scripts/changelog.py`
- `skills/feature-spec/SKILL.md`

### 스펙/템플릿/명령/스킬 후보

- `Video06_Feature_Specification/specs/mission.md`
- `Video06_Feature_Specification/specs/roadmap.md`
- `Video06_Feature_Specification/specs/tech-stack.md`
- `Video07_Feature_Implementation/specs/2026-03-30-hello-hono/plan.md`
- `Video07_Feature_Implementation/specs/2026-03-30-hello-hono/requirements.md`
- `Video07_Feature_Implementation/specs/2026-03-30-hello-hono/validation.md`
- `Video07_Feature_Implementation/specs/mission.md`
- `Video07_Feature_Implementation/specs/roadmap.md`
- `Video07_Feature_Implementation/specs/tech-stack.md`
- `Video08_Feature_Validation/specs/2026-03-30-hello-hono/plan.md`
- `Video08_Feature_Validation/specs/2026-03-30-hello-hono/requirements.md`
- `Video08_Feature_Validation/specs/2026-03-30-hello-hono/validation.md`
- `Video08_Feature_Validation/specs/mission.md`
- `Video08_Feature_Validation/specs/roadmap.md`
- `Video08_Feature_Validation/specs/tech-stack.md`
- `Video09_Project_Replanning/specs/2026-03-30-hello-hono/plan.md`
- `Video09_Project_Replanning/specs/2026-03-30-hello-hono/requirements.md`
- `Video09_Project_Replanning/specs/2026-03-30-hello-hono/validation.md`
- `Video09_Project_Replanning/specs/mission.md`
- `Video09_Project_Replanning/specs/roadmap.md`
- `Video09_Project_Replanning/specs/tech-stack.md`
- `Video10_The_second_feature_phase/specs/2026-03-30-hello-hono/plan.md`
- `Video10_The_second_feature_phase/specs/2026-03-30-hello-hono/requirements.md`
- `Video10_The_second_feature_phase/specs/2026-03-30-hello-hono/validation.md`
- `Video10_The_second_feature_phase/specs/mission.md`
- `Video10_The_second_feature_phase/specs/roadmap.md`
- `Video10_The_second_feature_phase/specs/tech-stack.md`
- `Video11_The_MVP/specs/2026-03-30-hello-hono/plan.md`
- `Video11_The_MVP/specs/2026-03-30-hello-hono/requirements.md`
- `Video11_The_MVP/specs/2026-03-30-hello-hono/validation.md`
- `Video11_The_MVP/specs/2026-03-31-agents-ailments/plan.md`
- `Video11_The_MVP/specs/2026-03-31-agents-ailments/requirements.md`
- `Video11_The_MVP/specs/2026-03-31-agents-ailments/validation.md`
- `Video11_The_MVP/specs/mission.md`
- `Video11_The_MVP/specs/roadmap.md`
- `Video11_The_MVP/specs/tech-stack.md`
- `Video12_Legacy_support/specs/2026-03-31-agents-ailments/plan.md`
- `Video12_Legacy_support/specs/2026-03-31-agents-ailments/requirements.md`
- `Video12_Legacy_support/specs/2026-03-31-agents-ailments/validation.md`
- `Video12_Legacy_support/specs/2026-04-06-mvp/plan.md`
- `Video12_Legacy_support/specs/2026-04-06-mvp/requirements.md`
- `Video12_Legacy_support/specs/2026-04-06-mvp/validation.md`
- `Video12_Legacy_support/specs/mission.md`
- `Video12_Legacy_support/specs/roadmap.md`
- `Video12_Legacy_support/specs/tech-stack.md`
- `Video13_Build_your_own_workflow/specs/2026-04-06-feedback-form/plan.md`
- `Video13_Build_your_own_workflow/specs/2026-04-06-feedback-form/requirements.md`
- `Video13_Build_your_own_workflow/specs/2026-04-06-feedback-form/validation.md`
- `Video13_Build_your_own_workflow/specs/mission.md`
- `Video13_Build_your_own_workflow/specs/roadmap.md`
- `Video13_Build_your_own_workflow/specs/tech-stack.md`
- `Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md`
- `Video14_Agents_replaceability/specs/2026-04-06-feedback-form/plan.md`
- `Video14_Agents_replaceability/specs/2026-04-06-feedback-form/requirements.md`
- `Video14_Agents_replaceability/specs/2026-04-06-feedback-form/validation.md`
- `Video14_Agents_replaceability/specs/2026-04-07-about-us-content/plan.md`
- `Video14_Agents_replaceability/specs/2026-04-07-about-us-content/requirements.md`
- `Video14_Agents_replaceability/specs/2026-04-07-about-us-content/validation.md`
- `Video14_Agents_replaceability/specs/mission.md`
- `Video14_Agents_replaceability/specs/roadmap.md`
- `Video14_Agents_replaceability/specs/tech-stack.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `Video10_The_second_feature_phase/tests/app.test.tsx`
- `Video10_The_second_feature_phase/tests/components.test.tsx`
- `Video11_The_MVP/tests/app.test.tsx`
- `Video11_The_MVP/tests/components.test.tsx`
- `Video11_The_MVP/tests/db.test.ts`
- `Video12_Legacy_support/tests/app.test.tsx`
- `Video12_Legacy_support/tests/components.test.tsx`
- `Video12_Legacy_support/tests/db.test.ts`
- `Video13_Build_your_own_workflow/tests/app.test.tsx`
- `Video13_Build_your_own_workflow/tests/components.test.tsx`
- `Video13_Build_your_own_workflow/tests/db.test.ts`
- `Video14_Agents_replaceability/tests/app.test.tsx`
- `Video14_Agents_replaceability/tests/components.test.tsx`
- `Video14_Agents_replaceability/tests/db.test.ts`

### CI/Docker 후보

_없음_

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .tsx | 112 |
| .md | 109 |
| .ts | 35 |
| .json | 29 |
| .sql | 23 |
| .gitignore | 11 |
| .css | 7 |
| .py | 6 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `skills/ 내부 책임 분리`
- `Video14_Agents_replaceability/ 내부 책임 분리`
- `Video13_Build_your_own_workflow/ 내부 책임 분리`
- `Video12_Legacy_support/ 내부 책임 분리`
- `Video11_The_MVP/ 내부 책임 분리`
- `Video06_Feature_Specification/specs/mission.md 스펙/명령 의미`
- `Video06_Feature_Specification/specs/roadmap.md 스펙/명령 의미`
- `Video06_Feature_Specification/specs/tech-stack.md 스펙/명령 의미`
- `Video07_Feature_Implementation/specs/2026-03-30-hello-hono/plan.md 스펙/명령 의미`
- `Video07_Feature_Implementation/specs/2026-03-30-hello-hono/requirements.md 스펙/명령 의미`
- `Video05_Creating_the_Constitution/package.json 실행 스크립트와 패키지 경계`
- `Video05_Creating_the_Constitution/tsconfig.json 실행 스크립트와 패키지 경계`
- `Video06_Feature_Specification/package.json 실행 스크립트와 패키지 경계`
- `Video06_Feature_Specification/tsconfig.json 실행 스크립트와 패키지 경계`
- `Video07_Feature_Implementation/package.json 실행 스크립트와 패키지 경계`

