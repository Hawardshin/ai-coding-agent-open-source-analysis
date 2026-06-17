# numman-ali/openskills 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/numman-ali__openskills |
| remote | https://github.com/numman-ali/openskills.git |
| HEAD | 57d933a (2026-01-18) chore: added claude md |
| branch | main |
| groups | previous-clone-inventory-107 |
| files | 94 |
| dirs | 22 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `✨ What Is OpenSkills?`, `🚀 Quick Start`, `✅ Why OpenSkills`, `🧠 How It Works`, `Claude Code System Prompt (Skills)`, `OpenSkills: Same Format, Universal Loader`, `Side-by-Side`, `Available Skills`, `🔧 Install Skills`, `From Anthropic Marketplace`, `From Any GitHub Repo`, `From a Local Path`, `From Private Git Repos`, `🌍 Universal Mode (Multi-Agent Setups)`, `🧰 Commands`, `Flags`, `🧬 The SKILL.md Format`, `PDF Skill Instructions`

> <div align="center" <img src="./assets/logo.svg" alt="OpenSkills" width="420" / <br/ <br/ Universal skills loader for AI coding agents One CLI. Every agent. Same format as Claude Code. Quick Start · How It Works · Commands · Create Skills · FAQ </div ✨ What Is OpenSkills? OpenSkills brings Anthropic's skills system to every AI coding agent — Claude Code, Cursor, Windsurf, Aider, Codex, and anything that can read AGENTS.md . Think of it as the universal installer for SKILL.md. 🚀 Quick Start By default, installs are project local ( ./.claude/skills , or ./.agent/skills with universal ). Use global for ~/.claude/skills . ✅ Why OpenSkills Exact Claude Code compatibility — same prompt format, same marketplace, same folder structure Universal — works with Claude Code, Cursor, Windsurf, Aider, Codex, and more Progressive disclosure — load skills only when needed (keeps context clean) Repo frie

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| .npmignore | file |
| AGENTS.md | file |
| assets | dir |
| CHANGELOG.md | file |
| CLAUDE.md | file |
| CONTRIBUTING.md | file |
| examples | dir |
| LICENSE | file |
| package-lock.json | file |
| package.json | file |
| README.md | file |
| SECURITY.md | file |
| src | dir |
| tests | dir |
| tsconfig.json | file |
| tsup.config.ts | file |
| vitest.config.ts | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| .github/ | 52 |
| src/ | 16 |
| (root) | 14 |
| tests/ | 9 |
| examples/ | 2 |
| assets/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 16 | preferred |
| examples/ | 2 | preferred |
| tests/ | 9 | preferred |
| .github/ | 52 | large |
| .github/maintainer/ | 48 | large |
| .github/maintainer/notes/ | 32 | large |
| src/commands/ | 7 | large |
| src/utils/ | 7 | large |
| tests/utils/ | 5 | large |
| .github/maintainer/work/ | 4 | large |
| .github/ISSUE_TEMPLATE/ | 3 | large |
| tests/commands/ | 3 | large |
| .github/maintainer/index/ | 2 | large |
| examples/my-first-skill/ | 2 | large |
| .github/workflows/ | 1 | large |
| assets/ | 1 | large |
| examples/my-first-skill/references/ | 1 | large |
| tests/integration/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `package.json`
- `tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | openskills | build, dev, test, test:watch, test:coverage, typecheck, prepublishOnly | @inquirer/prompts, chalk, commander, ora |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`

### 에이전트 지침 후보

- `AGENTS.md`
- `CLAUDE.md`
- `examples/my-first-skill/SKILL.md`
- `examples/my-first-skill/references/skill-format.md`
- `src/utils/marketplace-skills.ts`
- `src/utils/skill-metadata.ts`
- `src/utils/skill-names.ts`
- `src/utils/skills.ts`
- `tests/utils/skill-metadata.test.ts`
- `tests/utils/skill-names.test.ts`
- `tests/utils/skills.test.ts`

### 스펙/템플릿/명령/스킬 후보

- `src/commands/install.ts`
- `src/commands/list.ts`
- `src/commands/manage.ts`
- `src/commands/read.ts`
- `src/commands/remove.ts`
- `src/commands/sync.ts`
- `src/commands/update.ts`
- `tests/commands/install.test.ts`
- `tests/commands/sync.test.ts`
- `tests/commands/update.test.ts`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/commands/install.test.ts`
- `tests/commands/sync.test.ts`
- `tests/commands/update.test.ts`
- `tests/integration/e2e.test.ts`
- `tests/utils/dirs.test.ts`
- `tests/utils/skill-metadata.test.ts`
- `tests/utils/skill-names.test.ts`
- `tests/utils/skills.test.ts`
- `tests/utils/yaml.test.ts`

### CI/Docker 후보

- `.github/workflows/ci.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 53 |
| .ts | 27 |
| .json | 8 |
| .yml | 2 |
| .gitignore | 1 |
| .npmignore | 1 |
| .svg | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `.github/ 내부 책임 분리`
- `.github/maintainer/ 내부 책임 분리`
- `src/commands/install.ts 스펙/명령 의미`
- `src/commands/list.ts 스펙/명령 의미`
- `src/commands/manage.ts 스펙/명령 의미`
- `src/commands/read.ts 스펙/명령 의미`
- `src/commands/remove.ts 스펙/명령 의미`
- `package.json 실행 스크립트와 패키지 경계`
- `tsconfig.json 실행 스크립트와 패키지 경계`

