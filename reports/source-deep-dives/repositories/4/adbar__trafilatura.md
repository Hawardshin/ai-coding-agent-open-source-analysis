# adbar/trafilatura 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Python & Command-line tool to gather text and metadata on the Web: Crawling, scraping, extraction, output as CSV, JSON, HTML, MD, TXT, XML

## 요약

- 조사 단위: `sources/adbar__trafilatura` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,157 files, 9 directories, depth score 97, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=pyproject.toml, docs/Makefile이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | adbar/trafilatura |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 6146 |
| Forks | 386 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/adbar__trafilatura](../../../../sources/adbar__trafilatura) |
| 기존 보고서 | [reports/global-trending/repositories/adbar__trafilatura.md](../../../global-trending/repositories/adbar__trafilatura.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1157 / 9 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, docs, tests, trafilatura |
| 상위 확장자 | .html: 1043, .py: 42, .rst: 29, (none): 5, .txt: 4, .cfg: 3, .jpg: 3, .md: 3, .png: 3, .xml: 3, .yml: 3, .gz: 2 |
| 소스 패턴 | cli-first, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 49 |
| docs | documentation surface | 41 |
| .github | ci surface | 1 |
| trafilatura | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | trafilatura | trafilatura |


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
| config | [pyproject.toml](../../../../sources/adbar__trafilatura/pyproject.toml) | config signal |
| config | [docs/Makefile](../../../../sources/adbar__trafilatura/docs/Makefile) | config signal |
| docs | [README.md](../../../../sources/adbar__trafilatura/README.md) | docs signal |
| docs | [tests/README.rst](../../../../sources/adbar__trafilatura/tests/README.rst) | docs signal |
| docs | [docs/background.rst](../../../../sources/adbar__trafilatura/docs/background.rst) | docs signal |
| docs | [docs/compendium.rst](../../../../sources/adbar__trafilatura/docs/compendium.rst) | docs signal |
| eval | [tests/__init__.py](../../../../sources/adbar__trafilatura/tests/__init__.py) | eval signal |
| eval | [tests/baseline_tests.py](../../../../sources/adbar__trafilatura/tests/baseline_tests.py) | eval signal |
| eval | [tests/cli_tests.py](../../../../sources/adbar__trafilatura/tests/cli_tests.py) | eval signal |
| eval | [tests/comparison_small.py](../../../../sources/adbar__trafilatura/tests/comparison_small.py) | eval signal |
| ci | [.github/workflows/codeql.yml](../../../../sources/adbar__trafilatura/.github/workflows/codeql.yml) | ci support |
| ci | [.github/workflows/tests.yml](../../../../sources/adbar__trafilatura/.github/workflows/tests.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 6 | [tests/eval/anwaltniemeyer.de.index.html](../../../../sources/adbar__trafilatura/tests/eval/anwaltniemeyer.de.index.html)<br>[tests/eval/knowledge-on-air.de.koa039.html](../../../../sources/adbar__trafilatura/tests/eval/knowledge-on-air.de.koa039.html)<br>[tests/eval/sass-ag.de.index.html](../../../../sources/adbar__trafilatura/tests/eval/sass-ag.de.index.html)<br>[tests/eval/wiki.piratenpartei.de.stammtisch.html](../../../../sources/adbar__trafilatura/tests/eval/wiki.piratenpartei.de.stammtisch.html)<br>[tests/eval/wiki.python.org.Download.html](../../../../sources/adbar__trafilatura/tests/eval/wiki.python.org.Download.html)<br>[docs/index.rst](../../../../sources/adbar__trafilatura/docs/index.rst) |
| spec | 1 | [tests/eval/von-der-see.de.design.html](../../../../sources/adbar__trafilatura/tests/eval/von-der-see.de.design.html) |
| eval | 1081 | [tests/__init__.py](../../../../sources/adbar__trafilatura/tests/__init__.py)<br>[tests/baseline_tests.py](../../../../sources/adbar__trafilatura/tests/baseline_tests.py)<br>[tests/cli_tests.py](../../../../sources/adbar__trafilatura/tests/cli_tests.py)<br>[tests/comparison_small.py](../../../../sources/adbar__trafilatura/tests/comparison_small.py)<br>[tests/conftest.py](../../../../sources/adbar__trafilatura/tests/conftest.py)<br>[tests/deduplication_tests.py](../../../../sources/adbar__trafilatura/tests/deduplication_tests.py)<br>[tests/downloads_tests.py](../../../../sources/adbar__trafilatura/tests/downloads_tests.py)<br>[tests/eval_authors.py](../../../../sources/adbar__trafilatura/tests/eval_authors.py) |
| security | 1 | [tests/eval/security.googleblog.com.protection.html](../../../../sources/adbar__trafilatura/tests/eval/security.googleblog.com.protection.html) |
| ci | 2 | [.github/workflows/codeql.yml](../../../../sources/adbar__trafilatura/.github/workflows/codeql.yml)<br>[.github/workflows/tests.yml](../../../../sources/adbar__trafilatura/.github/workflows/tests.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 42 | [README.md](../../../../sources/adbar__trafilatura/README.md)<br>[tests/README.rst](../../../../sources/adbar__trafilatura/tests/README.rst)<br>[docs/background.rst](../../../../sources/adbar__trafilatura/docs/background.rst)<br>[docs/compendium.rst](../../../../sources/adbar__trafilatura/docs/compendium.rst)<br>[docs/conf.py](../../../../sources/adbar__trafilatura/docs/conf.py)<br>[docs/corefunctions.rst](../../../../sources/adbar__trafilatura/docs/corefunctions.rst)<br>[docs/corpus-data.rst](../../../../sources/adbar__trafilatura/docs/corpus-data.rst)<br>[docs/crawls.rst](../../../../sources/adbar__trafilatura/docs/crawls.rst) |
| config | 2 | [pyproject.toml](../../../../sources/adbar__trafilatura/pyproject.toml)<br>[docs/Makefile](../../../../sources/adbar__trafilatura/docs/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1081 | [tests/__init__.py](../../../../sources/adbar__trafilatura/tests/__init__.py)<br>[tests/baseline_tests.py](../../../../sources/adbar__trafilatura/tests/baseline_tests.py)<br>[tests/cli_tests.py](../../../../sources/adbar__trafilatura/tests/cli_tests.py)<br>[tests/comparison_small.py](../../../../sources/adbar__trafilatura/tests/comparison_small.py)<br>[tests/conftest.py](../../../../sources/adbar__trafilatura/tests/conftest.py)<br>[tests/deduplication_tests.py](../../../../sources/adbar__trafilatura/tests/deduplication_tests.py) |
| CI workflow | 2 | [.github/workflows/codeql.yml](../../../../sources/adbar__trafilatura/.github/workflows/codeql.yml)<br>[.github/workflows/tests.yml](../../../../sources/adbar__trafilatura/.github/workflows/tests.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [tests/eval/security.googleblog.com.protection.html](../../../../sources/adbar__trafilatura/tests/eval/security.googleblog.com.protection.html) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `pyproject.toml`, `docs/Makefile`, `README.md`.
2. retrieval/memory/indexing 확인: `tests/eval/anwaltniemeyer.de.index.html`, `tests/eval/knowledge-on-air.de.koa039.html`, `tests/eval/sass-ag.de.index.html`.
3. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/baseline_tests.py`, `tests/cli_tests.py`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Python & Command line tool to gather text and metadata on the Web Crawling, scraping, extraction, output as CSV, JSON, H. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, tests, ci이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
