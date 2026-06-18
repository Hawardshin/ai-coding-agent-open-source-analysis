# Filippo-Venturini/ctxvault

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Filippo-Venturini/ctxvault |
| local path | sources/Filippo-Venturini__ctxvault |
| HEAD | 48cf603 |
| stars/forks | 58 / 9 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T08:16:38Z |
| trendScore / priorityScore | 141 / 391 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 339 | examples/01-simple-rag/README.md, examples/02-multi-agent-isolation/README.md, examples/03-persistent-memory/README.md |
| RAG / retrieval / knowledge | 311 | examples/01-simple-rag/README.md, examples/02-multi-agent-isolation/README.md, examples/03-persistent-memory/README.md |
| Data / ML platform | 117 | examples/01-simple-rag/README.md, examples/05-procedural-memory-agent/README.md, benchmarks/README.md |
| MCP / agent interoperability | 54 | examples/05-procedural-memory-agent/README.md, README.md, examples/05-procedural-memory-agent/requirements.txt |
| Observability / evaluation | 46 | benchmarks/README.md, README.md, examples/02-multi-agent-isolation/.ctxvault/vaults/atlas-vault/quarterly_results.txt |
| Developer tools / DX | 29 | examples/02-multi-agent-isolation/README.md, examples/03-persistent-memory/README.md, README.md |
| Security / supply chain | 28 | examples/05-procedural-memory-agent/README.md, README.md, examples/01-simple-rag/.ctxvault/vaults/personal-vault/blog_article.txt |
| Database / data infrastructure | 13 | examples/01-simple-rag/.ctxvault/vaults/personal-vault/blog_article.txt, examples/01-simple-rag/.ctxvault/vaults/personal-vault/personal_notes.md, pyproject.toml |
| Coding agent / software automation | 7 | README.md, examples/01-simple-rag/.ctxvault/vaults/personal-vault/personal_notes.md, docs/styles.css |
| Cloud native / infrastructure | 4 | tests/conftest.py, tests/test_api.py |
| Frontend / app framework | 3 | examples/05-procedural-memory-agent/.ctxvault/vaults/company-knowledge/team-structure.md |
| Local LLM / inference | 2 | examples/01-simple-rag/README.md, README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 152 |
| manifests | 15 |
| docs | 30 |
| tests | 4 |
| ci/ops | 2 |
| spec artifacts | 7 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Inspect what your agent has written in the vault | What is CtxVault? / Core Principles / Typed memory: semantic and procedural / Structural isolation and access control / Persistent memory across sessions / Observable and human-controllable / Inspect what your agent has written in the vault / Query its knowledge base directly / Add your own documents and index them / Local-first | <div align="center" <picture <source media=" prefers color scheme dark " srcset="https //raw.githubusercontent.com/Filippo Venturini/ctxvault/main/assets/logo white text.svg" width="400" height="100" <source media=" prefers color scheme light " srcset="https //raw.githubusercontent.com/Filippo Venturini/ctxvault/main/assets/logo black text.svg" width="400" height="100" <img alt="Logo" src="https //raw.githubusercontent.com/Filippo Venturini/ctxvault/main/assets/logo black text.svg" width="400" height="100" </picture <h3 Local memory infrastructure for AI agents</h3 <p <i Isolated vaults. Typed memory. Agent autonomous. Human observable.</i </p ! License MIT https //img.shields.io/badge/Licen |


## Key Files

### Manifests

- examples/01-simple-rag/README.md
- examples/02-multi-agent-isolation/README.md
- examples/03-persistent-memory/README.md
- examples/05-procedural-memory-agent/README.md
- examples/04-composed-topology/README.md
- benchmarks/README.md
- README.md
- examples/01-simple-rag/requirements.txt
- examples/02-multi-agent-isolation/requirements.txt
- examples/03-persistent-memory/requirements.txt
- examples/05-procedural-memory-agent/requirements.txt
- examples/04-composed-topology/requirements.txt
- benchmarks/retrieval/requirements.txt
- pyproject.toml
- requirements.txt


### Spec / Docs / Prompt Artifacts

- examples/01-simple-rag/requirements.txt
- examples/02-multi-agent-isolation/requirements.txt
- examples/03-persistent-memory/requirements.txt
- examples/05-procedural-memory-agent/requirements.txt
- examples/04-composed-topology/requirements.txt
- benchmarks/retrieval/requirements.txt
- requirements.txt


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| benchmarks | 50 |
| examples | 40 |
| src | 33 |
| docs | 9 |
| assets | 6 |
| tests | 4 |
| .github | 2 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| .python-version | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .txt | 51 |
| .py | 50 |
| .md | 21 |
| .svg | 12 |
| .json | 7 |
| [no-ext] | 3 |
| .yml | 2 |
| .css | 1 |
| .docx | 1 |
| .html | 1 |
| .js | 1 |
| .toml | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
