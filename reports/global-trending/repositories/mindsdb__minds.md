# mindsdb/minds

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/mindsdb/minds |
| local path | sources/mindsdb__minds |
| HEAD | 081f6d7 |
| stars/forks | 39316 / 6207 |
| language | Makefile |
| license |  |
| pushedAt | 2026-06-17T17:02:13Z |
| trendScore / priorityScore | 195 / 436 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 65 | CLAUDE.md, Makefile, docs/api.html |
| Database / data infrastructure | 45 | README.md, CLAUDE.md, docker-compose.yml |
| Cloud native / infrastructure | 39 | README.md, docker-compose.yml, Makefile |
| Security / supply chain | 30 | README.md, docs/api.html, SECURITY.md |
| Frontend / app framework | 24 | CLAUDE.md, Makefile, docs/index.html |
| MCP / agent interoperability | 10 | docs/docs.json |
| Coding agent / software automation | 8 | docs/api.html, docs/index.html, docs/setup.html |
| Developer tools / DX | 6 | docs/api.html, docs/docs.json, docs/setup.html |
| Observability / evaluation | 6 | README.md, docs/docs.json, docs/use-cases.html |
| Data / ML platform | 3 | docs/use-cases.html, .github/ISSUE_TEMPLATE/integrations_contest.yaml, CONTRIBUTING.md |
| RAG / retrieval / knowledge | 2 | docs/api.html, docs/use-cases.html |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | docs/awesome-list |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 31 |
| manifests | 4 |
| docs | 13 |
| tests | 0 |
| ci/ops | 3 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | MINDS-COWORK PLATFORM | MINDS-COWORK PLATFORM / USE CASES / GET STARTED / Desktop App: / Build from source: / DEPLOY ANYWHERE / 🫴 Help and support / 🤝 Contribute to Minds Platform / 📚 Resources | <a name="readme top" </a <div align="center" <a href="https //pypi.org/project/MindsDB/" target=" blank" <img src="https //badge.fury.io/py/MindsDB.svg" alt="MindsDB Release" / </a <a href="https //www.python.org/downloads/" target=" blank" <img src="https //img.shields.io/badge/python 3.10.x%7C%203.11.x%7C%203.12.x%7C%203.13.x brightgreen.svg" alt="Python supported" / </a <a href="https //hub.docker.com/r/mindsdb/mindsdb" target=" blank" <img src="https //img.shields.io/docker/pulls/mindsdb/mindsdb.svg?logo=docker&label=Docker%20pulls&cacheSeconds=86400" alt="Docker pulls" / </a <br/ <p align="center" <a href="https //docs.mindshub.ai/" Documentation</a · <a href="https //docs.mindshub.ai/s |


## Key Files

### Manifests

- README.md
- CLAUDE.md
- docker-compose.yml
- Makefile


### Spec / Docs / Prompt Artifacts

- CLAUDE.md


### Agent Instruction Files

- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| .github | 9 |
| docs | 5 |
| assets | 3 |
| docker | 3 |
| .devcontainer | 1 |
| .gitignore | 1 |
| .gitmodules | 1 |
| CLAUDE.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| docker-compose.yml | 1 |
| LICENSE | 1 |
| Makefile | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 8 |
| [no-ext] | 5 |
| .html | 4 |
| .yaml | 4 |
| .yml | 4 |
| .json | 3 |
| .dockerfile | 2 |
| .conf | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
