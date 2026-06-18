# mordang7/ContextKeep 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Infinite Long-Term Memory for AI Agents (MCP Server)

## 요약

- 조사 단위: `sources/mordang7__ContextKeep` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 43 files, 8 directories, depth score 86, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp_config.antigravity.example.json, mcp_config.docker.example.json, mcp_config.example.json이고, 의존성 단서는 mcp, 검증/운영 단서는 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | mordang7/ContextKeep |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 156 |
| Forks | 36 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/mordang7__ContextKeep](../../../../sources/mordang7__ContextKeep) |
| 기존 보고서 | [reports/global-trending/repositories/mordang7__ContextKeep.md](../../../global-trending/repositories/mordang7__ContextKeep.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 43 / 8 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | assets, core, docs, scripts, static, templates |
| 상위 확장자 | .py: 14, .md: 8, .png: 5, .json: 4, (none): 3, .service: 2, .css: 1, .html: 1, .js: 1, .sh: 1, .toml: 1, .txt: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 7 |
| assets | top-level component | 1 |
| core | top-level component | 1 |
| scripts | top-level component | 1 |
| static | top-level component | 1 |
| templates | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | pyproject.toml | contextkeep-server | contextkeep-server |
| utility | pyproject.toml | contextkeep-webui | contextkeep-webui |
| utility | pyproject.toml | contextkeep-migrate | contextkeep-migrate |


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
| mcp | [mcp_config.antigravity.example.json](../../../../sources/mordang7__ContextKeep/mcp_config.antigravity.example.json) | mcp signal |
| mcp | [mcp_config.docker.example.json](../../../../sources/mordang7__ContextKeep/mcp_config.docker.example.json) | mcp signal |
| mcp | [mcp_config.example.json](../../../../sources/mordang7__ContextKeep/mcp_config.example.json) | mcp signal |
| mcp | [mcp_config.sse.example.json](../../../../sources/mordang7__ContextKeep/mcp_config.sse.example.json) | mcp signal |
| agentRuntime | [core/memory_manager.py](../../../../sources/mordang7__ContextKeep/core/memory_manager.py) | agentRuntime signal |
| entrypoints | [server.py](../../../../sources/mordang7__ContextKeep/server.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/mordang7__ContextKeep/pyproject.toml) | config signal |
| config | [requirements.txt](../../../../sources/mordang7__ContextKeep/requirements.txt) | config signal |
| container | [docker-compose.yml](../../../../sources/mordang7__ContextKeep/docker-compose.yml) | container support |
| container | [Dockerfile](../../../../sources/mordang7__ContextKeep/Dockerfile) | container support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [server.py](../../../../sources/mordang7__ContextKeep/server.py) |
| agentRuntime | 1 | [core/memory_manager.py](../../../../sources/mordang7__ContextKeep/core/memory_manager.py) |
| mcp | 4 | [mcp_config.antigravity.example.json](../../../../sources/mordang7__ContextKeep/mcp_config.antigravity.example.json)<br>[mcp_config.docker.example.json](../../../../sources/mordang7__ContextKeep/mcp_config.docker.example.json)<br>[mcp_config.example.json](../../../../sources/mordang7__ContextKeep/mcp_config.example.json)<br>[mcp_config.sse.example.json](../../../../sources/mordang7__ContextKeep/mcp_config.sse.example.json) |
| retrieval | 2 | [templates/index.html](../../../../sources/mordang7__ContextKeep/templates/index.html)<br>[core/memory_manager.py](../../../../sources/mordang7__ContextKeep/core/memory_manager.py) |
| spec | 1 | [requirements.txt](../../../../sources/mordang7__ContextKeep/requirements.txt) |
| eval | 0 | 명확하지 않음 |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 2 | [docker-compose.yml](../../../../sources/mordang7__ContextKeep/docker-compose.yml)<br>[Dockerfile](../../../../sources/mordang7__ContextKeep/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 7 | [README.md](../../../../sources/mordang7__ContextKeep/README.md)<br>[docs/CLIENT_CONFIGURATION.md](../../../../sources/mordang7__ContextKeep/docs/CLIENT_CONFIGURATION.md)<br>[docs/DIRECTIVE_UPDATE.md](../../../../sources/mordang7__ContextKeep/docs/DIRECTIVE_UPDATE.md)<br>[docs/DOCKER_V2_1.md](../../../../sources/mordang7__ContextKeep/docs/DOCKER_V2_1.md)<br>[docs/MIGRATION_GUIDE.md](../../../../sources/mordang7__ContextKeep/docs/MIGRATION_GUIDE.md)<br>[docs/SAFE_UPGRADE.md](../../../../sources/mordang7__ContextKeep/docs/SAFE_UPGRADE.md)<br>[docs/UPGRADING_FROM_V1.md](../../../../sources/mordang7__ContextKeep/docs/UPGRADING_FROM_V1.md) |
| config | 2 | [pyproject.toml](../../../../sources/mordang7__ContextKeep/pyproject.toml)<br>[requirements.txt](../../../../sources/mordang7__ContextKeep/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 2 | [docker-compose.yml](../../../../sources/mordang7__ContextKeep/docker-compose.yml)<br>[Dockerfile](../../../../sources/mordang7__ContextKeep/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp_config.antigravity.example.json`, `mcp_config.docker.example.json`, `mcp_config.example.json`.
2. entrypoint를 따라 실행 흐름 확인: `server.py`.
3. agent/tool runtime 매핑: `core/memory_manager.py`.
4. retrieval/memory/indexing 확인: `templates/index.html`, `core/memory_manager.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Infinite Long Term Memory for AI Agents MCP Server. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, docker-compose.yml, README.md이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
