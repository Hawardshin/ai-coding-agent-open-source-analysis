# MemTensor/MemOS Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Self-evolving memory OS for LLM & AI Agents: ultra-persistent memory, hybrid-retrieval, and cross-task skill reuse, with 35.24% token savings

## 요약

- 조사 단위: `sources/MemTensor__MemOS` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,794 files, 394 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/api/test_mcp_serve.py, src/memos/api/mcp_serve.py, examples/mem_mcp/simple_fastmcp_client.py이고, 의존성 단서는 openai, mcp, langchain, langgraph, fastapi, torch, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | MemTensor/MemOS |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 9913 |
| Forks | 904 |
| License | Apache-2.0 |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/MemTensor__MemOS](../../../../sources/MemTensor__MemOS) |
| Existing report | [reports/llm-wiki/repositories/MemTensor__MemOS.md](../../../llm-wiki/repositories/MemTensor__MemOS.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1794 / 394 |
| Max observed depth | 10 |
| Top directories | .claude, .codex, .github, apps, deploy, docker, docs, evaluation, examples, packages, scripts, src, tests |
| Top extensions | .ts: 643, .py: 596, .md: 226, .tsx: 84, (none): 58, .json: 38, .svg: 22, .yaml: 20, .sh: 17, .html: 13, .sql: 12, .cjs: 10 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| apps/openwork-memos-integration | apps workspace | 64 |
| src | source boundary | 63 |
| tests | validation surface | 50 |
| docs | documentation surface | 45 |
| packages/memos-core | packages workspace | 16 |
| apps/memos-local-plugin | apps workspace | 11 |
| apps/memos-local-openclaw | apps workspace | 5 |
| examples/mem_mcp | examples workspace | 2 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| apps/MemOS-Cloud-OpenClaw-Plugin | apps workspace | 1 |
| deploy | deployment surface | 1 |
| docker | documentation surface | 1 |
| evaluation | top-level component | 1 |
| examples | top-level component | 1 |
| examples/data | examples workspace | 1 |
| examples/mem_cube | examples workspace | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install | make install |
| utility | Makefile | clean | make clean |
| test | Makefile | test | make test |
| test | Makefile | test-report | make test-report |
| test | Makefile | test-cov | make test-cov |
| quality | Makefile | format | make format |
| utility | Makefile | pre_commit | make pre_commit |
| serve-dev | Makefile | serve | make serve |
| utility | Makefile | openapi | make openapi |
| utility | pyproject.toml | memos | memos |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | langchain, langgraph |
| vectorStores | qdrant, milvus |
| modelRuntime | torch, transformers, ollama, llama |
| webRuntime | fastapi |
| developerSurface | none |
| observability | prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/api/test_mcp_serve.py](../../../../sources/MemTensor__MemOS/tests/api/test_mcp_serve.py) | mcp signal |
| mcp | [src/memos/api/mcp_serve.py](../../../../sources/MemTensor__MemOS/src/memos/api/mcp_serve.py) | mcp signal |
| mcp | [examples/mem_mcp/simple_fastmcp_client.py](../../../../sources/MemTensor__MemOS/examples/mem_mcp/simple_fastmcp_client.py) | mcp signal |
| mcp | [examples/mem_mcp/simple_fastmcp_serve.py](../../../../sources/MemTensor__MemOS/examples/mem_mcp/simple_fastmcp_serve.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/MemTensor__MemOS/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/memos/templates/skill_mem_prompt.py](../../../../sources/MemTensor__MemOS/src/memos/templates/skill_mem_prompt.py) | agentRuntime signal |
| agentRuntime | [src/memos/templates/tool_mem_prompts.py](../../../../sources/MemTensor__MemOS/src/memos/templates/tool_mem_prompts.py) | agentRuntime signal |
| agentRuntime | [src/memos/plugins/hook_defs.py](../../../../sources/MemTensor__MemOS/src/memos/plugins/hook_defs.py) | agentRuntime signal |
| entrypoints | [src/memos/mem_os/main.py](../../../../sources/MemTensor__MemOS/src/memos/mem_os/main.py) | entrypoints signal |
| entrypoints | [packages/memos-schema/src/index.ts](../../../../sources/MemTensor__MemOS/packages/memos-schema/src/index.ts) | entrypoints signal |
| entrypoints | [packages/memos-core/src/index.ts](../../../../sources/MemTensor__MemOS/packages/memos-core/src/index.ts) | entrypoints signal |
| entrypoints | [packages/memos-core/src/viewer/server.ts](../../../../sources/MemTensor__MemOS/packages/memos-core/src/viewer/server.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 137 | [src/memos/mem_os/main.py](../../../../sources/MemTensor__MemOS/src/memos/mem_os/main.py)<br>[packages/memos-schema/src/index.ts](../../../../sources/MemTensor__MemOS/packages/memos-schema/src/index.ts)<br>[packages/memos-core/src/index.ts](../../../../sources/MemTensor__MemOS/packages/memos-core/src/index.ts)<br>[packages/memos-core/src/viewer/server.ts](../../../../sources/MemTensor__MemOS/packages/memos-core/src/viewer/server.ts)<br>[packages/memos-core/src/hub/server.ts](../../../../sources/MemTensor__MemOS/packages/memos-core/src/hub/server.ts)<br>[packages/adapter-base/src/index.ts](../../../../sources/MemTensor__MemOS/packages/adapter-base/src/index.ts)<br>[apps/openwork-memos-integration/packages/shared/src/index.ts](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/packages/shared/src/index.ts)<br>[apps/openwork-memos-integration/apps/desktop/src/vite-env.d.ts](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/apps/desktop/src/vite-env.d.ts) |
| agentRuntime | 197 | [AGENTS.md](../../../../sources/MemTensor__MemOS/AGENTS.md)<br>[src/memos/templates/skill_mem_prompt.py](../../../../sources/MemTensor__MemOS/src/memos/templates/skill_mem_prompt.py)<br>[src/memos/templates/tool_mem_prompts.py](../../../../sources/MemTensor__MemOS/src/memos/templates/tool_mem_prompts.py)<br>[src/memos/plugins/hook_defs.py](../../../../sources/MemTensor__MemOS/src/memos/plugins/hook_defs.py)<br>[src/memos/plugins/hooks.py](../../../../sources/MemTensor__MemOS/src/memos/plugins/hooks.py)<br>[src/memos/mem_scheduler/task_schedule_modules/context.py](../../../../sources/MemTensor__MemOS/src/memos/mem_scheduler/task_schedule_modules/context.py)<br>[src/memos/mem_scheduler/task_schedule_modules/handlers/memory_update_handler.py](../../../../sources/MemTensor__MemOS/src/memos/mem_scheduler/task_schedule_modules/handlers/memory_update_handler.py)<br>[src/memos/mem_scheduler/memory_manage_modules/__init__.py](../../../../sources/MemTensor__MemOS/src/memos/mem_scheduler/memory_manage_modules/__init__.py) |
| mcp | 8 | [tests/api/test_mcp_serve.py](../../../../sources/MemTensor__MemOS/tests/api/test_mcp_serve.py)<br>[src/memos/api/mcp_serve.py](../../../../sources/MemTensor__MemOS/src/memos/api/mcp_serve.py)<br>[examples/mem_mcp/simple_fastmcp_client.py](../../../../sources/MemTensor__MemOS/examples/mem_mcp/simple_fastmcp_client.py)<br>[examples/mem_mcp/simple_fastmcp_serve.py](../../../../sources/MemTensor__MemOS/examples/mem_mcp/simple_fastmcp_serve.py)<br>[docs/en/open_source/modules/mos/memos_mcp.md](../../../../sources/MemTensor__MemOS/docs/en/open_source/modules/mos/memos_mcp.md)<br>[docs/en/open_source/best_practice/mcp_for_cozespace_and_tools.md](../../../../sources/MemTensor__MemOS/docs/en/open_source/best_practice/mcp_for_cozespace_and_tools.md)<br>[docs/cn/open_source/modules/mos/memos_mcp.md](../../../../sources/MemTensor__MemOS/docs/cn/open_source/modules/mos/memos_mcp.md)<br>[docs/cn/open_source/best_practice/mcp_for_cozespace_and_tools.md](../../../../sources/MemTensor__MemOS/docs/cn/open_source/best_practice/mcp_for_cozespace_and_tools.md) |
| retrieval | 325 | [tests/mem_reader/test_coarse_memory_type.py](../../../../sources/MemTensor__MemOS/tests/mem_reader/test_coarse_memory_type.py)<br>[tests/mem_reader/test_memory.py](../../../../sources/MemTensor__MemOS/tests/mem_reader/test_memory.py)<br>[tests/graph_dbs/__init__.py](../../../../sources/MemTensor__MemOS/tests/graph_dbs/__init__.py)<br>[tests/graph_dbs/graph_dbs.py](../../../../sources/MemTensor__MemOS/tests/graph_dbs/graph_dbs.py)<br>[tests/graph_dbs/test_neo4j_vector_search.py](../../../../sources/MemTensor__MemOS/tests/graph_dbs/test_neo4j_vector_search.py)<br>[tests/graph_dbs/test_search_return_fields.py](../../../../sources/MemTensor__MemOS/tests/graph_dbs/test_search_return_fields.py)<br>[tests/configs/test_memory.py](../../../../sources/MemTensor__MemOS/tests/configs/test_memory.py)<br>[tests/api/test_memory_handler_delete.py](../../../../sources/MemTensor__MemOS/tests/api/test_memory_handler_delete.py) |
| spec | 15 | [docs/en/open_source/home/architecture.md](../../../../sources/MemTensor__MemOS/docs/en/open_source/home/architecture.md)<br>[docs/en/open_source/best_practice/memory_structure_design.md](../../../../sources/MemTensor__MemOS/docs/en/open_source/best_practice/memory_structure_design.md)<br>[docs/cn/open_source/home/architecture.md](../../../../sources/MemTensor__MemOS/docs/cn/open_source/home/architecture.md)<br>[docs/cn/open_source/best_practice/memory_structure_design.md](../../../../sources/MemTensor__MemOS/docs/cn/open_source/best_practice/memory_structure_design.md)<br>[docker/requirements-full.txt](../../../../sources/MemTensor__MemOS/docker/requirements-full.txt)<br>[docker/requirements.txt](../../../../sources/MemTensor__MemOS/docker/requirements.txt)<br>[apps/openwork-memos-integration/apps/desktop/e2e/specs/execution.spec.ts](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/apps/desktop/e2e/specs/execution.spec.ts)<br>[apps/openwork-memos-integration/apps/desktop/e2e/specs/home.spec.ts](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/apps/desktop/e2e/specs/home.spec.ts) |
| eval | 421 | [tests/__init__.py](../../../../sources/MemTensor__MemOS/tests/__init__.py)<br>[tests/test_add_stage_logging.py](../../../../sources/MemTensor__MemOS/tests/test_add_stage_logging.py)<br>[tests/test_cli.py](../../../../sources/MemTensor__MemOS/tests/test_cli.py)<br>[tests/test_deprecation.py](../../../../sources/MemTensor__MemOS/tests/test_deprecation.py)<br>[tests/test_hello_world.py](../../../../sources/MemTensor__MemOS/tests/test_hello_world.py)<br>[tests/test_log.py](../../../../sources/MemTensor__MemOS/tests/test_log.py)<br>[tests/test_settings.py](../../../../sources/MemTensor__MemOS/tests/test_settings.py)<br>[tests/test_utils_timing.py](../../../../sources/MemTensor__MemOS/tests/test_utils_timing.py) |
| security | 22 | [src/memos/api/middleware/auth.py](../../../../sources/MemTensor__MemOS/src/memos/api/middleware/auth.py)<br>[packages/memos-core/src/hub/auth.ts](../../../../sources/MemTensor__MemOS/packages/memos-core/src/hub/auth.ts)<br>[apps/openwork-memos-integration/SECURITY.md](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/SECURITY.md)<br>[apps/openwork-memos-integration/packages/shared/src/types/auth.ts](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/packages/shared/src/types/auth.ts)<br>[apps/openwork-memos-integration/packages/shared/src/types/permission.ts](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/packages/shared/src/types/permission.ts)<br>[apps/openwork-memos-integration/apps/desktop/src/main/permission-api.ts](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/apps/desktop/src/main/permission-api.ts)<br>[apps/openwork-memos-integration/apps/desktop/skills/file-permission/package.json](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/apps/desktop/skills/file-permission/package.json)<br>[apps/openwork-memos-integration/apps/desktop/skills/file-permission/tsconfig.json](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/apps/desktop/skills/file-permission/tsconfig.json) |
| ci | 5 | [.github/workflows/memos-local-plugin-publish.yml](../../../../sources/MemTensor__MemOS/.github/workflows/memos-local-plugin-publish.yml)<br>[.github/workflows/openclaw-plugin-publish.yml](../../../../sources/MemTensor__MemOS/.github/workflows/openclaw-plugin-publish.yml)<br>[.github/workflows/python-release.yml](../../../../sources/MemTensor__MemOS/.github/workflows/python-release.yml)<br>[.github/workflows/python-tests.yml](../../../../sources/MemTensor__MemOS/.github/workflows/python-tests.yml)<br>[.github/workflows/stale.yml](../../../../sources/MemTensor__MemOS/.github/workflows/stale.yml) |
| container | 16 | [Dockerfile](../../../../sources/MemTensor__MemOS/Dockerfile)<br>[docker/docker-compose.yml](../../../../sources/MemTensor__MemOS/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/MemTensor__MemOS/docker/Dockerfile)<br>[docker/Dockerfile.krolik](../../../../sources/MemTensor__MemOS/docker/Dockerfile.krolik)<br>[deploy/helm/Chart.yaml](../../../../sources/MemTensor__MemOS/deploy/helm/Chart.yaml)<br>[deploy/helm/README.md](../../../../sources/MemTensor__MemOS/deploy/helm/README.md)<br>[deploy/helm/values-example.yaml](../../../../sources/MemTensor__MemOS/deploy/helm/values-example.yaml)<br>[deploy/helm/values.yaml](../../../../sources/MemTensor__MemOS/deploy/helm/values.yaml) |
| instruction | 8 | [AGENTS.md](../../../../sources/MemTensor__MemOS/AGENTS.md)<br>[CLAUDE.md](../../../../sources/MemTensor__MemOS/CLAUDE.md)<br>[apps/openwork-memos-integration/CLAUDE.md](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/CLAUDE.md)<br>[.codex/agents/backend-dev.toml](../../../../sources/MemTensor__MemOS/.codex/agents/backend-dev.toml)<br>[.codex/agents/code-reviewer.toml](../../../../sources/MemTensor__MemOS/.codex/agents/code-reviewer.toml)<br>[.codex/agents/design-reviewer.toml](../../../../sources/MemTensor__MemOS/.codex/agents/design-reviewer.toml)<br>[.codex/agents/explorer.toml](../../../../sources/MemTensor__MemOS/.codex/agents/explorer.toml)<br>[.codex/agents/integration-tester.toml](../../../../sources/MemTensor__MemOS/.codex/agents/integration-tester.toml) |
| docs | 200 | [README.md](../../../../sources/MemTensor__MemOS/README.md)<br>[examples/README.md](../../../../sources/MemTensor__MemOS/examples/README.md)<br>[examples/mem_cube/_deprecated/README.md](../../../../sources/MemTensor__MemOS/examples/mem_cube/_deprecated/README.md)<br>[examples/data/mem_cube_2/README.md](../../../../sources/MemTensor__MemOS/examples/data/mem_cube_2/README.md)<br>[docs/en/openclaw/changes.md](../../../../sources/MemTensor__MemOS/docs/en/openclaw/changes.md)<br>[docs/en/openclaw/guide.md](../../../../sources/MemTensor__MemOS/docs/en/openclaw/guide.md)<br>[docs/en/openclaw/hermes_local_plugin.md](../../../../sources/MemTensor__MemOS/docs/en/openclaw/hermes_local_plugin.md)<br>[docs/en/openclaw/local_plugin.md](../../../../sources/MemTensor__MemOS/docs/en/openclaw/local_plugin.md) |
| config | 23 | [Makefile](../../../../sources/MemTensor__MemOS/Makefile)<br>[poetry.lock](../../../../sources/MemTensor__MemOS/poetry.lock)<br>[pyproject.toml](../../../../sources/MemTensor__MemOS/pyproject.toml)<br>[uv.lock](../../../../sources/MemTensor__MemOS/uv.lock)<br>[docker/requirements-full.txt](../../../../sources/MemTensor__MemOS/docker/requirements-full.txt)<br>[docker/requirements.txt](../../../../sources/MemTensor__MemOS/docker/requirements.txt)<br>[apps/openwork-memos-integration/package.json](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/package.json)<br>[apps/openwork-memos-integration/pnpm-workspace.yaml](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/pnpm-workspace.yaml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 421 | [tests/__init__.py](../../../../sources/MemTensor__MemOS/tests/__init__.py)<br>[tests/test_add_stage_logging.py](../../../../sources/MemTensor__MemOS/tests/test_add_stage_logging.py)<br>[tests/test_cli.py](../../../../sources/MemTensor__MemOS/tests/test_cli.py)<br>[tests/test_deprecation.py](../../../../sources/MemTensor__MemOS/tests/test_deprecation.py)<br>[tests/test_hello_world.py](../../../../sources/MemTensor__MemOS/tests/test_hello_world.py)<br>[tests/test_log.py](../../../../sources/MemTensor__MemOS/tests/test_log.py) |
| CI workflows | 5 | [.github/workflows/memos-local-plugin-publish.yml](../../../../sources/MemTensor__MemOS/.github/workflows/memos-local-plugin-publish.yml)<br>[.github/workflows/openclaw-plugin-publish.yml](../../../../sources/MemTensor__MemOS/.github/workflows/openclaw-plugin-publish.yml)<br>[.github/workflows/python-release.yml](../../../../sources/MemTensor__MemOS/.github/workflows/python-release.yml)<br>[.github/workflows/python-tests.yml](../../../../sources/MemTensor__MemOS/.github/workflows/python-tests.yml)<br>[.github/workflows/stale.yml](../../../../sources/MemTensor__MemOS/.github/workflows/stale.yml) |
| Containers / deploy | 16 | [Dockerfile](../../../../sources/MemTensor__MemOS/Dockerfile)<br>[docker/docker-compose.yml](../../../../sources/MemTensor__MemOS/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/MemTensor__MemOS/docker/Dockerfile)<br>[docker/Dockerfile.krolik](../../../../sources/MemTensor__MemOS/docker/Dockerfile.krolik)<br>[deploy/helm/Chart.yaml](../../../../sources/MemTensor__MemOS/deploy/helm/Chart.yaml)<br>[deploy/helm/README.md](../../../../sources/MemTensor__MemOS/deploy/helm/README.md) |
| Security / policy | 22 | [src/memos/api/middleware/auth.py](../../../../sources/MemTensor__MemOS/src/memos/api/middleware/auth.py)<br>[packages/memos-core/src/hub/auth.ts](../../../../sources/MemTensor__MemOS/packages/memos-core/src/hub/auth.ts)<br>[apps/openwork-memos-integration/SECURITY.md](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/SECURITY.md)<br>[apps/openwork-memos-integration/packages/shared/src/types/auth.ts](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/packages/shared/src/types/auth.ts)<br>[apps/openwork-memos-integration/packages/shared/src/types/permission.ts](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/packages/shared/src/types/permission.ts)<br>[apps/openwork-memos-integration/apps/desktop/src/main/permission-api.ts](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/apps/desktop/src/main/permission-api.ts) |
| Agent instructions | 8 | [AGENTS.md](../../../../sources/MemTensor__MemOS/AGENTS.md)<br>[CLAUDE.md](../../../../sources/MemTensor__MemOS/CLAUDE.md)<br>[apps/openwork-memos-integration/CLAUDE.md](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/CLAUDE.md)<br>[.codex/agents/backend-dev.toml](../../../../sources/MemTensor__MemOS/.codex/agents/backend-dev.toml)<br>[.codex/agents/code-reviewer.toml](../../../../sources/MemTensor__MemOS/.codex/agents/code-reviewer.toml)<br>[.codex/agents/design-reviewer.toml](../../../../sources/MemTensor__MemOS/.codex/agents/design-reviewer.toml) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/api/test_mcp_serve.py`, `src/memos/api/mcp_serve.py`, `examples/mem_mcp/simple_fastmcp_client.py`.
2. Trace execution through entrypoints: `src/memos/mem_os/main.py`, `packages/memos-schema/src/index.ts`, `packages/memos-core/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `src/memos/templates/skill_mem_prompt.py`, `src/memos/templates/tool_mem_prompts.py`.
4. Inspect retrieval/memory/indexing through: `tests/mem_reader/test_coarse_memory_type.py`, `tests/mem_reader/test_memory.py`, `tests/graph_dbs/__init__.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/test_add_stage_logging.py`, `tests/test_cli.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Self evolving memory OS for LLM & AI Agents ultra persistent memory, hybrid retrieval, and cross task skill reuse, with . 핵심 구조 신호는 TypeScript, pyproject.toml, Dockerfile, Makefile, README.md, AGENTS.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
