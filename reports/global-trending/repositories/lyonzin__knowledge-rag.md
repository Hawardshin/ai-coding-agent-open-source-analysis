# lyonzin/knowledge-rag

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/lyonzin/knowledge-rag |
| local path | sources/lyonzin__knowledge-rag |
| HEAD | 56a2529 |
| stars/forks | 96 / 17 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:27:43Z |
| trendScore / priorityScore | 179 / 432 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 500 | npm/README.md, README.md, examples/mcp-config-single-instance.json |
| MCP / agent interoperability | 164 | npm/README.md, README.md, examples/mcp-config-single-instance.json |
| Security / supply chain | 145 | README.md, pyproject.toml, .github/workflows/security.yml |
| Observability / evaluation | 74 | README.md, bench/test_bench_memory.py, mcp_server/metrics.py |
| Cloud native / infrastructure | 51 | README.md, SECURITY.md, .github/workflows/release.yml |
| Coding agent / software automation | 48 | npm/README.md, README.md, Dockerfile |
| Frontend / app framework | 35 | README.md, mcp_server/config.py, presets/cybersecurity.yaml |
| Database / data infrastructure | 27 | README.md, requirements.txt, docs/single-instance.md |
| Developer tools / DX | 22 | npm/README.md, README.md, npm/package.json |
| Data / ML platform | 12 | README.md, SECURITY.md, bench/test_bench_indexing.py |
| AI agent / orchestration | 8 | README.md, docs/single-instance.md, bench/conftest.py |
| Local LLM / inference | 6 | README.md, requirements.txt, tests/test_config.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 103 |
| manifests | 6 |
| docs | 8 |
| tests | 41 |
| ci/ops | 7 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Knowledge RAG | Knowledge RAG / Your docs, your machine, zero cloud. Claude Code searches them natively. / Star History / What's New in v4.2.0 / Search Performance & Output Quality (v4.2.0) / Enterprise Concurrent Access — SSE/HTTP Transport (v4.0.0) / config.yaml / Quality Gate — 7-Pillar PR Validation / Critical Hotfix — No More Silent Zero-Vector Corruption (v3.8.1) / Lazy-Loaded Embeddings — Cheaper Idle Processes (v3.8.0) | Knowledge RAG <div align="center" ! PyPI https //img.shields.io/pypi/v/knowledge rag https //pypi.org/project/knowledge rag/ ! NPM https //img.shields.io/npm/v/knowledge rag https //www.npmjs.com/package/knowledge rag ! PyPI Downloads https //static.pepy.tech/personalized badge/knowledge rag?period=total&units=INTERNATIONAL SYSTEM&left color=BLACK&right color=GREEN&left text=downloads https //pepy.tech/projects/knowledge rag ! Python https //img.shields.io/badge/python 3.11%2B green.svg ! License https //img.shields.io/badge/license MIT yellow.svg ! Platform https //img.shields.io/badge/platform Windows%20%7C%20Linux%20%7C%20macOS lightgrey.svg ! GPU https //img.shields.io/badge/GPU NVIDIA%2 |


## Key Files

### Manifests

- npm/README.md
- README.md
- Dockerfile
- npm/package.json
- pyproject.toml
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| tests | 41 |
| .github | 16 |
| mcp_server | 9 |
| bench | 6 |
| scripts | 5 |
| npm | 4 |
| presets | 4 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CODEOWNERS | 1 |
| config.example.yaml | 1 |
| CONTRIBUTING.md | 1 |
| Dockerfile | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 46 |
| .yml | 12 |
| .md | 8 |
| .yaml | 8 |
| .json | 5 |
| [no-ext] | 5 |
| .txt | 4 |
| .js | 2 |
| .toml | 2 |
| .c | 1 |
| .cpp | 1 |
| .csv | 1 |
| .h | 1 |
| .ipynb | 1 |
| .jsx | 1 |
| .ps1 | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
