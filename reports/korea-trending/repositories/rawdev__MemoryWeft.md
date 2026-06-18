# rawdev/MemoryWeft

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/rawdev/MemoryWeft |
| local path | sources/rawdev__MemoryWeft |
| HEAD | 7d29ffa |
| stars/forks | 9 / 3 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2026-06-17T00:18:32Z |
| trendScore / priorityScore | 91 / 308 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 500 | README.md, src/k2g/ui/templates/CLAUDE.md, packaging/portable/README.txt |
| RAG / retrieval | 379 | README.md, src/k2g/ui/templates/CLAUDE.md, docs/prompt_guide.md |
| MCP / tool protocol | 358 | README.md, src/k2g/ui/templates/CLAUDE.md, packaging/portable/README.txt |
| Spec / doc-driven workflow | 103 | README.md, docs/prompt_guide.md, docs/install.md |
| Security / compliance | 52 | README.md, src/k2g/ui/templates/CLAUDE.md, packaging/portable/README.txt |
| AI agent / tool use | 21 | docs/prompt_guide.md, src/k2g/installer/prompts.py, src/k2g/mcp/memory_tools.py |
| Infra / observability | 14 | src/k2g/mcp/__main__.py, src/k2g/mcp/server.py, src/k2g/cli/__init__.py |
| Frontend / developer experience | 11 | src/k2g/core/config.py, src/k2g/desktop/__init__.py, src/k2g/desktop/bridge.py |
| Local LLM / on-device inference | 9 | src/k2g/mcp/factory.py, src/k2g/trainer/llm_utils.py, src/k2g/adapters/event_brancher.py |
| Korean language / Korea domain | 3 | packaging/portable/README.txt, packaging/portable/build_portable.py, src/k2g/core/config.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, context-engineering, documentParsing, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 202 |
| manifests | 3 |
| docs | 8 |
| tests | 0 |
| ci/ops | 3 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | MWeft |
| headings | MWeft / Architecture / Manager / What makes it different / What's in this distribution / Status / Quickstart — portable app (no Python) / Uninstall / Install via pip (developers) / First run & antivirus |
| excerpt | MWeft English 한국어 README.KR.md MemoryWeft is a knowledge graph memory that implements the Event Centric Knowledge Graph ECKG idea. It runs as a stdio MCP server backed by a single SQLite file, or Postgres + pgvector. MemoryWeft is shared memory. Multiple AIs can access one memory at the same time. AIs running separately on your laptop and desktop — and the AIs each teammate uses on their own — share context out of a single memory. Save an important conversation with your AI using a command, or convert a whole document into memory in one shot. Stored data can be recalled anytime with a command, and the AI will go on to search for related content by context and fold it into the results. Just u |


## 주요 파일

### Manifests

- README.md
- src/k2g/ui/templates/CLAUDE.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- src/k2g/ui/templates/CLAUDE.md
- .github/workflows/claude.yml


### Agent Instruction Files

- src/k2g/ui/templates/CLAUDE.md
- .github/workflows/claude.yml


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 181 |
| packaging | 8 |
| .github | 3 |
| docs | 2 |
| .gitattributes | 1 |
| .gitignore | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| pyproject.toml | 1 |
| README.KR.md | 1 |
| README.md | 1 |
| scripts | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 171 |
| .md | 8 |
| .json | 4 |
| [no-ext] | 4 |
| .yml | 3 |
| .bat | 2 |
| .command | 2 |
| .html | 2 |
| .js | 2 |
| .txt | 2 |
| .toml | 1 |
| .yaml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
