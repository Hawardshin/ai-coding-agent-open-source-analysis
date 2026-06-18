# ssuksak/cheongyak-rag-mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Korean housing subscription (청약) RAG MCP server - Real-time data from 청약홈 + PDF/HWP document Q&A

## 요약

- 조사 단위: `sources/ssuksak__cheongyak-rag-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 19 files, 4 directories, depth score 71, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=src/rag_mcp/__init__.py, src/rag_mcp/chunker.py, src/rag_mcp/config.py이고, 의존성 단서는 openai, mcp, transformers, chroma, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | ssuksak/cheongyak-rag-mcp |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/ssuksak__cheongyak-rag-mcp](../../../../sources/ssuksak__cheongyak-rag-mcp) |
| Existing report | [reports/korea-trending/repositories/ssuksak__cheongyak-rag-mcp.md](../../../korea-trending/repositories/ssuksak__cheongyak-rag-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 19 / 4 |
| Max observed depth | 3 |
| Top directories | npm, src |
| Top extensions | .py: 11, .js: 2, (none): 2, .example: 1, .json: 1, .md: 1, .toml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 24 |
| npm | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | cheongyak-mcp | cheongyak-mcp |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | chroma |
| modelRuntime | transformers |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [src/rag_mcp/__init__.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/__init__.py) | retrieval signal |
| retrieval | [src/rag_mcp/chunker.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/chunker.py) | retrieval signal |
| retrieval | [src/rag_mcp/config.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/config.py) | retrieval signal |
| retrieval | [src/rag_mcp/data_api.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/data_api.py) | retrieval signal |
| entrypoints | [src/rag_mcp/server.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/server.py) | entrypoints signal |
| entrypoints | [npm/bin/cheongyak-mcp.js](../../../../sources/ssuksak__cheongyak-rag-mcp/npm/bin/cheongyak-mcp.js) | entrypoints signal |
| entrypoints | [npm/bin/postinstall.js](../../../../sources/ssuksak__cheongyak-rag-mcp/npm/bin/postinstall.js) | entrypoints signal |
| docs | [README.md](../../../../sources/ssuksak__cheongyak-rag-mcp/README.md) | docs signal |
| config | [pyproject.toml](../../../../sources/ssuksak__cheongyak-rag-mcp/pyproject.toml) | config signal |
| config | [npm/package.json](../../../../sources/ssuksak__cheongyak-rag-mcp/npm/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [src/rag_mcp/server.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/server.py)<br>[npm/bin/cheongyak-mcp.js](../../../../sources/ssuksak__cheongyak-rag-mcp/npm/bin/cheongyak-mcp.js)<br>[npm/bin/postinstall.js](../../../../sources/ssuksak__cheongyak-rag-mcp/npm/bin/postinstall.js) |
| agentRuntime | 0 | not obvious |
| mcp | 12 | [src/rag_mcp/__init__.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/__init__.py)<br>[src/rag_mcp/chunker.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/chunker.py)<br>[src/rag_mcp/config.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/config.py)<br>[src/rag_mcp/data_api.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/data_api.py)<br>[src/rag_mcp/indexer.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/indexer.py)<br>[src/rag_mcp/parser.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/parser.py)<br>[src/rag_mcp/rag.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/rag.py)<br>[src/rag_mcp/scraper.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/scraper.py) |
| retrieval | 11 | [src/rag_mcp/__init__.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/__init__.py)<br>[src/rag_mcp/chunker.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/chunker.py)<br>[src/rag_mcp/config.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/config.py)<br>[src/rag_mcp/data_api.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/data_api.py)<br>[src/rag_mcp/indexer.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/indexer.py)<br>[src/rag_mcp/parser.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/parser.py)<br>[src/rag_mcp/rag.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/rag.py)<br>[src/rag_mcp/scraper.py](../../../../sources/ssuksak__cheongyak-rag-mcp/src/rag_mcp/scraper.py) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/ssuksak__cheongyak-rag-mcp/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/ssuksak__cheongyak-rag-mcp/pyproject.toml)<br>[npm/package.json](../../../../sources/ssuksak__cheongyak-rag-mcp/npm/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/rag_mcp/__init__.py`, `src/rag_mcp/chunker.py`, `src/rag_mcp/config.py`.
2. Trace execution through entrypoints: `src/rag_mcp/server.py`, `npm/bin/cheongyak-mcp.js`, `npm/bin/postinstall.js`.
3. Inspect retrieval/memory/indexing through: `src/rag_mcp/__init__.py`, `src/rag_mcp/chunker.py`, `src/rag_mcp/config.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Korean housing subscription 청약 RAG MCP server Real time data from 청약홈 + PDF/HWP document Q&A. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, mcp이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
