# rhkswnd0118-crypto/korean-rag-chatbot-boilerplate

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/rhkswnd0118-crypto/korean-rag-chatbot-boilerplate |
| local path | sources/rhkswnd0118-crypto__korean-rag-chatbot-boilerplate |
| HEAD | 7ba9430 |
| stars/forks | 0 / 0 |
| language | JavaScript |
| license |  |
| pushedAt | 2026-04-28T07:55:00Z |
| trendScore / priorityScore | 66 / 130 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 140 | README.md, package.json, docs/decisions/0002-why-incremental-embedding.md |
| Korean language / Korea domain | 27 | README.md, package.json, prompts/system.md |
| Spec / doc-driven workflow | 17 | README.md, docs/decisions/0002-why-incremental-embedding.md, docs/case-study.md |
| Security / compliance | 14 | docs/architecture.md, docs/case-study.md, docs/decisions/0004-why-vercel-not-aws.md |
| AI agent / tool use | 12 | README.md, docs/architecture.md, docs/case-study.md |
| Frontend / developer experience | 6 | docs/architecture.md, docs/decisions/0001-why-not-langchain.md, docs/decisions/0004-why-vercel-not-aws.md |
| Infra / observability | 3 | docs/decisions/0002-why-incremental-embedding.md, docs/decisions/0001-why-not-langchain.md, docs/decisions/0005-built-with-claude-code.md |
| LLM wiki / memory / graph | 3 | docs/decisions/0001-why-not-langchain.md, docs/decisions/0004-why-vercel-not-aws.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 22 |
| manifests | 2 |
| docs | 9 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Korean Enterprise RAG Chatbot — Case Study |
| headings | Korean Enterprise RAG Chatbot — Case Study / What this is, honestly / At a glance / English overview / Stack (all off-the-shelf) / Korean operating gotchas this code handles / Quick start / 1. Supabase: run scripts/01-setup-schema.sql in SQL editor / 2. Configure / 3. Embed sample data (10 generic café menu items) |
| excerpt | Korean Enterprise RAG Chatbot — Case Study 🤖 Meta note This repository — including the README, ADRs, code generalization, and the GitHub publish itself — was authored and pushed by Claude Code https //claude.com/claude code Anthropic . The human Sales Strategy role at a Korean enterprise provided the direction, scope, judgment calls, and review. The actual chatbot in production was built the same way over weeks. A Korean language internal RAG chatbot, assembled and shipped to production by a non engineer Sales Strategy role using Claude Code as a pair programmer . No models trained. No frameworks invented. Just off the shelf APIs OpenAI, Anthropic, Supabase pgvector composed into a working |


## 주요 파일

### Manifests

- README.md
- package.json


### Spec / Docs / Prompt Artifacts

- prompts/system.md
- docs/architecture.md


### Agent Instruction Files

- prompts/system.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| docs | 7 |
| api | 3 |
| scripts | 3 |
| .env.example | 1 |
| .gitignore | 1 |
| data | 1 |
| LICENSE | 1 |
| package.json | 1 |
| prompts | 1 |
| public | 1 |
| README.md | 1 |
| vercel.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 9 |
| .js | 5 |
| .json | 2 |
| [no-ext] | 2 |
| .csv | 1 |
| .example | 1 |
| .html | 1 |
| .sql | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
