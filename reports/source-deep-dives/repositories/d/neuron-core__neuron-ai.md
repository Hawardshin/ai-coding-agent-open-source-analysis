# neuron-core/neuron-ai 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

The PHP Agentic Framework to build production-ready AI driven applications. Connect components (LLMs, vector DBs, memory) to agents that can interact with your data.

## 요약

- 조사 단위: `sources/neuron-core__neuron-ai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 759 files, 144 directories, depth score 104, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/RAG/RAGTest.php, src/RAG/AGENTS.md, src/RAG/Document.php이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | neuron-core/neuron-ai |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | PHP |
| Stars | 1966 |
| Forks | 218 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/neuron-core__neuron-ai](../../../../sources/neuron-core__neuron-ai) |
| 기존 보고서 | [reports/global-trending/repositories/neuron-core__neuron-ai.md](../../../global-trending/repositories/neuron-core__neuron-ai.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 759 / 144 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, bin, docs, examples, skills, src, tests |
| 상위 확장자 | .php: 699, .md: 28, .stub: 8, (none): 7, .yml: 4, .png: 3, .json: 2, .pdf: 2, .txt: 2, .dist: 1, .embeddings: 1, .example: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 83 |
| src | source boundary | 62 |
| docs | documentation surface | 4 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| examples | top-level component | 1 |
| skills | top-level component | 1 |


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
| retrieval | [tests/RAG/RAGTest.php](../../../../sources/neuron-core__neuron-ai/tests/RAG/RAGTest.php) | retrieval signal |
| retrieval | [src/RAG/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/RAG/AGENTS.md) | retrieval signal |
| retrieval | [src/RAG/Document.php](../../../../sources/neuron-core__neuron-ai/src/RAG/Document.php) | retrieval signal |
| retrieval | [src/RAG/RAG.php](../../../../sources/neuron-core__neuron-ai/src/RAG/RAG.php) | retrieval signal |
| entrypoints | [bin/neuron](../../../../sources/neuron-core__neuron-ai/bin/neuron) | entrypoints signal |
| docs | [README.md](../../../../sources/neuron-core__neuron-ai/README.md) | docs signal |
| docs | [docs/images/inspector.png](../../../../sources/neuron-core__neuron-ai/docs/images/inspector.png) | docs signal |
| docs | [docs/images/workflow.png](../../../../sources/neuron-core__neuron-ai/docs/images/workflow.png) | docs signal |
| docs | [docs/images/youtube.png](../../../../sources/neuron-core__neuron-ai/docs/images/youtube.png) | docs signal |
| eval | [tests/ArrayPropertyTest.php](../../../../sources/neuron-core__neuron-ai/tests/ArrayPropertyTest.php) | eval signal |
| eval | [tests/DeserializerTest.php](../../../../sources/neuron-core__neuron-ai/tests/DeserializerTest.php) | eval signal |
| eval | [tests/ExtractorTest.php](../../../../sources/neuron-core__neuron-ai/tests/ExtractorTest.php) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [bin/neuron](../../../../sources/neuron-core__neuron-ai/bin/neuron) |
| agentRuntime | 284 | [AGENTS.md](../../../../sources/neuron-core__neuron-ai/AGENTS.md)<br>[tests/Workflow/ApprovalRequestTest.php](../../../../sources/neuron-core__neuron-ai/tests/Workflow/ApprovalRequestTest.php)<br>[tests/Workflow/AsyncWorkflowTest.php](../../../../sources/neuron-core__neuron-ai/tests/Workflow/AsyncWorkflowTest.php)<br>[tests/Workflow/GlobalMiddlewareMethodTest.php](../../../../sources/neuron-core__neuron-ai/tests/Workflow/GlobalMiddlewareMethodTest.php)<br>[tests/Workflow/MermaidExporterTest.php](../../../../sources/neuron-core__neuron-ai/tests/Workflow/MermaidExporterTest.php)<br>[tests/Workflow/NodeTest.php](../../../../sources/neuron-core__neuron-ai/tests/Workflow/NodeTest.php)<br>[tests/Workflow/WorkflowMiddlewareTest.php](../../../../sources/neuron-core__neuron-ai/tests/Workflow/WorkflowMiddlewareTest.php)<br>[tests/Workflow/WorkflowStreamTest.php](../../../../sources/neuron-core__neuron-ai/tests/Workflow/WorkflowStreamTest.php) |
| mcp | 11 | [tests/MCP/McpConnectorTest.php](../../../../sources/neuron-core__neuron-ai/tests/MCP/McpConnectorTest.php)<br>[tests/MCP/StreamableHttpTransportTest.php](../../../../sources/neuron-core__neuron-ai/tests/MCP/StreamableHttpTransportTest.php)<br>[src/MCP/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/MCP/AGENTS.md)<br>[src/MCP/CallableMcpTool.php](../../../../sources/neuron-core__neuron-ai/src/MCP/CallableMcpTool.php)<br>[src/MCP/McpClient.php](../../../../sources/neuron-core__neuron-ai/src/MCP/McpClient.php)<br>[src/MCP/McpConnector.php](../../../../sources/neuron-core__neuron-ai/src/MCP/McpConnector.php)<br>[src/MCP/McpException.php](../../../../sources/neuron-core__neuron-ai/src/MCP/McpException.php)<br>[src/MCP/McpTransportInterface.php](../../../../sources/neuron-core__neuron-ai/src/MCP/McpTransportInterface.php) |
| retrieval | 67 | [tests/RAG/RAGTest.php](../../../../sources/neuron-core__neuron-ai/tests/RAG/RAGTest.php)<br>[src/RAG/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/RAG/AGENTS.md)<br>[src/RAG/Document.php](../../../../sources/neuron-core__neuron-ai/src/RAG/Document.php)<br>[src/RAG/RAG.php](../../../../sources/neuron-core__neuron-ai/src/RAG/RAG.php)<br>[src/RAG/ResolveEmbeddingProvider.php](../../../../sources/neuron-core__neuron-ai/src/RAG/ResolveEmbeddingProvider.php)<br>[src/RAG/ResolveRetrieval.php](../../../../sources/neuron-core__neuron-ai/src/RAG/ResolveRetrieval.php)<br>[src/RAG/ResolveVectorStore.php](../../../../sources/neuron-core__neuron-ai/src/RAG/ResolveVectorStore.php)<br>[src/RAG/VectorSimilarity.php](../../../../sources/neuron-core__neuron-ai/src/RAG/VectorSimilarity.php) |
| spec | 0 | 명확하지 않음 |
| eval | 292 | [tests/ArrayPropertyTest.php](../../../../sources/neuron-core__neuron-ai/tests/ArrayPropertyTest.php)<br>[tests/DeserializerTest.php](../../../../sources/neuron-core__neuron-ai/tests/DeserializerTest.php)<br>[tests/ExtractorTest.php](../../../../sources/neuron-core__neuron-ai/tests/ExtractorTest.php)<br>[tests/JsonSchemaTest.php](../../../../sources/neuron-core__neuron-ai/tests/JsonSchemaTest.php)<br>[tests/NeuronAITest.php](../../../../sources/neuron-core__neuron-ai/tests/NeuronAITest.php)<br>[tests/ObjectPropertyTest.php](../../../../sources/neuron-core__neuron-ai/tests/ObjectPropertyTest.php)<br>[tests/UniqueIdGeneratorTest.php](../../../../sources/neuron-core__neuron-ai/tests/UniqueIdGeneratorTest.php)<br>[tests/ValidationTest.php](../../../../sources/neuron-core__neuron-ai/tests/ValidationTest.php) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/phpstan.yml](../../../../sources/neuron-core__neuron-ai/.github/workflows/phpstan.yml)<br>[.github/workflows/tests.yml](../../../../sources/neuron-core__neuron-ai/.github/workflows/tests.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/neuron-core__neuron-ai/docker-compose.yml)<br>[Dockerfile](../../../../sources/neuron-core__neuron-ai/Dockerfile) |
| instruction | 15 | [AGENTS.md](../../../../sources/neuron-core__neuron-ai/AGENTS.md)<br>[CLAUDE.md](../../../../sources/neuron-core__neuron-ai/CLAUDE.md)<br>[src/Workflow/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/Workflow/AGENTS.md)<br>[src/Tools/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/Tools/AGENTS.md)<br>[src/Testing/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/Testing/AGENTS.md)<br>[src/StructuredOutput/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/StructuredOutput/AGENTS.md)<br>[src/RAG/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/RAG/AGENTS.md)<br>[src/Providers/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/Providers/AGENTS.md) |
| docs | 4 | [README.md](../../../../sources/neuron-core__neuron-ai/README.md)<br>[docs/images/inspector.png](../../../../sources/neuron-core__neuron-ai/docs/images/inspector.png)<br>[docs/images/workflow.png](../../../../sources/neuron-core__neuron-ai/docs/images/workflow.png)<br>[docs/images/youtube.png](../../../../sources/neuron-core__neuron-ai/docs/images/youtube.png) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 292 | [tests/ArrayPropertyTest.php](../../../../sources/neuron-core__neuron-ai/tests/ArrayPropertyTest.php)<br>[tests/DeserializerTest.php](../../../../sources/neuron-core__neuron-ai/tests/DeserializerTest.php)<br>[tests/ExtractorTest.php](../../../../sources/neuron-core__neuron-ai/tests/ExtractorTest.php)<br>[tests/JsonSchemaTest.php](../../../../sources/neuron-core__neuron-ai/tests/JsonSchemaTest.php)<br>[tests/NeuronAITest.php](../../../../sources/neuron-core__neuron-ai/tests/NeuronAITest.php)<br>[tests/ObjectPropertyTest.php](../../../../sources/neuron-core__neuron-ai/tests/ObjectPropertyTest.php) |
| CI workflow | 2 | [.github/workflows/phpstan.yml](../../../../sources/neuron-core__neuron-ai/.github/workflows/phpstan.yml)<br>[.github/workflows/tests.yml](../../../../sources/neuron-core__neuron-ai/.github/workflows/tests.yml) |
| 컨테이너/배포 | 2 | [docker-compose.yml](../../../../sources/neuron-core__neuron-ai/docker-compose.yml)<br>[Dockerfile](../../../../sources/neuron-core__neuron-ai/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 15 | [AGENTS.md](../../../../sources/neuron-core__neuron-ai/AGENTS.md)<br>[CLAUDE.md](../../../../sources/neuron-core__neuron-ai/CLAUDE.md)<br>[src/Workflow/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/Workflow/AGENTS.md)<br>[src/Tools/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/Tools/AGENTS.md)<br>[src/Testing/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/Testing/AGENTS.md)<br>[src/StructuredOutput/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/StructuredOutput/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/RAG/RAGTest.php`, `src/RAG/AGENTS.md`, `src/RAG/Document.php`.
2. entrypoint를 따라 실행 흐름 확인: `bin/neuron`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/Workflow/ApprovalRequestTest.php`, `tests/Workflow/AsyncWorkflowTest.php`.
4. retrieval/memory/indexing 확인: `tests/RAG/RAGTest.php`, `src/RAG/AGENTS.md`, `src/RAG/Document.php`.
5. test/eval 파일로 동작 검증: `tests/ArrayPropertyTest.php`, `tests/DeserializerTest.php`, `tests/ExtractorTest.php`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 The PHP Agentic Framework to build production ready AI driven applications. Connect components LLMs, vector DBs, memory . 핵심 구조 신호는 PHP, Dockerfile, docker-compose.yml, README.md, AGENTS.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
