# Egonex-AI/Understand-Anything 코드 레벨 분석

생성일: 2026-06-17T23:31:14.913Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | persistent-llm-wiki |
| maturity | A integrated platform (90) |
| stars | 62740 |
| language | TypeScript |
| tags | direct-llm-wiki, knowledge-base, agent-knowledge |
| files/code/source | 409/243/191 |
| tests/ci | 54/3 |
| local path | sources/Egonex-AI__Understand-Anything |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | doc-only | 4 | 0 | .github/workflows/deploy-homepage.yml:56 - uses: actions/upload-pages-artifact@v3 |
| Parsing/OCR/document extraction | code | 8 | 1 | understand-anything-plugin/packages/core/src/ignore-filter.ts:48 "*.pdf", |
| Chunking/splitting | code | 27 | 14 | understand-anything-plugin/packages/dashboard/vite.config.ts:210 // ELK is ~1.6MB raw — split into its own chunk so it doesn't |
| Embedding/vector index | code | 14 | 4 | understand-anything-plugin/packages/core/src/embedding-search.ts:12 * Returns 0 if either vector has zero magnitude. |
| Retrieval/search/rerank | code | 48 | 22 | understand-anything-plugin/src/context-builder.ts:34 const searchResults = engine.search(query, { limit }); |
| Wiki/graph/entity model | code | 93 | 38 | understand-anything-plugin/src/context-builder.ts:3 KnowledgeGraph, |
| Memory/update lifecycle | code | 111 | 27 | install.ps1:119 $item.Delete() |
| Provenance/citation/evidence | code | 11 | 2 | understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py:438 source_id = f"source:{raw_file.relative_to(raw_root).with_suffix('')}" |
| Evaluation/observability | code | 16 | 3 | understand-anything-plugin/skills/understand/extract-structure.mjs:102 // If analysis throws, treat as degraded — still include basic metrics |
| Agent/MCP/tool surface | code | 74 | 16 | eslint.config.mjs:14 '**/.claude-plugin/**', |

## 의존성 신호

_없음_

## 주요 파일 후보

### Ingestion/source intake

- `.github/workflows/deploy-homepage.yml`
- `docs/superpowers/plans/2026-03-15-homepage-implementation.md`
- `docs/superpowers/plans/2026-04-09-understand-knowledge.md`
- `docs/superpowers/specs/2026-04-09-understand-knowledge-design.md`

### Parsing/OCR/document extraction

- `understand-anything-plugin/packages/core/src/ignore-filter.ts`
- `understand-anything-plugin/packages/core/src/__tests__/ignore-filter.test.ts`
- `docs/superpowers/plans/2026-03-28-understand-anything-extension-impl.md`
- `docs/superpowers/plans/2026-04-10-understandignore-impl.md`
- `docs/superpowers/specs/2026-03-26-theme-system-design.md`
- `docs/superpowers/specs/2026-04-09-understand-knowledge-design.md`
- `docs/superpowers/specs/2026-04-10-understandignore-design.md`
- `understand-anything-plugin/skills/understand/SKILL.md`

### Chunking/splitting

- `understand-anything-plugin/packages/dashboard/vite.config.ts`
- `understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py`
- `understand-anything-plugin/skills/understand/compute-batches.mjs`
- `understand-anything-plugin/skills/understand/extract-import-map.mjs`
- `understand-anything-plugin/skills/understand/merge-batch-graphs.py`
- `understand-anything-plugin/skills/understand/scan-project.mjs`
- `understand-anything-plugin/packages/core/src/change-classifier.ts`
- `understand-anything-plugin/packages/dashboard/src/App.tsx`
- `understand-anything-plugin/packages/core/src/analyzer/layer-detector.ts`
- `understand-anything-plugin/packages/core/src/analyzer/normalize-graph.ts`
- `understand-anything-plugin/packages/core/src/persistence/index.ts`
- `understand-anything-plugin/packages/dashboard/src/utils/containers.ts`
- ... 6 more

### Embedding/vector index

- `understand-anything-plugin/packages/core/src/embedding-search.ts`
- `understand-anything-plugin/packages/core/src/index.ts`
- `understand-anything-plugin/packages/dashboard/src/store.ts`
- `understand-anything-plugin/packages/core/src/languages/configs/go.ts`
- `understand-anything-plugin/packages/dashboard/public/knowledge-graph.json`
- `understand-anything-plugin/packages/core/src/__tests__/embedding-search.test.ts`
- `understand-anything-plugin/packages/core/src/plugins/extractors/__tests__/cpp-extractor.test.ts`
- `understand-anything-plugin/agents/tour-builder.md`
- `docs/superpowers/plans/2026-03-14-phase4-implementation.md`
- `docs/superpowers/plans/2026-03-21-language-agnostic-plan.md`
- `docs/superpowers/specs/2026-03-14-understand-anything-design.md`
- `understand-anything-plugin/skills/understand/languages/cpp.md`
- ... 2 more

### Retrieval/search/rerank

- `understand-anything-plugin/src/context-builder.ts`
- `understand-anything-plugin/packages/dashboard/vite.config.ts`
- `understand-anything-plugin/skills/understand-domain/extract-domain-context.py`
- `understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py`
- `understand-anything-plugin/skills/understand/extract-import-map.mjs`
- `understand-anything-plugin/skills/understand/merge-batch-graphs.py`
- `understand-anything-plugin/packages/core/src/embedding-search.ts`
- `understand-anything-plugin/packages/core/src/index.ts`
- `understand-anything-plugin/packages/core/src/search.ts`
- `understand-anything-plugin/packages/dashboard/src/App.tsx`
- `understand-anything-plugin/packages/dashboard/src/store.ts`
- `understand-anything-plugin/packages/dashboard/src/components/GraphView.tsx`
- ... 6 more

### Wiki/graph/entity model

- `understand-anything-plugin/src/context-builder.ts`
- `understand-anything-plugin/src/diff-analyzer.ts`
- `understand-anything-plugin/src/explain-builder.ts`
- `understand-anything-plugin/src/onboard-builder.ts`
- `understand-anything-plugin/src/understand-chat.ts`
- `understand-anything-plugin/packages/dashboard/vite.config.ts`
- `understand-anything-plugin/skills/understand-domain/extract-domain-context.py`
- `understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py`
- `understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py`
- `understand-anything-plugin/skills/understand/compute-batches.mjs`
- `understand-anything-plugin/skills/understand/merge-batch-graphs.py`
- `understand-anything-plugin/packages/core/src/schema.ts`
- ... 6 more

### Memory/update lifecycle

- `install.ps1`
- `install.sh`
- `scripts/generate-large-graph.mjs`
- `understand-anything-plugin/skills/understand-domain/extract-domain-context.py`
- `understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py`
- `understand-anything-plugin/skills/understand/build-fingerprints.mjs`
- `understand-anything-plugin/skills/understand/compute-batches.mjs`
- `understand-anything-plugin/skills/understand/extract-import-map.mjs`
- `understand-anything-plugin/skills/understand/extract-structure.mjs`
- `understand-anything-plugin/skills/understand/merge-batch-graphs.py`
- `understand-anything-plugin/skills/understand/merge-subdomain-graphs.py`
- `understand-anything-plugin/skills/understand/scan-project.mjs`
- ... 6 more

### Provenance/citation/evidence

- `understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py`
- `understand-anything-plugin/skills/understand/merge-batch-graphs.py`
- `pnpm-lock.yaml`
- `tests/skill/understand/test_merge_batch_graphs.py`
- `understand-anything-plugin/packages/dashboard/src/utils/__tests__/containers.test.ts`
- `understand-anything-plugin/agents/article-analyzer.md`
- `docs/superpowers/plans/2026-03-18-multi-platform-simple-implementation.md`
- `docs/superpowers/plans/2026-04-09-understand-knowledge.md`
- `docs/superpowers/specs/2026-04-09-understand-knowledge-design.md`
- `understand-anything-plugin/packages/tree-sitter-dart-wasm/BUILD.md`
- `understand-anything-plugin/skills/understand/SKILL.md`

### Evaluation/observability

- `understand-anything-plugin/skills/understand/extract-structure.mjs`
- `understand-anything-plugin/packages/dashboard/scripts/benchmark-aggregations.mjs`
- `understand-anything-plugin/packages/dashboard/scripts/benchmark-layout.mjs`
- `pnpm-lock.yaml`
- `understand-anything-plugin/src/__tests__/extract-structure.test.mjs`
- `understand-anything-plugin/agents/file-analyzer.md`
- `docs/superpowers/plans/2026-03-27-token-reduction-impl.md`
- `docs/superpowers/plans/2026-04-15-language-extractors-impl.md`
- `docs/superpowers/plans/2026-05-24-semantic-batching-and-output-chunking-impl.md`
- `docs/superpowers/specs/2026-03-27-token-reduction-design.md`
- `docs/superpowers/specs/2026-05-03-graph-layout-scaling-design.md`
- `docs/superpowers/specs/2026-05-24-semantic-batching-and-output-chunking-design.md`
- ... 4 more

### Agent/MCP/tool surface

- `eslint.config.mjs`
- `install.ps1`
- `install.sh`
- `understand-anything-plugin/skills/understand-domain/extract-domain-context.py`
- `understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py`
- `understand-anything-plugin/skills/understand/compute-batches.mjs`
- `understand-anything-plugin/skills/understand/extract-import-map.mjs`
- `understand-anything-plugin/skills/understand/extract-structure.mjs`
- `understand-anything-plugin/skills/understand/merge-batch-graphs.py`
- `understand-anything-plugin/skills/understand/merge-subdomain-graphs.py`
- `understand-anything-plugin/skills/understand/scan-project.mjs`
- `understand-anything-plugin/packages/core/src/ignore-filter.ts`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| .github/workflows/deploy-homepage.yml | 56 | - uses: actions/upload-pages-artifact@v3 |
| docs/superpowers/plans/2026-03-15-homepage-implementation.md | 1138 | - uses: actions/upload-pages-artifact@v3 |
| docs/superpowers/plans/2026-04-09-understand-knowledge.md | 1523 | argument-hint: [path/to/notes] [--ingest <file-or-folder>] |
| docs/superpowers/plans/2026-04-09-understand-knowledge.md | 1533 | - `--ingest <path>` — (optional) incrementally add new file(s) to an existing knowledge graph. |
| docs/superpowers/plans/2026-04-09-understand-knowledge.md | 1541 | 3. If `--ingest` flag is present: |
| docs/superpowers/plans/2026-04-09-understand-knowledge.md | 1670 | ## Incremental Mode (--ingest) |
| docs/superpowers/plans/2026-04-09-understand-knowledge.md | 1672 | When `--ingest <path>` is specified: |
| docs/superpowers/specs/2026-04-09-understand-knowledge-design.md | 210 | ### Incremental Mode (`--ingest`) |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| understand-anything-plugin/packages/core/src/ignore-filter.ts | 48 | "*.pdf", |
| understand-anything-plugin/packages/core/src/__tests__/ignore-filter.test.ts | 72 | expect(filter.isIgnored("doc.pdf")).toBe(true); |
| docs/superpowers/plans/2026-03-28-understand-anything-extension-impl.md | 7 | **Architecture:** Extend the existing LanguageConfig + AnalyzerPlugin pipeline. Add 8 new node types and 8 new edge types to the schema. Build 12 lightweight regex/parser-based analyzers for structured formats, LLM-only |
| docs/superpowers/plans/2026-04-10-understandignore-impl.md | 137 | expect(filter.isIgnored("doc.pdf")).toBe(true); |
| docs/superpowers/plans/2026-04-10-understandignore-impl.md | 282 | "*.pdf", |
| docs/superpowers/specs/2026-03-26-theme-system-design.md | 84 | For **Light Minimal only**, these are slightly desaturated/darkened to maintain readability on light backgrounds: |
| docs/superpowers/specs/2026-03-26-theme-system-design.md | 380 | Slightly darker/desaturated variants for readability on light backgrounds (see Section 1.4). |
| docs/superpowers/specs/2026-04-09-understand-knowledge-design.md | 48 | \| `source` \| Raw/reference material that articles are compiled from \| A paper URL, a raw PDF reference \| |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| understand-anything-plugin/packages/dashboard/vite.config.ts | 210 | // ELK is ~1.6MB raw — split into its own chunk so it doesn't |
| understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py | 238 | # e.g., entity:brain → segment-brain, entity:mempalace → tool-mempalace |
| understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py | 245 | # Also try: bare ends with -stem (e.g., "segment-brain" ends with "-brain") |
| understand-anything-plugin/skills/understand/compute-batches.mjs | 22 | * Chunk size for parallel file I/O. Bounded so a 15k-file repo doesn't try |
| understand-anything-plugin/skills/understand/compute-batches.mjs | 80 | // captured in-place so a single bad file does not abort the chunk. |
| understand-anything-plugin/skills/understand/extract-import-map.mjs | 100 | * Join a directory with a relative segment, normalizing `.`/`..` segments and |
| understand-anything-plugin/skills/understand/extract-import-map.mjs | 764 | * Given a fully-qualified module-path segment list (e.g. ['src','utils']), |
| understand-anything-plugin/skills/understand/extract-import-map.mjs | 1099 | // longest-prefix-match does not accidentally split mid-segment |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| understand-anything-plugin/packages/core/src/embedding-search.ts | 12 | * Returns 0 if either vector has zero magnitude. |
| understand-anything-plugin/packages/core/src/embedding-search.ts | 33 | * Semantic search engine using vector embeddings. |
| understand-anything-plugin/packages/core/src/embedding-search.ts | 34 | * Stores pre-computed embeddings for graph nodes and performs |
| understand-anything-plugin/packages/core/src/embedding-search.ts | 35 | * cosine similarity search against query embeddings. |
| understand-anything-plugin/packages/core/src/embedding-search.ts | 39 | private embeddings: Map<string, number[]>; |
| understand-anything-plugin/packages/core/src/embedding-search.ts | 41 | constructor(nodes: GraphNode[], embeddings: Record<string, number[]>) { |
| understand-anything-plugin/packages/core/src/embedding-search.ts | 43 | this.embeddings = new Map(Object.entries(embeddings)); |
| understand-anything-plugin/packages/core/src/embedding-search.ts | 47 | return this.embeddings.size > 0; |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| understand-anything-plugin/src/context-builder.ts | 34 | const searchResults = engine.search(query, { limit }); |
| understand-anything-plugin/packages/dashboard/vite.config.ts | 196 | "@understand-anything/core/search": path.resolve(__dirname, "../core/dist/search.js"), |
| understand-anything-plugin/skills/understand-domain/extract-domain-context.py | 144 | if pattern.search(rel_path): |
| understand-anything-plugin/skills/understand-domain/extract-domain-context.py | 207 | if test_patterns.search(rel_path): |
| understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py | 330 | h1_match = re.search(r"^#\s+(.+)$", text, re.MULTILINE) |
| understand-anything-plugin/skills/understand/extract-import-map.mjs | 887 | // must search for any file whose suffix matches the dotted-path-as-file form. |
| understand-anything-plugin/skills/understand/merge-batch-graphs.py | 457 | # Walk out of an in-service `tests/` directory and search |
| understand-anything-plugin/skills/understand/merge-batch-graphs.py | 1018 | key=lambda p: int(re.search(r"batch-(\d+)", p.stem).group(1)) |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| understand-anything-plugin/src/context-builder.ts | 3 | KnowledgeGraph, |
| understand-anything-plugin/src/context-builder.ts | 26 | graph: KnowledgeGraph, |
| understand-anything-plugin/src/diff-analyzer.ts | 2 | KnowledgeGraph, |
| understand-anything-plugin/src/diff-analyzer.ts | 23 | graph: KnowledgeGraph, |
| understand-anything-plugin/src/explain-builder.ts | 2 | KnowledgeGraph, |
| understand-anything-plugin/src/explain-builder.ts | 23 | graph: KnowledgeGraph, |
| understand-anything-plugin/src/onboard-builder.ts | 1 | import type { KnowledgeGraph } from "@understand-anything/core"; |
| understand-anything-plugin/src/onboard-builder.ts | 7 | export function buildOnboardingGuide(graph: KnowledgeGraph): string { |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| install.ps1 | 119 | $item.Delete() |
| install.ps1 | 122 | Write-Warning "Refusing to delete $Path — it is a real file/directory, not a junction/symlink we created. Remove it manually if you intended to." |
| install.ps1 | 129 | (Get-Item -LiteralPath $LinkPath -Force).Delete() |
| install.ps1 | 169 | # Checkout is gone — scan the target dir for stale links pointing |
| install.sh | 155 | # Checkout is gone — scan the target dir for stale links pointing into |
| scripts/generate-large-graph.mjs | 146 | delete node.complexity; |
| scripts/generate-large-graph.mjs | 153 | delete node.tags; |
| scripts/generate-large-graph.mjs | 157 | delete node.summary; |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py | 438 | source_id = f"source:{raw_file.relative_to(raw_root).with_suffix('')}" |
| understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py | 440 | "id": source_id, |
| understand-anything-plugin/skills/understand/merge-batch-graphs.py | 260 | # We do NOT strip these edges — the *pairing* is real evidence (the LLM |
| understand-anything-plugin/skills/understand/merge-batch-graphs.py | 567 | edges so the swap preserves the LLM's pairing evidence with the |
| pnpm-lock.yaml | 2274 | mdast-util-gfm-footnote@2.1.0: |
| pnpm-lock.yaml | 2322 | micromark-extension-gfm-footnote@2.1.0: |
| pnpm-lock.yaml | 5430 | mdast-util-gfm-footnote@2.1.0: |
| pnpm-lock.yaml | 5471 | mdast-util-gfm-footnote: 2.1.0 |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| understand-anything-plugin/skills/understand/extract-structure.mjs | 102 | // If analysis throws, treat as degraded — still include basic metrics |
| understand-anything-plugin/skills/understand/extract-structure.mjs | 156 | // No parser matched — return basic metrics only |
| understand-anything-plugin/skills/understand/extract-structure.mjs | 157 | base.metrics = {}; |
| understand-anything-plugin/skills/understand/extract-structure.mjs | 250 | // Metrics |
| understand-anything-plugin/skills/understand/extract-structure.mjs | 251 | const metrics = {}; |
| understand-anything-plugin/skills/understand/extract-structure.mjs | 259 | // so the metric stays *internal-import* in semantics rather than mixing in |
| understand-anything-plugin/skills/understand/extract-structure.mjs | 264 | metrics.importCount = importPaths.length; |
| understand-anything-plugin/skills/understand/extract-structure.mjs | 270 | metrics.importCount = internal.length; |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| eslint.config.mjs | 14 | '**/.claude-plugin/**', |
| install.ps1 | 10 | ./install.ps1 codex # install for codex |
| install.ps1 | 12 | ./install.ps1 -Uninstall codex # remove links for codex |
| install.ps1 | 31 | gemini = @{ Target = (Join-Path $HOME '.agents\skills'); Style = 'per-skill' } |
| install.ps1 | 32 | codex = @{ Target = (Join-Path $HOME '.agents\skills'); Style = 'per-skill' } |
| install.ps1 | 33 | opencode = @{ Target = (Join-Path $HOME '.agents\skills'); Style = 'per-skill' } |
| install.ps1 | 34 | pi = @{ Target = (Join-Path $HOME '.agents\skills'); Style = 'per-skill' } |
| install.ps1 | 36 | antigravity = @{ Target = (Join-Path $HOME '.gemini\antigravity\skills'); Style = 'folder' } |

## Gap

_없음_
