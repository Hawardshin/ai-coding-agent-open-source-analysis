# formulahendry/mcp-server-spec-driven-development 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/formulahendry__mcp-server-spec-driven-development |
| remote | https://github.com/formulahendry/mcp-server-spec-driven-development |
| HEAD | 8a0532a (2025-09-26) update description for server.json |
| branch | main |
| groups | spec-driven-20 |
| files | 13 |
| dirs | 2 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Spec-Driven Development MCP Server`, `🎯 Purpose`, `✨ Features`, `🚀 Quick Start`, `Prerequisites`, `Installation`, `📋 Available Prompts`, `1. Generate Requirements Document`, `2. Generate Design from Requirements`, `3. Generate Code from Design`, `📖 Workflow Example`, `🤔 Why Spec-Driven Development?`

> Spec Driven Development MCP Server VS Code 0098FF) Model Context Protocol (MCP) server that facilitates spec driven development workflows by providing structured prompts for generating requirements, design documents, and code following a systematic approach. <a href="https //glama.ai/mcp/servers/@formulahendry/mcp server spec driven development" <img width="380" height="200" src="https //glama.ai/mcp/servers/@formulahendry/mcp server spec driven development/badge" alt="Spec Driven Development Server MCP server" / </a 🎯 Purpose This MCP server enables developers to follow a structured spec driven development approach by providing prompts that guide you through 1. Requirements Generation Create detailed requirements documents using the EARS (Easy Approach to Requirements Syntax) format 2. Design Generation Generate design documents based on requirements 3. Code Generation Generate impleme

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .gitignore | file |
| .vscode | dir |
| LICENSE | file |
| package-lock.json | file |
| package.json | file |
| README.md | file |
| server.json | file |
| src | dir |
| tsconfig.json | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| (root) | 7 |
| .vscode/ | 3 |
| src/ | 3 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 3 | preferred |
| .vscode/ | 3 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `package.json`
- `tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | mcp-server-spec-driven-development | build, watch, start, start:streamableHttp | @modelcontextprotocol/sdk, express, zod |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`

### 에이전트 지침 후보

- `.vscode/mcp.json`

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
| .json | 7 |
| .ts | 3 |
| .gitignore | 1 |
| .md | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `.vscode/ 내부 책임 분리`
- `package.json 실행 스크립트와 패키지 경계`
- `tsconfig.json 실행 스크립트와 패키지 경계`

