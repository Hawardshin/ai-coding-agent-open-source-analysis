# OpenHands/OpenHands

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/OpenHands/OpenHands |
| local path | sources/OpenHands__OpenHands |
| HEAD | f27d34c |
| stars/forks | 77562 / 9858 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2026-06-17T22:31:37Z |
| trendScore / priorityScore | 170 / 480 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Coding agent / software automation | 500 | frontend/__tests__/helpers/README.md, frontend/README.md, enterprise/doc/architecture/README.md |
| Frontend / app framework | 500 | frontend/__tests__/helpers/README.md, frontend/README.md, frontend/src/api/README.md |
| AI agent / orchestration | 271 | AGENTS.md, README.md, skills/README.md |
| Cloud native / infrastructure | 261 | AGENTS.md, containers/README.md, openhands-ui/README.md |
| Developer tools / DX | 196 | frontend/README.md, AGENTS.md, openhands-ui/README.md |
| Database / data infrastructure | 122 | AGENTS.md, enterprise/enterprise_local/README.md, enterprise/server/maintenance_task_processor/README.md |
| Security / supply chain | 70 | frontend/README.md, AGENTS.md, enterprise/README.md |
| MCP / agent interoperability | 17 | AGENTS.md, enterprise/pyproject.toml, pyproject.toml |
| Observability / evaluation | 9 | enterprise/server/maintenance_task_processor/README.md, openhands/app_server/event_callback/README.md, openhands/app_server/sandbox/README.md |
| RAG / retrieval / knowledge | 5 | openhands/app_server/app_conversation/README.md, openhands/app_server/event/README.md, openhands/app_server/README.md |
| Data / ML platform | 1 | frontend/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2421 |
| manifests | 40 |
| docs | 77 |
| tests | 559 |
| ci/ops | 30 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Architecture | Quickstart / Option 1: Without a Sandbox / Option 2: With a Docker Sandbox / Option 3: From Source / Architecture / More documentation | <a name="readme top" </a <div align="center" <img src="https //assets.openhands.dev/logo whitebackground.png" alt="OpenHands logo" width="340" <p align="center" <strong The self hosted developer control center for coding agents and automations.</strong </p <p align="center" Run OpenHands, Claude Code, Codex, Gemini, or any ACP compatible agent across local, remote, and cloud backends. </p </div <div align="center" <a href="https //github.com/OpenHands/incubator program" <img src="https //img.shields.io/badge/status beta blue?style=for the badge" alt="Project status beta" </a <a href="https //github.com/OpenHands/agent canvas/actions/workflows/ci.yml" <img src="https //img.shields.io/github/a |


## Key Files

### Manifests

- frontend/__tests__/helpers/README.md
- frontend/README.md
- enterprise/doc/architecture/README.md
- frontend/src/api/README.md
- AGENTS.md
- .devcontainer/README.md
- containers/README.md
- enterprise/README.md
- openhands-ui/README.md
- README.md
- skills/README.md
- tests/unit/README.md
- containers/dev/README.md
- enterprise/enterprise_local/README.md
- enterprise/migrations/README.md
- enterprise/server/maintenance_task_processor/README.md
- enterprise/server/sharing/README.md
- enterprise/sync/README.md
- openhands/app_server/app_conversation/git/README.md
- openhands/app_server/app_conversation/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- openhands-ui/.storybook/prompt.txt


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| frontend | 1312 |
| enterprise | 530 |
| openhands | 266 |
| tests | 109 |
| openhands-ui | 80 |
| .github | 34 |
| skills | 27 |
| containers | 7 |
| .agents | 6 |
| kind | 6 |
| scripts | 6 |
| .openhands | 4 |
| .devcontainer | 3 |
| dev_config | 2 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 839 |
| .tsx | 721 |
| .ts | 509 |
| .svg | 124 |
| .md | 77 |
| .j2 | 34 |
| .yml | 34 |
| [no-ext] | 19 |
| .json | 13 |
| .sh | 9 |
| .yaml | 8 |
| .css | 7 |
| .ini | 5 |
| .toml | 4 |
| .js | 3 |
| .cjs | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
