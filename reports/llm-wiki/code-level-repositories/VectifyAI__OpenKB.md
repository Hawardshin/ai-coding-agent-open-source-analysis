# VectifyAI/OpenKB 코드 레벨 분석

생성일: 2026-06-17T23:31:22.711Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (98) |
| stars | 2083 |
| language | Python |
| tags | rag, knowledge-base, agent-knowledge, korea-signal |
| files/code/source | 100/85/37 |
| tests/ci | 48/1 |
| local path | sources/VectifyAI__OpenKB |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 17 | 6 | openkb/cli.py:252 "ingest documents first." |
| Parsing/OCR/document extraction | code | 27 | 6 | openkb/cli.py:5 # when markitdown pulls it in). markitdown later clobbers the filters during |
| Chunking/splitting | code | 8 | 7 | openkb/lint.py:35 - Strip leading/trailing hyphens (per segment when path-like) |
| Embedding/vector index | code | 5 | 2 | openkb/cli.py:470 that vector while still allowing common forms ("en", "ko", "Korean", |
| Retrieval/search/rerank | code | 12 | 8 | openkb/url_ingest.py:101 m = re.search(r"filename\*=(?:[\w-]+'[\w-]*')?([^;]+)", header) |
| Wiki/graph/entity model | code | 23 | 9 | openkb/cli.py:235 * any of ``<kb>/wiki/{summaries,concepts,entities}`` has at least |
| Memory/update lifecycle | code | 27 | 8 | openkb/cli.py:269 """Delete an existing ``<kb>/output/skills/<name>/`` directory.""" |
| Provenance/citation/evidence | code | 16 | 4 | openkb/cli.py:357 asyncio.run(compile_short_doc(doc_name, result.source_path, kb_dir, model)) |
| Evaluation/observability | code | 7 | 3 | openkb/cli.py:2113 @skill.command("eval") |
| Agent/MCP/tool surface | code | 62 | 23 | openkb/cli.py:22 from agents import set_tracing_disabled |

## 의존성 신호

- LLM/app framework: litellm, openai-agents
- Document parsing/OCR: markitdown

## 주요 파일 후보

### Ingestion/source intake

- `openkb/cli.py`
- `openkb/converter.py`
- `openkb/locks.py`
- `openkb/schema.py`
- `openkb/url_ingest.py`
- `openkb/agent/compiler.py`
- `.github/workflows/publish.yml`
- `tests/test_converter.py`
- `tests/test_locks.py`
- `tests/test_read_kb_file.py`
- `tests/test_remove.py`
- `tests/test_skill_cli.py`
- ... 5 more

### Parsing/OCR/document extraction

- `openkb/cli.py`
- `openkb/converter.py`
- `openkb/images.py`
- `openkb/indexer.py`
- `openkb/lint.py`
- `openkb/url_ingest.py`
- `pyproject.toml`
- `tests/test_add_command.py`
- `tests/test_chat_slash_commands.py`
- `tests/test_compiler.py`
- `tests/test_converter.py`
- `tests/test_feedback.py`
- ... 6 more

### Chunking/splitting

- `openkb/lint.py`
- `openkb/state.py`
- `openkb/url_ingest.py`
- `openkb/agent/chat.py`
- `openkb/agent/compiler.py`
- `openkb/agent/query.py`
- `openkb/skill/evaluator.py`
- `skills/openkb-deck-neon/SKILL.md`

### Embedding/vector index

- `openkb/cli.py`
- `openkb/images.py`
- `tests/conftest.py`
- `tests/test_cli.py`
- `README.md`

### Retrieval/search/rerank

- `openkb/url_ingest.py`
- `openkb/agent/compiler.py`
- `openkb/agent/query.py`
- `openkb/agent/skills.py`
- `openkb/skill/__init__.py`
- `openkb/skill/creator.py`
- `openkb/skill/tools.py`
- `openkb/skill/validator.py`
- `pyproject.toml`
- `README.md`
- `openkb/prompts/skill_create.md`
- `skills/openkb/SKILL.md`

### Wiki/graph/entity model

- `openkb/cli.py`
- `openkb/config.py`
- `openkb/lint.py`
- `openkb/schema.py`
- `openkb/agent/compiler.py`
- `openkb/agent/linter.py`
- `openkb/agent/query.py`
- `openkb/deck/validator.py`
- `openkb/skill/validator.py`
- `tests/test_chat_slash_commands.py`
- `tests/test_cli.py`
- `tests/test_compiler.py`
- ... 6 more

### Memory/update lifecycle

- `openkb/cli.py`
- `openkb/converter.py`
- `openkb/lint.py`
- `openkb/url_ingest.py`
- `openkb/watcher.py`
- `openkb/agent/chat.py`
- `openkb/agent/compiler.py`
- `openkb/skill/marketplace.py`
- `tests/test_add_command.py`
- `tests/test_cli.py`
- `tests/test_compiler.py`
- `tests/test_converter.py`
- ... 6 more

### Provenance/citation/evidence

- `openkb/cli.py`
- `openkb/converter.py`
- `openkb/state.py`
- `openkb/agent/compiler.py`
- `tests/test_add_command.py`
- `tests/test_compiler.py`
- `tests/test_converter.py`
- `tests/test_recompile.py`
- `tests/test_remove.py`
- `tests/test_skill_validator.py`
- `tests/test_state.py`
- `tests/test_url_ingest.py`
- ... 4 more

### Evaluation/observability

- `openkb/cli.py`
- `openkb/skill/evaluator.py`
- `openkb/skill/validator.py`
- `tests/test_cli.py`
- `tests/test_skill_cli.py`
- `tests/test_skill_evaluator.py`
- `README.md`

### Agent/MCP/tool surface

- `openkb/cli.py`
- `openkb/config.py`
- `openkb/lint.py`
- `openkb/schema.py`
- `openkb/url_ingest.py`
- `openkb/agent/__init__.py`
- `openkb/agent/_markdown.py`
- `openkb/agent/chat_session.py`
- `openkb/agent/chat.py`
- `openkb/agent/compiler.py`
- `openkb/agent/linter.py`
- `openkb/agent/query.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| openkb/cli.py | 252 | "ingest documents first." |
| openkb/cli.py | 261 | "Wiki has no compiled content yet. Ingest at least one " |
| openkb/cli.py | 295 | pipeline stage raised. URL-ingest distinguishes these so it can |
| openkb/cli.py | 397 | append_log(kb_dir / "wiki", "ingest", file_path.name) |
| openkb/cli.py | 643 | # URL ingest: download into raw/ first, then call add_single_file |
| openkb/cli.py | 905 | # openkb.images during ingest, keyed by doc_name. |
| openkb/converter.py | 61 | without a registry entry are either leftovers of a failed ingest of |
| openkb/converter.py | 77 | with new content) keeps its name so re-ingest overwrites in place. |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| openkb/cli.py | 5 | # when markitdown pulls it in). markitdown later clobbers the filters during |
| openkb/cli.py | 53 | # Suppress warnings after all imports — markitdown overrides filters at import time |
| openkb/cli.py | 156 | ".pdf", ".md", ".markdown", ".docx", ".pptx", ".xlsx", ".xls", |
| openkb/cli.py | 165 | _SHORT_DOC_TYPES = {"pdf", "docx", "md", "markdown", "html", "htm", "txt", "csv", "pptx", "xlsx", "xls"} |
| openkb/cli.py | 388 | # to free the managed PDF copy + SQLite row. |
| openkb/cli.py | 634 | fetched into ``raw/`` first: PDF responses (by Content-Type and |
| openkb/cli.py | 635 | magic-byte sniff) are saved as ``.pdf``; HTML responses are run |
| openkb/cli.py | 843 | IDENTIFIER may be the original filename ("paper.pdf"), the doc_name |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| openkb/lint.py | 35 | - Strip leading/trailing hyphens (per segment when path-like) |
| openkb/lint.py | 42 | # Normalize each path segment independently to avoid collapsing the '/' |
| openkb/state.py | 129 | for chunk in iter(lambda: fh.read(65536), b""): |
| openkb/state.py | 130 | h.update(chunk) |
| openkb/url_ingest.py | 160 | chunk = response.read(_CHUNK_BYTES) |
| openkb/url_ingest.py | 161 | if not chunk: |
| openkb/url_ingest.py | 163 | fh.write(chunk) |
| openkb/agent/chat.py | 342 | segment: list[str] = [] |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| openkb/cli.py | 470 | that vector while still allowing common forms ("en", "ko", "Korean", |
| openkb/images.py | 30 | as PNG. This captures both embedded bitmaps *and* vector-rendered figures |
| tests/conftest.py | 32 | embedding_model: text-embedding-3-small |
| tests/test_cli.py | 114 | """A --language value with embedded newlines is a prompt-injection vector.""" |
| README.md | 9 | <p align="center"><i>Scale to long documents&nbsp; • &nbsp;Reasoning-based retrieval&nbsp; • &nbsp;Native multi-modality&nbsp; • &nbsp;No Vector DB</i></p> |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| openkb/url_ingest.py | 101 | m = re.search(r"filename\*=(?:[\w-]+'[\w-]*')?([^;]+)", header) |
| openkb/url_ingest.py | 105 | m = re.search(r'filename="([^"]+)"', header) |
| openkb/url_ingest.py | 109 | m = re.search(r"filename=([^\s;]+)", header) |
| openkb/agent/compiler.py | 954 | if re.search(rf"^{re.escape(key)}:", fm, flags=re.MULTILINE): |
| openkb/agent/query.py | 25 | ## Search strategy |
| openkb/agent/skills.py | 7 | Skill search roots (first hit wins on name collision): |
| openkb/skill/__init__.py | 100 | m = _DESC_RE.search(fm) |
| openkb/skill/creator.py | 8 | * Tools are scoped: the same deep-retrieval primitives the query agent |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| openkb/cli.py | 235 | * any of ``<kb>/wiki/{summaries,concepts,entities}`` has at least |
| openkb/cli.py | 592 | Path("wiki/entities").mkdir(parents=True, exist_ok=True) |
| openkb/cli.py | 830 | help="Keep concept AND entity pages whose only source was the " |
| openkb/cli.py | 847 | concept- and entity-page frontmatter and Related Documents sections, |
| openkb/cli.py | 851 | Concept and entity pages whose only source was this doc are deleted by |
| openkb/cli.py | 929 | # Scan entity pages with the same frontmatter logic as concepts. The |
| openkb/cli.py | 932 | affected_entities = scan_affected_pages(wiki_dir / "entities", source_file_marker) |
| openkb/cli.py | 937 | actions.append(("DELETE", f"wiki/entities/{slug}.md (only source: this doc)")) |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| openkb/cli.py | 269 | """Delete an existing ``<kb>/output/skills/<name>/`` directory.""" |
| openkb/cli.py | 294 | is already in the registry (dedup), or ``"failed"`` when any |
| openkb/cli.py | 296 | unlink the just-downloaded raw file on dedup (it would otherwise |
| openkb/cli.py | 372 | # instance, and an earlier snapshot would clobber that backfill on |
| openkb/cli.py | 392 | # stale entry for the same doc_name so the registry keeps exactly |
| openkb/cli.py | 654 | # Only clean up on dedup-skip. On "failed" we keep the file so |
| openkb/cli.py | 782 | return False, "no PageIndex doc to delete" |
| openkb/cli.py | 786 | "skipping (re-add to refresh)" |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| openkb/cli.py | 357 | asyncio.run(compile_short_doc(doc_name, result.source_path, kb_dir, model)) |
| openkb/cli.py | 384 | if result.source_path is not None: |
| openkb/cli.py | 385 | meta["source_path"] = _registry_path(result.source_path, kb_dir) |
| openkb/cli.py | 1262 | source_path = wiki_dir / "sources" / f"{name}.md" |
| openkb/cli.py | 1263 | if not source_path.exists(): |
| openkb/cli.py | 1266 | f"{source_path.relative_to(kb_dir)}." |
| openkb/cli.py | 1273 | asyncio.run(compiler.compile_short_doc(name, source_path, kb_dir, model)) |
| openkb/converter.py | 27 | source_path: Path \| None = None |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| openkb/cli.py | 2113 | @skill.command("eval") |
| openkb/cli.py | 2117 | help="Persist the generated eval set to .openkb/eval-sets/<name>.json", |
| openkb/cli.py | 2120 | "--eval-set", "eval_set_path", default=None, type=click.Path(), |
| openkb/cli.py | 2121 | help="Use a saved eval set instead of generating fresh prompts.", |
| openkb/cli.py | 2131 | Generates trigger-eval prompts via LLM, then asks a grader LLM whether |
| openkb/cli.py | 2162 | click.echo(f"Loaded eval set from {eval_set_path} ({len(eval_set)} prompts).") |
| openkb/cli.py | 2164 | click.echo(f"Generating eval set for '{name}' (count={count} per side)...") |
| openkb/skill/evaluator.py | 1 | """Quality evaluation for compiled skills. |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| openkb/cli.py | 22 | from agents import set_tracing_disabled |
| openkb/cli.py | 76 | OpenAI models can omit the prefix; default to ``"openai"``. |
| openkb/cli.py | 83 | return "openai" |
| openkb/cli.py | 95 | so that the Agents SDK litellm provider can pick them up. |
| openkb/cli.py | 300 | from openkb.agent.compiler import compile_long_doc, compile_short_doc |
| openkb/cli.py | 466 | ``_SYSTEM_TEMPLATE`` in ``openkb/agent/compiler.py`` and the query agent's |
| openkb/cli.py | 540 | "(e.g. 'gpt-5.4-mini', 'anthropic/claude-sonnet-4-6'). " |
| openkb/cli.py | 559 | click.echo(" OpenAI: gpt-5.4-mini, gpt-5.4") |

## Gap

_없음_
