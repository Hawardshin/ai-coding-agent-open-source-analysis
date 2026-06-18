# langchain4j/langchain4j

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/langchain4j/langchain4j |
| local path | sources/langchain4j__langchain4j |
| HEAD | 21d9ee3 |
| stars/forks | 12359 / 2312 |
| language | Java |
| license |  |
| pushedAt | 2026-06-17T16:54:21Z |
| trendScore / priorityScore | 227 / 510 |


## Interpretation

- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 289 | langchain4j-oracle/README.md, README.md, langchain4j-easy-rag/pom.xml |
| Developer tools / DX | 69 | langchain4j-gpu-llama3/README.md, langchain4j-agentic-a2a/pom.xml, langchain4j-google-genai/pom.xml |
| Database / data infrastructure | 39 | langchain4j-oracle/README.md, langchain4j-pgvector/pom.xml, langchain4j-milvus/README.MD |
| Local LLM / inference | 24 | langchain4j-gpu-llama3/README.md, langchain4j-agentic-a2a/pom.xml, langchain4j-agentic-mcp/pom.xml |
| Observability / evaluation | 19 | docs/docs/tutorials/testing-and-evaluation.md, langchain4j-agentic-patterns/src/test/java/dev/langchain4j/agentic/patterns/debate/example/DebateAgents.java, langchain4j-agentic-patterns/src/test/java/dev/langchain4j/agentic/patterns/debate/example/DebateExampleIT.java |
| MCP / agent interoperability | 17 | langchain4j-agentic-mcp/pom.xml, langchain4j-mcp-docker/pom.xml, langchain4j-mcp/pom.xml |
| Cloud native / infrastructure | 15 | langchain4j-oracle/README.md, langchain4j-mcp-docker/pom.xml, langchain4j-milvus/README.MD |
| AI agent / orchestration | 14 | README.md, docs/docs/tutorials/testing-and-evaluation.md, langchain4j-agentic-patterns/src/test/java/dev/langchain4j/agentic/patterns/debate/example/DebateAgents.java |
| Data / ML platform | 10 | README.md, docs/docs/tutorials/testing-and-evaluation.md, docs/docs/integrations/embedding-models/1-in-process.md |
| Frontend / app framework | 4 | docs/package.json |
| Security / supply chain | 4 | langchain4j-parent/pom.xml, docs/docs/integrations/embedding-models/amazon-bedrock.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3446 |
| manifests | 40 |
| docs | 252 |
| tests | 1274 |
| ci/ops | 13 |
| spec artifacts | 5 |
| agent instruction files | 5 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | LangChain4j: idiomatic, open-source Java library for building LLM-powered applications on the JVM | LangChain4j: idiomatic, open-source Java library for building LLM-powered applications on the JVM / Introduction / Documentation / Getting Started / Code Examples / Useful Materials / Get Help / Request Features / Contribute | LangChain4j idiomatic, open source Java library for building LLM powered applications on the JVM ! Build Status https //img.shields.io/github/actions/workflow/status/langchain4j/langchain4j/main.yaml?branch=main&style=for the badge&label=CI%20BUILD&logo=github https //github.com/langchain4j/langchain4j/actions/workflows/main.yaml ! Nightly Build https //img.shields.io/github/actions/workflow/status/langchain4j/langchain4j/nightly jdk17.yaml?branch=main&style=for the badge&label=NIGHTLY%20BUILD&logo=github https //github.com/langchain4j/langchain4j/actions/workflows/nightly jdk17.yaml ! CODACY https //img.shields.io/badge/Codacy Dashboard blue?style=for the badge&logo=codacy https //app.codac |


## Key Files

### Manifests

- docs/README.md
- integration-tests/README.md
- integration-tests/integration-tests-class-instance-loader/integration-tests-class-instance-loader-quarkus/README.md
- integration-tests/integration-tests-class-instance-loader/integration-tests-class-instance-loader-spring/README.md
- integration-tests/integration-tests-class-instance-loader/README.md
- integration-tests/integration-tests-class-metadata-provider/integration-tests-class-metadata-provider-spring/README.md
- integration-tests/integration-tests-class-metadata-provider/README.md
- integration-tests/integration-tests-guardrails/README.md
- langchain4j-gpu-llama3/README.md
- langchain4j-jlama/README.md
- langchain4j-oracle/README.md
- langchain4j/src/test/externalLib/README.md
- README.md
- docs/Makefile
- docs/package.json
- langchain4j-agentic-a2a/pom.xml
- langchain4j-agentic-mcp/pom.xml
- langchain4j-agentic-patterns/pom.xml
- langchain4j-agentic/pom.xml
- langchain4j-easy-rag/pom.xml


### Spec / Docs / Prompt Artifacts

- docs/docs/tutorials/agents.md
- docs/docs/integrations/image-models/gemini.md
- langchain4j-core/src/test/java/dev/langchain4j/spi/prompt/PromptTemplateFactoryTest.java
- langchain4j-core/src/main/java/dev/langchain4j/spi/prompt/PromptTemplateFactory.java
- langchain4j-core/src/main/java/dev/langchain4j/spi/prompt/structured/StructuredPromptFactory.java


### Agent Instruction Files

- docs/docs/tutorials/agents.md
- docs/docs/integrations/image-models/gemini.md
- langchain4j-core/src/test/java/dev/langchain4j/spi/prompt/PromptTemplateFactoryTest.java
- langchain4j-core/src/main/java/dev/langchain4j/spi/prompt/PromptTemplateFactory.java
- langchain4j-core/src/main/java/dev/langchain4j/spi/prompt/structured/StructuredPromptFactory.java


## Top Directories

| dir | count |
| --- | --- |
| langchain4j-core | 519 |
| langchain4j | 269 |
| langchain4j-mcp | 223 |
| docs | 215 |
| langchain4j-agentic | 191 |
| langchain4j-open-ai | 160 |
| langchain4j-google-ai-gemini | 97 |
| langchain4j-mistral-ai | 92 |
| langchain4j-ollama | 91 |
| langchain4j-anthropic | 84 |
| embeddings | 82 |
| integration-tests | 70 |
| langchain4j-bedrock | 63 |
| document-parsers | 58 |


## Extension Distribution

| ext | count |
| --- | --- |
| .java | 2834 |
| .md | 210 |
| .xml | 130 |
| .json | 53 |
| .txt | 27 |
| .properties | 24 |
| [no-ext] | 21 |
| .kt | 19 |
| .yaml | 19 |
| .embeddingmodelfactory | 10 |
| .sql | 8 |
| .svg | 7 |
| .banana | 6 |
| .docx | 6 |
| .sh | 6 |
| .js | 5 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
