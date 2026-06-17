# phonghhd/EvoNet-AI-Core 코드 레벨 분석

생성일: 2026-06-17T23:31:38.072Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (83) |
| stars | 4 |
| language | Python |
| tags | rag, knowledge-base, agent-knowledge |
| files/code/source | 74/57/55 |
| tests/ci | 3/3 |
| local path | sources/phonghhd__EvoNet-AI-Core |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 7 | 4 | app/federated_learning/fl_client.py:5 from torch.utils.data import Dataset, DataLoader |
| Parsing/OCR/document extraction | absent | 0 | 0 |  |
| Chunking/splitting | code | 1 | 1 | app/scripts/code_harvester.py:57 for i, chunk in enumerate(chunks): |
| Embedding/vector index | code | 21 | 15 | app/advanced_rag.py:5 from pinecone import Pinecone |
| Retrieval/search/rerank | code | 15 | 11 | app/advanced_rag.py:32 def retrieve(self, query: str, namespace: str = "security_knowledge_clean", top_k: int = 5) -> List[Dict]: |
| Wiki/graph/entity model | code | 4 | 2 | app/graph_rag.py:10 class GraphRAG: |
| Memory/update lifecycle | code | 21 | 20 | app/advanced_rag.py:15 self.index = self.pc.Index("evonet-memory") |
| Provenance/citation/evidence | doc-only | 1 | 0 | LICENSE.md:102 attribution notices from the Source form of the Work, |
| Evaluation/observability | code | 12 | 6 | app/main.py:67 r"rm -rf", r"eval\s*\(", r"exec\s*\(", |
| Agent/MCP/tool surface | code | 18 | 14 | app/cli.py:13 app = typer.Typer(help="EvoNet CLI - Autonomous AI Security Agent") |

## 의존성 신호

- LLM/app framework: transformers
- Vector/search store: chromadb, pinecone, pinecone-plugin-assistant, pinecone-plugin-interface
- Graph/KG store: neo4j
- Document parsing/OCR: beautifulsoup4
- Eval/observability: opentelemetry-api, opentelemetry-exporter-otlp-proto-common, opentelemetry-exporter-otlp-proto-grpc, opentelemetry-proto, opentelemetry-sdk, opentelemetry-semantic-conventions, prometheus_client

## 주요 파일 후보

### Ingestion/source intake

- `app/federated_learning/fl_client.py`
- `app/scripts/ci_cd_integration.py`
- `app/scripts/code_harvester.py`
- `app/scripts/pinecone_ingest.py`
- `.github/workflows/cve_crawler.yml`
- `.github/workflows/knowledge_builder.yml`
- `README.md`

### Chunking/splitting

- `app/scripts/code_harvester.py`

### Embedding/vector index

- `app/advanced_rag.py`
- `app/dashboard.py`
- `app/graph_rag.py`
- `app/main.py`
- `app/scripts/code_harvester.py`
- `app/scripts/cve_refinery.py`
- `app/scripts/pinecone_ingest.py`
- `app/scripts/self_evolve.py`
- `app/scripts/self_qa.py`
- `app/scripts/system_watchdog.py`
- `app/scripts/threat_alert_system.py`
- `app/scripts/threat_intel_collector.py`
- ... 6 more

### Retrieval/search/rerank

- `app/advanced_rag.py`
- `app/graph_rag.py`
- `app/main.py`
- `app/scripts/advanced_security.py`
- `app/scripts/analyze_patch.py`
- `app/scripts/bug_bounty_hunter.py`
- `app/scripts/hunt_poc.py`
- `app/scripts/system_watchdog.py`
- `app/scripts/threat_intel_collector.py`
- `app/scripts/vector_storage.py`
- `api_server.py`
- `README.md`
- ... 3 more

### Wiki/graph/entity model

- `app/graph_rag.py`
- `app/main.py`
- `LICENSE.md`
- `README.md`

### Memory/update lifecycle

- `app/advanced_rag.py`
- `app/dashboard.py`
- `app/graph_rag.py`
- `app/kg_manager.py`
- `app/main.py`
- `app/patch_approval_api.py`
- `app/scripts/advanced_security.py`
- `app/scripts/auto_patch_generator.py`
- `app/scripts/autonomous_manager.py`
- `app/scripts/code_harvester.py`
- `app/scripts/cve_refinery.py`
- `app/scripts/pinecone_ingest.py`
- ... 6 more

### Provenance/citation/evidence

- `LICENSE.md`

### Evaluation/observability

- `app/main.py`
- `app/federated_learning/fl_client.py`
- `app/scripts/cve_refinery.py`
- `app/scripts/self_evolve.py`
- `app/scripts/system_watchdog.py`
- `api_server.py`
- `tests/test_core.py`
- `README.md`
- `requirements.txt`
- `docs/API.md`
- `docs/ARCHITECTURE.md`
- `docs/DEPLOYMENT.md`

### Agent/MCP/tool surface

- `app/cli.py`
- `app/dashboard.py`
- `app/main.py`
- `app/setup.py`
- `app/rl_environment/blue_team_agent.py`
- `app/scripts/advanced_security.py`
- `app/scripts/analyze_patch.py`
- `app/scripts/cve_refinery.py`
- `app/scripts/multi_cicd_integration.py`
- `app/scripts/multi_modal_ai.py`
- `app/scripts/self_evolve.py`
- `app/scripts/test_api.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| app/federated_learning/fl_client.py | 5 | from torch.utils.data import Dataset, DataLoader |
| app/federated_learning/fl_client.py | 70 | dataloader = DataLoader(dataset, batch_size=batch_size, shuffle=True) |
| app/federated_learning/fl_client.py | 76 | for batch in dataloader: |
| app/federated_learning/fl_client.py | 87 | print(f"FL Epoch {epoch+1}/{epochs} - Loss: {total_loss / max(len(dataloader), 1):.4f}") |
| app/scripts/ci_cd_integration.py | 197 | - name: Upload security reports |
| app/scripts/ci_cd_integration.py | 198 | uses: actions/upload-artifact@v3 |
| app/scripts/code_harvester.py | 35 | print("Starting code ingestion...") |
| app/scripts/pinecone_ingest.py | 37 | def ingest(): |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| app/scripts/code_harvester.py | 57 | for i, chunk in enumerate(chunks): |
| app/scripts/code_harvester.py | 58 | embedding = get_embedding(chunk) |
| app/scripts/code_harvester.py | 68 | "text": chunk[:1000] |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| app/advanced_rag.py | 5 | from pinecone import Pinecone |
| app/advanced_rag.py | 14 | self.pc = Pinecone(api_key=self.pinecone_key) |
| app/advanced_rag.py | 29 | print(f"Embedding error: {e}") |
| app/advanced_rag.py | 38 | vector=query_emb, |
| app/dashboard.py | 139 | from pinecone import Pinecone |
| app/dashboard.py | 140 | pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY")) |
| app/graph_rag.py | 4 | from pinecone import Pinecone |
| app/graph_rag.py | 11 | """Combines Neo4j Knowledge Graph with Pinecone Vector Retrieval for richer context""" |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| app/advanced_rag.py | 32 | def retrieve(self, query: str, namespace: str = "security_knowledge_clean", top_k: int = 5) -> List[Dict]: |
| app/advanced_rag.py | 51 | results = self.retrieve(query, namespace=ns, top_k=top_k) |
| app/advanced_rag.py | 64 | def rerank(self, query: str, documents: List[Dict], context: Dict = None) -> List[Dict]: |
| app/graph_rag.py | 11 | """Combines Neo4j Knowledge Graph with Pinecone Vector Retrieval for richer context""" |
| app/graph_rag.py | 72 | def retrieve(self, query: str, namespace: str = "security_knowledge_clean", top_k: int = 5) -> str: |
| app/graph_rag.py | 99 | ctx = self.retrieve(query, ns, top_k=3) |
| app/main.py | 70 | if re.search(pattern, code_to_check): |
| app/main.py | 229 | print(f"Pinecone retrieval error: {e}") |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| app/graph_rag.py | 10 | class GraphRAG: |
| app/graph_rag.py | 111 | _graph_rag = GraphRAG() |
| app/main.py | 685 | from graph_rag import get_graph_rag |
| LICENSE.md | 12 | "Licensor" shall mean the copyright owner or entity authorized by |
| LICENSE.md | 15 | "Legal Entity" shall mean the union of the acting entity and all |
| LICENSE.md | 16 | other entities that control, are controlled by, or are under common |
| LICENSE.md | 17 | control with that entity. For the purposes of this definition, |
| LICENSE.md | 19 | direction or management of such entity, whether by contract or |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| app/advanced_rag.py | 15 | self.index = self.pc.Index("evonet-memory") |
| app/dashboard.py | 50 | .refresh-btn { background: var(--primary); color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; } |
| app/dashboard.py | 57 | <button class="refresh-btn" onclick="loadData()">Refresh</button> |
| app/dashboard.py | 75 | <div>Memory: <span id="mem">-</span>%</div> |
| app/dashboard.py | 141 | index = pc.Index("evonet-memory") |
| app/graph_rag.py | 15 | self.index = self.pc.Index("evonet-memory") |
| app/kg_manager.py | 53 | MERGE (c:CVE {id: $cve_id}) |
| app/kg_manager.py | 68 | MERGE (w:CWE {id: $cwe_id}) |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| LICENSE.md | 102 | attribution notices from the Source form of the Work, |
| LICENSE.md | 108 | include a readable copy of the attribution notices contained |
| LICENSE.md | 117 | do not modify the License. You may add Your own attribution |
| LICENSE.md | 120 | that such additional attribution notices cannot be construed |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| app/main.py | 67 | r"rm -rf", r"eval\s*\(", r"exec\s*\(", |
| app/main.py | 677 | @app.get("/metrics") |
| app/main.py | 678 | async def metrics(): |
| app/federated_learning/fl_client.py | 89 | self.model.eval() |
| app/scripts/cve_refinery.py | 88 | metrics = cve_data.get("metrics", {}) |
| app/scripts/cve_refinery.py | 89 | if metrics: |
| app/scripts/cve_refinery.py | 91 | if key in metrics and metrics[key]: |
| app/scripts/cve_refinery.py | 92 | cvss_score = metrics[key][0].get('cvssData', {}).get('baseScore') |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| app/cli.py | 13 | app = typer.Typer(help="EvoNet CLI - Autonomous AI Security Agent") |
| app/dashboard.py | 56 | <div><h1>EvoNet-Core Dashboard</h1><p>Autonomous AI Security Agent</p></div> |
| app/main.py | 246 | url = "https://api.groq.com/openai/v1/chat/completions" |
| app/main.py | 509 | # OPENAI-COMPATIBLE ENDPOINTS |
| app/main.py | 579 | "url": "https://api.groq.com/openai/v1/chat/completions", |
| app/setup.py | 18 | description="Autonomous AI Security Agent", |
| app/rl_environment/blue_team_agent.py | 36 | logger.info(f"Training RL agent for {total_timesteps} timesteps") |
| app/rl_environment/blue_team_agent.py | 67 | logger.warning(f"RL agent init failed: {e}") |

## Gap

- Provenance/citation/evidence
