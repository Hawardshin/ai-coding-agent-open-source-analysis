# ohbryt/bb-wiki 코드 레벨 분석

생성일: 2026-06-17T23:31:13.125Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | persistent-llm-wiki |
| maturity | C focused implementation (47) |
| stars | 0 |
| language | Python |
| tags | direct-llm-wiki, knowledge-base, document-chat, korea-signal |
| files/code/source | 28/2/2 |
| tests/ci | 0/0 |
| local path | sources/ohbryt__bb-wiki |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 10 | 1 | scripts/ingest_deep_dive.py:161 def ingest(source_path: Path, type_: Optional[str] = None, dry_run: bool = False) -> Optional[Path]: |
| Parsing/OCR/document extraction | doc-only | 14 | 0 | index.md:85 - 새 source (논문/PDF/URL) 받았을 때: `python3 scripts/ingest_deep_dive.py <path> --type <concept\|entity\|comparison>` |
| Chunking/splitting | doc-only | 1 | 0 | concepts/turbovec_turboquant_analysis.md:146 \| **scGPT query → top-1 hit** \| ✓ chunk 698 (lexical) \| ✓ chunk 739 (semantic) \| Both work \| |
| Embedding/vector index | doc-only | 6 | 0 | index.md:36 - [[turbovec_turboquant_analysis]] — turbovec vector index (Codrai 2026) |
| Retrieval/search/rerank | code | 10 | 1 | scripts/wiki_lint.py:161 if not pattern.search(content): |
| Wiki/graph/entity model | code | 10 | 2 | scripts/ingest_deep_dive.py:9 python3 scripts/ingest_deep_dive.py <source.md> [--type concept\|entity\|comparison] [--dry-run] |
| Memory/update lifecycle | code | 13 | 1 | scripts/wiki_lint.py:18 7. Stale content (updated > 90일) |
| Provenance/citation/evidence | code | 14 | 1 | scripts/ingest_deep_dive.py:161 def ingest(source_path: Path, type_: Optional[str] = None, dry_run: bool = False) -> Optional[Path]: |
| Evaluation/observability | doc-only | 13 | 0 | comparisons/arp27_vs_claw_ai_lab_analysis.md:20 \| 시스템 \| 날짜 \| 도메인 \| 핵심 기여 \| Mode 수 \| Anti-fab \| Sandbox \| Empirical Eval \| 도메인 적응 \| |
| Agent/MCP/tool surface | doc-only | 15 | 0 | index.md:22 - [[harness-engineering]] — `wquguru/harness-books` (2.5k ⭐) 패턴 — 7 기관 + 10 원칙. BB ARP v27 + 4-agent + bb-wiki 가 9/9 챕터 작동 구현 |

## 의존성 신호

_없음_

## 주요 파일 후보

### Ingestion/source intake

- `scripts/ingest_deep_dive.py`
- `index.md`
- `log.md`
- `README.md`
- `SCHEMA.md`
- `concepts/livia_deep_analysis.md`
- `concepts/oxphos-cancer-vulnerability.md`
- `concepts/scgpt_deep_analysis.md`
- `concepts/turbovec_turboquant_analysis.md`
- `queries/2026-06-15-keap1-nrf2-io-biomarker-companion-diagnostic.md`

### Parsing/OCR/document extraction

- `index.md`
- `README.md`
- `SCHEMA.md`
- `concepts/agentic_patterns_brownbiotech_mapping.md`
- `concepts/agi-to-asi-pathways-bb-context.md`
- `concepts/bb-io-compass-operations.md`
- `concepts/claw_ai_lab_brief.md`
- `concepts/livia_deep_analysis.md`
- `concepts/mash_review_deep_integration.md`
- `concepts/oxphos-cancer-vulnerability.md`
- `concepts/research-paper-format-gwas-first.md`
- `concepts/scgpt_deep_analysis.md`
- ... 2 more

### Chunking/splitting

- `concepts/turbovec_turboquant_analysis.md`

### Embedding/vector index

- `index.md`
- `README.md`
- `concepts/aurora_deep_analysis.md`
- `concepts/scgpt_deep_analysis.md`
- `concepts/ssr_likert_syntheticconsumers_deep_analysis.md`
- `concepts/turbovec_turboquant_analysis.md`

### Retrieval/search/rerank

- `scripts/wiki_lint.py`
- `SCHEMA.md`
- `comparisons/arp27_vs_claw_ai_lab_analysis.md`
- `concepts/agentic_patterns_brownbiotech_mapping.md`
- `concepts/agi-to-asi-pathways-bb-context.md`
- `concepts/scgpt_deep_analysis.md`
- `concepts/tpp_dgat1_conjugate_research_plan.md`
- `concepts/turbovec_turboquant_analysis.md`
- `queries/2026-06-15-keap1-nrf2-io-biomarker-companion-diagnostic.md`
- `queries/2026-06-15-keap1-nrf2-metabolic-vulnerabilities.md`

### Wiki/graph/entity model

- `scripts/ingest_deep_dive.py`
- `scripts/wiki_lint.py`
- `index.md`
- `log.md`
- `README.md`
- `SCHEMA.md`
- `concepts/agi-to-asi-pathways-bb-context.md`
- `concepts/bb-io-compass-operations.md`
- `concepts/bb-io-compass.md`
- `entities/naaa-chembl2419814.md`

### Memory/update lifecycle

- `scripts/wiki_lint.py`
- `log.md`
- `README.md`
- `SCHEMA.md`
- `comparisons/arp27_vs_claw_ai_lab_analysis.md`
- `concepts/agentic_patterns_brownbiotech_mapping.md`
- `concepts/agi-to-asi-pathways-bb-context.md`
- `concepts/harness-engineering.md`
- `concepts/livia_deep_analysis.md`
- `concepts/research-paper-format-gwas-first.md`
- `concepts/scgpt_deep_analysis.md`
- `concepts/ssr_likert_syntheticconsumers_deep_analysis.md`
- ... 1 more

### Provenance/citation/evidence

- `scripts/ingest_deep_dive.py`
- `log.md`
- `SCHEMA.md`
- `comparisons/arp27_vs_claw_ai_lab_analysis.md`
- `concepts/bb-io-compass-operations.md`
- `concepts/bb-io-compass.md`
- `concepts/claw_ai_lab_brief.md`
- `concepts/mash_review_deep_integration.md`
- `concepts/research-paper-format-gwas-first.md`
- `concepts/scgpt_deep_analysis.md`
- `concepts/ssr_likert_syntheticconsumers_deep_analysis.md`
- `concepts/timesfm.md`
- ... 2 more

### Evaluation/observability

- `comparisons/arp27_vs_claw_ai_lab_analysis.md`
- `concepts/agentic_patterns_brownbiotech_mapping.md`
- `concepts/agi-to-asi-pathways-bb-context.md`
- `concepts/aurora_deep_analysis.md`
- `concepts/bb-io-compass-operations.md`
- `concepts/claw_ai_lab_brief.md`
- `concepts/livia_deep_analysis.md`
- `concepts/research-paper-format-gwas-first.md`
- `concepts/scgpt_deep_analysis.md`
- `concepts/ssr_likert_syntheticconsumers_deep_analysis.md`
- `concepts/timesfm.md`
- `concepts/tpp_dgat1_conjugate_research_plan.md`
- ... 1 more

### Agent/MCP/tool surface

- `index.md`
- `log.md`
- `README.md`
- `comparisons/arp27_vs_claw_ai_lab_analysis.md`
- `concepts/agentic_patterns_brownbiotech_mapping.md`
- `concepts/agi-to-asi-pathways-bb-context.md`
- `concepts/aurora_deep_analysis.md`
- `concepts/bb-io-compass.md`
- `concepts/claw_ai_lab_brief.md`
- `concepts/harness-engineering.md`
- `concepts/livia_deep_analysis.md`
- `concepts/research-paper-format-gwas-first.md`
- ... 3 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| scripts/ingest_deep_dive.py | 161 | def ingest(source_path: Path, type_: Optional[str] = None, dry_run: bool = False) -> Optional[Path]: |
| scripts/ingest_deep_dive.py | 237 | f"\n## [{today}] ingest \| {fname}\n" |
| scripts/ingest_deep_dive.py | 251 | parser.add_argument("--batch", action="store_true", help="Batch ingest all arp-v27 deep-dives") |
| scripts/ingest_deep_dive.py | 262 | print(f"\n📥 Batch ingest: {len(sources)} sources\n") |
| scripts/ingest_deep_dive.py | 265 | target = ingest(src, type_=args.type, dry_run=args.dry_run) |
| scripts/ingest_deep_dive.py | 270 | print(f"\n📥 Ingest: {src.name}\n") |
| scripts/ingest_deep_dive.py | 271 | target = ingest(src, type_=args.type, dry_run=args.dry_run) |
| scripts/ingest_deep_dive.py | 282 | print(f"\n✅ Ingest complete: {len(actions)} pages\n") |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| index.md | 85 | - 새 source (논문/PDF/URL) 받았을 때: `python3 scripts/ingest_deep_dive.py <path> --type <concept\|entity\|comparison>` |
| README.md | 72 | - 각 인용은 `[[raw/.../source.pdf]]` 또는 DOI/PMID 링크 |
| SCHEMA.md | 28 | ├── raw/ ← Layer 1: 불변 소스 (PDF, arXiv, 외부 자료) |
| SCHEMA.md | 59 | - 각 인용은 `[[raw/.../source.pdf#page=X]]` 또는 DOI/PMID 링크 |
| concepts/agentic_patterns_brownbiotech_mapping.md | 17 | **Source:** `/Users/ocm/.hermes/cache/documents/doc_4c91cd50e736_Agentic_Design_Patterns.pdf` (424 pages) |
| concepts/agi-to-asi-pathways-bb-context.md | 159 | - **Raw source:** [[raw/AGI_to_ASI_Genewein_DeepMind_2026_arXiv_2606_12683]] (PDF at `/Users/ocm/.hermes/cache/documents/doc_5b4db191ad8d_2606.12683v1.pdf`) |
| concepts/bb-io-compass-operations.md | 41 | - **PDF clinical report** — 4 sections: Specimen QC / Variant results (Tier 1 genes + context) / PD-L1 TPS / TMB / **Decision recommendation** (cited: Alessi 2023, Skoulidis 2024, NCCN v.X.2026) |
| concepts/bb-io-compass-operations.md | 51 | (pathologist (PDF + FHIR |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| concepts/turbovec_turboquant_analysis.md | 146 | \| **scGPT query → top-1 hit** \| ✓ chunk 698 (lexical) \| ✓ chunk 739 (semantic) \| Both work \| |
| concepts/turbovec_turboquant_analysis.md | 147 | \| **"MASH liver fibrosis" → top hit** \| chunk 526 (lexical MASH) \| chunk 526 (semantic MASH) \| Both work \| |
| concepts/turbovec_turboquant_analysis.md | 148 | \| **"ferroptosis lipid peroxidation"** \| sparse match \| chunk 327 (semantic) \| turbovec wins \| |
| concepts/turbovec_turboquant_analysis.md | 154 | - "single-cell foundation model perturbation" → scGPT (chunk 698) ✓ |
| concepts/turbovec_turboquant_analysis.md | 155 | - "MASH liver fibrosis spatial transcriptomics" → Nature Comms 2026 (chunk 526) ✓ |
| concepts/turbovec_turboquant_analysis.md | 156 | - "sarcopenia aging muscle satellite cell" → chunk 1 (probably FAP/aging paper) ✓ |
| concepts/turbovec_turboquant_analysis.md | 157 | - "ferroptosis lipid peroxidation GPX4" → chunk 327 (semantic match) ✓ |
| concepts/turbovec_turboquant_analysis.md | 158 | - "scGPT Cui Wang 2024" → scGPT (chunk 739) ✓ |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| index.md | 36 | - [[turbovec_turboquant_analysis]] — turbovec vector index (Codrai 2026) |
| README.md | 141 | PRISM RAG (FAISS+turbovec) ──┤ |
| concepts/aurora_deep_analysis.md | 94 | **Latent embedding aging clock (best performer):** |
| concepts/aurora_deep_analysis.md | 108 | **AUC improvement using AURORA-generated embeddings vs real data:** |
| concepts/aurora_deep_analysis.md | 195 | - Each feature initialized as "feature book" embedding |
| concepts/aurora_deep_analysis.md | 197 | - Multi-head self-attention learns final feature embeddings |
| concepts/aurora_deep_analysis.md | 202 | - Modality classifier aligns sample embeddings across modalities |
| concepts/aurora_deep_analysis.md | 204 | - Age-confounding embeddings enable disease prediction without age bias |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| scripts/wiki_lint.py | 161 | if not pattern.search(content): |
| SCHEMA.md | 205 | - **Frontmatter 필수** — search/filter/staleness 추적의 기반 |
| comparisons/arp27_vs_claw_ai_lab_analysis.md | 23 | \| **AI Scientist v2** (Yamada et al. 2025) \| 2025-04 \| AI research \| Agentic tree search \| 1 (tree) \| ❌ \| ❌ \| workshop-level \| general \| |
| concepts/agentic_patterns_brownbiotech_mapping.md | 41 | \| 8 \| **Memory Management** \| `~/.hermes/memories/MEMORY.md` (compact), `USER.md` (persona), `SonnetDB` (session search); Notion hub \| ✓ \| |
| concepts/agentic_patterns_brownbiotech_mapping.md | 52 | \| 14 \| **Knowledge Retrieval (RAG)** \| PRISM (`FAISSVectorStore` TF-IDF + new `TurboVectorStore` MiniLM 4-bit); 744 chunks indexed \| ✓ \| |
| concepts/agi-to-asi-pathways-bb-context.md | 78 | - Test-time scaling (deep retrieval, multi-step reasoning)은 활용 가능 |
| concepts/scgpt_deep_analysis.md | 130 | - Future queries about "single-cell foundation model", "perturbation prediction", "cell type annotation" will retrieve this paper |
| concepts/tpp_dgat1_conjugate_research_plan.md | 216 | - [ ] Patent search detailed |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| scripts/ingest_deep_dive.py | 9 | python3 scripts/ingest_deep_dive.py <source.md> [--type concept\|entity\|comparison] [--dry-run] |
| scripts/ingest_deep_dive.py | 14 | 2. 파일명/내용에서 페이지 type 추론 (concept/entity/comparison) |
| scripts/ingest_deep_dive.py | 17 | 5. 적절한 폴더에 저장 (concepts/, entities/, comparisons/) |
| scripts/ingest_deep_dive.py | 157 | """[[wikilink]] 개수 카운트.""" |
| scripts/ingest_deep_dive.py | 175 | # judgment layer 템플릿이 wikilink 추가 기회를 줌 |
| scripts/ingest_deep_dive.py | 189 | "entity": "entities", |
| scripts/ingest_deep_dive.py | 205 | """index.md 업데이트 (Entities/Concepts/Comparisons 섹션).""" |
| scripts/ingest_deep_dive.py | 215 | elif "entities/" in str(rel): |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| scripts/wiki_lint.py | 18 | 7. Stale content (updated > 90일) |
| scripts/wiki_lint.py | 197 | # === 7. Stale content (updated > 90일) === |
| scripts/wiki_lint.py | 203 | f"[{stem}] Stale: updated {updated} ({days_since(updated)} days ago)" |
| log.md | 5 | > Actions: create, ingest, update, query, lint, archive, delete, link |
| log.md | 90 | - Weekly rhythm (Friday): `python3 scripts/wiki_lint.py --strict` → wikilink/split/stale 정리 |
| log.md | 199 | - 10 Principles (Book 1 Ch9 canonical): models are unstable / prompt is control plane / query loop is heartbeat / tools are managed interfaces / context is working memory / error paths are main paths / recovery optimizes |
| log.md | 200 | - BB coverage map: 9/9 Book 1 챕터 BB 인프라 매핑 (Ch2 prompt_builder · Ch3 run_agent · Ch4 approval · Ch5 compressor+MEMORY · Ch6 cron-silent-failure · Ch7 4-agent+feature-factory · Ch8 skills hub · Ch9 10 원칙 canonical checkli |
| README.md | 115 | - Stale 페이지 (90일+) — update or archive |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| scripts/ingest_deep_dive.py | 161 | def ingest(source_path: Path, type_: Optional[str] = None, dry_run: bool = False) -> Optional[Path]: |
| scripts/ingest_deep_dive.py | 163 | if not source_path.exists(): |
| scripts/ingest_deep_dive.py | 164 | print(f" ❌ Source not found: {source_path}") |
| scripts/ingest_deep_dive.py | 167 | content = source_path.read_text(encoding="utf-8") |
| scripts/ingest_deep_dive.py | 168 | title = extract_title(source_path) |
| scripts/ingest_deep_dive.py | 169 | page_type = type_ or detect_type(source_path) |
| scripts/ingest_deep_dive.py | 183 | frontmatter = build_frontmatter(title, page_type, tags, source_path.name) |
| scripts/ingest_deep_dive.py | 192 | target_path = target_dir / f"{source_path.stem.lower()}.md" |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| comparisons/arp27_vs_claw_ai_lab_analysis.md | 20 | \| 시스템 \| 날짜 \| 도메인 \| 핵심 기여 \| Mode 수 \| Anti-fab \| Sandbox \| Empirical Eval \| 도메인 적응 \| |
| comparisons/arp27_vs_claw_ai_lab_analysis.md | 27 | \| **DeepResearcher** (Zheng et al. 2025) \| 2025-12 \| Web research \| RL-based real environment \| 1 \| ❌ \| ❌ \| EMNLP benchmark \| web \| |
| comparisons/arp27_vs_claw_ai_lab_analysis.md | 41 | EXPERIMENT — compute + metrics Validate (Bayesian ranking) |
| comparisons/arp27_vs_claw_ai_lab_analysis.md | 76 | \| Metric recording \| ✅ \| ✅ (.prism_runs/{run_id}/metrics.jsonl) \| |
| comparisons/arp27_vs_claw_ai_lab_analysis.md | 97 | - [ ] **Council vs Verify A/B** — Brown Biotech 도메인에서 어떤 mode가 더 효과적인지 empirical eval |
| comparisons/arp27_vs_claw_ai_lab_analysis.md | 98 | - [ ] **Public benchmark** — 5대 외부 multi-agent (AutoResearchClaw, AI Scientist v2, AgentLaboratory, Robin, Co-Scientist)와 drug discovery task에서 직접 비교 |
| comparisons/arp27_vs_claw_ai_lab_analysis.md | 111 | 3. **Empirical evaluation 약함** → 5 diseases × 33 targets의 internal만 → **외부 paper reproducibility 공개 benchmark**가 가장 효과적인 external validation |
| comparisons/arp27_vs_claw_ai_lab_analysis.md | 120 | \| **Public benchmark vs 4 multi-agent** \| ★★★★ \| marketing + research combo \| |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| index.md | 22 | - [[harness-engineering]] — `wquguru/harness-books` (2.5k ⭐) 패턴 — 7 기관 + 10 원칙. BB ARP v27 + 4-agent + bb-wiki 가 9/9 챕터 작동 구현 |
| index.md | 40 | - [[agi-to-asi-pathways-bb-context]] — **BB strategic context** — Genewein et al. (DeepMind 2026) 4 ASI pathways (scaling / paradigm shift / recursive SI / multi-agent) → BB positioning mapping. Pathway 3+4에 직접 매핑 (ARP v |
| log.md | 186 | - 4 Pathways covered: Scaling (compute/models/data), Algorithmic paradigm shifts, Recursive self-improvement, Multi-agent coordination |
| log.md | 188 | - BB relevance mapping: Pathway 3 (RSI) + Pathway 4 (Multi-agent) = highest relevance (ARP v27, bb-wiki, SoI); Pathway 2 (Paradigm shift) = medium; Pathway 1 (Scaling) = weak |
| log.md | 191 | - Triggered by: Dr. OCM E 선택 (D + light F) per CLAUDE.md checkpoint #1 |
| log.md | 199 | - 10 Principles (Book 1 Ch9 canonical): models are unstable / prompt is control plane / query loop is heartbeat / tools are managed interfaces / context is working memory / error paths are main paths / recovery optimizes |
| log.md | 200 | - BB coverage map: 9/9 Book 1 챕터 BB 인프라 매핑 (Ch2 prompt_builder · Ch3 run_agent · Ch4 approval · Ch5 compressor+MEMORY · Ch6 cron-silent-failure · Ch7 4-agent+feature-factory · Ch8 skills hub · Ch9 10 원칙 canonical checkli |
| log.md | 205 | - Triggered by: Dr. OCM 공유 Tistory 글 (digitalbourgeois.tistory.com/m/3244) → "응 좋은 건 적용하자" (CLAUDE.md checkpoint #1 implicit) |

## Gap

- Evaluation/observability
- tests
- ci
