# safishamsi/graphify Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

AI coding assistant skill (Claude Code, Codex, OpenCode, Cursor, Gemini CLI, and more). Turn any folder of code, SQL schemas, R scripts, shell scripts, docs, papers, images, or videos into a queryable knowledge graph. App code + database schema + infrastructure in one graph.

## 요약

- 조사 단위: `sources/safishamsi__graphify` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 582 files, 68 directories, depth score 130, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_mcp_ingest.py, tests/fixtures/sample.mcp.json, graphify/mcp_ingest.py이고, 의존성 단서는 openai, anthropic, claude, codex, gemini, mcp, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | safishamsi/graphify |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 68714 |
| Forks | 6935 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/safishamsi__graphify](../../../../sources/safishamsi__graphify) |
| Existing report | [reports/global-trending/repositories/safishamsi__graphify.md](../../../global-trending/repositories/safishamsi__graphify.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 582 / 68 |
| Max observed depth | 6 |
| Top directories | .github, docs, graphify, tests, tools, worked |
| Top extensions | .md: 340, .py: 150, .json: 14, .ts: 7, (none): 7, .php: 5, .toml: 4, .rs: 3, .sql: 3, .swift: 3, .yml: 3, .f90: 2 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 37 |
| tests | validation surface | 37 |
| .github | ci surface | 1 |
| graphify | top-level component | 1 |
| tools | top-level component | 1 |
| worked | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | graphify | graphify |
| utility | pyproject.toml | graphify-mcp | graphify-mcp |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic, claude, gemini |
| agentProtocols | mcp, codex |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | ollama, llama |
| webRuntime | none |
| developerSurface | vscode |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/test_mcp_ingest.py](../../../../sources/safishamsi__graphify/tests/test_mcp_ingest.py) | mcp signal |
| mcp | [tests/fixtures/sample.mcp.json](../../../../sources/safishamsi__graphify/tests/fixtures/sample.mcp.json) | mcp signal |
| mcp | [graphify/mcp_ingest.py](../../../../sources/safishamsi__graphify/graphify/mcp_ingest.py) | mcp signal |
| mcp | [docs/docker-mcp-sqlite.md](../../../../sources/safishamsi__graphify/docs/docker-mcp-sqlite.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/safishamsi__graphify/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/__init__.py](../../../../sources/safishamsi__graphify/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [tools/skillgen/__init__.py](../../../../sources/safishamsi__graphify/tools/skillgen/__init__.py) | agentRuntime signal |
| agentRuntime | [tools/skillgen/__main__.py](../../../../sources/safishamsi__graphify/tools/skillgen/__main__.py) | agentRuntime signal |
| entrypoints | [graphify/__main__.py](../../../../sources/safishamsi__graphify/graphify/__main__.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/safishamsi__graphify/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/safishamsi__graphify/uv.lock) | config signal |
| config | [tests/fixtures/crate_b/Cargo.toml](../../../../sources/safishamsi__graphify/tests/fixtures/crate_b/Cargo.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [tools/skillgen/__main__.py](../../../../sources/safishamsi__graphify/tools/skillgen/__main__.py)<br>[graphify/__main__.py](../../../../sources/safishamsi__graphify/graphify/__main__.py) |
| agentRuntime | 285 | [AGENTS.md](../../../../sources/safishamsi__graphify/AGENTS.md)<br>[tools/__init__.py](../../../../sources/safishamsi__graphify/tools/__init__.py)<br>[tools/skillgen/__init__.py](../../../../sources/safishamsi__graphify/tools/skillgen/__init__.py)<br>[tools/skillgen/__main__.py](../../../../sources/safishamsi__graphify/tools/skillgen/__main__.py)<br>[tools/skillgen/gen.py](../../../../sources/safishamsi__graphify/tools/skillgen/gen.py)<br>[tools/skillgen/platforms.toml](../../../../sources/safishamsi__graphify/tools/skillgen/platforms.toml)<br>[tools/skillgen/fragments/shell/posix.md](../../../../sources/safishamsi__graphify/tools/skillgen/fragments/shell/posix.md)<br>[tools/skillgen/fragments/shell/powershell.md](../../../../sources/safishamsi__graphify/tools/skillgen/fragments/shell/powershell.md) |
| mcp | 4 | [tests/test_mcp_ingest.py](../../../../sources/safishamsi__graphify/tests/test_mcp_ingest.py)<br>[tests/fixtures/sample.mcp.json](../../../../sources/safishamsi__graphify/tests/fixtures/sample.mcp.json)<br>[graphify/mcp_ingest.py](../../../../sources/safishamsi__graphify/graphify/mcp_ingest.py)<br>[docs/docker-mcp-sqlite.md](../../../../sources/safishamsi__graphify/docs/docker-mcp-sqlite.md) |
| retrieval | 20 | [worked/rsl-siege-manager/GRAPH_REPORT.md](../../../../sources/safishamsi__graphify/worked/rsl-siege-manager/GRAPH_REPORT.md)<br>[worked/rsl-siege-manager/graph.html](../../../../sources/safishamsi__graphify/worked/rsl-siege-manager/graph.html)<br>[worked/rsl-siege-manager/graph.json](../../../../sources/safishamsi__graphify/worked/rsl-siege-manager/graph.json)<br>[worked/mixed-corpus/GRAPH_REPORT.md](../../../../sources/safishamsi__graphify/worked/mixed-corpus/GRAPH_REPORT.md)<br>[worked/mixed-corpus/graph.json](../../../../sources/safishamsi__graphify/worked/mixed-corpus/graph.json)<br>[worked/karpathy-repos/GRAPH_REPORT.md](../../../../sources/safishamsi__graphify/worked/karpathy-repos/GRAPH_REPORT.md)<br>[worked/karpathy-repos/graph.json](../../../../sources/safishamsi__graphify/worked/karpathy-repos/graph.json)<br>[worked/httpx/GRAPH_REPORT.md](../../../../sources/safishamsi__graphify/worked/httpx/GRAPH_REPORT.md) |
| spec | 32 | [ARCHITECTURE.md](../../../../sources/safishamsi__graphify/ARCHITECTURE.md)<br>[worked/example/raw/architecture.md](../../../../sources/safishamsi__graphify/worked/example/raw/architecture.md)<br>[tools/skillgen/fragments/references/shared/extraction-spec-compact.md](../../../../sources/safishamsi__graphify/tools/skillgen/fragments/references/shared/extraction-spec-compact.md)<br>[tools/skillgen/fragments/references/shared/extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/fragments/references/shared/extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__amp__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__amp__references__extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__claude__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__claude__references__extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__claw__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__claw__references__extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__codex__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__codex__references__extraction-spec.md) |
| eval | 195 | [tools/skillgen/fragments/references/shared/extraction-spec-compact.md](../../../../sources/safishamsi__graphify/tools/skillgen/fragments/references/shared/extraction-spec-compact.md)<br>[tools/skillgen/fragments/references/shared/extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/fragments/references/shared/extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__amp__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__amp__references__extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__claude__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__claude__references__extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__claw__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__claw__references__extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__codex__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__codex__references__extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__copilot__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__copilot__references__extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__droid__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__droid__references__extraction-spec.md) |
| security | 4 | [SECURITY.md](../../../../sources/safishamsi__graphify/SECURITY.md)<br>[worked/httpx/raw/auth.py](../../../../sources/safishamsi__graphify/worked/httpx/raw/auth.py)<br>[tests/test_security.py](../../../../sources/safishamsi__graphify/tests/test_security.py)<br>[graphify/security.py](../../../../sources/safishamsi__graphify/graphify/security.py) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/safishamsi__graphify/.github/workflows/ci.yml)<br>[.github/workflows/release-graph.yml](../../../../sources/safishamsi__graphify/.github/workflows/release-graph.yml) |
| container | 1 | [Dockerfile](../../../../sources/safishamsi__graphify/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/safishamsi__graphify/AGENTS.md) |
| docs | 43 | [README.md](../../../../sources/safishamsi__graphify/README.md)<br>[worked/rsl-siege-manager/README.md](../../../../sources/safishamsi__graphify/worked/rsl-siege-manager/README.md)<br>[worked/mixed-corpus/README.md](../../../../sources/safishamsi__graphify/worked/mixed-corpus/README.md)<br>[worked/karpathy-repos/README.md](../../../../sources/safishamsi__graphify/worked/karpathy-repos/README.md)<br>[worked/httpx/README.md](../../../../sources/safishamsi__graphify/worked/httpx/README.md)<br>[worked/example/README.md](../../../../sources/safishamsi__graphify/worked/example/README.md)<br>[docs/docker-mcp-sqlite.md](../../../../sources/safishamsi__graphify/docs/docker-mcp-sqlite.md)<br>[docs/how-it-works.md](../../../../sources/safishamsi__graphify/docs/how-it-works.md) |
| config | 4 | [pyproject.toml](../../../../sources/safishamsi__graphify/pyproject.toml)<br>[uv.lock](../../../../sources/safishamsi__graphify/uv.lock)<br>[tests/fixtures/crate_b/Cargo.toml](../../../../sources/safishamsi__graphify/tests/fixtures/crate_b/Cargo.toml)<br>[tests/fixtures/crate_a/Cargo.toml](../../../../sources/safishamsi__graphify/tests/fixtures/crate_a/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 195 | [tools/skillgen/fragments/references/shared/extraction-spec-compact.md](../../../../sources/safishamsi__graphify/tools/skillgen/fragments/references/shared/extraction-spec-compact.md)<br>[tools/skillgen/fragments/references/shared/extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/fragments/references/shared/extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__amp__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__amp__references__extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__claude__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__claude__references__extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__claw__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__claw__references__extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__codex__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__codex__references__extraction-spec.md) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/safishamsi__graphify/.github/workflows/ci.yml)<br>[.github/workflows/release-graph.yml](../../../../sources/safishamsi__graphify/.github/workflows/release-graph.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/safishamsi__graphify/Dockerfile) |
| Security / policy | 4 | [SECURITY.md](../../../../sources/safishamsi__graphify/SECURITY.md)<br>[worked/httpx/raw/auth.py](../../../../sources/safishamsi__graphify/worked/httpx/raw/auth.py)<br>[tests/test_security.py](../../../../sources/safishamsi__graphify/tests/test_security.py)<br>[graphify/security.py](../../../../sources/safishamsi__graphify/graphify/security.py) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/safishamsi__graphify/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/test_mcp_ingest.py`, `tests/fixtures/sample.mcp.json`, `graphify/mcp_ingest.py`.
2. Trace execution through entrypoints: `tools/skillgen/__main__.py`, `graphify/__main__.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/__init__.py`, `tools/skillgen/__init__.py`.
4. Inspect retrieval/memory/indexing through: `worked/rsl-siege-manager/GRAPH_REPORT.md`, `worked/rsl-siege-manager/graph.html`, `worked/rsl-siege-manager/graph.json`.
5. Verify behavior through test/eval files: `tools/skillgen/fragments/references/shared/extraction-spec-compact.md`, `tools/skillgen/fragments/references/shared/extraction-spec.md`, `tools/skillgen/expected/graphify__skills__amp__references__extraction-spec.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 AI coding assistant skill Claude Code, Codex, OpenCode, Cursor, Gemini CLI, and more . Turn any folder of code, SQL sche. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, README.md, AGENTS.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
