# stanford-oval/storm Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 74 files, 18 directories.

## 요약

- 조사 단위: `sources/stanford-oval__storm` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 74 files, 18 directories, depth score 79, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=knowledge_storm/__init__.py, knowledge_storm/dataclass.py, knowledge_storm/encoder.py이고, 의존성 단서는 langchain, transformers, qdrant, 검증/운영 단서는 CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | stanford-oval/storm |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 28424 |
| Forks | 2596 |
| License | MIT |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/stanford-oval__storm](../../../../sources/stanford-oval__storm) |
| Existing report | [reports/llm-wiki/repositories/stanford-oval__storm.md](../../../llm-wiki/repositories/stanford-oval__storm.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 74 / 18 |
| Max observed depth | 4 |
| Top directories | .github, assets, examples, frontend, knowledge_storm |
| Top extensions | .py: 52, .jpg: 5, .md: 5, .svg: 2, .txt: 2, .yml: 2, (none): 2, .in: 1, .pdf: 1, .toml: 1, .yaml: 1 |
| Source patterns | retrieval/vector path, spec/docs-driven |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| examples/storm_examples | examples workspace | 7 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| examples | top-level component | 1 |
| frontend | top-level component | 1 |
| knowledge_storm | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | langchain |
| vectorStores | qdrant |
| modelRuntime | transformers |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [knowledge_storm/__init__.py](../../../../sources/stanford-oval__storm/knowledge_storm/__init__.py) | retrieval signal |
| retrieval | [knowledge_storm/dataclass.py](../../../../sources/stanford-oval__storm/knowledge_storm/dataclass.py) | retrieval signal |
| retrieval | [knowledge_storm/encoder.py](../../../../sources/stanford-oval__storm/knowledge_storm/encoder.py) | retrieval signal |
| retrieval | [knowledge_storm/interface.py](../../../../sources/stanford-oval__storm/knowledge_storm/interface.py) | retrieval signal |
| docs | [README.md](../../../../sources/stanford-oval__storm/README.md) | docs signal |
| docs | [frontend/demo_light/README.md](../../../../sources/stanford-oval__storm/frontend/demo_light/README.md) | docs signal |
| docs | [examples/storm_examples/README.md](../../../../sources/stanford-oval__storm/examples/storm_examples/README.md) | docs signal |
| config | [requirements.txt](../../../../sources/stanford-oval__storm/requirements.txt) | config signal |
| config | [frontend/demo_light/requirements.txt](../../../../sources/stanford-oval__storm/frontend/demo_light/requirements.txt) | config signal |
| ci | [.github/workflows/format-check.yml](../../../../sources/stanford-oval__storm/.github/workflows/format-check.yml) | ci support |
| ci | [.github/workflows/python-package.yml](../../../../sources/stanford-oval__storm/.github/workflows/python-package.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 44 | [knowledge_storm/__init__.py](../../../../sources/stanford-oval__storm/knowledge_storm/__init__.py)<br>[knowledge_storm/dataclass.py](../../../../sources/stanford-oval__storm/knowledge_storm/dataclass.py)<br>[knowledge_storm/encoder.py](../../../../sources/stanford-oval__storm/knowledge_storm/encoder.py)<br>[knowledge_storm/interface.py](../../../../sources/stanford-oval__storm/knowledge_storm/interface.py)<br>[knowledge_storm/lm.py](../../../../sources/stanford-oval__storm/knowledge_storm/lm.py)<br>[knowledge_storm/logging_wrapper.py](../../../../sources/stanford-oval__storm/knowledge_storm/logging_wrapper.py)<br>[knowledge_storm/rm.py](../../../../sources/stanford-oval__storm/knowledge_storm/rm.py)<br>[knowledge_storm/utils.py](../../../../sources/stanford-oval__storm/knowledge_storm/utils.py) |
| spec | 2 | [requirements.txt](../../../../sources/stanford-oval__storm/requirements.txt)<br>[frontend/demo_light/requirements.txt](../../../../sources/stanford-oval__storm/frontend/demo_light/requirements.txt) |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/format-check.yml](../../../../sources/stanford-oval__storm/.github/workflows/format-check.yml)<br>[.github/workflows/python-package.yml](../../../../sources/stanford-oval__storm/.github/workflows/python-package.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 3 | [README.md](../../../../sources/stanford-oval__storm/README.md)<br>[frontend/demo_light/README.md](../../../../sources/stanford-oval__storm/frontend/demo_light/README.md)<br>[examples/storm_examples/README.md](../../../../sources/stanford-oval__storm/examples/storm_examples/README.md) |
| config | 2 | [requirements.txt](../../../../sources/stanford-oval__storm/requirements.txt)<br>[frontend/demo_light/requirements.txt](../../../../sources/stanford-oval__storm/frontend/demo_light/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 2 | [.github/workflows/format-check.yml](../../../../sources/stanford-oval__storm/.github/workflows/format-check.yml)<br>[.github/workflows/python-package.yml](../../../../sources/stanford-oval__storm/.github/workflows/python-package.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `knowledge_storm/__init__.py`, `knowledge_storm/dataclass.py`, `knowledge_storm/encoder.py`.
2. Inspect retrieval/memory/indexing through: `knowledge_storm/__init__.py`, `knowledge_storm/dataclass.py`, `knowledge_storm/encoder.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Local clone structure analysis 74 files, 18 directories.. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, langchain, transformers이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious입니다.
