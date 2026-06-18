# seung23/lawtutor-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/seung23/lawtutor-mcp |
| local path | sources/seung23__lawtutor-mcp |
| HEAD | e9aca7e |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-05-17T15:30:34Z |
| trendScore / priorityScore | 83 / 187 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 148 | README.md, CLAUDE.md, Dockerfile |
| RAG / retrieval | 145 | README.md, CLAUDE.md, docs/EVALUATION.md |
| Infra / observability | 29 | README.md, docs/PROMPTING.md, docs/DEPLOYMENT.md |
| Spec / doc-driven workflow | 19 | README.md, CLAUDE.md, docs/PROMPTING.md |
| Korean language / Korea domain | 13 | pyproject.toml, src/lawtutor/mcp_server/server.py |
| Frontend / developer experience | 12 | README.md, CLAUDE.md, docs/PROMPTING.md |
| Security / compliance | 8 | docs/PROMPTING.md, docs/ARCHITECTURE.md, docs/DEPLOYMENT.md |
| LLM wiki / memory / graph | 3 | .claude/settings.local.json |
| AI agent / tool use | 1 | docs/ARCHITECTURE.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 95 |
| manifests | 6 |
| docs | 8 |
| tests | 16 |
| ci/ops | 3 |
| spec artifacts | 5 |
| agent instruction files | 3 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LawTutor MCP |
| headings | LawTutor MCP / 핵심 특징 / 데이터 규모 / 검색 품질 / 법령 검색 · 정확 조회 / 판례 · 결정례 의미 검색 / 평가 실행 / 아키텍처 / 검색 파이프라인 / MCP Tools |
| excerpt | LawTutor MCP 한국 7급 공무원시험 행정직 행정법/헌법 학습을 위한 RAG MCP 서버 . 국가법령정보센터 OPEN API에서 수집한 94만 건의 법령·판례·결정례 데이터를 벡터 DB에 인덱싱하고, Claude Pro 등 MCP 호환 클라이언트에서 정확하게 검색할 수 있도록 6개 도구를 제공한다. 핵심 특징 할루시네이션 차단 국가법령정보센터 OPEN API 단일 소스 기반 RAG. 존재하지 않는 조문·판례 생성 방지 하이브리드 검색 BGE M3 dense 1024차원 + sparse lexical 벡터를 RRF Reciprocal Rank Fusion 로 융합 리랭킹 법률 용어 동의어 확장 + N gram 타이틀 부스트로 법령 검색 정확도 향상 현행 법령 우선 시행일자 메타데이터 기반 is active 필터링 검색만 제공, 추론은 클라이언트에 위임 MCP 서버는 도구만 노출, LLM 추론은 Claude가 담당 셀프 호스팅 집 PC + Docker + Cloudflare Tunnel 데이터 규모 컬렉션 건수 데이터 소스 법령 조문 laws 240,695 5,500+ 법령의 조문 단위 청크 대법원 판례 precedents 579,012 대법원 판례 섹션 단위 청크 헌재결정례 decisions 99,394 헌법재판소 결정례 법령해석례 interpretations 26,839 법제처·행안부 유권해석 합계 945,940 검색 품질 1 |


## 주요 파일

### Manifests

- README.md
- CLAUDE.md
- docker-compose.yml
- Dockerfile
- pyproject.toml
- docker-compose.override.yml


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- docs/ARCHITECTURE.md
- docs/PRD.md
- .claude/settings.json
- .claude/settings.local.json


### Agent Instruction Files

- CLAUDE.md
- .claude/settings.json
- .claude/settings.local.json


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 42 |
| tests | 16 |
| data | 10 |
| scripts | 7 |
| docs | 6 |
| .claude | 2 |
| .dockerignore | 1 |
| .editorconfig | 1 |
| .env.example | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .python-version | 1 |
| CLAUDE.md | 1 |
| docker-compose.override.yml | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 65 |
| .json | 8 |
| .md | 8 |
| [no-ext] | 7 |
| .jsonl | 3 |
| .yml | 2 |
| .example | 1 |
| .toml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
