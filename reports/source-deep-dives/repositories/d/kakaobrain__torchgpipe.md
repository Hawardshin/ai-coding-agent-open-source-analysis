# kakaobrain/torchgpipe 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

A GPipe implementation in PyTorch

## 요약

- 조사 단위: `sources/kakaobrain__torchgpipe` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 154 files, 34 directories, depth score 82, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 entrypoints=benchmarks/unet-timeline/main.py, benchmarks/unet-speed/main.py, benchmarks/unet-memory/main.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | kakaobrain/torchgpipe |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 865 |
| Forks | 98 |
| License | BSD-3-Clause |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/kakaobrain__torchgpipe](../../../../sources/kakaobrain__torchgpipe) |
| 기존 보고서 | [reports/korea-trending/repositories/kakaobrain__torchgpipe.md](../../../korea-trending/repositories/kakaobrain__torchgpipe.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 154 / 34 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, benchmarks, docs, stubs, tests, torchgpipe |
| 상위 확장자 | .py: 65, .pyi: 51, .md: 11, .txt: 8, .rst: 6, (none): 4, .svg: 3, .typed: 2, .yml: 2, .bat: 1, .cfg: 1 |
| 소스 패턴 | cli-first, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 25 |
| docs | documentation surface | 18 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| stubs | top-level component | 1 |
| torchgpipe | top-level component | 1 |


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
| entrypoints | [benchmarks/unet-timeline/main.py](../../../../sources/kakaobrain__torchgpipe/benchmarks/unet-timeline/main.py) | entrypoints signal |
| entrypoints | [benchmarks/unet-speed/main.py](../../../../sources/kakaobrain__torchgpipe/benchmarks/unet-speed/main.py) | entrypoints signal |
| entrypoints | [benchmarks/unet-memory/main.py](../../../../sources/kakaobrain__torchgpipe/benchmarks/unet-memory/main.py) | entrypoints signal |
| entrypoints | [benchmarks/resnet101-speed/main.py](../../../../sources/kakaobrain__torchgpipe/benchmarks/resnet101-speed/main.py) | entrypoints signal |
| config | [docs/Makefile](../../../../sources/kakaobrain__torchgpipe/docs/Makefile) | config signal |
| config | [docs/requirements.txt](../../../../sources/kakaobrain__torchgpipe/docs/requirements.txt) | config signal |
| config | [benchmarks/unet-timeline/requirements.txt](../../../../sources/kakaobrain__torchgpipe/benchmarks/unet-timeline/requirements.txt) | config signal |
| config | [benchmarks/unet-speed/requirements.txt](../../../../sources/kakaobrain__torchgpipe/benchmarks/unet-speed/requirements.txt) | config signal |
| docs | [README.ko.md](../../../../sources/kakaobrain__torchgpipe/README.ko.md) | docs signal |
| docs | [README.md](../../../../sources/kakaobrain__torchgpipe/README.md) | docs signal |
| docs | [docs/api.rst](../../../../sources/kakaobrain__torchgpipe/docs/api.rst) | docs signal |
| docs | [docs/benchmarks.rst](../../../../sources/kakaobrain__torchgpipe/docs/benchmarks.rst) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [benchmarks/unet-timeline/main.py](../../../../sources/kakaobrain__torchgpipe/benchmarks/unet-timeline/main.py)<br>[benchmarks/unet-speed/main.py](../../../../sources/kakaobrain__torchgpipe/benchmarks/unet-speed/main.py)<br>[benchmarks/unet-memory/main.py](../../../../sources/kakaobrain__torchgpipe/benchmarks/unet-memory/main.py)<br>[benchmarks/resnet101-speed/main.py](../../../../sources/kakaobrain__torchgpipe/benchmarks/resnet101-speed/main.py)<br>[benchmarks/resnet101-accuracy/main.py](../../../../sources/kakaobrain__torchgpipe/benchmarks/resnet101-accuracy/main.py)<br>[benchmarks/amoebanetd-speed/main.py](../../../../sources/kakaobrain__torchgpipe/benchmarks/amoebanetd-speed/main.py)<br>[benchmarks/amoebanetd-memory/main.py](../../../../sources/kakaobrain__torchgpipe/benchmarks/amoebanetd-memory/main.py) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 7 | [docs/index.rst](../../../../sources/kakaobrain__torchgpipe/docs/index.rst)<br>[benchmarks/unet-memory/main.py](../../../../sources/kakaobrain__torchgpipe/benchmarks/unet-memory/main.py)<br>[benchmarks/unet-memory/README.md](../../../../sources/kakaobrain__torchgpipe/benchmarks/unet-memory/README.md)<br>[benchmarks/unet-memory/requirements.txt](../../../../sources/kakaobrain__torchgpipe/benchmarks/unet-memory/requirements.txt)<br>[benchmarks/amoebanetd-memory/main.py](../../../../sources/kakaobrain__torchgpipe/benchmarks/amoebanetd-memory/main.py)<br>[benchmarks/amoebanetd-memory/README.md](../../../../sources/kakaobrain__torchgpipe/benchmarks/amoebanetd-memory/README.md)<br>[benchmarks/amoebanetd-memory/requirements.txt](../../../../sources/kakaobrain__torchgpipe/benchmarks/amoebanetd-memory/requirements.txt) |
| spec | 8 | [docs/requirements.txt](../../../../sources/kakaobrain__torchgpipe/docs/requirements.txt)<br>[benchmarks/unet-timeline/requirements.txt](../../../../sources/kakaobrain__torchgpipe/benchmarks/unet-timeline/requirements.txt)<br>[benchmarks/unet-speed/requirements.txt](../../../../sources/kakaobrain__torchgpipe/benchmarks/unet-speed/requirements.txt)<br>[benchmarks/unet-memory/requirements.txt](../../../../sources/kakaobrain__torchgpipe/benchmarks/unet-memory/requirements.txt)<br>[benchmarks/resnet101-speed/requirements.txt](../../../../sources/kakaobrain__torchgpipe/benchmarks/resnet101-speed/requirements.txt)<br>[benchmarks/resnet101-accuracy/requirements.txt](../../../../sources/kakaobrain__torchgpipe/benchmarks/resnet101-accuracy/requirements.txt)<br>[benchmarks/amoebanetd-speed/requirements.txt](../../../../sources/kakaobrain__torchgpipe/benchmarks/amoebanetd-speed/requirements.txt)<br>[benchmarks/amoebanetd-memory/requirements.txt](../../../../sources/kakaobrain__torchgpipe/benchmarks/amoebanetd-memory/requirements.txt) |
| eval | 24 | [tests/__init__.py](../../../../sources/kakaobrain__torchgpipe/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/kakaobrain__torchgpipe/tests/conftest.py)<br>[tests/test_balance.py](../../../../sources/kakaobrain__torchgpipe/tests/test_balance.py)<br>[tests/test_bugs.py](../../../../sources/kakaobrain__torchgpipe/tests/test_bugs.py)<br>[tests/test_checkpoint.py](../../../../sources/kakaobrain__torchgpipe/tests/test_checkpoint.py)<br>[tests/test_copy.py](../../../../sources/kakaobrain__torchgpipe/tests/test_copy.py)<br>[tests/test_deferred_batch_norm.py](../../../../sources/kakaobrain__torchgpipe/tests/test_deferred_batch_norm.py)<br>[tests/test_dependency.py](../../../../sources/kakaobrain__torchgpipe/tests/test_dependency.py) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 22 | [README.ko.md](../../../../sources/kakaobrain__torchgpipe/README.ko.md)<br>[README.md](../../../../sources/kakaobrain__torchgpipe/README.md)<br>[docs/api.rst](../../../../sources/kakaobrain__torchgpipe/docs/api.rst)<br>[docs/benchmarks.rst](../../../../sources/kakaobrain__torchgpipe/docs/benchmarks.rst)<br>[docs/changelog.rst](../../../../sources/kakaobrain__torchgpipe/docs/changelog.rst)<br>[docs/conf.py](../../../../sources/kakaobrain__torchgpipe/docs/conf.py)<br>[docs/gpipe.rst](../../../../sources/kakaobrain__torchgpipe/docs/gpipe.rst)<br>[docs/guide.rst](../../../../sources/kakaobrain__torchgpipe/docs/guide.rst) |
| config | 9 | [docs/Makefile](../../../../sources/kakaobrain__torchgpipe/docs/Makefile)<br>[docs/requirements.txt](../../../../sources/kakaobrain__torchgpipe/docs/requirements.txt)<br>[benchmarks/unet-timeline/requirements.txt](../../../../sources/kakaobrain__torchgpipe/benchmarks/unet-timeline/requirements.txt)<br>[benchmarks/unet-speed/requirements.txt](../../../../sources/kakaobrain__torchgpipe/benchmarks/unet-speed/requirements.txt)<br>[benchmarks/unet-memory/requirements.txt](../../../../sources/kakaobrain__torchgpipe/benchmarks/unet-memory/requirements.txt)<br>[benchmarks/resnet101-speed/requirements.txt](../../../../sources/kakaobrain__torchgpipe/benchmarks/resnet101-speed/requirements.txt)<br>[benchmarks/resnet101-accuracy/requirements.txt](../../../../sources/kakaobrain__torchgpipe/benchmarks/resnet101-accuracy/requirements.txt)<br>[benchmarks/amoebanetd-speed/requirements.txt](../../../../sources/kakaobrain__torchgpipe/benchmarks/amoebanetd-speed/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 24 | [tests/__init__.py](../../../../sources/kakaobrain__torchgpipe/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/kakaobrain__torchgpipe/tests/conftest.py)<br>[tests/test_balance.py](../../../../sources/kakaobrain__torchgpipe/tests/test_balance.py)<br>[tests/test_bugs.py](../../../../sources/kakaobrain__torchgpipe/tests/test_bugs.py)<br>[tests/test_checkpoint.py](../../../../sources/kakaobrain__torchgpipe/tests/test_checkpoint.py)<br>[tests/test_copy.py](../../../../sources/kakaobrain__torchgpipe/tests/test_copy.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `benchmarks/unet-timeline/main.py`, `benchmarks/unet-speed/main.py`, `benchmarks/unet-memory/main.py`.
2. entrypoint를 따라 실행 흐름 확인: `benchmarks/unet-timeline/main.py`, `benchmarks/unet-speed/main.py`, `benchmarks/unet-memory/main.py`.
3. retrieval/memory/indexing 확인: `docs/index.rst`, `benchmarks/unet-memory/main.py`, `benchmarks/unet-memory/README.md`.
4. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/test_balance.py`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 A GPipe implementation in PyTorch. 핵심 구조 신호는 Python, README.md, LICENSE, tests, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
