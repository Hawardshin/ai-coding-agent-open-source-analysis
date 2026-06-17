# studyield/studyield 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/studyield__studyield |
| remote | https://github.com/studyield/studyield |
| HEAD | 32d2bf3 (2026-04-17) Merge pull request #90 from studyield/develop |
| branch | main |
| groups | llm-wiki-100 |
| files | 404 |
| dirs | 73 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `What is Studyield?`, `How It Works`, `Key Capabilities`, `What Problem We Solve`, `The Modern Learning Dilemma`, `Studyield's Solution`, `Why Studyield? (Comparison)`, `What Makes Studyield Unique?`, `📊 Project Activity & Statistics`, `GitHub Activity`, `Community Metrics`, `Language & Code Statistics`, `Recent Activity Highlights`, `Why These Numbers Matter`, `Join the Activity!`, `Quick Start`, `Docker (Recommended)`, `Edit backend/.env with your database credentials and OpenRouter API key`

> <p align="center" <a href="https //studyield.com" <img src="frontend/public/logos/studyield logo.png" alt="Studyield" width="80" </a <h1 align="center" Studyield</h1 <p align="center" <strong Open source AI powered learning platform</strong </p <p align="center" Learn smarter with AI powered exam prep, multi agent problem solving, knowledge graphs, and more. </p </p <p align="center" <a href="https //studyield.com" <img src="https //img.shields.io/badge/live studyield.com brightgreen?logo=vercel&logoColor=white" alt="Live Site" </a <a href="https //github.com/studyield/studyield/blob/main/LICENSE" <img src="https //img.shields.io/badge/license Apache 2.0 blue.svg" alt="License" </a <a href="https //github.com/studyield/studyield/stargazers" <img src="https //img.shields.io/github/stars/studyield/studyield?style=social" alt="GitHub Stars" </a <a href="https //github.com/studyield/studyiel

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .editorconfig | file |
| .env.docker | file |
| .github | dir |
| .gitignore | file |
| .prettierrc | file |
| backend | dir |
| CHANGELOG.md | file |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| docker-compose.yml | file |
| frontend | dir |
| FUTURE_GOAL.md | file |
| LICENSE | file |
| NOTICE | file |
| README_AR.md | file |
| README_BN.md | file |
| README_DE.md | file |
| README_ES.md | file |
| README_FR.md | file |
| README_HI.md | file |
| README_JA.md | file |
| README_KO.md | file |
| README_PT-BR.md | file |
| README_RU.md | file |
| README_ZH.md | file |
| README.md | file |
| SECURITY.md | file |
| start.sh | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| backend/ | 186 |
| frontend/ | 185 |
| (root) | 25 |
| .github/ | 8 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| frontend/ | 185 | preferred |
| backend/ | 186 | preferred |
| frontend/src/ | 164 | large |
| backend/src/ | 157 | large |
| backend/src/modules/ | 130 | large |
| frontend/src/pages/ | 76 | large |
| frontend/src/components/ | 37 | large |
| backend/src/common/ | 23 | large |
| backend/migrations/ | 18 | large |
| frontend/src/locales/ | 15 | large |
| frontend/src/services/ | 12 | large |
| .github/ | 8 | large |
| frontend/src/stores/ | 8 | large |
| frontend/public/ | 5 | large |
| .github/ISSUE_TEMPLATE/ | 3 | large |
| .github/screenshots/ | 3 | large |
| frontend/public/logos/ | 2 | large |
| frontend/src/hooks/ | 2 | large |
| frontend/src/layouts/ | 2 | large |
| frontend/src/lib/ | 2 | large |
| frontend/src/types/ | 2 | large |
| .github/workflows/ | 1 | large |
| backend/scripts/ | 1 | large |
| backend/src/types/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `backend/Dockerfile`
- `backend/package.json`
- `backend/tsconfig.json`
- `docker-compose.yml`
- `frontend/Dockerfile`
- `frontend/package.json`
- `frontend/tsconfig.json`
- `frontend/vite.config.ts`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| backend/package.json | studyield-backend | build, format, start, start:dev, start:debug, start:prod, lint, test, test:watch, test:cov, test:debug, test:e2e, migrate, migrate:create | @aws-sdk/client-s3, @aws-sdk/client-ses, @aws-sdk/lib-storage, @aws-sdk/s3-request-presigner, @distube/ytdl-core, @nestjs/common, @nestjs/config, @nestjs/core, @nestjs/jwt, @nestjs/passport, @nestjs/platform-express, @nestjs/platform-socket.io, @nestjs/swagger, @nestjs/throttler |
| frontend/package.json | studyield-frontend | dev, build, build:check, build:prod, lint, preview, typecheck | @radix-ui/react-accordion, @radix-ui/react-alert-dialog, @radix-ui/react-avatar, @radix-ui/react-checkbox, @radix-ui/react-collapsible, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-hover-card, @radix-ui/react-label, @radix-ui/react-navigation-menu, @radix-ui/react-popover, @radix-ui/react-progress, @radix-ui/react-radio-group, @radix-ui/react-scroll-area |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `frontend/README.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `backend/Dockerfile`
- `docker-compose.yml`
- `frontend/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 189 |
| .tsx | 116 |
| .json | 24 |
| .md | 19 |
| .sql | 18 |
| .png | 6 |
| .js | 5 |
| .yml | 5 |
| .gitignore | 3 |
| .dockerignore | 2 |
| .example | 2 |
| .prettierrc | 2 |
| .svg | 2 |
| dockerfile | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `frontend/ 내부 책임 분리`
- `backend/ 내부 책임 분리`
- `frontend/src/ 내부 책임 분리`
- `backend/src/ 내부 책임 분리`
- `backend/src/modules/ 내부 책임 분리`
- `backend/Dockerfile 실행 스크립트와 패키지 경계`
- `backend/package.json 실행 스크립트와 패키지 경계`
- `backend/tsconfig.json 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `frontend/Dockerfile 실행 스크립트와 패키지 경계`

