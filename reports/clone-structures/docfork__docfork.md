# docfork/docfork 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/docfork__docfork |
| remote | https://github.com/docfork/docfork.git |
| HEAD | 3cb4ba2 (2026-06-13) Update README with shutdown information for Docfork (#170) |
| branch | main |
| groups | previous-clone-inventory-107 |
| files | 149 |
| dirs | 44 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Without Docfork`, `With Docfork`, `Get Started`, `Your own docs`, `Teams`, `MCP Setup`, `Agent Rule`, `Docfork policy`, `FAQ`, `Docs`, `Community`, `Star History`, `License`

> <p align="center" <a href="https //docfork.com" <picture <source srcset="logo light.png" media="(prefers color scheme dark)" <source srcset="logo dark.png" media="(prefers color scheme light)" <img src="logo dark.png" alt="Docfork" height="40" / </picture </a </p [!CAUTION] Docfork has shut down as of June 14, 2026. The MCP server, CLI, and all hosted endpoints are offline and will not return. API keys no longer work, and npx dgrep setup will fail. Thank you to everyone who used the service. <p align="center" Up to date docs for AI coding agents.</p AI agents hallucinate APIs, bloat context with stale docs, and write code against outdated signatures. Docfork serves up to date documentation directly in Cursor, Claude Code, and Windsurf. Without Docfork With Docfork Get Started Installs the Docfork MCP server in your IDE. Detects your installed agents and writes the config file; sign in to

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude-plugin | dir |
| .cursor-plugin | dir |
| .dgrep | dir |
| .dockerignore | file |
| .github | dir |
| .gitignore | file |
| .npmrc | file |
| .prettierignore | file |
| .release-please-manifest.json | file |
| CLAUDE.md | file |
| CONTRIBUTING.md | file |
| demo.gif | file |
| demo.tape | file |
| eslint.config.mjs | file |
| LICENSE | file |
| logo_dark.png | file |
| logo_light.png | file |
| package.json | file |
| packages | dir |
| plugins | dir |
| pnpm-lock.yaml | file |
| pnpm-workspace.yaml | file |
| prettier.config.mjs | file |
| README.md | file |
| release-please-config.json | file |
| scripts | dir |
| SECURITY.md | file |
| turbo.json | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| packages/ | 104 |
| (root) | 21 |
| plugins/ | 16 |
| .github/ | 3 |
| .dgrep/ | 2 |
| .claude-plugin/ | 1 |
| .cursor-plugin/ | 1 |
| scripts/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| packages/ | 104 | preferred |
| scripts/ | 1 | preferred |
| plugins/ | 16 | preferred |
| packages/dgrep/ | 64 | large |
| packages/dgrep/src/ | 34 | large |
| packages/mcp/ | 23 | large |
| packages/dgrep/test/ | 20 | large |
| packages/sdk/ | 17 | large |
| packages/mcp/src/ | 11 | large |
| plugins/claude/ | 8 | large |
| plugins/claude/docfork/ | 8 | large |
| plugins/cursor/ | 8 | large |
| plugins/cursor/docfork/ | 8 | large |
| packages/sdk/src/ | 6 | large |
| .github/ | 3 | large |
| .github/workflows/ | 3 | large |
| .dgrep/ | 2 | large |
| .claude-plugin/ | 1 | large |
| .cursor-plugin/ | 1 | large |
| packages/dgrep/docs/ | 1 | large |
| packages/sdk/scripts/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `package.json`
- `packages/dgrep/package.json`
- `packages/dgrep/tsconfig.json`
- `packages/mcp/Dockerfile`
- `packages/mcp/package.json`
- `packages/mcp/tsconfig.json`
- `packages/sdk/package.json`
- `packages/sdk/tsconfig.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `turbo.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | docfork | preinstall, build, dev, start, start:stdio, lint, lint:check, format, format:check, typecheck, test, clean |  |
| packages/dgrep/package.json | dgrep | build, dev, typecheck, lint, lint:check, format, format:check, test, clean | smol-toml |
| packages/mcp/package.json | docfork | watch, inspect, dev, build, start, start:stdio, lint, lint:check, format, format:check, typecheck, test, clean, preversion | @modelcontextprotocol/inspector, @modelcontextprotocol/sdk, dotenv, jose, zod |
| packages/sdk/package.json | @docfork/sdk | generate, build, typecheck, lint, lint:check, format, format:check, test, clean, preversion, prepublishOnly |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `packages/dgrep/CONTRIBUTING.md`
- `packages/dgrep/README.md`
- `packages/dgrep/docs/testing-strategy.md`
- `packages/mcp/README.md`
- `packages/sdk/README.md`
- `plugins/claude/docfork/README.md`
- `plugins/cursor/docfork/README.md`

### 에이전트 지침 후보

- `CLAUDE.md`
- `packages/mcp/.npmrc`
- `packages/mcp/.prettierignore`
- `packages/mcp/CHANGELOG.md`
- `packages/mcp/Dockerfile`
- `packages/mcp/LICENSE`
- `packages/mcp/README.md`
- `packages/mcp/gemini-extension.json`
- `packages/mcp/glama.json`
- `packages/mcp/package-lock.json`
- `packages/mcp/package.json`
- `packages/mcp/server.json`
- `packages/mcp/src/api/headers.ts`
- `packages/mcp/src/api/index.ts`
- `packages/mcp/src/api/read.ts`
- `packages/mcp/src/api/search.ts`
- `packages/mcp/src/config.ts`
- `packages/mcp/src/index.ts`
- `packages/mcp/src/lib/analytics.ts`
- `packages/mcp/src/lib/constants.ts`
- `packages/mcp/src/lib/encryption.ts`
- `packages/mcp/src/lib/jwt.ts`
- `packages/mcp/src/transport.ts`
- `packages/mcp/tsconfig.json`
- `plugins/claude/docfork/.mcp.json`
- `plugins/claude/docfork/skills/docfork-docs/SKILL.md`
- `plugins/cursor/docfork/.mcp.json`
- `plugins/cursor/docfork/skills/docfork-docs/SKILL.md`

### 스펙/템플릿/명령/스킬 후보

- `packages/dgrep/src/commands/add.ts`
- `packages/dgrep/src/commands/color.ts`
- `packages/dgrep/src/commands/doctor.ts`
- `packages/dgrep/src/commands/init.ts`
- `packages/dgrep/src/commands/list.ts`
- `packages/dgrep/src/commands/login.ts`
- `packages/dgrep/src/commands/logout.ts`
- `packages/dgrep/src/commands/read.ts`
- `packages/dgrep/src/commands/remove.ts`
- `packages/dgrep/src/commands/search.ts`
- `packages/dgrep/src/commands/setup.ts`
- `packages/dgrep/src/commands/status.ts`
- `packages/dgrep/src/commands/telemetry.ts`
- `packages/dgrep/src/commands/wizard.ts`
- `packages/dgrep/test/commands/add.test.ts`
- `packages/dgrep/test/commands/init.test.ts`
- `packages/dgrep/test/commands/search.test.ts`
- `packages/dgrep/test/commands/telemetry.test.ts`
- `packages/dgrep/test/commands/wizard.test.ts`
- `plugins/claude/docfork/commands/docs.md`
- `plugins/claude/docfork/skills/docfork-docs/SKILL.md`
- `plugins/cursor/docfork/commands/docs.md`
- `plugins/cursor/docfork/skills/docfork-docs/SKILL.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `packages/dgrep/test/commands/add.test.ts`
- `packages/dgrep/test/commands/init.test.ts`
- `packages/dgrep/test/commands/search.test.ts`
- `packages/dgrep/test/commands/telemetry.test.ts`
- `packages/dgrep/test/commands/wizard.test.ts`
- `packages/dgrep/test/lib/agents.test.ts`
- `packages/dgrep/test/lib/api-client.test.ts`
- `packages/dgrep/test/lib/auth.test.ts`
- `packages/dgrep/test/lib/config.test.ts`
- `packages/dgrep/test/lib/dep-filter.test.ts`
- `packages/dgrep/test/lib/detect-deps.test.ts`
- `packages/dgrep/test/lib/errors.test.ts`
- `packages/dgrep/test/lib/project-config.test.ts`
- `packages/dgrep/test/lib/providers.test.ts`
- `packages/dgrep/test/lib/resolve-libraries.test.ts`
- `packages/dgrep/test/lib/telemetry/events.test.ts`
- `packages/dgrep/test/lib/telemetry/optout.test.ts`
- `packages/dgrep/test/lib/telemetry/transport.test.ts`
- `packages/dgrep/test/mocks/handlers.ts`
- `packages/dgrep/test/setup.ts`
- `packages/sdk/smoke.test.ts`
- `packages/sdk/src/errors.test.ts`
- `packages/sdk/src/pagination.test.ts`

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `.github/workflows/release-please.yml`
- `.github/workflows/release.yml`
- `packages/mcp/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 75 |
| .json | 21 |
| .md | 21 |
| .gitignore | 4 |
| .mjs | 3 |
| .prettierignore | 3 |
| .yaml | 3 |
| .yml | 3 |
| .mdc | 2 |
| .npmrc | 2 |
| .png | 2 |
| .svg | 2 |
| license | 2 |
| .dockerignore | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `packages/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `plugins/ 내부 책임 분리`
- `packages/dgrep/ 내부 책임 분리`
- `packages/dgrep/src/ 내부 책임 분리`
- `packages/dgrep/src/commands/add.ts 스펙/명령 의미`
- `packages/dgrep/src/commands/color.ts 스펙/명령 의미`
- `packages/dgrep/src/commands/doctor.ts 스펙/명령 의미`
- `packages/dgrep/src/commands/init.ts 스펙/명령 의미`
- `packages/dgrep/src/commands/list.ts 스펙/명령 의미`
- `package.json 실행 스크립트와 패키지 경계`
- `packages/dgrep/package.json 실행 스크립트와 패키지 경계`
- `packages/dgrep/tsconfig.json 실행 스크립트와 패키지 경계`
- `packages/mcp/Dockerfile 실행 스크립트와 패키지 경계`
- `packages/mcp/package.json 실행 스크립트와 패키지 경계`

