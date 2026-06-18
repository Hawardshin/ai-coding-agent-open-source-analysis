# github/github-mcp-server Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

GitHub's official MCP Server

## 요약

- 조사 단위: `sources/github__github-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 490 files, 131 directories, depth score 122, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=third-party/github.com/modelcontextprotocol/go-sdk/LICENSE, third-party/github.com/github/github-mcp-server/LICENSE, script/print-mcp-diff-configs/main.go이고, 의존성 단서는 mcp, modelcontextprotocol, cobra, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | github/github-mcp-server |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 30770 |
| Forks | 4406 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/github__github-mcp-server](../../../../sources/github__github-mcp-server) |
| Existing report | [reports/global-trending/repositories/github__github-mcp-server.md](../../../global-trending/repositories/github__github-mcp-server.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 490 / 131 |
| Max observed depth | 7 |
| Top directories | .github, cmd, docs, e2e, internal, pkg, script, third-party, ui |
| Top extensions | .go: 176, .snap: 111, .png: 62, (none): 50, .md: 44, .yml: 18, .tsx: 7, .html: 5, .json: 5, .txt: 4, .ts: 3, .mjs: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 29 |
| cmd/github-mcp-server | cmd workspace | 6 |
| cmd/mcpcurl | cmd workspace | 2 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| e2e | validation surface | 1 |
| internal | top-level component | 1 |
| pkg | top-level component | 1 |
| script | top-level component | 1 |
| third-party | top-level component | 1 |
| ui | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp, modelcontextprotocol |
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
| mcp | [third-party/github.com/modelcontextprotocol/go-sdk/LICENSE](../../../../sources/github__github-mcp-server/third-party/github.com/modelcontextprotocol/go-sdk/LICENSE) | mcp signal |
| mcp | [third-party/github.com/github/github-mcp-server/LICENSE](../../../../sources/github__github-mcp-server/third-party/github.com/github/github-mcp-server/LICENSE) | mcp signal |
| mcp | [script/print-mcp-diff-configs/main.go](../../../../sources/github__github-mcp-server/script/print-mcp-diff-configs/main.go) | mcp signal |
| mcp | [pkg/http/middleware/mcp_parse_test.go](../../../../sources/github__github-mcp-server/pkg/http/middleware/mcp_parse_test.go) | mcp signal |
| agentRuntime | [ui/src/hooks/useMcpApp.ts](../../../../sources/github__github-mcp-server/ui/src/hooks/useMcpApp.ts) | agentRuntime signal |
| agentRuntime | [pkg/octicons/icons/tools-dark.png](../../../../sources/github__github-mcp-server/pkg/octicons/icons/tools-dark.png) | agentRuntime signal |
| agentRuntime | [pkg/octicons/icons/tools-light.png](../../../../sources/github__github-mcp-server/pkg/octicons/icons/tools-light.png) | agentRuntime signal |
| agentRuntime | [pkg/octicons/icons/workflow-dark.png](../../../../sources/github__github-mcp-server/pkg/octicons/icons/workflow-dark.png) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/github__github-mcp-server/server.json) | entrypoints signal |
| entrypoints | [pkg/http/server.go](../../../../sources/github__github-mcp-server/pkg/http/server.go) | entrypoints signal |
| entrypoints | [pkg/github/server.go](../../../../sources/github__github-mcp-server/pkg/github/server.go) | entrypoints signal |
| instruction | [.github/copilot-instructions.md](../../../../sources/github__github-mcp-server/.github/copilot-instructions.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [server.json](../../../../sources/github__github-mcp-server/server.json)<br>[script/print-mcp-diff-configs/main.go](../../../../sources/github__github-mcp-server/script/print-mcp-diff-configs/main.go)<br>[pkg/http/server.go](../../../../sources/github__github-mcp-server/pkg/http/server.go)<br>[pkg/github/server.go](../../../../sources/github__github-mcp-server/pkg/github/server.go)<br>[internal/ghmcp/server.go](../../../../sources/github__github-mcp-server/internal/ghmcp/server.go)<br>[cmd/mcpcurl/main.go](../../../../sources/github__github-mcp-server/cmd/mcpcurl/main.go)<br>[cmd/github-mcp-server/main.go](../../../../sources/github__github-mcp-server/cmd/github-mcp-server/main.go) |
| agentRuntime | 18 | [ui/src/hooks/useMcpApp.ts](../../../../sources/github__github-mcp-server/ui/src/hooks/useMcpApp.ts)<br>[pkg/octicons/icons/tools-dark.png](../../../../sources/github__github-mcp-server/pkg/octicons/icons/tools-dark.png)<br>[pkg/octicons/icons/tools-light.png](../../../../sources/github__github-mcp-server/pkg/octicons/icons/tools-light.png)<br>[pkg/octicons/icons/workflow-dark.png](../../../../sources/github__github-mcp-server/pkg/octicons/icons/workflow-dark.png)<br>[pkg/octicons/icons/workflow-light.png](../../../../sources/github__github-mcp-server/pkg/octicons/icons/workflow-light.png)<br>[pkg/github/context_tools_test.go](../../../../sources/github__github-mcp-server/pkg/github/context_tools_test.go)<br>[pkg/github/context_tools.go](../../../../sources/github__github-mcp-server/pkg/github/context_tools.go)<br>[pkg/github/tools_static_validation_test.go](../../../../sources/github__github-mcp-server/pkg/github/tools_static_validation_test.go) |
| mcp | 14 | [third-party/github.com/modelcontextprotocol/go-sdk/LICENSE](../../../../sources/github__github-mcp-server/third-party/github.com/modelcontextprotocol/go-sdk/LICENSE)<br>[third-party/github.com/github/github-mcp-server/LICENSE](../../../../sources/github__github-mcp-server/third-party/github.com/github/github-mcp-server/LICENSE)<br>[script/print-mcp-diff-configs/main.go](../../../../sources/github__github-mcp-server/script/print-mcp-diff-configs/main.go)<br>[pkg/http/middleware/mcp_parse_test.go](../../../../sources/github__github-mcp-server/pkg/http/middleware/mcp_parse_test.go)<br>[pkg/http/middleware/mcp_parse.go](../../../../sources/github__github-mcp-server/pkg/http/middleware/mcp_parse.go)<br>[pkg/github/__toolsnaps__/issue_write_ff_remote_mcp_issue_fields.snap](../../../../sources/github__github-mcp-server/pkg/github/__toolsnaps__/issue_write_ff_remote_mcp_issue_fields.snap)<br>[pkg/github/__toolsnaps__/list_issues_ff_remote_mcp_issue_fields.snap](../../../../sources/github__github-mcp-server/pkg/github/__toolsnaps__/list_issues_ff_remote_mcp_issue_fields.snap)<br>[pkg/context/mcp_info.go](../../../../sources/github__github-mcp-server/pkg/context/mcp_info.go) |
| retrieval | 5 | [ui/src/apps/pr-write/index.html](../../../../sources/github__github-mcp-server/ui/src/apps/pr-write/index.html)<br>[ui/src/apps/pr-edit/index.html](../../../../sources/github__github-mcp-server/ui/src/apps/pr-edit/index.html)<br>[ui/src/apps/issue-write/index.html](../../../../sources/github__github-mcp-server/ui/src/apps/issue-write/index.html)<br>[ui/src/apps/get-me/index.html](../../../../sources/github__github-mcp-server/ui/src/apps/get-me/index.html)<br>[pkg/github/ui_embed.go](../../../../sources/github__github-mcp-server/pkg/github/ui_embed.go) |
| spec | 0 | not obvious |
| eval | 76 | [pkg/utils/api_test.go](../../../../sources/github__github-mcp-server/pkg/utils/api_test.go)<br>[pkg/toolvalidation/readonlyhint_test.go](../../../../sources/github__github-mcp-server/pkg/toolvalidation/readonlyhint_test.go)<br>[pkg/tooldiscovery/search_test.go](../../../../sources/github__github-mcp-server/pkg/tooldiscovery/search_test.go)<br>[pkg/scopes/fetcher_test.go](../../../../sources/github__github-mcp-server/pkg/scopes/fetcher_test.go)<br>[pkg/scopes/map_test.go](../../../../sources/github__github-mcp-server/pkg/scopes/map_test.go)<br>[pkg/scopes/scopes_test.go](../../../../sources/github__github-mcp-server/pkg/scopes/scopes_test.go)<br>[pkg/sanitize/sanitize_test.go](../../../../sources/github__github-mcp-server/pkg/sanitize/sanitize_test.go)<br>[pkg/raw/raw_test.go](../../../../sources/github__github-mcp-server/pkg/raw/raw_test.go) |
| security | 13 | [SECURITY.md](../../../../sources/github__github-mcp-server/SECURITY.md)<br>[pkg/http/oauth/oauth_test.go](../../../../sources/github__github-mcp-server/pkg/http/oauth/oauth_test.go)<br>[pkg/http/oauth/oauth.go](../../../../sources/github__github-mcp-server/pkg/http/oauth/oauth.go)<br>[pkg/github/secret_scanning_test.go](../../../../sources/github__github-mcp-server/pkg/github/secret_scanning_test.go)<br>[pkg/github/secret_scanning.go](../../../../sources/github__github-mcp-server/pkg/github/secret_scanning.go)<br>[pkg/github/security_advisories_test.go](../../../../sources/github__github-mcp-server/pkg/github/security_advisories_test.go)<br>[pkg/github/security_advisories.go](../../../../sources/github__github-mcp-server/pkg/github/security_advisories.go)<br>[pkg/github/__toolsnaps__/get_global_security_advisory.snap](../../../../sources/github__github-mcp-server/pkg/github/__toolsnaps__/get_global_security_advisory.snap) |
| ci | 13 | [.github/workflows/ai-issue-assessment.yml](../../../../sources/github__github-mcp-server/.github/workflows/ai-issue-assessment.yml)<br>[.github/workflows/close-inactive-issues.yml](../../../../sources/github__github-mcp-server/.github/workflows/close-inactive-issues.yml)<br>[.github/workflows/code-scanning.yml](../../../../sources/github__github-mcp-server/.github/workflows/code-scanning.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/github__github-mcp-server/.github/workflows/docker-publish.yml)<br>[.github/workflows/docs-check.yml](../../../../sources/github__github-mcp-server/.github/workflows/docs-check.yml)<br>[.github/workflows/go.yml](../../../../sources/github__github-mcp-server/.github/workflows/go.yml)<br>[.github/workflows/goreleaser.yml](../../../../sources/github__github-mcp-server/.github/workflows/goreleaser.yml)<br>[.github/workflows/issue-labeler.yml](../../../../sources/github__github-mcp-server/.github/workflows/issue-labeler.yml) |
| container | 1 | [Dockerfile](../../../../sources/github__github-mcp-server/Dockerfile) |
| instruction | 1 | [.github/copilot-instructions.md](../../../../sources/github__github-mcp-server/.github/copilot-instructions.md) |
| docs | 30 | [README.md](../../../../sources/github__github-mcp-server/README.md)<br>[e2e/README.md](../../../../sources/github__github-mcp-server/e2e/README.md)<br>[docs/error-handling.md](../../../../sources/github__github-mcp-server/docs/error-handling.md)<br>[docs/feature-flags.md](../../../../sources/github__github-mcp-server/docs/feature-flags.md)<br>[docs/host-integration.md](../../../../sources/github__github-mcp-server/docs/host-integration.md)<br>[docs/insiders-features.md](../../../../sources/github__github-mcp-server/docs/insiders-features.md)<br>[docs/policies-and-governance.md](../../../../sources/github__github-mcp-server/docs/policies-and-governance.md)<br>[docs/remote-server.md](../../../../sources/github__github-mcp-server/docs/remote-server.md) |
| config | 3 | [go.mod](../../../../sources/github__github-mcp-server/go.mod)<br>[ui/package.json](../../../../sources/github__github-mcp-server/ui/package.json)<br>[ui/tsconfig.json](../../../../sources/github__github-mcp-server/ui/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 76 | [pkg/utils/api_test.go](../../../../sources/github__github-mcp-server/pkg/utils/api_test.go)<br>[pkg/toolvalidation/readonlyhint_test.go](../../../../sources/github__github-mcp-server/pkg/toolvalidation/readonlyhint_test.go)<br>[pkg/tooldiscovery/search_test.go](../../../../sources/github__github-mcp-server/pkg/tooldiscovery/search_test.go)<br>[pkg/scopes/fetcher_test.go](../../../../sources/github__github-mcp-server/pkg/scopes/fetcher_test.go)<br>[pkg/scopes/map_test.go](../../../../sources/github__github-mcp-server/pkg/scopes/map_test.go)<br>[pkg/scopes/scopes_test.go](../../../../sources/github__github-mcp-server/pkg/scopes/scopes_test.go) |
| CI workflows | 13 | [.github/workflows/ai-issue-assessment.yml](../../../../sources/github__github-mcp-server/.github/workflows/ai-issue-assessment.yml)<br>[.github/workflows/close-inactive-issues.yml](../../../../sources/github__github-mcp-server/.github/workflows/close-inactive-issues.yml)<br>[.github/workflows/code-scanning.yml](../../../../sources/github__github-mcp-server/.github/workflows/code-scanning.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/github__github-mcp-server/.github/workflows/docker-publish.yml)<br>[.github/workflows/docs-check.yml](../../../../sources/github__github-mcp-server/.github/workflows/docs-check.yml)<br>[.github/workflows/go.yml](../../../../sources/github__github-mcp-server/.github/workflows/go.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/github__github-mcp-server/Dockerfile) |
| Security / policy | 13 | [SECURITY.md](../../../../sources/github__github-mcp-server/SECURITY.md)<br>[pkg/http/oauth/oauth_test.go](../../../../sources/github__github-mcp-server/pkg/http/oauth/oauth_test.go)<br>[pkg/http/oauth/oauth.go](../../../../sources/github__github-mcp-server/pkg/http/oauth/oauth.go)<br>[pkg/github/secret_scanning_test.go](../../../../sources/github__github-mcp-server/pkg/github/secret_scanning_test.go)<br>[pkg/github/secret_scanning.go](../../../../sources/github__github-mcp-server/pkg/github/secret_scanning.go)<br>[pkg/github/security_advisories_test.go](../../../../sources/github__github-mcp-server/pkg/github/security_advisories_test.go) |
| Agent instructions | 1 | [.github/copilot-instructions.md](../../../../sources/github__github-mcp-server/.github/copilot-instructions.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `third-party/github.com/modelcontextprotocol/go-sdk/LICENSE`, `third-party/github.com/github/github-mcp-server/LICENSE`, `script/print-mcp-diff-configs/main.go`.
2. Trace execution through entrypoints: `server.json`, `script/print-mcp-diff-configs/main.go`, `pkg/http/server.go`.
3. Map agent/tool runtime through: `ui/src/hooks/useMcpApp.ts`, `pkg/octicons/icons/tools-dark.png`, `pkg/octicons/icons/tools-light.png`.
4. Inspect retrieval/memory/indexing through: `ui/src/apps/pr-write/index.html`, `ui/src/apps/pr-edit/index.html`, `ui/src/apps/issue-write/index.html`.
5. Verify behavior through test/eval files: `pkg/utils/api_test.go`, `pkg/toolvalidation/readonlyhint_test.go`, `pkg/tooldiscovery/search_test.go`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 GitHub's official MCP Server. 핵심 구조 신호는 Go, go.mod, Dockerfile, README.md, LICENSE, modelcontextprotocol이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
