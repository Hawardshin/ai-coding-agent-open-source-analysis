# kakao/khaiii 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Kakao Hangul Analyzer III

## 요약

- 조사 단위: `sources/kakao__khaiii` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 130 files, 28 directories, depth score 88, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 entrypoints=rsc/bin/compile_errpatch.py, rsc/bin/compile_model.py, rsc/bin/compile_preanal.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | kakao/khaiii |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/kakao__khaiii](../../../../sources/kakao__khaiii) |
| 기존 보고서 | [reports/korea-trending/repositories/kakao__khaiii.md](../../../korea-trending/repositories/kakao__khaiii.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 130 / 28 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, cmake, docker, include, munjong, rsc, src, train |
| 상위 확장자 | .py: 45, .cpp: 23, .hpp: 19, .cmake: 5, .in: 4, .md: 4, .png: 4, (none): 4, .auto: 3, .manual: 3, .txt: 3, .h: 2 |
| 소스 패턴 | cli-first, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 11 |
| .github | ci surface | 1 |
| cmake | top-level component | 1 |
| docker | documentation surface | 1 |
| include | top-level component | 1 |
| munjong | top-level component | 1 |
| rsc | top-level component | 1 |
| train | top-level component | 1 |


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
| entrypoints | [rsc/bin/compile_errpatch.py](../../../../sources/kakao__khaiii/rsc/bin/compile_errpatch.py) | entrypoints signal |
| entrypoints | [rsc/bin/compile_model.py](../../../../sources/kakao__khaiii/rsc/bin/compile_model.py) | entrypoints signal |
| entrypoints | [rsc/bin/compile_preanal.py](../../../../sources/kakao__khaiii/rsc/bin/compile_preanal.py) | entrypoints signal |
| entrypoints | [rsc/bin/compile_restore.py](../../../../sources/kakao__khaiii/rsc/bin/compile_restore.py) | entrypoints signal |
| config | [requirements.txt](../../../../sources/kakao__khaiii/requirements.txt) | config signal |
| config | [train/requirements.txt](../../../../sources/kakao__khaiii/train/requirements.txt) | config signal |
| config | [rsc/Makefile](../../../../sources/kakao__khaiii/rsc/Makefile) | config signal |
| docs | [README.md](../../../../sources/kakao__khaiii/README.md) | docs signal |
| docs | [.github/doc/khaiii_for_space_error.pptx](../../../../sources/kakao__khaiii/.github/doc/khaiii_for_space_error.pptx) | docs signal |
| docs | [.github/doc/network.pptx](../../../../sources/kakao__khaiii/.github/doc/network.pptx) | docs signal |
| eval | [train/eval.py](../../../../sources/kakao__khaiii/train/eval.py) | eval signal |
| eval | [src/test/python/test_khaiii/__init__.py](../../../../sources/kakao__khaiii/src/test/python/test_khaiii/__init__.py) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [rsc/bin/compile_errpatch.py](../../../../sources/kakao__khaiii/rsc/bin/compile_errpatch.py)<br>[rsc/bin/compile_model.py](../../../../sources/kakao__khaiii/rsc/bin/compile_model.py)<br>[rsc/bin/compile_preanal.py](../../../../sources/kakao__khaiii/rsc/bin/compile_preanal.py)<br>[rsc/bin/compile_restore.py](../../../../sources/kakao__khaiii/rsc/bin/compile_restore.py) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 2 | [src/main/cpp/khaiii/Embed.cpp](../../../../sources/kakao__khaiii/src/main/cpp/khaiii/Embed.cpp)<br>[src/main/cpp/khaiii/Embed.hpp](../../../../sources/kakao__khaiii/src/main/cpp/khaiii/Embed.hpp) |
| spec | 2 | [requirements.txt](../../../../sources/kakao__khaiii/requirements.txt)<br>[train/requirements.txt](../../../../sources/kakao__khaiii/train/requirements.txt) |
| eval | 9 | [train/eval.py](../../../../sources/kakao__khaiii/train/eval.py)<br>[src/test/python/test_khaiii/__init__.py](../../../../sources/kakao__khaiii/src/test/python/test_khaiii/__init__.py)<br>[src/test/python/test_khaiii/test_khaiii.py](../../../../sources/kakao__khaiii/src/test/python/test_khaiii/test_khaiii.py)<br>[src/test/cpp/test_main.cpp](../../../../sources/kakao__khaiii/src/test/cpp/test_main.cpp)<br>[src/test/cpp/khaiii/ErrPatchTest.cpp](../../../../sources/kakao__khaiii/src/test/cpp/khaiii/ErrPatchTest.cpp)<br>[src/test/cpp/khaiii/KhaiiiApiTest.cpp](../../../../sources/kakao__khaiii/src/test/cpp/khaiii/KhaiiiApiTest.cpp)<br>[src/test/cpp/khaiii/KhaiiiApiTest.hpp](../../../../sources/kakao__khaiii/src/test/cpp/khaiii/KhaiiiApiTest.hpp)<br>[src/test/cpp/khaiii/KhaiiiDevTest.cpp](../../../../sources/kakao__khaiii/src/test/cpp/khaiii/KhaiiiDevTest.cpp) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 1 | [docker/Dockerfile](../../../../sources/kakao__khaiii/docker/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 3 | [README.md](../../../../sources/kakao__khaiii/README.md)<br>[.github/doc/khaiii_for_space_error.pptx](../../../../sources/kakao__khaiii/.github/doc/khaiii_for_space_error.pptx)<br>[.github/doc/network.pptx](../../../../sources/kakao__khaiii/.github/doc/network.pptx) |
| config | 3 | [requirements.txt](../../../../sources/kakao__khaiii/requirements.txt)<br>[train/requirements.txt](../../../../sources/kakao__khaiii/train/requirements.txt)<br>[rsc/Makefile](../../../../sources/kakao__khaiii/rsc/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 9 | [train/eval.py](../../../../sources/kakao__khaiii/train/eval.py)<br>[src/test/python/test_khaiii/__init__.py](../../../../sources/kakao__khaiii/src/test/python/test_khaiii/__init__.py)<br>[src/test/python/test_khaiii/test_khaiii.py](../../../../sources/kakao__khaiii/src/test/python/test_khaiii/test_khaiii.py)<br>[src/test/cpp/test_main.cpp](../../../../sources/kakao__khaiii/src/test/cpp/test_main.cpp)<br>[src/test/cpp/khaiii/ErrPatchTest.cpp](../../../../sources/kakao__khaiii/src/test/cpp/khaiii/ErrPatchTest.cpp)<br>[src/test/cpp/khaiii/KhaiiiApiTest.cpp](../../../../sources/kakao__khaiii/src/test/cpp/khaiii/KhaiiiApiTest.cpp) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 1 | [docker/Dockerfile](../../../../sources/kakao__khaiii/docker/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `rsc/bin/compile_errpatch.py`, `rsc/bin/compile_model.py`, `rsc/bin/compile_preanal.py`.
2. entrypoint를 따라 실행 흐름 확인: `rsc/bin/compile_errpatch.py`, `rsc/bin/compile_model.py`, `rsc/bin/compile_preanal.py`.
3. retrieval/memory/indexing 확인: `src/main/cpp/khaiii/Embed.cpp`, `src/main/cpp/khaiii/Embed.hpp`.
4. test/eval 파일로 동작 검증: `train/eval.py`, `src/test/python/test_khaiii/__init__.py`, `src/test/python/test_khaiii/test_khaiii.py`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Kakao Hangul Analyzer III. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
