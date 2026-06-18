# gastownhall/beads Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Beads - A memory upgrade for your coding agent

## 요약

- 조사 단위: `sources/gastownhall__beads` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,498 files, 201 directories, depth score 125, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

코딩 에이전트/IDE 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=scripts/repro-dolt-prod-timeouts/main.go, scripts/repro-dolt-hang/main.go, scripts/ci/go-list-test-names/main.go이고, 의존성 단서는 anthropic, cobra, chroma, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 coding-agent reference implementation이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | gastownhall/beads |
| Topic | Coding Agent and IDE / 코딩 에이전트/IDE |
| Region | global |
| Language | Go |
| Stars | 24595 |
| Forks | 1648 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/gastownhall__beads](../../../../sources/gastownhall__beads) |
| Existing report | [reports/global-trending/repositories/gastownhall__beads.md](../../../global-trending/repositories/gastownhall__beads.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2498 / 201 |
| Max observed depth | 6 |
| Top directories | .agent, .beads, .claude, .claude-plugin, .devcontainer, .githooks, .github, cmd, docs, examples, format, integrations, internal, npm-package, plugins, release-gates, scripts, tests, website, winget |
| Top extensions | .go: 1368, .md: 801, .sql: 110, .sh: 65, .txt: 35, .py: 24, (none): 20, .yml: 18, .json: 17, .toml: 7, .yaml: 6, .js: 4 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| cmd/bd | cmd workspace | 22 |
| docs | documentation surface | 18 |
| tests | validation surface | 7 |
| examples/bd-example-extension-go | examples workspace | 2 |
| examples/library-usage | examples workspace | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| examples | top-level component | 1 |
| examples/claude-desktop-mcp | examples workspace | 1 |
| format | top-level component | 1 |
| integrations | top-level component | 1 |
| internal | top-level component | 1 |
| npm-package | top-level component | 1 |
| plugins | top-level component | 1 |
| release-gates | top-level component | 1 |
| scripts | top-level component | 1 |
| website | documentation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| build | Makefile | build | make build |
| test | Makefile | test | make test |
| test | Makefile | test-icu-path | make test-icu-path |
| test | Makefile | test-full-cgo | make test-full-cgo |
| utility | Makefile | ci-pr-core | make ci-pr-core |
| utility | Makefile | ci-pr-policy | make ci-pr-policy |
| quality | Makefile | ci-pr-lint | make ci-pr-lint |
| utility | Makefile | ci-package-mcp | make ci-package-mcp |
| utility | Makefile | ci-package-npm | make ci-package-npm |
| utility | Makefile | ci-website | make ci-website |
| test | Makefile | test-regression | make test-regression |
| test | Makefile | test-upgrade | make test-upgrade |
| test | Makefile | test-cross-version | make test-cross-version |
| test | Makefile | test-migration | make test-migration |
| utility | Makefile | bench | make bench |
| utility | Makefile | bench-quick | make bench-quick |
| quality | Makefile | check-up-to-date | make check-up-to-date |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | anthropic |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | chroma |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | cobra |
| observability | opentelemetry, prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [scripts/repro-dolt-prod-timeouts/main.go](../../../../sources/gastownhall__beads/scripts/repro-dolt-prod-timeouts/main.go) | entrypoints signal |
| entrypoints | [scripts/repro-dolt-hang/main.go](../../../../sources/gastownhall__beads/scripts/repro-dolt-hang/main.go) | entrypoints signal |
| entrypoints | [scripts/ci/go-list-test-names/main.go](../../../../sources/gastownhall__beads/scripts/ci/go-list-test-names/main.go) | entrypoints signal |
| entrypoints | [scripts/bench-ready-indexes/main.go](../../../../sources/gastownhall__beads/scripts/bench-ready-indexes/main.go) | entrypoints signal |
| agentRuntime | [AGENT_INSTRUCTIONS.md](../../../../sources/gastownhall__beads/AGENT_INSTRUCTIONS.md) | agentRuntime signal |
| agentRuntime | [AGENTS.md](../../../../sources/gastownhall__beads/AGENTS.md) | agentRuntime signal |
| agentRuntime | [website/versioned_docs/version-1.0.5/cli-reference/context.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.5/cli-reference/context.md) | agentRuntime signal |
| agentRuntime | [website/versioned_docs/version-1.0.5/cli-reference/hooks.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.5/cli-reference/hooks.md) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/gastownhall__beads/CLAUDE.md) | instruction signal |
| instruction | [website/versioned_docs/version-1.0.5/integrations/gemini.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.5/integrations/gemini.md) | instruction signal |
| instruction | [website/versioned_docs/version-1.0.4/integrations/gemini.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.4/integrations/gemini.md) | instruction signal |
| security | [SECURITY.md](../../../../sources/gastownhall__beads/SECURITY.md) | security signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 14 | [scripts/repro-dolt-prod-timeouts/main.go](../../../../sources/gastownhall__beads/scripts/repro-dolt-prod-timeouts/main.go)<br>[scripts/repro-dolt-hang/main.go](../../../../sources/gastownhall__beads/scripts/repro-dolt-hang/main.go)<br>[scripts/ci/go-list-test-names/main.go](../../../../sources/gastownhall__beads/scripts/ci/go-list-test-names/main.go)<br>[scripts/bench-ready-indexes/main.go](../../../../sources/gastownhall__beads/scripts/bench-ready-indexes/main.go)<br>[npm-package/bin/bd.js](../../../../sources/gastownhall__beads/npm-package/bin/bd.js)<br>[internal/storage/embeddeddolt/cmd/main.go](../../../../sources/gastownhall__beads/internal/storage/embeddeddolt/cmd/main.go)<br>[internal/storage/dbproxy/server/server.go](../../../../sources/gastownhall__beads/internal/storage/dbproxy/server/server.go)<br>[internal/storage/dbproxy/proxy/server.go](../../../../sources/gastownhall__beads/internal/storage/dbproxy/proxy/server.go) |
| agentRuntime | 123 | [AGENT_INSTRUCTIONS.md](../../../../sources/gastownhall__beads/AGENT_INSTRUCTIONS.md)<br>[AGENTS.md](../../../../sources/gastownhall__beads/AGENTS.md)<br>[website/versioned_docs/version-1.0.5/cli-reference/context.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.5/cli-reference/context.md)<br>[website/versioned_docs/version-1.0.5/cli-reference/hooks.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.5/cli-reference/hooks.md)<br>[website/versioned_docs/version-1.0.4/cli-reference/context.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.4/cli-reference/context.md)<br>[website/versioned_docs/version-1.0.4/cli-reference/hooks.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.4/cli-reference/hooks.md)<br>[website/versioned_docs/version-1.0.0/cli-reference/context.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.0/cli-reference/context.md)<br>[website/versioned_docs/version-1.0.0/cli-reference/hooks.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.0/cli-reference/hooks.md) |
| mcp | 39 | [website/versioned_docs/version-1.0.5/integrations/mcp-server.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.5/integrations/mcp-server.md)<br>[website/versioned_docs/version-1.0.4/integrations/mcp-server.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.4/integrations/mcp-server.md)<br>[website/versioned_docs/version-1.0.0/integrations/mcp-server.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.0/integrations/mcp-server.md)<br>[website/docs/integrations/mcp-server.md](../../../../sources/gastownhall__beads/website/docs/integrations/mcp-server.md)<br>[scripts/ci/package-mcp.sh](../../../../sources/gastownhall__beads/scripts/ci/package-mcp.sh)<br>[integrations/beads-mcp/.gitignore](../../../../sources/gastownhall__beads/integrations/beads-mcp/.gitignore)<br>[integrations/beads-mcp/.python-version](../../../../sources/gastownhall__beads/integrations/beads-mcp/.python-version)<br>[integrations/beads-mcp/CHANGELOG.md](../../../../sources/gastownhall__beads/integrations/beads-mcp/CHANGELOG.md) |
| retrieval | 49 | [website/versioned_docs/version-1.0.5/workflows/index.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.5/workflows/index.md)<br>[website/versioned_docs/version-1.0.5/recovery/index.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.5/recovery/index.md)<br>[website/versioned_docs/version-1.0.5/multi-agent/index.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.5/multi-agent/index.md)<br>[website/versioned_docs/version-1.0.5/integrations/index.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.5/integrations/index.md)<br>[website/versioned_docs/version-1.0.5/core-concepts/index.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.5/core-concepts/index.md)<br>[website/versioned_docs/version-1.0.5/cli-reference/graph.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.5/cli-reference/graph.md)<br>[website/versioned_docs/version-1.0.5/cli-reference/index.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.5/cli-reference/index.md)<br>[website/versioned_docs/version-1.0.5/architecture/index.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.5/architecture/index.md) |
| spec | 15 | [website/versioned_docs/version-1.0.5/architecture/index.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.5/architecture/index.md)<br>[website/versioned_docs/version-1.0.4/architecture/index.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.4/architecture/index.md)<br>[website/versioned_docs/version-1.0.0/architecture/index.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.0/architecture/index.md)<br>[website/docs/architecture/index.md](../../../../sources/gastownhall__beads/website/docs/architecture/index.md)<br>[plugins/beads/skills/beads/adr/0001-bd-prime-as-source-of-truth.md](../../../../sources/gastownhall__beads/plugins/beads/skills/beads/adr/0001-bd-prime-as-source-of-truth.md)<br>[internal/storage/schema/migrations/0034_add_spec_id_column.down.sql](../../../../sources/gastownhall__beads/internal/storage/schema/migrations/0034_add_spec_id_column.down.sql)<br>[internal/storage/schema/migrations/0034_add_spec_id_column.up.sql](../../../../sources/gastownhall__beads/internal/storage/schema/migrations/0034_add_spec_id_column.up.sql)<br>[docs/ARCHITECTURE.md](../../../../sources/gastownhall__beads/docs/ARCHITECTURE.md) |
| eval | 765 | [.test-skip](../../../../sources/gastownhall__beads/.test-skip)<br>[beads_test.go](../../../../sources/gastownhall__beads/beads_test.go)<br>[open_nocgo_test.go](../../../../sources/gastownhall__beads/open_nocgo_test.go)<br>[tests/regression/BASELINE_VERSION](../../../../sources/gastownhall__beads/tests/regression/BASELINE_VERSION)<br>[tests/regression/discovery_test.go](../../../../sources/gastownhall__beads/tests/regression/discovery_test.go)<br>[tests/regression/DISCOVERY.md](../../../../sources/gastownhall__beads/tests/regression/DISCOVERY.md)<br>[tests/regression/regression_test.go](../../../../sources/gastownhall__beads/tests/regression/regression_test.go)<br>[tests/regression/scenarios_test.go](../../../../sources/gastownhall__beads/tests/regression/scenarios_test.go) |
| security | 36 | [SECURITY.md](../../../../sources/gastownhall__beads/SECURITY.md)<br>[website/versioned_docs/version-1.0.5/cli-reference/audit.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.5/cli-reference/audit.md)<br>[website/versioned_docs/version-1.0.4/cli-reference/audit.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.4/cli-reference/audit.md)<br>[website/versioned_docs/version-1.0.0/cli-reference/audit.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.0/cli-reference/audit.md)<br>[website/docs/cli-reference/audit.md](../../../../sources/gastownhall__beads/website/docs/cli-reference/audit.md)<br>[scripts/ci/pr-policy.sh](../../../../sources/gastownhall__beads/scripts/ci/pr-policy.sh)<br>[plugins/beads/skills/beads/commands/audit.md](../../../../sources/gastownhall__beads/plugins/beads/skills/beads/commands/audit.md)<br>[internal/storage/dolt/create_guard_test.go](../../../../sources/gastownhall__beads/internal/storage/dolt/create_guard_test.go) |
| ci | 26 | [scripts/ci/detect-package-gates.sh](../../../../sources/gastownhall__beads/scripts/ci/detect-package-gates.sh)<br>[scripts/ci/go-test-shard-names.sh](../../../../sources/gastownhall__beads/scripts/ci/go-test-shard-names.sh)<br>[scripts/ci/go-test-shard-packages.sh](../../../../sources/gastownhall__beads/scripts/ci/go-test-shard-packages.sh)<br>[scripts/ci/package-mcp.sh](../../../../sources/gastownhall__beads/scripts/ci/package-mcp.sh)<br>[scripts/ci/package-npm.sh](../../../../sources/gastownhall__beads/scripts/ci/package-npm.sh)<br>[scripts/ci/pr-core.sh](../../../../sources/gastownhall__beads/scripts/ci/pr-core.sh)<br>[scripts/ci/pr-lint.sh](../../../../sources/gastownhall__beads/scripts/ci/pr-lint.sh)<br>[scripts/ci/pr-policy.sh](../../../../sources/gastownhall__beads/scripts/ci/pr-policy.sh) |
| container | 0 | not obvious |
| instruction | 11 | [AGENTS.md](../../../../sources/gastownhall__beads/AGENTS.md)<br>[CLAUDE.md](../../../../sources/gastownhall__beads/CLAUDE.md)<br>[website/versioned_docs/version-1.0.5/integrations/gemini.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.5/integrations/gemini.md)<br>[website/versioned_docs/version-1.0.4/integrations/gemini.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.4/integrations/gemini.md)<br>[website/docs/integrations/gemini.md](../../../../sources/gastownhall__beads/website/docs/integrations/gemini.md)<br>[plugins/beads/skills/beads/CLAUDE.md](../../../../sources/gastownhall__beads/plugins/beads/skills/beads/CLAUDE.md)<br>[plugins/beads/skills/beads/resources/AGENTS.md](../../../../sources/gastownhall__beads/plugins/beads/skills/beads/resources/AGENTS.md)<br>[internal/templates/agents/defaults/agents.md.tmpl](../../../../sources/gastownhall__beads/internal/templates/agents/defaults/agents.md.tmpl) |
| docs | 725 | [README.md](../../../../sources/gastownhall__beads/README.md)<br>[winget/README.md](../../../../sources/gastownhall__beads/winget/README.md)<br>[website/.gitignore](../../../../sources/gastownhall__beads/website/.gitignore)<br>[website/bun.lock](../../../../sources/gastownhall__beads/website/bun.lock)<br>[website/docusaurus.config.ts](../../../../sources/gastownhall__beads/website/docusaurus.config.ts)<br>[website/package-lock.json](../../../../sources/gastownhall__beads/website/package-lock.json)<br>[website/package.json](../../../../sources/gastownhall__beads/website/package.json)<br>[website/README.md](../../../../sources/gastownhall__beads/website/README.md) |
| config | 9 | [go.mod](../../../../sources/gastownhall__beads/go.mod)<br>[Makefile](../../../../sources/gastownhall__beads/Makefile)<br>[website/package.json](../../../../sources/gastownhall__beads/website/package.json)<br>[website/tsconfig.json](../../../../sources/gastownhall__beads/website/tsconfig.json)<br>[npm-package/package.json](../../../../sources/gastownhall__beads/npm-package/package.json)<br>[integrations/beads-mcp/pyproject.toml](../../../../sources/gastownhall__beads/integrations/beads-mcp/pyproject.toml)<br>[integrations/beads-mcp/uv.lock](../../../../sources/gastownhall__beads/integrations/beads-mcp/uv.lock)<br>[examples/library-usage/go.mod](../../../../sources/gastownhall__beads/examples/library-usage/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 765 | [.test-skip](../../../../sources/gastownhall__beads/.test-skip)<br>[beads_test.go](../../../../sources/gastownhall__beads/beads_test.go)<br>[open_nocgo_test.go](../../../../sources/gastownhall__beads/open_nocgo_test.go)<br>[tests/regression/BASELINE_VERSION](../../../../sources/gastownhall__beads/tests/regression/BASELINE_VERSION)<br>[tests/regression/discovery_test.go](../../../../sources/gastownhall__beads/tests/regression/discovery_test.go)<br>[tests/regression/DISCOVERY.md](../../../../sources/gastownhall__beads/tests/regression/DISCOVERY.md) |
| CI workflows | 26 | [scripts/ci/detect-package-gates.sh](../../../../sources/gastownhall__beads/scripts/ci/detect-package-gates.sh)<br>[scripts/ci/go-test-shard-names.sh](../../../../sources/gastownhall__beads/scripts/ci/go-test-shard-names.sh)<br>[scripts/ci/go-test-shard-packages.sh](../../../../sources/gastownhall__beads/scripts/ci/go-test-shard-packages.sh)<br>[scripts/ci/package-mcp.sh](../../../../sources/gastownhall__beads/scripts/ci/package-mcp.sh)<br>[scripts/ci/package-npm.sh](../../../../sources/gastownhall__beads/scripts/ci/package-npm.sh)<br>[scripts/ci/pr-core.sh](../../../../sources/gastownhall__beads/scripts/ci/pr-core.sh) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 36 | [SECURITY.md](../../../../sources/gastownhall__beads/SECURITY.md)<br>[website/versioned_docs/version-1.0.5/cli-reference/audit.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.5/cli-reference/audit.md)<br>[website/versioned_docs/version-1.0.4/cli-reference/audit.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.4/cli-reference/audit.md)<br>[website/versioned_docs/version-1.0.0/cli-reference/audit.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.0/cli-reference/audit.md)<br>[website/docs/cli-reference/audit.md](../../../../sources/gastownhall__beads/website/docs/cli-reference/audit.md)<br>[scripts/ci/pr-policy.sh](../../../../sources/gastownhall__beads/scripts/ci/pr-policy.sh) |
| Agent instructions | 11 | [AGENTS.md](../../../../sources/gastownhall__beads/AGENTS.md)<br>[CLAUDE.md](../../../../sources/gastownhall__beads/CLAUDE.md)<br>[website/versioned_docs/version-1.0.5/integrations/gemini.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.5/integrations/gemini.md)<br>[website/versioned_docs/version-1.0.4/integrations/gemini.md](../../../../sources/gastownhall__beads/website/versioned_docs/version-1.0.4/integrations/gemini.md)<br>[website/docs/integrations/gemini.md](../../../../sources/gastownhall__beads/website/docs/integrations/gemini.md)<br>[plugins/beads/skills/beads/CLAUDE.md](../../../../sources/gastownhall__beads/plugins/beads/skills/beads/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `scripts/repro-dolt-prod-timeouts/main.go`, `scripts/repro-dolt-hang/main.go`, `scripts/ci/go-list-test-names/main.go`.
2. Trace execution through entrypoints: `scripts/repro-dolt-prod-timeouts/main.go`, `scripts/repro-dolt-hang/main.go`, `scripts/ci/go-list-test-names/main.go`.
3. Map agent/tool runtime through: `AGENT_INSTRUCTIONS.md`, `AGENTS.md`, `website/versioned_docs/version-1.0.5/cli-reference/context.md`.
4. Inspect retrieval/memory/indexing through: `website/versioned_docs/version-1.0.5/workflows/index.md`, `website/versioned_docs/version-1.0.5/recovery/index.md`, `website/versioned_docs/version-1.0.5/multi-agent/index.md`.
5. Verify behavior through test/eval files: `.test-skip`, `beads_test.go`, `open_nocgo_test.go`.

## Existing Repository Insight

코딩 에이전트/IDE 관점에서 Beads A memory upgrade for your coding agent. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, AGENTS.md, CLAUDE.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 코딩 에이전트/IDE 레포입니다. 활용 관점은 coding-agent reference implementation이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
