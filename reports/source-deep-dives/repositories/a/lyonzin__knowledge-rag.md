# lyonzin/knowledge-rag Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

[knowledge-rag] - Drop docs, search instantly from Claude Code — 12 MCP tools, 20 format parsers, hybrid search + reranking. Zero servers, zero API keys, 100% local.

## 요약

- 조사 단위: `sources/lyonzin__knowledge-rag` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 108 files, 17 directories, depth score 114, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp_server/__init__.py, mcp_server/config.py, mcp_server/guarded.py이고, 의존성 단서는 claude, mcp, ollama, llama, chroma, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | lyonzin/knowledge-rag |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 96 |
| Forks | 17 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/lyonzin__knowledge-rag](../../../../sources/lyonzin__knowledge-rag) |
| Existing report | [reports/global-trending/repositories/lyonzin__knowledge-rag.md](../../../global-trending/repositories/lyonzin__knowledge-rag.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 108 / 17 |
| Max observed depth | 4 |
| Top directories | .github, bench, docs, examples, mcp_server, npm, presets, scripts, tests |
| Top extensions | .py: 46, .yaml: 13, .yml: 12, .md: 8, .json: 5, (none): 5, .txt: 4, .js: 2, .toml: 2, .c: 1, .cpp: 1, .csv: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 42 |
| docs | documentation surface | 2 |
| .github | ci surface | 1 |
| bench | validation surface | 1 |
| examples | top-level component | 1 |
| examples/mcp-config-single-instance.json | examples workspace | 1 |
| mcp_server | source boundary | 1 |
| npm | top-level component | 1 |
| presets | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | knowledge-rag | knowledge-rag |
| utility | pyproject.toml | knowledge-rag-guarded | knowledge-rag-guarded |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | claude |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | chroma |
| modelRuntime | ollama, llama |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [mcp_server/__init__.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/__init__.py) | mcp signal |
| mcp | [mcp_server/config.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/config.py) | mcp signal |
| mcp | [mcp_server/guarded.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/guarded.py) | mcp signal |
| mcp | [mcp_server/ingestion.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/ingestion.py) | mcp signal |
| entrypoints | [npm/bin/cli.js](../../../../sources/lyonzin__knowledge-rag/npm/bin/cli.js) | entrypoints signal |
| entrypoints | [mcp_server/server.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/server.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/lyonzin__knowledge-rag/pyproject.toml) | config signal |
| config | [requirements-dev.txt](../../../../sources/lyonzin__knowledge-rag/requirements-dev.txt) | config signal |
| config | [requirements.txt](../../../../sources/lyonzin__knowledge-rag/requirements.txt) | config signal |
| config | [npm/package.json](../../../../sources/lyonzin__knowledge-rag/npm/package.json) | config signal |
| ci | [.github/workflows/bench-pages.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/bench-pages.yml) | ci support |
| ci | [.github/workflows/ci.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/ci.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [npm/bin/cli.js](../../../../sources/lyonzin__knowledge-rag/npm/bin/cli.js)<br>[mcp_server/server.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/server.py) |
| agentRuntime | 0 | not obvious |
| mcp | 15 | [mcp_server/__init__.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/__init__.py)<br>[mcp_server/config.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/config.py)<br>[mcp_server/guarded.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/guarded.py)<br>[mcp_server/ingestion.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/ingestion.py)<br>[mcp_server/instance_lock.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/instance_lock.py)<br>[mcp_server/metrics.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/metrics.py)<br>[mcp_server/preflight.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/preflight.py)<br>[mcp_server/ratelimit.py](../../../../sources/lyonzin__knowledge-rag/mcp_server/ratelimit.py) |
| retrieval | 2 | [tests/test_memory_baseline.py](../../../../sources/lyonzin__knowledge-rag/tests/test_memory_baseline.py)<br>[bench/test_bench_memory.py](../../../../sources/lyonzin__knowledge-rag/bench/test_bench_memory.py) |
| spec | 2 | [requirements-dev.txt](../../../../sources/lyonzin__knowledge-rag/requirements-dev.txt)<br>[requirements.txt](../../../../sources/lyonzin__knowledge-rag/requirements.txt) |
| eval | 51 | [tests/_vulture_whitelist.py](../../../../sources/lyonzin__knowledge-rag/tests/_vulture_whitelist.py)<br>[tests/conftest.py](../../../../sources/lyonzin__knowledge-rag/tests/conftest.py)<br>[tests/test_backwards_compat.py](../../../../sources/lyonzin__knowledge-rag/tests/test_backwards_compat.py)<br>[tests/test_config.py](../../../../sources/lyonzin__knowledge-rag/tests/test_config.py)<br>[tests/test_dedup.py](../../../../sources/lyonzin__knowledge-rag/tests/test_dedup.py)<br>[tests/test_exclude_patterns.py](../../../../sources/lyonzin__knowledge-rag/tests/test_exclude_patterns.py)<br>[tests/test_format_smoke.py](../../../../sources/lyonzin__knowledge-rag/tests/test_format_smoke.py)<br>[tests/test_ingestion_property.py](../../../../sources/lyonzin__knowledge-rag/tests/test_ingestion_property.py) |
| security | 2 | [SECURITY.md](../../../../sources/lyonzin__knowledge-rag/SECURITY.md)<br>[.github/workflows/security.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/security.yml) |
| ci | 6 | [.github/workflows/bench-pages.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/bench-pages.yml)<br>[.github/workflows/ci.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/ci.yml)<br>[.github/workflows/nightly.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/nightly.yml)<br>[.github/workflows/quality-gate.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/quality-gate.yml)<br>[.github/workflows/release.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/release.yml)<br>[.github/workflows/security.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/security.yml) |
| container | 1 | [Dockerfile](../../../../sources/lyonzin__knowledge-rag/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 3 | [README.md](../../../../sources/lyonzin__knowledge-rag/README.md)<br>[npm/README.md](../../../../sources/lyonzin__knowledge-rag/npm/README.md)<br>[docs/single-instance.md](../../../../sources/lyonzin__knowledge-rag/docs/single-instance.md) |
| config | 4 | [pyproject.toml](../../../../sources/lyonzin__knowledge-rag/pyproject.toml)<br>[requirements-dev.txt](../../../../sources/lyonzin__knowledge-rag/requirements-dev.txt)<br>[requirements.txt](../../../../sources/lyonzin__knowledge-rag/requirements.txt)<br>[npm/package.json](../../../../sources/lyonzin__knowledge-rag/npm/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 51 | [tests/_vulture_whitelist.py](../../../../sources/lyonzin__knowledge-rag/tests/_vulture_whitelist.py)<br>[tests/conftest.py](../../../../sources/lyonzin__knowledge-rag/tests/conftest.py)<br>[tests/test_backwards_compat.py](../../../../sources/lyonzin__knowledge-rag/tests/test_backwards_compat.py)<br>[tests/test_config.py](../../../../sources/lyonzin__knowledge-rag/tests/test_config.py)<br>[tests/test_dedup.py](../../../../sources/lyonzin__knowledge-rag/tests/test_dedup.py)<br>[tests/test_exclude_patterns.py](../../../../sources/lyonzin__knowledge-rag/tests/test_exclude_patterns.py) |
| CI workflows | 6 | [.github/workflows/bench-pages.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/bench-pages.yml)<br>[.github/workflows/ci.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/ci.yml)<br>[.github/workflows/nightly.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/nightly.yml)<br>[.github/workflows/quality-gate.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/quality-gate.yml)<br>[.github/workflows/release.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/release.yml)<br>[.github/workflows/security.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/security.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/lyonzin__knowledge-rag/Dockerfile) |
| Security / policy | 2 | [SECURITY.md](../../../../sources/lyonzin__knowledge-rag/SECURITY.md)<br>[.github/workflows/security.yml](../../../../sources/lyonzin__knowledge-rag/.github/workflows/security.yml) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `mcp_server/__init__.py`, `mcp_server/config.py`, `mcp_server/guarded.py`.
2. Trace execution through entrypoints: `npm/bin/cli.js`, `mcp_server/server.py`.
3. Inspect retrieval/memory/indexing through: `tests/test_memory_baseline.py`, `bench/test_bench_memory.py`.
4. Verify behavior through test/eval files: `tests/_vulture_whitelist.py`, `tests/conftest.py`, `tests/test_backwards_compat.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 knowledge rag Drop docs, search instantly from Claude Code — 12 MCP tools, 20 format parsers, hybrid search + reranking.. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, README.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
