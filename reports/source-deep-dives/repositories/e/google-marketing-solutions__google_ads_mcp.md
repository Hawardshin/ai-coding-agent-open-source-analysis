# google-marketing-solutions/google_ads_mcp 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

The Google Ads MCP Server is an implementation of the Model Context Protocol (MCP) that enables Large Language Models (LLMs), such as Gemini, to interact directly with the Google Ads API.

## 요약

- 조사 단위: `sources/google-marketing-solutions__google_ads_mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 48 files, 10 directories, depth score 81, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=ads_mcp/__init__.py, ads_mcp/coordinator.py, ads_mcp/server.py이고, 의존성 단서는 gemini, mcp, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | google-marketing-solutions/google_ads_mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 227 |
| Forks | 71 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/google-marketing-solutions__google_ads_mcp](../../../../sources/google-marketing-solutions__google_ads_mcp) |
| 기존 보고서 | [reports/global-trending/repositories/google-marketing-solutions__google_ads_mcp.md](../../../global-trending/repositories/google-marketing-solutions__google_ads_mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 48 / 10 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | ads_mcp, tests |
| 상위 확장자 | .py: 32, (none): 8, .md: 5, .lock: 1, .toml: 1, .yaml: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 23 |
| ads_mcp | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | pyproject.toml | run-mcp-server | run-mcp-server |
| serve-dev | pyproject.toml | run-mcp-server-stdio | run-mcp-server-stdio |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | gemini |
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
| mcp | [ads_mcp/__init__.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/__init__.py) | mcp signal |
| mcp | [ads_mcp/coordinator.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/coordinator.py) | mcp signal |
| mcp | [ads_mcp/server.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/server.py) | mcp signal |
| mcp | [ads_mcp/stdio.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/stdio.py) | mcp signal |
| agentRuntime | [tests/tools/__init__.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [tests/tools/test_api.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/test_api.py) | agentRuntime signal |
| agentRuntime | [tests/tools/test_docs.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/test_docs.py) | agentRuntime signal |
| agentRuntime | [tests/tools/mutations/test_ad_group.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/mutations/test_ad_group.py) | agentRuntime signal |
| instruction | [GEMINI.md](../../../../sources/google-marketing-solutions__google_ads_mcp/GEMINI.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/google-marketing-solutions__google_ads_mcp/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/google-marketing-solutions__google_ads_mcp/uv.lock) | config signal |
| eval | [tests/__init__.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/__init__.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [ads_mcp/server.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/server.py) |
| agentRuntime | 28 | [tests/tools/__init__.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/__init__.py)<br>[tests/tools/test_api.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/test_api.py)<br>[tests/tools/test_docs.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/test_docs.py)<br>[tests/tools/mutations/test_ad_group.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/mutations/test_ad_group.py)<br>[tests/tools/mutations/test_ad.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/mutations/test_ad.py)<br>[tests/tools/mutations/test_budget.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/mutations/test_budget.py)<br>[tests/tools/mutations/test_campaign.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/mutations/test_campaign.py)<br>[tests/tools/mutations/test_common.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/mutations/test_common.py) |
| mcp | 25 | [ads_mcp/__init__.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/__init__.py)<br>[ads_mcp/coordinator.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/coordinator.py)<br>[ads_mcp/server.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/server.py)<br>[ads_mcp/stdio.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/stdio.py)<br>[ads_mcp/utils.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/utils.py)<br>[ads_mcp/tools/__init__.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/tools/__init__.py)<br>[ads_mcp/tools/_ads_api.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/tools/_ads_api.py)<br>[ads_mcp/tools/_utils.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/tools/_utils.py) |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 13 | [tests/__init__.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/__init__.py)<br>[tests/test_server.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/test_server.py)<br>[tests/test_stdio.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/test_stdio.py)<br>[tests/tools/__init__.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/__init__.py)<br>[tests/tools/test_api.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/test_api.py)<br>[tests/tools/test_docs.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/test_docs.py)<br>[tests/tools/mutations/test_ad_group.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/mutations/test_ad_group.py)<br>[tests/tools/mutations/test_ad.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/mutations/test_ad.py) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [GEMINI.md](../../../../sources/google-marketing-solutions__google_ads_mcp/GEMINI.md) |
| docs | 1 | [README.md](../../../../sources/google-marketing-solutions__google_ads_mcp/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/google-marketing-solutions__google_ads_mcp/pyproject.toml)<br>[uv.lock](../../../../sources/google-marketing-solutions__google_ads_mcp/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 13 | [tests/__init__.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/__init__.py)<br>[tests/test_server.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/test_server.py)<br>[tests/test_stdio.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/test_stdio.py)<br>[tests/tools/__init__.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/__init__.py)<br>[tests/tools/test_api.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/test_api.py)<br>[tests/tools/test_docs.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/test_docs.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [GEMINI.md](../../../../sources/google-marketing-solutions__google_ads_mcp/GEMINI.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `ads_mcp/__init__.py`, `ads_mcp/coordinator.py`, `ads_mcp/server.py`.
2. entrypoint를 따라 실행 흐름 확인: `ads_mcp/server.py`.
3. agent/tool runtime 매핑: `tests/tools/__init__.py`, `tests/tools/test_api.py`, `tests/tools/test_docs.py`.
4. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/test_server.py`, `tests/test_stdio.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The Google Ads MCP Server is an implementation of the Model Context Protocol MCP that enables Large Language Models LLMs. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, mcp, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
