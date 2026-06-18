# rocketride-org/rocketride-server

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/rocketride-org/rocketride-server |
| local path | sources/rocketride-org__rocketride-server |
| HEAD | bc36b63 |
| stars/forks | 3866 / 1234 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T23:07:54Z |
| trendScore / priorityScore | 210 / 555 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | nodes/src/nodes/prompt/README.md, examples/README.md, nodes/src/nodes/agent_crewai/crewai_agent/README.md |
| Data / ML platform | 323 | nodes/src/nodes/prompt/README.md, docs/stubs/AGENTS.md, examples/README.md |
| RAG / retrieval / knowledge | 256 | nodes/src/nodes/prompt/README.md, docs/stubs/AGENTS.md, examples/README.md |
| Database / data infrastructure | 224 | deploy/helm/examples/README.md, nodes/src/nodes/agent_rocketride/README.md, nodes/src/nodes/db_clickhouse/README.md |
| Developer tools / DX | 131 | docs/stubs/AGENTS.md, examples/README.md, docs/README.md |
| Cloud native / infrastructure | 90 | deploy/helm/examples/README.md, nodes/src/nodes/agent_rocketride/README.md, nodes/src/nodes/embedding_image/README.md |
| Security / supply chain | 56 | examples/README.md, deploy/helm/examples/README.md, nodes/src/nodes/db_clickhouse/README.md |
| Local LLM / inference | 52 | nodes/src/nodes/llm_deepseek/README.md, nodes/src/nodes/llm_minimax/README.md, nodes/src/nodes/llm_ollama/README.md |
| MCP / agent interoperability | 50 | docs/README.md, nodes/src/nodes/tool_mcp_client/README.md, AGENTS.md |
| Frontend / app framework | 23 | examples/README.md, nodes/src/nodes/agent_crewai/README.md, nodes/src/nodes/agent_llamaindex/README.md |
| Observability / evaluation | 15 | examples/README.md, nodes/src/nodes/agent_crewai/README.md, nodes/src/nodes/agent_deepagent/README.md |
| Coding agent / software automation | 7 | AGENTS.md, README.md, nodes/src/nodes/tool_github/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3472 |
| manifests | 40 |
| docs | 240 |
| tests | 389 |
| ci/ops | 45 |
| spec artifacts | 50 |
| agent instruction files | 11 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Features / Quick Start / Building Your First Pipe / Observability / Contributors | <div align="center" <a href="https //rocketride.org" <img src="https //raw.githubusercontent.com/rocketride org/rocketride server/develop/images/banner root.png" alt="RocketRide" width="100%" </a <p <strong RocketRide is the open source AIDE the AI Development Environment.</strong <br/ Build, deploy and harness production ready AI solutions at light speed, all within your IDE or using the CLI in your terminal. </p <p <img src="https //raw.githubusercontent.com/rocketride org/rocketride server/develop/images/icon cpp.png" alt="C++" / &nbsp;&nbsp; <img src="https //raw.githubusercontent.com/rocketride org/rocketride server/develop/images/icon python.png" alt="Python" / &nbsp;&nbsp; <img src="h |


## Key Files

### Manifests

- nodes/src/nodes/prompt/README.md
- docs/stubs/AGENTS.md
- examples/README.md
- deploy/helm/examples/README.md
- docs/README.md
- nodes/src/nodes/agent_crewai/crewai_agent/README.md
- nodes/src/nodes/agent_crewai/crewai_manager/README.md
- nodes/src/nodes/agent_crewai/crewai_subagent/README.md
- nodes/src/nodes/agent_crewai/README.md
- nodes/src/nodes/agent_deepagent/deepagent_agent/README.md
- nodes/src/nodes/agent_deepagent/deepagent_subagent/README.md
- nodes/src/nodes/agent_deepagent/README.md
- nodes/src/nodes/agent_langchain/README.md
- nodes/src/nodes/agent_llamaindex/README.md
- nodes/src/nodes/agent_rocketride/README.md
- nodes/src/nodes/db_clickhouse/README.md
- nodes/src/nodes/embedding_image/README.md
- nodes/src/nodes/embedding_openai/README.md
- nodes/src/nodes/embedding_transformer/README.md
- nodes/src/nodes/embedding_video/README.md


### Spec / Docs / Prompt Artifacts

- nodes/src/nodes/prompt/README.md
- docs/stubs/AGENTS.md
- AGENTS.md
- docs/stubs/CLAUDE.md
- .claude/CLAUDE.md
- docs/stubs/copilot-instructions.md
- nodes/src/nodes/agent_crewai/requirements.txt
- nodes/src/nodes/agent_deepagent/requirements.txt
- nodes/src/nodes/agent_langchain/requirements.txt
- nodes/src/nodes/agent_llamaindex/requirements.txt
- nodes/src/nodes/agent_rocketride/requirements.txt
- nodes/src/nodes/db_clickhouse/requirements.txt
- nodes/src/nodes/embedding_image/requirements.txt
- nodes/src/nodes/embedding_openai/requirements.txt
- nodes/src/nodes/embedding_transformer/requirements.txt
- nodes/src/nodes/embedding_video/requirements.txt
- nodes/src/nodes/llm_anthropic/requirements.txt
- nodes/src/nodes/llm_baidu_qianfan/requirements.txt
- nodes/src/nodes/llm_bedrock/requirements.txt
- nodes/src/nodes/llm_deepseek/requirements.txt


### Agent Instruction Files

- nodes/src/nodes/prompt/README.md
- docs/stubs/AGENTS.md
- AGENTS.md
- docs/stubs/CLAUDE.md
- .claude/CLAUDE.md
- docs/stubs/copilot-instructions.md
- nodes/src/nodes/prompt/__init__.py
- nodes/src/nodes/prompt/IGlobal.py
- nodes/src/nodes/prompt/IInstance.py
- nodes/src/nodes/prompt/prompt.svg
- nodes/src/nodes/prompt/services.json


## Top Directories

| dir | count |
| --- | --- |
| packages | 1845 |
| nodes | 1043 |
| apps | 319 |
| tools | 52 |
| scripts | 38 |
| testdata | 30 |
| .github | 29 |
| docs | 27 |
| deploy | 21 |
| examples | 12 |
| docker | 8 |
| .vscode | 4 |
| test | 4 |
| pipelines | 3 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 949 |
| .hpp | 451 |
| .cpp | 334 |
| .tsx | 287 |
| .ts | 239 |
| .json | 214 |
| .md | 209 |
| .h | 180 |
| .txt | 154 |
| .svg | 141 |
| .js | 65 |
| [no-ext] | 34 |
| .yaml | 27 |
| .java | 26 |
| .yml | 20 |
| .cmake | 19 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
