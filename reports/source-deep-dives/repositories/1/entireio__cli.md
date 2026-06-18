# entireio/cli Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

📜 Entire CLI hooks into your Git workflow to capture AI agent sessions as you work. Sessions are indexed alongside commits, creating a searchable record of how code was written in your repo.

## 요약

- 조사 단위: `sources/entireio__cli` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,076 files, 153 directories, depth score 125, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=perf/context.go, internal/remotehelper/gitproto/agent.go, internal/remotehelper/githelper/agent.go이고, 의존성 단서는 cobra, chroma, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | entireio/cli |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 4515 |
| Forks | 345 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/entireio__cli](../../../../sources/entireio__cli) |
| Existing report | [reports/global-trending/repositories/entireio__cli.md](../../../global-trending/repositories/entireio__cli.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1076 / 153 |
| Max observed depth | 7 |
| Top directories | .claude, .codex, .devcontainer, .entire, .ferrata, .gemini, .github, .opencode, .pi, cmd, docs, e2e, internal, mise-tasks, perf, redact, scripts |
| Top extensions | .go: 892, .md: 70, (none): 34, .json: 18, .jsonl: 16, .yml: 16, .sh: 15, .ts: 4, .txt: 4, .toml: 3, .yaml: 2, .mod: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| cmd/entire | cmd workspace | 41 |
| docs | documentation surface | 37 |
| .codex | top-level component | 1 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| cmd/git-remote-entire | cmd workspace | 1 |
| e2e | validation surface | 1 |
| internal | top-level component | 1 |
| mise-tasks | top-level component | 1 |
| perf | top-level component | 1 |
| redact | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | chroma |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | cobra |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [perf/context.go](../../../../sources/entireio__cli/perf/context.go) | agentRuntime signal |
| agentRuntime | [internal/remotehelper/gitproto/agent.go](../../../../sources/entireio__cli/internal/remotehelper/gitproto/agent.go) | agentRuntime signal |
| agentRuntime | [internal/remotehelper/githelper/agent.go](../../../../sources/entireio__cli/internal/remotehelper/githelper/agent.go) | agentRuntime signal |
| agentRuntime | [e2e/agents/agent.go](../../../../sources/entireio__cli/e2e/agents/agent.go) | agentRuntime signal |
| entrypoints | [e2e/vogon/main.go](../../../../sources/entireio__cli/e2e/vogon/main.go) | entrypoints signal |
| entrypoints | [e2e/cmd/testreport/main.go](../../../../sources/entireio__cli/e2e/cmd/testreport/main.go) | entrypoints signal |
| entrypoints | [e2e/bootstrap/main.go](../../../../sources/entireio__cli/e2e/bootstrap/main.go) | entrypoints signal |
| entrypoints | [cmd/git-remote-entire/main.go](../../../../sources/entireio__cli/cmd/git-remote-entire/main.go) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/entireio__cli/CLAUDE.md) | instruction signal |
| instruction | [.github/copilot-instructions.md](../../../../sources/entireio__cli/.github/copilot-instructions.md) | instruction signal |
| instruction | [.codex/config.toml](../../../../sources/entireio__cli/.codex/config.toml) | instruction signal |
| instruction | [.codex/hooks.json](../../../../sources/entireio__cli/.codex/hooks.json) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [e2e/vogon/main.go](../../../../sources/entireio__cli/e2e/vogon/main.go)<br>[e2e/cmd/testreport/main.go](../../../../sources/entireio__cli/e2e/cmd/testreport/main.go)<br>[e2e/bootstrap/main.go](../../../../sources/entireio__cli/e2e/bootstrap/main.go)<br>[cmd/git-remote-entire/main.go](../../../../sources/entireio__cli/cmd/git-remote-entire/main.go)<br>[cmd/entire/main.go](../../../../sources/entireio__cli/cmd/entire/main.go) |
| agentRuntime | 237 | [perf/context.go](../../../../sources/entireio__cli/perf/context.go)<br>[internal/remotehelper/gitproto/agent.go](../../../../sources/entireio__cli/internal/remotehelper/gitproto/agent.go)<br>[internal/remotehelper/githelper/agent.go](../../../../sources/entireio__cli/internal/remotehelper/githelper/agent.go)<br>[e2e/agents/agent.go](../../../../sources/entireio__cli/e2e/agents/agent.go)<br>[e2e/agents/claude.go](../../../../sources/entireio__cli/e2e/agents/claude.go)<br>[e2e/agents/codex_test.go](../../../../sources/entireio__cli/e2e/agents/codex_test.go)<br>[e2e/agents/codex_trust_test.go](../../../../sources/entireio__cli/e2e/agents/codex_trust_test.go)<br>[e2e/agents/codex_trust.go](../../../../sources/entireio__cli/e2e/agents/codex_trust.go) |
| mcp | 0 | not obvious |
| retrieval | 1 | [.pi/extensions/entire/index.ts](../../../../sources/entireio__cli/.pi/extensions/entire/index.ts) |
| spec | 18 | [internal/coreapi/spec/core.gen.json](../../../../sources/entireio__cli/internal/coreapi/spec/core.gen.json)<br>[internal/coreapi/spec/core.openapi.json](../../../../sources/entireio__cli/internal/coreapi/spec/core.openapi.json)<br>[internal/coreapi/spec/normalize.go](../../../../sources/entireio__cli/internal/coreapi/spec/normalize.go)<br>[docs/architecture/agent-guide.md](../../../../sources/entireio__cli/docs/architecture/agent-guide.md)<br>[docs/architecture/agent-integration-checklist.md](../../../../sources/entireio__cli/docs/architecture/agent-integration-checklist.md)<br>[docs/architecture/attribution.md](../../../../sources/entireio__cli/docs/architecture/attribution.md)<br>[docs/architecture/checkpoint-scenarios.md](../../../../sources/entireio__cli/docs/architecture/checkpoint-scenarios.md)<br>[docs/architecture/checkpoint-signing.md](../../../../sources/entireio__cli/docs/architecture/checkpoint-signing.md) |
| eval | 471 | [scripts/test-attribution-e2e.sh](../../../../sources/entireio__cli/scripts/test-attribution-e2e.sh)<br>[scripts/test-codex-agent-integration.sh](../../../../sources/entireio__cli/scripts/test-codex-agent-integration.sh)<br>[scripts/test-copilot-cli-agent-integration.sh](../../../../sources/entireio__cli/scripts/test-copilot-cli-agent-integration.sh)<br>[scripts/test-copilot-token-metadata.sh](../../../../sources/entireio__cli/scripts/test-copilot-token-metadata.sh)<br>[redact/betterleaks_env_test.go](../../../../sources/entireio__cli/redact/betterleaks_env_test.go)<br>[redact/custom_test.go](../../../../sources/entireio__cli/redact/custom_test.go)<br>[redact/packs_test.go](../../../../sources/entireio__cli/redact/packs_test.go)<br>[redact/pii_test.go](../../../../sources/entireio__cli/redact/pii_test.go) |
| security | 33 | [SECURITY.md](../../../../sources/entireio__cli/SECURITY.md)<br>[scripts/local-device-auth-smoke.sh](../../../../sources/entireio__cli/scripts/local-device-auth-smoke.sh)<br>[internal/entireclient/httputil/oauth_test.go](../../../../sources/entireio__cli/internal/entireclient/httputil/oauth_test.go)<br>[internal/entireclient/httputil/oauth.go](../../../../sources/entireio__cli/internal/entireclient/httputil/oauth.go)<br>[internal/coreapi/oas_security_gen.go](../../../../sources/entireio__cli/internal/coreapi/oas_security_gen.go)<br>[docs/security-and-privacy.md](../../../../sources/entireio__cli/docs/security-and-privacy.md)<br>[cmd/entire/cli/auth_context_test.go](../../../../sources/entireio__cli/cmd/entire/cli/auth_context_test.go)<br>[cmd/entire/cli/auth_context.go](../../../../sources/entireio__cli/cmd/entire/cli/auth_context.go) |
| ci | 13 | [mise-tasks/test/ci/core](../../../../sources/entireio__cli/mise-tasks/test/ci/core)<br>[mise-tasks/test/ci/integration/shard](../../../../sources/entireio__cli/mise-tasks/test/ci/integration/shard)<br>[.github/workflows/ci.yml](../../../../sources/entireio__cli/.github/workflows/ci.yml)<br>[.github/workflows/codeql-actions.yml](../../../../sources/entireio__cli/.github/workflows/codeql-actions.yml)<br>[.github/workflows/e2e-checkpoints-v2.yml](../../../../sources/entireio__cli/.github/workflows/e2e-checkpoints-v2.yml)<br>[.github/workflows/e2e-isolated.yml](../../../../sources/entireio__cli/.github/workflows/e2e-isolated.yml)<br>[.github/workflows/e2e-windows.yml](../../../../sources/entireio__cli/.github/workflows/e2e-windows.yml)<br>[.github/workflows/e2e.yml](../../../../sources/entireio__cli/.github/workflows/e2e.yml) |
| container | 1 | [.devcontainer/Dockerfile](../../../../sources/entireio__cli/.devcontainer/Dockerfile) |
| instruction | 5 | [CLAUDE.md](../../../../sources/entireio__cli/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/entireio__cli/.github/copilot-instructions.md)<br>[.codex/config.toml](../../../../sources/entireio__cli/.codex/config.toml)<br>[.codex/hooks.json](../../../../sources/entireio__cli/.codex/hooks.json)<br>[.codex/agents/entire-search.toml](../../../../sources/entireio__cli/.codex/agents/entire-search.toml) |
| docs | 26 | [README.md](../../../../sources/entireio__cli/README.md)<br>[e2e/README.md](../../../../sources/entireio__cli/e2e/README.md)<br>[e2e/exploratory/README.md](../../../../sources/entireio__cli/e2e/exploratory/README.md)<br>[docs/first-time-contributors.md](../../../../sources/entireio__cli/docs/first-time-contributors.md)<br>[docs/install-provenance-plan.md](../../../../sources/entireio__cli/docs/install-provenance-plan.md)<br>[docs/KNOWN_LIMITATIONS.md](../../../../sources/entireio__cli/docs/KNOWN_LIMITATIONS.md)<br>[docs/security-and-privacy.md](../../../../sources/entireio__cli/docs/security-and-privacy.md)<br>[docs/generated/.gitignore](../../../../sources/entireio__cli/docs/generated/.gitignore) |
| config | 1 | [go.mod](../../../../sources/entireio__cli/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 471 | [scripts/test-attribution-e2e.sh](../../../../sources/entireio__cli/scripts/test-attribution-e2e.sh)<br>[scripts/test-codex-agent-integration.sh](../../../../sources/entireio__cli/scripts/test-codex-agent-integration.sh)<br>[scripts/test-copilot-cli-agent-integration.sh](../../../../sources/entireio__cli/scripts/test-copilot-cli-agent-integration.sh)<br>[scripts/test-copilot-token-metadata.sh](../../../../sources/entireio__cli/scripts/test-copilot-token-metadata.sh)<br>[redact/betterleaks_env_test.go](../../../../sources/entireio__cli/redact/betterleaks_env_test.go)<br>[redact/custom_test.go](../../../../sources/entireio__cli/redact/custom_test.go) |
| CI workflows | 13 | [mise-tasks/test/ci/core](../../../../sources/entireio__cli/mise-tasks/test/ci/core)<br>[mise-tasks/test/ci/integration/shard](../../../../sources/entireio__cli/mise-tasks/test/ci/integration/shard)<br>[.github/workflows/ci.yml](../../../../sources/entireio__cli/.github/workflows/ci.yml)<br>[.github/workflows/codeql-actions.yml](../../../../sources/entireio__cli/.github/workflows/codeql-actions.yml)<br>[.github/workflows/e2e-checkpoints-v2.yml](../../../../sources/entireio__cli/.github/workflows/e2e-checkpoints-v2.yml)<br>[.github/workflows/e2e-isolated.yml](../../../../sources/entireio__cli/.github/workflows/e2e-isolated.yml) |
| Containers / deploy | 1 | [.devcontainer/Dockerfile](../../../../sources/entireio__cli/.devcontainer/Dockerfile) |
| Security / policy | 33 | [SECURITY.md](../../../../sources/entireio__cli/SECURITY.md)<br>[scripts/local-device-auth-smoke.sh](../../../../sources/entireio__cli/scripts/local-device-auth-smoke.sh)<br>[internal/entireclient/httputil/oauth_test.go](../../../../sources/entireio__cli/internal/entireclient/httputil/oauth_test.go)<br>[internal/entireclient/httputil/oauth.go](../../../../sources/entireio__cli/internal/entireclient/httputil/oauth.go)<br>[internal/coreapi/oas_security_gen.go](../../../../sources/entireio__cli/internal/coreapi/oas_security_gen.go)<br>[docs/security-and-privacy.md](../../../../sources/entireio__cli/docs/security-and-privacy.md) |
| Agent instructions | 5 | [CLAUDE.md](../../../../sources/entireio__cli/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/entireio__cli/.github/copilot-instructions.md)<br>[.codex/config.toml](../../../../sources/entireio__cli/.codex/config.toml)<br>[.codex/hooks.json](../../../../sources/entireio__cli/.codex/hooks.json)<br>[.codex/agents/entire-search.toml](../../../../sources/entireio__cli/.codex/agents/entire-search.toml) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `perf/context.go`, `internal/remotehelper/gitproto/agent.go`, `internal/remotehelper/githelper/agent.go`.
2. Trace execution through entrypoints: `e2e/vogon/main.go`, `e2e/cmd/testreport/main.go`, `e2e/bootstrap/main.go`.
3. Map agent/tool runtime through: `perf/context.go`, `internal/remotehelper/gitproto/agent.go`, `internal/remotehelper/githelper/agent.go`.
4. Inspect retrieval/memory/indexing through: `.pi/extensions/entire/index.ts`.
5. Verify behavior through test/eval files: `scripts/test-attribution-e2e.sh`, `scripts/test-codex-agent-integration.sh`, `scripts/test-copilot-cli-agent-integration.sh`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 📜 Entire CLI hooks into your Git workflow to capture AI agent sessions as you work. Sessions are indexed alongside comm. 핵심 구조 신호는 Go, go.mod, README.md, CLAUDE.md, LICENSE, chroma이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
