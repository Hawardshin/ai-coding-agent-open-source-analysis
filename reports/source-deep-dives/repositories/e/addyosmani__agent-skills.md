# addyosmani/agent-skills Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 90 files, 40 directories.

## 요약

- 조사 단위: `sources/addyosmani__agent-skills` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 90 files, 40 directories, depth score 86, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, skills/using-agent-skills/SKILL.md, skills/test-driven-development/SKILL.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | addyosmani/agent-skills |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/addyosmani__agent-skills](../../../../sources/addyosmani__agent-skills) |
| Existing report | [reports/clone-structures/addyosmani__agent-skills.md](../../../clone-structures/addyosmani__agent-skills.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 90 / 40 |
| Max observed depth | 4 |
| Top directories | .claude, .claude-plugin, .gemini, .github, .opencode, agents, commands, docs, hooks, references, scripts, skills |
| Top extensions | .md: 59, .toml: 16, .sh: 7, .json: 4, (none): 2, .js: 1, .yml: 1 |
| Source patterns | agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 13 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| commands | top-level component | 1 |
| hooks | top-level component | 1 |
| references | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


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
| agentRuntime | [AGENTS.md](../../../../sources/addyosmani__agent-skills/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills/using-agent-skills/SKILL.md](../../../../sources/addyosmani__agent-skills/skills/using-agent-skills/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/test-driven-development/SKILL.md](../../../../sources/addyosmani__agent-skills/skills/test-driven-development/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/spec-driven-development/SKILL.md](../../../../sources/addyosmani__agent-skills/skills/spec-driven-development/SKILL.md) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/addyosmani__agent-skills/CLAUDE.md) | instruction signal |
| instruction | [docs/agents.md](../../../../sources/addyosmani__agent-skills/docs/agents.md) | instruction signal |
| ci | [.github/workflows/test-plugin-install.yml](../../../../sources/addyosmani__agent-skills/.github/workflows/test-plugin-install.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 44 | [AGENTS.md](../../../../sources/addyosmani__agent-skills/AGENTS.md)<br>[skills/using-agent-skills/SKILL.md](../../../../sources/addyosmani__agent-skills/skills/using-agent-skills/SKILL.md)<br>[skills/test-driven-development/SKILL.md](../../../../sources/addyosmani__agent-skills/skills/test-driven-development/SKILL.md)<br>[skills/spec-driven-development/SKILL.md](../../../../sources/addyosmani__agent-skills/skills/spec-driven-development/SKILL.md)<br>[skills/source-driven-development/SKILL.md](../../../../sources/addyosmani__agent-skills/skills/source-driven-development/SKILL.md)<br>[skills/shipping-and-launch/SKILL.md](../../../../sources/addyosmani__agent-skills/skills/shipping-and-launch/SKILL.md)<br>[skills/security-and-hardening/SKILL.md](../../../../sources/addyosmani__agent-skills/skills/security-and-hardening/SKILL.md)<br>[skills/planning-and-task-breakdown/SKILL.md](../../../../sources/addyosmani__agent-skills/skills/planning-and-task-breakdown/SKILL.md) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 5 | [skills/spec-driven-development/SKILL.md](../../../../sources/addyosmani__agent-skills/skills/spec-driven-development/SKILL.md)<br>[skills/api-and-interface-design/SKILL.md](../../../../sources/addyosmani__agent-skills/skills/api-and-interface-design/SKILL.md)<br>[commands/spec.toml](../../../../sources/addyosmani__agent-skills/commands/spec.toml)<br>[.gemini/commands/spec.toml](../../../../sources/addyosmani__agent-skills/.gemini/commands/spec.toml)<br>[.claude/commands/spec.md](../../../../sources/addyosmani__agent-skills/.claude/commands/spec.md) |
| eval | 14 | [skills/test-driven-development/SKILL.md](../../../../sources/addyosmani__agent-skills/skills/test-driven-development/SKILL.md)<br>[skills/spec-driven-development/SKILL.md](../../../../sources/addyosmani__agent-skills/skills/spec-driven-development/SKILL.md)<br>[skills/observability-and-instrumentation/SKILL.md](../../../../sources/addyosmani__agent-skills/skills/observability-and-instrumentation/SKILL.md)<br>[skills/code-review-and-quality/SKILL.md](../../../../sources/addyosmani__agent-skills/skills/code-review-and-quality/SKILL.md)<br>[hooks/session-start-test.sh](../../../../sources/addyosmani__agent-skills/hooks/session-start-test.sh)<br>[hooks/simplify-ignore-test.sh](../../../../sources/addyosmani__agent-skills/hooks/simplify-ignore-test.sh)<br>[commands/spec.toml](../../../../sources/addyosmani__agent-skills/commands/spec.toml)<br>[commands/test.toml](../../../../sources/addyosmani__agent-skills/commands/test.toml) |
| security | 3 | [skills/security-and-hardening/SKILL.md](../../../../sources/addyosmani__agent-skills/skills/security-and-hardening/SKILL.md)<br>[references/security-checklist.md](../../../../sources/addyosmani__agent-skills/references/security-checklist.md)<br>[agents/security-auditor.md](../../../../sources/addyosmani__agent-skills/agents/security-auditor.md) |
| ci | 1 | [.github/workflows/test-plugin-install.yml](../../../../sources/addyosmani__agent-skills/.github/workflows/test-plugin-install.yml) |
| container | 0 | not obvious |
| instruction | 3 | [AGENTS.md](../../../../sources/addyosmani__agent-skills/AGENTS.md)<br>[CLAUDE.md](../../../../sources/addyosmani__agent-skills/CLAUDE.md)<br>[docs/agents.md](../../../../sources/addyosmani__agent-skills/docs/agents.md) |
| docs | 10 | [README.md](../../../../sources/addyosmani__agent-skills/README.md)<br>[docs/agents.md](../../../../sources/addyosmani__agent-skills/docs/agents.md)<br>[docs/antigravity-setup.md](../../../../sources/addyosmani__agent-skills/docs/antigravity-setup.md)<br>[docs/copilot-setup.md](../../../../sources/addyosmani__agent-skills/docs/copilot-setup.md)<br>[docs/cursor-setup.md](../../../../sources/addyosmani__agent-skills/docs/cursor-setup.md)<br>[docs/gemini-cli-setup.md](../../../../sources/addyosmani__agent-skills/docs/gemini-cli-setup.md)<br>[docs/getting-started.md](../../../../sources/addyosmani__agent-skills/docs/getting-started.md)<br>[docs/opencode-setup.md](../../../../sources/addyosmani__agent-skills/docs/opencode-setup.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 14 | [skills/test-driven-development/SKILL.md](../../../../sources/addyosmani__agent-skills/skills/test-driven-development/SKILL.md)<br>[skills/spec-driven-development/SKILL.md](../../../../sources/addyosmani__agent-skills/skills/spec-driven-development/SKILL.md)<br>[skills/observability-and-instrumentation/SKILL.md](../../../../sources/addyosmani__agent-skills/skills/observability-and-instrumentation/SKILL.md)<br>[skills/code-review-and-quality/SKILL.md](../../../../sources/addyosmani__agent-skills/skills/code-review-and-quality/SKILL.md)<br>[hooks/session-start-test.sh](../../../../sources/addyosmani__agent-skills/hooks/session-start-test.sh)<br>[hooks/simplify-ignore-test.sh](../../../../sources/addyosmani__agent-skills/hooks/simplify-ignore-test.sh) |
| CI workflows | 1 | [.github/workflows/test-plugin-install.yml](../../../../sources/addyosmani__agent-skills/.github/workflows/test-plugin-install.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 3 | [skills/security-and-hardening/SKILL.md](../../../../sources/addyosmani__agent-skills/skills/security-and-hardening/SKILL.md)<br>[references/security-checklist.md](../../../../sources/addyosmani__agent-skills/references/security-checklist.md)<br>[agents/security-auditor.md](../../../../sources/addyosmani__agent-skills/agents/security-auditor.md) |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/addyosmani__agent-skills/AGENTS.md)<br>[CLAUDE.md](../../../../sources/addyosmani__agent-skills/CLAUDE.md)<br>[docs/agents.md](../../../../sources/addyosmani__agent-skills/docs/agents.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `AGENTS.md`, `skills/using-agent-skills/SKILL.md`, `skills/test-driven-development/SKILL.md`.
2. Map agent/tool runtime through: `AGENTS.md`, `skills/using-agent-skills/SKILL.md`, `skills/test-driven-development/SKILL.md`.
3. Verify behavior through test/eval files: `skills/test-driven-development/SKILL.md`, `skills/spec-driven-development/SKILL.md`, `skills/observability-and-instrumentation/SKILL.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 90 files, 40 directories.. 핵심 구조 신호는 README.md, AGENTS.md, CLAUDE.md, LICENSE, ci, docs이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing입니다.
