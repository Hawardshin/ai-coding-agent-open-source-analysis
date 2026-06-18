# ozgurcd/gograph Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local-only Go static analysis engine with a built-in MCP server. Gives AI coding agents deterministic structural awareness: call graphs, impact analysis, symbol search, and more.

## 요약

- 조사 단위: `sources/ozgurcd__gograph` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 355 files, 111 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=internal/search/mcp_parity_test.go, internal/mcp/server_capabilities_test.go, internal/mcp/server_test.go이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | ozgurcd/gograph |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 180 |
| Forks | 12 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/ozgurcd__gograph](../../../../sources/ozgurcd__gograph) |
| Existing report | [reports/global-trending/repositories/ozgurcd__gograph.md](../../../global-trending/repositories/ozgurcd__gograph.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 355 / 111 |
| Max observed depth | 8 |
| Top directories | .claude-plugin, .github, cmd, docs, docs-site, internal, llm-wiki, scripts, skills, testdata |
| Top extensions | .go: 101, .html: 74, .md: 54, .yaml: 49, .css: 20, .xml: 15, (none): 9, .yml: 8, .json: 7, .js: 3, .mod: 3, .png: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 8 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| cmd/gograph | cmd workspace | 1 |
| docs-site | documentation surface | 1 |
| internal | top-level component | 1 |
| llm-wiki | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| testdata | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| build | Makefile | release | make release |
| utility | Makefile | install | make install |
| test | Makefile | test | make test |
| test | Makefile | test-coverage | make test-coverage |
| test | Makefile | test-fuzz | make test-fuzz |
| build | Makefile | run-build | make run-build |
| utility | Makefile | clean | make clean |
| utility | Makefile | bump-patch | make bump-patch |
| utility | Makefile | bump-minor | make bump-minor |
| utility | Makefile | bump-major | make bump-major |


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
| mcp | [internal/search/mcp_parity_test.go](../../../../sources/ozgurcd__gograph/internal/search/mcp_parity_test.go) | mcp signal |
| mcp | [internal/mcp/server_capabilities_test.go](../../../../sources/ozgurcd__gograph/internal/mcp/server_capabilities_test.go) | mcp signal |
| mcp | [internal/mcp/server_test.go](../../../../sources/ozgurcd__gograph/internal/mcp/server_test.go) | mcp signal |
| mcp | [internal/mcp/server.go](../../../../sources/ozgurcd__gograph/internal/mcp/server.go) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/ozgurcd__gograph/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills/gograph/SKILL.md](../../../../sources/ozgurcd__gograph/skills/gograph/SKILL.md) | agentRuntime signal |
| agentRuntime | [llm-wiki/agent-contract.md](../../../../sources/ozgurcd__gograph/llm-wiki/agent-contract.md) | agentRuntime signal |
| agentRuntime | [llm-wiki/agent-rules.md](../../../../sources/ozgurcd__gograph/llm-wiki/agent-rules.md) | agentRuntime signal |
| entrypoints | [testdata/fixture/cmd/server/main.go](../../../../sources/ozgurcd__gograph/testdata/fixture/cmd/server/main.go) | entrypoints signal |
| entrypoints | [cmd/gograph/main.go](../../../../sources/ozgurcd__gograph/cmd/gograph/main.go) | entrypoints signal |
| config | [go.mod](../../../../sources/ozgurcd__gograph/go.mod) | config signal |
| config | [Makefile](../../../../sources/ozgurcd__gograph/Makefile) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [testdata/fixture/cmd/server/main.go](../../../../sources/ozgurcd__gograph/testdata/fixture/cmd/server/main.go)<br>[internal/mcp/server.go](../../../../sources/ozgurcd__gograph/internal/mcp/server.go)<br>[cmd/gograph/main.go](../../../../sources/ozgurcd__gograph/cmd/gograph/main.go) |
| agentRuntime | 8 | [AGENTS.md](../../../../sources/ozgurcd__gograph/AGENTS.md)<br>[skills/gograph/SKILL.md](../../../../sources/ozgurcd__gograph/skills/gograph/SKILL.md)<br>[llm-wiki/agent-contract.md](../../../../sources/ozgurcd__gograph/llm-wiki/agent-contract.md)<br>[llm-wiki/agent-rules.md](../../../../sources/ozgurcd__gograph/llm-wiki/agent-rules.md)<br>[internal/search/context.go](../../../../sources/ozgurcd__gograph/internal/search/context.go)<br>[internal/cli/hook_guard.go](../../../../sources/ozgurcd__gograph/internal/cli/hook_guard.go)<br>[docs-site/public/docs/agent-integration/index.html](../../../../sources/ozgurcd__gograph/docs-site/public/docs/agent-integration/index.html)<br>[docs-site/content/docs/agent-integration.md](../../../../sources/ozgurcd__gograph/docs-site/content/docs/agent-integration.md) |
| mcp | 7 | [internal/search/mcp_parity_test.go](../../../../sources/ozgurcd__gograph/internal/search/mcp_parity_test.go)<br>[internal/mcp/server_capabilities_test.go](../../../../sources/ozgurcd__gograph/internal/mcp/server_capabilities_test.go)<br>[internal/mcp/server_test.go](../../../../sources/ozgurcd__gograph/internal/mcp/server_test.go)<br>[internal/mcp/server.go](../../../../sources/ozgurcd__gograph/internal/mcp/server.go)<br>[docs-site/public/tags/mcp-server/index.html](../../../../sources/ozgurcd__gograph/docs-site/public/tags/mcp-server/index.html)<br>[docs-site/public/tags/mcp-server/index.xml](../../../../sources/ozgurcd__gograph/docs-site/public/tags/mcp-server/index.xml)<br>[docs-site/public/tags/mcp-server/page/1/index.html](../../../../sources/ozgurcd__gograph/docs-site/public/tags/mcp-server/page/1/index.html) |
| retrieval | 85 | [llm-wiki/agent-contract.md](../../../../sources/ozgurcd__gograph/llm-wiki/agent-contract.md)<br>[llm-wiki/agent-rules.md](../../../../sources/ozgurcd__gograph/llm-wiki/agent-rules.md)<br>[llm-wiki/contributing.md](../../../../sources/ozgurcd__gograph/llm-wiki/contributing.md)<br>[llm-wiki/index.md](../../../../sources/ozgurcd__gograph/llm-wiki/index.md)<br>[llm-wiki/log.md](../../../../sources/ozgurcd__gograph/llm-wiki/log.md)<br>[llm-wiki/project.md](../../../../sources/ozgurcd__gograph/llm-wiki/project.md)<br>[llm-wiki/prompt-templates.md](../../../../sources/ozgurcd__gograph/llm-wiki/prompt-templates.md)<br>[llm-wiki/scrinium-guide.md](../../../../sources/ozgurcd__gograph/llm-wiki/scrinium-guide.md) |
| spec | 3 | [llm-wiki/sources/SRC-20260614-gograph-legacy-architecture.md](../../../../sources/ozgurcd__gograph/llm-wiki/sources/SRC-20260614-gograph-legacy-architecture.md)<br>[internal/wiki/architecture.go](../../../../sources/ozgurcd__gograph/internal/wiki/architecture.go)<br>[docs/architecture-boundaries.md](../../../../sources/ozgurcd__gograph/docs/architecture-boundaries.md) |
| eval | 36 | [scripts/benchmark.go](../../../../sources/ozgurcd__gograph/scripts/benchmark.go)<br>[internal/session/session_test.go](../../../../sources/ozgurcd__gograph/internal/session/session_test.go)<br>[internal/search/advanced_features_test.go](../../../../sources/ozgurcd__gograph/internal/search/advanced_features_test.go)<br>[internal/search/analytics_test.go](../../../../sources/ozgurcd__gograph/internal/search/analytics_test.go)<br>[internal/search/api_test.go](../../../../sources/ozgurcd__gograph/internal/search/api_test.go)<br>[internal/search/check_test.go](../../../../sources/ozgurcd__gograph/internal/search/check_test.go)<br>[internal/search/fuzz_test.go](../../../../sources/ozgurcd__gograph/internal/search/fuzz_test.go)<br>[internal/search/mcp_parity_test.go](../../../../sources/ozgurcd__gograph/internal/search/mcp_parity_test.go) |
| security | 5 | [SECURITY.md](../../../../sources/ozgurcd__gograph/SECURITY.md)<br>[testdata/fixture/internal/auth/auth.go](../../../../sources/ozgurcd__gograph/testdata/fixture/internal/auth/auth.go)<br>[llm-wiki/security/path-traversal-prevention.md](../../../../sources/ozgurcd__gograph/llm-wiki/security/path-traversal-prevention.md)<br>[llm-wiki/security/untrusted-sources.md](../../../../sources/ozgurcd__gograph/llm-wiki/security/untrusted-sources.md)<br>[internal/cli/hook_guard.go](../../../../sources/ozgurcd__gograph/internal/cli/hook_guard.go) |
| ci | 5 | [docs-site/themes/PaperMod/.github/workflows/build-check.yml](../../../../sources/ozgurcd__gograph/docs-site/themes/PaperMod/.github/workflows/build-check.yml)<br>[docs-site/themes/PaperMod/.github/workflows/gh-pages.yml](../../../../sources/ozgurcd__gograph/docs-site/themes/PaperMod/.github/workflows/gh-pages.yml)<br>[.github/workflows/ci.yml](../../../../sources/ozgurcd__gograph/.github/workflows/ci.yml)<br>[.github/workflows/hugo.yml](../../../../sources/ozgurcd__gograph/.github/workflows/hugo.yml)<br>[.github/workflows/release.yml](../../../../sources/ozgurcd__gograph/.github/workflows/release.yml) |
| container | 1 | [Dockerfile](../../../../sources/ozgurcd__gograph/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/ozgurcd__gograph/AGENTS.md) |
| docs | 22 | [README.md](../../../../sources/ozgurcd__gograph/README.md)<br>[llm-wiki/sources/README.md](../../../../sources/ozgurcd__gograph/llm-wiki/sources/README.md)<br>[llm-wiki/packages/README.md](../../../../sources/ozgurcd__gograph/llm-wiki/packages/README.md)<br>[docs-site/themes/PaperMod/README.md](../../../../sources/ozgurcd__gograph/docs-site/themes/PaperMod/README.md)<br>[docs-site/public/docs/index.html](../../../../sources/ozgurcd__gograph/docs-site/public/docs/index.html)<br>[docs-site/public/docs/index.xml](../../../../sources/ozgurcd__gograph/docs-site/public/docs/index.xml)<br>[docs-site/public/docs/workflows/index.html](../../../../sources/ozgurcd__gograph/docs-site/public/docs/workflows/index.html)<br>[docs-site/public/docs/page/1/index.html](../../../../sources/ozgurcd__gograph/docs-site/public/docs/page/1/index.html) |
| config | 4 | [go.mod](../../../../sources/ozgurcd__gograph/go.mod)<br>[Makefile](../../../../sources/ozgurcd__gograph/Makefile)<br>[testdata/fixture/go.mod](../../../../sources/ozgurcd__gograph/testdata/fixture/go.mod)<br>[docs-site/themes/PaperMod/go.mod](../../../../sources/ozgurcd__gograph/docs-site/themes/PaperMod/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 36 | [scripts/benchmark.go](../../../../sources/ozgurcd__gograph/scripts/benchmark.go)<br>[internal/session/session_test.go](../../../../sources/ozgurcd__gograph/internal/session/session_test.go)<br>[internal/search/advanced_features_test.go](../../../../sources/ozgurcd__gograph/internal/search/advanced_features_test.go)<br>[internal/search/analytics_test.go](../../../../sources/ozgurcd__gograph/internal/search/analytics_test.go)<br>[internal/search/api_test.go](../../../../sources/ozgurcd__gograph/internal/search/api_test.go)<br>[internal/search/check_test.go](../../../../sources/ozgurcd__gograph/internal/search/check_test.go) |
| CI workflows | 5 | [docs-site/themes/PaperMod/.github/workflows/build-check.yml](../../../../sources/ozgurcd__gograph/docs-site/themes/PaperMod/.github/workflows/build-check.yml)<br>[docs-site/themes/PaperMod/.github/workflows/gh-pages.yml](../../../../sources/ozgurcd__gograph/docs-site/themes/PaperMod/.github/workflows/gh-pages.yml)<br>[.github/workflows/ci.yml](../../../../sources/ozgurcd__gograph/.github/workflows/ci.yml)<br>[.github/workflows/hugo.yml](../../../../sources/ozgurcd__gograph/.github/workflows/hugo.yml)<br>[.github/workflows/release.yml](../../../../sources/ozgurcd__gograph/.github/workflows/release.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/ozgurcd__gograph/Dockerfile) |
| Security / policy | 5 | [SECURITY.md](../../../../sources/ozgurcd__gograph/SECURITY.md)<br>[testdata/fixture/internal/auth/auth.go](../../../../sources/ozgurcd__gograph/testdata/fixture/internal/auth/auth.go)<br>[llm-wiki/security/path-traversal-prevention.md](../../../../sources/ozgurcd__gograph/llm-wiki/security/path-traversal-prevention.md)<br>[llm-wiki/security/untrusted-sources.md](../../../../sources/ozgurcd__gograph/llm-wiki/security/untrusted-sources.md)<br>[internal/cli/hook_guard.go](../../../../sources/ozgurcd__gograph/internal/cli/hook_guard.go) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/ozgurcd__gograph/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `internal/search/mcp_parity_test.go`, `internal/mcp/server_capabilities_test.go`, `internal/mcp/server_test.go`.
2. Trace execution through entrypoints: `testdata/fixture/cmd/server/main.go`, `internal/mcp/server.go`, `cmd/gograph/main.go`.
3. Map agent/tool runtime through: `AGENTS.md`, `skills/gograph/SKILL.md`, `llm-wiki/agent-contract.md`.
4. Inspect retrieval/memory/indexing through: `llm-wiki/agent-contract.md`, `llm-wiki/agent-rules.md`, `llm-wiki/contributing.md`.
5. Verify behavior through test/eval files: `scripts/benchmark.go`, `internal/session/session_test.go`, `internal/search/advanced_features_test.go`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local only Go static analysis engine with a built in MCP server. Gives AI coding agents deterministic structural awarene. 핵심 구조 신호는 Go, go.mod, Dockerfile, Makefile, README.md, AGENTS.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
