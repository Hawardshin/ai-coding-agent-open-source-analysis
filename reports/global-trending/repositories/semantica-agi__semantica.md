# semantica-agi/semantica

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/semantica-agi/semantica |
| local path | sources/semantica-agi__semantica |
| HEAD | 0765cfe |
| stars/forks | 1225 / 185 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T20:22:24Z |
| trendScore / priorityScore | 154 / 487 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 500 | mcp/README.md, explorer/README.md, README.md |
| Data / ML platform | 413 | mcp/README.md, README.md, docs/cli-setup.md |
| Database / data infrastructure | 240 | mcp/README.md, README.md, integrations/openclaw/README.md |
| MCP / agent interoperability | 205 | mcp/README.md, plugins/.cline-plugin/README.md, README.md |
| Security / supply chain | 185 | explorer/README.md, README.md, .github/workflows/security-scan.yml |
| AI agent / orchestration | 181 | plugins/.cline-plugin/README.md, README.md, integrations/openclaw/README.md |
| Coding agent / software automation | 106 | mcp/README.md, plugins/.cline-plugin/README.md, README.md |
| Developer tools / DX | 98 | explorer/README.md, README.md, plugins/.claude-plugin/README.md |
| Observability / evaluation | 89 | README.md, pyproject.toml, .github/workflows/benchmark.yml |
| Frontend / app framework | 63 | explorer/README.md, README.md, Dockerfile |
| Cloud native / infrastructure | 55 | explorer/README.md, README.md, integrations/openclaw/README.md |
| Local LLM / inference | 37 | README.md, pyproject.toml, docs/reference/embeddings.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 899 |
| manifests | 18 |
| docs | 132 |
| tests | 229 |
| ci/ops | 10 |
| spec artifacts | 7 |
| agent instruction files | 4 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Every agent decision becomes a queryable, auditable knowledge node | The Context & Accountability Layer for AI Systems / See It in Action / Quick Start / Every agent decision becomes a queryable, auditable knowledge node / Ask "why did this happen?" and get a real, structured answer / Python 3.11.9         pass / semantica 0.5.0       pass / faiss vector store    pass / Config file           pass    ~/.semantica/config.yaml / Architecture | <div align="center" <img src="Semantica Logo.png" alt="Semantica" width="420"/ The Context & Accountability Layer for AI Systems Auditable &nbsp;·&nbsp; Governed &nbsp;·&nbsp; Explainable &nbsp;·&nbsp; Production Ready ! PyPI https //img.shields.io/pypi/v/semantica.svg?style=flat square&color=0066CC https //pypi.org/project/semantica/ ! Total Downloads https //static.pepy.tech/badge/semantica?style=flat square https //pepy.tech/project/semantica ! Python 3.8+ https //img.shields.io/badge/python 3.8+ blue.svg?style=flat square https //www.python.org/ ! License MIT https //img.shields.io/badge/License MIT yellow.svg?style=flat square https //opensource.org/licenses/MIT ! CI https //img.shields |


## Key Files

### Manifests

- mcp/README.md
- plugins/.cline-plugin/README.md
- explorer/README.md
- README.md
- integrations/openclaw/README.md
- plugins/.claude-plugin/README.md
- plugins/.continue-plugin/README.md
- plugins/.openclaw-plugin/README.md
- plugins/.vscode-plugin/README.md
- plugins/.windsurf-plugin/README.md
- docker-compose.yml
- Dockerfile
- explorer/package.json
- explorer/tsconfig.json
- explorer/vite.config.ts
- pyproject.toml
- explorer/tsconfig.app.json
- explorer/tsconfig.node.json


### Spec / Docs / Prompt Artifacts

- .github/workflows/benchmark.yml
- docs/architecture.md
- .claude/init
- ARCHITECTURE.md
- .claude/skills/init
- .claude/skills/semantica/init
- .claude/skills/semantica/SKILL.md


### Agent Instruction Files

- .claude/init
- .claude/skills/init
- .claude/skills/semantica/init
- .claude/skills/semantica/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| semantica | 361 |
| tests | 227 |
| explorer | 93 |
| docs | 60 |
| cookbook | 43 |
| plugins | 43 |
| .github | 23 |
| mcp | 14 |
| integrations | 10 |
| .claude | 4 |
| examples | 3 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 592 |
| .md | 123 |
| .tsx | 42 |
| .ipynb | 37 |
| .ts | 33 |
| .json | 24 |
| .yml | 13 |
| .svg | 11 |
| [no-ext] | 8 |
| .css | 4 |
| .ttl | 3 |
| .yaml | 3 |
| .js | 2 |
| .html | 1 |
| .in | 1 |
| .mjs | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
