# openai/openai-agents-python

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/openai/openai-agents-python |
| local path | sources/openai__openai-agents-python |
| HEAD | c359c20 |
| stars/forks | 27214 / 4196 |
| language | Python |
| license | MIT |
| pushedAt | 2026-06-13T06:18:40Z |
| trendScore / priorityScore | 180 / 487 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/agent_patterns/README.md, examples/financial_research_agent/README.md, examples/mcp/filesystem_example/README.md |
| MCP / agent interoperability | 400 | examples/mcp/filesystem_example/README.md, examples/mcp/get_all_mcp_tools_example/README.md, examples/mcp/git_example/README.md |
| Developer tools / DX | 134 | examples/agent_patterns/README.md, examples/financial_research_agent/README.md, examples/realtime/app/README.md |
| Database / data infrastructure | 121 | examples/sandbox/extensions/daytona/usaspending_text2sql/README.md, examples/sandbox/healthcare_support/README.md, examples/sandbox/tutorials/sandbox_resume/README.md |
| Cloud native / infrastructure | 74 | examples/mcp/streamablehttp_custom_client_example/README.md, examples/sandbox/extensions/README.md, examples/sandbox/extensions/temporal/README.md |
| Observability / evaluation | 65 | examples/research_bot/README.md, examples/sandbox/extensions/temporal/README.md, examples/sandbox/healthcare_support/README.md |
| Security / supply chain | 33 | examples/mcp/prompt_server/README.md, examples/mcp/streamablehttp_custom_client_example/README.md, examples/realtime/twilio_sip/README.md |
| Data / ML platform | 18 | examples/sandbox/tutorials/dataroom_metric_extract/README.md, examples/voice/static/README.md, examples/voice/streamed/README.md |
| Coding agent / software automation | 5 | examples/sandbox/docs/repo/README.md, examples/sandbox/extensions/temporal/README.md, examples/hosted_mcp/human_in_the_loop.py |
| RAG / retrieval / knowledge | 3 | examples/research_bot/README.md, examples/sandbox/tutorials/dataroom_qa/README.md, docs/multi_agent.md |
| Frontend / app framework | 2 | examples/realtime/app/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1315 |
| manifests | 40 |
| docs | 478 |
| tests | 285 |
| ci/ops | 8 |
| spec artifacts | 13 |
| agent instruction files | 9 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | OpenAI Agents SDK [![PyPI](https://img.shields.io/pypi/v/openai-agents?label=pypi%20package)](https://pypi.org/project/openai-agents/) | OpenAI Agents SDK [![PyPI](https://img.shields.io/pypi/v/openai-agents?label=pypi%20package)](https://pypi.org/project/openai-agents/) / Core concepts: / Get started / venv / uv / Run your first Sandbox Agent / This project provides a Python SDK for building multi-agent workflows. / Acknowledgements | OpenAI Agents SDK ! PyPI https //img.shields.io/pypi/v/openai agents?label=pypi%20package https //pypi.org/project/openai agents/ The OpenAI Agents SDK is a lightweight yet powerful framework for building multi agent workflows. It is provider agnostic, supporting the OpenAI Responses and Chat Completions APIs, as well as 100+ other LLMs. <img src="https //cdn.openai.com/API/docs/images/orchestration.png" alt="Image of the Agents Tracing UI" style="max height 803px;" !NOTE Looking for the JavaScript/TypeScript version? Check out Agents SDK JS/TS https //github.com/openai/openai agents js . Core concepts 1. Agents https //openai.github.io/openai agents python/agents LLMs configured with instru |


## Key Files

### Manifests

- examples/agent_patterns/README.md
- examples/financial_research_agent/README.md
- examples/mcp/filesystem_example/README.md
- examples/mcp/get_all_mcp_tools_example/README.md
- examples/mcp/git_example/README.md
- examples/mcp/manager_example/README.md
- examples/mcp/prompt_server/README.md
- examples/mcp/sse_example/README.md
- examples/mcp/sse_remote_example/README.md
- examples/mcp/streamable_http_remote_example/README.md
- examples/mcp/streamablehttp_custom_client_example/README.md
- examples/mcp/streamablehttp_example/README.md
- examples/mcp/tool_filter_example/README.md
- examples/model_providers/README.md
- examples/realtime/app/README.md
- examples/realtime/twilio_sip/README.md
- examples/realtime/twilio/README.md
- examples/research_bot/README.md
- examples/sandbox/docs/repo/README.md
- examples/sandbox/extensions/daytona/usaspending_text2sql/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- docs/agents.md
- docs/ja/agents.md
- docs/ko/agents.md
- docs/zh/agents.md
- examples/realtime/twilio_sip/requirements.txt
- examples/realtime/twilio/requirements.txt
- src/agents/sandbox/memory/prompts/memory_consolidation_prompt.md
- src/agents/sandbox/memory/prompts/memory_read_prompt.md
- src/agents/sandbox/memory/prompts/rollout_extraction_prompt.md
- src/agents/sandbox/memory/prompts/rollout_extraction_user_message.md
- examples/sandbox/docs/repo/task.md
- src/agents/sandbox/instructions/prompt.md


### Agent Instruction Files

- AGENTS.md
- docs/agents.md
- docs/ja/agents.md
- docs/ko/agents.md
- docs/zh/agents.md
- src/agents/sandbox/memory/prompts/memory_consolidation_prompt.md
- src/agents/sandbox/memory/prompts/memory_read_prompt.md
- src/agents/sandbox/memory/prompts/rollout_extraction_prompt.md
- src/agents/sandbox/memory/prompts/rollout_extraction_user_message.md


## Top Directories

| dir | count |
| --- | --- |
| docs | 388 |
| examples | 298 |
| src | 289 |
| tests | 280 |
| .agents | 29 |
| .github | 15 |
| .codex | 3 |
| .vscode | 2 |
| .gitignore | 1 |
| .prettierrc | 1 |
| AGENTS.md | 1 |
| LICENSE | 1 |
| Makefile | 1 |
| mkdocs.yml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 778 |
| .md | 467 |
| .json | 13 |
| .txt | 13 |
| .yaml | 9 |
| .yml | 8 |
| .sh | 7 |
| [no-ext] | 6 |
| .js | 3 |
| .svg | 2 |
| .toml | 2 |
| .typed | 2 |
| .css | 1 |
| .html | 1 |
| .ipynb | 1 |
| .mount | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
