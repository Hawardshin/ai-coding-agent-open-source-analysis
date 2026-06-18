# gustavoeenriquez/MakerAi

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/gustavoeenriquez/MakerAi |
| local path | sources/gustavoeenriquez__MakerAi |
| HEAD | a2f0610 |
| stars/forks | 0 / 0 |
| language | Pascal |
| license |  |
| pushedAt | 2026-06-17T19:14:55Z |
| trendScore / priorityScore | 85 / 254 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 500 | Docs/Version 3/MCPServer/CLAUDE.md, Docs/CLAUDE.md, Demos-V3_1/021-RAG+Postgres-UpdateDB/CLAUDE.md |
| RAG / retrieval | 500 | Demos-V3_1/025-RAGGraph/Docs/CLAUDE.md, Demos/025-RAGGraph/Docs/CLAUDE.md, Docs/Version 3/RAG/CLAUDE.md |
| Spec / doc-driven workflow | 456 | Demos-V3_1/025-RAGGraph/Docs/CLAUDE.md, Demos/025-RAGGraph/Docs/CLAUDE.md, Docs/Version 3/MCPServer/CLAUDE.md |
| AI agent / tool use | 240 | Demos-V3_1/025-RAGGraph/Docs/CLAUDE.md, Demos/025-RAGGraph/Docs/CLAUDE.md, Docs/Version 3/RAG/CLAUDE.md |
| Local LLM / on-device inference | 161 | Demos-V3_1/025-RAGGraph/Docs/CLAUDE.md, Demos/025-RAGGraph/Docs/CLAUDE.md, Demos-V3_1/021-RAG+Postgres-UpdateDB/CLAUDE.md |
| LLM wiki / memory / graph | 111 | Demos-V3_1/025-RAGGraph/Docs/CLAUDE.md, Demos/025-RAGGraph/Docs/CLAUDE.md, Docs/Version 3/RAG/CLAUDE.md |
| Security / compliance | 27 | Demos-V3_1/031-MCPServer/CLAUDE.md, Demos-V3_1/032-MCP_StdIO_FileManager/CLAUDE.md, Demos-V3_1/032-MCPServerDataSnap/CLAUDE.md |
| Infra / observability | 7 | Source/Utils/CLAUDE.md, Demos-V3_1/066-AutoMCPConsoleTest/console_output.txt, ppm/readmeppm.txt |
| Frontend / developer experience | 5 | Source/Design/CLAUDE.md, Demos-V3_1/023-RAGVQL/Docs/VQL System Prompt.txt, Demos-V3_1/023-RAGVQL/system_prompt_vql.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, frontend-dx, graphMemory, infra-observability, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, security-compliance, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 1267 |
| manifests | 40 |
| docs | 116 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | MakerAI Suite v3.4 — The AI Ecosystem for Delphi |
| headings | MakerAI Suite v3.4 — The AI Ecosystem for Delphi / MakerAI is more than an API wrapper / 🚀 What's New in v3.4 / Delphi 13.1 Florence Support / Selective Driver Registration / Real-Time STT — TAiRealtimeConnection / cmSmartDispatch — Intelligent Chat Routing / Models Updated (May 2026) / Agent Improvements / Bug Fixes |
| excerpt | MakerAI Suite v3.4 — The AI Ecosystem for Delphi 🌐 Official Website https //makerai.cimamaker.com https //makerai.cimamaker.com 📖 Manual https //www.gustavoenriquez.com/book makerai https //www.gustavoenriquez.com/book makerai — available in English and Spanish ! GitHub Stars https //img.shields.io/github/stars/gustavoeenriquez/MakerAi?style=social https //github.com/gustavoeenriquez/MakerAi ! GitHub Issues https //img.shields.io/github/issues/gustavoeenriquez/MakerAi https //github.com/gustavoeenriquez/MakerAi/issues ! License https //img.shields.io/github/license/gustavoeenriquez/MakerAi LICENSE.txt ! Telegram https //img.shields.io/badge/Join Telegram%20Chat blue.svg https //t.me/+7Laih |


## 주요 파일

### Manifests

- Demos-V3_1/025-RAGGraph/Docs/CLAUDE.md
- Demos/025-RAGGraph/Docs/CLAUDE.md
- Docs/Version 3/MCPServer/CLAUDE.md
- Docs/Version 3/RAG/CLAUDE.md
- Docs/CLAUDE.md
- Demos-V3_1/021-RAG+Postgres-UpdateDB/CLAUDE.md
- Demos-V3_1/022-1-RAG_SQLite/CLAUDE.md
- Demos-V3_1/023-RAGVQL/CLAUDE.md
- Demos-V3_1/025-RAGGraph/CLAUDE.md
- Demos-V3_1/025-RAGGraph/DatosGrafo/CLAUDE.md
- Demos-V3_1/026-RAGGraph-Basic/CLAUDE.md
- Demos-V3_1/031-MCPServer/CLAUDE.md
- Demos-V3_1/032-MCP_StdIO_FileManager/CLAUDE.md
- Demos-V3_1/032-MCPServerDataSnap/CLAUDE.md
- Demos-V3_1/035-MCPServerWithTAiFunctions/CLAUDE.md
- Demos-V3_1/036-MCPServerStdIO_AiFunction/CLAUDE.md
- Demos-V3_1/051-AgentDemo/CLAUDE.md
- Demos-V3_1/052-AgentConsole/CLAUDE.md
- Demos-V3_1/053-DemoAgentesTools/CLAUDE.md
- Demos-V3_1/090-Varios/CompareEmbeddings/CLAUDE.md


### Spec / Docs / Prompt Artifacts

- Demos-V3_1/025-RAGGraph/Docs/CLAUDE.md
- Demos/025-RAGGraph/Docs/CLAUDE.md
- Docs/Version 3/MCPServer/CLAUDE.md
- Docs/Version 3/RAG/CLAUDE.md
- Docs/CLAUDE.md
- Demos-V3_1/021-RAG+Postgres-UpdateDB/CLAUDE.md
- Demos-V3_1/022-1-RAG_SQLite/CLAUDE.md
- Demos-V3_1/023-RAGVQL/CLAUDE.md
- Demos-V3_1/025-RAGGraph/CLAUDE.md
- Demos-V3_1/025-RAGGraph/DatosGrafo/CLAUDE.md
- Demos-V3_1/026-RAGGraph-Basic/CLAUDE.md
- Demos-V3_1/031-MCPServer/CLAUDE.md
- Demos-V3_1/032-MCP_StdIO_FileManager/CLAUDE.md
- Demos-V3_1/032-MCPServerDataSnap/CLAUDE.md
- Demos-V3_1/035-MCPServerWithTAiFunctions/CLAUDE.md
- Demos-V3_1/036-MCPServerStdIO_AiFunction/CLAUDE.md
- Demos-V3_1/051-AgentDemo/CLAUDE.md
- Demos-V3_1/052-AgentConsole/CLAUDE.md
- Demos-V3_1/053-DemoAgentesTools/CLAUDE.md
- Demos-V3_1/090-Varios/CompareEmbeddings/CLAUDE.md


### Agent Instruction Files

- Demos-V3_1/025-RAGGraph/Docs/CLAUDE.md
- Demos/025-RAGGraph/Docs/CLAUDE.md
- Docs/Version 3/MCPServer/CLAUDE.md
- Docs/Version 3/RAG/CLAUDE.md
- Docs/CLAUDE.md
- Demos-V3_1/021-RAG+Postgres-UpdateDB/CLAUDE.md
- Demos-V3_1/022-1-RAG_SQLite/CLAUDE.md
- Demos-V3_1/023-RAGVQL/CLAUDE.md
- Demos-V3_1/025-RAGGraph/CLAUDE.md
- Demos-V3_1/025-RAGGraph/DatosGrafo/CLAUDE.md
- Demos-V3_1/026-RAGGraph-Basic/CLAUDE.md
- Demos-V3_1/031-MCPServer/CLAUDE.md
- Demos-V3_1/032-MCP_StdIO_FileManager/CLAUDE.md
- Demos-V3_1/032-MCPServerDataSnap/CLAUDE.md
- Demos-V3_1/035-MCPServerWithTAiFunctions/CLAUDE.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| Demos-V3_1 | 524 |
| Source | 219 |
| Demos-V3_4 | 190 |
| Demos | 180 |
| Demos-Book | 87 |
| Docs | 36 |
| Apps | 16 |
| Resources | 7 |
| .gitattributes | 1 |
| .gitignore | 1 |
| CLAUDE.md | 1 |
| LICENSE.txt | 1 |
| ppm | 1 |
| README_3.1.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .res | 250 |
| .pas | 245 |
| .dproj | 234 |
| .dpr | 228 |
| .md | 81 |
| .fmx | 39 |
| .bmp | 35 |
| .dfm | 31 |
| .txt | 30 |
| .docx | 21 |
| .package | 9 |
| .paipkg | 9 |
| .tool | 9 |
| .groupproj | 8 |
| .dpk | 5 |
| .rc | 4 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
