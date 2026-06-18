# gih2yun/bareun-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/gih2yun/bareun-mcp |
| local path | sources/gih2yun__bareun-mcp |
| HEAD | df41414 |
| stars/forks | 0 / 0 |
| language |  |
| license |  |
| pushedAt | 2026-06-09T06:04:15Z |
| trendScore / priorityScore | 72 / 103 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 107 | README.md, docs/AWESOME-MCP-PR.md, docs/MONITORING.md |
| Korean language / Korea domain | 17 | README.md, docs/AWESOME-MCP-PR.md, docs/MONITORING.md |
| Infra / observability | 4 | docs/MONITORING.md, docs/SUBMISSION.md |
| Security / compliance | 3 | docs/SUBMISSION.md |
| AI agent / tool use | 2 | README.md, docs/MONITORING.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, infra-observability, korea-signal, mcp, security-compliance |
| stacks | docs/awesome-list |
| capabilities | Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 8 |
| manifests | 1 |
| docs | 4 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Bareun MCP Server — Korean NLP & Spell/Grammar Checking |
| headings | Bareun MCP Server — Korean NLP & Spell/Grammar Checking / Tools / Resources / Quick start / Claude Code / -s user → global: available in every project / Cursor / VS Code / Claude Desktop — `claude_desktop_config.json` / Test with MCP Inspector |
| excerpt | Bareun MCP Server — Korean NLP & Spell/Grammar Checking ! License MIT https //img.shields.io/badge/License MIT yellow.svg ./LICENSE 바른 Bareun is a Korean natural language platform. This is its MCP Model Context Protocol server — it lets any MCP compatible AI tool Claude, Cursor, VS Code, Claude Desktop, … perform Korean morphological analysis and spell/grammar correction by calling Bareun as a tool. Large language models still miss the subtle spacing, particle agreement, and confusable word rules of Korean. Plug Bareun in as an MCP tool and your agent can hand off analysis and proofreading to a dedicated Korean engine, then use the result to produce more accurate Korean output. Hosted endpoi |


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
| docs | 3 |
| glama.json | 1 |
| LICENSE | 1 |
| README.md | 1 |
| server.json | 1 |
| smithery.yaml | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 4 |
| .json | 2 |
| .yaml | 1 |
| [no-ext] | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
