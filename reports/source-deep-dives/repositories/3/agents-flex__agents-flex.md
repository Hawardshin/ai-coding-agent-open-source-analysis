# agents-flex/agents-flex Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Agents-flex is A Lightweight Java AI Application Development Framework.

## 요약

- 조사 단위: `sources/agents-flex__agents-flex` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 625 files, 660 directories, depth score 84, key references 5개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=docs/package.json, demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/pyproject.toml, demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/uv.lock이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | agents-flex/agents-flex |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Java |
| Stars | 1005 |
| Forks | 128 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/agents-flex__agents-flex](../../../../sources/agents-flex__agents-flex) |
| Existing report | [reports/global-trending/repositories/agents-flex__agents-flex.md](../../../global-trending/repositories/agents-flex__agents-flex.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 625 / 660 |
| Max observed depth | 12 |
| Top directories | .github, agents-flex-bom, agents-flex-chat, agents-flex-core, agents-flex-embedding, agents-flex-image, agents-flex-mcp, agents-flex-rerank, agents-flex-search-engine, agents-flex-skills, agents-flex-spring-boot-starter, agents-flex-store, agents-flex-subagent, agents-flex-text2sql, agents-flex-tool, agents-flex-websearch, agents-flex-wiki, demos, docs, testresource |
| Top extensions | .java: 413, .md: 110, .xml: 60, .png: 9, .py: 9, (none): 4, .yml: 3, .jpg: 2, .json: 2, .ts: 2, .css: 1, .doc: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 79 |
| .github | ci surface | 1 |
| agents-flex-bom | top-level component | 1 |
| agents-flex-chat | top-level component | 1 |
| agents-flex-core | top-level component | 1 |
| agents-flex-embedding | top-level component | 1 |
| agents-flex-image | top-level component | 1 |
| agents-flex-mcp | top-level component | 1 |
| agents-flex-rerank | top-level component | 1 |
| agents-flex-search-engine | top-level component | 1 |
| agents-flex-skills | top-level component | 1 |
| agents-flex-spring-boot-starter | top-level component | 1 |
| agents-flex-store | top-level component | 1 |
| agents-flex-subagent | top-level component | 1 |
| agents-flex-text2sql | top-level component | 1 |
| agents-flex-tool | top-level component | 1 |
| agents-flex-websearch | source boundary | 1 |
| agents-flex-wiki | top-level component | 1 |


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
| config | [docs/package.json](../../../../sources/agents-flex__agents-flex/docs/package.json) | config signal |
| config | [demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/pyproject.toml](../../../../sources/agents-flex__agents-flex/demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/pyproject.toml) | config signal |
| config | [demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/uv.lock](../../../../sources/agents-flex__agents-flex/demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/uv.lock) | config signal |
| eval | [docs/zh/observability/model.md](../../../../sources/agents-flex__agents-flex/docs/zh/observability/model.md) | eval support |
| eval | [docs/zh/observability/observability.md](../../../../sources/agents-flex__agents-flex/docs/zh/observability/observability.md) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 491 | [docs/zh/util/tool-builder.md](../../../../sources/agents-flex__agents-flex/docs/zh/util/tool-builder.md)<br>[docs/zh/util/tool-scanner.md](../../../../sources/agents-flex__agents-flex/docs/zh/util/tool-scanner.md)<br>[docs/zh/observability/tool.md](../../../../sources/agents-flex__agents-flex/docs/zh/observability/tool.md)<br>[docs/zh/core/memory.md](../../../../sources/agents-flex__agents-flex/docs/zh/core/memory.md)<br>[docs/zh/chat/memory.md](../../../../sources/agents-flex__agents-flex/docs/zh/chat/memory.md)<br>[docs/zh/chat/skills.md](../../../../sources/agents-flex__agents-flex/docs/zh/chat/skills.md)<br>[docs/zh/chat/tool-build.md](../../../../sources/agents-flex__agents-flex/docs/zh/chat/tool-build.md)<br>[docs/zh/chat/tool-interceptor.md](../../../../sources/agents-flex__agents-flex/docs/zh/chat/tool-interceptor.md) |
| mcp | 15 | [docs/zh/chat/mcp.md](../../../../sources/agents-flex__agents-flex/docs/zh/chat/mcp.md)<br>[agents-flex-mcp/pom.xml](../../../../sources/agents-flex__agents-flex/agents-flex-mcp/pom.xml)<br>[agents-flex-mcp/src/test/java/com/agentsflex/mcp/client/McpClientManagerTest.java](../../../../sources/agents-flex__agents-flex/agents-flex-mcp/src/test/java/com/agentsflex/mcp/client/McpClientManagerTest.java)<br>[agents-flex-mcp/src/test/java/com/agentsflex/mcp/client/MDLMcpClientManagerTest.java](../../../../sources/agents-flex__agents-flex/agents-flex-mcp/src/test/java/com/agentsflex/mcp/client/MDLMcpClientManagerTest.java)<br>[agents-flex-mcp/src/main/resources/mcp-servers.json](../../../../sources/agents-flex__agents-flex/agents-flex-mcp/src/main/resources/mcp-servers.json)<br>[agents-flex-mcp/src/main/java/com/agentsflex/mcp/client/CloseableTransport.java](../../../../sources/agents-flex__agents-flex/agents-flex-mcp/src/main/java/com/agentsflex/mcp/client/CloseableTransport.java)<br>[agents-flex-mcp/src/main/java/com/agentsflex/mcp/client/HttpSseTransportFactory.java](../../../../sources/agents-flex__agents-flex/agents-flex-mcp/src/main/java/com/agentsflex/mcp/client/HttpSseTransportFactory.java)<br>[agents-flex-mcp/src/main/java/com/agentsflex/mcp/client/HttpStreamTransportFactory.java](../../../../sources/agents-flex__agents-flex/agents-flex-mcp/src/main/java/com/agentsflex/mcp/client/HttpStreamTransportFactory.java) |
| retrieval | 61 | [docs/index.md](../../../../sources/agents-flex__agents-flex/docs/index.md)<br>[docs/zh/index.md](../../../../sources/agents-flex__agents-flex/docs/zh/index.md)<br>[docs/zh/samples/chat-with-memory.md](../../../../sources/agents-flex__agents-flex/docs/zh/samples/chat-with-memory.md)<br>[docs/zh/samples/rag.md](../../../../sources/agents-flex__agents-flex/docs/zh/samples/rag.md)<br>[docs/zh/rag/document.md](../../../../sources/agents-flex__agents-flex/docs/zh/rag/document.md)<br>[docs/zh/rag/file2text.md](../../../../sources/agents-flex__agents-flex/docs/zh/rag/file2text.md)<br>[docs/zh/rag/search-engine.md](../../../../sources/agents-flex__agents-flex/docs/zh/rag/search-engine.md)<br>[docs/zh/rag/search-wrapper.md](../../../../sources/agents-flex__agents-flex/docs/zh/rag/search-wrapper.md) |
| spec | 1 | [docs/zh/chat/chat-request-spec-builder.md](../../../../sources/agents-flex__agents-flex/docs/zh/chat/chat-request-spec-builder.md) |
| eval | 53 | [docs/zh/observability/model.md](../../../../sources/agents-flex__agents-flex/docs/zh/observability/model.md)<br>[docs/zh/observability/observability.md](../../../../sources/agents-flex__agents-flex/docs/zh/observability/observability.md)<br>[docs/zh/observability/tool.md](../../../../sources/agents-flex__agents-flex/docs/zh/observability/tool.md)<br>[docs/zh/chat/chat-request-spec-builder.md](../../../../sources/agents-flex__agents-flex/docs/zh/chat/chat-request-spec-builder.md)<br>[demos/skills-demo/src/main/resources/.claude/skills/pdf/scripts/check_bounding_boxes_test.py](../../../../sources/agents-flex__agents-flex/demos/skills-demo/src/main/resources/.claude/skills/pdf/scripts/check_bounding_boxes_test.py)<br>[agents-flex-store/agents-flex-store-vectorexdb/src/test/java/com/agentsflex/store/vectorex/test/Test.java](../../../../sources/agents-flex__agents-flex/agents-flex-store/agents-flex-store-vectorexdb/src/test/java/com/agentsflex/store/vectorex/test/Test.java)<br>[agents-flex-store/agents-flex-store-qdrant/src/test/java/com/agentsflex/store/qdrant/QdrantVectorStoreTest.java](../../../../sources/agents-flex__agents-flex/agents-flex-store/agents-flex-store-qdrant/src/test/java/com/agentsflex/store/qdrant/QdrantVectorStoreTest.java)<br>[agents-flex-store/agents-flex-store-pgvector/src/test/java/com/agentsflex/store/pgvector/PgvectorDbTest.java](../../../../sources/agents-flex__agents-flex/agents-flex-store/agents-flex-store-pgvector/src/test/java/com/agentsflex/store/pgvector/PgvectorDbTest.java) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 107 | [readme_zh.md](../../../../sources/agents-flex__agents-flex/readme_zh.md)<br>[readme.md](../../../../sources/agents-flex__agents-flex/readme.md)<br>[docs/changes.md](../../../../sources/agents-flex__agents-flex/docs/changes.md)<br>[docs/deploy.sh](../../../../sources/agents-flex__agents-flex/docs/deploy.sh)<br>[docs/index.md](../../../../sources/agents-flex__agents-flex/docs/index.md)<br>[docs/package.json](../../../../sources/agents-flex__agents-flex/docs/package.json)<br>[docs/zh/changes.md](../../../../sources/agents-flex__agents-flex/docs/zh/changes.md)<br>[docs/zh/index.md](../../../../sources/agents-flex__agents-flex/docs/zh/index.md) |
| config | 3 | [docs/package.json](../../../../sources/agents-flex__agents-flex/docs/package.json)<br>[demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/pyproject.toml](../../../../sources/agents-flex__agents-flex/demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/pyproject.toml)<br>[demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/uv.lock](../../../../sources/agents-flex__agents-flex/demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 53 | [docs/zh/observability/model.md](../../../../sources/agents-flex__agents-flex/docs/zh/observability/model.md)<br>[docs/zh/observability/observability.md](../../../../sources/agents-flex__agents-flex/docs/zh/observability/observability.md)<br>[docs/zh/observability/tool.md](../../../../sources/agents-flex__agents-flex/docs/zh/observability/tool.md)<br>[docs/zh/chat/chat-request-spec-builder.md](../../../../sources/agents-flex__agents-flex/docs/zh/chat/chat-request-spec-builder.md)<br>[demos/skills-demo/src/main/resources/.claude/skills/pdf/scripts/check_bounding_boxes_test.py](../../../../sources/agents-flex__agents-flex/demos/skills-demo/src/main/resources/.claude/skills/pdf/scripts/check_bounding_boxes_test.py)<br>[agents-flex-store/agents-flex-store-vectorexdb/src/test/java/com/agentsflex/store/vectorex/test/Test.java](../../../../sources/agents-flex__agents-flex/agents-flex-store/agents-flex-store-vectorexdb/src/test/java/com/agentsflex/store/vectorex/test/Test.java) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review; primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `docs/package.json`, `demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/pyproject.toml`, `demos/skills-demo/src/main/resources/.claude/skills/ai-tutor/uv.lock`.
2. Map agent/tool runtime through: `docs/zh/util/tool-builder.md`, `docs/zh/util/tool-scanner.md`, `docs/zh/observability/tool.md`.
3. Inspect retrieval/memory/indexing through: `docs/index.md`, `docs/zh/index.md`, `docs/zh/samples/chat-with-memory.md`.
4. Verify behavior through test/eval files: `docs/zh/observability/model.md`, `docs/zh/observability/observability.md`, `docs/zh/observability/tool.md`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Agents flex is A Lightweight Java AI Application Development Framework.. 핵심 구조 신호는 Java, pom.xml, README.md, LICENSE, tests, ci이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
