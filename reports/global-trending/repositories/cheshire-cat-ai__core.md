# cheshire-cat-ai/core

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/cheshire-cat-ai/core |
| local path | sources/cheshire-cat-ai__core |
| HEAD | 375bca4 |
| stars/forks | 3045 / 405 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T18:59:49Z |
| trendScore / priorityScore | 186 / 447 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 198 | README.md, src/cat/scaffold/plugins/ui/README.md, pyproject.toml |
| Security / supply chain | 49 | tests/test_config.py, tests/routes/auth/test_jwt.py, V2_DEV_NOTES.md |
| Database / data infrastructure | 47 | src/cat/scaffold/data/readme.md, pyproject.toml, src/cat/db/database.py |
| Cloud native / infrastructure | 34 | tests_giga/test_ambient_context.py, V2_DEV_NOTES.md, .tmp_deactivated_workflows_github/workflows/pr.yml |
| MCP / agent interoperability | 25 | src/cat/protocols/model_context/client.py, src/cat/services/agents/base.py, V2_DEV_NOTES.md |
| Local LLM / inference | 22 | src/cat/scaffold/plugins/llms/README.md, src/cat/scaffold/plugins/llms/plugin.json, src/cat/scaffold/plugins/llms/providers.py |
| RAG / retrieval / knowledge | 17 | src/cat/scaffold/plugins/llms/README.md, src/cat/looking_glass/prompts.py, src/cat/services/agents/base.py |
| Developer tools / DX | 14 | pyproject.toml, src/cat/scaffold/plugins/llms/providers.py, tests/routes/auth/test_permissions_registry.py |
| Frontend / app framework | 11 | src/cat/scaffold/plugins/chats/README.md, src/cat/scaffold/plugins/ui/README.md, V2_DEV_NOTES.md |
| Coding agent / software automation | 7 | src/cat/scaffold/plugins/chats/utils/crud.py, src/cat/scaffold/plugins/chats/utils/schemas.py, src/cat/scaffold/plugins/ui/dist/assets/index.css |
| Data / ML platform | 1 | src/cat/services/model_providers/base.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 134 |
| manifests | 9 |
| docs | 13 |
| tests | 34 |
| ci/ops | 0 |
| spec artifacts | 4 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Cheshire Cat AI (Stregatto) | Cheshire Cat AI (Stregatto) / Quickstart / Docs and Resources / Roadmap & Contributing / License and trademark / Which way to go? | <a name="readme top" </a <p align="center" <img align="center" src=./readme/logo.svg width=400px alt="Cheshire Cat AI logo" </p !WARNING Version 2 is unstable alpha! This new version is still under heavy development and needs work before it becomes stable. Expect breaking changes, rough edges, and incomplete features. Not recommended for production use yet. Cheshire Cat AI Stregatto Best framework to learn how AI agents work. It is designed bottom up to be easy to understand and easy to extend with coding agents. Main use case of the Cat is to give Pollo Watzlawick https //www.youtube.com/@PieroSavastano a real consciousness. But you can also use it to have fun, learn AI and bring your agent |


## Key Files

### Manifests

- src/cat/scaffold/plugins/llms/README.md
- README.md
- src/cat/scaffold/plugins/chats/README.md
- src/cat/scaffold/plugins/ui/README.md
- src/cat/scaffold/plugins/llms/requirements.txt
- pyproject.toml
- tests/mocks/mock_plugin/requirements.txt
- src/cat/scaffold/plugins/chats/requirements.txt
- src/cat/scaffold/plugins/ui/requirements.txt


### Spec / Docs / Prompt Artifacts

- src/cat/scaffold/plugins/llms/requirements.txt
- tests/mocks/mock_plugin/requirements.txt
- src/cat/scaffold/plugins/chats/requirements.txt
- src/cat/scaffold/plugins/ui/requirements.txt


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| src | 86 |
| tests | 34 |
| .tmp_deactivated_workflows_github | 6 |
| .gitignore | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |
| readme | 1 |
| README.md | 1 |
| tests_giga | 1 |
| V2_DEV_NOTES.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 99 |
| .md | 13 |
| .txt | 6 |
| .json | 5 |
| [no-ext] | 3 |
| .html | 2 |
| .yml | 2 |
| .css | 1 |
| .js | 1 |
| .svg | 1 |
| .toml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
