# evalstate/fast-agent

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/evalstate/fast-agent |
| local path | sources/evalstate__fast-agent |
| HEAD | 82e1330 |
| stars/forks | 3826 / 405 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:52:02Z |
| trendScore / priorityScore | 175 / 479 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/card-packs/smart/README.md, examples/tensorzero/README.md, publish/fast-agent-acp/README.md |
| MCP / agent interoperability | 500 | examples/tensorzero/README.md, publish/fast-agent-acp/README.md, src/fast_agent/cli/commands/README.md |
| Developer tools / DX | 122 | examples/tensorzero/README.md, publish/fast-agent-acp/README.md, src/fast_agent/cli/commands/README.md |
| Security / supply chain | 89 | src/fast_agent/cli/commands/README.md, README.md, examples/mcp/elicitations/fast-agent.yaml |
| RAG / retrieval / knowledge | 43 | examples/rag/pyproject.toml, examples/mcp/elicitations/elicitation_forms_server.py, examples/rag/vertex-rag.py |
| Cloud native / infrastructure | 32 | examples/tensorzero/README.md, README.md, examples/tensorzero/docker-compose.yml |
| Data / ML platform | 26 | examples/tensorzero/README.md, publish/hf-inference-acp/README.md, examples/mcp/elicitations/elicitation_forms_server.py |
| Observability / evaluation | 17 | README.md, examples/otel/fast-agent.yaml, examples/researcher/researcher-eval.py |
| Coding agent / software automation | 16 | README.md, examples/acp/acp_aware_agent.py, examples/card-packs/smart/agent-cards/smart.md |
| Local LLM / inference | 15 | README.md, examples/workflows-md/hf-api-agent/conv1.json, docs/docs/mcp/state_transfer.md |
| Database / data infrastructure | 2 | examples/tensorzero/README.md, docs/docs/ref/fast_agent_ai_articles.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1884 |
| manifests | 24 |
| docs | 263 |
| tests | 842 |
| ci/ops | 9 |
| spec artifacts | 34 |
| agent instruction files | 32 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Code with Hugging Face Inference Providers | Start Here / Code with Hugging Face Inference Providers / Code with Codex (agents optimized for OpenAI) / /connect supports stdio or streamable http (with OAuth) / Start a STDIO server / Connect to a Streamable HTTP Server / Install fast-agent / Run fast-agent with opus, shell support and subagent/smart mode / Run fast-agent inside Toad / Agent Application Development | <p align="center" <a href="https //pypi.org/project/fast agent mcp/" <img src="https //img.shields.io/pypi/v/fast agent mcp?color=%2334D058&label=pypi" / </a <a href=" " <img src="https //github.com/evalstate/fast agent/actions/workflows/main checks.yml/badge.svg" / </a <a href="https //github.com/evalstate/fast agent/issues" <img src="https //img.shields.io/github/issues raw/evalstate/fast agent" / </a <a href="https //discord.gg/xg5cJ7ndN6" <img src="https //img.shields.io/discord/1358470293990936787" alt="discord" / </a <img alt="Pepy Total Downloads" src="https //img.shields.io/pepy/dt/fast agent mcp?label=pypi%20%7C%20downloads"/ <a href="https //github.com/evalstate/fast agent mcp/blob |


## Key Files

### Manifests

- examples/card-packs/smart/README.md
- examples/tensorzero/README.md
- tests/fixtures/llm_traces/README.md
- docs/docs/_generated/README.md
- docs/docs/assets/vendor/asciinema-player/README.md
- publish/fast-agent-acp/README.md
- src/fast_agent/cli/commands/README.md
- AGENTS.md
- README.md
- tests/fixtures/patch/scenarios/README.md
- publish/hf-inference-acp/README.md
- examples/rag/pyproject.toml
- examples/tensorzero/mcp_server/Dockerfile
- examples/tensorzero/mcp_server/pyproject.toml
- examples/fastapi/pyproject.toml
- examples/openapi/pyproject.toml
- examples/otel/docker-compose.yaml
- examples/tensorzero/docker-compose.yml
- examples/tensorzero/Makefile
- publish/fast-agent-acp/pyproject.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- src/fast_agent/ui/prompt/special_commands.py
- tests/unit/fast_agent/mcp/prompts/test_prompt_helpers.py
- tests/unit/fast_agent/mcp/prompts/test_prompt_server.py
- tests/unit/fast_agent/mcp/prompts/test_prompt_template.py
- tests/unit/fast_agent/mcp/prompts/test_template_multipart_integration.py
- src/fast_agent/mcp/prompts/__init__.py
- src/fast_agent/mcp/prompts/__main__.py
- src/fast_agent/mcp/prompts/prompt_constants.py
- src/fast_agent/mcp/prompts/prompt_helpers.py
- src/fast_agent/mcp/prompts/prompt_load.py
- src/fast_agent/mcp/prompts/prompt_server.py
- src/fast_agent/mcp/prompts/prompt_template.py
- src/fast_agent/ui/prompt/__init__.py
- src/fast_agent/ui/prompt/agent_info.py
- src/fast_agent/ui/prompt/alert_flags.py
- src/fast_agent/ui/prompt/attachment_tokens.py
- src/fast_agent/ui/prompt/clipboard_image.py
- src/fast_agent/ui/prompt/command_help.py
- src/fast_agent/ui/prompt/completer.py


### Agent Instruction Files

- AGENTS.md
- src/fast_agent/ui/prompt/special_commands.py
- tests/unit/fast_agent/mcp/prompts/test_prompt_helpers.py
- tests/unit/fast_agent/mcp/prompts/test_prompt_server.py
- tests/unit/fast_agent/mcp/prompts/test_prompt_template.py
- tests/unit/fast_agent/mcp/prompts/test_template_multipart_integration.py
- src/fast_agent/mcp/prompts/__init__.py
- src/fast_agent/mcp/prompts/__main__.py
- src/fast_agent/mcp/prompts/prompt_constants.py
- src/fast_agent/mcp/prompts/prompt_helpers.py
- src/fast_agent/mcp/prompts/prompt_load.py
- src/fast_agent/mcp/prompts/prompt_server.py
- src/fast_agent/mcp/prompts/prompt_template.py
- src/fast_agent/ui/prompt/__init__.py
- src/fast_agent/ui/prompt/agent_info.py


## Top Directories

| dir | count |
| --- | --- |
| tests | 839 |
| src | 609 |
| examples | 175 |
| docs | 131 |
| plan | 34 |
| scripts | 32 |
| docs-internal | 19 |
| publish | 18 |
| .github | 7 |
| resources | 4 |
| .vscode | 3 |
| .gitignore | 1 |
| .gitmodules | 1 |
| .pre-commit-config.yaml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 1338 |
| .md | 226 |
| .txt | 93 |
| .yaml | 63 |
| .json | 47 |
| .jsonl | 31 |
| [no-ext] | 15 |
| .svg | 10 |
| .sh | 9 |
| .toml | 9 |
| .yml | 9 |
| .cast | 6 |
| .css | 6 |
| .html | 5 |
| .example | 4 |
| .ini | 4 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
