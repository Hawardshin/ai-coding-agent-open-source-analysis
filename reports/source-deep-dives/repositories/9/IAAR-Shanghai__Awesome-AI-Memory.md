# IAAR-Shanghai/Awesome-AI-Memory Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Awesome AI Memory | LLM Memory | A curated knowledge base on AI memory for LLMs and agents, covering long-term memory, reasoning, retrieval, and memory-native system design. Awesome-AI-Memory 是一个 集中式、持续更新的 AI 记忆知识库，系统性整理了与 大模型记忆（LLM Memory）与智能体记忆（Agent Memory） 相关的前沿研究、工程框架、系统设计、评测基准与真实应用实践。

## 요약

- 조사 단위: `sources/IAAR-Shanghai__Awesome-AI-Memory` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 8 files, 2 directories, depth score 32, key references 3개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 Python source tree 구조로 읽힌다. 핵심 소스 근거는 docs=README_cn.md, README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 3개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | IAAR-Shanghai/Awesome-AI-Memory |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 996 |
| Forks | 93 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/IAAR-Shanghai__Awesome-AI-Memory](../../../../sources/IAAR-Shanghai__Awesome-AI-Memory) |
| Existing report | [reports/llm-wiki/repositories/IAAR-Shanghai__Awesome-AI-Memory.md](../../../llm-wiki/repositories/IAAR-Shanghai__Awesome-AI-Memory.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 8 / 2 |
| Max observed depth | 2 |
| Top directories | assets, scripts |
| Top extensions | .md: 4, .png: 2, .py: 1, (none): 1 |
| Source patterns | Python source tree |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| assets | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| docs | [README_cn.md](../../../../sources/IAAR-Shanghai__Awesome-AI-Memory/README_cn.md) | docs signal |
| docs | [README.md](../../../../sources/IAAR-Shanghai__Awesome-AI-Memory/README.md) | docs signal |
| instruction | [CLAUDE.md](../../../../sources/IAAR-Shanghai__Awesome-AI-Memory/CLAUDE.md) | instruction support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/IAAR-Shanghai__Awesome-AI-Memory/CLAUDE.md) |
| docs | 2 | [README_cn.md](../../../../sources/IAAR-Shanghai__Awesome-AI-Memory/README_cn.md)<br>[README.md](../../../../sources/IAAR-Shanghai__Awesome-AI-Memory/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/IAAR-Shanghai__Awesome-AI-Memory/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README_cn.md`, `README.md`, `CLAUDE.md`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Awesome AI Memory LLM Memory A curated knowledge base on AI memory for LLMs and agents, covering long term memory, reaso. 핵심 구조 신호는 Python, README.md, CLAUDE.md, LICENSE, docs, agent-instructions이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
