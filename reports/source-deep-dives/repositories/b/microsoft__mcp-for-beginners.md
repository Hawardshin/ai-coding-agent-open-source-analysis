# microsoft/mcp-for-beginners 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

This open-source curriculum introduces the fundamentals of Model Context Protocol (MCP) through real-world, cross-language examples in .NET, Java, TypeScript, JavaScript, Rust and Python. Designed for developers, it focuses on practical techniques for building modular, scalable, and secure AI workflows from session setup to service orchestration.

## 요약

- 조사 단위: `sources/microsoft__mcp-for-beginners` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 12,929 files, 8,326 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=translations/zh-TW/11-MCPServerHandsOnLabs/05-MCP-Server/README.md, translations/zh-TW/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/README.md, translations/zh-TW/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/README.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | microsoft/mcp-for-beginners |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Jupyter Notebook |
| Stars | 16551 |
| Forks | 5406 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/microsoft__mcp-for-beginners](../../../../sources/microsoft__mcp-for-beginners) |
| 기존 보고서 | [reports/global-trending/repositories/microsoft__mcp-for-beginners.md](../../../global-trending/repositories/microsoft__mcp-for-beginners.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 12929 / 8326 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .devcontainer, .github, 00-Introduction, 01-CoreConcepts, 02-Security, 03-GettingStarted, 04-PracticalImplementation, 05-AdvancedTopics, 06-CommunityContributions, 07-LessonsfromEarlyAdoption, 08-BestPractices, 09-CaseStudy, 10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit, 11-MCPServerHandsOnLabs, images, translated_images, translations |
| 상위 확장자 | .md: 8180, .webp: 4180, .json: 163, .ipynb: 112, .png: 76, .py: 36, .ts: 36, .java: 27, (none): 25, .cs: 15, .csproj: 10, .lock: 8 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 40 | [10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/src/server.py](../../../../sources/microsoft__mcp-for-beginners/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/src/server.py)<br>[10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/src/server.py](../../../../sources/microsoft__mcp-for-beginners/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/src/server.py)<br>[05-AdvancedTopics/web-search-mcp/server.py](../../../../sources/microsoft__mcp-for-beginners/05-AdvancedTopics/web-search-mcp/server.py)<br>[04-PracticalImplementation/samples/typescript/src/index.ts](../../../../sources/microsoft__mcp-for-beginners/04-PracticalImplementation/samples/typescript/src/index.ts)<br>[04-PracticalImplementation/samples/python/server.py](../../../../sources/microsoft__mcp-for-beginners/04-PracticalImplementation/samples/python/server.py)<br>[03-GettingStarted/samples/typescript/src/index.ts](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/typescript/src/index.ts)<br>[03-GettingStarted/samples/rust/src/main.rs](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/rust/src/main.rs)<br>[03-GettingStarted/15-mcp-apps/ext-apps/examples/basic-host/src/index.module.css](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/15-mcp-apps/ext-apps/examples/basic-host/src/index.module.css) |
| agentRuntime | 518 | [AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/AGENTS.md)<br>[translations/zh-TW/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/AGENTS.md)<br>[translations/zh-MO/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-MO/AGENTS.md)<br>[translations/zh-HK/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-HK/AGENTS.md)<br>[translations/zh-CN/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-CN/AGENTS.md)<br>[translations/vi/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/vi/AGENTS.md)<br>[translations/ur/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/ur/AGENTS.md)<br>[translations/uk/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/uk/AGENTS.md) |
| mcp | 2653 | [translations/zh-TW/11-MCPServerHandsOnLabs/05-MCP-Server/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/11-MCPServerHandsOnLabs/05-MCP-Server/README.md)<br>[translations/zh-TW/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/README.md)<br>[translations/zh-TW/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/README.md)<br>[translations/zh-TW/09-CaseStudy/docs-mcp/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/09-CaseStudy/docs-mcp/README.md)<br>[translations/zh-TW/09-CaseStudy/docs-mcp/solution/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/09-CaseStudy/docs-mcp/solution/README.md)<br>[translations/zh-TW/09-CaseStudy/docs-mcp/solution/scenario3/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/09-CaseStudy/docs-mcp/solution/scenario3/README.md)<br>[translations/zh-TW/09-CaseStudy/docs-mcp/solution/python/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/09-CaseStudy/docs-mcp/solution/python/README.md)<br>[translations/zh-TW/07-LessonsfromEarlyAdoption/microsoft-mcp-servers.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/07-LessonsfromEarlyAdoption/microsoft-mcp-servers.md) |
| retrieval | 13 | [04-PracticalImplementation/samples/typescript/src/index.ts](../../../../sources/microsoft__mcp-for-beginners/04-PracticalImplementation/samples/typescript/src/index.ts)<br>[04-PracticalImplementation/samples/javascript/index.js](../../../../sources/microsoft__mcp-for-beginners/04-PracticalImplementation/samples/javascript/index.js)<br>[04-PracticalImplementation/samples/java/containerapp/src/main/resources/templates/index.html](../../../../sources/microsoft__mcp-for-beginners/04-PracticalImplementation/samples/java/containerapp/src/main/resources/templates/index.html)<br>[03-GettingStarted/samples/typescript/src/index.ts](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/typescript/src/index.ts)<br>[03-GettingStarted/samples/javascript/index.js](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/javascript/index.js)<br>[03-GettingStarted/15-mcp-apps/ext-apps/examples/basic-host/index.html](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/15-mcp-apps/ext-apps/examples/basic-host/index.html)<br>[03-GettingStarted/15-mcp-apps/ext-apps/examples/basic-host/src/index.module.css](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/15-mcp-apps/ext-apps/examples/basic-host/src/index.module.css)<br>[03-GettingStarted/15-mcp-apps/ext-apps/examples/basic-host/src/index.tsx](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/15-mcp-apps/ext-apps/examples/basic-host/src/index.tsx) |
| spec | 59 | [translations/zh-TW/11-MCPServerHandsOnLabs/01-Architecture/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/11-MCPServerHandsOnLabs/01-Architecture/README.md)<br>[translations/zh-MO/11-MCPServerHandsOnLabs/01-Architecture/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-MO/11-MCPServerHandsOnLabs/01-Architecture/README.md)<br>[translations/zh-HK/11-MCPServerHandsOnLabs/01-Architecture/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-HK/11-MCPServerHandsOnLabs/01-Architecture/README.md)<br>[translations/zh-CN/11-MCPServerHandsOnLabs/01-Architecture/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-CN/11-MCPServerHandsOnLabs/01-Architecture/README.md)<br>[translations/vi/11-MCPServerHandsOnLabs/01-Architecture/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/vi/11-MCPServerHandsOnLabs/01-Architecture/README.md)<br>[translations/ur/11-MCPServerHandsOnLabs/01-Architecture/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/ur/11-MCPServerHandsOnLabs/01-Architecture/README.md)<br>[translations/uk/11-MCPServerHandsOnLabs/01-Architecture/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/uk/11-MCPServerHandsOnLabs/01-Architecture/README.md)<br>[translations/tr/11-MCPServerHandsOnLabs/01-Architecture/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/tr/11-MCPServerHandsOnLabs/01-Architecture/README.md) |
| eval | 5 | [03-GettingStarted/samples/python/test_calculator.py](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/python/test_calculator.py)<br>[03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/Bot.java](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/Bot.java)<br>[03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/LangChain4jClient.java](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/LangChain4jClient.java)<br>[03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/SDKClient.java](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/SDKClient.java)<br>[03-GettingStarted/11-simple-auth/solution/typescript/src/test.ts](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/11-simple-auth/solution/typescript/src/test.ts) |
| security | 1091 | [SECURITY.md](../../../../sources/microsoft__mcp-for-beginners/SECURITY.md)<br>[translations/zh-TW/SECURITY.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/SECURITY.md)<br>[translations/zh-TW/11-MCPServerHandsOnLabs/02-Security/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/11-MCPServerHandsOnLabs/02-Security/README.md)<br>[translations/zh-TW/05-AdvancedTopics/mcp-security-entra/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/05-AdvancedTopics/mcp-security-entra/README.md)<br>[translations/zh-TW/05-AdvancedTopics/mcp-security/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/05-AdvancedTopics/mcp-security/README.md)<br>[translations/zh-TW/03-GettingStarted/11-simple-auth/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/03-GettingStarted/11-simple-auth/README.md)<br>[translations/zh-TW/03-GettingStarted/11-simple-auth/solution/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/03-GettingStarted/11-simple-auth/solution/README.md)<br>[translations/zh-TW/03-GettingStarted/11-simple-auth/solution/typescript/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/03-GettingStarted/11-simple-auth/solution/typescript/README.md) |
| ci | 0 | 명확하지 않음 |
| container | 4 | [05-AdvancedTopics/mcp-oauth2-demo/Dockerfile](../../../../sources/microsoft__mcp-for-beginners/05-AdvancedTopics/mcp-oauth2-demo/Dockerfile)<br>[03-GettingStarted/samples/java/calculator/Dockerfile](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/java/calculator/Dockerfile)<br>[03-GettingStarted/samples/csharp/src/Dockerfile](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/csharp/src/Dockerfile)<br>[.devcontainer/Dockerfile](../../../../sources/microsoft__mcp-for-beginners/.devcontainer/Dockerfile) |
| instruction | 56 | [AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/AGENTS.md)<br>[translations/zh-TW/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/AGENTS.md)<br>[translations/zh-MO/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-MO/AGENTS.md)<br>[translations/zh-HK/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-HK/AGENTS.md)<br>[translations/zh-CN/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-CN/AGENTS.md)<br>[translations/vi/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/vi/AGENTS.md)<br>[translations/ur/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/ur/AGENTS.md)<br>[translations/uk/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/uk/AGENTS.md) |
| docs | 7168 | [README.md](../../../../sources/microsoft__mcp-for-beginners/README.md)<br>[translations/zh-TW/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/README.md)<br>[translations/zh-TW/11-MCPServerHandsOnLabs/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/11-MCPServerHandsOnLabs/README.md)<br>[translations/zh-TW/11-MCPServerHandsOnLabs/12-Best-Practices/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/11-MCPServerHandsOnLabs/12-Best-Practices/README.md)<br>[translations/zh-TW/11-MCPServerHandsOnLabs/11-Monitoring/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/11-MCPServerHandsOnLabs/11-Monitoring/README.md)<br>[translations/zh-TW/11-MCPServerHandsOnLabs/10-Deployment/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/11-MCPServerHandsOnLabs/10-Deployment/README.md)<br>[translations/zh-TW/11-MCPServerHandsOnLabs/09-VS-Code/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/11-MCPServerHandsOnLabs/09-VS-Code/README.md)<br>[translations/zh-TW/11-MCPServerHandsOnLabs/08-Testing/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/11-MCPServerHandsOnLabs/08-Testing/README.md) |
| config | 47 | [10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/pyproject.toml](../../../../sources/microsoft__mcp-for-beginners/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/pyproject.toml)<br>[10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/uv.lock](../../../../sources/microsoft__mcp-for-beginners/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/uv.lock)<br>[10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/inspector/package.json](../../../../sources/microsoft__mcp-for-beginners/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/inspector/package.json)<br>[10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/pyproject.toml](../../../../sources/microsoft__mcp-for-beginners/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/pyproject.toml)<br>[10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/uv.lock](../../../../sources/microsoft__mcp-for-beginners/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/uv.lock)<br>[10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/inspector/package.json](../../../../sources/microsoft__mcp-for-beginners/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/inspector/package.json)<br>[09-CaseStudy/docs-mcp/solution/python/requirements.txt](../../../../sources/microsoft__mcp-for-beginners/09-CaseStudy/docs-mcp/solution/python/requirements.txt)<br>[05-AdvancedTopics/requirements.txt](../../../../sources/microsoft__mcp-for-beginners/05-AdvancedTopics/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 5 | [03-GettingStarted/samples/python/test_calculator.py](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/python/test_calculator.py)<br>[03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/Bot.java](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/Bot.java)<br>[03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/LangChain4jClient.java](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/LangChain4jClient.java)<br>[03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/SDKClient.java](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/SDKClient.java)<br>[03-GettingStarted/11-simple-auth/solution/typescript/src/test.ts](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/11-simple-auth/solution/typescript/src/test.ts) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 4 | [05-AdvancedTopics/mcp-oauth2-demo/Dockerfile](../../../../sources/microsoft__mcp-for-beginners/05-AdvancedTopics/mcp-oauth2-demo/Dockerfile)<br>[03-GettingStarted/samples/java/calculator/Dockerfile](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/java/calculator/Dockerfile)<br>[03-GettingStarted/samples/csharp/src/Dockerfile](../../../../sources/microsoft__mcp-for-beginners/03-GettingStarted/samples/csharp/src/Dockerfile)<br>[.devcontainer/Dockerfile](../../../../sources/microsoft__mcp-for-beginners/.devcontainer/Dockerfile) |
| 보안/정책 | 1091 | [SECURITY.md](../../../../sources/microsoft__mcp-for-beginners/SECURITY.md)<br>[translations/zh-TW/SECURITY.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/SECURITY.md)<br>[translations/zh-TW/11-MCPServerHandsOnLabs/02-Security/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/11-MCPServerHandsOnLabs/02-Security/README.md)<br>[translations/zh-TW/05-AdvancedTopics/mcp-security-entra/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/05-AdvancedTopics/mcp-security-entra/README.md)<br>[translations/zh-TW/05-AdvancedTopics/mcp-security/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/05-AdvancedTopics/mcp-security/README.md)<br>[translations/zh-TW/03-GettingStarted/11-simple-auth/README.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/03-GettingStarted/11-simple-auth/README.md) |
| 에이전트 지시문 | 56 | [AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/AGENTS.md)<br>[translations/zh-TW/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-TW/AGENTS.md)<br>[translations/zh-MO/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-MO/AGENTS.md)<br>[translations/zh-HK/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-HK/AGENTS.md)<br>[translations/zh-CN/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/zh-CN/AGENTS.md)<br>[translations/vi/AGENTS.md](../../../../sources/microsoft__mcp-for-beginners/translations/vi/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `translations/zh-TW/11-MCPServerHandsOnLabs/05-MCP-Server/README.md`, `translations/zh-TW/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/README.md`, `translations/zh-TW/10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/README.md`.
2. entrypoint를 따라 실행 흐름 확인: `10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab4/code/github_mcp_server/src/server.py`, `10-StreamliningAIWorkflowsBuildingAnMCPServerWithAIToolkit/lab3/code/weather_mcp/src/server.py`, `05-AdvancedTopics/web-search-mcp/server.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `translations/zh-TW/AGENTS.md`, `translations/zh-MO/AGENTS.md`.
4. retrieval/memory/indexing 확인: `04-PracticalImplementation/samples/typescript/src/index.ts`, `04-PracticalImplementation/samples/javascript/index.js`, `04-PracticalImplementation/samples/java/containerapp/src/main/resources/templates/index.html`.
5. test/eval 파일로 동작 검증: `03-GettingStarted/samples/python/test_calculator.py`, `03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/Bot.java`, `03-GettingStarted/samples/java/calculator/src/test/java/com/microsoft/mcp/sample/client/LangChain4jClient.java`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 This open source curriculum introduces the fundamentals of Model Context Protocol MCP through real world, cross language. 핵심 구조 신호는 Jupyter Notebook, README.md, AGENTS.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
