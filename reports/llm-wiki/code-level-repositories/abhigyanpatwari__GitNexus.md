# abhigyanpatwari/GitNexus 코드 레벨 분석

생성일: 2026-06-17T23:31:25.416Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (104) |
| stars | 42381 |
| language | TypeScript |
| tags | rag, knowledge-base, agent-knowledge |
| files/code/source | 3934/3124/870 |
| tests/ci | 120/26 |
| local path | sources/abhigyanpatwari__GitNexus |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 459 | 145 | gitnexus/src/core/ingestion/call-types.ts:1 // gitnexus/src/core/ingestion/call-types.ts |
| Parsing/OCR/document extraction | code | 14 | 7 | gitnexus-web/src/config/ignore-service.ts:148 '.pdf', |
| Chunking/splitting | code | 221 | 120 | .devcontainer/translate-plugin-registries.cjs:29 // FIRST `.<cli>/plugins` segment. |
| Embedding/vector index | code | 191 | 98 | .github/scripts/triage/embedding_utils.py:1 """Pure math utilities for triage sweep embedding analysis. |
| Retrieval/search/rerank | code | 150 | 81 | gitnexus/vitest.config.ts:58 'test/integration/search-core.test.ts', |
| Wiki/graph/entity model | code | 204 | 99 | eval/bridge/gitnexus_tools.sh:132 echo "Schema: Nodes: File, Function, Class, Method, Interface, Community, Process" |
| Memory/update lifecycle | code | 679 | 306 | docker-server.mjs:132 : 'no-cache'; |
| Provenance/citation/evidence | code | 223 | 109 | .github/scripts/update-vendored-grammars.mjs:102 // both kinds: a plain semver for npm, and the `<base>-g<sha7>` provenance string for |
| Evaluation/observability | code | 149 | 76 | eval/__init__.py:1 # GitNexus SWE-bench Evaluation Harness |
| Agent/MCP/tool surface | code | 354 | 125 | eslint.config.mjs:16 // Selectors that protect MCP-reachable code from corrupting the JSON-RPC |

## 의존성 신호

- LLM/app framework: @langchain/anthropic, @langchain/core, @langchain/google-genai, @langchain/langgraph, @langchain/ollama, @langchain/openai, langchain, @huggingface/transformers

## 주요 파일 후보

### Ingestion/source intake

- `gitnexus/src/core/ingestion/call-types.ts`
- `gitnexus/src/core/ingestion/csharp-namespace-gate.ts`
- `gitnexus/src/core/ingestion/emit-references.ts`
- `gitnexus/src/core/ingestion/field-extractor.ts`
- `gitnexus/src/core/ingestion/field-types.ts`
- `gitnexus/src/core/ingestion/finalize-orchestrator.ts`
- `gitnexus/src/core/ingestion/import-target-adapter.ts`
- `gitnexus/src/core/ingestion/language-config.ts`
- `gitnexus/src/core/ingestion/language-provider.ts`
- `gitnexus/src/core/ingestion/method-types.ts`
- `gitnexus/src/core/ingestion/pipeline.ts`
- `gitnexus/src/core/ingestion/variable-types.ts`
- ... 6 more

### Parsing/OCR/document extraction

- `gitnexus-web/src/config/ignore-service.ts`
- `gitnexus/src/config/ignore-service.ts`
- `gitnexus/vendor/tree-sitter-dart/grammar.js`
- `gitnexus-web/src/core/llm/context-builder.ts`
- `gitnexus/src/core/wiki/prompts.ts`
- `gitnexus/src/mcp/local/local-backend.ts`
- `gitnexus/src/core/ingestion/cfg/control-dependence.ts`
- `.github/workflows/ci-report.yml`
- `gitnexus/test/unit/ignore-service.test.ts`
- `gitnexus/test/integration/resolvers/swift.test.ts`
- `gitnexus/test/unit/cfg/control-dependence.test.ts`
- `gitnexus/test/unit/model/helpers.ts`
- ... 2 more

### Chunking/splitting

- `.devcontainer/translate-plugin-registries.cjs`
- `eval/bridge/mcp_bridge.py`
- `.github/scripts/triage/sweep.py`
- `.github/scripts/triage/test_sweep.py`
- `gitnexus-shared/src/scope-resolution/position-index.ts`
- `gitnexus-shared/src/scope-resolution/scope-tree.ts`
- `gitnexus-web/src/config/ignore-service.ts`
- `gitnexus-web/src/hooks/useAppState.tsx`
- `gitnexus-web/src/hooks/useBackend.ts`
- `gitnexus-web/src/hooks/useSigma.ts`
- `gitnexus-web/src/lib/circles-layout.ts`
- `gitnexus-web/src/lib/path-resolution.ts`
- ... 6 more

### Embedding/vector index

- `.github/scripts/triage/embedding_utils.py`
- `.github/scripts/triage/test_embedding_utils.py`
- `gitnexus-web/src/components/EmbeddingStatus.tsx`
- `gitnexus/src/cli/embedding-dims.ts`
- `gitnexus/src/core/embedding-mode.ts`
- `gitnexus/src/core/embeddings/ast-utils.ts`
- `gitnexus/src/core/embeddings/chunker.ts`
- `gitnexus/src/core/embeddings/config.ts`
- `gitnexus/src/core/embeddings/embedder.ts`
- `gitnexus/src/core/embeddings/embedding-pipeline.ts`
- `gitnexus/src/core/embeddings/exact-search.ts`
- `gitnexus/src/core/embeddings/hf-env.ts`
- ... 6 more

### Retrieval/search/rerank

- `gitnexus/vitest.config.ts`
- `.github/scripts/check-tree-sitter-upgrade-readiness.py`
- `eval/agents/gitnexus_agent.py`
- `eval/bridge/gitnexus_tools.sh`
- `gitnexus-claude-plugin/hooks/gitnexus-hook.js`
- `gitnexus-cursor-integration/hooks/gitnexus-hook.cjs`
- `gitnexus-web/src/App.tsx`
- `gitnexus/scripts/install-duckdb-extension.mjs`
- `gitnexus-shared/src/scope-resolution/position-index.ts`
- `gitnexus-web/src/components/FileTreePanel.tsx`
- `gitnexus-web/src/components/Header.tsx`
- `gitnexus-web/src/components/HelpPanel.tsx`
- ... 6 more

### Wiki/graph/entity model

- `eval/bridge/gitnexus_tools.sh`
- `gitnexus-web/src/App.tsx`
- `gitnexus-shared/src/graph/types.ts`
- `gitnexus-shared/src/lbug/schema-constants.ts`
- `gitnexus-web/src/components/GraphCanvas.tsx`
- `gitnexus-web/src/components/ProcessesPanel.tsx`
- `gitnexus-web/src/hooks/useAppState.tsx`
- `gitnexus-web/src/lib/apply-connect-result.ts`
- `gitnexus-web/src/lib/circles-layout.ts`
- `gitnexus-web/src/lib/constants.ts`
- `gitnexus-web/src/lib/graph-adapter.ts`
- `gitnexus-web/src/lib/mermaid-generator.ts`
- ... 6 more

### Memory/update lifecycle

- `docker-server.mjs`
- `.devcontainer/ensure-host-config-dirs.cjs`
- `.devcontainer/install-deps.sh`
- `.devcontainer/post-create.sh`
- `.devcontainer/seed-claude-config.cjs`
- `.devcontainer/translate-plugin-registries.cjs`
- `eval/run_eval.py`
- `.github/scripts/check-tree-sitter-upgrade-readiness.py`
- `eval/bridge/gitnexus_tools.sh`
- `eval/environments/gitnexus_docker.py`
- `gitnexus-claude-plugin/hooks/gitnexus-hook.js`
- `gitnexus-claude-plugin/hooks/hook-lock.js`
- ... 6 more

### Provenance/citation/evidence

- `.github/scripts/update-vendored-grammars.mjs`
- `gitnexus-claude-plugin/hooks/hook-db-lock-probe.cjs`
- `gitnexus-shared/src/index.ts`
- `gitnexus-shared/src/graph/types.ts`
- `gitnexus-shared/src/integrations/circuit-breaker.ts`
- `gitnexus-shared/src/scope-resolution/evidence-weights.ts`
- `gitnexus-shared/src/scope-resolution/finalize-algorithm.ts`
- `gitnexus-shared/src/scope-resolution/reference-site.ts`
- `gitnexus-shared/src/scope-resolution/resolve-type-ref.ts`
- `gitnexus-shared/src/scope-resolution/types.ts`
- `gitnexus-web/src/components/CodeReferencesPanel.tsx`
- `gitnexus-web/src/components/GraphCanvas.tsx`
- ... 6 more

### Evaluation/observability

- `eval/__init__.py`
- `eval/constants.py`
- `eval/run_eval.py`
- `eval/agents/gitnexus_agent.py`
- `eval/analysis/analyze_results.py`
- `eval/bridge/gitnexus_tools.sh`
- `eval/bridge/mcp_bridge.py`
- `eval/environments/gitnexus_docker.py`
- `eval/utils/__init__.py`
- `gitnexus/scripts/bench-scope-resolution.ts`
- `.github/scripts/triage/embedding_utils.py`
- `.github/scripts/triage/sweep.py`
- ... 6 more

### Agent/MCP/tool surface

- `eslint.config.mjs`
- `.devcontainer/ensure-host-config-dirs.cjs`
- `.devcontainer/post-create.sh`
- `.devcontainer/seed-claude-config.cjs`
- `.devcontainer/translate-plugin-registries.cjs`
- `eval/constants.py`
- `eval/run_eval.py`
- `gitnexus-web/vite.config.ts`
- `gitnexus-web/vitest.config.ts`
- `eval/agents/gitnexus_agent.py`
- `eval/analysis/analyze_results.py`
- `eval/bridge/mcp_bridge.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| gitnexus/src/core/ingestion/call-types.ts | 1 | // gitnexus/src/core/ingestion/call-types.ts |
| gitnexus/src/core/ingestion/csharp-namespace-gate.ts | 6 | * Lives in the shared `ingestion/` layer — NOT under `languages/csharp/` — so |
| gitnexus/src/core/ingestion/emit-references.ts | 2 | * Phase 5 of the RFC #909 ingestion lifecycle: drain `ReferenceIndex` |
| gitnexus/src/core/ingestion/field-extractor.ts | 1 | // gitnexus/src/core/ingestion/field-extractor.ts |
| gitnexus/src/core/ingestion/field-types.ts | 1 | // gitnexus/src/core/ingestion/field-types.ts |
| gitnexus/src/core/ingestion/finalize-orchestrator.ts | 84 | * pipeline calls this once per ingestion run and hands the result to |
| gitnexus/src/core/ingestion/import-target-adapter.ts | 52 | * `resolveImportTargetAcrossLanguages`. Built once per ingestion run via |
| gitnexus/src/core/ingestion/language-config.ts | 473 | /** Load all language-specific configs once for an ingestion run. */ |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| gitnexus-web/src/config/ignore-service.ts | 148 | '.pdf', |
| gitnexus-web/src/config/ignore-service.ts | 150 | '.docx', |
| gitnexus-web/src/config/ignore-service.ts | 154 | '.pptx', |
| gitnexus/src/config/ignore-service.ts | 157 | '.pdf', |
| gitnexus/src/config/ignore-service.ts | 159 | '.docx', |
| gitnexus/src/config/ignore-service.ts | 163 | '.pptx', |
| gitnexus/vendor/tree-sitter-dart/grammar.js | 4 | // https://spec.dart.dev/DartLangSpecDraft.pdf |
| gitnexus-web/src/core/llm/context-builder.ts | 149 | * Returns ASCII tree format with smart truncation for readability |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| .devcontainer/translate-plugin-registries.cjs | 29 | // FIRST `.<cli>/plugins` segment. |
| eval/bridge/mcp_bridge.py | 282 | chunk = self.process.stdout.read(remaining) |
| eval/bridge/mcp_bridge.py | 283 | if not chunk: |
| eval/bridge/mcp_bridge.py | 285 | chunks.append(chunk) |
| eval/bridge/mcp_bridge.py | 286 | remaining -= len(chunk) |
| .github/scripts/triage/sweep.py | 241 | return "Review for overlap" |
| .github/scripts/triage/test_sweep.py | 247 | assert _suggested_action(a, b) == "Review for overlap" |
| .github/scripts/triage/test_sweep.py | 396 | assert "Review for overlap" in report |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| .github/scripts/triage/embedding_utils.py | 1 | """Pure math utilities for triage sweep embedding analysis. |
| .github/scripts/triage/embedding_utils.py | 15 | # FastEmbed model — BAAI/bge-small-en-v1.5 produces 384-dimensional embeddings. |
| .github/scripts/triage/embedding_utils.py | 19 | # Embedding dimensionality (determined by model choice). |
| .github/scripts/triage/embedding_utils.py | 145 | L2-normalized embeddings (full dimensionality, not PCA-reduced) so |
| .github/scripts/triage/embedding_utils.py | 165 | # ── Label suggestion via z-score normalized embedding similarity ────── |
| .github/scripts/triage/test_embedding_utils.py | 1 | """Tests for embedding_utils.py — all embedding model calls are mocked.""" |
| .github/scripts/triage/test_embedding_utils.py | 327 | """If an item embedding strongly matches one label, z-score should highlight it.""" |
| gitnexus-web/src/components/EmbeddingStatus.tsx | 8 | * Embedding status indicator and trigger button |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| gitnexus/vitest.config.ts | 58 | 'test/integration/search-core.test.ts', |
| gitnexus/vitest.config.ts | 59 | 'test/integration/search-pool.test.ts', |
| gitnexus/vitest.config.ts | 91 | 'test/integration/search-core.test.ts', |
| gitnexus/vitest.config.ts | 92 | 'test/integration/search-pool.test.ts', |
| .github/scripts/check-tree-sitter-upgrade-readiness.py | 146 | match = re.search(r"(\d+)\.(\d+)", raw) |
| .github/scripts/check-tree-sitter-upgrade-readiness.py | 196 | match = re.search(r"(\d+)\.(\d+)\.(\d+)", peer_range) |
| .github/scripts/check-tree-sitter-upgrade-readiness.py | 201 | t_match = re.search(r"(\d+)\.(\d+)\.(\d+)", target) |
| .github/scripts/check-tree-sitter-upgrade-readiness.py | 258 | match = re.search(r"#define\s+LANGUAGE_VERSION\s+(\d+)", text[:4096]) |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| eval/bridge/gitnexus_tools.sh | 132 | echo "Schema: Nodes: File, Function, Class, Method, Interface, Community, Process" |
| gitnexus-web/src/App.tsx | 72 | // Build KnowledgeGraph from server data for visualization. In chat-only |
| gitnexus-shared/src/graph/types.ts | 26 | \| 'Community' |
| gitnexus-shared/src/graph/types.ts | 61 | // Community |
| gitnexus-shared/src/graph/types.ts | 149 | * The `variable` name is stored in the relation's existing `reason` column |
| gitnexus-shared/src/graph/types.ts | 163 | * given side. The branch sense (`'T'` \| `'F'`) rides the relation's existing |
| gitnexus-shared/src/lbug/schema-constants.ts | 19 | 'Community', |
| gitnexus-shared/src/lbug/schema-constants.ts | 74 | // M3/M4). REACHING_DEF's variable name rides the relation's `reason` column. |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| docker-server.mjs | 132 | : 'no-cache'; |
| docker-server.mjs | 145 | 'Cache-Control': cacheControl, |
| docker-server.mjs | 154 | 'Cache-Control': cacheControl, |
| .devcontainer/ensure-host-config-dirs.cjs | 35 | // create the shareable subfolders (skills/agents/plugins/memory/commands/...) |
| .devcontainer/ensure-host-config-dirs.cjs | 52 | // and the container starts with empty memory. |
| .devcontainer/install-deps.sh | 15 | echo "[install-deps] 1/4: chown workspace node_modules + npm cache mount points" |
| .devcontainer/install-deps.sh | 19 | # owned by the old, stale UID and npm install cannot write to them. So we chown |
| .devcontainer/install-deps.sh | 40 | echo "[install-deps] 2/4: clear stale .husky/_ runtime cache" |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| .github/scripts/update-vendored-grammars.mjs | 102 | // both kinds: a plain semver for npm, and the `<base>-g<sha7>` provenance string for |
| .github/scripts/update-vendored-grammars.mjs | 254 | * stripped vendor package.json version + provenance — never re-introduces |
| gitnexus-claude-plugin/hooks/hook-db-lock-probe.cjs | 560 | // Genuine transient I/O against this candidate's fd dir — not evidence |
| gitnexus-shared/src/index.ts | 58 | // Evidence + tie-break constants (RFC Appendix A, Appendix B) |
| gitnexus-shared/src/index.ts | 59 | export { EvidenceWeights, typeBindingWeightAtDepth } from './scope-resolution/evidence-weights.js'; |
| gitnexus-shared/src/index.ts | 125 | export { composeEvidence, confidenceFromEvidence } from './scope-resolution/registries/evidence.js'; |
| gitnexus-shared/src/index.ts | 126 | export type { RawSignals } from './scope-resolution/registries/evidence.js'; |
| gitnexus-shared/src/graph/types.ts | 184 | sourceId: string; |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| eval/__init__.py | 1 | # GitNexus SWE-bench Evaluation Harness |
| eval/constants.py | 3 | # GitNexus eval-server health checks |
| eval/run_eval.py | 3 | GitNexus SWE-bench Evaluation Runner |
| eval/run_eval.py | 40 | # Load .env file from eval/ directory |
| eval/run_eval.py | 138 | image_name = f"docker.io/swebench/sweb.eval.x86_64.{id_docker}:latest".lower() |
| eval/run_eval.py | 154 | if env_class_name == "eval.environments.gitnexus_docker.GitNexusDockerEnvironment": |
| eval/run_eval.py | 170 | agent_config.pop("agent_class", "eval.agents.gitnexus_agent.GitNexusAgent") |
| eval/run_eval.py | 210 | Returns result dict with instance_id, exit_status, submission, metrics. |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| eslint.config.mjs | 16 | // Selectors that protect MCP-reachable code from corrupting the JSON-RPC |
| eslint.config.mjs | 17 | // stdio frame stream. The MCP-reachable block below uses these directly; |
| eslint.config.mjs | 27 | 'Direct process.stdout.write is forbidden in MCP-reachable code. Route diagnostics through console.error or process.stderr.write — the MCP stdio transport owns stdout for JSON-RPC frames.', |
| eslint.config.mjs | 33 | 'Direct process.stdout.write is forbidden in MCP-reachable code. Route diagnostics through console.error or process.stderr.write — the MCP stdio transport owns stdout for JSON-RPC frames.', |
| eslint.config.mjs | 44 | 'Destructuring process.stdout is forbidden in MCP-reachable code — bypasses the sentinel. Use process.stderr.write for diagnostics.', |
| eslint.config.mjs | 62 | '.claude/**', |
| eslint.config.mjs | 126 | // MCP-reachable code: forbid stdout-corrupting writes. The MCP stdio |
| eslint.config.mjs | 128 | // MUST NOT write anything to stdout that is not a valid MCP message. |

## Gap

_없음_
