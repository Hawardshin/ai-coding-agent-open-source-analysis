# bytedance/deer-flow

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/bytedance/deer-flow |
| local path | sources/bytedance__deer-flow |
| HEAD | 0bbbbc0 |
| stars/forks | 71423 / 9685 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T23:36:35Z |
| trendScore / priorityScore | 202 / 544 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | frontend/README.md, frontend/AGENTS.md, frontend/CLAUDE.md |
| Cloud native / infrastructure | 500 | frontend/README.md, backend/docs/README.md, frontend/CLAUDE.md |
| Frontend / app framework | 314 | frontend/README.md, frontend/AGENTS.md, frontend/CLAUDE.md |
| MCP / agent interoperability | 197 | frontend/README.md, frontend/AGENTS.md, frontend/CLAUDE.md |
| Security / supply chain | 169 | backend/README.md, README.md, docker/provisioner/README.md |
| Coding agent / software automation | 91 | frontend/CLAUDE.md, README.md, backend/CLAUDE.md |
| Developer tools / DX | 81 | frontend/README.md, frontend/AGENTS.md, frontend/CLAUDE.md |
| Observability / evaluation | 78 | backend/README.md, README.md, docker/provisioner/README.md |
| Database / data infrastructure | 32 | README.md, backend/CLAUDE.md, backend/Dockerfile |
| Local LLM / inference | 15 | README.md, backend/CLAUDE.md, backend/packages/harness/pyproject.toml |
| Data / ML platform | 6 | backend/docs/MEMORY_IMPROVEMENTS.md, backend/tests/test_client_e2e.py, backend/tests/test_deferred_tool_promotion_real_llm.py |
| RAG / retrieval / knowledge | 5 | backend/docs/MEMORY_IMPROVEMENTS_SUMMARY.md, backend/docs/MEMORY_IMPROVEMENTS.md, backend/tests/test_lead_agent_prompt.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1292 |
| manifests | 23 |
| docs | 211 |
| tests | 321 |
| ci/ops | 16 |
| spec artifacts | 10 |
| agent instruction files | 5 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | 🦌 DeerFlow - 2.0 | 🦌 DeerFlow - 2.0 / Official Website / Coding Plan from ByteDance Volcengine / InfoQuest / Table of Contents / One-Line Agent Setup / Quick Start / Configuration / Running the Application / One-step (build + start) | 🦌 DeerFlow 2.0 English 中文 ./README zh.md 日本語 ./README ja.md Français ./README fr.md Русский ./README ru.md ! Python https //img.shields.io/badge/Python 3.12%2B 3776AB?logo=python&logoColor=white ./backend/pyproject.toml ! Node.js https //img.shields.io/badge/Node.js 22%2B 339933?logo=node.js&logoColor=white ./Makefile ! License MIT https //img.shields.io/badge/License MIT yellow.svg ./LICENSE <a href="https //trendshift.io/repositories/14699" target=" blank" <img src="https //trendshift.io/api/badge/repositories/14699" alt="bytedance%2Fdeer flow Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a On February 28th, 2026, DeerFlow claimed the 🏆 1 spot on GitHub Trendin |


## Key Files

### Manifests

- frontend/README.md
- backend/docs/README.md
- backend/AGENTS.md
- frontend/AGENTS.md
- frontend/CLAUDE.md
- backend/README.md
- README.md
- docker/provisioner/README.md
- backend/CLAUDE.md
- frontend/Dockerfile
- frontend/Makefile
- frontend/next.config.js
- frontend/package.json
- frontend/tsconfig.json
- backend/Dockerfile
- backend/Makefile
- backend/pyproject.toml
- docker/docker-compose.yaml
- Makefile
- backend/packages/harness/pyproject.toml


### Spec / Docs / Prompt Artifacts

- backend/AGENTS.md
- frontend/AGENTS.md
- frontend/CLAUDE.md
- backend/CLAUDE.md
- .github/copilot-instructions.md
- docs/superpowers/specs/2026-04-11-runjournal-history-evaluation.md
- docs/superpowers/specs/2026-04-11-summarize-marker-design.md
- docs/superpowers/specs/2026-06-08-minimax-generation-providers-design.md
- docs/superpowers/specs/2026-06-12-telegram-streaming-design.md
- backend/docs/ARCHITECTURE.md


### Agent Instruction Files

- backend/AGENTS.md
- frontend/AGENTS.md
- frontend/CLAUDE.md
- backend/CLAUDE.md
- .github/copilot-instructions.md


## Top Directories

| dir | count |
| --- | --- |
| backend | 612 |
| frontend | 478 |
| skills | 91 |
| scripts | 33 |
| .agent | 17 |
| .github | 15 |
| docs | 11 |
| docker | 10 |
| tests | 5 |
| .dockerignore | 1 |
| .env.example | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 610 |
| .ts | 184 |
| .tsx | 162 |
| .md | 138 |
| .mdx | 70 |
| .json | 24 |
| .sh | 22 |
| [no-ext] | 17 |
| .yml | 12 |
| .js | 11 |
| .html | 9 |
| .yaml | 9 |
| .css | 7 |
| .toml | 3 |
| .txt | 3 |
| .conf | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
