# opensolon/solon-ai 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Java AI application development framework (supports LLM-tool,skill; RAG; MCP; Agent-ReAct,Team-Agent). Compatible with java8 ~ java25. It can also be embedded in SpringBoot, jFinal, Vert.x, Quarkus, and other frameworks.

## 요약

- 조사 단위: `sources/opensolon__solon-ai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,477 files, 1,149 directories, depth score 104, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=solon-ai-mcp/NOTICE, solon-ai-mcp/pom.xml, solon-ai-mcp/reconnect.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | opensolon/solon-ai |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Java |
| Stars | 404 |
| Forks | 60 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/opensolon__solon-ai](../../../../sources/opensolon__solon-ai) |
| 기존 보고서 | [reports/global-trending/repositories/opensolon__solon-ai.md](../../../global-trending/repositories/opensolon__solon-ai.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1477 / 1149 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | __release, .gitee, .github, acp-sdk, mcp-core, mcp-json-jackson2, solon-ai, solon-ai-acp, solon-ai-agent, solon-ai-anp, solon-ai-core, solon-ai-flow, solon-ai-harness, solon-ai-llm-dialects, solon-ai-mcp, solon-ai-parent, solon-ai-rag-loaders, solon-ai-rag-repositorys, solon-ai-rag-searchs, solon-ai-sandbox |
| 상위 확장자 | .java: 1229, .xml: 65, .md: 50, .json: 46, .yml: 40, (none): 27, .properties: 3, .pdf: 2, .png: 2, .xlsx: 2, .class: 1, .db: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| __release | top-level component | 1 |
| .github | ci surface | 1 |
| acp-sdk | top-level component | 1 |
| mcp-core | top-level component | 1 |
| mcp-json-jackson2 | top-level component | 1 |
| solon-ai | top-level component | 1 |
| solon-ai-acp | top-level component | 1 |
| solon-ai-agent | top-level component | 1 |
| solon-ai-anp | top-level component | 1 |
| solon-ai-core | top-level component | 1 |
| solon-ai-flow | top-level component | 1 |
| solon-ai-harness | top-level component | 1 |
| solon-ai-llm-dialects | top-level component | 1 |
| solon-ai-mcp | top-level component | 1 |
| solon-ai-parent | top-level component | 1 |
| solon-ai-rag-loaders | top-level component | 1 |
| solon-ai-rag-repositorys | top-level component | 1 |
| solon-ai-rag-searchs | top-level component | 1 |


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
| mcp | [solon-ai-mcp/NOTICE](../../../../sources/opensolon__solon-ai/solon-ai-mcp/NOTICE) | mcp signal |
| mcp | [solon-ai-mcp/pom.xml](../../../../sources/opensolon__solon-ai/solon-ai-mcp/pom.xml) | mcp signal |
| mcp | [solon-ai-mcp/reconnect.md](../../../../sources/opensolon__solon-ai/solon-ai-mcp/reconnect.md) | mcp signal |
| mcp | [solon-ai-mcp/src/test/resources/app-client-serverparams.yml](../../../../sources/opensolon__solon-ai/solon-ai-mcp/src/test/resources/app-client-serverparams.yml) | mcp signal |
| agentRuntime | [solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/Context.java](../../../../sources/opensolon__solon-ai/solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/Context.java) | agentRuntime signal |
| agentRuntime | [solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/tool/FunctionCall.java](../../../../sources/opensolon__solon-ai/solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/tool/FunctionCall.java) | agentRuntime signal |
| agentRuntime | [solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/tool/Tool.java](../../../../sources/opensolon__solon-ai/solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/tool/Tool.java) | agentRuntime signal |
| agentRuntime | [solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/tool/ToolCall.java](../../../../sources/opensolon__solon-ai/solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/tool/ToolCall.java) | agentRuntime signal |
| container | [solon-ai-rag-repositorys/solon-ai-repo-weaviate/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-weaviate/docker-compose.yml) | container support |
| container | [solon-ai-rag-repositorys/solon-ai-repo-redis/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-redis/docker-compose.yml) | container support |
| eval | [TEST.md](../../../../sources/opensolon__solon-ai/TEST.md) | eval support |
| eval | [solon-ai-talents/solon-ai-talents/src/test/resources/app.yml](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/resources/app.yml) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 273 | [solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/Context.java](../../../../sources/opensolon__solon-ai/solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/Context.java)<br>[solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/tool/FunctionCall.java](../../../../sources/opensolon__solon-ai/solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/tool/FunctionCall.java)<br>[solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/tool/Tool.java](../../../../sources/opensolon__solon-ai/solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/tool/Tool.java)<br>[solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/tool/ToolCall.java](../../../../sources/opensolon__solon-ai/solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/tool/ToolCall.java)<br>[solon-ai-talents/solon-ai-talents/src/test/java/features/ai/talents/memory/MemTalentTests.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/java/features/ai/talents/memory/MemTalentTests.java)<br>[solon-ai-talents/solon-ai-talent-web/src/test/java/features/skill/web/WebfetchToolTimeoutTest.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-web/src/test/java/features/skill/web/WebfetchToolTimeoutTest.java)<br>[solon-ai-talents/solon-ai-talent-memory/src/test/java/demo/ai/memory/MemoryManger.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-memory/src/test/java/demo/ai/memory/MemoryManger.java)<br>[solon-ai-talents/solon-ai-talent-memory/src/test/java/demo/ai/memory/MemorySolutionImpl.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-memory/src/test/java/demo/ai/memory/MemorySolutionImpl.java) |
| mcp | 248 | [solon-ai-mcp/NOTICE](../../../../sources/opensolon__solon-ai/solon-ai-mcp/NOTICE)<br>[solon-ai-mcp/pom.xml](../../../../sources/opensolon__solon-ai/solon-ai-mcp/pom.xml)<br>[solon-ai-mcp/reconnect.md](../../../../sources/opensolon__solon-ai/solon-ai-mcp/reconnect.md)<br>[solon-ai-mcp/src/test/resources/app-client-serverparams.yml](../../../../sources/opensolon__solon-ai/solon-ai-mcp/src/test/resources/app-client-serverparams.yml)<br>[solon-ai-mcp/src/test/resources/app-client.yml](../../../../sources/opensolon__solon-ai/solon-ai-mcp/src/test/resources/app-client.yml)<br>[solon-ai-mcp/src/test/resources/app-server.yml](../../../../sources/opensolon__solon-ai/solon-ai-mcp/src/test/resources/app-server.yml)<br>[solon-ai-mcp/src/test/resources/app-server2.yml](../../../../sources/opensolon__solon-ai/solon-ai-mcp/src/test/resources/app-server2.yml)<br>[solon-ai-mcp/src/test/resources/app.yml](../../../../sources/opensolon__solon-ai/solon-ai-mcp/src/test/resources/app.yml) |
| retrieval | 251 | [solon-ai-talents/solon-ai-talents/src/test/java/features/ai/talents/memory/MemTalentTests.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/java/features/ai/talents/memory/MemTalentTests.java)<br>[solon-ai-talents/solon-ai-talent-memory/pom.xml](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-memory/pom.xml)<br>[solon-ai-talents/solon-ai-talent-memory/src/test/java/demo/ai/memory/MemoryManger.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-memory/src/test/java/demo/ai/memory/MemoryManger.java)<br>[solon-ai-talents/solon-ai-talent-memory/src/test/java/demo/ai/memory/MemorySolutionImpl.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-memory/src/test/java/demo/ai/memory/MemorySolutionImpl.java)<br>[solon-ai-talents/solon-ai-talent-memory/src/test/java/demo/ai/memory/MemorySolutionMdImpl.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-memory/src/test/java/demo/ai/memory/MemorySolutionMdImpl.java)<br>[solon-ai-talents/solon-ai-talent-memory/src/main/java/org/noear/solon/ai/talents/memory/MemorySearcher.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-memory/src/main/java/org/noear/solon/ai/talents/memory/MemorySearcher.java)<br>[solon-ai-talents/solon-ai-talent-memory/src/main/java/org/noear/solon/ai/talents/memory/MemorySearchResult.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-memory/src/main/java/org/noear/solon/ai/talents/memory/MemorySearchResult.java)<br>[solon-ai-talents/solon-ai-talent-memory/src/main/java/org/noear/solon/ai/talents/memory/MemorySolution.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-memory/src/main/java/org/noear/solon/ai/talents/memory/MemorySolution.java) |
| spec | 43 | [mcp-core/src/main/java/io/modelcontextprotocol/spec/ClosedMcpTransportSession.java](../../../../sources/opensolon__solon-ai/mcp-core/src/main/java/io/modelcontextprotocol/spec/ClosedMcpTransportSession.java)<br>[mcp-core/src/main/java/io/modelcontextprotocol/spec/DefaultMcpStreamableServerSessionFactory.java](../../../../sources/opensolon__solon-ai/mcp-core/src/main/java/io/modelcontextprotocol/spec/DefaultMcpStreamableServerSessionFactory.java)<br>[mcp-core/src/main/java/io/modelcontextprotocol/spec/DefaultMcpTransportSession.java](../../../../sources/opensolon__solon-ai/mcp-core/src/main/java/io/modelcontextprotocol/spec/DefaultMcpTransportSession.java)<br>[mcp-core/src/main/java/io/modelcontextprotocol/spec/DefaultMcpTransportStream.java](../../../../sources/opensolon__solon-ai/mcp-core/src/main/java/io/modelcontextprotocol/spec/DefaultMcpTransportStream.java)<br>[mcp-core/src/main/java/io/modelcontextprotocol/spec/HttpHeaders.java](../../../../sources/opensolon__solon-ai/mcp-core/src/main/java/io/modelcontextprotocol/spec/HttpHeaders.java)<br>[mcp-core/src/main/java/io/modelcontextprotocol/spec/JsonSchemaValidator.java](../../../../sources/opensolon__solon-ai/mcp-core/src/main/java/io/modelcontextprotocol/spec/JsonSchemaValidator.java)<br>[mcp-core/src/main/java/io/modelcontextprotocol/spec/McpClientSession.java](../../../../sources/opensolon__solon-ai/mcp-core/src/main/java/io/modelcontextprotocol/spec/McpClientSession.java)<br>[mcp-core/src/main/java/io/modelcontextprotocol/spec/McpClientTransport.java](../../../../sources/opensolon__solon-ai/mcp-core/src/main/java/io/modelcontextprotocol/spec/McpClientTransport.java) |
| eval | 570 | [TEST.md](../../../../sources/opensolon__solon-ai/TEST.md)<br>[solon-ai-talents/solon-ai-talents/src/test/resources/app.yml](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/resources/app.yml)<br>[solon-ai-talents/solon-ai-talents/src/test/resources/cli.yml](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/resources/cli.yml)<br>[solon-ai-talents/solon-ai-talents/src/test/resources/db.sql](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/resources/db.sql)<br>[solon-ai-talents/solon-ai-talents/src/test/resources/openapi3-case1.json](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/resources/openapi3-case1.json)<br>[solon-ai-talents/solon-ai-talents/src/test/java/labs/ai/talents/ClassAsOne.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/java/labs/ai/talents/ClassAsOne.java)<br>[solon-ai-talents/solon-ai-talents/src/test/java/features/ai/talents/web/WebSearchAndCrawlerTests.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/java/features/ai/talents/web/WebSearchAndCrawlerTests.java)<br>[solon-ai-talents/solon-ai-talents/src/test/java/features/ai/talents/toolgateway/ToolGatewayTalentTest.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/java/features/ai/talents/toolgateway/ToolGatewayTalentTest.java) |
| security | 61 | [solon-ai-talents/solon-ai-talent-cli/src/test/java/features/ai/talents/cli/sandbox/SandboxTest.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-cli/src/test/java/features/ai/talents/cli/sandbox/SandboxTest.java)<br>[solon-ai-sandbox/pom.xml](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/pom.xml)<br>[solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eLogicTest.java](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eLogicTest.java)<br>[solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eMacOSTest.java](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eMacOSTest.java)<br>[solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eManagerTest.java](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eManagerTest.java)<br>[solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/util/GlobUtilsTest.java](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/util/GlobUtilsTest.java)<br>[solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/util/SandboxPathUtilsTest.java](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/util/SandboxPathUtilsTest.java)<br>[solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/util/ShellQuoteTest.java](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/util/ShellQuoteTest.java) |
| ci | 0 | 명확하지 않음 |
| container | 6 | [solon-ai-rag-repositorys/solon-ai-repo-weaviate/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-weaviate/docker-compose.yml)<br>[solon-ai-rag-repositorys/solon-ai-repo-redis/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-redis/docker-compose.yml)<br>[solon-ai-rag-repositorys/solon-ai-repo-qdrant/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-qdrant/docker-compose.yml)<br>[solon-ai-rag-repositorys/solon-ai-repo-pgvector/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-pgvector/docker-compose.yml)<br>[solon-ai-rag-repositorys/solon-ai-repo-milvus/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-milvus/docker-compose.yml)<br>[solon-ai-rag-repositorys/solon-ai-repo-chroma/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-chroma/docker-compose.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 15 | [README_CN.md](../../../../sources/opensolon__solon-ai/README_CN.md)<br>[README.md](../../../../sources/opensolon__solon-ai/README.md)<br>[solon-ai-ui/README.md](../../../../sources/opensolon__solon-ai/solon-ai-ui/README.md)<br>[solon-ai-ui/solon-ai-ui-aisdk/README.md](../../../../sources/opensolon__solon-ai/solon-ai-ui/solon-ai-ui-aisdk/README.md)<br>[solon-ai-ui/solon-ai-ui-agui/README.md](../../../../sources/opensolon__solon-ai/solon-ai-ui/solon-ai-ui-agui/README.md)<br>[solon-ai-talents/solon-ai-talent-web/README.md](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-web/README.md)<br>[solon-ai-rag-searchs/solon-ai-search-tavily/README.md](../../../../sources/opensolon__solon-ai/solon-ai-rag-searchs/solon-ai-search-tavily/README.md)<br>[solon-ai-rag-searchs/solon-ai-search-baidu/README.md](../../../../sources/opensolon__solon-ai/solon-ai-rag-searchs/solon-ai-search-baidu/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 570 | [TEST.md](../../../../sources/opensolon__solon-ai/TEST.md)<br>[solon-ai-talents/solon-ai-talents/src/test/resources/app.yml](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/resources/app.yml)<br>[solon-ai-talents/solon-ai-talents/src/test/resources/cli.yml](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/resources/cli.yml)<br>[solon-ai-talents/solon-ai-talents/src/test/resources/db.sql](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/resources/db.sql)<br>[solon-ai-talents/solon-ai-talents/src/test/resources/openapi3-case1.json](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/resources/openapi3-case1.json)<br>[solon-ai-talents/solon-ai-talents/src/test/java/labs/ai/talents/ClassAsOne.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/java/labs/ai/talents/ClassAsOne.java) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 6 | [solon-ai-rag-repositorys/solon-ai-repo-weaviate/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-weaviate/docker-compose.yml)<br>[solon-ai-rag-repositorys/solon-ai-repo-redis/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-redis/docker-compose.yml)<br>[solon-ai-rag-repositorys/solon-ai-repo-qdrant/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-qdrant/docker-compose.yml)<br>[solon-ai-rag-repositorys/solon-ai-repo-pgvector/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-pgvector/docker-compose.yml)<br>[solon-ai-rag-repositorys/solon-ai-repo-milvus/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-milvus/docker-compose.yml)<br>[solon-ai-rag-repositorys/solon-ai-repo-chroma/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-chroma/docker-compose.yml) |
| 보안/정책 | 61 | [solon-ai-talents/solon-ai-talent-cli/src/test/java/features/ai/talents/cli/sandbox/SandboxTest.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-cli/src/test/java/features/ai/talents/cli/sandbox/SandboxTest.java)<br>[solon-ai-sandbox/pom.xml](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/pom.xml)<br>[solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eLogicTest.java](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eLogicTest.java)<br>[solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eMacOSTest.java](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eMacOSTest.java)<br>[solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eManagerTest.java](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eManagerTest.java)<br>[solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/util/GlobUtilsTest.java](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/util/GlobUtilsTest.java) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요; path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `solon-ai-mcp/NOTICE`, `solon-ai-mcp/pom.xml`, `solon-ai-mcp/reconnect.md`.
2. agent/tool runtime 매핑: `solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/Context.java`, `solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/tool/FunctionCall.java`, `solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/tool/Tool.java`.
3. retrieval/memory/indexing 확인: `solon-ai-talents/solon-ai-talents/src/test/java/features/ai/talents/memory/MemTalentTests.java`, `solon-ai-talents/solon-ai-talent-memory/pom.xml`, `solon-ai-talents/solon-ai-talent-memory/src/test/java/demo/ai/memory/MemoryManger.java`.
4. test/eval 파일로 동작 검증: `TEST.md`, `solon-ai-talents/solon-ai-talents/src/test/resources/app.yml`, `solon-ai-talents/solon-ai-talents/src/test/resources/cli.yml`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Java AI application development framework supports LLM tool,skill; RAG; MCP; Agent ReAct,Team Agent . Compatible with ja. 핵심 구조 신호는 Java, pom.xml, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
