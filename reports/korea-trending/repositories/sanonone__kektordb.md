# sanonone/kektordb

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/sanonone/kektordb |
| local path | sources/sanonone__kektordb |
| HEAD | a4d12ac |
| stars/forks | 0 / 0 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T17:09:49Z |
| trendScore / priorityScore | 66 / 202 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 500 | internal/mcp/README.md, pkg/embeddings/README.md, pkg/llm/README.md |
| RAG / retrieval | 500 | internal/mcp/README.md, pkg/embeddings/README.md, pkg/llm/README.md |
| MCP / tool protocol | 251 | internal/mcp/README.md, pkg/embeddings/README.md, pkg/llm/README.md |
| AI agent / tool use | 243 | internal/mcp/README.md, README.md, clients/python/README.md |
| Local LLM / on-device inference | 111 | pkg/embeddings/README.md, pkg/llm/README.md, README.md |
| Frontend / developer experience | 51 | internal/mcp/README.md, README.md, clients/python/README.md |
| Infra / observability | 29 | README.md, clients/python/README.md, internal/server/README.md |
| Security / compliance | 24 | README.md, clients/python/README.md, internal/server/README.md |
| Spec / doc-driven workflow | 5 | pkg/rag/README.md, README.md, clients/python/README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, context-engineering, data-ml, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 288 |
| manifests | 32 |
| docs | 32 |
| tests | 74 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | KektorDB |
| headings | KektorDB / What is KektorDB? / Built for AI Engineers / But Still a Powerful Engine / Use Cases / 1. AI Agent Memory (Primary) / 2. Multi-Agent Shared Memory / 3. RAG with Memory / 4. Embedded Vector Search (Go) / Key Differentiators |
| excerpt | KektorDB The cognitive memory layer for AI agents. <p align="center" <img src="docs/images/logo.png" alt="KektorDB Logo" width="500" </p ! GitHub Sponsors https //img.shields.io/badge/Sponsor sanonone pink?logo=github https //github.com/sponsors/sanonone ! Ko fi https //img.shields.io/badge/Support%20me Ko fi orange?logo=ko fi https //ko fi.com/sanon ! Go Reference https //pkg.go.dev/badge/github.com/sanonone/kektordb.svg https //pkg.go.dev/github.com/sanonone/kektordb ! PyPI version https //badge.fury.io/py/kektordb client.svg https //badge.fury.io/py/kektordb client ! License https //img.shields.io/badge/License Apache 2.0 blue.svg https //opensource.org/licenses/Apache 2.0 <p align="cente |


## 주요 파일

### Manifests

- internal/mcp/README.md
- pkg/embeddings/README.md
- pkg/llm/README.md
- pkg/rag/README.md
- pkg/storage/mmap/README.md
- README.md
- clients/python/README.md
- clients/typescript/README.md
- cmd/kektordb/README.md
- internal/server/README.md
- native/compute/README.md
- pkg/auth/README.md
- pkg/client/cognitive/README.md
- pkg/client/README.md
- pkg/cognitive/README.md
- pkg/core/distance/README.md
- pkg/core/hnsw/README.md
- pkg/core/README.md
- pkg/engine/README.md
- pkg/metrics/README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| pkg | 149 |
| internal | 51 |
| clients | 44 |
| .github | 7 |
| examples | 6 |
| native | 6 |
| cmd | 3 |
| docs | 3 |
| .dockerignore | 1 |
| .gitignore | 1 |
| BENCHMARKS.md | 1 |
| CHANGELOG.md | 1 |
| cognitive_layers_example.yaml | 1 |
| cognitive.yaml | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .go | 175 |
| .py | 33 |
| .md | 32 |
| .ts | 9 |
| .yml | 6 |
| [no-ext] | 6 |
| .js | 5 |
| .yaml | 5 |
| .json | 4 |
| .rs | 3 |
| .html | 2 |
| .mod | 2 |
| .sum | 2 |
| .css | 1 |
| .h | 1 |
| .toml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
