# openai/codex-plugin-cc Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 61 files, 20 directories.

## 요약

- 조사 단위: `sources/openai__codex-plugin-cc` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 61 files, 20 directories, depth score 72, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=plugins/codex/skills/gpt-5-4-prompting/SKILL.md, plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-antipatterns.md, plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-recipes.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | openai/codex-plugin-cc |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/openai__codex-plugin-cc](../../../../sources/openai__codex-plugin-cc) |
| Existing report | [reports/clone-structures/openai__codex-plugin-cc.md](../../../clone-structures/openai__codex-plugin-cc.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 61 / 20 |
| Max observed depth | 6 |
| Top directories | .claude-plugin, .github, plugins, scripts, tests |
| Top extensions | .mjs: 29, .md: 18, .json: 7, (none): 5, .ts: 1, .yml: 1 |
| Source patterns | agent/tool runtime, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 11 |
| .github | ci surface | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | bump-version | node scripts/bump-version.mjs |
| quality | package.json | check-version | node scripts/bump-version.mjs --check |
| serve-dev | package.json | prebuild | mkdir -p plugins/codex/.generated/app-server-types && codex app-server generate-ts --out plugins/codex/.generated/app-server-types |
| serve-dev | package.json | build | tsc -p tsconfig.app-server.json |
| test | package.json | test | node --test tests/*.test.mjs |


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
| agentRuntime | [plugins/codex/skills/gpt-5-4-prompting/SKILL.md](../../../../sources/openai__codex-plugin-cc/plugins/codex/skills/gpt-5-4-prompting/SKILL.md) | agentRuntime signal |
| agentRuntime | [plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-antipatterns.md](../../../../sources/openai__codex-plugin-cc/plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-antipatterns.md) | agentRuntime signal |
| agentRuntime | [plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-recipes.md](../../../../sources/openai__codex-plugin-cc/plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-recipes.md) | agentRuntime signal |
| agentRuntime | [plugins/codex/skills/gpt-5-4-prompting/references/prompt-blocks.md](../../../../sources/openai__codex-plugin-cc/plugins/codex/skills/gpt-5-4-prompting/references/prompt-blocks.md) | agentRuntime signal |
| config | [package.json](../../../../sources/openai__codex-plugin-cc/package.json) | config signal |
| ci | [.github/workflows/pull-request-ci.yml](../../../../sources/openai__codex-plugin-cc/.github/workflows/pull-request-ci.yml) | ci support |
| eval | [tests/broker-endpoint.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/broker-endpoint.test.mjs) | eval support |
| eval | [tests/bump-version.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/bump-version.test.mjs) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 8 | [plugins/codex/skills/gpt-5-4-prompting/SKILL.md](../../../../sources/openai__codex-plugin-cc/plugins/codex/skills/gpt-5-4-prompting/SKILL.md)<br>[plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-antipatterns.md](../../../../sources/openai__codex-plugin-cc/plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-antipatterns.md)<br>[plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-recipes.md](../../../../sources/openai__codex-plugin-cc/plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-recipes.md)<br>[plugins/codex/skills/gpt-5-4-prompting/references/prompt-blocks.md](../../../../sources/openai__codex-plugin-cc/plugins/codex/skills/gpt-5-4-prompting/references/prompt-blocks.md)<br>[plugins/codex/skills/codex-result-handling/SKILL.md](../../../../sources/openai__codex-plugin-cc/plugins/codex/skills/codex-result-handling/SKILL.md)<br>[plugins/codex/skills/codex-cli-runtime/SKILL.md](../../../../sources/openai__codex-plugin-cc/plugins/codex/skills/codex-cli-runtime/SKILL.md)<br>[plugins/codex/hooks/hooks.json](../../../../sources/openai__codex-plugin-cc/plugins/codex/hooks/hooks.json)<br>[plugins/codex/agents/codex-rescue.md](../../../../sources/openai__codex-plugin-cc/plugins/codex/agents/codex-rescue.md) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 10 | [tests/broker-endpoint.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/broker-endpoint.test.mjs)<br>[tests/bump-version.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/bump-version.test.mjs)<br>[tests/commands.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/commands.test.mjs)<br>[tests/fake-codex-fixture.mjs](../../../../sources/openai__codex-plugin-cc/tests/fake-codex-fixture.mjs)<br>[tests/git.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/git.test.mjs)<br>[tests/helpers.mjs](../../../../sources/openai__codex-plugin-cc/tests/helpers.mjs)<br>[tests/process.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/process.test.mjs)<br>[tests/render.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/render.test.mjs) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/pull-request-ci.yml](../../../../sources/openai__codex-plugin-cc/.github/workflows/pull-request-ci.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/openai__codex-plugin-cc/README.md) |
| config | 1 | [package.json](../../../../sources/openai__codex-plugin-cc/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 10 | [tests/broker-endpoint.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/broker-endpoint.test.mjs)<br>[tests/bump-version.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/bump-version.test.mjs)<br>[tests/commands.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/commands.test.mjs)<br>[tests/fake-codex-fixture.mjs](../../../../sources/openai__codex-plugin-cc/tests/fake-codex-fixture.mjs)<br>[tests/git.test.mjs](../../../../sources/openai__codex-plugin-cc/tests/git.test.mjs)<br>[tests/helpers.mjs](../../../../sources/openai__codex-plugin-cc/tests/helpers.mjs) |
| CI workflows | 1 | [.github/workflows/pull-request-ci.yml](../../../../sources/openai__codex-plugin-cc/.github/workflows/pull-request-ci.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `plugins/codex/skills/gpt-5-4-prompting/SKILL.md`, `plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-antipatterns.md`, `plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-recipes.md`.
2. Map agent/tool runtime through: `plugins/codex/skills/gpt-5-4-prompting/SKILL.md`, `plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-antipatterns.md`, `plugins/codex/skills/gpt-5-4-prompting/references/codex-prompt-recipes.md`.
3. Verify behavior through test/eval files: `tests/broker-endpoint.test.mjs`, `tests/bump-version.test.mjs`, `tests/commands.test.mjs`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 61 files, 20 directories.. 핵심 구조 신호는 package.json, README.md, LICENSE, tests, ci, docs이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
