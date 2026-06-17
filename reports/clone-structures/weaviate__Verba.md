# weaviate/Verba 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/weaviate__Verba |
| remote | https://github.com/weaviate/Verba |
| HEAD | 70b6cfb (2026-06-08) goodbye |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 377 |
| dirs | 68 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Verba`, `The Golden RAGtriever - Community Edition ✨`, `What Is Verba?`, `Open Source Spirit`, `Watch our newest Verba video here:`, `Feature Lists`, `Getting Started with Verba`, `API Keys and Environment Variables`, `Weaviate`, `Ollama`, `Unstructured`, `AssemblyAI`, `OpenAI`, `OpenAI Embeddings`, `HuggingFace`, `Groq`, `Novita`, `How to deploy with pip`

> Verba [!IMPORTANT] ⚠️ Project Discontinued — Repository Archived Verba is no longer in active development. This repository has been archived and will not receive further updates, bug fixes, security patches, or new features. Pull requests and issues will no longer be reviewed or merged. The code remains available for reference and forking, but it is provided as is with no guarantees of stability, compatibility, or support. Existing deployments will continue to function, but users should not expect ongoing maintenance. Thank you to everyone who contributed, used, and supported Verba throughout its journey. ❤️ The Golden RAGtriever Community Edition ✨ Note The content below describes Verba as it existed prior to discontinuation. It is preserved for historical and reference purposes only. See the notice above regarding the current status of the project. Welcome to Verba The Golden RAGtrieve

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| CHANGELOG.md | file |
| CONTRIBUTING.md | file |
| docker-compose.yml | file |
| Dockerfile | file |
| frontend | dir |
| FRONTEND.md | file |
| goldenverba | dir |
| img | dir |
| LICENSE | file |
| MANIFEST.in | file |
| pypi_commands.sh | file |
| PYTHON_TUTORIAL.md | file |
| README.md | file |
| setup.py | file |
| TECHNICAL.md | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| goldenverba/ | 280 |
| frontend/ | 68 |
| (root) | 13 |
| img/ | 12 |
| .github/ | 4 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| frontend/ | 68 | preferred |
| goldenverba/ | 280 | large |
| goldenverba/server/ | 229 | large |
| goldenverba/server/frontend/ | 224 | large |
| goldenverba/components/ | 46 | large |
| frontend/app/ | 38 | large |
| frontend/app/components/ | 32 | large |
| frontend/public/ | 21 | large |
| img/ | 12 | large |
| goldenverba/components/chunking/ | 10 | large |
| goldenverba/components/generation/ | 10 | large |
| goldenverba/components/embedding/ | 9 | large |
| goldenverba/components/reader/ | 8 | large |
| .github/ | 4 | large |
| frontend/public/shaders/ | 3 | large |
| .github/ISSUE_TEMPLATE/ | 2 | large |
| goldenverba/components/retriever/ | 2 | large |
| goldenverba/tests/ | 2 | large |
| .github/workflows/ | 1 | large |
| goldenverba/tests/chunk/ | 1 | large |
| goldenverba/tests/document/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `docker-compose.yml`
- `frontend/next.config.js`
- `frontend/package.json`
- `frontend/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| frontend/package.json | verba | dev, build, start, lint | @mdx-js/mdx, @mdx-js/react, @next/third-parties, @react-pdf/renderer, @react-three/drei, @react-three/fiber, @types/node, @types/react, @types/react-dom, @types/three, autoprefixer, date-fns, eslint, eslint-config-next |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `goldenverba/tests/chunk/test_chunk.py`
- `goldenverba/tests/document/test_document.py`

### CI/Docker 후보

- `.github/workflows/docker-image.yml`
- `Dockerfile`
- `docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .js | 151 |
| .py | 56 |
| .woff2 | 41 |
| .tsx | 32 |
| .png | 29 |
| .css | 11 |
| .md | 8 |
| .ts | 7 |
| .glsl | 6 |
| .glb | 4 |
| .gltf | 4 |
| .hdr | 4 |
| .json | 4 |
| .svg | 4 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `frontend/ 내부 책임 분리`
- `goldenverba/ 내부 책임 분리`
- `goldenverba/server/ 내부 책임 분리`
- `goldenverba/server/frontend/ 내부 책임 분리`
- `goldenverba/components/ 내부 책임 분리`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `frontend/next.config.js 실행 스크립트와 패키지 경계`
- `frontend/package.json 실행 스크립트와 패키지 경계`
- `frontend/tsconfig.json 실행 스크립트와 패키지 경계`

