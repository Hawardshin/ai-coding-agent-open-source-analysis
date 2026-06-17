# openai/codex-plugin-cc 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/openai__codex-plugin-cc |
| remote | https://github.com/openai/codex-plugin-cc |
| HEAD | 807e03a (2026-04-18) fix: bump plugin version to 1.0.4 (#244) |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 61 |
| dirs | 20 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Codex plugin for Claude Code`, `What You Get`, `Requirements`, `Install`, `Usage`, ``/codex:review``, ``/codex:adversarial-review``, ``/codex:rescue``, ``/codex:status``, ``/codex:result``, ``/codex:cancel``, ``/codex:setup``, `Typical Flows`, `Review Before Shipping`, `Hand A Problem To Codex`, `Start Something Long-Running`, `Codex Integration`, `Common Configurations`

> Codex plugin for Claude Code Use Codex from inside Claude Code for code reviews or to delegate tasks to Codex. This plugin is for Claude Code users who want an easy way to start using Codex from the workflow they already have. <video src="./docs/plugin demo.webm" controls muted playsinline autoplay </video What You Get /codex review for a normal read only Codex review /codex adversarial review for a steerable challenge review /codex rescue , /codex status , /codex result , and /codex cancel to delegate work and manage background jobs Requirements ChatGPT subscription (incl. Free) or OpenAI API key. Usage will contribute to your Codex usage limits. Learn more. Node.js 18.18 or later Install Add the marketplace in Claude Code Install the plugin Reload plugins Then run /codex setup will tell you whether Codex is ready. If Codex is missing and npm is available, it can offer to install Codex 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude-plugin | dir |
| .github | dir |
| .gitignore | file |
| LICENSE | file |
| NOTICE | file |
| package-lock.json | file |
| package.json | file |
| plugins | dir |
| README.md | file |
| scripts | dir |
| tests | dir |
| tsconfig.app-server.json | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| plugins/ | 41 |
| tests/ | 10 |
| (root) | 7 |
| .claude-plugin/ | 1 |
| .github/ | 1 |
| scripts/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| tests/ | 10 | preferred |
| scripts/ | 1 | preferred |
| plugins/ | 41 | preferred |
| plugins/codex/ | 41 | large |
| plugins/codex/scripts/ | 19 | large |
| plugins/codex/commands/ | 7 | large |
| plugins/codex/skills/ | 6 | large |
| plugins/codex/prompts/ | 2 | large |
| .claude-plugin/ | 1 | large |
| .github/ | 1 | large |
| .github/workflows/ | 1 | large |
| plugins/codex/.claude-plugin/ | 1 | large |
| plugins/codex/agents/ | 1 | large |
| plugins/codex/hooks/ | 1 | large |
| plugins/codex/schemas/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `package.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | @openai/codex-plugin-cc | bump-version, check-version, prebuild, build, test |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`

### 에이전트 지침 후보

- `plugins/codex/skills/codex-cli-runtime/SKILL.md`
- `plugins/codex/skills/codex-result-handling/SKILL.md`
- `plugins/codex/skills/gpt-5-4-prompting/SKILL.md`
- `plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-antipatterns.md`
- `plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-recipes.md`
- `plugins/codex/skills/gpt-5-4-prompting/references/prompt-blocks.md`

### 스펙/템플릿/명령/스킬 후보

- `plugins/codex/commands/adversarial-review.md`
- `plugins/codex/commands/cancel.md`
- `plugins/codex/commands/rescue.md`
- `plugins/codex/commands/result.md`
- `plugins/codex/commands/review.md`
- `plugins/codex/commands/setup.md`
- `plugins/codex/commands/status.md`
- `plugins/codex/skills/codex-cli-runtime/SKILL.md`
- `plugins/codex/skills/codex-result-handling/SKILL.md`
- `plugins/codex/skills/gpt-5-4-prompting/SKILL.md`
- `plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-antipatterns.md`
- `plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-recipes.md`
- `plugins/codex/skills/gpt-5-4-prompting/references/prompt-blocks.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/broker-endpoint.test.mjs`
- `tests/bump-version.test.mjs`
- `tests/commands.test.mjs`
- `tests/fake-codex-fixture.mjs`
- `tests/git.test.mjs`
- `tests/helpers.mjs`
- `tests/process.test.mjs`
- `tests/render.test.mjs`
- `tests/runtime.test.mjs`
- `tests/state.test.mjs`

### CI/Docker 후보

- `.github/workflows/pull-request-ci.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .mjs | 29 |
| .md | 18 |
| .json | 7 |
| license | 2 |
| notice | 2 |
| .gitignore | 1 |
| .ts | 1 |
| .yml | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `plugins/ 내부 책임 분리`
- `plugins/codex/ 내부 책임 분리`
- `plugins/codex/scripts/ 내부 책임 분리`
- `plugins/codex/commands/adversarial-review.md 스펙/명령 의미`
- `plugins/codex/commands/cancel.md 스펙/명령 의미`
- `plugins/codex/commands/rescue.md 스펙/명령 의미`
- `plugins/codex/commands/result.md 스펙/명령 의미`
- `plugins/codex/commands/review.md 스펙/명령 의미`
- `package.json 실행 스크립트와 패키지 경계`

