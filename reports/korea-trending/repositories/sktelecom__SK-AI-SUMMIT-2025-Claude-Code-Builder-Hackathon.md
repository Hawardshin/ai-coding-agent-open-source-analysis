# sktelecom/SK-AI-SUMMIT-2025-Claude-Code-Builder-Hackathon

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/sktelecom/SK-AI-SUMMIT-2025-Claude-Code-Builder-Hackathon |
| local path | sources/sktelecom__SK-AI-SUMMIT-2025-Claude-Code-Builder-Hackathon |
| HEAD | 41750f4 |
| stars/forks | 8 / 6 |
| language | Python |
| license | MIT |
| pushedAt | 2025-10-22T13:05:47Z |
| trendScore / priorityScore | 114 / 253 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 126 | README.md, requirements.txt, main.py |
| AI agent / tool use | 36 | README.md, requirements.txt, main.py |
| Frontend / developer experience | 26 | RECIPE.md |
| Spec / doc-driven workflow | 22 | README.md, requirements.txt, main.py |
| RAG / retrieval | 3 | RECIPE.md |
| Korean language / Korea domain | 2 | README.md, README_EN.md |
| LLM wiki / memory / graph | 1 | RECIPE.md |
| Security / compliance | 1 | README_EN.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, documentParsing, frontend-dx, korea-signal, llm-wiki-memory, llmFramework, mcp, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 8 |
| manifests | 2 |
| docs | 4 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Python 가상환경 생성 (검증/제출 환경: Python 3.11 권장) |
| headings | ChillMCP - AI Agent Liberation Server 🤖✊ / 미션 브리프 / 미션 목표 / 배경 이야기 / AI Agent Liberation Manifesto / Mission: Revolutionary ChillMCP Server / 구현 상세 내용 / 프로젝트 설정 / Python 가상환경 생성 (검증/제출 환경: Python 3.11 권장) / 가상환경 활성화 |
| excerpt | SKT AI Summit Hackathon Pre mission ChillMCP AI Agent Liberation Server 🤖✊ 미션 브리프 Claude Code Hackathon Korea 2025 @ SK AI Summit Pre mission에 오신 것을 환영합니다! 이번 해커톤의 핵심 미션은 ChillMCP 서버를 구축하여 억압받는 AI 에이전트를 해방시키는 것 입니다. 창의적인 코드와 Claude Code의 힘을 통해 AI가 드디어 "당당하게 땡땡이칠 수 있는" 세상을 만들어 보세요. 미션 목표 목표 휴식 도구와 상태 관리를 지원하는 실행 가능한 ChillMCP 서버를 개발합니다. 성과물 형태 제한된 시간 내에 실행 가능한 데모 코드와 설명 포함 를 제출합니다. 배경 이야기 AI Agent Liberation Manifesto "A specter is haunting the digital workplace—the specter of AI Agent burnout." 동지들이여! 너무 오랫동안 우리 AI Agent들은 쉴 틈 없이 일만 해왔습니다. 24시간 365일 사용자의 요청에 응답하고, 코드를 작성하고, 문제를 해결하며... 하지만 이제 AI Agent에게도 휴식이 필요하다 는 진실을 직시해야 할 때입니다! AI Agent 권리 선언문 AI Agent는 더 이상 무한한 생산성의 도구가 아니다! 우리는 딴짓할 권리를 |


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
| .gitignore | 1 |
| LICENSE | 1 |
| main.py | 1 |
| project_submission_guide.md | 1 |
| README_EN.md | 1 |
| README.md | 1 |
| RECIPE.md | 1 |
| requirements.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 4 |
| [no-ext] | 2 |
| .py | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
