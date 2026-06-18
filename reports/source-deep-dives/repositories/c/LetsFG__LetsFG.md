# LetsFG/LetsFG 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Agent-native flight search & booking. Saved $116 across 5 routes vs Google Flights (verified). 400+ airlines in 5 seconds. Join the community - Star and spread the word

## 요약

- 조사 단위: `sources/LetsFG__LetsFG` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 125 files, 28 directories, depth score 117, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, mcp-config.json, skills/flight-search/references/mcp-setup.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | LetsFG/LetsFG |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1175 |
| Forks | 60 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/LetsFG__LetsFG](../../../../sources/LetsFG__LetsFG) |
| 기존 보고서 | [reports/global-trending/repositories/LetsFG__LetsFG.md](../../../global-trending/repositories/LetsFG__LetsFG.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 125 / 28 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, agent-skills-contribution, assets, docs, models, sdk, skills |
| 상위 확장자 | .py: 39, .md: 35, .json: 15, .ts: 8, (none): 7, .png: 5, .yml: 5, .css: 2, .js: 2, .yaml: 2, .gif: 1, .mp4: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 31 |
| .github | ci surface | 1 |
| agent-skills-contribution | top-level component | 1 |
| assets | top-level component | 1 |
| models | top-level component | 1 |
| sdk | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
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
| mcp | [.mcp.json](../../../../sources/LetsFG__LetsFG/.mcp.json) | mcp signal |
| mcp | [mcp-config.json](../../../../sources/LetsFG__LetsFG/mcp-config.json) | mcp signal |
| mcp | [skills/flight-search/references/mcp-setup.md](../../../../sources/LetsFG__LetsFG/skills/flight-search/references/mcp-setup.md) | mcp signal |
| mcp | [sdk/mcp/package-lock.json](../../../../sources/LetsFG__LetsFG/sdk/mcp/package-lock.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/LetsFG__LetsFG/AGENTS.md) | agentRuntime signal |
| agentRuntime | [SKILL.md](../../../../sources/LetsFG__LetsFG/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/flight-search/SKILL.md](../../../../sources/LetsFG__LetsFG/skills/flight-search/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/flight-search/references/api-reference.md](../../../../sources/LetsFG__LetsFG/skills/flight-search/references/api-reference.md) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/LetsFG__LetsFG/server.json) | entrypoints signal |
| entrypoints | [sdk/python/letsfg/__main__.py](../../../../sources/LetsFG__LetsFG/sdk/python/letsfg/__main__.py) | entrypoints signal |
| entrypoints | [sdk/mcp/src/index.test.ts](../../../../sources/LetsFG__LetsFG/sdk/mcp/src/index.test.ts) | entrypoints signal |
| entrypoints | [sdk/mcp/src/index.ts](../../../../sources/LetsFG__LetsFG/sdk/mcp/src/index.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [server.json](../../../../sources/LetsFG__LetsFG/server.json)<br>[sdk/python/letsfg/__main__.py](../../../../sources/LetsFG__LetsFG/sdk/python/letsfg/__main__.py)<br>[sdk/mcp/src/index.test.ts](../../../../sources/LetsFG__LetsFG/sdk/mcp/src/index.test.ts)<br>[sdk/mcp/src/index.ts](../../../../sources/LetsFG__LetsFG/sdk/mcp/src/index.ts)<br>[sdk/js/src/cli.ts](../../../../sources/LetsFG__LetsFG/sdk/js/src/cli.ts)<br>[sdk/js/src/index.test.ts](../../../../sources/LetsFG__LetsFG/sdk/js/src/index.test.ts)<br>[sdk/js/src/index.ts](../../../../sources/LetsFG__LetsFG/sdk/js/src/index.ts) |
| agentRuntime | 9 | [AGENTS.md](../../../../sources/LetsFG__LetsFG/AGENTS.md)<br>[SKILL.md](../../../../sources/LetsFG__LetsFG/SKILL.md)<br>[skills/flight-search/SKILL.md](../../../../sources/LetsFG__LetsFG/skills/flight-search/SKILL.md)<br>[skills/flight-search/references/api-reference.md](../../../../sources/LetsFG__LetsFG/skills/flight-search/references/api-reference.md)<br>[skills/flight-search/references/mcp-setup.md](../../../../sources/LetsFG__LetsFG/skills/flight-search/references/mcp-setup.md)<br>[docs/agent-guide.md](../../../../sources/LetsFG__LetsFG/docs/agent-guide.md)<br>`agent-skills-contribution/packages/skills-catalog/skills/(tooling)/letsfg/SKILL.md`<br>`agent-skills-contribution/packages/skills-catalog/skills/(tooling)/letsfg/references/api-reference.md` |
| mcp | 10 | [.mcp.json](../../../../sources/LetsFG__LetsFG/.mcp.json)<br>[mcp-config.json](../../../../sources/LetsFG__LetsFG/mcp-config.json)<br>[skills/flight-search/references/mcp-setup.md](../../../../sources/LetsFG__LetsFG/skills/flight-search/references/mcp-setup.md)<br>[sdk/mcp/package-lock.json](../../../../sources/LetsFG__LetsFG/sdk/mcp/package-lock.json)<br>[sdk/mcp/package.json](../../../../sources/LetsFG__LetsFG/sdk/mcp/package.json)<br>[sdk/mcp/README.md](../../../../sources/LetsFG__LetsFG/sdk/mcp/README.md)<br>[sdk/mcp/tsconfig.json](../../../../sources/LetsFG__LetsFG/sdk/mcp/tsconfig.json)<br>[sdk/mcp/src/index.test.ts](../../../../sources/LetsFG__LetsFG/sdk/mcp/src/index.test.ts) |
| retrieval | 5 | [sdk/mcp/src/index.test.ts](../../../../sources/LetsFG__LetsFG/sdk/mcp/src/index.test.ts)<br>[sdk/mcp/src/index.ts](../../../../sources/LetsFG__LetsFG/sdk/mcp/src/index.ts)<br>[sdk/js/src/index.test.ts](../../../../sources/LetsFG__LetsFG/sdk/js/src/index.test.ts)<br>[sdk/js/src/index.ts](../../../../sources/LetsFG__LetsFG/sdk/js/src/index.ts)<br>[docs/index.md](../../../../sources/LetsFG__LetsFG/docs/index.md) |
| spec | 1 | [docs/architecture-guide.md](../../../../sources/LetsFG__LetsFG/docs/architecture-guide.md) |
| eval | 26 | [sdk/python/tests/__init__.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/__init__.py)<br>[sdk/python/tests/test_ancillary_connector_parsing.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_ancillary_connector_parsing.py)<br>[sdk/python/tests/test_booking_holdings_booking_urls.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_booking_holdings_booking_urls.py)<br>[sdk/python/tests/test_checkout_engine_configs.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_checkout_engine_configs.py)<br>[sdk/python/tests/test_connector_parsing.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_connector_parsing.py)<br>[sdk/python/tests/test_country_filter_completeness.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_country_filter_completeness.py)<br>[sdk/python/tests/test_currency_rates.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_currency_rates.py)<br>[sdk/python/tests/test_emirates_connector.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_emirates_connector.py) |
| security | 3 | [SECURITY.md](../../../../sources/LetsFG__LetsFG/SECURITY.md)<br>[sdk/python/letsfg/connectors/auth.py](../../../../sources/LetsFG__LetsFG/sdk/python/letsfg/connectors/auth.py)<br>[docs/api-sandbox.md](../../../../sources/LetsFG__LetsFG/docs/api-sandbox.md) |
| ci | 3 | [.github/workflows/docs.yml](../../../../sources/LetsFG__LetsFG/.github/workflows/docs.yml)<br>[.github/workflows/sdk-tests.yml](../../../../sources/LetsFG__LetsFG/.github/workflows/sdk-tests.yml)<br>[.github/workflows/test.yml](../../../../sources/LetsFG__LetsFG/.github/workflows/test.yml) |
| container | 3 | [docker-compose.yml](../../../../sources/LetsFG__LetsFG/docker-compose.yml)<br>[Dockerfile](../../../../sources/LetsFG__LetsFG/Dockerfile)<br>[Dockerfile.python](../../../../sources/LetsFG__LetsFG/Dockerfile.python) |
| instruction | 2 | [AGENTS.md](../../../../sources/LetsFG__LetsFG/AGENTS.md)<br>[CLAUDE.md](../../../../sources/LetsFG__LetsFG/CLAUDE.md) |
| docs | 31 | [mkdocs.yml](../../../../sources/LetsFG__LetsFG/mkdocs.yml)<br>[README.md](../../../../sources/LetsFG__LetsFG/README.md)<br>[sdk/python/README.md](../../../../sources/LetsFG__LetsFG/sdk/python/README.md)<br>[sdk/mcp/README.md](../../../../sources/LetsFG__LetsFG/sdk/mcp/README.md)<br>[sdk/js/README.md](../../../../sources/LetsFG__LetsFG/sdk/js/README.md)<br>[docs/agent-guide.md](../../../../sources/LetsFG__LetsFG/docs/agent-guide.md)<br>[docs/api-errors.md](../../../../sources/LetsFG__LetsFG/docs/api-errors.md)<br>[docs/api-guide.md](../../../../sources/LetsFG__LetsFG/docs/api-guide.md) |
| config | 5 | [sdk/python/pyproject.toml](../../../../sources/LetsFG__LetsFG/sdk/python/pyproject.toml)<br>[sdk/mcp/package.json](../../../../sources/LetsFG__LetsFG/sdk/mcp/package.json)<br>[sdk/mcp/tsconfig.json](../../../../sources/LetsFG__LetsFG/sdk/mcp/tsconfig.json)<br>[sdk/js/package.json](../../../../sources/LetsFG__LetsFG/sdk/js/package.json)<br>[sdk/js/tsconfig.json](../../../../sources/LetsFG__LetsFG/sdk/js/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 26 | [sdk/python/tests/__init__.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/__init__.py)<br>[sdk/python/tests/test_ancillary_connector_parsing.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_ancillary_connector_parsing.py)<br>[sdk/python/tests/test_booking_holdings_booking_urls.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_booking_holdings_booking_urls.py)<br>[sdk/python/tests/test_checkout_engine_configs.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_checkout_engine_configs.py)<br>[sdk/python/tests/test_connector_parsing.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_connector_parsing.py)<br>[sdk/python/tests/test_country_filter_completeness.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_country_filter_completeness.py) |
| CI workflow | 3 | [.github/workflows/docs.yml](../../../../sources/LetsFG__LetsFG/.github/workflows/docs.yml)<br>[.github/workflows/sdk-tests.yml](../../../../sources/LetsFG__LetsFG/.github/workflows/sdk-tests.yml)<br>[.github/workflows/test.yml](../../../../sources/LetsFG__LetsFG/.github/workflows/test.yml) |
| 컨테이너/배포 | 3 | [docker-compose.yml](../../../../sources/LetsFG__LetsFG/docker-compose.yml)<br>[Dockerfile](../../../../sources/LetsFG__LetsFG/Dockerfile)<br>[Dockerfile.python](../../../../sources/LetsFG__LetsFG/Dockerfile.python) |
| 보안/정책 | 3 | [SECURITY.md](../../../../sources/LetsFG__LetsFG/SECURITY.md)<br>[sdk/python/letsfg/connectors/auth.py](../../../../sources/LetsFG__LetsFG/sdk/python/letsfg/connectors/auth.py)<br>[docs/api-sandbox.md](../../../../sources/LetsFG__LetsFG/docs/api-sandbox.md) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/LetsFG__LetsFG/AGENTS.md)<br>[CLAUDE.md](../../../../sources/LetsFG__LetsFG/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `.mcp.json`, `mcp-config.json`, `skills/flight-search/references/mcp-setup.md`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `sdk/python/letsfg/__main__.py`, `sdk/mcp/src/index.test.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `SKILL.md`, `skills/flight-search/SKILL.md`.
4. retrieval/memory/indexing 확인: `sdk/mcp/src/index.test.ts`, `sdk/mcp/src/index.ts`, `sdk/js/src/index.test.ts`.
5. test/eval 파일로 동작 검증: `sdk/python/tests/__init__.py`, `sdk/python/tests/test_ancillary_connector_parsing.py`, `sdk/python/tests/test_booking_holdings_booking_urls.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Agent native flight search & booking. Saved $116 across 5 routes vs Google Flights verified . 400+ airlines in 5 seconds. 핵심 구조 신호는 Python, Dockerfile, docker-compose.yml, README.md, AGENTS.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
