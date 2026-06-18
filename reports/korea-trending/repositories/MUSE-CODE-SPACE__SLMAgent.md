# MUSE-CODE-SPACE/SLMAgent

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/MUSE-CODE-SPACE/SLMAgent |
| local path | sources/MUSE-CODE-SPACE__SLMAgent |
| HEAD | fa96c93 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-05T17:01:37Z |
| trendScore / priorityScore | 98 / 209 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 235 | chapters/01_hello_llm/README.md, chapters/04_memory/README.md, chapters/05_rag/README.md |
| Local LLM / on-device inference | 186 | chapters/01_hello_llm/README.md, chapters/05_rag/README.md, README.md |
| RAG / retrieval | 159 | chapters/04_memory/README.md, chapters/05_rag/README.md, chapters/06_multi_tool_agent/README.md |
| LLM wiki / memory / graph | 73 | chapters/01_hello_llm/README.md, chapters/04_memory/README.md, README.md |
| Frontend / developer experience | 40 | README.md, chapters/02_tool_calling/README.md, chapters/03_react_loop/README.md |
| Korean language / Korea domain | 29 | chapters/01_hello_llm/README.md, chapters/05_rag/README.md, README.md |
| Spec / doc-driven workflow | 5 | README.md, docs/models.md |
| Security / compliance | 3 | chapters/06_multi_tool_agent/README.md, CODE_OF_CONDUCT.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, example-rich, frontend, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 58 |
| manifests | 11 |
| docs | 32 |
| tests | 5 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | SLMAgent — Build a Local SLM AI Agent From Scratch / 로컬 SLM AI 에이전트, 밑바닥부터 만들기 |
| headings | SLMAgent — Build a Local SLM AI Agent From Scratch / 로컬 SLM AI 에이전트, 밑바닥부터 만들기 / What you'll build / 무엇을 만드나요? / Quick start (10 min) / 빠른 시작 (10분) / 1) Ollama 설치 — https://ollama.com/download (macOS/Windows/Linux) / macOS:  brew install ollama  (또는 .dmg) / Linux:  curl -fsSL https://ollama.com/install.sh \| sh / 2) 모델 내려받기 (한 번만, 약 5.9GB) / 3) 프로젝트 설치 / 4) 동작 확인 후 1장 실행 / Recommended models / 추천 모델 |
| excerpt | <! 🌏 English + 한국어 English first 🌏 English + 한국어 English first . SLMAgent — Build a Local SLM AI Agent From Scratch / 로컬 SLM AI 에이전트, 밑바닥부터 만들기 No API keys · No cost · No internet. Build an AI agent that uses tools and answers from your own documents — from scratch, with no framework — powered by a Small Language Model SLM running on your own laptop. API 키 없음 · 비용 없음 · 인터넷 없음. 내 노트북에서 도는 소형 언어 모델 SLM, Small Language Model 로, 도구를 쓰고 내 문서에 답하는 AI 에이전트를 프레임워크 없이 직접 만들어 봅니다. <p align="center" <em 🎓 Open source educational course · 100% local/offline · English + 한국어</em <br <em 🎓 교육용 오픈소스 강좌 · 100% 로컬/오프라인 · 한국어 메인</em <br <strong Let's build it together! 🚀 / 같이 만들어 봐요. 다같이 해보자고요! 🚀</strong |


## 주요 파일

### Manifests

- chapters/01_hello_llm/README.md
- chapters/04_memory/README.md
- chapters/05_rag/README.md
- chapters/06_multi_tool_agent/README.md
- README.md
- chapters/00_setup/README.md
- chapters/02_tool_calling/README.md
- chapters/03_react_loop/README.md
- chapters/07_capstone/README.md
- Makefile
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- docs/architecture.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| chapters | 28 |
| agent | 7 |
| .github | 5 |
| docs | 5 |
| tests | 5 |
| .gitignore | 1 |
| .python-version | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| Makefile | 1 |
| pyproject.toml | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 32 |
| .py | 20 |
| [no-ext] | 4 |
| .toml | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
