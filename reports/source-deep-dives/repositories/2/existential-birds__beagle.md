# existential-birds/beagle Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Claude Code plugin marketplace: 145 framework-aware code-review skills plus AI-writing detection, doc and test-plan generation, architectural analysis, and git workflows — for Python, Go, Rust, Elixir, React, Remix, iOS/Swift, and AI frameworks. Installable for Codex and other agents too.

## 요약

- 조사 단위: `sources/existential-birds__beagle` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 541 files, 281 directories, depth score 105, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, plugins/beagle-testing/skills/run-test-plan/SKILL.md, plugins/beagle-testing/skills/gen-test-plan/SKILL.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | existential-birds/beagle |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Shell |
| Stars | 64 |
| Forks | 8 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/existential-birds__beagle](../../../../sources/existential-birds__beagle) |
| Existing report | [reports/global-trending/repositories/existential-birds__beagle.md](../../../global-trending/repositories/existential-birds__beagle.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 541 / 281 |
| Max observed depth | 6 |
| Top directories | .claude, .claude-plugin, .codex, .github, assets, docs, plugins, scripts |
| Top extensions | .md: 518, .json: 13, .yml: 4, (none): 2, .csv: 1, .jpg: 1, .py: 1, .sh: 1 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 2 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


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
| agentRuntime | [AGENTS.md](../../../../sources/existential-birds__beagle/AGENTS.md) | agentRuntime signal |
| agentRuntime | [plugins/beagle-testing/skills/run-test-plan/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/run-test-plan/SKILL.md) | agentRuntime signal |
| agentRuntime | [plugins/beagle-testing/skills/gen-test-plan/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/gen-test-plan/SKILL.md) | agentRuntime signal |
| agentRuntime | [plugins/beagle-testing/skills/gen-test-plan/references/stack-discovery.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/gen-test-plan/references/stack-discovery.md) | agentRuntime signal |
| entrypoints | [plugins/beagle-go/skills/wish-ssh-code-review/references/server.md](../../../../sources/existential-birds__beagle/plugins/beagle-go/skills/wish-ssh-code-review/references/server.md) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/existential-birds__beagle/CLAUDE.md) | instruction signal |
| instruction | [.codex/INSTALL.md](../../../../sources/existential-birds__beagle/.codex/INSTALL.md) | instruction signal |
| ci | [.github/workflows/daydream-command.yml](../../../../sources/existential-birds__beagle/.github/workflows/daydream-command.yml) | ci support |
| ci | [.github/workflows/daydream-post.yml](../../../../sources/existential-birds__beagle/.github/workflows/daydream-post.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [plugins/beagle-go/skills/wish-ssh-code-review/references/server.md](../../../../sources/existential-birds__beagle/plugins/beagle-go/skills/wish-ssh-code-review/references/server.md) |
| agentRuntime | 496 | [AGENTS.md](../../../../sources/existential-birds__beagle/AGENTS.md)<br>[plugins/beagle-testing/skills/run-test-plan/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/run-test-plan/SKILL.md)<br>[plugins/beagle-testing/skills/gen-test-plan/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/gen-test-plan/SKILL.md)<br>[plugins/beagle-testing/skills/gen-test-plan/references/stack-discovery.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/gen-test-plan/references/stack-discovery.md)<br>[plugins/beagle-testing/skills/gen-test-plan/references/test-case-generation.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/gen-test-plan/references/test-case-generation.md)<br>[plugins/beagle-rust/skills/tokio-async-code-review/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-rust/skills/tokio-async-code-review/SKILL.md)<br>[plugins/beagle-rust/skills/tokio-async-code-review/references/channels.md](../../../../sources/existential-birds__beagle/plugins/beagle-rust/skills/tokio-async-code-review/references/channels.md)<br>[plugins/beagle-rust/skills/tokio-async-code-review/references/pinning-cancellation.md](../../../../sources/existential-birds__beagle/plugins/beagle-rust/skills/tokio-async-code-review/references/pinning-cancellation.md) |
| mcp | 0 | not obvious |
| retrieval | 3 | [plugins/beagle-rust/skills/rust-code-review/references/memory-ordering.md](../../../../sources/existential-birds__beagle/plugins/beagle-rust/skills/rust-code-review/references/memory-ordering.md)<br>[plugins/beagle-ios/skills/combine-code-review/references/memory.md](../../../../sources/existential-birds__beagle/plugins/beagle-ios/skills/combine-code-review/references/memory.md)<br>[plugins/beagle-elixir/skills/elixir-performance-review/references/memory.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/skills/elixir-performance-review/references/memory.md) |
| spec | 22 | [plugins/beagle-rust/skills/rust-code-review/references/interface-design.md](../../../../sources/existential-birds__beagle/plugins/beagle-rust/skills/rust-code-review/references/interface-design.md)<br>[plugins/beagle-rust/skills/rust-best-practices/references/api-design.md](../../../../sources/existential-birds__beagle/plugins/beagle-rust/skills/rust-best-practices/references/api-design.md)<br>[plugins/beagle-react/skills/react-flow-architecture/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-react/skills/react-flow-architecture/SKILL.md)<br>[plugins/beagle-ios/skills/swiftdata-code-review/references/model-design.md](../../../../sources/existential-birds__beagle/plugins/beagle-ios/skills/swiftdata-code-review/references/model-design.md)<br>[plugins/beagle-ios/skills/ios-animation-design/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-ios/skills/ios-animation-design/SKILL.md)<br>[plugins/beagle-ios/skills/ios-animation-design/references/animation-patterns.md](../../../../sources/existential-birds__beagle/plugins/beagle-ios/skills/ios-animation-design/references/animation-patterns.md)<br>[plugins/beagle-ios/skills/ios-animation-design/references/timing-guidelines.md](../../../../sources/existential-birds__beagle/plugins/beagle-ios/skills/ios-animation-design/references/timing-guidelines.md)<br>[plugins/beagle-go/skills/bubbletea-code-review/references/elm-architecture.md](../../../../sources/existential-birds__beagle/plugins/beagle-go/skills/bubbletea-code-review/references/elm-architecture.md) |
| eval | 16 | [plugins/beagle-testing/skills/run-test-plan/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/run-test-plan/SKILL.md)<br>[plugins/beagle-testing/skills/gen-test-plan/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/gen-test-plan/SKILL.md)<br>[plugins/beagle-testing/skills/gen-test-plan/references/stack-discovery.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/gen-test-plan/references/stack-discovery.md)<br>[plugins/beagle-testing/skills/gen-test-plan/references/test-case-generation.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/gen-test-plan/references/test-case-generation.md)<br>[plugins/beagle-rust/skills/rust-testing-code-review/references/integration-tests.md](../../../../sources/existential-birds__beagle/plugins/beagle-rust/skills/rust-testing-code-review/references/integration-tests.md)<br>[plugins/beagle-rust/skills/rust-testing-code-review/references/unit-tests.md](../../../../sources/existential-birds__beagle/plugins/beagle-rust/skills/rust-testing-code-review/references/unit-tests.md)<br>[plugins/beagle-elixir/skills/exunit-code-review/references/integration-tests.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/skills/exunit-code-review/references/integration-tests.md)<br>[plugins/beagle-elixir/skills/exunit-code-review/references/test-adapters.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/skills/exunit-code-review/references/test-adapters.md) |
| security | 9 | [plugins/beagle-react/skills/remix-v2-meta-sessions-review/references/auth-gates.md](../../../../sources/existential-birds__beagle/plugins/beagle-react/skills/remix-v2-meta-sessions-review/references/auth-gates.md)<br>[plugins/beagle-react/skills/remix-v2-meta-sessions-review/references/cookie-security.md](../../../../sources/existential-birds__beagle/plugins/beagle-react/skills/remix-v2-meta-sessions-review/references/cookie-security.md)<br>[plugins/beagle-react/skills/remix-v2-meta-sessions/references/auth-csrf.md](../../../../sources/existential-birds__beagle/plugins/beagle-react/skills/remix-v2-meta-sessions/references/auth-csrf.md)<br>[plugins/beagle-elixir/skills/liveview-code-review/references/security.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/skills/liveview-code-review/references/security.md)<br>[plugins/beagle-elixir/skills/elixir-security-review/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/skills/elixir-security-review/SKILL.md)<br>[plugins/beagle-elixir/skills/elixir-security-review/references/atom-exhaustion.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/skills/elixir-security-review/references/atom-exhaustion.md)<br>[plugins/beagle-elixir/skills/elixir-security-review/references/code-injection.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/skills/elixir-security-review/references/code-injection.md)<br>[plugins/beagle-elixir/skills/elixir-security-review/references/process-exposure.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/skills/elixir-security-review/references/process-exposure.md) |
| ci | 4 | [.github/workflows/daydream-command.yml](../../../../sources/existential-birds__beagle/.github/workflows/daydream-command.yml)<br>[.github/workflows/daydream-post.yml](../../../../sources/existential-birds__beagle/.github/workflows/daydream-post.yml)<br>[.github/workflows/daydream-review.yml](../../../../sources/existential-birds__beagle/.github/workflows/daydream-review.yml)<br>[.github/workflows/README.md](../../../../sources/existential-birds__beagle/.github/workflows/README.md) |
| container | 0 | not obvious |
| instruction | 3 | [AGENTS.md](../../../../sources/existential-birds__beagle/AGENTS.md)<br>[CLAUDE.md](../../../../sources/existential-birds__beagle/CLAUDE.md)<br>[.codex/INSTALL.md](../../../../sources/existential-birds__beagle/.codex/INSTALL.md) |
| docs | 13 | [README.md](../../../../sources/existential-birds__beagle/README.md)<br>[plugins/beagle-testing/README.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/README.md)<br>[plugins/beagle-react/README.md](../../../../sources/existential-birds__beagle/plugins/beagle-react/README.md)<br>[plugins/beagle-python/README.md](../../../../sources/existential-birds__beagle/plugins/beagle-python/README.md)<br>[plugins/beagle-ios/README.md](../../../../sources/existential-birds__beagle/plugins/beagle-ios/README.md)<br>[plugins/beagle-go/README.md](../../../../sources/existential-birds__beagle/plugins/beagle-go/README.md)<br>[plugins/beagle-elixir/README.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/README.md)<br>[plugins/beagle-docs/README.md](../../../../sources/existential-birds__beagle/plugins/beagle-docs/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 16 | [plugins/beagle-testing/skills/run-test-plan/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/run-test-plan/SKILL.md)<br>[plugins/beagle-testing/skills/gen-test-plan/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/gen-test-plan/SKILL.md)<br>[plugins/beagle-testing/skills/gen-test-plan/references/stack-discovery.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/gen-test-plan/references/stack-discovery.md)<br>[plugins/beagle-testing/skills/gen-test-plan/references/test-case-generation.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/gen-test-plan/references/test-case-generation.md)<br>[plugins/beagle-rust/skills/rust-testing-code-review/references/integration-tests.md](../../../../sources/existential-birds__beagle/plugins/beagle-rust/skills/rust-testing-code-review/references/integration-tests.md)<br>[plugins/beagle-rust/skills/rust-testing-code-review/references/unit-tests.md](../../../../sources/existential-birds__beagle/plugins/beagle-rust/skills/rust-testing-code-review/references/unit-tests.md) |
| CI workflows | 4 | [.github/workflows/daydream-command.yml](../../../../sources/existential-birds__beagle/.github/workflows/daydream-command.yml)<br>[.github/workflows/daydream-post.yml](../../../../sources/existential-birds__beagle/.github/workflows/daydream-post.yml)<br>[.github/workflows/daydream-review.yml](../../../../sources/existential-birds__beagle/.github/workflows/daydream-review.yml)<br>[.github/workflows/README.md](../../../../sources/existential-birds__beagle/.github/workflows/README.md) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 9 | [plugins/beagle-react/skills/remix-v2-meta-sessions-review/references/auth-gates.md](../../../../sources/existential-birds__beagle/plugins/beagle-react/skills/remix-v2-meta-sessions-review/references/auth-gates.md)<br>[plugins/beagle-react/skills/remix-v2-meta-sessions-review/references/cookie-security.md](../../../../sources/existential-birds__beagle/plugins/beagle-react/skills/remix-v2-meta-sessions-review/references/cookie-security.md)<br>[plugins/beagle-react/skills/remix-v2-meta-sessions/references/auth-csrf.md](../../../../sources/existential-birds__beagle/plugins/beagle-react/skills/remix-v2-meta-sessions/references/auth-csrf.md)<br>[plugins/beagle-elixir/skills/liveview-code-review/references/security.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/skills/liveview-code-review/references/security.md)<br>[plugins/beagle-elixir/skills/elixir-security-review/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/skills/elixir-security-review/SKILL.md)<br>[plugins/beagle-elixir/skills/elixir-security-review/references/atom-exhaustion.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/skills/elixir-security-review/references/atom-exhaustion.md) |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/existential-birds__beagle/AGENTS.md)<br>[CLAUDE.md](../../../../sources/existential-birds__beagle/CLAUDE.md)<br>[.codex/INSTALL.md](../../../../sources/existential-birds__beagle/.codex/INSTALL.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `AGENTS.md`, `plugins/beagle-testing/skills/run-test-plan/SKILL.md`, `plugins/beagle-testing/skills/gen-test-plan/SKILL.md`.
2. Trace execution through entrypoints: `plugins/beagle-go/skills/wish-ssh-code-review/references/server.md`.
3. Map agent/tool runtime through: `AGENTS.md`, `plugins/beagle-testing/skills/run-test-plan/SKILL.md`, `plugins/beagle-testing/skills/gen-test-plan/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `plugins/beagle-rust/skills/rust-code-review/references/memory-ordering.md`, `plugins/beagle-ios/skills/combine-code-review/references/memory.md`, `plugins/beagle-elixir/skills/elixir-performance-review/references/memory.md`.
5. Verify behavior through test/eval files: `plugins/beagle-testing/skills/run-test-plan/SKILL.md`, `plugins/beagle-testing/skills/gen-test-plan/SKILL.md`, `plugins/beagle-testing/skills/gen-test-plan/references/stack-discovery.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Claude Code plugin marketplace 145 framework aware code review skills plus AI writing detection, doc and test plan gener. 핵심 구조 신호는 Shell, README.md, AGENTS.md, CLAUDE.md, LICENSE, ci이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
