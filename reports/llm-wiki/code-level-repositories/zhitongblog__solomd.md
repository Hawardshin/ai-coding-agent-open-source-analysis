# zhitongblog/solomd 코드 레벨 분석

생성일: 2026-06-17T23:31:53.425Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (100) |
| stars | 376 |
| language | TypeScript |
| tags | knowledge-base, agent-knowledge, korea-signal |
| files/code/source | 756/234/208 |
| tests/ci | 20/4 |
| local path | sources/zhitongblog__solomd |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 15 | 6 | scripts/build-android.sh:7 # - bundle/release/app-release.aab (Google Play upload format) |
| Parsing/OCR/document extraction | code | 125 | 42 | app/scripts/solomd-export.mjs:7 * v4.0.2-surfaced gap where docx export was untestable from CI / headless. |
| Chunking/splitting | code | 17 | 15 | app/src-tauri/src/agent_tools.rs:52 // cooldown logic in `RecipesState` makes overlap rare in practice. |
| Embedding/vector index | code | 46 | 26 | app/scripts/solomd-export.mjs:90 - Image embedding is not yet ported (v4.1 limitation; see source). |
| Retrieval/search/rerank | code | 77 | 38 | app/src/main.ts:10 const params = new URLSearchParams(window.location.search); |
| Wiki/graph/entity model | code | 105 | 37 | app/src/types.ts:3 // Typora / Obsidian Live Preview style. The editor IS the only pane in |
| Memory/update lifecycle | code | 164 | 109 | app/vite.config.ts:27 watch: { |
| Provenance/citation/evidence | code | 31 | 13 | app/scripts/solomd-export.mjs:34 import footnote from 'markdown-it-footnote'; |
| Evaluation/observability | code | 67 | 36 | app/src-tauri/src/agent_trace.rs:89 tracing::warn!(run = %run_id, err = %e, "agent_trace_list: skipping"); |
| Agent/MCP/tool surface | code | 158 | 75 | app/scripts/solomd-export.mjs:5 * Used by `solomd export <file>` (the bash CLI wrapper) and by the MCP |

## 의존성 신호

- Document parsing/OCR: docx, @mozilla/readability
- Persistence/database: rusqlite

## 주요 파일 후보

### Ingestion/source intake

- `scripts/build-android.sh`
- `scripts/build-mas.sh`
- `scripts/release-to-gitee.sh`
- `scripts/submit-ios.sh`
- `scripts/submit-mas.sh`
- `web/functions/api/track.ts`
- `.github/workflows/indexnow.yml`
- `.github/workflows/release.yml`
- `app-store/README.md`
- `app-store/SUBMISSION_GUIDE.md`
- `marketplace/README.md`
- `web-clipper/README.md`
- ... 3 more

### Parsing/OCR/document extraction

- `app/scripts/solomd-export.mjs`
- `app/src-tauri/src/commands.rs`
- `app/src-tauri/src/convert.rs`
- `app/src-tauri/src/lib.rs`
- `app/src-tauri/src/pandoc.rs`
- `app/src-tauri/src/pricing.rs`
- `app/src-tauri/src/runner.rs`
- `app/src/composables/useCommands.ts`
- `app/src/composables/useExport.ts`
- `app/src/composables/useFiles.ts`
- `app/src/composables/usePandocExport.ts`
- `app/src/composables/useShortcuts.ts`
- ... 6 more

### Chunking/splitting

- `app/src-tauri/src/agent_tools.rs`
- `app/src-tauri/src/ai_proxy.rs`
- `app/src-tauri/src/capture_endpoint.rs`
- `app/src-tauri/src/ollama.rs`
- `app/src-tauri/src/rag.rs`
- `app/src-tauri/src/recipe_runner.rs`
- `app/src-tauri/src/trace.rs`
- `app/src/lib/cm-image-paste.ts`
- `app/src/lib/markdown.ts`
- `app/src/lib/tldraw-runtime.ts`
- `app/src/stores/agentPanel.ts`
- `app/src/stores/settings.ts`
- ... 5 more

### Embedding/vector index

- `app/scripts/solomd-export.mjs`
- `app/src-tauri/src/git_history.rs`
- `app/src-tauri/src/rag.rs`
- `app/src-tauri/src/trace.rs`
- `app/src/i18n/de.ts`
- `app/src/i18n/en.ts`
- `app/src/i18n/es.ts`
- `app/src/i18n/fr.ts`
- `app/src/i18n/it.ts`
- `app/src/i18n/ja.ts`
- `app/src/i18n/ko.ts`
- `app/src/i18n/nl.ts`
- ... 6 more

### Retrieval/search/rerank

- `app/src/main.ts`
- `app/src-tauri/src/agent_tools.rs`
- `app/src-tauri/src/cjk_proofread.rs`
- `app/src-tauri/src/crypto.rs`
- `app/src-tauri/src/integrations.rs`
- `app/src-tauri/src/lib.rs`
- `app/src-tauri/src/rag.rs`
- `app/src-tauri/src/recipes.rs`
- `app/src-tauri/src/rest_api.rs`
- `app/src-tauri/src/runner.rs`
- `app/src-tauri/src/search.rs`
- `app/src/composables/useCommands.ts`
- ... 6 more

### Wiki/graph/entity model

- `app/src/types.ts`
- `app/src-tauri/src/agent_tools.rs`
- `app/src-tauri/src/git_history.rs`
- `app/src-tauri/src/lib.rs`
- `app/src-tauri/src/runner.rs`
- `app/src-tauri/src/themes.rs`
- `app/src-tauri/src/workspace_index.rs`
- `app/src/composables/useCommands.ts`
- `app/src/composables/useNeighborhood.ts`
- `app/src/composables/useShortcuts.ts`
- `app/src/i18n/de.ts`
- `app/src/i18n/en.ts`
- ... 6 more

### Memory/update lifecycle

- `app/vite.config.ts`
- `app/src-tauri/src/agent_run.rs`
- `app/src-tauri/src/agent_tools.rs`
- `app/src-tauri/src/ai_keystore.rs`
- `app/src-tauri/src/ai_proxy.rs`
- `app/src-tauri/src/capture_endpoint.rs`
- `app/src-tauri/src/cloud_folder.rs`
- `app/src-tauri/src/commands.rs`
- `app/src-tauri/src/cost_meter.rs`
- `app/src-tauri/src/crypto.rs`
- `app/src-tauri/src/dev_bridge.rs`
- `app/src-tauri/src/git_history.rs`
- ... 6 more

### Provenance/citation/evidence

- `app/scripts/solomd-export.mjs`
- `app/src-tauri/src/cookbook.rs`
- `app/src/composables/usePandocExport.ts`
- `app/src/i18n/en.ts`
- `app/src/i18n/fr.ts`
- `app/src/lib/citations.ts`
- `app/src/lib/clean-ai.ts`
- `app/src/lib/cm-citations.ts`
- `app/src/lib/markdown.ts`
- `app/src/stores/settings.ts`
- `scripts/build-skill-pack.sh`
- `web-clipper/src/background.ts`
- ... 6 more

### Evaluation/observability

- `app/src-tauri/src/agent_trace.rs`
- `app/src-tauri/src/cjk_proofread.rs`
- `app/src-tauri/src/dev_bridge.rs`
- `app/src-tauri/src/main.rs`
- `app/src-tauri/src/pandoc.rs`
- `app/src-tauri/src/trace.rs`
- `app/src/composables/useExport.ts`
- `app/src/composables/usePandocExport.ts`
- `app/src/i18n/de.ts`
- `app/src/i18n/en.ts`
- `app/src/i18n/es.ts`
- `app/src/i18n/fr.ts`
- ... 6 more

### Agent/MCP/tool surface

- `app/scripts/solomd-export.mjs`
- `app/src-tauri/build.rs`
- `app/src-tauri/src/agent_run.rs`
- `app/src-tauri/src/agent_tools.rs`
- `app/src-tauri/src/agent_trace.rs`
- `app/src-tauri/src/ai_keystore.rs`
- `app/src-tauri/src/ai_proxy.rs`
- `app/src-tauri/src/app_build.rs`
- `app/src-tauri/src/commands.rs`
- `app/src-tauri/src/cookbook.rs`
- `app/src-tauri/src/cost_meter.rs`
- `app/src-tauri/src/dev_bridge.rs`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| scripts/build-android.sh | 7 | # - bundle/release/app-release.aab (Google Play upload format) |
| scripts/build-android.sh | 106 | echo " - Play Console: upload app-release.aab via https://play.google.com/console/" |
| scripts/build-mas.sh | 12 | # after upload, which performs its own notarization) |
| scripts/build-mas.sh | 109 | # Missing manifest → upload accepted, then review warning email, then |
| scripts/build-mas.sh | 172 | # distribution validator to flag the binary on upload. |
| scripts/build-mas.sh | 195 | echo " Upload: xcrun altool --upload-app -f \"$PKG\" -t osx \\" |
| scripts/release-to-gitee.sh | 7 | # indefinitely on the upload step — Gitee's API throttles |
| scripts/release-to-gitee.sh | 94 | # 4. Upload every asset. Sequential by design — Gitee's API accepts |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| app/scripts/solomd-export.mjs | 7 | * v4.0.2-surfaced gap where docx export was untestable from CI / headless. |
| app/scripts/solomd-export.mjs | 13 | * node scripts/solomd-export.mjs <input.md> [--format html\|md\|txt\|docx] [--output <path>] |
| app/scripts/solomd-export.mjs | 19 | * `docx` library, same blockquote / table / list handling. Local images are |
| app/scripts/solomd-export.mjs | 52 | } from 'docx'; |
| app/scripts/solomd-export.mjs | 76 | console.error(`solomd-export — convert .md to html / md / txt / docx |
| app/scripts/solomd-export.mjs | 79 | solomd-export <input.md> [--format html\|md\|txt\|docx] [--output <path>] |
| app/scripts/solomd-export.mjs | 89 | - DOCX export uses the same 'docx' npm library as the app. |
| app/scripts/solomd-export.mjs | 132 | // mirrors app/src/lib/docx-export.ts + image-resolve.ts. |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| app/src-tauri/src/agent_tools.rs | 52 | // cooldown logic in `RecipesState` makes overlap rare in practice. |
| app/src-tauri/src/ai_proxy.rs | 11 | //! `solomd://ai-chunk` event, with `solomd://ai-done` terminating a clean |
| app/src-tauri/src/ai_proxy.rs | 17 | //! checked on every parsed chunk; setting it makes the streaming task exit on |
| app/src-tauri/src/ai_proxy.rs | 160 | chunk: String, |
| app/src-tauri/src/ai_proxy.rs | 442 | /// - `solomd://ai-chunk` — streaming text deltas |
| app/src-tauri/src/ai_proxy.rs | 637 | /// caller listens for `solomd://ai-chunk`, `solomd://ai-done`, and |
| app/src-tauri/src/ai_proxy.rs | 732 | fn emit_chunk(app: &AppHandle, request_id: &str, chunk: &str) { |
| app/src-tauri/src/ai_proxy.rs | 733 | if chunk.is_empty() { |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| app/scripts/solomd-export.mjs | 90 | - Image embedding is not yet ported (v4.1 limitation; see source). |
| app/scripts/solomd-export.mjs | 131 | // Image resolution + embedding — Node fs replaces Tauri invoke. Logic |
| app/scripts/solomd-export.mjs | 252 | // blockquote / table / list / image embedding logic). |
| app/src-tauri/src/git_history.rs | 594 | // Keep our hunks vector in sync. |
| app/src-tauri/src/rag.rs | 11 | //! 1. **Pluggable embedder, hash trigram default.** Shipping `fastembed-rs` |
| app/src-tauri/src/rag.rs | 16 | //! **hashed character-trigram + random projection** embedder which: |
| app/src-tauri/src/rag.rs | 26 | //! `INDEX_VERSION` and the embedder will rebuild on next launch). |
| app/src-tauri/src/rag.rs | 28 | //! 2. **Vector index = single SQLite file w/ raw-blob vectors.** No |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| app/src/main.ts | 10 | const params = new URLSearchParams(window.location.search); |
| app/src-tauri/src/agent_tools.rs | 5 | //! logic (`workspace_index`, `search`, `git_history`, `commands` for fs). |
| app/src-tauri/src/agent_tools.rs | 38 | use super::search; |
| app/src-tauri/src/agent_tools.rs | 133 | "search", |
| app/src-tauri/src/agent_tools.rs | 180 | "search" => ( |
| app/src-tauri/src/agent_tools.rs | 181 | "Full-text search across the workspace's markdown / text files. Returns matching lines + snippets.", |
| app/src-tauri/src/agent_tools.rs | 829 | let hits = search::search_in_dir_inner( |
| app/src-tauri/src/agent_tools.rs | 1139 | "search" => tool_search(workspace, &args), |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| app/src/types.ts | 3 | // Typora / Obsidian Live Preview style. The editor IS the only pane in |
| app/src-tauri/src/agent_tools.rs | 480 | Lazy::new(\|\| Regex::new(r"\[\[([^\[\]\n]+?)\]\]").expect("wikilink regex")); |
| app/src-tauri/src/git_history.rs | 227 | .obsidian/workspace*\n\ |
| app/src-tauri/src/git_history.rs | 228 | .obsidian/cache\n\ |
| app/src-tauri/src/lib.rs | 39 | // v2.5 community theme marketplace — manifest fetched JS-side, CSS files |
| app/src-tauri/src/runner.rs | 47 | // v2.5 community theme marketplace — see app/src-tauri/src/themes.rs. |
| app/src-tauri/src/themes.rs | 1 | //! v2.5 Theme marketplace — Tauri commands backing Settings → "Browse community themes". |
| app/src-tauri/src/workspace_index.rs | 37 | /// File name without extension — used as the canonical wikilink target. |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| app/vite.config.ts | 27 | watch: { |
| app/src-tauri/src/agent_run.rs | 21 | use std::sync::Mutex; |
| app/src-tauri/src/agent_tools.rs | 24 | use std::sync::Mutex; |
| app/src-tauri/src/agent_tools.rs | 27 | use once_cell::sync::Lazy; |
| app/src-tauri/src/agent_tools.rs | 93 | /// Snapshot the current `(used, cap)` for the given workspace, or `None` |
| app/src-tauri/src/agent_tools.rs | 283 | /// keep this in sync with it. |
| app/src-tauri/src/agent_tools.rs | 770 | tags.dedup(); |
| app/src-tauri/src/agent_tools.rs | 918 | tags.dedup(); |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| app/scripts/solomd-export.mjs | 34 | import footnote from 'markdown-it-footnote'; |
| app/scripts/solomd-export.mjs | 88 | (html: true, linkify, typographer, mark, footnote, katex). |
| app/scripts/solomd-export.mjs | 103 | }).use(katex.default ?? katex, { throwOnError: false }).use(footnote).use(mark); |
| app/src-tauri/src/cookbook.rs | 52 | file_stem: "05-citation-cleanup", |
| app/src-tauri/src/cookbook.rs | 53 | yaml: include_str!("../cookbook/05-citation-cleanup.yml"), |
| app/src/composables/usePandocExport.ts | 4 | * citation autocomplete. |
| app/src/composables/usePandocExport.ts | 34 | } from '../lib/citations'; |
| app/src/composables/usePandocExport.ts | 99 | // Citation cache |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| app/src-tauri/src/agent_trace.rs | 89 | tracing::warn!(run = %run_id, err = %e, "agent_trace_list: skipping"); |
| app/src-tauri/src/agent_trace.rs | 237 | /// we don't need timezone or leap-second precision here. |
| app/src-tauri/src/cjk_proofread.rs | 302 | // ~30 high-confidence adverb stems. Picked for high precision — |
| app/src-tauri/src/dev_bridge.rs | 10 | //! - Tauri's `WebviewWindow::eval` is fire-and-forget (returns `Result<()>`, |
| app/src-tauri/src/dev_bridge.rs | 17 | //! POST /eval (called by dev-mcp) |
| app/src-tauri/src/dev_bridge.rs | 48 | // Pending eval registry — id -> oneshot sender that completes the /eval call. |
| app/src-tauri/src/dev_bridge.rs | 219 | // /result/<id> — the WebView posting back its eval result. No auth: the |
| app/src-tauri/src/dev_bridge.rs | 246 | if req.method == "POST" && req.path == "/eval" { |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| app/scripts/solomd-export.mjs | 5 | * Used by `solomd export <file>` (the bash CLI wrapper) and by the MCP |
| app/src-tauri/build.rs | 14 | // gate all AI / Agent / Recipe surfaces out of the binary; GitHub |
| app/src-tauri/src/agent_run.rs | 1 | //! v4.0 pillar 1 — agent run persistence. |
| app/src-tauri/src/agent_run.rs | 3 | //! Every agent run (Panel chat OR Recipe execution — recipes land in P2) |
| app/src-tauri/src/agent_run.rs | 7 | //! <workspace>/.solomd/agent-runs/<run-id>/ |
| app/src-tauri/src/agent_run.rs | 32 | /// Agent run kind. Matches `meta.json.kind`. |
| app/src-tauri/src/agent_run.rs | 203 | /// (Anthropic + OpenAI both supply their own ids in streaming payloads, so |
| app/src-tauri/src/agent_run.rs | 204 | /// this is held in reserve for P2/P3 / dev-mcp drivers that originate calls |

## Gap

_없음_
