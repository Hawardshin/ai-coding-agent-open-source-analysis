# dynamiq-ai/dynamiq

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/dynamiq-ai/dynamiq |
| local path | sources/dynamiq-ai__dynamiq |
| HEAD | e3ab45b |
| stars/forks | 1054 / 128 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T18:20:00Z |
| trendScore / priorityScore | 182 / 464 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/components/core/memory/README.md, examples/use_cases/agents_use_cases/README.md, examples/components/core/websocket/ws_streamlit/README.md |
| Observability / evaluation | 163 | examples/components/tools/README.md, examples/components/agents/agents/agent_daytona_sandbox.py, examples/components/agents/agents/agent_e2b_sandbox.py |
| RAG / retrieval / knowledge | 87 | examples/components/core/memory/README.md, examples/components/rag/vector_stores/README.md, examples/use_cases/customer_support/README.md |
| Frontend / app framework | 78 | examples/components/core/websocket/ws_streamlit/README.md, examples/use_cases/search/README.md, README.md |
| MCP / agent interoperability | 27 | examples/components/core/dag/dag_mcp_server.yaml, examples/components/core/dag/dag_mcp_tool.yaml, examples/components/core/dag/dag_yaml_mcp.py |
| Database / data infrastructure | 21 | examples/components/core/memory/README.md, README.md, examples/components/core/dag/neo4j_text2cypher_agent.yaml |
| Cloud native / infrastructure | 16 | examples/components/rag/vector_stores/README.md, examples/use_cases/gpt_researcher/README.md, examples/Makefile |
| Developer tools / DX | 10 | examples/cli/agent_service/README.md, examples/components/core/websocket/ws_streamlit/README.md, examples/components/core/dag/image_agent_workflow.yaml |
| Coding agent / software automation | 3 | examples/components/agents/agents/use_agent_with_agent_tool.py, examples/components/core/dag/agents_as_tools.yaml |
| Data / ML platform | 3 | README.md, examples/components/core/dag/dag_yaml_llm.py, examples/components/core/memory/demo_article.py |
| Security / supply chain | 2 | examples/components/core/dag/run_agent_registry_skills_sandbox.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1074 |
| manifests | 24 |
| docs | 29 |
| tests | 282 |
| ci/ops | 8 |
| spec artifacts | 19 |
| agent instruction files | 19 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Define the prompt template for translation | Getting Started / Installation / Documentation / Examples / Simple LLM Flow / Define the prompt template for translation / Create a Prompt object with the defined template / Setup your LLM (Large Language Model) Node / Run the LLM node with the input data / Print the result of the translation | <p align="center" <a href="https //www.getdynamiq.ai/" <img src="https //github.com/dynamiq ai/dynamiq/blob/main/docs/img/Dynamiq Logo Universal Github.png?raw=true" alt="Dynamiq" </a </p <p align="center" <em Dynamiq is an orchestration framework for agentic AI and LLM applications</em </p <p align="center" <a href="https //getdynamiq.ai" <img src="https //img.shields.io/website?label=website&up message=online&url=https%3A%2F%2Fgetdynamiq.ai" alt="Website" </a <a href="https //github.com/dynamiq ai/dynamiq/releases" target=" blank" <img src="https //img.shields.io/github/release/dynamiq ai/dynamiq" alt="Release Notes" </a <a href=" " target=" blank" <img src="https //img.shields.io/badge/Py |


## Key Files

### Manifests

- examples/cli/agent_service/README.md
- examples/components/core/memory/README.md
- examples/components/rag/vector_stores/README.md
- examples/use_cases/agents_use_cases/README.md
- examples/components/core/websocket/ws_streamlit/README.md
- examples/components/tools/README.md
- examples/use_cases/customer_support/README.md
- examples/use_cases/erp_system/README.md
- examples/use_cases/financial_assistant/README.md
- examples/use_cases/gpt_researcher/README.md
- examples/use_cases/job_posting/README.md
- examples/use_cases/literature_overview/README.md
- examples/use_cases/project_manager/README.md
- examples/use_cases/researcher/README.md
- examples/use_cases/search/README.md
- examples/use_cases/smm_manager/README.md
- examples/use_cases/trip_planner/README.md
- README.md
- examples/cli/agent_service/Dockerfile
- examples/Makefile


### Spec / Docs / Prompt Artifacts

- docs/tutorials/agents.md
- tests/unit/nodes/prompts/test_manager.py
- tests/unit/nodes/prompts/test_prompts.py
- dynamiq/nodes/agents/prompts/__init__.py
- dynamiq/nodes/agents/prompts/manager.py
- dynamiq/nodes/agents/prompts/orchestrators/__init__.py
- dynamiq/nodes/agents/prompts/orchestrators/base.py
- dynamiq/nodes/agents/prompts/orchestrators/graph.py
- dynamiq/nodes/agents/prompts/overrides/__init__.py
- dynamiq/nodes/agents/prompts/overrides/gemini.py
- dynamiq/nodes/agents/prompts/overrides/gpt.py
- dynamiq/nodes/agents/prompts/react/__init__.py
- dynamiq/nodes/agents/prompts/react/instructions.py
- dynamiq/nodes/agents/prompts/registry.py
- dynamiq/nodes/agents/prompts/secondary_instructions.py
- dynamiq/nodes/agents/prompts/templates.py
- dynamiq/prompts/__init__.py
- dynamiq/prompts/prompts.py
- .cursor/BUGBOT.md


### Agent Instruction Files

- docs/tutorials/agents.md
- tests/unit/nodes/prompts/test_manager.py
- tests/unit/nodes/prompts/test_prompts.py
- dynamiq/nodes/agents/prompts/__init__.py
- dynamiq/nodes/agents/prompts/manager.py
- dynamiq/nodes/agents/prompts/orchestrators/__init__.py
- dynamiq/nodes/agents/prompts/orchestrators/base.py
- dynamiq/nodes/agents/prompts/orchestrators/graph.py
- dynamiq/nodes/agents/prompts/overrides/__init__.py
- dynamiq/nodes/agents/prompts/overrides/gemini.py
- dynamiq/nodes/agents/prompts/overrides/gpt.py
- dynamiq/nodes/agents/prompts/react/__init__.py
- dynamiq/nodes/agents/prompts/react/instructions.py
- dynamiq/nodes/agents/prompts/registry.py
- dynamiq/nodes/agents/prompts/secondary_instructions.py


## Top Directories

| dir | count |
| --- | --- |
| dynamiq | 410 |
| examples | 358 |
| tests | 281 |
| .github | 6 |
| docs | 3 |
| .cursor | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| docker-compose.yaml | 1 |
| Dockerfile | 1 |
| LICENSE | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 961 |
| .yaml | 50 |
| .md | 29 |
| .sh | 9 |
| [no-ext] | 7 |
| .csv | 4 |
| .html | 3 |
| .docx | 2 |
| .pptx | 2 |
| .yml | 2 |
| .cfg | 1 |
| .example | 1 |
| .json | 1 |
| .jsonl | 1 |
| .toml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
