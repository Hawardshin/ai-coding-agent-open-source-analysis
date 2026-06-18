# kokogo100/ragalgo-mcp-server

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kokogo100/ragalgo-mcp-server |
| local path | sources/kokogo100__ragalgo-mcp-server |
| HEAD | 05fa836 |
| stars/forks | 0 / 0 |
| language | JavaScript |
| license |  |
| pushedAt | 2026-01-31T17:12:55Z |
| trendScore / priorityScore | 79 / 148 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 85 | README.md, docs/RagAlgo_Report_EN.md, docs/RagAlgo_Report_KR.md |
| Frontend / developer experience | 37 | package.json, package-lock.json, src/check_sdk.ts |
| Korean language / Korea domain | 15 | README.md, docs/RagAlgo_Report_EN.md, package.json |
| RAG / retrieval | 14 | README.md, package.json, docs/CKN_Architecture_EN.md |
| AI agent / tool use | 13 | README.md, docs/RagAlgo_Report_EN.md, docs/CKN_Architecture_EN.md |
| Infra / observability | 3 | README.md, docs/RagAlgo_Report_EN.md |
| LLM wiki / memory / graph | 3 | README.md, docs/CKN_Architecture_EN.md |
| Security / compliance | 3 | docs/RagAlgo_Report_EN.md, docs/CKN_Architecture_EN.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, context-engineering, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, localRuntime, mcp, rag, sdk-api, security-compliance |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Graph/memory store, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 29 |
| manifests | 4 |
| docs | 5 |
| tests | 0 |
| ci/ops | 2 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | RagAlgo: Dynamic RAG Engine for AI Reliability |
| headings | RagAlgo: Dynamic RAG Engine for AI Reliability / 📖 Architecture & Whitepaper / 🏗️ Data Pipeline Architecture / 💡 Why "Daily Close"? / 🚀 Quick Start / Claude Desktop Configuration / 📚 Usage Examples (Cookbook) / What's Inside? / 🌍 Supported Markets & Roadmap / 🛠 Tools |
| excerpt | RagAlgo Dynamic RAG Engine for AI Reliability ! npm version https //img.shields.io/npm/v/ragalgo mcp server.svg https //www.npmjs.com/package/ragalgo mcp server ! npm downloads https //img.shields.io/npm/dm/ragalgo mcp server.svg https //www.npmjs.com/package/ragalgo mcp server ! GitHub stars https //img.shields.io/github/stars/kokogo100/ragalgo mcp server?style=social https //github.com/kokogo100/ragalgo mcp server ! License MIT https //img.shields.io/badge/License MIT yellow.svg https //opensource.org/licenses/MIT ! MCP https //img.shields.io/badge/MCP Compatible blue https //modelcontextprotocol.io "Your AI is an Analyst, NOT a Day Trader." RagAlgo is an MCP Server that provides mathemati |


## 주요 파일

### Manifests

- README.md
- Dockerfile
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 12 |
| docs | 4 |
| .dockerignore | 1 |
| .github | 1 |
| .gitignore | 1 |
| .npmignore | 1 |
| Dockerfile | 1 |
| find_cache.cjs | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| README.md | 1 |
| server.json | 1 |
| smithery.yaml | 1 |
| test_zod.mjs | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 12 |
| .md | 5 |
| .json | 4 |
| [no-ext] | 4 |
| .cjs | 1 |
| .mjs | 1 |
| .yaml | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
