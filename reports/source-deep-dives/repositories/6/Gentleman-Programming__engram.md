# gentleman-programming/engram Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 436 files, 138 directories.

## 요약

- 조사 단위: `sources/Gentleman-Programming__engram` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 436 files, 138 directories, depth score 134, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=plugin/pi/mcp-template.json, plugin/claude-code/.mcp.json, openspec/specs/mcp-project-resolution/spec.md이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | gentleman-programming/engram |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/Gentleman-Programming__engram](../../../../sources/Gentleman-Programming__engram) |
| Existing report | [reports/clone-structures/gentleman-programming__engram.md](../../../clone-structures/gentleman-programming__engram.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 436 / 138 |
| Max observed depth | 7 |
| Top directories | .claude-plugin, .devcontainer, .engram, .github, .windsurf, assets, cmd, docker, docs, internal, openspec, plugin, skills, tools |
| Top extensions | .md: 196, .go: 144, .yml: 15, .json: 14, .png: 11, (none): 10, .sh: 8, .svg: 8, .ts: 6, .gz: 5, .js: 5, .mjs: 5 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 39 |
| cmd/engram | cmd workspace | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| cmd | source boundary | 1 |
| docker | documentation surface | 1 |
| internal | top-level component | 1 |
| openspec | top-level component | 1 |
| plugin | top-level component | 1 |
| skills | top-level component | 1 |
| tools | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | templ | make templ |


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
| mcp | [plugin/pi/mcp-template.json](../../../../sources/Gentleman-Programming__engram/plugin/pi/mcp-template.json) | mcp signal |
| mcp | [plugin/claude-code/.mcp.json](../../../../sources/Gentleman-Programming__engram/plugin/claude-code/.mcp.json) | mcp signal |
| mcp | [openspec/specs/mcp-project-resolution/spec.md](../../../../sources/Gentleman-Programming__engram/openspec/specs/mcp-project-resolution/spec.md) | mcp signal |
| mcp | [openspec/changes/doctor-diagnostic/specs/mcp-project-resolution/spec.md](../../../../sources/Gentleman-Programming__engram/openspec/changes/doctor-diagnostic/specs/mcp-project-resolution/spec.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/Gentleman-Programming__engram/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/repair-missing-session-directory.sh](../../../../sources/Gentleman-Programming__engram/tools/repair-missing-session-directory.sh) | agentRuntime signal |
| agentRuntime | [tools/tools.go](../../../../sources/Gentleman-Programming__engram/tools/tools.go) | agentRuntime signal |
| agentRuntime | [skills/catalog.md](../../../../sources/Gentleman-Programming__engram/skills/catalog.md) | agentRuntime signal |
| entrypoints | [plugin/obsidian/src/main.ts](../../../../sources/Gentleman-Programming__engram/plugin/obsidian/src/main.ts) | entrypoints signal |
| entrypoints | [internal/server/server.go](../../../../sources/Gentleman-Programming__engram/internal/server/server.go) | entrypoints signal |
| entrypoints | [cmd/engram/main.go](../../../../sources/Gentleman-Programming__engram/cmd/engram/main.go) | entrypoints signal |
| config | [go.mod](../../../../sources/Gentleman-Programming__engram/go.mod) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [plugin/obsidian/src/main.ts](../../../../sources/Gentleman-Programming__engram/plugin/obsidian/src/main.ts)<br>[internal/server/server.go](../../../../sources/Gentleman-Programming__engram/internal/server/server.go)<br>[cmd/engram/main.go](../../../../sources/Gentleman-Programming__engram/cmd/engram/main.go) |
| agentRuntime | 59 | [AGENTS.md](../../../../sources/Gentleman-Programming__engram/AGENTS.md)<br>[tools/repair-missing-session-directory.sh](../../../../sources/Gentleman-Programming__engram/tools/repair-missing-session-directory.sh)<br>[tools/tools.go](../../../../sources/Gentleman-Programming__engram/tools/tools.go)<br>[skills/catalog.md](../../../../sources/Gentleman-Programming__engram/skills/catalog.md)<br>[skills/visual-language/SKILL.md](../../../../sources/Gentleman-Programming__engram/skills/visual-language/SKILL.md)<br>[skills/ui-elements/SKILL.md](../../../../sources/Gentleman-Programming__engram/skills/ui-elements/SKILL.md)<br>[skills/tui-quality/SKILL.md](../../../../sources/Gentleman-Programming__engram/skills/tui-quality/SKILL.md)<br>[skills/testing-coverage/SKILL.md](../../../../sources/Gentleman-Programming__engram/skills/testing-coverage/SKILL.md) |
| mcp | 19 | [plugin/pi/mcp-template.json](../../../../sources/Gentleman-Programming__engram/plugin/pi/mcp-template.json)<br>[plugin/claude-code/.mcp.json](../../../../sources/Gentleman-Programming__engram/plugin/claude-code/.mcp.json)<br>[openspec/specs/mcp-project-resolution/spec.md](../../../../sources/Gentleman-Programming__engram/openspec/specs/mcp-project-resolution/spec.md)<br>[openspec/changes/doctor-diagnostic/specs/mcp-project-resolution/spec.md](../../../../sources/Gentleman-Programming__engram/openspec/changes/doctor-diagnostic/specs/mcp-project-resolution/spec.md)<br>[openspec/changes/archive/2026-04-24-mcp-project-autodetection/apply-progress.md](../../../../sources/Gentleman-Programming__engram/openspec/changes/archive/2026-04-24-mcp-project-autodetection/apply-progress.md)<br>[openspec/changes/archive/2026-04-24-mcp-project-autodetection/design.md](../../../../sources/Gentleman-Programming__engram/openspec/changes/archive/2026-04-24-mcp-project-autodetection/design.md)<br>[openspec/changes/archive/2026-04-24-mcp-project-autodetection/proposal.md](../../../../sources/Gentleman-Programming__engram/openspec/changes/archive/2026-04-24-mcp-project-autodetection/proposal.md)<br>[openspec/changes/archive/2026-04-24-mcp-project-autodetection/tasks.md](../../../../sources/Gentleman-Programming__engram/openspec/changes/archive/2026-04-24-mcp-project-autodetection/tasks.md) |
| retrieval | 58 | [skills/memory-protocol/SKILL.md](../../../../sources/Gentleman-Programming__engram/skills/memory-protocol/SKILL.md)<br>[plugin/pi/index.ts](../../../../sources/Gentleman-Programming__engram/plugin/pi/index.ts)<br>[plugin/pi/memory-tool-chrome.js](../../../../sources/Gentleman-Programming__engram/plugin/pi/memory-tool-chrome.js)<br>[plugin/pi/test/index-source.test.mjs](../../../../sources/Gentleman-Programming__engram/plugin/pi/test/index-source.test.mjs)<br>[plugin/pi/test/memory-tool-chrome.test.mjs](../../../../sources/Gentleman-Programming__engram/plugin/pi/test/memory-tool-chrome.test.mjs)<br>[plugin/claude-code/skills/memory/SKILL.md](../../../../sources/Gentleman-Programming__engram/plugin/claude-code/skills/memory/SKILL.md)<br>[openspec/changes/memory-conflict-surfacing-cloud-sync/design.md](../../../../sources/Gentleman-Programming__engram/openspec/changes/memory-conflict-surfacing-cloud-sync/design.md)<br>[openspec/changes/memory-conflict-surfacing-cloud-sync/exploration.md](../../../../sources/Gentleman-Programming__engram/openspec/changes/memory-conflict-surfacing-cloud-sync/exploration.md) |
| spec | 53 | [skills/architecture-guardrails/SKILL.md](../../../../sources/Gentleman-Programming__engram/skills/architecture-guardrails/SKILL.md)<br>[openspec/specs/obsidian-plugin/spec.md](../../../../sources/Gentleman-Programming__engram/openspec/specs/obsidian-plugin/spec.md)<br>[openspec/specs/obsidian-export/spec.md](../../../../sources/Gentleman-Programming__engram/openspec/specs/obsidian-export/spec.md)<br>[openspec/specs/mcp-project-resolution/spec.md](../../../../sources/Gentleman-Programming__engram/openspec/specs/mcp-project-resolution/spec.md)<br>[openspec/specs/cloud-sync-audit/spec.md](../../../../sources/Gentleman-Programming__engram/openspec/specs/cloud-sync-audit/spec.md)<br>[openspec/specs/cloud-dashboard/spec.md](../../../../sources/Gentleman-Programming__engram/openspec/specs/cloud-dashboard/spec.md)<br>[openspec/specs/cloud-autosync/spec.md](../../../../sources/Gentleman-Programming__engram/openspec/specs/cloud-autosync/spec.md)<br>[openspec/changes/memory-conflict-surfacing-cloud-sync/design.md](../../../../sources/Gentleman-Programming__engram/openspec/changes/memory-conflict-surfacing-cloud-sync/design.md) |
| eval | 109 | [skills/tui-quality/SKILL.md](../../../../sources/Gentleman-Programming__engram/skills/tui-quality/SKILL.md)<br>[plugin/assets_test.go](../../../../sources/Gentleman-Programming__engram/plugin/assets_test.go)<br>[plugin/hooks_quoting_test.go](../../../../sources/Gentleman-Programming__engram/plugin/hooks_quoting_test.go)<br>[plugin/pi/test/compaction-recovery.test.mjs](../../../../sources/Gentleman-Programming__engram/plugin/pi/test/compaction-recovery.test.mjs)<br>[plugin/pi/test/index-source.test.mjs](../../../../sources/Gentleman-Programming__engram/plugin/pi/test/index-source.test.mjs)<br>[plugin/pi/test/memory-tool-chrome.test.mjs](../../../../sources/Gentleman-Programming__engram/plugin/pi/test/memory-tool-chrome.test.mjs)<br>[plugin/pi/test/private-redaction.test.mjs](../../../../sources/Gentleman-Programming__engram/plugin/pi/test/private-redaction.test.mjs)<br>[openspec/specs/obsidian-plugin/spec.md](../../../../sources/Gentleman-Programming__engram/openspec/specs/obsidian-plugin/spec.md) |
| security | 30 | [SECURITY.md](../../../../sources/Gentleman-Programming__engram/SECURITY.md)<br>[openspec/specs/cloud-sync-audit/spec.md](../../../../sources/Gentleman-Programming__engram/openspec/specs/cloud-sync-audit/spec.md)<br>[openspec/changes/memory-conflict-audit/design.md](../../../../sources/Gentleman-Programming__engram/openspec/changes/memory-conflict-audit/design.md)<br>[openspec/changes/memory-conflict-audit/exploration.md](../../../../sources/Gentleman-Programming__engram/openspec/changes/memory-conflict-audit/exploration.md)<br>[openspec/changes/memory-conflict-audit/proposal.md](../../../../sources/Gentleman-Programming__engram/openspec/changes/memory-conflict-audit/proposal.md)<br>[openspec/changes/memory-conflict-audit/spec.md](../../../../sources/Gentleman-Programming__engram/openspec/changes/memory-conflict-audit/spec.md)<br>[openspec/changes/memory-conflict-audit/tasks.md](../../../../sources/Gentleman-Programming__engram/openspec/changes/memory-conflict-audit/tasks.md)<br>[openspec/changes/memory-conflict-audit/verify-report.md](../../../../sources/Gentleman-Programming__engram/openspec/changes/memory-conflict-audit/verify-report.md) |
| ci | 6 | [.github/workflows/ci.yml](../../../../sources/Gentleman-Programming__engram/.github/workflows/ci.yml)<br>[.github/workflows/cloud-image.yml](../../../../sources/Gentleman-Programming__engram/.github/workflows/cloud-image.yml)<br>[.github/workflows/pr-check.yml](../../../../sources/Gentleman-Programming__engram/.github/workflows/pr-check.yml)<br>[.github/workflows/publish-pi.yml](../../../../sources/Gentleman-Programming__engram/.github/workflows/publish-pi.yml)<br>[.github/workflows/release.yml](../../../../sources/Gentleman-Programming__engram/.github/workflows/release.yml)<br>[.github/workflows/stale.yml](../../../../sources/Gentleman-Programming__engram/.github/workflows/stale.yml) |
| container | 4 | [docker-compose.beta.yml](../../../../sources/Gentleman-Programming__engram/docker-compose.beta.yml)<br>[docker-compose.cloud.yml](../../../../sources/Gentleman-Programming__engram/docker-compose.cloud.yml)<br>[docs/engram-cloud/docker-compose.ghcr.yml](../../../../sources/Gentleman-Programming__engram/docs/engram-cloud/docker-compose.ghcr.yml)<br>[docker/cloud/Dockerfile](../../../../sources/Gentleman-Programming__engram/docker/cloud/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/Gentleman-Programming__engram/AGENTS.md) |
| docs | 37 | [README.md](../../../../sources/Gentleman-Programming__engram/README.md)<br>[plugin/pi/README.md](../../../../sources/Gentleman-Programming__engram/plugin/pi/README.md)<br>[docs/AGENT-SETUP.md](../../../../sources/Gentleman-Programming__engram/docs/AGENT-SETUP.md)<br>[docs/ARCHITECTURE.md](../../../../sources/Gentleman-Programming__engram/docs/ARCHITECTURE.md)<br>[docs/BETA_TESTING.md](../../../../sources/Gentleman-Programming__engram/docs/BETA_TESTING.md)<br>[docs/CODEBASE-GUIDE.md](../../../../sources/Gentleman-Programming__engram/docs/CODEBASE-GUIDE.md)<br>[docs/COMPARISON.md](../../../../sources/Gentleman-Programming__engram/docs/COMPARISON.md)<br>[docs/DOCTOR.md](../../../../sources/Gentleman-Programming__engram/docs/DOCTOR.md) |
| config | 5 | [go.mod](../../../../sources/Gentleman-Programming__engram/go.mod)<br>[Makefile](../../../../sources/Gentleman-Programming__engram/Makefile)<br>[plugin/pi/package.json](../../../../sources/Gentleman-Programming__engram/plugin/pi/package.json)<br>[plugin/obsidian/package.json](../../../../sources/Gentleman-Programming__engram/plugin/obsidian/package.json)<br>[plugin/obsidian/tsconfig.json](../../../../sources/Gentleman-Programming__engram/plugin/obsidian/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 109 | [skills/tui-quality/SKILL.md](../../../../sources/Gentleman-Programming__engram/skills/tui-quality/SKILL.md)<br>[plugin/assets_test.go](../../../../sources/Gentleman-Programming__engram/plugin/assets_test.go)<br>[plugin/hooks_quoting_test.go](../../../../sources/Gentleman-Programming__engram/plugin/hooks_quoting_test.go)<br>[plugin/pi/test/compaction-recovery.test.mjs](../../../../sources/Gentleman-Programming__engram/plugin/pi/test/compaction-recovery.test.mjs)<br>[plugin/pi/test/index-source.test.mjs](../../../../sources/Gentleman-Programming__engram/plugin/pi/test/index-source.test.mjs)<br>[plugin/pi/test/memory-tool-chrome.test.mjs](../../../../sources/Gentleman-Programming__engram/plugin/pi/test/memory-tool-chrome.test.mjs) |
| CI workflows | 6 | [.github/workflows/ci.yml](../../../../sources/Gentleman-Programming__engram/.github/workflows/ci.yml)<br>[.github/workflows/cloud-image.yml](../../../../sources/Gentleman-Programming__engram/.github/workflows/cloud-image.yml)<br>[.github/workflows/pr-check.yml](../../../../sources/Gentleman-Programming__engram/.github/workflows/pr-check.yml)<br>[.github/workflows/publish-pi.yml](../../../../sources/Gentleman-Programming__engram/.github/workflows/publish-pi.yml)<br>[.github/workflows/release.yml](../../../../sources/Gentleman-Programming__engram/.github/workflows/release.yml)<br>[.github/workflows/stale.yml](../../../../sources/Gentleman-Programming__engram/.github/workflows/stale.yml) |
| Containers / deploy | 4 | [docker-compose.beta.yml](../../../../sources/Gentleman-Programming__engram/docker-compose.beta.yml)<br>[docker-compose.cloud.yml](../../../../sources/Gentleman-Programming__engram/docker-compose.cloud.yml)<br>[docs/engram-cloud/docker-compose.ghcr.yml](../../../../sources/Gentleman-Programming__engram/docs/engram-cloud/docker-compose.ghcr.yml)<br>[docker/cloud/Dockerfile](../../../../sources/Gentleman-Programming__engram/docker/cloud/Dockerfile) |
| Security / policy | 30 | [SECURITY.md](../../../../sources/Gentleman-Programming__engram/SECURITY.md)<br>[openspec/specs/cloud-sync-audit/spec.md](../../../../sources/Gentleman-Programming__engram/openspec/specs/cloud-sync-audit/spec.md)<br>[openspec/changes/memory-conflict-audit/design.md](../../../../sources/Gentleman-Programming__engram/openspec/changes/memory-conflict-audit/design.md)<br>[openspec/changes/memory-conflict-audit/exploration.md](../../../../sources/Gentleman-Programming__engram/openspec/changes/memory-conflict-audit/exploration.md)<br>[openspec/changes/memory-conflict-audit/proposal.md](../../../../sources/Gentleman-Programming__engram/openspec/changes/memory-conflict-audit/proposal.md)<br>[openspec/changes/memory-conflict-audit/spec.md](../../../../sources/Gentleman-Programming__engram/openspec/changes/memory-conflict-audit/spec.md) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/Gentleman-Programming__engram/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `plugin/pi/mcp-template.json`, `plugin/claude-code/.mcp.json`, `openspec/specs/mcp-project-resolution/spec.md`.
2. Trace execution through entrypoints: `plugin/obsidian/src/main.ts`, `internal/server/server.go`, `cmd/engram/main.go`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/repair-missing-session-directory.sh`, `tools/tools.go`.
4. Inspect retrieval/memory/indexing through: `skills/memory-protocol/SKILL.md`, `plugin/pi/index.ts`, `plugin/pi/memory-tool-chrome.js`.
5. Verify behavior through test/eval files: `skills/tui-quality/SKILL.md`, `plugin/assets_test.go`, `plugin/hooks_quoting_test.go`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 436 files, 138 directories.. 핵심 구조 신호는 go.mod, Makefile, README.md, AGENTS.md, LICENSE, mcp이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
