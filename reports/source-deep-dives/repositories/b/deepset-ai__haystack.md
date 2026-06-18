# deepset-ai/haystack 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 8383 files, 844 directories.

## 요약

- 조사 단위: `sources/deepset-ai__haystack` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 8,383 files, 844 directories, depth score 119, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=releasenotes/notes/fix-tool-invoker-warmup-tool-registry-cda6e84af3387ac8.yaml, docs-website/versioned_docs/version-2.30/overview/docs-mcp-server.mdx, docs-website/versioned_docs/version-2.29/overview/docs-mcp-server.mdx이고, 의존성 단서는 openai, express, pydantic, torch, transformers, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | deepset-ai/haystack |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | MDX |
| Stars | 25594 |
| Forks | 2863 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/deepset-ai__haystack](../../../../sources/deepset-ai__haystack) |
| 기존 보고서 | [reports/global-trending/repositories/deepset-ai__haystack.md](../../../global-trending/repositories/deepset-ai__haystack.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 8383 / 844 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, docker, docs-website, e2e, examples, haystack, images, pydoc, releasenotes, scripts, test |
| 상위 확장자 | .mdx: 4833, .md: 1646, .yaml: 1064, .py: 567, .yml: 65, .json: 39, .png: 38, .svg: 34, .js: 14, .txt: 13, (none): 7, .docx: 6 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch, transformers |
| webRuntime | express |
| developerSurface | 없음 |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 433 | [test/__init__.py](../../../../sources/deepset-ai__haystack/test/__init__.py)<br>[test/conftest.py](../../../../sources/deepset-ai__haystack/test/conftest.py)<br>[test/test_imports.py](../../../../sources/deepset-ai__haystack/test/test_imports.py)<br>[test/test_logging.py](../../../../sources/deepset-ai__haystack/test/test_logging.py)<br>[test/test_release_note_backticks.py](../../../../sources/deepset-ai__haystack/test/test_release_note_backticks.py)<br>[test/test_telemetry.py](../../../../sources/deepset-ai__haystack/test/test_telemetry.py) |
| CI workflow | 29 | [.github/workflows/auto_approve_api_ref_sync.yml](../../../../sources/deepset-ai__haystack/.github/workflows/auto_approve_api_ref_sync.yml)<br>[.github/workflows/branch_off.yml](../../../../sources/deepset-ai__haystack/.github/workflows/branch_off.yml)<br>[.github/workflows/check_api_ref.yml](../../../../sources/deepset-ai__haystack/.github/workflows/check_api_ref.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/deepset-ai__haystack/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/deepset-ai__haystack/.github/workflows/claude.yml)<br>[.github/workflows/coverage_comment.yml](../../../../sources/deepset-ai__haystack/.github/workflows/coverage_comment.yml) |
| 컨테이너/배포 | 43 | [docs-website/versioned_docs/version-2.30/development/deployment/docker.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.30/development/deployment/docker.mdx)<br>[docs-website/versioned_docs/version-2.30/development/deployment/kubernetes.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.30/development/deployment/kubernetes.mdx)<br>[docs-website/versioned_docs/version-2.30/development/deployment/openshift.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.30/development/deployment/openshift.mdx)<br>[docs-website/versioned_docs/version-2.29/development/deployment/docker.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.29/development/deployment/docker.mdx)<br>[docs-website/versioned_docs/version-2.29/development/deployment/kubernetes.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.29/development/deployment/kubernetes.mdx)<br>[docs-website/versioned_docs/version-2.29/development/deployment/openshift.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.29/development/deployment/openshift.mdx) |
| 보안/정책 | 44 | [SECURITY.md](../../../../sources/deepset-ai__haystack/SECURITY.md)<br>[test/utils/test_auth.py](../../../../sources/deepset-ai__haystack/test/utils/test_auth.py)<br>[test/document_stores/test_filter_policy.py](../../../../sources/deepset-ai__haystack/test/document_stores/test_filter_policy.py)<br>[releasenotes/notes/add-apply_filter_policy-function-ae3152e6afe0ca57.yaml](../../../../sources/deepset-ai__haystack/releasenotes/notes/add-apply_filter_policy-function-ae3152e6afe0ca57.yaml)<br>[releasenotes/notes/azure-chat-generator-secret-endpoint-api-version-0edaf403d50ff942.yaml](../../../../sources/deepset-ai__haystack/releasenotes/notes/azure-chat-generator-secret-endpoint-api-version-0edaf403d50ff942.yaml)<br>[releasenotes/notes/default-write-documents-policy-95afe5fb34fc73ad.yaml](../../../../sources/deepset-ai__haystack/releasenotes/notes/default-write-documents-policy-95afe5fb34fc73ad.yaml) |
| 에이전트 지시문 | 16 | [AGENTS.md](../../../../sources/deepset-ai__haystack/AGENTS.md)<br>[CLAUDE.md](../../../../sources/deepset-ai__haystack/CLAUDE.md)<br>[docs-website/versioned_docs/version-2.30/concepts/agents.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.30/concepts/agents.mdx)<br>[docs-website/versioned_docs/version-2.29/concepts/agents.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.29/concepts/agents.mdx)<br>[docs-website/versioned_docs/version-2.28/concepts/agents.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.28/concepts/agents.mdx)<br>[docs-website/versioned_docs/version-2.27/concepts/agents.mdx](../../../../sources/deepset-ai__haystack/docs-website/versioned_docs/version-2.27/concepts/agents.mdx) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `releasenotes/notes/fix-tool-invoker-warmup-tool-registry-cda6e84af3387ac8.yaml`, `docs-website/versioned_docs/version-2.30/overview/docs-mcp-server.mdx`, `docs-website/versioned_docs/version-2.29/overview/docs-mcp-server.mdx`.
2. agent/tool runtime 매핑: `AGENTS.md`, `test/tools/test_component_tool.py`, `test/tools/test_from_function.py`.
3. retrieval/memory/indexing 확인: `test/document_stores/test_in_memory.py`, `test/dataclasses/test_sparse_embedding.py`, `test/dataclasses/test_streaming_chunk.py`.
4. test/eval 파일로 동작 검증: `test/__init__.py`, `test/conftest.py`, `test/test_imports.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 8383 files, 844 directories.. 핵심 구조 신호는 MDX, pyproject.toml, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
