# Samsung/CredSweeper 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

CredSweeper is a tool to detect credentials in any directories or files. CredSweeper could help users to detect unwanted exposure of credentials (such as token, passwords, api keys etc.) in advance. By scanning lines, filtering, and using AI model as option, CredSweeper reports lines with possible credentials, where the line is, and expected type o

## 요약

- 조사 단위: `sources/Samsung__CredSweeper` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 775 files, 45 directories, depth score 107, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

보안/거버넌스/안전 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 security=SECURITY.md, tests/samples/auth_n.template, tests/samples/auth.hs이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Samsung/CredSweeper |
| 주제 | 보안/거버넌스/안전 / 보안/거버넌스/안전 |
| Region | korea |
| Language | Python |
| Stars | 204 |
| Forks | 49 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__CredSweeper](../../../../sources/Samsung__CredSweeper) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__CredSweeper.md](../../../korea-trending/repositories/Samsung__CredSweeper.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 775 / 45 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .ci, .github, credsweeper, docs, experiment, fuzz, tests |
| 상위 확장자 | .py: 342, (none): 258, .rst: 24, .json: 13, .md: 10, .yml: 10, .patch: 7, .sh: 7, .txt: 7, .hs: 5, .png: 5, .yaml: 5 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 58 |
| docs | documentation surface | 42 |
| .github | ci surface | 1 |
| credsweeper | top-level component | 1 |
| experiment | top-level component | 1 |
| fuzz | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | credsweeper | credsweeper |


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
| security | [SECURITY.md](../../../../sources/Samsung__CredSweeper/SECURITY.md) | security signal |
| security | [tests/samples/auth_n.template](../../../../sources/Samsung__CredSweeper/tests/samples/auth_n.template) | security signal |
| security | [tests/samples/auth.hs](../../../../sources/Samsung__CredSweeper/tests/samples/auth.hs) | security signal |
| security | [tests/samples/azure_secret_value](../../../../sources/Samsung__CredSweeper/tests/samples/azure_secret_value) | security signal |
| ci | [.github/workflows/action.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/action.yml) | ci signal |
| ci | [.github/workflows/benchmark.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/benchmark.yml) | ci signal |
| ci | [.github/workflows/check.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/check.yml) | ci signal |
| ci | [.github/workflows/fuzz.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/fuzz.yml) | ci signal |
| config | [pyproject.toml](../../../../sources/Samsung__CredSweeper/pyproject.toml) | config signal |
| config | [requirements.txt](../../../../sources/Samsung__CredSweeper/requirements.txt) | config signal |
| config | [fuzz/requirements.txt](../../../../sources/Samsung__CredSweeper/fuzz/requirements.txt) | config signal |
| config | [experiment/requirements.txt](../../../../sources/Samsung__CredSweeper/experiment/requirements.txt) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [fuzz/__main__.py](../../../../sources/Samsung__CredSweeper/fuzz/__main__.py)<br>[experiment/main.py](../../../../sources/Samsung__CredSweeper/experiment/main.py)<br>[credsweeper/__main__.py](../../../../sources/Samsung__CredSweeper/credsweeper/__main__.py)<br>[credsweeper/main.py](../../../../sources/Samsung__CredSweeper/credsweeper/main.py) |
| agentRuntime | 4 | [experiment/tools/base64_test.py](../../../../sources/Samsung__CredSweeper/experiment/tools/base64_test.py)<br>[experiment/tools/entropy_test.py](../../../../sources/Samsung__CredSweeper/experiment/tools/entropy_test.py)<br>[experiment/tools/morpheme_test.py](../../../../sources/Samsung__CredSweeper/experiment/tools/morpheme_test.py)<br>[experiment/tools/strength_test.py](../../../../sources/Samsung__CredSweeper/experiment/tools/strength_test.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [docs/source/index.rst](../../../../sources/Samsung__CredSweeper/docs/source/index.rst) |
| spec | 6 | [requirements.txt](../../../../sources/Samsung__CredSweeper/requirements.txt)<br>[fuzz/requirements.txt](../../../../sources/Samsung__CredSweeper/fuzz/requirements.txt)<br>[experiment/requirements.txt](../../../../sources/Samsung__CredSweeper/experiment/requirements.txt)<br>[docs/requirements.txt](../../../../sources/Samsung__CredSweeper/docs/requirements.txt)<br>[docs/source/overall_architecture.rst](../../../../sources/Samsung__CredSweeper/docs/source/overall_architecture.rst)<br>[docs/images/Architecture.png](../../../../sources/Samsung__CredSweeper/docs/images/Architecture.png) |
| eval | 376 | [tests/__init__.py](../../../../sources/Samsung__CredSweeper/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/Samsung__CredSweeper/tests/conftest.py)<br>[tests/README.md](../../../../sources/Samsung__CredSweeper/tests/README.md)<br>[tests/test_app.py](../../../../sources/Samsung__CredSweeper/tests/test_app.py)<br>[tests/test_doc.py](../../../../sources/Samsung__CredSweeper/tests/test_doc.py)<br>[tests/test_git.py](../../../../sources/Samsung__CredSweeper/tests/test_git.py)<br>[tests/test_main.py](../../../../sources/Samsung__CredSweeper/tests/test_main.py)<br>[tests/utils/__init__.py](../../../../sources/Samsung__CredSweeper/tests/utils/__init__.py) |
| security | 22 | [SECURITY.md](../../../../sources/Samsung__CredSweeper/SECURITY.md)<br>[tests/samples/auth_n.template](../../../../sources/Samsung__CredSweeper/tests/samples/auth_n.template)<br>[tests/samples/auth.hs](../../../../sources/Samsung__CredSweeper/tests/samples/auth.hs)<br>[tests/samples/azure_secret_value](../../../../sources/Samsung__CredSweeper/tests/samples/azure_secret_value)<br>[tests/samples/digital_ocean_oauth_access_token](../../../../sources/Samsung__CredSweeper/tests/samples/digital_ocean_oauth_access_token)<br>[tests/samples/doc_secret_pair](../../../../sources/Samsung__CredSweeper/tests/samples/doc_secret_pair)<br>[tests/samples/dropbox_api_secret_long_term](../../../../sources/Samsung__CredSweeper/tests/samples/dropbox_api_secret_long_term)<br>[tests/samples/dropbox_oauth_token](../../../../sources/Samsung__CredSweeper/tests/samples/dropbox_oauth_token) |
| ci | 7 | [.github/workflows/action.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/action.yml)<br>[.github/workflows/benchmark.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/benchmark.yml)<br>[.github/workflows/check.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/check.yml)<br>[.github/workflows/fuzz.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/fuzz.yml)<br>[.github/workflows/pypi.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/pypi.yml)<br>[.github/workflows/rottenness.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/rottenness.yml)<br>[.github/workflows/test.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/test.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 40 | [README.md](../../../../sources/Samsung__CredSweeper/README.md)<br>[tests/README.md](../../../../sources/Samsung__CredSweeper/tests/README.md)<br>[fuzz/README.md](../../../../sources/Samsung__CredSweeper/fuzz/README.md)<br>[experiment/README.md](../../../../sources/Samsung__CredSweeper/experiment/README.md)<br>[docs/make.bat](../../../../sources/Samsung__CredSweeper/docs/make.bat)<br>[docs/Makefile](../../../../sources/Samsung__CredSweeper/docs/Makefile)<br>[docs/README.md](../../../../sources/Samsung__CredSweeper/docs/README.md)<br>[docs/requirements.txt](../../../../sources/Samsung__CredSweeper/docs/requirements.txt) |
| config | 6 | [pyproject.toml](../../../../sources/Samsung__CredSweeper/pyproject.toml)<br>[requirements.txt](../../../../sources/Samsung__CredSweeper/requirements.txt)<br>[fuzz/requirements.txt](../../../../sources/Samsung__CredSweeper/fuzz/requirements.txt)<br>[experiment/requirements.txt](../../../../sources/Samsung__CredSweeper/experiment/requirements.txt)<br>[docs/Makefile](../../../../sources/Samsung__CredSweeper/docs/Makefile)<br>[docs/requirements.txt](../../../../sources/Samsung__CredSweeper/docs/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 376 | [tests/__init__.py](../../../../sources/Samsung__CredSweeper/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/Samsung__CredSweeper/tests/conftest.py)<br>[tests/README.md](../../../../sources/Samsung__CredSweeper/tests/README.md)<br>[tests/test_app.py](../../../../sources/Samsung__CredSweeper/tests/test_app.py)<br>[tests/test_doc.py](../../../../sources/Samsung__CredSweeper/tests/test_doc.py)<br>[tests/test_git.py](../../../../sources/Samsung__CredSweeper/tests/test_git.py) |
| CI workflow | 7 | [.github/workflows/action.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/action.yml)<br>[.github/workflows/benchmark.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/benchmark.yml)<br>[.github/workflows/check.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/check.yml)<br>[.github/workflows/fuzz.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/fuzz.yml)<br>[.github/workflows/pypi.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/pypi.yml)<br>[.github/workflows/rottenness.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/rottenness.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 22 | [SECURITY.md](../../../../sources/Samsung__CredSweeper/SECURITY.md)<br>[tests/samples/auth_n.template](../../../../sources/Samsung__CredSweeper/tests/samples/auth_n.template)<br>[tests/samples/auth.hs](../../../../sources/Samsung__CredSweeper/tests/samples/auth.hs)<br>[tests/samples/azure_secret_value](../../../../sources/Samsung__CredSweeper/tests/samples/azure_secret_value)<br>[tests/samples/digital_ocean_oauth_access_token](../../../../sources/Samsung__CredSweeper/tests/samples/digital_ocean_oauth_access_token)<br>[tests/samples/doc_secret_pair](../../../../sources/Samsung__CredSweeper/tests/samples/doc_secret_pair) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `SECURITY.md`, `tests/samples/auth_n.template`, `tests/samples/auth.hs`.
2. entrypoint를 따라 실행 흐름 확인: `fuzz/__main__.py`, `experiment/main.py`, `credsweeper/__main__.py`.
3. agent/tool runtime 매핑: `experiment/tools/base64_test.py`, `experiment/tools/entropy_test.py`, `experiment/tools/morpheme_test.py`.
4. retrieval/memory/indexing 확인: `docs/source/index.rst`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/README.md`.

## 기존 레포 인사이트

보안/거버넌스/안전 관점에서 CredSweeper is a tool to detect credentials in any directories or files. CredSweeper could help users to detect unwanted. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 보안/거버넌스/안전 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
