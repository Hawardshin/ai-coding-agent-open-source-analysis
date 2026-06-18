# fujibee/agmsg Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Cross-vendor messaging for CLI AI coding agents — let Claude Code, Codex, Gemini & Copilot talk to each other in one team. Bash + SQLite, no daemon, no framework.

## 요약

- 조사 단위: `sources/fujibee__agmsg` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 95 files, 13 directories, depth score 93, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

코딩 에이전트/IDE 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=bin/agmsg.js이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 coding-agent reference implementation이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | fujibee/agmsg |
| Topic | Coding Agent and IDE / 코딩 에이전트/IDE |
| Region | global |
| Language | Shell |
| Stars | 654 |
| Forks | 47 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/fujibee__agmsg](../../../../sources/fujibee__agmsg) |
| Existing report | [reports/global-trending/repositories/fujibee__agmsg.md](../../../global-trending/repositories/fujibee__agmsg.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 95 / 13 |
| Max observed depth | 3 |
| Top directories | .claude-plugin, .github, bin, docs, scripts, templates, tests |
| Top extensions | .sh: 34, .md: 21, .bats: 16, (none): 5, .json: 3, .ps1: 3, .yml: 3, .png: 2, .svg: 2, .bash: 1, .gif: 1, .html: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 22 |
| tests | validation surface | 19 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| scripts | top-level component | 1 |
| templates | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | test | node bin/agmsg.js --version |
| entrypoint | package.json bin | agmsg.js | bin/agmsg.js |


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
| entrypoints | [bin/agmsg.js](../../../../sources/fujibee__agmsg/bin/agmsg.js) | entrypoints signal |
| agentRuntime | [SKILL.md](../../../../sources/fujibee__agmsg/SKILL.md) | agentRuntime signal |
| agentRuntime | [scripts/hook.sh](../../../../sources/fujibee__agmsg/scripts/hook.sh) | agentRuntime signal |
| eval | [tests/smoke_windows_powershell.ps1](../../../../sources/fujibee__agmsg/tests/smoke_windows_powershell.ps1) | eval signal |
| eval | [tests/test_actas_integration.bats](../../../../sources/fujibee__agmsg/tests/test_actas_integration.bats) | eval signal |
| eval | [tests/test_actas_lock.bats](../../../../sources/fujibee__agmsg/tests/test_actas_lock.bats) | eval signal |
| eval | [tests/test_config.bats](../../../../sources/fujibee__agmsg/tests/test_config.bats) | eval signal |
| config | [package.json](../../../../sources/fujibee__agmsg/package.json) | config support |
| ci | [.github/workflows/release.yml](../../../../sources/fujibee__agmsg/.github/workflows/release.yml) | ci support |
| ci | [.github/workflows/tests.yml](../../../../sources/fujibee__agmsg/.github/workflows/tests.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [bin/agmsg.js](../../../../sources/fujibee__agmsg/bin/agmsg.js) |
| agentRuntime | 2 | [SKILL.md](../../../../sources/fujibee__agmsg/SKILL.md)<br>[scripts/hook.sh](../../../../sources/fujibee__agmsg/scripts/hook.sh) |
| mcp | 0 | not obvious |
| retrieval | 1 | [docs/index.html](../../../../sources/fujibee__agmsg/docs/index.html) |
| spec | 5 | [ARCHITECTURE.md](../../../../sources/fujibee__agmsg/ARCHITECTURE.md)<br>[docs/design.md](../../../../sources/fujibee__agmsg/docs/design.md)<br>[docs/spec/driver-interface.md](../../../../sources/fujibee__agmsg/docs/spec/driver-interface.md)<br>[docs/adr/0001-storage-driver-pluginization.md](../../../../sources/fujibee__agmsg/docs/adr/0001-storage-driver-pluginization.md)<br>[docs/adr/template.md](../../../../sources/fujibee__agmsg/docs/adr/template.md) |
| eval | 20 | [tests/smoke_windows_powershell.ps1](../../../../sources/fujibee__agmsg/tests/smoke_windows_powershell.ps1)<br>[tests/test_actas_integration.bats](../../../../sources/fujibee__agmsg/tests/test_actas_integration.bats)<br>[tests/test_actas_lock.bats](../../../../sources/fujibee__agmsg/tests/test_actas_lock.bats)<br>[tests/test_config.bats](../../../../sources/fujibee__agmsg/tests/test_config.bats)<br>[tests/test_delivery.bats](../../../../sources/fujibee__agmsg/tests/test_delivery.bats)<br>[tests/test_despawn.bats](../../../../sources/fujibee__agmsg/tests/test_despawn.bats)<br>[tests/test_dispatch.bats](../../../../sources/fujibee__agmsg/tests/test_dispatch.bats)<br>[tests/test_helper.bash](../../../../sources/fujibee__agmsg/tests/test_helper.bash) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/release.yml](../../../../sources/fujibee__agmsg/.github/workflows/release.yml)<br>[.github/workflows/tests.yml](../../../../sources/fujibee__agmsg/.github/workflows/tests.yml)<br>[.github/workflows/verify-versions.yml](../../../../sources/fujibee__agmsg/.github/workflows/verify-versions.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 16 | [README.md](../../../../sources/fujibee__agmsg/README.md)<br>[docs/actas.md](../../../../sources/fujibee__agmsg/docs/actas.md)<br>[docs/agmsg-demo.gif](../../../../sources/fujibee__agmsg/docs/agmsg-demo.gif)<br>[docs/agmsg-favicon.svg](../../../../sources/fujibee__agmsg/docs/agmsg-favicon.svg)<br>[docs/agmsg-icon-240.png](../../../../sources/fujibee__agmsg/docs/agmsg-icon-240.png)<br>[docs/agmsg-icon.svg](../../../../sources/fujibee__agmsg/docs/agmsg-icon.svg)<br>[docs/CNAME](../../../../sources/fujibee__agmsg/docs/CNAME)<br>[docs/design.md](../../../../sources/fujibee__agmsg/docs/design.md) |
| config | 1 | [package.json](../../../../sources/fujibee__agmsg/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 20 | [tests/smoke_windows_powershell.ps1](../../../../sources/fujibee__agmsg/tests/smoke_windows_powershell.ps1)<br>[tests/test_actas_integration.bats](../../../../sources/fujibee__agmsg/tests/test_actas_integration.bats)<br>[tests/test_actas_lock.bats](../../../../sources/fujibee__agmsg/tests/test_actas_lock.bats)<br>[tests/test_config.bats](../../../../sources/fujibee__agmsg/tests/test_config.bats)<br>[tests/test_delivery.bats](../../../../sources/fujibee__agmsg/tests/test_delivery.bats)<br>[tests/test_despawn.bats](../../../../sources/fujibee__agmsg/tests/test_despawn.bats) |
| CI workflows | 3 | [.github/workflows/release.yml](../../../../sources/fujibee__agmsg/.github/workflows/release.yml)<br>[.github/workflows/tests.yml](../../../../sources/fujibee__agmsg/.github/workflows/tests.yml)<br>[.github/workflows/verify-versions.yml](../../../../sources/fujibee__agmsg/.github/workflows/verify-versions.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `bin/agmsg.js`, `SKILL.md`, `scripts/hook.sh`.
2. Trace execution through entrypoints: `bin/agmsg.js`.
3. Map agent/tool runtime through: `SKILL.md`, `scripts/hook.sh`.
4. Inspect retrieval/memory/indexing through: `docs/index.html`.
5. Verify behavior through test/eval files: `tests/smoke_windows_powershell.ps1`, `tests/test_actas_integration.bats`, `tests/test_actas_lock.bats`.

## Existing Repository Insight

코딩 에이전트/IDE 관점에서 Cross vendor messaging for CLI AI coding agents — let Claude Code, Codex, Gemini & Copilot talk to each other in one tea. 핵심 구조 신호는 Shell, package.json, README.md, LICENSE, tests, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 코딩 에이전트/IDE 레포입니다. 활용 관점은 coding-agent reference implementation이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
