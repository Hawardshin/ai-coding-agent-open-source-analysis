# oracle/mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/oracle/mcp |
| local path | sources/oracle__mcp |
| HEAD | 36d4ea0 |
| stars/forks | 382 / 120 |
| language | Python |
| license |  |
| pushedAt | 2026-06-16T19:50:40Z |
| trendScore / priorityScore | 135 / 423 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | src/dbtools-mcp-server/README.md, src/mysql-mcp-server/README.md, src/oci-api-mcp-server/README.md |
| Database / data infrastructure | 297 | src/dbtools-mcp-server/README.md, src/mysql-mcp-server/README.md, src/oci-database-mcp-server/README.md |
| Security / supply chain | 203 | src/dbtools-mcp-server/README.md, src/mysql-mcp-server/README.md, src/oci-api-mcp-server/README.md |
| Developer tools / DX | 124 | src/dbtools-mcp-server/README.md, src/mysql-mcp-server/README.md, src/oci-api-mcp-server/README.md |
| Observability / evaluation | 113 | src/oci-full-stack-disaster-recovery-mcp-server/README.md, src/oci-monitoring-mcp-server/README.md, src/oracle-db-mcp-java-toolkit/README.md |
| Cloud native / infrastructure | 69 | src/oci-database-mcp-server/README.md, src/oci-iot-mcp-server/README.md, src/oci-pricing-mcp-server/README.md |
| AI agent / orchestration | 39 | src/oci-cloud-mcp-server/README.md, src/oci-compute-instance-agent-mcp-server/README.md, src/oci-iot-mcp-server/README.md |
| RAG / retrieval / knowledge | 30 | src/dbtools-mcp-server/README.md, src/mysql-mcp-server/README.md, src/oracle-db-mcp-java-toolkit/README.md |
| Coding agent / software automation | 25 | src/oci-iot-mcp-server/README.md, src/oci-support-mcp-server/README.md, src/oracle-db-mcp-java-toolkit/README.md |
| Local LLM / inference | 18 | tests/README.md, README.md, tests/pyproject.toml |
| Data / ML platform | 2 | src/dbtools-mcp-server/README.md, src/mysql-mcp-server/oracle/mysql_mcp_server/tests/test_mysql_mcp_server.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python, Java/Kotlin |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 506 |
| manifests | 40 |
| docs | 74 |
| tests | 148 |
| ci/ops | 6 |
| spec artifacts | 14 |
| agent instruction files | 9 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Oracle MCP Server Repository | Oracle MCP Server Repository / What is MCP? / Project Scope / Prerequisites / Quick Start / Running with podman / Installing podman / Building the Container Image / MCP Client Configuration / Authentication | Oracle MCP Server Repository Repository containing reference implementations of MCP Model Context Protocol servers for managing and interacting with Oracle products. Each MCP server under src/ may be written in a different programming language, demonstrating MCP’s language agnostic approach. What is MCP? The Model Context Protocol MCP enables standardized, language agnostic machine to machine workflows across data, models, and cloud resources. MCP servers implement specific tool suites, exposing them to MCP compatible clients. Project Scope Proof of concept/Reference implementations This repository is not intended for production use; servers are provided as reference and for exploration, pro |


## Key Files

### Manifests

- src/dbtools-mcp-server/README.md
- src/mysql-mcp-server/README.md
- src/oci-api-mcp-server/README.md
- src/oci-cloud-guard-mcp-server/README.md
- src/oci-cloud-mcp-server/README.md
- src/oci-compute-instance-agent-mcp-server/README.md
- src/oci-compute-mcp-server/README.md
- src/oci-database-mcp-server/README.md
- src/oci-faaas-mcp-server/README.md
- src/oci-full-stack-disaster-recovery-mcp-server/README.md
- src/oci-identity-mcp-server/README.md
- src/oci-iot-mcp-server/README.md
- src/oci-limits-mcp-server/README.md
- src/oci-load-balancer-mcp-server/README.md
- src/oci-logging-mcp-server/README.md
- src/oci-migration-mcp-server/README.md
- src/oci-monitoring-mcp-server/README.md
- src/oci-network-load-balancer-mcp-server/README.md
- src/oci-networking-mcp-server/README.md
- src/oci-object-storage-mcp-server/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- src/dbtools-mcp-server/requirements.txt
- src/mysql-mcp-server/requirements.txt
- src/oci-full-stack-disaster-recovery-mcp-server/requirements.txt
- src/oracle-db-doc-mcp-server/requirements.txt
- requirements.txt
- src/oci-full-stack-disaster-recovery-mcp-server/oracle/oci_fsdr_mcp_server/data/prompts/add_members.md
- src/oci-full-stack-disaster-recovery-mcp-server/oracle/oci_fsdr_mcp_server/data/prompts/check_dr_status.md
- src/oci-full-stack-disaster-recovery-mcp-server/oracle/oci_fsdr_mcp_server/data/prompts/plan_refresh_workflow.md
- src/oci-full-stack-disaster-recovery-mcp-server/oracle/oci_fsdr_mcp_server/data/prompts/run_drill.md
- src/oci-full-stack-disaster-recovery-mcp-server/oracle/oci_fsdr_mcp_server/data/prompts/run_failover.md
- src/oci-full-stack-disaster-recovery-mcp-server/oracle/oci_fsdr_mcp_server/data/prompts/run_switchover.md
- src/oci-full-stack-disaster-recovery-mcp-server/oracle/oci_fsdr_mcp_server/data/prompts/setup_drpg_pair.md
- src/oci-recovery-mcp-server/oracle/oci_recovery_mcp_server/data/prompts/oci_recovery_service_dashboard.txt


### Agent Instruction Files

- AGENTS.md
- src/oci-full-stack-disaster-recovery-mcp-server/oracle/oci_fsdr_mcp_server/data/prompts/add_members.md
- src/oci-full-stack-disaster-recovery-mcp-server/oracle/oci_fsdr_mcp_server/data/prompts/check_dr_status.md
- src/oci-full-stack-disaster-recovery-mcp-server/oracle/oci_fsdr_mcp_server/data/prompts/plan_refresh_workflow.md
- src/oci-full-stack-disaster-recovery-mcp-server/oracle/oci_fsdr_mcp_server/data/prompts/run_drill.md
- src/oci-full-stack-disaster-recovery-mcp-server/oracle/oci_fsdr_mcp_server/data/prompts/run_failover.md
- src/oci-full-stack-disaster-recovery-mcp-server/oracle/oci_fsdr_mcp_server/data/prompts/run_switchover.md
- src/oci-full-stack-disaster-recovery-mcp-server/oracle/oci_fsdr_mcp_server/data/prompts/setup_drpg_pair.md
- src/oci-recovery-mcp-server/oracle/oci_recovery_mcp_server/data/prompts/oci_recovery_service_dashboard.txt


## Top Directories

| dir | count |
| --- | --- |
| src | 407 |
| tests | 76 |
| scripts | 5 |
| .github | 4 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| BEST_PRACTICES.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CODEOWNERS | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE.txt | 1 |
| Makefile | 1 |
| oracle.svg | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 264 |
| .md | 74 |
| [no-ext] | 49 |
| .txt | 38 |
| .toml | 30 |
| .java | 23 |
| .feature | 17 |
| .json | 3 |
| .yml | 3 |
| .svg | 2 |
| .example | 1 |
| .template | 1 |
| .xml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
