# neomjs/neo 코드 레벨 분석

생성일: 2026-06-17T23:31:43.138Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (104) |
| stars | 3206 |
| language | JavaScript |
| tags | rag, knowledge-base, agent-knowledge |
| files/code/source | 18478/2188/1170 |
| tests/ci | 120/23 |
| local path | sources/neomjs__neo |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 2048 | 66 | src/data/TreeStore.mjs:31 * This explicitly sacrifices write performance (O(N) during ingestion) to guarantee maximum read performance |
| Parsing/OCR/document extraction | code | 146 | 6 | apps/devindex/services/Cleanup.mjs:20 * git diff noise and ensure O(1) human readability. |
| Chunking/splitting | code | 2018 | 114 | src/ai/admitWrite.mjs:9 * cross-writer overlap. The result is a plain verdict (`admitted` / `reason` / `conflict`); acting on it — mutate vs |
| Embedding/vector index | code | 1583 | 115 | src/mixin/VdomLifecycle.mjs:145 * Directly embedding one component's full `vdom` object into another's is an anti-pattern |
| Retrieval/search/rerank | code | 2594 | 64 | src/canvas/Sparkline.mjs:450 // Calculate or retrieve cached points |
| Wiki/graph/entity model | code | 438 | 34 | src/form/Container.mjs:470 * This can be useful for create-entity forms which show up "clean" until pressing a submit button. |
| Memory/update lifecycle | code | 7083 | 463 | src/DefaultConfig.mjs:238 * tests that need to verify component lifecycle and DOM output. |
| Provenance/citation/evidence | code | 3015 | 68 | src/ai/TransactionService.mjs:67 * **Identity / provenance**: each op stores `originWriter:{agentId, sessionId}` as |
| Evaluation/observability | code | 2573 | 83 | src/Neo.mjs:58 * proving cold-start neutrality with `ai/scripts/benchmark/setupClass-cold-start.mjs`; it runs |
| Agent/MCP/tool surface | code | 6279 | 301 | src/DefaultConfig.mjs:246 * Set this to true to establish a WebSocket connection to the Neural Link MCP Server. |

## 의존성 신호

- Vector/search store: @chroma-core/default-embed, chromadb
- Persistence/database: better-sqlite3

## 주요 파일 후보

### Ingestion/source intake

- `src/data/TreeStore.mjs`
- `apps/devindex/services/Spider.mjs`
- `apps/legit/view/AddFileDialog.mjs`
- `apps/legit/view/Viewport.mjs`
- `apps/portal/canvas/ServicesCanvas.mjs`
- `src/form/field/FileUpload.mjs`
- `ai/services/ingestion/AdrIngestor.mjs`
- `ai/services/ingestion/ConceptDiscoveryService.mjs`
- `ai/services/ingestion/ConceptIngestor.mjs`
- `ai/services/ingestion/MemorySessionIngestor.mjs`
- `ai/services/knowledge-base/KnowledgeBaseIngestionService.mjs`
- `ai/config.template.mjs`
- ... 6 more

### Parsing/OCR/document extraction

- `apps/devindex/services/Cleanup.mjs`
- `ai/scripts/benchmark/setupClass-cold-start.mjs`
- `ai/services/memory-core/FileSystemIngestor.mjs`
- `ai/mcp/server/knowledge-base/config.template.mjs`
- `ai/services/knowledge-base/source/RawRepoSource.mjs`
- `ai/services/memory-core/helpers/consumerFrictionHelper.mjs`
- `apps/portal/resources/data/tickets/v11-0-0/archive-v11-0-0-chunk-2.json`
- `apps/portal/resources/data/tickets/v11-23-1/archive-v11-23-1-chunk-1.json`
- `apps/portal/resources/data/tickets/v13-0-0/archive-v13-0-0-chunk-12.json`
- `examples/form/field/fileupload/MainContainer.mjs`
- `examples/form/field/fileupload/server.mjs`
- `test/playwright/unit/ai/services/rem-observability.spec.mjs`
- ... 6 more

### Chunking/splitting

- `src/ai/admitWrite.mjs`
- `src/ai/deriveSubtreePath.mjs`
- `src/ai/LockRegistry.mjs`
- `src/ai/resolveWriteLock.mjs`
- `src/ai/TransactionService.mjs`
- `src/canvas/Header.mjs`
- `src/canvas/Sparkline.mjs`
- `src/component/Splitter.mjs`
- `src/controller/Base.mjs`
- `src/dashboard/DockLayoutAdapter.mjs`
- `src/dashboard/DockSplitter.mjs`
- `src/dashboard/DockZoneModel.mjs`
- ... 6 more

### Embedding/vector index

- `src/mixin/VdomLifecycle.mjs`
- `src/util/Rectangle.mjs`
- `apps/covid/view/MainContainerController.mjs`
- `apps/portal/canvas/HomeCanvas.mjs`
- `apps/portal/canvas/ServicesCanvas.mjs`
- `apps/sharedcovid/view/MainContainerController.mjs`
- `src/main/addon/OpenStreetMaps.mjs`
- `apps/portal/view/home/parts/hero/Content.mjs`
- `ai/deploy/mock-openai-embedding-server.mjs`
- `ai/services/memory-core/TextEmbeddingService.mjs`
- `ai/services/memory-core/helpers/embeddingProviderConfig.mjs`
- `ai/mcp/server/memory-core/helpers/EmbeddingProviderConfig.mjs`
- ... 6 more

### Retrieval/search/rerank

- `src/canvas/Sparkline.mjs`
- `src/component/MagicMoveText.mjs`
- `src/controller/Component.mjs`
- `src/data/TreeStore.mjs`
- `src/grid/Row.mjs`
- `src/list/Base.mjs`
- `src/list/Country.mjs`
- `src/main/DeltaUpdates.mjs`
- `src/manager/Component.mjs`
- `src/mixin/VdomLifecycle.mjs`
- `src/state/Provider.mjs`
- `src/tab/Container.mjs`
- ... 6 more

### Wiki/graph/entity model

- `src/form/Container.mjs`
- `src/util/String.mjs`
- `apps/devindex/services/Manager.mjs`
- `apps/devindex/services/Spider.mjs`
- `apps/portal/canvas/HomeCanvas.mjs`
- `apps/portal/canvas/ServicesCanvas.mjs`
- `src/data/normalizer/Base.mjs`
- `apps/portal/view/home/FooterContainer.mjs`
- `apps/devindex/view/home/component/Heuristics.mjs`
- `apps/portal/view/home/parts/AiToolchain.mjs`
- `apps/portal/view/home/parts/hero/Content.mjs`
- `ai/config.template.mjs`
- ... 6 more

### Memory/update lifecycle

- `src/DefaultConfig.mjs`
- `src/Fetch.mjs`
- `src/Main.mjs`
- `src/Neo.mjs`
- `src/ai/Client.mjs`
- `src/ai/LockRegistry.mjs`
- `src/ai/TransactionService.mjs`
- `src/ai/WriteGuard.mjs`
- `src/app/SharedCanvas.mjs`
- `src/button/Base.mjs`
- `src/button/Effect.mjs`
- `src/canvas/Base.mjs`
- ... 6 more

### Provenance/citation/evidence

- `src/ai/TransactionService.mjs`
- `src/collection/Base.mjs`
- `src/main/DeltaUpdates.mjs`
- `src/state/Provider.mjs`
- `apps/covid/view/AttributionComponent.mjs`
- `apps/covid/view/MainContainer.mjs`
- `apps/covid/view/MainContainerController.mjs`
- `apps/portal/model/TimelineSection.mjs`
- `apps/realworld/view/FooterComponent.mjs`
- `apps/realworld2/view/FooterComponent.mjs`
- `apps/sharedcovid/view/AttributionComponent.mjs`
- `apps/sharedcovid/view/MainContainer.mjs`
- ... 6 more

### Evaluation/observability

- `src/Neo.mjs`
- `src/canvas/Sparkline.mjs`
- `src/data/TreeStore.mjs`
- `src/main/DeltaUpdates.mjs`
- `src/mixin/VdomLifecycle.mjs`
- `src/util/Matrix.mjs`
- `src/util/Performance.mjs`
- `apps/devindex/services/GitHub.mjs`
- `apps/devindex/services/Heuristics.mjs`
- `apps/devindex/services/LocationNormalizer.mjs`
- `apps/devindex/services/Spider.mjs`
- `apps/devindex/services/Updater.mjs`
- ... 6 more

### Agent/MCP/tool surface

- `src/DefaultConfig.mjs`
- `src/ai/admitWrite.mjs`
- `src/ai/Client.mjs`
- `src/ai/LockRegistry.mjs`
- `src/ai/parseAgentEnvelope.mjs`
- `src/ai/resolveWriteLock.mjs`
- `src/ai/TransactionService.mjs`
- `src/ai/WriteGuard.mjs`
- `src/dashboard/DockLayoutAdapter.mjs`
- `src/util/Env.mjs`
- `src/worker/App.mjs`
- `src/worker/Canvas.mjs`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| src/data/TreeStore.mjs | 31 | * This explicitly sacrifices write performance (O(N) during ingestion) to guarantee maximum read performance |
| src/data/TreeStore.mjs | 945 | // 2a. Ingest nodes into the Structural Layer maps |
| src/data/TreeStore.mjs | 1154 | * within the Structural Layer. This explicitly trades O(N) mutation cost during data ingestion |
| apps/devindex/services/Spider.mjs | 7 | * @summary The Spider (Discovery Engine) - A Multi-Strategy Graph Crawler. |
| apps/legit/view/AddFileDialog.mjs | 61 | iconCls: 'fa fa-cloud-upload', |
| apps/legit/view/Viewport.mjs | 77 | iconCls : 'fa fa-cloud-upload', |
| apps/portal/canvas/ServicesCanvas.mjs | 41 | * 5. **Runtime Permutation:** Dynamic fusion of cells into "Super Modules" (construction/upload effects). |
| apps/portal/canvas/ServicesCanvas.mjs | 829 | * - **'upload'**: Particles fly *upward* (Z-axis) and fade out. Represents **Data Transfer**, |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| apps/devindex/services/Cleanup.mjs | 20 | * git diff noise and ensure O(1) human readability. |
| ai/scripts/benchmark/setupClass-cold-start.mjs | 17 | * path. Any future readability refactor must prove it does not regress boot-time |
| ai/services/memory-core/FileSystemIngestor.mjs | 35 | ignoreExts_: ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.ico', '.woff', '.woff2', '.ttf', '.eot', '.mp3', '.mp4', '.avi', '.map', '.pdf', '.zip', '.tar', '.gz'] |
| ai/mcp/server/knowledge-base/config.template.mjs | 324 | '.mov', '.mp3', '.mp4', '.otf', '.pdf', '.png', '.sqlite', '.tar', |
| ai/services/knowledge-base/source/RawRepoSource.mjs | 9 | '.mp4', '.otf', '.pdf', '.png', '.sqlite', '.tar', '.tgz', '.ttf', '.wasm', |
| ai/services/memory-core/helpers/consumerFrictionHelper.mjs | 421 | // Group by symptom for readability |
| apps/portal/resources/data/tickets/v11-0-0/archive-v11-0-0-chunk-2.json | 1 | [{"id":"7517","parentId":"v11.0.0/archive-v11-0-0-chunk-2","title":"Refactor toolService.mjs to Reduce Code Duplication"},{"id":"7516","parentId":"v11.0.0/archive-v11-0-0-chunk-2","title":"Bug: query_documents input para |
| apps/portal/resources/data/tickets/v11-23-1/archive-v11-23-1-chunk-1.json | 1 | [{"id":"8865","parentId":"v11.23.1/archive-v11-23-1-chunk-1","title":"Fix Manager runtime errors in dist/prod (promises init & getWorker check)"},{"id":"8864","parentId":"v11.23.1/archive-v11-23-1-chunk-1","title":"docs: |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| src/ai/admitWrite.mjs | 9 | * cross-writer overlap. The result is a plain verdict (`admitted` / `reason` / `conflict`); acting on it — mutate vs |
| src/ai/admitWrite.mjs | 18 | * - **enforced, lock, guard grants** (no overlap, or same-writer re-entrant): `{admitted: true}` — the lock is now |
| src/ai/admitWrite.mjs | 53 | // Acquire-and-hold; a cross-writer overlap is denied with a copy of the conflicting holder. |
| src/ai/deriveSubtreePath.mjs | 4 | * `Neo.ai.LockRegistry.pathsOverlap` decides whether two locked subtrees overlap by prefix-containment, which |
| src/ai/deriveSubtreePath.mjs | 6 | * happen to share a head id false-overlap (or nested ones false-disjoin). This is the function the in-heap |
| src/ai/LockRegistry.mjs | 21 | * iff their subtrees overlap (equal, ancestor, or descendant paths) **and** they belong to *different* |
| src/ai/LockRegistry.mjs | 60 | if (!subtreePath.every(segment => typeof segment === 'string' && segment !== '')) {return null} |
| src/ai/LockRegistry.mjs | 87 | * @summary Whether two component subtrees overlap (one equals or contains the other). |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| src/mixin/VdomLifecycle.mjs | 145 | * Directly embedding one component's full `vdom` object into another's is an anti-pattern |
| src/util/Rectangle.mjs | 362 | offset, // Final [x, y] vector to move the result by. |
| src/util/Rectangle.mjs | 381 | vector = [targetPoint[0] - myPoint[0], targetPoint[1] - myPoint[1]]; |
| src/util/Rectangle.mjs | 383 | result = result.moveBy(vector); |
| apps/covid/view/MainContainerController.mjs | 436 | // there are missing iso2&3 values on natural earth vector |
| apps/portal/canvas/HomeCanvas.mjs | 51 | * 2. **Inlined Physics:** Vector calculations are performed inline without creating temporary Objects. |
| apps/portal/canvas/ServicesCanvas.mjs | 49 | * 3. **Inlined Math:** Projection and vector calculations are performed in-place. |
| apps/sharedcovid/view/MainContainerController.mjs | 662 | // there are missing iso2&3 values on natural earth vector |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| src/canvas/Sparkline.mjs | 450 | // Calculate or retrieve cached points |
| src/component/MagicMoveText.mjs | 20 | * all cycle texts. This ensures that search engines and screen readers can index and access the full content |
| src/controller/Component.mjs | 83 | // If we find it, return true so calling code knows not to continue to search. |
| src/data/TreeStore.mjs | 64 | * keyed by their keyProperty, ensuring O(1) node retrieval regardless of expansion state. |
| src/grid/Row.mjs | 367 | // Map existing cells by dataField for robust retrieval regardless of pool index changes |
| src/list/Base.mjs | 589 | return '<span class="neo-highlight-search">' + match + '</span>' |
| src/list/Country.mjs | 48 | return '<span class="neo-highlight-search">' + match + '</span>' |
| src/main/DeltaUpdates.mjs | 270 | * Helper to retrieve the start anchor comment of a Fragment using XPath. |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| src/form/Container.mjs | 470 | * This can be useful for create-entity forms which show up "clean" until pressing a submit button. |
| src/util/String.mjs | 56 | * Get char equivalent of a mapped entity |
| src/util/String.mjs | 57 | * @param {String} entity |
| src/util/String.mjs | 59 | static getCharFromEntity(entity) { |
| src/util/String.mjs | 60 | let mappedChar = Object.keys(this.charEntityMap).find(key => this.charEntityMap[key] === entity); |
| src/util/String.mjs | 61 | return mappedChar \|\| entity |
| src/util/String.mjs | 65 | * Get entity equivalent of a mapped char |
| apps/devindex/services/Manager.mjs | 89 | .option('-s, --strategy <type>', 'Force specific strategy (random, community, keyword, temporal, stargazer, search)') |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| src/DefaultConfig.mjs | 238 | * tests that need to verify component lifecycle and DOM output. |
| src/Fetch.mjs | 21 | 'delete', |
| src/Main.mjs | 144 | delete hashObj.windowId; |
| src/Main.mjs | 486 | delete this.openWindows[name] |
| src/Neo.mjs | 253 | delete config._id; |
| src/Neo.mjs | 254 | delete config.id; |
| src/Neo.mjs | 331 | * including lifecycle hooks. |
| src/Neo.mjs | 392 | delete me[configSymbol][key] |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| src/ai/TransactionService.mjs | 67 | * **Identity / provenance**: each op stores `originWriter:{agentId, sessionId}` as |
| src/ai/TransactionService.mjs | 68 | * provenance / authorization evidence **only**; the stack never enforces with it — undo is re-dispatched and |
| src/collection/Base.mjs | 272 | * Triggered after the sourceId config got changed |
| src/collection/Base.mjs | 911 | sourceId : me.id |
| src/collection/Base.mjs | 1184 | return this.sourceId && Neo.get(this.sourceId) |
| src/collection/Base.mjs | 1682 | sourceId : me.sourceId |
| src/main/DeltaUpdates.mjs | 917 | * promotion to a throwing guard is gated on whitebox-e2e falsification evidence against the |
| src/state/Provider.mjs | 215 | * ids and sibling-key `sourceId` references. |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| src/Neo.mjs | 58 | * proving cold-start neutrality with `ai/scripts/benchmark/setupClass-cold-start.mjs`; it runs |
| src/canvas/Sparkline.mjs | 213 | now = performance.now(); // High precision timer for frame budget |
| src/data/TreeStore.mjs | 489 | * 2. **Recursive Evaluation:** A top-down recursive pass (`evaluateNode`) evaluates every node against the active filters. |
| src/main/DeltaUpdates.mjs | 930 | const evaluation = this.coherenceRegistry.evaluateBatch(deltas); |
| src/main/DeltaUpdates.mjs | 932 | if (evaluation.findings.length > 0) { |
| src/main/DeltaUpdates.mjs | 933 | console.warn('Delta coherence findings', {deltas, findings: evaluation.findings}) |
| src/main/DeltaUpdates.mjs | 936 | return evaluation.commit |
| src/mixin/VdomLifecycle.mjs | 320 | * This is useful for telemetry (e.g., Performance tracking) as it excludes the synchronous |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| src/DefaultConfig.mjs | 246 | * Set this to true to establish a WebSocket connection to the Neural Link MCP Server. |
| src/DefaultConfig.mjs | 247 | * This enables bidirectional communication between the App Worker and external AI Agents. |
| src/ai/admitWrite.mjs | 12 | * Fail-closed by construction — only a fully-valid, non-conflicting agent request (or a genuinely legacy one) admits: |
| src/ai/admitWrite.mjs | 13 | * - **decision not enforced** (`context` absent → legacy / non-agent frame): `{admitted: true}` — write unguarded. |
| src/ai/admitWrite.mjs | 38 | // Legacy / non-agent frame — the multi-writer regime does not apply; write unguarded. |
| src/ai/Client.mjs | 15 | * The AI Client establishes a WebSocket connection to the Neural Link MCP Server. |
| src/ai/Client.mjs | 16 | * It acts as a bridge, enabling external AI agents to inspect and manipulate the running Neo.mjs application |
| src/ai/Client.mjs | 40 | * The URL of the Neural Link MCP Server's WebSocket endpoint. |

## Gap

_없음_
