# modelcontextprotocol/python-sdk Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

The official Python SDK for Model Context Protocol servers and clients

## 요약

- 조사 단위: `sources/modelcontextprotocol__python-sdk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 467 files, 94 directories, depth score 122, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/mcp/server/__main__.py, src/mcp/server/mcpserver/server.py, src/mcp/server/lowlevel/server.py이고, 의존성 단서는 anthropic, mcp, modelcontextprotocol, fastapi, pydantic, typer, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | modelcontextprotocol/python-sdk |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | Python |
| Stars | 23356 |
| Forks | 3550 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/modelcontextprotocol__python-sdk](../../../../sources/modelcontextprotocol__python-sdk) |
| Existing report | [reports/global-trending/repositories/modelcontextprotocol__python-sdk.md](../../../global-trending/repositories/modelcontextprotocol__python-sdk.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 467 / 94 |
| Max observed depth | 6 |
| Top directories | .claude, .github, docs, examples, schema, scripts, src, tests |
| Top extensions | .py: 382, .md: 31, .toml: 15, .yml: 12, (none): 9, .yaml: 5, .json: 4, .sh: 2, .typed: 2, .db: 1, .example: 1, .lock: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 72 |
| src | source boundary | 71 |
| examples/servers | examples workspace | 38 |
| docs | documentation surface | 11 |
| examples/clients | examples workspace | 11 |
| examples/mcpserver | examples workspace | 3 |
| examples/snippets | examples workspace | 2 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| schema | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | mcp | mcp |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | anthropic |
| agentProtocols | mcp, modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | fastapi |
| developerSurface | typer |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [src/mcp/server/__main__.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/server/__main__.py) | entrypoints signal |
| entrypoints | [src/mcp/server/mcpserver/server.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/server/mcpserver/server.py) | entrypoints signal |
| entrypoints | [src/mcp/server/lowlevel/server.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/server/lowlevel/server.py) | entrypoints signal |
| entrypoints | [src/mcp/client/__main__.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/client/__main__.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/modelcontextprotocol__python-sdk/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/modelcontextprotocol__python-sdk/uv.lock) | config signal |
| config | [examples/snippets/pyproject.toml](../../../../sources/modelcontextprotocol__python-sdk/examples/snippets/pyproject.toml) | config signal |
| config | [examples/servers/structured-output-lowlevel/pyproject.toml](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/structured-output-lowlevel/pyproject.toml) | config signal |
| ci | [.github/workflows/claude.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/claude.yml) | ci signal |
| ci | [.github/workflows/comment-on-release.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/comment-on-release.yml) | ci signal |
| ci | [.github/workflows/conformance.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/conformance.yml) | ci signal |
| ci | [.github/workflows/deploy-docs.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/deploy-docs.yml) | ci signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 26 | [src/mcp/server/__main__.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/server/__main__.py)<br>[src/mcp/server/mcpserver/server.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/server/mcpserver/server.py)<br>[src/mcp/server/lowlevel/server.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/server/lowlevel/server.py)<br>[src/mcp/client/__main__.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/client/__main__.py)<br>[examples/servers/structured-output-lowlevel/mcp_structured_output_lowlevel/__main__.py](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/structured-output-lowlevel/mcp_structured_output_lowlevel/__main__.py)<br>[examples/servers/sse-polling-demo/mcp_sse_polling_demo/__main__.py](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/sse-polling-demo/mcp_sse_polling_demo/__main__.py)<br>[examples/servers/sse-polling-demo/mcp_sse_polling_demo/server.py](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/sse-polling-demo/mcp_sse_polling_demo/server.py)<br>[examples/servers/simple-tool/mcp_simple_tool/__main__.py](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/simple-tool/mcp_simple_tool/__main__.py) |
| agentRuntime | 17 | [AGENTS.md](../../../../sources/modelcontextprotocol__python-sdk/AGENTS.md)<br>[tests/server/mcpserver/tools/__init__.py](../../../../sources/modelcontextprotocol__python-sdk/tests/server/mcpserver/tools/__init__.py)<br>[tests/server/mcpserver/tools/test_base.py](../../../../sources/modelcontextprotocol__python-sdk/tests/server/mcpserver/tools/test_base.py)<br>[src/mcp/shared/context.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/shared/context.py)<br>[src/mcp/shared/memory.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/shared/memory.py)<br>[src/mcp/shared/tool_name_validation.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/shared/tool_name_validation.py)<br>[src/mcp/server/context.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/server/context.py)<br>[src/mcp/server/runner.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/server/runner.py) |
| mcp | 155 | [src/mcp/__init__.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/__init__.py)<br>[src/mcp/py.typed](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/py.typed)<br>[src/mcp/types/__init__.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/types/__init__.py)<br>[src/mcp/types/_types.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/types/_types.py)<br>[src/mcp/types/_wire_base.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/types/_wire_base.py)<br>[src/mcp/types/jsonrpc.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/types/jsonrpc.py)<br>[src/mcp/types/methods.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/types/methods.py)<br>[src/mcp/types/v2026_07_28/__init__.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/types/v2026_07_28/__init__.py) |
| retrieval | 5 | [tests/client/transports/test_memory.py](../../../../sources/modelcontextprotocol__python-sdk/tests/client/transports/test_memory.py)<br>[src/mcp/shared/memory.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/shared/memory.py)<br>[src/mcp/client/_memory.py](../../../../sources/modelcontextprotocol__python-sdk/src/mcp/client/_memory.py)<br>[examples/mcpserver/memory.py](../../../../sources/modelcontextprotocol__python-sdk/examples/mcpserver/memory.py)<br>[docs/index.md](../../../../sources/modelcontextprotocol__python-sdk/docs/index.md) |
| spec | 2 | [tests/interaction/_requirements.py](../../../../sources/modelcontextprotocol__python-sdk/tests/interaction/_requirements.py)<br>[examples/clients/simple-chatbot/mcp_simple_chatbot/requirements.txt](../../../../sources/modelcontextprotocol__python-sdk/examples/clients/simple-chatbot/mcp_simple_chatbot/requirements.txt) |
| eval | 181 | [tests/__init__.py](../../../../sources/modelcontextprotocol__python-sdk/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/modelcontextprotocol__python-sdk/tests/conftest.py)<br>[tests/test_examples.py](../../../../sources/modelcontextprotocol__python-sdk/tests/test_examples.py)<br>[tests/test_types.py](../../../../sources/modelcontextprotocol__python-sdk/tests/test_types.py)<br>[tests/types/__init__.py](../../../../sources/modelcontextprotocol__python-sdk/tests/types/__init__.py)<br>[tests/types/test_methods.py](../../../../sources/modelcontextprotocol__python-sdk/tests/types/test_methods.py)<br>[tests/types/test_parity.py](../../../../sources/modelcontextprotocol__python-sdk/tests/types/test_parity.py)<br>[tests/types/test_wire_frames.py](../../../../sources/modelcontextprotocol__python-sdk/tests/types/test_wire_frames.py) |
| security | 68 | [SECURITY.md](../../../../sources/modelcontextprotocol__python-sdk/SECURITY.md)<br>[tests/shared/test_auth_utils.py](../../../../sources/modelcontextprotocol__python-sdk/tests/shared/test_auth_utils.py)<br>[tests/shared/test_auth.py](../../../../sources/modelcontextprotocol__python-sdk/tests/shared/test_auth.py)<br>[tests/server/test_sse_security.py](../../../../sources/modelcontextprotocol__python-sdk/tests/server/test_sse_security.py)<br>[tests/server/test_streamable_http_security.py](../../../../sources/modelcontextprotocol__python-sdk/tests/server/test_streamable_http_security.py)<br>[tests/server/test_transport_security.py](../../../../sources/modelcontextprotocol__python-sdk/tests/server/test_transport_security.py)<br>[tests/server/mcpserver/auth/__init__.py](../../../../sources/modelcontextprotocol__python-sdk/tests/server/mcpserver/auth/__init__.py)<br>[tests/server/mcpserver/auth/test_auth_integration.py](../../../../sources/modelcontextprotocol__python-sdk/tests/server/mcpserver/auth/test_auth_integration.py) |
| ci | 9 | [.github/workflows/claude.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/claude.yml)<br>[.github/workflows/comment-on-release.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/comment-on-release.yml)<br>[.github/workflows/conformance.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/conformance.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/deploy-docs.yml)<br>[.github/workflows/main.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/main.yml)<br>[.github/workflows/publish-pypi.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/publish-pypi.yml)<br>[.github/workflows/shared.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/shared.yml)<br>[.github/workflows/weekly-lockfile-update.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/weekly-lockfile-update.yml) |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/modelcontextprotocol__python-sdk/AGENTS.md)<br>[CLAUDE.md](../../../../sources/modelcontextprotocol__python-sdk/CLAUDE.md) |
| docs | 27 | [mkdocs.yml](../../../../sources/modelcontextprotocol__python-sdk/mkdocs.yml)<br>[README.md](../../../../sources/modelcontextprotocol__python-sdk/README.md)<br>[README.v2.md](../../../../sources/modelcontextprotocol__python-sdk/README.v2.md)<br>[tests/interaction/README.md](../../../../sources/modelcontextprotocol__python-sdk/tests/interaction/README.md)<br>[schema/README.md](../../../../sources/modelcontextprotocol__python-sdk/schema/README.md)<br>[examples/README.md](../../../../sources/modelcontextprotocol__python-sdk/examples/README.md)<br>[examples/servers/sse-polling-demo/README.md](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/sse-polling-demo/README.md)<br>[examples/servers/simple-tool/README.md](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/simple-tool/README.md) |
| config | 17 | [pyproject.toml](../../../../sources/modelcontextprotocol__python-sdk/pyproject.toml)<br>[uv.lock](../../../../sources/modelcontextprotocol__python-sdk/uv.lock)<br>[examples/snippets/pyproject.toml](../../../../sources/modelcontextprotocol__python-sdk/examples/snippets/pyproject.toml)<br>[examples/servers/structured-output-lowlevel/pyproject.toml](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/structured-output-lowlevel/pyproject.toml)<br>[examples/servers/sse-polling-demo/pyproject.toml](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/sse-polling-demo/pyproject.toml)<br>[examples/servers/simple-tool/pyproject.toml](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/simple-tool/pyproject.toml)<br>[examples/servers/simple-streamablehttp-stateless/pyproject.toml](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/simple-streamablehttp-stateless/pyproject.toml)<br>[examples/servers/simple-streamablehttp/pyproject.toml](../../../../sources/modelcontextprotocol__python-sdk/examples/servers/simple-streamablehttp/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 181 | [tests/__init__.py](../../../../sources/modelcontextprotocol__python-sdk/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/modelcontextprotocol__python-sdk/tests/conftest.py)<br>[tests/test_examples.py](../../../../sources/modelcontextprotocol__python-sdk/tests/test_examples.py)<br>[tests/test_types.py](../../../../sources/modelcontextprotocol__python-sdk/tests/test_types.py)<br>[tests/types/__init__.py](../../../../sources/modelcontextprotocol__python-sdk/tests/types/__init__.py)<br>[tests/types/test_methods.py](../../../../sources/modelcontextprotocol__python-sdk/tests/types/test_methods.py) |
| CI workflows | 9 | [.github/workflows/claude.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/claude.yml)<br>[.github/workflows/comment-on-release.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/comment-on-release.yml)<br>[.github/workflows/conformance.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/conformance.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/deploy-docs.yml)<br>[.github/workflows/main.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/main.yml)<br>[.github/workflows/publish-pypi.yml](../../../../sources/modelcontextprotocol__python-sdk/.github/workflows/publish-pypi.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 68 | [SECURITY.md](../../../../sources/modelcontextprotocol__python-sdk/SECURITY.md)<br>[tests/shared/test_auth_utils.py](../../../../sources/modelcontextprotocol__python-sdk/tests/shared/test_auth_utils.py)<br>[tests/shared/test_auth.py](../../../../sources/modelcontextprotocol__python-sdk/tests/shared/test_auth.py)<br>[tests/server/test_sse_security.py](../../../../sources/modelcontextprotocol__python-sdk/tests/server/test_sse_security.py)<br>[tests/server/test_streamable_http_security.py](../../../../sources/modelcontextprotocol__python-sdk/tests/server/test_streamable_http_security.py)<br>[tests/server/test_transport_security.py](../../../../sources/modelcontextprotocol__python-sdk/tests/server/test_transport_security.py) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/modelcontextprotocol__python-sdk/AGENTS.md)<br>[CLAUDE.md](../../../../sources/modelcontextprotocol__python-sdk/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/mcp/server/__main__.py`, `src/mcp/server/mcpserver/server.py`, `src/mcp/server/lowlevel/server.py`.
2. Trace execution through entrypoints: `src/mcp/server/__main__.py`, `src/mcp/server/mcpserver/server.py`, `src/mcp/server/lowlevel/server.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/server/mcpserver/tools/__init__.py`, `tests/server/mcpserver/tools/test_base.py`.
4. Inspect retrieval/memory/indexing through: `tests/client/transports/test_memory.py`, `src/mcp/shared/memory.py`, `src/mcp/client/_memory.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/test_examples.py`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 The official Python SDK for Model Context Protocol servers and clients. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
