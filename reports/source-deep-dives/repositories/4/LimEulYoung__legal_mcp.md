# LimEulYoung/legal_mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Legal MCP Server for Korean law search

## 요약

- 조사 단위: `sources/LimEulYoung__legal_mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 112 files, 12 directories, depth score 97, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=src/utils/embedding.py, benchmark/scripts/rag_benchmark_claude.py, benchmark/scripts/rag_benchmark_gemini.py이고, 의존성 단서는 openai, anthropic, mcp, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | LimEulYoung/legal_mcp |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/LimEulYoung__legal_mcp](../../../../sources/LimEulYoung__legal_mcp) |
| Existing report | [reports/korea-trending/repositories/LimEulYoung__legal_mcp.md](../../../korea-trending/repositories/LimEulYoung__legal_mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 112 / 12 |
| Max observed depth | 4 |
| Top directories | assets, benchmark, docs, src |
| Top extensions | .json: 70, .py: 30, .md: 5, .csv: 2, .png: 2, .example: 1, .txt: 1, (none): 1 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 12 |
| src | source boundary | 9 |
| assets | top-level component | 1 |
| benchmark | validation surface | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
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
| retrieval | [src/utils/embedding.py](../../../../sources/LimEulYoung__legal_mcp/src/utils/embedding.py) | retrieval signal |
| retrieval | [benchmark/scripts/rag_benchmark_claude.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/rag_benchmark_claude.py) | retrieval signal |
| retrieval | [benchmark/scripts/rag_benchmark_gemini.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/rag_benchmark_gemini.py) | retrieval signal |
| retrieval | [benchmark/scripts/rag_benchmark_gpt.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/rag_benchmark_gpt.py) | retrieval signal |
| entrypoints | [src/server.py](../../../../sources/LimEulYoung__legal_mcp/src/server.py) | entrypoints signal |
| docs | [README.md](../../../../sources/LimEulYoung__legal_mcp/README.md) | docs signal |
| docs | [docs/config-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/config-spec.md) | docs signal |
| docs | [docs/elasticsearch-fields.md](../../../../sources/LimEulYoung__legal_mcp/docs/elasticsearch-fields.md) | docs signal |
| docs | [docs/modules-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/modules-spec.md) | docs signal |
| eval | [docs/tools-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/tools-spec.md) | eval signal |
| eval | [benchmark/benchmark_2025.csv](../../../../sources/LimEulYoung__legal_mcp/benchmark/benchmark_2025.csv) | eval signal |
| config | [requirements.txt](../../../../sources/LimEulYoung__legal_mcp/requirements.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/server.py](../../../../sources/LimEulYoung__legal_mcp/src/server.py) |
| agentRuntime | 7 | [src/tools/__init__.py](../../../../sources/LimEulYoung__legal_mcp/src/tools/__init__.py)<br>[src/tools/get_case_content.py](../../../../sources/LimEulYoung__legal_mcp/src/tools/get_case_content.py)<br>[src/tools/get_statute_content.py](../../../../sources/LimEulYoung__legal_mcp/src/tools/get_statute_content.py)<br>[src/tools/list_statute_articles.py](../../../../sources/LimEulYoung__legal_mcp/src/tools/list_statute_articles.py)<br>[src/tools/search_cases.py](../../../../sources/LimEulYoung__legal_mcp/src/tools/search_cases.py)<br>[src/tools/search_statutes.py](../../../../sources/LimEulYoung__legal_mcp/src/tools/search_statutes.py)<br>[docs/tools-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/tools-spec.md) |
| mcp | 25 | [benchmark/scripts/mcp_benchmark_claude.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/mcp_benchmark_claude.py)<br>[benchmark/scripts/mcp_benchmark_gemini_guided_high.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/mcp_benchmark_gemini_guided_high.py)<br>[benchmark/scripts/mcp_benchmark_gemini_guided_low.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/mcp_benchmark_gemini_guided_low.py)<br>[benchmark/scripts/mcp_benchmark_gemini.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/mcp_benchmark_gemini.py)<br>[benchmark/scripts/mcp_benchmark_gpt.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/mcp_benchmark_gpt.py)<br>[benchmark/results/2026/mcp_benchmark_claude_sonnet_4_5_20250929_max_result.json](../../../../sources/LimEulYoung__legal_mcp/benchmark/results/2026/mcp_benchmark_claude_sonnet_4_5_20250929_max_result.json)<br>[benchmark/results/2026/mcp_benchmark_claude_sonnet_4_5_20250929_none_result.json](../../../../sources/LimEulYoung__legal_mcp/benchmark/results/2026/mcp_benchmark_claude_sonnet_4_5_20250929_none_result.json)<br>[benchmark/results/2026/mcp_benchmark_gemini_2_5_pro_low_result.json](../../../../sources/LimEulYoung__legal_mcp/benchmark/results/2026/mcp_benchmark_gemini_2_5_pro_low_result.json) |
| retrieval | 20 | [src/utils/embedding.py](../../../../sources/LimEulYoung__legal_mcp/src/utils/embedding.py)<br>[benchmark/scripts/rag_benchmark_claude.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/rag_benchmark_claude.py)<br>[benchmark/scripts/rag_benchmark_gemini.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/rag_benchmark_gemini.py)<br>[benchmark/scripts/rag_benchmark_gpt.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/rag_benchmark_gpt.py)<br>[benchmark/results/2026/rag_benchmark_claude_sonnet_4_5_20250929_max_result.json](../../../../sources/LimEulYoung__legal_mcp/benchmark/results/2026/rag_benchmark_claude_sonnet_4_5_20250929_max_result.json)<br>[benchmark/results/2026/rag_benchmark_claude_sonnet_4_5_20250929_non_thinking_result.json](../../../../sources/LimEulYoung__legal_mcp/benchmark/results/2026/rag_benchmark_claude_sonnet_4_5_20250929_non_thinking_result.json)<br>[benchmark/results/2026/rag_benchmark_gemini_2_5_pro_low_result.json](../../../../sources/LimEulYoung__legal_mcp/benchmark/results/2026/rag_benchmark_gemini_2_5_pro_low_result.json)<br>[benchmark/results/2026/rag_benchmark_gemini_2_5_pro_max_result.json](../../../../sources/LimEulYoung__legal_mcp/benchmark/results/2026/rag_benchmark_gemini_2_5_pro_max_result.json) |
| spec | 4 | [requirements.txt](../../../../sources/LimEulYoung__legal_mcp/requirements.txt)<br>[docs/config-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/config-spec.md)<br>[docs/modules-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/modules-spec.md)<br>[docs/tools-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/tools-spec.md) |
| eval | 89 | [docs/config-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/config-spec.md)<br>[docs/modules-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/modules-spec.md)<br>[docs/tools-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/tools-spec.md)<br>[benchmark/benchmark_2025.csv](../../../../sources/LimEulYoung__legal_mcp/benchmark/benchmark_2025.csv)<br>[benchmark/benchmark_2026.csv](../../../../sources/LimEulYoung__legal_mcp/benchmark/benchmark_2026.csv)<br>[benchmark/scripts/ablation_claude.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/ablation_claude.py)<br>[benchmark/scripts/ablation_gemini.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/ablation_gemini.py)<br>[benchmark/scripts/ablation_gpt.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/ablation_gpt.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 5 | [README.md](../../../../sources/LimEulYoung__legal_mcp/README.md)<br>[docs/config-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/config-spec.md)<br>[docs/elasticsearch-fields.md](../../../../sources/LimEulYoung__legal_mcp/docs/elasticsearch-fields.md)<br>[docs/modules-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/modules-spec.md)<br>[docs/tools-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/tools-spec.md) |
| config | 1 | [requirements.txt](../../../../sources/LimEulYoung__legal_mcp/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 89 | [docs/config-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/config-spec.md)<br>[docs/modules-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/modules-spec.md)<br>[docs/tools-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/tools-spec.md)<br>[benchmark/benchmark_2025.csv](../../../../sources/LimEulYoung__legal_mcp/benchmark/benchmark_2025.csv)<br>[benchmark/benchmark_2026.csv](../../../../sources/LimEulYoung__legal_mcp/benchmark/benchmark_2026.csv)<br>[benchmark/scripts/ablation_claude.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/ablation_claude.py) |
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

1. Start from key references: `src/utils/embedding.py`, `benchmark/scripts/rag_benchmark_claude.py`, `benchmark/scripts/rag_benchmark_gemini.py`.
2. Trace execution through entrypoints: `src/server.py`.
3. Map agent/tool runtime through: `src/tools/__init__.py`, `src/tools/get_case_content.py`, `src/tools/get_statute_content.py`.
4. Inspect retrieval/memory/indexing through: `src/utils/embedding.py`, `benchmark/scripts/rag_benchmark_claude.py`, `benchmark/scripts/rag_benchmark_gemini.py`.
5. Verify behavior through test/eval files: `docs/config-spec.md`, `docs/modules-spec.md`, `docs/tools-spec.md`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Legal MCP Server for Korean law search. 핵심 구조 신호는 Python, requirements.txt, README.md, openai, anthropic, mcp이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
