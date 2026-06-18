# minsung2da/stock-wiki Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Claude-Powered Korean Market Knowledge Base — Obsidian vault + Postgres/pgvector hybrid search + MCP server for Claude Code

## 요약

- 조사 단위: `sources/minsung2da__stock-wiki` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 397 files, 70 directories, depth score 125, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-PLAN.md, .planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-SUMMARY.md, .planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-PLAN.md이고, 의존성 단서는 claude, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | minsung2da/stock-wiki |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/minsung2da__stock-wiki](../../../../sources/minsung2da__stock-wiki) |
| Existing report | [reports/korea-trending/repositories/minsung2da__stock-wiki.md](../../../korea-trending/repositories/minsung2da__stock-wiki.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 397 / 70 |
| Max observed depth | 5 |
| Top directories | .claude, .github, .obsidian, .planning, docs, fixtures, scripts, src, tests |
| Top extensions | .md: 230, .py: 118, .json: 17, .html: 8, .yaml: 6, (none): 4, .xml: 3, .ini: 2, .yml: 2, .example: 1, .lock: 1, .mako: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 42 |
| docs | documentation surface | 3 |
| src | source boundary | 2 |
| .github | ci surface | 1 |
| fixtures | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | stock | stock |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | claude |
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
| mcp | [.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-PLAN.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-PLAN.md) | mcp signal |
| mcp | [.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-SUMMARY.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-SUMMARY.md) | mcp signal |
| mcp | [.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-PLAN.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-PLAN.md) | mcp signal |
| mcp | [.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-SUMMARY.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-SUMMARY.md) | mcp signal |
| agentRuntime | [.planning/phases/01-collector-db-cutover/CONTEXT.md](../../../../sources/minsung2da__stock-wiki/.planning/phases/01-collector-db-cutover/CONTEXT.md) | agentRuntime signal |
| agentRuntime | [.claude/routines/enrich/SKILL.md](../../../../sources/minsung2da__stock-wiki/.claude/routines/enrich/SKILL.md) | agentRuntime signal |
| entrypoints | [src/cli/__main__.py](../../../../sources/minsung2da__stock-wiki/src/cli/__main__.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/minsung2da__stock-wiki/CLAUDE.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/minsung2da__stock-wiki/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/minsung2da__stock-wiki/uv.lock) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/minsung2da__stock-wiki/.github/workflows/ci.yml) | ci support |
| container | [docker-compose.yml](../../../../sources/minsung2da__stock-wiki/docker-compose.yml) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/cli/__main__.py](../../../../sources/minsung2da__stock-wiki/src/cli/__main__.py) |
| agentRuntime | 2 | [.planning/phases/01-collector-db-cutover/CONTEXT.md](../../../../sources/minsung2da__stock-wiki/.planning/phases/01-collector-db-cutover/CONTEXT.md)<br>[.claude/routines/enrich/SKILL.md](../../../../sources/minsung2da__stock-wiki/.claude/routines/enrich/SKILL.md) |
| mcp | 33 | [.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-PLAN.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-PLAN.md)<br>[.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-SUMMARY.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-SUMMARY.md)<br>[.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-PLAN.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-PLAN.md)<br>[.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-SUMMARY.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-SUMMARY.md)<br>[.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-03-PLAN.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-03-PLAN.md)<br>[.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-03-SUMMARY.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-03-SUMMARY.md)<br>[.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-HUMAN-UAT.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-HUMAN-UAT.md)<br>[.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-VERIFICATION.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-VERIFICATION.md) |
| retrieval | 29 | [.planning/quick/260426-mic-preserve-injection-flags-in-ingest-state/260426-mic-PLAN.md](../../../../sources/minsung2da__stock-wiki/.planning/quick/260426-mic-preserve-injection-flags-in-ingest-state/260426-mic-PLAN.md)<br>[.planning/quick/260426-mic-preserve-injection-flags-in-ingest-state/260426-mic-SUMMARY.md](../../../../sources/minsung2da__stock-wiki/.planning/quick/260426-mic-preserve-injection-flags-in-ingest-state/260426-mic-SUMMARY.md)<br>[.planning/quick/260418-bwv-fix-d-1-ingest-worker-seeds-entities-fro/260418-bwv-SUMMARY.md](../../../../sources/minsung2da__stock-wiki/.planning/quick/260418-bwv-fix-d-1-ingest-worker-seeds-entities-fro/260418-bwv-SUMMARY.md)<br>[.planning/phases/01-collector-db-cutover/PLAN-INDEX.md](../../../../sources/minsung2da__stock-wiki/.planning/phases/01-collector-db-cutover/PLAN-INDEX.md)<br>[.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-PLAN.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-PLAN.md)<br>[.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-SUMMARY.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-SUMMARY.md)<br>[.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-PLAN.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-PLAN.md)<br>[.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-SUMMARY.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-SUMMARY.md) |
| spec | 4 | [.planning/REQUIREMENTS.md](../../../../sources/minsung2da__stock-wiki/.planning/REQUIREMENTS.md)<br>[.planning/ROADMAP.md](../../../../sources/minsung2da__stock-wiki/.planning/ROADMAP.md)<br>[.planning/research/ARCHITECTURE.md](../../../../sources/minsung2da__stock-wiki/.planning/research/ARCHITECTURE.md)<br>[.planning/archive/v1.0-phases/06-full-mcp-tool-surface/06-UI-SPEC.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/06-full-mcp-tool-surface/06-UI-SPEC.md) |
| eval | 83 | [tests/__init__.py](../../../../sources/minsung2da__stock-wiki/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/minsung2da__stock-wiki/tests/conftest.py)<br>[tests/fixtures_loader.py](../../../../sources/minsung2da__stock-wiki/tests/fixtures_loader.py)<br>[tests/test_api_probes.py](../../../../sources/minsung2da__stock-wiki/tests/test_api_probes.py)<br>[tests/test_cli_collect_all.py](../../../../sources/minsung2da__stock-wiki/tests/test_cli_collect_all.py)<br>[tests/test_content_hash.py](../../../../sources/minsung2da__stock-wiki/tests/test_content_hash.py)<br>[tests/test_dart_fetcher_retry.py](../../../../sources/minsung2da__stock-wiki/tests/test_dart_fetcher_retry.py)<br>[tests/test_dart_financials.py](../../../../sources/minsung2da__stock-wiki/tests/test_dart_financials.py) |
| security | 1 | [tests/test_import_guard.py](../../../../sources/minsung2da__stock-wiki/tests/test_import_guard.py) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/minsung2da__stock-wiki/.github/workflows/ci.yml) |
| container | 1 | [docker-compose.yml](../../../../sources/minsung2da__stock-wiki/docker-compose.yml) |
| instruction | 1 | [CLAUDE.md](../../../../sources/minsung2da__stock-wiki/CLAUDE.md) |
| docs | 4 | [README.md](../../../../sources/minsung2da__stock-wiki/README.md)<br>[docs/kind-robots-snapshot.txt](../../../../sources/minsung2da__stock-wiki/docs/kind-robots-snapshot.txt)<br>[docs/local-sync.md](../../../../sources/minsung2da__stock-wiki/docs/local-sync.md)<br>[.claude/routines/enrich/README.md](../../../../sources/minsung2da__stock-wiki/.claude/routines/enrich/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/minsung2da__stock-wiki/pyproject.toml)<br>[uv.lock](../../../../sources/minsung2da__stock-wiki/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 83 | [tests/__init__.py](../../../../sources/minsung2da__stock-wiki/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/minsung2da__stock-wiki/tests/conftest.py)<br>[tests/fixtures_loader.py](../../../../sources/minsung2da__stock-wiki/tests/fixtures_loader.py)<br>[tests/test_api_probes.py](../../../../sources/minsung2da__stock-wiki/tests/test_api_probes.py)<br>[tests/test_cli_collect_all.py](../../../../sources/minsung2da__stock-wiki/tests/test_cli_collect_all.py)<br>[tests/test_content_hash.py](../../../../sources/minsung2da__stock-wiki/tests/test_content_hash.py) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/minsung2da__stock-wiki/.github/workflows/ci.yml) |
| Containers / deploy | 1 | [docker-compose.yml](../../../../sources/minsung2da__stock-wiki/docker-compose.yml) |
| Security / policy | 1 | [tests/test_import_guard.py](../../../../sources/minsung2da__stock-wiki/tests/test_import_guard.py) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/minsung2da__stock-wiki/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-PLAN.md`, `.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-SUMMARY.md`, `.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-PLAN.md`.
2. Trace execution through entrypoints: `src/cli/__main__.py`.
3. Map agent/tool runtime through: `.planning/phases/01-collector-db-cutover/CONTEXT.md`, `.claude/routines/enrich/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `.planning/quick/260426-mic-preserve-injection-flags-in-ingest-state/260426-mic-PLAN.md`, `.planning/quick/260426-mic-preserve-injection-flags-in-ingest-state/260426-mic-SUMMARY.md`, `.planning/quick/260418-bwv-fix-d-1-ingest-worker-seeds-entities-fro/260418-bwv-SUMMARY.md`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/fixtures_loader.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Claude Powered Korean Market Knowledge Base — Obsidian vault + Postgres/pgvector hybrid search + MCP server for Claude C. 핵심 구조 신호는 Python, pyproject.toml, docker-compose.yml, README.md, CLAUDE.md, pydantic이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
