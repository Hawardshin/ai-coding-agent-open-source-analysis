# LazyAGI/LazyLLM 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Easiest and laziest way for building multi-agent LLMs applications.

## 요약

- 조사 단위: `sources/LazyAGI__LazyLLM` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,119 files, 199 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/advanced_tests/Tools/test_mcp.py, lazyllm/tools/mcp/__init__.py, lazyllm/tools/mcp/client.py이고, 의존성 단서는 openai, mcp, fastapi, pydantic, typer, torch, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | LazyAGI/LazyLLM |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 3842 |
| Forks | 393 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/LazyAGI__LazyLLM](../../../../sources/LazyAGI__LazyLLM) |
| 기존 보고서 | [reports/global-trending/repositories/LazyAGI__LazyLLM.md](../../../global-trending/repositories/LazyAGI__LazyLLM.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1119 / 199 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, csrc, docs, examples, lazyllm, LazyLLM-Env, scripts, tests, Tutorial |
| 상위 확장자 | .py: 759, .md: 185, .png: 71, .cpp: 18, .yml: 14, .svg: 13, .txt: 10, .hpp: 8, .json: 8, (none): 7, .yaml: 6, .js: 5 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 122 |
| docs | documentation surface | 14 |
| examples/rag_with_parsing_service | examples workspace | 2 |
| .github | ci surface | 1 |
| csrc | source boundary | 1 |
| examples | top-level component | 1 |
| examples/agent_with_mcp.py | examples workspace | 1 |
| lazyllm | top-level component | 1 |
| LazyLLM-Env | top-level component | 1 |
| scripts | top-level component | 1 |
| Tutorial | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install-flake8 | make install-flake8 |
| quality | Makefile | lint-flake8 | make lint-flake8 |
| utility | Makefile | .ONESHELL | make .ONESHELL |
| quality | Makefile | lint-flake8-only-diff | make lint-flake8-only-diff |
| quality | Makefile | lint-print | make lint-print |
| quality | Makefile | lint | make lint |
| quality | Makefile | lint-only-diff | make lint-only-diff |
| utility | Makefile | poetry-install | make poetry-install |
| utility | Makefile | poetry-lock | make poetry-lock |
| utility | pyproject.toml | lazyllm | lazyllm |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | chroma, milvus, faiss |
| modelRuntime | torch, transformers, vllm, llama |
| webRuntime | fastapi |
| developerSurface | typer |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/advanced_tests/Tools/test_mcp.py](../../../../sources/LazyAGI__LazyLLM/tests/advanced_tests/Tools/test_mcp.py) | mcp signal |
| mcp | [lazyllm/tools/mcp/__init__.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/mcp/__init__.py) | mcp signal |
| mcp | [lazyllm/tools/mcp/client.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/mcp/client.py) | mcp signal |
| mcp | [lazyllm/tools/mcp/deploy.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/mcp/deploy.py) | mcp signal |
| agentRuntime | [tests/tools.py](../../../../sources/LazyAGI__LazyLLM/tests/tools.py) | agentRuntime signal |
| agentRuntime | [tests/charge_tests/Tools/__init__.py](../../../../sources/LazyAGI__LazyLLM/tests/charge_tests/Tools/__init__.py) | agentRuntime signal |
| agentRuntime | [tests/charge_tests/Tools/test_doc_to_db.py](../../../../sources/LazyAGI__LazyLLM/tests/charge_tests/Tools/test_doc_to_db.py) | agentRuntime signal |
| agentRuntime | [tests/charge_tests/Tools/test_eval.py](../../../../sources/LazyAGI__LazyLLM/tests/charge_tests/Tools/test_eval.py) | agentRuntime signal |
| entrypoints | [lazyllm/tools/rag/parsing_service/server.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/rag/parsing_service/server.py) | entrypoints signal |
| entrypoints | [lazyllm/tools/rag/db_migrate/__main__.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/rag/db_migrate/__main__.py) | entrypoints signal |
| entrypoints | [lazyllm/components/deploy/relay/server.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/components/deploy/relay/server.py) | entrypoints signal |
| entrypoints | [lazyllm/cli/main.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/cli/main.py) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [lazyllm/tools/rag/parsing_service/server.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/rag/parsing_service/server.py)<br>[lazyllm/tools/rag/db_migrate/__main__.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/rag/db_migrate/__main__.py)<br>[lazyllm/components/deploy/relay/server.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/components/deploy/relay/server.py)<br>[lazyllm/cli/main.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/cli/main.py) |
| agentRuntime | 401 | [tests/tools.py](../../../../sources/LazyAGI__LazyLLM/tests/tools.py)<br>[tests/charge_tests/Tools/__init__.py](../../../../sources/LazyAGI__LazyLLM/tests/charge_tests/Tools/__init__.py)<br>[tests/charge_tests/Tools/test_doc_to_db.py](../../../../sources/LazyAGI__LazyLLM/tests/charge_tests/Tools/test_doc_to_db.py)<br>[tests/charge_tests/Tools/test_eval.py](../../../../sources/LazyAGI__LazyLLM/tests/charge_tests/Tools/test_eval.py)<br>[tests/charge_tests/Tools/test_online_memory.py](../../../../sources/LazyAGI__LazyLLM/tests/charge_tests/Tools/test_online_memory.py)<br>[tests/charge_tests/Tools/test_onlineChat_fc.py](../../../../sources/LazyAGI__LazyLLM/tests/charge_tests/Tools/test_onlineChat_fc.py)<br>[tests/charge_tests/Tools/test_powermem.py](../../../../sources/LazyAGI__LazyLLM/tests/charge_tests/Tools/test_powermem.py)<br>[tests/charge_tests/Tools/test_sql_tool.py](../../../../sources/LazyAGI__LazyLLM/tests/charge_tests/Tools/test_sql_tool.py) |
| mcp | 8 | [tests/advanced_tests/Tools/test_mcp.py](../../../../sources/LazyAGI__LazyLLM/tests/advanced_tests/Tools/test_mcp.py)<br>[lazyllm/tools/mcp/__init__.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/mcp/__init__.py)<br>[lazyllm/tools/mcp/client.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/mcp/client.py)<br>[lazyllm/tools/mcp/deploy.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/mcp/deploy.py)<br>[lazyllm/tools/mcp/tool_adaptor.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/mcp/tool_adaptor.py)<br>[lazyllm/tools/mcp/utils.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/mcp/utils.py)<br>[lazyllm/docs/tools/tool_mcp.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/docs/tools/tool_mcp.py)<br>[examples/agent_with_mcp.py](../../../../sources/LazyAGI__LazyLLM/examples/agent_with_mcp.py) |
| retrieval | 228 | [tests/data_tests/Pipeline/test_embedding_pipeline.py](../../../../sources/LazyAGI__LazyLLM/tests/data_tests/Pipeline/test_embedding_pipeline.py)<br>[tests/data_tests/Pipeline/test_rag_pipeline.py](../../../../sources/LazyAGI__LazyLLM/tests/data_tests/Pipeline/test_rag_pipeline.py)<br>[tests/data_tests/Operators/test_agentic_rag_ops.py](../../../../sources/LazyAGI__LazyLLM/tests/data_tests/Operators/test_agentic_rag_ops.py)<br>[tests/data_tests/Operators/test_embedding_synthesis_ops.py](../../../../sources/LazyAGI__LazyLLM/tests/data_tests/Operators/test_embedding_synthesis_ops.py)<br>[tests/data_tests/Operators/test_knowledge_cleaning_ops.py](../../../../sources/LazyAGI__LazyLLM/tests/data_tests/Operators/test_knowledge_cleaning_ops.py)<br>[tests/charge_tests/Tools/test_online_memory.py](../../../../sources/LazyAGI__LazyLLM/tests/charge_tests/Tools/test_online_memory.py)<br>[tests/charge_tests/Models/test_embedding.py](../../../../sources/LazyAGI__LazyLLM/tests/charge_tests/Models/test_embedding.py)<br>[tests/basic_tests/RAG/test_bm25.py](../../../../sources/LazyAGI__LazyLLM/tests/basic_tests/RAG/test_bm25.py) |
| spec | 14 | [requirements.txt](../../../../sources/LazyAGI__LazyLLM/requirements.txt)<br>[tests/requirements_linux.txt](../../../../sources/LazyAGI__LazyLLM/tests/requirements_linux.txt)<br>[tests/requirements_mac.txt](../../../../sources/LazyAGI__LazyLLM/tests/requirements_mac.txt)<br>[tests/requirements.txt](../../../../sources/LazyAGI__LazyLLM/tests/requirements.txt)<br>[tests/data_tests/requirements.txt](../../../../sources/LazyAGI__LazyLLM/tests/data_tests/requirements.txt)<br>[scripts/check_requirements.py](../../../../sources/LazyAGI__LazyLLM/scripts/check_requirements.py)<br>[lazyllm/tools/git/review/pre_analysis/review_spec.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/git/review/pre_analysis/review_spec.py)<br>[lazyllm/components/finetune/alpaca-lora/requirements.txt](../../../../sources/LazyAGI__LazyLLM/lazyllm/components/finetune/alpaca-lora/requirements.txt) |
| eval | 217 | [tests/__init__.py](../../../../sources/LazyAGI__LazyLLM/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/LazyAGI__LazyLLM/tests/conftest.py)<br>[tests/README.md](../../../../sources/LazyAGI__LazyLLM/tests/README.md)<br>[tests/requirements_linux.txt](../../../../sources/LazyAGI__LazyLLM/tests/requirements_linux.txt)<br>[tests/requirements_mac.txt](../../../../sources/LazyAGI__LazyLLM/tests/requirements_mac.txt)<br>[tests/requirements.txt](../../../../sources/LazyAGI__LazyLLM/tests/requirements.txt)<br>[tests/test_cpp_class_decorator.py](../../../../sources/LazyAGI__LazyLLM/tests/test_cpp_class_decorator.py)<br>[tests/test_cpp_proxy_decorator.py](../../../../sources/LazyAGI__LazyLLM/tests/test_cpp_proxy_decorator.py) |
| security | 8 | [tests/basic_tests/Tools/test_sandbox.py](../../../../sources/LazyAGI__LazyLLM/tests/basic_tests/Tools/test_sandbox.py)<br>[lazyllm/tools/sandbox/__init__.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/sandbox/__init__.py)<br>[lazyllm/tools/sandbox/dummy_sandbox.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/sandbox/dummy_sandbox.py)<br>[lazyllm/tools/sandbox/sandbox_base.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/sandbox/sandbox_base.py)<br>[lazyllm/tools/sandbox/sandbox_fusion.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/sandbox/sandbox_fusion.py)<br>[lazyllm/docs/tools/tool_sandbox.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/docs/tools/tool_sandbox.py)<br>[lazyllm/common/auth.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/common/auth.py)<br>[.github/PULL_REQUEST_TEMPLATE/security.md](../../../../sources/LazyAGI__LazyLLM/.github/PULL_REQUEST_TEMPLATE/security.md) |
| ci | 3 | [.github/workflows/main.yml](../../../../sources/LazyAGI__LazyLLM/.github/workflows/main.yml)<br>[.github/workflows/publish_release.yml](../../../../sources/LazyAGI__LazyLLM/.github/workflows/publish_release.yml)<br>[.github/workflows/sync-repos.yml](../../../../sources/LazyAGI__LazyLLM/.github/workflows/sync-repos.yml) |
| container | 31 | [tests/advanced_tests/Deploy/test_deploy_full.py](../../../../sources/LazyAGI__LazyLLM/tests/advanced_tests/Deploy/test_deploy_full.py)<br>[tests/advanced_tests/Deploy/test_deploy.py](../../../../sources/LazyAGI__LazyLLM/tests/advanced_tests/Deploy/test_deploy.py)<br>[lazyllm/components/deploy/__init__.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/components/deploy/__init__.py)<br>[lazyllm/components/deploy/base.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/components/deploy/base.py)<br>[lazyllm/components/deploy/bert.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/components/deploy/bert.py)<br>[lazyllm/components/deploy/embed.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/components/deploy/embed.py)<br>[lazyllm/components/deploy/infinity.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/components/deploy/infinity.py)<br>[lazyllm/components/deploy/lightllm.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/components/deploy/lightllm.py) |
| instruction | 9 | [lazyllm/AGENTS.md](../../../../sources/LazyAGI__LazyLLM/lazyllm/AGENTS.md)<br>[lazyllm/tools/AGENTS.md](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/AGENTS.md)<br>[lazyllm/tools/rag/AGENTS.md](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/rag/AGENTS.md)<br>[lazyllm/tools/agent/AGENTS.md](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/agent/AGENTS.md)<br>[lazyllm/module/AGENTS.md](../../../../sources/LazyAGI__LazyLLM/lazyllm/module/AGENTS.md)<br>[lazyllm/module/llms/onlinemodule/AGENTS.md](../../../../sources/LazyAGI__LazyLLM/lazyllm/module/llms/onlinemodule/AGENTS.md)<br>[lazyllm/flow/AGENTS.md](../../../../sources/LazyAGI__LazyLLM/lazyllm/flow/AGENTS.md)<br>[lazyllm/components/AGENTS.md](../../../../sources/LazyAGI__LazyLLM/lazyllm/components/AGENTS.md) |
| docs | 310 | [README.CN.md](../../../../sources/LazyAGI__LazyLLM/README.CN.md)<br>[README.md](../../../../sources/LazyAGI__LazyLLM/README.md)<br>[tests/README.md](../../../../sources/LazyAGI__LazyLLM/tests/README.md)<br>[lazyllm/tools/rag/readers/readme.md](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/rag/readers/readme.md)<br>[lazyllm/prompt_templates/prompts_actor/README.md](../../../../sources/LazyAGI__LazyLLM/lazyllm/prompt_templates/prompts_actor/README.md)<br>[lazyllm/docs/__init__.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/docs/__init__.py)<br>[lazyllm/docs/common.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/docs/common.py)<br>[lazyllm/docs/components.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/docs/components.py) |
| config | 9 | [Makefile](../../../../sources/LazyAGI__LazyLLM/Makefile)<br>[pyproject.toml](../../../../sources/LazyAGI__LazyLLM/pyproject.toml)<br>[requirements.txt](../../../../sources/LazyAGI__LazyLLM/requirements.txt)<br>[tests/requirements_linux.txt](../../../../sources/LazyAGI__LazyLLM/tests/requirements_linux.txt)<br>[tests/requirements_mac.txt](../../../../sources/LazyAGI__LazyLLM/tests/requirements_mac.txt)<br>[tests/requirements.txt](../../../../sources/LazyAGI__LazyLLM/tests/requirements.txt)<br>[tests/data_tests/requirements.txt](../../../../sources/LazyAGI__LazyLLM/tests/data_tests/requirements.txt)<br>[lazyllm/components/finetune/alpaca-lora/requirements.txt](../../../../sources/LazyAGI__LazyLLM/lazyllm/components/finetune/alpaca-lora/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 217 | [tests/__init__.py](../../../../sources/LazyAGI__LazyLLM/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/LazyAGI__LazyLLM/tests/conftest.py)<br>[tests/README.md](../../../../sources/LazyAGI__LazyLLM/tests/README.md)<br>[tests/requirements_linux.txt](../../../../sources/LazyAGI__LazyLLM/tests/requirements_linux.txt)<br>[tests/requirements_mac.txt](../../../../sources/LazyAGI__LazyLLM/tests/requirements_mac.txt)<br>[tests/requirements.txt](../../../../sources/LazyAGI__LazyLLM/tests/requirements.txt) |
| CI workflow | 3 | [.github/workflows/main.yml](../../../../sources/LazyAGI__LazyLLM/.github/workflows/main.yml)<br>[.github/workflows/publish_release.yml](../../../../sources/LazyAGI__LazyLLM/.github/workflows/publish_release.yml)<br>[.github/workflows/sync-repos.yml](../../../../sources/LazyAGI__LazyLLM/.github/workflows/sync-repos.yml) |
| 컨테이너/배포 | 31 | [tests/advanced_tests/Deploy/test_deploy_full.py](../../../../sources/LazyAGI__LazyLLM/tests/advanced_tests/Deploy/test_deploy_full.py)<br>[tests/advanced_tests/Deploy/test_deploy.py](../../../../sources/LazyAGI__LazyLLM/tests/advanced_tests/Deploy/test_deploy.py)<br>[lazyllm/components/deploy/__init__.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/components/deploy/__init__.py)<br>[lazyllm/components/deploy/base.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/components/deploy/base.py)<br>[lazyllm/components/deploy/bert.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/components/deploy/bert.py)<br>[lazyllm/components/deploy/embed.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/components/deploy/embed.py) |
| 보안/정책 | 8 | [tests/basic_tests/Tools/test_sandbox.py](../../../../sources/LazyAGI__LazyLLM/tests/basic_tests/Tools/test_sandbox.py)<br>[lazyllm/tools/sandbox/__init__.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/sandbox/__init__.py)<br>[lazyllm/tools/sandbox/dummy_sandbox.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/sandbox/dummy_sandbox.py)<br>[lazyllm/tools/sandbox/sandbox_base.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/sandbox/sandbox_base.py)<br>[lazyllm/tools/sandbox/sandbox_fusion.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/sandbox/sandbox_fusion.py)<br>[lazyllm/docs/tools/tool_sandbox.py](../../../../sources/LazyAGI__LazyLLM/lazyllm/docs/tools/tool_sandbox.py) |
| 에이전트 지시문 | 9 | [lazyllm/AGENTS.md](../../../../sources/LazyAGI__LazyLLM/lazyllm/AGENTS.md)<br>[lazyllm/tools/AGENTS.md](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/AGENTS.md)<br>[lazyllm/tools/rag/AGENTS.md](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/rag/AGENTS.md)<br>[lazyllm/tools/agent/AGENTS.md](../../../../sources/LazyAGI__LazyLLM/lazyllm/tools/agent/AGENTS.md)<br>[lazyllm/module/AGENTS.md](../../../../sources/LazyAGI__LazyLLM/lazyllm/module/AGENTS.md)<br>[lazyllm/module/llms/onlinemodule/AGENTS.md](../../../../sources/LazyAGI__LazyLLM/lazyllm/module/llms/onlinemodule/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/advanced_tests/Tools/test_mcp.py`, `lazyllm/tools/mcp/__init__.py`, `lazyllm/tools/mcp/client.py`.
2. entrypoint를 따라 실행 흐름 확인: `lazyllm/tools/rag/parsing_service/server.py`, `lazyllm/tools/rag/db_migrate/__main__.py`, `lazyllm/components/deploy/relay/server.py`.
3. agent/tool runtime 매핑: `tests/tools.py`, `tests/charge_tests/Tools/__init__.py`, `tests/charge_tests/Tools/test_doc_to_db.py`.
4. retrieval/memory/indexing 확인: `tests/data_tests/Pipeline/test_embedding_pipeline.py`, `tests/data_tests/Pipeline/test_rag_pipeline.py`, `tests/data_tests/Operators/test_agentic_rag_ops.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/README.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Easiest and laziest way for building multi agent LLMs applications.. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Makefile, README.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
