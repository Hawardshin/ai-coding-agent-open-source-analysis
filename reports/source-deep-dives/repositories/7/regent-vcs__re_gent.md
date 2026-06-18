# regent-vcs/re_gent Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 132 files, 42 directories.

## 요약

- 조사 단위: `sources/regent-vcs__re_gent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 132 files, 42 directories, depth score 108, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=cmd/rgt/main.go이고, 의존성 단서는 cobra, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | regent-vcs/re_gent |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | global |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/regent-vcs__re_gent](../../../../sources/regent-vcs__re_gent) |
| Existing report | [reports/clone-structures/regent-vcs__re_gent.md](../../../clone-structures/regent-vcs__re_gent.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 132 / 42 |
| Max observed depth | 5 |
| Top directories | .agents, .claude, .github, assets, cmd, demo, docs, examples, internal, scripts, test |
| Top extensions | .go: 75, .md: 25, .yml: 7, .py: 5, (none): 4, .gif: 3, .sh: 3, .json: 2, .png: 2, .jsonc: 1, .mod: 1, .mp4: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| cmd/rgt | cmd workspace | 5 |
| docs | documentation surface | 4 |
| examples/bad-refactor | examples workspace | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| cmd | source boundary | 1 |
| demo | top-level component | 1 |
| examples | top-level component | 1 |
| internal | top-level component | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| build | Makefile | build | make build |
| test | Makefile | test | make test |
| test | Makefile | test-race | make test-race |
| test | Makefile | test-cover | make test-cover |
| quality | Makefile | lint | make lint |
| quality | Makefile | fmt | make fmt |
| utility | Makefile | clean | make clean |
| utility | Makefile | install | make install |


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
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [cmd/rgt/main.go](../../../../sources/regent-vcs__re_gent/cmd/rgt/main.go) | entrypoints signal |
| config | [go.mod](../../../../sources/regent-vcs__re_gent/go.mod) | config signal |
| config | [Makefile](../../../../sources/regent-vcs__re_gent/Makefile) | config signal |
| docs | [README.md](../../../../sources/regent-vcs__re_gent/README.md) | docs signal |
| docs | [examples/bad-refactor/README.md](../../../../sources/regent-vcs__re_gent/examples/bad-refactor/README.md) | docs signal |
| docs | [docs/FAQ.md](../../../../sources/regent-vcs__re_gent/docs/FAQ.md) | docs signal |
| docs | [docs/shell-completion.md](../../../../sources/regent-vcs__re_gent/docs/shell-completion.md) | docs signal |
| eval | [test/integration_test.go](../../../../sources/regent-vcs__re_gent/test/integration_test.go) | eval signal |
| eval | [test/phase1_acceptance_test.go](../../../../sources/regent-vcs__re_gent/test/phase1_acceptance_test.go) | eval signal |
| eval | [test/session_branching_test.go](../../../../sources/regent-vcs__re_gent/test/session_branching_test.go) | eval signal |
| eval | [scripts/test-release.sh](../../../../sources/regent-vcs__re_gent/scripts/test-release.sh) | eval signal |
| ci | [.github/workflows/ci.yml](../../../../sources/regent-vcs__re_gent/.github/workflows/ci.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [cmd/rgt/main.go](../../../../sources/regent-vcs__re_gent/cmd/rgt/main.go) |
| agentRuntime | 12 | [internal/hook/hook_test.go](../../../../sources/regent-vcs__re_gent/internal/hook/hook_test.go)<br>[internal/hook/hook.go](../../../../sources/regent-vcs__re_gent/internal/hook/hook.go)<br>[internal/hook/payload.go](../../../../sources/regent-vcs__re_gent/internal/hook/payload.go)<br>[internal/cli/hook.go](../../../../sources/regent-vcs__re_gent/internal/cli/hook.go)<br>[demo/.claude/skills/show/SKILL.md](../../../../sources/regent-vcs__re_gent/demo/.claude/skills/show/SKILL.md)<br>[demo/.claude/skills/log/SKILL.md](../../../../sources/regent-vcs__re_gent/demo/.claude/skills/log/SKILL.md)<br>[demo/.claude/skills/blame/SKILL.md](../../../../sources/regent-vcs__re_gent/demo/.claude/skills/blame/SKILL.md)<br>[cmd/rgt/tool_batch_hook.go](../../../../sources/regent-vcs__re_gent/cmd/rgt/tool_batch_hook.go) |
| mcp | 0 | not obvious |
| retrieval | 7 | [internal/index/index_test.go](../../../../sources/regent-vcs__re_gent/internal/index/index_test.go)<br>[internal/index/index.go](../../../../sources/regent-vcs__re_gent/internal/index/index.go)<br>[internal/index/messages_test.go](../../../../sources/regent-vcs__re_gent/internal/index/messages_test.go)<br>[internal/index/messages.go](../../../../sources/regent-vcs__re_gent/internal/index/messages.go)<br>[internal/index/resolve.go](../../../../sources/regent-vcs__re_gent/internal/index/resolve.go)<br>[internal/cli/graph_renderer_test.go](../../../../sources/regent-vcs__re_gent/internal/cli/graph_renderer_test.go)<br>[internal/cli/graph_renderer.go](../../../../sources/regent-vcs__re_gent/internal/cli/graph_renderer.go) |
| spec | 2 | [ROADMAP.md](../../../../sources/regent-vcs__re_gent/ROADMAP.md)<br>[test/phase1_acceptance_test.go](../../../../sources/regent-vcs__re_gent/test/phase1_acceptance_test.go) |
| eval | 35 | [test/integration_test.go](../../../../sources/regent-vcs__re_gent/test/integration_test.go)<br>[test/phase1_acceptance_test.go](../../../../sources/regent-vcs__re_gent/test/phase1_acceptance_test.go)<br>[test/session_branching_test.go](../../../../sources/regent-vcs__re_gent/test/session_branching_test.go)<br>[scripts/test-release.sh](../../../../sources/regent-vcs__re_gent/scripts/test-release.sh)<br>[internal/treediff/treediff_test.go](../../../../sources/regent-vcs__re_gent/internal/treediff/treediff_test.go)<br>[internal/store/blame_test.go](../../../../sources/regent-vcs__re_gent/internal/store/blame_test.go)<br>[internal/store/blob_test.go](../../../../sources/regent-vcs__re_gent/internal/store/blob_test.go)<br>[internal/store/hash_test.go](../../../../sources/regent-vcs__re_gent/internal/store/hash_test.go) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/regent-vcs__re_gent/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/regent-vcs__re_gent/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/regent-vcs__re_gent/CLAUDE.md) |
| docs | 5 | [README.md](../../../../sources/regent-vcs__re_gent/README.md)<br>[examples/bad-refactor/README.md](../../../../sources/regent-vcs__re_gent/examples/bad-refactor/README.md)<br>[docs/FAQ.md](../../../../sources/regent-vcs__re_gent/docs/FAQ.md)<br>[docs/shell-completion.md](../../../../sources/regent-vcs__re_gent/docs/shell-completion.md)<br>[docs/images/log-command-example.png](../../../../sources/regent-vcs__re_gent/docs/images/log-command-example.png) |
| config | 2 | [go.mod](../../../../sources/regent-vcs__re_gent/go.mod)<br>[Makefile](../../../../sources/regent-vcs__re_gent/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 35 | [test/integration_test.go](../../../../sources/regent-vcs__re_gent/test/integration_test.go)<br>[test/phase1_acceptance_test.go](../../../../sources/regent-vcs__re_gent/test/phase1_acceptance_test.go)<br>[test/session_branching_test.go](../../../../sources/regent-vcs__re_gent/test/session_branching_test.go)<br>[scripts/test-release.sh](../../../../sources/regent-vcs__re_gent/scripts/test-release.sh)<br>[internal/treediff/treediff_test.go](../../../../sources/regent-vcs__re_gent/internal/treediff/treediff_test.go)<br>[internal/store/blame_test.go](../../../../sources/regent-vcs__re_gent/internal/store/blame_test.go) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/regent-vcs__re_gent/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/regent-vcs__re_gent/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/regent-vcs__re_gent/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `cmd/rgt/main.go`, `go.mod`, `Makefile`.
2. Trace execution through entrypoints: `cmd/rgt/main.go`.
3. Map agent/tool runtime through: `internal/hook/hook_test.go`, `internal/hook/hook.go`, `internal/hook/payload.go`.
4. Inspect retrieval/memory/indexing through: `internal/index/index_test.go`, `internal/index/index.go`, `internal/index/messages_test.go`.
5. Verify behavior through test/eval files: `test/integration_test.go`, `test/phase1_acceptance_test.go`, `test/session_branching_test.go`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Local clone structure analysis 132 files, 42 directories.. 핵심 구조 신호는 go.mod, Makefile, README.md, CLAUDE.md, LICENSE, tests이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing입니다.
