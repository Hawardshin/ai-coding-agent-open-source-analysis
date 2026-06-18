# ceaksan/mcp-code-search Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 23 files, 3 directories.

## 요약

- 조사 단위: `sources/ceaksan__mcp-code-search` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 23 files, 3 directories, depth score 76, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/mcp_code_search/__main__.py, src/mcp_code_search/server.py이고, 의존성 단서는 mcp, transformers, ollama, llama, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | ceaksan/mcp-code-search |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/ceaksan__mcp-code-search](../../../../sources/ceaksan__mcp-code-search) |
| Existing report | [reports/clone-structures/ceaksan__mcp-code-search.md](../../../clone-structures/ceaksan__mcp-code-search.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 23 / 3 |
| Max observed depth | 3 |
| Top directories | src, tests |
| Top extensions | .py: 18, (none): 2, .lock: 1, .md: 1, .toml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 14 |
| tests | validation surface | 8 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | mcp-code-search | mcp-code-search |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | transformers, ollama, llama |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [src/mcp_code_search/__main__.py](../../../../sources/ceaksan__mcp-code-search/src/mcp_code_search/__main__.py) | entrypoints signal |
| entrypoints | [src/mcp_code_search/server.py](../../../../sources/ceaksan__mcp-code-search/src/mcp_code_search/server.py) | entrypoints signal |
| docs | [README.md](../../../../sources/ceaksan__mcp-code-search/README.md) | docs signal |
| eval | [tests/__init__.py](../../../../sources/ceaksan__mcp-code-search/tests/__init__.py) | eval signal |
| eval | [tests/test_chunker.py](../../../../sources/ceaksan__mcp-code-search/tests/test_chunker.py) | eval signal |
| eval | [tests/test_config.py](../../../../sources/ceaksan__mcp-code-search/tests/test_config.py) | eval signal |
| eval | [tests/test_embedder.py](../../../../sources/ceaksan__mcp-code-search/tests/test_embedder.py) | eval signal |
| config | [pyproject.toml](../../../../sources/ceaksan__mcp-code-search/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/ceaksan__mcp-code-search/uv.lock) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/mcp_code_search/__main__.py](../../../../sources/ceaksan__mcp-code-search/src/mcp_code_search/__main__.py)<br>[src/mcp_code_search/server.py](../../../../sources/ceaksan__mcp-code-search/src/mcp_code_search/server.py) |
| agentRuntime | 0 | not obvious |
| mcp | 11 | [src/mcp_code_search/__init__.py](../../../../sources/ceaksan__mcp-code-search/src/mcp_code_search/__init__.py)<br>[src/mcp_code_search/__main__.py](../../../../sources/ceaksan__mcp-code-search/src/mcp_code_search/__main__.py)<br>[src/mcp_code_search/chunker.py](../../../../sources/ceaksan__mcp-code-search/src/mcp_code_search/chunker.py)<br>[src/mcp_code_search/config.py](../../../../sources/ceaksan__mcp-code-search/src/mcp_code_search/config.py)<br>[src/mcp_code_search/embedder.py](../../../../sources/ceaksan__mcp-code-search/src/mcp_code_search/embedder.py)<br>[src/mcp_code_search/indexer.py](../../../../sources/ceaksan__mcp-code-search/src/mcp_code_search/indexer.py)<br>[src/mcp_code_search/languages.py](../../../../sources/ceaksan__mcp-code-search/src/mcp_code_search/languages.py)<br>[src/mcp_code_search/models.py](../../../../sources/ceaksan__mcp-code-search/src/mcp_code_search/models.py) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 7 | [tests/__init__.py](../../../../sources/ceaksan__mcp-code-search/tests/__init__.py)<br>[tests/test_chunker.py](../../../../sources/ceaksan__mcp-code-search/tests/test_chunker.py)<br>[tests/test_config.py](../../../../sources/ceaksan__mcp-code-search/tests/test_config.py)<br>[tests/test_embedder.py](../../../../sources/ceaksan__mcp-code-search/tests/test_embedder.py)<br>[tests/test_indexer.py](../../../../sources/ceaksan__mcp-code-search/tests/test_indexer.py)<br>[tests/test_store.py](../../../../sources/ceaksan__mcp-code-search/tests/test_store.py)<br>[tests/test_watcher.py](../../../../sources/ceaksan__mcp-code-search/tests/test_watcher.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/ceaksan__mcp-code-search/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/ceaksan__mcp-code-search/pyproject.toml)<br>[uv.lock](../../../../sources/ceaksan__mcp-code-search/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 7 | [tests/__init__.py](../../../../sources/ceaksan__mcp-code-search/tests/__init__.py)<br>[tests/test_chunker.py](../../../../sources/ceaksan__mcp-code-search/tests/test_chunker.py)<br>[tests/test_config.py](../../../../sources/ceaksan__mcp-code-search/tests/test_config.py)<br>[tests/test_embedder.py](../../../../sources/ceaksan__mcp-code-search/tests/test_embedder.py)<br>[tests/test_indexer.py](../../../../sources/ceaksan__mcp-code-search/tests/test_indexer.py)<br>[tests/test_store.py](../../../../sources/ceaksan__mcp-code-search/tests/test_store.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/mcp_code_search/__main__.py`, `src/mcp_code_search/server.py`, `README.md`.
2. Trace execution through entrypoints: `src/mcp_code_search/__main__.py`, `src/mcp_code_search/server.py`.
3. Verify behavior through test/eval files: `tests/__init__.py`, `tests/test_chunker.py`, `tests/test_config.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Local clone structure analysis 23 files, 3 directories.. 핵심 구조 신호는 pyproject.toml, README.md, LICENSE, mcp, transformers, ollama이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing입니다.
