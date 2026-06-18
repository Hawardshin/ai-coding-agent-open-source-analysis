# langchain-ai/langgraph

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/langchain-ai/langgraph |
| local path | sources/langchain-ai__langgraph |
| HEAD | d57a74f |
| stars/forks | 35062 / 5869 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T20:45:03Z |
| trendScore / priorityScore | 193 / 494 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/README.md, libs/cli/js-examples/README.md, libs/cli/README.md |
| Developer tools / DX | 259 | libs/cli/README.md, AGENTS.md, libs/sdk-js/README.md |
| Database / data infrastructure | 150 | AGENTS.md, libs/checkpoint-conformance/README.md, libs/checkpoint-postgres/README.md |
| Cloud native / infrastructure | 69 | libs/cli/README.md, libs/cli/pyproject.toml, libs/checkpoint-postgres/Makefile |
| RAG / retrieval / knowledge | 31 | libs/cli/js-examples/README.md, libs/langgraph/README.md, docs/llms.txt |
| Observability / evaluation | 23 | libs/cli/js-examples/README.md, README.md, libs/langgraph/README.md |
| Frontend / app framework | 13 | libs/prebuilt/README.md, docs/redirects.json |
| Security / supply chain | 8 | libs/checkpoint-postgres/README.md, libs/checkpoint-sqlite/README.md, libs/checkpoint/README.md |
| MCP / agent interoperability | 7 | docs/redirects.json |
| Data / ML platform | 4 | examples/chatbot-simulation-evaluation/simulation_utils.py, .github/workflows/_test_release.yml, .github/workflows/_test.yml |
| Coding agent / software automation | 2 | libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/test_list.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 651 |
| manifests | 40 |
| docs | 22 |
| tests | 222 |
| ci/ops | 19 |
| spec artifacts | 19 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Why use LangGraph? / LangGraph ecosystem / Documentation / Additional resources / Acknowledgements | <div align="center" <a href="https //www.langchain.com/langgraph" <picture <source media=" prefers color scheme dark " srcset=".github/images/logo dark.svg" <source media=" prefers color scheme light " srcset=".github/images/logo light.svg" <img alt="LangGraph Logo" src=".github/images/logo dark.svg" width="50%" </picture </a </div <div align="center" <h3 Low level orchestration framework for building stateful agents.</h3 </div <div align="center" <a href="https //opensource.org/licenses/MIT" target=" blank" <img src="https //img.shields.io/pypi/l/langgraph" alt="PyPI License" </a <a href="https //pypistats.org/packages/langgraph" target=" blank" <img src="https //img.shields.io/pepy/dt/lang |


## Key Files

### Manifests

- examples/README.md
- libs/cli/js-examples/README.md
- libs/cli/README.md
- AGENTS.md
- README.md
- libs/checkpoint-conformance/README.md
- libs/checkpoint-postgres/README.md
- libs/checkpoint-sqlite/README.md
- libs/checkpoint/README.md
- libs/langgraph/README.md
- libs/prebuilt/README.md
- libs/sdk-js/README.md
- libs/sdk-py/README.md
- CLAUDE.md
- libs/cli/examples/graph_prerelease_reqs_fail/pyproject.toml
- libs/cli/examples/graph_prerelease_reqs/deps/additional_deps/pyproject.toml
- libs/cli/examples/graph_prerelease_reqs/deps/zuper_deps/pyproject.toml
- libs/cli/examples/graph_prerelease_reqs/pyproject.toml
- libs/cli/examples/graphs_reqs_a/requirements.txt
- libs/cli/examples/graphs_reqs_b/requirements.txt


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- libs/cli/examples/graphs_reqs_a/requirements.txt
- libs/cli/examples/graphs_reqs_b/requirements.txt
- libs/cli/examples/graphs_reqs_a/prompt.txt
- libs/cli/examples/graphs_reqs_b/prompt.txt
- libs/langgraph/tests/example_app/requirements.txt
- libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/__init__.py
- libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/_delta_fixtures.py
- libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/test_copy_thread.py
- libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/test_delete_for_runs.py
- libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/test_delete_thread.py
- libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/test_delta_channel_history.py
- libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/test_get_tuple.py
- libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/test_list.py
- libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/test_prune.py
- libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/test_put_writes.py
- libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/test_put.py
- libs/prebuilt/.claude/settings.local.json


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- libs/prebuilt/.claude/settings.local.json


## Top Directories

| dir | count |
| --- | --- |
| libs | 575 |
| examples | 37 |
| .github | 28 |
| docs | 4 |
| .gitignore | 1 |
| .markdownlint.json | 1 |
| AGENTS.md | 1 |
| CLAUDE.md | 1 |
| LICENSE | 1 |
| Makefile | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 446 |
| .ipynb | 35 |
| .json | 30 |
| .yml | 28 |
| [no-ext] | 27 |
| .toml | 21 |
| .md | 18 |
| .typed | 13 |
| .txt | 11 |
| .ts | 7 |
| .example | 5 |
| .ambr | 4 |
| .cjs | 2 |
| .svg | 2 |
| .js | 1 |
| .mts | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
