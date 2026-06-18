# modelcontextprotocol/csharp-sdk 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

The official C# SDK for Model Context Protocol servers and clients. Maintained in collaboration with Microsoft.

## 요약

- 조사 단위: `sources/modelcontextprotocol__csharp-sdk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 802 files, 142 directories, depth score 108, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=Makefile, package.json이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | modelcontextprotocol/csharp-sdk |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | C# |
| Stars | 4335 |
| Forks | 728 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/modelcontextprotocol__csharp-sdk](../../../../sources/modelcontextprotocol__csharp-sdk) |
| 기존 보고서 | [reports/global-trending/repositories/modelcontextprotocol__csharp-sdk.md](../../../global-trending/repositories/modelcontextprotocol__csharp-sdk.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 802 / 142 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .config, .devcontainer, .github, docs, samples, src, tests |
| 상위 확장자 | .cs: 644, .md: 54, .csproj: 34, .json: 32, .yml: 10, (none): 7, .http: 6, .props: 4, .png: 2, .config: 1, .html: 1, .ico: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 88 |
| docs | documentation surface | 42 |
| src | source boundary | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| samples | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | clean | make clean |
| utility | Makefile | restore | make restore |
| build | Makefile | build | make build |
| test | Makefile | test | make test |
| test | Makefile | test-aot | make test-aot |
| utility | Makefile | pack | make pack |
| utility | Makefile | generate-docs | make generate-docs |
| serve-dev | Makefile | serve-docs | make serve-docs |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 40 | [tests/ModelContextProtocol.ConformanceServer/Tools/ConformanceTools.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.ConformanceServer/Tools/ConformanceTools.cs)<br>[tests/ModelContextProtocol.ConformanceServer/Tools/IncompleteResultTools.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.ConformanceServer/Tools/IncompleteResultTools.cs)<br>[src/ModelContextProtocol.Core/Protocol/Tool.cs](../../../../sources/modelcontextprotocol__csharp-sdk/src/ModelContextProtocol.Core/Protocol/Tool.cs)<br>[samples/TestServerWithHosting/Tools/EchoTool.cs](../../../../sources/modelcontextprotocol__csharp-sdk/samples/TestServerWithHosting/Tools/EchoTool.cs)<br>[samples/TestServerWithHosting/Tools/SampleLlmTool.cs](../../../../sources/modelcontextprotocol__csharp-sdk/samples/TestServerWithHosting/Tools/SampleLlmTool.cs)<br>[samples/QuickstartWeatherServer/Tools/HttpClientExt.cs](../../../../sources/modelcontextprotocol__csharp-sdk/samples/QuickstartWeatherServer/Tools/HttpClientExt.cs)<br>[samples/QuickstartWeatherServer/Tools/WeatherTools.cs](../../../../sources/modelcontextprotocol__csharp-sdk/samples/QuickstartWeatherServer/Tools/WeatherTools.cs)<br>[samples/ProtectedMcpServer/Tools/WeatherTools.cs](../../../../sources/modelcontextprotocol__csharp-sdk/samples/ProtectedMcpServer/Tools/WeatherTools.cs) |
| mcp | 568 | [ModelContextProtocol.slnx](../../../../sources/modelcontextprotocol__csharp-sdk/ModelContextProtocol.slnx)<br>[tests/ModelContextProtocol.TestSseServer/ModelContextProtocol.TestSseServer.csproj](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestSseServer/ModelContextProtocol.TestSseServer.csproj)<br>[tests/ModelContextProtocol.TestSseServer/Program.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestSseServer/Program.cs)<br>[tests/ModelContextProtocol.TestSseServer/Properties/launchSettings.json](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestSseServer/Properties/launchSettings.json)<br>[tests/ModelContextProtocol.TestServer/ModelContextProtocol.TestServer.csproj](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestServer/ModelContextProtocol.TestServer.csproj)<br>[tests/ModelContextProtocol.TestServer/Program.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestServer/Program.cs)<br>[tests/ModelContextProtocol.Tests/AIContentExtensionsTests.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.Tests/AIContentExtensionsTests.cs)<br>[tests/ModelContextProtocol.Tests/ClientIntegrationTestFixture.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.Tests/ClientIntegrationTestFixture.cs) |
| retrieval | 2 | [docs/index.md](../../../../sources/modelcontextprotocol__csharp-sdk/docs/index.md)<br>[docs/concepts/index.md](../../../../sources/modelcontextprotocol__csharp-sdk/docs/concepts/index.md) |
| spec | 1 | [docs/roadmap.md](../../../../sources/modelcontextprotocol__csharp-sdk/docs/roadmap.md) |
| eval | 263 | [tests/Directory.Build.props](../../../../sources/modelcontextprotocol__csharp-sdk/tests/Directory.Build.props)<br>[tests/ModelContextProtocol.TestSseServer/ModelContextProtocol.TestSseServer.csproj](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestSseServer/ModelContextProtocol.TestSseServer.csproj)<br>[tests/ModelContextProtocol.TestSseServer/Program.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestSseServer/Program.cs)<br>[tests/ModelContextProtocol.TestSseServer/Properties/launchSettings.json](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestSseServer/Properties/launchSettings.json)<br>[tests/ModelContextProtocol.TestServer/ModelContextProtocol.TestServer.csproj](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestServer/ModelContextProtocol.TestServer.csproj)<br>[tests/ModelContextProtocol.TestServer/Program.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestServer/Program.cs)<br>[tests/ModelContextProtocol.Tests/AIContentExtensionsTests.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.Tests/AIContentExtensionsTests.cs)<br>[tests/ModelContextProtocol.Tests/ClientIntegrationTestFixture.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.Tests/ClientIntegrationTestFixture.cs) |
| security | 7 | [SECURITY.md](../../../../sources/modelcontextprotocol__csharp-sdk/SECURITY.md)<br>[tests/ModelContextProtocol.AspNetCore.Tests/OAuth/AuthEventTests.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.AspNetCore.Tests/OAuth/AuthEventTests.cs)<br>[tests/ModelContextProtocol.AspNetCore.Tests/OAuth/AuthTests.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.AspNetCore.Tests/OAuth/AuthTests.cs)<br>[tests/ModelContextProtocol.AspNetCore.Tests/OAuth/IdentityAssertionGrantIntegrationTests.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.AspNetCore.Tests/OAuth/IdentityAssertionGrantIntegrationTests.cs)<br>[tests/ModelContextProtocol.AspNetCore.Tests/OAuth/McpAuthenticationHandlerTests.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.AspNetCore.Tests/OAuth/McpAuthenticationHandlerTests.cs)<br>[tests/ModelContextProtocol.AspNetCore.Tests/OAuth/OAuthTestBase.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.AspNetCore.Tests/OAuth/OAuthTestBase.cs)<br>[tests/ModelContextProtocol.AspNetCore.Tests/OAuth/TokenCacheTests.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.AspNetCore.Tests/OAuth/TokenCacheTests.cs) |
| ci | 7 | [.github/workflows/ci-build-test.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/ci-build-test.yml)<br>[.github/workflows/ci-code-coverage.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/ci-code-coverage.yml)<br>[.github/workflows/codeql.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/codeql.yml)<br>[.github/workflows/copilot-setup-steps.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/copilot-setup-steps.yml)<br>[.github/workflows/docs.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/docs.yml)<br>[.github/workflows/markdown-link-check.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/markdown-link-check.yml)<br>[.github/workflows/release.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [.github/copilot-instructions.md](../../../../sources/modelcontextprotocol__csharp-sdk/.github/copilot-instructions.md) |
| docs | 74 | [README.md](../../../../sources/modelcontextprotocol__csharp-sdk/README.md)<br>[samples/WeatherAppServer/README.md](../../../../sources/modelcontextprotocol__csharp-sdk/samples/WeatherAppServer/README.md)<br>[samples/TasksExtension/README.md](../../../../sources/modelcontextprotocol__csharp-sdk/samples/TasksExtension/README.md)<br>[samples/ProtectedMcpServer/README.md](../../../../sources/modelcontextprotocol__csharp-sdk/samples/ProtectedMcpServer/README.md)<br>[samples/ProtectedMcpClient/README.md](../../../../sources/modelcontextprotocol__csharp-sdk/samples/ProtectedMcpClient/README.md)<br>[samples/FileBasedMcpServer/README.md](../../../../sources/modelcontextprotocol__csharp-sdk/samples/FileBasedMcpServer/README.md)<br>[samples/AspNetCoreMcpPerSessionTools/README.md](../../../../sources/modelcontextprotocol__csharp-sdk/samples/AspNetCoreMcpPerSessionTools/README.md)<br>[docs/docfx.json](../../../../sources/modelcontextprotocol__csharp-sdk/docs/docfx.json) |
| config | 2 | [Makefile](../../../../sources/modelcontextprotocol__csharp-sdk/Makefile)<br>[package.json](../../../../sources/modelcontextprotocol__csharp-sdk/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 263 | [tests/Directory.Build.props](../../../../sources/modelcontextprotocol__csharp-sdk/tests/Directory.Build.props)<br>[tests/ModelContextProtocol.TestSseServer/ModelContextProtocol.TestSseServer.csproj](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestSseServer/ModelContextProtocol.TestSseServer.csproj)<br>[tests/ModelContextProtocol.TestSseServer/Program.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestSseServer/Program.cs)<br>[tests/ModelContextProtocol.TestSseServer/Properties/launchSettings.json](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestSseServer/Properties/launchSettings.json)<br>[tests/ModelContextProtocol.TestServer/ModelContextProtocol.TestServer.csproj](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestServer/ModelContextProtocol.TestServer.csproj)<br>[tests/ModelContextProtocol.TestServer/Program.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.TestServer/Program.cs) |
| CI workflow | 7 | [.github/workflows/ci-build-test.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/ci-build-test.yml)<br>[.github/workflows/ci-code-coverage.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/ci-code-coverage.yml)<br>[.github/workflows/codeql.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/codeql.yml)<br>[.github/workflows/copilot-setup-steps.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/copilot-setup-steps.yml)<br>[.github/workflows/docs.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/docs.yml)<br>[.github/workflows/markdown-link-check.yml](../../../../sources/modelcontextprotocol__csharp-sdk/.github/workflows/markdown-link-check.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 7 | [SECURITY.md](../../../../sources/modelcontextprotocol__csharp-sdk/SECURITY.md)<br>[tests/ModelContextProtocol.AspNetCore.Tests/OAuth/AuthEventTests.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.AspNetCore.Tests/OAuth/AuthEventTests.cs)<br>[tests/ModelContextProtocol.AspNetCore.Tests/OAuth/AuthTests.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.AspNetCore.Tests/OAuth/AuthTests.cs)<br>[tests/ModelContextProtocol.AspNetCore.Tests/OAuth/IdentityAssertionGrantIntegrationTests.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.AspNetCore.Tests/OAuth/IdentityAssertionGrantIntegrationTests.cs)<br>[tests/ModelContextProtocol.AspNetCore.Tests/OAuth/McpAuthenticationHandlerTests.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.AspNetCore.Tests/OAuth/McpAuthenticationHandlerTests.cs)<br>[tests/ModelContextProtocol.AspNetCore.Tests/OAuth/OAuthTestBase.cs](../../../../sources/modelcontextprotocol__csharp-sdk/tests/ModelContextProtocol.AspNetCore.Tests/OAuth/OAuthTestBase.cs) |
| 에이전트 지시문 | 1 | [.github/copilot-instructions.md](../../../../sources/modelcontextprotocol__csharp-sdk/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `Makefile`, `package.json`, `.github/workflows/ci-build-test.yml`.
2. agent/tool runtime 매핑: `tests/ModelContextProtocol.ConformanceServer/Tools/ConformanceTools.cs`, `tests/ModelContextProtocol.ConformanceServer/Tools/IncompleteResultTools.cs`, `src/ModelContextProtocol.Core/Protocol/Tool.cs`.
3. retrieval/memory/indexing 확인: `docs/index.md`, `docs/concepts/index.md`.
4. test/eval 파일로 동작 검증: `tests/Directory.Build.props`, `tests/ModelContextProtocol.TestSseServer/ModelContextProtocol.TestSseServer.csproj`, `tests/ModelContextProtocol.TestSseServer/Program.cs`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 The official C SDK for Model Context Protocol servers and clients. Maintained in collaboration with Microsoft.. 핵심 구조 신호는 C#, package.json, Makefile, README.md, LICENSE, modelcontextprotocol이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
