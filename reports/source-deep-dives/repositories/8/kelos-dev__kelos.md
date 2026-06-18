# kelos-dev/kelos Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Kelos - The Kubernetes-native framework for orchestrating autonomous AI coding agents.

## 요약

- 조사 단위: `sources/kelos-dev__kelos` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 416 files, 94 directories, depth score 114, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

코딩 에이전트/IDE 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=hack/release-notes/main.go, cmd/kelos-webhook-server/main.go, cmd/kelos-spawner/main.go이고, 의존성 단서는 cobra, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 coding-agent reference implementation이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kelos-dev/kelos |
| Topic | Coding Agent and IDE / 코딩 에이전트/IDE |
| Region | global |
| Language | Go |
| Stars | 222 |
| Forks | 27 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/kelos-dev__kelos](../../../../sources/kelos-dev__kelos) |
| Existing report | [reports/global-trending/repositories/kelos-dev__kelos.md](../../../global-trending/repositories/kelos-dev__kelos.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 416 / 94 |
| Max observed depth | 9 |
| Top directories | .github, api, claude-code, cmd, codex, cursor, docs, examples, Formula, gemini, hack, internal, kanon-development, opencode, pkg, self-development, skills, test |
| Top extensions | .go: 264, .yaml: 95, .md: 27, (none): 14, .sh: 12, .mod: 1, .rb: 1, .sum: 1, .txt: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 5 |
| examples/02-task-with-workspace | examples workspace | 3 |
| examples/03-taskspawner-github-issues | examples workspace | 3 |
| examples/04-taskspawner-cron | examples workspace | 3 |
| examples/05-task-with-agentconfig | examples workspace | 3 |
| examples/07-task-pipeline | examples workspace | 3 |
| cmd/ghproxy | cmd workspace | 2 |
| cmd/kelos-codex-auth-refresh | cmd workspace | 2 |
| cmd/kelos-controller | cmd workspace | 2 |
| cmd/kelos-slack-server | cmd workspace | 2 |
| cmd/kelos-spawner | cmd workspace | 2 |
| cmd/kelos-webhook-server | cmd workspace | 2 |
| examples/01-simple-task | examples workspace | 2 |
| examples/09-bedrock-credentials | examples workspace | 2 |
| .github | ci surface | 1 |
| api | source boundary | 1 |
| claude-code | top-level component | 1 |
| cmd | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test | make test |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test-integration | make test-integration |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test-e2e | make test-e2e |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | update | make update |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | verify | make verify |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | run | make run |
| utility | Makefile | .PHONY | make .PHONY |
| container | Makefile | image | make image |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | cobra |
| observability | prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [hack/release-notes/main.go](../../../../sources/kelos-dev__kelos/hack/release-notes/main.go) | entrypoints signal |
| entrypoints | [cmd/kelos-webhook-server/main.go](../../../../sources/kelos-dev__kelos/cmd/kelos-webhook-server/main.go) | entrypoints signal |
| entrypoints | [cmd/kelos-spawner/main.go](../../../../sources/kelos-dev__kelos/cmd/kelos-spawner/main.go) | entrypoints signal |
| entrypoints | [cmd/kelos-slack-server/main.go](../../../../sources/kelos-dev__kelos/cmd/kelos-slack-server/main.go) | entrypoints signal |
| agentRuntime | [AGENTS.md](../../../../sources/kelos-dev__kelos/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools.go](../../../../sources/kelos-dev__kelos/tools.go) | agentRuntime signal |
| agentRuntime | [test/e2e/skills_test.go](../../../../sources/kelos-dev__kelos/test/e2e/skills_test.go) | agentRuntime signal |
| agentRuntime | [skills/kelos/SKILL.md](../../../../sources/kelos-dev__kelos/skills/kelos/SKILL.md) | agentRuntime signal |
| security | [test/e2e/codex_auth_refresher_test.go](../../../../sources/kelos-dev__kelos/test/e2e/codex_auth_refresher_test.go) | security signal |
| security | [internal/source/github_comment_policy_test.go](../../../../sources/kelos-dev__kelos/internal/source/github_comment_policy_test.go) | security signal |
| security | [internal/source/github_comment_policy.go](../../../../sources/kelos-dev__kelos/internal/source/github_comment_policy.go) | security signal |
| security | [internal/manifests/charts/kelos/templates/rbac.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/templates/rbac.yaml) | security signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 9 | [hack/release-notes/main.go](../../../../sources/kelos-dev__kelos/hack/release-notes/main.go)<br>[cmd/kelos-webhook-server/main.go](../../../../sources/kelos-dev__kelos/cmd/kelos-webhook-server/main.go)<br>[cmd/kelos-spawner/main.go](../../../../sources/kelos-dev__kelos/cmd/kelos-spawner/main.go)<br>[cmd/kelos-slack-server/main.go](../../../../sources/kelos-dev__kelos/cmd/kelos-slack-server/main.go)<br>[cmd/kelos-controller/main.go](../../../../sources/kelos-dev__kelos/cmd/kelos-controller/main.go)<br>[cmd/kelos-codex-auth-refresh/main.go](../../../../sources/kelos-dev__kelos/cmd/kelos-codex-auth-refresh/main.go)<br>[cmd/kelos-capture/main.go](../../../../sources/kelos-dev__kelos/cmd/kelos-capture/main.go)<br>[cmd/kelos/main.go](../../../../sources/kelos-dev__kelos/cmd/kelos/main.go) |
| agentRuntime | 12 | [AGENTS.md](../../../../sources/kelos-dev__kelos/AGENTS.md)<br>[tools.go](../../../../sources/kelos-dev__kelos/tools.go)<br>[test/e2e/skills_test.go](../../../../sources/kelos-dev__kelos/test/e2e/skills_test.go)<br>[skills/kelos/SKILL.md](../../../../sources/kelos-dev__kelos/skills/kelos/SKILL.md)<br>[skills/kelos/references/agentconfig.yaml](../../../../sources/kelos-dev__kelos/skills/kelos/references/agentconfig.yaml)<br>[skills/kelos/references/cli.md](../../../../sources/kelos-dev__kelos/skills/kelos/references/cli.md)<br>[skills/kelos/references/task.yaml](../../../../sources/kelos-dev__kelos/skills/kelos/references/task.yaml)<br>[skills/kelos/references/taskspawner.yaml](../../../../sources/kelos-dev__kelos/skills/kelos/references/taskspawner.yaml) |
| mcp | 1 | [internal/cli/mcp_test.go](../../../../sources/kelos-dev__kelos/internal/cli/mcp_test.go) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 102 | [test/integration/cli_test.go](../../../../sources/kelos-dev__kelos/test/integration/cli_test.go)<br>[test/integration/completion_test.go](../../../../sources/kelos-dev__kelos/test/integration/completion_test.go)<br>[test/integration/conversion_test.go](../../../../sources/kelos-dev__kelos/test/integration/conversion_test.go)<br>[test/integration/install_script_test.go](../../../../sources/kelos-dev__kelos/test/integration/install_script_test.go)<br>[test/integration/metrics_test.go](../../../../sources/kelos-dev__kelos/test/integration/metrics_test.go)<br>[test/integration/suite_test.go](../../../../sources/kelos-dev__kelos/test/integration/suite_test.go)<br>[test/integration/task_test.go](../../../../sources/kelos-dev__kelos/test/integration/task_test.go)<br>[test/integration/taskspawner_test.go](../../../../sources/kelos-dev__kelos/test/integration/taskspawner_test.go) |
| security | 21 | [test/e2e/codex_auth_refresher_test.go](../../../../sources/kelos-dev__kelos/test/e2e/codex_auth_refresher_test.go)<br>[internal/source/github_comment_policy_test.go](../../../../sources/kelos-dev__kelos/internal/source/github_comment_policy_test.go)<br>[internal/source/github_comment_policy.go](../../../../sources/kelos-dev__kelos/internal/source/github_comment_policy.go)<br>[internal/manifests/charts/kelos/templates/rbac.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/templates/rbac.yaml)<br>[internal/controller/codex_auth_refresher_builder.go](../../../../sources/kelos-dev__kelos/internal/controller/codex_auth_refresher_builder.go)<br>[internal/controller/codex_auth_refresher_controller_test.go](../../../../sources/kelos-dev__kelos/internal/controller/codex_auth_refresher_controller_test.go)<br>[internal/controller/codex_auth_refresher_controller.go](../../../../sources/kelos-dev__kelos/internal/controller/codex_auth_refresher_controller.go)<br>[examples/09-bedrock-credentials/secret.yaml](../../../../sources/kelos-dev__kelos/examples/09-bedrock-credentials/secret.yaml) |
| ci | 10 | [.github/workflows/ci.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/ci.yaml)<br>[.github/workflows/deploy-dev.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/deploy-dev.yaml)<br>[.github/workflows/e2e-anchor.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/e2e-anchor.yaml)<br>[.github/workflows/fork-e2e.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/fork-e2e.yaml)<br>[.github/workflows/label.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/label.yaml)<br>[.github/workflows/refresh-codex-auth.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/refresh-codex-auth.yaml)<br>[.github/workflows/release.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/release.yaml)<br>[.github/workflows/reusable-e2e.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/reusable-e2e.yaml) |
| container | 28 | [opencode/Dockerfile](../../../../sources/kelos-dev__kelos/opencode/Dockerfile)<br>[internal/manifests/charts/kelos/Chart.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/Chart.yaml)<br>[internal/manifests/charts/kelos/README.md](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/README.md)<br>[internal/manifests/charts/kelos/values.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/values.yaml)<br>[internal/manifests/charts/kelos/templates/cronjob.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/templates/cronjob.yaml)<br>[internal/manifests/charts/kelos/templates/deployment.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/templates/deployment.yaml)<br>[internal/manifests/charts/kelos/templates/namespace.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/templates/namespace.yaml)<br>[internal/manifests/charts/kelos/templates/rbac.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/templates/rbac.yaml) |
| instruction | 1 | [AGENTS.md](../../../../sources/kelos-dev__kelos/AGENTS.md) |
| docs | 20 | [README.md](../../../../sources/kelos-dev__kelos/README.md)<br>[self-development/README.md](../../../../sources/kelos-dev__kelos/self-development/README.md)<br>[kanon-development/README.md](../../../../sources/kelos-dev__kelos/kanon-development/README.md)<br>[internal/manifests/charts/kelos/README.md](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/README.md)<br>[examples/README.md](../../../../sources/kelos-dev__kelos/examples/README.md)<br>[examples/13-taskspawner-generic-webhook/README.md](../../../../sources/kelos-dev__kelos/examples/13-taskspawner-generic-webhook/README.md)<br>[examples/11-taskspawner-linear-webhook/README.md](../../../../sources/kelos-dev__kelos/examples/11-taskspawner-linear-webhook/README.md)<br>[examples/10-taskspawner-github-webhook/README.md](../../../../sources/kelos-dev__kelos/examples/10-taskspawner-github-webhook/README.md) |
| config | 2 | [go.mod](../../../../sources/kelos-dev__kelos/go.mod)<br>[Makefile](../../../../sources/kelos-dev__kelos/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 102 | [test/integration/cli_test.go](../../../../sources/kelos-dev__kelos/test/integration/cli_test.go)<br>[test/integration/completion_test.go](../../../../sources/kelos-dev__kelos/test/integration/completion_test.go)<br>[test/integration/conversion_test.go](../../../../sources/kelos-dev__kelos/test/integration/conversion_test.go)<br>[test/integration/install_script_test.go](../../../../sources/kelos-dev__kelos/test/integration/install_script_test.go)<br>[test/integration/metrics_test.go](../../../../sources/kelos-dev__kelos/test/integration/metrics_test.go)<br>[test/integration/suite_test.go](../../../../sources/kelos-dev__kelos/test/integration/suite_test.go) |
| CI workflows | 10 | [.github/workflows/ci.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/ci.yaml)<br>[.github/workflows/deploy-dev.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/deploy-dev.yaml)<br>[.github/workflows/e2e-anchor.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/e2e-anchor.yaml)<br>[.github/workflows/fork-e2e.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/fork-e2e.yaml)<br>[.github/workflows/label.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/label.yaml)<br>[.github/workflows/refresh-codex-auth.yaml](../../../../sources/kelos-dev__kelos/.github/workflows/refresh-codex-auth.yaml) |
| Containers / deploy | 28 | [opencode/Dockerfile](../../../../sources/kelos-dev__kelos/opencode/Dockerfile)<br>[internal/manifests/charts/kelos/Chart.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/Chart.yaml)<br>[internal/manifests/charts/kelos/README.md](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/README.md)<br>[internal/manifests/charts/kelos/values.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/values.yaml)<br>[internal/manifests/charts/kelos/templates/cronjob.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/templates/cronjob.yaml)<br>[internal/manifests/charts/kelos/templates/deployment.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/templates/deployment.yaml) |
| Security / policy | 21 | [test/e2e/codex_auth_refresher_test.go](../../../../sources/kelos-dev__kelos/test/e2e/codex_auth_refresher_test.go)<br>[internal/source/github_comment_policy_test.go](../../../../sources/kelos-dev__kelos/internal/source/github_comment_policy_test.go)<br>[internal/source/github_comment_policy.go](../../../../sources/kelos-dev__kelos/internal/source/github_comment_policy.go)<br>[internal/manifests/charts/kelos/templates/rbac.yaml](../../../../sources/kelos-dev__kelos/internal/manifests/charts/kelos/templates/rbac.yaml)<br>[internal/controller/codex_auth_refresher_builder.go](../../../../sources/kelos-dev__kelos/internal/controller/codex_auth_refresher_builder.go)<br>[internal/controller/codex_auth_refresher_controller_test.go](../../../../sources/kelos-dev__kelos/internal/controller/codex_auth_refresher_controller_test.go) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/kelos-dev__kelos/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `hack/release-notes/main.go`, `cmd/kelos-webhook-server/main.go`, `cmd/kelos-spawner/main.go`.
2. Trace execution through entrypoints: `hack/release-notes/main.go`, `cmd/kelos-webhook-server/main.go`, `cmd/kelos-spawner/main.go`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools.go`, `test/e2e/skills_test.go`.
4. Verify behavior through test/eval files: `test/integration/cli_test.go`, `test/integration/completion_test.go`, `test/integration/conversion_test.go`.

## Existing Repository Insight

코딩 에이전트/IDE 관점에서 Kelos The Kubernetes native framework for orchestrating autonomous AI coding agents.. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, AGENTS.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 코딩 에이전트/IDE 레포입니다. 활용 관점은 coding-agent reference implementation이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
