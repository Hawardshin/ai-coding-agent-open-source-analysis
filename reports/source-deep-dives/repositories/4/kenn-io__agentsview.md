# kenn-io/agentsview Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local-first session search, analytics, insights, and token use statistics for coding agents, supporting Claude Code, Codex, and more than 20 other agents.

## 요약

- 조사 단위: `sources/kenn-io__agentsview` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,067 files, 106 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=internal/web/embed_test.go, internal/web/embed.go, internal/web/fallback/index.html이고, 의존성 단서는 mcp, cobra, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kenn-io/agentsview |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Go |
| Stars | 2796 |
| Forks | 241 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/kenn-io__agentsview](../../../../sources/kenn-io__agentsview) |
| Existing report | [reports/global-trending/repositories/kenn-io__agentsview.md](../../../global-trending/repositories/kenn-io__agentsview.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1067 / 106 |
| Max observed depth | 8 |
| Top directories | .github, cmd, desktop, docs, frontend, internal, scripts, support, testdata |
| Top extensions | .go: 532, .ts: 319, .svelte: 81, .json: 23, .jsonl: 20, .yml: 15, .png: 14, .sh: 12, .md: 11, (none): 9, .toml: 5, .html: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 5 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| cmd/agentsview | cmd workspace | 1 |
| cmd/testfixture | cmd workspace | 1 |
| desktop | top-level component | 1 |
| frontend | top-level component | 1 |
| internal | top-level component | 1 |
| scripts | top-level component | 1 |
| support | top-level component | 1 |
| testdata | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | ensure-embed-dir | make ensure-embed-dir |
| build | Makefile | build | make build |
| build | Makefile | build-release | make build-release |
| utility | Makefile | install | make install |
| utility | Makefile | frontend | make frontend |
| serve-dev | Makefile | frontend-dev | make frontend-dev |
| serve-dev | Makefile | dev-snapshot | make dev-snapshot |
| quality | Makefile | check-air | make check-air |
| utility | Makefile | air-install | make air-install |
| serve-dev | Makefile | dev | make dev |
| serve-dev | Makefile | desktop-dev | make desktop-dev |
| build | Makefile | desktop-build | make desktop-build |
| utility | Makefile | desktop-macos-app | make desktop-macos-app |
| utility | Makefile | desktop-macos-dmg | make desktop-macos-dmg |
| utility | Makefile | desktop-windows-installer | make desktop-windows-installer |
| container | Makefile | desktop-linux-appimage | make desktop-linux-appimage |
| utility | Makefile | desktop-app | make desktop-app |
| test | Makefile | test | make test |
| test | Makefile | test-short | make test-short |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | cobra |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [internal/web/embed_test.go](../../../../sources/kenn-io__agentsview/internal/web/embed_test.go) | retrieval signal |
| retrieval | [internal/web/embed.go](../../../../sources/kenn-io__agentsview/internal/web/embed.go) | retrieval signal |
| retrieval | [internal/web/fallback/index.html](../../../../sources/kenn-io__agentsview/internal/web/fallback/index.html) | retrieval signal |
| retrieval | [internal/postgres/usage_covering_index_pgtest_test.go](../../../../sources/kenn-io__agentsview/internal/postgres/usage_covering_index_pgtest_test.go) | retrieval signal |
| entrypoints | [internal/server/server.go](../../../../sources/kenn-io__agentsview/internal/server/server.go) | entrypoints signal |
| entrypoints | [frontend/src/app.css](../../../../sources/kenn-io__agentsview/frontend/src/app.css) | entrypoints signal |
| entrypoints | [frontend/src/App.svelte](../../../../sources/kenn-io__agentsview/frontend/src/App.svelte) | entrypoints signal |
| entrypoints | [frontend/src/main.ts](../../../../sources/kenn-io__agentsview/frontend/src/main.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/kenn-io__agentsview/README.md) | docs signal |
| docs | [scripts/qwenpaw-fixtures/README.md](../../../../sources/kenn-io__agentsview/scripts/qwenpaw-fixtures/README.md) | docs signal |
| docs | [internal/duckdb/README.md](../../../../sources/kenn-io__agentsview/internal/duckdb/README.md) | docs signal |
| docs | [docs/desktop-release-setup.md](../../../../sources/kenn-io__agentsview/docs/desktop-release-setup.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [internal/server/server.go](../../../../sources/kenn-io__agentsview/internal/server/server.go)<br>[frontend/src/app.css](../../../../sources/kenn-io__agentsview/frontend/src/app.css)<br>[frontend/src/App.svelte](../../../../sources/kenn-io__agentsview/frontend/src/App.svelte)<br>[frontend/src/main.ts](../../../../sources/kenn-io__agentsview/frontend/src/main.ts)<br>[desktop/src-tauri/src/main.rs](../../../../sources/kenn-io__agentsview/desktop/src-tauri/src/main.rs)<br>[cmd/testfixture/main.go](../../../../sources/kenn-io__agentsview/cmd/testfixture/main.go)<br>[cmd/agentsview/main.go](../../../../sources/kenn-io__agentsview/cmd/agentsview/main.go) |
| agentRuntime | 16 | [AGENTS.md](../../../../sources/kenn-io__agentsview/AGENTS.md)<br>[internal/signals/context_test.go](../../../../sources/kenn-io__agentsview/internal/signals/context_test.go)<br>[internal/signals/context.go](../../../../sources/kenn-io__agentsview/internal/signals/context.go)<br>[internal/server/agent_config_internal_test.go](../../../../sources/kenn-io__agentsview/internal/server/agent_config_internal_test.go)<br>[internal/parser/skill_inference_nonwindows_test.go](../../../../sources/kenn-io__agentsview/internal/parser/skill_inference_nonwindows_test.go)<br>[internal/parser/skill_inference_test.go](../../../../sources/kenn-io__agentsview/internal/parser/skill_inference_test.go)<br>[internal/parser/skill_inference.go](../../../../sources/kenn-io__agentsview/internal/parser/skill_inference.go)<br>[internal/parser/testdata/gemini/tool_calls_with_results.json](../../../../sources/kenn-io__agentsview/internal/parser/testdata/gemini/tool_calls_with_results.json) |
| mcp | 0 | not obvious |
| retrieval | 9 | [internal/web/embed_test.go](../../../../sources/kenn-io__agentsview/internal/web/embed_test.go)<br>[internal/web/embed.go](../../../../sources/kenn-io__agentsview/internal/web/embed.go)<br>[internal/web/fallback/index.html](../../../../sources/kenn-io__agentsview/internal/web/fallback/index.html)<br>[internal/postgres/usage_covering_index_pgtest_test.go](../../../../sources/kenn-io__agentsview/internal/postgres/usage_covering_index_pgtest_test.go)<br>[internal/db/usage_covering_index_test.go](../../../../sources/kenn-io__agentsview/internal/db/usage_covering_index_test.go)<br>[frontend/index.html](../../../../sources/kenn-io__agentsview/frontend/index.html)<br>[frontend/src/lib/api/types/index.ts](../../../../sources/kenn-io__agentsview/frontend/src/lib/api/types/index.ts)<br>[frontend/src/lib/api/generated/index.ts](../../../../sources/kenn-io__agentsview/frontend/src/lib/api/generated/index.ts) |
| spec | 13 | [frontend/e2e/duckdb-backend.spec.ts](../../../../sources/kenn-io__agentsview/frontend/e2e/duckdb-backend.spec.ts)<br>[frontend/e2e/message-content.spec.ts](../../../../sources/kenn-io__agentsview/frontend/e2e/message-content.spec.ts)<br>[frontend/e2e/message-loading.spec.ts](../../../../sources/kenn-io__agentsview/frontend/e2e/message-loading.spec.ts)<br>[frontend/e2e/navigation.spec.ts](../../../../sources/kenn-io__agentsview/frontend/e2e/navigation.spec.ts)<br>[frontend/e2e/runtime-stability.spec.ts](../../../../sources/kenn-io__agentsview/frontend/e2e/runtime-stability.spec.ts)<br>[frontend/e2e/session-count-consistency.spec.ts](../../../../sources/kenn-io__agentsview/frontend/e2e/session-count-consistency.spec.ts)<br>[frontend/e2e/session-list.spec.ts](../../../../sources/kenn-io__agentsview/frontend/e2e/session-list.spec.ts)<br>[frontend/e2e/session-timing.spec.ts](../../../../sources/kenn-io__agentsview/frontend/e2e/session-timing.spec.ts) |
| eval | 371 | [docker-compose.test.yml](../../../../sources/kenn-io__agentsview/docker-compose.test.yml)<br>[scripts/build_wheels_test.py](../../../../sources/kenn-io__agentsview/scripts/build_wheels_test.py)<br>[scripts/install_test.sh](../../../../sources/kenn-io__agentsview/scripts/install_test.sh)<br>[internal/web/embed_test.go](../../../../sources/kenn-io__agentsview/internal/web/embed_test.go)<br>[internal/update/update_test.go](../../../../sources/kenn-io__agentsview/internal/update/update_test.go)<br>[internal/timeutil/timeutil_test.go](../../../../sources/kenn-io__agentsview/internal/timeutil/timeutil_test.go)<br>[internal/telemetry/telemetry_test.go](../../../../sources/kenn-io__agentsview/internal/telemetry/telemetry_test.go)<br>[internal/sync/antigravity_cli_integration_test.go](../../../../sources/kenn-io__agentsview/internal/sync/antigravity_cli_integration_test.go) |
| security | 11 | [SECURITY.md](../../../../sources/kenn-io__agentsview/SECURITY.md)<br>[internal/sync/secret_persist_test.go](../../../../sources/kenn-io__agentsview/internal/sync/secret_persist_test.go)<br>[internal/sync/secret_scan_test.go](../../../../sources/kenn-io__agentsview/internal/sync/secret_scan_test.go)<br>[internal/sync/secret_scan.go](../../../../sources/kenn-io__agentsview/internal/sync/secret_scan.go)<br>[internal/server/auth.go](../../../../sources/kenn-io__agentsview/internal/server/auth.go)<br>[internal/postgres/secret_findings_pgtest_test.go](../../../../sources/kenn-io__agentsview/internal/postgres/secret_findings_pgtest_test.go)<br>[internal/postgres/secret_findings.go](../../../../sources/kenn-io__agentsview/internal/postgres/secret_findings.go)<br>[internal/db/secret_findings_list.go](../../../../sources/kenn-io__agentsview/internal/db/secret_findings_list.go) |
| ci | 7 | [.github/workflows/ci.yml](../../../../sources/kenn-io__agentsview/.github/workflows/ci.yml)<br>[.github/workflows/desktop-artifacts.yml](../../../../sources/kenn-io__agentsview/.github/workflows/desktop-artifacts.yml)<br>[.github/workflows/desktop-release.yml](../../../../sources/kenn-io__agentsview/.github/workflows/desktop-release.yml)<br>[.github/workflows/docker.yml](../../../../sources/kenn-io__agentsview/.github/workflows/docker.yml)<br>[.github/workflows/fuzz.yml](../../../../sources/kenn-io__agentsview/.github/workflows/fuzz.yml)<br>[.github/workflows/msys2-update-check.yml](../../../../sources/kenn-io__agentsview/.github/workflows/msys2-update-check.yml)<br>[.github/workflows/release.yml](../../../../sources/kenn-io__agentsview/.github/workflows/release.yml) |
| container | 4 | [docker-compose.prod.yaml](../../../../sources/kenn-io__agentsview/docker-compose.prod.yaml)<br>[docker-compose.test.yml](../../../../sources/kenn-io__agentsview/docker-compose.test.yml)<br>[Dockerfile](../../../../sources/kenn-io__agentsview/Dockerfile)<br>[testdata/ssh/Dockerfile](../../../../sources/kenn-io__agentsview/testdata/ssh/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/kenn-io__agentsview/AGENTS.md)<br>[frontend/AGENTS.md](../../../../sources/kenn-io__agentsview/frontend/AGENTS.md) |
| docs | 8 | [README.md](../../../../sources/kenn-io__agentsview/README.md)<br>[scripts/qwenpaw-fixtures/README.md](../../../../sources/kenn-io__agentsview/scripts/qwenpaw-fixtures/README.md)<br>[internal/duckdb/README.md](../../../../sources/kenn-io__agentsview/internal/duckdb/README.md)<br>[docs/desktop-release-setup.md](../../../../sources/kenn-io__agentsview/docs/desktop-release-setup.md)<br>[docs/duckdb-backend-plan.md](../../../../sources/kenn-io__agentsview/docs/duckdb-backend-plan.md)<br>[docs/huma-api-routes.md](../../../../sources/kenn-io__agentsview/docs/huma-api-routes.md)<br>[docs/visualstudio-copilot-traces.md](../../../../sources/kenn-io__agentsview/docs/visualstudio-copilot-traces.md)<br>[desktop/README.md](../../../../sources/kenn-io__agentsview/desktop/README.md) |
| config | 7 | [go.mod](../../../../sources/kenn-io__agentsview/go.mod)<br>[Makefile](../../../../sources/kenn-io__agentsview/Makefile)<br>[frontend/package.json](../../../../sources/kenn-io__agentsview/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/kenn-io__agentsview/frontend/tsconfig.json)<br>[desktop/package.json](../../../../sources/kenn-io__agentsview/desktop/package.json)<br>[desktop/src-tauri/Cargo.lock](../../../../sources/kenn-io__agentsview/desktop/src-tauri/Cargo.lock)<br>[desktop/src-tauri/Cargo.toml](../../../../sources/kenn-io__agentsview/desktop/src-tauri/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 371 | [docker-compose.test.yml](../../../../sources/kenn-io__agentsview/docker-compose.test.yml)<br>[scripts/build_wheels_test.py](../../../../sources/kenn-io__agentsview/scripts/build_wheels_test.py)<br>[scripts/install_test.sh](../../../../sources/kenn-io__agentsview/scripts/install_test.sh)<br>[internal/web/embed_test.go](../../../../sources/kenn-io__agentsview/internal/web/embed_test.go)<br>[internal/update/update_test.go](../../../../sources/kenn-io__agentsview/internal/update/update_test.go)<br>[internal/timeutil/timeutil_test.go](../../../../sources/kenn-io__agentsview/internal/timeutil/timeutil_test.go) |
| CI workflows | 7 | [.github/workflows/ci.yml](../../../../sources/kenn-io__agentsview/.github/workflows/ci.yml)<br>[.github/workflows/desktop-artifacts.yml](../../../../sources/kenn-io__agentsview/.github/workflows/desktop-artifacts.yml)<br>[.github/workflows/desktop-release.yml](../../../../sources/kenn-io__agentsview/.github/workflows/desktop-release.yml)<br>[.github/workflows/docker.yml](../../../../sources/kenn-io__agentsview/.github/workflows/docker.yml)<br>[.github/workflows/fuzz.yml](../../../../sources/kenn-io__agentsview/.github/workflows/fuzz.yml)<br>[.github/workflows/msys2-update-check.yml](../../../../sources/kenn-io__agentsview/.github/workflows/msys2-update-check.yml) |
| Containers / deploy | 4 | [docker-compose.prod.yaml](../../../../sources/kenn-io__agentsview/docker-compose.prod.yaml)<br>[docker-compose.test.yml](../../../../sources/kenn-io__agentsview/docker-compose.test.yml)<br>[Dockerfile](../../../../sources/kenn-io__agentsview/Dockerfile)<br>[testdata/ssh/Dockerfile](../../../../sources/kenn-io__agentsview/testdata/ssh/Dockerfile) |
| Security / policy | 11 | [SECURITY.md](../../../../sources/kenn-io__agentsview/SECURITY.md)<br>[internal/sync/secret_persist_test.go](../../../../sources/kenn-io__agentsview/internal/sync/secret_persist_test.go)<br>[internal/sync/secret_scan_test.go](../../../../sources/kenn-io__agentsview/internal/sync/secret_scan_test.go)<br>[internal/sync/secret_scan.go](../../../../sources/kenn-io__agentsview/internal/sync/secret_scan.go)<br>[internal/server/auth.go](../../../../sources/kenn-io__agentsview/internal/server/auth.go)<br>[internal/postgres/secret_findings_pgtest_test.go](../../../../sources/kenn-io__agentsview/internal/postgres/secret_findings_pgtest_test.go) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/kenn-io__agentsview/AGENTS.md)<br>[frontend/AGENTS.md](../../../../sources/kenn-io__agentsview/frontend/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `internal/web/embed_test.go`, `internal/web/embed.go`, `internal/web/fallback/index.html`.
2. Trace execution through entrypoints: `internal/server/server.go`, `frontend/src/app.css`, `frontend/src/App.svelte`.
3. Map agent/tool runtime through: `AGENTS.md`, `internal/signals/context_test.go`, `internal/signals/context.go`.
4. Inspect retrieval/memory/indexing through: `internal/web/embed_test.go`, `internal/web/embed.go`, `internal/web/fallback/index.html`.
5. Verify behavior through test/eval files: `docker-compose.test.yml`, `scripts/build_wheels_test.py`, `scripts/install_test.sh`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Local first session search, analytics, insights, and token use statistics for coding agents, supporting Claude Code, Cod. 핵심 구조 신호는 Go, go.mod, Dockerfile, Makefile, README.md, AGENTS.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
