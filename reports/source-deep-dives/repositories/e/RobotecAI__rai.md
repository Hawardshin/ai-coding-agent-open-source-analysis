# RobotecAI/rai 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

RAI is a vendor agnostic agentic framework for Physical AI robotics, utilizing ROS 2 tools to perform complex actions, defined scenarios, free interface execution, log summaries, voice interaction and more.

## 요약

- 조사 단위: `sources/RobotecAI__rai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 615 files, 172 directories, depth score 113, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, tests/tools/test_timeout.py, tests/tools/test_tool_input_args_compatibility.py이고, 의존성 단서는 next, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | RobotecAI/rai |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 529 |
| Forks | 71 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/RobotecAI__rai](../../../../sources/RobotecAI__rai) |
| 기존 보고서 | [reports/global-trending/repositories/RobotecAI__rai.md](../../../global-trending/repositories/RobotecAI__rai.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 615 / 172 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, docker, docs, examples, scripts, src, tests |
| 상위 확장자 | .py: 409, .md: 64, .yaml: 48, .png: 30, (none): 11, .toml: 10, .yml: 10, .jpg: 8, .json: 5, .sh: 4, .gif: 3, .xml: 3 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 70 |
| src | source boundary | 41 |
| docs | documentation surface | 29 |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |
| examples | top-level component | 1 |
| scripts | top-level component | 1 |


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
| webRuntime | next |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [AGENTS.md](../../../../sources/RobotecAI__rai/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/tools/test_timeout.py](../../../../sources/RobotecAI__rai/tests/tools/test_timeout.py) | agentRuntime signal |
| agentRuntime | [tests/tools/test_tool_input_args_compatibility.py](../../../../sources/RobotecAI__rai/tests/tools/test_tool_input_args_compatibility.py) | agentRuntime signal |
| agentRuntime | [tests/tools/test_tool_utils.py](../../../../sources/RobotecAI__rai/tests/tools/test_tool_utils.py) | agentRuntime signal |
| config | [pyproject.toml](../../../../sources/RobotecAI__rai/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/RobotecAI__rai/uv.lock) | config signal |
| config | [src/rai_whoami/pyproject.toml](../../../../sources/RobotecAI__rai/src/rai_whoami/pyproject.toml) | config signal |
| config | [src/rai_sim/pyproject.toml](../../../../sources/RobotecAI__rai/src/rai_sim/pyproject.toml) | config signal |
| ci | [.github/workflows/build-and-test.yml](../../../../sources/RobotecAI__rai/.github/workflows/build-and-test.yml) | ci support |
| ci | [.github/workflows/licensechecker.yaml](../../../../sources/RobotecAI__rai/.github/workflows/licensechecker.yaml) | ci support |
| container | [docker/Dockerfile](../../../../sources/RobotecAI__rai/docker/Dockerfile) | container support |
| container | [docker/Dockerfile.manipulation-demo](../../../../sources/RobotecAI__rai/docker/Dockerfile.manipulation-demo) | container support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 135 | [AGENTS.md](../../../../sources/RobotecAI__rai/AGENTS.md)<br>[tests/tools/test_timeout.py](../../../../sources/RobotecAI__rai/tests/tools/test_timeout.py)<br>[tests/tools/test_tool_input_args_compatibility.py](../../../../sources/RobotecAI__rai/tests/tools/test_tool_input_args_compatibility.py)<br>[tests/tools/test_tool_utils.py](../../../../sources/RobotecAI__rai/tests/tools/test_tool_utils.py)<br>[tests/tools/test_wait_for_seconds_tool.py](../../../../sources/RobotecAI__rai/tests/tools/test_wait_for_seconds_tool.py)<br>[tests/tools/ros2/test_action_tools.py](../../../../sources/RobotecAI__rai/tests/tools/ros2/test_action_tools.py)<br>[tests/tools/ros2/test_manipulation_custom.py](../../../../sources/RobotecAI__rai/tests/tools/ros2/test_manipulation_custom.py)<br>[tests/tools/ros2/test_nav2_tools.py](../../../../sources/RobotecAI__rai/tests/tools/ros2/test_nav2_tools.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 10 | [tests/rai_semap/test_memory.py](../../../../sources/RobotecAI__rai/tests/rai_semap/test_memory.py)<br>[src/rai_whoami/rai_whoami/vector_db/__init__.py](../../../../sources/RobotecAI__rai/src/rai_whoami/rai_whoami/vector_db/__init__.py)<br>[src/rai_whoami/rai_whoami/vector_db/builder.py](../../../../sources/RobotecAI__rai/src/rai_whoami/rai_whoami/vector_db/builder.py)<br>[src/rai_whoami/rai_whoami/vector_db/faiss.py](../../../../sources/RobotecAI__rai/src/rai_whoami/rai_whoami/vector_db/faiss.py)<br>[src/rai_whoami/rai_whoami/tools/vector_db.py](../../../../sources/RobotecAI__rai/src/rai_whoami/rai_whoami/tools/vector_db.py)<br>[src/rai_whoami/rai_whoami/scripts/ros2_vector_store_retrieval_service.py](../../../../sources/RobotecAI__rai/src/rai_whoami/rai_whoami/scripts/ros2_vector_store_retrieval_service.py)<br>[src/rai_whoami/rai_whoami/agents/ros2/vector_store_retrieval_agent.py](../../../../sources/RobotecAI__rai/src/rai_whoami/rai_whoami/agents/ros2/vector_store_retrieval_agent.py)<br>[src/rai_semap/rai_semap/core/base_memory.py](../../../../sources/RobotecAI__rai/src/rai_semap/rai_semap/core/base_memory.py) |
| spec | 2 | [src/rai_semap/design.md](../../../../sources/RobotecAI__rai/src/rai_semap/design.md)<br>[docs/api_design_considerations.md](../../../../sources/RobotecAI__rai/docs/api_design_considerations.md) |
| eval | 221 | [tests/__init__.py](../../../../sources/RobotecAI__rai/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/RobotecAI__rai/tests/conftest.py)<br>[tests/types/test_ros2_convert.py](../../../../sources/RobotecAI__rai/tests/types/test_ros2_convert.py)<br>[tests/tools/test_timeout.py](../../../../sources/RobotecAI__rai/tests/tools/test_timeout.py)<br>[tests/tools/test_tool_input_args_compatibility.py](../../../../sources/RobotecAI__rai/tests/tools/test_tool_input_args_compatibility.py)<br>[tests/tools/test_tool_utils.py](../../../../sources/RobotecAI__rai/tests/tools/test_tool_utils.py)<br>[tests/tools/test_wait_for_seconds_tool.py](../../../../sources/RobotecAI__rai/tests/tools/test_wait_for_seconds_tool.py)<br>[tests/tools/ros2/test_action_tools.py](../../../../sources/RobotecAI__rai/tests/tools/ros2/test_action_tools.py) |
| security | 1 | [SECURITY.md](../../../../sources/RobotecAI__rai/SECURITY.md) |
| ci | 8 | [.github/workflows/build-and-test.yml](../../../../sources/RobotecAI__rai/.github/workflows/build-and-test.yml)<br>[.github/workflows/licensechecker.yaml](../../../../sources/RobotecAI__rai/.github/workflows/licensechecker.yaml)<br>[.github/workflows/lint_pr.yml](../../../../sources/RobotecAI__rai/.github/workflows/lint_pr.yml)<br>[.github/workflows/mkdocs-build.yml](../../../../sources/RobotecAI__rai/.github/workflows/mkdocs-build.yml)<br>[.github/workflows/mkdocs-publish.yml](../../../../sources/RobotecAI__rai/.github/workflows/mkdocs-publish.yml)<br>[.github/workflows/pre-commit.yml](../../../../sources/RobotecAI__rai/.github/workflows/pre-commit.yml)<br>[.github/workflows/require-version-bump.yml](../../../../sources/RobotecAI__rai/.github/workflows/require-version-bump.yml)<br>[.github/workflows/uv-lock-check.yml](../../../../sources/RobotecAI__rai/.github/workflows/uv-lock-check.yml) |
| container | 2 | [docker/Dockerfile](../../../../sources/RobotecAI__rai/docker/Dockerfile)<br>[docker/Dockerfile.manipulation-demo](../../../../sources/RobotecAI__rai/docker/Dockerfile.manipulation-demo) |
| instruction | 1 | [AGENTS.md](../../../../sources/RobotecAI__rai/AGENTS.md) |
| docs | 90 | [mkdocs.yml](../../../../sources/RobotecAI__rai/mkdocs.yml)<br>[README.md](../../../../sources/RobotecAI__rai/README.md)<br>[src/rai_whoami/README.md](../../../../sources/RobotecAI__rai/src/rai_whoami/README.md)<br>[src/rai_whoami/docs/images/rai_whoami.png](../../../../sources/RobotecAI__rai/src/rai_whoami/docs/images/rai_whoami.png)<br>[src/rai_sim/README.md](../../../../sources/RobotecAI__rai/src/rai_sim/README.md)<br>[src/rai_semap/README.md](../../../../sources/RobotecAI__rai/src/rai_semap/README.md)<br>[src/rai_s2s/README.md](../../../../sources/RobotecAI__rai/src/rai_s2s/README.md)<br>[src/rai_finetune/README.md](../../../../sources/RobotecAI__rai/src/rai_finetune/README.md) |
| config | 10 | [pyproject.toml](../../../../sources/RobotecAI__rai/pyproject.toml)<br>[uv.lock](../../../../sources/RobotecAI__rai/uv.lock)<br>[src/rai_whoami/pyproject.toml](../../../../sources/RobotecAI__rai/src/rai_whoami/pyproject.toml)<br>[src/rai_sim/pyproject.toml](../../../../sources/RobotecAI__rai/src/rai_sim/pyproject.toml)<br>[src/rai_semap/pyproject.toml](../../../../sources/RobotecAI__rai/src/rai_semap/pyproject.toml)<br>[src/rai_s2s/pyproject.toml](../../../../sources/RobotecAI__rai/src/rai_s2s/pyproject.toml)<br>[src/rai_finetune/pyproject.toml](../../../../sources/RobotecAI__rai/src/rai_finetune/pyproject.toml)<br>[src/rai_extensions/rai_perception/pyproject.toml](../../../../sources/RobotecAI__rai/src/rai_extensions/rai_perception/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 221 | [tests/__init__.py](../../../../sources/RobotecAI__rai/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/RobotecAI__rai/tests/conftest.py)<br>[tests/types/test_ros2_convert.py](../../../../sources/RobotecAI__rai/tests/types/test_ros2_convert.py)<br>[tests/tools/test_timeout.py](../../../../sources/RobotecAI__rai/tests/tools/test_timeout.py)<br>[tests/tools/test_tool_input_args_compatibility.py](../../../../sources/RobotecAI__rai/tests/tools/test_tool_input_args_compatibility.py)<br>[tests/tools/test_tool_utils.py](../../../../sources/RobotecAI__rai/tests/tools/test_tool_utils.py) |
| CI workflow | 8 | [.github/workflows/build-and-test.yml](../../../../sources/RobotecAI__rai/.github/workflows/build-and-test.yml)<br>[.github/workflows/licensechecker.yaml](../../../../sources/RobotecAI__rai/.github/workflows/licensechecker.yaml)<br>[.github/workflows/lint_pr.yml](../../../../sources/RobotecAI__rai/.github/workflows/lint_pr.yml)<br>[.github/workflows/mkdocs-build.yml](../../../../sources/RobotecAI__rai/.github/workflows/mkdocs-build.yml)<br>[.github/workflows/mkdocs-publish.yml](../../../../sources/RobotecAI__rai/.github/workflows/mkdocs-publish.yml)<br>[.github/workflows/pre-commit.yml](../../../../sources/RobotecAI__rai/.github/workflows/pre-commit.yml) |
| 컨테이너/배포 | 2 | [docker/Dockerfile](../../../../sources/RobotecAI__rai/docker/Dockerfile)<br>[docker/Dockerfile.manipulation-demo](../../../../sources/RobotecAI__rai/docker/Dockerfile.manipulation-demo) |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/RobotecAI__rai/SECURITY.md) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/RobotecAI__rai/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `tests/tools/test_timeout.py`, `tests/tools/test_tool_input_args_compatibility.py`.
2. agent/tool runtime 매핑: `AGENTS.md`, `tests/tools/test_timeout.py`, `tests/tools/test_tool_input_args_compatibility.py`.
3. retrieval/memory/indexing 확인: `tests/rai_semap/test_memory.py`, `src/rai_whoami/rai_whoami/vector_db/__init__.py`, `src/rai_whoami/rai_whoami/vector_db/builder.py`.
4. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/types/test_ros2_convert.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 RAI is a vendor agnostic agentic framework for Physical AI robotics, utilizing ROS 2 tools to perform complex actions, d. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, LICENSE, next이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
