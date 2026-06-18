# google/adk-python

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/google/adk-python |
| local path | sources/google__adk-python |
| HEAD | c303c62 |
| stars/forks | 20158 / 3582 |
| language | Python |
| license |  |
| pushedAt | 2026-06-18T00:23:25Z |
| trendScore / priorityScore | 210 / 513 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | contributing/samples/adk_team/adk_answering_agent/README.md, contributing/samples/adk_team/adk_issue_monitoring_agent/README.md, contributing/samples/adk_team/adk_knowledge_agent/README.md |
| Security / supply chain | 164 | contributing/samples/adk_team/adk_issue_monitoring_agent/README.md, contributing/samples/adk_team/adk_stale_agent/README.md, contributing/samples/integrations/integration_connector_euc_agent/README.md |
| Database / data infrastructure | 110 | contributing/samples/integrations/data_agent/README.md, contributing/samples/integrations/spanner_rag_agent/README.md, contributing/samples/integrations/toolbox_agent/README.md |
| MCP / agent interoperability | 102 | contributing/samples/adk_team/adk_triaging_agent/README.md, contributing/samples/integrations/agent_registry_agent/README.md, contributing/samples/integrations/api_registry_agent/README.md |
| Developer tools / DX | 85 | contributing/samples/adk_team/adk_answering_agent/README.md, contributing/samples/adk_team/adk_pr_triaging_agent/README.md, contributing/samples/adk_team/adk_triaging_agent/README.md |
| Data / ML platform | 43 | contributing/samples/adk_team/adk_pr_triaging_agent/README.md, contributing/samples/adk_team/adk_triaging_agent/README.md, contributing/samples/integrations/bigquery_mcp/README.md |
| RAG / retrieval / knowledge | 34 | contributing/samples/adk_team/adk_answering_agent/README.md, contributing/samples/integrations/files_retrieval_agent/README.md, contributing/samples/integrations/spanner_rag_agent/README.md |
| Observability / evaluation | 30 | contributing/samples/adk_team/adk_issue_monitoring_agent/README.md, contributing/samples/adk_team/adk_triaging_agent/README.md, contributing/samples/integrations/spanner_rag_agent/README.md |
| Cloud native / infrastructure | 16 | contributing/samples/models/hello_world_apigeellm/README.md, contributing/samples/a2a/a2a_root/README.md, contributing/samples/context_management/postgres_session_service/README.md |
| Local LLM / inference | 11 | contributing/samples/models/hello_world_ollama/README.md |
| Coding agent / software automation | 1 | contributing/samples/patterns/workflow_triage/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2142 |
| manifests | 40 |
| docs | 230 |
| tests | 668 |
| ci/ops | 34 |
| spec artifacts | 8 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Agent Development Kit (ADK) 2.0 | Agent Development Kit (ADK) 2.0 / 🔥 What's New in 2.0 / 🚀 Installation / Quick Start / Agent / Workflow / Run Locally / Interactive CLI / Web UI (supports multi-agent directories or pointing directly to a single agent folder) / 📚 Documentation | Agent Development Kit ADK 2.0 ! License https //img.shields.io/badge/License Apache 2.0 blue.svg LICENSE ! PyPI version https //img.shields.io/pypi/v/google adk.svg https //pypi.org/project/google adk/ ! Python versions https //img.shields.io/pypi/pyversions/google adk.svg https //pypi.org/project/google adk/ ! PyPI downloads https //static.pepy.tech/badge/google adk/month https //pepy.tech/project/google adk ! Unit Tests https //github.com/google/adk python/actions/workflows/python unit tests.yml/badge.svg https //github.com/google/adk python/actions/workflows/python unit tests.yml ! Docs https //img.shields.io/badge/docs latest blue.svg https //google.github.io/adk docs/ <h2 align="center" |


## Key Files

### Manifests

- contributing/samples/adk_team/adk_answering_agent/README.md
- contributing/samples/adk_team/adk_issue_monitoring_agent/README.md
- contributing/samples/adk_team/adk_knowledge_agent/README.md
- contributing/samples/adk_team/adk_pr_triaging_agent/README.md
- contributing/samples/adk_team/adk_stale_agent/README.md
- contributing/samples/adk_team/adk_triaging_agent/README.md
- contributing/samples/context_management/session_state_agent/README.md
- contributing/samples/core/empty_agent/README.md
- contributing/samples/integrations/agent_registry_agent/README.md
- contributing/samples/integrations/antigravity_agent/README.md
- contributing/samples/integrations/api_registry_agent/README.md
- contributing/samples/integrations/application_integration_agent/README.md
- contributing/samples/integrations/bigquery_mcp/README.md
- contributing/samples/integrations/data_agent/README.md
- contributing/samples/integrations/files_retrieval_agent/README.md
- contributing/samples/integrations/integration_connector_euc_agent/README.md
- contributing/samples/integrations/jira_agent/README.md
- contributing/samples/integrations/langchain_youtube_search_agent/README.md
- contributing/samples/integrations/oauth_calendar_agent/README.md
- contributing/samples/integrations/oauth2_client_credentials/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- contributing/samples/adk_team/adk_knowledge_agent/requirements.txt
- contributing/samples/integrations/authn-adk-all-in-one/adk_agents/requirements.txt
- contributing/samples/integrations/gcp_auth/client/requirements.txt
- contributing/samples/integrations/langchain_youtube_search_agent/requirements.txt
- contributing/samples/integrations/authn-adk-all-in-one/requirements.txt
- contributing/samples/multimodal/computer_use/requirements.txt
- docs/guides/agents/llm_agent/task.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| src | 747 |
| contributing | 697 |
| tests | 588 |
| .agents | 49 |
| .github | 33 |
| docs | 12 |
| scripts | 3 |
| .gemini | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| AGENTS.md | 1 |
| CHANGELOG.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 1570 |
| .md | 230 |
| .json | 116 |
| .js | 95 |
| .yaml | 40 |
| .yml | 26 |
| .txt | 17 |
| [no-ext] | 11 |
| .tf | 7 |
| .html | 5 |
| .db | 3 |
| .sh | 3 |
| .svg | 3 |
| .css | 2 |
| .env | 2 |
| .ini | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
