# sashiko-dev/sashiko Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Agentic review of Linux Kernel code changes

## 요약

- 조사 단위: `sources/sashiko-dev__sashiko` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 320 files, 47 directories, depth score 120, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=third_party/prompts/systemd/skills/systemd.md, third_party/prompts/kernel/skills/kernel.md, third_party/prompts/kernel/scripts/agent_one.sh이고, 의존성 단서는 llama, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | sashiko-dev/sashiko |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 814 |
| Forks | 153 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/sashiko-dev__sashiko](../../../../sources/sashiko-dev__sashiko) |
| Existing report | [reports/global-trending/repositories/sashiko-dev__sashiko.md](../../../global-trending/repositories/sashiko-dev__sashiko.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 320 / 47 |
| Max observed depth | 5 |
| Top directories | .github, benchmarks, designs, docs, sashiko.dev, scripts, skills, src, static, tests, third_party |
| Top extensions | .md: 185, .rs: 60, .toml: 16, .yaml: 11, (none): 11, .sh: 9, .yml: 6, .json: 5, .png: 4, .py: 4, .lock: 2, .txt: 2 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 17 |
| tests | validation surface | 16 |
| src | source boundary | 10 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| designs | top-level component | 1 |
| sashiko.dev | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| static | top-level component | 1 |
| third_party | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| build | Makefile | build | make build |
| quality | Makefile | fmt | make fmt |
| quality | Makefile | lint | make lint |
| test | Makefile | test | make test |
| utility | Makefile | clean | make clean |
| quality | Makefile | check-pr | make check-pr |
| quality | Makefile | check-integration | make check-integration |
| quality | Makefile | check-all | make check-all |
| utility | Makefile | sob | make sob |
| test | Makefile | integration-test | make integration-test |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | llama |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [third_party/prompts/systemd/skills/systemd.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/systemd/skills/systemd.md) | agentRuntime signal |
| agentRuntime | [third_party/prompts/kernel/skills/kernel.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/skills/kernel.md) | agentRuntime signal |
| agentRuntime | [third_party/prompts/kernel/scripts/agent_one.sh](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/scripts/agent_one.sh) | agentRuntime signal |
| agentRuntime | [third_party/prompts/kernel/agent/check-fixes.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/agent/check-fixes.md) | agentRuntime signal |
| entrypoints | [src/main.rs](../../../../sources/sashiko-dev__sashiko/src/main.rs) | entrypoints signal |
| entrypoints | [src/bin/benchmark.rs](../../../../sources/sashiko-dev__sashiko/src/bin/benchmark.rs) | entrypoints signal |
| entrypoints | [src/bin/review.rs](../../../../sources/sashiko-dev__sashiko/src/bin/review.rs) | entrypoints signal |
| entrypoints | [src/bin/sashiko-cli.rs](../../../../sources/sashiko-dev__sashiko/src/bin/sashiko-cli.rs) | entrypoints signal |
| instruction | [GEMINI.md](../../../../sources/sashiko-dev__sashiko/GEMINI.md) | instruction signal |
| config | [Cargo.lock](../../../../sources/sashiko-dev__sashiko/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/sashiko-dev__sashiko/Cargo.toml) | config signal |
| config | [Makefile](../../../../sources/sashiko-dev__sashiko/Makefile) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [src/main.rs](../../../../sources/sashiko-dev__sashiko/src/main.rs)<br>[src/bin/benchmark.rs](../../../../sources/sashiko-dev__sashiko/src/bin/benchmark.rs)<br>[src/bin/review.rs](../../../../sources/sashiko-dev__sashiko/src/bin/review.rs)<br>[src/bin/sashiko-cli.rs](../../../../sources/sashiko-dev__sashiko/src/bin/sashiko-cli.rs) |
| agentRuntime | 28 | [third_party/prompts/systemd/skills/systemd.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/systemd/skills/systemd.md)<br>[third_party/prompts/kernel/skills/kernel.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/skills/kernel.md)<br>[third_party/prompts/kernel/scripts/agent_one.sh](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/scripts/agent_one.sh)<br>[third_party/prompts/kernel/agent/check-fixes.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/agent/check-fixes.md)<br>[third_party/prompts/kernel/agent/context.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/agent/context.md)<br>[third_party/prompts/kernel/agent/debug-code.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/agent/debug-code.md)<br>[third_party/prompts/kernel/agent/debug-commits.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/agent/debug-commits.md)<br>[third_party/prompts/kernel/agent/debug-report.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/agent/debug-report.md) |
| mcp | 0 | not obvious |
| retrieval | 1 | [static/index.html](../../../../sources/sashiko-dev__sashiko/static/index.html) |
| spec | 29 | [designs/DESIGN_AI_WORKER_INTERACTION.md](../../../../sources/sashiko-dev__sashiko/designs/DESIGN_AI_WORKER_INTERACTION.md)<br>[designs/DESIGN_BASELINE_DETECTION.md](../../../../sources/sashiko-dev__sashiko/designs/DESIGN_BASELINE_DETECTION.md)<br>[designs/DESIGN_BENCHMARK_VALIDATION.md](../../../../sources/sashiko-dev__sashiko/designs/DESIGN_BENCHMARK_VALIDATION.md)<br>[designs/DESIGN_CLAUDE_PROVIDER.md](../../../../sources/sashiko-dev__sashiko/designs/DESIGN_CLAUDE_PROVIDER.md)<br>[designs/DESIGN_CLI_TOOL_V2.md](../../../../sources/sashiko-dev__sashiko/designs/DESIGN_CLI_TOOL_V2.md)<br>[designs/DESIGN_CLI_TOOL.md](../../../../sources/sashiko-dev__sashiko/designs/DESIGN_CLI_TOOL.md)<br>[designs/DESIGN_CONTENT_TRUNCATION.md](../../../../sources/sashiko-dev__sashiko/designs/DESIGN_CONTENT_TRUNCATION.md)<br>[designs/DESIGN_GEMINI_CACHING.md](../../../../sources/sashiko-dev__sashiko/designs/DESIGN_GEMINI_CACHING.md) |
| eval | 25 | [third_party/prompts/kernel/subsystem/tracing.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/subsystem/tracing.md)<br>[tests/integration_tests.rs](../../../../sources/sashiko-dev__sashiko/tests/integration_tests.rs)<br>[tests/integration/cover_letter_late_merge_test.rs](../../../../sources/sashiko-dev__sashiko/tests/integration/cover_letter_late_merge_test.rs)<br>[tests/integration/db_version_merge_test.rs](../../../../sources/sashiko-dev__sashiko/tests/integration/db_version_merge_test.rs)<br>[tests/integration/findings_sum_test.rs](../../../../sources/sashiko-dev__sashiko/tests/integration/findings_sum_test.rs)<br>[tests/integration/merge_bug_different_series.rs](../../../../sources/sashiko-dev__sashiko/tests/integration/merge_bug_different_series.rs)<br>[tests/integration/merge_bug_loose_patch_count.rs](../../../../sources/sashiko-dev__sashiko/tests/integration/merge_bug_loose_patch_count.rs)<br>[tests/integration/merge_bug_prefixes.rs](../../../../sources/sashiko-dev__sashiko/tests/integration/merge_bug_prefixes.rs) |
| security | 5 | [email_policy.toml](../../../../sources/sashiko-dev__sashiko/email_policy.toml)<br>[src/email_policy.rs](../../../../sources/sashiko-dev__sashiko/src/email_policy.rs)<br>[sashiko.dev/email_policy.toml](../../../../sources/sashiko-dev__sashiko/sashiko.dev/email_policy.toml)<br>[docs/examples/email_policy.toml](../../../../sources/sashiko-dev__sashiko/docs/examples/email_policy.toml)<br>[designs/DESIGN_SECURITY_REVIEW_WORKER.md](../../../../sources/sashiko-dev__sashiko/designs/DESIGN_SECURITY_REVIEW_WORKER.md) |
| ci | 5 | [.github/workflows/linting.yml](../../../../sources/sashiko-dev__sashiko/.github/workflows/linting.yml)<br>[.github/workflows/pull-requests.yml](../../../../sources/sashiko-dev__sashiko/.github/workflows/pull-requests.yml)<br>[.github/workflows/push-main.yml](../../../../sources/sashiko-dev__sashiko/.github/workflows/push-main.yml)<br>[.github/workflows/tag-release.yml](../../../../sources/sashiko-dev__sashiko/.github/workflows/tag-release.yml)<br>[.github/workflows/unit-tests.yml](../../../../sources/sashiko-dev__sashiko/.github/workflows/unit-tests.yml) |
| container | 1 | [Dockerfile](../../../../sources/sashiko-dev__sashiko/Dockerfile) |
| instruction | 1 | [GEMINI.md](../../../../sources/sashiko-dev__sashiko/GEMINI.md) |
| docs | 21 | [README.md](../../../../sources/sashiko-dev__sashiko/README.md)<br>[third_party/prompts/README.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/README.md)<br>[third_party/prompts/systemd/README.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/systemd/README.md)<br>[third_party/prompts/kernel/README.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/README.md)<br>[third_party/prompts/kernel/docs/github-actions-claude-integration.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/docs/github-actions-claude-integration.md)<br>[third_party/prompts/iproute/README.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/iproute/README.md)<br>[docs/benchmarking.md](../../../../sources/sashiko-dev__sashiko/docs/benchmarking.md)<br>[docs/configuration.md](../../../../sources/sashiko-dev__sashiko/docs/configuration.md) |
| config | 3 | [Cargo.lock](../../../../sources/sashiko-dev__sashiko/Cargo.lock)<br>[Cargo.toml](../../../../sources/sashiko-dev__sashiko/Cargo.toml)<br>[Makefile](../../../../sources/sashiko-dev__sashiko/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 25 | [third_party/prompts/kernel/subsystem/tracing.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/subsystem/tracing.md)<br>[tests/integration_tests.rs](../../../../sources/sashiko-dev__sashiko/tests/integration_tests.rs)<br>[tests/integration/cover_letter_late_merge_test.rs](../../../../sources/sashiko-dev__sashiko/tests/integration/cover_letter_late_merge_test.rs)<br>[tests/integration/db_version_merge_test.rs](../../../../sources/sashiko-dev__sashiko/tests/integration/db_version_merge_test.rs)<br>[tests/integration/findings_sum_test.rs](../../../../sources/sashiko-dev__sashiko/tests/integration/findings_sum_test.rs)<br>[tests/integration/merge_bug_different_series.rs](../../../../sources/sashiko-dev__sashiko/tests/integration/merge_bug_different_series.rs) |
| CI workflows | 5 | [.github/workflows/linting.yml](../../../../sources/sashiko-dev__sashiko/.github/workflows/linting.yml)<br>[.github/workflows/pull-requests.yml](../../../../sources/sashiko-dev__sashiko/.github/workflows/pull-requests.yml)<br>[.github/workflows/push-main.yml](../../../../sources/sashiko-dev__sashiko/.github/workflows/push-main.yml)<br>[.github/workflows/tag-release.yml](../../../../sources/sashiko-dev__sashiko/.github/workflows/tag-release.yml)<br>[.github/workflows/unit-tests.yml](../../../../sources/sashiko-dev__sashiko/.github/workflows/unit-tests.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/sashiko-dev__sashiko/Dockerfile) |
| Security / policy | 5 | [email_policy.toml](../../../../sources/sashiko-dev__sashiko/email_policy.toml)<br>[src/email_policy.rs](../../../../sources/sashiko-dev__sashiko/src/email_policy.rs)<br>[sashiko.dev/email_policy.toml](../../../../sources/sashiko-dev__sashiko/sashiko.dev/email_policy.toml)<br>[docs/examples/email_policy.toml](../../../../sources/sashiko-dev__sashiko/docs/examples/email_policy.toml)<br>[designs/DESIGN_SECURITY_REVIEW_WORKER.md](../../../../sources/sashiko-dev__sashiko/designs/DESIGN_SECURITY_REVIEW_WORKER.md) |
| Agent instructions | 1 | [GEMINI.md](../../../../sources/sashiko-dev__sashiko/GEMINI.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `third_party/prompts/systemd/skills/systemd.md`, `third_party/prompts/kernel/skills/kernel.md`, `third_party/prompts/kernel/scripts/agent_one.sh`.
2. Trace execution through entrypoints: `src/main.rs`, `src/bin/benchmark.rs`, `src/bin/review.rs`.
3. Map agent/tool runtime through: `third_party/prompts/systemd/skills/systemd.md`, `third_party/prompts/kernel/skills/kernel.md`, `third_party/prompts/kernel/scripts/agent_one.sh`.
4. Inspect retrieval/memory/indexing through: `static/index.html`.
5. Verify behavior through test/eval files: `third_party/prompts/kernel/subsystem/tracing.md`, `tests/integration_tests.rs`, `tests/integration/cover_letter_late_merge_test.rs`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Agentic review of Linux Kernel code changes. 핵심 구조 신호는 Rust, Cargo.toml, Dockerfile, Makefile, README.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
