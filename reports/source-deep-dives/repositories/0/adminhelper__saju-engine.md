# adminhelper/saju-engine Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

결정론 만세력 사주(四柱)·궁합 보고서를 단청 HTML로 생성하는 Claude Code 플러그인 — Deterministic Korean Four-Pillars (Saju) report generator: engine + MCP + diviner skill

## 요약

- 조사 단위: `sources/adminhelper__saju-engine` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 23 files, 9 directories, depth score 65, key references 6개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, test/smoke-mcp.mjs, mcp/package.json이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | adminhelper/saju-engine |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | JavaScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/adminhelper__saju-engine](../../../../sources/adminhelper__saju-engine) |
| Existing report | [reports/korea-trending/repositories/adminhelper__saju-engine.md](../../../korea-trending/repositories/adminhelper__saju-engine.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 23 / 9 |
| Max observed depth | 3 |
| Top directories | .claude-plugin, docs, examples, mcp, skills, templates, test |
| Top extensions | .mjs: 10, .md: 4, .html: 3, .json: 3, (none): 2, .png: 1 |
| Source patterns | api/server, agent/tool runtime, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 2 |
| examples | top-level component | 1 |
| mcp | top-level component | 1 |
| skills | top-level component | 1 |
| templates | top-level component | 1 |
| test | validation surface | 1 |


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
| mcp | [.mcp.json](../../../../sources/adminhelper__saju-engine/.mcp.json) | mcp signal |
| mcp | [test/smoke-mcp.mjs](../../../../sources/adminhelper__saju-engine/test/smoke-mcp.mjs) | mcp signal |
| mcp | [mcp/package.json](../../../../sources/adminhelper__saju-engine/mcp/package.json) | mcp signal |
| mcp | [mcp/server.mjs](../../../../sources/adminhelper__saju-engine/mcp/server.mjs) | mcp signal |
| agentRuntime | [skills/saju/SKILL.md](../../../../sources/adminhelper__saju-engine/skills/saju/SKILL.md) | agentRuntime signal |
| eval | [test/validate.mjs](../../../../sources/adminhelper__saju-engine/test/validate.mjs) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [mcp/server.mjs](../../../../sources/adminhelper__saju-engine/mcp/server.mjs) |
| agentRuntime | 1 | [skills/saju/SKILL.md](../../../../sources/adminhelper__saju-engine/skills/saju/SKILL.md) |
| mcp | 11 | [.mcp.json](../../../../sources/adminhelper__saju-engine/.mcp.json)<br>[test/smoke-mcp.mjs](../../../../sources/adminhelper__saju-engine/test/smoke-mcp.mjs)<br>[mcp/package.json](../../../../sources/adminhelper__saju-engine/mcp/package.json)<br>[mcp/server.mjs](../../../../sources/adminhelper__saju-engine/mcp/server.mjs)<br>[mcp/lib/astronomy.mjs](../../../../sources/adminhelper__saju-engine/mcp/lib/astronomy.mjs)<br>[mcp/lib/constants.mjs](../../../../sources/adminhelper__saju-engine/mcp/lib/constants.mjs)<br>[mcp/lib/core.mjs](../../../../sources/adminhelper__saju-engine/mcp/lib/core.mjs)<br>[mcp/lib/daewoon.mjs](../../../../sources/adminhelper__saju-engine/mcp/lib/daewoon.mjs) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 2 | [test/smoke-mcp.mjs](../../../../sources/adminhelper__saju-engine/test/smoke-mcp.mjs)<br>[test/validate.mjs](../../../../sources/adminhelper__saju-engine/test/validate.mjs) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/adminhelper__saju-engine/README.md)<br>[docs/preview.png](../../../../sources/adminhelper__saju-engine/docs/preview.png) |
| config | 1 | [mcp/package.json](../../../../sources/adminhelper__saju-engine/mcp/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2 | [test/smoke-mcp.mjs](../../../../sources/adminhelper__saju-engine/test/smoke-mcp.mjs)<br>[test/validate.mjs](../../../../sources/adminhelper__saju-engine/test/validate.mjs) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `.mcp.json`, `test/smoke-mcp.mjs`, `mcp/package.json`.
2. Trace execution through entrypoints: `mcp/server.mjs`.
3. Map agent/tool runtime through: `skills/saju/SKILL.md`.
4. Verify behavior through test/eval files: `test/smoke-mcp.mjs`, `test/validate.mjs`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 결정론 만세력 사주 四柱 ·궁합 보고서를 단청 HTML로 생성하는 Claude Code 플러그인 — Deterministic Korean Four Pillars Saju report generator engine +. 핵심 구조 신호는 JavaScript, README.md, LICENSE, tests, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
