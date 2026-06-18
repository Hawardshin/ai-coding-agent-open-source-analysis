# redis/mcp-redis 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

The official Redis MCP Server is a natural language interface designed for agentic applications to manage and search data in Redis efficiently

## 요약

- 조사 단위: `sources/redis__mcp-redis` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 60 files, 8 directories, depth score 96, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=tests/tools/__init__.py, tests/tools/test_hash.py, tests/tools/test_json.py이고, 의존성 단서는 mcp, click, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | redis/mcp-redis |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 535 |
| Forks | 99 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/redis__mcp-redis](../../../../sources/redis__mcp-redis) |
| 기존 보고서 | [reports/global-trending/repositories/redis__mcp-redis.md](../../../global-trending/repositories/redis__mcp-redis.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 60 / 8 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, examples, src, tests |
| 상위 확장자 | .py: 44, .yml: 4, (none): 4, .json: 2, .md: 2, .toml: 2, .example: 1, .lock: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 35 |
| src | source boundary | 16 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | pyproject.toml | redis-mcp-server | redis-mcp-server |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | click |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [tests/tools/__init__.py](../../../../sources/redis__mcp-redis/tests/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [tests/tools/test_hash.py](../../../../sources/redis__mcp-redis/tests/tools/test_hash.py) | agentRuntime signal |
| agentRuntime | [tests/tools/test_json.py](../../../../sources/redis__mcp-redis/tests/tools/test_json.py) | agentRuntime signal |
| agentRuntime | [tests/tools/test_list.py](../../../../sources/redis__mcp-redis/tests/tools/test_list.py) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/redis__mcp-redis/server.json) | entrypoints signal |
| entrypoints | [src/main.py](../../../../sources/redis__mcp-redis/src/main.py) | entrypoints signal |
| entrypoints | [src/common/server.py](../../../../sources/redis__mcp-redis/src/common/server.py) | entrypoints signal |
| instruction | [GEMINI.md](../../../../sources/redis__mcp-redis/GEMINI.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/redis__mcp-redis/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/redis__mcp-redis/uv.lock) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/redis__mcp-redis/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/release.yml](../../../../sources/redis__mcp-redis/.github/workflows/release.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [server.json](../../../../sources/redis__mcp-redis/server.json)<br>[src/main.py](../../../../sources/redis__mcp-redis/src/main.py)<br>[src/common/server.py](../../../../sources/redis__mcp-redis/src/common/server.py) |
| agentRuntime | 24 | [tests/tools/__init__.py](../../../../sources/redis__mcp-redis/tests/tools/__init__.py)<br>[tests/tools/test_hash.py](../../../../sources/redis__mcp-redis/tests/tools/test_hash.py)<br>[tests/tools/test_json.py](../../../../sources/redis__mcp-redis/tests/tools/test_json.py)<br>[tests/tools/test_list.py](../../../../sources/redis__mcp-redis/tests/tools/test_list.py)<br>[tests/tools/test_misc.py](../../../../sources/redis__mcp-redis/tests/tools/test_misc.py)<br>[tests/tools/test_pub_sub.py](../../../../sources/redis__mcp-redis/tests/tools/test_pub_sub.py)<br>[tests/tools/test_redis_query_engine.py](../../../../sources/redis__mcp-redis/tests/tools/test_redis_query_engine.py)<br>[tests/tools/test_server_management.py](../../../../sources/redis__mcp-redis/tests/tools/test_server_management.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 21 | [tests/__init__.py](../../../../sources/redis__mcp-redis/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/redis__mcp-redis/tests/conftest.py)<br>[tests/test_config.py](../../../../sources/redis__mcp-redis/tests/test_config.py)<br>[tests/test_connection.py](../../../../sources/redis__mcp-redis/tests/test_connection.py)<br>[tests/test_entraid_auth.py](../../../../sources/redis__mcp-redis/tests/test_entraid_auth.py)<br>[tests/test_integration.py](../../../../sources/redis__mcp-redis/tests/test_integration.py)<br>[tests/test_logging_utils.py](../../../../sources/redis__mcp-redis/tests/test_logging_utils.py)<br>[tests/test_main.py](../../../../sources/redis__mcp-redis/tests/test_main.py) |
| security | 2 | [tests/test_entraid_auth.py](../../../../sources/redis__mcp-redis/tests/test_entraid_auth.py)<br>[src/common/entraid_auth.py](../../../../sources/redis__mcp-redis/src/common/entraid_auth.py) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/redis__mcp-redis/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/redis__mcp-redis/.github/workflows/release.yml)<br>[.github/workflows/stale-issues.yml](../../../../sources/redis__mcp-redis/.github/workflows/stale-issues.yml) |
| container | 1 | [Dockerfile](../../../../sources/redis__mcp-redis/Dockerfile) |
| instruction | 1 | [GEMINI.md](../../../../sources/redis__mcp-redis/GEMINI.md) |
| docs | 1 | [README.md](../../../../sources/redis__mcp-redis/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/redis__mcp-redis/pyproject.toml)<br>[uv.lock](../../../../sources/redis__mcp-redis/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 21 | [tests/__init__.py](../../../../sources/redis__mcp-redis/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/redis__mcp-redis/tests/conftest.py)<br>[tests/test_config.py](../../../../sources/redis__mcp-redis/tests/test_config.py)<br>[tests/test_connection.py](../../../../sources/redis__mcp-redis/tests/test_connection.py)<br>[tests/test_entraid_auth.py](../../../../sources/redis__mcp-redis/tests/test_entraid_auth.py)<br>[tests/test_integration.py](../../../../sources/redis__mcp-redis/tests/test_integration.py) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/redis__mcp-redis/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/redis__mcp-redis/.github/workflows/release.yml)<br>[.github/workflows/stale-issues.yml](../../../../sources/redis__mcp-redis/.github/workflows/stale-issues.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/redis__mcp-redis/Dockerfile) |
| 보안/정책 | 2 | [tests/test_entraid_auth.py](../../../../sources/redis__mcp-redis/tests/test_entraid_auth.py)<br>[src/common/entraid_auth.py](../../../../sources/redis__mcp-redis/src/common/entraid_auth.py) |
| 에이전트 지시문 | 1 | [GEMINI.md](../../../../sources/redis__mcp-redis/GEMINI.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/tools/__init__.py`, `tests/tools/test_hash.py`, `tests/tools/test_json.py`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `src/main.py`, `src/common/server.py`.
3. agent/tool runtime 매핑: `tests/tools/__init__.py`, `tests/tools/test_hash.py`, `tests/tools/test_json.py`.
4. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/test_config.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The official Redis MCP Server is a natural language interface designed for agentic applications to manage and search dat. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, README.md, LICENSE, mcp이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
