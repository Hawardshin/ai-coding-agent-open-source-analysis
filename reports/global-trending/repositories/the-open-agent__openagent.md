# the-open-agent/openagent

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/the-open-agent/openagent |
| local path | sources/the-open-agent__openagent |
| HEAD | b705d33 |
| stars/forks | 5266 / 611 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T18:23:34Z |
| trendScore / priorityScore | 188 / 488 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 250 | README.md, Dockerfile, go.mod |
| Security / supply chain | 145 | README.md, go.mod, audio/xfyun_client_test.go |
| Developer tools / DX | 130 | README.md, web/README.md, go.mod |
| RAG / retrieval / knowledge | 130 | README.md, embedding/alibabacloud.go, embedding/azure_openai.go |
| Frontend / app framework | 83 | README.md, web/README.md, web/package.json |
| Cloud native / infrastructure | 74 | README.md, deploy/ocr-service/README.md, docker-compose.yml |
| Coding agent / software automation | 68 | README.md, skills/coding-agent/SKILL.md, skills/model-usage/references/codexbar-cli.md |
| MCP / agent interoperability | 62 | README.md, go.mod, contest/rag_contest_test.go |
| Observability / evaluation | 17 | README.md, go.mod, skills/coding-agent/SKILL.md |
| Database / data infrastructure | 16 | README.md, docker-compose.yml, go.mod |
| Local LLM / inference | 3 | README.md, embedding/local.go, embedding/provider.go |
| Data / ML platform | 1 | controllers/pipe.go |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Go |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 650 |
| manifests | 12 |
| docs | 67 |
| tests | 27 |
| ci/ops | 5 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Backend | What is OpenAgent? / Quick Start / Backend / Frontend / Features / 🤖 30+ Model Providers / 🔄 Autonomous Agent Loops / 📚 RAG & Knowledge Base / ⚡ Workflow Automation / 🏗️ Platform Features | <div align="center" <img src="https //cdn.openagentai.org/img/openagent logo 1900x450.png" alt="OpenAgent" width="480" <br/ <br/ Next generation personal AI assistant powered by LLM, RAG and agent loops — ships as a single binary, no installation needed Supporting computer use, browser use and coding agent <br/ ! Build https //github.com/the open agent/openagent/workflows/Build/badge.svg?style=flat square https //github.com/the open agent/openagent/actions/workflows/build.yml ! Release https //img.shields.io/github/v/release/the open agent/openagent?style=flat square&color=4f46e5 https //github.com/the open agent/openagent/releases/latest ! Docker Pulls https //img.shields.io/docker/pulls/ca |


## Key Files

### Manifests

- README.md
- web/README.md
- deploy/ocr-service/README.md
- docker-compose.yml
- Dockerfile
- go.mod
- web/package.json
- deploy/ocr-service/Dockerfile
- deploy/ocr-service/requirements.txt
- tool/pptx-worker/package.json
- docker-compose.ocr.yml
- go.sum


### Spec / Docs / Prompt Artifacts

- deploy/ocr-service/requirements.txt


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| web | 197 |
| object | 69 |
| skills | 60 |
| controllers | 51 |
| model | 36 |
| tool | 35 |
| util | 27 |
| office | 24 |
| embedding | 14 |
| routers | 12 |
| txt | 12 |
| pipe | 11 |
| swagger | 10 |
| i18n | 7 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 350 |
| .js | 185 |
| .md | 67 |
| .json | 12 |
| [no-ext] | 9 |
| .yml | 6 |
| .css | 5 |
| .html | 3 |
| .sh | 3 |
| .conf | 1 |
| .dockerfile | 1 |
| .less | 1 |
| .mjs | 1 |
| .mod | 1 |
| .ps1 | 1 |
| .py | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
