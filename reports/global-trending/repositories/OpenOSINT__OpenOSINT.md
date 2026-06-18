# OpenOSINT/OpenOSINT

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/OpenOSINT/OpenOSINT |
| local path | sources/OpenOSINT__OpenOSINT |
| HEAD | 7795746 |
| stars/forks | 688 / 111 |
| language | Python |
| license |  |
| pushedAt | 2026-06-16T10:37:48Z |
| trendScore / priorityScore | 160 / 452 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 360 | media/README.md, README.md, pyproject.toml |
| Security / supply chain | 277 | README.md, pyproject.toml, .github/workflows/publish-mcp-registry.yml |
| AI agent / orchestration | 270 | README.md, pyproject.toml, docs/blog/mcp-protocol-explained.html |
| Local LLM / inference | 195 | README.md, pyproject.toml, tests/test_cli_openai.py |
| Developer tools / DX | 184 | README.md, pyproject.toml, docs/blog/mcp-protocol-explained.html |
| Cloud native / infrastructure | 122 | README.md, docs/blog/osint-ai-agents.html, docs/blog/osint-cli-tools.html |
| Coding agent / software automation | 86 | media/README.md, README.md, docs/blog/mcp-protocol-explained.html |
| Database / data infrastructure | 48 | docs/sponsors.html, docs/style.css, docs/blog/breach-check-open-source.html |
| Data / ML platform | 25 | README.md, docs/blog/osint-ai-agents.html, docs/index.html |
| Observability / evaluation | 14 | docs/commercial-license.md, docs/blog/breach-check-open-source.html, docs/blog/claude-code-osint.html |
| RAG / retrieval / knowledge | 5 | docs/blog/mcp-protocol-explained.html, docs/blog/osint-cli-tools.html, docs/blog/email-osint-guide.html |
| Frontend / app framework | 3 | tests/test_web_server.py, openosint/web_server.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 164 |
| manifests | 6 |
| docs | 54 |
| tests | 15 |
| ci/ops | 4 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Install from PyPI (recommended) | Sponsors / OpenOSINT Cloud — Hosted IP & Domain Intelligence API / What is OpenOSINT? / Features / 🧠 From tools to method — AI OSINT Prompt Pack / Installation / Install from PyPI (recommended) / Or install from source / Quick Start / Interactive AI REPL (default) | mcp name io.github.OpenOSINT/openosint <div align="center" <img src="https //raw.githubusercontent.com/OpenOSINT/OpenOSINT/v2.19.1/docs/logo.svg" alt="OpenOSINT" width="200" / <h1 OpenOSINT</h1 <p <strong AI powered OSINT agent. Interactive REPL · CLI · MCP Server · Web UI</strong </p <p 18 tools. Works natively with <strong Claude Code</strong , <strong Claude Desktop</strong , and any MCP compatible client Cursor, Windsurf, … . Powered by Anthropic Claude, local Ollama, or any OpenAI compatible endpoint. For authorized security research only.</p <p New to OSINT? Start here → <a href="https //openosint.tech/learn" openosint.tech/learn</a </p </div <div align="center" ! Release https //img.s |


## Key Files

### Manifests

- media/README.md
- README.md
- media/screenshots/README.md
- docker-compose.yml
- Dockerfile
- pyproject.toml


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| docs | 39 |
| openosint | 36 |
| cloud | 16 |
| tests | 15 |
| media | 10 |
| .github | 8 |
| scripts | 8 |
| assets | 4 |
| legal | 3 |
| .do | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| .mcp | 1 |
| .python-version | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 70 |
| .html | 35 |
| .md | 16 |
| .yml | 8 |
| .tape | 6 |
| [no-ext] | 6 |
| .sh | 5 |
| .txt | 5 |
| .json | 3 |
| .mp4 | 2 |
| .css | 1 |
| .example | 1 |
| .mjs | 1 |
| .sql | 1 |
| .svg | 1 |
| .toml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
