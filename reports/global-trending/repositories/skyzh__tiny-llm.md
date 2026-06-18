# skyzh/tiny-llm

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/skyzh/tiny-llm |
| local path | sources/skyzh__tiny-llm |
| HEAD | efb0c89 |
| stars/forks | 4288 / 333 |
| language | Python |
| license |  |
| pushedAt | 2026-06-13T19:14:56Z |
| trendScore / priorityScore | 139 / 375 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Local LLM / inference | 226 | README.md, pyproject.toml, src/tiny_llm_ref/sampler.py |
| Data / ML platform | 101 | README.md, src/tiny_llm_ref/batch.py, src/tiny_llm_ref/generate.py |
| RAG / retrieval / knowledge | 64 | README.md, src/tiny_llm_ref/__init__.py, src/tiny_llm_ref/embedding.py |
| Observability / evaluation | 40 | pyproject.toml, src/tiny_llm_ref/batch.py, src/tiny_llm_ref/generate.py |
| Developer tools / DX | 7 | .github/workflows/macos.yml, book/sitemap.sh, book/src/setup.md |
| AI agent / orchestration | 6 | AGENTS.md, README.md, book/src/week3-overview.md |
| Coding agent / software automation | 5 | README.md, book/src/preface.md, book/src/setup.md |
| MCP / agent interoperability | 2 | AGENTS.md |
| Cloud native / infrastructure | 1 | batch-main.py |
| Database / data infrastructure | 1 | book/src/preface.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontendStack, infra, llm-app, llmFramework, local-llm, mcp, observability, rag |
| stacks | Python, C/C++ |
| capabilities | LLM/app framework, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 125 |
| manifests | 3 |
| docs | 24 |
| tests | 3 |
| ci/ops | 3 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | tiny-llm - LLM Serving in a Week | tiny-llm - LLM Serving in a Week / Book / Community / Roadmap / Star History | tiny llm LLM Serving in a Week ! CI main https //github.com/skyzh/tiny llm/actions/workflows/main.yml/badge.svg https //github.com/skyzh/tiny llm/actions/workflows/main.yml A course on LLM serving using MLX for system engineers. The codebase is solely almost! based on MLX array/matrix APIs without any high level neural network APIs, so that we can build the model serving infrastructure from scratch and dig into the optimizations. The goal is to learn the techniques behind efficiently serving a large language model e.g., Qwen3 models . In week 1, you will implement the necessary components in Python only Python! to use the Qwen3 model to generate responses e.g., attention, RoPE, etc . In week |


## Key Files

### Manifests

- AGENTS.md
- README.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| src | 58 |
| book | 29 |
| tests_refsol | 16 |
| .github | 3 |
| scripts | 3 |
| tests | 3 |
| benches | 2 |
| .clang-format | 1 |
| .cspell.json | 1 |
| .gitignore | 1 |
| .vscode | 1 |
| AGENTS.md | 1 |
| batch-main.py | 1 |
| bench.py | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 65 |
| .md | 24 |
| .cpp | 8 |
| [no-ext] | 7 |
| .metal | 4 |
| .h | 3 |
| .txt | 3 |
| .yml | 3 |
| .json | 2 |
| .toml | 2 |
| ._ | 1 |
| .sh | 1 |
| .svg | 1 |
| .xml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
