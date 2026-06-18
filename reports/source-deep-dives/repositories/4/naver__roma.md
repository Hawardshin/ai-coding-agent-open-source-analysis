# naver/roma 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

RoMa: A lightweight library to deal with 3D rotations in PyTorch.

## 요약

- 조사 단위: `sources/naver__roma` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 58 files, 9 directories, depth score 75, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=pyproject.toml, requirements.txt, docsource/Makefile이고, 의존성 단서는 torch, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/roma |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 638 |
| Forks | 24 |
| License | NOASSERTION |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__roma](../../../../sources/naver__roma) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__roma.md](../../../korea-trending/repositories/naver__roma.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 58 / 9 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, docsource, examples, NOTICE_DOCUMENTATION, roma, test |
| 상위 확장자 | .py: 33, .txt: 10, (none): 4, .svg: 3, .sh: 2, .bat: 1, .md: 1, .png: 1, .rst: 1, .toml: 1, .yml: 1 |
| 소스 패턴 | retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| docsource | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/mapping_benchmark.py | examples workspace | 1 |
| examples/special_procrustes_benchmark.py | examples workspace | 1 |
| NOTICE_DOCUMENTATION | documentation surface | 1 |
| roma | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| config | [pyproject.toml](../../../../sources/naver__roma/pyproject.toml) | config signal |
| config | [requirements.txt](../../../../sources/naver__roma/requirements.txt) | config signal |
| config | [docsource/Makefile](../../../../sources/naver__roma/docsource/Makefile) | config signal |
| docs | [README.md](../../../../sources/naver__roma/README.md) | docs signal |
| docs | [NOTICE_DOCUMENTATION/README - RoMa Documentation - Font-Awesome.txt](../../../../sources/naver__roma/NOTICE_DOCUMENTATION/README - RoMa Documentation - Font-Awesome.txt) | docs signal |
| docs | [NOTICE_DOCUMENTATION/README - RoMa Documentation - html5shiv.txt](../../../../sources/naver__roma/NOTICE_DOCUMENTATION/README - RoMa Documentation - html5shiv.txt) | docs signal |
| docs | [NOTICE_DOCUMENTATION/README - RoMa Documentation - Inconsolata Fonts.txt](../../../../sources/naver__roma/NOTICE_DOCUMENTATION/README - RoMa Documentation - Inconsolata Fonts.txt) | docs signal |
| eval | [test/__init__.py](../../../../sources/naver__roma/test/__init__.py) | eval signal |
| eval | [test/test_derivatives.py](../../../../sources/naver__roma/test/test_derivatives.py) | eval signal |
| eval | [test/test_euler.py](../../../../sources/naver__roma/test/test_euler.py) | eval signal |
| eval | [test/test_mappings.py](../../../../sources/naver__roma/test/test_mappings.py) | eval signal |
| ci | [.github/workflows/main.yml](../../../../sources/naver__roma/.github/workflows/main.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [docsource/source/index.rst](../../../../sources/naver__roma/docsource/source/index.rst) |
| spec | 1 | [requirements.txt](../../../../sources/naver__roma/requirements.txt) |
| eval | 11 | [test/__init__.py](../../../../sources/naver__roma/test/__init__.py)<br>[test/test_derivatives.py](../../../../sources/naver__roma/test/test_derivatives.py)<br>[test/test_euler.py](../../../../sources/naver__roma/test/test_euler.py)<br>[test/test_mappings.py](../../../../sources/naver__roma/test/test_mappings.py)<br>[test/test_procrustes_derivatives.py](../../../../sources/naver__roma/test/test_procrustes_derivatives.py)<br>[test/test_transforms.py](../../../../sources/naver__roma/test/test_transforms.py)<br>[test/test_utils.py](../../../../sources/naver__roma/test/test_utils.py)<br>[test/utils.py](../../../../sources/naver__roma/test/utils.py) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/main.yml](../../../../sources/naver__roma/.github/workflows/main.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 10 | [README.md](../../../../sources/naver__roma/README.md)<br>[NOTICE_DOCUMENTATION/README - RoMa Documentation - Font-Awesome.txt](../../../../sources/naver__roma/NOTICE_DOCUMENTATION/README - RoMa Documentation - Font-Awesome.txt)<br>[NOTICE_DOCUMENTATION/README - RoMa Documentation - html5shiv.txt](../../../../sources/naver__roma/NOTICE_DOCUMENTATION/README - RoMa Documentation - html5shiv.txt)<br>[NOTICE_DOCUMENTATION/README - RoMa Documentation - Inconsolata Fonts.txt](../../../../sources/naver__roma/NOTICE_DOCUMENTATION/README - RoMa Documentation - Inconsolata Fonts.txt)<br>[NOTICE_DOCUMENTATION/README - RoMa Documentation - JQuery.txt](../../../../sources/naver__roma/NOTICE_DOCUMENTATION/README - RoMa Documentation - JQuery.txt)<br>[NOTICE_DOCUMENTATION/README - RoMa Documentation - Lato Fonts.txt](../../../../sources/naver__roma/NOTICE_DOCUMENTATION/README - RoMa Documentation - Lato Fonts.txt)<br>[NOTICE_DOCUMENTATION/README - RoMa Documentation - Modernizr.txt](../../../../sources/naver__roma/NOTICE_DOCUMENTATION/README - RoMa Documentation - Modernizr.txt)<br>[NOTICE_DOCUMENTATION/README - RoMa Documentation - Robotoslab Fonts.txt](../../../../sources/naver__roma/NOTICE_DOCUMENTATION/README - RoMa Documentation - Robotoslab Fonts.txt) |
| config | 3 | [pyproject.toml](../../../../sources/naver__roma/pyproject.toml)<br>[requirements.txt](../../../../sources/naver__roma/requirements.txt)<br>[docsource/Makefile](../../../../sources/naver__roma/docsource/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 11 | [test/__init__.py](../../../../sources/naver__roma/test/__init__.py)<br>[test/test_derivatives.py](../../../../sources/naver__roma/test/test_derivatives.py)<br>[test/test_euler.py](../../../../sources/naver__roma/test/test_euler.py)<br>[test/test_mappings.py](../../../../sources/naver__roma/test/test_mappings.py)<br>[test/test_procrustes_derivatives.py](../../../../sources/naver__roma/test/test_procrustes_derivatives.py)<br>[test/test_transforms.py](../../../../sources/naver__roma/test/test_transforms.py) |
| CI workflow | 1 | [.github/workflows/main.yml](../../../../sources/naver__roma/.github/workflows/main.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `pyproject.toml`, `requirements.txt`, `docsource/Makefile`.
2. retrieval/memory/indexing 확인: `docsource/source/index.rst`.
3. test/eval 파일로 동작 검증: `test/__init__.py`, `test/test_derivatives.py`, `test/test_euler.py`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 RoMa A lightweight library to deal with 3D rotations in PyTorch.. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, LICENSE, torch이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
