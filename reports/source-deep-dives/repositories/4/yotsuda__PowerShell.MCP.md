# yotsuda/PowerShell.MCP Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

The universal MCP server for Claude Code and other MCP-compatible clients. One installation gives AI access to 10,000+ PowerShell modules and any CLI tool. You and AI collaborate in the same console with full transparency. Supports Windows, Linux, and macOS.

## 요약

- 조사 단위: `sources/yotsuda__PowerShell.MCP` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 194 files, 38 directories, depth score 80, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, eval/test harness, security/policy surface 구조로 읽힌다. 핵심 소스 근거는 mcp=PowerShell.MCP.sln, Tests/PowerShell.MCP.Tests.csproj, Staging/PowerShell.MCP.psd1이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | yotsuda/PowerShell.MCP |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | C# |
| Stars | 73 |
| Forks | 7 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/yotsuda__PowerShell.MCP](../../../../sources/yotsuda__PowerShell.MCP) |
| Existing report | [reports/global-trending/repositories/yotsuda__PowerShell.MCP.md](../../../global-trending/repositories/yotsuda__PowerShell.MCP.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 194 / 38 |
| Max observed depth | 4 |
| Top directories | .github, docs, images, licenses, PowerShell.MCP, PowerShell.MCP.Proxy, Staging, Tests |
| Top extensions | .cs: 54, .ps1: 54, .md: 33, .resx: 19, .png: 9, (none): 7, .txt: 4, .yml: 4, .csproj: 3, .json: 2, .psd1: 2, .psm1: 2 |
| Source patterns | agent/tool runtime, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| Tests | validation surface | 43 |
| docs | documentation surface | 5 |
| .github | ci surface | 1 |
| images | top-level component | 1 |
| licenses | top-level component | 1 |
| PowerShell.MCP | top-level component | 1 |
| PowerShell.MCP.Proxy | top-level component | 1 |
| Staging | top-level component | 1 |


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
| mcp | [PowerShell.MCP.sln](../../../../sources/yotsuda__PowerShell.MCP/PowerShell.MCP.sln) | mcp signal |
| mcp | [Tests/PowerShell.MCP.Tests.csproj](../../../../sources/yotsuda__PowerShell.MCP/Tests/PowerShell.MCP.Tests.csproj) | mcp signal |
| mcp | [Staging/PowerShell.MCP.psd1](../../../../sources/yotsuda__PowerShell.MCP/Staging/PowerShell.MCP.psd1) | mcp signal |
| mcp | [Staging/PowerShell.MCP.psm1](../../../../sources/yotsuda__PowerShell.MCP/Staging/PowerShell.MCP.psm1) | mcp signal |
| agentRuntime | [PowerShell.MCP.Proxy/Tools/PowerShellTools.cs](../../../../sources/yotsuda__PowerShell.MCP/PowerShell.MCP.Proxy/Tools/PowerShellTools.cs) | agentRuntime signal |
| ci | [.github/workflows/claude.yml](../../../../sources/yotsuda__PowerShell.MCP/.github/workflows/claude.yml) | ci support |
| ci | [.github/workflows/cross-platform-test.yml](../../../../sources/yotsuda__PowerShell.MCP/.github/workflows/cross-platform-test.yml) | ci support |
| eval | [Tests/Invoke-PesterConcise.ps1](../../../../sources/yotsuda__PowerShell.MCP/Tests/Invoke-PesterConcise.ps1) | eval support |
| eval | [Tests/PesterConfiguration.psd1](../../../../sources/yotsuda__PowerShell.MCP/Tests/PesterConfiguration.psd1) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [PowerShell.MCP.Proxy/Tools/PowerShellTools.cs](../../../../sources/yotsuda__PowerShell.MCP/PowerShell.MCP.Proxy/Tools/PowerShellTools.cs) |
| mcp | 90 | [PowerShell.MCP.sln](../../../../sources/yotsuda__PowerShell.MCP/PowerShell.MCP.sln)<br>[Tests/PowerShell.MCP.Tests.csproj](../../../../sources/yotsuda__PowerShell.MCP/Tests/PowerShell.MCP.Tests.csproj)<br>[Staging/PowerShell.MCP.psd1](../../../../sources/yotsuda__PowerShell.MCP/Staging/PowerShell.MCP.psd1)<br>[Staging/PowerShell.MCP.psm1](../../../../sources/yotsuda__PowerShell.MCP/Staging/PowerShell.MCP.psm1)<br>[PowerShell.MCP.Proxy/PowerShell.MCP.Proxy.csproj](../../../../sources/yotsuda__PowerShell.MCP/PowerShell.MCP.Proxy/PowerShell.MCP.Proxy.csproj)<br>[PowerShell.MCP.Proxy/Program.cs](../../../../sources/yotsuda__PowerShell.MCP/PowerShell.MCP.Proxy/Program.cs)<br>[PowerShell.MCP.Proxy/Tools/PowerShellTools.cs](../../../../sources/yotsuda__PowerShell.MCP/PowerShell.MCP.Proxy/Tools/PowerShellTools.cs)<br>[PowerShell.MCP.Proxy/Services/ConsoleSessionManager.cs](../../../../sources/yotsuda__PowerShell.MCP/PowerShell.MCP.Proxy/Services/ConsoleSessionManager.cs) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 77 | [Tests/Invoke-PesterConcise.ps1](../../../../sources/yotsuda__PowerShell.MCP/Tests/Invoke-PesterConcise.ps1)<br>[Tests/PesterConfiguration.psd1](../../../../sources/yotsuda__PowerShell.MCP/Tests/PesterConfiguration.psd1)<br>[Tests/PowerShell.MCP.Tests.csproj](../../../../sources/yotsuda__PowerShell.MCP/Tests/PowerShell.MCP.Tests.csproj)<br>[Tests/README.md](../../../../sources/yotsuda__PowerShell.MCP/Tests/README.md)<br>[Tests/Run-AllTests.ps1](../../../../sources/yotsuda__PowerShell.MCP/Tests/Run-AllTests.ps1)<br>[Tests/xunit.runner.json](../../../../sources/yotsuda__PowerShell.MCP/Tests/xunit.runner.json)<br>[Tests/Unit/Proxy/ConsoleSessionManagerTests.cs](../../../../sources/yotsuda__PowerShell.MCP/Tests/Unit/Proxy/ConsoleSessionManagerTests.cs)<br>[Tests/Unit/Proxy/PipeDiscoveryServiceTests.cs](../../../../sources/yotsuda__PowerShell.MCP/Tests/Unit/Proxy/PipeDiscoveryServiceTests.cs) |
| security | 1 | [SECURITY.md](../../../../sources/yotsuda__PowerShell.MCP/SECURITY.md) |
| ci | 4 | [.github/workflows/claude.yml](../../../../sources/yotsuda__PowerShell.MCP/.github/workflows/claude.yml)<br>[.github/workflows/cross-platform-test.yml](../../../../sources/yotsuda__PowerShell.MCP/.github/workflows/cross-platform-test.yml)<br>[.github/workflows/macos-terminal-test.yml](../../../../sources/yotsuda__PowerShell.MCP/.github/workflows/macos-terminal-test.yml)<br>[.github/workflows/release.yml](../../../../sources/yotsuda__PowerShell.MCP/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 7 | [README.md](../../../../sources/yotsuda__PowerShell.MCP/README.md)<br>[Tests/README.md](../../../../sources/yotsuda__PowerShell.MCP/Tests/README.md)<br>[PowerShell.MCP/PlatyPS/README.md](../../../../sources/yotsuda__PowerShell.MCP/PowerShell.MCP/PlatyPS/README.md)<br>[docs/ConPTY-Interactive-Execution.md](../../../../sources/yotsuda__PowerShell.MCP/docs/ConPTY-Interactive-Execution.md)<br>[docs/macOS-Test-Procedure.md](../../../../sources/yotsuda__PowerShell.MCP/docs/macOS-Test-Procedure.md)<br>[docs/pwsh-mcp-vs-ripple-evaluation.md](../../../../sources/yotsuda__PowerShell.MCP/docs/pwsh-mcp-vs-ripple-evaluation.md)<br>[docs/test-cases-multi-console.md](../../../../sources/yotsuda__PowerShell.MCP/docs/test-cases-multi-console.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 77 | [Tests/Invoke-PesterConcise.ps1](../../../../sources/yotsuda__PowerShell.MCP/Tests/Invoke-PesterConcise.ps1)<br>[Tests/PesterConfiguration.psd1](../../../../sources/yotsuda__PowerShell.MCP/Tests/PesterConfiguration.psd1)<br>[Tests/PowerShell.MCP.Tests.csproj](../../../../sources/yotsuda__PowerShell.MCP/Tests/PowerShell.MCP.Tests.csproj)<br>[Tests/README.md](../../../../sources/yotsuda__PowerShell.MCP/Tests/README.md)<br>[Tests/Run-AllTests.ps1](../../../../sources/yotsuda__PowerShell.MCP/Tests/Run-AllTests.ps1)<br>[Tests/xunit.runner.json](../../../../sources/yotsuda__PowerShell.MCP/Tests/xunit.runner.json) |
| CI workflows | 4 | [.github/workflows/claude.yml](../../../../sources/yotsuda__PowerShell.MCP/.github/workflows/claude.yml)<br>[.github/workflows/cross-platform-test.yml](../../../../sources/yotsuda__PowerShell.MCP/.github/workflows/cross-platform-test.yml)<br>[.github/workflows/macos-terminal-test.yml](../../../../sources/yotsuda__PowerShell.MCP/.github/workflows/macos-terminal-test.yml)<br>[.github/workflows/release.yml](../../../../sources/yotsuda__PowerShell.MCP/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [SECURITY.md](../../../../sources/yotsuda__PowerShell.MCP/SECURITY.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `PowerShell.MCP.sln`, `Tests/PowerShell.MCP.Tests.csproj`, `Staging/PowerShell.MCP.psd1`.
2. Map agent/tool runtime through: `PowerShell.MCP.Proxy/Tools/PowerShellTools.cs`.
3. Verify behavior through test/eval files: `Tests/Invoke-PesterConcise.ps1`, `Tests/PesterConfiguration.psd1`, `Tests/PowerShell.MCP.Tests.csproj`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 The universal MCP server for Claude Code and other MCP compatible clients. One installation gives AI access to 10,000+ P. 핵심 구조 신호는 C#, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
