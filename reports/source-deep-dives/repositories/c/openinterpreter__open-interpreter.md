# openinterpreter/open-interpreter Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 276 files, 65 directories.

## 요약

- 조사 단위: `sources/openinterpreter__open-interpreter` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 276 files, 65 directories, depth score 113, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=interpreter/core/computer/skills/skills.py, interpreter/computer_use/tools/__init__.py, interpreter/computer_use/tools/base.py이고, 의존성 단서는 anthropic, fastapi, pydantic, typer, torch, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | openinterpreter/open-interpreter |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/openinterpreter__open-interpreter](../../../../sources/openinterpreter__open-interpreter) |
| Existing report | [reports/clone-structures/openinterpreter__open-interpreter.md](../../../clone-structures/openinterpreter__open-interpreter.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 276 / 65 |
| Max observed depth | 6 |
| Top directories | .devcontainer, .github, docs, examples, installers, interpreter, scripts, tests |
| Top extensions | .py: 144, .mdx: 77, .md: 16, .ipynb: 9, .yml: 6, (none): 6, .yaml: 5, .png: 3, .json: 2, .ps1: 2, .sh: 2, .css: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 39 |
| tests | validation surface | 6 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/Dockerfile | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| installers | top-level component | 1 |
| interpreter | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | i | i |
| utility | pyproject.toml | interpreter | interpreter |
| utility | pyproject.toml | wtf | wtf |
| utility | pyproject.toml | interpreter-classic | interpreter-classic |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | anthropic |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch, transformers |
| webRuntime | fastapi |
| developerSurface | typer |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [interpreter/core/computer/skills/skills.py](../../../../sources/openinterpreter__open-interpreter/interpreter/core/computer/skills/skills.py) | agentRuntime signal |
| agentRuntime | [interpreter/computer_use/tools/__init__.py](../../../../sources/openinterpreter__open-interpreter/interpreter/computer_use/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [interpreter/computer_use/tools/base.py](../../../../sources/openinterpreter__open-interpreter/interpreter/computer_use/tools/base.py) | agentRuntime signal |
| agentRuntime | [interpreter/computer_use/tools/bash.py](../../../../sources/openinterpreter__open-interpreter/interpreter/computer_use/tools/bash.py) | agentRuntime signal |
| config | [poetry.lock](../../../../sources/openinterpreter__open-interpreter/poetry.lock) | config signal |
| config | [pyproject.toml](../../../../sources/openinterpreter__open-interpreter/pyproject.toml) | config signal |
| ci | [.github/workflows/potential-duplicates.yml](../../../../sources/openinterpreter__open-interpreter/.github/workflows/potential-duplicates.yml) | ci support |
| ci | [.github/workflows/python-package.yml](../../../../sources/openinterpreter__open-interpreter/.github/workflows/python-package.yml) | ci support |
| container | [Dockerfile](../../../../sources/openinterpreter__open-interpreter/Dockerfile) | container support |
| container | [examples/Dockerfile](../../../../sources/openinterpreter__open-interpreter/examples/Dockerfile) | container support |
| eval | [tests/config.test.yaml](../../../../sources/openinterpreter__open-interpreter/tests/config.test.yaml) | eval support |
| eval | [tests/test_interpreter.py](../../../../sources/openinterpreter__open-interpreter/tests/test_interpreter.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 8 | [interpreter/core/computer/skills/skills.py](../../../../sources/openinterpreter__open-interpreter/interpreter/core/computer/skills/skills.py)<br>[interpreter/computer_use/tools/__init__.py](../../../../sources/openinterpreter__open-interpreter/interpreter/computer_use/tools/__init__.py)<br>[interpreter/computer_use/tools/base.py](../../../../sources/openinterpreter__open-interpreter/interpreter/computer_use/tools/base.py)<br>[interpreter/computer_use/tools/bash.py](../../../../sources/openinterpreter__open-interpreter/interpreter/computer_use/tools/bash.py)<br>[interpreter/computer_use/tools/collection.py](../../../../sources/openinterpreter__open-interpreter/interpreter/computer_use/tools/collection.py)<br>[interpreter/computer_use/tools/computer.py](../../../../sources/openinterpreter__open-interpreter/interpreter/computer_use/tools/computer.py)<br>[interpreter/computer_use/tools/edit.py](../../../../sources/openinterpreter__open-interpreter/interpreter/computer_use/tools/edit.py)<br>[interpreter/computer_use/tools/run.py](../../../../sources/openinterpreter__open-interpreter/interpreter/computer_use/tools/run.py) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 1 | [docs/ROADMAP.md](../../../../sources/openinterpreter__open-interpreter/docs/ROADMAP.md) |
| eval | 5 | [tests/config.test.yaml](../../../../sources/openinterpreter__open-interpreter/tests/config.test.yaml)<br>[tests/test_interpreter.py](../../../../sources/openinterpreter__open-interpreter/tests/test_interpreter.py)<br>[tests/core/test_async_core.py](../../../../sources/openinterpreter__open-interpreter/tests/core/test_async_core.py)<br>[tests/core/computer/test_computer.py](../../../../sources/openinterpreter__open-interpreter/tests/core/computer/test_computer.py)<br>[tests/core/computer/files/test_files.py](../../../../sources/openinterpreter__open-interpreter/tests/core/computer/files/test_files.py) |
| security | 1 | [docs/SECURITY.md](../../../../sources/openinterpreter__open-interpreter/docs/SECURITY.md) |
| ci | 2 | [.github/workflows/potential-duplicates.yml](../../../../sources/openinterpreter__open-interpreter/.github/workflows/potential-duplicates.yml)<br>[.github/workflows/python-package.yml](../../../../sources/openinterpreter__open-interpreter/.github/workflows/python-package.yml) |
| container | 3 | [Dockerfile](../../../../sources/openinterpreter__open-interpreter/Dockerfile)<br>[examples/Dockerfile](../../../../sources/openinterpreter__open-interpreter/examples/Dockerfile)<br>[.devcontainer/DockerFile](../../../../sources/openinterpreter__open-interpreter/.devcontainer/DockerFile) |
| instruction | 0 | not obvious |
| docs | 101 | [README.md](../../../../sources/openinterpreter__open-interpreter/README.md)<br>[interpreter/core/computer/docs/__init__.py](../../../../sources/openinterpreter__open-interpreter/interpreter/core/computer/docs/__init__.py)<br>[interpreter/core/computer/docs/docs.py](../../../../sources/openinterpreter__open-interpreter/interpreter/core/computer/docs/docs.py)<br>[examples/README.md](../../../../sources/openinterpreter__open-interpreter/examples/README.md)<br>[docs/CONTRIBUTING.md](../../../../sources/openinterpreter__open-interpreter/docs/CONTRIBUTING.md)<br>[docs/mint.json](../../../../sources/openinterpreter__open-interpreter/docs/mint.json)<br>[docs/NCU_MIGRATION_GUIDE.md](../../../../sources/openinterpreter__open-interpreter/docs/NCU_MIGRATION_GUIDE.md)<br>[docs/README_DE.md](../../../../sources/openinterpreter__open-interpreter/docs/README_DE.md) |
| config | 2 | [poetry.lock](../../../../sources/openinterpreter__open-interpreter/poetry.lock)<br>[pyproject.toml](../../../../sources/openinterpreter__open-interpreter/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 5 | [tests/config.test.yaml](../../../../sources/openinterpreter__open-interpreter/tests/config.test.yaml)<br>[tests/test_interpreter.py](../../../../sources/openinterpreter__open-interpreter/tests/test_interpreter.py)<br>[tests/core/test_async_core.py](../../../../sources/openinterpreter__open-interpreter/tests/core/test_async_core.py)<br>[tests/core/computer/test_computer.py](../../../../sources/openinterpreter__open-interpreter/tests/core/computer/test_computer.py)<br>[tests/core/computer/files/test_files.py](../../../../sources/openinterpreter__open-interpreter/tests/core/computer/files/test_files.py) |
| CI workflows | 2 | [.github/workflows/potential-duplicates.yml](../../../../sources/openinterpreter__open-interpreter/.github/workflows/potential-duplicates.yml)<br>[.github/workflows/python-package.yml](../../../../sources/openinterpreter__open-interpreter/.github/workflows/python-package.yml) |
| Containers / deploy | 3 | [Dockerfile](../../../../sources/openinterpreter__open-interpreter/Dockerfile)<br>[examples/Dockerfile](../../../../sources/openinterpreter__open-interpreter/examples/Dockerfile)<br>[.devcontainer/DockerFile](../../../../sources/openinterpreter__open-interpreter/.devcontainer/DockerFile) |
| Security / policy | 1 | [docs/SECURITY.md](../../../../sources/openinterpreter__open-interpreter/docs/SECURITY.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `interpreter/core/computer/skills/skills.py`, `interpreter/computer_use/tools/__init__.py`, `interpreter/computer_use/tools/base.py`.
2. Map agent/tool runtime through: `interpreter/core/computer/skills/skills.py`, `interpreter/computer_use/tools/__init__.py`, `interpreter/computer_use/tools/base.py`.
3. Verify behavior through test/eval files: `tests/config.test.yaml`, `tests/test_interpreter.py`, `tests/core/test_async_core.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 276 files, 65 directories.. 핵심 구조 신호는 pyproject.toml, Dockerfile, README.md, LICENSE, anthropic, fastapi이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
