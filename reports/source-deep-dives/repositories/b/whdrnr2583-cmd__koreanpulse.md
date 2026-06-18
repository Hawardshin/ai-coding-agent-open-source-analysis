# whdrnr2583-cmd/koreanpulse Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

English-first Korean equity intelligence MCP — DART filings, foreign-holder 5%-rule flows, activist filings, KRX news. For Claude Desktop / Cursor / FastMCP trading agents.

## 요약

- 조사 단위: `sources/whdrnr2583-cmd__koreanpulse` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 127 files, 30 directories, depth score 108, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/koreanpulse/mcp_http.py, landing/public/.well-known/mcp.json, docs/listings/AWESOME_MCP.md이고, 의존성 단서는 openai, claude, mcp, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | whdrnr2583-cmd/koreanpulse |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/whdrnr2583-cmd__koreanpulse](../../../../sources/whdrnr2583-cmd__koreanpulse) |
| Existing report | [reports/korea-trending/repositories/whdrnr2583-cmd__koreanpulse.md](../../../korea-trending/repositories/whdrnr2583-cmd__koreanpulse.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 127 / 30 |
| Max observed depth | 5 |
| Top directories | .github, cache-worker, daily-worker, docs, examples, landing, migrations, src, tests, webhook-worker |
| Top extensions | .py: 34, .md: 30, .ts: 18, .json: 14, .tsx: 7, .toml: 4, .yml: 4, (none): 4, .sql: 3, .js: 2, .svg: 2, .css: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 29 |
| tests | validation surface | 15 |
| src | source boundary | 3 |
| .github | ci surface | 1 |
| cache-worker | top-level component | 1 |
| daily-worker | top-level component | 1 |
| examples | top-level component | 1 |
| landing | top-level component | 1 |
| migrations | top-level component | 1 |
| webhook-worker | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | koreanpulse | koreanpulse |
| utility | pyproject.toml | koreanpulse-webhook | koreanpulse-webhook |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, claude |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [src/koreanpulse/mcp_http.py](../../../../sources/whdrnr2583-cmd__koreanpulse/src/koreanpulse/mcp_http.py) | mcp signal |
| mcp | [landing/public/.well-known/mcp.json](../../../../sources/whdrnr2583-cmd__koreanpulse/landing/public/.well-known/mcp.json) | mcp signal |
| mcp | [docs/listings/AWESOME_MCP.md](../../../../sources/whdrnr2583-cmd__koreanpulse/docs/listings/AWESOME_MCP.md) | mcp signal |
| entrypoints | [server.json](../../../../sources/whdrnr2583-cmd__koreanpulse/server.json) | entrypoints signal |
| entrypoints | [webhook-worker/src/index.ts](../../../../sources/whdrnr2583-cmd__koreanpulse/webhook-worker/src/index.ts) | entrypoints signal |
| entrypoints | [src/koreanpulse/server.py](../../../../sources/whdrnr2583-cmd__koreanpulse/src/koreanpulse/server.py) | entrypoints signal |
| entrypoints | [daily-worker/src/index.ts](../../../../sources/whdrnr2583-cmd__koreanpulse/daily-worker/src/index.ts) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/whdrnr2583-cmd__koreanpulse/pyproject.toml) | config signal |
| config | [webhook-worker/package.json](../../../../sources/whdrnr2583-cmd__koreanpulse/webhook-worker/package.json) | config signal |
| config | [webhook-worker/tsconfig.json](../../../../sources/whdrnr2583-cmd__koreanpulse/webhook-worker/tsconfig.json) | config signal |
| config | [landing/package.json](../../../../sources/whdrnr2583-cmd__koreanpulse/landing/package.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/whdrnr2583-cmd__koreanpulse/.github/workflows/ci.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [server.json](../../../../sources/whdrnr2583-cmd__koreanpulse/server.json)<br>[webhook-worker/src/index.ts](../../../../sources/whdrnr2583-cmd__koreanpulse/webhook-worker/src/index.ts)<br>[src/koreanpulse/server.py](../../../../sources/whdrnr2583-cmd__koreanpulse/src/koreanpulse/server.py)<br>[daily-worker/src/index.ts](../../../../sources/whdrnr2583-cmd__koreanpulse/daily-worker/src/index.ts)<br>[cache-worker/src/index.ts](../../../../sources/whdrnr2583-cmd__koreanpulse/cache-worker/src/index.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 3 | [src/koreanpulse/mcp_http.py](../../../../sources/whdrnr2583-cmd__koreanpulse/src/koreanpulse/mcp_http.py)<br>[landing/public/.well-known/mcp.json](../../../../sources/whdrnr2583-cmd__koreanpulse/landing/public/.well-known/mcp.json)<br>[docs/listings/AWESOME_MCP.md](../../../../sources/whdrnr2583-cmd__koreanpulse/docs/listings/AWESOME_MCP.md) |
| retrieval | 4 | [webhook-worker/src/index.ts](../../../../sources/whdrnr2583-cmd__koreanpulse/webhook-worker/src/index.ts)<br>[docs/INDEX.md](../../../../sources/whdrnr2583-cmd__koreanpulse/docs/INDEX.md)<br>[daily-worker/src/index.ts](../../../../sources/whdrnr2583-cmd__koreanpulse/daily-worker/src/index.ts)<br>[cache-worker/src/index.ts](../../../../sources/whdrnr2583-cmd__koreanpulse/cache-worker/src/index.ts) |
| spec | 2 | [docs/ARCHITECTURE.md](../../../../sources/whdrnr2583-cmd__koreanpulse/docs/ARCHITECTURE.md)<br>[docs/SPEC.md](../../../../sources/whdrnr2583-cmd__koreanpulse/docs/SPEC.md) |
| eval | 15 | [tests/__init__.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/__init__.py)<br>[tests/test_activists.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_activists.py)<br>[tests/test_alerts.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_alerts.py)<br>[tests/test_cache.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_cache.py)<br>[tests/test_dart.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_dart.py)<br>[tests/test_env.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_env.py)<br>[tests/test_filing_cache.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_filing_cache.py)<br>[tests/test_lemonsqueezy.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_lemonsqueezy.py) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/whdrnr2583-cmd__koreanpulse/.github/workflows/ci.yml)<br>[.github/workflows/daily-build-backstop.yml](../../../../sources/whdrnr2583-cmd__koreanpulse/.github/workflows/daily-build-backstop.yml)<br>[.github/workflows/release.yml](../../../../sources/whdrnr2583-cmd__koreanpulse/.github/workflows/release.yml) |
| container | 1 | [Dockerfile](../../../../sources/whdrnr2583-cmd__koreanpulse/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 28 | [README.md](../../../../sources/whdrnr2583-cmd__koreanpulse/README.md)<br>[webhook-worker/README.md](../../../../sources/whdrnr2583-cmd__koreanpulse/webhook-worker/README.md)<br>[landing/README.md](../../../../sources/whdrnr2583-cmd__koreanpulse/landing/README.md)<br>[docs/ARCHITECTURE.md](../../../../sources/whdrnr2583-cmd__koreanpulse/docs/ARCHITECTURE.md)<br>[docs/BETA.md](../../../../sources/whdrnr2583-cmd__koreanpulse/docs/BETA.md)<br>[docs/CI.md](../../../../sources/whdrnr2583-cmd__koreanpulse/docs/CI.md)<br>[docs/CLAUDE_DESKTOP.md](../../../../sources/whdrnr2583-cmd__koreanpulse/docs/CLAUDE_DESKTOP.md)<br>[docs/DEMO.md](../../../../sources/whdrnr2583-cmd__koreanpulse/docs/DEMO.md) |
| config | 9 | [pyproject.toml](../../../../sources/whdrnr2583-cmd__koreanpulse/pyproject.toml)<br>[webhook-worker/package.json](../../../../sources/whdrnr2583-cmd__koreanpulse/webhook-worker/package.json)<br>[webhook-worker/tsconfig.json](../../../../sources/whdrnr2583-cmd__koreanpulse/webhook-worker/tsconfig.json)<br>[landing/package.json](../../../../sources/whdrnr2583-cmd__koreanpulse/landing/package.json)<br>[landing/tsconfig.json](../../../../sources/whdrnr2583-cmd__koreanpulse/landing/tsconfig.json)<br>[daily-worker/package.json](../../../../sources/whdrnr2583-cmd__koreanpulse/daily-worker/package.json)<br>[daily-worker/tsconfig.json](../../../../sources/whdrnr2583-cmd__koreanpulse/daily-worker/tsconfig.json)<br>[cache-worker/package.json](../../../../sources/whdrnr2583-cmd__koreanpulse/cache-worker/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 15 | [tests/__init__.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/__init__.py)<br>[tests/test_activists.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_activists.py)<br>[tests/test_alerts.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_alerts.py)<br>[tests/test_cache.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_cache.py)<br>[tests/test_dart.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_dart.py)<br>[tests/test_env.py](../../../../sources/whdrnr2583-cmd__koreanpulse/tests/test_env.py) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/whdrnr2583-cmd__koreanpulse/.github/workflows/ci.yml)<br>[.github/workflows/daily-build-backstop.yml](../../../../sources/whdrnr2583-cmd__koreanpulse/.github/workflows/daily-build-backstop.yml)<br>[.github/workflows/release.yml](../../../../sources/whdrnr2583-cmd__koreanpulse/.github/workflows/release.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/whdrnr2583-cmd__koreanpulse/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/koreanpulse/mcp_http.py`, `landing/public/.well-known/mcp.json`, `docs/listings/AWESOME_MCP.md`.
2. Trace execution through entrypoints: `server.json`, `webhook-worker/src/index.ts`, `src/koreanpulse/server.py`.
3. Inspect retrieval/memory/indexing through: `webhook-worker/src/index.ts`, `docs/INDEX.md`, `daily-worker/src/index.ts`.
4. Verify behavior through test/eval files: `tests/__init__.py`, `tests/test_activists.py`, `tests/test_alerts.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 English first Korean equity intelligence MCP — DART filings, foreign holder 5% rule flows, activist filings, KRX news. F. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, README.md, openai, mcp이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
