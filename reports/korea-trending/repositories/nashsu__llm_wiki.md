# nashsu/llm_wiki

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/nashsu/llm_wiki |
| local path | sources/nashsu__llm_wiki |
| HEAD | d0437e8 |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-16T07:53:24Z |
| trendScore / priorityScore | 84 / 236 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 500 | mcp-server/README.md, README.md, mcp-server/package.json |
| RAG / retrieval | 500 | README.md, mcp-server/package.json, src-tauri/Cargo.toml |
| Local LLM / on-device inference | 149 | README.md, llm-wiki.md, src/lib/__tests__/llm-providers.test.ts |
| MCP / tool protocol | 99 | mcp-server/README.md, README.md, mcp-server/package.json |
| Frontend / developer experience | 96 | README.md, mcp-server/package.json, package.json |
| AI agent / tool use | 46 | README.md, llm-wiki.md, src/lib/ingest.prompt.test.ts |
| Korean language / Korea domain | 24 | src/lib/enrich-wikilinks.test.ts, src/lib/ingest.prompt.test.ts, src/lib/ingest.real-llm.test.ts |
| Security / compliance | 16 | mcp-server/README.md, mcp-server/test/api-client.test.ts, src/lib/wiki-filename.test.ts |
| Spec / doc-driven workflow | 6 | mcp-server/README.md, llm-wiki.md, src/lib/ingest.real-llm.test.ts |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, context-engineering, documentParsing, evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 350 |
| manifests | 10 |
| docs | 7 |
| tests | 114 |
| ci/ops | 2 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LLM Wiki |
| headings | LLM Wiki / Features / What is this? / Credits / What We Kept from the Original / What We Changed & Added / 1. From CLI to Desktop Application / 2. Purpose.md — The Wiki's Soul / 3. Two-Step Chain-of-Thought Ingest / 4. Knowledge Graph with Relevance Model |
| excerpt | LLM Wiki <p align="center" <img src="logo.jpg" width="128" height="128" style="border radius 22%;" alt="LLM Wiki Logo" </p <p align="center" <strong A personal knowledge base that builds itself.</strong <br LLM reads your documents, builds a structured wiki, and keeps it current. </p <p align="center" <a href=" what is this" What is this?</a • <a href=" what we changed added" Features</a • <a href=" tech stack" Tech Stack</a • <a href=" installation" Installation</a • <a href=" credits" Credits</a • <a href=" license" License</a </p <p align="center" English <a href="README CN.md" 中文</a <a href="README JA.md" 日本語</a <a href="README KO.md" 한국어</a </p <p align="center" <img src="assets/overvie |


## 주요 파일

### Manifests

- mcp-server/README.md
- README.md
- mcp-server/package.json
- mcp-server/tsconfig.json
- package.json
- src-tauri/Cargo.toml
- tsconfig.json
- vite.config.ts
- tsconfig.app.json
- tsconfig.node.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 289 |
| src-tauri | 28 |
| mcp-server | 9 |
| extension | 5 |
| .github | 2 |
| .gitignore | 1 |
| components.json | 1 |
| index.html | 1 |
| LICENSE | 1 |
| llm-wiki.md | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| plans | 1 |
| README_CN.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 236 |
| .tsx | 55 |
| .rs | 20 |
| .json | 18 |
| .md | 7 |
| .js | 3 |
| .html | 2 |
| .yml | 2 |
| [no-ext] | 2 |
| .css | 1 |
| .icns | 1 |
| .py | 1 |
| .toml | 1 |
| .xml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
