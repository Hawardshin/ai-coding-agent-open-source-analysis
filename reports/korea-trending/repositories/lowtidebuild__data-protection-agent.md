# lowtidebuild/data-protection-agent

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/lowtidebuild/data-protection-agent |
| local path | sources/lowtidebuild__data-protection-agent |
| HEAD | 4797b78 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-11T13:56:38Z |
| trendScore / priorityScore | 75 / 214 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 500 | AGENTS.md, README.md, sources/us-ca/README.md |
| AI agent / tool use | 330 | docs/README.md, AGENTS.md, README.md |
| Spec / doc-driven workflow | 123 | AGENTS.md, README.md, CLAUDE.md |
| Korean language / Korea domain | 93 | AGENTS.md, README.md, CLAUDE.md |
| RAG / retrieval | 80 | AGENTS.md, README.md, sources/us-ca/README.md |
| Infra / observability | 18 | templates/modes/enforcement-case-law.md, kb/eu-gdpr/index/case-index.json, kb/eu-gdpr/index/enforcement-index.json |
| MCP / tool protocol | 11 | AGENTS.md, README.md, CLAUDE.md |
| LLM wiki / memory / graph | 5 | docs/agent-protocol.md, docs/kb-operations-guide.md, kb/eu-gdpr/library/grade-b/enforcement-decisions/datatilsynet-grindr-6m-consent-special-categories.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, documentParsing, evalObservability, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, mcp, rag, security, security-compliance, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 2932 |
| manifests | 16 |
| docs | 2593 |
| tests | 38 |
| ci/ops | 1 |
| spec artifacts | 17 |
| agent instruction files | 15 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Data Protection Agent |
| headings | Data Protection Agent / Legal Research Orchestrator · Unified Privacy Research Across EU, Korea & California / Heritage / Table of Contents / The Problem / The Solution / Knowledge Base / How the Knowledge Gets In / Topic Crosswalks (29 total) / How It Works |
| excerpt | <div align="center" English README.md · 한국어 README.ko.md Latest release v1.0.0 — Initial public release docs/releases/RELEASE v1.0.0.md Data Protection Agent Legal Research Orchestrator · Unified Privacy Research Across EU, Korea & California 3 jurisdictions · 2,195 indexed authorities · 30+ citation audit checks · 223 tests · 8 stage research workflow Built for Claude Code https //docs.anthropic.com/en/docs/claude code/overview · Powered by structured RAG · Production tested ! Claude Code https //img.shields.io/badge/Claude Code Powered blueviolet?logo=anthropic https //claude.ai/code ! Python 3.11+ https //img.shields.io/badge/Python 3.11+ 3776AB?logo=python&logoColor=white https //python. |


## 주요 파일

### Manifests

- docs/README.md
- AGENTS.md
- README.md
- kb/us-ca/library/grade-b/ca-courts-unpublished-opinions/README.md
- kb/us-ca/library/grade-b/ca-rulemaking-reasons/README.md
- kb/us-ca/library/grade-b/case-materials/README.md
- kb/us-ca/library/grade-c/case-discovery/README.md
- sources/us-ca/library/grade-b/ca-courts-unpublished-opinions/README.md
- sources/us-ca/library/grade-b/ca-rulemaking-reasons/README.md
- sources/us-ca/library/grade-b/case-materials/README.md
- sources/us-ca/library/grade-c/case-discovery/README.md
- sources/us-ca/README.md
- CLAUDE.md
- sources/us-ca/CLAUDE.md
- requirements.txt
- sources/us-ca/requirements.txt


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- sources/us-ca/CLAUDE.md
- requirements.txt
- sources/us-ca/requirements.txt
- .claude/agents/data-protection-agent.md
- .claude/skills/kb-retrieval/SKILL.md
- .claude/commands/answer.md
- .claude/skills/citation-auditor/SKILL.md
- .claude/skills/claim-grounding/SKILL.md
- .claude/skills/comparative-composition/SKILL.md
- .claude/skills/intake-and-routing/SKILL.md
- .claude/skills/legal-writing-formatter/SKILL.md
- .claude/skills/output-mode-composition/SKILL.md
- .claude/skills/quality-check/SKILL.md
- .claude/skills/result-memo-composition/SKILL.md
- .claude/skills/trust-boundary/SKILL.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- sources/us-ca/CLAUDE.md
- .claude/agents/data-protection-agent.md
- .claude/skills/kb-retrieval/SKILL.md
- .claude/commands/answer.md
- .claude/skills/citation-auditor/SKILL.md
- .claude/skills/claim-grounding/SKILL.md
- .claude/skills/comparative-composition/SKILL.md
- .claude/skills/intake-and-routing/SKILL.md
- .claude/skills/legal-writing-formatter/SKILL.md
- .claude/skills/output-mode-composition/SKILL.md
- .claude/skills/quality-check/SKILL.md
- .claude/skills/result-memo-composition/SKILL.md
- .claude/skills/trust-boundary/SKILL.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| kb | 2397 |
| sources | 443 |
| scripts | 18 |
| tests | 16 |
| .claude | 12 |
| docs | 11 |
| templates | 9 |
| knowledge | 5 |
| index | 4 |
| config | 2 |
| cross_jurisdiction_auditor | 2 |
| unified_auditor | 2 |
| .gitattributes | 1 |
| .githooks | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 2593 |
| .json | 175 |
| .py | 72 |
| .txt | 47 |
| .html | 31 |
| [no-ext] | 13 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
