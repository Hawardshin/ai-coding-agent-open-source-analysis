# bripin123/rag-memory-epf-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/bripin123/rag-memory-epf-mcp |
| local path | sources/bripin123__rag-memory-epf-mcp |
| HEAD | 58283cd |
| stars/forks | 0 / 0 |
| language | JavaScript |
| license |  |
| pushedAt | 2026-05-28T01:45:27Z |
| trendScore / priorityScore | 104 / 233 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 500 | README.md, docs/superpowers/specs/2026-05-27-rag-memory-engine-reliability-design.md, package.json |
| RAG / retrieval | 334 | README.md, docs/superpowers/specs/2026-05-27-rag-memory-engine-reliability-design.md, package.json |
| MCP / tool protocol | 80 | README.md, docs/superpowers/specs/2026-05-27-rag-memory-engine-reliability-design.md, package.json |
| Frontend / developer experience | 49 | README.md, package.json, specs/changes/phase3-mcp-sdk/proposal.md |
| Korean language / Korea domain | 19 | README.md, package.json, specs/changes/cross-lingual-dictionary-externalization/proposal.md |
| Spec / doc-driven workflow | 16 | docs/superpowers/specs/2026-05-27-rag-memory-engine-reliability-design.md, docs/superpowers/plans/2026-05-27-rag-memory-engine-reliability.md, specs/changes/cross-lingual-dictionary-externalization/tasks.md |
| AI agent / tool use | 12 | README.md, package.json, src/tools/rag-tools.ts |
| Local LLM / on-device inference | 3 | README.md, src/migrations/migrations.ts |
| Security / compliance | 3 | README.md, specs/upgrade-review.md |
| Infra / observability | 2 | src/tools/rag-tools.ts |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, context-engineering, documentParsing, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 40 |
| manifests | 3 |
| docs | 15 |
| tests | 19 |
| ci/ops | 0 |
| spec artifacts | 12 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | rag-memory-epf-mcp |
| headings | rag-memory-epf-mcp / Key Features / Quick Start / Tools (31) / Knowledge Graph (7) / Document Pipeline (9) / Search & Retrieval (9) / Migration (3) / Graph Analytics (3) / Document Processing Pipeline |
| excerpt | rag memory epf mcp ! npm version https //img.shields.io/npm/v/rag memory epf mcp https //www.npmjs.com/package/rag memory epf mcp ! npm downloads https //img.shields.io/npm/dm/rag memory epf mcp https //www.npmjs.com/package/rag memory epf mcp ! GitHub license https //img.shields.io/github/license/bripin123/rag memory epf mcp https //github.com/bripin123/rag memory epf mcp/blob/main/LICENSE ! Platforms https //img.shields.io/badge/Platform Windows%20%7C%20macOS%20%7C%20Linux blue https //github.com/bripin123/rag memory epf mcp A project local RAG memory MCP server — knowledge graph + multilingual vector search + FTS5 full text search, all in a single SQLite file per project. Key Features Pro |


## 주요 파일

### Manifests

- README.md
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- docs/superpowers/specs/2026-05-27-rag-memory-engine-reliability-design.md
- specs/changes/phase3-mcp-sdk/proposal.md
- specs/changes/phase3-mcp-sdk/tasks.md
- specs/upgrade-review.md
- specs/changes/cross-lingual-dictionary-externalization/proposal.md
- specs/changes/cross-lingual-dictionary-externalization/tasks.md
- specs/changes/phase1-quick-wins/proposal.md
- specs/changes/phase1-quick-wins/tasks.md
- specs/changes/phase2-core-features/proposal.md
- specs/changes/phase2-core-features/tasks.md
- specs/changes/phase4-advanced/proposal.md
- specs/changes/phase4-advanced/tasks.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| specs | 11 |
| src | 10 |
| test | 7 |
| docs | 2 |
| .gitignore | 1 |
| .npmignore | 1 |
| .releaserc.yml | 1 |
| index.ts | 1 |
| LICENSE | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| README.md | 1 |
| SPEC-syncDocumentFromFile.md | 1 |
| tsconfig.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 15 |
| .ts | 11 |
| .mjs | 7 |
| .json | 3 |
| [no-ext] | 3 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
