# strands-agents/evals 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

A comprehensive evaluation framework for AI agents and LLM applications.

## 요약

- 조사 단위: `sources/strands-agents__evals` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 350 files, 86 directories, depth score 93, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, SKILL.md, tests/strands_evals/tools/test_evaluation_tools.py이고, 의존성 단서는 langchain, langgraph, pydantic, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | strands-agents/evals |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 145 |
| Forks | 39 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/strands-agents__evals](../../../../sources/strands-agents__evals) |
| 기존 보고서 | [reports/global-trending/repositories/strands-agents__evals.md](../../../global-trending/repositories/strands-agents__evals.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 350 / 86 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, src, tests, tests_integ |
| 상위 확장자 | .py: 320, .yml: 14, .md: 9, (none): 3, .json: 2, .toml: 1, .yaml: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 38 |
| src | source boundary | 21 |
| .github | ci surface | 1 |
| tests_integ | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | strands-evals | strands-evals |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | langchain, langgraph |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [AGENTS.md](../../../../sources/strands-agents__evals/AGENTS.md) | agentRuntime signal |
| agentRuntime | [SKILL.md](../../../../sources/strands-agents__evals/SKILL.md) | agentRuntime signal |
| agentRuntime | [tests/strands_evals/tools/test_evaluation_tools.py](../../../../sources/strands-agents__evals/tests/strands_evals/tools/test_evaluation_tools.py) | agentRuntime signal |
| agentRuntime | [tests/strands_evals/cli/fixtures/agents.py](../../../../sources/strands-agents__evals/tests/strands_evals/cli/fixtures/agents.py) | agentRuntime signal |
| entrypoints | [src/strands_evals/__main__.py](../../../../sources/strands-agents__evals/src/strands_evals/__main__.py) | entrypoints signal |
| entrypoints | [src/strands_evals/cli/__main__.py](../../../../sources/strands-agents__evals/src/strands_evals/cli/__main__.py) | entrypoints signal |
| entrypoints | [src/strands_evals/cli/main.py](../../../../sources/strands-agents__evals/src/strands_evals/cli/main.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/strands-agents__evals/pyproject.toml) | config signal |
| ci | [.github/workflows/auto-strands-review.yml](../../../../sources/strands-agents__evals/.github/workflows/auto-strands-review.yml) | ci support |
| ci | [.github/workflows/integration-test.yml](../../../../sources/strands-agents__evals/.github/workflows/integration-test.yml) | ci support |
| eval | [tests_integ/conftest.py](../../../../sources/strands-agents__evals/tests_integ/conftest.py) | eval support |
| eval | [tests_integ/test_cloudwatch_provider.py](../../../../sources/strands-agents__evals/tests_integ/test_cloudwatch_provider.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [src/strands_evals/__main__.py](../../../../sources/strands-agents__evals/src/strands_evals/__main__.py)<br>[src/strands_evals/cli/__main__.py](../../../../sources/strands-agents__evals/src/strands_evals/cli/__main__.py)<br>[src/strands_evals/cli/main.py](../../../../sources/strands-agents__evals/src/strands_evals/cli/main.py) |
| agentRuntime | 17 | [AGENTS.md](../../../../sources/strands-agents__evals/AGENTS.md)<br>[SKILL.md](../../../../sources/strands-agents__evals/SKILL.md)<br>[tests/strands_evals/tools/test_evaluation_tools.py](../../../../sources/strands-agents__evals/tests/strands_evals/tools/test_evaluation_tools.py)<br>[tests/strands_evals/cli/fixtures/agents.py](../../../../sources/strands-agents__evals/tests/strands_evals/cli/fixtures/agents.py)<br>[src/strands_evals/types/simulation/tool.py](../../../../sources/strands-agents__evals/src/strands_evals/types/simulation/tool.py)<br>[src/strands_evals/tools/evaluation_tools.py](../../../../sources/strands-agents__evals/src/strands_evals/tools/evaluation_tools.py)<br>[src/strands_evals/simulation/tool_simulator.py](../../../../sources/strands-agents__evals/src/strands_evals/simulation/tool_simulator.py)<br>[src/strands_evals/simulation/tools/__init__.py](../../../../sources/strands-agents__evals/src/strands_evals/simulation/tools/__init__.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 4 | [tests/strands_evals/mappers/test_strands_in_memory_mapper.py](../../../../sources/strands-agents__evals/tests/strands_evals/mappers/test_strands_in_memory_mapper.py)<br>[tests/strands_evals/extractors/test_graph_extractor.py](../../../../sources/strands-agents__evals/tests/strands_evals/extractors/test_graph_extractor.py)<br>[src/strands_evals/mappers/strands_in_memory_session_mapper.py](../../../../sources/strands-agents__evals/src/strands_evals/mappers/strands_in_memory_session_mapper.py)<br>[src/strands_evals/extractors/graph_extractor.py](../../../../sources/strands-agents__evals/src/strands_evals/extractors/graph_extractor.py) |
| spec | 0 | 명확하지 않음 |
| eval | 128 | [tests_integ/conftest.py](../../../../sources/strands-agents__evals/tests_integ/conftest.py)<br>[tests_integ/test_cloudwatch_provider.py](../../../../sources/strands-agents__evals/tests_integ/test_cloudwatch_provider.py)<br>[tests_integ/test_langchain_openinference_eval.py](../../../../sources/strands-agents__evals/tests_integ/test_langchain_openinference_eval.py)<br>[tests_integ/test_langchain_traceloop_eval.py](../../../../sources/strands-agents__evals/tests_integ/test_langchain_traceloop_eval.py)<br>[tests_integ/test_langfuse_provider.py](../../../../sources/strands-agents__evals/tests_integ/test_langfuse_provider.py)<br>[tests_integ/test_multimodal_output_evaluator.py](../../../../sources/strands-agents__evals/tests_integ/test_multimodal_output_evaluator.py)<br>[tests_integ/test_output_evaluator.py](../../../../sources/strands-agents__evals/tests_integ/test_output_evaluator.py)<br>[tests/__init__.py](../../../../sources/strands-agents__evals/tests/__init__.py) |
| security | 0 | 명확하지 않음 |
| ci | 8 | [.github/workflows/auto-strands-review.yml](../../../../sources/strands-agents__evals/.github/workflows/auto-strands-review.yml)<br>[.github/workflows/integration-test.yml](../../../../sources/strands-agents__evals/.github/workflows/integration-test.yml)<br>[.github/workflows/issue-labeler.yml](../../../../sources/strands-agents__evals/.github/workflows/issue-labeler.yml)<br>[.github/workflows/pr-and-push.yml](../../../../sources/strands-agents__evals/.github/workflows/pr-and-push.yml)<br>[.github/workflows/pr-title.yml](../../../../sources/strands-agents__evals/.github/workflows/pr-title.yml)<br>[.github/workflows/pypi-publish-on-release.yml](../../../../sources/strands-agents__evals/.github/workflows/pypi-publish-on-release.yml)<br>[.github/workflows/strands-command.yml](../../../../sources/strands-agents__evals/.github/workflows/strands-command.yml)<br>[.github/workflows/test-lint.yml](../../../../sources/strands-agents__evals/.github/workflows/test-lint.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/strands-agents__evals/AGENTS.md) |
| docs | 3 | [README.md](../../../../sources/strands-agents__evals/README.md)<br>[src/strands_evals/providers/README.md](../../../../sources/strands-agents__evals/src/strands_evals/providers/README.md)<br>[src/strands_evals/experimental/redteam/README.md](../../../../sources/strands-agents__evals/src/strands_evals/experimental/redteam/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/strands-agents__evals/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 128 | [tests_integ/conftest.py](../../../../sources/strands-agents__evals/tests_integ/conftest.py)<br>[tests_integ/test_cloudwatch_provider.py](../../../../sources/strands-agents__evals/tests_integ/test_cloudwatch_provider.py)<br>[tests_integ/test_langchain_openinference_eval.py](../../../../sources/strands-agents__evals/tests_integ/test_langchain_openinference_eval.py)<br>[tests_integ/test_langchain_traceloop_eval.py](../../../../sources/strands-agents__evals/tests_integ/test_langchain_traceloop_eval.py)<br>[tests_integ/test_langfuse_provider.py](../../../../sources/strands-agents__evals/tests_integ/test_langfuse_provider.py)<br>[tests_integ/test_multimodal_output_evaluator.py](../../../../sources/strands-agents__evals/tests_integ/test_multimodal_output_evaluator.py) |
| CI workflow | 8 | [.github/workflows/auto-strands-review.yml](../../../../sources/strands-agents__evals/.github/workflows/auto-strands-review.yml)<br>[.github/workflows/integration-test.yml](../../../../sources/strands-agents__evals/.github/workflows/integration-test.yml)<br>[.github/workflows/issue-labeler.yml](../../../../sources/strands-agents__evals/.github/workflows/issue-labeler.yml)<br>[.github/workflows/pr-and-push.yml](../../../../sources/strands-agents__evals/.github/workflows/pr-and-push.yml)<br>[.github/workflows/pr-title.yml](../../../../sources/strands-agents__evals/.github/workflows/pr-title.yml)<br>[.github/workflows/pypi-publish-on-release.yml](../../../../sources/strands-agents__evals/.github/workflows/pypi-publish-on-release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/strands-agents__evals/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `SKILL.md`, `tests/strands_evals/tools/test_evaluation_tools.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/strands_evals/__main__.py`, `src/strands_evals/cli/__main__.py`, `src/strands_evals/cli/main.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `SKILL.md`, `tests/strands_evals/tools/test_evaluation_tools.py`.
4. retrieval/memory/indexing 확인: `tests/strands_evals/mappers/test_strands_in_memory_mapper.py`, `tests/strands_evals/extractors/test_graph_extractor.py`, `src/strands_evals/mappers/strands_in_memory_session_mapper.py`.
5. test/eval 파일로 동작 검증: `tests_integ/conftest.py`, `tests_integ/test_cloudwatch_provider.py`, `tests_integ/test_langchain_openinference_eval.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A comprehensive evaluation framework for AI agents and LLM applications.. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, LICENSE, langchain이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
