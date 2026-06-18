# kakao/buffalo 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

TOROS Buffalo: A fast and scalable production-ready open source project for recommender systems

## 요약

- 조사 단위: `sources/kakao__buffalo` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 150 files, 55 directories, depth score 86, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=pyproject.toml, requirements-dev.txt, docs/Makefile이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | kakao/buffalo |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 581 |
| Forks | 109 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/kakao__buffalo](../../../../sources/kakao__buffalo) |
| 기존 보고서 | [reports/korea-trending/repositories/kakao__buffalo.md](../../../korea-trending/repositories/kakao__buffalo.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 150 / 55 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, 3rd, benchmark, buffalo, docs, examples, include, install, lib, tests |
| 상위 확장자 | .py: 59, (none): 17, .hpp: 16, .pyx: 12, .cc: 9, .png: 9, .md: 8, .ipynb: 5, .rst: 4, .cu: 2, .yaml: 2, .cfg: 1 |
| 소스 패턴 | retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 35 |
| docs | documentation surface | 11 |
| .github | ci surface | 1 |
| 3rd | top-level component | 1 |
| benchmark | validation surface | 1 |
| buffalo | top-level component | 1 |
| examples | top-level component | 1 |
| examples/Dockerfile | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| include | top-level component | 1 |
| install | top-level component | 1 |
| lib | source boundary | 1 |


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
| config | [pyproject.toml](../../../../sources/kakao__buffalo/pyproject.toml) | config signal |
| config | [requirements-dev.txt](../../../../sources/kakao__buffalo/requirements-dev.txt) | config signal |
| config | [docs/Makefile](../../../../sources/kakao__buffalo/docs/Makefile) | config signal |
| docs | [README.md](../../../../sources/kakao__buffalo/README.md) | docs signal |
| docs | [tests/README.md](../../../../sources/kakao__buffalo/tests/README.md) | docs signal |
| docs | [examples/README.md](../../../../sources/kakao__buffalo/examples/README.md) | docs signal |
| docs | [docs/algo.rst](../../../../sources/kakao__buffalo/docs/algo.rst) | docs signal |
| eval | [tests/.gitignore](../../../../sources/kakao__buffalo/tests/.gitignore) | eval signal |
| eval | [tests/preprocess.py](../../../../sources/kakao__buffalo/tests/preprocess.py) | eval signal |
| eval | [tests/pytest.ini](../../../../sources/kakao__buffalo/tests/pytest.ini) | eval signal |
| ci | [.github/workflows/build_and_publush.yaml](../../../../sources/kakao__buffalo/.github/workflows/build_and_publush.yaml) | ci support |
| ci | [.github/workflows/static_lint.yaml](../../../../sources/kakao__buffalo/.github/workflows/static_lint.yaml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 2 | [docs/index.rst](../../../../sources/kakao__buffalo/docs/index.rst)<br>[benchmark/fig/20190829.buffalo.memory.kakaoreco730m.png](../../../../sources/kakao__buffalo/benchmark/fig/20190829.buffalo.memory.kakaoreco730m.png) |
| spec | 1 | [requirements-dev.txt](../../../../sources/kakao__buffalo/requirements-dev.txt) |
| eval | 50 | [tests/.gitignore](../../../../sources/kakao__buffalo/tests/.gitignore)<br>[tests/preprocess.py](../../../../sources/kakao__buffalo/tests/preprocess.py)<br>[tests/pytest.ini](../../../../sources/kakao__buffalo/tests/pytest.ini)<br>[tests/README.md](../../../../sources/kakao__buffalo/tests/README.md)<br>[tests/util/__init__.py](../../../../sources/kakao__buffalo/tests/util/__init__.py)<br>[tests/util/test_aux.py](../../../../sources/kakao__buffalo/tests/util/test_aux.py)<br>[tests/util/test_util.py](../../../../sources/kakao__buffalo/tests/util/test_util.py)<br>[tests/parallel/__init__.py](../../../../sources/kakao__buffalo/tests/parallel/__init__.py) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/build_and_publush.yaml](../../../../sources/kakao__buffalo/.github/workflows/build_and_publush.yaml)<br>[.github/workflows/static_lint.yaml](../../../../sources/kakao__buffalo/.github/workflows/static_lint.yaml) |
| container | 1 | [examples/Dockerfile](../../../../sources/kakao__buffalo/examples/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 12 | [README.md](../../../../sources/kakao__buffalo/README.md)<br>[tests/README.md](../../../../sources/kakao__buffalo/tests/README.md)<br>[examples/README.md](../../../../sources/kakao__buffalo/examples/README.md)<br>[docs/algo.rst](../../../../sources/kakao__buffalo/docs/algo.rst)<br>[docs/buffalo.png](../../../../sources/kakao__buffalo/docs/buffalo.png)<br>[docs/conf.py](../../../../sources/kakao__buffalo/docs/conf.py)<br>[docs/index.rst](../../../../sources/kakao__buffalo/docs/index.rst)<br>[docs/intro.rst](../../../../sources/kakao__buffalo/docs/intro.rst) |
| config | 3 | [pyproject.toml](../../../../sources/kakao__buffalo/pyproject.toml)<br>[requirements-dev.txt](../../../../sources/kakao__buffalo/requirements-dev.txt)<br>[docs/Makefile](../../../../sources/kakao__buffalo/docs/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 50 | [tests/.gitignore](../../../../sources/kakao__buffalo/tests/.gitignore)<br>[tests/preprocess.py](../../../../sources/kakao__buffalo/tests/preprocess.py)<br>[tests/pytest.ini](../../../../sources/kakao__buffalo/tests/pytest.ini)<br>[tests/README.md](../../../../sources/kakao__buffalo/tests/README.md)<br>[tests/util/__init__.py](../../../../sources/kakao__buffalo/tests/util/__init__.py)<br>[tests/util/test_aux.py](../../../../sources/kakao__buffalo/tests/util/test_aux.py) |
| CI workflow | 2 | [.github/workflows/build_and_publush.yaml](../../../../sources/kakao__buffalo/.github/workflows/build_and_publush.yaml)<br>[.github/workflows/static_lint.yaml](../../../../sources/kakao__buffalo/.github/workflows/static_lint.yaml) |
| 컨테이너/배포 | 1 | [examples/Dockerfile](../../../../sources/kakao__buffalo/examples/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `pyproject.toml`, `requirements-dev.txt`, `docs/Makefile`.
2. retrieval/memory/indexing 확인: `docs/index.rst`, `benchmark/fig/20190829.buffalo.memory.kakaoreco730m.png`.
3. test/eval 파일로 동작 검증: `tests/.gitignore`, `tests/preprocess.py`, `tests/pytest.ini`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 TOROS Buffalo A fast and scalable production ready open source project for recommender systems. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, tests, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
