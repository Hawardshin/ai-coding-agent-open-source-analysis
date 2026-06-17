# otomata-tech/memento-core 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/otomata-tech__memento-core |
| remote | https://github.com/otomata-tech/memento-core |
| HEAD | 037a9d7 (2026-06-18) Memento — public core (initial release) |
| branch | master |
| groups | llm-wiki-100 |
| files | 141 |
| dirs | 24 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Memento`, `What's in this repo`, `Read in order`, `Quickstart (local)`, `1. Schema`, `2. Edge functions (MCP + API) locally`, `3. Viewer`, `Status`

> Memento Memento mori — note everything. A structured, sourced, living, auditable knowledge substrate, consumed by agents via MCP . Where a RAG stores a bag of documents, Memento represents know how typed blocks, sourced at fine grain, linked, kept current by a propose validate loop under human control. Hosted mento.cc — viewer + MCP + OAuth (alpha, invite only). License Apache 2.0. What's in this repo Path What supabase/functions/ Edge runtime (Deno) — the MCP server ( mem verbs) + a REST mirror, over a shared services layer ( shared/ ). server/ Canonical Drizzle schema + migrations + seed + admin CLI (Node tooling; the prod runtime is Deno). app/ The viewer (Vue 3 + Vite) — read, graph, review loop, public gallery. docs/ principles.md (the why), specs/knowledge base.md (model + MCP surface), connect mcp.md , access control.md . Read in order 1. docs/principles.md — the why in two pages.

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| app | dir |
| CLAUDE.md | file |
| docs | dir |
| LICENSE | file |
| Procfile | file |
| README.md | file |
| server | dir |
| supabase | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| app/ | 56 |
| server/ | 40 |
| supabase/ | 35 |
| (root) | 5 |
| docs/ | 4 |
| .github/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| app/ | 56 | preferred |
| server/ | 40 | preferred |
| docs/ | 4 | preferred |
| supabase/ | 35 | large |
| supabase/functions/ | 33 | large |
| app/src/ | 30 | large |
| server/drizzle/ | 28 | large |
| supabase/functions/_shared/ | 26 | large |
| app/public/ | 16 | large |
| app/src/views/ | 11 | large |
| server/drizzle/meta/ | 10 | large |
| app/src/components/ | 8 | large |
| server/src/ | 7 | large |
| app/functions/ | 4 | large |
| supabase/functions/_smoke/ | 4 | large |
| app/src/lib/ | 2 | large |
| .github/ | 1 | large |
| .github/workflows/ | 1 | large |
| app/functions/.well-known/ | 1 | large |
| app/functions/api/ | 1 | large |
| app/src/assets/ | 1 | large |
| docs/specs/ | 1 | large |
| supabase/functions/api/ | 1 | large |
| supabase/functions/mcp/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `app/package.json`
- `app/tsconfig.json`
- `app/vite.config.ts`
- `server/package.json`
- `server/tsconfig.json`
- `supabase/functions/deno.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| app/package.json | memento-viewer | dev, build, typecheck, preview | @supabase/supabase-js, @types/dompurify, dompurify, marked, vue, vue-router |
| server/package.json | memento-tooling | db:generate, db:migrate, db:push, db:studio, seed, seed:auth-local, admin, typecheck, embed:backfill | dotenv, drizzle-orm, postgres |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/access-control.md`
- `docs/connect-mcp.md`
- `docs/principles.md`
- `docs/specs/knowledge-base.md`

### 에이전트 지침 후보

- `CLAUDE.md`
- `app/functions/mcp.ts`
- `docs/connect-mcp.md`
- `supabase/functions/mcp/index.ts`

### 스펙/템플릿/명령/스킬 후보

- `docs/specs/knowledge-base.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `supabase/functions/_shared/onboarding.test.ts`

### CI/Docker 후보

- `.github/workflows/test.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 52 |
| .vue | 20 |
| .sql | 19 |
| .json | 17 |
| .md | 6 |
| .png | 6 |
| .webp | 5 |
| .css | 2 |
| .example | 2 |
| .gitignore | 2 |
| _headers | 1 |
| _redirects | 1 |
| .html | 1 |
| .ico | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `app/ 내부 책임 분리`
- `server/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `supabase/ 내부 책임 분리`
- `supabase/functions/ 내부 책임 분리`
- `docs/specs/knowledge-base.md 스펙/명령 의미`
- `app/package.json 실행 스크립트와 패키지 경계`
- `app/tsconfig.json 실행 스크립트와 패키지 경계`
- `app/vite.config.ts 실행 스크립트와 패키지 경계`
- `server/package.json 실행 스크립트와 패키지 경계`
- `server/tsconfig.json 실행 스크립트와 패키지 경계`

