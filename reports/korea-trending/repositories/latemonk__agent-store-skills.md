# latemonk/agent-store-skills

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/latemonk/agent-store-skills |
| local path | sources/latemonk__agent-store-skills |
| HEAD | b0772e1 |
| stars/forks | 0 / 0 |
| language |  |
| license |  |
| pushedAt | 2026-06-15T15:06:41Z |
| trendScore / priorityScore | 73 / 107 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 53 | README.md, korean-public-data/SKILL.md, korean-real-estate/SKILL.md |
| AI agent / tool use | 35 | README.md, korean-public-data/SKILL.md, korean-real-estate/SKILL.md |
| MCP / tool protocol | 13 | README.md, korean-public-data/SKILL.md, korean-real-estate/SKILL.md |
| Security / compliance | 2 | README.md, korean-public-data/SKILL.md |
| LLM wiki / memory / graph | 1 | korean-public-data/SKILL.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, graphMemory, korea-signal, llm-wiki-memory, mcp, security-compliance |
| stacks | docs/awesome-list |
| capabilities | Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 8 |
| manifests | 1 |
| docs | 8 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Agent Store — Claude Skills |
| headings | Agent Store — Claude Skills / Skills |
| excerpt | Agent Store — Claude Skills Task playbooks that help Claude and any MCP client use the Agent Store connector https //agent.store/mcp for Korean public & financial data. Connect via OAuth; enable agents in the console. Also exposed by the gateway as MCP resources resources/read . Skills korean public data — umbrella router which agent for any Korea question. Start here. dart financial analysis — Korean listed company ratios, distress screening, peers, reports dart . equity report jobs — async create→poll→deliver flow for KR/US equity research reports. company due diligence — verify & profile a Korean company from a business number status + pension + insurance + financials . korean real estate |


## 주요 파일

### Manifests

- README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| commercial-district-analytics | 1 |
| company-due-diligence | 1 |
| dart-financial-analysis | 1 |
| equity-report-jobs | 1 |
| korea-macro-stats | 1 |
| korean-public-data | 1 |
| korean-real-estate | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 8 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
