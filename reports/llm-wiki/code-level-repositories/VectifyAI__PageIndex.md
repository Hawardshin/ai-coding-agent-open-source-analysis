# VectifyAI/PageIndex 코드 레벨 분석

생성일: 2026-06-17T23:31:19.943Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | agent-memory/tooling |
| maturity | C focused implementation (48) |
| stars | 33160 |
| language | Python |
| tags | rag, document-chat, agent-knowledge, korea-signal |
| files/code/source | 44/10/9 |
| tests/ci | 0/6 |
| local path | sources/VectifyAI__PageIndex |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | doc-only | 2 | 0 | examples/tutorials/doc-search/description.md:11 Upload all documents into PageIndex to get their `doc_id` and tree structure. |
| Parsing/OCR/document extraction | code | 19 | 5 | run_pageindex.py:10 parser = argparse.ArgumentParser(description='Process PDF or Markdown document and generate structure') |
| Chunking/splitting | code | 7 | 2 | pageindex/page_index.py:445 # Start new subset from overlap if specified |
| Embedding/vector index | doc-only | 6 | 0 | examples/workspace/12345678-abcd-4321-abcd-123456789abc.json:116 "summary": "The partial document discusses the concept of Attention Residuals (AttnRes) in Transformer architectures, focusing on their design, performance, and analysis. Key points include:\n\n1. **Component Design Abla |
| Retrieval/search/rerank | code | 16 | 5 | pageindex/__init__.py:3 from .retrieve import get_document, get_document_structure, get_page_content |
| Wiki/graph/entity model | doc-only | 8 | 0 | examples/documents/results/2023-annual-report_structure.json:133 "title": "Consumer and Community Affairs", |
| Memory/update lifecycle | code | 8 | 1 | pageindex/page_index.py:430 # merge all pages into one text |
| Provenance/citation/evidence | doc-only | 2 | 0 | examples/documents/results/PRML_structure.json:388 "title": "The Evidence Approximation", |
| Evaluation/observability | doc-only | 8 | 0 | .github/workflows/remove-autoclose-label.yml:2 # duplicate-flagged issue, signaling that the issue needs re-evaluation. |
| Agent/MCP/tool surface | code | 11 | 2 | pageindex/client.py:19 """Preserve supported Agents SDK prefixes and route other provider paths via LiteLLM.""" |

## 의존성 신호

- LLM/app framework: litellm
- Document parsing/OCR: pymupdf, PyPDF2

## 주요 파일 후보

### Ingestion/source intake

- `examples/tutorials/doc-search/description.md`
- `examples/tutorials/doc-search/metadata.md`

### Parsing/OCR/document extraction

- `run_pageindex.py`
- `pageindex/client.py`
- `pageindex/page_index.py`
- `pageindex/retrieve.py`
- `pageindex/utils.py`
- `examples/workspace/_meta.json`
- `examples/workspace/12345678-abcd-4321-abcd-123456789abc.json`
- `examples/documents/results/2023-annual-report_structure.json`
- `examples/documents/results/2023-annual-report-truncated_structure.json`
- `examples/documents/results/earthmover_structure.json`
- `examples/documents/results/four-lectures_structure.json`
- `examples/documents/results/PRML_structure.json`
- ... 6 more

### Chunking/splitting

- `pageindex/page_index.py`
- `.github/scripts/autoclose-labeled-issues.js`
- `examples/workspace/12345678-abcd-4321-abcd-123456789abc.json`
- `examples/documents/results/q1-fy25-earnings_structure.json`
- `examples/documents/results/Regulation Best Interest_proposed rule_structure.json`
- `examples/agentic_vectorless_rag_demo.py`
- `examples/tutorials/doc-search/semantics.md`

### Embedding/vector index

- `examples/workspace/12345678-abcd-4321-abcd-123456789abc.json`
- `examples/documents/results/PRML_structure.json`
- `examples/agentic_vectorless_rag_demo.py`
- `README.md`
- `examples/tutorials/doc-search/semantics.md`
- `examples/tutorials/tree-search/README.md`

### Retrieval/search/rerank

- `pageindex/__init__.py`
- `pageindex/client.py`
- `pageindex/page_index.py`
- `pageindex/retrieve.py`
- `pageindex/utils.py`
- `examples/workspace/12345678-abcd-4321-abcd-123456789abc.json`
- `examples/documents/results/earthmover_structure.json`
- `examples/agentic_vectorless_rag_demo.py`
- `README.md`
- `cookbook/README.md`
- `.claude/commands/dedupe.md`
- `examples/tutorials/doc-search/description.md`
- ... 4 more

### Wiki/graph/entity model

- `examples/documents/results/2023-annual-report_structure.json`
- `examples/documents/results/PRML_structure.json`
- `examples/documents/results/q1-fy25-earnings_structure.json`
- `examples/documents/results/Regulation Best Interest_proposed rule_structure.json`
- `examples/tutorials/doc-search/description.md`
- `examples/tutorials/doc-search/metadata.md`
- `examples/tutorials/doc-search/semantics.md`
- `examples/tutorials/tree-search/README.md`

### Memory/update lifecycle

- `pageindex/page_index.py`
- `.github/workflows/backfill-dedupe.yml`
- `.github/workflows/issue-dedupe.yml`
- `examples/workspace/_meta.json`
- `examples/workspace/12345678-abcd-4321-abcd-123456789abc.json`
- `examples/documents/results/Regulation Best Interest_proposed rule_structure.json`
- `README.md`
- `.claude/commands/dedupe.md`

### Provenance/citation/evidence

- `examples/documents/results/PRML_structure.json`
- `README.md`

### Evaluation/observability

- `.github/workflows/remove-autoclose-label.yml`
- `examples/workspace/12345678-abcd-4321-abcd-123456789abc.json`
- `examples/documents/results/earthmover_structure.json`
- `examples/documents/results/four-lectures_structure.json`
- `examples/documents/results/PRML_structure.json`
- `examples/documents/results/q1-fy25-earnings_structure.json`
- `examples/documents/results/Regulation Best Interest_proposed rule_structure.json`
- `README.md`

### Agent/MCP/tool surface

- `pageindex/client.py`
- `.github/scripts/autoclose-labeled-issues.js`
- `pageindex/config.yaml`
- `.github/workflows/backfill-dedupe.yml`
- `.github/workflows/issue-dedupe.yml`
- `examples/workspace/12345678-abcd-4321-abcd-123456789abc.json`
- `examples/documents/results/Regulation Best Interest_proposed rule_structure.json`
- `examples/agentic_vectorless_rag_demo.py`
- `README.md`
- `requirements.txt`
- `examples/tutorials/tree-search/README.md`

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| examples/tutorials/doc-search/description.md | 11 | Upload all documents into PageIndex to get their `doc_id` and tree structure. |
| examples/tutorials/doc-search/metadata.md | 19 | Upload all documents into PageIndex to get their `doc_id`. |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| run_pageindex.py | 10 | parser = argparse.ArgumentParser(description='Process PDF or Markdown document and generate structure') |
| run_pageindex.py | 11 | parser.add_argument('--pdf_path', type=str, help='Path to the PDF file') |
| run_pageindex.py | 17 | help='Number of pages to check for table of contents (PDF only)') |
| run_pageindex.py | 19 | help='Maximum number of pages per node (PDF only)') |
| run_pageindex.py | 21 | help='Maximum number of tokens per node (PDF only)') |
| run_pageindex.py | 48 | # Validate PDF file |
| run_pageindex.py | 49 | if not args.pdf_path.lower().endswith('.pdf'): |
| run_pageindex.py | 50 | raise ValueError("PDF file must have .pdf extension") |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| pageindex/page_index.py | 445 | # Start new subset from overlap if specified |
| .github/scripts/autoclose-labeled-issues.js | 47 | res.on('data', chunk => (data += chunk)); |
| examples/workspace/12345678-abcd-4321-abcd-123456789abc.json | 211 | "content": "Attention ResidualsTECHNICALREPORT\nRANK0\nRANK1\nRANK2\nRANK3[b0] [ ]\n[b0] [b1]\n[b0,b1] [ ]\n[b0,b1] [b2]+ [b 1,b2][ ]\n+ [b 1,b2][b3]\n+ [b 2,b3][ ]\n+ [b 2,b3][b4]VIRTUALSTAGE0 VIRTUALSTAGE1\n1 2\n1 2\n1 |
| examples/workspace/12345678-abcd-4321-abcd-123456789abc.json | 219 | "content": "Attention ResidualsTECHNICALREPORT\nall layers in a block through batching, the total per-layer memory access cost remains only (N\nS+ 3)d reads and 2d\nwrites (Table 1). This is substantially lower than the |
| examples/documents/results/q1-fy25-earnings_structure.json | 3 | "doc_description": "A comprehensive financial report detailing The Walt Disney Company's first-quarter fiscal 2025 performance, including revenue growth, segment highlights, guidance for fiscal 2025, and key financial me |
| examples/documents/results/q1-fy25-earnings_structure.json | 20 | "summary": "The partial document outlines The Walt Disney Company's financial performance for the first fiscal quarter of 2025, ending December 28, 2024. Key points include:\n\n1. **Financial Results**: \n - Revenue incr |
| examples/documents/results/q1-fy25-earnings_structure.json | 24 | "summary": "The partial document is a report from The Walt Disney Company detailing its financial performance for the first fiscal quarter of 2025, ending December 28, 2024. Key points include:\n\n1. **Financial Performa |
| examples/documents/results/q1-fy25-earnings_structure.json | 36 | "summary": "The partial document outlines Disney's financial guidance and outlook for fiscal 2025, including the deconsolidation of Star India and its impact on operating income for the Entertainment and Sports segments. |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| examples/workspace/12345678-abcd-4321-abcd-123456789abc.json | 116 | "summary": "The partial document discusses the concept of Attention Residuals (AttnRes) in Transformer architectures, focusing on their design, performance, and analysis. Key points include:\n\n1. **Component Design Abla |
| examples/workspace/12345678-abcd-4321-abcd-123456789abc.json | 195 | "content": "Attention ResidualsTECHNICALREPORT\n1 Introduction\nStandard residual connections [12] are thede factobuilding block of modern LLMs [35, 51, 9]. The update hl=\nhl−1+fl−1(hl−1)is widely understood as agradien |
| examples/workspace/12345678-abcd-4321-abcd-123456789abc.json | 199 | "content": "Attention ResidualsTECHNICALREPORT\n2 Motivation\nNotation.Consider a batch of input sequences with shape B×T×d , where Bis the batch size, Tis the sequence\nlength, and dis the hidden dimension. For clarity, |
| examples/workspace/12345678-abcd-4321-abcd-123456789abc.json | 203 | "content": "Attention ResidualsTECHNICALREPORT\n3.1 Full Attention Residuals\nThe attention weights can be written as αi→l=ϕ(q l,ki)for a kernel function ϕ:Rd×Rd→R≥0, where qland\nkiare query and key vectors [23, 70]. Di |
| examples/workspace/12345678-abcd-4321-abcd-123456789abc.json | 207 | "content": "Attention ResidualsTECHNICALREPORT\n1 def block_attn_res(blocks: list[Tensor], partial_block: Tensor, proj: Linear, norm: RMSNorm) -> Tensor:\n2 \"\"\"\n3 Inter-block attention: attend over block reps + parti |
| examples/workspace/12345678-abcd-4321-abcd-123456789abc.json | 215 | "content": "Attention ResidualsTECHNICALREPORT\nAlgorithm 1:Two-phase computation for blockn\nInput:Pseudo queries{w l}l∈Bn, block representations{b 0, . . . ,b n−1}\n/* Phase 1: Parallel inter-block attention */\n1Q←[w |
| examples/workspace/12345678-abcd-4321-abcd-123456789abc.json | 219 | "content": "Attention ResidualsTECHNICALREPORT\nall layers in a block through batching, the total per-layer memory access cost remains only (N\nS+ 3)d reads and 2d\nwrites (Table 1). This is substantially lower than the |
| examples/workspace/12345678-abcd-4321-abcd-123456789abc.json | 223 | "content": "Attention ResidualsTECHNICALREPORT\nTable 2: Baseline vs Block AttnRes ( N= 8 ) vs Full AttnRes vs mHC(-lite) [64]: Model configurations, Hyperparameters, and\nValidation Loss.\n# Act.\nParams†TokensL bH d mo |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| pageindex/__init__.py | 3 | from .retrieve import get_document, get_document_structure, get_page_content |
| pageindex/client.py | 12 | from .retrieve import get_document, get_document_structure, get_page_content |
| pageindex/page_index.py | 500 | match = re.search(pattern, text, re.DOTALL) |
| pageindex/retrieve.py | 112 | Retrieve page content for a document. |
| pageindex/utils.py | 250 | start_page_match = re.search(r'<start_index_(\d+)>', text) |
| examples/workspace/12345678-abcd-4321-abcd-123456789abc.json | 195 | "content": "Attention ResidualsTECHNICALREPORT\n1 Introduction\nStandard residual connections [12] are thede factobuilding block of modern LLMs [35, 51, 9]. The update hl=\nhl−1+fl−1(hl−1)is widely understood as agradien |
| examples/workspace/12345678-abcd-4321-abcd-123456789abc.json | 231 | "content": "Attention ResidualsTECHNICALREPORT\nTable 4: Ablation on key components of AttnRes (16-layer\nmodel).\nVariant Loss\nBaseline (PreNorm) 1.766\nDenseFormer [36] 1.767\nmHC [59] 1.747\nAttnRes Full 1.737\nw/ in |
| examples/workspace/12345678-abcd-4321-abcd-123456789abc.json | 251 | "content": "Attention ResidualsTECHNICALREPORT\nPrior Residuals as Depth-Wise Linear AttentionThe structured-matrix perspective further relates to the sequence-\ndepth duality by showing that existing residual variants a |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| examples/documents/results/2023-annual-report_structure.json | 133 | "title": "Consumer and Community Affairs", |
| examples/documents/results/2023-annual-report_structure.json | 156 | "title": "Community Development", |
| examples/documents/results/PRML_structure.json | 463 | "title": "Relation to least squares", |
| examples/documents/results/PRML_structure.json | 927 | "title": "Relation to logistic regression", |
| examples/documents/results/PRML_structure.json | 1069 | "title": "Relation to directed graphs", |
| examples/documents/results/PRML_structure.json | 1193 | "title": "Relation to K-means", |
| examples/documents/results/q1-fy25-earnings_structure.json | 308 | "summary": "The partial document provides information about The Walt Disney Company's prepared management remarks and a conference call scheduled for February 5, 2025, at 8:30 AM EST/5:30 AM PST, accessible via a live we |
| examples/documents/results/Regulation Best Interest_proposed rule_structure.json | 10 | "summary": "The partial document outlines the Securities and Exchange Commission's (SEC) proposed rule under the Securities Exchange Act of 1934, referred to as \"Regulation Best Interest.\" The rule aims to establish a |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| pageindex/page_index.py | 430 | # merge all pages into one text |
| .github/workflows/backfill-dedupe.yml | 26 | - name: Fetch issues and run dedupe |
| .github/workflows/backfill-dedupe.yml | 53 | echo "Triggering dedupe for issue #$NUMBER" |
| .github/workflows/backfill-dedupe.yml | 54 | gh workflow run issue-dedupe.yml --repo "$REPO" -f issue_number="$NUMBER" |
| .github/workflows/issue-dedupe.yml | 1 | # Detects duplicate issues using Claude Code with the /dedupe command. |
| .github/workflows/issue-dedupe.yml | 20 | group: dedupe-${{ github.event.issue.number \|\| inputs.issue_number }} |
| .github/workflows/issue-dedupe.yml | 53 | prompt: "/dedupe ${{ github.repository }}/issues/${{ steps.issue.outputs.number }}" |
| examples/workspace/_meta.json | 5 | "doc_description": "This document introduces \"Attention Residuals\" (AttnRes) and its scalable variant \"Block AttnRes,\" novel mechanisms for replacing fixed residual accumulation in neural networks with learned, input |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| examples/documents/results/PRML_structure.json | 388 | "title": "The Evidence Approximation", |
| examples/documents/results/PRML_structure.json | 393 | "title": "Evaluation of the evidence function", |
| examples/documents/results/PRML_structure.json | 399 | "title": "Maximizing the evidence function", |
| README.md | 268 | <summary>Or use the BibTeX citation.</summary> |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| .github/workflows/remove-autoclose-label.yml | 2 | # duplicate-flagged issue, signaling that the issue needs re-evaluation. |
| examples/workspace/12345678-abcd-4321-abcd-123456789abc.json | 88 | "summary": "The partial document discusses the implementation and evaluation of Attention Residuals (AttnRes) in transformer architectures. It highlights the memory efficiency and reduced inference latency of AttnRes com |
| examples/workspace/12345678-abcd-4321-abcd-123456789abc.json | 95 | "summary": "The partial document discusses the concept of Attention Residuals (AttnRes) in transformer models, comparing its performance and efficiency against baseline models and other methods. Key points include:\n\n1. |
| examples/workspace/12345678-abcd-4321-abcd-123456789abc.json | 102 | "summary": "The partial document focuses on the development and evaluation of Attention Residuals (AttnRes), a novel mechanism for improving Transformer models. Key points include:\n\n1. **Ablation Studies**: The documen |
| examples/workspace/12345678-abcd-4321-abcd-123456789abc.json | 109 | "summary": "The partial document discusses the evaluation and analysis of Attention Residuals (AttnRes) in Transformer architectures. Key points include:\n\n1. **Architecture Sweep**: A study under fixed compute and para |
| examples/workspace/12345678-abcd-4321-abcd-123456789abc.json | 195 | "content": "Attention ResidualsTECHNICALREPORT\n1 Introduction\nStandard residual connections [12] are thede factobuilding block of modern LLMs [35, 51, 9]. The update hl=\nhl−1+fl−1(hl−1)is widely understood as agradien |
| examples/workspace/12345678-abcd-4321-abcd-123456789abc.json | 227 | "content": "Attention ResidualsTECHNICALREPORT\n20k 40k 60k 80k 100k1.21.31.41.5\nStep(a) Validation Loss\nBaseline\nBlock AttnRes\n0 10 20051015\nTransformer Block Index(b) Output Magnitude\n0 10 200123\nTransformer Blo |
| examples/workspace/12345678-abcd-4321-abcd-123456789abc.json | 231 | "content": "Attention ResidualsTECHNICALREPORT\nTable 4: Ablation on key components of AttnRes (16-layer\nmodel).\nVariant Loss\nBaseline (PreNorm) 1.766\nDenseFormer [36] 1.767\nmHC [59] 1.747\nAttnRes Full 1.737\nw/ in |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| pageindex/client.py | 19 | """Preserve supported Agents SDK prefixes and route other provider paths via LiteLLM.""" |
| pageindex/client.py | 20 | passthrough_prefixes = ("litellm/", "openai/") |
| pageindex/client.py | 33 | For agent-based QA, see examples/agentic_vectorless_rag_demo.py. |
| .github/scripts/autoclose-labeled-issues.js | 39 | 'User-Agent': 'PageIndex-Autoclose/1.0', |
| pageindex/config.yaml | 2 | # model: "anthropic/claude-sonnet-4-6" |
| .github/workflows/backfill-dedupe.yml | 1 | # Backfills duplicate detection for historical issues using Claude Code. |
| .github/workflows/issue-dedupe.yml | 1 | # Detects duplicate issues using Claude Code with the /dedupe command. |
| .github/workflows/issue-dedupe.yml | 49 | - uses: anthropics/claude-code-action@v1 |

## Gap

- Provenance/citation/evidence
- Evaluation/observability
- tests
