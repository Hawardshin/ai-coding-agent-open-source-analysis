# RobotecAI/rai Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

RAI is a vendor agnostic agentic framework for Physical AI robotics, utilizing ROS 2 tools to perform complex actions, defined scenarios, free interface execution, log summaries, voice interaction and more.

## 요약

- 조사 단위: `sources/RobotecAI__rai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 615 files, 172 directories, depth score 119, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, tests/tools/test_timeout.py, tests/tools/test_tool_input_args_compatibility.py이고, 의존성 단서는 next, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | RobotecAI/rai |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 529 |
| Forks | 71 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/RobotecAI__rai](../../../../sources/RobotecAI__rai) |
| Existing report | [reports/global-trending/repositories/RobotecAI__rai.md](../../../global-trending/repositories/RobotecAI__rai.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 615 / 172 |
| Max observed depth | 7 |
| Top directories | .github, docker, docs, examples, scripts, src, tests |
| Top extensions | .py: 409, .md: 64, .yaml: 48, .png: 30, (none): 11, .toml: 10, .yml: 10, .jpg: 8, .json: 5, .sh: 4, .gif: 3, .xml: 3 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 70 |
| src | source boundary | 41 |
| docs | documentation surface | 29 |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |
| examples | top-level component | 1 |
| scripts | top-level component | 1 |


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
| webRuntime | next |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 135 | [AGENTS.md](../../../../sources/RobotecAI__rai/AGENTS.md)<br>[tests/tools/test_timeout.py](../../../../sources/RobotecAI__rai/tests/tools/test_timeout.py)<br>[tests/tools/test_tool_input_args_compatibility.py](../../../../sources/RobotecAI__rai/tests/tools/test_tool_input_args_compatibility.py)<br>[tests/tools/test_tool_utils.py](../../../../sources/RobotecAI__rai/tests/tools/test_tool_utils.py)<br>[tests/tools/test_wait_for_seconds_tool.py](../../../../sources/RobotecAI__rai/tests/tools/test_wait_for_seconds_tool.py)<br>[tests/tools/ros2/test_action_tools.py](../../../../sources/RobotecAI__rai/tests/tools/ros2/test_action_tools.py)<br>[tests/tools/ros2/test_manipulation_custom.py](../../../../sources/RobotecAI__rai/tests/tools/ros2/test_manipulation_custom.py)<br>[tests/tools/ros2/test_nav2_tools.py](../../../../sources/RobotecAI__rai/tests/tools/ros2/test_nav2_tools.py) |
| mcp | 0 | not obvious |
| retrieval | 10 | [tests/rai_semap/test_memory.py](../../../../sources/RobotecAI__rai/tests/rai_semap/test_memory.py)<br>[src/rai_whoami/rai_whoami/vector_db/__init__.py](../../../../sources/RobotecAI__rai/src/rai_whoami/rai_whoami/vector_db/__init__.py)<br>[src/rai_whoami/rai_whoami/vector_db/builder.py](../../../../sources/RobotecAI__rai/src/rai_whoami/rai_whoami/vector_db/builder.py)<br>[src/rai_whoami/rai_whoami/vector_db/faiss.py](../../../../sources/RobotecAI__rai/src/rai_whoami/rai_whoami/vector_db/faiss.py)<br>[src/rai_whoami/rai_whoami/tools/vector_db.py](../../../../sources/RobotecAI__rai/src/rai_whoami/rai_whoami/tools/vector_db.py)<br>[src/rai_whoami/rai_whoami/scripts/ros2_vector_store_retrieval_service.py](../../../../sources/RobotecAI__rai/src/rai_whoami/rai_whoami/scripts/ros2_vector_store_retrieval_service.py)<br>[src/rai_whoami/rai_whoami/agents/ros2/vector_store_retrieval_agent.py](../../../../sources/RobotecAI__rai/src/rai_whoami/rai_whoami/agents/ros2/vector_store_retrieval_agent.py)<br>[src/rai_semap/rai_semap/core/base_memory.py](../../../../sources/RobotecAI__rai/src/rai_semap/rai_semap/core/base_memory.py) |
| spec | 2 | [src/rai_semap/design.md](../../../../sources/RobotecAI__rai/src/rai_semap/design.md)<br>[docs/api_design_considerations.md](../../../../sources/RobotecAI__rai/docs/api_design_considerations.md) |
| eval | 221 | [tests/__init__.py](../../../../sources/RobotecAI__rai/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/RobotecAI__rai/tests/conftest.py)<br>[tests/types/test_ros2_convert.py](../../../../sources/RobotecAI__rai/tests/types/test_ros2_convert.py)<br>[tests/tools/test_timeout.py](../../../../sources/RobotecAI__rai/tests/tools/test_timeout.py)<br>[tests/tools/test_tool_input_args_compatibility.py](../../../../sources/RobotecAI__rai/tests/tools/test_tool_input_args_compatibility.py)<br>[tests/tools/test_tool_utils.py](../../../../sources/RobotecAI__rai/tests/tools/test_tool_utils.py)<br>[tests/tools/test_wait_for_seconds_tool.py](../../../../sources/RobotecAI__rai/tests/tools/test_wait_for_seconds_tool.py)<br>[tests/tools/ros2/test_action_tools.py](../../../../sources/RobotecAI__rai/tests/tools/ros2/test_action_tools.py) |
| security | 1 | [SECURITY.md](../../../../sources/RobotecAI__rai/SECURITY.md) |
| ci | 8 | [.github/workflows/build-and-test.yml](../../../../sources/RobotecAI__rai/.github/workflows/build-and-test.yml)<br>[.github/workflows/licensechecker.yaml](../../../../sources/RobotecAI__rai/.github/workflows/licensechecker.yaml)<br>[.github/workflows/lint_pr.yml](../../../../sources/RobotecAI__rai/.github/workflows/lint_pr.yml)<br>[.github/workflows/mkdocs-build.yml](../../../../sources/RobotecAI__rai/.github/workflows/mkdocs-build.yml)<br>[.github/workflows/mkdocs-publish.yml](../../../../sources/RobotecAI__rai/.github/workflows/mkdocs-publish.yml)<br>[.github/workflows/pre-commit.yml](../../../../sources/RobotecAI__rai/.github/workflows/pre-commit.yml)<br>[.github/workflows/require-version-bump.yml](../../../../sources/RobotecAI__rai/.github/workflows/require-version-bump.yml)<br>[.github/workflows/uv-lock-check.yml](../../../../sources/RobotecAI__rai/.github/workflows/uv-lock-check.yml) |
| container | 2 | [docker/Dockerfile](../../../../sources/RobotecAI__rai/docker/Dockerfile)<br>[docker/Dockerfile.manipulation-demo](../../../../sources/RobotecAI__rai/docker/Dockerfile.manipulation-demo) |
| instruction | 1 | [AGENTS.md](../../../../sources/RobotecAI__rai/AGENTS.md) |
| docs | 90 | [mkdocs.yml](../../../../sources/RobotecAI__rai/mkdocs.yml)<br>[README.md](../../../../sources/RobotecAI__rai/README.md)<br>[src/rai_whoami/README.md](../../../../sources/RobotecAI__rai/src/rai_whoami/README.md)<br>[src/rai_whoami/docs/images/rai_whoami.png](../../../../sources/RobotecAI__rai/src/rai_whoami/docs/images/rai_whoami.png)<br>[src/rai_sim/README.md](../../../../sources/RobotecAI__rai/src/rai_sim/README.md)<br>[src/rai_semap/README.md](../../../../sources/RobotecAI__rai/src/rai_semap/README.md)<br>[src/rai_s2s/README.md](../../../../sources/RobotecAI__rai/src/rai_s2s/README.md)<br>[src/rai_finetune/README.md](../../../../sources/RobotecAI__rai/src/rai_finetune/README.md) |
| config | 10 | [pyproject.toml](../../../../sources/RobotecAI__rai/pyproject.toml)<br>[uv.lock](../../../../sources/RobotecAI__rai/uv.lock)<br>[src/rai_whoami/pyproject.toml](../../../../sources/RobotecAI__rai/src/rai_whoami/pyproject.toml)<br>[src/rai_sim/pyproject.toml](../../../../sources/RobotecAI__rai/src/rai_sim/pyproject.toml)<br>[src/rai_semap/pyproject.toml](../../../../sources/RobotecAI__rai/src/rai_semap/pyproject.toml)<br>[src/rai_s2s/pyproject.toml](../../../../sources/RobotecAI__rai/src/rai_s2s/pyproject.toml)<br>[src/rai_finetune/pyproject.toml](../../../../sources/RobotecAI__rai/src/rai_finetune/pyproject.toml)<br>[src/rai_extensions/rai_perception/pyproject.toml](../../../../sources/RobotecAI__rai/src/rai_extensions/rai_perception/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 221 | [tests/__init__.py](../../../../sources/RobotecAI__rai/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/RobotecAI__rai/tests/conftest.py)<br>[tests/types/test_ros2_convert.py](../../../../sources/RobotecAI__rai/tests/types/test_ros2_convert.py)<br>[tests/tools/test_timeout.py](../../../../sources/RobotecAI__rai/tests/tools/test_timeout.py)<br>[tests/tools/test_tool_input_args_compatibility.py](../../../../sources/RobotecAI__rai/tests/tools/test_tool_input_args_compatibility.py)<br>[tests/tools/test_tool_utils.py](../../../../sources/RobotecAI__rai/tests/tools/test_tool_utils.py) |
| CI workflows | 8 | [.github/workflows/build-and-test.yml](../../../../sources/RobotecAI__rai/.github/workflows/build-and-test.yml)<br>[.github/workflows/licensechecker.yaml](../../../../sources/RobotecAI__rai/.github/workflows/licensechecker.yaml)<br>[.github/workflows/lint_pr.yml](../../../../sources/RobotecAI__rai/.github/workflows/lint_pr.yml)<br>[.github/workflows/mkdocs-build.yml](../../../../sources/RobotecAI__rai/.github/workflows/mkdocs-build.yml)<br>[.github/workflows/mkdocs-publish.yml](../../../../sources/RobotecAI__rai/.github/workflows/mkdocs-publish.yml)<br>[.github/workflows/pre-commit.yml](../../../../sources/RobotecAI__rai/.github/workflows/pre-commit.yml) |
| Containers / deploy | 2 | [docker/Dockerfile](../../../../sources/RobotecAI__rai/docker/Dockerfile)<br>[docker/Dockerfile.manipulation-demo](../../../../sources/RobotecAI__rai/docker/Dockerfile.manipulation-demo) |
| Security / policy | 1 | [SECURITY.md](../../../../sources/RobotecAI__rai/SECURITY.md) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/RobotecAI__rai/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `AGENTS.md`, `tests/tools/test_timeout.py`, `tests/tools/test_tool_input_args_compatibility.py`.
2. Map agent/tool runtime through: `AGENTS.md`, `tests/tools/test_timeout.py`, `tests/tools/test_tool_input_args_compatibility.py`.
3. Inspect retrieval/memory/indexing through: `tests/rai_semap/test_memory.py`, `src/rai_whoami/rai_whoami/vector_db/__init__.py`, `src/rai_whoami/rai_whoami/vector_db/builder.py`.
4. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/types/test_ros2_convert.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 RAI is a vendor agnostic agentic framework for Physical AI robotics, utilizing ROS 2 tools to perform complex actions, d. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, LICENSE, next이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
