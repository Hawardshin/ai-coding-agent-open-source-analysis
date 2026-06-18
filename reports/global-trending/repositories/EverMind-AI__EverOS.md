# EverMind-AI/EverOS

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/EverMind-AI/EverOS |
| local path | sources/EverMind-AI__EverOS |
| HEAD | dc02b2f |
| stars/forks | 7691 / 740 |
| language | Python |
| license |  |
| pushedAt | 2026-06-18T00:27:27Z |
| trendScore / priorityScore | 221 / 559 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 284 | README.md, tests/fixtures/README.md, use-cases/README.md |
| Observability / evaluation | 164 | README.md, src/everos/README.md, CLAUDE.md |
| RAG / retrieval / knowledge | 162 | README.md, src/everos/README.md, use-cases/claude-code-plugin/README.md |
| Database / data infrastructure | 138 | README.md, tests/fixtures/README.md, scripts/e2e_memorize/README.md |
| Developer tools / DX | 114 | README.md, use-cases/game-of-throne-demo/README.md, use-cases/README.md |
| Data / ML platform | 88 | tests/fixtures/README.md, use-cases/game-of-throne-demo/README.md, docs/how-memory-works.md |
| Frontend / app framework | 88 | README.md, use-cases/game-of-throne-demo/README.md, use-cases/README.md |
| Coding agent / software automation | 77 | README.md, use-cases/README.md, src/everos/README.md |
| Security / supply chain | 56 | use-cases/claude-code-plugin/README.md, Makefile, pyproject.toml |
| Cloud native / infrastructure | 32 | use-cases/claude-code-plugin/README.md, use-cases/openher/README.md, docs/api.md |
| MCP / agent interoperability | 6 | README.md, use-cases/README.md, docs/use-cases.md |
| Local LLM / inference | 4 | README.md, use-cases/openher/README.md, tests/unit/test_component/test_rerank/test_vllm_provider.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 654 |
| manifests | 21 |
| docs | 55 |
| tests | 233 |
| ci/ops | 5 |
| spec artifacts | 16 |
| agent instruction files | 15 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | or: pip install everos | EverOS 1.0.0 / EverOS: One Memory For All / How EverOS Is Different / Quick Start / 0. Prerequisites / 1. Install / or: pip install everos / 2. Configure / or, from a source checkout: / 3. Start EverOS | <div align="center" id="readme top" ! EverOS banner https //github.com/user attachments/assets/8e217d39 5d15 4c6c 9b54 3e83add4e0f2 <p align="center" <a href="https //x.com/evermind" <img src="https //img.shields.io/badge/EverMind 000000?labelColor=gray&style=for the badge&logo=x&logoColor=white" alt="X" </a <a href="https //huggingface.co/EverMind AI" <img src="https //img.shields.io/badge/🤗 HuggingFace EverMind F5C842?labelColor=gray&style=for the badge" alt="HuggingFace" </a <a href="https //discord.gg/gYep5nQRZJ" <img src="https //img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fdiscord.com%2Fapi%2Fv10%2Finvites%2FgYep5nQRZJ%3Fwith counts%3Dtrue&query=%24.approximate presence count&s |


## Key Files

### Manifests

- README.md
- tests/fixtures/README.md
- use-cases/game-of-throne-demo/README.md
- use-cases/README.md
- scripts/e2e_memorize/README.md
- src/everos/README.md
- use-cases/claude-code-plugin/README.md
- use-cases/openher/README.md
- CLAUDE.md
- use-cases/game-of-throne-demo/frontend/Dockerfile
- use-cases/game-of-throne-demo/frontend/package.json
- use-cases/game-of-throne-demo/frontend/tsconfig.json
- use-cases/game-of-throne-demo/frontend/vite.config.ts
- Makefile
- pyproject.toml
- use-cases/game-of-throne-demo/backend/Dockerfile
- use-cases/game-of-throne-demo/backend/package.json
- use-cases/game-of-throne-demo/backend/tsconfig.json
- use-cases/game-of-throne-demo/package.json
- use-cases/claude-code-plugin/package.json


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- docs/architecture.md
- .claude/rules/testing.md
- .claude/settings.json
- .claude/rules/architecture.md
- .claude/rules/async-programming.md
- .claude/rules/code-style.md
- .claude/rules/datetime-handling.md
- .claude/rules/imports.md
- .claude/rules/init-py-and-reexport.md
- .claude/rules/language-policy.md
- .claude/rules/logging-observability.md
- .claude/rules/module-docstring.md
- .claude/skills/commit/SKILL.md
- .claude/skills/new-branch/SKILL.md
- .claude/skills/pr/SKILL.md


### Agent Instruction Files

- CLAUDE.md
- .claude/rules/testing.md
- .claude/settings.json
- .claude/rules/architecture.md
- .claude/rules/async-programming.md
- .claude/rules/code-style.md
- .claude/rules/datetime-handling.md
- .claude/rules/imports.md
- .claude/rules/init-py-and-reexport.md
- .claude/rules/language-policy.md
- .claude/rules/logging-observability.md
- .claude/rules/module-docstring.md
- .claude/skills/commit/SKILL.md
- .claude/skills/new-branch/SKILL.md
- .claude/skills/pr/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| src | 257 |
| tests | 231 |
| use-cases | 89 |
| docs | 16 |
| .claude | 14 |
| scripts | 13 |
| .github | 11 |
| data | 4 |
| .env.example | 1 |
| .gitignore | 1 |
| .gitlint | 1 |
| .pre-commit-config.yaml | 1 |
| ACKNOWLEDGMENTS.md | 1 |
| CHANGELOG.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 481 |
| .md | 54 |
| .json | 28 |
| .ts | 18 |
| .js | 17 |
| [no-ext] | 12 |
| .tsx | 9 |
| .yml | 9 |
| .sh | 5 |
| .example | 4 |
| .toml | 4 |
| .html | 3 |
| .yaml | 3 |
| .cjs | 2 |
| .conf | 1 |
| .css | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
