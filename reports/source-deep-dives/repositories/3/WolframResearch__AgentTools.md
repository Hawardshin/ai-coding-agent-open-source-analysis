# WolframResearch/AgentTools Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Implements a model context protocol server using Wolfram Language

## 요약

- 조사 단위: `sources/WolframResearch__AgentTools` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 278 files, 85 directories, depth score 98, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 mcp=TODO/more-mcp-clients.md, docs/mcp-apps.md, docs/mcp-clients.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | WolframResearch/AgentTools |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Wolfram Language |
| Stars | 60 |
| Forks | 16 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/WolframResearch__AgentTools](../../../../sources/WolframResearch__AgentTools) |
| Existing report | [reports/global-trending/repositories/WolframResearch__AgentTools.md](../../../global-trending/repositories/WolframResearch__AgentTools.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 278 / 85 |
| Max observed depth | 5 |
| Top directories | .claude, .claude-plugin, .github, AgentSkills, Assets, client-research, docs, Documentation, FrontEnd, Kernel, MCPB, Notes, Scripts, Specs, TestResources, Tests, TODO |
| Top extensions | .wl: 82, .md: 78, .wlt: 32, .nb: 30, .wls: 24, .yml: 7, .json: 6, .png: 6, (none): 5, .html: 4, .sh: 2, .wxf: 1 |
| Source patterns | agent/tool runtime, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| Tests | validation surface | 34 |
| docs | documentation surface | 26 |
| .github | ci surface | 1 |
| AgentSkills | top-level component | 1 |
| Assets | top-level component | 1 |
| client-research | source boundary | 1 |
| Documentation | documentation surface | 1 |
| FrontEnd | top-level component | 1 |
| Kernel | top-level component | 1 |
| MCPB | top-level component | 1 |
| Notes | top-level component | 1 |
| Scripts | top-level component | 1 |
| Specs | top-level component | 1 |
| TestResources | validation surface | 1 |
| TODO | top-level component | 1 |


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
| mcp | [TODO/more-mcp-clients.md](../../../../sources/WolframResearch__AgentTools/TODO/more-mcp-clients.md) | mcp signal |
| mcp | [docs/mcp-apps.md](../../../../sources/WolframResearch__AgentTools/docs/mcp-apps.md) | mcp signal |
| mcp | [docs/mcp-clients.md](../../../../sources/WolframResearch__AgentTools/docs/mcp-clients.md) | mcp signal |
| mcp | [docs/mcp-prompts.md](../../../../sources/WolframResearch__AgentTools/docs/mcp-prompts.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/WolframResearch__AgentTools/AGENTS.md) | agentRuntime signal |
| agentRuntime | [Tests/Tools.wlt](../../../../sources/WolframResearch__AgentTools/Tests/Tools.wlt) | agentRuntime signal |
| agentRuntime | [TestResources/MockMCPPacletTest/AgentTools/Tools/AssocTool.wl](../../../../sources/WolframResearch__AgentTools/TestResources/MockMCPPacletTest/AgentTools/Tools/AssocTool.wl) | agentRuntime signal |
| agentRuntime | [TestResources/MockMCPPacletTest/AgentTools/Tools/DescribedTool.wl](../../../../sources/WolframResearch__AgentTools/TestResources/MockMCPPacletTest/AgentTools/Tools/DescribedTool.wl) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/WolframResearch__AgentTools/CLAUDE.md) | instruction signal |
| ci | [.github/workflows/Build.yml](../../../../sources/WolframResearch__AgentTools/.github/workflows/Build.yml) | ci support |
| ci | [.github/workflows/copilot-setup-steps.yml](../../../../sources/WolframResearch__AgentTools/.github/workflows/copilot-setup-steps.yml) | ci support |
| container | [Dockerfile](../../../../sources/WolframResearch__AgentTools/Dockerfile) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 75 | [AGENTS.md](../../../../sources/WolframResearch__AgentTools/AGENTS.md)<br>[Tests/Tools.wlt](../../../../sources/WolframResearch__AgentTools/Tests/Tools.wlt)<br>[TestResources/MockMCPPacletTest/AgentTools/Tools/AssocTool.wl](../../../../sources/WolframResearch__AgentTools/TestResources/MockMCPPacletTest/AgentTools/Tools/AssocTool.wl)<br>[TestResources/MockMCPPacletTest/AgentTools/Tools/DescribedTool.wl](../../../../sources/WolframResearch__AgentTools/TestResources/MockMCPPacletTest/AgentTools/Tools/DescribedTool.wl)<br>[TestResources/MockMCPPacletTest/AgentTools/Tools/LLMToolTest.wl](../../../../sources/WolframResearch__AgentTools/TestResources/MockMCPPacletTest/AgentTools/Tools/LLMToolTest.wl)<br>[TestResources/MockMCPPacletTest/AgentTools/Tools/TestTool.wl](../../../../sources/WolframResearch__AgentTools/TestResources/MockMCPPacletTest/AgentTools/Tools/TestTool.wl)<br>[TestResources/MockMCPPacletInvalidKeys/AgentTools/Tools/SomeTool.wl](../../../../sources/WolframResearch__AgentTools/TestResources/MockMCPPacletInvalidKeys/AgentTools/Tools/SomeTool.wl)<br>[TestResources/MockMCPPacletDupFiles/AgentTools/Tools/DupTool.wl](../../../../sources/WolframResearch__AgentTools/TestResources/MockMCPPacletDupFiles/AgentTools/Tools/DupTool.wl) |
| mcp | 7 | [TODO/more-mcp-clients.md](../../../../sources/WolframResearch__AgentTools/TODO/more-mcp-clients.md)<br>[docs/mcp-apps.md](../../../../sources/WolframResearch__AgentTools/docs/mcp-apps.md)<br>[docs/mcp-clients.md](../../../../sources/WolframResearch__AgentTools/docs/mcp-clients.md)<br>[docs/mcp-prompts.md](../../../../sources/WolframResearch__AgentTools/docs/mcp-prompts.md)<br>[docs/mcp-roots.md](../../../../sources/WolframResearch__AgentTools/docs/mcp-roots.md)<br>[Assets/Apps/mcp-apps-test.html](../../../../sources/WolframResearch__AgentTools/Assets/Apps/mcp-apps-test.html)<br>[Assets/Apps/mcp-apps-test.json](../../../../sources/WolframResearch__AgentTools/Assets/Apps/mcp-apps-test.json) |
| retrieval | 0 | not obvious |
| spec | 3 | [.claude/skills/spec-to-todo/SKILL.md](../../../../sources/WolframResearch__AgentTools/.claude/skills/spec-to-todo/SKILL.md)<br>[.claude/skills/simplify-spec/SKILL.md](../../../../sources/WolframResearch__AgentTools/.claude/skills/simplify-spec/SKILL.md)<br>[.claude/skills/review-spec/SKILL.md](../../../../sources/WolframResearch__AgentTools/.claude/skills/review-spec/SKILL.md) |
| eval | 37 | [Tests/CodeInspectorTool.wlt](../../../../sources/WolframResearch__AgentTools/Tests/CodeInspectorTool.wlt)<br>[Tests/Common.wl](../../../../sources/WolframResearch__AgentTools/Tests/Common.wl)<br>[Tests/CreateMCPServer.wlt](../../../../sources/WolframResearch__AgentTools/Tests/CreateMCPServer.wlt)<br>[Tests/DeployAgentTools.wlt](../../../../sources/WolframResearch__AgentTools/Tests/DeployAgentTools.wlt)<br>[Tests/Files.wlt](../../../../sources/WolframResearch__AgentTools/Tests/Files.wlt)<br>[Tests/Formatting.wlt](../../../../sources/WolframResearch__AgentTools/Tests/Formatting.wlt)<br>[Tests/Graphics.wlt](../../../../sources/WolframResearch__AgentTools/Tests/Graphics.wlt)<br>[Tests/InstallMCPServer.wlt](../../../../sources/WolframResearch__AgentTools/Tests/InstallMCPServer.wlt) |
| security | 0 | not obvious |
| ci | 7 | [.github/workflows/Build.yml](../../../../sources/WolframResearch__AgentTools/.github/workflows/Build.yml)<br>[.github/workflows/copilot-setup-steps.yml](../../../../sources/WolframResearch__AgentTools/.github/workflows/copilot-setup-steps.yml)<br>[.github/workflows/Docker.yml](../../../../sources/WolframResearch__AgentTools/.github/workflows/Docker.yml)<br>[.github/workflows/ExperimentalRelease.yml](../../../../sources/WolframResearch__AgentTools/.github/workflows/ExperimentalRelease.yml)<br>[.github/workflows/IncrementPacletVersion.yml](../../../../sources/WolframResearch__AgentTools/.github/workflows/IncrementPacletVersion.yml)<br>[.github/workflows/Publish.yml](../../../../sources/WolframResearch__AgentTools/.github/workflows/Publish.yml)<br>[.github/workflows/Release.yml](../../../../sources/WolframResearch__AgentTools/.github/workflows/Release.yml) |
| container | 1 | [Dockerfile](../../../../sources/WolframResearch__AgentTools/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/WolframResearch__AgentTools/AGENTS.md)<br>[CLAUDE.md](../../../../sources/WolframResearch__AgentTools/CLAUDE.md) |
| docs | 20 | [README.md](../../../../sources/WolframResearch__AgentTools/README.md)<br>[docs/agent-skills.md](../../../../sources/WolframResearch__AgentTools/docs/agent-skills.md)<br>[docs/building.md](../../../../sources/WolframResearch__AgentTools/docs/building.md)<br>[docs/code-inspector-rules.md](../../../../sources/WolframResearch__AgentTools/docs/code-inspector-rules.md)<br>[docs/deploy-agent-tools.md](../../../../sources/WolframResearch__AgentTools/docs/deploy-agent-tools.md)<br>[docs/docker.md](../../../../sources/WolframResearch__AgentTools/docs/docker.md)<br>[docs/error-handling.md](../../../../sources/WolframResearch__AgentTools/docs/error-handling.md)<br>[docs/getting-started.md](../../../../sources/WolframResearch__AgentTools/docs/getting-started.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 37 | [Tests/CodeInspectorTool.wlt](../../../../sources/WolframResearch__AgentTools/Tests/CodeInspectorTool.wlt)<br>[Tests/Common.wl](../../../../sources/WolframResearch__AgentTools/Tests/Common.wl)<br>[Tests/CreateMCPServer.wlt](../../../../sources/WolframResearch__AgentTools/Tests/CreateMCPServer.wlt)<br>[Tests/DeployAgentTools.wlt](../../../../sources/WolframResearch__AgentTools/Tests/DeployAgentTools.wlt)<br>[Tests/Files.wlt](../../../../sources/WolframResearch__AgentTools/Tests/Files.wlt)<br>[Tests/Formatting.wlt](../../../../sources/WolframResearch__AgentTools/Tests/Formatting.wlt) |
| CI workflows | 7 | [.github/workflows/Build.yml](../../../../sources/WolframResearch__AgentTools/.github/workflows/Build.yml)<br>[.github/workflows/copilot-setup-steps.yml](../../../../sources/WolframResearch__AgentTools/.github/workflows/copilot-setup-steps.yml)<br>[.github/workflows/Docker.yml](../../../../sources/WolframResearch__AgentTools/.github/workflows/Docker.yml)<br>[.github/workflows/ExperimentalRelease.yml](../../../../sources/WolframResearch__AgentTools/.github/workflows/ExperimentalRelease.yml)<br>[.github/workflows/IncrementPacletVersion.yml](../../../../sources/WolframResearch__AgentTools/.github/workflows/IncrementPacletVersion.yml)<br>[.github/workflows/Publish.yml](../../../../sources/WolframResearch__AgentTools/.github/workflows/Publish.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/WolframResearch__AgentTools/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/WolframResearch__AgentTools/AGENTS.md)<br>[CLAUDE.md](../../../../sources/WolframResearch__AgentTools/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `TODO/more-mcp-clients.md`, `docs/mcp-apps.md`, `docs/mcp-clients.md`.
2. Map agent/tool runtime through: `AGENTS.md`, `Tests/Tools.wlt`, `TestResources/MockMCPPacletTest/AgentTools/Tools/AssocTool.wl`.
3. Verify behavior through test/eval files: `Tests/CodeInspectorTool.wlt`, `Tests/Common.wl`, `Tests/CreateMCPServer.wlt`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Implements a model context protocol server using Wolfram Language. 핵심 구조 신호는 Wolfram Language, Dockerfile, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
