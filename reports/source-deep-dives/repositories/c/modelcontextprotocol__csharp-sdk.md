# modelcontextprotocol/csharp-sdk Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

The official C# SDK for Model Context Protocol servers and clients. Maintained in collaboration with Microsoft.

## 요약

- 조사 단위: `sources/modelcontextprotocol__csharp-sdk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 802 files, 142 directories, depth score 114, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=Makefile, package.json이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | modelcontextprotocol/csharp-sdk |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | C# |
| Stars | 4335 |
| Forks | 728 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/modelcontextprotocol__csharp-sdk](../../../../sources/modelcontextprotocol__csharp-sdk) |
| Existing report | [reports/global-trending/repositories/modelcontextprotocol__csharp-sdk.md](../../../global-trending/repositories/modelcontextprotocol__csharp-sdk.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 802 / 142 |
| Max observed depth | 7 |
| Top directories | .config, .devcontainer, .github, docs, samples, src, tests |
| Top extensions | .cs: 644, .md: 54, .csproj: 34, .json: 32, .yml: 10, (none): 7, .http: 6, .props: 4, .png: 2, .config: 1, .html: 1, .ico: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 88 |
| docs | documentation surface | 42 |
| src | source boundary | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| samples | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | clean | make clean |
| utility | Makefile | restore | make restore |
| build | Makefile | build | make build |
| test | Makefile | test | make test |
| test | Makefile | test-aot | make test-aot |
| utility | Makefile | pack | make pack |
| utility | Makefile | generate-docs | make generate-docs |
| serve-dev | Makefile | serve-docs | make serve-docs |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
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
| config | [Makefile](../../../../sources/modelcontextprotocol__csharp-sdk/Makefile) | config signal |
| config | [package.json](../../../../sources/modelcontextprotocol__csharp-sdk/package.json) | config signal |
| ci | [.github/workflows/ci-build-test.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/ci-build-test.yml) | ci signal |
| ci | [.github/workflows/ci-code-coverage.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/ci-code-coverage.yml) | ci signal |
| ci | [.github/workflows/codeql.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/codeql.yml) | ci signal |
| ci | [.github/workflows/copilot-setup-steps.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/copilot-setup-steps.yml) | ci signal |
| docs | [README.md](../../../../sources/modelcontextprotocol__csharp-sdk/README.md) | docs signal |
| docs | [samples/WeatherAppServer/README.md](../../../../sources/modelcontextprotocol__csharp-sdk/samples/WeatherAppServer/README.md) | docs signal |
| docs | [samples/TasksExtension/README.md](../../../../sources/modelcontextprotocol__csharp-sdk/samples/TasksExtension/README.md) | docs signal |
| docs | [samples/ProtectedMcpServer/README.md](../../../../sources/modelcontextprotocol__csharp-sdk/samples/ProtectedMcpServer/README.md) | docs signal |
| eval | [tests/Directory.Build.props](../../../../sources/modelcontextprotocol__csharp-sdk/tests/Directory.Build.props) | eval support |
| eval | [tests/ModelContextProtocol.TestSseServer/ModelContextProtocol.TestSseServer.csproj](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestSseServer/ModelContextProtocol.TestSseServer.csproj) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 40 | [tests/ModelContextProtocol.ConformanceServer/Tools/ConformanceTools.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.ConformanceServer/Tools/ConformanceTools.cs)<br>[tests/ModelContextProtocol.ConformanceServer/Tools/IncompleteResultTools.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.ConformanceServer/Tools/IncompleteResultTools.cs)<br>[src/ModelContextProtocol.Core/Protocol/Tool.cs](../../../../sources/modelcontextprotocol__csharp-sdk/src/ModelContextProtocol.Core/Protocol/Tool.cs)<br>[samples/TestServerWithHosting/Tools/EchoTool.cs](../../../../sources/modelcontextprotocol__csharp-sdk/samples/TestServerWithHosting/Tools/EchoTool.cs)<br>[samples/TestServerWithHosting/Tools/SampleLlmTool.cs](../../../../sources/modelcontextprotocol__csharp-sdk/samples/TestServerWithHosting/Tools/SampleLlmTool.cs)<br>[samples/QuickstartWeatherServer/Tools/HttpClientExt.cs](../../../../sources/modelcontextprotocol__csharp-sdk/samples/QuickstartWeatherServer/Tools/HttpClientExt.cs)<br>[samples/QuickstartWeatherServer/Tools/WeatherTools.cs](../../../../sources/modelcontextprotocol__csharp-sdk/samples/QuickstartWeatherServer/Tools/WeatherTools.cs)<br>[samples/ProtectedMcpServer/Tools/WeatherTools.cs](../../../../sources/modelcontextprotocol__csharp-sdk/samples/ProtectedMcpServer/Tools/WeatherTools.cs) |
| mcp | 568 | [ModelContextProtocol.slnx](../../../../sources/modelcontextprotocol__csharp-sdk/ModelContextProtocol.slnx)<br>[tests/ModelContextProtocol.TestSseServer/ModelContextProtocol.TestSseServer.csproj](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestSseServer/ModelContextProtocol.TestSseServer.csproj)<br>[tests/ModelContextProtocol.TestSseServer/Program.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestSseServer/Program.cs)<br>[tests/ModelContextProtocol.TestSseServer/Properties/launchSettings.json](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestSseServer/Properties/launchSettings.json)<br>[tests/ModelContextProtocol.TestServer/ModelContextProtocol.TestServer.csproj](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestServer/ModelContextProtocol.TestServer.csproj)<br>[tests/ModelContextProtocol.TestServer/Program.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestServer/Program.cs)<br>[tests/ModelContextProtocol.Tests/AIContentExtensionsTests.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.Tests/AIContentExtensionsTests.cs)<br>[tests/ModelContextProtocol.Tests/ClientIntegrationTestFixture.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.Tests/ClientIntegrationTestFixture.cs) |
| retrieval | 2 | [docs/index.md](../../../../sources/modelcontextprotocol__csharp-sdk/docs/index.md)<br>[docs/concepts/index.md](../../../../sources/modelcontextprotocol__csharp-sdk/docs/concepts/index.md) |
| spec | 1 | [docs/roadmap.md](../../../../sources/modelcontextprotocol__csharp-sdk/docs/roadmap.md) |
| eval | 263 | [tests/Directory.Build.props](../../../../sources/modelcontextprotocol__csharp-sdk/tests/Directory.Build.props)<br>[tests/ModelContextProtocol.TestSseServer/ModelContextProtocol.TestSseServer.csproj](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestSseServer/ModelContextProtocol.TestSseServer.csproj)<br>[tests/ModelContextProtocol.TestSseServer/Program.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestSseServer/Program.cs)<br>[tests/ModelContextProtocol.TestSseServer/Properties/launchSettings.json](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestSseServer/Properties/launchSettings.json)<br>[tests/ModelContextProtocol.TestServer/ModelContextProtocol.TestServer.csproj](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestServer/ModelContextProtocol.TestServer.csproj)<br>[tests/ModelContextProtocol.TestServer/Program.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestServer/Program.cs)<br>[tests/ModelContextProtocol.Tests/AIContentExtensionsTests.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.Tests/AIContentExtensionsTests.cs)<br>[tests/ModelContextProtocol.Tests/ClientIntegrationTestFixture.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.Tests/ClientIntegrationTestFixture.cs) |
| security | 7 | [SECURITY.md](../../../../sources/modelcontextprotocol__csharp-sdk/SECURITY.md)<br>[tests/ModelContextProtocol.AspNetCore.Tests/OAuth/AuthEventTests.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.AspNetCore.Tests/OAuth/AuthEventTests.cs)<br>[tests/ModelContextProtocol.AspNetCore.Tests/OAuth/AuthTests.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.AspNetCore.Tests/OAuth/AuthTests.cs)<br>[tests/ModelContextProtocol.AspNetCore.Tests/OAuth/IdentityAssertionGrantIntegrationTests.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.AspNetCore.Tests/OAuth/IdentityAssertionGrantIntegrationTests.cs)<br>[tests/ModelContextProtocol.AspNetCore.Tests/OAuth/McpAuthenticationHandlerTests.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.AspNetCore.Tests/OAuth/McpAuthenticationHandlerTests.cs)<br>[tests/ModelContextProtocol.AspNetCore.Tests/OAuth/OAuthTestBase.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.AspNetCore.Tests/OAuth/OAuthTestBase.cs)<br>[tests/ModelContextProtocol.AspNetCore.Tests/OAuth/TokenCacheTests.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.AspNetCore.Tests/OAuth/TokenCacheTests.cs) |
| ci | 7 | [.github/workflows/ci-build-test.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/ci-build-test.yml)<br>[.github/workflows/ci-code-coverage.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/ci-code-coverage.yml)<br>[.github/workflows/codeql.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/codeql.yml)<br>[.github/workflows/copilot-setup-steps.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/copilot-setup-steps.yml)<br>[.github/workflows/docs.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/docs.yml)<br>[.github/workflows/markdown-link-check.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/markdown-link-check.yml)<br>[.github/workflows/release.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 1 | [.github/copilot-instructions.md](../../../../sources/modelcontextprotocol__csharp-sdk/.github/copilot-instructions.md) |
| docs | 74 | [README.md](../../../../sources/modelcontextprotocol__csharp-sdk/README.md)<br>[samples/WeatherAppServer/README.md](../../../../sources/modelcontextprotocol__csharp-sdk/samples/WeatherAppServer/README.md)<br>[samples/TasksExtension/README.md](../../../../sources/modelcontextprotocol__csharp-sdk/samples/TasksExtension/README.md)<br>[samples/ProtectedMcpServer/README.md](../../../../sources/modelcontextprotocol__csharp-sdk/samples/ProtectedMcpServer/README.md)<br>[samples/ProtectedMcpClient/README.md](../../../../sources/modelcontextprotocol__csharp-sdk/samples/ProtectedMcpClient/README.md)<br>[samples/FileBasedMcpServer/README.md](../../../../sources/modelcontextprotocol__csharp-sdk/samples/FileBasedMcpServer/README.md)<br>[samples/AspNetCoreMcpPerSessionTools/README.md](../../../../sources/modelcontextprotocol__csharp-sdk/samples/AspNetCoreMcpPerSessionTools/README.md)<br>[docs/docfx.json](../../../../sources/modelcontextprotocol__csharp-sdk/docs/docfx.json) |
| config | 2 | [Makefile](../../../../sources/modelcontextprotocol__csharp-sdk/Makefile)<br>[package.json](../../../../sources/modelcontextprotocol__csharp-sdk/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 263 | [tests/Directory.Build.props](../../../../sources/modelcontextprotocol__csharp-sdk/tests/Directory.Build.props)<br>[tests/ModelContextProtocol.TestSseServer/ModelContextProtocol.TestSseServer.csproj](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestSseServer/ModelContextProtocol.TestSseServer.csproj)<br>[tests/ModelContextProtocol.TestSseServer/Program.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestSseServer/Program.cs)<br>[tests/ModelContextProtocol.TestSseServer/Properties/launchSettings.json](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestSseServer/Properties/launchSettings.json)<br>[tests/ModelContextProtocol.TestServer/ModelContextProtocol.TestServer.csproj](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestServer/ModelContextProtocol.TestServer.csproj)<br>[tests/ModelContextProtocol.TestServer/Program.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestServer/Program.cs) |
| CI workflows | 7 | [.github/workflows/ci-build-test.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/ci-build-test.yml)<br>[.github/workflows/ci-code-coverage.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/ci-code-coverage.yml)<br>[.github/workflows/codeql.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/codeql.yml)<br>[.github/workflows/copilot-setup-steps.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/copilot-setup-steps.yml)<br>[.github/workflows/docs.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/docs.yml)<br>[.github/workflows/markdown-link-check.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/markdown-link-check.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 7 | [SECURITY.md](../../../../sources/modelcontextprotocol__csharp-sdk/SECURITY.md)<br>[tests/ModelContextProtocol.AspNetCore.Tests/OAuth/AuthEventTests.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.AspNetCore.Tests/OAuth/AuthEventTests.cs)<br>[tests/ModelContextProtocol.AspNetCore.Tests/OAuth/AuthTests.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.AspNetCore.Tests/OAuth/AuthTests.cs)<br>[tests/ModelContextProtocol.AspNetCore.Tests/OAuth/IdentityAssertionGrantIntegrationTests.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.AspNetCore.Tests/OAuth/IdentityAssertionGrantIntegrationTests.cs)<br>[tests/ModelContextProtocol.AspNetCore.Tests/OAuth/McpAuthenticationHandlerTests.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.AspNetCore.Tests/OAuth/McpAuthenticationHandlerTests.cs)<br>[tests/ModelContextProtocol.AspNetCore.Tests/OAuth/OAuthTestBase.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.AspNetCore.Tests/OAuth/OAuthTestBase.cs) |
| Agent instructions | 1 | [.github/copilot-instructions.md](../../../../sources/modelcontextprotocol__csharp-sdk/.github/copilot-instructions.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `Makefile`, `package.json`, `.github/workflows/ci-build-test.yml`.
2. Map agent/tool runtime through: `tests/ModelContextProtocol.ConformanceServer/Tools/ConformanceTools.cs`, `tests/ModelContextProtocol.ConformanceServer/Tools/IncompleteResultTools.cs`, `src/ModelContextProtocol.Core/Protocol/Tool.cs`.
3. Inspect retrieval/memory/indexing through: `docs/index.md`, `docs/concepts/index.md`.
4. Verify behavior through test/eval files: `tests/Directory.Build.props`, `tests/ModelContextProtocol.TestSseServer/ModelContextProtocol.TestSseServer.csproj`, `tests/ModelContextProtocol.TestSseServer/Program.cs`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 The official C SDK for Model Context Protocol servers and clients. Maintained in collaboration with Microsoft.. 핵심 구조 신호는 C#, package.json, Makefile, README.md, LICENSE, modelcontextprotocol이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
