# mathomhaus/guild Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Shared context, memory, and task coordination across AI coding agents. Single Go binary, local SQLite, hybrid keyword and semantic search.

## 요약

- 조사 단위: `sources/mathomhaus__guild` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 444 files, 52 directories, depth score 121, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=internal/mcp/auto_bootstrap_test.go, internal/mcp/budget_test.go, internal/mcp/db.go이고, 의존성 단서는 modelcontextprotocol, cobra, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | mathomhaus/guild |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 312 |
| Forks | 47 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/mathomhaus__guild](../../../../sources/mathomhaus__guild) |
| Existing report | [reports/global-trending/repositories/mathomhaus__guild.md](../../../global-trending/repositories/mathomhaus__guild.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 444 / 52 |
| Max observed depth | 6 |
| Top directories | .github, cmd, docs, examples, internal, recipe, tests |
| Top extensions | .go: 349, .md: 32, .txt: 15, .yml: 15, .sh: 11, .sql: 8, (none): 5, .gif: 3, .json: 1, .mod: 1, .ps1: 1, .py: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 9 |
| tests | validation surface | 9 |
| cmd/sqlcheck | cmd workspace | 2 |
| examples/01-hello-guild | examples workspace | 2 |
| examples/02-quest-decomposition | examples workspace | 2 |
| examples/03-cross-project | examples workspace | 2 |
| examples/04-session-handoff | examples workspace | 2 |
| examples/05-lore-only | examples workspace | 2 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| cmd/docgen | cmd workspace | 1 |
| cmd/embedref | cmd workspace | 1 |
| cmd/guild | cmd workspace | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| internal | top-level component | 1 |
| recipe | ci surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build-fast | make build-fast |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build-all | make build-all |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | sqlcheck | make sqlcheck |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install | make install |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install-fast | make install-fast |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install-embed | make install-embed |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test | make test |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test-race | make test-race |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | cobra |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [internal/mcp/auto_bootstrap_test.go](../../../../sources/mathomhaus__guild/internal/mcp/auto_bootstrap_test.go) | mcp signal |
| mcp | [internal/mcp/budget_test.go](../../../../sources/mathomhaus__guild/internal/mcp/budget_test.go) | mcp signal |
| mcp | [internal/mcp/db.go](../../../../sources/mathomhaus__guild/internal/mcp/db.go) | mcp signal |
| mcp | [internal/mcp/doc_coverage_audit_test.go](../../../../sources/mathomhaus__guild/internal/mcp/doc_coverage_audit_test.go) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/mathomhaus__guild/AGENTS.md) | agentRuntime signal |
| agentRuntime | [internal/mcp/tools_guild.go](../../../../sources/mathomhaus__guild/internal/mcp/tools_guild.go) | agentRuntime signal |
| agentRuntime | [internal/mcp/tools_lore.go](../../../../sources/mathomhaus__guild/internal/mcp/tools_lore.go) | agentRuntime signal |
| agentRuntime | [internal/mcp/tools_quest.go](../../../../sources/mathomhaus__guild/internal/mcp/tools_quest.go) | agentRuntime signal |
| entrypoints | [internal/mcp/server.go](../../../../sources/mathomhaus__guild/internal/mcp/server.go) | entrypoints signal |
| entrypoints | [cmd/sqlcheck/main.go](../../../../sources/mathomhaus__guild/cmd/sqlcheck/main.go) | entrypoints signal |
| entrypoints | [cmd/guild/main.go](../../../../sources/mathomhaus__guild/cmd/guild/main.go) | entrypoints signal |
| entrypoints | [cmd/embedref/main.go](../../../../sources/mathomhaus__guild/cmd/embedref/main.go) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [internal/mcp/server.go](../../../../sources/mathomhaus__guild/internal/mcp/server.go)<br>[cmd/sqlcheck/main.go](../../../../sources/mathomhaus__guild/cmd/sqlcheck/main.go)<br>[cmd/guild/main.go](../../../../sources/mathomhaus__guild/cmd/guild/main.go)<br>[cmd/embedref/main.go](../../../../sources/mathomhaus__guild/cmd/embedref/main.go)<br>[cmd/docgen/main.go](../../../../sources/mathomhaus__guild/cmd/docgen/main.go) |
| agentRuntime | 8 | [AGENTS.md](../../../../sources/mathomhaus__guild/AGENTS.md)<br>[internal/mcp/tools_guild.go](../../../../sources/mathomhaus__guild/internal/mcp/tools_guild.go)<br>[internal/mcp/tools_lore.go](../../../../sources/mathomhaus__guild/internal/mcp/tools_lore.go)<br>[internal/mcp/tools_quest.go](../../../../sources/mathomhaus__guild/internal/mcp/tools_quest.go)<br>[internal/mcp/tools_test.go](../../../../sources/mathomhaus__guild/internal/mcp/tools_test.go)<br>[internal/install/templates/agents_md.tmpl](../../../../sources/mathomhaus__guild/internal/install/templates/agents_md.tmpl)<br>[internal/hints/context_test.go](../../../../sources/mathomhaus__guild/internal/hints/context_test.go)<br>[internal/hints/context.go](../../../../sources/mathomhaus__guild/internal/hints/context.go) |
| mcp | 43 | [internal/mcp/auto_bootstrap_test.go](../../../../sources/mathomhaus__guild/internal/mcp/auto_bootstrap_test.go)<br>[internal/mcp/budget_test.go](../../../../sources/mathomhaus__guild/internal/mcp/budget_test.go)<br>[internal/mcp/db.go](../../../../sources/mathomhaus__guild/internal/mcp/db.go)<br>[internal/mcp/doc_coverage_audit_test.go](../../../../sources/mathomhaus__guild/internal/mcp/doc_coverage_audit_test.go)<br>[internal/mcp/doc_coverage_test.go](../../../../sources/mathomhaus__guild/internal/mcp/doc_coverage_test.go)<br>[internal/mcp/embed_autobackfill_test.go](../../../../sources/mathomhaus__guild/internal/mcp/embed_autobackfill_test.go)<br>[internal/mcp/embed_autobackfill.go](../../../../sources/mathomhaus__guild/internal/mcp/embed_autobackfill.go)<br>[internal/mcp/embed_provider.go](../../../../sources/mathomhaus__guild/internal/mcp/embed_provider.go) |
| retrieval | 60 | [internal/storage/embed.go](../../../../sources/mathomhaus__guild/internal/storage/embed.go)<br>[internal/storage/migrations/007_task_notes_task_id_index.up.sql](../../../../sources/mathomhaus__guild/internal/storage/migrations/007_task_notes_task_id_index.up.sql)<br>[internal/mcp/embed_autobackfill_test.go](../../../../sources/mathomhaus__guild/internal/mcp/embed_autobackfill_test.go)<br>[internal/mcp/embed_autobackfill.go](../../../../sources/mathomhaus__guild/internal/mcp/embed_autobackfill.go)<br>[internal/mcp/embed_provider.go](../../../../sources/mathomhaus__guild/internal/mcp/embed_provider.go)<br>[internal/mcp/embed_wiring_flip_test.go](../../../../sources/mathomhaus__guild/internal/mcp/embed_wiring_flip_test.go)<br>[internal/mcp/embed_wiring_test.go](../../../../sources/mathomhaus__guild/internal/mcp/embed_wiring_test.go)<br>[internal/mcp/quest_embed_provider.go](../../../../sources/mathomhaus__guild/internal/mcp/quest_embed_provider.go) |
| spec | 4 | [recipe/requirements.txt](../../../../sources/mathomhaus__guild/recipe/requirements.txt)<br>[internal/quest/spec.go](../../../../sources/mathomhaus__guild/internal/quest/spec.go)<br>[internal/command/spec_test.go](../../../../sources/mathomhaus__guild/internal/command/spec_test.go)<br>[internal/command/spec.go](../../../../sources/mathomhaus__guild/internal/command/spec.go) |
| eval | 146 | [tests/integration/bloat_warn_test.go](../../../../sources/mathomhaus__guild/tests/integration/bloat_warn_test.go)<br>[tests/integration/dedup_test.go](../../../../sources/mathomhaus__guild/tests/integration/dedup_test.go)<br>[tests/integration/harness_test.go](../../../../sources/mathomhaus__guild/tests/integration/harness_test.go)<br>[tests/integration/oath_audit_test.go](../../../../sources/mathomhaus__guild/tests/integration/oath_audit_test.go)<br>[tests/integration/recall_test.go](../../../../sources/mathomhaus__guild/tests/integration/recall_test.go)<br>[tests/integration/session_reload_test.go](../../../../sources/mathomhaus__guild/tests/integration/session_reload_test.go)<br>[tests/integration/fixtures/recall_corpus.go](../../../../sources/mathomhaus__guild/tests/integration/fixtures/recall_corpus.go)<br>[internal/test/concurrency/concurrency_test.go](../../../../sources/mathomhaus__guild/internal/test/concurrency/concurrency_test.go) |
| security | 3 | [SECURITY.md](../../../../sources/mathomhaus__guild/SECURITY.md)<br>[tests/integration/oath_audit_test.go](../../../../sources/mathomhaus__guild/tests/integration/oath_audit_test.go)<br>[internal/mcp/doc_coverage_audit_test.go](../../../../sources/mathomhaus__guild/internal/mcp/doc_coverage_audit_test.go) |
| ci | 7 | [.github/workflows/assign.yml](../../../../sources/mathomhaus__guild/.github/workflows/assign.yml)<br>[.github/workflows/build-model.yml](../../../../sources/mathomhaus__guild/.github/workflows/build-model.yml)<br>[.github/workflows/ci.yml](../../../../sources/mathomhaus__guild/.github/workflows/ci.yml)<br>[.github/workflows/labeler.yml](../../../../sources/mathomhaus__guild/.github/workflows/labeler.yml)<br>[.github/workflows/pr-hygiene.yml](../../../../sources/mathomhaus__guild/.github/workflows/pr-hygiene.yml)<br>[.github/workflows/release-drafter.yml](../../../../sources/mathomhaus__guild/.github/workflows/release-drafter.yml)<br>[.github/workflows/release.yml](../../../../sources/mathomhaus__guild/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/mathomhaus__guild/AGENTS.md) |
| docs | 23 | [README.md](../../../../sources/mathomhaus__guild/README.md)<br>[recipe/README.md](../../../../sources/mathomhaus__guild/recipe/README.md)<br>[internal/lore/embed/assets/README.md](../../../../sources/mathomhaus__guild/internal/lore/embed/assets/README.md)<br>[examples/README.md](../../../../sources/mathomhaus__guild/examples/README.md)<br>[examples/05-lore-only/README.md](../../../../sources/mathomhaus__guild/examples/05-lore-only/README.md)<br>[examples/05-lore-only/expected/README.md](../../../../sources/mathomhaus__guild/examples/05-lore-only/expected/README.md)<br>[examples/04-session-handoff/README.md](../../../../sources/mathomhaus__guild/examples/04-session-handoff/README.md)<br>[examples/04-session-handoff/expected/README.md](../../../../sources/mathomhaus__guild/examples/04-session-handoff/expected/README.md) |
| config | 3 | [go.mod](../../../../sources/mathomhaus__guild/go.mod)<br>[Makefile](../../../../sources/mathomhaus__guild/Makefile)<br>[recipe/requirements.txt](../../../../sources/mathomhaus__guild/recipe/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 146 | [tests/integration/bloat_warn_test.go](../../../../sources/mathomhaus__guild/tests/integration/bloat_warn_test.go)<br>[tests/integration/dedup_test.go](../../../../sources/mathomhaus__guild/tests/integration/dedup_test.go)<br>[tests/integration/harness_test.go](../../../../sources/mathomhaus__guild/tests/integration/harness_test.go)<br>[tests/integration/oath_audit_test.go](../../../../sources/mathomhaus__guild/tests/integration/oath_audit_test.go)<br>[tests/integration/recall_test.go](../../../../sources/mathomhaus__guild/tests/integration/recall_test.go)<br>[tests/integration/session_reload_test.go](../../../../sources/mathomhaus__guild/tests/integration/session_reload_test.go) |
| CI workflows | 7 | [.github/workflows/assign.yml](../../../../sources/mathomhaus__guild/.github/workflows/assign.yml)<br>[.github/workflows/build-model.yml](../../../../sources/mathomhaus__guild/.github/workflows/build-model.yml)<br>[.github/workflows/ci.yml](../../../../sources/mathomhaus__guild/.github/workflows/ci.yml)<br>[.github/workflows/labeler.yml](../../../../sources/mathomhaus__guild/.github/workflows/labeler.yml)<br>[.github/workflows/pr-hygiene.yml](../../../../sources/mathomhaus__guild/.github/workflows/pr-hygiene.yml)<br>[.github/workflows/release-drafter.yml](../../../../sources/mathomhaus__guild/.github/workflows/release-drafter.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 3 | [SECURITY.md](../../../../sources/mathomhaus__guild/SECURITY.md)<br>[tests/integration/oath_audit_test.go](../../../../sources/mathomhaus__guild/tests/integration/oath_audit_test.go)<br>[internal/mcp/doc_coverage_audit_test.go](../../../../sources/mathomhaus__guild/internal/mcp/doc_coverage_audit_test.go) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/mathomhaus__guild/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `internal/mcp/auto_bootstrap_test.go`, `internal/mcp/budget_test.go`, `internal/mcp/db.go`.
2. Trace execution through entrypoints: `internal/mcp/server.go`, `cmd/sqlcheck/main.go`, `cmd/guild/main.go`.
3. Map agent/tool runtime through: `AGENTS.md`, `internal/mcp/tools_guild.go`, `internal/mcp/tools_lore.go`.
4. Inspect retrieval/memory/indexing through: `internal/storage/embed.go`, `internal/storage/migrations/007_task_notes_task_id_index.up.sql`, `internal/mcp/embed_autobackfill_test.go`.
5. Verify behavior through test/eval files: `tests/integration/bloat_warn_test.go`, `tests/integration/dedup_test.go`, `tests/integration/harness_test.go`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Shared context, memory, and task coordination across AI coding agents. Single Go binary, local SQLite, hybrid keyword an. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, AGENTS.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
