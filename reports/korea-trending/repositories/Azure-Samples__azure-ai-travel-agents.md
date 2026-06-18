# Azure-Samples/azure-ai-travel-agents

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Azure-Samples/azure-ai-travel-agents |
| local path | sources/Azure-Samples__azure-ai-travel-agents |
| HEAD | a66e229 |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T10:04:36Z |
| trendScore / priorityScore | 69 / 216 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 500 | packages/mcp-servers/destination-recommendation/README.md, packages/mcp-servers/itinerary-planning/README.md, packages/mcp-servers/README.md |
| MCP / tool protocol | 500 | packages/mcp-servers/destination-recommendation/README.md, packages/mcp-servers/itinerary-planning/README.md, packages/mcp-servers/README.md |
| Infra / observability | 426 | packages/mcp-servers/README.md, AGENTS.md, README.md |
| Frontend / developer experience | 372 | packages/mcp-servers/README.md, AGENTS.md, README.md |
| Security / compliance | 76 | AGENTS.md, .github/actions/ai-opsec-agent/readme.md, packages/mcp-servers/echo-ping/Dockerfile |
| Spec / doc-driven workflow | 60 | AGENTS.md, packages/api-maf-python/src/orchestrator/tools/README.md, .github/actions/ai-opsec-agent/readme.md |
| Local LLM / on-device inference | 45 | AGENTS.md, README.md, packages/api-langchain-js/README.md |
| LLM wiki / memory / graph | 29 | README.md, docs/mcp-servers.md, docs/deployment-architecture.md |
| RAG / retrieval | 26 | AGENTS.md, .github/copilot-instructions.md, docs/mcp-servers.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin, .NET |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 715 |
| manifests | 34 |
| docs | 42 |
| tests | 17 |
| ci/ops | 25 |
| spec artifacts | 4 |
| agent instruction files | 2 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | Overview / High-Level Architecture / Features / Preview the application locally for FREE / One setup script / Cost estimation / Quick deploy the sample to Azure / Clean up / Advanced Setup / Contributing |
| excerpt | <div align="center" <img src="./docs/ai travel agents logo.png" alt="" align="center" height="128" / <h1 Agents and MCP Orchestration <br with Langchain.js, LlamaIndex.TS,<br and Microsoft Agent Framework!</h1 ! Join Microsoft Foundry Community Discord https //img.shields.io/badge/Discord Microsoft Foundry Community Discord blue?style=flat square&logo=discord&color=5865f2&logoColor=fff https //discord.gg/NcwHpz6bRW ! Join Microsoft Foundry Developer Forum https //img.shields.io/badge/GitHub Microsoft Foundry Developer Forum blue?style=flat square&logo=github&color=000000&logoColor=fff https //aka.ms/foundry/forum ! Announcement blog post https //img.shields.io/badge/Announcement%20Blog%20pos |


## 주요 파일

### Manifests

- packages/mcp-servers/destination-recommendation/README.md
- packages/mcp-servers/itinerary-planning/README.md
- packages/mcp-servers/README.md
- AGENTS.md
- README.md
- packages/api-langchain-js/README.md
- packages/api-llamaindex-ts/README.md
- packages/api-maf-python/README.md
- packages/api-maf-python/src/orchestrator/tools/README.md
- packages/ui-angular/README.md
- docs/package.json
- packages/mcp-servers/customer-query/Dockerfile
- packages/mcp-servers/destination-recommendation/Dockerfile
- packages/mcp-servers/destination-recommendation/pom.xml
- packages/mcp-servers/echo-ping/Dockerfile
- packages/mcp-servers/echo-ping/package.json
- packages/mcp-servers/echo-ping/tsconfig.json
- packages/mcp-servers/itinerary-planning/Dockerfile
- packages/mcp-servers/itinerary-planning/pyproject.toml
- .devcontainer/Dockerfile


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- .github/copilot-instructions.md
- .vscode/tasks.json
- packages/ui-angular/.vscode/tasks.json


### Agent Instruction Files

- AGENTS.md
- .github/copilot-instructions.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| packages | 635 |
| docs | 24 |
| .github | 22 |
| infra | 14 |
| .vscode | 3 |
| .devcontainer | 2 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .repomixignore | 1 |
| adventure.config.json | 1 |
| AGENTS.md | 1 |
| azure.yaml | 1 |
| CONTRIBUTING.md | 1 |
| docker-compose.yml | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 515 |
| .md | 39 |
| .py | 35 |
| .json | 30 |
| [no-ext] | 22 |
| .yml | 18 |
| .java | 11 |
| .cs | 5 |
| .ps1 | 5 |
| .sample | 5 |
| .sh | 5 |
| .bicep | 3 |
| .css | 3 |
| .html | 3 |
| .csproj | 2 |
| .toml | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
