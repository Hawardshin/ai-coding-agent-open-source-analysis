# Ar9av/obsidian-wiki 코드 레벨 분석

생성일: 2026-06-17T23:31:22.537Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | persistent-llm-wiki |
| maturity | A integrated platform (88) |
| stars | 2232 |
| language | Python |
| tags | direct-llm-wiki, knowledge-base, agent-knowledge |
| files/code/source | 89/20/19 |
| tests/ci | 1/2 |
| local path | sources/Ar9av__obsidian-wiki |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 47 | 4 | scripts/daily-update.sh:56 # Count sources modified after last ingest |
| Parsing/OCR/document extraction | code | 12 | 1 | .skills/skill-creator/eval-viewer/generate_review.py:47 ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document", |
| Chunking/splitting | code | 5 | 1 | .skills/skill-creator/scripts/run_eval.py:112 chunk = os.read(process.stdout.fileno(), 8192) |
| Embedding/vector index | doc-only | 24 | 0 | .skills/claude-history-ingest/SKILL.md:437 If the output says vectors are needed or embeddings may be stale, run: |
| Retrieval/search/rerank | code | 40 | 2 | .skills/skill-creator/eval-viewer/generate_review.py:108 match = re.search(r"## Eval Prompt\n\n([\s\S]*?)(?=\n##\|$)", text) |
| Wiki/graph/entity model | code | 54 | 6 | setup.sh:3 # obsidian-wiki setup — configures skill discovery for all supported AI agents. |
| Memory/update lifecycle | code | 60 | 8 | setup.sh:213 # ── Step 4: GitHub sync (optional) ─────────────────────────── |
| Provenance/citation/evidence | code | 39 | 2 | scripts/extract-jsonl.py:125 source_path: str, |
| Evaluation/observability | code | 21 | 5 | .skills/skill-creator/eval-viewer/generate_review.py:2 """Generate and serve a review page for eval results. |
| Agent/MCP/tool surface | code | 58 | 10 | setup.sh:3 # obsidian-wiki setup — configures skill discovery for all supported AI agents. |

## 의존성 신호

_없음_

## 주요 파일 후보

### Ingestion/source intake

- `scripts/daily-update.sh`
- `scripts/extract-jsonl.py`
- `scripts/manifest.py`
- `scripts/wiki-notify.sh`
- `.github/workflows/publish.yml`
- `AGENTS.md`
- `README.md`
- `SETUP.md`
- `.github/copilot-instructions.md`
- `.agent/rules/obsidian-wiki.md`
- `.agent/workflows/obsidian-wiki.md`
- `.kiro/steering/obsidian-wiki.md`
- ... 6 more

### Parsing/OCR/document extraction

- `.skills/skill-creator/eval-viewer/generate_review.py`
- `.skills/llm-wiki/SKILL.md`
- `.skills/skill-creator/SKILL.md`
- `.skills/wiki-ingest/SKILL.md`
- `.skills/wiki-stage-commit/SKILL.md`
- `.skills/wiki-status/SKILL.md`
- `.skills/skill-creator/agents/analyzer.md`
- `.skills/skill-creator/agents/comparator.md`
- `.skills/skill-creator/agents/grader.md`
- `.skills/skill-creator/references/schemas.md`
- `.skills/wiki-ingest/references/ingest-prompts.md`
- `.skills/wiki-ingest/references/pageindex.md`

### Chunking/splitting

- `.skills/skill-creator/scripts/run_eval.py`
- `.skills/memory-bridge/SKILL.md`
- `.skills/wiki-dedup/SKILL.md`
- `.skills/wiki-import/SKILL.md`
- `.skills/wiki-ingest/references/url-sources.md`

### Embedding/vector index

- `.skills/claude-history-ingest/SKILL.md`
- `.skills/codex-history-ingest/SKILL.md`
- `.skills/copilot-history-ingest/SKILL.md`
- `.skills/cross-linker/SKILL.md`
- `.skills/daily-update/SKILL.md`
- `.skills/hermes-history-ingest/SKILL.md`
- `.skills/llm-wiki/SKILL.md`
- `.skills/openclaw-history-ingest/SKILL.md`
- `.skills/pi-history-ingest/SKILL.md`
- `.skills/tag-taxonomy/SKILL.md`
- `.skills/wiki-agent/SKILL.md`
- `.skills/wiki-capture/SKILL.md`
- ... 6 more

### Retrieval/search/rerank

- `.skills/skill-creator/eval-viewer/generate_review.py`
- `.skills/skill-creator/scripts/improve_description.py`
- `AGENTS.md`
- `README.md`
- `SETUP.md`
- `.agent/rules/obsidian-wiki.md`
- `.kiro/steering/obsidian-wiki.md`
- `.skills/claude-history-ingest/SKILL.md`
- `.skills/codex-history-ingest/SKILL.md`
- `.skills/copilot-history-ingest/SKILL.md`
- `.skills/cross-linker/SKILL.md`
- `.skills/daily-update/SKILL.md`
- ... 6 more

### Wiki/graph/entity model

- `setup.sh`
- `obsidian_wiki/__init__.py`
- `obsidian_wiki/cli.py`
- `scripts/daily-update.sh`
- `scripts/manifest.py`
- `scripts/wiki-notify.sh`
- `pyproject.toml`
- `.github/workflows/publish.yml`
- `AGENTS.md`
- `README.md`
- `SETUP.md`
- `.github/copilot-instructions.md`
- ... 6 more

### Memory/update lifecycle

- `setup.sh`
- `obsidian_wiki/cli.py`
- `scripts/daily-update.sh`
- `scripts/extract-jsonl.py`
- `scripts/manifest.py`
- `scripts/wiki-notify.sh`
- `.skills/skill-creator/scripts/generate_report.py`
- `.skills/skill-creator/scripts/run_loop.py`
- `tests/test_okf_same_name_link_roundtrip.py`
- `AGENTS.md`
- `README.md`
- `SETUP.md`
- ... 6 more

### Provenance/citation/evidence

- `scripts/extract-jsonl.py`
- `.skills/skill-creator/scripts/aggregate_benchmark.py`
- `AGENTS.md`
- `README.md`
- `SETUP.md`
- `.agent/workflows/obsidian-wiki.md`
- `.skills/claude-history-ingest/SKILL.md`
- `.skills/codex-history-ingest/SKILL.md`
- `.skills/copilot-history-ingest/SKILL.md`
- `.skills/hermes-history-ingest/SKILL.md`
- `.skills/llm-wiki/SKILL.md`
- `.skills/memory-bridge/SKILL.md`
- ... 6 more

### Evaluation/observability

- `.skills/skill-creator/eval-viewer/generate_review.py`
- `.skills/skill-creator/scripts/aggregate_benchmark.py`
- `.skills/skill-creator/scripts/improve_description.py`
- `.skills/skill-creator/scripts/run_eval.py`
- `.skills/skill-creator/scripts/run_loop.py`
- `.skills/codex-history-ingest/SKILL.md`
- `.skills/hermes-history-ingest/SKILL.md`
- `.skills/llm-wiki/SKILL.md`
- `.skills/openclaw-history-ingest/SKILL.md`
- `.skills/skill-creator/SKILL.md`
- `.skills/wiki-agent/SKILL.md`
- `.skills/wiki-ingest/SKILL.md`
- ... 6 more

### Agent/MCP/tool surface

- `setup.sh`
- `obsidian_wiki/__init__.py`
- `obsidian_wiki/cli.py`
- `scripts/extract-jsonl.py`
- `scripts/manifest.py`
- `scripts/wiki-notify.sh`
- `.claude/hooks/wiki-stop-capture.sh`
- `.skills/skill-creator/scripts/generate_report.py`
- `.skills/skill-creator/scripts/improve_description.py`
- `.skills/skill-creator/scripts/run_eval.py`
- `pyproject.toml`
- `.claude/settings.json`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| scripts/daily-update.sh | 56 | # Count sources modified after last ingest |
| scripts/daily-update.sh | 113 | echo "[wiki-daily] $stale_count source(s) have new content since last ingest. State: $STATE_DIR" |
| scripts/extract-jsonl.py | 6 | {turns: [{role, text}]} files that the ingest skill can read directly — reducing |
| scripts/manifest.py | 2 | """Manifest helper for the Obsidian wiki — normalize paths and compute ingest deltas. |
| scripts/manifest.py | 4 | Pure stdlib, no dependencies. Optional accelerator for the ingest skills: the |
| scripts/manifest.py | 11 | which otherwise causes silent re-ingestion in append mode (see issues #86/#88). |
| scripts/wiki-notify.sh | 35 | echo "│ /wiki-history-ingest claude sync Claude sessions" |
| .github/workflows/publish.yml | 44 | - uses: actions/upload-artifact@v4 |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| .skills/skill-creator/eval-viewer/generate_review.py | 47 | ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document", |
| .skills/skill-creator/eval-viewer/generate_review.py | 48 | ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation", |
| .skills/skill-creator/eval-viewer/generate_review.py | 176 | elif ext == ".pdf": |
| .skills/skill-creator/eval-viewer/generate_review.py | 184 | "type": "pdf", |
| .skills/llm-wiki/SKILL.md | 136 | - [2024-03-15T10:30:00Z] INGEST source="papers/attention.pdf" pages_updated=12 pages_created=3 |
| .skills/llm-wiki/SKILL.md | 169 | sources: [papers/attention.pdf] |
| .skills/llm-wiki/SKILL.md | 208 | Obsidian renders the needed primitives natively, so no extra tooling is required: Mermaid fenced diagrams, `$$…$$` LaTeX (MathJax), markdown tables, and `![[image]]` / `![[paper.pdf#page=N]]` embeds. |
| .skills/llm-wiki/SKILL.md | 228 | visual (see *Academic papers* in `wiki-ingest` for the PyMuPDF extraction recipe). |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| .skills/skill-creator/scripts/run_eval.py | 112 | chunk = os.read(process.stdout.fileno(), 8192) |
| .skills/skill-creator/scripts/run_eval.py | 113 | if not chunk: |
| .skills/skill-creator/scripts/run_eval.py | 115 | buffer += chunk.decode("utf-8", errors="replace") |
| .skills/memory-bridge/SKILL.md | 30 | \| `/memory-bridge diff` \| **Diff** — pages unique to each tool; overlap; blind spots \| |
| .skills/memory-bridge/SKILL.md | 101 | If no specific tools are given, compare all tools pairwise (limit to pairs with >0 overlap or unique pages to keep output concise). |
| .skills/wiki-dedup/SKILL.md | 55 | \| **Token overlap** \| Jaccard similarity of lowercased title word-tokens (split on spaces, hyphens, underscores, punctuation) \| 0.65 \| |
| .skills/wiki-dedup/SKILL.md | 71 | \| Tag overlap ≥ 3 shared tags \| +0.15 \| |
| .skills/wiki-dedup/SKILL.md | 72 | \| Tag overlap ≥ 2 shared tags \| +0.05 \| |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| .skills/claude-history-ingest/SKILL.md | 437 | If the output says vectors are needed or embeddings may be stale, run: |
| .skills/codex-history-ingest/SKILL.md | 222 | If the output says vectors are needed or embeddings may be stale, run: |
| .skills/copilot-history-ingest/SKILL.md | 350 | If the output says vectors are needed or embeddings may be stale, run: |
| .skills/cross-linker/SKILL.md | 247 | If the output says vectors are needed or embeddings may be stale, run: |
| .skills/daily-update/SKILL.md | 176 | If the output says vectors are needed or embeddings may be stale, run: |
| .skills/hermes-history-ingest/SKILL.md | 213 | If the output says vectors are needed or embeddings may be stale, run: |
| .skills/llm-wiki/SKILL.md | 331 | \| `uses` \| This page depends on or relies on the target \| RAG uses Vector Databases \| |
| .skills/openclaw-history-ingest/SKILL.md | 231 | If the output says vectors are needed or embeddings may be stale, run: |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| .skills/skill-creator/eval-viewer/generate_review.py | 108 | match = re.search(r"## Eval Prompt\n\n([\s\S]*?)(?=\n##\|$)", text) |
| .skills/skill-creator/scripts/improve_description.py | 146 | match = re.search(r"<new_description>(.*?)</new_description>", text, re.DOTALL) |
| .skills/skill-creator/scripts/improve_description.py | 175 | match = re.search(r"<new_description>(.*?)</new_description>", shorten_text, re.DOTALL) |
| AGENTS.md | 122 | - **Compile, don't retrieve.** The wiki is pre-compiled knowledge. Update existing pages — don't append or duplicate. |
| README.md | 238 | - **Cross-agent targeted search.** `/wiki-claude`, `/wiki-codex`, `/wiki-hermes`, `/wiki-openclaw`, `/wiki-copilot`, `/wiki-pi` — query-driven ingest from a specific agent's raw history. Say `/wiki-codex "rust ownership" |
| README.md | 254 | - **Tiered retrieval.** `wiki-query` reads titles, tags, and page summaries first and only opens page bodies when the cheap pass can't answer. Say "quick answer" or "just scan" to force index-only mode. Keeps query cost |
| README.md | 256 | - **QMD semantic search (optional).** [QMD](https://github.com/tobi/qmd) indexes your wiki and source documents for semantic search. When `QMD_WIKI_COLLECTION` is set in `.env`, `wiki-query` runs a lex+vec pass against t |
| README.md | 260 | ## Optional: QMD Semantic Search |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| setup.sh | 3 | # obsidian-wiki setup — configures skill discovery for all supported AI agents. |
| setup.sh | 9 | # 2. Writes ~/.obsidian-wiki/config so skills work from any project |
| setup.sh | 101 | echo "║ obsidian-wiki — Agent Setup ║" |
| setup.sh | 114 | # ── Step 1b: ~/.obsidian-wiki/config ───────────────────────── |
| setup.sh | 115 | GLOBAL_CONFIG_DIR="$HOME/.obsidian-wiki" |
| setup.sh | 129 | read -p " Where is your Obsidian vault? (absolute path): " VAULT_PATH \|\| true |
| setup.sh | 144 | echo "✅ Global config written to ~/.obsidian-wiki/config" |
| setup.sh | 168 | ".kiro/skills" # Kiro IDE/CLI (paired with .kiro/steering/obsidian-wiki.md) |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| setup.sh | 213 | # ── Step 4: GitHub sync (optional) ─────────────────────────── |
| setup.sh | 218 | read -p " Set up GitHub sync for your vault? [y/N]: " SETUP_SYNC \|\| true |
| setup.sh | 232 | .obsidian/cache |
| setup.sh | 246 | # Write ~/.obsidian-wiki/sync.sh |
| setup.sh | 247 | cat > "$GLOBAL_CONFIG_DIR/sync.sh" <<'SYNC_SCRIPT' |
| setup.sh | 249 | # wiki-sync — commit and push vault changes to GitHub |
| setup.sh | 254 | [ -d "$VAULT" ] \|\| { echo "wiki-sync: vault not found at '$VAULT'" >&2; exit 1; } |
| setup.sh | 258 | echo "wiki-sync: nothing to commit" |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| scripts/extract-jsonl.py | 125 | source_path: str, |
| scripts/extract-jsonl.py | 130 | mtime = os.path.getmtime(source_path) |
| scripts/extract-jsonl.py | 134 | entry = manifest.get(source_path) |
| scripts/extract-jsonl.py | 288 | for source_path in all_files: |
| scripts/extract-jsonl.py | 291 | if is_skipped(source_path, skips): |
| scripts/extract-jsonl.py | 294 | print(f" SKIP(pattern) {source_path}") |
| scripts/extract-jsonl.py | 297 | if not needs_extraction(source_path, ext_manifest, since_ts): |
| scripts/extract-jsonl.py | 300 | print(f" SKIP(unchanged) {source_path}") |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| .skills/skill-creator/eval-viewer/generate_review.py | 2 | """Generate and serve a review page for eval results. |
| .skills/skill-creator/eval-viewer/generate_review.py | 31 | METADATA_FILES = {"transcript.md", "user_notes.md", "metrics.json"} |
| .skills/skill-creator/eval-viewer/generate_review.py | 108 | match = re.search(r"## Eval Prompt\n\n([\s\S]*?)(?=\n##\|$)", text) |
| .skills/skill-creator/eval-viewer/generate_review.py | 254 | benchmark: dict \| None = None, |
| .skills/skill-creator/eval-viewer/generate_review.py | 276 | if benchmark: |
| .skills/skill-creator/eval-viewer/generate_review.py | 277 | embedded["benchmark"] = benchmark |
| .skills/skill-creator/eval-viewer/generate_review.py | 312 | picks up new eval outputs without restarting the server. |
| .skills/skill-creator/eval-viewer/generate_review.py | 336 | benchmark = None |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| setup.sh | 3 | # obsidian-wiki setup — configures skill discovery for all supported AI agents. |
| setup.sh | 10 | # 3. Symlinks .skills/* into each agent's expected skills directory: |
| setup.sh | 12 | # - .claude/skills/ (Claude Code) |
| setup.sh | 15 | # - .agents/skills/ (AGENTS.md-aware agents, generic) |
| setup.sh | 18 | # - ~/.claude/skills/ (Claude Code, portable skills only) |
| setup.sh | 19 | # - ~/.gemini/skills/ (Gemini CLI) |
| setup.sh | 20 | # - ~/.codex/skills/ (Codex) |
| setup.sh | 27 | # - ~/.agents/skills/ (OpenCode, Aider, Factory Droid, generic) |

## Gap

_없음_
