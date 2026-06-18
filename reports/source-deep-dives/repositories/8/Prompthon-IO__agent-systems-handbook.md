# Prompthon-IO/agent-systems-handbook Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A practical AI agents handbook covering agent systems, agentic workflows, LangGraph, MCP/A2A, context engineering, agent memory, evaluation, observability, and multi-agent architecture. Current trend focus: agent runtime cost controls, emerging agent runtimes, and production AI workflow patterns.

## 요약

- 조사 단위: `sources/Prompthon-IO__agent-systems-handbook` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 386 files, 138 directories, depth score 107, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=zh-Hans/systems/examples/weather-mcp-server-starter/index.mdx, systems/examples/weather-mcp-server-starter/index.mdx, systems/examples/weather-mcp-server-starter/src/access_policy.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Prompthon-IO/agent-systems-handbook |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | MDX |
| Stars | 317 |
| Forks | 54 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Prompthon-IO__agent-systems-handbook](../../../../sources/Prompthon-IO__agent-systems-handbook) |
| Existing report | [reports/global-trending/repositories/Prompthon-IO__agent-systems-handbook.md](../../../global-trending/repositories/Prompthon-IO__agent-systems-handbook.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 386 / 138 |
| Max observed depth | 9 |
| Top directories | .github, assets, case-studies, contributor-kit, ecosystem, foundations, githooks, patterns, publications, radar, reading-paths, scripts, skills, snippets, systems, workshops, zh-Hans |
| Top extensions | .mdx: 192, .md: 67, .py: 31, .ts: 30, .yml: 15, .png: 13, .yaml: 8, (none): 8, .mjs: 7, .tsx: 5, .json: 4, .csv: 3 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| case-studies | top-level component | 1 |
| contributor-kit | top-level component | 1 |
| ecosystem | top-level component | 1 |
| foundations | top-level component | 1 |
| githooks | top-level component | 1 |
| patterns | top-level component | 1 |
| publications | top-level component | 1 |
| radar | top-level component | 1 |
| reading-paths | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| snippets | top-level component | 1 |
| systems | top-level component | 1 |
| workshops | top-level component | 1 |
| zh-Hans | top-level component | 1 |


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
| mcp | [zh-Hans/systems/examples/weather-mcp-server-starter/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/systems/examples/weather-mcp-server-starter/index.mdx) | mcp signal |
| mcp | [systems/examples/weather-mcp-server-starter/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/examples/weather-mcp-server-starter/index.mdx) | mcp signal |
| mcp | [systems/examples/weather-mcp-server-starter/src/access_policy.py](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/examples/weather-mcp-server-starter/src/access_policy.py) | mcp signal |
| mcp | [systems/examples/weather-mcp-server-starter/src/server.py](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/examples/weather-mcp-server-starter/src/server.py) | mcp signal |
| agentRuntime | [zh-Hans/workshops/skills-introduction.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/workshops/skills-introduction.mdx) | agentRuntime signal |
| agentRuntime | [zh-Hans/systems/agent-ui-protocols-and-generative-ui.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/systems/agent-ui-protocols-and-generative-ui.mdx) | agentRuntime signal |
| agentRuntime | [zh-Hans/systems/context-engineering.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/systems/context-engineering.mdx) | agentRuntime signal |
| agentRuntime | [zh-Hans/skills/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/skills/index.mdx) | agentRuntime signal |
| config | [case-studies/examples/customer-email-assist-starter/package.json](../../../../sources/Prompthon-IO__agent-systems-handbook/case-studies/examples/customer-email-assist-starter/package.json) | config signal |
| config | [case-studies/examples/customer-email-assist-starter/tsconfig.json](../../../../sources/Prompthon-IO__agent-systems-handbook/case-studies/examples/customer-email-assist-starter/tsconfig.json) | config signal |
| ci | [.github/workflows/discord-lab-updates.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/discord-lab-updates.yml) | ci support |
| ci | [.github/workflows/main-release-gate.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/main-release-gate.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [systems/examples/weather-mcp-server-starter/src/server.py](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/examples/weather-mcp-server-starter/src/server.py) |
| agentRuntime | 82 | [zh-Hans/workshops/skills-introduction.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/workshops/skills-introduction.mdx)<br>[zh-Hans/systems/agent-ui-protocols-and-generative-ui.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/systems/agent-ui-protocols-and-generative-ui.mdx)<br>[zh-Hans/systems/context-engineering.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/systems/context-engineering.mdx)<br>[zh-Hans/skills/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/skills/index.mdx)<br>[zh-Hans/patterns/agent-memory-and-retrieval.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/patterns/agent-memory-and-retrieval.mdx)<br>[zh-Hans/patterns/agent-runtime-building-blocks.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/patterns/agent-runtime-building-blocks.mdx)<br>[zh-Hans/patterns/examples/agent-memory-retrieval-starter/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/patterns/examples/agent-memory-retrieval-starter/index.mdx)<br>[zh-Hans/foundations/agents-vs-workflows.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/foundations/agents-vs-workflows.mdx) |
| mcp | 5 | [zh-Hans/systems/examples/weather-mcp-server-starter/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/systems/examples/weather-mcp-server-starter/index.mdx)<br>[systems/examples/weather-mcp-server-starter/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/examples/weather-mcp-server-starter/index.mdx)<br>[systems/examples/weather-mcp-server-starter/src/access_policy.py](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/examples/weather-mcp-server-starter/src/access_policy.py)<br>[systems/examples/weather-mcp-server-starter/src/server.py](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/examples/weather-mcp-server-starter/src/server.py)<br>[systems/examples/weather-mcp-server-starter/src/tool_manifest.py](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/examples/weather-mcp-server-starter/src/tool_manifest.py) |
| retrieval | 63 | [index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/index.mdx)<br>[zh-Hans/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/index.mdx)<br>[zh-Hans/workshops/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/workshops/index.mdx)<br>[zh-Hans/workshops/openclaw/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/workshops/openclaw/index.mdx)<br>[zh-Hans/workshops/codex/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/workshops/codex/index.mdx)<br>[zh-Hans/systems/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/systems/index.mdx)<br>[zh-Hans/systems/examples/weather-mcp-server-starter/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/systems/examples/weather-mcp-server-starter/index.mdx)<br>[zh-Hans/skills/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/skills/index.mdx) |
| spec | 0 | not obvious |
| eval | 19 | [zh-Hans/systems/evaluation-and-observability.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/systems/evaluation-and-observability.mdx)<br>[systems/evaluation-and-observability.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/evaluation-and-observability.mdx)<br>[skills/agent-runtime-cache-benchmark/README.md](../../../../sources/Prompthon-IO__agent-systems-handbook/skills/agent-runtime-cache-benchmark/README.md)<br>[skills/agent-runtime-cache-benchmark/SKILL.md](../../../../sources/Prompthon-IO__agent-systems-handbook/skills/agent-runtime-cache-benchmark/SKILL.md)<br>[skills/agent-runtime-cache-benchmark/scripts/cache_benchmark.py](../../../../sources/Prompthon-IO__agent-systems-handbook/skills/agent-runtime-cache-benchmark/scripts/cache_benchmark.py)<br>[skills/agent-runtime-cache-benchmark/references/provider-cache-notes.md](../../../../sources/Prompthon-IO__agent-systems-handbook/skills/agent-runtime-cache-benchmark/references/provider-cache-notes.md)<br>[skills/agent-runtime-cache-benchmark/agents/openai.yaml](../../../../sources/Prompthon-IO__agent-systems-handbook/skills/agent-runtime-cache-benchmark/agents/openai.yaml)<br>[radar/2026-05-customer-support-agent-evaluation-tradeoffs.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/radar/2026-05-customer-support-agent-evaluation-tradeoffs.mdx) |
| security | 20 | [SECURITY.md](../../../../sources/Prompthon-IO__agent-systems-handbook/SECURITY.md)<br>[zh-Hans/SECURITY.md](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/SECURITY.md)<br>[workshops/gmail-oauth-setup.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/workshops/gmail-oauth-setup.mdx)<br>[systems/examples/weather-mcp-server-starter/src/access_policy.py](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/examples/weather-mcp-server-starter/src/access_policy.py)<br>[radar/2026-04-cyber-defense-access-policy-watch.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/radar/2026-04-cyber-defense-access-policy-watch.mdx)<br>[patterns/examples/agent-memory-retrieval-starter/src/artifact_policy.py](../../../../sources/Prompthon-IO__agent-systems-handbook/patterns/examples/agent-memory-retrieval-starter/src/artifact_policy.py)<br>[contributor-kit/reference-notes/ai-education-policy-to-practice.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/contributor-kit/reference-notes/ai-education-policy-to-practice.mdx)<br>[case-studies/examples/customer-support-email-agent-starter/src/policy_loader.py](../../../../sources/Prompthon-IO__agent-systems-handbook/case-studies/examples/customer-support-email-agent-starter/src/policy_loader.py) |
| ci | 7 | [.github/workflows/discord-lab-updates.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/discord-lab-updates.yml)<br>[.github/workflows/main-release-gate.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/main-release-gate.yml)<br>[.github/workflows/prompthon-issue-intake.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/prompthon-issue-intake.yml)<br>[.github/workflows/prompthon-track-guard.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/prompthon-track-guard.yml)<br>[.github/workflows/release-main.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/release-main.yml)<br>[.github/workflows/validate-mintlify.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/validate-mintlify.yml)<br>[.github/workflows/verify-example-projects.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/verify-example-projects.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 33 | [README.md](../../../../sources/Prompthon-IO__agent-systems-handbook/README.md)<br>[zh-Hans/README.md](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/README.md)<br>[zh-Hans/systems/README.md](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/systems/README.md)<br>[zh-Hans/reading-paths/README.md](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/reading-paths/README.md)<br>[zh-Hans/radar/README.md](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/radar/README.md)<br>[zh-Hans/publications/README.md](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/publications/README.md)<br>[zh-Hans/patterns/README.md](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/patterns/README.md)<br>[zh-Hans/foundations/README.md](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/foundations/README.md) |
| config | 2 | [case-studies/examples/customer-email-assist-starter/package.json](../../../../sources/Prompthon-IO__agent-systems-handbook/case-studies/examples/customer-email-assist-starter/package.json)<br>[case-studies/examples/customer-email-assist-starter/tsconfig.json](../../../../sources/Prompthon-IO__agent-systems-handbook/case-studies/examples/customer-email-assist-starter/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 19 | [zh-Hans/systems/evaluation-and-observability.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/systems/evaluation-and-observability.mdx)<br>[systems/evaluation-and-observability.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/evaluation-and-observability.mdx)<br>[skills/agent-runtime-cache-benchmark/README.md](../../../../sources/Prompthon-IO__agent-systems-handbook/skills/agent-runtime-cache-benchmark/README.md)<br>[skills/agent-runtime-cache-benchmark/SKILL.md](../../../../sources/Prompthon-IO__agent-systems-handbook/skills/agent-runtime-cache-benchmark/SKILL.md)<br>[skills/agent-runtime-cache-benchmark/scripts/cache_benchmark.py](../../../../sources/Prompthon-IO__agent-systems-handbook/skills/agent-runtime-cache-benchmark/scripts/cache_benchmark.py)<br>[skills/agent-runtime-cache-benchmark/references/provider-cache-notes.md](../../../../sources/Prompthon-IO__agent-systems-handbook/skills/agent-runtime-cache-benchmark/references/provider-cache-notes.md) |
| CI workflows | 7 | [.github/workflows/discord-lab-updates.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/discord-lab-updates.yml)<br>[.github/workflows/main-release-gate.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/main-release-gate.yml)<br>[.github/workflows/prompthon-issue-intake.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/prompthon-issue-intake.yml)<br>[.github/workflows/prompthon-track-guard.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/prompthon-track-guard.yml)<br>[.github/workflows/release-main.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/release-main.yml)<br>[.github/workflows/validate-mintlify.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/validate-mintlify.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 20 | [SECURITY.md](../../../../sources/Prompthon-IO__agent-systems-handbook/SECURITY.md)<br>[zh-Hans/SECURITY.md](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/SECURITY.md)<br>[workshops/gmail-oauth-setup.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/workshops/gmail-oauth-setup.mdx)<br>[systems/examples/weather-mcp-server-starter/src/access_policy.py](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/examples/weather-mcp-server-starter/src/access_policy.py)<br>[radar/2026-04-cyber-defense-access-policy-watch.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/radar/2026-04-cyber-defense-access-policy-watch.mdx)<br>[patterns/examples/agent-memory-retrieval-starter/src/artifact_policy.py](../../../../sources/Prompthon-IO__agent-systems-handbook/patterns/examples/agent-memory-retrieval-starter/src/artifact_policy.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `zh-Hans/systems/examples/weather-mcp-server-starter/index.mdx`, `systems/examples/weather-mcp-server-starter/index.mdx`, `systems/examples/weather-mcp-server-starter/src/access_policy.py`.
2. Trace execution through entrypoints: `systems/examples/weather-mcp-server-starter/src/server.py`.
3. Map agent/tool runtime through: `zh-Hans/workshops/skills-introduction.mdx`, `zh-Hans/systems/agent-ui-protocols-and-generative-ui.mdx`, `zh-Hans/systems/context-engineering.mdx`.
4. Inspect retrieval/memory/indexing through: `index.mdx`, `zh-Hans/index.mdx`, `zh-Hans/workshops/index.mdx`.
5. Verify behavior through test/eval files: `zh-Hans/systems/evaluation-and-observability.mdx`, `systems/evaluation-and-observability.mdx`, `skills/agent-runtime-cache-benchmark/README.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A practical AI agents handbook covering agent systems, agentic workflows, LangGraph, MCP/A2A, context engineering, agent. 핵심 구조 신호는 MDX, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
