# crewAIInc/crewAI 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 3287 files, 512 directories.

## 요약

- 조사 단위: `sources/crewAIInc__crewAI` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,287 files, 512 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=lib/crewai-tools/tests/adapters/mcp_adapter_test.py, lib/crewai-tools/src/crewai_tools/adapters/mcp_adapter.py, lib/crewai/tests/mcp/__init__.py이고, 의존성 단서는 openai, langchain, fastapi, pydantic, transformers, qdrant, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | crewAIInc/crewAI |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 53827 |
| Forks | 7532 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/crewAIInc__crewAI](../../../../sources/crewAIInc__crewAI) |
| 기존 보고서 | [reports/global-trending/repositories/crewAIInc__crewAI.md](../../../global-trending/repositories/crewAIInc__crewAI.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3287 / 512 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .github, docs, lib, scripts |
| 상위 확장자 | .py: 1224, .mdx: 1065, .yaml: 609, .png: 212, .md: 97, .yml: 19, .json: 16, .toml: 10, (none): 9, .typed: 5, .gif: 3, .js: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| lib | source boundary | 250 |
| docs | documentation surface | 27 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | langchain |
| vectorStores | qdrant |
| modelRuntime | transformers |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1076 | [lib/devtools/tests/__init__.py](../../../../sources/crewAIInc__crewAI/lib/devtools/tests/__init__.py)<br>[lib/devtools/tests/test_toml_updates.py](../../../../sources/crewAIInc__crewAI/lib/devtools/tests/test_toml_updates.py)<br>[lib/crewai-tools/tests/__init__.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/__init__.py)<br>[lib/crewai-tools/tests/base_tool_test.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/base_tool_test.py)<br>[lib/crewai-tools/tests/file_read_tool_test.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/file_read_tool_test.py)<br>[lib/crewai-tools/tests/test_generate_tool_specs.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/test_generate_tool_specs.py) |
| CI workflow | 14 | [.github/workflows/build-uv-cache.yml](../../../../sources/crewAIInc__crewAI/.github/workflows/build-uv-cache.yml)<br>[.github/workflows/codeql.yml](../../../../sources/crewAIInc__crewAI/.github/workflows/codeql.yml)<br>[.github/workflows/docs-broken-links.yml](../../../../sources/crewAIInc__crewAI/.github/workflows/docs-broken-links.yml)<br>[.github/workflows/generate-tool-specs.yml](../../../../sources/crewAIInc__crewAI/.github/workflows/generate-tool-specs.yml)<br>[.github/workflows/linter.yml](../../../../sources/crewAIInc__crewAI/.github/workflows/linter.yml)<br>[.github/workflows/nightly.yml](../../../../sources/crewAIInc__crewAI/.github/workflows/nightly.yml) |
| 컨테이너/배포 | 6 | [lib/cli/tests/deploy/__init__.py](../../../../sources/crewAIInc__crewAI/lib/cli/tests/deploy/__init__.py)<br>[lib/cli/tests/deploy/test_deploy_main.py](../../../../sources/crewAIInc__crewAI/lib/cli/tests/deploy/test_deploy_main.py)<br>[lib/cli/tests/deploy/test_validate.py](../../../../sources/crewAIInc__crewAI/lib/cli/tests/deploy/test_validate.py)<br>[lib/cli/src/crewai_cli/deploy/__init__.py](../../../../sources/crewAIInc__crewAI/lib/cli/src/crewai_cli/deploy/__init__.py)<br>[lib/cli/src/crewai_cli/deploy/main.py](../../../../sources/crewAIInc__crewAI/lib/cli/src/crewai_cli/deploy/main.py)<br>[lib/cli/src/crewai_cli/deploy/validate.py](../../../../sources/crewAIInc__crewAI/lib/cli/src/crewai_cli/deploy/validate.py) |
| 보안/정책 | 88 | [lib/crewai-tools/tests/tools/test_nl2sql_security.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/tests/tools/test_nl2sql_security.py)<br>[lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/__init__.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/__init__.py)<br>[lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_base_tool.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_base_tool.py)<br>[lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_exec_tool.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_exec_tool.py)<br>[lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_file_tool.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_file_tool.py)<br>[lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_python_tool.py](../../../../sources/crewAIInc__crewAI/lib/crewai-tools/src/crewai_tools/tools/e2b_sandbox_tool/e2b_python_tool.py) |
| 에이전트 지시문 | 5 | [lib/cli/src/crewai_cli/templates/AGENTS.md](../../../../sources/crewAIInc__crewAI/lib/cli/src/crewai_cli/templates/AGENTS.md)<br>[docs/pt-BR/concepts/agents.mdx](../../../../sources/crewAIInc__crewAI/docs/pt-BR/concepts/agents.mdx)<br>[docs/ko/concepts/agents.mdx](../../../../sources/crewAIInc__crewAI/docs/ko/concepts/agents.mdx)<br>[docs/en/concepts/agents.mdx](../../../../sources/crewAIInc__crewAI/docs/en/concepts/agents.mdx)<br>[docs/ar/concepts/agents.mdx](../../../../sources/crewAIInc__crewAI/docs/ar/concepts/agents.mdx) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `lib/crewai-tools/tests/adapters/mcp_adapter_test.py`, `lib/crewai-tools/src/crewai_tools/adapters/mcp_adapter.py`, `lib/crewai/tests/mcp/__init__.py`.
2. entrypoint를 따라 실행 흐름 확인: `lib/crewai/src/crewai/a2a/extensions/server.py`, `lib/cli/src/crewai_cli/triggers/main.py`, `lib/cli/src/crewai_cli/tools/main.py`.
3. agent/tool runtime 매핑: `lib/crewai-tools/tool.specs.json`, `lib/crewai-tools/tests/tools/__init__.py`, `lib/crewai-tools/tests/tools/arxiv_paper_tool_test.py`.
4. retrieval/memory/indexing 확인: `lib/crewai-tools/tests/tools/test_mongodb_vector_search_tool.py`, `lib/crewai-tools/tests/tools/rag/rag_tool_test.py`, `lib/crewai-tools/tests/tools/rag/test_rag_tool_add_data_type.py`.
5. test/eval 파일로 동작 검증: `lib/devtools/tests/__init__.py`, `lib/devtools/tests/test_toml_updates.py`, `lib/crewai-tools/tests/__init__.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 3287 files, 512 directories.. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, langchain, pydantic이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
