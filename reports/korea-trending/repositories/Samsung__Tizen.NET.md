# Samsung/Tizen.NET

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/Tizen.NET |
| local path | sources/Samsung__Tizen.NET |
| HEAD | 712c484 |
| stars/forks | 249 / 35 |
| language | C# |
| license | NOASSERTION |
| pushedAt | 2026-05-19T11:32:36Z |
| trendScore / priorityScore | 101 / 259 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 89 | README.md, workload/README.md, workload/scripts/README.md |
| Korean language / Korea domain | 64 | samples/README.md, README.md, samples/HelloMaui/README.md |
| Security / compliance | 33 | samples/dotnet-podcasts/src/Services/ListenTogether/ListenTogether.Hub/README.md, samples/dotnet-podcasts/src/Services/Podcasts/Podcast.API/README.md, samples/dotnet-podcasts/src/Web/README.md |
| AI agent / tool use | 12 | README.md, .agents/skills/tizen-doctor/references/tfm-workload-matrix.md, .agents/skills/tizen-doctor/scripts/collect-env.ps1 |
| LLM wiki / memory / graph | 5 | README.md, samples/dotnet-podcasts/deploy/Services/api.deployment.json |
| Infra / observability | 3 | samples/dotnet-podcasts/src/Web/README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, sdk-api, security-compliance |
| stacks | Node/TypeScript/JavaScript, Python, .NET |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 717 |
| manifests | 28 |
| docs | 28 |
| tests | 1 |
| ci/ops | 19 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Tizen .NET |
| headings | Tizen .NET / Prerequisites / Getting Started with Visual Studio 2022 / Getting Started with CLI / AI agent skills |
| excerpt | Tizen .NET ! image https //user images.githubusercontent.com/14328614/115324121 49473f00 a1c4 11eb 844c 86970c5e0764.png <b Tizen .NET</b https //developer.samsung.com/tizen/About Tizen.NET/Tizen.NET.html is an advanced way to develop applications with .NET technology for Tizen OS. Tizen .NET is Support TizenFX https //github.com/Samsung/TizenFX Support .NET MAUI https //github.com/dotnet/maui Support .NET 6 Prerequisites Tizen SDK Tizen Extensions for Visual Studio Family https //developer.tizen.org/development/tizen extensions visual studio family or Tizen Studio https //developer.tizen.org/development/tizen studio .NET 6 SDK Linux / Windows / macOS https //dotnet.microsoft.com/download/do |


## 주요 파일

### Manifests

- samples/dotnet-podcasts/docs/demos/aspnetcore-blazor/README.md
- samples/dotnet-podcasts/docs/demos/blazor-hybrid/README.md
- samples/dotnet-podcasts/docs/demos/dotnet-maui/README.md
- samples/README.md
- README.md
- samples/dotnet-podcasts/README.md
- samples/dotnet-podcasts/src/Mobile/README.md
- samples/dotnet-podcasts/src/MobileBlazor/README.md
- samples/dotnet-podcasts/src/Services/ListenTogether/ListenTogether.Hub/README.md
- samples/dotnet-podcasts/src/Services/Podcasts/Podcast.API/README.md
- samples/dotnet-podcasts/src/Web/README.md
- samples/HelloMaui/README.md
- samples/WeatherTwentyOne/README.md
- workload/README.md
- workload/scripts/README.md
- samples/dotnet-podcasts/docker-compose.yml
- samples/dotnet-podcasts/src/Services/ListenTogether/ListenTogether.Hub/Dockerfile
- samples/dotnet-podcasts/src/Services/Podcasts/Podcast.API/Dockerfile
- samples/dotnet-podcasts/src/Services/Podcasts/Podcast.Ingestion.Worker/Dockerfile
- samples/dotnet-podcasts/src/Services/Podcasts/Podcast.Updater.Worker/Dockerfile


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| samples | 634 |
| workload | 68 |
| .github | 5 |
| .agents | 4 |
| .gemini | 2 |
| .gitignore | 1 |
| .vscode | 1 |
| LICENSE | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .cs | 247 |
| .svg | 97 |
| .razor | 54 |
| .css | 42 |
| .json | 38 |
| .xaml | 36 |
| .md | 25 |
| .csproj | 19 |
| .xml | 19 |
| [no-ext] | 17 |
| .yml | 14 |
| .targets | 13 |
| .woff | 11 |
| .plist | 10 |
| .ttf | 9 |
| .ps1 | 8 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
