# langchain4j/langchain4j

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/langchain4j/langchain4j |
| local path | sources/langchain4j__langchain4j |
| HEAD | 21d9ee3 |
| stars/forks | 0 / 0 |
| language | Java |
| license |  |
| pushedAt | 2026-06-17T16:54:21Z |
| trendScore / priorityScore | 67 / 179 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 490 | langchain4j-oracle/README.md, README.md, docs/docs/integrations/image-models/gemini.md |
| Frontend / developer experience | 73 | langchain4j-gpu-llama3/README.md, docs/package.json, langchain4j-agentic-a2a/pom.xml |
| LLM wiki / memory / graph | 25 | langchain4j-gpu-llama3/README.md, README.md, langchain4j-core/pom.xml |
| Local LLM / on-device inference | 24 | langchain4j-gpu-llama3/README.md, langchain4j-agentic-a2a/pom.xml, langchain4j-agentic-mcp/pom.xml |
| MCP / tool protocol | 17 | langchain4j-agentic-mcp/pom.xml, langchain4j-mcp-docker/pom.xml, langchain4j-mcp/pom.xml |
| AI agent / tool use | 7 | README.md, docs/docs/tutorials/testing-and-evaluation.md, langchain4j-parent/pom.xml |
| Infra / observability | 7 | langchain4j-bom/pom.xml, langchain4j-core/pom.xml, langchain4j-micrometer-metrics/pom.xml |
| Security / compliance | 4 | langchain4j-parent/pom.xml, docs/docs/integrations/embedding-models/amazon-bedrock.md |
| Spec / doc-driven workflow | 2 | langchain4j-oracle/README.md, langchain4j-milvus/README.MD |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, documentParsing, example-rich, frontend-dx, graphMemory, infra-observability, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 3446 |
| manifests | 40 |
| docs | 252 |
| tests | 1274 |
| ci/ops | 13 |
| spec artifacts | 5 |
| agent instruction files | 5 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LangChain4j: idiomatic, open-source Java library for building LLM-powered applications on the JVM |
| headings | LangChain4j: idiomatic, open-source Java library for building LLM-powered applications on the JVM / Introduction / Documentation / Getting Started / Code Examples / Useful Materials / Get Help / Request Features / Contribute |
| excerpt | LangChain4j idiomatic, open source Java library for building LLM powered applications on the JVM ! Build Status https //img.shields.io/github/actions/workflow/status/langchain4j/langchain4j/main.yaml?branch=main&style=for the badge&label=CI%20BUILD&logo=github https //github.com/langchain4j/langchain4j/actions/workflows/main.yaml ! Nightly Build https //img.shields.io/github/actions/workflow/status/langchain4j/langchain4j/nightly jdk17.yaml?branch=main&style=for the badge&label=NIGHTLY%20BUILD&logo=github https //github.com/langchain4j/langchain4j/actions/workflows/nightly jdk17.yaml ! CODACY https //img.shields.io/badge/Codacy Dashboard blue?style=for the badge&logo=codacy https //app.codac |


## 주요 파일

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


## 상위 디렉터리

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


## 확장자 분포

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


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
