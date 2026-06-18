# Fergana-Labs/stash

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Fergana-Labs/stash |
| local path | sources/Fergana-Labs__stash |
| HEAD | 8edb7e8 |
| stars/forks | 94 / 22 |
| language | Python |
| license |  |
| pushedAt | 2026-06-18T00:23:58Z |
| trendScore / priorityScore | 161 / 456 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 256 | powerpoint-mcp/README.md, plugins/codex-plugin/AGENTS.md, plugins/opencode-plugin/AGENTS.md |
| Coding agent / software automation | 248 | README.md, www/README.md, plugins/claude-plugin/README.md |
| Developer tools / DX | 203 | frontend/README.md, plugins/codex-plugin/AGENTS.md, plugins/opencode-plugin/AGENTS.md |
| Security / supply chain | 203 | README.md, www/README.md, docker-compose.yml |
| Frontend / app framework | 188 | frontend/README.md, www/README.md, CLAUDE.md |
| MCP / agent interoperability | 128 | powerpoint-mcp/README.md, README.md, plugins/codex-plugin/README.md |
| Database / data infrastructure | 79 | README.md, plugins/claude-plugin/README.md, plugins/codex-plugin/README.md |
| Cloud native / infrastructure | 52 | powerpoint-mcp/README.md, README.md, plugins/openclaw-plugin/README.md |
| RAG / retrieval / knowledge | 21 | README.md, plugins/codex-plugin/README.md, plugins/cursor-plugin/README.md |
| Data / ML platform | 3 | backend/exports/native/README.md, backend/tests/test_file_security.py |
| Observability / evaluation | 2 | docs/security-operations.md, docs/security-readiness.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 996 |
| manifests | 40 |
| docs | 47 |
| tests | 176 |
| ci/ops | 11 |
| spec artifacts | 17 |
| agent instruction files | 7 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Set PUBLIC_URL and CORS_ORIGINS in .env, then replace app.example.com in Caddyfile. | How it works / Why shared beats individual / Quick Start / Integrations / CLI Reference / Self-Hosted / Set PUBLIC_URL and CORS_ORIGINS in .env, then replace app.example.com in Caddyfile. / Privacy / FAQ / Contributing | <p align="center" <a href="https //joinstash.ai" <img src="docs/assets/logo.svg" alt="Stash" width="320" / </a </p <h3 align="center" Knowledge bases for the agent era.</h3 <p align="center" The one place your agents connect to all your data — GitHub, Drive, Gmail, <br Notion, Slack and more — plus an agent native Drive in Markdown and HTML <br where their sessions, files, and pages all land. </p <p align="center" <a href="https //github.com/Fergana Labs/stash/actions/workflows/test.yml" <img src="https //github.com/Fergana Labs/stash/actions/workflows/test.yml/badge.svg?branch=main" alt="CI" / </a <a href="LICENSE" <img src="https //img.shields.io/badge/License MIT yellow.svg" alt="License |


## Key Files

### Manifests

- frontend/README.md
- powerpoint-mcp/README.md
- plugins/codex-plugin/AGENTS.md
- plugins/opencode-plugin/AGENTS.md
- stashai/plugin/assets/codex/AGENTS.md
- stashai/plugin/assets/opencode/AGENTS.md
- chrome_extension/README.md
- README.md
- www/README.md
- backend/exports/native/README.md
- plugins/claude-plugin/README.md
- plugins/codex-plugin/README.md
- plugins/cursor-plugin/README.md
- plugins/gemini-plugin/README.md
- plugins/openclaw-plugin/README.md
- plugins/opencode-plugin/README.md
- stashai/plugin/assets/codex/README.md
- stashai/plugin/assets/cursor/README.md
- stashai/plugin/assets/opencode/README.md
- CLAUDE.md


### Spec / Docs / Prompt Artifacts

- plugins/codex-plugin/AGENTS.md
- plugins/opencode-plugin/AGENTS.md
- stashai/plugin/assets/codex/AGENTS.md
- stashai/plugin/assets/opencode/AGENTS.md
- CLAUDE.md
- plugins/claude-plugin/CLAUDE.md
- plugins/gemini-plugin/GEMINI.md
- powerpoint-mcp/requirements.txt
- backend/requirements.txt
- plugins/tests/fixtures/claude/prompt.json
- plugins/tests/fixtures/codex/prompt.json
- plugins/tests/fixtures/cursor/prompt.json
- plugins/tests/fixtures/gemini/prompt.json
- plugins/tests/fixtures/openclaw/prompt.json
- plugins/tests/fixtures/opencode/prompt.json
- ARCHITECTURE.md
- www/DESIGN.md


### Agent Instruction Files

- plugins/codex-plugin/AGENTS.md
- plugins/opencode-plugin/AGENTS.md
- stashai/plugin/assets/codex/AGENTS.md
- stashai/plugin/assets/opencode/AGENTS.md
- CLAUDE.md
- plugins/claude-plugin/CLAUDE.md
- plugins/gemini-plugin/GEMINI.md


## Top Directories

| dir | count |
| --- | --- |
| backend | 386 |
| frontend | 236 |
| www | 107 |
| plugins | 102 |
| stashai | 50 |
| cli | 31 |
| chrome_extension | 13 |
| powerpoint-mcp | 13 |
| docs | 9 |
| .github | 7 |
| collab | 6 |
| scripts | 4 |
| sdk | 4 |
| .claude-plugin | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 503 |
| .tsx | 213 |
| .ts | 90 |
| .json | 50 |
| .md | 35 |
| [no-ext] | 19 |
| .svg | 16 |
| .jsx | 13 |
| .sh | 11 |
| .yml | 9 |
| .html | 8 |
| .txt | 5 |
| .mjs | 4 |
| .css | 3 |
| .ini | 3 |
| .toml | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
