# Mybono/ai-orchestrator Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Portable multi-agent AI developer setup for Claude Code + Ollama. Role-based local LLM orchestration via Bash — plan, code, review, commit. Zero Dependency. Works with any language stack.

## 요약

- 조사 단위: `sources/Mybono__ai-orchestrator` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 323 files, 108 directories, depth score 120, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp-config.json, src/mcp/server.ts, skills/mcp-development/SKILL.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Mybono/ai-orchestrator |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | HTML |
| Stars | 97 |
| Forks | 16 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/Mybono__ai-orchestrator](../../../../sources/Mybono__ai-orchestrator) |
| Existing report | [reports/global-trending/repositories/Mybono__ai-orchestrator.md](../../../global-trending/repositories/Mybono__ai-orchestrator.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 323 / 108 |
| Max observed depth | 5 |
| Top directories | .claude, .github, agents, commands, documentation, graphify-out, knowledge, mcps, plugins, scripts, skills, src |
| Top extensions | .md: 177, .json: 31, .csv: 30, .ts: 30, .sh: 22, (none): 14, .py: 4, .js: 3, .yml: 3, .jsonl: 2, .svg: 2, .html: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 9 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| commands | top-level component | 1 |
| documentation | documentation surface | 1 |
| graphify-out | top-level component | 1 |
| knowledge | top-level component | 1 |
| mcps | top-level component | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| serve-dev | package.json | start | tsx src/index.ts |
| serve-dev | package.json | dev | tsx watch src/index.ts |
| quality | package.json | typecheck | tsc --noEmit |
| utility | package.json | postinstall | echo "Run 'ai-orchestrator-install' to set up the system." |
| utility | package.json | ao-commit | tsx src/cli/commit.ts |
| utility | package.json | ao-review | tsx src/cli/review.ts |
| utility | package.json | ao-stats | tsx src/cli/stats.ts |
| utility | package.json | ao-update | tsx src/cli/update.ts |
| serve-dev | package.json | ao-mcp | tsx src/mcp/server.ts |
| entrypoint | package.json bin | install.sh | scripts/install.sh |
| entrypoint | package.json bin | index.js | dist/index.js |


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
| mcp | [mcp-config.json](../../../../sources/Mybono__ai-orchestrator/mcp-config.json) | mcp signal |
| mcp | [src/mcp/server.ts](../../../../sources/Mybono__ai-orchestrator/src/mcp/server.ts) | mcp signal |
| mcp | [skills/mcp-development/SKILL.md](../../../../sources/Mybono__ai-orchestrator/skills/mcp-development/SKILL.md) | mcp signal |
| mcp | [mcps/.mcp.json](../../../../sources/Mybono__ai-orchestrator/mcps/.mcp.json) | mcp signal |
| agentRuntime | [src/agents/AgentRunner.ts](../../../../sources/Mybono__ai-orchestrator/src/agents/AgentRunner.ts) | agentRuntime signal |
| agentRuntime | [src/agents/TriageAgent.ts](../../../../sources/Mybono__ai-orchestrator/src/agents/TriageAgent.ts) | agentRuntime signal |
| agentRuntime | [skills/.DS_Store](../../../../sources/Mybono__ai-orchestrator/skills/.DS_Store) | agentRuntime signal |
| agentRuntime | [skills/bash-code-standarts.md](../../../../sources/Mybono__ai-orchestrator/skills/bash-code-standarts.md) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/Mybono__ai-orchestrator/src/index.ts) | entrypoints signal |
| instruction | [documentation/AGENTS.md](../../../../sources/Mybono__ai-orchestrator/documentation/AGENTS.md) | instruction signal |
| instruction | [documentation/CLAUDE.md](../../../../sources/Mybono__ai-orchestrator/documentation/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/Mybono__ai-orchestrator/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/index.ts](../../../../sources/Mybono__ai-orchestrator/src/index.ts)<br>[src/mcp/server.ts](../../../../sources/Mybono__ai-orchestrator/src/mcp/server.ts) |
| agentRuntime | 129 | [src/agents/AgentRunner.ts](../../../../sources/Mybono__ai-orchestrator/src/agents/AgentRunner.ts)<br>[src/agents/TriageAgent.ts](../../../../sources/Mybono__ai-orchestrator/src/agents/TriageAgent.ts)<br>[skills/.DS_Store](../../../../sources/Mybono__ai-orchestrator/skills/.DS_Store)<br>[skills/bash-code-standarts.md](../../../../sources/Mybono__ai-orchestrator/skills/bash-code-standarts.md)<br>[skills/c-code-standarts.md](../../../../sources/Mybono__ai-orchestrator/skills/c-code-standarts.md)<br>[skills/doc-standarts.md](../../../../sources/Mybono__ai-orchestrator/skills/doc-standarts.md)<br>[skills/flutter-code-standarts.md](../../../../sources/Mybono__ai-orchestrator/skills/flutter-code-standarts.md)<br>[skills/humanizer.md](../../../../sources/Mybono__ai-orchestrator/skills/humanizer.md) |
| mcp | 4 | [mcp-config.json](../../../../sources/Mybono__ai-orchestrator/mcp-config.json)<br>[src/mcp/server.ts](../../../../sources/Mybono__ai-orchestrator/src/mcp/server.ts)<br>[skills/mcp-development/SKILL.md](../../../../sources/Mybono__ai-orchestrator/skills/mcp-development/SKILL.md)<br>[mcps/.mcp.json](../../../../sources/Mybono__ai-orchestrator/mcps/.mcp.json) |
| retrieval | 42 | [src/index.ts](../../../../sources/Mybono__ai-orchestrator/src/index.ts)<br>[src/types/index.ts](../../../../sources/Mybono__ai-orchestrator/src/types/index.ts)<br>[src/integrations/index.ts](../../../../sources/Mybono__ai-orchestrator/src/integrations/index.ts)<br>[scripts/embed-outcomes.sh](../../../../sources/Mybono__ai-orchestrator/scripts/embed-outcomes.sh)<br>[scripts/update-knowledge.sh](../../../../sources/Mybono__ai-orchestrator/scripts/update-knowledge.sh)<br>[knowledge/context-index.md](../../../../sources/Mybono__ai-orchestrator/knowledge/context-index.md)<br>[knowledge/embeddings.jsonl](../../../../sources/Mybono__ai-orchestrator/knowledge/embeddings.jsonl)<br>[knowledge/outcomes.jsonl](../../../../sources/Mybono__ai-orchestrator/knowledge/outcomes.jsonl) |
| spec | 9 | [skills/ui-ux-pro-max/scripts/design_system.py](../../../../sources/Mybono__ai-orchestrator/skills/ui-ux-pro-max/scripts/design_system.py)<br>[skills/ui-ux-pro-max/data/design.csv](../../../../sources/Mybono__ai-orchestrator/skills/ui-ux-pro-max/data/design.csv)<br>[skills/microservices-design/SKILL.md](../../../../sources/Mybono__ai-orchestrator/skills/microservices-design/SKILL.md)<br>[skills/frontend-design/SKILL.md](../../../../sources/Mybono__ai-orchestrator/skills/frontend-design/SKILL.md)<br>[skills/code-review/references/architecture-review-guide.md](../../../../sources/Mybono__ai-orchestrator/skills/code-review/references/architecture-review-guide.md)<br>[skills/api-design-patterns/SKILL.md](../../../../sources/Mybono__ai-orchestrator/skills/api-design-patterns/SKILL.md)<br>[plugins/database-tools/commands/design-schema.md](../../../../sources/Mybono__ai-orchestrator/plugins/database-tools/commands/design-schema.md)<br>[plugins/api-architect/commands/design-api.md](../../../../sources/Mybono__ai-orchestrator/plugins/api-architect/commands/design-api.md) |
| eval | 4 | [plugins/qa-tools/commands/generate-tests.md](../../../../sources/Mybono__ai-orchestrator/plugins/qa-tools/commands/generate-tests.md)<br>[plugins/accessibility/commands/test-sr.md](../../../../sources/Mybono__ai-orchestrator/plugins/accessibility/commands/test-sr.md)<br>[agents/performance-monitor.md](../../../../sources/Mybono__ai-orchestrator/agents/performance-monitor.md)<br>[agents/test-agent.md](../../../../sources/Mybono__ai-orchestrator/agents/test-agent.md) |
| security | 7 | [SECURITY.md](../../../../sources/Mybono__ai-orchestrator/SECURITY.md)<br>[skills/security-hardening/SKILL.md](../../../../sources/Mybono__ai-orchestrator/skills/security-hardening/SKILL.md)<br>[skills/code-review/references/security-review-guide.md](../../../../sources/Mybono__ai-orchestrator/skills/code-review/references/security-review-guide.md)<br>[plugins/security-guidance/commands/fix-vulnerability.md](../../../../sources/Mybono__ai-orchestrator/plugins/security-guidance/commands/fix-vulnerability.md)<br>[plugins/security-guidance/commands/security-check.md](../../../../sources/Mybono__ai-orchestrator/plugins/security-guidance/commands/security-check.md)<br>[plugins/security-guidance/.claude-plugin/plugin.json](../../../../sources/Mybono__ai-orchestrator/plugins/security-guidance/.claude-plugin/plugin.json)<br>[agents/security-auditor.md](../../../../sources/Mybono__ai-orchestrator/agents/security-auditor.md) |
| ci | 2 | [.github/workflows/ai-review.yml](../../../../sources/Mybono__ai-orchestrator/.github/workflows/ai-review.yml)<br>[.github/workflows/ci.yml](../../../../sources/Mybono__ai-orchestrator/.github/workflows/ci.yml) |
| container | 0 | not obvious |
| instruction | 2 | [documentation/AGENTS.md](../../../../sources/Mybono__ai-orchestrator/documentation/AGENTS.md)<br>[documentation/CLAUDE.md](../../../../sources/Mybono__ai-orchestrator/documentation/CLAUDE.md) |
| docs | 1 | [README.md](../../../../sources/Mybono__ai-orchestrator/README.md) |
| config | 2 | [package.json](../../../../sources/Mybono__ai-orchestrator/package.json)<br>[tsconfig.json](../../../../sources/Mybono__ai-orchestrator/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 4 | [plugins/qa-tools/commands/generate-tests.md](../../../../sources/Mybono__ai-orchestrator/plugins/qa-tools/commands/generate-tests.md)<br>[plugins/accessibility/commands/test-sr.md](../../../../sources/Mybono__ai-orchestrator/plugins/accessibility/commands/test-sr.md)<br>[agents/performance-monitor.md](../../../../sources/Mybono__ai-orchestrator/agents/performance-monitor.md)<br>[agents/test-agent.md](../../../../sources/Mybono__ai-orchestrator/agents/test-agent.md) |
| CI workflows | 2 | [.github/workflows/ai-review.yml](../../../../sources/Mybono__ai-orchestrator/.github/workflows/ai-review.yml)<br>[.github/workflows/ci.yml](../../../../sources/Mybono__ai-orchestrator/.github/workflows/ci.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 7 | [SECURITY.md](../../../../sources/Mybono__ai-orchestrator/SECURITY.md)<br>[skills/security-hardening/SKILL.md](../../../../sources/Mybono__ai-orchestrator/skills/security-hardening/SKILL.md)<br>[skills/code-review/references/security-review-guide.md](../../../../sources/Mybono__ai-orchestrator/skills/code-review/references/security-review-guide.md)<br>[plugins/security-guidance/commands/fix-vulnerability.md](../../../../sources/Mybono__ai-orchestrator/plugins/security-guidance/commands/fix-vulnerability.md)<br>[plugins/security-guidance/commands/security-check.md](../../../../sources/Mybono__ai-orchestrator/plugins/security-guidance/commands/security-check.md)<br>[plugins/security-guidance/.claude-plugin/plugin.json](../../../../sources/Mybono__ai-orchestrator/plugins/security-guidance/.claude-plugin/plugin.json) |
| Agent instructions | 2 | [documentation/AGENTS.md](../../../../sources/Mybono__ai-orchestrator/documentation/AGENTS.md)<br>[documentation/CLAUDE.md](../../../../sources/Mybono__ai-orchestrator/documentation/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `mcp-config.json`, `src/mcp/server.ts`, `skills/mcp-development/SKILL.md`.
2. Trace execution through entrypoints: `src/index.ts`, `src/mcp/server.ts`.
3. Map agent/tool runtime through: `src/agents/AgentRunner.ts`, `src/agents/TriageAgent.ts`, `skills/.DS_Store`.
4. Inspect retrieval/memory/indexing through: `src/index.ts`, `src/types/index.ts`, `src/integrations/index.ts`.
5. Verify behavior through test/eval files: `plugins/qa-tools/commands/generate-tests.md`, `plugins/accessibility/commands/test-sr.md`, `agents/performance-monitor.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Portable multi agent AI developer setup for Claude Code + Ollama. Role based local LLM orchestration via Bash — plan, co. 핵심 구조 신호는 HTML, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
