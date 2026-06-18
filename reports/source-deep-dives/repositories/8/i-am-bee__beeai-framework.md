# i-am-bee/beeai-framework Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Build production-ready AI agents in both Python and Typescript.

## 요약

- 조사 단위: `sources/i-am-bee__beeai-framework` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,082 files, 297 directories, depth score 125, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=typescript/src/tools/mcp.test.ts, typescript/src/tools/mcp.ts, typescript/src/adapters/mcp/serve/http_server.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | i-am-bee/beeai-framework |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 3297 |
| Forks | 452 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/i-am-bee__beeai-framework](../../../../sources/i-am-bee__beeai-framework) |
| Existing report | [reports/global-trending/repositories/i-am-bee__beeai-framework.md](../../../global-trending/repositories/i-am-bee__beeai-framework.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1082 / 297 |
| Max observed depth | 7 |
| Top directories | .github, docs, docs-old, python, typescript |
| Top extensions | .py: 556, .ts: 345, .mdx: 56, .md: 32, (none): 13, .yml: 12, .json: 11, .astro: 10, .ipynb: 7, .mjs: 7, .toml: 7, .svg: 6 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 36 |
| .github | ci surface | 1 |
| docs-old | documentation surface | 1 |
| python | top-level component | 1 |
| typescript | top-level component | 1 |


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
| mcp | [typescript/src/tools/mcp.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/tools/mcp.test.ts) | mcp signal |
| mcp | [typescript/src/tools/mcp.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/tools/mcp.ts) | mcp signal |
| mcp | [typescript/src/adapters/mcp/serve/http_server.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/adapters/mcp/serve/http_server.ts) | mcp signal |
| mcp | [typescript/src/adapters/mcp/serve/in_memory_store.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/adapters/mcp/serve/in_memory_store.ts) | mcp signal |
| agentRuntime | [typescript/tests/e2e/tools/arxiv.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/arxiv.test.ts) | agentRuntime signal |
| agentRuntime | [typescript/tests/e2e/tools/custom.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/custom.test.ts) | agentRuntime signal |
| agentRuntime | [typescript/tests/e2e/tools/duckDuckGoSearch.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/duckDuckGoSearch.test.ts) | agentRuntime signal |
| agentRuntime | [typescript/tests/e2e/tools/openapi.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/openapi.test.ts) | agentRuntime signal |
| entrypoints | [typescript/src/index.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/index.ts) | entrypoints signal |
| entrypoints | [typescript/src/serve/server.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/serve/server.ts) | entrypoints signal |
| entrypoints | [typescript/src/adapters/mcp/serve/server.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/adapters/mcp/serve/server.ts) | entrypoints signal |
| entrypoints | [typescript/src/adapters/a2a/serve/server.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/adapters/a2a/serve/server.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 14 | [typescript/src/index.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/index.ts)<br>[typescript/src/serve/server.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/serve/server.ts)<br>[typescript/src/adapters/mcp/serve/server.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/adapters/mcp/serve/server.ts)<br>[typescript/src/adapters/a2a/serve/server.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/adapters/a2a/serve/server.ts)<br>[typescript/examples/workflows/competitive-analysis/main.ts](../../../../sources/i-am-bee__beeai-framework/typescript/examples/workflows/competitive-analysis/main.ts)<br>[python/beeai_framework/serve/server.py](../../../../sources/i-am-bee__beeai-framework/python/beeai_framework/serve/server.py)<br>[python/beeai_framework/adapters/watsonx_orchestrate/serve/server.py](../../../../sources/i-am-bee__beeai-framework/python/beeai_framework/adapters/watsonx_orchestrate/serve/server.py)<br>[python/beeai_framework/adapters/openai/serve/server.py](../../../../sources/i-am-bee__beeai-framework/python/beeai_framework/adapters/openai/serve/server.py) |
| agentRuntime | 396 | [typescript/tests/e2e/tools/arxiv.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/arxiv.test.ts)<br>[typescript/tests/e2e/tools/custom.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/custom.test.ts)<br>[typescript/tests/e2e/tools/duckDuckGoSearch.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/duckDuckGoSearch.test.ts)<br>[typescript/tests/e2e/tools/openapi.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/openapi.test.ts)<br>[typescript/tests/e2e/tools/openMeteo.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/openMeteo.test.ts)<br>[typescript/tests/e2e/tools/python.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/python.test.ts)<br>[typescript/tests/e2e/tools/wikipedia.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/wikipedia.test.ts)<br>[typescript/tests/e2e/tools/database/sql.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/database/sql.test.ts) |
| mcp | 28 | [typescript/src/tools/mcp.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/tools/mcp.test.ts)<br>[typescript/src/tools/mcp.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/tools/mcp.ts)<br>[typescript/src/adapters/mcp/serve/http_server.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/adapters/mcp/serve/http_server.ts)<br>[typescript/src/adapters/mcp/serve/in_memory_store.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/adapters/mcp/serve/in_memory_store.ts)<br>[typescript/src/adapters/mcp/serve/server.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/adapters/mcp/serve/server.ts)<br>[typescript/examples/tools/mcp.ts](../../../../sources/i-am-bee__beeai-framework/typescript/examples/tools/mcp.ts)<br>[typescript/examples/serve/mcp_tool.ts](../../../../sources/i-am-bee__beeai-framework/typescript/examples/serve/mcp_tool.ts)<br>[python/tests/tools/test_mcp_tool.py](../../../../sources/i-am-bee__beeai-framework/python/tests/tools/test_mcp_tool.py) |
| retrieval | 84 | [typescript/src/index.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/index.ts)<br>[typescript/src/memory/base.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/memory/base.ts)<br>[typescript/src/memory/slidingMemory.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/memory/slidingMemory.test.ts)<br>[typescript/src/memory/slidingMemory.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/memory/slidingMemory.ts)<br>[typescript/src/memory/summarizeMemory.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/memory/summarizeMemory.ts)<br>[typescript/src/memory/tokenMemory.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/memory/tokenMemory.test.ts)<br>[typescript/src/memory/tokenMemory.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/memory/tokenMemory.ts)<br>[typescript/src/memory/unconstrainedMemory.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/memory/unconstrainedMemory.test.ts) |
| spec | 63 | [typescript/src/agents/requirement/agent.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/agents/requirement/agent.ts)<br>[typescript/src/agents/requirement/prompts.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/agents/requirement/prompts.ts)<br>[typescript/src/agents/requirement/runner.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/agents/requirement/runner.ts)<br>[typescript/src/agents/requirement/types.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/agents/requirement/types.ts)<br>[typescript/src/agents/requirement/utils/llm.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/agents/requirement/utils/llm.ts)<br>[typescript/src/agents/requirement/utils/tool.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/agents/requirement/utils/tool.ts)<br>[typescript/src/agents/requirement/utils/toolCallChecker.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/agents/requirement/utils/toolCallChecker.ts)<br>[typescript/src/agents/requirement/requirements/conditional.ts](../../../../sources/i-am-bee__beeai-framework/typescript/src/agents/requirement/requirements/conditional.ts) |
| eval | 127 | [typescript/tests/setup.examples.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/setup.examples.ts)<br>[typescript/tests/setup.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/setup.ts)<br>[typescript/tests/utils/file.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/utils/file.ts)<br>[typescript/tests/utils/llmFactory.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/utils/llmFactory.ts)<br>[typescript/tests/examples/examples.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/examples/examples.test.ts)<br>[typescript/tests/e2e/utils.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/utils.ts)<br>[typescript/tests/e2e/tools/arxiv.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/arxiv.test.ts)<br>[typescript/tests/e2e/tools/custom.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/tools/custom.test.ts) |
| security | 7 | [SECURITY.md](../../../../sources/i-am-bee__beeai-framework/SECURITY.md)<br>[python/SECURITY.md](../../../../sources/i-am-bee__beeai-framework/python/SECURITY.md)<br>[python/tests/tools/test_sandbox.py](../../../../sources/i-am-bee__beeai-framework/python/tests/tools/test_sandbox.py)<br>[python/examples/tools/custom/sandbox.py](../../../../sources/i-am-bee__beeai-framework/python/examples/tools/custom/sandbox.py)<br>[python/beeai_framework/tools/code/sandbox.py](../../../../sources/i-am-bee__beeai-framework/python/beeai_framework/tools/code/sandbox.py)<br>[python/beeai_framework/agents/requirement/requirements/ask_permission.py](../../../../sources/i-am-bee__beeai-framework/python/beeai_framework/agents/requirement/requirements/ask_permission.py)<br>[python/beeai_framework/agents/experimental/requirements/ask_permission.py](../../../../sources/i-am-bee__beeai-framework/python/beeai_framework/agents/experimental/requirements/ask_permission.py) |
| ci | 8 | [.github/workflows/auto-label.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/auto-label.yml)<br>[.github/workflows/docs-pages.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/docs-pages.yml)<br>[.github/workflows/py_e2e_tests.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/py_e2e_tests.yml)<br>[.github/workflows/py_main.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/py_main.yml)<br>[.github/workflows/release.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/release.yml)<br>[.github/workflows/ts_e2e_tests.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/ts_e2e_tests.yml)<br>[.github/workflows/ts_examples_tests.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/ts_examples_tests.yml)<br>[.github/workflows/ts_main.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/ts_main.yml) |
| container | 0 | not obvious |
| instruction | 2 | [docs-old/modules/agents.mdx](../../../../sources/i-am-bee__beeai-framework/docs-old/modules/agents.mdx)<br>[docs/src/content/docs/modules/agents.mdx](../../../../sources/i-am-bee__beeai-framework/docs/src/content/docs/modules/agents.mdx) |
| docs | 72 | [README.md](../../../../sources/i-am-bee__beeai-framework/README.md)<br>[typescript/README.md](../../../../sources/i-am-bee__beeai-framework/typescript/README.md)<br>[typescript/examples/README.md](../../../../sources/i-am-bee__beeai-framework/typescript/examples/README.md)<br>[typescript/examples/workflows/competitive-analysis/README.md](../../../../sources/i-am-bee__beeai-framework/typescript/examples/workflows/competitive-analysis/README.md)<br>[typescript/examples/agents/granite/README.md](../../../../sources/i-am-bee__beeai-framework/typescript/examples/agents/granite/README.md)<br>[python/README.md](../../../../sources/i-am-bee__beeai-framework/python/README.md)<br>[python/examples/README.md](../../../../sources/i-am-bee__beeai-framework/python/examples/README.md)<br>[python/examples/notebooks/README.md](../../../../sources/i-am-bee__beeai-framework/python/examples/notebooks/README.md) |
| config | 13 | [typescript/package.json](../../../../sources/i-am-bee__beeai-framework/typescript/package.json)<br>[typescript/tsconfig.json](../../../../sources/i-am-bee__beeai-framework/typescript/tsconfig.json)<br>[typescript/examples/tsconfig.json](../../../../sources/i-am-bee__beeai-framework/typescript/examples/tsconfig.json)<br>[python/poetry.lock](../../../../sources/i-am-bee__beeai-framework/python/poetry.lock)<br>[python/pyproject.toml](../../../../sources/i-am-bee__beeai-framework/python/pyproject.toml)<br>[python/examples/requirements.txt](../../../../sources/i-am-bee__beeai-framework/python/examples/requirements.txt)<br>[python/examples/serve/requirements.txt](../../../../sources/i-am-bee__beeai-framework/python/examples/serve/requirements.txt)<br>[python/examples/notebooks/requirements.txt](../../../../sources/i-am-bee__beeai-framework/python/examples/notebooks/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 127 | [typescript/tests/setup.examples.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/setup.examples.ts)<br>[typescript/tests/setup.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/setup.ts)<br>[typescript/tests/utils/file.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/utils/file.ts)<br>[typescript/tests/utils/llmFactory.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/utils/llmFactory.ts)<br>[typescript/tests/examples/examples.test.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/examples/examples.test.ts)<br>[typescript/tests/e2e/utils.ts](../../../../sources/i-am-bee__beeai-framework/typescript/tests/e2e/utils.ts) |
| CI workflows | 8 | [.github/workflows/auto-label.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/auto-label.yml)<br>[.github/workflows/docs-pages.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/docs-pages.yml)<br>[.github/workflows/py_e2e_tests.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/py_e2e_tests.yml)<br>[.github/workflows/py_main.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/py_main.yml)<br>[.github/workflows/release.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/release.yml)<br>[.github/workflows/ts_e2e_tests.yml](../../../../sources/i-am-bee__beeai-framework/.github/workflows/ts_e2e_tests.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 7 | [SECURITY.md](../../../../sources/i-am-bee__beeai-framework/SECURITY.md)<br>[python/SECURITY.md](../../../../sources/i-am-bee__beeai-framework/python/SECURITY.md)<br>[python/tests/tools/test_sandbox.py](../../../../sources/i-am-bee__beeai-framework/python/tests/tools/test_sandbox.py)<br>[python/examples/tools/custom/sandbox.py](../../../../sources/i-am-bee__beeai-framework/python/examples/tools/custom/sandbox.py)<br>[python/beeai_framework/tools/code/sandbox.py](../../../../sources/i-am-bee__beeai-framework/python/beeai_framework/tools/code/sandbox.py)<br>[python/beeai_framework/agents/requirement/requirements/ask_permission.py](../../../../sources/i-am-bee__beeai-framework/python/beeai_framework/agents/requirement/requirements/ask_permission.py) |
| Agent instructions | 2 | [docs-old/modules/agents.mdx](../../../../sources/i-am-bee__beeai-framework/docs-old/modules/agents.mdx)<br>[docs/src/content/docs/modules/agents.mdx](../../../../sources/i-am-bee__beeai-framework/docs/src/content/docs/modules/agents.mdx) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `typescript/src/tools/mcp.test.ts`, `typescript/src/tools/mcp.ts`, `typescript/src/adapters/mcp/serve/http_server.ts`.
2. Trace execution through entrypoints: `typescript/src/index.ts`, `typescript/src/serve/server.ts`, `typescript/src/adapters/mcp/serve/server.ts`.
3. Map agent/tool runtime through: `typescript/tests/e2e/tools/arxiv.test.ts`, `typescript/tests/e2e/tools/custom.test.ts`, `typescript/tests/e2e/tools/duckDuckGoSearch.test.ts`.
4. Inspect retrieval/memory/indexing through: `typescript/src/index.ts`, `typescript/src/memory/base.ts`, `typescript/src/memory/slidingMemory.test.ts`.
5. Verify behavior through test/eval files: `typescript/tests/setup.examples.ts`, `typescript/tests/setup.ts`, `typescript/tests/utils/file.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Build production ready AI agents in both Python and Typescript.. 핵심 구조 신호는 Python, README.md, LICENSE, ci, docs, spec-artifacts이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
