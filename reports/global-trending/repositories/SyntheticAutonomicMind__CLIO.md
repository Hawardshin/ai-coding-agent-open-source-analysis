# SyntheticAutonomicMind/CLIO

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/SyntheticAutonomicMind/CLIO |
| local path | sources/SyntheticAutonomicMind__CLIO |
| HEAD | 141e118 |
| stars/forks | 173 / 10 |
| language | Perl |
| license |  |
| pushedAt | 2026-06-17T22:53:27Z |
| trendScore / priorityScore | 136 / 422 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | AGENTS.md, README.md, terminal-bench/README.md |
| Developer tools / DX | 267 | AGENTS.md, README.md, styles/README.md |
| Security / supply chain | 262 | AGENTS.md, README.md, Dockerfile |
| MCP / agent interoperability | 222 | AGENTS.md, README.md, docs/MCP.md |
| Cloud native / infrastructure | 151 | README.md, terminal-bench/README.md, Dockerfile |
| Coding agent / software automation | 63 | AGENTS.md, README.md, docs/MEMORY.md |
| Database / data infrastructure | 58 | docs/MCP.md, docs/AUTOMATION.md, docs/DEVELOPER_GUIDE.md |
| Local LLM / inference | 58 | README.md, docs/ARCHITECTURE.md, docs/FEATURES.md |
| Observability / evaluation | 31 | AGENTS.md, terminal-bench/README.md, docs/MEMORY.md |
| RAG / retrieval / knowledge | 18 | docs/MCP.md, docs/MEMORY.md, docs/FEATURES.md |
| Data / ML platform | 15 | terminal-bench/README.md, docs/MEMORY.md, docs/MULTI_AGENT_COORDINATION.md |
| Frontend / app framework | 11 | docs/PUPPETEER_MODE.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 426 |
| manifests | 8 |
| docs | 43 |
| tests | 177 |
| ci/ops | 4 |
| spec artifacts | 6 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | CLIO - Command Line Intelligence Orchestrator | CLIO - Command Line Intelligence Orchestrator / What You Can Do With CLIO / Core Features / Slash Commands / AI Providers / Screenshots / Quick Start / Check Dependencies / Install / Configure AI Provider | CLIO Command Line Intelligence Orchestrator A terminal native AI coding tool that reads your code, edits files, runs commands, uses git, and works through tasks with you. I built CLIO for myself. I spend more time in terminal sessions than I do using GUIs, and I wanted a terminal first AI development tool that worked the way I work. It didn't really exist, so I built it. Starting with version 20260119.1, CLIO has been building itself all development on SAM, CLIO, and ALICE is done through pair programming with AI agents using CLIO. ! GPL 3.0 License https //img.shields.io/badge/license GPL 3.0 blue LICENSE ! Perl 5.32+ https //img.shields.io/badge/perl 5.32%2B blue docs/DEPENDENCIES.md ! Dis |


## Key Files

### Manifests

- AGENTS.md
- tests/README.md
- README.md
- styles/README.md
- terminal-bench/README.md
- themes/README.md
- Dockerfile
- Makefile


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- lib/CLIO/Spec/Manager.pm
- docs/ARCHITECTURE.md
- docs/SPECS/ARCHITECTURE.md
- docs/SPECS/PROTOCOLS.md
- docs/SPECS/TOOLS.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| tests | 172 |
| lib | 162 |
| docs | 27 |
| styles | 26 |
| .github | 7 |
| themes | 5 |
| terminal-bench | 4 |
| ai-assisted | 2 |
| scripts | 2 |
| tools | 2 |
| .clio | 1 |
| .dockerignore | 1 |
| .gitignore | 1 |
| AGENTS.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .pm | 164 |
| .pl | 157 |
| .md | 43 |
| .style | 25 |
| [no-ext] | 15 |
| .sh | 7 |
| .yml | 6 |
| .theme | 4 |
| .disabled | 1 |
| .j2 | 1 |
| .py | 1 |
| .t | 1 |
| .txt | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
