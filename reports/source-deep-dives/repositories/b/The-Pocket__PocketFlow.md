# The-Pocket/PocketFlow Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Pocket Flow: 100-line LLM framework. Let Agents build Agents!

## 요약

- 조사 단위: `sources/The-Pocket__PocketFlow` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 529 files, 138 directories, depth score 118, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=docs/index.md, docs/utility_function/embedding.md, docs/utility_function/index.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | The-Pocket/PocketFlow |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 10769 |
| Forks | 1172 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/The-Pocket__PocketFlow](../../../../sources/The-Pocket__PocketFlow) |
| Existing report | [reports/llm-wiki/repositories/The-Pocket__PocketFlow.md](../../../llm-wiki/repositories/The-Pocket__PocketFlow.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 529 / 138 |
| Max observed depth | 5 |
| Top directories | .cursor, cookbook, docs, pocketflow, tests, utils |
| Top extensions | .py: 269, .md: 110, .txt: 67, .jpg: 24, .mdc: 20, .png: 10, .html: 6, (none): 5, .csv: 4, .db: 2, .ipynb: 2, .pdf: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 43 |
| tests | validation surface | 11 |
| cookbook | top-level component | 1 |
| pocketflow | top-level component | 1 |
| utils | top-level component | 1 |


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
| retrieval | [docs/index.md](../../../../sources/The-Pocket__PocketFlow/docs/index.md) | retrieval signal |
| retrieval | [docs/utility_function/embedding.md](../../../../sources/The-Pocket__PocketFlow/docs/utility_function/embedding.md) | retrieval signal |
| retrieval | [docs/utility_function/index.md](../../../../sources/The-Pocket__PocketFlow/docs/utility_function/index.md) | retrieval signal |
| retrieval | [docs/utility_function/vector.md](../../../../sources/The-Pocket__PocketFlow/docs/utility_function/vector.md) | retrieval signal |
| entrypoints | [cookbook/pocketflow-workflow/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-workflow/main.py) | entrypoints signal |
| entrypoints | [cookbook/pocketflow-voice-chat/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-voice-chat/main.py) | entrypoints signal |
| entrypoints | [cookbook/pocketflow-tool-search/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-search/main.py) | entrypoints signal |
| entrypoints | [cookbook/pocketflow-tool-pdf-vision/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-pdf-vision/main.py) | entrypoints signal |
| docs | [README.md](../../../../sources/The-Pocket__PocketFlow/README.md) | docs signal |
| docs | [docs/_config.yml](../../../../sources/The-Pocket__PocketFlow/docs/_config.yml) | docs signal |
| docs | [docs/guide.md](../../../../sources/The-Pocket__PocketFlow/docs/guide.md) | docs signal |
| eval | [tests/test_async_batch_flow.py](../../../../sources/The-Pocket__PocketFlow/tests/test_async_batch_flow.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 54 | [cookbook/pocketflow-workflow/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-workflow/main.py)<br>[cookbook/pocketflow-voice-chat/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-voice-chat/main.py)<br>[cookbook/pocketflow-tool-search/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-search/main.py)<br>[cookbook/pocketflow-tool-pdf-vision/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-pdf-vision/main.py)<br>[cookbook/pocketflow-tool-embeddings/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-embeddings/main.py)<br>[cookbook/pocketflow-tool-database/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-database/main.py)<br>[cookbook/pocketflow-tool-crawler/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-crawler/main.py)<br>[cookbook/pocketflow-thinking/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-thinking/main.py) |
| agentRuntime | 14 | [docs/design_pattern/agent.md](../../../../sources/The-Pocket__PocketFlow/docs/design_pattern/agent.md)<br>[docs/design_pattern/workflow.md](../../../../sources/The-Pocket__PocketFlow/docs/design_pattern/workflow.md)<br>[cookbook/pocketflow-tool-search/tools/parser.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-search/tools/parser.py)<br>[cookbook/pocketflow-tool-search/tools/search.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-search/tools/search.py)<br>[cookbook/pocketflow-tool-pdf-vision/tools/pdf.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-pdf-vision/tools/pdf.py)<br>[cookbook/pocketflow-tool-pdf-vision/tools/vision.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-pdf-vision/tools/vision.py)<br>[cookbook/pocketflow-tool-embeddings/tools/embeddings.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-embeddings/tools/embeddings.py)<br>[cookbook/pocketflow-tool-database/tools/database.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-database/tools/database.py) |
| mcp | 5 | [cookbook/pocketflow-mcp/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-mcp/main.py)<br>[cookbook/pocketflow-mcp/README.md](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-mcp/README.md)<br>[cookbook/pocketflow-mcp/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-mcp/requirements.txt)<br>[cookbook/pocketflow-mcp/simple_server.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-mcp/simple_server.py)<br>[cookbook/pocketflow-mcp/utils.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-mcp/utils.py) |
| retrieval | 35 | [docs/index.md](../../../../sources/The-Pocket__PocketFlow/docs/index.md)<br>[docs/utility_function/embedding.md](../../../../sources/The-Pocket__PocketFlow/docs/utility_function/embedding.md)<br>[docs/utility_function/index.md](../../../../sources/The-Pocket__PocketFlow/docs/utility_function/index.md)<br>[docs/utility_function/vector.md](../../../../sources/The-Pocket__PocketFlow/docs/utility_function/vector.md)<br>[docs/design_pattern/index.md](../../../../sources/The-Pocket__PocketFlow/docs/design_pattern/index.md)<br>[docs/design_pattern/rag.md](../../../../sources/The-Pocket__PocketFlow/docs/design_pattern/rag.md)<br>[docs/core_abstraction/index.md](../../../../sources/The-Pocket__PocketFlow/docs/core_abstraction/index.md)<br>[cookbook/pocketflow-rag/flow.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-rag/flow.py) |
| spec | 75 | [docs/design_pattern/agent.md](../../../../sources/The-Pocket__PocketFlow/docs/design_pattern/agent.md)<br>[docs/design_pattern/index.md](../../../../sources/The-Pocket__PocketFlow/docs/design_pattern/index.md)<br>[docs/design_pattern/mapreduce.md](../../../../sources/The-Pocket__PocketFlow/docs/design_pattern/mapreduce.md)<br>[docs/design_pattern/multi_agent.md](../../../../sources/The-Pocket__PocketFlow/docs/design_pattern/multi_agent.md)<br>[docs/design_pattern/rag.md](../../../../sources/The-Pocket__PocketFlow/docs/design_pattern/rag.md)<br>[docs/design_pattern/structure.md](../../../../sources/The-Pocket__PocketFlow/docs/design_pattern/structure.md)<br>[docs/design_pattern/workflow.md](../../../../sources/The-Pocket__PocketFlow/docs/design_pattern/workflow.md)<br>[cookbook/pocketflow-workflow/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-workflow/requirements.txt) |
| eval | 35 | [tests/test_async_batch_flow.py](../../../../sources/The-Pocket__PocketFlow/tests/test_async_batch_flow.py)<br>[tests/test_async_batch_node.py](../../../../sources/The-Pocket__PocketFlow/tests/test_async_batch_node.py)<br>[tests/test_async_flow.py](../../../../sources/The-Pocket__PocketFlow/tests/test_async_flow.py)<br>[tests/test_async_parallel_batch_flow.py](../../../../sources/The-Pocket__PocketFlow/tests/test_async_parallel_batch_flow.py)<br>[tests/test_async_parallel_batch_node.py](../../../../sources/The-Pocket__PocketFlow/tests/test_async_parallel_batch_node.py)<br>[tests/test_batch_flow.py](../../../../sources/The-Pocket__PocketFlow/tests/test_batch_flow.py)<br>[tests/test_batch_node.py](../../../../sources/The-Pocket__PocketFlow/tests/test_batch_node.py)<br>[tests/test_fall_back.py](../../../../sources/The-Pocket__PocketFlow/tests/test_fall_back.py) |
| security | 5 | [cookbook/pocketflow-chat-guardrail/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-chat-guardrail/main.py)<br>[cookbook/pocketflow-chat-guardrail/README.md](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-chat-guardrail/README.md)<br>[cookbook/pocketflow-chat-guardrail/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-chat-guardrail/requirements.txt)<br>[cookbook/pocketflow-chat-guardrail/utils.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-chat-guardrail/utils.py)<br>[cookbook/pocketflow-a2a/common/utils/push_notification_auth.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-a2a/common/utils/push_notification_auth.py) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 20 | [.cursor/rules/guide_for_pocketflow.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/guide_for_pocketflow.mdc)<br>[.cursor/rules/utility_function/chunking.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/chunking.mdc)<br>[.cursor/rules/utility_function/embedding.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/embedding.mdc)<br>[.cursor/rules/utility_function/llm.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/llm.mdc)<br>[.cursor/rules/utility_function/text_to_speech.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/text_to_speech.mdc)<br>[.cursor/rules/utility_function/vector.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/vector.mdc)<br>[.cursor/rules/utility_function/viz.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/viz.mdc)<br>[.cursor/rules/utility_function/websearch.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/websearch.mdc) |
| docs | 109 | [README.md](../../../../sources/The-Pocket__PocketFlow/README.md)<br>[docs/_config.yml](../../../../sources/The-Pocket__PocketFlow/docs/_config.yml)<br>[docs/guide.md](../../../../sources/The-Pocket__PocketFlow/docs/guide.md)<br>[docs/index.md](../../../../sources/The-Pocket__PocketFlow/docs/index.md)<br>[docs/utility_function/chunking.md](../../../../sources/The-Pocket__PocketFlow/docs/utility_function/chunking.md)<br>[docs/utility_function/embedding.md](../../../../sources/The-Pocket__PocketFlow/docs/utility_function/embedding.md)<br>[docs/utility_function/index.md](../../../../sources/The-Pocket__PocketFlow/docs/utility_function/index.md)<br>[docs/utility_function/llm.md](../../../../sources/The-Pocket__PocketFlow/docs/utility_function/llm.md) |
| config | 52 | [cookbook/pocketflow-workflow/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-workflow/requirements.txt)<br>[cookbook/pocketflow-voice-chat/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-voice-chat/requirements.txt)<br>[cookbook/pocketflow-tracing/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tracing/requirements.txt)<br>[cookbook/pocketflow-tool-search/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-search/requirements.txt)<br>[cookbook/pocketflow-tool-pdf-vision/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-pdf-vision/requirements.txt)<br>[cookbook/pocketflow-tool-embeddings/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-embeddings/requirements.txt)<br>[cookbook/pocketflow-tool-database/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-database/requirements.txt)<br>[cookbook/pocketflow-tool-crawler/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-tool-crawler/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 35 | [tests/test_async_batch_flow.py](../../../../sources/The-Pocket__PocketFlow/tests/test_async_batch_flow.py)<br>[tests/test_async_batch_node.py](../../../../sources/The-Pocket__PocketFlow/tests/test_async_batch_node.py)<br>[tests/test_async_flow.py](../../../../sources/The-Pocket__PocketFlow/tests/test_async_flow.py)<br>[tests/test_async_parallel_batch_flow.py](../../../../sources/The-Pocket__PocketFlow/tests/test_async_parallel_batch_flow.py)<br>[tests/test_async_parallel_batch_node.py](../../../../sources/The-Pocket__PocketFlow/tests/test_async_parallel_batch_node.py)<br>[tests/test_batch_flow.py](../../../../sources/The-Pocket__PocketFlow/tests/test_batch_flow.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 5 | [cookbook/pocketflow-chat-guardrail/main.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-chat-guardrail/main.py)<br>[cookbook/pocketflow-chat-guardrail/README.md](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-chat-guardrail/README.md)<br>[cookbook/pocketflow-chat-guardrail/requirements.txt](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-chat-guardrail/requirements.txt)<br>[cookbook/pocketflow-chat-guardrail/utils.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-chat-guardrail/utils.py)<br>[cookbook/pocketflow-a2a/common/utils/push_notification_auth.py](../../../../sources/The-Pocket__PocketFlow/cookbook/pocketflow-a2a/common/utils/push_notification_auth.py) |
| Agent instructions | 20 | [.cursor/rules/guide_for_pocketflow.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/guide_for_pocketflow.mdc)<br>[.cursor/rules/utility_function/chunking.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/chunking.mdc)<br>[.cursor/rules/utility_function/embedding.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/embedding.mdc)<br>[.cursor/rules/utility_function/llm.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/llm.mdc)<br>[.cursor/rules/utility_function/text_to_speech.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/text_to_speech.mdc)<br>[.cursor/rules/utility_function/vector.mdc](../../../../sources/The-Pocket__PocketFlow/.cursor/rules/utility_function/vector.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `docs/index.md`, `docs/utility_function/embedding.md`, `docs/utility_function/index.md`.
2. Trace execution through entrypoints: `cookbook/pocketflow-workflow/main.py`, `cookbook/pocketflow-voice-chat/main.py`, `cookbook/pocketflow-tool-search/main.py`.
3. Map agent/tool runtime through: `docs/design_pattern/agent.md`, `docs/design_pattern/workflow.md`, `cookbook/pocketflow-tool-search/tools/parser.py`.
4. Inspect retrieval/memory/indexing through: `docs/index.md`, `docs/utility_function/embedding.md`, `docs/utility_function/index.md`.
5. Verify behavior through test/eval files: `tests/test_async_batch_flow.py`, `tests/test_async_batch_node.py`, `tests/test_async_flow.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Pocket Flow 100 line LLM framework. Let Agents build Agents!. 핵심 구조 신호는 Python, README.md, LICENSE, tests, docs, agent-instructions이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 ci signal not obvious, needs deeper structural scan입니다.
