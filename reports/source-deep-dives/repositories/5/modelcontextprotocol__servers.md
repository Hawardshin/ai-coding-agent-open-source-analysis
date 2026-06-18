# modelcontextprotocol/servers Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 142 files, 30 directories.

## 요약

- 조사 단위: `sources/modelcontextprotocol__servers` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 142 files, 30 directories, depth score 127, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, src/time/src/mcp_server_time/__init__.py, src/time/src/mcp_server_time/__main__.py이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | modelcontextprotocol/servers |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 87393 |
| Forks | 11022 |
| License | none |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/modelcontextprotocol__servers](../../../../sources/modelcontextprotocol__servers) |
| Existing report | [reports/global-trending/repositories/modelcontextprotocol__servers.md](../../../global-trending/repositories/modelcontextprotocol__servers.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 142 / 30 |
| Max observed depth | 5 |
| Top directories | .github, scripts, src |
| Top extensions | .ts: 64, .md: 22, (none): 18, .py: 14, .json: 12, .yml: 5, .lock: 3, .toml: 3, .typed: 1 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 119 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | npm run build --workspaces |
| serve-dev | package.json | watch | npm run watch --workspaces |
| utility | package.json | publish-all | npm publish --workspaces --access public |
| utility | package.json | link-all | npm link --workspaces |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
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
| mcp | [.mcp.json](../../../../sources/modelcontextprotocol__servers/.mcp.json) | mcp signal |
| mcp | [src/time/src/mcp_server_time/__init__.py](../../../../sources/modelcontextprotocol__servers/src/time/src/mcp_server_time/__init__.py) | mcp signal |
| mcp | [src/time/src/mcp_server_time/__main__.py](../../../../sources/modelcontextprotocol__servers/src/time/src/mcp_server_time/__main__.py) | mcp signal |
| mcp | [src/time/src/mcp_server_time/server.py](../../../../sources/modelcontextprotocol__servers/src/time/src/mcp_server_time/server.py) | mcp signal |
| agentRuntime | [src/memory/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/memory/Dockerfile) | agentRuntime signal |
| agentRuntime | [src/memory/index.ts](../../../../sources/modelcontextprotocol__servers/src/memory/index.ts) | agentRuntime signal |
| agentRuntime | [src/memory/package.json](../../../../sources/modelcontextprotocol__servers/src/memory/package.json) | agentRuntime signal |
| agentRuntime | [src/memory/README.md](../../../../sources/modelcontextprotocol__servers/src/memory/README.md) | agentRuntime signal |
| entrypoints | [src/git/src/mcp_server_git/__main__.py](../../../../sources/modelcontextprotocol__servers/src/git/src/mcp_server_git/__main__.py) | entrypoints signal |
| entrypoints | [src/git/src/mcp_server_git/server.py](../../../../sources/modelcontextprotocol__servers/src/git/src/mcp_server_git/server.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/modelcontextprotocol__servers/CLAUDE.md) | instruction signal |
| instruction | [src/everything/AGENTS.md](../../../../sources/modelcontextprotocol__servers/src/everything/AGENTS.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [src/time/src/mcp_server_time/__main__.py](../../../../sources/modelcontextprotocol__servers/src/time/src/mcp_server_time/__main__.py)<br>[src/time/src/mcp_server_time/server.py](../../../../sources/modelcontextprotocol__servers/src/time/src/mcp_server_time/server.py)<br>[src/git/src/mcp_server_git/__main__.py](../../../../sources/modelcontextprotocol__servers/src/git/src/mcp_server_git/__main__.py)<br>[src/git/src/mcp_server_git/server.py](../../../../sources/modelcontextprotocol__servers/src/git/src/mcp_server_git/server.py)<br>[src/fetch/src/mcp_server_fetch/__main__.py](../../../../sources/modelcontextprotocol__servers/src/fetch/src/mcp_server_fetch/__main__.py)<br>[src/fetch/src/mcp_server_fetch/server.py](../../../../sources/modelcontextprotocol__servers/src/fetch/src/mcp_server_fetch/server.py)<br>[src/everything/__tests__/server.test.ts](../../../../sources/modelcontextprotocol__servers/src/everything/__tests__/server.test.ts) |
| agentRuntime | 30 | [src/memory/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/memory/Dockerfile)<br>[src/memory/index.ts](../../../../sources/modelcontextprotocol__servers/src/memory/index.ts)<br>[src/memory/package.json](../../../../sources/modelcontextprotocol__servers/src/memory/package.json)<br>[src/memory/README.md](../../../../sources/modelcontextprotocol__servers/src/memory/README.md)<br>[src/memory/tsconfig.json](../../../../sources/modelcontextprotocol__servers/src/memory/tsconfig.json)<br>[src/memory/vitest.config.ts](../../../../sources/modelcontextprotocol__servers/src/memory/vitest.config.ts)<br>[src/memory/__tests__/file-path.test.ts](../../../../sources/modelcontextprotocol__servers/src/memory/__tests__/file-path.test.ts)<br>[src/memory/__tests__/knowledge-graph.test.ts](../../../../sources/modelcontextprotocol__servers/src/memory/__tests__/knowledge-graph.test.ts) |
| mcp | 11 | [.mcp.json](../../../../sources/modelcontextprotocol__servers/.mcp.json)<br>[src/time/src/mcp_server_time/__init__.py](../../../../sources/modelcontextprotocol__servers/src/time/src/mcp_server_time/__init__.py)<br>[src/time/src/mcp_server_time/__main__.py](../../../../sources/modelcontextprotocol__servers/src/time/src/mcp_server_time/__main__.py)<br>[src/time/src/mcp_server_time/server.py](../../../../sources/modelcontextprotocol__servers/src/time/src/mcp_server_time/server.py)<br>[src/git/src/mcp_server_git/__init__.py](../../../../sources/modelcontextprotocol__servers/src/git/src/mcp_server_git/__init__.py)<br>[src/git/src/mcp_server_git/__main__.py](../../../../sources/modelcontextprotocol__servers/src/git/src/mcp_server_git/__main__.py)<br>[src/git/src/mcp_server_git/py.typed](../../../../sources/modelcontextprotocol__servers/src/git/src/mcp_server_git/py.typed)<br>[src/git/src/mcp_server_git/server.py](../../../../sources/modelcontextprotocol__servers/src/git/src/mcp_server_git/server.py) |
| retrieval | 15 | [src/sequentialthinking/index.ts](../../../../sources/modelcontextprotocol__servers/src/sequentialthinking/index.ts)<br>[src/memory/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/memory/Dockerfile)<br>[src/memory/index.ts](../../../../sources/modelcontextprotocol__servers/src/memory/index.ts)<br>[src/memory/package.json](../../../../sources/modelcontextprotocol__servers/src/memory/package.json)<br>[src/memory/README.md](../../../../sources/modelcontextprotocol__servers/src/memory/README.md)<br>[src/memory/tsconfig.json](../../../../sources/modelcontextprotocol__servers/src/memory/tsconfig.json)<br>[src/memory/vitest.config.ts](../../../../sources/modelcontextprotocol__servers/src/memory/vitest.config.ts)<br>[src/memory/__tests__/file-path.test.ts](../../../../sources/modelcontextprotocol__servers/src/memory/__tests__/file-path.test.ts) |
| spec | 1 | [src/everything/docs/architecture.md](../../../../sources/modelcontextprotocol__servers/src/everything/docs/architecture.md) |
| eval | 19 | [src/time/test/time_server_test.py](../../../../sources/modelcontextprotocol__servers/src/time/test/time_server_test.py)<br>[src/sequentialthinking/__tests__/lib.test.ts](../../../../sources/modelcontextprotocol__servers/src/sequentialthinking/__tests__/lib.test.ts)<br>[src/memory/__tests__/file-path.test.ts](../../../../sources/modelcontextprotocol__servers/src/memory/__tests__/file-path.test.ts)<br>[src/memory/__tests__/knowledge-graph.test.ts](../../../../sources/modelcontextprotocol__servers/src/memory/__tests__/knowledge-graph.test.ts)<br>[src/git/tests/test_server.py](../../../../sources/modelcontextprotocol__servers/src/git/tests/test_server.py)<br>[src/filesystem/__tests__/directory-tree.test.ts](../../../../sources/modelcontextprotocol__servers/src/filesystem/__tests__/directory-tree.test.ts)<br>[src/filesystem/__tests__/lib.test.ts](../../../../sources/modelcontextprotocol__servers/src/filesystem/__tests__/lib.test.ts)<br>[src/filesystem/__tests__/path-utils.test.ts](../../../../sources/modelcontextprotocol__servers/src/filesystem/__tests__/path-utils.test.ts) |
| security | 1 | [SECURITY.md](../../../../sources/modelcontextprotocol__servers/SECURITY.md) |
| ci | 5 | [.github/workflows/claude.yml](../../../../sources/modelcontextprotocol__servers/.github/workflows/claude.yml)<br>[.github/workflows/python.yml](../../../../sources/modelcontextprotocol__servers/.github/workflows/python.yml)<br>[.github/workflows/readme-pr-check.yml](../../../../sources/modelcontextprotocol__servers/.github/workflows/readme-pr-check.yml)<br>[.github/workflows/release.yml](../../../../sources/modelcontextprotocol__servers/.github/workflows/release.yml)<br>[.github/workflows/typescript.yml](../../../../sources/modelcontextprotocol__servers/.github/workflows/typescript.yml) |
| container | 7 | [src/time/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/time/Dockerfile)<br>[src/sequentialthinking/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/sequentialthinking/Dockerfile)<br>[src/memory/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/memory/Dockerfile)<br>[src/git/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/git/Dockerfile)<br>[src/filesystem/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/filesystem/Dockerfile)<br>[src/fetch/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/fetch/Dockerfile)<br>[src/everything/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/everything/Dockerfile) |
| instruction | 2 | [CLAUDE.md](../../../../sources/modelcontextprotocol__servers/CLAUDE.md)<br>[src/everything/AGENTS.md](../../../../sources/modelcontextprotocol__servers/src/everything/AGENTS.md) |
| docs | 16 | [README.md](../../../../sources/modelcontextprotocol__servers/README.md)<br>[src/time/README.md](../../../../sources/modelcontextprotocol__servers/src/time/README.md)<br>[src/sequentialthinking/README.md](../../../../sources/modelcontextprotocol__servers/src/sequentialthinking/README.md)<br>[src/memory/README.md](../../../../sources/modelcontextprotocol__servers/src/memory/README.md)<br>[src/git/README.md](../../../../sources/modelcontextprotocol__servers/src/git/README.md)<br>[src/filesystem/README.md](../../../../sources/modelcontextprotocol__servers/src/filesystem/README.md)<br>[src/fetch/README.md](../../../../sources/modelcontextprotocol__servers/src/fetch/README.md)<br>[src/everything/README.md](../../../../sources/modelcontextprotocol__servers/src/everything/README.md) |
| config | 16 | [package.json](../../../../sources/modelcontextprotocol__servers/package.json)<br>[tsconfig.json](../../../../sources/modelcontextprotocol__servers/tsconfig.json)<br>[src/time/pyproject.toml](../../../../sources/modelcontextprotocol__servers/src/time/pyproject.toml)<br>[src/time/uv.lock](../../../../sources/modelcontextprotocol__servers/src/time/uv.lock)<br>[src/sequentialthinking/package.json](../../../../sources/modelcontextprotocol__servers/src/sequentialthinking/package.json)<br>[src/sequentialthinking/tsconfig.json](../../../../sources/modelcontextprotocol__servers/src/sequentialthinking/tsconfig.json)<br>[src/memory/package.json](../../../../sources/modelcontextprotocol__servers/src/memory/package.json)<br>[src/memory/tsconfig.json](../../../../sources/modelcontextprotocol__servers/src/memory/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 19 | [src/time/test/time_server_test.py](../../../../sources/modelcontextprotocol__servers/src/time/test/time_server_test.py)<br>[src/sequentialthinking/__tests__/lib.test.ts](../../../../sources/modelcontextprotocol__servers/src/sequentialthinking/__tests__/lib.test.ts)<br>[src/memory/__tests__/file-path.test.ts](../../../../sources/modelcontextprotocol__servers/src/memory/__tests__/file-path.test.ts)<br>[src/memory/__tests__/knowledge-graph.test.ts](../../../../sources/modelcontextprotocol__servers/src/memory/__tests__/knowledge-graph.test.ts)<br>[src/git/tests/test_server.py](../../../../sources/modelcontextprotocol__servers/src/git/tests/test_server.py)<br>[src/filesystem/__tests__/directory-tree.test.ts](../../../../sources/modelcontextprotocol__servers/src/filesystem/__tests__/directory-tree.test.ts) |
| CI workflows | 5 | [.github/workflows/claude.yml](../../../../sources/modelcontextprotocol__servers/.github/workflows/claude.yml)<br>[.github/workflows/python.yml](../../../../sources/modelcontextprotocol__servers/.github/workflows/python.yml)<br>[.github/workflows/readme-pr-check.yml](../../../../sources/modelcontextprotocol__servers/.github/workflows/readme-pr-check.yml)<br>[.github/workflows/release.yml](../../../../sources/modelcontextprotocol__servers/.github/workflows/release.yml)<br>[.github/workflows/typescript.yml](../../../../sources/modelcontextprotocol__servers/.github/workflows/typescript.yml) |
| Containers / deploy | 7 | [src/time/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/time/Dockerfile)<br>[src/sequentialthinking/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/sequentialthinking/Dockerfile)<br>[src/memory/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/memory/Dockerfile)<br>[src/git/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/git/Dockerfile)<br>[src/filesystem/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/filesystem/Dockerfile)<br>[src/fetch/Dockerfile](../../../../sources/modelcontextprotocol__servers/src/fetch/Dockerfile) |
| Security / policy | 1 | [SECURITY.md](../../../../sources/modelcontextprotocol__servers/SECURITY.md) |
| Agent instructions | 2 | [CLAUDE.md](../../../../sources/modelcontextprotocol__servers/CLAUDE.md)<br>[src/everything/AGENTS.md](../../../../sources/modelcontextprotocol__servers/src/everything/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `.mcp.json`, `src/time/src/mcp_server_time/__init__.py`, `src/time/src/mcp_server_time/__main__.py`.
2. Trace execution through entrypoints: `src/time/src/mcp_server_time/__main__.py`, `src/time/src/mcp_server_time/server.py`, `src/git/src/mcp_server_git/__main__.py`.
3. Map agent/tool runtime through: `src/memory/Dockerfile`, `src/memory/index.ts`, `src/memory/package.json`.
4. Inspect retrieval/memory/indexing through: `src/sequentialthinking/index.ts`, `src/memory/Dockerfile`, `src/memory/index.ts`.
5. Verify behavior through test/eval files: `src/time/test/time_server_test.py`, `src/sequentialthinking/__tests__/lib.test.ts`, `src/memory/__tests__/file-path.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 142 files, 30 directories.. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, modelcontextprotocol이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
