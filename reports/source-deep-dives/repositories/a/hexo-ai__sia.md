# hexo-ai/sia 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

SIA is a Self Improving AI framework to autonomously improve the performance of any AI system (Model / Agent) on a benchmark task.

## 요약

- 조사 단위: `sources/hexo-ai__sia` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 128 files, 35 directories, depth score 96, key references 9개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 eval=EVALUATION_GUIDE.md, tests/__init__.py, tests/conftest.py이고, 의존성 단서는 claude, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 품질/평가 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | hexo-ai/sia |
| 주제 | 평가/관측/품질 / 평가/관측/품질 |
| Region | global |
| Language | Python |
| Stars | 1765 |
| Forks | 204 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/hexo-ai__sia](../../../../sources/hexo-ai__sia) |
| 기존 보고서 | [reports/global-trending/repositories/hexo-ai__sia.md](../../../global-trending/repositories/hexo-ai__sia.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 128 / 35 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, docs, sia, tests |
| 상위 확장자 | .py: 59, .json: 21, .md: 18, .csv: 9, .png: 7, .txt: 6, .yml: 3, (none): 3, .html: 1, .toml: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 33 |
| docs | documentation surface | 13 |
| .github | ci surface | 1 |
| sia | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | sia | sia |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | claude |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| eval | [EVALUATION_GUIDE.md](../../../../sources/hexo-ai__sia/EVALUATION_GUIDE.md) | eval signal |
| eval | [tests/__init__.py](../../../../sources/hexo-ai__sia/tests/__init__.py) | eval signal |
| eval | [tests/conftest.py](../../../../sources/hexo-ai__sia/tests/conftest.py) | eval signal |
| eval | [tests/golden_master.py](../../../../sources/hexo-ai__sia/tests/golden_master.py) | eval signal |
| entrypoints | [sia/__main__.py](../../../../sources/hexo-ai__sia/sia/__main__.py) | entrypoints signal |
| entrypoints | [sia/web/server.py](../../../../sources/hexo-ai__sia/sia/web/server.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/hexo-ai__sia/pyproject.toml) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/hexo-ai__sia/.github/workflows/ci.yml) | ci signal |
| ci | [.github/workflows/publish.yml](../../../../sources/hexo-ai__sia/.github/workflows/publish.yml) | ci signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [sia/__main__.py](../../../../sources/hexo-ai__sia/sia/__main__.py)<br>[sia/web/server.py](../../../../sources/hexo-ai__sia/sia/web/server.py) |
| agentRuntime | 8 | [tests/golden/context.md](../../../../sources/hexo-ai__sia/tests/golden/context.md)<br>[sia/agent_reference.py](../../../../sources/hexo-ai__sia/sia/agent_reference.py)<br>[sia/context_manager.py](../../../../sources/hexo-ai__sia/sia/context_manager.py)<br>[sia/agent_impls/__init__.py](../../../../sources/hexo-ai__sia/sia/agent_impls/__init__.py)<br>[sia/agent_impls/base.py](../../../../sources/hexo-ai__sia/sia/agent_impls/base.py)<br>[sia/agent_impls/claude.py](../../../../sources/hexo-ai__sia/sia/agent_impls/claude.py)<br>[sia/agent_impls/openhands.py](../../../../sources/hexo-ai__sia/sia/agent_impls/openhands.py)<br>[sia/agent_impls/pydantic_ai.py](../../../../sources/hexo-ai__sia/sia/agent_impls/pydantic_ai.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [sia/web/static/index.html](../../../../sources/hexo-ai__sia/sia/web/static/index.html) |
| spec | 1 | [docs/architecture.md](../../../../sources/hexo-ai__sia/docs/architecture.md) |
| eval | 36 | [EVALUATION_GUIDE.md](../../../../sources/hexo-ai__sia/EVALUATION_GUIDE.md)<br>[tests/__init__.py](../../../../sources/hexo-ai__sia/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/hexo-ai__sia/tests/conftest.py)<br>[tests/golden_master.py](../../../../sources/hexo-ai__sia/tests/golden_master.py)<br>[tests/test_agent_impls.py](../../../../sources/hexo-ai__sia/tests/test_agent_impls.py)<br>[tests/test_agent_reference.py](../../../../sources/hexo-ai__sia/tests/test_agent_reference.py)<br>[tests/test_cli_interface.py](../../../../sources/hexo-ai__sia/tests/test_cli_interface.py)<br>[tests/test_config_injection.py](../../../../sources/hexo-ai__sia/tests/test_config_injection.py) |
| security | 2 | [SECURITY.md](../../../../sources/hexo-ai__sia/SECURITY.md)<br>[tests/test_sandbox.py](../../../../sources/hexo-ai__sia/tests/test_sandbox.py) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/hexo-ai__sia/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/hexo-ai__sia/.github/workflows/publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 12 | [README.md](../../../../sources/hexo-ai__sia/README.md)<br>[docs/architecture.md](../../../../sources/hexo-ai__sia/docs/architecture.md)<br>[docs/configuration.md](../../../../sources/hexo-ai__sia/docs/configuration.md)<br>[docs/denoising.png](../../../../sources/hexo-ai__sia/docs/denoising.png)<br>[docs/flow.png](../../../../sources/hexo-ai__sia/docs/flow.png)<br>[docs/gpqa.png](../../../../sources/hexo-ai__sia/docs/gpqa.png)<br>[docs/lawbench.png](../../../../sources/hexo-ai__sia/docs/lawbench.png)<br>[docs/ml_agent.png](../../../../sources/hexo-ai__sia/docs/ml_agent.png) |
| config | 1 | [pyproject.toml](../../../../sources/hexo-ai__sia/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 36 | [EVALUATION_GUIDE.md](../../../../sources/hexo-ai__sia/EVALUATION_GUIDE.md)<br>[tests/__init__.py](../../../../sources/hexo-ai__sia/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/hexo-ai__sia/tests/conftest.py)<br>[tests/golden_master.py](../../../../sources/hexo-ai__sia/tests/golden_master.py)<br>[tests/test_agent_impls.py](../../../../sources/hexo-ai__sia/tests/test_agent_impls.py)<br>[tests/test_agent_reference.py](../../../../sources/hexo-ai__sia/tests/test_agent_reference.py) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/hexo-ai__sia/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/hexo-ai__sia/.github/workflows/publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [SECURITY.md](../../../../sources/hexo-ai__sia/SECURITY.md)<br>[tests/test_sandbox.py](../../../../sources/hexo-ai__sia/tests/test_sandbox.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `EVALUATION_GUIDE.md`, `tests/__init__.py`, `tests/conftest.py`.
2. entrypoint를 따라 실행 흐름 확인: `sia/__main__.py`, `sia/web/server.py`.
3. agent/tool runtime 매핑: `tests/golden/context.md`, `sia/agent_reference.py`, `sia/context_manager.py`.
4. retrieval/memory/indexing 확인: `sia/web/static/index.html`.
5. test/eval 파일로 동작 검증: `EVALUATION_GUIDE.md`, `tests/__init__.py`, `tests/conftest.py`.

## 기존 레포 인사이트

평가/관측/품질 관점에서 SIA is a Self Improving AI framework to autonomously improve the performance of any AI system Model / Agent on a benchma. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, fastapi, pydantic이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 평가/관측/품질 레포입니다. 활용 관점은 품질/평가 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
