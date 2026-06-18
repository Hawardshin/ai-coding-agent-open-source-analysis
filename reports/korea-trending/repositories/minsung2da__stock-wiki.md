# minsung2da/stock-wiki

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/minsung2da/stock-wiki |
| local path | sources/minsung2da__stock-wiki |
| HEAD | 276adf9 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-05-29T03:39:03Z |
| trendScore / priorityScore | 101 / 279 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 500 | README.md, CLAUDE.md, docs/local-sync.md |
| AI agent / tool use | 445 | README.md, CLAUDE.md, pyproject.toml |
| Spec / doc-driven workflow | 261 | README.md, CLAUDE.md, .planning/archive/v1.0-phases/06-full-mcp-tool-surface/06-UI-SPEC.md |
| LLM wiki / memory / graph | 240 | README.md, CLAUDE.md, pyproject.toml |
| Korean language / Korea domain | 237 | README.md, CLAUDE.md, pyproject.toml |
| Security / compliance | 65 | .claude/routines/enrich/README.md, docs/kind-robots-snapshot.txt, .planning/archive/v1.0-phases/06-full-mcp-tool-surface/06-UI-SPEC.md |
| RAG / retrieval | 45 | README.md, CLAUDE.md, pyproject.toml |
| Infra / observability | 15 | README.md, CLAUDE.md, .planning/archive/v1.0-phases/04-multi-source-collector-coverage/04-08-PLAN.md |
| Frontend / developer experience | 7 | .planning/archive/v1.0-phases/06-full-mcp-tool-surface/06-UI-SPEC.md, .planning/archive/v1.0-phases/05-claude-schedule-enrichment-with-korean-number-safety/05-08-SUMMARY.md, .planning/archive/v1.0-phases/05-claude-schedule-enrichment-with-korean-number-safety/05-RESEARCH.md |
| Local LLM / on-device inference | 4 | .planning/archive/v1.0-phases/05-claude-schedule-enrichment-with-korean-number-safety/05-RESEARCH.md, .planning/archive/v1.0-phases/06-full-mcp-tool-surface/06-RESEARCH.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, context-engineering, documentParsing, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 396 |
| manifests | 6 |
| docs | 231 |
| tests | 86 |
| ci/ops | 2 |
| spec artifacts | 16 |
| agent instruction files | 13 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Stock Wiki |
| headings | Stock Wiki / 1. 이게 뭔지 (세 문장) / 2. 아키텍처 한눈에 / 왜 두 단계(수집기 vs 인제스트)인가 / 3. 디렉토리 구조 / 4. CLI 구조 (`stock` + `stock-mcp`) / 4.1 `stock collect ...` — 수집 / 4.2 `stock ingest ...` — 인제스트 / 4.3 `stock sync` — Routine 결과 로컬 반영 (Phase 5.1) / 4.4 `stock-mcp` — FastMCP 서버 |
| excerpt | Stock Wiki 한국 주식시장 KOSPI/KOSDAQ 및 거시경제 정보를 LLM이 읽기 좋은 지식 저장소 로 축적해, Claude Code에서 매수/매도 판단의 근거를 즉시 받아볼 수 있도록 만드는 개인용 위키 + MCP 서버 입니다. 한 줄 요약 Markdown 파일이 유일한 source of truth이고, Postgres+pgvector는 그 위에 얹은 검색 인덱스이며, Claude Code는 FastMCP 프로토콜로 이 인덱스에 질의한다. 1. 이게 뭔지 세 문장 1. 수집기 stock collect ... 가 DART·KRX·ECOS/FRED·뉴스·KIND에서 데이터를 가져와 vault/raw/ / .md 파일로 적는다. 2. 인제스트 워커 stock ingest run 가 그 파일들을 읽어 Postgres에 chunk + 임베딩 + BM25 토큰으로 올린다. 3. stock mcp 서버 stock mcp 가 FastMCP stdio로 붙어, Claude Code가 search · get ticker overview 등의 툴을 호출하면 DB에서 하이브리드 검색을 해 결과를 준다. 단방향 파이프라인 — 파일 → DB → Claude. DB가 날아가도 vault/ 에서 다시 만든다. 2. 아키텍처 한눈에 왜 두 단계 수집기 vs 인제스트 인가 수집기는 토큰 비용이 0 이다 HTTP만 쓴다 . 인제스트는 임베딩 계산이 있어 무 |


## 주요 파일

### Manifests

- README.md
- .claude/routines/enrich/README.md
- CLAUDE.md
- docker-compose.yml
- pyproject.toml
- .planning/REQUIREMENTS.md


### Spec / Docs / Prompt Artifacts

- .claude/routines/enrich/README.md
- CLAUDE.md
- .claude/routines/enrich/prompts/derived_dart_b.md
- .claude/routines/enrich/prompts/derived_kind.md
- .claude/routines/enrich/prompts/derived_krx.md
- .claude/routines/enrich/prompts/derived_macro.md
- .claude/routines/enrich/prompts/derived_news.md
- .planning/REQUIREMENTS.md
- .planning/ROADMAP.md
- .claude/routines/enrich/helpers/__init__.py
- .claude/routines/enrich/helpers/facts_equal.py
- .claude/routines/enrich/helpers/source_normalize.py
- .claude/routines/enrich/helpers/walk.py
- .claude/routines/enrich/helpers/zone_integrity.py
- .claude/routines/enrich/SKILL.md
- .planning/research/ARCHITECTURE.md


### Agent Instruction Files

- .claude/routines/enrich/README.md
- CLAUDE.md
- .claude/routines/enrich/prompts/derived_dart_b.md
- .claude/routines/enrich/prompts/derived_kind.md
- .claude/routines/enrich/prompts/derived_krx.md
- .claude/routines/enrich/prompts/derived_macro.md
- .claude/routines/enrich/prompts/derived_news.md
- .claude/routines/enrich/helpers/__init__.py
- .claude/routines/enrich/helpers/facts_equal.py
- .claude/routines/enrich/helpers/source_normalize.py
- .claude/routines/enrich/helpers/walk.py
- .claude/routines/enrich/helpers/zone_integrity.py
- .claude/routines/enrich/SKILL.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| .planning | 221 |
| tests | 82 |
| src | 56 |
| .claude | 12 |
| .obsidian | 6 |
| fixtures | 4 |
| scripts | 3 |
| docs | 2 |
| .env.example | 1 |
| .github | 1 |
| .gitignore | 1 |
| .gitleaksignore | 1 |
| .pre-commit-config.yaml | 1 |
| alembic.ini | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 230 |
| .py | 118 |
| .json | 17 |
| .html | 8 |
| .yaml | 6 |
| [no-ext] | 4 |
| .xml | 3 |
| .ini | 2 |
| .yml | 2 |
| .example | 1 |
| .mako | 1 |
| .sh | 1 |
| .sql | 1 |
| .toml | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
