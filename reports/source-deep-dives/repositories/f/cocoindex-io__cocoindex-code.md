# cocoindex-io/cocoindex-code 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

A super light-weight embedded code search engine CLI (AST based) that just works - saves 70% token and improves speed for coding agent 🌟 Star if you like it!

## 요약

- 조사 단위: `sources/cocoindex-io__cocoindex-code` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 65 files, 16 directories, depth score 103, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=skills/ccc/SKILL.md, skills/ccc/references/management.md, skills/ccc/references/settings.md이고, 의존성 단서는 mcp, pydantic, typer, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | cocoindex-io/cocoindex-code |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 2100 |
| Forks | 166 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/cocoindex-io__cocoindex-code](../../../../sources/cocoindex-io__cocoindex-code) |
| 기존 보고서 | [reports/global-trending/repositories/cocoindex-io__cocoindex-code.md](../../../global-trending/repositories/cocoindex-io__cocoindex-code.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 65 / 16 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .claude-plugin, .github, docker, scripts, skills, src, tests |
| 상위 확장자 | .py: 40, .md: 10, (none): 4, .yml: 3, .json: 2, .lock: 1, .sh: 1, .toml: 1, .ts: 1, .yaml: 1, .zip: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 27 |
| src | source boundary | 3 |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | cocoindex-code | cocoindex-code |
| utility | pyproject.toml | ccc | ccc |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | transformers |
| webRuntime | 없음 |
| developerSurface | typer |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [skills/ccc/SKILL.md](../../../../sources/cocoindex-io__cocoindex-code/skills/ccc/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/ccc/references/management.md](../../../../sources/cocoindex-io__cocoindex-code/skills/ccc/references/management.md) | agentRuntime signal |
| agentRuntime | [skills/ccc/references/settings.md](../../../../sources/cocoindex-io__cocoindex-code/skills/ccc/references/settings.md) | agentRuntime signal |
| entrypoints | [src/cocoindex_code/__main__.py](../../../../sources/cocoindex-io__cocoindex-code/src/cocoindex_code/__main__.py) | entrypoints signal |
| entrypoints | [src/cocoindex_code/server.py](../../../../sources/cocoindex-io__cocoindex-code/src/cocoindex_code/server.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/cocoindex-io__cocoindex-code/CLAUDE.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/cocoindex-io__cocoindex-code/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/cocoindex-io__cocoindex-code/uv.lock) | config signal |
| ci | [.github/workflows/pre-commit.yml](../../../../sources/cocoindex-io__cocoindex-code/.github/workflows/pre-commit.yml) | ci support |
| ci | [.github/workflows/release.yml](../../../../sources/cocoindex-io__cocoindex-code/.github/workflows/release.yml) | ci support |
| container | [docker/docker-compose.yml](../../../../sources/cocoindex-io__cocoindex-code/docker/docker-compose.yml) | container support |
| container | [docker/Dockerfile](../../../../sources/cocoindex-io__cocoindex-code/docker/Dockerfile) | container support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [src/cocoindex_code/__main__.py](../../../../sources/cocoindex-io__cocoindex-code/src/cocoindex_code/__main__.py)<br>[src/cocoindex_code/server.py](../../../../sources/cocoindex-io__cocoindex-code/src/cocoindex_code/server.py) |
| agentRuntime | 3 | [skills/ccc/SKILL.md](../../../../sources/cocoindex-io__cocoindex-code/skills/ccc/SKILL.md)<br>[skills/ccc/references/management.md](../../../../sources/cocoindex-io__cocoindex-code/skills/ccc/references/management.md)<br>[skills/ccc/references/settings.md](../../../../sources/cocoindex-io__cocoindex-code/skills/ccc/references/settings.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [tests/test_embed_params_forwarding.py](../../../../sources/cocoindex-io__cocoindex-code/tests/test_embed_params_forwarding.py) |
| spec | 0 | 명확하지 않음 |
| eval | 23 | [tests/conftest.py](../../../../sources/cocoindex-io__cocoindex-code/tests/conftest.py)<br>[tests/example_toml_chunker.py](../../../../sources/cocoindex-io__cocoindex-code/tests/example_toml_chunker.py)<br>[tests/test_backward_compat.py](../../../../sources/cocoindex-io__cocoindex-code/tests/test_backward_compat.py)<br>[tests/test_chunker_registry.py](../../../../sources/cocoindex-io__cocoindex-code/tests/test_chunker_registry.py)<br>[tests/test_cli_helpers.py](../../../../sources/cocoindex-io__cocoindex-code/tests/test_cli_helpers.py)<br>[tests/test_client.py](../../../../sources/cocoindex-io__cocoindex-code/tests/test_client.py)<br>[tests/test_daemon.py](../../../../sources/cocoindex-io__cocoindex-code/tests/test_daemon.py)<br>[tests/test_e2e_daemon.py](../../../../sources/cocoindex-io__cocoindex-code/tests/test_e2e_daemon.py) |
| security | 2 | [SECURITY.md](../../../../sources/cocoindex-io__cocoindex-code/SECURITY.md)<br>[tests/e2e_docker_fixtures/sample_project/src/auth.py](../../../../sources/cocoindex-io__cocoindex-code/tests/e2e_docker_fixtures/sample_project/src/auth.py) |
| ci | 2 | [.github/workflows/pre-commit.yml](../../../../sources/cocoindex-io__cocoindex-code/.github/workflows/pre-commit.yml)<br>[.github/workflows/release.yml](../../../../sources/cocoindex-io__cocoindex-code/.github/workflows/release.yml) |
| container | 2 | [docker/docker-compose.yml](../../../../sources/cocoindex-io__cocoindex-code/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/cocoindex-io__cocoindex-code/docker/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/cocoindex-io__cocoindex-code/CLAUDE.md) |
| docs | 2 | [README.md](../../../../sources/cocoindex-io__cocoindex-code/README.md)<br>[tests/e2e_docker_fixtures/sample_project/README.md](../../../../sources/cocoindex-io__cocoindex-code/tests/e2e_docker_fixtures/sample_project/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/cocoindex-io__cocoindex-code/pyproject.toml)<br>[uv.lock](../../../../sources/cocoindex-io__cocoindex-code/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 23 | [tests/conftest.py](../../../../sources/cocoindex-io__cocoindex-code/tests/conftest.py)<br>[tests/example_toml_chunker.py](../../../../sources/cocoindex-io__cocoindex-code/tests/example_toml_chunker.py)<br>[tests/test_backward_compat.py](../../../../sources/cocoindex-io__cocoindex-code/tests/test_backward_compat.py)<br>[tests/test_chunker_registry.py](../../../../sources/cocoindex-io__cocoindex-code/tests/test_chunker_registry.py)<br>[tests/test_cli_helpers.py](../../../../sources/cocoindex-io__cocoindex-code/tests/test_cli_helpers.py)<br>[tests/test_client.py](../../../../sources/cocoindex-io__cocoindex-code/tests/test_client.py) |
| CI workflow | 2 | [.github/workflows/pre-commit.yml](../../../../sources/cocoindex-io__cocoindex-code/.github/workflows/pre-commit.yml)<br>[.github/workflows/release.yml](../../../../sources/cocoindex-io__cocoindex-code/.github/workflows/release.yml) |
| 컨테이너/배포 | 2 | [docker/docker-compose.yml](../../../../sources/cocoindex-io__cocoindex-code/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/cocoindex-io__cocoindex-code/docker/Dockerfile) |
| 보안/정책 | 2 | [SECURITY.md](../../../../sources/cocoindex-io__cocoindex-code/SECURITY.md)<br>[tests/e2e_docker_fixtures/sample_project/src/auth.py](../../../../sources/cocoindex-io__cocoindex-code/tests/e2e_docker_fixtures/sample_project/src/auth.py) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/cocoindex-io__cocoindex-code/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `skills/ccc/SKILL.md`, `skills/ccc/references/management.md`, `skills/ccc/references/settings.md`.
2. entrypoint를 따라 실행 흐름 확인: `src/cocoindex_code/__main__.py`, `src/cocoindex_code/server.py`.
3. agent/tool runtime 매핑: `skills/ccc/SKILL.md`, `skills/ccc/references/management.md`, `skills/ccc/references/settings.md`.
4. retrieval/memory/indexing 확인: `tests/test_embed_params_forwarding.py`.
5. test/eval 파일로 동작 검증: `tests/conftest.py`, `tests/example_toml_chunker.py`, `tests/test_backward_compat.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A super light weight embedded code search engine CLI AST based that just works saves 70% token and improves speed for co. 핵심 구조 신호는 Python, pyproject.toml, README.md, CLAUDE.md, LICENSE, mcp이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
