# crewAIInc/crewAI Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 3287 files, 512 directories.

## 요약

- 조사 단위: `sources/crewAIInc__crewAI` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,287 files, 512 directories, depth score 138, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=lib/crewai-tools/tests/adapters/mcp_adapter_test.py, lib/crewai-tools/src/crewai_tools/adapters/mcp_adapter.py, lib/crewai/tests/mcp/__init__.py이고, 의존성 단서는 openai, langchain, fastapi, pydantic, transformers, qdrant, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | crewAIInc/crewAI |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 53827 |
| Forks | 7532 |
| License | none |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/crewAIInc__crewAI](../../../../sources/crewAIInc__crewAI) |
| Existing report | [reports/global-trending/repositories/crewAIInc__crewAI.md](../../../global-trending/repositories/crewAIInc__crewAI.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3287 / 512 |
| Max observed depth | 10 |
| Top directories | .github, docs, lib, scripts |
| Top extensions | .py: 1224, .mdx: 1065, .yaml: 609, .png: 212, .md: 97, .yml: 19, .json: 16, .toml: 10, (none): 9, .typed: 5, .gif: 3, .js: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| lib | source boundary | 250 |
| docs | documentation surface | 27 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | langchain |
| vectorStores | qdrant |
| modelRuntime | transformers |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [lib/crewai-tools/tests/adapters/mcp_adapter_test.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/adapters/mcp_adapter_test.py) | mcp signal |
| mcp | [lib/crewai-tools/src/crewai_tools/adapters/mcp_adapter.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/adapters/mcp_adapter.py) | mcp signal |
| mcp | [lib/crewai/tests/mcp/__init__.py](../../../../sources/crewAIInc__crewAI/lib/crewai/tests/mcp/__init__.py) | mcp signal |
| mcp | [lib/crewai/tests/mcp/test_amp_mcp.py](../../../../sources/crewAIInc__crewAI/lib/crewai/tests/mcp/test_amp_mcp.py) | mcp signal |
| agentRuntime | [lib/crewai-tools/tool.specs.json](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tool.specs.json) | agentRuntime signal |
| agentRuntime | [lib/crewai-tools/tests/tools/__init__.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [lib/crewai-tools/tests/tools/arxiv_paper_tool_test.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/tools/arxiv_paper_tool_test.py) | agentRuntime signal |
| agentRuntime | [lib/crewai-tools/tests/tools/brave_search_tool_test.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/tools/brave_search_tool_test.py) | agentRuntime signal |
| entrypoints | [lib/crewai/src/crewai/a2a/extensions/server.py](../../../../sources/crewAIInc__crewAI/lib/crewai/src/crewai/a2a/extensions/server.py) | entrypoints signal |
| entrypoints | [lib/cli/src/crewai_cli/triggers/main.py](../../../../sources/crewAIInc__crewAI/lib/cli/src/crewai_cli/triggers/main.py) | entrypoints signal |
| entrypoints | [lib/cli/src/crewai_cli/tools/main.py](../../../../sources/crewAIInc__crewAI/lib/cli/src/crewai_cli/tools/main.py) | entrypoints signal |
| entrypoints | [lib/cli/src/crewai_cli/templates/flow/main.py](../../../../sources/crewAIInc__crewAI/lib/cli/src/crewai_cli/templates/flow/main.py) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 12 | [lib/crewai/src/crewai/a2a/extensions/server.py](../../../../sources/crewAIInc__crewAI/lib/crewai/src/crewai/a2a/extensions/server.py)<br>[lib/cli/src/crewai_cli/triggers/main.py](../../../../sources/crewAIInc__crewAI/lib/cli/src/crewai_cli/triggers/main.py)<br>[lib/cli/src/crewai_cli/tools/main.py](../../../../sources/crewAIInc__crewAI/lib/cli/src/crewai_cli/tools/main.py)<br>[lib/cli/src/crewai_cli/templates/flow/main.py](../../../../sources/crewAIInc__crewAI/lib/cli/src/crewai_cli/templates/flow/main.py)<br>[lib/cli/src/crewai_cli/templates/crew/main.py](../../../../sources/crewAIInc__crewAI/lib/cli/src/crewai_cli/templates/crew/main.py)<br>[lib/cli/src/crewai_cli/settings/main.py](../../../../sources/crewAIInc__crewAI/lib/cli/src/crewai_cli/settings/main.py)<br>[lib/cli/src/crewai_cli/remote_template/main.py](../../../../sources/crewAIInc__crewAI/lib/cli/src/crewai_cli/remote_template/main.py)<br>[lib/cli/src/crewai_cli/organization/main.py](../../../../sources/crewAIInc__crewAI/lib/cli/src/crewai_cli/organization/main.py) |
| agentRuntime | 1031 | [lib/crewai-tools/tool.specs.json](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tool.specs.json)<br>[lib/crewai-tools/tests/tools/__init__.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/tools/__init__.py)<br>[lib/crewai-tools/tests/tools/arxiv_paper_tool_test.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/tools/arxiv_paper_tool_test.py)<br>[lib/crewai-tools/tests/tools/brave_search_tool_test.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/tools/brave_search_tool_test.py)<br>[lib/crewai-tools/tests/tools/brightdata_serp_tool_test.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/tools/brightdata_serp_tool_test.py)<br>[lib/crewai-tools/tests/tools/brightdata_webunlocker_tool_test.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/tools/brightdata_webunlocker_tool_test.py)<br>[lib/crewai-tools/tests/tools/couchbase_tool_test.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/tools/couchbase_tool_test.py)<br>[lib/crewai-tools/tests/tools/exa_search_tool_test.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/tools/exa_search_tool_test.py) |
| mcp | 57 | [lib/crewai-tools/tests/adapters/mcp_adapter_test.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/adapters/mcp_adapter_test.py)<br>[lib/crewai-tools/src/crewai_tools/adapters/mcp_adapter.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/adapters/mcp_adapter.py)<br>[lib/crewai/tests/mcp/__init__.py](../../../../sources/crewAIInc__crewAI/lib/crewai/tests/mcp/__init__.py)<br>[lib/crewai/tests/mcp/test_amp_mcp.py](../../../../sources/crewAIInc__crewAI/lib/crewai/tests/mcp/test_amp_mcp.py)<br>[lib/crewai/tests/mcp/test_mcp_config.py](../../../../sources/crewAIInc__crewAI/lib/crewai/tests/mcp/test_mcp_config.py)<br>[lib/crewai/tests/mcp/test_sse_transport.py](../../../../sources/crewAIInc__crewAI/lib/crewai/tests/mcp/test_sse_transport.py)<br>[lib/crewai/tests/mcp/test_stdio_transport.py](../../../../sources/crewAIInc__crewAI/lib/crewai/tests/mcp/test_stdio_transport.py)<br>[lib/crewai/tests/mcp/test_tool_resolver_native.py](../../../../sources/crewAIInc__crewAI/lib/crewai/tests/mcp/test_tool_resolver_native.py) |
| retrieval | 262 | [lib/crewai-tools/tests/tools/test_mongodb_vector_search_tool.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/tools/test_mongodb_vector_search_tool.py)<br>[lib/crewai-tools/tests/tools/rag/rag_tool_test.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/tools/rag/rag_tool_test.py)<br>[lib/crewai-tools/tests/tools/rag/test_rag_tool_add_data_type.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/tools/rag/test_rag_tool_add_data_type.py)<br>[lib/crewai-tools/tests/tools/rag/test_rag_tool_path_validation.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/tools/rag/test_rag_tool_path_validation.py)<br>[lib/crewai-tools/tests/tools/rag/test_rag_tool_validation.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/tools/rag/test_rag_tool_validation.py)<br>[lib/crewai-tools/tests/rag/__init__.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/rag/__init__.py)<br>[lib/crewai-tools/tests/rag/test_csv_loader.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/rag/test_csv_loader.py)<br>[lib/crewai-tools/tests/rag/test_directory_loader.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/rag/test_directory_loader.py) |
| spec | 4 | [docs/pt-BR/concepts/production-architecture.mdx](../../../../sources/crewAIInc__crewAI/docs/pt-BR/concepts/production-architecture.mdx)<br>[docs/ko/concepts/production-architecture.mdx](../../../../sources/crewAIInc__crewAI/docs/ko/concepts/production-architecture.mdx)<br>[docs/en/concepts/production-architecture.mdx](../../../../sources/crewAIInc__crewAI/docs/en/concepts/production-architecture.mdx)<br>[docs/ar/concepts/production-architecture.mdx](../../../../sources/crewAIInc__crewAI/docs/ar/concepts/production-architecture.mdx) |
| eval | 1076 | [lib/devtools/tests/__init__.py](../../../../sources/crewAIInc__crewAI/lib/devtools/tests/__init__.py)<br>[lib/devtools/tests/test_toml_updates.py](../../../../sources/crewAIInc__crewAI/lib/devtools/tests/test_toml_updates.py)<br>[lib/crewai-tools/tests/__init__.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/__init__.py)<br>[lib/crewai-tools/tests/base_tool_test.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/base_tool_test.py)<br>[lib/crewai-tools/tests/file_read_tool_test.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/file_read_tool_test.py)<br>[lib/crewai-tools/tests/test_generate_tool_specs.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/test_generate_tool_specs.py)<br>[lib/crewai-tools/tests/test_optional_dependencies.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/test_optional_dependencies.py)<br>[lib/crewai-tools/tests/utilities/__init__.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/utilities/__init__.py) |
| security | 88 | [lib/crewai-tools/tests/tools/test_nl2sql_security.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/tools/test_nl2sql_security.py)<br>[lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/__init__.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/__init__.py)<br>[lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_base_tool.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_base_tool.py)<br>[lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_exec_tool.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_exec_tool.py)<br>[lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_file_tool.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_file_tool.py)<br>[lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_python_tool.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_python_tool.py)<br>[lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/README.md](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/README.md)<br>[lib/crewai-tools/src/crewai_tools/tools/daytona_sandbox_tool/__init__.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/tools/daytona_sandbox_tool/__init__.py) |
| ci | 14 | [.github/workflows/build-uv-cache.yml](../../../../sources/crewAIInc__crewAI/.github/workflows/build-uv-cache.yml)<br>[.github/workflows/codeql.yml](../../../../sources/crewAIInc__crewAI/.github/workflows/codeql.yml)<br>[.github/workflows/docs-broken-links.yml](../../../../sources/crewAIInc__crewAI/.github/workflows/docs-broken-links.yml)<br>[.github/workflows/generate-tool-specs.yml](../../../../sources/crewAIInc__crewAI/.github/workflows/generate-tool-specs.yml)<br>[.github/workflows/linter.yml](../../../../sources/crewAIInc__crewAI/.github/workflows/linter.yml)<br>[.github/workflows/nightly.yml](../../../../sources/crewAIInc__crewAI/.github/workflows/nightly.yml)<br>[.github/workflows/pr-size.yml](../../../../sources/crewAIInc__crewAI/.github/workflows/pr-size.yml)<br>[.github/workflows/pr-title.yml](../../../../sources/crewAIInc__crewAI/.github/workflows/pr-title.yml) |
| container | 6 | [lib/cli/tests/deploy/__init__.py](../../../../sources/crewAIInc__crewAI/lib/cli/tests/deploy/__init__.py)<br>[lib/cli/tests/deploy/test_deploy_main.py](../../../../sources/crewAIInc__crewAI/lib/cli/tests/deploy/test_deploy_main.py)<br>[lib/cli/tests/deploy/test_validate.py](../../../../sources/crewAIInc__crewAI/lib/cli/tests/deploy/test_validate.py)<br>[lib/cli/src/crewai_cli/deploy/__init__.py](../../../../sources/crewAIInc__crewAI/lib/cli/src/crewai_cli/deploy/__init__.py)<br>[lib/cli/src/crewai_cli/deploy/main.py](../../../../sources/crewAIInc__crewAI/lib/cli/src/crewai_cli/deploy/main.py)<br>[lib/cli/src/crewai_cli/deploy/validate.py](../../../../sources/crewAIInc__crewAI/lib/cli/src/crewai_cli/deploy/validate.py) |
| instruction | 5 | [lib/cli/src/crewai_cli/templates/AGENTS.md](../../../../sources/crewAIInc__crewAI/lib/cli/src/crewai_cli/templates/AGENTS.md)<br>[docs/pt-BR/concepts/agents.mdx](../../../../sources/crewAIInc__crewAI/docs/pt-BR/concepts/agents.mdx)<br>[docs/ko/concepts/agents.mdx](../../../../sources/crewAIInc__crewAI/docs/ko/concepts/agents.mdx)<br>[docs/en/concepts/agents.mdx](../../../../sources/crewAIInc__crewAI/docs/en/concepts/agents.mdx)<br>[docs/ar/concepts/agents.mdx](../../../../sources/crewAIInc__crewAI/docs/ar/concepts/agents.mdx) |
| docs | 1370 | [README.md](../../../../sources/crewAIInc__crewAI/README.md)<br>[lib/devtools/README.md](../../../../sources/crewAIInc__crewAI/lib/devtools/README.md)<br>[lib/crewai-tools/README.md](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/README.md)<br>[lib/crewai-tools/src/crewai_tools/tools/zapier_action_tool/README.md](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/tools/zapier_action_tool/README.md)<br>[lib/crewai-tools/src/crewai_tools/tools/youtube_video_search_tool/README.md](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/tools/youtube_video_search_tool/README.md)<br>[lib/crewai-tools/src/crewai_tools/tools/youtube_channel_search_tool/README.md](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/tools/youtube_channel_search_tool/README.md)<br>[lib/crewai-tools/src/crewai_tools/tools/xml_search_tool/README.md](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/tools/xml_search_tool/README.md)<br>[lib/crewai-tools/src/crewai_tools/tools/website_search/README.md](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/tools/website_search/README.md) |
| config | 11 | [pyproject.toml](../../../../sources/crewAIInc__crewAI/pyproject.toml)<br>[uv.lock](../../../../sources/crewAIInc__crewAI/uv.lock)<br>[lib/devtools/pyproject.toml](../../../../sources/crewAIInc__crewAI/lib/devtools/pyproject.toml)<br>[lib/crewai-tools/pyproject.toml](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/pyproject.toml)<br>[lib/crewai-files/pyproject.toml](../../../../sources/crewAIInc__crewAI/lib/crewai-files/pyproject.toml)<br>[lib/crewai-core/pyproject.toml](../../../../sources/crewAIInc__crewAI/lib/crewai-core/pyproject.toml)<br>[lib/crewai/pyproject.toml](../../../../sources/crewAIInc__crewAI/lib/crewai/pyproject.toml)<br>[lib/cli/pyproject.toml](../../../../sources/crewAIInc__crewAI/lib/cli/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1076 | [lib/devtools/tests/__init__.py](../../../../sources/crewAIInc__crewAI/lib/devtools/tests/__init__.py)<br>[lib/devtools/tests/test_toml_updates.py](../../../../sources/crewAIInc__crewAI/lib/devtools/tests/test_toml_updates.py)<br>[lib/crewai-tools/tests/__init__.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/__init__.py)<br>[lib/crewai-tools/tests/base_tool_test.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/base_tool_test.py)<br>[lib/crewai-tools/tests/file_read_tool_test.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/file_read_tool_test.py)<br>[lib/crewai-tools/tests/test_generate_tool_specs.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/test_generate_tool_specs.py) |
| CI workflows | 14 | [.github/workflows/build-uv-cache.yml](../../../../sources/crewAIInc__crewAI/.github/workflows/build-uv-cache.yml)<br>[.github/workflows/codeql.yml](../../../../sources/crewAIInc__crewAI/.github/workflows/codeql.yml)<br>[.github/workflows/docs-broken-links.yml](../../../../sources/crewAIInc__crewAI/.github/workflows/docs-broken-links.yml)<br>[.github/workflows/generate-tool-specs.yml](../../../../sources/crewAIInc__crewAI/.github/workflows/generate-tool-specs.yml)<br>[.github/workflows/linter.yml](../../../../sources/crewAIInc__crewAI/.github/workflows/linter.yml)<br>[.github/workflows/nightly.yml](../../../../sources/crewAIInc__crewAI/.github/workflows/nightly.yml) |
| Containers / deploy | 6 | [lib/cli/tests/deploy/__init__.py](../../../../sources/crewAIInc__crewAI/lib/cli/tests/deploy/__init__.py)<br>[lib/cli/tests/deploy/test_deploy_main.py](../../../../sources/crewAIInc__crewAI/lib/cli/tests/deploy/test_deploy_main.py)<br>[lib/cli/tests/deploy/test_validate.py](../../../../sources/crewAIInc__crewAI/lib/cli/tests/deploy/test_validate.py)<br>[lib/cli/src/crewai_cli/deploy/__init__.py](../../../../sources/crewAIInc__crewAI/lib/cli/src/crewai_cli/deploy/__init__.py)<br>[lib/cli/src/crewai_cli/deploy/main.py](../../../../sources/crewAIInc__crewAI/lib/cli/src/crewai_cli/deploy/main.py)<br>[lib/cli/src/crewai_cli/deploy/validate.py](../../../../sources/crewAIInc__crewAI/lib/cli/src/crewai_cli/deploy/validate.py) |
| Security / policy | 88 | [lib/crewai-tools/tests/tools/test_nl2sql_security.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/tools/test_nl2sql_security.py)<br>[lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/__init__.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/__init__.py)<br>[lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_base_tool.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_base_tool.py)<br>[lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_exec_tool.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_exec_tool.py)<br>[lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_file_tool.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_file_tool.py)<br>[lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_python_tool.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_python_tool.py) |
| Agent instructions | 5 | [lib/cli/src/crewai_cli/templates/AGENTS.md](../../../../sources/crewAIInc__crewAI/lib/cli/src/crewai_cli/templates/AGENTS.md)<br>[docs/pt-BR/concepts/agents.mdx](../../../../sources/crewAIInc__crewAI/docs/pt-BR/concepts/agents.mdx)<br>[docs/ko/concepts/agents.mdx](../../../../sources/crewAIInc__crewAI/docs/ko/concepts/agents.mdx)<br>[docs/en/concepts/agents.mdx](../../../../sources/crewAIInc__crewAI/docs/en/concepts/agents.mdx)<br>[docs/ar/concepts/agents.mdx](../../../../sources/crewAIInc__crewAI/docs/ar/concepts/agents.mdx) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `lib/crewai-tools/tests/adapters/mcp_adapter_test.py`, `lib/crewai-tools/src/crewai_tools/adapters/mcp_adapter.py`, `lib/crewai/tests/mcp/__init__.py`.
2. Trace execution through entrypoints: `lib/crewai/src/crewai/a2a/extensions/server.py`, `lib/cli/src/crewai_cli/triggers/main.py`, `lib/cli/src/crewai_cli/tools/main.py`.
3. Map agent/tool runtime through: `lib/crewai-tools/tool.specs.json`, `lib/crewai-tools/tests/tools/__init__.py`, `lib/crewai-tools/tests/tools/arxiv_paper_tool_test.py`.
4. Inspect retrieval/memory/indexing through: `lib/crewai-tools/tests/tools/test_mongodb_vector_search_tool.py`, `lib/crewai-tools/tests/tools/rag/rag_tool_test.py`, `lib/crewai-tools/tests/tools/rag/test_rag_tool_add_data_type.py`.
5. Verify behavior through test/eval files: `lib/devtools/tests/__init__.py`, `lib/devtools/tests/test_toml_updates.py`, `lib/crewai-tools/tests/__init__.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 3287 files, 512 directories.. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, langchain, pydantic이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
