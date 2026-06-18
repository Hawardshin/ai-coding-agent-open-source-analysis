# joungminsung/OpenDocuments

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/joungminsung/OpenDocuments |
| local path | sources/joungminsung__OpenDocuments |
| HEAD | cec84ab |
| stars/forks | 80 / 13 |
| language | TypeScript |
| license | MIT |
| pushedAt | 2026-05-27T14:37:37Z |
| trendScore / priorityScore | 152 / 397 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 500 | README.md, packages/cli/README.md, Dockerfile |
| Frontend / developer experience | 129 | README.md, packages/cli/README.md, package.json |
| MCP / tool protocol | 93 | README.md, packages/cli/README.md, package.json |
| Local LLM / on-device inference | 72 | README.md, packages/cli/README.md, docker-compose.yml |
| Security / compliance | 46 | README.md, packages/cli/README.md, packages/core/package.json |
| LLM wiki / memory / graph | 37 | README.md, plugins/connector-confluence/package.json, packages/core/tests/_fixtures/run-eval.ts |
| Korean language / Korea domain | 24 | README.md, packages/cli/README.md, packages/core/tests/rag/cross-lingual.test.ts |
| Infra / observability | 13 | README.md, packages/cli/README.md, docker-compose.yml |
| Spec / doc-driven workflow | 4 | README.md, docs-site/guide/mcp-knowledge-base.md, packages/core/src/rag/cache.ts |
| AI agent / tool use | 3 | docs/architecture.ko.md, docs/architecture.md, packages/core/src/rag/cross-lingual.ts |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, context-engineering, documentParsing, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 453 |
| manifests | 40 |
| docs | 54 |
| tests | 91 |
| ci/ops | 4 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Index your repo and API docs |
| headings | What is OpenDocuments? / Why OpenDocuments? / How OpenDocuments Answers Questions / Key Features / OpenDocuments vs Alternatives / Recent Improvements / Real-World Use Cases / For Engineering Teams / Index your repo and API docs / For Operations & HR Teams |
| excerpt | <p align="center" <h1 align="center" OpenDocuments</h1 <p align="center" <strong Self hosted RAG platform for AI document search across GitHub, Notion, Google Drive, Confluence, S3, local files, and web sources</strong </p </p <p align="center" <a href="https //github.com/joungminsung/OpenDocuments/actions" <img src="https //github.com/joungminsung/OpenDocuments/actions/workflows/ci.yml/badge.svg" alt="CI" </a <a href="LICENSE" <img src="https //img.shields.io/badge/License MIT blue.svg" alt="License" </a <a href="https //nodejs.org" <img src="https //img.shields.io/badge/Node.js 20%2B green.svg" alt="Node.js" </a <a href="https //www.typescriptlang.org" <img src="https //img.shields.io/badg |


## 주요 파일

### Manifests

- README.md
- templates/README.md
- packages/cli/README.md
- docker-compose.yml
- Dockerfile
- docs-site/package.json
- package.json
- packages/cli/package.json
- packages/cli/tsconfig.json
- packages/client/package.json
- packages/client/tsconfig.json
- packages/core/package.json
- packages/core/tsconfig.json
- packages/server/package.json
- packages/server/tsconfig.json
- packages/web/package.json
- packages/web/tsconfig.json
- packages/web/vite.config.ts
- plugins/connector-confluence/package.json
- plugins/connector-confluence/tsconfig.json


### Spec / Docs / Prompt Artifacts

- docs/architecture.md
- docs-site/guide/architecture.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| packages | 234 |
| plugins | 166 |
| docs-site | 28 |
| .github | 6 |
| docs | 2 |
| .changeset | 1 |
| .gitignore | 1 |
| assets | 1 |
| CHANGELOG.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| docker-compose.yml | 1 |
| Dockerfile | 1 |
| LICENSE | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 274 |
| .json | 74 |
| .md | 54 |
| .tsx | 21 |
| .sql | 6 |
| .svg | 6 |
| .yml | 6 |
| [no-ext] | 3 |
| .css | 2 |
| .txt | 2 |
| .html | 1 |
| .js | 1 |
| .mjs | 1 |
| .tape | 1 |
| .tsbuildinfo | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
