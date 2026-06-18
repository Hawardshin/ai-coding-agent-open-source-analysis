# linkonai2026-kr/kochunk 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Korean-first text chunking toolkit for RAG: sentence-correct (Kiwi), token-budgeted, structure-preserving, with a built-in quality-diagnostics harness and CLI.

## 요약

- 조사 단위: `sources/linkonai2026-kr__kochunk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 56 files, 15 directories, depth score 60, key references 5개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/kochunk/__main__.py이고, 의존성 단서는 openai, langchain, llamaindex, llama-index, transformers, llama, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | linkonai2026-kr/kochunk |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/linkonai2026-kr__kochunk](../../../../sources/linkonai2026-kr__kochunk) |
| 기존 보고서 | [reports/korea-trending/repositories/linkonai2026-kr__kochunk.md](../../../korea-trending/repositories/linkonai2026-kr__kochunk.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 56 / 15 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, benchmarks, examples, src, tests |
| 상위 확장자 | .py: 47, .md: 4, (none): 2, .toml: 1, .typed: 1, .yml: 1 |
| 소스 패턴 | cli-first, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 15 |
| src | source boundary | 6 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| examples | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | kochunk | kochunk |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | langchain, llamaindex, llama-index |
| vectorStores | 없음 |
| modelRuntime | transformers, llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [src/kochunk/__main__.py](../../../../sources/linkonai2026-kr__kochunk/src/kochunk/__main__.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/linkonai2026-kr__kochunk/pyproject.toml) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/linkonai2026-kr__kochunk/.github/workflows/ci.yml) | ci support |
| eval | [tests/conftest.py](../../../../sources/linkonai2026-kr__kochunk/tests/conftest.py) | eval support |
| eval | [tests/test_cli.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_cli.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/kochunk/__main__.py](../../../../sources/linkonai2026-kr__kochunk/src/kochunk/__main__.py) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 3 | [src/kochunk/embed/__init__.py](../../../../sources/linkonai2026-kr__kochunk/src/kochunk/embed/__init__.py)<br>[src/kochunk/embed/base.py](../../../../sources/linkonai2026-kr__kochunk/src/kochunk/embed/base.py)<br>[src/kochunk/embed/sentence_transformers.py](../../../../sources/linkonai2026-kr__kochunk/src/kochunk/embed/sentence_transformers.py) |
| spec | 0 | 명확하지 않음 |
| eval | 15 | [tests/conftest.py](../../../../sources/linkonai2026-kr__kochunk/tests/conftest.py)<br>[tests/test_cli.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_cli.py)<br>[tests/test_config_io.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_config_io.py)<br>[tests/test_integrations.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_integrations.py)<br>[tests/test_io.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_io.py)<br>[tests/test_property.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_property.py)<br>[tests/test_quality.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_quality.py)<br>[tests/test_recursive.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_recursive.py) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/linkonai2026-kr__kochunk/.github/workflows/ci.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/linkonai2026-kr__kochunk/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/linkonai2026-kr__kochunk/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 15 | [tests/conftest.py](../../../../sources/linkonai2026-kr__kochunk/tests/conftest.py)<br>[tests/test_cli.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_cli.py)<br>[tests/test_config_io.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_config_io.py)<br>[tests/test_integrations.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_integrations.py)<br>[tests/test_io.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_io.py)<br>[tests/test_property.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_property.py) |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/linkonai2026-kr__kochunk/.github/workflows/ci.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/kochunk/__main__.py`, `pyproject.toml`, `.github/workflows/ci.yml`.
2. entrypoint를 따라 실행 흐름 확인: `src/kochunk/__main__.py`.
3. retrieval/memory/indexing 확인: `src/kochunk/embed/__init__.py`, `src/kochunk/embed/base.py`, `src/kochunk/embed/sentence_transformers.py`.
4. test/eval 파일로 동작 검증: `tests/conftest.py`, `tests/test_cli.py`, `tests/test_config_io.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Korean first text chunking toolkit for RAG sentence correct Kiwi , token budgeted, structure preserving, with a built in. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, langchain이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
