# Lumiaqian/openspec-mcp 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/Lumiaqian__openspec-mcp |
| remote | https://github.com/Lumiaqian/openspec-mcp |
| HEAD | 48f8684 (2026-01-12) chore: bump version to 0.4.2 |
| branch | main |
| groups | spec-driven-20 |
| files | 74 |
| dirs | 15 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `OpenSpec MCP`, `Features`, `Quick Start`, `1. Add to your MCP configuration`, `2. Use in conversation`, `List all changes`, `Show change details`, `Update task status`, `Request approval`, `Available Prompts (New!)`, `Available Tools`, `Guides & Context`, `Management`, `Validation`, `Archive`, `Tasks`, `Approval`, `Reviews`

> OpenSpec MCP MCP (Model Context Protocol) server for OpenSpec spec driven development with real time dashboard and approval workflow. Features MCP Tools Full OpenSpec CLI functionality exposed as MCP tools Review System Add, reply, resolve review comments on proposals/designs Task Tracking Parse tasks.md and track progress in real time Approval Workflow Request, approve, and reject change proposals Cross Service Docs View cross service design documents from single service projects Web Dashboard Visual management interface with real time updates and Markdown rendering Quick Start 1. Add to your MCP configuration Claude Code CLI (recommended uses current directory) Claude Code CLI with Dashboard Claude Code CLI with specific project path Claude Desktop / Cursor / Other With Dashboard 2. Use in conversation Available Prompts (New!) Directly leverage your Client's AI capabilities (Claude, Co

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| LICENSE | file |
| package-lock.json | file |
| package.json | file |
| README.md | file |
| README.zh.md | file |
| src | dir |
| tsconfig.json | file |
| web | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 43 |
| web/ | 22 |
| (root) | 7 |
| .github/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 43 | preferred |
| web/ | 22 | preferred |
| src/core/ | 16 | large |
| src/server/ | 15 | large |
| src/server/tools/ | 15 | large |
| web/src/ | 14 | large |
| web/src/components/ | 9 | large |
| src/api/ | 8 | large |
| src/api/routes/ | 7 | large |
| .github/ | 2 | large |
| .github/workflows/ | 2 | large |
| src/utils/ | 2 | large |
| src/types/ | 1 | large |
| web/src/api/ | 1 | large |
| web/src/hooks/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `package.json`
- `tsconfig.json`
- `web/package.json`
- `web/tsconfig.json`
- `web/vite.config.ts`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | openspec-mcp | build, build:web, dev, start, start:dashboard, test, prepublishOnly | @fastify/cors, @fastify/static, @fastify/websocket, @modelcontextprotocol/sdk, chokidar, commander, fastify, gray-matter, zod |
| web/package.json | openspec-mcp-web | dev, build, preview | @tailwindcss/typography, react, react-dom, react-markdown, react-router-dom, remark-gfm, yaml |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `src/core/approval-manager.test.ts`
- `src/core/spec-critic.test.ts`
- `src/core/task-parser.test.ts`

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `.github/workflows/publish.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 46 |
| .tsx | 11 |
| .json | 7 |
| .js | 2 |
| .md | 2 |
| .yml | 2 |
| .css | 1 |
| .gitignore | 1 |
| .html | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `web/ 내부 책임 분리`
- `src/core/ 내부 책임 분리`
- `src/server/ 내부 책임 분리`
- `src/server/tools/ 내부 책임 분리`
- `package.json 실행 스크립트와 패키지 경계`
- `tsconfig.json 실행 스크립트와 패키지 경계`
- `web/package.json 실행 스크립트와 패키지 경계`
- `web/tsconfig.json 실행 스크립트와 패키지 경계`
- `web/vite.config.ts 실행 스크립트와 패키지 경계`

