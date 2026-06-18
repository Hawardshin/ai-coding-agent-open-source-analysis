# Samsung/cotopaxi 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Set of tools for security testing of Internet of Things devices using specific network IoT protocols

## 요약

- 조사 단위: `sources/Samsung__cotopaxi` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,630 files, 92 directories, depth score 75, key references 8개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 eval=tests/__init__.py, tests/.pylintrc, tests/common_runner.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 품질/평가 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Samsung/cotopaxi |
| 주제 | 평가/관측/품질 / 평가/관측/품질 |
| Region | korea |
| Language | Python |
| Stars | 362 |
| Forks | 79 |
| License | GPL-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__cotopaxi](../../../../sources/Samsung__cotopaxi) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__cotopaxi.md](../../../korea-trending/repositories/Samsung__cotopaxi.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3630 / 92 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | cotopaxi, docs, integrations, tests |
| 상위 확장자 | (none): 3316, .py: 152, .raw: 122, .txt: 23, .md: 5, .pcapng: 3, .yaml: 3, .cfg: 1, .hdf5: 1, .ini: 1, .model: 1, .pcap: 1 |
| 소스 패턴 | agent/tool runtime, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 41 |
| docs | documentation surface | 6 |
| cotopaxi | top-level component | 1 |
| integrations | top-level component | 1 |


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
| eval | [tests/__init__.py](../../../../sources/Samsung__cotopaxi/tests/__init__.py) | eval signal |
| eval | [tests/.pylintrc](../../../../sources/Samsung__cotopaxi/tests/.pylintrc) | eval signal |
| eval | [tests/common_runner.py](../../../../sources/Samsung__cotopaxi/tests/common_runner.py) | eval signal |
| eval | [tests/common_test_utils.py](../../../../sources/Samsung__cotopaxi/tests/common_test_utils.py) | eval signal |
| config | [requirements_devel.txt](../../../../sources/Samsung__cotopaxi/requirements_devel.txt) | config signal |
| config | [requirements_minimal.txt](../../../../sources/Samsung__cotopaxi/requirements_minimal.txt) | config signal |
| config | [requirements_python2.txt](../../../../sources/Samsung__cotopaxi/requirements_python2.txt) | config signal |
| config | [requirements.txt](../../../../sources/Samsung__cotopaxi/requirements.txt) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 1 | [docs/tools.md](../../../../sources/Samsung__cotopaxi/docs/tools.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 4 | [requirements_devel.txt](../../../../sources/Samsung__cotopaxi/requirements_devel.txt)<br>[requirements_minimal.txt](../../../../sources/Samsung__cotopaxi/requirements_minimal.txt)<br>[requirements_python2.txt](../../../../sources/Samsung__cotopaxi/requirements_python2.txt)<br>[requirements.txt](../../../../sources/Samsung__cotopaxi/requirements.txt) |
| eval | 42 | [tests/__init__.py](../../../../sources/Samsung__cotopaxi/tests/__init__.py)<br>[tests/.pylintrc](../../../../sources/Samsung__cotopaxi/tests/.pylintrc)<br>[tests/common_runner.py](../../../../sources/Samsung__cotopaxi/tests/common_runner.py)<br>[tests/common_test_utils.py](../../../../sources/Samsung__cotopaxi/tests/common_test_utils.py)<br>[tests/run_test_servers.py](../../../../sources/Samsung__cotopaxi/tests/run_test_servers.py)<br>[tests/test_active_scanner.py](../../../../sources/Samsung__cotopaxi/tests/test_active_scanner.py)<br>[tests/test_amplifier_detector.py](../../../../sources/Samsung__cotopaxi/tests/test_amplifier_detector.py)<br>[tests/test_amqp_utils.py](../../../../sources/Samsung__cotopaxi/tests/test_amqp_utils.py) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 5 | [README.md](../../../../sources/Samsung__cotopaxi/README.md)<br>[docs/development.md](../../../../sources/Samsung__cotopaxi/docs/development.md)<br>[docs/installation.md](../../../../sources/Samsung__cotopaxi/docs/installation.md)<br>[docs/metasploit.md](../../../../sources/Samsung__cotopaxi/docs/metasploit.md)<br>[docs/tools.md](../../../../sources/Samsung__cotopaxi/docs/tools.md) |
| config | 4 | [requirements_devel.txt](../../../../sources/Samsung__cotopaxi/requirements_devel.txt)<br>[requirements_minimal.txt](../../../../sources/Samsung__cotopaxi/requirements_minimal.txt)<br>[requirements_python2.txt](../../../../sources/Samsung__cotopaxi/requirements_python2.txt)<br>[requirements.txt](../../../../sources/Samsung__cotopaxi/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 42 | [tests/__init__.py](../../../../sources/Samsung__cotopaxi/tests/__init__.py)<br>[tests/.pylintrc](../../../../sources/Samsung__cotopaxi/tests/.pylintrc)<br>[tests/common_runner.py](../../../../sources/Samsung__cotopaxi/tests/common_runner.py)<br>[tests/common_test_utils.py](../../../../sources/Samsung__cotopaxi/tests/common_test_utils.py)<br>[tests/run_test_servers.py](../../../../sources/Samsung__cotopaxi/tests/run_test_servers.py)<br>[tests/test_active_scanner.py](../../../../sources/Samsung__cotopaxi/tests/test_active_scanner.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/__init__.py`, `tests/.pylintrc`, `tests/common_runner.py`.
2. agent/tool runtime 매핑: `docs/tools.md`.
3. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/.pylintrc`, `tests/common_runner.py`.

## 기존 레포 인사이트

평가/관측/품질 관점에서 Set of tools for security testing of Internet of Things devices using specific network IoT protocols. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, tests, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 평가/관측/품질 레포입니다. 활용 관점은 품질/평가 비교 지점이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
