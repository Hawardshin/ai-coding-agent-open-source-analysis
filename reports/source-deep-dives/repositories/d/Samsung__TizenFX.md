# Samsung/TizenFX Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

C# Device APIs for Tizen

## 요약

- 조사 단위: `sources/Samsung__TizenFX` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 8,724 files, 1,177 directories, depth score 113, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=tools/bin/APITool.deps.json, tools/bin/APITool.dll, tools/bin/APITool.pdb이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/TizenFX |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | C# |
| Stars | 210 |
| Forks | 276 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Samsung__TizenFX](../../../../sources/Samsung__TizenFX) |
| Existing report | [reports/korea-trending/repositories/Samsung__TizenFX.md](../../../korea-trending/repositories/Samsung__TizenFX.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 8724 / 1177 |
| Max observed depth | 10 |
| Top directories | .agents, .github, internals, packaging, pkg, skills, src, test, tools |
| Top extensions | .cs: 5993, .png: 1441, .jpg: 381, .xaml: 229, .csproj: 173, .sln: 130, .md: 60, .xml: 60, .json: 48, .html: 15, .dll: 14, .nupkg: 14 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 76 |
| .github | ci surface | 1 |
| internals | top-level component | 1 |
| packaging | top-level component | 1 |
| pkg | top-level component | 1 |
| skills | top-level component | 1 |
| test | validation surface | 1 |
| tools | top-level component | 1 |


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
| entrypoints | [tools/bin/APITool.deps.json](../../../../sources/Samsung__TizenFX/tools/bin/APITool.deps.json) | entrypoints signal |
| entrypoints | [tools/bin/APITool.dll](../../../../sources/Samsung__TizenFX/tools/bin/APITool.dll) | entrypoints signal |
| entrypoints | [tools/bin/APITool.pdb](../../../../sources/Samsung__TizenFX/tools/bin/APITool.pdb) | entrypoints signal |
| entrypoints | [tools/bin/APITool.runtimeconfig.json](../../../../sources/Samsung__TizenFX/tools/bin/APITool.runtimeconfig.json) | entrypoints signal |
| docs | [README.md](../../../../sources/Samsung__TizenFX/README.md) | docs signal |
| docs | [test/Tizen.NUI.Tests/Tizen.NUI.Components.Devel.Tests/README.md](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Tests/Tizen.NUI.Components.Devel.Tests/README.md) | docs signal |
| docs | [test/Tizen.NUI.StyleGuide/README.md](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.StyleGuide/README.md) | docs signal |
| docs | [test/Tizen.AIAvatar.Example/README.md](../../../../sources/Samsung__TizenFX/test/Tizen.AIAvatar.Example/README.md) | docs signal |
| eval | [test/Tizen.WindowSystem.Samples/tizen-manifest.xml](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.Samples/tizen-manifest.xml) | eval signal |
| eval | [test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.cs](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.cs) | eval signal |
| eval | [test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.csproj](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.csproj) | eval signal |
| eval | [test/Tizen.WindowSystem.Samples/shared/res/Tizen.WindowSystem.Samples.png](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.Samples/shared/res/Tizen.WindowSystem.Samples.png) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 9 | [tools/bin/APITool.deps.json](../../../../sources/Samsung__TizenFX/tools/bin/APITool.deps.json)<br>[tools/bin/APITool.dll](../../../../sources/Samsung__TizenFX/tools/bin/APITool.dll)<br>[tools/bin/APITool.pdb](../../../../sources/Samsung__TizenFX/tools/bin/APITool.pdb)<br>[tools/bin/APITool.runtimeconfig.json](../../../../sources/Samsung__TizenFX/tools/bin/APITool.runtimeconfig.json)<br>[tools/bin/CommandLine.dll](../../../../sources/Samsung__TizenFX/tools/bin/CommandLine.dll)<br>[tools/bin/Mono.Cecil.dll](../../../../sources/Samsung__TizenFX/tools/bin/Mono.Cecil.dll)<br>[tools/bin/Mono.Cecil.Mdb.dll](../../../../sources/Samsung__TizenFX/tools/bin/Mono.Cecil.Mdb.dll)<br>[tools/bin/Mono.Cecil.Pdb.dll](../../../../sources/Samsung__TizenFX/tools/bin/Mono.Cecil.Pdb.dll) |
| agentRuntime | 22 | [tools/update-tools.sh](../../../../sources/Samsung__TizenFX/tools/update-tools.sh)<br>[tools/scripts/add_module.sh](../../../../sources/Samsung__TizenFX/tools/scripts/add_module.sh)<br>[tools/scripts/module.csproj.template](../../../../sources/Samsung__TizenFX/tools/scripts/module.csproj.template)<br>[tools/scripts/retry.sh](../../../../sources/Samsung__TizenFX/tools/scripts/retry.sh)<br>[tools/scripts/timeout.sh](../../../../sources/Samsung__TizenFX/tools/scripts/timeout.sh)<br>[tools/bin/APITool.deps.json](../../../../sources/Samsung__TizenFX/tools/bin/APITool.deps.json)<br>[tools/bin/APITool.dll](../../../../sources/Samsung__TizenFX/tools/bin/APITool.dll)<br>[tools/bin/APITool.pdb](../../../../sources/Samsung__TizenFX/tools/bin/APITool.pdb) |
| mcp | 0 | not obvious |
| retrieval | 28 | [test/Tizen.NUI.Tests/Tizen.NUI.Devel.Tests/res/index.xml](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Tests/Tizen.NUI.Devel.Tests/res/index.xml)<br>[test/Tizen.NUI.Tests/Tizen.NUI.Devel.Tests/res/webview/index.html](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Tests/Tizen.NUI.Devel.Tests/res/webview/index.html)<br>[test/Tizen.NUI.Tests/Tizen.NUI.Devel.Manual.Tests/res/webview/index.html](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Tests/Tizen.NUI.Devel.Manual.Tests/res/webview/index.html)<br>[test/Tizen.NUI.Tests/Tizen.NUI.Components.Devel.Tests/res/index.xml](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Tests/Tizen.NUI.Components.Devel.Tests/res/index.xml)<br>[test/Tizen.NUI.Samples/Tizen.NUI.Samples/res/images/FH3/6. List/list_index_controller_swich_dim.png](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Samples/Tizen.NUI.Samples/res/images/FH3/6. List/list_index_controller_swich_dim.png)<br>[test/Tizen.NUI.Samples/Tizen.NUI.Samples/res/images/FH3/6. List/list_index_controller_swich.png](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Samples/Tizen.NUI.Samples/res/images/FH3/6. List/list_index_controller_swich.png)<br>[test/Tizen.NUI.Samples/Tizen.NUI.Samples/res/images/FH3/6. List/list_index_next_button.png](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Samples/Tizen.NUI.Samples/res/images/FH3/6. List/list_index_next_button.png)<br>[test/Tizen.NUI.Samples/Tizen.NUI.Samples/res/images/FH3/6. List/list_index_swich_bg_off_dim.png](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Samples/Tizen.NUI.Samples/res/images/FH3/6. List/list_index_swich_bg_off_dim.png) |
| spec | 10 | [src/Tizen.NUI.Components.Design/Tizen.NUI.Components.Design.csproj](../../../../sources/Samsung__TizenFX/src/Tizen.NUI.Components.Design/Tizen.NUI.Components.Design.csproj)<br>[src/Tizen.NUI.Components.Design/Tizen.NUI.Components.Design.sln](../../../../sources/Samsung__TizenFX/src/Tizen.NUI.Components.Design/Tizen.NUI.Components.Design.sln)<br>[src/Tizen.NUI.Components.Design/Tizen.NUI.Components.Design/AttributeTableBuilder.cs](../../../../sources/Samsung__TizenFX/src/Tizen.NUI.Components.Design/Tizen.NUI.Components.Design/AttributeTableBuilder.cs)<br>[src/Tizen.NUI.Components.Design/Tizen.NUI.Components.Design/RegisterMetadata.cs](../../../../sources/Samsung__TizenFX/src/Tizen.NUI.Components.Design/Tizen.NUI.Components.Design/RegisterMetadata.cs)<br>[src/Tizen.NUI.Components.Design/Tizen.NUI.Components/AttributeTableBuilder.cs](../../../../sources/Samsung__TizenFX/src/Tizen.NUI.Components.Design/Tizen.NUI.Components/AttributeTableBuilder.cs)<br>[src/Tizen.NUI.Components.Design/Tizen.NUI.Components/RegisterMetadata.cs](../../../../sources/Samsung__TizenFX/src/Tizen.NUI.Components.Design/Tizen.NUI.Components/RegisterMetadata.cs)<br>[src/Tizen.NUI.Components.Design/Properties/AssemblyInfo.cs](../../../../sources/Samsung__TizenFX/src/Tizen.NUI.Components.Design/Properties/AssemblyInfo.cs)<br>[pkg/Tizen.NET.API15/design/Tizen.NUI.Components.Design.dll](../../../../sources/Samsung__TizenFX/pkg/Tizen.NET.API15/design/Tizen.NUI.Components.Design.dll) |
| eval | 4754 | [test/Tizen.WindowSystem.Samples/tizen-manifest.xml](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.Samples/tizen-manifest.xml)<br>[test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.cs](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.cs)<br>[test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.csproj](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.csproj)<br>[test/Tizen.WindowSystem.Samples/shared/res/Tizen.WindowSystem.Samples.png](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.Samples/shared/res/Tizen.WindowSystem.Samples.png)<br>[test/Tizen.WindowSystem.InputGesture/tizen_dotnet_project.yaml](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.InputGesture/tizen_dotnet_project.yaml)<br>[test/Tizen.WindowSystem.InputGesture/tizen-manifest.xml](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.InputGesture/tizen-manifest.xml)<br>[test/Tizen.WindowSystem.InputGesture/Tizen.WindowSystem.InputGesture.cs](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.InputGesture/Tizen.WindowSystem.InputGesture.cs)<br>[test/Tizen.WindowSystem.InputGesture/Tizen.WindowSystem.InputGesture.csproj](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.InputGesture/Tizen.WindowSystem.InputGesture.csproj) |
| security | 101 | [test/Tizen.NUI.Tests/nunit.framework/Common/Guard.cs](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Tests/nunit.framework/Common/Guard.cs)<br>[test/Tizen.NUI.Devel.Tests.Ubuntu/nunit.framework/Common/Guard.cs](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Devel.Tests.Ubuntu/nunit.framework/Common/Guard.cs)<br>[src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn.csproj](../../../../sources/Samsung__TizenFX/src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn.csproj)<br>[src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn.sln](../../../../sources/Samsung__TizenFX/src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn.sln)<br>[src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/AuthenticationExtension.cs](../../../../sources/Samsung__TizenFX/src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/AuthenticationExtension.cs)<br>[src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/AuthenticationSelectionCriteria.cs](../../../../sources/Samsung__TizenFX/src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/AuthenticationSelectionCriteria.cs)<br>[src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/Authenticator.cs](../../../../sources/Samsung__TizenFX/src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/Authenticator.cs)<br>[src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/AuthenticatorAssertionResponse.cs](../../../../sources/Samsung__TizenFX/src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/AuthenticatorAssertionResponse.cs) |
| ci | 12 | [.github/workflows/build-branches.yml](../../../../sources/Samsung__TizenFX/.github/workflows/build-branches.yml)<br>[.github/workflows/build-pull-request.yml](../../../../sources/Samsung__TizenFX/.github/workflows/build-pull-request.yml)<br>[.github/workflows/check-api-level.yml](../../../../sources/Samsung__TizenFX/.github/workflows/check-api-level.yml)<br>[.github/workflows/deploy-documents-for-tizen-docs.yml](../../../../sources/Samsung__TizenFX/.github/workflows/deploy-documents-for-tizen-docs.yml)<br>[.github/workflows/deploy-documents.yml](../../../../sources/Samsung__TizenFX/.github/workflows/deploy-documents.yml)<br>[.github/workflows/deploy-packages.yml](../../../../sources/Samsung__TizenFX/.github/workflows/deploy-packages.yml)<br>[.github/workflows/nightly-release.yml](../../../../sources/Samsung__TizenFX/.github/workflows/nightly-release.yml)<br>[.github/workflows/nui-code-style-review.yml](../../../../sources/Samsung__TizenFX/.github/workflows/nui-code-style-review.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 67 | [README.md](../../../../sources/Samsung__TizenFX/README.md)<br>[test/Tizen.NUI.Tests/Tizen.NUI.Components.Devel.Tests/README.md](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Tests/Tizen.NUI.Components.Devel.Tests/README.md)<br>[test/Tizen.NUI.StyleGuide/README.md](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.StyleGuide/README.md)<br>[test/Tizen.AIAvatar.Example/README.md](../../../../sources/Samsung__TizenFX/test/Tizen.AIAvatar.Example/README.md)<br>[test/PerformanceTest/README.md](../../../../sources/Samsung__TizenFX/test/PerformanceTest/README.md)<br>[test/NUIWindowLayout/README.md](../../../../sources/Samsung__TizenFX/test/NUIWindowLayout/README.md)<br>[test/NUITizenGallery/README.md](../../../../sources/Samsung__TizenFX/test/NUITizenGallery/README.md)<br>[test/NUITestSample/CommonUI_Samples/README.md](../../../../sources/Samsung__TizenFX/test/NUITestSample/CommonUI_Samples/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 4754 | [test/Tizen.WindowSystem.Samples/tizen-manifest.xml](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.Samples/tizen-manifest.xml)<br>[test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.cs](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.cs)<br>[test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.csproj](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.csproj)<br>[test/Tizen.WindowSystem.Samples/shared/res/Tizen.WindowSystem.Samples.png](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.Samples/shared/res/Tizen.WindowSystem.Samples.png)<br>[test/Tizen.WindowSystem.InputGesture/tizen_dotnet_project.yaml](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.InputGesture/tizen_dotnet_project.yaml)<br>[test/Tizen.WindowSystem.InputGesture/tizen-manifest.xml](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.InputGesture/tizen-manifest.xml) |
| CI workflows | 12 | [.github/workflows/build-branches.yml](../../../../sources/Samsung__TizenFX/.github/workflows/build-branches.yml)<br>[.github/workflows/build-pull-request.yml](../../../../sources/Samsung__TizenFX/.github/workflows/build-pull-request.yml)<br>[.github/workflows/check-api-level.yml](../../../../sources/Samsung__TizenFX/.github/workflows/check-api-level.yml)<br>[.github/workflows/deploy-documents-for-tizen-docs.yml](../../../../sources/Samsung__TizenFX/.github/workflows/deploy-documents-for-tizen-docs.yml)<br>[.github/workflows/deploy-documents.yml](../../../../sources/Samsung__TizenFX/.github/workflows/deploy-documents.yml)<br>[.github/workflows/deploy-packages.yml](../../../../sources/Samsung__TizenFX/.github/workflows/deploy-packages.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 101 | [test/Tizen.NUI.Tests/nunit.framework/Common/Guard.cs](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Tests/nunit.framework/Common/Guard.cs)<br>[test/Tizen.NUI.Devel.Tests.Ubuntu/nunit.framework/Common/Guard.cs](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Devel.Tests.Ubuntu/nunit.framework/Common/Guard.cs)<br>[src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn.csproj](../../../../sources/Samsung__TizenFX/src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn.csproj)<br>[src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn.sln](../../../../sources/Samsung__TizenFX/src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn.sln)<br>[src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/AuthenticationExtension.cs](../../../../sources/Samsung__TizenFX/src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/AuthenticationExtension.cs)<br>[src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/AuthenticationSelectionCriteria.cs](../../../../sources/Samsung__TizenFX/src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/AuthenticationSelectionCriteria.cs) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `tools/bin/APITool.deps.json`, `tools/bin/APITool.dll`, `tools/bin/APITool.pdb`.
2. Trace execution through entrypoints: `tools/bin/APITool.deps.json`, `tools/bin/APITool.dll`, `tools/bin/APITool.pdb`.
3. Map agent/tool runtime through: `tools/update-tools.sh`, `tools/scripts/add_module.sh`, `tools/scripts/module.csproj.template`.
4. Inspect retrieval/memory/indexing through: `test/Tizen.NUI.Tests/Tizen.NUI.Devel.Tests/res/index.xml`, `test/Tizen.NUI.Tests/Tizen.NUI.Devel.Tests/res/webview/index.html`, `test/Tizen.NUI.Tests/Tizen.NUI.Devel.Manual.Tests/res/webview/index.html`.
5. Verify behavior through test/eval files: `test/Tizen.WindowSystem.Samples/tizen-manifest.xml`, `test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.cs`, `test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.csproj`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 C Device APIs for Tizen. 핵심 구조 신호는 C#, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
