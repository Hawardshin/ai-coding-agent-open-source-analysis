# NevaMind-AI/memU Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

The memory harness for proactive AI agents — structured storage, intent capture, 10x token reduction.

## 요약

- 조사 단위: `sources/NevaMind-AI__memU` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 240 files, 57 directories, depth score 105, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, src/memu/workflow/__init__.py, src/memu/workflow/interceptor.py이고, 의존성 단서는 openai, claude, langchain, langgraph, pydantic, pgvector, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | NevaMind-AI/memU |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 13885 |
| Forks | 1037 |
| License | NOASSERTION |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/NevaMind-AI__memU](../../../../sources/NevaMind-AI__memU) |
| Existing report | [reports/global-trending/repositories/NevaMind-AI__memU.md](../../../global-trending/repositories/NevaMind-AI__memU.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 240 / 57 |
| Max observed depth | 6 |
| Top directories | .github, assets, docs, examples, readme, src, tests |
| Top extensions | .py: 149, .md: 36, .png: 16, .yml: 8, .txt: 7, .jpg: 6, .json: 4, (none): 3, .lock: 2, .toml: 2, .cfg: 1, .gif: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 46 |
| docs | documentation surface | 21 |
| tests | validation surface | 20 |
| examples/proactive | examples workspace | 16 |
| examples/sealos-assistant | examples workspace | 4 |
| examples/resources | examples workspace | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| examples | top-level component | 1 |
| examples/example_1_conversation_memory.py | examples workspace | 1 |
| examples/example_3_multimodal_memory.py | examples workspace | 1 |
| examples/example_4_openrouter_memory.py | examples workspace | 1 |
| examples/output | examples workspace | 1 |
| examples/test_nebius_provider.py | examples workspace | 1 |
| readme | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install | make install |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | check | make check |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test | make test |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, claude |
| agentProtocols | none |
| agentFrameworks | langchain, langgraph |
| vectorStores | pgvector |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [AGENTS.md](../../../../sources/NevaMind-AI__memU/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/memu/workflow/__init__.py](../../../../sources/NevaMind-AI__memU/src/memu/workflow/__init__.py) | agentRuntime signal |
| agentRuntime | [src/memu/workflow/interceptor.py](../../../../sources/NevaMind-AI__memU/src/memu/workflow/interceptor.py) | agentRuntime signal |
| agentRuntime | [src/memu/workflow/pipeline.py](../../../../sources/NevaMind-AI__memU/src/memu/workflow/pipeline.py) | agentRuntime signal |
| entrypoints | [examples/sealos-assistant/main.py](../../../../sources/NevaMind-AI__memU/examples/sealos-assistant/main.py) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/NevaMind-AI__memU/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/NevaMind-AI__memU/Cargo.toml) | config signal |
| config | [Makefile](../../../../sources/NevaMind-AI__memU/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/NevaMind-AI__memU/pyproject.toml) | config signal |
| ci | [.github/workflows/build.yml](../../../../sources/NevaMind-AI__memU/.github/workflows/build.yml) | ci support |
| ci | [.github/workflows/pr-title.yml](../../../../sources/NevaMind-AI__memU/.github/workflows/pr-title.yml) | ci support |
| eval | [tests/__init__.py](../../../../sources/NevaMind-AI__memU/tests/__init__.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [examples/sealos-assistant/main.py](../../../../sources/NevaMind-AI__memU/examples/sealos-assistant/main.py) |
| agentRuntime | 30 | [AGENTS.md](../../../../sources/NevaMind-AI__memU/AGENTS.md)<br>[src/memu/workflow/__init__.py](../../../../sources/NevaMind-AI__memU/src/memu/workflow/__init__.py)<br>[src/memu/workflow/interceptor.py](../../../../sources/NevaMind-AI__memU/src/memu/workflow/interceptor.py)<br>[src/memu/workflow/pipeline.py](../../../../sources/NevaMind-AI__memU/src/memu/workflow/pipeline.py)<br>[src/memu/workflow/runner.py](../../../../sources/NevaMind-AI__memU/src/memu/workflow/runner.py)<br>[src/memu/workflow/step.py](../../../../sources/NevaMind-AI__memU/src/memu/workflow/step.py)<br>[src/memu/utils/tool.py](../../../../sources/NevaMind-AI__memU/src/memu/utils/tool.py)<br>[src/memu/prompts/memory_type/__init__.py](../../../../sources/NevaMind-AI__memU/src/memu/prompts/memory_type/__init__.py) |
| mcp | 0 | not obvious |
| retrieval | 39 | [tests/test_tool_memory.py](../../../../sources/NevaMind-AI__memU/tests/test_tool_memory.py)<br>[tests/test_vector.py](../../../../sources/NevaMind-AI__memU/tests/test_vector.py)<br>[src/memu/prompts/retrieve/pre_retrieval_decision.py](../../../../sources/NevaMind-AI__memU/src/memu/prompts/retrieve/pre_retrieval_decision.py)<br>[src/memu/prompts/memory_type/__init__.py](../../../../sources/NevaMind-AI__memU/src/memu/prompts/memory_type/__init__.py)<br>[src/memu/prompts/memory_type/behavior.py](../../../../sources/NevaMind-AI__memU/src/memu/prompts/memory_type/behavior.py)<br>[src/memu/prompts/memory_type/event.py](../../../../sources/NevaMind-AI__memU/src/memu/prompts/memory_type/event.py)<br>[src/memu/prompts/memory_type/knowledge.py](../../../../sources/NevaMind-AI__memU/src/memu/prompts/memory_type/knowledge.py)<br>[src/memu/prompts/memory_type/profile.py](../../../../sources/NevaMind-AI__memU/src/memu/prompts/memory_type/profile.py) |
| spec | 6 | [examples/sealos-assistant/requirements.txt](../../../../sources/NevaMind-AI__memU/examples/sealos-assistant/requirements.txt)<br>[docs/architecture.md](../../../../sources/NevaMind-AI__memU/docs/architecture.md)<br>[docs/adr/0001-workflow-pipeline-architecture.md](../../../../sources/NevaMind-AI__memU/docs/adr/0001-workflow-pipeline-architecture.md)<br>[docs/adr/0002-pluggable-storage-and-vector-strategy.md](../../../../sources/NevaMind-AI__memU/docs/adr/0002-pluggable-storage-and-vector-strategy.md)<br>[docs/adr/0003-user-scope-in-data-model.md](../../../../sources/NevaMind-AI__memU/docs/adr/0003-user-scope-in-data-model.md)<br>[docs/adr/README.md](../../../../sources/NevaMind-AI__memU/docs/adr/README.md) |
| eval | 19 | [tests/__init__.py](../../../../sources/NevaMind-AI__memU/tests/__init__.py)<br>[tests/rust_entry_test.py](../../../../sources/NevaMind-AI__memU/tests/rust_entry_test.py)<br>[tests/test_client_wrapper.py](../../../../sources/NevaMind-AI__memU/tests/test_client_wrapper.py)<br>[tests/test_inmemory.py](../../../../sources/NevaMind-AI__memU/tests/test_inmemory.py)<br>[tests/test_lazyllm.py](../../../../sources/NevaMind-AI__memU/tests/test_lazyllm.py)<br>[tests/test_openrouter.py](../../../../sources/NevaMind-AI__memU/tests/test_openrouter.py)<br>[tests/test_postgres_migration_config.py](../../../../sources/NevaMind-AI__memU/tests/test_postgres_migration_config.py)<br>[tests/test_postgres.py](../../../../sources/NevaMind-AI__memU/tests/test_postgres.py) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/build.yml](../../../../sources/NevaMind-AI__memU/.github/workflows/build.yml)<br>[.github/workflows/pr-title.yml](../../../../sources/NevaMind-AI__memU/.github/workflows/pr-title.yml)<br>[.github/workflows/release-please.yml](../../../../sources/NevaMind-AI__memU/.github/workflows/release-please.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/NevaMind-AI__memU/AGENTS.md) |
| docs | 24 | [README.md](../../../../sources/NevaMind-AI__memU/README.md)<br>[readme/README_en.md](../../../../sources/NevaMind-AI__memU/readme/README_en.md)<br>[readme/README_es.md](../../../../sources/NevaMind-AI__memU/readme/README_es.md)<br>[readme/README_fr.md](../../../../sources/NevaMind-AI__memU/readme/README_fr.md)<br>[readme/README_ja.md](../../../../sources/NevaMind-AI__memU/readme/README_ja.md)<br>[readme/README_ko.md](../../../../sources/NevaMind-AI__memU/readme/README_ko.md)<br>[readme/README_zh.md](../../../../sources/NevaMind-AI__memU/readme/README_zh.md)<br>[examples/sealos-assistant/README.md](../../../../sources/NevaMind-AI__memU/examples/sealos-assistant/README.md) |
| config | 6 | [Cargo.lock](../../../../sources/NevaMind-AI__memU/Cargo.lock)<br>[Cargo.toml](../../../../sources/NevaMind-AI__memU/Cargo.toml)<br>[Makefile](../../../../sources/NevaMind-AI__memU/Makefile)<br>[pyproject.toml](../../../../sources/NevaMind-AI__memU/pyproject.toml)<br>[uv.lock](../../../../sources/NevaMind-AI__memU/uv.lock)<br>[examples/sealos-assistant/requirements.txt](../../../../sources/NevaMind-AI__memU/examples/sealos-assistant/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 19 | [tests/__init__.py](../../../../sources/NevaMind-AI__memU/tests/__init__.py)<br>[tests/rust_entry_test.py](../../../../sources/NevaMind-AI__memU/tests/rust_entry_test.py)<br>[tests/test_client_wrapper.py](../../../../sources/NevaMind-AI__memU/tests/test_client_wrapper.py)<br>[tests/test_inmemory.py](../../../../sources/NevaMind-AI__memU/tests/test_inmemory.py)<br>[tests/test_lazyllm.py](../../../../sources/NevaMind-AI__memU/tests/test_lazyllm.py)<br>[tests/test_openrouter.py](../../../../sources/NevaMind-AI__memU/tests/test_openrouter.py) |
| CI workflows | 3 | [.github/workflows/build.yml](../../../../sources/NevaMind-AI__memU/.github/workflows/build.yml)<br>[.github/workflows/pr-title.yml](../../../../sources/NevaMind-AI__memU/.github/workflows/pr-title.yml)<br>[.github/workflows/release-please.yml](../../../../sources/NevaMind-AI__memU/.github/workflows/release-please.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/NevaMind-AI__memU/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `AGENTS.md`, `src/memu/workflow/__init__.py`, `src/memu/workflow/interceptor.py`.
2. Trace execution through entrypoints: `examples/sealos-assistant/main.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `src/memu/workflow/__init__.py`, `src/memu/workflow/interceptor.py`.
4. Inspect retrieval/memory/indexing through: `tests/test_tool_memory.py`, `tests/test_vector.py`, `src/memu/prompts/retrieve/pre_retrieval_decision.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/rust_entry_test.py`, `tests/test_client_wrapper.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 The memory harness for proactive AI agents — structured storage, intent capture, 10x token reduction.. 핵심 구조 신호는 Python, pyproject.toml, Cargo.toml, Makefile, README.md, AGENTS.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
