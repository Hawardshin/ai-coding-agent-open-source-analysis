# Agent-Hellboy/mcp-server-fuzzer Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A generic mcp server fuzzer

## 요약

- 조사 단위: `sources/Agent-Hellboy__mcp-server-fuzzer` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 473 files, 74 directories, depth score 129, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=MCP_SECURITY_AUDIT_ROADMAP.md, mcp_fuzzer/__init__.py, mcp_fuzzer/__main__.py이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Agent-Hellboy/mcp-server-fuzzer |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 35 |
| Forks | 6 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Agent-Hellboy__mcp-server-fuzzer](../../../../sources/Agent-Hellboy__mcp-server-fuzzer) |
| Existing report | [reports/global-trending/repositories/Agent-Hellboy__mcp-server-fuzzer.md](../../../global-trending/repositories/Agent-Hellboy__mcp-server-fuzzer.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 473 / 74 |
| Max observed depth | 6 |
| Top directories | .github, docker, docs, examples, images, mcp_fuzzer, schemas, tests |
| Top extensions | .py: 391, .md: 37, .yml: 12, .sh: 6, (none): 6, .json: 5, .png: 3, .yaml: 3, .txt: 2, .go: 1, .ini: 1, .js: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 96 |
| docs | documentation surface | 37 |
| examples/typescript-stdio-server | examples workspace | 3 |
| examples/go_stdio_server | examples workspace | 2 |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| images | top-level component | 1 |
| mcp_fuzzer | top-level component | 1 |
| schemas | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | mcp-fuzzer | mcp-fuzzer |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
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
| mcp | [MCP_SECURITY_AUDIT_ROADMAP.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/MCP_SECURITY_AUDIT_ROADMAP.md) | mcp signal |
| mcp | [mcp_fuzzer/__init__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/__init__.py) | mcp signal |
| mcp | [mcp_fuzzer/__main__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/__main__.py) | mcp signal |
| mcp | [mcp_fuzzer/events.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/events.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/unit/fuzz_engine/executor/__init__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/fuzz_engine/executor/__init__.py) | agentRuntime signal |
| agentRuntime | [tests/unit/fuzz_engine/executor/test_async_executor.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/fuzz_engine/executor/test_async_executor.py) | agentRuntime signal |
| agentRuntime | [tests/unit/fuzz_engine/executor/test_batch_executor.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/fuzz_engine/executor/test_batch_executor.py) | agentRuntime signal |
| entrypoints | [mcp_fuzzer/diagnostics/server.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/diagnostics/server.py) | entrypoints signal |
| entrypoints | [examples/typescript-stdio-server/src/server.ts](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/examples/typescript-stdio-server/src/server.ts) | entrypoints signal |
| entrypoints | [examples/go_stdio_server/main.go](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/examples/go_stdio_server/main.go) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/pyproject.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [mcp_fuzzer/__main__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/__main__.py)<br>[mcp_fuzzer/diagnostics/server.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/diagnostics/server.py)<br>[examples/typescript-stdio-server/src/server.ts](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/examples/typescript-stdio-server/src/server.ts)<br>[examples/go_stdio_server/main.go](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/examples/go_stdio_server/main.go) |
| agentRuntime | 27 | [AGENTS.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/AGENTS.md)<br>[tests/unit/fuzz_engine/executor/__init__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/fuzz_engine/executor/__init__.py)<br>[tests/unit/fuzz_engine/executor/test_async_executor.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/fuzz_engine/executor/test_async_executor.py)<br>[tests/unit/fuzz_engine/executor/test_batch_executor.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/fuzz_engine/executor/test_batch_executor.py)<br>[tests/unit/fuzz_engine/executor/test_collector.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/fuzz_engine/executor/test_collector.py)<br>[tests/unit/fuzz_engine/executor/test_invariants.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/fuzz_engine/executor/test_invariants.py)<br>[tests/unit/fuzz_engine/executor/test_metrics.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/fuzz_engine/executor/test_metrics.py)<br>[tests/unit/fuzz_engine/executor/test_protocol_executor.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/fuzz_engine/executor/test_protocol_executor.py) |
| mcp | 212 | [MCP_SECURITY_AUDIT_ROADMAP.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/MCP_SECURITY_AUDIT_ROADMAP.md)<br>[mcp_fuzzer/__init__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/__init__.py)<br>[mcp_fuzzer/__main__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/__main__.py)<br>[mcp_fuzzer/events.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/events.py)<br>[mcp_fuzzer/exceptions.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/exceptions.py)<br>[mcp_fuzzer/icons.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/icons.py)<br>[mcp_fuzzer/protocol_registry.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/protocol_registry.py)<br>[mcp_fuzzer/types.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mcp_fuzzer/types.py) |
| retrieval | 2 | [docs/index.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docs/index.md)<br>[docs/getting-started/index.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docs/getting-started/index.md) |
| spec | 41 | [ARCHITECTURE.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/ARCHITECTURE.md)<br>[MCP_SECURITY_AUDIT_ROADMAP.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/MCP_SECURITY_AUDIT_ROADMAP.md)<br>[requirements.txt](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/requirements.txt)<br>[tests/unit/test_spec_version.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/test_spec_version.py)<br>[tests/unit/test_spec_versions.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/test_spec_versions.py)<br>[tests/unit/spec_guard/__init__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/spec_guard/__init__.py)<br>[tests/unit/spec_guard/test_helpers.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/spec_guard/test_helpers.py)<br>[tests/unit/spec_guard/test_mappings_coverage.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/spec_guard/test_mappings_coverage.py) |
| eval | 208 | [tests/__init__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/__init__.py)<br>[tests/add_markers.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/add_markers.py)<br>[tests/conftest.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/conftest.py)<br>[tests/README.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/README.md)<br>[tests/unit/__init__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/__init__.py)<br>[tests/unit/test_audit_fix_coverage.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/test_audit_fix_coverage.py)<br>[tests/unit/test_audit_fixes.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/test_audit_fixes.py)<br>[tests/unit/test_corpus.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/test_corpus.py) |
| security | 73 | [MCP_SECURITY_AUDIT_ROADMAP.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/MCP_SECURITY_AUDIT_ROADMAP.md)<br>[tests/unit/test_audit_fix_coverage.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/test_audit_fix_coverage.py)<br>[tests/unit/test_audit_fixes.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/test_audit_fixes.py)<br>[tests/unit/spec_guard/__init__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/spec_guard/__init__.py)<br>[tests/unit/spec_guard/test_helpers.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/spec_guard/test_helpers.py)<br>[tests/unit/spec_guard/test_mappings_coverage.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/spec_guard/test_mappings_coverage.py)<br>[tests/unit/spec_guard/test_runner_more.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/spec_guard/test_runner_more.py)<br>[tests/unit/spec_guard/test_runner_tasks.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/spec_guard/test_runner_tasks.py) |
| ci | 6 | [.github/workflows/docker-release.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/docker-release.yml)<br>[.github/workflows/docs.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/docs.yml)<br>[.github/workflows/e2e-test.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/e2e-test.yml)<br>[.github/workflows/lint.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/lint.yml)<br>[.github/workflows/publish.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/publish.yml)<br>[.github/workflows/tests.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/tests.yml) |
| container | 5 | [docker-compose.host-network.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docker-compose.host-network.yml)<br>[docker-compose.prod.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docker-compose.prod.yml)<br>[docker-compose.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docker-compose.yml)<br>[Dockerfile](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/Dockerfile)<br>[tests/e2e/Dockerfile](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/e2e/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/AGENTS.md) |
| docs | 34 | [mkdocs.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/mkdocs.yml)<br>[README.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/README.md)<br>[tests/README.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/README.md)<br>[tests/e2e/README.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/e2e/README.md)<br>[examples/README.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/examples/README.md)<br>[docs/design-pattern-review.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docs/design-pattern-review.md)<br>[docs/error-codes.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docs/error-codes.md)<br>[docs/index.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docs/index.md) |
| config | 7 | [pyproject.toml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/pyproject.toml)<br>[requirements.txt](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/requirements.txt)<br>[uv.lock](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/uv.lock)<br>[examples/typescript-stdio-server/package.json](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/examples/typescript-stdio-server/package.json)<br>[examples/typescript-stdio-server/tsconfig.json](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/examples/typescript-stdio-server/tsconfig.json)<br>[examples/go_stdio_server/go.mod](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/examples/go_stdio_server/go.mod)<br>[docker/requirements.runtime.txt](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docker/requirements.runtime.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 208 | [tests/__init__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/__init__.py)<br>[tests/add_markers.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/add_markers.py)<br>[tests/conftest.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/conftest.py)<br>[tests/README.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/README.md)<br>[tests/unit/__init__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/__init__.py)<br>[tests/unit/test_audit_fix_coverage.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/test_audit_fix_coverage.py) |
| CI workflows | 6 | [.github/workflows/docker-release.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/docker-release.yml)<br>[.github/workflows/docs.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/docs.yml)<br>[.github/workflows/e2e-test.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/e2e-test.yml)<br>[.github/workflows/lint.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/lint.yml)<br>[.github/workflows/publish.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/publish.yml)<br>[.github/workflows/tests.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/.github/workflows/tests.yml) |
| Containers / deploy | 5 | [docker-compose.host-network.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docker-compose.host-network.yml)<br>[docker-compose.prod.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docker-compose.prod.yml)<br>[docker-compose.yml](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/docker-compose.yml)<br>[Dockerfile](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/Dockerfile)<br>[tests/e2e/Dockerfile](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/e2e/Dockerfile) |
| Security / policy | 73 | [MCP_SECURITY_AUDIT_ROADMAP.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/MCP_SECURITY_AUDIT_ROADMAP.md)<br>[tests/unit/test_audit_fix_coverage.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/test_audit_fix_coverage.py)<br>[tests/unit/test_audit_fixes.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/test_audit_fixes.py)<br>[tests/unit/spec_guard/__init__.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/spec_guard/__init__.py)<br>[tests/unit/spec_guard/test_helpers.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/spec_guard/test_helpers.py)<br>[tests/unit/spec_guard/test_mappings_coverage.py](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/tests/unit/spec_guard/test_mappings_coverage.py) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/Agent-Hellboy__mcp-server-fuzzer/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `MCP_SECURITY_AUDIT_ROADMAP.md`, `mcp_fuzzer/__init__.py`, `mcp_fuzzer/__main__.py`.
2. Trace execution through entrypoints: `mcp_fuzzer/__main__.py`, `mcp_fuzzer/diagnostics/server.py`, `examples/typescript-stdio-server/src/server.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/unit/fuzz_engine/executor/__init__.py`, `tests/unit/fuzz_engine/executor/test_async_executor.py`.
4. Inspect retrieval/memory/indexing through: `docs/index.md`, `docs/getting-started/index.md`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/add_markers.py`, `tests/conftest.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A generic mcp server fuzzer. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, docker-compose.yml, README.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
