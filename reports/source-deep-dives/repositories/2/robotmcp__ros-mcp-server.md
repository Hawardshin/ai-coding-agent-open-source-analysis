# robotmcp/ros-mcp-server Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Connect AI models like Claude & GPT with robots using MCP and ROS.

## 요약

- 조사 단위: `sources/robotmcp__ros-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 208 files, 54 directories, depth score 107, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=ros_mcp/__init__.py, ros_mcp/integration.py, ros_mcp/main.py이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | robotmcp/ros-mcp-server |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1294 |
| Forks | 194 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/robotmcp__ros-mcp-server](../../../../sources/robotmcp__ros-mcp-server) |
| Existing report | [reports/global-trending/repositories/robotmcp__ros-mcp-server.md](../../../global-trending/repositories/robotmcp__ros-mcp-server.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 208 / 54 |
| Max observed depth | 8 |
| Top directories | .devcontainer, .github, config, docs, examples, launch, robot_specifications, ros_mcp, tests |
| Top extensions | .py: 66, .png: 36, .md: 34, .sh: 14, .yml: 12, (none): 6, .srv: 5, .gif: 4, .json: 3, .launch: 3, .yaml: 3, .jpg: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | ros-mcp | ros-mcp |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [server.json](../../../../sources/robotmcp__ros-mcp-server/server.json)<br>[server.py](../../../../sources/robotmcp__ros-mcp-server/server.py)<br>[ros_mcp/main.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/main.py) |
| agentRuntime | 9 | [ros_mcp/tools/__init__.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/tools/__init__.py)<br>[ros_mcp/tools/actions.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/tools/actions.py)<br>[ros_mcp/tools/connection.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/tools/connection.py)<br>[ros_mcp/tools/images.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/tools/images.py)<br>[ros_mcp/tools/nodes.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/tools/nodes.py)<br>[ros_mcp/tools/parameters.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/tools/parameters.py)<br>[ros_mcp/tools/robot_config.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/tools/robot_config.py)<br>[ros_mcp/tools/services.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/tools/services.py) |
| mcp | 40 | [ros_mcp/__init__.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/__init__.py)<br>[ros_mcp/integration.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/integration.py)<br>[ros_mcp/main.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/main.py)<br>[ros_mcp/utils/__init__.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/utils/__init__.py)<br>[ros_mcp/utils/config_utils.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/utils/config_utils.py)<br>[ros_mcp/utils/network_utils.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/utils/network_utils.py)<br>[ros_mcp/utils/response.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/utils/response.py)<br>[ros_mcp/utils/rosapi_types.py](../../../../sources/robotmcp__ros-mcp-server/ros_mcp/utils/rosapi_types.py) |
| retrieval | 0 | not obvious |
| spec | 1 | [docs/architecture.md](../../../../sources/robotmcp__ros-mcp-server/docs/architecture.md) |
| eval | 48 | [tests/unit/__init__.py](../../../../sources/robotmcp__ros-mcp-server/tests/unit/__init__.py)<br>[tests/unit/conftest.py](../../../../sources/robotmcp__ros-mcp-server/tests/unit/conftest.py)<br>[tests/unit/test_config_utils.py](../../../../sources/robotmcp__ros-mcp-server/tests/unit/test_config_utils.py)<br>[tests/integration/__init__.py](../../../../sources/robotmcp__ros-mcp-server/tests/integration/__init__.py)<br>[tests/integration/conftest.py](../../../../sources/robotmcp__ros-mcp-server/tests/integration/conftest.py)<br>[tests/integration/docker-compose.yml](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker-compose.yml)<br>[tests/integration/test_actions.py](../../../../sources/robotmcp__ros-mcp-server/tests/integration/test_actions.py)<br>[tests/integration/test_connection.py](../../../../sources/robotmcp__ros-mcp-server/tests/integration/test_connection.py) |
| security | 0 | not obvious |
| ci | 10 | [.github/workflows/clone-metrics.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/clone-metrics.yml)<br>[.github/workflows/download-metrics.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/download-metrics.yml)<br>[.github/workflows/integration-tests.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/integration-tests.yml)<br>[.github/workflows/merge-into-branch.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/merge-into-branch.yml)<br>[.github/workflows/publish_mcp.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/publish_mcp.yml)<br>[.github/workflows/publish_pypi.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/publish_pypi.yml)<br>[.github/workflows/publish.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/publish.yml)<br>[.github/workflows/ruff.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/ruff.yml) |
| container | 13 | [tests/integration/docker-compose.yml](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker-compose.yml)<br>[tests/integration/docker/Dockerfile.ros1-melodic](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker/Dockerfile.ros1-melodic)<br>[tests/integration/docker/Dockerfile.ros1-noetic](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker/Dockerfile.ros1-noetic)<br>[tests/integration/docker/Dockerfile.ros2-humble](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker/Dockerfile.ros2-humble)<br>[tests/integration/docker/Dockerfile.ros2-jazzy](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker/Dockerfile.ros2-jazzy)<br>[tests/installation/docker/Dockerfile.pip-git](../../../../sources/robotmcp__ros-mcp-server/tests/installation/docker/Dockerfile.pip-git)<br>[tests/installation/docker/Dockerfile.pip-source](../../../../sources/robotmcp__ros-mcp-server/tests/installation/docker/Dockerfile.pip-source)<br>[tests/installation/docker/Dockerfile.uv-source](../../../../sources/robotmcp__ros-mcp-server/tests/installation/docker/Dockerfile.uv-source) |
| instruction | 0 | not obvious |
| docs | 39 | [README.md](../../../../sources/robotmcp__ros-mcp-server/README.md)<br>[examples/9_turtlebot3/README.md](../../../../sources/robotmcp__ros-mcp-server/examples/9_turtlebot3/README.md)<br>[examples/8_images/README.md](../../../../sources/robotmcp__ros-mcp-server/examples/8_images/README.md)<br>[examples/7_cursor/README.md](../../../../sources/robotmcp__ros-mcp-server/examples/7_cursor/README.md)<br>[examples/6_chatgpt/README.md](../../../../sources/robotmcp__ros-mcp-server/examples/6_chatgpt/README.md)<br>[examples/5_docker_turtlesim/README.md](../../../../sources/robotmcp__ros-mcp-server/examples/5_docker_turtlesim/README.md)<br>[examples/4_unitree_go2/real_robot/README.md](../../../../sources/robotmcp__ros-mcp-server/examples/4_unitree_go2/real_robot/README.md)<br>[examples/4_unitree_go2/real_robot/go2_ws/README.md](../../../../sources/robotmcp__ros-mcp-server/examples/4_unitree_go2/real_robot/go2_ws/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/robotmcp__ros-mcp-server/pyproject.toml)<br>[uv.lock](../../../../sources/robotmcp__ros-mcp-server/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 48 | [tests/unit/__init__.py](../../../../sources/robotmcp__ros-mcp-server/tests/unit/__init__.py)<br>[tests/unit/conftest.py](../../../../sources/robotmcp__ros-mcp-server/tests/unit/conftest.py)<br>[tests/unit/test_config_utils.py](../../../../sources/robotmcp__ros-mcp-server/tests/unit/test_config_utils.py)<br>[tests/integration/__init__.py](../../../../sources/robotmcp__ros-mcp-server/tests/integration/__init__.py)<br>[tests/integration/conftest.py](../../../../sources/robotmcp__ros-mcp-server/tests/integration/conftest.py)<br>[tests/integration/docker-compose.yml](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker-compose.yml) |
| CI workflows | 10 | [.github/workflows/clone-metrics.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/clone-metrics.yml)<br>[.github/workflows/download-metrics.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/download-metrics.yml)<br>[.github/workflows/integration-tests.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/integration-tests.yml)<br>[.github/workflows/merge-into-branch.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/merge-into-branch.yml)<br>[.github/workflows/publish_mcp.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/publish_mcp.yml)<br>[.github/workflows/publish_pypi.yml](../../../../sources/robotmcp__ros-mcp-server/.github/workflows/publish_pypi.yml) |
| Containers / deploy | 13 | [tests/integration/docker-compose.yml](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker-compose.yml)<br>[tests/integration/docker/Dockerfile.ros1-melodic](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker/Dockerfile.ros1-melodic)<br>[tests/integration/docker/Dockerfile.ros1-noetic](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker/Dockerfile.ros1-noetic)<br>[tests/integration/docker/Dockerfile.ros2-humble](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker/Dockerfile.ros2-humble)<br>[tests/integration/docker/Dockerfile.ros2-jazzy](../../../../sources/robotmcp__ros-mcp-server/tests/integration/docker/Dockerfile.ros2-jazzy)<br>[tests/installation/docker/Dockerfile.pip-git](../../../../sources/robotmcp__ros-mcp-server/tests/installation/docker/Dockerfile.pip-git) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `ros_mcp/__init__.py`, `ros_mcp/integration.py`, `ros_mcp/main.py`.
2. Trace execution through entrypoints: `server.json`, `server.py`, `ros_mcp/main.py`.
3. Map agent/tool runtime through: `ros_mcp/tools/__init__.py`, `ros_mcp/tools/actions.py`, `ros_mcp/tools/connection.py`.
4. Verify behavior through test/eval files: `tests/unit/__init__.py`, `tests/unit/conftest.py`, `tests/unit/test_config_utils.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Connect AI models like Claude & GPT with robots using MCP and ROS.. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, mcp, docker이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
