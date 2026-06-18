# camel-ai/camel

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/camel-ai/camel |
| local path | sources/camel-ai__camel |
| HEAD | 51ae9bb |
| stars/forks | 17219 / 1951 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T07:53:19Z |
| trendScore / priorityScore | 151 / 457 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/usecases/aci_mcp/README.md, examples/usecases/airbnb_mcp/README.md, examples/usecases/cloudfare_mcp_camel/README.md |
| MCP / agent interoperability | 253 | examples/usecases/aci_mcp/README.md, examples/usecases/airbnb_mcp/README.md, examples/usecases/cloudfare_mcp_camel/README.md |
| Security / supply chain | 137 | examples/usecases/aci_mcp/README.md, examples/usecases/cloudfare_mcp_camel/README.md, README.md |
| Cloud native / infrastructure | 84 | examples/usecases/cloudfare_mcp_camel/README.md, examples/runtimes/ubuntu_docker_runtime/README.md, .container/README.md |
| Database / data infrastructure | 74 | examples/usecases/cloudfare_mcp_camel/README.md, examples/usecases/chat_with_youtube/README.md, docs/camel.storages.key_value_storages.rst |
| Observability / evaluation | 70 | camel/benchmarks/mock_website/README.md, README.md, docs/camel.prompts.rst |
| Data / ML platform | 48 | README.md, apps/data_explorer/README.md, examples/custom_client_usage.py |
| RAG / retrieval / knowledge | 44 | examples/usecases/multi_agent_research_assistant/README.md, examples/usecases/chat_with_youtube/README.md, examples/usecases/codeforces_question_solver/README.md |
| Developer tools / DX | 39 | examples/usecases/multi_agent_research_assistant/README.md, docs/README.md, docs/mintlify/scripts/docs_sync/README.md |
| Coding agent / software automation | 6 | README.md, services/README.md, examples/toolkits/mcp/mcp_search_toolkit.py |
| Local LLM / inference | 3 | examples/models/vllm_model_example.py, pyproject.toml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2046 |
| manifests | 40 |
| docs | 799 |
| tests | 295 |
| ci/ops | 19 |
| spec artifacts | 44 |
| agent instruction files | 27 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | CAMEL Framework Design Principles / Why Use CAMEL for Your Research? / What Can You Build With CAMEL? / 1. Data Generation / 2. Task Automation / 3. World Simulation / Quick Start / Starting with ChatAgent / Seeking Help / Tech Stack | <div align="center" <a href="https //www.camel ai.org/" <img src="docs/images/banner.png" alt="Banner" </a </div </br <div align="center" ! Documentation docs image docs url ! Discord discord image discord url ! X x image x url ! Reddit reddit image reddit url ! Wechat wechat image wechat url ! Hugging Face huggingface image huggingface url ! Star star image star url ! Package License package license image package license url ! PyPI Download package download image package download url ! join us image join us <a href="https //trendshift.io/repositories/649" target=" blank" <img src="https //trendshift.io/api/badge/repositories/649" alt="camel ai/camel Trendshift" style="width 250px; height 55 |


## Key Files

### Manifests

- examples/usecases/aci_mcp/README.md
- examples/usecases/airbnb_mcp/README.md
- examples/usecases/cloudfare_mcp_camel/README.md
- examples/usecases/multi_agent_research_assistant/README.md
- docs/README.md
- examples/runtimes/ubuntu_docker_runtime/README.md
- examples/usecases/chat_with_github/README.md
- examples/usecases/chat_with_youtube/README.md
- examples/usecases/codeforces_question_solver/README.md
- examples/usecases/mistral_OCR/README.md
- examples/usecases/pptx_toolkit_usecase/README.md
- examples/usecases/youtube_ocr/README.md
- docs/mintlify/scripts/docs_sync/README.md
- apps/agents/README.md
- camel/benchmarks/mock_website/README.md
- .container/README.md
- README.md
- services/README.md
- apps/data_explorer/README.md
- examples/usecases/airbnb_mcp/requirements.txt


### Spec / Docs / Prompt Artifacts

- docs/key_modules/agents.md
- examples/usecases/airbnb_mcp/requirements.txt
- examples/usecases/cloudfare_mcp_camel/requirements.txt
- examples/usecases/multi_agent_research_assistant/requirements.txt
- examples/usecases/chat_with_github/requirements.txt
- examples/usecases/chat_with_youtube/requirements.txt
- examples/usecases/codeforces_question_solver/requirements.txt
- examples/usecases/mistral_OCR/requirements.txt
- examples/usecases/pptx_toolkit_usecase/requirements.txt
- examples/usecases/youtube_ocr/requirements.txt
- camel/benchmarks/mock_website/requirements.txt
- test/prompts/test_ai_society.py
- test/prompts/test_code.py
- test/prompts/test_generate_text_embedding_data.py
- test/prompts/test_misalignment.py
- test/prompts/test_prompt_base.py
- test/prompts/test_prompt_templates.py
- test/prompts/test_role_description_prompt_template.py
- test/prompts/test_task_prompt_template.py
- test/prompts/test_translation.py


### Agent Instruction Files

- docs/key_modules/agents.md
- test/prompts/test_ai_society.py
- test/prompts/test_code.py
- test/prompts/test_generate_text_embedding_data.py
- test/prompts/test_misalignment.py
- test/prompts/test_prompt_base.py
- test/prompts/test_prompt_templates.py
- test/prompts/test_role_description_prompt_template.py
- test/prompts/test_task_prompt_template.py
- test/prompts/test_translation.py
- camel/prompts/__init__.py
- camel/prompts/ai_society.py
- camel/prompts/base.py
- camel/prompts/code.py
- camel/prompts/evaluation.py


## Top Directories

| dir | count |
| --- | --- |
| docs | 767 |
| camel | 529 |
| examples | 392 |
| test | 285 |
| .github | 19 |
| apps | 17 |
| .camel | 8 |
| .container | 5 |
| data | 4 |
| services | 4 |
| licenses | 2 |
| .env.example | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 1131 |
| .mdx | 524 |
| .md | 155 |
| .rst | 59 |
| .ipynb | 49 |
| .json | 26 |
| .yaml | 18 |
| .yml | 18 |
| .txt | 17 |
| [no-ext] | 9 |
| .ts | 8 |
| .pptx | 6 |
| .js | 5 |
| .example | 3 |
| .svg | 3 |
| .docx | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
