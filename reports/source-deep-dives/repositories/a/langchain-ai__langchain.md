# langchain-ai/langchain 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 2937 files, 556 directories.

## 요약

- 조사 단위: `sources/langchain-ai__langchain` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,935 files, 555 directories, depth score 123, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, libs/partners/openai/tests/cassettes/test_mcp_builtin_zdr.yaml.gz, libs/partners/openai/tests/cassettes/test_mcp_builtin.yaml.gz이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | langchain-ai/langchain |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 139576 |
| Forks | 23129 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/langchain-ai__langchain](../../../../sources/langchain-ai__langchain) |
| 기존 보고서 | [reports/global-trending/repositories/langchain-ai__langchain.md](../../../global-trending/repositories/langchain-ai__langchain.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2935 / 555 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .devcontainer, .github, libs |
| 상위 확장자 | .py: 2520, (none): 63, .gz: 61, .json: 45, .yml: 38, .toml: 29, .md: 28, .ambr: 26, .lock: 21, .sh: 20, .typed: 20, .txt: 18 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1034 | [libs/text-splitters/tests/__init__.py](../../../../sources/langchain-ai__langchain/libs/text-splitters/tests/__init__.py)<br>[libs/text-splitters/tests/unit_tests/__init__.py](../../../../sources/langchain-ai__langchain/libs/text-splitters/tests/unit_tests/__init__.py)<br>[libs/text-splitters/tests/unit_tests/conftest.py](../../../../sources/langchain-ai__langchain/libs/text-splitters/tests/unit_tests/conftest.py)<br>[libs/text-splitters/tests/unit_tests/test_html_security.py](../../../../sources/langchain-ai__langchain/libs/text-splitters/tests/unit_tests/test_html_security.py)<br>[libs/text-splitters/tests/unit_tests/test_text_splitters.py](../../../../sources/langchain-ai__langchain/libs/text-splitters/tests/unit_tests/test_text_splitters.py)<br>[libs/text-splitters/tests/test_data/test_splitter.xslt](../../../../sources/langchain-ai__langchain/libs/text-splitters/tests/test_data/test_splitter.xslt) |
| CI workflow | 28 | [.github/workflows/_compile_integration_test.yml](../../../../sources/langchain-ai__langchain/.github/workflows/_compile_integration_test.yml)<br>[.github/workflows/_lint.yml](../../../../sources/langchain-ai__langchain/.github/workflows/_lint.yml)<br>[.github/workflows/_refresh_model_profiles.yml](../../../../sources/langchain-ai__langchain/.github/workflows/_refresh_model_profiles.yml)<br>[.github/workflows/_release.yml](../../../../sources/langchain-ai__langchain/.github/workflows/_release.yml)<br>[.github/workflows/_test_pydantic.yml](../../../../sources/langchain-ai__langchain/.github/workflows/_test_pydantic.yml)<br>[.github/workflows/_test_vcr.yml](../../../../sources/langchain-ai__langchain/.github/workflows/_test_vcr.yml) |
| 컨테이너/배포 | 2 | [libs/langchain/tests/integration_tests/memory/docker-compose/elasticsearch.yml](../../../../sources/langchain-ai__langchain/libs/langchain/tests/integration_tests/memory/docker-compose/elasticsearch.yml)<br>[.devcontainer/docker-compose.yaml](../../../../sources/langchain-ai__langchain/.devcontainer/docker-compose.yaml) |
| 보안/정책 | 9 | [libs/text-splitters/tests/unit_tests/test_html_security.py](../../../../sources/langchain-ai__langchain/libs/text-splitters/tests/unit_tests/test_html_security.py)<br>[libs/partners/ollama/tests/unit_tests/test_auth.py](../../../../sources/langchain-ai__langchain/libs/partners/ollama/tests/unit_tests/test_auth.py)<br>[libs/core/tests/unit_tests/test_ssrf_policy_transport.py](../../../../sources/langchain-ai__langchain/libs/core/tests/unit_tests/test_ssrf_policy_transport.py)<br>[libs/core/tests/unit_tests/load/test_secret_injection.py](../../../../sources/langchain-ai__langchain/libs/core/tests/unit_tests/load/test_secret_injection.py)<br>[libs/core/langchain_core/_security/__init__.py](../../../../sources/langchain-ai__langchain/libs/core/langchain_core/_security/__init__.py)<br>[libs/core/langchain_core/_security/_exceptions.py](../../../../sources/langchain-ai__langchain/libs/core/langchain_core/_security/_exceptions.py) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/langchain-ai__langchain/AGENTS.md)<br>[CLAUDE.md](../../../../sources/langchain-ai__langchain/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `.mcp.json`, `libs/partners/openai/tests/cassettes/test_mcp_builtin_zdr.yaml.gz`, `libs/partners/openai/tests/cassettes/test_mcp_builtin.yaml.gz`.
2. entrypoint를 따라 실행 흐름 확인: `libs/langchain/tests/mock_servers/robot/server.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `libs/standard-tests/langchain_tests/unit_tests/tools.py`, `libs/standard-tests/langchain_tests/integration_tests/tools.py`.
4. retrieval/memory/indexing 확인: `libs/standard-tests/tests/unit_tests/test_in_memory_base_store.py`, `libs/standard-tests/tests/unit_tests/test_in_memory_cache.py`, `libs/standard-tests/tests/unit_tests/test_in_memory_vectorstore.py`.
5. test/eval 파일로 동작 검증: `libs/text-splitters/tests/__init__.py`, `libs/text-splitters/tests/unit_tests/__init__.py`, `libs/text-splitters/tests/unit_tests/conftest.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 2937 files, 556 directories.. 핵심 구조 신호는 Python, README.md, AGENTS.md, CLAUDE.md, LICENSE, tests이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
