# mezmo/aura

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/mezmo/aura |
| local path | sources/mezmo__aura |
| HEAD | 0c337b6 |
| stars/forks | 0 / 0 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T23:19:42Z |
| trendScore / priorityScore | 96 / 261 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 500 | examples/README.md, examples/quickstart-k8s-sre/README.md, examples/quickstart-orchestration-math/README.md |
| MCP / tool protocol | 500 | examples/README.md, examples/quickstart-k8s-sre/README.md, examples/quickstart-orchestration-math/README.md |
| Infra / observability | 405 | examples/README.md, examples/quickstart-k8s-sre/README.md, examples/quickstart-orchestration-math/README.md |
| RAG / retrieval | 246 | README.md, crates/aura-cli/README.md, crates/aura-web-server/README.md |
| Local LLM / on-device inference | 125 | examples/README.md, README.md, crates/aura-cli/README.md |
| Spec / doc-driven workflow | 51 | README.md, CLAUDE.md, tests/integration/k8s-sre-mcp/Dockerfile |
| LLM wiki / memory / graph | 37 | examples/quickstart-k8s-sre/README.md, README.md, crates/aura-web-server/README.md |
| Security / compliance | 20 | README.md, crates/aura-cli/README.md, Dockerfile |
| Frontend / developer experience | 10 | README.md, Cargo.toml, crates/aura/Cargo.toml |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra, infra-observability, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 276 |
| manifests | 25 |
| docs | 30 |
| tests | 25 |
| ci/ops | 27 |
| spec artifacts | 14 |
| agent instruction files | 10 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | AURA |
| headings | AURA / Table of Contents / Quick Start / More Quickstarts / Project Structure / Development Setup / Usage / Web API Server / Default: reads config.toml / Custom config file |
| excerpt | AURA ! Slack https //img.shields.io/badge/Slack Join%20the%20community 4A154B?logo=slack&logoColor=white https //mezmo.com/r/slack aura ! License https //img.shields.io/badge/License Apache 2.0 blue LICENSE ! Rust https //img.shields.io/badge/Rust 1.85%2B orange?logo=rust https //www.rust lang.org ! MCP https //img.shields.io/badge/MCP compatible green https //modelcontextprotocol.io AURA is an agentic harness that turns an LLM model into a reliable, autonomous service capable of executing real SRE work. AURA provides the guardrails, API servers, state management, authentication, streaming, error handling, and tool integrations necessary to run AI SRE agents safely in production. Key capabil |


## 주요 파일

### Manifests

- examples/README.md
- examples/quickstart-k8s-sre/README.md
- examples/quickstart-orchestration-math/README.md
- README.md
- crates/aura-cli/README.md
- crates/aura-web-server/README.md
- CLAUDE.md
- examples/quickstart-orchestration-math/math-mcp/Dockerfile
- tests/integration/k8s-sre-mcp/Dockerfile
- tests/integration/k8s-sre-mcp/requirements.txt
- tests/integration/scratchpad-mcp/Dockerfile
- tests/integration/scratchpad-mcp/requirements.txt
- compose/math-mcp/Dockerfile
- Cargo.toml
- crates/aura-test-utils/Cargo.toml
- docker-compose.yml
- Dockerfile
- examples/quickstart-orchestration-math/docker-compose.yml
- Makefile
- package.json


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- tests/integration/k8s-sre-mcp/requirements.txt
- tests/integration/scratchpad-mcp/requirements.txt
- crates/aura/src/prompts/continuation_prompt.md
- crates/aura/src/prompts/duplicate_call_abort.md
- crates/aura/src/prompts/duplicate_call_guidance.md
- crates/aura/src/prompts/mod.rs
- crates/aura/src/prompts/orchestrator_preamble.md
- crates/aura/src/prompts/session_history.md
- crates/aura/src/prompts/templates.md
- crates/aura/src/prompts/worker_preamble.md
- crates/aura/src/prompts/worker_task_prompt.md
- docs/adr/2026-06-16-hitl-approval-architecture.md
- examples/minimal/gemini.toml


### Agent Instruction Files

- CLAUDE.md
- crates/aura/src/prompts/continuation_prompt.md
- crates/aura/src/prompts/duplicate_call_abort.md
- crates/aura/src/prompts/duplicate_call_guidance.md
- crates/aura/src/prompts/mod.rs
- crates/aura/src/prompts/orchestrator_preamble.md
- crates/aura/src/prompts/session_history.md
- crates/aura/src/prompts/templates.md
- crates/aura/src/prompts/worker_preamble.md
- crates/aura/src/prompts/worker_task_prompt.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| crates | 175 |
| examples | 20 |
| deployment | 14 |
| compose | 11 |
| docs | 11 |
| tests | 7 |
| .makefiles | 5 |
| configs | 5 |
| .github | 2 |
| scripts | 2 |
| .commitlintrc.js | 1 |
| .config | 1 |
| .config.mk | 1 |
| .dockerignore | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .rs | 156 |
| .md | 30 |
| .toml | 28 |
| .yaml | 14 |
| [no-ext] | 14 |
| .yml | 12 |
| .mk | 6 |
| .py | 3 |
| .txt | 3 |
| .example | 2 |
| .js | 2 |
| .sh | 2 |
| .env | 1 |
| .json | 1 |
| .no-color-codes | 1 |
| .tpl | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
