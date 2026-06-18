# mobitouchOS/MaIN.NET Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

NuGet package designed to make LLMs, RAG, and Agents first-class citizens in .NET

## 요약

- 조사 단위: `sources/mobitouchOS__MaIN.NET` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 606 files, 126 directories, depth score 115, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=src/MaIN.Services/Services/LLMService/Memory/DocumentProcessor.cs, src/MaIN.Services/Services/LLMService/Memory/GeminiTextGeneratorAdapter.cs, src/MaIN.Services/Services/LLMService/Memory/IMemoryFactory.cs이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | mobitouchOS/MaIN.NET |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | C# |
| Stars | 178 |
| Forks | 21 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/mobitouchOS__MaIN.NET](../../../../sources/mobitouchOS__MaIN.NET) |
| Existing report | [reports/global-trending/repositories/mobitouchOS__MaIN.NET.md](../../../global-trending/repositories/mobitouchOS__MaIN.NET.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 606 / 126 |
| Max observed depth | 7 |
| Top directories | .github, Docs, Examples, Examples.Flows, Frontend, MaIN.Core.E2ETests, MaIN.Core.IntegrationTests, Releases, scripts, src |
| Top extensions | .cs: 414, .md: 59, .json: 24, .razor: 23, .jpg: 14, .csproj: 11, .css: 10, .png: 7, (none): 7, .js: 6, .ps1: 5, .yml: 5 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 108 |
| Examples/Examples | Examples workspace | 7 |
| Docs | documentation surface | 6 |
| .github | ci surface | 1 |
| Examples | top-level component | 1 |
| Examples.Flows | top-level component | 1 |
| Frontend | top-level component | 1 |
| MaIN.Core.E2ETests | validation surface | 1 |
| MaIN.Core.IntegrationTests | validation surface | 1 |
| Releases | top-level component | 1 |
| scripts | top-level component | 1 |


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
| retrieval | [src/MaIN.Services/Services/LLMService/Memory/DocumentProcessor.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/DocumentProcessor.cs) | retrieval signal |
| retrieval | [src/MaIN.Services/Services/LLMService/Memory/GeminiTextGeneratorAdapter.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/GeminiTextGeneratorAdapter.cs) | retrieval signal |
| retrieval | [src/MaIN.Services/Services/LLMService/Memory/IMemoryFactory.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/IMemoryFactory.cs) | retrieval signal |
| retrieval | [src/MaIN.Services/Services/LLMService/Memory/IMemoryService.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/IMemoryService.cs) | retrieval signal |
| entrypoints | [src/MaIN.Services/Bootstrapper.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Bootstrapper.cs) | entrypoints signal |
| entrypoints | [src/MaIN.Services/Extensions.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Extensions.cs) | entrypoints signal |
| entrypoints | [src/MaIN.Services/MaIN.Services.csproj](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/MaIN.Services.csproj) | entrypoints signal |
| entrypoints | [src/MaIN.Services/Utils/AgentStateManager.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Utils/AgentStateManager.cs) | entrypoints signal |
| docs | [readme.md](../../../../sources/mobitouchOS__MaIN.NET/readme.md) | docs signal |
| docs | [Docs/maIN_roadmap.png](../../../../sources/mobitouchOS__MaIN.NET/Docs/maIN_roadmap.png) | docs signal |
| docs | [Docs/main.png](../../../../sources/mobitouchOS__MaIN.NET/Docs/main.png) | docs signal |
| docs | [Docs/roadmap.md](../../../../sources/mobitouchOS__MaIN.NET/Docs/roadmap.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 352 | [src/MaIN.Services/Bootstrapper.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Bootstrapper.cs)<br>[src/MaIN.Services/Extensions.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Extensions.cs)<br>[src/MaIN.Services/MaIN.Services.csproj](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/MaIN.Services.csproj)<br>[src/MaIN.Services/Utils/AgentStateManager.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Utils/AgentStateManager.cs)<br>[src/MaIN.Services/Utils/CurlRequestParser.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Utils/CurlRequestParser.cs)<br>[src/MaIN.Services/Utils/GrammarToJsonConverter.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Utils/GrammarToJsonConverter.cs)<br>[src/MaIN.Services/Utils/HistoryTransform.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Utils/HistoryTransform.cs)<br>[src/MaIN.Services/Utils/HtmlContentCleaner.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Utils/HtmlContentCleaner.cs) |
| agentRuntime | 87 | [src/MaIN.Services/Services/Skills/AnthropicSkillUploader.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/Skills/AnthropicSkillUploader.cs)<br>[src/MaIN.Services/Services/Skills/FileSystemSkillLoader.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/Skills/FileSystemSkillLoader.cs)<br>[src/MaIN.Services/Services/Skills/OpenAiSkillUploader.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/Skills/OpenAiSkillUploader.cs)<br>[src/MaIN.Services/Services/Skills/ProviderSkillCache.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/Skills/ProviderSkillCache.cs)<br>[src/MaIN.Services/Services/Skills/ProviderSkillUploadCoordinator.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/Skills/ProviderSkillUploadCoordinator.cs)<br>[src/MaIN.Services/Services/Skills/SkillBundleZipper.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/Skills/SkillBundleZipper.cs)<br>[src/MaIN.Services/Services/LLMService/Memory/DocumentProcessor.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/DocumentProcessor.cs)<br>[src/MaIN.Services/Services/LLMService/Memory/GeminiTextGeneratorAdapter.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/GeminiTextGeneratorAdapter.cs) |
| mcp | 4 | [src/MaIN.Domain/Entities/Mcp.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Domain/Entities/Mcp.cs)<br>[Examples/Examples/Mcp/AgentWithKnowledgeMcpExample.cs](../../../../sources/mobitouchOS__MaIN.NET/Examples/Examples/Mcp/AgentWithKnowledgeMcpExample.cs)<br>[Examples/Examples/Mcp/McpAgentsExample.cs](../../../../sources/mobitouchOS__MaIN.NET/Examples/Examples/Mcp/McpAgentsExample.cs)<br>[Examples/Examples/Mcp/McpExample.cs](../../../../sources/mobitouchOS__MaIN.NET/Examples/Examples/Mcp/McpExample.cs) |
| retrieval | 30 | [src/MaIN.Services/Services/LLMService/Memory/DocumentProcessor.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/DocumentProcessor.cs)<br>[src/MaIN.Services/Services/LLMService/Memory/GeminiTextGeneratorAdapter.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/GeminiTextGeneratorAdapter.cs)<br>[src/MaIN.Services/Services/LLMService/Memory/IMemoryFactory.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/IMemoryFactory.cs)<br>[src/MaIN.Services/Services/LLMService/Memory/IMemoryService.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/IMemoryService.cs)<br>[src/MaIN.Services/Services/LLMService/Memory/KernelMemoryLlamaExtensions.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/KernelMemoryLlamaExtensions.cs)<br>[src/MaIN.Services/Services/LLMService/Memory/LLamaSharpTextGen.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/LLamaSharpTextGen.cs)<br>[src/MaIN.Services/Services/LLMService/Memory/MemoryFactory.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/MemoryFactory.cs)<br>[src/MaIN.Services/Services/LLMService/Memory/MemoryService.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/MemoryService.cs) |
| spec | 2 | [Docs/maIN_roadmap.png](../../../../sources/mobitouchOS__MaIN.NET/Docs/maIN_roadmap.png)<br>[Docs/roadmap.md](../../../../sources/mobitouchOS__MaIN.NET/Docs/roadmap.md) |
| eval | 0 | not obvious |
| security | 1 | [src/MaIN.Services/Services/LLMService/Auth/GoogleServiceAccountTokenProvider.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Auth/GoogleServiceAccountTokenProvider.cs) |
| ci | 3 | [.github/workflows/build-and-publish-inferpage.yml](../../../../sources/mobitouchOS__MaIN.NET/.github/workflows/build-and-publish-inferpage.yml)<br>[.github/workflows/docker-publish-inferpage.yml](../../../../sources/mobitouchOS__MaIN.NET/.github/workflows/docker-publish-inferpage.yml)<br>[.github/workflows/publish.yml](../../../../sources/mobitouchOS__MaIN.NET/.github/workflows/publish.yml) |
| container | 6 | [src/Dockerfile](../../../../sources/mobitouchOS__MaIN.NET/src/Dockerfile)<br>[src/Dockerfile.demo](../../../../sources/mobitouchOS__MaIN.NET/src/Dockerfile.demo)<br>[src/Dockerfile.inferpage](../../../../sources/mobitouchOS__MaIN.NET/src/Dockerfile.inferpage)<br>[scripts/docker-compose.inferpage-ollama.yml](../../../../sources/mobitouchOS__MaIN.NET/scripts/docker-compose.inferpage-ollama.yml)<br>[scripts/docker-compose.yml](../../../../sources/mobitouchOS__MaIN.NET/scripts/docker-compose.yml)<br>[Frontend/MainFE/Dockerfile](../../../../sources/mobitouchOS__MaIN.NET/Frontend/MainFE/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 4 | [readme.md](../../../../sources/mobitouchOS__MaIN.NET/readme.md)<br>[Docs/maIN_roadmap.png](../../../../sources/mobitouchOS__MaIN.NET/Docs/maIN_roadmap.png)<br>[Docs/main.png](../../../../sources/mobitouchOS__MaIN.NET/Docs/main.png)<br>[Docs/roadmap.md](../../../../sources/mobitouchOS__MaIN.NET/Docs/roadmap.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 3 | [.github/workflows/build-and-publish-inferpage.yml](../../../../sources/mobitouchOS__MaIN.NET/.github/workflows/build-and-publish-inferpage.yml)<br>[.github/workflows/docker-publish-inferpage.yml](../../../../sources/mobitouchOS__MaIN.NET/.github/workflows/docker-publish-inferpage.yml)<br>[.github/workflows/publish.yml](../../../../sources/mobitouchOS__MaIN.NET/.github/workflows/publish.yml) |
| Containers / deploy | 6 | [src/Dockerfile](../../../../sources/mobitouchOS__MaIN.NET/src/Dockerfile)<br>[src/Dockerfile.demo](../../../../sources/mobitouchOS__MaIN.NET/src/Dockerfile.demo)<br>[src/Dockerfile.inferpage](../../../../sources/mobitouchOS__MaIN.NET/src/Dockerfile.inferpage)<br>[scripts/docker-compose.inferpage-ollama.yml](../../../../sources/mobitouchOS__MaIN.NET/scripts/docker-compose.inferpage-ollama.yml)<br>[scripts/docker-compose.yml](../../../../sources/mobitouchOS__MaIN.NET/scripts/docker-compose.yml)<br>[Frontend/MainFE/Dockerfile](../../../../sources/mobitouchOS__MaIN.NET/Frontend/MainFE/Dockerfile) |
| Security / policy | 1 | [src/MaIN.Services/Services/LLMService/Auth/GoogleServiceAccountTokenProvider.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Auth/GoogleServiceAccountTokenProvider.cs) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | test/eval path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `src/MaIN.Services/Services/LLMService/Memory/DocumentProcessor.cs`, `src/MaIN.Services/Services/LLMService/Memory/GeminiTextGeneratorAdapter.cs`, `src/MaIN.Services/Services/LLMService/Memory/IMemoryFactory.cs`.
2. Trace execution through entrypoints: `src/MaIN.Services/Bootstrapper.cs`, `src/MaIN.Services/Extensions.cs`, `src/MaIN.Services/MaIN.Services.csproj`.
3. Map agent/tool runtime through: `src/MaIN.Services/Services/Skills/AnthropicSkillUploader.cs`, `src/MaIN.Services/Services/Skills/FileSystemSkillLoader.cs`, `src/MaIN.Services/Services/Skills/OpenAiSkillUploader.cs`.
4. Inspect retrieval/memory/indexing through: `src/MaIN.Services/Services/LLMService/Memory/DocumentProcessor.cs`, `src/MaIN.Services/Services/LLMService/Memory/GeminiTextGeneratorAdapter.cs`, `src/MaIN.Services/Services/LLMService/Memory/IMemoryFactory.cs`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 NuGet package designed to make LLMs, RAG, and Agents first class citizens in .NET. 핵심 구조 신호는 C#, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
