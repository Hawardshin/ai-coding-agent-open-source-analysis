# ThomasVitale/llm-apps-java-spring-ai Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Samples showing how to build Java applications powered by Generative AI and LLMs using Spring AI and Spring Boot.

## 요약

- 조사 단위: `sources/ThomasVitale__llm-apps-java-spring-ai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 446 files, 849 directories, depth score 78, key references 3개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 ci=.github/workflows/commit-stage.yml이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 3개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | ThomasVitale/llm-apps-java-spring-ai |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Java |
| Stars | 753 |
| Forks | 178 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/ThomasVitale__llm-apps-java-spring-ai](../../../../sources/ThomasVitale__llm-apps-java-spring-ai) |
| Existing report | [reports/global-trending/repositories/ThomasVitale__llm-apps-java-spring-ai.md](../../../global-trending/repositories/ThomasVitale__llm-apps-java-spring-ai.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 446 / 849 |
| Max observed depth | 12 |
| Top directories | .github, buildSrc, data-ingestion, gradle, mcp, models, observability, patterns, rag, use-cases |
| Top extensions | .java: 238, .md: 70, .gradle: 54, .yml: 54, .json: 4, .st: 4, .txt: 4, (none): 4, .mp3: 3, .pdf: 3, .png: 3, .properties: 2 |
| Source patterns | agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| buildSrc | source boundary | 1 |
| data-ingestion | top-level component | 1 |
| gradle | top-level component | 1 |
| mcp | top-level component | 1 |
| models | top-level component | 1 |
| observability | top-level component | 1 |
| patterns | top-level component | 1 |
| rag | top-level component | 1 |
| use-cases | top-level component | 1 |


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
| ci | [.github/workflows/commit-stage.yml](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/.github/workflows/commit-stage.yml) | ci signal |
| eval | [use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassificationApplicationTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassificationApplicationTests.java) | eval support |
| eval | [use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassifierTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassifierTests.java) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 58 | [patterns/tool-calling/tool-calling-openai/build.gradle](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/tool-calling/tool-calling-openai/build.gradle)<br>[patterns/tool-calling/tool-calling-openai/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/tool-calling/tool-calling-openai/README.md)<br>[patterns/tool-calling/tool-calling-openai/src/test/java/com/thomasvitale/ai/spring/ToolCallingOpenAiApplicationTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/tool-calling/tool-calling-openai/src/test/java/com/thomasvitale/ai/spring/ToolCallingOpenAiApplicationTests.java)<br>[patterns/tool-calling/tool-calling-openai/src/main/resources/application.yml](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/tool-calling/tool-calling-openai/src/main/resources/application.yml)<br>[patterns/tool-calling/tool-calling-openai/src/main/java/com/thomasvitale/ai/spring/BookService.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/tool-calling/tool-calling-openai/src/main/java/com/thomasvitale/ai/spring/BookService.java)<br>[patterns/tool-calling/tool-calling-openai/src/main/java/com/thomasvitale/ai/spring/ChatController.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/tool-calling/tool-calling-openai/src/main/java/com/thomasvitale/ai/spring/ChatController.java)<br>[patterns/tool-calling/tool-calling-openai/src/main/java/com/thomasvitale/ai/spring/Functions.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/tool-calling/tool-calling-openai/src/main/java/com/thomasvitale/ai/spring/Functions.java)<br>[patterns/tool-calling/tool-calling-openai/src/main/java/com/thomasvitale/ai/spring/ToolCallingOpenAiApplication.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/tool-calling/tool-calling-openai/src/main/java/com/thomasvitale/ai/spring/ToolCallingOpenAiApplication.java) |
| mcp | 7 | [mcp/mcp-clients/mcp-brave/build.gradle](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/mcp/mcp-clients/mcp-brave/build.gradle)<br>[mcp/mcp-clients/mcp-brave/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/mcp/mcp-clients/mcp-brave/README.md)<br>[mcp/mcp-clients/mcp-brave/src/test/java/com/thomasvitale/ai/spring/McpBraveApplicationTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/mcp/mcp-clients/mcp-brave/src/test/java/com/thomasvitale/ai/spring/McpBraveApplicationTests.java)<br>[mcp/mcp-clients/mcp-brave/src/main/resources/application.yml](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/mcp/mcp-clients/mcp-brave/src/main/resources/application.yml)<br>[mcp/mcp-clients/mcp-brave/src/main/java/com/thomasvitale/ai/spring/ChatController.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/mcp/mcp-clients/mcp-brave/src/main/java/com/thomasvitale/ai/spring/ChatController.java)<br>[mcp/mcp-clients/mcp-brave/src/main/java/com/thomasvitale/ai/spring/McpBraveApplication.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/mcp/mcp-clients/mcp-brave/src/main/java/com/thomasvitale/ai/spring/McpBraveApplication.java)<br>[mcp/mcp-clients/mcp-brave/src/main/java/com/thomasvitale/ai/spring/model/ChatModelController.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/mcp/mcp-clients/mcp-brave/src/main/java/com/thomasvitale/ai/spring/model/ChatModelController.java) |
| retrieval | 105 | [rag/rag-sequential/rag-naive/build.gradle](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-naive/build.gradle)<br>[rag/rag-sequential/rag-naive/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-naive/README.md)<br>[rag/rag-sequential/rag-naive/src/test/java/com/thomasvitale/ai/spring/RagNaiveTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-naive/src/test/java/com/thomasvitale/ai/spring/RagNaiveTests.java)<br>[rag/rag-sequential/rag-naive/src/main/resources/application.yml](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-naive/src/main/resources/application.yml)<br>[rag/rag-sequential/rag-naive/src/main/resources/documents/story1.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-naive/src/main/resources/documents/story1.md)<br>[rag/rag-sequential/rag-naive/src/main/resources/documents/story2.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-naive/src/main/resources/documents/story2.md)<br>[rag/rag-sequential/rag-naive/src/main/java/com/thomasvitale/ai/spring/IngestionPipeline.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-naive/src/main/java/com/thomasvitale/ai/spring/IngestionPipeline.java)<br>[rag/rag-sequential/rag-naive/src/main/java/com/thomasvitale/ai/spring/RagControllerEmptyContext.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-naive/src/main/java/com/thomasvitale/ai/spring/RagControllerEmptyContext.java) |
| spec | 0 | not obvious |
| eval | 86 | [use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassificationApplicationTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassificationApplicationTests.java)<br>[use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassifierTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassifierTests.java)<br>[use-cases/structured-data-extraction/src/test/java/com/thomasvitale/ai/spring/StructuredDataExtractionTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/structured-data-extraction/src/test/java/com/thomasvitale/ai/spring/StructuredDataExtractionTests.java)<br>[use-cases/semantic-search/src/test/java/com/thomasvitale/ai/spring/SemanticSearchTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/semantic-search/src/test/java/com/thomasvitale/ai/spring/SemanticSearchTests.java)<br>[use-cases/question-answering/src/test/java/com/thomasvitale/ai/spring/QuestionAnsweringTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/question-answering/src/test/java/com/thomasvitale/ai/spring/QuestionAnsweringTests.java)<br>[use-cases/chatbot/src/test/java/com/thomasvitale/ai/spring/ChatbotTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/chatbot/src/test/java/com/thomasvitale/ai/spring/ChatbotTests.java)<br>[rag/rag-sequential/rag-naive/src/test/java/com/thomasvitale/ai/spring/RagNaiveTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-naive/src/test/java/com/thomasvitale/ai/spring/RagNaiveTests.java)<br>[rag/rag-sequential/rag-advanced/src/test/java/com/thomasvitale/ai/spring/RagAdvancedTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-advanced/src/test/java/com/thomasvitale/ai/spring/RagAdvancedTests.java) |
| security | 6 | [patterns/memory/memory-spring-security/build.gradle](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/build.gradle)<br>[patterns/memory/memory-spring-security/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/README.md)<br>[patterns/memory/memory-spring-security/src/test/java/com/thomasvitale/ai/spring/MemorySpringSecurityApplicationTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/src/test/java/com/thomasvitale/ai/spring/MemorySpringSecurityApplicationTests.java)<br>[patterns/memory/memory-spring-security/src/main/resources/application.yml](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/src/main/resources/application.yml)<br>[patterns/memory/memory-spring-security/src/main/java/com/thomasvitale/ai/spring/MemoryController.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/src/main/java/com/thomasvitale/ai/spring/MemoryController.java)<br>[patterns/memory/memory-spring-security/src/main/java/com/thomasvitale/ai/spring/MemorySpringSecurityApplication.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/src/main/java/com/thomasvitale/ai/spring/MemorySpringSecurityApplication.java) |
| ci | 1 | [.github/workflows/commit-stage.yml](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/.github/workflows/commit-stage.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 53 | [README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/README.md)<br>[use-cases/text-classification/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/text-classification/README.md)<br>[use-cases/structured-data-extraction/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/structured-data-extraction/README.md)<br>[use-cases/semantic-search/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/semantic-search/README.md)<br>[use-cases/question-answering/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/question-answering/README.md)<br>[use-cases/chatbot/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/chatbot/README.md)<br>[rag/rag-sequential/rag-naive/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-naive/README.md)<br>[rag/rag-sequential/rag-advanced/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-advanced/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 86 | [use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassificationApplicationTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassificationApplicationTests.java)<br>[use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassifierTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassifierTests.java)<br>[use-cases/structured-data-extraction/src/test/java/com/thomasvitale/ai/spring/StructuredDataExtractionTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/structured-data-extraction/src/test/java/com/thomasvitale/ai/spring/StructuredDataExtractionTests.java)<br>[use-cases/semantic-search/src/test/java/com/thomasvitale/ai/spring/SemanticSearchTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/semantic-search/src/test/java/com/thomasvitale/ai/spring/SemanticSearchTests.java)<br>[use-cases/question-answering/src/test/java/com/thomasvitale/ai/spring/QuestionAnsweringTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/question-answering/src/test/java/com/thomasvitale/ai/spring/QuestionAnsweringTests.java)<br>[use-cases/chatbot/src/test/java/com/thomasvitale/ai/spring/ChatbotTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/chatbot/src/test/java/com/thomasvitale/ai/spring/ChatbotTests.java) |
| CI workflows | 1 | [.github/workflows/commit-stage.yml](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/.github/workflows/commit-stage.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 6 | [patterns/memory/memory-spring-security/build.gradle](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/build.gradle)<br>[patterns/memory/memory-spring-security/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/README.md)<br>[patterns/memory/memory-spring-security/src/test/java/com/thomasvitale/ai/spring/MemorySpringSecurityApplicationTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/src/test/java/com/thomasvitale/ai/spring/MemorySpringSecurityApplicationTests.java)<br>[patterns/memory/memory-spring-security/src/main/resources/application.yml](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/src/main/resources/application.yml)<br>[patterns/memory/memory-spring-security/src/main/java/com/thomasvitale/ai/spring/MemoryController.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/src/main/java/com/thomasvitale/ai/spring/MemoryController.java)<br>[patterns/memory/memory-spring-security/src/main/java/com/thomasvitale/ai/spring/MemorySpringSecurityApplication.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/src/main/java/com/thomasvitale/ai/spring/MemorySpringSecurityApplication.java) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `.github/workflows/commit-stage.yml`, `use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassificationApplicationTests.java`, `use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassifierTests.java`.
2. Map agent/tool runtime through: `patterns/tool-calling/tool-calling-openai/build.gradle`, `patterns/tool-calling/tool-calling-openai/README.md`, `patterns/tool-calling/tool-calling-openai/src/test/java/com/thomasvitale/ai/spring/ToolCallingOpenAiApplicationTests.java`.
3. Inspect retrieval/memory/indexing through: `rag/rag-sequential/rag-naive/build.gradle`, `rag/rag-sequential/rag-naive/README.md`, `rag/rag-sequential/rag-naive/src/test/java/com/thomasvitale/ai/spring/RagNaiveTests.java`.
4. Verify behavior through test/eval files: `use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassificationApplicationTests.java`, `use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassifierTests.java`, `use-cases/structured-data-extraction/src/test/java/com/thomasvitale/ai/spring/StructuredDataExtractionTests.java`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Samples showing how to build Java applications powered by Generative AI and LLMs using Spring AI and Spring Boot.. 핵심 구조 신호는 Java, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
