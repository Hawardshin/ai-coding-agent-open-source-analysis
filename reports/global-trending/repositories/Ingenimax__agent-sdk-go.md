# Ingenimax/agent-sdk-go

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Ingenimax/agent-sdk-go |
| local path | sources/Ingenimax__agent-sdk-go |
| HEAD | 8f1af56 |
| stars/forks | 573 / 127 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T19:45:26Z |
| trendScore / priorityScore | 135 / 470 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/advanced_agent_streaming/README.md, examples/agent_config_yaml/README.md, examples/agent-token-usage-simple/README.md |
| Developer tools / DX | 500 | examples/advanced_agent_streaming/README.md, examples/agent_config_yaml/README.md, examples/agent-token-usage-simple/README.md |
| MCP / agent interoperability | 500 | examples/mcp/google-cse-yaml/README.md, examples/mcp/google-cse/README.md, examples/mcp/http-test-agent/README.md |
| Local LLM / inference | 268 | examples/llm/ollama/structured_output/README.md, examples/llm/vllm/README.md, examples/token-usage/README.md |
| Database / data infrastructure | 243 | examples/agent-token-usage-simple/README.md, examples/mcp/quickstart/README.md, examples/memory/README.md |
| RAG / retrieval / knowledge | 213 | examples/embedding/advanced/README.md, examples/memory/README.md, examples/orchestration/agent_handoff/README.md |
| Observability / evaluation | 168 | examples/advanced_agent_streaming/README.md, examples/agent-token-usage-simple/README.md, examples/llm/anthropic/vertex/structured_output/README.md |
| Frontend / app framework | 94 | pkg/microservice/ui-nextjs/README.md, CLAUDE.md, docs/agent_ui.md |
| Security / supply chain | 80 | examples/llm/anthropic/bedrock/README.md, examples/llm/gemini/README.md, examples/subagents/README.md |
| Cloud native / infrastructure | 66 | examples/mcp/http-test-agent/README.md, examples/memory/README.md, examples/vectorstore/weaviate/README.md |
| Data / ML platform | 45 | examples/agent-token-usage-simple/README.md, examples/a2a/content_team/README.md, examples/guardrails/README.md |
| Coding agent / software automation | 10 | examples/datastore/supabase/README.md, README.md, CLAUDE.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Go, Ruby |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 589 |
| manifests | 40 |
| docs | 106 |
| tests | 70 |
| ci/ops | 2 |
| spec artifacts | 10 |
| agent instruction files | 7 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Agent Go SDK | Agent Go SDK / Documentation / Community / Features / Core Capabilities / Enterprise-Ready / Development Experience / Getting Started / Prerequisites / Installation | <div align="center" <img src="/docs/img/logo header.png gh light mode only" alt="Ingenimax" width="400" <img src="/docs/img/logo header inverted.png gh dark mode only" alt="Ingenimax" width="400" </div Agent Go SDK A powerful Go framework for building production ready AI agents that seamlessly integrates memory management, tool execution, multi LLM support, and enterprise features into a flexible, extensible architecture. Documentation 📖 docs.goagents.dev https //docs.goagents.dev/ — Full documentation, guides, and reference. Community ! Discord https //img.shields.io/badge/Discord Join%20Our%20Community 5865F2?style=for the badge&logo=discord&logoColor=white https //discord.com/invite/MjJb |


## Key Files

### Manifests

- examples/advanced_agent_streaming/README.md
- examples/agent_config_yaml/README.md
- examples/agent-token-usage-simple/README.md
- examples/embedding/advanced/README.md
- examples/llm/anthropic/bedrock/README.md
- examples/llm/anthropic/README.md
- examples/llm/anthropic/vertex/README.md
- examples/llm/anthropic/vertex/structured_output/README.md
- examples/llm/azureopenai/README.md
- examples/llm/gemini/README.md
- examples/llm/ollama/structured_output/README.md
- examples/llm/openai/README.md
- examples/llm/openai/reasoning/README.md
- examples/llm/openai/retry/README.md
- examples/llm/vllm/README.md
- examples/mcp/google-cse-yaml/README.md
- examples/mcp/google-cse/README.md
- examples/mcp/http-test-agent/README.md
- examples/mcp/quickstart/README.md
- examples/memory/README.md


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- examples/agent_config_yaml/agents.yaml
- examples/agent_config_yaml/tasks.yaml
- examples/gcs_storage_yaml_test/agents.yaml
- examples/image_generation/agents.yaml
- examples/multi_turn_editing_yaml_test/agents.yaml
- examples/simple_yaml_agent/agents.yaml
- docs/graphrag/architecture.md
- pkg/prompts/template.go
- docs/task.md


### Agent Instruction Files

- CLAUDE.md
- examples/agent_config_yaml/agents.yaml
- examples/gcs_storage_yaml_test/agents.yaml
- examples/image_generation/agents.yaml
- examples/multi_turn_editing_yaml_test/agents.yaml
- examples/simple_yaml_agent/agents.yaml
- pkg/prompts/template.go


## Top Directories

| dir | count |
| --- | --- |
| pkg | 351 |
| examples | 170 |
| docs | 37 |
| .github | 7 |
| cmd | 6 |
| scripts | 2 |
| .gitignore | 1 |
| .goignore | 1 |
| .goreleaser.yml | 1 |
| .pre-commit-config.yaml | 1 |
| agent-cli.rb | 1 |
| CLAUDE.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| codecov.yml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 346 |
| .md | 106 |
| .tsx | 31 |
| .yaml | 15 |
| .txt | 11 |
| .svg | 10 |
| .js | 9 |
| .json | 9 |
| [no-ext] | 9 |
| .woff2 | 6 |
| .mod | 5 |
| .sum | 5 |
| .yml | 5 |
| .example | 4 |
| .html | 4 |
| .ts | 4 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
