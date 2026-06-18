# griptape-ai/griptape

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/griptape-ai/griptape |
| local path | sources/griptape-ai__griptape |
| HEAD | fd03641 |
| stars/forks | 2541 / 237 |
| language | Python |
| license |  |
| pushedAt | 2026-06-16T20:13:39Z |
| trendScore / priorityScore | 148 / 422 |


## Interpretation

- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 316 | README.md, pyproject.toml, docs/griptape-framework/drivers/embedding-drivers.md |
| AI agent / orchestration | 190 | README.md, docs/griptape-framework/structures/agents.md, tests/unit/drivers/prompt/test_google_prompt_driver.py |
| Security / supply chain | 79 | docs/griptape-framework/drivers/logs/vector_store_drivers_1.txt, docs/griptape-framework/drivers/logs/vector_store_drivers_10.txt, docs/griptape-framework/drivers/logs/vector_store_drivers_11.txt |
| Data / ML platform | 57 | pyproject.toml, tests/unit/drivers/prompt/test_amazon_sagemaker_jumpstart_prompt_driver.py, tests/unit/drivers/prompt/test_base_prompt_driver.py |
| Database / data infrastructure | 50 | pyproject.toml, docs/griptape-framework/drivers/conversation-memory-drivers.md, docs/griptape-framework/drivers/logs/vector_store_drivers_1.txt |
| Observability / evaluation | 39 | README.md, pyproject.toml, docs/griptape-framework/engines/eval-engines.md |
| Local LLM / inference | 25 | pyproject.toml, tests/unit/drivers/prompt/test_ollama_prompt_driver.py, docs/griptape-framework/drivers/embedding-drivers.md |
| Cloud native / infrastructure | 14 | docs/griptape-framework/drivers/logs/vector_store_drivers_1.txt, docs/griptape-framework/drivers/logs/vector_store_drivers_10.txt, docs/griptape-framework/drivers/logs/vector_store_drivers_11.txt |
| Developer tools / DX | 4 | pyproject.toml |
| MCP / agent interoperability | 3 | griptape/tools/mcp/requirements.txt |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, database, databaseRuntime, devtools, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1604 |
| manifests | 23 |
| docs | 574 |
| tests | 427 |
| ci/ops | 9 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | 🛠️ Core Components / 🏗️ Structures / 📝 Tasks / 🧠 Memory / 🚗 Drivers / 🔧 Tools / 🚂 Engines / 📦 Additional Components / Documentation / Hello World Example | ! Griptape docs/assets/img/GRIPTAPE from Foundry rgb black.svg ! PyPI Version https //img.shields.io/pypi/v/griptape.svg https //pypi.python.org/pypi/griptape ! Tests https //github.com/griptape ai/griptape/actions/workflows/unit tests.yml/badge.svg https //github.com/griptape ai/griptape/actions/workflows/unit tests.yml ! Docs https //readthedocs.org/projects/griptape/badge/ https //griptape.readthedocs.io/ ! Checked with pyright https //microsoft.github.io/pyright/img/pyright badge.svg https //microsoft.github.io/pyright/ ! Ruff https //img.shields.io/endpoint?url=https //raw.githubusercontent.com/astral sh/ruff/main/assets/badge/v2.json https //github.com/astral sh/ruff ! codecov https // |


## Key Files

### Manifests

- README.md
- griptape/tools/mcp/requirements.txt
- griptape/tools/prompt_image_generation/requirements.txt
- griptape/tools/prompt_summary/requirements.txt
- griptape/tools/rag/requirements.txt
- griptape/tools/vector_store/requirements.txt
- Makefile
- pyproject.toml
- tests/mocks/invalid_mock_tool/Dockerfile
- tests/mocks/invalid_mock_tool/requirements.txt
- tests/mocks/mock_tool_kwargs/requirements.txt
- tests/mocks/mock_tool/Dockerfile
- tests/mocks/mock_tool/requirements.txt
- griptape/tools/calculator/requirements.txt
- griptape/tools/computer/requirements.txt
- griptape/tools/computer/resources/Dockerfile
- griptape/tools/computer/resources/requirements.txt
- griptape/tools/date_time/requirements.txt
- griptape/tools/extraction/requirements.txt
- griptape/tools/inpainting_image_generation/requirements.txt


### Spec / Docs / Prompt Artifacts

- docs/griptape-framework/structures/agents.md
- griptape/tools/mcp/requirements.txt
- griptape/tools/prompt_image_generation/requirements.txt
- griptape/tools/prompt_summary/requirements.txt
- griptape/tools/rag/requirements.txt
- griptape/tools/vector_store/requirements.txt
- tests/mocks/invalid_mock_tool/requirements.txt
- tests/mocks/mock_tool_kwargs/requirements.txt
- tests/mocks/mock_tool/requirements.txt
- tests/unit/drivers/prompt/__init__.py
- tests/unit/drivers/prompt/test_amazon_bedrock_prompt_driver.py
- tests/unit/drivers/prompt/test_amazon_sagemaker_jumpstart_prompt_driver.py
- tests/unit/drivers/prompt/test_anthropic_prompt_driver.py
- tests/unit/drivers/prompt/test_azure_openai_chat_prompt_driver.py
- tests/unit/drivers/prompt/test_base_prompt_driver.py
- tests/unit/drivers/prompt/test_cohere_prompt_driver.py
- tests/unit/drivers/prompt/test_dummy_prompt_driver.py
- tests/unit/drivers/prompt/test_google_prompt_driver.py
- tests/unit/drivers/prompt/test_griptape_cloud_prompt_driver.py
- tests/unit/drivers/prompt/test_grok_prompt_driver.py


### Agent Instruction Files

- docs/griptape-framework/structures/agents.md
- tests/unit/drivers/prompt/__init__.py
- tests/unit/drivers/prompt/test_amazon_bedrock_prompt_driver.py
- tests/unit/drivers/prompt/test_amazon_sagemaker_jumpstart_prompt_driver.py
- tests/unit/drivers/prompt/test_anthropic_prompt_driver.py
- tests/unit/drivers/prompt/test_azure_openai_chat_prompt_driver.py
- tests/unit/drivers/prompt/test_base_prompt_driver.py
- tests/unit/drivers/prompt/test_cohere_prompt_driver.py
- tests/unit/drivers/prompt/test_dummy_prompt_driver.py
- tests/unit/drivers/prompt/test_google_prompt_driver.py
- tests/unit/drivers/prompt/test_griptape_cloud_prompt_driver.py
- tests/unit/drivers/prompt/test_grok_prompt_driver.py
- tests/unit/drivers/prompt/test_hugging_face_hub_prompt_driver.py
- tests/unit/drivers/prompt/test_hugging_face_pipeline_prompt_driver.py
- tests/unit/drivers/prompt/test_ollama_prompt_driver.py


## Top Directories

| dir | count |
| --- | --- |
| griptape | 581 |
| docs | 568 |
| tests | 427 |
| .github | 15 |
| _typos.toml | 1 |
| .coveragerc | 1 |
| .gitignore | 1 |
| .readthedocs.yml | 1 |
| CHANGELOG.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| Makefile | 1 |
| MIGRATION.md | 1 |
| mkdocs.yml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 1220 |
| .txt | 212 |
| .md | 90 |
| .j2 | 32 |
| .yml | 15 |
| [no-ext] | 8 |
| .csv | 5 |
| .css | 4 |
| .svg | 3 |
| .js | 2 |
| .json | 2 |
| .toml | 2 |
| .wav | 2 |
| .asdf | 1 |
| .bmp | 1 |
| .html | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
