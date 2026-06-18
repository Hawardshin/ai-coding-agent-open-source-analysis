# aws/bedrock-agentcore-sdk-python 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Python SDK for transforming any AI agent into a production-ready application. Framework-agnostic primitives for runtime, memory, authentication, and tools with AWS-managed infrastructure.

## 요약

- 조사 단위: `sources/aws__bedrock-agentcore-sdk-python` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 313 files, 98 directories, depth score 90, key references 9개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, tests_integ/tools/__init__.py, tests_integ/tools/test_browser_proxy.py이고, 의존성 단서는 mcp, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | aws/bedrock-agentcore-sdk-python |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 727 |
| Forks | 122 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/aws__bedrock-agentcore-sdk-python](../../../../sources/aws__bedrock-agentcore-sdk-python) |
| 기존 보고서 | [reports/global-trending/repositories/aws__bedrock-agentcore-sdk-python.md](../../../global-trending/repositories/aws__bedrock-agentcore-sdk-python.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 313 / 98 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, docs, scripts, src, tests, tests_integ |
| 상위 확장자 | .py: 263, .md: 22, .yml: 14, .typed: 3, (none): 3, .txt: 2, .ipynb: 1, .j2: 1, .lock: 1, .png: 1, .toml: 1, .yaml: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 46 |
| src | source boundary | 28 |
| docs | documentation surface | 4 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |
| tests_integ | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | bedrock-agentcore | bedrock-agentcore |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
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
| agentRuntime | [AGENTS.md](../../../../sources/aws__bedrock-agentcore-sdk-python/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests_integ/tools/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [tests_integ/tools/test_browser_proxy.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_browser_proxy.py) | agentRuntime signal |
| agentRuntime | [tests_integ/tools/test_browser.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_browser.py) | agentRuntime signal |
| config | [pyproject.toml](../../../../sources/aws__bedrock-agentcore-sdk-python/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/aws__bedrock-agentcore-sdk-python/uv.lock) | config signal |
| ci | [.github/workflows/breaking-change-check.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/breaking-change-check.yml) | ci support |
| ci | [.github/workflows/ci.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/ci.yml) | ci support |
| eval | [tests_integ/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/__init__.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 84 | [AGENTS.md](../../../../sources/aws__bedrock-agentcore-sdk-python/AGENTS.md)<br>[tests_integ/tools/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/__init__.py)<br>[tests_integ/tools/test_browser_proxy.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_browser_proxy.py)<br>[tests_integ/tools/test_browser.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_browser.py)<br>[tests_integ/tools/test_code_interpreter_client.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_code_interpreter_client.py)<br>[tests_integ/tools/test_code.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_code.py)<br>[tests_integ/memory/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/memory/__init__.py)<br>[tests_integ/memory/helpers.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/memory/helpers.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 46 | [tests_integ/memory/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/memory/__init__.py)<br>[tests_integ/memory/helpers.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/memory/helpers.py)<br>[tests_integ/memory/test_controlplane.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/memory/test_controlplane.py)<br>[tests_integ/memory/test_memory_client.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/memory/test_memory_client.py)<br>[tests_integ/memory/integrations/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/memory/integrations/__init__.py)<br>[tests_integ/memory/integrations/test_session_manager.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/memory/integrations/test_session_manager.py)<br>[tests_integ/knowledge_base/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/knowledge_base/__init__.py)<br>[tests_integ/knowledge_base/test_knowledge_base_client.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/knowledge_base/test_knowledge_base_client.py) |
| spec | 0 | 명확하지 않음 |
| eval | 192 | [tests_integ/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/__init__.py)<br>[tests_integ/tools/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/__init__.py)<br>[tests_integ/tools/test_browser_proxy.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_browser_proxy.py)<br>[tests_integ/tools/test_browser.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_browser.py)<br>[tests_integ/tools/test_code_interpreter_client.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_code_interpreter_client.py)<br>[tests_integ/tools/test_code.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_code.py)<br>[tests_integ/services/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/services/__init__.py)<br>[tests_integ/services/test_resource_policy.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/services/test_resource_policy.py) |
| security | 16 | [SECURITY.md](../../../../sources/aws__bedrock-agentcore-sdk-python/SECURITY.md)<br>[tests_integ/services/test_resource_policy.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/services/test_resource_policy.py)<br>[tests_integ/policy/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/policy/__init__.py)<br>[tests_integ/policy/test_policy_engine_client.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/policy/test_policy_engine_client.py)<br>[tests_integ/identity/test_auth_flows.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/identity/test_auth_flows.py)<br>[tests/unit/policy/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests/unit/policy/__init__.py)<br>[tests/unit/policy/test_policy_engine_client.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests/unit/policy/test_policy_engine_client.py)<br>[tests/bedrock_agentcore/services/test_resource_policy.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests/bedrock_agentcore/services/test_resource_policy.py) |
| ci | 13 | [.github/workflows/breaking-change-check.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/breaking-change-check.yml)<br>[.github/workflows/ci.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/ci.yml)<br>[.github/workflows/dependabot-auto-merge.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/dependabot-auto-merge.yml)<br>[.github/workflows/dependency-management.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/dependency-management.yml)<br>[.github/workflows/github-slack-notifications.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/github-slack-notifications.yml)<br>[.github/workflows/integration-testing-regression.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/integration-testing-regression.yml)<br>[.github/workflows/integration-testing.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/integration-testing.yml)<br>[.github/workflows/pr-automerge.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/pr-automerge.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/aws__bedrock-agentcore-sdk-python/AGENTS.md) |
| docs | 12 | [README.md](../../../../sources/aws__bedrock-agentcore-sdk-python/README.md)<br>[tests_integ/payments/README.md](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/payments/README.md)<br>[tests_integ/async/README.md](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/async/README.md)<br>[src/bedrock_agentcore/payments/README.md](../../../../sources/aws__bedrock-agentcore-sdk-python/src/bedrock_agentcore/payments/README.md)<br>[src/bedrock_agentcore/payments/integrations/strands/README.md](../../../../sources/aws__bedrock-agentcore-sdk-python/src/bedrock_agentcore/payments/integrations/strands/README.md)<br>[src/bedrock_agentcore/memory/README.md](../../../../sources/aws__bedrock-agentcore-sdk-python/src/bedrock_agentcore/memory/README.md)<br>[src/bedrock_agentcore/memory/integrations/strands/README.md](../../../../sources/aws__bedrock-agentcore-sdk-python/src/bedrock_agentcore/memory/integrations/strands/README.md)<br>[src/bedrock_agentcore/gateway/integrations/strands/plugins/agentcore_tool_search/README.md](../../../../sources/aws__bedrock-agentcore-sdk-python/src/bedrock_agentcore/gateway/integrations/strands/plugins/agentcore_tool_search/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/aws__bedrock-agentcore-sdk-python/pyproject.toml)<br>[uv.lock](../../../../sources/aws__bedrock-agentcore-sdk-python/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 192 | [tests_integ/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/__init__.py)<br>[tests_integ/tools/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/__init__.py)<br>[tests_integ/tools/test_browser_proxy.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_browser_proxy.py)<br>[tests_integ/tools/test_browser.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_browser.py)<br>[tests_integ/tools/test_code_interpreter_client.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_code_interpreter_client.py)<br>[tests_integ/tools/test_code.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_code.py) |
| CI workflow | 13 | [.github/workflows/breaking-change-check.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/breaking-change-check.yml)<br>[.github/workflows/ci.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/ci.yml)<br>[.github/workflows/dependabot-auto-merge.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/dependabot-auto-merge.yml)<br>[.github/workflows/dependency-management.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/dependency-management.yml)<br>[.github/workflows/github-slack-notifications.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/github-slack-notifications.yml)<br>[.github/workflows/integration-testing-regression.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/integration-testing-regression.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 16 | [SECURITY.md](../../../../sources/aws__bedrock-agentcore-sdk-python/SECURITY.md)<br>[tests_integ/services/test_resource_policy.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/services/test_resource_policy.py)<br>[tests_integ/policy/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/policy/__init__.py)<br>[tests_integ/policy/test_policy_engine_client.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/policy/test_policy_engine_client.py)<br>[tests_integ/identity/test_auth_flows.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/identity/test_auth_flows.py)<br>[tests/unit/policy/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests/unit/policy/__init__.py) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/aws__bedrock-agentcore-sdk-python/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `tests_integ/tools/__init__.py`, `tests_integ/tools/test_browser_proxy.py`.
2. agent/tool runtime 매핑: `AGENTS.md`, `tests_integ/tools/__init__.py`, `tests_integ/tools/test_browser_proxy.py`.
3. retrieval/memory/indexing 확인: `tests_integ/memory/__init__.py`, `tests_integ/memory/helpers.py`, `tests_integ/memory/test_controlplane.py`.
4. test/eval 파일로 동작 검증: `tests_integ/__init__.py`, `tests_integ/tools/__init__.py`, `tests_integ/tools/test_browser_proxy.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Python SDK for transforming any AI agent into a production ready application. Framework agnostic primitives for runtime,. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, mcp, pydantic이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
