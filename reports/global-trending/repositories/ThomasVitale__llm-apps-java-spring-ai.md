# ThomasVitale/llm-apps-java-spring-ai

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/ThomasVitale/llm-apps-java-spring-ai |
| local path | sources/ThomasVitale__llm-apps-java-spring-ai |
| HEAD | a38e592 |
| stars/forks | 753 / 178 |
| language | Java |
| license |  |
| pushedAt | 2026-06-17T22:32:47Z |
| trendScore / priorityScore | 139 / 397 |


## Interpretation

- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Local LLM / inference | 500 | patterns/prompts/prompts-basics-ollama/README.md, patterns/prompts/prompts-messages-ollama/README.md, patterns/prompts/prompts-templates-ollama/README.md |
| RAG / retrieval / knowledge | 136 | mcp/mcp-clients/mcp-brave/README.md, models/embedding/embedding-mistral-ai/README.md, models/embedding/embedding-ollama/README.md |
| Observability / evaluation | 101 | observability/vector-stores/observability-vector-stores-pgvector/README.md, rag/rag-branching/README.md, rag/rag-conditional/README.md |
| Developer tools / DX | 69 | patterns/prompts/prompts-basics-ollama/README.md, patterns/prompts/prompts-basics-openai/README.md, patterns/prompts/prompts-messages-ollama/README.md |
| Cloud native / infrastructure | 34 | patterns/prompts/prompts-basics-ollama/README.md, patterns/prompts/prompts-messages-ollama/README.md, patterns/prompts/prompts-templates-ollama/README.md |
| Database / data infrastructure | 32 | observability/vector-stores/observability-vector-stores-pgvector/README.md, patterns/memory/memory-jdbc/README.md, rag/rag-branching/README.md |
| MCP / agent interoperability | 20 | mcp/mcp-clients/mcp-brave/README.md, README.md, mcp/mcp-clients/mcp-brave/build.gradle |
| Security / supply chain | 11 | patterns/memory/memory-spring-security/README.md, README.md, patterns/memory/memory-spring-security/build.gradle |
| AI agent / orchestration | 1 | README.md |
| Data / ML platform | 1 | rag/rag-sequential/rag-naive/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, database, databaseRuntime, devtools, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, vectorSearch |
| stacks | Java/Kotlin |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 439 |
| manifests | 40 |
| docs | 70 |
| tests | 53 |
| ci/ops | 1 |
| spec artifacts | 48 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | LLM and AI-Infused Applications with Java & Spring AI | LLM and AI-Infused Applications with Java & Spring AI / 🛠️ Pre-Requisites / 💡 Use Cases / 🧠 Models / Chat Models / Embedding Models / Image Models / Audio Models / Moderation Models / 📐 Patterns | LLM and AI Infused Applications with Java & Spring AI Samples showing how to build Java applications powered by Generative AI and Large Language Models LLMs using Spring AI https //docs.spring.io/spring ai/reference/ . 🛠️ Pre Requisites Java 25 Podman/Docker 💡 Use Cases Chatbot https //github.com/ThomasVitale/llm apps java spring ai/tree/main/use cases/chatbot Chatbot using LLMs via Ollama. Question Answering https //github.com/ThomasVitale/llm apps java spring ai/tree/main/use cases/question answering Question answering with documents RAG using LLMs via Ollama and PGVector. Semantic Search https //github.com/ThomasVitale/llm apps java spring ai/tree/main/use cases/semantic search Semantic |


## Key Files

### Manifests

- patterns/prompts/prompts-basics-ollama/README.md
- patterns/prompts/prompts-basics-openai/README.md
- patterns/prompts/prompts-messages-ollama/README.md
- patterns/prompts/prompts-messages-openai/README.md
- patterns/prompts/prompts-templates-ollama/README.md
- patterns/prompts/prompts-templates-openai/README.md
- mcp/mcp-clients/mcp-brave/README.md
- models/embedding/embedding-mistral-ai/README.md
- models/embedding/embedding-ollama/README.md
- models/embedding/embedding-openai/README.md
- models/embedding/embedding-transformers/README.md
- observability/vector-stores/observability-vector-stores-pgvector/README.md
- patterns/memory/memory-basics/README.md
- patterns/memory/memory-jdbc/README.md
- patterns/memory/memory-spring-security/README.md
- patterns/memory/memory-vector-store/README.md
- rag/rag-branching/README.md
- rag/rag-conditional/README.md
- rag/rag-sequential/rag-advanced/README.md
- rag/rag-sequential/rag-naive/README.md


### Spec / Docs / Prompt Artifacts

- patterns/prompts/prompts-basics-ollama/README.md
- patterns/prompts/prompts-basics-openai/README.md
- patterns/prompts/prompts-messages-ollama/README.md
- patterns/prompts/prompts-messages-openai/README.md
- patterns/prompts/prompts-templates-ollama/README.md
- patterns/prompts/prompts-templates-openai/README.md
- patterns/prompts/prompts-basics-ollama/build.gradle
- patterns/prompts/prompts-basics-openai/build.gradle
- patterns/prompts/prompts-messages-ollama/build.gradle
- patterns/prompts/prompts-messages-openai/build.gradle
- patterns/prompts/prompts-templates-ollama/build.gradle
- patterns/prompts/prompts-templates-openai/build.gradle
- patterns/prompts/prompts-basics-ollama/src/test/java/com/thomasvitale/ai/spring/PromptsBasicsOllamaApplicationTests.java
- patterns/prompts/prompts-basics-openai/src/test/java/com/thomasvitale/ai/spring/PromptsBasicsOpenAiApplicationTests.java
- patterns/prompts/prompts-messages-ollama/src/test/java/com/thomasvitale/ai/spring/PromptsMessagesOllamaApplicationTests.java
- patterns/prompts/prompts-messages-openai/src/test/java/com/thomasvitale/ai/spring/PromptsMessagesOpenAiApplicationTests.java
- patterns/prompts/prompts-templates-ollama/src/test/java/com/thomasvitale/ai/spring/PromptsTemplatesOllamaApplicationTests.java
- patterns/prompts/prompts-templates-openai/src/test/java/com/thomasvitale/ai/spring/PromptsTemplatesOpenAiApplicationTests.java
- patterns/prompts/prompts-basics-ollama/src/main/java/com/thomasvitale/ai/spring/ChatController.java
- patterns/prompts/prompts-basics-ollama/src/main/java/com/thomasvitale/ai/spring/model/ChatModelController.java


### Agent Instruction Files

- patterns/prompts/prompts-basics-ollama/README.md
- patterns/prompts/prompts-basics-openai/README.md
- patterns/prompts/prompts-messages-ollama/README.md
- patterns/prompts/prompts-messages-openai/README.md
- patterns/prompts/prompts-templates-ollama/README.md
- patterns/prompts/prompts-templates-openai/README.md
- patterns/prompts/prompts-basics-ollama/build.gradle
- patterns/prompts/prompts-basics-openai/build.gradle
- patterns/prompts/prompts-messages-ollama/build.gradle
- patterns/prompts/prompts-messages-openai/build.gradle
- patterns/prompts/prompts-templates-ollama/build.gradle
- patterns/prompts/prompts-templates-openai/build.gradle
- patterns/prompts/prompts-basics-ollama/src/test/java/com/thomasvitale/ai/spring/PromptsBasicsOllamaApplicationTests.java
- patterns/prompts/prompts-basics-openai/src/test/java/com/thomasvitale/ai/spring/PromptsBasicsOpenAiApplicationTests.java
- patterns/prompts/prompts-messages-ollama/src/test/java/com/thomasvitale/ai/spring/PromptsMessagesOllamaApplicationTests.java


## Top Directories

| dir | count |
| --- | --- |
| patterns | 163 |
| models | 72 |
| data-ingestion | 61 |
| rag | 47 |
| use-cases | 38 |
| observability | 37 |
| mcp | 7 |
| .github | 2 |
| gradle | 2 |
| .gitignore | 1 |
| .sdkmanrc | 1 |
| buildSrc | 1 |
| devbox.json | 1 |
| gradle.properties | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .java | 238 |
| .md | 70 |
| .gradle | 54 |
| .yml | 54 |
| .json | 4 |
| .st | 4 |
| .txt | 4 |
| [no-ext] | 4 |
| .mp3 | 3 |
| .properties | 2 |
| .bat | 1 |
| .jar | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
