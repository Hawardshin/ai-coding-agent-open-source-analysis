# xerrors/Yuxi

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/xerrors/Yuxi |
| local path | sources/xerrors__Yuxi |
| HEAD | 15c9281 |
| stars/forks | 5623 / 809 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T16:40:32Z |
| trendScore / priorityScore | 189 / 516 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | AGENTS.md, README.md, CLAUDE.md |
| Cloud native / infrastructure | 319 | AGENTS.md, README.md, CLAUDE.md |
| MCP / agent interoperability | 259 | README.md, backend/package/pyproject.toml, docs/agents/agents-config.md |
| Frontend / app framework | 171 | AGENTS.md, README.md, CLAUDE.md |
| Database / data infrastructure | 167 | README.md, docker-compose.yml, Makefile |
| RAG / retrieval / knowledge | 73 | AGENTS.md, README.md, CLAUDE.md |
| Observability / evaluation | 67 | AGENTS.md, CLAUDE.md, backend/package/pyproject.toml |
| Security / supply chain | 48 | docs/pnpm-lock.yaml, backend/test/integration/api/test_user_agent_env_router.py, backend/test/integration/api/test_viewer_filesystem_security.py |
| Developer tools / DX | 37 | docker-compose.yml, web/package.json, backend/package/pyproject.toml |
| Coding agent / software automation | 30 | docs/agents/sandbox-architecture.md, docs/.vitepress/theme/components/YuxiHome.vue, docs/develop-guides/design.md |
| Data / ML platform | 22 | backend/pyproject.toml, backend/package/pyproject.toml, docs/intro/evaluation.md |
| Local LLM / inference | 9 | docker-compose.yml, docs/advanced/misc.md, docs/develop-guides/changelog.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 640 |
| manifests | 13 |
| docs | 48 |
| tests | 116 |
| ci/ops | 6 |
| spec artifacts | 6 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Linux/macOS | 简介 / 技术栈 / 快速开始 / Linux/macOS / Windows PowerShell / 致谢 / 参与贡献 / Star History / 📄 许可证 | <div align="center" <h1 语析 Yuxi</h1 <p <strong 多租户 Harness + 企业知识库</strong <br/ 让企业知识可被智能体检索、推理与交付</p ! https //img.shields.io/badge/Docker 2496ED?style=flat&logo=docker&logoColor=ffffff https //github.com/xerrors/Yuxi/blob/main/docker compose.yml ! https //img.shields.io/github/issues/xerrors/Yuxi?color=F48D73 https //github.com/xerrors/Yuxi/issues ! License https //img.shields.io/github/license/bitcookies/winrar keygen.svg?logo=github https //github.com/xerrors/Yuxi/blob/main/LICENSE ! DeepWiki https //img.shields.io/badge/DeepWiki blue.svg https //deepwiki.com/xerrors/Yuxi ! Bilibili https //img.shields.io/badge/知识库演示 00A1D6?logo=bilibili&logoColor=fff https //www.bilibili.com/video/BV1er |


## Key Files

### Manifests

- AGENTS.md
- README.md
- backend/package/README.md
- CLAUDE.md
- docs/package.json
- backend/pyproject.toml
- docker-compose.yml
- Makefile
- web/package.json
- backend/package/pyproject.toml
- docker/sandbox_provisioner/Dockerfile
- docker/sandbox_provisioner/requirements.txt
- docker-compose.prod.yml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- docker/sandbox_provisioner/requirements.txt
- docs/develop-guides/design.md
- docs/develop-guides/roadmap.md
- ARCHITECTURE.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| backend | 319 |
| web | 249 |
| docs | 33 |
| docker | 13 |
| .github | 8 |
| scripts | 5 |
| .dockerignore | 1 |
| .env.template | 1 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| ARCHITECTURE.md | 1 |
| CLAUDE.md | 1 |
| CONTRIBUTING.md | 1 |
| docker-compose.prod.yml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 299 |
| .vue | 130 |
| .js | 76 |
| .md | 41 |
| .svg | 27 |
| .css | 7 |
| [no-ext] | 7 |
| .less | 5 |
| .sh | 5 |
| .yml | 5 |
| .dockerfile | 4 |
| .txt | 4 |
| .yaml | 4 |
| .html | 3 |
| .json | 3 |
| .jsonl | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
