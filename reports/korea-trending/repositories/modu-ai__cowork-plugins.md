# modu-ai/cowork-plugins

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/modu-ai/cowork-plugins |
| local path | sources/modu-ai__cowork-plugins |
| HEAD | ddde655 |
| stars/forks | 0 / 0 |
| language | HTML |
| license |  |
| pushedAt | 2026-06-17T11:33:55Z |
| trendScore / priorityScore | 92 / 219 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 385 | mcp-servers/moai-ads-audit/README.md, moai-business/README.md, moai-commerce/README.md |
| Korean language / Korea domain | 186 | moai-book/README.md, moai-career/README.md, moai-commerce/README.md |
| AI agent / tool use | 96 | moai-bi/README.md, moai-book/README.md, moai-business/README.md |
| Spec / doc-driven workflow | 95 | mcp-servers/moai-ads-audit/README.md, moai-core/README.md, moai-design/README.md |
| Security / compliance | 64 | moai-commerce/README.md, moai-legal/README.md, moai-marketing/README.md |
| Frontend / developer experience | 25 | moai-book/README.md, moai-career/README.md, moai-content/README.md |
| LLM wiki / memory / graph | 8 | docs-site/content/cowork/connectors-mcp.md, docs-site/content/cowork/projects-memory.md |
| RAG / retrieval | 4 | moai-content/skills/humanize-korean/references/metrics.py, moai-content/skills/korean-spell-check/scripts/korean_spell_check.py |
| Infra / observability | 1 | moai-content/skills/humanize-korean/references/web-service-spec.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, mcp, rag, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 1130 |
| manifests | 40 |
| docs | 762 |
| tests | 40 |
| ci/ops | 7 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | cowork-plugins |
| headings | cowork-plugins / 30초로 살펴보는 cowork-plugins / 목차 / 플러그인 카탈로그 / 총 산출물 / 설치 방법 / Step 1: 마켓플레이스 추가 / Step 2: 플러그인 설치 / Step 3: 프로젝트 생성 / Step 4: `/project` 로 초기화 |
| excerpt | cowork plugins ! License NC ND v1.0 https //img.shields.io/badge/License NC ND%20v1.0 red.svg LICENSE ! Claude Cowork https //img.shields.io/badge/Claude Cowork blueviolet https //claude.ai ! Version https //img.shields.io/badge/Version 2.24.1 blue CHANGELOG.md ! Plugins https //img.shields.io/badge/Plugins 28 blue .claude plugin/marketplace.json ! Skills https //img.shields.io/badge/Skills 178 green .claude plugin/marketplace.json ! Docs https //img.shields.io/badge/Docs cowork.mo.ai.kr orange https //cowork.mo.ai.kr/ ! shadcn/ui https //img.shields.io/badge/UI shadcn/ui black https //ui.shadcn.com/ Claude Cowork 한국어 도메인 전문가 AI 마켓플레이스 — 28 plugins · 178 skills · NC ND v1.0 자연어 한 줄로 사업계획서·계약 |


## 주요 파일

### Manifests

- mcp-servers/moai-ads-audit/README.md
- docs-site/README.md
- moai-bi/README.md
- moai-book/README.md
- moai-business/README.md
- moai-career/README.md
- moai-commerce/README.md
- moai-comms/README.md
- moai-content/README.md
- moai-core/README.md
- moai-data/README.md
- moai-design/README.md
- moai-education/README.md
- moai-finance/README.md
- moai-hr/README.md
- moai-legal/README.md
- moai-lifestyle/README.md
- moai-marketing/README.md
- moai-media/README.md
- moai-office/README.md


### Spec / Docs / Prompt Artifacts

- .github/workflows/claude.yml


### Agent Instruction Files

- .github/workflows/claude.yml


## 상위 디렉터리

| dir | count |
| --- | --- |
| docs-site | 312 |
| moai-content | 120 |
| moai-commerce | 81 |
| moai-design | 77 |
| moai-office | 59 |
| moai-marketing | 54 |
| moai-media | 41 |
| moai-business | 37 |
| mcp-servers | 31 |
| moai-core | 25 |
| moai-finance | 21 |
| moai-legal | 21 |
| scripts | 21 |
| moai-book | 19 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 762 |
| .html | 88 |
| .py | 53 |
| .json | 50 |
| .yaml | 46 |
| .woff | 27 |
| .woff2 | 27 |
| .sh | 21 |
| .yml | 10 |
| [no-ext] | 9 |
| .tmpl | 8 |
| .ts | 5 |
| .svg | 4 |
| .txt | 4 |
| .css | 3 |
| .mjs | 3 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
