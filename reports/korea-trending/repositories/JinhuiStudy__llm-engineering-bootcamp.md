# JinhuiStudy/llm-engineering-bootcamp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/JinhuiStudy/llm-engineering-bootcamp |
| local path | sources/JinhuiStudy__llm-engineering-bootcamp |
| HEAD | 48e1f59 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-04-25T18:59:56Z |
| trendScore / priorityScore | 84 / 252 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 500 | projects/day04-tool-agent/README.md, projects/day06-basic-rag/README.md, projects/day07-advanced-rag/README.md |
| RAG / retrieval | 500 | projects/day02-prompt-lab/README.md, projects/day04-tool-agent/README.md, projects/day05-embedding-search/README.md |
| MCP / tool protocol | 307 | projects/day04-tool-agent/README.md, projects/day09-langgraph-agent/README.md, projects/day10-mcp-server/README.md |
| Local LLM / on-device inference | 289 | projects/day12-local-llm/README.md, infra/README.md, README.md |
| Infra / observability | 154 | projects/day05-embedding-search/README.md, projects/day06-basic-rag/README.md, infra/README.md |
| Frontend / developer experience | 118 | projects/day06-basic-rag/README.md, projects/day10-mcp-server/README.md, projects/day12-local-llm/README.md |
| Security / compliance | 55 | projects/day10-mcp-server/README.md, infra/langfuse/README.md, projects/day11-observability/README.md |
| LLM wiki / memory / graph | 30 | projects/day06-basic-rag/README.md, infra/README.md, infra/langfuse/README.md |
| Spec / doc-driven workflow | 27 | projects/day10-mcp-server/README.md, README.md, projects/final-portfolio/README.md |
| Korean language / Korea domain | 6 | projects/day06-basic-rag/README.md, shared/README.md, projects/day02-prompt-lab/README-patterns.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, context-engineering, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 141 |
| manifests | 35 |
| docs | 63 |
| tests | 0 |
| ci/ops | 2 |
| spec artifacts | 5 |
| agent instruction files | 4 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LLM Engineering Bootcamp — 2주 ULTRA 하드코어 |
| headings | LLM Engineering Bootcamp — 2주 ULTRA 하드코어 / 👉 바로 시작 / 1. Day 0 프리컬 (2-4h) / 2. 사전 준비 가이드 / 3. 설치 / 4. API 키 채우기 / 5. 점검 / 6. 2026-04 최신 복붙 코드 한 번에 훑기 (v3.1 신규) / 7. 로드맵 읽기 / 8. Day 1 출발 |
| excerpt | LLM Engineering Bootcamp — 2주 ULTRA 하드코어 ! License MIT https //img.shields.io/github/license/JinhuiStudy/llm engineering bootcamp?color=blue LICENSE ! Stars https //img.shields.io/github/stars/JinhuiStudy/llm engineering bootcamp?style=social https //github.com/JinhuiStudy/llm engineering bootcamp/stargazers ! Issues https //img.shields.io/github/issues/JinhuiStudy/llm engineering bootcamp https //github.com/JinhuiStudy/llm engineering bootcamp/issues ! Made with Python https //img.shields.io/badge/Python 3.11%2B 3776ab?logo=python&logoColor=white https //www.python.org/ ! uv https //img.shields.io/badge/uv managed 261230?logo=python&logoColor=white https //docs.astral.sh/uv/ ! Docker https |


## 주요 파일

### Manifests

- projects/day02-prompt-lab/README.md
- projects/day04-tool-agent/README.md
- projects/day05-embedding-search/README.md
- projects/day06-basic-rag/README.md
- projects/day07-advanced-rag/README.md
- projects/day08-rag-eval/README.md
- projects/day09-langgraph-agent/README.md
- projects/day10-mcp-server/README.md
- projects/day12-local-llm/README.md
- infra/README.md
- README.md
- shared/README.md
- infra/langfuse/README.md
- infra/qdrant/README.md
- projects/day01-chatbot-cli/README.md
- projects/day03-structured-extractor/README.md
- projects/day11-observability/README.md
- projects/final-portfolio/README.md
- projects/day02-prompt-lab/pyproject.toml
- projects/day04-tool-agent/pyproject.toml


### Spec / Docs / Prompt Artifacts

- projects/day02-prompt-lab/prompts/01-zero-shot.txt
- projects/day02-prompt-lab/prompts/03-cot.txt
- projects/day02-prompt-lab/prompts/05-xml-structured.txt
- projects/day06-basic-rag/prompts/rag_template.txt
- projects/final-portfolio/ARCHITECTURE.md


### Agent Instruction Files

- projects/day02-prompt-lab/prompts/01-zero-shot.txt
- projects/day02-prompt-lab/prompts/03-cot.txt
- projects/day02-prompt-lab/prompts/05-xml-structured.txt
- projects/day06-basic-rag/prompts/rag_template.txt


## 상위 디렉터리

| dir | count |
| --- | --- |
| projects | 67 |
| curriculum | 21 |
| shared | 12 |
| cheatsheets | 7 |
| resources | 7 |
| infra | 5 |
| .github | 4 |
| notes | 4 |
| setup | 4 |
| data | 3 |
| .env.example | 1 |
| .gitignore | 1 |
| CONTRIBUTING.md | 1 |
| INDEX.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 63 |
| .py | 45 |
| .toml | 14 |
| .yml | 6 |
| [no-ext] | 6 |
| .txt | 4 |
| .example | 1 |
| .json | 1 |
| .sh | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
