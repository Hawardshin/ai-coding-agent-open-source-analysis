# oracle-devrel/oracle-ai-developer-hub

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/oracle-devrel/oracle-ai-developer-hub |
| local path | sources/oracle-devrel__oracle-ai-developer-hub |
| HEAD | 4f1aadb |
| stars/forks | 4191 / 758 |
| language | Jupyter Notebook |
| license |  |
| pushedAt | 2026-06-17T16:57:00Z |
| trendScore / priorityScore | 167 / 526 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | apps/finance-ai-agent-demo/README.md, apps/rag-to-memory-systems-demo/README.md, apps/agent-reasoning/README.md |
| Database / data infrastructure | 500 | apps/finance-ai-agent-demo/README.md, apps/rag-to-memory-systems-demo/README.md, apps/agentic_rag/openwebui_functions/README.md |
| RAG / retrieval / knowledge | 500 | apps/finance-ai-agent-demo/README.md, apps/rag-to-memory-systems-demo/README.md, apps/agentic_rag/k8s/README.md |
| Frontend / app framework | 340 | apps/finance-ai-agent-demo/README.md, apps/agent-reasoning/interactive/README.md, apps/agent-reasoning/README.md |
| Cloud native / infrastructure | 313 | apps/finance-ai-agent-demo/README.md, apps/rag-to-memory-systems-demo/README.md, apps/agent-reasoning/README.md |
| Local LLM / inference | 202 | apps/agent-reasoning/benchmarks/README.md, apps/agent-reasoning/README.md, apps/agent-reasoning/tui/README.md |
| Data / ML platform | 142 | apps/finance-ai-agent-demo/README.md, apps/agent-reasoning/README.md, apps/agentic_rag/README.md |
| Developer tools / DX | 132 | apps/finance-ai-agent-demo/README.md, apps/rag-to-memory-systems-demo/README.md, apps/agent-reasoning/benchmarks/README.md |
| Observability / evaluation | 63 | apps/finance-ai-agent-demo/README.md, apps/agent-reasoning/benchmarks/README.md, apps/agent-reasoning/README.md |
| Security / supply chain | 59 | apps/finance-ai-agent-demo/README.md, apps/rag-to-memory-systems-demo/README.md, apps/agentic_rag/README.md |
| Coding agent / software automation | 31 | workshops/enterprise-data-agent-harness-workshop/README.md, workshops/soccer-analytics-agent/README.md, apps/limitless-workflow/AGENTS.md |
| MCP / agent interoperability | 21 | notebooks/agent_memory/README.md, build-paths/README.md, README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go, Java/Kotlin |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1861 |
| manifests | 40 |
| docs | 269 |
| tests | 188 |
| ci/ops | 73 |
| spec artifacts | 30 |
| agent instruction files | 8 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Oracle AI Developer Hub | Oracle AI Developer Hub / What You'll Find / 📱 **Apps** (`/apps`) / 📓 **Notebooks** (`/notebooks`) / 📚 **Guides** (`/guides`) / 🧠 **Agent Memory** (`/notebooks/agent_memory`) / 🎓 **Workshops** (`/workshops`) / 🤝 **Partners** (`/partners`) / Getting Started / Contributing | Oracle AI Developer Hub This repository contains technical resources to help AI Developers and Engineers build AI applications, agents, and systems using Oracle AI Database and OCI services alongside other key components of the AI/Agent stack. What You'll Find This repository is organized into several key areas 📱 Apps /apps Applications and reference implementations demonstrating how to build AI powered solutions with Oracle technologies. These complete, working examples showcase end to end implementations of AI applications, agents, and systems that leverage Oracle AI Database and OCI services. Each application includes source code, deployment configurations, and documentation to help deve |


## Key Files

### Manifests

- apps/finance-ai-agent-demo/README.md
- apps/rag-to-memory-systems-demo/README.md
- apps/agent-reasoning/benchmarks/README.md
- apps/agent-reasoning/interactive/README.md
- apps/agent-reasoning/README.md
- apps/agent-reasoning/tui/README.md
- apps/agentic_rag/k8s/README.md
- apps/agentic_rag/openwebui_functions/README.md
- apps/agentic_rag/README.md
- apps/oracle-database-java-agent-memory/README.md
- apps/oracle-database-vector-search/README.md
- apps/oracle-rag/README.md
- apps/supplychain-demand-planning-agent/app/README.md
- apps/supplychain-demand-planning-agent/README.md
- notebooks/agent_harness/README.md
- notebooks/agent_memory/README.md
- workshops/agent_memory_workshop/README.md
- workshops/enterprise-data-agent-harness-workshop/app/README.md
- workshops/enterprise-data-agent-harness-workshop/README.md
- workshops/from_rag_to_agents_workshop/README.md


### Spec / Docs / Prompt Artifacts

- apps/agent-reasoning/interactive/AGENTS.md
- apps/limitless-workflow/AGENTS.md
- apps/finance-ai-agent-demo/backend/requirements.txt
- apps/rag-to-memory-systems-demo/requirements.txt
- apps/agentic_rag/requirements.txt
- apps/oracle-database-java-agent-memory/requirements.txt
- apps/oracle-database-java-agent-memory/src/web/requirements.txt
- apps/oracle-rag/requirements.txt
- apps/supplychain-demand-planning-agent/app/backend/requirements.txt
- workshops/agent_memory_workshop/requirements.txt
- workshops/enterprise-data-agent-harness-workshop/app/backend/requirements.txt
- workshops/enterprise-data-agent-harness-workshop/requirements.txt
- workshops/from_rag_to_agents_workshop/requirements.txt
- workshops/information_retrieval_to_RAG/requirements.txt
- workshops/supplychain_demand_agent_workshop/app/backend/requirements.txt
- apps/limitless-workflow/requirements.txt
- apps/oci-generative-ai-jet-ui/service/python/requirements.txt
- apps/picooraclaw/oci-genai/requirements.txt
- workshops/semantic-search-github-issues/.devcontainer/requirements.txt
- workshops/soccer-analytics-agent/docs/ARCHITECTURE.md


### Agent Instruction Files

- apps/agent-reasoning/interactive/AGENTS.md
- apps/limitless-workflow/AGENTS.md
- workshops/soccer-analytics-agent/.claude/skills/soccer-agent-toolbelt/SKILL.md
- workshops/soccer-analytics-agent/.claude/skills/soccer-agent-toolbelt/tools/run_tool.py
- workshops/soccer-analytics-agent/.claude/skills/soccer-workshop-setup/scripts/01_start_oracle.sh
- workshops/soccer-analytics-agent/.claude/skills/soccer-workshop-setup/scripts/setup.sh
- workshops/soccer-analytics-agent/.claude/skills/soccer-workshop-setup/SKILL.md
- workshops/soccer-analytics-agent/.claude/skills/taste-skill/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| apps | 1378 |
| workshops | 347 |
| build-paths | 55 |
| notebooks | 50 |
| docs | 9 |
| .github | 8 |
| guides | 5 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| .prettierignore | 1 |
| .prettierrc | 1 |
| partners | 1 |
| pyproject.toml | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 547 |
| .md | 258 |
| .go | 197 |
| .tsx | 120 |
| .ipynb | 67 |
| .json | 66 |
| [no-ext] | 63 |
| .js | 60 |
| .tf | 58 |
| .jsx | 42 |
| .java | 41 |
| .txt | 39 |
| .yaml | 38 |
| .ts | 35 |
| .sh | 32 |
| .yml | 30 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
