# Andyyyy64/whichllm 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Find the local LLM that actually runs and performs best on your hardware. Ranked by real, recency-aware benchmarks, not parameter count. One command, run it instantly.

## 요약

- 조사 단위: `sources/Andyyyy64__whichllm` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 105 files, 15 directories, depth score 70, key references 7개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 config=pyproject.toml, uv.lock이고, 의존성 단서는 typer, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Andyyyy64/whichllm |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | korea |
| Language | Python |
| Stars | 4923 |
| Forks | 268 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Andyyyy64__whichllm](../../../../sources/Andyyyy64__whichllm) |
| 기존 보고서 | [reports/global-trending/repositories/Andyyyy64__whichllm.md](../../../global-trending/repositories/Andyyyy64__whichllm.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 105 / 15 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, assets, docs, scripts, src, tests |
| 상위 확장자 | .py: 78, .md: 12, .yml: 6, .gif: 2, .tape: 2, (none): 2, .lock: 1, .png: 1, .toml: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 27 |
| src | source boundary | 15 |
| docs | documentation surface | 8 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | whichllm | whichllm |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | typer |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| config | [pyproject.toml](../../../../sources/Andyyyy64__whichllm/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/Andyyyy64__whichllm/uv.lock) | config signal |
| ci | [.github/workflows/lint.yml](../../../../sources/Andyyyy64__whichllm/.github/workflows/lint.yml) | ci signal |
| ci | [.github/workflows/publish.yml](../../../../sources/Andyyyy64__whichllm/.github/workflows/publish.yml) | ci signal |
| ci | [.github/workflows/test.yml](../../../../sources/Andyyyy64__whichllm/.github/workflows/test.yml) | ci signal |
| eval | [tests/__init__.py](../../../../sources/Andyyyy64__whichllm/tests/__init__.py) | eval support |
| eval | [tests/test_aa_index.py](../../../../sources/Andyyyy64__whichllm/tests/test_aa_index.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 1 | [src/whichllm/hardware/memory.py](../../../../sources/Andyyyy64__whichllm/src/whichllm/hardware/memory.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 4 | [tests/test_aa_index.py](../../../../sources/Andyyyy64__whichllm/tests/test_aa_index.py)<br>[tests/test_memory.py](../../../../sources/Andyyyy64__whichllm/tests/test_memory.py)<br>[src/whichllm/models/benchmark_sources/aa_index.py](../../../../sources/Andyyyy64__whichllm/src/whichllm/models/benchmark_sources/aa_index.py)<br>[src/whichllm/hardware/memory.py](../../../../sources/Andyyyy64__whichllm/src/whichllm/hardware/memory.py) |
| spec | 0 | 명확하지 않음 |
| eval | 36 | [tests/__init__.py](../../../../sources/Andyyyy64__whichllm/tests/__init__.py)<br>[tests/test_aa_index.py](../../../../sources/Andyyyy64__whichllm/tests/test_aa_index.py)<br>[tests/test_amd_detection.py](../../../../sources/Andyyyy64__whichllm/tests/test_amd_detection.py)<br>[tests/test_asahi_detection.py](../../../../sources/Andyyyy64__whichllm/tests/test_asahi_detection.py)<br>[tests/test_benchmark_lookup.py](../../../../sources/Andyyyy64__whichllm/tests/test_benchmark_lookup.py)<br>[tests/test_cli.py](../../../../sources/Andyyyy64__whichllm/tests/test_cli.py)<br>[tests/test_compatibility.py](../../../../sources/Andyyyy64__whichllm/tests/test_compatibility.py)<br>[tests/test_fetcher.py](../../../../sources/Andyyyy64__whichllm/tests/test_fetcher.py) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/lint.yml](../../../../sources/Andyyyy64__whichllm/.github/workflows/lint.yml)<br>[.github/workflows/publish.yml](../../../../sources/Andyyyy64__whichllm/.github/workflows/publish.yml)<br>[.github/workflows/test.yml](../../../../sources/Andyyyy64__whichllm/.github/workflows/test.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 8 | [README.md](../../../../sources/Andyyyy64__whichllm/README.md)<br>[docs/cli.md](../../../../sources/Andyyyy64__whichllm/docs/cli.md)<br>[docs/hardware.md](../../../../sources/Andyyyy64__whichllm/docs/hardware.md)<br>[docs/how-it-works.md](../../../../sources/Andyyyy64__whichllm/docs/how-it-works.md)<br>[docs/README.ja.md](../../../../sources/Andyyyy64__whichllm/docs/README.ja.md)<br>[docs/run-snippet.md](../../../../sources/Andyyyy64__whichllm/docs/run-snippet.md)<br>[docs/scoring.md](../../../../sources/Andyyyy64__whichllm/docs/scoring.md)<br>[docs/troubleshooting.md](../../../../sources/Andyyyy64__whichllm/docs/troubleshooting.md) |
| config | 2 | [pyproject.toml](../../../../sources/Andyyyy64__whichllm/pyproject.toml)<br>[uv.lock](../../../../sources/Andyyyy64__whichllm/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 36 | [tests/__init__.py](../../../../sources/Andyyyy64__whichllm/tests/__init__.py)<br>[tests/test_aa_index.py](../../../../sources/Andyyyy64__whichllm/tests/test_aa_index.py)<br>[tests/test_amd_detection.py](../../../../sources/Andyyyy64__whichllm/tests/test_amd_detection.py)<br>[tests/test_asahi_detection.py](../../../../sources/Andyyyy64__whichllm/tests/test_asahi_detection.py)<br>[tests/test_benchmark_lookup.py](../../../../sources/Andyyyy64__whichllm/tests/test_benchmark_lookup.py)<br>[tests/test_cli.py](../../../../sources/Andyyyy64__whichllm/tests/test_cli.py) |
| CI workflow | 3 | [.github/workflows/lint.yml](../../../../sources/Andyyyy64__whichllm/.github/workflows/lint.yml)<br>[.github/workflows/publish.yml](../../../../sources/Andyyyy64__whichllm/.github/workflows/publish.yml)<br>[.github/workflows/test.yml](../../../../sources/Andyyyy64__whichllm/.github/workflows/test.yml) |
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

1. 핵심 참조에서 시작: `pyproject.toml`, `uv.lock`, `.github/workflows/lint.yml`.
2. agent/tool runtime 매핑: `src/whichllm/hardware/memory.py`.
3. retrieval/memory/indexing 확인: `tests/test_aa_index.py`, `tests/test_memory.py`, `src/whichllm/models/benchmark_sources/aa_index.py`.
4. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/test_aa_index.py`, `tests/test_amd_detection.py`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Find the local LLM that actually runs and performs best on your hardware. Ranked by real, recency aware benchmarks, not . 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, tests, ci이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
