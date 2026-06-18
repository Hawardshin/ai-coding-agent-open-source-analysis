# agentgateway/agentgateway

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/agentgateway/agentgateway |
| local path | sources/agentgateway__agentgateway |
| HEAD | 3965abc |
| stars/forks | 0 / 0 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T19:56:52Z |
| trendScore / priorityScore | 66 / 203 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Infra / observability | 500 | examples/README.md, controller/test/e2e/README.md, controller/test/README.md |
| Security / compliance | 439 | examples/ai-prompt-guard/README.md, examples/mcp-authentication/README.md, crates/agentgateway/src/llm/README.md |
| Spec / doc-driven workflow | 411 | crates/agentgateway/tests/common/testdata/README.md, examples/mcp-authentication/README.md, examples/README.md |
| MCP / tool protocol | 395 | examples/mcp-authentication/README.md, examples/README.md, controller/hack/testbox/README.md |
| AI agent / tool use | 80 | examples/a2a/strands-agents/README.md, examples/README.md, examples/a2a/README.md |
| Frontend / developer experience | 80 | controller/install/dashboards/README.md, crates/agentgateway/Cargo.toml, go.mod |
| RAG / retrieval | 5 | crates/agentgateway/src/llm/README.md, controller/api/README.md, controller/pkg/agentgateway/plugins/testdata/backendpolicy/ai.yaml |
| LLM wiki / memory / graph | 2 | crates/agentgateway-app/Cargo.toml |
| Local LLM / on-device inference | 1 | controller/api/tests/testdata/agentgateway_backend_valid.yaml |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory, infra, infra-observability, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 1776 |
| manifests | 40 |
| docs | 57 |
| tests | 567 |
| ci/ops | 64 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | Intro to Agentgateway Video / Key Features / Getting Started / Documentation / Sponsors / Contributing / Community Meetings / Roadmap / Contributors / Star History |
| excerpt | <div align="center" <picture <source media=" prefers color scheme dark " srcset="https //raw.githubusercontent.com/agentgateway/agentgateway/refs/heads/main/img/banner light.svg" alt="agentgateway" width="400" <source media=" prefers color scheme light " srcset="https //raw.githubusercontent.com/agentgateway/agentgateway/refs/heads/main/img/banner dark.svg" alt="agentgateway" width="400" <img alt="agentgateway" src="https //raw.githubusercontent.com/agentgateway/agentgateway/refs/heads/main/img/banner light.svg" </picture <div <a href="https //opensource.org/licenses/Apache 2.0" <img src="https //img.shields.io/badge/License Apache2.0 brightgreen.svg?style=flat" alt="License Apache 2.0" </a |


## 주요 파일

### Manifests

- crates/agentgateway/tests/common/testdata/README.md
- examples/a2a/strands-agents/README.md
- examples/ai-prompt-guard/README.md
- examples/mcp-authentication/README.md
- examples/prompt-enrichment/README.md
- crates/agentgateway/src/llm/README.md
- examples/README.md
- architecture/README.md
- controller/hack/testbox/README.md
- controller/test/e2e/README.md
- controller/test/README.md
- design/README.md
- examples/a2a/README.md
- examples/authorization/README.md
- examples/basic/README.md
- examples/delegation/README.md
- examples/http/README.md
- examples/multiplex/README.md
- examples/oauth2-proxy/README.md
- examples/oidc/README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| controller | 858 |
| crates | 645 |
| ui | 102 |
| examples | 68 |
| tools | 35 |
| .github | 9 |
| api | 7 |
| manifests | 7 |
| schema | 7 |
| img | 5 |
| architecture | 3 |
| design | 3 |
| .cargo | 1 |
| .devcontainer.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .yaml | 508 |
| .go | 359 |
| .rs | 358 |
| .snap | 161 |
| .json | 74 |
| .tsx | 73 |
| .md | 57 |
| [no-ext] | 49 |
| .toml | 18 |
| .ts | 18 |
| .golden | 15 |
| .proto | 15 |
| .sh | 15 |
| .pem | 7 |
| .yml | 7 |
| .bin | 6 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
