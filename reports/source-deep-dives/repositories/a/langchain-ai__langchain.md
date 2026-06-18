# langchain-ai/langchain Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 2937 files, 556 directories.

## 요약

- 조사 단위: `sources/langchain-ai__langchain` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,935 files, 555 directories, depth score 135, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, libs/partners/openai/tests/cassettes/test_mcp_builtin_zdr.yaml.gz, libs/partners/openai/tests/cassettes/test_mcp_builtin.yaml.gz이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | langchain-ai/langchain |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 139576 |
| Forks | 23129 |
| License | none |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/langchain-ai__langchain](../../../../sources/langchain-ai__langchain) |
| Existing report | [reports/global-trending/repositories/langchain-ai__langchain.md](../../../global-trending/repositories/langchain-ai__langchain.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2935 / 555 |
| Max observed depth | 9 |
| Top directories | .devcontainer, .github, libs |
| Top extensions | .py: 2520, (none): 63, .gz: 61, .json: 45, .yml: 38, .toml: 29, .md: 28, .ambr: 26, .lock: 21, .sh: 20, .typed: 20, .txt: 18 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| libs/partners | libs workspace | 66 |
| libs/standard-tests | libs workspace | 39 |
| libs/langchain_v1 | libs workspace | 38 |
| libs/langchain | libs workspace | 33 |
| libs/text-splitters | libs workspace | 15 |
| libs/core | libs workspace | 8 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| libs | source boundary | 1 |
| libs/Makefile | libs workspace | 1 |
| libs/model-profiles | libs workspace | 1 |
| libs/README.md | libs workspace | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/langchain-ai__langchain/.mcp.json) | mcp signal |
| mcp | [libs/partners/openai/tests/cassettes/test_mcp_builtin_zdr.yaml.gz](../../../../sources/langchain-ai__langchain/libs/partners/openai/tests/cassettes/test_mcp_builtin_zdr.yaml.gz) | mcp signal |
| mcp | [libs/partners/openai/tests/cassettes/test_mcp_builtin.yaml.gz](../../../../sources/langchain-ai__langchain/libs/partners/openai/tests/cassettes/test_mcp_builtin.yaml.gz) | mcp signal |
| mcp | [libs/partners/anthropic/tests/cassettes/test_remote_mcp.yaml.gz](../../../../sources/langchain-ai__langchain/libs/partners/anthropic/tests/cassettes/test_remote_mcp.yaml.gz) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/langchain-ai__langchain/AGENTS.md) | agentRuntime signal |
| agentRuntime | [libs/standard-tests/langchain_tests/unit_tests/tools.py](../../../../sources/langchain-ai__langchain/libs/standard-tests/langchain_tests/unit_tests/tools.py) | agentRuntime signal |
| agentRuntime | [libs/standard-tests/langchain_tests/integration_tests/tools.py](../../../../sources/langchain-ai__langchain/libs/standard-tests/langchain_tests/integration_tests/tools.py) | agentRuntime signal |
| agentRuntime | [libs/partners/perplexity/langchain_perplexity/tools.py](../../../../sources/langchain-ai__langchain/libs/partners/perplexity/langchain_perplexity/tools.py) | agentRuntime signal |
| entrypoints | [libs/langchain/tests/mock_servers/robot/server.py](../../../../sources/langchain-ai__langchain/libs/langchain/tests/mock_servers/robot/server.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/langchain-ai__langchain/CLAUDE.md) | instruction signal |
| config | [libs/Makefile](../../../../sources/langchain-ai__langchain/libs/Makefile) | config signal |
| config | [libs/text-splitters/Makefile](../../../../sources/langchain-ai__langchain/libs/text-splitters/Makefile) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [libs/langchain/tests/mock_servers/robot/server.py](../../../../sources/langchain-ai__langchain/libs/langchain/tests/mock_servers/robot/server.py) |
| agentRuntime | 550 | [AGENTS.md](../../../../sources/langchain-ai__langchain/AGENTS.md)<br>[libs/standard-tests/langchain_tests/unit_tests/tools.py](../../../../sources/langchain-ai__langchain/libs/standard-tests/langchain_tests/unit_tests/tools.py)<br>[libs/standard-tests/langchain_tests/integration_tests/tools.py](../../../../sources/langchain-ai__langchain/libs/standard-tests/langchain_tests/integration_tests/tools.py)<br>[libs/partners/perplexity/langchain_perplexity/tools.py](../../../../sources/langchain-ai__langchain/libs/partners/perplexity/langchain_perplexity/tools.py)<br>[libs/partners/openai/langchain_openai/tools/__init__.py](../../../../sources/langchain-ai__langchain/libs/partners/openai/langchain_openai/tools/__init__.py)<br>[libs/partners/openai/langchain_openai/tools/custom_tool.py](../../../../sources/langchain-ai__langchain/libs/partners/openai/langchain_openai/tools/custom_tool.py)<br>[libs/partners/openai/langchain_openai/output_parsers/tools.py](../../../../sources/langchain-ai__langchain/libs/partners/openai/langchain_openai/output_parsers/tools.py)<br>[libs/partners/exa/langchain_exa/tools.py](../../../../sources/langchain-ai__langchain/libs/partners/exa/langchain_exa/tools.py) |
| mcp | 4 | [.mcp.json](../../../../sources/langchain-ai__langchain/.mcp.json)<br>[libs/partners/openai/tests/cassettes/test_mcp_builtin_zdr.yaml.gz](../../../../sources/langchain-ai__langchain/libs/partners/openai/tests/cassettes/test_mcp_builtin_zdr.yaml.gz)<br>[libs/partners/openai/tests/cassettes/test_mcp_builtin.yaml.gz](../../../../sources/langchain-ai__langchain/libs/partners/openai/tests/cassettes/test_mcp_builtin.yaml.gz)<br>[libs/partners/anthropic/tests/cassettes/test_remote_mcp.yaml.gz](../../../../sources/langchain-ai__langchain/libs/partners/anthropic/tests/cassettes/test_remote_mcp.yaml.gz) |
| retrieval | 150 | [libs/standard-tests/tests/unit_tests/test_in_memory_base_store.py](../../../../sources/langchain-ai__langchain/libs/standard-tests/tests/unit_tests/test_in_memory_base_store.py)<br>[libs/standard-tests/tests/unit_tests/test_in_memory_cache.py](../../../../sources/langchain-ai__langchain/libs/standard-tests/tests/unit_tests/test_in_memory_cache.py)<br>[libs/standard-tests/tests/unit_tests/test_in_memory_vectorstore.py](../../../../sources/langchain-ai__langchain/libs/standard-tests/tests/unit_tests/test_in_memory_vectorstore.py)<br>[libs/partners/qdrant/tests/integration_tests/test_embedding_interface.py](../../../../sources/langchain-ai__langchain/libs/partners/qdrant/tests/integration_tests/test_embedding_interface.py)<br>[libs/partners/qdrant/tests/integration_tests/qdrant_vector_store/__init__.py](../../../../sources/langchain-ai__langchain/libs/partners/qdrant/tests/integration_tests/qdrant_vector_store/__init__.py)<br>[libs/partners/qdrant/tests/integration_tests/qdrant_vector_store/test_add_texts.py](../../../../sources/langchain-ai__langchain/libs/partners/qdrant/tests/integration_tests/qdrant_vector_store/test_add_texts.py)<br>[libs/partners/qdrant/tests/integration_tests/qdrant_vector_store/test_from_existing.py](../../../../sources/langchain-ai__langchain/libs/partners/qdrant/tests/integration_tests/qdrant_vector_store/test_from_existing.py)<br>[libs/partners/qdrant/tests/integration_tests/qdrant_vector_store/test_from_texts.py](../../../../sources/langchain-ai__langchain/libs/partners/qdrant/tests/integration_tests/qdrant_vector_store/test_from_texts.py) |
| spec | 3 | [libs/langchain_v1/tests/unit_tests/agents/test_responses_spec.py](../../../../sources/langchain-ai__langchain/libs/langchain_v1/tests/unit_tests/agents/test_responses_spec.py)<br>[libs/langchain_v1/tests/unit_tests/agents/test_return_direct_spec.py](../../../../sources/langchain-ai__langchain/libs/langchain_v1/tests/unit_tests/agents/test_return_direct_spec.py)<br>[libs/langchain/langchain_classic/agents/agent_toolkits/openapi/spec.py](../../../../sources/langchain-ai__langchain/libs/langchain/langchain_classic/agents/agent_toolkits/openapi/spec.py) |
| eval | 1034 | [libs/text-splitters/tests/__init__.py](../../../../sources/langchain-ai__langchain/libs/text-splitters/tests/__init__.py)<br>[libs/text-splitters/tests/unit_tests/__init__.py](../../../../sources/langchain-ai__langchain/libs/text-splitters/tests/unit_tests/__init__.py)<br>[libs/text-splitters/tests/unit_tests/conftest.py](../../../../sources/langchain-ai__langchain/libs/text-splitters/tests/unit_tests/conftest.py)<br>[libs/text-splitters/tests/unit_tests/test_html_security.py](../../../../sources/langchain-ai__langchain/libs/text-splitters/tests/unit_tests/test_html_security.py)<br>[libs/text-splitters/tests/unit_tests/test_text_splitters.py](../../../../sources/langchain-ai__langchain/libs/text-splitters/tests/unit_tests/test_text_splitters.py)<br>[libs/text-splitters/tests/test_data/test_splitter.xslt](../../../../sources/langchain-ai__langchain/libs/text-splitters/tests/test_data/test_splitter.xslt)<br>[libs/text-splitters/tests/integration_tests/__init__.py](../../../../sources/langchain-ai__langchain/libs/text-splitters/tests/integration_tests/__init__.py)<br>[libs/text-splitters/tests/integration_tests/test_compile.py](../../../../sources/langchain-ai__langchain/libs/text-splitters/tests/integration_tests/test_compile.py) |
| security | 9 | [libs/text-splitters/tests/unit_tests/test_html_security.py](../../../../sources/langchain-ai__langchain/libs/text-splitters/tests/unit_tests/test_html_security.py)<br>[libs/partners/ollama/tests/unit_tests/test_auth.py](../../../../sources/langchain-ai__langchain/libs/partners/ollama/tests/unit_tests/test_auth.py)<br>[libs/core/tests/unit_tests/test_ssrf_policy_transport.py](../../../../sources/langchain-ai__langchain/libs/core/tests/unit_tests/test_ssrf_policy_transport.py)<br>[libs/core/tests/unit_tests/load/test_secret_injection.py](../../../../sources/langchain-ai__langchain/libs/core/tests/unit_tests/load/test_secret_injection.py)<br>[libs/core/langchain_core/_security/__init__.py](../../../../sources/langchain-ai__langchain/libs/core/langchain_core/_security/__init__.py)<br>[libs/core/langchain_core/_security/_exceptions.py](../../../../sources/langchain-ai__langchain/libs/core/langchain_core/_security/_exceptions.py)<br>[libs/core/langchain_core/_security/_policy.py](../../../../sources/langchain-ai__langchain/libs/core/langchain_core/_security/_policy.py)<br>[libs/core/langchain_core/_security/_ssrf_protection.py](../../../../sources/langchain-ai__langchain/libs/core/langchain_core/_security/_ssrf_protection.py) |
| ci | 28 | [.github/workflows/_compile_integration_test.yml](../../../../sources/langchain-ai__langchain/.github/workflows/_compile_integration_test.yml)<br>[.github/workflows/_lint.yml](../../../../sources/langchain-ai__langchain/.github/workflows/_lint.yml)<br>[.github/workflows/_refresh_model_profiles.yml](../../../../sources/langchain-ai__langchain/.github/workflows/_refresh_model_profiles.yml)<br>[.github/workflows/_release.yml](../../../../sources/langchain-ai__langchain/.github/workflows/_release.yml)<br>[.github/workflows/_test_pydantic.yml](../../../../sources/langchain-ai__langchain/.github/workflows/_test_pydantic.yml)<br>[.github/workflows/_test_vcr.yml](../../../../sources/langchain-ai__langchain/.github/workflows/_test_vcr.yml)<br>[.github/workflows/_test.yml](../../../../sources/langchain-ai__langchain/.github/workflows/_test.yml)<br>[.github/workflows/auto-label-by-package.yml](../../../../sources/langchain-ai__langchain/.github/workflows/auto-label-by-package.yml) |
| container | 2 | [libs/langchain/tests/integration_tests/memory/docker-compose/elasticsearch.yml](../../../../sources/langchain-ai__langchain/libs/langchain/tests/integration_tests/memory/docker-compose/elasticsearch.yml)<br>[.devcontainer/docker-compose.yaml](../../../../sources/langchain-ai__langchain/.devcontainer/docker-compose.yaml) |
| instruction | 2 | [AGENTS.md](../../../../sources/langchain-ai__langchain/AGENTS.md)<br>[CLAUDE.md](../../../../sources/langchain-ai__langchain/CLAUDE.md) |
| docs | 28 | [README.md](../../../../sources/langchain-ai__langchain/README.md)<br>[libs/README.md](../../../../sources/langchain-ai__langchain/libs/README.md)<br>[libs/text-splitters/README.md](../../../../sources/langchain-ai__langchain/libs/text-splitters/README.md)<br>[libs/standard-tests/README.md](../../../../sources/langchain-ai__langchain/libs/standard-tests/README.md)<br>[libs/partners/README.md](../../../../sources/langchain-ai__langchain/libs/partners/README.md)<br>[libs/partners/xai/README.md](../../../../sources/langchain-ai__langchain/libs/partners/xai/README.md)<br>[libs/partners/qdrant/README.md](../../../../sources/langchain-ai__langchain/libs/partners/qdrant/README.md)<br>[libs/partners/perplexity/README.md](../../../../sources/langchain-ai__langchain/libs/partners/perplexity/README.md) |
| config | 65 | [libs/Makefile](../../../../sources/langchain-ai__langchain/libs/Makefile)<br>[libs/text-splitters/Makefile](../../../../sources/langchain-ai__langchain/libs/text-splitters/Makefile)<br>[libs/text-splitters/pyproject.toml](../../../../sources/langchain-ai__langchain/libs/text-splitters/pyproject.toml)<br>[libs/text-splitters/uv.lock](../../../../sources/langchain-ai__langchain/libs/text-splitters/uv.lock)<br>[libs/standard-tests/Makefile](../../../../sources/langchain-ai__langchain/libs/standard-tests/Makefile)<br>[libs/standard-tests/pyproject.toml](../../../../sources/langchain-ai__langchain/libs/standard-tests/pyproject.toml)<br>[libs/standard-tests/uv.lock](../../../../sources/langchain-ai__langchain/libs/standard-tests/uv.lock)<br>[libs/partners/Makefile](../../../../sources/langchain-ai__langchain/libs/partners/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1034 | [libs/text-splitters/tests/__init__.py](../../../../sources/langchain-ai__langchain/libs/text-splitters/tests/__init__.py)<br>[libs/text-splitters/tests/unit_tests/__init__.py](../../../../sources/langchain-ai__langchain/libs/text-splitters/tests/unit_tests/__init__.py)<br>[libs/text-splitters/tests/unit_tests/conftest.py](../../../../sources/langchain-ai__langchain/libs/text-splitters/tests/unit_tests/conftest.py)<br>[libs/text-splitters/tests/unit_tests/test_html_security.py](../../../../sources/langchain-ai__langchain/libs/text-splitters/tests/unit_tests/test_html_security.py)<br>[libs/text-splitters/tests/unit_tests/test_text_splitters.py](../../../../sources/langchain-ai__langchain/libs/text-splitters/tests/unit_tests/test_text_splitters.py)<br>[libs/text-splitters/tests/test_data/test_splitter.xslt](../../../../sources/langchain-ai__langchain/libs/text-splitters/tests/test_data/test_splitter.xslt) |
| CI workflows | 28 | [.github/workflows/_compile_integration_test.yml](../../../../sources/langchain-ai__langchain/.github/workflows/_compile_integration_test.yml)<br>[.github/workflows/_lint.yml](../../../../sources/langchain-ai__langchain/.github/workflows/_lint.yml)<br>[.github/workflows/_refresh_model_profiles.yml](../../../../sources/langchain-ai__langchain/.github/workflows/_refresh_model_profiles.yml)<br>[.github/workflows/_release.yml](../../../../sources/langchain-ai__langchain/.github/workflows/_release.yml)<br>[.github/workflows/_test_pydantic.yml](../../../../sources/langchain-ai__langchain/.github/workflows/_test_pydantic.yml)<br>[.github/workflows/_test_vcr.yml](../../../../sources/langchain-ai__langchain/.github/workflows/_test_vcr.yml) |
| Containers / deploy | 2 | [libs/langchain/tests/integration_tests/memory/docker-compose/elasticsearch.yml](../../../../sources/langchain-ai__langchain/libs/langchain/tests/integration_tests/memory/docker-compose/elasticsearch.yml)<br>[.devcontainer/docker-compose.yaml](../../../../sources/langchain-ai__langchain/.devcontainer/docker-compose.yaml) |
| Security / policy | 9 | [libs/text-splitters/tests/unit_tests/test_html_security.py](../../../../sources/langchain-ai__langchain/libs/text-splitters/tests/unit_tests/test_html_security.py)<br>[libs/partners/ollama/tests/unit_tests/test_auth.py](../../../../sources/langchain-ai__langchain/libs/partners/ollama/tests/unit_tests/test_auth.py)<br>[libs/core/tests/unit_tests/test_ssrf_policy_transport.py](../../../../sources/langchain-ai__langchain/libs/core/tests/unit_tests/test_ssrf_policy_transport.py)<br>[libs/core/tests/unit_tests/load/test_secret_injection.py](../../../../sources/langchain-ai__langchain/libs/core/tests/unit_tests/load/test_secret_injection.py)<br>[libs/core/langchain_core/_security/__init__.py](../../../../sources/langchain-ai__langchain/libs/core/langchain_core/_security/__init__.py)<br>[libs/core/langchain_core/_security/_exceptions.py](../../../../sources/langchain-ai__langchain/libs/core/langchain_core/_security/_exceptions.py) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/langchain-ai__langchain/AGENTS.md)<br>[CLAUDE.md](../../../../sources/langchain-ai__langchain/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `.mcp.json`, `libs/partners/openai/tests/cassettes/test_mcp_builtin_zdr.yaml.gz`, `libs/partners/openai/tests/cassettes/test_mcp_builtin.yaml.gz`.
2. Trace execution through entrypoints: `libs/langchain/tests/mock_servers/robot/server.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `libs/standard-tests/langchain_tests/unit_tests/tools.py`, `libs/standard-tests/langchain_tests/integration_tests/tools.py`.
4. Inspect retrieval/memory/indexing through: `libs/standard-tests/tests/unit_tests/test_in_memory_base_store.py`, `libs/standard-tests/tests/unit_tests/test_in_memory_cache.py`, `libs/standard-tests/tests/unit_tests/test_in_memory_vectorstore.py`.
5. Verify behavior through test/eval files: `libs/text-splitters/tests/__init__.py`, `libs/text-splitters/tests/unit_tests/__init__.py`, `libs/text-splitters/tests/unit_tests/conftest.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 2937 files, 556 directories.. 핵심 구조 신호는 Python, README.md, AGENTS.md, CLAUDE.md, LICENSE, tests이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
