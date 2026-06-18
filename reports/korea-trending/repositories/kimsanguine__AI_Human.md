# kimsanguine/AI_Human

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kimsanguine/AI_Human |
| local path | sources/kimsanguine__AI_Human |
| HEAD | 81874ba |
| stars/forks | 0 / 0 |
| language | Shell |
| license |  |
| pushedAt | 2026-06-17T23:22:23Z |
| trendScore / priorityScore | 74 / 209 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 500 | papers/langchain-orchestration/2026-04-23-llm-application-frameworks/README.md, papers/langchain-orchestration/2026-04-24-ai-agents-and-tool-use/README.md, papers/langchain-orchestration/2026-04-25-memory-and-long-context-management/README.md |
| AI agent / tool use | 367 | papers/langchain-orchestration/2026-04-23-llm-application-frameworks/README.md, papers/langchain-orchestration/2026-04-24-ai-agents-and-tool-use/README.md, papers/langchain-orchestration/2026-04-25-memory-and-long-context-management/README.md |
| Frontend / developer experience | 122 | papers/langchain-orchestration/2026-04-23-llm-application-frameworks/README.md, papers/langchain-orchestration/2026-04-24-ai-agents-and-tool-use/README.md, papers/langchain-orchestration/2026-04-25-memory-and-long-context-management/README.md |
| LLM wiki / memory / graph | 81 | papers/langchain-orchestration/2026-04-23-llm-application-frameworks/README.md, papers/langchain-orchestration/2026-04-24-ai-agents-and-tool-use/README.md, papers/langchain-orchestration/2026-04-25-memory-and-long-context-management/README.md |
| MCP / tool protocol | 78 | papers/langchain-orchestration/2026-04-23-llm-application-frameworks/README.md, papers/langchain-orchestration/2026-04-24-ai-agents-and-tool-use/README.md, papers/langchain-orchestration/2026-05-20-llm-application-frameworks/README.md |
| Local LLM / on-device inference | 58 | papers/llm-nlg/2026-04-19-efficient-llm-quantization-and-distillation/README.md, papers/llm-nlg/2026-05-13-gpt-architecture-and-scaling-laws/README.md, papers/llm-nlg/2026-05-16-efficient-llm-quantization-and-distillation/README.md |
| Security / compliance | 28 | papers/langchain-orchestration/2026-05-20-llm-application-frameworks/README.md, papers/langchain-orchestration/2026-05-21-ai-agents-and-tool-use/README.md, papers/llm-nlg/2026-04-17-instruction-tuning-and-rlhf/README.md |
| Infra / observability | 20 | papers/langchain-orchestration/2026-04-24-ai-agents-and-tool-use/README.md, papers/langchain-orchestration/2026-05-20-llm-application-frameworks/README.md, papers/llm-nlg/2026-05-15-llm-evaluation-and-benchmarks/README.md |
| Korean language / Korea domain | 13 | README.md, lectures/phase3-llm-pe-lora/[교안] Phase3_W13_LoRA_QLoRA.md, curriculum/mapping.json |
| Spec / doc-driven workflow | 9 | papers/langchain-orchestration/2026-05-20-llm-application-frameworks/README.md, papers/llm-nlg/2026-05-14-instruction-tuning-and-rlhf/README.md, lectures/phase3-llm-pe-lora/[교안] Phase3_W11_LLM기초_PE.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, context-engineering, documentParsing, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, security-compliance, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 201 |
| manifests | 40 |
| docs | 180 |
| tests | 0 |
| ci/ops | 1 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | AI Human — 초급자를 위한 AI Engineer 100일 커리큘럼 |
| headings | AI Human — 초급자를 위한 AI Engineer 100일 커리큘럼 / 이런 분을 위해 만들었습니다 / 학습 여정 한눈에 보기 / 커리큘럼 / 프로젝트 구조 / AI 뉴스 자동화 시스템 / 시작하기 / 1. 레포 클론 / 2. 오늘의 뉴스 확인 / 3. 현재 챕터 강의 자료 열기 |
| excerpt | AI Human — 초급자를 위한 AI Engineer 100일 커리큘럼 ! License https //img.shields.io/badge/license CC%20BY NC%204.0 blue ! Last Commit https //img.shields.io/github/last commit/kimsanguine/AI Human ! News https //img.shields.io/badge/AI%20뉴스 매일%20자동%20업데이트 brightgreen "코드를 처음 치는 사람도, 100일 뒤에는 RAG 파이프라인을 만든다." 비전공자·초급자가 AI Engineer로 성장하기 위한 실전 커리큘럼입니다. Python 기초부터 LLM, 프롬프트 엔지니어링, RAG까지 — 17주 동안 단계별로 학습합니다. 매일 오전, AI가 현재 학습 챕터와 연관된 뉴스를 자동으로 큐레이션하여 학습과 업계 동향을 동시에 따라갈 수 있습니다. 이런 분을 위해 만들었습니다 대상 기대 효과 AI에 관심 있는 비전공자 Python부터 차근차근 시작 PM/기획자가 AI를 이해하고 싶을 때 기술의 원리를 체험하며 커뮤니케이션 역량 향상 AI 직무 전환을 준비하는 분 KDT 수준의 체계적 커리큘럼으로 포트폴리오 구축 현업 개발자의 AI 리스킬링 ML/DL → LLM → RAG로 빠른 확장 학습 여정 한눈에 보기 커리큘럼 챕터 주제 기간 핵심 키워드 Ch01 Pyt |


## 주요 파일

### Manifests

- papers/langchain-orchestration/2026-04-23-llm-application-frameworks/README.md
- papers/langchain-orchestration/2026-04-24-ai-agents-and-tool-use/README.md
- papers/langchain-orchestration/2026-04-25-memory-and-long-context-management/README.md
- papers/langchain-orchestration/2026-05-20-llm-application-frameworks/README.md
- papers/langchain-orchestration/2026-05-21-ai-agents-and-tool-use/README.md
- papers/langchain-orchestration/2026-06-16-llm-application-frameworks/README.md
- papers/langchain-orchestration/2026-06-17-ai-agents-and-tool-use/README.md
- papers/langchain-orchestration/2026-06-18-memory-and-long-context-management/README.md
- papers/llm-nlg/2026-04-16-gpt-architecture-scaling-laws/README.md
- papers/llm-nlg/2026-04-17-instruction-tuning-and-rlhf/README.md
- papers/llm-nlg/2026-04-18-llm-evaluation-and-benchmarks/README.md
- papers/llm-nlg/2026-04-19-efficient-llm-quantization-and-distillation/README.md
- papers/llm-nlg/2026-05-13-gpt-architecture-and-scaling-laws/README.md
- papers/llm-nlg/2026-05-14-instruction-tuning-and-rlhf/README.md
- papers/llm-nlg/2026-05-15-llm-evaluation-and-benchmarks/README.md
- papers/llm-nlg/2026-05-16-efficient-llm-quantization-and-distillation/README.md
- papers/llm-nlg/2026-06-09-gpt-architecture-and-scaling-laws/README.md
- papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/README.md
- papers/llm-nlg/2026-06-12-efficient-llm-quantization-and-distillation/README.md
- papers/nlp-speech-data/2026-04-09-word-embeddings-representation-learning/README.md


### Spec / Docs / Prompt Artifacts

- .claude/settings.json


### Agent Instruction Files

- .claude/settings.json


## 상위 디렉터리

| dir | count |
| --- | --- |
| news | 100 |
| papers | 75 |
| lectures | 16 |
| scripts | 3 |
| curriculum | 2 |
| .claude | 1 |
| .github | 1 |
| .gitignore | 1 |
| LICENSE | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 180 |
| [no-ext] | 13 |
| .json | 3 |
| .py | 2 |
| .sh | 2 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
