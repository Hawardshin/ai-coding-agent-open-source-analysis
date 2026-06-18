# deepset-ai/haystack Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 8383 files, 844 directories.

## 요약

- 조사 단위: `sources/deepset-ai__haystack` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 8,383 files, 844 directories, depth score 131, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=releasenotes/notes/fix-tool-invoker-warmup-tool-registry-cda6e84af3387ac8.yaml, docs-website/versioned_docs/version-2.30/overview/docs-mcp-server.mdx, docs-website/versioned_docs/version-2.29/overview/docs-mcp-server.mdx이고, 의존성 단서는 openai, express, pydantic, torch, transformers, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | deepset-ai/haystack |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | MDX |
| Stars | 25594 |
| Forks | 2863 |
| License | none |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/deepset-ai__haystack](../../../../sources/deepset-ai__haystack) |
| Existing report | [reports/global-trending/repositories/deepset-ai__haystack.md](../../../global-trending/repositories/deepset-ai__haystack.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 8383 / 844 |
| Max observed depth | 7 |
| Top directories | .github, docker, docs-website, e2e, examples, haystack, images, pydoc, releasenotes, scripts, test |
| Top extensions | .mdx: 4833, .md: 1646, .yaml: 1064, .py: 567, .yml: 65, .json: 39, .png: 38, .svg: 34, .js: 14, .txt: 13, (none): 7, .docx: 6 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |
| docs-website | documentation surface | 1 |
| e2e | validation surface | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| haystack | top-level component | 1 |
| images | top-level component | 1 |
| pydoc | documentation surface | 1 |
| releasenotes | top-level component | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch, transformers |
| webRuntime | express |
| developerSurface | none |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [releasenotes/notes/fix-tool-invoker-warmup-tool-registry-cda6e84af3387ac8.yaml](../../../../sources/deepset-ai__haystack/releasenotes/notes/fix-tool-invoker-warmup-tool-registry-cda6e84af3387ac8.yaml) | mcp signal |
| mcp | [docs-website/versioned_docs/version-2.30/overview/docs-mcp-server.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.30/overview/docs-mcp-server.mdx) | mcp signal |
| mcp | [docs-website/versioned_docs/version-2.29/overview/docs-mcp-server.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.29/overview/docs-mcp-server.mdx) | mcp signal |
| mcp | [docs-website/reference_versioned_docs/version-2.30/integrations-api/mcp.md](../../../../sources/deepset-ai__haystack/docs-website/reference_versioned_docs/version-2.30/integrations-api/mcp.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/deepset-ai__haystack/AGENTS.md) | agentRuntime signal |
| agentRuntime | [test/tools/test_component_tool.py](../../../../sources/deepset-ai__haystack/test/tools/test_component_tool.py) | agentRuntime signal |
| agentRuntime | [test/tools/test_from_function.py](../../../../sources/deepset-ai__haystack/test/tools/test_from_function.py) | agentRuntime signal |
| agentRuntime | [test/tools/test_parameters_schema_utils.py](../../../../sources/deepset-ai__haystack/test/tools/test_parameters_schema_utils.py) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/deepset-ai__haystack/CLAUDE.md) | instruction signal |
| instruction | [docs-website/versioned_docs/version-2.30/concepts/agents.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.30/concepts/agents.mdx) | instruction signal |
| instruction | [docs-website/versioned_docs/version-2.29/concepts/agents.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.29/concepts/agents.mdx) | instruction signal |
| config | [pyproject.toml](../../../../sources/deepset-ai__haystack/pyproject.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 337 | [AGENTS.md](../../../../sources/deepset-ai__haystack/AGENTS.md)<br>[test/tools/test_component_tool.py](../../../../sources/deepset-ai__haystack/test/tools/test_component_tool.py)<br>[test/tools/test_from_function.py](../../../../sources/deepset-ai__haystack/test/tools/test_from_function.py)<br>[test/tools/test_parameters_schema_utils.py](../../../../sources/deepset-ai__haystack/test/tools/test_parameters_schema_utils.py)<br>[test/tools/test_pipeline_tool.py](../../../../sources/deepset-ai__haystack/test/tools/test_pipeline_tool.py)<br>[test/tools/test_searchable_toolset.py](../../../../sources/deepset-ai__haystack/test/tools/test_searchable_toolset.py)<br>[test/tools/test_serde_utils.py](../../../../sources/deepset-ai__haystack/test/tools/test_serde_utils.py)<br>[test/tools/test_tool.py](../../../../sources/deepset-ai__haystack/test/tools/test_tool.py) |
| mcp | 19 | [releasenotes/notes/fix-tool-invoker-warmup-tool-registry-cda6e84af3387ac8.yaml](../../../../sources/deepset-ai__haystack/releasenotes/notes/fix-tool-invoker-warmup-tool-registry-cda6e84af3387ac8.yaml)<br>[docs-website/versioned_docs/version-2.30/overview/docs-mcp-server.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.30/overview/docs-mcp-server.mdx)<br>[docs-website/versioned_docs/version-2.29/overview/docs-mcp-server.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.29/overview/docs-mcp-server.mdx)<br>[docs-website/reference_versioned_docs/version-2.30/integrations-api/mcp.md](../../../../sources/deepset-ai__haystack/docs-website/reference_versioned_docs/version-2.30/integrations-api/mcp.md)<br>[docs-website/reference_versioned_docs/version-2.29/integrations-api/mcp.md](../../../../sources/deepset-ai__haystack/docs-website/reference_versioned_docs/version-2.29/integrations-api/mcp.md)<br>[docs-website/reference_versioned_docs/version-2.28/integrations-api/mcp.md](../../../../sources/deepset-ai__haystack/docs-website/reference_versioned_docs/version-2.28/integrations-api/mcp.md)<br>[docs-website/reference_versioned_docs/version-2.27/integrations-api/mcp.md](../../../../sources/deepset-ai__haystack/docs-website/reference_versioned_docs/version-2.27/integrations-api/mcp.md)<br>[docs-website/reference_versioned_docs/version-2.26/integrations-api/mcp.md](../../../../sources/deepset-ai__haystack/docs-website/reference_versioned_docs/version-2.26/integrations-api/mcp.md) |
| retrieval | 131 | [test/document_stores/test_in_memory.py](../../../../sources/deepset-ai__haystack/test/document_stores/test_in_memory.py)<br>[test/dataclasses/test_sparse_embedding.py](../../../../sources/deepset-ai__haystack/test/dataclasses/test_sparse_embedding.py)<br>[test/dataclasses/test_streaming_chunk.py](../../../../sources/deepset-ai__haystack/test/dataclasses/test_streaming_chunk.py)<br>[test/core/pipeline/breakpoints/test_pipeline_breakpoints_rag_hybrid.py](../../../../sources/deepset-ai__haystack/test/core/pipeline/breakpoints/test_pipeline_breakpoints_rag_hybrid.py)<br>[test/components/retrievers/test_in_memory_bm25_retriever.py](../../../../sources/deepset-ai__haystack/test/components/retrievers/test_in_memory_bm25_retriever.py)<br>[test/components/retrievers/test_in_memory_embedding_retriever.py](../../../../sources/deepset-ai__haystack/test/components/retrievers/test_in_memory_embedding_retriever.py)<br>[test/components/retrievers/test_multi_query_embedding_retriever_async.py](../../../../sources/deepset-ai__haystack/test/components/retrievers/test_multi_query_embedding_retriever_async.py)<br>[test/components/retrievers/test_multi_query_embedding_retriever.py](../../../../sources/deepset-ai__haystack/test/components/retrievers/test_multi_query_embedding_retriever.py) |
| spec | 4 | [test/test_files/json/complex_types_openai_spec.json](../../../../sources/deepset-ai__haystack/test/test_files/json/complex_types_openai_spec.json)<br>[test/test_files/json/github_compare_branch_openapi_spec.json](../../../../sources/deepset-ai__haystack/test/test_files/json/github_compare_branch_openapi_spec.json)<br>[releasenotes/notes/fix-input-spec-tracing-850501ddf38afe0f.yaml](../../../../sources/deepset-ai__haystack/releasenotes/notes/fix-input-spec-tracing-850501ddf38afe0f.yaml)<br>[.github/utils/pyproject_to_requirements.py](../../../../sources/deepset-ai__haystack/.github/utils/pyproject_to_requirements.py) |
| eval | 433 | [test/__init__.py](../../../../sources/deepset-ai__haystack/test/__init__.py)<br>[test/conftest.py](../../../../sources/deepset-ai__haystack/test/conftest.py)<br>[test/test_imports.py](../../../../sources/deepset-ai__haystack/test/test_imports.py)<br>[test/test_logging.py](../../../../sources/deepset-ai__haystack/test/test_logging.py)<br>[test/test_release_note_backticks.py](../../../../sources/deepset-ai__haystack/test/test_release_note_backticks.py)<br>[test/test_telemetry.py](../../../../sources/deepset-ai__haystack/test/test_telemetry.py)<br>[test/utils/test_auth.py](../../../../sources/deepset-ai__haystack/test/utils/test_auth.py)<br>[test/utils/test_base_serialization.py](../../../../sources/deepset-ai__haystack/test/utils/test_base_serialization.py) |
| security | 44 | [SECURITY.md](../../../../sources/deepset-ai__haystack/SECURITY.md)<br>[test/utils/test_auth.py](../../../../sources/deepset-ai__haystack/test/utils/test_auth.py)<br>[test/document_stores/test_filter_policy.py](../../../../sources/deepset-ai__haystack/test/document_stores/test_filter_policy.py)<br>[releasenotes/notes/add-apply_filter_policy-function-ae3152e6afe0ca57.yaml](../../../../sources/deepset-ai__haystack/releasenotes/notes/add-apply_filter_policy-function-ae3152e6afe0ca57.yaml)<br>[releasenotes/notes/azure-chat-generator-secret-endpoint-api-version-0edaf403d50ff942.yaml](../../../../sources/deepset-ai__haystack/releasenotes/notes/azure-chat-generator-secret-endpoint-api-version-0edaf403d50ff942.yaml)<br>[releasenotes/notes/default-write-documents-policy-95afe5fb34fc73ad.yaml](../../../../sources/deepset-ai__haystack/releasenotes/notes/default-write-documents-policy-95afe5fb34fc73ad.yaml)<br>[releasenotes/notes/document-writer-default-policy-693027781629fc73.yaml](../../../../sources/deepset-ai__haystack/releasenotes/notes/document-writer-default-policy-693027781629fc73.yaml)<br>[releasenotes/notes/openapi-connector-auth-enhancement-a78e0666d3cf6353.yaml](../../../../sources/deepset-ai__haystack/releasenotes/notes/openapi-connector-auth-enhancement-a78e0666d3cf6353.yaml) |
| ci | 29 | [.github/workflows/auto_approve_api_ref_sync.yml](../../../../sources/deepset-ai__haystack/.github/workflows/auto_approve_api_ref_sync.yml)<br>[.github/workflows/branch_off.yml](../../../../sources/deepset-ai__haystack/.github/workflows/branch_off.yml)<br>[.github/workflows/check_api_ref.yml](../../../../sources/deepset-ai__haystack/.github/workflows/check_api_ref.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/deepset-ai__haystack/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/deepset-ai__haystack/.github/workflows/claude.yml)<br>[.github/workflows/coverage_comment.yml](../../../../sources/deepset-ai__haystack/.github/workflows/coverage_comment.yml)<br>[.github/workflows/docker_release.yml](../../../../sources/deepset-ai__haystack/.github/workflows/docker_release.yml)<br>[.github/workflows/docs_search_sync.yml](../../../../sources/deepset-ai__haystack/.github/workflows/docs_search_sync.yml) |
| container | 43 | [docs-website/versioned_docs/version-2.30/development/deployment/docker.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.30/development/deployment/docker.mdx)<br>[docs-website/versioned_docs/version-2.30/development/deployment/kubernetes.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.30/development/deployment/kubernetes.mdx)<br>[docs-website/versioned_docs/version-2.30/development/deployment/openshift.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.30/development/deployment/openshift.mdx)<br>[docs-website/versioned_docs/version-2.29/development/deployment/docker.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.29/development/deployment/docker.mdx)<br>[docs-website/versioned_docs/version-2.29/development/deployment/kubernetes.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.29/development/deployment/kubernetes.mdx)<br>[docs-website/versioned_docs/version-2.29/development/deployment/openshift.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.29/development/deployment/openshift.mdx)<br>[docs-website/versioned_docs/version-2.28/development/deployment/docker.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.28/development/deployment/docker.mdx)<br>[docs-website/versioned_docs/version-2.28/development/deployment/kubernetes.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.28/development/deployment/kubernetes.mdx) |
| instruction | 16 | [AGENTS.md](../../../../sources/deepset-ai__haystack/AGENTS.md)<br>[CLAUDE.md](../../../../sources/deepset-ai__haystack/CLAUDE.md)<br>[docs-website/versioned_docs/version-2.30/concepts/agents.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.30/concepts/agents.mdx)<br>[docs-website/versioned_docs/version-2.29/concepts/agents.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.29/concepts/agents.mdx)<br>[docs-website/versioned_docs/version-2.28/concepts/agents.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.28/concepts/agents.mdx)<br>[docs-website/versioned_docs/version-2.27/concepts/agents.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.27/concepts/agents.mdx)<br>[docs-website/versioned_docs/version-2.26/concepts/agents.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.26/concepts/agents.mdx)<br>[docs-website/versioned_docs/version-2.25/concepts/agents.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.25/concepts/agents.mdx) |
| docs | 409 | [README.md](../../../../sources/deepset-ai__haystack/README.md)<br>[test/core/pipeline/features/README.md](../../../../sources/deepset-ai__haystack/test/core/pipeline/features/README.md)<br>[pydoc/README.md](../../../../sources/deepset-ai__haystack/pydoc/README.md)<br>[examples/README.md](../../../../sources/deepset-ai__haystack/examples/README.md)<br>[docs-website/docusaurus.config.js](../../../../sources/deepset-ai__haystack/docs-website/docusaurus.config.js)<br>[docs-website/README.md](../../../../sources/deepset-ai__haystack/docs-website/README.md)<br>[docs-website/static/img/docusaurus-social-card.jpg](../../../../sources/deepset-ai__haystack/docs-website/static/img/docusaurus-social-card.jpg)<br>[docs-website/src/components/docs/AgentsContent/index.mdx](../../../../sources/deepset-ai__haystack/docs-website/src/components/docs/AgentsContent/index.mdx) |
| config | 3 | [pyproject.toml](../../../../sources/deepset-ai__haystack/pyproject.toml)<br>[docs-website/package.json](../../../../sources/deepset-ai__haystack/docs-website/package.json)<br>[docs-website/api/tsconfig.json](../../../../sources/deepset-ai__haystack/docs-website/api/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 433 | [test/__init__.py](../../../../sources/deepset-ai__haystack/test/__init__.py)<br>[test/conftest.py](../../../../sources/deepset-ai__haystack/test/conftest.py)<br>[test/test_imports.py](../../../../sources/deepset-ai__haystack/test/test_imports.py)<br>[test/test_logging.py](../../../../sources/deepset-ai__haystack/test/test_logging.py)<br>[test/test_release_note_backticks.py](../../../../sources/deepset-ai__haystack/test/test_release_note_backticks.py)<br>[test/test_telemetry.py](../../../../sources/deepset-ai__haystack/test/test_telemetry.py) |
| CI workflows | 29 | [.github/workflows/auto_approve_api_ref_sync.yml](../../../../sources/deepset-ai__haystack/.github/workflows/auto_approve_api_ref_sync.yml)<br>[.github/workflows/branch_off.yml](../../../../sources/deepset-ai__haystack/.github/workflows/branch_off.yml)<br>[.github/workflows/check_api_ref.yml](../../../../sources/deepset-ai__haystack/.github/workflows/check_api_ref.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/deepset-ai__haystack/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/deepset-ai__haystack/.github/workflows/claude.yml)<br>[.github/workflows/coverage_comment.yml](../../../../sources/deepset-ai__haystack/.github/workflows/coverage_comment.yml) |
| Containers / deploy | 43 | [docs-website/versioned_docs/version-2.30/development/deployment/docker.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.30/development/deployment/docker.mdx)<br>[docs-website/versioned_docs/version-2.30/development/deployment/kubernetes.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.30/development/deployment/kubernetes.mdx)<br>[docs-website/versioned_docs/version-2.30/development/deployment/openshift.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.30/development/deployment/openshift.mdx)<br>[docs-website/versioned_docs/version-2.29/development/deployment/docker.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.29/development/deployment/docker.mdx)<br>[docs-website/versioned_docs/version-2.29/development/deployment/kubernetes.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.29/development/deployment/kubernetes.mdx)<br>[docs-website/versioned_docs/version-2.29/development/deployment/openshift.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.29/development/deployment/openshift.mdx) |
| Security / policy | 44 | [SECURITY.md](../../../../sources/deepset-ai__haystack/SECURITY.md)<br>[test/utils/test_auth.py](../../../../sources/deepset-ai__haystack/test/utils/test_auth.py)<br>[test/document_stores/test_filter_policy.py](../../../../sources/deepset-ai__haystack/test/document_stores/test_filter_policy.py)<br>[releasenotes/notes/add-apply_filter_policy-function-ae3152e6afe0ca57.yaml](../../../../sources/deepset-ai__haystack/releasenotes/notes/add-apply_filter_policy-function-ae3152e6afe0ca57.yaml)<br>[releasenotes/notes/azure-chat-generator-secret-endpoint-api-version-0edaf403d50ff942.yaml](../../../../sources/deepset-ai__haystack/releasenotes/notes/azure-chat-generator-secret-endpoint-api-version-0edaf403d50ff942.yaml)<br>[releasenotes/notes/default-write-documents-policy-95afe5fb34fc73ad.yaml](../../../../sources/deepset-ai__haystack/releasenotes/notes/default-write-documents-policy-95afe5fb34fc73ad.yaml) |
| Agent instructions | 16 | [AGENTS.md](../../../../sources/deepset-ai__haystack/AGENTS.md)<br>[CLAUDE.md](../../../../sources/deepset-ai__haystack/CLAUDE.md)<br>[docs-website/versioned_docs/version-2.30/concepts/agents.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.30/concepts/agents.mdx)<br>[docs-website/versioned_docs/version-2.29/concepts/agents.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.29/concepts/agents.mdx)<br>[docs-website/versioned_docs/version-2.28/concepts/agents.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.28/concepts/agents.mdx)<br>[docs-website/versioned_docs/version-2.27/concepts/agents.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.27/concepts/agents.mdx) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `releasenotes/notes/fix-tool-invoker-warmup-tool-registry-cda6e84af3387ac8.yaml`, `docs-website/versioned_docs/version-2.30/overview/docs-mcp-server.mdx`, `docs-website/versioned_docs/version-2.29/overview/docs-mcp-server.mdx`.
2. Map agent/tool runtime through: `AGENTS.md`, `test/tools/test_component_tool.py`, `test/tools/test_from_function.py`.
3. Inspect retrieval/memory/indexing through: `test/document_stores/test_in_memory.py`, `test/dataclasses/test_sparse_embedding.py`, `test/dataclasses/test_streaming_chunk.py`.
4. Verify behavior through test/eval files: `test/__init__.py`, `test/conftest.py`, `test/test_imports.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 8383 files, 844 directories.. 핵심 구조 신호는 MDX, pyproject.toml, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
