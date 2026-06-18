# MinishLab/semble

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/MinishLab/semble |
| local path | sources/MinishLab__semble |
| HEAD | eacbe43 |
| stars/forks | 5231 / 226 |
| language | Python |
| license |  |
| pushedAt | 2026-06-16T16:38:47Z |
| trendScore / priorityScore | 178 / 464 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 182 | README.md, src/semble/agents/claude.md, src/semble/agents/gemini.md |
| AI agent / orchestration | 144 | benchmarks/README.md, README.md, src/semble/agents/claude.md |
| Coding agent / software automation | 139 | benchmarks/README.md, README.md, src/semble/agents/claude.md |
| RAG / retrieval / knowledge | 127 | benchmarks/README.md, README.md, pyproject.toml |
| Observability / evaluation | 96 | benchmarks/README.md, README.md, pyproject.toml |
| Developer tools / DX | 68 | README.md, Makefile, pyproject.toml |
| Database / data infrastructure | 42 | benchmarks/README.md, src/semble/agents/claude.md, src/semble/agents/gemini.md |
| Data / ML platform | 28 | benchmarks/README.md, benchmarks/token_efficiency.py, benchmarks/annotations/axios.json |
| Cloud native / infrastructure | 25 | benchmarks/data.py, benchmarks/annotations/abseil-cpp.json, benchmarks/annotations/aeson.json |
| Security / supply chain | 15 | tests/test_mcp.py, benchmarks/annotations/alamofire.json, benchmarks/annotations/fastapi.json |
| Local LLM / inference | 7 | benchmarks/README.md, benchmarks/baselines/grepai.py |
| Frontend / app framework | 4 | src/semble/index/files.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 159 |
| manifests | 4 |
| docs | 15 |
| tests | 15 |
| ci/ops | 2 |
| spec artifacts | 2 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Search a local repo (index is built and cached automatically) | Quickstart / Main Features / CLI / Search a local repo (index is built and cached automatically) / Search a remote repo (cloned on demand) / Limit results / Search docs/config/everything instead of just code / Find code similar to a known location / .sembleignore / .sembleignore | <h2 align="center" <img width="30%" alt="semble logo" src="https //raw.githubusercontent.com/MinishLab/semble/main/assets/images/semble logo.png" <br/ Fast and Accurate Code Search for Agents<br/ <sub Uses ~98% fewer tokens than grep+read</sub </h2 <div align="center" <h2 <a href="https //pypi.org/project/semble/" <img src="https //img.shields.io/pypi/v/semble?color=%23007ec6&label=pypi%20package" alt="Package version" </a <a href="https //app.codecov.io/gh/MinishLab/semble" <img src="https //codecov.io/gh/MinishLab/semble/graph/badge.svg?token=SZKRFKPPCG" alt="Codecov" </a <a href="https //github.com/MinishLab/semble/blob/main/LICENSE" <img src="https //img.shields.io/badge/license MIT gree |


## Key Files

### Manifests

- benchmarks/README.md
- README.md
- Makefile
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- src/semble/agents/claude.md
- src/semble/agents/gemini.md


### Agent Instruction Files

- src/semble/agents/claude.md
- src/semble/agents/gemini.md
- src/semble/agents/copilot.md


## Top Directories

| dir | count |
| --- | --- |
| benchmarks | 91 |
| src | 40 |
| tests | 15 |
| .github | 3 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| CITATION.cff | 1 |
| CONTRIBUTING.md | 1 |
| docs | 1 |
| LICENSE | 1 |
| Makefile | 1 |
| MANIFEST.in | 1 |
| pyproject.toml | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .json | 73 |
| .py | 60 |
| .md | 15 |
| [no-ext] | 4 |
| .yaml | 3 |
| .cff | 1 |
| .in | 1 |
| .toml | 1 |
| .typed | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
