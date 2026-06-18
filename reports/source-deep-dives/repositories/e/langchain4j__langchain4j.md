# langchain4j/langchain4j 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

LangChain4j is an idiomatic, open-source Java library for building LLM-powered applications on the JVM. It offers a unified API over popular LLM providers and vector stores, and makes implementing tool calling (including MCP support), agents and RAG easy. It integrates seamlessly with enterprise Java frameworks like Quarkus and Spring Boot.

## 요약

- 조사 단위: `sources/langchain4j__langchain4j` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,487 files, 2,348 directories, depth score 102, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 mcp=langchain4j-mcp-docker/pom.xml, langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransportIT.java, langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransportTest.java이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | langchain4j/langchain4j |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Java |
| Stars | 12359 |
| Forks | 2312 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/langchain4j__langchain4j](../../../../sources/langchain4j__langchain4j) |
| 기존 보고서 | [reports/global-trending/repositories/langchain4j__langchain4j.md](../../../global-trending/repositories/langchain4j__langchain4j.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3487 / 2348 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .devcontainer, .github, .mvn, code-execution-engines, docs, document-loaders, document-parsers, document-transformers, embedding-store-filter-parsers, embeddings, experimental, http-clients, integration-tests, internal, langchain4j, langchain4j-agentic, langchain4j-agentic-a2a, langchain4j-agentic-mcp, langchain4j-agentic-patterns, langchain4j-anthropic |
| 상위 확장자 | .java: 2837, .md: 210, .xml: 130, .json: 53, .txt: 27, .properties: 24, .png: 23, (none): 21, .kt: 19, .yaml: 19, .pdf: 12, .embeddingmodelfactory: 10 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 22 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| code-execution-engines | top-level component | 1 |
| document-loaders | documentation surface | 1 |
| document-parsers | documentation surface | 1 |
| document-transformers | documentation surface | 1 |
| embedding-store-filter-parsers | top-level component | 1 |
| embeddings | top-level component | 1 |
| experimental | top-level component | 1 |
| http-clients | source boundary | 1 |
| integration-tests | validation surface | 1 |
| internal | top-level component | 1 |
| langchain4j | top-level component | 1 |
| langchain4j-agentic | top-level component | 1 |
| langchain4j-agentic-a2a | top-level component | 1 |
| langchain4j-agentic-mcp | top-level component | 1 |
| langchain4j-agentic-patterns | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| quality | Makefile | lint | make lint |
| quality | Makefile | format | make format |


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
| mcp | [langchain4j-mcp-docker/pom.xml](../../../../sources/langchain4j__langchain4j/langchain4j-mcp-docker/pom.xml) | mcp signal |
| mcp | [langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransportIT.java](../../../../sources/langchain4j__langchain4j/langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransportIT.java) | mcp signal |
| mcp | [langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransportTest.java](../../../../sources/langchain4j__langchain4j/langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransportTest.java) | mcp signal |
| mcp | [langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerResultCallbackTest.java](../../../../sources/langchain4j__langchain4j/langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerResultCallbackTest.java) | mcp signal |
| agentRuntime | [langchain4j-tablestore/src/test/java/dev/langchain4j/store/memory/chat/tablestore/TablestoreChatMemoryStoreIT.java](../../../../sources/langchain4j__langchain4j/langchain4j-tablestore/src/test/java/dev/langchain4j/store/memory/chat/tablestore/TablestoreChatMemoryStoreIT.java) | agentRuntime signal |
| agentRuntime | [langchain4j-tablestore/src/main/java/dev/langchain4j/store/memory/chat/tablestore/TablestoreChatMemoryStore.java](../../../../sources/langchain4j__langchain4j/langchain4j-tablestore/src/main/java/dev/langchain4j/store/memory/chat/tablestore/TablestoreChatMemoryStore.java) | agentRuntime signal |
| agentRuntime | [langchain4j-skills/src/test/resources/skills/using-process-tool/SKILL.md](../../../../sources/langchain4j__langchain4j/langchain4j-skills/src/test/resources/skills/using-process-tool/SKILL.md) | agentRuntime signal |
| agentRuntime | [langchain4j-skills/src/test/resources/skills/using-process-tool/references/17.md](../../../../sources/langchain4j__langchain4j/langchain4j-skills/src/test/resources/skills/using-process-tool/references/17.md) | agentRuntime signal |
| instruction | [docs/docs/tutorials/agents.md](../../../../sources/langchain4j__langchain4j/docs/docs/tutorials/agents.md) | instruction signal |
| instruction | [docs/docs/integrations/image-models/gemini.md](../../../../sources/langchain4j__langchain4j/docs/docs/integrations/image-models/gemini.md) | instruction signal |
| config | [Makefile](../../../../sources/langchain4j__langchain4j/Makefile) | config signal |
| config | [docs/Makefile](../../../../sources/langchain4j__langchain4j/docs/Makefile) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 191 | [langchain4j-tablestore/src/test/java/dev/langchain4j/store/memory/chat/tablestore/TablestoreChatMemoryStoreIT.java](../../../../sources/langchain4j__langchain4j/langchain4j-tablestore/src/test/java/dev/langchain4j/store/memory/chat/tablestore/TablestoreChatMemoryStoreIT.java)<br>[langchain4j-tablestore/src/main/java/dev/langchain4j/store/memory/chat/tablestore/TablestoreChatMemoryStore.java](../../../../sources/langchain4j__langchain4j/langchain4j-tablestore/src/main/java/dev/langchain4j/store/memory/chat/tablestore/TablestoreChatMemoryStore.java)<br>[langchain4j-skills/src/test/resources/skills/using-process-tool/SKILL.md](../../../../sources/langchain4j__langchain4j/langchain4j-skills/src/test/resources/skills/using-process-tool/SKILL.md)<br>[langchain4j-skills/src/test/resources/skills/using-process-tool/references/17.md](../../../../sources/langchain4j__langchain4j/langchain4j-skills/src/test/resources/skills/using-process-tool/references/17.md)<br>[langchain4j-skills/src/test/resources/skills/using-process-tool/references/25.md](../../../../sources/langchain4j__langchain4j/langchain4j-skills/src/test/resources/skills/using-process-tool/references/25.md)<br>[langchain4j-skills/src/test/resources/skills/test-skill/SKILL.md](../../../../sources/langchain4j__langchain4j/langchain4j-skills/src/test/resources/skills/test-skill/SKILL.md)<br>[langchain4j-skills/src/test/resources/skills/test-skill/references/empty.md](../../../../sources/langchain4j__langchain4j/langchain4j-skills/src/test/resources/skills/test-skill/references/empty.md)<br>[langchain4j-skills/src/test/resources/skills/test-skill/references/full.md](../../../../sources/langchain4j__langchain4j/langchain4j-skills/src/test/resources/skills/test-skill/references/full.md) |
| mcp | 244 | [langchain4j-mcp-docker/pom.xml](../../../../sources/langchain4j__langchain4j/langchain4j-mcp-docker/pom.xml)<br>[langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransportIT.java](../../../../sources/langchain4j__langchain4j/langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransportIT.java)<br>[langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransportTest.java](../../../../sources/langchain4j__langchain4j/langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransportTest.java)<br>[langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerResultCallbackTest.java](../../../../sources/langchain4j__langchain4j/langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerResultCallbackTest.java)<br>[langchain4j-mcp-docker/src/main/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransport.java](../../../../sources/langchain4j__langchain4j/langchain4j-mcp-docker/src/main/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransport.java)<br>[langchain4j-mcp-docker/src/main/java/dev/langchain4j/mcp/client/transport/docker/DockerResultCallback.java](../../../../sources/langchain4j__langchain4j/langchain4j-mcp-docker/src/main/java/dev/langchain4j/mcp/client/transport/docker/DockerResultCallback.java)<br>[langchain4j-mcp/pom.xml](../../../../sources/langchain4j__langchain4j/langchain4j-mcp/pom.xml)<br>[langchain4j-mcp/revapi.json](../../../../sources/langchain4j__langchain4j/langchain4j-mcp/revapi.json) |
| retrieval | 612 | [langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/CloudWeaviateEmbeddingStoreIT.java](../../../../sources/langchain4j__langchain4j/langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/CloudWeaviateEmbeddingStoreIT.java)<br>[langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalGRPCWeaviateEmbeddingStoreIT.java](../../../../sources/langchain4j__langchain4j/langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalGRPCWeaviateEmbeddingStoreIT.java)<br>[langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalWeaviateEmbeddingStoreIT.java](../../../../sources/langchain4j__langchain4j/langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalWeaviateEmbeddingStoreIT.java)<br>[langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalWeaviateEmbeddingStoreRemovalIT.java](../../../../sources/langchain4j__langchain4j/langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalWeaviateEmbeddingStoreRemovalIT.java)<br>[langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalWeaviateEmbeddingStoreRemoveIT.java](../../../../sources/langchain4j__langchain4j/langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalWeaviateEmbeddingStoreRemoveIT.java)<br>[langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalWeaviateMetadataAtBaseStoreIT.java](../../../../sources/langchain4j__langchain4j/langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalWeaviateMetadataAtBaseStoreIT.java)<br>[langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalWeaviateNoMetadataEmbeddingStoreIT.java](../../../../sources/langchain4j__langchain4j/langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalWeaviateNoMetadataEmbeddingStoreIT.java)<br>[langchain4j-weaviate/src/main/java/dev/langchain4j/store/embedding/weaviate/WeaviateEmbeddingStore.java](../../../../sources/langchain4j__langchain4j/langchain4j-weaviate/src/main/java/dev/langchain4j/store/embedding/weaviate/WeaviateEmbeddingStore.java) |
| spec | 0 | 명확하지 않음 |
| eval | 1392 | [web-search-engines/langchain4j-web-search-engine-tavily/src/test/java/dev/langchain4j/web/search/tavily/TavilyWebSearchEngineIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-tavily/src/test/java/dev/langchain4j/web/search/tavily/TavilyWebSearchEngineIT.java)<br>[web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiContentRetrieverIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiContentRetrieverIT.java)<br>[web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiWebSearchEngineIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiWebSearchEngineIT.java)<br>[web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiWebSearchToolIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiWebSearchToolIT.java)<br>[web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchContentRetrieverIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchContentRetrieverIT.java)<br>[web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchEngineIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchEngineIT.java)<br>[web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchToolIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchToolIT.java)<br>[web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchUtilsTest.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchUtilsTest.java) |
| security | 80 | [SECURITY.md](../../../../sources/langchain4j__langchain4j/SECURITY.md)<br>[langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/GuardrailAssertions.java](../../../../sources/langchain4j__langchain4j/langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/GuardrailAssertions.java)<br>[langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/GuardrailResultAssert.java](../../../../sources/langchain4j__langchain4j/langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/GuardrailResultAssert.java)<br>[langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/InputGuardrailResultAssert.java](../../../../sources/langchain4j__langchain4j/langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/InputGuardrailResultAssert.java)<br>[langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/OutputGuardrailResultAssert.java](../../../../sources/langchain4j__langchain4j/langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/OutputGuardrailResultAssert.java)<br>[langchain4j-core/src/test/java/dev/langchain4j/guardrail/InputGuardrailExecutorTests.java](../../../../sources/langchain4j__langchain4j/langchain4j-core/src/test/java/dev/langchain4j/guardrail/InputGuardrailExecutorTests.java)<br>[langchain4j-core/src/test/java/dev/langchain4j/guardrail/JsonExtractorOutputGuardrailTests.java](../../../../sources/langchain4j__langchain4j/langchain4j-core/src/test/java/dev/langchain4j/guardrail/JsonExtractorOutputGuardrailTests.java)<br>[langchain4j-core/src/test/java/dev/langchain4j/guardrail/OutputGuardrailResultTest.java](../../../../sources/langchain4j__langchain4j/langchain4j-core/src/test/java/dev/langchain4j/guardrail/OutputGuardrailResultTest.java) |
| ci | 13 | [.github/workflows/docs-update-chatbot.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/docs-update-chatbot.yaml)<br>[.github/workflows/docs-update-version.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/docs-update-version.yaml)<br>[.github/workflows/docs.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/docs.yaml)<br>[.github/workflows/langchain4j-github-bot-lint.yml](../../../../sources/langchain4j__langchain4j/.github/workflows/langchain4j-github-bot-lint.yml)<br>[.github/workflows/main.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/main.yaml)<br>[.github/workflows/nightly_jdk17.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/nightly_jdk17.yaml)<br>[.github/workflows/nightly_jdk21.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/nightly_jdk21.yaml)<br>[.github/workflows/nightly_jdk25.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/nightly_jdk25.yaml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [docs/docs/tutorials/agents.md](../../../../sources/langchain4j__langchain4j/docs/docs/tutorials/agents.md)<br>[docs/docs/integrations/image-models/gemini.md](../../../../sources/langchain4j__langchain4j/docs/docs/integrations/image-models/gemini.md) |
| docs | 260 | [README.md](../../../../sources/langchain4j__langchain4j/README.md)<br>[langchain4j-oracle/README.md](../../../../sources/langchain4j__langchain4j/langchain4j-oracle/README.md)<br>[langchain4j-milvus/README.MD](../../../../sources/langchain4j__langchain4j/langchain4j-milvus/README.MD)<br>[langchain4j-jlama/README.md](../../../../sources/langchain4j__langchain4j/langchain4j-jlama/README.md)<br>[langchain4j-gpu-llama3/README.md](../../../../sources/langchain4j__langchain4j/langchain4j-gpu-llama3/README.md)<br>[langchain4j/src/test/externalLib/README.md](../../../../sources/langchain4j__langchain4j/langchain4j/src/test/externalLib/README.md)<br>[integration-tests/README.md](../../../../sources/langchain4j__langchain4j/integration-tests/README.md)<br>[integration-tests/integration-tests-guardrails/README.md](../../../../sources/langchain4j__langchain4j/integration-tests/integration-tests-guardrails/README.md) |
| config | 3 | [Makefile](../../../../sources/langchain4j__langchain4j/Makefile)<br>[docs/Makefile](../../../../sources/langchain4j__langchain4j/docs/Makefile)<br>[docs/package.json](../../../../sources/langchain4j__langchain4j/docs/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1392 | [web-search-engines/langchain4j-web-search-engine-tavily/src/test/java/dev/langchain4j/web/search/tavily/TavilyWebSearchEngineIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-tavily/src/test/java/dev/langchain4j/web/search/tavily/TavilyWebSearchEngineIT.java)<br>[web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiContentRetrieverIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiContentRetrieverIT.java)<br>[web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiWebSearchEngineIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiWebSearchEngineIT.java)<br>[web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiWebSearchToolIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiWebSearchToolIT.java)<br>[web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchContentRetrieverIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchContentRetrieverIT.java)<br>[web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchEngineIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchEngineIT.java) |
| CI workflow | 13 | [.github/workflows/docs-update-chatbot.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/docs-update-chatbot.yaml)<br>[.github/workflows/docs-update-version.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/docs-update-version.yaml)<br>[.github/workflows/docs.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/docs.yaml)<br>[.github/workflows/langchain4j-github-bot-lint.yml](../../../../sources/langchain4j__langchain4j/.github/workflows/langchain4j-github-bot-lint.yml)<br>[.github/workflows/main.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/main.yaml)<br>[.github/workflows/nightly_jdk17.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/nightly_jdk17.yaml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 80 | [SECURITY.md](../../../../sources/langchain4j__langchain4j/SECURITY.md)<br>[langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/GuardrailAssertions.java](../../../../sources/langchain4j__langchain4j/langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/GuardrailAssertions.java)<br>[langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/GuardrailResultAssert.java](../../../../sources/langchain4j__langchain4j/langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/GuardrailResultAssert.java)<br>[langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/InputGuardrailResultAssert.java](../../../../sources/langchain4j__langchain4j/langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/InputGuardrailResultAssert.java)<br>[langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/OutputGuardrailResultAssert.java](../../../../sources/langchain4j__langchain4j/langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/OutputGuardrailResultAssert.java)<br>[langchain4j-core/src/test/java/dev/langchain4j/guardrail/InputGuardrailExecutorTests.java](../../../../sources/langchain4j__langchain4j/langchain4j-core/src/test/java/dev/langchain4j/guardrail/InputGuardrailExecutorTests.java) |
| 에이전트 지시문 | 2 | [docs/docs/tutorials/agents.md](../../../../sources/langchain4j__langchain4j/docs/docs/tutorials/agents.md)<br>[docs/docs/integrations/image-models/gemini.md](../../../../sources/langchain4j__langchain4j/docs/docs/integrations/image-models/gemini.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요; path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `langchain4j-mcp-docker/pom.xml`, `langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransportIT.java`, `langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransportTest.java`.
2. agent/tool runtime 매핑: `langchain4j-tablestore/src/test/java/dev/langchain4j/store/memory/chat/tablestore/TablestoreChatMemoryStoreIT.java`, `langchain4j-tablestore/src/main/java/dev/langchain4j/store/memory/chat/tablestore/TablestoreChatMemoryStore.java`, `langchain4j-skills/src/test/resources/skills/using-process-tool/SKILL.md`.
3. retrieval/memory/indexing 확인: `langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/CloudWeaviateEmbeddingStoreIT.java`, `langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalGRPCWeaviateEmbeddingStoreIT.java`, `langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalWeaviateEmbeddingStoreIT.java`.
4. test/eval 파일로 동작 검증: `web-search-engines/langchain4j-web-search-engine-tavily/src/test/java/dev/langchain4j/web/search/tavily/TavilyWebSearchEngineIT.java`, `web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiContentRetrieverIT.java`, `web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiWebSearchEngineIT.java`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 LangChain4j is an idiomatic, open source Java library for building LLM powered applications on the JVM. It offers a unif. 핵심 구조 신호는 Java, pom.xml, Makefile, README.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
