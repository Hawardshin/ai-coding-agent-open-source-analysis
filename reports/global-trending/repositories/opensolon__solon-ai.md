# opensolon/solon-ai

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/opensolon/solon-ai |
| local path | sources/opensolon__solon-ai |
| HEAD | 68c57d7 |
| stars/forks | 404 / 60 |
| language | Java |
| license |  |
| pushedAt | 2026-06-16T11:53:40Z |
| trendScore / priorityScore | 158 / 440 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 283 | README.md, solon-ai-flow/README.md, mcp-core/pom.xml |
| AI agent / orchestration | 224 | README.md, solon-ai-ui/README.md, solon-ai-ui/solon-ai-ui-agui/README.md |
| Developer tools / DX | 169 | solon-ai-ui/README.md, solon-ai-ui/solon-ai-ui-aisdk/README.md, solon-ai-rag-repositorys/solon-ai-repo-dashvector-official/pom.xml |
| RAG / retrieval / knowledge | 95 | solon-ai-rag-repositorys/solon-ai-repo-mariadb/README.md, solon-ai-rag-repositorys/solon-ai-repo-mysql/README.md, solon-ai-rag-repositorys/solon-ai-repo-pgvector/README.md |
| Database / data infrastructure | 51 | solon-ai-rag-repositorys/solon-ai-repo-mysql/README.md, solon-ai-rag-repositorys/solon-ai-repo-pgvector/README.md, README.md |
| Local LLM / inference | 18 | README.md, solon-ai-flow/README.md, solon-ai-llm-dialects/solon-ai-dialect-ollama/pom.xml |
| Cloud native / infrastructure | 17 | solon-ai-rag-repositorys/solon-ai-repo-pgvector/README.md, solon-ai-flow/README.md, solon-ai-ui/solon-ai-ui-aisdk/README.md |
| Frontend / app framework | 15 | README.md, solon-ai-ui/README.md, solon-ai-ui/solon-ai-ui-aisdk/README.md |
| Security / supply chain | 9 | solon-ai-mcp/pom.xml, acp-sdk/src/test/java/com/agentclientprotocol/sdk/spec/McpServerConfigurationTest.java, solon-ai-core/src/main/java/org/noear/solon/ai/chat/prompt/Prompt.java |
| Observability / evaluation | 6 | README.md, solon-ai-flow/README.md |
| Coding agent / software automation | 5 | README.md, solon-ai-ui/solon-ai-ui-aisdk/README.md, acp-sdk/src/main/java/com/agentclientprotocol/sdk/spec/AcpClientTransport.java |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Java/Kotlin |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1510 |
| manifests | 40 |
| docs | 50 |
| tests | 565 |
| ci/ops | 6 |
| spec artifacts | 50 |
| agent instruction files | 7 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | FlowEngine flowEngine = FlowEngine.newInstance(); | 简介 / What types of applications can be developed? / Example Agent synthesis project (can be used directly for production or customization) / Core Module Experience / FlowEngine flowEngine = FlowEngine.newInstance(); / ... / flowEngine.eval("demo1"); / Solon Project code repository / FAQ / What is Solon AI? | <h1 align="center" style="text align center;" <img src="solon icon.png" width="128" / <br / Solon AI </h1 <p align="center" <strong Java LLM tool, skill & RAG & MCP & Agent ReAct, Team Application development framework</strong <br/ <strong Restraint, efficiency and openness</strong <br/ <strong It is the same type of development framework as LangChain, LangGraph and LlamaIndex</strong </p <p align="center" <a href="https //solon.noear.org/article/learn solon ai" https //solon.noear.org/article/learn solon ai</a </p <p align="center" <a href="https //deepwiki.com/opensolon/solon ai" <img src="https //deepwiki.com/badge.svg" alt="Ask DeepWiki" </a <a target=" blank" href="https //central.sonat |


## Key Files

### Manifests

- solon-ai-rag-repositorys/solon-ai-repo-elasticsearch/README.md
- solon-ai-rag-repositorys/solon-ai-repo-mariadb/README.md
- solon-ai-rag-repositorys/solon-ai-repo-mysql/README.md
- solon-ai-rag-repositorys/solon-ai-repo-pgvector/README.md
- solon-ai-rag-searchs/solon-ai-search-baidu/README.md
- solon-ai-rag-searchs/solon-ai-search-tavily/README.md
- __release/README.md
- README.md
- solon-ai-anp/README.md
- solon-ai-flow/README.md
- solon-ai-ui/README.md
- solon-ai-talents/solon-ai-talent-web/README.md
- solon-ai-ui/solon-ai-ui-agui/README.md
- solon-ai-ui/solon-ai-ui-aisdk/README.md
- mcp-core/pom.xml
- mcp-json-jackson2/pom.xml
- solon-ai-agent/pom.xml
- solon-ai-mcp/pom.xml
- solon-ai-llm-dialects/solon-ai-dialect-anthropic/pom.xml
- solon-ai-llm-dialects/solon-ai-dialect-dashscope/pom.xml


### Spec / Docs / Prompt Artifacts

- acp-sdk/src/main/java/com/agentclientprotocol/sdk/spec/AcpAgentSession.java
- acp-sdk/src/main/java/com/agentclientprotocol/sdk/spec/AcpAgentTransport.java
- acp-sdk/src/main/java/com/agentclientprotocol/sdk/spec/AcpClientSession.java
- acp-sdk/src/main/java/com/agentclientprotocol/sdk/spec/AcpClientTransport.java
- acp-sdk/src/main/java/com/agentclientprotocol/sdk/spec/AcpSchema.java
- acp-sdk/src/main/java/com/agentclientprotocol/sdk/spec/AcpSession.java
- acp-sdk/src/main/java/com/agentclientprotocol/sdk/spec/AcpTransport.java
- acp-sdk/src/test/java/com/agentclientprotocol/sdk/spec/AcpAgentSessionTest.java
- acp-sdk/src/test/java/com/agentclientprotocol/sdk/spec/AcpClientSessionLogTest.java
- acp-sdk/src/test/java/com/agentclientprotocol/sdk/spec/AcpClientSessionTest.java
- acp-sdk/src/test/java/com/agentclientprotocol/sdk/spec/AcpJsonRpcMessageTest.java
- acp-sdk/src/test/java/com/agentclientprotocol/sdk/spec/AcpSchemaSerializationTest.java
- acp-sdk/src/test/java/com/agentclientprotocol/sdk/spec/McpServerConfigurationTest.java
- acp-sdk/src/test/java/com/agentclientprotocol/sdk/spec/SessionManagementTest.java
- acp-sdk/src/test/java/com/agentclientprotocol/sdk/spec/SessionUpdateDeserializationTest.java
- mcp-core/src/main/java/io/modelcontextprotocol/spec/ClosedMcpTransportSession.java
- mcp-core/src/main/java/io/modelcontextprotocol/spec/DefaultMcpStreamableServerSessionFactory.java
- mcp-core/src/main/java/io/modelcontextprotocol/spec/DefaultMcpTransportSession.java
- mcp-core/src/main/java/io/modelcontextprotocol/spec/DefaultMcpTransportStream.java
- mcp-core/src/main/java/io/modelcontextprotocol/spec/HttpHeaders.java


### Agent Instruction Files

- solon-ai-core/src/main/java/org/noear/solon/ai/chat/prompt/Prompt.java
- solon-ai-core/src/main/java/org/noear/solon/ai/chat/prompt/PromptImpl.java
- solon-ai-mcp/src/main/java/org/noear/solon/ai/chat/prompt/FunctionPrompt.java
- solon-ai-mcp/src/main/java/org/noear/solon/ai/chat/prompt/FunctionPromptDesc.java
- solon-ai-mcp/src/main/java/org/noear/solon/ai/chat/prompt/MethodFunctionPrompt.java
- solon-ai-mcp/src/main/java/org/noear/solon/ai/chat/prompt/MethodPromptProvider.java
- solon-ai-mcp/src/main/java/org/noear/solon/ai/chat/prompt/PromptProvider.java


## Top Directories

| dir | count |
| --- | --- |
| solon-ai-agent | 202 |
| solon-ai-core | 165 |
| solon-ai-talents | 162 |
| solon-ai-mcp | 158 |
| acp-sdk | 143 |
| solon-ai-rag-repositorys | 124 |
| solon-ai-ui | 77 |
| mcp-core | 75 |
| solon-ai | 69 |
| solon-ai-flow | 69 |
| solon-ai-sandbox | 58 |
| solon-ai-llm-dialects | 43 |
| solon-ai-harness | 41 |
| solon-ai-rag-loaders | 38 |


## Extension Distribution

| ext | count |
| --- | --- |
| .java | 1266 |
| .xml | 65 |
| .md | 50 |
| .json | 46 |
| .yml | 40 |
| [no-ext] | 27 |
| .properties | 3 |
| .xlsx | 2 |
| .class | 1 |
| .db | 1 |
| .doc | 1 |
| .docx | 1 |
| .jsonschemavalidatorsupplier | 1 |
| .mcpjsonmappersupplier | 1 |
| .ppt | 1 |
| .pptx | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
