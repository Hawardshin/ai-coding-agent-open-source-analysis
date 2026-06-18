# Samsung/Tizen.NET 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Welcome to Tizen .NET

## 요약

- 조사 단위: `sources/Samsung__Tizen.NET` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 809 files, 220 directories, depth score 98, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=workload/Makefile이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Samsung/Tizen.NET |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | C# |
| Stars | 249 |
| Forks | 35 |
| License | NOASSERTION |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__Tizen.NET](../../../../sources/Samsung__Tizen.NET) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__Tizen.NET.md](../../../korea-trending/repositories/Samsung__Tizen.NET.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 809 / 220 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .agents, .gemini, .github, assets, samples, workload |
| 상위 확장자 | .cs: 247, .svg: 97, .png: 65, .razor: 54, .css: 42, .xaml: 36, .json: 35, .md: 25, .csproj: 19, .xml: 19, .jpg: 18, (none): 17 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| samples | top-level component | 1 |
| workload | top-level component | 1 |


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
| config | [workload/Makefile](../../../../sources/Samsung__Tizen.NET/workload/Makefile) | config signal |
| docs | [README.md](../../../../sources/Samsung__Tizen.NET/README.md) | docs signal |
| docs | [workload/README.md](../../../../sources/Samsung__Tizen.NET/workload/README.md) | docs signal |
| docs | [workload/scripts/README.md](../../../../sources/Samsung__Tizen.NET/workload/scripts/README.md) | docs signal |
| docs | [samples/README.md](../../../../sources/Samsung__Tizen.NET/samples/README.md) | docs signal |
| eval | [workload/src/Samsung.Tizen.Sdk/certificate/author_test.p12](../../../../sources/Samsung__Tizen.NET/workload/src/Samsung.Tizen.Sdk/certificate/author_test.p12) | eval signal |
| eval | [samples/WeatherTwentyOne/src/WeatherTwentyOne/Models/Metric.cs](../../../../sources/Samsung__Tizen.NET/samples/WeatherTwentyOne/src/WeatherTwentyOne/Models/Metric.cs) | eval signal |
| ci | [samples/WeatherTwentyOne/.github/workflows/dev.yml](../../../../sources/Samsung__Tizen.NET/samples/WeatherTwentyOne/.github/workflows/dev.yml) | ci support |
| ci | [samples/WeatherTwentyOne/.github/workflows/macos.yml](../../../../sources/Samsung__Tizen.NET/samples/WeatherTwentyOne/.github/workflows/macos.yml) | ci support |
| container | [samples/dotnet-podcasts/docker-compose.override.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/docker-compose.override.yml) | container support |
| container | [samples/dotnet-podcasts/docker-compose.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/docker-compose.yml) | container support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 5 | [workload/src/Samsung.Tizen.Sdk/tools/lang_country_lists.xml](../../../../sources/Samsung__Tizen.NET/workload/src/Samsung.Tizen.Sdk/tools/lang_country_lists.xml)<br>[.agents/skills/tizen-doctor/SKILL.md](../../../../sources/Samsung__Tizen.NET/.agents/skills/tizen-doctor/SKILL.md)<br>[.agents/skills/tizen-doctor/scripts/collect-env.ps1](../../../../sources/Samsung__Tizen.NET/.agents/skills/tizen-doctor/scripts/collect-env.ps1)<br>[.agents/skills/tizen-doctor/scripts/collect-env.sh](../../../../sources/Samsung__Tizen.NET/.agents/skills/tizen-doctor/scripts/collect-env.sh)<br>[.agents/skills/tizen-doctor/references/tfm-workload-matrix.md](../../../../sources/Samsung__Tizen.NET/.agents/skills/tizen-doctor/references/tfm-workload-matrix.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 3 | [samples/dotnet-podcasts/src/MobileBlazor/mauiapp/wwwroot/index.html](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/MobileBlazor/mauiapp/wwwroot/index.html)<br>[samples/dotnet-podcasts/src/MobileBlazor/mauiapp/Pages/Index.razor](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/MobileBlazor/mauiapp/Pages/Index.razor)<br>[samples/dotnet-podcasts/src/Mobile/wwwroot/index.html](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Mobile/wwwroot/index.html) |
| spec | 0 | 명확하지 않음 |
| eval | 2 | [workload/src/Samsung.Tizen.Sdk/certificate/author_test.p12](../../../../sources/Samsung__Tizen.NET/workload/src/Samsung.Tizen.Sdk/certificate/author_test.p12)<br>[samples/WeatherTwentyOne/src/WeatherTwentyOne/Models/Metric.cs](../../../../sources/Samsung__Tizen.NET/samples/WeatherTwentyOne/src/WeatherTwentyOne/Models/Metric.cs) |
| security | 4 | [samples/dotnet-podcasts/SECURITY.md](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/SECURITY.md)<br>[samples/dotnet-podcasts/src/MobileBlazor/mauiapp/Platforms/Android/Resources/xml/network_security_config.xml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/MobileBlazor/mauiapp/Platforms/Android/Resources/xml/network_security_config.xml)<br>[samples/dotnet-podcasts/src/Mobile/Platforms/Android/Resources/xml/network_security_config.xml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Mobile/Platforms/Android/Resources/xml/network_security_config.xml)<br>[samples/dotnet-podcasts/docs/azure-secret-add.png](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/docs/azure-secret-add.png) |
| ci | 12 | [samples/WeatherTwentyOne/.github/workflows/dev.yml](../../../../sources/Samsung__Tizen.NET/samples/WeatherTwentyOne/.github/workflows/dev.yml)<br>[samples/WeatherTwentyOne/.github/workflows/macos.yml](../../../../sources/Samsung__Tizen.NET/samples/WeatherTwentyOne/.github/workflows/macos.yml)<br>[samples/dotnet-podcasts/.github/workflows/codeql-analysis.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/.github/workflows/codeql-analysis.yml)<br>[samples/dotnet-podcasts/.github/workflows/podcast-api.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/.github/workflows/podcast-api.yml)<br>[samples/dotnet-podcasts/.github/workflows/podcast-hub.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/.github/workflows/podcast-hub.yml)<br>[samples/dotnet-podcasts/.github/workflows/podcast-mobile.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/.github/workflows/podcast-mobile.yml)<br>[samples/dotnet-podcasts/.github/workflows/podcast-web.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/.github/workflows/podcast-web.yml)<br>[.github/workflows/backport.yml](../../../../sources/Samsung__Tizen.NET/.github/workflows/backport.yml) |
| container | 38 | [samples/dotnet-podcasts/docker-compose.override.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/docker-compose.override.yml)<br>[samples/dotnet-podcasts/docker-compose.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/docker-compose.yml)<br>[samples/dotnet-podcasts/src/Web/Server/Dockerfile](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Web/Server/Dockerfile)<br>[samples/dotnet-podcasts/src/Services/Podcasts/Podcast.Updater.Worker/Dockerfile](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Services/Podcasts/Podcast.Updater.Worker/Dockerfile)<br>[samples/dotnet-podcasts/src/Services/Podcasts/Podcast.Ingestion.Worker/Dockerfile](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Services/Podcasts/Podcast.Ingestion.Worker/Dockerfile)<br>[samples/dotnet-podcasts/src/Services/Podcasts/Podcast.API/Dockerfile](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Services/Podcasts/Podcast.API/Dockerfile)<br>[samples/dotnet-podcasts/src/Services/ListenTogether/ListenTogether.Hub/Dockerfile](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Services/ListenTogether/ListenTogether.Hub/Dockerfile)<br>[samples/dotnet-podcasts/deploy/Web/web.deployment.json](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/deploy/Web/web.deployment.json) |
| instruction | 0 | 명확하지 않음 |
| docs | 48 | [README.md](../../../../sources/Samsung__Tizen.NET/README.md)<br>[workload/README.md](../../../../sources/Samsung__Tizen.NET/workload/README.md)<br>[workload/scripts/README.md](../../../../sources/Samsung__Tizen.NET/workload/scripts/README.md)<br>[samples/README.md](../../../../sources/Samsung__Tizen.NET/samples/README.md)<br>[samples/WeatherTwentyOne/README.md](../../../../sources/Samsung__Tizen.NET/samples/WeatherTwentyOne/README.md)<br>[samples/HelloMaui/README.md](../../../../sources/Samsung__Tizen.NET/samples/HelloMaui/README.md)<br>[samples/dotnet-podcasts/README.md](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/README.md)<br>[samples/dotnet-podcasts/src/Web/README.md](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Web/README.md) |
| config | 1 | [workload/Makefile](../../../../sources/Samsung__Tizen.NET/workload/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 2 | [workload/src/Samsung.Tizen.Sdk/certificate/author_test.p12](../../../../sources/Samsung__Tizen.NET/workload/src/Samsung.Tizen.Sdk/certificate/author_test.p12)<br>[samples/WeatherTwentyOne/src/WeatherTwentyOne/Models/Metric.cs](../../../../sources/Samsung__Tizen.NET/samples/WeatherTwentyOne/src/WeatherTwentyOne/Models/Metric.cs) |
| CI workflow | 12 | [samples/WeatherTwentyOne/.github/workflows/dev.yml](../../../../sources/Samsung__Tizen.NET/samples/WeatherTwentyOne/.github/workflows/dev.yml)<br>[samples/WeatherTwentyOne/.github/workflows/macos.yml](../../../../sources/Samsung__Tizen.NET/samples/WeatherTwentyOne/.github/workflows/macos.yml)<br>[samples/dotnet-podcasts/.github/workflows/codeql-analysis.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/.github/workflows/codeql-analysis.yml)<br>[samples/dotnet-podcasts/.github/workflows/podcast-api.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/.github/workflows/podcast-api.yml)<br>[samples/dotnet-podcasts/.github/workflows/podcast-hub.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/.github/workflows/podcast-hub.yml)<br>[samples/dotnet-podcasts/.github/workflows/podcast-mobile.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/.github/workflows/podcast-mobile.yml) |
| 컨테이너/배포 | 38 | [samples/dotnet-podcasts/docker-compose.override.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/docker-compose.override.yml)<br>[samples/dotnet-podcasts/docker-compose.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/docker-compose.yml)<br>[samples/dotnet-podcasts/src/Web/Server/Dockerfile](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Web/Server/Dockerfile)<br>[samples/dotnet-podcasts/src/Services/Podcasts/Podcast.Updater.Worker/Dockerfile](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Services/Podcasts/Podcast.Updater.Worker/Dockerfile)<br>[samples/dotnet-podcasts/src/Services/Podcasts/Podcast.Ingestion.Worker/Dockerfile](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Services/Podcasts/Podcast.Ingestion.Worker/Dockerfile)<br>[samples/dotnet-podcasts/src/Services/Podcasts/Podcast.API/Dockerfile](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Services/Podcasts/Podcast.API/Dockerfile) |
| 보안/정책 | 4 | [samples/dotnet-podcasts/SECURITY.md](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/SECURITY.md)<br>[samples/dotnet-podcasts/src/MobileBlazor/mauiapp/Platforms/Android/Resources/xml/network_security_config.xml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/MobileBlazor/mauiapp/Platforms/Android/Resources/xml/network_security_config.xml)<br>[samples/dotnet-podcasts/src/Mobile/Platforms/Android/Resources/xml/network_security_config.xml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Mobile/Platforms/Android/Resources/xml/network_security_config.xml)<br>[samples/dotnet-podcasts/docs/azure-secret-add.png](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/docs/azure-secret-add.png) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `workload/Makefile`, `README.md`, `workload/README.md`.
2. agent/tool runtime 매핑: `workload/src/Samsung.Tizen.Sdk/tools/lang_country_lists.xml`, `.agents/skills/tizen-doctor/SKILL.md`, `.agents/skills/tizen-doctor/scripts/collect-env.ps1`.
3. retrieval/memory/indexing 확인: `samples/dotnet-podcasts/src/MobileBlazor/mauiapp/wwwroot/index.html`, `samples/dotnet-podcasts/src/MobileBlazor/mauiapp/Pages/Index.razor`, `samples/dotnet-podcasts/src/Mobile/wwwroot/index.html`.
4. test/eval 파일로 동작 검증: `workload/src/Samsung.Tizen.Sdk/certificate/author_test.p12`, `samples/WeatherTwentyOne/src/WeatherTwentyOne/Models/Metric.cs`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Welcome to Tizen .NET. 핵심 구조 신호는 C#, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
