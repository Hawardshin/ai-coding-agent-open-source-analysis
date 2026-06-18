# netboxlabs/netbox-mcp-server 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Model Context Protocol (MCP) server for read-only interaction with NetBox data in LLMs

## 요약

- 조사 단위: `sources/netboxlabs__netbox-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 47 files, 9 directories, depth score 99, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/netbox_mcp_server/__init__.py, src/netbox_mcp_server/__main__.py, src/netbox_mcp_server/config.py이고, 의존성 단서는 mcp, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | netboxlabs/netbox-mcp-server |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 187 |
| Forks | 84 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/netboxlabs__netbox-mcp-server](../../../../sources/netboxlabs__netbox-mcp-server) |
| 기존 보고서 | [reports/global-trending/repositories/netboxlabs__netbox-mcp-server.md](../../../global-trending/repositories/netboxlabs__netbox-mcp-server.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 47 / 9 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .claude, .github, src, tests |
| 상위 확장자 | .py: 18, .yaml: 8, .md: 7, .yml: 5, (none): 5, .example: 1, .json5: 1, .lock: 1, .toml: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 14 |
| src | source boundary | 9 |
| .github | ci surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | pyproject.toml | netbox-mcp-server | netbox-mcp-server |


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
| mcp | [src/netbox_mcp_server/__init__.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/__init__.py) | mcp signal |
| mcp | [src/netbox_mcp_server/__main__.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/__main__.py) | mcp signal |
| mcp | [src/netbox_mcp_server/config.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/config.py) | mcp signal |
| mcp | [src/netbox_mcp_server/netbox_client.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/netbox_client.py) | mcp signal |
| agentRuntime | [.claude/skills/netbox-mcp-testing/SKILL.md](../../../../sources/netboxlabs__netbox-mcp-server/.claude/skills/netbox-mcp-testing/SKILL.md) | agentRuntime signal |
| entrypoints | [src/netbox_mcp_server/server.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/server.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/netboxlabs__netbox-mcp-server/CLAUDE.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/netboxlabs__netbox-mcp-server/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/netboxlabs__netbox-mcp-server/uv.lock) | config signal |
| ci | [.github/workflows/container-rescan.yaml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/container-rescan.yaml) | ci support |
| ci | [.github/workflows/container-scan.yaml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/container-scan.yaml) | ci support |
| container | [Dockerfile](../../../../sources/netboxlabs__netbox-mcp-server/Dockerfile) | container support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [src/netbox_mcp_server/__main__.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/__main__.py)<br>[src/netbox_mcp_server/server.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/server.py) |
| agentRuntime | 1 | [.claude/skills/netbox-mcp-testing/SKILL.md](../../../../sources/netboxlabs__netbox-mcp-server/.claude/skills/netbox-mcp-testing/SKILL.md) |
| mcp | 7 | [src/netbox_mcp_server/__init__.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/__init__.py)<br>[src/netbox_mcp_server/__main__.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/__main__.py)<br>[src/netbox_mcp_server/config.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/config.py)<br>[src/netbox_mcp_server/netbox_client.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/netbox_client.py)<br>[src/netbox_mcp_server/netbox_types.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/netbox_types.py)<br>[src/netbox_mcp_server/server.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/server.py)<br>[.claude/skills/netbox-mcp-testing/SKILL.md](../../../../sources/netboxlabs__netbox-mcp-server/.claude/skills/netbox-mcp-testing/SKILL.md) |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 13 | [tests/__init__.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/__init__.py)<br>[tests/test_brief.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_brief.py)<br>[tests/test_client_fallback.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_client_fallback.py)<br>[tests/test_config.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_config.py)<br>[tests/test_fallback_integration.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_fallback_integration.py)<br>[tests/test_filter_validation.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_filter_validation.py)<br>[tests/test_http_auth.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_http_auth.py)<br>[tests/test_ordering.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_ordering.py) |
| security | 2 | [SECURITY.md](../../../../sources/netboxlabs__netbox-mcp-server/SECURITY.md)<br>[tests/test_http_auth.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_http_auth.py) |
| ci | 6 | [.github/workflows/container-rescan.yaml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/container-rescan.yaml)<br>[.github/workflows/container-scan.yaml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/container-scan.yaml)<br>[.github/workflows/docker-publish.yml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/docker-publish.yml)<br>[.github/workflows/release-finalize.yml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/release-finalize.yml)<br>[.github/workflows/release.yml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/test.yml) |
| container | 1 | [Dockerfile](../../../../sources/netboxlabs__netbox-mcp-server/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/netboxlabs__netbox-mcp-server/CLAUDE.md) |
| docs | 2 | [README-client.md](../../../../sources/netboxlabs__netbox-mcp-server/README-client.md)<br>[README.md](../../../../sources/netboxlabs__netbox-mcp-server/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/netboxlabs__netbox-mcp-server/pyproject.toml)<br>[uv.lock](../../../../sources/netboxlabs__netbox-mcp-server/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 13 | [tests/__init__.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/__init__.py)<br>[tests/test_brief.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_brief.py)<br>[tests/test_client_fallback.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_client_fallback.py)<br>[tests/test_config.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_config.py)<br>[tests/test_fallback_integration.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_fallback_integration.py)<br>[tests/test_filter_validation.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_filter_validation.py) |
| CI workflow | 6 | [.github/workflows/container-rescan.yaml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/container-rescan.yaml)<br>[.github/workflows/container-scan.yaml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/container-scan.yaml)<br>[.github/workflows/docker-publish.yml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/docker-publish.yml)<br>[.github/workflows/release-finalize.yml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/release-finalize.yml)<br>[.github/workflows/release.yml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/test.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/netboxlabs__netbox-mcp-server/Dockerfile) |
| 보안/정책 | 2 | [SECURITY.md](../../../../sources/netboxlabs__netbox-mcp-server/SECURITY.md)<br>[tests/test_http_auth.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_http_auth.py) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/netboxlabs__netbox-mcp-server/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/netbox_mcp_server/__init__.py`, `src/netbox_mcp_server/__main__.py`, `src/netbox_mcp_server/config.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/netbox_mcp_server/__main__.py`, `src/netbox_mcp_server/server.py`.
3. agent/tool runtime 매핑: `.claude/skills/netbox-mcp-testing/SKILL.md`.
4. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/test_brief.py`, `tests/test_client_fallback.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Model Context Protocol MCP server for read only interaction with NetBox data in LLMs. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, README.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
