# langchain-ai/langchain

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/langchain-ai/langchain |
| local path | sources/langchain-ai__langchain |
| HEAD | 0392b6b |
| stars/forks | 139576 / 23129 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T21:17:17Z |
| trendScore / priorityScore | 238 / 532 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 71 | AGENTS.md, libs/README.md, README.md |
| Developer tools / DX | 62 | AGENTS.md, libs/model-profiles/README.md, libs/partners/openai/README.md |
| Observability / evaluation | 48 | AGENTS.md, README.md, libs/core/README.md |
| Security / supply chain | 43 | AGENTS.md, CLAUDE.md, libs/core/tests/unit_tests/prompts/test_chat.py |
| Local LLM / inference | 29 | AGENTS.md, libs/README.md, libs/partners/ollama/README.md |
| Cloud native / infrastructure | 19 | .devcontainer/README.md, libs/core/tests/unit_tests/prompts/test_loading.py, libs/core/langchain_core/prompts/prompt.py |
| MCP / agent interoperability | 15 | AGENTS.md, CLAUDE.md, .github/workflows/check_agents_sync.yml |
| Coding agent / software automation | 6 | AGENTS.md, libs/README.md, CLAUDE.md |
| Database / data infrastructure | 5 | libs/langchain_v1/Makefile, libs/langchain/pyproject.toml |
| RAG / retrieval / knowledge | 4 | AGENTS.md, README.md, CLAUDE.md |
| Data / ML platform | 1 | libs/core/langchain_core/prompts/structured.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2850 |
| manifests | 40 |
| docs | 29 |
| tests | 894 |
| ci/ops | 30 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | or | Quickstart / or / LangChain ecosystem / Why use LangChain? / Documentation / Additional resources | <div align="center" <a href="https //docs.langchain.com/oss/python/langchain/overview" <picture <source media=" prefers color scheme dark " srcset=".github/images/logo dark.svg" <source media=" prefers color scheme light " srcset=".github/images/logo light.svg" <img alt="LangChain Logo" src=".github/images/logo dark.svg" width="50%" </picture </a </div <div align="center" <h3 The agent engineering platform.</h3 </div <div align="center" <a href="https //opensource.org/licenses/MIT" target=" blank" <img src="https //img.shields.io/pypi/l/langchain" alt="PyPI License" </a <a href="https //pypistats.org/packages/langchain" target=" blank" <img src="https //img.shields.io/pepy/dt/langchain" alt= |


## Key Files

### Manifests

- AGENTS.md
- .devcontainer/README.md
- libs/README.md
- libs/standard-tests/README.md
- README.md
- libs/core/README.md
- libs/langchain_v1/README.md
- libs/langchain/README.md
- libs/model-profiles/README.md
- libs/partners/anthropic/README.md
- libs/partners/chroma/README.md
- libs/partners/deepseek/README.md
- libs/partners/exa/README.md
- libs/partners/fireworks/README.md
- libs/partners/groq/README.md
- libs/partners/huggingface/README.md
- libs/partners/mistralai/README.md
- libs/partners/nomic/README.md
- libs/partners/ollama/README.md
- libs/partners/openai/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- libs/core/tests/unit_tests/data/prompts/prompt_extra_args.json
- libs/core/tests/unit_tests/data/prompts/prompt_missing_args.json
- libs/core/tests/unit_tests/data/prompts/simple_prompt.json
- libs/core/tests/unit_tests/prompts/__init__.py
- libs/core/tests/unit_tests/prompts/__snapshots__/test_chat.ambr
- libs/core/tests/unit_tests/prompts/__snapshots__/test_prompt.ambr
- libs/core/tests/unit_tests/prompts/prompt_extra_args.json
- libs/core/tests/unit_tests/prompts/prompt_missing_args.json
- libs/core/tests/unit_tests/prompts/simple_prompt.json
- libs/core/tests/unit_tests/prompts/test_chat.py
- libs/core/tests/unit_tests/prompts/test_dict.py
- libs/core/tests/unit_tests/prompts/test_few_shot_with_templates.py
- libs/core/tests/unit_tests/prompts/test_few_shot.py
- libs/core/tests/unit_tests/prompts/test_image.py
- libs/core/tests/unit_tests/prompts/test_imports.py
- libs/core/tests/unit_tests/prompts/test_loading.py
- libs/core/tests/unit_tests/prompts/test_prompt.py
- libs/core/tests/unit_tests/prompts/test_string.py


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- libs/core/tests/unit_tests/data/prompts/prompt_extra_args.json
- libs/core/tests/unit_tests/data/prompts/prompt_missing_args.json
- libs/core/tests/unit_tests/data/prompts/simple_prompt.json
- libs/core/tests/unit_tests/prompts/__init__.py
- libs/core/tests/unit_tests/prompts/__snapshots__/test_chat.ambr
- libs/core/tests/unit_tests/prompts/__snapshots__/test_prompt.ambr
- libs/core/tests/unit_tests/prompts/prompt_extra_args.json
- libs/core/tests/unit_tests/prompts/prompt_missing_args.json
- libs/core/tests/unit_tests/prompts/simple_prompt.json
- libs/core/tests/unit_tests/prompts/test_chat.py
- libs/core/tests/unit_tests/prompts/test_dict.py
- libs/core/tests/unit_tests/prompts/test_few_shot_with_templates.py
- libs/core/tests/unit_tests/prompts/test_few_shot.py


## Top Directories

| dir | count |
| --- | --- |
| libs | 2786 |
| .github | 47 |
| .devcontainer | 3 |
| .vscode | 2 |
| .dockerignore | 1 |
| .editorconfig | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .markdownlint.json | 1 |
| .mcp.json | 1 |
| .pre-commit-config.yaml | 1 |
| AGENTS.md | 1 |
| CITATION.cff | 1 |
| CLAUDE.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 2520 |
| [no-ext] | 63 |
| .json | 47 |
| .yml | 38 |
| .toml | 29 |
| .md | 28 |
| .ambr | 26 |
| .sh | 20 |
| .typed | 20 |
| .txt | 18 |
| .yaml | 10 |
| .csv | 5 |
| .xslt | 3 |
| .gbnf | 2 |
| .html | 2 |
| .js | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
