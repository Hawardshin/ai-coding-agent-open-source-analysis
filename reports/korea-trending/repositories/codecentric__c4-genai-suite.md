# codecentric/c4-genai-suite

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/codecentric/c4-genai-suite |
| local path | sources/codecentric__c4-genai-suite |
| HEAD | 1b2d1f5 |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T19:53:43Z |
| trendScore / priorityScore | 67 / 184 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 254 | services/eval/README.md, frontend/README.md, helm-chart/README.md |
| RAG / retrieval | 99 | helm-chart/README.md, README.md, services/reis/README.md |
| Security / compliance | 84 | helm-chart/README.md, README.md, services/reis/README.md |
| Infra / observability | 74 | backend/README.md, helm-chart/README.md, README.md |
| MCP / tool protocol | 51 | e2e/README.md, README.md, scripts/README.md |
| Spec / doc-driven workflow | 50 | e2e/README.md, frontend/README.md, scripts/README.md |
| AI agent / tool use | 44 | backend/package.json, backend/docs/Messaging.md, backend/src/controllers/eval/eval.controller.e2e.spec.ts |
| Local LLM / on-device inference | 29 | helm-chart/README.md, README.md, backend/package.json |
| LLM wiki / memory / graph | 14 | backend/README.md, helm-chart/README.md, .github/workflows/reis-stresstest.yaml |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 1404 |
| manifests | 40 |
| docs | 36 |
| tests | 228 |
| ci/ops | 83 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | c4 GenAI Suite |
| headings | c4 GenAI Suite / Features / Large Language Models (LLM) and Multimodal Models / Retrieval Augmented Generation (RAG) / Extensions / Getting Started / Using Docker-Compose / Using Helm & Kubernetes / Setting up Assistants and Extensions / Model Context Protocol (MCP) [optional] |
| excerpt | c4 GenAI Suite An AI chatbot application with Model Context Provider MCP integration, powered by ai sdk and compatibility for all major Large Language Models LLMs and Embedding Models. Administrators can create assistants with different capabilities by adding extensions, such as RAG Retrieval Augmented Generation services or MCP servers. The application is built using a modern tech stack, including React, NestJS, and Python FastAPI for the REI S service. Users can interact with assistants through a user friendly interface. Depending on the assistant's configuration, users may be able to ask questions, upload their own files, or use other features. The assistants interact with various LLM pro |


## 주요 파일

### Manifests

- services/eval/llm_eval/alembic/README.md
- services/eval/README.md
- backend/README.md
- e2e/README.md
- frontend/README.md
- helm-chart/README.md
- README.md
- scripts/README.md
- services/confluence-importer/README.md
- services/reis/README.md
- dev/mcp-tool-as-server/Dockerfile
- dev/mcp-tool-as-server/package.json
- dev/mcp-tool-as-server/tsconfig.json
- services/eval/Dockerfile
- services/eval/pyproject.toml
- backend/Dockerfile
- backend/package.json
- backend/tsconfig.json
- docker-compose.yml
- Dockerfile


### Spec / Docs / Prompt Artifacts

- .github/workflows/eval.yaml
- services/eval/ROADMAP.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| frontend | 513 |
| backend | 429 |
| services | 298 |
| helm-chart | 49 |
| e2e | 42 |
| .github | 24 |
| dev | 19 |
| scripts | 6 |
| .vscode | 2 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .gitleaks.toml | 1 |
| .gitleaksignore | 1 |
| .husky | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 693 |
| .py | 230 |
| .tsx | 193 |
| .yaml | 66 |
| [no-ext] | 62 |
| .json | 42 |
| .md | 31 |
| .env | 13 |
| .js | 13 |
| .example | 6 |
| .mjs | 6 |
| .yml | 6 |
| .puml | 5 |
| .csv | 4 |
| .toml | 4 |
| .xml | 4 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
