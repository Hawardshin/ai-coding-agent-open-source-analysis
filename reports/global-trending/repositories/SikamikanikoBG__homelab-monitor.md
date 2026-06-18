# SikamikanikoBG/homelab-monitor

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/SikamikanikoBG/homelab-monitor |
| local path | sources/SikamikanikoBG__homelab-monitor |
| HEAD | b35f3d4 |
| stars/forks | 126 / 20 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T11:16:56Z |
| trendScore / priorityScore | 146 / 404 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 322 | mcp/README.md, README.md, docker-compose.yml |
| MCP / agent interoperability | 215 | mcp/README.md, README.md, mcp/requirements.txt |
| Local LLM / inference | 205 | README.md, docker-compose.yml, mcp/tests/test_client.py |
| Data / ML platform | 80 | README.md, tests/test_experiments.py, CHANGELOG.md |
| Observability / evaluation | 74 | mcp/README.md, README.md, docker-compose.yml |
| Security / supply chain | 73 | mcp/README.md, README.md, mcp/homelab_client.py |
| AI agent / orchestration | 49 | README.md, mcp/homelab_client.py, website/mcp.md |
| Database / data infrastructure | 38 | README.md, docker-compose.yml, .github/workflows/ci.yml |
| Developer tools / DX | 31 | mcp/requirements.txt, Dockerfile, mcp/homelab_client.py |
| Coding agent / software automation | 20 | README.md, CONTRIBUTING.md, design/nav-mockups.html |
| Frontend / app framework | 16 | CONTRIBUTING.md, website/contributing.md, design/ai-cockpit/PLAN.md |
| RAG / retrieval / knowledge | 2 | design/ai-cockpit/research-A-feature-catalog.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 90 |
| manifests | 6 |
| docs | 31 |
| tests | 19 |
| ci/ops | 10 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | 🛰️ HomeLab Monitor | 🛰️ HomeLab Monitor / Get started / Grab the compose file and go. No GPU required — the GPU panels just light up when one's present. / What you get / Multi-machine, in two sentences / Configuration / Under the hood / Connect an AI agent (MCP) / the dashboard is on :9800; the MCP server rides along on :9810 / Security | 🛰️ HomeLab Monitor ! GitHub stars https //img.shields.io/github/stars/SikamikanikoBG/homelab monitor?style=social https //github.com/SikamikanikoBG/homelab monitor/stargazers ! Docker pulls https //img.shields.io/docker/pulls/sikamikaniko123/homelab monitor?logo=docker&logoColor=white&label=docker%20pulls&color=2496ED https //hub.docker.com/r/sikamikaniko123/homelab monitor ! Discord https //img.shields.io/badge/Discord join%20the%20chat 5865F2?logo=discord&logoColor=white https //discord.gg/tpKWKEdSQN ! version https //img.shields.io/github/v/release/SikamikanikoBG/homelab monitor?color=blue&label=version CHANGELOG.md ! license https //img.shields.io/badge/license MIT green ! docker https |


## Key Files

### Manifests

- mcp/README.md
- README.md
- mcp/requirements.txt
- docker-compose.yml
- Dockerfile
- deploy/docker-compose.next.yml


### Spec / Docs / Prompt Artifacts

- mcp/requirements.txt
- design/ai-cockpit/PLAN.md


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| tests | 16 |
| website | 15 |
| design | 11 |
| .github | 10 |
| mcp | 6 |
| docs | 5 |
| scripts | 4 |
| static | 4 |
| .dockerignore | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| app.py | 1 |
| CHANGELOG.md | 1 |
| CONTRIBUTING.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 30 |
| .md | 26 |
| .yml | 10 |
| .svg | 7 |
| [no-ext] | 5 |
| .json | 4 |
| .html | 2 |
| .css | 1 |
| .js | 1 |
| .mp4 | 1 |
| .ps1 | 1 |
| .txt | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
