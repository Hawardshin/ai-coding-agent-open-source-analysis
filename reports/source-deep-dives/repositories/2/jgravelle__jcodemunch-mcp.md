# jgravelle/jcodemunch-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

The leading, most token-efficient MCP server for GitHub source code exploration via tree-sitter AST parsing

## 요약

- 조사 단위: `sources/jgravelle__jcodemunch-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 597 files, 67 directories, depth score 130, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/jcodemunch_mcp/__init__.py, src/jcodemunch_mcp/__main__.py, src/jcodemunch_mcp/agent_selector.py이고, 의존성 단서는 openai, anthropic, claude, gemini, mcp, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | jgravelle/jcodemunch-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1924 |
| Forks | 295 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/jgravelle__jcodemunch-mcp](../../../../sources/jgravelle__jcodemunch-mcp) |
| Existing report | [reports/global-trending/repositories/jgravelle__jcodemunch-mcp.md](../../../global-trending/repositories/jgravelle__jcodemunch-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 597 / 67 |
| Max observed depth | 5 |
| Top directories | .github, benchmarks, cli, clients, examples, munch-bench, packaging, scripts, speedreview, src, tests, vscode-extension |
| Top extensions | .py: 466, .md: 42, .json: 17, .yaml: 15, .astro: 10, (none): 8, .yml: 7, .ts: 4, .cshtml: 2, .php: 2, .al: 1, .c: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 99 |
| tests | validation surface | 50 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| cli | top-level component | 1 |
| clients | source boundary | 1 |
| examples | top-level component | 1 |
| examples/otel-collector | examples workspace | 1 |
| munch-bench | validation surface | 1 |
| packaging | top-level component | 1 |
| scripts | top-level component | 1 |
| speedreview | top-level component | 1 |
| vscode-extension | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | jcodemunch-mcp | jcodemunch-mcp |
| utility | pyproject.toml | gcm | gcm |
| utility | pyproject.toml | munch-bench | munch-bench |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic, claude, gemini |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | transformers |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [src/jcodemunch_mcp/__init__.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/__init__.py) | mcp signal |
| mcp | [src/jcodemunch_mcp/__main__.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/__main__.py) | mcp signal |
| mcp | [src/jcodemunch_mcp/agent_selector.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/agent_selector.py) | mcp signal |
| mcp | [src/jcodemunch_mcp/config.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/config.py) | mcp signal |
| agentRuntime | [AGENT_HINTS.md](../../../../sources/jgravelle__jcodemunch-mcp/AGENT_HINTS.md) | agentRuntime signal |
| agentRuntime | [AGENT_HOOKS.md](../../../../sources/jgravelle__jcodemunch-mcp/AGENT_HOOKS.md) | agentRuntime signal |
| agentRuntime | [AGENT_INSTALL_UNIVERSAL.md](../../../../sources/jgravelle__jcodemunch-mcp/AGENT_INSTALL_UNIVERSAL.md) | agentRuntime signal |
| agentRuntime | [AGENTS.md](../../../../sources/jgravelle__jcodemunch-mcp/AGENTS.md) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/jgravelle__jcodemunch-mcp/server.json) | entrypoints signal |
| entrypoints | [src/jcodemunch_mcp/server.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/server.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/jgravelle__jcodemunch-mcp/CLAUDE.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/jgravelle__jcodemunch-mcp/pyproject.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [server.json](../../../../sources/jgravelle__jcodemunch-mcp/server.json)<br>[src/jcodemunch_mcp/__main__.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/__main__.py)<br>[src/jcodemunch_mcp/server.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/server.py) |
| agentRuntime | 118 | [AGENT_HINTS.md](../../../../sources/jgravelle__jcodemunch-mcp/AGENT_HINTS.md)<br>[AGENT_HOOKS.md](../../../../sources/jgravelle__jcodemunch-mcp/AGENT_HOOKS.md)<br>[AGENT_INSTALL_UNIVERSAL.md](../../../../sources/jgravelle__jcodemunch-mcp/AGENT_INSTALL_UNIVERSAL.md)<br>[AGENTS.md](../../../../sources/jgravelle__jcodemunch-mcp/AGENTS.md)<br>[CONTEXT_PROVIDERS.md](../../../../sources/jgravelle__jcodemunch-mcp/CONTEXT_PROVIDERS.md)<br>[src/jcodemunch_mcp/agent_selector.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/agent_selector.py)<br>[src/jcodemunch_mcp/hook_event.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/hook_event.py)<br>[src/jcodemunch_mcp/tools/__init__.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/tools/__init__.py) |
| mcp | 215 | [src/jcodemunch_mcp/__init__.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/__init__.py)<br>[src/jcodemunch_mcp/__main__.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/__main__.py)<br>[src/jcodemunch_mcp/agent_selector.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/agent_selector.py)<br>[src/jcodemunch_mcp/config.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/config.py)<br>[src/jcodemunch_mcp/credentials.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/credentials.py)<br>[src/jcodemunch_mcp/hook_event.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/hook_event.py)<br>[src/jcodemunch_mcp/path_map.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/path_map.py)<br>[src/jcodemunch_mcp/progress.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/progress.py) |
| retrieval | 32 | [tests/test_call_graph_ast.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_call_graph_ast.py)<br>[tests/test_delete_index_cli.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_delete_index_cli.py)<br>[tests/test_dependency_graph_imports_alias.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_dependency_graph_imports_alias.py)<br>[tests/test_embed_drift.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_embed_drift.py)<br>[tests/test_index_file.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_index_file.py)<br>[tests/test_retrieval_tools.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_retrieval_tools.py)<br>[tests/test_watcher_memory_cache.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_watcher_memory_cache.py)<br>[src/jcodemunch_mcp/tools/_call_graph.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/tools/_call_graph.py) |
| spec | 5 | [ARCHITECTURE.md](../../../../sources/jgravelle__jcodemunch-mcp/ARCHITECTURE.md)<br>[SPEC_MUNCH.md](../../../../sources/jgravelle__jcodemunch-mcp/SPEC_MUNCH.md)<br>[SPEC.md](../../../../sources/jgravelle__jcodemunch-mcp/SPEC.md)<br>[tests/test_architecture_tools.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_architecture_tools.py)<br>[benchmarks/requirements-rag-bench.txt](../../../../sources/jgravelle__jcodemunch-mcp/benchmarks/requirements-rag-bench.txt) |
| eval | 298 | [SPEC_MUNCH.md](../../../../sources/jgravelle__jcodemunch-mcp/SPEC_MUNCH.md)<br>[SPEC.md](../../../../sources/jgravelle__jcodemunch-mcp/SPEC.md)<br>[tests/__init__.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/__init__.py)<br>[tests/conftest_helpers.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/conftest_helpers.py)<br>[tests/conftest.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/conftest.py)<br>[tests/test_adaptive_languages.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_adaptive_languages.py)<br>[tests/test_agent_selector.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_agent_selector.py)<br>[tests/test_al.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_al.py) |
| security | 7 | [SECURITY.md](../../../../sources/jgravelle__jcodemunch-mcp/SECURITY.md)<br>[tests/test_audit_agent_config.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_audit_agent_config.py)<br>[tests/test_claude_md_policy.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_claude_md_policy.py)<br>[tests/test_security.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_security.py)<br>[src/jcodemunch_mcp/security.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/security.py)<br>[src/jcodemunch_mcp/tools/audit_agent_config.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/tools/audit_agent_config.py)<br>[benchmarks/ab-test-naming-audit-2026-03-18.md](../../../../sources/jgravelle__jcodemunch-mcp/benchmarks/ab-test-naming-audit-2026-03-18.md) |
| ci | 4 | [.github/workflows/health-radar-comment.yml](../../../../sources/jgravelle__jcodemunch-mcp/.github/workflows/health-radar-comment.yml)<br>[.github/workflows/health-radar.yml](../../../../sources/jgravelle__jcodemunch-mcp/.github/workflows/health-radar.yml)<br>[.github/workflows/sign-release.yml](../../../../sources/jgravelle__jcodemunch-mcp/.github/workflows/sign-release.yml)<br>[.github/workflows/test.yml](../../../../sources/jgravelle__jcodemunch-mcp/.github/workflows/test.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/jgravelle__jcodemunch-mcp/docker-compose.yml)<br>[Dockerfile](../../../../sources/jgravelle__jcodemunch-mcp/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/jgravelle__jcodemunch-mcp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/jgravelle__jcodemunch-mcp/CLAUDE.md) |
| docs | 9 | [README.md](../../../../sources/jgravelle__jcodemunch-mcp/README.md)<br>[vscode-extension/README.md](../../../../sources/jgravelle__jcodemunch-mcp/vscode-extension/README.md)<br>[speedreview/README.md](../../../../sources/jgravelle__jcodemunch-mcp/speedreview/README.md)<br>[examples/otel-collector/README.md](../../../../sources/jgravelle__jcodemunch-mcp/examples/otel-collector/README.md)<br>[clients/ts/README.md](../../../../sources/jgravelle__jcodemunch-mcp/clients/ts/README.md)<br>[cli/README.md](../../../../sources/jgravelle__jcodemunch-mcp/cli/README.md)<br>[benchmarks/README.md](../../../../sources/jgravelle__jcodemunch-mcp/benchmarks/README.md)<br>[benchmarks/token_baselines/README.md](../../../../sources/jgravelle__jcodemunch-mcp/benchmarks/token_baselines/README.md) |
| config | 5 | [pyproject.toml](../../../../sources/jgravelle__jcodemunch-mcp/pyproject.toml)<br>[uv.lock](../../../../sources/jgravelle__jcodemunch-mcp/uv.lock)<br>[vscode-extension/package.json](../../../../sources/jgravelle__jcodemunch-mcp/vscode-extension/package.json)<br>[vscode-extension/tsconfig.json](../../../../sources/jgravelle__jcodemunch-mcp/vscode-extension/tsconfig.json)<br>[benchmarks/requirements-rag-bench.txt](../../../../sources/jgravelle__jcodemunch-mcp/benchmarks/requirements-rag-bench.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 298 | [SPEC_MUNCH.md](../../../../sources/jgravelle__jcodemunch-mcp/SPEC_MUNCH.md)<br>[SPEC.md](../../../../sources/jgravelle__jcodemunch-mcp/SPEC.md)<br>[tests/__init__.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/__init__.py)<br>[tests/conftest_helpers.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/conftest_helpers.py)<br>[tests/conftest.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/conftest.py)<br>[tests/test_adaptive_languages.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_adaptive_languages.py) |
| CI workflows | 4 | [.github/workflows/health-radar-comment.yml](../../../../sources/jgravelle__jcodemunch-mcp/.github/workflows/health-radar-comment.yml)<br>[.github/workflows/health-radar.yml](../../../../sources/jgravelle__jcodemunch-mcp/.github/workflows/health-radar.yml)<br>[.github/workflows/sign-release.yml](../../../../sources/jgravelle__jcodemunch-mcp/.github/workflows/sign-release.yml)<br>[.github/workflows/test.yml](../../../../sources/jgravelle__jcodemunch-mcp/.github/workflows/test.yml) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/jgravelle__jcodemunch-mcp/docker-compose.yml)<br>[Dockerfile](../../../../sources/jgravelle__jcodemunch-mcp/Dockerfile) |
| Security / policy | 7 | [SECURITY.md](../../../../sources/jgravelle__jcodemunch-mcp/SECURITY.md)<br>[tests/test_audit_agent_config.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_audit_agent_config.py)<br>[tests/test_claude_md_policy.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_claude_md_policy.py)<br>[tests/test_security.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_security.py)<br>[src/jcodemunch_mcp/security.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/security.py)<br>[src/jcodemunch_mcp/tools/audit_agent_config.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/tools/audit_agent_config.py) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/jgravelle__jcodemunch-mcp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/jgravelle__jcodemunch-mcp/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/jcodemunch_mcp/__init__.py`, `src/jcodemunch_mcp/__main__.py`, `src/jcodemunch_mcp/agent_selector.py`.
2. Trace execution through entrypoints: `server.json`, `src/jcodemunch_mcp/__main__.py`, `src/jcodemunch_mcp/server.py`.
3. Map agent/tool runtime through: `AGENT_HINTS.md`, `AGENT_HOOKS.md`, `AGENT_INSTALL_UNIVERSAL.md`.
4. Inspect retrieval/memory/indexing through: `tests/test_call_graph_ast.py`, `tests/test_delete_index_cli.py`, `tests/test_dependency_graph_imports_alias.py`.
5. Verify behavior through test/eval files: `SPEC_MUNCH.md`, `SPEC.md`, `tests/__init__.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 The leading, most token efficient MCP server for GitHub source code exploration via tree sitter AST parsing. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, AGENTS.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
