# microsoft/mcp-for-beginners Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

This open-source curriculum introduces the fundamentals of Model Context Protocol (MCP) through real-world, cross-language examples in .NET, Java, TypeScript, JavaScript, Rust and Python. Designed for developers, it focuses on practical techniques for building modular, scalable, and secure AI workflows from session setup to service orchestration.

## 요약

- 조사 단위: `sources/microsoft__mcp-for-beginners` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 12,929 files, 8,326 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=translations/zh-TW/11-MCPServerHandsOnLabs/05-MCP-Server/README.md, translations/zh-TW/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/README.md, translations/zh-TW/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | microsoft/mcp-for-beginners |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Jupyter Notebook |
| Stars | 16551 |
| Forks | 5406 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/microsoft__mcp-for-beginners](../../../../sources/microsoft__mcp-for-beginners) |
| Existing report | [reports/global-trending/repositories/microsoft__mcp-for-beginners.md](../../../global-trending/repositories/microsoft__mcp-for-beginners.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 12929 / 8326 |
| Max observed depth | 13 |
| Top directories | .devcontainer, .github, 00-Introduction, 01-CoreConcepts, 02-Security, 03-GettingStarted, 04-PracticalImplementation, 05-AdvancedTopics, 06-CommunityContributions, 07-LessonsfromEarlyAdoption, 08-BestPractices, 09-CaseStudy, 10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit, 11-MCPServerHandsOnLabs, images, translated_images, translations |
| Top extensions | .md: 8180, .webp: 4180, .json: 163, .ipynb: 112, .png: 76, .py: 36, .ts: 36, .java: 27, (none): 25, .cs: 15, .csproj: 10, .lock: 8 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| 00-Introduction | top-level component | 1 |
| 01-CoreConcepts | top-level component | 1 |
| 02-Security | top-level component | 1 |
| 03-GettingStarted | top-level component | 1 |
| 04-PracticalImplementation | top-level component | 1 |
| 05-AdvancedTopics | top-level component | 1 |
| 06-CommunityContributions | top-level component | 1 |
| 07-LessonsfromEarlyAdoption | top-level component | 1 |
| 08-BestPractices | top-level component | 1 |
| 09-CaseStudy | top-level component | 1 |
| 10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit | source boundary | 1 |
| 11-MCPServerHandsOnLabs | source boundary | 1 |
| images | top-level component | 1 |
| translated_images | top-level component | 1 |
| translations | top-level component | 1 |


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
| mcp | [translations/zh-TW/11-MCPServerHandsOnLabs/05-MCP-Server/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/11-MCPServerHandsOnLabs/05-MCP-Server/README.md) | mcp signal |
| mcp | [translations/zh-TW/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/README.md) | mcp signal |
| mcp | [translations/zh-TW/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/README.md) | mcp signal |
| mcp | [translations/zh-TW/09-CaseStudy/docs-mcp/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/09-CaseStudy/docs-mcp/README.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/AGENTS.md) | agentRuntime signal |
| agentRuntime | [translations/zh-TW/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/AGENTS.md) | agentRuntime signal |
| agentRuntime | [translations/zh-MO/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-MO/AGENTS.md) | agentRuntime signal |
| agentRuntime | [translations/zh-HK/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-HK/AGENTS.md) | agentRuntime signal |
| entrypoints | [10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/src/server.py](../../../../sources/microsoft__mcp-for-beginners/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/src/server.py) | entrypoints signal |
| entrypoints | [10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/src/server.py](../../../../sources/microsoft__mcp-for-beginners/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/src/server.py) | entrypoints signal |
| entrypoints | [05-AdvancedTopics/web-search-mcp/server.py](../../../../sources/microsoft__mcp-for-beginners/05-AdvancedTopics/web-search-mcp/server.py) | entrypoints signal |
| entrypoints | [04-PracticalImplementation/samples/typescript/src/index.ts](../../../../sources/microsoft__mcp-for-beginners/04-PracticalImplementation/samples/typescript/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 40 | [10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/src/server.py](../../../../sources/microsoft__mcp-for-beginners/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/src/server.py)<br>[10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/src/server.py](../../../../sources/microsoft__mcp-for-beginners/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/src/server.py)<br>[05-AdvancedTopics/web-search-mcp/server.py](../../../../sources/microsoft__mcp-for-beginners/05-AdvancedTopics/web-search-mcp/server.py)<br>[04-PracticalImplementation/samples/typescript/src/index.ts](../../../../sources/microsoft__mcp-for-beginners/04-PracticalImplementation/samples/typescript/src/index.ts)<br>[04-PracticalImplementation/samples/python/server.py](../../../../sources/microsoft__mcp-for-beginners/04-PracticalImplementation/samples/python/server.py)<br>[03-GettingStarted/samples/typescript/src/index.ts](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/typescript/src/index.ts)<br>[03-GettingStarted/samples/rust/src/main.rs](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/rust/src/main.rs)<br>[03-GettingStarted/15-mcp-apps/ext-apps/examples/basic-host/src/index.module.css](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/15-mcp-apps/ext-apps/examples/basic-host/src/index.module.css) |
| agentRuntime | 518 | [AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/AGENTS.md)<br>[translations/zh-TW/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/AGENTS.md)<br>[translations/zh-MO/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-MO/AGENTS.md)<br>[translations/zh-HK/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-HK/AGENTS.md)<br>[translations/zh-CN/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-CN/AGENTS.md)<br>[translations/vi/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/vi/AGENTS.md)<br>[translations/ur/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/ur/AGENTS.md)<br>[translations/uk/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/uk/AGENTS.md) |
| mcp | 2653 | [translations/zh-TW/11-MCPServerHandsOnLabs/05-MCP-Server/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/11-MCPServerHandsOnLabs/05-MCP-Server/README.md)<br>[translations/zh-TW/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/README.md)<br>[translations/zh-TW/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/README.md)<br>[translations/zh-TW/09-CaseStudy/docs-mcp/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/09-CaseStudy/docs-mcp/README.md)<br>[translations/zh-TW/09-CaseStudy/docs-mcp/solution/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/09-CaseStudy/docs-mcp/solution/README.md)<br>[translations/zh-TW/09-CaseStudy/docs-mcp/solution/scenario3/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/09-CaseStudy/docs-mcp/solution/scenario3/README.md)<br>[translations/zh-TW/09-CaseStudy/docs-mcp/solution/python/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/09-CaseStudy/docs-mcp/solution/python/README.md)<br>[translations/zh-TW/07-LessonsfromEarlyAdoption/microsoft-mcp-servers.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/07-LessonsfromEarlyAdoption/microsoft-mcp-servers.md) |
| retrieval | 13 | [04-PracticalImplementation/samples/typescript/src/index.ts](../../../../sources/microsoft__mcp-for-beginners/04-PracticalImplementation/samples/typescript/src/index.ts)<br>[04-PracticalImplementation/samples/javascript/index.js](../../../../sources/microsoft__mcp-for-beginners/04-PracticalImplementation/samples/javascript/index.js)<br>[04-PracticalImplementation/samples/java/containerapp/src/main/resources/templates/index.html](../../../../sources/microsoft__mcp-for-beginners/04-PracticalImplementation/samples/java/containerapp/src/main/resources/templates/index.html)<br>[03-GettingStarted/samples/typescript/src/index.ts](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/typescript/src/index.ts)<br>[03-GettingStarted/samples/javascript/index.js](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/javascript/index.js)<br>[03-GettingStarted/15-mcp-apps/ext-apps/examples/basic-host/index.html](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/15-mcp-apps/ext-apps/examples/basic-host/index.html)<br>[03-GettingStarted/15-mcp-apps/ext-apps/examples/basic-host/src/index.module.css](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/15-mcp-apps/ext-apps/examples/basic-host/src/index.module.css)<br>[03-GettingStarted/15-mcp-apps/ext-apps/examples/basic-host/src/index.tsx](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/15-mcp-apps/ext-apps/examples/basic-host/src/index.tsx) |
| spec | 59 | [translations/zh-TW/11-MCPServerHandsOnLabs/01-Architecture/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/11-MCPServerHandsOnLabs/01-Architecture/README.md)<br>[translations/zh-MO/11-MCPServerHandsOnLabs/01-Architecture/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-MO/11-MCPServerHandsOnLabs/01-Architecture/README.md)<br>[translations/zh-HK/11-MCPServerHandsOnLabs/01-Architecture/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-HK/11-MCPServerHandsOnLabs/01-Architecture/README.md)<br>[translations/zh-CN/11-MCPServerHandsOnLabs/01-Architecture/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-CN/11-MCPServerHandsOnLabs/01-Architecture/README.md)<br>[translations/vi/11-MCPServerHandsOnLabs/01-Architecture/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/vi/11-MCPServerHandsOnLabs/01-Architecture/README.md)<br>[translations/ur/11-MCPServerHandsOnLabs/01-Architecture/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/ur/11-MCPServerHandsOnLabs/01-Architecture/README.md)<br>[translations/uk/11-MCPServerHandsOnLabs/01-Architecture/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/uk/11-MCPServerHandsOnLabs/01-Architecture/README.md)<br>[translations/tr/11-MCPServerHandsOnLabs/01-Architecture/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/tr/11-MCPServerHandsOnLabs/01-Architecture/README.md) |
| eval | 5 | [03-GettingStarted/samples/python/test_calculator.py](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/python/test_calculator.py)<br>[03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/Bot.java](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/Bot.java)<br>[03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/LangChain4jClient.java](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/LangChain4jClient.java)<br>[03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/SDKClient.java](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/SDKClient.java)<br>[03-GettingStarted/11-simple-auth/solution/typescript/src/test.ts](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/11-simple-auth/solution/typescript/src/test.ts) |
| security | 1091 | [SECURITY.md](../../../../sources/microsoft__mcp-for-beginners/SECURITY.md)<br>[translations/zh-TW/SECURITY.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/SECURITY.md)<br>[translations/zh-TW/11-MCPServerHandsOnLabs/02-Security/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/11-MCPServerHandsOnLabs/02-Security/README.md)<br>[translations/zh-TW/05-AdvancedTopics/mcp-security-entra/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/05-AdvancedTopics/mcp-security-entra/README.md)<br>[translations/zh-TW/05-AdvancedTopics/mcp-security/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/05-AdvancedTopics/mcp-security/README.md)<br>[translations/zh-TW/03-GettingStarted/11-simple-auth/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/03-GettingStarted/11-simple-auth/README.md)<br>[translations/zh-TW/03-GettingStarted/11-simple-auth/solution/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/03-GettingStarted/11-simple-auth/solution/README.md)<br>[translations/zh-TW/03-GettingStarted/11-simple-auth/solution/typescript/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/03-GettingStarted/11-simple-auth/solution/typescript/README.md) |
| ci | 0 | not obvious |
| container | 4 | [05-AdvancedTopics/mcp-oauth2-demo/Dockerfile](../../../../sources/microsoft__mcp-for-beginners/05-AdvancedTopics/mcp-oauth2-demo/Dockerfile)<br>[03-GettingStarted/samples/java/calculator/Dockerfile](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/java/calculator/Dockerfile)<br>[03-GettingStarted/samples/csharp/src/Dockerfile](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/csharp/src/Dockerfile)<br>[.devcontainer/Dockerfile](../../../../sources/microsoft__mcp-for-beginners/.devcontainer/Dockerfile) |
| instruction | 56 | [AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/AGENTS.md)<br>[translations/zh-TW/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/AGENTS.md)<br>[translations/zh-MO/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-MO/AGENTS.md)<br>[translations/zh-HK/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-HK/AGENTS.md)<br>[translations/zh-CN/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-CN/AGENTS.md)<br>[translations/vi/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/vi/AGENTS.md)<br>[translations/ur/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/ur/AGENTS.md)<br>[translations/uk/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/uk/AGENTS.md) |
| docs | 7168 | [README.md](../../../../sources/microsoft__mcp-for-beginners/README.md)<br>[translations/zh-TW/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/README.md)<br>[translations/zh-TW/11-MCPServerHandsOnLabs/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/11-MCPServerHandsOnLabs/README.md)<br>[translations/zh-TW/11-MCPServerHandsOnLabs/12-Best-Practices/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/11-MCPServerHandsOnLabs/12-Best-Practices/README.md)<br>[translations/zh-TW/11-MCPServerHandsOnLabs/11-Monitoring/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/11-MCPServerHandsOnLabs/11-Monitoring/README.md)<br>[translations/zh-TW/11-MCPServerHandsOnLabs/10-Deployment/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/11-MCPServerHandsOnLabs/10-Deployment/README.md)<br>[translations/zh-TW/11-MCPServerHandsOnLabs/09-VS-Code/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/11-MCPServerHandsOnLabs/09-VS-Code/README.md)<br>[translations/zh-TW/11-MCPServerHandsOnLabs/08-Testing/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/11-MCPServerHandsOnLabs/08-Testing/README.md) |
| config | 47 | [10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/pyproject.toml](../../../../sources/microsoft__mcp-for-beginners/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/pyproject.toml)<br>[10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/uv.lock](../../../../sources/microsoft__mcp-for-beginners/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/uv.lock)<br>[10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/inspector/package.json](../../../../sources/microsoft__mcp-for-beginners/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/inspector/package.json)<br>[10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/pyproject.toml](../../../../sources/microsoft__mcp-for-beginners/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/pyproject.toml)<br>[10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/uv.lock](../../../../sources/microsoft__mcp-for-beginners/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/uv.lock)<br>[10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/inspector/package.json](../../../../sources/microsoft__mcp-for-beginners/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/inspector/package.json)<br>[09-CaseStudy/docs-mcp/solution/python/requirements.txt](../../../../sources/microsoft__mcp-for-beginners/09-CaseStudy/docs-mcp/solution/python/requirements.txt)<br>[05-AdvancedTopics/requirements.txt](../../../../sources/microsoft__mcp-for-beginners/05-AdvancedTopics/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 5 | [03-GettingStarted/samples/python/test_calculator.py](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/python/test_calculator.py)<br>[03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/Bot.java](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/Bot.java)<br>[03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/LangChain4jClient.java](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/LangChain4jClient.java)<br>[03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/SDKClient.java](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/SDKClient.java)<br>[03-GettingStarted/11-simple-auth/solution/typescript/src/test.ts](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/11-simple-auth/solution/typescript/src/test.ts) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 4 | [05-AdvancedTopics/mcp-oauth2-demo/Dockerfile](../../../../sources/microsoft__mcp-for-beginners/05-AdvancedTopics/mcp-oauth2-demo/Dockerfile)<br>[03-GettingStarted/samples/java/calculator/Dockerfile](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/java/calculator/Dockerfile)<br>[03-GettingStarted/samples/csharp/src/Dockerfile](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/csharp/src/Dockerfile)<br>[.devcontainer/Dockerfile](../../../../sources/microsoft__mcp-for-beginners/.devcontainer/Dockerfile) |
| Security / policy | 1091 | [SECURITY.md](../../../../sources/microsoft__mcp-for-beginners/SECURITY.md)<br>[translations/zh-TW/SECURITY.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/SECURITY.md)<br>[translations/zh-TW/11-MCPServerHandsOnLabs/02-Security/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/11-MCPServerHandsOnLabs/02-Security/README.md)<br>[translations/zh-TW/05-AdvancedTopics/mcp-security-entra/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/05-AdvancedTopics/mcp-security-entra/README.md)<br>[translations/zh-TW/05-AdvancedTopics/mcp-security/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/05-AdvancedTopics/mcp-security/README.md)<br>[translations/zh-TW/03-GettingStarted/11-simple-auth/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/03-GettingStarted/11-simple-auth/README.md) |
| Agent instructions | 56 | [AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/AGENTS.md)<br>[translations/zh-TW/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/AGENTS.md)<br>[translations/zh-MO/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-MO/AGENTS.md)<br>[translations/zh-HK/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-HK/AGENTS.md)<br>[translations/zh-CN/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-CN/AGENTS.md)<br>[translations/vi/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/vi/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `translations/zh-TW/11-MCPServerHandsOnLabs/05-MCP-Server/README.md`, `translations/zh-TW/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/README.md`, `translations/zh-TW/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/README.md`.
2. Trace execution through entrypoints: `10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/src/server.py`, `10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/src/server.py`, `05-AdvancedTopics/web-search-mcp/server.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `translations/zh-TW/AGENTS.md`, `translations/zh-MO/AGENTS.md`.
4. Inspect retrieval/memory/indexing through: `04-PracticalImplementation/samples/typescript/src/index.ts`, `04-PracticalImplementation/samples/javascript/index.js`, `04-PracticalImplementation/samples/java/containerapp/src/main/resources/templates/index.html`.
5. Verify behavior through test/eval files: `03-GettingStarted/samples/python/test_calculator.py`, `03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/Bot.java`, `03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/LangChain4jClient.java`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 This open source curriculum introduces the fundamentals of Model Context Protocol MCP through real world, cross language. 핵심 구조 신호는 Jupyter Notebook, README.md, AGENTS.md, LICENSE, ci, docs이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
