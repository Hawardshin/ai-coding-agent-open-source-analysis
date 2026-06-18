# ai-frendly-datahub/KoreanNLPMCPRadar 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Korean NLP and language MCP radar

## 요약

- 조사 단위: `sources/ai-frendly-datahub__KoreanNLPMCPRadar` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 343 files, 57 directories, depth score 107, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/unit/test_mcp_category_config.py, tests/unit/test_mcp_server_source_collector.py, tests/unit/test_mcp_tools.py이고, 의존성 단서는 mcp, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | ai-frendly-datahub/KoreanNLPMCPRadar |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | HTML |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/ai-frendly-datahub__KoreanNLPMCPRadar](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar) |
| 기존 보고서 | [reports/korea-trending/repositories/ai-frendly-datahub__KoreanNLPMCPRadar.md](../../../korea-trending/repositories/ai-frendly-datahub__KoreanNLPMCPRadar.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 343 / 57 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, config, data, fixtures, mcp_server, radar, radar_core, reports, scripts, tests |
| 상위 확장자 | .json: 98, .jsonl: 90, .py: 56, .html: 39, .duckdb: 36, .yml: 5, (none): 4, .yaml: 3, .js: 2, .md: 2, .txt: 2, .cfg: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 27 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| data | top-level component | 1 |
| fixtures | top-level component | 1 |
| mcp_server | source boundary | 1 |
| radar | top-level component | 1 |
| radar_core | top-level component | 1 |
| reports | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


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
| mcp | [tests/unit/test_mcp_category_config.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_mcp_category_config.py) | mcp signal |
| mcp | [tests/unit/test_mcp_server_source_collector.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_mcp_server_source_collector.py) | mcp signal |
| mcp | [tests/unit/test_mcp_tools.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_mcp_tools.py) | mcp signal |
| mcp | [reports/korean_nlp_mcp_20260413_quality.json](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/reports/korean_nlp_mcp_20260413_quality.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/AGENTS.md) | agentRuntime signal |
| agentRuntime | [mcp_server/tools.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/mcp_server/tools.py) | agentRuntime signal |
| entrypoints | [main.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/main.py) | entrypoints signal |
| entrypoints | [mcp_server/server.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/mcp_server/server.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/pyproject.toml) | config signal |
| config | [requirements-dev.txt](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/requirements-dev.txt) | config signal |
| config | [requirements.txt](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/requirements.txt) | config signal |
| ci | [.github/workflows/deploy-pages.yml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/.github/workflows/deploy-pages.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [main.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/main.py)<br>[mcp_server/server.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/mcp_server/server.py) |
| agentRuntime | 2 | [AGENTS.md](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/AGENTS.md)<br>[mcp_server/tools.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/mcp_server/tools.py) |
| mcp | 212 | [tests/unit/test_mcp_category_config.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_mcp_category_config.py)<br>[tests/unit/test_mcp_server_source_collector.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_mcp_server_source_collector.py)<br>[tests/unit/test_mcp_tools.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_mcp_tools.py)<br>[reports/korean_nlp_mcp_20260413_quality.json](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/reports/korean_nlp_mcp_20260413_quality.json)<br>[reports/korean_nlp_mcp_20260413_summary.json](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/reports/korean_nlp_mcp_20260413_summary.json)<br>[reports/korean_nlp_mcp_20260414_quality.json](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/reports/korean_nlp_mcp_20260414_quality.json)<br>[reports/korean_nlp_mcp_20260422_quality.json](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/reports/korean_nlp_mcp_20260422_quality.json)<br>[reports/korean_nlp_mcp_20260423_quality.json](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/reports/korean_nlp_mcp_20260423_quality.json) |
| retrieval | 4 | [tests/unit/test_search_index.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_search_index.py)<br>[reports/index.html](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/reports/index.html)<br>[radar/search_index.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/radar/search_index.py)<br>[radar/templates/index.html](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/radar/templates/index.html) |
| spec | 2 | [requirements-dev.txt](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/requirements-dev.txt)<br>[requirements.txt](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/requirements.txt) |
| eval | 77 | [tests/__init__.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/conftest.py)<br>[tests/unit/__init__.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/__init__.py)<br>[tests/unit/test_analyzer.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_analyzer.py)<br>[tests/unit/test_check_quality_script.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_check_quality_script.py)<br>[tests/unit/test_collector_parallel.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_collector_parallel.py)<br>[tests/unit/test_collector_retry.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_collector_retry.py)<br>[tests/unit/test_date_storage.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_date_storage.py) |
| security | 0 | 명확하지 않음 |
| ci | 5 | [.github/workflows/deploy-pages.yml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/.github/workflows/deploy-pages.yml)<br>[.github/workflows/health-check.yml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/.github/workflows/health-check.yml)<br>[.github/workflows/pr-checks.yml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/.github/workflows/pr-checks.yml)<br>[.github/workflows/radar-crawler.yml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/.github/workflows/radar-crawler.yml)<br>[.github/workflows/release.yml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/AGENTS.md) |
| docs | 1 | [README.md](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/README.md) |
| config | 3 | [pyproject.toml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/pyproject.toml)<br>[requirements-dev.txt](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/requirements-dev.txt)<br>[requirements.txt](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 77 | [tests/__init__.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/conftest.py)<br>[tests/unit/__init__.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/__init__.py)<br>[tests/unit/test_analyzer.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_analyzer.py)<br>[tests/unit/test_check_quality_script.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_check_quality_script.py)<br>[tests/unit/test_collector_parallel.py](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/tests/unit/test_collector_parallel.py) |
| CI workflow | 5 | [.github/workflows/deploy-pages.yml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/.github/workflows/deploy-pages.yml)<br>[.github/workflows/health-check.yml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/.github/workflows/health-check.yml)<br>[.github/workflows/pr-checks.yml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/.github/workflows/pr-checks.yml)<br>[.github/workflows/radar-crawler.yml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/.github/workflows/radar-crawler.yml)<br>[.github/workflows/release.yml](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/ai-frendly-datahub__KoreanNLPMCPRadar/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/unit/test_mcp_category_config.py`, `tests/unit/test_mcp_server_source_collector.py`, `tests/unit/test_mcp_tools.py`.
2. entrypoint를 따라 실행 흐름 확인: `main.py`, `mcp_server/server.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `mcp_server/tools.py`.
4. retrieval/memory/indexing 확인: `tests/unit/test_search_index.py`, `reports/index.html`, `radar/search_index.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/unit/__init__.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Korean NLP and language MCP radar. 핵심 구조 신호는 HTML, pyproject.toml, requirements.txt, README.md, AGENTS.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
