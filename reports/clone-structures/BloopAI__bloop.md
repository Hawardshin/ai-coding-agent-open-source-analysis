# bloopai/bloop 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/BloopAI__bloop |
| remote | https://github.com/BloopAI/bloop.git |
| HEAD | 431e9e8 (2024-12-04) Add "Open with Codeanywhere" badge to README.md (#1296) |
| branch | oss |
| groups | previous-clone-inventory-107 |
| files | 694 |
| dirs | 145 |
| stack | Node/TypeScript/JavaScript, Rust |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Features`, `Get Started`, `Building From Source`, `Contributing`, `Privacy`, `License`

> <picture <source media="(prefers color scheme dark)" srcset="https //assets.bloop.ai/bloop github logo dark.png" <img alt="bloop logo" src="https //assets.bloop.ai/bloop github logo light.png" </picture bloop is ChatGPT for your code. Ask questions in natural language, search for code and generate patches using your existing codebase as context. Engineers are increasing their productivity by using bloop to Explain how files or features work in simple language Write new features, using their code as context Understand how to use poorly documented open source libraries Pinpoint errors Ask questions about English language codebases in other languages Reduce code duplication by checking for existing functionality https //github.com/BloopAI/bloop/assets/7957964/01db3ccb 4af0 49a0 92d6 5a9c42357a51 Features AI based conversational search Code Studio, an LLM playground that uses your code as co

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .dockerignore | file |
| .env.example | file |
| .envrc | file |
| .eslintrc.json | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .gitpod.Dockerfile | file |
| .gitpod.yml | file |
| .taurignore | file |
| apps | dir |
| bleep.db | other |
| Cargo.lock | file |
| Cargo.toml | file |
| client | dir |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| docker-compose.yml | file |
| Dockerfile | file |
| flake.lock | file |
| flake.nix | file |
| LICENSE | file |
| model | other |
| package-lock.json | file |
| package.json | file |
| playwright.config.js | file |
| README.md | file |
| release_description_template.txt | file |
| server | dir |
| tests | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| client/ | 441 |
| server/ | 152 |
| apps/ | 55 |
| (root) | 23 |
| .github/ | 12 |
| tests/ | 11 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| apps/ | 55 | preferred |
| server/ | 152 | preferred |
| client/ | 441 | preferred |
| tests/ | 11 | preferred |
| client/src/ | 395 | large |
| server/bleep/ | 150 | large |
| server/bleep/src/ | 130 | large |
| client/src/icons/ | 107 | large |
| client/src/Project/ | 73 | large |
| client/src/components/ | 71 | large |
| apps/desktop/ | 55 | large |
| apps/desktop/src-tauri/ | 40 | large |
| client/public/ | 31 | large |
| client/src/CommandBar/ | 28 | large |
| client/src/fonts/ | 21 | large |
| client/src/context/ | 20 | large |
| server/bleep/migrations/ | 17 | large |
| client/src/hooks/ | 15 | large |
| client/src/utils/ | 14 | large |
| .github/ | 12 | large |
| .github/workflows/ | 9 | large |
| client/src/consts/ | 8 | large |
| client/src/Settings/ | 6 | large |
| client/src/locales/ | 6 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Cargo.toml`
- `Dockerfile`
- `apps/desktop/package.json`
- `apps/desktop/src-tauri/Cargo.toml`
- `apps/desktop/tsconfig.json`
- `apps/desktop/vite.config.ts`
- `client/package.json`
- `client/tsconfig.json`
- `client/vite.config.ts`
- `docker-compose.yml`
- `package.json`
- `server/bleep/Cargo.toml`
- `tests/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| apps/desktop/package.json | @bloop/desktop | dev, tsc, vite-build, build, preview, tauri |  |
| client/package.json | @bloop/client | dev, build, preview, lint, type-check, storybook, build-storybook, test, chromatic |  |
| package.json | @bloop/root | start, watch, start:tauri, watch:tauri, start-app, start-web, lfs:install, lfs:pull, build-app, build-web, tauri, lint, client-type-check | @nytimes/react-prosemirror, @rive-app/react-canvas, @sentry/integrations, @sentry/react, @sentry/tracing, @tauri-apps/api, @tippyjs/react, ansi-to-html, axios, date-fns, downshift, file-icons-js, framer-motion, i18next |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| Cargo.toml |  | true |      "server/bleep",     "apps/desktop/src-tauri"  |
| apps/desktop/src-tauri/Cargo.toml | bloop | false |  |
| server/bleep/Cargo.toml | bleep | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `apps/desktop/README.md`
- `client/README.md`
- `client/src/Project/LeftSidebar/NavPanel/Doc/DocDropdown.tsx`
- `client/src/Project/LeftSidebar/NavPanel/Doc/DocEntry.tsx`
- `client/src/Project/LeftSidebar/NavPanel/Doc/index.tsx`
- `server/README.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `client/src/utils/commandBarUtils.test.ts`
- `client/src/utils/index.test.ts`
- `client/tests/setupTests.ts`
- `tests/.example.env`
- `tests/.gitignore`
- `tests/all_onboarding.spec.js_`
- `tests/github_onboarding.spec.js_`
- `tests/local_onboarding.spec.js_`
- `tests/onboarding.spec.ts`
- `tests/onboarding.ts`
- `tests/repository.spec.ts`
- `tests/search.spec.ts`
- `tests/settings.spec.ts`
- `tests/tsconfig.json`

### CI/Docker 후보

- `.github/workflows/build-on-pr-command.yml`
- `.github/workflows/build-on-pr.yml`
- `.github/workflows/build-on-release.yml`
- `.github/workflows/client-test.yml`
- `.github/workflows/dependencies.yml`
- `.github/workflows/dummy.yml`
- `.github/workflows/server-test.yml`
- `.github/workflows/tauri-release.yml`
- `.github/workflows/tauri-test.yml`
- `Dockerfile`
- `docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .tsx | 300 |
| .rs | 121 |
| .ts | 76 |
| .png | 39 |
| .json | 26 |
| .sql | 17 |
| .ttf | 15 |
| .scm | 13 |
| .yml | 13 |
| .md | 9 |
| .cjs | 6 |
| .woff2 | 6 |
| .gitignore | 5 |
| .riv | 5 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `apps/ 내부 책임 분리`
- `server/ 내부 책임 분리`
- `client/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `client/src/ 내부 책임 분리`
- `Cargo.toml 실행 스크립트와 패키지 경계`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `apps/desktop/package.json 실행 스크립트와 패키지 경계`
- `apps/desktop/src-tauri/Cargo.toml 실행 스크립트와 패키지 경계`
- `apps/desktop/tsconfig.json 실행 스크립트와 패키지 경계`

