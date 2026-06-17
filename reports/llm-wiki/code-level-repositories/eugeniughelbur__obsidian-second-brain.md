# eugeniughelbur/obsidian-second-brain 코드 레벨 분석

생성일: 2026-06-17T23:31:53.023Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (88) |
| stars | 2519 |
| language | Python |
| tags | knowledge-base, document-chat, agent-knowledge |
| files/code/source | 159/62/60 |
| tests/ci | 2/2 |
| local path | sources/eugeniughelbur__obsidian-second-brain |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 12 | 1 | scripts/research/notebooklm.py:9 2. Upload the top 12 most relevant notes to an ephemeral Gemini File Search store. |
| Parsing/OCR/document extraction | code | 8 | 1 | integrations/telegram-journal/telegram_journal.py:353 PDF_PROMPT = """This PDF was saved by the user to their AI-first Obsidian vault. Write a note \ |
| Chunking/splitting | code | 7 | 2 | scripts/bootstrap_vault.py:229 # Use top-level segment for description lookup |
| Embedding/vector index | doc-only | 1 | 0 | commands/research.md:9 1. Resolve the topic from the user's argument. Multi-word topics fine ("AI memory tools", "vector databases for RAG"). If no topic, ask: "What topic should I research?" |
| Retrieval/search/rerank | code | 92 | 32 | adapters/lib.sh:269 s/\bWebSearch tool\b/search the web/g; |
| Wiki/graph/entity model | code | 105 | 30 | install.sh:9 CONFIG_DIR="$HOME/.config/obsidian-second-brain" |
| Memory/update lifecycle | code | 65 | 28 | install.sh:44 echo " (symlinks require Developer Mode - commands were copied; run update.sh to refresh)" |
| Provenance/citation/evidence | code | 25 | 7 | scripts/bootstrap_vault.py:1066 Source note (book, paper, podcast, video, article). Captures citation, abstract or summary, and raw notes. `source_kind` distinguishes the form (book/paper/podcast/etc.). Pull this when reasoning about what's been read o |
| Evaluation/observability | code | 4 | 1 | scripts/run-command.sh:57 # Resolve the vault. Use bash parameter expansion for the tilde (never `eval`, |
| Agent/MCP/tool surface | code | 120 | 40 | install.sh:6 CLAUDE_DIR="$HOME/.claude" |

## 의존성 신호

- LLM/app framework: openai

## 주요 파일 후보

### Ingestion/source intake

- `scripts/research/notebooklm.py`
- `.github/ISSUE_TEMPLATE/bug_report.yml`
- `.github/workflows/scorecard.yml`
- `architecture.md`
- `CHANGELOG.md`
- `FORK_INSIGHTS.md`
- `llms.txt`
- `README.md`
- `SKILL.md`
- `commands/obsidian-calendar.md`
- `commands/obsidian-daily.md`
- `commands/obsidian-ingest.md`

### Parsing/OCR/document extraction

- `integrations/telegram-journal/telegram_journal.py`
- `CHANGELOG.md`
- `README.md`
- `SKILL.md`
- `commands/obsidian-catchup.md`
- `commands/obsidian-ingest.md`
- `references/vault-schema.md`
- `integrations/telegram-journal/README.md`

### Chunking/splitting

- `scripts/bootstrap_vault.py`
- `scripts/research/lib/podcast.py`
- `FORK_INSIGHTS.md`
- `SKILL.md`
- `commands/obsidian-agenda.md`
- `commands/obsidian-connect.md`
- `commands/obsidian-graduate.md`

### Embedding/vector index

- `commands/research.md`

### Retrieval/search/rerank

- `adapters/lib.sh`
- `hooks/obsidian-bg-agent.sh`
- `scripts/architect_scan.py`
- `scripts/heal_links.py`
- `scripts/migrate_log.py`
- `scripts/mine_commit_decisions.py`
- `scripts/triage_links.py`
- `scripts/vault_health.py`
- `scripts/vault_stats.py`
- `integrations/telegram-journal/telegram_journal.py`
- `scripts/research/notebooklm.py`
- `scripts/research/podcast_extract.py`
- ... 6 more

### Wiki/graph/entity model

- `install.sh`
- `hooks/load_vault_context.py`
- `hooks/obsidian-bg-agent.sh`
- `hooks/validate-ai-first.sh`
- `scripts/architect_scan.py`
- `scripts/bootstrap_vault.py`
- `scripts/export_okf.py`
- `scripts/heal_links.py`
- `scripts/install-codex-wrappers.sh`
- `scripts/mine_commit_decisions.py`
- `scripts/quick-install.sh`
- `scripts/run-command.sh`
- ... 6 more

### Memory/update lifecycle

- `install.sh`
- `update.sh`
- `hooks/obsidian-bg-agent.sh`
- `scripts/architect_scan.py`
- `scripts/heal_links.py`
- `scripts/mine_commit_decisions.py`
- `scripts/setup.sh`
- `scripts/triage_links.py`
- `scripts/vault_health.py`
- `scripts/vault_stats.py`
- `scripts/research/notebooklm.py`
- `scripts/research/research_deep.py`
- ... 6 more

### Provenance/citation/evidence

- `scripts/bootstrap_vault.py`
- `scripts/export_okf.py`
- `scripts/research/podcast_extract.py`
- `scripts/research/research_deep.py`
- `scripts/research/research.py`
- `scripts/research/lib/perplexity.py`
- `scripts/research/lib/podcast.py`
- `_config.yml`
- `CHANGELOG.md`
- `CLAUDE.md`
- `CODE_OF_CONDUCT.md`
- `CONTRIBUTING.md`
- ... 6 more

### Evaluation/observability

- `scripts/run-command.sh`
- `CHANGELOG.md`
- `llms.txt`
- `examples/sample-vault/Projects/Tide.md`

### Agent/MCP/tool surface

- `install.sh`
- `update.sh`
- `adapters/lib.sh`
- `hooks/load_vault_context.py`
- `hooks/obsidian-bg-agent.sh`
- `hooks/validate-ai-first.sh`
- `scripts/architect_scan.py`
- `scripts/bootstrap_vault.py`
- `scripts/build.sh`
- `scripts/export_okf.py`
- `scripts/install-codex-wrappers.sh`
- `scripts/migrate_log.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| scripts/research/notebooklm.py | 9 | 2. Upload the top 12 most relevant notes to an ephemeral Gemini File Search store. |
| scripts/research/notebooklm.py | 148 | """Upload one file, then poll the operation until it finishes. |
| scripts/research/notebooklm.py | 166 | raise TimeoutError(f"upload timed out after 300s: {hit['path']}") |
| .github/ISSUE_TEMPLATE/bug_report.yml | 33 | - "/obsidian-ingest" |
| .github/workflows/scorecard.yml | 21 | security-events: write # upload SARIF to the code-scanning dashboard |
| .github/workflows/scorecard.yml | 36 | - name: "Upload artifact" |
| .github/workflows/scorecard.yml | 37 | uses: actions/upload-artifact@v7 |
| .github/workflows/scorecard.yml | 43 | - name: "Upload to code-scanning" |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| integrations/telegram-journal/telegram_journal.py | 353 | PDF_PROMPT = """This PDF was saved by the user to their AI-first Obsidian vault. Write a note \ |
| integrations/telegram-journal/telegram_journal.py | 405 | if not (mime == "application/pdf" or name.lower().endswith(".pdf")): |
| integrations/telegram-journal/telegram_journal.py | 408 | reply(chat_id, "got the PDF, reading it...") |
| integrations/telegram-journal/telegram_journal.py | 414 | safe = re.sub(r"[^A-Za-z0-9._-]+", "-", name) or "document.pdf" |
| integrations/telegram-journal/telegram_journal.py | 423 | "source": {"type": "base64", "media_type": "application/pdf", "data": b64}}, |
| integrations/telegram-journal/telegram_journal.py | 428 | print(f"pdf read failed: {e}", file=sys.stderr) |
| integrations/telegram-journal/telegram_journal.py | 429 | body = f"TITLE: {name}\n\n(Could not read the PDF automatically - file saved for later.)" |
| integrations/telegram-journal/telegram_journal.py | 443 | f"tags:\n - literature\n - pdf\n - telegram-capture\nai-first: true\n---\n\n") |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| scripts/bootstrap_vault.py | 229 | # Use top-level segment for description lookup |
| scripts/bootstrap_vault.py | 1030 | segment: |
| scripts/bootstrap_vault.py | 1037 | Audience segment note. Captures who they are, what they want, what they read, and the hooks that work for them. Pull this before drafting content aimed at this segment. |
| scripts/research/lib/podcast.py | 200 | f"(segment keys: {sample_keys}). Likely Deepgram/AssemblyAI/custom schema. " |
| scripts/research/lib/podcast.py | 254 | for chunk in resp.iter_content(chunk_size=64 * 1024): |
| scripts/research/lib/podcast.py | 255 | bytes_written += len(chunk) |
| scripts/research/lib/podcast.py | 264 | tmp.write(chunk) |
| FORK_INSIGHTS.md | 61 | 8. **[P1] `/obsidian-agenda`** (`the calendar/workflow fork`) - calendar snapshot for a range with four quality detectors: overlap conflicts, 3+ back-to-back stretches, focus-gap detection, externally-organized events. C |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| commands/research.md | 9 | 1. Resolve the topic from the user's argument. Multi-word topics fine ("AI memory tools", "vector databases for RAG"). If no topic, ask: "What topic should I research?" |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| adapters/lib.sh | 269 | s/\bWebSearch tool\b/search the web/g; |
| adapters/lib.sh | 271 | s/\bGrep tool\b/search file contents/g; |
| hooks/obsidian-bg-agent.sh | 72 | 3. Before creating any note, search for an existing one. Never duplicate. |
| scripts/architect_scan.py | 90 | m = re.search(r'(?m)^\s*name\s*=\s*["\']([^"\']+)["\']', text) |
| scripts/architect_scan.py | 94 | dep_block = re.search(r"dependencies\s*=\s*\[(.*?)\]", text, re.DOTALL) |
| scripts/heal_links.py | 83 | m = LINK_IN_MSG.search(iss["message"]) |
| scripts/heal_links.py | 103 | m = LINK_IN_MSG.search(iss["message"]) |
| scripts/migrate_log.py | 53 | - **Cross-day queries** - search `Logs/` directly, do not scan this file |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| install.sh | 9 | CONFIG_DIR="$HOME/.config/obsidian-second-brain" |
| install.sh | 12 | echo "Installing obsidian-second-brain..." |
| install.sh | 48 | SKILL_LINK="$SKILLS_DIR/obsidian-second-brain" |
| install.sh | 60 | echo " git clone https://github.com/eugeniughelbur/obsidian-second-brain ~/.claude/skills/obsidian-second-brain" |
| install.sh | 120 | echo " 1. Run /obsidian-init to generate your vault's _CLAUDE.md" |
| hooks/load_vault_context.py | 12 | "command": "python ~/.claude/skills/obsidian-second-brain/hooks/load_vault_context.py" } |
| hooks/obsidian-bg-agent.sh | 2 | # obsidian-bg-agent.sh - PostCompact vault propagation hook |
| hooks/obsidian-bg-agent.sh | 20 | # 4. Make executable: chmod +x hooks/obsidian-bg-agent.sh |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| install.sh | 44 | echo " (symlinks require Developer Mode - commands were copied; run update.sh to refresh)" |
| install.sh | 86 | (cd "$SKILL_DIR" && uv sync --quiet) |
| update.sh | 17 | # Copied commands (Windows without Developer Mode) need an explicit refresh. |
| hooks/obsidian-bg-agent.sh | 32 | # PostCompact stdin includes `transcript_path`; the compaction summary itself |
| hooks/obsidian-bg-agent.sh | 92 | - Do not archive, delete, or merge anything - only add or update. |
| scripts/architect_scan.py | 29 | ".idea", ".vscode", "vendor", "coverage", ".turbo", ".cache", "out", |
| scripts/heal_links.py | 19 | triage_links.py, which sorts dangling links into keep / create / delete. |
| scripts/heal_links.py | 23 | Run it for real, bounded to N safe fixes, recounting each pass so you can watch: |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| scripts/bootstrap_vault.py | 1066 | Source note (book, paper, podcast, video, article). Captures citation, abstract or summary, and raw notes. `source_kind` distinguishes the form (book/paper/podcast/etc.). Pull this when reasoning about what's been read o |
| scripts/bootstrap_vault.py | 1068 | ## Citation |
| scripts/bootstrap_vault.py | 1114 | Hypothesis note. Captures a testable statement, predictions, evidence for and against, and a verdict. Pull this when reasoning about open questions or when new evidence arrives that could update an open hypothesis. |
| scripts/bootstrap_vault.py | 1120 | ## Evidence For |
| scripts/bootstrap_vault.py | 1122 | ## Evidence Against |
| scripts/export_okf.py | 38 | RESOURCE_KEYS = ("resource", "url", "source_url", "post-url", "post_url", "repo", "linkedin") |
| scripts/research/podcast_extract.py | 60 | - **Wikilinks are mandatory.** Wrap every named person, company, project, product, book, and named concept in `[[Name]]` so future-Claude can traverse the vault graph. Examples: `[[Sam Altman]]`, `[[OpenAI]]`, `[[GPT-5]] |
| scripts/research/podcast_extract.py | 184 | print(f"**URL:** {episode.get('episode_url') or episode['source_url']}\n") |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| scripts/run-command.sh | 57 | # Resolve the vault. Use bash parameter expansion for the tilde (never `eval`, |
| CHANGELOG.md | 35 | - **Codex executable invocation path.** `scripts/run-command.sh` wraps any command's markdown into a `codex exec` prompt so the (otherwise inert) command files actually run on Codex CLI, and `scripts/install-codex-wrappe |
| CHANGELOG.md | 85 | - **`scripts/setup.sh` robustness:** four issues fixed together. Vault paths containing apostrophes or other shell metacharacters (`Joe's Notes`) no longer crash the installer - `eval echo` replaced with bash parameter s |
| llms.txt | 44 | **Vault (17)** - daily writing, capture, find, kanban, calendar, recurring obligations, recall: |
| examples/sample-vault/Projects/Tide.md | 26 | - **MRR:** TBD, not captured in this sample |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| install.sh | 6 | CLAUDE_DIR="$HOME/.claude" |
| install.sh | 24 | # Link commands into ~/.claude/commands/ (copy on Windows without Developer Mode) |
| install.sh | 47 | # Link skill into ~/.claude/skills/ |
| install.sh | 60 | echo " git clone https://github.com/eugeniughelbur/obsidian-second-brain ~/.claude/skills/obsidian-second-brain" |
| install.sh | 117 | echo "Done. Restart Claude Code to activate the commands." |
| update.sh | 6 | COMMANDS_DIR="$HOME/.claude/commands" |
| update.sh | 34 | echo "Done. Restart Claude Code to pick up the changes." |
| adapters/lib.sh | 95 | # (e.g. ".codex/commands" or ".gemini/commands") |

## Gap

_없음_
