# openinterpreter/open-interpreter 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 276 files, 65 directories.

## 요약

- 조사 단위: `sources/openinterpreter__open-interpreter` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 276 files, 65 directories, depth score 101, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=interpreter/core/computer/skills/skills.py, interpreter/computer_use/tools/__init__.py, interpreter/computer_use/tools/base.py이고, 의존성 단서는 anthropic, fastapi, pydantic, typer, torch, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | openinterpreter/open-interpreter |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/openinterpreter__open-interpreter](../../../../sources/openinterpreter__open-interpreter) |
| 기존 보고서 | [reports/clone-structures/openinterpreter__open-interpreter.md](../../../clone-structures/openinterpreter__open-interpreter.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 276 / 65 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .devcontainer, .github, docs, examples, installers, interpreter, scripts, tests |
| 상위 확장자 | .py: 144, .mdx: 77, .md: 16, .ipynb: 9, .yml: 6, (none): 6, .yaml: 5, .png: 3, .json: 2, .ps1: 2, .sh: 2, .css: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | i | i |
| utility | pyproject.toml | interpreter | interpreter |
| utility | pyproject.toml | wtf | wtf |
| utility | pyproject.toml | interpreter-classic | interpreter-classic |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | anthropic |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch, transformers |
| webRuntime | fastapi |
| developerSurface | typer |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 8 | [interpreter/core/computer/skills/skills.py](../../../../sources/openinterpreter__open-interpreter/interpreter/core/computer/skills/skills.py)<br>[interpreter/computer_use/tools/__init__.py](../../../../sources/openinterpreter__open-interpreter/interpreter/computer_use/tools/__init__.py)<br>[interpreter/computer_use/tools/base.py](../../../../sources/openinterpreter__open-interpreter/interpreter/computer_use/tools/base.py)<br>[interpreter/computer_use/tools/bash.py](../../../../sources/openinterpreter__open-interpreter/interpreter/computer_use/tools/bash.py)<br>[interpreter/computer_use/tools/collection.py](../../../../sources/openinterpreter__open-interpreter/interpreter/computer_use/tools/collection.py)<br>[interpreter/computer_use/tools/computer.py](../../../../sources/openinterpreter__open-interpreter/interpreter/computer_use/tools/computer.py)<br>[interpreter/computer_use/tools/edit.py](../../../../sources/openinterpreter__open-interpreter/interpreter/computer_use/tools/edit.py)<br>[interpreter/computer_use/tools/run.py](../../../../sources/openinterpreter__open-interpreter/interpreter/computer_use/tools/run.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 1 | [docs/ROADMAP.md](../../../../sources/openinterpreter__open-interpreter/docs/ROADMAP.md) |
| eval | 5 | [tests/config.test.yaml](../../../../sources/openinterpreter__open-interpreter/tests/config.test.yaml)<br>[tests/test_interpreter.py](../../../../sources/openinterpreter__open-interpreter/tests/test_interpreter.py)<br>[tests/core/test_async_core.py](../../../../sources/openinterpreter__open-interpreter/tests/core/test_async_core.py)<br>[tests/core/computer/test_computer.py](../../../../sources/openinterpreter__open-interpreter/tests/core/computer/test_computer.py)<br>[tests/core/computer/files/test_files.py](../../../../sources/openinterpreter__open-interpreter/tests/core/computer/files/test_files.py) |
| security | 1 | [docs/SECURITY.md](../../../../sources/openinterpreter__open-interpreter/docs/SECURITY.md) |
| ci | 2 | [.github/workflows/potential-duplicates.yml](../../../../sources/openinterpreter__open-interpreter/.github/workflows/potential-duplicates.yml)<br>[.github/workflows/python-package.yml](../../../../sources/openinterpreter__open-interpreter/.github/workflows/python-package.yml) |
| container | 3 | [Dockerfile](../../../../sources/openinterpreter__open-interpreter/Dockerfile)<br>[examples/Dockerfile](../../../../sources/openinterpreter__open-interpreter/examples/Dockerfile)<br>[.devcontainer/DockerFile](../../../../sources/openinterpreter__open-interpreter/.devcontainer/DockerFile) |
| instruction | 0 | 명확하지 않음 |
| docs | 101 | [README.md](../../../../sources/openinterpreter__open-interpreter/README.md)<br>[interpreter/core/computer/docs/__init__.py](../../../../sources/openinterpreter__open-interpreter/interpreter/core/computer/docs/__init__.py)<br>[interpreter/core/computer/docs/docs.py](../../../../sources/openinterpreter__open-interpreter/interpreter/core/computer/docs/docs.py)<br>[examples/README.md](../../../../sources/openinterpreter__open-interpreter/examples/README.md)<br>[docs/CONTRIBUTING.md](../../../../sources/openinterpreter__open-interpreter/docs/CONTRIBUTING.md)<br>[docs/mint.json](../../../../sources/openinterpreter__open-interpreter/docs/mint.json)<br>[docs/NCU_MIGRATION_GUIDE.md](../../../../sources/openinterpreter__open-interpreter/docs/NCU_MIGRATION_GUIDE.md)<br>[docs/README_DE.md](../../../../sources/openinterpreter__open-interpreter/docs/README_DE.md) |
| config | 2 | [poetry.lock](../../../../sources/openinterpreter__open-interpreter/poetry.lock)<br>[pyproject.toml](../../../../sources/openinterpreter__open-interpreter/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 5 | [tests/config.test.yaml](../../../../sources/openinterpreter__open-interpreter/tests/config.test.yaml)<br>[tests/test_interpreter.py](../../../../sources/openinterpreter__open-interpreter/tests/test_interpreter.py)<br>[tests/core/test_async_core.py](../../../../sources/openinterpreter__open-interpreter/tests/core/test_async_core.py)<br>[tests/core/computer/test_computer.py](../../../../sources/openinterpreter__open-interpreter/tests/core/computer/test_computer.py)<br>[tests/core/computer/files/test_files.py](../../../../sources/openinterpreter__open-interpreter/tests/core/computer/files/test_files.py) |
| CI workflow | 2 | [.github/workflows/potential-duplicates.yml](../../../../sources/openinterpreter__open-interpreter/.github/workflows/potential-duplicates.yml)<br>[.github/workflows/python-package.yml](../../../../sources/openinterpreter__open-interpreter/.github/workflows/python-package.yml) |
| 컨테이너/배포 | 3 | [Dockerfile](../../../../sources/openinterpreter__open-interpreter/Dockerfile)<br>[examples/Dockerfile](../../../../sources/openinterpreter__open-interpreter/examples/Dockerfile)<br>[.devcontainer/DockerFile](../../../../sources/openinterpreter__open-interpreter/.devcontainer/DockerFile) |
| 보안/정책 | 1 | [docs/SECURITY.md](../../../../sources/openinterpreter__open-interpreter/docs/SECURITY.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `interpreter/core/computer/skills/skills.py`, `interpreter/computer_use/tools/__init__.py`, `interpreter/computer_use/tools/base.py`.
2. agent/tool runtime 매핑: `interpreter/core/computer/skills/skills.py`, `interpreter/computer_use/tools/__init__.py`, `interpreter/computer_use/tools/base.py`.
3. test/eval 파일로 동작 검증: `tests/config.test.yaml`, `tests/test_interpreter.py`, `tests/core/test_async_core.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 276 files, 65 directories.. 핵심 구조 신호는 pyproject.toml, Dockerfile, README.md, LICENSE, anthropic, fastapi이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
