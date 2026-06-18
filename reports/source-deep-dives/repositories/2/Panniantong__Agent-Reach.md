# Panniantong/Agent-Reach 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.

## 요약

- 조사 단위: `sources/Panniantong__Agent-Reach` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 89 files, 16 directories, depth score 83, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 mcp=agent_reach/integrations/mcp_server.py이고, 의존성 단서는 openai, claude, mcp, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Panniantong/Agent-Reach |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 33152 |
| Forks | 2668 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Panniantong__Agent-Reach](../../../../sources/Panniantong__Agent-Reach) |
| 기존 보고서 | [reports/global-trending/repositories/Panniantong__Agent-Reach.md](../../../global-trending/repositories/Panniantong__Agent-Reach.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 89 / 16 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, agent_reach, config, docs, scripts, tests |
| 상위 확장자 | .py: 45, .md: 26, .png: 3, .sh: 3, .svg: 3, .txt: 2, (none): 2, .example: 1, .jpg: 1, .json: 1, .toml: 1, .yml: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 16 |
| tests | validation surface | 16 |
| .github | ci surface | 1 |
| agent_reach | top-level component | 1 |
| config | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | agent-reach | agent-reach |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, claude |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [agent_reach/integrations/mcp_server.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/integrations/mcp_server.py) | mcp signal |
| agentRuntime | [agent_reach/__init__.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/__init__.py) | agentRuntime signal |
| agentRuntime | [agent_reach/cli.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/cli.py) | agentRuntime signal |
| agentRuntime | [agent_reach/config.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/config.py) | agentRuntime signal |
| agentRuntime | [agent_reach/cookie_extract.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/cookie_extract.py) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/Panniantong__Agent-Reach/CLAUDE.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/Panniantong__Agent-Reach/pyproject.toml) | config signal |
| ci | [.github/workflows/pytest.yml](../../../../sources/Panniantong__Agent-Reach/.github/workflows/pytest.yml) | ci support |
| eval | [test.sh](../../../../sources/Panniantong__Agent-Reach/test.sh) | eval support |
| eval | [tests/test_channel_contracts.py](../../../../sources/Panniantong__Agent-Reach/tests/test_channel_contracts.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 44 | [agent_reach/__init__.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/__init__.py)<br>[agent_reach/cli.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/cli.py)<br>[agent_reach/config.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/config.py)<br>[agent_reach/cookie_extract.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/cookie_extract.py)<br>[agent_reach/core.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/core.py)<br>[agent_reach/doctor.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/doctor.py)<br>[agent_reach/probe.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/probe.py)<br>[agent_reach/transcribe.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/transcribe.py) |
| mcp | 1 | [agent_reach/integrations/mcp_server.py](../../../../sources/Panniantong__Agent-Reach/agent_reach/integrations/mcp_server.py) |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 16 | [test.sh](../../../../sources/Panniantong__Agent-Reach/test.sh)<br>[tests/test_channel_contracts.py](../../../../sources/Panniantong__Agent-Reach/tests/test_channel_contracts.py)<br>[tests/test_channels.py](../../../../sources/Panniantong__Agent-Reach/tests/test_channels.py)<br>[tests/test_cli.py](../../../../sources/Panniantong__Agent-Reach/tests/test_cli.py)<br>[tests/test_config.py](../../../../sources/Panniantong__Agent-Reach/tests/test_config.py)<br>[tests/test_cookie_extract_perms.py](../../../../sources/Panniantong__Agent-Reach/tests/test_cookie_extract_perms.py)<br>[tests/test_core.py](../../../../sources/Panniantong__Agent-Reach/tests/test_core.py)<br>[tests/test_doctor.py](../../../../sources/Panniantong__Agent-Reach/tests/test_doctor.py) |
| security | 1 | [SECURITY.md](../../../../sources/Panniantong__Agent-Reach/SECURITY.md) |
| ci | 1 | [.github/workflows/pytest.yml](../../../../sources/Panniantong__Agent-Reach/.github/workflows/pytest.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/Panniantong__Agent-Reach/CLAUDE.md) |
| docs | 16 | [README.md](../../../../sources/Panniantong__Agent-Reach/README.md)<br>[docs/cookie-export.md](../../../../sources/Panniantong__Agent-Reach/docs/cookie-export.md)<br>[docs/dependency-locking.md](../../../../sources/Panniantong__Agent-Reach/docs/dependency-locking.md)<br>[docs/install.md](../../../../sources/Panniantong__Agent-Reach/docs/install.md)<br>[docs/README_en.md](../../../../sources/Panniantong__Agent-Reach/docs/README_en.md)<br>[docs/README_ja.md](../../../../sources/Panniantong__Agent-Reach/docs/README_ja.md)<br>[docs/README_ko.md](../../../../sources/Panniantong__Agent-Reach/docs/README_ko.md)<br>[docs/troubleshooting.md](../../../../sources/Panniantong__Agent-Reach/docs/troubleshooting.md) |
| config | 1 | [pyproject.toml](../../../../sources/Panniantong__Agent-Reach/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 16 | [test.sh](../../../../sources/Panniantong__Agent-Reach/test.sh)<br>[tests/test_channel_contracts.py](../../../../sources/Panniantong__Agent-Reach/tests/test_channel_contracts.py)<br>[tests/test_channels.py](../../../../sources/Panniantong__Agent-Reach/tests/test_channels.py)<br>[tests/test_cli.py](../../../../sources/Panniantong__Agent-Reach/tests/test_cli.py)<br>[tests/test_config.py](../../../../sources/Panniantong__Agent-Reach/tests/test_config.py)<br>[tests/test_cookie_extract_perms.py](../../../../sources/Panniantong__Agent-Reach/tests/test_cookie_extract_perms.py) |
| CI workflow | 1 | [.github/workflows/pytest.yml](../../../../sources/Panniantong__Agent-Reach/.github/workflows/pytest.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/Panniantong__Agent-Reach/SECURITY.md) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/Panniantong__Agent-Reach/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `agent_reach/integrations/mcp_server.py`, `agent_reach/__init__.py`, `agent_reach/cli.py`.
2. agent/tool runtime 매핑: `agent_reach/__init__.py`, `agent_reach/cli.py`, `agent_reach/config.py`.
3. test/eval 파일로 동작 검증: `test.sh`, `tests/test_channel_contracts.py`, `tests/test_channels.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongSh. 핵심 구조 신호는 Python, pyproject.toml, README.md, CLAUDE.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
