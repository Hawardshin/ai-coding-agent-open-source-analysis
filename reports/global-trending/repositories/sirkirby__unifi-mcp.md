# sirkirby/unifi-mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/sirkirby/unifi-mcp |
| local path | sources/sirkirby__unifi-mcp |
| HEAD | 43b8ea9 |
| stars/forks | 442 / 65 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T21:46:18Z |
| trendScore / priorityScore | 154 / 425 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | examples/README.md, docs/README.md, examples/python/README.md |
| Cloud native / infrastructure | 286 | docs/README.md, apps/api/docs/README.md, packages/unifi-mcp-relay/README.md |
| AI agent / orchestration | 129 | packages/unifi-mcp-relay/README.md, AGENTS.md, apps/worker/AGENTS.md |
| Developer tools / DX | 95 | examples/README.md, docs/README.md, examples/python/README.md |
| Security / supply chain | 91 | docs/README.md, AGENTS.md, apps/worker/AGENTS.md |
| Coding agent / software automation | 68 | apps/api/docs/README.md, AGENTS.md, README.md |
| Observability / evaluation | 30 | examples/python/README.md, AGENTS.md, apps/access/README.md |
| Database / data infrastructure | 11 | AGENTS.md, apps/worker/AGENTS.md, apps/api/README.md |
| Data / ML platform | 8 | AGENTS.md, apps/worker/AGENTS.md, .agents/skills/live-smoke-testing/SKILL.md |
| Frontend / app framework | 1 | AGENTS.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1112 |
| manifests | 40 |
| docs | 99 |
| tests | 364 |
| ci/ops | 31 |
| spec artifacts | 9 |
| agent instruction files | 8 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | UniFi MCP | UniFi MCP / Servers / Cloud Relay / REST + GraphQL API (non-MCP) / What is this? / MCP Discovery / Quick Start / Claude Code (recommended) / Codex / UniFi account requirements | UniFi MCP <p align="center" <img src="docs/assets/hero readme.jpg" alt="UniFi MCP — AI agents for your UniFi infrastructure" width="720" </p Leverage agents and agentic AI workflows to manage your UniFi deployment. ! PyPI Network https //img.shields.io/pypi/v/unifi network mcp https //pypi.org/project/unifi network mcp/ ! PyPI Protect https //img.shields.io/pypi/v/unifi protect mcp https //pypi.org/project/unifi protect mcp/ ! PyPI Access https //img.shields.io/pypi/v/unifi access mcp https //pypi.org/project/unifi access mcp/ ! PyPI Relay https //img.shields.io/pypi/v/unifi mcp relay https //pypi.org/project/unifi mcp relay/ ! PyPI API Server https //img.shields.io/pypi/v/unifi api server h |


## Key Files

### Manifests

- examples/README.md
- docs/README.md
- examples/python/README.md
- apps/api/docs/README.md
- packages/unifi-mcp-relay/README.md
- AGENTS.md
- apps/worker/AGENTS.md
- assets/README.md
- README.md
- apps/access/README.md
- apps/api/README.md
- apps/api/src/unifi_api/static/admin/README.md
- apps/network/README.md
- apps/network/scripts/README.md
- apps/protect/README.md
- apps/worker/README.md
- CLAUDE.md
- GEMINI.md
- packages/unifi-mcp-relay/Dockerfile
- packages/unifi-mcp-relay/pyproject.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- apps/worker/AGENTS.md
- CLAUDE.md
- GEMINI.md
- .cursor/hooks.json
- docs/ARCHITECTURE.md
- .cursor/skills/.gitignore
- .claude/.gitignore
- .claude/skills/.gitignore


### Agent Instruction Files

- AGENTS.md
- apps/worker/AGENTS.md
- CLAUDE.md
- GEMINI.md
- .cursor/hooks.json
- .cursor/skills/.gitignore
- .claude/.gitignore
- .claude/skills/.gitignore


## Top Directories

| dir | count |
| --- | --- |
| apps | 685 |
| packages | 256 |
| plugins | 51 |
| .github | 30 |
| docs | 15 |
| .agents | 12 |
| assets | 11 |
| scripts | 11 |
| examples | 7 |
| tests | 4 |
| .myco | 3 |
| .claude | 2 |
| .cursor | 2 |
| docker | 2 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 825 |
| .md | 89 |
| .yml | 32 |
| .html | 28 |
| .json | 28 |
| [no-ext] | 26 |
| .mjs | 19 |
| .svg | 12 |
| .sh | 11 |
| .toml | 11 |
| .ts | 11 |
| .ps1 | 6 |
| .yaml | 6 |
| .css | 2 |
| .js | 2 |
| .example | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
