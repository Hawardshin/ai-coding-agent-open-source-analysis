# yotsuda/PowerShell.MCP 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

The universal MCP server for Claude Code and other MCP-compatible clients. One installation gives AI access to 10,000+ PowerShell modules and any CLI tool. You and AI collaborate in the same console with full transparency. Supports Windows, Linux, and macOS.

## 요약

- 조사 단위: `sources/yotsuda__PowerShell.MCP` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 194 files, 38 directories, depth score 74, key references 9개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, eval/test harness, security/policy surface 구조로 읽힌다. 핵심 소스 근거는 mcp=PowerShell.MCP.sln, Tests/PowerShell.MCP.Tests.csproj, Staging/PowerShell.MCP.psd1이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | yotsuda/PowerShell.MCP |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | C# |
| Stars | 73 |
| Forks | 7 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/yotsuda__PowerShell.MCP](../../../../sources/yotsuda__PowerShell.MCP) |
| 기존 보고서 | [reports/global-trending/repositories/yotsuda__PowerShell.MCP.md](../../../global-trending/repositories/yotsuda__PowerShell.MCP.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 194 / 38 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, docs, images, licenses, PowerShell.MCP, PowerShell.MCP.Proxy, Staging, Tests |
| 상위 확장자 | .cs: 54, .ps1: 54, .md: 33, .resx: 19, .png: 9, (none): 7, .txt: 4, .yml: 4, .csproj: 3, .json: 2, .psd1: 2, .psm1: 2 |
| 소스 패턴 | agent/tool runtime, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| Tests | validation surface | 43 |
| docs | documentation surface | 5 |
| .github | ci surface | 1 |
| images | top-level component | 1 |
| licenses | top-level component | 1 |
| PowerShell.MCP | top-level component | 1 |
| PowerShell.MCP.Proxy | top-level component | 1 |
| Staging | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 1 | [PowerShell.MCP.Proxy/Tools/PowerShellTools.cs](../../../../sources/yotsuda__PowerShell.MCP/PowerShell.MCP.Proxy/Tools/PowerShellTools.cs) |
| mcp | 90 | [PowerShell.MCP.sln](../../../../sources/yotsuda__PowerShell.MCP/PowerShell.MCP.sln)<br>[Tests/PowerShell.MCP.Tests.csproj](../../../../sources/yotsuda__PowerShell.MCP/Tests/PowerShell.MCP.Tests.csproj)<br>[Staging/PowerShell.MCP.psd1](../../../../sources/yotsuda__PowerShell.MCP/Staging/PowerShell.MCP.psd1)<br>[Staging/PowerShell.MCP.psm1](../../../../sources/yotsuda__PowerShell.MCP/Staging/PowerShell.MCP.psm1)<br>[PowerShell.MCP.Proxy/PowerShell.MCP.Proxy.csproj](../../../../sources/yotsuda__PowerShell.MCP/PowerShell.MCP.Proxy/PowerShell.MCP.Proxy.csproj)<br>[PowerShell.MCP.Proxy/Program.cs](../../../../sources/yotsuda__PowerShell.MCP/PowerShell.MCP.Proxy/Program.cs)<br>[PowerShell.MCP.Proxy/Tools/PowerShellTools.cs](../../../../sources/yotsuda__PowerShell.MCP/PowerShell.MCP.Proxy/Tools/PowerShellTools.cs)<br>[PowerShell.MCP.Proxy/Services/ConsoleSessionManager.cs](../../../../sources/yotsuda__PowerShell.MCP/PowerShell.MCP.Proxy/Services/ConsoleSessionManager.cs) |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 77 | [Tests/Invoke-PesterConcise.ps1](../../../../sources/yotsuda__PowerShell.MCP/Tests/Invoke-PesterConcise.ps1)<br>[Tests/PesterConfiguration.psd1](../../../../sources/yotsuda__PowerShell.MCP/Tests/PesterConfiguration.psd1)<br>[Tests/PowerShell.MCP.Tests.csproj](../../../../sources/yotsuda__PowerShell.MCP/Tests/PowerShell.MCP.Tests.csproj)<br>[Tests/README.md](../../../../sources/yotsuda__PowerShell.MCP/Tests/README.md)<br>[Tests/Run-AllTests.ps1](../../../../sources/yotsuda__PowerShell.MCP/Tests/Run-AllTests.ps1)<br>[Tests/xunit.runner.json](../../../../sources/yotsuda__PowerShell.MCP/Tests/xunit.runner.json)<br>[Tests/Unit/Proxy/ConsoleSessionManagerTests.cs](../../../../sources/yotsuda__PowerShell.MCP/Tests/Unit/Proxy/ConsoleSessionManagerTests.cs)<br>[Tests/Unit/Proxy/PipeDiscoveryServiceTests.cs](../../../../sources/yotsuda__PowerShell.MCP/Tests/Unit/Proxy/PipeDiscoveryServiceTests.cs) |
| security | 1 | [SECURITY.md](../../../../sources/yotsuda__PowerShell.MCP/SECURITY.md) |
| ci | 4 | [.github/workflows/claude.yml](../../../../sources/yotsuda__PowerShell.MCP/.github/workflows/claude.yml)<br>[.github/workflows/cross-platform-test.yml](../../../../sources/yotsuda__PowerShell.MCP/.github/workflows/cross-platform-test.yml)<br>[.github/workflows/macos-terminal-test.yml](../../../../sources/yotsuda__PowerShell.MCP/.github/workflows/macos-terminal-test.yml)<br>[.github/workflows/release.yml](../../../../sources/yotsuda__PowerShell.MCP/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 7 | [README.md](../../../../sources/yotsuda__PowerShell.MCP/README.md)<br>[Tests/README.md](../../../../sources/yotsuda__PowerShell.MCP/Tests/README.md)<br>[PowerShell.MCP/PlatyPS/README.md](../../../../sources/yotsuda__PowerShell.MCP/PowerShell.MCP/PlatyPS/README.md)<br>[docs/ConPTY-Interactive-Execution.md](../../../../sources/yotsuda__PowerShell.MCP/docs/ConPTY-Interactive-Execution.md)<br>[docs/macOS-Test-Procedure.md](../../../../sources/yotsuda__PowerShell.MCP/docs/macOS-Test-Procedure.md)<br>[docs/pwsh-mcp-vs-ripple-evaluation.md](../../../../sources/yotsuda__PowerShell.MCP/docs/pwsh-mcp-vs-ripple-evaluation.md)<br>[docs/test-cases-multi-console.md](../../../../sources/yotsuda__PowerShell.MCP/docs/test-cases-multi-console.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 77 | [Tests/Invoke-PesterConcise.ps1](../../../../sources/yotsuda__PowerShell.MCP/Tests/Invoke-PesterConcise.ps1)<br>[Tests/PesterConfiguration.psd1](../../../../sources/yotsuda__PowerShell.MCP/Tests/PesterConfiguration.psd1)<br>[Tests/PowerShell.MCP.Tests.csproj](../../../../sources/yotsuda__PowerShell.MCP/Tests/PowerShell.MCP.Tests.csproj)<br>[Tests/README.md](../../../../sources/yotsuda__PowerShell.MCP/Tests/README.md)<br>[Tests/Run-AllTests.ps1](../../../../sources/yotsuda__PowerShell.MCP/Tests/Run-AllTests.ps1)<br>[Tests/xunit.runner.json](../../../../sources/yotsuda__PowerShell.MCP/Tests/xunit.runner.json) |
| CI workflow | 4 | [.github/workflows/claude.yml](../../../../sources/yotsuda__PowerShell.MCP/.github/workflows/claude.yml)<br>[.github/workflows/cross-platform-test.yml](../../../../sources/yotsuda__PowerShell.MCP/.github/workflows/cross-platform-test.yml)<br>[.github/workflows/macos-terminal-test.yml](../../../../sources/yotsuda__PowerShell.MCP/.github/workflows/macos-terminal-test.yml)<br>[.github/workflows/release.yml](../../../../sources/yotsuda__PowerShell.MCP/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/yotsuda__PowerShell.MCP/SECURITY.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `PowerShell.MCP.sln`, `Tests/PowerShell.MCP.Tests.csproj`, `Staging/PowerShell.MCP.psd1`.
2. agent/tool runtime 매핑: `PowerShell.MCP.Proxy/Tools/PowerShellTools.cs`.
3. test/eval 파일로 동작 검증: `Tests/Invoke-PesterConcise.ps1`, `Tests/PesterConfiguration.psd1`, `Tests/PowerShell.MCP.Tests.csproj`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The universal MCP server for Claude Code and other MCP compatible clients. One installation gives AI access to 10,000+ P. 핵심 구조 신호는 C#, README.md, LICENSE, tests, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
