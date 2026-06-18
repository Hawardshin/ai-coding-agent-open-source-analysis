# Aider-AI/aider 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 685 files, 89 directories.

## 요약

- 조사 단위: `sources/Aider-AI__aider` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 685 files, 89 directories, depth score 113, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=aider/__main__.py, aider/main.py이고, 의존성 단서는 openai, fastapi, pydantic, click, typer, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Aider-AI/aider |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 46390 |
| Forks | 4615 |
| License | Apache-2.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/Aider-AI__aider](../../../../sources/Aider-AI__aider) |
| 기존 보고서 | [reports/global-trending/repositories/Aider-AI__aider.md](../../../global-trending/repositories/Aider-AI__aider.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 685 / 89 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, aider, benchmark, docker, requirements, scripts, tests |
| 상위 확장자 | .py: 147, .md: 143, .mp3: 111, .scm: 58, .jpg: 37, .yml: 28, .svg: 23, .sh: 16, .js: 12, .png: 12, .txt: 11, .in: 9 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 41 |
| .github | ci surface | 1 |
| aider | top-level component | 1 |
| benchmark | validation surface | 1 |
| docker | documentation surface | 1 |
| requirements | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | aider | aider |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | click, typer |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [aider/__main__.py](../../../../sources/Aider-AI__aider/aider/__main__.py) | entrypoints signal |
| entrypoints | [aider/main.py](../../../../sources/Aider-AI__aider/aider/main.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/Aider-AI__aider/pyproject.toml) | config signal |
| config | [requirements.txt](../../../../sources/Aider-AI__aider/requirements.txt) | config signal |
| config | [requirements/common-constraints.txt](../../../../sources/Aider-AI__aider/requirements/common-constraints.txt) | config signal |
| config | [requirements/requirements-browser.txt](../../../../sources/Aider-AI__aider/requirements/requirements-browser.txt) | config signal |
| docs | [README.md](../../../../sources/Aider-AI__aider/README.md) | docs signal |
| docs | [benchmark/README.md](../../../../sources/Aider-AI__aider/benchmark/README.md) | docs signal |
| docs | [aider/website/_config.yml](../../../../sources/Aider-AI__aider/aider/website/_config.yml) | docs signal |
| docs | [aider/website/Gemfile](../../../../sources/Aider-AI__aider/aider/website/Gemfile) | docs signal |
| eval | [tests/__init__.py](../../../../sources/Aider-AI__aider/tests/__init__.py) | eval signal |
| eval | [tests/scrape/test_playwright_disable.py](../../../../sources/Aider-AI__aider/tests/scrape/test_playwright_disable.py) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [aider/__main__.py](../../../../sources/Aider-AI__aider/aider/__main__.py)<br>[aider/main.py](../../../../sources/Aider-AI__aider/aider/main.py) |
| agentRuntime | 2 | [aider/coders/context_coder.py](../../../../sources/Aider-AI__aider/aider/coders/context_coder.py)<br>[aider/coders/context_prompts.py](../../../../sources/Aider-AI__aider/aider/coders/context_prompts.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 7 | [aider/website/index.html](../../../../sources/Aider-AI__aider/aider/website/index.html)<br>[aider/website/share/index.md](../../../../sources/Aider-AI__aider/aider/website/share/index.md)<br>[aider/website/docs/index.md](../../../../sources/Aider-AI__aider/aider/website/docs/index.md)<br>[aider/website/docs/recordings/index.md](../../../../sources/Aider-AI__aider/aider/website/docs/recordings/index.md)<br>[aider/website/docs/leaderboards/index.md](../../../../sources/Aider-AI__aider/aider/website/docs/leaderboards/index.md)<br>[aider/website/blog/index.html](../../../../sources/Aider-AI__aider/aider/website/blog/index.html)<br>[aider/website/_includes/leaderboard_graph.html](../../../../sources/Aider-AI__aider/aider/website/_includes/leaderboard_graph.html) |
| spec | 14 | [requirements.txt](../../../../sources/Aider-AI__aider/requirements.txt)<br>[requirements/common-constraints.txt](../../../../sources/Aider-AI__aider/requirements/common-constraints.txt)<br>[requirements/pydub.in](../../../../sources/Aider-AI__aider/requirements/pydub.in)<br>[requirements/python-compat.in](../../../../sources/Aider-AI__aider/requirements/python-compat.in)<br>[requirements/requirements-browser.in](../../../../sources/Aider-AI__aider/requirements/requirements-browser.in)<br>[requirements/requirements-browser.txt](../../../../sources/Aider-AI__aider/requirements/requirements-browser.txt)<br>[requirements/requirements-dev.in](../../../../sources/Aider-AI__aider/requirements/requirements-dev.in)<br>[requirements/requirements-dev.txt](../../../../sources/Aider-AI__aider/requirements/requirements-dev.txt) |
| eval | 122 | [tests/__init__.py](../../../../sources/Aider-AI__aider/tests/__init__.py)<br>[tests/scrape/test_playwright_disable.py](../../../../sources/Aider-AI__aider/tests/scrape/test_playwright_disable.py)<br>[tests/scrape/test_scrape.py](../../../../sources/Aider-AI__aider/tests/scrape/test_scrape.py)<br>[tests/help/test_help.py](../../../../sources/Aider-AI__aider/tests/help/test_help.py)<br>[tests/fixtures/chat-history-search-replace-gold.txt](../../../../sources/Aider-AI__aider/tests/fixtures/chat-history-search-replace-gold.txt)<br>[tests/fixtures/chat-history.md](../../../../sources/Aider-AI__aider/tests/fixtures/chat-history.md)<br>[tests/fixtures/sample-code-base-repo-map.txt](../../../../sources/Aider-AI__aider/tests/fixtures/sample-code-base-repo-map.txt)<br>[tests/fixtures/watch_question.js](../../../../sources/Aider-AI__aider/tests/fixtures/watch_question.js) |
| security | 0 | 명확하지 않음 |
| ci | 10 | [.github/workflows/check_pypi_version.yml](../../../../sources/Aider-AI__aider/.github/workflows/check_pypi_version.yml)<br>[.github/workflows/docker-build-test.yml](../../../../sources/Aider-AI__aider/.github/workflows/docker-build-test.yml)<br>[.github/workflows/docker-release.yml](../../../../sources/Aider-AI__aider/.github/workflows/docker-release.yml)<br>[.github/workflows/issues.yml](../../../../sources/Aider-AI__aider/.github/workflows/issues.yml)<br>[.github/workflows/pages.yml](../../../../sources/Aider-AI__aider/.github/workflows/pages.yml)<br>[.github/workflows/pre-commit.yml](../../../../sources/Aider-AI__aider/.github/workflows/pre-commit.yml)<br>[.github/workflows/release.yml](../../../../sources/Aider-AI__aider/.github/workflows/release.yml)<br>[.github/workflows/ubuntu-tests.yml](../../../../sources/Aider-AI__aider/.github/workflows/ubuntu-tests.yml) |
| container | 3 | [scripts/Dockerfile.jekyll](../../../../sources/Aider-AI__aider/scripts/Dockerfile.jekyll)<br>[docker/Dockerfile](../../../../sources/Aider-AI__aider/docker/Dockerfile)<br>[benchmark/Dockerfile](../../../../sources/Aider-AI__aider/benchmark/Dockerfile) |
| instruction | 1 | [aider/website/docs/llms/gemini.md](../../../../sources/Aider-AI__aider/aider/website/docs/llms/gemini.md) |
| docs | 377 | [README.md](../../../../sources/Aider-AI__aider/README.md)<br>[benchmark/README.md](../../../../sources/Aider-AI__aider/benchmark/README.md)<br>[aider/website/_config.yml](../../../../sources/Aider-AI__aider/aider/website/_config.yml)<br>[aider/website/Gemfile](../../../../sources/Aider-AI__aider/aider/website/Gemfile)<br>[aider/website/HISTORY.md](../../../../sources/Aider-AI__aider/aider/website/HISTORY.md)<br>[aider/website/index.html](../../../../sources/Aider-AI__aider/aider/website/index.html)<br>[aider/website/install.ps1](../../../../sources/Aider-AI__aider/aider/website/install.ps1)<br>[aider/website/install.sh](../../../../sources/Aider-AI__aider/aider/website/install.sh) |
| config | 7 | [pyproject.toml](../../../../sources/Aider-AI__aider/pyproject.toml)<br>[requirements.txt](../../../../sources/Aider-AI__aider/requirements.txt)<br>[requirements/common-constraints.txt](../../../../sources/Aider-AI__aider/requirements/common-constraints.txt)<br>[requirements/requirements-browser.txt](../../../../sources/Aider-AI__aider/requirements/requirements-browser.txt)<br>[requirements/requirements-dev.txt](../../../../sources/Aider-AI__aider/requirements/requirements-dev.txt)<br>[requirements/requirements-help.txt](../../../../sources/Aider-AI__aider/requirements/requirements-help.txt)<br>[requirements/requirements-playwright.txt](../../../../sources/Aider-AI__aider/requirements/requirements-playwright.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 122 | [tests/__init__.py](../../../../sources/Aider-AI__aider/tests/__init__.py)<br>[tests/scrape/test_playwright_disable.py](../../../../sources/Aider-AI__aider/tests/scrape/test_playwright_disable.py)<br>[tests/scrape/test_scrape.py](../../../../sources/Aider-AI__aider/tests/scrape/test_scrape.py)<br>[tests/help/test_help.py](../../../../sources/Aider-AI__aider/tests/help/test_help.py)<br>[tests/fixtures/chat-history-search-replace-gold.txt](../../../../sources/Aider-AI__aider/tests/fixtures/chat-history-search-replace-gold.txt)<br>[tests/fixtures/chat-history.md](../../../../sources/Aider-AI__aider/tests/fixtures/chat-history.md) |
| CI workflow | 10 | [.github/workflows/check_pypi_version.yml](../../../../sources/Aider-AI__aider/.github/workflows/check_pypi_version.yml)<br>[.github/workflows/docker-build-test.yml](../../../../sources/Aider-AI__aider/.github/workflows/docker-build-test.yml)<br>[.github/workflows/docker-release.yml](../../../../sources/Aider-AI__aider/.github/workflows/docker-release.yml)<br>[.github/workflows/issues.yml](../../../../sources/Aider-AI__aider/.github/workflows/issues.yml)<br>[.github/workflows/pages.yml](../../../../sources/Aider-AI__aider/.github/workflows/pages.yml)<br>[.github/workflows/pre-commit.yml](../../../../sources/Aider-AI__aider/.github/workflows/pre-commit.yml) |
| 컨테이너/배포 | 3 | [scripts/Dockerfile.jekyll](../../../../sources/Aider-AI__aider/scripts/Dockerfile.jekyll)<br>[docker/Dockerfile](../../../../sources/Aider-AI__aider/docker/Dockerfile)<br>[benchmark/Dockerfile](../../../../sources/Aider-AI__aider/benchmark/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [aider/website/docs/llms/gemini.md](../../../../sources/Aider-AI__aider/aider/website/docs/llms/gemini.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `aider/__main__.py`, `aider/main.py`, `pyproject.toml`.
2. entrypoint를 따라 실행 흐름 확인: `aider/__main__.py`, `aider/main.py`.
3. agent/tool runtime 매핑: `aider/coders/context_coder.py`, `aider/coders/context_prompts.py`.
4. retrieval/memory/indexing 확인: `aider/website/index.html`, `aider/website/share/index.md`, `aider/website/docs/index.md`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/scrape/test_playwright_disable.py`, `tests/scrape/test_scrape.py`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Local clone structure analysis 685 files, 89 directories.. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, openai, fastapi이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 큰 메타데이터 위험이 명확하지 않음입니다.
