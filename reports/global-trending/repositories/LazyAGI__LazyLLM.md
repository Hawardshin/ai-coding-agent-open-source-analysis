# LazyAGI/LazyLLM

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/LazyAGI/LazyLLM |
| local path | sources/LazyAGI__LazyLLM |
| HEAD | eed3b5c |
| stars/forks | 3842 / 393 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T08:27:04Z |
| trendScore / priorityScore | 160 / 494 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | docs/lazyllm-skill/scripts/README.md, README.md, examples/agent_with_mcp.py |
| RAG / retrieval / knowledge | 500 | examples/rag_with_parsing_service/README.md, docs/lazyllm-skill/scripts/README.md, README.md |
| Data / ML platform | 275 | docs/lazyllm-skill/scripts/README.md, README.md, examples/multimodal_agent.py |
| Observability / evaluation | 238 | examples/rag_with_parsing_service/README.md, README.md, pyproject.toml |
| MCP / agent interoperability | 99 | README.md, examples/agent_with_mcp.py, pyproject.toml |
| Database / data infrastructure | 96 | examples/rag_with_parsing_service/README.md, README.md, examples/chatbot_powermem_cli.py |
| Developer tools / DX | 69 | README.md, examples/rag_map_store_with_milvus_index.py, examples/rag_milvus_store.py |
| Local LLM / inference | 62 | lazyllm/cli/README.md, README.md, examples/rag_map_store_with_milvus_index.py |
| Security / supply chain | 36 | lazyllm/prompt_templates/prompts_actor/README.md, .github/PULL_REQUEST_TEMPLATE/README.md, lazyllm/docs/common.py |
| Cloud native / infrastructure | 33 | README.md, docs/lazyllm-skill/assets/basic/launcher.md, lazyllm/docs/common.py |
| Coding agent / software automation | 32 | .github/PULL_REQUEST_TEMPLATE/README.md, Makefile, docs/en/Cookbook/code_agent.md |
| Frontend / app framework | 8 | docs/zh/Cookbook/API_Interaction_Agent_demo.md, docs/en/Cookbook/code_agent.md, docs/en/Cookbook/flex_agent.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1038 |
| manifests | 16 |
| docs | 249 |
| tests | 171 |
| ci/ops | 4 |
| spec artifacts | 20 |
| agent instruction files | 13 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | LazyLLM: A  Low-code Development Tool For Building Multi-agent LLMs Applications. | LazyLLM: A  Low-code Development Tool For Building Multi-agent LLMs Applications. / What is LazyLLM? / Features / What can you build with Lazyllm / 3.1 ChatBots / set environment variable: LAZYLLM_OPENAI_API_KEY=xx / or you can make a config file(~/.lazyllm/config.json) and add openai_api_key=xx / Model will be downloaded automatically if you have an internet connection. / 3.2 Retrieval-Augmented Generation / 3.3 More Examples | <div align="center" <img src="https //raw.githubusercontent.com/LazyAGI/LazyLLM/main/docs/assets/LazyLLM logo.png" width="100%"/ </div LazyLLM A Low code Development Tool For Building Multi agent LLMs Applications. 中文 README.CN.md EN README.md ! CI https //github.com/LazyAGI/LazyLLM/actions/workflows/main.yml/badge.svg https //github.com/LazyAGI/LazyLLM/actions/workflows/main.yml ! License https //img.shields.io/badge/License Apache 2.0 yellow.svg https //opensource.org/license/apache 2 0 ! GitHub star chart https //img.shields.io/github/stars/LazyAGI/LazyLLM?style=flat square https //star history.com/ LazyAGI/LazyLLM ! https //dcbadge.vercel.app/api/server/cDSrRycuM6?compact=true&style=flat |


## Key Files

### Manifests

- examples/rag_with_parsing_service/README.md
- docs/lazyllm-skill/scripts/README.md
- lazyllm/cli/README.md
- lazyllm/prompt_templates/prompts_actor/README.md
- tests/README.md
- csrc/README.md
- README.md
- .github/PULL_REQUEST_TEMPLATE/README.md
- docs/requirements.txt
- lazyllm/components/finetune/alpaca-lora/requirements.txt
- tests/requirements.txt
- Makefile
- pyproject.toml
- requirements.txt
- tests/data_tests/requirements.txt
- lazyllm/components/auto/dependencies/requirements.py


### Spec / Docs / Prompt Artifacts

- docs/requirements.txt
- lazyllm/components/finetune/alpaca-lora/requirements.txt
- tests/requirements.txt
- requirements.txt
- tests/basic_tests/Prompt/test_few_shot_prompt_template.py
- tests/basic_tests/Prompt/test_prompt_template.py
- tests/basic_tests/Prompt/test_prompts_library.py
- tests/data_tests/requirements.txt
- docs/en/Best Practice/prompt.md
- docs/zh/Best Practice/prompt.md
- lazyllm/tools/data/prompts/__init__.py
- lazyllm/tools/data/prompts/agenticrag.py
- lazyllm/tools/data/prompts/base_prompt.py
- lazyllm/tools/data/prompts/domain_finetune.py
- lazyllm/tools/data/prompts/embedding_synthesis.py
- lazyllm/tools/data/prompts/kbcleaning.py
- lazyllm/tools/data/prompts/reranker_synthesis.py
- lazyllm/tools/data/prompts/text2qa.py
- lazyllm/tools/rag/prompts/__init__.py
- lazyllm/tools/rag/prompts/transform_prompt.py


### Agent Instruction Files

- tests/basic_tests/Prompt/test_few_shot_prompt_template.py
- tests/basic_tests/Prompt/test_prompt_template.py
- tests/basic_tests/Prompt/test_prompts_library.py
- lazyllm/tools/data/prompts/__init__.py
- lazyllm/tools/data/prompts/agenticrag.py
- lazyllm/tools/data/prompts/base_prompt.py
- lazyllm/tools/data/prompts/domain_finetune.py
- lazyllm/tools/data/prompts/embedding_synthesis.py
- lazyllm/tools/data/prompts/kbcleaning.py
- lazyllm/tools/data/prompts/reranker_synthesis.py
- lazyllm/tools/data/prompts/text2qa.py
- lazyllm/tools/rag/prompts/__init__.py
- lazyllm/tools/rag/prompts/transform_prompt.py


## Top Directories

| dir | count |
| --- | --- |
| lazyllm | 569 |
| docs | 204 |
| tests | 163 |
| csrc | 35 |
| examples | 30 |
| .github | 21 |
| scripts | 3 |
| .flake8 | 1 |
| .gitignore | 1 |
| .gitmodules | 1 |
| .readthedocs.yaml | 1 |
| CODE_OF_CONDUCT.cn.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| LICENSE | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 759 |
| .md | 176 |
| .cpp | 18 |
| .yml | 14 |
| .svg | 13 |
| .txt | 10 |
| .hpp | 8 |
| .json | 8 |
| [no-ext] | 7 |
| .yaml | 6 |
| .js | 5 |
| .sh | 4 |
| .cmake | 3 |
| .jinja | 3 |
| .css | 2 |
| .memory | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
