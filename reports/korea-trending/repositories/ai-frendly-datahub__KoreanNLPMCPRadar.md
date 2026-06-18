# ai-frendly-datahub/KoreanNLPMCPRadar

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/ai-frendly-datahub/KoreanNLPMCPRadar |
| local path | sources/ai-frendly-datahub__KoreanNLPMCPRadar |
| HEAD | 085969b |
| stars/forks | 0 / 0 |
| language | HTML |
| license |  |
| pushedAt | 2026-06-17T16:36:05Z |
| trendScore / priorityScore | 76 / 167 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 500 | README.md, pyproject.toml, reports/korean_nlp_mcp_20260413_quality.json |
| MCP / tool protocol | 500 | AGENTS.md, README.md, pyproject.toml |
| Security / compliance | 306 | README.md, reports/korean_nlp_mcp_20260413_quality.json, reports/korean_nlp_mcp_20260414_quality.json |
| LLM wiki / memory / graph | 31 | mcp_server/server.py, radar/storage.py, tests/unit/test_mcp_category_config.py |
| Spec / doc-driven workflow | 11 | README.md, .github/workflows/health-check.yml, .github/workflows/pr-checks.yml |
| AI agent / tool use | 2 | radar/collector.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, graphMemory, korea-signal, llm-wiki-memory, llmFramework, mcp, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 178 |
| manifests | 4 |
| docs | 2 |
| tests | 23 |
| ci/ops | 5 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | KoreanNLPMCPRadar - 한국어 NLP MCP 레이더 |
| headings | KoreanNLPMCPRadar - 한국어 NLP MCP 레이더 / 프로젝트 목표 / 기술적 우수성 / 빠른 시작 / GitHub Actions & GitHub Pages / 동작 방식 / 기본 경로 / 디렉터리 구성 / MCP 운영 범위 / DataHub Operations |
| excerpt | KoreanNLPMCPRadar 한국어 NLP MCP 레이더 🌐 Live Report https //ai frendly datahub.github.io/KoreanNLPMCPRadar/ Korean NLP & Language 섹션의 한국 MCP 서버 목록을 수집하고 리스크/활성도를 추적하는 독립 Radar입니다. 프로젝트 목표 데이터 수집 RSS 피드 및 API 엔티티 분석 도메인별 키워드 매칭 트렌드 리포트 DuckDB 저장 + HTML 리포트로 한국어 NLP MCP 동향 시각화 자동화 GitHub Actions 일일 수집 + GitHub Pages 리포트 자동 배포 기술적 우수성 안정성 HTTP 자동 재시도 지수 백오프 , DB 트랜잭션 에러 처리 관찰성 구조화된 JSON 로깅으로 파이프라인 상태 실시간 모니터링 품질 보증 단위 테스트로 코드 변경 시 회귀 버그 사전 차단 고성능 배치 처리 최적화로 대량 데이터 수집 시 성능 향상 운영 자동화 Email/Webhook 알림으로 무인 운영 가능 빠른 시작 1. 가상환경을 만들고 의존성을 설치합니다. 2. 실행 주요 옵션 per source limit 20 , recent days 5 , keep days 60 , timeout 20 . GitHub Actions & GitHub Pages 워크플로 .github/workflows/radar crawler.yml 스케줄 매일 00 0 |


## 주요 파일

### Manifests

- AGENTS.md
- README.md
- pyproject.toml
- requirements.txt


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- requirements.txt


### Agent Instruction Files

- AGENTS.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| reports | 98 |
| radar | 22 |
| tests | 22 |
| radar_core | 7 |
| .github | 5 |
| config | 3 |
| mcp_server | 3 |
| .editorconfig | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| data | 1 |
| fixtures | 1 |
| LICENSE | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .json | 98 |
| .py | 56 |
| .yml | 5 |
| [no-ext] | 4 |
| .yaml | 3 |
| .html | 2 |
| .md | 2 |
| .txt | 2 |
| .cfg | 1 |
| .duckdb | 1 |
| .example | 1 |
| .in | 1 |
| .ini | 1 |
| .toml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
