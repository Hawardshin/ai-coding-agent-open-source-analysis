# dcostenco/prism-coder

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/dcostenco/prism-coder |
| local path | sources/dcostenco__prism-coder |
| HEAD | 897edb9 |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-16T20:20:00Z |
| trendScore / priorityScore | 68 / 233 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 500 | examples/adversarial-eval-demo/README.md, examples/langgraph-agent/README.md, examples/multi-agent-hivemind/README.md |
| LLM wiki / memory / graph | 500 | examples/langgraph-agent/README.md, examples/multi-agent-hivemind/README.md, tests/benchmarks/cascade-14b-32b-opus/README.md |
| MCP / tool protocol | 500 | examples/adversarial-eval-demo/README.md, examples/langgraph-agent/README.md, examples/multi-agent-hivemind/README.md |
| Local LLM / on-device inference | 380 | tests/benchmarks/cascade-14b-32b-opus/README.md, tests/benchmarks/prism-routing-100/README.md, README.md |
| RAG / retrieval | 346 | examples/langgraph-agent/README.md, tests/README.md, examples/langgraph-ts/README.md |
| Security / compliance | 264 | examples/adversarial-eval-demo/README.md, examples/langgraph-ts/README.md, README.md |
| Frontend / developer experience | 129 | examples/adversarial-eval-demo/README.md, examples/langgraph-agent/README.md, tests/README.md |
| Spec / doc-driven workflow | 40 | examples/adversarial-eval-demo/README.md, examples/multi-agent-hivemind/README.md, tests/benchmarks/prism-routing-100/README.md |
| Infra / observability | 33 | examples/multi-agent-hivemind/README.md, docker-compose.yml, package.json |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, context-engineering, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 428 |
| manifests | 20 |
| docs | 58 |
| tests | 120 |
| ci/ops | 9 |
| spec artifacts | 3 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Prism Coder |
| headings | Prism Coder / Quickstart / What it does / Mind Palace — persistent memory that survives across sessions / Knowledge Graph — semantic + keyword + graph search / Session History — immutable audit trail / Session Drift Detection / Behavioral Verification — catch bad edits before they happen / Time Travel / Cognitive Routing |
| excerpt | Prism Coder Give your AI agent memory that lasts. Persistent sessions, knowledge graphs, and offline tool routing — fully local and free. ! npm https //img.shields.io/npm/v/prism mcp server?color=cb0000&label=npm https //www.npmjs.com/package/prism mcp server ! MCP Registry https //img.shields.io/badge/MCP Registry listed 00ADD8 https //github.com/modelcontextprotocol/servers ! License AGPL 3.0 https //img.shields.io/badge/License AGPL 3.0 blue.svg LICENSE ! Models on HuggingFace https //img.shields.io/badge/🤗 prism coder yellow https //huggingface.co/dcostenco <p align="center" <img src="docs/v11 hivemind multi agent dashboard.jpg" alt="Prism Coder — Mind Palace Dashboard with Knowledge Gr |


## 주요 파일

### Manifests

- examples/adversarial-eval-demo/README.md
- examples/langgraph-agent/README.md
- examples/multi-agent-hivemind/README.md
- tests/benchmarks/cascade-14b-32b-opus/README.md
- tests/benchmarks/locomo-plus-cognitive/README.md
- tests/benchmarks/prism-routing-100/README.md
- tests/README.md
- examples/langgraph-ts/README.md
- examples/skills/aba-precision-protocol/README.md
- examples/vercel-ai-sdk-prism/README.md
- README.md
- GEMINI.md
- docker-compose.yml
- Dockerfile
- examples/vercel-ai-sdk-prism/package.json
- examples/vercel-ai-sdk-prism/tsconfig.json
- package.json
- tsconfig.json
- packages/prism-coder/package.json
- tsconfig.tsbuildinfo


### Spec / Docs / Prompt Artifacts

- GEMINI.md
- docs/ARCHITECTURE.md
- ROADMAP.md


### Agent Instruction Files

- GEMINI.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 144 |
| tests | 117 |
| examples | 30 |
| docs | 28 |
| supabase | 27 |
| scripts | 10 |
| .github | 8 |
| adapters | 7 |
| vertex-ai | 6 |
| skills | 5 |
| .agents | 3 |
| packages | 2 |
| .env.example | 1 |
| .gitignore | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 259 |
| .md | 55 |
| .py | 28 |
| .sql | 27 |
| .json | 12 |
| [no-ext] | 11 |
| .yml | 9 |
| .js | 4 |
| .mjs | 4 |
| .sh | 4 |
| .txt | 3 |
| .example | 2 |
| .html | 2 |
| .tsx | 2 |
| .32b | 1 |
| .cjs | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
