# Samsung/Tizen.NET Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Welcome to Tizen .NET

## 요약

- 조사 단위: `sources/Samsung__Tizen.NET` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 809 files, 220 directories, depth score 104, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=workload/Makefile이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/Tizen.NET |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | C# |
| Stars | 249 |
| Forks | 35 |
| License | NOASSERTION |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Samsung__Tizen.NET](../../../../sources/Samsung__Tizen.NET) |
| Existing report | [reports/korea-trending/repositories/Samsung__Tizen.NET.md](../../../korea-trending/repositories/Samsung__Tizen.NET.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 809 / 220 |
| Max observed depth | 10 |
| Top directories | .agents, .gemini, .github, assets, samples, workload |
| Top extensions | .cs: 247, .svg: 97, .png: 65, .razor: 54, .css: 42, .xaml: 36, .json: 35, .md: 25, .csproj: 19, .xml: 19, .jpg: 18, (none): 17 |
| Source patterns | agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| samples | top-level component | 1 |
| workload | top-level component | 1 |


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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 5 | [workload/src/Samsung.Tizen.Sdk/tools/lang_country_lists.xml](../../../../sources/Samsung__Tizen.NET/workload/src/Samsung.Tizen.Sdk/tools/lang_country_lists.xml)<br>[.agents/skills/tizen-doctor/SKILL.md](../../../../sources/Samsung__Tizen.NET/.agents/skills/tizen-doctor/SKILL.md)<br>[.agents/skills/tizen-doctor/scripts/collect-env.ps1](../../../../sources/Samsung__Tizen.NET/.agents/skills/tizen-doctor/scripts/collect-env.ps1)<br>[.agents/skills/tizen-doctor/scripts/collect-env.sh](../../../../sources/Samsung__Tizen.NET/.agents/skills/tizen-doctor/scripts/collect-env.sh)<br>[.agents/skills/tizen-doctor/references/tfm-workload-matrix.md](../../../../sources/Samsung__Tizen.NET/.agents/skills/tizen-doctor/references/tfm-workload-matrix.md) |
| mcp | 0 | not obvious |
| retrieval | 3 | [samples/dotnet-podcasts/src/MobileBlazor/mauiapp/wwwroot/index.html](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/MobileBlazor/mauiapp/wwwroot/index.html)<br>[samples/dotnet-podcasts/src/MobileBlazor/mauiapp/Pages/Index.razor](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/MobileBlazor/mauiapp/Pages/Index.razor)<br>[samples/dotnet-podcasts/src/Mobile/wwwroot/index.html](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Mobile/wwwroot/index.html) |
| spec | 0 | not obvious |
| eval | 2 | [workload/src/Samsung.Tizen.Sdk/certificate/author_test.p12](../../../../sources/Samsung__Tizen.NET/workload/src/Samsung.Tizen.Sdk/certificate/author_test.p12)<br>[samples/WeatherTwentyOne/src/WeatherTwentyOne/Models/Metric.cs](../../../../sources/Samsung__Tizen.NET/samples/WeatherTwentyOne/src/WeatherTwentyOne/Models/Metric.cs) |
| security | 4 | [samples/dotnet-podcasts/SECURITY.md](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/SECURITY.md)<br>[samples/dotnet-podcasts/src/MobileBlazor/mauiapp/Platforms/Android/Resources/xml/network_security_config.xml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/MobileBlazor/mauiapp/Platforms/Android/Resources/xml/network_security_config.xml)<br>[samples/dotnet-podcasts/src/Mobile/Platforms/Android/Resources/xml/network_security_config.xml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Mobile/Platforms/Android/Resources/xml/network_security_config.xml)<br>[samples/dotnet-podcasts/docs/azure-secret-add.png](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/docs/azure-secret-add.png) |
| ci | 12 | [samples/WeatherTwentyOne/.github/workflows/dev.yml](../../../../sources/Samsung__Tizen.NET/samples/WeatherTwentyOne/.github/workflows/dev.yml)<br>[samples/WeatherTwentyOne/.github/workflows/macos.yml](../../../../sources/Samsung__Tizen.NET/samples/WeatherTwentyOne/.github/workflows/macos.yml)<br>[samples/dotnet-podcasts/.github/workflows/codeql-analysis.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/.github/workflows/codeql-analysis.yml)<br>[samples/dotnet-podcasts/.github/workflows/podcast-api.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/.github/workflows/podcast-api.yml)<br>[samples/dotnet-podcasts/.github/workflows/podcast-hub.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/.github/workflows/podcast-hub.yml)<br>[samples/dotnet-podcasts/.github/workflows/podcast-mobile.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/.github/workflows/podcast-mobile.yml)<br>[samples/dotnet-podcasts/.github/workflows/podcast-web.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/.github/workflows/podcast-web.yml)<br>[.github/workflows/backport.yml](../../../../sources/Samsung__Tizen.NET/.github/workflows/backport.yml) |
| container | 38 | [samples/dotnet-podcasts/docker-compose.override.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/docker-compose.override.yml)<br>[samples/dotnet-podcasts/docker-compose.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/docker-compose.yml)<br>[samples/dotnet-podcasts/src/Web/Server/Dockerfile](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Web/Server/Dockerfile)<br>[samples/dotnet-podcasts/src/Services/Podcasts/Podcast.Updater.Worker/Dockerfile](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Services/Podcasts/Podcast.Updater.Worker/Dockerfile)<br>[samples/dotnet-podcasts/src/Services/Podcasts/Podcast.Ingestion.Worker/Dockerfile](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Services/Podcasts/Podcast.Ingestion.Worker/Dockerfile)<br>[samples/dotnet-podcasts/src/Services/Podcasts/Podcast.API/Dockerfile](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Services/Podcasts/Podcast.API/Dockerfile)<br>[samples/dotnet-podcasts/src/Services/ListenTogether/ListenTogether.Hub/Dockerfile](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Services/ListenTogether/ListenTogether.Hub/Dockerfile)<br>[samples/dotnet-podcasts/deploy/Web/web.deployment.json](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/deploy/Web/web.deployment.json) |
| instruction | 0 | not obvious |
| docs | 48 | [README.md](../../../../sources/Samsung__Tizen.NET/README.md)<br>[workload/README.md](../../../../sources/Samsung__Tizen.NET/workload/README.md)<br>[workload/scripts/README.md](../../../../sources/Samsung__Tizen.NET/workload/scripts/README.md)<br>[samples/README.md](../../../../sources/Samsung__Tizen.NET/samples/README.md)<br>[samples/WeatherTwentyOne/README.md](../../../../sources/Samsung__Tizen.NET/samples/WeatherTwentyOne/README.md)<br>[samples/HelloMaui/README.md](../../../../sources/Samsung__Tizen.NET/samples/HelloMaui/README.md)<br>[samples/dotnet-podcasts/README.md](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/README.md)<br>[samples/dotnet-podcasts/src/Web/README.md](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Web/README.md) |
| config | 1 | [workload/Makefile](../../../../sources/Samsung__Tizen.NET/workload/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2 | [workload/src/Samsung.Tizen.Sdk/certificate/author_test.p12](../../../../sources/Samsung__Tizen.NET/workload/src/Samsung.Tizen.Sdk/certificate/author_test.p12)<br>[samples/WeatherTwentyOne/src/WeatherTwentyOne/Models/Metric.cs](../../../../sources/Samsung__Tizen.NET/samples/WeatherTwentyOne/src/WeatherTwentyOne/Models/Metric.cs) |
| CI workflows | 12 | [samples/WeatherTwentyOne/.github/workflows/dev.yml](../../../../sources/Samsung__Tizen.NET/samples/WeatherTwentyOne/.github/workflows/dev.yml)<br>[samples/WeatherTwentyOne/.github/workflows/macos.yml](../../../../sources/Samsung__Tizen.NET/samples/WeatherTwentyOne/.github/workflows/macos.yml)<br>[samples/dotnet-podcasts/.github/workflows/codeql-analysis.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/.github/workflows/codeql-analysis.yml)<br>[samples/dotnet-podcasts/.github/workflows/podcast-api.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/.github/workflows/podcast-api.yml)<br>[samples/dotnet-podcasts/.github/workflows/podcast-hub.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/.github/workflows/podcast-hub.yml)<br>[samples/dotnet-podcasts/.github/workflows/podcast-mobile.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/.github/workflows/podcast-mobile.yml) |
| Containers / deploy | 38 | [samples/dotnet-podcasts/docker-compose.override.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/docker-compose.override.yml)<br>[samples/dotnet-podcasts/docker-compose.yml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/docker-compose.yml)<br>[samples/dotnet-podcasts/src/Web/Server/Dockerfile](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Web/Server/Dockerfile)<br>[samples/dotnet-podcasts/src/Services/Podcasts/Podcast.Updater.Worker/Dockerfile](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Services/Podcasts/Podcast.Updater.Worker/Dockerfile)<br>[samples/dotnet-podcasts/src/Services/Podcasts/Podcast.Ingestion.Worker/Dockerfile](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Services/Podcasts/Podcast.Ingestion.Worker/Dockerfile)<br>[samples/dotnet-podcasts/src/Services/Podcasts/Podcast.API/Dockerfile](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Services/Podcasts/Podcast.API/Dockerfile) |
| Security / policy | 4 | [samples/dotnet-podcasts/SECURITY.md](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/SECURITY.md)<br>[samples/dotnet-podcasts/src/MobileBlazor/mauiapp/Platforms/Android/Resources/xml/network_security_config.xml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/MobileBlazor/mauiapp/Platforms/Android/Resources/xml/network_security_config.xml)<br>[samples/dotnet-podcasts/src/Mobile/Platforms/Android/Resources/xml/network_security_config.xml](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/src/Mobile/Platforms/Android/Resources/xml/network_security_config.xml)<br>[samples/dotnet-podcasts/docs/azure-secret-add.png](../../../../sources/Samsung__Tizen.NET/samples/dotnet-podcasts/docs/azure-secret-add.png) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `workload/Makefile`, `README.md`, `workload/README.md`.
2. Map agent/tool runtime through: `workload/src/Samsung.Tizen.Sdk/tools/lang_country_lists.xml`, `.agents/skills/tizen-doctor/SKILL.md`, `.agents/skills/tizen-doctor/scripts/collect-env.ps1`.
3. Inspect retrieval/memory/indexing through: `samples/dotnet-podcasts/src/MobileBlazor/mauiapp/wwwroot/index.html`, `samples/dotnet-podcasts/src/MobileBlazor/mauiapp/Pages/Index.razor`, `samples/dotnet-podcasts/src/Mobile/wwwroot/index.html`.
4. Verify behavior through test/eval files: `workload/src/Samsung.Tizen.Sdk/certificate/author_test.p12`, `samples/WeatherTwentyOne/src/WeatherTwentyOne/Models/Metric.cs`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Welcome to Tizen .NET. 핵심 구조 신호는 C#, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
