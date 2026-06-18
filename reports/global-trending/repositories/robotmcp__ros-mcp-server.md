# robotmcp/ros-mcp-server

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/robotmcp/ros-mcp-server |
| local path | sources/robotmcp__ros-mcp-server |
| HEAD | 0eb504a |
| stars/forks | 1294 / 194 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:52:09Z |
| trendScore / priorityScore | 145 / 400 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | examples/1_turtlesim/README.md, examples/2_gemini/README.md, examples/3_limo_mobile_robot/isaac_sim/README.md |
| Cloud native / infrastructure | 259 | examples/1_turtlesim/README.md, examples/3_limo_mobile_robot/isaac_sim/README.md, examples/4_unitree_go2/real_robot/README.md |
| Developer tools / DX | 114 | examples/1_turtlesim/README.md, examples/2_gemini/README.md, examples/3_limo_mobile_robot/isaac_sim/README.md |
| Coding agent / software automation | 61 | examples/7_cursor/README.md, README.md, docs/install/clients/chatgpt.md |
| AI agent / orchestration | 16 | examples/1_turtlesim/README.md, examples/6_chatgpt/README.md, README.md |
| Security / supply chain | 8 | examples/6_chatgpt/README.md, .github/workflows/publish_mcp.yml, docs/contributing.md |
| Database / data infrastructure | 5 | examples/4_unitree_go2/isaac_sim/README.md, examples/4_unitree_go2/isaac_sim/scripts/omniverse_sim.py, docs/install/connect.md |
| Data / ML platform | 4 | examples/9_turtlebot3/README.md, examples/4_unitree_go2/isaac_sim/scripts/custom_rl_env.py, examples/4_unitree_go2/isaac_sim/scripts/omniverse_sim.py |
| Observability / evaluation | 3 | ros_mcp/prompts/test_actions_tools.py, docs/testing.md, docs/contributing.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llmFramework, mcp, observability, security, securityTooling |
| stacks | Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 164 |
| manifests | 19 |
| docs | 34 |
| tests | 40 |
| ci/ops | 23 |
| spec artifacts | 9 |
| agent instruction files | 8 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | ROS MCP Server 🧠⇄🤖 | ROS MCP Server 🧠⇄🤖 / Why ROS-MCP? / 🎥 Examples in Action / 🛠 Getting Started / 📚 More Examples & Tutorials / 🤝 Contributing / 📜 License | ROS MCP Server 🧠⇄🤖 ! Static Badge https //img.shields.io/badge/ROS Available green ! Static Badge https //img.shields.io/badge/ROS2 Available green ! Static Badge https //img.shields.io/badge/License Apache%202.0 blue ! Python https //img.shields.io/badge/python 3.10%2B blue ! pip https //img.shields.io/badge/pip 23.0%2B blue ! Dev Container https //img.shields.io/badge/Dev Container%20Ready blue ! GitHub Repo stars https //img.shields.io/github/stars/robotmcp/ros mcp server?style=social ! GitHub last commit https //img.shields.io/github/last commit/robotmcp/ros mcp server <! mcp name io.github.robotmcp/ros mcp server <p align="center" <img src="https //github.com/robotmcp/ros mcp server/b |


## Key Files

### Manifests

- examples/1_turtlesim/README.md
- examples/2_gemini/README.md
- examples/3_limo_mobile_robot/isaac_sim/README.md
- examples/3_limo_mobile_robot/real_robot/README.md
- examples/4_unitree_go2/isaac_sim/README.md
- examples/4_unitree_go2/real_robot/go2_ws/README.md
- examples/4_unitree_go2/real_robot/README.md
- examples/5_docker_turtlesim/README.md
- examples/6_chatgpt/README.md
- examples/7_cursor/README.md
- examples/8_images/README.md
- examples/9_turtlebot3/README.md
- README.md
- examples/5_docker_turtlesim/docker-compose.yml
- .devcontainer/Dockerfile
- pyproject.toml
- tests/integration/docker-compose.yml
- examples/4_unitree_go2/real_robot/go2_ws/src/go2_control/package.xml
- examples/4_unitree_go2/real_robot/go2_ws/src/go2_interfaces/package.xml


### Spec / Docs / Prompt Artifacts

- ros_mcp/prompts/test_actions_tools.py
- ros_mcp/prompts/test_connection_tools.py
- ros_mcp/prompts/test_nodes_tools.py
- ros_mcp/prompts/test_parameters_tools.py
- ros_mcp/prompts/test_server_tools.py
- ros_mcp/prompts/test_services_tools.py
- ros_mcp/prompts/test_topics_tools.py
- ros_mcp/prompts/__init__.py
- docs/architecture.md


### Agent Instruction Files

- ros_mcp/prompts/test_actions_tools.py
- ros_mcp/prompts/test_connection_tools.py
- ros_mcp/prompts/test_nodes_tools.py
- ros_mcp/prompts/test_parameters_tools.py
- ros_mcp/prompts/test_server_tools.py
- ros_mcp/prompts/test_services_tools.py
- ros_mcp/prompts/test_topics_tools.py
- ros_mcp/prompts/__init__.py


## Top Directories

| dir | count |
| --- | --- |
| examples | 45 |
| tests | 40 |
| ros_mcp | 29 |
| docs | 21 |
| .github | 10 |
| robot_specifications | 4 |
| launch | 3 |
| .devcontainer | 2 |
| config | 2 |
| .gitignore | 1 |
| .python-version | 1 |
| LICENSE | 1 |
| MANIFEST.in | 1 |
| pyproject.toml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 66 |
| .md | 34 |
| .sh | 14 |
| .yml | 12 |
| [no-ext] | 6 |
| .srv | 5 |
| .json | 3 |
| .launch | 3 |
| .yaml | 3 |
| .toml | 2 |
| .xml | 2 |
| .cfg | 1 |
| .in | 1 |
| .pip-git | 1 |
| .pip-source | 1 |
| .ros1-melodic | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
