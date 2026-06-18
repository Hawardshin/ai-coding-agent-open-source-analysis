# robotmcp/ros-mcp-server 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Connect AI models like Claude & GPT with robots using MCP and ROS.

## 요약

- 조사 단위: `sources/robotmcp__ros-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 208 files, 54 directories, depth score 101, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=ros_mcp/__init__.py, ros_mcp/integration.py, ros_mcp/main.py이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | robotmcp/ros-mcp-server |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1294 |
| Forks | 194 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/robotmcp__ros-mcp-server](../../../../sources/robotmcp__ros-mcp-server) |
| 기존 보고서 | [reports/global-trending/repositories/robotmcp__ros-mcp-server.md](../../../global-trending/repositories/robotmcp__ros-mcp-server.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 208 / 54 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .devcontainer, .github, config, docs, examples, launch, robot_specifications, ros_mcp, tests |
| 상위 확장자 | .py: 66, .png: 36, .md: 34, .sh: 14, .yml: 12, (none): 6, .srv: 5, .gif: 4, .json: 3, .launch: 3, .yaml: 3, .jpg: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 51 |
| docs | documentation surface | 30 |
| examples/4_unitree_go2 | examples workspace | 3 |
| examples/5_docker_turtlesim | examples workspace | 3 |
| examples/8_images | examples workspace | 3 |
| examples/1_turtlesim | examples workspace | 2 |
| examples/2_gemini | examples workspace | 2 |
| examples/3_limo_mobile_robot | examples workspace | 2 |
| examples/9_turtlebot3 | examples workspace | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| examples | top-level component | 1 |
| examples/6_chatgpt | examples workspace | 1 |
| examples/7_cursor | examples workspace | 1 |
| launch | top-level component | 1 |
| robot_specifications | ci surface | 1 |
| ros_mcp | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | ros-mcp | ros-mcp |


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
| mcp | [ros_mcp/__init__.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/__init__.py) | mcp signal |
| mcp | [ros_mcp/integration.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/integration.py) | mcp signal |
| mcp | [ros_mcp/main.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/main.py) | mcp signal |
| mcp | [ros_mcp/utils/__init__.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/utils/__init__.py) | mcp signal |
| agentRuntime | [ros_mcp/tools/__init__.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [ros_mcp/tools/actions.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/tools/actions.py) | agentRuntime signal |
| agentRuntime | [ros_mcp/tools/connection.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/tools/connection.py) | agentRuntime signal |
| agentRuntime | [ros_mcp/tools/images.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/tools/images.py) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/robotmcp__ros-mcp-server/server.json) | entrypoints signal |
| entrypoints | [server.py](../../../../sources/robotmcp__ros-mcp-server/server.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/robotmcp__ros-mcp-server/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/robotmcp__ros-mcp-server/uv.lock) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [server.json](../../../../sources/robotmcp__ros-mcp-server/server.json)<br>[server.py](../../../../sources/robotmcp__ros-mcp-server/server.py)<br>[ros_mcp/main.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/main.py) |
| agentRuntime | 9 | [ros_mcp/tools/__init__.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/tools/__init__.py)<br>[ros_mcp/tools/actions.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/tools/actions.py)<br>[ros_mcp/tools/connection.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/tools/connection.py)<br>[ros_mcp/tools/images.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/tools/images.py)<br>[ros_mcp/tools/nodes.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/tools/nodes.py)<br>[ros_mcp/tools/parameters.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/tools/parameters.py)<br>[ros_mcp/tools/robot_config.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/tools/robot_config.py)<br>[ros_mcp/tools/services.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/tools/services.py) |
| mcp | 40 | [ros_mcp/__init__.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/__init__.py)<br>[ros_mcp/integration.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/integration.py)<br>[ros_mcp/main.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/main.py)<br>[ros_mcp/utils/__init__.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/utils/__init__.py)<br>[ros_mcp/utils/config_utils.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/utils/config_utils.py)<br>[ros_mcp/utils/network_utils.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/utils/network_utils.py)<br>[ros_mcp/utils/response.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/utils/response.py)<br>[ros_mcp/utils/rosapi_types.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/utils/rosapi_types.py) |
| retrieval | 0 | 명확하지 않음 |
| spec | 1 | [docs/architecture.md](../../../../sources/robotmcp__ros-mcp-server/docs/architecture.md) |
| eval | 48 | [tests/unit/__init__.py](../../../../sources/robotmcp__ros-mcp-server/tests/unit/__init__.py)<br>[tests/unit/conftest.py](../../../../sources/robotmcp__ros-mcp-server/tests/unit/conftest.py)<br>[tests/unit/test_config_utils.py](../../../../sources/robotmcp__ros-mcp-server/tests/unit/test_config_utils.py)<br>[tests/integration/__init__.py](../../../../sources/robotmcp__ros-mcp-server/tests/integration/__init__.py)<br>[tests/integration/conftest.py](../../../../sources/robotmcp__ros-mcp-server/tests/integration/conftest.py)<br>[tests/integration/docker-compose.yml](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker-compose.yml)<br>[tests/integration/test_actions.py](../../../../sources/robotmcp__ros-mcp-server/tests/integration/test_actions.py)<br>[tests/integration/test_connection.py](../../../../sources/robotmcp__ros-mcp-server/tests/integration/test_connection.py) |
| security | 0 | 명확하지 않음 |
| ci | 10 | [.github/workflows/clone-metrics.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/clone-metrics.yml)<br>[.github/workflows/download-metrics.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/download-metrics.yml)<br>[.github/workflows/integration-tests.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/integration-tests.yml)<br>[.github/workflows/merge-into-branch.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/merge-into-branch.yml)<br>[.github/workflows/publish_mcp.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/publish_mcp.yml)<br>[.github/workflows/publish_pypi.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/publish_pypi.yml)<br>[.github/workflows/publish.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/publish.yml)<br>[.github/workflows/ruff.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/ruff.yml) |
| container | 13 | [tests/integration/docker-compose.yml](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker-compose.yml)<br>[tests/integration/docker/Dockerfile.ros1-melodic](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker/Dockerfile.ros1-melodic)<br>[tests/integration/docker/Dockerfile.ros1-noetic](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker/Dockerfile.ros1-noetic)<br>[tests/integration/docker/Dockerfile.ros2-humble](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker/Dockerfile.ros2-humble)<br>[tests/integration/docker/Dockerfile.ros2-jazzy](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker/Dockerfile.ros2-jazzy)<br>[tests/installation/docker/Dockerfile.pip-git](../../../../sources/robotmcp__ros-mcp-server/tests/installation/docker/Dockerfile.pip-git)<br>[tests/installation/docker/Dockerfile.pip-source](../../../../sources/robotmcp__ros-mcp-server/tests/installation/docker/Dockerfile.pip-source)<br>[tests/installation/docker/Dockerfile.uv-source](../../../../sources/robotmcp__ros-mcp-server/tests/installation/docker/Dockerfile.uv-source) |
| instruction | 0 | 명확하지 않음 |
| docs | 39 | [README.md](../../../../sources/robotmcp__ros-mcp-server/README.md)<br>[examples/9_turtlebot3/README.md](../../../../sources/robotmcp__ros-mcp-server/examples/9_turtlebot3/README.md)<br>[examples/8_images/README.md](../../../../sources/robotmcp__ros-mcp-server/examples/8_images/README.md)<br>[examples/7_cursor/README.md](../../../../sources/robotmcp__ros-mcp-server/examples/7_cursor/README.md)<br>[examples/6_chatgpt/README.md](../../../../sources/robotmcp__ros-mcp-server/examples/6_chatgpt/README.md)<br>[examples/5_docker_turtlesim/README.md](../../../../sources/robotmcp__ros-mcp-server/examples/5_docker_turtlesim/README.md)<br>[examples/4_unitree_go2/real_robot/README.md](../../../../sources/robotmcp__ros-mcp-server/examples/4_unitree_go2/real_robot/README.md)<br>[examples/4_unitree_go2/real_robot/go2_ws/README.md](../../../../sources/robotmcp__ros-mcp-server/examples/4_unitree_go2/real_robot/go2_ws/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/robotmcp__ros-mcp-server/pyproject.toml)<br>[uv.lock](../../../../sources/robotmcp__ros-mcp-server/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 48 | [tests/unit/__init__.py](../../../../sources/robotmcp__ros-mcp-server/tests/unit/__init__.py)<br>[tests/unit/conftest.py](../../../../sources/robotmcp__ros-mcp-server/tests/unit/conftest.py)<br>[tests/unit/test_config_utils.py](../../../../sources/robotmcp__ros-mcp-server/tests/unit/test_config_utils.py)<br>[tests/integration/__init__.py](../../../../sources/robotmcp__ros-mcp-server/tests/integration/__init__.py)<br>[tests/integration/conftest.py](../../../../sources/robotmcp__ros-mcp-server/tests/integration/conftest.py)<br>[tests/integration/docker-compose.yml](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker-compose.yml) |
| CI workflow | 10 | [.github/workflows/clone-metrics.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/clone-metrics.yml)<br>[.github/workflows/download-metrics.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/download-metrics.yml)<br>[.github/workflows/integration-tests.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/integration-tests.yml)<br>[.github/workflows/merge-into-branch.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/merge-into-branch.yml)<br>[.github/workflows/publish_mcp.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/publish_mcp.yml)<br>[.github/workflows/publish_pypi.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/publish_pypi.yml) |
| 컨테이너/배포 | 13 | [tests/integration/docker-compose.yml](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker-compose.yml)<br>[tests/integration/docker/Dockerfile.ros1-melodic](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker/Dockerfile.ros1-melodic)<br>[tests/integration/docker/Dockerfile.ros1-noetic](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker/Dockerfile.ros1-noetic)<br>[tests/integration/docker/Dockerfile.ros2-humble](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker/Dockerfile.ros2-humble)<br>[tests/integration/docker/Dockerfile.ros2-jazzy](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker/Dockerfile.ros2-jazzy)<br>[tests/installation/docker/Dockerfile.pip-git](../../../../sources/robotmcp__ros-mcp-server/tests/installation/docker/Dockerfile.pip-git) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `ros_mcp/__init__.py`, `ros_mcp/integration.py`, `ros_mcp/main.py`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `server.py`, `ros_mcp/main.py`.
3. agent/tool runtime 매핑: `ros_mcp/tools/__init__.py`, `ros_mcp/tools/actions.py`, `ros_mcp/tools/connection.py`.
4. test/eval 파일로 동작 검증: `tests/unit/__init__.py`, `tests/unit/conftest.py`, `tests/unit/test_config_utils.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Connect AI models like Claude & GPT with robots using MCP and ROS.. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, mcp, docker이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
