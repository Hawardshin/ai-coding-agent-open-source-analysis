# stefanoamorelli/sec-edgar-mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/stefanoamorelli/sec-edgar-mcp |
| local path | sources/stefanoamorelli__sec-edgar-mcp |
| HEAD | c9726ad |
| stars/forks | 319 / 88 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T17:34:53Z |
| trendScore / priorityScore | 133 / 348 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 303 | evals/README.md, conda/README.md, README.md |
| Cloud native / infrastructure | 88 | README.md, Dockerfile, docs/setup/mcp-clients.mdx |
| Observability / evaluation | 56 | evals/README.md, README.md, evals/package.json |
| Security / supply chain | 29 | docs/introduction.mdx, sec_edgar_mcp/document_parser.py, SECURITY.md |
| Developer tools / DX | 17 | Dockerfile, pyproject.toml, docs/setup/mcp-clients.mdx |
| AI agent / orchestration | 15 | docs/setup/mcp-clients.mdx, docs/quickstart.mdx, sec_edgar_mcp/document_parser.py |
| Coding agent / software automation | 7 | docs/setup/mcp-clients.mdx, SECURITY.md |
| RAG / retrieval / knowledge | 6 | README.md, docs/introduction.mdx, evals/promptfooconfig.yaml |
| Database / data infrastructure | 4 | docs/concepts/sec-edgar.mdx, docs/tools/overview.mdx, conda/meta.yaml |
| Data / ML platform | 1 | docs/introduction.mdx |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 71 |
| manifests | 6 |
| docs | 23 |
| tests | 2 |
| ci/ops | 8 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | SEC EDGAR MCP | SEC EDGAR MCP / Quick Start / Tools / HTTP Transport / Evaluations / Documentation / Contributors / Citation / License | SEC EDGAR MCP <p align="center" <a href="https //pypi.org/project/sec edgar mcp/" <img alt="PyPI" src="https //img.shields.io/pypi/v/sec edgar mcp.svg" / </a <a href="https //anaconda.org/stefanoamorelli/sec edgar mcp" <img alt="Conda Version" src="https //img.shields.io/conda/vn/stefanoamorelli/sec edgar mcp.svg" / </a <img alt="Python 3.11+" src="https //img.shields.io/badge/python 3.11+ brightgreen.svg" / <img alt="License AGPL 3.0" src="https //img.shields.io/badge/license AGPL 3.0 blue.svg" / <a href="https //mseep.ai/app/0132880c 5e83 410b a1d5 d3df08ed7b5c" <img alt="Verified on MseeP" src="https //mseep.ai/badge.svg" / </a <a href="https //doi.org/10.5281/zenodo.17123166" <img alt="D |


## Key Files

### Manifests

- evals/README.md
- conda/README.md
- README.md
- evals/package.json
- Dockerfile
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- docs/concepts/architecture.mdx


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| sec_edgar_mcp | 19 |
| docs | 18 |
| .github | 8 |
| evals | 6 |
| conda | 5 |
| tests | 2 |
| .env.example | 1 |
| .gitignore | 1 |
| AUTHORS | 1 |
| CITATION.cff | 1 |
| CONTRIBUTORS | 1 |
| Dockerfile | 1 |
| LICENSE | 1 |
| mypy.ini | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 21 |
| .mdx | 17 |
| .yml | 8 |
| [no-ext] | 6 |
| .md | 5 |
| .json | 4 |
| .yaml | 3 |
| .bat | 2 |
| .cff | 1 |
| .example | 1 |
| .ini | 1 |
| .sh | 1 |
| .toml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
