# cocoindex-io/cocoindex-code

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/cocoindex-io/cocoindex-code |
| local path | sources/cocoindex-io__cocoindex-code |
| HEAD | c98f8cc |
| stars/forks | 2100 / 166 |
| language | Python |
| license |  |
| pushedAt | 2026-06-16T06:04:19Z |
| trendScore / priorityScore | 155 / 420 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 314 | README.md, docker/Dockerfile, tests/test_cli_helpers.py |
| Cloud native / infrastructure | 172 | README.md, tests/e2e_docker_fixtures/sample_project/README.md, docker/docker-compose.yml |
| Coding agent / software automation | 69 | README.md, pyproject.toml, EMBEDDINGS.md |
| Developer tools / DX | 61 | README.md, docker/docker-compose.yml, pyproject.toml |
| MCP / agent interoperability | 51 | README.md, docker/docker-compose.yml, pyproject.toml |
| Database / data infrastructure | 50 | README.md, pyproject.toml, tests/test_chunker_registry.py |
| Local LLM / inference | 35 | README.md, tests/test_cli_helpers.py, EMBEDDINGS.md |
| Security / supply chain | 18 | README.md, EMBEDDINGS.md, SECURITY.md |
| AI agent / orchestration | 15 | README.md, .claude-plugin/marketplace.json, .claude-plugin/plugin.json |
| Frontend / app framework | 10 | README.md, src/cocoindex_code/settings.py |
| Data / ML platform | 7 | EMBEDDINGS.md, scripts/find_best_models.py |
| Observability / evaluation | 1 | scripts/find_best_models.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 63 |
| manifests | 6 |
| docs | 10 |
| tests | 23 |
| ci/ops | 4 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | macOS / Windows | Get Started — zero config, let's go! / Install / Coding Agent Integration / Skill (Recommended) / MCP Server / Manual CLI Usage / CLI Reference / Search Options / Docker / Choosing an image | <p align="center" <img width="2428" alt="cocoindex code" src="https //github.com/user attachments/assets/d05961b4 0b7b 42ea 834a 59c3c01717ca" / </p <h1 align="center" AST based semantic code search that just works</h1 ! effect https //github.com/user attachments/assets/cb3a4cae 0e1f 49c4 890b 7bb93317ab60 A lightweight, effective AST based semantic code search tool for your codebase. Built on CocoIndex https //github.com/cocoindex io/cocoindex — a Rust based ultra performant data transformation engine. Use it from the CLI, or integrate with Claude, Codex, Cursor — any coding agent — via Skill skill recommended or MCP mcp server . Instant token saving by 70%. 1 min setup — install and go, ze |


## Key Files

### Manifests

- README.md
- tests/e2e_docker_fixtures/sample_project/README.md
- CLAUDE.md
- docker/docker-compose.yml
- docker/Dockerfile
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- CLAUDE.md


### Agent Instruction Files

- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| tests | 23 |
| src | 18 |
| docker | 3 |
| skills | 3 |
| .claude-plugin | 2 |
| .github | 2 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| CLAUDE.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| EMBEDDINGS.md | 1 |
| LICENSE | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 40 |
| .md | 10 |
| [no-ext] | 4 |
| .yml | 3 |
| .json | 2 |
| .sh | 1 |
| .toml | 1 |
| .ts | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
