# MinishLab/semble Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Fast and Accurate Code Search for Agents. Uses ~98% fewer tokens than grep+read

## 요약

- 조사 단위: `sources/MinishLab__semble` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 164 files, 18 directories, depth score 96, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_mcp.py, src/semble/mcp.py이고, 의존성 단서는 openai, mcp, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | MinishLab/semble |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 5231 |
| Forks | 226 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/MinishLab__semble](../../../../sources/MinishLab__semble) |
| Existing report | [reports/global-trending/repositories/MinishLab__semble.md](../../../global-trending/repositories/MinishLab__semble.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 164 / 18 |
| Max observed depth | 4 |
| Top directories | .github, assets, benchmarks, docs, src, tests |
| Top extensions | .json: 73, .py: 60, .md: 15, .png: 4, (none): 4, .yaml: 3, .cff: 1, .in: 1, .lock: 1, .toml: 1, .typed: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 23 |
| tests | validation surface | 19 |
| docs | documentation surface | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmarks | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | install | make install |
| test | Makefile | test | make test |
| test | Makefile | test-no-git | make test-no-git |
| quality | Makefile | lint | make lint |
| quality | Makefile | typecheck | make typecheck |
| utility | Makefile | fix | make fix |
| utility | Makefile | pre-commit | make pre-commit |
| utility | pyproject.toml | semble | semble |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | transformers |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/test_mcp.py](../../../../sources/MinishLab__semble/tests/test_mcp.py) | mcp signal |
| mcp | [src/semble/mcp.py](../../../../sources/MinishLab__semble/src/semble/mcp.py) | mcp signal |
| agentRuntime | [src/semble/installer/agents.py](../../../../sources/MinishLab__semble/src/semble/installer/agents.py) | agentRuntime signal |
| agentRuntime | [src/semble/agents/antigravity.md](../../../../sources/MinishLab__semble/src/semble/agents/antigravity.md) | agentRuntime signal |
| agentRuntime | [src/semble/agents/claude.md](../../../../sources/MinishLab__semble/src/semble/agents/claude.md) | agentRuntime signal |
| agentRuntime | [src/semble/agents/commandcode.md](../../../../sources/MinishLab__semble/src/semble/agents/commandcode.md) | agentRuntime signal |
| instruction | [src/semble/agents/gemini.md](../../../../sources/MinishLab__semble/src/semble/agents/gemini.md) | instruction signal |
| config | [Makefile](../../../../sources/MinishLab__semble/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/MinishLab__semble/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/MinishLab__semble/uv.lock) | config signal |
| ci | [.github/workflows/ci.yaml](../../../../sources/MinishLab__semble/.github/workflows/ci.yaml) | ci support |
| ci | [.github/workflows/release.yaml](../../../../sources/MinishLab__semble/.github/workflows/release.yaml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 12 | [src/semble/installer/agents.py](../../../../sources/MinishLab__semble/src/semble/installer/agents.py)<br>[src/semble/agents/antigravity.md](../../../../sources/MinishLab__semble/src/semble/agents/antigravity.md)<br>[src/semble/agents/claude.md](../../../../sources/MinishLab__semble/src/semble/agents/claude.md)<br>[src/semble/agents/commandcode.md](../../../../sources/MinishLab__semble/src/semble/agents/commandcode.md)<br>[src/semble/agents/copilot.md](../../../../sources/MinishLab__semble/src/semble/agents/copilot.md)<br>[src/semble/agents/cursor.md](../../../../sources/MinishLab__semble/src/semble/agents/cursor.md)<br>[src/semble/agents/gemini.md](../../../../sources/MinishLab__semble/src/semble/agents/gemini.md)<br>[src/semble/agents/kiro.md](../../../../sources/MinishLab__semble/src/semble/agents/kiro.md) |
| mcp | 2 | [tests/test_mcp.py](../../../../sources/MinishLab__semble/tests/test_mcp.py)<br>[src/semble/mcp.py](../../../../sources/MinishLab__semble/src/semble/mcp.py) |
| retrieval | 10 | [tests/index/test_dense.py](../../../../sources/MinishLab__semble/tests/index/test_dense.py)<br>[tests/index/test_index.py](../../../../sources/MinishLab__semble/tests/index/test_index.py)<br>[src/semble/index/__init__.py](../../../../sources/MinishLab__semble/src/semble/index/__init__.py)<br>[src/semble/index/create.py](../../../../sources/MinishLab__semble/src/semble/index/create.py)<br>[src/semble/index/dense.py](../../../../sources/MinishLab__semble/src/semble/index/dense.py)<br>[src/semble/index/file_walker.py](../../../../sources/MinishLab__semble/src/semble/index/file_walker.py)<br>[src/semble/index/files.py](../../../../sources/MinishLab__semble/src/semble/index/files.py)<br>[src/semble/index/index.py](../../../../sources/MinishLab__semble/src/semble/index/index.py) |
| spec | 0 | not obvious |
| eval | 17 | [tests/__init__.py](../../../../sources/MinishLab__semble/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/MinishLab__semble/tests/conftest.py)<br>[tests/test_cache.py](../../../../sources/MinishLab__semble/tests/test_cache.py)<br>[tests/test_chunker.py](../../../../sources/MinishLab__semble/tests/test_chunker.py)<br>[tests/test_cli.py](../../../../sources/MinishLab__semble/tests/test_cli.py)<br>[tests/test_file_walker.py](../../../../sources/MinishLab__semble/tests/test_file_walker.py)<br>[tests/test_files.py](../../../../sources/MinishLab__semble/tests/test_files.py)<br>[tests/test_git.py](../../../../sources/MinishLab__semble/tests/test_git.py) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/ci.yaml](../../../../sources/MinishLab__semble/.github/workflows/ci.yaml)<br>[.github/workflows/release.yaml](../../../../sources/MinishLab__semble/.github/workflows/release.yaml) |
| container | 0 | not obvious |
| instruction | 2 | [src/semble/agents/claude.md](../../../../sources/MinishLab__semble/src/semble/agents/claude.md)<br>[src/semble/agents/gemini.md](../../../../sources/MinishLab__semble/src/semble/agents/gemini.md) |
| docs | 3 | [README.md](../../../../sources/MinishLab__semble/README.md)<br>[docs/installation.md](../../../../sources/MinishLab__semble/docs/installation.md)<br>[benchmarks/README.md](../../../../sources/MinishLab__semble/benchmarks/README.md) |
| config | 3 | [Makefile](../../../../sources/MinishLab__semble/Makefile)<br>[pyproject.toml](../../../../sources/MinishLab__semble/pyproject.toml)<br>[uv.lock](../../../../sources/MinishLab__semble/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 17 | [tests/__init__.py](../../../../sources/MinishLab__semble/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/MinishLab__semble/tests/conftest.py)<br>[tests/test_cache.py](../../../../sources/MinishLab__semble/tests/test_cache.py)<br>[tests/test_chunker.py](../../../../sources/MinishLab__semble/tests/test_chunker.py)<br>[tests/test_cli.py](../../../../sources/MinishLab__semble/tests/test_cli.py)<br>[tests/test_file_walker.py](../../../../sources/MinishLab__semble/tests/test_file_walker.py) |
| CI workflows | 2 | [.github/workflows/ci.yaml](../../../../sources/MinishLab__semble/.github/workflows/ci.yaml)<br>[.github/workflows/release.yaml](../../../../sources/MinishLab__semble/.github/workflows/release.yaml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 2 | [src/semble/agents/claude.md](../../../../sources/MinishLab__semble/src/semble/agents/claude.md)<br>[src/semble/agents/gemini.md](../../../../sources/MinishLab__semble/src/semble/agents/gemini.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/test_mcp.py`, `src/semble/mcp.py`, `src/semble/installer/agents.py`.
2. Map agent/tool runtime through: `src/semble/installer/agents.py`, `src/semble/agents/antigravity.md`, `src/semble/agents/claude.md`.
3. Inspect retrieval/memory/indexing through: `tests/index/test_dense.py`, `tests/index/test_index.py`, `src/semble/index/__init__.py`.
4. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/test_cache.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Fast and Accurate Code Search for Agents. Uses ~98% fewer tokens than grep+read. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, LICENSE, openai이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
