# run-llama/llama_index 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local clone structure analysis: 10012 files, 3792 directories.

## 요약

- 조사 단위: `sources/run-llama__llama_index` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 10,012 files, 3,792 directories, depth score 123, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=llama-index-integrations/tools/llama-index-tools-mcp-discovery/.gitignore, llama-index-integrations/tools/llama-index-tools-mcp-discovery/CHANGELOG.md, llama-index-integrations/tools/llama-index-tools-mcp-discovery/LICENSE이고, 의존성 단서는 openai, llamaindex, llama-index, pydantic, llama, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | run-llama/llama_index |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 50200 |
| Forks | 7581 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/run-llama__llama_index](../../../../sources/run-llama__llama_index) |
| 기존 보고서 | [reports/global-trending/repositories/run-llama__llama_index.md](../../../global-trending/repositories/run-llama__llama_index.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 10012 / 3792 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, docs, llama-dev, llama-index-core, llama-index-instrumentation, llama-index-integrations, llama-index-utils, scripts |
| 상위 확장자 | .py: 3826, (none): 1821, .md: 1808, .ipynb: 759, .toml: 641, .lock: 620, .txt: 131, .yml: 91, .png: 89, .typed: 80, .mdx: 27, .json: 21 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 15 |
| .github | ci surface | 1 |
| llama-dev | top-level component | 1 |
| llama-index-core | top-level component | 1 |
| llama-index-instrumentation | top-level component | 1 |
| llama-index-integrations | top-level component | 1 |
| llama-index-utils | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | help | make help |
| quality | Makefile | format | make format |
| quality | Makefile | lint | make lint |
| test | Makefile | test | make test |
| test | Makefile | test-core | make test-core |
| test | Makefile | test-integrations | make test-integrations |
| test | Makefile | test-finetuning | make test-finetuning |
| test | Makefile | test-experimental | make test-experimental |
| test | Makefile | test-packs | make test-packs |
| serve-dev | Makefile | watch-docs | make watch-docs |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | llamaindex, llama-index |
| vectorStores | 없음 |
| modelRuntime | llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [llama-index-integrations/tools/llama-index-tools-mcp-discovery/.gitignore](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-mcp-discovery/.gitignore) | mcp signal |
| mcp | [llama-index-integrations/tools/llama-index-tools-mcp-discovery/CHANGELOG.md](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-mcp-discovery/CHANGELOG.md) | mcp signal |
| mcp | [llama-index-integrations/tools/llama-index-tools-mcp-discovery/LICENSE](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-mcp-discovery/LICENSE) | mcp signal |
| mcp | [llama-index-integrations/tools/llama-index-tools-mcp-discovery/Makefile](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-mcp-discovery/Makefile) | mcp signal |
| agentRuntime | [llama-index-integrations/tools/llama-index-tools-zapier/.gitignore](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-zapier/.gitignore) | agentRuntime signal |
| agentRuntime | [llama-index-integrations/tools/llama-index-tools-zapier/CHANGELOG.md](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-zapier/CHANGELOG.md) | agentRuntime signal |
| agentRuntime | [llama-index-integrations/tools/llama-index-tools-zapier/LICENSE](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-zapier/LICENSE) | agentRuntime signal |
| agentRuntime | [llama-index-integrations/tools/llama-index-tools-zapier/Makefile](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-zapier/Makefile) | agentRuntime signal |
| entrypoints | [llama-index-integrations/tools/llama-index-tools-mcp/tests/server.py](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-mcp/tests/server.py) | entrypoints signal |
| entrypoints | [llama-dev/llama_dev/__main__.py](../../../../sources/run-llama__llama_index/llama-dev/llama_dev/__main__.py) | entrypoints signal |
| instruction | [docs/src/content/docs/framework/use_cases/agents.md](../../../../sources/run-llama__llama_index/docs/src/content/docs/framework/use_cases/agents.md) | instruction signal |
| instruction | [docs/src/content/docs/framework/understanding/putting_it_all_together/agents.md](../../../../sources/run-llama__llama_index/docs/src/content/docs/framework/understanding/putting_it_all_together/agents.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [llama-index-integrations/tools/llama-index-tools-mcp/tests/server.py](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-mcp/tests/server.py)<br>[llama-dev/llama_dev/__main__.py](../../../../sources/run-llama__llama_index/llama-dev/llama_dev/__main__.py) |
| agentRuntime | 1158 | [llama-index-integrations/tools/llama-index-tools-zapier/.gitignore](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-zapier/.gitignore)<br>[llama-index-integrations/tools/llama-index-tools-zapier/CHANGELOG.md](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-zapier/CHANGELOG.md)<br>[llama-index-integrations/tools/llama-index-tools-zapier/LICENSE](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-zapier/LICENSE)<br>[llama-index-integrations/tools/llama-index-tools-zapier/Makefile](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-zapier/Makefile)<br>[llama-index-integrations/tools/llama-index-tools-zapier/pyproject.toml](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-zapier/pyproject.toml)<br>[llama-index-integrations/tools/llama-index-tools-zapier/README.md](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-zapier/README.md)<br>[llama-index-integrations/tools/llama-index-tools-zapier/uv.lock](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-zapier/uv.lock)<br>[llama-index-integrations/tools/llama-index-tools-zapier/tests/__init__.py](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-zapier/tests/__init__.py) |
| mcp | 41 | [llama-index-integrations/tools/llama-index-tools-mcp-discovery/.gitignore](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-mcp-discovery/.gitignore)<br>[llama-index-integrations/tools/llama-index-tools-mcp-discovery/CHANGELOG.md](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-mcp-discovery/CHANGELOG.md)<br>[llama-index-integrations/tools/llama-index-tools-mcp-discovery/LICENSE](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-mcp-discovery/LICENSE)<br>[llama-index-integrations/tools/llama-index-tools-mcp-discovery/Makefile](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-mcp-discovery/Makefile)<br>[llama-index-integrations/tools/llama-index-tools-mcp-discovery/pyproject.toml](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-mcp-discovery/pyproject.toml)<br>[llama-index-integrations/tools/llama-index-tools-mcp-discovery/README.md](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-mcp-discovery/README.md)<br>[llama-index-integrations/tools/llama-index-tools-mcp-discovery/uv.lock](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-mcp-discovery/uv.lock)<br>[llama-index-integrations/tools/llama-index-tools-mcp-discovery/tests/test_mcp_discovery.py](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-mcp-discovery/tests/test_mcp_discovery.py) |
| retrieval | 8510 | [llama-index-utils/README.md](../../../../sources/run-llama__llama_index/llama-index-utils/README.md)<br>[llama-index-utils/llama-index-utils-qianfan/.gitignore](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-qianfan/.gitignore)<br>[llama-index-utils/llama-index-utils-qianfan/LICENSE](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-qianfan/LICENSE)<br>[llama-index-utils/llama-index-utils-qianfan/Makefile](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-qianfan/Makefile)<br>[llama-index-utils/llama-index-utils-qianfan/pyproject.toml](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-qianfan/pyproject.toml)<br>[llama-index-utils/llama-index-utils-qianfan/README.md](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-qianfan/README.md)<br>[llama-index-utils/llama-index-utils-qianfan/uv.lock](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-qianfan/uv.lock)<br>[llama-index-utils/llama-index-utils-qianfan/tests/__init__.py](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-qianfan/tests/__init__.py) |
| spec | 130 | [llama-index-utils/llama-index-utils-azure/requirements.txt](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-azure/requirements.txt)<br>[llama-index-integrations/tools/llama-index-tools-yelp/requirements.txt](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-yelp/requirements.txt)<br>[llama-index-integrations/tools/llama-index-tools-wikipedia/requirements.txt](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-wikipedia/requirements.txt)<br>[llama-index-integrations/tools/llama-index-tools-waii/requirements.txt](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-waii/requirements.txt)<br>[llama-index-integrations/tools/llama-index-tools-text-to-image/requirements.txt](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-text-to-image/requirements.txt)<br>[llama-index-integrations/tools/llama-index-tools-tavily-research/requirements.txt](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-tavily-research/requirements.txt)<br>[llama-index-integrations/tools/llama-index-tools-shopify/requirements.txt](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-shopify/requirements.txt)<br>[llama-index-integrations/tools/llama-index-tools-salesforce/requirements.txt](../../../../sources/run-llama__llama_index/llama-index-integrations/tools/llama-index-tools-salesforce/requirements.txt) |
| eval | 1814 | [llama-index-utils/llama-index-utils-qianfan/tests/__init__.py](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-qianfan/tests/__init__.py)<br>[llama-index-utils/llama-index-utils-qianfan/tests/test_apis.py](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-qianfan/tests/test_apis.py)<br>[llama-index-utils/llama-index-utils-qianfan/tests/test_authorization.py](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-qianfan/tests/test_authorization.py)<br>[llama-index-utils/llama-index-utils-qianfan/tests/test_client.py](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-qianfan/tests/test_client.py)<br>[llama-index-utils/llama-index-utils-oracleai/tests/__init__.py](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-oracleai/tests/__init__.py)<br>[llama-index-utils/llama-index-utils-oracleai/tests/test_utils_oracleai.py](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-oracleai/tests/test_utils_oracleai.py)<br>[llama-index-integrations/test.sh](../../../../sources/run-llama__llama_index/llama-index-integrations/test.sh)<br>[llama-index-integrations/voice_agents/llama-index-voice-agents-openai/tests/__init__.py](../../../../sources/run-llama__llama_index/llama-index-integrations/voice_agents/llama-index-voice-agents-openai/tests/__init__.py) |
| security | 6 | [SECURITY.md](../../../../sources/run-llama__llama_index/SECURITY.md)<br>[llama-index-integrations/readers/llama-index-readers-github/tests/test_github_app_auth.py](../../../../sources/run-llama__llama_index/llama-index-integrations/readers/llama-index-readers-github/tests/test_github_app_auth.py)<br>[llama-index-integrations/readers/llama-index-readers-github/llama_index/readers/github/github_app_auth.py](../../../../sources/run-llama__llama_index/llama-index-integrations/readers/llama-index-readers-github/llama_index/readers/github/github_app_auth.py)<br>[llama-index-integrations/program/llama-index-program-evaporate/tests/test_sandbox.py](../../../../sources/run-llama__llama_index/llama-index-integrations/program/llama-index-program-evaporate/tests/test_sandbox.py)<br>[llama-index-core/llama_index/core/workflow/retry_policy.py](../../../../sources/run-llama__llama_index/llama-index-core/llama_index/core/workflow/retry_policy.py)<br>[docs/examples/multi_modal/multimodal_rag_guardrail_gemini_llmguard_llmguard.ipynb](../../../../sources/run-llama__llama_index/docs/examples/multi_modal/multimodal_rag_guardrail_gemini_llmguard_llmguard.ipynb) |
| ci | 14 | [.github/workflows/build_package.yml](../../../../sources/run-llama__llama_index/.github/workflows/build_package.yml)<br>[.github/workflows/close_new_integration_prs.yml](../../../../sources/run-llama__llama_index/.github/workflows/close_new_integration_prs.yml)<br>[.github/workflows/codeql.yml](../../../../sources/run-llama__llama_index/.github/workflows/codeql.yml)<br>[.github/workflows/core-typecheck.yml](../../../../sources/run-llama__llama_index/.github/workflows/core-typecheck.yml)<br>[.github/workflows/coverage_check.yml](../../../../sources/run-llama__llama_index/.github/workflows/coverage_check.yml)<br>[.github/workflows/issue_classifier.yml](../../../../sources/run-llama__llama_index/.github/workflows/issue_classifier.yml)<br>[.github/workflows/lint.yml](../../../../sources/run-llama__llama_index/.github/workflows/lint.yml)<br>[.github/workflows/llama_dev_tests.yml](../../../../sources/run-llama__llama_index/.github/workflows/llama_dev_tests.yml) |
| container | 9 | [llama-index-integrations/vector_stores/llama-index-vector-stores-solr/tests/docker-compose.yml](../../../../sources/run-llama__llama_index/llama-index-integrations/vector_stores/llama-index-vector-stores-solr/tests/docker-compose.yml)<br>[llama-index-integrations/vector_stores/llama-index-vector-stores-opensearch/tests/docker-compose.yml](../../../../sources/run-llama__llama_index/llama-index-integrations/vector_stores/llama-index-vector-stores-opensearch/tests/docker-compose.yml)<br>[llama-index-integrations/vector_stores/llama-index-vector-stores-mariadb/tests/docker-compose.yaml](../../../../sources/run-llama__llama_index/llama-index-integrations/vector_stores/llama-index-vector-stores-mariadb/tests/docker-compose.yaml)<br>[llama-index-integrations/vector_stores/llama-index-vector-stores-elasticsearch/tests/docker-compose.yml](../../../../sources/run-llama__llama_index/llama-index-integrations/vector_stores/llama-index-vector-stores-elasticsearch/tests/docker-compose.yml)<br>[llama-index-integrations/vector_stores/llama-index-vector-stores-clickhouse/docker-compose.yml](../../../../sources/run-llama__llama_index/llama-index-integrations/vector_stores/llama-index-vector-stores-clickhouse/docker-compose.yml)<br>[llama-index-integrations/embeddings/llama-index-embeddings-elasticsearch/docker-compose.yml](../../../../sources/run-llama__llama_index/llama-index-integrations/embeddings/llama-index-embeddings-elasticsearch/docker-compose.yml)<br>[llama-index-core/tests/docker-compose.yml](../../../../sources/run-llama__llama_index/llama-index-core/tests/docker-compose.yml)<br>[docs/src/content/docs/framework/understanding/deployment/_meta.yml](../../../../sources/run-llama__llama_index/docs/src/content/docs/framework/understanding/deployment/_meta.yml) |
| instruction | 2 | [docs/src/content/docs/framework/use_cases/agents.md](../../../../sources/run-llama__llama_index/docs/src/content/docs/framework/use_cases/agents.md)<br>[docs/src/content/docs/framework/understanding/putting_it_all_together/agents.md](../../../../sources/run-llama__llama_index/docs/src/content/docs/framework/understanding/putting_it_all_together/agents.md) |
| docs | 2567 | [README.md](../../../../sources/run-llama__llama_index/README.md)<br>[llama-index-utils/README.md](../../../../sources/run-llama__llama_index/llama-index-utils/README.md)<br>[llama-index-utils/llama-index-utils-qianfan/README.md](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-qianfan/README.md)<br>[llama-index-utils/llama-index-utils-oracleai/README.md](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-oracleai/README.md)<br>[llama-index-utils/llama-index-utils-huggingface/README.md](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-huggingface/README.md)<br>[llama-index-utils/llama-index-utils-azure/README.md](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-azure/README.md)<br>[llama-index-integrations/README.md](../../../../sources/run-llama__llama_index/llama-index-integrations/README.md)<br>[llama-index-integrations/voice_agents/llama-index-voice-agents-openai/README.md](../../../../sources/run-llama__llama_index/llama-index-integrations/voice_agents/llama-index-voice-agents-openai/README.md) |
| config | 1984 | [Makefile](../../../../sources/run-llama__llama_index/Makefile)<br>[pyproject.toml](../../../../sources/run-llama__llama_index/pyproject.toml)<br>[uv.lock](../../../../sources/run-llama__llama_index/uv.lock)<br>[llama-index-utils/llama-index-utils-qianfan/Makefile](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-qianfan/Makefile)<br>[llama-index-utils/llama-index-utils-qianfan/pyproject.toml](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-qianfan/pyproject.toml)<br>[llama-index-utils/llama-index-utils-qianfan/uv.lock](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-qianfan/uv.lock)<br>[llama-index-utils/llama-index-utils-oracleai/Makefile](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-oracleai/Makefile)<br>[llama-index-utils/llama-index-utils-oracleai/pyproject.toml](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-oracleai/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1814 | [llama-index-utils/llama-index-utils-qianfan/tests/__init__.py](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-qianfan/tests/__init__.py)<br>[llama-index-utils/llama-index-utils-qianfan/tests/test_apis.py](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-qianfan/tests/test_apis.py)<br>[llama-index-utils/llama-index-utils-qianfan/tests/test_authorization.py](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-qianfan/tests/test_authorization.py)<br>[llama-index-utils/llama-index-utils-qianfan/tests/test_client.py](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-qianfan/tests/test_client.py)<br>[llama-index-utils/llama-index-utils-oracleai/tests/__init__.py](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-oracleai/tests/__init__.py)<br>[llama-index-utils/llama-index-utils-oracleai/tests/test_utils_oracleai.py](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-oracleai/tests/test_utils_oracleai.py) |
| CI workflow | 14 | [.github/workflows/build_package.yml](../../../../sources/run-llama__llama_index/.github/workflows/build_package.yml)<br>[.github/workflows/close_new_integration_prs.yml](../../../../sources/run-llama__llama_index/.github/workflows/close_new_integration_prs.yml)<br>[.github/workflows/codeql.yml](../../../../sources/run-llama__llama_index/.github/workflows/codeql.yml)<br>[.github/workflows/core-typecheck.yml](../../../../sources/run-llama__llama_index/.github/workflows/core-typecheck.yml)<br>[.github/workflows/coverage_check.yml](../../../../sources/run-llama__llama_index/.github/workflows/coverage_check.yml)<br>[.github/workflows/issue_classifier.yml](../../../../sources/run-llama__llama_index/.github/workflows/issue_classifier.yml) |
| 컨테이너/배포 | 9 | [llama-index-integrations/vector_stores/llama-index-vector-stores-solr/tests/docker-compose.yml](../../../../sources/run-llama__llama_index/llama-index-integrations/vector_stores/llama-index-vector-stores-solr/tests/docker-compose.yml)<br>[llama-index-integrations/vector_stores/llama-index-vector-stores-opensearch/tests/docker-compose.yml](../../../../sources/run-llama__llama_index/llama-index-integrations/vector_stores/llama-index-vector-stores-opensearch/tests/docker-compose.yml)<br>[llama-index-integrations/vector_stores/llama-index-vector-stores-mariadb/tests/docker-compose.yaml](../../../../sources/run-llama__llama_index/llama-index-integrations/vector_stores/llama-index-vector-stores-mariadb/tests/docker-compose.yaml)<br>[llama-index-integrations/vector_stores/llama-index-vector-stores-elasticsearch/tests/docker-compose.yml](../../../../sources/run-llama__llama_index/llama-index-integrations/vector_stores/llama-index-vector-stores-elasticsearch/tests/docker-compose.yml)<br>[llama-index-integrations/vector_stores/llama-index-vector-stores-clickhouse/docker-compose.yml](../../../../sources/run-llama__llama_index/llama-index-integrations/vector_stores/llama-index-vector-stores-clickhouse/docker-compose.yml)<br>[llama-index-integrations/embeddings/llama-index-embeddings-elasticsearch/docker-compose.yml](../../../../sources/run-llama__llama_index/llama-index-integrations/embeddings/llama-index-embeddings-elasticsearch/docker-compose.yml) |
| 보안/정책 | 6 | [SECURITY.md](../../../../sources/run-llama__llama_index/SECURITY.md)<br>[llama-index-integrations/readers/llama-index-readers-github/tests/test_github_app_auth.py](../../../../sources/run-llama__llama_index/llama-index-integrations/readers/llama-index-readers-github/tests/test_github_app_auth.py)<br>[llama-index-integrations/readers/llama-index-readers-github/llama_index/readers/github/github_app_auth.py](../../../../sources/run-llama__llama_index/llama-index-integrations/readers/llama-index-readers-github/llama_index/readers/github/github_app_auth.py)<br>[llama-index-integrations/program/llama-index-program-evaporate/tests/test_sandbox.py](../../../../sources/run-llama__llama_index/llama-index-integrations/program/llama-index-program-evaporate/tests/test_sandbox.py)<br>[llama-index-core/llama_index/core/workflow/retry_policy.py](../../../../sources/run-llama__llama_index/llama-index-core/llama_index/core/workflow/retry_policy.py)<br>[docs/examples/multi_modal/multimodal_rag_guardrail_gemini_llmguard_llmguard.ipynb](../../../../sources/run-llama__llama_index/docs/examples/multi_modal/multimodal_rag_guardrail_gemini_llmguard_llmguard.ipynb) |
| 에이전트 지시문 | 2 | [docs/src/content/docs/framework/use_cases/agents.md](../../../../sources/run-llama__llama_index/docs/src/content/docs/framework/use_cases/agents.md)<br>[docs/src/content/docs/framework/understanding/putting_it_all_together/agents.md](../../../../sources/run-llama__llama_index/docs/src/content/docs/framework/understanding/putting_it_all_together/agents.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `llama-index-integrations/tools/llama-index-tools-mcp-discovery/.gitignore`, `llama-index-integrations/tools/llama-index-tools-mcp-discovery/CHANGELOG.md`, `llama-index-integrations/tools/llama-index-tools-mcp-discovery/LICENSE`.
2. entrypoint를 따라 실행 흐름 확인: `llama-index-integrations/tools/llama-index-tools-mcp/tests/server.py`, `llama-dev/llama_dev/__main__.py`.
3. agent/tool runtime 매핑: `llama-index-integrations/tools/llama-index-tools-zapier/.gitignore`, `llama-index-integrations/tools/llama-index-tools-zapier/CHANGELOG.md`, `llama-index-integrations/tools/llama-index-tools-zapier/LICENSE`.
4. retrieval/memory/indexing 확인: `llama-index-utils/README.md`, `llama-index-utils/llama-index-utils-qianfan/.gitignore`, `llama-index-utils/llama-index-utils-qianfan/LICENSE`.
5. test/eval 파일로 동작 검증: `llama-index-utils/llama-index-utils-qianfan/tests/__init__.py`, `llama-index-utils/llama-index-utils-qianfan/tests/test_apis.py`, `llama-index-utils/llama-index-utils-qianfan/tests/test_authorization.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 10012 files, 3792 directories.. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, LICENSE, openai이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
