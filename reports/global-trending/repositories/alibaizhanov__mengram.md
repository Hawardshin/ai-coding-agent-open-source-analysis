# alibaizhanov/mengram

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/alibaizhanov/mengram |
| local path | sources/alibaizhanov__mengram |
| HEAD | 5a0c0e2 |
| stars/forks | 178 / 27 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T20:04:20Z |
| trendScore / priorityScore | 177 / 460 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 340 | examples/customer-support-agent/README.md, examples/devops-agent/README.md, examples/README.md |
| RAG / retrieval / knowledge | 206 | examples/devops-agent/README.md, examples/personal-assistant/README.md, README.md |
| Database / data infrastructure | 176 | README.md, integrations/claude-code-plugin/README.md, cloud/docker-compose.yml |
| Developer tools / DX | 112 | examples/README.md, obsidian-plugin/README.md, README.md |
| MCP / agent interoperability | 111 | obsidian-plugin/README.md, README.md, integrations/claude-code-plugin/README.md |
| Coding agent / software automation | 88 | obsidian-plugin/README.md, README.md, vscode-mengram/README.md |
| Security / supply chain | 66 | integrations/claude-code-plugin/README.md, cloud/async_client.py, cloud/client.py |
| Cloud native / infrastructure | 55 | cloud/docker-compose.yml, docker-compose.yml, examples/devops-agent/main.py |
| Observability / evaluation | 36 | benchmarks/locomo_bench.py, benchmarks/locomo_metrics.py, cloud/seed_demo.py |
| Local LLM / inference | 19 | examples/n8n/README.md, README.md, cli.py |
| Data / ML platform | 16 | integrations/claude-code-plugin/README.md, vscode-mengram/package.json, benchmarks/locomo_bench.py |
| Frontend / app framework | 16 | README.md, api/cloud_mcp_server.py, engine/vector/embedder.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 151 |
| manifests | 26 |
| docs | 19 |
| tests | 5 |
| ci/ops | 4 |
| spec artifacts | 5 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Add a conversation — auto-extracts facts, events, and workflows | Give your AI agents memory that actually learns / Install in one prompt (any AI tool) / Claude Code — Zero-Config Memory / Why Mengram? / Get Started in 30 Seconds / Add a conversation — auto-extracts facts, events, and workflows / Search across all 3 memory types at once / → {semantic: [...], episodic: [...], procedural: [...]} / Upload a PDF — auto-extracts memories using vision AI / → {"status": "accepted", "job_id": "job-...", "page_count": 12} | <div align="center" <picture <source media=" prefers color scheme dark " srcset="https //img.shields.io/badge/Mengram a855f7?style=for the badge&logo=data image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIj48cGF0aCBkPSJNNjAgMTYgUTkyIDE2IDk2IDQ4IFExMDAgNzggNzIgODggUTUwIDk2IDM4IDc2IFEyNiA1OCA0NiA0NiBRNjIgMzggNzAgNTIgUTc2IDY0IDYyIDY4IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iNjIiIGN5PSI2OCIgcj0iOCIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==" <img alt="Mengram" src="https //img.shields.io/badge/Mengram a855f7?style=for the badge&logo=data image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5 |


## Key Files

### Manifests

- examples/customer-support-agent/README.md
- examples/devops-agent/README.md
- examples/README.md
- examples/n8n/README.md
- examples/personal-assistant/README.md
- obsidian-plugin/README.md
- README.md
- vscode-mengram/README.md
- integrations/claude-code-plugin/README.md
- integrations/openclaw/README.md
- sdk/js/README.md
- sdk/langchain-mengram/README.md
- examples/customer-support-agent/requirements.txt
- examples/devops-agent/requirements.txt
- examples/personal-assistant/requirements.txt
- cloud/docker-compose.yml
- cloud/Dockerfile
- docker-compose.yml
- obsidian-plugin/package.json
- obsidian-plugin/tsconfig.json


### Spec / Docs / Prompt Artifacts

- examples/customer-support-agent/requirements.txt
- examples/devops-agent/requirements.txt
- examples/personal-assistant/requirements.txt
- requirements.txt
- ARCHITECTURE.md


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| cloud | 26 |
| vscode-mengram | 20 |
| engine | 16 |
| integrations | 16 |
| examples | 15 |
| obsidian-plugin | 12 |
| sdk | 11 |
| api | 4 |
| tests | 4 |
| blog | 3 |
| benchmarks | 2 |
| __init__.py | 1 |
| .claude-plugin | 1 |
| .dockerignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 51 |
| .md | 19 |
| .json | 15 |
| .ts | 13 |
| .html | 12 |
| [no-ext] | 10 |
| .sh | 6 |
| .txt | 5 |
| .js | 4 |
| .css | 3 |
| .example | 3 |
| .yml | 3 |
| .toml | 2 |
| .mjs | 1 |
| .selfhost | 1 |
| .sql | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
