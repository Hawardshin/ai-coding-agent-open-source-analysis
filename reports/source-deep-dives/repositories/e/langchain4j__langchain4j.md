# langchain4j/langchain4j Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

LangChain4j is an idiomatic, open-source Java library for building LLM-powered applications on the JVM. It offers a unified API over popular LLM providers and vector stores, and makes implementing tool calling (including MCP support), agents and RAG easy. It integrates seamlessly with enterprise Java frameworks like Quarkus and Spring Boot.

## 요약

- 조사 단위: `sources/langchain4j__langchain4j` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,487 files, 2,348 directories, depth score 108, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 mcp=langchain4j-mcp-docker/pom.xml, langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransportIT.java, langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransportTest.java이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | langchain4j/langchain4j |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Java |
| Stars | 12359 |
| Forks | 2312 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/langchain4j__langchain4j](../../../../sources/langchain4j__langchain4j) |
| Existing report | [reports/global-trending/repositories/langchain4j__langchain4j.md](../../../global-trending/repositories/langchain4j__langchain4j.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3487 / 2348 |
| Max observed depth | 13 |
| Top directories | .devcontainer, .github, .mvn, code-execution-engines, docs, document-loaders, document-parsers, document-transformers, embedding-store-filter-parsers, embeddings, experimental, http-clients, integration-tests, internal, langchain4j, langchain4j-agentic, langchain4j-agentic-a2a, langchain4j-agentic-mcp, langchain4j-agentic-patterns, langchain4j-anthropic |
| Top extensions | .java: 2837, .md: 210, .xml: 130, .json: 53, .txt: 27, .properties: 24, .png: 23, (none): 21, .kt: 19, .yaml: 19, .pdf: 12, .embeddingmodelfactory: 10 |
| Source patterns | agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| quality | Makefile | lint | make lint |
| quality | Makefile | format | make format |


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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 191 | [langchain4j-tablestore/src/test/java/dev/langchain4j/store/memory/chat/tablestore/TablestoreChatMemoryStoreIT.java](../../../../sources/langchain4j__langchain4j/langchain4j-tablestore/src/test/java/dev/langchain4j/store/memory/chat/tablestore/TablestoreChatMemoryStoreIT.java)<br>[langchain4j-tablestore/src/main/java/dev/langchain4j/store/memory/chat/tablestore/TablestoreChatMemoryStore.java](../../../../sources/langchain4j__langchain4j/langchain4j-tablestore/src/main/java/dev/langchain4j/store/memory/chat/tablestore/TablestoreChatMemoryStore.java)<br>[langchain4j-skills/src/test/resources/skills/using-process-tool/SKILL.md](../../../../sources/langchain4j__langchain4j/langchain4j-skills/src/test/resources/skills/using-process-tool/SKILL.md)<br>[langchain4j-skills/src/test/resources/skills/using-process-tool/references/17.md](../../../../sources/langchain4j__langchain4j/langchain4j-skills/src/test/resources/skills/using-process-tool/references/17.md)<br>[langchain4j-skills/src/test/resources/skills/using-process-tool/references/25.md](../../../../sources/langchain4j__langchain4j/langchain4j-skills/src/test/resources/skills/using-process-tool/references/25.md)<br>[langchain4j-skills/src/test/resources/skills/test-skill/SKILL.md](../../../../sources/langchain4j__langchain4j/langchain4j-skills/src/test/resources/skills/test-skill/SKILL.md)<br>[langchain4j-skills/src/test/resources/skills/test-skill/references/empty.md](../../../../sources/langchain4j__langchain4j/langchain4j-skills/src/test/resources/skills/test-skill/references/empty.md)<br>[langchain4j-skills/src/test/resources/skills/test-skill/references/full.md](../../../../sources/langchain4j__langchain4j/langchain4j-skills/src/test/resources/skills/test-skill/references/full.md) |
| mcp | 244 | [langchain4j-mcp-docker/pom.xml](../../../../sources/langchain4j__langchain4j/langchain4j-mcp-docker/pom.xml)<br>[langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransportIT.java](../../../../sources/langchain4j__langchain4j/langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransportIT.java)<br>[langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransportTest.java](../../../../sources/langchain4j__langchain4j/langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransportTest.java)<br>[langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerResultCallbackTest.java](../../../../sources/langchain4j__langchain4j/langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerResultCallbackTest.java)<br>[langchain4j-mcp-docker/src/main/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransport.java](../../../../sources/langchain4j__langchain4j/langchain4j-mcp-docker/src/main/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransport.java)<br>[langchain4j-mcp-docker/src/main/java/dev/langchain4j/mcp/client/transport/docker/DockerResultCallback.java](../../../../sources/langchain4j__langchain4j/langchain4j-mcp-docker/src/main/java/dev/langchain4j/mcp/client/transport/docker/DockerResultCallback.java)<br>[langchain4j-mcp/pom.xml](../../../../sources/langchain4j__langchain4j/langchain4j-mcp/pom.xml)<br>[langchain4j-mcp/revapi.json](../../../../sources/langchain4j__langchain4j/langchain4j-mcp/revapi.json) |
| retrieval | 612 | [langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/CloudWeaviateEmbeddingStoreIT.java](../../../../sources/langchain4j__langchain4j/langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/CloudWeaviateEmbeddingStoreIT.java)<br>[langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalGRPCWeaviateEmbeddingStoreIT.java](../../../../sources/langchain4j__langchain4j/langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalGRPCWeaviateEmbeddingStoreIT.java)<br>[langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalWeaviateEmbeddingStoreIT.java](../../../../sources/langchain4j__langchain4j/langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalWeaviateEmbeddingStoreIT.java)<br>[langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalWeaviateEmbeddingStoreRemovalIT.java](../../../../sources/langchain4j__langchain4j/langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalWeaviateEmbeddingStoreRemovalIT.java)<br>[langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalWeaviateEmbeddingStoreRemoveIT.java](../../../../sources/langchain4j__langchain4j/langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalWeaviateEmbeddingStoreRemoveIT.java)<br>[langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalWeaviateMetadataAtBaseStoreIT.java](../../../../sources/langchain4j__langchain4j/langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalWeaviateMetadataAtBaseStoreIT.java)<br>[langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalWeaviateNoMetadataEmbeddingStoreIT.java](../../../../sources/langchain4j__langchain4j/langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalWeaviateNoMetadataEmbeddingStoreIT.java)<br>[langchain4j-weaviate/src/main/java/dev/langchain4j/store/embedding/weaviate/WeaviateEmbeddingStore.java](../../../../sources/langchain4j__langchain4j/langchain4j-weaviate/src/main/java/dev/langchain4j/store/embedding/weaviate/WeaviateEmbeddingStore.java) |
| spec | 0 | not obvious |
| eval | 1392 | [web-search-engines/langchain4j-web-search-engine-tavily/src/test/java/dev/langchain4j/web/search/tavily/TavilyWebSearchEngineIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-tavily/src/test/java/dev/langchain4j/web/search/tavily/TavilyWebSearchEngineIT.java)<br>[web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiContentRetrieverIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiContentRetrieverIT.java)<br>[web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiWebSearchEngineIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiWebSearchEngineIT.java)<br>[web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiWebSearchToolIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiWebSearchToolIT.java)<br>[web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchContentRetrieverIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchContentRetrieverIT.java)<br>[web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchEngineIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchEngineIT.java)<br>[web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchToolIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchToolIT.java)<br>[web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchUtilsTest.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchUtilsTest.java) |
| security | 80 | [SECURITY.md](../../../../sources/langchain4j__langchain4j/SECURITY.md)<br>[langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/GuardrailAssertions.java](../../../../sources/langchain4j__langchain4j/langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/GuardrailAssertions.java)<br>[langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/GuardrailResultAssert.java](../../../../sources/langchain4j__langchain4j/langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/GuardrailResultAssert.java)<br>[langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/InputGuardrailResultAssert.java](../../../../sources/langchain4j__langchain4j/langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/InputGuardrailResultAssert.java)<br>[langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/OutputGuardrailResultAssert.java](../../../../sources/langchain4j__langchain4j/langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/OutputGuardrailResultAssert.java)<br>[langchain4j-core/src/test/java/dev/langchain4j/guardrail/InputGuardrailExecutorTests.java](../../../../sources/langchain4j__langchain4j/langchain4j-core/src/test/java/dev/langchain4j/guardrail/InputGuardrailExecutorTests.java)<br>[langchain4j-core/src/test/java/dev/langchain4j/guardrail/JsonExtractorOutputGuardrailTests.java](../../../../sources/langchain4j__langchain4j/langchain4j-core/src/test/java/dev/langchain4j/guardrail/JsonExtractorOutputGuardrailTests.java)<br>[langchain4j-core/src/test/java/dev/langchain4j/guardrail/OutputGuardrailResultTest.java](../../../../sources/langchain4j__langchain4j/langchain4j-core/src/test/java/dev/langchain4j/guardrail/OutputGuardrailResultTest.java) |
| ci | 13 | [.github/workflows/docs-update-chatbot.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/docs-update-chatbot.yaml)<br>[.github/workflows/docs-update-version.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/docs-update-version.yaml)<br>[.github/workflows/docs.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/docs.yaml)<br>[.github/workflows/langchain4j-github-bot-lint.yml](../../../../sources/langchain4j__langchain4j/.github/workflows/langchain4j-github-bot-lint.yml)<br>[.github/workflows/main.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/main.yaml)<br>[.github/workflows/nightly_jdk17.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/nightly_jdk17.yaml)<br>[.github/workflows/nightly_jdk21.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/nightly_jdk21.yaml)<br>[.github/workflows/nightly_jdk25.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/nightly_jdk25.yaml) |
| container | 0 | not obvious |
| instruction | 2 | [docs/docs/tutorials/agents.md](../../../../sources/langchain4j__langchain4j/docs/docs/tutorials/agents.md)<br>[docs/docs/integrations/image-models/gemini.md](../../../../sources/langchain4j__langchain4j/docs/docs/integrations/image-models/gemini.md) |
| docs | 260 | [README.md](../../../../sources/langchain4j__langchain4j/README.md)<br>[langchain4j-oracle/README.md](../../../../sources/langchain4j__langchain4j/langchain4j-oracle/README.md)<br>[langchain4j-milvus/README.MD](../../../../sources/langchain4j__langchain4j/langchain4j-milvus/README.MD)<br>[langchain4j-jlama/README.md](../../../../sources/langchain4j__langchain4j/langchain4j-jlama/README.md)<br>[langchain4j-gpu-llama3/README.md](../../../../sources/langchain4j__langchain4j/langchain4j-gpu-llama3/README.md)<br>[langchain4j/src/test/externalLib/README.md](../../../../sources/langchain4j__langchain4j/langchain4j/src/test/externalLib/README.md)<br>[integration-tests/README.md](../../../../sources/langchain4j__langchain4j/integration-tests/README.md)<br>[integration-tests/integration-tests-guardrails/README.md](../../../../sources/langchain4j__langchain4j/integration-tests/integration-tests-guardrails/README.md) |
| config | 3 | [Makefile](../../../../sources/langchain4j__langchain4j/Makefile)<br>[docs/Makefile](../../../../sources/langchain4j__langchain4j/docs/Makefile)<br>[docs/package.json](../../../../sources/langchain4j__langchain4j/docs/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1392 | [web-search-engines/langchain4j-web-search-engine-tavily/src/test/java/dev/langchain4j/web/search/tavily/TavilyWebSearchEngineIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-tavily/src/test/java/dev/langchain4j/web/search/tavily/TavilyWebSearchEngineIT.java)<br>[web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiContentRetrieverIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiContentRetrieverIT.java)<br>[web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiWebSearchEngineIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiWebSearchEngineIT.java)<br>[web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiWebSearchToolIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiWebSearchToolIT.java)<br>[web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchContentRetrieverIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchContentRetrieverIT.java)<br>[web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchEngineIT.java](../../../../sources/langchain4j__langchain4j/web-search-engines/langchain4j-web-search-engine-google-custom/src/test/java/dev/langchain4j/web/search/google/customsearch/GoogleCustomWebSearchEngineIT.java) |
| CI workflows | 13 | [.github/workflows/docs-update-chatbot.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/docs-update-chatbot.yaml)<br>[.github/workflows/docs-update-version.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/docs-update-version.yaml)<br>[.github/workflows/docs.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/docs.yaml)<br>[.github/workflows/langchain4j-github-bot-lint.yml](../../../../sources/langchain4j__langchain4j/.github/workflows/langchain4j-github-bot-lint.yml)<br>[.github/workflows/main.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/main.yaml)<br>[.github/workflows/nightly_jdk17.yaml](../../../../sources/langchain4j__langchain4j/.github/workflows/nightly_jdk17.yaml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 80 | [SECURITY.md](../../../../sources/langchain4j__langchain4j/SECURITY.md)<br>[langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/GuardrailAssertions.java](../../../../sources/langchain4j__langchain4j/langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/GuardrailAssertions.java)<br>[langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/GuardrailResultAssert.java](../../../../sources/langchain4j__langchain4j/langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/GuardrailResultAssert.java)<br>[langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/InputGuardrailResultAssert.java](../../../../sources/langchain4j__langchain4j/langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/InputGuardrailResultAssert.java)<br>[langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/OutputGuardrailResultAssert.java](../../../../sources/langchain4j__langchain4j/langchain4j-test/src/main/java/dev/langchain4j/test/guardrail/OutputGuardrailResultAssert.java)<br>[langchain4j-core/src/test/java/dev/langchain4j/guardrail/InputGuardrailExecutorTests.java](../../../../sources/langchain4j__langchain4j/langchain4j-core/src/test/java/dev/langchain4j/guardrail/InputGuardrailExecutorTests.java) |
| Agent instructions | 2 | [docs/docs/tutorials/agents.md](../../../../sources/langchain4j__langchain4j/docs/docs/tutorials/agents.md)<br>[docs/docs/integrations/image-models/gemini.md](../../../../sources/langchain4j__langchain4j/docs/docs/integrations/image-models/gemini.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review; primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `langchain4j-mcp-docker/pom.xml`, `langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransportIT.java`, `langchain4j-mcp-docker/src/test/java/dev/langchain4j/mcp/client/transport/docker/DockerMcpTransportTest.java`.
2. Map agent/tool runtime through: `langchain4j-tablestore/src/test/java/dev/langchain4j/store/memory/chat/tablestore/TablestoreChatMemoryStoreIT.java`, `langchain4j-tablestore/src/main/java/dev/langchain4j/store/memory/chat/tablestore/TablestoreChatMemoryStore.java`, `langchain4j-skills/src/test/resources/skills/using-process-tool/SKILL.md`.
3. Inspect retrieval/memory/indexing through: `langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/CloudWeaviateEmbeddingStoreIT.java`, `langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalGRPCWeaviateEmbeddingStoreIT.java`, `langchain4j-weaviate/src/test/java/dev/langchain4j/store/embedding/weaviate/LocalWeaviateEmbeddingStoreIT.java`.
4. Verify behavior through test/eval files: `web-search-engines/langchain4j-web-search-engine-tavily/src/test/java/dev/langchain4j/web/search/tavily/TavilyWebSearchEngineIT.java`, `web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiContentRetrieverIT.java`, `web-search-engines/langchain4j-web-search-engine-searchapi/src/test/java/SearchApiWebSearchEngineIT.java`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 LangChain4j is an idiomatic, open source Java library for building LLM powered applications on the JVM. It offers a unif. 핵심 구조 신호는 Java, pom.xml, Makefile, README.md, LICENSE, tests이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
