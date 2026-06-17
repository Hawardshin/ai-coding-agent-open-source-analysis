# vercel-labs/opensrc 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/vercel-labs__opensrc |
| remote | https://github.com/vercel-labs/opensrc.git |
| HEAD | 2efd74e (2026-04-30) Document fetch command, fix search index, add type-check CI, structured error handling (#56) |
| branch | main |
| groups | previous-clone-inventory-107 |
| files | 84 |
| dirs | 32 |
| stack | Node/TypeScript/JavaScript, Rust |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `opensrc`, `Quick Start`, `Search a package's source`, `Read a specific file`, `Works with any registry`, `Packages`, `Development`, `CLI (Rust)`, `Docs (Next.js)`, `License`

> opensrc Give coding agents access to any package's source code. Quick Start opensrc path fetches on first use, then returns the cached path instantly. See the CLI readme for full usage. Packages Package Description opensrc CLI — fetch and cache source code from npm, PyPI, crates.io, and GitHub @opensrc/docs Documentation site Development This is a Turborepo monorepo using pnpm workspaces. CLI (Rust) Docs (Next.js) License Apache 2.0

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| AGENTS.md | file |
| apps | dir |
| CHANGELOG.md | file |
| LICENSE | file |
| package.json | file |
| packages | dir |
| pnpm-lock.yaml | file |
| pnpm-workspace.yaml | file |
| README.md | file |
| skills | dir |
| turbo.json | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| apps/ | 42 |
| packages/ | 30 |
| (root) | 9 |
| .github/ | 2 |
| skills/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| apps/ | 42 | preferred |
| packages/ | 30 | preferred |
| skills/ | 1 | preferred |
| apps/docs/ | 42 | large |
| apps/docs/src/ | 35 | large |
| packages/opensrc/ | 30 | large |
| packages/opensrc/cli/ | 23 | large |
| packages/opensrc/scripts/ | 4 | large |
| .github/ | 2 | large |
| .github/workflows/ | 2 | large |
| apps/docs/public/ | 2 | large |
| packages/opensrc/bin/ | 1 | large |
| skills/opensrc/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `apps/docs/package.json`
- `apps/docs/tsconfig.json`
- `package.json`
- `packages/opensrc/cli/Cargo.toml`
- `packages/opensrc/package.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `turbo.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| apps/docs/package.json | @opensrc/docs | dev, build, start, type-check | @ai-sdk/react, @mdx-js/loader, @mdx-js/react, @next/mdx, @upstash/ratelimit, @upstash/redis, ai, bash-tool, clsx, geist, just-bash, next, next-themes, radix-ui |
| package.json | opensrc-monorepo | build, dev, test, lint, lint:fix, type-check, format, format:check |  |
| packages/opensrc/package.json | opensrc | version, version:sync, version:check, build:native, build:native:debug, postinstall, test, format, format:check, lint |  |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| packages/opensrc/cli/Cargo.toml | opensrc | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `apps/docs/.env.example`
- `apps/docs/next.config.mjs`
- `apps/docs/package.json`
- `apps/docs/postcss.config.mjs`
- `apps/docs/public/Geist-Regular.ttf`
- `apps/docs/public/GeistPixel-Square.ttf`
- `apps/docs/src/app/api/docs-chat/route.ts`
- `apps/docs/src/app/api/search/route.ts`
- `apps/docs/src/app/auth/layout.tsx`
- `apps/docs/src/app/auth/page.mdx`
- `apps/docs/src/app/commands/layout.tsx`
- `apps/docs/src/app/commands/page.mdx`
- `apps/docs/src/app/favicon.ico`
- `apps/docs/src/app/globals.css`
- `apps/docs/src/app/how-it-works/layout.tsx`
- `apps/docs/src/app/how-it-works/page.mdx`
- `apps/docs/src/app/layout.tsx`
- `apps/docs/src/app/og/[...slug]/route.tsx`
- `apps/docs/src/app/og/og-image.tsx`
- `apps/docs/src/app/og/route.tsx`
- `apps/docs/src/app/page.mdx`
- `apps/docs/src/app/registries/layout.tsx`
- `apps/docs/src/app/registries/page.mdx`
- `apps/docs/src/components/code.tsx`
- `apps/docs/src/components/docs-chat.tsx`
- `apps/docs/src/components/docs-mobile-nav.tsx`
- `apps/docs/src/components/docs-nav.tsx`
- `apps/docs/src/components/search.tsx`
- `apps/docs/src/components/theme-provider.tsx`
- `apps/docs/src/components/theme-toggle.tsx`
- `apps/docs/src/components/ui/dialog.tsx`
- `apps/docs/src/components/ui/sheet.tsx`
- `apps/docs/src/lib/docs-navigation.ts`
- `apps/docs/src/lib/github.ts`
- `apps/docs/src/lib/mdx-to-markdown.ts`
- `apps/docs/src/lib/page-metadata.ts`
- `apps/docs/src/lib/page-titles.ts`
- `apps/docs/src/lib/rate-limit.ts`
- `apps/docs/src/lib/search-index.ts`
- `apps/docs/src/lib/utils.ts`
- `apps/docs/src/mdx-components.tsx`
- `apps/docs/tsconfig.json`
- `packages/opensrc/README.md`

### 에이전트 지침 후보

- `AGENTS.md`
- `skills/opensrc/SKILL.md`

### 스펙/템플릿/명령/스킬 후보

- `apps/docs/src/app/commands/layout.tsx`
- `apps/docs/src/app/commands/page.mdx`
- `packages/opensrc/cli/src/commands/clean.rs`
- `packages/opensrc/cli/src/commands/fetch.rs`
- `packages/opensrc/cli/src/commands/list.rs`
- `packages/opensrc/cli/src/commands/mod.rs`
- `packages/opensrc/cli/src/commands/path.rs`
- `packages/opensrc/cli/src/commands/remove.rs`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `packages/opensrc/cli/tests/fixtures/pnpm-v9-workspace.yaml`
- `packages/opensrc/cli/tests/fixtures/yarn-berry.lock`
- `packages/opensrc/cli/tests/fixtures/yarn-v1.lock`

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `.github/workflows/release.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .rs | 18 |
| .tsx | 18 |
| .ts | 10 |
| .js | 5 |
| .json | 5 |
| .md | 5 |
| .mdx | 5 |
| .lock | 3 |
| .yaml | 3 |
| .mjs | 2 |
| .ttf | 2 |
| .yml | 2 |
| .css | 1 |
| .example | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `apps/ 내부 책임 분리`
- `packages/ 내부 책임 분리`
- `skills/ 내부 책임 분리`
- `apps/docs/ 내부 책임 분리`
- `apps/docs/src/ 내부 책임 분리`
- `apps/docs/src/app/commands/layout.tsx 스펙/명령 의미`
- `apps/docs/src/app/commands/page.mdx 스펙/명령 의미`
- `packages/opensrc/cli/src/commands/clean.rs 스펙/명령 의미`
- `packages/opensrc/cli/src/commands/fetch.rs 스펙/명령 의미`
- `packages/opensrc/cli/src/commands/list.rs 스펙/명령 의미`
- `apps/docs/package.json 실행 스크립트와 패키지 경계`
- `apps/docs/tsconfig.json 실행 스크립트와 패키지 경계`
- `package.json 실행 스크립트와 패키지 경계`
- `packages/opensrc/cli/Cargo.toml 실행 스크립트와 패키지 경계`
- `packages/opensrc/package.json 실행 스크립트와 패키지 경계`

