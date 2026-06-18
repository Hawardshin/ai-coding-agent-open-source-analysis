# CaviraOSS/OpenMemory Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local persistent memory store for LLM applications including claude desktop, github copilot, codex, antigravity, etc.

## 요약

- 조사 단위: `sources/CaviraOSS__OpenMemory` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 284 files, 76 directories, depth score 123, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=packages/openmemory-py/src/openmemory/temporal_graph/__init__.py, packages/openmemory-py/src/openmemory/temporal_graph/query.py, packages/openmemory-py/src/openmemory/temporal_graph/store.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | CaviraOSS/OpenMemory |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 4243 |
| Forks | 481 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/CaviraOSS__OpenMemory](../../../../sources/CaviraOSS__OpenMemory) |
| Existing report | [reports/global-trending/repositories/CaviraOSS__OpenMemory.md](../../../global-trending/repositories/CaviraOSS__OpenMemory.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 284 / 76 |
| Max observed depth | 7 |
| Top directories | .do, .github, apps, dashboard, docs, examples, packages, tools |
| Top extensions | .ts: 94, .py: 93, .md: 26, .json: 14, .tsx: 12, .yml: 10, (none): 10, .js: 6, .png: 3, .example: 2, .mjs: 2, .ps1: 2 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/openmemory-js | packages workspace | 50 |
| packages/openmemory-py | packages workspace | 34 |
| apps/vscode-extension | apps workspace | 14 |
| docs | documentation surface | 12 |
| examples/python | examples workspace | 5 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| dashboard | top-level component | 1 |
| examples | top-level component | 1 |
| examples/node | examples workspace | 1 |
| packages | source boundary | 1 |
| tools | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | install | make install |
| serve-dev | Makefile | install-dev | make install-dev |
| build | Makefile | build | make build |
| build | Makefile | build-backend | make build-backend |
| build | Makefile | build-js-sdk | make build-js-sdk |
| serve-dev | Makefile | dev | make dev |
| serve-dev | Makefile | dev-watch | make dev-watch |
| serve-dev | Makefile | start | make start |
| utility | Makefile | stop | make stop |
| test | Makefile | test | make test |
| test | Makefile | test-backend | make test-backend |
| test | Makefile | test-js-sdk | make test-js-sdk |
| test | Makefile | test-py-sdk | make test-py-sdk |
| test | Makefile | test-integration | make test-integration |
| quality | Makefile | lint | make lint |
| quality | Makefile | format | make format |
| quality | Makefile | type-check | make type-check |
| utility | Makefile | db-reset | make db-reset |


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
| retrieval | [packages/openmemory-py/src/openmemory/temporal_graph/__init__.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/temporal_graph/__init__.py) | retrieval signal |
| retrieval | [packages/openmemory-py/src/openmemory/temporal_graph/query.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/temporal_graph/query.py) | retrieval signal |
| retrieval | [packages/openmemory-py/src/openmemory/temporal_graph/store.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/temporal_graph/store.py) | retrieval signal |
| retrieval | [packages/openmemory-py/src/openmemory/temporal_graph/timeline.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/temporal_graph/timeline.py) | retrieval signal |
| entrypoints | [tools/migrate/__main__.py](../../../../sources/CaviraOSS__OpenMemory/tools/migrate/__main__.py) | entrypoints signal |
| entrypoints | [packages/openmemory-py/src/openmemory/main.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/main.py) | entrypoints signal |
| entrypoints | [packages/openmemory-js/src/cli.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/src/cli.ts) | entrypoints signal |
| entrypoints | [packages/openmemory-js/src/index.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/src/index.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/CaviraOSS__OpenMemory/README.md) | docs signal |
| docs | [packages/openmemory-py/README.md](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/README.md) | docs signal |
| docs | [packages/openmemory-js/README.md](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/README.md) | docs signal |
| docs | [docs/api-server.md](../../../../sources/CaviraOSS__OpenMemory/docs/api-server.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 17 | [tools/migrate/__main__.py](../../../../sources/CaviraOSS__OpenMemory/tools/migrate/__main__.py)<br>[packages/openmemory-py/src/openmemory/main.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/main.py)<br>[packages/openmemory-js/src/cli.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/src/cli.ts)<br>[packages/openmemory-js/src/index.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/src/index.ts)<br>[packages/openmemory-js/src/server.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/src/server.ts)<br>[packages/openmemory-js/src/server/server.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/src/server/server.ts)<br>[packages/openmemory-js/bin/opm.js](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/bin/opm.js)<br>[apps/vscode-extension/src/extension.ts](../../../../sources/CaviraOSS__OpenMemory/apps/vscode-extension/src/extension.ts) |
| agentRuntime | 39 | [tools/backup_restore.py](../../../../sources/CaviraOSS__OpenMemory/tools/backup_restore.py)<br>[tools/ops/benchmark.py](../../../../sources/CaviraOSS__OpenMemory/tools/ops/benchmark.py)<br>[tools/ops/health_viz.py](../../../../sources/CaviraOSS__OpenMemory/tools/ops/health_viz.py)<br>[tools/migrate/__init__.py](../../../../sources/CaviraOSS__OpenMemory/tools/migrate/__init__.py)<br>[tools/migrate/__main__.py](../../../../sources/CaviraOSS__OpenMemory/tools/migrate/__main__.py)<br>[tools/migrate/importer.py](../../../../sources/CaviraOSS__OpenMemory/tools/migrate/importer.py)<br>[tools/migrate/schemas.py](../../../../sources/CaviraOSS__OpenMemory/tools/migrate/schemas.py)<br>[tools/migrate/utils.py](../../../../sources/CaviraOSS__OpenMemory/tools/migrate/utils.py) |
| mcp | 5 | [packages/openmemory-py/src/openmemory/ai/mcp.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/ai/mcp.py)<br>[packages/openmemory-js/tests/mcp_per_tenant.test.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/tests/mcp_per_tenant.test.ts)<br>[packages/openmemory-js/src/ai/mcp_tools.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/src/ai/mcp_tools.ts)<br>[packages/openmemory-js/src/ai/mcp.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/src/ai/mcp.ts)<br>[docs/mcp.md](../../../../sources/CaviraOSS__OpenMemory/docs/mcp.md) |
| retrieval | 47 | [packages/openmemory-py/src/openmemory/temporal_graph/__init__.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/temporal_graph/__init__.py)<br>[packages/openmemory-py/src/openmemory/temporal_graph/query.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/temporal_graph/query.py)<br>[packages/openmemory-py/src/openmemory/temporal_graph/store.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/temporal_graph/store.py)<br>[packages/openmemory-py/src/openmemory/temporal_graph/timeline.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/temporal_graph/timeline.py)<br>[packages/openmemory-py/src/openmemory/temporal_graph/types.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/temporal_graph/types.py)<br>[packages/openmemory-py/src/openmemory/server/routes/memory.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/server/routes/memory.py)<br>[packages/openmemory-py/src/openmemory/ops/ingest.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/ops/ingest.py)<br>[packages/openmemory-py/src/openmemory/memory/decay.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/memory/decay.py) |
| spec | 2 | [ARCHITECTURE.md](../../../../sources/CaviraOSS__OpenMemory/ARCHITECTURE.md)<br>[.do/spec.yaml](../../../../sources/CaviraOSS__OpenMemory/.do/spec.yaml) |
| eval | 14 | [tools/ops/benchmark.py](../../../../sources/CaviraOSS__OpenMemory/tools/ops/benchmark.py)<br>[packages/openmemory-py/tests/test_minimax.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/tests/test_minimax.py)<br>[packages/openmemory-py/tests/test_omnibus.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/tests/test_omnibus.py)<br>[packages/openmemory-py/tests/test_multilingual_dedup.py/test_multilingual_dedup.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/tests/test_multilingual_dedup.py/test_multilingual_dedup.py)<br>[packages/openmemory-py/src/openmemory/trace.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/trace.py)<br>[packages/openmemory-js/tests/mcp_per_tenant.test.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/tests/mcp_per_tenant.test.ts)<br>[packages/openmemory-js/tests/multilingual_dedup.test.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/tests/multilingual_dedup.test.ts)<br>[packages/openmemory-js/tests/omnibus.test.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/tests/omnibus.test.ts) |
| security | 2 | [SECURITY.md](../../../../sources/CaviraOSS__OpenMemory/SECURITY.md)<br>[packages/openmemory-js/src/server/middleware/auth.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/src/server/middleware/auth.ts) |
| ci | 5 | [.github/workflows/ci.yml](../../../../sources/CaviraOSS__OpenMemory/.github/workflows/ci.yml)<br>[.github/workflows/docker-build.yml](../../../../sources/CaviraOSS__OpenMemory/.github/workflows/docker-build.yml)<br>[.github/workflows/main.yml](../../../../sources/CaviraOSS__OpenMemory/.github/workflows/main.yml)<br>[.github/workflows/publish-docker-image.yml](../../../../sources/CaviraOSS__OpenMemory/.github/workflows/publish-docker-image.yml)<br>[.github/workflows/publish-sdks.yml](../../../../sources/CaviraOSS__OpenMemory/.github/workflows/publish-sdks.yml) |
| container | 3 | [docker-compose.yml](../../../../sources/CaviraOSS__OpenMemory/docker-compose.yml)<br>[packages/openmemory-js/Dockerfile](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/Dockerfile)<br>[dashboard/Dockerfile](../../../../sources/CaviraOSS__OpenMemory/dashboard/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 15 | [README.md](../../../../sources/CaviraOSS__OpenMemory/README.md)<br>[packages/openmemory-py/README.md](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/README.md)<br>[packages/openmemory-js/README.md](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/README.md)<br>[docs/api-server.md](../../../../sources/CaviraOSS__OpenMemory/docs/api-server.md)<br>[docs/concepts.md](../../../../sources/CaviraOSS__OpenMemory/docs/concepts.md)<br>[docs/faq.md](../../../../sources/CaviraOSS__OpenMemory/docs/faq.md)<br>[docs/getting-started.md](../../../../sources/CaviraOSS__OpenMemory/docs/getting-started.md)<br>[docs/index.md](../../../../sources/CaviraOSS__OpenMemory/docs/index.md) |
| config | 8 | [Makefile](../../../../sources/CaviraOSS__OpenMemory/Makefile)<br>[packages/openmemory-py/pyproject.toml](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/pyproject.toml)<br>[packages/openmemory-js/package.json](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/package.json)<br>[packages/openmemory-js/tsconfig.json](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/tsconfig.json)<br>[dashboard/package.json](../../../../sources/CaviraOSS__OpenMemory/dashboard/package.json)<br>[dashboard/tsconfig.json](../../../../sources/CaviraOSS__OpenMemory/dashboard/tsconfig.json)<br>[apps/vscode-extension/package.json](../../../../sources/CaviraOSS__OpenMemory/apps/vscode-extension/package.json)<br>[apps/vscode-extension/tsconfig.json](../../../../sources/CaviraOSS__OpenMemory/apps/vscode-extension/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 14 | [tools/ops/benchmark.py](../../../../sources/CaviraOSS__OpenMemory/tools/ops/benchmark.py)<br>[packages/openmemory-py/tests/test_minimax.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/tests/test_minimax.py)<br>[packages/openmemory-py/tests/test_omnibus.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/tests/test_omnibus.py)<br>[packages/openmemory-py/tests/test_multilingual_dedup.py/test_multilingual_dedup.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/tests/test_multilingual_dedup.py/test_multilingual_dedup.py)<br>[packages/openmemory-py/src/openmemory/trace.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/trace.py)<br>[packages/openmemory-js/tests/mcp_per_tenant.test.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/tests/mcp_per_tenant.test.ts) |
| CI workflows | 5 | [.github/workflows/ci.yml](../../../../sources/CaviraOSS__OpenMemory/.github/workflows/ci.yml)<br>[.github/workflows/docker-build.yml](../../../../sources/CaviraOSS__OpenMemory/.github/workflows/docker-build.yml)<br>[.github/workflows/main.yml](../../../../sources/CaviraOSS__OpenMemory/.github/workflows/main.yml)<br>[.github/workflows/publish-docker-image.yml](../../../../sources/CaviraOSS__OpenMemory/.github/workflows/publish-docker-image.yml)<br>[.github/workflows/publish-sdks.yml](../../../../sources/CaviraOSS__OpenMemory/.github/workflows/publish-sdks.yml) |
| Containers / deploy | 3 | [docker-compose.yml](../../../../sources/CaviraOSS__OpenMemory/docker-compose.yml)<br>[packages/openmemory-js/Dockerfile](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/Dockerfile)<br>[dashboard/Dockerfile](../../../../sources/CaviraOSS__OpenMemory/dashboard/Dockerfile) |
| Security / policy | 2 | [SECURITY.md](../../../../sources/CaviraOSS__OpenMemory/SECURITY.md)<br>[packages/openmemory-js/src/server/middleware/auth.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/src/server/middleware/auth.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/openmemory-py/src/openmemory/temporal_graph/__init__.py`, `packages/openmemory-py/src/openmemory/temporal_graph/query.py`, `packages/openmemory-py/src/openmemory/temporal_graph/store.py`.
2. Trace execution through entrypoints: `tools/migrate/__main__.py`, `packages/openmemory-py/src/openmemory/main.py`, `packages/openmemory-js/src/cli.ts`.
3. Map agent/tool runtime through: `tools/backup_restore.py`, `tools/ops/benchmark.py`, `tools/ops/health_viz.py`.
4. Inspect retrieval/memory/indexing through: `packages/openmemory-py/src/openmemory/temporal_graph/__init__.py`, `packages/openmemory-py/src/openmemory/temporal_graph/query.py`, `packages/openmemory-py/src/openmemory/temporal_graph/store.py`.
5. Verify behavior through test/eval files: `tools/ops/benchmark.py`, `packages/openmemory-py/tests/test_minimax.py`, `packages/openmemory-py/tests/test_omnibus.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Local persistent memory store for LLM applications including claude desktop, github copilot, codex, antigravity, etc.. 핵심 구조 신호는 TypeScript, docker-compose.yml, Makefile, README.md, LICENSE, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
