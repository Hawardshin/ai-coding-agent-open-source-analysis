# neuron-core/neuron-ai Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

The PHP Agentic Framework to build production-ready AI driven applications. Connect components (LLMs, vector DBs, memory) to agents that can interact with your data.

## 요약

- 조사 단위: `sources/neuron-core__neuron-ai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 759 files, 144 directories, depth score 110, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/RAG/RAGTest.php, src/RAG/AGENTS.md, src/RAG/Document.php이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | neuron-core/neuron-ai |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | PHP |
| Stars | 1966 |
| Forks | 218 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/neuron-core__neuron-ai](../../../../sources/neuron-core__neuron-ai) |
| Existing report | [reports/global-trending/repositories/neuron-core__neuron-ai.md](../../../global-trending/repositories/neuron-core__neuron-ai.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 759 / 144 |
| Max observed depth | 6 |
| Top directories | .github, bin, docs, examples, skills, src, tests |
| Top extensions | .php: 699, .md: 28, .stub: 8, (none): 7, .yml: 4, .png: 3, .json: 2, .pdf: 2, .txt: 2, .dist: 1, .embeddings: 1, .example: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 83 |
| src | source boundary | 62 |
| docs | documentation surface | 4 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| examples | top-level component | 1 |
| skills | top-level component | 1 |


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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [bin/neuron](../../../../sources/neuron-core__neuron-ai/bin/neuron) |
| agentRuntime | 284 | [AGENTS.md](../../../../sources/neuron-core__neuron-ai/AGENTS.md)<br>[tests/Workflow/ApprovalRequestTest.php](../../../../sources/neuron-core__neuron-ai/tests/Workflow/ApprovalRequestTest.php)<br>[tests/Workflow/AsyncWorkflowTest.php](../../../../sources/neuron-core__neuron-ai/tests/Workflow/AsyncWorkflowTest.php)<br>[tests/Workflow/GlobalMiddlewareMethodTest.php](../../../../sources/neuron-core__neuron-ai/tests/Workflow/GlobalMiddlewareMethodTest.php)<br>[tests/Workflow/MermaidExporterTest.php](../../../../sources/neuron-core__neuron-ai/tests/Workflow/MermaidExporterTest.php)<br>[tests/Workflow/NodeTest.php](../../../../sources/neuron-core__neuron-ai/tests/Workflow/NodeTest.php)<br>[tests/Workflow/WorkflowMiddlewareTest.php](../../../../sources/neuron-core__neuron-ai/tests/Workflow/WorkflowMiddlewareTest.php)<br>[tests/Workflow/WorkflowStreamTest.php](../../../../sources/neuron-core__neuron-ai/tests/Workflow/WorkflowStreamTest.php) |
| mcp | 11 | [tests/MCP/McpConnectorTest.php](../../../../sources/neuron-core__neuron-ai/tests/MCP/McpConnectorTest.php)<br>[tests/MCP/StreamableHttpTransportTest.php](../../../../sources/neuron-core__neuron-ai/tests/MCP/StreamableHttpTransportTest.php)<br>[src/MCP/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/MCP/AGENTS.md)<br>[src/MCP/CallableMcpTool.php](../../../../sources/neuron-core__neuron-ai/src/MCP/CallableMcpTool.php)<br>[src/MCP/McpClient.php](../../../../sources/neuron-core__neuron-ai/src/MCP/McpClient.php)<br>[src/MCP/McpConnector.php](../../../../sources/neuron-core__neuron-ai/src/MCP/McpConnector.php)<br>[src/MCP/McpException.php](../../../../sources/neuron-core__neuron-ai/src/MCP/McpException.php)<br>[src/MCP/McpTransportInterface.php](../../../../sources/neuron-core__neuron-ai/src/MCP/McpTransportInterface.php) |
| retrieval | 67 | [tests/RAG/RAGTest.php](../../../../sources/neuron-core__neuron-ai/tests/RAG/RAGTest.php)<br>[src/RAG/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/RAG/AGENTS.md)<br>[src/RAG/Document.php](../../../../sources/neuron-core__neuron-ai/src/RAG/Document.php)<br>[src/RAG/RAG.php](../../../../sources/neuron-core__neuron-ai/src/RAG/RAG.php)<br>[src/RAG/ResolveEmbeddingProvider.php](../../../../sources/neuron-core__neuron-ai/src/RAG/ResolveEmbeddingProvider.php)<br>[src/RAG/ResolveRetrieval.php](../../../../sources/neuron-core__neuron-ai/src/RAG/ResolveRetrieval.php)<br>[src/RAG/ResolveVectorStore.php](../../../../sources/neuron-core__neuron-ai/src/RAG/ResolveVectorStore.php)<br>[src/RAG/VectorSimilarity.php](../../../../sources/neuron-core__neuron-ai/src/RAG/VectorSimilarity.php) |
| spec | 0 | not obvious |
| eval | 292 | [tests/ArrayPropertyTest.php](../../../../sources/neuron-core__neuron-ai/tests/ArrayPropertyTest.php)<br>[tests/DeserializerTest.php](../../../../sources/neuron-core__neuron-ai/tests/DeserializerTest.php)<br>[tests/ExtractorTest.php](../../../../sources/neuron-core__neuron-ai/tests/ExtractorTest.php)<br>[tests/JsonSchemaTest.php](../../../../sources/neuron-core__neuron-ai/tests/JsonSchemaTest.php)<br>[tests/NeuronAITest.php](../../../../sources/neuron-core__neuron-ai/tests/NeuronAITest.php)<br>[tests/ObjectPropertyTest.php](../../../../sources/neuron-core__neuron-ai/tests/ObjectPropertyTest.php)<br>[tests/UniqueIdGeneratorTest.php](../../../../sources/neuron-core__neuron-ai/tests/UniqueIdGeneratorTest.php)<br>[tests/ValidationTest.php](../../../../sources/neuron-core__neuron-ai/tests/ValidationTest.php) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/phpstan.yml](../../../../sources/neuron-core__neuron-ai/.github/workflows/phpstan.yml)<br>[.github/workflows/tests.yml](../../../../sources/neuron-core__neuron-ai/.github/workflows/tests.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/neuron-core__neuron-ai/docker-compose.yml)<br>[Dockerfile](../../../../sources/neuron-core__neuron-ai/Dockerfile) |
| instruction | 15 | [AGENTS.md](../../../../sources/neuron-core__neuron-ai/AGENTS.md)<br>[CLAUDE.md](../../../../sources/neuron-core__neuron-ai/CLAUDE.md)<br>[src/Workflow/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/Workflow/AGENTS.md)<br>[src/Tools/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/Tools/AGENTS.md)<br>[src/Testing/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/Testing/AGENTS.md)<br>[src/StructuredOutput/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/StructuredOutput/AGENTS.md)<br>[src/RAG/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/RAG/AGENTS.md)<br>[src/Providers/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/Providers/AGENTS.md) |
| docs | 4 | [README.md](../../../../sources/neuron-core__neuron-ai/README.md)<br>[docs/images/inspector.png](../../../../sources/neuron-core__neuron-ai/docs/images/inspector.png)<br>[docs/images/workflow.png](../../../../sources/neuron-core__neuron-ai/docs/images/workflow.png)<br>[docs/images/youtube.png](../../../../sources/neuron-core__neuron-ai/docs/images/youtube.png) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 292 | [tests/ArrayPropertyTest.php](../../../../sources/neuron-core__neuron-ai/tests/ArrayPropertyTest.php)<br>[tests/DeserializerTest.php](../../../../sources/neuron-core__neuron-ai/tests/DeserializerTest.php)<br>[tests/ExtractorTest.php](../../../../sources/neuron-core__neuron-ai/tests/ExtractorTest.php)<br>[tests/JsonSchemaTest.php](../../../../sources/neuron-core__neuron-ai/tests/JsonSchemaTest.php)<br>[tests/NeuronAITest.php](../../../../sources/neuron-core__neuron-ai/tests/NeuronAITest.php)<br>[tests/ObjectPropertyTest.php](../../../../sources/neuron-core__neuron-ai/tests/ObjectPropertyTest.php) |
| CI workflows | 2 | [.github/workflows/phpstan.yml](../../../../sources/neuron-core__neuron-ai/.github/workflows/phpstan.yml)<br>[.github/workflows/tests.yml](../../../../sources/neuron-core__neuron-ai/.github/workflows/tests.yml) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/neuron-core__neuron-ai/docker-compose.yml)<br>[Dockerfile](../../../../sources/neuron-core__neuron-ai/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 15 | [AGENTS.md](../../../../sources/neuron-core__neuron-ai/AGENTS.md)<br>[CLAUDE.md](../../../../sources/neuron-core__neuron-ai/CLAUDE.md)<br>[src/Workflow/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/Workflow/AGENTS.md)<br>[src/Tools/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/Tools/AGENTS.md)<br>[src/Testing/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/Testing/AGENTS.md)<br>[src/StructuredOutput/AGENTS.md](../../../../sources/neuron-core__neuron-ai/src/StructuredOutput/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `tests/RAG/RAGTest.php`, `src/RAG/AGENTS.md`, `src/RAG/Document.php`.
2. Trace execution through entrypoints: `bin/neuron`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/Workflow/ApprovalRequestTest.php`, `tests/Workflow/AsyncWorkflowTest.php`.
4. Inspect retrieval/memory/indexing through: `tests/RAG/RAGTest.php`, `src/RAG/AGENTS.md`, `src/RAG/Document.php`.
5. Verify behavior through test/eval files: `tests/ArrayPropertyTest.php`, `tests/DeserializerTest.php`, `tests/ExtractorTest.php`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 The PHP Agentic Framework to build production ready AI driven applications. Connect components LLMs, vector DBs, memory . 핵심 구조 신호는 PHP, Dockerfile, docker-compose.yml, README.md, AGENTS.md, CLAUDE.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
