# modelcontextprotocol/servers 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/modelcontextprotocol__servers |
| remote | https://github.com/modelcontextprotocol/servers |
| HEAD | 275175c (2026-06-07) Merge pull request #3816 from galagaevdc/fix/everything-elicitation-http-transport |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 142 |
| dirs | 30 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Model Context Protocol servers`, `🌟 Reference Servers`, `Archived`, `🚀 Getting Started`, `Using MCP Servers in this Repository`, `With uvx`, `With pip`, `Using an MCP Client`, `🛠️ Creating Your Own Server`, `📚 Learn More`, `🤝 Contributing`, `🔒 Security`, `📜 License`, `💬 Community`, `⭐ Support`

> Model Context Protocol servers This repository is a collection of reference implementations for the Model Context Protocol (MCP), as well as references to community built servers and additional resources. [!IMPORTANT] If you are looking for a list of MCP servers, you can browse published servers on the MCP Registry. The repository served by this README is dedicated to housing just the small number of reference servers maintained by the MCP steering group. [!WARNING] The servers in this repository are intended as reference implementations to demonstrate MCP features and SDK usage. They are meant to serve as educational examples for developers building their own MCP servers, not as production ready solutions. Developers should evaluate their own security requirements and implement appropriate safeguards based on their specific threat model and use case. The servers in this repository showc

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .mcp.json | file |
| .npmrc | file |
| ADDITIONAL.md | file |
| CLAUDE.md | file |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| LICENSE | file |
| package-lock.json | file |
| package.json | file |
| README.md | file |
| scripts | dir |
| SECURITY.md | file |
| src | dir |
| tsconfig.json | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 121 |
| (root) | 14 |
| .github/ | 6 |
| scripts/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 121 | preferred |
| scripts/ | 1 | preferred |
| src/everything/ | 56 | large |
| src/everything/tools/ | 20 | large |
| src/filesystem/ | 17 | large |
| src/git/ | 12 | large |
| src/fetch/ | 11 | large |
| src/time/ | 9 | large |
| src/memory/ | 8 | large |
| src/sequentialthinking/ | 8 | large |
| src/everything/docs/ | 7 | large |
| src/filesystem/__tests__/ | 7 | large |
| .github/ | 6 | large |
| .github/workflows/ | 5 | large |
| src/everything/__tests__/ | 5 | large |
| src/everything/prompts/ | 5 | large |
| src/everything/resources/ | 5 | large |
| src/git/src/ | 4 | large |
| src/everything/server/ | 3 | large |
| src/everything/transports/ | 3 | large |
| src/fetch/src/ | 3 | large |
| src/time/src/ | 3 | large |
| src/fetch/tests/ | 2 | large |
| src/memory/__tests__/ | 2 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `package.json`
- `src/everything/Dockerfile`
- `src/everything/package.json`
- `src/everything/tsconfig.json`
- `src/fetch/Dockerfile`
- `src/fetch/pyproject.toml`
- `src/fetch/uv.lock`
- `src/filesystem/Dockerfile`
- `src/filesystem/package.json`
- `src/filesystem/tsconfig.json`
- `src/git/Dockerfile`
- `src/git/pyproject.toml`
- `src/git/uv.lock`
- `src/memory/Dockerfile`
- `src/memory/package.json`
- `src/memory/tsconfig.json`
- `src/sequentialthinking/Dockerfile`
- `src/sequentialthinking/package.json`
- `src/sequentialthinking/tsconfig.json`
- `src/time/Dockerfile`
- `src/time/pyproject.toml`
- `src/time/uv.lock`
- `tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | @modelcontextprotocol/servers | build, watch, publish-all, link-all | @modelcontextprotocol/server-everything, @modelcontextprotocol/server-memory, @modelcontextprotocol/server-filesystem, @modelcontextprotocol/server-sequential-thinking |
| src/everything/package.json | @modelcontextprotocol/server-everything | build, prepare, watch, start:stdio, start:sse, start:streamableHttp, prettier:fix, prettier:check, test | @modelcontextprotocol/sdk, cors, express, jszip, zod |
| src/filesystem/package.json | @modelcontextprotocol/server-filesystem | build, prepare, watch, test | @modelcontextprotocol/sdk, diff, glob, minimatch |
| src/memory/package.json | @modelcontextprotocol/server-memory | build, prepare, watch, test | @modelcontextprotocol/sdk |
| src/sequentialthinking/package.json | @modelcontextprotocol/server-sequential-thinking | build, prepare, watch, test | @modelcontextprotocol/sdk, chalk, yargs |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| src/fetch/pyproject.toml | mcp-server-fetch | false | true | false | true |
| src/git/pyproject.toml | mcp-server-git | false | false | false | true |
| src/time/pyproject.toml | mcp-server-time | false | true | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `src/everything/README.md`
- `src/everything/docs/architecture.md`
- `src/everything/docs/extension.md`
- `src/everything/docs/features.md`
- `src/everything/docs/how-it-works.md`
- `src/everything/docs/instructions.md`
- `src/everything/docs/startup.md`
- `src/everything/docs/structure.md`
- `src/fetch/README.md`
- `src/filesystem/README.md`
- `src/git/README.md`
- `src/memory/README.md`
- `src/sequentialthinking/README.md`
- `src/time/README.md`

### 에이전트 지침 후보

- `.mcp.json`
- `CLAUDE.md`
- `src/everything/AGENTS.md`
- `src/fetch/src/mcp_server_fetch/__init__.py`
- `src/fetch/src/mcp_server_fetch/__main__.py`
- `src/fetch/src/mcp_server_fetch/server.py`
- `src/git/src/mcp_server_git/__init__.py`
- `src/git/src/mcp_server_git/__main__.py`
- `src/git/src/mcp_server_git/py.typed`
- `src/git/src/mcp_server_git/server.py`
- `src/time/src/mcp_server_time/__init__.py`
- `src/time/src/mcp_server_time/__main__.py`
- `src/time/src/mcp_server_time/server.py`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `src/everything/__tests__/prompts.test.ts`
- `src/everything/__tests__/registrations.test.ts`
- `src/everything/__tests__/resources.test.ts`
- `src/everything/__tests__/server.test.ts`
- `src/everything/__tests__/tools.test.ts`
- `src/fetch/tests/__init__.py`
- `src/fetch/tests/test_server.py`
- `src/filesystem/__tests__/directory-tree.test.ts`
- `src/filesystem/__tests__/lib.test.ts`
- `src/filesystem/__tests__/path-utils.test.ts`
- `src/filesystem/__tests__/path-validation.test.ts`
- `src/filesystem/__tests__/roots-utils.test.ts`
- `src/filesystem/__tests__/startup-validation.test.ts`
- `src/filesystem/__tests__/structured-content.test.ts`
- `src/git/tests/test_server.py`
- `src/memory/__tests__/file-path.test.ts`
- `src/memory/__tests__/knowledge-graph.test.ts`
- `src/sequentialthinking/__tests__/lib.test.ts`
- `src/time/test/time_server_test.py`

### CI/Docker 후보

- `.github/workflows/claude.yml`
- `.github/workflows/python.yml`
- `.github/workflows/readme-pr-check.yml`
- `.github/workflows/release.yml`
- `.github/workflows/typescript.yml`
- `src/everything/Dockerfile`
- `src/fetch/Dockerfile`
- `src/filesystem/Dockerfile`
- `src/git/Dockerfile`
- `src/memory/Dockerfile`
- `src/sequentialthinking/Dockerfile`
- `src/time/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 64 |
| .md | 22 |
| .py | 14 |
| .json | 12 |
| dockerfile | 7 |
| .yml | 5 |
| .lock | 3 |
| .python-version | 3 |
| .toml | 3 |
| license | 3 |
| .gitignore | 2 |
| .gitattributes | 1 |
| .npmrc | 1 |
| .prettierignore | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `src/everything/ 내부 책임 분리`
- `src/everything/tools/ 내부 책임 분리`
- `src/filesystem/ 내부 책임 분리`
- `package.json 실행 스크립트와 패키지 경계`
- `src/everything/Dockerfile 실행 스크립트와 패키지 경계`
- `src/everything/package.json 실행 스크립트와 패키지 경계`
- `src/everything/tsconfig.json 실행 스크립트와 패키지 경계`
- `src/fetch/Dockerfile 실행 스크립트와 패키지 경계`

