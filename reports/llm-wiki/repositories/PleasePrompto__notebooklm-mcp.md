# PleasePrompto/notebooklm-mcp 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/PleasePrompto__notebooklm-mcp |
| remote | https://github.com/PleasePrompto/notebooklm-mcp |
| HEAD | 50b3e7f (2026-05-01) feat: v2.0.0 — multilingual selector overhaul, async audio workflow, MCP-spec descriptions |
| branch | main |
| groups | llm-wiki-100 |
| files | 50 |
| dirs | 12 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.

## README 신호

- 파일: `README.md`
- 주요 heading: `NotebookLM MCP Server`, `Requirements & Platform Support`, `Install`, `Published package`, `From source`, `Connect to Claude Code`, `or, from a local clone:`, `Connect to other clients`, `Cursor — `~/.cursor/mcp.json``, `Codex CLI`, `Generic MCP client (stdio)`, `HTTP-only clients (n8n, Zapier, Make, hosted agents)`, `Authentication`, `Transports`, `stdio (default)`, `Streamable-HTTP`, `bind to all interfaces:`, `Multi-account`

> NotebookLM MCP Server MCP server for Google NotebookLM. It drives a real Chrome via Patchright (stealth + persistent fingerprint) so an agent can chat against a notebook, ingest sources, generate audio overviews, and read DOM level citations. Two transports are supported stdio (default) and Streamable HTTP. v2.0.0 is the current line; v1 is no longer supported. Requirements Install Connect — Claude Code, Cursor, Codex, generic MCP Authentication Transports Multi account Tools Profiles Citations Provenance & AI marker Configuration reference Development Migration from v1 Requirements & Platform Support Node.js ≥ 18. Chrome (stable channel) preferred. The bundled Patchright Chromium is used as a fallback when Chrome refuses to launch — set BROWSER CHANNEL=chromium to force it. Linux / macOS / Windows. WSL2 + WSLg (Windows 11+) is fully supported. WSL1 cannot launch a Chromium and is not su

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .gitignore | file |
| .prettierignore | file |
| .prettierrc.json | file |
| CHANGELOG.md | file |
| docs | dir |
| eslint.config.js | file |
| LICENSE | file |
| package-lock.json | file |
| package.json | file |
| README.md | file |
| src | dir |
| tsconfig.json | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 36 |
| (root) | 10 |
| docs/ | 4 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 36 | preferred |
| docs/ | 4 | preferred |
| src/tools/ | 8 | large |
| src/utils/ | 7 | large |
| src/notebooklm/ | 5 | large |
| src/tools/definitions/ | 5 | large |
| src/library/ | 3 | large |
| src/session/ | 3 | large |
| src/auth/ | 2 | large |
| src/browser/ | 2 | large |
| src/resources/ | 1 | large |
| src/transport/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `package.json`
- `tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | notebooklm-mcp | build, postbuild, watch, dev, prepare, test, lint, lint:fix, format, format:check, check | @modelcontextprotocol/sdk, dotenv, env-paths, globby, patchright, zod |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/configuration.md`
- `docs/tools.md`
- `docs/troubleshooting.md`
- `docs/usage-guide.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

_없음_

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 36 |
| .md | 6 |
| .json | 4 |
| .gitignore | 1 |
| .js | 1 |
| .prettierignore | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `src/tools/ 내부 책임 분리`
- `src/utils/ 내부 책임 분리`
- `src/notebooklm/ 내부 책임 분리`
- `package.json 실행 스크립트와 패키지 경계`
- `tsconfig.json 실행 스크립트와 패키지 경계`

