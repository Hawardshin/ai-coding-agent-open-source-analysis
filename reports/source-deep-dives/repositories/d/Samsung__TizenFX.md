# Samsung/TizenFX 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

C# Device APIs for Tizen

## 요약

- 조사 단위: `sources/Samsung__TizenFX` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 8,724 files, 1,177 directories, depth score 107, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=tools/bin/APITool.deps.json, tools/bin/APITool.dll, tools/bin/APITool.pdb이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Samsung/TizenFX |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | C# |
| Stars | 210 |
| Forks | 276 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__TizenFX](../../../../sources/Samsung__TizenFX) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__TizenFX.md](../../../korea-trending/repositories/Samsung__TizenFX.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 8724 / 1177 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .agents, .github, internals, packaging, pkg, skills, src, test, tools |
| 상위 확장자 | .cs: 5993, .png: 1441, .jpg: 381, .xaml: 229, .csproj: 173, .sln: 130, .md: 60, .xml: 60, .json: 48, .html: 15, .dll: 14, .nupkg: 14 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 76 |
| .github | ci surface | 1 |
| internals | top-level component | 1 |
| packaging | top-level component | 1 |
| pkg | top-level component | 1 |
| skills | top-level component | 1 |
| test | validation surface | 1 |
| tools | top-level component | 1 |


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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 9 | [tools/bin/APITool.deps.json](../../../../sources/Samsung__TizenFX/tools/bin/APITool.deps.json)<br>[tools/bin/APITool.dll](../../../../sources/Samsung__TizenFX/tools/bin/APITool.dll)<br>[tools/bin/APITool.pdb](../../../../sources/Samsung__TizenFX/tools/bin/APITool.pdb)<br>[tools/bin/APITool.runtimeconfig.json](../../../../sources/Samsung__TizenFX/tools/bin/APITool.runtimeconfig.json)<br>[tools/bin/CommandLine.dll](../../../../sources/Samsung__TizenFX/tools/bin/CommandLine.dll)<br>[tools/bin/Mono.Cecil.dll](../../../../sources/Samsung__TizenFX/tools/bin/Mono.Cecil.dll)<br>[tools/bin/Mono.Cecil.Mdb.dll](../../../../sources/Samsung__TizenFX/tools/bin/Mono.Cecil.Mdb.dll)<br>[tools/bin/Mono.Cecil.Pdb.dll](../../../../sources/Samsung__TizenFX/tools/bin/Mono.Cecil.Pdb.dll) |
| agentRuntime | 22 | [tools/update-tools.sh](../../../../sources/Samsung__TizenFX/tools/update-tools.sh)<br>[tools/scripts/add_module.sh](../../../../sources/Samsung__TizenFX/tools/scripts/add_module.sh)<br>[tools/scripts/module.csproj.template](../../../../sources/Samsung__TizenFX/tools/scripts/module.csproj.template)<br>[tools/scripts/retry.sh](../../../../sources/Samsung__TizenFX/tools/scripts/retry.sh)<br>[tools/scripts/timeout.sh](../../../../sources/Samsung__TizenFX/tools/scripts/timeout.sh)<br>[tools/bin/APITool.deps.json](../../../../sources/Samsung__TizenFX/tools/bin/APITool.deps.json)<br>[tools/bin/APITool.dll](../../../../sources/Samsung__TizenFX/tools/bin/APITool.dll)<br>[tools/bin/APITool.pdb](../../../../sources/Samsung__TizenFX/tools/bin/APITool.pdb) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 28 | [test/Tizen.NUI.Tests/Tizen.NUI.Devel.Tests/res/index.xml](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Tests/Tizen.NUI.Devel.Tests/res/index.xml)<br>[test/Tizen.NUI.Tests/Tizen.NUI.Devel.Tests/res/webview/index.html](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Tests/Tizen.NUI.Devel.Tests/res/webview/index.html)<br>[test/Tizen.NUI.Tests/Tizen.NUI.Devel.Manual.Tests/res/webview/index.html](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Tests/Tizen.NUI.Devel.Manual.Tests/res/webview/index.html)<br>[test/Tizen.NUI.Tests/Tizen.NUI.Components.Devel.Tests/res/index.xml](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Tests/Tizen.NUI.Components.Devel.Tests/res/index.xml)<br>[test/Tizen.NUI.Samples/Tizen.NUI.Samples/res/images/FH3/6. List/list_index_controller_swich_dim.png](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Samples/Tizen.NUI.Samples/res/images/FH3/6. List/list_index_controller_swich_dim.png)<br>[test/Tizen.NUI.Samples/Tizen.NUI.Samples/res/images/FH3/6. List/list_index_controller_swich.png](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Samples/Tizen.NUI.Samples/res/images/FH3/6. List/list_index_controller_swich.png)<br>[test/Tizen.NUI.Samples/Tizen.NUI.Samples/res/images/FH3/6. List/list_index_next_button.png](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Samples/Tizen.NUI.Samples/res/images/FH3/6. List/list_index_next_button.png)<br>[test/Tizen.NUI.Samples/Tizen.NUI.Samples/res/images/FH3/6. List/list_index_swich_bg_off_dim.png](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Samples/Tizen.NUI.Samples/res/images/FH3/6. List/list_index_swich_bg_off_dim.png) |
| spec | 10 | [src/Tizen.NUI.Components.Design/Tizen.NUI.Components.Design.csproj](../../../../sources/Samsung__TizenFX/src/Tizen.NUI.Components.Design/Tizen.NUI.Components.Design.csproj)<br>[src/Tizen.NUI.Components.Design/Tizen.NUI.Components.Design.sln](../../../../sources/Samsung__TizenFX/src/Tizen.NUI.Components.Design/Tizen.NUI.Components.Design.sln)<br>[src/Tizen.NUI.Components.Design/Tizen.NUI.Components.Design/AttributeTableBuilder.cs](../../../../sources/Samsung__TizenFX/src/Tizen.NUI.Components.Design/Tizen.NUI.Components.Design/AttributeTableBuilder.cs)<br>[src/Tizen.NUI.Components.Design/Tizen.NUI.Components.Design/RegisterMetadata.cs](../../../../sources/Samsung__TizenFX/src/Tizen.NUI.Components.Design/Tizen.NUI.Components.Design/RegisterMetadata.cs)<br>[src/Tizen.NUI.Components.Design/Tizen.NUI.Components/AttributeTableBuilder.cs](../../../../sources/Samsung__TizenFX/src/Tizen.NUI.Components.Design/Tizen.NUI.Components/AttributeTableBuilder.cs)<br>[src/Tizen.NUI.Components.Design/Tizen.NUI.Components/RegisterMetadata.cs](../../../../sources/Samsung__TizenFX/src/Tizen.NUI.Components.Design/Tizen.NUI.Components/RegisterMetadata.cs)<br>[src/Tizen.NUI.Components.Design/Properties/AssemblyInfo.cs](../../../../sources/Samsung__TizenFX/src/Tizen.NUI.Components.Design/Properties/AssemblyInfo.cs)<br>[pkg/Tizen.NET.API15/design/Tizen.NUI.Components.Design.dll](../../../../sources/Samsung__TizenFX/pkg/Tizen.NET.API15/design/Tizen.NUI.Components.Design.dll) |
| eval | 4754 | [test/Tizen.WindowSystem.Samples/tizen-manifest.xml](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.Samples/tizen-manifest.xml)<br>[test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.cs](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.cs)<br>[test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.csproj](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.csproj)<br>[test/Tizen.WindowSystem.Samples/shared/res/Tizen.WindowSystem.Samples.png](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.Samples/shared/res/Tizen.WindowSystem.Samples.png)<br>[test/Tizen.WindowSystem.InputGesture/tizen_dotnet_project.yaml](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.InputGesture/tizen_dotnet_project.yaml)<br>[test/Tizen.WindowSystem.InputGesture/tizen-manifest.xml](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.InputGesture/tizen-manifest.xml)<br>[test/Tizen.WindowSystem.InputGesture/Tizen.WindowSystem.InputGesture.cs](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.InputGesture/Tizen.WindowSystem.InputGesture.cs)<br>[test/Tizen.WindowSystem.InputGesture/Tizen.WindowSystem.InputGesture.csproj](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.InputGesture/Tizen.WindowSystem.InputGesture.csproj) |
| security | 101 | [test/Tizen.NUI.Tests/nunit.framework/Common/Guard.cs](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Tests/nunit.framework/Common/Guard.cs)<br>[test/Tizen.NUI.Devel.Tests.Ubuntu/nunit.framework/Common/Guard.cs](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Devel.Tests.Ubuntu/nunit.framework/Common/Guard.cs)<br>[src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn.csproj](../../../../sources/Samsung__TizenFX/src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn.csproj)<br>[src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn.sln](../../../../sources/Samsung__TizenFX/src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn.sln)<br>[src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/AuthenticationExtension.cs](../../../../sources/Samsung__TizenFX/src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/AuthenticationExtension.cs)<br>[src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/AuthenticationSelectionCriteria.cs](../../../../sources/Samsung__TizenFX/src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/AuthenticationSelectionCriteria.cs)<br>[src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/Authenticator.cs](../../../../sources/Samsung__TizenFX/src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/Authenticator.cs)<br>[src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/AuthenticatorAssertionResponse.cs](../../../../sources/Samsung__TizenFX/src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/AuthenticatorAssertionResponse.cs) |
| ci | 12 | [.github/workflows/build-branches.yml](../../../../sources/Samsung__TizenFX/.github/workflows/build-branches.yml)<br>[.github/workflows/build-pull-request.yml](../../../../sources/Samsung__TizenFX/.github/workflows/build-pull-request.yml)<br>[.github/workflows/check-api-level.yml](../../../../sources/Samsung__TizenFX/.github/workflows/check-api-level.yml)<br>[.github/workflows/deploy-documents-for-tizen-docs.yml](../../../../sources/Samsung__TizenFX/.github/workflows/deploy-documents-for-tizen-docs.yml)<br>[.github/workflows/deploy-documents.yml](../../../../sources/Samsung__TizenFX/.github/workflows/deploy-documents.yml)<br>[.github/workflows/deploy-packages.yml](../../../../sources/Samsung__TizenFX/.github/workflows/deploy-packages.yml)<br>[.github/workflows/nightly-release.yml](../../../../sources/Samsung__TizenFX/.github/workflows/nightly-release.yml)<br>[.github/workflows/nui-code-style-review.yml](../../../../sources/Samsung__TizenFX/.github/workflows/nui-code-style-review.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 67 | [README.md](../../../../sources/Samsung__TizenFX/README.md)<br>[test/Tizen.NUI.Tests/Tizen.NUI.Components.Devel.Tests/README.md](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Tests/Tizen.NUI.Components.Devel.Tests/README.md)<br>[test/Tizen.NUI.StyleGuide/README.md](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.StyleGuide/README.md)<br>[test/Tizen.AIAvatar.Example/README.md](../../../../sources/Samsung__TizenFX/test/Tizen.AIAvatar.Example/README.md)<br>[test/PerformanceTest/README.md](../../../../sources/Samsung__TizenFX/test/PerformanceTest/README.md)<br>[test/NUIWindowLayout/README.md](../../../../sources/Samsung__TizenFX/test/NUIWindowLayout/README.md)<br>[test/NUITizenGallery/README.md](../../../../sources/Samsung__TizenFX/test/NUITizenGallery/README.md)<br>[test/NUITestSample/CommonUI_Samples/README.md](../../../../sources/Samsung__TizenFX/test/NUITestSample/CommonUI_Samples/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 4754 | [test/Tizen.WindowSystem.Samples/tizen-manifest.xml](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.Samples/tizen-manifest.xml)<br>[test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.cs](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.cs)<br>[test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.csproj](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.csproj)<br>[test/Tizen.WindowSystem.Samples/shared/res/Tizen.WindowSystem.Samples.png](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.Samples/shared/res/Tizen.WindowSystem.Samples.png)<br>[test/Tizen.WindowSystem.InputGesture/tizen_dotnet_project.yaml](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.InputGesture/tizen_dotnet_project.yaml)<br>[test/Tizen.WindowSystem.InputGesture/tizen-manifest.xml](../../../../sources/Samsung__TizenFX/test/Tizen.WindowSystem.InputGesture/tizen-manifest.xml) |
| CI workflow | 12 | [.github/workflows/build-branches.yml](../../../../sources/Samsung__TizenFX/.github/workflows/build-branches.yml)<br>[.github/workflows/build-pull-request.yml](../../../../sources/Samsung__TizenFX/.github/workflows/build-pull-request.yml)<br>[.github/workflows/check-api-level.yml](../../../../sources/Samsung__TizenFX/.github/workflows/check-api-level.yml)<br>[.github/workflows/deploy-documents-for-tizen-docs.yml](../../../../sources/Samsung__TizenFX/.github/workflows/deploy-documents-for-tizen-docs.yml)<br>[.github/workflows/deploy-documents.yml](../../../../sources/Samsung__TizenFX/.github/workflows/deploy-documents.yml)<br>[.github/workflows/deploy-packages.yml](../../../../sources/Samsung__TizenFX/.github/workflows/deploy-packages.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 101 | [test/Tizen.NUI.Tests/nunit.framework/Common/Guard.cs](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Tests/nunit.framework/Common/Guard.cs)<br>[test/Tizen.NUI.Devel.Tests.Ubuntu/nunit.framework/Common/Guard.cs](../../../../sources/Samsung__TizenFX/test/Tizen.NUI.Devel.Tests.Ubuntu/nunit.framework/Common/Guard.cs)<br>[src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn.csproj](../../../../sources/Samsung__TizenFX/src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn.csproj)<br>[src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn.sln](../../../../sources/Samsung__TizenFX/src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn.sln)<br>[src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/AuthenticationExtension.cs](../../../../sources/Samsung__TizenFX/src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/AuthenticationExtension.cs)<br>[src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/AuthenticationSelectionCriteria.cs](../../../../sources/Samsung__TizenFX/src/Tizen.Security.WebAuthn/Tizen.Security.WebAuthn/AuthenticationSelectionCriteria.cs) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `tools/bin/APITool.deps.json`, `tools/bin/APITool.dll`, `tools/bin/APITool.pdb`.
2. entrypoint를 따라 실행 흐름 확인: `tools/bin/APITool.deps.json`, `tools/bin/APITool.dll`, `tools/bin/APITool.pdb`.
3. agent/tool runtime 매핑: `tools/update-tools.sh`, `tools/scripts/add_module.sh`, `tools/scripts/module.csproj.template`.
4. retrieval/memory/indexing 확인: `test/Tizen.NUI.Tests/Tizen.NUI.Devel.Tests/res/index.xml`, `test/Tizen.NUI.Tests/Tizen.NUI.Devel.Tests/res/webview/index.html`, `test/Tizen.NUI.Tests/Tizen.NUI.Devel.Manual.Tests/res/webview/index.html`.
5. test/eval 파일로 동작 검증: `test/Tizen.WindowSystem.Samples/tizen-manifest.xml`, `test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.cs`, `test/Tizen.WindowSystem.Samples/Tizen.WindowSystem.Samples.csproj`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 C Device APIs for Tizen. 핵심 구조 신호는 C#, README.md, LICENSE, tests, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
