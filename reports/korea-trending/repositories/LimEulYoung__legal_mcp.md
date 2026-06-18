# LimEulYoung/legal_mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/LimEulYoung/legal_mcp |
| local path | sources/LimEulYoung__legal_mcp |
| HEAD | cbc827b |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T04:10:53Z |
| trendScore / priorityScore | 76 / 147 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 198 | README.md, docs/config-spec.md, docs/modules-spec.md |
| MCP / tool protocol | 161 | README.md, requirements.txt, docs/config-spec.md |
| Korean language / Korea domain | 49 | README.md, docs/config-spec.md, docs/modules-spec.md |
| AI agent / tool use | 20 | benchmark/scripts/ablation_gemini.py, benchmark/scripts/mcp_benchmark_gemini_guided_high.py, benchmark/scripts/mcp_benchmark_gemini_guided_low.py |
| Spec / doc-driven workflow | 14 | README.md, docs/config-spec.md, docs/modules-spec.md |
| Frontend / developer experience | 2 | benchmark/scripts/mcp_benchmark_claude.py, benchmark/scripts/rag_benchmark_claude.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, frontend-dx, korea-signal, llmFramework, mcp, rag, sdk-api, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 110 |
| manifests | 2 |
| docs | 5 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Agentic RAG for Legal Question Answering in Civil Law |
| headings | Agentic RAG for Legal Question Answering in Civil Law / Overview / Repository Structure / Dataset / MCP Tools / Quick Access Statute IDs / Running Benchmarks / Prerequisites / Benchmark Scripts / Examples |
| excerpt | Agentic RAG for Legal Question Answering in Civil Law Agentic RAG for Legal Question Answering in Civil Law Evidence from the Korean Bar Examination Eul Young Lim and Jihun Park under review This repository contains the code, benchmark scripts, and supplementary materials for reproducibility. Overview ! Human Lawyer Workflow vs. Agentic RAG assets/figure1.png Parallel between A a human lawyer's iterative research workflow and B the proposed agentic RAG system, illustrated on a Civil Act §750/§766 traffic accident query. Dashed arrows mark the step by step correspondence between the human process and the agentic tool call trace. Repository Structure Dataset Data Description Source Benchmark Q |


## 주요 파일

### Manifests

- README.md
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| benchmark | 86 |
| src | 16 |
| docs | 4 |
| .env.example | 1 |
| .gitignore | 1 |
| README.md | 1 |
| requirements.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .json | 70 |
| .py | 30 |
| .md | 5 |
| .csv | 2 |
| .example | 1 |
| .txt | 1 |
| [no-ext] | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
