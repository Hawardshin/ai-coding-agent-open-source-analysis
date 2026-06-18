# linkonai2026-kr/kochunk Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Korean-first text chunking toolkit for RAG: sentence-correct (Kiwi), token-budgeted, structure-preserving, with a built-in quality-diagnostics harness and CLI.

## 요약

- 조사 단위: `sources/linkonai2026-kr__kochunk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 56 files, 15 directories, depth score 66, key references 5개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/kochunk/__main__.py이고, 의존성 단서는 openai, langchain, llamaindex, llama-index, transformers, llama, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | linkonai2026-kr/kochunk |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/linkonai2026-kr__kochunk](../../../../sources/linkonai2026-kr__kochunk) |
| Existing report | [reports/korea-trending/repositories/linkonai2026-kr__kochunk.md](../../../korea-trending/repositories/linkonai2026-kr__kochunk.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 56 / 15 |
| Max observed depth | 4 |
| Top directories | .github, benchmarks, examples, src, tests |
| Top extensions | .py: 47, .md: 4, (none): 2, .toml: 1, .typed: 1, .yml: 1 |
| Source patterns | cli-first, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 15 |
| src | source boundary | 6 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| examples | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | kochunk | kochunk |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | langchain, llamaindex, llama-index |
| vectorStores | none |
| modelRuntime | transformers, llama |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [src/kochunk/__main__.py](../../../../sources/linkonai2026-kr__kochunk/src/kochunk/__main__.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/linkonai2026-kr__kochunk/pyproject.toml) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/linkonai2026-kr__kochunk/.github/workflows/ci.yml) | ci support |
| eval | [tests/conftest.py](../../../../sources/linkonai2026-kr__kochunk/tests/conftest.py) | eval support |
| eval | [tests/test_cli.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_cli.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/kochunk/__main__.py](../../../../sources/linkonai2026-kr__kochunk/src/kochunk/__main__.py) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 3 | [src/kochunk/embed/__init__.py](../../../../sources/linkonai2026-kr__kochunk/src/kochunk/embed/__init__.py)<br>[src/kochunk/embed/base.py](../../../../sources/linkonai2026-kr__kochunk/src/kochunk/embed/base.py)<br>[src/kochunk/embed/sentence_transformers.py](../../../../sources/linkonai2026-kr__kochunk/src/kochunk/embed/sentence_transformers.py) |
| spec | 0 | not obvious |
| eval | 15 | [tests/conftest.py](../../../../sources/linkonai2026-kr__kochunk/tests/conftest.py)<br>[tests/test_cli.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_cli.py)<br>[tests/test_config_io.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_config_io.py)<br>[tests/test_integrations.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_integrations.py)<br>[tests/test_io.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_io.py)<br>[tests/test_property.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_property.py)<br>[tests/test_quality.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_quality.py)<br>[tests/test_recursive.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_recursive.py) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/linkonai2026-kr__kochunk/.github/workflows/ci.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/linkonai2026-kr__kochunk/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/linkonai2026-kr__kochunk/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 15 | [tests/conftest.py](../../../../sources/linkonai2026-kr__kochunk/tests/conftest.py)<br>[tests/test_cli.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_cli.py)<br>[tests/test_config_io.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_config_io.py)<br>[tests/test_integrations.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_integrations.py)<br>[tests/test_io.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_io.py)<br>[tests/test_property.py](../../../../sources/linkonai2026-kr__kochunk/tests/test_property.py) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/linkonai2026-kr__kochunk/.github/workflows/ci.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/kochunk/__main__.py`, `pyproject.toml`, `.github/workflows/ci.yml`.
2. Trace execution through entrypoints: `src/kochunk/__main__.py`.
3. Inspect retrieval/memory/indexing through: `src/kochunk/embed/__init__.py`, `src/kochunk/embed/base.py`, `src/kochunk/embed/sentence_transformers.py`.
4. Verify behavior through test/eval files: `tests/conftest.py`, `tests/test_cli.py`, `tests/test_config_io.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Korean first text chunking toolkit for RAG sentence correct Kiwi , token budgeted, structure preserving, with a built in. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, langchain이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
