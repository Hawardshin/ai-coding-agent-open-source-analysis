# junkai-li/NetCoreKevin

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/junkai-li/NetCoreKevin |
| local path | sources/junkai-li__NetCoreKevin |
| HEAD | 846fc9d |
| stars/forks | 0 / 0 |
| language | C# |
| license |  |
| pushedAt | 2026-06-17T07:45:56Z |
| trendScore / priorityScore | 67 / 160 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 129 | README.md, App/WebApi/Dockerfile, Test/Kevin.Web.Test/Kevin.RAG/Tools/DocumentProcessorTests.cs |
| AI agent / tool use | 78 | vue/kevin.web.vue/README.md, Kevin/kevin.Module/kevin.AI.AgentFramework/WorkFlows/Demo.cs, Kevin/kevin.Module/kevin.AI.AgentFramework/WorkFlows/WorkFlowsAndAIAgentsDemo.cs |
| Frontend / developer experience | 64 | README.md, vue/kevin.web.vue/README.md, App/WebApi/Dockerfile |
| Local LLM / on-device inference | 28 | README.md, Kevin/kevin.Module/Kevin.RAG/Ollama/IOllamaApiService.cs, Kevin/kevin.Module/Kevin.RAG/Ollama/Models/OllamaApiSetting.cs |
| MCP / tool protocol | 26 | Kevin/kevin.Module/Kevin.MCP.Server/Client/IMySSEToolClient.cs, Kevin/kevin.Module/Kevin.MCP.Server/Client/MySSEToolClient.cs, Kevin/kevin.Module/Kevin.MCP.Server/Models/MCPSSEClientSetting.cs |
| LLM wiki / memory / graph | 23 | Kevin/Application/Services/AI/AIPromptsService.cs, Kevin/Domain/BaseDatas/TAIPromptsBaseDatas.cs, Kevin/Domain/Entities/AI/TAIPrompts.cs |
| Security / compliance | 7 | App/WebApi/Dockerfile, App/WebApi/appsettings.Test.json, SYSTEM_DOCUMENTATION.md |
| Infra / observability | 5 | Kevin/kevin.Module/Kevin.MCP.Server/ServiceCollectionExtensions.cs, SYSTEM_DOCUMENTATION.md |
| Spec / doc-driven workflow | 4 | Kevin/kevin.Module/Kevin.MCP.Server/Models/MCPSSEClientSetting.cs |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, frontend, frontend-dx, graphMemory, infra-observability, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, .NET |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 835 |
| manifests | 5 |
| docs | 13 |
| tests | 30 |
| ci/ops | 3 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | NetCoreKevin |
| headings | NetCoreKevin / 📷 功能效果图 / AI 智能体技能工具管理 / Skill动态管理 / AI 知识库系统 / AI 智能体技能 / AI 智能体自动任务调度 / 后台管理系统 (Vue3 + AntDesign) / ✨ 技术亮点 / 🚀 快速开始 |
| excerpt | NetCoreKevin 是基于 .NET 9 构建的企业级 AI中台智能体 SaaS 前后端分离架构，集成了 AI 知识库智能体、Skill技能管理、本地离线AI模型调用、智能体技能可控加载、AI联网搜索、智能体权限管控、一库多租户、分布式系统、微服务架构等核心能力。 📷 功能效果图 AI 智能体技能工具管理 动态管理 智能体配置 对话交互 ! 动态管理 Doc/Img/list1/1.png ! 智能体配置 Doc/Img/list1/2.png ! 对话交互 Doc/Img/list1/3.png Skill动态管理 界面管理 在线编辑 动态配置 ! 界面管理 Doc/Img/list6/1.png ! 在线编辑 Doc/Img/list6/2.png ! 动态配置 Doc/Img/list6/3.png AI 知识库系统 知识库管理 文档上传 智能问答 ! 知识库管理 Doc/Img/list2/1.png ! 文档上传 Doc/Img/list2/2.png ! 智能问答 Doc/Img/list2/3.png AI 智能体技能 技能列表 技能配置 技能执行 ! 技能列表 Doc/Img/list3/1.png ! 技能配置 Doc/Img/list3/2.png ! 技能执行 Doc/Img/list3/3.png AI 智能体自动任务调度 任务列表 任务配置 执行记录 ! 任务列表 Doc/Img/list4/1.png ! 任务配置 Doc/Img/list4/2.png ! 执行记录 Doc/Img/list4/3.png 后台管理系统 Vue3 + Ant |


## 주요 파일

### Manifests

- README.md
- vue/kevin.web.vue/README.md
- docker-compose.yml
- App/WebApi/Dockerfile
- vue/kevin.web.vue/package.json


### Spec / Docs / Prompt Artifacts

- .vscode/tasks.json


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| Kevin | 658 |
| vue | 85 |
| App | 44 |
| Test | 28 |
| InitData | 5 |
| Doc | 4 |
| .vscode | 2 |
| .dockerignore | 1 |
| .editorconfig | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| docker-compose.yml | 1 |
| LICENSE | 1 |
| NetCoreKevin.sln | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .cs | 652 |
| .csproj | 41 |
| .vue | 33 |
| .js | 28 |
| .txt | 13 |
| .css | 12 |
| .json | 11 |
| .md | 9 |
| [no-ext] | 8 |
| .xml | 5 |
| .config | 4 |
| .html | 4 |
| .xlsx | 4 |
| .ps1 | 3 |
| .traineddata | 2 |
| .development | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
