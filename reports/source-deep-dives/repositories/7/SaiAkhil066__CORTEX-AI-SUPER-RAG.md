# SaiAkhil066/CORTEX-AI-SUPER-RAG Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

You upload a PDF. You ask a question. Cortex RAG retrieves, cross-checks, reasons, and cites — entirely on your machine. No API key · No cloud upload · No subscription

## 요약

- 조사 단위: `sources/SaiAkhil066__CORTEX-AI-SUPER-RAG` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 18 files, 3 directories, depth score 56, key references 4개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, spec/docs-driven, containerized deploy 구조로 읽힌다. 핵심 소스 근거는 config=requirements.txt이고, 의존성 단서는 langchain, pydantic, torch, transformers, ollama, llama, 검증/운영 단서는 container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 4개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | SaiAkhil066/CORTEX-AI-SUPER-RAG |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 1727 |
| Forks | 257 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/SaiAkhil066__CORTEX-AI-SUPER-RAG](../../../../sources/SaiAkhil066__CORTEX-AI-SUPER-RAG) |
| Existing report | [reports/global-trending/repositories/SaiAkhil066__CORTEX-AI-SUPER-RAG.md](../../../global-trending/repositories/SaiAkhil066__CORTEX-AI-SUPER-RAG.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 18 / 3 |
| Max observed depth | 2 |
| Top directories | .streamlit, assets, utils |
| Top extensions | .py: 5, .svg: 4, (none): 4, .md: 1, .sh: 1, .toml: 1, .txt: 1, .yml: 1 |
| Source patterns | retrieval/vector path, spec/docs-driven, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| assets | top-level component | 1 |
| utils | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | langchain |
| vectorStores | faiss |
| modelRuntime | torch, transformers, ollama, llama |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| config | [requirements.txt](../../../../sources/SaiAkhil066__CORTEX-AI-SUPER-RAG/requirements.txt) | config signal |
| docs | [README.md](../../../../sources/SaiAkhil066__CORTEX-AI-SUPER-RAG/README.md) | docs signal |
| container | [docker-compose.yml](../../../../sources/SaiAkhil066__CORTEX-AI-SUPER-RAG/docker-compose.yml) | container support |
| container | [Dockerfile](../../../../sources/SaiAkhil066__CORTEX-AI-SUPER-RAG/Dockerfile) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 2 | [utils/advanced_rag.py](../../../../sources/SaiAkhil066__CORTEX-AI-SUPER-RAG/utils/advanced_rag.py)<br>[utils/build_graph.py](../../../../sources/SaiAkhil066__CORTEX-AI-SUPER-RAG/utils/build_graph.py) |
| spec | 1 | [requirements.txt](../../../../sources/SaiAkhil066__CORTEX-AI-SUPER-RAG/requirements.txt) |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 2 | [docker-compose.yml](../../../../sources/SaiAkhil066__CORTEX-AI-SUPER-RAG/docker-compose.yml)<br>[Dockerfile](../../../../sources/SaiAkhil066__CORTEX-AI-SUPER-RAG/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/SaiAkhil066__CORTEX-AI-SUPER-RAG/README.md) |
| config | 1 | [requirements.txt](../../../../sources/SaiAkhil066__CORTEX-AI-SUPER-RAG/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 0 | not obvious |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/SaiAkhil066__CORTEX-AI-SUPER-RAG/docker-compose.yml)<br>[Dockerfile](../../../../sources/SaiAkhil066__CORTEX-AI-SUPER-RAG/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `requirements.txt`, `README.md`, `docker-compose.yml`.
2. Inspect retrieval/memory/indexing through: `utils/advanced_rag.py`, `utils/build_graph.py`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 You upload a PDF. You ask a question. Cortex RAG retrieves, cross checks, reasons, and cites — entirely on your machine.. 핵심 구조 신호는 Python, requirements.txt, Dockerfile, docker-compose.yml, README.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
