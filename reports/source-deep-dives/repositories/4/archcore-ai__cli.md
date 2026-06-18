# archcore-ai/cli Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Git-native context for AI coding agents — CLI and local MCP server

## 요약

- 조사 단위: `sources/archcore-ai__cli` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 387 files, 149 directories, depth score 114, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.go, internal/mcp/server.go이고, 의존성 단서는 mcp, cobra, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | archcore-ai/cli |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Go |
| Stars | 47 |
| Forks | 2 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/archcore-ai__cli](../../../../sources/archcore-ai__cli) |
| Existing report | [reports/global-trending/repositories/archcore-ai__cli.md](../../../global-trending/repositories/archcore-ai__cli.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 387 / 149 |
| Max observed depth | 7 |
| Top directories | .archcore, .claude, .codex, .github, cmd, examples, internal, templates |
| Top extensions | .md: 179, .go: 129, .json: 53, .toml: 16, (none): 3, .yml: 2, .mod: 1, .ps1: 1, .sh: 1, .sum: 1, .yaml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| examples/_global_ | examples workspace | 10 |
| examples/10-monorepo-root-global | examples workspace | 10 |
| examples/02-fullstack-app | examples workspace | 8 |
| examples/09-monorepo-shared-global | examples workspace | 7 |
| examples/01-minimal | examples workspace | 5 |
| examples/03-product-planning | examples workspace | 5 |
| examples/04-experience-playbook | examples workspace | 3 |
| examples/05-global-single-source | examples workspace | 3 |
| examples/06-global-multiple-sources | examples workspace | 3 |
| examples/07-local-overrides-global | examples workspace | 3 |
| examples/08-global-in-archcore | examples workspace | 3 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| internal | top-level component | 1 |
| templates | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


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
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [main.go](../../../../sources/archcore-ai__cli/main.go) | entrypoints signal |
| entrypoints | [internal/mcp/server.go](../../../../sources/archcore-ai__cli/internal/mcp/server.go) | entrypoints signal |
| docs | [README.md](../../../../sources/archcore-ai__cli/README.md) | docs signal |
| docs | [examples/README.md](../../../../sources/archcore-ai__cli/examples/README.md) | docs signal |
| docs | [examples/10-monorepo-root-global/README.md](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/README.md) | docs signal |
| docs | [examples/09-monorepo-shared-global/README.md](../../../../sources/archcore-ai__cli/examples/09-monorepo-shared-global/README.md) | docs signal |
| eval | [templates/source_extensions_test.go](../../../../sources/archcore-ai__cli/templates/source_extensions_test.go) | eval signal |
| eval | [templates/templates_test.go](../../../../sources/archcore-ai__cli/templates/templates_test.go) | eval signal |
| eval | [internal/update/update_test.go](../../../../sources/archcore-ai__cli/internal/update/update_test.go) | eval signal |
| eval | [internal/sync/diff_test.go](../../../../sources/archcore-ai__cli/internal/sync/diff_test.go) | eval signal |
| config | [go.mod](../../../../sources/archcore-ai__cli/go.mod) | config signal |
| ci | [.github/workflows/install-smoke.yml](../../../../sources/archcore-ai__cli/.github/workflows/install-smoke.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [main.go](../../../../sources/archcore-ai__cli/main.go)<br>[internal/mcp/server.go](../../../../sources/archcore-ai__cli/internal/mcp/server.go) |
| agentRuntime | 82 | [AGENTS.md](../../../../sources/archcore-ai__cli/AGENTS.md)<br>[internal/mcp/tools/add_relation_test.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/add_relation_test.go)<br>[internal/mcp/tools/add_relation.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/add_relation.go)<br>[internal/mcp/tools/common_test.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/common_test.go)<br>[internal/mcp/tools/common.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/common.go)<br>[internal/mcp/tools/create_document_test.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/create_document_test.go)<br>[internal/mcp/tools/create_document.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/create_document.go)<br>[internal/mcp/tools/examples_smoke_test.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/examples_smoke_test.go) |
| mcp | 103 | [.mcp.json](../../../../sources/archcore-ai__cli/.mcp.json)<br>[internal/mcp/server_test.go](../../../../sources/archcore-ai__cli/internal/mcp/server_test.go)<br>[internal/mcp/server.go](../../../../sources/archcore-ai__cli/internal/mcp/server.go)<br>[internal/mcp/tools/add_relation_test.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/add_relation_test.go)<br>[internal/mcp/tools/add_relation.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/add_relation.go)<br>[internal/mcp/tools/common_test.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/common_test.go)<br>[internal/mcp/tools/common.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/common.go)<br>[internal/mcp/tools/create_document_test.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/create_document_test.go) |
| retrieval | 0 | not obvious |
| spec | 41 | [internal/mcp/prompts/architecture_track.go](../../../../sources/archcore-ai__cli/internal/mcp/prompts/architecture_track.go)<br>[examples/10-monorepo-root-global/.archcore/monorepo-architecture.doc.md](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/.archcore/monorepo-architecture.doc.md)<br>[examples/03-product-planning/.archcore/team-workspaces.prd.md](../../../../sources/archcore-ai__cli/examples/03-product-planning/.archcore/team-workspaces.prd.md)<br>[examples/03-product-planning/.archcore/workspaces-api.spec.md](../../../../sources/archcore-ai__cli/examples/03-product-planning/.archcore/workspaces-api.spec.md)<br>[examples/02-fullstack-app/.archcore/product/onboarding.prd.md](../../../../sources/archcore-ai__cli/examples/02-fullstack-app/.archcore/product/onboarding.prd.md)<br>[examples/02-fullstack-app/.archcore/product/q3-roadmap.plan.md](../../../../sources/archcore-ai__cli/examples/02-fullstack-app/.archcore/product/q3-roadmap.plan.md)<br>[examples/02-fullstack-app/.archcore/infra/deployment.adr.md](../../../../sources/archcore-ai__cli/examples/02-fullstack-app/.archcore/infra/deployment.adr.md)<br>[examples/02-fullstack-app/.archcore/frontend/state-management.adr.md](../../../../sources/archcore-ai__cli/examples/02-fullstack-app/.archcore/frontend/state-management.adr.md) |
| eval | 80 | [templates/source_extensions_test.go](../../../../sources/archcore-ai__cli/templates/source_extensions_test.go)<br>[templates/templates_test.go](../../../../sources/archcore-ai__cli/templates/templates_test.go)<br>[internal/update/update_test.go](../../../../sources/archcore-ai__cli/internal/update/update_test.go)<br>[internal/sync/diff_test.go](../../../../sources/archcore-ai__cli/internal/sync/diff_test.go)<br>[internal/sync/hash_test.go](../../../../sources/archcore-ai__cli/internal/sync/hash_test.go)<br>[internal/sync/manifest_test.go](../../../../sources/archcore-ai__cli/internal/sync/manifest_test.go)<br>[internal/sync/payload_test.go](../../../../sources/archcore-ai__cli/internal/sync/payload_test.go)<br>[internal/mcp/server_test.go](../../../../sources/archcore-ai__cli/internal/mcp/server_test.go) |
| security | 5 | [examples/_global_/security-baseline/.archcore/auth-standard.adr.md](../../../../sources/archcore-ai__cli/examples/_global_/security-baseline/.archcore/auth-standard.adr.md)<br>[examples/_global_/security-baseline/.archcore/dependency-policy.rule.md](../../../../sources/archcore-ai__cli/examples/_global_/security-baseline/.archcore/dependency-policy.rule.md)<br>[examples/_global_/security-baseline/.archcore/secrets-management.rule.md](../../../../sources/archcore-ai__cli/examples/_global_/security-baseline/.archcore/secrets-management.rule.md)<br>[examples/_global_/security-baseline/.archcore/settings.json](../../../../sources/archcore-ai__cli/examples/_global_/security-baseline/.archcore/settings.json)<br>[.archcore/sync/sync-path-security.rule.md](../../../../sources/archcore-ai__cli/.archcore/sync/sync-path-security.rule.md) |
| ci | 2 | [.github/workflows/install-smoke.yml](../../../../sources/archcore-ai__cli/.github/workflows/install-smoke.yml)<br>[.github/workflows/release.yml](../../../../sources/archcore-ai__cli/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 33 | [AGENTS.md](../../../../sources/archcore-ai__cli/AGENTS.md)<br>[CLAUDE.md](../../../../sources/archcore-ai__cli/CLAUDE.md)<br>[examples/10-monorepo-root-global/AGENTS.md](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/AGENTS.md)<br>[examples/10-monorepo-root-global/packages/ui/AGENTS.md](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/packages/ui/AGENTS.md)<br>[examples/10-monorepo-root-global/packages/ui/.codex/config.toml](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/packages/ui/.codex/config.toml)<br>[examples/10-monorepo-root-global/apps/web/AGENTS.md](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/apps/web/AGENTS.md)<br>[examples/10-monorepo-root-global/apps/web/.codex/config.toml](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/apps/web/.codex/config.toml)<br>[examples/10-monorepo-root-global/apps/api/AGENTS.md](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/apps/api/AGENTS.md) |
| docs | 13 | [README.md](../../../../sources/archcore-ai__cli/README.md)<br>[examples/README.md](../../../../sources/archcore-ai__cli/examples/README.md)<br>[examples/10-monorepo-root-global/README.md](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/README.md)<br>[examples/09-monorepo-shared-global/README.md](../../../../sources/archcore-ai__cli/examples/09-monorepo-shared-global/README.md)<br>[examples/08-global-in-archcore/README.md](../../../../sources/archcore-ai__cli/examples/08-global-in-archcore/README.md)<br>[examples/07-local-overrides-global/README.md](../../../../sources/archcore-ai__cli/examples/07-local-overrides-global/README.md)<br>[examples/06-global-multiple-sources/README.md](../../../../sources/archcore-ai__cli/examples/06-global-multiple-sources/README.md)<br>[examples/05-global-single-source/README.md](../../../../sources/archcore-ai__cli/examples/05-global-single-source/README.md) |
| config | 1 | [go.mod](../../../../sources/archcore-ai__cli/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 80 | [templates/source_extensions_test.go](../../../../sources/archcore-ai__cli/templates/source_extensions_test.go)<br>[templates/templates_test.go](../../../../sources/archcore-ai__cli/templates/templates_test.go)<br>[internal/update/update_test.go](../../../../sources/archcore-ai__cli/internal/update/update_test.go)<br>[internal/sync/diff_test.go](../../../../sources/archcore-ai__cli/internal/sync/diff_test.go)<br>[internal/sync/hash_test.go](../../../../sources/archcore-ai__cli/internal/sync/hash_test.go)<br>[internal/sync/manifest_test.go](../../../../sources/archcore-ai__cli/internal/sync/manifest_test.go) |
| CI workflows | 2 | [.github/workflows/install-smoke.yml](../../../../sources/archcore-ai__cli/.github/workflows/install-smoke.yml)<br>[.github/workflows/release.yml](../../../../sources/archcore-ai__cli/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 5 | [examples/_global_/security-baseline/.archcore/auth-standard.adr.md](../../../../sources/archcore-ai__cli/examples/_global_/security-baseline/.archcore/auth-standard.adr.md)<br>[examples/_global_/security-baseline/.archcore/dependency-policy.rule.md](../../../../sources/archcore-ai__cli/examples/_global_/security-baseline/.archcore/dependency-policy.rule.md)<br>[examples/_global_/security-baseline/.archcore/secrets-management.rule.md](../../../../sources/archcore-ai__cli/examples/_global_/security-baseline/.archcore/secrets-management.rule.md)<br>[examples/_global_/security-baseline/.archcore/settings.json](../../../../sources/archcore-ai__cli/examples/_global_/security-baseline/.archcore/settings.json)<br>[.archcore/sync/sync-path-security.rule.md](../../../../sources/archcore-ai__cli/.archcore/sync/sync-path-security.rule.md) |
| Agent instructions | 33 | [AGENTS.md](../../../../sources/archcore-ai__cli/AGENTS.md)<br>[CLAUDE.md](../../../../sources/archcore-ai__cli/CLAUDE.md)<br>[examples/10-monorepo-root-global/AGENTS.md](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/AGENTS.md)<br>[examples/10-monorepo-root-global/packages/ui/AGENTS.md](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/packages/ui/AGENTS.md)<br>[examples/10-monorepo-root-global/packages/ui/.codex/config.toml](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/packages/ui/.codex/config.toml)<br>[examples/10-monorepo-root-global/apps/web/AGENTS.md](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/apps/web/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `main.go`, `internal/mcp/server.go`, `README.md`.
2. Trace execution through entrypoints: `main.go`, `internal/mcp/server.go`.
3. Map agent/tool runtime through: `AGENTS.md`, `internal/mcp/tools/add_relation_test.go`, `internal/mcp/tools/add_relation.go`.
4. Verify behavior through test/eval files: `templates/source_extensions_test.go`, `templates/templates_test.go`, `internal/update/update_test.go`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Git native context for AI coding agents — CLI and local MCP server. 핵심 구조 신호는 Go, go.mod, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
