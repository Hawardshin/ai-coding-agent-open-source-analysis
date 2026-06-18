# run-llama/llama_index Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 10012 files, 3792 directories.

## 요약

- 조사 단위: `sources/run-llama__llama_index` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 10,012 files, 3,792 directories, depth score 135, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=llama-index-integrations/tools/llama-index-tools-mcp-discovery/.gitignore, llama-index-integrations/tools/llama-index-tools-mcp-discovery/CHANGELOG.md, llama-index-integrations/tools/llama-index-tools-mcp-discovery/LICENSE이고, 의존성 단서는 openai, llamaindex, llama-index, pydantic, llama, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | run-llama/llama_index |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 50200 |
| Forks | 7581 |
| License | none |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/run-llama__llama_index](../../../../sources/run-llama__llama_index) |
| Existing report | [reports/global-trending/repositories/run-llama__llama_index.md](../../../global-trending/repositories/run-llama__llama_index.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 10012 / 3792 |
| Max observed depth | 9 |
| Top directories | .github, docs, llama-dev, llama-index-core, llama-index-instrumentation, llama-index-integrations, llama-index-utils, scripts |
| Top extensions | .py: 3826, (none): 1821, .md: 1808, .ipynb: 759, .toml: 641, .lock: 620, .txt: 131, .yml: 91, .png: 89, .typed: 80, .mdx: 27, .json: 21 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 15 |
| .github | ci surface | 1 |
| llama-dev | top-level component | 1 |
| llama-index-core | top-level component | 1 |
| llama-index-instrumentation | top-level component | 1 |
| llama-index-integrations | top-level component | 1 |
| llama-index-utils | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
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


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | llamaindex, llama-index |
| vectorStores | none |
| modelRuntime | llama |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
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


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1814 | [llama-index-utils/llama-index-utils-qianfan/tests/__init__.py](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-qianfan/tests/__init__.py)<br>[llama-index-utils/llama-index-utils-qianfan/tests/test_apis.py](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-qianfan/tests/test_apis.py)<br>[llama-index-utils/llama-index-utils-qianfan/tests/test_authorization.py](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-qianfan/tests/test_authorization.py)<br>[llama-index-utils/llama-index-utils-qianfan/tests/test_client.py](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-qianfan/tests/test_client.py)<br>[llama-index-utils/llama-index-utils-oracleai/tests/__init__.py](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-oracleai/tests/__init__.py)<br>[llama-index-utils/llama-index-utils-oracleai/tests/test_utils_oracleai.py](../../../../sources/run-llama__llama_index/llama-index-utils/llama-index-utils-oracleai/tests/test_utils_oracleai.py) |
| CI workflows | 14 | [.github/workflows/build_package.yml](../../../../sources/run-llama__llama_index/.github/workflows/build_package.yml)<br>[.github/workflows/close_new_integration_prs.yml](../../../../sources/run-llama__llama_index/.github/workflows/close_new_integration_prs.yml)<br>[.github/workflows/codeql.yml](../../../../sources/run-llama__llama_index/.github/workflows/codeql.yml)<br>[.github/workflows/core-typecheck.yml](../../../../sources/run-llama__llama_index/.github/workflows/core-typecheck.yml)<br>[.github/workflows/coverage_check.yml](../../../../sources/run-llama__llama_index/.github/workflows/coverage_check.yml)<br>[.github/workflows/issue_classifier.yml](../../../../sources/run-llama__llama_index/.github/workflows/issue_classifier.yml) |
| Containers / deploy | 9 | [llama-index-integrations/vector_stores/llama-index-vector-stores-solr/tests/docker-compose.yml](../../../../sources/run-llama__llama_index/llama-index-integrations/vector_stores/llama-index-vector-stores-solr/tests/docker-compose.yml)<br>[llama-index-integrations/vector_stores/llama-index-vector-stores-opensearch/tests/docker-compose.yml](../../../../sources/run-llama__llama_index/llama-index-integrations/vector_stores/llama-index-vector-stores-opensearch/tests/docker-compose.yml)<br>[llama-index-integrations/vector_stores/llama-index-vector-stores-mariadb/tests/docker-compose.yaml](../../../../sources/run-llama__llama_index/llama-index-integrations/vector_stores/llama-index-vector-stores-mariadb/tests/docker-compose.yaml)<br>[llama-index-integrations/vector_stores/llama-index-vector-stores-elasticsearch/tests/docker-compose.yml](../../../../sources/run-llama__llama_index/llama-index-integrations/vector_stores/llama-index-vector-stores-elasticsearch/tests/docker-compose.yml)<br>[llama-index-integrations/vector_stores/llama-index-vector-stores-clickhouse/docker-compose.yml](../../../../sources/run-llama__llama_index/llama-index-integrations/vector_stores/llama-index-vector-stores-clickhouse/docker-compose.yml)<br>[llama-index-integrations/embeddings/llama-index-embeddings-elasticsearch/docker-compose.yml](../../../../sources/run-llama__llama_index/llama-index-integrations/embeddings/llama-index-embeddings-elasticsearch/docker-compose.yml) |
| Security / policy | 6 | [SECURITY.md](../../../../sources/run-llama__llama_index/SECURITY.md)<br>[llama-index-integrations/readers/llama-index-readers-github/tests/test_github_app_auth.py](../../../../sources/run-llama__llama_index/llama-index-integrations/readers/llama-index-readers-github/tests/test_github_app_auth.py)<br>[llama-index-integrations/readers/llama-index-readers-github/llama_index/readers/github/github_app_auth.py](../../../../sources/run-llama__llama_index/llama-index-integrations/readers/llama-index-readers-github/llama_index/readers/github/github_app_auth.py)<br>[llama-index-integrations/program/llama-index-program-evaporate/tests/test_sandbox.py](../../../../sources/run-llama__llama_index/llama-index-integrations/program/llama-index-program-evaporate/tests/test_sandbox.py)<br>[llama-index-core/llama_index/core/workflow/retry_policy.py](../../../../sources/run-llama__llama_index/llama-index-core/llama_index/core/workflow/retry_policy.py)<br>[docs/examples/multi_modal/multimodal_rag_guardrail_gemini_llmguard_llmguard.ipynb](../../../../sources/run-llama__llama_index/docs/examples/multi_modal/multimodal_rag_guardrail_gemini_llmguard_llmguard.ipynb) |
| Agent instructions | 2 | [docs/src/content/docs/framework/use_cases/agents.md](../../../../sources/run-llama__llama_index/docs/src/content/docs/framework/use_cases/agents.md)<br>[docs/src/content/docs/framework/understanding/putting_it_all_together/agents.md](../../../../sources/run-llama__llama_index/docs/src/content/docs/framework/understanding/putting_it_all_together/agents.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `llama-index-integrations/tools/llama-index-tools-mcp-discovery/.gitignore`, `llama-index-integrations/tools/llama-index-tools-mcp-discovery/CHANGELOG.md`, `llama-index-integrations/tools/llama-index-tools-mcp-discovery/LICENSE`.
2. Trace execution through entrypoints: `llama-index-integrations/tools/llama-index-tools-mcp/tests/server.py`, `llama-dev/llama_dev/__main__.py`.
3. Map agent/tool runtime through: `llama-index-integrations/tools/llama-index-tools-zapier/.gitignore`, `llama-index-integrations/tools/llama-index-tools-zapier/CHANGELOG.md`, `llama-index-integrations/tools/llama-index-tools-zapier/LICENSE`.
4. Inspect retrieval/memory/indexing through: `llama-index-utils/README.md`, `llama-index-utils/llama-index-utils-qianfan/.gitignore`, `llama-index-utils/llama-index-utils-qianfan/LICENSE`.
5. Verify behavior through test/eval files: `llama-index-utils/llama-index-utils-qianfan/tests/__init__.py`, `llama-index-utils/llama-index-utils-qianfan/tests/test_apis.py`, `llama-index-utils/llama-index-utils-qianfan/tests/test_authorization.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 10012 files, 3792 directories.. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, LICENSE, openai이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
