# szczyglis-dev/py-gpt Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Desktop AI Assistant powered by GPT-5, GPT-4, o1, o3, Gemini, Claude, Ollama, DeepSeek, Perplexity, Grok, Bielik, chat, vision, voice, RAG, image and video generation, agents, tools, MCP, plugins, speech synthesis and recognition, web search, memory, presets, assistants,and more. Linux, Windows, Mac

## 요약

- 조사 단위: `sources/szczyglis-dev__py-gpt` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,086 files, 395 directories, depth score 124, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/pygpt_net/plugin/mcp/__init__.py, src/pygpt_net/plugin/mcp/config.py, src/pygpt_net/plugin/mcp/plugin.py이고, 의존성 단서는 openai, anthropic, claude, gemini, mcp, langchain, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | szczyglis-dev/py-gpt |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 1827 |
| Forks | 330 |
| License | NOASSERTION |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/szczyglis-dev__py-gpt](../../../../sources/szczyglis-dev__py-gpt) |
| Existing report | [reports/llm-wiki/repositories/szczyglis-dev__py-gpt.md](../../../llm-wiki/repositories/szczyglis-dev__py-gpt.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3086 / 395 |
| Max observed depth | 9 |
| Top directories | .github, bin, data, docs, examples, snap, src, tests |
| Top extensions | .py: 1418, .js: 802, .css: 196, .ini: 190, .svg: 163, .png: 70, .json: 40, .ttf: 34, .rst: 21, .otf: 20, .woff: 20, .woff2: 20 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 72 |
| tests | validation surface | 65 |
| docs | documentation surface | 43 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| data | top-level component | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| snap | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | pygpt | pygpt |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic, claude, gemini |
| agentProtocols | mcp |
| agentFrameworks | langchain, llama-index |
| vectorStores | chroma, qdrant |
| modelRuntime | transformers, ollama, llama |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [src/pygpt_net/plugin/mcp/__init__.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/plugin/mcp/__init__.py) | mcp signal |
| mcp | [src/pygpt_net/plugin/mcp/config.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/plugin/mcp/config.py) | mcp signal |
| mcp | [src/pygpt_net/plugin/mcp/plugin.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/plugin/mcp/plugin.py) | mcp signal |
| mcp | [src/pygpt_net/plugin/mcp/worker.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/plugin/mcp/worker.py) | mcp signal |
| agentRuntime | [tests/provider/api/openai/agents/test_openai_agents_client.py](../../../../sources/szczyglis-dev__py-gpt/tests/provider/api/openai/agents/test_openai_agents_client.py) | agentRuntime signal |
| agentRuntime | [tests/provider/api/openai/agents/test_openai_agents_computer.py](../../../../sources/szczyglis-dev__py-gpt/tests/provider/api/openai/agents/test_openai_agents_computer.py) | agentRuntime signal |
| agentRuntime | [tests/provider/api/openai/agents/test_openai_agents_remote_tools.py](../../../../sources/szczyglis-dev__py-gpt/tests/provider/api/openai/agents/test_openai_agents_remote_tools.py) | agentRuntime signal |
| agentRuntime | [tests/plugin/agent/test_plugin_agent.py](../../../../sources/szczyglis-dev__py-gpt/tests/plugin/agent/test_plugin_agent.py) | agentRuntime signal |
| entrypoints | [src/pygpt_net/ui/main.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/ui/main.py) | entrypoints signal |
| entrypoints | [bin/build_all.bat](../../../../sources/szczyglis-dev__py-gpt/bin/build_all.bat) | entrypoints signal |
| entrypoints | [bin/build_appimage.sh](../../../../sources/szczyglis-dev__py-gpt/bin/build_appimage.sh) | entrypoints signal |
| entrypoints | [bin/build_installer_store.bat](../../../../sources/szczyglis-dev__py-gpt/bin/build_installer_store.bat) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 15 | [src/pygpt_net/ui/main.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/ui/main.py)<br>[bin/build_all.bat](../../../../sources/szczyglis-dev__py-gpt/bin/build_all.bat)<br>[bin/build_appimage.sh](../../../../sources/szczyglis-dev__py-gpt/bin/build_appimage.sh)<br>[bin/build_installer_store.bat](../../../../sources/szczyglis-dev__py-gpt/bin/build_installer_store.bat)<br>[bin/build_installer.bat](../../../../sources/szczyglis-dev__py-gpt/bin/build_installer.bat)<br>[bin/build.bat](../../../../sources/szczyglis-dev__py-gpt/bin/build.bat)<br>[bin/build.sh](../../../../sources/szczyglis-dev__py-gpt/bin/build.sh)<br>[bin/clean.sh](../../../../sources/szczyglis-dev__py-gpt/bin/clean.sh) |
| agentRuntime | 216 | [tests/provider/api/openai/agents/test_openai_agents_client.py](../../../../sources/szczyglis-dev__py-gpt/tests/provider/api/openai/agents/test_openai_agents_client.py)<br>[tests/provider/api/openai/agents/test_openai_agents_computer.py](../../../../sources/szczyglis-dev__py-gpt/tests/provider/api/openai/agents/test_openai_agents_computer.py)<br>[tests/provider/api/openai/agents/test_openai_agents_remote_tools.py](../../../../sources/szczyglis-dev__py-gpt/tests/provider/api/openai/agents/test_openai_agents_remote_tools.py)<br>[tests/plugin/agent/test_plugin_agent.py](../../../../sources/szczyglis-dev__py-gpt/tests/plugin/agent/test_plugin_agent.py)<br>[tests/core/agents/test_agent_legacy.py](../../../../sources/szczyglis-dev__py-gpt/tests/core/agents/test_agent_legacy.py)<br>[tests/core/agents/test_memory.py](../../../../sources/szczyglis-dev__py-gpt/tests/core/agents/test_memory.py)<br>[tests/core/agents/test_provider.py](../../../../sources/szczyglis-dev__py-gpt/tests/core/agents/test_provider.py)<br>[tests/core/agents/test_runner.py](../../../../sources/szczyglis-dev__py-gpt/tests/core/agents/test_runner.py) |
| mcp | 6 | [src/pygpt_net/plugin/mcp/__init__.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/plugin/mcp/__init__.py)<br>[src/pygpt_net/plugin/mcp/config.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/plugin/mcp/config.py)<br>[src/pygpt_net/plugin/mcp/plugin.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/plugin/mcp/plugin.py)<br>[src/pygpt_net/plugin/mcp/worker.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/plugin/mcp/worker.py)<br>[src/pygpt_net/data/locale/plugin.mcp.en.ini](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/locale/plugin.mcp.en.ini)<br>[docs/source/images/v2_mcp.png](../../../../sources/szczyglis-dev__py-gpt/docs/source/images/v2_mcp.png) |
| retrieval | 85 | [tests/provider/vector_stores/test_base_store.py](../../../../sources/szczyglis-dev__py-gpt/tests/provider/vector_stores/test_base_store.py)<br>[tests/core/agents/test_memory.py](../../../../sources/szczyglis-dev__py-gpt/tests/core/agents/test_memory.py)<br>[src/pygpt_net/ui/widget/lists/index_combo.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/ui/widget/lists/index_combo.py)<br>[src/pygpt_net/ui/widget/lists/index.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/ui/widget/lists/index.py)<br>[src/pygpt_net/provider/vector_stores/__init__.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/provider/vector_stores/__init__.py)<br>[src/pygpt_net/provider/vector_stores/base.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/provider/vector_stores/base.py)<br>[src/pygpt_net/provider/vector_stores/chroma.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/provider/vector_stores/chroma.py)<br>[src/pygpt_net/provider/vector_stores/ctx_attachment.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/provider/vector_stores/ctx_attachment.py) |
| spec | 3 | [requirements.txt](../../../../sources/szczyglis-dev__py-gpt/requirements.txt)<br>[docs/requirements.txt](../../../../sources/szczyglis-dev__py-gpt/docs/requirements.txt)<br>[docs/source/requirements.rst](../../../../sources/szczyglis-dev__py-gpt/docs/source/requirements.rst) |
| eval | 201 | [run-tests.sh](../../../../sources/szczyglis-dev__py-gpt/run-tests.sh)<br>[tests/__init__.py](../../../../sources/szczyglis-dev__py-gpt/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/szczyglis-dev__py-gpt/tests/conftest.py)<br>[tests/mocks.py](../../../../sources/szczyglis-dev__py-gpt/tests/mocks.py)<br>[tests/test_data.py](../../../../sources/szczyglis-dev__py-gpt/tests/test_data.py)<br>[tests/test_utils.py](../../../../sources/szczyglis-dev__py-gpt/tests/test_utils.py)<br>[tests/provider/vector_stores/test_base_store.py](../../../../sources/szczyglis-dev__py-gpt/tests/provider/vector_stores/test_base_store.py)<br>[tests/provider/llms/test_llm_anthropic.py](../../../../sources/szczyglis-dev__py-gpt/tests/provider/llms/test_llm_anthropic.py) |
| security | 5 | [privacy-policy.md](../../../../sources/szczyglis-dev__py-gpt/privacy-policy.md)<br>[SECURITY.md](../../../../sources/szczyglis-dev__py-gpt/SECURITY.md)<br>[src/pygpt_net/plugin/cmd_mouse_control/worker_sandbox.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/plugin/cmd_mouse_control/worker_sandbox.py)<br>[src/pygpt_net/data/icons/security.svg](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/icons/security.svg)<br>[docs/source/security.rst](../../../../sources/szczyglis-dev__py-gpt/docs/source/security.rst) |
| ci | 0 | not obvious |
| container | 4 | [src/pygpt_net/data/js/highlight/languages/dockerfile.js](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/js/highlight/languages/dockerfile.js)<br>[src/pygpt_net/data/js/highlight/languages/dockerfile.min.js](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/js/highlight/languages/dockerfile.min.js)<br>[src/pygpt_net/data/js/highlight/es/languages/dockerfile.js](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/js/highlight/es/languages/dockerfile.js)<br>[src/pygpt_net/data/js/highlight/es/languages/dockerfile.min.js](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/js/highlight/es/languages/dockerfile.min.js) |
| instruction | 0 | not obvious |
| docs | 91 | [README.md](../../../../sources/szczyglis-dev__py-gpt/README.md)<br>[src/pygpt_net/data/win32/README.rtf](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/win32/README.rtf)<br>[src/pygpt_net/data/js/highlight/README.md](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/js/highlight/README.md)<br>[examples/README.md](../../../../sources/szczyglis-dev__py-gpt/examples/README.md)<br>[docs/build-en.sh](../../../../sources/szczyglis-dev__py-gpt/docs/build-en.sh)<br>[docs/build-pl.sh](../../../../sources/szczyglis-dev__py-gpt/docs/build-pl.sh)<br>[docs/install.txt](../../../../sources/szczyglis-dev__py-gpt/docs/install.txt)<br>[docs/make.bat](../../../../sources/szczyglis-dev__py-gpt/docs/make.bat) |
| config | 7 | [poetry.lock](../../../../sources/szczyglis-dev__py-gpt/poetry.lock)<br>[pyproject.toml](../../../../sources/szczyglis-dev__py-gpt/pyproject.toml)<br>[requirements.txt](../../../../sources/szczyglis-dev__py-gpt/requirements.txt)<br>[src/pygpt_net/data/js/highlight/package.json](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/js/highlight/package.json)<br>[src/pygpt_net/data/js/highlight/es/package.json](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/js/highlight/es/package.json)<br>[docs/Makefile](../../../../sources/szczyglis-dev__py-gpt/docs/Makefile)<br>[docs/requirements.txt](../../../../sources/szczyglis-dev__py-gpt/docs/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 201 | [run-tests.sh](../../../../sources/szczyglis-dev__py-gpt/run-tests.sh)<br>[tests/__init__.py](../../../../sources/szczyglis-dev__py-gpt/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/szczyglis-dev__py-gpt/tests/conftest.py)<br>[tests/mocks.py](../../../../sources/szczyglis-dev__py-gpt/tests/mocks.py)<br>[tests/test_data.py](../../../../sources/szczyglis-dev__py-gpt/tests/test_data.py)<br>[tests/test_utils.py](../../../../sources/szczyglis-dev__py-gpt/tests/test_utils.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 4 | [src/pygpt_net/data/js/highlight/languages/dockerfile.js](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/js/highlight/languages/dockerfile.js)<br>[src/pygpt_net/data/js/highlight/languages/dockerfile.min.js](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/js/highlight/languages/dockerfile.min.js)<br>[src/pygpt_net/data/js/highlight/es/languages/dockerfile.js](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/js/highlight/es/languages/dockerfile.js)<br>[src/pygpt_net/data/js/highlight/es/languages/dockerfile.min.js](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/js/highlight/es/languages/dockerfile.min.js) |
| Security / policy | 5 | [privacy-policy.md](../../../../sources/szczyglis-dev__py-gpt/privacy-policy.md)<br>[SECURITY.md](../../../../sources/szczyglis-dev__py-gpt/SECURITY.md)<br>[src/pygpt_net/plugin/cmd_mouse_control/worker_sandbox.py](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/plugin/cmd_mouse_control/worker_sandbox.py)<br>[src/pygpt_net/data/icons/security.svg](../../../../sources/szczyglis-dev__py-gpt/src/pygpt_net/data/icons/security.svg)<br>[docs/source/security.rst](../../../../sources/szczyglis-dev__py-gpt/docs/source/security.rst) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/pygpt_net/plugin/mcp/__init__.py`, `src/pygpt_net/plugin/mcp/config.py`, `src/pygpt_net/plugin/mcp/plugin.py`.
2. Trace execution through entrypoints: `src/pygpt_net/ui/main.py`, `bin/build_all.bat`, `bin/build_appimage.sh`.
3. Map agent/tool runtime through: `tests/provider/api/openai/agents/test_openai_agents_client.py`, `tests/provider/api/openai/agents/test_openai_agents_computer.py`, `tests/provider/api/openai/agents/test_openai_agents_remote_tools.py`.
4. Inspect retrieval/memory/indexing through: `tests/provider/vector_stores/test_base_store.py`, `tests/core/agents/test_memory.py`, `src/pygpt_net/ui/widget/lists/index_combo.py`.
5. Verify behavior through test/eval files: `run-tests.sh`, `tests/__init__.py`, `tests/conftest.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Desktop AI Assistant powered by GPT 5, GPT 4, o1, o3, Gemini, Claude, Ollama, DeepSeek, Perplexity, Grok, Bielik, chat, . 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, LICENSE, openai이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
