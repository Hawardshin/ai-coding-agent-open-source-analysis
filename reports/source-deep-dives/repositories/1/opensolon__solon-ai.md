# opensolon/solon-ai Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Java AI application development framework (supports LLM-tool,skill; RAG; MCP; Agent-ReAct,Team-Agent). Compatible with java8 ~ java25. It can also be embedded in SpringBoot, jFinal, Vert.x, Quarkus, and other frameworks.

## 요약

- 조사 단위: `sources/opensolon__solon-ai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,477 files, 1,149 directories, depth score 110, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=solon-ai-mcp/NOTICE, solon-ai-mcp/pom.xml, solon-ai-mcp/reconnect.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | opensolon/solon-ai |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Java |
| Stars | 404 |
| Forks | 60 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/opensolon__solon-ai](../../../../sources/opensolon__solon-ai) |
| Existing report | [reports/global-trending/repositories/opensolon__solon-ai.md](../../../global-trending/repositories/opensolon__solon-ai.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1477 / 1149 |
| Max observed depth | 13 |
| Top directories | __release, .gitee, .github, acp-sdk, mcp-core, mcp-json-jackson2, solon-ai, solon-ai-acp, solon-ai-agent, solon-ai-anp, solon-ai-core, solon-ai-flow, solon-ai-harness, solon-ai-llm-dialects, solon-ai-mcp, solon-ai-parent, solon-ai-rag-loaders, solon-ai-rag-repositorys, solon-ai-rag-searchs, solon-ai-sandbox |
| Top extensions | .java: 1229, .xml: 65, .md: 50, .json: 46, .yml: 40, (none): 27, .properties: 3, .pdf: 2, .png: 2, .xlsx: 2, .class: 1, .db: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 273 | [solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/Context.java](../../../../sources/opensolon__solon-ai/solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/Context.java)<br>[solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/tool/FunctionCall.java](../../../../sources/opensolon__solon-ai/solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/tool/FunctionCall.java)<br>[solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/tool/Tool.java](../../../../sources/opensolon__solon-ai/solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/tool/Tool.java)<br>[solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/tool/ToolCall.java](../../../../sources/opensolon__solon-ai/solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/tool/ToolCall.java)<br>[solon-ai-talents/solon-ai-talents/src/test/java/features/ai/talents/memory/MemTalentTests.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/java/features/ai/talents/memory/MemTalentTests.java)<br>[solon-ai-talents/solon-ai-talent-web/src/test/java/features/skill/web/WebfetchToolTimeoutTest.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-web/src/test/java/features/skill/web/WebfetchToolTimeoutTest.java)<br>[solon-ai-talents/solon-ai-talent-memory/src/test/java/demo/ai/memory/MemoryManger.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-memory/src/test/java/demo/ai/memory/MemoryManger.java)<br>[solon-ai-talents/solon-ai-talent-memory/src/test/java/demo/ai/memory/MemorySolutionImpl.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-memory/src/test/java/demo/ai/memory/MemorySolutionImpl.java) |
| mcp | 248 | [solon-ai-mcp/NOTICE](../../../../sources/opensolon__solon-ai/solon-ai-mcp/NOTICE)<br>[solon-ai-mcp/pom.xml](../../../../sources/opensolon__solon-ai/solon-ai-mcp/pom.xml)<br>[solon-ai-mcp/reconnect.md](../../../../sources/opensolon__solon-ai/solon-ai-mcp/reconnect.md)<br>[solon-ai-mcp/src/test/resources/app-client-serverparams.yml](../../../../sources/opensolon__solon-ai/solon-ai-mcp/src/test/resources/app-client-serverparams.yml)<br>[solon-ai-mcp/src/test/resources/app-client.yml](../../../../sources/opensolon__solon-ai/solon-ai-mcp/src/test/resources/app-client.yml)<br>[solon-ai-mcp/src/test/resources/app-server.yml](../../../../sources/opensolon__solon-ai/solon-ai-mcp/src/test/resources/app-server.yml)<br>[solon-ai-mcp/src/test/resources/app-server2.yml](../../../../sources/opensolon__solon-ai/solon-ai-mcp/src/test/resources/app-server2.yml)<br>[solon-ai-mcp/src/test/resources/app.yml](../../../../sources/opensolon__solon-ai/solon-ai-mcp/src/test/resources/app.yml) |
| retrieval | 251 | [solon-ai-talents/solon-ai-talents/src/test/java/features/ai/talents/memory/MemTalentTests.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/java/features/ai/talents/memory/MemTalentTests.java)<br>[solon-ai-talents/solon-ai-talent-memory/pom.xml](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-memory/pom.xml)<br>[solon-ai-talents/solon-ai-talent-memory/src/test/java/demo/ai/memory/MemoryManger.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-memory/src/test/java/demo/ai/memory/MemoryManger.java)<br>[solon-ai-talents/solon-ai-talent-memory/src/test/java/demo/ai/memory/MemorySolutionImpl.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-memory/src/test/java/demo/ai/memory/MemorySolutionImpl.java)<br>[solon-ai-talents/solon-ai-talent-memory/src/test/java/demo/ai/memory/MemorySolutionMdImpl.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-memory/src/test/java/demo/ai/memory/MemorySolutionMdImpl.java)<br>[solon-ai-talents/solon-ai-talent-memory/src/main/java/org/noear/solon/ai/talents/memory/MemorySearcher.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-memory/src/main/java/org/noear/solon/ai/talents/memory/MemorySearcher.java)<br>[solon-ai-talents/solon-ai-talent-memory/src/main/java/org/noear/solon/ai/talents/memory/MemorySearchResult.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-memory/src/main/java/org/noear/solon/ai/talents/memory/MemorySearchResult.java)<br>[solon-ai-talents/solon-ai-talent-memory/src/main/java/org/noear/solon/ai/talents/memory/MemorySolution.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-memory/src/main/java/org/noear/solon/ai/talents/memory/MemorySolution.java) |
| spec | 43 | [mcp-core/src/main/java/io/modelcontextprotocol/spec/ClosedMcpTransportSession.java](../../../../sources/opensolon__solon-ai/mcp-core/src/main/java/io/modelcontextprotocol/spec/ClosedMcpTransportSession.java)<br>[mcp-core/src/main/java/io/modelcontextprotocol/spec/DefaultMcpStreamableServerSessionFactory.java](../../../../sources/opensolon__solon-ai/mcp-core/src/main/java/io/modelcontextprotocol/spec/DefaultMcpStreamableServerSessionFactory.java)<br>[mcp-core/src/main/java/io/modelcontextprotocol/spec/DefaultMcpTransportSession.java](../../../../sources/opensolon__solon-ai/mcp-core/src/main/java/io/modelcontextprotocol/spec/DefaultMcpTransportSession.java)<br>[mcp-core/src/main/java/io/modelcontextprotocol/spec/DefaultMcpTransportStream.java](../../../../sources/opensolon__solon-ai/mcp-core/src/main/java/io/modelcontextprotocol/spec/DefaultMcpTransportStream.java)<br>[mcp-core/src/main/java/io/modelcontextprotocol/spec/HttpHeaders.java](../../../../sources/opensolon__solon-ai/mcp-core/src/main/java/io/modelcontextprotocol/spec/HttpHeaders.java)<br>[mcp-core/src/main/java/io/modelcontextprotocol/spec/JsonSchemaValidator.java](../../../../sources/opensolon__solon-ai/mcp-core/src/main/java/io/modelcontextprotocol/spec/JsonSchemaValidator.java)<br>[mcp-core/src/main/java/io/modelcontextprotocol/spec/McpClientSession.java](../../../../sources/opensolon__solon-ai/mcp-core/src/main/java/io/modelcontextprotocol/spec/McpClientSession.java)<br>[mcp-core/src/main/java/io/modelcontextprotocol/spec/McpClientTransport.java](../../../../sources/opensolon__solon-ai/mcp-core/src/main/java/io/modelcontextprotocol/spec/McpClientTransport.java) |
| eval | 570 | [TEST.md](../../../../sources/opensolon__solon-ai/TEST.md)<br>[solon-ai-talents/solon-ai-talents/src/test/resources/app.yml](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/resources/app.yml)<br>[solon-ai-talents/solon-ai-talents/src/test/resources/cli.yml](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/resources/cli.yml)<br>[solon-ai-talents/solon-ai-talents/src/test/resources/db.sql](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/resources/db.sql)<br>[solon-ai-talents/solon-ai-talents/src/test/resources/openapi3-case1.json](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/resources/openapi3-case1.json)<br>[solon-ai-talents/solon-ai-talents/src/test/java/labs/ai/talents/ClassAsOne.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/java/labs/ai/talents/ClassAsOne.java)<br>[solon-ai-talents/solon-ai-talents/src/test/java/features/ai/talents/web/WebSearchAndCrawlerTests.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/java/features/ai/talents/web/WebSearchAndCrawlerTests.java)<br>[solon-ai-talents/solon-ai-talents/src/test/java/features/ai/talents/toolgateway/ToolGatewayTalentTest.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/java/features/ai/talents/toolgateway/ToolGatewayTalentTest.java) |
| security | 61 | [solon-ai-talents/solon-ai-talent-cli/src/test/java/features/ai/talents/cli/sandbox/SandboxTest.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-cli/src/test/java/features/ai/talents/cli/sandbox/SandboxTest.java)<br>[solon-ai-sandbox/pom.xml](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/pom.xml)<br>[solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eLogicTest.java](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eLogicTest.java)<br>[solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eMacOSTest.java](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eMacOSTest.java)<br>[solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eManagerTest.java](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eManagerTest.java)<br>[solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/util/GlobUtilsTest.java](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/util/GlobUtilsTest.java)<br>[solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/util/SandboxPathUtilsTest.java](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/util/SandboxPathUtilsTest.java)<br>[solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/util/ShellQuoteTest.java](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/util/ShellQuoteTest.java) |
| ci | 0 | not obvious |
| container | 6 | [solon-ai-rag-repositorys/solon-ai-repo-weaviate/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-weaviate/docker-compose.yml)<br>[solon-ai-rag-repositorys/solon-ai-repo-redis/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-redis/docker-compose.yml)<br>[solon-ai-rag-repositorys/solon-ai-repo-qdrant/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-qdrant/docker-compose.yml)<br>[solon-ai-rag-repositorys/solon-ai-repo-pgvector/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-pgvector/docker-compose.yml)<br>[solon-ai-rag-repositorys/solon-ai-repo-milvus/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-milvus/docker-compose.yml)<br>[solon-ai-rag-repositorys/solon-ai-repo-chroma/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-chroma/docker-compose.yml) |
| instruction | 0 | not obvious |
| docs | 15 | [README_CN.md](../../../../sources/opensolon__solon-ai/README_CN.md)<br>[README.md](../../../../sources/opensolon__solon-ai/README.md)<br>[solon-ai-ui/README.md](../../../../sources/opensolon__solon-ai/solon-ai-ui/README.md)<br>[solon-ai-ui/solon-ai-ui-aisdk/README.md](../../../../sources/opensolon__solon-ai/solon-ai-ui/solon-ai-ui-aisdk/README.md)<br>[solon-ai-ui/solon-ai-ui-agui/README.md](../../../../sources/opensolon__solon-ai/solon-ai-ui/solon-ai-ui-agui/README.md)<br>[solon-ai-talents/solon-ai-talent-web/README.md](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-web/README.md)<br>[solon-ai-rag-searchs/solon-ai-search-tavily/README.md](../../../../sources/opensolon__solon-ai/solon-ai-rag-searchs/solon-ai-search-tavily/README.md)<br>[solon-ai-rag-searchs/solon-ai-search-baidu/README.md](../../../../sources/opensolon__solon-ai/solon-ai-rag-searchs/solon-ai-search-baidu/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 570 | [TEST.md](../../../../sources/opensolon__solon-ai/TEST.md)<br>[solon-ai-talents/solon-ai-talents/src/test/resources/app.yml](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/resources/app.yml)<br>[solon-ai-talents/solon-ai-talents/src/test/resources/cli.yml](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/resources/cli.yml)<br>[solon-ai-talents/solon-ai-talents/src/test/resources/db.sql](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/resources/db.sql)<br>[solon-ai-talents/solon-ai-talents/src/test/resources/openapi3-case1.json](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/resources/openapi3-case1.json)<br>[solon-ai-talents/solon-ai-talents/src/test/java/labs/ai/talents/ClassAsOne.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talents/src/test/java/labs/ai/talents/ClassAsOne.java) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 6 | [solon-ai-rag-repositorys/solon-ai-repo-weaviate/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-weaviate/docker-compose.yml)<br>[solon-ai-rag-repositorys/solon-ai-repo-redis/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-redis/docker-compose.yml)<br>[solon-ai-rag-repositorys/solon-ai-repo-qdrant/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-qdrant/docker-compose.yml)<br>[solon-ai-rag-repositorys/solon-ai-repo-pgvector/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-pgvector/docker-compose.yml)<br>[solon-ai-rag-repositorys/solon-ai-repo-milvus/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-milvus/docker-compose.yml)<br>[solon-ai-rag-repositorys/solon-ai-repo-chroma/docker-compose.yml](../../../../sources/opensolon__solon-ai/solon-ai-rag-repositorys/solon-ai-repo-chroma/docker-compose.yml) |
| Security / policy | 61 | [solon-ai-talents/solon-ai-talent-cli/src/test/java/features/ai/talents/cli/sandbox/SandboxTest.java](../../../../sources/opensolon__solon-ai/solon-ai-talents/solon-ai-talent-cli/src/test/java/features/ai/talents/cli/sandbox/SandboxTest.java)<br>[solon-ai-sandbox/pom.xml](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/pom.xml)<br>[solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eLogicTest.java](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eLogicTest.java)<br>[solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eMacOSTest.java](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eMacOSTest.java)<br>[solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eManagerTest.java](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/SandboxE2eManagerTest.java)<br>[solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/util/GlobUtilsTest.java](../../../../sources/opensolon__solon-ai/solon-ai-sandbox/src/test/java/org/noear/solon/ai/sandbox/util/GlobUtilsTest.java) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review; primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `solon-ai-mcp/NOTICE`, `solon-ai-mcp/pom.xml`, `solon-ai-mcp/reconnect.md`.
2. Map agent/tool runtime through: `solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/Context.java`, `solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/tool/FunctionCall.java`, `solon-ai-ui/solon-ai-ui-agui/src/main/java/org/noear/solon/ai/ui/agui/tool/Tool.java`.
3. Inspect retrieval/memory/indexing through: `solon-ai-talents/solon-ai-talents/src/test/java/features/ai/talents/memory/MemTalentTests.java`, `solon-ai-talents/solon-ai-talent-memory/pom.xml`, `solon-ai-talents/solon-ai-talent-memory/src/test/java/demo/ai/memory/MemoryManger.java`.
4. Verify behavior through test/eval files: `TEST.md`, `solon-ai-talents/solon-ai-talents/src/test/resources/app.yml`, `solon-ai-talents/solon-ai-talents/src/test/resources/cli.yml`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Java AI application development framework supports LLM tool,skill; RAG; MCP; Agent ReAct,Team Agent . Compatible with ja. 핵심 구조 신호는 Java, pom.xml, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
