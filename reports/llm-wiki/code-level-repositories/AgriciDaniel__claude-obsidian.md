# AgriciDaniel/claude-obsidian 코드 레벨 분석

생성일: 2026-06-17T23:31:20.737Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | persistent-llm-wiki |
| maturity | A integrated platform (98) |
| stars | 7035 |
| language | Python |
| tags | direct-llm-wiki, knowledge-base, agent-knowledge |
| files/code/source | 190/29/20 |
| tests/ci | 9/1 |
| local path | sources/AgriciDaniel__claude-obsidian |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 64 | 6 | bin/setup-dragonscale.sh:4 # Provisions the runtime files that the wiki-ingest and wiki-lint skills |
| Parsing/OCR/document extraction | code | 28 | 1 | .obsidian/plugins/obsidian-banners/main.js:6 var Zn=Object.create;var Ie=Object.defineProperty;var ei=Object.getOwnPropertyDescriptor;var ui=Object.getOwnPropertyNames;var ti=Object.getPrototypeOf,ri=Object.prototype.hasOwnProperty;var Pu=t=>Ie(t,"__esModule",{valu |
| Chunking/splitting | code | 25 | 6 | bin/setup-retrieve.sh:19 # 5. Run contextual-prefix.py --all to chunk + contextualize every wiki page. |
| Embedding/vector index | code | 27 | 4 | bin/setup-dragonscale.sh:7 # Does NOT install ollama or pull any embedding model. Those are |
| Retrieval/search/rerank | code | 76 | 13 | bin/setup-retrieve.sh:2 # setup-retrieve.sh — opt-in bootstrap for wiki-retrieve (v1.7+). |
| Wiki/graph/entity model | code | 119 | 9 | bin/setup-dragonscale.sh:26 echo "ERR: missing $required. Reinstall the claude-obsidian plugin." >&2 |
| Memory/update lifecycle | code | 100 | 13 | bin/setup-dragonscale.sh:2 # setup-dragonscale.sh — opt-in installer for DragonScale Memory. |
| Provenance/citation/evidence | code | 39 | 2 | .obsidian/plugins/calendar/main.js:1634 return Object.assign({ getSourceSettings: (sourceId) => { |
| Evaluation/observability | code | 21 | 4 | scripts/benchmark-runner.py:2 """benchmark-runner.py — score v1.7 hybrid retrieval vs v1.6 baseline. |
| Agent/MCP/tool surface | code | 115 | 13 | bin/setup-dragonscale.sh:7 # Does NOT install ollama or pull any embedding model. Those are |

## 의존성 신호

_없음_

## 주요 파일 후보

### Ingestion/source intake

- `bin/setup-dragonscale.sh`
- `bin/setup-mode.sh`
- `bin/setup-retrieve.sh`
- `scripts/contextual-prefix.py`
- `scripts/wiki-lock.sh`
- `scripts/wiki-mode.py`
- `.raw/.manifest.json`
- `AGENTS.md`
- `CHANGELOG.md`
- `CLAUDE.md`
- `GEMINI.md`
- `README.md`
- ... 6 more

### Parsing/OCR/document extraction

- `.obsidian/plugins/obsidian-banners/main.js`
- `CHANGELOG.md`
- `README.md`
- `.raw/claude-obsidian-ecosystem-research.md`
- `commands/canvas.md`
- `docs/compound-vault-guide.md`
- `docs/install-guide.md`
- `docs/methodology-modes-guide.md`
- `wiki/getting-started.md`
- `wiki/index.md`
- `wiki/log.md`
- `docs/audits/v1.7.0-audit-2026-05-17.md`
- ... 6 more

### Chunking/splitting

- `bin/setup-retrieve.sh`
- `scripts/bm25-index.py`
- `scripts/contextual-prefix.py`
- `scripts/rerank.py`
- `scripts/retrieve.py`
- `.obsidian/plugins/calendar/main.js`
- `tests/test_bm25_index.py`
- `tests/test_contextual_prefix.py`
- `tests/test_retrieve.py`
- `CHANGELOG.md`
- `README.md`
- `docs/compound-vault-guide.md`
- ... 6 more

### Embedding/vector index

- `bin/setup-dragonscale.sh`
- `scripts/contextual-prefix.py`
- `scripts/rerank.py`
- `scripts/tiling-check.py`
- `tests/test_retrieve.py`
- `tests/test_tiling_check.py`
- `CHANGELOG.md`
- `README.md`
- `.raw/claude-obsidian-ecosystem-research.md`
- `docs/compound-vault-guide.md`
- `docs/dragonscale-guide.md`
- `wiki/index.md`
- ... 6 more

### Retrieval/search/rerank

- `bin/setup-retrieve.sh`
- `bin/setup-vault.sh`
- `scripts/baseline-v16.py`
- `scripts/benchmark-runner.py`
- `scripts/bm25-index.py`
- `scripts/boundary-score.py`
- `scripts/contextual-prefix.py`
- `scripts/detect-transport.sh`
- `scripts/rerank.py`
- `scripts/retrieve.py`
- `scripts/tiling-check.py`
- `.obsidian/plugins/calendar/main.js`
- ... 6 more

### Wiki/graph/entity model

- `bin/setup-dragonscale.sh`
- `bin/setup-mode.sh`
- `bin/setup-multi-agent.sh`
- `bin/setup-vault.sh`
- `scripts/boundary-score.py`
- `scripts/detect-transport.sh`
- `scripts/wiki-mode.py`
- `.obsidian/plugins/calendar/main.js`
- `.obsidian/plugins/obsidian-banners/main.js`
- `.claude-plugin/marketplace.json`
- `.claude-plugin/plugin.json`
- `.obsidian/community-plugins.json`
- ... 6 more

### Memory/update lifecycle

- `bin/setup-dragonscale.sh`
- `scripts/baseline-v16.py`
- `scripts/bm25-index.py`
- `scripts/boundary-score.py`
- `scripts/contextual-prefix.py`
- `scripts/detect-transport.sh`
- `scripts/rerank.py`
- `scripts/retrieve.py`
- `scripts/tiling-check.py`
- `scripts/wiki-lock.sh`
- `scripts/wiki-mode.py`
- `.obsidian/plugins/calendar/main.js`
- ... 6 more

### Provenance/citation/evidence

- `.obsidian/plugins/calendar/main.js`
- `.obsidian/plugins/obsidian-banners/main.js`
- `CHANGELOG.md`
- `CLAUDE.md`
- `CODE_OF_CONDUCT.md`
- `CONTRIBUTING.md`
- `README.md`
- `_templates/question.md`
- `.raw/claude-obsidian-ecosystem-research.md`
- `agents/verifier.md`
- `wiki/index.md`
- `wiki/log.md`
- ... 6 more

### Evaluation/observability

- `scripts/benchmark-runner.py`
- `scripts/bm25-index.py`
- `scripts/contextual-prefix.py`
- `.obsidian/plugins/calendar/main.js`
- `.claude-plugin/marketplace.json`
- `CHANGELOG.md`
- `PRIVACY.md`
- `README.md`
- `.raw/claude-obsidian-ecosystem-research.md`
- `commands/wiki.md`
- `docs/methodology-modes-guide.md`
- `wiki/hot.md`
- ... 6 more

### Agent/MCP/tool surface

- `bin/setup-dragonscale.sh`
- `bin/setup-multi-agent.sh`
- `bin/setup-retrieve.sh`
- `bin/setup-vault.sh`
- `scripts/baseline-v16.py`
- `scripts/benchmark-runner.py`
- `scripts/contextual-prefix.py`
- `scripts/detect-transport.sh`
- `scripts/rerank.py`
- `scripts/retrieve.py`
- `scripts/tiling-check.py`
- `scripts/wiki-lock.sh`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| bin/setup-dragonscale.sh | 4 | # Provisions the runtime files that the wiki-ingest and wiki-lint skills |
| bin/setup-dragonscale.sh | 67 | "description": "Ingest delta tracker and address map for the claude-obsidian vault. Do not hand-edit; wiki-ingest maintains this.", |
| bin/setup-dragonscale.sh | 127 | echo "wiki-ingest and wiki-lint will now feature-detect DragonScale automatically." |
| bin/setup-mode.sh | 139 | say "Other skills (wiki-ingest, save, autoresearch) will consult this mode automatically." |
| bin/setup-retrieve.sh | 5 | # safe to re-run after schema changes or full vault re-ingest. |
| scripts/contextual-prefix.py | 4 | Implements the ingest-side of Anthropic's Sept 2024 Contextual Retrieval pattern |
| scripts/wiki-lock.sh | 6 | # The README and skills/wiki-ingest/SKILL.md §259-264 documented "single-writer |
| scripts/wiki-lock.sh | 23 | # (page writes are milliseconds; a multi-write ingest pass is seconds); |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| .obsidian/plugins/obsidian-banners/main.js | 6 | var Zn=Object.create;var Ie=Object.defineProperty;var ei=Object.getOwnPropertyDescriptor;var ui=Object.getOwnPropertyNames;var ti=Object.getPrototypeOf,ri=Object.prototype.hasOwnProperty;var Pu=t=>Ie(t,"__esModule",{valu |
| CHANGELOG.md | 347 | - Multimodal ingest adapters (YouTube, PDF, EPUB, image OCR via `wiki-ingest-multimodal`) — planned for v1.9. |
| README.md | 187 | \| `/canvas add pdf [path]` \| Add a PDF document as a rendered preview node \| |
| README.md | 235 | /canvas add pdf <path> # render PDF as preview node |
| .raw/claude-obsidian-ecosystem-research.md | 150 | - PDF + audio → Markdown conversion (right-click or auto-on-add) |
| .raw/claude-obsidian-ecosystem-research.md | 151 | - Web page → Markdown/PNG/PDF capture |
| commands/canvas.md | 13 | \| `/canvas add pdf [path]` \| Add a PDF document node \| |
| docs/compound-vault-guide.md | 274 | - **v1.9** — Multimodal ingest adapters (YouTube, PDF, EPUB, image OCR via `wiki-ingest-multimodal`). Closes gaps #8 + #12. |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| bin/setup-retrieve.sh | 19 | # 5. Run contextual-prefix.py --all to chunk + contextualize every wiki page. |
| bin/setup-retrieve.sh | 187 | # ── 5. Chunk + contextualize every wiki page ───────────────────────────────── |
| scripts/bm25-index.py | 5 | Indexes the `contextualized_text` field of every chunk under .vault-meta/chunks/, |
| scripts/bm25-index.py | 23 | "<chunk_id>": {"path": ".vault-meta/chunks/c-000001/chunk-000.json", "dl": 487} |
| scripts/bm25-index.py | 27 | Chunk id format: "<page-address>:<chunk-index>" (e.g. "c-000042:3"). |
| scripts/bm25-index.py | 119 | """Yield (chunk_id, path, contextualized_text) for every chunk on disk. |
| scripts/bm25-index.py | 130 | for chunk_file in sorted(CHUNKS_DIR.glob("*/chunk-*.json")): |
| scripts/contextual-prefix.py | 2 | """contextual-prefix.py — chunk wiki pages and generate per-chunk contextual prefixes. |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| bin/setup-dragonscale.sh | 7 | # Does NOT install ollama or pull any embedding model. Those are |
| scripts/contextual-prefix.py | 24 | and vector channels still work). |
| scripts/rerank.py | 4 | Takes a query string + a list of candidate chunks (from BM25, vector, or any |
| scripts/rerank.py | 10 | rank by cosine. Caches per-chunk embeddings in |
| scripts/rerank.py | 24 | are POSTed as embedding input. |
| scripts/rerank.py | 119 | f"{url}/api/embeddings", |
| scripts/rerank.py | 126 | return data.get("embedding") or [] |
| scripts/tiling-check.py | 4 | Computes per-page embeddings via a local ollama instance and reports |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| bin/setup-retrieve.sh | 2 | # setup-retrieve.sh — opt-in bootstrap for wiki-retrieve (v1.7+). |
| bin/setup-retrieve.sh | 4 | # Provisions the contextual-prefix + BM25 + rerank pipeline. Idempotent; |
| bin/setup-retrieve.sh | 8 | # 1. Sanity-check that scripts/contextual-prefix.py, bm25-index.py, |
| bin/setup-retrieve.sh | 9 | # rerank.py, retrieve.py are present and executable. |
| bin/setup-retrieve.sh | 10 | # 2. Create .vault-meta/chunks/ and .vault-meta/bm25/ directories. |
| bin/setup-retrieve.sh | 12 | # contextual prefix tier 2/3, but required for the rerank cosine stage). |
| bin/setup-retrieve.sh | 26 | # 6. Run bm25-index.py build to build the inverted index. |
| bin/setup-retrieve.sh | 28 | # After completion the wiki-retrieve skill is "feature-detected" by other |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| bin/setup-dragonscale.sh | 26 | echo "ERR: missing $required. Reinstall the claude-obsidian plugin." >&2 |
| bin/setup-dragonscale.sh | 67 | "description": "Ingest delta tracker and address map for the claude-obsidian vault. Do not hand-edit; wiki-ingest maintains this.", |
| bin/setup-mode.sh | 76 | say " 1) generic — v1.7 default; wiki/sources/, entities/, concepts/" |
| bin/setup-mode.sh | 126 | mkdir -p "$VAULT/wiki/sources" "$VAULT/wiki/entities" \ |
| bin/setup-mode.sh | 128 | say "✓ Created generic folders: sources/, entities/, concepts/, sessions/" |
| bin/setup-multi-agent.sh | 2 | # claude-obsidian: multi-agent skill installer |
| bin/setup-multi-agent.sh | 8 | # - Codex CLI : symlink to ~/.codex/skills/claude-obsidian |
| bin/setup-multi-agent.sh | 9 | # - OpenCode : symlink to ~/.opencode/skills/claude-obsidian |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| bin/setup-dragonscale.sh | 2 | # setup-dragonscale.sh — opt-in installer for DragonScale Memory. |
| bin/setup-dragonscale.sh | 20 | echo "Setting up DragonScale Memory at: $VAULT" |
| bin/setup-dragonscale.sh | 125 | echo "See wiki/concepts/DragonScale Memory.md for the full spec." |
| scripts/baseline-v16.py | 93 | # Hot-cache boost: if the page is referenced by name in hot.md |
| scripts/bm25-index.py | 37 | bm25-index.py build # full rebuild (always; incremental is v1.7.x scope) |
| scripts/boundary-score.py | 60 | # No recency floor: a truly stale page should NOT dominate the frontier |
| scripts/contextual-prefix.py | 14 | Haiku 4.5 cache floor; see |
| scripts/contextual-prefix.py | 96 | # the API treats it as a silent no-op. The per-call cache telemetry in |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| .obsidian/plugins/calendar/main.js | 1634 | return Object.assign({ getSourceSettings: (sourceId) => { |
| .obsidian/plugins/calendar/main.js | 1636 | const defaultSourceSettings = (((_a = get_store_value$1(sources).find((source) => source.id === sourceId)) === null \|\| _a === void 0 ? void 0 : _a.defaultSettings) \|\| {}); |
| .obsidian/plugins/calendar/main.js | 1637 | const userSettings = (get_store_value$1(store).sourceSettings[sourceId] \|\| |
| .obsidian/plugins/obsidian-banners/main.js | 28 | `;let g=document.createElement("img"),y=(0,Ce.default)(l,0,1),F=(0,Ce.default)(D,0,1);g.className="banner-image full-width",g.style.objectPosition=`${y*100}% ${F*100}%`,g.draggable=!1,g.onload=()=>a.addClass("loaded"),g. |
| CHANGELOG.md | 382 | - `wiki/concepts/DragonScale Memory.md` — full design spec (v0.3) with four mechanisms, scope boundary, and primary-source citations. |
| CLAUDE.md | 79 | After staging changes for a non-trivial workstream but BEFORE running `git commit`, dispatch the `verifier` agent (`agents/verifier.md`). It reads `git diff --cached`, applies the /best-practices six-cut + agent kernel, |
| CODE_OF_CONDUCT.md | 16 | For the full standard text (including specific examples of acceptable and unacceptable behavior, enforcement guidelines, and attribution), see the [Contributor Covenant homepage](https://www.contributor-covenant.org/). |
| CONTRIBUTING.md | 61 | - Evidence over intuition (tests for new behavior) |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| scripts/benchmark-runner.py | 2 | """benchmark-runner.py — score v1.7 hybrid retrieval vs v1.6 baseline. |
| scripts/benchmark-runner.py | 4 | Reads the 50-query corpus at wiki/meta/retrieval-benchmark-v1.7.md, runs both |
| scripts/benchmark-runner.py | 13 | benchmark-runner.py # run all 50 queries, print summary |
| scripts/benchmark-runner.py | 14 | benchmark-runner.py --json results.json # also write per-query results |
| scripts/benchmark-runner.py | 15 | benchmark-runner.py --limit 5 # smoke: first 5 queries only |
| scripts/benchmark-runner.py | 26 | CORPUS = VAULT_ROOT / "wiki" / "meta" / "retrieval-benchmark-v1.7.md" |
| scripts/bm25-index.py | 31 | recall over precision). |
| scripts/bm25-index.py | 69 | # Small high-frequency-stopword list (English). Conservative — keep recall high. |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| bin/setup-dragonscale.sh | 7 | # Does NOT install ollama or pull any embedding model. Those are |
| bin/setup-dragonscale.sh | 26 | echo "ERR: missing $required. Reinstall the claude-obsidian plugin." >&2 |
| bin/setup-dragonscale.sh | 67 | "description": "Ingest delta tracker and address map for the claude-obsidian vault. Do not hand-edit; wiki-ingest maintains this.", |
| bin/setup-dragonscale.sh | 110 | echo " ollama: reachable at http://localhost:11434" |
| bin/setup-dragonscale.sh | 114 | echo " nomic-embed: NOT installed (run 'ollama pull nomic-embed-text' to enable Mechanism 3)" |
| bin/setup-dragonscale.sh | 117 | echo " ollama: not reachable (Mechanism 3 will no-op; install from https://ollama.com)" |
| bin/setup-dragonscale.sh | 120 | echo " curl: not installed (cannot check ollama)" |
| bin/setup-multi-agent.sh | 2 | # claude-obsidian: multi-agent skill installer |

## Gap

_없음_
