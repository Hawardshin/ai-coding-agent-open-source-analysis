# AgentBridge-Lab/korea-space-support-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/AgentBridge-Lab/korea-space-support-mcp |
| local path | sources/AgentBridge-Lab__korea-space-support-mcp |
| HEAD | 420220b |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-09T23:20:08Z |
| trendScore / priorityScore | 69 / 179 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 423 | README.md, apps/mcp/package.json, docs/korea-space-mcp-work-report.md |
| Korean language / Korea domain | 145 | README.md, docs/korea-space-mcp-work-report.md, docs/space-mcp-handoff.md |
| Security / compliance | 85 | docs/korea-space-mcp-work-report.md, docs/space-mcp-handoff.md, docs/korea-space-data-sources.md |
| AI agent / tool use | 65 | docs/korea-space-mcp-work-report.md, docs/korea-space-data-sources.md, docs/space-ingestion-runbook.md |
| Frontend / developer experience | 60 | README.md, apps/mcp/package.json, docs/korea-space-mcp-work-report.md |
| Spec / doc-driven workflow | 27 | docs/web-ui-spec.md, docs/korea-space-data-sources.md, korea-business-mcp-agent-instructions.md |
| RAG / retrieval | 18 | docs/korea-space-mcp-work-report.md, korea-business-mcp-product-plan.md, korea-support-mcp-agent-instructions.md |
| Infra / observability | 13 | korea-business-mcp-agent-instructions.md, korea-space-support-mcp-agent-instructions.md, korea-support-mcp-agent-instructions-ko.md |
| LLM wiki / memory / graph | 2 | docs/korea-space-mcp-work-report.md, docs/space-mcp-handoff.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 87 |
| manifests | 11 |
| docs | 18 |
| tests | 2 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Korea Space Support MCP |
| headings | Korea Space Support MCP / 🌐 라이브 데모 / 현재 데이터 스냅샷 / 무엇이 들어 있나 / 빠른 시작 / (선택) 출처에서 새로 ingest 하려면 Python 의존성 1회 설치 / PDF 마감일 추출에는 pdftotext(빌드된 poppler 등)도 사용됩니다 / 사전 생성된 데이터 즉시 조회 / REST API 실행 / MCP stdio 서버 실행 (Claude Desktop, Cursor 등에서 사용) |
| excerpt | Korea Space Support MCP ! Live https //img.shields.io/badge/live korea space support mcp.vercel.app 7c3aed https //korea space support mcp.vercel.app ! verify space https //github.com/AgentBridge Lab/korea space support mcp/actions/workflows/verify space.yml/badge.svg https //github.com/AgentBridge Lab/korea space support mcp/actions/workflows/verify space.yml ! License MIT https //img.shields.io/badge/License MIT yellow.svg LICENSE ! Node https //img.shields.io/badge/node %E2%89%A520 339933?logo=node.js&logoColor=white package.json ! TypeScript https //img.shields.io/badge/TypeScript 5.9 3178c6?logo=typescript&logoColor=white package.json ! MCP https //img.shields.io/badge/MCP server 7c3aed |


## 주요 파일

### Manifests

- README.md
- apps/mcp/package.json
- apps/mcp/tsconfig.json
- package.json
- apps/api/package.json
- apps/api/tsconfig.json
- apps/web/package.json
- apps/web/tsconfig.json
- packages/shared/package.json
- packages/shared/tsconfig.json
- tsconfig.base.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| apps | 31 |
| packages | 16 |
| docs | 9 |
| scripts | 7 |
| data | 6 |
| .env.example | 1 |
| .github | 1 |
| .gitignore | 1 |
| claude-space-review.md | 1 |
| korea-business-mcp-agent-instructions.md | 1 |
| korea-business-mcp-product-plan.md | 1 |
| korea-space-support-mcp-agent-instructions.md | 1 |
| korea-support-mcp-agent-instructions-ko.md | 1 |
| korea-support-mcp-agent-instructions.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 27 |
| .md | 18 |
| .json | 17 |
| .tsx | 11 |
| .mjs | 7 |
| [no-ext] | 2 |
| .css | 1 |
| .example | 1 |
| .jsonl | 1 |
| .plist | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
