# crewAIInc/crewAI

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/crewAIInc/crewAI |
| local path | sources/crewAIInc__crewAI |
| HEAD | da8fe8c |
| stars/forks | 53827 / 7532 |
| language | Python |
| license |  |
| pushedAt | 2026-06-18T00:04:18Z |
| trendScore / priorityScore | 208 / 545 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | lib/cli/README.md, lib/cli/src/crewai_cli/templates/crew/README.md, lib/cli/src/crewai_cli/templates/flow/README.md |
| MCP / agent interoperability | 405 | lib/crewai-tools/src/crewai_tools/tools/merge_agent_handler_tool/README.md, lib/cli/src/crewai_cli/templates/AGENTS.md, README.md |
| RAG / retrieval / knowledge | 199 | lib/crewai-tools/src/crewai_tools/tools/contextualai_create_agent_tool/README.md, lib/crewai-tools/src/crewai_tools/tools/mongodb_vector_search_tool/README.md, lib/crewai-tools/src/crewai_tools/tools/rag/README.md |
| Developer tools / DX | 172 | lib/cli/README.md, lib/cli/src/crewai_cli/templates/crew/README.md, lib/cli/src/crewai_cli/templates/flow/README.md |
| Database / data infrastructure | 166 | lib/crewai-tools/src/crewai_tools/tools/mongodb_vector_search_tool/README.md, lib/crewai-tools/src/crewai_tools/tools/qdrant_vector_search_tool/README.md, lib/crewai-tools/src/crewai_tools/tools/rag/README.md |
| Security / supply chain | 117 | lib/crewai-tools/src/crewai_tools/aws/bedrock/agents/README.md, lib/crewai-tools/src/crewai_tools/tools/merge_agent_handler_tool/README.md, README.md |
| Local LLM / inference | 70 | lib/cli/src/crewai_cli/templates/AGENTS.md, README.md, lib/crewai-tools/src/crewai_tools/tools/code_docs_search_tool/README.md |
| Observability / evaluation | 45 | lib/crewai-tools/src/crewai_tools/tools/merge_agent_handler_tool/README.md, lib/cli/src/crewai_cli/templates/AGENTS.md, README.md |
| Data / ML platform | 39 | lib/crewai-tools/src/crewai_tools/tools/contextualai_create_agent_tool/README.md, lib/cli/src/crewai_cli/templates/AGENTS.md, README.md |
| Coding agent / software automation | 23 | lib/cli/src/crewai_cli/templates/AGENTS.md, README.md, docs/ar/guides/coding-tools/agents-md.mdx |
| Cloud native / infrastructure | 17 | lib/cli/src/crewai_cli/templates/AGENTS.md, lib/crewai-tools/src/crewai_tools/tools/browserbase_load_tool/README.md, lib/crewai-tools/src/crewai_tools/tools/scrapfly_scrape_website_tool/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3069 |
| manifests | 40 |
| docs | 1171 |
| tests | 953 |
| ci/ops | 14 |
| spec artifacts | 15 |
| agent instruction files | 4 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | CrewAI AMP Suite | Fast and Flexible Multi-Agent Automation Framework / CrewAI AMP Suite / Crew Control Plane Key Features: / Table of contents / Build with AI / Why CrewAI? / Getting Started / Learning Resources / Understanding Flows and Crews / Getting Started with Installation | <p align="center" <a href="https //github.com/crewAIInc/crewAI" <img src="docs/images/crewai logo.png" width="600px" alt="Open source Multi AI Agent orchestration framework" </a </p <p align="center" style="display flex; justify content center; gap 20px; align items center;" <a href="https //trendshift.io/repositories/11239" target=" blank" <img src="https //trendshift.io/api/badge/repositories/11239" alt="crewAIInc%2FcrewAI Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a </p <p align="center" <a href="https //crewai.com" Homepage</a · <a href="https //docs.crewai.com" Docs</a · <a href="https //app.crewai.com" Start Cloud Trial</a · <a href="https //blog.crewai.co |


## Key Files

### Manifests

- lib/cli/README.md
- lib/cli/src/crewai_cli/templates/crew/README.md
- lib/cli/src/crewai_cli/templates/flow/README.md
- lib/cli/src/crewai_cli/templates/tool/README.md
- lib/crewai-tools/src/crewai_tools/aws/bedrock/agents/README.md
- lib/crewai-tools/src/crewai_tools/tools/contextualai_create_agent_tool/README.md
- lib/crewai-tools/src/crewai_tools/tools/merge_agent_handler_tool/README.md
- lib/crewai-tools/src/crewai_tools/tools/mongodb_vector_search_tool/README.md
- lib/crewai-tools/src/crewai_tools/tools/qdrant_vector_search_tool/README.md
- lib/crewai-tools/src/crewai_tools/tools/rag/README.md
- lib/cli/src/crewai_cli/templates/AGENTS.md
- README.md
- lib/crewai-core/README.md
- lib/crewai-files/README.md
- lib/crewai-tools/README.md
- lib/crewai-tools/src/crewai_tools/aws/bedrock/browser/README.md
- lib/crewai-tools/src/crewai_tools/aws/bedrock/code_interpreter/README.md
- lib/crewai-tools/src/crewai_tools/aws/bedrock/knowledge_base/README.md
- lib/crewai-tools/src/crewai_tools/aws/s3/README.md
- lib/crewai-tools/src/crewai_tools/tools/ai_mind_tool/README.md


### Spec / Docs / Prompt Artifacts

- lib/cli/src/crewai_cli/templates/AGENTS.md
- docs/ar/concepts/agents.mdx
- docs/en/concepts/agents.mdx
- docs/ko/concepts/agents.mdx
- docs/pt-BR/concepts/agents.mdx
- lib/crewai/tests/config/agents.yaml
- docs/ar/concepts/tasks.mdx
- docs/en/concepts/tasks.mdx
- docs/ko/concepts/tasks.mdx
- docs/pt-BR/concepts/tasks.mdx
- lib/cli/src/crewai_cli/templates/crew/config/agents.yaml
- lib/cli/src/crewai_cli/templates/crew/config/tasks.yaml
- lib/cli/src/crewai_cli/templates/flow/crews/content_crew/config/agents.yaml
- lib/cli/src/crewai_cli/templates/flow/crews/content_crew/config/tasks.yaml
- lib/crewai/tests/config/tasks.yaml


### Agent Instruction Files

- lib/cli/src/crewai_cli/templates/AGENTS.md
- lib/crewai/tests/config/agents.yaml
- lib/cli/src/crewai_cli/templates/crew/config/agents.yaml
- lib/cli/src/crewai_cli/templates/flow/crews/content_crew/config/agents.yaml


## Top Directories

| dir | count |
| --- | --- |
| lib | 1964 |
| docs | 1074 |
| .github | 21 |
| .editorconfig | 1 |
| .env.test | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| .python-version | 1 |
| conftest.py | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |
| README.md | 1 |
| scripts | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 1224 |
| .mdx | 1065 |
| .yaml | 609 |
| .md | 97 |
| .yml | 19 |
| .json | 16 |
| .toml | 10 |
| [no-ext] | 9 |
| .typed | 5 |
| .js | 3 |
| .txt | 2 |
| .css | 1 |
| .csv | 1 |
| .example | 1 |
| .j2 | 1 |
| .mov | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
