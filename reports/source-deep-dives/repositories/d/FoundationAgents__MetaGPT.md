# FoundationAgents/MetaGPT Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

🌟 The Multi-Agent Framework: First AI Software Company, Towards Natural Language Programming

## 요약

- 조사 단위: `sources/FoundationAgents__MetaGPT` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,255 files, 260 directories, depth score 122, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/metagpt/tools/test_tool_registry.py, metagpt/tools/tool_registry.py이고, 의존성 단서는 openai, anthropic, pydantic, typer, transformers, qdrant, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | FoundationAgents/MetaGPT |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 68866 |
| Forks | 8806 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/FoundationAgents__MetaGPT](../../../../sources/FoundationAgents__MetaGPT) |
| Existing report | [reports/global-trending/repositories/FoundationAgents__MetaGPT.md](../../../global-trending/repositories/FoundationAgents__MetaGPT.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1255 / 260 |
| Max observed depth | 9 |
| Top directories | .devcontainer, .github, config, docs, examples, metagpt, tests |
| Top extensions | .py: 890, .json: 72, .txt: 55, .md: 41, .yaml: 36, .png: 28, .pdf: 20, .svg: 18, .js: 15, (none): 15, .csv: 12, .sh: 12 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 134 |
| docs | documentation surface | 23 |
| examples/di | examples workspace | 3 |
| examples/android_assistant | examples workspace | 2 |
| examples/stanford_town | examples workspace | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| examples | top-level component | 1 |
| examples/aflow | examples workspace | 1 |
| examples/exp_pool | examples workspace | 1 |
| examples/sela | examples workspace | 1 |
| examples/spo | examples workspace | 1 |
| examples/ui_with_chainlit | examples workspace | 1 |
| examples/write_design.py | examples workspace | 1 |
| metagpt | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | qdrant, milvus, faiss |
| modelRuntime | transformers |
| webRuntime | none |
| developerSurface | typer |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/metagpt/tools/test_tool_registry.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_tool_registry.py) | mcp signal |
| mcp | [metagpt/tools/tool_registry.py](../../../../sources/FoundationAgents__MetaGPT/metagpt/tools/tool_registry.py) | mcp signal |
| agentRuntime | [tests/metagpt/tools/__init__.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [tests/metagpt/tools/test_azure_tts.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_azure_tts.py) | agentRuntime signal |
| agentRuntime | [tests/metagpt/tools/test_iflytek_tts.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_iflytek_tts.py) | agentRuntime signal |
| agentRuntime | [tests/metagpt/tools/test_metagpt_oas3_api_svc.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_metagpt_oas3_api_svc.py) | agentRuntime signal |
| entrypoints | [metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/src/index.ts](../../../../sources/FoundationAgents__MetaGPT/metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/src/index.ts) | entrypoints signal |
| config | [requirements.txt](../../../../sources/FoundationAgents__MetaGPT/requirements.txt) | config signal |
| config | [metagpt/ext/sela/requirements.txt](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/sela/requirements.txt) | config signal |
| config | [metagpt/environment/minecraft/mineflayer/package.json](../../../../sources/FoundationAgents__MetaGPT/metagpt/environment/minecraft/mineflayer/package.json) | config signal |
| config | [metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/package.json](../../../../sources/FoundationAgents__MetaGPT/metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/package.json) | config signal |
| ci | [.github/workflows/build-package.yaml](../../../../sources/FoundationAgents__MetaGPT/.github/workflows/build-package.yaml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/src/index.ts](../../../../sources/FoundationAgents__MetaGPT/metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/src/index.ts) |
| agentRuntime | 183 | [tests/metagpt/tools/__init__.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/__init__.py)<br>[tests/metagpt/tools/test_azure_tts.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_azure_tts.py)<br>[tests/metagpt/tools/test_iflytek_tts.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_iflytek_tts.py)<br>[tests/metagpt/tools/test_metagpt_oas3_api_svc.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_metagpt_oas3_api_svc.py)<br>[tests/metagpt/tools/test_metagpt_text_to_image.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_metagpt_text_to_image.py)<br>[tests/metagpt/tools/test_moderation.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_moderation.py)<br>[tests/metagpt/tools/test_openai_text_to_embedding.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_openai_text_to_embedding.py)<br>[tests/metagpt/tools/test_openai_text_to_image.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_openai_text_to_image.py) |
| mcp | 2 | [tests/metagpt/tools/test_tool_registry.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_tool_registry.py)<br>[metagpt/tools/tool_registry.py](../../../../sources/FoundationAgents__MetaGPT/metagpt/tools/tool_registry.py) |
| retrieval | 119 | [tests/metagpt/utils/test_di_graph_repository.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/utils/test_di_graph_repository.py)<br>[tests/metagpt/utils/test_visual_graph_repo.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/utils/test_visual_graph_repo.py)<br>[tests/metagpt/tools/test_openai_text_to_embedding.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/test_openai_text_to_embedding.py)<br>[tests/metagpt/tools/libs/test_index_repo.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/tools/libs/test_index_repo.py)<br>[tests/metagpt/serialize_deserialize/test_memory.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/serialize_deserialize/test_memory.py)<br>[tests/metagpt/rag/__init__.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/rag/__init__.py)<br>[tests/metagpt/rag/test_large_pdf.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/rag/test_large_pdf.py)<br>[tests/metagpt/rag/retrievers/test_base_retriever.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/rag/retrievers/test_base_retriever.py) |
| spec | 58 | [requirements.txt](../../../../sources/FoundationAgents__MetaGPT/requirements.txt)<br>[tests/metagpt/serialize_deserialize/test_write_design.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/serialize_deserialize/test_write_design.py)<br>[tests/metagpt/serialize_deserialize/test_write_prd.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/serialize_deserialize/test_write_prd.py)<br>[tests/metagpt/actions/test_design_api_an.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/actions/test_design_api_an.py)<br>[tests/metagpt/actions/test_design_api_review.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/actions/test_design_api_review.py)<br>[tests/metagpt/actions/test_design_api.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/actions/test_design_api.py)<br>[tests/metagpt/actions/test_write_prd_an.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/actions/test_write_prd_an.py)<br>[tests/metagpt/actions/test_write_prd_review.py](../../../../sources/FoundationAgents__MetaGPT/tests/metagpt/actions/test_write_prd_review.py) |
| eval | 375 | [tests/__init__.py](../../../../sources/FoundationAgents__MetaGPT/tests/__init__.py)<br>[tests/config2.yaml](../../../../sources/FoundationAgents__MetaGPT/tests/config2.yaml)<br>[tests/conftest.py](../../../../sources/FoundationAgents__MetaGPT/tests/conftest.py)<br>[tests/scripts/run_install_deps.sh](../../../../sources/FoundationAgents__MetaGPT/tests/scripts/run_install_deps.sh)<br>[tests/mock/mock_aiohttp.py](../../../../sources/FoundationAgents__MetaGPT/tests/mock/mock_aiohttp.py)<br>[tests/mock/mock_curl_cffi.py](../../../../sources/FoundationAgents__MetaGPT/tests/mock/mock_curl_cffi.py)<br>[tests/mock/mock_httplib2.py](../../../../sources/FoundationAgents__MetaGPT/tests/mock/mock_httplib2.py)<br>[tests/mock/mock_llm.py](../../../../sources/FoundationAgents__MetaGPT/tests/mock/mock_llm.py) |
| security | 3 | [SECURITY.md](../../../../sources/FoundationAgents__MetaGPT/SECURITY.md)<br>[metagpt/ext/werewolf/roles/guard.py](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/werewolf/roles/guard.py)<br>[metagpt/ext/werewolf/actions/guard_actions.py](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/werewolf/actions/guard_actions.py) |
| ci | 5 | [.github/workflows/build-package.yaml](../../../../sources/FoundationAgents__MetaGPT/.github/workflows/build-package.yaml)<br>[.github/workflows/fulltest.yaml](../../../../sources/FoundationAgents__MetaGPT/.github/workflows/fulltest.yaml)<br>[.github/workflows/pre-commit.yaml](../../../../sources/FoundationAgents__MetaGPT/.github/workflows/pre-commit.yaml)<br>[.github/workflows/stale.yaml](../../../../sources/FoundationAgents__MetaGPT/.github/workflows/stale.yaml)<br>[.github/workflows/unittest.yaml](../../../../sources/FoundationAgents__MetaGPT/.github/workflows/unittest.yaml) |
| container | 2 | [Dockerfile](../../../../sources/FoundationAgents__MetaGPT/Dockerfile)<br>[.devcontainer/docker-compose.yaml](../../../../sources/FoundationAgents__MetaGPT/.devcontainer/docker-compose.yaml) |
| instruction | 0 | not obvious |
| docs | 107 | [README.md](../../../../sources/FoundationAgents__MetaGPT/README.md)<br>[tests/data/incremental_dev_project/readme.md](../../../../sources/FoundationAgents__MetaGPT/tests/data/incremental_dev_project/readme.md)<br>[metagpt/ext/stanford_town/README_CN.md](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/stanford_town/README_CN.md)<br>[metagpt/ext/stanford_town/README.md](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/stanford_town/README.md)<br>[metagpt/ext/sela/README.md](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/sela/README.md)<br>[metagpt/ext/sela/runner/README.md](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/sela/runner/README.md)<br>[metagpt/ext/android_assistant/README_CN.md](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/android_assistant/README_CN.md)<br>[metagpt/ext/android_assistant/README.md](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/android_assistant/README.md) |
| config | 7 | [requirements.txt](../../../../sources/FoundationAgents__MetaGPT/requirements.txt)<br>[metagpt/ext/sela/requirements.txt](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/sela/requirements.txt)<br>[metagpt/environment/minecraft/mineflayer/package.json](../../../../sources/FoundationAgents__MetaGPT/metagpt/environment/minecraft/mineflayer/package.json)<br>[metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/package.json](../../../../sources/FoundationAgents__MetaGPT/metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/package.json)<br>[metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/tsconfig.json](../../../../sources/FoundationAgents__MetaGPT/metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/tsconfig.json)<br>[examples/stanford_town/requirements.txt](../../../../sources/FoundationAgents__MetaGPT/examples/stanford_town/requirements.txt)<br>[examples/android_assistant/requirements.txt](../../../../sources/FoundationAgents__MetaGPT/examples/android_assistant/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 375 | [tests/__init__.py](../../../../sources/FoundationAgents__MetaGPT/tests/__init__.py)<br>[tests/config2.yaml](../../../../sources/FoundationAgents__MetaGPT/tests/config2.yaml)<br>[tests/conftest.py](../../../../sources/FoundationAgents__MetaGPT/tests/conftest.py)<br>[tests/scripts/run_install_deps.sh](../../../../sources/FoundationAgents__MetaGPT/tests/scripts/run_install_deps.sh)<br>[tests/mock/mock_aiohttp.py](../../../../sources/FoundationAgents__MetaGPT/tests/mock/mock_aiohttp.py)<br>[tests/mock/mock_curl_cffi.py](../../../../sources/FoundationAgents__MetaGPT/tests/mock/mock_curl_cffi.py) |
| CI workflows | 5 | [.github/workflows/build-package.yaml](../../../../sources/FoundationAgents__MetaGPT/.github/workflows/build-package.yaml)<br>[.github/workflows/fulltest.yaml](../../../../sources/FoundationAgents__MetaGPT/.github/workflows/fulltest.yaml)<br>[.github/workflows/pre-commit.yaml](../../../../sources/FoundationAgents__MetaGPT/.github/workflows/pre-commit.yaml)<br>[.github/workflows/stale.yaml](../../../../sources/FoundationAgents__MetaGPT/.github/workflows/stale.yaml)<br>[.github/workflows/unittest.yaml](../../../../sources/FoundationAgents__MetaGPT/.github/workflows/unittest.yaml) |
| Containers / deploy | 2 | [Dockerfile](../../../../sources/FoundationAgents__MetaGPT/Dockerfile)<br>[.devcontainer/docker-compose.yaml](../../../../sources/FoundationAgents__MetaGPT/.devcontainer/docker-compose.yaml) |
| Security / policy | 3 | [SECURITY.md](../../../../sources/FoundationAgents__MetaGPT/SECURITY.md)<br>[metagpt/ext/werewolf/roles/guard.py](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/werewolf/roles/guard.py)<br>[metagpt/ext/werewolf/actions/guard_actions.py](../../../../sources/FoundationAgents__MetaGPT/metagpt/ext/werewolf/actions/guard_actions.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/metagpt/tools/test_tool_registry.py`, `metagpt/tools/tool_registry.py`, `tests/metagpt/tools/__init__.py`.
2. Trace execution through entrypoints: `metagpt/environment/minecraft/mineflayer/mineflayer-collectblock/src/index.ts`.
3. Map agent/tool runtime through: `tests/metagpt/tools/__init__.py`, `tests/metagpt/tools/test_azure_tts.py`, `tests/metagpt/tools/test_iflytek_tts.py`.
4. Inspect retrieval/memory/indexing through: `tests/metagpt/utils/test_di_graph_repository.py`, `tests/metagpt/utils/test_visual_graph_repo.py`, `tests/metagpt/tools/test_openai_text_to_embedding.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/config2.yaml`, `tests/conftest.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 🌟 The Multi Agent Framework First AI Software Company, Towards Natural Language Programming. 핵심 구조 신호는 Python, requirements.txt, Dockerfile, README.md, LICENSE, openai이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
