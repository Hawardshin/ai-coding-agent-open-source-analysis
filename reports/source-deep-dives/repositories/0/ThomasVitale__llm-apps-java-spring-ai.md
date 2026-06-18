# ThomasVitale/llm-apps-java-spring-ai 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Samples showing how to build Java applications powered by Generative AI and LLMs using Spring AI and Spring Boot.

## 요약

- 조사 단위: `sources/ThomasVitale__llm-apps-java-spring-ai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 446 files, 849 directories, depth score 72, key references 3개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 ci=.github/workflows/commit-stage.yml이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 3개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | ThomasVitale/llm-apps-java-spring-ai |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Java |
| Stars | 753 |
| Forks | 178 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/ThomasVitale__llm-apps-java-spring-ai](../../../../sources/ThomasVitale__llm-apps-java-spring-ai) |
| 기존 보고서 | [reports/global-trending/repositories/ThomasVitale__llm-apps-java-spring-ai.md](../../../global-trending/repositories/ThomasVitale__llm-apps-java-spring-ai.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 446 / 849 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .github, buildSrc, data-ingestion, gradle, mcp, models, observability, patterns, rag, use-cases |
| 상위 확장자 | .java: 238, .md: 70, .gradle: 54, .yml: 54, .json: 4, .st: 4, .txt: 4, (none): 4, .mp3: 3, .pdf: 3, .png: 3, .properties: 2 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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
| ci | [.github/workflows/commit-stage.yml](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/.github/workflows/commit-stage.yml) | ci signal |
| eval | [use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassificationApplicationTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassificationApplicationTests.java) | eval support |
| eval | [use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassifierTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassifierTests.java) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 58 | [patterns/tool-calling/tool-calling-openai/build.gradle](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/tool-calling/tool-calling-openai/build.gradle)<br>[patterns/tool-calling/tool-calling-openai/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/tool-calling/tool-calling-openai/README.md)<br>[patterns/tool-calling/tool-calling-openai/src/test/java/com/thomasvitale/ai/spring/ToolCallingOpenAiApplicationTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/tool-calling/tool-calling-openai/src/test/java/com/thomasvitale/ai/spring/ToolCallingOpenAiApplicationTests.java)<br>[patterns/tool-calling/tool-calling-openai/src/main/resources/application.yml](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/tool-calling/tool-calling-openai/src/main/resources/application.yml)<br>[patterns/tool-calling/tool-calling-openai/src/main/java/com/thomasvitale/ai/spring/BookService.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/tool-calling/tool-calling-openai/src/main/java/com/thomasvitale/ai/spring/BookService.java)<br>[patterns/tool-calling/tool-calling-openai/src/main/java/com/thomasvitale/ai/spring/ChatController.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/tool-calling/tool-calling-openai/src/main/java/com/thomasvitale/ai/spring/ChatController.java)<br>[patterns/tool-calling/tool-calling-openai/src/main/java/com/thomasvitale/ai/spring/Functions.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/tool-calling/tool-calling-openai/src/main/java/com/thomasvitale/ai/spring/Functions.java)<br>[patterns/tool-calling/tool-calling-openai/src/main/java/com/thomasvitale/ai/spring/ToolCallingOpenAiApplication.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/tool-calling/tool-calling-openai/src/main/java/com/thomasvitale/ai/spring/ToolCallingOpenAiApplication.java) |
| mcp | 7 | [mcp/mcp-clients/mcp-brave/build.gradle](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/mcp/mcp-clients/mcp-brave/build.gradle)<br>[mcp/mcp-clients/mcp-brave/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/mcp/mcp-clients/mcp-brave/README.md)<br>[mcp/mcp-clients/mcp-brave/src/test/java/com/thomasvitale/ai/spring/McpBraveApplicationTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/mcp/mcp-clients/mcp-brave/src/test/java/com/thomasvitale/ai/spring/McpBraveApplicationTests.java)<br>[mcp/mcp-clients/mcp-brave/src/main/resources/application.yml](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/mcp/mcp-clients/mcp-brave/src/main/resources/application.yml)<br>[mcp/mcp-clients/mcp-brave/src/main/java/com/thomasvitale/ai/spring/ChatController.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/mcp/mcp-clients/mcp-brave/src/main/java/com/thomasvitale/ai/spring/ChatController.java)<br>[mcp/mcp-clients/mcp-brave/src/main/java/com/thomasvitale/ai/spring/McpBraveApplication.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/mcp/mcp-clients/mcp-brave/src/main/java/com/thomasvitale/ai/spring/McpBraveApplication.java)<br>[mcp/mcp-clients/mcp-brave/src/main/java/com/thomasvitale/ai/spring/model/ChatModelController.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/mcp/mcp-clients/mcp-brave/src/main/java/com/thomasvitale/ai/spring/model/ChatModelController.java) |
| retrieval | 105 | [rag/rag-sequential/rag-naive/build.gradle](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-naive/build.gradle)<br>[rag/rag-sequential/rag-naive/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-naive/README.md)<br>[rag/rag-sequential/rag-naive/src/test/java/com/thomasvitale/ai/spring/RagNaiveTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-naive/src/test/java/com/thomasvitale/ai/spring/RagNaiveTests.java)<br>[rag/rag-sequential/rag-naive/src/main/resources/application.yml](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-naive/src/main/resources/application.yml)<br>[rag/rag-sequential/rag-naive/src/main/resources/documents/story1.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-naive/src/main/resources/documents/story1.md)<br>[rag/rag-sequential/rag-naive/src/main/resources/documents/story2.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-naive/src/main/resources/documents/story2.md)<br>[rag/rag-sequential/rag-naive/src/main/java/com/thomasvitale/ai/spring/IngestionPipeline.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-naive/src/main/java/com/thomasvitale/ai/spring/IngestionPipeline.java)<br>[rag/rag-sequential/rag-naive/src/main/java/com/thomasvitale/ai/spring/RagControllerEmptyContext.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-naive/src/main/java/com/thomasvitale/ai/spring/RagControllerEmptyContext.java) |
| spec | 0 | 명확하지 않음 |
| eval | 86 | [use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassificationApplicationTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassificationApplicationTests.java)<br>[use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassifierTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassifierTests.java)<br>[use-cases/structured-data-extraction/src/test/java/com/thomasvitale/ai/spring/StructuredDataExtractionTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/structured-data-extraction/src/test/java/com/thomasvitale/ai/spring/StructuredDataExtractionTests.java)<br>[use-cases/semantic-search/src/test/java/com/thomasvitale/ai/spring/SemanticSearchTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/semantic-search/src/test/java/com/thomasvitale/ai/spring/SemanticSearchTests.java)<br>[use-cases/question-answering/src/test/java/com/thomasvitale/ai/spring/QuestionAnsweringTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/question-answering/src/test/java/com/thomasvitale/ai/spring/QuestionAnsweringTests.java)<br>[use-cases/chatbot/src/test/java/com/thomasvitale/ai/spring/ChatbotTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/chatbot/src/test/java/com/thomasvitale/ai/spring/ChatbotTests.java)<br>[rag/rag-sequential/rag-naive/src/test/java/com/thomasvitale/ai/spring/RagNaiveTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-naive/src/test/java/com/thomasvitale/ai/spring/RagNaiveTests.java)<br>[rag/rag-sequential/rag-advanced/src/test/java/com/thomasvitale/ai/spring/RagAdvancedTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-advanced/src/test/java/com/thomasvitale/ai/spring/RagAdvancedTests.java) |
| security | 6 | [patterns/memory/memory-spring-security/build.gradle](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/build.gradle)<br>[patterns/memory/memory-spring-security/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/README.md)<br>[patterns/memory/memory-spring-security/src/test/java/com/thomasvitale/ai/spring/MemorySpringSecurityApplicationTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/src/test/java/com/thomasvitale/ai/spring/MemorySpringSecurityApplicationTests.java)<br>[patterns/memory/memory-spring-security/src/main/resources/application.yml](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/src/main/resources/application.yml)<br>[patterns/memory/memory-spring-security/src/main/java/com/thomasvitale/ai/spring/MemoryController.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/src/main/java/com/thomasvitale/ai/spring/MemoryController.java)<br>[patterns/memory/memory-spring-security/src/main/java/com/thomasvitale/ai/spring/MemorySpringSecurityApplication.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/src/main/java/com/thomasvitale/ai/spring/MemorySpringSecurityApplication.java) |
| ci | 1 | [.github/workflows/commit-stage.yml](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/.github/workflows/commit-stage.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 53 | [README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/README.md)<br>[use-cases/text-classification/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/text-classification/README.md)<br>[use-cases/structured-data-extraction/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/structured-data-extraction/README.md)<br>[use-cases/semantic-search/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/semantic-search/README.md)<br>[use-cases/question-answering/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/question-answering/README.md)<br>[use-cases/chatbot/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/chatbot/README.md)<br>[rag/rag-sequential/rag-naive/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-naive/README.md)<br>[rag/rag-sequential/rag-advanced/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/rag/rag-sequential/rag-advanced/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 86 | [use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassificationApplicationTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassificationApplicationTests.java)<br>[use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassifierTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassifierTests.java)<br>[use-cases/structured-data-extraction/src/test/java/com/thomasvitale/ai/spring/StructuredDataExtractionTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/structured-data-extraction/src/test/java/com/thomasvitale/ai/spring/StructuredDataExtractionTests.java)<br>[use-cases/semantic-search/src/test/java/com/thomasvitale/ai/spring/SemanticSearchTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/semantic-search/src/test/java/com/thomasvitale/ai/spring/SemanticSearchTests.java)<br>[use-cases/question-answering/src/test/java/com/thomasvitale/ai/spring/QuestionAnsweringTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/question-answering/src/test/java/com/thomasvitale/ai/spring/QuestionAnsweringTests.java)<br>[use-cases/chatbot/src/test/java/com/thomasvitale/ai/spring/ChatbotTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/use-cases/chatbot/src/test/java/com/thomasvitale/ai/spring/ChatbotTests.java) |
| CI workflow | 1 | [.github/workflows/commit-stage.yml](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/.github/workflows/commit-stage.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 6 | [patterns/memory/memory-spring-security/build.gradle](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/build.gradle)<br>[patterns/memory/memory-spring-security/README.md](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/README.md)<br>[patterns/memory/memory-spring-security/src/test/java/com/thomasvitale/ai/spring/MemorySpringSecurityApplicationTests.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/src/test/java/com/thomasvitale/ai/spring/MemorySpringSecurityApplicationTests.java)<br>[patterns/memory/memory-spring-security/src/main/resources/application.yml](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/src/main/resources/application.yml)<br>[patterns/memory/memory-spring-security/src/main/java/com/thomasvitale/ai/spring/MemoryController.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/src/main/java/com/thomasvitale/ai/spring/MemoryController.java)<br>[patterns/memory/memory-spring-security/src/main/java/com/thomasvitale/ai/spring/MemorySpringSecurityApplication.java](../../../../sources/ThomasVitale__llm-apps-java-spring-ai/patterns/memory/memory-spring-security/src/main/java/com/thomasvitale/ai/spring/MemorySpringSecurityApplication.java) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `.github/workflows/commit-stage.yml`, `use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassificationApplicationTests.java`, `use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassifierTests.java`.
2. agent/tool runtime 매핑: `patterns/tool-calling/tool-calling-openai/build.gradle`, `patterns/tool-calling/tool-calling-openai/README.md`, `patterns/tool-calling/tool-calling-openai/src/test/java/com/thomasvitale/ai/spring/ToolCallingOpenAiApplicationTests.java`.
3. retrieval/memory/indexing 확인: `rag/rag-sequential/rag-naive/build.gradle`, `rag/rag-sequential/rag-naive/README.md`, `rag/rag-sequential/rag-naive/src/test/java/com/thomasvitale/ai/spring/RagNaiveTests.java`.
4. test/eval 파일로 동작 검증: `use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassificationApplicationTests.java`, `use-cases/text-classification/src/test/java/com/thomasvitale/ai/spring/TextClassifierTests.java`, `use-cases/structured-data-extraction/src/test/java/com/thomasvitale/ai/spring/StructuredDataExtractionTests.java`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Samples showing how to build Java applications powered by Generative AI and LLMs using Spring AI and Spring Boot.. 핵심 구조 신호는 Java, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
