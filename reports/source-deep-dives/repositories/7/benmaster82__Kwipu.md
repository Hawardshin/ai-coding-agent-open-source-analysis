# benmaster82/Kwipu Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Ask questions across your Markdown notes using a fully local Graph RAG engine. Built for Obsidian vaults, works with any folder of Markdown files. Extracts entity-relation triples from wikilinks & YAML frontmatter, retrieves answers via hybrid search (vector + BM25 + temporal). Multilingual. No cloud. Runs on Ollama.

## 요약

- 조사 단위: `sources/benmaster82__Kwipu` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 19 files, 3 directories, depth score 52, key references 2개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=kwipu_mcp_server.py이고, 의존성 단서는 mcp, llama-index, ollama, llama, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 2개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | benmaster82/Kwipu |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 248 |
| Forks | 33 |
| License | MIT |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/benmaster82__Kwipu](../../../../sources/benmaster82__Kwipu) |
| Existing report | [reports/llm-wiki/repositories/benmaster82__Kwipu.md](../../../llm-wiki/repositories/benmaster82__Kwipu.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 19 / 3 |
| Max observed depth | 3 |
| Top directories | img, knowledge_base |
| Top extensions | .md: 11, .py: 3, .png: 2, (none): 2, .txt: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| img | top-level component | 1 |
| knowledge_base | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | llama-index |
| vectorStores | none |
| modelRuntime | ollama, llama |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [kwipu_mcp_server.py](../../../../sources/benmaster82__Kwipu/kwipu_mcp_server.py) | mcp signal |
| config | [requirements.txt](../../../../sources/benmaster82__Kwipu/requirements.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 1 | [kwipu_mcp_server.py](../../../../sources/benmaster82__Kwipu/kwipu_mcp_server.py) |
| retrieval | 9 | [geode_graph.py](../../../../sources/benmaster82__Kwipu/geode_graph.py)<br>[knowledge_base/examples/Alice.md](../../../../sources/benmaster82__Kwipu/knowledge_base/examples/Alice.md)<br>[knowledge_base/examples/API Documentation.md](../../../../sources/benmaster82__Kwipu/knowledge_base/examples/API Documentation.md)<br>[knowledge_base/examples/Bob.md](../../../../sources/benmaster82__Kwipu/knowledge_base/examples/Bob.md)<br>[knowledge_base/examples/Charlie.md](../../../../sources/benmaster82__Kwipu/knowledge_base/examples/Charlie.md)<br>[knowledge_base/examples/Director Evans.md](../../../../sources/benmaster82__Kwipu/knowledge_base/examples/Director Evans.md)<br>[knowledge_base/examples/Meeting Notes - Jan 15.md](../../../../sources/benmaster82__Kwipu/knowledge_base/examples/Meeting Notes - Jan 15.md)<br>[knowledge_base/examples/Project Alpha.md](../../../../sources/benmaster82__Kwipu/knowledge_base/examples/Project Alpha.md) |
| spec | 1 | [requirements.txt](../../../../sources/benmaster82__Kwipu/requirements.txt) |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/benmaster82__Kwipu/README.md)<br>[README.zh-CN.md](../../../../sources/benmaster82__Kwipu/README.zh-CN.md) |
| config | 1 | [requirements.txt](../../../../sources/benmaster82__Kwipu/requirements.txt) |


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
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `kwipu_mcp_server.py`, `requirements.txt`.
2. Inspect retrieval/memory/indexing through: `geode_graph.py`, `knowledge_base/examples/Alice.md`, `knowledge_base/examples/API Documentation.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Ask questions across your Markdown notes using a fully local Graph RAG engine. Built for Obsidian vaults, works with any. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, llama-index, mcp이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
