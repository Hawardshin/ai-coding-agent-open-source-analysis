# Azure/gpt-rag-orchestrator 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

The GPT-RAG Orchestrator service is an agentic orchestration layer built on Microsoft Foundry Agent Service and the Microsoft Agent framework. It enables agent-based RAG workflows by coordinating multiple specialized agents to collaboratively generate accurate, context-aware responses for complex user queries.

## 요약

- 조사 단위: `sources/Azure__gpt-rag-orchestrator` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 148 files, 36 directories, depth score 118, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/test_retrieval_intent.py, tests/test_single_agent_rag_v2_conversation_scope.py, tests/test_single_agent_rag_v2_direct_llm_history.py이고, 의존성 단서는 openai, mcp, fastapi, pydantic, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Azure/gpt-rag-orchestrator |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 91 |
| Forks | 110 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Azure__gpt-rag-orchestrator](../../../../sources/Azure__gpt-rag-orchestrator) |
| 기존 보고서 | [reports/global-trending/repositories/Azure__gpt-rag-orchestrator.md](../../../global-trending/repositories/Azure__gpt-rag-orchestrator.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 148 / 36 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .devcontainer, .github, dataset, docs, evaluations, infra, media, notebooks, samples, scripts, src, tests |
| 상위 확장자 | .py: 74, .json: 28, .md: 9, .txt: 8, .png: 5, (none): 5, .ps1: 4, .sh: 3, .yaml: 3, .yml: 3, .bicep: 1, .ipynb: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 25 |
| src | source boundary | 15 |
| docs | documentation surface | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| dataset | top-level component | 1 |
| evaluations | top-level component | 1 |
| infra | top-level component | 1 |
| media | top-level component | 1 |
| notebooks | top-level component | 1 |
| samples | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [tests/test_retrieval_intent.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_retrieval_intent.py) | retrieval signal |
| retrieval | [tests/test_single_agent_rag_v2_conversation_scope.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_single_agent_rag_v2_conversation_scope.py) | retrieval signal |
| retrieval | [tests/test_single_agent_rag_v2_direct_llm_history.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_single_agent_rag_v2_direct_llm_history.py) | retrieval signal |
| retrieval | [tests/test_single_agent_rag_v2_thread_conversation.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_single_agent_rag_v2_thread_conversation.py) | retrieval signal |
| entrypoints | [src/main.py](../../../../sources/Azure__gpt-rag-orchestrator/src/main.py) | entrypoints signal |
| docs | [README.md](../../../../sources/Azure__gpt-rag-orchestrator/README.md) | docs signal |
| docs | [infra/README.md](../../../../sources/Azure__gpt-rag-orchestrator/infra/README.md) | docs signal |
| docs | [evaluations/README.md](../../../../sources/Azure__gpt-rag-orchestrator/evaluations/README.md) | docs signal |
| docs | [docs/pull_request_template.md](../../../../sources/Azure__gpt-rag-orchestrator/docs/pull_request_template.md) | docs signal |
| eval | [tests/conftest.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/conftest.py) | eval signal |
| eval | [tests/rbac.ps1](../../../../sources/Azure__gpt-rag-orchestrator/tests/rbac.ps1) | eval signal |
| eval | [tests/test_agent_strategies.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_agent_strategies.py) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/main.py](../../../../sources/Azure__gpt-rag-orchestrator/src/main.py) |
| agentRuntime | 5 | [AGENTS.md](../../../../sources/Azure__gpt-rag-orchestrator/AGENTS.md)<br>[src/util/tools.py](../../../../sources/Azure__gpt-rag-orchestrator/src/util/tools.py)<br>[src/strategies/agent_provider_v2.py](../../../../sources/Azure__gpt-rag-orchestrator/src/strategies/agent_provider_v2.py)<br>[src/strategies/agent_strategies.py](../../../../sources/Azure__gpt-rag-orchestrator/src/strategies/agent_strategies.py)<br>[src/strategies/agent_strategy_factory.py](../../../../sources/Azure__gpt-rag-orchestrator/src/strategies/agent_strategy_factory.py) |
| mcp | 2 | [src/strategies/mcp_strategy.py](../../../../sources/Azure__gpt-rag-orchestrator/src/strategies/mcp_strategy.py)<br>[src/prompts/mcp/main.txt](../../../../sources/Azure__gpt-rag-orchestrator/src/prompts/mcp/main.txt) |
| retrieval | 10 | [tests/test_retrieval_intent.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_retrieval_intent.py)<br>[tests/test_single_agent_rag_v2_conversation_scope.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_single_agent_rag_v2_conversation_scope.py)<br>[tests/test_single_agent_rag_v2_direct_llm_history.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_single_agent_rag_v2_direct_llm_history.py)<br>[tests/test_single_agent_rag_v2_thread_conversation.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_single_agent_rag_v2_thread_conversation.py)<br>[src/strategies/retrieval_intent.py](../../../../sources/Azure__gpt-rag-orchestrator/src/strategies/retrieval_intent.py)<br>[src/strategies/single_agent_rag_strategy_v2.py](../../../../sources/Azure__gpt-rag-orchestrator/src/strategies/single_agent_rag_strategy_v2.py)<br>[src/strategies/maf_plugins/user_profile_memory.py](../../../../sources/Azure__gpt-rag-orchestrator/src/strategies/maf_plugins/user_profile_memory.py)<br>[src/prompts/single_agent_rag/main.jinja2](../../../../sources/Azure__gpt-rag-orchestrator/src/prompts/single_agent_rag/main.jinja2) |
| spec | 2 | [requirements.txt](../../../../sources/Azure__gpt-rag-orchestrator/requirements.txt)<br>[evaluations/requirements.txt](../../../../sources/Azure__gpt-rag-orchestrator/evaluations/requirements.txt) |
| eval | 21 | [tests/conftest.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/conftest.py)<br>[tests/rbac.ps1](../../../../sources/Azure__gpt-rag-orchestrator/tests/rbac.ps1)<br>[tests/test_agent_strategies.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_agent_strategies.py)<br>[tests/test_agent_strategy_factory.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_agent_strategy_factory.py)<br>[tests/test_base_agent_strategy.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_base_agent_strategy.py)<br>[tests/test_build_conversation_filter.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_build_conversation_filter.py)<br>[tests/test_citations.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_citations.py)<br>[tests/test_conversation_compaction.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_conversation_compaction.py) |
| security | 2 | [SECURITY.md](../../../../sources/Azure__gpt-rag-orchestrator/SECURITY.md)<br>[tests/rbac.ps1](../../../../sources/Azure__gpt-rag-orchestrator/tests/rbac.ps1) |
| ci | 3 | [.github/workflows/block-pr-to-main.yml](../../../../sources/Azure__gpt-rag-orchestrator/.github/workflows/block-pr-to-main.yml)<br>[.github/workflows/cicd_pipeline.yaml](../../../../sources/Azure__gpt-rag-orchestrator/.github/workflows/cicd_pipeline.yaml)<br>[.github/workflows/pr_pipeline.yaml](../../../../sources/Azure__gpt-rag-orchestrator/.github/workflows/pr_pipeline.yaml) |
| container | 1 | [Dockerfile](../../../../sources/Azure__gpt-rag-orchestrator/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/Azure__gpt-rag-orchestrator/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/Azure__gpt-rag-orchestrator/.github/copilot-instructions.md) |
| docs | 4 | [README.md](../../../../sources/Azure__gpt-rag-orchestrator/README.md)<br>[infra/README.md](../../../../sources/Azure__gpt-rag-orchestrator/infra/README.md)<br>[evaluations/README.md](../../../../sources/Azure__gpt-rag-orchestrator/evaluations/README.md)<br>[docs/pull_request_template.md](../../../../sources/Azure__gpt-rag-orchestrator/docs/pull_request_template.md) |
| config | 3 | [pyproject.toml](../../../../sources/Azure__gpt-rag-orchestrator/pyproject.toml)<br>[requirements.txt](../../../../sources/Azure__gpt-rag-orchestrator/requirements.txt)<br>[evaluations/requirements.txt](../../../../sources/Azure__gpt-rag-orchestrator/evaluations/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 21 | [tests/conftest.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/conftest.py)<br>[tests/rbac.ps1](../../../../sources/Azure__gpt-rag-orchestrator/tests/rbac.ps1)<br>[tests/test_agent_strategies.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_agent_strategies.py)<br>[tests/test_agent_strategy_factory.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_agent_strategy_factory.py)<br>[tests/test_base_agent_strategy.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_base_agent_strategy.py)<br>[tests/test_build_conversation_filter.py](../../../../sources/Azure__gpt-rag-orchestrator/tests/test_build_conversation_filter.py) |
| CI workflow | 3 | [.github/workflows/block-pr-to-main.yml](../../../../sources/Azure__gpt-rag-orchestrator/.github/workflows/block-pr-to-main.yml)<br>[.github/workflows/cicd_pipeline.yaml](../../../../sources/Azure__gpt-rag-orchestrator/.github/workflows/cicd_pipeline.yaml)<br>[.github/workflows/pr_pipeline.yaml](../../../../sources/Azure__gpt-rag-orchestrator/.github/workflows/pr_pipeline.yaml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/Azure__gpt-rag-orchestrator/Dockerfile) |
| 보안/정책 | 2 | [SECURITY.md](../../../../sources/Azure__gpt-rag-orchestrator/SECURITY.md)<br>[tests/rbac.ps1](../../../../sources/Azure__gpt-rag-orchestrator/tests/rbac.ps1) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/Azure__gpt-rag-orchestrator/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/Azure__gpt-rag-orchestrator/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_retrieval_intent.py`, `tests/test_single_agent_rag_v2_conversation_scope.py`, `tests/test_single_agent_rag_v2_direct_llm_history.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/main.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `src/util/tools.py`, `src/strategies/agent_provider_v2.py`.
4. retrieval/memory/indexing 확인: `tests/test_retrieval_intent.py`, `tests/test_single_agent_rag_v2_conversation_scope.py`, `tests/test_single_agent_rag_v2_direct_llm_history.py`.
5. test/eval 파일로 동작 검증: `tests/conftest.py`, `tests/rbac.ps1`, `tests/test_agent_strategies.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 The GPT RAG Orchestrator service is an agentic orchestration layer built on Microsoft Foundry Agent Service and the Micr. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
