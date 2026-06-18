# mem0ai/mem0 Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 1671 files, 340 directories.

## 요약

- 조사 단위: `sources/mem0ai__mem0` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,671 files, 340 directories, depth score 138, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=openmemory/api/tests/test_mcp_server.py, openmemory/api/app/mcp_server.py, integrations/mem0-plugin/.codex-mcp.json이고, 의존성 단서는 openai, langchain, pydantic, transformers, ollama, llama, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | mem0ai/mem0 |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 58803 |
| Forks | 6767 |
| License | none |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/mem0ai__mem0](../../../../sources/mem0ai__mem0) |
| Existing report | [reports/global-trending/repositories/mem0ai__mem0.md](../../../global-trending/repositories/mem0ai__mem0.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1671 / 340 |
| Max observed depth | 8 |
| Top directories | .agents, .claude-plugin, .codex-plugin, .cursor-plugin, .github, cli, cookbooks, docs, evaluation, examples, integrations, mem0, mem0-ts, openmemory, scripts, server, skills, tests |
| Top extensions | .py: 372, .ts: 333, .mdx: 241, .tsx: 227, .md: 129, .json: 65, .png: 54, (none): 45, .yml: 35, .svg: 33, .sh: 28, .js: 16 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 81 |
| docs | documentation surface | 22 |
| server | source boundary | 18 |
| examples/multimodal-demo | examples workspace | 5 |
| examples/vercel-ai-sdk-chat-app | examples workspace | 5 |
| examples/yt-assistant-chrome | examples workspace | 2 |
| .github | ci surface | 1 |
| cli | top-level component | 1 |
| cookbooks | top-level component | 1 |
| evaluation | top-level component | 1 |
| examples | top-level component | 1 |
| examples/mem0-demo | examples workspace | 1 |
| examples/openai-inbuilt-tools | examples workspace | 1 |
| integrations | top-level component | 1 |
| mem0 | top-level component | 1 |
| mem0-ts | top-level component | 1 |
| openmemory | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| utility | Makefile | install | make install |
| utility | Makefile | install_all | make install_all |
| quality | Makefile | format | make format |
| utility | Makefile | sort | make sort |
| quality | Makefile | lint | make lint |
| utility | Makefile | docs | make docs |
| build | Makefile | build | make build |
| utility | Makefile | publish | make publish |
| utility | Makefile | clean | make clean |
| test | Makefile | test | make test |
| test | Makefile | test-py-3.10 | make test-py-3.10 |
| test | Makefile | test-py-3.11 | make test-py-3.11 |
| test | Makefile | test-py-3.12 | make test-py-3.12 |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | langchain |
| vectorStores | chroma, qdrant, milvus, weaviate, faiss |
| modelRuntime | transformers, ollama, llama |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [openmemory/api/tests/test_mcp_server.py](../../../../sources/mem0ai__mem0/openmemory/api/tests/test_mcp_server.py) | mcp signal |
| mcp | [openmemory/api/app/mcp_server.py](../../../../sources/mem0ai__mem0/openmemory/api/app/mcp_server.py) | mcp signal |
| mcp | [integrations/mem0-plugin/.codex-mcp.json](../../../../sources/mem0ai__mem0/integrations/mem0-plugin/.codex-mcp.json) | mcp signal |
| mcp | [integrations/mem0-plugin/.cursor-mcp.json](../../../../sources/mem0ai__mem0/integrations/mem0-plugin/.cursor-mcp.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/mem0ai__mem0/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/memory/test_json_prompt_fix.py](../../../../sources/mem0ai__mem0/tests/memory/test_json_prompt_fix.py) | agentRuntime signal |
| agentRuntime | [tests/memory/test_main.py](../../../../sources/mem0ai__mem0/tests/memory/test_main.py) | agentRuntime signal |
| agentRuntime | [tests/memory/test_memory_utils.py](../../../../sources/mem0ai__mem0/tests/memory/test_memory_utils.py) | agentRuntime signal |
| entrypoints | [server/main.py](../../../../sources/mem0ai__mem0/server/main.py) | entrypoints signal |
| entrypoints | [openmemory/api/main.py](../../../../sources/mem0ai__mem0/openmemory/api/main.py) | entrypoints signal |
| entrypoints | [mem0-ts/src/oss/src/index.ts](../../../../sources/mem0ai__mem0/mem0-ts/src/oss/src/index.ts) | entrypoints signal |
| entrypoints | [mem0-ts/src/community/src/index.ts](../../../../sources/mem0ai__mem0/mem0-ts/src/community/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 17 | [server/main.py](../../../../sources/mem0ai__mem0/server/main.py)<br>[openmemory/api/main.py](../../../../sources/mem0ai__mem0/openmemory/api/main.py)<br>[mem0-ts/src/oss/src/index.ts](../../../../sources/mem0ai__mem0/mem0-ts/src/oss/src/index.ts)<br>[mem0-ts/src/community/src/index.ts](../../../../sources/mem0ai__mem0/mem0-ts/src/community/src/index.ts)<br>[mem0/proxy/main.py](../../../../sources/mem0ai__mem0/mem0/proxy/main.py)<br>[mem0/memory/main.py](../../../../sources/mem0ai__mem0/mem0/memory/main.py)<br>[mem0/client/main.py](../../../../sources/mem0ai__mem0/mem0/client/main.py)<br>[integrations/vercel-ai-sdk/src/index.ts](../../../../sources/mem0ai__mem0/integrations/vercel-ai-sdk/src/index.ts) |
| agentRuntime | 200 | [AGENTS.md](../../../../sources/mem0ai__mem0/AGENTS.md)<br>[tests/memory/test_json_prompt_fix.py](../../../../sources/mem0ai__mem0/tests/memory/test_json_prompt_fix.py)<br>[tests/memory/test_main.py](../../../../sources/mem0ai__mem0/tests/memory/test_main.py)<br>[tests/memory/test_memory_utils.py](../../../../sources/mem0ai__mem0/tests/memory/test_memory_utils.py)<br>[tests/memory/test_safe_deepcopy_config.py](../../../../sources/mem0ai__mem0/tests/memory/test_safe_deepcopy_config.py)<br>[tests/memory/test_storage.py](../../../../sources/mem0ai__mem0/tests/memory/test_storage.py)<br>[skills/README.md](../../../../sources/mem0ai__mem0/skills/README.md)<br>[skills/mem0-vercel-ai-sdk/LICENSE](../../../../sources/mem0ai__mem0/skills/mem0-vercel-ai-sdk/LICENSE) |
| mcp | 9 | [openmemory/api/tests/test_mcp_server.py](../../../../sources/mem0ai__mem0/openmemory/api/tests/test_mcp_server.py)<br>[openmemory/api/app/mcp_server.py](../../../../sources/mem0ai__mem0/openmemory/api/app/mcp_server.py)<br>[integrations/mem0-plugin/.codex-mcp.json](../../../../sources/mem0ai__mem0/integrations/mem0-plugin/.codex-mcp.json)<br>[integrations/mem0-plugin/.cursor-mcp.json](../../../../sources/mem0ai__mem0/integrations/mem0-plugin/.cursor-mcp.json)<br>[integrations/mem0-plugin/.mcp.json](../../../../sources/mem0ai__mem0/integrations/mem0-plugin/.mcp.json)<br>[integrations/mem0-plugin/mcp_config.json](../../../../sources/mem0ai__mem0/integrations/mem0-plugin/mcp_config.json)<br>[docs/platform/mem0-mcp.mdx](../../../../sources/mem0ai__mem0/docs/platform/mem0-mcp.mdx)<br>[docs/platform/features/mcp-integration.mdx](../../../../sources/mem0ai__mem0/docs/platform/features/mcp-integration.mdx) |
| retrieval | 225 | [tests/test_memory_integration.py](../../../../sources/mem0ai__mem0/tests/test_memory_integration.py)<br>[tests/test_memory.py](../../../../sources/mem0ai__mem0/tests/test_memory.py)<br>[tests/vector_stores/test_azure_ai_search.py](../../../../sources/mem0ai__mem0/tests/vector_stores/test_azure_ai_search.py)<br>[tests/vector_stores/test_azure_mysql.py](../../../../sources/mem0ai__mem0/tests/vector_stores/test_azure_mysql.py)<br>[tests/vector_stores/test_baidu.py](../../../../sources/mem0ai__mem0/tests/vector_stores/test_baidu.py)<br>[tests/vector_stores/test_cassandra.py](../../../../sources/mem0ai__mem0/tests/vector_stores/test_cassandra.py)<br>[tests/vector_stores/test_chroma.py](../../../../sources/mem0ai__mem0/tests/vector_stores/test_chroma.py)<br>[tests/vector_stores/test_databricks.py](../../../../sources/mem0ai__mem0/tests/vector_stores/test_databricks.py) |
| spec | 8 | [skills/mem0/references/architecture.md](../../../../sources/mem0ai__mem0/skills/mem0/references/architecture.md)<br>[server/requirements.txt](../../../../sources/mem0ai__mem0/server/requirements.txt)<br>[openmemory/api/requirements.txt](../../../../sources/mem0ai__mem0/openmemory/api/requirements.txt)<br>[integrations/mem0-plugin/requirements.txt](../../../../sources/mem0ai__mem0/integrations/mem0-plugin/requirements.txt)<br>[integrations/mem0-plugin/skills/mem0/references/architecture.md](../../../../sources/mem0ai__mem0/integrations/mem0-plugin/skills/mem0/references/architecture.md)<br>[integrations/mem0-plugin/.opencode-plugin/opencode-skills/mem0/references/architecture.md](../../../../sources/mem0ai__mem0/integrations/mem0-plugin/.opencode-plugin/opencode-skills/mem0/references/architecture.md)<br>[docs/images/openclaw-architecture.png](../../../../sources/mem0ai__mem0/docs/images/openclaw-architecture.png)<br>[cli/cli-spec.json](../../../../sources/mem0ai__mem0/cli/cli-spec.json) |
| eval | 232 | [tests/__init__.py](../../../../sources/mem0ai__mem0/tests/__init__.py)<br>[tests/test_chatty_llm_parsing.py](../../../../sources/mem0ai__mem0/tests/test_chatty_llm_parsing.py)<br>[tests/test_client_feedback.py](../../../../sources/mem0ai__mem0/tests/test_client_feedback.py)<br>[tests/test_client.py](../../../../sources/mem0ai__mem0/tests/test_client.py)<br>[tests/test_main.py](../../../../sources/mem0ai__mem0/tests/test_main.py)<br>[tests/test_memory_integration.py](../../../../sources/mem0ai__mem0/tests/test_memory_integration.py)<br>[tests/test_memory.py](../../../../sources/mem0ai__mem0/tests/test_memory.py)<br>[tests/test_oss_to_platform_migrate.py](../../../../sources/mem0ai__mem0/tests/test_oss_to_platform_migrate.py) |
| security | 7 | [tests/test_server_auth.py](../../../../sources/mem0ai__mem0/tests/test_server_auth.py)<br>[server/auth.py](../../../../sources/mem0ai__mem0/server/auth.py)<br>[server/routers/auth.py](../../../../sources/mem0ai__mem0/server/routers/auth.py)<br>[server/dashboard/src/lib/auth.tsx](../../../../sources/mem0ai__mem0/server/dashboard/src/lib/auth.tsx)<br>[server/dashboard/src/hooks/use-auth.ts](../../../../sources/mem0ai__mem0/server/dashboard/src/hooks/use-auth.ts)<br>[server/dashboard/src/app/api/auth/refresh/route.ts](../../../../sources/mem0ai__mem0/server/dashboard/src/app/api/auth/refresh/route.ts)<br>[mem0/utils/gcp_auth.py](../../../../sources/mem0ai__mem0/mem0/utils/gcp_auth.py) |
| ci | 20 | [.github/workflows/cd.yml](../../../../sources/mem0ai__mem0/.github/workflows/cd.yml)<br>[.github/workflows/ci-gate.yml](../../../../sources/mem0ai__mem0/.github/workflows/ci-gate.yml)<br>[.github/workflows/ci.yml](../../../../sources/mem0ai__mem0/.github/workflows/ci.yml)<br>[.github/workflows/cli-node-cd.yml](../../../../sources/mem0ai__mem0/.github/workflows/cli-node-cd.yml)<br>[.github/workflows/cli-node-ci.yml](../../../../sources/mem0ai__mem0/.github/workflows/cli-node-ci.yml)<br>[.github/workflows/cli-python-cd.yml](../../../../sources/mem0ai__mem0/.github/workflows/cli-python-cd.yml)<br>[.github/workflows/cli-python-ci.yml](../../../../sources/mem0ai__mem0/.github/workflows/cli-python-ci.yml)<br>[.github/workflows/docs-llms-txt-check.yml](../../../../sources/mem0ai__mem0/.github/workflows/docs-llms-txt-check.yml) |
| container | 6 | [server/docker-compose.yaml](../../../../sources/mem0ai__mem0/server/docker-compose.yaml)<br>[server/Dockerfile](../../../../sources/mem0ai__mem0/server/Dockerfile)<br>[server/dashboard/Dockerfile](../../../../sources/mem0ai__mem0/server/dashboard/Dockerfile)<br>[openmemory/docker-compose.yml](../../../../sources/mem0ai__mem0/openmemory/docker-compose.yml)<br>[openmemory/ui/Dockerfile](../../../../sources/mem0ai__mem0/openmemory/ui/Dockerfile)<br>[openmemory/api/Dockerfile](../../../../sources/mem0ai__mem0/openmemory/api/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/mem0ai__mem0/AGENTS.md) |
| docs | 308 | [README.md](../../../../sources/mem0ai__mem0/README.md)<br>[skills/README.md](../../../../sources/mem0ai__mem0/skills/README.md)<br>[skills/mem0-vercel-ai-sdk/README.md](../../../../sources/mem0ai__mem0/skills/mem0-vercel-ai-sdk/README.md)<br>[skills/mem0-test-integration/README.md](../../../../sources/mem0ai__mem0/skills/mem0-test-integration/README.md)<br>[skills/mem0-oss-to-platform/README.md](../../../../sources/mem0ai__mem0/skills/mem0-oss-to-platform/README.md)<br>[skills/mem0-integrate/README.md](../../../../sources/mem0ai__mem0/skills/mem0-integrate/README.md)<br>[skills/mem0-cli/README.md](../../../../sources/mem0ai__mem0/skills/mem0-cli/README.md)<br>[skills/mem0/README.md](../../../../sources/mem0ai__mem0/skills/mem0/README.md) |
| config | 47 | [Makefile](../../../../sources/mem0ai__mem0/Makefile)<br>[poetry.lock](../../../../sources/mem0ai__mem0/poetry.lock)<br>[pyproject.toml](../../../../sources/mem0ai__mem0/pyproject.toml)<br>[server/Makefile](../../../../sources/mem0ai__mem0/server/Makefile)<br>[server/requirements.txt](../../../../sources/mem0ai__mem0/server/requirements.txt)<br>[server/dashboard/package.json](../../../../sources/mem0ai__mem0/server/dashboard/package.json)<br>[server/dashboard/pnpm-workspace.yaml](../../../../sources/mem0ai__mem0/server/dashboard/pnpm-workspace.yaml)<br>[server/dashboard/tsconfig.json](../../../../sources/mem0ai__mem0/server/dashboard/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 232 | [tests/__init__.py](../../../../sources/mem0ai__mem0/tests/__init__.py)<br>[tests/test_chatty_llm_parsing.py](../../../../sources/mem0ai__mem0/tests/test_chatty_llm_parsing.py)<br>[tests/test_client_feedback.py](../../../../sources/mem0ai__mem0/tests/test_client_feedback.py)<br>[tests/test_client.py](../../../../sources/mem0ai__mem0/tests/test_client.py)<br>[tests/test_main.py](../../../../sources/mem0ai__mem0/tests/test_main.py)<br>[tests/test_memory_integration.py](../../../../sources/mem0ai__mem0/tests/test_memory_integration.py) |
| CI workflows | 20 | [.github/workflows/cd.yml](../../../../sources/mem0ai__mem0/.github/workflows/cd.yml)<br>[.github/workflows/ci-gate.yml](../../../../sources/mem0ai__mem0/.github/workflows/ci-gate.yml)<br>[.github/workflows/ci.yml](../../../../sources/mem0ai__mem0/.github/workflows/ci.yml)<br>[.github/workflows/cli-node-cd.yml](../../../../sources/mem0ai__mem0/.github/workflows/cli-node-cd.yml)<br>[.github/workflows/cli-node-ci.yml](../../../../sources/mem0ai__mem0/.github/workflows/cli-node-ci.yml)<br>[.github/workflows/cli-python-cd.yml](../../../../sources/mem0ai__mem0/.github/workflows/cli-python-cd.yml) |
| Containers / deploy | 6 | [server/docker-compose.yaml](../../../../sources/mem0ai__mem0/server/docker-compose.yaml)<br>[server/Dockerfile](../../../../sources/mem0ai__mem0/server/Dockerfile)<br>[server/dashboard/Dockerfile](../../../../sources/mem0ai__mem0/server/dashboard/Dockerfile)<br>[openmemory/docker-compose.yml](../../../../sources/mem0ai__mem0/openmemory/docker-compose.yml)<br>[openmemory/ui/Dockerfile](../../../../sources/mem0ai__mem0/openmemory/ui/Dockerfile)<br>[openmemory/api/Dockerfile](../../../../sources/mem0ai__mem0/openmemory/api/Dockerfile) |
| Security / policy | 7 | [tests/test_server_auth.py](../../../../sources/mem0ai__mem0/tests/test_server_auth.py)<br>[server/auth.py](../../../../sources/mem0ai__mem0/server/auth.py)<br>[server/routers/auth.py](../../../../sources/mem0ai__mem0/server/routers/auth.py)<br>[server/dashboard/src/lib/auth.tsx](../../../../sources/mem0ai__mem0/server/dashboard/src/lib/auth.tsx)<br>[server/dashboard/src/hooks/use-auth.ts](../../../../sources/mem0ai__mem0/server/dashboard/src/hooks/use-auth.ts)<br>[server/dashboard/src/app/api/auth/refresh/route.ts](../../../../sources/mem0ai__mem0/server/dashboard/src/app/api/auth/refresh/route.ts) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/mem0ai__mem0/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `openmemory/api/tests/test_mcp_server.py`, `openmemory/api/app/mcp_server.py`, `integrations/mem0-plugin/.codex-mcp.json`.
2. Trace execution through entrypoints: `server/main.py`, `openmemory/api/main.py`, `mem0-ts/src/oss/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/memory/test_json_prompt_fix.py`, `tests/memory/test_main.py`.
4. Inspect retrieval/memory/indexing through: `tests/test_memory_integration.py`, `tests/test_memory.py`, `tests/vector_stores/test_azure_ai_search.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/test_chatty_llm_parsing.py`, `tests/test_client_feedback.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 1671 files, 340 directories.. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, AGENTS.md, LICENSE이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
