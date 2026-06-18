# dbt-labs/dbt-mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/dbt-labs/dbt-mcp |
| local path | sources/dbt-labs__dbt-mcp |
| HEAD | 2a7af75 |
| stars/forks | 581 / 124 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T08:02:48Z |
| trendScore / priorityScore | 138 / 399 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 222 | examples/ag2_agent/README.md, examples/ai_sdk_agent/README.md, examples/aws_strands_agent/README.md |
| MCP / agent interoperability | 213 | examples/ag2_agent/README.md, examples/ai_sdk_agent/README.md, examples/aws_strands_agent/README.md |
| Database / data infrastructure | 48 | examples/ag2_agent/README.md, README.md, examples/ag2_agent/main_multiagent.py |
| Developer tools / DX | 38 | examples/ag2_agent/README.md, examples/ai_sdk_agent/README.md, examples/aws_strands_agent/README.md |
| Frontend / app framework | 18 | CLAUDE.md, ui/package.json, ui/vite.config.ts |
| Observability / evaluation | 9 | examples/aws_strands_agent/requirements.txt, src/dbt_mcp/prompts/admin_api/get_job_details.md, src/dbt_mcp/prompts/admin_api/get_job_run_artifact.md |
| Cloud native / infrastructure | 5 | examples/aws_strands_agent/requirements.txt, Dockerfile, pyproject.toml |
| Data / ML platform | 3 | examples/aws_strands_agent/dbt_data_scientist/tools/dbt_compile.py, src/dbt_mcp/prompts/mcp/server_instructions.md |
| Security / supply chain | 3 | README.md, CLAUDE.md, Dockerfile |
| Coding agent / software automation | 1 | README.md |
| RAG / retrieval / knowledge | 1 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 501 |
| manifests | 32 |
| docs | 182 |
| tests | 94 |
| ci/ops | 7 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | dbt MCP Server | dbt MCP Server / Experimental MCP Bundle / Feedback / Architecture / Tools / SQL / Semantic Layer / Discovery / dbt CLI / Admin API | dbt MCP Server ! OpenSSF Best Practices https //www.bestpractices.dev/projects/11137/badge https //www.bestpractices.dev/projects/11137 This MCP Model Context Protocol server provides various tools to interact with dbt. You can use this MCP server to provide AI agents with context of your project in dbt Core, dbt Fusion, and dbt Platform. Read our documentation here https //docs.getdbt.com/docs/dbt ai/about mcp to learn more. This https //docs.getdbt.com/blog/introducing dbt mcp server blog post provides more details for what is possible with the dbt MCP server. Experimental MCP Bundle We publish an experimental Model Context Protocol Bundle dbt mcp.mcpb with each release so that MCPB aware |


## Key Files

### Manifests

- examples/ag2_agent/README.md
- examples/ai_sdk_agent/README.md
- examples/aws_strands_agent/README.md
- examples/crewai_agent/README.md
- examples/google_adk_agent/README.md
- examples/langgraph_agent/README.md
- examples/openai_agent/README.md
- examples/pydantic_ai_agent/README.md
- examples/remote_mcp/README.md
- examples/openai_responses/README.md
- AGENTS.md
- README.md
- ui/README.md
- CLAUDE.md
- examples/ag2_agent/pyproject.toml
- examples/ai_sdk_agent/package.json
- examples/ai_sdk_agent/tsconfig.json
- examples/aws_strands_agent/requirements.txt
- examples/crewai_agent/pyproject.toml
- examples/google_adk_agent/pyproject.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- examples/aws_strands_agent/requirements.txt
- src/dbt_mcp/prompts/dbt_cli/args/sample.md
- src/dbt_mcp/prompts/dbt_cli/test.md
- src/dbt_mcp/prompts/discovery/get_test_details.md
- src/dbt_mcp/prompts/__init__.py
- src/dbt_mcp/prompts/admin_api/cancel_job_run.md
- src/dbt_mcp/prompts/admin_api/get_job_details.md
- src/dbt_mcp/prompts/admin_api/get_job_run_artifact.md
- src/dbt_mcp/prompts/admin_api/get_job_run_details.md
- src/dbt_mcp/prompts/admin_api/get_job_run_error.md
- src/dbt_mcp/prompts/admin_api/get_project_details.md
- src/dbt_mcp/prompts/admin_api/list_job_run_artifacts.md
- src/dbt_mcp/prompts/admin_api/list_jobs_runs.md
- src/dbt_mcp/prompts/admin_api/list_jobs.md
- src/dbt_mcp/prompts/admin_api/list_projects.md
- src/dbt_mcp/prompts/admin_api/retry_job_run.md
- src/dbt_mcp/prompts/admin_api/trigger_job_run.md
- src/dbt_mcp/prompts/dbt_cli/args/full_refresh.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- src/dbt_mcp/prompts/dbt_cli/args/sample.md
- src/dbt_mcp/prompts/dbt_cli/test.md
- src/dbt_mcp/prompts/discovery/get_test_details.md
- src/dbt_mcp/prompts/__init__.py
- src/dbt_mcp/prompts/admin_api/cancel_job_run.md
- src/dbt_mcp/prompts/admin_api/get_job_details.md
- src/dbt_mcp/prompts/admin_api/get_job_run_artifact.md
- src/dbt_mcp/prompts/admin_api/get_job_run_details.md
- src/dbt_mcp/prompts/admin_api/get_job_run_error.md
- src/dbt_mcp/prompts/admin_api/get_project_details.md
- src/dbt_mcp/prompts/admin_api/list_job_run_artifacts.md
- src/dbt_mcp/prompts/admin_api/list_jobs_runs.md
- src/dbt_mcp/prompts/admin_api/list_jobs.md


## Top Directories

| dir | count |
| --- | --- |
| src | 207 |
| tests | 93 |
| .changes | 82 |
| examples | 62 |
| ui | 19 |
| .github | 13 |
| .vscode | 2 |
| scripts | 2 |
| .changie.yaml | 1 |
| .claude | 1 |
| .dockerignore | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| .mcpbignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 236 |
| .md | 181 |
| [no-ext] | 21 |
| .gql | 11 |
| .yml | 10 |
| .json | 9 |
| .toml | 9 |
| .yaml | 6 |
| .ts | 5 |
| .css | 2 |
| .example | 2 |
| .svg | 2 |
| .tsx | 2 |
| .d2 | 1 |
| .html | 1 |
| .js | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
