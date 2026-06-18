# Aider-AI/aider Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 685 files, 89 directories.

## 요약

- 조사 단위: `sources/Aider-AI__aider` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 685 files, 89 directories, depth score 125, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=aider/__main__.py, aider/main.py이고, 의존성 단서는 openai, fastapi, pydantic, click, typer, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | Aider-AI/aider |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 46390 |
| Forks | 4615 |
| License | Apache-2.0 |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/Aider-AI__aider](../../../../sources/Aider-AI__aider) |
| Existing report | [reports/global-trending/repositories/Aider-AI__aider.md](../../../global-trending/repositories/Aider-AI__aider.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 685 / 89 |
| Max observed depth | 6 |
| Top directories | .github, aider, benchmark, docker, requirements, scripts, tests |
| Top extensions | .py: 147, .md: 143, .mp3: 111, .scm: 58, .jpg: 37, .yml: 28, .svg: 23, .sh: 16, .js: 12, .png: 12, .txt: 11, .in: 9 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 41 |
| .github | ci surface | 1 |
| aider | top-level component | 1 |
| benchmark | validation surface | 1 |
| docker | documentation surface | 1 |
| requirements | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | aider | aider |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | fastapi |
| developerSurface | click, typer |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [aider/__main__.py](../../../../sources/Aider-AI__aider/aider/__main__.py)<br>[aider/main.py](../../../../sources/Aider-AI__aider/aider/main.py) |
| agentRuntime | 2 | [aider/coders/context_coder.py](../../../../sources/Aider-AI__aider/aider/coders/context_coder.py)<br>[aider/coders/context_prompts.py](../../../../sources/Aider-AI__aider/aider/coders/context_prompts.py) |
| mcp | 0 | not obvious |
| retrieval | 7 | [aider/website/index.html](../../../../sources/Aider-AI__aider/aider/website/index.html)<br>[aider/website/share/index.md](../../../../sources/Aider-AI__aider/aider/website/share/index.md)<br>[aider/website/docs/index.md](../../../../sources/Aider-AI__aider/aider/website/docs/index.md)<br>[aider/website/docs/recordings/index.md](../../../../sources/Aider-AI__aider/aider/website/docs/recordings/index.md)<br>[aider/website/docs/leaderboards/index.md](../../../../sources/Aider-AI__aider/aider/website/docs/leaderboards/index.md)<br>[aider/website/blog/index.html](../../../../sources/Aider-AI__aider/aider/website/blog/index.html)<br>[aider/website/_includes/leaderboard_graph.html](../../../../sources/Aider-AI__aider/aider/website/_includes/leaderboard_graph.html) |
| spec | 14 | [requirements.txt](../../../../sources/Aider-AI__aider/requirements.txt)<br>[requirements/common-constraints.txt](../../../../sources/Aider-AI__aider/requirements/common-constraints.txt)<br>[requirements/pydub.in](../../../../sources/Aider-AI__aider/requirements/pydub.in)<br>[requirements/python-compat.in](../../../../sources/Aider-AI__aider/requirements/python-compat.in)<br>[requirements/requirements-browser.in](../../../../sources/Aider-AI__aider/requirements/requirements-browser.in)<br>[requirements/requirements-browser.txt](../../../../sources/Aider-AI__aider/requirements/requirements-browser.txt)<br>[requirements/requirements-dev.in](../../../../sources/Aider-AI__aider/requirements/requirements-dev.in)<br>[requirements/requirements-dev.txt](../../../../sources/Aider-AI__aider/requirements/requirements-dev.txt) |
| eval | 122 | [tests/__init__.py](../../../../sources/Aider-AI__aider/tests/__init__.py)<br>[tests/scrape/test_playwright_disable.py](../../../../sources/Aider-AI__aider/tests/scrape/test_playwright_disable.py)<br>[tests/scrape/test_scrape.py](../../../../sources/Aider-AI__aider/tests/scrape/test_scrape.py)<br>[tests/help/test_help.py](../../../../sources/Aider-AI__aider/tests/help/test_help.py)<br>[tests/fixtures/chat-history-search-replace-gold.txt](../../../../sources/Aider-AI__aider/tests/fixtures/chat-history-search-replace-gold.txt)<br>[tests/fixtures/chat-history.md](../../../../sources/Aider-AI__aider/tests/fixtures/chat-history.md)<br>[tests/fixtures/sample-code-base-repo-map.txt](../../../../sources/Aider-AI__aider/tests/fixtures/sample-code-base-repo-map.txt)<br>[tests/fixtures/watch_question.js](../../../../sources/Aider-AI__aider/tests/fixtures/watch_question.js) |
| security | 0 | not obvious |
| ci | 10 | [.github/workflows/check_pypi_version.yml](../../../../sources/Aider-AI__aider/.github/workflows/check_pypi_version.yml)<br>[.github/workflows/docker-build-test.yml](../../../../sources/Aider-AI__aider/.github/workflows/docker-build-test.yml)<br>[.github/workflows/docker-release.yml](../../../../sources/Aider-AI__aider/.github/workflows/docker-release.yml)<br>[.github/workflows/issues.yml](../../../../sources/Aider-AI__aider/.github/workflows/issues.yml)<br>[.github/workflows/pages.yml](../../../../sources/Aider-AI__aider/.github/workflows/pages.yml)<br>[.github/workflows/pre-commit.yml](../../../../sources/Aider-AI__aider/.github/workflows/pre-commit.yml)<br>[.github/workflows/release.yml](../../../../sources/Aider-AI__aider/.github/workflows/release.yml)<br>[.github/workflows/ubuntu-tests.yml](../../../../sources/Aider-AI__aider/.github/workflows/ubuntu-tests.yml) |
| container | 3 | [scripts/Dockerfile.jekyll](../../../../sources/Aider-AI__aider/scripts/Dockerfile.jekyll)<br>[docker/Dockerfile](../../../../sources/Aider-AI__aider/docker/Dockerfile)<br>[benchmark/Dockerfile](../../../../sources/Aider-AI__aider/benchmark/Dockerfile) |
| instruction | 1 | [aider/website/docs/llms/gemini.md](../../../../sources/Aider-AI__aider/aider/website/docs/llms/gemini.md) |
| docs | 377 | [README.md](../../../../sources/Aider-AI__aider/README.md)<br>[benchmark/README.md](../../../../sources/Aider-AI__aider/benchmark/README.md)<br>[aider/website/_config.yml](../../../../sources/Aider-AI__aider/aider/website/_config.yml)<br>[aider/website/Gemfile](../../../../sources/Aider-AI__aider/aider/website/Gemfile)<br>[aider/website/HISTORY.md](../../../../sources/Aider-AI__aider/aider/website/HISTORY.md)<br>[aider/website/index.html](../../../../sources/Aider-AI__aider/aider/website/index.html)<br>[aider/website/install.ps1](../../../../sources/Aider-AI__aider/aider/website/install.ps1)<br>[aider/website/install.sh](../../../../sources/Aider-AI__aider/aider/website/install.sh) |
| config | 7 | [pyproject.toml](../../../../sources/Aider-AI__aider/pyproject.toml)<br>[requirements.txt](../../../../sources/Aider-AI__aider/requirements.txt)<br>[requirements/common-constraints.txt](../../../../sources/Aider-AI__aider/requirements/common-constraints.txt)<br>[requirements/requirements-browser.txt](../../../../sources/Aider-AI__aider/requirements/requirements-browser.txt)<br>[requirements/requirements-dev.txt](../../../../sources/Aider-AI__aider/requirements/requirements-dev.txt)<br>[requirements/requirements-help.txt](../../../../sources/Aider-AI__aider/requirements/requirements-help.txt)<br>[requirements/requirements-playwright.txt](../../../../sources/Aider-AI__aider/requirements/requirements-playwright.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 122 | [tests/__init__.py](../../../../sources/Aider-AI__aider/tests/__init__.py)<br>[tests/scrape/test_playwright_disable.py](../../../../sources/Aider-AI__aider/tests/scrape/test_playwright_disable.py)<br>[tests/scrape/test_scrape.py](../../../../sources/Aider-AI__aider/tests/scrape/test_scrape.py)<br>[tests/help/test_help.py](../../../../sources/Aider-AI__aider/tests/help/test_help.py)<br>[tests/fixtures/chat-history-search-replace-gold.txt](../../../../sources/Aider-AI__aider/tests/fixtures/chat-history-search-replace-gold.txt)<br>[tests/fixtures/chat-history.md](../../../../sources/Aider-AI__aider/tests/fixtures/chat-history.md) |
| CI workflows | 10 | [.github/workflows/check_pypi_version.yml](../../../../sources/Aider-AI__aider/.github/workflows/check_pypi_version.yml)<br>[.github/workflows/docker-build-test.yml](../../../../sources/Aider-AI__aider/.github/workflows/docker-build-test.yml)<br>[.github/workflows/docker-release.yml](../../../../sources/Aider-AI__aider/.github/workflows/docker-release.yml)<br>[.github/workflows/issues.yml](../../../../sources/Aider-AI__aider/.github/workflows/issues.yml)<br>[.github/workflows/pages.yml](../../../../sources/Aider-AI__aider/.github/workflows/pages.yml)<br>[.github/workflows/pre-commit.yml](../../../../sources/Aider-AI__aider/.github/workflows/pre-commit.yml) |
| Containers / deploy | 3 | [scripts/Dockerfile.jekyll](../../../../sources/Aider-AI__aider/scripts/Dockerfile.jekyll)<br>[docker/Dockerfile](../../../../sources/Aider-AI__aider/docker/Dockerfile)<br>[benchmark/Dockerfile](../../../../sources/Aider-AI__aider/benchmark/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [aider/website/docs/llms/gemini.md](../../../../sources/Aider-AI__aider/aider/website/docs/llms/gemini.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `aider/__main__.py`, `aider/main.py`, `pyproject.toml`.
2. Trace execution through entrypoints: `aider/__main__.py`, `aider/main.py`.
3. Map agent/tool runtime through: `aider/coders/context_coder.py`, `aider/coders/context_prompts.py`.
4. Inspect retrieval/memory/indexing through: `aider/website/index.html`, `aider/website/share/index.md`, `aider/website/docs/index.md`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/scrape/test_playwright_disable.py`, `tests/scrape/test_scrape.py`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Local clone structure analysis 685 files, 89 directories.. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, openai, fastapi이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 major metadata risk not obvious입니다.
