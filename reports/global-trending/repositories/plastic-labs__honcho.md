# plastic-labs/honcho

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/plastic-labs/honcho |
| local path | sources/plastic-labs__honcho |
| HEAD | 99cbebe |
| stars/forks | 5239 / 637 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T20:55:10Z |
| trendScore / priorityScore | 190 / 514 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 332 | examples/crewai/python/README.md, honcho-cli/README.md, mcp/README.md |
| RAG / retrieval / knowledge | 289 | examples/crewai/python/README.md, honcho-cli/README.md, mcp/README.md |
| Developer tools / DX | 131 | docs/README.md, examples/crewai/python/README.md, honcho-cli/README.md |
| MCP / agent interoperability | 118 | mcp/README.md, README.md, mcp/package.json |
| Database / data infrastructure | 81 | README.md, tests/alembic/README.md, tests/bench/README.md |
| Cloud native / infrastructure | 70 | tests/live_llm/README.md, README.md, tests/bench/README.md |
| Security / supply chain | 64 | honcho-cli/README.md, mcp/README.md, README.md |
| Coding agent / software automation | 52 | honcho-cli/README.md, README.md, CLAUDE.md |
| Observability / evaluation | 29 | README.md, tests/bench/README.md, CLAUDE.md |
| Data / ML platform | 20 | README.md, tests/alembic/README.md, tests/bench/README.md |
| Frontend / app framework | 1 | docs/README.md |
| Local LLM / inference | 1 | docs/v3/contributing/changing-embeddings.mdx |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 827 |
| manifests | 32 |
| docs | 302 |
| tests | 224 |
| ci/ops | 9 |
| spec artifacts | 17 |
| agent instruction files | 13 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | or: uv add honcho-ai | Contents / Start Here / Why Honcho / The Honcho Loop / Quickstart / Python / or: uv add honcho-ai / or: poetry add honcho-ai / Managed service uses api.honcho.dev by default. For self-hosted, pass / base_url="http://localhost:8000" or set HONCHO_URL. | <! markdownlint disable MD033 <div align="center" <a href="https //app.honcho.dev" target=" blank" <img src="assets/honcho.svg" alt="Honcho" width="400" </a </div <! markdownlint enable MD033 ! Static Badge https //img.shields.io/badge/Server 3.0.9 blue ! PyPI version https //img.shields.io/pypi/v/honcho ai.svg https //pypi.org/project/honcho ai/ ! NPM version https //img.shields.io/npm/v/@honcho ai/sdk.svg https //npmjs.org/package/@honcho ai/sdk ! Discord https //img.shields.io/discord/1016845111637839922?style=flat&logo=discord&logoColor=23ffffff&label=Plastic%20Labs&labelColor=235865F2 https //discord.gg/honcho Honcho is memory infrastructure for building stateful agents that understand |


## Key Files

### Manifests

- docs/README.md
- examples/crewai/python/README.md
- examples/zo/README.md
- honcho-cli/README.md
- mcp/README.md
- tests/live_llm/README.md
- docs/v1/README.md
- docs/v2/README.md
- docs/v3/README.md
- README.md
- tests/alembic/README.md
- tests/bench/README.md
- tests/deriver/README.md
- tests/unified/README.md
- sdks/python/README.md
- sdks/typescript/README.md
- src/webhooks/README.md
- CLAUDE.md
- docs/package.json
- examples/crewai/python/pyproject.toml


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- docs/v1/getting-started/architecture.mdx
- docs/v2/documentation/core-concepts/architecture.mdx
- docs/v3/documentation/core-concepts/architecture.mdx
- .claude/skills/honcho-cli/SKILL.md
- .claude/skills/honcho-integration/references/bot-frameworks/nanobot/client.py
- .vscode/tasks.json
- .claude/skills/honcho-integration/references/bot-frameworks.md
- .claude/skills/honcho-integration/references/bot-frameworks/nanobot/honcho_tool.py
- .claude/skills/honcho-integration/references/bot-frameworks/nanobot/session.py
- .claude/skills/honcho-integration/SKILL.md
- .claude/skills/migrate-honcho-py/DETAILED-CHANGES.md
- .claude/skills/migrate-honcho-py/MIGRATION-CHECKLIST.md
- .claude/skills/migrate-honcho-py/SKILL.md
- .claude/skills/migrate-honcho-ts/DETAILED-CHANGES.md
- .claude/skills/migrate-honcho-ts/MIGRATION-CHECKLIST.md
- .claude/skills/migrate-honcho-ts/SKILL.md


### Agent Instruction Files

- CLAUDE.md
- .claude/skills/honcho-cli/SKILL.md
- .claude/skills/honcho-integration/references/bot-frameworks/nanobot/client.py
- .claude/skills/honcho-integration/references/bot-frameworks.md
- .claude/skills/honcho-integration/references/bot-frameworks/nanobot/honcho_tool.py
- .claude/skills/honcho-integration/references/bot-frameworks/nanobot/session.py
- .claude/skills/honcho-integration/SKILL.md
- .claude/skills/migrate-honcho-py/DETAILED-CHANGES.md
- .claude/skills/migrate-honcho-py/MIGRATION-CHECKLIST.md
- .claude/skills/migrate-honcho-py/SKILL.md
- .claude/skills/migrate-honcho-ts/DETAILED-CHANGES.md
- .claude/skills/migrate-honcho-ts/MIGRATION-CHECKLIST.md
- .claude/skills/migrate-honcho-ts/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| docs | 264 |
| tests | 201 |
| src | 121 |
| sdks | 76 |
| examples | 31 |
| migrations | 29 |
| honcho-cli | 24 |
| mcp | 16 |
| .github | 15 |
| scripts | 13 |
| .claude | 12 |
| .vscode | 3 |
| docker | 3 |
| .dockerignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 397 |
| .mdx | 245 |
| .json | 48 |
| .ts | 44 |
| .md | 42 |
| .svg | 11 |
| [no-ext] | 11 |
| .toml | 9 |
| .yml | 9 |
| .example | 3 |
| .code-workspace | 1 |
| .ini | 1 |
| .mako | 1 |
| .sh | 1 |
| .sql | 1 |
| .template | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
