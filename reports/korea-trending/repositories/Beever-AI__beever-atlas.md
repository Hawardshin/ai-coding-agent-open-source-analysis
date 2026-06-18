# Beever-AI/beever-atlas

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Beever-AI/beever-atlas |
| local path | sources/Beever-AI__beever-atlas |
| HEAD | 4e47057 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T10:58:59Z |
| trendScore / priorityScore | 73 / 256 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 500 | demo/README.md, bot/README.md, demo/fixtures/README.md |
| RAG / retrieval | 341 | demo/README.md, demo/fixtures/README.md, README.md |
| AI agent / tool use | 276 | demo/README.md, README.md, scripts/README.md |
| Security / compliance | 272 | bot/README.md, README.md, scripts/README.md |
| MCP / tool protocol | 248 | README.md, src/beever_atlas/README.md, Dockerfile |
| Infra / observability | 216 | demo/README.md, README.md, bot/Dockerfile |
| Frontend / developer experience | 162 | demo/README.md, bot/README.md, README.md |
| Spec / doc-driven workflow | 29 | demo/README.md, docs/mcp-server-examples/cursor.md, docs/mcp-server.md |
| Local LLM / on-device inference | 12 | README.md, scripts/README.md, src/beever_atlas/README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, context-engineering, documentParsing, evalObservability, example-rich, frontend, frontend-dx, graphMemory, infra-observability, llm-wiki, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 1325 |
| manifests | 23 |
| docs | 366 |
| tests | 523 |
| ci/ops | 13 |
| spec artifacts | 25 |
| agent instruction files | 22 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | CREDENTIAL_MASTER_KEY — AES-256-GCM key for stored platform credentials (64 hex chars) |
| headings | ✨ Features in action / 🏗️ Architecture / 💡 Why Wiki-First RAG? / The inspiration: LLMs read wikis, not chat logs / What this unlocks in practice / 🚀 Quick Start / 1. Get the code / 2. Try the demo first (optional, no keys needed for seeding) / 3. Before you start: get your API keys / 4. Choose a deployment option |
| excerpt | <h1 align="center" <picture <source media=" prefers color scheme dark " srcset="web/public/logo white.svg" / <img src="web/public/logo primary.svg" alt="" height="48" align="absmiddle" / </picture &nbsp;Beever Atlas </h1 <div align="center" <picture <source media=" prefers color scheme dark " srcset="assets/banner dark.png" / <img src="assets/banner.png" alt="Beever Atlas — LLM first Wiki Knowledge Base" width="85%" / </picture </div <h3 align="center" Turn your team's Slack, Discord, Teams &amp; Mattermost chats<br into a self maintaining wiki — automatically. </h3 <p align="center" <a href="https //docs.beever.ai/atlas" <img src="https //img.shields.io/badge/DOCS docs.beever.ai/atlas FFC10 |


## 주요 파일

### Manifests

- demo/README.md
- bot/README.md
- demo/fixtures/README.md
- README.md
- scripts/README.md
- web/README.md
- src/beever_atlas/README.md
- bot/Dockerfile
- bot/package.json
- bot/tsconfig.json
- docker-compose.yml
- Dockerfile
- Makefile
- pyproject.toml
- web/Dockerfile
- web/package.json
- web/tsconfig.json
- web/vite.config.ts
- demo/docker-compose.demo.yml
- docker-compose.auth.yml


### Spec / Docs / Prompt Artifacts

- src/beever_atlas/agents/prompts/__init__.py
- src/beever_atlas/agents/prompts/classifier.py
- src/beever_atlas/agents/prompts/consolidation.py
- src/beever_atlas/agents/prompts/contradiction_detector.py
- src/beever_atlas/agents/prompts/coreference_resolver.py
- src/beever_atlas/agents/prompts/cross_batch_validator.py
- src/beever_atlas/agents/prompts/csv_mapper.py
- src/beever_atlas/agents/prompts/echo.py
- src/beever_atlas/agents/prompts/entity_extractor.py
- src/beever_atlas/agents/prompts/fact_extractor.py
- src/beever_atlas/agents/prompts/media.py
- src/beever_atlas/agents/prompts/unresolved_classifier.py
- src/beever_atlas/wiki/prompts/action_items.txt
- src/beever_atlas/wiki/prompts/architecture.txt
- src/beever_atlas/wiki/prompts/decisions.txt
- src/beever_atlas/wiki/prompts/entity.txt
- src/beever_atlas/wiki/prompts/faq.txt
- src/beever_atlas/wiki/prompts/open-questions.txt
- src/beever_atlas/wiki/prompts/projects.txt
- src/beever_atlas/wiki/prompts/stakeholders.txt


### Agent Instruction Files

- src/beever_atlas/agents/prompts/__init__.py
- src/beever_atlas/agents/prompts/classifier.py
- src/beever_atlas/agents/prompts/consolidation.py
- src/beever_atlas/agents/prompts/contradiction_detector.py
- src/beever_atlas/agents/prompts/coreference_resolver.py
- src/beever_atlas/agents/prompts/cross_batch_validator.py
- src/beever_atlas/agents/prompts/csv_mapper.py
- src/beever_atlas/agents/prompts/echo.py
- src/beever_atlas/agents/prompts/entity_extractor.py
- src/beever_atlas/agents/prompts/fact_extractor.py
- src/beever_atlas/agents/prompts/media.py
- src/beever_atlas/agents/prompts/unresolved_classifier.py
- src/beever_atlas/wiki/prompts/action_items.txt
- src/beever_atlas/wiki/prompts/architecture.txt
- src/beever_atlas/wiki/prompts/decisions.txt


## 상위 디렉터리

| dir | count |
| --- | --- |
| tests | 420 |
| web | 347 |
| src | 309 |
| docs | 91 |
| bot | 60 |
| scripts | 39 |
| demo | 18 |
| .github | 12 |
| runbooks | 3 |
| .dockerignore | 1 |
| .env.example | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .mcp.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 741 |
| .tsx | 234 |
| .ts | 137 |
| .md | 59 |
| .mdx | 59 |
| .json | 32 |
| .yml | 15 |
| [no-ext] | 14 |
| .txt | 10 |
| .svg | 6 |
| .sh | 3 |
| .csv | 2 |
| .js | 2 |
| .snap | 2 |
| .css | 1 |
| .cypher | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
