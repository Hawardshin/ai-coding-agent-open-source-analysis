# henrydaum/second-brain

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/henrydaum/second-brain |
| local path | sources/henrydaum__second-brain |
| HEAD | 8294a5d |
| stars/forks | 556 / 64 |
| language | Python |
| license |  |
| pushedAt | 2026-06-15T21:57:24Z |
| trendScore / priorityScore | 142 / 383 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 343 | AGENTS.md, README.md, stress/README.md |
| Frontend / app framework | 285 | AGENTS.md, README.md, stress/README.md |
| Database / data infrastructure | 122 | AGENTS.md, README.md, CLAUDE.md |
| Data / ML platform | 89 | AGENTS.md, README.md, CLAUDE.md |
| Cloud native / infrastructure | 34 | README.md, CLAUDE.md, pipeline/database.py |
| MCP / agent interoperability | 25 | AGENTS.md, README.md, CLAUDE.md |
| Developer tools / DX | 15 | AGENTS.md, README.md, CLAUDE.md |
| RAG / retrieval / knowledge | 14 | AGENTS.md, README.md, agent/system_prompt_static.md |
| Security / supply chain | 10 | README.md, tests/test_memory_prompt.py, agent/system_prompt_static.md |
| Coding agent / software automation | 6 | AGENTS.md, CLAUDE.md, agent/system_prompt_static.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, llm-app, llmFramework, mcp, rag, security, securityTooling |
| stacks | Python |
| capabilities | LLM/app framework, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 132 |
| manifests | 5 |
| docs | 5 |
| tests | 24 |
| ci/ops | 1 |
| spec artifacts | 3 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Sponsor | Sponsor / Second Brain / What It Can Do / The Kernel And The Package Store / Getting started / Contributing to the store / Core Architecture / Conversation Runtime / Plugin System / Security | <img width="1440" height="569" alt="highreslogotypecrop" src="https //github.com/user attachments/assets/598ab57f ed6b 491a 9cd6 142b93b09244" / Sponsor <div align="center" <img src="https //github.com/user attachments/assets/9e7ff971 8159 4081 b8bc 9b9ff5edd4ff gh light mode only" width="500" alt="Atlas Cloud Logo" <img src="https //github.com/user attachments/assets/8497513e 09a4 4151 8b8d ed8be782a389 gh dark mode only" width="500" alt="Atlas Cloud Logo" </div Atlas Cloud https //www.atlascloud.ai/?utm source=github&utm medium=link&utm campaign=second brain is a full modal AI inference platform that gives developers a single AI API to access video generation, image generation, and LLM API |


## Key Files

### Manifests

- AGENTS.md
- README.md
- stress/README.md
- CLAUDE.md
- requirements.txt


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- requirements.txt


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| plugins | 40 |
| tests | 24 |
| runtime | 16 |
| state_machine | 11 |
| stress | 8 |
| templates | 5 |
| attachments | 4 |
| pipeline | 4 |
| agent | 3 |
| config | 2 |
| events | 2 |
| .github | 1 |
| .gitignore | 1 |
| AGENTS.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 121 |
| .md | 5 |
| .txt | 2 |
| [no-ext] | 2 |
| .pyw | 1 |
| .yml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
