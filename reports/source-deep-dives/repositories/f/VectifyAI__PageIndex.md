# VectifyAI/PageIndex Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG

## 요약

- 조사 단위: `sources/VectifyAI__PageIndex` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 53 files, 14 directories, depth score 71, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=pageindex/page_index_md.py, pageindex/page_index.py, examples/agentic_vectorless_rag_demo.py이고, 의존성 단서는 openai, 검증/운영 단서는 CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | VectifyAI/PageIndex |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 33160 |
| Forks | 2886 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/VectifyAI__PageIndex](../../../../sources/VectifyAI__PageIndex) |
| Existing report | [reports/llm-wiki/repositories/VectifyAI__PageIndex.md](../../../llm-wiki/repositories/VectifyAI__PageIndex.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 53 / 14 |
| Max observed depth | 4 |
| Top directories | .claude, .github, cookbook, examples, pageindex |
| Top extensions | .json: 10, .pdf: 9, .md: 8, .py: 8, .yml: 7, .ipynb: 4, (none): 3, .js: 1, .sh: 1, .txt: 1, .yaml: 1 |
| Source patterns | retrieval/vector path, spec/docs-driven |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| examples/tutorials | examples workspace | 2 |
| .github | ci surface | 1 |
| cookbook | top-level component | 1 |
| examples | top-level component | 1 |
| examples/agentic_vectorless_rag_demo.py | examples workspace | 1 |
| pageindex | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
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
| retrieval | [pageindex/page_index_md.py](../../../../sources/VectifyAI__PageIndex/pageindex/page_index_md.py) | retrieval signal |
| retrieval | [pageindex/page_index.py](../../../../sources/VectifyAI__PageIndex/pageindex/page_index.py) | retrieval signal |
| retrieval | [examples/agentic_vectorless_rag_demo.py](../../../../sources/VectifyAI__PageIndex/examples/agentic_vectorless_rag_demo.py) | retrieval signal |
| retrieval | [cookbook/agentic_retrieval.ipynb](../../../../sources/VectifyAI__PageIndex/cookbook/agentic_retrieval.ipynb) | retrieval signal |
| docs | [README.md](../../../../sources/VectifyAI__PageIndex/README.md) | docs signal |
| docs | [examples/tutorials/tree-search/README.md](../../../../sources/VectifyAI__PageIndex/examples/tutorials/tree-search/README.md) | docs signal |
| docs | [examples/tutorials/doc-search/README.md](../../../../sources/VectifyAI__PageIndex/examples/tutorials/doc-search/README.md) | docs signal |
| docs | [cookbook/README.md](../../../../sources/VectifyAI__PageIndex/cookbook/README.md) | docs signal |
| config | [requirements.txt](../../../../sources/VectifyAI__PageIndex/requirements.txt) | config signal |
| ci | [.github/workflows/autoclose-labeled-issues.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/autoclose-labeled-issues.yml) | ci support |
| ci | [.github/workflows/backfill-dedupe.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/backfill-dedupe.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 6 | [pageindex/page_index_md.py](../../../../sources/VectifyAI__PageIndex/pageindex/page_index_md.py)<br>[pageindex/page_index.py](../../../../sources/VectifyAI__PageIndex/pageindex/page_index.py)<br>[examples/agentic_vectorless_rag_demo.py](../../../../sources/VectifyAI__PageIndex/examples/agentic_vectorless_rag_demo.py)<br>[cookbook/agentic_retrieval.ipynb](../../../../sources/VectifyAI__PageIndex/cookbook/agentic_retrieval.ipynb)<br>[cookbook/pageindex_RAG_simple.ipynb](../../../../sources/VectifyAI__PageIndex/cookbook/pageindex_RAG_simple.ipynb)<br>[cookbook/vision_RAG_pageindex.ipynb](../../../../sources/VectifyAI__PageIndex/cookbook/vision_RAG_pageindex.ipynb) |
| spec | 1 | [requirements.txt](../../../../sources/VectifyAI__PageIndex/requirements.txt) |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 6 | [.github/workflows/autoclose-labeled-issues.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/autoclose-labeled-issues.yml)<br>[.github/workflows/backfill-dedupe.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/backfill-dedupe.yml)<br>[.github/workflows/codeql.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/dependency-review.yml)<br>[.github/workflows/issue-dedupe.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/issue-dedupe.yml)<br>[.github/workflows/remove-autoclose-label.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/remove-autoclose-label.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 4 | [README.md](../../../../sources/VectifyAI__PageIndex/README.md)<br>[examples/tutorials/tree-search/README.md](../../../../sources/VectifyAI__PageIndex/examples/tutorials/tree-search/README.md)<br>[examples/tutorials/doc-search/README.md](../../../../sources/VectifyAI__PageIndex/examples/tutorials/doc-search/README.md)<br>[cookbook/README.md](../../../../sources/VectifyAI__PageIndex/cookbook/README.md) |
| config | 1 | [requirements.txt](../../../../sources/VectifyAI__PageIndex/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 6 | [.github/workflows/autoclose-labeled-issues.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/autoclose-labeled-issues.yml)<br>[.github/workflows/backfill-dedupe.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/backfill-dedupe.yml)<br>[.github/workflows/codeql.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/dependency-review.yml)<br>[.github/workflows/issue-dedupe.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/issue-dedupe.yml)<br>[.github/workflows/remove-autoclose-label.yml](../../../../sources/VectifyAI__PageIndex/.github/workflows/remove-autoclose-label.yml) |
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

1. Start from key references: `pageindex/page_index_md.py`, `pageindex/page_index.py`, `examples/agentic_vectorless_rag_demo.py`.
2. Inspect retrieval/memory/indexing through: `pageindex/page_index_md.py`, `pageindex/page_index.py`, `examples/agentic_vectorless_rag_demo.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 📑 PageIndex Document Index for Vectorless, Reasoning based RAG. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, openai, ci이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
