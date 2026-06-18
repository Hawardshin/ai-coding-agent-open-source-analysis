# zzet/gortex Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

High-performance code graph and code intelligence engine, supports 257 languages, multi repositories, with access via CLI, MCP Server, and API. Built for AI coding agents - expose only needed information, cutting token usage up to 50x. 100% local.

## 요약

- 조사 단위: `sources/zzet__gortex` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,397 files, 261 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=internal/parser/languages/mcp_config_test.go, internal/parser/languages/mcp_config.go, internal/mcp/agent_registry_test.go이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | zzet/gortex |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Go |
| Stars | 492 |
| Forks | 39 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/zzet__gortex](../../../../sources/zzet__gortex) |
| Existing report | [reports/global-trending/repositories/zzet__gortex.md](../../../global-trending/repositories/zzet__gortex.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2397 / 261 |
| Max observed depth | 11 |
| Top directories | .github, assets, bench, cmd, docs, eval, examples, internal, pkg, scripts |
| Top extensions | .go: 2130, .md: 49, .py: 39, .yaml: 36, .ts: 34, .txt: 16, (none): 14, .php: 13, .yml: 12, .json: 11, .java: 7, .jinja: 6 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 28 |
| cmd/gortex | cmd workspace | 3 |
| examples/.github | examples workspace | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| bench | validation surface | 1 |
| cmd | source boundary | 1 |
| eval | top-level component | 1 |
| examples | top-level component | 1 |
| internal | top-level component | 1 |
| pkg | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| build | Makefile | build-onnx | make build-onnx |
| build | Makefile | build-gomlx | make build-gomlx |
| build | Makefile | build-hugot | make build-hugot |
| test | Makefile | test | make test |
| utility | Makefile | bench | make bench |
| utility | Makefile | bench-rpi | make bench-rpi |
| utility | Makefile | bench-rpi-quick | make bench-rpi-quick |
| utility | Makefile | bench-rpi-profile | make bench-rpi-profile |
| utility | Makefile | bench-compare | make bench-compare |
| utility | Makefile | bench-save-baseline | make bench-save-baseline |
| quality | Makefile | lint | make lint |
| quality | Makefile | fmt | make fmt |
| utility | Makefile | clean | make clean |
| utility | Makefile | install | make install |
| serve-dev | Makefile | dev-link | make dev-link |
| build | Makefile | tag-release | make tag-release |
| build | Makefile | build-rpi | make build-rpi |
| build | Makefile | build-rpi32 | make build-rpi32 |


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
| mcp | [internal/parser/languages/mcp_config_test.go](../../../../sources/zzet__gortex/internal/parser/languages/mcp_config_test.go) | mcp signal |
| mcp | [internal/parser/languages/mcp_config.go](../../../../sources/zzet__gortex/internal/parser/languages/mcp_config.go) | mcp signal |
| mcp | [internal/mcp/agent_registry_test.go](../../../../sources/zzet__gortex/internal/mcp/agent_registry_test.go) | mcp signal |
| mcp | [internal/mcp/agent_registry.go](../../../../sources/zzet__gortex/internal/mcp/agent_registry.go) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/zzet__gortex/AGENTS.md) | agentRuntime signal |
| agentRuntime | [internal/skills/build.go](../../../../sources/zzet__gortex/internal/skills/build.go) | agentRuntime signal |
| agentRuntime | [internal/skills/generator_test.go](../../../../sources/zzet__gortex/internal/skills/generator_test.go) | agentRuntime signal |
| agentRuntime | [internal/skills/generator.go](../../../../sources/zzet__gortex/internal/skills/generator.go) | agentRuntime signal |
| entrypoints | [internal/parser/languages/cmd/dump/main.go](../../../../sources/zzet__gortex/internal/parser/languages/cmd/dump/main.go) | entrypoints signal |
| entrypoints | [internal/mcp/server.go](../../../../sources/zzet__gortex/internal/mcp/server.go) | entrypoints signal |
| entrypoints | [internal/llm/cmd/llmtest/main.go](../../../../sources/zzet__gortex/internal/llm/cmd/llmtest/main.go) | entrypoints signal |
| entrypoints | [internal/llm/cmd/daemonprobe/main.go](../../../../sources/zzet__gortex/internal/llm/cmd/daemonprobe/main.go) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 17 | [internal/parser/languages/cmd/dump/main.go](../../../../sources/zzet__gortex/internal/parser/languages/cmd/dump/main.go)<br>[internal/mcp/server.go](../../../../sources/zzet__gortex/internal/mcp/server.go)<br>[internal/llm/cmd/llmtest/main.go](../../../../sources/zzet__gortex/internal/llm/cmd/llmtest/main.go)<br>[internal/llm/cmd/daemonprobe/main.go](../../../../sources/zzet__gortex/internal/llm/cmd/daemonprobe/main.go)<br>[internal/llm/cmd/bench/main.go](../../../../sources/zzet__gortex/internal/llm/cmd/bench/main.go)<br>[internal/llm/cmd/agentdemo/main.go](../../../../sources/zzet__gortex/internal/llm/cmd/agentdemo/main.go)<br>[internal/daemon/server.go](../../../../sources/zzet__gortex/internal/daemon/server.go)<br>[docs/server.md](../../../../sources/zzet__gortex/docs/server.md) |
| agentRuntime | 403 | [AGENTS.md](../../../../sources/zzet__gortex/AGENTS.md)<br>[internal/skills/build.go](../../../../sources/zzet__gortex/internal/skills/build.go)<br>[internal/skills/generator_test.go](../../../../sources/zzet__gortex/internal/skills/generator_test.go)<br>[internal/skills/generator.go](../../../../sources/zzet__gortex/internal/skills/generator.go)<br>[internal/search/rerank/context.go](../../../../sources/zzet__gortex/internal/search/rerank/context.go)<br>[internal/mcp/agent_registry_test.go](../../../../sources/zzet__gortex/internal/mcp/agent_registry_test.go)<br>[internal/mcp/agent_registry.go](../../../../sources/zzet__gortex/internal/mcp/agent_registry.go)<br>[internal/mcp/tool_budget_seed_test.go](../../../../sources/zzet__gortex/internal/mcp/tool_budget_seed_test.go) |
| mcp | 423 | [internal/parser/languages/mcp_config_test.go](../../../../sources/zzet__gortex/internal/parser/languages/mcp_config_test.go)<br>[internal/parser/languages/mcp_config.go](../../../../sources/zzet__gortex/internal/parser/languages/mcp_config.go)<br>[internal/mcp/agent_registry_test.go](../../../../sources/zzet__gortex/internal/mcp/agent_registry_test.go)<br>[internal/mcp/agent_registry.go](../../../../sources/zzet__gortex/internal/mcp/agent_registry.go)<br>[internal/mcp/auto_index_test.go](../../../../sources/zzet__gortex/internal/mcp/auto_index_test.go)<br>[internal/mcp/auto_index.go](../../../../sources/zzet__gortex/internal/mcp/auto_index.go)<br>[internal/mcp/batch_edit_crlf_test.go](../../../../sources/zzet__gortex/internal/mcp/batch_edit_crlf_test.go)<br>[internal/mcp/batch_edit_hetero_test.go](../../../../sources/zzet__gortex/internal/mcp/batch_edit_hetero_test.go) |
| retrieval | 139 | [internal/wiki/enhance_cache.go](../../../../sources/zzet__gortex/internal/wiki/enhance_cache.go)<br>[internal/wiki/enhancer_claudecli.go](../../../../sources/zzet__gortex/internal/wiki/enhancer_claudecli.go)<br>[internal/wiki/enhancer_test.go](../../../../sources/zzet__gortex/internal/wiki/enhancer_test.go)<br>[internal/wiki/enhancer.go](../../../../sources/zzet__gortex/internal/wiki/enhancer.go)<br>[internal/wiki/generator_test.go](../../../../sources/zzet__gortex/internal/wiki/generator_test.go)<br>[internal/wiki/generator.go](../../../../sources/zzet__gortex/internal/wiki/generator.go)<br>[internal/wiki/html.go](../../../../sources/zzet__gortex/internal/wiki/html.go)<br>[internal/wiki/mermaid.go](../../../../sources/zzet__gortex/internal/wiki/mermaid.go) |
| spec | 9 | [internal/semantic/tstypes/spec.go](../../../../sources/zzet__gortex/internal/semantic/tstypes/spec.go)<br>[internal/mcp/tools_architecture_hierarchy_test.go](../../../../sources/zzet__gortex/internal/mcp/tools_architecture_hierarchy_test.go)<br>[internal/mcp/tools_architecture_test.go](../../../../sources/zzet__gortex/internal/mcp/tools_architecture_test.go)<br>[internal/mcp/tools_architecture.go](../../../../sources/zzet__gortex/internal/mcp/tools_architecture.go)<br>[internal/indexer/spec_launch_acceptance_test.go](../../../../sources/zzet__gortex/internal/indexer/spec_launch_acceptance_test.go)<br>[internal/analysis/architecture_test.go](../../../../sources/zzet__gortex/internal/analysis/architecture_test.go)<br>[internal/analysis/architecture.go](../../../../sources/zzet__gortex/internal/analysis/architecture.go)<br>[examples/.github/workflows/gortex-architecture.yml](../../../../sources/zzet__gortex/examples/.github/workflows/gortex-architecture.yml) |
| eval | 1287 | [BENCHMARK-SWE.md](../../../../sources/zzet__gortex/BENCHMARK-SWE.md)<br>[BENCHMARK.md](../../../../sources/zzet__gortex/BENCHMARK.md)<br>[scripts/bench-rpi.sh](../../../../sources/zzet__gortex/scripts/bench-rpi.sh)<br>[pkg/gortex/api_test.go](../../../../sources/zzet__gortex/pkg/gortex/api_test.go)<br>[internal/wiki/enhancer_test.go](../../../../sources/zzet__gortex/internal/wiki/enhancer_test.go)<br>[internal/wiki/generator_test.go](../../../../sources/zzet__gortex/internal/wiki/generator_test.go)<br>[internal/version/version_test.go](../../../../sources/zzet__gortex/internal/version/version_test.go)<br>[internal/tokens/cache_sweep_test.go](../../../../sources/zzet__gortex/internal/tokens/cache_sweep_test.go) |
| security | 30 | [SECURITY.md](../../../../sources/zzet__gortex/SECURITY.md)<br>[internal/server/auth_rotate_test.go](../../../../sources/zzet__gortex/internal/server/auth_rotate_test.go)<br>[internal/server/auth_test.go](../../../../sources/zzet__gortex/internal/server/auth_test.go)<br>[internal/server/auth.go](../../../../sources/zzet__gortex/internal/server/auth.go)<br>[internal/resolver/cross_pkg_call_guard_test.go](../../../../sources/zzet__gortex/internal/resolver/cross_pkg_call_guard_test.go)<br>[internal/resolver/cross_pkg_guard.go](../../../../sources/zzet__gortex/internal/resolver/cross_pkg_guard.go)<br>[internal/mcp/tools_analyze_edge_audit.go](../../../../sources/zzet__gortex/internal/mcp/tools_analyze_edge_audit.go)<br>[internal/mcp/tools_audit_test.go](../../../../sources/zzet__gortex/internal/mcp/tools_audit_test.go) |
| ci | 11 | [examples/.github/workflows/gortex-architecture.yml](../../../../sources/zzet__gortex/examples/.github/workflows/gortex-architecture.yml)<br>[.github/workflows/bench-arm.yml](../../../../sources/zzet__gortex/.github/workflows/bench-arm.yml)<br>[.github/workflows/ci.yml](../../../../sources/zzet__gortex/.github/workflows/ci.yml)<br>[.github/workflows/gortex-pr-review.yml.example](../../../../sources/zzet__gortex/.github/workflows/gortex-pr-review.yml.example)<br>[.github/workflows/init-smoke.yml](../../../../sources/zzet__gortex/.github/workflows/init-smoke.yml)<br>[.github/workflows/install-script.yml](../../../../sources/zzet__gortex/.github/workflows/install-script.yml)<br>[.github/workflows/publish-claude-plugin.yml](../../../../sources/zzet__gortex/.github/workflows/publish-claude-plugin.yml)<br>[.github/workflows/release.yml](../../../../sources/zzet__gortex/.github/workflows/release.yml) |
| container | 4 | [internal/parser/tsitter/dockerfile/dockerfile.go](../../../../sources/zzet__gortex/internal/parser/tsitter/dockerfile/dockerfile.go)<br>[internal/parser/languages/dockerfile_infra_test.go](../../../../sources/zzet__gortex/internal/parser/languages/dockerfile_infra_test.go)<br>[internal/parser/languages/dockerfile_test.go](../../../../sources/zzet__gortex/internal/parser/languages/dockerfile_test.go)<br>[internal/parser/languages/dockerfile.go](../../../../sources/zzet__gortex/internal/parser/languages/dockerfile.go) |
| instruction | 3 | [AGENTS.md](../../../../sources/zzet__gortex/AGENTS.md)<br>[CLAUDE.md](../../../../sources/zzet__gortex/CLAUDE.md)<br>[docs/agents.md](../../../../sources/zzet__gortex/docs/agents.md) |
| docs | 38 | [README.md](../../../../sources/zzet__gortex/README.md)<br>[internal/thirdparty/renameio/README.md](../../../../sources/zzet__gortex/internal/thirdparty/renameio/README.md)<br>[internal/resolver/README.md](../../../../sources/zzet__gortex/internal/resolver/README.md)<br>[internal/docs/docs_test.go](../../../../sources/zzet__gortex/internal/docs/docs_test.go)<br>[internal/docs/docs.go](../../../../sources/zzet__gortex/internal/docs/docs.go)<br>[internal/docs/render.go](../../../../sources/zzet__gortex/internal/docs/render.go)<br>[internal/daemon/README.md](../../../../sources/zzet__gortex/internal/daemon/README.md)<br>[internal/contracts/README.md](../../../../sources/zzet__gortex/internal/contracts/README.md) |
| config | 10 | [go.mod](../../../../sources/zzet__gortex/go.mod)<br>[Makefile](../../../../sources/zzet__gortex/Makefile)<br>[internal/thirdparty/renameio/go.mod](../../../../sources/zzet__gortex/internal/thirdparty/renameio/go.mod)<br>[internal/thirdparty/go-pointer/go.mod](../../../../sources/zzet__gortex/internal/thirdparty/go-pointer/go.mod)<br>[eval/pyproject.toml](../../../../sources/zzet__gortex/eval/pyproject.toml)<br>[bench/fixtures/di/nestjs/package.json](../../../../sources/zzet__gortex/bench/fixtures/di/nestjs/package.json)<br>[bench/fixtures/di/nestjs/tsconfig.json](../../../../sources/zzet__gortex/bench/fixtures/di/nestjs/tsconfig.json)<br>[bench/fixtures/di/fastapi/pyproject.toml](../../../../sources/zzet__gortex/bench/fixtures/di/fastapi/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1287 | [BENCHMARK-SWE.md](../../../../sources/zzet__gortex/BENCHMARK-SWE.md)<br>[BENCHMARK.md](../../../../sources/zzet__gortex/BENCHMARK.md)<br>[scripts/bench-rpi.sh](../../../../sources/zzet__gortex/scripts/bench-rpi.sh)<br>[pkg/gortex/api_test.go](../../../../sources/zzet__gortex/pkg/gortex/api_test.go)<br>[internal/wiki/enhancer_test.go](../../../../sources/zzet__gortex/internal/wiki/enhancer_test.go)<br>[internal/wiki/generator_test.go](../../../../sources/zzet__gortex/internal/wiki/generator_test.go) |
| CI workflows | 11 | [examples/.github/workflows/gortex-architecture.yml](../../../../sources/zzet__gortex/examples/.github/workflows/gortex-architecture.yml)<br>[.github/workflows/bench-arm.yml](../../../../sources/zzet__gortex/.github/workflows/bench-arm.yml)<br>[.github/workflows/ci.yml](../../../../sources/zzet__gortex/.github/workflows/ci.yml)<br>[.github/workflows/gortex-pr-review.yml.example](../../../../sources/zzet__gortex/.github/workflows/gortex-pr-review.yml.example)<br>[.github/workflows/init-smoke.yml](../../../../sources/zzet__gortex/.github/workflows/init-smoke.yml)<br>[.github/workflows/install-script.yml](../../../../sources/zzet__gortex/.github/workflows/install-script.yml) |
| Containers / deploy | 4 | [internal/parser/tsitter/dockerfile/dockerfile.go](../../../../sources/zzet__gortex/internal/parser/tsitter/dockerfile/dockerfile.go)<br>[internal/parser/languages/dockerfile_infra_test.go](../../../../sources/zzet__gortex/internal/parser/languages/dockerfile_infra_test.go)<br>[internal/parser/languages/dockerfile_test.go](../../../../sources/zzet__gortex/internal/parser/languages/dockerfile_test.go)<br>[internal/parser/languages/dockerfile.go](../../../../sources/zzet__gortex/internal/parser/languages/dockerfile.go) |
| Security / policy | 30 | [SECURITY.md](../../../../sources/zzet__gortex/SECURITY.md)<br>[internal/server/auth_rotate_test.go](../../../../sources/zzet__gortex/internal/server/auth_rotate_test.go)<br>[internal/server/auth_test.go](../../../../sources/zzet__gortex/internal/server/auth_test.go)<br>[internal/server/auth.go](../../../../sources/zzet__gortex/internal/server/auth.go)<br>[internal/resolver/cross_pkg_call_guard_test.go](../../../../sources/zzet__gortex/internal/resolver/cross_pkg_call_guard_test.go)<br>[internal/resolver/cross_pkg_guard.go](../../../../sources/zzet__gortex/internal/resolver/cross_pkg_guard.go) |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/zzet__gortex/AGENTS.md)<br>[CLAUDE.md](../../../../sources/zzet__gortex/CLAUDE.md)<br>[docs/agents.md](../../../../sources/zzet__gortex/docs/agents.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `internal/parser/languages/mcp_config_test.go`, `internal/parser/languages/mcp_config.go`, `internal/mcp/agent_registry_test.go`.
2. Trace execution through entrypoints: `internal/parser/languages/cmd/dump/main.go`, `internal/mcp/server.go`, `internal/llm/cmd/llmtest/main.go`.
3. Map agent/tool runtime through: `AGENTS.md`, `internal/skills/build.go`, `internal/skills/generator_test.go`.
4. Inspect retrieval/memory/indexing through: `internal/wiki/enhance_cache.go`, `internal/wiki/enhancer_claudecli.go`, `internal/wiki/enhancer_test.go`.
5. Verify behavior through test/eval files: `BENCHMARK-SWE.md`, `BENCHMARK.md`, `scripts/bench-rpi.sh`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 High performance code graph and code intelligence engine, supports 257 languages, multi repositories, with access via CL. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, AGENTS.md, CLAUDE.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
