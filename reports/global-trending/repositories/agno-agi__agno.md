# agno-agi/agno

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/agno-agi/agno |
| local path | sources/agno-agi__agno |
| HEAD | 3adb736 |
| stars/forks | 40751 / 5533 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2026-06-17T22:31:36Z |
| trendScore / priorityScore | 180 / 495 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | cookbook/05_agent_os/advanced_demo/README.md, cookbook/05_agent_os/mcp_demo/README.md, cookbook/91_tools/mcp/mcp_toolbox_demo/README.md |
| Database / data infrastructure | 308 | cookbook/06_storage/examples/README.md, cookbook/05_agent_os/advanced_demo/README.md, cookbook/05_agent_os/mcp_demo/dynamic_headers/README.md |
| MCP / agent interoperability | 99 | cookbook/05_agent_os/advanced_demo/README.md, cookbook/05_agent_os/mcp_demo/dynamic_headers/README.md, cookbook/05_agent_os/mcp_demo/README.md |
| Observability / evaluation | 82 | cookbook/05_agent_os/background_tasks/README.md, cookbook/05_agent_os/tracing/dbs/README.md, cookbook/05_agent_os/tracing/README.md |
| Security / supply chain | 73 | cookbook/02_agents/08_guardrails/README.md, cookbook/02_agents/README.md, cookbook/05_agent_os/factories/README.md |
| Cloud native / infrastructure | 62 | cookbook/91_tools/mcp/mcp_toolbox_demo/README.md, libs/agno/tests/integration/models/litellm_openai/README.md, cookbook/05_agent_os/interfaces/discord/README.md |
| RAG / retrieval / knowledge | 50 | cookbook/02_agents/07_knowledge/README.md, cookbook/02_agents/README.md, cookbook/03_teams/15_distributed_rag/README.md |
| Local LLM / inference | 16 | cookbook/07_knowledge/05_integrations/rag/README.md, cookbook/90_models/vllm/README.md, cookbook/README.md |
| Coding agent / software automation | 13 | cookbook/levels_of_agentic_software/README.md, AGENTS.md, cookbook/05_agent_os/scheduler/CLAUDE.md |
| Developer tools / DX | 10 | cookbook/91_tools/mcp/mcp_toolbox_demo/README.md, cookbook/05_agent_os/interfaces/a2a/basic_agent/README.md, cookbook/05_agent_os/interfaces/telegram/README.md |
| Data / ML platform | 7 | cookbook/05_agent_os/factories/README.md, cookbook/data_labeling/_09_image_extraction_to_vectordb/README.md, cookbook/data_labeling/_17_llm_as_judge/README.md |
| Frontend / app framework | 1 | cookbook/09_evals/performance/comparison/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 4722 |
| manifests | 40 |
| docs | 617 |
| tests | 925 |
| ci/ops | 13 |
| spec artifacts | 16 |
| agent instruction files | 6 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Introduction / What you can build / Get started / Features / Use Agno with your coding agent / Community / Contributing / Telemetry | <div align="center" id="top" <a href="https //agno.com" <picture <source media=" prefers color scheme dark " srcset="https //agno public.s3.us east 1.amazonaws.com/assets/logo dark.svg" <source media=" prefers color scheme light " srcset="https //agno public.s3.us east 1.amazonaws.com/assets/logo light.svg" <img src="https //agno public.s3.us east 1.amazonaws.com/assets/logo light.svg" alt="Agno" </picture </a </div <p align="center" Build, run, and manage agent platforms.<br/ </p Introduction Agno is an SDK for building agent platforms. Build agents using any agent framework. Run them as production services with tracing, scheduling, and RBAC. Manage using a single control plane. Agno allows |


## Key Files

### Manifests

- cookbook/06_storage/examples/README.md
- cookbook/05_agent_os/advanced_demo/README.md
- cookbook/05_agent_os/mcp_demo/dynamic_headers/README.md
- cookbook/05_agent_os/mcp_demo/README.md
- cookbook/05_agent_os/skills/sample_skills/system-info/scripts/README.md
- cookbook/91_tools/mcp/mcp_toolbox_demo/README.md
- libs/agno/tests/integration/models/litellm_openai/README.md
- cookbook/02_agents/01_quickstart/README.md
- cookbook/02_agents/02_input_output/README.md
- cookbook/02_agents/03_context_management/README.md
- cookbook/02_agents/04_tools/README.md
- cookbook/02_agents/05_state_and_session/README.md
- cookbook/02_agents/06_memory_and_learning/README.md
- cookbook/02_agents/07_knowledge/README.md
- cookbook/02_agents/08_guardrails/README.md
- cookbook/02_agents/09_hooks/README.md
- cookbook/02_agents/10_human_in_the_loop/README.md
- cookbook/02_agents/11_approvals/README.md
- cookbook/02_agents/12_multimodal/README.md
- cookbook/02_agents/13_reasoning/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- cookbook/frameworks/antigravity/example_agent/AGENTS.md
- cookbook/05_agent_os/scheduler/CLAUDE.md
- CLAUDE.md
- cookbook/03_teams/20_human_in_the_loop/CLAUDE.md
- cookbook/91_tools/mcp/mcp_toolbox_demo/requirements.txt
- cookbook/levels_of_agentic_software/requirements.txt
- cookbook/01_demo/requirements.txt
- libs/agno/tests/system/requirements.txt
- cookbook/00_quickstart/requirements.txt
- cookbook/08_learning/requirements.txt
- cookbook/data_labeling/image_search/requirements.txt
- cookbook/gemini_3/requirements.txt
- libs/agno_infra/requirements.txt
- libs/agno/requirements.txt
- .github/workflows/claude.yml


### Agent Instruction Files

- AGENTS.md
- cookbook/frameworks/antigravity/example_agent/AGENTS.md
- cookbook/05_agent_os/scheduler/CLAUDE.md
- CLAUDE.md
- cookbook/03_teams/20_human_in_the_loop/CLAUDE.md
- .github/workflows/claude.yml


## Top Directories

| dir | count |
| --- | --- |
| cookbook | 2740 |
| libs | 1942 |
| scripts | 19 |
| .github | 11 |
| .cursorrules | 1 |
| .editorconfig | 1 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| CLAUDE.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CODEOWNERS | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 3938 |
| .md | 612 |
| .sh | 43 |
| .bat | 25 |
| .txt | 20 |
| [no-ext] | 20 |
| .yml | 11 |
| .json | 8 |
| .docx | 7 |
| .yaml | 7 |
| .in | 5 |
| .toml | 3 |
| .html | 2 |
| .ini | 2 |
| .ps1 | 2 |
| .typed | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
