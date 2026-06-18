# koi2026/opentax

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/koi2026/opentax |
| local path | sources/koi2026__opentax |
| HEAD | 38c49cb |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-04T08:44:08Z |
| trendScore / priorityScore | 104 / 225 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 500 | AGENTS.md, README.md, CLAUDE.md |
| AI agent / tool use | 135 | AGENTS.md, README.md, CLAUDE.md |
| MCP / tool protocol | 93 | AGENTS.md, README.md, CLAUDE.md |
| Spec / doc-driven workflow | 55 | AGENTS.md, README.md, CLAUDE.md |
| Korean language / Korea domain | 31 | AGENTS.md, README.md, CLAUDE.md |
| Infra / observability | 26 | AGENTS.md, README.md, CLAUDE.md |
| Security / compliance | 19 | src/retrieval/multi_agent_reasoner.py, CODE_OF_CONDUCT.md, CONTRIBUTING.md |
| LLM wiki / memory / graph | 12 | AGENTS.md, CODE_OF_CONDUCT.md, CONTRIBUTING.md |
| Frontend / developer experience | 2 | src/retrieval/retriever_impl.py, tests/test_retriever_impl.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 165 |
| manifests | 7 |
| docs | 14 |
| tests | 14 |
| ci/ops | 3 |
| spec artifacts | 4 |
| agent instruction files | 2 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | .env에 API 키와 Pinecone 설정을 입력합니다. |
| headings | 빠른 시작 / .env에 API 키와 Pinecone 설정을 입력합니다. / BGE reranker 파인튜닝 모델은 Git에 포함되지 않습니다. / 별도 저장소에서 받아 data/models/bge-reranker-tax-rag/에 배치하세요. / 어떻게 동작하는가? / 시스템 아키텍처 / 기술 스택 / 디렉터리 구조 / 개발 기여 / 라이센스 |
| excerpt | <p align="center" <img src=".github/images/logo.svg" width="400" alt="OpenTax Logo" </p <div align="center" <h3 한국 양도소득세 비과세·감면·중과 판단을 위한 법령 RAG 기반 멀티 에이전트 AI.</h3 </div <div align="center" <a href="https //github.com/Raw Agent/opentax/actions/workflows/ci.yml" target=" blank" <img src="https //github.com/Raw Agent/opentax/actions/workflows/ci.yml/badge.svg" alt="CI" </a <a href="https //github.com/Raw Agent/opentax/releases/latest" target=" blank" <img src="https //img.shields.io/github/v/release/Raw Agent/opentax?label=Release" alt="Release" </a <a href="https //polyformproject.org/licenses/noncommercial/1.0.0" target=" blank" <img src="https //img.shields.io/badge/License PolyForm%20Nonco |


## 주요 파일

### Manifests

- AGENTS.md
- README.md
- CLAUDE.md
- docker-compose.yml
- Dockerfile
- package.json
- requirements.txt


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- requirements.txt
- .github/ISSUE_TEMPLATE/task.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 87 |
| scripts | 25 |
| tests | 14 |
| data | 9 |
| .github | 8 |
| .dockerignore | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| .omc | 1 |
| .streamlit | 1 |
| AGENTS.md | 1 |
| CLAUDE.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 116 |
| .md | 14 |
| .json | 10 |
| .js | 7 |
| [no-ext] | 6 |
| .yml | 3 |
| .ps1 | 2 |
| .example | 1 |
| .ini | 1 |
| .ipynb | 1 |
| .jsonl | 1 |
| .svg | 1 |
| .toml | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
