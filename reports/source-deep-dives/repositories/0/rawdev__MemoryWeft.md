# rawdev/MemoryWeft Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

rawdev/MemoryWeft

## 요약

- 조사 단위: `sources/rawdev__MemoryWeft` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 206 files, 45 directories, depth score 111, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=src/k2g/web/static/index.html, src/k2g/ui_project/static/index.html, src/k2g/reader/graph_query.py이고, 의존성 단서는 mcp, fastapi, pydantic, torch, transformers, pgvector, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | rawdev/MemoryWeft |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 9 |
| Forks | 3 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/rawdev__MemoryWeft](../../../../sources/rawdev__MemoryWeft) |
| Existing report | [reports/korea-trending/repositories/rawdev__MemoryWeft.md](../../../korea-trending/repositories/rawdev__MemoryWeft.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 206 / 45 |
| Max observed depth | 6 |
| Top directories | .github, asset, docs, packaging, scripts, src |
| Top extensions | .py: 171, .md: 8, .json: 4, .png: 4, (none): 4, .yml: 3, .bat: 2, .command: 2, .html: 2, .js: 2, .txt: 2, .toml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 65 |
| docs | documentation surface | 3 |
| .github | ci surface | 1 |
| asset | top-level component | 1 |
| packaging | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | k2g-mcp | k2g-mcp |
| utility | pyproject.toml | mweft-app | mweft-app |
| utility | pyproject.toml | mweft-init | mweft-init |
| utility | pyproject.toml | k2g-ingest-manifest | k2g-ingest-manifest |
| quality | pyproject.toml | k2g-manifest-check | k2g-manifest-check |
| utility | pyproject.toml | k2g-manifest-assemble | k2g-manifest-assemble |
| utility | pyproject.toml | mweft-export | mweft-export |
| utility | pyproject.toml | mweft-import | mweft-import |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | pgvector |
| modelRuntime | torch, transformers |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [src/k2g/web/static/index.html](../../../../sources/rawdev__MemoryWeft/src/k2g/web/static/index.html) | retrieval signal |
| retrieval | [src/k2g/ui_project/static/index.html](../../../../sources/rawdev__MemoryWeft/src/k2g/ui_project/static/index.html) | retrieval signal |
| retrieval | [src/k2g/reader/graph_query.py](../../../../sources/rawdev__MemoryWeft/src/k2g/reader/graph_query.py) | retrieval signal |
| retrieval | [src/k2g/portable/vector_codec.py](../../../../sources/rawdev__MemoryWeft/src/k2g/portable/vector_codec.py) | retrieval signal |
| entrypoints | [src/k2g/mcp/__main__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/__main__.py) | entrypoints signal |
| entrypoints | [src/k2g/mcp/server.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/server.py) | entrypoints signal |
| entrypoints | [src/k2g/desktop/__main__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/desktop/__main__.py) | entrypoints signal |
| docs | [README.KR.md](../../../../sources/rawdev__MemoryWeft/README.KR.md) | docs signal |
| docs | [README.md](../../../../sources/rawdev__MemoryWeft/README.md) | docs signal |
| docs | [packaging/portable/readme_kr.txt](../../../../sources/rawdev__MemoryWeft/packaging/portable/readme_kr.txt) | docs signal |
| docs | [packaging/portable/README.txt](../../../../sources/rawdev__MemoryWeft/packaging/portable/README.txt) | docs signal |
| eval | [src/k2g/observability/__init__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/observability/__init__.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [src/k2g/mcp/__main__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/__main__.py)<br>[src/k2g/mcp/server.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/server.py)<br>[src/k2g/desktop/__main__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/desktop/__main__.py) |
| agentRuntime | 6 | [src/k2g/ui/templates/skill_manifest_ingestion.md](../../../../sources/rawdev__MemoryWeft/src/k2g/ui/templates/skill_manifest_ingestion.md)<br>[src/k2g/memory/__init__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/memory/__init__.py)<br>[src/k2g/memory/save_context.py](../../../../sources/rawdev__MemoryWeft/src/k2g/memory/save_context.py)<br>[src/k2g/memory/source_axis.py](../../../../sources/rawdev__MemoryWeft/src/k2g/memory/source_axis.py)<br>[src/k2g/mcp/memory_tools.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/memory_tools.py)<br>[src/k2g/mcp/tools.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/tools.py) |
| mcp | 22 | [src/k2g/ui/templates/mcp.json](../../../../sources/rawdev__MemoryWeft/src/k2g/ui/templates/mcp.json)<br>[src/k2g/observability/mcp_telemetry.py](../../../../sources/rawdev__MemoryWeft/src/k2g/observability/mcp_telemetry.py)<br>[src/k2g/mcp/__init__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/__init__.py)<br>[src/k2g/mcp/__main__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/__main__.py)<br>[src/k2g/mcp/community_tools.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/community_tools.py)<br>[src/k2g/mcp/factory.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/factory.py)<br>[src/k2g/mcp/hint.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/hint.py)<br>[src/k2g/mcp/memory_tools.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/memory_tools.py) |
| retrieval | 22 | [src/k2g/web/static/index.html](../../../../sources/rawdev__MemoryWeft/src/k2g/web/static/index.html)<br>[src/k2g/ui_project/static/index.html](../../../../sources/rawdev__MemoryWeft/src/k2g/ui_project/static/index.html)<br>[src/k2g/reader/graph_query.py](../../../../sources/rawdev__MemoryWeft/src/k2g/reader/graph_query.py)<br>[src/k2g/portable/vector_codec.py](../../../../sources/rawdev__MemoryWeft/src/k2g/portable/vector_codec.py)<br>[src/k2g/memory/__init__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/memory/__init__.py)<br>[src/k2g/memory/save_context.py](../../../../sources/rawdev__MemoryWeft/src/k2g/memory/save_context.py)<br>[src/k2g/memory/source_axis.py](../../../../sources/rawdev__MemoryWeft/src/k2g/memory/source_axis.py)<br>[src/k2g/mcp/memory_tools.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/memory_tools.py) |
| spec | 0 | not obvious |
| eval | 5 | [src/k2g/observability/__init__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/observability/__init__.py)<br>[src/k2g/observability/log_context.py](../../../../sources/rawdev__MemoryWeft/src/k2g/observability/log_context.py)<br>[src/k2g/observability/logging_config.py](../../../../sources/rawdev__MemoryWeft/src/k2g/observability/logging_config.py)<br>[src/k2g/observability/mcp_telemetry.py](../../../../sources/rawdev__MemoryWeft/src/k2g/observability/mcp_telemetry.py)<br>[.github/workflows/test.yml](../../../../sources/rawdev__MemoryWeft/.github/workflows/test.yml) |
| security | 6 | [src/k2g/security/__init__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/security/__init__.py)<br>[src/k2g/security/data_owner.py](../../../../sources/rawdev__MemoryWeft/src/k2g/security/data_owner.py)<br>[src/k2g/security/session_context.py](../../../../sources/rawdev__MemoryWeft/src/k2g/security/session_context.py)<br>[src/k2g/security/share_store.py](../../../../sources/rawdev__MemoryWeft/src/k2g/security/share_store.py)<br>[src/k2g/security/sql_safety.py](../../../../sources/rawdev__MemoryWeft/src/k2g/security/sql_safety.py)<br>[src/k2g/db_store/embedding_guard.py](../../../../sources/rawdev__MemoryWeft/src/k2g/db_store/embedding_guard.py) |
| ci | 3 | [.github/workflows/claude.yml](../../../../sources/rawdev__MemoryWeft/.github/workflows/claude.yml)<br>[.github/workflows/release.yml](../../../../sources/rawdev__MemoryWeft/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/rawdev__MemoryWeft/.github/workflows/test.yml) |
| container | 0 | not obvious |
| instruction | 1 | [src/k2g/ui/templates/CLAUDE.md](../../../../sources/rawdev__MemoryWeft/src/k2g/ui/templates/CLAUDE.md) |
| docs | 6 | [README.KR.md](../../../../sources/rawdev__MemoryWeft/README.KR.md)<br>[README.md](../../../../sources/rawdev__MemoryWeft/README.md)<br>[packaging/portable/readme_kr.txt](../../../../sources/rawdev__MemoryWeft/packaging/portable/readme_kr.txt)<br>[packaging/portable/README.txt](../../../../sources/rawdev__MemoryWeft/packaging/portable/README.txt)<br>[docs/install.md](../../../../sources/rawdev__MemoryWeft/docs/install.md)<br>[docs/prompt_guide.md](../../../../sources/rawdev__MemoryWeft/docs/prompt_guide.md) |
| config | 1 | [pyproject.toml](../../../../sources/rawdev__MemoryWeft/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 5 | [src/k2g/observability/__init__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/observability/__init__.py)<br>[src/k2g/observability/log_context.py](../../../../sources/rawdev__MemoryWeft/src/k2g/observability/log_context.py)<br>[src/k2g/observability/logging_config.py](../../../../sources/rawdev__MemoryWeft/src/k2g/observability/logging_config.py)<br>[src/k2g/observability/mcp_telemetry.py](../../../../sources/rawdev__MemoryWeft/src/k2g/observability/mcp_telemetry.py)<br>[.github/workflows/test.yml](../../../../sources/rawdev__MemoryWeft/.github/workflows/test.yml) |
| CI workflows | 3 | [.github/workflows/claude.yml](../../../../sources/rawdev__MemoryWeft/.github/workflows/claude.yml)<br>[.github/workflows/release.yml](../../../../sources/rawdev__MemoryWeft/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/rawdev__MemoryWeft/.github/workflows/test.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 6 | [src/k2g/security/__init__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/security/__init__.py)<br>[src/k2g/security/data_owner.py](../../../../sources/rawdev__MemoryWeft/src/k2g/security/data_owner.py)<br>[src/k2g/security/session_context.py](../../../../sources/rawdev__MemoryWeft/src/k2g/security/session_context.py)<br>[src/k2g/security/share_store.py](../../../../sources/rawdev__MemoryWeft/src/k2g/security/share_store.py)<br>[src/k2g/security/sql_safety.py](../../../../sources/rawdev__MemoryWeft/src/k2g/security/sql_safety.py)<br>[src/k2g/db_store/embedding_guard.py](../../../../sources/rawdev__MemoryWeft/src/k2g/db_store/embedding_guard.py) |
| Agent instructions | 1 | [src/k2g/ui/templates/CLAUDE.md](../../../../sources/rawdev__MemoryWeft/src/k2g/ui/templates/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/k2g/web/static/index.html`, `src/k2g/ui_project/static/index.html`, `src/k2g/reader/graph_query.py`.
2. Trace execution through entrypoints: `src/k2g/mcp/__main__.py`, `src/k2g/mcp/server.py`, `src/k2g/desktop/__main__.py`.
3. Map agent/tool runtime through: `src/k2g/ui/templates/skill_manifest_ingestion.md`, `src/k2g/memory/__init__.py`, `src/k2g/memory/save_context.py`.
4. Inspect retrieval/memory/indexing through: `src/k2g/web/static/index.html`, `src/k2g/ui_project/static/index.html`, `src/k2g/reader/graph_query.py`.
5. Verify behavior through test/eval files: `src/k2g/observability/__init__.py`, `src/k2g/observability/log_context.py`, `src/k2g/observability/logging_config.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, mcp, fastapi이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
