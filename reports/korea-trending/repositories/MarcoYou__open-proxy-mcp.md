# MarcoYou/open-proxy-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/MarcoYou/open-proxy-mcp |
| local path | sources/MarcoYou__open-proxy-mcp |
| HEAD | 2eb3efe |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T15:36:13Z |
| trendScore / priorityScore | 76 / 191 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 270 | wiki/architecture/audits/data/260510_law_layer_450/README.md, wiki/architecture/audits/data/260524_agenda_relation_corpus/README.md, wiki/architecture/audits/data/README.md |
| MCP / tool protocol | 120 | docs/v1/README.md, wiki/architecture/audits/data/260524_agenda_relation_corpus/README.md, AGENTS.md |
| Korean language / Korea domain | 53 | wiki/tools/README.md, AGENTS.md, CLAUDE.md |
| Spec / doc-driven workflow | 21 | wiki/tools/README.md, wiki/architecture/parsing_success_rate_audit_spec.md, wiki/architecture/proxy_advise_word_report_spec.md |
| AI agent / tool use | 18 | wiki/decisions/README.md, wiki/architecture/parsing_success_rate_audit_spec.md, wiki/index.md |
| Security / compliance | 15 | wiki/decisions/README.md, .github/workflows/wiki-lint.yml, docs/features/en/shareholder-return.md |
| RAG / retrieval | 8 | scripts/spot_law_layer_full.py, scripts/spot_law_layer_with_body.py, wiki/architecture/parsing_success_rate_audit_spec.md |
| Frontend / developer experience | 2 | wiki/tools/proxy_contest.md |
| Infra / observability | 1 | docs/RELEASE_NOTES_ENG.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, mcp, rag, sdk-api, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 982 |
| manifests | 19 |
| docs | 740 |
| tests | 12 |
| ci/ops | 3 |
| spec artifacts | 3 |
| agent instruction files | 2 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | OpenProxy MCP |
| headings | OpenProxy MCP / Why OpenProxy? / 주요 기능 / 빠른 시작 / 0단계: 어디에서 쓸 수 있나요? / 1단계: DART API 키 발급 (필수) / 2단계: AI 서비스에 연결 / 사용 예시 / Tool 구조 (17개) / 의결권 정책 |
| excerpt | OpenProxy MCP ! License CC BY NC 4.0 https //img.shields.io/badge/License CC%20BY NC%204.0 lightgrey.svg https //creativecommons.org/licenses/by nc/4.0/ ! Python 3.10+ https //img.shields.io/badge/python 3.10%2B blue.svg https //www.python.org/downloads/ ! MCP https //img.shields.io/badge/MCP Model%20Context%20Protocol green.svg https //modelcontextprotocol.io/ ! Tools https //img.shields.io/badge/tools 17 orange.svg tool 구조 17개 ! Release https //img.shields.io/badge/release v2.1 blue.svg docs/RELEASE NOTES.md English README README ENG.md Why OpenProxy? 코리아 디스카운트의 핵심에는 거버넌스 리스크가 있습니다. 패시브 투자가 늘면서 주식 오너십의 의미가 희미해지는 지금, 이 리스크는 오히려 더 선명해지고 있습니다. 거버넌스 정보에 쉽게 접근하고 빠르게 분석할 수 있어야 하지만, 수백 페이지의 공시 원문 |


## 주요 파일

### Manifests

- docs/v1/README.md
- wiki/architecture/audits/data/260510_law_layer_450/README.md
- wiki/architecture/audits/data/260524_agenda_relation_corpus/README.md
- wiki/architecture/audits/data/README.md
- wiki/architecture/audits/README.md
- wiki/archive/tools/legacy_rules/README.md
- wiki/decisions/README.md
- wiki/lessons/README.md
- wiki/ralph/README.md
- wiki/raw/README.md
- wiki/rules/concepts/README.md
- wiki/rules/laws/README.md
- wiki/tools/README.md
- AGENTS.md
- sample_universe/README.md
- README.md
- CLAUDE.md
- Dockerfile
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- docs/ARCHITECTURE.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| wiki | 712 |
| open_proxy_mcp | 117 |
| scripts | 78 |
| powerpoint | 26 |
| docs | 22 |
| tests | 10 |
| sample_universe | 4 |
| .github | 2 |
| .dockerignore | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| CLAUDE.md | 1 |
| Dockerfile | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 371 |
| .json | 349 |
| .py | 163 |
| .csv | 61 |
| .html | 24 |
| [no-ext] | 6 |
| .toml | 2 |
| .xlsx | 2 |
| .yml | 2 |
| .example | 1 |
| .pptx | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
