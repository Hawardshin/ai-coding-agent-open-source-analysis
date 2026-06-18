# pna03100/hexa-swarm-template

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/pna03100/hexa-swarm-template |
| local path | sources/pna03100__hexa-swarm-template |
| HEAD | 23296d7 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-04-24T05:30:08Z |
| trendScore / priorityScore | 68 / 207 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 215 | hexa_swarm_core/README.md, README.md, {{project_slug}}/.ai-sync/locks/README.md |
| Spec / doc-driven workflow | 98 | README.md, {{project_slug}}/.ai-sync/contracts/README.md, docs/sub-agents.md |
| Frontend / developer experience | 91 | README.md, {{project_slug}}/.ai-sync/contracts/README.md, hexa_swarm_core/hexa_swarm_core/assets/tier_a/.ai-sync/contracts/README.md |
| MCP / tool protocol | 77 | README.md, docs/mcp-integration.md, hexa_swarm_core/pyproject.toml |
| Security / compliance | 68 | README.md, docs/mcp-integration.md, docs/sub-agents.md |
| Korean language / Korea domain | 57 | README.md, docs/enterprise-delivery.md, {{project_slug}}/.claude/agents/gamma-commerce.md |
| Infra / observability | 14 | README.md, docs/mcp-integration.md, docs/observability.md |
| RAG / retrieval | 5 | README.md, docs/claude-code-patterns.md, SAFETY_INVARIANTS.md |
| LLM wiki / memory / graph | 3 | docs/claude-code-patterns.md, {{project_slug}}/.claude/agents/reviewer.md, hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/agents/reviewer.md |
| Local LLM / on-device inference | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 234 |
| manifests | 17 |
| docs | 75 |
| tests | 23 |
| ci/ops | 11 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | hexa-swarm-template |
| headings | hexa-swarm-template / What this is / 90-day receipts / hexa-swarm-template at a glance / 30-second reproduction / What we solved that generic Claude Code scaffolds don't / APAC footprint — Korea-first on-premise AI launch (2026 Q2) / The hexa-swarm architecture / Universal framework (3 tiers) / Safety Invariants (S1–S6) |
| excerpt | hexa swarm template Claude native enterprise delivery methodology. Six specialized agents. One constitution. Production tested across 28 deployments. Now backed by a Korea–Japan enterprise alliance — Microcosm KR publicly launched 2026 04 21 . ! Built with Claude Code https //img.shields.io/badge/Built%20with Claude%20Code D97757 https //docs.claude.com/en/docs/claude code ! Claude Partner Network https //img.shields.io/badge/Claude%20Partner%20Network Applicant 5436DA https //claude.com/partners ! APAC Alliance https //img.shields.io/badge/APAC%20Alliance PNA%20%C3%97%20No.1%20Solutions 0A66C2 https //no1s.biz/en/company en/ ! License https //img.shields.io/badge/License MIT green.svg LICEN |


## 주요 파일

### Manifests

- examples/README.md
- examples/data-pipeline-py-celery/README.md
- examples/library-py/README.md
- examples/ml-training-py/README.md
- examples/rpa-bot-py-click/README.md
- hexa_swarm_core/README.md
- README.md
- {{project_slug}}/.ai-sync/contracts/README.md
- {{project_slug}}/.ai-sync/locks/README.md
- hexa_swarm_core/hexa_swarm_core/assets/tier_a/.ai-sync/contracts/README.md
- examples/data-pipeline-py-celery/pyproject.toml
- examples/library-py/pyproject.toml
- examples/ml-training-py/pyproject.toml
- examples/rpa-bot-py-click/pyproject.toml
- hexa_swarm_core/pyproject.toml
- {{project_slug}}/src/backend/pyproject.toml.jinja
- {{project_slug}}/src/backend/requirements.txt.jinja


### Spec / Docs / Prompt Artifacts

- {{project_slug}}/.claude/agents/alpha-data.md
- {{project_slug}}/.claude/agents/beta-core.md
- {{project_slug}}/.claude/agents/CLAUDE_alpha.md.jinja
- {{project_slug}}/.claude/agents/CLAUDE_beta.md.jinja
- {{project_slug}}/.claude/agents/CLAUDE_delta.md
- {{project_slug}}/.claude/agents/CLAUDE_epsilon.md.jinja
- {{project_slug}}/.claude/agents/CLAUDE_gamma.md.jinja
- {{project_slug}}/.claude/agents/cursor-fe.md
- {{project_slug}}/.claude/agents/delta-redteam.md
- {{project_slug}}/.claude/agents/epsilon-edge.md
- {{project_slug}}/.claude/agents/explorer.md
- {{project_slug}}/.claude/agents/gamma-commerce.md
- {{project_slug}}/.claude/agents/planner.md
- {{project_slug}}/.claude/agents/reviewer.md
- {{project_slug}}/.claude/agents/writer.md
- {{project_slug}}/.claude/mcp.json.jinja
- hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/agents/alpha-data.md
- hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/agents/beta-core.md
- hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/agents/cursor-fe.md
- hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/agents/delta-redteam.md


### Agent Instruction Files

- {{project_slug}}/.claude/agents/alpha-data.md
- {{project_slug}}/.claude/agents/beta-core.md
- {{project_slug}}/.claude/agents/CLAUDE_alpha.md.jinja
- {{project_slug}}/.claude/agents/CLAUDE_beta.md.jinja
- {{project_slug}}/.claude/agents/CLAUDE_delta.md
- {{project_slug}}/.claude/agents/CLAUDE_epsilon.md.jinja
- {{project_slug}}/.claude/agents/CLAUDE_gamma.md.jinja
- {{project_slug}}/.claude/agents/cursor-fe.md
- {{project_slug}}/.claude/agents/delta-redteam.md
- {{project_slug}}/.claude/agents/epsilon-edge.md
- {{project_slug}}/.claude/agents/explorer.md
- {{project_slug}}/.claude/agents/gamma-commerce.md
- {{project_slug}}/.claude/agents/planner.md
- {{project_slug}}/.claude/agents/reviewer.md
- {{project_slug}}/.claude/agents/writer.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| hexa_swarm_core | 127 |
| {{project_slug}} | 74 |
| examples | 14 |
| docs | 10 |
| .github | 3 |
| .gitignore | 1 |
| CASE_STUDIES.md | 1 |
| copier.yml | 1 |
| LICENSE | 1 |
| README.md | 1 |
| SAFETY_INVARIANTS.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 101 |
| .md | 75 |
| .jinja | 33 |
| [no-ext] | 10 |
| .toml | 5 |
| .yml | 4 |
| .json | 2 |
| .sh | 2 |
| .ipynb | 1 |
| .yaml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
