# mobitouchOS/MaIN.NET 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

NuGet package designed to make LLMs, RAG, and Agents first-class citizens in .NET

## 요약

- 조사 단위: `sources/mobitouchOS__MaIN.NET` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 606 files, 126 directories, depth score 109, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=src/MaIN.Services/Services/LLMService/Memory/DocumentProcessor.cs, src/MaIN.Services/Services/LLMService/Memory/GeminiTextGeneratorAdapter.cs, src/MaIN.Services/Services/LLMService/Memory/IMemoryFactory.cs이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | mobitouchOS/MaIN.NET |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | C# |
| Stars | 178 |
| Forks | 21 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/mobitouchOS__MaIN.NET](../../../../sources/mobitouchOS__MaIN.NET) |
| 기존 보고서 | [reports/global-trending/repositories/mobitouchOS__MaIN.NET.md](../../../global-trending/repositories/mobitouchOS__MaIN.NET.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 606 / 126 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, Docs, Examples, Examples.Flows, Frontend, MaIN.Core.E2ETests, MaIN.Core.IntegrationTests, Releases, scripts, src |
| 상위 확장자 | .cs: 414, .md: 59, .json: 24, .razor: 23, .jpg: 14, .csproj: 11, .css: 10, .png: 7, (none): 7, .js: 6, .ps1: 5, .yml: 5 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 352 | [src/MaIN.Services/Bootstrapper.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Bootstrapper.cs)<br>[src/MaIN.Services/Extensions.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Extensions.cs)<br>[src/MaIN.Services/MaIN.Services.csproj](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/MaIN.Services.csproj)<br>[src/MaIN.Services/Utils/AgentStateManager.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Utils/AgentStateManager.cs)<br>[src/MaIN.Services/Utils/CurlRequestParser.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Utils/CurlRequestParser.cs)<br>[src/MaIN.Services/Utils/GrammarToJsonConverter.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Utils/GrammarToJsonConverter.cs)<br>[src/MaIN.Services/Utils/HistoryTransform.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Utils/HistoryTransform.cs)<br>[src/MaIN.Services/Utils/HtmlContentCleaner.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Utils/HtmlContentCleaner.cs) |
| agentRuntime | 87 | [src/MaIN.Services/Services/Skills/AnthropicSkillUploader.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/Skills/AnthropicSkillUploader.cs)<br>[src/MaIN.Services/Services/Skills/FileSystemSkillLoader.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/Skills/FileSystemSkillLoader.cs)<br>[src/MaIN.Services/Services/Skills/OpenAiSkillUploader.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/Skills/OpenAiSkillUploader.cs)<br>[src/MaIN.Services/Services/Skills/ProviderSkillCache.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/Skills/ProviderSkillCache.cs)<br>[src/MaIN.Services/Services/Skills/ProviderSkillUploadCoordinator.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/Skills/ProviderSkillUploadCoordinator.cs)<br>[src/MaIN.Services/Services/Skills/SkillBundleZipper.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/Skills/SkillBundleZipper.cs)<br>[src/MaIN.Services/Services/LLMService/Memory/DocumentProcessor.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/DocumentProcessor.cs)<br>[src/MaIN.Services/Services/LLMService/Memory/GeminiTextGeneratorAdapter.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/GeminiTextGeneratorAdapter.cs) |
| mcp | 4 | [src/MaIN.Domain/Entities/Mcp.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Domain/Entities/Mcp.cs)<br>[Examples/Examples/Mcp/AgentWithKnowledgeMcpExample.cs](../../../../sources/mobitouchOS__MaIN.NET/Examples/Examples/Mcp/AgentWithKnowledgeMcpExample.cs)<br>[Examples/Examples/Mcp/McpAgentsExample.cs](../../../../sources/mobitouchOS__MaIN.NET/Examples/Examples/Mcp/McpAgentsExample.cs)<br>[Examples/Examples/Mcp/McpExample.cs](../../../../sources/mobitouchOS__MaIN.NET/Examples/Examples/Mcp/McpExample.cs) |
| retrieval | 30 | [src/MaIN.Services/Services/LLMService/Memory/DocumentProcessor.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/DocumentProcessor.cs)<br>[src/MaIN.Services/Services/LLMService/Memory/GeminiTextGeneratorAdapter.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/GeminiTextGeneratorAdapter.cs)<br>[src/MaIN.Services/Services/LLMService/Memory/IMemoryFactory.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/IMemoryFactory.cs)<br>[src/MaIN.Services/Services/LLMService/Memory/IMemoryService.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/IMemoryService.cs)<br>[src/MaIN.Services/Services/LLMService/Memory/KernelMemoryLlamaExtensions.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/KernelMemoryLlamaExtensions.cs)<br>[src/MaIN.Services/Services/LLMService/Memory/LLamaSharpTextGen.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/LLamaSharpTextGen.cs)<br>[src/MaIN.Services/Services/LLMService/Memory/MemoryFactory.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/MemoryFactory.cs)<br>[src/MaIN.Services/Services/LLMService/Memory/MemoryService.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Memory/MemoryService.cs) |
| spec | 2 | [Docs/maIN_roadmap.png](../../../../sources/mobitouchOS__MaIN.NET/Docs/maIN_roadmap.png)<br>[Docs/roadmap.md](../../../../sources/mobitouchOS__MaIN.NET/Docs/roadmap.md) |
| eval | 0 | 명확하지 않음 |
| security | 1 | [src/MaIN.Services/Services/LLMService/Auth/GoogleServiceAccountTokenProvider.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Auth/GoogleServiceAccountTokenProvider.cs) |
| ci | 3 | [.github/workflows/build-and-publish-inferpage.yml](../../../../sources/mobitouchOS__MaIN.NET/.github/workflows/build-and-publish-inferpage.yml)<br>[.github/workflows/docker-publish-inferpage.yml](../../../../sources/mobitouchOS__MaIN.NET/.github/workflows/docker-publish-inferpage.yml)<br>[.github/workflows/publish.yml](../../../../sources/mobitouchOS__MaIN.NET/.github/workflows/publish.yml) |
| container | 6 | [src/Dockerfile](../../../../sources/mobitouchOS__MaIN.NET/src/Dockerfile)<br>[src/Dockerfile.demo](../../../../sources/mobitouchOS__MaIN.NET/src/Dockerfile.demo)<br>[src/Dockerfile.inferpage](../../../../sources/mobitouchOS__MaIN.NET/src/Dockerfile.inferpage)<br>[scripts/docker-compose.inferpage-ollama.yml](../../../../sources/mobitouchOS__MaIN.NET/scripts/docker-compose.inferpage-ollama.yml)<br>[scripts/docker-compose.yml](../../../../sources/mobitouchOS__MaIN.NET/scripts/docker-compose.yml)<br>[Frontend/MainFE/Dockerfile](../../../../sources/mobitouchOS__MaIN.NET/Frontend/MainFE/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 4 | [readme.md](../../../../sources/mobitouchOS__MaIN.NET/readme.md)<br>[Docs/maIN_roadmap.png](../../../../sources/mobitouchOS__MaIN.NET/Docs/maIN_roadmap.png)<br>[Docs/main.png](../../../../sources/mobitouchOS__MaIN.NET/Docs/main.png)<br>[Docs/roadmap.md](../../../../sources/mobitouchOS__MaIN.NET/Docs/roadmap.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 3 | [.github/workflows/build-and-publish-inferpage.yml](../../../../sources/mobitouchOS__MaIN.NET/.github/workflows/build-and-publish-inferpage.yml)<br>[.github/workflows/docker-publish-inferpage.yml](../../../../sources/mobitouchOS__MaIN.NET/.github/workflows/docker-publish-inferpage.yml)<br>[.github/workflows/publish.yml](../../../../sources/mobitouchOS__MaIN.NET/.github/workflows/publish.yml) |
| 컨테이너/배포 | 6 | [src/Dockerfile](../../../../sources/mobitouchOS__MaIN.NET/src/Dockerfile)<br>[src/Dockerfile.demo](../../../../sources/mobitouchOS__MaIN.NET/src/Dockerfile.demo)<br>[src/Dockerfile.inferpage](../../../../sources/mobitouchOS__MaIN.NET/src/Dockerfile.inferpage)<br>[scripts/docker-compose.inferpage-ollama.yml](../../../../sources/mobitouchOS__MaIN.NET/scripts/docker-compose.inferpage-ollama.yml)<br>[scripts/docker-compose.yml](../../../../sources/mobitouchOS__MaIN.NET/scripts/docker-compose.yml)<br>[Frontend/MainFE/Dockerfile](../../../../sources/mobitouchOS__MaIN.NET/Frontend/MainFE/Dockerfile) |
| 보안/정책 | 1 | [src/MaIN.Services/Services/LLMService/Auth/GoogleServiceAccountTokenProvider.cs](../../../../sources/mobitouchOS__MaIN.NET/src/MaIN.Services/Services/LLMService/Auth/GoogleServiceAccountTokenProvider.cs) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | test/eval 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `src/MaIN.Services/Services/LLMService/Memory/DocumentProcessor.cs`, `src/MaIN.Services/Services/LLMService/Memory/GeminiTextGeneratorAdapter.cs`, `src/MaIN.Services/Services/LLMService/Memory/IMemoryFactory.cs`.
2. entrypoint를 따라 실행 흐름 확인: `src/MaIN.Services/Bootstrapper.cs`, `src/MaIN.Services/Extensions.cs`, `src/MaIN.Services/MaIN.Services.csproj`.
3. agent/tool runtime 매핑: `src/MaIN.Services/Services/Skills/AnthropicSkillUploader.cs`, `src/MaIN.Services/Services/Skills/FileSystemSkillLoader.cs`, `src/MaIN.Services/Services/Skills/OpenAiSkillUploader.cs`.
4. retrieval/memory/indexing 확인: `src/MaIN.Services/Services/LLMService/Memory/DocumentProcessor.cs`, `src/MaIN.Services/Services/LLMService/Memory/GeminiTextGeneratorAdapter.cs`, `src/MaIN.Services/Services/LLMService/Memory/IMemoryFactory.cs`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 NuGet package designed to make LLMs, RAG, and Agents first class citizens in .NET. 핵심 구조 신호는 C#, README.md, LICENSE, tests, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
