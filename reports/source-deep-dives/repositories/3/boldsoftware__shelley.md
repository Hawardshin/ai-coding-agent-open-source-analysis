# boldsoftware/shelley Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Shelley is a coding agent

## 요약

- 조사 단위: `sources/boldsoftware__shelley` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 570 files, 81 directories, depth score 112, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENT_TESTING.md, AGENTS.md, HOOKS.md이고, 의존성 단서는 openai, cobra, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | boldsoftware/shelley |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 503 |
| Forks | 85 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/boldsoftware__shelley](../../../../sources/boldsoftware__shelley) |
| Existing report | [reports/global-trending/repositories/boldsoftware__shelley.md](../../../global-trending/repositories/boldsoftware__shelley.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 570 / 81 |
| Max observed depth | 6 |
| Top directories | .github, bin, claudetool, client, cmd, db, dtach, featureflags, gitstate, lazycue, llm, loop, models, modelsources, scripts, server, skills, slug, subpub, templates |
| Top extensions | .go: 264, .ts: 73, .tsx: 65, .json: 50, .sql: 40, .md: 21, (none): 11, .txt: 7, .js: 6, .sh: 6, .yml: 4, .html: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| server | source boundary | 4 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| claudetool | top-level component | 1 |
| client | source boundary | 1 |
| cmd | source boundary | 1 |
| cmd/shelley | cmd workspace | 1 |
| cmd/upgoer5check | cmd workspace | 1 |
| db | top-level component | 1 |
| dtach | top-level component | 1 |
| featureflags | top-level component | 1 |
| gitstate | top-level component | 1 |
| lazycue | top-level component | 1 |
| llm | top-level component | 1 |
| loop | top-level component | 1 |
| models | top-level component | 1 |
| modelsources | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| utility | Makefile | templates | make templates |
| build | Makefile | build | make build |
| build | Makefile | build-linux | make build-linux |
| build | Makefile | build-linux-aarch64 | make build-linux-aarch64 |
| build | Makefile | build-linux-x86 | make build-linux-x86 |
| utility | Makefile | ui | make ui |
| test | Makefile | test-go | make test-go |
| test | Makefile | test-e2e | make test-e2e |
| test | Makefile | test-e2e-headed | make test-e2e-headed |
| test | Makefile | test-e2e-ui | make test-e2e-ui |
| test | Makefile | test | make test |
| test | Makefile | serve-test | make serve-test |
| serve-dev | Makefile | serve | make serve |
| utility | Makefile | clean | make clean |
| utility | Makefile | demo | make demo |
| utility | Makefile | help | make help |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | cobra |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [AGENT_TESTING.md](../../../../sources/boldsoftware__shelley/AGENT_TESTING.md) | agentRuntime signal |
| agentRuntime | [AGENTS.md](../../../../sources/boldsoftware__shelley/AGENTS.md) | agentRuntime signal |
| agentRuntime | [HOOKS.md](../../../../sources/boldsoftware__shelley/HOOKS.md) | agentRuntime signal |
| agentRuntime | [ui/src/i18n/context.tsx](../../../../sources/boldsoftware__shelley/ui/src/i18n/context.tsx) | agentRuntime signal |
| entrypoints | [ui/src/App.tsx](../../../../sources/boldsoftware__shelley/ui/src/App.tsx) | entrypoints signal |
| entrypoints | [ui/src/index.html](../../../../sources/boldsoftware__shelley/ui/src/index.html) | entrypoints signal |
| entrypoints | [ui/src/main.tsx](../../../../sources/boldsoftware__shelley/ui/src/main.tsx) | entrypoints signal |
| entrypoints | [templates/go/srv/server.go](../../../../sources/boldsoftware__shelley/templates/go/srv/server.go) | entrypoints signal |
| instruction | [ui/src/components/AGENTS.md](../../../../sources/boldsoftware__shelley/ui/src/components/AGENTS.md) | instruction signal |
| instruction | [templates/go/AGENTS.md](../../../../sources/boldsoftware__shelley/templates/go/AGENTS.md) | instruction signal |
| config | [go.mod](../../../../sources/boldsoftware__shelley/go.mod) | config signal |
| config | [Makefile](../../../../sources/boldsoftware__shelley/Makefile) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 12 | [ui/src/App.tsx](../../../../sources/boldsoftware__shelley/ui/src/App.tsx)<br>[ui/src/index.html](../../../../sources/boldsoftware__shelley/ui/src/index.html)<br>[ui/src/main.tsx](../../../../sources/boldsoftware__shelley/ui/src/main.tsx)<br>[templates/go/srv/server.go](../../../../sources/boldsoftware__shelley/templates/go/srv/server.go)<br>[templates/go/cmd/srv/main.go](../../../../sources/boldsoftware__shelley/templates/go/cmd/srv/main.go)<br>[server/server.go](../../../../sources/boldsoftware__shelley/server/server.go)<br>[lazycue/cmd/lazycue/main.go](../../../../sources/boldsoftware__shelley/lazycue/cmd/lazycue/main.go)<br>[dtach/server.go](../../../../sources/boldsoftware__shelley/dtach/server.go) |
| agentRuntime | 23 | [AGENT_TESTING.md](../../../../sources/boldsoftware__shelley/AGENT_TESTING.md)<br>[AGENTS.md](../../../../sources/boldsoftware__shelley/AGENTS.md)<br>[HOOKS.md](../../../../sources/boldsoftware__shelley/HOOKS.md)<br>[ui/src/i18n/context.tsx](../../../../sources/boldsoftware__shelley/ui/src/i18n/context.tsx)<br>[ui/src/hooks/useDraftAutosave.ts](../../../../sources/boldsoftware__shelley/ui/src/hooks/useDraftAutosave.ts)<br>[ui/src/hooks/useMonacoVim.ts](../../../../sources/boldsoftware__shelley/ui/src/hooks/useMonacoVim.ts)<br>[ui/src/components/AGENTS.md](../../../../sources/boldsoftware__shelley/ui/src/components/AGENTS.md)<br>[ui/e2e/tool-components.spec.ts](../../../../sources/boldsoftware__shelley/ui/e2e/tool-components.spec.ts) |
| mcp | 0 | not obvious |
| retrieval | 4 | [ui/src/index.html](../../../../sources/boldsoftware__shelley/ui/src/index.html)<br>[ui/src/services/notifications/index.ts](../../../../sources/boldsoftware__shelley/ui/src/services/notifications/index.ts)<br>[ui/src/i18n/index.ts](../../../../sources/boldsoftware__shelley/ui/src/i18n/index.ts)<br>[db/schema/029-messages-conv-type-seq-index.sql](../../../../sources/boldsoftware__shelley/db/schema/029-messages-conv-type-seq-index.sql) |
| spec | 16 | [ARCHITECTURE.md](../../../../sources/boldsoftware__shelley/ARCHITECTURE.md)<br>[ui/e2e/ansi-rendering.spec.ts](../../../../sources/boldsoftware__shelley/ui/e2e/ansi-rendering.spec.ts)<br>[ui/e2e/cancellation.spec.ts](../../../../sources/boldsoftware__shelley/ui/e2e/cancellation.spec.ts)<br>[ui/e2e/conversation-cache.spec.ts](../../../../sources/boldsoftware__shelley/ui/e2e/conversation-cache.spec.ts)<br>[ui/e2e/conversation-grouping.spec.ts](../../../../sources/boldsoftware__shelley/ui/e2e/conversation-grouping.spec.ts)<br>[ui/e2e/conversation-sort-bucketing.spec.ts](../../../../sources/boldsoftware__shelley/ui/e2e/conversation-sort-bucketing.spec.ts)<br>[ui/e2e/conversation.spec.ts](../../../../sources/boldsoftware__shelley/ui/e2e/conversation.spec.ts)<br>[ui/e2e/diff-viewer-find.spec.ts](../../../../sources/boldsoftware__shelley/ui/e2e/diff-viewer-find.spec.ts) |
| eval | 165 | [test_ci.sh](../../../../sources/boldsoftware__shelley/test_ci.sh)<br>[test_manual.sh](../../../../sources/boldsoftware__shelley/test_manual.sh)<br>[ui/src/utils/ansi.test.ts](../../../../sources/boldsoftware__shelley/ui/src/utils/ansi.test.ts)<br>[ui/src/utils/conversationMarkdown.test.ts](../../../../sources/boldsoftware__shelley/ui/src/utils/conversationMarkdown.test.ts)<br>[ui/src/utils/conversationSort.test.ts](../../../../sources/boldsoftware__shelley/ui/src/utils/conversationSort.test.ts)<br>[ui/src/utils/inlineText.test.runner.ts](../../../../sources/boldsoftware__shelley/ui/src/utils/inlineText.test.runner.ts)<br>[ui/src/utils/inlineText.test.ts](../../../../sources/boldsoftware__shelley/ui/src/utils/inlineText.test.ts)<br>[ui/src/utils/linkify.test.runner.ts](../../../../sources/boldsoftware__shelley/ui/src/utils/linkify.test.runner.ts) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/publish-version-metadata.yml](../../../../sources/boldsoftware__shelley/.github/workflows/publish-version-metadata.yml)<br>[.github/workflows/release.yml](../../../../sources/boldsoftware__shelley/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/boldsoftware__shelley/.github/workflows/test.yml) |
| container | 0 | not obvious |
| instruction | 3 | [AGENTS.md](../../../../sources/boldsoftware__shelley/AGENTS.md)<br>[ui/src/components/AGENTS.md](../../../../sources/boldsoftware__shelley/ui/src/components/AGENTS.md)<br>[templates/go/AGENTS.md](../../../../sources/boldsoftware__shelley/templates/go/AGENTS.md) |
| docs | 8 | [README.md](../../../../sources/boldsoftware__shelley/README.md)<br>[ui/lazycue/README.md](../../../../sources/boldsoftware__shelley/ui/lazycue/README.md)<br>[ui/e2e/README.md](../../../../sources/boldsoftware__shelley/ui/e2e/README.md)<br>[templates/go/README.md](../../../../sources/boldsoftware__shelley/templates/go/README.md)<br>[loop/README.md](../../../../sources/boldsoftware__shelley/loop/README.md)<br>[lazycue/README.md](../../../../sources/boldsoftware__shelley/lazycue/README.md)<br>[db/README.md](../../../../sources/boldsoftware__shelley/db/README.md)<br>[claudetool/browse/README.md](../../../../sources/boldsoftware__shelley/claudetool/browse/README.md) |
| config | 7 | [go.mod](../../../../sources/boldsoftware__shelley/go.mod)<br>[Makefile](../../../../sources/boldsoftware__shelley/Makefile)<br>[ui/package.json](../../../../sources/boldsoftware__shelley/ui/package.json)<br>[ui/tsconfig.json](../../../../sources/boldsoftware__shelley/ui/tsconfig.json)<br>[templates/go/go.mod](../../../../sources/boldsoftware__shelley/templates/go/go.mod)<br>[templates/go/Makefile](../../../../sources/boldsoftware__shelley/templates/go/Makefile)<br>[lazycue/go.mod](../../../../sources/boldsoftware__shelley/lazycue/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 165 | [test_ci.sh](../../../../sources/boldsoftware__shelley/test_ci.sh)<br>[test_manual.sh](../../../../sources/boldsoftware__shelley/test_manual.sh)<br>[ui/src/utils/ansi.test.ts](../../../../sources/boldsoftware__shelley/ui/src/utils/ansi.test.ts)<br>[ui/src/utils/conversationMarkdown.test.ts](../../../../sources/boldsoftware__shelley/ui/src/utils/conversationMarkdown.test.ts)<br>[ui/src/utils/conversationSort.test.ts](../../../../sources/boldsoftware__shelley/ui/src/utils/conversationSort.test.ts)<br>[ui/src/utils/inlineText.test.runner.ts](../../../../sources/boldsoftware__shelley/ui/src/utils/inlineText.test.runner.ts) |
| CI workflows | 3 | [.github/workflows/publish-version-metadata.yml](../../../../sources/boldsoftware__shelley/.github/workflows/publish-version-metadata.yml)<br>[.github/workflows/release.yml](../../../../sources/boldsoftware__shelley/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/boldsoftware__shelley/.github/workflows/test.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/boldsoftware__shelley/AGENTS.md)<br>[ui/src/components/AGENTS.md](../../../../sources/boldsoftware__shelley/ui/src/components/AGENTS.md)<br>[templates/go/AGENTS.md](../../../../sources/boldsoftware__shelley/templates/go/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `AGENT_TESTING.md`, `AGENTS.md`, `HOOKS.md`.
2. Trace execution through entrypoints: `ui/src/App.tsx`, `ui/src/index.html`, `ui/src/main.tsx`.
3. Map agent/tool runtime through: `AGENT_TESTING.md`, `AGENTS.md`, `HOOKS.md`.
4. Inspect retrieval/memory/indexing through: `ui/src/index.html`, `ui/src/services/notifications/index.ts`, `ui/src/i18n/index.ts`.
5. Verify behavior through test/eval files: `test_ci.sh`, `test_manual.sh`, `ui/src/utils/ansi.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Shelley is a coding agent. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, AGENTS.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
